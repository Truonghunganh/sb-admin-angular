import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './edit.component.html',
    styleUrls: ['edit.component.scss'],
})
export class EditComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
