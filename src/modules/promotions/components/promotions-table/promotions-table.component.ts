import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { PromotionsService } from './../../services/promotions.service';

@Component({
    selector: 'sb-promotions-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './promotions-table.component.html',
    styleUrls: ['promotions-table.component.scss'],
})
export class PromotionsTableComponent implements OnInit {
    promotions$: any;
    page = 1;
    constructor(private promotionsService: PromotionsService) {}
    ngOnInit() {
        this.getPromotions(this.page);
    }
    getPromotions(page: number) {
        this.promotions$ = this.promotionsService
            .getPromotions$(page)
            .pipe(map(data => data.data.promotions));
    }
    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.getPromotions(this.page);
        }
    }
    nextPage() {
        this.page = this.page + 1;
        this.getPromotions(this.page);
    }
}
