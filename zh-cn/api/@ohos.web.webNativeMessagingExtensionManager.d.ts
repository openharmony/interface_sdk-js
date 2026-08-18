/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
  * @kit ArkWeb
 */

import type UIAbilityContext from './application/UIAbilityContext';
import type Want from './@ohos.app.ability.Want';

/**
 * webNativeMessagingExtensionManager模块是ArkWeb提供的Web原生消息扩展管理模块，用于在应用侧（调用方）发起并管理到
 * [WebNativeMessagingExtensionAbility]{@link @ohos.web.WebNativeMessagingExtensionAbility}的连接。开发者可通过
 * [connectNative]{@link webNativeMessagingExtensionManager.connectNative}方法指定目标扩展Ability并建立连接，通过返回的连接ID与
 * [WebExtensionConnectionCallback]{@link webNativeMessagingExtensionManager.WebExtensionConnectionCallback}监听连接建立、断开及失败
 * 事件，也可通过[disconnectNative]{@link webNativeMessagingExtensionManager.disconnectNative}主动释放连接。该模块适用于浏览器扩展与应用通信的场景；使用前需申请
 * [ohos.permission.WEB_NATIVE_MESSAGING](docroot://reference/apis-arkweb/security/AccessToken/restricted-permissions.md#ohospermissionweb_native_messaging)
 * 权限，且仅在Stage模型下可用。
 * 
 * > **说明**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 21 dynamic
 */
declare namespace webNativeMessagingExtensionManager {
  /**
   * 表示Web原生消息连接的连接信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  interface ConnectionNativeInfo {
    /**
     * Web原生消息扩展连接的唯一标识，由connectNative方法返回，用于标识和管理连接。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    connectionId: number;

    /**
     * Web原生消息扩展应用的包名。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    bundleName: string;

    /**
     * 浏览器扩展的源URL。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    extensionOrigin: string;

    /**
     * Web原生消息扩展的进程ID。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    extensionPid: number;
  }
  /**
   * Native Messaging的错误列表。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  export enum NmErrorCode {
    /**
     * 由于缺少 ohos.permission.WEB_NATIVE_MESSAGING，权限被拒绝。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    PERMISSION_DENY = 17100203,
    /**
     * 所需内容无效。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    WANT_CONTENT_ERROR = 17100202,
    /**
     * 原生消息的内部错误。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    INNER_ERROR = 17100201
  }

  /**
   * 作为连接网络原生消息扩展时的输入参数，它用于接收连接期间的状态变化。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  interface WebExtensionConnectionCallback {
    /**
     * 建立连接时的回调函数。
     *
     * @param { ConnectionNativeInfo } connection - 连接信息，包含连接ID、扩展应用包名、浏览器扩展源URL和扩展进程ID等信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    onConnect(connection: ConnectionNativeInfo): void;

    /**
     * 断开连接时的回调函数。
     *
     * @param { ConnectionNativeInfo } connection - 连接信息，包含连接ID、扩展应用包名、浏览器扩展源URL和扩展进程ID等信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    onDisconnect(connection: ConnectionNativeInfo): void;

    /**
     * 连接失败时的回调函数。
     *
     * @param { NmErrorCode } code - 错误码。
     * @param { string } errMsg - 错误码对应信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    onFailed(code: NmErrorCode, errMsg: string): void;
  }

  /**
   * 将当前Ability连接到指定的Web原生消息扩展Ability。
   *
   * @permission ohos.permission.WEB_NATIVE_MESSAGING
   * @param { UIAbilityContext } context - 调用方UIAbility的上下文。
   * @param { Want } want - 启动Ability的want信息，其parameters中需包含'ohos.arkweb.messageReadPipe'（读管道FD）、'
   *     ohos.arkweb.messageWritePipe'（写管道FD）和'ohos.arkweb.extensionOrigin'（插件URI）。
   * @param { WebExtensionConnectionCallback } callback - WebExtensionConnection状态的回调对象。
   * @returns { number } 连接的标识ID，由[connectNative]{@link webNativeMessagingExtensionManager.connectNative}方法返回，用于唯一标识一次
   *     Web原生消息扩展连接。连接建立后需要通过disconnectNative释放。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  function connectNative(context: UIAbilityContext, want: Want, callback: WebExtensionConnectionCallback): number;

  /**
   * 断开指定Web原生消息扩展连接。
   *
   * @permission ohos.permission.WEB_NATIVE_MESSAGING
   * @param { number } connectionId - 连接的标识ID，用于标识一次Web原生消息扩展连接，由
   *     [connectNative]{@link webNativeMessagingExtensionManager.connectNative}方法返回。建立连接后需要通过disconnectNative释放。需使用由
   *     connectNative返回的有效连接ID。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  function disconnectNative(connectionId: number): Promise<void>;
}

export default webNativeMessagingExtensionManager;