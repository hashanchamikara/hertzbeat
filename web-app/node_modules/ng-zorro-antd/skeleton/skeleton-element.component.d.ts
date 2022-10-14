/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { NzSkeletonAvatarShape, NzSkeletonAvatarSize, NzSkeletonButtonShape, NzSkeletonButtonSize, NzSkeletonInputSize } from './skeleton.type';
export declare class NzSkeletonElementDirective {
    private elementRef;
    nzActive: boolean;
    nzType: 'button' | 'input' | 'avatar' | 'image';
    constructor(elementRef: ElementRef);
}
export declare class NzSkeletonElementButtonComponent {
    nzShape: NzSkeletonButtonShape;
    nzSize: NzSkeletonButtonSize;
}
export declare class NzSkeletonElementAvatarComponent implements OnChanges {
    nzShape: NzSkeletonAvatarShape;
    nzSize: NzSkeletonAvatarSize;
    styleMap: {};
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class NzSkeletonElementInputComponent {
    nzSize: NzSkeletonInputSize;
}
export declare class NzSkeletonElementImageComponent {
}
