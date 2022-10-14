import { Tree } from '@angular-devkit/schematics';
import { WorkspaceProject } from '@angular-devkit/core/src/workspace';
/**
 * Parses the index.html file to get the HEAD tag position.
 * @param host the tree we are traversing
 * @param src the src path of the html file to parse
 */
export declare function getHeadTag(host: Tree, src: string): {
    position: any;
};
/**
 * Adds a link to the index.html head tag Example:
 * `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">`
 * @param host The tree we are updating
 * @param project The project we're targeting.
 * @param link html element string we are inserting.
 */
export declare function addHeadLink(host: Tree, project: WorkspaceProject, link: string): void;
