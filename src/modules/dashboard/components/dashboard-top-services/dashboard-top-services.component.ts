import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { DashboardService } from './../../services/dashboard.service';

@Component({
    selector: 'sb-dashboard-top-services',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-top-services.component.html',
    styleUrls: ['dashboard-top-services.component.scss'],
})
export class DashboardTopServicesComponent implements OnInit {
    TopServices$: any;
    url = environment.url;
    constructor(private dashboardService: DashboardService) {}
    ngOnInit() {
        this.getTopServices();
    }
    getTopServices() {
        this.TopServices$ = this.dashboardService.getTopServices().pipe(map(data => data.data));
      
    }
}
