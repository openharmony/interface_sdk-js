/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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


import { CommonMethod, Callback, UICommonMethod, AttributeModifier } from "./common";
import Want from '../../@ohos.app.ability.Want';
import { Visibility } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines the FormDimension enum.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FormDimension {
    /**
     * 1 x 2 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    Dimension_1_2,
    /**
     * 2 x 2 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    Dimension_2_2,
    /**
     * 2 x 4 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    Dimension_2_4,
    /**
     * 4 x 4 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    Dimension_4_4,
    /**
     * 2 x 1 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    Dimension_2_1,
    /**
     * 1 x 1 cards
     * The default value is 6
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    DIMENSION_1_1 = 6,
    /**
     * 6 x 4 cards
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    DIMENSION_6_4,
    /**
     * 2 x 3 cards used for wearable devices
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    DIMENSION_2_3 = 8,
    /**
     * 3 x 3 cards used for wearable devices
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    DIMENSION_3_3 = 9,
    /**
     * 3 x 4 cards used for tv devices
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    DIMENSION_3_4 = 10
}
/**
 * Defines the FormRenderingMode enum.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FormRenderingMode {
    /**
     *  Full color mode, this is default value
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    FULL_COLOR,
    /**
     *  single color mode
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    SINGLE_COLOR
}
/**
 * Defines the FormShape enum.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum FormShape {
    /**
     * The rect shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    RECT = 1,
    /**
     * The circle shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    CIRCLE
}
/**
 * Defines the FormInfo.
 *
 * @interface FormInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface FormInfo {
    /**
     * The id the form.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    id: number | string;
    /**
     * The name of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    name: string;
    /**
     * The bundle of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    bundle: string;
    /**
     * The ability of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    ability: string;
    /**
     * The module of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    module: string;
    /**
     * The dimension of the form.
     *
     * @type { ?FormDimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    dimension?: FormDimension;
    /**
     * Whether the form is temporary.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    temporary?: boolean;
    /**
     * The want of the form.
     *
     * @type { ?import('../api/@ohos.app.ability.Want').default }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    want?: Want;
    /**
     * The renderingMode of the form.
     *
     * @type { ?FormRenderingMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    renderingMode?: FormRenderingMode;
    /**
     * The shape of the form.
     *
     * @type { ?FormShape }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    shape?: FormShape;
}
/**
 * Defines the FormCallbackInfo.
 *
 * @interface FormCallbackInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export interface FormCallbackInfo {
    /**
     * The id of the form.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    id: number;
    /**
     * The string id of the form.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    idString: string;
}
/**
 * Defines the FormCallbackInfo.
 *
 * @interface FormSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export interface FormSize {
    /**
     * The string id of the form.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    width: number;
    /**
     * The string id of the form.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    height: number;
}
/**
 * Defines the FormCallbackInfo.
 *
 * @interface FormError
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export interface FormError {
    /**
     * The string id of the form.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    errcode: number;
    /**
     * The string id of the form.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    msg: string;
}
export declare interface FormComponentAttribute extends CommonMethod {
    /**
     * Sets the display area size of the card.
     *
     * @param { FormSize } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    size(value: FormSize | undefined): this;
    /**
     * Card module name.
     *
     * @param { string } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    moduleName(value: string | undefined): this;
    /**
     * Set the card size.
     *
     * @param { FormDimension } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    dimension(value: FormDimension | undefined): this;
    /**
     * Indicates whether to allow card update.
     *
     * @param { boolean } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    allowUpdate(value: boolean | undefined): this;
    /**
     * Whether the card is visible.
     *
     * @param { Visibility } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    visibility(value: Visibility | undefined): this;
    /**
     * This function is triggered after card information is obtained.
     * For details about the form information, see the definition of the original capability subsystem.
     *
     * @param { Callback<FormCallbackInfo> } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onAcquired(callback: Callback<FormCallbackInfo> | undefined): this;
    /**
     * Card loading error.
     *
     * @param { Callback<FormError> } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onError(callback: Callback<FormError> | undefined): this;
    /**
     * Card to be redirected.
     *
     * @param { function } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onRouter(callback: Callback<Object | undefined | null> | undefined): this;
    /**
     * Uninstall Card.
     *
     * @param { Callback<FormCallbackInfo> } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onUninstall(callback: Callback<FormCallbackInfo> | undefined): this;
    /**
     * Card to be loaded.
     *
     * @param { function } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onLoad(callback: (() => void) | undefined): this;
    attributeModifier(modifier: AttributeModifier<FormComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIFormComponentAttribute extends UICommonMethod {
    /**
     * Sets the display area size of the card.
     *
     * @param { FormSize } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    size(value: FormSize | undefined): this;
    /**
     * Card module name.
     *
     * @param { string } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    moduleName(value: string | undefined): this;
    /**
     * Set the card size.
     *
     * @param { FormDimension } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    dimension(value: FormDimension | undefined): this;
    /**
     * Indicates whether to allow card update.
     *
     * @param { boolean } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    allowUpdate(value: boolean | undefined): this;
    /**
     * Whether the card is visible.
     *
     * @param { Visibility } value
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    visibility(value: Visibility | undefined): this;
    /**
     * This function is triggered after card information is obtained.
     * For details about the form information, see the definition of the original capability subsystem.
     *
     * @param { Callback<FormCallbackInfo> } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onAcquired(callback: Callback<FormCallbackInfo> | undefined): this;
    /**
     * Card loading error.
     *
     * @param { Callback<FormError> } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onError(callback: Callback<FormError> | undefined): this;
    /**
     * Card to be redirected.
     *
     * @param { function } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onRouter(callback: Callback<Object | undefined | null> | undefined): this;
    /**
     * Uninstall Card.
     *
     * @param { Callback<FormCallbackInfo> } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onUninstall(callback: Callback<FormCallbackInfo> | undefined): this;
    /**
     * Card to be loaded.
     *
     * @param { function } callback
     * @returns { FormComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onLoad(callback: (() => void) | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<FormComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function FormComponent(
    value: FormInfo, 
    @memo
    content_?: () => void,
): UIFormComponentAttribute