/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class NzTabBodyComponent {
    constructor() {
        this.content = null;
        this.active = false;
        this.tabPaneAnimated = true;
        this.forceRender = false;
    }
}
NzTabBodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tabpane',
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[attr.tabindex]': 'active ? 0 : -1',
                    '[attr.aria-hidden]': '!active',
                    '[style.visibility]': 'tabPaneAnimated ? active ? null : "hidden" : null',
                    '[style.height]': 'tabPaneAnimated ? active ? null : 0 : null',
                    '[style.overflow-y]': 'tabPaneAnimated ? active ? null : "none" : null',
                    '[style.display]': '!tabPaneAnimated ? active ? null : "none" : null'
                }
            },] }
];
NzTabBodyComponent.propDecorators = {
    content: [{ type: Input }],
    active: [{ type: Input }],
    tabPaneAnimated: [{ type: Input }],
    forceRender: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90YWJzL3RhYi1ib2R5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXdCMUcsTUFBTSxPQUFPLGtCQUFrQjtJQXRCL0I7UUF1QlcsWUFBTyxHQUE2QixJQUFJLENBQUM7UUFDekMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7OztZQTNCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsa0JBQWtCO29CQUN6QixpQ0FBaUMsRUFBRSxRQUFRO29CQUMzQyxpQkFBaUIsRUFBRSxpQkFBaUI7b0JBQ3BDLG9CQUFvQixFQUFFLFNBQVM7b0JBQy9CLG9CQUFvQixFQUFFLG1EQUFtRDtvQkFDekUsZ0JBQWdCLEVBQUUsNENBQTRDO29CQUM5RCxvQkFBb0IsRUFBRSxpREFBaUQ7b0JBQ3ZFLGlCQUFpQixFQUFFLGtEQUFrRDtpQkFDdEU7YUFDRjs7O3NCQUVFLEtBQUs7cUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei10YWItYm9keV0nLFxuICBleHBvcnRBczogJ256VGFiQm9keScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWN0aXZlIHx8IGZvcmNlUmVuZGVyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC10YWJzLXRhYnBhbmUnLFxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFicGFuZS1hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdhY3RpdmUgPyAwIDogLTEnLFxuICAgICdbYXR0ci5hcmlhLWhpZGRlbl0nOiAnIWFjdGl2ZScsXG4gICAgJ1tzdHlsZS52aXNpYmlsaXR5XSc6ICd0YWJQYW5lQW5pbWF0ZWQgPyBhY3RpdmUgPyBudWxsIDogXCJoaWRkZW5cIiA6IG51bGwnLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6ICd0YWJQYW5lQW5pbWF0ZWQgPyBhY3RpdmUgPyBudWxsIDogMCA6IG51bGwnLFxuICAgICdbc3R5bGUub3ZlcmZsb3cteV0nOiAndGFiUGFuZUFuaW1hdGVkID8gYWN0aXZlID8gbnVsbCA6IFwibm9uZVwiIDogbnVsbCcsXG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6ICchdGFiUGFuZUFuaW1hdGVkID8gYWN0aXZlID8gbnVsbCA6IFwibm9uZVwiIDogbnVsbCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYkJvZHlDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGFiUGFuZUFuaW1hdGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9yY2VSZW5kZXIgPSBmYWxzZTtcbn1cbiJdfQ==