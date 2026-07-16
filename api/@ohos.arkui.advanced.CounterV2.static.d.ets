'use static';

/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import { Param } from '@ohos.arkui.stateManagement';
import {
  ResourceStr,
  Direction,
  ComponentV2,
  Builder,
  VoidCallback
} from '@ohos.arkui.component';

/**
 * Enum for the CounterV2 type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
declare enum CounterV2Type {
  /**
   * List counter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  LIST = 0,

  /**
   * Compact counter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  COMPACT = 1,

  /**
   * Inline counter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  INLINE = 2,

  /**
   * Date inline counter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  INLINE_DATE = 3
}

/**
 * The hover callback of CounterV2.
 *
 * @param { boolean } isHover - isHover
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export type OnCounterV2HoverCallback = (isHover: boolean) => void;

/**
 * Defines the common options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
declare class CounterV2CommonOptions {
  /**
   * Set the focusable of the counter component.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  focusable?: boolean;

  /**
   * Set the step of the counter component, ranges greater than or equal to 1.
   * The value should be an integer.
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  step?: int;

  /**
   * Trigger a mouse hover event at the increase button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onHoverIncrease?: OnCounterV2HoverCallback;

  /**
   * Trigger a mouse hover event at the decrease button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onHoverDecrease?: OnCounterV2HoverCallback;
}

/**
 * The change callback of the inline CounterV2.
 *
 * @param { int } value - value.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export type OnInlineCounterV2Change = (value: int) => void;

/**
 * Defines the inline style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
declare class CounterV2InlineStyleOptions extends CounterV2CommonOptions {
  /**
   * Set initial value of the CounterV2 component, ranges from min to max.
   * The value should be an integer.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  value?: int;

  /**
   * Set minimum value of the CounterV2 component, ranges greater than equal to 0.
   * The value should be an integer.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  min?: int;

  /**
   * Set maximum value of the CounterV2 component, ranges greater than equal to 0.
   * The value should be an integer.
   *
   * @default 999
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  max?: int;

  /**
   * Set text width of the CounterV2 component, ranges greater than or equal to 0.
   * If undefined is passed, the text width will adapt to the text content.
   *
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  textWidth?: double;

  /**
   * Trigger an event when the value of the CounterV2 has been changed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onChange?: OnInlineCounterV2Change;
}

/**
 * Defines the number style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
declare class CounterV2NumberStyleOptions extends CounterV2InlineStyleOptions {
  /**
   * Set the label of the CounterV2 component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  label?: ResourceStr;

  /**
   * Trigger an event when the increase button gets focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onFocusIncrease?: VoidCallback;

  /**
   * Trigger an event when the decrease button gets focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onFocusDecrease?: VoidCallback;

  /**
   * Trigger an event when the increase button loses focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onBlurIncrease?: VoidCallback;

  /**
   * Trigger an event when the decrease button loses focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onBlurDecrease?: VoidCallback;
}

/**
 * Defines the date data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
declare class CounterV2DateData {
  /**
   * The year of the DateData, ranges from 1 to 5000.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  year: int;

  /**
   * The month of the DateData.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  month: int;

  /**
   * The day of the DateData.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  day: int;

  /**
   * Constructor of the DateData.
   *
   * @param { int } year - set the year of the DateData.
   *     <br>The value should be an integer.
   * @param { int } month - set the month of the DateData.
   *     <br>The value should be an integer.
   * @param { int } day - set the day of the DateData.
   *     <br>The value should be an integer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(year: int, month: int, day: int);

  /**
   * Convert the date data to string.
   *
   * @returns { string } date data in string form.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  toString(): string;
}

/**
 * The change callback of the date style counter.
 *
 * @param { CounterV2DateData } date - date
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export type OnDateCounterV2ChangeCallback = (date: CounterV2DateData) => void;

/**
 * Defines the date style options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
declare class CounterV2DateStyleOptions extends CounterV2CommonOptions {
  /**
   * Set the year of the CounterV2 component, ranges from 1 to 5000.
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  year?: int;

  /**
   * Set the month of the CounterV2 component.
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  month?: int;

  /**
   * Set the day of the CounterV2 component.
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  day?: int;

  /**
   * Trigger an event when the date of the CounterV2 has been changed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onDateChange?: OnDateCounterV2ChangeCallback;
}

/**
 * Defines the CounterV2 options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
declare class CounterV2Options {
  /**
   * Set the type of the CounterV2 component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  type: CounterV2Type;

  /**
   * Set the counter attribute of the LIST or COMPACT CounterV2 component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  numberOptions?: CounterV2NumberStyleOptions;

  /**
   * Set the counter attribute of the INLINE CounterV2 component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  inlineOptions?: CounterV2InlineStyleOptions;

  /**
   * Set the counter attribute of the INLINE_DATE CounterV2 component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  dateOptions?: CounterV2DateStyleOptions;

  /**
   * Indicates the attribute of the current CounterV2 direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  direction?: Direction;
}

/**
 * Defines CounterV2 Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentV2
declare struct CounterV2Component {
  /**
   * The options of a CounterV2 component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  options: CounterV2Options;

  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   * @noninterop
   */
  @Builder
  build(): void;
}

export {
  CounterV2Component,
  CounterV2Options,
  CounterV2DateData,
  CounterV2Type,
  CounterV2InlineStyleOptions,
  CounterV2NumberStyleOptions,
  CounterV2DateStyleOptions,
  CounterV2CommonOptions
}
