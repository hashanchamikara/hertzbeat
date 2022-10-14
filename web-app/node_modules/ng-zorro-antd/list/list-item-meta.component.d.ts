/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { NzListItemMetaDescriptionComponent as DescriptionComponent, NzListItemMetaTitleComponent as TitleComponent } from './list-item-meta-cell';
export declare class NzListItemMetaComponent {
    elementRef: ElementRef;
    private renderer;
    avatarStr: string;
    avatarTpl?: TemplateRef<void>;
    set nzAvatar(value: string | TemplateRef<void>);
    nzTitle?: string | TemplateRef<void>;
    nzDescription?: string | TemplateRef<void>;
    descriptionComponent?: DescriptionComponent;
    titleComponent?: TitleComponent;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
