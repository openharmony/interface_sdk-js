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

import { ModuleInfo } from './moduleInfo';
import { CustomizeData } from './customizeData';

/**
 * The module provides application information. Unless otherwise specified, the information is obtained through
 * [bundle.getApplicationInfo]{@link ./../@ohos.bundle:bundle.getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number)}
 * .
 *
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use
 * > [bundleManager-ApplicationInfo]{@link applicationInfo:ApplicationInfo} instead.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead applicationInfo:ApplicationInfo
 */
export interface ApplicationInfo {
  /**
   * Application name.
   *
   * @default Indicates the application name, which is the same as {@code bundleName}
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#name
   */
  readonly name: string;

  /**
   * Application description.
   *
   * @default Description of application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#description
   */
  readonly description: string;

  /**
   * ID of the application description.
   *
   * @default Indicates the description id of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#descriptionId
   */
  readonly descriptionId: number;

  /**
   * Whether the application is a system application. **true** if yes, **false** otherwise.
   *
   * @default Indicates whether the application is a system application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#systemApp
   */
  readonly systemApp: boolean;

  /**
   * Whether the application is enabled. **true** if enabled, **false** otherwise.
   *
   * @default Indicates whether or not this application may be instantiated
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#enabled
   */
  readonly enabled: boolean;

  /**
   * Application label.
   *
   * @default Indicates the label of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#label
   */
  readonly label: string;

  /**
   * ID of the application label.
   *
   * @default Indicates the label id of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#labelId
   */
  readonly labelId: string;

  /**
   * Application icon.
   *
   * @default Indicates the icon of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#icon
   */
  readonly icon: string;

  /**
   * ID of the application icon.
   *
   * @default Indicates the icon id of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#iconId
   */
  readonly iconId: string;

  /**
   * Process name.
   *
   * @default Process of application, if user do not set it ,the value equal bundleName
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#process
   */
  readonly process: string;

  /**
   * Modes supported by the application. Currently, only the **drive** mode is defined. This attribute applies only to
   * telematics devices.
   *
   * @default Indicates the running mode supported by the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly supportedModes: number;

  /**
   * Relative paths for storing application resources. Do not access resource files using concatenated paths. Use
   * [@ohos.resourceManager]{@link ./../@ohos.resourceManager:resourceManager} instead.
   *
   * @default Indicates the path storing the module resources of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly moduleSourceDirs: Array<string>;

  /**
   * Permissions required for accessing the application.
   *
   * The value is obtained by passing in GET_APPLICATION_INFO_WITH_PERMISSION to
   * [bundle.getApplicationInfo]{@link ./../@ohos.bundle:bundle.getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number)}
   * .
   *
   * @default Indicates the permissions required for accessing the application.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#permissions
   */
  readonly permissions: Array<string>;

  /**
   * Application module information.
   *
   * @default Indicates module information about an application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#hapModulesInfo
   */
  readonly moduleInfos: Array<ModuleInfo>;

  /**
   * Path for storing application files. Do not access resource files using concatenated paths. Use
   * [@ohos.resourceManager]{@link ./../@ohos.resourceManager:resourceManager} instead.
   *
   * @default Indicates the path where the {@code Entry.hap} file of the application is saved
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly entryDir: string;

  /**
   * Installation directory of the application. Do not access resource files using concatenated paths. Use
   * [@ohos.resourceManager]{@link ./../@ohos.resourceManager:resourceManager} instead.
   *
   * @default Indicates the application source code path
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#codePath
   */
  readonly codePath: string;

  /**
   * Custom metadata of the application.
   *
   * The value is obtained by passing in GET_APPLICATION_INFO_WITH_METADATA to
   * [bundle.getApplicationInfo]{@link ./../@ohos.bundle:bundle.getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number)}
   * .
   *
   * @default Indicates the metadata of module
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#metadataArray
   */
  readonly metaData: Map<string, Array<CustomizeData>>;

  /**
   * Whether the application is removable. **true** if removable, **false** otherwise.
   *
   * @default Indicates whether or not this application may be removable
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#removable
   */
  readonly removable: boolean;

  /**
   * Access token ID of the application.
   *
   * @default Indicates the access token of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#accessTokenId
   */
  readonly accessTokenId: number;

  /**
   * UID of the application.
   *
   * @default Indicates the uid of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#uid
   */
  readonly uid: number;

  /**
   * Type of the application, for example, gaming, social networking, movies, and news.
   *
   * @default Indicates entity type of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  readonly entityType: string;
}