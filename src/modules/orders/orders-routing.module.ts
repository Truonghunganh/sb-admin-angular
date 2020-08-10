import { SBRouteData } from '@modules/navigation/models';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { OrdersModule } from './orders.module';

/* Containers */
import * as ordersContainers from './containers';

/* Guards */
import * as ordersGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'list',
        canActivate: [],
        component: ordersContainers.ListComponent,
        data: {
            title: 'List Orders',
        } as SBRouteData,
    },
    {
        path: 'detail/:id',
        canActivate: [],
        component: ordersContainers.DetailComponent,
        data: {
            title: 'Detail Orders',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [OrdersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class OrdersRoutingModule {}
