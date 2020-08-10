import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-remove-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './remove-detail.component.html',
    styleUrls: ['remove-detail.component.scss'],
})
export class RemoveDetailComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
