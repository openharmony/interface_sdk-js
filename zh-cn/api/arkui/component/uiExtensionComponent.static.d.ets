'use static';
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
import Want from '../../@ohos.app.ability.Want';
import { Callback, ErrorCallback, BusinessError, RecordData } from '../../@ohos.base';
import { CommonMethod, TerminationInfo } from './common';
import { ComponentContentBase } from '../ComponentContent';

import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, CommonMethod } from './common';
import { VoidCallback } from './units';
import { Builder } from '@ohos.arkui.component';

/**
 * 表示不同类型的DpiFollowStrategy的枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DpiFollowStrategy {
  /**
   * 表示DPI跟随宿主。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  FOLLOW_HOST_DPI = 0,
  /**
   * 表示DPI跟随UIExtensionAbility。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}
/**
 * 窗口Mode跟随策略，用于设置窗口Mode，使其能够跟随宿主或UIExtensionAbility。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum WindowModeFollowStrategy {
  /**
   * 表示窗口Mode跟随宿主。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  FOLLOW_HOST_WINDOW_MODE = 0,
  /**
   * 表示窗口Mode跟随UIExtensionAbility。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE = 1
}
/**
 * 用于在UIExtensionComponent进行构造时传递可选的构造参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UIExtensionOptions {
  /**
   * 在使用UIExtensionComponent嵌套时，设置当前UIExtensionComponent是否转发上一级的Caller信息。<br/>
   * true表示转发上一级的Caller信息，false表示不转发上一级的Caller信息。<br/>
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  isTransferringCaller?: boolean;
  /**
   * 设置占位符，在UIExtensionComponent与UIExtensionAbility建立连接前显示。当需要在连接建立前向用户展示加载状态或提示内容时传入此参数，不设置时默认不显示占位内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  placeholder?: ComponentContentBase;
  /**
   * 设置尺寸变化占位符，在UIExtensionComponent尺寸发生变化并且UIExtensionAbility内部渲染未完成时显示，key值仅支持"FOLD_TO_EXPAND"（折叠展开尺寸变化）、
   *     "UNDEFINED"（默认尺寸变化），传入其他key值时不生效。不设置时默认不显示尺寸变化占位内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  areaChangePlaceholder?: Record<string, ComponentContentBase>;
  /**
   * 提供接口支持设置DPI跟随宿主或跟随UIExtensionAbility。
   *
   * @default DpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  dpiFollowStrategy?: DpiFollowStrategy;
  /**
   * 提供接口以支持设置窗口Mode，使其能够跟随宿主或UIExtensionAbility。
   *
   * @default WindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  windowModeFollowStrategy?: WindowModeFollowStrategy;
}
/**
 * 回调函数，用于封装被拉起的Ability发送的数据。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type ReceiveCallback = Callback<Record<string, RecordData>>;
/**
 * 用于在双方建立连接成功后，组件使用方将数据发送给被拉起的Ability，并订阅和取消订阅扩展Ability的注册事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UIExtensionProxy {
  /**
   * 用于在双方建立连接成功后，组件使用方将数据发送给被拉起的Ability的场景，提供异步发送数据。
   * AnonyMous Object Rectification
   *
   * @param { Record<string, RecordData> } data - 异步发送给被拉起的UIExtensionAbility的数据。API version 18之前的版本，data的类型为Object。
   * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  send(data: Record<string, RecordData>): void;
  /**
   * 用于在双方建立连接成功后，组件使用方将数据发送给被拉起的Ability的场景，提供同步发送数据。
   * AnonyMous Object Rectification
   *
   * @param { Record<string, RecordData> } data - 同步发送给被拉起的UIExtensionAbility的数据。API version 18之前的版本，data的类型为Object。
   * @returns { Record<string, RecordData> } data - 扩展Ability回复的数据。
   * @throws { BusinessError } 100011 - 没有注册响应该请求的回调。
   * @throws { BusinessError } 100012 - 传输数据失败。
   * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  sendSync(data: Record<string, RecordData>): Record<string, RecordData>;
  /**
   * 注册监听器，用于监听UIExtensionAbility注册异步数据接收回调。
   * AnonyMous Object Rectification
   *
   * @param { Callback<UIExtensionProxy> } callback - 监听事件的回调。
   * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onAsyncReceiverRegister(callback: Callback<UIExtensionProxy>): void;
  /**
   * 注册监听器，用于监听UIExtensionAbility注册同步数据接收回调。
   * AnonyMous Object Rectification
   *
   * @param { Callback<UIExtensionProxy> } callback - 监听事件的回调。
   * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onSyncReceiverRegister(callback: Callback<UIExtensionProxy>): void;
  /**
   * 注销监听UIExtensionAbility注册异步数据接收回调的监听器。
   * AnonyMous Object Rectification
   *
   * @param { Callback<UIExtensionProxy> } [callback] - 监听事件的回调。
   * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  offAsyncReceiverRegister(callback?: Callback<UIExtensionProxy>): void;
  /**
   * 注销监听UIExtensionAbility注册同步数据接收回调的监听器。
   * AnonyMous Object Rectification
   *
   * @param { Callback<UIExtensionProxy> } [callback] - 监听事件的回调。
   * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  offSyncReceiverRegister(callback?: Callback<UIExtensionProxy>): void;
}

/**
 * 定义UIExtensionComponent的属性函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface UIExtensionComponentAttribute extends CommonMethod {
  /**
   * 设置UIExtensionComponent的选项。
   *
   * @param { Want } want - want
   * @param { UIExtensionOptions } [options] - 选项
   * @returns { this } UIExtensionComponentAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setUIExtensionComponentOptions(want: Want, options?: UIExtensionOptions): this;
  /**
   * UIExtensionAbility连接完成时的回调，之后可使用proxy向被拉起的Ability发送数据。
   *
   * @param { Callback<UIExtensionProxy> | undefined } callback - 回调函数。
   *     UIExtensionAbility连接完成后触发，入参为UIExtensionProxy，可通过proxy向被拉起的Ability发送数据。
   * @returns { UIExtensionComponentAttribute }
   * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onRemoteReady(callback: Callback<UIExtensionProxy> | undefined): this;
  /**
   * 收到被拉起的Ability发送的数据时触发的回调。使用callback异步回调。<br/>AnonyMous Object Rectification
   *
   * @param { ReceiveCallback | undefined } callback - 回调函数，返回收到的来自被拉起的Ability的数据。
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onReceive(callback: ReceiveCallback | undefined): this;
  /**
   * 被拉起的Ability扩展在运行过程中发生异常时触发本回调。可通过回调参数中的code、name和message获取错误信息并做处理，业务错误码详细介绍请参见UIExtension错误码。
   *
   * @param { ErrorCallback<BusinessError> | undefined } callback - 回调函数。返回报错信息。
   * @returns { UIExtensionComponentAttribute }
   * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onError(callback: ErrorCallback<BusinessError> | undefined): this;
  /**
   * 被拉起的UIExtensionAbility通过调用terminateSelfWithResult或者terminateSelf正常退出时，触发本回调函数。
   *
   * @param { Callback<TerminationInfo> | undefined } callback - 回调函数，入参用于接收UIExtensionAbility的返回结果，类型为TerminationInfo。
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onTerminated(callback: Callback<TerminationInfo> | undefined): this;
  /**
   * 被拉起的UIExtensionAbility绘制第一帧时触发本回调。
   *
   * @param { VoidCallback | undefined } callback - 回调函数。UIExtensionAbility绘制第一帧时触发本回调，类型为void。
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onDrawReady(callback: VoidCallback | undefined): this;

  /**
   * 设置UIExtensionComponent组件的属性修改器。
   *
   * @param { AttributeModifier<UIExtensionComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { UIExtensionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<UIExtensionComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义UIExtensionComponent组件。
 *
 * @param { Want } want - 要加载的Ability，必须是带UI的Ability扩展。
 *     Want的parameters中需设置ability.want.params.uiExtensionType字段，取值需与扩展Ability在module.json5中配置的type一致。
 * @param { UIExtensionOptions } [options] - 需要传递的构造参数，用于自定义UIExtensionComponent的配置（如设置占位符、DPI跟随策略、窗口Mode跟随策略等）。
 *     当需要自定义上述配置时传入此参数，不传入时使用默认配置。
 * @returns { UIExtensionComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function UIExtensionComponent(
    want: Want, options?: UIExtensionOptions
): UIExtensionComponentAttribute;

/**
 * 定义UIExtensionComponent组件。它要求在组件属性设置开始时调用setUIExtensionComponentOptions，
 * 并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<UIExtensionComponentAttribute> } style - 用于设置uiextensioncomponent属性的回调。
 * @returns { UIExtensionComponentAttribute } UIExtensionComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function UIExtensionComponent(
    style: CustomBuilderT<UIExtensionComponentAttribute>
): UIExtensionComponentAttribute;