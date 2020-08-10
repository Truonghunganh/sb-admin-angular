import { TestBed } from '@angular/core/testing';

import { PermissionsAdminGuard } from './permissions-admin.guard';

describe('_Template Module Guards', () => {
    let permissionsAdminGuard: PermissionsAdminGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [PermissionsAdminGuard],
        });
        permissionsAdminGuard = TestBed.inject(PermissionsAdminGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            permissionsAdminGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
