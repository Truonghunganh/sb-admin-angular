import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { PermissionRole } from './../../../app-common/models/app-common.model';
import { PermissionsService } from './../../../app-common/services/permissions.service';

@Component({
    selector: 'sb-permissions-doctors-add-all',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permissions-doctors-add-all.component.html',
    styleUrls: ['permissions-doctors-add-all.component.scss'],
})
export class PermissionsDoctorsAddAllComponent implements OnInit {
    userId = 0;
    permissionsIDs: Array<number> = [];
    nonePermissionByDoctor$: any;
    constructor(private permissionsService: PermissionsService, private router: Router) {}
    ngOnInit() {
        this.getListNonePermissionsByRole();
    }
    getListNonePermissionsByRole() {
        this.nonePermissionByDoctor$ = this.permissionsService
            .getListNonePermissionsByRole('doctor')
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
        const permissionRole = new PermissionRole('doctor', this.permissionsIDs);
        this.permissionsService.addPermissionsByRole(permissionRole).subscribe(data => {
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
