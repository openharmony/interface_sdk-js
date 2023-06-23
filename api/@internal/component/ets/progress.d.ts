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
 * Defines the option of Progress.
 * @since 7
 */
/**
 * Defines the option of Progress.
 * @form
 * @since 9
 */
/**
 * Defines the option of Progress.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface ProgressOptions<Type extends keyof ProgressStyleMap> {
  /**
   * Sets the value of Progress.
   * @since 7
   */
  /**
   * Sets the value of Progress.
   * @form
   * @since 9
   */
  /**
   * Sets the value of Progress.
   * @form
   * @crossplatform
   * @since 10
   */
  value: number;

  /**
   * Sets the total of Progress.
   * @since 7
   */
  /**
   * Sets the total of Progress.
   * @form
   * @since 9
   */
  /**
   * Sets the total of Progress.
   * @form
   * @crossplatform
   * @since 10
   */
  total?: number;

  /**
   * Sets the style of Progress.
   * @since 7
   * @deprecated since 8
   * @useinstead type
   */
  style?: ProgressStyle

  /**
   * Sets the type of Progress.
   * @since 8
   */
  /**
   * Sets the type of Progress.
   * @form
   * @since 9
   */
  /**
   * Sets the type of Progress.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  type?: Type
}

/**
 * Type of progress bar
 * @since 8
 */
/**
 * Type of progress bar
 * @form
 * @since 9
 */
/**
 * Type of progress bar
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ProgressType {
  /**
   * Linear progress bar style.
   * @since 8
   */
  /**
   * Linear progress bar style.
   * @form
   * @since 9
   */
  /**
   * Linear progress bar style.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Linear = 0,

  /**
   * Ring progress bar.
   * @since 8
   */
  /**
   * Ring progress bar.
   * @form
   * @since 9
   */
  /**
   * Ring progress bar.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Ring = 1,

  /**
   * Eclipse progress bar.
   * @since 8
   */
  /**
   * Eclipse progress bar.
   * @form
   * @since 9
   */
  /**
   * Eclipse progress bar.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Eclipse = 2,

  /**
   * ScaleRing progress bar.
   * @since 8
   */
  /**
   * ScaleRing progress bar.
   * @form
   * @since 9
   */
  /**
   * ScaleRing progress bar.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  ScaleRing = 3,

  /**
   * Capsule progress bar.
   * @since 8
   */
  /**
   * Capsule progress bar.
   * @form
   * @since 9
   */
  /**
   * Capsule progress bar.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  Capsule = 4
}

/**
 * Current status of progress bar.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum ProgressStatus {
  /**
   * Loading status.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LOADING,

  /**
   * Processing status.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  PROGRESSING
}

/**
 * Defines style options for progress component.
 * @since 8
 */
/**
 * Defines style options for progress component.
 * @form
 * @since 9
 */
/**
 * Defines style options for progress component.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface ProgressStyleOptions {
  /**
   * Defines the strokeWidth property.
   * @since 8
   */
  /**
   * Defines the strokeWidth property.
   * @form
   * @since 9
   */
  /**
   * Defines the strokeWidth property.
   * @form
   * @crossplatform
   * @since 10
   */
  strokeWidth?: Length;

  /**
   * Defines the scaleCount property.
   * @since 8
   */
  /**
   * Defines the scaleCount property.
   * @form
   * @since 9
   */
  /**
   * Defines the scaleCount property.
   * @form
   * @crossplatform
   * @since 10
   */
  scaleCount?: number;

  /**
   * Defines the scaleWidth property.
   * @since 8
   */
  /**
   * Defines the scaleWidth property.
   * @form
   * @since 9
   */
  /**
   * Defines the scaleWidth property.
   * @form
   * @crossplatform
   * @since 10
   */
  scaleWidth?: Length;
}

/**
 * Defines the enable scan effect.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ScanEffectOptions {
  /**
   * Enable scan effect.
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  enableScanEffect?: boolean;
}

/**
 * Defines the Eclipse style Options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface EclipseStyleOptions {

}

/**
 * Defines the ScaleRing style Options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ScaleRingStyleOptions {
  /**
   * Defines the strokeWidth property.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  strokeWidth?: Length;

  /**
   * Defines the scaleWidth property.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  scaleWidth?: Length;

  /**
   * Defines the scaleCount property.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  scaleCount?: number;
}

/**
 * Defines the ring style Options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RingStyleOptions extends ScanEffectOptions {
  /**
   * Defines the strokeWidth property.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  strokeWidth?: Length;

  /**
   * Enables progress shadow.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  shadow?: boolean;

  /**
   * The status of progress, default is PROGRESSING. Set to LOADING status will trigger the loading animation.
   * @type { ProgressStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  status?: ProgressStatus;
}

/**
 * Defines the linear style Options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface LinearStyleOptions extends ScanEffectOptions {
  /**
   * Defines the strokeWidth property.
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  strokeWidth?: Length;
}

/**
 * Defines the capsule style Options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface CapsuleStyleOptions extends ScanEffectOptions {
  /**
   * Set the inner border color.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderColor?: ResourceColor;

  /**
   * Set the border width.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  borderWidth?: Length;

  /**
   * Set the text content.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: string;

  /**
   * Set the text style.
   * @type { Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  font?: Font;

  /**
   * Set the text fontColor.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor?: ResourceColor;

  /**
   * show default percentage.
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showDefaultPercentage?: boolean;
}

/**
 * Type of progress bar
 * @since 7
 */
/**
 * Type of progress bar
 * @form
 * @since 9
 */
/**
 * Type of progress bar
 * @form
 * @crossplatform
 * @since 10
 */
declare enum ProgressStyle {
  /**
   * Linear progress bar style.
   * @since 7
   */
  /**
   * Linear progress bar style.
   * @form
   * @since 9
   */
  /**
   * Linear progress bar style.
   * @form
   * @crossplatform
   * @since 10
   */
  Linear,

  /**
   * Ring progress bar.
   * @since 8
   */
  /**
   * Ring progress bar.
   * @form
   * @since 9
   */
  /**
   * Ring progress bar.
   * @form
   * @crossplatform
   * @since 10
   */
  Ring,

  /**
   * Eclipse progress bar.
   * @since 7
   */
  /**
   * Eclipse progress bar.
   * @form
   * @since 9
   */
  /**
   * Eclipse progress bar.
   * @form
   * @crossplatform
   * @since 10
   */
  Eclipse,

  /**
   * ScaleRing progress bar.
   * @since 8
   */
  /**
   * ScaleRing progress bar.
   * @form
   * @since 9
   */
  /**
   * ScaleRing progress bar.
   * @form
   * @crossplatform
   * @since 10
   */
  ScaleRing,

  /**
   * Capsule progress bar.
   * @since 8
   */
  /**
   * Capsule progress bar.
   * @form
   * @since 9
   */
  /**
   * Capsule progress bar.
   * @form
   * @crossplatform
   * @since 10
   */
  Capsule,
}

/**
 * Defines the map for progress type and style.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ProgressStyleMap {
  /**
   * Defines the map for Linear progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.Linear]: LinearStyleOptions | ProgressStyleOptions;

  /**
   * Defines the map for Ring progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.Ring]: RingStyleOptions | ProgressStyleOptions;

  /**
   * Defines the map for Eclipse progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.Eclipse]: EclipseStyleOptions | ProgressStyleOptions;

  /**
   * Defines the map for ScaleRing progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.ScaleRing]: ScaleRingStyleOptions | ProgressStyleOptions;

  /**
   * Defines the map for Capsule progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  [ProgressType.Capsule]: CapsuleStyleOptions | ProgressStyleOptions;
}

/**
 * Provides the progress bar interface.
 * @since 7
 */
/**
 * Provides the progress bar interface.
 * @form
 * @since 9
 */
/**
 * Provides the progress bar interface.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ProgressInterface {
  /**
   * Called when the progress bar is set.
   * @since 7
   */
  /**
   * Called when the progress bar is set.
   * @form
   * @since 9
   */
  /**
   * Called when the progress bar is set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  <Type extends keyof ProgressStyleMap>(options: ProgressOptions<Type>): ProgressAttribute<Type>;
}

/**
 * Defines the progress attribute functions.
 * @since 7
 */
/**
 * Defines the progress attribute functions.
 * @form
 * @since 9
 */
/**
 * Defines the progress attribute functions.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class ProgressAttribute<Type extends keyof ProgressStyleMap = keyof ProgressStyleMap, Style extends ProgressStyleMap[Type] = ProgressStyleMap[Type]> extends CommonMethod<ProgressAttribute<Type>> {
  /**
   * Called when the current progress value is set.
   * @since 7
   */
  /**
   * Called when the current progress value is set.
   * @form
   * @since 9
   */
  /**
   * Called when the current progress value is set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  value(value: number): ProgressAttribute<Type>;

  /**
   * Called when the progress bar foreground is set.
   * @since 7
   */
  /**
   * Called when the progress bar foreground is set.
   * @form
   * @since 9
   */
  /**
   * Called when the progress bar foreground is set.
   * @form
   * @param { ResourceColor | LinearGradient } value - indicates the color of the progress.
   * @returns { ProgressAttribute } the attribute of the progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  color(value: ResourceColor | LinearGradient): ProgressAttribute<Type>;

  /**
   * Called when the style of progress bar is set.
   * @since 8
   */
  /**
   * Called when the style of progress bar is set.
   * @form
   * @since 9
   */
  /**
   * Called when the style of progress bar is set.
   * @crossplatform
   * @form
   * @param { Style } value - indicates the style of the progress.
   * @returns { ProgressAttribute } the attribute of the progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  style(value: Style): ProgressAttribute<Type>;
}

/**
 * Defines Progress Component.
 * @since 7
 */
/**
 * Defines Progress Component.
 * @form
 * @since 9
 */
/**
 * Defines Progress Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Progress: ProgressInterface;

/**
 * Defines Progress Component instance.
 * @since 7
 */
/**
 * Defines Progress Component instance.
 * @form
 * @since 9
 */
/**
 * Defines Progress Component instance.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const ProgressInstance: ProgressAttribute<keyof ProgressStyleMap>;