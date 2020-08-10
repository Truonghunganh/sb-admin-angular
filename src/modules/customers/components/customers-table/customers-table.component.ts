import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { CustomersService } from './../../services/customers.service';

@Component({
    selector: 'sb-customers-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './customers-table.component.html',
    styleUrls: ['customers-table.component.scss'],
})
export class CustomersTableComponent implements OnInit {
    page = 1;
    status = 1;
    customers$: any;
    url = environment.url;
    constructor(private customersService: CustomersService) {}
    ngOnInit() {
        this.getCustomers();
    }

    getCustomers() {
        this.customers$ = this.customersService
            .getCustomers$(this.page, this.status)
            .pipe(map(data => data.data.users));
    }
    ChangeStatus() {
        this.status = this.status === 1 ? 0 : 1;
        this.getCustomers();
    }
    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.getCustomers();
        }
    }
    nextPage() {
        this.page = this.page + 1;
        this.getCustomers();
    }
}
