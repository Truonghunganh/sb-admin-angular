import { TestBed } from '@angular/core/testing';

import { PermissionsCustomersService } from './permissions-customers.service';

describe('PermissionsCustomersService', () => {
    let permissionsCustomersService: PermissionsCustomersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PermissionsCustomersService],
        });
        permissionsCustomersService = TestBed.inject(PermissionsCustomersService);
    });

    describe('getPermissionsCustomers$', () => {
        it('should return Observable<PermissionsCustomers>', () => {
            permissionsCustomersService.getPermissionsCustomers$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
