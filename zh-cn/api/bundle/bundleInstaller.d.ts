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
 * > **说明：**
 * >
 * > 从API version 7开始支持，从API version 9开始废弃，建议使用[InstallParam]{@link ./../@ohos.bundle.installer:installer.InstallParam}替
 * > 代。
 * 
 * 安装、恢复或卸载时需要指定的参数。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ./../@ohos.bundle.installer:installer.InstallParam
 */
export interface InstallParam {
  /**
   * 指示用户id, 默认值：调用方的userId。
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
   * 指示安装标志, 默认值：1。 </br>取值范围：</br>1: 覆盖安装。</br>16: 免安装。
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
   * 指示应用卸载时是否保留包数据，默认值：false，true表示保留，false表示不保留。
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
 * 应用程序安装卸载的结果。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 */
export interface InstallStatus {
  /**
   * 表示安装或卸载错误状态码。取值范围：枚举值[InstallErrorCode]{@link ./../@ohos.bundle:bundle.InstallErrorCode}。
   *
   * @default Indicates the install or uninstall error code
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  status: bundle.InstallErrorCode;

  /**
   * 表示安装或卸载的字符串结果信息。取值范围包括：
   * 
   * "SUCCESS" : 安装成功。</br> "STATUS_INSTALL_FAILURE": 安装失败（不存在安装文件）。</br> "STATUS_INSTALL_FAILURE_ABORTED": 安装中止。 </br> 
   * "STATUS_INSTALL_FAILURE_INVALID": 安装参数无效。 </br> "STATUS_INSTALL_FAILURE_CONFLICT":  安装冲突（常见于升级和已有应用基本信息不一致）。 </br> 
   * "STATUS_INSTALL_FAILURE_STORAGE": 存储包信息失败。 </br> "STATUS_INSTALL_FAILURE_INCOMPATIBLE": 安装不兼容（常见于版本降级安装或者签名信息错误）。 <
   * /br> "STATUS_UNINSTALL_FAILURE": 卸载失败（不存在卸载的应用）。 </br> "STATUS_UNINSTALL_FAILURE_ABORTED": 卸载中止（没有使用）。 </br> "
   * STATUS_UNINSTALL_FAILURE_ABORTED": 卸载冲突（卸载系统应用失败， 结束应用进程失败）。 </br> "STATUS_INSTALL_FAILURE_DOWNLOAD_TIMEOUT": 安装失败（
   * 下载超时）。</br> "STATUS_INSTALL_FAILURE_DOWNLOAD_FAILED": 安装失败（下载失败）。 </br> "STATUS_RECOVER_FAILURE_INVALID": 恢复预置应用失败。
   * </br> "STATUS_ABILITY_NOT_FOUND": Ability未找到。</br> "STATUS_BMS_SERVICE_ERROR": BMS服务错误。 </br> "
   * STATUS_FAILED_NO_SPACE_LEFT": 设备空间不足。</br> "STATUS_GRANT_REQUEST_PERMISSIONS_FAILED": 应用授权失败。 </br> "
   * STATUS_INSTALL_PERMISSION_DENIED": 缺少安装权限。 </br> "STATUS_UNINSTALL_PERMISSION_DENIED": 缺少卸载权限。
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
 * 本模块提供设备上安装、升级和卸载应用的能力。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[@ohos.bundle.installer.install]{@link ./../@ohos.bundle.installer:installer}替代。
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.bundle.installer#BundleInstaller
 */
export interface BundleInstaller {
    /**
     * 在应用中安装hap，支持多hap安装。使用callback异步回调。
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { Array<string> } bundleFilePaths - 指示存储HAP的沙箱路径。
     * @param { InstallParam } param - 指定安装所需的其他参数。
     * @param { AsyncCallback<InstallStatus> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，程序
     *   启动作为入参的回调函数，返回安装状态信息。
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.installer.BundleInstaller#install
     */
    function install(bundleFilePaths: Array<string>, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;

    /**
     * 卸载应用程序，使用callback异步回调，返回安装状态信息。
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - 应用Bundle名称。
     * @param { InstallParam } param - 指定卸载所需的其他参数。
     * @param { AsyncCallback<InstallStatus> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，程序
     *   启动作为入参的回调函数，返回安装状态信息。
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.installer.BundleInstaller#uninstall
     */
    function uninstall(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;

    /**
     * 恢复一个应用程序，使用callback异步回调。当预置应用被卸载后，可以通过此接口进行恢复。
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - 应用Bundle名称。
     * @param { InstallParam } param - 指定应用恢复所需的其他参数。
     * @param { AsyncCallback<InstallStatus> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，程序
     *   启动作为入参的回调函数，返回安装状态信息。
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @systemapi Hide this for inner system use
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.bundle.installer.BundleInstaller#recover
     */
    function recover(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;
}