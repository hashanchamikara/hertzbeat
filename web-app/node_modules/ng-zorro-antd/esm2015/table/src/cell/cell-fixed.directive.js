/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
export class NzCellFixedDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzRight = false;
        this.nzLeft = false;
        this.colspan = null;
        this.colSpan = null;
        this.changes$ = new Subject();
        this.isAutoLeft = false;
        this.isAutoRight = false;
        this.isFixedLeft = false;
        this.isFixedRight = false;
        this.isFixed = false;
    }
    setAutoLeftWidth(autoLeft) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
    }
    setAutoRightWidth(autoRight) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
    }
    setIsFirstRight(isFirstRight) {
        this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
    }
    setIsLastLeft(isLastLeft) {
        this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
    }
    setFixClass(flag, className) {
        // the setFixClass function may call many times, so remove it first.
        this.renderer.removeClass(this.elementRef.nativeElement, className);
        if (flag) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        }
    }
    ngOnChanges() {
        this.setIsFirstRight(false);
        this.setIsLastLeft(false);
        this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
        this.isAutoRight = this.nzRight === '' || this.nzRight === true;
        this.isFixedLeft = this.nzLeft !== false;
        this.isFixedRight = this.nzRight !== false;
        this.isFixed = this.isFixedLeft || this.isFixedRight;
        const validatePx = (value) => {
            if (typeof value === 'string' && value !== '') {
                return value;
            }
            else {
                return null;
            }
        };
        this.setAutoLeftWidth(validatePx(this.nzLeft));
        this.setAutoRightWidth(validatePx(this.nzRight));
        this.changes$.next();
    }
}
NzCellFixedDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]',
                host: {
                    '[class.ant-table-cell-fix-right]': `isFixedRight`,
                    '[class.ant-table-cell-fix-left]': `isFixedLeft`,
                    '[style.position]': `isFixed? 'sticky' : null`
                }
            },] }
];
NzCellFixedDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzCellFixedDirective.propDecorators = {
    nzRight: [{ type: Input }],
    nzLeft: [{ type: Input }],
    colspan: [{ type: Input }],
    colSpan: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1maXhlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy9jZWxsL2NlbGwtZml4ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVUvQixNQUFNLE9BQU8sb0JBQW9CO0lBcUMvQixZQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEM5RCxZQUFPLEdBQXFCLEtBQUssQ0FBQztRQUNsQyxXQUFNLEdBQXFCLEtBQUssQ0FBQztRQUNqQyxZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUN2QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUEyQjBELENBQUM7SUF6QjNFLGdCQUFnQixDQUFDLFFBQXVCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBd0I7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxlQUFlLENBQUMsWUFBcUI7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsYUFBYSxDQUFDLFVBQW1CO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLDhCQUE4QixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVPLFdBQVcsQ0FBQyxJQUFhLEVBQUUsU0FBaUI7UUFDbEQsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXBFLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBSUQsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JELE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBdUIsRUFBaUIsRUFBRTtZQUM1RCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUM3QyxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQ0FBK0M7Z0JBQ3pELElBQUksRUFBRTtvQkFDSixrQ0FBa0MsRUFBRSxjQUFjO29CQUNsRCxpQ0FBaUMsRUFBRSxhQUFhO29CQUNoRCxrQkFBa0IsRUFBRSwwQkFBMEI7aUJBQy9DO2FBQ0Y7OztZQVZpRCxTQUFTO1lBQXZDLFVBQVU7OztzQkFZM0IsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RkW256UmlnaHRdLHRoW256UmlnaHRdLHRkW256TGVmdF0sdGhbbnpMZWZ0XScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jZWxsLWZpeC1yaWdodF0nOiBgaXNGaXhlZFJpZ2h0YCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jZWxsLWZpeC1sZWZ0XSc6IGBpc0ZpeGVkTGVmdGAsXG4gICAgJ1tzdHlsZS5wb3NpdGlvbl0nOiBgaXNGaXhlZD8gJ3N0aWNreScgOiBudWxsYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2VsbEZpeGVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpSaWdodDogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuekxlZnQ6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sc3BhbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbFNwYW46IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGlzQXV0b0xlZnQgPSBmYWxzZTtcbiAgaXNBdXRvUmlnaHQgPSBmYWxzZTtcbiAgaXNGaXhlZExlZnQgPSBmYWxzZTtcbiAgaXNGaXhlZFJpZ2h0ID0gZmFsc2U7XG4gIGlzRml4ZWQgPSBmYWxzZTtcblxuICBzZXRBdXRvTGVmdFdpZHRoKGF1dG9MZWZ0OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBhdXRvTGVmdCk7XG4gIH1cblxuICBzZXRBdXRvUmlnaHRXaWR0aChhdXRvUmlnaHQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBhdXRvUmlnaHQpO1xuICB9XG5cbiAgc2V0SXNGaXJzdFJpZ2h0KGlzRmlyc3RSaWdodDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2V0Rml4Q2xhc3MoaXNGaXJzdFJpZ2h0LCAnYW50LXRhYmxlLWNlbGwtZml4LXJpZ2h0LWZpcnN0Jyk7XG4gIH1cblxuICBzZXRJc0xhc3RMZWZ0KGlzTGFzdExlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNldEZpeENsYXNzKGlzTGFzdExlZnQsICdhbnQtdGFibGUtY2VsbC1maXgtbGVmdC1sYXN0Jyk7XG4gIH1cblxuICBwcml2YXRlIHNldEZpeENsYXNzKGZsYWc6IGJvb2xlYW4sIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gdGhlIHNldEZpeENsYXNzIGZ1bmN0aW9uIG1heSBjYWxsIG1hbnkgdGltZXMsIHNvIHJlbW92ZSBpdCBmaXJzdC5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRJc0ZpcnN0UmlnaHQoZmFsc2UpO1xuICAgIHRoaXMuc2V0SXNMYXN0TGVmdChmYWxzZSk7XG4gICAgdGhpcy5pc0F1dG9MZWZ0ID0gdGhpcy5uekxlZnQgPT09ICcnIHx8IHRoaXMubnpMZWZ0ID09PSB0cnVlO1xuICAgIHRoaXMuaXNBdXRvUmlnaHQgPSB0aGlzLm56UmlnaHQgPT09ICcnIHx8IHRoaXMubnpSaWdodCA9PT0gdHJ1ZTtcbiAgICB0aGlzLmlzRml4ZWRMZWZ0ID0gdGhpcy5uekxlZnQgIT09IGZhbHNlO1xuICAgIHRoaXMuaXNGaXhlZFJpZ2h0ID0gdGhpcy5uelJpZ2h0ICE9PSBmYWxzZTtcbiAgICB0aGlzLmlzRml4ZWQgPSB0aGlzLmlzRml4ZWRMZWZ0IHx8IHRoaXMuaXNGaXhlZFJpZ2h0O1xuICAgIGNvbnN0IHZhbGlkYXRlUHggPSAodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0QXV0b0xlZnRXaWR0aCh2YWxpZGF0ZVB4KHRoaXMubnpMZWZ0KSk7XG4gICAgdGhpcy5zZXRBdXRvUmlnaHRXaWR0aCh2YWxpZGF0ZVB4KHRoaXMubnpSaWdodCkpO1xuICAgIHRoaXMuY2hhbmdlcyQubmV4dCgpO1xuICB9XG59XG4iXX0=