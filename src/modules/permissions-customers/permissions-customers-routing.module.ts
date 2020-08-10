import { SBRouteData } from './../navigation/models/navigation.model';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PermissionsCustomersModule } from './permissions-customers.module';

/* Containers */
import * as permissionsCustomersContainers from './containers';

/* Guards */
import * as permissionsCustomersGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: permissionsCustomersContainers.PermissionsCustomersComponent,
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'list',
        canActivate: [],
        component: permissionsCustomersContainers.ListComponent,
        data: {
            title: 'List All Promotions Customers',
        } as SBRouteData,
    },
    {
        path: 'add-detail/:id',
        canActivate: [],
        component: permissionsCustomersContainers.AddDetailComponent,
        data: {
            title: 'Add Promotions Customers',
        } as SBRouteData,
    },
    {
        path: 'remove-detail/:id',
        canActivate: [],
        component: permissionsCustomersContainers.RemoveDetailComponent,
        data: {
            title: 'Remove Promotions Customers',
        } as SBRouteData,
    },
    {
        path: 'add-all',
        canActivate: [],
        component: permissionsCustomersContainers.AddAllComponent,
        data: {
            title: 'Add All Promotions Customers',
        } as SBRouteData,
    },
    {
        path: 'remove-all',
        canActivate: [],
        component: permissionsCustomersContainers.RemoveAllComponent,
        data: {
            title: 'Remove All Promotions Customers',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [PermissionsCustomersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PermissionsCustomersRoutingModule {}
