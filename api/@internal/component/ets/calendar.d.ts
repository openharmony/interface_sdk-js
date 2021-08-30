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

import {Axis, Color, Resource} from "./common";

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
  data: CalendarDay[];
}

export interface CurrentDayStyle {
  dayColor?: Color | number | string | Resource;
  lunarColor?: Color | number | string | Resource;
  markLunarColor?: Color | number | string | Resource;
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
  nonCurrentMonthDayColor?: Color | number | string | Resource;
  nonCurrentMonthLunarColor?: Color | number | string | Resource;
  nonCurrentMonthWorkDayMarkColor?: Color | number | string | Resource;
  nonCurrentMonthOffDayMarkColor?: Color | number | string | Resource;
}

export interface TodayStyle {
  focusedDayColor?: Color | number | string | Resource;
  focusedLunarColor?: Color | number | string | Resource;
  focusedAreaBackgroundColor?: Color | number | string | Resource;
  focusedAreaRadius?: number;
}

export interface WeekStyle {
  weekColor?: Color | number | string | Resource;
  weekendDayColor?: Color | number | string | Resource;
  weekendLunarColor?: Color | number | string | Resource;
  weekFontSize?: number;
  weekHeight?: number;
  weekWidth?: number;
  weekAndDayRowSpace?: number;
}

export interface WorkStateStyle {
  workDayMarkColor?: Color | number | string | Resource;
  offDayMarkColor?: Color | number | string | Resource;
  workDayMarkSize?: number;
  offDayMarkSize?: number;
  workStateWidth?: number;
  workStateHorizontalMovingDistance?: number;
  workStateVerticalMovingDistance?: number;
}

declare class CalendarController {
    constructor();
    backToToday();
}

interface Calendar {
  (value: { date: { year: number, month: number, day: number }, currentData: MonthData, preData: MonthData, nextData: MonthData, controller?: CalendarController }): Calendar;

  showLunar(value: boolean): Calendar;

  showHoliday(value: boolean): Calendar;

  needSlide(value: boolean): Calendar;

  startOfWeek(value: number): Calendar;

  offDays(value: number): Calendar;

  direction(value: Axis): Calendar;

  currentDayStyle(value: CurrentDayStyle): Calendar;

  nonCurrentDayStyle(value: NonCurrentDayStyle): Calendar;

  todayStyle(value: TodayStyle): Calendar;

  weekStyle(value: WeekStyle): Calendar;

  workStateStyle(value: WorkStateStyle): Calendar;

  onSelectChange(event: (event: { year: number, month: number, day: number }) => void): Calendar;

  onRequestData(event: (event: { year: number, month: number, currentYear: number, currentMonth: number, monthState: number }) => void): Calendar;
}

export declare const CalendarInterface: Calendar
