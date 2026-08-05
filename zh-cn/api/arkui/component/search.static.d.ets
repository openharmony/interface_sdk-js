/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { TextContentControllerBase, SelectionOptions, Callback, CommonMethod, TextDecorationOptions, Bindable, AttributeModifier } from "./common";

import { Builder, CustomBuilder, CustomBuilderT, ComponentBuilder } from './builder';

import { ResourceStr, Length, ResourceColor, Dimension, Font, ColorMetrics, LengthMetrics } from "./units";

import { CaretStyle, EditableTextOnChangeCallback, InsertValue, DeleteValue, EditMenuOptions, KeyboardAppearance, EditableTextChangeValue, AutoCapitalizationMode, SelectedDragPreviewStyle, TextDirection, IMEClient, ShaderStyle, StrokeJoinStyle } from "./textCommon";
import { EnterKeyType, OnTextSelectionChangeCallback, OnContentScrollCallback, OnPasteCallback, SubmitEvent } from "./textInput";
import { CopyOptions, TextAlign } from "./enums";
import { KeyboardOptions } from "./richEditor";
import { Resource } from '../../global/resource';
import { SymbolGlyphModifier } from '../SymbolGlyphModifier';
import { ComponentContentBase } from '../ComponentContent';

/**
 * Search组件的控制器继承自
 * [TextContentControllerBase](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#textcontentcontrollerbase)，
 * 涉及的接口有
 * [getTextContentRect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#gettextcontentrect)
 * 、
 * [getTextContentLineCount](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#gettextcontentlinecount)
 * 、[getCaretOffset](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#getcaretoffset11)、
 * [addText](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#addtext15)、
 * [deleteText](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#deletetext15)、
 * [getSelection](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#getselection15)、
 * [clearPreviewText](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#clearpreviewtext17)、
 * [setStyledPlaceholder](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#setstyledplaceholder22)
 * 、[deleteBackward](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#deletebackward23)、
 * [scrollToVisible](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#scrolltovisible23)<!-
 * -Del-->以及系统接口[getText](docroot://reference/apis-arkui/arkui-ts/ts-text-common-sys.md#gettext19)<!--DelEnd-->。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SearchController extends TextContentControllerBase {
  /**
   * SearchController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();
  /**
   * 设置输入光标的位置。
   *
   * @param { int } value - 从字符串开始到光标所在位置的长度。 <br/>取值范围：大于等于0。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  caretPosition(value: int): void;
  /**
   * 退出编辑态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopEditing(): void;
  /**
   * 组件在获焦状态下，调用该接口设置文本选择区域并高亮显示，且只有在selectionStart小于selectionEnd时，文字才会被选取并高亮显示。
   *
   * @param { int } selectionStart - 文本选择区域起始位置，文本框中文字的起始位置为0。<br/>当selectionStart小于0时、按照0处理；当selectionStart大于文字最大长度时、
   *     按照文字最大长度处理。<br/>
   * @param { int } selectionEnd - 文本选择区域结束位置。<br/>当selectionEnd小于0时、按照0处理；当selectionEnd大于文字最大长度时、按照文字最大长度处理。<br/>
   * @param { SelectionOptions } [options] - 选中文字时的配置。<br />默认值：MenuPolicy.DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTextSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
}
/**
 * 清除按钮样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum CancelButtonStyle {
  /**
   * 清除按钮常显样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONSTANT = 0,
  /**
   * 清除按钮常隐样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  INVISIBLE = 1,
  /**
   * 清除按钮输入样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  INPUT = 2
}
/**
 * 搜索输入框类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SearchType {
  /**
   * 基本输入模式，无特殊限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NORMAL = 0,
  /**
   * 纯数字输入模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NUMBER = 2,
  /**
   * 电话号码输入模式。
   *
   * 支持输入数字、空格、+ 、-、*、#、(、)，长度不限。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PHONE_NUMBER = 3,
  /**
   * 邮箱地址输入模式。
   *
   * 支持数字，字母，下划线、小数点、!、#、$、%、&、'、*、+、-、/、=、?、^、`、{、|、}、~，以及@字符（只能存在一个@字符）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EMAIL = 5,
  /**
   * 带小数点的数字输入模式。
   *
   * 支持数字，小数点（只能存在一个小数点）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NUMBER_DECIMAL = 12,
  /**
   * 带URL的输入模式，无特殊限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  URL = 13,
  /**
   * 验证码输入模式，无特殊限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  ONE_TIME_CODE = 14
}
/**
 * Search初始化参数。
 *
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SearchOptions {
  /**
   * 设置当前显示的搜索文本内容。
   *
   * 该属性支持Bindable双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  value?: string | Bindable<string>;
  /**
   * 设置无输入时的提示文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  placeholder?: ResourceStr;
  /**
   * 设置搜索图标路径，默认使用系统搜索图标。
   *
   * **说明：**
   *
   * icon的数据源支持[使用相对路径显示图片](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#示例25使用相对路径显示图片)和网络图片。
   *
   * - 支持的图片格式包括png、jpg、bmp、svg、gif、pixelmap和heif。
   *
   * - 支持Base64字符串。格式data:image/[png|jpeg|bmp|webp|heif];base64,[base64 data], 其中[base64 data]为Base64字符串数据。
   *
   * 如果与属性searchIcon同时设置，则searchIcon优先。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: string;
  /**
   * 设置Search组件控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller?: SearchController;
}
/**
 * 图标样式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface IconOptions {
  /**
   * 图标尺寸，不支持百分比。
   *
   * 默认值根据[searchIcon]{@link searchIcon}、[cancelButton]{@link cancelButton}属性中的实际配置生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  size?: Length;
  /**
   * 图标颜色。
   *
   * 默认值：Wearable设备是'#A9FFFFFF'，浅灰色；其余设备是'#99182431'，深灰色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;
  /**
   * 图标/图片源。
   *
   * 默认值：跟随主题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  src?: ResourceStr;
}
/**
 * 搜索按钮样式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface SearchButtonOptions {
  /**
   * 文本按钮字体大小，不支持百分比。
   *
   * 默认值：Wearable设备15fp，其他设备14fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: Length;
  /**
   * 文本按钮字体颜色。
   *
   * 默认值：Wearable设备是'#007dff'，TV设备是'#5291ff'，其他设备是'#5ea1ff'，均是蓝色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor?: ResourceColor;
  /**
   * Search无文本内容时按钮置灰且不可点击。
   *
   * 默认值：false
   *
   * true表示开启按钮置灰功能，false表示不开启。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  autoDisable?: boolean;
}
/**
 * 清除按钮样式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface CancelButtonOptions {
  /**
   * 右侧清除按钮显示状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: CancelButtonStyle;
  /**
   * 右侧清除按钮图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: IconOptions;
}
/**
 * 清除按钮样式对象（Symbol图标）。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface CancelButtonSymbolOptions {
  /**
   * 右侧清除按钮显示状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: CancelButtonStyle;
  /**
   * 右侧清除按钮Symbol图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: SymbolGlyphModifier;
}
/**
 * 点击搜索图标、搜索按钮或者按下软键盘搜索按钮时的回调事件。
 *
 * @param { string } searchContent - 当前搜索框中输入的文本内容。
 * @param { SubmitEvent } [event] - 提交事件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SearchSubmitCallback = (searchContent: string, event?: SubmitEvent) => void;
/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface SearchAttribute extends CommonMethod {
  /**
   * 设置搜索框末尾搜索按钮。
   *
   * 点击搜索按钮，同时触发onSubmit与onClick回调。
   *
   * Wearable设备上默认字体大小为18fp。
   *
   * @param { string | undefined } value - 搜索框末尾搜索按钮文本内容。
   *     <br>从API version 20开始，支持Resource类型。<br/>默认值：''。设置undefined时按默认值处理。
   * @param { SearchButtonOptions | undefined } [option] - 配置搜索框末尾搜索按钮样式。<br />默认值：<br />{<br />fontSize: '16fp',<br /
   *     >fontColor: '#ff3f97e9'<br />}  <br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default searchButton(value: string | undefined, option?: SearchButtonOptions | undefined): this;
  /**
   * 设置输入文本的字体颜色。fontSize、fontStyle、fontWeight和fontFamily在[textFont]{@link textFont}属性中设置。
   *
   * @param { ResourceColor | undefined } value - 输入文本的字体颜色。<br/>默认值：'#FF182431'<br/>Wearable设备上默认值为：'#dbffffff' <br/>
   *     设置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontColor(value: ResourceColor | undefined): this;
  /**
   * 设置左侧搜索图标样式。
   *
   * Wearable设备上默认图标大小为16vp。
   *
   * @param { IconOptions | SymbolGlyphModifier | undefined } value - 左侧搜索图标样式。<!--RP1--><br />浅色模式默认值：<br />{<br />
   *     size: '16vp',<br />color: '#99182431',<br />src: ' '<br />}<br />深色模式默认值：<br />{<br />size: '16vp',<br />
   *     color: '#99ffffff',<br />src: ' '<br />} <!--RP1End--><br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default searchIcon(value: IconOptions | SymbolGlyphModifier | undefined): this;
  /**
   * 设置右侧清除按钮样式。示例请参考
   * [示例2（设置搜索和删除图标）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#示例2设置搜索和删除图标)和
   * [示例11（设置symbol类型清除按钮）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#示例11设置symbol类型清除按钮)。
   *
   * Wearable设备上默认图标大小为18fp。
   *
   * @param { CancelButtonOptions | CancelButtonSymbolOptions | undefined } value - 右侧清除按钮样式。
   *     <br>默认值：<br />{<br/>style: CancelButtonStyle.INPUT,<br/>icon: {<br/>size: '16vp',<br/>color: '#99ffffff',<br/
   *     >src: ' '<br/>}<br/>}<br/>当style为CancelButtonStyle.CONSTANT时，默认显示清除样式。<br/>取值为undefined时，按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions | undefined): this;

  /**
   * 设置是否对选中文本进行实体识别。该接口依赖设备底层应具有文本识别能力，否则设置不会生效。
   *
   * 当enableSelectedDataDetector设置为true时，默认识别所有类型的实体。
   *
   * 启用后可识别选区中的邮件、电话、网址、日期、地址等，并在文本选择菜单中展示对应的AI菜单项。默认启用AI菜单功能。
   *
   * AI菜单功能启用时，在组件中选中文本后，文本选择菜单能够展示对应的AI菜单项，包括
   * [TextMenuItemId](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#textmenuitemid12)中的url（打开链接）、email（新建邮
   * 件）、phoneNumber（呼叫）、address（导航前往）、dateTime（新建日程）。
   *
   * AI菜单生效时，选中范围内需包括且仅包括一个完整的AI实体，才能展示对应的选项。该菜单项与
   * [TextMenuItemId](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#textmenuitemid12)中的askAI菜单项不同时出现。
   *
   * 需要[CopyOptions](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#copyoptions9)为
   * CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时，本功能生效。
   *
   * @param { boolean | undefined } enable - 开启选中文本实体识别。<br/>true：开启识别，false：关闭识别。默认值为：true。
   *     <br>值为undefined时，开启选中文本实体识别。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default enableSelectedDataDetector(enable: boolean | undefined): this;

  /**
   * 设置首行文本缩进。
   *
   * @param { Dimension | undefined } value - 首行文本缩进。<br/>默认值：0 <br/>单位：
   *     [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) <br/>取值范围：大于等于0。设置负数时，按默认值处理。<br/>设置
   *     undefined时按默认值处理。
   * @returns { SearchAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textIndent(value: Dimension | undefined): this;
  /**
   * 通过正则表达式设置输入过滤器。匹配表达式的输入允许显示，不匹配的输入将被过滤。
   *
   * 单字符输入场景仅支持单字符匹配，多字符输入场景支持字符串匹配，例如粘贴。
   *
   * 设置inputFilter且输入的字符不为空字符，会导致设置输入框类型(即type接口)附带的文本过滤效果失效。
   *
   * @param { ResourceStr | undefined } value - 正则表达式。<br/>取值为undefined时，按无正则匹配过滤处理。
   * @param { Callback<string> | undefined } [error] - 匹配失败时的回调。正则匹配失败时，返回被过滤的内容。正则匹配成功时，无返回。<br/>取值为undefined时，不使用回调函
   *     数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default inputFilter(value: ResourceStr | undefined, error?: Callback<string> | undefined): this;
  /**
   * 输入状态变化时，触发该回调。有光标时为编辑态，无光标时为非编辑态。
   *
   * @param { Callback<boolean> | undefined } callback - 编辑状态改变回调，其返回值为true表示正在输入， false表示未在输入。<br/>取值为undefined时，不使用回
   *     调函数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onEditChange(callback: Callback<boolean> | undefined): this;
  /**
   * 设置文本选中底板颜色。如果未设置不透明度，默认为20%不透明度。
   *
   * @param { ResourceColor | undefined } value
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedBackgroundColor(value: ResourceColor | undefined): this;
  /**
   * 设置光标样式。
   *
   * @param { CaretStyle | undefined } value - 光标样式。<br />默认值：<br />{<br />width: '1.5vp',<br />color: '#007DFF'<br />
   *     } <br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default caretStyle(value: CaretStyle | undefined): this;
  /**
   * 设置placeholder文本颜色，Wearable设备上默认值为'#99ffffff'。
   *
   * @param { ResourceColor | undefined } value - placeholder文本颜色。<br />默认值：'#99182431'。<br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default placeholderColor(value: ResourceColor | undefined): this;
  /**
   * 设置placeholder文本样式，包括字体大小、字体粗细、字体族、字体风格。
   *
   * @param { Font | undefined } [value]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default placeholderFont(value?: Font | undefined): this;
  /**
   * 设置搜索框内输入文本样式，包括字体大小、字体粗细、字体族、字体风格。
   *
   * Wearable设备上默认字体大小为18fp。
   *
   * @param { Font | undefined } [value]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textFont(value?: Font | undefined): this;
  /**
   * 设置输入法回车键类型。
   *
   * @param { EnterKeyType | undefined } value - 输入法回车键类型。<br/>默认值：EnterKeyType.Search <br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enterKeyType(value: EnterKeyType | undefined): this;
  /**
   * 点击搜索图标、搜索按钮或者按下软键盘搜索按钮时触发该回调。
   *
   * @param { SearchSubmitCallback | undefined } callback - 搜索提交回调，其返回值为当前搜索框中输入的文本内容。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSubmit(callback: SearchSubmitCallback | undefined): this;
  /**
   * 输入内容发生变化时，触发该回调。
   *
   * 在本回调中，若执行了光标操作，需要开发者在预上屏场景下依据previewText参数调整光标逻辑，以适应预上屏场景。
   *
   * @param { EditableTextOnChangeCallback | undefined } callback
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(callback: EditableTextOnChangeCallback | undefined): this;
  /**
   * 文本选择的位置或编辑状态下光标位置发生变化时，触发该回调。
   *
   * @param { OnTextSelectionChangeCallback | undefined } callback - 文本选择变化回调或光标位置变化回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onTextSelectionChange(callback: OnTextSelectionChangeCallback | undefined): this;
  /**
   * 文本内容滚动时，触发该回调。
   *
   * @param { OnContentScrollCallback | undefined } callback - 文本内容滚动回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentScroll(callback: OnContentScrollCallback | undefined): this;
  /**
   * 进行复制操作时，触发该回调。
   *
   * @param { Callback<string> | undefined } callback - 复制回调，其返回值为复制的文本内容。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onCopy(callback: Callback<string> | undefined): this;
  /**
   * 在进行复制操作前，触发该回调。
   *
   * @param { Callback<string, boolean> | undefined } callback - 复制操作前的回调。回调参数类型为string时，表示将要被复制的文本内容。回调参数类型为boolean时，
   *     表示当前选中文本是否允许被复制，true：允许文本被复制；false：不允许文本被复制。undefined时，恢复组件默认复制行为。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCopy(callback: Callback<string, boolean> | undefined): this;
  /**
   * 进行剪切操作时，触发该回调。
   *
   * @param { Callback<string> | undefined } callback - 剪切回调，其返回值为剪切的文本内容。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onCut(callback: Callback<string> | undefined): this;
  /**
   * 在进行剪切操作前，触发该回调。
   *
   * @param { Callback<string, boolean> | undefined } callback - 剪切操作前的回调。回调参数类型为string时，表示将要被剪切的文本内容。回调参数类型为boolean时，
   *     表示当前选中文本是否允许被剪切，true：允许文本被剪切；false：不允许文本被剪切。undefined时，恢复组件默认剪切行为。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCut(callback: Callback<string, boolean> | undefined): this;
  /**
   * 进行粘贴操作时，触发该回调。
   *
   * @param { OnPasteCallback | undefined } callback - 粘贴回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onPaste(callback: OnPasteCallback | undefined): this;
  /**
   * 设置输入的文本是否可复制。设置CopyOptions.None时，当前Search中的文字无法被复制、剪切、翻译、分享、搜索和帮写，支持粘贴和全选。
   *
   * 设置CopyOptions.None时，不允许拖拽。
   *
   * @param { CopyOptions | undefined } value - 输入的文本是否可复制。<br />默认值：CopyOptions.LocalDevice，支持设备内复制。<br/>设置undefined时
   *     按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default copyOption(value: CopyOptions | undefined): this;
  /**
   * 设置文本的最大输入字符数。默认不设置最大输入字符数限制。到达文本最大字符限制，将无法继续输入字符。
   *
   * @param { int | undefined } value
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxLength(value: int | undefined): this;
  /**
   * 设置文本在搜索框中的对齐方式。目前支持的对齐方式有：TextAlign.Start、TextAlign.Center、TextAlign.End、TextAlign.LEFT、TextAlign.RIGHT。
   * TextAlign.JUSTIFY的对齐方式按照TextAlign.Start处理。
   *
   * @param { TextAlign | undefined } value - 文本在搜索框中的对齐方式。<br/>默认值：TextAlign.Start<br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textAlign(value: TextAlign | undefined): this;
  /**
   * 设置Search通过点击以外的方式获焦时，是否主动拉起软键盘。
   *
   * 从API version 10开始，获焦默认绑定输入法。
   *
   * @param { boolean | undefined } value - Search获焦时，是否主动拉起软键盘。<br/>true表示主动拉起，false表示不主动拉起。<br/>默认值：true<br/>设置
   *     undefined时按默认值处理。
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableKeyboardOnFocus(value: boolean | undefined): this;
  /**
   * 设置是否不弹出系统文本选择菜单。
   *
   * @param { boolean | undefined } value - 是否不弹出系统文本选择菜单。<br />设置为true时，单击输入框光标、长按输入框、双击输入框、三击输入框或者右键输入框，不弹出系统文本选择菜单。
   *     <br />设置为false时，弹出系统文本选择菜单。<br />默认值：false<br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectionMenuHidden(value: boolean | undefined): this;
  /**
   * 设置文本最小显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * 需配合[maxFontSize]{@link maxFontSize}以及布局大小限制使用，单独设置不生效。
   *
   * 自适应字号生效时，fontSize设置不生效。
   *
   * minFontSize小于或等于0时，自适应字号不生效，此时按照[textFont]{@link textFont}属性里面size的取值生效，未设置时按照其默认值生效。
   *
   * @param { double | string | Resource | undefined } value - 文本最小显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)<br/>取值为undefined时，自适应字号不生效，此时按照
   *     [textFont]{@link textFont}属性里面size的取值生效，未设置时按照其默认值生效。<br/>取值范围：大于0。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minFontSize(value: double | string | Resource | undefined): this;
  /**
   * 设置文本最大显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * 需配合[minFontSize]{@link minFontSize}以及布局大小限制使用，单独设置不生效。
   *
   * 自适应字号生效时，fontSize设置不生效。
   *
   * maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照[textFont]{@link textFont}属性里面size的取值生效，未设置时按照其默认值生效。
   *
   * @param { double | string | Resource | undefined } value - 文本最大显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)<br/>取值为undefined时，自适应字号不生效，此时按照
   *     [textFont]{@link textFont}属性里面size的取值生效，未设置时按照其默认值生效。<br/>取值范围：大于0。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxFontSize(value: double | string | Resource | undefined): this;
  /**
   * 设置文本最小的字体缩放倍数。
   *
   * @param { double | Resource | undefined } scale
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minFontScale(scale: double | Resource | undefined): this;
  /**
   * 设置文本最大的字体缩放倍数。
   *
   * @param { double | Resource | undefined } scale
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxFontScale(scale: double | Resource | undefined): this;
  /**
   * 设置自定义键盘。
   *
   * 当设置自定义键盘时，输入框激活后不会打开系统输入法，而是加载指定的自定义组件。
   *
   * 自定义键盘的高度可以通过自定义组件根节点的height属性设置，宽度不可设置，使用系统默认值。
   *
   * 自定义键盘采用覆盖原始界面的方式呈现，当没有开启避让模式或者输入框不需要避让的场景不会对应用原始界面产生压缩或者上提。
   *
   * 自定义键盘无法获取焦点，但是会拦截手势事件。
   *
   * 默认在输入控件失去焦点时，关闭自定义键盘，开发者也可以通过[stopEditing]{@link SearchController#stopEditing}方法控制键盘关闭。
   *
   * 如果设备支持拍摄输入，设置自定义键盘后，该输入框会不支持拍摄输入。
   *
   * 当设置自定义键盘时，可以通过绑定[onKeyPreIme](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-key.md#onkeypreime12)事件
   * 规避物理键盘的输入。
   *
   * 从API version 23开始，自定义键盘可以通过
   * [setCustomKeyboardContinueFeature](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#setcustomkeyboardcontinuefeature23)
   * 开启接续，在切换至其他自定义键盘时，会直接切换，不会触发键盘关闭和拉起动画。
   *
   * > **说明：**
   * >
   * > 该接口不支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { CustomBuilder | ComponentContentBase | undefined } value - 自定义键盘，值为undefined时使用默认键盘。
   * @param { KeyboardOptions } [options] - 设置自定义键盘是否支持避让功能。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customKeyboard(
      value: CustomBuilder | ComponentContentBase | undefined, options?: KeyboardOptions): this;

  /**
   * 设置文本装饰线类型样式及其颜色。
   *
   * @param { TextDecorationOptions | undefined } value - 文本装饰线对象。<br />默认值：{<br/> type: TextDecorationType.None,<br/>
   *      color: Color.Black,<br/> style: TextDecorationStyle.SOLID,<br/> thicknessScale: 1.0<br/>} <br/>设置undefined时按
   *     默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default decoration(value: TextDecorationOptions | undefined): this;
  /**
   * 设置文本字符间距。设置该值为百分比时，按默认值显示。设置该值为0时，按默认值显示。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * 当取值为负值时，文字会发生压缩，负值过小时会将组件内容区大小压缩为0，导致无内容显示。
   *
   * 对每个字符生效，包括行尾字符。
   *
   * @param { double | string | Resource | undefined } value - 文本字符间距。<br/>默认值：0<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)<br/>取值为undefined时，按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default letterSpacing(value: double | string | Resource | undefined): this;
  /**
   * 设置文本的文本行高。
   *
   * @param { double | string | Resource | undefined } value
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineHeight(value: double | string | Resource | undefined): this;
  /**
   * 设置输入框类型。
   *
   * 不同的SearchType会拉起对应类型的键盘，同时限制输入。
   *
   * @param { SearchType | undefined } value - 输入框类型。<br/>默认值：SearchType.NORMAL  <br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default type(value: SearchType | undefined): this;
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
   * @param { string | undefined } value - 文字特性效果。<br/>值为undefined时表示不设置文字特性。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontFeature(value: string | undefined): this;
  /**
   * 在将要输入时，触发该回调。
   *
   * @param { Callback<InsertValue, boolean> | undefined } callback - 在将要输入时调用的回调。<br/>在返回true时，表示正常插入，返回false时，表示不插入。
   *     <br/>在预上屏和候选词操作时，该回调不触发。<br/>仅支持系统输入法输入的场景。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillInsert(callback: Callback<InsertValue, boolean> | undefined): this;
  /**
   * 在输入完成时，触发该回调。
   *
   * @param { Callback<InsertValue> | undefined } callback - 在输入完成时调用的回调。<br/>仅支持系统输入法输入的场景。<br/>取值为undefined时，不使用回调函
   *     数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidInsert(callback: Callback<InsertValue> | undefined): this;
  /**
   * 在将要删除时，触发该回调。
   *
   * @param { Callback<DeleteValue, boolean> | undefined } callback - 在将要删除时调用的回调。<br/>在返回true时，表示正常删除，返回false时，表示不删除。
   *     <br/>在预上屏删除操作时，该回调不触发。<br/>仅支持系统输入法输入的场景。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillDelete(callback: Callback<DeleteValue, boolean> | undefined): this;
  /**
   * 在删除完成时，触发该回调。
   *
   * @param { Callback<DeleteValue> | undefined } callback - 在删除完成时调用的回调。<br/>仅支持系统输入法输入的场景。<br/>取值为undefined时，不使用回调函
   *     数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidDelete(callback: Callback<DeleteValue> | undefined): this;
  /**
   * 在搜索框将要绑定输入法前触发该回调。
   *
   * <!--Del-->
   *
   * 在搜索框将要绑定输入法前，可以通过`UIContext`的系统接口
   * [setKeyboardAppearanceConfig](docroot://reference/apis-arkui/js-apis-arkui-UIContext-sys.md#setkeyboardappearanceconfig20)
   * 设置键盘的样式。<!--DelEnd-->
   *
   * 从API version 22开始，调用[IMEClient](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#imeclient20)的
   * [setExtraConfig](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#setextraconfig22)方法可以设置输入法扩展信息。在绑定输入法成
   * 功后，输入法会收到扩展信息，输入法可以依据此信息实现自定义功能。
   *
   * IMEClient仅在onWillAttachIME执行期间有效，不可进行异步调用。
   *
   * > **说明：**
   * >
   * > 该接口不支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Callback<IMEClient> | undefined } callback - 在搜索框将要绑定输入法前触发该回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default onWillAttachIME(callback: Callback<IMEClient> | undefined): this;
  /**
   * 设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。
   *
   * 调用
   * [disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20)或
   * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
   * 接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法
   * [onCreateMenu](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#oncreatemenu12)的入参列表中不包含被屏蔽的菜单选项。
   *
   * @param { EditMenuOptions | undefined } editMenu - 扩展菜单选项。<br/>取值为undefined时，显示系统文本选择菜单。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default editMenuOptions(editMenu: EditMenuOptions | undefined): this;
  /**
   * 设置是否开启输入预上屏。
   *
   * 预上屏内容定义为文字暂存态，目前不支持文字拦截功能。
   *
   * @param { boolean | undefined } enable - 是否开启输入预上屏。<br/>true表示开启输入预上屏，false表示不开启输入预上屏。<br/>默认值：true <br/>设置
   *     undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enablePreviewText(enable: boolean | undefined): this;
  /**
   * 设置是否开启触控反馈。
   *
   * 开启触控反馈时，需要在工程的[module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段以开启振动权限，配置
   * 如下：
   *
   * @param { boolean | undefined } isEnabled - 是否开启触控反馈。<br/>true表示开启触控反馈，false表示不开启触控反馈。<br/>默认值：true<br/>设置
   *     undefined时按默认值处理。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableHapticFeedback(isEnabled: boolean | undefined): this;
  /**
   * 设置自动大小写模式的文本模式，只提供接口能力，具体实现以输入法应用为主。
   *
   * @param { AutoCapitalizationMode | undefined } mode - 自动大小写模式，默认状态无效。<br/>值为undefined时为默认状态无效。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoCapitalizationMode(mode: AutoCapitalizationMode | undefined): this;
  /**
   * 设置文本在行内垂直居中，将行间距平分至行的顶部与底部。
   *
   * @param { boolean | undefined } halfLeading - 设置文本是否垂直居中。<br/>true表示将行间距平分至行的顶部与底部，false则不平分。<br/>默认值：false <br/>设
   *     置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default halfLeading(halfLeading: boolean | undefined): this;
  /**
   * 设置是否阻止返回键传递。
   *
   * @param { boolean | undefined } isStopped - 是否阻止返回键。<br/>true表示阻止返回键向其它组件或应用侧传递，false表示不阻止。<br/>默认值：true。<br/>设置
   *     undefined时按默认值处理。
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default stopBackPress(isStopped: boolean | undefined): this;
  /**
   * 在文本内容将要发生变化时，触发该回调。
   *
   * onWillChange的回调时序晚于onWillInsert、onWillDelete，早于onDidInsert、onDidDelete。
   *
   * @param { Callback<EditableTextChangeValue, boolean> | undefined } callback - 在文本内容将要发生变化时的回调。<br/>返回true时，表示正常修改。
   *     返回false时，表示拦截此次触发。<br/>取值为undefined时，不使用回调函数。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillChange(callback: Callback<EditableTextChangeValue, boolean> | undefined): this;
  /**
   * 设置输入框拉起的键盘样式，需要输入法适配后生效。具体参考[输入法应用沉浸模式](docroot://inputmethod/inputmethod-immersive-mode-guide.md)。
   *
   * @param { Optional<KeyboardAppearance> | undefined } appearance - 键盘样式。<br/>默认值：KeyboardAppearance.NONE_IMMERSIVE
   *     <br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
  /**
   * 设置文本描边的宽度。
   *
   * @param { LengthMetrics | undefined } width - 文本描边的宽度。如果LengthMetrics的unit值是PERCENT，当前设置不生效，按默认值处理。<br/>若设置值小于0，显示
   *     实心字；若大于0，显示空心字。<br/>默认值为0，不做描边处理。<br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default strokeWidth(width: LengthMetrics | undefined): this;
  /**
   * 设置文本描边的颜色。
   *
   * @param { ResourceColor | undefined } color - 描边颜色。默认值为字体颜色，设置异常值时取默认值。<br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default strokeColor(color: ResourceColor | undefined): this;
  /**
   * 设置是否开启中文与西文的自动间距。
   *
   * @param { boolean | undefined } enabled - 是否开启中文与西文的自动间距。<br/>true为开启自动间距，false为不开启。<br />默认值：false <br/>设置
   *     undefined时按默认值处理。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default enableAutoSpacing(enabled: boolean | undefined): this;
  /**
   * 设置搜索框内文本拖拽时的背板样式。
   *
   * @param { SelectedDragPreviewStyle | undefined } value - 文本拖拽时的背板样式。<br/>设置为undefined时：背板颜色跟随主题，浅色模式显示白色，深色模式显示黑色。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): this;
  /**
   * 指定文本排版方向，未通过该接口设置时，默认文本排版方向遵循组件布局方向。
   *
   * @param { TextDirection | undefined } direction - 文本排版方向。<br/>设置为undefined时，按照TextDirection.DEFAULT处理，表现为文本排版方向遵循组
   *     件布局方向。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textDirection(direction: TextDirection | undefined): this;
  /**
   * 设置文本描边拐角样式。
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - 文本描边拐角样式。<br/>值为undefined时，按照StrokeJoinStyle.MITER_JOIN处
   *     理，请参考[StrokeJoinStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#strokejoinstyle)，文本拐角处表现为锐角。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): this;

  /**
   * 设置文本着色器效果，如线性渐变、径向渐变效果等。
   *
   * > **说明：**
   * >
   * > 当同时设置shaderStyle和[strokeWidth]{@link strokeWidth}时，shaderStyle不生效。
   * >
   * > shaderStyle的优先级高于[fontColor]{@link fontColor}。
   *
   * @param { ShaderStyle | undefined } shader - 文本着色器效果。<br/>值为undefined时，无渐变效果。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default shaderStyle(shader: ShaderStyle | undefined): this;

  /**
   * 设置输入框分割线颜色。
   *
   * @param { ColorMetrics | undefined } color - 设置分割线颜色。<br/>默认使用系统的主题色：浅色模式下为0x33000000，显示为浅黑色，深色模式下为0x33FFFFFF，显示为浅
   *     白色。<br/>设置undefined时按默认值处理。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default dividerColor(color: ColorMetrics | undefined): this;
  /**
   * 设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。
   *
   * @param { boolean | undefined } include - 是否在首行和尾行增加间距以避免文字截断。<br/>true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。<br/>
   *     undefined表示在首行和尾行不增加间距。
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default includeFontPadding(include: boolean | undefined): this;
  /**
   * 针对多行文字叠加，支持行高基于文字实际高度自适应。此接口仅当行高小于文字实际高度时生效。不通过该接口设置，默认行高不基于文字实际高度自适应。
   *
   * @param { boolean | undefined } enabled - 行高是否基于文字实际高度自适应。<br/>true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。<br/>
   *     undefined表示行高不基于文字实际高度自适应。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fallbackLineSpacing(enabled: boolean | undefined): this;
  /**
   * 设置是否开启行首标点符号压缩。
   *
   * > **说明：**
   * >
   * > - 行首标点符号默认不压缩。
   * >
   * > - 支持压缩的标点符号，请参考[ParagraphStyle](docroot://reference/apis-arkgraphics2d/js-apis-graphics-text.md#paragraphstyle)
   * > 的行首压缩的标点范围。
   *
   * @param { boolean | undefined } enabled - 是否开启行首标点符号压缩。<br/>true表示开启行首标点符号压缩；false表示不开启行首标点符号压缩。<br/>取值为undefined
   *     时，按不开启处理。
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default compressLeadingPunctuation(enabled: boolean | undefined): this;
  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<SearchAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
   * @returns { SearchAttribute } the attribute of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<SearchAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义Search组件。
 *
 * @param { SearchOptions } [options]
 * @returns { SearchAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Search(
    options?: SearchOptions
): SearchAttribute;
