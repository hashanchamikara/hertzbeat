/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
export class NzTrimPipe {
    // TODO(chensimeng) trimEnd, trimStart
    transform(text) {
        return text.trim();
    }
}
NzTrimPipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzTrim'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJpbS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9waXBlcy9uei10cmltLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLFVBQVU7SUFDckIsc0NBQXNDO0lBQ3RDLFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQVBGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsUUFBUTthQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICduelRyaW0nXG59KVxuZXhwb3J0IGNsYXNzIE56VHJpbVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLy8gVE9ETyhjaGVuc2ltZW5nKSB0cmltRW5kLCB0cmltU3RhcnRcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRleHQudHJpbSgpO1xuICB9XG59XG4iXX0=