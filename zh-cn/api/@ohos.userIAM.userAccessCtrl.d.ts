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
 * @file 用户访问控制
 * @kit UserAuthenticationKit
 */

import userAuth from '@ohos.userIAM.userAuth';

/**
 * **userAccessCtrl**模块是OpenHarmony用户身份认证体系（UserIAM）的核心组件，专门用于认证令牌的验证和管理。该模块提供了验证认证令牌（AuthToken）的API，能够解析和验证用户身份认证结果，并返回
 * 详细的认证信息。
 *
 * 该模块主要用于以下场景：
 *
 * - 系统级应用需要验证用户身份认证令牌的有效性。
 * - 需要获取认证令牌的详细信息（如认证类型、信任级别、用户ID等）。
 * - 需要基于认证结果进行访问控制决策的场景。
 *
 * @syscap SystemCapability.UserIAM.UserAuth.Core
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace userAccessCtrl {
  /**
   * 验证认证令牌。该接口用于校验AuthToken的有效性，包括完整性校验和时效性校验，校验通过后返回解析后的AuthToken详细信息。使用Promise异步回调。
   *
   * @permission ohos.permission.USE_USER_ACCESS_MANAGER
   * @param { Uint8Array } authToken - 待验证的认证令牌。最大长度为1024字节，由用户认证通过后返回。令牌中包含用户身份认证的凭证信息，用于后续的安全操作验证。
   * @param { int } allowableDuration - 允许的认证有效时长。从AuthToken签发起允许使用的最大时间间隔，单位为毫秒。值需大于0且小于等于86400000（24小时）。用于校验令牌的时效性，防止过
   *     期令牌被使用。
   * @returns { Promise<AuthToken> } Promise对象，用于返回AuthToken。
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
   * 认证令牌数据。表示校验通过后返回解析的AuthToken数据结果，包含认证的详细信息，如挑战值、认证信任等级、认证类型、用户ID等。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  interface AuthToken {
    /**
     * 认证随机挑战值。用于防重放攻击，认证时传入的挑战值会被包含在AuthToken中，业务可通过验证此字段确认认证结果的有效性。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    challenge: Uint8Array;

    /**
     * 认证信任等级。表示本次认证达到的安全强度等级，值为ATL1(10000)、ATL2(20000)、ATL3(30000)或ATL4(40000)。等级越高，表示活体检测能力越强、身份识别越精确。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    authTrustLevel: userAuth.AuthTrustLevel;

    /**
     * 身份认证的凭据类型。表示本次认证使用的认证方式，如PIN(1)、FACE(2)、FINGERPRINT(4)等。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    authType: userAuth.UserAuthType;

    /**
     * 认证令牌类型。标识令牌的签发来源，如本地认证、复用认证或协同认证。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    tokenType: AuthTokenType;

    /**
     * 用户ID。表示完成认证的用户标识，为大于等于0的正整数。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    userId: int;

    /**
     * AuthToken签发后经过的时间。自AuthToken签发至当前的时间间隔，单位为毫秒。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    timeInterval: bigint;

    /**
     * 安全用户ID。系统内部用于标识用户的安全标识，仅在特定认证场景下返回。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    secureUid?: bigint;

    /**
     * 凭据注册ID。enrolledState中credentialDigest的原始值，反映了凭据的变更情况。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    enrolledId?: bigint;

    /**
     * 凭据ID。表示本次认证匹配成功的凭据标识，用于关联具体的认证凭据。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    credentialId?: bigint;
  }

  /**
   * 认证令牌类型枚举。该枚举定义了认证令牌的类型，用于标识令牌的签发来源。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.Core
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  enum AuthTokenType {
    /**
     * 本地认证令牌。基于本地认证结果签发的身份验证令牌，表示用户在本设备上完成了身份认证。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    TOKEN_TYPE_LOCAL_AUTH = 0,

    /**
     * 本地重签令牌。基于复用的身份认证结果重新签发的身份验证令牌，表示本次认证结果是从之前的认证结果复用而来。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.Core
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    TOKEN_TYPE_LOCAL_RESIGN = 1,

    /**
     * 协同认证令牌。基于多个设备协同认证结果签发的身份验证令牌，表示用户通过多设备协同完成了身份认证。
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