import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppCommonService } from '@common/services';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class OrdersService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    getOrders$(name: string, page: number): Observable<any> {
        return this.http
            .get<any>(
                `/api/orders?service_name=${name}&&page=${page}`,
                this.appCommonService.httpOptions
            )
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    getOrderDetail(orderId: number): Observable<any> {
        return this.http
            .get<any>(`/api/orders/detail/${orderId}`, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
}
