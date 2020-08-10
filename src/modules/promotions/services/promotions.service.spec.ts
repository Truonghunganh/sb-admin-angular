import { TestBed } from '@angular/core/testing';

import { PromotionsService } from './promotions.service';

describe('PromotionsService', () => {
    let promotionsService: PromotionsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PromotionsService],
        });
        promotionsService = TestBed.inject(PromotionsService);
    });

    describe('getPromotions$', () => {
        it('should return Observable<Promotions>', () => {
            promotionsService.getPromotions$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
