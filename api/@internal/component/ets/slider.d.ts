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
 * Enumerates the slider states, including pressed, dragged, released, and moved when the slider is tapped.
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
   * The user releases the slider by a gesture or mouse.
   *
   * **Note:**
   *
   * This state is triggered when the user releases the slider by a gesture or mouse, including the end of a normal
   * drag. It is also triggered when an invalid value is restored to the default value, that is, when the value is set
   * to a value less than **min** or greater than **max**.
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
   * The user moves the thumb by clicking the track.
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
 * Defines the valid sliding range.
 *
 * > **NOTE**
 * >
 * > - Currently, this API takes effect only when **min** ≤ **from** ≤ **to** ≤ **max** (the values of **min** and
 * > **max** depend on the actual values that take effect).
 * >
 * > - You can set either **from** or **to**, or you can set both **from** and **to**.
 * >
 * > - When the API is effective, if the set **from** value is between the adjacent multiples of **step**, **from**
 * > takes the value of the left interval multiple of **step** or the value of **min** as the corrected value.
 * >
 * > - When the API is effective, if the set **to** value is between the adjacent multiples of **step**, **to** takes
 * > the value of the right interval multiple of **step** or the value of **MAX** as the corrected value.
 * >
 * > - After **from** and **to** have taken their corrected values, when **value** is **undefined** or **null**, it
 * > takes the same value as **from**; when **value** is a number type, if **value** ≤ **from**, it takes **from**; if
 * > **value** > **to**, then it takes **to**.
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
   * Since API version 10, this attribute supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * This attribute supports two-way binding through
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * Value range: [min, max]
   *
   * If the value is less than the value of **min**, the value of **min** is used; if the value is greater than the
   * value of **max**, the value of **max** is used.
   *
   * The $$ operator provides a reference to a TS variable for a system component, keeping the value of the TS
   * variable synchronized with **value** of the **Slider** component. For details, see
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
   * **Note:**
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
   * **Note:**
   *
   * If this parameter is set to a value less than 0 or greater than **max** - **min**, the default value is used.
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
 * | DEFAULT | 0 | Default slider (round).  |
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
   * Type of the slider.
   *
   * Default Value: **SliderBlockType.DEFAULT**, indicating a circular slider.
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
   * The size of the image display area is controlled by the **blockSize** attribute. Do not use an oversized image.
   *
   * **Note:** This attribute takes effect only when **type** is set to **SliderBlockType.IMAGE**, and is mutually
   * exclusive with the **shape** attribute. They cannot be used together.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  image?: ResourceStr;
  /**
   * Custom shape of the block.
   *
   * **Note:** This attribute takes effect only when **type** is set to **SliderBlockType.SHAPE**, and is mutually
   * exclusive with the **image** attribute. They cannot be used together.
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
 * @param { number } value - Current progress.<br/>Value range: [[min]{@link SliderOptions}-[max]{@link SliderOptions}]
 * @param { SliderChangeMode } mode - State triggered by the event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type SliderTriggerChangeCallback = (value: number, mode: SliderChangeMode) => void;

/**
 * You need a custom class to implement the **ContentModifier** API. It inherits from
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
   * Step of the slider, which indicates the value increment of each slider movement.
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
   * @type { SliderTriggerChangeCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  triggerChange: SliderTriggerChangeCallback;
}

/**
 * The **Slider** component is used to quickly adjust settings, such as the volume and brightness. It supports style
 * customization, direction configuration, interaction modes, and accessibility, which helps resolve UI consistency
 * issues and improve development efficiency, thereby enhancing user experience and reducing development costs.
 *
 * > **NOTE**
 * >
 * > - Since API version 26.0.0, when material parameters are passed to the **Slider** component, the preset visual
 * > parameters inside the component are used. The passed material parameters serve only as a switch flag for enabling
 * > the system material and do not affect the actual visual effect. They mainly affect the visual attributes of the
 * > **Slider** component, such as the slider size, slider style, and shadow. When **undefined** is passed, the system
 * > material does not take effect, and the original slider style is displayed.
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
   * Creates the Slider component.
   *
   * @param { SliderOptions } options - Parameters of the slider. If not passed in, the default value of each
   *     attribute in **SliderOptions** is used.
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
   * Accessibility text, read by tools such as screen readers to enhance accessibility.
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
   * Accessibility text mapping for the slider step markers, read by tools such as screen readers to enhance
   * accessibility.
   *
   * Key value range: [0, INT32_MAX]. When the key is set to a negative number or a decimal, the setting does not take
   * effect.
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
   * Accessibility text for screen readers and other tools to read, enhancing accessibility.
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
   * Accessibility details, which describe the functionality or purpose of the slider prefix or suffix, for screen
   * readers and other tools to use.
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
   * Whether the component can be recognized by the accessibility service.
   *
   * The options are as follows:
   *
   * **"auto"**: It is treated as "yes" by the system.
   *
   * **"yes"**: The component can be recognized by the accessibility service.
   *
   * **"no"**: The component cannot be recognized by the accessibility service.
   *
   * **"no-hide-descendants"**: The component and all its child components cannot be recognized by the accessibility
   * service.
   *
   * Default value: **"auto"**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Whether the element belongs to an accessibility group, helping screen readers and other tools group related
   * elements.
   *
   * **true**: The component and all its child components form a single selectable unit, and the accessibility service
   * no longer focus on the content of its child components. **false**: accessibility grouping is not enabled.
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
interface SliderPrefixOptions extends SliderCustomContentOptions {}

/**
 * Provides accessibility configuration of the slider suffix.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
interface SliderSuffixOptions extends SliderCustomContentOptions {}

/**
 * Describes the linear gradient color stop type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface ColorMetricsStop {
  /**
   * Color value of the linear gradient color stop.
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
   * **Note:**
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
   * @param { ColorMetricsStop[] } colorStops - Array of color stops for the linear gradient. Each element describes a
   *     color and its stop value in the gradient.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  constructor(colorStops: ColorMetricsStop[]);
}

/**
 * All the [universal attributes]{@link ./common} except **responseRegion** are supported.
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
   * @param { ResourceColor } value - Color of the thumb.
   *     <br>Default value: **$r('sys.color.ohos_id_color_foreground_contrary')**
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
   * Sets the color of the slider. Gradient colors are supported. Compared with **blockColor**, it supports the
   * **LinearGradient** type.
   *
   * When **SliderBlockType.DEFAULT** is used, **blockColor** sets the color of the round thumb.
   *
   * When **SliderBlockType.IMAGE** is used, **blockColor** does not work as the thumb has no fill color.
   *
   * When **SliderBlockType.SHAPE** is used, **blockColor** sets the color of the thumb in a custom shape.
   *
   * @param { ResourceColor | LinearGradient } value - Color of the slider. <br/>Default value:
   *     `$r('sys.color.ohos_id_color_foreground_contrary')`<br/>**Note:** <br/>When the slider shape is set to
   *     **SliderBlockType.IMAGE**, the slider has no fill, and setting **blockColor** does not take effect.
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
   * Since API version 12, the **LinearGradient** type can be used to set the gradient color of the track.
   *
   * @param { ResourceColor } value - Background color of the track.<br/>Default value:
   *     `$r('sys.color.ohos_id_color_component_normal')`<br/>**Note:** <br/>1. When a gradient color is set, if the
   *     color value of a color stop is invalid or the gradient color stop is empty, the gradient color does not take
   *     effect.<br/>2. The **LinearGradient** type in this API is not supported in atomic services. [since 7 - 11]
   * @param { ResourceColor | LinearGradient } value - Background color of the track.<br/>Default value:
   *     `$r('sys.color.ohos_id_color_component_normal')`<br/>**Note:** <br/>1. When a gradient color is set, if the
   *     color value of a color stop is invalid or the gradient color stop is empty, the gradient color does not take
   *     effect.<br/>2. The **LinearGradient** type in this API is not supported in atomic services. [since 12]
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
   * @param { ResourceColor } value - Color of the portion of the track between the minimum value and the thumb.
   *     <br>Default value: **$r('sys.color.ohos_id_color_emphasize')**
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
   *     value and the thumb.
   *     <br>Default value: **$r('sys.color.ohos_id_color_emphasize')**
   *     <br>**NOTE**
   *     <br>With gradient color settings, if the color stop values are invalid or if the color stops are empty, the
   *     gradient effect will not be applied.
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
   * Sets the text content of the minimum value label.
   *
   * @param { string } value - Text of the minimum value label.
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead min
   */
  minLabel(value: string): SliderAttribute;

  /**
   * Sets the text content of the maximum value label.
   *
   * @param { string } value - Text of the maximum value label.
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead max
   */
  maxLabel(value: string): SliderAttribute;

  /**
   * Sets whether to display the step markers.
   *
   * @param { boolean } value - Whether to display the step markers.<br/>**true**: display the step markers; **false**:
   *     do not display the step markers.<br/>Default Value: **false**
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
   * @param { boolean } value - Whether to display the step markers.<br/>**true**: display the step markers; **false**:
   *     do not display the step markers.<br />Default value: **false**
   * @param { SliderShowStepOptions } [options] - Configuration options of the accessibility text of the step markers.
   *     <br>Default value: **null**
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
   * When **direction** is set to **Axis.Horizontal**, the tooltip is displayed above the block. If the space above is
   * insufficient to display the complete tooltip, it is displayed below. When **direction** is set to
   * **Axis.Vertical**, the tooltip is displayed to the left of the slider. If the space on the left is insufficient to
   * display the complete tooltip, it is displayed on the right. When no surrounding margin is set, or the margin is
   * smaller than the space required by the tooltip, the tooltip is truncated.
   *
   * The drawing area of the tooltip is the overlay of the slider.
   *
   * @param { boolean } value - Whether to display a tooltip when the user drags the slider.
   *     <br>**true**: Display a tooltip. **false**: Do not display a tooltip.
   *     <br>Default value: **false**
   * @param { ResourceStr } content - Text content of the tooltip. When passed in, custom text is displayed (used when a
   *     specific format or additional information needs to be shown); when not passed in, the current percentage value
   *     is displayed by default.<br/> [since 10]
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
   * When **style** is set to [SliderStyle]{@link SliderStyle}.OutSet, trackThickness:
   * [blockSize]{@link SliderAttribute#blockSize}=1:4. When **style** is set to [SliderStyle]{@link SliderStyle}.InSet,
   * trackThickness:[blockSize]{@link SliderAttribute#blockSize}=5:3.
   *
   * If the value of **trackThickness** or [blockSize]{@link SliderAttribute#blockSize} exceeds the width or height of
   * the **Slider** component, the default value is used.
   *
   * When [SliderStyle]{@link SliderStyle} is set to **OutSet**, if the specified value of
   * [blockSize]{@link SliderAttribute#blockSize} exceeds the width or height of the **Slider** component, the default
   * value is used, regardless of whether the value of **trackThickness** is valid or not.
   *
   * @param { Length } value - Thickness of the track.<br/>Default value: **4.0vp** when **style** is set to
   *     [SliderStyle]{@link SliderStyle}.OutSet, and **20.0vp** when style is set to [SliderStyle]{@link SliderStyle}.
   *     InSet.
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
   * @param { ResourceColor } value - Border color of the slider in the block direction.
   *     <br>Default value: **'#00000000'**
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
   * @param { Length } value - Border width of the slider.<br/>**Note:** <br/>For the string type, percentage values are
   *     not supported.
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
   * @param { ResourceColor } value - Step color.<br/>Default value:<br/>The `$r('sys.color.ohos_id_color_foreground')`
   *     color mixed with the transparency of `$r('sys.color.ohos_id_alpha_normal_bg')`.
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
   * @param { Length } value - Radius of the rounded corner of the track.<br/>Default value:<br/>The default value is
   *     **2vp** when **style** is set to **SliderStyle.OutSet**.<br/>The default value is **10vp** when **style** is
   *     set to **SliderStyle.InSet**.<br/>**Note:** <br/>If the value is less than 0, the default value is used.
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
   * @param { Dimension } value - Corner radius of the selected part of the slider.<br/>Default value: When **style**
   *     is set to **SliderStyle.InSet** or **SliderStyle.OutSet**, the default value follows the corner radius of the
   *     track; when **style** is set to **SliderStyle.NONE**, the default value is **0**.<br/>**Note:** <br/>
   *     Percentage values are not supported. If the value is less than 0, the default value is used.
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
   * @param { SizeOptions } value - Slider size.<br/>Default value: When the value of the **style** parameter is set
   *     to [SliderStyle]{@link SliderStyle}.OutSet, the default value is {width: 18, height: 18}; when the value of
   *     the **style** parameter is set to [SliderStyle]{@link SliderStyle}.InSet, the default value is {width: 12,
   *     height: 12}; when the value of the **style** parameter is set to [SliderStyle]{@link SliderStyle}.NONE, this
   *     parameter does not take effect.<br/>If the set **blockSize** has different width and height values, the
   *     smaller value is taken. If one or both of the width and height values are less than or equal to 0, the
   *     default value is used instead.
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
   * @param { SliderBlockStyle } value - Slider style.<br/>The default value is **SliderBlockType.DEFAULT**,
   *     indicating a circular slider.
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
   * @param { Length } value - Step size (diameter). <br/>Default value: **'4vp'**<br/>Value range:
   *     [0, [trackThickness]{@link SliderAttribute#trackThickness}), in vp
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
   * @param { SliderInteraction } value - Interaction mode between the user and the slider.<br/>Default value:
   *     **SliderInteraction.SLIDE_AND_CLICK**.
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  sliderInteractionMode(value: SliderInteraction): SliderAttribute;
  /**
   * Sets the minimum response distance for the slider to start sliding.
   *
   * @param { number } value - Minimum response distance for the slider to start sliding.<br/>Default value: **0**<br/
   *     >**Note:** <br/>The unit is the same as that of the **min** and **max** attributes in
   *     [SliderOptions]{@link SliderOptions}.<br/>If the value is less than 0, greater than **max** – **min**,
   *     **NaN**, or of a non-numeric type, the default value is used.
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
   * @param { ContentModifier<SliderConfiguration> } modifier - Content modifier to apply to the **Slider** component.
   *     <br/>**ContentModifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<SliderConfiguration>): SliderAttribute;
  /**
   * Sets the valid sliding range. After this attribute is set, the sliding range of the slider is limited to
   * [from, to]. Taps and gestures outside this range do not trigger sliding. If the initial value of **value**
   * exceeds the range, it is automatically adjusted to the boundary of the range.
   *
   * @param { SlideRange } value - Valid sliding range.
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
   * @param { Optional<CrownSensitivity> } sensitivity - Sensitivity to the digital crown rotation.<br />Default
   *     value: **CrownSensitivity.MEDIUM**
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
   * @param { boolean } enabled - Whether to enable haptic feedback.<br/>**true**: enable haptic feedback; **false**:
   *     disable haptic feedback.<br/>Default value: **true**
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
   * @param { SliderPrefixOptions } [options] - Configuration options of the slider prefix, used to set accessibility-
   *     related attributes. <br/>Default value: **null**
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
   * @param { ComponentContent } content - Visual content of the slider suffix, which will be displayed at the end
   *     position of the slider.
   * @param { SliderSuffixOptions } [options] - Configuration options of the slider suffix, used to set accessibility-
   *     related attributes. <br/>Default value: **null**
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  suffix(content: ComponentContent, options?: SliderSuffixOptions): SliderAttribute;

  /**
   * Sets the linear gradient background color of the track. Compared with **trackColor**, it uses the
   * **ColorMetricsLinearGradient** type to support gradients in a specified color gamut.
   *
   * @param { ColorMetricsLinearGradient } color - Linear gradient background color of the track.<br/>When a gradient
   *     color is set, if the value of **color** is **undefined**, the gradient color setting does not take effect,
   *     and the default background color of the track is `$r('sys.color.ohos_id_color_component_normal')`.
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
 * The **Slider** component is used to quickly adjust settings, such as the volume and brightness. It supports style
 * customization, direction configuration, interaction modes, and accessibility, which helps resolve UI consistency
 * issues and improve development efficiency, thereby enhancing user experience and reducing development costs.
 *
 * > **NOTE**
 * >
 * > - Since API version 26.0.0, when material parameters are passed to the **Slider** component, the preset visual
 * > parameters inside the component are used. The passed material parameters serve only as a switch flag for enabling
 * > the system material and do not affect the actual visual effect. They mainly affect the visual attributes of the
 * > **Slider** component, such as the slider size, slider style, and shadow. When **undefined** is passed, the system
 * > material does not take effect, and the original slider style is displayed.
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