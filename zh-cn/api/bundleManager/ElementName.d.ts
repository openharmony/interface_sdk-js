/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

/**
 * 应用组件结构体，包含bundleName、moduleName和abilityName等。通常用于组件启动信息
 * [AbilityRunningInfo.ability]{@link ./../application/AbilityRunningInfo:AbilityRunningInfo}和组件启动回调函数
 * [connectOptions.onConnect]{@link ./../ability/connectOptions:ConnectOptions.onConnect(elementName: ElementName, remote: rpc.IRemoteObject)}
 * 中。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ElementName {
  /**
   * 设备ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  deviceId?: string;

  /**
   * 应用Bundle名称。
   *
   * @default Indicates bundle name
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Ability所属的HAP的模块名称。
   *
   * @default Indicates module name
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  moduleName?: string;

  /**
   * Ability名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  abilityName: string;

  /**
   * 资源标识符。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  uri?: string;

  /**
   * Ability短名称，以“.”为开头的字符串。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  shortName?: string;
}