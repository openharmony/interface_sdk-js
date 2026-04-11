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
 * The **certificateManagerDialog** module provides APIs for opening the certificate management pages, on which the 
 * certificates are installed, stored, used, and destroyed.
 *
 * @syscap SystemCapability.Security.CertificateManagerDialog
 * @stagemodelonly
 * @since 13 dynamic
 * @since 23 static
 */
declare namespace certificateManagerDialog {
  /**
   * Enumerates the error codes reported when the certificate management dialog box APIs are called.
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  export enum CertificateDialogErrorCode {
    /**
     * Internal error.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    ERROR_GENERIC = 29700001,

    /**
     * The user canceled the operation when the API is called.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    ERROR_OPERATION_CANCELED = 29700002,

    /**
     * The certificate installation fails.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    ERROR_OPERATION_FAILED = 29700003,

    /**
     * The device does not support the API called.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    ERROR_DEVICE_NOT_SUPPORTED = 29700004,

    /**
     * The device security policy is not met when the API is called.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    ERROR_NOT_COMPLY_SECURITY_POLICY = 29700005,

    /**
     * The parameter verification fails when the API is called.
     * 
     * For example, the parameter format is incorrect or the parameter range is invalid.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    ERROR_PARAMETER_VALIDATION_FAILED = 29700006,

    /**
     * No certificate is available.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    ERROR_NO_AVAILABLE_CERTIFICATE = 29700007
  }

  /**
   * Enumerates the page types of the certificate management dialog box.
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  export enum CertificateDialogPageType {
    /**
     * Main page of the Certificate Manager application.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    PAGE_MAIN = 1,

    /**
     * CA certificate list page.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    PAGE_CA_CERTIFICATE = 2,

    /**
     * Credential list page.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    PAGE_CREDENTIAL = 3,

    /**
     * Certificate installation page.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 13 dynamic
     * @since 23 static
     */
    PAGE_INSTALL_CERTIFICATE = 4,
  }

  /**
   * Opens the certificate management dialog box and displays the page of the specified type. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - Context of the application.
   * @param { CertificateDialogPageType } pageType - Type of the page to display.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enumerates the types of the certificate to be installed.
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  export enum CertificateType {
    /**
     * CA certificate.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    CA_CERT = 1,

    /**
     * User public credential.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    CREDENTIAL_USER = 2,

    /**
     * Private credential of an application.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */    
    CREDENTIAL_APP = 3,

   /**
     * USB credential.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    CREDENTIAL_UKEY = 4,

   /**
    * System credential.
    *
    * @syscap SystemCapability.Security.CertificateManagerDialog
    * @stagemodelonly
    * @since 23 dynamic&static
    */
   CREDENTIAL_SYSTEM = 5
  }

  /**
   * Defines the usage scope of the certificate to be installed.
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  export enum CertificateScope {
    /**
     * No user is specified.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    NOT_SPECIFIED = 0,

    /**
     * The installed certificate is accessible only to the current user.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    CURRENT_USER = 1,

    /**
     * The installed certificate is accessible to all users.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    GLOBAL_USER = 2
  }

  /**
   * Opens a dialog box for installing a certificate. This API uses a promise to return the result. In API version 26.0.
   * 0 and later versions, you can use [supportsCACertDialog]{@link certificateManagerDialog.supportsCACertDialog} to 
   * check whether the CA certificate management dialog box can be opened.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - Context of the application.
   * @param { CertificateType } certType - Type of the certificate to install. **CA_CERT**, **CREDENTIAL_USER**, and
   *     **CREDENTIAL_SYSTEM** are currently supported.
   * @param { CertificateScope } certScope - Usage scope of the certificate to install. **CURRENT_USER** and
   *     **NOT_SPECIFIED** are currently supported.
   * @param { Uint8Array } cert - Data of the certificate to install.
   * @returns { Promise<string> } Promise used to return the certificate URI. The value contains up to 256 bytes.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @throws { BusinessError } 29700002 - The user cancels the installation operation.
   * @throws { BusinessError } 29700003 - The user install certificate failed in the certificate manager dialog, such as
   *     the certificate is in an invalid format.
   * @throws { BusinessError } 29700004 - The API is not supported on this device.
   * @throws { BusinessError } 29700005 - The operation does not comply with the device security policy, such as the
   *     device does not allow users to manage the ca certificate of the global user. [since 18]
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  function openInstallCertificateDialog(context: common.Context, certType: CertificateType, certScope: CertificateScope, cert: Uint8Array): Promise<string>;

  /**
   * Opens the authorization page of the certificate management dialog box to grant a certificate to the application. 
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - Context of the application.
   * @returns { Promise<string> } Promise used to return the URI of the certificate authorized. The value contains up to
   *     256 bytes.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. A mandatory parameter is left
   *     unspecified.
   *     2. Incorrect parameter type. 3. Parameter verification failed.
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
   * Opens the certificate management dialog box and displays the certificate details. This API uses a promise to return
   * the result. In API version 26.0.0 and later versions, you can use 
   * [supportsCACertDialog]{@link certificateManagerDialog.supportsCACertDialog} to check whether the CA certificate 
   * management dialog box can be opened.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - Context of the application.
   * @param { Uint8Array } cert - Data of the certificate to install.
   * @param { CertificateDialogProperty } property - Property of the certificate management dialog box.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Opens a dialog box for deleting a certificate. This API uses a promise to return the result. In API version 26.0.0 
   * and later versions, you can use [supportsCACertDialog]{@link certificateManagerDialog.supportsCACertDialog} to 
   * check whether the CA certificate management dialog box can be opened.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - Context of the application.
   * @param { CertificateType } certType - Type of the certificate to delete.
   * @param { string } certUri - Unique identifier of the certificate to delete. The value contains up to 256 bytes.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Defines the property of the certificate management dialog box.
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export interface CertificateDialogProperty {

    /**
     * Whether to display the button for installing the certificate. The value **true** means to display the button; the
     * value **false** means the opposite.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    showInstallButton: boolean;
  }

  /**
   * Opens the PIN authentication dialog box of the USB credential. On the displayed page, the user authorizes the 
   * certificate for the application. The certificate types that can be authorized include the application private 
   * credential, user public credential, and USB credential. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - Context of the application.
   * @param { AuthorizeRequest } authorizeRequest - Authorization request information.
   * @returns { Promise<CertReference> } Promise used to return the result of the authorization certificate reference.
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
   * Represents the authorization request information of the certificate.
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export interface AuthorizeRequest {
    /**
     * List of certificate types.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    certTypes: Array<CertificateType>;

    /**
     * Certificate usage.
     * 
     * If the **certTypes** parameter contains the **CertificateType.CREDENTIAL_UKEY** type, the **certPurpose** 
     * parameter takes effect.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    certPurpose?: certificateManager.CertificatePurpose;

    /**
     * Indicates the algorithm type of the public key of the certificate. It is used to filter the list of
     * certificates that can be selected in the authorization dialog box. Only the certificates that match
     * the public key algorithm are displayed.
     * The value can only be RSA, EC, or ECDSA. If the keyAlgIDs array contains an unsupported algorithm type,
     * the keyAlgIDs filter does not take effect.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    keyAlgIDs?: Array<string>;
    
    /**
     * Indicates the certificate issuer, which is encoded in DER format. This parameter is used to filter the list
     * of certificates that can be selected by users in the Authorization dialog box. Only the certificates that
     * match the certificate issuer are displayed.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    issuers?: Array<Uint8Array>;
    
    /**
     * This URI is displayed in the authorization dialog box, providing users with more information about the server
     * context for which the certificate credential is requested for authorization.
     *
     * @syscap SystemCapability.Security.CertificateManagerDialog
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uri?: string;
  }

  /**
   * Represents the reference information of the credential.
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export interface CertReference {
    /**
       * Certificate type.
       *
       * @syscap SystemCapability.Security.CertificateManagerDialog
       * @stagemodelonly
       * @since 22 dynamic
       * @since 23 static
       */    
      certType: CertificateType;

    /**
       * Unique identifier of the credential. The value contains up to 256 bytes.
       *
       * @syscap SystemCapability.Security.CertificateManagerDialog
       * @stagemodelonly
       * @since 22 dynamic
       * @since 23 static
       */   
      keyUri: string;
  }

  /**
   * Opens the PIN authentication dialog box of the USB credential. On the displayed page, the user can enter the PIN to
   * authorize the USB credential. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_CERT_MANAGER
   * @param { common.Context } context - Context of the application.
   * @param { UkeyAuthRequest } ukeyAuthRequest - Authorization request information of the USB credential.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Represents the authorization request information of the USB credential.
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export interface UkeyAuthRequest {
    /**
       * Unique identifier of the USB credential. The value contains up to 256 bytes.
       *
       * @syscap SystemCapability.Security.CertificateManagerDialog
       * @stagemodelonly
       * @since 22 dynamic
       * @since 23 static
       */  
      keyUri: string;
  }

  /**
   * Checks whether the CA certificate management dialog box can be opened.
   *
   * @returns { boolean } Whether the CA certificate management dialog box can be opened. **true**: supported; **false**
   *     : not supported
   * @throws { BusinessError } 29700001 - Internal error. Possible causes: 1. IPC communication failed;
   *     <br>2. Memory operation error; 3. File operation error. Please try again.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function supportsCACertDialog(): boolean;
}

export default certificateManagerDialog;