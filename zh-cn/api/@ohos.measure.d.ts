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
 * The **measure** module provides APIs for measuring text metrics, such as text height and width.
 * 
 * > **NOTE**
 * >
 * > - This module cannot be used in the file declaration of the [UIAbility]{@link @ohos.app.ability.UIAbility}. In 
 * > other words, the APIs of this module can be used only after a component instance is created; they cannot be called 
 * > in the lifecycle of the UIAbility.
 * >
 * > - To perform more complex text measurements, you are advised to call the corresponding graphics measurement API, 
 * > specifically [Paragraph]{@link @ohos.graphics.text:text.ParagraphStyle}.
 * >
 * > - Avoid using [ApplicationContext.setFontSizeScale]{@link ApplicationContext:ApplicationContext#setFontSizeScale} 
 * > during text measurement API calls. To ensure timing consistency and the accuracy of measurement results, manually 
 * > listen for font scale changes.
 * >
 * > - For measuring text after truncation, direct use of the string length for truncation may lead to inaccuracies. 
 * > This is because certain Unicode characters (for example, emojis) have code points with a length greater than 1, and
 * > truncating by string length can split these multi-code-point characters, resulting in incorrect text display or 
 * > measurement errors. As such, you are advised to perform iterative processing based on Unicode code points during 
 * > truncation.
 *
 * @file Text Measurement
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
   * 设置被计算文本布局宽度。
   * 
   * **说明：** 
   * 
   * 默认单位为vp，不支持设置百分比字符串。若不设置，则文本SizeOptions宽度为单行布局所占最大宽度值，若设置则为设置值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  constraintWidth?: number | string | Resource;

  /**
   * 设置被计算文本字体大小，fontSize为number类型时，使用vp单位。
   * 
   * 默认值：16
   * 
   * **说明：** 
   * 
   * 不支持设置百分比字符串。
   * 
   * 从API version 12开始，fontSize为number类型时，使用fp单位。
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
   * number类型取值范围为[0,1]，取值间隔为1，依次对应FontStyle中的枚举值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  fontStyle?: number | FontStyle;

  /**
   * 设置被计算文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"
   * lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。
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
   * 设置被计算文本字体列表。默认字体'HarmonyOS Sans'，且当前只支持这种字体。
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
   * number类型取值范围为[0,3]，取值间隔为1，依次对应TextAlign中的枚举值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  textAlign?: number | TextAlign;

  /**
   * 设置被计算文本超长时的截断方式。
   * 
   * 默认值：1
   * 
   * number类型取值范围为[0,3]，取值间隔为1，依次对应TextOverflow中的枚举值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  overflow?: number | TextOverflow;

  /**
   * 设置被计算文本最大行数。
   * 
   * 取值范围：[0, INT32_MAX]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  maxLines?: number;

  /**
   * 设置被计算文本行高。
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
   * 默认值：0
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
   * number类型取值范围为[0,2]，取值间隔为1，依次对应TextCase中的枚举值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  textCase?: number | TextCase;

  /**
   * 设置首行文本缩进，默认值为0。
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
   * WordBreak.BREAK_ALL与{overflow: TextOverflow.Ellipsis}，`maxLines`组合使用可实现英文单词按字母截断，超出部分以省略号显示。
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
   * > -measureText需要先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getMeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmeasureutils12)方法获取
   * > [MeasureUtils]{@link @ohos.arkui.UIContext}对象，然后通过该对象进行调用。且直接使用measureText可能导致
   * > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getMeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmeasureutils12)方法获取当前UI上下文关
   * > 联的[MeasureUtils]{@link @ohos.arkui.UIContext}对象。
   * >
   * > - measureText接口的计算结果始终是单行文本的宽度，入参options中配置的布局约束（如constraintWidth、maxLines）对measureText的结果没有影响。如果需要计算布局约束下的宽度，请使用
   * > [measureTextSize](docroot://reference/apis-arkui/arkts-apis-uicontext-measureutils.md#measuretextsize12)方法。
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
   * > -measureTextSize需要先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getMeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmeasureutils12)方法获取
   * > [MeasureUtils]{@link @ohos.arkui.UIContext}对象，然后通过该对象进行调用。且直接使用measureTextSize可能导致
   * > [UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题。
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getMeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmeasureutils12)方法获取当前UI上下文关
   * > 联的[MeasureUtils]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { MeasureOptions } options - 被计算文本描述信息。
   * @returns { SizeOptions } 返回文本所占布局宽度和高度。<br/>**说明:**  <br/>文本宽度以及高度返回值单位均为px。
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