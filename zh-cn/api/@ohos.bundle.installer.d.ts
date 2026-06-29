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
 * 在设备上安装、升级和卸载应用。
 * 
 * > **说明：**
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace installer {
  /**
   * 获取BundleInstaller对象。使用callback异步回调。
   *
   * @param { AsyncCallback<BundleInstaller> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，获取BundleInstaller对象，err
   *     为undefined，data为获取到的BundleInstaller对象；否则为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void;

  /**
   * 获取BundleInstaller对象。使用Promise异步回调。
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
   * 获取并返回BundleInstaller对象。
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
     * 安装指定应用。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 安装不同分发类型的应用需要申请相应的权限，分发类型可以参考[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}中的
     * > appDistributionType字段说明。
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
     * @param { Array<string> } hapFilePaths - 存储应用程序包的路径。路径应该是当前应用程序中存放HAP的数据目录。当传入的路径是一个目录时， 该目录下只能放同一个应用的HAP，且这些HAP的签
     *     名需要保持一致。
     * @param { InstallParam } installParam - 指定安装所需的其他参数。
     * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，安装应用成功，err为undefined，否则为错误对象。
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
     * 安装指定应用。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 安装不同分发类型的应用需要申请相应的权限，分发类型可以参考[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}中的
     * > appDistributionType字段说明。
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
     * @param { Array<string> } hapFilePaths - 存储应用程序包的路径。路径应该是当前应用程序中存放HAP的数据目录。当传入的路径是一个目录时， 该目录下只能放同一个应用的HAP，且这些HAP的签
     *     名需要保持一致。
     * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，安装应用成功，err为undefined，否则为错误对象。
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
     * 安装指定应用。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 安装不同分发类型的应用需要申请相应的权限，分发类型可以参考[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}中的
     * > appDistributionType字段说明。
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
     * @param { Array<string> } hapFilePaths - 存储应用程序包的路径。路径应该是当前应用程序中存放HAP的数据目录。当传入的路径是一个目录时， 该目录下只能放同一个应用的HAP，且这些HAP的签
     *     名需要保持一致。
     * @param { InstallParam } installParam - 指定安装所需的其他参数，默认值：参照[InstallParam]{@link installer.InstallParam}的默认值
     *     。 [since 9 - 11]
     * @param { InstallParam } [installParam] - 指定安装所需的其他参数，默认值：参照[InstallParam]{@link installer.InstallParam}的默认值
     *     。 [since 12]
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 卸载应用。使用callback异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - 待卸载应用的包名。
     * @param { InstallParam } installParam - 指定安装所需的其他参数。
     * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，卸载应用成功，err为undefined，否则为错误对象。
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
     * 卸载应用。使用callback异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - 待卸载应用的包名。
     * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，卸载应用成功，err为undefined，否则为错误对象。
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
     * 卸载应用。使用Promise异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - 待卸载应用的包名。
     * @param { InstallParam } installParam - 指定安装所需的其他参数，默认值：参照[InstallParam]{@link installer.InstallParam}的默认值
     *     。 [since 9 - 14]
     * @param { InstallParam } [installParam] - 指定安装所需的其他参数，默认值：参照[InstallParam]{@link installer.InstallParam}的默认值
     *     。 [since 15]
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 回滚应用到初次安装时的状态。使用callback异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.RECOVER_BUNDLE
     * @param { string } bundleName - 待恢复应用的包名。
     * @param { InstallParam } installParam - 指定安装所需的其他参数。
     * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，回滚应用成功，err为undefined，否则为错误对象。
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
     * 回滚应用到初次安装时的状态。使用callback异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.RECOVER_BUNDLE
     * @param { string } bundleName - 待恢复应用的包名。
     * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，回滚应用成功，err为undefined，否则为错误对象。
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
     * 回滚应用到初次安装时的状态。使用Promise异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.RECOVER_BUNDLE
     * @param { string } bundleName - 待卸载应用的包名。
     * @param { InstallParam } installParam - 指定安装所需的其他参数，默认值：参照[InstallParam]{@link installer.InstallParam}的默认值。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 卸载一个共享包。使用callback异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { UninstallParam } uninstallParam - 共享包卸载需指定的参数信息。
     * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，卸载应用成功，err为undefined，否则为错误对象。
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
     * 卸载一个共享包。使用Promise异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { UninstallParam } uninstallParam - 共享包卸载需指定的参数信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 更新当前应用，仅限企业设备上的企业MDM应用调用，且传入的hapFilePaths中的hap必须都属于当前应用。使用callback异步回调。
     *
     * @permission ohos.permission.INSTALL_SELF_BUNDLE
     * @param { Array<string> } hapFilePaths - 存储应用程序包的路径。路径应该是当前应用程序中存放HAP的数据目录。当传入的路径是一个目录时， 该目录下只能放同一个应用的HAP，且这些HAP的签
     *     名需要保持一致。
     * @param { InstallParam } installParam - 指定安装所需的其他参数。
     * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，安装应用成功，err为undefined，否则为错误对象。
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
     * 更新当前应用，仅限企业设备上的企业MDM应用调用，且传入的hapFilePaths中的hap必须都属于当前应用。使用callback异步回调。
     *
     * @permission ohos.permission.INSTALL_SELF_BUNDLE
     * @param { Array<string> } hapFilePaths - 存储应用程序包的路径。路径应该是当前应用程序中存放HAP的数据目录。当传入的路径是一个目录时， 该目录下只能放同一个应用的HAP，且这些HAP的签
     *     名需要保持一致。
     * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，安装应用成功，err为undefined，否则为错误对象。
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
     * 更新当前应用，仅限企业设备上的企业MDM应用调用，且传入的hapFilePaths中的hap必须都属于当前应用。使用Promise异步回调。
     *
     * @permission ohos.permission.INSTALL_SELF_BUNDLE
     * @param { Array<string> } hapFilePaths - 存储应用程序包的路径。路径应该是当前应用程序中存放HAP的数据目录。当传入的路径是一个目录时， 该目录下只能放同一个应用的HAP，且这些HAP的签
     *     名需要保持一致。
     * @param { InstallParam } installParam - 指定安装所需的其他参数，默认值：参照[InstallParam]{@link installer.InstallParam}的默认值。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 对预置应用进行卸载更新，恢复到初次安装时的状态。使用Promise异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - 待卸载更新应用的包名。
     * @param { InstallParam } installParam - 指定卸载更新所需的其他参数，默认值：参照[InstallParam]{@link installer.InstallParam}的默认值。其中
     *     userId无法指定，调用本接口将对所有已安装相应应用的用户进行卸载更新操作。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 根据给定的bundleName和hsp文件路径添加扩展资源。使用Promise异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - 要添加扩展资源的应用名称。
     * @param { Array<string> } filePaths - 要添加扩展资源的资源路径。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 根据给定的bundleName和moduleNames删除扩展资源。使用Promise异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE or ohos.permission.UNINSTALL_BUNDLE
     * @param { string } bundleName - 要删除扩展资源的应用名称。
     * @param { Array<string> } moduleNames - 要删除扩展资源的moduleNames。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 创建应用分身。使用Promise异步回调。
     *
     * @permission ohos.permission.INSTALL_CLONE_BUNDLE
     * @param { string } bundleName - 待创建应用分身的包名。
     * @param { CreateAppCloneParam } [createAppCloneParam] - 指定创建应用分身所需的其他参数，默认值：参照
     *     [createAppCloneParam]{@link installer.CreateAppCloneParam}的默认值。
     * @returns { Promise<int> } Promise对象。返回创建的分身应用索引值。
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
     * 删除应用分身。使用Promise异步回调。
     *
     * @permission ohos.permission.UNINSTALL_CLONE_BUNDLE
     * @param { string } bundleName - 待删除应用分身的包名。
     * @param { number } appIndex - 待删除应用分身的索引。
     * @param { number } [userId] - 待删除应用分身所属用户ID，可以通过
     *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     *     获取。默认值：调用方所在用户。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 删除应用分身。使用Promise异步回调。
     *
     * @permission ohos.permission.UNINSTALL_CLONE_BUNDLE
     * @param { string } bundleName - 待删除应用分身的包名。
     * @param { number } appIndex - 待删除应用分身的索引。
     * @param { DestroyAppCloneParam } [destroyAppCloneParam] - 指定删除应用分身所需的其他参数，默认值：参照
     *     [DestroyAppCloneParam]{@link installer.DestroyAppCloneParam}的默认值。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 在指定用户下安装指定bundleName的应用。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 该接口不支持安装[签名证书的分发类型]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}为enterprise，enterprise_mdm和
     * > enterprise_normal的应用。
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - 需要安装应用的包名。
     * @param { int } [userId] - 需要安装应用的用户ID，可以通过
     *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     *     获取，userId需要大于0。默认值：调用方所在用户。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 应用安装插件。使用Promise异步回调。
     *
     * @permission ohos.permission.INSTALL_PLUGIN_BUNDLE
     * @param { string } hostBundleName - 待安装插件的应用包名。
     * @param { Array<string> } pluginFilePaths - 存储插件程序包的路径。当传入多个文件路径或者一个目录时，需确保这些文件是同一插件程序的HSP，且这些HSP的签名需要保持一致。
     * @param { PluginParam } [pluginParam] - 指定安装插件所需的参数，默认值：参照 [PluginParam]{@link installer.PluginParam} 的默认值。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 应用卸载插件。使用Promise异步回调。
     *
     * @permission ohos.permission.UNINSTALL_PLUGIN_BUNDLE
     * @param { string } hostBundleName - 待卸载插件的应用包名。
     * @param { string } pluginBundleName - 插件的包名。
     * @param { PluginParam } [pluginParam] - 指定卸载插件所需的参数，默认值：参照 [PluginParam]{@link installer.PluginParam} 的默认值。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 批量卸载新增的预置应用。使用Promise异步回调。
     *
     * @permission ohos.permission.UNINSTALL_BUNDLE
     * @param { Array<string> } bundleNames - 待卸载的应用的包名列表。
     * @returns { Promise<void> } Promise对象。无返回结果。
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
   * 应用程序安装卸载哈希参数信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface HashParam {
    /**
     * 应用程序模块名称。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * 哈希值。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    hashValue: string;
  }

  /**
   * 应用程序代码签名文件信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamiconly
   * @deprecated since 11
   */
  export interface VerifyCodeParam {
    /**
     * 应用程序模块名称。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    moduleName: string;

    /**
     * 代码签名文件路径。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    signatureFilePath: string;
  }

  /**
   * PGO（Profile-guided Optimization）配置文件参数信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface PGOParam {
    /**
     * 应用程序模块名称。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * PGO配置文件路径。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    pgoFilePath: string;
  }

  /**
   * 扩展参数信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export interface Parameters {
    /**
     * 扩展参数键。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    key: string;

    /**
     * 扩展参数值。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    value: string;
  }

  /**
   * 应用程序安装、卸载或恢复需指定的参数信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface InstallParam {
    /**
     * 指示用户id，默认值：调用方所在用户，取值范围：大于等于0，可使用
     * [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     * 获取当前进程所在用户。当安装、卸载或恢复一个驱动应用时，该参数会被忽略，会在所有用户下执行。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    userId?: int;

    /**
     * 指示安装标志，枚举值：0x00：应用初次安装，0x01：应用覆盖安装，0x10：应用免安装，默认值为应用初次安装。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    installFlag?: int;

    /**
     * 卸载时是否保留数据目录，默认值为false。true表示卸载时保留数据目录，false表示卸载时不保留数据目录。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    isKeepData?: boolean;

    /**
     * 哈希值参数，默认值为空。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    hashParams?: Array<HashParam>;

    /**
     * 众测活动的截止日期，默认值为-1，表示无截止日期约束，单位：秒。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    crowdtestDeadline?: long;

    /**
     * 共享包文件所在路径，默认值为空。从API version 24开始，当指定目录时，路径目录下可以存在多个同包名、不同模块名的HSP。API version 23及之前版本，路径目录下只能存在一个HSP。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    sharedBundleDirPaths?: Array<string>;

    /**
     * 应用安装时指定的[分发类型](docroot://security/app-provision-structure.md)，默认值为空，最大长度为128字节。该字段通常由操作系统运营方的应用市场指定。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    specifiedDistributionType?: string;

    /**
     * 应用安装时的额外信息，默认值为空，最大长度为3000字节。该字段通常由操作系统运营方的应用市场在安装企业应用时指定，用于保存应用的额外信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    additionalInfo?: string;

    /**
     * 代码签名文件参数，默认值为空。
     * 
     * **说明：**
     * 
     * 从API version 10开始支持，从API version 11开始不再维护，应用的代码签名文件将集成到安装包中，不再需要通过本接口指定安装包的代码签名文件。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     */
    verifyCodeParams?: Array<VerifyCodeParam>;

    /**
     * PGO配置文件参数，默认值为空。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    pgoParams?: Array<PGOParam>;

    /**
     * 扩展参数，Parameters类型的数组，默认值为空。Parameters.key取值支持：</br> - "ohos.bms.param.renameInstall"：若对应value值为“true”，表示安装时使用共享目录
     * 将安装包从应用沙箱移动到安装目录，否则使用常规目录将安装包从应用沙箱拷贝到安装目录。</br> - "ohos.bms.param.enterpriseForAllUser"：若对应value值为“true”，表示在安装企业应
     * 用时为所有用户安装，该参数只对[签名证书的分发类型]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}为enterprise_mdm和
     * enterprise_normal的应用生效。</br> - "ohos.bms.param.verifyUninstallRule"：若对应value值为“true”，表示设置卸载处置规则，用于拦截应用卸载。</br> - 
     * "ohos.bms.param.enterpriseManifest"：value值为json文件的沙箱路径，json文件用于存储应用的描述文件，包括应用包名等，该字段用于企业应用克隆场景。克隆时，若该json文件存在，则将旧
     * 机的应用安装包拷贝到新机进行安装。</br> - "ohos.bms.param.installBundleName"：value值为应用的包名，该字段用于应用安装场景（从API version 23开始支持）。如果安装时传入
     * 了该字段，则在应用安装过程中调用接口[getBundleInstallStatus]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInstallStatus}
     * 能够查询到应用正在安装的状态。</br> - "ohos.bms.param.installAllowDowngrade"：若对应value值为“true”，该字段表示支持应用降级安装（从API version 23开始支持）
     * ，即设备已安装较高版本的应用，也可以覆盖安装较低版本的应用。仅支持签名证书分发类型为app_gallery或者签名证书类型为debug的三方应用降级安装。使用降级安装能力需要同时申请
     * ohos.permission.INSTALL_BUNDLE和ohos.permission.INSTALL_ALLOW_DOWNGRADE权限。</br> - "
     * ohos.bms.param.originalInstallSource"：用于指定待安装应用的原始安装来源，对应value取值范围为
     * [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}中的installSource字段取值。使用该参数安装的应用，其安装来源
     * installSource会被设置为指定的value值。参数生效条件：待安装应用必须未在设备上安装；当value指定为应用包名时，要求指定的应用必须已安装且为系统应用。从API version 23开始支持。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    parameters?: Array<Parameters>;
  }

  /**
   * 共享包卸载需指定的参数信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface UninstallParam {
    /**
     * 共享包包名。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 指示共享包的版本号。默认值：如果不填写versionCode，则卸载该包名的所有共享包。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    versionCode?: int;
  }

  /**
   * 创建分身应用可指定的参数信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export interface CreateAppCloneParam {
    /**
     * 指定创建分身应用所在的用户ID，可以通过
     * [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     * 获取。默认值：调用方所在用户。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    userId?: int;
    /**
     * 指定创建分身应用的索引值。默认值：当前可用的最小索引值。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    appIndex?: int;
  }

  /**
   * 删除分身应用可指定的参数信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 15 dynamic
   * @since 23 static
   */
  export interface DestroyAppCloneParam {
    /**
     * 指定删除分身应用所在的用户ID，可以通过
     * [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     * 获取。默认值：调用方所在用户。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    userId?: int;
    /**
     * 扩展参数，Parameters类型的数组，默认值为空。Parameters.key取值支持：</br> - "ohos.bms.param.renameInstall"：若对应value值为“true”，表示安装时使用共享目录
     * 将安装包从应用沙箱移动到安装目录，否则使用常规目录将安装包从应用沙箱拷贝到安装目录。</br> - "ohos.bms.param.enterpriseForAllUser"：若对应value值为“true”，表示在安装企业应
     * 用时为所有用户安装，该参数只对[签名证书的分发类型]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}为enterprise_mdm和
     * enterprise_normal的应用生效。</br> - "ohos.bms.param.verifyUninstallRule"：若对应value值为“true”，表示设置卸载处置规则，用于拦截应用卸载。</br> - 
     * "ohos.bms.param.enterpriseManifest"：value值为json文件的沙箱路径，json文件用于存储应用的描述文件，包括应用包名等，该字段用于企业应用克隆场景。克隆时，若该json文件存在，则将旧
     * 机的应用安装包拷贝到新机进行安装。</br> - "ohos.bms.param.installBundleName"：value值为应用的包名，该字段用于应用安装场景（从API version 23开始支持）。如果安装时传入
     * 了该字段，则在应用安装过程中调用接口[getBundleInstallStatus]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInstallStatus}
     * 能够查询到应用正在安装的状态。</br> - "ohos.bms.param.installAllowDowngrade"：若对应value值为“true”，该字段表示支持应用降级安装（从API version 23开始支持）
     * ，即设备已安装较高版本的应用，也可以覆盖安装较低版本的应用。仅支持签名证书分发类型为app_gallery或者签名证书类型为debug的三方应用降级安装。使用降级安装能力需要同时申请
     * ohos.permission.INSTALL_BUNDLE和ohos.permission.INSTALL_ALLOW_DOWNGRADE权限。</br> - "
     * ohos.bms.param.originalInstallSource"：用于指定待安装应用的原始安装来源，对应value取值范围为
     * [ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}中的installSource字段取值。使用该参数安装的应用，其安装来源
     * installSource会被设置为指定的value值。参数生效条件：待安装应用必须未在设备上安装；当value指定为应用包名时，要求指定的应用必须已安装且为系统应用。从API version 23开始支持。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 15 dynamic
     * @since 23 static
     */
    parameters?: Array<Parameters>;
  }

  /**
   * 插件应用安装、卸载的参数信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  export interface PluginParam {
    /**
     * 指定安装、卸载插件程序所在的用户ID，可以通过
     * [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
     * 获取。默认值：调用方所在用户。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    userId?: int;

    /**
     * 指定安装、卸载插件程序的扩展参数，默认值为空。
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