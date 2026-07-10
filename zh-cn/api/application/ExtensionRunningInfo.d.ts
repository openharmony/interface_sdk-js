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
 * ExtensionRunningInfo模块封装了Extension运行的相关信息，可以通过
 * [getExtensionRunningInfos接口]{@link @ohos.app.ability.abilityManager:abilityManager.getExtensionRunningInfos(upperLimit: int, callback: AsyncCallback<Array<ExtensionRunningInfo>>)}
 * 获取。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface ExtensionRunningInfo {
  /**
   * Extension信息。
   *
   * @default Indicates the extension of the extension info
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  extension: ElementName;

  /**
   * 进程ID。
   *
   * @default process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * 应用程序的uid。
   *
   * @default user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * 进程名称。
   *
   * @default the name of the process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  processName: string;

  /**
   * Extension被启动时的时间戳。
   *
   * @default ability start time
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  startTime: long;

  /**
   * 表示当期进程下的所有包名。
   *
   * @default All package names under the current process
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  clientPackage: Array<String>;

  /**
   * Extension类型。
   *
   * @default Enumerates types of the extension info
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type: bundle.ExtensionAbilityType;
}