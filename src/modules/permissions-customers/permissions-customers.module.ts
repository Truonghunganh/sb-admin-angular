/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as permissionsCustomersComponents from './components';

/* Containers */
import * as permissionsCustomersContainers from './containers';

/* Guards */
import * as permissionsCustomersGuards from './guards';

/* Services */
import * as permissionsCustomersServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...permissionsCustomersServices.services, ...permissionsCustomersGuards.guards],
    declarations: [...permissionsCustomersContainers.containers, ...permissionsCustomersComponents.components],
    exports: [...permissionsCustomersContainers.containers, ...permissionsCustomersComponents.components],
})
export class PermissionsCustomersModule {}
