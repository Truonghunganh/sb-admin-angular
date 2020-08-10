import { TestBed } from '@angular/core/testing';

import { PromotionsGuard } from './promotions.guard';

describe('_Template Module Guards', () => {
    let promotionsGuard: PromotionsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [PromotionsGuard],
        });
        promotionsGuard = TestBed.inject(PromotionsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            promotionsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
