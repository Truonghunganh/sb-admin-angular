import { AddAllComponent } from './add-all/add-all.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { ListComponent } from './list/list.component';
import { RemoveAllComponent } from './remove-all/remove-all.component';
import { RemoveDetailComponent } from './remove-detail/remove-detail.component';

export const containers = [
    ListComponent,
    AddAllComponent,
    AddDetailComponent,
    RemoveDetailComponent,
    RemoveAllComponent,
];

export * from './list/list.component';
export * from './add-all/add-all.component';
export * from './add-detail/add-detail.component';
export * from './remove-detail/remove-detail.component';
export * from './remove-all/remove-all.component';
