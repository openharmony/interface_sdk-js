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
 * @arkts 1.2
 */


import { ResourceColor } from "./units";
import { Axis } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod, UICommonMethod } from "./common";
/**
 * Provides a monthly view component to display information such as date, shift break, and schedule.
 *
 * @interface CalendarDay
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export interface CalendarDay {
    /**
     * Indicates the sequence number of the 7 x 7 (7 x 6) grid layout on a calendar page by row.
     * The week sequence is one, two, three, four, five, six.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    index: number;
    /**
     * Lunar moon.
     * The week sequence is one, two, three, four, five, six.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    lunarMonth: string;
    /**
     * Lunar day.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    lunarDay: string;
    /**
     * Day.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    dayMark: string;
    /**
     * Indicates the off-duty flag information. The options are work and off.By default, the off-duty flag information is not required.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    dayMarkValue: string;
    /**
     * Gregorian calendar year.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    year: number;
    /**
     * Gregorian calendar month.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    month: number;
    /**
     * Gregorian calendar day.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    day: number;
    /**
     * Indicates whether the default value is Lunar calendar.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    isFirstOfLunar: boolean;
    /**
     * Indicates whether to display has Schedule.
     * The week sequence is one, two, three, four, five, six.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    hasSchedule: boolean;
    /**
     * Display Lunar Date.The week sequence is one, two, three, four, five, six.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    markLunarDay: boolean;
}
/**
 * Date object.
 *
 * @interface MonthData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export interface MonthData {
    /**
     * Gregorian calendar year.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    year: number;
    /**
     * Gregorian calendar month.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    month: number;
    /**
     * CalendarDay.
     *
     * @type { CalendarDay[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    data: CalendarDay[];
}
/**
 * CurrentDayStyle object.
 *
 * @interface CurrentDayStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export interface CurrentDayStyle {
    /**
     * Text color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    dayColor?: ResourceColor;
    /**
     * lunar Text color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    lunarColor?: ResourceColor;
    /**
     * lunar  Work and rest  text color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    markLunarColor?: ResourceColor;
    /**
     * Text fontSize.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    dayFontSize?: number;
    /**
     * lunar text fontSize.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    lunarDayFontSize?: number;
    /**
     * Single date height.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    dayHeight?: number;
    /**
     * Single date width.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    dayWidth?: number;
    /**
     * Gregorian calendar height.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    gregorianCalendarHeight?: number;
    /**
     * Data y axis Off set.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    dayYAxisOffset?: number;
    /**
     * Lunar data y axis Off set.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    lunarDayYAxisOffset?: number;
    /**
     * Under score X Axis Off set.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    underscoreXAxisOffset?: number;
    /**
     * Under score Y Axis Off set
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    underscoreYAxisOffset?: number;
    /**
     * Schedule marker X axis Off set
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    scheduleMarkerXAxisOffset?: number;
    /**
     * schedule Marker Y Axis Off set
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    scheduleMarkerYAxisOffset?: number;
    /**
     * Number of columns.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    colSpace?: number;
    /**
     * Daily five row space.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    dailyFiveRowSpace?: number;
    /**
     * Daily six row space.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    dailySixRowSpace?: number;
    /**
     * Single lunar height.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    lunarHeight?: number;
    /**
     * Under score width.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    underscoreWidth?: number;
    /**
     * Under score length.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    underscoreLength?: number;
    /**
     * Schedule marker radius.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    scheduleMarkerRadius?: number;
    /**
     * Boundary row offset.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    boundaryRowOffset?: number;
    /**
     * Boundary col offset.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    boundaryColOffset?: number;
}
/**
 * Non current day style.
 *
 * @interface NonCurrentDayStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export interface NonCurrentDayStyle {
    /**
     * Non-current month day color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    nonCurrentMonthDayColor?: ResourceColor;
    /**
     * Lunar style of non-current month.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    nonCurrentMonthLunarColor?: ResourceColor;
    /**
     * Non-Current Month Workday Marker Color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    nonCurrentMonthWorkDayMarkColor?: ResourceColor;
    /**
     * Non-Current Month Off Day Marker Color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    nonCurrentMonthOffDayMarkColor?: ResourceColor;
}
/**
 * Non current day style.
 *
 * @interface TodayStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export interface TodayStyle {
    /**
     * Style of focus color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    focusedDayColor?: ResourceColor;
    /**
     * Focus on Lunar Colors.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    focusedLunarColor?: ResourceColor;
    /**
     * Background color of the focus area.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    focusedAreaBackgroundColor?: ResourceColor;
    /**
     * Focus area radius.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    focusedAreaRadius?: number;
}
/**
 * Week Style.
 *
 * @interface WeekStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export interface WeekStyle {
    /**
     * Style of week color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    weekColor?: ResourceColor;
    /**
     * Style of week day color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    weekendDayColor?: ResourceColor;
    /**
     * Style of lunar color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    weekendLunarColor?: ResourceColor;
    /**
     * Style of week font size.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    weekFontSize?: number;
    /**
     * Style of week height.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    weekHeight?: number;
    /**
     * Style of week width.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    weekWidth?: number;
    /**
     * Style of week space.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    weekAndDayRowSpace?: number;
}
/**
 * Work state style.
 *
 * @interface WorkStateStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export interface WorkStateStyle {
    /**
     * Style of day color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    workDayMarkColor?: ResourceColor;
    /**
     * Style of day color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    offDayMarkColor?: ResourceColor;
    /**
     * Style of day size.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    workDayMarkSize?: number;
    /**
     * Style of day size.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    offDayMarkSize?: number;
    /**
     * Style of width.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    workStateWidth?: number;
    /**
     * Style of distance.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    workStateHorizontalMovingDistance?: number;
    /**
     * Style of distance.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    workStateVerticalMovingDistance?: number;
}
/**
 * Defines the struct of CalendarSelectedDate.
 *
 * @interface CalendarSelectedDate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export declare interface CalendarSelectedDate {
    /**
     * Application year
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    year: number;
    /**
     * Application month
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    month: number;
    /**
     * Application day
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    day: number;
}
/**
 * Defines the struct of CalendarRequestedData.
 *
 * @interface CalendarRequestedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export declare interface CalendarRequestedData {
    /**
     * Previous year
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    year: number;
    /**
     * Previous month
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    month: number;
    /**
     * Current Year
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    currentYear: number;
    /**
     * Current Month
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    currentMonth: number;
    /**
     * State of month
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    monthState: number;
}
/**
 * Defines the struct of DateOptions.
 *
 * @interface DateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export interface DateOptions {
    /**
     * Gregorian calendar year.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    year: number;
    /**
     * Gregorian calendar month.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    month: number;
    /**
     * Gregorian calendar day.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    day: number;
}
/**
 * Calendar controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 20
 */
export declare class CalendarController {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    constructor();
    /**
     * Back to day.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    backToToday(): void;
    /**
     * To the specified element.
     *
     * @param { DateOptions } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    goTo(value: DateOptions): void;
}
export declare interface CalendarAttribute {
    /**
     * Specifies whether the component displays the lunar calendar information.
     *
     * @param { boolean } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    showLunar(value: boolean | undefined): this;
    /**
     * Setting whether to display holiday information
     *
     * @param { boolean } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    showHoliday(value: boolean | undefined): this;
    /**
     * Indicates whether the page can be scrolled.
     *
     * @param { boolean } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    needSlide(value: boolean | undefined): this;
    /**
     * Set the start day of the week for the calendar.
     *
     * @param { number } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    startOfWeek(value: number | undefined): this;
    /**
     * Set weekend. The default value is Sunday and Saturday.
     *
     * @param { number } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    offDays(value: number | undefined): this;
    /**
     * Sets the sliding direction.
     *
     * @param { Axis } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    direction(value: Axis | undefined): this;
    /**
     * Sets the date style in the current month.
     *
     * @param { CurrentDayStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    currentDayStyle(value: CurrentDayStyle | undefined): this;
    /**
     * Sets the non-monthly date style.
     *
     * @param { NonCurrentDayStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    nonCurrentDayStyle(value: NonCurrentDayStyle | undefined): this;
    /**
     * Set the date style for today.
     *
     * @param { TodayStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    todayStyle(value: TodayStyle | undefined): this;
    /**
     * Sets the date style for the weekend.
     *
     * @param { WeekStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    weekStyle(value: WeekStyle | undefined): this;
    /**
     * Sets the style of the working state.
     *
     * @param { WorkStateStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    workStateStyle(value: WorkStateStyle | undefined): this;
    /**
     * Click a date to return the information about the date you clicked.
     *
     * @param { function } event
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    onSelectChange(event: ((event: CalendarSelectedDate) => void) | undefined): this;
    /**
     * When you swipe to switch months, the information about the previous month and the next month is requested.
     *
     * @param { function } event
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    onRequestData(event: ((event: CalendarRequestedData) => void) | undefined): this;
}
export declare interface UICalendarAttribute {
    /**
     * Specifies whether the component displays the lunar calendar information.
     *
     * @param { boolean } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    showLunar(value: boolean | undefined): this;
    /**
     * Setting whether to display holiday information
     *
     * @param { boolean } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    showHoliday(value: boolean | undefined): this;
    /**
     * Indicates whether the page can be scrolled.
     *
     * @param { boolean } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    needSlide(value: boolean | undefined): this;
    /**
     * Set the start day of the week for the calendar.
     *
     * @param { number } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    startOfWeek(value: number | undefined): this;
    /**
     * Set weekend. The default value is Sunday and Saturday.
     *
     * @param { number } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    offDays(value: number | undefined): this;
    /**
     * Sets the sliding direction.
     *
     * @param { Axis } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    direction(value: Axis | undefined): this;
    /**
     * Sets the date style in the current month.
     *
     * @param { CurrentDayStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    currentDayStyle(value: CurrentDayStyle | undefined): this;
    /**
     * Sets the non-monthly date style.
     *
     * @param { NonCurrentDayStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    nonCurrentDayStyle(value: NonCurrentDayStyle | undefined): this;
    /**
     * Set the date style for today.
     *
     * @param { TodayStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    todayStyle(value: TodayStyle | undefined): this;
    /**
     * Sets the date style for the weekend.
     *
     * @param { WeekStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    weekStyle(value: WeekStyle | undefined): this;
    /**
     * Sets the style of the working state.
     *
     * @param { WorkStateStyle } value
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    workStateStyle(value: WorkStateStyle | undefined): this;
    /**
     * Click a date to return the information about the date you clicked.
     *
     * @param { function } event
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    onSelectChange(event: ((event: CalendarSelectedDate) => void) | undefined): this;
    /**
     * When you swipe to switch months, the information about the previous month and the next month is requested.
     *
     * @param { function } event
     * @returns { CalendarAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 20
     */
    @memo
    onRequestData(event: ((event: CalendarRequestedData) => void) | undefined): this;
}

@memo
@ComponentBuilder
export declare function Calendar(
    
    @memo
    content_?: () => void,
): UICalendarAttribute