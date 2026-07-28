/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * 返回选中的时间结果，hour取值0-23，与展示制式无关。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TimePickerResult {
  /**
   * 选中时间的时。
   * 
   * 取值范围：[0-23]，与展示制式无关。
   *
   * @type { ?number } [since 8 - 10]
   * @type { number } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hour: number;

  /**
   * 选中时间的分。
   * 
   * 取值范围：[0-59]
   *
   * @type { ?number } [since 8 - 10]
   * @type { number } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  minute: number;

  /**
   * 选中时间的秒。
   * 
   * 取值范围：[0-59]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  second: number;
}

/**
 * 时间选择器的数据格式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TimePickerFormat {
  /**
   * 按照小时和分钟进行显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  HOUR_MINUTE,

  /**
   * Hour and minute and second
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  HOUR_MINUTE_SECOND
}

/**
 * 时间选择器组件的参数说明。
 * 
 * 在TimePicker组件滑动过程中修改TimePickerOptions中的属性，会导致这些属性无法生效。
 * 
 * > Date对象用于处理日期和时间，使用方式如下。
 * >
 * > - 方式1：new Date()
 * > 获取系统当前日期和时间。
 * >
 * > - 方式2：new Date(value: number | string)
 * >
 * > - 方式3：new Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number,
 * > seconds?: number, ms?: number)
 *
 * > **起始时间和结束时间的异常情形说明：**
 * > - 起始时间晚于结束时间：起始时间、结束时间都为默认值。
 * > - 选中时间早于起始时间：选中时间为起始时间。
 * > - 选中时间晚于结束时间：选中时间为结束时间。
 * > - 起始时间晚于当前系统时间，选中时间未设置：选中时间为起始时间。
 * > - 结束时间早于当前系统时间，选中时间未设置：选中时间为结束时间。
 * > - 时间格式不符合规范，如'01:61:61'：取默认值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TimePickerOptions {
  /**
   * 设置选中项的时间。
   * 
   * 默认值：当前系统时间
   * 
   * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected?: Date;

  /**
   * 指定需要显示的TimePicker的格式。
   * 
   * 默认值：TimePickerFormat.HOUR_MINUTE
   *
   * @default HOUR_MINUTE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  format?: TimePickerFormat;

  /**
   * 指定时间选择组件的起始时间。
   * 
   * 默认值：起始时间为00:00:00（小时=0，分钟=0）
   * 
   * > **说明：**
   * >
   * > 1. 仅设置的小时和分钟生效。
   * > 2. 设置了start或end且为非默认值的场景下，loop不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  start?: Date;

  /**
   * 指定时间选择组件的结束时间。
   * 
   * 默认值：结束时间为23:59:59（小时=23，分钟=59）
   * 
   * > **说明：**
   * >
   * > 1. 仅设置的小时和分钟生效。
   * > 2. 设置了start或end且为非默认值的场景下，loop不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  end?: Date;
}

/**
 * TimePicker是用于滑动选择时间的组件，支持12/24小时制、多种时间格式（小时/分钟/秒）、循环滚动、样式定制和时间范围限制等功能。适用于日程安排、
 * 时间预约、任务管理等需要用户选择时间的场景，能够提升用户体验，减少输入错误，并可快速集成到应用中。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 该组件不建议开发者在动效过程中修改属性数据。
 * >
 * > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置值
 * > $r('sys.float.ohos_id_picker_show_count_landscape')。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface TimePickerInterface {
  /**
   * 创建滑动选择器，默认使用24小时的时间区间。适用于日程安排、闹钟设置、时间记录等需要选择时间的场景。
   *
   * @param { TimePickerOptions } options - 配置时间选择组件的参数。当需要自定义初始选中时间、时间格式、时间范围等配置时传入此参数，
   * 不传入时使用默认配置（初始选中时间为当前系统时间，时间格式默认为小时和分钟，时间范围默认为00:00-23:59（默认结束时间为23:59:59））。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: TimePickerOptions): TimePickerAttribute;
}
/**
 * 时间、日期格式化时可设置的配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DateTimeOptions = import('../api/@ohos.intl').default.DateTimeOptions;

/**
 * 选择时间时触发该事件。
 *
 * @param { TimePickerResult } result - 选中的时间结果，hour取值0-23，与展示制式无关。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTimePickerChangeCallback = (result: TimePickerResult) => void;

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class TimePickerAttribute extends CommonMethod<TimePickerAttribute> {
  /**
   * 设置时间是否以24小时制展示，未通过该接口设置时，默认跟随系统设置展示。24小时制适用于精确的时间记录和调度场景，12小时制适用于日常闹钟设置等
   * 更直观的时间显示需求。
   *
   * @param { boolean } value - 时间是否以24小时制展示。
   *     <br>- true：时间以24小时制展示。
   *     <br>- false：时间以12小时制展示。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  useMilitaryTime(value: boolean): TimePickerAttribute;

  /**
   * 设置展示时间是否为24小时制，未通过该接口设置时，默认跟随系统设置展示。
   * 与[useMilitaryTime]{@link TimePickerAttribute#useMilitaryTime(value: boolean)}相比，
   * isMilitaryTime参数新增了对undefined类型的支持。
   *
   * @param { Optional<boolean> } isMilitaryTime - 展示时间是否为24小时制。
   *     <br>- true：展示时间为24小时制。
   *     <br>- false：展示时间为12小时制。
   *     <br>当isMilitaryTime的值为undefined时，跟随系统设置。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  useMilitaryTime(isMilitaryTime: Optional<boolean>): TimePickerAttribute;

  /**
   * 设置是否启用循环模式。循环模式适用于需要连续滚动选择时间的场景，非循环模式适用于固定时间范围的限制场景。
   *
   * @param { boolean } value - 是否启用循环模式。
   *     <br>- true：启用循环模式。
   *     <br>- false：不启用循环模式。
   *     <br>默认值：true
   *     <br>**说明：** 设置了start或end且为非默认值的场景下，loop不生效。
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  loop(value: boolean): TimePickerAttribute;

  /**
   * 设置是否启用循环模式。与[loop<sup>11+</sup>]{@link TimePickerAttribute#loop(value: boolean)}相比，
   * isLoop参数新增了对undefined类型的支持。
   * 
   * > **说明：**
   * >
   * > 设置了start或end且为非默认值的场景下，loop不生效。
   *
   * @param { Optional<boolean> } isLoop - 是否启用循环模式。
   *     <br>- true：启用循环模式。
   *     <br>- false：不启用循环模式。
   *     <br>默认值：true
   *     <br>当isLoop的值为undefined时，使用默认值。
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  loop(isLoop: Optional<boolean>): TimePickerAttribute;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。
   *
   * @param { PickerTextStyle } value - 边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号和字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '14fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle(value: PickerTextStyle): TimePickerAttribute;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。与
   * [disappearTextStyle<sup>10+</sup>]{@link TimePickerAttribute#disappearTextStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 边缘项的文本颜色、字号、字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '14fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>当style的值为undefined时，使用默认值。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。
   *
   * @param { PickerTextStyle } value - 待选项的文本颜色、字号、字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): TimePickerAttribute;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。与
   * [textStyle<sup>10+</sup>]{@link TimePickerAttribute#textStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 待选项的文本颜色、字号、字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>当style的值为undefined时，使用默认值。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;

  /**
   * 设置选中项的文本颜色、字号和字体粗细。
   *
   * @param { PickerTextStyle } value - 选中项的文本颜色、字号、字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff007dff',
   *     <br>font: {
   *     <br>size: '20fp', 
   *     <br>weight: FontWeight.Medium
   *     <br>}
   *     <br>}
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle(value: PickerTextStyle): TimePickerAttribute;

  /**
   * 设置选中项的文本颜色、字号及字体粗细。与
   * [selectedTextStyle<sup>10+</sup>]{@link TimePickerAttribute#selectedTextStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 选中项的文本颜色、字号、字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff007dff',
   *     <br>font: {
   *     <br>size: '20fp', 
   *     <br>weight: FontWeight.Medium
   *     <br>}
   *     <br>}
   *     <br>当style的值为undefined时，使用默认值。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;

  /**
   * 设置时分秒是否显示前导0。'2-digit'适用于需要统一格式显示的场景（如表格、报表），'numeric'适用于更简洁的显示需求。
   *
   * @param { DateTimeOptions } value - 设置时分秒是否显示前导0。
   *     <br>默认值：
   *     <br>hour: 24小时制默认为"2-digit"，设置hour是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"；
   * 12小时制默认为"numeric"，即没有前导0。
   *     <br>minute: 默认为"2-digit"，设置minute是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
   *     <br>second: 默认为"2-digit"，设置second是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
   *     <br> 当hour、minute、second的值设置为undefined时，显示效果与其默认值规则一致。
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dateTimeOptions(value: DateTimeOptions): TimePickerAttribute;

  /**
   * 设置时分秒是否显示前导0。与[dateTimeOptions<sup>12+</sup>]{@link TimePickerAttribute#dateTimeOptions(value: DateTimeOptions)}相比，
   * timeFormat参数新增了对undefined类型的支持。
   *
   * @param { Optional<DateTimeOptions> } timeFormat - 设置时分秒是否显示前导0，目前只支持设置hour、minute和second参数。
   *     <br>默认值：
   *     <br>hour: 24小时制默认为"2-digit"，设置hour是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"；
   * 12小时制默认为"numeric"，即没有前导0。
   *     <br>minute: 默认为"2-digit"，设置minute是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
   *     <br>second: 默认为"2-digit"，设置second是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
   *     <br> 当hour、minute、second的值设置为undefined时，显示效果与其默认值规则一致。
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  dateTimeOptions(timeFormat: Optional<DateTimeOptions>): TimePickerAttribute;

  /**
   * 滑动TimePicker后，时间选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。适用于需要在用户确认时间选择后执行保存、
   * 更新UI等操作的场景。
   * 
   * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，
   * 建议使用[onEnterSelectedArea]{@link TimePickerAttribute#onEnterSelectedArea}接口。需要注意的是，
   * 当[enableCascade]{@link TimePickerAttribute#enableCascade}设置为true时，由于上午/下午列与小时列存在联动关系，
   * 该回调的行为可能不符合预期，不建议在此场景下使用。
   *
   * @param { function } callback - Time in 24-hour format.
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: (value: TimePickerResult) => void): TimePickerAttribute;

  /**
   * 滑动TimePicker后，时间选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。
   * 与[onChange]{@link TimePickerAttribute#onChange(callback: (value: TimePickerResult) => void)}相比，
   * callback参数新增了对undefined类型的支持。
   * 
   * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，
   * 建议使用[onEnterSelectedArea]{@link TimePickerAttribute#onEnterSelectedArea}接口。需要注意的是，
   * 当[enableCascade]{@link TimePickerAttribute#enableCascade}设置为true时，由于上午/下午列与小时列存在联动关系，
   * 该回调的行为可能不符合预期，不建议在此场景下使用。
   *
   * @param { Optional<OnTimePickerChangeCallback> } callback - 选择时间时触发该回调。
   *     <br>当callback的值为undefined时，不使用回调函数。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(callback: Optional<OnTimePickerChangeCallback>): TimePickerAttribute;

  /**
   * 滑动TimePicker过程中，选项进入分割线区域内，触发该回调。适用于需要在滑动过程中实时更新UI、实时验证时间范围等需要快速响应的场景。
   * 与onChange相比，该回调触发时机更早，适合需要即时反馈的场景。
   * 
   * 与[onChange]{@link TimePickerAttribute#onChange(callback: (value: TimePickerResult) => void)}事件的差别在于，
   * 该事件的触发时机早于[onChange]{@link TimePickerAttribute#onChange(callback: (value: TimePickerResult) => void)}事件，
   * 当滑动列的滑动距离超过选中项高度的一半时，选项已经进入分割线区域内，会触发该事件。
   * 当[enableCascade]{@link TimePickerAttribute#enableCascade}设置为true时，
   * 由于上午/下午列与小时列存在联动关系（即上午/下午标识会根据小时数自动调整），不建议使用该回调。
   * 该回调标识的是滑动过程中选项进入分割线区域内的节点，而联动变化的选项并不涉及滑动，因此，回调的返回值中，仅当前滑动列的值会正常变化，
   * 其余未滑动列的值保持不变。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<TimePickerResult> } callback - 滑动TimePicker过程中，选项进入分割线区域时触发的回调。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea(callback: Callback<TimePickerResult>): TimePickerAttribute;

  /**
   * 设置是否开启触控反馈。
   * 
   * 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限，配置如下：
   * 
   * > **说明：**
   * >
   * > 从API version 18开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } enable - 设置是否开启触控反馈。
   *     <br>- true：开启触控反馈。
   *     <br>- false：不开启触控反馈。
   *     <br>默认值：true
   *     <br>设置为true后，若系统硬件不支持振动功能，则不会产生振动反馈。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  enableHapticFeedback(enable: boolean): TimePickerAttribute;

  /**
   * 设置是否开启触控反馈。
   * 与[enableHapticFeedback<sup>12+</sup>]{@link TimePickerAttribute#enableHapticFeedback(enable: boolean)}相比，
   * enable参数新增了对undefined类型的支持。
   * 
   * 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限，配置如下：
   *
   * @param { Optional<boolean> } enable - 设置是否开启触控反馈。
   *     <br>- true：开启触控反馈。
   *     <br>- false：不开启触控反馈。
   *     <br>默认值：true
   *     <br>当enable的值为undefined时，使用默认值。
   *     <br>设置为true后，若系统硬件不支持振动功能，则不会产生振动反馈。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): TimePickerAttribute;

  /**
   * 设置表冠灵敏度。高灵敏度适用于需要快速调整时间的场景，低灵敏度适用于需要精确调整时间的场景。
   *
   * @param { Optional<CrownSensitivity> } sensitivity - 表冠响应灵敏度。
   *     <br>默认值：CrownSensitivity.MEDIUM，表示响应速度适中。
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TimePickerAttribute;

  /**
   * 设置上午和下午的标识是否根据小时数自动切换，
   * 仅在[useMilitaryTime]{@link TimePickerAttribute#useMilitaryTime(value: boolean)}设置为false时生效。
   * 自动切换适用于闹钟、日程等注重操作效率和流畅体验的日常消费场景，手动切换适用于医疗、法律等对时间精确性要求严苛、不容歧义的场景。
   *
   * @param { boolean } enabled - 上午和下午的标识是否根据小时数自动切换，仅在useMilitaryTime设置为false时生效。
   *     <br>- true：自动切换。当enabled设置为true时，仅在loop参数同时为true时生效。
   *     <br>- false：不自动切换。上午/下午标识需手动选择，不会根据小时数自动调整。
   *     <br>默认值：false
   * @returns { TimePickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableCascade(enabled: boolean): TimePickerAttribute;
}

/**
 * 时间选择器弹窗选项。
 * 
 * 继承自[TimePickerOptions]{@link TimePickerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TimePickerDialogOptions extends TimePickerOptions {
  /**
   * 时间是否以24小时制展示。
   * 
   * - true：时间以24小时制展示。
   * - false：时间以12小时制展示。
   * 
   * 默认值：false
   * 
   * > **说明：** 当设置为false时，enableCascade参数才能生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  useMilitaryTime?: boolean;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。
   * 
   * 默认值：
   * 
   * <br>{
   * <br>color: '#ff182431',
   * <br>font: {
   * <br>size: '14fp',
   * <br>weight: FontWeight.Regular
   * <br>}
   * <br>}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。
   * 
   * > 默认值：
   * >
   * > <br>{
   * > <br>color: '#ff182431',
   * > <br>font: {
   * > <br>size: '16fp',
   * > <br>weight: FontWeight.Regular
   * > <br>}
   * > <br>}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle?: PickerTextStyle;

  /**
   * 设置确认按钮显示样式、重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、按钮是否默认响应Enter键。
   * 
   * > 默认值：请参考[PickerDialogButtonStyle]{@link PickerDialogButtonStyle}。
   *
   * > **说明：**
   * >
   * > 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
   * > 保持默认值false。
   * >
   * > 2. 按钮高度默认40vp，borderRadius单位为vp。在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
   * > [ROUNDED_RECTANGLE]{@link ButtonType#ROUNDED_RECTANGLE}，呈现效果依然是胶囊型按钮[Capsule]{@link ButtonType#Capsule}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置取消按钮显示样式、重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、按钮是否默认响应Enter键。
   * 
   * > 默认值：请参考[PickerDialogButtonStyle]{@link PickerDialogButtonStyle}。
   * 
   * > **说明：**
   * >
   * > 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
   * > 保持默认值false。
   * >
   * > 2. 按钮高度默认40vp，borderRadius单位为vp。在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
   * > [ROUNDED_RECTANGLE]{@link ButtonType#ROUNDED_RECTANGLE}，呈现效果依然是胶囊型按钮[Capsule]{@link ButtonType#Capsule}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置选中项的文本颜色、字号、字体粗细。
   * 
   * > 默认值：
   * >
   * > <br>{
   * > <br>color: '#ff007dff',
   * > <br>font: {
   * > <br>size: '20fp',
   * > <br>weight: FontWeight.Medium
   * > <br>}
   * > <br>}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
   *
   * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskRect?: Rectangle;

  /**
   * 设置弹窗在垂直方向上的对齐方式。
   *
   * 默认值：DialogAlignment.Default
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * 设置弹窗相对alignment所在位置的偏移量。
   * 
   * 默认值：{ dx: 0 , dy: 0 }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: Offset;

  /**
   * 点击弹窗中的“确定”按钮时触发该回调。回调参数为当前选中的时间值，类型为TimePickerResult。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAccept?: (value: TimePickerResult) => void;

  /**
   * 点击弹窗中的“取消”按钮时触发该回调，该回调无参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCancel?: () => void;

  /**
   * 滑动弹窗中的选择器后，选项归位至选中项位置时，触发该回调。回调参数为当前选中的时间值，类型为TimePickerResult。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange?: (value: TimePickerResult) => void;

  /**
   * 滑动过程中，当前滑动列滑动距离超过选中项高度的一半，选项进入分割线区域内，触发该回调。与onChange事件的差别在于，该事件在滑动过程中实时触发，
   * 适合需要实时监听滑动场景；onChange在选项归位至选中项位置后触发，适合需要确认最终选中值的场景。
   * 
   * > **说明：**
   * >
   * > 当enableCascade设置为true时，由于上午/下午列与小时列存在联动关系，不建议使用该回调。该回调标识的是滑动过程中选项进入分割线区域内的节点，
   * > 而联动变化的选项并不涉及滑动，因此，回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea?: Callback<TimePickerResult>;

  /**
   * 弹窗背板颜色。
   * 
   * 默认值：Color.Transparent
   * 
   * > **说明：**
   * >
   * > 1. 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则显示的颜色将不符合预期效果。
   * > 2. 从API版本26.0.0开始，设置systemMaterial后，backgroundColor不生效。
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 弹窗背板模糊材质。
   * 
   * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
   * 
   * > **说明：**
   * >
   * > 1. 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，
   * > 否则显示的颜色将不符合预期效果。
   * > 2. 从API版本26.0.0开始，设置systemMaterial后，backgroundBlurStyle不生效。
   *
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 背景模糊效果参数，用于自定义弹窗背景模糊的显示样式，支持配置颜色模式、自适应颜色、缩放比例等属性，实现不同的背景模糊视觉效果。
   * 
   * > **说明：**
   * >
   * > 未设置时沿用
   * > [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}
   * > 的默认效果（BlurStyle.COMPONENT_ULTRA_THICK）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 背景效果参数，用于自定义弹窗背景的显示效果，支持配置模糊半径、饱和度、亮度、颜色等属性，实现不同的背景视觉效果。
   * 
   * > **说明：**
   * >
   * > 未设置时不生效，此时弹窗背景模糊效果由
   * > [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}
   * > 决定；设置后将覆盖backgroundBlurStyle的效果。从API版本26.0.0开始，
   * > 设置systemMaterial后backgroundEffect与backgroundBlurStyle均不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * 设置上午和下午的标识是否根据小时数自动切换，仅在useMilitaryTime设置为false时生效。
   * 
   * - true：自动切换。
   * - false：不自动切换。
   * 
   * 默认值：false
   * 
   * 当enableCascade设置为true时，需要loop参数同时为true才能生效。loop用于控制选择器是否循环滚动。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableCascade?: boolean;

  /**
   * 弹窗弹出后的事件回调。
   * 
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 在onDidAppear内设置改变弹窗显示效果的回调事件，下次弹窗弹出时生效。
   * >
   * > 3. 快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
   * >
   * > 4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidAppear?: () => void;

  /**
   * 弹窗消失后的事件回调。
   * 
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDisappear?: () => void;

  /**
   * 弹窗显示动效前的事件回调。
   * 
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 在onWillAppear内设置改变弹窗显示效果的回调事件，下次弹窗弹出时生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear?: () => void;

  /**
   * 弹窗退出动效前的事件回调。
   * 
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear?: () => void;

  /**
   * 设置弹窗背板的阴影。
   * 
   * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。
   * 
   * > **说明：**
   * >
   * > 从API版本26.0.0开始，设置systemMaterial后，shadow不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * 设置时分是否显示前导0，目前只支持设置hour和minute参数，设置其他参数不生效。
   * 
   * > 默认值：
   * >
   * > - hour: 24小时制默认为"2-digit"，设置hour是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"；
   * > 12小时制默认为"numeric"，即没有前导0。
   * >
   * > - minute: 默认为"2-digit"，设置minute是否按照2位数字显示，如果实际数值小于10，则会补充前导0并显示，即为"0X"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dateTimeOptions?: DateTimeOptions;

  /**
   * 是否响应悬停态。悬停态指折叠屏等设备处于悬停折叠状态时的交互模式，而非鼠标悬停。
   * 
   * - true：响应悬停态。
   * - false：不响应悬停态。
   * 
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * 悬停态下弹窗默认展示区域。仅在enableHoverMode为true时生效。
   * 
   * 默认值：HoverModeAreaType.BOTTOM_SCREEN
   *
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * 设置是否开启触控反馈。
   * 
   * - true：开启触控反馈。
   * - false：不开启触控反馈。
   * 
   * 默认值：true
   * 
   * > **说明：**
   * >
   * > 1. 设置为true后，其生效情况取决于系统的硬件是否支持。
   * > 2. 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限，配置如下：
   * >
   * > "requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback?: boolean;
  /**
   * 设置弹窗的系统材质。
   * 
   * > **说明：**
   * >
   * > - 默认值：[ImmersiveOptions]{@link ImmersiveOptions}的style为ImmersiveStyle.ULTRA_THICK的
   * > [ImmersiveMaterial]{@link ImmersiveMaterial}对象。设置undefined时与默认值保持一致。
   * > - 不同的材质具有不同的效果，该接口影响背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * > 背景模糊
   * > [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions)}
   * > 、背景效果[backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}、边框颜色
   * > [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * > [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}，当设置系统材质时，上述接口不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;
  /**
   * 设置系统材质下弹窗的非线性动画模式。
   * 
   * > **默认值：** DistortionMode.DISTORTION_AUTO
   *
   * > **系统接口：** 此接口为系统接口。
   *
   * > **说明：** 当取值为 DISTORTION_AUTO 时，需设置
   * > [ImmersiveMaterial]{@link ImmersiveMaterial} 类型材质方可生效，并依据设备算力档位自动生效非线性效果（高中档算力设备生效，
   * > 低档算力设备不生效）。非线性动画会增加渲染开销，建议在低端设备上谨慎使用。
   * > 各枚举取值含义请参见[DistortionMode]{@link distortionmode}。
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;
  /**
   * 设置系统材质下弹窗的流光动画模式。
   * 
   * > **默认值：** EdgeLightMode.EDGELIGHT_AUTO
   * 
   * > **系统接口：** 此接口为系统接口。
   * 
   * > **说明：** 当取值为 EDGELIGHT_AUTO 时，需设置
   * > [ImmersiveMaterial]{@link ImmersiveMaterial} 类型材质方可生效，并依据设备算力档位自动生效流光效果（高档算力设备生效，
   * > 中低档算力设备不生效）。流光动画会增加渲染开销，建议在低端设备上谨慎使用。各枚举取值含义请参见[EdgeLightMode]{@link EdgeLightMode}。
   *
   * @default EdgeLightMode.EDGELIGHT_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;
}

/**
 * 以24小时的时间区间创建时间滑动选择器，展示在弹窗上。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TimePickerDialog {
  /**
   * 定义时间滑动选择器弹窗并弹出。
   * 
   * > **说明：**
   * >
   * > 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [showTimePickerDialog]{@link @ohos.arkui.UIContext:UIContext.showTimePickerDialog}来明确UI的执行上下文。
   *
   * @param { TimePickerDialogOptions } options - 配置时间选择器弹窗的参数。参数缺省时不弹出弹窗。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showTimePickerDialog
   */
  static show(options?: TimePickerDialogOptions);
}

/**
 * TimePicker是用于滑动选择时间的组件，支持12/24小时制、多种时间格式（小时/分钟/秒）、循环滚动、样式定制和时间范围限制等功能。
 * 适用于日程安排、时间预约、任务管理等需要用户选择时间的场景，能够提升用户体验，减少输入错误，并可快速集成到应用中。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 该组件不建议开发者在动效过程中修改属性数据。
 * >
 * > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。
 * > 可通过如下参数查看具体配置值$r('sys.float.ohos_id_picker_show_count_landscape')。
 * 
 * > ###### 子组件
 * >
 * > 该组件为基础组件，不建议包含子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const TimePicker: TimePickerInterface;

/**
 * 定义时间选择器组件实例。
 * 定义时间选择器组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const TimePickerInstance: TimePickerAttribute;