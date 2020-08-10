import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Promotion } from './../../models/promotions.model';
import { PromotionsService } from './../../services/promotions.service';

@Component({
    selector: 'sb-promotions-add',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './promotions-add.component.html',
    styleUrls: ['promotions-add.component.scss'],
})
export class PromotionsAddComponent implements OnInit {
    constructor(private promotionsService: PromotionsService, private router: Router) {}
    ngOnInit() {}
    addPromotion(name: string, startdate: string, enddate: string, discount: string) {
        console.log(name, startdate, enddate, discount);
        const promotion = new Promotion(name, startdate, enddate, discount);
        this.promotionsService.addPromotion(promotion).subscribe(data => {
            if (data.success) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log(1);

                this.router.navigate(['/promotions/list']);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: data.message,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                });
                console.log(2);
            }
        });
    }
}
