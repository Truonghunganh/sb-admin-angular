import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PermissionsCustomersService {
    constructor() {}

    getPermissionsCustomers$(): Observable<{}> {
        return of({});
    }

}
