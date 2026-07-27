/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * 文本下载按钮，可显示具体下载进度。
 * 
 * > **说明：**
 * >
 * > - 该组件仅可在Stage模型下使用。
 * >
 * > - 如果ProgressButton设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编
 * > 译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ProgressButton本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议
 * > ProgressButton设置通用属性和通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
@Component
export declare struct ProgressButton {
  /**
   * 下载按钮的当前进度值。
   * 
   * 取值范围：[0,100]。设置小于0的数值时置为0，设置大于100的数值时置为100。
   * 
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  progress: number;

  /**
   * 下载按钮的文本。
   * 
   * 默认值：空字符串。
   * 
   * **说明**：最长显示组件宽度，超出部分用省略号代替。从API version 20开始，支持Resource类型。
   *
   * @type { string } [since 10 - 19]
   * @type { ResourceStr }. [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  content: ResourceStr;

  /**
   * 下载按钮的宽度，单位vp。
   * 
   * 取值范围：大于等于44vp。
   * 
   * 默认值：44vp。当取值为非Resource类型且小于默认值或取值为非法值时，识别值为默认值。当取值为Resource类型且小于默认值时识别为默认值，为非法值时下载按钮的宽度显示为容器宽度的100%。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  progressButtonWidth?: Length;

  /**
   * 下载按钮的点击回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  clickCallback: () => void;

  /**
   * 下载按钮是否可以点击。
   * 
   * true：可以点击。
   * 
   * false：不可点击。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  @Prop
  enable: boolean;

  /**
   * 下载按钮颜色。用于自定义按钮各部分的颜色（进度条、描边、文本、背景）。需要自定义颜色时传入此参数，不传入时使用系统默认配色方案。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop
  colorOptions?: ProgressButtonColorOptions;

  /**
   * 下载按钮的圆角（不支持百分比设置）。
   * 
   * 取值范围：[0, height/2]
   * 
   * 默认值：height/2
   * 
   * 设置值小于0时按照0处理，设置其他非法数值时，按照默认值处理。当直接入参为undefined时，按照默认值处理，入参为LengthMetrics.vp时，建议传入具体数值，传入null/undefined会导致显示异常。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Prop
  progressButtonRadius?: LengthMetrics;
}

/**
 * 下载按钮颜色选项
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 18 dynamic
 */
export declare interface ProgressButtonColorOptions {

  /**
   * 进度条颜色。
   * 
   * 默认值：#330A59F7
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  progressColor?: ResourceColor;

  /**
   * 按钮背景色。
   * 
   * 默认值：$r('sys.color.ohos_id_color_foreground_contrary')
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 按钮文本颜色。
   * 
   * 默认值：系统默认值（#CE000000）
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  textColor?: ResourceColor;

  /**
   * 按钮描边颜色。
   * 
   * 默认值：#330A59F7
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  borderColor?: ResourceColor;
}