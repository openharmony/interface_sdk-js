/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file User Access Control
 * @kit UserAuthenticationKit
 */

import userAuth from '@ohos.userIAM.userAuth';

/**
 * The **userAccessCtrl** module is a core component of the OpenHarmony user identity and access management (UserIAM)
 * system. It is dedicated to the verification and management of authentication tokens. This module provides APIs for
 * verifying authentication tokens (**AuthToken**). It can parse and verify user authentication results and return
 * detailed authentication information.
 *
 * This module applies to the following scenarios:
 *
 * - System-level applications need to verify the validity of user authentication tokens.
 * - Detailed information about the authentication token needs to be obtained, such as the authentication type, trust
 * level, and user ID.
 * - Access control decisions need to be made based on the authentication result.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace userAccessCtrl {
  /**
   * Verifies an authentication token. This API is used to verify the validity of an **AuthToken**, including the
   * integrity and validity check. After the verification is successful, the detailed information about the parsed
   * **AuthToken** is returned. This API uses a promise to return the result.
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { Uint8Array } authToken - Authentication token to be verified. The value contains a maximum of 1024 bytes
   *     and is returned after the user is authenticated. The token contains the credentials information for user
   *     authentication, which is used for subsequent security operation verification.
   * @param { int } allowableDuration - Authentication validity period. It indicates the maximum time interval for using
   *     the token from the time when the token is issued. The unit is millisecond. The value must be greater than 0 and
   *     less than or equal to 86400000 (24 hours). It is used to verify the validity of a token to prevent expired
   *     tokens from being used.
   * @returns { Promise<AuthToken> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Called by non-system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500015 - AuthToken integrity check failed.
   * @throws { BusinessError } 12500016 - AuthToken has expired.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function verifyAuthToken(authToken: Uint8Array, allowableDuration: int): Promise<AuthToken>;

  /**
   * Authentication token data. It indicates the parsed **AuthToken** data returned after the verification is
   * successful, including detailed authentication information such as the challenge value, authentication trust level,
   * authentication type, and user ID.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  interface AuthToken {
    /**
     * Random challenge value for the authentication. It is used to prevent replay attacks. The challenge value passed
     * during authentication is included in the **AuthToken**. The service can verify this field to confirm the validity
     * of the authentication result.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    challenge: Uint8Array;

    /**
     * Authentication trust level. It indicates the security strength level of the current authentication. The value can
     * be **ATL1(10000)**, **ATL2(20000)**, **ATL3(30000)**, or **ATL4(40000)**. A higher level indicates a stronger
     * liveness detection capability and more accurate identity recognition.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    authTrustLevel: userAuth.AuthTrustLevel;

    /**
     * Credential type for the identity authentication. It indicates the authentication mode used for the current
     * authentication, such as **PIN(1)**, **FACE(2)**, and **FINGERPRINT(4)**.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    authType: userAuth.UserAuthType;

    /**
     * Enumerates the authentication token types. It identifies the source of the token, such as local authentication,
     * reuse authentication, or collaborative authentication.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    tokenType: AuthTokenType;

    /**
     * User ID. It indicates the ID of the user who has completed authentication. The value is a positive integer
     * greater than or equal to 0.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    userId: int;

    /**
     * Time elapsed since the **AuthToken** was issued, in milliseconds.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    timeInterval: bigint;

    /**
     * Secure user ID. It indicates the security ID of a user, which is used internally by the system and returned only
     * in specific authentication scenarios.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    secureUid?: bigint;

    /**
     * Credential enrollment ID. It indicates the original value of **credentialDigest** in **enrolledState**, which
     * reflects the credential change.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    enrolledId?: bigint;

    /**
     * Credential ID. It indicates the ID of the credential that is successfully matched in the current authentication.
     * It is used to associate with the specific authentication credential.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    credentialId?: bigint;
  }

  /**
   * Enumerates the authentication token types. They are used to identify the source of the token.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  enum AuthTokenType {
    /**
     * Local authentication token. It is an authentication token issued based on the local authentication result,
     * indicating that the user has been authenticated on the local device.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    TOKEN_TYPE_LOCAL_AUTH = 0,

    /**
     * Local resigning token. It is an authentication token signed based on the reused authentication result, indicating
     * that the current authentication result is reused from a previous authentication result.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    TOKEN_TYPE_LOCAL_RESIGN = 1,

    /**
     * Collaborative authentication token. It is an authentication token issued based on multiple device collaboration
     * authentication results, indicating that the user has completed authentication through multi-device collaboration.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    TOKEN_TYPE_COAUTH = 2
  }
}

export default userAccessCtrl;