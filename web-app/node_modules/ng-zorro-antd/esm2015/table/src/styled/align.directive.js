/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Input } from '@angular/core';
export class NzCellAlignDirective {
    constructor() {
        this.nzAlign = null;
    }
}
NzCellAlignDirective.decorators = [
    { type: Directive, args: [{
                selector: 'th[nzAlign],td[nzAlign]',
                host: {
                    '[style.text-align]': 'nzAlign'
                }
            },] }
];
NzCellAlignDirective.propDecorators = {
    nzAlign: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpZ24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS9zcmMvc3R5bGVkL2FsaWduLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFqRCxNQUFNLE9BQU8sb0JBQW9CO0lBTmpDO1FBT1csWUFBTyxHQUF1QyxJQUFJLENBQUM7SUFDOUQsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxTQUFTO2lCQUNoQzthQUNGOzs7c0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGhbbnpBbGlnbl0sdGRbbnpBbGlnbl0nLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS50ZXh0LWFsaWduXSc6ICduekFsaWduJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2VsbEFsaWduRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgbnpBbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInIHwgbnVsbCA9IG51bGw7XG59XG4iXX0=