import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { PermissionsService } from './../../../app-common/services/permissions.service';

@Component({
    selector: 'sb-permissions-admin-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permissions-admin-list.component.html',
    styleUrls: ['permissions-admin-list.component.scss'],
})
export class PermissionsAdminListComponent implements OnInit {
    page = 1;
    listadmin$: any;
    url = environment.url;
    constructor(private permissionsService: PermissionsService) {}
    ngOnInit() {
        this.getListPermissionsAdmin();
    }
    getListPermissionsAdmin() {
        this.listadmin$ = this.permissionsService
            .getListByRole('admin', this.page)
            .pipe(map(data => data.data.users));
    }
    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.getListPermissionsAdmin();
        }
    }
    nextPage() {
        this.page = this.page + 1;
        this.getListPermissionsAdmin();
    }
}
