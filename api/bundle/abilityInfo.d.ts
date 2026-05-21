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

import { ApplicationInfo } from './applicationInfo';
import { CustomizeData } from './customizeData';
import bundle from './../@ohos.bundle';

/**
 * The module provides information about an ability. Unless otherwise specified, the information is obtained through
 * [bundle.getAbilityInfo]{@link ./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string)}.
 *
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use
 * > [bundleManager-AbilityInfo]{@link abilityInfo:AbilityInfo} instead.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead abilityInfo:AbilityInfo
 */
export interface AbilityInfo {
  /**
   * Bundle name.
   *
   * @default Indicates the name of the bundle containing the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#bundleName
   */
  readonly bundleName: string;

  /**
   * Ability name.
   *
   * @default Ability simplified class name
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#name
   */
  readonly name: string;

  /**
   * Ability name visible to users.
   *
   * @default Indicates the label of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#label
   */
  readonly label: string;

  /**
   * Ability description.
   *
   * @default Describes the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#description
   */
  readonly description: string;

  /**
   * Index of the ability icon resource file.
   *
   * @default Indicates the icon of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#icon
   */
  readonly icon: string;

  /**
   * ID of the ability label.
   *
   * @default Indicates the label id of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#labelId
   */
  readonly labelId: number;

  /**
   * ID of the ability description.
   *
   * @default Indicates the description id of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#descriptionId
   */
  readonly descriptionId: number;

  /**
   * ID of the ability icon.
   *
   * @default Indicates the icon id of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#iconId
   */
  readonly iconId: number;

  /**
   * Name of the HAP file to which the ability belongs.
   *
   * @default Indicates the name of the .hap package to which the capability belongs
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#moduleName
   */
  readonly moduleName: string;

  /**
   * Process name of the ability.
   *
   * @default Process of ability, if user do not set it ,the value equal application process
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#process
   */
  readonly process: string;

  /**
   * Target ability that the ability alias points to.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @default Info about which ability is this nick point to
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly targetAbility: string;

  /**
   * Background service mode of the ability.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @default Indicates the background service addressing a specific usage scenario
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly backgroundModes: number;

  /**
   * Whether the ability can be called by other applications. **true** if the ability can be called by other
   * applications, **false** otherwise.
   *
   * @default Indicates whether an ability can be called by other abilities
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#exported
   */
  readonly isVisible: boolean;

  /**
   * Whether the ability provides the service widget capability. **true** if the ability provides the service widget
   * capability, **false** otherwise.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @default Indicates whether the ability provides the embedded card capability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly formEnabled: boolean;

  /**
   * Ability type.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @default Enumerates types of templates that can be used by an ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly type: bundle.AbilityType;

  /**
   * Subtype of the template that can be used by the ability.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @default Enumerates the subType of templates used by an ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly subType: bundle.AbilitySubType;

  /**
   * Ability display orientation.
   *
   * @default Enumerates ability display orientations
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#orientation
   */
  readonly orientation: bundle.DisplayOrientation;

  /**
   * Ability launch mode.
   *
   * @default Enumerates ability launch modes
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#launchType
   */
  readonly launchMode: bundle.LaunchMode;

  /**
   * Permissions required for other applications to call the ability.
   *
   * The value is obtained by passing in GET_ABILITY_INFO_WITH_PERMISSION to
   * [bundle.getAbilityInfo]{@link ./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string)}.
   *
   * @default The permissions that others need to launch this ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#permissions
   */
  readonly permissions: Array<string>;

  /**
   * Device types supported by the ability.
   *
   * @default The device types that this ability can run on
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#deviceTypes
   */
  readonly deviceTypes: Array<string>;

  /**
   * Device capabilities required for the ability.
   *
   * @default The device capability that this ability needs
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly deviceCapabilities: Array<string>;

  /**
   * Permission required for reading the ability data.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @default Indicates the permission required for reading ability data
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly readPermission: string;

  /**
   * Permission required for writing data to the ability.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @default Indicates the permission required for writing data to the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly writePermission: string;

  /**
   * Application configuration information.
   *
   * The value is obtained by passing in GET_ABILITY_INFO_WITH_APPLICATION to
   * [bundle.getAbilityInfo]{@link ./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string)}.
   *
   * @default Obtains configuration information about an application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#applicationInfo
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * URI of the ability.
   *
   * **Model restriction**: This API can be used only in the FA model.
   *
   * @default Uri of ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly uri: string;

  /**
   * Metadata of the ability.
   *
   * The value is obtained by passing in GET_ABILITY_INFO_WITH_METADATA to
   * [bundle.getAbilityInfo]{@link ./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string)}.
   *
   * @default Indicates the metadata of ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#metadata
   */
  readonly metaData: Array<CustomizeData>;

  /**
   * Whether the ability is enabled. **true** if enabled, **false** otherwise.
   *
   * @default Indicates whether the ability is enabled
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#enabled
   */
  readonly enabled: boolean;
}