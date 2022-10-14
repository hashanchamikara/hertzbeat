/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AnimationEvent } from '@angular/animations';
import { OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzImage, NzImagePreviewOptions } from './image-preview-options';
import { NzImagePreviewRef } from './image-preview-ref';
export interface NzImageContainerOperation {
    icon: string;
    type: string;
    onClick(): void;
}
export declare class NzImagePreviewComponent implements OnDestroy {
    private cdr;
    nzConfigService: NzConfigService;
    config: NzImagePreviewOptions;
    private overlayRef;
    images: NzImage[];
    index: number;
    isDragging: boolean;
    visible: boolean;
    animationState: 'void' | 'enter' | 'leave';
    animationStateChanged: EventEmitter<AnimationEvent>;
    previewImageTransform: string;
    previewImageWrapperTransform: string;
    operations: NzImageContainerOperation[];
    zoomOutDisabled: boolean;
    position: {
        x: number;
        y: number;
    };
    previewRef: NzImagePreviewRef;
    containerClick: EventEmitter<void>;
    closeClick: EventEmitter<void>;
    imageRef: ElementRef<HTMLImageElement>;
    private zoom;
    private rotate;
    private destroy$;
    get animationDisabled(): boolean;
    get maskClosable(): boolean;
    constructor(cdr: ChangeDetectorRef, nzConfigService: NzConfigService, config: NzImagePreviewOptions, overlayRef: OverlayRef);
    setImages(images: NzImage[]): void;
    switchTo(index: number): void;
    next(): void;
    prev(): void;
    markForCheck(): void;
    onClose(): void;
    onZoomIn(): void;
    onZoomOut(): void;
    onRotateRight(): void;
    onRotateLeft(): void;
    onSwitchLeft(event: MouseEvent): void;
    onSwitchRight(event: MouseEvent): void;
    onContainerClick(e: MouseEvent): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationDone(event: AnimationEvent): void;
    startLeaveAnimation(): void;
    onDragStarted(): void;
    onDragReleased(): void;
    ngOnDestroy(): void;
    private updatePreviewImageTransform;
    private updatePreviewImageWrapperTransform;
    private updateZoomOutDisabled;
    private setEnterAnimationClass;
    private setLeaveAnimationClass;
    private reset;
}
