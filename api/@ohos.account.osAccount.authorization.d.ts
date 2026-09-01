/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type UIAbilityContext from './application/UIAbilityContext';

/**
 * Provides OS local account authorization management capabilities. You can use the APIs in this namespace to
 * request authorization for specified [Privileges]{@link authorization.Privilege}, which are granted based on
 * authorization policies and user consent.
 *
 * > **NOTE**
 * > Failures are reported through two channels. A thrown [BusinessError]{@link @ohos.base:BusinessError} means the request is
 * > not accepted at all (for example, 201 means the caller lacks the API-level permission
 * > ohos.permission.REQUEST_LOCAL_ACCOUNT_AUTHORIZATION; 12300302 means user interaction is required but not allowed).
 * > A [AuthorizationResultCode]{@link authorization.AuthorizationResultCode} in the resolved result means the request was accepted and reports
 * > the outcome:
 * > [AUTHORIZATION_CANCELED]{@link authorization.AuthorizationResultCode.AUTHORIZATION_CANCELED} means the user canceled the authorization request;
 * > [AUTHORIZATION_DENIED]{@link authorization.AuthorizationResultCode.AUTHORIZATION_DENIED} means the authorization policy is not met;
 * > [AUTHORIZATION_NOT_SUPPORTED]{@link authorization.AuthorizationResultCode.AUTHORIZATION_NOT_SUPPORTED} means
 * > the configuration for the privilege is not deployed in the current system version.
 *
 * @syscap SystemCapability.Account.OsAccount
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace authorization {
  /**
   * Obtains an [AuthorizationManager]{@link authorization.AuthorizationManager} instance.
   *
   * @returns { AuthorizationManager } Instance of the authorization manager.
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getAuthorizationManager(): AuthorizationManager;

  /**
   * Defines the authorization manager, which is used to request and check the authorization.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface AuthorizationManager {
    /**
     * Requests that the specified privilege be granted to the current process. This API uses a promise to
     * return the result.
     *
     * When the application is in the foreground and there is no valid authorization, the authorization dialog is
     * displayed in modal application mode. If a valid authorization already exists, it will be reused.
     *
     * @permission ohos.permission.REQUEST_LOCAL_ACCOUNT_AUTHORIZATION
     * @param { Privilege } privilege - Target privilege. For available values, see [Privilege]{@link authorization.Privilege}.
     * @param { UIAbilityContext } context - The [UIAbility context]{@link ./application/UIAbilityContext:UIAbilityContext} that hosts the authorization dialog.
     * @returns { Promise<AuthorizationResult> } Promise used to return the authorization result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300302 - User interaction is required but not allowed.
     *     Possible causes: 1. The specified UI context is invalid; 2. The application is not in the foreground.
     *     Suggested solutions: Ensure the application is in the foreground and pass a valid UIAbilityContext.
     * @throws { BusinessError } 12300304 - Authorization service is busy.
     *     Possible cause: Another authorization is being processed.
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    requestAuthorization(privilege: Privilege, context: UIAbilityContext): Promise<AuthorizationResult>;

    /**
     * Checks whether the current process has authorization for the specified privilege. This API uses a promise to
     * return the result.
     *
     * @param { Privilege } privilege - Target privilege. For available values, see [Privilege]{@link authorization.Privilege}.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates
     *     that the current process has authorization for the specified privilege; **false** indicates the opposite.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    hasAuthorization(privilege: Privilege): Promise<boolean>;
  }

  /**
   * Enumerates the privileges that can be authorized.
   * Before requesting authorization for these privileges, ensure that the current application and runtime environment
   * meet the authorization policy requirements. For detailed definitions of each privilege (including authorization
   * policies), see [Privilege Appendix](docroot://reference/apis-basic-services-kit/appendix-osAccount-authorization-privileges.md).
   *
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  enum Privilege {
    /**
     * Privilege for operating the raw network packets.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    PRIVILEGE_OPERATE_RAW_NET_PACKETS = 'ohos.privilege.operate_raw_net_packets'
  }

  /**
   * Enumerates authorization result codes.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  enum AuthorizationResultCode {
    /**
     * The authorization is granted.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AUTHORIZATION_GRANTED = 0,

    /**
     * The authorization is canceled by the user or the user's agent.
     *
     * Possible causes:
     * The user explicitly dismissed the authorization dialog (e.g., clicking the 'Cancel'
     * button, clicking the window close action).
     *
     * > **NOTE**
     * > Suggested solutions:
     * > 1. Treat this as an expected human-driven workflow discontinuation rather than a system fault.
     * > 2. Implement a non-intrusive UX notification or status fallback (e.g., smoothly roll back the UI
     * > and update a status label to "Authorization Canceled" or "Action Dismissed").
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AUTHORIZATION_CANCELED = 12300301,

    /**
     * The authorization is denied by the system policy.
     *
     * Possible causes: The authorization policy for the privilege is not met.
     * For example, the privilege requires the caller to possess the specified application permissions
     * and run under an administrative OS account session.
     *
     * > **NOTE**
     * > Suggested solutions:
     * > 1. Check the authorization policy configurations for the target privilege.
     * > 2. Implement appropriate fallback handling or graceful degradation(e.g., suggesting the user
     * > switch to an administrative environment, or prompting that the feature is temporarily unavailable).
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AUTHORIZATION_DENIED = 12300303,

    /**
     * Authorization is not supported. This indicates that the requested target privilege is entirely unregistered or
     * missing in the current system version, and the associated functionality is generally also unsupported.
     *
     * Possible causes:
     * A newer application version containing cutting-edge system features is running on an unupgraded,
     * legacy host OS that has no definition of this newly introduced privilege.
     *
     * > **NOTE**
     * > Suggested solutions: A fallback mechanism should be implemented,
     * > such as prompting that the feature is unavailable or skipping the operation.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AUTHORIZATION_NOT_SUPPORTED = 12300305
  }

  /**
   * Defines the authorization result.
   * Currently, the authorization validity period of all [Privileges]{@link authorization.Privilege} follows the
   * lifecycle of the caller process.
   *
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface AuthorizationResult {
    /**
     * Authorization result code.
     * If the authorization is granted,
     * [AUTHORIZATION_GRANTED]{@link authorization.AuthorizationResultCode.AUTHORIZATION_GRANTED} is returned.
     * Otherwise,
     * an error code is returned. For details, see
     * [AuthorizationResultCode]{@link authorization.AuthorizationResultCode}.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    resultCode: AuthorizationResultCode;

    /**
     * Privilege associated with the authorization.
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    privilege: Privilege;
  }
}

export default authorization;