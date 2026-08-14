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
 * WebNativeMessagingExtensionAbility is a base class for web native message communication extension provided by ArkWeb,
 * inherited from ExtensionAbility. It allows web pages to establish a secure, bidirectional pipe communication channel 
 * with system native services through the Native Messaging mechanism. By inheriting this class and implementing its 
 * lifecycle callbacks (such as [onConnectNative]{@link WebNativeMessagingExtensionAbility#onConnectNative}, 
 * [onDisconnectNative]{@link WebNativeMessagingExtensionAbility#onDisconnectNative}, and 
 * [onDestroy]{@link WebNativeMessagingExtensionAbility#onDestroy}), developers can detect connection establishment when
 * a web page initiates a connection request, obtain the caller identity and bidirectional pipe file descriptors (see 
 * [ConnectionInfo]{@link ConnectionInfo}), and release resources when the connection is disconnected or the extension 
 * is destroyed. This capability is primarily used in scenarios where browser extensions communicate with apps, enabling
 * efficient message passing and data exchange to enhance extension integration and functionality. The app side must 
 * manage pipe read/write operations, permission verification, and the Ability lifecycle on its own.
 *
 * @file
 * @kit ArkWeb
 */

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import type WebNativeMessagingExtensionContext from './@ohos.web.WebNativeMessagingExtensionContext';

/**
 * Represents the information object of the web native messaging connection.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
export interface ConnectionInfo {
  /**
   * Unique identifier of the connection, used to distinguish and manage different Web native message connections. It
   * can be used to locate a specific connection during logging, status tracking, or resource cleanup.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  connectionId: number;

  /**
   * App package name of the caller, used for identity identification and permission verification. It can be used to
   * determine whether to allow the app to establish a connection or perform message interaction.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  bundleName: string;

  /**
   * Original URL of the caller extension, used for security control and origin identification. It can be used to
   * determine the legitimacy of the extension or implement domain-based access policies.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  extensionOrigin: string;

  /**
   * Pipe file descriptor used for reading data. Messages can be read from the Web side through this file descriptor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  fdRead: number;

  /**
   * Pipe file descriptor used for writing data. Messages can be sent to the Web side through this file descriptor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  fdWrite: number;
}

/**
 * Provides the web native messaging capability and is inherited from ExtensionAbility.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 21 dynamic
 */
export default class WebNativeMessagingExtensionAbility extends ExtensionAbility {
  /**
   * Context of the current web native message ExtensionAbility.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  context: WebNativeMessagingExtensionContext;

  /**
   * Called when a web native message connection is established. In this callback, you can obtain the connection
   * information for subsequent message communication processing.
   *
   * @param { ConnectionInfo } info - Connection information.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  onConnectNative(info: ConnectionInfo): void;

  /**
   * Called when a web native message connection is disconnected. In this callback, you can release resources related to
   * the connection and complete necessary cleanup.
   *
   * @param { ConnectionInfo } info - Connection information.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  onDisconnectNative(info: ConnectionInfo): void;

  /**
   * Called when the WebNativeMessagingExtensionAbility is destroyed. In this callback, you can release all occupied
   * resources and complete final cleanup operations.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  onDestroy(): void;
}
