import { TestBed } from '@angular/core/testing';

import { PermissionsDoctorsService } from './permissions-doctors.service';

describe('PermissionsDoctorsService', () => {
    let permissionsDoctorsService: PermissionsDoctorsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PermissionsDoctorsService],
        });
        permissionsDoctorsService = TestBed.inject(PermissionsDoctorsService);
    });

    describe('getPermissionsDoctors$', () => {
        it('should return Observable<PermissionsDoctors>', () => {
            permissionsDoctorsService.getPermissionsDoctors$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
