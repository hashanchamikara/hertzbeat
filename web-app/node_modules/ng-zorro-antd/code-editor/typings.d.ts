/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { editor } from 'monaco-editor';
import IStandAloneEditorConstructionOptions = editor.IStandaloneEditorConstructionOptions;
import IDiffEditorConstructionOptions = editor.IDiffEditorConstructionOptions;
export declare type EditorOptions = IStandAloneEditorConstructionOptions;
export declare type DiffEditorOptions = IDiffEditorConstructionOptions;
export declare type JoinedEditorOptions = EditorOptions | DiffEditorOptions;
export declare type NzEditorMode = 'normal' | 'diff';
export declare const enum NzCodeEditorLoadingStatus {
    UNLOAD = "unload",
    LOADING = "loading",
    LOADED = "LOADED"
}
