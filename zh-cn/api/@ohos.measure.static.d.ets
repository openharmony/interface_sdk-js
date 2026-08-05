'use static';
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
 文本计算
 * @file
 文本计算
 * @kit ArkUI
 */

import { FontStyle, FontWeight, TextAlign, TextOverflow, TextCase, WordBreak } from '@ohos.arkui.component';

import { SizeOptions } from '@ohos.arkui.component';

import { FontStyle, FontWeight, TextAlign, TextOverflow, TextCase, WordBreak } from './arkui/component/enums';
import { SizeOptions } from './arkui/component/units';
import { Resource } from './global/resource';

/**
 * 被计算文本属性。
 *
 * @interface MeasureOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface MeasureOptions {

  /**
   * 设置被计算文本内容。
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textContent: string | Resource;

  /**
   * 设置被计算文本布局宽度。
   *
   * **说明：**
   *
   * 默认单位为vp，不支持设置百分比字符串。若不设置，则文本SizeOptions宽度为单行布局所占最大宽度值，若设置则为设置值。
   *
   * @type { ?(double | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constraintWidth?: double | string | Resource;

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
   * @type { ?(double | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: double | string | Resource;

  /**
   * 设置被计算文本字体样式。
   *
   * 默认值：FontStyle.Normal
   *
   * int类型取值范围为[0,1]，取值间隔为1，依次对应FontStyle中的枚举值。
   *
   * @type { ?(int | FontStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontStyle?: int | FontStyle;

  /**
   * 设置被计算文本的字体粗细，int类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持int类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"
   * lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。
   *
   * 默认值：FontWeight.Normal
   *
   * @type { ?(int | string | FontWeight) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontWeight?: int | string | FontWeight;

  /**
   * 设置被计算文本字体列表。
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontFamily?: string | Resource;

  /**
   * 设置被计算文本字符间距。
   *
   * 默认值：0
   *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  letterSpacing?: double | string;

  /**
   * 设置被计算文本水平方向的对齐方式。
   *
   * 默认值：TextAlign.Start
   *
   * int类型取值范围为[0,3]，取值间隔为1，依次对应TextAlign中的枚举值。
   *
   * @type { ?(int | TextAlign) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textAlign?: int | TextAlign;

  /**
   * 设置被计算文本超长时的截断方式。
   *
   * 默认值：1
   *
   * int类型取值范围为[0,3]，取值间隔为1，依次对应TextOverflow中的枚举值。
   *
   * @type { ?(int | TextOverflow) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  overflow?: int | TextOverflow;

  /**
   * 设置被计算文本最大行数。
   *
   * 取值范围：[0, INT32_MAX]
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxLines?: int;

  /**
   * 设置被计算文本行高。
   *
   * @type { ?(double | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lineHeight?: double | string | Resource;

  /**
   * 设置被计算文本基线的偏移量。
   *
   * 默认值：0
   *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  baselineOffset?: double | string;

  /**
   * 设置被计算文本大小写。
   *
   * 默认值：TextCase.Normal
   *
   * int类型取值范围为[0,2]，取值间隔为1，依次对应TextCase中的枚举值。
   *
   * @type { ?(int | TextCase) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textCase?: int | TextCase;

  /**
   * 设置首行文本缩进，默认值为0。
   *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textIndent?: double | string;

  /**
   * 设置断行规则。
   *
   * 默认值：WordBreak.BREAK_WORD
   *
   * **说明：**
   *
   * WordBreak.BREAK_ALL与{overflow: TextOverflow.Ellipsis}，`maxLines`组合使用可实现英文单词按字母截断，超出部分以省略号显示。
   *
   * @type { ?WordBreak }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  wordBreak?: WordBreak;
}

/**
 * 定义了测算方法类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare class MeasureText {

  /**
   * 计算指定文本作为单行文本显示时的宽度。如果文本包含多行（由换行符`\n`分隔），则返回其中最长的行的宽度。
   *
   * > **说明：**
   * >
   * > -measureText需要先通过[UIContext](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md)中的
   * > [getMeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmeasureutils12)方法获取
   * > [MeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-measureutils.md)对象，然后通过该对象进行调用。
   * >
   * > - 直接使用MeasureText可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，推荐通过
   * > [UIContext](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md)中的
   * > [getMeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmeasureutils12)方法获取当前UI上下文关
   * > 联的[MeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-measureutils.md)实例。
   * >
   * > - measureText接口的计算结果始终是单行文本的宽度，入参options中配置的布局约束（如constraintWidth、maxLines）对measureText的结果没有影响。如果需要计算布局约束下的宽度，请使用
   * > [measureTextSize](docroot://reference/apis-arkui/arkts-apis-uicontext-measureutils.md#measuretextsize12)方法。
   *
   * @param { MeasureOptions } options - 被计算文本描述信息。
   * @returns { double }
   文本宽度。<br/>单位：px
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static measureText(options: MeasureOptions): double;

  /**
   * 计算指定文本的宽度和高度。
   *
   * > **说明：**
   * >
   * > -measureTextSize需要先通过[UIContext](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md)中的
   * > [getMeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmeasureutils12)方法获取
   * > [MeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-measureutils.md)对象，然后通过该对象进行调用。
   * >
   * > - 直接使用MeasureText可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，推荐通过
   * > [UIContext](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md)中的
   * > [getMeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getmeasureutils12)方法获取当前UI上下文关
   * > 联的[MeasureUtils](docroot://reference/apis-arkui/arkts-apis-uicontext-measureutils.md)实例。
   *
   * @param { MeasureOptions } options - 被计算文本描述信息。
   * @returns { SizeOptions } 返回文本所占布局宽度和高度。<br/>**说明：**  <br/>文本宽度以及高度返回值单位均为px。
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static measureTextSize(options: MeasureOptions): SizeOptions;
}
export default MeasureText;
