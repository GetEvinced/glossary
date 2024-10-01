/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {DestroyRef, inject, Injectable, signal} from '@angular/core';
import {filter, map, Subject} from 'rxjs';

export interface EditorUiStateConfig {
  displayOnlyInteractiveTerminal: boolean;
}
export const DEFAULT_EDITOR_UI_STATE: EditorUiStateConfig = {
  displayOnlyInteractiveTerminal: false,
};

@Injectable()
export class EditorUiState {
  private readonly destroyRef = inject(DestroyRef);

  private readonly stateChanged = new Subject<void>();

  stateChanged$ = this.stateChanged.asObservable();
  uiState = signal<EditorUiStateConfig>(DEFAULT_EDITOR_UI_STATE);

  constructor() {
    this.handleTutorialChange();
  }

  patchState(patch: Partial<EditorUiStateConfig>): void {
    this.uiState.update((state) => ({...state, ...patch}));
    this.stateChanged.next();
  }

  private handleTutorialChange() {
  }
}
