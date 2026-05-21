/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { ElementName } from '../bundleManager/ElementName';
import bundle from '../@ohos.bundle.bundleManager';

/**
 * The ExtensionRunningInfo module encapsulates ExtensionAbility running information, which can be obtained through
 * [getExtensionRunningInfos]{@link @ohos.app.ability.abilityManager:abilityManager.getExtensionRunningInfos(upperLimit: int, callback: AsyncCallback<Array<ExtensionRunningInfo>>)}
 * .
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ExtensionRunningInfo {
  /**
   * ExtensionAbility information.
   *
   * @default Indicates the extension of the extension info
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  extension: ElementName;

  /**
   * Process ID.
   *
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * UID of the application.
   *
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * Process name.
   *
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  processName: string;

  /**
   * Timestamp when the ExtensionAbility is started.
   *
   * @default ability start time
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  startTime: long;

  /**
   * Names of all packages in the process.
   *
   * @default All package names under the current process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  clientPackage: Array<String>;

  /**
   * ExtensionAbility type.
   *
   * @default Enumerates types of the extension info
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type: bundle.ExtensionAbilityType;
}