/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * @kit UserAuthenticationKit
 */

/*** if arkts dynamic */
import type { AsyncCallback } from './@ohos.base';
/*** endif */
/*** if arkts static */
import Context from './application/Context';
/*** endif */

/**
 * The **userAuth** module provides APIs for user authentication, which applies to scenarios such as device unlocking,
 * payment, and application login.
 *
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @atomicservice [since 12]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace userAuth {
  /**
   * Maximum reuse duration of the authentication result, in milliseconds. The value is 300000.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  const MAX_ALLOWABLE_REUSE_DURATION: 300000;
  /**
   * Maximum reuse duration of the authentication result, in milliseconds. The value is 300000.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 23 static
   */
  const MAX_ALLOWABLE_REUSE_DURATION: int = 300000;

  /**
   * Permanent lockout duration, in milliseconds. The value is 0x7fffffff.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  const PERMANENT_LOCKOUT_DURATION: int = 0x7fffffff;

  /**
   * Enumerates the authentication results.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.UserAuthResultCode
   */
  export enum AuthenticationResult {
    /**
     * The device does not support the current authentication mode.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.TYPE_NOT_SUPPORT
     */
    NO_SUPPORT = -1,

    /**
     * The authentication is successful.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.SUCCESS
     */
    SUCCESS = 0,

    /**
     * The feature comparison failed.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.FAIL
     */
    COMPARE_FAILURE = 1,

    /**
     * The authentication was canceled by the user.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.CANCELED
     */
    CANCELED = 2,

    /**
     * The authentication has timed out.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.TIMEOUT
     */
    TIMEOUT = 3,

    /**
     * The camera failed to start.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     */
    CAMERA_FAIL = 4,

    /**
     * The authentication service is not available. Try again later.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.BUSY
     */
    BUSY = 5,

    /**
     * The authentication parameters are invalid.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.INVALID_PARAMETERS
     */
    INVALID_PARAMETERS = 6,

    /**
     * The user account is locked because the number of authentication failures has reached the threshold.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.LOCKED
     */
    LOCKED = 7,

    /**
     * No authentication credential is registered.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.NOT_ENROLLED
     */
    NOT_ENROLLED = 8,

    /**
     * Other errors.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.userIAM.userAuth.ResultCode.GENERAL_ERROR
     */
    GENERAL_ERROR = 100
  }

  /**
   * Enumerates the authentication types.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @unionmember { 'ALL' } Reserved and not supported by the current version.
   * @unionmember { 'FACE_ONLY' } Facial authentication.
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.UserAuthType
   */
  type AuthType = 'ALL' | 'FACE_ONLY';

  /**
   * Enumerates the authentication security levels.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @unionmember { 'S1' } Authentication trust level 1. The authentication of this level can identify individual users
   *     and provides limited liveness detection capabilities. It is usually used in service risk control and query of
   *     general personal data.
   * @unionmember { 'S2' } Authentication trust level 2. The authentication of this level can accurately identify
   *     individual users and provides regular liveness detection capabilities. It is usually used in scenarios such as
   *     application logins and keeping the unlocking state of a device.
   * @unionmember { 'S3' } Authentication trust level 3. The authentication of this level can accurately identify
   *     individual users and provides strong liveness detection capabilities. It is usually used in scenarios such as
   *     unlocking a device.
   * @unionmember { 'S4' } Authentication trust level 4. The authentication of this level can accurately identify
   *     individual users and provides powerful liveness detection capabilities. It is usually used in scenarios such as
   *     small-amount payment.
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.AuthTrustLevel
   */
  type SecureLevel = 'S1' | 'S2' | 'S3' | 'S4';

  /**
   * Provides APIs for managing the **Authenticator** object.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.AuthInstance
   */
  interface Authenticator {
    /**
     * Starts user authentication. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { AuthType } type - Authentication type. Currently, only **FACE_ONLY** is supported.<br>**ALL** is
     *     reserved and not supported by the current version.
     * @param { SecureLevel } level - Security level of the authentication. It can be **S1** (lowest), **S2**, **S3**,
     *     or **S4** (highest).<br>Devices capable of 3D facial recognition support S3 and lower-level authentication.<
     *     br>Devices capable of 2D facial recognition support S2 and lower-level authentication.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. **number** indicates the
     *     [AuthenticationResult]{@link userAuth.AuthenticationResult}.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.AuthInstance.start
     */
    execute(type: AuthType, level: SecureLevel, callback: AsyncCallback<number>): void;

    /**
     * Starts user authentication. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { AuthType } type - Authentication type. Currently, only **FACE_ONLY** is supported.<br>**ALL** is
     *     reserved and not supported by the current version.
     * @param { SecureLevel } level - Security level of the authentication. It can be **S1** (lowest), **S2**, **S3**,
     *     or **S4** (highest).<br>Devices capable of 3D facial recognition support S3 and lower-level authentication.<
     *     br>Devices capable of 2D facial recognition support S2 and lower-level authentication.
     * @returns { Promise<number> } Promise used to return the authentication result, which is a number. For details,
     *     see [AuthenticationResult]{@link userAuth.AuthenticationResult}.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.AuthInstance.start
     */
    execute(type: AuthType, level: SecureLevel): Promise<number>;
  }

  /**
   * Obtains an **Authenticator** instance for user authentication.
   *
   * @returns { Authenticator } **Authenticator** instance obtained.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.getAuthInstance
   */
  function getAuthenticator(): Authenticator;

  /**
   * Provides APIs for managing the **UserAuth** object.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead userAuth.AuthInstance
   */
  class UserAuth {
    /**
     * A constructor used to create a **UserAuth** instance.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.getAuthInstance
     */
    constructor();

    /**
     * Obtains the version of this authenticator.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @returns { number } Authenticator version obtained.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    getVersion(): number;

    /**
     * Checks whether the specified authentication capability is supported.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { UserAuthType } authType - Authentication type. Currently, **FACE** and **FINGERPRINT** are supported.
     * @param { AuthTrustLevel } authTrustLevel - Authentication trust level.
     * @returns { number } Query result. If the authentication capability is supported, **SUCCESS** is returned.
     *     Otherwise, a [ResultCode]{@link userAuth.ResultCode} is returned.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.getAvailableStatus
     */
    getAvailableStatus(authType: UserAuthType, authTrustLevel: AuthTrustLevel): number;

    /**
     * Starts user authentication. This API uses a callback to return the result.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { Uint8Array } challenge - Challenge value, which can be passed in Uint8Array([]) format.
     * @param { UserAuthType } authType - Authentication type. Currently, **FACE** and **FINGERPRINT** are supported.
     * @param { AuthTrustLevel } authTrustLevel - Authentication trust level.
     * @param { IUserAuthCallback } callback - Callback used to return the result.
     * @returns { Uint8Array } Context ID, which is used as the input parameter of
     *     [cancelAuth]{@link userAuth.UserAuth#cancelAuth}.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.AuthInstance.start
     */
    auth(
      challenge: Uint8Array,
      authType: UserAuthType,
      authTrustLevel: AuthTrustLevel,
      callback: IUserAuthCallback
    ): Uint8Array;

    /**
     * Cancels the authentication based on the context ID.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { Uint8Array } contextID - Context ID, which is obtained by [auth]{@link userAuth.UserAuth#auth}.
     * @returns { number } Returns **SUCCESS** if the cancellation is successful. Returns a
     *     [ResultCode]{@link userAuth.ResultCode} otherwise.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.AuthInstance.cancel
     */
    cancelAuth(contextID: Uint8Array): number;
  }

  /**
   * Provides callbacks to return the authentication result.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead userAuth.AuthEvent
   */
  interface IUserAuthCallback {
    /**
     * Called to return the authentication result.
     *
     * - **result**: Authentication result. For details, see [ResultCode]{@link userAuth.ResultCode}.
     * - **extraInfo**: Extended information, which varies depending on the authentication result. If the authentication
     * is successful, the user authentication token will be returned in **extraInfo**. If the authentication fails, the
     * remaining number of authentication times will be returned in **extraInfo**. If the authentication executor is
     * locked, the freeze time will be returned in **extraInfo**.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.AuthEvent.callback
     */
    onResult: (result: number, extraInfo: AuthResult) => void;

    /**
     * Called to acquire authentication tip information. This API is optional.
     *
     * - **module**: ID of the module that sends the tip information.
     * - **acquire**: Authentication tip information.
     * - **extraInfo**: Reserved field.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.AuthEvent.callback
     */
    onAcquireInfo?: (module: number, acquire: number, extraInfo: any) => void;
  }

  /**
   * Represents the authentication result object.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead userAuth.AuthResultInfo
   */
  interface AuthResult {
    /**
     * Authentication token information.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.AuthResultInfo.token
     */
    token?: Uint8Array;

    /**
     * Number of remaining authentication operations.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.AuthResultInfo.remainAttempts
     */
    remainTimes?: number;

    /**
     * Time for which the authentication operation is frozen. The unit is milliseconds.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.AuthResultInfo.lockoutDuration
     */
    freezingTime?: number;
  }

  /**
   * Enumerates the authentication result codes.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead userAuth.UserAuthResultCode
   */
  enum ResultCode {
    /**
     * The operation is successful.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.SUCCESS
     */
    SUCCESS = 0,

    /**
     * The authentication failed.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.FAIL
     */
    FAIL = 1,

    /**
     * A general operation error occurred.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.GENERAL_ERROR
     */
    GENERAL_ERROR = 2,

    /**
     * The authentication is canceled.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.CANCELED
     */
    CANCELED = 3,

    /**
     * The authentication timed out.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.TIMEOUT
     */
    TIMEOUT = 4,

    /**
     * The authentication type is not supported.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.TYPE_NOT_SUPPORT
     */
    TYPE_NOT_SUPPORT = 5,

    /**
     * The authentication trust level is not supported.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.TRUST_LEVEL_NOT_SUPPORT
     */
    TRUST_LEVEL_NOT_SUPPORT = 6,

    /**
     * Indicates the busy state.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.BUSY
     */
    BUSY = 7,

    /**
     * Invalid parameters are detected.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.INVALID_PARAMETERS
     */
    INVALID_PARAMETERS = 8,

    /**
     * The authentication executor is locked.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.LOCKED
     */
    LOCKED = 9,

    /**
     * The user has not enrolled the authentication information.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.userIAM.userAuth.UserAuthResultCode.NOT_ENROLLED
     */
    NOT_ENROLLED = 10
  }

  /**
   * Enumerates the tip codes used during the facial authentication process.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 11
   */
  enum FaceTips {
    /**
     * The obtained facial image is too bright due to high illumination.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_BRIGHT = 1,

    /**
     * The obtained facial image is too dark due to low illumination.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_DARK = 2,

    /**
     * The face is too close to the device.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_CLOSE = 3,

    /**
     * The face is too far away from the device.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_FAR = 4,

    /**
     * Only the upper part of the face is captured because the device is angled too high.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_HIGH = 5,

    /**
     * Only the lower part of the face is captured because the device is angled too low.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_LOW = 6,

    /**
     * Only the right part of the face is captured because the device is deviated to the right.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_RIGHT = 7,

    /**
     * Only the left part of the face is captured because the device is deviated to the left.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_LEFT = 8,

    /**
     * The face moves too fast during facial information collection.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_MUCH_MOTION = 9,

    /**
     * The face is not facing the camera.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_POOR_GAZE = 10,

    /**
     * No face is detected.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_NOT_DETECTED = 11
  }

  /**
   * Enumerates the tip codes used during the fingerprint authentication process.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 11
   */
  enum FingerprintTips {
    /**
     * The obtained fingerprint image is in good condition.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_GOOD = 0,

    /**
     * Large fingerprint image noise is detected due to suspicious or detected dirt on the sensor.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_DIRTY = 1,

    /**
     * The noise of the fingerprint image is too large to be processed.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_INSUFFICIENT = 2,

    /**
     * Incomplete fingerprint image is detected.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_PARTIAL = 3,

    /**
     * The fingerprint image is incomplete due to fast movement.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_TOO_FAST = 4,

    /**
     * Failed to obtain the fingerprint image because the finger seldom moves.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_TOO_SLOW = 5
  }

  /**
   * Enumerates the identity authentication types.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum UserAuthType {
    /**
     * PIN authentication.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PIN = 1,

    /**
     * Facial authentication.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    FACE = 2,

    /**
     * Fingerprint authentication.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT = 4,

    /**
     * Privacy password.
     *
     * This is a system API.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    PRIVATE_PIN = 16
  }

  /**
   * Enumerates the trust levels of the authentication result.
   * For typical use cases, see
   * [Principles for Classifying Biometric Authentication Trust Levels](docroot://security/UserAuthenticationKit/user-authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels)
   * .
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AuthTrustLevel {
    /**
     * Authentication trust level 1. The authentication of this level can identify individual users and provides limited
     * liveness detection capabilities. It is applicable to scenarios such as service risk control and access to common
     * personal data.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ATL1 = 10000,

    /**
     * Authentication trust level 2. The authentication of this level can accurately identify individual users and
     * provides regular liveness detection capabilities. It is applicable to scenarios such as device unlocking and
     * application login.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ATL2 = 20000,

    /**
     * Authentication trust level 3. The authentication of this level can accurately identify individual users and
     * provides strong liveness detection capabilities. It is applicable to scenarios such as device unlocking.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ATL3 = 30000,

    /**
     * Authentication trust level 4. The authentication of this level can accurately identify individual users and
     * provides powerful liveness detection capabilities. It is applicable to scenarios such as small-amount payment.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ATL4 = 40000
  }

  /**
   * Defines the keyword of the authentication event type. It is used as a parameter of
   * [on]{@link userAuth.AuthInstance.on}.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @unionmember { 'result' } If the first parameter of
   *     [on]{@link userAuth.AuthInstance.on} is **result**,
   *     the [callback]{@link userAuth.AuthEvent.callback} returns the authentication result.
   * @unionmember { 'tip' } If the first parameter of
   *     [on]{@link userAuth.AuthInstance.on} is **tip**, the
   *     [callback]{@link userAuth.AuthEvent.callback} returns the authentication tip information.
   * @since 9 dynamiconly
   * @deprecated since 11
   */
  type AuthEventKey = 'result' | 'tip';

  /**
   * Enumerates the authentication event information types.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @unionmember { AuthResultInfo } Authentication result.
   * @unionmember { TipInfo } Authentication tip information.
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead userAuth.UserAuthResult
   */
  type EventInfo = AuthResultInfo | TipInfo;

  /**
   * Provides an asynchronous callback to return the authentication event information.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead userAuth.IAuthCallback
   */
  interface AuthEvent {
    /**
     * Called to return the authentication result or authentication tip information.
     *
     * @param { EventInfo } result - Authentication result or tip information.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead userAuth.IAuthCallback.onResult(result: UserAuthResult)
     */
    callback(result: EventInfo): void;
  }

  /**
   * Represents the authentication result.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead userAuth.UserAuthResult
   */
  interface AuthResultInfo {
    /**
     * Authentication result.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.userIAM.userAuth.UserAuthResult.result
     */
    result: number;

    /**
     * Token that has passed the user identity authentication.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.userIAM.userAuth.UserAuthResult.token
     */
    token?: Uint8Array;

    /**
     * Number of remaining authentication attempts.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.userIAM.userAuth.AuthLockState.remainingAuthAttempts
     */
    remainAttempts?: number;

    /**
     * The lockout duration if the authentication executor is locked. The unit is ms.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.userIAM.userAuth.AuthLockState.lockoutDuration
     */
    lockoutDuration?: number;
  }

  /**
   * Represents the tip information displayed during the authentication, which is used to provide feedback during the
   * authentication process.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead userAuth.AuthTipInfo
   */
  interface TipInfo {
    /**
     * ID of the module that sends the tip information.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.userIAM.userAuth.AuthTipInfo.tipType
     */
    module: number;

    /**
     * Tip to be given during the authentication process.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.userIAM.userAuth.AuthTipInfo.tipCode
     */
    tip: number;
  }

  /**
   * Implements user authentication.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead userAuth.UserAuthInstance
   */
  interface AuthInstance {
    /**
     * Subscribes to the user authentication events of the specified type.
     *
     * - **name**: indicates the authentication event type. The value **result** means that the callback returns the
     * authentication result, and the value **tip** means that the callback returns the authentication tip information.
     * For details, see [AuthEventKey]{@link userAuth.AuthEventKey}.
     * - **callback**: callback used to return the authentication result or tip information. For details, see
     * [AuthEvent]{@link userAuth.AuthEvent}.
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.userIAM.userAuth.UserAuthInstance.on
     */
    on: (name: AuthEventKey, callback: AuthEvent) => void;

    /**
     * Unsubscribes from the user authentication events of the specified type.
     *
     * - **name**: indicates the authentication event type. The value **result** means to unsubscribe from the
     * authentication result, and the value **tip** means to unsubscribe from the authentication tip information. For
     * details, see [AuthEventKey]{@link userAuth.AuthEventKey}.
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.userIAM.userAuth.UserAuthInstance.off
     */
    off: (name: AuthEventKey) => void;

    /**
     * Starts authentication.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12500001 - Authentication failed.
     * @throws { BusinessError } 12500002 - General operation error.
     * @throws { BusinessError } 12500003 - The operation is canceled.
     * @throws { BusinessError } 12500004 - The operation is time-out.
     * @throws { BusinessError } 12500005 - The authentication type is not supported.
     * @throws { BusinessError } 12500006 - The authentication trust level is not supported.
     * @throws { BusinessError } 12500007 - The authentication task is busy.
     * @throws { BusinessError } 12500009 - The authenticator is locked.
     * @throws { BusinessError } 12500010 - The type of credential has not been enrolled.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.userIAM.userAuth.UserAuthInstance.start
     */
    start: () => void;

    /**
     * Cancels this authentication.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.userIAM.userAuth.UserAuthInstance.cancel
     */
    cancel: () => void;
  }

  /**
   * Checks whether the specified authentication capability is supported.
   *
   * @permission ohos.permission.ACCESS_BIOMETRIC
   * @param { UserAuthType } authType - Authentication type. PIN is supported since API version 11.
   * @param { AuthTrustLevel } authTrustLevel - Authentication trust level.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500005 - The authentication type is not supported.
   * @throws { BusinessError } 12500006 - The authentication trust level is not supported.
   * @throws { BusinessError } 12500010 - The type of credential has not been enrolled.
   * @throws { BusinessError } 12500013 - Operation failed because of PIN expired. [since 12]
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAvailableStatus(authType: UserAuthType, authTrustLevel: AuthTrustLevel): void;

  /**
   * Represents the state of a credential enrolled.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface EnrolledState {
    /**
     * Credential digest, which is randomly generated when a credential is added.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    credentialDigest: int;

    /**
     * Number of enrolled credentials.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    credentialCount: int;
  }

  /**
   * Obtains the credential state.
   *
   * @permission ohos.permission.ACCESS_BIOMETRIC
   * @param { UserAuthType } authType - Authentication type.
   * @returns { EnrolledState } Credential state obtained if the operation is successful.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500005 - The authentication type is not supported.
   * @throws { BusinessError } 12500010 - The type of credential has not been enrolled.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getEnrolledState(authType: UserAuthType): EnrolledState;

  /**
   * Enumerates the lockout status of an identity authentication type.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface AuthLockState {
    /**
     * Whether the authentication is locked. **true** means yes; **false** otherwise.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    isLocked: boolean;

    /**
     * Number of remaining attempts before the authentication is locked. The maximum value is **5**.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    remainingAuthAttempts: int;

    /**
     * Remaining lockout duration, in milliseconds.
     *
     * If the authentication is permanently locked, the value is **PERMANENT_LOCKOUT_DURATION**. You need to unlock it
     * using the PIN.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    lockoutDuration: int;
  }

  /**
   * Queries the lockout state of the specified authentication type. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_BIOMETRIC
   * @param { UserAuthType } authType - Authentication type.
   * @returns { Promise<AuthLockState> } Promise used to return the result. An error is reported when the operation
   *     fails.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500005 - The authentication type is not supported.
   * @throws { BusinessError } 12500008 - The parameter is out of range.
   * @throws { BusinessError } 12500010 - The type of credential has not been enrolled.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function getAuthLockState(authType: UserAuthType): Promise<AuthLockState>;

  /**
   * Obtains an **AuthInstance** instance for user authentication.
   *
   * > **NOTE**
   *
   * > An **AuthInstance** instance can be used for authentication only once.
   *
   * @param { Uint8Array } challenge - Challenge value. It cannot exceed 32 bytes and can be passed in Uint8Array([])
   *     format.
   * @param { UserAuthType } authType - Authentication type. Currently, **FACE** and **FINGERPRINT** are supported.
   * @param { AuthTrustLevel } authTrustLevel - Authentication trust level.
   * @returns { AuthInstance } **AuthInstance** instance obtained.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500005 - The authentication type is not supported.
   * @throws { BusinessError } 12500006 - The authentication trust level is not supported.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead userAuth.getUserAuthInstance
   */
  function getAuthInstance(challenge: Uint8Array, authType: UserAuthType, authTrustLevel: AuthTrustLevel): AuthInstance;

  /**
   * Enumerates the window types of the authentication widget.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum WindowModeType {
    /**
     * Dialog box.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DIALOG_BOX = 1,

    /**
     * Full screen.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FULLSCREEN = 2
  }

  /**
   * Enumerates the modes for reusing authentication results.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ReuseMode {
    /**
     * The device unlock authentication result can be reused within the validity period if the authentication type
     * matches any of the authentication types specified for this authentication.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTH_TYPE_RELEVANT = 1,

    /**
     * The device unlock authentication result can be reused within the validity period regardless of the authentication
     * type.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTH_TYPE_IRRELEVANT = 2,

    /**
     * Any identity authentication result (including device unlock authentication result) can be reused within the
     * validity period if the authentication type matches any of the authentication types specified for this
     * authentication.
     *
     * This API can be used in atomic services since API version 14.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    CALLER_IRRELEVANT_AUTH_TYPE_RELEVANT = 3,

    /**
     * Any identity authentication result (including device unlock authentication result) can be reused within the
     * validity period regardless of the authentication type.
     *
     * This API can be used in atomic services since API version 14.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    CALLER_IRRELEVANT_AUTH_TYPE_IRRELEVANT = 4
  }

  /**
   * Represents information about the authentication result reuse.
   *
   * > **NOTE**
   *
   * > If the credential changes within the reuse duration after a successful identity authentication (including device
   * > unlock authentication), the authentication result can still be reused and the actual **EnrolledState** is
   * > returned in the authentication result. If the credential used for the previous authentication has been deleted
   * > when the authentication result is used:
   *
   * - If the deleted credential is face or fingerprint, the authentication result can still be reused, but
   * **credentialCount** and **credentialDigest** in the **EnrolledState** returned are both **0**.
   * - If the deleted credential is a lock screen password, the reuse will fail.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ReuseUnlockResult {
    /**
     * Authentication result reuse mode.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reuseMode: ReuseMode;

    /**
     * Reuse duration of the authentication result, in milliseconds. The value must be greater than 0 and the maximum value is
     * [MAX_ALLOWABLE_REUSE_DURATION]{@link userAuth.MAX_ALLOWABLE_REUSE_DURATION}.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reuseDuration: int;
  }

  /**
   * Represents the user authentication parameters.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AuthParam {
    /**
     * Random challenge value, which can be used to prevent replay attacks. It cannot exceed 32 bytes and can be passed
     * in **Uint8Array([])** format.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    challenge: Uint8Array;

    /**
     * Authentication type list, which specifies the types of authentication provided on the user authentication page.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    authType: UserAuthType[];

    /**
     * Authentication trust level. For details, see
     * [Principles for Classifying Biometric Authentication Trust Levels](docroot://security/UserAuthenticationKit/user-authentication-overview.md#principles-for-classifying-biometric-authentication-trust-levels)
     * .
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    authTrustLevel: AuthTrustLevel;

    /**
     * Information about the authentication result reuse. By default, the result cannot be reused.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reuseUnlockResult?: ReuseUnlockResult;

    /**
     * ID of the user to be authenticated. The value is a positive integer greater than or equal to 0. The default value
     * is the ID of the current user.
     *
     * This is a system API.
     *
     * @default The ID of the current user. The value is a positive integer greater than or equal to 0.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    userId?: int;

    /**
     * Whether to skip the authentication mode that has been locked and automatically switch to another authentication
     * mode. If no authentication mode can be switched to, the component is disabled and an authentication freezing
     * error code is returned.
     *
     * **true**: When biometric authentication is frozen, the system skips the countdown page and directly switches to
     * another authentication mode.
     *
     * **false** (default): The countdown page is not skipped.
     *
     * This API can be used in atomic services since API version 20.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    skipLockedBiometricAuth?: boolean;

    /**
     * List of credential IDs. If the credential ID list is not empty, the specified credential ID is authenticated.
     *
     * This is a system API.
     *
     * This API can be used only in the stage model.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    credentialIdList?: Uint8Array[];
  }

  /**
   * Represents the information presented on the user authentication page.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface WidgetParam {
    /**
     * Title of the user authentication page, which cannot be empty or exceed 500 characters. You are advised to set it
     * to the authentication purpose, such as payment or application login.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    title: string;

    /**
     * Text on the navigation button. It cannot exceed 60 characters. It is supported in single fingerprint or facial
     * authentication before API version 18. Since API version 18, it is also supported in combined facial and
     * fingerprint authentication. By default, the custom navigation button is not displayed.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    navigationButtonText?: string;

    /**
     * Display format of the user authentication page. The default value is **WindowModeType.DIALOG_BOX**.
     *
     * This is a system API.
     *
     * @default WindowModeType.DIALOG_BOX
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    windowMode?: WindowModeType;

    /**
     * Whether to display the authentication dialog box in modal application mode. This mode is applicable only to 2-in-
     * 1 devices. If this mode is not used or other types of devices are used, the authentication dialog box is
     * displayed in modal system mode. By default, the identity authentication dialog box is displayed in modal system
     * mode.
     *
     * This API can be used in atomic services since API version 18.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    uiContext?: Context;
  }

  /**
   * Represents the user authentication result. If the authentication is successful, the authentication type and token
   * information are returned.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface UserAuthResult {
    /**
     * User authentication result. If the authentication is successful, **SUCCESS** is returned. Otherwise, an error
     * code is returned. For details, see [UserAuthResultCode]{@link userAuth.UserAuthResultCode}.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    result: int;

    /**
     * Authentication token information. The value can contain a maximum of 1024 bytes.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    token?: Uint8Array;

    /**
     * Authentication type.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    authType?: UserAuthType;

    /**
     * Credential state.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    enrolledState?: EnrolledState;
  }

  /**
   * Called to return the authentication result. If the authentication is successful,
   * UserAuthResult contains the token information.
   *
   * @param { UserAuthResult } result - Authentication result information.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 23 static
   */
  type AuthCallbackOnResultFunc = (result: UserAuthResult) => void;

  /**
   * Provides callbacks to return the authentication result.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface IAuthCallback {
    /**
     * Called to return the authentication result. If the authentication is successful, **UserAuthResult** contains the
     * token information.
     *
     * @param { UserAuthResult } result - Authentication result.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    onResult(result: UserAuthResult): void;

    /**
     * Called to return the authentication result. If the authentication is successful,
     * UserAuthResult contains the token information.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 23 static
     */
    onResult: AuthCallbackOnResultFunc;
  }

  /**
   * Enumerates the intermediate states of identity authentication.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum UserAuthTipCode {
    /**
     * The authentication failed.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    COMPARE_FAILURE = 1,

    /**
     * The authentication has timed out.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    TIMEOUT = 2,

    /**
     * The authentication is temporarily locked.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    TEMPORARILY_LOCKED = 3,

    /**
     * The authentication is permanently locked.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PERMANENTLY_LOCKED = 4,

    /**
     * The identity authentication page is loaded.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    WIDGET_LOADED = 5,

    /**
     * The current identity authentication page is switched to another authentication page or the identity
     * authentication component is closed.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    WIDGET_RELEASED = 6,

    /**
     * Authentication is locked after a failed attempt.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    COMPARE_FAILURE_WITH_FROZEN = 7
  }

  /**
   * Represents the intermediate authentication status.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface AuthTipInfo {
    /**
     * Authentication type of the intermediate status.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    tipType: UserAuthType;

    /**
     * Intermediate status.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    tipCode: UserAuthTipCode;
  }

  /**
   * Defines the callback to return the intermediate authentication status.
   *
   * @param { AuthTipInfo } authTipInfo - Intermediate authentication status.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  type AuthTipCallback = (authTipInfo: AuthTipInfo) => void;

  /**
   * Provides APIs for user authentication. The user authentication widget is supported.
   * Before using the APIs of **UserAuthInstance**, you must obtain a **UserAuthInstance** instance by using
   * [getUserAuthInstance]{@link userAuth.getUserAuthInstance}.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface UserAuthInstance {
    /**
     * Subscribes to the user authentication result. This API is used to obtain the final identity authentication result
     * after the user completes identity authentication interaction with the authentication component. Before the
     * authentication component disappears, the authentication failure attempts are not returned through this API. To
     * perceive each authentication failure, use the [on('authTip')]{@link userAuth.UserAuthInstance.on_authTip} API for
     * subscription.
     *
     * > **NOTE**
     *
     * > On PCs/2-in-1 devices, if an application initiates authentication in modal application mode (that is, a valid
     * > **uiContext** is passed when the user API parameter [widgetParam]{@link userAuth.WidgetParam} is configured)
     * > and receives the authentication result, and if other windows need to be displayed, the application needs to
     * > obtain the flag message released by the component pop-up window and subscribe to the component release message
     * > (**authTipInfo.tipCode = UserAuthTipCode.WIDGET_RELEASED**) through the
     * > [on('authTip')]{@link userAuth.UserAuthInstance.on_authTip} API.
     *
     * @param { 'result' } type - Event type. The value is **result**, which indicates the authentication result.
     * @param { IAuthCallback } callback - Callback used to return the user authentication result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'result', callback: IAuthCallback): void;

    /**
     * Subscribes to the user authentication result. This API is used to obtain the final identity authentication result
     * after the user completes identity authentication interaction with the authentication component. Before the
     * authentication component disappears, the authentication failure attempts are not returned through this API. To
     * perceive each authentication failure, use the [on('authTip')]{@link userAuth.UserAuthInstance.on_authTip} API for
     * subscription.
     *
     * @param { IAuthCallback } callback - Callback used to return the user authentication result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 23 static
     */
    onResult(callback: IAuthCallback): void;

    /**
     * Unsubscribes from the user authentication result.
     *
     * > **NOTE**
     *
     * > The [UserAuthInstance]{@link userAuth.UserAuthInstance} instance used to invoke this API must be the one used
     * > to subscribe to the event.
     *
     * @param { 'result' } type - Event type. The value is **result**, which indicates the authentication result.
     * @param { IAuthCallback } callback - Callback used to return the user authentication result. If this parameter is
     *     not passed, the value passed when the
     *     [on('result')]{@link userAuth.IAuthCallback.onResult(result: UserAuthResult)} API is called is used by
     *     default.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'result', callback?: IAuthCallback): void;

    /**
     * Unsubscribes from the user authentication result.
     *
     * > **NOTE**
     *
     * > The [UserAuthInstance]{@link userAuth.UserAuthInstance} instance used to invoke this API must be the one used
     * > to subscribe to the event.
     *
     * <p><strong>NOTE</strong>:
     * <br>The UserAuthInstance instance used to invoke this API must be the one used to subscribe to the event.
     * </p>
     *
     * @param { IAuthCallback } [callback] - Callback to unregister.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 23 static
     */
    offResult(callback?: IAuthCallback): void;

    /**
     * Starts authentication.
     *
     * > **NOTE**
     *
     * > Each **UserAuthInstance** can be used for authentication only once.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC [since 10 - 19]
     * @permission ohos.permission.ACCESS_BIOMETRIC or ohos.permission.USER_AUTH_FROM_BACKGROUND [since 20]
     * @throws { BusinessError } 201 - Permission denied. Possible causes:
     *     <br>1. No permission to access biometric.
     *     <br>2. No permission to start authentication from background.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Incorrect parameter types.
     * @throws { BusinessError } 12500001 - Authentication failed. [since 10 - 19]
     * @throws { BusinessError } 12500002 - General operation error.
     * @throws { BusinessError } 12500003 - Authentication canceled.
     * @throws { BusinessError } 12500004 - Authentication timeout. [since 10 - 19]
     * @throws { BusinessError } 12500005 - The authentication type is not supported.
     * @throws { BusinessError } 12500006 - The authentication trust level is not supported.
     * @throws { BusinessError } 12500007 - Authentication service is busy. [since 10 - 19]
     * @throws { BusinessError } 12500009 - Authentication is locked out.
     * @throws { BusinessError } 12500010 - The type of credential has not been enrolled.
     * @throws { BusinessError } 12500011 - Switched to the customized authentication process.
     * @throws { BusinessError } 12500013 - Operation failed because of PIN expired. [since 12]
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    start(): void;

    /**
     * Cancels this authentication.
     *
     * > **NOTE**
     *
     * > **UserAuthInstance** must be the instance being authenticated.
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Incorrect parameter types.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    cancel(): void;

    /**
     * Subscribes to authentication tip information. This API is used to obtain the component startup and exit messages
     * and each authentication failure. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     *
     * > On PCs/2-in-1 devices, if an application initiates authentication in modal application mode (that is, a valid
     * > **uiContext** is passed when the user API parameter [widgetParam]{@link userAuth.WidgetParam} is configured)
     * > and receives the authentication result, and if other windows need to be displayed, the application needs to
     * > obtain the flag message released by the component pop-up window and subscribe to the component release message
     * > (**authTipInfo.tipCode = UserAuthTipCode.WIDGET_RELEASED**) through the
     * > [on('authTip')]{@link userAuth.UserAuthInstance.on_authTip} API.
     *
     * @param { 'authTip' } type - Event type. The supported event is **'authTip'**. This event is triggered when
     *     [start()]{@link userAuth.UserAuthInstance.start} is called and authentication is initiated.
     * @param { AuthTipCallback } callback - Callback used to return the intermediate authentication status.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'authTip', callback: AuthTipCallback): void;

    /**
     * Turn on authentication tip event listening.
     *
     * @param { AuthTipCallback } callback - Indicates the listener.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 23 static
     */
    onAuthTip(callback: AuthTipCallback): void;

    /**
     * Unsubscribes from the event for intermediate authentication status.
     *
     * > **NOTE**
     *
     * > The [UserAuthInstance]{@link userAuth.UserAuthInstance} instance used to invoke this API must be the one used
     * > to subscribe to the event.
     *
     * @param { 'authTip' } type - Event type. The supported event is **'authTip'**. This API unsubscribes from the
     *     event triggered by [on('authtip')]{@link userAuth.UserAuthInstance.on_authTip} after the
     *     [start()]{@link userAuth.UserAuthInstance.start} call and the initiation of authentication.
     * @param { AuthTipCallback } [callback] - Callback used to return the intermediate authentication status. If this
     *     parameter is not passed, the value passed when the
     *     [on('authtip')]{@link userAuth.UserAuthInstance.on_authTip} API is called is used by default.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'authTip', callback?: AuthTipCallback): void;

    /**
     * Unsubscribes from the event for intermediate authentication status.
     *
     * > **NOTE**
     *
     * > The [UserAuthInstance]{@link userAuth.UserAuthInstance} instance used to invoke this API must be the one used
     * > to subscribe to the event.
     *
     * @param { AuthTipCallback } [callback] - Indicates the listener.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 23 static
     */
    offAuthTip(callback?: AuthTipCallback): void;
  }

  /**
   * Obtains a [UserAuthInstance]{@link userAuth.UserAuthInstance} instance for user authentication. The user
   * authentication widget is also supported.
   *
   * > **NOTE**
   *
   * > Each **UserAuthInstance** can be used for authentication only once.
   *
   * @param { AuthParam } authParam - User authentication parameters.
   * @param { WidgetParam } widgetParam - Parameters on the user authentication page.
   * @returns { UserAuthInstance } **UserAuthInstance** instance that supports UI.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500005 - The authentication type is not supported.
   * @throws { BusinessError } 12500006 - The authentication trust level is not supported.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getUserAuthInstance(authParam: AuthParam, widgetParam: WidgetParam): UserAuthInstance;

  /**
   * Defines the type of the user authentication notification.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum NoticeType {
    /**
     * Notification from the user authentication widget.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    WIDGET_NOTICE = 1
  }

  /**
   * Sends a notification from the user authentication widget.
   *
   * @permission ohos.permission.SUPPORT_USER_AUTH
   * @param { NoticeType } noticeType - Notification type.
   * @param { string } eventData - Event data. The data length range is 0 to 65536.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Called by non-system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 12500002 - General operation error.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function sendNotice(noticeType: NoticeType, eventData: string): void;

  /**
   * Enumerates the authentication result codes.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum UserAuthResultCode {
    /**
     * The operation is successful.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SUCCESS = 12500000,

    /**
     * The authentication failed.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    FAIL = 12500001,

    /**
     * A general operation error occurred.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    GENERAL_ERROR = 12500002,

    /**
     * The authentication is canceled.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    CANCELED = 12500003,

    /**
     * The authentication has timed out.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TIMEOUT = 12500004,

    /**
     * The authentication type is not supported.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NOT_SUPPORT = 12500005,

    /**
     * The authentication trust level is not supported.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TRUST_LEVEL_NOT_SUPPORT = 12500006,

    /**
     * The system does not respond.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    BUSY = 12500007,

    /**
     * Parameter verification failed.
     *
     * This API can be used in atomic services since API version 20.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    INVALID_PARAMETERS = 12500008,

    /**
     * The authentication executor is locked.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCKED = 12500009,

    /**
     * The user has not enrolled the specified system identity authentication credential.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_ENROLLED = 12500010,

    /**
     * The user cancels the system authentication and selects a custom authentication of the application. The caller
     * needs to launch the custom authentication page.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CANCELED_FROM_WIDGET = 12500011,

    /**
     * The authentication failed because the lock screen password has expired.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PIN_EXPIRED = 12500013,

    /**
     * The AuthToken is invalid.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    AUTH_TOKEN_CHECK_FAILED = 12500015,

    /**
     * The interval between the AuthToken issuance time and the AuthToken verification time exceeds the maximum validity
     * period.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    AUTH_TOKEN_EXPIRED = 12500016,

    /**
     * Failed to reuse the authentication result.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    REUSE_AUTH_RESULT_FAILED = 12500017
  }

  /**
   * Provides APIs for managing the user authentication widget. You can use the APIs to register the user authentication
   * widget with UserAuthWidgetMgr for management and scheduling.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface UserAuthWidgetMgr {
    /**
     * Subscribes to commands from the user authentication framework for the user authentication widget.
     *
     * @param { 'command' } type - Event type. **command** indicates the command sent from the user authentication
     *     framework to the user authentication widget.
     * @param { IAuthWidgetCallback } callback - Callback used to return the command from the user authentication
     *     framework to the user authentication widget.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    on(type: 'command', callback: IAuthWidgetCallback): void;

    /**
     * Subscribes to commands from the user authentication framework for the user authentication widget.
     *
     * @param { IAuthWidgetCallback } callback - Callback used to return the command from the user authentication
     *     framework to the user authentication widget.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onCommand(callback: IAuthWidgetCallback): void;

    /**
     * Unsubscribes from commands sent from the user authentication framework.
     *
     * @param { 'command' } type - Event type. **command** indicates the command sent from the user authentication
     *     framework to the user authentication widget.
     * @param { IAuthWidgetCallback } callback - Callback used to return the command from the user authentication
     *     framework to the user authentication widget.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    off(type: 'command', callback?: IAuthWidgetCallback): void;

    /**
     * Unsubscribes from commands sent from the user authentication framework.
     *
     * @param { IAuthWidgetCallback } [callback] - Callback to unregister.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    offCommand(callback?: IAuthWidgetCallback): void;
  }

  /**
   * Obtains a **UserAuthWidgetMgr** instance for user authentication.
   *
   * > **NOTE**
   *
   * > A **UserAuthInstance** instance can be used for an authentication only once.
   *
   * @permission ohos.permission.SUPPORT_USER_AUTH
   * @param { int } version - Version of the user authentication widget.
   * @returns { UserAuthWidgetMgr } **UserAuthWidgetMgr** instance obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Called by non-system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 12500002 - General operation error.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getUserAuthWidgetMgr(version: int): UserAuthWidgetMgr;

  /**
   * Called to return the command sent from the user authentication framework to the user authentication widget.
   *
   * @param { string } cmdData - Command sent from the user authentication framework to the user authentication widget.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type AuthWidgetCallbackSendCommandFunc = (cmdData: string) => void;

  /**
   * Provides the callback for returning the commands sent from the user authentication framework to the user
   * authentication widget.
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface IAuthWidgetCallback {
    /**
     * Called to return the command sent from the user authentication framework to the user authentication widget.
     *
     * @param { string } cmdData - Command from the user authentication framework to the user authentication widget.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    sendCommand(cmdData: string): void;

    /**
     * Called to return the command sent from the user authentication framework to the user authentication widget.
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    sendCommand: AuthWidgetCallbackSendCommandFunc;
  }

  /**
   * Queries whether there is any reusable identity authentication result.
   *
   * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
   * @param { AuthParam } authParam - User authentication parameters.
   * @returns { Uint8Array } Reusable AuthToken, up to 1024 bytes.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Called by non-system application.
   * @throws { BusinessError } 12500002 - General operation error.
   * @throws { BusinessError } 12500008 - The parameter is out of range.
   * @throws { BusinessError } 12500017 - Failed to reuse authentication result.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function queryReusableAuthResult(authParam: AuthParam): Uint8Array;
}

export default userAuth;