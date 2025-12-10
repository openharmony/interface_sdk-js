/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * Defines the options of Picker.
 *
 * @interface PickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface PickerOptions {
  /**
   * Current selected subscript.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  selectedIndex?: number;
}

/**
 * PickerInterface
 *
 * @interface PickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
interface PickerInterface {
  /**
   * Defines the Picker constructor.
   *
   * @param { PickerOptions } options
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  (options?: PickerOptions): PickerAttribute;
}

/**
 * Callback of Picker item is selected event.
 *
 * @typedef {function} OnPickerCallback
 * @param { number } selectedIndex - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type OnPickerCallback = (selectedIndex: number) => void;

/**
 * PickerIndicatorType
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum PickerIndicatorType {
  /**
   * Background marks the selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  BACKGROUND = 0,

  /**
   * Divider marks the selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  DIVIDER = 1,
}

/**
 * Defines the options of Indicator style.
 *
 * @interface PickerIndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface PickerIndicatorStyle {
  /**
   * The type of indicator.
   *
   * @type { PickerIndicatorType } type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  type: PickerIndicatorType;

  /**
   * The width of divider stroke.
   *
   * @type { ?LengthMetrics } strokeWidth
   * @default $r('sys.float.border_medium')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  strokeWidth?: LengthMetrics;

  /**
   * The color of Divider.
   *
   * @type { ?ResourceColor } dividerColor
   * @default $r('sys.color.comp_divider')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  dividerColor?: ResourceColor;

  /**
   * The startMargin of Divider.
   *
   * @type { ?LengthMetrics } startMargin
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  startMargin?: LengthMetrics;

  /**
   * The endMargin of Divider.
   *
   * @type { ?LengthMetrics } endMargin
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  endMargin?: LengthMetrics;

  /**
   * Define the background color of selected item.
   *
   * @type { ?ResourceColor } backgroundColor
   * @default $r('sys.color.comp_background_tertiary')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Defines the border radius of selected items.
   *
   * @type { ?(LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses) } borderRadius
   * @default $r('sys.float.corner_radius_level6')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}

/**
 * Style the picker.
 *
 * @extends CommonMethod<PickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare class PickerAttribute extends CommonMethod<PickerAttribute> {
  /**
   * This event is triggered when a Picker item is selected.
   *
   * @param { Optional<OnPickerCallback> } callback - the callback of onChange.
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */  
  onChange(callback: Optional<OnPickerCallback>): PickerAttribute;

  /**
   * This event is triggered when a Picker item is selected and scrolling has stopped.
   *
   * @param { Optional<OnPickerCallback> } callback - the callback of onScrollStop.
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onScrollStop(callback: Optional<OnPickerCallback>): PickerAttribute;

  /**
   * Can scroll loop if true is set, on the contrary it can not.
   *
   * @param { Optional<boolean> } isLoop
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  canLoop(isLoop: Optional<boolean>): PickerAttribute;

  /**
   * Enable or disable haptic feedback.
   *
   * @param { Optional<boolean> } enable - Default value is true, set false to disable haptic feedback.
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 22 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): PickerAttribute;

  /**
   * Sets the indicator's type and style.
   *
   * @param { Optional<PickerIndicatorStyle> } style
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  selectionIndicator(style: Optional<PickerIndicatorStyle>): PickerAttribute;
}

/**
 * Defines Picker Component.
 *
 * @type { PickerInterface } Picker
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare const Picker: PickerInterface;

/**
 * Defines Picker Component instance.
 *
 * @type { PickerAttribute } PickerInstance
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare const PickerInstance: PickerAttribute;
