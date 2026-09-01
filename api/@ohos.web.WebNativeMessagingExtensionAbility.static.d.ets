'use static'
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
import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import type WebNativeMessagingExtensionContext from './@ohos.web.WebNativeMessagingExtensionContext';
/**
 * Represents the information object of the web native messaging connection.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */

export interface ConnectionInfo {
    /**
     * Connection ID.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    connectionId: int;
    /**
     * Application bundle name of the caller.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    bundleName: string;
    /**
     * Original URL of the caller extension.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    extensionOrigin: string;
    /**
     * Pipe file descriptor used to read data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    fdRead: int;
    /**
     * Pipe file descriptor used to write data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    fdWrite: int;
}

/**
 * class of web native messaging extension ability.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 23 static
 */
declare class WebNativeMessagingExtensionAbility extends ExtensionAbility {
    /**
     * Context of web native messaging.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    context: WebNativeMessagingExtensionContext;
    /**
     * Called when a web native messaging connection is established.
     *
     * @param { ConnectionInfo } info - Indicates connection information about new native connection.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    onConnectNative(info: ConnectionInfo): void;
    /**
     * Called when a web native messaging connection is disconnected.
     *
     * @param { ConnectionInfo } info - Indicates connection information about new native connection.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    onDisconnectNative(info: ConnectionInfo): void;
    /**
     * Called when the WebNativeMessagingExtensionAbility is destroyed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    onDestroy(): void;
}

export default WebNativeMessagingExtensionAbility;
