import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { map } from 'rxjs/operators';

import { DashboardService } from './../../services/dashboard.service';

@Component({
    selector: 'sb-dashboard-chart',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-chart.component.html',
    styleUrls: ['dashboard-chart.component.scss'],
})
export class DashboardChartComponent implements OnInit {
    constructor(private dashboardService: DashboardService) {}
    lineChartDataOB: ChartDataSets[] = [];
    lineChartLabelsSO: any = [];
    lineChartTypeSO = 'pie';

    lineChartDataSO: ChartDataSets[] = [];
    lineChartLabelsOB = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    lineChartOptions = {
        responsive: true,
    };
    lineChartColors: Color[] = [
        {
            borderColor: 'black',
            backgroundColor: 'rgba(255,255,0,0.28)',
        },
    ];
    dataOB: any = ['1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6'];
    SO$: any;
    OB$: any;
    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartTypeOB = 'line';
    dataSO: any = [];
    ngOnInit() {
        this.getSubscriptionOverview();
        this.getOrdersByMonth();
    }
    getSubscriptionOverview() {
        this.dashboardService.getSubscriptionOverview().subscribe(data => {
            if (data.success) {
                for (let i = 0; i < Number(data.data.length); i++) {
                    this.lineChartLabelsSO.push(data.data[i].name);
                    this.dataSO.push(data.data[i].number);
                }
                this.lineChartDataSO = [{ data: this.dataSO, label: this.lineChartLabelsSO }];
            }
        });
        this.SO$ = this.dashboardService.getSubscriptionOverview().pipe(map(data => data.data));
    }
    getOrdersByMonth() {
        this.dashboardService.getOrdersByMonth().subscribe(data => {
            if (data.success) {
                this.lineChartDataOB = [{ data: data.data, label: 'Subscription Overview' }];
            }
        });
        this.OB$ = this.dashboardService.getOrdersByMonth().pipe(map(data => data.data));
    }
}
