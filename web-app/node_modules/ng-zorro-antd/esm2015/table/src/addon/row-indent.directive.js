/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input } from '@angular/core';
export class NzRowIndentDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.indentSize = 0;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-row-indent');
    }
}
NzRowIndentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-row-indent',
                host: {
                    '[style.padding-left.px]': 'indentSize'
                }
            },] }
];
NzRowIndentDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzRowIndentDirective.propDecorators = {
    indentSize: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWluZGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy9hZGRvbi9yb3ctaW5kZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRN0QsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmpDLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFHdEIsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLElBQUksRUFBRTtvQkFDSix5QkFBeUIsRUFBRSxZQUFZO2lCQUN4QzthQUNGOzs7WUFQbUIsVUFBVTs7O3lCQVMzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei1yb3ctaW5kZW50JyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUucGFkZGluZy1sZWZ0LnB4XSc6ICdpbmRlbnRTaXplJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Um93SW5kZW50RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaW5kZW50U2l6ZSA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXRhYmxlLXJvdy1pbmRlbnQnKTtcbiAgfVxufVxuIl19