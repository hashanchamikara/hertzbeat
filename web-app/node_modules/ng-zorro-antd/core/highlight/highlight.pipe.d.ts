/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform } from '@angular/core';
export declare class NzHighlightPipe implements PipeTransform {
    private UNIQUE_WRAPPERS;
    transform(value: string, highlightValue: string, flags?: string, klass?: string): string | null;
}
