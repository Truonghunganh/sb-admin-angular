import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-remove-all',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './remove-all.component.html',
    styleUrls: ['remove-all.component.scss'],
})
export class RemoveAllComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
