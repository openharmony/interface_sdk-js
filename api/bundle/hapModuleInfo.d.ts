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
 * The HapModuleInfo module provides information about an HAP module. Unless otherwise specified, the information is
 * obtained through
 * [bundle.getBundleInfo]{@link ./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions)}
 * .
 *
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use
 * > [bundleManager-HapModuleInfo]{@link hapModuleInfo:HapModuleInfo} instead.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead hapModuleInfo:HapModuleInfo
 */
export interface HapModuleInfo {
  /**
   * Module name.
   *
   * @default Indicates the name of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#name
   */
  readonly name: string;
  /**
   * Module description.
   *
   * @default Describes the hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#description
   */
  readonly description: string;
  /**
   * Module description ID.
   *
   * @default Indicates the description of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#descriptionId
   */
  readonly descriptionId: number;
  /**
   * Module icon.
   *
   * @default Indicates the icon of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#icon
   */
  readonly icon: string;
  /**
   * Module label.
   *
   * @default Indicates the label of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#label
   */
  readonly label: string;
  /**
   * Module label ID.
   *
   * @default Indicates the label id of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#labelId
   */
  readonly labelId: number;
  /**
   * Module icon ID.
   *
   * @default Indicates the icon id of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#iconId
   */
  readonly iconId: number;
  /**
   * Module background image.
   *
   * @default Indicates the background img of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly backgroundImg: string;
  /**
   * Running modes supported by the module.
   *
   * @default Indicates the supported modes of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly supportedModes: number;
  /**
   * Capabilities required for module running.
   *
   * @default Indicates the req capabilities of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly reqCapabilities: Array<string>;
  /**
   * Device types supported by the module.
   *
   * @default The device types that this hapmodule can run on
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#deviceTypes
   */
  readonly deviceTypes: Array<string>;
  /**
   * Ability information.
   *
   * @default Obtains configuration information about ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#abilitiesInfo
   */
  readonly abilityInfo: Array<AbilityInfo>;
  /**
   * Module name.
   *
   * @default Indicates the name of the .hap package to which the capability belongs
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#name
   */
  readonly moduleName: string;
  /**
   * Name of the main ability.
   *
   * @default Indicates the main ability name of this hapmodule
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly mainAbilityName: string;
  /**
   * Whether installation-free is supported. **true** if supported, **false** otherwise.
   *
   * @default Indicates whether free installation of the hapmodule is supported
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.HapModuleInfo#installationFree
   */
  readonly installationFree: boolean;
}