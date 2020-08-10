/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as promotionsComponents from './components';

/* Containers */
import * as promotionsContainers from './containers';

/* Guards */
import * as promotionsGuards from './guards';

/* Services */
import * as promotionsServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...promotionsServices.services, ...promotionsGuards.guards],
    declarations: [...promotionsContainers.containers, ...promotionsComponents.components],
    exports: [...promotionsContainers.containers, ...promotionsComponents.components],
})
export class PromotionsModule {}
