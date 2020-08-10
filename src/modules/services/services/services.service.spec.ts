import { TestBed } from '@angular/core/testing';

import { ServicesService } from './services.service';

describe('ServicesService', () => {
    let servicesService: ServicesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ServicesService],
        });
        servicesService = TestBed.inject(ServicesService);
    });

    describe('getServices$', () => {
        it('should return Observable<Services>', () => {
            servicesService.getServices$(1, 1).subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
