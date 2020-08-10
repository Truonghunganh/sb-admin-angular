import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { OrdersService } from './../../services/orders.service';

@Component({
    selector: 'sb-orders-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './orders-list.component.html',
    styleUrls: ['orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
    page = 1;
    listOrders$: any;

    constructor(private ordersService: OrdersService) {}
    ngOnInit() {
        this.getListOrder('', this.page);
    }
    getListOrder(name: string, page: number) {
        this.listOrders$ = this.ordersService
            .getOrders$(name, page)
            .pipe(map(data => data.data.orders));
        this.ordersService.getOrderDetail(1).subscribe(data => console.log(data));
    }
    onSubmit(name: string) {
        this.getListOrder(name, this.page);
    }

    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.getListOrder('', this.page);
        }
    }
    nextPage() {
        this.page = this.page + 1;
        this.getListOrder('', this.page);
    }
}
