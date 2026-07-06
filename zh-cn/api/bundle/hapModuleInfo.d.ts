/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AbilityInfo } from './abilityInfo';

/**
 * Hap模块信息，未做特殊说明的属性，均通过
 * [bundle.getBundleInfo]{@link ./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions)}
 * 获取。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[bundleManager-HapModuleInfo]{@link hapModuleInfo:HapModuleInfo}替代。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead hapModuleInfo:HapModuleInfo
 */
export interface HapModuleInfo {
  /**
   * 模块名称。
   *
   * @default Indicates the name of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#name
   */
  readonly name: string;
  /**
   * 模块描述信息。
   *
   * @default Describes the hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#description
   */
  readonly description: string;
  /**
   * 描述信息ID。
   *
   * @default Indicates the description of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#descriptionId
   */
  readonly descriptionId: number;
  /**
   * 模块图标。
   *
   * @default Indicates the icon of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#icon
   */
  readonly icon: string;
  /**
   * 模块标签。
   *
   * @default Indicates the label of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#label
   */
  readonly label: string;
  /**
   * 模块标签ID。
   *
   * @default Indicates the label id of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#labelId
   */
  readonly labelId: number;
  /**
   * 模块图标ID。
   *
   * @default Indicates the icon id of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#iconId
   */
  readonly iconId: number;
  /**
   * 模块背景图片。
   *
   * @default Indicates the background img of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly backgroundImg: string;
  /**
   * 模块支持的模式。
   *
   * @default Indicates the supported modes of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly supportedModes: number;
  /**
   * 模块运行需要的能力。
   *
   * @default Indicates the req capabilities of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly reqCapabilities: Array<string>;
  /**
   * 支持运行的设备类型。
   *
   * @default The device types that this hapmodule can run on
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#deviceTypes
   */
  readonly deviceTypes: Array<string>;
  /**
   * Ability信息。
   *
   * @default Obtains configuration information about ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#abilitiesInfo
   */
  readonly abilityInfo: Array<AbilityInfo>;
  /**
   * 模块名。
   *
   * @default Indicates the name of the .hap package to which the capability belongs
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#name
   */
  readonly moduleName: string;
  /**
   * 入口Ability名称。
   *
   * @default Indicates the main ability name of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly mainAbilityName: string;
  /**
   * 是否支持免安装，取值为true表示支持免安装，取值为false表示不支持免安装。
   *
   * @default Indicates whether free installation of the hapmodule is supported
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#installationFree
   */
  readonly installationFree: boolean;
}