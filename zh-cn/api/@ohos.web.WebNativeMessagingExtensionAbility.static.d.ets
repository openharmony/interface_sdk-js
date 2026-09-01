'use static';
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
 * Web原生消息连接的信息对象。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export interface ConnectionInfo {
  /**
     * 连接的唯一标识符，用于区分和管理不同的Web原生消息连接，可用于在日志、状态跟踪或资源清理时定位特定连接。
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  connectionId: int;
  /**
     * 调用方的应用包名，用于身份识别和权限校验，可据此判断是否允许该应用建立连接或进行消息交互。
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  bundleName: string;
  /**
     * 调用方扩展的原始URL，用于安全控制和来源识别，可据此判断扩展的合法性或实施基于域名的访问策略。
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  extensionOrigin: string;
  /**
     * 用于读取数据的管道文件描述符，可通过此文件描述符从Web端读取消息数据。
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  fdRead: int;
  /**
     * 用于写入数据的管道文件描述符，可通过此文件描述符向Web端发送消息数据。
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  fdWrite: int;
}

/**
 * 为开发者提供Web原生消息通信能力，继承自ExtensionAbility。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 23 static
 */
declare class WebNativeMessagingExtensionAbility extends ExtensionAbility {
  /**
     * 当前Web原生消息扩展Ability的上下文。
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
   */
  context: WebNativeMessagingExtensionContext;
  /**
     * Web原生消息连接建立时回调此方法。在此回调中，可以获取连接信息，用于后续的消息通信处理。
     *
   * @param { ConnectionInfo } info - 连接信息对象。
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
   */
  onConnectNative(info: ConnectionInfo): void;
  /**
     * Web原生消息连接断开时回调此方法。在此回调中，可以释放与该连接相关的资源，并完成必要的清理工作。
     *
   * @param { ConnectionInfo } info - Indicates connection information about new native connection.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
   */
  onDisconnectNative(info: ConnectionInfo): void;
  /**
     * WebNativeMessagingExtensionAbility销毁时回调。在此回调中，可以释放所有占用的资源，并完成最终的清理操作。
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
   */
  onDestroy(): void;
}

export default WebNativeMessagingExtensionAbility;