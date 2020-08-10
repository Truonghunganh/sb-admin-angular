import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PermissionsDoctorsService {
    constructor() {}

    getPermissionsDoctors$(): Observable<{}> {
        return of({});
    }

}
