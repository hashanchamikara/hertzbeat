/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class NzInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
}
NzInputGroupSlotComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-input-group-slot]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                host: {
                    '[class.ant-input-group-addon]': `type === 'addon'`,
                    '[class.ant-input-prefix]': `type === 'prefix'`,
                    '[class.ant-input-suffix]': `type === 'suffix'`
                }
            },] }
];
NzInputGroupSlotComponent.propDecorators = {
    icon: [{ type: Input }],
    type: [{ type: Input }],
    template: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2lucHV0L2lucHV0LWdyb3VwLXNsb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBaUIxRyxNQUFNLE9BQU8seUJBQXlCO0lBZnRDO1FBZ0JXLFNBQUksR0FBbUIsSUFBSSxDQUFDO1FBQzVCLFNBQUksR0FBeUMsSUFBSSxDQUFDO1FBQ2xELGFBQVEsR0FBdUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7OztZQW5CQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7OztHQUdUO2dCQUNELElBQUksRUFBRTtvQkFDSiwrQkFBK0IsRUFBRSxrQkFBa0I7b0JBQ25ELDBCQUEwQixFQUFFLG1CQUFtQjtvQkFDL0MsMEJBQTBCLEVBQUUsbUJBQW1CO2lCQUNoRDthQUNGOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1pbnB1dC1ncm91cC1zbG90XScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiICpuZ0lmPVwiaWNvblwiPjwvaT5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVcIj57eyB0ZW1wbGF0ZSB9fTwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtYWRkb25dJzogYHR5cGUgPT09ICdhZGRvbidgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXByZWZpeF0nOiBgdHlwZSA9PT0gJ3ByZWZpeCdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXN1ZmZpeF0nOiBgdHlwZSA9PT0gJ3N1ZmZpeCdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpJbnB1dEdyb3VwU2xvdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdHlwZTogJ2FkZG9uJyB8ICdwcmVmaXgnIHwgJ3N1ZmZpeCcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdGVtcGxhdGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xufVxuIl19