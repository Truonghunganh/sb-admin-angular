import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-add-all',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './add-all.component.html',
    styleUrls: ['add-all.component.scss'],
})
export class AddAllComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
