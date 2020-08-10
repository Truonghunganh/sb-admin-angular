/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as permissionsAdminComponents from './components';

/* Containers */
import * as permissionsAdminContainers from './containers';

/* Guards */
import * as permissionsAdminGuards from './guards';

/* Services */
import * as permissionsAdminServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...permissionsAdminServices.services, ...permissionsAdminGuards.guards],
    declarations: [...permissionsAdminContainers.containers, ...permissionsAdminComponents.components],
    exports: [...permissionsAdminContainers.containers, ...permissionsAdminComponents.components],
})
export class PermissionsAdminModule {}
