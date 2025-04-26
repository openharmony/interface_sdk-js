/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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


import { CustomBuilder, CommonConfiguration, Callback, CommonMethod, ContentModifier, Optional, UICommonMethod, AttributeModifier } from "./common";
import { ResourceColor, MarkStyle } from "./units";
import { CheckBoxShape } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines the options of Checkbox.
 *
 * @interface CheckboxOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface CheckboxOptions {
    /**
     * Current name of Checkbox.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    name?: string;
    /**
     * Sets the group of Checkbox.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    group?: string;
    /**
     * Custom builder function.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    indicatorBuilder?: CustomBuilder;
}
/**
 * CheckBoxConfiguration used by content modifier.
 *
 * @extends CommonConfiguration<CheckBoxConfiguration>
 * @interface CheckBoxConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface CheckBoxConfiguration extends CommonConfiguration<CheckBoxConfiguration> {
    /**
     * Current name of checkbox.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    name: string;
    /**
     * Indicates whether the checkbox is selected.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selected: boolean;
    /**
     * Trigger checkbox select change.
     *
     * @type { Callback<boolean> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    triggerChange: Callback<boolean>;
}
/**
 * Defines a Checkbox callback when onChange.
 *
 * @typedef { function } OnCheckboxChangeCallback
 * @param { boolean } value - selected status
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type OnCheckboxChangeCallback = (value: boolean) => void;
export declare interface CheckboxAttribute extends CommonMethod {
    /**
     * setting whether checkbox is selected.
     *
     * @param { boolean } value
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    select(value: boolean | undefined): this;
    /**
     * setting the display color of checkbox.
     *
     * @param { ResourceColor } value
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    selectedColor(value: ResourceColor | undefined): this;
    /**
    * setting the shape of checkbox.
    *
    * @param { CheckBoxShape } value - The configuration of checkbox shape.
    * @returns { CheckboxAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    shape(value: CheckBoxShape | undefined): this;
    /**
     * Set the display border color of unselected checkbox.
     *
     * @param { ResourceColor } value - The color of border when checkbox unselected.
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    unselectedColor(value: ResourceColor | undefined): this;
    /**
     * Set the mark style of checkbox.
     *
     * @param { MarkStyle } value - The style configuration of checkbox mark.
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mark(value: MarkStyle | undefined): this;
    /**
     * Called when the selection status changes.
     *
     * @param { OnCheckboxChangeCallback } callback
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onChange(callback: OnCheckboxChangeCallback | undefined): this;
    /**
     * Set the content modifier of checkbox.
     *
     * @param { ContentModifier<CheckBoxConfiguration> } modifier - The content modifier of checkbox.
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentModifier(modifier: ContentModifier<CheckBoxConfiguration> | undefined): this;
    attributeModifier(modifier: AttributeModifier<CheckboxAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UICheckboxAttribute extends UICommonMethod {
    /**
     * setting whether checkbox is selected.
     *
     * @param { boolean } value
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    select(value: boolean | undefined): this;
    /**
     * setting the display color of checkbox.
     *
     * @param { ResourceColor } value
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    selectedColor(value: ResourceColor | undefined): this;
    /**
    * setting the shape of checkbox.
    *
    * @param { CheckBoxShape } value - The configuration of checkbox shape.
    * @returns { CheckboxAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    @memo
    shape(value: CheckBoxShape | undefined): this;
    /**
     * Set the display border color of unselected checkbox.
     *
     * @param { ResourceColor } value - The color of border when checkbox unselected.
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    unselectedColor(value: ResourceColor | undefined): this;
    /**
     * Set the mark style of checkbox.
     *
     * @param { MarkStyle } value - The style configuration of checkbox mark.
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    mark(value: MarkStyle | undefined): this;
    /**
     * Called when the selection status changes.
     *
     * @param { OnCheckboxChangeCallback } callback
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: OnCheckboxChangeCallback | undefined): this;
    /**
     * Set the content modifier of checkbox.
     *
     * @param { ContentModifier<CheckBoxConfiguration> } modifier - The content modifier of checkbox.
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentModifier(modifier: ContentModifier<CheckBoxConfiguration> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<CheckboxAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Checkbox(
    options?: CheckboxOptions, 
    @memo
    content_?: () => void,
): UICheckboxAttribute