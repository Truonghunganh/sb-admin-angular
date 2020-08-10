import { TestBed } from '@angular/core/testing';

import { PermissionsCustomersGuard } from './permissions-customers.guard';

describe('_Template Module Guards', () => {
    let permissionsCustomersGuard: PermissionsCustomersGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [PermissionsCustomersGuard],
        });
        permissionsCustomersGuard = TestBed.inject(PermissionsCustomersGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            permissionsCustomersGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
