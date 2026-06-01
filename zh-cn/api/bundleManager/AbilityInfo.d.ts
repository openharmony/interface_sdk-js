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
 * The module defines the ability information. An application can obtain its own ability information through 
 * [bundleManager.getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
 * , with **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_ABILITY** passed in to 
 * [bundleFlags]{@link ./../@ohos.bundle.bundleManager:bundleManager.BundleFlag}.
 *
 * @file
 * @kit AbilityKit
 */

import { ApplicationInfo } from './ApplicationInfo';
import { Metadata } from './Metadata';
import bundleManager from './../@ohos.bundle.bundleManager';
import { Skill } from './Skill';

/**
 * Ability信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface AbilityInfo {
  /**
   * 应用Bundle名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Ability所属的模块名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Ability名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Ability对用户显示的名称的资源描述符，对应[module.json5](docroot://quick-start/module-configuration-file.md)中abilities下配置的label字段。
   * 
   * **说明：** 从API version 20开始，如果是通过
   * [bundleManager.getAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getAbilityInfo}获取Ability信息，该字段为
   * Ability对用户显示的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * Ability的标签资源id，是编译构建时根据应用配置abilities下的label自动生成的资源id。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * Ability的描述，对应[module.json5](docroot://quick-start/module-configuration-file.md)中abilities下配置的description字段，用于描述当前
   * ability提供的页面内容和功能作用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly description: string;

  /**
   * Ability的描述资源id，是编译构建时根据应用配置abilities下的description自动生成的资源id。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * Ability的图标资源描述符，对应[module.json5](docroot://quick-start/module-configuration-file.md)中abilities下配置的icon字段。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * Ability的图标资源id，是编译构建时根据应用配置abilities下的icon自动生成的资源id。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Ability的进程名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly process: string;
  /**
   * 判断Ability是否可以被其他应用拉起，取值为true表示Ability可以被其他应用拉起，取值为false表示Ability不可以被其他应用拉起。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly exported: boolean;

  /**
   * Ability类型。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly type: bundleManager.AbilityType;

  /**
   * Ability的显示模式。来源于[module.json5](docroot://quick-start/module-configuration-file.md)中abilities标签下配置的orientation字段，如果
   * module.json5配置文件中orientation配置枚举，orientation属性有值且非0，取值详情参考
   * [显示模式枚举]{@link ./../@ohos.bundle.bundleManager:bundleManager.DisplayOrientation}；如果配置文件中配置的是资源索引，orientation属性值为0。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly orientation: bundleManager.DisplayOrientation;

  /**
   * Ability的启动模式，在启动的时候是否以多实例启动，详情参考[启动模式枚举]{@link ./../@ohos.bundle.bundleManager:bundleManager.LaunchType} 。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly launchType: bundleManager.LaunchType;

  /**
   * 被其他应用拉起/访问时，其他应用需要申请的权限集合，只有当前AbilityInfo的exported为true，即当前Ability可以被其他应用拉起时，才会查看其他应用是否存在拉起/访问的权限。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly permissions: Array<string>;

  /**
   * 读取Ability数据所需的权限。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly readPermission: string;

  /**
   * 向Ability写数据所需的权限。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly writePermission: string;

  /**
   * 获取Ability的统一资源标识符（URI）。
   * 
   * **模型约束：** 此接口仅可在FA模型下使用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  readonly uri: string;

  /**
   * Ability支持的设备类型，来源于module.json5配置的[deviceTypes](docroot://quick-start/module-configuration-file.md#devicetypes标签)。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deviceTypes: Array<string>;

  /**
   * 应用程序的配置信息<!--Del-->，可以通过调用
   * [queryAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.queryAbilityInfo(want: Want, abilityFlags: int, userId: int, callback: AsyncCallback<Array<AbilityInfo>>)}
   * 接口，abilityFlags参数传入GET_ABILITY_INFO_WITH_APPLICATION获取<!--DelEnd-->。
   * 
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}或
   * 者
   * [getBundleInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>)}
   * 接口获取AbilityInfo信息时不会返回该字段内容，可以通过获取[bundleInfo]{@link BundleInfo:BundleInfo}.appInfo对象来获取相关信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * 应用程序的配置信息<!--Del-->，可以通过调用
   * [queryAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.queryAbilityInfo(want: Want, abilityFlags: int, userId: int, callback: AsyncCallback<Array<AbilityInfo>>)}
   * 接口，abilityFlags参数传入GET_ABILITY_INFO_WITH_APPLICATION获取<!--DelEnd-->。
   * 
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}或
   * 者
   * [getBundleInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>)}
   * 接口获取AbilityInfo信息时不会返回该字段内容，可以通过获取[bundleInfo]{@link BundleInfo:BundleInfo}.appInfo对象来获取相关信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  readonly applicationInfo: ApplicationInfo | null;

  /**
   * Ability的元信息。可以配置成系统定义的参数，使用系统提供的能力，例如[快捷方式](docroot://quick-start/module-configuration-file.md#shortcuts标签)、
   * [窗口元数据配置](docroot://windowmanager/window-config-m.md)等。也可以自定义配置参数，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_ABILITY和GET_BUNDLE_INFO_WITH_METADATA获取。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly metadata: Array<Metadata>;

  /**
   * Ability是否可用，可用表示可以拉起或者查询，不可用时调用[getAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getAbilityInfo}
   * 查询ability需要携带GET_ABILITY_INFO_WITH_DISABLE的AbilityFlag，取值为true表示Ability可用，取值为false表示Ability不可用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled: boolean;

  /**
   * Ability支持的窗口模式。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly supportWindowModes: Array<bundleManager.SupportWindowMode>;

  /**
   * Ability窗口尺寸。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly windowSize: WindowSize;

  /**
   * 判断Ability是否可以在dock区域隐藏图标，取值为true表示可以隐藏，取值为false不可以隐藏。
   * 
   * **说明：** 该字段不生效。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly excludeFromDock: boolean;

  /**
   * Ability的Skills信息，标识UIAbility组件或者ExtensionAbility组件能够接收的[Want](docroot://application-models/want-overview.md)的特征。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly skills: Array<Skill>;

  /**
   * 应用包的分身索引标识，仅在[分身应用](docroot://quick-start/app-clone.md)中生效。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * Ability的显示模式资源id。来源于[module.json5](docroot://quick-start/module-configuration-file.md)中abilities标签下的orientation字段，如
   * 果module.json5配置文件中orientation配置枚举，orientationId属性值为0；如果配置文件中配置的是资源索引，orientationId属性值为非0，为编译构建时生成的资源id索引。当
   * orientationId不为0时表示当前显示模式为自定义配置，需要使用orientationId去资源管理获取对应的资源，当orientationId为0时表示未配置资源。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  readonly orientationId: long;
}

/**
 * 描述窗口尺寸。
 * 
 * **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface WindowSize {
  /**
   * 表示自由窗口状态下窗口的最大宽高比；取值范围0-1，例如：0.12。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly maxWindowRatio: double;

  /**
   * 表示自由窗口状态下窗口的最小宽高比；取值范围0-1，例如：0.5。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly minWindowRatio: double;

  /**
   * 表示自由窗口状态下窗口的最大宽度，宽度单位为vp。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly maxWindowWidth: long;

  /**
   * 表示自由窗口状态下窗口的最小宽度，宽度单位为vp。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly minWindowWidth: long;

  /**
   * 表示自由窗口状态下窗口的最大高度，高度单位为vp。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly maxWindowHeight: long;

  /**
   * 表示自由窗口状态下窗口的最小高度，高度单位为vp。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly minWindowHeight: long;
}