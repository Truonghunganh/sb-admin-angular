import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Service } from './../../models/services.model';
import { ServicesService } from './../../services/services.service';

@Component({
    selector: 'sb-services-add',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './services-add.component.html',
    styleUrls: ['services-add.component.scss'],
})
export class ServicesAddComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private servicesService: ServicesService,
        private router: Router
    ) {}
    categoryId = 0;
    imageId = 0;

    @ViewChild('myPond') myPond: any;
    pondOptions = {
        class: 'my-filepond',
        multiple: true,
        labelIdle: 'Drop files here',
        acceptedFileTypes: 'image/jpeg, image/png',
    };
    ngOnInit() {
        this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('categoryId'));

    }
    addService(name: string, description: string, price1: string) {
        const price = Number(price1);
        if (price < 1000) {
            Swal.fire({
                icon: 'error',
                text: 'price>1000',
            });
            return;
        }
        if (this.imageId === 0) {
            Swal.fire({
                icon: 'error',
                text: 'you have not selected images',
            });
            return;
        }
        const categoryId: number[] = [];
        categoryId.push(this.categoryId);
        const server = new Service(name, description, price, this.imageId, categoryId);
        this.servicesService.addService(server).subscribe(data => {
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
}
