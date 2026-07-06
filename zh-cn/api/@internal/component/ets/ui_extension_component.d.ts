/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * 表示不同类型的DpiFollowStrategy的枚举。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 */
declare enum DpiFollowStrategy {
  /**
   * 跟随宿主DPI。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  FOLLOW_HOST_DPI = 0,

  /**
   * 跟随UIExtensionAbility。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1,
}

/**
 * 表示不同类型的WindowModeFollowStrategy的枚举。
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 18 dynamic
 */
declare enum WindowModeFollowStrategy {
    /**
     * 跟随宿主窗口模式。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     */
    FOLLOW_HOST_WINDOW_MODE = 0,

    /**
     * 跟随UIExtensionAbility。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     */
    FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1
}

/**
 * 该接口用于在构造时设置UIExtensionComponentAttribute的选项。
 *
 * @interface UIExtensionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare interface UIExtensionOptions {
  /**
   * 设置当前能力是否作为调用方使用。<br/>
   * 如果设置为true，则作为调用方，将UIExtensionComponent的当前token设置为rootToken。
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  isTransferringCaller?: boolean;

  /**
   * 设置占位符。
   * 如果设置了占位ComponentContent，则在连接未建立时显示占位节点。
   *
   * @type { ?ComponentContent }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * 设置区域变化占位符。
   * 如果设置了区域变化占位ComponentContent，则占位节点会一直显示，直到UIExtensionComponent尺寸变化完成。
   *
   * @type { ?Record<string, ComponentContent> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  areaChangePlaceholder?: Record<string, ComponentContent>;

  /**
   * 设置UIExtensionComponent内容的DPI跟随策略。
   *
   * @type { ?DpiFollowStrategy }
   * @default DpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  dpiFollowStrategy?: DpiFollowStrategy;

    /**
     * 设置UIExtensionComponent内容的窗口模式跟随策略。
     * @type { ?WindowModeFollowStrategy }
     * @default WindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     */
    windowModeFollowStrategy?: WindowModeFollowStrategy;
}

/**
 * 表示嵌入式UI提供方终止时的信息。
 *
 * @interface TerminationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 */
declare interface TerminationInfo {
  /**
   * 定义终止码。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
   code: number;

  /**
   * 定义额外的终止信息。
   *
   * @type { ?import('../api/@ohos.app.ability.Want').default }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
   want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * 从@ohos.base获取Callback。
 * AnonyMous Object Rectification
 *
 * @typedef { import('../api/@ohos.base').Callback<Record<string, Object>> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 18 dynamic
 */
declare type ReceiveCallback = import('../api/@ohos.base').Callback<Record<string, Object>>;
/**
 * 该接口用于向UIExtensionAbility发送数据。<br/>
 * 当UIExtensionAbility连接成功时，<br/>
 * 它从UIExtensionComponent的onRemoteReady回调中返回。
 *
 * @interface UIExtensionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare interface UIExtensionProxy {
  /**
   * 该接口用于向UIExtensionAbility发送数据。
   *
   * @param { object } data
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * 该接口用于向UIExtensionAbility发送数据。
   * AnonyMous Object Rectification
   *
   * @param { Record<string, Object> } data
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  send(data: Record<string, Object>): void;

  /**
   * 该接口用于向UIExtensionAbility发送数据，并以阻塞方式等待结果。
   *
   * @param { object } data - 发送给UIExtensionAbility的数据
   * @returns { object } data - 从UIExtensionAbility传输回来的数据
   * @throws { BusinessError } 100011 - 没有注册响应该请求的回调。
   * @throws { BusinessError } 100012 - 传输数据失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * 该接口用于向UIExtensionAbility发送数据，并以阻塞方式等待结果。
   * AnonyMous Object Rectification
   *
   * @param { Record<string, Object> } data - 发送给UIExtensionAbility的数据。
   * @returns { Record<string, Object> } data - 从UIExtensionAbility传输回来的数据。
   * @throws { BusinessError } 100011 - 没有注册响应该请求的回调。
   * @throws { BusinessError } 100012 - 传输数据失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  sendSync(data: Record<string, Object>): Record<string, Object>;

  /**
   * 注册监听器，用于监听UIExtensionAbility注册异步数据接收回调。
   *
   * @param { 'asyncReceiverRegister' } type - 表示事件的类型。
   * @param { function } callback - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * 注册监听器，用于监听UIExtensionAbility注册异步数据接收回调。
   * AnonyMous Object Rectification
   *
   * @param { 'asyncReceiverRegister' } type - 表示事件的类型。
   * @param { Callback<UIExtensionProxy> } callback - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * 注册监听器，用于监听UIExtensionAbility注册同步数据接收回调。
   *
   * @param { 'syncReceiverRegister' } type - 表示事件的类型。
   * @param { function } callback - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * 注册监听器，用于监听UIExtensionAbility注册同步数据接收回调。
   * AnonyMous Object Rectification
   *
   * @param { 'syncReceiverRegister' } type - 表示事件的类型。
   * @param { Callback<UIExtensionProxy> } callback - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * 注销监听UIExtensionAbility注册异步数据接收回调的监听器。
   *
   * @param { 'asyncReceiverRegister' } type - 监听事件的类型。
   * @param { function } callback - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * 注销监听UIExtensionAbility注册异步数据接收回调的监听器。
   * AnonyMous Object Rectification
   *
   * @param { 'asyncReceiverRegister' } type - 监听事件的类型。
   * @param { Callback<UIExtensionProxy> } [callback] - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;

  /**
   * 注销监听UIExtensionAbility注册同步数据接收回调的监听器。
   *
   * @param { 'syncReceiverRegister' } type - 监听事件的类型。
   * @param { function } callback - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * 注销监听UIExtensionAbility注册同步数据接收回调的监听器。
   * AnonyMous Object Rectification
   *
   * @param { 'syncReceiverRegister' } type - 监听事件的类型。
   * @param { Callback<UIExtensionProxy> } [callback] - 监听事件的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
}

/**
 * 提供UIExtensionComponent的接口，用于
 * <br/>渲染远程UIExtensionAbility的UI。
 *
 * @interface UIExtensionComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
interface UIExtensionComponentInterface {
  /**
   * 构造UIExtensionComponent。<br/>
   * 在使用UIExtensionComponent时调用。
   *
   * @param { import('../api/@ohos.app.ability.Want').default } want - 表示UIExtensionAbility的want
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * 构造UIExtensionComponent。<br/>
   * 在使用UIExtensionComponent时调用。
   *
   * @param { import('../api/@ohos.app.ability.Want').default } want - 表示UIExtensionAbility的want
   * @param { UIExtensionOptions } [options] - UIExtensionComponentAttribute的构造配置
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  (
    want: import('../api/@ohos.app.ability.Want').default,
    options?: UIExtensionOptions
  ): UIExtensionComponentAttribute;
}

/**
 * 定义UIExtensionComponent的属性函数。
 *
 * @extends CommonMethod<UIExtensionComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare class UIExtensionComponentAttribute extends CommonMethod<UIExtensionComponentAttribute> {
  /**
   * @param { import('../api/@ohos.base').Callback<UIExtensionProxy> } callback
   * - 当远程UIExtensionAbility对象就绪可以接收数据时
   * <br/>回调的回调函数
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  onRemoteReady(
    callback: import('../api/@ohos.base').Callback<UIExtensionProxy>
  ): UIExtensionComponentAttribute;

  /**
   * @param { import('../api/@ohos.base').Callback<{ [key: string]: Object }> } callback
   * - 当接收到来自UIExtensionAbility的数据时回调
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * AnonyMous Object Rectification
   * 
   * @param { ReceiveCallback } callback - 当接收到来自UIExtensionAbility的数据时回调
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  onReceive(callback: ReceiveCallback): UIExtensionComponentAttribute;

  /**
   * @param { import('../api/@ohos.base').Callback<{code: number;want?: import('../api/@ohos.app.ability.Want').default;}> } callback 
   * - 当UIExtensionAbility携带结果数据终止时回调。
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead UIExtensionComponentAttribute#onTerminated
   */
  onResult(
    callback: import('../api/@ohos.base').Callback<{
      code: number;
      want?: import('../api/@ohos.app.ability.Want').default;
    }>
  ): UIExtensionComponentAttribute;

  /**
   * @param { import('../api/@ohos.base').Callback<number> } callback
   * - 当与UIExtensionAbility断开连接时从回调函数返回的数字，0表示
   * <br/>UIExtensionAbility自行终止，否则表示连接异常断开。
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead UIExtensionComponentAttribute#onTerminated or UIExtensionComponentAttribute#onError
   */
  onRelease(
    callback: import('../api/@ohos.base').Callback<number>
  ): UIExtensionComponentAttribute;

  /**
   * @param { import('../api/@ohos.base').ErrorCallback } callback
   * - 当发生除与UIExtensionAbility断开连接之外的其他错误时回调。
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  onError(
    callback: import('../api/@ohos.base').ErrorCallback
  ): UIExtensionComponentAttribute;

  /**
   * 当嵌入式UI的提供方终止时回调。
   *
   * @param { Callback<TerminationInfo> } callback
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  onTerminated(callback: Callback<TerminationInfo>): UIExtensionComponentAttribute;

    /**
     * 当UIExtensionAbility绘制首帧时回调的回调函数。
     * @param { Callback<void> } callback
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     */
    onDrawReady(callback: Callback<void>): UIExtensionComponentAttribute;
}

/**
 * 定义UIExtensionComponent组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare const UIExtensionComponent: UIExtensionComponentInterface;

/**
 * 定义UIExtensionComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare const UIExtensionComponentInstance: UIExtensionComponentAttribute;
