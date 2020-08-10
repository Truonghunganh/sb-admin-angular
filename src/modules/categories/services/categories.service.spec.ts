import { TestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
    let categoriesService: CategoriesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CategoriesService],
        });
        categoriesService = TestBed.inject(CategoriesService);
    });

    describe('getCategories$', () => {
        it('should return Observable<Categories>', () => {
            categoriesService.getCategories$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
