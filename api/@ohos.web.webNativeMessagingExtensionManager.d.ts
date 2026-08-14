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
 * The webNativeMessagingExtensionManager module is a Web native message extension management module provided by ArkWeb.
 * It is used to initiate and manage connections from the app side (caller) to
 * [WebNativeMessagingExtensionAbility]{@link @ohos.web.WebNativeMessagingExtensionAbility}. Developers can call
 * [connectNative]{@link webNativeMessagingExtensionManager.connectNative} to specify the target extension Ability and
 * establish a connection, use the returned connection ID and
 * [WebExtensionConnectionCallback]{@link webNativeMessagingExtensionManager.WebExtensionConnectionCallback} to listen
 * for connection establishment, disconnection, and failure events, and call
 * [disconnectNative]{@link webNativeMessagingExtensionManager.disconnectNative} to actively release the connection.
 * This module is suitable for scenarios where browser extensions communicate with apps. Before using it, you need to
 * request the
 * [ohos.permission.WEB_NATIVE_MESSAGING](docroot://security/AccessToken/restricted-permissions.md#ohospermissionweb_native_messaging)
 * permission, and it is available only under the Stage model.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 21 dynamic
 */
declare namespace webNativeMessagingExtensionManager {
  /**
   * Represents the information about the web native message connection.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */

  interface ConnectionNativeInfo {
    /**
     * Unique identifier of the Web native message extension connection, returned by connectNative() and used to
     * identify and manage the connection.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    connectionId: number;

    /**
     * Bundle name of the web native message extension application.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    bundleName: string;

    /**
     * Source URL of the browser extension.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    extensionOrigin: string;

    /**
     * Process ID of the web native message extension.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    extensionPid: number;
  }
  /**
   * Provides the native messaging error codes.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  export enum NmErrorCode {
    /**
     * Permission denied due to missing ohos.permission.WEB_NATIVE_MESSAGING.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    PERMISSION_DENY = 17100203,
    /**
     * The want content is invalid.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    WANT_CONTENT_ERROR = 17100202,
    /**
     * Inner error for native messaging.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    INNER_ERROR = 17100201
  }

  /**
   * As an input parameter when connecting a web native messaging extension, it is used to receive
   * state changes during the connection.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */

  interface WebExtensionConnectionCallback {
    /**
     * Called when a connection is set up.
     *
     * @param { ConnectionNativeInfo } connection - Connection information, including the connection ID, extension
     *     application bundle name, browser extension source URL, and extension process ID.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    onConnect(connection: ConnectionNativeInfo): void;

    /**
     * Called when a connection is interrupted.
     *
     * @param { ConnectionNativeInfo } connection - Connection information, including the connection ID, extension
     *     application package name, browser extension source URL, and extension process ID.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    onDisconnect(connection: ConnectionNativeInfo): void;

    /**
     * Called when the connection fails.
     *
     * @param { NmErrorCode } code - Error code.
     * @param { string } errMsg - Error message.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 21 dynamic
     */
    onFailed(code: NmErrorCode, errMsg: string): void;
  }

  /**
   * Connects the current ability to the specified web native message extension ability.
   *
   * @permission ohos.permission.WEB_NATIVE_MESSAGING
   * @param { UIAbilityContext } context - Context of the calling UIAbility.
   * @param { Want } want - Want information for starting the Ability, whose parameters must include '
   *     ohos.arkweb.messageReadPipe' (read pipe FD), 'ohos.arkweb.messageWritePipe' (write pipe FD), and '
   *     ohos.arkweb.extensionOrigin' (extension URI).
   * @param { WebExtensionConnectionCallback } callback - Callback object of the WebExtensionConnection status.
   * @returns { number } ID of the connection, returned by the
   *     [connectNative]{@link webNativeMessagingExtensionManager.connectNative} method, used to uniquely identify a Web
   *     native message extension connection. The connection must be released through disconnectNative after being
   *     established.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  function connectNative(context: UIAbilityContext, want: Want, callback: WebExtensionConnectionCallback): number;

  /**
   * Disconnects the connection of a specified web native message extension.
   *
   * @permission ohos.permission.WEB_NATIVE_MESSAGING
   * @param { number } connectionId - Connection identifier, used to identify a Web native message extension connection,
   *     returned by the [connectNative]{@link webNativeMessagingExtensionManager.connectNative} method. After
   *     establishing the connection, it must be released through disconnectNative. A valid connection ID returned by
   *     connectNative must be used.
   * @returns { Promise<void> } Promise that returns no value.
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
