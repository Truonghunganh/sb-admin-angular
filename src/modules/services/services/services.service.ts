import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AppCommonService } from './../../app-common/services/app-common.service';

@Injectable()
export class ServicesService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    getServices$(categoryId: number, page: number): Observable<any> {
        return this.http
            .get<any>(
                `/api/services?category_id=${categoryId}&page=${page}`,
                this.appCommonService.httpOptions
            )
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    addService(service: any): Observable<any> {
        return this.http.post(`/api/services`, service, this.appCommonService.httpOptions).pipe(
            tap(data => of(data)),
            catchError(this.appCommonService.errorHandler)
        );
    }
    updateService(service: any, serviceId: number): Observable<any> {
        return this.http
            .put(`/api/services/${serviceId}`, service, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    uploadFile(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post<any>(`/api/files`, formData, this.appCommonService.httpOptions).pipe(
            tap(data => of(data)),
            catchError(this.appCommonService.errorHandler)
        );
    }
    getService(serviceId: number): Observable<any> {
        return this.http
            .get<any>(`/api/services/${serviceId}`, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    deleteService(serviceId: number): Observable<any> {
        return this.http
            .delete<any>(`/api/services/${serviceId}`, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    // Category
    getCategory$(categoryId: number): Observable<any> {
        return this.http
            .get<any>(`/api/categories/${categoryId}`, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    getCategories$(): Observable<any> {
        return this.http.get<any>('/api/categories', this.appCommonService.httpOptions).pipe(
            tap(data => of(data)),
            catchError(this.appCommonService.errorHandler)
        );
    }
}
