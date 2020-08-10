import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { environment } from './../../../../environments/environment';
import { ServicesService } from './../../services/services.service';

@Component({
    selector: 'sb-services-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './services-table.component.html',
    styleUrls: ['services-table.component.scss'],
})
export class ServicesTableComponent implements OnInit {
    categoryId = 0;
    page = 1;
    url = environment.url;
    services$: any;
    categories$: any;
    categoryName = '';
    constructor(
        private activatedRoute: ActivatedRoute,
        private servicesService: ServicesService,
        private router: Router,
        private location: Location
    ) {}
    ngOnInit() {
        this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('categoryId'));
        console.log(this.categoryId);
        this.getServices(this.categoryId, this.page);
        this.getCategories();
        this.getCategoryName(this.categoryId);
    }
    getCategoryName(categoryId: number) {
        this.servicesService
            .getCategory$(categoryId)
            .subscribe(data => (this.categoryName = data.data.name));
    }
    onChangeCategory(categoryId: number) {
        this.categoryId = Number(categoryId);
        this.getServices(this.categoryId, 1);
        this.getCategoryName(this.categoryId);
        this.location.go(`services/list/${this.categoryId}`);
    }
    getServices(categoryId: number, page: number) {
        this.services$ = this.servicesService
            .getServices$(categoryId, page)
            .pipe(map(data => data.data.services));
    }
    getCategories() {
        this.categories$ = this.servicesService
            .getCategories$()
            .pipe(map(data => data.data.categories));
    }
    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.getServices(this.categoryId, this.page);
        }
    }
    nextPage() {
        this.page = this.page + 1;
        this.getServices(this.categoryId, this.page);
    }

    deleteService(serviceId: number) {
        Swal.fire({
            title: 'Are you sure?',
            text: `do you want to delete this service có id = ` + serviceId,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.value) {
                this.servicesService.deleteService(serviceId).subscribe(async data => {
                    if (data.success) {
                        this.router.navigate(['/categories/list']);
                        await Swal.fire({
                            icon: 'success',
                            title: data.message,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.router.navigate(['/services/list/' + this.categoryId]);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: data.message,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
            }
        });
    }
}
