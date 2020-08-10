import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AppCommonService } from './../../app-common/services/app-common.service';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    getDashboard$(): Observable<{}> {
        return of({});
    }
    getTatalCategories(): Observable<any> {
        return this.http
            .get<any>('/api/dashboard/total-categories', this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    getTatalCustomers(): Observable<any> {
        return this.http
            .get<any>('/api/dashboard/total-customers', this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    getTatalDoctors(): Observable<any> {
        return this.http
            .get<any>('/api/dashboard/total-doctors', this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    getTatalServices(): Observable<any> {
        return this.http
            .get<any>('/api/dashboard/total-services', this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    getTopServices(): Observable<any> {
        return this.http
            .get<any>('/api/dashboard/top-services', this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    getOrdersByMonth(): Observable<any> {
        return this.http
            .get<any>('/api/dashboard/orders-by-month', this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    getSubscriptionOverview(): Observable<any> {
        return this.http
            .get<any>('/api/dashboard/subscription-overview', this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
}
