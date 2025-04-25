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


import { CommonMethod, CommonConfiguration, ContentModifier, Optional, UICommonMethod, AttributeModifier } from "./common";
import { Axis, CrownSensitivity } from "./enums";
import { ResourceStr, ResourceColor, Length, Dimension, SizeOptions } from "./units";
import { CircleAttribute, UICircleAttribute } from "./circle";
import { RectAttribute, UIRectAttribute } from "./rect";
import { PathAttribute, UIPathAttribute } from "./path";
import { EllipseAttribute, UIEllipseAttribute } from "./ellipse";
import { LinearGradient } from "./dataPanel";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Declare sliderstyle
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum SliderStyle {
    /**
     * The slider is on the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    OutSet,
    /**
     * The slider is in the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    InSet,
    /**
     * No slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    NONE
}
/**
 * Declare SliderChangeMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum SliderChangeMode {
    /**
     * Start dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Begin,
    /**
     * Drag the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Moving,
    /**
     * End dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    End,
    /**
     * Click the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Click
}
/**
 * Declare SliderInteraction
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SliderInteraction {
    /**
     * Allow user to slide the block and click track to move the block
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SLIDE_AND_CLICK,
    /**
     * Only allow user to slide the block
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SLIDE_ONLY,
    /**
     * Allow user to slide the block and click track to move the block, but click value only change when touch up.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SLIDE_AND_CLICK_UP = 2
}
/**
 * Defines the valid slidable range. If and only if MIN <= from <= to <= MAX, sliding range can be set successfully.
 *
 * @interface SlideRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SlideRange {
    /**
     * Set the start point of sliding range.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    from?: number;
    /**
     * Set the end point of sliding range.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    to?: number;
}
/**
 * Defines the options of Slider.
 *
 * @interface SliderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface SliderOptions {
    /**
     * Current value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    value?: number;
    /**
     * Sets the min value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    min?: number;
    /**
     * Sets the max value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    max?: number;
    /**
     * Sets the step of each slide value.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    step?: number;
    /**
     * Sets the slider style.
     *
     * @type { ?SliderStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    style?: SliderStyle;
    /**
     * Sets the slider direction style.
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    direction?: Axis;
    /**
     * Set whether the direction of the slider needs to be reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    reverse?: boolean;
}
/**
 * Declare SliderBlockType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SliderBlockType {
    /**
     * Use the default block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT,
    /**
     * Use an image as the slider block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    IMAGE,
    /**
     * Use a shape as the slider block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SHAPE
}
/**
 * Defines the style of slider block.
 *
 * @interface SliderBlockStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SliderBlockStyle {
    /**
     * Sets the type of slider block.
     *
     * @type { SliderBlockType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type: SliderBlockType;
    /**
     * Sets the image of slider block while the type is set to SliderBlockType.Image.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    image?: ResourceStr;
    /**
     * Sets the shape of slider block while the type is set to SliderBlockType.Shape.
     *
     * @type { ?(CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shape?: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute;
}
/**
 * Defines the callback type used in SliderConfiguration.
 *
 * @typedef {function} SliderTriggerChangeCallback
 * @param { number } value - The value of slider.
 * @param { SliderChangeMode } mode - The changeMode of slider.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type SliderTriggerChangeCallback = (value: number, mode: SliderChangeMode) => void;
/**
 * SliderConfiguration used by slider content modifier
 *
 * @extends CommonConfiguration<SliderConfiguration>
 * @interface SliderConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SliderConfiguration extends CommonConfiguration<SliderConfiguration> {
    /**
     * Current progress value.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    value: number;
    /**
     * Minimum value.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    min: number;
    /**
     * Maximum value.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    max: number;
    /**
     * The sliding step size of Slider.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    step: number;
    /**
     * Trigger slider change
     *
     * @type { SliderTriggerChangeCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    triggerChange: SliderTriggerChangeCallback;
}
export declare interface SliderAttribute extends CommonMethod {
    /**
     * Called when the slider color of the slider bar is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    blockColor(value: ResourceColor | undefined): this;
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor | LinearGradient } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    trackColor(value: ResourceColor | LinearGradient | undefined): this;
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    selectedColor(value: ResourceColor | undefined): this;
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor | LinearGradient } selectedColor
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    selectedColor(selectedColor: ResourceColor | LinearGradient | undefined): this;
    /**
     * Called when setting whether to display step size.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    showSteps(value: boolean | undefined): this;
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean } value - Whether to display the bubble.
     * @param { ResourceStr } content - Text content in the bubble. If the content is not specified, the current
     *                                  percentage is displayed by default.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    showTips(value: boolean | undefined, content?: ResourceStr | undefined): this;
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    trackThickness(value: Length | undefined): this;
    /**
     * Called when the selection value changes.
     *
     * @param { function } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onChange(callback: ((value: number, mode: SliderChangeMode) => void) | undefined): this;
    /**
     * Called when the border color of block is set.
     *
     * @param { ResourceColor } value - the border color of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    blockBorderColor(value: ResourceColor | undefined): this;
    /**
     * Called when the border width of block is set.
     *
     * @param { Length } value - the border width of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    blockBorderWidth(value: Length | undefined): this;
    /**
     * Called when the color of step is set.
     *
     * @param { ResourceColor } value - the color of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    stepColor(value: ResourceColor | undefined): this;
    /**
     * Called when the radius of track border is set.
     *
     * @param { Length } value - the radius of track border.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    trackBorderRadius(value: Length | undefined): this;
    /**
     * Called when the radius of selected part is set.
     *
     * @param { Dimension } value - the radius of selected part.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedBorderRadius(value: Dimension | undefined): this;
    /**
     * Called when the size of block is set.
     *
     * @param { SizeOptions } value - the size of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    blockSize(value: SizeOptions | undefined): this;
    /**
     * Called when the style of block is set.
     *
     * @param { SliderBlockStyle } value - the style of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    blockStyle(value: SliderBlockStyle | undefined): this;
    /**
     * Called when the diameter of step is set.
     *
     * @param { Length } value - the diameter of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    stepSize(value: Length | undefined): this;
    /**
     * Sets the interaction mode of the slider.
     *
     * @param { SliderInteraction } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    sliderInteractionMode(value: SliderInteraction | undefined): this;
    /**
     * Sets the min value when Slider response to drag event.
     *
     * @param { number } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minResponsiveDistance(value: number | undefined): this;
    /**
     * Set the content modifier of slider.
     *
     * @param { ContentModifier<SliderConfiguration> } modifier - The content modifier of slider.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentModifier(modifier: ContentModifier<SliderConfiguration> | undefined): this;
    /**
     * Set the valid slidable range.
     *
     * @param { SlideRange } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    slideRange(value: SlideRange | undefined): this;
    /**
     * Set the sensitivity of rotating crown.
     *
     * @param { Optional<CrownSensitivity> } sensitivity - The sensitivity of rotating crown, default value is { MEDIUM }.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } enabled - Default value is true, set false to disable haptic feedback.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableHapticFeedback(enabled: boolean | undefined): this;
    attributeModifier(modifier: AttributeModifier<SliderAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UISliderAttribute extends UICommonMethod {
    /**
     * Called when the slider color of the slider bar is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    blockColor(value: ResourceColor | undefined): this;
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor | LinearGradient } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    trackColor(value: ResourceColor | LinearGradient | undefined): this;
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    selectedColor(value: ResourceColor | undefined): this;
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor | LinearGradient } selectedColor
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    selectedColor(selectedColor: ResourceColor | LinearGradient | undefined): this;
    /**
     * Called when setting whether to display step size.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    showSteps(value: boolean | undefined): this;
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean } value - Whether to display the bubble.
     * @param { ResourceStr } content - Text content in the bubble. If the content is not specified, the current
     *                                  percentage is displayed by default.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    showTips(value: boolean | undefined, content?: ResourceStr | undefined): this;
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    trackThickness(value: Length | undefined): this;
    /**
     * Called when the selection value changes.
     *
     * @param { function } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: ((value: number, mode: SliderChangeMode) => void) | undefined): this;
    /**
     * Called when the border color of block is set.
     *
     * @param { ResourceColor } value - the border color of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    blockBorderColor(value: ResourceColor | undefined): this;
    /**
     * Called when the border width of block is set.
     *
     * @param { Length } value - the border width of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    blockBorderWidth(value: Length | undefined): this;
    /**
     * Called when the color of step is set.
     *
     * @param { ResourceColor } value - the color of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    stepColor(value: ResourceColor | undefined): this;
    /**
     * Called when the radius of track border is set.
     *
     * @param { Length } value - the radius of track border.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    trackBorderRadius(value: Length | undefined): this;
    /**
     * Called when the radius of selected part is set.
     *
     * @param { Dimension } value - the radius of selected part.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectedBorderRadius(value: Dimension | undefined): this;
    /**
     * Called when the size of block is set.
     *
     * @param { SizeOptions } value - the size of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    blockSize(value: SizeOptions | undefined): this;
    /**
     * Called when the style of block is set.
     *
     * @param { SliderBlockStyle } value - the style of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    blockStyle(value: SliderBlockStyle | undefined): this;
    /**
     * Called when the diameter of step is set.
     *
     * @param { Length } value - the diameter of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    stepSize(value: Length | undefined): this;
    /**
     * Sets the interaction mode of the slider.
     *
     * @param { SliderInteraction } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    sliderInteractionMode(value: SliderInteraction | undefined): this;
    /**
     * Sets the min value when Slider response to drag event.
     *
     * @param { number } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    minResponsiveDistance(value: number | undefined): this;
    /**
     * Set the content modifier of slider.
     *
     * @param { ContentModifier<SliderConfiguration> } modifier - The content modifier of slider.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    contentModifier(modifier: ContentModifier<SliderConfiguration> | undefined): this;
    /**
     * Set the valid slidable range.
     *
     * @param { SlideRange } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    slideRange(value: SlideRange | undefined): this;
    /**
     * Set the sensitivity of rotating crown.
     *
     * @param { Optional<CrownSensitivity> } sensitivity - The sensitivity of rotating crown, default value is { MEDIUM }.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } enabled - Default value is true, set false to disable haptic feedback.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    enableHapticFeedback(enabled: boolean | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<SliderAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Slider(
    options?: SliderOptions, 
    @memo
    content_?: () => void,
): UISliderAttribute