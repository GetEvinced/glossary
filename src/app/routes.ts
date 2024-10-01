/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {contentResolver, flatNavigationData, mapNavigationItemsToRoutes} from './angular-docs';
import {Route} from '@angular/router';

import {DefaultPage, PagePrefix} from './core/enums/pages';
import {SUB_NAVIGATION_DATA} from './sub-navigation-data';

// Docs navigation data contains routes which navigates to /tutorials pages, in
// that case we should load Tutorial component
export const DOCS_ROUTES = mapNavigationItemsToRoutes(
  flatNavigationData(SUB_NAVIGATION_DATA.docs),
  {
    loadComponent: () => import('./features/docs/docs.component'),
    data: {
      displaySecondaryNav: true,
    },
  },
);

// Based on SUB_NAVIGATION_DATA structure, we need to build the routing table
// for content pages.
export const SUB_NAVIGATION_ROUTES: Route[] = [
  ...DOCS_ROUTES
];

const FOOTER_ROUTES: Route[] = mapNavigationItemsToRoutes(
  flatNavigationData(SUB_NAVIGATION_DATA.footer),
  {loadComponent: () => import('./features/docs/docs.component')},
);

export const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component'),
        data: {label: 'Home'},
      },
      {
        path: PagePrefix.DOCS,
        redirectTo: DefaultPage.DOCS,
      },
      ...SUB_NAVIGATION_ROUTES,
      ...FOOTER_ROUTES,
    ],
  },
  // Error page
  {
    path: '**',
    loadComponent: () => import('./features/docs/docs.component'),
    resolve: {'docContent': contentResolver('error')},
  },
];
