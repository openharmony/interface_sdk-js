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
 * Ability信息，未做特殊说明的属性，均通过
 * [bundle.getAbilityInfo]{@link ./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string)}获取。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[bundleManager-AbilityInfo]{@link abilityInfo:AbilityInfo}替代。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead abilityInfo:AbilityInfo
 */
export interface AbilityInfo {
  /**
   * 应用Bundle名称。
   *
   * @default Indicates the name of the bundle containing the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#bundleName
   */
  readonly bundleName: string;

  /**
   * Ability名称。
   *
   * @default Ability simplified class name
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#name
   */
  readonly name: string;

  /**
   * Ability对用户显示的名称。
   *
   * @default Indicates the label of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#label
   */
  readonly label: string;

  /**
   * Ability的描述。
   *
   * @default Describes the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#description
   */
  readonly description: string;

  /**
   * Ability的图标资源文件索引。
   *
   * @default Indicates the icon of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#icon
   */
  readonly icon: string;

  /**
   * Ability的标签的资源id值。
   *
   * @default Indicates the label id of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#labelId
   */
  readonly labelId: number;

  /**
   * Ability的描述的资源id值。
   *
   * @default Indicates the description id of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#descriptionId
   */
  readonly descriptionId: number;

  /**
   * Ability的图标的资源id值。
   *
   * @default Indicates the icon id of the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#iconId
   */
  readonly iconId: number;

  /**
   * Ability所属的HAP的名称。
   *
   * @default Indicates the name of the .hap package to which the capability belongs
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#moduleName
   */
  readonly moduleName: string;

  /**
   * Ability的进程名称。
   *
   * @default Process of ability, if user do not set it ,the value equal application process
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#process
   */
  readonly process: string;

  /**
   * 当前Ability重用的目标Ability。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @default Info about which ability is this nick point to
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly targetAbility: string;

  /**
   * 表示后台服务的类型。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @default Indicates the background service addressing a specific usage scenario
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly backgroundModes: number;

  /**
   * 判断Ability是否可以被其他应用调用，取值为true表示Ability可以被其他应用调用，取值为false表示Ability不可以被其他应用调用。
   *
   * @default Indicates whether an ability can be called by other abilities
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#exported
   */
  readonly isVisible: boolean;

  /**
   * 判断Ability是否提供卡片能力，取值为true表示Ability提供卡片能力，取值为false表示Ability不提供卡片能力。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @default Indicates whether the ability provides the embedded card capability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly formEnabled: boolean;

  /**
   * Ability类型。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @default Enumerates types of templates that can be used by an ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly type: bundle.AbilityType;

  /**
   * Ability中枚举使用的模板的子类型。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @default Enumerates the subType of templates used by an ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly subType: bundle.AbilitySubType;

  /**
   * Ability的显示模式。
   *
   * @default Enumerates ability display orientations
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#orientation
   */
  readonly orientation: bundle.DisplayOrientation;

  /**
   * Ability的启动模式。
   *
   * @default Enumerates ability launch modes
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#launchType
   */
  readonly launchMode: bundle.LaunchMode;

  /**
   * 被其他应用Ability调用时需要申请的权限集合。
   * 
   * 通过调用[bundle.getAbilityInfo]{@link ./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string)}
   * 接口时，传入GET_ABILITY_INFO_WITH_PERMISSION获取。
   *
   * @default The permissions that others need to launch this ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#permissions
   */
  readonly permissions: Array<string>;

  /**
   * Ability支持的设备类型。
   *
   * @default The device types that this ability can run on
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#deviceTypes
   */
  readonly deviceTypes: Array<string>;

  /**
   * Ability需要的设备能力。
   *
   * @default The device capability that this ability needs
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly deviceCapabilities: Array<string>;

  /**
   * 读取Ability数据所需的权限。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @default Indicates the permission required for reading ability data
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly readPermission: string;

  /**
   * 向Ability写数据所需的权限。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @default Indicates the permission required for writing data to the ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly writePermission: string;

  /**
   * 应用程序的配置信息。
   * 
   * 通过调用[bundle.getAbilityInfo]{@link ./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string)}
   * 接口时，传入GET_ABILITY_INFO_WITH_APPLICATION获取。
   *
   * @default Obtains configuration information about an application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#applicationInfo
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * 获取Ability的统一资源标识符（URI）。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @default Uri of ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly uri: string;

  /**
   * Ability的元信息。
   * 
   * 通过调用[bundle.getAbilityInfo]{@link ./../@ohos.bundle:bundle.getAbilityInfo(bundleName: string, abilityName: string)}
   * 接口时，传入GET_ABILITY_INFO_WITH_METADATA获取。
   *
   * @default Indicates the metadata of ability
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#metadata
   */
  readonly metaData: Array<CustomizeData>;

  /**
   * Ability是否可用，取值为true表示Ability可用，取值为false表示Ability不可用。
   *
   * @default Indicates whether the ability is enabled
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.AbilityInfo#enabled
   */
  readonly enabled: boolean;
}