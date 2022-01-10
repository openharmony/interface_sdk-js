/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { CommonMethod } from "./common";

/**
 * Defines the type of DatePicker.
 * @since 8
 */
export declare enum DatePickerType {
  /**
   * Application hour and second
   * @since 8
   */
  Time,

  /**
   * Application data
   * @since 8
   */
  Date,
}

/**
 * Defines the struct of DatePickerResult.
 * @since 8
 */
export declare interface DatePickerResult {
  /**
   * Application year
   * @since 8
   */
  year?: number;

  /**
   * Application month
   * @since 8
   */
  month?: number;

  /**
   * Application day
   * @since 8
   */
  day?: number;

  /**
   * Application hour
   * @since 8
   */
  hour?: number;

  /**
   * Application minute
   * @since 8
   */
  minute?: number;

  /**
   * Application second
   * @since 8
   */
  second?: number;
}

/**
 * Defines the option of DatePicker.
 * @since 8
 */
export declare interface DatePickerOption {
  /**
   * Specifies the start date of the date selector.
   */
  start?: Date;
  /**
   * Specifies the end date for the date selector.
   */
  end?: Date;

  /**
   * Specifies the date selector check date or time selector check time.
   */
  selected?: Date;

  /**
   * Selector type, including date selector and time selector. By default, the date selector is used.
   */
  type?: DatePickerType;
}

/**
 * Defines the DatePicker Component.
 * @since 8
 */
interface DatePicker extends DatePickerAttribute<DatePicker> {
  /**
   * Defines the DatePicker constructor.
   * @since 8
   */
  (options?: DatePickerOption): DatePicker;
}

/**
 * Defines the DatePicker attribute functions.
 * @since 8
 */
declare class DatePickerAttribute<T> extends CommonMethod<T> {
  /**
   * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
   * @since 8
   */
  lunar(value: boolean): T;

  /**
   * Time Selector: indicates whether to display the 24-hour clock.
   * @since 8
   */
  useMilitaryTime(value: boolean): T;

  /**
   * This event is triggered when a DatePicker date or time is selected.
   * @since 8
   */
  onChange(callback: (value: DatePickerResult) => void): T;
}

/**
 * Defines the DatePickerDialogOption for Data Picker Dialog.
 * @since 8
 */
export declare interface DatePickerDialogOption extends DatePickerOption {
  /**
   * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
   * @since 8
   */
  lunar?: boolean;

  /**
   * Time Selector: indicates whether to display the 24-hour clock.
   * @since 8
   */
  useMilitaryTime?: boolean;
}

/**
 * Defines the event callback status in the pop-up window state.
 * @since 8
 */
export declare enum DialogStatus {
  /**
   * Triggered when a user clicks the OK button.
   * @since 8
   */
  Accept,

  /**
   * Triggered when a user taps the Cancel button.
   * @since 8
   */
  Cancel,

  /**
   * Triggered when a user performs scrolling selection.
   * @since 8
   */
  Update,
}

/**
 * Defines the DatePickerDialogResult for DatePickerDialog.
 * @since 8
 */
export declare interface DatePickerDialogResult extends DatePickerResult {
  /**
   * Operation status of the current user.
   * @since 8
   */
  status: DialogStatus;
}

/**
 * Defines DatePickerDialog which uses show method to show DatePicker dialog.
 * @since 8
 */
export declare class DatePickerDialog {
  /**
   * Invoking method display.
   * @since 8
   */
  static show(options?: DatePickerDialogOption, callback?: (value: DatePickerDialogResult) => void);
}

export declare class DatePickerExtend<T> extends DatePickerAttribute<T> {}
export declare const DatePickerInterface: DatePicker;
