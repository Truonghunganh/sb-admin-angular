import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { DashboardService } from './../../services/dashboard.service';

@Component({
    selector: 'sb-dashboard-total',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-total.component.html',
    styleUrls: ['dashboard-total.component.scss'],
})
export class DashboardTotalComponent implements OnInit {
    TotalCategories$: any;
    TotalCustomers$: any;
    TotalDoctors$: any;
    TotalServices$: any;
    constructor(private dashboardService: DashboardService) {}
    ngOnInit() {
        this.getTatalCategories();
        this.getTatalCustomers();
        this.getTatalDoctors();
        this.getTatalServices();
    }
    getTatalCategories() {
        this.TotalCategories$ = this.dashboardService
            .getTatalCategories()
            .pipe(map(data => data.data.total_categories));
    }
    getTatalCustomers() {
        this.TotalCustomers$ = this.dashboardService
            .getTatalCustomers()
            .pipe(map(data => data.data.total_customers));
    }
    getTatalDoctors() {
        this.TotalDoctors$ = this.dashboardService
            .getTatalDoctors()
            .pipe(map(data => data.data.total_doctors));
    }
    getTatalServices() {
        this.TotalServices$ = this.dashboardService
            .getTatalServices()
            .pipe(map(data => data.data.total_services));
    }
}
