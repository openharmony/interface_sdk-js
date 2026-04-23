/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit DeviceCertificateKit
 */

import type common from '@ohos.app.ability.common';
import type certificateManager from '@ohos.security.certManager';

/**
 * 证书管理对话框主要提供拉起证书管理界面的能力，用户在拉起的证书管理对话框可对证书进行管理（安装，存储，使用，销毁）。
 *
 * @syscap SystemCapability.Security.CertificateManagerDialog
 * @stagemodelonly
 * @since 13 dynamic
 * @since 23 static
 */
declare namespace certificateManagerDialog {
  /**
   * 表示调用证书管理对话框相关API的错误码。
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  export enum CertificateDialogErrorCode {
    /**
     * 表示调用接口时发生内部错误。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    ERROR_GENERIC = 29700001,

    /**
     * 表示调用接口时用户取消操作。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    ERROR_OPERATION_CANCELED = 29700002,

    /**
     * 表示调用接口时安装证书失败。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    ERROR_OPERATION_FAILED = 29700003,

    /**
     * 表示调用接口时设备类型不支持。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    ERROR_DEVICE_NOT_SUPPORTED = 29700004,

    /**
     * 表示调用接口时不符合设备安全策略。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    ERROR_NOT_COMPLY_SECURITY_POLICY = 29700005,

    /**
     * 表示调用接口时参数校验失败。
     * 
     * 例如：参数格式不正确、参数范围无效
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    ERROR_PARAMETER_VALIDATION_FAILED = 29700006,

    /**
     * 表示没有可用证书。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    ERROR_NO_AVAILABLE_CERTIFICATE = 29700007
  }

  /**
   * 表示证书管理对话框的页面类型。
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  export enum CertificateDialogPageType {
    /**
     * 证书管理应用主页面。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    PAGE_MAIN = 1,

    /**
     * CA证书列表页面。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    PAGE_CA_CERTIFICATE = 2,

    /**
     * 凭据列表页面。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    PAGE_CREDENTIAL = 3,

    /**
     * 安装证书页面。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    PAGE_INSTALL_CERTIFICATE = 4
  }

  /**
   * 表示拉起证书管理对话框，显示相应的页面。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - 表示应用的上下文信息。
   * @param { CertificateDialogPageType } pageType - 表示页面类型。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  function openCertificateManagerDialog(context: common.Context, pageType: CertificateDialogPageType): Promise<void>;

  /**
   * 表示安装证书的类型。
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  export enum CertificateType {
    /**
     * CA证书。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    CA_CERT = 1,

    /**
     * 用户公共凭据。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    CREDENTIAL_USER = 2,

    /**
     * 应用私有凭据。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    CREDENTIAL_APP = 3,

    /**
     * USB凭据。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    CREDENTIAL_UKEY = 4,

    /**
     * 系统凭据。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    CREDENTIAL_SYSTEM = 5
  }

  /**
   * 表示安装证书的使用范围。
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  export enum CertificateScope {
    /**
     * 不指定使用范围，用户可在证书安装界面选择。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    NOT_SPECIFIED = 0,

    /**
     * 当前用户。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    CURRENT_USER = 1,

    /**
     * 公共目录。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    GLOBAL_USER = 2
  }

  /**
   * 表示拉起证书管理安装证书向导，显示相应的页面。使用Promise异步回调。从版本26.0.0开始，可以通过
   * [supportsCACertDialog]{@link certificateManagerDialog.supportsCACertDialog}来判断是否支持打开CA证书管理对话框。
   * > **说明**
   * > 检查是否可以打开CA证书管理对话框。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - 表示应用的上下文信息。
   * @param { CertificateType } certType - 表示安装证书类型，目前支持CA_CERT、CREDENTIAL_USER、CREDENTIAL_SYSTEM。
   * @param { CertificateScope } certScope - 表示安装证书的使用范围，目前支持CURRENT_USER、NOT_SPECIFIED。
   * @param { Uint8Array } cert - 表示安装证书数据。
   * @returns { Promise<string> } Promise对象。表示返回证书uri的结果，最大长度为256字节。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - The certificate management application Hap is not preinstalled in the system,
   *     and the capability is not supported. [since 26.0.0]
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 29700002 - The user cancels the installation operation.
   * @throws { BusinessError } 29700003 - The user install certificate failed in the certificate manager dialog, such as
   *     the certificate is in an invalid format.
   * @throws { BusinessError } 29700004 - To ensure user security, the current device does not support this API.
   *     When certType is set to CA_CERT, this API can be invoked only on 2in1 devices.
   *     This error code is returned on other devices.
   * @throws { BusinessError } 29700005 - The operation does not comply with the device security policy, such as the
   *     device does not allow users to manage the ca certificate of the global user. [since 18]
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  function openInstallCertificateDialog(context: common.Context, certType: CertificateType, certScope: CertificateScope, cert: Uint8Array): Promise<string>;

  /**
   * 打开证书管理对话框的授权页面。在弹出的页面中，用户可以为应用授权证书。使用Promise异步回调。
   * 该接口使用promise返回结果。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - 表示应用的上下文信息。
   * @returns { Promise<string> } Promise对象。表示返回授权证书uri的结果，最大长度为256字节。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. A mandatory parameter is left
   *     unspecified.
   *     2. Incorrect parameter type. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - The certificate management application Hap is not preinstalled in the system,
   *     and the capability is not supported. [since 26.0.0]
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 29700002 - The user cancels the authorization.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function openAuthorizeDialog(context: common.Context): Promise<string>;

  /**
   * 表示拉起证书管理对话框显示证书的详情。使用Promise异步回调。从版本26.0.0开始，可以通过
   * [supportsCACertDialog]{@link certificateManagerDialog.supportsCACertDialog}来判断是否支持打开CA证书管理对话框。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - 表示应用的上下文信息。
   * @param { Uint8Array } cert - 表示安装证书数据。
   * @param { CertificateDialogProperty } property - 表示拉起证书管理对话框的属性。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 29700003 - Show the certificate detail dialog failed, such as the certificate is in an
   *     invalid format.
   * @throws { BusinessError } 29700004 - The API is not supported on this device.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function openCertificateDetailDialog(context: common.Context,cert: Uint8Array, property: CertificateDialogProperty): Promise<void>;

  /**
   * 表示拉起证书管理删除证书向导，显示相应的页面。使用Promise异步回调。从版本26.0.0开始，可以通过
   * [supportsCACertDialog]{@link certificateManagerDialog.supportsCACertDialog}来判断是否支持打开CA证书管理对话框。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - 表示应用的上下文信息。
   * @param { CertificateType } certType - 表示删除证书类型。
   * @param { string } certUri - 表示待删除证书的唯一标识符，最大长度为256字节。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 29700002 - The user cancels the uninstallation operation.
   * @throws { BusinessError } 29700003 - The user uninstall certificate failed in the certificate manager dialog, such
   *     as the certificate uri is not exist.
   * @throws { BusinessError } 29700004 - The API is not supported on this device.
   * @throws { BusinessError } 29700005 - The operation does not comply with the device security policy, such as the
   *     device does not allow users to manage the ca certificate of the global user.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function openUninstallCertificateDialog(context: common.Context, certType: CertificateType, certUri: string): Promise<void>;

  /**
   * 表示证书管理对话框的属性。
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export interface CertificateDialogProperty {

    /**
     * 表示是否显示安装证书的按钮，true为显示，false为不显示。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    showInstallButton: boolean;
  }

  /**
   * 打开USB凭据PIN码认证对话框的授权页面。在弹出的页面中，用户为应用程序授权证书，可授权的证书类型包括应用私有凭据、用户公共凭据和USB凭据。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - 表示应用的上下文信息。
   * @param { AuthorizeRequest } authorizeRequest - 表示授权请求信息。
   * @returns { Promise<CertReference> } Promise对象，返回授权证书引用的结果。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error; 4. Call other service failed. Please try again.
   * @throws { BusinessError } 29700002 - The user cancels the authorization.
   * @throws { BusinessError } 29700006 - Indicates that the input parameters validation failed.
   *     for example, the parameter format is incorrect or the value range is invalid.
   * @throws { BusinessError } 29700007 - No available certificate for authorization.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  function openAuthorizeDialog(context: common.Context, authorizeRequest: AuthorizeRequest): Promise<CertReference>;

  /**
   * 证书授权请求信息。
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export interface AuthorizeRequest {
    /**
     * 表示证书类型的列表。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    certTypes: Array<CertificateType>;

    /**
     * 表示证书用途。
     * 
     * 若certTypes参数中存在CertificateType.CREDENTIAL_UKEY类型，则certPurpose参数生效。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    certPurpose?: certificateManager.CertificatePurpose;

    /**
     * 表示证书公钥的算法类型，用于筛选凭据授权对话框中的证书列表，仅显示匹配的证书。支持的取值为RSA、EC或ECDSA。
     * 
     * 若 keyAlgIDs包含不支持的算法，则该筛选器无效。
     * 
     * 数组最大长度为20。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    keyAlgIDs?: Array<string>;

    /**
     * 表示以DER格式编码的证书颁发者，用于筛选凭据授权对话框中的证书列表，仅显示匹配的证书。
     * 
     * 如果issuers数组中存在长度为0的元素，则issuers筛选器不会生效。
     * 
     * 数组最大长度为20。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    issuers?: Array<Uint8Array>;

    /**
     * 表示应用请求使用凭据用于验证服务器的地址，此uri显示在凭据授权对话框中。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uri?: string;
  }

  /**
   * 表示证书凭据的引用信息。
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export interface CertReference {
    /**
     * 表示证书类型。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    certType: CertificateType;

    /**
     * 表示证书凭据的唯一标识符，长度限制256字节以内。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    keyUri: string;
  }

  /**
   * 打开USB凭据PIN码认证对话框的授权页面。在弹出的页面中，用户可以输入PIN码授权USB证书凭据。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - 表示应用的上下文信息。
   * @param { UkeyAuthRequest } ukeyAuthRequest - 表示USB凭据授权请求信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 29700006 - Indicates that the input parameters validation failed.
   *     For example, the parameter format is incorrect or the value range is invalid.
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 29700002 - The user cancels the authentication operation.
   * @throws { BusinessError } 29700003 - The authentication operation failed, such as the USB key certificate
   *     does not exist, the USB key status is abnormal.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  function openUkeyAuthDialog(context: common.Context, ukeyAuthRequest: UkeyAuthRequest): Promise<void>;

  /**
   * USB证书凭据授权请求信息。
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export interface UkeyAuthRequest {
    /**
     * 表示USB证书凭据的唯一标识符，长度限制256字节以内。
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    keyUri: string;
  }

  /**
   * 判断设备是否支持打开CA证书管理对话框。
   *
   * @returns { boolean } 设备是否支持打开CA证书管理对话框。true：支持，false：不支持。
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function supportsCACertDialog(): boolean;
}

export default certificateManagerDialog;