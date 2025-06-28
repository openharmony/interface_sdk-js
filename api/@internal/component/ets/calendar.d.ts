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

/*** if arkts 1.2 */
import { ResourceColor } from './units' 
import { Axis } from './enums'
/*** endif */

/**
 * Provides a monthly view component to display information such as date, shift break, and schedule.
 *
 * @interface CalendarDay
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Provides a monthly view component to display information such as date, shift break, and schedule.
 *
 * @interface CalendarDay
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface CalendarDay {
  /**
   * Indicates the sequence number of the 7 x 7 (7 x 6) grid layout on a calendar page by row.
   * The week sequence is one, two, three, four, five, six.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Indicates the sequence number of the 7 x 7 (7 x 6) grid layout on a calendar page by row.
   * The week sequence is one, two, three, four, five, six.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  index: number;

  /**
   * Lunar moon.
   * The week sequence is one, two, three, four, five, six.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Lunar moon.
   * The week sequence is one, two, three, four, five, six.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lunarMonth: string;

  /**
   * Lunar day.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Lunar day.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lunarDay: string;

  /**
   * Day.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Day.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dayMark: string;

  /**
   * Indicates the off-duty flag information. The options are work and off.By default, the off-duty flag information is not required.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Indicates the off-duty flag information. The options are work and off.By default, the off-duty flag information is not required.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dayMarkValue: string;

  /**
   * Gregorian calendar year.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Gregorian calendar year.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  year: number;

  /**
   * Gregorian calendar month.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Gregorian calendar month.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  month: number;

  /**
   * Gregorian calendar day.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Gregorian calendar day.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  day: number;

  /**
   * Indicates whether the default value is Lunar calendar.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Indicates whether the default value is Lunar calendar.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  isFirstOfLunar: boolean;

  /**
   * Indicates whether to display has Schedule.
   * The week sequence is one, two, three, four, five, six.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Indicates whether to display has Schedule.
   * The week sequence is one, two, three, four, five, six.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  hasSchedule: boolean;

  /**
   * Display Lunar Date.The week sequence is one, two, three, four, five, six.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Display Lunar Date.The week sequence is one, two, three, four, five, six.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  markLunarDay: boolean;
}

/**
 * Date object.
 *
 * @interface MonthData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Date object.
 *
 * @interface MonthData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface MonthData {
  /**
   * Gregorian calendar year.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Gregorian calendar year.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  year: number;

  /**
   * Gregorian calendar month.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Gregorian calendar month.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  month: number;

  /**
   * CalendarDay.
   *
   * @type { CalendarDay[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * CalendarDay.
   *
   * @type { CalendarDay[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  data: CalendarDay[];
}

/**
 * CurrentDayStyle object.
 *
 * @interface CurrentDayStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * CurrentDayStyle object.
 *
 * @interface CurrentDayStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface CurrentDayStyle {
  /**
   * Text color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Text color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dayColor?: ResourceColor;

  /**
   * lunar Text color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * lunar Text color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lunarColor?: ResourceColor;

  /**
   * lunar  Work and rest  text color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * lunar  Work and rest  text color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  markLunarColor?: ResourceColor;

  /**
   * Text fontSize.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Text fontSize.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dayFontSize?: number;

  /**
   * lunar text fontSize.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * lunar text fontSize.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lunarDayFontSize?: number;

  /**
   * Single date height.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Single date height.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dayHeight?: number;

  /**
   * Single date width.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Single date width.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dayWidth?: number;

  /**
   * Gregorian calendar height.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Gregorian calendar height.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  gregorianCalendarHeight?: number;

  /**
   * Data y axis Off set.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Data y axis Off set.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dayYAxisOffset?: number;

  /**
   * Lunar data y axis Off set.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Lunar data y axis Off set.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lunarDayYAxisOffset?: number;

  /**
   * Under score X Axis Off set.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Under score X Axis Off set.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  underscoreXAxisOffset?: number;

  /**
   * Under score Y Axis Off set
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Under score Y Axis Off set
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  underscoreYAxisOffset?: number;

  /**
   * Schedule marker X axis Off set
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Schedule marker X axis Off set
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  scheduleMarkerXAxisOffset?: number;

  /**
   * schedule Marker Y Axis Off set
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * schedule Marker Y Axis Off set
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  scheduleMarkerYAxisOffset?: number;

  /**
   * Number of columns.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Number of columns.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  colSpace?: number;

  /**
   * Daily five row space.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Daily five row space.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dailyFiveRowSpace?: number;

  /**
   * Daily six row space.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Daily six row space.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  dailySixRowSpace?: number;

  /**
   * Single lunar height.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Single lunar height.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lunarHeight?: number;

  /**
   * Under score width.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Under score width.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  underscoreWidth?: number;

  /**
   * Under score length.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Under score length.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  underscoreLength?: number;

  /**
   * Schedule marker radius.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Schedule marker radius.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  scheduleMarkerRadius?: number;

  /**
   * Boundary row offset.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Boundary row offset.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  boundaryRowOffset?: number;

  /**
   * Boundary col offset.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Boundary col offset.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  boundaryColOffset?: number;
}

/**
 * Non current day style.
 *
 * @interface NonCurrentDayStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Non current day style.
 *
 * @interface NonCurrentDayStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface NonCurrentDayStyle {
  /**
   * Non-current month day color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Non-current month day color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  nonCurrentMonthDayColor?: ResourceColor;

  /**
   * Lunar style of non-current month.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Lunar style of non-current month.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  nonCurrentMonthLunarColor?: ResourceColor;

  /**
   * Non-Current Month Workday Marker Color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Non-Current Month Workday Marker Color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  nonCurrentMonthWorkDayMarkColor?: ResourceColor;

  /**
   * Non-Current Month Off Day Marker Color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Non-Current Month Off Day Marker Color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  nonCurrentMonthOffDayMarkColor?: ResourceColor;
}

/**
 * Non current day style.
 *
 * @interface TodayStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Non current day style.
 *
 * @interface TodayStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface TodayStyle {
  /**
   * Style of focus color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of focus color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  focusedDayColor?: ResourceColor;

  /**
   * Focus on Lunar Colors.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Focus on Lunar Colors.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  focusedLunarColor?: ResourceColor;

  /**
   * Background color of the focus area.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Background color of the focus area.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  focusedAreaBackgroundColor?: ResourceColor;

  /**
   * Focus area radius.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Focus area radius.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  focusedAreaRadius?: number;
}

/**
 * Week Style.
 *
 * @interface WeekStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Week Style.
 *
 * @interface WeekStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface WeekStyle {
  /**
   * Style of week color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of week color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  weekColor?: ResourceColor;

  /**
   * Style of week day color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of week day color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  weekendDayColor?: ResourceColor;

  /**
   * Style of lunar color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of lunar color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  weekendLunarColor?: ResourceColor;

  /**
   * Style of week font size.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of week font size.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  weekFontSize?: number;

  /**
   * Style of week height.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of week height.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  weekHeight?: number;

  /**
   * Style of week width.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of week width.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  weekWidth?: number;

  /**
   * Style of week space.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of week space.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  weekAndDayRowSpace?: number;
}

/**
 * Work state style.
 *
 * @interface WorkStateStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Work state style.
 *
 * @interface WorkStateStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface WorkStateStyle {
  /**
   * Style of day color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of day color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  workDayMarkColor?: ResourceColor;

  /**
   * Style of day color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of day color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offDayMarkColor?: ResourceColor;

  /**
   * Style of day size.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of day size.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  workDayMarkSize?: number;

  /**
   * Style of day size.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of day size.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offDayMarkSize?: number;

  /**
   * Style of width.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of width.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  workStateWidth?: number;

  /**
   * Style of distance.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of distance.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  workStateHorizontalMovingDistance?: number;

  /**
   * Style of distance.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Style of distance.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  workStateVerticalMovingDistance?: number;
}

/**
 * Defines the struct of CalendarSelectedDate.
 *
 * @interface CalendarSelectedDate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Defines the struct of CalendarSelectedDate.
 *
 * @interface CalendarSelectedDate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface CalendarSelectedDate {
  /**
   * Application year
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Application year
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  year: number;

  /**
   * Application month
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Application month
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  month: number;

  /**
   * Application day
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Application day
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  day: number;
}

/**
 * Defines the struct of CalendarRequestedData.
 *
 * @interface CalendarRequestedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Defines the struct of CalendarRequestedData.
 *
 * @interface CalendarRequestedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface CalendarRequestedData {
  /**
   * Previous year
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Previous year
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  year: number;

  /**
   * Previous month
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Previous month
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  month: number;

  /**
   * Current Year
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Current Year
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  currentYear: number;

  /**
   * Current Month
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Current Month
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  currentMonth: number;

  /**
   * State of month
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * State of month
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  monthState: number;
}

/**
 * Calendar controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Calendar controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class CalendarController {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor();

  /**
   * Back to day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Back to day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 10
   */
  backToToday();

  /**
   * Back to day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 20
   * @arkts 1.2
   */
  backToToday():void;

  /**
   * To the specified element.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * To the specified element.
   *
   * @param { object } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 10
   */
  goTo(value: { year: number; month: number; day: number });
  /**
   * To the specified element.
   *
   * @param { CalendarSelectedDate } date
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 20
   * @arkts 1.2
   */
  goTo(date: CalendarSelectedDate): void;
}

/**
 * Defines the struct of CalendarRequestedMonths.
 *
 * @interface CalendarRequestedMonths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since 20
 * @arkts 1.2
 */
declare interface CalendarRequestedMonths {
  /**
   * Default selected year/month/day.
   * @type { CalendarSelectedDate } date
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 20
   * @arkts 1.2
   */
  date: CalendarSelectedDate;

  /**
   * Dates contained in the current month.
   * 
   * @type { MonthData } currentData
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 20
   * @arkts 1.2
   */
  currentData: MonthData;

  /**
   * Dates contained in the previous month.
   * 
   * @type { MonthData } preData
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 20
   * @arkts 1.2
   */
  preData: MonthData;

  /**
   * Dates contained in the next month.
   * 
   * @type { MonthData } nextData
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 20
   * @arkts 1.2
   */
  nextData: MonthData;

  /**
   * Calendar controller.
   * 
   * @type { ?CalendarController } controller
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 20
   * @arkts 1.2
   */
  controller?: CalendarController;
}

/**
 * Calendar Interface
 *
 * @interface CalendarInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Calendar Interface
 *
 * @interface CalendarInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface CalendarInterface {
  /**
   * Set value.
   *
   * @param { object } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Set value.
   *
   * @param { object } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 10
   */
  (value: {
    date: { year: number; month: number; day: number };
    currentData: MonthData;
    preData: MonthData;
    nextData: MonthData;
    controller?: CalendarController;
  }): CalendarAttribute;

  /**
   * Set value.
   *
   * @param { CalendarRequestedMonths } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 20
   * @arkts 1.2
   */
  (value: CalendarRequestedMonths): CalendarAttribute;
}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class CalendarAttribute {
  /**
   * Specifies whether the component displays the lunar calendar information.
   *
   * @param { boolean } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Specifies whether the component displays the lunar calendar information.
   *
   * @param { boolean } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showLunar(value: boolean): CalendarAttribute;

  /**
   * Setting whether to display holiday information
   *
   * @param { boolean } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Setting whether to display holiday information
   *
   * @param { boolean } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showHoliday(value: boolean): CalendarAttribute;

  /**
   * Indicates whether the page can be scrolled.
   *
   * @param { boolean } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Indicates whether the page can be scrolled.
   *
   * @param { boolean } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  needSlide(value: boolean): CalendarAttribute;

  /**
   * Set the start day of the week for the calendar.
   *
   * @param { number } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Set the start day of the week for the calendar.
   *
   * @param { number } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  startOfWeek(value: number): CalendarAttribute;

  /**
   * Set weekend. The default value is Sunday and Saturday.
   *
   * @param { number } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Set weekend. The default value is Sunday and Saturday.
   *
   * @param { number } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offDays(value: number): CalendarAttribute;

  /**
   * Sets the sliding direction.
   *
   * @param { Axis } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Sets the sliding direction.
   *
   * @param { Axis } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  direction(value: Axis): CalendarAttribute;

  /**
   * Sets the date style in the current month.
   *
   * @param { CurrentDayStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Sets the date style in the current month.
   *
   * @param { CurrentDayStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  currentDayStyle(value: CurrentDayStyle): CalendarAttribute;

  /**
   * Sets the non-monthly date style.
   *
   * @param { NonCurrentDayStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Sets the non-monthly date style.
   *
   * @param { NonCurrentDayStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  nonCurrentDayStyle(value: NonCurrentDayStyle): CalendarAttribute;

  /**
   * Set the date style for today.
   *
   * @param { TodayStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Set the date style for today.
   *
   * @param { TodayStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  todayStyle(value: TodayStyle): CalendarAttribute;

  /**
   * Sets the date style for the weekend.
   *
   * @param { WeekStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Sets the date style for the weekend.
   *
   * @param { WeekStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  weekStyle(value: WeekStyle): CalendarAttribute;

  /**
   * Sets the style of the working state.
   *
   * @param { WorkStateStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Sets the style of the working state.
   *
   * @param { WorkStateStyle } value
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  workStateStyle(value: WorkStateStyle): CalendarAttribute;

  /**
   * Click a date to return the information about the date you clicked.
   *
   * @param { function } event
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Click a date to return the information about the date you clicked.
   *
   * @param { function } event
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSelectChange(event: (event: CalendarSelectedDate) => void): CalendarAttribute;

  /**
   * When you swipe to switch months, the information about the previous month and the next month is requested.
   *
   * @param { function } event
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * When you swipe to switch months, the information about the previous month and the next month is requested.
   *
   * @param { function } event
   * @returns { CalendarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
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
 * @since 7
 */
/**
 * Defines Calendar Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since 10
 */
declare const Calendar: CalendarInterface;

/**
 * Defines Calendar Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * Defines Calendar Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since 10
 */
declare const CalendarInstance: CalendarAttribute;
