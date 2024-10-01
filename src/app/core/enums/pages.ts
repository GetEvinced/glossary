/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// File contains the enums used across whole application.

// The enum with the prefixes of the main routes
export enum PagePrefix {
  CLI = 'cli',
  DOCS = 'docs',
  HOME = '',
  PLAYGROUND = 'playground',
  TUTORIALS = 'tutorials',
}

// The enum with the default pages for each main tab
export enum DefaultPage {
  DOCS = 'overview',
  TUTORIALS = 'tutorials',
  PLAYGROUND = 'playground',
}
