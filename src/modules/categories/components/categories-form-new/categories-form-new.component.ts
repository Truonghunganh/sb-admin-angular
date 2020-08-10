import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Category } from './../../models/categories.model';
import { CategoriesService } from './../../services/categories.service';

@Component({
    selector: 'sb-categories-form-new',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './categories-form-new.component.html',
    styleUrls: ['categories-form-new.component.scss'],
})
export class CategoriesFormNewComponent implements OnInit {
    constructor(private categoriesService: CategoriesService, private router: Router) {}
    @ViewChild('myPond') myPond: any;
    pondOptions = {
        class: 'my-filepond',
        multiple: true,
        labelIdle: 'Drop files here',
    };
    imageId = 0;
    fileData: any;
    pondHandleInit() {}
    pondHandleAddFile(event: any) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.categoriesService.uploadFile(file).subscribe(data => {
                if (data.success) {
                    this.imageId = data.data.id;
                    console.log(this.imageId);
                }
            });
        }
    }

    ngOnInit() {}
    addCategory(name: string, description: string) {
        if (this.imageId === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'you have not selected the image',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }
        const category = new Category(name, description, this.imageId);
        this.categoriesService.addCategory(category).subscribe(data => {
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
