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
import image from './@ohos.multimedia.image';
/*** if arkts dynamic */
import type { ApplicationInfo as _ApplicationInfo, ModuleMetadata as _ModuleMetadata,
  PreinstalledApplicationInfo as _PreinstalledApplicationInfo } from './bundleManager/ApplicationInfo';
import type { RecoverableApplicationInfo as _RecoverableApplicationInfo } from './bundleManager/RecoverableApplicationInfo';
import * as _AbilityInfo from './bundleManager/AbilityInfo';
import * as _AppProvisionInfo from './bundleManager/AppProvisionInfo';
import * as _BundleInfo from './bundleManager/BundleInfo';
import * as _HapModuleInfo from './bundleManager/HapModuleInfo';
import * as _ExtensionAbilityInfo from './bundleManager/ExtensionAbilityInfo';
import * as _Skill from './bundleManager/Skill';
/*** endif */
/*** if arkts static */
import { ApplicationInfo as _ApplicationInfo, ModuleMetadata as _ModuleMetadata,
  PreinstalledApplicationInfo as _PreinstalledApplicationInfo } from './bundleManager/ApplicationInfo';
import { RecoverableApplicationInfo as _RecoverableApplicationInfo } from './bundleManager/RecoverableApplicationInfo';
import { AbilityInfo as _AbilityInfo, WindowSize as _WindowSize } from './bundleManager/AbilityInfo';
import { AppProvisionInfo as _AppProvisionInfo, Validity as _Validity } from './bundleManager/AppProvisionInfo';
import { BundleInfo as _BundleInfo, UsedScene as _UsedScene, ReqPermissionDetail as _ReqPermissionDetail,
  SignatureInfo as _SignatureInfo, AppCloneIdentity as _AppCloneIdentity, DynamicIconInfo as _DynamicIconInfo,
  BundleOptions as _BundleOptions, AlternateIconInfo as _AlternateIconInfo,
  AppClonePreference as _AppClonePreference } from './bundleManager/BundleInfo';
import { HapModuleInfo as _HapModuleInfo, PreloadItem as _PreloadItem, Dependency as _Dependency,
  RouterItem as _RouterItem, DataItem as _DataItem } from './bundleManager/HapModuleInfo';
import { ExtensionAbilityInfo as _ExtensionAbilityInfo } from './bundleManager/ExtensionAbilityInfo';
import { Skill as _Skill, SkillUri as _SkillUri } from './bundleManager/Skill';
import type { RecordData } from './@ohos.base';
/*** endif */
/**
 * The module provides APIs for obtaining application information, including
 * [bundle information]{@link bundleManager/BundleInfo},
 * [application information]{@link bundleManager/ApplicationInfo},
 * [ability information]{@link bundleManager/AbilityInfo} (information about a UIAbility), and
 * [ExtensionAbility information]{@link bundleManager/ExtensionAbilityInfo:ExtensionAbilityInfo}.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace bundleManager {
  /**
   * Enumerates the bundle flags, which indicate the type of bundle information to obtain.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum BundleFlag {
    /**
     * Used to obtain the default bundle information. The obtained information does not contain information about the
     * signature, application, HAP module, ability, ExtensionAbility, or permission.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_DEFAULT = 0x00000000,
    /**
     * Used to obtain the bundle information with application information. The obtained information does not contain
     * information about the signature, HAP module, ability, ExtensionAbility, or permission.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_APPLICATION = 0x00000001,
    /**
     * Used to obtain the bundle information with HAP module information. The obtained information does not contain
     * information about the signature, application, ability, ExtensionAbility, or permission.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_HAP_MODULE = 0x00000002,
    /**
     * Used to obtain the bundle information with ability information. The obtained information does not contain
     * information about the signature, application, ExtensionAbility, or permission. It must be used together with
     * **GET_BUNDLE_INFO_WITH_HAP_MODULE**.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_ABILITY = 0x00000004,
    /**
     * Used to obtain the bundle information with ExtensionAbility information. The obtained information does not
     * contain information about the signature, application, ability, or permission. It must be used together with
     * **GET_BUNDLE_INFO_WITH_HAP_MODULE**.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY = 0x00000008,
    /**
     * Used to obtain the bundle information with permission information. The obtained information does not contain
     * information about the signature, application, HAP module, ability, or ExtensionAbility.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION = 0x00000010,
    /**
     * Used to obtain the metadata contained in the application, module, ability, or ExtensionAbility information. It
     * must be used together with **GET_BUNDLE_INFO_WITH_APPLICATION**, **GET_BUNDLE_INFO_WITH_HAP_MODULE**,
     * **GET_BUNDLE_INFO_WITH_ABILITY**, and **GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY**.
     *
     * - To obtain the metadata contained in the application information, it must be used together with
     * **GET_BUNDLE_INFO_WITH_APPLICATION**.
     * - To obtain the metadata contained in the module information, it must be used together with
     * **GET_BUNDLE_INFO_WITH_HAP_MODULE**.
     * - To obtain the metadata contained in the ability information, it must be used together with
     * **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_ABILITY**.
     * - To obtain the metadata contained in the ExtensionAbility information, it must be used together with
     * **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY**.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_METADATA = 0x00000020,
    /**
     * Used to obtain the information about disabled bundles and abilities of a bundle. The obtained information does
     * not contain information about the signature, application, HAP module, ability, ExtensionAbility, or permission.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_DISABLE = 0x00000040,
    /**
     * Used to obtain the bundle information with signature information. The obtained information does not contain
     * information about the application, HAP module, ability, ExtensionAbility, or permission.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_SIGNATURE_INFO = 0x00000080,
    /**
     * Used to obtain the bundle information with the file context menu configuration. It must be used together with
     * **GET_BUNDLE_INFO_WITH_HAP_MODULE**.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_MENU = 0x00000100,
    /**
     * Used to obtain the bundle information with the router map. It must be used together with
     * **GET_BUNDLE_INFO_WITH_HAP_MODULE**.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_ROUTER_MAP = 0x00000200,
    /**
     * Used to obtain the bundle information with the skills. It must be used together with
     * **GET_BUNDLE_INFO_WITH_HAP_MODULE**, **GET_BUNDLE_INFO_WITH_ABILITY**, and
     * **GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY**.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_SKILL = 0x00000800,
    /**
     * Used to obtain the bundle information of the application that has only a home screen icon. It is valid only in
     * the
     * [getAllBundleInfo]{@link bundleManager.getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>)}
     * API.
     *
     * **System API**: This flag can be used only in system APIs.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_ONLY_WITH_LAUNCHER_ABILITY = 0x00001000,
    /**
     * Used to obtain the bundle information of an application installed by any user. It must be used together with
     * **GET_BUNDLE_INFO_WITH_APPLICATION**. It is valid only in the
     * [getBundleInfo]{@link bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>)}
     * and
     * [getAllBundleInfo]{@link bundleManager.getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>)}
     * APIs.
     *
     * **System API**: This flag can be used only in system APIs.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_OF_ANY_USER = 0x00002000,
    /**
     * Used to obtain the bundle information of a main application (excluding its clones). It is valid only in the
     * [getAllBundleInfo]{@link bundleManager.getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>)}
     * API.
     *
     * **System API**: This flag can be used only in system APIs.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_EXCLUDE_CLONE = 0x00004000,
    /**
     * Used to obtain the bundle information of an application that has device-cloud file synchronization or device-
     * cloud structured data synchronization enabled. It is valid only in the
     * [getAllBundleInfo]{@link bundleManager.getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>)}
     * API.
     *
     * **System API**: This flag can be used only in system APIs.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    GET_BUNDLE_INFO_WITH_CLOUD_KIT = 0x00008000,
    /**
     * Used to obtain the bundle information with the HAP module information. It is valid only for
     * bundleInfo.hapModulesInfo corresponding to the entry module. If the entry module does not exist, the
     * bundleInfo.hapModulesInfo list is empty. The obtained bundle information does not contain information about the
     * signature, application, ability, ExtensionAbility, or permission.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    GET_BUNDLE_INFO_WITH_ENTRY_MODULE = 0x00010000,
  }

  /**
   * Enumerates the application flags, which indicate the type of application information to obtain.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ApplicationFlag {
    /**
     * Used to obtain the default application information. The obtained information does not contain the permission
     * information or metadata.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_APPLICATION_INFO_DEFAULT = 0x00000000,
    /**
     * Used to obtain the application information with permission information.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_APPLICATION_INFO_WITH_PERMISSION = 0x00000001,
    /**
     * Used to obtain the application information with metadata.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_APPLICATION_INFO_WITH_METADATA = 0x00000002,
    /**
     * Used to obtain the application information of disabled bundles.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_APPLICATION_INFO_WITH_DISABLE = 0x00000004
  }

  /**
   * Enumerates the ability flags, which indicate the type of ability information to obtain.
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
     * Used to obtain the default [ability information]{@link bundleManager/AbilityInfo}, which does not contain
     * permissions, metadata, or ability information of disabled abilities. <!--Del-->You can use
     * [setAbilityEnabled]{@link @ohos.bundle.bundleManager:bundleManager.setAbilityEnabled(info: AbilityInfo, isEnabled: boolean, callback: AsyncCallback<void>)}
     * to set the ability enabling status and use
     * [isAbilityEnabled]{@link @ohos.bundle.bundleManager:bundleManager.isAbilityEnabled(info: AbilityInfo)} to obtain
     * the ability enabling status.<!--DelEnd-->
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
     * Used to obtain the ability information containing permissions.
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
     * Used to obtain the ability information containing application information.
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
     * Used to obtain the ability information containing metadata.
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
     * Used to obtain the ability information of disabled abilities.
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
     * Used to obtain the ability information of system applications.
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
     * Used to obtain the ability information that passes <!--RP3-->
     * [domain name verification](docroot://application-models/app-linking-startup.md#working-principles)<!--RP3End-->.
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
     * Used to obtain the ability information containing skills.
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
   * Enumerates the ExtensionAbility flags, which indicate the type of ExtensionAbility information to obtain.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ExtensionAbilityFlag {
    /**
     * Used to obtain the default ExtensionAbility information. The obtained information does not contain the permission
     * , metadata, or disabled ExtensionAbility information.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_DEFAULT = 0x00000000,
    /**
     * Used to obtain the ExtensionAbility information with permission information.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_WITH_PERMISSION = 0x00000001,
    /**
     * Used to obtain the ExtensionAbility information with application information.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_WITH_APPLICATION = 0x00000002,
    /**
     * Used to obtain the ExtensionAbility information with metadata.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_WITH_METADATA = 0x00000004,
    /**
     * Used to obtain the ExtensionAbility information with skills.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_EXTENSION_ABILITY_INFO_WITH_SKILL = 0x00000010
  }

  /**
   * Enumerates the types of ExtensionAbility components.
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
     * [FormExtensionAbility]{@link @ohos.app.form.FormExtensionAbility}: provides APIs for widget development.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FORM = 0,

    /**
     * [WorkSchedulerExtensionAbility]{@link @ohos.WorkSchedulerExtensionAbility}: provides extended capabilities
     * related to deferred tasks, enabling applications to execute non-real-time tasks when the system is idle.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WORK_SCHEDULER = 1,

    /**
     * [InputMethodExtensionAbility]{@link @ohos.InputMethodExtensionAbility:InputMethodExtensionAbility}: provides
     * extended capabilities related to input method applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    INPUT_METHOD = 2,

    /**
     * [ServiceExtensionAbility]{@link @ohos.app.ability.ServiceExtensionAbility:ServiceExtensionAbility}: provides
     * extended capabilities related to background services.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE = 3,

    /**
     * AccessibilityExtensionAbility: provides extended capabilities related to accessibility services,
     * supporting access and operation of the foreground UI.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ACCESSIBILITY = 4,

    /**
     * [DataShareExtensionAbility]{@link @ohos.application.DataShareExtensionAbility}: provides extended capabilities
     * related to data sharing, providing data reading and writing services.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    DATA_SHARE = 5,

    /**
     * FileShareExtensionAbility: provides extended capabilities related to file sharing between applications. This
     * ability is reserved and supported only by system applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    FILE_SHARE = 6,

    /**
     * [StaticSubscriberExtensionAbility]{@link @ohos.application.StaticSubscriberExtensionAbility:StaticSubscriberExtensionAbility}
     * : provides extended capabilities related to static broadcast, used to handle static events such as startup
     * events.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    STATIC_SUBSCRIBER = 7,

    /**
     * WallpaperExtensionAbility: provides extended capabilities to implement wallpapers displayed on home screen. This
     * ability is reserved and supported only by system applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WALLPAPER = 8,

    /**
     * [BackupExtensionAbility]{@link @ohos.application.BackupExtensionAbility}: provides extended capabilities for data
     * backup and restore.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    BACKUP = 9,

    /**
     * [WindowExtensionAbility]{@link @ohos.application.WindowExtensionAbility}: provides extended capabilities that
     * allow system applications to pull up and embed UIs of other applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WINDOW = 10,

    /**
     * [EnterpriseAdminExtensionAbility]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility}
     * : provides extended capabilities for processing enterprise management events, such as application installation
     * events on devices and events indicating too many incorrect screen-lock password attempts.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ENTERPRISE_ADMIN = 11,

    /**
     * ThumbnailExtensionAbility: provides extended capabilities for offering thumbnails for files. This ability is
     * reserved and supported only by system applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    THUMBNAIL = 13,

    /**
     * PreviewExtensionAbility: provides extended capabilities for file preview so that other applications can be
     * embedded and displayed in the current application. This ability is reserved and supported only by system
     * applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    PREVIEW = 14,

    /**
     * PrintExtensionAbility: provides extended capabilities for printing photos and documents in office scenarios. This
     * ability is supported only by system applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PRINT = 15,

    /**
     * [ShareExtensionAbility]{@link @ohos.app.ability.ShareExtensionAbility:ShareExtensionAbility}: provides sharing
     * service templates based on the UIExtensionAbility.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    SHARE = 16,

    /**
     * PushExtensionAbility: provides extended capabilities for pushing scenario-specific messages. This ability is
     * reserved and supported only by system applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PUSH = 17,

    /**
     * [DriverExtensionAbility]{@link @ohos.app.ability.DriverExtensionAbility}: provides extended capabilities for the
     * peripheral driver. When an application configures an ExtensionAbility of the driver type, it is recognized as a
     * driver application. Driver applications do not differentiate between users during installation, uninstall, and
     * recovery. Moreover, when a new user account is created, the existing driver applications on the device are
     * installed for that user. For example, when a sub-user is created, the driver applications already installed by
     * the primary user is automatically installed for the sub-user. If a driver application is uninstalled for a sub-
     * user, it is also removed for the primary user.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DRIVER = 18,

    /**
     * [ActionExtensionAbility]{@link @ohos.app.ability.ActionExtensionAbility:ActionExtensionAbility}: provides custom
     * action service templates based on the UIExtensionAbility.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10 dynamic
     * @since 23 static
     */
    ACTION = 19,

    /**
     * AdsServiceExtensionAbility: provides background customized ad services for external systems. This ability is
     * supported only by system applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 11 dynamic
     * @since 23 static
     */
    ADS_SERVICE = 20,

    /**
     * [EmbeddedUIExtensionAbility]{@link @ohos.app.ability.EmbeddedUIExtensionAbility:EmbeddedUIExtensionAbility}:
     * provides extended capabilities for the embeddable UI across process.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    EMBEDDED_UI = 21,

    /**
     * InsightIntentUIExtensionAbility: provides extended capabilities that enable applications to be called by Celia
     * intents so as to be displayed in windows.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INSIGHT_INTENT_UI = 22,

    /**
     * [FenceExtensionAbility]{@link @ohos.app.ability.FenceExtensionAbility:FenceExtensionAbility}: provides geofence-
     * related capabilities. It inherits from ExtensionAbility.
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
     * AssetAccelerationExtensionAbility: provides extended capabilities of pre-downloading background resources when
     * the device is idle.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 18 dynamic
     * @since 23 static
     */
    ASSET_ACCELERATION = 26,

    /**
     * [FormEditExtensionAbility]{@link @ohos.app.form.FormEditExtensionAbility:FormEditExtensionAbility}: provides
     * extended capabilities related to widget editing. It inherits from UIExtensionAbility.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 18 dynamic
     * @since 23 static
     */
    FORM_EDIT = 27,

    /**
     * [DistributedExtensionAbility]{@link @ohos.application.DistributedExtensionAbility:DistributedExtensionAbility}:
     * provides extended capabilities for distributed services and lifecycle callbacks for creation, destruction, and
     * connection of the DistributedExtensionAbility.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DISTRIBUTED = 28,

    /**
     * [AppServiceExtensionAbility]{@link @ohos.app.ability.AppServiceExtensionAbility:AppServiceExtensionAbility}:
     * provides backend service capabilities for enterprise common applications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 20 dynamic
     * @since 23 static
     */
    APP_SERVICE = 29,

    /**
     * [LiveFormExtensionAbility]{@link @ohos.app.form.LiveFormExtensionAbility}: provides extended capabilities for
     * interactive widgets, and provides lifecycle callbacks for creating and destroying interactive widgets.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    LIVE_FORM = 30,

    /**
     * Indicates extension info with type of the selection
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SELECTION = 31,

    /**
     * [WebNativeMessagingExtensionAbility]{@link @ohos.web.WebNativeMessagingExtensionAbility}: provides extended
     * capabilities for web native message communication.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 21 dynamic
     * @since 23 static
     */
    WEB_NATIVE_MESSAGING = 32,

    /**
     * [FaultLogExtensionAbility]{@link @ohos.hiviewdfx.FaultLogExtensionAbility:FaultLogExtensionAbility}: provides
     * extended capabilities for delayed fault notifications.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 21 dynamic
     * @since 23 static
     */
    FAULT_LOG = 33,

    /**
     * [NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility}
     * : provides extended capabilities for notification subscription.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 22 dynamic
     * @since 23 static
     */
    NOTIFICATION_SUBSCRIBER = 34,

    /**
     * [CryptoExtensionAbility](docroot://security/UniversalKeystoreKit/huks-extension-ability-support-dev.md): provides
     * extended capabilities for external key management.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 22 dynamic
     */
    CRYPTO = 35,

    /**
     * [PartnerAgentExtensionAbility]{@link @ohos.FusionConnectivity.PartnerAgentExtensionAbility}: provides the device
     * discovery and device offline notification functions based on Bluetooth.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PARTNER_AGENT = 36,

    /**
     * Indicates extension info with type of the agent.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AGENT = 37,

    /**
     * Indicates extension info with type of the agent UI extension.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AGENT_UI = 38,

    /**
     * The ability type is not specified. <!--Del-->It can be used in
     * [queryExtensionAbilityInfo]{@link @ohos.bundle.bundleManager:bundleManager.queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: int, userId: int, callback: AsyncCallback<Array<ExtensionAbilityInfo>>)}
     * to obtain ExtensionAbility components of all types.<!--DelEnd-->
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 255
  }

  /**
   * Enumerates the permission grant states.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum PermissionGrantState {
    /**
     * Permission denied.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PERMISSION_DENIED = -1,

    /**
     * Permission granted.
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
   * Enumerates the window modes supported by the ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum SupportWindowMode {
    /**
     * A window in full-screen mode is supported.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FULL_SCREEN = 0,
    /**
     * A window in split-screen mode is supported.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SPLIT = 1,
    /**
     * A floating window is supported.
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
   * Enumerates the [launch types](docroot://application-models/uiability-launch-type.md) of the UIAbility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LaunchType {
    /**
     * The UIAbility can have only one instance.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SINGLETON = 0,

    /**
     * The UIAbility can have multiple instances.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MULTITON = 1,

    /**
     * The UIAbility can have one or multiple instances, depending on the internal service of the ability.
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
   * Enumerates the types of ability components.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @FAModelOnly
   * @since 9 dynamiconly
   */
  export enum AbilityType {
    /**
     * Ability that has the UI. FA developed using the Page template to provide the capability of interacting with
     * users.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @FAModelOnly
     * @since 9 dynamiconly
     */
    PAGE = 1,

    /**
     * Ability of the background service type, without the UI. PA developed using the Service template to provide the
     * capability of running tasks in the background.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @FAModelOnly
     * @since 9 dynamiconly
     */
    SERVICE = 2,

    /**
     * PA developed using the Data template to provide unified data access for external systems.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @FAModelOnly
     * @since 9 dynamiconly
     */
    DATA = 3
  }

  /**
   * Enumerates the display orientations of the ability. It is applicable only to
   * [PageAbility](docroot://application-models/pageability-overview.md) in the FA model.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DisplayOrientation {
    /**
     * Unspecified. The orientation is determined by the system.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * Landscape.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE = 1,

    /**
     * Portrait.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT = 2,

    /**
     * The last display orientation is used.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FOLLOW_RECENT = 3,

    /**
     * Reverse landscape.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE_INVERTED = 4,

    /**
     * Reverse portrait.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 5,

    /**
     * Automatically rotates when the sensor changes to landscape or portrait mode.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION = 6,

    /**
     * Automatically rotates when the sensor changes to landscape mode.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE = 7,

    /**
     * Automatically rotates when the sensor changes to portrait mode.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT = 8,

    /**
     * Switched-determined auto rotation.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_RESTRICTED = 9,

    /**
     * Switched-determined auto rotation in the horizontal direction.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE_RESTRICTED = 10,

    /**
     * Switched-determined auto rotation in the vertical direction.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT_RESTRICTED = 11,

    /**
     * Locked.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCKED = 12,

    /**
     * Auto rotation controlled by the switch and determined by the system.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_UNSPECIFIED = 13,

    /**
     * Following the orientation of the home screen.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_DESKTOP = 14
  }

  /**
   * Enumerates the module types.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ModuleType {
    /**
     * Main module of and entry to the application, providing the basic application functionality.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ENTRY = 1,
    /**
     * Dynamic feature module of the application, extending the application functionality. This type of HAP can be
     * installed based on user needs and device types.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FEATURE = 2,
    /**
     * [Dynamic shared library](docroot://quick-start/in-app-hsp.md) of the application.
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
   * Enumerates the bundle types.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BundleType {
    /**
     * The bundle is an application.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    APP = 0,
    /**
     * The bundle is an atomic service.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ATOMIC_SERVICE = 1
  }

  /**
   * Defines the version compatibility type of the dynamic shared library.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum CompatiblePolicy {
    /**
     * The shared library is backward compatible.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    BACKWARD_COMPATIBILITY = 1
  }

  /**
   * Enumerates the types of profiles (also called application files).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ProfileType {
    /**
     * Profile of the InsightIntent framework.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    INTENT_PROFILE = 1,

    /**
     * Indicates the JSON profile of the cloud.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CLOUD_PROFILE = 8
  }

  /**
   * Enumerates the application [distribution types](docroot://security/app-provision-structure.md).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum AppDistributionType {
    /**
     * Application installed from AppGallery.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    APP_GALLERY = 1,

    /**
     * Enterprise application that can be installed on personal devices.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ENTERPRISE = 2,

    /**
     * Common enterprise application that can be installed on enterprise devices only through an enterprise mobile
     * device management (MDM) application.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ENTERPRISE_NORMAL = 3,

    /**
     * Enterprise MDM application that can be installed only on enterprise devices. To install a common enterprise
     * application, you must have
     * [administrator privileges]{@link @ohos.enterprise.adminManager:adminManager.enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, callback: AsyncCallback<void>)}
     * .
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ENTERPRISE_MDM = 4,

    /**
     * Preinstalled system application.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OS_INTEGRATION = 5,

    /**
     * Application under crowdtesting, which is distributed by AppGallery to a limited number of users and come with a
     * set expiration date. When the system detects that the validity period of the application expires, it prompts the
     * user to update to the release version available on AppGallery.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CROWDTESTING = 6,

    /**
     * Other.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 7
  }

  /**
   * Enumerates the types of the multi-app mode.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  export enum MultiAppModeType {
    /**
     * Unspecified. It is the default value of
     * [multiAppMode](docroot://quick-start/app-configuration-file.md#multiappmode).
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,
    /**
     * [Multi-instance mode](docroot://quick-start/multiInstance.md). A resident process does not support this value.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    MULTI_INSTANCE = 1,
    /**
     * [App clone mode](docroot://quick-start/app-clone.md)
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 12 dynamic
     * @since 23 static
     */
    APP_CLONE = 2
  }

  /**
   * Enumerates the application information flag, which describes the status between an application and user.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum ApplicationInfoFlag {
    /**
     * The application is installed for the specified user.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FLAG_INSTALLED = 0x00000001,
    /**
     * The application is installed for users other than the specified user.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    FLAG_OTHER_INSTALLED = 0x00000010,
    /**
     * The application is a preinstalled application.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    FLAG_PREINSTALLED_APP = 0x00000020,
    /**
     * The preinstalled application is updated.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    FLAG_PREINSTALLED_APP_UPDATE = 0x00000040
  }

  /**
   * Enumerates the application installation statuses.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  export enum BundleInstallStatus {
    /**
     * The application is not installed.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    BUNDLE_NOT_EXIST = 1,

    /**
     * The application is being installed.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    BUNDLE_INSTALLING = 2,

    /**
     * The application has been installed.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    BUNDLE_INSTALLED = 3
  }

  /**
   * Enumerates the application clone preference modes.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum AppClonePreferenceMode {
    /**
     * Always prompts the user to select an application.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ALWAYS_ASK = 0,

    /**
     * Uses the main application by default.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    MAIN_APP = 1,

    /**
     * Uses the application clone by default.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    CLONE_APP = 2
  }

  /**
   * Obtains the bundle information of the current application based on the given bundle flags. This API uses a promise
   * to return the result.
   *
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @returns { Promise<BundleInfo> } Promise used to return the bundle information.
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
   * Obtains the bundle information of the current application based on the given bundle flags. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { AsyncCallback<BundleInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the information is successfully obtained, **err** is **null** and **data** is the bundle information
   *     of the current application. Otherwise, **err** is an error object.
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
   * Obtains the bundle information of the current application based on the given bundle flags. This API returns the
   * result synchronously.
   *
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @returns { BundleInfo } Bundle information obtained.
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
   * Obtains the bundle information based on the given bundle name and bundle flags. This API uses an asynchronous
   * callback to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { AsyncCallback<BundleInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the information is successfully obtained, **err** is **null** and **data** is the bundle
   *     information. Otherwise, **err** is an error object.
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
   * Obtains the [BundleInfo]{@link bundleManager/BundleInfo} based on the given bundle name, bundle flags, and user
   * ID. This API uses an asynchronous callback to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<BundleInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the information is successfully obtained, **err** is **null** and **data** is the bundle
   *     information. Otherwise, **err** is an error object.
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
   * Obtains the bundle information based on the given bundle name, bundle flags, and user ID. This API uses a promise
   * to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<BundleInfo> } Promise used to return the bundle information obtained.
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
   * Obtains the application information based on the given bundle name and application flags. This API uses an
   * asynchronous callback to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } appFlags - Type of the application information to obtain.
   * @param { AsyncCallback<ApplicationInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the operation is successful, **err** is **null** and **data** is the application information
   *     obtained. Otherwise, **err** is an error object.
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
   * Obtains the application information based on the given bundle name, application flags, and user ID. This API uses
   * an asynchronous callback to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } appFlags - Type of the application information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<ApplicationInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the operation is successful, **err** is **null** and **data** is the application information
   *     obtained. Otherwise, **err** is an error object.
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
   * Obtains the application information based on the given bundle name, application flags, and user ID. This API uses a
   * promise to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } appFlags - Type of the application information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<ApplicationInfo> } Promise used to return the application information.
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
   * Obtains all the bundle information in the system based on the given bundle flags. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { AsyncCallback<Array<BundleInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return
   *     the result. If the operation is successful, **err** is **null** and **data** is the array of bundle information
   *     obtained. Otherwise, **err** is an error object.
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
   * Obtains all the bundle information in the system based on the given bundle flags and user ID. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<Array<BundleInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return
   *     the result. If the operation is successful, **err** is **null** and **data** is the array of bundle information
   *     obtained. Otherwise, **err** is an error object.
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
   * Obtains all the bundle information in the system based on the given bundle flags and user ID. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<Array<BundleInfo>> } Promise used to return an array of bundle information.
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
   * Obtains all the application information in the system based on the given application flags. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } appFlags - Type of the application information to obtain.
   * @param { AsyncCallback<Array<ApplicationInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null** and **data** is the array of application
   *     information obtained. Otherwise, **err** is an error object.
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
   * Obtains all the application information in the system based on the given application flags and user ID. This API
   * uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } appFlags - Type of the application information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<Array<ApplicationInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null** and **data** is the array of application
   *     information obtained. Otherwise, **err** is an error object.
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
   * Obtains all the application information in the system based on the given application flags and user ID. This API
   * uses a promise to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST
   * @param { int } appFlags - Type of the application information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<Array<ApplicationInfo>> } Promise used to return the array of application information obtained.
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
   * Obtains the ability information based on the given want and ability flags. This API uses an asynchronous callback
   * to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Want containing the bundle name to query.
   * @param { int } abilityFlags - Type of the ability information to obtain.
   * @param { AsyncCallback<Array<AbilityInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return
   *     the result. If the operation is successful, **err** is **null** and **data** is the array of ability
   *     information obtained. Otherwise, **err** is an error object.
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
   * Obtains the ability information based on the given want, ability flags, and user ID. This API uses an asynchronous
   * callback to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Want containing the bundle name to query.
   * @param { int } abilityFlags - Type of the ability information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<Array<AbilityInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return
   *     the result. If the operation is successful, **err** is **null** and **data** is the array of ability
   *     information obtained. Otherwise, **err** is an error object.
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
   * Obtains the ability information based on the given want, ability flags, and user ID. This API uses a promise to
   * return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Want containing the bundle name to query.
   * @param { int } abilityFlags - Type of the ability information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<Array<AbilityInfo>> } Promise used to return the array of ability information obtained.
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
   * Obtains the ability information based on the given resource identifier and ability flag. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.GET_ABILITY_INFO
   * @param { string } uri - URI of the resource. The value is the same as that of the
   *     [uris field under skills in the module.json5 file](docroot://quick-start/module-configuration-file.md#skills).
   * @param { int } abilityFlags - [Ability flag]{@link @ohos.bundle.bundleManager:bundleManager.AbilityFlag},
   *     indicating the ability information to be obtained.
   * @returns { Promise<Array<AbilityInfo>> } Promise used to return an array of ability information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 17700003 - The ability is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getAbilityInfo(uri: string, abilityFlags: int): Promise<Array<AbilityInfo>>;

  /**
   * Sets the file types that can be opened by the current application.
   *
   * @permission ohos.permission.MANAGE_SELF_SKILLS
   * @param { string } moduleName - Module name.
   * @param { string } abilityName - Name of the UIAbility component.
   * @param { Array<string> } fileTypes - Array of file types. The array must contain no more than 1024 elements, and
   *     each element must not exceed 512 characters. Valid values must be from
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}. Empty values,
   *     wildcard characters, and **general.object** are not allowed.
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
   * Obtains the ability information based on the given want list, ability flags, and user ID. This API uses a promise
   * to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Array<Want> } wants - List of want containing the bundle name to query.
   * @param { int } abilityFlags - Type of the ability information to obtain.
   * @param { int } [userId] - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<Array<AbilityInfo>> } Promise used to return an array of
   *     [AbilityInfo]{@link bundleManager/AbilityInfo} object.
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
   * Obtains the ability information based on the given want, ability flags, and user ID. This API returns the result
   * synchronously.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Want containing the bundle name to query.
   * @param { int } abilityFlags - Type of the ability information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Array<AbilityInfo> } An array of ability information.
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
   * Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, and ExtensionAbility
   * flags. This API uses an asynchronous callback to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Want containing the bundle name to query.
   * @param { ExtensionAbilityType } extensionAbilityType - Type of the ExtensionAbility.
   * @param { int } extensionAbilityFlags - Type of the ExtensionAbility information to obtain.
   * @param { AsyncCallback<Array<ExtensionAbilityInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null** and **data** is the array of
   *     ExtensionAbility information obtained. Otherwise, **err** is an error object.
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
   * Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, ExtensionAbility flags,
   * and user ID. This API uses an asynchronous callback to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Want containing the bundle name to query.
   * @param { ExtensionAbilityType } extensionAbilityType - Type of the ExtensionAbility.
   * @param { int } extensionAbilityFlags - Type of the ExtensionAbility information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<Array<ExtensionAbilityInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null** and **data** is the array of
   *     ExtensionAbility information obtained. Otherwise, **err** is an error object.
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
   * Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, ExtensionAbility flags,
   * and user ID. This API uses a promise to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Want containing the bundle name to query.
   * @param { ExtensionAbilityType } extensionAbilityType - Type of the ExtensionAbility.
   * @param { int } extensionAbilityFlags - Type of the ExtensionAbility information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<Array<ExtensionAbilityInfo>> } Promise used to return the array of ExtensionAbility information
   *     obtained.
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
   * Obtains the ExtensionAbility information based on the given want, ExtensionAbility type, ExtensionAbility flags,
   * and user ID. This API returns the result synchronously.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Want containing the bundle name to query.
   * @param { ExtensionAbilityType } extensionAbilityType - Type of the ExtensionAbility.
   * @param { int } extensionAbilityFlags - Type of the ExtensionAbility information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Array<ExtensionAbilityInfo> } An array of ExtensionAbility information.
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
   * Obtains the ExtensionAbility information based on the given Want, ExtensionAbility type, ExtensionAbility flags,
   * and user ID. This API returns the result synchronously.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Want containing the bundle name to query.
   * @param { string } extensionAbilityType - Type of the custom ExtensionAbility.
   * @param { int } extensionAbilityFlags - Information flags to be contained in the returned ExtensionAbilityInfo
   *     object.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Array<ExtensionAbilityInfo> } An array of ExtensionAbility information obtained.
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
   * Obtains the ExtensionAbility information based on the given ExtensionAbility type, ExtensionAbility flags, and user
   * ID.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } extensionAbilityType - Type of the custom ExtensionAbility.
   * @param { int } extensionAbilityFlags - Information flags to be contained in the returned ExtensionAbilityInfo
   *     object.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Array<ExtensionAbilityInfo> } An array of ExtensionAbility information obtained.
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
   * Obtains the bundle name based on the given UID. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { int } uid - UID of the application.
   * @param { AsyncCallback<string> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
   *     If the information is successfully obtained, **err** is **null** and **data** is the bundle name. Otherwise,
   *     **err** is an error object.
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
   * Obtains the bundle name based on the given UID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { int } uid - UID of the application.
   * @returns { Promise<string> } Promise used to return the bundle name obtained.
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
   * Obtains the bundle name based on the given UID. This API returns the result synchronously.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { int } uid - UID of the application.
   * @returns { string } Bundle name obtained.
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
   * Obtains the bundle information based on the given HAP file path and bundle flags. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hapFilePath - Path where the HAP file is stored. The path must be the relative path of the
   *     current bundle's data directory.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { AsyncCallback<BundleInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the operation is successful, **err** is **null** and **data** is the bundle information obtained.
   *     Otherwise, **err** is an error object.
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
   * Obtains the bundle information based on the given HAP file path and bundle flags. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hapFilePath - Path where the HAP file is stored. The path must be the relative path of the
   *     current bundle's data directory.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @returns { Promise<BundleInfo> } Promise used to return the bundle information obtained.
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
   * Obtains the bundle information based on the given HAP file path and bundle flags. This API returns the result
   * synchronously.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hapFilePath - Path where the HAP file is stored. The path must be the relative path of the
   *     current bundle's data directory.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @returns { BundleInfo } Bundle information obtained.
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
   * Clears the bundle cache based on the given bundle name. This API uses an asynchronous callback to return the
   * result.
   *
   * No permission is required when the caller clears its own cache.
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**. Otherwise, **err** is an error object.
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
   * Clears the bundle cache based on the given bundle name. This API uses a promise to return the result.
   *
   * No permission is required when the caller clears its own cache.
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<void> } Promise that returns no value. If clearing the cache files fails, an error object is
   *     thrown.
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
   * Clears the bundle cache based on the given bundle name and application index. This API uses a promise to return the
   * result.
   *
   * No permission is required when the caller clears its own cache.
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - Bundle name.
   * @param { int } appIndex - Index of the application clone.<br>The value **0** means to clear the cache of the main
   *     application. A value greater than 0 means to clear the cache data of the application clone.
   * @returns { Promise<void> } Promise that returns no value. If clearing the cache files fails, an error object is
   *     thrown.
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
   * Clears the application cache. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function cleanBundleCacheFilesForSelf(): Promise<void>;

  /**
   * Obtains the global cache size. This API uses a promise to return the result.
   *
   * It is not possible to obtain the cache of applications that are currently running or have been granted the "
   * AllowAppDataNotCleared" privilege as specified in the
   * [application configuration guide](docroot://../device-dev/subsystems/subsys-app-privilege-config-guide.md).
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<long> } Promise used to return the size of the global cache, in bytes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function getAllBundleCacheSize(): Promise<long>;

  /**
   * Clears the global cache. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  function cleanAllBundleCache(): Promise<void>;

  /**
   * Enables or disables an application or an application clone. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Bundle name.
   * @param { int } appIndex - Index of the application clone.<br> The value **0** means to enable or disable the main
   *     application. A value greater than 0 means to enable or disable the application clone.
   * @param { boolean } isEnabled - Whether to enable the application. **true** to enable, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Set whether an application is enabled or disabled, with control over whether the process is killed when disabled.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Indicates the bundle name.
   * @param { int } appIndex - Indicates the index of clone app.
   * @param { boolean } isEnabled - The value true means to enable the application, and the value false means to
   *     disable the application.
   * @param { boolean } killProcess - The value true indicates that the application process will be killed when
   *     disabled, while the value false indicates that the application process will not be killed when disabled.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enables or disables an application. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Bundle name.
   * @param { boolean } isEnabled - Whether to enable the application. **true** to enable, **false** otherwise.
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**. Otherwise, **err** is an error object.
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
   * Enables or disables an application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Bundle name.
   * @param { boolean } isEnabled - Whether to enable the application. **true** to enable, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enables or disables an application. This API returns the result synchronously.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Bundle name.
   * @param { boolean } isEnabled - Whether to enable the application. **true** to enable, **false** otherwise.
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
   * Set whether an application is enabled or disabled, with control over whether the process is killed when disabled.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Indicates the bundle name.
   * @param { int } appIndex - Indicates the index of clone app.
   * @param { boolean } isEnabled - The value true means to enable the application, and the value false means to
   *     disable the application.
   * @param { boolean } killProcess - The value true indicates that the application process will be killed when
   *     disabled, while the value false indicates that the application process will not be killed when disabled.
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
   * Enables or disables an ability of an application or an application clone. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - Information about the target ability.
   * @param { int } appIndex - Index of the application clone.<br> The value **0** means to enable or disable the
   *     ability of the main application. A value greater than 0 means to enable or disable the ability of the
   *     application clone.
   * @param { boolean } isEnabled - Whether to enable the application. **true** to enable, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enables or disables an ability. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - Information about the target ability.
   * @param { boolean } isEnabled - Whether to enable the application. **true** to enable, **false** otherwise.
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**. Otherwise, **err** is an error object.
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
   * Enables or disables an ability. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - Information about the target ability.
   * @param { boolean } isEnabled - Whether to enable the application. **true** to enable, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enables or disables an ability. This API returns the result synchronously.
   *
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } info - Information about the target ability.
   * @param { boolean } isEnabled - Whether to enable the application. **true** to enable, **false** otherwise.
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
   * Checks whether an application or an application clone is enabled. This API uses a promise to return the result.
   *
   * @param { string } bundleName - Bundle name.
   * @param { int } appIndex - Index of the application clone.<br> The value **0** means to obtain the enabled status of
   *     the main application. A value greater than 0 means to obtain the enabled status of the application clone.
   * @returns { Promise<boolean> } Promise used to return the result. **true** if enabled, **false** otherwise.
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
   * Checks whether an application is enabled. This API uses an asynchronous callback to return the result.
   *
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<boolean> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
   *     **true** if enabled, **false** otherwise.
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
   * Checks whether an application is enabled. This API uses a promise to return the result.
   *
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<boolean> } Promise used to return the result. **true** if enabled, **false** otherwise.
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
   * Checks whether an application is enabled. This API returns the result synchronously.
   *
   * @param { string } bundleName - Bundle name.
   * @returns { boolean } Check result for whether the application is enabled. **true** if enabled, **false** otherwise.
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
   * Checks whether an ability of an application or an application clone is enabled. This API uses a promise to return
   * the result.
   *
   * @param { AbilityInfo } info - Information about the target ability.
   * @param { int } appIndex - Index of the application clone.<br> The value **0** means to obtain the enabled status of
   *     the ability of the main application. A value greater than 0 means to obtain the enabled status of the ability
   *     of the application clone.
   * @returns { Promise<boolean> } Promise used to return the result. **true** if enabled, **false** otherwise.
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
   * Checks whether an ability is enabled. This API uses an asynchronous callback to return the result.
   *
   * @param { AbilityInfo } info - Information about the target ability.
   * @param { AsyncCallback<boolean> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
   *     **true** if enabled, **false** otherwise.
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
   * Checks whether an ability is enabled. This API uses a promise to return the result.
   *
   * @param { AbilityInfo } info - Information about the target ability.
   * @returns { Promise<boolean> } Promise used to return the result. **true** if enabled, **false** otherwise.
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
   * Checks whether an ability is enabled. This API returns the result synchronously.
   *
   * @param { AbilityInfo } info - Information about the target ability.
   * @returns { boolean } Check result for whether the ability is enabled. **true** if enabled, **false** otherwise.
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
   * Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<Want> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null** and **data** is the Want. Otherwise, **err** is an error
   *     object.
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
   * Obtains the Want used to launch the bundle based on the given bundle name. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<Want> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null** and **data** is the Want. Otherwise, **err** is an error
   *     object.
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
   * Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<Want> } Promise used to return the Want object obtained.
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
   * Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API returns the result
   * synchronously.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED [since 10 - 23]
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or
   *     (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS) [since 24]
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Want } Want object.
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
   * Obtains the **Want** parameters of the
   * [entry UIAbility](docroot://quick-start/application-package-glossary.md#uiability) of the current application.
   *
   * @returns { Want } Want object that contains only the bundle name and ability name.
   * @throws { BusinessError } 17700072 - The launch want is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  function getLaunchWant(): Want;

  /**
   * Obtains the JSON string array of the current application's configuration file based on the given module name,
   * ability name, and metadata name (name configured under **metadata** in
   * [abilities](docroot://quick-start/module-configuration-file.md#abilities) of the **module.json5** file). This API
   * uses an asynchronous callback to return the result.
   *
   * > NOTE
   * >
   * > If the profile uses the resource reference format, the return value retains this format (for example,
   * > **$string:res_id**). You can obtain the referenced resources through related APIs of the
   * > [resource manager module]{@link @ohos.resourceManager:resourceManager}.
   *
   * @param { string } moduleName - Module name.
   * @param { string } abilityName - Name of the UIAbility component.
   * @param { string } metadataName - [Metadata name](docroot://quick-start/module-configuration-file.md#metadata) of
   *     the UIAbility component, that is, **name** of the **metadata** tag under
   *     [abilities](docroot://quick-start/module-configuration-file.md#abilities) in the **module.json5** file.
   * @param { AsyncCallback<Array<string>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the information is successfully obtained, **err** is **null** and **data** is **Array<string>**.
   *     Otherwise, **err** is an error object.
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
   * Obtains the JSON string array of the current application's configuration file based on the given module name,
   * ability name, and metadata name (name configured under **metadata** in
   * [abilities](docroot://quick-start/module-configuration-file.md#abilities) of the **module.json5** file). This API
   * uses a promise to return the result.
   *
   * > NOTE
   * >
   * > If the profile uses the resource reference format, the return value retains this format (for example,
   * > **$string:res_id**). You can obtain the referenced resources through related APIs of the
   * > [resource manager module]{@link @ohos.resourceManager:resourceManager}.
   *
   * @param { string } moduleName - Module name.
   * @param { string } abilityName - Name of the UIAbility component.
   * @param { string } metadataName - Metadata name of the UIAbility component, that is, **name** of the **metadata**
   *     tag under [abilities](docroot://quick-start/module-configuration-file.md#abilities) in the **module.json5**
   *     file. The default value is null.
   * @returns { Promise<Array<string>> } Promise used to return the array of JSON strings obtained.
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
   * Obtains the JSON string array of the current application's configuration file based on the given module name,
   * ability name, and metadata name (name configured in
   * [metadata](docroot://quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API
   * returns the result synchronously. The result value is a string array.
   *
   * @param { string } moduleName - Module name.
   * @param { string } abilityName - Name of the UIAbility component.
   * @param { string } metadataName - Metadata name of the UIAbility component, that is, **name** of the **metadata**
   *     tag under [abilities](docroot://quick-start/module-configuration-file.md#abilities) in the **module.json5**
   *     file. The default value is null.
   * @returns { Array<string> } An array of JSON strings.
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
   * Obtains the JSON string array of the current application's configuration file based on the given module name,
   * ExtensionAbility name, and metadata name (name configured in
   * [metadata](docroot://quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API
   * uses an asynchronous callback to return the result.
   *
   * @param { string } moduleName - Module name.
   * @param { string } extensionAbilityName - Name of the ExtensionAbility component.
   * @param { string } metadataName - Metadata name of the ExtensionAbility component, that is, **name** of the
   *     **metadata** tag under
   *     [extensionAbilities](docroot://quick-start/module-configuration-file.md#extensionabilities) in the
   *     **module.json5** file.
   * @param { AsyncCallback<Array<string>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the information is successfully obtained, **err** is **null** and **data** is **Array<string>**.
   *     Otherwise, **err** is an error object.
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
   * Obtains the JSON string array of the current application's configuration file based on the given module name,
   * ExtensionAbility name, and metadata name (name configured in
   * [metadata](docroot://quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API
   * uses a promise to return the result.
   *
   * @param { string } moduleName - Module name.
   * @param { string } extensionAbilityName - Name of the ExtensionAbility component.
   * @param { string } metadataName - Metadata name of the ExtensionAbility component, that is, **name** of the
   *     **metadata** tag under
   *     [extensionAbilities](docroot://quick-start/module-configuration-file.md#extensionabilities) in the
   *     **module.json5** file. The default value is null.
   * @returns { Promise<Array<string>> } Promise used to return the array of JSON strings obtained.
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
   * Obtains the JSON string array of the current application's configuration file based on the given module name,
   * ExtensionAbility name, and metadata name (name configured in
   * [metadata](docroot://quick-start/module-configuration-file.md#metadata) of the **module.json5** file). This API
   * returns the result synchronously. The result value is a string array.
   *
   * @param { string } moduleName - Module name.
   * @param { string } extensionAbilityName - Name of the ExtensionAbility component.
   * @param { string } metadataName - Metadata name of the ExtensionAbility component, that is, **name** of the
   *     **metadata** tag under
   *     [extensionAbilities](docroot://quick-start/module-configuration-file.md#extensionabilities) in the
   *     **module.json5** file. The default value is null.
   * @returns { Array<string> } An array of JSON strings.
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
   * Obtains the PermissionDef struct based on the given permission name. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - Name of the permission.
   * @param { AsyncCallback<PermissionDef> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the operation is successful, **err** is **null** and **data** is the PermissionDef object obtained.
   *     Otherwise, **err** is an error object.
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
   * Obtains the PermissionDef struct based on the given permission name. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - Name of the permission.
   * @returns { Promise<PermissionDef> } Promise used to return the PermissionDef object obtained.
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
   * Obtains the **PermissionDef** struct based on the given permission name. This API returns the result synchronously.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - Name of the permission.
   * @returns { PermissionDef } PermissionDef object.
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
   * Obtains the ability label based on the given bundle name, module name, and ability name. This API uses an
   * asynchronous callback to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @param { string } abilityName - Name of the UIAbility component.
   * @param { AsyncCallback<string> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
   *     If the operation is successful, **err** is **null** and **data** is the label. Otherwise, **err** is an error
   *     object.
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
   * Obtains the ability label based on the given bundle name, module name, and ability name. This API uses a promise to
   * return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @param { string } abilityName - Name of the UIAbility component.
   * @returns { Promise<string> } Promise used to return the label.
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
   * Obtains the ability label based on the given bundle name, module name, and ability name. This API returns the
   * result synchronously.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @param { string } abilityName - Name of the UIAbility component.
   * @returns { string } Label of the ability.
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
   * Obtains the icon of a specified ability.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the bundle name of the application to which the ability belongs.
   * @param { string } moduleName - Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the result. If
   *     getAbilityIcon is successful, **err** is **undefined**, and PixelMap is
   *     getAbilityIcon obtained. Otherwise, **err** is an error object.
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
   * Obtains the icon of a specified ability.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the bundle name of the application to which the ability belongs.
   * @param { string } moduleName - Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
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
   * Obtains the application information based on the given bundle name, application flags, and user ID. This API
   * returns the result synchronously.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } applicationFlags - Type of the application information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { ApplicationInfo } Application information obtained.
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
   * Obtains the application information based on the given bundle name and application flags. This API returns the
   * result synchronously.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } applicationFlags - Type of the application information to obtain.
   * @returns { ApplicationInfo } Application information obtained.
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
   * Obtains the bundle information based on the given bundle name, bundle flags, and user ID. This API returns the
   * result synchronously.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { BundleInfo } Bundle information obtained.
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
   * Obtains the bundle information for the caller's user based on the given bundle name and bundle flags. This API
   * returns the result synchronously.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @returns { BundleInfo } Bundle information obtained.
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
   * Obtains all the shared bundle information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<Array<SharedBundleInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null** and **data** is all the shared bundle
   *     information obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllSharedBundleInfo(callback: AsyncCallback<Array<SharedBundleInfo>>): void;

  /**
   * Obtains all the shared bundle information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<SharedBundleInfo>> } Promise used to return an array of the shared bundle information
   *     obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getAllSharedBundleInfo(): Promise<Array<SharedBundleInfo>>;

  /**
   * Obtains the shared bundle information based on the given bundle name. This API uses an asynchronous callback to
   * return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @param { AsyncCallback<Array<SharedBundleInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null** and **data** is the shared bundle
   *     information obtained.
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
   * Obtains the shared bundle information based on the given bundle name. This API uses a promise to return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @returns { Promise<Array<SharedBundleInfo>> } Promise used to return the shared bundle information obtained.
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
   * Obtains the [provision]{@link bundleManager/AppProvisionInfo} configuration file information of all applications
   * based on the given user ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or
   *     (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { int } [userId] - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .<br>The default value is the user ID of the caller.<br>The value must be greater than or equal to 0.
   * @returns { Promise<Array<AppProvisionInfo>> } Promise used to return the provision profile obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function getAllAppProvisionInfo(userId?: int): Promise<Array<AppProvisionInfo>>;

  /**
   * Obtains the provision profile based on the given bundle name. This API uses an asynchronous callback to return the
   * result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<AppProvisionInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the operation is successful, **err** is **null** and **data** is the provision profile.
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
   * Obtains the provision profile based on the given bundle name and user ID. This API uses an asynchronous callback to
   * return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<AppProvisionInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the operation is successful, **err** is **null** and **data** is the provision profile.
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
   * Obtains the provision profile based on the given bundle name and user ID. This API uses a promise to return the
   * result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<AppProvisionInfo> } Promise used to return the provision profile obtained.
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
   * Obtains the provision profile based on the given bundle name and user ID. This API returns the result
   * synchronously.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { AppProvisionInfo } Provision profile.
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
   * Obtains the [distribution type](docroot://security/app-provision-structure.md) of a bundle in synchronous mode. The
   * return value is the **specifiedDistributionType** field value in
   * [InstallParam]{@link @ohos.bundle.installer:installer.InstallParam} passed when **install** is called.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @returns { string } [Distribution type](docroot://security/app-provision-structure.md) of the bundle.
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
   * Obtains the install information of all apps.
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
   * Obtains the install information of all apps.
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
   * Obtains additional information about a bundle in synchronous mode. The return value is the **additionalInfo** field
   * value in [InstallParam]{@link @ohos.bundle.installer:installer.InstallParam} passed when **install** is called.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @returns { string } Additional information about the bundle.
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
   * Obtains the JSON strings of the profile based on the given profile type, bundle name, and module name. This API
   * returns the result synchronously.
   *
   * No permission is required for obtaining the caller's own profile.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { ProfileType } profileType - Type of the profile.
   * @param { string } bundleName - Bundle name of the application.
   * @param { string } moduleName - Module name of the application. If this parameter is not passed in, the entry module
   *     is used.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0. [since 12]
   * @returns { string } JSON string of the profile.
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
   * Obtains the module names corresponding to the extended resources based on the given bundle name. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name based on which the extended resources are to be queried.
   * @returns { Promise<Array<string>> } Promise used to return the API call result and the module names corresponding
   *     to the extended resources.
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
   * Enables the dynamic icon based on the given bundle name and module name. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.ACCESS_DYNAMIC_ICON
   * @param { string } bundleName - Bundle name based on which the dynamic icon is to be enabled.
   * @param { string } moduleName - Module name based on which the dynamic icon is to be enabled.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enables the dynamic icon based on the given bundle name, module name, and bundle options. This API uses a promise
   * to return the result.
   *
   * To enable the dynamic icon for the current user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON
   * permission.
   *
   * To enable the dynamic icon for another user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON and
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions.
   *
   * @permission ohos.permission.ACCESS_DYNAMIC_ICON or (ohos.permission.ACCESS_DYNAMIC_ICON and
   *     ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - Bundle name based on which the dynamic icon is to be enabled.
   * @param { string } moduleName - Module name based on which the dynamic icon is to be enabled.
   * @param { BundleOptions } [option] - User and application clone index based on which the dynamic icon is to be
   *     enabled. By default, the dynamic icon is enabled for all users and all application clones.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Disables the dynamic icon based on the given bundle name. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_DYNAMIC_ICON
   * @param { string } bundleName - Bundle name based on which the dynamic icon is to be disabled.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Disables the dynamic icon based on the given bundle name and bundle options. This API uses a promise to return the
   * result.
   *
   * To disable the dynamic icon for the current user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON
   * permission.
   *
   * To disable the dynamic icon for another user, you must request the ohos.permission.ACCESS_DYNAMIC_ICON and
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions.
   *
   * @permission ohos.permission.ACCESS_DYNAMIC_ICON or (ohos.permission.ACCESS_DYNAMIC_ICON and
   *     ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - Bundle name based on which the dynamic icon is to be disabled.
   * @param { BundleOptions } [option] - User and application clone index based on which the dynamic icon is to be
   *     disabled. By default, the dynamic icon is disabled for all users and all application clones.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the module name corresponding to the dynamic icon based on the specified bundle name. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Bundle name based on which the extended resources are to be queried.
   * @returns { Promise<string> } Promise used to return the API call result and module name corresponding to the
   *     dynamic icon.
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
   * Obtains the dynamic icon information of all users and all application clones based on the given bundle name. This
   * API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { string } bundleName - Bundle name of the application for which the dynamic icon information is to be
   *     queried.
   * @returns { Promise<Array<DynamicIconInfo>> } Promise used to return the dynamic icon information.
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
   * Obtains the dynamic icon information of all applications and all application clones of a specified user. This API
   * uses a promise to return the result.
   *
   * To obtain the dynamic icon information of all applications and all application clones of the current user, you must
   * request the ohos.permission.GET_BUNDLE_INFO_PRIVILEGED permission.
   *
   * To obtain the dynamic icon information of all applications and all application clones of other users or all users,
   * you must request the ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * permissions.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { int } [userId] - User ID. By default, the dynamic icon information of all applications and all application
   *     clones of all users is queried.
   * @returns { Promise<Array<DynamicIconInfo>> } Promise used to return the dynamic icon information.
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
   * Get all alternate icon info configured by the application itself.
   *
   * @returns { Promise<Array<AlternateIconInfo>> } Returns a list of AlternateIconInfo objects.
   * @throws { BusinessError } 17700311 - Failed to obtain the alternate icon.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getAlternateIcons(): Promise<Array<AlternateIconInfo>>;

  /**
   * Set the alternate icon for the current application.
   * If you need to restore the app's default icon, please input an empty value for the icon name parameter.
   *
   * @param { string } alternateIconName - Indicates the alternate icon name.
   *     This value matches the name field under alternateIcons in the app.json5 file.
   *     If an empty string is passed, the app's default icon will be restored.
   * @returns { Promise<void> } Returns the result of setAlternateIcon.
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
   * Verifies an .abc file. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.RUN_DYN_CODE
   * @param { Array<string> } abcPaths - Path of the .abc file.
   * @param { boolean } deleteOriginalFiles - Whether to delete the .abc file. **true** to delete, **false** otherwise.
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**. Otherwise, **err** is an error object.
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
   * Verifies an .abc file. This API uses a promise to return the result.
   *
   * @permission ohos.permission.RUN_DYN_CODE
   * @param { Array<string> } abcPaths - Path of the .abc file.
   * @param { boolean } deleteOriginalFiles - Whether to delete the .abc file. **true** to delete, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains information about all preinstalled applications that can be restored. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<Array<RecoverableApplicationInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback}
   *     used to return the result. If the operation is successful, **err** is **null** and **data** is the information
   *     about all preinstalled applications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getRecoverableApplicationInfo(callback: AsyncCallback<Array<RecoverableApplicationInfo>>): void;

  /**
   * Obtains information about all preinstalled applications that can be restored. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<RecoverableApplicationInfo>> } Promise used to return the information about all
   *     recoverable applications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getRecoverableApplicationInfo(): Promise<Array<RecoverableApplicationInfo>>;

  /**
   * Sets additional information for an application. This API can be called only by AppGallery.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { string } additionalInfo - Additional information to set.
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
   * Deletes an .abc file based on the specified file path. This API uses a promise to return the result.
   *
   * @permission ohos.permission.RUN_DYN_CODE
   * @param { string } abcPath - Path of the .abc file.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Checks whether the target application can be accessed based on the provided link. The scheme specified in the link
   * must be configured in the **querySchemes** field of the
   * [module.json5](docroot://quick-start/module-configuration-file.md) file.
   *
   * @param { string } link - Link to check.
   * @returns { boolean } Check result for whether the link can be opened. **true** if it can be opened, **false**
   *     otherwise.
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
   * Obtains information about all preinstalled applications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<PreinstalledApplicationInfo>> } Promise used to return the array of preinstalled
   *     applications obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllPreinstalledApplicationInfo(): Promise<Array<PreinstalledApplicationInfo>>;

  /**
   * Obtains the information about all bundles of the current user based on the given developer ID.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } developerId - Developer ID.
   * @returns { Array<BundleInfo> } An array of bundle information.
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
   * Obtains all the developer IDs of the current user based on the given application
   * [distribution type]{@link bundleManager.AppDistributionType}.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { int } appDistributionType - Application distribution type. If this parameter is not specified, a list of
   *     developer IDs of all applications is returned.
   * @returns { Array<string> } An array of strings.
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
   * Switches the uninstall state of an application. This API is independent of EDM application interception control.
   *
   * @permission ohos.permission.CHANGE_BUNDLE_UNINSTALL_STATE
   * @param { string } bundleName - Bundle name of the application.
   * @param { boolean } state - Whether the application can be uninstalled. **true** if the application can be
   *     uninstalled, **false** otherwise.
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
   * Obtains the [signature information]{@link bundleManager/BundleInfo:SignatureInfo} of an application based on the
   * given UID.
   *
   * @permission ohos.permission.GET_SIGNATURE_INFO
   * @param { int } uid - UID of the application.
   * @returns { SignatureInfo } SignatureInfo object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 17700021 - The uid is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 18 dynamic
   * @since 23 static
   */
  function getSignatureInfo(uid: int): SignatureInfo;

  /**
   * Obtains the bundle information of an application or an application clone based on the given bundle name, app index,
   * [bundleFlags]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}, and user ID. This API uses a promise to
   * return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } appIndex - Index of the application clone.<br>The value **0** means to obtain the bundle information
   *     of the main application. A value greater than 0 means to obtain the bundle information of the application
   *     clone.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { int } [userId] - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<BundleInfo> } Promise used to return the bundle information.
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
   * Obtains all the bundle information of applications and application clones based on the given bundle name,
   * [bundleFlags]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}, and user ID. This API uses a promise to
   * return the result.
   *
   * No permission is required for obtaining the caller's own information.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { int } bundleFlags - Type of the bundle information to obtain.
   * @param { int } [userId] - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<Array<BundleInfo>> } Promise used to return an array of bundle information.
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
   * Obtains the bundle name and clone index of a cloned application based on the given UID. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { int } uid - UID of the application.
   * @returns { Promise<AppCloneIdentity> } Promise used to return the application clone index.
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
   * Obtains the application clone preference configuration based on the given bundle name.
   *
   * @permission ohos.permission.MANAGE_CLONE_BUNDLE_PREFERENCES
   * @param { string } bundleName - Bundle name of the target application.
   * @returns { Promise<AppClonePreference> } Promise used to return the application clone preference configuration.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700095 - The specified bundle not found app clone preference.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getAppClonePreference(bundleName: string): Promise<AppClonePreference>;

  /**
   * Sets the application clone preference configuration.
   *
   * @permission ohos.permission.MANAGE_CLONE_BUNDLE_PREFERENCES
   * @param { string } bundleName - Bundle name of the target application.
   * @param { AppClonePreference } appClonePreference - Application clone preference configuration to set.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @throws { BusinessError } 17700094 - The specified bundle did not create a clone.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function setAppClonePreference(bundleName: string, appClonePreference: AppClonePreference): Promise<void>;

  /**
   * Obtains all the plugin information in the system based on the given host bundle name and user ID. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hostBundleName - Bundle name of the target application.
   * @param { int } [userId] - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller. The value must be greater than or equal to 0.
   * @returns { Promise<Array<PluginBundleInfo>> } Promise used to return the array of plugin information obtained.
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
   * Obtains the installation path of a specified plugin in the current
   * [application sandbox](docroot://file-management/app-sandbox-directory.md).
   *
   * @param { string } pluginBundleName - Bundle name of the target plugin.
   * @returns { string } Installation path of the target plugin in the current application sandbox.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 22 dynamic
   * @since 23 static
   */
  function getPluginBundlePathForSelf(pluginBundleName: string): string;

  /**
   * Migrates files from the source path to the destination path. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MIGRATE_DATA
   * @param { Array<string> } sourcePaths - Array of source paths. The value can be a single file path such as
   *     **\/example1/test.txt** or a directory path such as **\/example2/test**.
   * @param { string } destinationPath - Destination path. Only one directory path is supported, for example,
   *     **\/example2/test**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the sandbox directory of an application based on the given bundle name and clone index.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application. This API can be called only when the application or
   *     its clone is available for the current user. Otherwise, error code 17700001 is returned.
   * @param { int } appIndex - Index of the application. The value ranges from 0 to 5. The value **0** indicates the
   *     main application, and the values 1 to 5 indicate the indexes of application clones.
   * @returns { string } Sandbox directory of the application.
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
   * Obtains the identity information of an application, including the bundle name and clone index, based on the given
   * sandbox directory name.
   *
   * @param { string } sandboxDataDir - Name of the
   *     [sandbox directory of the application](docroot://file-management/app-sandbox-directory.md).<br>**NOTE**<br> The
   *     validity of this parameter is not verified. If the input **sandboxDataDir** does not match the directory name
   *     format for application clones or atomic services, **sandboxDataDir** is returned as
   *     **AppCloneIdentity.bundleName**, and **AppCloneIdentity.appIndex** is **0**.<br> 1. Directory name format for
   *     application clones: `+clone-{appIndex}+{bundleName}`, where **appIndex** and **bundleName** are variables
   *     corresponding to the clone index and bundle name, respectively. Example: `+clone-1+com.example.myapplication`.<
   *     br> 2. Directory name format for atomic services: `+auid-{uid}+{bundleName}`, where **uid** and **bundleName**
   *     are variables corresponding to the UID and bundle name, respectively. Example: `+auid-20000000+
   *     com.example.myapplication`.
   * @returns { AppCloneIdentity } Bundle name and clone index of the application.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getAppCloneIdentityBySandboxDataDir(sandboxDataDir: string): AppCloneIdentity;

  /**
   * Restores the backup data for a specified application under a given user. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.RECOVER_BUNDLE
   * @param { string } bundleName - Bundle name of the application.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The value is greater than or equal to 0.
   * @param { int } appIndex - Index of the application. The value ranges from 0 to 5. The value **0** indicates the main
   *     application, and the values 1 to 5 indicate the indexes of application clones.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Removes the backup data for a specified application under a given user. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - Bundle name of the application.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The value is greater than or equal to 0.
   * @param { int } appIndex - Index of the application. The value ranges from 0 to 5. The value **0** indicates the
   *     main application, and the values 1 to 5 indicate the indexes of application clones.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the installation status of a specified application under a given user.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @returns { BundleInstallStatus } Application installation status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function getBundleInstallStatus(bundleName: string): BundleInstallStatus;

  /**
   * Check whether a specified application is forbidden to be disabled.
   * If you need to check whether an application is forbidden to be disabled under the current user,
   * ohos.permission.GET_BUNDLE_INFO_PRIVILEGED needs to be applied for.
   * If you need to check whether an application is forbidden to be disabled under other users,
   * ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * need to be applied for.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or
   *     (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } bundleName - Indicates the bundle name.
   * @param { int } userId - Indicates the user ID.
   * @param { int } appIndex - Indicates the index of clone app.
   * @returns { boolean } Returns true if the application is forbidden to be disabled; returns false otherwise.
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
   * Obtains the label of a specified application.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { int } appIndex - Indicates the index of clone app.
   * @returns { Promise<string> } Returns label of specified application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getApplicationLabel(bundleName: string, appIndex: int): Promise<string>;

  /**
   * Obtains PreinstalledApplicationInfo of all newly added preinstalled applications during device OTA upgrade.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<PreinstalledApplicationInfo>> } Returns a list of PreinstalledApplicationInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAllNewPreinstalledApplicationInfo(): Promise<Array<PreinstalledApplicationInfo>>;

  /**
   * Obtains BundleInfo of all bundles available in the system.
   *
   * @permission ohos.permission.ENTERPRISE_GET_INSTALLED_BUNDLE_LIST
   * @param { int } bundleFlags - {@link BundleFlag} - Indicates the flag used to specify information
   *     contained in the BundleInfo that will be returned.
   * @returns { Promise<Array<BundleInfo>> } Returns a list of BundleInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getInstalledBundleList(bundleFlags: int): Promise<Array<BundleInfo>>;

  /**
   * Defines the application information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type ApplicationInfo = _ApplicationInfo;

  /**
   * Defines the metadata of a module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export type ModuleMetadata = _ModuleMetadata;

  /**
   * Defines the metadata.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type Metadata = _Metadata;

  /**
   * Defines the bundle information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type BundleInfo = _BundleInfo.BundleInfo;

  /**
   * Defines the bundle information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  export type BundleInfo = _BundleInfo;

  /**
   * Defines the use scenario and timing for using the permission.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type UsedScene = _BundleInfo.UsedScene;

  /**
   * Defines the use scenario and timing for using the permission.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  export type UsedScene = _UsedScene;

  /**
   * Defines the detailed information of the permissions to request from the system.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type ReqPermissionDetail = _BundleInfo.ReqPermissionDetail;

  /**
   * Defines the detailed information of the permissions to request from the system.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  export type ReqPermissionDetail = _ReqPermissionDetail;

  /**
   * Defines the signature information of the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type SignatureInfo = _BundleInfo.SignatureInfo;

  /**
   * Defines the signature information of the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @since 23 static
   */
  export type SignatureInfo = _SignatureInfo;

  /**
   * Describes the identity information of an application clone.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 15 dynamic
   */
  export type AppCloneIdentity = _BundleInfo.AppCloneIdentity;

  /**
   * Describes the identity information of an application clone.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 23 static
   */
  export type AppCloneIdentity = _AppCloneIdentity;

  /**
   * Defines the module information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type HapModuleInfo = _HapModuleInfo.HapModuleInfo;

  /**
   * Defines the module information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type HapModuleInfo = _HapModuleInfo;

  /**
   * Defines the preloaded module information in the atomic service.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type PreloadItem = _HapModuleInfo.PreloadItem;

  /**
   * Defines the preloaded module information in the atomic service.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type PreloadItem = _PreloadItem;

  /**
   * Defines the information about the dynamic shared libraries on which the module depends.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type Dependency = _HapModuleInfo.Dependency;

  /**
   * Defines the information about the dynamic shared libraries on which the module depends.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type Dependency = _Dependency;

  /**
   * Defines the router table configuration of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   */
  export type RouterItem = _HapModuleInfo.RouterItem;

  /**
   * Defines the router table configuration of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 23 static
   */
  export type RouterItem = _RouterItem;

  /**
   * Defines the user-defined data in the routing table configuration of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   */
  export type DataItem = _HapModuleInfo.DataItem;

  /**
   * Defines the user-defined data in the routing table configuration of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type DataItem = _DataItem;

  /**
   * Defines the ability information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type AbilityInfo = _AbilityInfo.AbilityInfo;

  /**
   * Defines the ability information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type AbilityInfo = _AbilityInfo;

  /**
   * Defines the window size.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type WindowSize = _AbilityInfo.WindowSize;

  /**
   * Defines the window size.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  export type WindowSize = _WindowSize;

  /**
   * Defines the ExtensionAbility information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export type ExtensionAbilityInfo = _ExtensionAbilityInfo.ExtensionAbilityInfo;

  /**
   * Defines the ExtensionAbility information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type ExtensionAbilityInfo = _ExtensionAbilityInfo;

  /**
   * Defines the detailed information about the permissions defined in the
   * [module.json5](docroot://quick-start/module-configuration-file.md) file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type PermissionDef = _PermissionDef;

  /**
   * Defines the element name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type ElementName = _ElementName;

  /**
   * Defines the shared bundle information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export type SharedBundleInfo = _SharedBundleInfo;

  /**
   * Defines the information in the
   * [HarmonyAppProvision configuration file](docroot://security/app-provision-structure.md).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   */
  export type AppProvisionInfo = _AppProvisionInfo.AppProvisionInfo;

  /**
   * Defines the information in the
   * [HarmonyAppProvision configuration file](docroot://security/app-provision-structure.md).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  export type AppProvisionInfo = _AppProvisionInfo;

  /**
   * Defines the validity period in the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   */
  export type Validity = _AppProvisionInfo.Validity;

  /**
   * Defines the validity period in the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  export type Validity = _Validity;

  /**
   * Defines the information about a preinstalled application that can be restored after being uninstalled.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type RecoverableApplicationInfo = _RecoverableApplicationInfo;

  /**
   * Defines the skill information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   */
  export type Skill = _Skill.Skill;

  /**
   * Defines the skill information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type Skill = _Skill;

  /**
   * Defines the SkillUri information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   */
  export type SkillUrl = _Skill.SkillUri;

  /**
   * Defines the SkillUri information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  export type SkillUrl = _SkillUri;

  /**
   * Defines the AppClonePreference information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic
   */
  export type AppClonePreference = _BundleInfo.AppClonePreference;

  /**
   * Defines the AppClonePreference information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 static
   */
  export type AppClonePreference = _AppClonePreference;

  /**
   * Defines the preinstalled application information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export type PreinstalledApplicationInfo = _PreinstalledApplicationInfo;

  /**
   * Defines the plugin information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  export type PluginBundleInfo = _PluginBundleInfo;

  /**
   * Defines the module information of a plugin.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  export type PluginModuleInfo = _PluginModuleInfo;

  /**
   * Describes the information about the dynamic icon of an application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   */
  export type DynamicIconInfo = _BundleInfo.DynamicIconInfo;

  /**
   * Describes the information about the dynamic icon of an application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  export type DynamicIconInfo = _DynamicIconInfo;

  /**
   * Describes the bundle options used to set or query application information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 20 dynamic
   */
  export type BundleOptions = _BundleInfo.BundleOptions;

  /**
   * Describes the bundle options used to set or query application information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 static
   */
  export type BundleOptions = _BundleOptions;

  /**
   * Indicates the alternate icon configured by the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export type AlternateIconInfo = _BundleInfo.AlternateIconInfo;

  /**
   * Indicates the alternate icon configured by the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export type AlternateIconInfo = _AlternateIconInfo;
}

export default bundleManager;