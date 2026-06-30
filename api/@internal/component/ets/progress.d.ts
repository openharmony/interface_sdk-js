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
   * Current progress. Values less than 0 are adjusted to **0**, and values greater than the **total** value are capped
   * at the **total** value.
   *
   * Default value: **0**
   *
   * Value range: [0, total]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  value: number;

  /**
   * Total progress. If this parameter is set to a value less than or equal to 0, the value **100** is used.
   *
   * Default value: **100**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  total?: number;

  /**
   * Style of the progress indicator.
   *
   * This parameter is deprecated since API version 8. You are advised to use **type** instead.
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
   * Style of the progress indicator.
   *
   * Default value: **ProgressType.Linear**
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
   * The ring is gradually displayed until completely filled.
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
   * Ring style with scales, which is similar to the clock scale style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ScaleRing = 3,

  /**
   * Capsule style. At both ends, the progress indicator works in the same manner as the eclipse style. In the middle
   * part of the capsule, the progress indicator works in the same manner as the linear style. When the height is
   * greater than the width, the progress indicator adapts to vertical display.
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
   * Loading.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LOADING = 0,

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
   * Stroke width of the progress indicator. Percentage values are not supported.
   *
   * Default value: **4.0vp**
   *
   * If the value is out of the range, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeWidth?: Length;

  /**
   * Number of divisions on the ring-style process indicator.
   *
   * Default value: **120**
   *
   * Value range: [2, min(width, height)/scaleWidth/2/π]. If the value is outside this range, the progress indicator is
   * displayed in the indeterminate ring style. By default, the minimum width and height are 77 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scaleCount?: number;

  /**
   * Scale width of the ring-style progress indicator. Percentage values are not supported. If the scale width is
   * greater than the stroke width of the progress indicator, the default scale width is used.
   *
   * Default value: **2.0vp**
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
   * Whether to enable the smooth effect. When this feature is enabled, the progress value transitions from the current
   * value to the target value with a progress change animation displayed on the page. When this feature is disabled,
   * the progress value jumps directly to the target value without any animation.
   *
   * **true**: The smooth effect is enabled.
   *
   * **false**: The smooth effect is disabled.
   *
   * Default value: **true**
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
   * Whether to enable the scan effect. Only the progress indicator of the
   * [linear, ring, and capsule]{@link ProgressType} type is supported.
   *
   * **true**: The scan effect is enabled.
   *
   * **false**: The scan effect is disabled.
   *
   * Default value: **false**
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
declare interface EclipseStyleOptions extends CommonProgressStyleOptions {}

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
   * Stroke width of the progress indicator. Percentage values are not supported.
   *
   * Default value: **4.0vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;

  /**
   * Scale width of the ring-style progress indicator. Percentage values are not supported. If the scale width is
   * greater than the stroke width of the progress indicator, the default scale width is used.
   *
   * Default value: **2.0vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scaleWidth?: Length;

  /**
   * Number of divisions on the ring-style process indicator.
   *
   * Default value: **120**
   *
   * Value range: [2, min(width, height)/scaleWidth/2/π]. If the value is outside this range, the progress indicator is
   * displayed in the indeterminate ring style. By default, the minimum width and height are 77 vp.
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
   * Stroke width of the progress indicator. Percentage values are not supported.
   *
   * Default value: **4.0vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;

  /**
   * Whether to enable the shadow effect.
   *
   * **true**: The shadow effect is enabled. **false**: The shadow effect is disabled.
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
   * Progress state. When this parameter is set to **ProgressStatus.LOADING**, the update check animation is enabled,
   * and the progress value setting does not take effect. When the value changes from **ProgressStatus.LOADING** to
   * **ProgressStatus.PROGRESSING**, the update check animation runs to completion and then stops.
   *
   * Default value: **ProgressStatus.PROGRESSING**
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
   * Stroke width of the progress indicator. Percentage values are not supported.
   *
   * Default value: **4.0vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;

  /**
   * Border radius of the linear progress indicator.
   *
   * Value range: [0, strokeWidth/2] Default value: **strokeWidth/2**
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
   * Border color.
   *
   * Default value:
   *
   * API version 10: **'#33006cde'**
   *
   * API version 11 or later: **'#33007dff'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderColor?: ResourceColor;

  /**
   * Border width. Percentage values are not supported.
   *
   * Default value: **1vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderWidth?: Length;

  /**
   * Text content, which can be customized.
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
   * Font size (percentage values are not supported): **12fp**
   *
   * Other text parameters are subject to the theme values of the [Text]{@link text} component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font?: Font;

  /**
   * Font color.
   *
   * Default value: **'#ff182431'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Whether to display the percentage text. After this feature is enabled, the progress percentage is displayed on the
   * progress indicator. This property does not take effect when **content** is set.
   *
   * **true**: The percentage text is displayed. **false**: The percentage text is not displayed.
   *
   * Default value: **false**
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
   * Border radius. Percentage values are not supported.
   *
   * Value range: [0, min(width, height)/2]
   *
   * Default value: min(width, height)/2
   *
   * If an invalid value is set, the default value is used.
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
   * Linear style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Linear = 0,

  /**
   * The ring is gradually displayed until completely filled.
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
   * Ring style with scales, which is similar to the clock scale style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ScaleRing,

  /**
   * Capsule style. At both ends, the progress indicator works in the same manner as the eclipse style. In the middle
   * part of the capsule, the progress indicator works in the same manner as the linear style. When the height is
   * greater than the width, the progress indicator adapts to vertical display.
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
   * Progress bar style corresponding to the linear progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Linear]: LinearStyleOptions | ProgressStyleOptions;

  /**
   * Progress bar style corresponding to the ring unscaled progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Ring]: RingStyleOptions | ProgressStyleOptions;

  /**
   * Progress bar style corresponding to a round progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Eclipse]: EclipseStyleOptions | ProgressStyleOptions;

  /**
   * Progress bar style corresponding to the ring scaled progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.ScaleRing]: ScaleRingStyleOptions | ProgressStyleOptions;

  /**
   * Progress bar style corresponding to the capsule progress bar.
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
 * The **Progress** component represents a progress indicator that displays the progress of content loading or an
 * operation.
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
 * In addition to the
 * [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following
 * attributes are supported.
 *
 * The [universal events][universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md) are
 * supported.
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
   * Current progress. Values less than 0 are adjusted to **0**, and values greater than the **total** value are capped
   * at the **total** value. Invalid values do not take effect.
   *
   * @param { number } value - Current progress.<br> Default value: **0**
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
   * [DataPanel]{@link data_panel}.
   *
   * Since API version 23, [LinearGradient]{@link LinearGradient} can be used to set gradient colors for the linear and
   * capsule styles. In API version 22 and earlier versions, setting gradient colors via **LinearGradient** for the
   * **Linear** and **Capsule** styles will not render the custom colors; the system's default theme colors will be used
   * instead.
   *
   * @param { ResourceColor | LinearGradient } value - Foreground color of the progress indicator.<br>Default value:<br>
   *     - Capsule:<br>   API version 9 or earlier: **'#ff007dff'**<br>   API version 10: **'#33006cde'**<br>   API
   *     version 11 or later: **'#33007dff'**<br>- Ring:<br>   API version 9 or earlier: **'#ff007dff'**<br>   API
   *     version 10 or later: start: **'#ff86c1ff'**, end: **'#ff254ff7'**<br>- Other styles: **'#ff007dff'**
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
   * @param { Style } value - Component style.<br>- **CapsuleStyleOptions**: capsule style.<br>- **RingStyleOptions**:
   *     ring style.<br>- **LinearStyleOptions**: linear style.<br>- **ScaleRingStyleOptions**: determinate ring style.<
   *     br>- **EclipseStyleOptions**: eclipse style.<br>- **ProgressStyleOptions**: **strokeWidth**, **scaleCount**,
   *     and **scaleWidth** of a progress indicator. This parameter is valid only for the progress indicator that
   *     supports these style settings.
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
   * @param { Optional<boolean> } isPrivacySensitiveMode - Whether to enable privacy-sensitive mode, in which the
   *     progress indicator is cleared and text content is masked. **true**: The privacy-sensitive mode is enabled.
   *     **false**: The privacy-sensitive mode is disabled.<br> Default value: **false**<br>**NOTE**<br>Setting this
   *     parameter to **null** indicates that no specific privacy sensitivity is applied.<!--Del--><br>For widgets, this
   *     property must be used with [FormComponent]{@link form_component} and the
   *     [obscured]{@link CommonMethod#obscured} attribute to display privacy masking effects.<!--DelEnd-->
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
   * Current progress. Values less than 0 are adjusted to **0**. Values greater than the value of **total** are capped
   * at the value of **total**.
   *
   * Default value: **0**
   *
   * Value range: [0, total]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: number;

  /**
   * Total progress.
   *
   * Default value: **100**
   *
   * **NOTE**
   *
   * If the value of **total** is a negative number, it is treated as 100.
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
 * The **Progress** component represents a progress indicator that displays the progress of content loading or an
 * operation.
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