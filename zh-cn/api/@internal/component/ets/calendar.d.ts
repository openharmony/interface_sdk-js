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

/**
 * @file
 * @kit ArkUI
 */

/**
 * Provides a monthly view component to display information such as date, shift break, and schedule.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
interface CalendarDay {
  /**
   * Indicates the sequence number of the 7 x 7 (7 x 6) grid layout on a calendar page by row.
   * The week sequence is one, two, three, four, five, six.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  index: number;

  /**
   * Lunar moon.
   * The week sequence is one, two, three, four, five, six.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  lunarMonth: string;

  /**
   * Lunar day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  lunarDay: string;

  /**
   * Day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  dayMark: string;

  /**
   * Indicates the off-duty flag information. The options are work and off.By default, the off-duty flag information is
   * not required.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  dayMarkValue: string;

  /**
   * Gregorian calendar year.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  year: number;

  /**
   * Gregorian calendar month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  month: number;

  /**
   * Gregorian calendar day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  day: number;

  /**
   * Indicates whether the default value is Lunar calendar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  isFirstOfLunar: boolean;

  /**
   * Indicates whether to display has Schedule.
   * The week sequence is one, two, three, four, five, six.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  hasSchedule: boolean;

  /**
   * Display Lunar Date.The week sequence is one, two, three, four, five, six.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  markLunarDay: boolean;
}

/**
 * Date object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
interface MonthData {
  /**
   * Gregorian calendar year.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  year: number;

  /**
   * Gregorian calendar month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  month: number;

  /**
   * CalendarDay.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  data: CalendarDay[];
}

/**
 * CurrentDayStyle object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
interface CurrentDayStyle {
  /**
   * Text color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  dayColor?: ResourceColor;

  /**
   * lunar Text color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  lunarColor?: ResourceColor;

  /**
   * lunar  Work and rest  text color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  markLunarColor?: ResourceColor;

  /**
   * Text fontSize.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  dayFontSize?: number;

  /**
   * lunar text fontSize.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  lunarDayFontSize?: number;

  /**
   * Single date height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  dayHeight?: number;

  /**
   * Single date width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  dayWidth?: number;

  /**
   * Gregorian calendar height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  gregorianCalendarHeight?: number;

  /**
   * Data y axis Off set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  dayYAxisOffset?: number;

  /**
   * Lunar data y axis Off set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  lunarDayYAxisOffset?: number;

  /**
   * Under score X Axis Off set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  underscoreXAxisOffset?: number;

  /**
   * Under score Y Axis Off set
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  underscoreYAxisOffset?: number;

  /**
   * Schedule marker X axis Off set
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  scheduleMarkerXAxisOffset?: number;

  /**
   * schedule Marker Y Axis Off set
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  scheduleMarkerYAxisOffset?: number;

  /**
   * Number of columns.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  colSpace?: number;

  /**
   * Daily five row space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  dailyFiveRowSpace?: number;

  /**
   * Daily six row space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  dailySixRowSpace?: number;

  /**
   * Single lunar height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  lunarHeight?: number;

  /**
   * Under score width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  underscoreWidth?: number;

  /**
   * Under score length.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  underscoreLength?: number;

  /**
   * Schedule marker radius.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  scheduleMarkerRadius?: number;

  /**
   * Boundary row offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  boundaryRowOffset?: number;

  /**
   * Boundary col offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  boundaryColOffset?: number;
}

/**
 * Non current day style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
interface NonCurrentDayStyle {
  /**
   * Non-current month day color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  nonCurrentMonthDayColor?: ResourceColor;

  /**
   * Lunar style of non-current month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  nonCurrentMonthLunarColor?: ResourceColor;

  /**
   * Non-Current Month Workday Marker Color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  nonCurrentMonthWorkDayMarkColor?: ResourceColor;

  /**
   * Non-Current Month Off Day Marker Color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  nonCurrentMonthOffDayMarkColor?: ResourceColor;
}

/**
 * Non current day style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
interface TodayStyle {
  /**
   * Style of focus color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  focusedDayColor?: ResourceColor;

  /**
   * Focus on Lunar Colors.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  focusedLunarColor?: ResourceColor;

  /**
   * Background color of the focus area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  focusedAreaBackgroundColor?: ResourceColor;

  /**
   * Focus area radius.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  focusedAreaRadius?: number;
}

/**
 * Week Style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
interface WeekStyle {
  /**
   * Style of week color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  weekColor?: ResourceColor;

  /**
   * Style of week day color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  weekendDayColor?: ResourceColor;

  /**
   * Style of lunar color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  weekendLunarColor?: ResourceColor;

  /**
   * Style of week font size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  weekFontSize?: number;

  /**
   * Style of week height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  weekHeight?: number;

  /**
   * Style of week width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  weekWidth?: number;

  /**
   * Style of week space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  weekAndDayRowSpace?: number;
}

/**
 * Work state style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
interface WorkStateStyle {
  /**
   * Style of day color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  workDayMarkColor?: ResourceColor;

  /**
   * Style of day color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  offDayMarkColor?: ResourceColor;

  /**
   * Style of day size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  workDayMarkSize?: number;

  /**
   * Style of day size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  offDayMarkSize?: number;

  /**
   * Style of width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  workStateWidth?: number;

  /**
   * Style of distance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  workStateHorizontalMovingDistance?: number;

  /**
   * Style of distance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  workStateVerticalMovingDistance?: number;
}

/**
 * Defines the struct of CalendarSelectedDate.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
declare interface CalendarSelectedDate {
  /**
   * Application year
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  year: number;

  /**
   * Application month
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  month: number;

  /**
   * Application day
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  day: number;
}

/**
 * Defines the struct of CalendarRequestedData.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
declare interface CalendarRequestedData {
  /**
   * Previous year
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  year: number;

  /**
   * Previous month
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  month: number;

  /**
   * Current Year
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  currentYear: number;

  /**
   * Current Month
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  currentMonth: number;

  /**
   * State of month
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  monthState: number;
}

/**
 * Calendar controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 */
declare class CalendarController {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  constructor();

  /**
   * Back to day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  backToToday();

  /**
   * To the specified element.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  goTo(value: { year: number; month: number; day: number });
}

/**
 * Calendar Interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 * @noninterop [since 10]
 */
interface CalendarInterface {
  /**
   * Set value.
   *
   * @param { object } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  (value: {
    date: { year: number; month: number; day: number };
    currentData: MonthData;
    preData: MonthData;
    nextData: MonthData;
    controller?: CalendarController;
  }): CalendarAttribute;
}

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 * @noninterop [since 10]
 */
declare class CalendarAttribute {
  /**
   * Specifies whether the component displays the lunar calendar information.
   *
   * @param { boolean } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  showLunar(value: boolean): CalendarAttribute;

  /**
   * Setting whether to display holiday information
   *
   * @param { boolean } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  showHoliday(value: boolean): CalendarAttribute;

  /**
   * Indicates whether the page can be scrolled.
   *
   * @param { boolean } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  needSlide(value: boolean): CalendarAttribute;

  /**
   * Set the start day of the week for the calendar.
   *
   * @param { number } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  startOfWeek(value: number): CalendarAttribute;

  /**
   * Set weekend. The default value is Sunday and Saturday.
   *
   * @param { number } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  offDays(value: number): CalendarAttribute;

  /**
   * Sets the sliding direction.
   *
   * @param { Axis } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  direction(value: Axis): CalendarAttribute;

  /**
   * Sets the date style in the current month.
   *
   * @param { CurrentDayStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  currentDayStyle(value: CurrentDayStyle): CalendarAttribute;

  /**
   * Sets the non-monthly date style.
   *
   * @param { NonCurrentDayStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  nonCurrentDayStyle(value: NonCurrentDayStyle): CalendarAttribute;

  /**
   * Set the date style for today.
   *
   * @param { TodayStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  todayStyle(value: TodayStyle): CalendarAttribute;

  /**
   * Sets the date style for the weekend.
   *
   * @param { WeekStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  weekStyle(value: WeekStyle): CalendarAttribute;

  /**
   * Sets the style of the working state.
   *
   * @param { WorkStateStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  workStateStyle(value: WorkStateStyle): CalendarAttribute;

  /**
   * Click a date to return the information about the date you clicked.
   *
   * @param { function } event
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  onSelectChange(event: (event: CalendarSelectedDate) => void): CalendarAttribute;

  /**
   * When you swipe to switch months, the information about the previous month and the next month is requested.
   *
   * @param { function } event
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @form [since 10]
   * @since 7 dynamiconly
   * @deprecated since 20
   */
  onRequestData(
    event: (event: CalendarRequestedData) => void,
  ): CalendarAttribute;
}

/**
 * Defines Calendar Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 * @noninterop [since 10]
 */
declare const Calendar: CalendarInterface;

/**
 * Defines Calendar Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @form [since 10]
 * @since 7 dynamiconly
 * @deprecated since 20
 * @noninterop [since 10]
 */
declare const CalendarInstance: CalendarAttribute;