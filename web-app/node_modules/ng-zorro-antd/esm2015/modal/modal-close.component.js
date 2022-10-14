/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalOptions } from './modal-types';
export class NzModalCloseComponent {
    constructor(config) {
        this.config = config;
    }
}
NzModalCloseComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[nz-modal-close]',
                exportAs: 'NzModalCloseBuiltin',
                template: `
    <span class="ant-modal-close-x">
      <ng-container *nzStringTemplateOutlet="config.nzCloseIcon; let closeIcon">
        <i nz-icon [nzType]="closeIcon" class="ant-modal-close-icon"></i>
      </ng-container>
    </span>
  `,
                host: {
                    class: 'ant-modal-close',
                    'aria-label': 'Close'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NzModalCloseComponent.ctorParameters = () => [
    { type: ModalOptions }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY2xvc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1jbG9zZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBa0I3QyxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQW1CLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBRyxDQUFDOzs7WUFqQjVDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7OztHQU1UO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsaUJBQWlCO29CQUN4QixZQUFZLEVBQUUsT0FBTztpQkFDdEI7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQWpCUSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW256LW1vZGFsLWNsb3NlXScsXG4gIGV4cG9ydEFzOiAnTnpNb2RhbENsb3NlQnVpbHRpbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtbW9kYWwtY2xvc2UteFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNvbmZpZy5uekNsb3NlSWNvbjsgbGV0IGNsb3NlSWNvblwiPlxuICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiY2xvc2VJY29uXCIgY2xhc3M9XCJhbnQtbW9kYWwtY2xvc2UtaWNvblwiPjwvaT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LW1vZGFsLWNsb3NlJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdDbG9zZSdcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpNb2RhbENsb3NlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogTW9kYWxPcHRpb25zKSB7fVxufVxuIl19