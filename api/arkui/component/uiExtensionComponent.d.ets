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
 * @arkts 1.2
 */


import Want from '../../@ohos.app.ability.Want';
import { Callback, ErrorCallback, BusinessError } from '../../@ohos.base';
import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { ComponentContent } from '../ComponentContent';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Enumeration of different types of DpiFollowStrategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum DpiFollowStrategy {
    /**
     * Followed the host DPI.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    FOLLOW_HOST_DPI = 0,
    /**
     * Followed the UIExtensionAbility.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    FOLLOW_UI_EXTENSION_ABILITY_DPI = 1
}
/**
 * This interface is used to set the options for UIExtensionComponentAttribute during construction
 *
 * @interface UIExtensionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface UIExtensionOptions {
    /**
     * Set whether the current capability is used as a Caller.<br/>
     * If set to true, as a Caller, the current token of UIExtensionComponent is set to rootToken.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    isTransferringCaller?: boolean;
    /**
     * Set placeholder.
     * If set placeholder ComponentContent, show placeholder node when connection is not established.
     *
     * @type { ?ComponentContent }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    placeholder?: ComponentContent;
    /**
     * Set Areachange placeholder.
     * If the Areachange placeholder ComponentContent is set, the placeholder node is displayed until
     * the UIExtensionComponent size change is complete.
     *
     * @type { ?Record<string, ComponentContent> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    areaChangePlaceholder?: Record<string, ComponentContent>;
    /**
     * Set UIExtensionComponent Content Dpi Follow Strategy.
     *
     * @type { ?DpiFollowStrategy }
     * @default DpiFollowStrategy.FOLLOW_UI_EXTENSION_ABILITY_DPI
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    dpiFollowStrategy?: DpiFollowStrategy;
}
/**
 * Indicates the information when the provider of the embedded UI is terminated.
 *
 * @interface TerminationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface TerminationInfo {
    /**
     * Defines the termination code.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    code: number;
    /**
    * Defines the additional termination information.
    *
    * @type { ?Want }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 20
    */
    want?: Want;
}
/**
 * Get Callback from @ohos.base.
 *
 * @typedef { Callback<Record<string, Object>> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type ReceiveCallback = Callback<Record<string, Object>>;
/**
 * This interface is used for send data to the UIExtensionAbility.<br/>
 * It is returned from onRemoteReady callback of UIExtensionComponent<br/>
 * when UIExtensionAbility connects successfully
 *
 * @interface UIExtensionProxy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface UIExtensionProxy {
    /**
     * This function is for sending data to the UIExtensionAbility.
     *
     * @param { Record<string, Object> } data
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    send(data: Record<string, Object>): void;
    /**
     * This function is for sending data to the UIExtensionAbility and waiting the result in blocking mode.
     *
     * @param { Record<string, Object> } data - Data send to the UIExtensionAbility.
     * @returns { Record<string, Object> } data - Data transferred from the UIExtensionAbility.
     * @throws { BusinessError } 100011 - No callback has been registered to response this request.
     * @throws { BusinessError } 100012 - Transferring data failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    sendSync(data: Record<string, Object>): Record<string, Object>;
    /**
     * Register the listener that watches for async data receiver callback being registered by UIExtensionAbility.
     *
     * @param { 'asyncReceiverRegister' } type - Indicates the type of event.
     * @param { Callback<UIExtensionProxy> } callback - Callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void;
    /**
     * Register the listener that watches for sync data receiver callback being registered by UIExtensionAbility.
     *
     * @param { 'syncReceiverRegister' } type - Indicates the type of event.
     * @param { Callback<UIExtensionProxy> } callback - Callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void;
    /**
     * Deregisters the listener that watches for async data receiver callback being registered by UIExtensionAbility.
     *
     * @param { 'asyncReceiverRegister' } type - Type of the listened event.
     * @param { Callback<UIExtensionProxy> } [callback] - Callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
    /**
     * Deregisters the listener that watches for sync data receiver callback being registered by UIExtensionAbility.
     *
     * @param { 'syncReceiverRegister' } type - Type of the listened event.
     * @param { Callback<UIExtensionProxy> } [callback] - Callback of the listened event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void;
}
export declare interface UIExtensionComponentAttribute extends CommonMethod {
    /**
     * @param { import('../api/@ohos.base').Callback<UIExtensionProxy> } callback
     * - callback called when remote UIExtensionAbility object is
     * <br/>ready for receive data
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onRemoteReady(callback: Callback<UIExtensionProxy> | undefined): this;
    /**
     * @param { ReceiveCallback } callback - Called when data received from UIExtensionAbility
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onReceive(callback: ReceiveCallback | undefined): this;
    /**
     * @param { import('../api/@ohos.base').ErrorCallback } callback
     * - called when some error occurred except disconnected from UIExtensionAbility.
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onError(callback: ErrorCallback<BusinessError> | undefined): this;
    /**
     * Called when the provider of the embedded UI is terminated.
     *
     * @param { Callback<TerminationInfo> } callback
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onTerminated(callback: Callback<TerminationInfo> | undefined): this;
    attributeModifier(modifier: AttributeModifier<UIExtensionComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIUIExtensionComponentAttribute extends UICommonMethod {
    /**
     * @param { import('../api/@ohos.base').Callback<UIExtensionProxy> } callback
     * - callback called when remote UIExtensionAbility object is
     * <br/>ready for receive data
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onRemoteReady(callback: Callback<UIExtensionProxy> | undefined): this;
    /**
     * @param { ReceiveCallback } callback - Called when data received from UIExtensionAbility
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onReceive(callback: ReceiveCallback | undefined): this;
    /**
     * @param { import('../api/@ohos.base').ErrorCallback } callback
     * - called when some error occurred except disconnected from UIExtensionAbility.
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onError(callback: ErrorCallback<BusinessError> | undefined): this;
    /**
     * Called when the provider of the embedded UI is terminated.
     *
     * @param { Callback<TerminationInfo> } callback
     * @returns { UIExtensionComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onTerminated(callback: Callback<TerminationInfo> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<UIExtensionComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function UIExtensionComponent(
    want: Want, options?: UIExtensionOptions, 
    @memo
    content_?: () => void,
): UIUIExtensionComponentAttribute