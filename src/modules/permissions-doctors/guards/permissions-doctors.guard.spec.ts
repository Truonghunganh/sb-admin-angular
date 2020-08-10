import { TestBed } from '@angular/core/testing';

import { PermissionsDoctorsGuard } from './permissions-doctors.guard';

describe('_Template Module Guards', () => {
    let permissionsDoctorsGuard: PermissionsDoctorsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [PermissionsDoctorsGuard],
        });
        permissionsDoctorsGuard = TestBed.inject(PermissionsDoctorsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            permissionsDoctorsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
