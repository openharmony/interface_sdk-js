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
* 进度条选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ProgressOptions<Type extends keyof ProgressStyleMap> {

  /**
   * 指定当前进度值。设置小于0的数值时置为0，设置大于total的数值时置为total。
   *
   * 默认值：0
   *
   * 取值范围：[0, total]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  value: number;

  /**
   * 指定进度总长。设置小于等于0的数值时置为100。
   *
   * 默认值：100
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  total?: number;

  /**
   * 指定进度条样式。
   *
   * 该参数从API version8开始废弃，建议使用type替代。
   *
   * 默认值：ProgressStyle.Linear
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead type
   */
  style?: ProgressStyle;

  /**
   * 指定进度条类型。
   *
   * 默认值：ProgressType.Linear
   *
   * **说明：** 不同的type需分别对应相应的[style]{@link ProgressAttribute#style}属性设置，详细映射关系参考
   * [ProgressStyleMap]{@link ProgressStyleMap}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  type?: Type;
}

/**
* 进度条类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum ProgressType {

  /**
   * 线性样式。从API version 9开始，当高度大于宽度时，自适应垂直显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Linear = 0,

  /**
   * 环形无刻度样式，环形圆环逐渐显示直至完全填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Ring = 1,

  /**
   * 圆形样式，显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Eclipse = 2,

  /**
   * 环形有刻度样式，显示类似时钟刻度形式的进度展示效果。从API version 9开始，刻度外圈出现重叠时自动转换为环形无刻度进度条。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ScaleRing = 3,

  /**
   * 胶囊样式，头尾两端圆弧处的进度展示效果与Eclipse相同，中段的进度展示效果与Linear相同。当高度大于宽度时，自适应垂直显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Capsule = 4
}

/**
* 进度条的当前状态。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ProgressStatus {

  /**
   * 加载中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LOADING = 0,

  /**
   * Processing status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PROGRESSING
}

/**
* 进度条样式选项。
*
* 继承自[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface ProgressStyleOptions extends CommonProgressStyleOptions {

  /**
   * 设置进度条宽度（不支持百分比设置）。
   *
   * 默认值：4.0vp
   *
   * 超出取值范围按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeWidth?: Length;

  /**
   * 设置环形进度条总刻度数。
   *
   * 默认值：120
   *
   * 取值范围：[2, min(width, height)/scaleWidth/2/π]，超出取值范围时，样式显示为环形无刻度进度条。默认情况下宽高最小为77vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scaleCount?: number;

  /**
   * 设置环形进度条刻度粗细（不支持百分比设置）。刻度粗细大于进度条宽度时，为系统默认粗细。
   *
   * 默认值：2.0vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scaleWidth?: Length;
}

/**
* 进度条通用样式选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CommonProgressStyleOptions {

  /**
   * 进度平滑动效的开关。开启平滑动效后设置进度，进度会从当前值渐变至设定值，页面会有进度变化的动效；否则进度从当前值突变至设定值，页面无动效。
   *
   * true：表示开启进度平滑动效。
   *
   * false：表示关闭进度平滑动效。
   *
   * 默认值：true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableSmoothEffect?: boolean;
}

/**
* 扫光效果选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ScanEffectOptions {

  /**
   * 扫光效果的开关。仅支持[ProgressType]{@link ProgressType}类型为Linear、Ring、Capsule的进度条。
   *
   * true：表示开启扫光效果。
   *
   * false：表示关闭扫光效果。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScanEffect?: boolean;
}

/**
* 圆形样式选项。圆形样式的显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。
*
* 继承自[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface EclipseStyleOptions extends CommonProgressStyleOptions {}

/**
* 环形有刻度样式选项。
*
* 继承自[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ScaleRingStyleOptions extends CommonProgressStyleOptions {

  /**
   * 设置进度条宽度（不支持百分比设置）。当宽度大于等于半径时，宽度默认修改为半径值的二分之一。
   *
   * 默认值：4.0vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;

  /**
   * 设置环形进度条刻度粗细（不支持百分比设置）。刻度粗细大于进度条宽度时，为系统默认粗细。
   *
   * 默认值：2.0vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scaleWidth?: Length;

  /**
   * 设置环形进度条总刻度数。
   *
   * 默认值：120
   *
   * 取值范围：[2, min(width, height)/scaleWidth/2/π]，超出取值范围时，样式显示为环形无刻度进度条。默认情况下宽高最小为77vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scaleCount?: number;
}

/**
* 环形无刻度样式选项。
*
* 继承自[ScanEffectOptions]{@link ScanEffectOptions}和[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RingStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {

  /**
   * 设置进度条宽度（不支持百分比设置）。当宽度大于等于半径时，宽度默认修改为半径值的二分之一。
   *
   * 默认值：4.0vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;

  /**
   * 进度条阴影开关。
   *
   * true：表示打开进度条阴影；false：表示关闭进度条阴影。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  shadow?: boolean;

  /**
   * 设置进度条状态。当设置为ProgressStatus.LOADING时会开启检查更新动效，此时设置进度值不生效。当从ProgressStatus.LOADING设置为ProgressStatus.PROGRESSING时，检查更新
   * 动效会执行到终点再停止。
   *
   * 默认值：ProgressStatus.PROGRESSING
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  status?: ProgressStatus;
}

/**
* 线性样式选项。
*
* 继承自[ScanEffectOptions]{@link ScanEffectOptions}和[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface LinearStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {

  /**
   * 设置进度条宽度（不支持百分比设置）。当宽度大于等于半径时，宽度默认修改为半径值的二分之一。
   *
   * 默认值：4.0vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;

  /**
   * 设置线性进度条的圆角半径。
   *
   * 取值范围[0, strokeWidth / 2]。默认值：strokeWidth / 2。
   *
   * @default strokeWidth / 2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeRadius?: PX | VP | LPX | Resource;
}

/**
* 胶囊样式选项。
*
* 继承自[ScanEffectOptions]{@link ScanEffectOptions}和[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CapsuleStyleOptions extends ScanEffectOptions, CommonProgressStyleOptions {

  /**
   * 内描边颜色。
   *
   * 默认值：
   *
   * API version 10：'#33006cde'
   *
   * API version 11及以上：'#33007dff'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderColor?: ResourceColor;

  /**
   * 内描边宽度（不支持百分比设置）。
   *
   * 默认值：1vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderWidth?: Length;

  /**
   * 文本内容，应用可自定义。
   *
   * 从API version 20开始，支持Resource类型。
   *
   * @type { ?string } [since 10 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  content?: ResourceStr;

  /**
   * 文本样式。
   *
   * 默认值：
   *
   * 文本大小（不支持百分比设置）：12fp
   *
   * 其他文本参数跟随[Text]{@link text}组件的主题值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font?: Font;

  /**
   * 文本颜色。
   *
   * 默认值：'#ff182431'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * 显示百分比文本的开关。开启后，进度条上显示当前进度的百分比。设置了content属性时该属性不生效。
   *
   * true：表示显示百分比文本；false：表示不显示百分比文本。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showDefaultPercentage?: boolean;

  /**
   * Capsule进度条圆角半径（不支持百分比设置）。
   *
   * 取值范围：[0, min(width, height)/2]。默认值：min(width, height)/2。
   *
   * 设置非法数值时，按照默认值处理。
   *
   * @default min(width, height) / 2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  borderRadius?: LengthMetrics;
}

/**
* 进度条样式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ProgressStyle {

  /**
   * 线性样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Linear = 0,

  /**
   * 环形无刻度样式，环形圆环逐渐显示直至完全填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Ring,

  /**
   * Eclipse progress bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Eclipse,

  /**
   * 环形有刻度样式，显示类似时钟刻度形式的进度展示效果。从API version 9开始，刻度外圈出现重叠时自动转换为环形无刻度进度条。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ScaleRing,

  /**
   * 胶囊样式，头尾两端圆弧处的进度展示效果与Eclipse相同，中段的进度展示效果与Linear相同。当高度大于宽度时，自适应垂直显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Capsule,
}

/**
* 进度条类型和样式的映射表。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ProgressStyleMap {

  /**
   * 线性进度条对应的进度条样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Linear]: LinearStyleOptions | ProgressStyleOptions;

  /**
   * 环形无刻度进度条对应的进度条样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Ring]: RingStyleOptions | ProgressStyleOptions;

  /**
   * 圆形进度条对应的进度条样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Eclipse]: EclipseStyleOptions | ProgressStyleOptions;

  /**
   * 环形有刻度进度条对应的进度条样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.ScaleRing]: ScaleRingStyleOptions | ProgressStyleOptions;

  /**
   * 胶囊形进度条对应的进度条样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ProgressType.Capsule]: CapsuleStyleOptions | ProgressStyleOptions;
}

/**
* 进度条组件，用于显示内容加载或操作处理等进度。
*
* > **说明：**
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ProgressInterface {

  /**
   * 创建进度条组件。
   *
   * @param { ProgressOptions<Type> } options - 按进度条类型不同，设置不同属性的进度条组件参数。
   * @returns { ProgressAttribute<Type> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  <Type extends keyof ProgressStyleMap>(options: ProgressOptions<Type>): ProgressAttribute<Type>;
}

/**
* 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。
*
* 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ProgressAttribute<Type extends keyof ProgressStyleMap = keyof ProgressStyleMap,
  Style extends ProgressStyleMap[Type] = ProgressStyleMap[Type]> extends CommonMethod<ProgressAttribute<Type>> {

  /**
   * 设置当前进度值。设置小于0的数值时置为0，设置大于total的数值时置为total。非法数值不生效。
   *
   * @param { number } value - 当前进度值。<br/> 默认值：0
   * @returns { ProgressAttribute<Type> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  value(value: number): ProgressAttribute<Type>;

  /**
   * 设置进度条前景色。
   *
   * 从API version 10开始支持利用[LinearGradient]{@link LinearGradient}设置Ring样式的渐变色。Ring类型不建议设置透明度，如需设置透明度，建议使用
   * [DataPanel]{@link data_panel}。
   *
   * 从API version 23开始支持利用[LinearGradient]{@link LinearGradient}设置Linear样式和Capsule样式的渐变色。API version 22及之前版本利用
   * LinearGradient设置Linear样式和Capsule样式的渐变色时，会以默认主题色显示。
   *
   * @param { ResourceColor | LinearGradient } value - 进度条前景色。<br/>默认值：<br/>- Capsule：<br/>   API version 9及以下：'#ff007
   *     dff'<br/>   API version 10：'#33006cde'<br/>   API version 11及以上：'#33007dff'<br/>- Ring：<br/>   API version 9及以
   *     下：'#ff007dff'<br/>   API version 10及以上：起始端：'#ff86c1ff'，结束端：'#ff254ff7'<br/>- 其他样式：'#ff007dff'
   * @returns { ProgressAttribute<Type> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: ResourceColor | LinearGradient): ProgressAttribute<Type>;

  /**
   * 设置组件的样式。
   *
   * @param { Style } value - 组件的样式。<br/>- CapsuleStyleOptions：设置Capsule的样式。<br/>- RingStyleOptions：设置Ring的样式。<br/>-
   *     LinearStyleOptions：设置Linear的样式。<br/>- ScaleRingStyleOptions：设置ScaleRing的样式。<br/>- EclipseStyleOptions：设置Eclipse
   *     的样式。<br/>- ProgressStyleOptions：仅可设置各类型进度条的strokeWidth、scaleCount、scaleWidth，仅对支持这些样式设置的进度条生效。
   * @returns { ProgressAttribute<Type> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  style(value: Style): ProgressAttribute<Type>;

  /**
   * 设置隐私敏感。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<boolean> } isPrivacySensitiveMode - 设置隐私敏感，隐私模式下进度清零，文字将被遮罩。true：打开隐私敏感；false：关闭隐私敏感。<br/>。
   *     <br>默认值：false。
   * @returns { ProgressAttribute<Type> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  privacySensitive(isPrivacySensitiveMode: Optional<boolean>): ProgressAttribute<Type>;

  /**
   * 定制progress内容区的方法。
   *
   * @param { ContentModifier<ProgressConfiguration> } modifier - The contentModifier of progress.
   * @returns { ProgressAttribute<Type> }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<ProgressConfiguration>): ProgressAttribute<Type>;
}

/**
* 进度条配置。继承自[CommonConfiguration]{@link CommonConfiguration}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ProgressConfiguration extends CommonConfiguration<ProgressConfiguration> {

  /**
   * 当前进度值。当设置的数值小于0时，将其置为0。当设置的数值大于total时，将其置为total。
   *
   * 默认值：0
   *
   * 取值范围：[0, total]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: number;

  /**
   * 进度总长。
   *
   * 默认值：100
   *
   * **说明：**
   *
   * total是负数时，按照100处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  total: number;
}

/**
* 进度条组件，用于显示内容加载或操作处理等进度。
*
* ###### 子组件
*
* 无
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Progress: ProgressInterface;

/**
* 定义Progress组件实例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ProgressInstance: ProgressAttribute<keyof ProgressStyleMap>;