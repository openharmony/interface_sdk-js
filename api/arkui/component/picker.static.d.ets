'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
import { ResourceColor, BorderRadiuses, LocalizedBorderRadiuses } from "./units";
import { CommonMethod } from './common';
import { LengthMetrics } from './../Graphics';
import { AttributeModifier } from "./common";
import { ComponentBuilder, CustomBuilder } from './builder';
/**
 * Defines the options of Picker.
 * @interface PickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PickerOptions {
  /**
   * Current selected subscript.
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  selectedIndex?: int;
}

/**
 * Callback of Picker item is selected event.
 * @typedef {function} OnPickerCallback
 * @param { int } selectedIndex - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare type OnPickerCallback = (selectedIndex: int) => void;

/**
 * PickerIndicatorType
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum PickerIndicatorType {
  /**
   * Background marks the selected item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  BACKGROUND = 0,
  /**
   * Divider marks the selected item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DIVIDER = 1
}

/**
 * Defines the options of Indicator style.
 * @interface PickerIndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PickerIndicatorStyle {
  /**
   * The type of indicator.
   * @type { PickerIndicatorType } type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  type: PickerIndicatorType;

  /**
   * The width of Divider stroke.
   * @type { ?LengthMetrics } strokeWidth
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  strokeWidth?: LengthMetrics;

  /**
   * The color of Divider.
   * @type { ?ResourceColor } dividerColor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  dividerColor?: ResourceColor;

  /**
   * The startMargin of Divider.
   * @type { ?LengthMetrics } startMargin
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  startMargin?: LengthMetrics;

  /**
   * The endMargin of Divider.
   * @type { ?LengthMetrics } endMargin
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  endMargin?: LengthMetrics;

  /**
   * Define the background color of selected item.
   * @type { ?ResourceColor } backgroundColor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  backgroundColor?: ResourceColor;

  /**
   * Defines the border radius of selected items.
   * @type { ?(LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses) } borderRadius
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}

/**
 * Defines the Picker component attributes.
 * @extends CommonMethod
 * @interface PickerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface PickerAttribute extends CommonMethod {
  /**
   * This event is triggered when a Picker item is selected.
   * @param { OnPickerCallback | undefined } callback - The callback of onChange.
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onChange(callback: OnPickerCallback | undefined): PickerAttribute;

  /**
   * This event is triggered when a Picker item is selected and scrolling has stopped.
   * @param { OnPickerCallback | undefined } callback - The callback of onScrollStop.
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onScrollStop(callback: OnPickerCallback | undefined): PickerAttribute;

  /**
   * Can scroll loop if true is set, on the contrary it can not.
   * @param { boolean | undefined } isLoop
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default canLoop(isLoop: boolean | undefined): PickerAttribute;

  /**
   * Enable or disable haptic feedback.
   * @param { boolean | undefined } enable - Default value is true, set false to disable haptic feedback.
   *     Default value is true, set false to disable haptic feedback.
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default enableHapticFeedback(enable: boolean | undefined): PickerAttribute;

  /**
   * Sets the indicator's type and style.
   * @param { PickerIndicatorStyle | undefined } style
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default selectionIndicator(style: PickerIndicatorStyle | undefined): PickerAttribute;
  
  /**
   * Set the attribute modifier
   * @param { AttributeModifier<PickerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { PickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<PickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines the Picker container.
 * @param { PickerOptions } [options] - picker options.
 * @param { CustomBuilder } [content_]
 * @returns { PickerAttribute } - The attribute of the Picker.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Picker(
    options?: PickerOptions, 
    content_?: CustomBuilder
): PickerAttribute;