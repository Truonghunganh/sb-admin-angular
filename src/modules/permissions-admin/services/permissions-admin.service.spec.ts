import { TestBed } from '@angular/core/testing';

import { PermissionsAdminService } from './permissions-admin.service';

describe('PermissionsAdminService', () => {
    let permissionsAdminService: PermissionsAdminService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PermissionsAdminService],
        });
        permissionsAdminService = TestBed.inject(PermissionsAdminService);
    });

    describe('getPermissionsAdmin$', () => {
        it('should return Observable<PermissionsAdmin>', () => {
            permissionsAdminService.getPermissionsAdmin$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
