import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { environment } from 'environments/environment';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class AppCommonService {
    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}
    public httpOptions = {
        headers: new HttpHeaders({
            Authorization: `Bearer ${JSON.parse(this.storage.get('admin')).token}`,
            'Access-Control-Allow-Credentials': 'true',
            'Api-Key': `${environment.apiKey}`,
        }),
    };

    getAppCommon$(): Observable<{}> {
        return of({});
    }
    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'Serve error');
    }
}
