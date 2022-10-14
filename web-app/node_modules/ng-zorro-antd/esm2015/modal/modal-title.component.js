/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalOptions } from './modal-types';
export class NzModalTitleComponent {
    constructor(config) {
        this.config = config;
    }
}
NzModalTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[nz-modal-title]',
                exportAs: 'NzModalTitleBuiltin',
                template: `
    <div class="ant-modal-title">
      <ng-container *nzStringTemplateOutlet="config.nzTitle">
        <div [innerHTML]="config.nzTitle"></div>
      </ng-container>
    </div>
  `,
                host: {
                    class: 'ant-modal-header'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NzModalTitleComponent.ctorParameters = () => [
    { type: ModalOptions }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBaUI3QyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQW1CLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBRyxDQUFDOzs7WUFoQjVDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7OztHQU1UO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsa0JBQWtCO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBaEJRLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaXZbbnotbW9kYWwtdGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdOek1vZGFsVGl0bGVCdWlsdGluJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLXRpdGxlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLm56VGl0bGVcIj5cbiAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImNvbmZpZy5uelRpdGxlXCI+PC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LW1vZGFsLWhlYWRlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpNb2RhbFRpdGxlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogTW9kYWxPcHRpb25zKSB7fVxufVxuIl19