import { Config } from './types';
export interface ThemeCssConfig extends Config {
    nodeModulesPath?: string;
    projectStylePath?: string;
    additionalLibraries?: string[];
    additionalThemeVars?: string[];
    min?: boolean;
    list?: ThemeCssItem[];
}
export interface ThemeCssItem {
    key?: string;
    filePath?: string;
    theme?: 'dark' | 'compact';
    projectThemeVar?: string[];
    modifyVars?: {
        [key: string]: string;
    };
}
export interface BuildThemeCSSOptions {
    content: string;
    min?: boolean;
    modifyVars?: {
        [key: string]: string;
    };
}
