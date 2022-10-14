/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
export class NzRowExpandButtonDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.expand = false;
        this.spaceMode = false;
        this.expandChange = new EventEmitter();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-row-expand-icon');
    }
    onHostClick() {
        if (!this.spaceMode) {
            this.expand = !this.expand;
            this.expandChange.next(this.expand);
        }
    }
}
NzRowExpandButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'button[nz-row-expand-button]',
                host: {
                    '[type]': `'button'`,
                    '[class.ant-table-row-expand-icon-expanded]': `!spaceMode && expand === true`,
                    '[class.ant-table-row-expand-icon-collapsed]': `!spaceMode && expand === false`,
                    '[class.ant-table-row-expand-icon-spaced]': 'spaceMode',
                    '(click)': 'onHostClick()'
                }
            },] }
];
NzRowExpandButtonDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzRowExpandButtonDirective.propDecorators = {
    expand: [{ type: Input }],
    spaceMode: [{ type: Input }],
    expandChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWV4cGFuZC1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS9zcmMvYWRkb24vcm93LWV4cGFuZC1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWW5GLE1BQU0sT0FBTywwQkFBMEI7SUFLckMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpqQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNSLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUduRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxJQUFJLEVBQUU7b0JBQ0osUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDRDQUE0QyxFQUFFLCtCQUErQjtvQkFDN0UsNkNBQTZDLEVBQUUsZ0NBQWdDO29CQUMvRSwwQ0FBMEMsRUFBRSxXQUFXO29CQUN2RCxTQUFTLEVBQUUsZUFBZTtpQkFDM0I7YUFDRjs7O1lBWG1CLFVBQVU7OztxQkFhM0IsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbnotcm93LWV4cGFuZC1idXR0b25dJyxcbiAgaG9zdDoge1xuICAgICdbdHlwZV0nOiBgJ2J1dHRvbidgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1leHBhbmRlZF0nOiBgIXNwYWNlTW9kZSAmJiBleHBhbmQgPT09IHRydWVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jb2xsYXBzZWRdJzogYCFzcGFjZU1vZGUgJiYgZXhwYW5kID09PSBmYWxzZWAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcm93LWV4cGFuZC1pY29uLXNwYWNlZF0nOiAnc3BhY2VNb2RlJyxcbiAgICAnKGNsaWNrKSc6ICdvbkhvc3RDbGljaygpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Um93RXhwYW5kQnV0dG9uRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZXhwYW5kID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNwYWNlTW9kZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24nKTtcbiAgfVxuXG4gIG9uSG9zdENsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zcGFjZU1vZGUpIHtcbiAgICAgIHRoaXMuZXhwYW5kID0gIXRoaXMuZXhwYW5kO1xuICAgICAgdGhpcy5leHBhbmRDaGFuZ2UubmV4dCh0aGlzLmV4cGFuZCk7XG4gICAgfVxuICB9XG59XG4iXX0=