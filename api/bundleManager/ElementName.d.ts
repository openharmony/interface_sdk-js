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
 * A structured identifier for an application component, containing fields such as **bundleName**, **moduleName**, and
 * **abilityName**. It is usually used in
 * [AbilityRunningInfo.ability]{@link ./../application/AbilityRunningInfo:AbilityRunningInfo} for component launch
 * information and in the
 * [connectOptions.onConnect]{@link ./../ability/connectOptions:ConnectOptions.onConnect(elementName: ElementName, remote: rpc.IRemoteObject)}
 * callback for component connection.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ElementName {
  /**
   * Device ID.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  deviceId?: string;

  /**
   * Bundle name.
   *
   * @default Indicates bundle name
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Module name of the HAP file to which the ability belongs.
   *
   * @default Indicates module name
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  moduleName?: string;

  /**
   * Name of the ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  abilityName: string;

  /**
   * Resource ID.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  uri?: string;

  /**
   * Short name of the ability. It is a string starting with a period (.).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  shortName?: string;
}