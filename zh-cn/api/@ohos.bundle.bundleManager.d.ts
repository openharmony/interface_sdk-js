/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { Metadata as _Metadata } from './bundleManager/Metadata';
import { PermissionDef as _PermissionDef } from './bundleManager/PermissionDef';
import { PluginBundleInfo as _PluginBundleInfo, PluginModuleInfo as _PluginModuleInfo} from './bundleManager/PluginBundleInfo';
import { ElementName as _ElementName } from './bundleManager/ElementName';
import { SharedBundleInfo as _SharedBundleInfo } from './bundleManager/SharedBundleInfo';
import Want from './@ohos.app.ability.Want';
import { ApplicationInfo as _ApplicationInfo, ModuleMetadata as _ModuleMetadata,
  PreinstalledApplicationInfo as _PreinstalledApplicationInfo } from './bundleManager/ApplicationInfo';
import { RecoverableApplicationInfo as _RecoverableApplicationInfo } from './bundleManager/RecoverableApplicationInfo';
import { AbilityInfo as _AbilityInfo, WindowSize as _WindowSize } from './bundleManager/AbilityInfo';
import { AppProvisionInfo as _AppProvisionInfo, Validity as _Validity } from './bundleManager/AppProvisionInfo';
import { BundleInfo as _BundleInfo, UsedScene as _UsedScene, ReqPermissionDetail as _ReqPermissionDetail,
  SignatureInfo as _SignatureInfo, AppCloneIdentity as _AppCloneIdentity, DynamicIconInfo as _DynamicIconInfo,
  BundleOptions as _BundleOptions, AlternateIconInfo as _AlternateIconInfo } from './bundleManager/BundleInfo';
import { HapModuleInfo as _HapModuleInfo, PreloadItem as _PreloadItem, Dependency as _Dependency,
  RouterItem as _RouterItem, DataItem as _DataItem } from './bundleManager/HapModuleInfo';
import { ExtensionAbilityInfo as _ExtensionAbilityInfo } from './bundleManager/ExtensionAbilityInfo';
import { Skill as _Skill, SkillUri as _SkillUri } from './bundleManager/Skill';
import type { RecordData } from './@ohos.base';
/**
 * 本模块提供应用信息的查询能力，支持应用包信息[BundleInfo]{@link bundleManager/BundleInfo}、应用程序信息
 * [ApplicationInfo]{@link bundleManager/ApplicationInfo}、UIAbility组件信息
 * [AbilityInfo]{@link bundleManager/AbilityInfo}、ExtensionAbility组件信息
 * [ExtensionAbilityInfo]{@link bundleManager/ExtensionAbilityInfo:ExtensionAbilityInfo}等信息的查询。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace bundleManager {
  /**
   * 包信息标志，指示需要获取的包信息的内容。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum BundleFlag {
    /**
     * 获取默认包信息，不包含signatureInfo、applicationInfo、hapModuleInfo、ability、extensionAbility和permission的信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_DEFAULT = 0x00000000,
    /**
     * 用于获取包含applicationInfo的bundleInfo，获取的bundleInfo不包含signatureInfo、hapModuleInfo、ability、extensionAbility和permission的
     * 信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_APPLICATION = 0x00000001,
    /**
     * 用于获取包含hapModuleInfo的bundleInfo，获取的bundleInfo不包含signatureInfo、applicationInfo、ability、extensionAbility和permission的
     * 信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_HAP_MODULE = 0x00000002,
    /**
     * 用于获取包含ability的bundleInfo，获取的bundleInfo不包含signatureInfo、applicationInfo、extensionAbility和permission的信息。单独使用不生效，需要与
     * GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_ABILITY = 0x00000004,
    /**
     * 用于获取包含extensionAbility的bundleInfo，获取的bundleInfo不包含signatureInfo、applicationInfo、ability 和permission的信息。单独使用不生效，需要
     * 与GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY = 0x00000008,
    /**
     * 用于获取包含permission的bundleInfo。获取的bundleInfo不包含signatureInfo、applicationInfo、hapModuleInfo、extensionAbility和ability的
     * 信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION = 0x00000010,
    /**
     * 用于获取applicationInfo、moduleInfo、abilityInfo和extensionAbilityInfo中包含的metadata。单独使用不生效，它需要与
     * GET_BUNDLE_INFO_WITH_APPLICATION、GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_ABILITY、
     * GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY配合使用，其中：
     * 
     * -?获取applicationInfo中包含的metadata，需要与GET_BUNDLE_INFO_WITH_APPLICATION一起使用。
     * 
     * -?获取moduleInfo中包含的metadata，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。
     * 
     * -?获取abilityInfo中包含的metadata，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_ABILITY一起使用。
     * 
     * -?获取extensionAbilityInfo中包含的metadata，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY一起使
     * 用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_METADATA = 0x00000020,
    /**
     * 用于获取application被禁用的BundleInfo和被禁用的Ability信息。获取的bundleInfo不包含signatureInfo、applicationInfo、hapModuleInfo、ability、
     * extensionAbility和permission的信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_DISABLE = 0x00000040,
    /**
     * 用于获取包含signatureInfo的bundleInfo。获取的bundleInfo不包含applicationInfo、hapModuleInfo、extensionAbility、ability和permission的
     * 信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_SIGNATURE_INFO = 0x00000080,
    /**
     * 用于获取包含fileContextMenuConfig的bundleInfo。单独使用不生效，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_MENU = 0x00000100,
    /**
     * 用于获取包含routerMap的bundleInfo。单独使用不生效，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE一起使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_ROUTER_MAP = 0x00000200,
    /**
     * 用于获取包含skills的bundleInfo。单独使用不生效，需要与GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_ABILITY、
     * GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY一起使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_SKILL = 0x00000800,
    /**
     * 用于获取仅包含有桌面图标的应用的bundleInfo。它仅在
     * [getAllBundleInfo]{@link bundleManager.getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>)}
     * 接口中生效。 
     * 
     * **系统API：** 该标记仅支持在系统API中使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_ONLY_WITH_LAUNCHER_ABILITY = 0x00001000,
    /**
     * 用于获取任意用户安装的bundleInfo。它不能单独使用，需要与GET_BUNDLE_INFO_WITH_APPLICATION一起使用。它仅在
     * [getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>)}
     * 、
     * [getAllBundleInfo]{@link bundleManager.getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>)}
     * 接口生效。
     * 
     * **系统API：** 该标记仅支持在系统API中使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_OF_ANY_USER = 0x00002000,
    /**
     * 用于获取去除分身应用而仅包含主应用的bundleInfo。它仅在
     * [getAllBundleInfo]{@link bundleManager.getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>)}
     * 接口中生效。 
     * 
     * **系统API：** 该标记仅支持在系统API中使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_EXCLUDE_CLONE = 0x00004000,
    /**
     * 用于获取启用端云文件同步能力或者端云结构化数据同步能力的应用的bundleInfo。它仅在
     * [getAllBundleInfo]{@link bundleManager.getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>)}
     * 接口中生效。 
     * 
     * **系统API：** 该标记仅支持在系统API中使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_CLOUD_KIT = 0x00008000,
    /**
     * 用于获取包含hapModuleInfo的bundleInfo，仅支持entry模块对应的bundleInfo.hapModulesInfo，如果entry模块不存在，bundleInfo.hapModulesInfo列表为空。
     * 获取的bundleInfo不包含signatureInfo、applicationInfo、ability、extensionAbility和permission的信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    GET_BUNDLE_INFO_WITH_ENTRY_MODULE = 0x00010000,
  }

  /**
   * 应用信息标志，指示需要获取的应用信息的内容。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ApplicationFlag {
    /**
     * 用于获取默认的applicationInfo，获取的applicationInfo不包含permission和metadata信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_APPLICATION_INFO_DEFAULT = 0x00000000,
    /**
     * 用于获取包含permission的applicationInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_APPLICATION_INFO_WITH_PERMISSION = 0x00000001,
    /**
     * 用于获取包含metadata的applicationInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_APPLICATION_INFO_WITH_METADATA = 0x00000002,
    /**
     * 用于获取包含禁用应用程序的applicationInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_APPLICATION_INFO_WITH_DISABLE = 0x00000004
  }

  /**
   * Ability组件信息标志，指示需要获取的Ability组件信息的内容。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  enum AbilityFlag {
    /**
     * 获取默认[AbilityInfo]{@link bundleManager/AbilityInfo}，获取的AbilityInfo不包含permissions、metadata、被禁用Ability对应的
     * AbilityInfo。<!--Del-->通过
     * [setAbilityEnabled接口]{@link @ohos.bundle.bundleManager:bundleManager.setAbilityEnabled(info: AbilityInfo, isEnabled: boolean, callback: AsyncCallback<void>)}
     * 可设置Ability禁用状态、通过
     * [isAbilityEnabled接口]{@link @ohos.bundle.bundleManager:bundleManager.isAbilityEnabled(info: AbilityInfo)}可获取
     * Ability禁用状态。<!--DelEnd-->
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi [since 9 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_ABILITY_INFO_DEFAULT = 0x00000000,
    /**
     * 获取包含permissions的AbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi [since 9 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_ABILITY_INFO_WITH_PERMISSION = 0x00000001,
    /**
     * 获取包含applicationInfo的AbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi [since 9 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_ABILITY_INFO_WITH_APPLICATION = 0x00000002,
    /**
     * 获取包含metadata的AbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi [since 9 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_ABILITY_INFO_WITH_METADATA = 0x00000004,
    /**
     * 获取被禁用Ability对应的AbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi [since 9 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_ABILITY_INFO_WITH_DISABLE = 0x00000008,
    /**
     * 获取系统应用对应的AbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi [since 9 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_ABILITY_INFO_ONLY_SYSTEM_APP = 0x00000010,
    /**
     * 获取通过<!--RP3-->[域名校验](docroot://application-models/app-linking-startup.md#实现原理)<!--RP3End-->筛选的AbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GET_ABILITY_INFO_WITH_APP_LINKING = 0x00000040,
    /**
     * 获取包含skills的AbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GET_ABILITY_INFO_WITH_SKILL = 0x00000080
  }

  /**
   * 扩展组件信息标志，指示需要获取的扩展组件信息的内容。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ExtensionAbilityFlag {
    /**
     * 用于获取默认extensionAbilityInfo。获取的extensionAbilityInfo不包含permission、metadata 和禁用的extensionAbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_DEFAULT = 0x00000000,
    /**
     * 用于获取包含permission的extensionAbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_WITH_PERMISSION = 0x00000001,
    /**
     * 用于获取包含applicationInfo的extensionAbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_WITH_APPLICATION = 0x00000002,
    /**
     * 用于获取包含metadata的extensionAbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_WITH_METADATA = 0x00000004,
    /**
     * 用于获取包含skills的extensionAbilityInfo。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_WITH_SKILL = 0x00000010
  }

  /**
   * 扩展组件的类型。
   * 
   * <!--Table: 30%; 10%; 60%-->
   * 
   * <!--RP2--><!--RP2End-->
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ExtensionAbilityType {
    /**
     * [FormExtensionAbility]{@link @ohos.app.form.FormExtensionAbility}：卡片扩展能力，提供卡片开发能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FORM = 0,

    /**
     * [WorkSchedulerExtensionAbility]{@link @ohos.WorkSchedulerExtensionAbility}：延时任务扩展能力，允许应用在系统闲时执行实时性不高的任务。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WORK_SCHEDULER = 1,

    /**
     * [InputMethodExtensionAbility]{@link @ohos.InputMethodExtensionAbility:InputMethodExtensionAbility}：输入法扩展能力，用于开发输入
     * 法应用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    INPUT_METHOD = 2,

    /**
     * [ServiceExtensionAbility]{@link @ohos.app.ability.ServiceExtensionAbility:ServiceExtensionAbility}：后台服务扩展能力，提供后台运
     * 行并对外提供相应能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE = 3,

    /**
     * AccessibilityExtensionAbility：无障碍服务扩展能力，支持访问与操作前台界面。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ACCESSIBILITY = 4,

    /**
     * [DataShareExtensionAbility]{@link @ohos.application.DataShareExtensionAbility}：数据共享扩展能力，用于对外提供数据读写服务。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    DATA_SHARE = 5,

    /**
     * FileShareExtensionAbility：文件共享扩展能力，用于应用间的文件分享。预留能力，仅系统应用支持。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    FILE_SHARE = 6,

    /**
     * [StaticSubscriberExtensionAbility]{@link @ohos.application.StaticSubscriberExtensionAbility:StaticSubscriberExtensionAbility}
     * ：静态广播扩展能力，用于处理静态事件，比如开机事件。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    STATIC_SUBSCRIBER = 7,

    /**
     * WallpaperExtensionAbility：壁纸扩展能力，用于实现桌面壁纸。预留能力，仅系统应用支持。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WALLPAPER = 8,

    /**
     * [BackupExtensionAbility]{@link @ohos.application.BackupExtensionAbility}：数据备份扩展能力，提供应用数据的备份恢复能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    BACKUP = 9,

    /**
     * [WindowExtensionAbility]{@link @ohos.application.WindowExtensionAbility}：界面组合扩展能力，允许系统应用进行跨应用的界面拉起和嵌入。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WINDOW = 10,

    /**
     * [EnterpriseAdminExtensionAbility]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility}
     * ：企业设备管理扩展能力，提供企业管理时处理管理事件的能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ENTERPRISE_ADMIN = 11,

    /**
     * ThumbnailExtensionAbility：文件缩略图扩展能力，用于为文件提供图标缩略图的能力。预留能力，仅系统应用支持。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    THUMBNAIL = 13,

    /**
     * PreviewExtensionAbility：文件预览扩展能力，提供文件预览的能力，其他应用可以直接在应用中嵌入显示。预留能力，仅系统应用支持。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    PREVIEW = 14,

    /**
     * PrintExtensionAbility：文件打印扩展能力，提供应用打印照片、文档等办公场景。仅系统应用支持。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PRINT = 15,

    /**
     * [ShareExtensionAbility]{@link @ohos.app.ability.ShareExtensionAbility:ShareExtensionAbility}：提供分享业务能力，为开发者提供基于
     * UIExtension的分享业务模板。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    SHARE = 16,

    /**
     * PushExtensionAbility：推送扩展能力，提供推送场景化消息能力。预留能力，仅系统应用支持。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PUSH = 17,

    /**
     * [DriverExtensionAbility]{@link @ohos.app.ability.DriverExtensionAbility}：驱动扩展能力，提供外设驱动扩展能力。应用配置了driver类型的
     * ExtensionAbility后会被视为驱动应用，驱动应用在安装、卸载和恢复时不会区分用户，且创建新用户时也会安装设备上已有的驱动应用。例如，创建子用户时会默认安装主用户已有的驱动应用，在子用户上卸载驱动应用时，主用户上对应
     * 的驱动应用也会同时被卸载。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DRIVER = 18,

    /**
     * [ActionExtensionAbility]{@link @ohos.app.ability.ActionExtensionAbility:ActionExtensionAbility}：自定义服务扩展能力，为开发者提供基
     * 于UIExtension的自定义操作业务模板。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    ACTION = 19,

    /**
     * AdsServiceExtensionAbility：广告服务扩展能力，对外提供后台自定义广告业务服务，仅系统应用支持。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 11 dynamic
     * @since 23 static
     */
    ADS_SERVICE = 20,

    /**
     * [EmbeddedUIExtensionAbility]{@link @ohos.app.ability.EmbeddedUIExtensionAbility:EmbeddedUIExtensionAbility}：嵌入式UI
     * 扩展能力，提供跨进程界面嵌入的能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    EMBEDDED_UI = 21,

    /**
     * InsightIntentUIExtensionAbility：为开发者提供能被小艺意图调用，以窗口形态呈现内容的扩展能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INSIGHT_INTENT_UI = 22,

    /**
     * [FenceExtensionAbility]{@link @ohos.app.ability.FenceExtensionAbility:FenceExtensionAbility}：为开发者提供地理围栏相关的能力，继承自
     * ExtensionAbility。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 18 dynamic
     * @since 23 static
     */
    FENCE = 24,

    /**
     * Indicates extension info with type of CALLER_INFO_QUERY
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 19 dynamic
     * @since 23 static
     */
    CALLER_INFO_QUERY = 25,

    /**
     * AssetAccelerationExtensionAbility：资源预下载扩展能力，提供在设备闲时状态，进行后台资源预下载的能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 18 dynamic
     * @since 23 static
     */
    ASSET_ACCELERATION = 26,

    /**
     * [FormEditExtensionAbility]{@link @ohos.app.form.FormEditExtensionAbility:FormEditExtensionAbility}：为开发者提供卡片编辑的能力，
     * 继承自UIExtensionAbility。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 18 dynamic
     * @since 23 static
     */
    FORM_EDIT = 27,

    /**
     * [DistributedExtensionAbility]{@link @ohos.application.DistributedExtensionAbility:DistributedExtensionAbility}：提供
     * 分布式相关扩展能力，提供分布式创建、销毁、连接的生命周期回调。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DISTRIBUTED = 28,

    /**
     * [AppServiceExtensionAbility]{@link @ohos.app.ability.AppServiceExtensionAbility:AppServiceExtensionAbility}：为企业普通
     * 应用提供后台服务能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 20 dynamic
     * @since 23 static
     */
    APP_SERVICE = 29,

    /**
     * [LiveFormExtensionAbility]{@link @ohos.app.form.LiveFormExtensionAbility}：互动卡片相关扩展能力，提供互动卡片创建、销毁的生命周期回调。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    LIVE_FORM = 30,

    /**
     * [SelectionExtensionAbility]{@link @ohos.selectionInput.SelectionExtensionAbility:SelectionExtensionAbility}：为开发者提
     * 供划词弹窗能力的ExtensionAbility。
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SELECTION = 31,

    /**
     * [WebNativeMessagingExtensionAbility]{@link @ohos.web.WebNativeMessagingExtensionAbility}：为开发者提供Web原生消息通信能力的
     * ExtensionAbility。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 21 dynamic
     * @since 23 static
     */
    WEB_NATIVE_MESSAGING = 32,

    /**
     * [FaultLogExtensionAbility]{@link @ohos.hiviewdfx.FaultLogExtensionAbility:FaultLogExtensionAbility}：提供故障延迟通知的能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 21 dynamic
     * @since 23 static
     */
    FAULT_LOG = 33,

    /**
     * [NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility}
     * ：提供通知订阅的相关功能。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 22 dynamic
     * @since 23 static
     */
    NOTIFICATION_SUBSCRIBER = 34,

    /**
     * [CryptoExtensionAbility](docroot://security/UniversalKeystoreKit/huks-extension-ability-support-dev.md)：提供外部密钥管理扩
     * 展的相关功能。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 22 dynamic
     */
    CRYPTO = 35,

    /**
     * [PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}：基于蓝牙通信技术，提供设备发现与设备下线的
     * 通知功能。
     * 
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PARTNER_AGENT = 36,

    /**
     * [AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)：提供智能体扩展能
     * 力，包括智能体服务的创建、销毁、连接、断开的生命周期回调接口，以及接收客户端所发送数据和安全认证的回调接口。
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AGENT = 37,

    /**
     * [AgentUIExtensionAbility](docroot://reference/apis-ability-kit/js-apis-agent-agentUIExtensionAbility.md)：为开发者提供接入
     * 端侧Agent UI界面显示能力。
     *
     * **模型约束**：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AGENT_UI = 38,

    /**
     * 不指定类型<!--Del-->，配合
     * [queryExtensionAbilityInfo接口]{@link @ohos.bundle.bundleManager:bundleManager.queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: int, userId: int, callback: AsyncCallback<Array<ExtensionAbilityInfo>>)}
     * 可以查询所有类型的ExtensionAbility<!--DelEnd-->。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 255
  }

  /**
   * 权限授予状态。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum PermissionGrantState {
    /**
     * 拒绝授予权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PERMISSION_DENIED = -1,

    /**
     * 授予权限。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PERMISSION_GRANTED = 0
  }

  /**
   * 标识该组件所支持的窗口模式。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SupportWindowMode {
    /**
     * 窗口支持全屏显示。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FULL_SCREEN = 0,
    /**
     * 窗口支持分屏显示。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SPLIT = 1,
    /**
     * 支持窗口化显示，即显示悬浮窗口。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FLOATING = 2
  }

  /**
   * 标识组件的[启动模式](docroot://application-models/uiability-launch-type.md)。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LaunchType {
    /**
     * UIAbility的启动模式，表示单实例。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SINGLETON = 0,

    /**
     * UIAbility的启动模式，表示普通多实例。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MULTITON = 1,

    /**
     * UIAbility的启动模式，表示该UIAbility内部根据业务自己指定多实例。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SPECIFIED = 2
  }

  /**
   * 标识Ability组件的类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  export enum AbilityType {
    /**
     * UI界面类型的Ability。表示基于Page模板开发的FA，用于提供与用户交互的能力。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @FAModelOnly
     * @since 9 dynamiconly
     */
    PAGE = 1,

    /**
     * 后台服务类型的Ability，无UI界面。表示基于Service模板开发的[ParticleAbility]{@link @ohos.ability.particleAbility:particleAbility}，用于提供后
     * 台运行任务的能力，例如后台下载或者播放音乐。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @FAModelOnly
     * @since 9 dynamiconly
     */
    SERVICE = 2,

    /**
     * 表示基于Data模板开发的[ParticleAbility]{@link @ohos.ability.particleAbility:particleAbility}，用于对外部提供统一的数据访问对象。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @FAModelOnly
     * @since 9 dynamiconly
     */
    DATA = 3
  }

  /**
   * 标识该Ability的显示模式。仅适用于FA模型的[PageAbility](docroot://application-models/pageability-overview.md)。
   * 
   * <!--Table: 40%; 10%; 50%-->
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DisplayOrientation {
    /**
     * 表示未定义方向模式，由系统判定。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * 表示横屏显示模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE = 1,

    /**
     * 表示竖屏显示模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT = 2,

    /**
     * 表示跟随上一个显示模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FOLLOW_RECENT = 3,

    /**
     * 表示反向横屏显示模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE_INVERTED = 4,

    /**
     * 表示反向竖屏显示模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 5,

    /**
     * 表示传感器在旋转到横向和竖向时，页面会自动旋转。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION = 6,

    /**
     * 表示传感器在旋转到横向时，页面会自动旋转。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE = 7,

    /**
     * 表示传感器在旋转到竖向时，页面会自动旋转。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT = 8,

    /**
     * 表示受开关控制的自动旋转模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_RESTRICTED = 9,

    /**
     * 表示受开关控制的自动横向旋转模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE_RESTRICTED = 10,

    /**
     * 表示受开关控制的自动竖向旋转模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT_RESTRICTED = 11,

    /**
     * 表示锁定模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCKED = 12,

    /**
     * 受开关控制和由系统判定的自动旋转模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_UNSPECIFIED = 13,

    /**
     * 跟随桌面的旋转模式。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_DESKTOP = 14
  }

  /**
   * 标识模块类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ModuleType {
    /**
     * 应用的主模块，作为应用的入口，提供了应用的基础功能。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ENTRY = 1,
    /**
     * 应用的动态特性模块，作为应用能力的扩展，可以根据用户的需求和设备类型进行选择性安装。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FEATURE = 2,
    /**
     * 应用的[动态共享库](docroot://quick-start/in-app-hsp.md)模块。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SHARED = 3
  }

  /**
   * 标识应用的类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BundleType {
    /**
     * 该Bundle是应用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    APP = 0,
    /**
     * 该Bundle是原子化服务。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ATOMIC_SERVICE = 1
  }

  /**
   * 标识动态共享库的版本兼容类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum CompatiblePolicy {
    /**
     * 共享库是向后兼容类型。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    BACKWARD_COMPATIBILITY = 1
  }

  /**
   * 标识配置文件类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ProfileType {
    /**
     * 意图框架配置文件。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    INTENT_PROFILE = 1,

    /**
     * [端云同步]{@link @ohos.file.cloudSync:cloudSync}配置文件。
     * 26.0.0
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CLOUD_PROFILE = 8
  }

  /**
   * 标识应用[HarmonyAppProvision配置文件说明](docroot://security/app-provision-structure.md)。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum AppDistributionType {
    /**
     * 应用市场安装的应用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    APP_GALLERY = 1,

    /**
     * 企业应用，可以安装到个人设备上。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ENTERPRISE = 2,

    /**
     * 普通企业应用，只能通过企业MDM应用安装在企业设备上。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ENTERPRISE_NORMAL = 3,

    /**
     * 企业MDM应用，只能安装在企业设备上。需要被激活
     * [adminManager.enableAdmin]{@link @ohos.enterprise.adminManager:adminManager.enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, callback: AsyncCallback<void>)}
     * 后，才能安装普通企业应用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ENTERPRISE_MDM = 4,

    /**
     * 系统预置应用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OS_INTEGRATION = 5,

    /**
     * 众包测试应用，是由应用市场分发给部分用户，有一定的有效期的特定应用，系统检测到应用的有效期到期后，会通知用户到应用市场更新release版本的应用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CROWDTESTING = 6,

    /**
     * 其他。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 7
  }

  /**
   * 标识应用多开的模式类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  export enum MultiAppModeType {
    /**
     * 未指定类型，表示[multiAppMode配置](docroot://quick-start/app-configuration-file.md#multiappmode标签)未配置时的默认状态。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,
    /**
     * [多实例模式](docroot://quick-start/multiInstance.md)。常驻进程不支持该字段。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    MULTI_INSTANCE = 1,
    /**
     * [分身模式](docroot://quick-start/app-clone.md)。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    APP_CLONE = 2
  }

  /**
   * 标识应用和用户之间的各种状态类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum ApplicationInfoFlag {
    /**
     * 表示指定用户安装应用的状态为已安装状态。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FLAG_INSTALLED = 0x00000001,
    /**
     * 表示除指定用户外，其他用户的应用安装状态为已安装。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    FLAG_OTHER_INSTALLED = 0x00000010,
    /**
     * 表示应用的预置属性为预置应用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    FLAG_PREINSTALLED_APP = 0x00000020,
    /**
     * 表示该预置应用的更新状态为已更新。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    FLAG_PREINSTALLED_APP_UPDATE = 0x00000040
  }

  /**
   * 标识应用的安装状态。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  export enum BundleInstallStatus {
    /**
     * 应用未安装。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    BUNDLE_NOT_EXIST = 1,

    /**
     * 应用正在安装。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    BUNDLE_INSTALLING = 2,

    /**
     * 应用已安装完成。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    BUNDLE_INSTALLED = 3
  }

  /**
   * 根据给定的bundleFlags获取当前应用的BundleInfo。使用Promise异步回调。
   *
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @returns { Promise<BundleInfo> } Promise对象，返回当前应用的BundleInfo。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleInfoForSelf(bundleFlags: int): Promise<BundleInfo>;

  /**
   * 根据给定的bundleFlags获取当前应用的BundleInfo。使用callback异步回调。
   *
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @param { AsyncCallback<BundleInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的当前应用的BundleInfo；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleInfoForSelf(bundleFlags: int, callback: AsyncCallback<BundleInfo>): void;

  /**
   * 以同步方法根据给定的bundleFlags获取当前应用的BundleInfo。
   *
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @returns { BundleInfo } 返回BundleInfo对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function getBundleInfoForSelfSync(bundleFlags: int): BundleInfo;

  /**
   * 根据给定的bundleName和bundleFlags获取BundleInfo。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @param { AsyncCallback<BundleInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的BundleInfo；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getBundleInfo(bundleName: string, bundleFlags: int, callback: AsyncCallback<BundleInfo>): void;

  /**
   * 根据给定的bundleName、bundleFlags和userId获取[BundleInfo]{@link bundleManager/BundleInfo}。使用callback异步回调。
   * 
   * 获取调用方自身信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<BundleInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的bundleInfo；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>): void;

  /**
   * 根据给定的bundleName、bundleFlags和userId获取BundleInfo。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<BundleInfo> } Promise对象，返回BundleInfo。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getBundleInfo(bundleName: string, bundleFlags: int, userId?: int): Promise<BundleInfo>;

  /**
   * 根据给定的bundleName和appFlags获取ApplicationInfo。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } appFlags - 指定返回的ApplicationInfo所包含的信息，具体取值及不同含义参考
   *     [ApplicationFlag]{@link bundleManager.ApplicationFlag}。
   * @param { AsyncCallback<ApplicationInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的ApplicationInfo；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getApplicationInfo(bundleName: string, appFlags: int, callback: AsyncCallback<ApplicationInfo>): void;

  /**
   * 根据给定的bundleName、appFlags和userId获取ApplicationInfo。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } appFlags - 指定返回的ApplicationInfo所包含的信息，具体取值及不同含义参考
   *     [ApplicationFlag]{@link bundleManager.ApplicationFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<ApplicationInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的ApplicationInfo；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getApplicationInfo(bundleName: string, appFlags: int, userId: int, callback: AsyncCallback<ApplicationInfo>): void;

  /**
   * 根据给定的bundleName、appFlags和userId获取ApplicationInfo。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } appFlags - 指定返回的ApplicationInfo所包含的信息，具体取值及不同含义参考
   *     [ApplicationFlag]{@link bundleManager.ApplicationFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<ApplicationInfo> } Promise对象。返回ApplicationInfo。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getApplicationInfo(bundleName: string, appFlags: int, userId?: int): Promise<ApplicationInfo>;

  /**
   * 根据给定的bundleFlags获取系统中所有的BundleInfo。使用callback异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @param { AsyncCallback<Array<BundleInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的Array<BundleInfo>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllBundleInfo(bundleFlags: int, callback: AsyncCallback<Array<BundleInfo>>): void;

  /**
   * 根据给定的bundleFlags和userId获取系统中所有的BundleInfo。使用callback异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<Array<BundleInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的Array<BundleInfo>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>): void;

  /**
   * 根据给定的bundleFlags和userId获取系统中所有的BundleInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Array<BundleInfo>> } Promise对象。返回Array<BundleInfo>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllBundleInfo(bundleFlags: int, userId?: int): Promise<Array<BundleInfo>>;

  /**
   * 根据给定的appFlags获取系统中所有的ApplicationInfo。使用callback异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } appFlags - 指定返回的ApplicationInfo所包含的信息，具体取值及不同含义参考
   *     [ApplicationFlag]{@link bundleManager.ApplicationFlag}。
   * @param { AsyncCallback<Array<ApplicationInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，
   *     err为undefined，data为获取到的Array<ApplicationInfo>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllApplicationInfo(appFlags: int, callback: AsyncCallback<Array<ApplicationInfo>>): void;

  /**
   * 根据给定的appFlags和userId获取系统中所有的ApplicationInfo。使用callback异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } appFlags - 指定返回的ApplicationInfo所包含的信息，具体取值及不同含义参考
   *     [ApplicationFlag]{@link bundleManager.ApplicationFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<Array<ApplicationInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，
   *     err为undefined，data为获取到的Array<ApplicationInfo>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllApplicationInfo(appFlags: int,
    userId: int, callback: AsyncCallback<Array<ApplicationInfo>>): void;

  /**
   * 根据给定的appFlags和userId获取系统中所有的ApplicationInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } appFlags - 指定返回的ApplicationInfo所包含的信息，具体取值及不同含义参考
   *     [ApplicationFlag]{@link bundleManager.ApplicationFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Array<ApplicationInfo>> } Promise对象，返回Array<ApplicationInfo>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllApplicationInfo(appFlags: int, userId?: int): Promise<Array<ApplicationInfo>>;

  /**
   * 根据给定的want和abilityFlags获取一个或多个AbilityInfo。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 表示包含要查询的应用Bundle名称的Want。
   * @param { int } abilityFlags - 指定返回的AbilityInfo所包含的信息，具体取值及不同含义参考[AbilityFlag]{@link bundleManager.AbilityFlag}。
   * @param { AsyncCallback<Array<AbilityInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的Array<AbilityInfo>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function queryAbilityInfo(want: Want, abilityFlags: int, callback: AsyncCallback<Array<AbilityInfo>>): void;

  /**
   * 根据给定的want、abilityFlags和userId获取多个AbilityInfo。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 表示包含要查询的应用Bundle名称的Want。
   * @param { int } abilityFlags - 指定返回的AbilityInfo所包含的信息，具体取值及不同含义参考[AbilityFlag]{@link bundleManager.AbilityFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<Array<AbilityInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的Array<AbilityInfo>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function queryAbilityInfo(want: Want, abilityFlags: int, userId: int, callback: AsyncCallback<Array<AbilityInfo>>): void;

  /**
   * 根据给定的want、abilityFlags和userId获取一个或多个AbilityInfo。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 表示包含要查询的应用Bundle名称的Want。
   * @param { int } abilityFlags - 表示指定返回的AbilityInfo所包含的信息，具体取值及不同含义参考[AbilityFlag]{@link bundleManager.AbilityFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Array<AbilityInfo>> } Promise对象，返回Array<AbilityInfo>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function queryAbilityInfo(want: Want, abilityFlags: int, userId?: int): Promise<Array<AbilityInfo>>;

  /**
   * 获取指定资源标识符和组件信息标志对应的Ability信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_ABILITY_INFO
   * @param { string } uri - 表示统一资源标识符URI，取值与
   *     [module.json5配置文件中skills下的uris字段](docroot://quick-start/module-configuration-file.md#skills标签)相对应。
   * @param { int } abilityFlags - 表示[Ability组件信息标志]{@link @ohos.bundle.bundleManager:bundleManager.AbilityFlag}，指示需要获取的
   *     Ability组件信息的内容。
   * @returns { Promise<Array<AbilityInfo>> } Promise对象，返回获取到的Ability信息数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 17700003 - The ability is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getAbilityInfo(uri: string, abilityFlags: int): Promise<Array<AbilityInfo>>;

  /**
   * 设置当前应用支持打开的文件类型。
   *
   * @permission ohos.permission.MANAGE_SELF_SKILLS
   * @param { string } moduleName - 表示模块的名称。
   * @param { string } abilityName - 表示UIAbility组件的名称。
   * @param { Array<string> } fileTypes - 表示文件类型。fileTypes数组长度不能超过1024，每个元素不能超过512个字符，元素取值为
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}中的值，元素不能为空、通配符、
   *     general.object。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @throws { BusinessError } 17700351 - Invalid fileTypes. Possible causes:
   *     1. The array length exceeds 1024;
   *     2. The array contains an empty item;
   *     3. An item exceeds 512 characters;
   *     4. The array contains wildcard or general.object.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function setAbilityFileTypesForSelf(moduleName: string, abilityName: string, fileTypes: Array<string>): void;

  /**
   * 根据给定的want列表、abilityFlags和userId获取一个或多个AbilityInfo。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Array<Want> } wants - 表示包含要查询的应用Bundle名称的Want集合。
   * @param { int } abilityFlags - 表示指定返回的AbilityInfo所包含的信息，具体取值及不同含义参考[AbilityFlag]{@link bundleManager.AbilityFlag}。
   * @param { int } [userId] - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Array<AbilityInfo>> } Promise对象，返回Array<[AbilityInfo]{@link bundleManager/AbilityInfo}>信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function queryAbilityInfo(wants: Array<Want>, abilityFlags: int, userId?: int): Promise<Array<AbilityInfo>>;

  /**
   * 以同步方法根据给定的want、abilityFlags和userId获取一个或多个AbilityInfo。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 表示包含要查询的应用Bundle名称的Want。
   * @param { int } abilityFlags - 表示指定返回的AbilityInfo所包含的信息，具体取值及不同含义参考[AbilityFlag]{@link bundleManager.AbilityFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Array<AbilityInfo> } Array<AbilityInfo>信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function queryAbilityInfoSync(want: Want, abilityFlags: int, userId?: int): Array<AbilityInfo>;

  /**
   * 根据给定的want、extensionAbilityType和extensionAbilityFlags获取一个或多个ExtensionAbilityInfo。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 表示包含要查询的应用Bundle名称的Want。
   * @param { ExtensionAbilityType } extensionAbilityType - 标识extensionAbility的类型。
   * @param { int } extensionAbilityFlags - 表示用于指定将返回的ExtensionInfo对象中包含的信息的标志，具体取值及不同含义参考
   *     [ExtensionAbilityFlag]{@link bundleManager.ExtensionAbilityFlag}。
   * @param { AsyncCallback<Array<ExtensionAbilityInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获
   *     取成功时，err为undefined，data为获取到Array<ExtensionAbilityInfo>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified extensionAbility is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType,
      extensionAbilityFlags: int, callback: AsyncCallback<Array<ExtensionAbilityInfo>>): void;

  /**
   * 根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取一个或多个ExtensionAbilityInfo。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 表示包含要查询的应用Bundle名称的Want。
   * @param { ExtensionAbilityType } extensionAbilityType - 标识extensionAbility的类型。
   * @param { int } extensionAbilityFlags - 表示用于指定将返回的ExtensionInfo对象中包含的信息的标志，具体取值及不同含义参考
   *     [ExtensionAbilityFlag]{@link bundleManager.ExtensionAbilityFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<Array<ExtensionAbilityInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获
   *     取成功时，err为undefined，data为获取到Array<ExtensionAbilityInfo>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified extensionAbility is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: int, userId: int, callback: AsyncCallback<Array<ExtensionAbilityInfo>>): void;

  /**
   * 根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取ExtensionAbilityInfo。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 表示包含要查询的应用Bundle名称的Want。
   * @param { ExtensionAbilityType } extensionAbilityType - 标识extensionAbility的类型。
   * @param { int } extensionAbilityFlags - 表示用于指定将返回的ExtensionInfo对象中包含的信息的标志，具体取值及不同含义参考
   *     [ExtensionAbilityFlag]{@link bundleManager.ExtensionAbilityFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Array<ExtensionAbilityInfo>> } Promise对象，返回Array<ExtensionAbilityInfo>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified extensionAbility is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: int, userId?: int): Promise<Array<ExtensionAbilityInfo>>;

  /**
   * 以同步方法根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取ExtensionAbilityInfo。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 表示包含要查询的应用Bundle名称的Want。
   * @param { ExtensionAbilityType } extensionAbilityType - 标识extensionAbility的类型。
   * @param { int } extensionAbilityFlags - 表示用于指定将返回的ExtensionInfo对象中包含的信息的标志，具体取值及不同含义参考
   *     [ExtensionAbilityFlag]{@link bundleManager.ExtensionAbilityFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Array<ExtensionAbilityInfo> } Array<ExtensionAbilityInfo>信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified extensionAbility is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function queryExtensionAbilityInfoSync(want: Want, extensionAbilityType: ExtensionAbilityType,
    extensionAbilityFlags: int, userId?: int): Array<ExtensionAbilityInfo>;

  /**
   * 根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取ExtensionAbilityInfo，使用同步方式返回结果。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - 表示包含要查询的应用Bundle名称的Want。
   * @param { string } extensionAbilityType - 表示自定义extensionAbility的类型。
   * @param { int } extensionAbilityFlags - 表示返回的ExtensionInfo对象中需要包含的信息标志，具体取值及不同含义参考
   *     [ExtensionAbilityFlag]{@link bundleManager.ExtensionAbilityFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Array<ExtensionAbilityInfo> } 同步返回Array<ExtensionAbilityInfo>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit
   *     query.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified extensionAbility is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function queryExtensionAbilityInfoSync(want: Want, extensionAbilityType: string,
    extensionAbilityFlags: int, userId?: int): Array<ExtensionAbilityInfo>;

  /**
   * 根据给定的extensionAbilityType、extensionAbilityFlags和userId获取ExtensionAbilityInfo。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } extensionAbilityType - 表示自定义extensionAbility的类型。
   * @param { int } extensionAbilityFlags - 表示返回的ExtensionInfo对象中需要包含的信息标志，具体取值及不同含义参考
   *     [ExtensionAbilityFlag]{@link bundleManager.ExtensionAbilityFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户ID。取值范围：大于等于0。
   * @returns { Array<ExtensionAbilityInfo> } 同步返回Array<ExtensionAbilityInfo>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter extensionAbilityType is empty.
   * @throws { BusinessError } 17700003 - The specified extensionAbility is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function queryExtensionAbilityInfoSync(extensionAbilityType: string, extensionAbilityFlags: int,
    userId?: int): Array<ExtensionAbilityInfo>;

  /**
   * 根据给定的uid获取对应应用的bundleName。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { int } uid - 表示应用程序的UID。
   * @param { AsyncCallback<string> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为undefined，
   *     data为获取到的BundleName；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700021 - The uid is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getBundleNameByUid(uid: int, callback: AsyncCallback<string>): void;

  /**
   * 根据给定的uid获取对应应用的bundleName。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { int } uid - 表示应用程序的UID。
   * @returns { Promise<string> } Promise对象，返回bundleName。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700021 - The uid is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getBundleNameByUid(uid: int): Promise<string>;

  /**
   * 以同步方法根据给定的uid获取对应应用的bundleName。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { int } uid - 表示应用程序的UID。
   * @returns { string } 返回获取到的bundleName。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700021 - The uid is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getBundleNameByUidSync(uid: int): string;

  /**
   * 根据给定的hapFilePath和bundleFlags获取BundleInfo。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hapFilePath - 表示存储HAP的路径，路径应该是当前应用程序数据目录的相对路径。
   * @param { int } bundleFlags - 表示用于指定要返回的BundleInfo对象中包含的信息的标志。
   * @param { AsyncCallback<BundleInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的BundleInfo；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700022 - The hapFilePath is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleArchiveInfo(hapFilePath: string, bundleFlags: int, callback: AsyncCallback<BundleInfo>): void;

  /**
   * 根据给定的hapFilePath和bundleFlags获取BundleInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hapFilePath - 表示存储HAP的路径，路径应该是当前应用程序数据目录的相对路径。
   * @param { int } bundleFlags - 表示用于指定要返回的BundleInfo对象中包含的信息的标志。
   * @returns { Promise<BundleInfo> } Promise对象，返回BundleInfo。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700022 - The hapFilePath is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleArchiveInfo(hapFilePath: string,  bundleFlags: int): Promise<BundleInfo>;

  /**
   * 以同步方法根据给定的hapFilePath和bundleFlags获取BundleInfo对象。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hapFilePath - 表示存储HAP的路径，路径应该是当前应用程序数据目录的相对路径。
   * @param { int } bundleFlags - 表示用于指定要返回的BundleInfo对象中包含的信息的标志。
   * @returns { BundleInfo } 返回BundleInfo对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700022 - The hapFilePath is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getBundleArchiveInfoSync(hapFilePath: string, bundleFlags: int): BundleInfo;

  /**
   * 根据给定的bundleName清理BundleCache。使用callback异步回调。
   * 
   * 调用方清理自身缓存数据时不需要权限。
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - 表示要清理其缓存数据的应用程序的bundleName。
   * @param { AsyncCallback<void> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当清理应用缓存目录数据成功，err为
   *     undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700030 - The specified bundle does not support clearing of cache files.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function cleanBundleCacheFiles(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * 根据给定的bundleName清理BundleCache。使用Promise异步回调。
   * 
   * 调用方清理自身缓存数据时不需要权限。
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - 表示要清理其缓存数据的应用程序的bundleName。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700030 - The specified bundle does not support clearing of cache files.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function cleanBundleCacheFiles(bundleName: string): Promise<void>;

  /**
   * 根据给定的bundleName和appIndex清理BundleCache。使用Promise异步回调。
   * 
   * 调用方清理自身缓存数据时不需要权限。
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - 表示要清理其缓存数据的应用程序的bundleName。
   * @param { int } appIndex - 表示要清理其缓存数据的应用程序的分身应用索引。<br>appIndex为0时，表示清理主应用缓存数据。appIndex大于0时，表示清理指定分身应用缓存数据。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700030 - The specified bundle does not support clearing of cache files.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function cleanBundleCacheFiles(bundleName: string, appIndex: int): Promise<void>;

  /**
   * 清理应用自身的缓存。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function cleanBundleCacheFilesForSelf(): Promise<void>;

  /**
   * 获取全局缓存大小，单位：字节。使用Promise异步回调。
   * 
   * 有程序运行时的应用的缓存、或者在[应用配置指南](docroot://../device-dev/subsystems/subsys-app-privilege-config-guide.md)中已配置“
   * AllowAppDataNotCleared”特权的应用的缓存，无法被获取。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<long> } Promise对象。返回全局缓存大小，以字节为单位。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function getAllBundleCacheSize(): Promise<long>;

  /**
   * 清理全局缓存。使用Promise异步回调。
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function cleanAllBundleCache(): Promise<void>;

  /**
   * 设置指定应用或分身应用的禁用或使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { int } appIndex - 表示分身应用的索引。<br> appIndex为0时，表示设置主应用的禁用或使能状态。appIndex大于0时，表示设置指定分身应用的禁用或使能状态。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setApplicationEnabled(bundleName: string, appIndex: int, isEnabled: boolean): Promise<void>;

  /**
   * 设置应用程序是启用还是禁用，并控制在禁用时是否杀死进程。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - 应用包名
   * @param { int } appIndex - 应用的分身索引
   *     <br>取值范围为全体整数。
   * @param { boolean } isEnabled - true表示启用应用程序，false表示禁用应用程序。
   * @param { boolean } killProcess - true表示应用进程在禁用时会杀死应用进程，而值为false表示禁用时不会杀死应用程序进程
   * @returns { Promise<void> } 无返回值
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Non-system APP calling system API.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setApplicationEnabled(bundleName: string, appIndex: int, isEnabled: boolean, killProcess: boolean): Promise<void>;

  /**
   * 设置指定应用的禁用或使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - 指定应用的bundleName。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @param { AsyncCallback<void> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当设置应用禁用或使能状态成功时，err为
   *     undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setApplicationEnabled(bundleName: string, isEnabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置指定应用的禁用或使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setApplicationEnabled(bundleName: string, isEnabled: boolean): Promise<void>;

  /**
   * 以同步方法设置指定应用的禁用或使能状态。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - 指定应用的bundleName。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setApplicationEnabledSync(bundleName: string, isEnabled: boolean): void;

  /**
   * 设置应用程序是启用还是禁用，并控制在禁用时是否杀死进程。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - 应用包名
   * @param { int } appIndex - 应用的分身索引
   *     <br>取值范围为全体整数。
   * @param { boolean } isEnabled - true表示启用应用程序，false表示启用应用程序。
   * @param { boolean } killProcess - true表示应用进程在禁用时杀死应用程序进程，而值为false表示禁用时不会杀死应用程序进程
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Non-system APP calling system API.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setApplicationEnabledSync(bundleName: string, appIndex: int, isEnabled: boolean, killProcess: boolean): void;

  /**
   * 设置指定应用或分身应用组件的禁用或使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - 需要被设置的组件。
   * @param { int } appIndex - 表示分身应用的索引。<br> appIndex为0时，表示设置主应用组件的禁用或使能状态。appIndex大于0时，表示设置指定分身应用组件的禁用或使能状态。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityInfo is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setAbilityEnabled(info: AbilityInfo, appIndex: int, isEnabled: boolean): Promise<void>;

  /**
   * 设置指定组件的禁用或使能状态。使用callback异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - 需要被设置的组件。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @param { AsyncCallback<void> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当设置组件禁用或使能状态成功时，err为
   *     undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityInfo is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setAbilityEnabled(info: AbilityInfo, isEnabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置指定组件的禁用或使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - 需要被设置的组件。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityInfo is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setAbilityEnabled(info: AbilityInfo, isEnabled: boolean): Promise<void>;

  /**
   * 以同步方法设置指定组件的禁用或使能状态。
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - 需要被设置的组件。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityInfo is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setAbilityEnabledSync(info: AbilityInfo, isEnabled: boolean): void;

  /**
   * 获取指定应用或分身应用的禁用或使能状态。使用Promise异步回调。
   *
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { int } appIndex - 表示分身应用的索引。<br> appIndex为0时，表示获取主应用的禁用或使能状态。appIndex大于0时，表示获取指定分身应用的禁用或使能状态。
   * @returns { Promise<boolean> } Promise对象，返回true表示当前应用为使能状态，返回false表示当前应用为禁用状态。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function isApplicationEnabled(bundleName: string, appIndex: int): Promise<boolean>;

  /**
   * 获取指定应用的禁用或使能状态。使用callback异步回调。
   *
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { AsyncCallback<boolean> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，返回true表示当前应用为使能状态，返回
   *     false表示应用为禁用状态。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isApplicationEnabled(bundleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * 获取指定应用的禁用或使能状态。使用Promise异步回调。
   *
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @returns { Promise<boolean> } Promise对象，返回true表示当前应用为使能状态，返回false表示当前应用为禁用状态。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isApplicationEnabled(bundleName: string): Promise<boolean>;

  /**
   * 以同步方法获取指定应用的禁用或使能状态。
   *
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @returns { boolean } 返回true表示当前应用为使能状态，返回false表示当前应用为禁用状态。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function isApplicationEnabledSync(bundleName: string): boolean;

  /**
   * 获取应用或指定分身应用组件的禁用或使能状态。使用Promise异步回调。
   *
   * @param { AbilityInfo } info - 表示关于检查ability的信息。
   * @param { int } appIndex - 表示分身应用的索引。 <br> appIndex为0时，表示获取主应用组件的禁用或使能状态。appIndex大于0时，表示获取指定分身应用组件的禁用或使能状态。
   * @returns { Promise<boolean> } Promise对象，返回true表示当前应用组件为使能状态，返回false表示当前应用组件为禁用状态。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function isAbilityEnabled(info: AbilityInfo, appIndex: int): Promise<boolean>;

  /**
   * 获取指定组件的禁用或使能状态。使用callback异步回调。
   *
   * @param { AbilityInfo } info - 表示关于检查ability的信息。
   * @param { AsyncCallback<boolean> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，返回true表示当前应用组件为使能状态，返回
   *     false表示应用组件为禁用状态。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isAbilityEnabled(info: AbilityInfo, callback: AsyncCallback<boolean>): void;

  /**
   * 获取指定组件的禁用或使能状态。使用Promise异步回调。
   *
   * @param { AbilityInfo } info - 表示关于检查ability的信息。
   * @returns { Promise<boolean> } Promise对象，返回true表示当前应用组件为使能状态，返回false表示当前应用组件为禁用状态。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isAbilityEnabled(info: AbilityInfo): Promise<boolean>;

  /**
   * 以同步方法获取指定组件的禁用或使能状态。
   *
   * @param { AbilityInfo } info - 表示关于检查ability的信息。
   * @returns { boolean } 返回true表示当前应用组件为使能状态，返回false表示当前应用组件为禁用状态。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function isAbilityEnabledSync(info: AbilityInfo): boolean;

  /**
   * 根据给定的bundleName和userId获取用于启动应用程序的Want参数。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<Want> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为undefined，data
   *     为获取到的Want；否则为错误对象。
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getLaunchWantForBundle(bundleName: string, userId: int, callback: AsyncCallback<Want>): void;

  /**
   * 根据给定的bundleName获取用于启动应用程序的Want参数。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { AsyncCallback<Want> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为undefined，data
   *     为获取到的Want；否则为错误对象。
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getLaunchWantForBundle(bundleName: string, callback: AsyncCallback<Want>): void;

  /**
   * 根据给定的bundleName和userId获取用于启动应用程序的Want参数。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Want> } Promise对象，返回Want对象。
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getLaunchWantForBundle(bundleName: string, userId?: int): Promise<Want>;

  /**
   * 根据给定的包名和用户ID，获取用于启动应用程序的Want参数。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED [since 10 - 23]
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or
   *     (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS) [since 24]
   * @param { string } bundleName - 表示应用的包名。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。<br/>默认值：调用方所在用户。<br/>取值范围：大于等于0。
   * @returns { Want } Want对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 10 - 23]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  function getLaunchWantForBundleSync(bundleName: string, userId?: int): Want;

  /**
   * 获取本应用[入口UIAbility](docroot://quick-start/application-package-glossary.md#uiability)的Want参数。
   *
   * @returns { Want } 返回仅包含bundleName和abilityName的Want对象。
   * @throws { BusinessError } 17700072 - The launch want is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  function getLaunchWant(): Want;

  /**
   * 根据给定的moduleName、abilityName和metadataName（module.json5中
   * [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name）获取自身相应配置文件的json格式字符串
   * 。使用callback异步回调。
   * 
   * > 说明：
   * > > 如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过[资源管理]{@link @ohos.resourceManager:resourceManager}的相
   * > 关接口，来获取引用的资源。
   *
   * @param { string } moduleName - 表示Module名称。
   * @param { string } abilityName - 表示UIAbility组件的名称。
   * @param { string } metadataName - 表示UIAbility组件的
   *     [元信息名称](docroot://quick-start/module-configuration-file.md#metadata标签)，即module.json5配置文件中
   *     [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name。
   * @param { AsyncCallback<Array<string>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的Array<string>；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified abilityName is not existed.
   * @throws { BusinessError } 17700024 - Failed to get the profile because there is no profile in the HAP.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getProfileByAbility(moduleName: string, abilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * 根据给定的moduleName、abilityName和metadataName（module.json5中
   * [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name）获取自身相应配置文件的json格式字符串
   * 。使用Promise异步回调。
   * 
   * > 说明：
   * > > 如果配置文件信息采用了资源引用格式，则返回值将保持资源引用格式（例如 $string:res_id），开发者可以通过[资源管理]{@link @ohos.resourceManager:resourceManager}的相
   * > 关接口，来获取引用的资源。
   *
   * @param { string } moduleName - 表示Module名称。
   * @param { string } abilityName - 表示UIAbility组件的名称。
   * @param { string } metadataName - 表示UIAbility组件的元信息名称，即module.json5配置文件中
   *     [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name，默认值为空。
   * @returns { Promise<Array<string>> } Promise对象，返回Array<string>。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified abilityName is not existed.
   * @throws { BusinessError } 17700024 - Failed to get the profile because there is no profile in the HAP.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getProfileByAbility(moduleName: string, abilityName: string, metadataName?: string): Promise<Array<string>>;

  /**
   * 以同步方法根据给定的moduleName、abilityName和metadataName（module.json5中
   * [metadata标签](docroot://quick-start/module-configuration-file.md#metadata标签)下的name）获取自身相应配置文件的json格式字符串，返回对象为string数
   * 组。
   *
   * @param { string } moduleName - 表示Module名称。
   * @param { string } abilityName - 表示UIAbility组件的名称。
   * @param { string } metadataName - 表示UIAbility组件的元信息名称，即module.json5配置文件中
   *     [abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)下的metadata标签的name，默认值为空。
   * @returns { Array<string> } 数组对象，返回Array<string>。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified abilityName is not existed.
   * @throws { BusinessError } 17700024 - Failed to get the profile because there is no profile in the HAP.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function getProfileByAbilitySync(moduleName: string, abilityName: string, metadataName?: string): Array<string>;

  /**
   * 根据给定的moduleName、extensionAbilityName和metadataName（module.json5中
   * [metadata标签](docroot://quick-start/module-configuration-file.md#metadata标签)下的name）获取自身相应配置文件的json格式字符串。使用callback异步
   * 回调。
   *
   * @param { string } moduleName - 表示Module名称。
   * @param { string } extensionAbilityName - 表示ExtensionAbility组件的名称。
   * @param { string } metadataName - 表示ExtensionAbility组件的元信息名称，即module.json5配置文件中
   *     [extensionAbilities标签](docroot://quick-start/module-configuration-file.md#extensionabilities标签)下的metadata标签的
   *     name。
   * @param { AsyncCallback<Array<string>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的Array<string>；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified extensionAbilityName not existed.
   * @throws { BusinessError } 17700024 - Failed to get the profile because there is no profile in the HAP.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * 根据给定的moduleName、extensionAbilityName和metadataName（module.json5中
   * [metadata标签](docroot://quick-start/module-configuration-file.md#metadata标签)下的name）获取自身相应配置文件的json格式字符串。使用Promise异步回
   * 调。
   *
   * @param { string } moduleName - 表示Module名称。
   * @param { string } extensionAbilityName - 表示ExtensionAbility组件的名称。
   * @param { string } metadataName - 表示ExtensionAbility组件的元信息名称，即module.json5配置文件中
   *     [extensionAbilities标签](docroot://quick-start/module-configuration-file.md#extensionabilities标签)下的metadata标签的
   *     name，默认值为空。
   * @returns { Promise<Array<string>> } Promise对象，返回Array<string>对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified extensionAbilityName not existed.
   * @throws { BusinessError } 17700024 - Failed to get the profile because there is no profile in the HAP.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName?: string): Promise<Array<string>>;

  /**
   * 以同步方法根据给定的moduleName、extensionAbilityName和metadataName（module.json5中
   * [metadata标签](docroot://quick-start/module-configuration-file.md#metadata标签)下的name）获取自身相应配置文件的json格式字符串，返回对象为string数
   * 组。
   *
   * @param { string } moduleName - 表示Module名称。
   * @param { string } extensionAbilityName - 表示ExtensionAbility组件的名称。
   * @param { string } metadataName - 表示ExtensionAbility组件的元信息名称，即module.json5配置文件中
   *     [extensionAbilities标签](docroot://quick-start/module-configuration-file.md#extensionabilities标签)下的metadata标签的
   *     name，默认值为空。
   * @returns { Array<string> } 返回Array<string>对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified extensionAbilityName not existed.
   * @throws { BusinessError } 17700024 - Failed to get the profile because there is no profile in the HAP.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function getProfileByExtensionAbilitySync(moduleName: string, extensionAbilityName: string, metadataName?: string): Array<string>;

  /**
   * 根据给定的permissionName获取权限定义结构体PermissionDef信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - 表示权限名称。
   * @param { AsyncCallback<PermissionDef> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的Array<PermissionDef>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700006 - The specified permission is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>): void;

  /**
   * 根据给定的permissionName获取权限定义结构体PermissionDef信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - 表示权限参数名。
   * @returns { Promise<PermissionDef> } Promise对象，返回Array<PermissionDef>对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700006 - The specified permission is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getPermissionDef(permissionName: string): Promise<PermissionDef>;

  /**
   * 以同步方法根据给定的permissionName获取权限定义结构体PermissionDef信息。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - 表示权限参数名。
   * @returns { PermissionDef } PermissionDef对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700006 - The specified permission is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getPermissionDefSync(permissionName: string): PermissionDef;

  /**
   * 获取指定bundleName、moduleName和abilityName的label。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { string } moduleName - 表示Module名称。
   * @param { string } abilityName - 表示UIAbility组件的名称。
   * @param { AsyncCallback<string> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为undefined，
   *     data为获指定组件的Label值；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAbilityLabel(bundleName: string, moduleName: string, abilityName: string, callback: AsyncCallback<string>): void;

  /**
   * 获取指定bundleName、moduleName和abilityName的label。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { string } moduleName - 表示Module名称。
   * @param { string } abilityName - 表示UIAbility组件的名称。
   * @returns { Promise<string> } Promise对象，返回指定组件的label值。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAbilityLabel(bundleName: string, moduleName: string, abilityName: string): Promise<string>;

  /**
   * 以同步的方法获取指定bundleName、moduleName和abilityName的label。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { string } moduleName - 表示Module名称。
   * @param { string } abilityName - 表示UIAbility组件的名称。
   * @returns { string } 指定组件的label值。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAbilityLabelSync(bundleName: string, moduleName: string, abilityName: string): string;

  /**
   * 通过bundleName、moduleName和abilityName获取对应Icon的[PixelMap]{@link @ohos.multimedia.image:image}，使用callback异步回调。
   * 
   * 获取调用方信息时不需要权限。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 10开始废弃，建议使用
   * > [getMediaContent]{@link @ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)}
   * > 替代。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { string } moduleName - 要查询的应用Module名称。
   * @param { string } abilityName - 要查询的Ability组件名。
   * @param { AsyncCallback<image.PixelMap> } callback - 回调函数，返回指定[PixelMap]{@link @ohos.multimedia.image:image}，作为程序启动
   *     时的入参。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700002 - The specified module is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.resourceManager#getMediaContent
   */
  function getAbilityIcon(bundleName: string, moduleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * 通过bundleName、moduleName和abilityName获取对应Icon的[PixelMap]{@link @ohos.multimedia.image:image}，使用Promise异步回调。
   * 
   * 获取调用方信息时不需要权限。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 10开始废弃，建议使用
   * > [getMediaContent]{@link @ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)}
   * > 替代。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { string } moduleName - 要查询的应用Module名称。
   * @param { string } abilityName - 要查询的Ability组件名。
   * @returns { Promise<image.PixelMap> } Promise used to return PixelMap.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700002 - The specified module is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.resourceManager#getMediaContent
   */
  function getAbilityIcon(bundleName: string, moduleName: string, abilityName: string): Promise<image.PixelMap>;

  /**
   * 以同步方法根据给定的bundleName、applicationFlags和userId获取ApplicationInfo。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { int } applicationFlags - 表示用于指定将返回的ApplicationInfo对象中包含的信息，具体取值及不同含义参考
   *     [ApplicationFlag]{@link bundleManager.ApplicationFlag}。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @returns { ApplicationInfo } 返回ApplicationInfo对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getApplicationInfoSync(bundleName: string, applicationFlags: int, userId: int) : ApplicationInfo;

  /**
   * 以同步方法根据给定的bundleName、applicationFlags获取ApplicationInfo。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { int } applicationFlags - 表示用于指定将返回的ApplicationInfo对象中包含的信息，具体取值及不同含义参考
   *     [ApplicationFlag]{@link bundleManager.ApplicationFlag}。
   * @returns { ApplicationInfo } 返回ApplicationInfo对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getApplicationInfoSync(bundleName: string, applicationFlags: int) : ApplicationInfo;

  /**
   * 以同步方法根据给定的bundleName、bundleFlags和userId获取BundleInfo。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @returns { BundleInfo } 返回BundleInfo对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getBundleInfoSync(bundleName: string, bundleFlags: int, userId: int): BundleInfo;

  /**
   * 以同步方法根据给定的bundleName、bundleFlags获取调用方所在用户下的BundleInfo。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息。
   * @returns { BundleInfo } 返回BundleInfo对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getBundleInfoSync(bundleName: string, bundleFlags: int): BundleInfo;

  /**
   * 获取所有的共享包信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<Array<SharedBundleInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时
   *     ，err为undefined，data为获所有的共享包信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllSharedBundleInfo(callback: AsyncCallback<Array<SharedBundleInfo>>): void;

  /**
   * 获取所有的共享包信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<SharedBundleInfo>> } Promise对象，返回所有的共享包信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllSharedBundleInfo(): Promise<Array<SharedBundleInfo>>;

  /**
   * 获取指定的共享包信息。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { string } moduleName - 表示被查询的module的name。
   * @param { AsyncCallback<Array<SharedBundleInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时
   *     ，err为undefined，data为获取的指定共享包信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getSharedBundleInfo(bundleName: string,  moduleName: string, callback: AsyncCallback<Array<SharedBundleInfo>>): void;

  /**
   * 获取指定的共享包信息。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 表示应用程序的bundleName。
   * @param { string } moduleName - 表示被查询的module的name。
   * @returns { Promise<Array<SharedBundleInfo>> } Promise对象，返回指定的共享包信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getSharedBundleInfo(bundleName: string, moduleName: string): Promise<Array<SharedBundleInfo>>;

  /**
   * 根据userId获取指定用户下所有应用的[Provision]{@link bundleManager/AppProvisionInfo}配置文件信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or
   *     (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { int } [userId] - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。<br>默认值：调用方所在用户ID。<br>取值范围：大于等于0。
   * @returns { Promise<Array<AppProvisionInfo>> } Promise对象，返回应用的provision配置文件信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function getAllAppProvisionInfo(userId?: int): Promise<Array<AppProvisionInfo>>;

  /**
   * 获取指定bundleName的provision配置文件信息。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定应用的bundleName。
   * @param { AsyncCallback<AppProvisionInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为指定bundleName的provision配置文件信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter bundleName is empty.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAppProvisionInfo(bundleName: string, callback: AsyncCallback<AppProvisionInfo>): void;

  /**
   * 获取指定bundleName和userId的provision配置文件信息。使用callback异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定应用的bundleName。
   * @param { int } userId - 指定用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<AppProvisionInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为指定bundleName的provision配置文件信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter bundleName is empty.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAppProvisionInfo(bundleName: string, userId: int, callback: AsyncCallback<AppProvisionInfo>): void;

  /**
   * 根据bundleName和userId获取应用的provision配置文件信息。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定的bundleName。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<AppProvisionInfo> } Promise对象，返回应用的provision配置文件信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter bundleName is empty.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAppProvisionInfo(bundleName: string, userId?: int): Promise<AppProvisionInfo>;

  /**
   * 以同步方法根据bundleName和userId获取应用的provision配置文件信息并返回结果。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定的bundleName。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { AppProvisionInfo } AppProvisionInfo对象，返回应用的provision配置文件信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter bundleName is empty.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAppProvisionInfoSync(bundleName: string, userId?: int): AppProvisionInfo;

  /**
   * 以同步的方法查询指定bundleName的[HarmonyAppProvision配置文件说明](docroot://security/app-provision-structure.md)，该返回值是在调用install接口时传
   * 入的[InstallParam]{@link @ohos.bundle.installer:installer.InstallParam}中的specifiedDistributionType字段。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定的bundleName。
   * @returns { string } 返回指定bundleName的[HarmonyAppProvision配置文件说明](docroot://security/app-provision-structure.md)。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getSpecifiedDistributionType(bundleName: string): string;

  /**
   * 获取系统内所有应用的扩展安装信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @returns { Promise<Array<Record<string, Object>>> } The install information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  function getAllBundleInstallInfo(): Promise<Array<Record<string, Object>>>;

  /**
   * 获取系统内所有应用的扩展安装信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @returns { Promise<Array<Record<string, RecordData>>> } The install information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  function getAllBundleInstallInfo(): Promise<Array<Record<string, RecordData>>>;

  /**
   * 以同步接口查询指定bundleName的额外信息。该返回值是在调用install接口时传入的[InstallParam]{@link @ohos.bundle.installer:installer.InstallParam}中的
   * additionalInfo字段。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定的bundleName。
   * @returns { string } 返回指定bundleName的额外信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter bundleName is empty.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAdditionalInfo(bundleName: string): string;

  /**
   * 以同步的方法根据给定的profileType、bundleName和moduleName查询相应配置文件的JSON字符串。
   * 
   * 获取调用方自己的配置文件时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { ProfileType } profileType - 表示要查询的配置文件类型。
   * @param { string } bundleName - 表示要查询应用程序的bundleName。
   * @param { string } moduleName - 表示要查询应用程序的module的名称，缺省时在入口模块中查找。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。 [since 12]
   * @returns { string } 返回配置文件的JSON字符串。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700024 - Failed to get the profile because the specified profile is not found in the
   *     HAP.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700004 - The specified user ID is not found. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getJsonProfile(profileType: ProfileType, bundleName: string, moduleName?: string, userId?: int): string;

  /**
   * 根据给定的bundleName获得扩展资源对应的moduleNames。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询扩展资源的应用名称。
   * @returns { Promise<Array<string>> } Promise对象，返回接口运行结果及扩展资源对应的moduleNames。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700303 - Failed to obtain extended resources.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getExtResource(bundleName: string): Promise<Array<string>>;

  /**
   * 根据给定的bundleName、moduleName使能动态图标。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_DYNAMIC_ICON
   * @param { string } bundleName - 要使能动态图标的应用名称。
   * @param { string } moduleName - 要使能动态图标的模块名称。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700304 - Failed to enable the dynamic icon.
   * @throws { BusinessError } 17700307 - Dynamic icons cannot take effect due to existing custom themes. [since 20]
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   */
  function enableDynamicIcon(bundleName: string, moduleName: string): Promise<void>;

  /**
   * 根据给定的bundleName、moduleName和option使能动态图标。使用Promise异步回调。
   * 
   * 使能当前用户下的动态图标信息时需要申请权限ohos.permission.ACCESS_DYNAMIC_ICON。
   * 
   * 使能其他用户下的动态图标信息时需要申请权限ohos.permission.ACCESS_DYNAMIC_ICON 和 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS。
   *
   * @permission ohos.permission.ACCESS_DYNAMIC_ICON or (ohos.permission.ACCESS_DYNAMIC_ICON and
   *     ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - 要使能动态图标的应用包名。
   * @param { string } moduleName - 要使能动态图标的模块名。
   * @param { BundleOptions } [option] - 指定需要使能动态图标的用户和分身索引。缺省时使能应用所有用户和所有分身的动态图标。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @throws { BusinessError } 17700304 - Failed to enable the dynamic icon.
   * @throws { BusinessError } 17700307 - Dynamic icons cannot take effect due to existing custom themes.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function enableDynamicIcon(bundleName: string, moduleName: string, option?: BundleOptions): Promise<void>;

  /**
   * 根据给定的bundleName禁用动态图标。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_DYNAMIC_ICON
   * @param { string } bundleName - 要禁用动态图标的应用名称。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700305 - Failed to disable the dynamic icon.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   */
  function disableDynamicIcon(bundleName: string): Promise<void>;

  /**
   * 根据给定的bundleName和option禁用动态图标。使用Promise异步回调。
   * 
   * 禁用当前用户下的动态图标信息时需要申请权限ohos.permission.ACCESS_DYNAMIC_ICON。
   * 
   * 禁用其他用户下的动态图标信息时需要申请权限ohos.permission.ACCESS_DYNAMIC_ICON 和 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS。
   *
   * @permission ohos.permission.ACCESS_DYNAMIC_ICON or (ohos.permission.ACCESS_DYNAMIC_ICON and
   *     ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - 要禁用动态图标的应用包名。
   * @param { BundleOptions } [option] - 指定需要禁用动态图标的用户和分身索引。缺省时禁用应用所有用户和所有分身的动态图标。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @throws { BusinessError } 17700305 - Failed to disable the dynamic icon.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function disableDynamicIcon(bundleName: string, option?: BundleOptions): Promise<void>;

  /**
   * 根据给定的bundleName获得动态图标对应的moduleName。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - 要查询扩展资源的应用名称。
   * @returns { Promise<string> } Promise对象。返回接口运行结果及动态图标对应的moduleName。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700306 - Failed to obtain the dynamic icon.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getDynamicIcon(bundleName: string): Promise<string>;

  /**
   * 根据指定的bundleName获取所有用户和所有分身下的动态图标信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { string } bundleName - 要查询动态图标的应用包名。
   * @returns { Promise<Array<DynamicIconInfo>> } Promise对象，返回查询到的动态图标信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700306 - Failed to obtain the dynamic icon.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getDynamicIconInfo(bundleName: string): Promise<Array<DynamicIconInfo>>;

  /**
   * 查询指定用户下所有应用和所有分身的动态图标信息。使用Promise异步回调。
   * 
   * 查询当前用户下所有应用和所有分身的动态图标信息时需要申请权限ohos.permission.GET_BUNDLE_INFO_PRIVILEGED。
   * 
   * 查询其他用户或者所有用户下所有应用和所有分身的动态图标信息时需要申请权限ohos.permission.GET_BUNDLE_INFO_PRIVILEGED 和 
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { int } [userId] - 标识用户ID。缺省时查询所有用户下所有应用和所有分身的动态图标信息。
   * @returns { Promise<Array<DynamicIconInfo>> } Promise对象，返回查询到的动态图标信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700306 - Failed to obtain the dynamic icon.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllDynamicIconInfo(userId?: int): Promise<Array<DynamicIconInfo>>;

  /**
   * 查询当前应用在app.json5中[alternateIcons标签](docroot://quick-start/app-configuration-file.md#alternateicons标签)配置的备用图标信息。使用
   * Promise异步回调。
   *
   * @returns { Promise<Array<AlternateIconInfo>> } Promise对象，返回当前应用的备用图标信息。
   * @throws { BusinessError } 17700311 - Failed to obtain the alternate icon.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getAlternateIcons(): Promise<Array<AlternateIconInfo>>;

  /**
   * 根据给定的备用图标名称设置调用方自身的备用图标。使用Promise异步回调。
   *
   * @param { string } alternateIconName - 要设置的备用图标名称。备用图标名称须在app.json5中
   *     [alternateIcons标签](docroot://quick-start/app-configuration-file.md#alternateicons标签)的name字段内。<br/>
   *     alternateIconName为空时表示取消备用图标。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 17700308 - The alternateIconName must match the name field under alternateIcons
   *     in the app.json5 file.
   * @throws { BusinessError } 17700309 - No alternate icon is enabled.
   * @throws { BusinessError } 17700310 - Failed to set the alternate icon.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setAlternateIcon(alternateIconName: string): Promise<void>;

  /**
   * 根据给定的abcPaths和deleteOriginalFiles校验.abc文件。使用callback异步回调。
   *
   * @permission ohos.permission.RUN_DYN_CODE
   * @param { Array<string> } abcPaths - .abc文件路径。
   * @param { boolean } deleteOriginalFiles - 是否删除.abc文件，true删除，false不删除。
   * @param { AsyncCallback<void> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为undefined；否则为错
   *     误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700201 - Failed to verify the abc file.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function verifyAbc(abcPaths: Array<string>, deleteOriginalFiles: boolean, callback: AsyncCallback<void>): void;

  /**
   * 根据给定的abcPaths和deleteOriginalFiles校验.abc文件。使用Promise异步回调。
   *
   * @permission ohos.permission.RUN_DYN_CODE
   * @param { Array<string> } abcPaths - .abc文件路径。
   * @param { boolean } deleteOriginalFiles - 是否删除.abc文件，true删除，false不删除。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700201 - Failed to verify the abc file.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function verifyAbc(abcPaths: Array<string>, deleteOriginalFiles: boolean): Promise<void>;

  /**
   * 获取所有可恢复的预置应用信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<Array<RecoverableApplicationInfo>> } callback -    *     [AsyncCallback]{@link @ohos.base:AsyncCallback}，当获取成功时，err为undefined，data为获取到的所有可恢复的预置应用信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getRecoverableApplicationInfo(callback: AsyncCallback<Array<RecoverableApplicationInfo>>): void;

  /**
   * 获取所有可恢复的预置应用信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<RecoverableApplicationInfo>> } Promise对象，返回所有可恢复的预置应用信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getRecoverableApplicationInfo(): Promise<Array<RecoverableApplicationInfo>>;

  /**
   * 设置指定应用的额外信息。此接口仅供应用市场调用。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定应用的包名。
   * @param { string } additionalInfo - 需要设置的应用的额外信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter bundleName is empty.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700053 - The caller is not AppGallery.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function setAdditionalInfo(bundleName: string, additionalInfo: string): void;

  /**
   * 根据给定的abcPath删除.abc文件。使用Promise异步回调。
   *
   * @permission ohos.permission.RUN_DYN_CODE
   * @param { string } abcPath - .abc文件路径。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700202 - Failed to delete the abc file.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function deleteAbc(abcPath: string): Promise<void>;

  /**
   * 根据给定的链接判断目标应用是否可访问，链接中的scheme需要在[module.json5文件](docroot://quick-start/module-configuration-file.md)的querySchemes字段
   * 下配置。
   *
   * @param { string } link - 表示需要查询的链接。
   * @returns { boolean } 返回true表示给定的链接可以打开，返回false表示给定的链接不能打开。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700055 - The specified link is invalid.
   * @throws { BusinessError } 17700056 - The scheme of the specified link is not in the querySchemes.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function canOpenLink(link: string): boolean;

  /**
   * 获取所有预置应用信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<PreinstalledApplicationInfo>> } Promise对象，返回Array<PreinstalledApplicationInfo>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllPreinstalledApplicationInfo(): Promise<Array<PreinstalledApplicationInfo>>;

  /**
   * 根据给定的developerId获取当前用户下的包信息列表。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } developerId - 表示应用的开发者ID。
   * @returns { Array<BundleInfo> } 同步返回Array<BundleInfo>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter developerId is empty.
   * @throws { BusinessError } 17700059 - The specified developerId is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllBundleInfoByDeveloperId(developerId: string): Array<BundleInfo>;

  /**
   * 根据给定的应用[appDistributionType]{@link bundleManager.AppDistributionType}获取当前用户下的所有开发者ID列表。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { int } appDistributionType - 表示应用的分发类型，当该参数缺省时，会返回所有应用的开发者ID列表。
   * @returns { Array<string> } 同步返回Array<string>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getDeveloperIds(appDistributionType?: int): Array<string>;

  /**
   * 切换指定应用的可卸载状态，此接口与EDM应用拦截管控机制不互相影响。
   *
   * @permission ohos.permission.CHANGE_BUNDLE_UNINSTALL_STATE
   * @param { string } bundleName - 表示指定应用的bundleName。
   * @param { boolean } state - 表示应用的可卸载状态，值为true表示应用可以被卸载，值为false表示应用不可以被卸载。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700060 - The specified application cannot be uninstalled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function switchUninstallState(bundleName: string, state: boolean): void;

  /**
   * 根据给定的uid获取对应应用的[签名信息]{@link bundleManager/BundleInfo:SignatureInfo}。
   *
   * @permission ohos.permission.GET_SIGNATURE_INFO
   * @param { int } uid - 表示应用程序的UID。
   * @returns { SignatureInfo } 返回SignatureInfo对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 17700021 - The uid is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 18 dynamic
   * @since 23 static
   */
  function getSignatureInfo(uid: int): SignatureInfo;

  /**
   * 根据bundleName、分身索引、[bundleFlags]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}以及用户ID查询主应用或分身应用的
   * BundleInfo。使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } appIndex - 表示要查询的分身应用索引。<br>appIndex为0时，表示查询主应用信息。appIndex大于0时，表示查询指定分身应用信息。
   * @param { int } bundleFlags - 表示用于指定要返回的BundleInfo对象中包含的信息的标志。
   * @param { int } [userId] - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<BundleInfo> } Promise对象。返回应用包信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppCloneBundleInfo(bundleName: string, appIndex: int, bundleFlags: int, userId?: int): Promise<BundleInfo>;

  /**
   * 根据bundleName、[bundleFlags]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}以及用户ID查询主应用和分身应用的BundleInfo列表。
   * 使用Promise异步回调。
   * 
   * 获取调用方自身的信息时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 表示要查询的应用Bundle名称。
   * @param { int } bundleFlags - 表示用于指定要返回的BundleInfo对象中包含的信息的标志。
   * @param { int } [userId] - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户，取值范围：大于等于0。
   * @returns { Promise<Array<BundleInfo>> } Promise对象。返回应用包信息列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700026 - The specified bundle and clone apps are all disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllAppCloneBundleInfo(bundleName: string, bundleFlags: int, userId?: int): Promise<Array<BundleInfo>>;

  /**
   * 根据uid查询分身应用的包名和分身索引。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { int } uid - 表示应用程序的UID。
   * @returns { Promise<AppCloneIdentity> } Promise对象，返回<AppCloneIdentity>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700021 - The uid is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getAppCloneIdentity(uid: int): Promise<AppCloneIdentity>;

  /**
   * 根据给定的hostBundleName和userId获取所有的PluginBundleInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hostBundleName - 表示安装插件的应用包名。
   * @param { int } [userId] - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，默认值：调用方所在用户ID。取值范围：大于等于0。
   * @returns { Promise<Array<PluginBundleInfo>> } Promise对象，返回Array<PluginBundleInfo>。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function getAllPluginInfo(hostBundleName: string, userId?: int): Promise<Array<PluginBundleInfo>>;

  /**
   * 获取指定插件在当前[应用沙箱](docroot://file-management/app-sandbox-directory.md)内的安装路径。
   *
   * @param { string } pluginBundleName - 目标插件的包名。
   * @returns { string } 目标插件在当前应用沙箱内的安装路径。
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 22 dynamic
   * @since 23 static
   */
  function getPluginBundlePathForSelf(pluginBundleName: string): string;

  /**
   * 拷贝文件，将文件从源路径拷贝到目标路径。使用Promise异步回调。
   *
   * @permission ohos.permission.MIGRATE_DATA
   * @param { Array<string> } sourcePaths - 需要迁移的源路径数组，支持传入如/example1/test.txt的单文件路径，或/example2/test的目录路径。
   * @param { string } destinationPath - 目标路径，仅支持传入一个目录路径，例如：/example2/test。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700080 - The source paths are invalid.
   * @throws { BusinessError } 17700081 - The destination path is invalid.
   * @throws { BusinessError } 17700082 - User authentication failed.
   * @throws { BusinessError } 17700083 - Waiting for user authentication timeout.
   * @throws { BusinessError } 17700084 - There are inaccessible path in the source paths.
   * @throws { BusinessError } 17700085 - The destination path cannot be accessed.
   * @throws { BusinessError } 17700086 - System error occurred during copy execution.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function migrateData(sourcePaths: Array<string>, destinationPath: string): Promise<void>;

  /**
   * 根据应用包名和分身索引获取对应的沙箱目录。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 表示要查询的应用包名。当前用户下有此应用或者分身才可查询，否则返回错误码17700001。
   * @param { int } appIndex - 表示应用索引。取值范围0~5，取值为0表示主应用，取值1~5表示分身应用的索引。
   * @returns { string } 返回应用的沙箱目录。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getSandboxDataDir(bundleName: string, appIndex: int): string;

  /**
   * 根据应用的沙箱目录名称获取应用的身份信息，包括应用包名和分身索引信息。
   *
   * @param { string } sandboxDataDir - 表示[应用的沙箱目录](docroot://file-management/app-sandbox-directory.md)名称。 <br>**说明：**<
   *     br> 参数不校验合法性，如果入参sandboxDataDir不符合分身应用或元服务的目录名称格式，则sandboxDataDir将作为返回信息中的AppCloneIdentity.bundleName返回，此时
   *     AppCloneIdentity.appIndex为0。 <br> 1.分身应用目录名称格式要求：`+clone-{appIndex}+{bundleName}`，appIndex和bundleName是变量，对应分身索引
   *     和应用包名，例如： `+clone-1+com.example.myapplication`。<br> 2.元服务目录名称格式格式要求：`+auid-{uid}+{bundleName}`，uid和bundleName是变
   *     量，对应应用程序的UID和应用包名，例如： `+auid-20000000+com.example.myapplication`。
   * @returns { AppCloneIdentity } 返回应用包名和分身索引信息。
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getAppCloneIdentityBySandboxDataDir(sandboxDataDir: string): AppCloneIdentity;

  /**
   * 恢复指定用户下指定应用或分身应用的备份数据。使用Promise异步回调。
   *
   * @permission ohos.permission.RECOVER_BUNDLE
   * @param { string } bundleName - 要恢复备份的应用包名。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，取值范围：大于等于0。
   * @param { int } appIndex - 表示应用索引。取值范围0~5，取值为0表示主应用，取值1~5表示分身应用的索引。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function recoverBackupBundleData(bundleName: string, userId: int, appIndex: int): Promise<void>;

  /**
   * 删除指定用户下指定应用或分身应用的备份数据。使用Promise异步回调。
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - 要删除备份的应用包名。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，取值范围：大于等于0。
   * @param { int } appIndex - 表示应用索引。取值范围0~5，取值为0表示主应用，取值1~5表示分身应用的索引。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function removeBackupBundleData(bundleName: string, userId: int, appIndex: int): Promise<void>;

  /**
   * 查询当前用户下指定应用的安装状态。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定应用的包名。
   * @returns { BundleInstallStatus } 应用的安装状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function getBundleInstallStatus(bundleName: string): BundleInstallStatus;

  /**
   * 以同步方法查询指定用户下指定应用或分身应用是否被设置禁止停用。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or
   *     (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - 表示应用的包名。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取，取值范围：大于等于0。
   * @param { int } appIndex - 表示应用索引。取值范围0~5，取值为0表示主应用，取值1~5表示分身应用的索引。
   * @returns { boolean } 指定应用是否被设置禁止停用。<br/>返回true表示指定应用已被设置禁止停用，返回false表示指定应用没有被设置禁止停用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Non-system APP calling system API.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function isApplicationDisableForbidden(bundleName: string, userId: int, appIndex: int): boolean;

  /**
   * 获取指定包名和分身索引的应用名称。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用的包名。
   * @param { int } appIndex - 表示应用索引。取值范围0~5，取值为0表示主应用，取值1~5表示分身应用的索引。
   * @returns { Promise<string> } Promise对象，调用成功返回应用名称；调用失败返回错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getApplicationLabel(bundleName: string, appIndex: int): Promise<string>;

  /**
   * 获取设备OTA升级期间当前用户下新增的所有预置应用信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<PreinstalledApplicationInfo>> } Promise对象，设备OTA升级期间当前用户下新增的所有预置应用信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAllNewPreinstalledApplicationInfo(): Promise<Array<PreinstalledApplicationInfo>>;

  /**
   * 根据给定的bundleFlags获取系统中所有的BundleInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_INSTALLED_BUNDLE_LIST
   * @param { int } bundleFlags - 指定返回的BundleInfo所包含的信息，详情请参考
   *     [BundleFlag]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}。
   * @returns { Promise<Array<BundleInfo>> } Promise对象，返回当前已安装应用的信息列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getInstalledBundleList(bundleFlags: int): Promise<Array<BundleInfo>>;

  /**
   * 应用程序信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type ApplicationInfo = _ApplicationInfo;

  /**
   * 模块的元数据信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export type ModuleMetadata = _ModuleMetadata;

  /**
   * 元数据信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type Metadata = _Metadata;

  /**
   * 应用包信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type BundleInfo = _BundleInfo.BundleInfo;

  /**
   * 应用包信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  export type BundleInfo = _BundleInfo;

  /**
   * 权限使用的场景和时机。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type UsedScene = _BundleInfo.UsedScene;

  /**
   * 权限使用的场景和时机。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  export type UsedScene = _UsedScene;

  /**
   * 应用运行时需向系统申请的权限集合的详细信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type ReqPermissionDetail = _BundleInfo.ReqPermissionDetail;

  /**
   * 应用运行时需向系统申请的权限集合的详细信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  export type ReqPermissionDetail = _ReqPermissionDetail;

  /**
   * 应用包的签名信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type SignatureInfo = _BundleInfo.SignatureInfo;

  /**
   * 应用包的签名信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  export type SignatureInfo = _SignatureInfo;

  /**
   * 描述应用包的身份信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 15 dynamic
   */
  export type AppCloneIdentity = _BundleInfo.AppCloneIdentity;

  /**
   * 描述应用包的身份信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 23 static
   */
  export type AppCloneIdentity = _AppCloneIdentity;

  /**
   * 模块信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type HapModuleInfo = _HapModuleInfo.HapModuleInfo;

  /**
   * 模块信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type HapModuleInfo = _HapModuleInfo;

  /**
   * 原子化服务中模块的预加载模块信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type PreloadItem = _HapModuleInfo.PreloadItem;

  /**
   * 原子化服务中模块的预加载模块信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type PreloadItem = _PreloadItem;

  /**
   * 模块所依赖的动态共享库信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type Dependency = _HapModuleInfo.Dependency;

  /**
   * 模块所依赖的动态共享库信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type Dependency = _Dependency;

  /**
   * 模块配置的路由表信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   */
  export type RouterItem = _HapModuleInfo.RouterItem;

  /**
   * 模块配置的路由表信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 23 static
   */
  export type RouterItem = _RouterItem;

  /**
   * 模块配置的路由表中的自定义数据。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   */
  export type DataItem = _HapModuleInfo.DataItem;

  /**
   * 模块配置的路由表中的自定义数据。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type DataItem = _DataItem;

  /**
   * Ability信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type AbilityInfo = _AbilityInfo.AbilityInfo;

  /**
   * Ability信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type AbilityInfo = _AbilityInfo;

  /**
   * 窗口尺寸。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type WindowSize = _AbilityInfo.WindowSize;

  /**
   * 窗口尺寸。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type WindowSize = _WindowSize;

  /**
   * ExtensionAbility信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type ExtensionAbilityInfo = _ExtensionAbilityInfo.ExtensionAbilityInfo;

  /**
   * ExtensionAbility信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type ExtensionAbilityInfo = _ExtensionAbilityInfo;

  /**
   * [module.json5配置文件](docroot://quick-start/module-configuration-file.md)中定义的权限详细信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type PermissionDef = _PermissionDef;

  /**
   * ElementName信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type ElementName = _ElementName;

  /**
   * 共享包信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export type SharedBundleInfo = _SharedBundleInfo;

  /**
   * 应用[HarmonyAppProvision配置文件](docroot://security/app-provision-structure.md)中的信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   */
  export type AppProvisionInfo = _AppProvisionInfo.AppProvisionInfo;

  /**
   * 应用[HarmonyAppProvision配置文件](docroot://security/app-provision-structure.md)中的信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  export type AppProvisionInfo = _AppProvisionInfo;

  /**
   * 配置文件中的有效期。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   */
  export type Validity = _AppProvisionInfo.Validity;

  /**
   * 配置文件中的有效期。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  export type Validity = _Validity;

  /**
   * 预置应用被卸载后可以恢复的预置应用信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type RecoverableApplicationInfo = _RecoverableApplicationInfo;

  /**
   * skill信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   */
  export type Skill = _Skill.Skill;

  /**
   * skill信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type Skill = _Skill;

  /**
   * SkillUri信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   */
  export type SkillUrl = _Skill.SkillUri;

  /**
   * SkillUri信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type SkillUrl = _SkillUri;

  /**
   * 预置应用信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export type PreinstalledApplicationInfo = _PreinstalledApplicationInfo;

  /**
   * 插件信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  export type PluginBundleInfo = _PluginBundleInfo;

  /**
   * 插件的模块信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  export type PluginModuleInfo = _PluginModuleInfo;

  /**
   * 应用的动态图标信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   */
  export type DynamicIconInfo = _BundleInfo.DynamicIconInfo;

  /**
   * 应用的动态图标信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  export type DynamicIconInfo = _DynamicIconInfo;

  /**
   * 应用包选项，用于设置或查询应用相关信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   */
  export type BundleOptions = _BundleInfo.BundleOptions;

  /**
   * 应用包选项，用于设置或查询应用相关信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  export type BundleOptions = _BundleOptions;

  /**
   * 应用备用图标信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export type AlternateIconInfo = _BundleInfo.AlternateIconInfo;

  /**
   * 应用备用图标信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export type AlternateIconInfo = _AlternateIconInfo;
}
import image from './@ohos.multimedia.image';

export default bundleManager;