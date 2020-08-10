import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'customers',
        loadChildren: () =>
            import('modules/customers/customers-routing.module').then(
                m => m.CustomersRoutingModule
            ),
    },
    {
        path: 'doctors',
        loadChildren: () =>
            import('modules/doctors/doctors-routing.module').then(m => m.DoctorsRoutingModule),
    },
    {
        path: 'categories',
        loadChildren: () =>
            import('modules/categories/categories-routing.module').then(
                m => m.CategoriesRoutingModule
            ),
    },
    {
        path: 'services',
        loadChildren: () =>
            import('modules/services/services-routing.module').then(m => m.ServicesRoutingModule),
    },
    {
        path: 'promotions',
        loadChildren: () =>
            import('modules/promotions/promotions-routing.module').then(
                m => m.PromotionsRoutingModule
            ),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'permission-admin',
        loadChildren: () =>
            import('modules/permissions-admin/permissions-admin-routing.module').then(
                m => m.PermissionsAdminRoutingModule
            ),
    },
    {
        path: 'permission-customer',
        loadChildren: () =>
            import('modules/permissions-customers/permissions-customers-routing.module').then(
                m => m.PermissionsCustomersRoutingModule
            ),
    },
    {
        path: 'permission-doctor',
        loadChildren: () =>
            import('modules/permissions-doctors/permissions-doctors-routing.module').then(
                m => m.PermissionsDoctorsRoutingModule
            ),
    },
    {
        path: 'notifications',
        loadChildren: () =>
            import('modules/notification/notification-routing.module').then(
                m => m.NotificationRoutingModule
            ),
    },
    {
        path: 'orders',
        loadChildren: () =>
            import('modules/orders/orders-routing.module').then(m => m.OrdersRoutingModule),
    },

    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
