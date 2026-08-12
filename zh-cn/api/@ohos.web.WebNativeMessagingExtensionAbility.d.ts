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
 * WebNativeMessagingExtensionAbility是ArkWeb提供的Web原生消息通信扩展基类，继承自ExtensionAbility（扩展能力基类），允许Web页面通过Native Messaging机制与系统原
 * 生服务建立安全、双向的管道通信通道。开发者通过继承该类并实现其生命周期回调（如[onConnectNative]{@link WebNativeMessagingExtensionAbility#onConnectNative}、
 * [onDisconnectNative]{@link WebNativeMessagingExtensionAbility#onDisconnectNative}、
 * [onDestroy]{@link WebNativeMessagingExtensionAbility#onDestroy}），可以在Web页面发起连接请求时感知连接建立、获取调用方身份与双向管道文件描述符（见
 * [ConnectionInfo]{@link ConnectionInfo}），并在连接断开或扩展销毁时完成资源释放。该能力主要用于浏览器扩展与应用通信的场景，实现高效的消息传递和数据交换，提升扩展的集成度和功能性。应用侧需自行管理管
 * 道读写、权限校验及Ability生命周期。
 *
 * @file
 * @kit ArkWeb
 */

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import type WebNativeMessagingExtensionContext from './@ohos.web.WebNativeMessagingExtensionContext';

/**
 * Web原生消息连接的信息对象。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
export interface ConnectionInfo {
  /**
   * 连接的唯一标识符，用于区分和管理不同的Web原生消息连接，可用于在日志、状态跟踪或资源清理时定位特定连接。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  connectionId: number;

  /**
   * 调用方的应用包名，用于身份识别和权限校验，可据此判断是否允许该应用建立连接或进行消息交互。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  bundleName: string;

  /**
   * 调用方扩展的原始URL，用于安全控制和来源识别，可据此判断扩展的合法性或实施基于域名的访问策略。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  extensionOrigin: string;

  /**
   * 用于读取数据的管道文件描述符，可通过此文件描述符从Web端读取消息数据。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  fdRead: number;

  /**
   * 用于写入数据的管道文件描述符，可通过此文件描述符向Web端发送消息数据。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  fdWrite: number;
}

/**
 * 为开发者提供Web原生消息通信能力，继承自ExtensionAbility。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 21 dynamic
 */
export default class WebNativeMessagingExtensionAbility extends ExtensionAbility {
  /**
   * 当前Web原生消息扩展Ability的上下文。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  context: WebNativeMessagingExtensionContext;

  /**
   * Web原生消息连接建立时回调此方法。在此回调中，可以获取连接信息，用于后续的消息通信处理。
   *
   * @param { ConnectionInfo } info - 连接信息对象。
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  onConnectNative(info: ConnectionInfo): void;

  /**
   * Web原生消息连接断开时回调此方法。在此回调中，可以释放与该连接相关的资源，并完成必要的清理工作。
   *
   * @param { ConnectionInfo } info - 连接信息对象。
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  onDisconnectNative(info: ConnectionInfo): void;

  /**
   * WebNativeMessagingExtensionAbility销毁时回调。在此回调中，可以释放所有占用的资源，并完成最终的清理操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  onDestroy(): void;
}