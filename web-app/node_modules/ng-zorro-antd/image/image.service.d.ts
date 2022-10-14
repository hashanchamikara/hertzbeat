/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import { Injector } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzImage, NzImagePreviewOptions } from './image-preview-options';
import { NzImagePreviewRef } from './image-preview-ref';
export interface NzImageService {
    preview(images: NzImage[], option?: NzImagePreviewOptions): NzImagePreviewRef;
}
export declare class NzImageService {
    private overlay;
    private injector;
    private nzConfigService;
    private directionality;
    constructor(overlay: Overlay, injector: Injector, nzConfigService: NzConfigService, directionality: Directionality);
    private display;
    private attachPreviewComponent;
    private createOverlay;
}
