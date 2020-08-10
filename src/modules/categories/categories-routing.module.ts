import { SBRouteData } from './../navigation/models/navigation.model';
/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { CategoriesModule } from './categories.module';

/* Containers */
import * as categoriesContainers from './containers';

/* Guards */
import * as categoriesGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: categoriesContainers.CategoriesComponent,
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
    },
    {
        path: 'list',
        canActivate: [],
        component: categoriesContainers.ListComponent,
        data: {
            title: 'List All Categories',
        } as SBRouteData,
    },
    {
        path: 'add',
        canActivate: [],
        component: categoriesContainers.AddComponent,
        data: {
            title: 'Add new category',
        } as SBRouteData,
    },
    {
        path: 'edit/:categoryId',
        canActivate: [],
        component: categoriesContainers.EditComponent,
        data: {
            title: 'Edit category',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [CategoriesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {}
