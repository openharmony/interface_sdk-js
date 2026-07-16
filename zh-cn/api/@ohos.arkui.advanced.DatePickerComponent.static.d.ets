'use static';
/*
* Copyright (C) 2026 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkUI
 */

import { Callback } from '@ohos.base';
import { PropRef } from '@ohos.arkui.stateManagement';
import { Component, Builder } from '@ohos.arkui.component';

/**
 * DateMode枚举用于定义日期选择器的模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DateMode {
  /**
   * 日期显示三列：年、月、日。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DATE = 0,

  /**
   * 日期显示两列：年、月。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  YEAR_AND_MONTH = 1,

  /**
   * 定义以月和日显示日期的模式。在此模式下，当月份从12月变为1月时，年份不会增加；当月份从1月变为12月时，年份不会减少。年份保持当前设置的值不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MONTH_AND_DAY = 2
}

/**
 * DisplayMode枚举用于定义选择器的显示模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DisplayMode {
  /**
   * 仅显示日期。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DATE = 0,

  /**
   * 仅显示时间。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TIME = 1,

  /**
   * 同时显示日期和时间。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DATE_TIME = 2
}

/**
 * DatePickerComponentResult定义日期时间选择器的选择结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class DatePickerComponentResult {
  /**
   * 所选日期的年份。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  year?: int;

  /**
   * 所选日期的月份索引，从0开始，0表示1月，11表示12月。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  month?: int;

  /**
   * 所选日期的日。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  day?: int;

  /**
   * 所选时间的小时部分。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  hour?: int;

  /**
   * 所选时间的分钟部分。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  minute?: int;

  /**
   * 所选时间的秒部分。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  second?: int;
}

/**
 * TimeFormat枚举用于定义时间选择器的格式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum TimeFormat {
  /**
   * 显示时、分。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HOUR_MINUTE = 0,

  /**
   * 显示时、分、秒。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HOUR_MINUTE_SECOND = 1
}

/**
 * CommonOptions定义日期时间选择器的通用选项。
 *
 * > **说明：**
 * >
 * > - Date的使用请参考
 * > [TimePickerOptions](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-timepicker.md#timepickeroptions)。
 * >
 * > - DatePickerComponent的字体字号在14vp至16vp范围内自适应变化，当组件宽度过窄时，可能出现文本显示截断的情况。
 * >
 * > - 参数缺省或者设置为undefined时，均保持默认值。
 * >
 * > - 在[DateOptions]{@link DateOptions}中设置start、end、selected时仅日期部分（年月日）设置生效，
 * > 在[TimeOptions]{@link TimeOptions}中设置start、end、selected时仅时间部分（时分秒）设置生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class CommonOptions {
  /**
   * 选择器的起始日期或时间。
   *
   * 默认值：Date(1970, 0, 1, 0, 0, 0)
   *
   * 取值范围：[Date(0, 0, 1, 0, 0, 0), Date(10000, 11, 31,23, 59, 59)]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  start?: Date;

  /**
   * 选择器的结束日期或时间。
   *
   * 默认值：Date(2100, 12, 31, 23, 59, 59)
   *
   * 取值范围：[Date(0, 0, 1, 0, 0, 0), Date(10000, 11, 31,23, 59, 59)]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  end?: Date;

  /**
   * 选中的日期。
   * 默认值为当前系统日期或时间。
   *
   * @default current system date or time
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selected?: Date;

  /**
   * 设置是否启用循环模式。
   *
   * - true：启用循环模式。
   * - false：不启用循环模式。
   *
   * 默认值：true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  loop?: boolean;

  /**
   * 选择日期或时间后触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onChange?: Callback<DatePickerComponentResult>;

  /**
   * 选择器项被选中且滚动停止时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onScrollStop?: Callback<DatePickerComponentResult>;

  /**
   * 启用或禁用触控反馈。
   *
   * 默认值：true
   *
   * - true：开启触控反馈。
   * - false：不开启触控反馈。
   *
   * **说明**：
   *
   * 1. 设置为true后，其生效情况取决于系统的硬件是否支持。
   * 2. 开启触控反馈时，需要在工程的[module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions
   * 字段以开启振动权限，配置如下：
   *
   * "requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableHapticFeedback?: boolean;
}

/**
 * DateOptions定义日期选择器的选项。
 *
 * 继承于[CommonOptions]{@link CommonOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class DateOptions extends CommonOptions {
  /**
   * 定义日期选择器的模式。
   *
   * 默认值：DateMode.DATE
   *
   * @default DateMode.DATE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  mode?: DateMode;

  /**
   * 指定是否显示农历。
   *
   * - true：显示为农历。
   * - false：不显示为农历。
   *
   * 默认值：false
   *
   * **说明**：
   *
   * 仅在简体中文和繁体中文语言环境下生效，其他语言环境下设置该属性无效果。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  lunar?: boolean;
}

/**
 * TimeOptions定义时间选择器的选项。
 *
 * 继承于[CommonOptions]{@link CommonOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class TimeOptions extends CommonOptions {
  /**
   * 定义时间选择器的格式。
   *
   * 默认值：TimeFormat.HOUR_MINUTE
   *
   * @default TimeFormat.HOUR_MINUTE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  format?: TimeFormat;

  /**
   * 指定是否使用24小时制显示时间。
   *
   * - true：时间以24小时制展示。
   * - false：时间以12小时制展示。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  useMilitaryTime?: boolean;
}

/**
 * DatePickerComponentOptions定义日期时间选择器组件的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class DatePickerComponentOptions {
  /**
   * 选择器的显示模式。
   *
   * 默认值：DisplayMode.DATE
   *
   * @default DisplayMode.DATE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayMode?: DisplayMode;

  /**
   * 日期选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  dateOptions?: DateOptions;

  /**
   * 时间选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  timeOptions?: TimeOptions;
}

/**
 * DatePickerComponent组件用于选择日期（年月日）和时间（时分秒）。
 *
 * > **说明：**
 * >
 * > - 该组件接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Component
export declare struct DatePickerComponent {
  /**
   * 定义日期时间选择器组件的选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @PropRef
  options: DatePickerComponentOptions;
  /**
   * 构建组件的方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  build(): void;
}