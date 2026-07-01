/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @file 用户认证
 * @kit UserAuthenticationKit
 */

/*** if arkts dynamic */
import type { AsyncCallback } from './@ohos.base';
/*** endif */
/*** if arkts static */
import Context from './application/Context';
import window from '@ohos.window';

/*** endif */

/**
 * **userAuth**模块是OpenHarmony系统中用于用户身份认证的核心模块，提供了设备解锁、支付验证、应用登录等场景下的身份认证能力。
 *
 * 该模块支持多种生物特征认证方式（人脸、指纹）和密码认证（PIN），并提供不同级别的安全信任等级。从API版本26.0.0开始，新增伴随设备认证的方式。
 *
 * 该模块主要用于以下场景：
 *
 * - 设备解锁认证。
 * - 金融支付验证。
 * - 应用登录保护。
 * - 敏感操作确认。
 *
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @atomicservice [since 12]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace userAuth {
  /**
   * 复用解锁认证结果最大有效时长，值为300000毫秒（5分钟）。用于限制认证结果复用的最大时长，防止长时间复用过期的认证结果带来的安全风险。该常量可作为
   * [ReuseUnlockResult]{@link userAuth.ReuseUnlockResult}中reuseDuration参数的最大值。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   */
  const MAX_ALLOWABLE_REUSE_DURATION: 300000;
  /**
   * 永久锁定时长，单位为毫秒。取值为0x7fffffffff，代表认证永久锁定，不代表具体锁定时长。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  const MAX_ALLOWABLE_REUSE_DURATION: int;

  /**
   * 永久冻结时间，值为0x7fffffff毫秒。当认证不通过次数达到上限后，认证器将进入永久冻结状态，此时需要通过PIN认证才能解锁。该值用于标识认证器的永久冻结状态，可通过
   * [AuthLockState]{@link userAuth.AuthLockState}的lockoutDuration字段返回。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 22 dynamic
   */
  const PERMANENT_LOCKOUT_DURATION: int = 0x7fffffff;

  /**
   * 永久锁定时长，单位为毫秒。取值为0x7fffffffff，代表认证永久锁定，不代表具体锁定时长。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @stagemodelonly
   * @since 23 static
   */
  const PERMANENT_LOCKOUT_DURATION: int;

  /**
   * 表示认证结果的枚举。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.UserAuthResultCode
   */
  export enum AuthenticationResult {
    /**
     * 设备不支持当前的认证方式。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.TYPE_NOT_SUPPORT
     */
    NO_SUPPORT = -1,

    /**
     * 认证成功。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.SUCCESS
     */
    SUCCESS = 0,

    /**
     * 比对失败。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.FAIL
     */
    COMPARE_FAILURE = 1,

    /**
     * 用户取消认证。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.CANCELED
     */
    CANCELED = 2,

    /**
     * 认证超时。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.TIMEOUT
     */
    TIMEOUT = 3,

    /**
     * 开启相机失败。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     */
    CAMERA_FAIL = 4,

    /**
     * 认证服务忙，请稍后重试。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.BUSY
     */
    BUSY = 5,

    /**
     * 认证参数无效。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.INVALID_PARAMETERS
     */
    INVALID_PARAMETERS = 6,

    /**
     * 认证失败次数过多，已锁定。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.LOCKED
     */
    LOCKED = 7,

    /**
     * 未录入认证凭据。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.NOT_ENROLLED
     */
    NOT_ENROLLED = 8,

    /**
     * 其他错误。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.ResultCode.GENERAL_ERROR
     */
    GENERAL_ERROR = 100
  }

  /**
   * 表示认证类型。
   *
   * @unionmember { 'ALL' } 预留参数，当前版本暂不支持ALL类型的认证。
   * @unionmember { 'FACE_ONLY' } 人脸认证。
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.UserAuthType
   */
  type AuthType = 'ALL' | 'FACE_ONLY';

  /**
   * 表示认证的安全级别。
   *
   * @unionmember { 'S1' } 认证结果的信任等级级别1，代表该认证方案能够识别用户个体，有一定的活体检测能力。常用的业务场景有业务风控、一般个人数据查询等。
   * @unionmember { 'S2' } 认证结果的信任等级级别2，代表该认证方案能够精确识别用户个体，有一定的活体检测能力。常用的业务场景有维持设备解锁状态，应用登录等。
   * @unionmember { 'S3' } 认证结果的信任等级级别3，代表该认证方案能够精确识别用户个体，有较强的活体检测能力。常用的业务场景有设备解锁等。
   * @unionmember { 'S4' } 认证结果的信任等级级别4，代表该认证方案能够高精度的识别用户个体，有很强的活体检测能力。常用的业务场景有小额支付等。
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.AuthTrustLevel
   */
  type SecureLevel = 'S1' | 'S2' | 'S3' | 'S4';

  /**
   * 认证器对象。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.AuthInstance
   */
  interface Authenticator {
    /**
     * 执行用户认证，使用callback方式作为异步方法。
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { AuthType } type - 认证类型，当前只支持"FACE_ONLY"。<br/>ALL为预留参数。当前版本暂不支持ALL类型的认证。
     * @param { SecureLevel } level - 安全级别，对应认证的安全级别，有效值为"S1"（最低）、"S2"、"S3"、"S4"（最高）。<br/>具备3D人脸识别能力的设备支持"S3"及以下安全级别的认证。
     *     <br/>具备2D人脸识别能力的设备支持"S2"及以下安全级别的认证。
     * @param { AsyncCallback<number> } callback - 回调函数。number表示认证结果，参见
     *     [AuthenticationResult]{@link userAuth.AuthenticationResult}。
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.AuthInstance.start
     */
    execute(type: AuthType, level: SecureLevel, callback: AsyncCallback<number>): void;

    /**
     * 执行用户认证，使用promise方式作为异步方法。
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { AuthType } type - 认证类型，当前只支持"FACE_ONLY"。<br/>ALL为预留参数。当前版本暂不支持ALL类型的认证。
     * @param { SecureLevel } level - 安全级别，对应认证的安全级别，有效值为"S1"（最低）、"S2"、"S3"、"S4"（最高）。<br/>具备3D人脸识别能力的设备支持"S3"及以下安全级别的认证。
     *     <br/>具备2D人脸识别能力的设备支持"S2"及以下安全级别的认证。
     * @returns { Promise<number> } 返回携带一个number的Promise。number 为认证结果，参见
     *     [AuthenticationResult]{@link userAuth.AuthenticationResult}。
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead userAuth.AuthInstance.start
     */
    execute(type: AuthType, level: SecureLevel): Promise<number>;
  }

  /**
   * 获取Authenticator对象，用于执行用户身份认证。
   *
   * @returns { Authenticator } 认证器对象。
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead userAuth.getAuthInstance
   */
  function getAuthenticator(): Authenticator;

  /**
   * 认证器对象。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead userAuth.AuthInstance
   */
  class UserAuth {
    /**
     * 创建认证器对象。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.getAuthInstance
     */
    constructor();

    /**
     * 获取认证器的版本信息。
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @returns { number } 认证器版本信息。
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    getVersion(): number;

    /**
     * 查询指定类型和等级的认证能力是否支持。
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { UserAuthType } authType - 认证类型，当前支持FACE和FINGERPRINT。
     * @param { AuthTrustLevel } authTrustLevel - 认证信任等级。
     * @returns { number } 查询结果，结果为SUCCESS时表示支持，其他返回值参见[ResultCode]{@link userAuth.ResultCode}。
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.getAvailableStatus
     */
    getAvailableStatus(authType: UserAuthType, authTrustLevel: AuthTrustLevel): number;

    /**
     * 执行用户认证，使用回调函数返回结果。
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { Uint8Array } challenge - 挑战值，可以传Uint8Array([])。
     * @param { UserAuthType } authType - 认证类型，当前支持FACE和FINGERPRINT。
     * @param { AuthTrustLevel } authTrustLevel - 认证信任等级。
     * @param { IUserAuthCallback } callback - 回调函数。
     * @returns { Uint8Array } ContextId，作为取消认证[cancelAuth]{@link userAuth.UserAuth#cancelAuth}接口的入参。
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
     * 表示通过contextID取消本次认证。
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @param { Uint8Array } contextID - 上下文的标识，通过[auth]{@link userAuth.UserAuth#auth}接口获取。
     * @returns { number } 取消认证的结果，结果为SUCCESS时表示取消成功，其他返回值参见[ResultCode]{@link userAuth.ResultCode}。
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.AuthInstance.cancel
     */
    cancelAuth(contextID: Uint8Array): number;
  }

  /**
   * 返回认证结果的回调对象。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead userAuth.AuthEvent
   */
  interface IUserAuthCallback {
    /**
     * 回调函数，返回认证结果。
     *
     * - **result**: 认证结果，参见[ResultCode]{@link userAuth.ResultCode}。
     * - **extraInfo**: 扩展信息，不同情况下的具体信息。如果身份验证通过，则在extraInfo中返回用户认证令牌；如果身份验证失败，则在extraInfo中返回剩余的用户认证次数；如果身份验证执行器被锁定，则在
     * extraInfo中返回冻结时间，类型为[AuthResult]{@link userAuth.AuthResult}。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.AuthEvent.callback
     */
    onResult: (result: number, extraInfo: AuthResult) => void;

    /**
     * 回调函数，返回认证过程中的提示信息，非必须实现。
     *
     * - **module**: 发送提示信息的模块标识。
     * - **acquire**: 认证执过程中的提示信息。
     * - **extraInfo**: 预留字段。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.AuthEvent.callback
     */
    onAcquireInfo?: (module: number, acquire: number, extraInfo: any) => void;
  }

  /**
   * 表示认证结果的对象。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead userAuth.AuthResultInfo
   */
  interface AuthResult {
    /**
     * 认证通过的令牌信息。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.AuthResultInfo.token
     */
    token?: Uint8Array;

    /**
     * 剩余的认证操作次数。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.AuthResultInfo.remainAttempts
     */
    remainTimes?: number;

    /**
     * 认证操作的冻结时间。单位为毫秒。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.AuthResultInfo.lockoutDuration
     */
    freezingTime?: number;
  }

  /**
   * 表示返回码的枚举。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead userAuth.UserAuthResultCode
   */
  enum ResultCode {
    /**
     * 执行成功。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.SUCCESS
     */
    SUCCESS = 0,

    /**
     * 认证失败。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.FAIL
     */
    FAIL = 1,

    /**
     * 操作通用错误。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.GENERAL_ERROR
     */
    GENERAL_ERROR = 2,

    /**
     * 操作取消。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.CANCELED
     */
    CANCELED = 3,

    /**
     * 操作超时。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.TIMEOUT
     */
    TIMEOUT = 4,

    /**
     * 不支持的认证类型。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.TYPE_NOT_SUPPORT
     */
    TYPE_NOT_SUPPORT = 5,

    /**
     * 不支持的认证等级。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.TRUST_LEVEL_NOT_SUPPORT
     */
    TRUST_LEVEL_NOT_SUPPORT = 6,

    /**
     * 忙碌状态。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.BUSY
     */
    BUSY = 7,

    /**
     * 无效参数。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.INVALID_PARAMETERS
     */
    INVALID_PARAMETERS = 8,

    /**
     * 认证器已锁定。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.LOCKED
     */
    LOCKED = 9,

    /**
     * 用户未录入认证信息。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead userAuth.UserAuthResultCode.NOT_ENROLLED
     */
    NOT_ENROLLED = 10
  }

  /**
   * 表示人脸认证过程中提示码的枚举。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 11
   */
  enum FaceTips {
    /**
     * 光线太强，获取的图像太亮。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_BRIGHT = 1,

    /**
     * 光线太暗，获取的图像太暗。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_DARK = 2,

    /**
     * 人脸距离设备过近。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_CLOSE = 3,

    /**
     * 人脸距离设备过远。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_FAR = 4,

    /**
     * 设备太高，仅获取到人脸上部。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_HIGH = 5,

    /**
     * 设备太低，仅获取到人脸下部。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_LOW = 6,

    /**
     * 设备太靠右，仅获取到人脸右部。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_RIGHT = 7,

    /**
     * 设备太靠左，仅获取到人脸左部。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_LEFT = 8,

    /**
     * 在图像采集过程中，用户人脸移动太快。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_TOO_MUCH_MOTION = 9,

    /**
     * 没有正视摄像头。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_POOR_GAZE = 10,

    /**
     * 没有检测到人脸信息。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FACE_AUTH_TIP_NOT_DETECTED = 11
  }

  /**
   * 表示指纹认证过程中提示码的枚举。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 8 dynamiconly
   * @deprecated since 11
   */
  enum FingerprintTips {
    /**
     * 获取的指纹图像良好。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_GOOD = 0,

    /**
     * 由于传感器上可疑或检测到的污垢，指纹图像噪音过大。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_DIRTY = 1,

    /**
     * 由于检测到的情况，指纹图像噪声太大，无法处理。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_INSUFFICIENT = 2,

    /**
     * 仅检测到部分指纹图像。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_PARTIAL = 3,

    /**
     * 快速移动，指纹图像不完整。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_TOO_FAST = 4,

    /**
     * 缺少运动，指纹图像无法读取。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     */
    FINGERPRINT_AUTH_TIP_TOO_SLOW = 5
  }

  /**
   * 表示身份认证的凭据类型枚举。该枚举定义了系统支持的认证类型，包括锁屏密码认证（PIN）、生物特征认证（人脸、指纹）等。应用在发起认证时需指定认证类型列表，用户可选择其中任意一种完成认证。不同认证类型具有不同的安全强度和用户体验特
   * 点，应用应根据业务场景选择合适的认证类型。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum UserAuthType {
    /**
     * 口令认证。用户通过输入锁屏密码完成认证。锁屏密码认证具有高安全性，认证可信等级可达ATL4，适用于支付、重要操作确认等高安全场景。用户需要手动输入，体验不如生物认证便捷。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PIN = 1,

    /**
     * 人脸认证。用户通过人脸识别完成认证，系统会验证用户面部特征与已注册人脸的匹配度。人脸认证支持不同级别的活体检测能力，详细划分原则可参考
     * [生物认证可信等级划分原则](docroot://security/UserAuthenticationKit/user-authentication-overview.md#生物认证可信等级划分原则)。优点是体验便捷，缺点是
     * 对设备和光照条件有一定要求。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    FACE = 2,

    /**
     * 指纹认证。用户通过指纹传感器完成认证，系统会验证用户指纹特征与已注册指纹的匹配度。指纹认证支持多种认证可信等级，详细划分原则可参考
     * [生物认证可信等级划分原则](docroot://security/UserAuthenticationKit/user-authentication-overview.md#生物认证可信等级划分原则)，适用于中等安全场景。优
     * 点是操作简单快捷，缺点是设备需配备指纹传感器，且湿手或指纹磨损可能影响识别效果。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT = 4,

    /**
     * 隐私密码。一种特殊的PIN认证类型，一般用于解锁后的用户二次访问控制。例如用户可以选择使用隐私密码保护应用锁，从而阻止知道锁屏密码的家人访问自己的某些应用。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    PRIVATE_PIN = 16,

    /**
     * 伴随设备认证。用户通过佩戴的伴随设备完成认证。伴随设备认证支持多种认证可信等级，详细划分原则可参考
     * [生物认证可信等级划分原则](docroot://security/UserAuthenticationKit/user-authentication-overview.md#生物认证可信等级划分原则)。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    COMPANION_DEVICE = 64
  }

  /**
   * 表示认证结果的信任等级枚举。该枚举定义了四个认证可信等级，用于描述认证结果的安全强度。认证可信等级越高，表示认证方案的活体检测能力越强、用户身份识别越精确，适用于更高安全要求的业务场景。应用应根据业务场景的安全需求选择合适的认证可
   * 信等级。
   *
   * 典型场景及举例可参考[生物认证可信等级划分原则](docroot://security/UserAuthenticationKit/user-authentication-overview.md#生物认证可信等级划分原则)。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AuthTrustLevel {
    /**
     * 认证结果的信任等级级别1，表示该认证方案能够识别用户个体，具备基本的活体检测能力（如简单的动作检测）。安全强度较低，认证结果可能存在一定风险。适用于业务风控、一般个人数据查询、非敏感信息访问等低安全场景。建议配合其他安全措施使
     * 用。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ATL1 = 10000,

    /**
     * 认证结果的信任等级级别2，表示该认证方案能够精确识别用户个体，具备标准的活体检测能力（如眨眼、点头等动作检测）。安全强度中等，可有效防御简单的伪造攻击。适用于维持设备解锁状态、应用登录、一般敏感操作确认等中等安全场景。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ATL2 = 20000,

    /**
     * 认证结果的信任等级级别3，表示该认证方案能够精确识别用户个体，具备较强的活体检测能力（如3D人脸识别、多帧分析等）。安全强度较高，可有效防御照片、视频等常见伪造攻击。适用于设备解锁、重要敏感操作确认、企业级应用登录等较高安全场
     * 景。3D人脸识别设备可支持此等级。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ATL3 = 30000,

    /**
     * 认证结果的信任等级级别4，表示该认证方案能够高精度识别用户个体，具备很强的活体检测能力（如深度分析、多维度验证等）。安全强度最高，可有效防御各类高级伪造攻击。适用于小额支付、金融交易、高敏感数据访问等高安全场景。仅少数高安全认
     * 证方案可支持此等级。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ATL4 = 40000
  }

  /**
   * 表示认证事件类型的关键字，作为[on]{@link userAuth.AuthInstance.on}接口的参数。
   *
   * 该类型为下表类型取值中的联合类型。
   *
   * @unionmember { 'result' } If the first parameter of
   *     [on]{@link userAuth.AuthInstance.on} is **result**,
   *     the [callback]{@link userAuth.AuthEvent.callback } [on]{@link userAuth.AuthInstance.on}接口第一个参数为"result"时，
   *     [callback]{@link userAuth.AuthEvent.callback}回调返回认证的结果信息。
   * @unionmember { 'tip' } If the first parameter of
   *     [on]{@link userAuth.AuthInstance.on} is **tip**, the
   *     [callback]{@link userAuth.AuthEvent.callback } [on]{@link userAuth.AuthInstance.on}接口第一个参数为"tip"时，
   *     [callback]{@link userAuth.AuthEvent.callback}回调返回认证操作中的提示信息。
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 11
   */
  type AuthEventKey = 'result' | 'tip';

  /**
   * 表示认证过程中事件信息的类型。
   *
   * 该类型为下表类型取值中的联合类型。
   *
   * @unionmember { AuthResultInfo } 获取到的认证结果信息。
   * @unionmember { TipInfo } 认证过程中的提示信息。
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead userAuth.UserAuthResult
   */
  type EventInfo = AuthResultInfo | TipInfo;

  /**
   * 认证接口的异步回调对象。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead userAuth.IAuthCallback
   */
  interface AuthEvent {
    /**
     * 通过该回调获取认证结果信息或认证过程中的提示信息。
     *
     * @param { EventInfo } result - 返回的认证结果信息或提示信息。
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead userAuth.IAuthCallback.onResult(result: UserAuthResult)
     */
    callback(result: EventInfo): void;
  }

  /**
   * 表示认证结果信息，用于描述认证结果。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead userAuth.UserAuthResult
   */
  interface AuthResultInfo {
    /**
     * 认证结果。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead userAuth.UserAuthResult.result
     */
    result: number;

    /**
     * 用户身份认证通过的凭证。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead userAuth.UserAuthResult.token
     */
    token?: Uint8Array;

    /**
     * 剩余的认证尝试次数。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead userAuth.AuthLockState.remainingAuthAttempts
     */
    remainAttempts?: number;

    /**
     * 认证操作的锁定时长，时间单位为毫秒ms。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead userAuth.AuthLockState.lockoutDuration
     */
    lockoutDuration?: number;
  }

  /**
   * 表示认证过程中的提示信息，用于提供认证过程的反馈。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead userAuth.AuthTipInfo
   */
  interface TipInfo {
    /**
     * 发送提示信息的模块标识。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead userAuth.AuthTipInfo.tipType
     */
    module: number;

    /**
     * 认证过程提示信息。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead userAuth.AuthTipInfo.tipCode
     */
    tip: number;
  }

  /**
   * 执行用户认证的对象。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead userAuth.UserAuthInstance
   */
  interface AuthInstance {
    /**
     * 订阅指定类型的用户认证事件。
     *
     * - **name**: 表示认证事件类型，取值为"result"时，回调函数返回认证结果；取值为"tip"时，回调函数返回认证过程中的提示信息，类型为
     * [AuthEventKey]{@link userAuth.AuthEventKey}。
     * - **callback**: 认证接口的回调函数，用于返回认证结果或认证过程中的提示信息，类型为[AuthEvent]{@link userAuth.AuthEvent}。
     *
     * > **说明：**
     * >
     * > 使用获取到的[AuthInstance]{@link userAuth.AuthInstance}对象调用该接口进行订阅。
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead userAuth.UserAuthInstance.on
     */
    on: (name: AuthEventKey, callback: AuthEvent) => void;

    /**
     * 取消订阅特定类型的认证事件。
     *
     * - **name**: 表示认证事件类型，取值为"result"时，取消订阅认证结果；取值为"tip"时，取消订阅认证过程中的提示信息，类型为
     * [AuthEventKey]{@link userAuth.AuthEventKey}。
     *
     * > **说明：**
     * >
     * > 需要使用已经成功订阅事件的[AuthInstance]{@link userAuth.AuthInstance}对象调用该接口进行取消订阅。
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead userAuth.UserAuthInstance.off
     */
    off: (name: AuthEventKey) => void;

    /**
     * 开始认证。
     *
     * > **说明：**
     * >
     * > 使用获取到的[AuthInstance]{@link userAuth.AuthInstance}对象调用该接口进行认证。
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
     * @useinstead userAuth.UserAuthInstance.start
     */
    start: () => void;

    /**
     * 取消认证。
     *
     * > **说明：**
     * >
     * > 使用获取到的[AuthInstance]{@link userAuth.AuthInstance}对象调用该接口进行取消认证，此[AuthInstance]{@link userAuth.AuthInstance}需要是正
     * > 在进行认证的对象。
     *
     * @permission ohos.permission.ACCESS_BIOMETRIC
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead userAuth.UserAuthInstance.cancel
     */
    cancel: () => void;
  }

  /**
   * 查询指定类型和等级的认证能力是否支持。该接口用于检查当前设备是否支持指定的认证类型和认证可信等级，帮助应用在发起认证前判断认证能力是否可用，从而避免不必要的认证不通过。若查询通过（无错误抛出），表示认证能力可用；若抛出错误，应用应
   * 根据错误码判断具体原因并采取相应处理。
   *
   * @permission ohos.permission.ACCESS_BIOMETRIC
   * @param { UserAuthType } authType - 认证类型。用于指定查询的认证类型，支持FACE（人脸）、FINGERPRINT（指纹）、PIN（密码）、COMPANION_DEVICE（伴随设备）。
   *     <br>**说明**：
   *     <br>从API版本11开始支持PIN查询。
   *     <br>从API版本26.0.0开始支持COMPANION_DEVICE查询。
   * @param { AuthTrustLevel } authTrustLevel - 认证信任等级。用于指定查询的认证可信等级，有效值为ATL1(10000)、ATL2(20000)、ATL3(30000)、ATL4(40000
   *     )。等级越高，对认证方案的活体检测能力要求越高。
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
   * 用户注册凭据的状态。该接口用于描述用户已注册的认证凭据（如人脸、指纹、伴随设备）的当前状态，包括凭据摘要和数量。应用可通过[getEnrolledState]{@link userAuth.getEnrolledState}接口查
   * 询凭据状态，用于检测用户凭据是否发生变化（如新增或删除指纹/人脸/伴随设备），以便做出相应的业务处理。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface EnrolledState {
    /**
     * 注册的凭据摘要，在凭据增加时随机生成。该值用于标识当前注册凭据的版本，当用户新增或删除凭据时该值会变化。应用可保存此值并在后续查询时对比，以判断凭据是否发生变化。
     *
     * **注意**：当复用认证结果时，如果之前认证使用的凭据已被删除，返回的credentialDigest可能为0。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    credentialDigest: int;

    /**
     * 注册的凭据数量。表示当前用户已注册的该类型凭据数量，例如指纹数量或人脸数量。
     *
     * **注意**：当复用认证结果时，如果之前认证使用的凭据已被删除，返回的credentialCount可能为0。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    credentialCount: int;
  }

  /**
   * 查询凭据注册的状态，以检测用户注册凭据的变更。该接口用于获取指定认证类型的凭据注册信息，包括凭据摘要和数量。应用可通过对比当前查询结果与之前保存的结果，判断用户是否新增或删除了凭据，从而采取相应的业务处理。
   *
   * @permission ohos.permission.ACCESS_BIOMETRIC
   * @param { UserAuthType } authType - 认证类型。用于指定查询的凭据类型，支持FACE（人脸）、FINGERPRINT（指纹）、PIN（密码）、COMPANION_DEVICE（伴随设备）。查询PIN
   *     时返回的是密码的整体状态，而非单个密码的数量。
   * @returns { EnrolledState } 当查询成功时，返回值为用户注册凭据的状态。包含credentialDigest（凭据摘要）和credentialCount（凭据数量）。应用可保存
   *     credentialDigest值，后续查询时对比以检测凭据变更。
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
   * 认证类型的身份认证冻结状态。该接口用于查询指定认证类型（如人脸、指纹、PIN）当前的冻结状态，包括是否被冻结、剩余尝试次数和冻结时长等信息。当用户多次认证不通过后，认证器可能进入临时冻结或永久冻结状态，应用可根据冻结信息提示用户。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface AuthLockState {
    /**
     * 表示认证是否已被冻结。true表示已冻结，此时用户无法使用该认证类型进行身份认证；false表示未冻结，用户可以正常使用该认证类型。冻结状态通常由连续多次认证不通过触发。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    isLocked: boolean;

    /**
     * 认证未被冻结时的剩余尝试次数，最大为5次。每次认证不通过后该值会递减，当降为0时认证器将进入冻结状态。此字段仅在isLocked为false时有效。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    remainingAuthAttempts: int;

    /**
     * 认证被冻结时的剩余冻结时间，单位为毫秒。此字段仅在isLocked为true时有效。
     *
     * 当永久冻结时，值为
     * [PERMANENT_LOCKOUT_DURATION]{@link userAuth.PERMANENT_LOCKOUT_DURATION}，
     * 表示认证器已永久锁定，需要用户通过PIN认证解锁后才能继续使用该认证类型。临时冻结时，该值为实际的剩余冻结时长，冻结结束后用户可继续尝试认证。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    lockoutDuration: int;
  }

  /**
   * 查询指定认证类型的冻结状态，使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BIOMETRIC
   * @param { UserAuthType } authType - 认证类型。
   * @returns { Promise<AuthLockState> } Promise对象，当查询成功时，返回值为指定认证类型的身份认证冻结状态。失败时报错。
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
   * 获取AuthInstance对象，用于执行用户身份认证。
   *
   * > **说明：**
   * >
   * > 每个AuthInstance只能进行一次认证，若需要再次进行认证则需重新获取AuthInstance。
   *
   * @param { Uint8Array } challenge - 挑战值，最大长度为32字节，可以传Uint8Array([])。
   * @param { UserAuthType } authType - 认证类型，当前支持FACE和FINGERPRINT。
   * @param { AuthTrustLevel } authTrustLevel - 认证信任等级。
   * @returns { AuthInstance } 认证器对象。
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
   * 用户认证界面的显示类型枚举。该枚举定义了认证界面可使用的显示模式，用于控制系统身份认证组件的窗口样式
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum WindowModeType {
    /**
     * 对话框类型。身份认证界面以对话框形式显示，适用于大多数认证场景，用户体验较好。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DIALOG_BOX = 1,

    /**
     * 全屏类型。身份认证界面以全屏形式显示，适用于需要沉浸式认证体验或认证信息较多需要更大展示空间的场景。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FULLSCREEN = 2
  }

  /**
   * 复用解锁认证结果的模式。该枚举定义了认证结果复用的四种模式，用于控制何种认证结果可以在何种条件下被复用。应用可根据业务场景选择合适的复用模式，以在安全性和用户体验之间取得平衡。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ReuseMode {
    /**
     * 与认证类型相关，只有当设备解锁认证结果在有效时间内，并且设备解锁的认证类型匹配上本次认证指定认证类型之一时，可以复用该结果。
     *
     * 例如：用户使用人脸解锁设备后，在有效时间内发起需要人脸认证的业务操作，可直接复用解锁结果；但如果发起需要指纹认证的业务操作，则无法复用。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTH_TYPE_RELEVANT = 1,

    /**
     * 与认证类型无关，设备解锁认证结果在有效时间内，可以重复使用。
     *
     * 例如：用户使用人脸解锁设备后，在有效时间内发起需要指纹或PIN认证的业务操作，均可直接复用解锁结果，无需再次认证。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTH_TYPE_IRRELEVANT = 2,

    /**
     * 与认证类型相关，任意身份认证（包括设备解锁）结果在有效时间内，并且身份认证的认证类型匹配上本次认证指定认证类型之一时，可以复用该结果。
     *
     * 例如：用户在某应用中使用人脸认证完成支付后，在有效时间内另一应用发起需要人脸认证的操作，可复用之前的认证结果；但如果发起需要指纹认证的操作，则无法复用。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    CALLER_IRRELEVANT_AUTH_TYPE_RELEVANT = 3,

    /**
     * 与认证类型无关，任意身份认证（包括设备解锁）结果在有效时间内，可以重复使用。
     *
     * 例如：用户在某应用中使用人脸认证完成操作后，在有效时间内另一应用发起任意类型的认证操作，均可复用之前的认证结果。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    CALLER_IRRELEVANT_AUTH_TYPE_IRRELEVANT = 4
  }

  /**
   * 复用解锁认证结果。该接口用于配置认证结果复用的相关参数，包括复用模式和有效时长。通过合理配置认证结果复用，可以在保证安全性的前提下提升用户体验，避免用户频繁重复认证。
   *
   * > **说明：**
   * >
   * > 如果身份认证解锁（包括设备解锁）后，在有效时间内凭据发生了变化，身份认证的结果依然可以复用，认证结果中返回当前实际的EnrolledState。若复用认证结果时，之前认证时所使用的身份认证凭据已经被删除：
   * >
   * > - 如果删除的是人脸、指纹，则认证结果依然可以复用，只是返回的EnrolledState中credentialCount和credentialDigest均为0。
   * >
   * > - 如果删除的是锁屏口令，则此次复用会失败。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ReuseUnlockResult {
    /**
     * 复用解锁认证结果的模式。根据业务场景的安全需求选择合适的复用模式：
     *
     * - AUTH_TYPE_RELEVANT(1)：仅复用匹配认证类型的设备解锁结果，安全性最高。
     * - AUTH_TYPE_IRRELEVANT(2)：复用任意类型的设备解锁结果，适用于中等安全场景。
     * - CALLER_IRRELEVANT_AUTH_TYPE_RELEVANT(3)：复用匹配认证类型的任意认证结果，适用于跨应用场景。
     * - CALLER_IRRELEVANT_AUTH_TYPE_IRRELEVANT(4)：复用任意认证结果，安全性最低但体验最优。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reuseMode: ReuseMode;

    /**
     * 允许复用解锁认证结果的有效时长，单位为毫秒。有效时长的值应大于0，最大值为
     * [MAX_ALLOWABLE_REUSE_DURATION]{@link userAuth.MAX_ALLOWABLE_REUSE_DURATION}，
     * （300000毫秒，即5分钟）。建议根据业务场景设置合理的时长：
     *
     * - 高安全场景（如支付）：建议设置较短时长（如30秒至1分钟）。
     * - 中等安全场景（如应用登录）：建议设置中等时长（如2至3分钟）。
     * - 低安全场景（如数据查询）：可使用最大时长。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reuseDuration: int;
  }

  /**
   * 用户认证相关参数。该接口用于配置用户认证的各项参数，包括挑战值、认证类型列表、认证信任等级、认证结果复用配置等。通过合理配置这些参数，可以满足不同业务场景下的认证需求。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AuthParam {
    /**
     * 随机挑战值，可用于防重放攻击。最大长度为32字节，可传Uint8Array([])。建议使用[加解密算法库框架]{@link @ohos.security.cryptoFramework:cryptoFramework}生成的
     * 随机数作为挑战值，以增强安全性。认证通过后，挑战值会被包含在认证令牌中，业务可通过验证令牌中的挑战值来确认认证结果的有效性。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    challenge: Uint8Array;

    /**
     * 认证类型列表，用来指定用户认证界面提供的认证方法。可同时指定多种认证类型，如[UserAuthType.PIN, UserAuthType.FACE, UserAuthType.FINGERPRINT]，用户可选择任意一种完成
     * 认证。认证类型的选择会影响认证结果复用的匹配条件。暂不支持同时发起伴随设备认证和其他认证类型。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    authType: UserAuthType[];

    /**
     * 期望达到的认证可信等级。认证可信等级决定了认证的安全强度，应根据业务场景的安全需求选择合适的等级：
     *
     * - ATL1：适用于业务风控、一般个人数据查询等低安全场景。
     * - ATL2：适用于应用登录、维持设备解锁状态等中等安全场景。
     * - ATL3：适用于设备解锁等较高安全场景。
     * - ATL4：适用于小额支付等高安全场景。
     *
     * 典型操作需要的身份认证可信等级，以及身份认证可信等级的划分请参见
     * [认证可信等级划分原则](docroot://security/UserAuthenticationKit/user-authentication-overview.md#生物认证可信等级划分原则)。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    authTrustLevel: AuthTrustLevel;

    /**
     * 表示可以复用解锁认证的结果。配置后，若满足复用条件，系统将直接返回之前的认证结果，无需用户再次进行认证交互。默认为不复用。启用认证结果复用可以提升用户体验，但应根据业务场景的安全需求合理配置复用模式和有效时长。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reuseUnlockResult?: ReuseUnlockResult;

    /**
     * 待认证的目标用户ID。值为非负整数，用于指定需要认证的用户。默认值为当前用户的ID。
     *
     * @default The ID of the current user. The value is a positive integer greater than or equal to 0.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    userId?: int;

    /**
     * 是否跳过已禁用的认证方式自动切换至其它方式的认证。若无可切换的认证方式则关闭控件，返回认证冻结错误码。
     *
     * - true：生物认证冻结时，跳过倒计时界面直接切换到其他方式的认证（如从冻结的指纹切换到人脸或PIN）。适用于希望快速完成认证的场景。
     * - false（默认）：不跳过，用户需要等待冻结倒计时结束后才能继续尝试该认证方式或手动切换。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    skipLockedBiometricAuth?: boolean;

    /**
     * 凭据ID列表。若凭据ID列表不为空，则会认证指定的凭据ID，而非用户的所有凭据。适用于需要精确控制认证凭据的场景。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    credentialIdList?: Uint8Array[];
  }

  /**
   * 用户认证界面配置相关参数。该接口用于配置认证界面的显示样式和交互方式，包括标题、导航按钮文本、窗口模式等。通过合理配置这些参数，可以为用户提供清晰的认证引导和良好的交互体验。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface WidgetParam {
    /**
     * 用户认证界面的标题，建议传入认证目的，例如用于支付、登录应用等，不支持传空字串，最大长度为500字符。标题会显示在认证界面，帮助用户理解当前认证的目的，提升用户信任度和配合度。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    title: string;

    /**
     * 导航按键的说明文本，最大长度为60字符。点击该按钮可触发应用自定义的操作，如跳转到自定义认证页面或取消认证等。在单指纹、单人脸场景下支持，从API 18开始，增加支持人脸+指纹组合认证场景。默认为不展示自定义导航按键。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    navigationButtonText?: string;

    /**
     * 用户认证界面的显示类型。用于控制系统身份认证组件的窗口样式，可选择对话框模式（DIALOG_BOX）或全屏模式（FULLSCREEN）。默认值为WindowModeType.DIALOG_BOX。
     *
     * @default WindowModeType.DIALOG_BOX
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    windowMode?: WindowModeType;

    /**
     * 以模应用弹窗方式显示身份认证对话框，仅支持在2in1设备上使用。传入有效的uiContext后，认证对话框将以模应用弹窗方式显示，认证结果返回后应用需先获取控件释放消息（订阅
     * [on('authTip')]{@link userAuth.UserAuthInstance.on(type: 'authTip', callback: AuthTipCallback)}并等待WIDGET_RELEASED
     * 状态）才能弹出其他窗口。如果没有此参数或其他类型的设备，身份认证对话框将以模系统弹窗方式显示，此时控件释放后应用可直接进行后续操作。
     *
     * **默认值：** 以模系统弹窗方式显示身份认证对话框。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    uiContext?: Context;

    /**
     * 是否在模应用模式下显示鉴权对话框。该模式仅适用于平板电脑和二合一设备。如果未使用此模式或使用其他类型的设备，则身份验证对话框以模系统模式显示。默认情况下，身份验证对话框以模系统方式显示。如果提供了uiContext，则该参数将
     * 被忽略。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @stagemodelonly
     * @systemapi Hide this for inner system use.
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    appWindow?: window.Window;
  }

  /**
   * 用户认证结果。认证通过时，返回认证类型和认证通过的令牌信息；认证不通过时，返回相应的错误码。该接口用于描述认证完成后的结果信息，应用可通过[IAuthCallback]{@link userAuth.IAuthCallback}的
   * onResult回调获取此结果。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface UserAuthResult {
    /**
     * 用户认证结果。若成功返回SUCCESS(12500000)，若失败返回相应错误码。错误码包括：
     *
     * - FAIL(12500001)：认证不通过。
     * - CANCELED(12500003)：认证取消。
     * - TIMEOUT(12500004)：认证超时。
     * - LOCKED(12500009)：认证器锁定。
     * - NOT_ENROLLED(12500010)：未注册凭据。
     * - PIN_EXPIRED(12500013)：锁屏密码过期。
     *
     * 完整错误码列表参见[UserAuthResultCode]{@link userAuth.UserAuthResultCode}。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    result: int;

    /**
     * 认证通过时，返回认证通过的令牌信息。令牌最大长度为1024字节，包含用户身份认证的凭证，可用于后续的安全操作验证（如支付确认、敏感数据访问等）。令牌中包含认证时的挑战值，业务可通过验证挑战值来防止重放攻击。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    token?: Uint8Array;

    /**
     * 认证通过时，返回实际使用的认证类型。当[AuthParam]{@link userAuth.AuthParam}的authType指定了多种认证类型时，此字段标识用户实际选择并完成认证的类型。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    authType?: UserAuthType;

    /**
     * 认证通过时，返回注册凭据的状态。包含当前认证类型的凭据摘要和数量。应用可通过对比此值与之前保存的值，判断用户凭据是否发生变化。若启用了认证结果复用且之前认证使用的凭据已被删除（人脸或指纹），返回的enrolledState中
     * credentialCount和credentialDigest均为0。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    enrolledState?: EnrolledState;
  }

  /**
   * 回调函数，返回认证结果。认证成功时，可以通过UserAuthResult获取到认证成功的令牌信息。
   *
   * @param { UserAuthResult } result - Authentication result information.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @since 23 static
   */
  type AuthCallbackOnResultFunc = (result: UserAuthResult) => void;

  /**
   * 返回认证结果的回调对象。该接口定义了认证结果的回调方法，用于在认证完成后获取认证结果。应用通过实现onResult方法，可以在认证通过时获取认证令牌，在认证不通过时获取错误码和相关信息。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface IAuthCallback {
    /**
     * 回调函数，返回认证结果。认证通过时，可以通过UserAuthResult获取到认证通过的令牌信息，用于后续的安全操作验证；认证不通过时，可以通过result字段获取错误码，根据错误码采取相应的处理措施（如提示用户重新认证、引导
     * 用户注册凭据等）。
     *
     * @param { UserAuthResult } result - 认证结果。包含认证结果码、认证令牌（成功时）、认证类型和凭据状态等信息。应用应检查result.result字段判断认证是否成功：
     *     <br>- 若result.result为SUCCESS(12500000)，表示认证通过，可使用result.token进行后续操作。
     *     <br>- 若result.result为其他值，表示认证不通过，应根据具体错误码进行处理。
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    onResult(result: UserAuthResult): void;

    /**
     * 返回认证结果。认证成功时，可以通过UserAuthResult获取到认证成功的令牌信息。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 23 static
     */
    onResult: AuthCallbackOnResultFunc;
  }

  /**
   * 表示身份认证中间状态的枚举。该枚举用于描述认证过程中的各种中间状态，包括认证不通过、超时、冻结状态以及认证界面的加载和释放等。应用可通过
   * [on('authTip')]{@link userAuth.UserAuthInstance.on(type: 'authTip', callback: AuthTipCallback)}接口订阅这些中间状态，以便在认证过程中提
   * 供更精细的用户反馈和状态感知。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum UserAuthTipCode {
    /**
     * 认证不通过。表示当前认证尝试失败，用户特征与已注册凭据比对不匹配。此状态会在每次认证不通过时触发，应用可根据此状态提示用户重新尝试。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    COMPARE_FAILURE = 1,

    /**
     * 认证超时。表示认证操作超时，通常是由于用户在规定时间内未完成认证交互（如未及时输入密码、未正视摄像头等）导致。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    TIMEOUT = 2,

    /**
     * 临时冻结。表示认证器进入临时冻结状态，用户需等待冻结时长结束后才能继续尝试认证。临时冻结通常由连续多次认证失败触发。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    TEMPORARILY_LOCKED = 3,

    /**
     * 永久冻结。表示认证器进入永久冻结状态，用户无法通过等待自动解锁，必须使用PIN认证解锁后才能继续使用该认证类型。永久冻结通常由临时冻结期间继续尝试认证不通过触发。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PERMANENTLY_LOCKED = 4,

    /**
     * 身份认证界面加载完毕。表示认证控件已成功加载并显示，用户可以开始进行认证交互。应用可在此状态触发后进行界面相关的初始化操作。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    WIDGET_LOADED = 5,

    /**
     * 当前的身份认证界面退出，切换其他认证界面或身份认证控件关闭。表示认证控件已释放，应用可在此状态触发后进行后续操作，如弹出其他窗口等。在PC/2in1设备上使用模应用弹窗方式认证时，建议订阅此状态以确保控件完全释放后再执行其他界
     * 面操作。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    WIDGET_RELEASED = 6,

    /**
     * 认证不通过并触发了认证冻结。表示当前认证不通过，并且失败次数已达到阈值，认证器进入冻结状态。此状态同时包含认证不通过和冻结两个信息，应用可根据冻结类型（临时或永久）提示用户相应的解锁方式。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    COMPARE_FAILURE_WITH_FROZEN = 7
  }

  /**
   * 用户认证中间状态。该接口用于描述认证过程中产生的各种中间状态信息，包括状态对应的认证类型和具体的状态码。应用可通过[AuthTipCallback]{@link userAuth.AuthTipCallback}获取这些中间状态，
   * 以便在认证过程中提供更精细的用户反馈和状态感知。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface AuthTipInfo {
    /**
     * 中间状态对应的认证类型。表示产生当前中间状态的认证方式，如人脸认证(FACE)、指纹认证(FINGERPRINT)或PIN认证(PIN)。应用可根据认证类型为用户提供针对性的提示。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    tipType: UserAuthType;

    /**
     * 中间状态值。表示具体的中间状态类型，如认证不通过、超时、冻结、界面加载/释放等。应用应根据tipCode为用户提供相应的反馈或执行相应的处理逻辑。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    tipCode: UserAuthTipCode;
  }

  /**
   * 回调函数，返回认证中间状态。该回调用于在认证过程中获取各种中间状态信息，包括每次认证不通过、冻结状态、界面加载和释放等。通过订阅这些中间状态，应用可以在认证过程中提供更精细的用户交互和状态管理。
   *
   * @param { AuthTipInfo } authTipInfo - 认证中间状态。包含认证类型(tipType)和状态码(tipCode)。应用应根据tipCode执行相应处理：
   *     <br>- COMPARE_FAILURE(1)：提示用户重新尝试。
   *     <br>- TIMEOUT(2)：提示用户操作超时。
   *     <br>- TEMPORARILY_LOCKED(3)：提示用户等待冻结解除。
   *     <br>- PERMANENTLY_LOCKED(4)：提示用户需PIN解锁。
   *     <br>- WIDGET_LOADED(5)：认证界面已加载，可执行初始化。
   *     <br>- WIDGET_RELEASED(6)：认证界面已释放，可执行后续操作。
   *     <br>- COMPARE_FAILURE_WITH_FROZEN(7)：提示用户认证不通过且已冻结。
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  type AuthTipCallback = (authTipInfo: AuthTipInfo) => void;

  /**
   * 用于执行用户身份认证，并支持使用统一用户身份认证控件。该接口提供了完整的用户认证能力，包括订阅认证结果、订阅认证中间状态、启动认证和取消认证等操作。通过统一认证控件，可以为用户提供标准化的认证界面和一致的认证体验。
   *
   * 使用以下接口前，需先通过[getUserAuthInstance]{@link userAuth.getUserAuthInstance}方法获取UserAuthInstance对象。
   *
   * > **说明：**
   * >
   * > 每个UserAuthInstance实例只能用于一次认证过程。若需要再次认证，必须重新获取UserAuthInstance实例。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface UserAuthInstance {
    /**
     * 订阅用户身份认证的最终结果。通过该接口获取到的是用户在认证控件完成身份认证交互后的最终身份认证结果。认证控件消失前，用户中间的认证不通过尝试并不会通过该接口返回，只有最终的认证结果（成功或最终失败）会通过此接口返回。如果需要感
     * 知整个认证过程中用户的每一次认证不通过尝试和中间状态，请通过
     * [on('authTip')]{@link userAuth.UserAuthInstance.on(type: 'authTip', callback: AuthTipCallback)}接口订阅。
     *
     * > **说明：**
     * >
     * > 在PC/2in1设备上，应用如果使用模应用弹窗方式发起认证（即配置用户界面参数[widgetParam]{@link userAuth.WidgetParam}时传入了有效的uiContext），收到认证结果后，若需弹出其
     * > 他窗口，应先获取控件弹窗释放的标志消息，通过
     * > [on('authTip')]{@link userAuth.UserAuthInstance.on(type: 'authTip', callback: AuthTipCallback)}接口订阅控件释放消息（
     * > authTipInfo.tipCode = UserAuthTipCode.WIDGET_RELEASED）。
     *
     * @param { 'result' } type - 订阅事件类型，表明该事件用来返回认证结果。
     * @param { IAuthCallback } callback - 认证接口的回调函数，用于返回认证结果。
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
     * 订阅用户身份认证的最终结果。通过该接口获取到的是用户在认证控件完成身份认证交互后的最终身份认证结果。认证控件消失前，用户中间的认证失败尝试并不会通过该接口返回。
     * 如果需要感知整个认证过程中用户的每一次认证失败尝试，请通过[on('authTip')]{@link userAuth.UserAuthInstance.on_authTip}接口订阅。
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
     * 取消订阅用户身份认证的结果。
     *
     * > **说明：**
     * >
     * > 需要使用已经成功订阅事件的[UserAuthInstance]{@link userAuth.UserAuthInstance}对象调用该接口进行取消订阅。
     *
     * @param { 'result' } type - 订阅事件类型，表明该事件用来返回认证结果。
     * @param { IAuthCallback } callback - 认证接口的回调函数，用于返回认证结果。当不传该参数时默认值为调用
     *     [on('result')]{@link userAuth.UserAuthInstance.on(type: 'result', callback: IAuthCallback)}接口时传递的参数值。
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
     * 取消订阅用户身份认证的结果。
     *
     * > **说明：**
     * >
     * > 需要使用已经成功订阅事件的[UserAuthInstance]{@link userAuth.UserAuthInstance}对象调用该接口进行取消订阅。
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
     * 开始认证。
     *
     * > **说明：**
     * >
     * > 每个UserAuthInstance只能进行一次认证，需要再次认证时，必须重新获取UserAuthInstance。
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
     * 取消认证。
     *
     * > **说明：**
     * >
     * > 此时UserAuthInstance必须是正在进行认证的对象。
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
     * 订阅身份认证过程中的提示信息。通过该接口可以获取到认证过程中控件的拉起和退出提示，以及认证过程中用户的每一次认证不通过尝试。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 在PC/2in1设备上，应用如果使用模应用弹窗方式发起认证（即配置用户界面参数[widgetParam]{@link userAuth.WidgetParam}时传入了有效的uiContext），收到认证结果后，若需弹出其
     * > 他窗口，应先获取控件弹窗释放的标志消息，通过
     * > [on('authTip')]{@link userAuth.UserAuthInstance.on(type: 'authTip', callback: AuthTipCallback)}接口订阅控件释放消息（
     * > authTipInfo.tipCode = UserAuthTipCode.WIDGET_RELEASED）。
     *
     * @param { 'authTip' } type - 订阅事件类型，支持的事件为'authTip'，当[start()]{@link userAuth.UserAuthInstance.start}调用完成，发起身份认证，触
     *     发该事件。
     * @param { AuthTipCallback } callback - 认证接口的回调函数，用于返回认证中间状态。
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'authTip', callback: AuthTipCallback): void;

    /**
     * 订阅身份认证过程中的提示信息。通过该接口可以获取到认证过程中控件的拉起和退出提示，以及认证过程中用户的每一次认证失败尝试。
     *
     * @param { AuthTipCallback } callback - 认证接口的回调函数，用于返回认证中间状态。
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 23 static
     */
    onAuthTip(callback: AuthTipCallback): void;

    /**
     * 取消订阅用户身份认证中间状态。
     *
     * > **说明：**
     * >
     * > 需要使用已经成功订阅事件的[UserAuthInstance]{@link userAuth.UserAuthInstance}对象调用该接口进行取消订阅。
     *
     * @param { 'authTip' } type - 取消订阅的事件类型，支持的事件为'authTip'，当[start()]{@link userAuth.UserAuthInstance.start}调用完成，发起身份认
     *     证并调用[on('authTip')]{@link userAuth.UserAuthInstance.on_authTip}订阅该事件后，调用该方法可取消订阅，不会再触发该事件。
     * @param { AuthTipCallback } [callback] - 认证接口的回调函数，用于返回认证中间状态。 当不传该参数时默认值为调用
     *     [on('authTip')]{@link userAuth.UserAuthInstance.on_authTip}接口时传递的参数值。
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'authTip', callback?: AuthTipCallback): void;

    /**
     * 取消订阅用户身份认证中间状态。
     *
     * > **说明：**
     * >
     * > 需要使用已经成功订阅事件的[UserAuthInstance]{@link userAuth.UserAuthInstance}对象调用该接口进行取消订阅。
     *
     * @param { AuthTipCallback } [callback] - 认证接口的回调函数，用于返回认证中间状态。 当不传该参数时默认值为调用on()接口时传递的参数值。
     * @throws { BusinessError } 12500002 - General operation error.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @since 23 static
     */
    offAuthTip(callback?: AuthTipCallback): void;
  }

  /**
   * 获取[UserAuthInstance]{@link userAuth.UserAuthInstance}对象，执行用户身份认证，并支持使用统一用户身份认证控件。该接口用于创建一个用户认证实例，配置认证参数和界面参数后，可通过返回
   * 的实例对象启动认证、订阅认证结果等。
   *
   * > **说明：**
   * >
   * > 每个UserAuthInstance只能进行一次认证，需要再次认证时，必须重新获取UserAuthInstance。认证完成后（无论成功或失败），该实例将无法再次使用。
   *
   * @param { AuthParam } authParam - 用户认证相关参数。包含挑战值、认证类型列表、认证可信等级、认证结果复用配置等。挑战值建议使用加密框架生成的随机数，认证类型可指定多种供用户选择，认证可信等级应根据业
   *     务场景安全需求选择。
   * @param { WidgetParam } widgetParam - 用户认证界面配置相关参数。包含界面标题、导航按钮文本、窗口模式（系统API）、模应用弹窗上下文等。标题建议设置为认证目的，导航按钮文本可用于自定义认证跳转。
   * @returns { UserAuthInstance } 支持用户界面的认证器对象。获取实例后，需调用
   *     [on('result')]{@link userAuth.UserAuthInstance.on(type: 'result', callback: IAuthCallback)}订阅认证结果，再调用
   *     [start]{@link userAuth.UserAuthInstance.start}启动认证。认证完成后，可通过回调获取认证结果。
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
   * 用户身份认证的通知类型枚举。该枚举定义了系统支持的通知类型，用于标识通知的来源。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum NoticeType {
    /**
     * 表示该通知由系统统一身份认证控件发出，用于通知用户认证框架相关事件。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    WIDGET_NOTICE = 1
  }

  /**
   * 发送来自身份认证组件的通知。在使用统一身份认证控件进行用户身份认证时，该接口用于接收来自统一身份认证组件的通知，并将通知发送给用户认证框架。
   *
   * @permission ohos.permission.SUPPORT_USER_AUTH
   * @param { NoticeType } noticeType - 通知类型。用于标识通知的来源，当前支持WIDGET_NOTICE（1），表示来自身份认证组件的通知。
   * @param { string } eventData - 事件数据。JSON格式的字符串，包含通知的具体内容，如认证类型就绪事件等。数据长度范围为(0, 65536)字节。
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
   * 表示返回码的枚举。该枚举定义了用户认证操作可能返回的所有结果码，包括成功码和各类错误码。应用可根据返回码判断认证结果，并采取相应的处理措施。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum UserAuthResultCode {
    /**
     * 执行成功。表示用户身份认证通过，认证令牌有效。应用可使用返回的token进行后续的安全操作。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SUCCESS = 12500000,

    /**
     * 认证不通过。表示用户特征与已注册凭据比对不匹配，可能是用户输入错误或使用了未注册的凭据。建议提示用户重新尝试。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    FAIL = 12500001,

    /**
     * 操作通用错误。表示认证过程中发生未知错误，建议稍后重试或联系系统管理员。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    GENERAL_ERROR = 12500002,

    /**
     * 认证取消。表示用户主动取消了认证操作或认证被系统取消。应用可根据业务逻辑决定是否重新发起认证。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    CANCELED = 12500003,

    /**
     * 认证超时。表示用户在规定时间内未完成认证交互（如未及时输入密码、未正视摄像头等）。建议提示用户重新尝试并注意操作时限。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TIMEOUT = 12500004,

    /**
     * 认证类型不支持。表示当前设备不支持指定的认证类型（如设备无指纹传感器却请求指纹认证）。建议检查设备能力或更换认证类型。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NOT_SUPPORT = 12500005,

    /**
     * 认证等级不支持。表示指定的认证可信等级高于当前认证类型所能达到的最高等级。建议降低认证等级或使用更安全的认证类型。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TRUST_LEVEL_NOT_SUPPORT = 12500006,

    /**
     * 系统繁忙。表示认证服务正忙于处理其他请求，建议稍后重试。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    BUSY = 12500007,

    /**
     * 参数校验失败。表示传入的参数不符合要求，如参数类型错误、参数值超出范围等。建议检查参数并重新调用。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    INVALID_PARAMETERS = 12500008,

    /**
     * 认证器已锁定。表示认证器因连续多次认证不通过而进入冻结状态，用户需等待冻结解除或使用PIN解锁后才能继续认证。可通过[getAuthLockState]{@link userAuth.getAuthLockState}查询具体
     * 冻结状态。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCKED = 12500009,

    /**
     * 用户未录入指定的系统身份认证凭据。表示用户未注册所请求的认证类型（如请求指纹认证但用户未录入指纹）。建议引导用户先注册相应凭据。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_ENROLLED = 12500010,

    /**
     * 用户取消了系统认证方式，选择应用自定义认证。表示用户点击了认证界面上的导航按钮，选择使用应用提供的自定义认证方式。应用需拉起自定义认证界面。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CANCELED_FROM_WIDGET = 12500011,

    /**
     * 锁屏密码过期。表示系统锁屏口令已过期（如企业策略要求定期更换密码），用户需更新锁屏密码后才能继续使用认证功能。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PIN_EXPIRED = 12500013,

    /**
     * AuthToken校验失败。verifyAuthToken系统接口错误码，表示验证的AuthToken完整性校验失败，令牌可能被篡改或损坏。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    AUTH_TOKEN_CHECK_FAILED = 12500015,

    /**
     * AuthToken已过期。verifyAuthToken系统接口错误码，表示AuthToken的签发时间至发起验证时的时间间隔超过传入的最大有效时长（allowableDuration）。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    AUTH_TOKEN_EXPIRED = 12500016,

    /**
     * 复用认证结果失败。queryReusableAuthResult系统接口错误码，表示查询可复用的身份认证结果失败，可能原因包括：不存在满足复用条件的认证结果、认证结果已失效或凭据已变更。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    REUSE_AUTH_RESULT_FAILED = 12500017
  }

  /**
   * 身份认证组件管理器。用于将自定义身份认证控件注册到UserAuthWidgetMgr中，由UserAuthWidgetMgr进行统一管理和调度。通过该接口，自定义身份认证控件可以接收来自用户认证框架的命令并执行相应操作。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface UserAuthWidgetMgr {
    /**
     * 订阅来自用户认证框架的命令事件。身份认证控件通过此接口订阅来自用户认证框架的命令，以便根据命令执行相应的认证操作。
     *
     * @param { 'command' } type - 订阅事件类型。值为'command'，表明该事件用于用户认证框架向身份认证控件发送命令。
     * @param { IAuthWidgetCallback } callback - 回调函数。用于接收来自用户认证框架的命令，身份认证控件需在回调中解析命令并执行相应操作。
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
     * 身份认证控件订阅来自用户认证框架的命令。使用callback异步回调。
     *
     * @param { IAuthWidgetCallback } callback - 组件管理接口的回调函数，用于用户认证框架向身份认证控件发送命令。
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
     * 取消订阅来自用户认证框架的命令事件。身份认证控件通过此接口取消对用户认证框架命令的订阅。
     *
     * @param { 'command' } type - 订阅事件类型。值为'command'，表明取消订阅用户认证框架向身份认证控件发送命令的事件。
     * @param { IAuthWidgetCallback } callback - 回调函数。指定取消注册的回调函数，若不传入此参数，则取消所有已注册的回调。
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
     * 身份认证控件取消订阅来自用户认证框架的命令。
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
   * 获取身份认证组件管理器对象。用于获取UserAuthWidgetMgr实例，通过该实例可将自定义身份认证控件注册到系统进行统一管理。
   *
   * > **说明：**
   * >
   * > 每个UserAuthWidgetMgr实例可管理一个身份认证控件，若需要管理多个控件则需获取多个实例。
   *
   * @permission ohos.permission.SUPPORT_USER_AUTH
   * @param { int } version - 身份认证组件的版本号。用于指定组件的版本，目前支持版本1。组件版本决定了组件与框架之间的通信协议和功能支持范围。
   * @returns { UserAuthWidgetMgr } 身份认证组件管理器对象。可用于订阅和取消订阅来自用户认证框架的命令。
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
   * 回调函数，身份认证框架向控件发送命令。
   *
   * @param { string } cmdData - 用户身份认证框架向控件发送的命令。
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type AuthWidgetCallbackSendCommandFunc = (cmdData: string) => void;

  /**
   * 身份认证组件回调接口。认证组件通过该回调接口获取用户认证框架发送的命令，并根据命令内容执行相应的认证操作。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface IAuthWidgetCallback {
    /**
     * 回调函数，用于接收来自用户认证框架的命令。用户认证框架通过此回调向身份认证组件发送命令，控件需解析命令内容并执行相应操作。
     *
     * @param { string } cmdData - 命令数据。JSON格式的字符串，包含用户认证框架向身份认证控件发送的具体命令内容，如认证类型切换、认证结果返回等指令。控件需解析此数据并执行相应操作。
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    sendCommand(cmdData: string): void;

    /**
     * 回调函数，用于用户认证框架向组件发送命令。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    sendCommand: AuthWidgetCallbackSendCommandFunc;
  }

  /**
   * 调用以获取远程身份验证的用户身份验证页面上显示的信息。
   *
   * @typedef { function }
   * @param { Uint8Array } challenge - 挑战值，可以以Uint8Array([])格式传递。
   * @returns { WidgetParam } widgetParam -用户认证页面参数。
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type WidgetParamCallback = (challenge: Uint8Array) => WidgetParam;

  /**
   * 调用返回认证结果。如果鉴权成功。
   * UserAuthResult中包含token信息。
   *
   * @typedef { function }
   * @param { Uint8Array } challenge - 挑战值，可以以Uint8Array([])格式传递。
   * @param { UserAuthResult } result - 身份认证结果。
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ResultCallback = (challenge: Uint8Array, result: UserAuthResult) => void;

  /**
   * 提供远端认证场景下获取WigetParam的接口。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface IRemoteAuthCallback {
    /**
     * 调用以获取远程身份验证的用户身份验证页面上显示的信息。
     *
     * @type { WidgetParamCallback }.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onGetRemoteAuthWidgetParam: WidgetParamCallback;

    /**
     * 调用返回认证结果。如果鉴权成功。
     * UserAuthResult中包含token信息。
     *
     * @type { ResultCallback }.
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onRemoteAuthResult: ResultCallback;
  }

  /**
   * 注册远程认证回调。
   *
   * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
   * @param { IRemoteAuthCallback } callback - 用于获取远程身份验证WidgetParam并返回结果的回调
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Called by non-system application.
   * @throws { BusinessError } 12500002 - General operation error.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function registerRemoteAuthCallback(callback: IRemoteAuthCallback): void;

  /**
   * 取消注册远程身份验证的回调。
   *
   * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Called by non-system application.
   * @throws { BusinessError } 12500002 - General operation error.
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function unregisterRemoteAuthCallback(): void;

  /**
   * 查询是否有可复用的身份认证结果。该接口用于在发起认证前查询是否存在满足复用条件的认证结果，若存在则直接返回可复用的AuthToken，无需用户再次进行认证交互。
   *
   * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
   * @param { AuthParam } authParam - 用户认证相关参数。包含挑战值（challenge）、认证类型列表（authType）、认证信任等级（authTrustLevel）以及认证结果复用配置（
   *     reuseUnlockResult）。系统会根据这些参数判断是否存在满足条件的可复用认证结果。
   * @returns { Uint8Array } 可复用的认证令牌（AuthToken）。若存在满足条件的可复用认证结果，返回AuthToken数据，最大长度为1024字节；若不存在，则抛出相应错误码。
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