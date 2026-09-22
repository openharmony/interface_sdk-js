/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * 本模块提供文本宽度、高度等相关计算，支持多种文本属性配置（如字体大小、样式、粗细、行高等），适用于需要在组件构建前获知文本尺寸的场景，例如自适应布局、文本裁剪、动态调整UI尺寸等，帮助开发者实现更精准的布局计算和性能优化。
 *
 * > **说明：**
 * >
 * > - 该模块不支持在[UIAbility]{@link @ohos.app.ability.UIAbility}的文件声明处使用，即不能在UIAbility的生命周期中调用，需要在创建组件实例后使用。
 * >
 * > - 如需更多测算文本参数，建议使用图形对应[Paragraph]{@link @ohos.graphics.text:text.Paragraph}下的测算接口。
 * >
 * > - 调用文本计算接口时，不建议同时使用
 * > [ApplicationContext.setFontSizeScale]{@link ./application/ApplicationContext:ApplicationContext.setFontSizeScale}设置
 * > 应用字体大小缩放比例。为了确保时序的一致性，建议开发者自行监听字体缩放变化，以保证测算结果的准确性。
 * >
 * > - 在测算裁剪后的文本时，由于某些Unicode字符（如emoji）的码位长度大于1，直接按字符串长度裁剪会导致不准确的结果。建议基于Unicode码点进行迭代处理，避免错误截断字符，确保测算结果准确。
 *
 * @file 文本计算
 * @kit ArkUI
 */

/**
 * 被计算文本属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 12]
 * @since 9 dynamic
 */
export interface MeasureOptions {
  /**
   * 设置被计算文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  textContent: string | Resource;

  /**
   * 设置被计算文本布局宽度。取值范围：[0, +∞)。
   *
   * **说明：**
   *
   * 默认单位为vp，不支持设置百分比字符串。此参数仅在measureTextSize接口中生效，若不设置，则文本宽度为单行布局的最大宽度。若设置则为设置值，同时会影响文本的换行方式和高度计算结果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  constraintWidth?: number | string | Resource;

  /**
   * 设置被计算文本字体大小。取值范围：[0, +∞)，超出取值范围会导致计算结果异常。
   *
   * 默认值：16
   *
   * **说明：**
   *
   * 不支持设置百分比字符串。
   *
   * fontSize为number类型时，从API version 12开始，使用fp单位，在API version 12之前使用vp单位。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  fontSize?: number | string | Resource;

  /**
   * 设置被计算文本字体样式。
   *
   * 默认值：FontStyle.Normal
   *
   * number类型取值范围为[0,1]，取值间隔为1，依次对应FontStyle中的枚举值。超出范围时使用默认值FontStyle.Normal。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  fontStyle?: number | FontStyle;

  /**
   * 设置被计算文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。超出范围或不在间隔值上时使用默认值400。string类型仅支持number类型取值的字符串形式，例如"400
   * "，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。
   *
   * 默认值：FontWeight.Normal
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  fontWeight?: number | string | FontWeight;

  /**
   * 设置被计算文本字体列表。默认字体'HarmonyOS Sans'，且当前只支持这种字体。设置其他字体名称时使用默认字体'HarmonyOS Sans'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  fontFamily?: string | Resource;

  /**
   * 设置被计算文本字符间距。
   *
   * 默认值：0
   *
   * **说明：**
   *
   * 默认单位为vp。string类型支持带单位的字符串，如'10px'、'10vp'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  letterSpacing?: number | string;

  /**
   * 设置被计算文本水平方向的对齐方式。
   *
   * 默认值：TextAlign.Start
   *
   * number类型取值范围为[0,3]，取值间隔为1，依次对应TextAlign中的枚举值。超出范围时使用默认值TextAlign.Start。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  textAlign?: number | TextAlign;

  /**
   * 设置被计算文本超长时的截断方式，需与maxLines配合使用才能生效。
   *
   * 默认值：1
   *
   * number类型取值范围为[0,3]，取值间隔为1，依次对应TextOverflow中的枚举值。超出范围时使用默认值1。
   *
   * **说明：** 当设置为TextOverflow.Ellipsis时，可配合wordBreak.BREAK_ALL和maxLines使用，实现英文单词按字母截断，超出部分以省略号显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  overflow?: number | TextOverflow;

  /**
   * 设置被计算文本最大行数，当文本实际行数超过此值时，measureTextSize的计算结果将基于最大行数进行测算，超出部分不计入高度计算。
   *
   * 取值范围：[0, INT32_MAX]，传入负数或超出范围时使用默认值。
   *
   * 默认值：不限制
   *
   * **说明：** 可配合overflow: TextOverflow.Ellipsis和wordBreak.BREAK_ALL使用，实现英文单词按字母截断，超出部分以省略号显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  maxLines?: number;

  /**
   * 设置被计算文本行高，影响多行文本的高度计算结果和行间距，数值越大行间距越大。
   *
   * 取值范围：[0, +∞)。string类型支持带单位的字符串，如'10px'、'10vp'。
   *
   * 默认值：系统默认行高
   *
   * 默认单位为vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  lineHeight?: number | string | Resource;

  /**
   * 设置被计算文本基线的偏移量。
   *
   * 默认值：0。单位：vp。string类型支持带单位的字符串，如'10px'、'10vp'。
   *
   * **说明：** 正数表示基线向上偏移，负数表示基线向下偏移。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  baselineOffset?: number | string;

  /**
   * 设置被计算文本大小写。
   *
   * 默认值：TextCase.Normal
   *
   * number类型取值范围为[0,2]，取值间隔为1，依次对应TextCase中的枚举值。超出范围时使用默认值TextCase.Normal。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  textCase?: number | TextCase;

  /**
   * 设置首行文本缩进。取值范围：[0, +∞)，超出范围时使用默认值0。
   *
   * 默认值：0。
   *
   * **说明：**
   *
   * 默认单位为vp。string类型支持带单位的字符串，如'10px'、'10vp'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textIndent?: number | string;

  /**
   * 设置断行规则。
   *
   * 默认值：WordBreak.BREAK_WORD
   *
   * **说明：**
   *
   * WordBreak.BREAK_ALL与overflow: TextOverflow.Ellipsis、maxLines组合使用可实现英文单词按字母截断，超出部分以省略号显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  wordBreak?: WordBreak;
}

/**
 * 定义测算文本相关接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 9 dynamic
 */
export default class MeasureText {
  /**
   * 计算指定文本作为单行文本显示时的宽度。如果文本包含多行（由换行符`\n`分隔），则返回其中最长的行的宽度。
   *
   * > **说明：**
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getMeasureUtils]{@link @ohos.arkui.UIContext:UIContext.getMeasureUtils}方法获取当前UI上下文关联的
   * > [MeasureUtils]{@link @ohos.arkui.UIContext}对象。
   * >
   * > - measureText接口的计算结果始终是单行文本的宽度，入参options中配置的布局约束（如constraintWidth、maxLines）对measureText的结果没有影响。如果需要计算布局约束下的宽度，请使用
   * > [measureTextSize]{@link @ohos.arkui.UIContext:MeasureUtils.measureTextSize}方法。
   *
   * @param { MeasureOptions } options - 被计算文本描述信息。
   * @returns { number } 文本宽度。<br/>单位：px
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.MeasureUtils#measureText
   */
  static measureText(options: MeasureOptions): number;

  /**
   * 计算指定文本的宽度和高度。
   *
   * > **说明：**
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getMeasureUtils]{@link @ohos.arkui.UIContext:UIContext.getMeasureUtils}方法获取当前UI上下文关联的
   * > [MeasureUtils]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { MeasureOptions } options - 被计算文本描述信息。
   * @returns { SizeOptions } 返回文本所占布局宽度和高度。<br/>**说明：** <br/>文本宽度以及高度返回值单位均为px。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.MeasureUtils#measureTextSize
   */
  static measureTextSize(options: MeasureOptions): SizeOptions;
}