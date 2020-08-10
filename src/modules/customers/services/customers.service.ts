import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppCommonService } from '@common/services';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable()
export class CustomersService {
    constructor(private http: HttpClient, private appCommonService: AppCommonService) {}

    getCustomers$(page: number, status: number): Observable<any> {
        return this.http
            .get<any>(
                `/api/users?role_name=Customer&page=${page}&status=${status}`,
                this.appCommonService.httpOptions
            )
            .pipe(
                tap(data => of(data)),
                catchError(this.errorHandler)
            );
    }
    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'Serve error');
    }
}
