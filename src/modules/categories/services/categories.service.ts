import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AppCommonService } from './../../app-common/services/app-common.service';
import { Category } from './../models/categories.model';

@Injectable()
export class CategoriesService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    getCategories$(): Observable<any> {
        return this.http.get<any>('/api/categories', this.appCommonService.httpOptions).pipe(
            tap(data => of(data)),
            catchError(this.appCommonService.errorHandler)
        );
    }
    uploadFile(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post('/api/files', formData, this.appCommonService.httpOptions).pipe(
            tap(data => of(data)),
            catchError(this.appCommonService.errorHandler)
        );
    }
    addCategory(category: Category): Observable<any> {
        return this.http
            .post<any>('/api/categories', category, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    getCategory$(categoryId: number): Observable<any> {
        return this.http
            .get<any>(`/api/categories/${categoryId}`, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    upDateCategory(category: Category, categoryId: number): Observable<any> {
        return this.http
            .put<any>(`/api/categories/${categoryId}`, category, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
    deleteCategory(categoryId: number): Observable<any> {
        return this.http
            .delete<any>(`/api/categories/${categoryId}`, this.appCommonService.httpOptions)
            .pipe(
                tap(data => of(data)),
                catchError(this.appCommonService.errorHandler)
            );
    }
}
