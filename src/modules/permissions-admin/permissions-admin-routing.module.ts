import { SBRouteData } from './../navigation/models/navigation.model';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PermissionsAdminModule } from './permissions-admin.module';

/* Containers */
import * as permissionsAdminContainers from './containers';

/* Guards */
import * as permissionsAdminGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: permissionsAdminContainers.PermissionsAdminComponent,
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'list',
        canActivate: [],
        component: permissionsAdminContainers.ListComponent,
        data: {
            title: 'List All Promotions Admin',
        } as SBRouteData,
    },
    {
        path: 'add-detail/:id',
        canActivate: [],
        component: permissionsAdminContainers.AddDetailComponent,
        data: {
            title: 'Add Promotions Admin',
        } as SBRouteData,
    },
    {
        path: 'remove-detail/:id',
        canActivate: [],
        component: permissionsAdminContainers.RemoveDetailComponent,
        data: {
            title: 'Remove Promotions Admin',
        } as SBRouteData,
    },
    {
        path: 'add-all',
        canActivate: [],
        component: permissionsAdminContainers.AddAllComponent,
        data: {
            title: 'Add All Promotions Admin',
        } as SBRouteData,
    },
    {
        path: 'remove-all',
        canActivate: [],
        component: permissionsAdminContainers.RemoveAllComponent,
        data: {
            title: 'Remove All Promotions Admin',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [PermissionsAdminModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PermissionsAdminRoutingModule {}
