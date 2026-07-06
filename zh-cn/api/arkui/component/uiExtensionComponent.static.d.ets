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
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DpiFollowStrategy {
    /**
     * 跟随宿主DPI。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    FOLLOW_HOST_DPI = 0,
    /**
     * 跟随UIExtensionAbility。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}
/**
 * 表示不同类型的WindowModeFollowStrategy的枚举。
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum WindowModeFollowStrategy {
    /**
     * 跟随宿主窗口模式。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    FOLLOW_HOST_WINDOW_MODE = 0,
    /**
     * 跟随UIExtensionAbility。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
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
 * @since 23 static
 */
export declare interface UIExtensionOptions {
    /**
     * 设置当前能力是否作为调用方使用。<br/>
     * 如果设置为true，则作为调用方，将UIExtensionComponent的当前token设置为rootToken。
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    isTransferringCaller?: boolean;
    /**
     * 设置占位符。
     * 如果设置了占位ComponentContentBase，则在连接未建立时显示占位节点。
     *
     * @type { ?ComponentContentBase }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    placeholder?: ComponentContentBase;
    /**
     * 设置区域变化占位符。
     * 如果设置了区域变化占位ComponentContentBase，则占位节点会一直显示，直到UIExtensionComponent尺寸变化完成。
     *
     * @type { ?Record<string, ComponentContentBase> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    areaChangePlaceholder?: Record<string, ComponentContentBase>;
    /**
     * 设置UIExtensionComponent内容的DPI跟随策略。
     *
     * @type { ?DpiFollowStrategy }
     * @default DpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    dpiFollowStrategy?: DpiFollowStrategy;
    /**
     * 设置UIExtensionComponent内容的窗口模式跟随策略。
     * @type { ?WindowModeFollowStrategy }
     * @default WindowModeFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_WINDOW_MODE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    windowModeFollowStrategy?: WindowModeFollowStrategy;
}
/**
 * 从@ohos.base获取Callback。
 *
 * @typedef { Callback<Record<string, RecordData>> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type ReceiveCallback = Callback<Record<string, RecordData>>;
/**
 * 该接口用于向UIExtensionAbility发送数据。<br/>
 * 当UIExtensionAbility连接成功时，<br/>
 * 它从UIExtensionComponent的onRemoteReady回调中返回。
 *
 * @interface UIExtensionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UIExtensionProxy {
    /**
     * 该接口用于向UIExtensionAbility发送数据。
     * AnonyMous Object Rectification
     *
     * @param { Record<string, RecordData> } data
     * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    send(data: Record<string, RecordData>): void;
    /**
     * 该接口用于向UIExtensionAbility发送数据，并以阻塞方式等待结果。
     * AnonyMous Object Rectification
     *
     * @param { Record<string, RecordData> } data - 发送给UIExtensionAbility的数据。
     * @returns { Record<string, RecordData> } data - 从UIExtensionAbility传输回来的数据。
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
 * @extends CommonMethod
 * @typedef UIExtensionComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @noninterop
 * @since 23 static
 */
export declare interface UIExtensionComponentAttribute extends CommonMethod {
    /**
     * 设置UIExtensionComponent的选项。
     *
     * @param { Want } want - want
     * @param { UIExtensionOptions } [options] - 选项
     * @returns { this } UIExtensionComponentAttribute实例
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @systemapi
     * @since 26.0.0 staticonly
     */
    setUIExtensionComponentOptions(want: Want, options?: UIExtensionOptions): this;

    /**
     * 当远程UIExtensionAbility对象就绪可以接收数据时回调的回调函数
     *
     * @param { Callback<UIExtensionProxy> | undefined } callback
     * @returns { UIExtensionComponentAttribute }
     * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onRemoteReady(callback: Callback<UIExtensionProxy> | undefined): this;
    /**
     * AnonyMous Object Rectification
     *
     * @param { ReceiveCallback | undefined  } callback - 当接收到来自UIExtensionAbility的数据时回调
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onReceive(callback: ReceiveCallback | undefined): this;
    /**
     * 当发生除与UIExtensionAbility断开连接之外的其他错误时回调。
     *
     * @param { ErrorCallback<BusinessError> | undefined } callback
     * @returns { UIExtensionComponentAttribute }
     * @throws { BusinessError } 202 - 非系统应用不允许使用系统API。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onError(callback: ErrorCallback<BusinessError> | undefined): this;
    /**
     * 当嵌入式UI的提供方终止时回调。
     *
     * @param { Callback<TerminationInfo> | undefined } callback
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onTerminated(callback: Callback<TerminationInfo> | undefined): this;
    /**
     * 当UIExtensionAbility绘制首帧时回调的回调函数。
     * @param { VoidCallback | undefined } callback
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
 * @param { Want } want - want
 * @param { UIExtensionOptions } [options] - 选项
 * @returns { UIExtensionComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function UIExtensionComponent(
    want: Want, options?: UIExtensionOptions
): UIExtensionComponentAttribute

/**
 * 定义UIExtensionComponent组件。它要求在组件属性设置开始时调用setUIExtensionComponentOptions，
 * 并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<UIExtensionComponentAttribute> } style - 用于设置uiextensioncomponent属性的回调。
 * @returns { UIExtensionComponentAttribute } UIExtensionComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @systemapi
 * @since 26.0.0 staticonly
 */
@Builder
export declare function UIExtensionComponent(
    style: CustomBuilderT<UIExtensionComponentAttribute>
): UIExtensionComponentAttribute
