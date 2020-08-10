import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-add-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './add-detail.component.html',
    styleUrls: ['add-detail.component.scss'],
})
export class AddDetailComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
