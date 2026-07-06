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
import { AttributeModifier, CommonMethod, TerminationInfo } from './common';
import { ComponentContent } from '../ComponentContent';
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { Builder } from '@ohos.arkui.component';

/**
 * 不同类型的SecurityDpiFollowStrategy的枚举类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SecurityDpiFollowStrategy {
    /**
     * 跟随宿主DPI。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_HOST_DPI = 0,
    /**
     * DPI跟随提供方UIExtensionAbility。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}
/**
 * 该接口用于在构造时设置SecurityUIExtensionComponentAttribute的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SecurityUIExtensionOptions {
    /**
     * 设置当前能力是否作为调用方使用。<br/>
     * 如果设置为true，作为调用方，当前SecurityUIExtensionComponent的token被设置为rootToken。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isTransferringCaller?: boolean;
    /**
     * 设置占位。
     * 如果设置了占位ComponentContent，则在连接未建立时显示占位节点。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    placeholder?: ComponentContent;
    /**
     * 设置SecurityUIExtensionComponent内容的DPI跟随策略。
     *
     * @default SecurityDpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    dpiFollowStrategy?: SecurityDpiFollowStrategy;
}
/**
 * 定义ReceiveCallback。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ReceiveCallback = Callback<Record<string, RecordData>>;
/**
 * 该接口用于向UIExtensionAbility发送数据。<br/>
 * 当UIExtensionAbility连接成功时，<br/>
 * 它从SecurityUIExtensionComponent的onRemoteReady回调中返回。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface SecurityUIExtensionProxy {
    /**
     * 该接口用于向UIExtensionAbility发送数据。
     * AnonyMous Object Rectification
     *
     * @param { Record<string, RecordData> } data
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    sendSync(data: Record<string, RecordData>): Record<string, RecordData>;
    /**
     * 注册监听器，监听UIExtensionAbility注册的异步数据接收回调。
     * AnonyMous Object Rectification
     *
     * @param { Callback<SecurityUIExtensionProxy> } callback - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onAsyncReceiverRegister(callback: Callback<SecurityUIExtensionProxy>): void;
    /**
     * 注册监听器，监听UIExtensionAbility注册的同步数据接收回调。
     * AnonyMous Object Rectification
     *
     * @param { Callback<SecurityUIExtensionProxy> } callback - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onSyncReceiverRegister(callback: Callback<SecurityUIExtensionProxy>): void;
    /**
     * 注销监听器，该监听器监听UIExtensionAbility注册的异步数据接收回调。
     * AnonyMous Object Rectification
     *
     * @param { Callback<SecurityUIExtensionProxy> } [callback] - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offAsyncReceiverRegister(callback?: Callback<SecurityUIExtensionProxy>): void;
    /**
     * 注销监听器，该监听器监听UIExtensionAbility注册的同步数据接收回调。
     * AnonyMous Object Rectification
     *
     * @param { Callback<SecurityUIExtensionProxy> } [callback] - 监听事件的回调。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offSyncReceiverRegister(callback?: Callback<SecurityUIExtensionProxy>): void;
}

/**
 * 定义SecurityUIExtensionComponent的属性函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare interface SecurityUIExtensionComponentAttribute extends CommonMethod {
    /**
     * 设置UIExtensionComponent的选项。
     *
     * @param { Want } want - Want对象
     * @param { SecurityUIExtensionOptions } [options] - 选项
     * @returns { this } SecurityUIExtensionComponentAttribute实例
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setSecurityUIExtensionComponentOptions(want: Want, options?: SecurityUIExtensionOptions): this;
    /**
     * 当远程UIExtensionAbility对象准备好接收数据时回调
     *
     * @param { Callback<SecurityUIExtensionProxy> | undefined } callback - <br>SecurityUIExtensionProxy对象。
     * @returns { SecurityUIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onRemoteReady(callback: Callback<SecurityUIExtensionProxy> | undefined): this;
    /**
     * AnonyMous Object Rectification
     *
     * @param { ReceiveCallback | undefined } callback - 当接收到来自UIExtensionAbility的数据时调用
     * @returns { SecurityUIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onReceive(callback: ReceiveCallback | undefined): this;
    /**
     * 当发生某些错误时回调，除了与UIExtensionAbility断开连接之外。
     *
     * @param { ErrorCallback<BusinessError> | undefined } callback - ErrorCallback
     * @returns { SecurityUIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onError(callback: ErrorCallback<BusinessError> | undefined): this;
    /**
     * 当嵌入式UI的提供方终止时调用。
     *
     * @param { Callback<TerminationInfo> | undefined } callback
     * @returns { SecurityUIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onTerminated(callback: Callback<TerminationInfo> | undefined): this;
    /**
     * 设置SecurityUIExtensionComponent组件的属性修饰器。
     *
     * @param { AttributeModifier<SecurityUIExtensionComponentAttribute> | undefined } modifier
     * @returns { SecurityUIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    attributeModifier(modifier: AttributeModifier<SecurityUIExtensionComponentAttribute> | undefined): this;
}

/**
 * 定义SecurityUIExtensionComponent组件。
 *
 * @param { Want } want - Want对象
 * @param { SecurityUIExtensionOptions } [options] - 选项
 * @param { CustomBuilder } [content_] - 容器
 * @returns { SecurityUIExtensionComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function SecurityUIExtensionComponent(
    want: Want, options?: SecurityUIExtensionOptions, 
    content_?: CustomBuilder,
): SecurityUIExtensionComponentAttribute;

/**
 * 定义SecurityUIExtensionComponent组件。
 *
 * @param { CustomBuilderT<SecurityUIExtensionComponentAttribute> } style - 用于设置
 *     SecurityUIExtensionComponent属性的回调。
 * @returns { SecurityUIExtensionComponentAttribute } SecurityUIExtensionComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function SecurityUIExtensionComponent(
    style: CustomBuilderT<SecurityUIExtensionComponentAttribute>,
    content_?: CustomBuilder,
): SecurityUIExtensionComponentAttribute;
