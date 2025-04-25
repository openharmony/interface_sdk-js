/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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


import { TerminationInfo } from "./uiExtensionComponent";
import Want from '../../@ohos.app.ability.Want';
import { Callback, ErrorCallback, BusinessError } from '../../@ohos.base';
import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { EmbeddedType } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
export declare interface EmbeddedComponentAttribute extends CommonMethod {
    /**
     * Called when the provider of the embedded UI is terminated.
     *
     * @param { Callback<TerminationInfo> } callback
     * @returns { EmbeddedComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onTerminated(callback: Callback<TerminationInfo> | undefined): this;
    /**
     * Called when some error occurred.
     *
     * @param { ErrorCallback } callback
     * @returns { EmbeddedComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    onError(callback: ErrorCallback<BusinessError> | undefined): this;
    attributeModifier(modifier: AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIEmbeddedComponentAttribute extends UICommonMethod {
    /**
     * Called when the provider of the embedded UI is terminated.
     *
     * @param { Callback<TerminationInfo> } callback
     * @returns { EmbeddedComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    onTerminated(callback: Callback<TerminationInfo> | undefined): this;
    /**
     * Called when some error occurred.
     *
     * @param { ErrorCallback } callback
     * @returns { EmbeddedComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    onError(callback: ErrorCallback<BusinessError> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<EmbeddedComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function EmbeddedComponent(
    loader: Want, type?: EmbeddedType, 
    @memo
    content_?: () => void,
): UIEmbeddedComponentAttribute