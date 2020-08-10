import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { environment } from './../../../../environments/environment';
import { CategoriesService } from './../../services/categories.service';

@Component({
    selector: 'sb-categories-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './categories-table.component.html',
    styleUrls: ['categories-table.component.scss'],
})
export class CategoriesTableComponent implements OnInit {
    categories$: any;
    url = environment.url;
    constructor(private categoriesService: CategoriesService, private router: Router) {}
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this.categories$ = this.categoriesService
            .getCategories$()
            .pipe(map(data => data.data.categories));
    }
    deleteCategory(categoryId: number) {
        this.router.navigate(['/categories/list']);
        Swal.fire({
            title: 'Are you sure?',
            text: `do you want to delete this category có `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async result => {
            if (result.value) {
                this.categoriesService.deleteCategory(categoryId).subscribe(async data => {
                    if (data.success) {
                        await Swal.fire({
                            icon: 'success',
                            title: data.message,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.router.navigate(['/categories/list']);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: data.message,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
            } else {
                await Swal.fire({
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.router.navigate(['/categories/list']);
            }
        });
    }
}
