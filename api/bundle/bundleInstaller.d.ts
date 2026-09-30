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
 *
 * @file BundleInstaller
 * @kit AbilityKit
 */

import { AsyncCallback } from './../@ohos.base';
import bundle from './../@ohos.bundle';

/**
 * > **NOTE**
 * >
 * > This API has been supported since API version 7 and deprecated since API version 9. You are advised to use
 * > [InstallParam]{@link @ohos.bundle.installer:installer.InstallParam} instead.
 * > Describes the parameters required for bundle installation, recovery, or uninstall.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.bundle.installer:installer.InstallParam
 */
export interface InstallParam {
  /**
   * User ID. Default value: the userId of the caller.
   *
   * @default Indicates the user id
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.installer:installer.InstallParam.userId
   */
  userId: number;

  /**
   * Install flag. Default value: 1. </br>Value range:</br>1: overwrite installation.</br>16: free installation.
   *
   * @default Indicates the install flag
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.installer:installer.InstallParam.installFlag
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
   * @useinstead @ohos.bundle.installer:installer.InstallParam.isKeepData
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
   * [InstallErrorCode]{@link @ohos.bundle:bundle.InstallErrorCode}.
   *
   * @default Indicates the install or uninstall error code
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  status: bundle.InstallErrorCode;

  /**
   * String result information indicating installation or uninstallation. The value range includes:
   *
   * "SUCCESS" : Installation succeeded.</br> "STATUS_INSTALL_FAILURE": Installation failure (the installation file does
   * not exist).</br> "STATUS_INSTALL_FAILURE_ABORTED": Installation aborted. </br> "STATUS_INSTALL_FAILURE_INVALID":
   * Invalid installation parameter. </br> "STATUS_INSTALL_FAILURE_CONFLICT":  Installation conflict (commonly caused by
   * inconsistent basic information between the upgrade and the existing application). </br> "
   * STATUS_INSTALL_FAILURE_STORAGE": Failed to store the bundle information. </br> "STATUS_INSTALL_FAILURE_INCOMPATIBLE
   * ": Installation incompatible (commonly caused by a downgrade installation or incorrect signature information). </br
   * > "STATUS_UNINSTALL_FAILURE": Uninstallation failure (the application to uninstall does not exist). </br> "
   * STATUS_UNINSTALL_FAILURE_ABORTED": Uninstallation aborted (not used). </br> "STATUS_UNINSTALL_FAILURE_CONFLICT":
   * Uninstallation conflict (failed to uninstall a system application or failed to terminate the application process).
   * </br> "STATUS_INSTALL_FAILURE_DOWNLOAD_TIMEOUT": Installation failure (download timed out).</br> "
   * STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED": Installation failure (download failed). </br> "
   * STATUS_RECOVER_FAILURE_INVALID": Failed to recover the preset application. </br> "STATUS_ABILITY_NOT_FOUND":
   * Ability not found.</br> "STATUS_BMS_SERVICE_ERROR": BMS service error. </br> "STATUS_FAILED_NO_SPACE_LEFT":
   * Insufficient device space.</br> "STATUS_GRANT_REQUEST_PERMISSIONS_FAILED": Failed to grant application permissions.
   * </br> "STATUS_INSTALL_PERMISSION_DENIED": Installation permission missing. </br> "
   * STATUS_UNINSTALL_PERMISSION_DENIED": Uninstallation permission missing.
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
 * > This module is no longer maintained since API version 9. You are advised to use
 * > [@ohos.bundle.installer.install]{@link @ohos.bundle.installer:installer} instead.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.bundle.installer:installer.BundleInstaller
 */
export interface BundleInstaller {
  /**
   * Installs a bundle. Multiple HAP files can be installed. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { Array<string> } bundleFilePaths - Sandbox path where the HAP files of the bundle are stored. For details
   *     about how to obtain the sandbox path, see
   *     [Obtaining the Sandbox Path](docroot://reference/apis-ability-kit/js-apis-bundle-BundleInstaller-sys.md#obtaining-the-sandbox-path).
   * @param { InstallParam } param - Parameters required for bundle installation.
   * @param { AsyncCallback<InstallStatus> } callback - Callback used to return the installation status.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.installer:installer.BundleInstaller.install
   */
  install(bundleFilePaths: Array<string>, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;

  /**
   * Uninstalls a bundle. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - Bundle name.
   * @param { InstallParam } param - Parameters required for bundle uninstall.
   * @param { AsyncCallback<InstallStatus> } callback - Callback used to return the installation status.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.installer:installer.BundleInstaller.uninstall
   */
  uninstall(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;

  /**
   * Recovers a bundle. This API uses an asynchronous callback to return the result. After a pre-installed bundle is
   * uninstalled, you can call this API to recover it.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - Bundle name.
   * @param { InstallParam } param - Parameters required for bundle recovery.
   * @param { AsyncCallback<InstallStatus> } callback - Callback used to return the recovery status.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.bundle.installer:installer.BundleInstaller.recover
   */
  recover(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;
}