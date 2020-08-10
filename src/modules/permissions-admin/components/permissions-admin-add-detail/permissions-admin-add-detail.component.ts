import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { PermissionUser } from './../../../app-common/models/app-common.model';
import { PermissionsService } from './../../../app-common/services/permissions.service';

@Component({
    selector: 'sb-permissions-admin-add-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './permissions-admin-add-detail.component.html',
    styleUrls: ['permissions-admin-add-detail.component.scss'],
})
export class PermissionsAdminAddDetailComponent implements OnInit {
    userId = 0;
    permissionsIDs: Array<number> = [];
    nonePermissionByAdmin$: any;
    constructor(
        private activatedRoute: ActivatedRoute,
        private permissionsService: PermissionsService,
        private router: Router
    ) {}
    ngOnInit() {
        this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getNonePermissionsByUser(this.userId);
    }
    getNonePermissionsByUser(userId: number) {
        this.nonePermissionByAdmin$ = this.permissionsService
            .getNonePermissionsByUser(userId)
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
        const permissionUser = new PermissionUser(this.userId, this.permissionsIDs, 'granted');
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
