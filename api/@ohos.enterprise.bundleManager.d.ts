/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * The **bundleManager** module provides APIs for bundle management, including adding, obtaining, and removing a list of
 * bundles that are allowed to install.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace bundleManager {
  /**
   * Defines the parameters for application installation.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  interface InstallParam {
    /**
     * User ID, which must be greater than or equal to 0. The default value is the user ID of the caller.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @StageModelOnly
     * @since 12
     */
    userId?: number;

    /**
     * Installation flag.
     *
     * - **0**: initial installation.
     * - **1**: overwrite installation.
     * - **2**: installation-free.
     *
     * Default value: **0**
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @StageModelOnly
     * @since 12
     */
    installFlag?: number;

    /**
     * Extended parameters. The default value is null. The key can be **ohos.bms.param.enterpriseForAllUser**. If the
     * corresponding value is set **true**, the application is installed for all users.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    parameters?: Record<string, string>;
  }

  /**
   * Describes application resource information, including the bundle name, module name, and resource ID.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  interface Resource {
    /**
     * Bundle name of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    bundleName: string;

    /**
     * Module name of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    moduleName: string;

    /**
     * Resource ID.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    id: number;
  }

  /**
   * Defines the distribution type of the application signing certificate. For details, please refer to the
   * **appDistributionType** attribute of [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  enum AppDistributionType {
    /**
     * Application installed from AppGallery.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    APP_GALLERY = 1,

    /**
     * Enterprise application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ENTERPRISE = 2,

    /**
     * Common enterprise application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ENTERPRISE_NORMAL = 3,

    /**
     * Enterprise MDM application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ENTERPRISE_MDM = 4,

    /**
     * Application under internal testing of AppGallery.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    INTERNALTESTING = 5,

    /**
     * Crowdtesting application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    CROWDTESTING = 6
  }

  /**
   * Enumerates the bundle flags, which indicate the type of bundle information to obtain.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  export enum BundleInfoGetFlag {
    /**
     * Obtains the default bundle information, excluding **applicationInfo** and **signatureInfo**.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    DEFAULT = 0,

    /**
     * Obtains the default bundle information and **applicationInfo** (excluding **iconData**).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    WITH_APPLICATION_INFO = 1 << 0,

    /**
     * Obtains the default bundle information and **signatureInfo**.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    WITH_SIGNATURE_INFO = 1 << 1,

    /**
     * Obtains the default bundle information and **applicationInfo** (including **iconData**).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    WITH_APPLICATION_ICON_INFO = 1 << 2
  }

  /**
   * Describes the application bundle information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  interface BundleInfo {
    /**
     * Name of the application bundle. It corresponds to the **bundleName** field in the
     * [app.json5](docroot://quick-start/app-configuration-file.md) file.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly name: string;

    /**
     * Vendor of the application bundle. It corresponds to the **vendor** field in the
     * [app.json5](docroot://quick-start/app-configuration-file.md) file.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly vendor: string;

    /**
     * Version code of the application bundle. It corresponds to the **versionCode** field in the
     * [app.json5](docroot://quick-start/app-configuration-file.md) file.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly versionCode: number;

    /**
     * Version description of the application bundle. It corresponds to the **versionName** field in the
     * [app.json5](docroot://quick-start/app-configuration-file.md) file.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly versionName: string;

    /**
     * Minimum compatible version of the application bundle in the distributed scenario. It corresponds to the
     * **minCompatibleVersionCode** field in the [app.json5](docroot://quick-start/app-configuration-file.md) file.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly minCompatibleVersionCode: number;

    /**
     * Target version of the application. It corresponds to the **targetAPIVersion** field in the
     * [app.json5](docroot://quick-start/app-configuration-file.md) file.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly targetVersion: number;

    /**
     * Application information.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appInfo: ApplicationInfo;

    /**
     * Signature information of the bundle.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly signatureInfo: SignatureInfo;

    /**
     * Timestamp for the installation of the application bundle. It measures the milliseconds elapsed since the Unix
     * epoch (January 1, 1970, 08:00:00 UTC+8).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly installTime: number;

    /**
     * Timestamp for the last update of the application bundle. It measures the milliseconds elapsed since the Unix
     * epoch (January 1, 1970, 08:00:00 UTC+8).
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly updateTime: number;

    /**
     * Index of an application clone. It takes effect only for application clones.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appIndex: number;

    /**
     * Timestamp for the initial installation of the application bundle. It measures the milliseconds elapsed since the
     * Unix epoch (January 1, 1970, 08:00:00 UTC+8). For preinstalled applications, the initial installation timestamp
     * is 1533657660000.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly firstInstallTime?: number;
  }

  /**
   * Describes the signature information of the bundle.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  interface SignatureInfo {
    /**
     * App ID, which uniquely identifies an app.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appId: string;

    /**
     * Fingerprint information of the application package. It is generated by calculating the hash value of the signing
     * certificate using the SHA-256 algorithm. This field changes when the used signing certificate changes.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly fingerprint: string;

    /**
     * Unique ID of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appIdentifier: string;

    /**
     * Public key of the application certificate.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly certificate?: string;
  }

  /**
   * Defines the application information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  interface ApplicationInfo {
    /**
     * Name of the application bundle. It corresponds to the **bundleName** field in the
     * [app.json5](docroot://quick-start/app-configuration-file.md) file.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly name: string;

    /**
     * Description of the application. It corresponds to the **description** field in
     * [app.json5](docroot://quick-start/app-configuration-file.md). For details about **description**, see the
     * **descriptionResource** field in this table.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly description: string;

    /**
     * Resource ID of the application description. It is automatically generated during compilation and build based on
     * the description configured for the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly descriptionId: number;

    /**
     * Whether the application is enabled. **true** if enabled, **false** otherwise.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly enabled: boolean;

    /**
     * Application label.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly label: string;

    /**
     * Resource ID of the application label. It is automatically generated during compilation and build based on the
     * label configured for the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly labelId: number;

    /**
     * Application icon. It corresponds to the **icon** field in the
     * [app.json5](docroot://quick-start/app-configuration-file.md) file. For details about **icon**, see the
     * **iconResource** field in this table.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly icon: string;

    /**
     * Resource ID of the application icon. It is automatically generated during compilation and build based on the icon
     * configured for the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly iconId: number;

    /**
     * Application icon, which is in Base64 encoding format.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    readonly iconData: string;

    /**
     * Process name.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly process: string;

    /**
     * Installation directory of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly codePath: string;

    /**
     * Whether the application is removable. **true** if removable, **false** otherwise.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly removable: boolean;

    /**
     * Access token ID of the application, which is used in the
     * [application access control verification API](docroot://reference/apis-ability-kit/js-apis-abilityAccessCtrl.md#checkaccesstoken9)
     * .
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly accessTokenId: number;

    /**
     * UID of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly uid: number;

    /**
     * Resource information of the application icon, including the bundle name, module name, and ID of the resource.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly iconResource: Resource;

    /**
     * Resource information of the application label, including the bundle name, module name, and ID of the resource.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly labelResource: Resource;

    /**
     * Resource information of the application description, including the bundle name, module name, and ID of the
     * resource.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly descriptionResource: Resource;

    /**
     * Distribution type of the application signing certificate. For details, see the **appProvisionType** field in
     * [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appDistributionType: string;

    /**
     * Type of the application signing certificate file. The options are **debug** and **release**.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appProvisionType: string;

    /**
     * Whether the application is a system application. **true** if it is a system application, **false** otherwise.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly systemApp: boolean;

    /**
     * Whether the application is running in debug mode. **true** if in debug mode, **false** otherwise.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly debug: boolean;

    /**
     * Whether the application data is unclearable. The value **true** means that the application data is unclearable,
     * and **false** means the opposite.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly dataUnclearable: boolean;

    /**
     * Local library file path of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly nativeLibraryPath: string;

    /**
     * Index of an application clone. It takes effect only for application clones.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appIndex: number;

    /**
     * Installation source of the application. The options are as follows:
     *
     * - **pre-installed**: The application is a preset application installed at initial device startup.
     * - **ota**: The application is a preset application added during system upgrade.
     * - **recovery**: The preset application is uninstalled and then restored.
     * - **bundleName**: The application corresponding to the bundle name is installed.
     * - **unknown**: The installation source is unknown.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly installSource: string;

    /**
     * Release type of the SDK used for application packing. Currently, the SDK release types include Canary, Beta, and
     * Release. Each of the Canary and Beta releases can be distinguished by a sequential number, such as Canary1,
     * Canary2, Beta1, and Beta2. You can compare the SDK release type on which application packaging depends and the OS
     * release type (specified by [deviceInfo.distributionOSReleaseType]{@link @ohos.deviceInfo:deviceInfo}) to
     * determine the compatibility.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly releaseType: string;
  }

  /**
   * Statistics of the bundle.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  interface BundleStorageStats {
    /**
     * The bundle name of the application.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    bundleName: string;

    /**
     * The size of the application's installation data.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    appSize: number;

    /**
     * The size of the application's local data, distributed data, and database data.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    dataSize: number;
  }

  /**
   * Adds the applications that can be installed by the current user. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.addAllowedInstallBundlesSync
   */
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Adds the applications that can be installed by the user specified by **userId**. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.addAllowedInstallBundlesSync
   */
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Adds the applications that can be installed by the current or specified user. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.addAllowedInstallBundlesSync
   */
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Adds the applications that can be installed by the current or specified user. The reinstallation of system apps
   * after uninstallation is not restricted by the API. However, the reinstallation of regular apps after uninstallation
   * is restricted by the API.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addAllowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Removes the applications that can be installed by the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.removeAllowedInstallBundlesSync
   */
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Removes the applications that can be installed by the user specified by **userId**. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.removeAllowedInstallBundlesSync
   */
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Removes the applications that can be installed by the current or specified user. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.removeAllowedInstallBundlesSync
   */
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes the applications that can be installed by the current or specified user.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeAllowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Obtains the applications that can be installed by the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<Array<string>> } callback - Callback invoked to return the result. If the operation is
   *     successful, **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.getAllowedInstallBundlesSync
   */
  function getAllowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the applications that can be installed by the user specified by **userId**. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<Array<string>> } callback - Callback invoked to return the result. If the operation is
   *     successful, **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.getAllowedInstallBundlesSync
   */
  function getAllowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the applications that can be installed by the current or specified user. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<Array<string>> } Promise used to return the applications that can be installed by the current or
   *     specified user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.getAllowedInstallBundlesSync
   */
  function getAllowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Obtains the applications that can be installed by the current or specified user.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @returns { Array<string> } Array of applications that can be installed by the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAllowedInstallBundlesSync(admin: Want | null, accountId?: number): Array<string>;

  /**
   * Adds the applications that cannot be installed by the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.addDisallowedInstallBundlesSync
   */
  function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Adds the applications that cannot be installed by the user specified by **userId**. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.addDisallowedInstallBundlesSync
   */
  function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Adds the applications that are not allowed to be installed by the current or specified user. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.addDisallowedInstallBundlesSync
   */
  function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Adds the applications that are not allowed to be installed by the current or specified user. The reinstallation of
   * system apps after uninstallation is not restricted by the API. However, the reinstallation of regular apps after
   * uninstallation is restricted by the API.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addDisallowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Removes the applications that cannot be installed by the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.removeDisallowedInstallBundlesSync
   */
  function removeDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Removes the applications that cannot be installed by the user specified by **userId**. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.removeDisallowedInstallBundlesSync
   */
  function removeDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Removes the applications that cannot be installed by the current or specified user. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.removeDisallowedInstallBundlesSync
   */
  function removeDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes the applications that cannot be installed by the current or specified user.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeDisallowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Obtains the applications that cannot be installed by the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<Array<string>> } callback - Callback invoked to return the result. If the operation is
   *     successful, **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.getDisallowedInstallBundlesSync
   */
  function getDisallowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the applications that cannot be installed by the user specified by **userId**. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<Array<string>> } callback - Callback invoked to return the result. If the operation is
   *     successful, **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.getDisallowedInstallBundlesSync
   */
  function getDisallowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the applications that cannot be installed by the current or specified user. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<Array<string>> } Promise used to return the applications that cannot be installed by the current
   *     or specified user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.getDisallowedInstallBundlesSync
   */
  function getDisallowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Obtains the applications that cannot be installed by the current or specified user.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @returns { Array<string> } Array of applications that cannot be installed by the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getDisallowedInstallBundlesSync(admin: Want | null, accountId?: number): Array<string>;

  /**
   * Adds the applications that cannot be uninstalled by the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.addDisallowedUninstallBundlesSync
   */
  function addDisallowedUninstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Adds the applications that cannot be uninstalled by the user specified by **userId**. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.addDisallowedUninstallBundlesSync
   */
  function addDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Adds the applications that cannot be uninstalled by the current or specified user. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: From API version 21 onwards, the **appId** and
   *     **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier
   *     versions, only **appId** can be passed.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.addDisallowedUninstallBundlesSync
   */
  function addDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Adds the applications that are not allowed to be uninstalled by the current or specified user.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Value range: The total number of entries in this list for a
   *     single user must not exceed 200. For example, if user 100 already has 50 entries and user 101 has none, user 10
   *     0 can add up to 150 more entries, while user 101 can add up to 200 entries. You are advised to configure a
   *     maximum of 50 entries at a time to prevent potential performance problems.<br>Note: From API version 21 onwards
   *     , the **appId** and **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API
   *     version 20 and earlier versions, only **appId** can be passed.
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addDisallowedUninstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Removes the applications that cannot be uninstalled by the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.removeDisallowedUninstallBundlesSync
   */
  function removeDisallowedUninstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Removes the applications that cannot be uninstalled by the user specified by **userId**. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.removeDisallowedUninstallBundlesSync
   */
  function removeDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Removes the applications that cannot be uninstalled by the current or specified user. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Note: Since API version 21, elements in the array can use
   *     **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or
   *     **appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can be
   *     transferred.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.removeDisallowedUninstallBundlesSync
   */
  function removeDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Removes the applications that cannot be uninstalled by the current or specified user through the specified device
   * administrator application.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } appIds - Application IDs.<br>Value range: You are advised to configure a maximum of 50
   *     entries at a time to prevent potential performance problems.<br>Note: Since API version 21, elements in the
   *     array can use **appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed.
   *     **appIdentifier** or **appId** of the same app will not be removed. In API version 20 and earlier versions,
   *     only **appId** can be transferred.
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeDisallowedUninstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Obtains the applications that cannot be uninstalled by the current user. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<Array<string>> } callback - Callback invoked to return the result. If the operation is
   *     successful, **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.getDisallowedUninstallBundlesSync
   */
  function getDisallowedUninstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the applications that cannot be uninstalled by the user specified by **userId**. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<Array<string>> } callback - Callback invoked to return the result. If the operation is
   *     successful, **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.getDisallowedUninstallBundlesSync
   */
  function getDisallowedUninstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the applications that cannot be uninstalled by the current or specified user. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @returns { Promise<Array<string>> } Promise used to return the applications that cannot be uninstalled by the
   *     current or specified user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.getDisallowedUninstallBundlesSync
   */
  function getDisallowedUninstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Obtains the bundles that cannot be uninstalled by the current or specified user.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @param { number } [accountId] - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of
   *     **@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @returns { Array<string> } Array of bundles that cannot be uninstalled by the user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getDisallowedUninstallBundlesSync(admin: Want | null, accountId?: number): Array<string>;

  /**
   * Uninstalls an application of the current user without retaining the bundle data. This API uses an asynchronous
   * callback to return the result.
   *
   * > **NOTE**
   * >
   * > Error code **401** will be returned if this API is called to uninstall an application that is either a non-
   * > removable pre-installed application or one configured as non-uninstallable via the
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > API.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Name of the bundle to uninstall.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.uninstall(admin: Want, bundleName: string, userId?: number, isKeepData?: boolean)
   */
  function uninstall(admin: Want, bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Uninstalls an application of the specified user without retaining the bundle data This API uses an asynchronous
   * callback to return the result.
   *
   * > **NOTE**
   * >
   * > Error code **401** will be returned if this API is called to uninstall an application that is either a non-
   * > removable pre-installed application or one configured as non-uninstallable via the
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > API.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Name of the bundle to uninstall.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.uninstall(admin: Want, bundleName: string, userId?: number, isKeepData?: boolean)
   */
  function uninstall(admin: Want, bundleName: string, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Uninstalls an application of the current user. The **isKeepData** parameter specifies whether to retain the bundle
   * data. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > Error code **401** will be returned if this API is called to uninstall an application that is either a non-
   * > removable pre-installed application or one configured as non-uninstallable via the
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > API.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Name of the bundle to uninstall.
   * @param { boolean } isKeepData - Whether to retain the bundle data. The value **true** means to retain the bundle
   *     data; the value **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.uninstall(admin: Want, bundleName: string, userId?: number, isKeepData?: boolean)
   */
  function uninstall(admin: Want, bundleName: string, isKeepData: boolean, callback: AsyncCallback<void>): void;

  /**
   * Uninstalls an application of the specified user. The **isKeepData** parameter specifies whether to retain the
   * bundle data. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > Error code **401** will be returned if this API is called to uninstall an application that is either a non-
   * > removable pre-installed application or one configured as non-uninstallable via the
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > API.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Name of the bundle to uninstall.
   * @param { number } userId - User ID, which must be greater than or equal to 0.
   * @param { boolean } isKeepData - Whether to retain the bundle data. The value **true** means to retain the bundle
   *     data; the value **false** means the opposite.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.uninstall(admin: Want, bundleName: string, userId?: number, isKeepData?: boolean)
   */
  function uninstall(admin: Want, bundleName: string, userId: number, isKeepData: boolean, callback: AsyncCallback<void>): void;

  /**
   * Uninstalls an application of the current or specified user. The **isKeepData** parameter specifies whether to
   * retain the bundle data. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > Error code **401** will be returned if this API is called to uninstall an application that is either a non-
   * > removable pre-installed application or one configured as non-uninstallable via the
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > API.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } bundleName - Bundle name of an application.
   * @param { number } [userId] - User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,
   *     this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current
   *     user.
   * @param { boolean } [isKeepData] - Whether to retain the bundle data. The value **true** means to retain the bundle
   *     data; the value **false** means the opposite.
   * @returns { Promise<void> } Promise that returns no value. An error object will be thrown if the application fails
   *     to be uninstalled.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function uninstall(admin: Want, bundleName: string, userId?: number, isKeepData?: boolean): Promise<void>;

  /**
   * Installs specified applications. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } hapFilePaths - Applications to install.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.install(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam)
   */
  function install(admin: Want, hapFilePaths: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Installs applications with specified parameters. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } hapFilePaths - Applications to install.
   * @param { InstallParam } installParam - Application installation parameters.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead bundleManager.install(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam)
   */
  function install(admin: Want, hapFilePaths: Array<string>, installParam: InstallParam, callback: AsyncCallback<void>): void;

  /**
   * Installs specified applications. This API uses a promise to return the result.
   *
   * This API can be used to install only applications of the **enterprise_mdm** (MDM application) or
   * **enterprise_normal** (common enterprise application) distribution type. You can call the
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)} API
   * to query the [BundleInfo]{@link ./bundleManager/BundleInfo} of an application, where
   * **BundleInfo.appInfo.appDistributionType** indicates the distribution type.
   *
   * > **NOTE**
   * >
   * > This API is time-consuming. Subsequent calls to other synchronous APIs in the application main thread must wait
   * > for the asynchronous return of this API.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } hapFilePaths - Applications to install. The app bundle must be stored in the path that the
   *     app has the permission to access, such as the app sandbox path. For details about the mapping between the app
   *     sandbox path and the actual physical path, see
   *     [Mappings Between App Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths)
   *     .
   * @param { InstallParam } [installParam] - Application installation parameters.
   * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error object will be thrown.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function install(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>;

  /**
   * Install an application.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   *                         The admin must have the corresponding permission.
   * @param { Array<string> } hapFilePaths - indicates the path of the application to be installed.
   * @param { InstallParam } [installParam] - installParam indicates the installation parameters.
   *                                        It may contain two fields: userId and installFlag.
   *                                        The flag can only be one of correct flags.
   * @returns { Promise<void> } the promise of installing application result.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 9201022 - Failed to install the HAP because of insufficient system disk space.
   * @throws { BusinessError } 9201023 - Failed to install the HAP because enterprise device management disallows the
   *     installation.
   * @throws { BusinessError } 9201024 - Failed to install the HAP because the HAP fails to be parsed.
   * @throws { BusinessError } 9201025 - Failed to install the HAP because the HAP signature fails to be verified.
   * @throws { BusinessError } 9201026 - Failed to install the HAP because the HAP path is invalid or
   *     the HAP is too large.
   * @throws { BusinessError } 9201027 - Failed to install the HAPs because they have different configuration
   *     information.
   * @throws { BusinessError } 9201028 - Failed to install the HAP because the isolationMode configured is not
   *     supported.
   * @throws { BusinessError } 9201029 - Failed to install the HAP since the version of the HAP to install is too early.
   * @throws { BusinessError } 9201030 - Failed to install the HAP because the VersionCode to be updated is not greater
   *     than the current VersionCode.
   * @throws { BusinessError } 9201031 - Installation failed because the dependent module does not exist.
   * @throws { BusinessError } 9201032 - The specified user ID is not found.
   * @throws { BusinessError } 9201033 - Failed to install the HAP because the overlay check failed.
   * @throws { BusinessError } 9201034 - Failed to install the HSP due to missing required permissions.
   * @throws { BusinessError } 9201035 - Installation failed because the installation of cross-app shared libraries is
   *     not allowed.
   * @throws { BusinessError } 9201036 - Failed to install the HAP due to incorrect URI in the data proxy.
   * @throws { BusinessError } 9201037 - Failed to install the HAP due to incorrect permission configuration in
   *     the data proxy.
   * @throws { BusinessError } 9201038 - Failed to install the HAP due to code signature verification failure.
   * @throws { BusinessError } 9201039 - Failed to install the HAP due to enterprise device verification failure.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 26.0.0
   */
  function installForResult(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>;

  /**
   * Adds the distribution type of the application that can be installed. Only applications of the distribution type
   * that is added to [AppDistributionType]{@link bundleManager.AppDistributionType} can be installed on the current
   * device.
   *
   * For details about the distribution type of the application signing certificate, refer to the
   * **appDistributionType** attribute in [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<AppDistributionType> } appDistributionTypes - Distribution types of the application signing
   *     certificate.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addInstallationAllowedAppDistributionTypes(admin: Want, appDistributionTypes: Array<AppDistributionType>): void;

  /**
   * Removes the distribution type of an application. If only some distribution types in the array are removed, the
   * current device can install applications of the remaining distribution types in the array, but cannot install
   * applications of the distribution types not included in
   * [AppDistributionType]{@link bundleManager.AppDistributionType}.
   *
   * For details about the distribution type of the application signing certificate, refer to the
   * **appDistributionType** attribute in [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<AppDistributionType> } appDistributionTypes - Distribution types of the application signing
   *     certificate.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeInstallationAllowedAppDistributionTypes(admin: Want, appDistributionTypes: Array<AppDistributionType>): void;

  /**
   * Obtains the distribution type of the signing certificate used by applications that can be installed.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 20 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @returns { Array<AppDistributionType> } Distribution types of the application signing certificate.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getInstallationAllowedAppDistributionTypes(admin: Want | null): Array<AppDistributionType>;

  /**
   * Obtains the applications installed by a specified user on a device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - Account ID. The value is a positive integer greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the account ID.
   * @returns { Promise<Array<BundleInfo>> } Promise used to return the bundle information of the installed application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getInstalledBundleList(admin: Want, accountId: number): Promise<Array<BundleInfo>>;

  /**
   * Obtains the list of applications installed by a specified user based on the specified **bundleInfoGetFlag**. This
   * API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { int } accountId - Account ID.
   *     <br>The value must be an integer greater than or equal to 0.
   *     <br> You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     of @ ohos.account.osAccount to obtain the account ID.
   * @param { int } bundleInfoGetFlag - Type of the bundle information to obtain
   *     <br>The value range is all integers.
   * @returns { Promise<Array<BundleInfo>> } Promise used to return the bundle information of the installed application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function getInstalledBundleList(admin: Want, accountId: int, bundleInfoGetFlag: int): Promise<Array<BundleInfo>>;

  /**
   * Downloads and installs an application from AppGallery.
   *
   * > **NOTE**
   * >
   * > After this API is successfully called, an application download task is generated on the home screen. The task is
   * > the same as that created during download from AppGallery. Upon completion of the download and installation, the
   * > installation result is returned through the
   * > [EnterpriseAdminExtensionAbility.onMarketAppInstallResult]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onMarketAppInstallResult}
   * > callback.<!--RP1--><!--RP1End-->
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } bundleNames - Application bundle name list. A maximum of 10 bundle names can be passed at
   *     a time. The bundle name must be the same as that on AppGallery. Otherwise, the download task cannot be created,
   *     and error code 9201002 will be reported.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function installMarketApps(admin: Want, bundleNames: Array<string>): void;

  /**
   * Get the storage statistics of installed bundles on the device.
   *
   * @permission ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { Array<string> } bundleNames - bundleNames indicates the list of application bundle names.
   * @param { number } accountId - Account ID.
   *     <br>The value must be an integer greater than or equal to 0.
   *     <br> You can call [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   *     of @ ohos.account.osAccount to obtain the account ID.
   * @returns { Promise<Array<BundleStorageStats>> } Returns the bundle statistics of the installed applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getInstalledBundleStorageStats(admin: Want, bundleNames: Array<string>, accountId: number): Promise<Array<BundleStorageStats>>;
}

export default bundleManager;