import { SBRouteData } from './../navigation/models/navigation.model';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { PromotionsModule } from './promotions.module';

/* Containers */
import * as promotionsContainers from './containers';

/* Guards */
import * as promotionsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: promotionsContainers.PromotionsComponent,
    // }
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'list',
        canActivate: [],
        component: promotionsContainers.ListComponent,
        data: {
            title: 'List All Promotions',
        } as SBRouteData,
    },
    {
        path: 'add',
        canActivate: [],
        component: promotionsContainers.AddComponent,
        data: {
            title: 'List All Promotions',
        } as SBRouteData,
    },

];

@NgModule({
    imports: [PromotionsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PromotionsRoutingModule {}
