/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * The module defines the application information. An application can obtain its own application information through 
 * [bundleManager.getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
 * , with **GET_BUNDLE_INFO_WITH_APPLICATION** passed in to 
 * [bundleFlags]{@link ./../@ohos.bundle.bundleManager:bundleManager.BundleFlag}.
 *
 * @file
 * @kit AbilityKit
 */

import { Metadata } from './Metadata';
import { Resource } from '../global/resource';
import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * The module defines the application information.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ApplicationInfo {
  /**
   * Name of the application bundle. It corresponds to the **bundleName** field in the
   * [app.json5](docroot://quick-start/app-configuration-file.md) file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Description of the application. It corresponds to the **description** field in the
   * [app.json5](docroot://quick-start/app-configuration-file.md). For details about **description**, see the
   * **descriptionResource** field in this table.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly description: string;

  /**
   * Resource ID of the application description. It is automatically generated during compilation and build based on the
   * description configured for the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * Whether the application is enabled. **true** if enabled, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled: boolean;

  /**
   * Application label. It corresponds to the **label** field in the
   * [app.json5](docroot://quick-start/app-configuration-file.md) file. For details about **label**, see the
   * **labelResource** field in this table. Starting from API version 20, if
   * [bundleManager.getAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getAbilityInfo} is used to
   * obtain application information, this field is the application name visible to users, instead of the resource
   * descriptor.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * Resource ID of the application label. It is automatically generated during compilation and build based on the label
   * configured for the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * Application icon. It corresponds to the **icon** field in the
   * [app.json5](docroot://quick-start/app-configuration-file.md) file. For details about **icon**, see the
   * **iconResource** field in this table.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * Resource ID of the application icon. It is automatically generated during compilation and build based on the icon
   * configured for the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Process name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly process: string;

  /**
   * Permissions required for accessing the application. The permissions can be obtained by passing in
   * **GET_BUNDLE_INFO_WITH_APPLICATION** and **GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION** to the **bundleFlags**
   * parameter of
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly permissions: Array<string>;

  /**
   * Installation directory of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly codePath: string;

  /**
   * Metadata of the application. The information can be obtained by passing in **GET_BUNDLE_INFO_WITH_APPLICATION** and
   * **GET_BUNDLE_INFO_WITH_METADATA** to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * Note: Supported since API version 9 and deprecated since API version 10. You are advised to use **metadataArray**
   * instead.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead ApplicationInfo#metadataArray
   */
  readonly metadata: Map<string, Array<Metadata>>;

  /**
   * Metadata of the application. The information can be obtained by passing in **GET_BUNDLE_INFO_WITH_APPLICATION** and
   * **GET_BUNDLE_INFO_WITH_METADATA** to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly metadataArray: Array<ModuleMetadata>;

  /**
   * Whether the application is removable. **true** if removable, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly removable: boolean;

  /**
   * Access token ID of the application, which is used in the
   * [application access control verification API](docroot://reference/apis-ability-kit/js-apis-abilityAccessCtrl.md#checkaccesstoken9)
   * .
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly accessTokenId: long;

  /**
   * UID of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly uid: int;

  /**
   * Resource information of the application icon. The resource information obtained contains the bundle name, module
   * name, and ID of the resource. You can call
   * [getMediaContent]{@link ./../@ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)}
   * to obtain the resource details.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconResource: Resource;

  /**
   * Resource information of the application label. The resource information obtained contains the bundle name, module
   * name, and ID of the resource. You can call
   * [getMediaContent]{@link ./../@ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)}
   * to obtain the resource details.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelResource: Resource;

  /**
   * Resource information of the application description. The resource information obtained contains the bundle name,
   * module name, and ID of the resource. You can call
   * [getMediaContent]{@link ./../@ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)}
   * to obtain the resource details.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionResource: Resource;

  /**
   * Distribution type of the application signing certificate. The options are as follows:<li>**app_gallery**:
   * application installed from AppGallery. <!--RP1--><!--RP1End--><li>**enterprise**: enterprise internal application.
   * These are applications developed by an enterprise for its internal use by employees only. They are not distributed
   * through public channels like AppGallery but are distributed internally via the enterprise's own channels. <!--RP2--
   * ><!--RP2End--><li>**enterprise_mdm**: enterprise
   * [Mobile Device Management (MDM) application](docroot://mdm/mdm-kit-term.md#mdm-application-device-administrator-application)
   * . <!--Del-->To install a common enterprise application, you must have
   * [administrator privileges]{@link ./../@ohos.enterprise.adminManager:adminManager.enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, callback: AsyncCallback<void>)}
   * . <!--DelEnd--><!--RP3--><!--RP3End--><li>**enterprise_normal**: standard enterprise application. These
   * applications do not need to be released to AppGallery. Instead, they can be distributed and installed through an
   * enterprise [MDM application](docroot://mdm/mdm-kit-term.md#mdm-application-device-administrator-application) and
   * offline installer. <!--RP4--><!--RP4End--><li>**os_integration**: pre-installed application. They are not available
   * for third-party applications. <li>crowdtesting: application under crowdtesting, which is distributed by AppGallery
   * to a limited number of users and come with a set expiration date. When the system detects that the validity period
   * of the application expires, it prompts the user to update to the release version available on AppGallery. This API
   * is deprecated since API version 11. <li>**internaltesting**: application under internal testing of AppGallery. <!--
   * RP5--><!--RP5End--><li>none: others.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly appDistributionType: string;

  /**
   * Type of the application signing certificate file. The options are **debug** and **release**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly appProvisionType: string;

  /**
   * Whether the application is a system application. **true** if it is a system application, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly systemApp: boolean;

  /**
   * Bundle type, which can be **APP** (application) or **ATOMIC_SERVICE** (atomic service).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly bundleType: bundleManager.BundleType;

  /**
   * Whether the application is running in debug mode. **true** if in debug mode, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly debug: boolean;

  /**
   * Whether the application data is unclearable. **true** if unclearable, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly dataUnclearable: boolean;

  /**
   * Local library file path of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  readonly nativeLibraryPath: string;

  /**
   * Multi-app mode.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly multiAppMode: MultiAppMode;

  /**
   * Index of an application clone. It takes effect only for cloned applications.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * Installation source of an application. The options are as follows:
   *
   * - **pre-installed**: pre-installed application installed during the first boot.
   * - **ota**: pre-installed application added during system upgrade.
   * - **recovery**: pre-installed application manually restored by the user after uninstallation.
   * - **bundleName**: installation by the application corresponding to this bundle name. **bundleName** represents a
   * variable, subject to the actual value.
   * - **unknown**: unknown application installation source.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly installSource: string;

  /**
   * Release type of the SDK used for application packing. Currently, the SDK release types include Canary, Beta, and
   * Release. Each of the Canary and Beta releases can be distinguished by a sequential number, such as Canary1, Canary2
   * , Beta1, and Beta2. You can compare the SDK release type on which application packaging depends and the OS release
   * type (specified by [deviceInfo.distributionOSReleaseType]{@link ./../@ohos.deviceInfo:deviceInfo}) to determine the
   * compatibility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly releaseType: string;

  /**
   * Whether device-cloud file synchronization is enabled for the application. **true** if enabled, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly cloudFileSyncEnabled: boolean;

  /**
   * Whether device-cloud structured data synchronization is enabled for the application. **true** if enabled, **false**
   * otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly cloudStructuredDataSyncEnabled?: boolean;

  /**
   * Indicates the flags of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly flags?: int;
}

/**
 * Describes the metadata of a module.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
export interface ModuleMetadata {
  /**
   * Module name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Metadata list of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly metadata: Array<Metadata>;
}

/**
 * Defines the [multi-app mode](docroot://quick-start/multiInstance.md).
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 12 dynamic
 * @since 23 static
 */
export interface MultiAppMode {
  /**
   * Indicates the multiAppModeType of the bundle
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly multiAppModeType: bundleManager.MultiAppModeType;

  /**
   * Indicates the max count of the bundle,the unit is quantity.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly maxCount: int;
}

/**
 * Indicates the information of preinstalled application.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface PreinstalledApplicationInfo {

  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Module name of the application. The value is **moduleName** configured for the entry module. If the entry module
   * does not exist, the value is **moduleName** configured for the feature module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Icon ID of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Label ID of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * Indicates the description id of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly descriptionId?: long;
}