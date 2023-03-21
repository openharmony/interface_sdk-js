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
 * Provides a monthly view component to display information such as date, shift break, and schedule.
 * @since 7
 * @systemapi
 */
/**
 * Provides a monthly view component to display information such as date, shift break, and schedule.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
interface CalendarDay {
  /**
   * Indicates the sequence number of the 7 x 7 (7 x 6) grid layout on a calendar page by row.
   * The week sequence is one, two, three, four, five, six.
   * @since 7
   * @systemapi
   */
  /**
   * Indicates the sequence number of the 7 x 7 (7 x 6) grid layout on a calendar page by row.
   * The week sequence is one, two, three, four, five, six.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  index: number;

  /**
   * Lunar moon.
   * The week sequence is one, two, three, four, five, six.
   * @since 7
   * @systemapi
   */
  /**
   * Lunar moon.
   * The week sequence is one, two, three, four, five, six.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  lunarMonth: string;

  /**
   * Lunar day.
   * @since 7
   * @systemapi
   */
  /**
   * Lunar day.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  lunarDay: string;

  /**
   * Day.
   * @since 7
   * @systemapi
   */
  /**
   * Day.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  dayMark: string;

  /**
   * Indicates the off-duty flag information. The options are work and off.By default, the off-duty flag information is not required.
   * @since 7
   * @systemapi
   */
  /**
   * Indicates the off-duty flag information. The options are work and off.By default, the off-duty flag information is not required.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  dayMarkValue: string;

  /**
   * Gregorian calendar year.
   * @since 7
   * @systemapi
   */
  /**
   * Gregorian calendar year.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  year: number;

  /**
   * Gregorian calendar month.
   * @since 7
   * @systemapi
   */
  /**
   * Gregorian calendar month.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  month: number;

  /**
   * Gregorian calendar day.
   * @since 7
   * @systemapi
   */
  /**
   * Gregorian calendar day.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  day: number;

  /**
   *
   * Indicates whether the default value is Lunar calendar.
   * @since 7
   * @systemapi
   */
  /**
   *
   * Indicates whether the default value is Lunar calendar.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  isFirstOfLunar: boolean;

  /**
   * Indicates whether to display has Schedule.
   * The week sequence is one, two, three, four, five, six.
   * @since 7
   * @systemapi
   */
  /**
   * Indicates whether to display has Schedule.
   * The week sequence is one, two, three, four, five, six.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  hasSchedule: boolean;

  /**
   * Display Lunar Date.The week sequence is one, two, three, four, five, six.
   * @since 7
   * @systemapi
   */
  /**
   * Display Lunar Date.The week sequence is one, two, three, four, five, six.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  markLunarDay: boolean;
}

/**
 * Date object.
 * @since 7
 * @systemapi
 */
/**
 * Date object.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
interface MonthData {
  /**
   * Gregorian calendar year.
   * @since 7
   * @systemapi
   */
  /**
   * Gregorian calendar year.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  year: number;

  /**
   * Gregorian calendar month.
   * @since 7
   * @systemapi
   */
  /**
   * Gregorian calendar month.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  month: number;

  /**
   * CalendarDay.
   * @since 7
   * @systemapi
   */
  /**
   * CalendarDay.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  data: CalendarDay[];
}

/**
 * CurrentDayStyle object.
 * @since 7
 * @systemapi
 */
/**
 * CurrentDayStyle object.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
interface CurrentDayStyle {
  /**
   * Text color.
   * @since 7
   * @systemapi
   */
  /**
   * Text color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  dayColor?: ResourceColor;

  /**
   * lunar Text color.
   * @since 7
   * @systemapi
   */
  /**
   * lunar Text color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  lunarColor?: ResourceColor;

  /**
   * lunar  Work and rest  text color.
   * @since 7
   * @systemapi
   */
  /**
   * lunar  Work and rest  text color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  markLunarColor?: ResourceColor;

  /**
   * Text fontSize.
   * @since 7
   * @systemapi
   */
  /**
   * Text fontSize.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  dayFontSize?: number;

  /**
   * lunar text fontSize.
   * @since 7
   * @systemapi
   */
  /**
   * lunar text fontSize.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  lunarDayFontSize?: number;

  /**
   * Single date height.
   * @since 7
   * @systemapi
   */
  /**
   * Single date height.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  dayHeight?: number;

  /**
   * Single date width.
   * @since 7
   * @systemapi
   */
  /**
   * Single date width.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  dayWidth?: number;

  /**
   * Gregorian calendar height.
   * @since 7
   * @systemapi
   */
  /**
   * Gregorian calendar height.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  gregorianCalendarHeight?: number;

  /**
   * Data y axis Off set.
   * @since 7
   * @systemapi
   */
  /**
   * Data y axis Off set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  dayYAxisOffset?: number;

  /**
   * Lunar data y axis Off set.
   * @since 7
   * @systemapi
   */
  /**
   * Lunar data y axis Off set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  lunarDayYAxisOffset?: number;

  /**
   * Under score X Axis Off set.
   * @since 7
   * @systemapi
   */
  /**
   * Under score X Axis Off set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  underscoreXAxisOffset?: number;

  /**
   * Under score Y Axis Off set
   * @since 7
   * @systemapi
   */
  /**
   * Under score Y Axis Off set
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  underscoreYAxisOffset?: number;

  /**
   * Schedule marker X axis Off set
   * @since 7
   * @systemapi
   */
  /**
   * Schedule marker X axis Off set
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  scheduleMarkerXAxisOffset?: number;

  /**
   * schedule Marker Y Axis Off set
   * @since 7
   * @systemapi
   */
  /**
   * schedule Marker Y Axis Off set
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  scheduleMarkerYAxisOffset?: number;

  /**
   * Number of columns.
   * @since 7
   * @systemapi
   */
  /**
   * Number of columns.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  colSpace?: number;

  /**
   * Daily five row space.
   * @since 7
   * @systemapi
   */
  /**
   * Daily five row space.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  dailyFiveRowSpace?: number;

  /**
   * Daily six row space.
   * @since 7
   * @systemapi
   */
  /**
   * Daily six row space.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  dailySixRowSpace?: number;

  /**
   * Single lunar height.
   * @since 7
   * @systemapi
   */
  /**
   * Single lunar height.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  lunarHeight?: number;

  /**
   * Under score width.
   * @since 7
   * @systemapi
   */
  /**
   * Under score width.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  underscoreWidth?: number;

  /**
   * Under score length.
   * @since 7
   * @systemapi
   */
  /**
   * Under score length.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  underscoreLength?: number;

  /**
   * Schedule marker radius.
   * @since 7
   * @systemapi
   */
  /**
   * Schedule marker radius.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  scheduleMarkerRadius?: number;

  /**
   * Boundary row offset.
   * @since 7
   * @systemapi
   */
  /**
   * Boundary row offset.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  boundaryRowOffset?: number;

  /**
   * Boundary col offset.
   * @since 7
   * @systemapi
   */
  /**
   * Boundary col offset.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  boundaryColOffset?: number;
}

/**
 * Non current day style.
 * @since 7
 * @systemapi
 */
/**
 * Non current day style.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
interface NonCurrentDayStyle {
  /**
   * Non-current month day color.
   * @since 7
   * @systemapi
   */
  /**
   * Non-current month day color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  nonCurrentMonthDayColor?: ResourceColor;

  /**
   * Lunar style of non-current month.
   * @since 7
   * @systemapi
   */
  /**
   * Lunar style of non-current month.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  nonCurrentMonthLunarColor?: ResourceColor;

  /**
   * Non-Current Month Workday Marker Color.
   * @since 7
   * @systemapi
   */
  /**
   * Non-Current Month Workday Marker Color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  nonCurrentMonthWorkDayMarkColor?: ResourceColor;

  /**
   * Non-Current Month Off Day Marker Color.
   * @since 7
   * @systemapi
   */
  /**
   * Non-Current Month Off Day Marker Color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  nonCurrentMonthOffDayMarkColor?: ResourceColor;
}

/**
 * Non current day style.
 * @since 7
 * @systemapi
 */
/**
 * Non current day style.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
interface TodayStyle {
  /**
   * Style of focus color.
   * @since 7
   * @systemapi
   */
  /**
   * Style of focus color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  focusedDayColor?: ResourceColor;

  /**
   * Focus on Lunar Colors.
   * @since 7
   * @systemapi
   */
  /**
   * Focus on Lunar Colors.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  focusedLunarColor?: ResourceColor;

  /**
   * Background color of the focus area.
   * @since 7
   * @systemapi
   */
  /**
   * Background color of the focus area.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  focusedAreaBackgroundColor?: ResourceColor;

  /**
   * Focus area radius.
   * @since 7
   * @systemapi
   */
  /**
   * Focus area radius.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  focusedAreaRadius?: number;
}

/**
 * Week Style.
 * @since 7
 * @systemapi
 */
/**
 * Week Style.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
interface WeekStyle {
  /**
   * Style of week color.
   * @since 7
   * @systemapi
   */
  /**
   * Style of week color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  weekColor?: ResourceColor;

  /**
   * Style of week day color.
   * @since 7
   * @systemapi
   */
  /**
   * Style of week day color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  weekendDayColor?: ResourceColor;

  /**
   * Style of lunar color.
   * @since 7
   * @systemapi
   */
  /**
   * Style of lunar color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  weekendLunarColor?: ResourceColor;

  /**
   * Style of week font size.
   * @since 7
   * @systemapi
   */
  /**
   * Style of week font size.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  weekFontSize?: number;

  /**
   * Style of week height.
   * @since 7
   * @systemapi
   */
  /**
   * Style of week height.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  weekHeight?: number;

  /**
   * Style of week width.
   * @since 7
   * @systemapi
   */
  /**
   * Style of week width.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  weekWidth?: number;

  /**
   * Style of week space.
   * @since 7
   * @systemapi
   */
  /**
   * Style of week space.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  weekAndDayRowSpace?: number;
}

/**
 * Work state style.
 * @since 7
 * @systemapi
 */
/**
 * Work state style.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
interface WorkStateStyle {
  /**
   * Style of day color.
   * @since 7
   * @systemapi
   */
  /**
   * Style of day color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  workDayMarkColor?: ResourceColor;

  /**
   * Style of day color.
   * @since 7
   * @systemapi
   */
  /**
   * Style of day color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  offDayMarkColor?: ResourceColor;

  /**
   * Style of day size.
   * @since 7
   * @systemapi
   */
  /**
   * Style of day size.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  workDayMarkSize?: number;

  /**
   * Style of day size.
   * @since 7
   * @systemapi
   */
  /**
   * Style of day size.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  offDayMarkSize?: number;

  /**
   * Style of width.
   * @since 7
   * @systemapi
   */
  /**
   * Style of width.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  workStateWidth?: number;

  /**
   * Style of distance.
   * @since 7
   * @systemapi
   */
  /**
   * Style of distance.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  workStateHorizontalMovingDistance?: number;

  /**
   * Style of distance.
   * @since 7
   * @systemapi
   */
  /**
   * Style of distance.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  workStateVerticalMovingDistance?: number;
}

/**
 * Calendar controller.
 * @since 7
 * @systemapi
 */
/**
 * Calendar controller.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
declare class CalendarController {
  /**
   * Constructor.
   * @since 7
   * @systemapi
   */
  /**
   * Constructor.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  constructor();

  /**
   * Back to day.
   * @since 7
   * @systemapi
   */
  /**
   * Back to day.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  backToToday();

  /**
   * To the specified element.
   * @since 7
   * @systemapi
   */
  /**
   * To the specified element.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  goTo(value: { year: number; month: number; day: number });
}

/**
 * @since 7
 * @systemapi
 */
/**
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
interface CalendarInterface {
  /**
   * Set value.
   * @since 7
   * @systemapi
   */
  /**
   * Set value.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
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
 * @since 7
 * @systemapi
 */
/**
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
declare class CalendarAttribute {
  /**
   * Specifies whether the component displays the lunar calendar information.
   * @since 7
   * @systemapi
   */
  /**
   * Specifies whether the component displays the lunar calendar information.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  showLunar(value: boolean): CalendarAttribute;

  /**
   * Setting whether to display holiday information
   * @since 7
   * @systemapi
   */
  /**
   * Setting whether to display holiday information
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  showHoliday(value: boolean): CalendarAttribute;

  /**
   * Indicates whether the page can be scrolled.
   * @since 7
   * @systemapi
   */
  /**
   * Indicates whether the page can be scrolled.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  needSlide(value: boolean): CalendarAttribute;

  /**
   * Set the start day of the week for the calendar.
   * @since 7
   * @systemapi
   */
  /**
   * Set the start day of the week for the calendar.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  startOfWeek(value: number): CalendarAttribute;

  /**
   * Set weekend. The default value is Sunday and Saturday.
   * @since 7
   * @systemapi
   */
  /**
   * Set weekend. The default value is Sunday and Saturday.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  offDays(value: number): CalendarAttribute;

  /**
   * Sets the sliding direction.
   * @since 7
   * @systemapi
   */
  /**
   * Sets the sliding direction.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  direction(value: Axis): CalendarAttribute;

  /**
   * Sets the date style in the current month.
   * @since 7
   * @systemapi
   */
  /**
   * Sets the date style in the current month.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  currentDayStyle(value: CurrentDayStyle): CalendarAttribute;

  /**
   * Sets the non-monthly date style.
   * @since 7
   * @systemapi
   */
  /**
   * Sets the non-monthly date style.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  nonCurrentDayStyle(value: NonCurrentDayStyle): CalendarAttribute;

  /**
   * Set the date style for today.
   * @since 7
   * @systemapi
   */
  /**
   * Set the date style for today.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  todayStyle(value: TodayStyle): CalendarAttribute;

  /**
   * Sets the date style for the weekend.
   * @since 7
   * @systemapi
   */
  /**
   * Sets the date style for the weekend.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  weekStyle(value: WeekStyle): CalendarAttribute;

  /**
   * Sets the style of the working state.
   * @since 7
   * @systemapi
   */
  /**
   * Sets the style of the working state.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  workStateStyle(value: WorkStateStyle): CalendarAttribute;

  /**
   * Click a date to return the information about the date you clicked.
   * @since 7
   * @systemapi
   */
  /**
   * Click a date to return the information about the date you clicked.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  onSelectChange(event: (event: { year: number; month: number; day: number }) => void): CalendarAttribute;

  /**
   * When you swipe to switch months, the information about the previous month and the next month is requested.
   * @since 7
   * @systemapi
   */
  /**
   * When you swipe to switch months, the information about the previous month and the next month is requested.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @systemapi
   */
  onRequestData(
    event: (event: {
      year: number;
      month: number;
      currentYear: number;
      currentMonth: number;
      monthState: number;
    }) => void,
  ): CalendarAttribute;
}

/**
 * Defines Calendar Component.
 * @since 7
 * @systemapi
 */
/**
 * Defines Calendar Component.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
declare const Calendar: CalendarInterface;

/**
 * Defines Calendar Component instance.
 * @since 7
 * @systemapi
 */
/**
 * Defines Calendar Component instance.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @systemapi
 */
declare const CalendarInstance: CalendarAttribute;
