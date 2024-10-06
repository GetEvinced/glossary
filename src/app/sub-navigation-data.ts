/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {NavigationItem} from './angular-docs';
import DOCS_SUB_NAVIGATION_DATA from '../scripts/routes.json'

interface SubNavigationData {
  docs: NavigationItem[];
  footer: NavigationItem[];
}

const FOOTER_NAVIGATION_DATA: NavigationItem[] = [
];

// Docs navigation data structure, it's used to display structure in
// navigation-list component And build the routing table for content pages.
export const SUB_NAVIGATION_DATA: SubNavigationData = {
  docs: [DOCS_SUB_NAVIGATION_DATA],
  footer: FOOTER_NAVIGATION_DATA,
};
