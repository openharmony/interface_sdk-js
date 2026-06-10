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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CalendarOptions {

  /**
   * 描述日期选中态底板样式。
   * 
   * 取值范围：[0.0, 16.0]
   * 
   * 单位：vp
   * 
   * 默认值：16.0，即底板样式为圆形。
   * 
   * **说明：**
   * 
   * 当hintRadius为0.0时表示底板样式为直角矩形；当hintRadius为(0.0, 16.0)时，底板样式为圆角矩形；
   * 当hintRadius为负数或大于16.0时，恢复为默认值16.0。
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
   * 设置选中项的日期。选中的日期未设置或日期格式不符合规范则为默认值。
   * 
   * 默认值：当前系统日期。
   * 
   * 取值范围：[Date('0001-01-01'), Date('5000-12-31')]
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
   * 默认值：Date('0001-01-01')
   * 
   * 取值范围：[Date('0001-01-01'), Date('5000-12-31')]
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
   * 默认值：Date('5000-12-31')
   * 
   * 取值范围：[Date('0001-01-01'), Date('5000-12-31')]
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
   * 设置禁用日期区间。
   * 
   * **说明：**
   * 
   * 1. 若日期区间内的开始日期或结束日期未设置或设置为异常值，则该日期区间无效。
   * 2. 若在日期区间内，结束日期早于开始日期，则该日期区间无效。
   * 3. 当在入口区选定某日期，通过上下箭头调整日期进行增加或减少操作时，若遇到禁用日期，系统将自动跳过整个禁用区间。
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
 * 日历选择器组件，提供下拉日历弹窗，可以让用户选择日期。
 * 
 * > **说明：**
 * 
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
   * @param { CalendarOptions } options - 配置日历选择器组件的参数。
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
   * @param { CalendarAlign } alignType - 对齐方式的类型。<br/>默认值：CalendarAlign.END
   * @param { Offset } offset - 按照对齐方式对齐后，选择器相对入口组件的偏移量。<br/>默认值：{dx: 0, dy: 0}
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
   *    默认值：CalendarAlign.END<br/>当alignType的值为undefined时，使用默认值。
   * @param { Offset } offset - 按照对齐方式对齐后，选择器相对入口组件的偏移量。<br/>默认值：{dx: 0, dy: 0}
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  edgeAlign(alignType: Optional<CalendarAlign>, offset?: Offset): CalendarPickerAttribute;

  /**
   * 入口区的文本颜色、字号、字体粗细。
   *
   * @param { PickerTextStyle } value - 设置入口区的文本颜色、字号、字体粗细。
   *    默认值：<br/>{<br/>color: '#ff182431',<br/>font: {<br/>size:'16fp', <br/>weight: FontWeight.Regular<br/>}<br/>}
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): CalendarPickerAttribute;

  /**
   * 入口区的文本颜色、字号、字体粗细。与[textStyle]{@link CalendarPickerAttribute#textStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 设置入口区的文本颜色、字号、字体粗细。
   *    默认值：<br/>{<br/>color: '#ff182431',<br/>font: {<br/>size: '16fp', <br/>weight: FontWeight.Regular<br/>}<br/>}
   *    当style的值为undefined时，使用默认值。
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
   * @param { Callback<Date> } callback - 选中的日期值。 [since 18]
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
   * 与[onChange]{@link CalendarPickerAttribute#onChange(callback: Callback<Date>)}相比，
   * callback参数新增了对undefined类型的支持。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<Callback<Date>> } callback - 选中的日期值。<br>当callback的值为undefined时，不使用回调函数。
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
   *  - true：系统当前日期在日历选择器内保持高亮显示。<br/>- false：系统当前日期在日历选择器内不保持高亮显示。<br/>默认值：false
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
 * > 在应用窗口缩小过程中，弹窗的宽度会被不断压缩，当缩小到一定程度时会导致其内容无法完整显示，
 * 保证CalendarPickerDialog内容能够完整显示的最小窗口宽度为386vp。
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
   * 默认值：Color.Transparent
   * 
   * **说明：** 
   * 
   * 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则显示的颜色将不符合预期效果。
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
   * **说明：** 
   * 
   * 设置为BlurStyle.NONE即可关闭背景虚化。
   * 当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则显示的颜色将不符合预期效果。
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
   * 背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 背景效果参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * 设置确认按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、
   * 按钮是否默认响应Enter键。
   * 
   * **说明：**
   * 
   * acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，二者primary字段均配置为true时均不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置取消按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、
   * 按钮是否默认响应Enter键。
   * 
   * **说明：**
   * 
   * acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，二者primary字段均配置为true时均不生效。
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
   * **说明：**
   * 
   * 1.正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   * 
   * 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
   * 
   * 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
   * 
   * 4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
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
   * **说明：**
   * 
   * 1.正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
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
   * **说明：**
   * 
   * 1.正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   * 
   * 2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
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
   * **说明：**
   * 
   * 1.正常时序依次为：onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange)>>onWillDisappear>>onDidDisappear。
   * 
   * 2.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
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
   * 当设备为2in1时，默认场景下，获焦时阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦时为ShadowStyle.OUTER_FLOATING_SM。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * 是否响应悬停态。
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
   * 悬停态下弹窗默认展示区域。
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
   * 设置日历选择器弹窗中系统当前日期是否保持高亮显示。
   * 
   * - true：系统当前日期在日历选择器弹窗内保持高亮显示。
   * - false：系统当前日期在日历选择器弹窗内不保持高亮显示。
   * 
   * 默认值：false
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
   * 为对话框设置系统风格的材质。不同的材质具有不同的效果，可以影响对话框的背景颜色、边框、阴影等视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * 设置对话框的形变动画模式。
   *
   * 默认值：DistortionMode.DISTORTION_AUTO
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;

  /**
   * 设置对话框的边缘光动画模式。
   *
   * 默认值：EdgeLightMode.EDGELIGHT_AUTO
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
   * 定义日历选择器弹窗。
   *
   * @param { CalendarDialogOptions } options - 配置日历选择器弹窗参数。参数缺省时无法弹出弹窗。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static show(options?: CalendarDialogOptions): void;
}

/**
 * 日历选择器组件，提供下拉日历弹窗，可以让用户选择日期。
 * 
 * > **说明：**
 * 
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
 * 
 * 子组件
 * 
 * 无
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