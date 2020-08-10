import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { PermissionRole } from './../../../app-common/models/app-common.model';
import { PermissionsService } from './../../../app-common/services/permissions.service';

@Component({
    selector: 'sb-permissions-customers-add-all',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permissions-customers-add-all.component.html',
    styleUrls: ['permissions-customers-add-all.component.scss'],
})
export class PermissionsCustomersAddAllComponent implements OnInit {
    userId = 0;
    permissionsIDs: Array<number> = [];
    nonePermissionByCustoner$: any;
    constructor(private permissionsService: PermissionsService, private router: Router) {}
    ngOnInit() {
        this.getListNonePermissionsByRole();
    }
    getListNonePermissionsByRole() {
        this.nonePermissionByCustoner$ = this.permissionsService
            .getListNonePermissionsByRole('customer')
            .pipe(map(data => data.data));
    }
    onChange(id: number, event: any) {
        if (event.target.checked) {
            this.permissionsIDs.push(id);
        } else {
            const vitri = this.permissionsIDs.indexOf(id);
            this.permissionsIDs.splice(vitri, 1);
        }
        console.log(this.permissionsIDs);
    }
    submit() {
        const permissionRole = new PermissionRole('customer', this.permissionsIDs);
        this.permissionsService.addPermissionsByRole(permissionRole).subscribe(data => {
            if (data.success) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.router.navigate(['/permission-customer/list']);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: data.message,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                });
            }
        });
    }
}
