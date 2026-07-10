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
 */
/**
 * Enumerates the display styles of the slider thumb relative to the track. For details, see 
 * [How Are the Slider Thumb and Track of the Slider Component Aligned?](docroot://ui/arkts-select-component-faq.md#how-are-the-slider-thumb-and-track-of-the-slider-component-aligned).
 * 
 * 
 * > **NOTE**
 * >
 * > - By default, the slider has no padding.
 * >
 * > - For horizontal sliders, the default height is 40 vp, the width matches the parent container's width, and the 
 * > track maintains center alignment. When **SliderStyle.OutSet** is used, it applies 9 vp (half of the 
 * > [blockSize]{@link SliderAttribute#blockSize} value) margins on both left and right sides. When 
 * > **SliderStyle.InSet** is used, it enforces 6 vp margins on both left and right sides. Custom padding values will be
 * > applied in addition to these default margins and will not override them.
 * >
 * > - For vertical sliders, the default width is 40 vp, the height matches the parent container's height, and the track
 * > maintains center alignment. When **SliderStyle.OutSet** is used, it applies 10 vp margins on both top and bottom 
 * > sides. When **SliderStyle.InSet** is used, it enforces 6 vp margins on both top and bottom sides. Custom padding 
 * > values will be applied in addition to these default margins and will not override them.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SliderStyle {
    /**
     * The thumb is on the track.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    OutSet,
    /**
     * The thumb is in the track.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    InSet,
    /**
     * There is no thumb.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    NONE
}

/**
 * Enumerates the slider states.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SliderChangeMode {
    /**
     * The user touches or clicks the thumb.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Begin,
    /**
     * The user is dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Moving,
    /**
     * The user stops dragging the slider by lifting their finger or releasing the mouse device.
     * 
     * **NOTE**
     * 
     * The trigger occurs when an invalid value is restored to the default value, that is, when the value is set to less
     * than **min** or greater than **max**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    End,
    /**
     * The user moves the thumb by touching or clicking the track.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    Click
}

/**
 * Interaction mode between the user and the slider.
 * 
 * | Name    | Value|Description                         |
 * | ------ | -- | ----------------------------- |
 * | SLIDE_AND_CLICK | 0 | Users can drag the slider or touch the track to move the slider. The slider moves as soon as the mouse or finger is pressed.|
 * | SLIDE_ONLY | 1 | Users are not allowed to move the slider by touching the slider.|
 * | SLIDE_AND_CLICK_UP | 2 |Users can drag the slider or touch the track to move the slider. The slider moves when the mouse is released or finger is lifted, if the release/lift position coincides with the screen press position.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum SliderInteraction {
    /**
     * Users can drag the slider or touch the track to move the slider. The slider moves as soon as the mouse or
     * finger is pressed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SLIDE_AND_CLICK = 0,
    /**
     * Users are not allowed to move the slider by touching the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SLIDE_ONLY = 1,
    /**
     * Users can drag the slider or touch the track to move the slider. The slider moves when the mouse is released or
     * finger is lifted, if the release/lift position coincides with the screen press position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SLIDE_AND_CLICK_UP = 2
}

/**
 * Defines the callback type used in **SlideRange**.
 * 
 * > **NOTE**
 * >
 * > - Currently, this API takes effect only when **min** ≤ **from** ≤ **to** ≤ **max** (the values of **min** and 
 * > **max** do not depend on the values set, but on the actual values that take effect).
 * >
 * > - You can set either **from** or **to**, or you can set both **from** and **to**.
 * >
 * > - When the API is effective, if the set **from** value is between the adjacent multiples of **step**, then **from**
 * > takes the value of the left interval multiple of **step** or **min** as the corrected value.
 * >
 * > - When the API is effective, if the set **to** value is between the adjacent multiples of **step**, then **to** 
 * > takes the value of the right interval multiple of **step** or **MAX** as the corrected value.
 * >
 * > - After **from** and **to** have taken their corrected values, when **value** is **undefined** or **null**, it 
 * > takes the same value as **from**; when **value** is a number type, and if **value** ≤ **from**, then it takes 
 * > **from**; if **value** > **to**, then it takes **to**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SlideRange {
    /**
     * Start of the slide range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    from?: number;
    /**
     * End of the slide range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    to?: number;
}

/**
 * Provides information about the slider.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface SliderOptions {
    /**
     * Current progress.
     * 
     * Default value: same as the value of **min**.
     * 
     * Since API version 10, this property supports two-way binding through 
     * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
     * 
     * This property supports two-way binding through 
     * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
     * 
     * Value range: [min, max]
     * 
     * Values less than the value of **min** are adjusted to the value of **min**, and values greater than the value of 
     * **max** are capped at the value of **max**.
     * 
     * The $$ operator enables two-way synchronization between the TS variable and the **Slider** component's **value**.
     * For details, see 
     * [Example 7: Setting Two-Way Binding for the Slider](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#example-7-setting-two-way-binding-for-the-slider).
     *
     * @default same as the value of min [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    value?: number;
    /**
     * Minimum value.
     * 
     * Default value: **0**
     *
     * @default 0 [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    min?: number;
    /**
     * Maximum value.
     * 
     * Default value: **100**
     * 
     * **NOTE**
     * 
     * If the value of **min** is greater than or equal to the value of **max**, the **min** value defaults to **0**, 
     * and the **max** value defaults to **100**.
     * 
     * If the value is not within the [min, max] range, the value of **min** or **max** is used, whichever is closer.
     *
     * @default 100 [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    max?: number;
    /**
     * Step of the slider.
     * 
     * Default value: **1**
     * 
     * Value range: [0.01, max - min]
     * 
     * **NOTE**
     * 
     * If this parameter is set to a value less than 0 or greater than the value of **max**, the default value is used.
     *
     * @default 1 - Value range: [0.01, max - min] [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    step?: number;
    /**
     * Style of the slider thumb and track.
     * 
     * Default value: **SliderStyle.OutSet**
     *
     * @default SliderStyle.OutSet [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    style?: SliderStyle;
    /**
     * Whether the slider moves horizontally or vertically.
     * 
     * Default value: **Axis.Horizontal**
     *
     * @default Axis.Horizontal [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    direction?: Axis;
    /**
     * Whether the slider values are reversed.
     * 
     * **true**: A horizontal slider slides from right to left, and a vertical slider slides from bottom to top. 
     * **false**: A horizontal slider slides from left to right, and a vertical slider slides from top to bottom.
     * 
     * Default value: **false**
     *
     * @default false [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    reverse?: boolean;
}

/**
 * Enumerates the types of the slider in the block direction.
 * 
 * | Name   | Value| Description                |
 * | ------- | -- | ---------------------- |
 * | DEFAULT | 0 | Round slider.  |
 * | IMAGE   | 1 | Slider with an image background.  |
 * | SHAPE   | 2 | Slider in a custom shape.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SliderBlockType {
    /**
     * Round slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    DEFAULT = 0,
    /**
     * Slider with an image background.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    IMAGE = 1,
    /**
     * Slider in a custom shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    SHAPE = 2
}

/**
 * Describes the style of the slider in the block direction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SliderBlockStyle {
    /**
     * Type of the slider in the block direction.
     * 
     * Default value: **SliderBlockType.DEFAULT**, indicating the round slider.
     *
     * @default SliderBlockType.DEFAULT - indicating the round slider. [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    type: SliderBlockType;
    /**
     * Image resource of the slider.
     * 
     * The area size for displaying the image is subject to the **blockSize** attribute. Be mindful of the image size 
     * when selecting an image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    image?: ResourceStr;
    /**
     * Custom shape of the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    shape?: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute;
}

/**
 * Defines the callback type used in **SliderConfiguration**.
 *
 * @param { number } value - Current progress.<br>Value range: [[min]{@link SliderOptions}, [max]{@link SliderOptions}]
 * @param { SliderChangeMode } mode - State triggered by the event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type SliderTriggerChangeCallback = (value: number, mode: SliderChangeMode) => void;

/**
 * You need a custom class to implement the **ContentModifier** API. Inherits from 
 * [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SliderConfiguration extends CommonConfiguration<SliderConfiguration> {
    /**
     * Current progress.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    value: number;
    /**
     * Minimum value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    min: number;
    /**
     * Maximum value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    max: number;
    /**
     * Step of the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    step: number;
    /**
     * Triggers slider changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    triggerChange: SliderTriggerChangeCallback;
}

/**
 * The **Slider** component is used to quickly adjust settings, such as the volume and brightness.
 * 
 * > **NOTE**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface SliderInterface {
    /**
     *
     * @param { SliderOptions } options - Parameters of the slider.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (options?: SliderOptions): SliderAttribute;
}

/**
 * Provides accessibility configuration of the slider step markers.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface SliderStepItemAccessibility {
  /**
   * Text for assistive technologies (for example, screen readers).
   * 
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  text?: ResourceStr;
}

/**
 * Provides accessibility text mapping for the slider step markers.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface SliderShowStepOptions {
  /**
   * Step value-to-text mappings for assistive technologies (for example, screen readers).
   * 
   * Value range for **Key**: [0, INT32_MAX].
   * 
   * If **Key** is set to a negative number or a decimal, the setting does not take effect.
   * 
   * Default value: **{}**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  stepsAccessibility?: Map<number, SliderStepItemAccessibility>;
}

/**
 * Provides accessibility configuration of the slider prefix and suffix.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
interface SliderCustomContentOptions {
  /**
   * Text for assistive technologies (for example, screen readers).
   * 
   * Default value: **""**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Detailed functional description for assistive technologies.
   * 
   * Default value: **"Double-tap to activate"**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  accessibilityDescription?: ResourceStr;
   
  /**
   * Whether the component can be recognized by accessibility services.
   * 
   * The options are as follows:
   * 
   * **"auto"**: It is treated as "yes" by the system.
   * 
   * **"yes"**: The component can be recognized by accessibility services.
   * 
   * **"no"**: The component cannot be recognized by accessibility services.
   * 
   * **"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility 
   * services.
   * 
   * Default value: **"auto"**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  accessibilityLevel?: string;
  
  /**
   * Whether to enable accessibility grouping.
   * 
   * The value **true** means to enable accessibility grouping, and **false** means the opposite. When accessibility 
   * grouping is enabled, the component and all its children are treated as a single selectable unit, and the 
   * accessibility service will no longer focus on the individual child components.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  accessibilityGroup?: boolean;
}

/**
 * Provides accessibility configuration of the slider prefix.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
interface SliderPrefixOptions extends SliderCustomContentOptions {
}

/**
 * Provides accessibility configuration of the slider suffix.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
interface SliderSuffixOptions extends SliderCustomContentOptions {
}

/**
 * Describes the breakpoint of the gradient color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface ColorMetricsStop {
  /**
   * Color value of the linear gradient color breakpoint.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  color: ColorMetrics;

  /**
   * Value of the linear gradient color stop. The value is a proportion ranging from 0 to 1. If a value less than 0 is 
   * passed, the value is set to **0**. If a value greater than 1 is passed, the value is set to **1**.
   * 
   * **NOTE**
   * 
   * If the value is a string that represents a number, it will be converted to a number. For example, **'10vp'** is 
   * converted to **10**, and **'10%'** is converted to **0.1**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offset: Length;
}

/**
 * Sets the linear gradient background color of the track.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare class ColorMetricsLinearGradient {
    /**
     * Constructor of **ColorMetricsLinearGradient**.
     *
     * @param { ColorMetricsStop[] } colorStops - Array of linear gradient color stops. Each element describes a color
     *     and its stop in the gradient.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    constructor(colorStops: ColorMetricsStop[]);
}

/**
 * All the [universal attributes]{@link common} except **responseRegion** are supported.
 * 
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class SliderAttribute extends CommonMethod<SliderAttribute> {
  /**
   * Sets the color of the thumb.
   * 
   * When **SliderBlockType.DEFAULT** is used, **blockColor** sets the color of the round thumb.
   * 
   * When **SliderBlockType.IMAGE** is used, **blockColor** does not work as the thumb has no fill color.
   * 
   * When **SliderBlockType.SHAPE** is used, **blockColor** sets the color of the thumb in a custom shape.
   *
   * @param { ResourceColor } value - Color of the thumb.<br>Default value:
   *     **$r('sys.color.ohos_id_color_foreground_contrary')**
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  blockColor(value: ResourceColor): SliderAttribute;
  /**
   * Sets the color of the slider. Gradient colors are supported.
   * 
   * When **SliderBlockType.DEFAULT** is used, **blockColor** sets the color of the round thumb.
   * 
   * When **SliderBlockType.IMAGE** is used, **blockColor** does not work as the thumb has no fill color.
   * 
   * When **SliderBlockType.SHAPE** is used, **blockColor** sets the color of the thumb in a custom shape.
   *
   * @param { ResourceColor | LinearGradient } value - Color of the thumb.<br>Default value:
   *     **$r('sys.color.ohos_id_color_foreground_contrary')**
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 21 dynamic
   */
  blockColor(value: ResourceColor | LinearGradient): SliderAttribute;

  /**
   * Sets the background color of the track.
   * 
   * Since API version 12, **LinearGradient** can be used to create a gradient effect for the track.
   *
   * @param { ResourceColor } value - Background color of the track.<br>Default value:
   *     **$r('sys.color.ohos_id_color_component_normal')**<br>**NOTE**<br>1. With gradient color settings, if the color
   *     stop values are invalid or if the color stops are empty, the gradient effect will not be applied.<br>2. The
   *     LinearGradient type cannot be used in atomic services. [since 7 - 11]
   * @param { ResourceColor | LinearGradient } value - Background color of the track.<br>Default value:
   *     **$r('sys.color.ohos_id_color_component_normal')**<br>**NOTE**<br>1. With gradient color settings, if the color
   *     stop values are invalid or if the color stops are empty, the gradient effect will not be applied.<br>2. The
   *     LinearGradient type cannot be used in atomic services. [since 12]
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  trackColor(value: ResourceColor | LinearGradient): SliderAttribute;

  /**
   * Sets the color of the portion of the track between the minimum value and the thumb, representing the selected 
   * portion.
   *
   * @param { ResourceColor } value - Color of the portion of the track between the minimum value and the thumb.<br>
   *     Default value: **$r('sys.color.ohos_id_color_emphasize')**
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedColor(value: ResourceColor): SliderAttribute;
  /**
   * Sets the color of the portion of the track between the minimum value and the thumb, representing the selected 
   * portion. Compared to [selectedColor]{@link SliderAttribute#selectedColor(value: ResourceColor)}, this API supports 
   * the **LinearGradient** type.
   *
   * @param { ResourceColor | LinearGradient } selectedColor - Color of the portion of the track between the minimum
   *     value and the thumb.<br>Default value: **$r('sys.color.ohos_id_color_emphasize')**<br>**NOTE**<br>With gradient
   *     color settings, if the color stop values are invalid or if the color stops are empty, the gradient effect will
   *     not be applied.
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  selectedColor(selectedColor: ResourceColor | LinearGradient): SliderAttribute;

  /**
   * Sets the minimum value.
   * 
   * > **NOTE**
   * >
   * > This attribute is supported since API version 7 and deprecated since API version 9. You are advised to use 
   * > **min** instead. **min** is an attribute of [SliderOptions]{@link SliderOptions}.
   *
   * @param { string } value - Minimum value.
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead min
   */
  minLabel(value: string): SliderAttribute;

  /**
   * Sets the maximum value.
   * 
   * > **NOTE**
   * >
   * > This attribute is supported since API version 7 and deprecated since API version 9. You are advised to use 
   * > **max** instead. **max** is an attribute of [SliderOptions]{@link SliderOptions}.
   *
   * @param { string } value - Maximum value.
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead max
   */
  maxLabel(value: string): SliderAttribute;

  /**
   * Sets whether to display the step markers along the slider track.
   *
   * @param { boolean } value - Whether to display the step markers along the slider track.<br>**true**: Display the
   *     step markers. **false**: Do not display the step markers.<br>Default value: **false**
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  showSteps(value: boolean): SliderAttribute;

  /**
   * Sets whether to display the step markers along the slider track.
   * 
   * You can set custom accessibility text for each step value. If no accessibility text is provided, the numeric values
   * are used.
   * 
   * The accessibility text settings take effect only when the step markers are displayed.
   *
   * @param { boolean } value - Whether to display the step markers along the slider track.<br>**true**: Display the
   *     step markers. **false**: Do not display the step markers.<br>Default value: **false**
   * @param { SliderShowStepOptions } [options] - Accessibility configuration of step markers.<br>Default value:
   *     **null**
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  showSteps(value: boolean, options?: SliderShowStepOptions): SliderAttribute;

  /**
   * Sets whether to display a tooltip when the user drags the slider.
   * 
   * When **direction** is set to **Axis.Horizontal**, the tooltip is displayed right above the slider; if there is 
   * insufficient space above, it will be displayed below. When **direction** is set to **Axis.Vertical**, the tooltip 
   * is displayed on the left of the slider; if there is insufficient space on the left, it will be displayed on the 
   * right. If the margins are not set or are set to small values, the tooltip may be clipped.
   * 
   * The drawing area of the tooltip is the overlay of the slider.
   *
   * @param { boolean } value - Whether to display a tooltip when the user drags the slider.<br>**true**: Display a
   *     tooltip. **false**: Do not display a tooltip.<br>Default value: **false**
   * @param { ResourceStr } content - Content of the tooltip. By default, the tooltip shows the current percentage
   *     value. [since 10]
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  showTips(value: boolean, content?: ResourceStr): SliderAttribute;

  /**
   * Sets the thickness of the track. If the value is less than or equal to 0, the default value is used.
   * 
   * To ensure [SliderStyle]{@link SliderStyle} works as expected for the thumb and track, 
   * [blockSize]{@link SliderAttribute#blockSize} should increase or decrease proportionally with **trackThickness**.
   * 
   * Specially, when **style** is **[SliderStyle]{@link SliderStyle}.OutSet**, trackThickness: 
   * [blockSize]{@link SliderAttribute#blockSize} = 1:4; when **style** is **[SliderStyle]{@link SliderStyle}.InSet**, 
   * trackThickness: [blockSize]{@link SliderAttribute#blockSize} = 5:3.
   * 
   * If the value of **trackThickness** or [blockSize]{@link SliderAttribute#blockSize} exceeds the width or height of 
   * the **Slider** component, the default value is used.
   * 
   * When [SliderStyle]{@link SliderStyle} is set to **OutSet**, if the specified value of 
   * [blockSize]{@link SliderAttribute#blockSize} exceeds the width or height of the **Slider** component, the default 
   * value is used, regardless of whether the value of **trackThickness** is valid or not.
   *
   * @param { Length } value - Thickness of the track.<br>Default value: 4.0vp when **style** is set to
   *     **[SliderStyle]{@link SliderStyle}.OutSet**; 20.0vp when **style** is set to
   *     **[SliderStyle]{@link SliderStyle}.InSet**
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  trackThickness(value: Length): SliderAttribute;

  /**
   * Triggered when the slider is dragged or clicked.
   * 
   * The **Begin** and **End** states are triggered when the slider is clicked with a gesture. The **Moving** and 
   * **Click** states are triggered when the value of **value** changes.
   * 
   * If the coherent action is a drag action, the **Click** state will not be triggered.
   *
   * @param { function } callback
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(callback: (value: number, mode: SliderChangeMode) => void): SliderAttribute;

  /**
   * Sets the border color of the slider in the block direction.
   * 
   * When **SliderBlockType.DEFAULT** is used, **blockBorderColor** sets the border color of the round slider.
   * 
   * When **SliderBlockType.IMAGE** is used, **blockBorderColor** does not work as the slider has no border.
   * 
   * When **SliderBlockType.SHAPE** is used, **blockBorderColor** sets the border color of the slider in a custom shape.
   *
   * @param { ResourceColor } value - Border color of the slider in the block direction.<br>Default value:
   *     **'#00000000'**
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  blockBorderColor(value: ResourceColor): SliderAttribute;

  /**
   * Sets the border width of the slider in the block direction.
   * 
   * When **SliderBlockType.DEFAULT** is used, **blockBorderWidth** sets the border width of the round slider.
   * 
   * When **SliderBlockType.IMAGE** is used, **blockBorderWidth** does not work as the slider has no border.
   * 
   * When **SliderBlockType.SHAPE** is used, **blockBorderWidth** sets the border width of the slider in a custom shape.
   *
   * @param { Length } value - Border width of the slider in the block direction.<br>**NOTE**<br>For the string type,
   *     percentage values are not supported.
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  blockBorderWidth(value: Length): SliderAttribute;

  /**
   * Sets the step color.
   *
   * @param { ResourceColor } value - Step color.<br>Default value:<br>**$r('sys.color.ohos_id_color_foreground')**
   *     mixed with **$r('sys.color.ohos_id_alpha_normal_bg')**
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  stepColor(value: ResourceColor): SliderAttribute;

  /**
   * Sets the radius of the rounded corner of the track.
   *
   * @param { Length } value - Radius of the rounded corner of the track.<br>Default value:<br>**'2vp'** when **style**
   *     is **SliderStyle.OutSet**<br>**'10vp'** when **style** is **SliderStyle.InSet**<br>**NOTE**<br>If the value is
   *     less than 0, the default value is used.
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  trackBorderRadius(value: Length): SliderAttribute;

  /**
     * Set the corner radius of the selected (highlighted) part of the slider.
     *
     * @param { Dimension } value - Corner radius of the selected part of the slider.<br>Default value:<br>- For
     *     **SliderStyle.InSet** or **SliderStyle.OutSet**: same as the corner radius of the background<br>-
     *     **SliderStyle.NONE**: **0**<br>**NOTE**<br>Percentage values are not supported. If the value is less than 0,
     *     the default value is used.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    selectedBorderRadius(value: Dimension): SliderAttribute;
    /**
     * Sets the size of the slider in the block direction.
     * 
     * When the slider type is set to **SliderBlockType.DEFAULT**, the smaller of the width and height values is used as
     * the radius of the circle.
     * 
     * When the slider type is set to **SliderBlockType.IMAGE**, this API sets the size of the image, which is scaled 
     * using the **ObjectFit.Cover** strategy.
     * 
     * When the slider type is set to **SliderBlockType.SHAPE**, this API sets the size of the custom shape, which is 
     * also scaled using the **ObjectFit.Cover** strategy.
     *
     * @param { SizeOptions } value - Size of the slider in the block direction.<br>Default value:<br>- For
     *     [SliderStyle]{@link SliderStyle}.OutSet: **{width: 18, height: 18}**<br>- For
     *     [SliderStyle]{@link SliderStyle}.InSet: **{width: 12, height: 12}**<br>- For
     *     [SliderStyle]{@link SliderStyle}.NONE: This parameter is not effective.<br>If the set **blockSize** has
     *     different width and height values, the smaller value is taken. If one or both of the width and height values
     *     are less than or equal to 0, the default value is used instead.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    blockSize(value: SizeOptions): SliderAttribute;
    /**
     * Sets the style of the slider in the block direction.
     *
     * @param { SliderBlockStyle } value - Style of the slider in the block direction.<br>Default value:
     *     **SliderBlockType.DEFAULT**, indicating the round slider.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    blockStyle(value: SliderBlockStyle): SliderAttribute;
    /**
     * Sets the step size (diameter). If the value is 0, the step size is not displayed. If the value is less than 0, 
     * the default value is used.
     *
     * @param { Length } value - Step size (diameter).<br>Default value: **'4vp'**<br>Value range:
     *     [0, [trackThickness]{@link SliderAttribute#trackThickness})
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    stepSize(value: Length): SliderAttribute;
    /**
     * Sets the interaction mode between the user and the slider.
     *
     * @param { SliderInteraction } value - Interaction mode between the user and the slider.<br> Default value:
     *     **SliderInteraction.SLIDE_AND_CLICK**
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    sliderInteractionMode(value: SliderInteraction): SliderAttribute;
    /**
     * Sets the minimum distance required for the slider to respond.
     *
     * @param { number } value - Minimum distance required for the slider to respond. The slider will only move when the
     *     sliding distance exceeds this threshold.<br>Default value: **0**<br>**NOTE**<br>The unit is consistent with
     *     that of the **min** and **max** properties in [SliderOptions]{@link SliderOptions}.<br>If the value is less
     *     than 0, greater than the result of (**max** – **min**), or invalid, the default value is used.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    minResponsiveDistance(value: number): SliderAttribute;
    /**
     * Creates a content modifier.
     *
     * @param { ContentModifier<SliderConfiguration> } modifier - Content modifier to apply to the slider.<br>
     *     **ContentModifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    contentModifier(modifier: ContentModifier<SliderConfiguration>): SliderAttribute;
    /**
     * Sets the slide range.
     *
     * @param { SlideRange } value - Slide range.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    slideRange(value: SlideRange): SliderAttribute;
    /**
     * Sets the sensitivity to the digital crown rotation.
     * 
     * > **NOTE**
     * >
     * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
     *
     * @param { Optional<CrownSensitivity> } sensitivity - Sensitivity to the digital crown rotation.<br>Default value:
     *     **CrownSensitivity.MEDIUM**
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): SliderAttribute;
    /**
     * Specifies whether to enable haptic feedback.
     * 
     * To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under 
     * **requestPermissions** in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the 
     * project.
     *
     * @param { boolean } enabled - Whether to enable haptic feedback.<br>**true**: Enable haptic feedback. **false**:
     *     Disable haptic feedback.<br>Default value: **true**
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    enableHapticFeedback(enabled: boolean): SliderAttribute;
    /**
     * Sets the prefix of the slider.
     *
     * @param { ComponentContent } content - Visual content of the slider prefix, which will be displayed at the start
     *     of the slider.
     * @param { SliderPrefixOptions } [options] - Accessibility configuration of the slider prefix.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    prefix(content: ComponentContent, options?: SliderPrefixOptions): SliderAttribute;
    /**
     * Sets the suffix of the slider.
     *
     * @param { ComponentContent } content - Visual content of the slider suffix, which will be displayed at the end of
     *     the slider.
     * @param { SliderSuffixOptions } [options] - Accessibility configuration of the slider suffix.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    suffix(content: ComponentContent, options?: SliderSuffixOptions): SliderAttribute;

    /**
     * Sets the linear gradient background color of the track.
     *
     * @param { ColorMetricsLinearGradient } color - Linear gradient background color of the track.<br>If **color** is
     *     **undefined**, the gradient color setting is invalid. The default background color of the track is
     *     **$r('sys.color.ohos_id_color_component_normal')**.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    trackColorMetrics(color: ColorMetricsLinearGradient): SliderAttribute;
}

/**
 * The **Slider** component is used to quickly adjust settings, such as the volume and brightness.
 * 
 * > **NOTE**
 * 
 * ###### Child Components
 * 
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Slider: SliderInterface;

/**
 * Defines Slider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const SliderInstance: SliderAttribute;