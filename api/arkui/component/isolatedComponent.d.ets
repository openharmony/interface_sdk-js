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
 * @file Defines the isolated component
 * @kit ArkUI
 * @arkts 1.2
 */


import Want from '../../@ohos.app.ability.Want';
import { ErrorCallback, BusinessError } from '../../@ohos.base';
import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * This interface is used to set the options for IsolatedComponentAttribute during construction
 *
 * @interface IsolatedOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface IsolatedOptions {
    /**
     * Indicates want of the IsolatedOptions.
     * @type { Want }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    want: Want;
}
export declare interface IsolatedComponentAttribute extends CommonMethod {
    /**
     * @param { ErrorCallback } callback
     * - called when some error occurred except disconnected from IsolatedAbility.
     * @returns { IsolatedComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onError(callback: ErrorCallback<BusinessError> | undefined): this;
    attributeModifier(modifier: AttributeModifier<IsolatedComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIIsolatedComponentAttribute extends UICommonMethod {
    /**
     * @param { ErrorCallback } callback
     * - called when some error occurred except disconnected from IsolatedAbility.
     * @returns { IsolatedComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onError(callback: ErrorCallback<BusinessError> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<IsolatedComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function IsolatedComponent(
    options: IsolatedOptions, 
    @memo
    content_?: () => void,
): UIIsolatedComponentAttribute