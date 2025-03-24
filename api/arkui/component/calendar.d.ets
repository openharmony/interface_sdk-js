/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder } from "./../stateManagement/runtime"
import { ResourceColor } from "./units"
import { Axis } from "./enums"
export interface CalendarDay {
    index: number;
    lunarMonth: string;
    lunarDay: string;
    dayMark: string;
    dayMarkValue: string;
    year: number;
    month: number;
    day: number;
    isFirstOfLunar: boolean;
    hasSchedule: boolean;
    markLunarDay: boolean;
}
export interface MonthData {
    year: number;
    month: number;
    data: Array<CalendarDay>;
}
export interface CurrentDayStyle {
    dayColor?: ResourceColor;
    lunarColor?: ResourceColor;
    markLunarColor?: ResourceColor;
    dayFontSize?: number;
    lunarDayFontSize?: number;
    dayHeight?: number;
    dayWidth?: number;
    gregorianCalendarHeight?: number;
    dayYAxisOffset?: number;
    lunarDayYAxisOffset?: number;
    underscoreXAxisOffset?: number;
    underscoreYAxisOffset?: number;
    scheduleMarkerXAxisOffset?: number;
    scheduleMarkerYAxisOffset?: number;
    colSpace?: number;
    dailyFiveRowSpace?: number;
    dailySixRowSpace?: number;
    lunarHeight?: number;
    underscoreWidth?: number;
    underscoreLength?: number;
    scheduleMarkerRadius?: number;
    boundaryRowOffset?: number;
    boundaryColOffset?: number;
}
export interface NonCurrentDayStyle {
    nonCurrentMonthDayColor?: ResourceColor;
    nonCurrentMonthLunarColor?: ResourceColor;
    nonCurrentMonthWorkDayMarkColor?: ResourceColor;
    nonCurrentMonthOffDayMarkColor?: ResourceColor;
}
export interface TodayStyle {
    focusedDayColor?: ResourceColor;
    focusedLunarColor?: ResourceColor;
    focusedAreaBackgroundColor?: ResourceColor;
    focusedAreaRadius?: number;
}
export interface WeekStyle {
    weekColor?: ResourceColor;
    weekendDayColor?: ResourceColor;
    weekendLunarColor?: ResourceColor;
    weekFontSize?: number;
    weekHeight?: number;
    weekWidth?: number;
    weekAndDayRowSpace?: number;
}
export interface WorkStateStyle {
    workDayMarkColor?: ResourceColor;
    offDayMarkColor?: ResourceColor;
    workDayMarkSize?: number;
    offDayMarkSize?: number;
    workStateWidth?: number;
    workStateHorizontalMovingDistance?: number;
    workStateVerticalMovingDistance?: number;
}
export interface CalendarSelectedDate {
    year: number;
    month: number;
    day: number;
}
export interface CalendarRequestedData {
    year: number;
    month: number;
    currentYear: number;
    currentMonth: number;
    monthState: number;
}
export interface Literal_Number_day_month_year {
    year: number;
    month: number;
    day: number;
}
export interface CalendarController {
    backToToday(): undefined
    goTo(value: Literal_Number_day_month_year): undefined
}
export interface Type_CalendarInterface_value {
    date: Literal_Number_day_month_year;
    currentData: MonthData;
    preData: MonthData;
    nextData: MonthData;
    controller?: CalendarController;
}
export type CalendarInterface = (value: Type_CalendarInterface_value) => CalendarAttribute;
export type Callback_CalendarSelectedDate_Void = (event: CalendarSelectedDate) => void;
export type Callback_CalendarRequestedData_Void = (event: CalendarRequestedData) => void;
export interface CalendarAttribute {
    @memo
    showLunar(value: boolean): this;
    @memo
    showHoliday(value: boolean): this;
    @memo
    needSlide(value: boolean): this;
    @memo
    startOfWeek(value: number): this;
    @memo
    offDays(value: number): this;
    @memo
    direction(value: Axis): this;
    @memo
    currentDayStyle(value: CurrentDayStyle): this;
    @memo
    nonCurrentDayStyle(value: NonCurrentDayStyle): this;
    @memo
    todayStyle(value: TodayStyle): this;
    @memo
    weekStyle(value: WeekStyle): this;
    @memo
    workStateStyle(value: WorkStateStyle): this;
    @memo
    onSelectChange(value: ((event: CalendarSelectedDate) => void)): this;
    @memo
    onRequestData(value: ((event: CalendarRequestedData) => void)): this;
}
@memo
@ComponentBuilder
export declare function Calendar(
    value: Type_CalendarInterface_value, 
    @memo
    content_?: () => void,
): CalendarAttribute
