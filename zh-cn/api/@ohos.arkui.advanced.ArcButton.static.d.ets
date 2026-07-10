'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * 弧形按钮组件提供强调、普通、警告等样式按钮，推荐用于圆形屏幕的设备。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * 
 * > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
 * 
 * ###### ArcButtonAttribute
 * 
 * 不支持[通用属性]{@link common}
 * 
 * ###### ArcButtonAttribute
 * 
 * 通用事件支持[点击事件]{@link common}和[触摸事件]{@link common}。
 *
 * @file Defines the arc button component
 * @kit ArkUI
 */

import { LengthMetrics, ColorMetrics } from '@ohos.arkui.node';
import { ResourceStr, BlurStyle, FontStyle, Resource, LocalizedMargin, TouchEvent,
  ClickEvent, ComponentV2, Builder, ResourceColor } from '@ohos.arkui.component';
import { Callback } from '@ohos.base';
import { Require, Param, ObservedV2, Trace } from '@ohos.arkui.stateManagement';

/**
 * 定义ArcButton可设置的弧形按钮的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare enum ArcButtonPosition {
  /**
   * 上弧形按钮，位于圆形屏幕上方。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  TOP_EDGE = 0,
  /**
   * 底部弧形按钮，位于圆形屏幕底部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  BOTTOM_EDGE = 1
}

/**
 * 定义ArcButton可设置弧形按钮样式模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare enum ArcButtonStyleMode {
  /**
   * 强调样式，亮色，表现为蓝色背景、白色文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  EMPHASIZED_LIGHT = 0,
  /**
   * 强调样式，暗色，表现为红色背景、白色文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  EMPHASIZED_DARK = 1,
  /**
   * 常规样式，亮色，表现为深蓝色背景、蓝色文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  NORMAL_LIGHT = 2,
  /**
   * 常规样式，暗色，表现为深灰色背景、蓝色文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  NORMAL_DARK = 3,

  /**
   * 自定义按钮颜色和字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  CUSTOM = 4
}

/**
 * 定义ArcButton可设置的弧形按钮状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare enum ArcButtonStatus {
  /**
   * 正常状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  NORMAL = 0,
  /**
   * 按压状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  PRESSED = 1,
  /**
   * 禁用状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  DISABLED = 2
}

/**
 * ArcButton内进度条的参数配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 23 static
 */
@ObservedV2
export declare class ArcButtonProgressConfig {
  /**
   * 进度条当前值。设置小于0的数值时置为0，设置大于total的数值时置为total。
   * 
   * 默认值：0
   * 
   * 取值范围：[0, total]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public value: double;
  /**
   * 进度的最大值。
   * 
   * 默认值：100
   * 
   * 取值范围：[0, 2147483647]，设置0或超出取值范围取默认值为100。
   *
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public total?: double;
  /**
   * 进度条前景色。如果组件设置了[ArcButtonOptions]{@link ArcButtonOptions}的背景色（backgroundColor），进度条前景色默认值取组件背景色。进度条前景色不受按钮样式（
   * [ArcButtonStyleMode]{@link ArcButtonStyleMode}）设置影响。进度条背景色仅依赖进度条前景色设置，取进度条前景色的25%透明度。 
   * 
   * 默认值："#1F71FF"，显示为蓝色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public color?: ResourceColor;
 
  /**
   * 进度条参数配置的构造函数。
   *
   * @param { double } value - 设置进度条的进度值。<br/>取值范围：[0, total]，当设置小于0的值时，按0处理；当设置大于total的值时，按total处理。
   * @param { double } [total] - 设置进度条的总进度值。<br/>默认值：100<br/>取值范围：[0, 2147483647]
   * @param { ResourceColor } [color] - 设置进度条的前景颜色。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: double, total?: double, color?: ResourceColor);
}

/**
 * ArcButton的默认样式或自定义样式参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
export declare interface CommonArcButtonOptions {
  /**
   * 上下弧形按钮类型属性。
   * 
   * 默认值：ArcButtonPosition.BOTTOM_EDGE
   *
   * @default ArcButtonPosition.BOTTOM_EDGE
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  position?: ArcButtonPosition;
  /**
   * 弧形按钮样式模式。该样式不支持与[ArcButtonProgressConfig]{@link ArcButtonProgressConfig}样式同时使用。
   * 
   * 默认值：ArcButtonStyleMode.EMPHASIZED_LIGHT
   *
   * @default ArcButtonStyleMode.EMPHASIZED_LIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  styleMode?: ArcButtonStyleMode;
  /**
   * 弧形按钮状态。
   * 
   * 默认值：ArcButtonStatus.NORMAL
   *
   * @default ArcButtonStatus.NORMAL
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  status?: ArcButtonStatus;
  /**
   * 弧形按钮显示文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  label?: ResourceStr;
  /**
   * 弧形按钮背景模糊能力。
   * 
   * 默认值：BlurStyle.NONE
   *
   * @default BlurStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  backgroundBlurStyle?: BlurStyle;
  /**
   * 弧形按钮背景颜色。
   * 
   * ArcButtonStyleMode需要设置为CUSTOM。
   * 
   * 默认值：Color.Black
   *
   * @default Color.Black
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  backgroundColor?: ColorMetrics;
  /**
   * 弧形按钮阴影颜色。
   * 
   * 默认值：Color.Black
   *
   * @default Color.Black
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  shadowColor?: ColorMetrics;
  /**
   * 弧形按钮阴影开关。
   * 
   * 默认值：false
   * 
   * 值为true时，显示阴影。值为false时，不显示阴影。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  shadowEnabled?: boolean;
  /**
   * 弧形按钮文本大小。
   * 
   * 默认值：19fp
   *
   * @default 19.0_fp
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontSize?: LengthMetrics;
  /**
   * 弧形按钮文本颜色。
   * 
   * ArcButtonStyleMode需要设置为CUSTOM。
   * 
   * 默认值：Color.White
   *
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontColor?: ColorMetrics;
  /**
   * 弧形按钮按下文本颜色。
   * 
   * ArcButtonStyleMode需要设置为CUSTOM。
   * 
   * 默认值：Color.White
   *
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  pressedFontColor?: ColorMetrics;
  /**
   * 弧形按钮文本样式。
   * 
   * 默认值：FontStyle.Normal
   *
   * @default FontStyle.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontStyle?: FontStyle;
  /**
   * 弧形按钮字体名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontFamily?: string | Resource;
  /**
   * 弧形按钮文本边距。
   * 
   * 默认值：{start:24vp, top: 10vp,end: 24vp, bottom:16vp }
   *
   * @default { start: 24.0_vp, top: 10.0_vp, end: 24.0_vp, bottom: 16.0_vp }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  fontMargin?: LocalizedMargin;
  
  /**
   * ArcButton进度条参数。不设置该属性时ArcButton组件表现为按钮样式（
   * [示例1](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton copy.md#示例1-设置弧形按钮)），设置后表现为进度条样式（
   * [示例2](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton copy.md#示例2-设置设备进度条按钮)），进度条样式不受
   * [ArcButtonStyleMode]{@link ArcButtonStyleMode}属性设置影响。 
   * 
   * 默认值：[ArcButtonProgressConfig]{@link ArcButtonProgressConfig} 的各项子属性均取其默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  progressConfig?: ArcButtonProgressConfig;
  
  /**
   * 弧形按钮手指触摸动作触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onTouch?: Callback<TouchEvent>;

  /**
   * 弧形按钮点击动作触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onClick?: Callback<ClickEvent>;
}
/**
 * 定义ArcButton的默认样式或自定义样式参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
@ObservedV2
export declare class ArcButtonOptions {
  /**
   * 上下弧形按钮类型属性。<br/>默认值：ArcButtonPosition.BOTTOM_EDGE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public position: ArcButtonPosition;
  /**
   * 弧形按钮样式模式。该样式不支持与[ArcButtonProgressConfig](#arcbuttonprogressconfig23)样式同时使用。<br>默认值：ArcButtonStyleMode.EMPHASIZED_LIGHT
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public styleMode: ArcButtonStyleMode;
  /**
   * 弧形按钮状态。<br/>默认值：ArcButtonStatus.NORMAL
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public status: ArcButtonStatus;
  /**
   * 弧形按钮显示文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public label: ResourceStr;
  /**
   * 弧形按钮背景模糊能力。<br/>默认值：BlurStyle.NONE
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public backgroundBlurStyle: BlurStyle;
  /**
   * 弧形按钮背景颜色。<br/>ArcButtonStyleMode需要设置为CUSTOM。<br/>默认值：Color.Black
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public backgroundColor: ColorMetrics;
  /**
   * 弧形按钮阴影颜色。<br/>默认值：Color.Black
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public shadowColor: ColorMetrics;
  /**
   * 弧形按钮阴影开关。<br/>默认值：false<br/>值为true时，显示阴影。值为false时，不显示阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public shadowEnabled: boolean;
  /**
   * 弧形按钮文本大小。<br/>默认值：19fp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontSize: LengthMetrics;
  /**
   * 弧形按钮文本颜色。<br/>ArcButtonStyleMode需要设置为CUSTOM。<br/>默认值：Color.White
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontColor: ColorMetrics;
  /**
   * 弧形按钮按下文本颜色。<br/>ArcButtonStyleMode需要设置为CUSTOM。<br/>默认值：Color.White
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public pressedFontColor: ColorMetrics;
  /**
   *  弧形按钮文本样式。<br/>默认值：FontStyle.Normal
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontStyle: FontStyle;
  /**
   * 弧形按钮字体名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontFamily: string | Resource;
  /**
   * 弧形按钮文本边距。<br/>默认值：{start:24vp, top: 10vp,end: 24vp, bottom:16vp }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public fontMargin: LocalizedMargin;

  /**
   * ArcButton进度条参数。不设置该属性时ArcButton组件表现为按钮样式（
   * [示例1](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton copy.md#示例1-设置弧形按钮)），设置后表现为进度条样式（
   * [示例2](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton copy.md#示例2-设置设备进度条按钮)），进度条样式不受
   * [ArcButtonStyleMode]{@link ArcButtonStyleMode}属性设置影响。 
   * 
   * 默认值：[ArcButtonProgressConfig]{@link ArcButtonProgressConfig} 的各项子属性均取其默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  @Trace
  public progressConfig?: ArcButtonProgressConfig;

  /**
   * 弧形按钮手指触摸动作触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public onTouch?: Callback<TouchEvent>;

  /**
   * 弧形按钮点击动作触发该回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  public onClick?: Callback<ClickEvent>;

  /**
   * 弧形按钮的构造函数。
   *
   * @param { CommonArcButtonOptions } options - 定义ArcButton组件的文本、背景色、阴影等参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options: CommonArcButtonOptions);
}
/**
 * ArcButton({ options: ArcButtonOptions })
 * 
 * 创建ArcButton实例，入参是弧形按钮配置选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 */
@ComponentV2
export declare struct ArcButton {
  /**
   * 定义ArcButton组件的文本、背景色、阴影等参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Require
  @Param
  readonly options: ArcButtonOptions;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}