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
 * The module provides APIs for you to install, uninstall, and recover bundles on devices.
 * 
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use 
 * > [@ohos.bundle.installer.install]{@link ./../@ohos.bundle.installer:installer} instead.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from './../@ohos.base';
import bundle from './../@ohos.bundle';

/**
 * > **NOTE**
 * >
 * > This API has been supported since API version 7 and deprecated since API version 9. You are advised to use
 * > [InstallParam]{@link ./../@ohos.bundle.installer:installer.InstallParam} instead.
 *
 * Describes the parameters required for bundle installation, recovery, or uninstall.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ./../@ohos.bundle.installer:installer.InstallParam
 */
export interface InstallParam {
  /**
   * User ID. The default value is the user ID of the caller.
   *
   * @default Indicates the user id
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.installer.InstallParam#userId
   */
  userId: number;

  /**
   * Installation flag.
   *
   * The value can be:
   *
   * **1** (default): overwrite installation.
   *
   * **16**: installation-free.
   *
   * @default Indicates the install flag
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.installer.InstallParam#installFlag
   */
  installFlag: number;

  /**
   * Whether to retain the bundle data when the application is uninstalled. The default value is **false**. **true** to
   * retain, **false** otherwise.
   *
   * @default Indicates whether the param has data
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.installer.InstallParam#isKeepData
   */
  isKeepData: boolean;
}

/**
 * Describes the bundle installation or uninstall status.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 */
export interface InstallStatus {
  /**
   * Installation or uninstall error code. The value must be defined in
   * [InstallErrorCode]{@link ./../@ohos.bundle:bundle.InstallErrorCode}.
   *
   * @default Indicates the install or uninstall error code
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  status: bundle.InstallErrorCode;

  /**
   * Installation or uninstall status message.
   *
   * **SUCCESS**: Installation succeeded.
   *
   * **STATUS_INSTALL_FAILURE**: Installation failed (no installation file exists).
   *
   * **STATUS_INSTALL_FAILURE_ABORTED**: Installation aborted.
   *
   * **STATUS_INSTALL_FAILURE_INVALID**: Invalid installation parameter.
   *
   * **STATUS_INSTALL_FAILURE_CONFLICT**: Installation conflict. (The basic information of the application to update is
   * inconsistent with that of the existing application.)
   *
   * **STATUS_INSTALL_FAILURE_STORAGE**: Failed to store the bundle information.
   *
   * **STATUS_INSTALL_FAILURE_INCOMPATIBLE**: Installation incompatibility. (A downgrade occurs or the signature
   * information is incorrect.)
   *
   * **STATUS_UNINSTALL_FAILURE**: Uninstallation failed. (The application to be uninstalled is not found.)
   *
   * **STATUS_UNINSTALL_FAILURE_ABORTED**: Uninstallation aborted. (This error code is not in use.)
   *
   * **STATUS_UNINSTALL_FAILURE_ABORTED**: Uninstallation conflict. (Failed to uninstall a system application or end the
   * application process.)
   *
   * **STATUS_INSTALL_FAILURE_DOWNLOAD_TIMEOUT**: Installation failed. (Download timed out.)
   *
   * **STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED**: Installation failed. (Download failed.)
   *
   * **STATUS_RECOVER_FAILURE_INVALID**: Failed to restore the pre-installed application.
   *
   * **STATUS_ABILITY_NOT_FOUND**: Ability not found.
   *
   * **STATUS_BMS_SERVICE_ERROR**: BMS service error.
   *
   * **STATUS_FAILED_NO_SPACE_LEFT**: Insufficient device space.
   *
   * **STATUS_GRANT_REQUEST_PERMISSIONS_FAILED**: Application authorization failed.
   *
   * **STATUS_INSTALL_PERMISSION_DENIED**: No installation permission.
   *
   * **STATUS_UNINSTALL_PERMISSION_DENIED**: No uninstallation permission.
   *
   * @default Indicates the install or uninstall result string message
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  statusMessage: string;
}

/**
 * The module provides APIs for you to install, uninstall, and recover bundles on devices.
 *
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use
 * > [@ohos.bundle.installer.install]{@link ./../@ohos.bundle.installer:installer} instead.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.bundle.installer#BundleInstaller
 */
export interface BundleInstaller {

    /**
     * Install an application in a HAP.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { Array<string> } bundleFilePaths - Sandbox path where the HAP files of the bundle are stored.
     * @param { InstallParam } param - Parameters required for bundle installation.
     * @param { AsyncCallback<InstallStatus> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
     *      return the installation status.
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.installer.BundleInstaller#install
     */
    function install(bundleFilePaths: Array<string>, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;

    /**
     * Uninstall an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Bundle name.
     * @param { InstallParam } param - Parameters required for bundle uninstall.
     * @param { AsyncCallback<InstallStatus> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
     *      return the installation status.
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.installer.BundleInstaller#uninstall
     */
    function uninstall(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;

    /**
     * recover an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Bundle name.
     * @param { InstallParam } param - Parameters required for bundle recovery.
     * @param { AsyncCallback<InstallStatus> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
     *      return the installation status.
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @systemapi Hide this for inner system use
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.installer.BundleInstaller#recover
     */
    function recover(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;
}