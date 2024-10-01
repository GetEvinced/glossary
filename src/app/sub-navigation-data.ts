/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {NavigationItem} from './angular-docs';

// These 2 imports are expected to be red because they are generated a build time
import FIRST_APP_TUTORIAL_NAV_DATA from '../../src/generated-assets/tutorials/first-app/routes.json';
import LEARN_ANGULAR_TUTORIAL_NAV_DATA from '../../src/generated-assets/tutorials/learn-angular/routes.json';

import {DefaultPage} from './core/enums/pages';

interface SubNavigationData {
  docs: NavigationItem[];
  tutorials: NavigationItem[];
  footer: NavigationItem[];
}

const DOCS_SUB_NAVIGATION_DATA: NavigationItem[] = [
  {
    label: 'Introduction',
    children: [
      {
        label: 'What is Angular?',
        path: 'overview',
        contentPath: 'introduction/what-is-angular',
      },
      {
        label: 'Installation',
        path: 'installation',
        contentPath: 'introduction/installation',
      },
      {
        label: 'Essentials',
        children: [
          {
            label: 'Overview',
            path: 'essentials',
            contentPath: 'introduction/essentials/overview',
          },
          {
            label: 'Composing with Components',
            path: 'essentials/components',
            contentPath: 'introduction/essentials/components',
          },
          {
            label: 'Managing Dynamic Data',
            path: 'essentials/managing-dynamic-data',
            contentPath: 'introduction/essentials/managing-dynamic-data',
          },
          {
            label: 'Rendering Dynamic Templates',
            path: 'essentials/rendering-dynamic-templates',
            contentPath: 'introduction/essentials/rendering-dynamic-templates',
          },
          {
            label: 'Conditionals and Loops',
            path: 'essentials/conditionals-and-loops',
            contentPath: 'introduction/essentials/conditionals-and-loops',
          },
          {
            label: 'Handling User Interaction',
            path: 'essentials/handling-user-interaction',
            contentPath: 'introduction/essentials/handling-user-interaction',
          },
          {
            label: 'Sharing Logic',
            path: 'essentials/sharing-logic',
            contentPath: 'introduction/essentials/sharing-logic',
          },
          {
            label: 'Next Steps',
            path: 'essentials/next-steps',
            contentPath: 'introduction/essentials/next-steps',
          },
        ],
      },
      {
        label: 'Start coding! 🚀',
        path: 'tutorials/learn-angular',
      },
    ],
  },
  {
    label: 'In-depth Guides',
    children: [
      {
        label: 'Components',
        children: [
          {
            label: 'Anatomy of components',
            path: 'guide/components',
            contentPath: 'guide/components/anatomy-of-components',
          },
          {
            label: 'Importing and using components',
            path: 'guide/components/importing',
            contentPath: 'guide/components/importing',
          },
          {
            label: 'Selectors',
            path: 'guide/components/selectors',
            contentPath: 'guide/components/selectors',
          },
          {
            label: 'Styling',
            path: 'guide/components/styling',
            contentPath: 'guide/components/styling',
          },
          {
            label: 'Accepting data with input properties',
            path: 'guide/components/inputs',
            contentPath: 'guide/components/inputs',
          },
          {
            label: 'Custom events with outputs',
            path: 'guide/components/outputs',
            contentPath: 'guide/components/outputs',
          },
          {
            label: 'output() function',
            path: 'guide/components/output-fn',
            contentPath: 'guide/components/output-function',
          },
          {
            label: 'Content projection with ng-content',
            path: 'guide/components/content-projection',
            contentPath: 'guide/components/content-projection',
          },
          {
            label: 'Host elements',
            path: 'guide/components/host-elements',
            contentPath: 'guide/components/host-elements',
          },
          {
            label: 'Lifecycle',
            path: 'guide/components/lifecycle',
            contentPath: 'guide/components/lifecycle',
          },
          {
            label: 'Referencing component children with queries',
            path: 'guide/components/queries',
            contentPath: 'guide/components/queries',
          },
          {
            label: 'Using DOM APIs',
            path: 'guide/components/dom-apis',
            contentPath: 'guide/components/dom-apis',
          },
          {
            label: 'Inheritance',
            path: 'guide/components/inheritance',
            contentPath: 'guide/components/inheritance',
          },
          {
            label: 'Programmatically rendering components',
            path: 'guide/components/programmatic-rendering',
            contentPath: 'guide/components/programmatic-rendering',
          },
          {
            label: 'Advanced configuration',
            path: 'guide/components/advanced-configuration',
            contentPath: 'guide/components/advanced-configuration',
          },
          {
            label: 'Custom Elements',
            path: 'guide/elements',
            contentPath: 'guide/elements',
          },
        ],
      },
      {
        label: 'Templates',
        children: [
          {
            label: 'Overview',
            path: 'guide/templates',
            contentPath: 'guide/templates/overview',
          },
          {
            label: 'Binding dynamic text, properties and attributes',
            path: 'guide/templates/binding',
            contentPath: 'guide/templates/binding',
          },
          {
            label: 'Adding event listeners',
            path: 'guide/templates/event-listeners',
            contentPath: 'guide/templates/event-listeners',
          },
          {
            label: 'Two-way binding',
            path: 'guide/templates/two-way-binding',
            contentPath: 'guide/templates/two-way-binding',
          },
          {
            label: 'Control flow',
            path: 'guide/templates/control-flow',
            contentPath: 'guide/templates/control-flow',
          },
          {
            label: 'Pipes',
            path: 'guide/templates/pipes',
            contentPath: 'guide/templates/pipes',
          },
          {
            label: 'Slotting child content with ng-content',
            path: 'guide/templates/ng-content',
            contentPath: 'guide/templates/ng-content',
          },
          {
            label: 'Create template fragments with ng-template',
            path: 'guide/templates/ng-template',
            contentPath: 'guide/templates/ng-template',
          },
          {
            label: 'Grouping elements with ng-container',
            path: 'guide/templates/ng-container',
            contentPath: 'guide/templates/ng-container',
          },
          {
            label: 'Variables in templates',
            path: 'guide/templates/variables',
            contentPath: 'guide/templates/variables',
          },
          {
            label: 'Deferred loading with @defer',
            path: 'guide/templates/defer',
            contentPath: 'guide/templates/defer',
          },
          {
            label: 'Expression syntax',
            path: 'guide/templates/expression-syntax',
            contentPath: 'guide/templates/expression-syntax',
          },
          {
            label: 'Whitespace in templates',
            path: 'guide/templates/whitespace',
            contentPath: 'guide/templates/whitespace',
          },
        ],
      },
      {
        label: 'Directives',
        children: [
          {
            label: 'Overview',
            path: 'guide/directives',
            contentPath: 'guide/directives/overview',
          },
          {
            label: 'Attribute directives',
            path: 'guide/directives/attribute-directives',
            contentPath: 'guide/directives/attribute-directives',
          },
          {
            label: 'Structural directives',
            path: 'guide/directives/structural-directives',
            contentPath: 'guide/directives/structural-directives',
          },
          {
            label: 'Directive composition API',
            path: 'guide/directives/directive-composition-api',
            contentPath: 'guide/directives/directive-composition-api',
          },
        ],
      },
      {
        label: 'Dependency Injection',
        children: [
          {
            label: 'Overview',
            path: 'guide/di',
            contentPath: 'guide/di/overview',
          },
          {
            label: 'Understanding dependency injection',
            path: 'guide/di/dependency-injection',
            contentPath: 'guide/di/dependency-injection',
          },
          {
            label: 'Creating an injectable service',
            path: 'guide/di/creating-injectable-service',
            contentPath: 'guide/di/creating-injectable-service',
          },
          {
            label: 'Defining dependency providers',
            path: 'guide/di/dependency-injection-providers',
            contentPath: 'guide/di/dependency-injection-providers',
          },
          {
            label: 'Injection context',
            path: 'guide/di/dependency-injection-context',
            contentPath: 'guide/di/dependency-injection-context',
          },
          {
            label: 'Hierarchical injectors',
            path: 'guide/di/hierarchical-dependency-injection',
            contentPath: 'guide/di/hierarchical-dependency-injection',
          },
          {
            label: 'Optimizing injection tokens',
            path: 'guide/di/lightweight-injection-tokens',
            contentPath: 'guide/di/lightweight-injection-tokens',
          },
          {
            label: 'DI in action',
            path: 'guide/di/di-in-action',
            contentPath: 'guide/di/di-in-action',
          },
        ],
      },
      {
        label: 'Signals',
        children: [
          {
            label: 'Overview',
            path: 'guide/signals',
            contentPath: 'guide/signals/overview',
          },
          {
            label: 'RxJS Interop',
            path: 'guide/signals/rxjs-interop',
            contentPath: 'guide/signals/rxjs-interop',
          },
          {
            label: 'Inputs as signals',
            path: 'guide/signals/inputs',
            contentPath: 'guide/signals/inputs',
          },
          {
            label: 'Model inputs',
            path: 'guide/signals/model',
            contentPath: 'guide/signals/model',
          },
          {
            label: 'Queries as signals',
            path: 'guide/signals/queries',
            contentPath: 'guide/signals/queries',
          },
        ],
      },
      {
        label: 'Routing',
        children: [
          {
            label: 'Overview',
            path: 'guide/routing',
            contentPath: 'guide/routing/overview',
          },
          {
            label: 'Common routing tasks',
            path: 'guide/routing/common-router-tasks',
            contentPath: 'guide/routing/common-router-tasks',
          },
          {
            label: 'Routing in single-page applications',
            path: 'guide/routing/router-tutorial',
            contentPath: 'guide/routing/router-tutorial',
          },
          {
            label: 'Creating custom route matches',
            path: 'guide/routing/routing-with-urlmatcher',
            contentPath: 'guide/routing/routing-with-urlmatcher',
          },
          {
            label: 'Router reference',
            path: 'guide/routing/router-reference',
            contentPath: 'guide/routing/router-reference',
          },
        ],
      },
      {
        label: 'Forms',
        children: [
          {
            label: 'Overview',
            path: 'guide/forms',
            contentPath: 'guide/forms/overview',
          },
          {
            label: 'Reactive forms',
            path: 'guide/forms/reactive-forms',
            contentPath: 'guide/forms/reactive-forms',
          },
          {
            label: 'Strictly typed reactive forms',
            path: 'guide/forms/typed-forms',
            contentPath: 'guide/forms/typed-forms',
          },
          {
            label: 'Template-driven forms',
            path: 'guide/forms/template-driven-forms',
            contentPath: 'guide/forms/template-driven-forms',
          },
          {
            label: 'Validate form input',
            path: 'guide/forms/form-validation',
            contentPath: 'guide/forms/form-validation',
          },
          {
            label: 'Building dynamic forms',
            path: 'guide/forms/dynamic-forms',
            contentPath: 'guide/forms/dynamic-forms',
          },
        ],
      },
      {
        label: 'HTTP Client',
        children: [
          {
            label: 'Overview',
            path: 'guide/http',
            contentPath: 'guide/http/overview',
          },
          {
            label: 'Setting up HttpClient',
            path: 'guide/http/setup',
            contentPath: 'guide/http/setup',
          },
          {
            label: 'Making requests',
            path: 'guide/http/making-requests',
            contentPath: 'guide/http/making-requests',
          },
          {
            label: 'Intercepting requests and responses',
            path: 'guide/http/interceptors',
            contentPath: 'guide/http/interceptors',
          },
          {
            label: 'Testing',
            path: 'guide/http/testing',
            contentPath: 'guide/http/testing',
          },
        ],
      },
      {
        label: 'Performance',
        children: [
          {
            label: 'Overview',
            path: 'guide/performance',
            contentPath: 'guide/performance/overview',
          },
          {
            label: 'Deferrable views',
            path: 'guide/defer',
            contentPath: 'guide/defer',
          },
          {
            label: 'Image Optimization',
            path: 'guide/image-optimization',
            contentPath: 'guide/image-optimization',
          },
          {
            label: 'Server-side Rendering',
            path: 'guide/ssr',
            contentPath: 'guide/ssr',
          },
          {
            label: 'Build-time prerendering',
            path: 'guide/prerendering',
            contentPath: 'guide/prerendering',
          },
          {
            label: 'Hydration',
            path: 'guide/hydration',
            contentPath: 'guide/hydration',
          },
        ],
      },
      {
        label: 'Testing',
        children: [
          {
            label: 'Overview',
            path: 'guide/testing',
            contentPath: 'guide/testing/overview',
          },
          {
            label: 'Code coverage',
            path: 'guide/testing/code-coverage',
            contentPath: 'guide/testing/code-coverage',
          },
          {
            label: 'Testing services',
            path: 'guide/testing/services',
            contentPath: 'guide/testing/services',
          },
          {
            label: 'Basics of testing components',
            path: 'guide/testing/components-basics',
            contentPath: 'guide/testing/components-basics',
          },
          {
            label: 'Component testing scenarios',
            path: 'guide/testing/components-scenarios',
            contentPath: 'guide/testing/components-scenarios',
          },
          {
            label: 'Testing attribute directives',
            path: 'guide/testing/attribute-directives',
            contentPath: 'guide/testing/attribute-directives',
          },
          {
            label: 'Testing pipes',
            path: 'guide/testing/pipes',
            contentPath: 'guide/testing/pipes',
          },
          {
            label: 'Debugging tests',
            path: 'guide/testing/debugging',
            contentPath: 'guide/testing/debugging',
          },
          {
            label: 'Testing utility APIs',
            path: 'guide/testing/utility-apis',
            contentPath: 'guide/testing/utility-apis',
          },
        ],
      },
      {
        label: 'Internationalization',
        children: [
          {
            label: 'Overview',
            path: 'guide/i18n',
            contentPath: 'guide/i18n/overview',
          },
          {
            label: 'Add the localize package',
            path: 'guide/i18n/add-package',
            contentPath: 'guide/i18n/add-package',
          },
          {
            label: 'Refer to locales by ID',
            path: 'guide/i18n/locale-id',
            contentPath: 'guide/i18n/locale-id',
          },
          {
            label: 'Format data based on locale',
            path: 'guide/i18n/format-data-locale',
            contentPath: 'guide/i18n/format-data-locale',
          },
          {
            label: 'Prepare component for translation',
            path: 'guide/i18n/prepare',
            contentPath: 'guide/i18n/prepare',
          },
          {
            label: 'Work with translation files',
            path: 'guide/i18n/translation-files',
            contentPath: 'guide/i18n/translation-files',
          },
          {
            label: 'Merge translations into the app',
            path: 'guide/i18n/merge',
            contentPath: 'guide/i18n/merge',
          },
          {
            label: 'Deploy multiple locales',
            path: 'guide/i18n/deploy',
            contentPath: 'guide/i18n/deploy',
          },
          {
            label: 'Import global variants of the locale data',
            path: 'guide/i18n/import-global-variants',
            contentPath: 'guide/i18n/import-global-variants',
          },
          {
            label: 'Manage marked text with custom IDs',
            path: 'guide/i18n/manage-marked-text',
            contentPath: 'guide/i18n/manage-marked-text',
          },
          {
            label: 'Example Angular application',
            path: 'guide/i18n/example',
            contentPath: 'guide/i18n/example',
          },
        ],
      },
      {
        label: 'Animations',
        children: [
          {
            label: 'Overview',
            path: 'guide/animations',
            contentPath: 'guide/animations/overview',
          },
          {
            label: 'Transition and Triggers',
            path: 'guide/animations/transition-and-triggers',
            contentPath: 'guide/animations/transition-and-triggers',
          },
          {
            label: 'Complex Sequences',
            path: 'guide/animations/complex-sequences',
            contentPath: 'guide/animations/complex-sequences',
          },
          {
            label: 'Reusable Animations',
            path: 'guide/animations/reusable-animations',
            contentPath: 'guide/animations/reusable-animations',
          },
          {
            label: 'Route transition animations',
            path: 'guide/animations/route-animations',
            contentPath: 'guide/animations/route-animations',
          },
        ],
      },
      {
        label: 'Experimental features',
        children: [
          {label: 'Zoneless', path: 'guide/experimental/zoneless', contentPath: 'guide/zoneless'},
        ],
      },
    ],
  },
  {
    label: 'Developer Tools',
    children: [
      {
        label: 'Angular CLI',
        children: [
          {
            label: 'Overview',
            path: 'tools/cli',
            contentPath: 'tools/cli/overview',
          },
          {
            label: 'Local set-up',
            path: 'tools/cli/setup-local',
            contentPath: 'tools/cli/setup-local',
          },
          {
            label: 'Building Angular apps',
            path: 'tools/cli/build',
            contentPath: 'tools/cli/build',
          },
          {
            label: 'Serving Angular apps for development',
            path: 'tools/cli/serve',
            contentPath: 'tools/cli/serve',
          },
          {
            label: 'Deployment',
            path: 'tools/cli/deployment',
            contentPath: 'tools/cli/deployment',
          },
          {
            label: 'End-to-End Testing',
            path: 'tools/cli/end-to-end',
            contentPath: 'tools/cli/end-to-end',
          },
          {
            label: 'Migrating to new build system',
            path: 'tools/cli/build-system-migration',
            contentPath: 'tools/cli/build-system-migration',
          },
          {
            label: 'Build environments',
            path: 'tools/cli/environments',
            contentPath: 'tools/cli/environments',
          },
          {
            label: 'Angular CLI builders',
            path: 'tools/cli/cli-builder',
            contentPath: 'tools/cli/cli-builder',
          },
          {
            label: 'Generating code using schematics',
            path: 'tools/cli/schematics',
            contentPath: 'tools/cli/schematics',
          },
          {
            label: 'Authoring schematics',
            path: 'tools/cli/schematics-authoring',
            contentPath: 'tools/cli/schematics-authoring',
          },
          {
            label: 'Schematics for libraries',
            path: 'tools/cli/schematics-for-libraries',
            contentPath: 'tools/cli/schematics-for-libraries',
          },
          {
            label: 'Template type checking',
            path: 'tools/cli/template-typecheck',
            contentPath: 'tools/cli/template-typecheck',
          },
          {
            label: 'Ahead-of-time (AOT) compilation',
            path: 'tools/cli/aot-compiler',
            contentPath: 'tools/cli/aot-compiler',
          },
          {
            label: 'AOT metadata errors',
            path: 'tools/cli/aot-metadata-errors',
            contentPath: 'tools/cli/aot-metadata-errors',
          },
        ],
      },
      {
        label: 'Libraries',
        children: [
          {
            label: 'Overview',
            path: 'tools/libraries',
            contentPath: 'tools/libraries/overview',
          },
          {
            label: 'Creating Libraries',
            path: 'tools/libraries/creating-libraries',
            contentPath: 'tools/libraries/creating-libraries',
          },
          {
            label: 'Using Libraries',
            path: 'tools/libraries/using-libraries',
            contentPath: 'tools/libraries/using-libraries',
          },
          {
            label: 'Angular Package Format',
            path: 'tools/libraries/angular-package-format',
            contentPath: 'tools/libraries/angular-package-format',
          },
        ],
      },
      {
        label: 'DevTools',
        path: 'tools/devtools',
        contentPath: 'tools/devtools',
      },
      {
        label: 'Language Service',
        path: 'tools/language-service',
        contentPath: 'tools/language-service',
      },
    ],
  },
  {
    label: 'Best Practices',
    children: [
      {
        label: 'Style Guide',
        path: 'style-guide',
        contentPath: 'best-practices/style-guide',
      },
      {
        label: 'Security',
        path: 'best-practices/security',
        contentPath: 'guide/security', // Have not refactored due to build issues
      },
      {
        label: 'Accessibility',
        path: 'best-practices/a11y',
        contentPath: 'best-practices/a11y',
      },
      {
        label: 'Performance',
        children: [
          {
            label: 'Overview',
            path: 'best-practices/runtime-performance',
            contentPath: 'best-practices/runtime-performance/overview',
          },
          {
            label: 'Zone pollution',
            path: 'best-practices/zone-pollution',
            contentPath: 'best-practices/runtime-performance/zone-pollution',
          },
          {
            label: 'Slow computations',
            path: 'best-practices/slow-computations',
            contentPath: 'best-practices/runtime-performance/slow-computations',
          },
          {
            label: 'Skipping component subtrees',
            path: 'best-practices/skipping-subtrees',
            contentPath: 'best-practices/runtime-performance/skipping-subtrees',
          },
        ],
      },
      {
        label: 'Keeping up-to-date',
        path: 'update',
        contentPath: 'best-practices/update',
      },
    ],
  },
  {
    label: 'Extended Ecosystem',
    children: [
      {
        label: 'Service Workers & PWAs',
        children: [
          {
            label: 'Overview',
            path: 'ecosystem/service-workers',
            contentPath: 'ecosystem/service-workers/overview',
          },
          {
            label: 'Getting started',
            path: 'ecosystem/service-workers/getting-started',
            contentPath: 'ecosystem/service-workers/getting-started',
          },
          {
            label: 'Configuration file',
            path: 'ecosystem/service-workers/config',
            contentPath: 'ecosystem/service-workers/config',
          },
          {
            label: 'Communicating with the service worker',
            path: 'ecosystem/service-workers/communications',
            contentPath: 'ecosystem/service-workers/communications',
          },
          {
            label: 'Push notifications',
            path: 'ecosystem/service-workers/push-notifications',
            contentPath: 'ecosystem/service-workers/push-notifications',
          },
          {
            label: 'Service worker devops',
            path: 'ecosystem/service-workers/devops',
            contentPath: 'ecosystem/service-workers/devops',
          },
          {
            label: 'App shell pattern',
            path: 'ecosystem/service-workers/app-shell',
            contentPath: 'ecosystem/service-workers/app-shell',
          },
        ],
      },
      {
        label: 'Web workers',
        path: 'ecosystem/web-workers',
        contentPath: 'ecosystem/web-workers',
      },
      {
        label: 'Angular Fire',
        path: 'https://github.com/angular/angularfire#readme',
      },
      {
        label: 'Google Maps',
        path: 'https://github.com/angular/components/tree/main/src/google-maps#readme',
      },
      {
        label: 'Google Pay',
        path: 'https://github.com/google-pay/google-pay-button#angular',
      },
      {
        label: 'YouTube player',
        path: 'https://github.com/angular/components/blob/main/src/youtube-player/README.md',
      },
      {
        label: 'Angular CDK',
        path: 'https://material.angular.io/cdk/categories',
      },
      {
        label: 'Angular Material',
        path: 'https://material.angular.io/',
      },
    ],
  },
];

export const TUTORIALS_SUB_NAVIGATION_DATA: NavigationItem[] = [
  FIRST_APP_TUTORIAL_NAV_DATA,
  LEARN_ANGULAR_TUTORIAL_NAV_DATA,
  {
    path: DefaultPage.TUTORIALS,
    contentPath: 'tutorials/home',
    label: 'Tutorials',
  },
];

const FOOTER_NAVIGATION_DATA: NavigationItem[] = [
  {
    label: 'Press Kit',
    path: 'press-kit',
    contentPath: 'reference/press-kit',
  },
  {
    label: 'License',
    path: 'license',
    contentPath: 'reference/license',
  },
];

// Docs navigation data structure, it's used to display structure in
// navigation-list component And build the routing table for content pages.
export const SUB_NAVIGATION_DATA: SubNavigationData = {
  docs: DOCS_SUB_NAVIGATION_DATA,
  tutorials: TUTORIALS_SUB_NAVIGATION_DATA,
  footer: FOOTER_NAVIGATION_DATA,
};
