import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PermissionsAdminService {
    constructor() {}

    getPermissionsAdmin$(): Observable<{}> {
        return of({});
    }

}
