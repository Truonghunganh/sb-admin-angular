import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AppCommonService } from './../../app-common/services/app-common.service';
import { Promotion } from './../models/promotions.model';

@Injectable()
export class PromotionsService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    getPromotions$(page: number): Observable<any> {
        return this.http
            .get<any>(`/api/promotions?page=${page}`, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    addPromotion(promotion: Promotion): Observable<any> {
        return this.http
            .post<any>(`/api/promotions`, promotion, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
}
