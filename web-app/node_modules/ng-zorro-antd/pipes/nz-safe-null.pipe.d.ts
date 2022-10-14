/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform } from '@angular/core';
export declare class NzSafeNullPipe implements PipeTransform {
    transform<T>(value: T, replace?: string): T | string;
}
