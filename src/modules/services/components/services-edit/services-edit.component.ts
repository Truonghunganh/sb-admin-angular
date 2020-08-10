import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { Service } from './../../models/services.model';
import { ServicesService } from './../../services/services.service';

@Component({
    selector: 'sb-services-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './services-edit.component.html',
    styleUrls: ['services-edit.component.scss'],
})
export class ServicesEditComponent implements OnInit {
    service: any;
    service$: any;
    serviceId = 0;
    categoryId = 0;
    url = environment.url;
    imageId = 0;

    @ViewChild('myPond') myPond: any;
    pondOptions = {
        class: 'my-filepond',
        multiple: true,
        labelIdle: 'Drop files here',
        acceptedFileTypes: 'image/jpeg, image/png',
    };
    pondHandleInit() {}
    pondHandleAddFile(event: any) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.servicesService.uploadFile(file).subscribe(data => {
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
    constructor(
        private activatedRoute: ActivatedRoute,
        private servicesService: ServicesService,
        private router: Router
    ) {}
    ngOnInit() {
        this.serviceId = Number(this.activatedRoute.snapshot.paramMap.get('serviceId'));
        this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('categoryId'));
        this.getService(this.serviceId);
    }
    getService(serviceId: number) {
        this.service$ = this.servicesService
            .getService(serviceId)
            .pipe(map(data => (this.service = data.data)));
    }
    updateService() {
        console.log(this.service.price);

        if (this.service.price < 1000) {
            Swal.fire({
                icon: 'error',
                text: 'price>1000',
            });
            return;
        }
        const category_ids: any = [];
        category_ids.push(this.categoryId);
        if (this.imageId !== 0) {
            const service = new Service(
                this.service.name,
                this.service.description,
                this.service.price,
                this.imageId,
                category_ids
            );
            this.updateService1(service);
        } else {
            const service = new Service(
                this.service.name,
                this.service.description,
                this.service.price,
                this.service.image.id,
                category_ids
            );
            this.updateService1(service);
        }
    }
    updateService1(service: any) {
        this.servicesService.updateService(service, this.serviceId).subscribe(data => {
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.router.navigate(['/services/list/' + this.categoryId]);
            } else {
                Swal.fire({
                    icon: 'error',
                    text: data.message,
                });
            }
        });
    }
}
