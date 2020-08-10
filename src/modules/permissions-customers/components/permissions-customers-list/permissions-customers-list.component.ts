import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { PermissionsService } from './../../../app-common/services/permissions.service';

@Component({
    selector: 'sb-permissions-customers-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permissions-customers-list.component.html',
    styleUrls: ['permissions-customers-list.component.scss'],
})
export class PermissionsCustomersListComponent implements OnInit {
    page = 1;
    listCustomers$: any;
    url = environment.url;
    constructor(private permissionsService: PermissionsService) {}
    ngOnInit() {
        this.getListPermissionsCustomers();
    }

    getListPermissionsCustomers() {
        this.listCustomers$ = this.permissionsService
            .getListByRole('customer', this.page)
            .pipe(map(data => data.data.users));
    }
    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.getListPermissionsCustomers();
        }
    }
    nextPage() {
        this.page = this.page + 1;
        this.getListPermissionsCustomers();
    }
}
