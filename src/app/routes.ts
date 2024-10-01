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
  flatNavigationData(SUB_NAVIGATION_DATA.docs).filter(
    (route) =>
      !route.path?.startsWith(PagePrefix.TUTORIALS) && route.path !== PagePrefix.PLAYGROUND,
  ),
  {
    loadComponent: () => import('./features/docs/docs.component'),
    data: {
      displaySecondaryNav: true,
    },
  },
);

const tutorialsNavigationItems = flatNavigationData(SUB_NAVIGATION_DATA.tutorials);
const commonTutorialRouteData = {
  hideFooter: true,
};
const docsTutorialsRoutes = mapNavigationItemsToRoutes(
  tutorialsNavigationItems.filter((route) => route.path === DefaultPage.TUTORIALS),
  {
    loadComponent: () => import('./features/docs/docs.component'),
    data: {
      ...commonTutorialRouteData,
    },
  },
);
const tutorialComponentRoutes = mapNavigationItemsToRoutes(
  tutorialsNavigationItems.filter((route) => route.path !== DefaultPage.TUTORIALS),
  {
    loadComponent: () => import('./features/tutorial/tutorial.component'),
    data: {...commonTutorialRouteData},
  },
);
export const TUTORIALS_ROUTES = [...docsTutorialsRoutes, ...tutorialComponentRoutes];

// Based on SUB_NAVIGATION_DATA structure, we need to build the routing table
// for content pages.
export const SUB_NAVIGATION_ROUTES: Route[] = [
  ...DOCS_ROUTES,
  ...TUTORIALS_ROUTES,
];

const FOOTER_ROUTES: Route[] = mapNavigationItemsToRoutes(
  flatNavigationData(SUB_NAVIGATION_DATA.footer),
  {loadComponent: () => import('./features/docs/docs.component')},
);

const REDIRECT_ROUTES: Route[] = [
  {
    path: 'guide/templates/attribute-binding',
    redirectTo: 'guide/templates/binding#binding-dynamic-properties-and-attributes',
  },
  {
    path: 'guide/templates/interpolation',
    redirectTo: 'guide/templates/binding#render-dynamic-text-with-text-interpolation',
  },
  {
    path: 'guide/templates/class-binding',
    redirectTo: 'guide/templates/binding#css-class-and-style-property-bindings',
  },
  {
    path: 'guide/templates/event-binding',
    redirectTo: 'guide/templates/event-listeners',
  },
  {
    path: 'guide/templates/let-template-variables',
    redirectTo: 'guide/templates/variables#local-template-variables-with-let',
  },
  {
    path: 'guide/templates/property-binding',
    redirectTo: 'guide/templates/binding#binding-dynamic-properties-and-attributes',
  },
  {
    path: 'guide/templates/property-binding-best-practices',
    redirectTo: 'guide/templates/binding#binding-dynamic-properties-and-attributes',
  },
  {
    path: 'guide/templates/reference-variables',
    redirectTo: 'guide/templates/variables#template-reference-variables',
  },
  {
    path: 'guide/templates/svg-in-templates',
    redirectTo: 'guide/templates/binding',
  },
  {
    path: 'guide/templates/template-statements',
    redirectTo: 'guide/templates/event-listeners',
  },
  {
    path: 'guide',
    children: [
      {
        path: 'pipes',
        redirectTo: '/guide/templates/pipes',
      },
    ],
  },
];

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
      {
        path: PagePrefix.TUTORIALS,
        redirectTo: DefaultPage.TUTORIALS,
      },
      {
        path: PagePrefix.PLAYGROUND,
        loadComponent: () => import('./features/playground/playground.component'),
        data: {...commonTutorialRouteData, label: 'Playground'},
      },
      ...SUB_NAVIGATION_ROUTES,
      ...FOOTER_ROUTES,
      ...REDIRECT_ROUTES,
    ],
  },
  // Error page
  {
    path: '**',
    loadComponent: () => import('./features/docs/docs.component'),
    resolve: {'docContent': contentResolver('error')},
  },
];
