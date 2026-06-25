/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * 文本超长显示方式对象。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface TextOverflowOptions {

  /**
   * Text overflow option.
   *
   * @default TextOverflow.Clip [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  overflow: TextOverflow;
}

/**
 * 显示一段文本的组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface TextInterface {

  /**
   *
   * 定义文本组件构造函数。
   * @param { string | Resource } content - 文本内容。当不包含子组件[Span]{@link span}和未设置[属性字符串]{@link styled_string}时该参数生效。<br/>默认
   *     值：' '<br/>**说明：** <br/>显示内容的优先级：属性字符串>Span>Text的文本内容。
   * @param { TextOptions } value - 文本组件初始化选项。<br/> [since 11]
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (content?: string | Resource, value?: TextOptions): TextAttribute;
}

/**
 * 除支持[通用属性]{@link common}，还支持以下属性：
 * 
 * **布局与对齐**
 * 
 * 除支持[通用事件]{@link common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class TextAttribute extends CommonMethod<TextAttribute> {

  /**
   * 设置文本样式。
   * 
   * 包括字体大小、字体粗细、字体族和字体风格。
   *
   * @param { Font } value - 文本样式。
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font(value: Font): TextAttribute;

  /**
   * 设置文本样式，支持设置字体配置项。
   * 
   * 仅Text组件生效，其子组件不生效。
   *
   * @param { Font } fontValue - 设置文本样式。
   * @param { FontSettingOptions } options - 设置字体配置项。
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  font(fontValue: Font, options?: FontSettingOptions): TextAttribute;

  /**
   * 设置字体颜色。
   *
   * @param { ResourceColor } value - 字体颜色。<br/>默认值：'#e6182431'<br/>Wearable设备上默认值为：'#c5ffffff'
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): TextAttribute;

  /**
   * 设置字体大小。
   *
   * @param { number | string | Resource } value - 字体大小。fontSize为number类型时，使用fp单位。不支持设置百分比字符串。<br />默认值：16fp<br />
   *     Wearable设备上默认值为：15fp
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: number | string | Resource): TextAttribute;

  /**
   * 设置文本最小显示字号。
   * 
   * string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 需配合[maxFontSize]{@link TextAttribute#maxFontSize}以及[maxLines]{@link TextAttribute#maxLines}或布局大小限制使用，单独设置不生效。
   * 
   * 自适应字号生效时，fontSize设置不生效。
   * 
   * minFontSize小于或等于0时，自适应字号不生效，此时按照[fontSize]{@link TextAttribute#fontSize}属性的值生效，未设置时按照其默认值生效。
   * 
   * 从API version 18开始，支持在子组件和属性字符串上生效，未设置字号的部分会自适应。
   *
   * @param { number | string | Resource } value - 文本最小显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  minFontSize(value: number | string | Resource): TextAttribute;

  /**
   * 设置文本最大显示字号。
   * 
   * string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 需配合[minFontSize]{@link TextAttribute#minFontSize}以及[maxLines]{@link TextAttribute#maxLines}或布局大小限制使用，单独设置不生效。
   * 
   * 自适应字号生效时，fontSize设置不生效。
   * 
   * maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照[fontSize]{@link TextAttribute#fontSize}属性的值生效，未设置时按照其默认值生
   * 效。
   * 
   * 从API version 18开始支持在子组件和属性字符串上生效，未设置字号的部分会自适应。
   *
   * @param { number | string | Resource } value - 文本最大显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxFontSize(value: number | string | Resource): TextAttribute;

  /**
   * 设置文本最小的字体缩放倍数。
   *
   * @param { number | Resource } scale - 文本最小的字体缩放倍数。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置的值小于0时按0处理，大于1时按1处理，其余异常值默认不生
   *     效。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  minFontScale(scale: number | Resource): TextAttribute;

  /**
   * 设置文本最大的字体缩放倍数。
   *
   * @param { number | Resource  } scale - 文本最大的字体缩放倍数。<br/>取值范围：[1, +∞)<br/>**说明：** <br/>设置的值小于1时，按值为1处理，其余异常值默认不生效。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  maxFontScale(scale: number | Resource): TextAttribute;

  /**
   * 设置字体样式。
   *
   * @param { FontStyle } value - 字体样式。<br/>默认值：FontStyle.Normal
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): TextAttribute;

  /**
   * 设置文本的字体粗细，设置过大可能会在不同字体下有截断。
   *
   * @param { number | FontWeight | string } value - Font weight. For the number type, the value range is [100, 900], at
   *     an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the
   *     string type, only strings that represent a number, for example, **400**, and the following enumerated values of
   *     **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.<br>Default value:
   *     **FontWeight.Normal**<br>Default value on wearable devices: **FontWeight.Regular**<br>The
   *     [Resource]{@link Resource} type is supported since API version 20. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类
   *     型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。<br/>默认值：
   *     FontWeight.Normal<br/>Wearable设备上默认值为：FontWeight.Regular <br>从API version 20开始，支持[Resource]{@link Resource}类
   *     型。 [since 20]
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): TextAttribute;

  /**
   * 设置文本字重，支持设置字体配置项。
   * 
   * 仅Text组件生效，其子组件不生效。<!--RP4--><!--RP4End-->
   *
   * @param { number | FontWeight | string } weight - Font weight. For the number type, the value ranges from 100 to 90
   *     0, at an interval of 100. A larger value indicates a heavier font weight. The default value is **400**. For the
   *     string type, only strings that represent a number, for example, **400**, and the following enumerated values of
   *     **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.<br>The
   *     [Resource]{@link Resource} type is supported since API version 20. [since 12 - 19]
   * @param { number | FontWeight | ResourceStr } weight - 设置文本字重。number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类
   *     型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。 <br>从API
   *     version 20开始，支持[Resource]{@link Resource}类型。 [since 20]
   * @param { FontSettingOptions } options - 设置字体配置项。<br/>当options的参数enableVariableFontWeight取值false时，禁用可变字重调节，weight取值为
   *     [100, 900]范围内的整百数值时，字重取值为weight。weight是非整百数值时，字重取默认值400。<br/>当options的参数enableVariableFontWeight取值true时，启用可变字重调
   *     节，weight取值为[100, 900]范围内任意整数时，字重取值为weight。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions): TextAttribute;

  /**
   *
   * @param { LengthMetrics } value - 文本的行间距。默认值：0
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineSpacing(value: LengthMetrics): TextAttribute;

  /**
   * 设置文本的最小行高，设置值不大于0时，取默认值0。
   *
   * @param { LengthMetrics | undefined } value - 文本的最小行高，不支持百分比。<br/>设置的值不大于0时按0处理。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  minLineHeight(value: LengthMetrics | undefined): TextAttribute;

  /**
   * 设置文本的最大行高，设置值不大于0时，最大行高不受限制。
   * 
   * maxLineHeight小于minLineHeight时，maxLineHeight按照minLineHeight属性的值生效。
   *
   * @param { LengthMetrics | undefined } value - 文本的最大行高，不支持百分比。<br/>设置的值不大于0时按0处理，设置为0时，最大行高不受限制。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  maxLineHeight(value: LengthMetrics | undefined): TextAttribute;

  /**
   * 使用倍数模式设置文本的行高。
   * 
   * 设置行高为入参（value）与字高（fontHeight）的乘积。
   * 
   * > **说明：**
   * >
   * > 当lineHeightMultiple使用有效值和[lineHeight]{@link TextAttribute#lineHeight}或
   * > [lineSpacing]{@link TextAttribute#lineSpacing(value: LengthMetrics)}同时设置时，仅lineHeightMultiple生效。
   * > lineHeightMultiple小于0时，lineHeightMultiple不生效，使用[lineHeight]{@link TextAttribute#lineHeight}和
   * > [lineSpacing]{@link TextAttribute#lineSpacing(value: LengthMetrics)}设置行高和行间距。
   *
   * @param { number | undefined } value - 使用行高的倍数数值。<br>取值范围：
   *     [0, +∞)<br/>**说明：**<br/>- 设置的值小于0时，lineHeightMultiple不生效。<br/>- 设置的值等于0时，等效于设置为1，表现为行高没有变化。<br/>- 支持小数输入。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  lineHeightMultiple(value: number | undefined): TextAttribute;

  /**
   * 设置文本段落在水平方向的对齐方式。
   * 
   * 文本段落宽度占满Text组件宽度。
   * 
   * 可通过[align]{@link CommonMethod#align(value: Alignment)}属性控制文本段落在垂直方向上的位置，此组件中不可通过align属性控制文本段落在水平方向上的位置，具体效果如下：
   * 
   * - Alignment.TopStart、Alignment.Top、Alignment.TopEnd：内容顶部对齐。
   * - Alignment.Start、Alignment.Center、Alignment.End：内容垂直居中。
   * - Alignment.BottomStart、Alignment.Bottom、Alignment.BottomEnd：内容底部对齐。
   * 
   * 当textAlign属性设置为TextAlign.JUSTIFY时，需要根据文本内容设置[wordBreak]{@link TextAttribute#wordBreak}属性，且最后一行文本水平对齐首部，不参与两端对齐。
   * 
   * > **说明：**  
   * >
   * > textAlign只能调整文本整体的布局，不影响字符的显示顺序。若需要调整字符的显示顺序，请参考[镜像状态字符对齐](docroot://ui/arkts-internationalization.md#镜像状态字符对齐)。
   *
   * @param { TextAlign } value - 文本段落在水平方向的对齐方式。<br/>默认值：TextAlign.Start<br/>Wearable设备上默认值为：TextAlign.Center
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textAlign(value: TextAlign): TextAttribute;

  /**
   * 设置文本段落在垂直方向的对齐方式。
   * 
   * > **说明：**
   * >
   * > - 与[halfLeading]{@link TextAttribute#halfLeading}同时配置时，halfLeading不生效。
   * >
   * > - 一个段落下使用同一字号必须同时设置行高[lineHeight]{@link TextAttribute#lineHeight}或者同一个段落不同字号文本混排时才有效果差异，否则设置了该属性任意枚举值和未设置该属性都是一样的
   * > 排版效果。属性字符串[TextStyle]{@link TextStyle}中的SuperscriptStyle上下角标样式仅在[TextVerticalAlign]{@link TextVerticalAlign}属性值为
   * > TextVerticalAlign.BASELINE时生效，其余垂直对齐方式下上下角标文本和普通文本表现一致，无上下角标效果。
   *
   * @param { Optional<TextVerticalAlign> } textVerticalAlign - 文本段落在垂直方向的对齐方式。<br/>默认值：TextVerticalAlign.BASELINE
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textVerticalAlign(textVerticalAlign: Optional<TextVerticalAlign>): TextAttribute;

  /**
   * 设置文本内容区在组件内的垂直对齐方式。
   * 
   * 此接口可以在文本内容区高度大于组件高度时生效，确保文本内容区的对齐方式正确显示。
   *
   * @param { Optional<TextContentAlign> } textContentAlign - 文本段落在垂直方向的对齐方式。<br/>默认(undefined和异常值情况下)和align属性设置为Center效
   *     果一致。
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  textContentAlign(textContentAlign: Optional<TextContentAlign>): TextAttribute;

  /**
   * 设置文本的文本行高。
   * 
   * 设置值不大于0时，不限制文本行高，自适应字体大小，number类型时单位为fp。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * > **说明：**
   * >
   * > 特殊字符字体高度远超出同行的其他字符高度时，文本框出现截断、遮挡、内容相对位置发生变化等不符合预期的显示异常，需要开发者调整组件高度、行高等属性，修改对应的页面布局。
   *
   * @param { number | string | Resource } value - 文本的文本行高。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  lineHeight(value: number | string | Resource): TextAttribute;

  /**
   * 设置文本超长时的显示方式。
   * 
   * 当
   * [TextOverflowOptions](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#textoverflowoptions18对象说明)
   * 设置为TextOverflow.None、TextOverflow.Clip或TextOverflow.Ellipsis时：
   * 
   * - 设置为TextOverflow.None、TextOverflow.Clip，文本超长时按最大行截断显示。
   * - 设置为TextOverflow.Ellipsis，文本超长时显示不下的文本用省略号代替。
   * - 需配合[maxLines]{@link TextAttribute#maxLines}使用，单独设置不生效。
   * - 断行规则参考[wordBreak]{@link TextAttribute#wordBreak}。默认情况下参考WordBreak.BREAK_WORD的截断方式，文本截断按字进行。例如，英文以单词为最小单位进行截断。若需要以
   * 字母为单位进行截断，可设置wordBreak属性为WordBreak.BREAK_ALL。
   * - 折行规则参考[lineBreakStrategy]{@link TextAttribute#lineBreakStrategy}。该属性在[wordBreak]{@link TextAttribute#wordBreak}不等
   * 于WordBreak.BREAK_ALL的时候生效，不支持连词符。
   * - 从API version 11开始，建议优先组合[textOverflow]{@link TextAttribute#textOverflow}和
   * [wordBreak]{@link TextAttribute#wordBreak}属性来设置截断方式，具体详见
   * [示例4（设置文本断行及折行）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#示例4设置文本断行及折行)<!--RP1--><!--RP1
   * End-->。
   * 
   * 当TextOverflowOptions设置为TextOverflow.MARQUEE时：
   * 
   * - 文本在一行内滚动显示。
   * - 设置[maxLines]{@link TextAttribute#maxLines}及[copyOption]{@link TextAttribute#copyOption}属性均不生效。
   * - Text组件[clip]{@link CommonMethod#clip(value: boolean)}属性默认为true。
   * - 属性字符串的[CustomSpan]{@link CustomSpan}不支持跑马灯模式。
   * - [textAlign]{@link TextAttribute#textAlign}属性的生效规则：当文本不可滚动时，textAlign属性生效；当文本可滚动时，textAlign属性不生效。
   * - 从API version 12开始，当TextOverflowOptions设置为TextOverflow.MARQUEE时，支持ImageSpan组件，文本和图片可在一行内滚动显示。
   *
   * @param { object } value [since 7 - 17]
   * @param { TextOverflowOptions } options - 文本超长显示方式对象 [since 18]
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textOverflow(options: TextOverflowOptions): TextAttribute;

  /**
   * 设置字体族。
   * 
   * > **说明：**
   * >
   * > 可以使用[loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}注册自定义字体。
   *
   * @param { string | Resource } value - 字体族。默认字体'HarmonyOS Sans'。<br>使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial,HarmonyOS
   *     Sans'。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: string | Resource): TextAttribute;

  /**
   * 设置文本的最大行数。
   * 
   * 默认情况下，文本是自动折行的，如果指定此属性，则文本最多不会超过指定的行数。如果有多余的文本，可以通过[textOverflow]{@link TextAttribute#textOverflow}来指定截断方式。
   *
   * @param { number } value - 文本的最大行数。<br/>**说明：** <br/>取值范围：[0, INT32_MAX]<br/>设置为0时，不显示文本内容。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxLines(value: number): TextAttribute;

  /**
   * 设置文本显示的最小行数。
   * 
   * 如果实际文本高度小于最小行数对应的高度，最后显示高度为最小行数对应的高度。
   * 
   * 与[maxLines]{@link TextAttribute#maxLines}同时配置时，最小行高显示范围不会超过最大行高限制。
   * 
   * 如果文本设置了[constraintSize]{@link CommonMethod#constraintSize}，那么组件最后显示高度会在
   * [constraintSize]{@link CommonMethod#constraintSize}约束内。
   *
   * @param { Optional<number> } minLines - 文本最小行数。<br>取值范围：[0, INT32_MAX]<br/>设置的值小于0时按0处理。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  minLines(minLines: Optional<number>): TextAttribute;

  /**
   * 设置文本装饰线样式及其颜色。
   * 
   * > **说明：**
   * >
   * > 当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见"gjyqp"等英文字符。
   * >
   * > 当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值"#00FFFFFF"时，装饰线颜色设置为透明色。
   *
   * @param { object } value - Style of the text decorative line.<br>Default value:<br>{<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}<br>**NOTE**<br>The
   *     **style** parameter cannot be used in widgets. [since 7 - 11]
   * @param { DecorationStyleInterface } value - 文本装饰线样式对象。<br/>默认值：<br/>{<br/> type: TextDecorationType.None,<br/> 
   *     color: Color.Black,<br/> style: TextDecorationStyle.SOLID <br/>}<br/>**说明：** <br/>style参数不支持卡片能力。 [since 12]
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  decoration(value: DecorationStyleInterface): TextAttribute;

  /**
   * 设置文本字符间距。
   * 
   * 设置该值为百分比时，按默认值显示。设置该值为0时，按默认值显示。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 当取值为负值时，文字会被压缩。负值过小时会将组件内容区大小压缩为0，导致内容无法显示。
   * 
   * 对每个字符生效，包括行尾字符。
   *
   * @param { number | string } value - Letter spacing.<br>Default value: **0**<br>Unit: [fp]{@link common}<br>The
   *     [Resource]{@link Resource} type is supported since API version 20. [since 7 - 19]
   * @param { number | ResourceStr } value - 文本字符间距。<br/>默认值：0<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) <br>从API version 20开始，支持
   *     [Resource]{@link Resource}类型。 [since 20]
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  letterSpacing(value: number | ResourceStr): TextAttribute;

  /**
   * 设置文本大小写。
   *
   * @param { TextCase } value - 文本大小写。<br />默认值：TextCase.Normal
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textCase(value: TextCase): TextAttribute;

  /**
   * 设置文本基线的偏移量。
   * 
   * 设置该值为百分比时，按默认值显示。
   * 
   * 正数内容向上偏移，负数向下偏移。
   *
   * @param { number | string } value - Offset of the text baseline.<br>Default value: **0**<br>The
   *     [Resource]{@link Resource} type is supported since API version 20. [since 7 - 19]
   * @param { number | ResourceStr } value - 文本基线的偏移量。<br/>默认值：0 <br>从API version 20开始，支持[Resource]{@link Resource}类
   *     型。 [since 20]
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  baselineOffset(value: number | ResourceStr): TextAttribute;

  /**
   * 设置组件是否支持文本可复制粘贴。
   * 
   * 从API version 20开始，当Text组件执行复制操作时，会将HTML格式的内容添加到剪贴板中。
   * 
   * - 当Text组件包含子组件时，仅支持[Span]{@link span}和[ImageSpan]{@link image_span}子组件向剪贴板中添加HTML格式的内容。
   * - 设置Text组件的属性字符串时，请参考属性字符串[toHtml]{@link StyledString#toHtml}接口文档，以了解支持转换为HTML的范围。
   * 
   * 设置copyOption为CopyOptions.InApp或者CopyOptions.LocalDevice时：
   * 
   * - 长按文本，会弹出文本选择菜单，可选中文本并进行复制、全选操作。
   * - 默认情况下，长按选中文本可拖拽。若要取消此功能，可将 `draggable` 设置为 `false`。
   * - 若需要支持Ctrl+C复制，需同时设置[textSelectable]{@link TextAttribute#textSelectable}为TextSelectableMode.SELECTABLE_FOCUSABLE。
   * 
   * 此时Text会监听onClick事件，手势事件为非冒泡事件，若需要点击Text组件区域响应父组件的点击手势事件，建议在父组件上使用
   * [parallelGesture]{@link CommonMethod#parallelGesture}绑定手势识别，也可参考
   * [示例7（设置文本识别）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#示例7设置文本识别)。
   * 
   * 由于卡片没有长按事件，此场景下长按文本，不会弹出文本选择菜单。
   *
   * @param { CopyOptions } value - 组件是否支持文本可复制粘贴。<br />默认值：CopyOptions.None
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): TextAttribute;

  /**
   * 设置选中文本拖拽效果。
   * 
   * 不能和[onDragStart]{@link CommonMethod#onDragStart}事件同时使用。
   * 
   * 当draggable设置为true时，需配合[CopyOptions]{@link CopyOptions}使用，设置copyOptions为CopyOptions.InApp或者CopyOptions.LocalDevice，支
   * 持对选中文本的拖拽及复制到输入框。
   *
   * @param { boolean } value - 选中文本拖拽效果。<br/>true表示选中文本可拖拽，false表示不可拖拽。<br/>默认值：false
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  draggable(value: boolean): TextAttribute;

  /**
   * 设置文字阴影效果。
   * 
   * 不支持ShadowOptions对象中的type、fill字段和color字段的智能取色模式。
   * 
   * 从API version 11开始，该接口支持以数组形式入参，实现多重文字阴影。
   *
   * @param { ShadowOptions } value - Text shadow. [since 10 - 10]
   * @param { ShadowOptions | Array<ShadowOptions> } value - 文字阴影效果。 [since 11]
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): TextAttribute;

  /**
   * 设置文本自适应布局调整字号的方式。
   * 
   * 规则如下：
   * 
   * - MAX_LINES_FIRST模式：优先使用[maxLines]{@link TextAttribute#maxLines}属性来调整文本高度。如果使用maxLines属性的布局大小超过了布局约束，则尝试在
   * [minFontSize]{@link TextAttribute#minFontSize}和[maxFontSize]{@link TextAttribute#maxFontSize}的范围内缩小字体以显示更多文本。
   * - MIN_FONT_SIZE_FIRST模式：优先使用minFontSize属性来调整文本高度。如果使用minFontSize属性可以将文本布局在一行中，则尝试在minFontSize和maxFontSize的范围内增大字体并使
   * 用最大限度的字体大小在一行内显示，否则按minFontSize显示。
   * - LAYOUT_CONSTRAINT_FIRST模式：优先使用布局约束来调整文本高度。如果布局大小超过布局约束，则尝试在minFontSize和maxFontSize的范围内缩小字体以满足布局约束。如果将字体大小缩小到
   * minFontSize后，布局大小仍然超过布局约束，则删除超过布局约束的行。
   *
   * @param { TextHeightAdaptivePolicy } value - 文本自适应高度的方式。<br/>默认值：TextHeightAdaptivePolicy.MAX_LINES_FIRST
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAttribute;

  /**
   * 设置首行文本缩进。
   *
   * @param { Length } value - 首行文本缩进。<br/>默认值：0<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) <br/>取值范围：大于等于0。设置负数时，按默认值处理。
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textIndent(value: Length): TextAttribute;

  /**
   * 指定文本中每一行的尾部缩进。
   *
   * <p><strong>说明</strong>：
   * <br>当提供单个LengthMetrics值时，所有行共享相同的尾部缩进。
   * <br>当提供数组时，第i个元素指定第i行的尾部缩进。
   * 如果文本行数超过数组长度，则使用数组中的最后一个元素应用至其余的行。
   * <br>负值被视为0。
   * <br>如果设置为undefined，则使用默认值0。
   * </p>
   *
   * @param { Optional<LengthMetrics | Array<LengthMetrics>> } value - 尾部缩进值。默认值为0
   * @returns { TextAttribute } 文本属性实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  tailIndents(value: Optional<LengthMetrics | Array<LengthMetrics>>): TextAttribute;

  /**
   * 设置断行规则。
   * 
   * 默认情况下，不调用wordBreak或者设置WordBreak.BREAK_WORD时，文本截断按字进行。例如，英文以单词为最小单位进行截断。
   * 
   * WordBreak.BREAK_ALL与{overflow:&nbsp;TextOverflow.Ellipsis}、maxLines组合使用，可实现英文单词按字母截断，超出部分以省略号显示。
   *
   * @param { WordBreak } value - 断行规则。 <br />默认值：WordBreak.BREAK_WORD
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  wordBreak(value: WordBreak): TextAttribute;

  /**
   * 设置折行规则。该属性在[wordBreak]{@link TextAttribute#wordBreak}不等于WordBreak.BREAK_ALL的时候生效，且不支持连词符。
   *
   * @param { LineBreakStrategy } strategy - 文本的折行规则。 <br />默认值：LineBreakStrategy.GREEDY
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineBreakStrategy(strategy: LineBreakStrategy): TextAttribute;

  /**
   * 长按文本内部区域弹出剪贴板后，点击剪贴板复制按钮，触发该回调。目前只有文本可以复制。
   *
   * @param { function } callback - 监听事件的回调函数。
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onCopy(callback: (value: string) => void): TextAttribute;

  /**
   * 在进行复制操作前，触发该回调。
   *
   * @param { Callback<string, boolean> } callback - string为将要被复制的文本内容；boolean表示当前文本是否允许被复制，true：允许文本被复制；false：不允许文本被复制。
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Callback<string, boolean>): TextAttribute;

  /**
   * 设置选中区域。
   * 
   * 选中区域高亮且显示手柄和文本选择菜单。
   * 
   * 当[copyOption]{@link TextAttribute#copyOption}设置为CopyOptions.None时，设置selection属性不生效。
   * 
   * 当[textOverflow]{@link TextAttribute#textOverflow}设置为TextOverflow.MARQUEE时，设置selection属性不生效。
   * 
   * 当selectionStart大于等于selectionEnd时不选中。可选范围为[0, textSize]，其中textSize为文本内容最大字符数，入参小于0时处理为0，大于textSize时处理为textSize。
   * 
   * 当selectionStart或selectionEnd位于截断的不可见区域时，文本不选中。当[clip]{@link CommonMethod#clip(value: boolean)}设置为false时，超出父组件的文本可以被
   * 选中。
   * 
   * 可通过[onTextSelectionChange]{@link TextAttribute#onTextSelectionChange}接口获取选中区域位置变化结果。
   *
   * @param { number } selectionStart - 所选文本的起始位置。<br />默认值：-1
   * @param { number } selectionEnd - 所选文本的结束位置。<br />默认值：-1
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  selection(selectionStart: number, selectionEnd: number): TextAttribute;

  /**
   * 设置文本框选中区域手柄颜色。
   *
   * @param { ResourceColor } color - 文本选中手柄颜色。<br/>默认值：'#007DFF'
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  caretColor(color: ResourceColor): TextAttribute;

  /**
   * 设置文本选中底板颜色。如果未设置不透明度，默认为20%不透明度。
   *
   * @param { ResourceColor } color - 文本选中底板颜色。<br/>默认值：'#007DFF'
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  selectedBackgroundColor(color: ResourceColor): TextAttribute;

  /**
   * 可以显示为径向渐变[RadialGradientStyle]{@link RadialGradientStyle}或线性渐变[LinearGradientStyle]{@link LinearGradientStyle}或纯色
   * [ColorShaderStyle]{@link ColorShaderStyle}的效果，shaderStyle的优先级高于[fontColor]{@link SymbolSpanAttribute#fontColor}和AI识
   * 别，纯色建议使用[fontColor]{@link SymbolSpanAttribute#fontColor}。
   *
   * @param { ShaderStyle } shader - 径向渐变或线性渐变或纯色。<br/>根据传入的参数区分处理径向渐变[RadialGradientStyle]{@link RadialGradientStyle}或线
   *     性渐变[LinearGradientStyle]{@link LinearGradientStyle}或纯色[ColorShaderStyle]{@link ColorShaderStyle}，最终设置到Text文本上显示
   *     为渐变色效果。<br/>**说明：** <br/>当设置为径向渐变[RadialGradientStyle]{@link RadialGradientStyle}时，若
   *     [RadialGradientOptions]{@link RadialGradientOptions}的center参数设置到组件范围外时，可将repeating参数设置为true，此时渐变效果会更明显。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  shaderStyle(shader: ShaderStyle): TextAttribute;

  /**
   * 设置省略位置。
   * 
   * ellipsisMode属性需要与overflow设置为TextOverflow.Ellipsis以及maxLines使用，单独设置ellipsisMode属性不生效。
   * 
   * EllipsisMode.START和EllipsisMode.CENTER仅在单行超长文本生效。
   *
   * @param { EllipsisMode } value - 省略位置。 <br />默认值：EllipsisMode.END
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  ellipsisMode(value: EllipsisMode): TextAttribute;

  /**
   * 设置是否进行文本特殊实体识别。当enableDataDetector设置为true时，识别特殊实体。
   * 
   * 所识别实体的样式如下，即字体颜色改为蓝色、并添加蓝色下划线。
   * 
   * > **说明：**
   * >
   * > - 设备底层需要具备文本识别能力，该接口才能生效。
   * >
   * > - 当[textOverflow]{@link TextAttribute#textOverflow}设置为TextOverflow.MARQUEE时，不进行文本特殊实体识别。
   * 
   * <!--RP2--><!--RP2End-->
   *
   * @param { boolean } enable - 使能文本识别。<br/>true表示文本可实体识别，false表示不可识别。<br/>默认值：false
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableDataDetector(enable: boolean): TextAttribute;

  /**
   * 设置文本识别配置，可配置识别类型、实体显示样式，以及是否开启长按预览等。
   * 
   * 需配合[enableDataDetector]{@link TextAttribute#enableDataDetector}一起使用，设置enableDataDetector为true时，dataDetectorConfig的配
   * 置才能生效。
   *
   * @param { TextDataDetectorConfig } config - 文本识别配置。
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dataDetectorConfig(config: TextDataDetectorConfig): TextAttribute;

  /**
   * 设置是否对选中文本进行实体识别。该接口依赖设备底层应具有文本识别能力，否则设置不会生效。
   * 
   * 当enableSelectedDataDetector设置为true时，默认识别所有类型的实体。
   * 
   * 需要[CopyOptions]{@link CopyOptions}为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时，本功能生效。
   *
   * @param { boolean | undefined } enable - 开启选中词文本识别。<br/>true：开启识别，false：关闭识别。默认值为：true。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): TextAttribute;

  /**
   * 设置自定义选择菜单。
   * 
   * bindSelectionMenu的长按响应时长为600ms，
   * [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
   * 的长按响应时长为800ms，当两者同时绑定且触发方式均为长按时，优先响应bindSelectionMenu。
   * 
   * 自定义菜单超长时，建议内部嵌套使用[Scroll]{@link scroll}组件，避免键盘被遮挡。
   * 
   * 从API版本26.0.0开始，文本组件调用该接口时，options中的menuType属性传入MenuType.PREVIEW_MENU，设置图片预览菜单的能力生效。
   * 
   * 如果要使用图片预览菜单，需要同时把spanType设置为TextSpanType.IMAGE，responseType设置为TextResponseType.LONG_PRESS，options中的menuType设置为
   * MenuType.PREVIEW_MENU才会生效。
   * 
   * 当[copyOption]{@link TextAttribute#copyOption}为CopyOptions.None时，设置图片预览菜单将不会生效。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * >
   * > 通过[editMenuOptions]{@link TextAttribute#editMenuOptions}设置文本选择菜单时，保留系统默认的风格，触发菜单弹出的条件不变。
   * >
   * > 通过[bindSelectionMenu]{@link TextAttribute#bindSelectionMenu}设置文本选择菜单时，风格由开发者定义，触发菜单弹出的条件由开发者定义。
   *
   * @param { TextSpanType } spanType - 选择菜单的类型。<br/>默认值：TextSpanType.TEXT
   * @param { CustomBuilder } content - 选择菜单的内容。
   * @param { TextResponseType } responseType - 选择菜单的响应类型。<br/>默认值：TextResponseType.LONG_PRESS
   * @param { SelectionMenuOptions } [options] - 选择菜单的选项。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bindSelectionMenu(spanType: TextSpanType, content: CustomBuilder, responseType: TextResponseType,
    options?: SelectionMenuOptions): TextAttribute;

  /**
   * 文本选择的位置发生变化时，触发该回调。
   *
   * @param { function } callback - 监听事件的回调函数。
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextAttribute;

  /**
   * 设置文字特性效果，比如数字等宽的特性。
   * 
   * 格式为：normal \| \<feature-tag-value\>
   * 
   * \<feature-tag-value\>的格式为：\<string\> \[ \<integer\> \| on \| off ]
   * 
   * \<feature-tag-value\>的个数可以有多个，中间用','隔开。
   * 
   * 例如，使用等宽数字的输入格式为："ss01" on。
   * 
   * > **说明：**
   * >
   * > 不支持Text内同时存在文本内容和Span或ImageSpan子组件。如果同时存在，只显示Span或ImageSpan内的内容。
   * >
   * > 字体排版引擎会对开发者传入的宽度[width]{@link CommonMethod#width(value: Length)}进行向下取整，保证是整型像素后进行排版。如果向上取整，可能会出现文字右侧被截断。
   * >
   * > 当多个Text组件在[Row]{@link row}容器内布局且没有设置具体的布局分配信息时，Text会以Row的最大尺寸进行布局。如果需要子组件主轴累加的尺寸不超过Row容器主轴的尺寸，可以设置
   * > [layoutWeight]{@link CommonMethod#layoutWeight}或者是以[Flex]{@link common}布局来约束子组件的主轴尺寸。
   * >
   * > 系统默认字体支持的liga连字：Th fb ff fb ffb ffh ffi ffk ffl fh fi fk fl rf rt rv rx ry。常导致Span、属性字符串的效果不符合预期，关闭liga连字特性可以规避。
   * >
   * > 文字特性效果与使用的字体文件密切相关。例如，8标点挤压功能在当前系统默认字体中仅对左侧标点符号生效，而右侧标点符号及感叹号、顿号、问号均不生效。
   *
   * @param { string } value - 文字特性效果。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): TextAttribute;

  /**
   * 设置文本跑马灯模式的配置项。
   * 
   * 当textOverflow设置为TextOverflow.MARQUEE时，marqueeOptions的设置才能生效。
   *
   * @param { Optional<TextMarqueeOptions> } options - 当Text组件的textOverflow属性设置为MARQUEE时，可通过marqueeOptions设置跑马灯动效具体的属性，如
   *     开关、步长、循环次数、方向等。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  marqueeOptions(options: Optional<TextMarqueeOptions>): TextAttribute;

  /**
   * 跑马灯动画进行到特定的阶段时，触发该回调。
   *
   * @param { Callback<MarqueeState> } callback - 通过callback参数指定触发回调的状态，状态由MarqueeState枚举定义，例如开始滚动、滚动一次、滚动完成。
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onMarqueeStateChange(callback: Callback<MarqueeState>): TextAttribute;

  /**
   * 设置是否支持卡片敏感隐私信息。
   *
   * @param { boolean } supported - 是否支持卡片敏感隐私信息。<br/>默认值为false，当设置为true时，隐私模式下文字将被遮罩为横杠“-”样式。<br/>**说明：** <br/>设置为null则
   *     表示不敏感。<br/>进入隐私模式需要卡片框架支持。隐私遮罩的类型可以通过[obscured]{@link CommonMethod#obscured}配置。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  privacySensitive(supported: boolean): TextAttribute;

  /**
   * 设置是否支持文本可选择、可获焦。
   * 
   * 需配合[copyOption]{@link TextAttribute#copyOption}使用。
   *
   * @param { TextSelectableMode } mode - 文本是否支持可选择、可获焦。 <br />默认值：TextSelectableMode.SELECTABLE_UNFOCUSABLE
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textSelectable(mode: TextSelectableMode): TextAttribute;

  /**
   * 设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。
   * 
   * 调用[disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20)或
   * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
   * 接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法[onCreateMenu]{@link EditMenuOptions.onCreateMenu}的入参列表中不包含被屏蔽的菜单选项。
   * 
   * > **说明：**
   * >
   * > 通过[editMenuOptions]{@link TextAttribute#editMenuOptions}设置文本选择菜单时，保留系统默认的风格，触发菜单弹出的条件不变。
   * >
   * > 通过[bindSelectionMenu]{@link TextAttribute#bindSelectionMenu}设置文本选择菜单时，风格由开发者定义，触发菜单弹出的条件由开发者定义。
   *
   * @param { EditMenuOptions } editMenu - 扩展菜单选项。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): TextAttribute;

  /**
   * 设置文本是否垂直居中。
   *
   * @param { boolean } halfLeading - 设置文本是否垂直居中。<br/>true表示将行间距平分至行的顶部与底部，false则不平分。<br/>默认值：false
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  halfLeading(halfLeading: boolean): TextAttribute;

  /**
   * 设置是否开启触控反馈。
   * 
   * 开启触控反馈时，需要在工程的[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段开启振动权限，配
   * 置如下：
   * 
   * > **说明：**
   * >
   * > 从API version 18开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } isEnabled - 是否开启触控反馈。<br/>true表示开启，false表示不开启。<br/>默认值：true
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): TextAttribute;

  /**
   * 设置是否在文本布局过程中优化每行末尾的空格，可解决行尾空格影响对齐显示效果问题。
   * 
   * 设置Text.optimizeTrailingSpace为true时：
   * 
   * * 多行、单行、图文混排等多种情况下均会优化行尾空格（TextAlign.Center或TextAlign.End时，优化效果明显）；
   * * 纯空格文本时，修饰线、阴影、背景色跟随空格文本显示；
   * * 行首空格不在优化范围内，行尾文本强制换行，每行行尾空格根据组件宽度优化行尾空格。
   * 
   * 当纯空格文本设置优化行尾空格[optimizeTrailingSpace]{@link TextAttribute#optimizeTrailingSpace}为true时，不允许同时设置文本背景色
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、空格装饰线
   * [decoration]{@link TextAttribute#decoration}和对齐[textAlign]{@link TextAttribute#textAlign}三个属性。
   *
   * @param { Optional<boolean> } optimize - 是否优化每行末尾的空格。<br/>true表示优化末尾空格，false则不优化。<br/>默认值：false
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  optimizeTrailingSpace(optimize: Optional<boolean>): TextAttribute;

  /**
   * 设置是否开启中文与西文的自动间距。
   *
   * @param { Optional<boolean> } enabled - 是否开启中文与西文的自动间距。<br/>true为开启自动间距，false为不开启。<br />默认值：false
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): TextAttribute;

  /**
   * 可以设置为数字翻牌动效[NumericTextTransition]{@link NumericTextTransition}。
   *
   * @param { Optional<ContentTransition> } transition - 文本动效属性。
   * @returns { TextAttribute } returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  contentTransition(transition: Optional<ContentTransition>): TextAttribute;

  /**
   * 设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。
   *
   * @param { Optional<boolean> } include - 是否在首行和尾行增加间距以避免文字截断。<br/>true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): TextAttribute;

  /**
   * 针对多行文字叠加，支持行高基于文字实际高度自适应。此接口仅当行高小于文字实际高度时生效。不通过该接口设置，默认行高不基于文字实际高度自适应。
   *
   * @param { Optional<boolean> } enabled - 行高是否基于文字实际高度自适应。<br/>true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): TextAttribute;

  /**
   * 设置是否开启行首标点符号压缩。
   * 
   * > **说明：**
   * >
   * > - 行首标点符号默认不压缩。
   * >
   * > - 支持压缩的标点符号，请参考[ParagraphStyle]{@link @ohos.graphics.text:text.ParagraphStyle}的行首压缩的标点范围。
   *
   * @param { Optional<boolean> } enabled - 是否开启行首标点符号压缩。<br/>true表示开启行首标点符号压缩；false表示不开启行首标点符号压缩。
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): TextAttribute;

  /**
   * 设置文本拖拽时的背板样式。
   *
   * @param { SelectedDragPreviewStyle | undefined } value - 文本拖拽时的背板样式。<br/>设置为undefined时：背板颜色跟随主题，浅色模式显示白色，深色模式显示黑色。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextAttribute;

  /**
   * 指定文本排版方向，未通过该接口设置时，默认文本排版方向遵循组件布局方向。
   *
   * @param { TextDirection | undefined } direction - 文本排版方向。<br/>设置为undefined时，按照TextDirection.DEFAULT处理，表现为文本排版方向遵循组件布
   *     局方向。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): TextAttribute;

  /**
   * 设置文本排版时是否使能孤字优化。不通过该接口设置，默认不使能孤字优化。
   * 
   * 孤字优化通过更高效地处理孤立字符（段落尾行首字符）来改善文本布局。使能后，它会调整换行点以尽可能避免孤立字符。孤字优化特性需在[wordBreak]{@link TextAttribute#wordBreak}为非
   * BREAK_ALL并且待排版文本首个[TextStyle]{@link @ohos.graphics.text:text.TextStyle}的
   * [locale]{@link @ohos.graphics.text:text.TextStyle}为“zh-Hans”或“zh-Hant”时生效。
   *
   * @param { Optional<boolean> } enabled - 段落最后一行是否使能孤字优化。<br/>true表示使能孤字优化，false表示不使能孤字优化。<br/>值为undefined或null时，不使能孤字
   *     优化。
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): TextAttribute;

  /**
   * 设置可变字体的属性。
   *
   * @param { Array<FontVariation> } fontVariations - 可变字体的属性数组，数组成员为可变字体的各种属性。fontVariations属性的优先级高于
   *     [fontWeight]{@link TextAttribute#fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions)}
   *     。
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontVariations(fontVariations: Array<FontVariation>): TextAttribute;

  /**
   * 设置文本渲染的增量更新策略。未通过该接口设置时，默认为IncrementalUpdatePolicy.NONE。
   * 
   * 该接口仅在Text内容包含属性字符串（StyledString）时生效。
   *
   * @param { IncrementalUpdatePolicy | undefined } policy - 文本渲染的增量更新策略。<br/>设置为undefined时，按
   *     IncrementalUpdatePolicy.NONE处理。
   * @returns { TextAttribute } - returns the instance of the TextAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  incrementalUpdatePolicy(policy: IncrementalUpdatePolicy | undefined): TextAttribute;

  /**
   * 是否启用行尾标点溢出。
   *
   * @param { Optional<boolean> } enabled - 是否开启，默认为false
   * @returns { TextAttribute } 返回TextAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  punctuationOverflow(enabled: Optional<boolean>): TextAttribute;

  /**
   * 设置文本的行间距。当不配置LineSpacingOptions时，首行上方和尾行下方默认会有行间距。
   *
   * @param { LengthMetrics } value - 文本的行间距。设置值不大于0时，取默认值0。
   * @param { LineSpacingOptions } options - 设置行间距配置项。<br/>默认值：{ onlyBetweenLines: false }
   * @returns { TextAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  lineSpacing(value: LengthMetrics, options?: LineSpacingOptions): TextAttribute;
}

/**
 * 定义文本组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const TextInstance: TextAttribute;

/**
 * 显示一段文本的组件。
 * 
 * ###### 子组件
 * 
 * 可以包含[Span]{@link span}、[ImageSpan]{@link image_span}、[SymbolSpan]{@link symbol_span}和
 * [ContainerSpan]{@link container_span}子组件。
 * 
 * > **说明：**
 * >
 * > 使用[子组件](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#子组件)实现
 * > [图文混排](docroot://ui/arkts-text-image-layout.md)场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const Text: TextInterface;

/**
 * [Span]{@link span}类型信息。
 * 
 * > **说明：**
 * >
 * > 菜单类型的匹配顺序如下。例如，用户长按文本时，根据以下规则查找：
 * >
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TextSpanType {

  /**
   * Span为文字类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  TEXT = 0,

  /**
   * Span为图像类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  IMAGE = 1,

  /**
   * Span为图文混合类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  MIXED = 2,

  /**
   * 注册此类型菜单但未注册TEXT、IMAGE、MIXED菜单时，文字类型、图片类型、图文混合类型都会触发并显示此类型对应的菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  DEFAULT = 3
}

/**
 * 选择菜单的响应类型。
 * 
 * > **说明：**
 * >
 * > 菜单类型的匹配顺序如下。例如，用户长按文本时，根据以下规则查找：
 * >
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TextResponseType {

  /**
   * 通过鼠标右键触发菜单弹出。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  RIGHT_CLICK = 0,

  /**
   * 通过长按触发菜单弹出。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  LONG_PRESS = 1,

  /**
   * 通过鼠标选中触发菜单弹出。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SELECT = 2,

  /**
   * 注册此类型的菜单，但未注册RIGHT_CLICK、LONG_PRESS、SELECT时，右键、长按、鼠标、[selection]{@link TextAttribute#selection}选中均会触发并显示此类型对应的菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  DEFAULT = 3
}

/**
 * Marquee状态回调的返回值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum MarqueeState {

  /**
   * 跑马灯滚动开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  START = 0,

  /**
   * 完成一次跑马灯滚动，如果循环次数不是1，将会多次返回。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  BOUNCE = 1,

  /**
   * 跑马灯全部循环次数完成。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  FINISH = 2,
}

/**
 * Marquee的滚动方式，可选择默认持续滚动或条件触发滚动。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum MarqueeStartPolicy {

  /**
   * 默认持续滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DEFAULT = 0,

  /**
   * 获焦以及鼠标悬浮时开始滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ON_FOCUS = 1
}

/**
 * 跑马灯组件属性更新后，跑马灯的滚动策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare enum MarqueeUpdatePolicy {

  /**
   * 跑马灯组件属性更新后，从开始位置，运行跑马灯效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  DEFAULT = 0,

  /**
   * 跑马灯组件属性更新后，保持当前位置，运行跑马灯效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  PRESERVE_POSITION = 1
}

/**
 * Text初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TextOptions {

  /**
   * 文本控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  controller: TextController;
}

/**
 * Marquee初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface TextMarqueeOptions {

  /**
   * 控制跑马灯进入播放状态。
   * 
   * true表示播放，false表示不播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  start: boolean;

  /**
   * 滚动动画文本滚动步长。
   * 
   * 默认值：4.0vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  step?: number;

  /**
   * 两轮跑马灯之间的间距。如果LengthMetrics的unit值是PERCENT，当前设置不生效，按默认值处理。
   * 
   * 默认值：48.0vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  spacing?: LengthMetrics;

  /**
   * 设置重复滚动的次数，小于等于零时无限循环。
   * 
   * 默认值：-1
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  loop?: number;

  /**
   * 设置文本从头开始滚动或反向滚动。
   * 
   * true表示从头开始滚动，false表示反向滚动。
   * 
   * 默认值：true
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fromStart?: boolean;

  /**
   * 设置每次滚动的时间间隔。
   * 
   * 默认值：0 
   * 
   * 单位：毫秒
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  delay?: number;

  /**
   * 设置文字超长时的渐隐效果。
   * 
   * true表示支持渐隐效果，false表示不支持渐隐效果。
   * 
   * 当Text内容超出显示范围时，未完全展现的文字边缘将应用渐隐效果。若两端均有文字未完全显示，则两端同时应用渐隐效果。在渐隐效果开启状态下，clip属性将自动锁定为true，不允许设置为false。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fadeout?: boolean;

  /**
   * 设置跑马灯启动策略，该属性值生效需将start设置为true。
   * 
   * 默认值：TV设备上默认值为MarqueeStartPolicy.ON_FOCUS，其他设备默认值为MarqueeStartPolicy.DEFAULT
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  marqueeStartPolicy?: MarqueeStartPolicy;

  /**
   * 跑马灯组件属性更新后，跑马灯的滚动策略。
   * 
   * 当跑马灯为播放状态，且文本内容宽度超过跑马灯组件宽度时，该属性生效。
   * 
   * 默认值：MarqueeUpdatePolicy.DEFAULT
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  marqueeUpdatePolicy?: MarqueeUpdatePolicy;
}

/**
 * Text组件的控制器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare class TextController {

  /**
   * 关闭自定义选择菜单或系统默认选择菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  closeSelectionMenu(): void;

  /**
   * 触发绑定或更新属性字符串。
   *
   * @param { StyledString } value - 属性字符串。<br/>**说明：** <br/>StyledString的子类
   *     [MutableStyledString]{@link MutableStyledString}也可以作为入参值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setStyledString(value: StyledString): void;

  /**
   * 获取布局管理器对象。
   *
   * @returns { LayoutManager } 布局管理器对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLayoutManager(): LayoutManager;

  /**
   * 设置文本选择区域并高亮显示。
   * 
   * > **说明：**
   * >
   * > 当[copyOption]{@link TextAttribute#copyOption}设置为CopyOptions.None时，设置setTextSelection不生效。
   * >
   * > 当[textOverflow]{@link TextAttribute#textOverflow}设置为TextOverflow.MARQUEE时，设置setTextSelection不生效。
   * >
   * > 当selectionStart大于等于selectionEnd时不选中。可选范围为[0, textSize]，其中textSize为文本内容最大字符数，入参小于0时处理为0，大于textSize时处理为textSize。
   * >
   * > 当selectionStart或selectionEnd位于截断的不可见区域时，文本不选中。截断为false时，超出父组件的文本选中区域生效。
   * >
   * > 如果设备为PC/2in1，即使options被赋值为MenuPolicy.SHOW，调用setTextSelection也不弹出菜单。
   * >
   * > 当emoji表情被选中区域截断时，若表情的起始位置包含在设置的文本选中区域内，该表情就会被选中。
   *
   * @param { number | undefined } selectionStart - 文本选择区域起始位置。<br />取值范围：[0, +∞），值为负数或undefined时按0处理。
   * @param { number | undefined } selectionEnd - 文本选择区域结束位置。<br />取值范围：[0, +∞），值为负数或undefined时按0处理。
   * @param { SelectionOptions } [options] - 选中文字时的配置。<br />默认值：SelectionOptions中MenuPolicy.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setTextSelection(selectionStart: number | undefined, selectionEnd: number | undefined,
                   options?: SelectionOptions): void;
}