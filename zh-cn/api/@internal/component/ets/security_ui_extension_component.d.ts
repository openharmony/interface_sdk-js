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
 * @kit ArkUI
 */

/**
 * 不同类型的DpiFollowStrategy的枚举类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum SecurityDpiFollowStrategy {
  /**
   * 跟随宿主DPI。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_HOST_DPI = 0,

  /**
   * 跟随UIExtensionAbility。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1,
}

/**
 * 该接口用于在构造时设置UIExtensionComponentAttribute的选项。
 *
 * @interface SecurityUIExtensionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface SecurityUIExtensionOptions {
  /**
   * 设置当前能力是否作为调用方使用。<br/>
   * 如果设置为true，作为调用方，当前UIExtensionComponent的token被设置为rootToken。
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  isTransferringCaller?: boolean;

  /**
   * 设置占位。
   * 如果设置了占位ComponentContent，则在连接未建立时显示占位节点。
   *
   * @type { ?ComponentContent }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * 设置UIExtensionComponent内容的DPI跟随策略。
   *
   * @type { ?SecurityDpiFollowStrategy }
   * @default SecurityDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  dpiFollowStrategy?: SecurityDpiFollowStrategy;
}

/**
 * 表示嵌入式UI的提供方终止时的信息。
 *
 * @interface TerminationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface TerminationInfo {
  /**
   * 定义终止码。
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
   code: int;

  /**
   * 定义额外的终止信息。
   *
   * @type { ?import('../api/@ohos.app.ability.Want').default }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
   want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * 该接口用于向UIExtensionAbility发送数据。<br/>
 * 当UIExtensionAbility连接成功时，<br/>
 * 它从UIExtensionComponent的onRemoteReady回调中返回。
 *
 * @interface SecurityUIExtensionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface SecurityUIExtensionProxy {
  /**
   * 该接口用于向UIExtensionAbility发送数据。
   *
   * @param { Record<string, Object> } data
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  send(data: Record<string, Object>): void;

  /**
   * 该接口用于向UIExtensionAbility发送数据，并以阻塞方式等待结果。
   *
   * @param { Record<string, Object> } data - 发送给UIExtensionAbility的数据。
   * @returns { Record<string, Object> } data - 从UIExtensionAbility传输回来的数据。
   * @throws { BusinessError } 100011 - 没有注册响应该请求的回调。
   * @throws { BusinessError } 100012 - 传输数据失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  sendSync(data: Record<string, Object>): Record<string, Object>;

  /**
   * 注册监听器，监听UIExtensionAbility注册的异步数据接收回调。
   *
   * @param { 'asyncReceiverRegister' } type - 表示事件的类型。
   * @param { Callback<UIExtensionProxy> } callback - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * 注册监听器，监听UIExtensionAbility注册的同步数据接收回调。
   *
   * @param { 'syncReceiverRegister' } type - 表示事件的类型。
   * @param { Callback<UIExtensionProxy> } callback - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * 注销监听器，该监听器监听UIExtensionAbility注册的异步数据接收回调。
   *
   * @param { 'asyncReceiverRegister' } type - 监听事件的类型。
   * @param { Callback<UIExtensionProxy> } [callback] - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;

  /**
   * 注销监听器，该监听器监听UIExtensionAbility注册的同步数据接收回调。
   *
   * @param { 'syncReceiverRegister' } type - 监听事件的类型。
   * @param { Callback<UIExtensionProxy> } [callback] - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
}

/**
 * 提供UIExtensionComponent的接口，用于<br/>
 * 渲染远程UIExtensionAbility的UI。
 *
 * @interface SecurityUIExtensionComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface SecurityUIExtensionComponentInterface {
  /**
   * 构造UIExtensionComponent。<br/>
   * 在使用UIExtensionComponent时调用。
   *
   * @param { import('../api/@ohos.app.ability.Want').default } want - 表示UIExtensionAbility的Want
   * @param { SecurityUIExtensionOptions } [options] - UIExtensionComponentAttribute的构造配置
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  (
    want: import('../api/@ohos.app.ability.Want').default,
    options?: SecurityUIExtensionOptions
  ): SecurityUIExtensionComponentAttribute;
}

/**
 * 定义UIExtensionComponent的属性函数。
 *
 * @extends CommonMethod<SecurityUIExtensionComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class SecurityUIExtensionComponentAttribute extends CommonMethod<SecurityUIExtensionComponentAttribute> {
  /**
   * 当远程UIExtensionAbility对象准备好接收数据时<br/>
   * 回调。
   *
   * @param { import('../api/@ohos.base').Callback<SecurityUIExtensionProxy> } callback
   *     当远程UIExtensionAbility对象准备好接收数据时调用
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onRemoteReady(
    callback: import('../api/@ohos.base').Callback<SecurityUIExtensionProxy>
  ): SecurityUIExtensionComponentAttribute;

  /**
   * 当接收到来自UIExtensionAbility的数据时回调。
   *
   * @param { import('../api/@ohos.base').Callback<{ [key: string]: Object }> } callback
   *     当接收到来自UIExtensionAbility的数据时调用。
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onReceive(
    callback: import('../api/@ohos.base').Callback<{ [key: string]: Object }>
  ): SecurityUIExtensionComponentAttribute;

  /**
   * 当发生某些错误时回调，除了与UIExtensionAbility断开连接之外。
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback
   *     当发生某些错误时调用，除了与UIExtensionAbility断开连接之外。
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onError(
    callback: import('../api/@ohos.base').ErrorCallback
  ): SecurityUIExtensionComponentAttribute;

  /**
   * 当嵌入式UI的提供方终止时调用。
   *
   * @param { Callback<TerminationInfo> } callback
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onTerminated(callback: Callback<TerminationInfo>): SecurityUIExtensionComponentAttribute;
}

/**
 * 定义SecurityUIExtensionComponent组件。
 *
 * @type { SecurityUIExtensionComponentInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const SecurityUIExtensionComponent: SecurityUIExtensionComponentInterface;

/**
 * 定义UIExtensionComponent组件实例。
 *
 * @type { SecurityUIExtensionComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const SecurityUIExtensionComponentInstance: SecurityUIExtensionComponentAttribute;
