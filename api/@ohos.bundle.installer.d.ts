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
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * The module provides APIs for you to install, uninstall, and recover bundles on devices.
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace installer {
  /**
   * Obtains a BundleInstaller object. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<BundleInstaller> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the operation is successful, **err** is **null** and **data** is the BundleInstaller object obtained
   *     ; otherwise, **err** is an error object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void;

  /**
   * Obtains a BundleInstaller object. This API uses a promise to return the result.
   *
   * @returns { Promise<BundleInstaller> } BundleInstaller object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleInstaller(): Promise<BundleInstaller>;

  /**
   * Obtains a BundleInstaller object. This API is a synchronous API.
   *
   * @returns { BundleInstaller } BundleInstaller object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getBundleInstallerSync(): BundleInstaller;

  /**
   * Bundle installer interface, include install uninstall recover.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface BundleInstaller {
    /**
     * Installs an application. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > To install applications of different distribution types, the appropriate permissions must be requested. For
     * > details on distribution types, see the **appDistributionType** field in
     * > [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}.
     *
     * @permission ohos.permission.INSTALL_BUNDLE [since 9 - 9]
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE [since 10 - 12]
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE
     *     or ohos.permission.INSTALL_INTERNALTESTING_BUNDLE [since 13 - 22]
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE
     *     or ohos.permission.INSTALL_INTERNALTESTING_BUNDLE
     *     or (ohos.permission.INSTALL_BUNDLE and ohos.permission.INSTALL_ALLOW_DOWNGRADE) [since 23]
     * @param { Array<string> } hapFilePaths - Paths where the HAP files of the bundle are stored, which are the data
     *     directories. If only one directory is passed, the HAP files in the directory must belong to the same bundle
     *     and have the same signature.
     * @param { InstallParam } installParam - Parameters required for the installation.
     * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
     *     If the operation is successful, **err** is **null**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE' or '
     *     ohos.permission.INSTALL_ENTERPRISE_BUNDLE' or
     *     'ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE' or 'ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE'
     *     or 'ohos.permission.INSTALL_INTERNALTESTING_BUNDLE'
     *     or ('ohos.permission.INSTALL_BUNDLE' and 'ohos.permission.INSTALL_ALLOW_DOWNGRADE').
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types; 3. Parameter hapFiles is needed for code signature; 4. The size of
     *     specifiedDistributionType is greater than 128; 5. The size of additionalInfo is greater than 3000.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700010 - Failed to install the HAP because the HAP fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the HAP because the HAP signature fails to be verified.
     * @throws { BusinessError } 17700012 - Failed to install the HAP because the HAP path is invalid or the HAP is too
     *     large.
     * @throws { BusinessError } 17700015 - Failed to install the HAPs because they have different configuration
     *     information.
     * @throws { BusinessError } 17700016 - Failed to install the HAP because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the HAP since the version of the HAP to install is too
     *     early.
     * @throws { BusinessError } 17700018 - Failed to install because the dependent module does not exist.
     * @throws { BusinessError } 17700031 - Failed to install the HAP because the overlay check of the HAP is failed.
     * @throws { BusinessError } 17700036 - Failed to install the HSP because lacks appropriate permissions.
     * @throws { BusinessError } 17700039 - Failed to install because disallow install a shared bundle by hapFilePaths.
     * @throws { BusinessError } 17700041 - Failed to install because enterprise device management disallow install.
     * @throws { BusinessError } 17700042 - Failed to install the HAP because of incorrect URI in the data proxy.
     * @throws { BusinessError } 17700043 - Failed to install the HAP because of low APL in the non-system data proxy
     *     (required APL: system_basic or system_core).
     * @throws { BusinessError } 17700044 - Failed to install the HAP because the isolationMode configured is not
     *     supported.
     * @throws { BusinessError } 17700047 - Failed to install the HAP because the VersionCode to be updated is not
     *     greater than the current VersionCode.
     * @throws { BusinessError } 17700048 - Failed to install the HAP because the code signature verification is
     *     failed. [since 10]
     * @throws { BusinessError } 17700050 - Failed to install the HAP because enterprise normal/MDM bundle cannot be
     *     installed on non-enterprise device. [since 10]
     * @throws { BusinessError } 17700052 - Failed to install the HAP because debug bundle cannot be installed under non
     *     -developer mode. [since 11]
     * @throws { BusinessError } 17700054 - Failed to install the HAP because the HAP requests wrong
     *     permissions. [since 11]
     * @throws { BusinessError } 17700058 - Failed to install the HAP because the device has been controlled. [since 12]
     * @throws { BusinessError } 17700066 - Failed to install the HAP because installing the native package
     *     failed. [since 12]
     * @throws { BusinessError } 17700073 - Failed to install the HAP because an application with the same
     *     <br>bundle name but different signature information exists on the device. [since 13]
     * @throws { BusinessError } 17700077 - Failed to install the HAP and restore to preinstalled bundle. [since 17]
     * @throws { BusinessError } 17700076 - Failed to install the HAP or HSP because the app distribution type is not
     *     allowed. [since 18]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    install(hapFilePaths: Array<string>, installParam: InstallParam, callback: AsyncCallback<void>): void;

    /**
     * Installs an application. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > To install applications of different distribution types, the appropriate permissions must be requested. For
     * > details on distribution types, see the **appDistributionType** field in
     * > [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}.
     *
     * @permission ohos.permission.INSTALL_BUNDLE [since 9 - 9]
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE [since 10 - 12]
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE
     *     or ohos.permission.INSTALL_INTERNALTESTING_BUNDLE [since 13 - 22]
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE
     *     or ohos.permission.INSTALL_INTERNALTESTING_BUNDLE
     *     or (ohos.permission.INSTALL_BUNDLE and ohos.permission.INSTALL_ALLOW_DOWNGRADE) [since 23]
     * @param { Array<string> } hapFilePaths - Paths where the HAP files of the bundle are stored, which are the data
     *     directories. If only one directory is passed, the HAP files in the directory must belong to the same bundle
     *     and have the same signature.
     * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
     *     If the operation is successful, **err** is **null**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE' or '
     *     ohos.permission.INSTALL_ENTERPRISE_BUNDLE' or
     *     'ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE' or 'ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE'
     *     or 'ohos.permission.INSTALL_INTERNALTESTING_BUNDLE'
     *     or ('ohos.permission.INSTALL_BUNDLE' and 'ohos.permission.INSTALL_ALLOW_DOWNGRADE').
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700010 - Failed to install the HAP because the HAP fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the HAP because the HAP signature fails to be verified.
     * @throws { BusinessError } 17700012 - Failed to install the HAP because the HAP path is invalid or the HAP is too
     *     large.
     * @throws { BusinessError } 17700015 - Failed to install the HAPs because they have different configuration
     *     information.
     * @throws { BusinessError } 17700016 - Failed to install the HAP because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the HAP since the version of the HAP to install is too
     *     early.
     * @throws { BusinessError } 17700018 - Failed to install because the dependent module does not exist.
     * @throws { BusinessError } 17700031 - Failed to install the HAP because the overlay check of the HAP is failed.
     * @throws { BusinessError } 17700036 - Failed to install the HSP because lacks appropriate permissions.
     * @throws { BusinessError } 17700039 - Failed to install because disallow install a shared bundle by hapFilePaths.
     * @throws { BusinessError } 17700041 - Failed to install because enterprise device management disallow install.
     * @throws { BusinessError } 17700042 - Failed to install the HAP because of incorrect URI in the data proxy.
     * @throws { BusinessError } 17700043 - Failed to install the HAP because of low APL in the non-system data proxy
     *     (required APL: system_basic or system_core).
     * @throws { BusinessError } 17700044 - Failed to install the HAP because the isolationMode configured is not
     *     supported.
     * @throws { BusinessError } 17700047 - Failed to install the HAP because the VersionCode to be updated is not
     *     greater than the current VersionCode.
     * @throws { BusinessError } 17700048 - Failed to install the HAP because the code signature verification is
     *     failed. [since 10]
     * @throws { BusinessError } 17700050 - Failed to install the HAP because enterprise normal/MDM bundle cannot be
     *     installed on non-enterprise device. [since 10]
     * @throws { BusinessError } 17700052 - Failed to install the HAP because debug bundle cannot be installed under non
     *     -developer mode. [since 11]
     * @throws { BusinessError } 17700054 - Failed to install the HAP because the HAP requests wrong
     *     permissions. [since 11]
     * @throws { BusinessError } 17700058 - Failed to install the HAP because the device has been controlled. [since 12]
     * @throws { BusinessError } 17700066 - Failed to install the HAP because installing the native package
     *     failed. [since 12]
     * @throws { BusinessError } 17700073 - Failed to install the HAP because an application with the same
     *     <br>bundle name but different signature information exists on the device. [since 13]
     * @throws { BusinessError } 17700077 - Failed to install the HAP and restore to preinstalled bundle. [since 17]
     * @throws { BusinessError } 17700076 - Failed to install the HAP or HSP because the app distribution type is not
     *     allowed. [since 18]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    install(hapFilePaths: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * Installs an application. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > To install applications of different distribution types, the appropriate permissions must be requested. For
     * > details on distribution types, see the **appDistributionType** field in
     * > [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}.
     *
     * @permission ohos.permission.INSTALL_BUNDLE [since 9 - 9]
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE [since 10 - 12]
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE
     *     or ohos.permission.INSTALL_INTERNALTESTING_BUNDLE [since 13 - 22]
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_BUNDLE or
     *     ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE or ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE
     *     or ohos.permission.INSTALL_INTERNALTESTING_BUNDLE
     *     or (ohos.permission.INSTALL_BUNDLE and ohos.permission.INSTALL_ALLOW_DOWNGRADE) [since 23]
     * @param { Array<string> } hapFilePaths - Paths where the HAP files of the bundle are stored, which are the data
     *     directories. If only one directory is passed, the HAP files in the directory must belong to the same bundle
     *     and have the same signature.
     * @param { InstallParam } installParam - Parameters required for the installation. For details about their default
     *     values, see [InstallParam]{@link installer.InstallParam}. [since 9 - 11]
     * @param { InstallParam } [installParam] - Parameters required for the installation. For details about their
     *     default values, see [InstallParam]{@link installer.InstallParam}. [since 12]
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE' or '
     *     ohos.permission.INSTALL_ENTERPRISE_BUNDLE' or
     *     'ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE' or 'ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE'
     *     or 'ohos.permission.INSTALL_INTERNALTESTING_BUNDLE'
     *     or ('ohos.permission.INSTALL_BUNDLE' and 'ohos.permission.INSTALL_ALLOW_DOWNGRADE').
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types; 3. Parameter hapFiles is needed for code signature; 4. The size of
     *     specifiedDistributionType is greater than 128; 5. The size of additionalInfo is greater than 3000.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700010 - Failed to install the HAP because the HAP fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the HAP because the HAP signature fails to be verified.
     * @throws { BusinessError } 17700012 - Failed to install the HAP because the HAP path is invalid or the HAP is too
     *     large.
     * @throws { BusinessError } 17700015 - Failed to install the HAPs because they have different configuration
     *     information.
     * @throws { BusinessError } 17700016 - Failed to install the HAP because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the HAP since the version of the HAP to install is too
     *     early.
     * @throws { BusinessError } 17700018 - Failed to install because the dependent module does not exist.
     * @throws { BusinessError } 17700031 - Failed to install the HAP because the overlay check of the HAP is failed.
     * @throws { BusinessError } 17700036 - Failed to install the HSP because lacks appropriate permissions.
     * @throws { BusinessError } 17700039 - Failed to install because disallow install a shared bundle by hapFilePaths.
     * @throws { BusinessError } 17700041 - Failed to install because enterprise device management disallow install.
     * @throws { BusinessError } 17700042 - Failed to install the HAP because of incorrect URI in the data proxy.
     * @throws { BusinessError } 17700043 - Failed to install the HAP because of low APL in the non-system data proxy
     *     (required APL: system_basic or system_core).
     * @throws { BusinessError } 17700044 - Failed to install the HAP because the isolationMode configured is not
     *     supported.
     * @throws { BusinessError } 17700047 - Failed to install the HAP because the VersionCode to be updated is not
     *     greater than the current VersionCode.
     * @throws { BusinessError } 17700048 - Failed to install the HAP because the code signature verification is
     *     failed. [since 10]
     * @throws { BusinessError } 17700050 - Failed to install the HAP because enterprise normal/MDM bundle cannot be
     *     installed on non-enterprise device. [since 10]
     * @throws { BusinessError } 17700052 - Failed to install the HAP because debug bundle cannot be installed under non
     *     -developer mode. [since 11]
     * @throws { BusinessError } 17700054 - Failed to install the HAP because the HAP requests wrong
     *     permissions. [since 11]
     * @throws { BusinessError } 17700058 - Failed to install the HAP because the device has been controlled. [since 12]
     * @throws { BusinessError } 17700066 - Failed to install the HAP because installing the native package
     *     failed. [since 12]
     * @throws { BusinessError } 17700073 - Failed to install the HAP because an application with the same
     *     <br>bundle name but different signature information exists on the device. [since 13]
     * @throws { BusinessError } 17700077 - Failed to install the HAP and restore to preinstalled bundle. [since 17]
     * @throws { BusinessError } 17700076 - Failed to install the HAP or HSP because the app distribution type is not
     *     allowed. [since 18]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    install(hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>;

    /**
     * Uninstalls an application. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - Name of the target bundle.
     * @param { InstallParam } installParam - Parameters required for the installation.
     * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
     *     If the operation is successful, **err** is **null**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700020 - The specified bundle is a pre-installed bundle and cannot be uninstalled.
     * @throws { BusinessError } 17700040 - The specified bundle is a shared bundle and cannot be uninstalled.
     * @throws { BusinessError } 17700045 - Failed to uninstall the HAP because uninstall is not allowed by the
     *     enterprise device management.
     * @throws { BusinessError } 17700067 - Failed to uninstall the HAP because uninstalling the native package
     *     failed. [since 12]
     * @throws { BusinessError } 17700060 - The specified application cannot be uninstalled. [since 13]
     * @throws { BusinessError } 17700062 - Failed to uninstall the app because the app is locked. [since 15]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uninstall(bundleName: string, installParam: InstallParam, callback: AsyncCallback<void>): void;

    /**
     * Uninstalls an application. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - Name of the target bundle.
     * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
     *     If the operation is successful, **err** is **null**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700020 - The specified bundle is a pre-installed bundle and cannot be uninstalled.
     * @throws { BusinessError } 17700040 - The specified bundle is a shared bundle and cannot be uninstalled.
     * @throws { BusinessError } 17700045 - Failed to uninstall the HAP because uninstall is not allowed by the
     *     enterprise device management.
     * @throws { BusinessError } 17700067 - Failed to uninstall the HAP because uninstalling the native package
     *     failed. [since 12]
     * @throws { BusinessError } 17700060 - The specified application cannot be uninstalled. [since 13]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uninstall(bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * Uninstalls an application. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - Name of the target bundle.
     * @param { InstallParam } installParam - Parameters required for the installation. For details about their default
     *     values, see [InstallParam]{@link installer.InstallParam}. [since 9 - 14]
     * @param { InstallParam } [installParam] - Parameters required for the installation. For details about their
     *     default values, see [InstallParam]{@link installer.InstallParam}. [since 15]
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700020 - The specified bundle is a pre-installed bundle and cannot be uninstalled.
     * @throws { BusinessError } 17700040 - The specified bundle is a shared bundle and cannot be uninstalled.
     * @throws { BusinessError } 17700045 - Failed to uninstall the HAP because uninstall is not allowed by the
     *     enterprise device management.
     * @throws { BusinessError } 17700067 - Failed to uninstall the HAP because uninstalling the native package
     *     failed. [since 12]
     * @throws { BusinessError } 17700060 - The specified application cannot be uninstalled. [since 13]
     * @throws { BusinessError } 17700062 - Failed to uninstall the app because the app is locked. [since 15]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uninstall(bundleName: string, installParam?: InstallParam): Promise<void>;

    /**
     * Rolls back an application to the initial installation state. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.RECOVER_BUNDLE
     * @param { string } bundleName - Name of the target bundle.
     * @param { InstallParam } installParam - Parameters required for the installation.
     * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
     *     If the operation is successful, **err** is **null**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE' or '
     *     ohos.permission.RECOVER_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700073 - Failed to install the HAP because an application with the same
     *     <br>bundle name but different signature information exists on the device. [since 13]
     * @throws { BusinessError } 17700058 - Failed to install the HAP because this application is prohibited
     *     <br>from being installed on this device or by specified users. [since 14]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    recover(bundleName: string, installParam: InstallParam, callback: AsyncCallback<void>): void;

    /**
     * Rolls back an application to the initial installation state. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.RECOVER_BUNDLE
     * @param { string } bundleName - Name of the target bundle.
     * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
     *     If the operation is successful, **err** is **null**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE' or '
     *     ohos.permission.RECOVER_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700073 - Failed to install the HAP because an application with the same
     *     <br>bundle name but different signature information exists on the device. [since 13]
     * @throws { BusinessError } 17700058 - Failed to install the HAP because this application is prohibited
     *     <br>from being installed on this device or by specified users. [since 14]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    recover(bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * Rolls back an application to the initial installation state. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.RECOVER_BUNDLE
     * @param { string } bundleName - Name of the target bundle.
     * @param { InstallParam } installParam - Parameters required for the installation. For details about their default
     *     values, see [InstallParam]{@link installer.InstallParam}.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE' or '
     *     ohos.permission.RECOVER_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700073 - Failed to install the HAP because an application with the same
     *     <br>bundle name but different signature information exists on the device. [since 13]
     * @throws { BusinessError } 17700058 - Failed to install the HAP because this application is prohibited
     *     <br>from being installed on this device or by specified users. [since 14]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    recover(bundleName: string, installParam?: InstallParam): Promise<void>;

    /**
     * Uninstalls a shared package. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { UninstallParam } uninstallParam - Parameters required for the uninstall.
     * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
     *     If the operation is successful, **err** is **null**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700020 - The specified bundle is a pre-installed bundle and cannot be uninstalled.
     * @throws { BusinessError } 17700037 - The version of shared bundle is dependent on other applications.
     * @throws { BusinessError } 17700038 - The specified shared bundle does not exist.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    uninstall(uninstallParam: UninstallParam, callback: AsyncCallback<void>): void;

    /**
     * Uninstalls a shared package. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { UninstallParam } uninstallParam - Parameters required for the uninstall.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700020 - The specified bundle is a pre-installed bundle and cannot be uninstalled.
     * @throws { BusinessError } 17700037 - The version of shared bundle is dependent on other applications.
     * @throws { BusinessError } 17700038 - The specified shared bundle does not exist.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    uninstall(uninstallParam: UninstallParam): Promise<void>;

    /**
     * Updates the current bundle. This API can be called only by enterprise MDM applications on enterprise devices, and
     * the HAPs in **hapFilePaths** must belong to the current application. This API uses an asynchronous callback to
     * return the result.
     *
     * @permission ohos.permission.INSTALL_SELF_BUNDLE
     * @param { Array<string> } hapFilePaths - Paths where the HAP files of the bundle are stored, which are the data
     *     directories. If only one directory is passed, the HAP files in the directory must belong to the same bundle
     *     and have the same signature.
     * @param { InstallParam } installParam - Parameters required for the installation.
     * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
     *     If the operation is successful, **err** is **null**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_SELF_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter hapFiles is needed for code signature;
     *     4. The size of specifiedDistributionType is greater than 128; 5. The size of additionalInfo is greater than 3
     *     000.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700010 - Failed to install the HAP because the HAP fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the HAP because the HAP signature fails to be verified.
     * @throws { BusinessError } 17700012 - Failed to install the HAP because the HAP path is invalid or the HAP is too
     *     large.
     * @throws { BusinessError } 17700015 - Failed to install the HAPs because they have different configuration
     *     information.
     * @throws { BusinessError } 17700016 - Failed to install the HAP because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the HAP since the version of the HAP to install is too
     *     early.
     * @throws { BusinessError } 17700018 - Failed to install because the dependent module does not exist.
     * @throws { BusinessError } 17700039 - Failed to install because disallow install a shared bundle by hapFilePaths.
     * @throws { BusinessError } 17700041 - Failed to install because enterprise device management disallow install.
     * @throws { BusinessError } 17700042 - Failed to install the HAP because of incorrect URI in the data proxy.
     * @throws { BusinessError } 17700043 - Failed to install the HAP because of low APL in the non-system data proxy
     *     (required APL: system_basic or system_core).
     * @throws { BusinessError } 17700044 - Failed to install the HAP because the isolationMode configured is not
     *     supported.
     * @throws { BusinessError } 17700047 - Failed to install the HAP because the VersionCode to be updated is not
     *     greater than the current VersionCode.
     * @throws { BusinessError } 17700048 - Failed to install the HAP because the code signature verification is failed.
     * @throws { BusinessError } 17700049 - Failed to install the HAP because the bundleName is different from the
     *     bundleName of the caller application.
     * @throws { BusinessError } 17700050 - Failed to install the HAP because enterprise normal/MDM bundle cannot be
     *     installed on non-enterprise device.
     * @throws { BusinessError } 17700051 - Failed to install the HAP because the distribution type of caller
     *     application is not enterprise_mdm.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    updateBundleForSelf(hapFilePaths: Array<string>, installParam: InstallParam, callback: AsyncCallback<void>): void;

    /**
     * Updates the current bundle. This API can be called only by enterprise MDM applications on enterprise devices, and
     * the HAPs in **hapFilePaths** must belong to the current application. This API uses an asynchronous callback to
     * return the result.
     *
     * @permission ohos.permission.INSTALL_SELF_BUNDLE
     * @param { Array<string> } hapFilePaths - Paths where the HAP files of the bundle are stored, which are the data
     *     directories. If only one directory is passed, the HAP files in the directory must belong to the same bundle
     *     and have the same signature.
     * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
     *     If the operation is successful, **err** is **null**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_SELF_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700010 - Failed to install the HAP because the HAP fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the HAP because the HAP signature fails to be verified.
     * @throws { BusinessError } 17700012 - Failed to install the HAP because the HAP path is invalid or the HAP is too
     *     large.
     * @throws { BusinessError } 17700015 - Failed to install the HAPs because they have different configuration
     *     information.
     * @throws { BusinessError } 17700016 - Failed to install the HAP because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the HAP since the version of the HAP to install is too
     *     early.
     * @throws { BusinessError } 17700018 - Failed to install because the dependent module does not exist.
     * @throws { BusinessError } 17700039 - Failed to install because disallow install a shared bundle by hapFilePaths.
     * @throws { BusinessError } 17700041 - Failed to install because enterprise device management disallow install.
     * @throws { BusinessError } 17700042 - Failed to install the HAP because of incorrect URI in the data proxy.
     * @throws { BusinessError } 17700043 - Failed to install the HAP because of low APL in the non-system data proxy
     *     (required APL: system_basic or system_core).
     * @throws { BusinessError } 17700044 - Failed to install the HAP because the isolationMode configured is not
     *     supported.
     * @throws { BusinessError } 17700047 - Failed to install the HAP because the VersionCode to be updated is not
     *     greater than the current VersionCode.
     * @throws { BusinessError } 17700048 - Failed to install the HAP because the code signature verification is failed.
     * @throws { BusinessError } 17700049 - Failed to install the HAP because the bundleName is different from the
     *     bundleName of the caller application.
     * @throws { BusinessError } 17700050 - Failed to install the HAP because enterprise normal/MDM bundle cannot be
     *     installed on non-enterprise device.
     * @throws { BusinessError } 17700051 - Failed to install the HAP because the distribution type of caller
     *     application is not enterprise_mdm.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    updateBundleForSelf(hapFilePaths: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * Updates the current bundle. This API can be called only by enterprise MDM applications on enterprise devices, and
     * the HAPs in **hapFilePaths** must belong to the current application. This API uses a promise to return the
     * result.
     *
     * @permission ohos.permission.INSTALL_SELF_BUNDLE
     * @param { Array<string> } hapFilePaths - Paths where the HAP files of the bundle are stored, which are the data
     *     directories. If only one directory is passed, the HAP files in the directory must belong to the same bundle
     *     and have the same signature.
     * @param { InstallParam } installParam - Parameters required for the installation. For details about their default
     *     values, see [InstallParam]{@link installer.InstallParam}.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_SELF_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter hapFiles is needed for code signature;
     *     4. The size of specifiedDistributionType is greater than 128; 5. The size of additionalInfo is greater than 3
     *     000.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700010 - Failed to install the HAP because the HAP fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the HAP because the HAP signature fails to be verified.
     * @throws { BusinessError } 17700012 - Failed to install the HAP because the HAP path is invalid or the HAP is too
     *     large.
     * @throws { BusinessError } 17700015 - Failed to install the HAPs because they have different configuration
     *     information.
     * @throws { BusinessError } 17700016 - Failed to install the HAP because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the HAP since the version of the HAP to install is too
     *     early.
     * @throws { BusinessError } 17700018 - Failed to install because the dependent module does not exist.
     * @throws { BusinessError } 17700039 - Failed to install because disallow install a shared bundle by hapFilePaths.
     * @throws { BusinessError } 17700041 - Failed to install because enterprise device management disallow install.
     * @throws { BusinessError } 17700042 - Failed to install the HAP because of incorrect URI in the data proxy.
     * @throws { BusinessError } 17700043 - Failed to install the HAP because of low APL in the non-system data proxy
     *     (required APL: system_basic or system_core).
     * @throws { BusinessError } 17700044 - Failed to install the HAP because the isolationMode configured is not
     *     supported.
     * @throws { BusinessError } 17700047 - Failed to install the HAP because the VersionCode to be updated is not
     *     greater than the current VersionCode.
     * @throws { BusinessError } 17700048 - Failed to install the HAP because the code signature verification is failed.
     * @throws { BusinessError } 17700049 - Failed to install the HAP because the bundleName is different from the
     *     bundleName of the caller application.
     * @throws { BusinessError } 17700050 - Failed to install the HAP because enterprise normal/MDM bundle cannot be
     *     installed on non-enterprise device.
     * @throws { BusinessError } 17700051 - Failed to install the HAP because the distribution type of caller
     *     application is not enterprise_mdm.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    updateBundleForSelf(hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>;

    /**
     * Uninstalls and updates a preinstalled application and restores it to the initial installation status. This API
     * uses a promise to return the result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - Name of the target bundle.
     * @param { InstallParam } installParam - Parameters required for the uninstall and update. For details about their
     *     default values, see [InstallParam]{@link installer.InstallParam}. The **userId** parameter cannot be
     *     specified. Calling this API will uninstall and update the application for all users.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700045 - Failed to uninstall because enterprise device management disallow uninstall.
     * @throws { BusinessError } 17700057 - Failed to uninstall updates because the HAP is not pre-installed.
     * @throws { BusinessError } 17700060 - The specified application cannot be uninstalled. [since 13]
     * @throws { BusinessError } 17700067 - Failed to uninstall the HAP because uninstalling the native package
     *     failed. [since 13]
     * @throws { BusinessError } 17700073 - Failed to install the HAP because an application with the same
     *     <br>bundle name but different signature information exists on the device. [since 13]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    uninstallUpdates(bundleName: string, installParam?: InstallParam): Promise<void>;

    /**
     * Adds extended resources based on the specified bundle name and HSP file path. This API uses a promise to return
     * the result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Bundle name of the application to which extended resources are to be added.
     * @param { Array<string> } filePaths - Path of the extended resources to be added.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundleName is not found.
     * @throws { BusinessError } 17700301 - AddExtResource failed due to parse file failed.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    addExtResource(bundleName: string, filePaths: Array<string>): Promise<void>;

    /**
     * Removes extended resources based on the specified bundle name and module names. This API uses a promise to return
     * the result.
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - Bundle name of the application for which extended resources are to be removed.
     * @param { Array<string> } moduleNames - Names of the modules whose extended resources are to be removed.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundleName is not found.
     * @throws { BusinessError } 17700302 - RemoveExtResource failed due to module does not exist.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    removeExtResource(bundleName: string, moduleNames: Array<string>): Promise<void>;

    /**
     * Creates an application clone. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INSTALL_CLONE_BUNDLE
     * @param { string } bundleName - Bundle name of the application for which a clone is to be created.
     * @param { CreateAppCloneParam } [createAppCloneParam] - Other parameters required for creating the clone. For
     *     details about the default values of these parameters, see
     *     [createAppCloneParam]{@link installer.CreateAppCloneParam}.
     * @returns { Promise<int> } Promise used to return the index of the application clone.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_CLONE_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundleName cannot be found or the bundle is not installed by
     *     the specified user.
     * @throws { BusinessError } 17700004 - The userId is invalid.
     * @throws { BusinessError } 17700061 - The appIndex is not in valid range or already exists.
     * @throws { BusinessError } 17700069 - The app does not support the creation of an appClone instance.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    createAppClone(bundleName: string, createAppCloneParam?: CreateAppCloneParam): Promise<int>;

    /**
     * Destroys an application clone. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UNINSTALL_CLONE_BUNDLE
     * @param { string } bundleName - Bundle name of the application for which a clone is to be destroyed.
     * @param { number } appIndex - Index of the clone to destroy.
     * @param { number } [userId] - ID of the user for whom the clone is to be destroyed. You can obtain the user ID by
     *     calling
     *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     *     . The default value is the user ID of the caller.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.UNINSTALL_CLONE_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundleName cannot be found or the bundle is not installed by
     *     the specified user.
     * @throws { BusinessError } 17700004 - The userId is invalid.
     * @throws { BusinessError } 17700061 - AppIndex not in valid range.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     */
    destroyAppClone(bundleName: string, appIndex: number, userId?: number): Promise<void>;

    /**
     * Destroys an application clone. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UNINSTALL_CLONE_BUNDLE
     * @param { string } bundleName - Bundle name of the application for which a clone is to be destroyed.
     * @param { number } appIndex - Index of the clone to destroy.
     * @param { DestroyAppCloneParam } [destroyAppCloneParam] - Other parameters required for destroying the clone. For
     *     details about the default values of these parameters, see
     *     [DestroyAppCloneParam]{@link installer.DestroyAppCloneParam}.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.UNINSTALL_CLONE_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundleName cannot be found or the bundle is not installed by
     *     the specified user.
     * @throws { BusinessError } 17700004 - The userId is invalid.
     * @throws { BusinessError } 17700061 - AppIndex not in valid range.
     * @throws { BusinessError } 17700062 - Failed to uninstall the app because the app is locked.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     */
    destroyAppClone(bundleName: string, appIndex: number, destroyAppCloneParam?: DestroyAppCloneParam): Promise<void>;

    /**
     * Destroy clone instance for an application.
     *
     * @permission ohos.permission.UNINSTALL_CLONE_BUNDLE
     * @param { string } bundleName - Indicates the bundleName of clone app.
     * @param { int } appIndex - Indicates the clone application's index.
     * @param { int | DestroyAppCloneParam } [options] - Indicates other parameters required for the uninstallation.
     * @returns { Promise<void> }
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.UNINSTALL_CLONE_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 17700001 - The specified bundleName cannot be found or the bundle is not installed by
     *     the specified user.
     * @throws { BusinessError } 17700004 - The userId is invalid.
     * @throws { BusinessError } 17700061 - AppIndex not in valid range.
     * @throws { BusinessError } 17700062 - Failed to uninstall the app because the app is locked.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 23 static
     */
    destroyAppClone(bundleName: string, appIndex: int, options?: int | DestroyAppCloneParam): Promise<void>;

    /**
     * Installs an application. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > This API does not support the installation of applications whose
     * > [distribution type of the application signing certificate]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}
     * > is set to **enterprise**, **enterprise_mdm**, or **enterprise_normal**.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Bundle name of the application to install.
     * @param { int } [userId] - ID of the user for whom the bundle is to be installed. You can obtain the user ID by
     *     calling
     *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     *     . The value must be greater than 0. The default value is the user ID of the caller.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @throws { BusinessError } 17700001 - The specified bundleName cannot be found or the bundle is not installed by
     *     the specified user.
     * @throws { BusinessError } 17700004 - The userId is invalid.
     * @throws { BusinessError } 17700071 - It is not allowed to install the enterprise bundle.
     * @throws { BusinessError } 17700058 - Failed to install the HAP because this application is prohibited
     *     <br>from being installed on this device or by specified users. [since 14]
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    installPreexistingApp(bundleName: string, userId?: int): Promise<void>;

    /**
     * Installs a plugin for an application. This API uses a promise to return the result.
     *
     * @permission ohos.permission.INSTALL_PLUGIN_BUNDLE
     * @param { string } hostBundleName - Bundle name of the application for which the plugin is to be installed.
     * @param { Array<string> } pluginFilePaths - Paths where the plugin package files are stored. If multiple file
     *     paths or a directory is provided, ensure that these files are HSPs of the same plugin program and their
     *     signatures are consistent.
     * @param { PluginParam } [pluginParam] - Parameters required for installing the plugin. For details about the
     *     default value, see [PluginParam]{@link installer.PluginParam}.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_PLUGIN_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 17700001 - The specified hostBundleName cannot be found or the bundle is not installed
     *     by the specified user.
     * @throws { BusinessError } 17700004 - The userId is invalid.
     * @throws { BusinessError } 17700010 - Failed to install the plugin because the plugin fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the plugin because the plugin signature fails to be
     *     verified.
     * @throws { BusinessError } 17700012 - Failed to install the plugin because the HSP path is invalid or the HSP is
     *     too large.
     * @throws { BusinessError } 17700015 - Failed to install the plugin because they have different configuration
     *     information.
     * @throws { BusinessError } 17700016 - Failed to install the plugin because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the plugin since the version of the plugin to install is
     *     too early.
     * @throws { BusinessError } 17700048 - Failed to install the plugin because the code signature verification is
     *     failed.
     * @throws { BusinessError } 17700052 - Failed to install the plugin because debug bundle cannot be installed under
     *     non-developer mode.
     * @throws { BusinessError } 17700073 - Failed to install the plugin because a plugin with the same
     *     <br>bundle name but different signature information exists on the device.
     * @throws { BusinessError } 17700087 - Failed to install the plugin because the current device does not support
     *     plugin.
     * @throws { BusinessError } 17700088 - Failed to install the plugin because the host application lacks
     *     ohos.permission.kernel.SUPPORT_PLUGIN.
     * @throws { BusinessError } 17700089 - Failed to install the plugin because the plugin id fails to be parsed.
     * @throws { BusinessError } 17700090 - Failed to install the plugin because the plugin id fails to be verified.
     * @throws { BusinessError } 17700091 - Failed to install the plugin because the plugin name is same as host bundle
     *     name.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    installPlugin(hostBundleName: string, pluginFilePaths: Array<string>, pluginParam?: PluginParam): Promise<void>;

    /**
     * Uninstalls a plugin for an application. This API uses a promise to return the result.
     *
     * @permission ohos.permission.UNINSTALL_PLUGIN_BUNDLE
     * @param { string } hostBundleName - Bundle name of the application for which the plugin is to be uninstalled.
     * @param { string } pluginBundleName - Bundle name of the plugin.
     * @param { PluginParam } [pluginParam] - Parameters required for uninstalling the plugin. For details about the
     *     default value, see [PluginParam]{@link installer.PluginParam}.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.UNINSTALL_PLUGIN_BUNDLE'.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The user id is invalid.
     * @throws { BusinessError } 17700092 - Failed to uninstall the plugin because the specified plugin is not found.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    uninstallPlugin(hostBundleName: string, pluginBundleName: string, pluginParam?: PluginParam): Promise<void>;

    /**
     * Uninstall new preinstalled applications.
     * Only supports uninstalling pre installed applications added during device OTA upgrade. Asynchronous execution of
     * application uninstallation tasks, the interface return value only indicates successful interface invocation
     * and does not return uninstallation results.
     *
     * @permission ohos.permission.UNINSTALL_BUNDLE
     * @param { Array<string> } bundleNames - Indicates the bundle name list to be uninstalled.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    uninstallNewPreinstalledApps(bundleNames: Array<string>): Promise<void>;
  }

  /**
   * Defines the hash parameters for bundle installation and uninstall.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface HashParam {
    /**
     * Module name of the bundle.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * Hash value.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    hashValue: string;
  }

  /**
   * Defines the information about the code signature file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 11
   */
  export interface VerifyCodeParam {
    /**
     * Module name of the bundle.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    moduleName: string;

    /**
     * Path of the code signature file.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    signatureFilePath: string;
  }

  /**
   * Defines the parameters of the PGO configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface PGOParam {
    /**
     * Module name of the bundle.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * Path of the PGO configuration file.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    pgoFilePath: string;
  }

  /**
   * Describes the extended parameter information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export interface Parameters {
    /**
     * Key of an extended parameter.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    key: string;

    /**
     * Value of the extended parameter.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    value: string;
  }

  /**
   * Defines the parameters that need to be specified for bundle installation, uninstall, or recovering.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface InstallParam {
    /**
     * User ID. The default value is the user ID of the caller. The value must be greater than or equal to 0. You can
     * call
     * [queryOsAccountLocalIdFromProcess]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     * to obtain the user ID of the current process. When a driver application is installed, uninstalled, or restored,
     * this parameter is ignored and the operation is executed for all users.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    userId?: int;

    /**
     * Installation flag. The value **0x00** means initial installation, **0x01** means overwrite installation, and
     * **0x10** means installation-free. The default value is **0x00**.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    installFlag?: int;

    /**
     * Whether to retain the data directory during bundle uninstall. The default value is **false**. **true** to retain,
     * **false** otherwise.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    isKeepData?: boolean;

    /**
     * Hash parameters. By default, no value is passed.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    hashParams?: Array<HashParam>;

    /**
     * End date of crowdtesting. The default value is **-1**, indicating that no end date is specified for crowdtesting.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    crowdtestDeadline?: long;

    /**
     * Paths of the shared bundle files. By default, no value is passed.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    sharedBundleDirPaths?: Array<string>;

    /**
     * [Distribution type](docroot://security/app-provision-structure.md) specified during application installation. By
     * default, no value is passed. The maximum length is 128 bytes. This field is usually specified by the application
     * market of the operating system operator.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    specifiedDistributionType?: string;

    /**
     * Additional information during application installation (usually an enterprise application). By default, no value
     * is passed. The maximum length is 3,000 bytes. This field is usually specified by the application market of the
     * operating system operator.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    additionalInfo?: string;

    /**
     * Information about the code signature file. The default value is null.
     *
     * **NOTE**
     *
     * Starting from API version 10, the code signature file of an application is integrated into the installation
     * package, rather than being specified by using this field. This field is deprecated since API version 11.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    verifyCodeParams?: Array<VerifyCodeParam>;

    /**
     * Parameters of the Profile-guided Optimization (PGO) configuration file. The default value is null.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    pgoParams?: Array<PGOParam>;

    /**
     * Extended parameters, represented as an array of the Parameters type. The default value is empty. The options of
     * **Parameters.key** are as follows:
     *
     * - **ohos.bms.param.renameInstall**: If the value is **true**, the installation package is moved from the
     * application sandbox to the installation directory using a shared directory. Otherwise, it is copied from the
     * application sandbox to the installation directory using a regular directory.
     * - **ohos.bms.param.enterpriseForAllUser**: If the value is **true**, the enterprise app is installed for all
     * users. This parameter takes effect only for applications whose
     * [distribution type of the application signing certificate]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}
     * is **enterprise_mdm** or **enterprise_normal**.
     * - **ohos.bms.param.verifyUninstallRule**: If the value is **true**, an uninstallation handling rule is set to
     * block application uninstallation.
     * - **ohos.bms.param.enterpriseManifest**: The value is the sandbox path of the JSON file used to store the
     * application's manifest, including the bundle name. It is used in the scenario of cloning enterprise applications.
     * If this JSON file exists during cloning, the application package from the old device is copied to the new device
     * for installation.
     * - **ohos.bms.param.installBundleName**: The value is the bundle name of the application. It is used in
     * application installation scenarios and supported since API version 23. If this field is passed during
     * installation, the [getBundleInstallStatus]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInstallStatus}
     * API can be called to obtain the installation status of the application.
     * - **ohos.bms.param.installAllowDowngrade**: If the value is **true**, the application can be installed in
     * downgrade mode (supported since API version 23). That is, if a higher version of the application is already
     * installed on the device, a lower version can be installed over it. Only third-party applications with the signing
     * certificate distribution type set to **app_gallery** or the signing certificate type set to **debug** support
     * downgrade installation. To use downgrade installation, you must request the ohos.permission.INSTALL_BUNDLE and
     * ohos.permission.INSTALL_ALLOW_DOWNGRADE permissions.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    parameters?: Array<Parameters>;
  }

  /**
   * Defines the parameters required for the uninstall of a shared bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface UninstallParam {
    /**
     * Name of the shared bundle.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Version number of the shared bundle. By default, no value is passed, and all shared bundles of the specified name
     * are uninstalled.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    versionCode?: int;
  }

  /**
   * Describes the parameters used for creating an application clone.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export interface CreateAppCloneParam {
    /**
     * ID of the user for whom the clone is to be created. You can obtain the user ID by calling
     * [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     * . The default value is the user ID of the caller.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    userId?: int;
    /**
     * Index of the clone. The default value is the currently available minimum index.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appIndex?: int;
  }

  /**
   * Describes the parameters used for destroying an application clone.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export interface DestroyAppCloneParam {
    /**
     * ID of the user for whom the clone is to be destroyed. You can obtain the user ID by calling
     * [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     * . The default value is the user ID of the caller.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    userId?: int;
    /**
     * Extended parameters, represented as an array of the Parameters type. The default value is empty. The options of
     * **Parameters.key** are as follows:
     *
     * - **ohos.bms.param.renameInstall**: If the value is **true**, the installation package is moved from the
     * application sandbox to the installation directory using a shared directory. Otherwise, it is copied from the
     * application sandbox to the installation directory using a regular directory.
     * - **ohos.bms.param.enterpriseForAllUser**: If the value is **true**, the enterprise app is installed for all
     * users. This parameter takes effect only for applications whose
     * [distribution type of the application signing certificate]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}
     * is **enterprise_mdm** or **enterprise_normal**.
     * - **ohos.bms.param.verifyUninstallRule**: If the value is **true**, an uninstallation handling rule is set to
     * block application uninstallation.
     * - **ohos.bms.param.enterpriseManifest**: The value is the sandbox path of the JSON file used to store the
     * application's manifest, including the bundle name. It is used in the scenario of cloning enterprise applications.
     * If this JSON file exists during cloning, the application package from the old device is copied to the new device
     * for installation.
     * - **ohos.bms.param.installBundleName**: The value is the bundle name of the application. It is used in
     * application installation scenarios and supported since API version 23. If this field is passed during
     * installation, the [getBundleInstallStatus]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInstallStatus}
     * API can be called to obtain the installation status of the application.
     * - **ohos.bms.param.installAllowDowngrade**: If the value is **true**, the application can be installed in
     * downgrade mode (supported since API version 23). That is, if a higher version of the application is already
     * installed on the device, a lower version can be installed over it. Only third-party applications with the signing
     * certificate distribution type set to **app_gallery** or the signing certificate type set to **debug** support
     * downgrade installation. To use downgrade installation, you must request the ohos.permission.INSTALL_BUNDLE and
     * ohos.permission.INSTALL_ALLOW_DOWNGRADE permissions.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    parameters?: Array<Parameters>;
  }

  /**
   * Defines the parameters for installing or uninstalling a plugin.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  export interface PluginParam {
    /**
     * ID of the user for whom the plugin is to be installed or uninstalled. You can obtain the user ID by calling
     * [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     * . The default value is the user ID of the caller.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    userId?: int;

    /**
     * Extension parameters for installing or uninstalling the plugin. The default value is empty.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    parameters?: Array<Parameters>;
  }
}

export default installer;