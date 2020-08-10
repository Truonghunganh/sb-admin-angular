import { SBRouteData } from './../navigation/models/navigation.model';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PermissionsDoctorsModule } from './permissions-doctors.module';

/* Containers */
import * as permissionsDoctorsContainers from './containers';

/* Guards */
import * as permissionsDoctorsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: permissionsDoctorsContainers.PermissionsDoctorsComponent,
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'list',
        canActivate: [],
        component: permissionsDoctorsContainers.ListComponent,
        data: {
            title: 'List All Promotions Doctors',
        } as SBRouteData,
    },
    {
        path: 'add-detail/:id',
        canActivate: [],
        component: permissionsDoctorsContainers.AddDetailComponent,
        data: {
            title: 'Add Promotions Doctors',
        } as SBRouteData,
    },
    {
        path: 'remove-detail/:id',
        canActivate: [],
        component: permissionsDoctorsContainers.RemoveDetailComponent,
        data: {
            title: 'Remove Promotions Doctors',
        } as SBRouteData,
    },
    {
        path: 'add-all',
        canActivate: [],
        component: permissionsDoctorsContainers.AddAllComponent,
        data: {
            title: 'Add All Promotions Doctors',
        } as SBRouteData,
    },
    {
        path: 'remove-all',
        canActivate: [],
        component: permissionsDoctorsContainers.RemoveAllComponent,
        data: {
            title: 'Remove All Promotions Doctors',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [PermissionsDoctorsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PermissionsDoctorsRoutingModule {}
