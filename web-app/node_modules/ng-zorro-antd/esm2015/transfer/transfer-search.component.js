/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class NzTransferSearchComponent {
    // endregion
    constructor(cdr) {
        this.cdr = cdr;
        this.disabled = false;
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    _handle() {
        this.valueChanged.emit(this.value);
    }
    _clear() {
        if (this.disabled) {
            return;
        }
        this.value = '';
        this.valueClear.emit();
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
NzTransferSearchComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-transfer-search]',
                exportAs: 'nzTransferSearch',
                preserveWhitespaces: false,
                template: `
    <input
      [(ngModel)]="value"
      (ngModelChange)="_handle()"
      [disabled]="disabled"
      [placeholder]="placeholder"
      class="ant-input ant-transfer-list-search"
      [ngClass]="{ 'ant-input-disabled': disabled }"
    />
    <a *ngIf="value && value.length > 0; else def" class="ant-transfer-list-search-action" (click)="_clear()">
      <i nz-icon nzType="close-circle"></i>
    </a>
    <ng-template #def>
      <span class="ant-transfer-list-search-action"><i nz-icon nzType="search"></i></span>
    </ng-template>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NzTransferSearchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzTransferSearchComponent.propDecorators = {
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    valueChanged: [{ type: Output }],
    valueClear: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdHJhbnNmZXIvdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBeUJ2QixNQUFNLE9BQU8seUJBQXlCO0lBVXBDLFlBQVk7SUFFWixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVBqQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWhCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMxQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUlaLENBQUM7SUFFOUMsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUEvQkMsaUJBQWlCOzs7MEJBbUNoQixLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFFTCxNQUFNO3lCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotdHJhbnNmZXItc2VhcmNoXScsXG4gIGV4cG9ydEFzOiAnbnpUcmFuc2ZlclNlYXJjaCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dFxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfaGFuZGxlKClcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBjbGFzcz1cImFudC1pbnB1dCBhbnQtdHJhbnNmZXItbGlzdC1zZWFyY2hcIlxuICAgICAgW25nQ2xhc3NdPVwieyAnYW50LWlucHV0LWRpc2FibGVkJzogZGlzYWJsZWQgfVwiXG4gICAgLz5cbiAgICA8YSAqbmdJZj1cInZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDA7IGVsc2UgZGVmXCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1zZWFyY2gtYWN0aW9uXCIgKGNsaWNrKT1cIl9jbGVhcigpXCI+XG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiPjwvaT5cbiAgICA8L2E+XG4gICAgPG5nLXRlbXBsYXRlICNkZWY+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0LXNlYXJjaC1hY3Rpb25cIj48aSBuei1pY29uIG56VHlwZT1cInNlYXJjaFwiPjwvaT48L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2ZlclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlPzogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIF9oYW5kbGUoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIF9jbGVhcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgdGhpcy52YWx1ZUNsZWFyLmVtaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19