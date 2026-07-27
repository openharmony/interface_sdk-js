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
 * 定义SecurityUIExtensionComponent内容分辨率跟随策略的枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum SecurityDpiFollowStrategy {
  /**
   * 表示分辨率跟随宿主。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_HOST_DPI = 0,

  /**
   * 表示分辨率跟随UIExtensionAbility。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}

/**
 * 用于构造SecurityUIExtensionComponent时传递参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface SecurityUIExtensionOptions {
  /**
   * 在使用SecurityUIExtensionComponent嵌套时，设置当前组件是否转发上一级调用方的Caller信息（即发起调用的Ability身份信息），用于支持多级嵌套场景下的调用链传递。<br/>
   * true：转发上一级的Caller信息；false：不转发上一级的Caller信息。<br/>
   * 默认值：**false**
   *
   * 默认值：**false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  isTransferringCaller?: boolean;

  /**
   * 设置占位符，在SecurityUIExtensionComponent与UIExtensionAbility建立连接前显示。未设置时不显示占位符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  placeholder?: ComponentContent;

  /**
   * 设置SecurityUIExtensionComponent内容分辨率跟随策略，用于控制嵌入的UIExtensionAbility内容是跟随宿主应用的分辨率还是使用自身的分辨率。
   *
   * 默认值：**FOLLOW_UI_EXTENSION_ABILITY_DPI**
   *
   * @default SecurityDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  dpiFollowStrategy?: SecurityDpiFollowStrategy;
}

/**
 * 用于表示被拉起的UIExtensionAbility正常退出时的返回结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface TerminationInfo {
  /**
   * 被拉起的UIExtensionAbility退出时返回的结果码，0表示正常退出，非0表示异常退出。具体结果码含义由被拉起的UIExtensionAbility定义。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  code: int;

  /**
   * 被拉起UIExtensionAbility退出时返回的数据。未返回数据时该字段为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  want?: import('../api/@ohos.app.ability.Want').default;
}

/**
 * 用于在双方建立连接成功后，向被拉起的Ability发送数据，以及订阅和取消订阅事件回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface SecurityUIExtensionProxy {
  /**
   * 用于在双方建立连接成功后，向被拉起的Ability发送数据，提供异步发送能力。数据将被扩展Ability通过setReceiveDataCallback接收处理。
   *
   * @param { Record<string, Object> } data - 异步发送给被拉起的Ability的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  send(data: Record<string, Object>): void;

  /**
   * 用于在双方建立连接成功后，向被拉起的Ability同步发送数据，数据将被拉起的Ability通过setReceiveDataForResultCallback处理并返回结果。
   *
   * @param { Record<string, Object> } data - 同步发送给被拉起的Ability的数据。
   * @returns { Record<string, Object> } 被拉起的Ability对同步发送请求处理后返回的响应数据。
   * @throws { BusinessError } 100011 - 没有注册响应该请求的回调。
   * @throws { BusinessError } 100012 - 传输数据失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  sendSync(data: Record<string, Object>): Record<string, Object>;

  /**
   * 在双方建立连接成功后，订阅被拉起的Ability异步注册时触发的回调。使用callback异步回调。
   *
   * @param { 'asyncReceiverRegister' } type - 固定填'asyncReceiverRegister'，代表订阅被拉起的Ability异步注册时触发的回调。
   * @param { Callback<UIExtensionProxy> } callback - 回调函数。订阅被拉起的Ability注册setReceiveDataCallback后触发的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * 在双方建立连接成功后，订阅被拉起的Ability同步注册时触发的回调。使用callback异步回调。
   *
   * @param { 'syncReceiverRegister' } type - 固定填'syncReceiverRegister'，代表订阅被拉起的Ability同步注册时触发的回调。
   * @param { Callback<UIExtensionProxy> } callback - 回调函数。被拉起的Ability注册setReceiveDataForResultCallback后触发的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;

  /**
   * 取消订阅被拉起的Ability异步注册时触发的回调。使用callback异步回调。
   *
   * @param { 'asyncReceiverRegister' } type - 固定填'asyncReceiverRegister'，取消订阅被拉起的Ability异步注册时触发的回调。
   * @param { Callback<UIExtensionProxy> } [callback] - 回调函数。为空时取消订阅所有异步注册的回调。非空时取消订阅指定的异步注册回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;

  /**
   * 取消订阅被拉起的Ability同步注册时触发的回调。使用callback异步回调。
   *
   * @param { 'syncReceiverRegister' } type - 固定填'syncReceiverRegister'，取消订阅被拉起的Ability同步注册时触发的回调。
   * @param { Callback<UIExtensionProxy> } [callback] - 回调函数。为空时取消订阅所有同步注册的回调。非空时取消订阅指定的同步注册回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
}

/**
 * **SecurityUIExtensionComponent**用于将其他应用提供的UI嵌入到当前页面中。显示的内容运行在另一个进程中，当前应用不参与其布局和渲染。
 *
 * 通常用于需要进程隔离的模块化开发场景。目前，**SecurityUIExtensionComponent**只能启动[PhotoPicker]{@link @ohos.file.PhotoPickerComponent}类型的**UIExtensionAbility**。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface SecurityUIExtensionComponentInterface {
  /**
   * 创建**SecurityUIExtensionComponent**组件，用于嵌入显示远程**UIExtensionAbility**提供的UI。
   *
   * @param { import('../api/@ohos.app.ability.Want').default } want - 要加载的Ability信息。
   * 通过bundleName和abilityName共同确定被拉起的UIExtensionAbility，
   * 同时需要在parameters中配置ability.want.params.uiExtensionType字段指定UIExtensionAbility的类型，
   * 当前仅支持'sysPicker/photoPicker'。
   * @param { SecurityUIExtensionOptions } [options] - 用于构造**SecurityUIExtensionComponent**的参数。不填时各字段使用默认值。
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
   * 支持[通用属性]{@link ./common}。
 *
 * 支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class SecurityUIExtensionComponentAttribute extends CommonMethod<SecurityUIExtensionComponentAttribute> {
  /**
   * UIExtensionAbility连接完成时触发的回调，使用callback异步回调。之后可通过返回的[SecurityUIExtensionProxy]{@link SecurityUIExtensionProxy}向被拉起的Ability发送数据。
   *
   * @param { import('../api/@ohos.base').Callback<SecurityUIExtensionProxy> } callback - 回调函数，
   * 入参为SecurityUIExtensionProxy，
   * 可用于向对端Ability发送数据及事件订阅。
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
   * 收到被拉起的Ability发送的数据时触发的回调。使用callback异步回调。
   *
   * @param { import('../api/@ohos.base').Callback<{ [key: string]: Object }> } callback - 回调函数，返回收到的来自对端Ability的数据。
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
   * 被拉起的UIExtensionAbility在运行过程中发生异常时触发的回调，不包含与UIExtensionAbility断开连接场景。使用callback异步回调。
   *
   * @param { import('../api/@ohos.base').ErrorCallback } callback - 回调函数，入参用于接收异常信息。
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
   * 被拉起的UIExtensionAbility通过调用[terminateSelfWithResult]{@link ../../../application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}或[terminateSelf]{@link ../../../application/UIAbilityContext:UIAbilityContext#terminateSelf(callback: AsyncCallback<void>)}正常退出时触发此回调。使用callback异步回调。
   *
   * @param { Callback<TerminationInfo> } callback - 回调函数，入参用于接收UIExtensionAbility的返回结果。
   * @returns { SecurityUIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onTerminated(callback: Callback<TerminationInfo>): SecurityUIExtensionComponentAttribute;
}

/**
 * **SecurityUIExtensionComponent**用于将其他应用提供的UI嵌入到当前页面中。显示的内容运行在另一个进程中，当前应用不参与其布局和渲染。
 *
 * 通常用于需要进程隔离的模块化开发场景。目前，**SecurityUIExtensionComponent**只能启动[PhotoPicker]{@link @ohos.file.PhotoPickerComponent}类型的**UIExtensionAbility**。
 *
 * ###### 子组件
 *
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const SecurityUIExtensionComponent: SecurityUIExtensionComponentInterface;

/**
 * 定义SecurityUIExtensionComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const SecurityUIExtensionComponentInstance: SecurityUIExtensionComponentAttribute;
