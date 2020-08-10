import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { OrdersService } from './../../services/orders.service';

@Component({
    selector: 'sb-orders-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './orders-detail.component.html',
    styleUrls: ['orders-detail.component.scss'],
})
export class OrdersDetailComponent implements OnInit {
    order$: any;
    order: any;
    url = environment.url;
    constructor(private ordersService: OrdersService, private activatedRoute: ActivatedRoute) {}
    ngOnInit() {
        const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getOrder(id);
    }
    getOrder(id: number) {
        this.order$ = this.ordersService
            .getOrderDetail(id)
            .pipe(map(data => (this.order = data.data)));
    }
}
