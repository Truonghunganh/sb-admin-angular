import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { Category } from './../../models/categories.model';
import { CategoriesService } from './../../services/categories.service';

@Component({
    selector: 'sb-categories-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './categories-edit.component.html',
    styleUrls: ['categories-edit.component.scss'],
})
export class CategoriesEditComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private categoriesService: CategoriesService
    ) {}
    url = environment.url;
    category: any;
    category$: any;
    categoryId = 0;
    @ViewChild('myPond') myPond: any;
    pondOptions = {
        class: 'my-filepond',
        multiple: true,
        labelIdle: 'Drop files here',
        acceptedFileTypes: 'image/jpeg, image/png',
    };
    imageId = 0;
    ngOnInit() {
        this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('categoryId'));
        console.log(this.categoryId);
        this.getCategory(this.categoryId);
    }
    pondHandleInit() {}
    pondHandleAddFile(event: any) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.categoriesService.uploadFile(file).subscribe(data => {
                if (data.success) {
                    this.imageId = data.data.id;
                    console.log(this.imageId);
                } else {
                    Swal.fire('please , you select the image again');
                }
            });
        } else {
            Swal.fire('please , you select the image again');
        }
    }
    getCategory(categoryId: number) {
        this.category$ = this.categoriesService
            .getCategory$(categoryId)
            .pipe(map(data => (this.category = data.data)));
    }
    upDateCategory() {
        if (this.imageId === 0) {
            const category = new Category(this.category.name, this.category.description);
            this.updateCategory(category);
        } else {
            const category = new Category(
                this.category.name,
                this.category.description,
                this.imageId
            );
            this.updateCategory(category);
        }
    }
    updateCategory(category: Category) {
        this.categoriesService.upDateCategory(category, this.categoryId).subscribe(data => {
            if (data.success) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });

                this.router.navigate(['/categories/list']);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: data.message,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                });
            }
        });
    }
}
