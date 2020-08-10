import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { PermissionRole } from './../../../app-common/models/app-common.model';
import { PermissionsService } from './../../../app-common/services/permissions.service';

@Component({
    selector: 'sb-permissions-doctors-remove-all',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permissions-doctors-remove-all.component.html',
    styleUrls: ['permissions-doctors-remove-all.component.scss'],
})
export class PermissionsDoctorsRemoveAllComponent implements OnInit {
    permissionsDoctors$: any;
    permissionsIds: Array<number> = [];
    constructor(private permissionsService: PermissionsService, private router: Router) {}
    ngOnInit() {
        this.getPermissionsByUser();
    }
    getPermissionsByUser() {
        this.permissionsDoctors$ = this.permissionsService
            .getListPermissionsByRole('doctor')
            .pipe(map(data => data.data));
    }
    onChange(permissionId: number, event: any) {
        if (event.target.checked) {
            this.permissionsIds.push(permissionId);
        } else {
            const vitri = this.permissionsIds.indexOf(permissionId);
            this.permissionsIds.splice(vitri, 1);
        }
        console.log(this.permissionsIds);
    }
    submit() {
        const permissionRole = new PermissionRole('doctor', this.permissionsIds);
        this.permissionsService.removePermissionsByRole(permissionRole).subscribe(data => {
            if (data.success) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.router.navigate(['/permission-doctor/list']);
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
