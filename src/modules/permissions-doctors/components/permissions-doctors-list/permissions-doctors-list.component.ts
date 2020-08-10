import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { PermissionsService } from './../../../app-common/services/permissions.service';

@Component({
    selector: 'sb-permissions-doctors-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permissions-doctors-list.component.html',
    styleUrls: ['permissions-doctors-list.component.scss'],
})
export class PermissionsDoctorsListComponent implements OnInit {
    page = 1;
    listDoctors$: any;
    url = environment.url;
    constructor(private permissionsService: PermissionsService) {}
    ngOnInit() {
        this.getListPermissionsCustomers();
    }

    getListPermissionsCustomers() {
        this.listDoctors$ = this.permissionsService
            .getListByRole('doctor', this.page)
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
