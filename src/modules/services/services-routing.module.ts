import { SBRouteData } from './../navigation/models/navigation.model';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ServicesModule } from './services.module';

/* Containers */
import * as servicesContainers from './containers';

/* Guards */
import * as servicesGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: servicesContainers.ServicesComponent,
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list/:categoryId',
    },
    {
        path: 'list/:categoryId',
        canActivate: [],
        component: servicesContainers.ListComponent,
        data: {
            title: 'List All Service',
        } as SBRouteData,
    },
    {
        path: 'add/:categoryId',
        canActivate: [],
        component: servicesContainers.AddComponent,
        data: {
            title: 'Add Service',
        } as SBRouteData,
    },
    {
        path: 'edit/:serviceId/:categoryId',
        canActivate: [],
        component: servicesContainers.EditComponent,
        data: {
            title: 'Edit Service',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ServicesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ServicesRoutingModule {}
