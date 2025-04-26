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


import { Resource } from '../../global/resource';
import { ResourceColor } from "./units";
import { CommonConfiguration, Callback, CommonMethod, ContentModifier, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Declare the type of status button
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ToggleType {
    /**
     * Checkbox
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Checkbox,
    /**
     * Switch
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Switch,
    /**
     * Button
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Button
}
/**
 * Defines the switch style.
 *
 * @interface SwitchStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SwitchStyle {
    /**
     * Set the radius of the point of the switch.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pointRadius?: number | Resource;
    /**
     * Set the color of the unselected switch.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    unselectedColor?: ResourceColor;
    /**
     * Set the color of the point of the switch.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pointColor?: ResourceColor;
    /**
     * Set the border radius of the track of the switch.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    trackBorderRadius?: number | Resource;
}
/**
 * ToggleConfiguration used by toggle Modifier
 *
 * @extends CommonConfiguration<ToggleConfiguration>
 * @interface ToggleConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ToggleConfiguration extends CommonConfiguration<ToggleConfiguration> {
    /**
     * Indicates whether the Toggle is on.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isOn: boolean;
    /**
     * Indicates whether the Toggle is enabled.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enabled: boolean;
    /**
     * Trigger toggle select change
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
 * Defines the toggle options.
 *
 * @interface ToggleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface ToggleOptions {
    /**
     * Type of the toggle.
     *
     * @type { ToggleType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    type: ToggleType;
    /**
     * Whether the toggle is on.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    isOn?: boolean;
}
export declare interface ToggleAttribute extends CommonMethod {
    /**
     * Called when the selected state of the component changes.
     *
     * @param { function } callback
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onChange(callback: ((isOn: boolean) => void) | undefined): this;
    /**
     * Set the content modifier of toggle.
     *
     * @param { ContentModifier<ToggleConfiguration> } modifier - The content modifier of toggle.
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentModifier(modifier: ContentModifier<ToggleConfiguration> | undefined): this;
    /**
     * Called when the color of the selected button is set.
     *
     * @param { ResourceColor } value
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    selectedColor(value: ResourceColor | undefined): this;
    /**
     * Called when the color of the selected button is set.
     *
     * @param { ResourceColor } color
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    switchPointColor(color: ResourceColor | undefined): this;
    /**
     * Set the style of the switch.
     *
     * @param { SwitchStyle } value
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    switchStyle(value: SwitchStyle | undefined): this;
    attributeModifier(modifier: AttributeModifier<ToggleAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIToggleAttribute extends UICommonMethod {
    /**
     * Called when the selected state of the component changes.
     *
     * @param { function } callback
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: ((isOn: boolean) => void) | undefined): this;
    /**
     * Set the content modifier of toggle.
     *
     * @param { ContentModifier<ToggleConfiguration> } modifier - The content modifier of toggle.
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentModifier(modifier: ContentModifier<ToggleConfiguration> | undefined): this;
    /**
     * Called when the color of the selected button is set.
     *
     * @param { ResourceColor } value
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    selectedColor(value: ResourceColor | undefined): this;
    /**
     * Called when the color of the selected button is set.
     *
     * @param { ResourceColor } color
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    switchPointColor(color: ResourceColor | undefined): this;
    /**
     * Set the style of the switch.
     *
     * @param { SwitchStyle } value
     * @returns { ToggleAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    switchStyle(value: SwitchStyle | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<ToggleAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Toggle(
    options: ToggleOptions, 
    @memo
    content_?: () => void,
): UIToggleAttribute