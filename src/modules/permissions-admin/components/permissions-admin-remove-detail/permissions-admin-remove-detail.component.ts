import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { PermissionUser } from './../../../app-common/models/app-common.model';
import { PermissionsService } from './../../../app-common/services/permissions.service';
@Component({
    selector: 'sb-permissions-admin-remove-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permissions-admin-remove-detail.component.html',
    styleUrls: ['permissions-admin-remove-detail.component.scss'],
})
export class PermissionsAdminRemoveDetailComponent implements OnInit {
    userId = 0;
    permissionsAdmin$: any;
    permissionsIds: Array<number> = [];
    constructor(
        private permissionsService: PermissionsService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}
    ngOnInit() {
        this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getPermissionsByUser(this.userId);
    }
    getPermissionsByUser(userId: number) {
        this.permissionsAdmin$ = this.permissionsService
            .getPermissionsByUser(userId)
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
        const permissionUser = new PermissionUser(this.userId, this.permissionsIds, 'denied');
        this.permissionsService.addPermissionsByUser(permissionUser).subscribe(data => {
            if (data.success) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                this.router.navigate(['/permission-admin/list']);
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
