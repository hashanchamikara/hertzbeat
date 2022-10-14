/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input } from '@angular/core';
export class NzTrExpandDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzExpand = true;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-expanded-row');
    }
}
NzTrExpandDirective.decorators = [
    { type: Directive, args: [{
                selector: 'tr[nzExpand]',
                host: {
                    '[hidden]': `!nzExpand`
                }
            },] }
];
NzTrExpandDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzTrExpandDirective.propDecorators = {
    nzExpand: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHItZXhwYW5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvc3JjL3RhYmxlL3RyLWV4cGFuZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTdELE1BQU0sT0FBTyxtQkFBbUI7SUFHOUIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZqQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBR3ZCLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDeEUsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixJQUFJLEVBQUU7b0JBQ0osVUFBVSxFQUFFLFdBQVc7aUJBQ3hCO2FBQ0Y7OztZQVBtQixVQUFVOzs7dUJBUzNCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RyW256RXhwYW5kXScsXG4gIGhvc3Q6IHtcbiAgICAnW2hpZGRlbl0nOiBgIW56RXhwYW5kYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VHJFeHBhbmREaXJlY3RpdmUge1xuICBASW5wdXQoKSBuekV4cGFuZCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXRhYmxlLWV4cGFuZGVkLXJvdycpO1xuICB9XG59XG4iXX0=