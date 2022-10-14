/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class NzTreeNodeBuiltinCheckboxComponent {
    constructor() {
        this.nzSelectMode = false;
    }
}
NzTreeNodeBuiltinCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node-checkbox[builtin]',
                template: `
    <span [class.ant-tree-checkbox-inner]="!nzSelectMode" [class.ant-select-tree-checkbox-inner]="nzSelectMode"></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-checkbox]': `nzSelectMode`,
                    '[class.ant-select-tree-checkbox-checked]': `nzSelectMode && isChecked`,
                    '[class.ant-select-tree-checkbox-indeterminate]': `nzSelectMode && isHalfChecked`,
                    '[class.ant-select-tree-checkbox-disabled]': `nzSelectMode && (isDisabled || isDisableCheckbox)`,
                    '[class.ant-tree-checkbox]': `!nzSelectMode`,
                    '[class.ant-tree-checkbox-checked]': `!nzSelectMode && isChecked`,
                    '[class.ant-tree-checkbox-indeterminate]': `!nzSelectMode && isHalfChecked`,
                    '[class.ant-tree-checkbox-disabled]': `!nzSelectMode && (isDisabled || isDisableCheckbox)`
                }
            },] }
];
NzTreeNodeBuiltinCheckboxComponent.propDecorators = {
    nzSelectMode: [{ type: Input }],
    isChecked: [{ type: Input }],
    isHalfChecked: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isDisableCheckbox: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdHJlZS90cmVlLW5vZGUtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBb0IxRSxNQUFNLE9BQU8sa0NBQWtDO0lBbEIvQztRQW1CVyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQUtoQyxDQUFDOzs7WUF4QkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLGtDQUFrQyxFQUFFLGNBQWM7b0JBQ2xELDBDQUEwQyxFQUFFLDJCQUEyQjtvQkFDdkUsZ0RBQWdELEVBQUUsK0JBQStCO29CQUNqRiwyQ0FBMkMsRUFBRSxtREFBbUQ7b0JBQ2hHLDJCQUEyQixFQUFFLGVBQWU7b0JBQzVDLG1DQUFtQyxFQUFFLDRCQUE0QjtvQkFDakUseUNBQXlDLEVBQUUsZ0NBQWdDO29CQUMzRSxvQ0FBb0MsRUFBRSxvREFBb0Q7aUJBQzNGO2FBQ0Y7OzsyQkFFRSxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmVlLW5vZGUtY2hlY2tib3hbYnVpbHRpbl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIFtjbGFzcy5hbnQtdHJlZS1jaGVja2JveC1pbm5lcl09XCIhbnpTZWxlY3RNb2RlXCIgW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1jaGVja2JveC1pbm5lcl09XCJuelNlbGVjdE1vZGVcIj48L3NwYW4+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLWNoZWNrYm94XSc6IGBuelNlbGVjdE1vZGVgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLWNoZWNrYm94LWNoZWNrZWRdJzogYG56U2VsZWN0TW9kZSAmJiBpc0NoZWNrZWRgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVdJzogYG56U2VsZWN0TW9kZSAmJiBpc0hhbGZDaGVja2VkYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1jaGVja2JveC1kaXNhYmxlZF0nOiBgbnpTZWxlY3RNb2RlICYmIChpc0Rpc2FibGVkIHx8IGlzRGlzYWJsZUNoZWNrYm94KWAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1jaGVja2JveF0nOiBgIW56U2VsZWN0TW9kZWAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1jaGVja2JveC1jaGVja2VkXSc6IGAhbnpTZWxlY3RNb2RlICYmIGlzQ2hlY2tlZGAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1jaGVja2JveC1pbmRldGVybWluYXRlXSc6IGAhbnpTZWxlY3RNb2RlICYmIGlzSGFsZkNoZWNrZWRgLFxuICAgICdbY2xhc3MuYW50LXRyZWUtY2hlY2tib3gtZGlzYWJsZWRdJzogYCFuelNlbGVjdE1vZGUgJiYgKGlzRGlzYWJsZWQgfHwgaXNEaXNhYmxlQ2hlY2tib3gpYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGVCdWlsdGluQ2hlY2tib3hDb21wb25lbnQge1xuICBASW5wdXQoKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNDaGVja2VkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNIYWxmQ2hlY2tlZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBpc0Rpc2FibGVDaGVja2JveD86IGJvb2xlYW47XG59XG4iXX0=