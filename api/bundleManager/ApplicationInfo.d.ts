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
 * @file ApplicationInfo
 * @kit AbilityKit
 */

import { Metadata } from './Metadata';
import { Resource } from '../global/resource';
import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * The module defines the application information. An application can obtain its own application information through
 * [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}, with
 * **GET_BUNDLE_INFO_WITH_APPLICATION** passed in to
 * [bundleFlags]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}.
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
   * [bundleManager.getAbilityInfo]{@link @ohos.bundle.bundleManager:bundleManager.getAbilityInfo} is used to obtain
   * application information, this field is the application name visible to users, instead of the resource descriptor.
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
   * List of permissions required to access the application<!--Del-->, which can be obtained by calling
   * [getApplicationInfo]{@link @ohos.bundle.bundleManager:bundleManager.getApplicationInfo} with the appFlags parameter
   * set to GET_APPLICATION_INFO_WITH_PERMISSION<!--DelEnd-->.
   *
   * When [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf} or
   * [getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo} is called to obtain ApplicationInfo
   * information, this field is not returned. You can obtain the permission list from
   * [bundleInfo]{@link ./BundleInfo:BundleInfo}.reqPermissionDetails.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Metadata of the application, which can be obtained by calling
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf} with the bundleFlags
   * parameter set to GET_BUNDLE_INFO_WITH_APPLICATION and GET_BUNDLE_INFO_WITH_METADATA.
   *
   * **Note:** Supported since API version 9 and deprecated since API version 10. You are advised to use metadataArray
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
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}.
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
   * accessTokenId of the application, which is the identity identifier of the application and is used in
   * [checkAccessToken]{@link @ohos.abilityAccessCtrl:abilityAccessCtrl.AtManager.checkAccessToken}.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Icon resource information of the application, which contains the bundleName, moduleName, and id of the resource.
   * You can call the globalization API
   * [getMediaContentBase64]{@link @ohos.resourceManager:resourceManager.ResourceManager.getMediaContentBase64(resId: long, callback: _AsyncCallback<string>)}
   * and pass in iconResource.id to obtain the detailed resource data information.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconResource: Resource;

  /**
   * Name resource information of the application, which contains the bundleName, moduleName, and id of the resource.
   * You can call the globalization API
   * [getStringValue]{@link @ohos.resourceManager:resourceManager.ResourceManager.getStringValue(resId: long, callback: _AsyncCallback<string>)}
   * and pass in labelResource.id to obtain the detailed resource data information.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelResource: Resource;

  /**
   * Description resource information of the application, which contains the bundleName, moduleName, and id of the
   * resource. You can call the globalization API
   * [getStringValue]{@link @ohos.resourceManager:resourceManager.ResourceManager.getStringValue(resId: long, callback: _AsyncCallback<string>)}
   * and pass in descriptionResource.id to obtain the detailed resource data information.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionResource: Resource;

  /**
   * Distribution type of the application signing certificate, which is divided into: <li>app_gallery: application
   * installed from the application market. <!--RP1--><!--RP1End--> <li> enterprise: enterprise internal application,
   * which is developed by the enterprise itself and used only by its internal employees. It is not released through
   * public channels such as the application market, but distributed internally through the enterprise's own channels.
   * <!--RP2--><!--RP2End--><li> enterprise_mdm: enterprise [MDM app](docroot://mdm/mdm-kit-term.md#mdm-app). <!--Del-->
   * It can be installed only after the administrator privilege is activated by calling
   * [enableAdmin](docroot://reference/apis-mdm-kit/js-apis-enterprise-adminManager-sys.md#adminmanagerenableadmin). 
   * <!--DelEnd--><!--RP3--><!--RP3End--> <li>enterprise_normal: normal enterprise application, which does not need
   * to be listed on the Huawei application market and can be distributed and installed through the enterprise
   * [MDM app](docroot://mdm/mdm-kit-term.md#mdm-app) and offline installer. <!--RP4--><!--RP4End--><li>os_integration:
   * preset application, which cannot be applied for or configured by third-party applications.<li>crowdtesting:
   * crowdtesting application, which is a specific application distributed by the application market to some users with
   * a certain validity period. When the system detects that the validity period of the application has expired, it
   * notifies the user to update to the release version of the application in the application market. Deprecated since
   * API version 11.<li>internaltesting: application under internal testing in the application market. <!--RP5-->
   * <!--RP5End--><li>none: others.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly appDistributionType: string;

  /**
   * Type of the application signing certificate file, which is divided into 'debug' and 'release'. The 'debug' type is
   * used in the development and testing phase for debugging and verifying functions; the 'release' type is used for
   * applications officially released in the production environment.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Type of the bundle, whose value is APP (application) or ATOMIC_SERVICE (atomic service). APP is the traditional
   * application form and requires the user to install it proactively; ATOMIC_SERVICE is the atomic service form, which
   * is ready to use without installation. Developers can determine the type of the current application based on this
   * field and perform differentiated processing.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Application multi-instance mode. It is applicable to scenarios where multiple application instances need to run
   * simultaneously, such as managing multiple enterprise accounts (for example, work account and personal account
   * logged in at the same time), running multiple environments in parallel (for example, test environment and
   * production environment), and multiple social identities (for example, personal account and work account).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly multiAppMode: MultiAppMode;

  /**
   * Clone index identifier of the application bundle, which takes effect only in clone applications. The value is an
   * integer in the range [0-5], where 0 indicates the main application and 1-5 indicate clone applications.
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
   * Release type of the SDK used when the application is packaged. The current SDK release types are Canary, Beta, and
   * Release, where Canary and Beta are further subdivided by sequence number, for example, Canary1, Canary2, Beta1, and
   * Beta2. Developers can determine compatibility by comparing the SDK release type that the application packaging
   * depends on with the OS release type ([deviceInfo.distributionOSReleaseType]{@link @ohos.deviceInfo:deviceInfo}).
   *
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
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
   * Status set between the current application and the current user. Each bit indicates a specific Boolean status. For
   * details about the values, see [ApplicationInfoFlag]{@link @ohos.bundle.bundleManager:bundleManager.ApplicationInfoFlag}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly flags?: int;

  /**
   * Indicates the reserved flag of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  readonly applicationReservedFlag?: bundleManager.ApplicationReservedFlag;
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
   * Type of the multi-app mode.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly multiAppModeType: bundleManager.MultiAppModeType;

  /**
   * Maximum number of accounts that can log in to the application at the same time.
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
   * Name of the application package.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Module name of the application package. Returns the moduleName of the entry module. If no entry module exists,
   * returns the moduleName of the feature module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Application icon ID.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Application label ID.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * App description ID.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly descriptionId?: long;
}