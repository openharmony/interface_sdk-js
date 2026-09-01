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
 * @file System API
 * @kit ArkUI
 */

/**
 * 表示不同类型的DpiFollowStrategy的枚举。
 *
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
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}

/**
 * 表示不同类型的WindowModeFollowStrategy的枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 18 dynamic
 */
declare enum WindowModeFollowStrategy {
  /**
   * 跟随宿主窗口模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  FOLLOW_HOST_WINDOW_MODE = 0,

  /**
   * 跟随UIExtensionAbility。
   *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare interface UIExtensionOptions {
  /**
   * 在使用UIExtensionComponent嵌套时，设置当前UIExtensionComponent是否转发上一级的Caller信息。true表示转发上一级的Caller信息，false表示不转发上一级的Caller信息。
   *
   * 默认值：**false**
   *
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * 设置尺寸变化占位符，在UIExtensionComponent尺寸发生变化并且UIExtensionAbility内部渲染未完成时显示。
   * key值仅支持"FOLD_TO_EXPAND"（折叠展开尺寸变化）、"UNDEFINED"（默认尺寸变化），传入其他key值时不生效。不设置时默认不显示尺寸变化占位内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  areaChangePlaceholder?: Record<string, ComponentContent>;

  /**
   * 设置UIExtensionComponent内容的DPI跟随策略。
   *
   * 默认值：**FOLLOW_UI_EXTENSION_ABILITY_DPI**
   *
   * @default DpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  dpiFollowStrategy?: DpiFollowStrategy;

  /**
   * 设置UIExtensionComponent内容的窗口模式跟随策略。
   *
   * 默认值：**FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE**
   *
   * @default WindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  windowModeFollowStrategy?: WindowModeFollowStrategy;
}

/**
 * 用于表示被拉起的UIExtensionAbility通过调用terminateSelfWithResult或者terminateSelf正常退出时的返回结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 */
declare interface TerminationInfo {
  /**
   * 被拉起的UIExtensionAbility退出时返回的结果码，返回的结果码由terminateSelfWithResult或者terminateSelf被调用时传入的数据决定。
   * 若通过terminateSelf退出，code取默认值0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  code: number;

  /**
   * 被拉起的UIExtensionAbility退出时返回的数据。默认值为undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * 回调函数，用于封装被拉起的Ability发送的数据。
 *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare interface UIExtensionProxy {
  /**
   * 该接口用于向UIExtensionAbility发送数据。
   *
   * @param { object } data - 异步发送给被拉起的UIExtensionAbility的数据。API version 18之前的版本，data的类型为Object。 [since 10 - 17]
   * @param { Record<string, Object> } data - 异步发送给被拉起的UIExtensionAbility的数据。
   *                                     API version 18之前的版本，data的类型为Object。 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  send(data: Record<string, Object>): void;

  /**
   * 该接口用于向UIExtensionAbility发送数据，并以阻塞方式等待结果。
   *
   * @param { object } data - 发送给UIExtensionAbility的数据 [since 11 - 17]
   * @param { Record<string, Object> } data - 发送给UIExtensionAbility的数据。 [since 18]
   * @returns { object } data - 从UIExtensionAbility传输回来的数据 [since 11 - 17]
   * @returns { Record<string, Object> } data - 从UIExtensionAbility传输回来的数据。 [since 18]
   * @throws { BusinessError } 100011 - 没有注册响应该请求的回调。
   * @throws { BusinessError } 100012 - 传输数据失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  sendSync(data: Record<string, Object>): Record<string, Object>;

  /**
   * 注册监听器，用于监听UIExtensionAbility注册异步数据接收回调。
   *
   * @param { 'asyncReceiverRegister' } type - 事件类型，取值为'asyncReceiverRegister'，表示订阅扩展Ability发生异步注册回调。
   * @param { function } callback - 回调函数。扩展Ability注册setReceiveDataCallback后触发的回调。 [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } callback - 回调函数。扩展Ability注册setReceiveDataCallback后触发的回调。 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * 注册监听器，用于监听UIExtensionAbility注册同步数据接收回调。
   *
   * @param { 'syncReceiverRegister' } type - 事件类型，取值为'syncReceiverRegister'，表示订阅扩展Ability发生同步注册回调。
   * @param { function } callback - 回调函数。扩展Ability注册setReceiveDataForResultCallback后触发的回调。 [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } callback - 回调函数。扩展Ability注册setReceiveDataForResultCallback后触发的回调。 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * 注销监听UIExtensionAbility注册异步数据接收回调的监听器。
   *
   * @param { 'asyncReceiverRegister' } type - 事件类型，取值为'asyncReceiverRegister'，表示取消订阅扩展Ability发生异步注册回调。
   * @param { function } callback - 回调函数。为空代表取消订阅所有扩展Ability异步注册后触发回调；非空代表取消订阅对应的异步注册回调。 [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } [callback] - 回调函数。为空代表取消订阅所有扩展Ability异步注册后触发回调；非空代表取消订阅对应的异步注册回调。 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;

  /**
   * 注销监听UIExtensionAbility注册同步数据接收回调的监听器。
   *
   * @param { 'syncReceiverRegister' } type - 事件类型，取值为'syncReceiverRegister'，表示取消订阅扩展Ability发生同步注册回调。
   * @param { function } callback - 回调函数。为空代表取消订阅所有扩展Ability同步注册后触发回调；非空代表取消订阅对应的同步注册回调。 [since 11 - 17]
   * @param { Callback<UIExtensionProxy> } [callback] - 回调函数。为空代表取消订阅所有扩展Ability同步注册后触发回调；非空代表取消订阅对应的同步注册回调。 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
}

/**
 * 提供UIExtensionComponent的接口，用于
 * <br/>渲染远程UIExtensionAbility的UI。
 *
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
   * @param { UIExtensionOptions } [options] - UIExtensionComponentAttribute的构造配置 [since 11]
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  (
    want: import('../api/@ohos.app.ability.Want').default,
    options?: UIExtensionOptions
  ): UIExtensionComponentAttribute;
}

/**
 * 定义UIExtensionComponent的属性函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare class UIExtensionComponentAttribute extends CommonMethod<UIExtensionComponentAttribute> {
  /**
   * 当远程UIExtensionAbility对象就绪可以接收数据时回调的回调函数。
   *
   * @param { import('../api/@ohos.base').Callback<UIExtensionProxy> } callback - 当远程UIExtensionAbility对象就绪可以接收数据时回调的回调函数。
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
   * 当接收到来自UIExtensionAbility的数据时回调。
   *
   * @param { import('../api/@ohos.base').Callback<{ [key: string]: Object }> } callback - 当接收到来自UIExtensionAbility的数据时回调 [since 10 - 17]
   * @param { ReceiveCallback } callback - 当接收到来自UIExtensionAbility的数据时回调 [since 18]
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  onReceive(callback: ReceiveCallback): UIExtensionComponentAttribute;

  /**
   * 当UIExtensionAbility携带结果数据终止时回调。
   *
   * @param { import('../api/@ohos.base').Callback<{code: number;want?: import('../api/@ohos.app.ability.Want').default;
    *     }> } callback
    *     - 当UIExtensionAbility携带结果数据终止时回调。
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
   * 用于处理被拉起的Ability销毁时的回调。被拉起的Ability扩展调用terminateSelfWithResult或者terminateSelf时会触发本回调，此时releaseCode为0，即正常销毁。
   * 被拉起的Ability扩展意外Crash或被kill时，触发本回调，此时releaseCode为1。
   *
   * @param { import('../api/@ohos.base').Callback<number> } callback - 回调函数，对端Ability销毁时的code，0为正常销毁，1为异常销毁。
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
   * 当发生除与UIExtensionAbility断开连接之外的其他错误时回调。
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback - 当发生除与UIExtensionAbility断开连接之外的其他错误时回调。
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
   * @param { Callback<TerminationInfo> } callback - 用于返回UIExtensionAbility结果的回调。
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  onTerminated(callback: Callback<TerminationInfo>): UIExtensionComponentAttribute;

  /**
   * 当UIExtensionAbility绘制首帧时回调的回调函数。
   *
   * @param { Callback<void> } callback - 当UIExtensionAbility绘制首帧时回调的回调函数。类型为void。
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  onDrawReady(callback: Callback<void>): UIExtensionComponentAttribute;
}

/**
 * **UIExtensionComponent**用于将其他应用提供的UI嵌入到本应用UI中。嵌入内容运行在另一个进程中，本应用不参与其布局和渲染。
 *
 * 通常用于需要进程隔离的模块化开发场景。
 *
 * ###### 约束
 *
 * 该组件不支持预览。
 *
 * 待启动的能力必须是UIExtensionAbility，即带UI的扩展能力。关于如何实现UIExtensionAbility的详细信息，请参见[@ohos.app.ability.UIExtensionAbility（带UI的ExtensionAbility基类）]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。
 *
 * 组件的宽高必须显式设置为非零有效值。
 *
 * 不支持到达边缘后继续滚动的场景。当**UIExtensionComponent**宿主和UIExtensionAbility都支持内容滚动时，基于手势的滚动会导致**UIExtensionComponent**内外同时响应，包括但不限于[Scroll]{@link ./scroll}、[Swiper]{@link ./swiper}、[List]{@link ./list}、[Grid]{@link ./grid}等可滚动容器。关于如何避免**UIExtensionComponent**内外同时滚动的详细信息，请参见[示例2](docroot://reference/apis-arkui/arkui-ts/ts-container-ui-extension-component-sys.md#example-2-isolating-scrolling-inside-and-outside-of-uiextensioncomponent)。
 *
 * ###### 子组件
 *
 * 不支持
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