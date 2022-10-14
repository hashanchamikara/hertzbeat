/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Component, Input } from '@angular/core';
export class NzTabCloseButtonComponent {
    constructor() {
        this.closeIcon = 'close';
    }
}
NzTabCloseButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tab-close-button, button[nz-tab-close-button]',
                template: `
    <ng-container *nzStringTemplateOutlet="closeIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tab-remove',
                    'aria-label': 'Close tab',
                    type: 'button'
                }
            },] }
];
NzTabCloseButtonComponent.ctorParameters = () => [];
NzTabCloseButtonComponent.propDecorators = {
    closeIcon: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNsb3NlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RhYnMvdGFiLWNsb3NlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFpQjlELE1BQU0sT0FBTyx5QkFBeUI7SUFHcEM7UUFGUyxjQUFTLEdBQW9DLE9BQU8sQ0FBQztJQUUvQyxDQUFDOzs7WUFoQmpCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0RBQWtEO2dCQUM1RCxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsWUFBWSxFQUFFLFdBQVc7b0JBQ3pCLElBQUksRUFBRSxRQUFRO2lCQUNmO2FBQ0Y7Ozs7d0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRhYi1jbG9zZS1idXR0b24sIGJ1dHRvbltuei10YWItY2xvc2UtYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNsb3NlSWNvbjsgbGV0IGljb25cIj5cbiAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCIgbnpUaGVtZT1cIm91dGxpbmVcIj48L2k+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC10YWJzLXRhYi1yZW1vdmUnLFxuICAgICdhcmlhLWxhYmVsJzogJ0Nsb3NlIHRhYicsXG4gICAgdHlwZTogJ2J1dHRvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYkNsb3NlQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2xvc2VJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+ID0gJ2Nsb3NlJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=