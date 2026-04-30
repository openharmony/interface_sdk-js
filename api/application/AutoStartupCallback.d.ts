/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import type { AutoStartupInfo } from './AutoStartupInfo';
/*** endif */
/*** if arkts static */
import type AutoStartupInfo from './AutoStartupInfo';
/*** endif */

/**
 * The module defines the callback to be invoked when auto-startup is set or canceled for an application component.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface AutoStartupCallback {
  /**
   * Called when auto-startup is set for an application component.
   *
   * @param { AutoStartupInfo } info - Information about the target application component.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onAutoStartupOn(info: AutoStartupInfo): void;

  /**
   * Called when the auto-startup setting of an application component is canceled.
   *
   * @param { AutoStartupInfo } info - Information about the target application component.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onAutoStartupOff(info: AutoStartupInfo): void;
}

export default AutoStartupCallback;