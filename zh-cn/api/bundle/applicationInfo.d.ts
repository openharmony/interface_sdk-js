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
 * 应用程序信息，未做特殊说明的属性，均通过
 * [bundle.getApplicationInfo]{@link ./../@ohos.bundle:bundle.getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number)}
 * 获取。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[bundleManager-ApplicationInfo]{@link applicationInfo:ApplicationInfo}替代。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead applicationInfo:ApplicationInfo
 */
export interface ApplicationInfo {
  /**
   * 应用程序的名称。
   *
   * @default Indicates the application name, which is the same as {@code bundleName}
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#name
   */
  readonly name: string;

  /**
   * 应用程序的描述信息。
   *
   * @default Description of application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#description
   */
  readonly description: string;

  /**
   * 应用程序的描述信息的资源ID。
   *
   * @default Indicates the description id of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#descriptionId
   */
  readonly descriptionId: number;

  /**
   * 判断是否为系统应用程序，取值为true表示系统应用，取值为false表示非系统应用。
   *
   * @default Indicates whether the application is a system application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#systemApp
   */
  readonly systemApp: boolean;

  /**
   * 判断应用程序是否可以使用，取值为true表示可以使用，取值为false表示不可使用。
   *
   * @default Indicates whether or not this application may be instantiated
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#enabled
   */
  readonly enabled: boolean;

  /**
   * 应用程序显示的标签。
   *
   * @default Indicates the label of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#label
   */
  readonly label: string;

  /**
   * 应用程序的标签的资源ID值。
   *
   * @default Indicates the label id of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#labelId
   */
  readonly labelId: string;

  /**
   * 应用程序的图标。
   *
   * @default Indicates the icon of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#icon
   */
  readonly icon: string;

  /**
   * 应用程序图标的资源ID值。
   *
   * @default Indicates the icon id of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#iconId
   */
  readonly iconId: string;

  /**
   * 应用程序的进程名称。
   *
   * @default Process of application, if user do not set it ,the value equal bundleName
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#process
   */
  readonly process: string;

  /**
   * 标识应用支持的运行模式，当前只定义了驾驶模式（drive）。该标签只适用于车机。
   *
   * @default Indicates the running mode supported by the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly supportedModes: number;

  /**
   * 应用程序的资源存放的相对路径。不能拼接路径访问资源文件，请使用[资源管理接口]{@link ./../@ohos.resourceManager:resourceManager}访问资源。
   *
   * @default Indicates the path storing the module resources of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly moduleSourceDirs: Array<string>;

  /**
   * 访问应用程序所需的权限。
   * 
   * 通过调用
   * [bundle.getApplicationInfo]{@link ./../@ohos.bundle:bundle.getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number)}
   * 接口时，传入GET_APPLICATION_INFO_WITH_PERMISSION获取。
   *
   * @default Indicates the permissions required for accessing the application.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#permissions
   */
  readonly permissions: Array<string>;

  /**
   * 应用程序的模块信息。
   *
   * @default Indicates module information about an application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.BundleInfo#hapModulesInfo
   */
  readonly moduleInfos: Array<ModuleInfo>;

  /**
   * 应用程序的文件保存路径。不能拼接路径访问资源文件，请使用[资源管理接口]{@link ./../@ohos.resourceManager:resourceManager}访问资源。
   *
   * @default Indicates the path where the {@code Entry.hap} file of the application is saved
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly entryDir: string;

  /**
   * 应用程序的安装目录。不能拼接路径访问资源文件，请使用[资源管理接口]{@link ./../@ohos.resourceManager:resourceManager}访问资源。
   *
   * @default Indicates the application source code path
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#codePath
   */
  readonly codePath: string;

  /**
   * 应用程序的自定义元信息。
   * 
   * 通过调用
   * [bundle.getApplicationInfo]{@link ./../@ohos.bundle:bundle.getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number)}
   * 接口时，传入GET_APPLICATION_INFO_WITH_METADATA获取。
   *
   * @default Indicates the metadata of module
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#metadataArray
   */
  readonly metaData: Map<string, Array<CustomizeData>>;

  /**
   * 应用程序是否可以被移除，取值为true表示可以被移除，取值为false表示不可以被移除。
   *
   * @default Indicates whether or not this application may be removable
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#removable
   */
  readonly removable: boolean;

  /**
   * 应用程序的accessTokenId。
   *
   * @default Indicates the access token of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#accessTokenId
   */
  readonly accessTokenId: number;

  /**
   * 应用程序的uid。
   *
   * @default Indicates the uid of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ApplicationInfo#uid
   */
  readonly uid: number;

  /**
   * 应用程序的类别，例如游戏、社交、影视、新闻。
   *
   * @default Indicates entity type of the application
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  readonly entityType: string;
}