/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as permissionsDoctorsComponents from './components';

/* Containers */
import * as permissionsDoctorsContainers from './containers';

/* Guards */
import * as permissionsDoctorsGuards from './guards';

/* Services */
import * as permissionsDoctorsServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...permissionsDoctorsServices.services, ...permissionsDoctorsGuards.guards],
    declarations: [...permissionsDoctorsContainers.containers, ...permissionsDoctorsComponents.components],
    exports: [...permissionsDoctorsContainers.containers, ...permissionsDoctorsComponents.components],
})
export class PermissionsDoctorsModule {}
