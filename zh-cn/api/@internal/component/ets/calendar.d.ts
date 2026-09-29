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
 * 日历日期信息。
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
   * 表示日历页面上7 x 7（7 x 6）网格布局的行序号。
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
   * 农历月份。
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
   * 农历日。
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
   * 上下班状态。取值为work和off。
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
   * 上下班状态的显示文本。
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
   * 公历年。
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
   * 公历月。
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
   * 公历日。
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
   * 表示是否为农历月的第一天。
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
   * 表示是否有日程。
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
   * 表示是否显示农历日期。
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
 * 日期数据对象。
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
   * 公历年。
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
   * 公历月。
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
   * CalendarDay数组。
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
 * CurrentDayStyle对象。
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
   * 文本颜色。
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
   * 农历文本颜色。
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
   * 农历作息文本颜色。
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
   * 文本字体大小。
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
   * 农历文本字体大小。
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
   * 单个日期高度。
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
   * 单个日期宽度。
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
   * 公历日期高度。
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
   * 日期Y轴偏移量。
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
   * 农历日期Y轴偏移量。
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
   * 下划线X轴偏移量。
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
   * 下划线Y轴偏移量。
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
   * 日程标记X轴偏移量。
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
   * 日程标记Y轴偏移量。
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
   * 列数。
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
   * 每日五行间距。
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
   * 每日六行间距。
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
   * 单个农历高度。
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
   * 下划线宽度。
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
   * 下划线长度。
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
   * 日程标记半径。
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
   * 边界行偏移量。
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
   * 边界列偏移量。
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
 * 非当月日期样式。
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
   * 非当月日期颜色。
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
   * 非当月农历颜色。
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
   * 非当月工作日标记颜色。
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
   * 非当月休息日标记颜色。
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
 * 今日样式。
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
   * 聚焦日期颜色。
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
   * 聚焦农历颜色。
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
   * 聚焦区域背景颜色。
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
   * 聚焦区域半径。
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
 * 周样式。
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
   * 周颜色。
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
   * 周末日期颜色。
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
   * 周末农历颜色。
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
   * 周字体大小。
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
   * 周高度。
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
   * 周宽度。
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
   * 周间距。
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
 * 工作状态样式。
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
   * 工作日标记颜色。
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
   * 休息日标记颜色。
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
   * 工作日标记大小。
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
   * 休息日标记大小。
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
   * 工作状态宽度。
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
   * 工作状态水平移动距离。
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
   * 工作状态垂直移动距离。
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
 * 定义CalendarSelectedDate结构体。
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
   * 选中年份
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
   * 选中月份
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
   * 选中日期
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
 * 定义CalendarRequestedData结构体。
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
   * 请求年份
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
   * 请求月份
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
   * 当前年份
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
   * 当前月份
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
   * 月份状态
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
 * 日历控制器。
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
   * 构造函数。
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
   * 回到今天。
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
   * 跳转到指定日期。
   *
   * @param { object } value - 跳转的目标日期。<br>year: 目标年份。<br>month: 目标月份。<br>day: 目标
   *     日期。
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
 * 日历组件接口
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
   * 设置日历配置。
   *
   * @param { object } value - 日历配置信息。<br>date: 设置为当前日期的日期，包含year、month和day。<br>currentData:
   *     当月数据。<br>preData: 上月数据。<br>nextData: 下月数据。<br>controller: 日历控制器。
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
 * 定义Calendar组件的属性。
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
   * 设置是否显示农历信息。
   *
   * @param { boolean } value - 是否显示农历信息。值为true表示显示农历信息，值为false表示相反。
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
   * 设置是否显示节假日信息。
   *
   * @param { boolean } value - 是否显示节假日信息。值为true表示显示节假日信息，值为false表示
   *     相反。
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
   * 设置是否可以滑动翻页。
   *
   * @param { boolean } value - 是否可以滑动翻页。值为true表示可以滑动翻页，值为false表示相反。
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
   * 设置日历的每周起始日。
   *
   * @param { number } value - 每周起始日。取值范围为0到6，其中0表示周一，6表示周日。
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
   * 设置休息日。默认值为周六和周日。
   *
   * @param { number } value - 休息日，以位掩码表示。每一位代表一周中的一天，其中bit 0表示周一，bit 6表示
   *     周日。可通过组合对应位来设置多个休息日。
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
   * 设置滑动方向。
   *
   * @param { Axis } value - 滑动方向。取值为Axis.Vertical和Axis.Horizontal。
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
   * 设置当月日期样式。
   *
   * @param { CurrentDayStyle } value - 当月日期样式。
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
   * 设置非当月日期样式。
   *
   * @param { NonCurrentDayStyle } value - 非当月日期样式。
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
   * 设置今日日期样式。
   *
   * @param { TodayStyle } value - 今日日期样式。
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
   * 设置周末日期样式。
   *
   * @param { WeekStyle } value - 周末日期样式。
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
   * 设置工作状态样式。
   *
   * @param { WorkStateStyle } value - 工作状态样式。
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
   * 点击日期时返回所点击日期的信息。
   *
   * @param { function } event - 日期被点击时触发的回调。回调返回选中日期的信息。
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
   * 滑动切换月份时，请求上月和下月的信息。
   *
   * @param { function } event - 滑动切换月份时触发的回调。回调返回需请求的上月和下月信息。
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
 * 提供一个月视图组件，用于显示日期、轮休和日程等信息。
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
 * 定义Calendar组件实例。
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
