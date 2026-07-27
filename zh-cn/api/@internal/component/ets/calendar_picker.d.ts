/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * 对齐方式类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum CalendarAlign {
  /**
   * 设置选择器与入口组件的对齐方式为左对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START = 0,
  /**
   * 设置选择器与入口组件的对齐方式为居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER = 1,
  /**
   * 设置选择器与入口组件的对齐方式为右对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END = 2
}

/**
 * 日历选择器组件的参数说明。
 * 
 * ###### start和end设置规则
 *
 * > 日期异常场景说明：
 * > - start日期晚于end日期：start日期、end日期都设置无效，选中日期为默认值
 * > - 选中日期早于start日期：选中日期为start日期
 * > - 选中日期晚于end日期：选中日期为end日期
 * > - start日期晚于当前系统日期，选中日期未设置：选中日期为start日期
 * > - end日期早于当前系统日期，选中日期未设置：选中日期为end日期
 * > - 日期格式不符合规范，如`1999-13-32`：start日期或end日期设置无效，选中日期取默认值
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CalendarOptions {
  /**
   * 设置日期选中态底板样式。
   * 
   * > 取值范围：[0.0, 16.0]
   * 
   * > 单位：vp
   * 
   * > 默认值：16.0，即底板样式为圆形。
   * 
   * > **说明：**
   * >
   * > 当hintRadius为0.0时表示底板样式为直角矩形；当hintRadius为(0.0, 16.0)时，底板样式为圆角矩形；当hintRadius为16.0时，
   * > 底板样式为圆形；当hintRadius为负数或大于16.0时，恢复为默认值16.0。
   *
   * @default 16.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  hintRadius?: number | Resource;

  /**
   * 设置选中项的日期。当需要预设选中日期时传入此参数，不需要预设时使用当前系统日期。选中的日期未设置或日期格式不符合规范则为默认值。选中日期与
   * start、end参数的配合关系见[start和end设置规则]{@link CalendarOptions}。
   * 
   * > 默认值：当前系统日期。
   * 
   * > 取值范围：[Date('0001-01-01'), Date('5000-12-31')]
   *
   * @default current system date
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected?: Date;

  /**
   * 设置开始日期。
   * 
   * > 默认值：Date('0001-01-01')
   * 
   * > 取值范围：[Date('0001-01-01'), Date('5000-12-31')]
   * 
   * > **说明：** 若start日期晚于end日期，则start日期、end日期都设置无效，选中日期为默认值。
   * > 详见[start和end设置规则]{@link CalendarOptions}。
   *
   * @default Date('0001-01-01')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  start?: Date;

  /**
   * 设置结束日期。
   * 
   * > 默认值：Date('5000-12-31')
   * 
   * > 取值范围：[Date('0001-01-01'), Date('5000-12-31')]
   * 
   * > **说明：** 若start日期晚于end日期，则start日期、end日期都设置无效，选中日期为默认值。
   * > 详见[start和end设置规则]{@link CalendarOptions}。
   *
   * @default Date('5000-12-31')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  end?: Date;

  /**
   * 设置禁用日期区间。不传此参数时不禁用任何日期。
   * 
   * > **说明：**
   * >
   * > 1. 若日期区间内的开始日期或结束日期未设置或设置为异常值，则该日期区间无效。
   * > 2. 若在日期区间内，结束日期早于开始日期，则该日期区间无效。
   * > 3. 当在入口区选定某日期，通过上下箭头调整日期进行增加或减少操作时，若遇到禁用日期，系统将自动跳过整个禁用区间。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  disabledDateRange?: DateRange[];
}

/**
 * 日历选择器组件，提供下拉日历弹窗，用户可快速选择日期。适用于需要用户选择具体日期的场景，如预订系统、日程安排、日期筛选等，提供直观的日历视图，
 * 提升用户日期输入体验。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
interface CalendarPickerInterface {
  /**
   * 日历选择器。
   *
   * @param { CalendarOptions } options - 配置日历选择器组件的参数。未设置该参数时使用默认配置。
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (options?: CalendarOptions): CalendarPickerAttribute;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare class CalendarPickerAttribute extends CommonMethod<CalendarPickerAttribute> {
  /**
   * 设置选择器与入口组件的对齐方式。
   *
   * @param { CalendarAlign } alignType - 对齐方式的类型。
   *     <br>默认值：CalendarAlign.END
   * @param { Offset } offset - 按照对齐方式对齐后，选择器相对入口组件的偏移量。
   *     <br>默认值：{dx: 0, dy: 0}
   *     <br>单位：vp
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  edgeAlign(alignType: CalendarAlign, offset?: Offset): CalendarPickerAttribute;
  /**
   * 设置选择器与入口组件的对齐方式。
   * 与[edgeAlign]{@link CalendarPickerAttribute#edgeAlign(alignType: CalendarAlign, offset?: Offset)}相比，
   * alignType参数新增了对undefined类型的支持。
   *
   * @param { Optional<CalendarAlign> } alignType - 对齐方式的类型。
   *     <br>默认值：CalendarAlign.END
   *     <br>当alignType的值为undefined时，使用默认值。
   * @param { Offset } offset - 按照对齐方式对齐后，选择器相对入口组件的偏移量。
   *     <br>默认值：{dx: 0, dy: 0}
   *     <br>单位：vp
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  edgeAlign(alignType: Optional<CalendarAlign>, offset?: Offset): CalendarPickerAttribute;

  /**
   * 设置入口区的文本颜色、字号、字体粗细。
   *
   * @param { PickerTextStyle } value - 设置入口区的文本颜色、字号、字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): CalendarPickerAttribute;

  /**
   * 设置入口区的文本颜色、字号、字体粗细。与[textStyle]{@link CalendarPickerAttribute#textStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 设置入口区的文本颜色、字号、字体粗细。
   *     <br>默认值：
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp', 
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>当style的值为undefined时，使用默认值。
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): CalendarPickerAttribute;

  /**
   * 选择日期时触发该事件。不能通过双向绑定的状态变量触发。
   *
   * @param { function } callback - Selected date value. [since 10 - 17]
   * @param { Callback<Date> } callback - 日期选择时触发的回调函数。回调参数为Date类型的选中日期值，开发者可在回调函数中获取用户选中的日
   * 期并进行相应处理。 [since 18]
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onChange(callback: Callback<Date>): CalendarPickerAttribute;

  /**
   * 选择日期时触发该事件。不能通过双向绑定的状态变量触发。
   * 与[onChange]{@link CalendarPickerAttribute#onChange(callback: Callback<Date>)}相比，callback参数新增了对undefined类型的
   * 支持。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<Callback<Date>> } callback - 日期选择时触发的回调函数，回调参数为选中的日期值。
   *     <br>当callback的值为undefined时，不使用回调函数。
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(callback: Optional<Callback<Date>>): CalendarPickerAttribute;

  /**
   * 设置日历选择器中系统当前日期是否保持高亮显示。
   *
   * @param { boolean } enabled - 设置日历选择器中系统当前日期是否保持高亮显示。
   *     <br>- true：系统当前日期在日历选择器内保持高亮显示。
   *     <br>- false：系统当前日期在日历选择器内不保持高亮显示。
   *     <br>默认值：false
   * @returns { CalendarPickerAttribute } the attribute of the calendar picker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  markToday(enabled: boolean): CalendarPickerAttribute;
}

/**
 * 日历选择器弹窗选项。
 * 
 * 继承自[CalendarOptions]{@link CalendarOptions}。
 * 
 * > **说明：**
 * >
 * > 在应用窗口缩小过程中，弹窗的宽度会被不断压缩，当缩小到一定程度时会导致其内容无法完整显示，保证CalendarPickerDialog内容能够完整显示的最小
 * > 窗口宽度为386vp。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CalendarDialogOptions extends CalendarOptions {
  /**
   * 点击弹窗中的“确定”按钮时触发该回调。
   * 
   * 回调函数的参数表示选中的日期值。
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?Callback<Date> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onAccept?: Callback<Date>;

  /**
   * 点击弹窗中的“取消”按钮时触发该回调。
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onCancel?: VoidCallback;

  /**
   * 选择弹窗中日期使当前选中项改变时触发该回调。
   * 
   * 回调函数的参数表示选中的日期值。
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?Callback<Date> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onChange?: Callback<Date>;

  /**
   * 弹窗背板颜色。
   * 
   * > 默认值：Color.Transparent
   * 
   * > **说明：**
   * >
   * > 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则背景颜色显示效果不符合预期。
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
   * > 默认值：BlurStyle.COMPONENT_ULTRA_THICK
   * 
   * > **说明：**
   * >
   * > 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则背景颜色显示效果
   * > 不符合预期。设置backgroundEffect后将覆盖本属性效果。
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
   * 背景模糊效果参数，用于自定义弹窗背景模糊的显示样式，支持配置颜色模式、自适应颜色、缩放比例等属性，实现不同的背景模糊视觉效果。默认值请参考
   * BackgroundBlurStyleOptions。
   * 
   * > **说明：**
   * >
   * > 未设置时沿用backgroundBlurStyle的默认效果（BlurStyle.COMPONENT_ULTRA_THICK）。
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
   * 默认值请参考[BackgroundEffectOptions]{@link BackgroundEffectOptions}。
   * 
   * > **说明：**
   * >
   * > 未设置时不生效，此时弹窗背景模糊效果由backgroundBlurStyle决定；设置后将覆盖backgroundBlurStyle的效果。从API版本26.0.0开始，
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
   * 设置确认按钮显示样式、重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、按钮是否默认响应Enter键。
   * 
   * > **说明：**
   * >
   * > 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，二者primary字段均配置为true时均不生效。
   * >
   * > 2. 按钮高度默认40vp，在关怀模式-大字体场景下高度不变。即使按钮样式设置为圆角矩形
   * > [ROUNDED_RECTANGLE]{@link ButtonType#ROUNDED_RECTANGLE}，在关怀模式-大字体场景下按钮形状仍呈现为胶囊型按钮
   * > [Capsule]{@link ButtonType#Capsule}的样式。
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
   * > **说明：**
   * >
   * > 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，二者primary字段均配置为true时均不生效。
   * >
   * > 2. 按钮高度默认40vp，在关怀模式-大字体场景下高度不变。即使按钮样式设置为圆角矩形
   * > [ROUNDED_RECTANGLE]{@link ButtonType#ROUNDED_RECTANGLE}，在关怀模式-大字体场景下按钮形状仍呈现为胶囊型按钮
   * > [Capsule]{@link ButtonType#Capsule}的样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * 弹窗弹出后的事件回调。
   * 
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 在onDidAppear内设置改变显示效果的回调事件，再次调用show时生效。
   * >
   * > 3. 快速连续触发弹出与关闭时，存在onWillDisappear在onDidAppear前生效。
   * >
   * > 4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
   * 
   * > **选取指导：**
   * >
   * > - onWillAppear：适合在弹窗显示前准备数据、重置状态。
   * > - onDidAppear：适合在弹窗完全显示后执行动画、发起网络请求、设置焦点等需要弹窗可见才能进行的操作。
   * > - onWillDisappear：适合在弹窗消失前保存数据、清理资源、取消网络请求。
   * > - onDidDisappear：适合在弹窗完全消失后执行清理工作、重置状态、恢复其他UI。
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidAppear?: VoidCallback;

  /**
   * 弹窗消失后的事件回调。
   * 
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDisappear?: VoidCallback;

  /**
   * 弹窗显示动效前的事件回调。
   * 
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear?: VoidCallback;

  /**
   * 弹窗退出动效前的事件回调。
   * 
   * > **说明：**
   * >
   * > 1. 正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   * >
   * > 2. 快速连续触发弹出与关闭时，存在onWillDisappear在onDidAppear前生效。
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear?: VoidCallback;

  /**
   * 设置弹窗背板的阴影。
   * 
   * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * 设置弹窗是否响应悬停态，适用于折叠屏等支持悬停模式的设备。
   * 
   * - true：弹窗响应悬停态，在折叠屏悬停模式下会自适应调整布局区域，提供更好的多任务体验。
   * - false：弹窗不响应悬停态，在悬停模式下保持默认布局。
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
   * 设置悬停态下弹窗的默认展示区域，仅在enableHoverMode为true时生效。不同的区域值对应弹窗在折叠屏悬停模式下的不同布局位置
   * （如BOTTOM_SCREEN表示弹窗展示在下半屏区域，TOP_SCREEN表示弹窗展示在上半屏区域）。
   * 
   * > 默认值：HoverModeAreaType.BOTTOM_SCREEN
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
   * 设置日历选择器弹窗中系统当前日期是否保持高亮显示。
   * 
   * - true：系统当前日期在日历选择器弹窗内保持高亮显示。
   * - false：系统当前日期在日历选择器弹窗内不保持高亮显示。
   * 
   * > 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  markToday?: boolean;
  /**
   * 设置弹窗的系统材质。
   * 
   * > **说明：**
   * >
   * > - 默认值：[ImmersiveOptions]{@link ImmersiveOptions}的style为ImmersiveStyle.ULTRA_THICK的
   * > [ImmersiveMaterial]{@link ImmersiveMaterial}对象。设置undefined时与默认值保持一致。
   * > - 不同的材质具有不同的视觉效果，包括背景透明度、模糊程度、阴影样式等方面的差异，该接口影响背景色
   * > [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、背景模糊
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
   * 设置系统材质下弹窗的非线性动画模式。当需要自定义弹窗的非线性动画效果时传入此参数。
   * 
   * > **默认值：** DistortionMode.DISTORTION_AUTO
   * 
   * > **系统接口：** 此接口为系统接口。
   * 
   * > **说明：** 当取值为 DISTORTION_AUTO 时，需设置
   * > [ImmersiveMaterial]{@link ImmersiveMaterial}类型材质方可生效，并依据设备算力档位自动生效非线性效果（高中档算力设备生效，
   * > 低档算力设备不生效）。非线性动画会增加渲染开销，建议在低端设备上谨慎使用。
   * > 各枚举取值含义请参见[DistortionMode]{@link DistortionMode}。
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;
  /**
   * 设置系统材质下弹窗的流光动画模式。当需要自定义弹窗的流光动画效果时传入此参数。
   * 
   * > **默认值：** EdgeLightMode.EDGELIGHT_AUTO
   * >
   * > **系统接口：** 此接口为系统接口。
   * >
   * > **说明：** 当取值为 EDGELIGHT_AUTO 时，需设置
   * > [ImmersiveMaterial]{@link ImmersiveMaterial}类型材质方可生效，并依据设备算力档位自动生效流光效果（高档算力设备生效，
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
 * 点击日期弹出日历选择器弹窗，可在弹窗内选择日期。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class CalendarPickerDialog {
  /**
   * 显示日历选择器弹窗，供用户选择日期。
   *
   * @param { CalendarDialogOptions } options - 配置日历选择器弹窗的参数，缺省时无法弹出弹窗。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static show(options?: CalendarDialogOptions): void;
}

/**
 * 日历选择器组件，提供下拉日历弹窗，用户可快速选择日期。适用于需要用户选择具体日期的场景，如预订系统、日程安排、日期筛选等，提供直观的日历视图，
 * 提升用户日期输入体验。
 * 
 * > **说明：**
 * >
 * > - 该组件从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
 * 
 * > ###### 子组件
 * >
 * > 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare const CalendarPicker: CalendarPickerInterface;

/**
 * 定义日历选择器组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop [since 11]
 */
declare const CalendarPickerInstance: CalendarPickerAttribute;