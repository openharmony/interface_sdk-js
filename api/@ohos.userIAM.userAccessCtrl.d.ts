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
 * @file
 * @kit UserAuthenticationKit
 */

import userAuth from '@ohos.userIAM.userAuth';

/**
 * The **userAccessCtrl** module provides APIs for setting and obtaining user identity authentication policies and
 * verifying user identity authentication results.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace userAccessCtrl {
  /**
   * Verifies an authentication token. This API uses a promise to return the result.
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { Uint8Array } authToken - Authentication token to verify, which cannot exceed 1024.
   * @param { int } allowableDuration - Time allowed for the authentication token to be used after being issued, in
   *     milliseconds. The value must be greater than 0 and less than or equal to 86,400,000.
   * @returns { Promise<AuthToken> } Promise used to return the parsed authentication token.
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
   * Represents the AuthToken data returned after a successful verification.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  interface AuthToken {
    /**
     * Random challenge for the authentication.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    challenge: Uint8Array;

    /**
     * Authentication trust level.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    authTrustLevel: userAuth.AuthTrustLevel;

    /**
     * Credential type for the identity authentication.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    authType: userAuth.UserAuthType;

    /**
     * Authentication token type.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    tokenType: AuthTokenType;

    /**
     * User ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    userId: int;

    /**
     * Time elapsed since the issuance of the authentication token, in milliseconds.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    timeInterval: bigint;

    /**
     * Secure user ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    secureUid?: bigint;

    /**
     * Credential enrollment ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    enrolledId?: bigint;

    /**
     * Credential ID.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    credentialId?: bigint;
  }

  /**
   * Enumerates the authentication token types.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  enum AuthTokenType {
    /**
     * Authentication token issued based on the local authentication result.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    TOKEN_TYPE_LOCAL_AUTH = 0,

    /**
     * Authentication token issued based on the reused identity authentication result.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    TOKEN_TYPE_LOCAL_RESIGN = 1,

    /**
     * Authentication token issued based on a collaborative authentication result of multiple devices.
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