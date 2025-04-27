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


import { CommonMethod, Optional, UICommonMethod, AttributeModifier } from "./common";
import { ResourceColor, MarkStyle } from "./units";
import { CheckBoxShape } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * CheckboxGroup SelectStatus
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum SelectStatus {
    /**
     * All checkboxes are selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    All,
    /**
     * Part of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Part,
    /**
     * None of the checkbox is selected.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    None
}
/**
 * Defines the options of CheckboxGroup.
 *
 * @interface CheckboxGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface CheckboxGroupOptions {
    /**
     * Setting the group of CheckboxGroup.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    group?: string;
}
/**
 * Defines the options of CheckboxGroupResult.
 *
 * @interface CheckboxGroupResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface CheckboxGroupResult {
    /**
     * Checkbox name.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    name: Array<string>;
    /**
     * Set the group of status.
     *
     * @type { SelectStatus }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    status: SelectStatus;
}
/**
 * Defines a CheckboxGroup callback when onChange.
 *
 * @typedef { function } OnCheckboxGroupChangeCallback
 * @param { CheckboxGroupResult } value - checkbox group result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type OnCheckboxGroupChangeCallback = (value: CheckboxGroupResult) => void;
export declare interface CheckboxGroupAttribute extends CommonMethod {
    /**
     * setting whether all checkbox is selected.
     *
     * @param { boolean } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    selectAll(value: boolean | undefined): this;
    /**
     * setting the display color of checkbox.
     *
     * @param { ResourceColor } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    selectedColor(value: ResourceColor | undefined): this;
    /**
     * Set the display border color of unselected checkbox.
     *
     * @param { ResourceColor } value - The color of border when checkboxgroup unselected.
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    unselectedColor(value: ResourceColor | undefined): this;
    /**
     * Set the mark style of checkbox.
     *
     * @param { MarkStyle } value - The style configuration of checkboxgroup mark.
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mark(value: MarkStyle | undefined): this;
    /**
     * Called when the selection status changes.
     *
     * @param { OnCheckboxGroupChangeCallback } callback
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onChange(callback: OnCheckboxGroupChangeCallback | undefined): this;
    /**
     * Setting the shape of checkbox group.
     *
     * @param { CheckBoxShape } value - The configuration of checkbox group shape.
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    checkboxShape(value: CheckBoxShape | undefined): this;
    attributeModifier(modifier: AttributeModifier<CheckboxGroupAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UICheckboxGroupAttribute extends UICommonMethod {
    /**
     * setting whether all checkbox is selected.
     *
     * @param { boolean } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    selectAll(value: boolean | undefined): this;
    /**
     * setting the display color of checkbox.
     *
     * @param { ResourceColor } value
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    selectedColor(value: ResourceColor | undefined): this;
    /**
     * Set the display border color of unselected checkbox.
     *
     * @param { ResourceColor } value - The color of border when checkboxgroup unselected.
     * @returns { CheckboxGroupAttribute }
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
     * @param { MarkStyle } value - The style configuration of checkboxgroup mark.
     * @returns { CheckboxGroupAttribute }
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
     * @param { OnCheckboxGroupChangeCallback } callback
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: OnCheckboxGroupChangeCallback | undefined): this;
    /**
     * Setting the shape of checkbox group.
     *
     * @param { CheckBoxShape } value - The configuration of checkbox group shape.
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    checkboxShape(value: CheckBoxShape | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<CheckboxGroupAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function CheckboxGroup(
    options?: CheckboxGroupOptions, 
    @memo
    content_?: () => void,
): UICheckboxGroupAttribute