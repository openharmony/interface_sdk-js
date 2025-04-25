/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
import { ResourceStr, ResourceColor, Length, Font } from "./units";
import { TextOverflow, FontWeight, FontStyle, TextHeightAdaptivePolicy } from "./enums";
import { CommonConfiguration, CommonMethod, ContentModifier, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Provides a button component.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ButtonType {
    /**
     * Capsule button (rounded corners default to half the height).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Capsule,
    /**
     * Round buttons.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Circle,
    /**
     * Common button (no rounded corners by default).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Normal,
    /**
     * Rounded rectangle button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    ROUNDED_RECTANGLE = 3
}
/**
 * Enum for button style type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ButtonStyleMode {
    /**
     * Normal button (with normal background color).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    NORMAL = 0,
    /**
     * Emphasized button (with emphasized background color).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    EMPHASIZED = 1,
    /**
     * Textual button (with none background color).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    TEXTUAL = 2
}
/**
 * Enum for button role.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ButtonRole {
    /**
     * Normal button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    NORMAL = 0,
    /**
     * Error button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    ERROR = 1
}
/**
 * Defines the callback type used in ButtonConfiguration.
 *
 * @typedef {function} ButtonTriggerClickCallback
 * @param { number } xPos - The value of xPos is x coordinate.
 * @param { number } yPos - The value of yPos is y coordinate.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type ButtonTriggerClickCallback = (xPos: number, yPos: number) => void;
/**
 * ButtonConfiguration used by button content modifier.
 *
 * @extends CommonConfiguration<ButtonConfiguration>
 * @interface ButtonConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ButtonConfiguration extends CommonConfiguration<ButtonConfiguration> {
    /**
     * Button with inner text label.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    label: string;
    /**
     * Indicates whether the button is pressed.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pressed: boolean;
    /**
     * Trigger button click x coordinate and y coordinate.
     *
     * @type { ButtonTriggerClickCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    triggerClick: ButtonTriggerClickCallback;
}
/**
 * Enum for Control Size.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ControlSize {
    /**
     * The component size is small.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    SMALL = 'small',
    /**
     * The component size is normal.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    NORMAL = 'normal'
}
/**
 * Defines the button options.
 *
 * @interface ButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface ButtonOptions {
    /**
     * Describes the button style.
     *
     * @type { ?ButtonType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    type?: ButtonType;
    /**
     * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    stateEffect?: boolean;
    /**
     * Describes the button style.
     *
     * @type { ?ButtonStyleMode }
     * @default ButtonStyleMode.EMPHASIZED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    buttonStyle?: ButtonStyleMode;
    /**
     * Describes the button size.
     *
     * @type { ?ControlSize }
     * @default ControlSize.NORMAL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    controlSize?: ControlSize;
    /**
     * Describes the button role.
     *
     * @type { ?ButtonRole }
     * @default ButtonRole.NORMAL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    role?: ButtonRole;
}
/**
 * LabelStyle object.
 *
 * @interface LabelStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface LabelStyle {
    /**
     * overflow mode.
     *
     * @type { ?TextOverflow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    overflow?: TextOverflow;
    /**
     * Label max lines.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxLines?: number;
    /**
     * Min font size for adapted height.
     *
     * @type { ?(number | ResourceStr) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minFontSize?: number | ResourceStr;
    /**
     * Max font size for adapted height.
     *
     * @type { ?(number | ResourceStr) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxFontSize?: number | ResourceStr;
    /**
     * Adapt text height option.
     *
     * @type { ?TextHeightAdaptivePolicy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    heightAdaptivePolicy?: TextHeightAdaptivePolicy;
    /**
     * Font style.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    font?: Font;
}
export declare interface ButtonAttribute extends CommonMethod {
    /**
     * Describes the button style.
     *
     * @param { ButtonType } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    type(value: ButtonType | undefined): this;
    /**
     * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
     *
     * @param { boolean } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    stateEffect(value: boolean | undefined): this;
    /**
     * Describes the button style.
     *
     * @param { ButtonStyleMode } value - button style mode
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    buttonStyle(value: ButtonStyleMode | undefined): this;
    /**
     * Set the Button size.
     *
     * @param { ControlSize } value - control size
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    controlSize(value: ControlSize | undefined): this;
    /**
     * Set the Button role.
     *
     * @param { ButtonRole } value - button role
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    role(value: ButtonRole | undefined): this;
    /**
     * Text color.
     *
     * @param { ResourceColor } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Text size.
     *
     * @param { Length } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontSize(value: Length | undefined): this;
    /**
     * Font weight.
     *
     * @param { number | FontWeight | string } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Font style.
     *
     * @param { FontStyle } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Font family.
     *
     * @param { string | Resource } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Set the content modifier of button.
     *
     * @param { ContentModifier<ButtonConfiguration> } modifier - The content modifier of button.
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentModifier(modifier: ContentModifier<ButtonConfiguration> | undefined): this;
    /**
     * Set button label style.
     *
     * @param { LabelStyle } value - The label style configuration on button.
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    labelStyle(value: LabelStyle | undefined): this;
    /**
     * Sets the minimum zoom-out ratio of the button text.
     *
     * @param { number | Resource } scale
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    minFontScale(scale: number | Resource | undefined): this;
    /**
     * Sets the maximum magnification of the button text.
     *
     * @param { number | Resource  } scale
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    maxFontScale(scale: number | Resource | undefined): this;
    attributeModifier(modifier: AttributeModifier<ButtonAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIButtonAttribute extends UICommonMethod {
    /**
     * Describes the button style.
     *
     * @param { ButtonType } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    type(value: ButtonType | undefined): this;
    /**
     * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
     *
     * @param { boolean } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    stateEffect(value: boolean | undefined): this;
    /**
     * Describes the button style.
     *
     * @param { ButtonStyleMode } value - button style mode
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    buttonStyle(value: ButtonStyleMode | undefined): this;
    /**
     * Set the Button size.
     *
     * @param { ControlSize } value - control size
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    controlSize(value: ControlSize | undefined): this;
    /**
     * Set the Button role.
     *
     * @param { ButtonRole } value - button role
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    role(value: ButtonRole | undefined): this;
    /**
     * Text color.
     *
     * @param { ResourceColor } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Text size.
     *
     * @param { Length } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontSize(value: Length | undefined): this;
    /**
     * Font weight.
     *
     * @param { number | FontWeight | string } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Font style.
     *
     * @param { FontStyle } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Font family.
     *
     * @param { string | Resource } value
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Set the content modifier of button.
     *
     * @param { ContentModifier<ButtonConfiguration> } modifier - The content modifier of button.
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentModifier(modifier: ContentModifier<ButtonConfiguration> | undefined): this;
    /**
     * Set button label style.
     *
     * @param { LabelStyle } value - The label style configuration on button.
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    labelStyle(value: LabelStyle | undefined): this;
    /**
     * Sets the minimum zoom-out ratio of the button text.
     *
     * @param { number | Resource } scale
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    minFontScale(scale: number | Resource | undefined): this;
    /**
     * Sets the maximum magnification of the button text.
     *
     * @param { number | Resource  } scale
     * @returns { ButtonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    maxFontScale(scale: number | Resource | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<ButtonAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Button(
    label: ButtonOptions | ResourceStr, options?: ButtonOptions, 
    @memo
    content_?: () => void,
): UIButtonAttribute