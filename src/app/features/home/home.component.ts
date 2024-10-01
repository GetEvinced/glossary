/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'adev-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home {
}
