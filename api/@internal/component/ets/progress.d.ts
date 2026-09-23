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
 */

/**
 * Defines progress bar options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ProgressOptions<Type extends keyof ProgressStyleMap> {
  /**
   * Specified progress value.
   *
   * Default value: **0**
   *
   * Value range: [0, total]. When the value is set less than 0, it is set to 0. When the value is set greater than
   * total, it is set to total. When an invalid value is set, it is handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  value: number;

  /**
   * Specifies the total length of the progress. When the value is set less than 0, it is set to 100.
   *
   * Default value: **100**
   *
   * Value range: (0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  total?: number;

  /**
   * Specifies the progress bar style.<br
   *
   * Default value: **ProgressStyle.Linear**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead type
   */
  style?: ProgressStyle;

  /**
   * Specifies the progress bar type. Type inherits from [ProgressStyleMap]{@link ProgressStyleMap}.
   *
   * Default value: **ProgressType.Linear**
   *
   * **Note:** Different [ProgressType]{@link ProgressType} values must correspond to the respective
   * [style]{@link ProgressAttribute#style} attribute settings. For the detailed mapping, see
   * [ProgressStyleMap]{@link ProgressStyleMap}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  type?: Type;
}

/**
 * Enumerates progress indicator types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum ProgressType {
  /**
   * Linear type. Since API version 9, the progress indicator adapts to vertical display when its height is greater than
   * its width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Linear = 0,

  /**
   * Ring type without scales. The ring gradually displays until it is fully filled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Ring = 1,

  /**
   * Eclipse type, which visualizes the progress in a way similar to the moon waxing from new to full.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Eclipse = 2,

  /**
   * Ring style with scales, which is similar to the clock scale style. Since API version 9, the progress indicator
   * automatically switches to a non-scaled ring style when the outer scales overlap.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ScaleRing = 3,

  /**
   * Capsule style. The progress display effect at the arc ends is the same as that of Eclipse, and the progress
   * display effect in the middle section is the same as that of Linear. Since API version 9, when the height is
   * greater than the width, the component is displayed vertically in an adaptive manner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Capsule = 4
}

/**
 * Current state of the progress indicator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ProgressStatus {
  /**
   * Loading state. Enables the check-update animation, in which case the set progress value does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LOADING,

  /**
   * Progressing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PROGRESSING
}

/**
 * Defines the progress bar style options.
 *
 * Inherits from [CommonProgressStyleOptions]{@link CommonProgressStyleOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface ProgressStyleOptions extends CommonProgressStyleOptions {
  /**
   * Sets the progress bar width (percentage setting not supported).
   *
   * Default value: 4.0vp
   *
   * Value range: a value greater than 0.
   *
   * When the value exceeds the value range or an invalid value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeWidth?: Length;

  /**
   * Sets the total number of scale marks on the ring progress bar.
   *
   * Default value: 120
   *
   * Value range: [2, min(width, height)*π/scaleWidth]. When the value exceeds the value range, the style is displayed
   * as a ring progress bar without scale marks.
   *
   * When both scaleCount and scaleWidth are equal to their default values, setting the component width or height to
   * less than 77vp displays a ring progress bar without scale marks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scaleCount?: number;

  /**
   * Sets the thickness of the scale marks on the ring progress bar (percentage setting not supported).
   *
   * Default value: 2.0vp
   *
   * Value range: a value greater than 0.
   *
   * When the value exceeds the value range or an invalid value is set, the default value is used.
   *
   * When the scale mark thickness is greater than the progress bar width, the system default thickness is used.
   *
   * When both scaleCount and scaleWidth are equal to their default values, setting the component width or height to
   * less than 77vp displays a ring progress bar without scale marks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scaleWidth?: Length;
}

/**
 * Provides common style configuration options for the progress indicator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CommonProgressStyleOptions {
  /**
   * Switch for the progress smooth effect. When the smooth effect is enabled, setting the progress changes it gradually
   * from the current value to the specified value, with an animation on the page. Otherwise, the progress changes
   * abruptly from the current value to the specified value, with no animation on the page.
   *
   * true: enables the progress smooth effect.
   *
   * false: disables the progress smooth effect.
   *
   * Default value: true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableSmoothEffect?: boolean;
}

/**
 * Defines the scan effect options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ScanEffectOptions {
  /**
   * Whether to enable the scan effect. This parameter is supported only for the progress bar whose
   * [ProgressType]{@link ProgressType} is Linear, Ring, or Capsule.
   *
   * true: enable the scan effect.
   *
   * false: disable the scan effect.
   *
   * Default value: false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScanEffect?: boolean;
}

/**
 * Options of the eclipse style. The eclipse style visualizes the progress in a way similar to the moon waxing from new
 * to full.
 *
 * Inherits from [CommonProgressStyleOptions]{@link CommonProgressStyleOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface EclipseStyleOptions extends CommonProgressStyleOptions {
}

/**
 * Options of the ring style with scales.
 *
 * Inherits from [CommonProgressStyleOptions]{@link CommonProgressStyleOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ScaleRingStyleOptions extends CommonProgressStyleOptions {
  /**
   * Sets the progress bar width.
   *
   * Default value: 4.0vp
   *
   * Value range: a value greater than 0 (unit: vp). Percentage setting is not supported.
   *
   * Exceeding the value range or setting an invalid value is handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;

  /**
   * Sets the thickness of the scales of the ring progress bar (percentage setting is not supported).
   *
   * Default value: 2.0vp
   *
   * Value range: a value greater than 0 (unit: vp).
   *
   * When the scale thickness is greater than the progress bar width, the system default thickness is used.
   *
   * When both scaleCount and scaleWidth are equal to their default values, setting the component width or height to
   * less than 77 vp displays a ring progress bar without scales.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scaleWidth?: Length;

  /**
   * Sets the total number of scales of the ring progress bar.
   *
   * Default value: 120
   *
   * Value range: [2, min(width, height)*π/scaleWidth]. When the value exceeds the range, the style is displayed as a
   * ring progress bar without scales.
   *
   * When both scaleCount and scaleWidth are equal to their default values, setting the component width or height to
   * less than 77 vp displays a ring progress bar without scales.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scaleCount?: number;
}

/**
 * Options of the ring style without scales.
 *
 * Inherits from [ScanEffectOptions]{@link ScanEffectOptions} and
 * [CommonProgressStyleOptions]{@link CommonProgressStyleOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RingStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {
  /**
   * Sets the width of the progress bar.
   *
   * Default value: **4.0vp**
   *
   * Value range: a value greater than 0. Percentage setting is not supported.
   *
   * If the value exceeds the value range or an invalid value is set, the default value is used.
   *
   * When the width is greater than or equal to the radius, the width is changed to half of the radius by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;

  /**
   * Whether to enable the shadow of the progress bar.
   *
   * true: enables the shadow of the progress bar; false: disables the shadow of the progress bar.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  shadow?: boolean;

  /**
   * Sets the status of the progress bar. When the value is set to **ProgressStatus.LOADING**, the check-and-update
   * animation is enabled. When the value changes from **ProgressStatus.LOADING** to **ProgressStatus.PROGRESSING**, the
   * check-and-update animation runs to the end point before stopping.
   *
   * Default value: **ProgressStatus.PROGRESSING**
   *
   * **Note:** When the value is set to **ProgressStatus.LOADING**, the progress value setting does not take effect. For
   * details, see the description of [value]{@link ProgressAttribute#value}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  status?: ProgressStatus;
}

/**
 * Linear style options.
 *
 * Inherits from [ScanEffectOptions]{@link ScanEffectOptions} and
 * [CommonProgressStyleOptions]{@link CommonProgressStyleOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface LinearStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {
  /**
   * Sets the progress bar width.
   *
   * Default value: **4.0vp**
   *
   * Value range: a value greater than 0. Percentage setting is not supported.
   *
   * If the value exceeds the value range or an invalid value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;

  /**
   * Sets the corner radius of the linear progress bar.
   *
   * Value range: [0, strokeWidth / 2]. Default value: **strokeWidth / 2**.
   *
   * If the value exceeds the value range, the default value is used.
   *
   * @default strokeWidth / 2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeRadius?: PX | VP | LPX | Resource;
}

/**
 * Capsule style options.
 *
 * Inherits from [ScanEffectOptions]{@link ScanEffectOptions} and
 * [CommonProgressStyleOptions]{@link CommonProgressStyleOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CapsuleStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {
  /**
   * Inner stroke color.
   *
   * Default value:
   *
   * API version 10: '#33006cde'
   *
   * API version 11 and later: '#33007dff'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderColor?: ResourceColor;

  /**
   * Inner stroke width.
   *
   * Default value: 1vp
   *
   * Value range: a value greater than or equal to 0. Percentage setting not supported.
   *
   * A value out of range or an invalid value is handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderWidth?: Length;

  /**
   * Text content, which can be customized by the application.
   *
   * Pass this parameter when custom text needs to be displayed on the capsule progress bar. If it is not passed, no
   * text is displayed (to display the percentage text, set showDefaultPercentage to true).
   *
   * Since API version 20, the Resource type is supported.
   *
   * @type { ?string } [since 10 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content?: ResourceStr;

  /**
   * Text style.
   *
   * Default value:
   *
   * Text size (percentage setting not supported): 12fp
   *
   * Other text parameters follow the theme values of the [Text]{@link ./text} component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font?: Font;

  /**
   * Text color.
   *
   * Default value: '#ff182431'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Whether to display the percentage text. When enabled, the progress bar displays the percentage of the current
   * progress. This attribute does not take effect when the content attribute is set.
   *
   * true: displays the percentage text; false: does not display the percentage text.
   *
   * Default value: false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showDefaultPercentage?: boolean;

  /**
   * Corner radius of the capsule progress bar (percentage setting not supported).
   *
   * Value range: [0, component height/2]. Default value: component height/2.
   *
   * An invalid value is handled as the default value.
   *
   * @default min(width, height) / 2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  borderRadius?: LengthMetrics;
}

/**
 * Enumerates progress indicator styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ProgressStyle {
  /**
   * Linear style. The progress bar is gradually filled from one end to the other along a straight line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Linear,

  /**
   * Ring without scale. The ring is gradually displayed until it is completely filled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Ring,

  /**
   * Eclipse style, which visualizes the progress in a way similar to the moon waxing from new to full.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Eclipse,

  /**
   * Ring with scale. Displays a progress effect similar to a clock scale. Since API version 9, when the outer ring of
   * the scale overlaps, it is automatically converted to a ring without scale.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ScaleRing,

  /**
   * Capsule style. The progress display effect at the arc ends is the same as that of Eclipse, and the progress display
   * effect in the middle is the same as that of Linear. Since API version 9, when the height is greater than the width,
   * it is adaptively displayed vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Capsule,
}

/**
 * Defines the mapping between progress indicators and styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ProgressStyleMap {
  /**
   * Linear progress indicator style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Linear]: LinearStyleOptions | ProgressStyleOptions;
  /**
   * Ring progress indicator style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Ring]: RingStyleOptions | ProgressStyleOptions;
  /**
   * Eclipse progress indicator style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Eclipse]: EclipseStyleOptions | ProgressStyleOptions;
  /**
   * ScaleRing progress indicator style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.ScaleRing]: ScaleRingStyleOptions | ProgressStyleOptions;
  /**
   * Capsule progress indicator style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Capsule]: CapsuleStyleOptions | ProgressStyleOptions;
}

/**
 * The **Progress** component is a progress indicator that displays the progress of content loading or an operation. It
 * supports multiple styles such as linear, ring, circular, and capsule, and allows customization of colors, gradient
 * effects, and animations. It is suitable for scenarios that require displaying progress status, such as file download,
 * data loading, and task processing. With rich style and animation configurations, progress visualization can be
 * quickly implemented to improve user experience.
 *
 * > **NOTE**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ProgressInterface {

  /**
   * Creates a progress indicator.
   *
   * @param { ProgressOptions<Type> } options - Options of the progress indicator, which vary by progress indicator
   *     type.
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  <Type extends keyof ProgressStyleMap>(options: ProgressOptions<Type>): ProgressAttribute<Type>;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * > **NOTE**
 * >
 * > This component overrides the universal attribute
 * > [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}. When applied directly to the
 * > **Progress** component, it sets the background color of the progress indicator itself. To set the background color
 * > for the entire **Progress** component area, apply **backgroundColor** to the outer container that wraps the
 * > **Progress** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ProgressAttribute<Type extends keyof ProgressStyleMap = keyof ProgressStyleMap,
  Style extends ProgressStyleMap[Type] = ProgressStyleMap[Type]> extends CommonMethod<ProgressAttribute<Type>> {
  /**
   * Sets the current progress value. When a value less than 0 is set, it is set to 0; when a value greater than total
   * is set, it is set to total. When an invalid value is set, it is handled as the default value. When the status
   * attribute of the Ring style is set to ProgressStatus.LOADING, setting the progress value does not take effect.
   *
   * @param { number } value - Current progress value.
   *     <br>Default value: 0
   *     <br>Value range: [0, total]. When the value is set to less than 0, it is set to 0. When the value is set to
   *     greater than total, it is set to total. When an invalid value is set, it is handled as the default value.
   *     <br>**Note:** When the status of a Ring type progress bar is set to ProgressStatus.LOADING, the set progress
   *     value does not take effect.
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  value(value: number): ProgressAttribute<Type>;

  /**
   * Sets the foreground color of the progress indicator.
   *
   * Since API version 10, [LinearGradient]{@link LinearGradient} can be used to set a gradient color for the ring
   * style. Setting opacity is not recommended for the ring type. If opacity is required, use
   * [DataPanel]{@link ./data_panel}.
   *
   * Since API version 23, LinearGradient can be used to set the gradient color of the Linear style and Capsule style.
   * In API version 22 and earlier, when this method is used, the default theme color is displayed.
   *
   * @param { ResourceColor | LinearGradient } value - Foreground color of the progress bar.
   *     <br>Since API version 10, LinearGradient is supported for setting the gradient color of the Ring style. Since
   *     API version 23, LinearGradient is supported for setting the gradient color of the Linear style and Capsule
   *     style.
   *     <br>Default value:
   *     <br>- Capsule:
   *     <br>   API version 9 and earlier: '#ff007dff'
   *     <br>   API version 10: '#33006cde'
   *     <br>   API version 11 and later: '#33007dff'
   *     <br>- Ring:
   *     <br>   API version 9 and earlier: '#ff007dff'
   *     <br>   API version 10 and later: start: '#ff86c1ff', end: '#ff254ff7'
   *     <br>- Other styles: '#ff007dff'
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: ResourceColor | LinearGradient): ProgressAttribute<Type>;

  /**
   * Sets the component style.
   *
   * @param { Style } value - Style of the component. Style inherits from [ProgressStyleMap]{@link ProgressStyleMap}.
   *     <br>**Note:** Different [ProgressType]{@link ProgressType} values must correspond to the respective
   *     [style]{@link ProgressAttribute#style} attribute settings. For the detailed mapping, see
   *     [ProgressStyleMap]{@link ProgressStyleMap}.
   *     <br>- [CapsuleStyleOptions]{@link CapsuleStyleOptions}: Sets the style of Capsule.
   *     <br>- [RingStyleOptions]{@link RingStyleOptions}: Sets the style of Ring.
   *     <br>- [LinearStyleOptions]{@link LinearStyleOptions}: Sets the style of Linear.
   *     <br>- [ScaleRingStyleOptions]{@link ScaleRingStyleOptions}: Sets the style of ScaleRing.
   *     <br>- [EclipseStyleOptions]{@link EclipseStyleOptions}: Sets the style of Eclipse.
   *     <br>- [ProgressStyleOptions]{@link ProgressStyleOptions}: Can only set strokeWidth, scaleCount, and scaleWidth
   *     of each type of progress bar, and takes effect only for progress bars that support these style settings.
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  style(value: Style): ProgressAttribute<Type>;

  /**
   * Sets whether to enable privacy-sensitive mode.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Optional<boolean> } isPrivacySensitiveMode - Sets privacy sensitivity. In privacy mode, the progress is
   *     cleared and the text is masked. true: enables privacy sensitivity; false: disables privacy sensitivity.
   *     <br> Default value: false
   *     <br>**Note:**
   *     <br>Setting null indicates that the component is not sensitive. <!--Del-->
   *     <br>To use Progress in a card and set the [privacy mask]{@link ./common} attribute with the
   *     [FormComponent]{@link ./form_component} component, the privacy mask effect is available only when the card is
   *     displayed.<!--DelEnd-->
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  privacySensitive(isPrivacySensitiveMode: Optional<boolean>): ProgressAttribute<Type>;

  /**
   * Creates a content modifier.
   *
   * @param { ContentModifier<ProgressConfiguration> } modifier - The contentModifier of progress.
   * @returns { ProgressAttribute<Type> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<ProgressConfiguration>): ProgressAttribute<Type>;
}

/**
 * Provides progress indicator configuration. Inherits from [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ProgressConfiguration extends CommonConfiguration<ProgressConfiguration> {
  /**
   * Current progress value. When the set value is less than 0, it is set to 0. When the set value is greater than
   * total, it is set to total.
   *
   * Default value: 0
   *
   * Value range: [0, total]
   *
   * **Note:** When the status of a Ring type progress bar is set to ProgressStatus.LOADING, the set progress value does
   * not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: number;

  /**
   * Total progress length.
   *
   * Value range: (0, +∞)
   *
   * **NOTE**
   *
   * When total is less than or equal to 0, it is handled as 100.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  total: number;
}

/**
 * The **Progress** component is a progress indicator that displays the progress of content loading or an operation. It
 * supports multiple styles such as linear, ring, circular, and capsule, and allows customization of colors, gradient
 * effects, and animations. It is suitable for scenarios that require displaying progress status, such as file download,
 * data loading, and task processing. With rich style and animation configurations, progress visualization can be
 * quickly implemented to improve user experience.
 *
 * > **NOTE**
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Progress: ProgressInterface;

/**
 * Defines Progress Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ProgressInstance: ProgressAttribute<keyof ProgressStyleMap>;