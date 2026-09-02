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
 * 提供操作系统本地账号授权管理能力。您可以使用该命名空间中的API请求对指定的[Privilege]{@link Authorization.Privilege}进行授权，这些特权是基于授权策略和用户同意来进行授予的。
 *
 * > **说明**
 * > 通过两个通道上报失败。抛出的[BusinessError]{@link @ohos.base:BusinessError}表示请求
 * > 根本不接受(例如，201表示调用方缺少API级别的权限
 * > ohos.permission.REQUEST_LOCAL_ACCOUNT_AUTHORATION;12300302表示需要用户交互，但不允许用户交互)。
 * > 解析结果中的[AuthorizationResultCode]{@链接授权.AuthorizationResultCode}表示请求被接受并报告
 * > 结果：
 * > {@链接授权.AuthorizationResultCode.AUTHORATION_CANCELED}表示用户取消了授权请求；
 * > [Authorization_DENIED]{@link Authorization.AuthorizationResultCode.AUTHORATION_DENIED}表示不满足授权策略；
 * > [Authorization_PRIVILEGE_NOT_SUPPORTED]{@链接授权.AuthorizationResultCode.AUTHORATION_PRIVILEGE_NOT_SUPPORTED}表示特权的配置未部署在当前系统版本中。
 *
 * @syscap SystemCapability.Account.OsAccount
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace authorization {
  /**
   * 获取[AuthorizationManager]{@link authorization.AuthorizationManager}实例。
   *
   * @returns { AuthorizationManager } 授权管理器的实例。
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getAuthorizationManager(): AuthorizationManager;

  /**
   * 定义授权管理器，用于请求和检查授权。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface AuthorizationManager {
    /**
     * 请求将指定的特权授予当前进程。该接口使用promise返回结果。
     *
     * 当应用处于前台且不存在有效授权时，将以模应用方式显示授权弹窗。若已存在有效授权，则会直接复用。
     *
     * @permission ohos.permission.REQUEST_LOCAL_ACCOUNT_AUTHORIZATION
     * @param { Privilege } privilege - 目标特权。有关可用值，请参阅[Privilege]{@link authorization.Privilege}。
     * @param { UIAbilityContext } context - 承载授权对话框的[UIAbility context]{@link ./application/UIAbilityContext:UIAbilityContext}。
     * @returns { Promise<AuthorizationResult> } Promise用于返回授权结果。
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
     * 检查当前进程是否拥有指定特权的授权。该接口使用Promise返回结果。
     *
     * @param { Privilege } privilege - 目标特权。可用值请参阅[Privilege]{@link authorization.Privilege}。
     * @returns { Promise<boolean> } Promise用于返回结果。**true**表示
     *     表示当前进程具有指定特权的授权，**false**表示相反。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    hasAuthorization(privilege: Privilege): Promise<boolean>;
  }

  /**
   * 枚举所有可授权的特权。
   * 在请求对这些特权授权前，确保当前应用和运行环境满足授权策略要求。
   * 有关每个特权的详细定义（包括授权策略），请参见 [特权附录]（docroot://reference/apis-basic-services-kit/appendix-osAccount-authorization-privileges.md）。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  enum Privilege {
    /**
     * 操作原始网络包的特权。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    PRIVILEGE_OPERATE_RAW_NET_PACKETS = 'ohos.privilege.operate_raw_net_packets'
  }

  /**
   * 枚举授权结果码。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  enum AuthorizationResultCode {
    /**
     * 授权成功。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AUTHORIZATION_GRANTED = 0,

    /**
     * 该授权已被用户或用户代理取消。
     *
     * 可能原因：
     * 用户明确关闭（取消）了授权弹窗（例如：点击“取消”按钮，或点击窗口关闭操作）。
     *
     * > **说明**
     * > 建议的解决方案：
     * > 1. 将此行为视为符合预期的用户级流程中止，而非系统故障。
     * > 2. 实现非侵入式的用户体验（UX）通知或状态回退策略（例如：平滑地回滚 UI 界面，并将状态标签更新为“授权已取消”或“操作已关闭”）。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AUTHORIZATION_CANCELED = 12300301,

    /**
     * 授权被系统策略拒绝。
     *
     * 未满足该特权所对应的授权策略。例如：该特权要求调用方必须持有指定的应用权限，且必须在管理员操作系统账户会话下运行。
     *
     * > **说明**
     * > 建议的解决方案：
     * > 1. 检查目标特权的授权策略配置。
     * > 2. 采取适当的降级处理或平滑降级策略（例如：引导用户切换到管理员环境，或提示该功能暂时不可用）。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AUTHORIZATION_DENIED = 12300303,

    /**
     * 不支持该授权请求。这表明所请求的目标特权在当前系统版本中完全未注册或缺失，其关联功能通常亦不受支持。
     *
     * 可能原因：
     * 包含前沿系统特性的新版应用，正运行在未升级的旧版宿主操作系统上，而该旧版系统完全没有这个新引入特权的任何定义。
     *
     * > **说明**
     * > 建议的解决方案：应当采取降级处理（例如：提示该功能不可用，或直接跳过此操作）。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AUTHORIZATION_NOT_SUPPORTED = 12300305
  }

  /**
   * 定义授权结果。目前，所有[特权]{@link authorization.Privilege} 的授权有效期均与调用进程的生命周期相绑定（随进程销毁而失效）。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface AuthorizationResult {
    /**
     * 授权结果码。
     * 如果授权获批，则返回 [AUTHORIZATION_GRANTED]{@link authorization.AuthorizationResultCode.AUTHORIZATION_GRANTED}。
     * 否则，返回相应的错误码。详情请参见 [AuthorizationResultCode]{@link authorization.AuthorizationResultCode}。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    resultCode: AuthorizationResultCode;

    /**
     * 该授权所对应的特权。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    privilege: Privilege;
  }
}

export default authorization;