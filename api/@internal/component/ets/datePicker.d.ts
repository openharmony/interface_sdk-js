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

import {CommonMethod} from "./common";

/**
 * Date and time slide selector component.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class DatePickerExtend<T> extends DatePickerAttribute<T> {
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare enum DatePickerType {
  /**
   * Application hour and second
   * @devices phone, tablet, car.
   * @since 7
   */
  Time,

  /**
   * Application data
   * @devices phone, tablet, car.
   * @since 7
   */
  Date
}

export interface DatePickerResult {
  /**
   * Application year
   * @devices phone, tablet, car.
   * @since 7
   */
  year?: number;

  /**
   * Application month
   * @devices phone, tablet, car.
   * @since 7
   */
  month?: number;

  /**
   * Application day
   * @devices phone, tablet, car.
   * @since 7
   */
  day?: number;

  /**
   * Application hour
   * @devices phone, tablet, car.
   * @since 7
   */
  hour?: number;

  /**
   * Application minute
   * @devices phone, tablet, car.
   * @since 7
   */
  minute?: number;

  /**
   * Application second
   * @devices phone, tablet, car.
   * @since 7
   */
  second?: number;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
interface DatePicker extends DatePickerAttribute<DatePicker> {
  /**
   * start: Specifies the start date of the date selector.
   * end: Specifies the end date for the date selector.
   * selected: Specifies the date selector check date or time selector check time.
   * type: Selector type, including date selector and time selector. By default, the date selector is used.
   * @devices phone, tablet, car.
   * @since 7
   */
  (options?: {start?: Date, end?: Date, selected?: Date, type?: DatePickerType}): DatePicker;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
declare class DatePickerAttribute<T> extends CommonMethod<T> {
  /**
   * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
   * @devices phone, tablet, car.
   * @since 7
   */
  lunar(value: boolean): T;

  /**
   * Time Selector: indicates whether to display the 24-hour clock.
   * @devices phone, tablet, car.
   * @since 7
   */
  useMilitaryTime(value: boolean): T;

  /**
   * This event is triggered when a DatePicker date or time is selected.
   * @devices phone, tablet, car.
   * @since 7
   */
  onChange(callback: (value: DatePickerResult) => void): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const DatePickerInterface: DatePicker;
