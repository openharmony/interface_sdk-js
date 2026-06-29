/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * Search组件的控制器继承自[TextContentControllerBase]{@link TextContentControllerBase}，涉及的接口有
 * [getTextContentRect]{@link TextContentControllerBase#getTextContentRect}、
 * [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount}、
 * [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}、[addText]{@link TextContentControllerBase#addText}、
 * [deleteText]{@link TextContentControllerBase#deleteText}、[getSelection]{@link TextContentControllerBase#getSelection}
 * 、[clearPreviewText]{@link TextContentControllerBase#clearPreviewText}、
 * [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder}、
 * [deleteBackward]{@link TextContentControllerBase#deleteBackward}<!--Del-->以及系统接口
 * [getText]{@link TextContentControllerBase#getText}<!--DelEnd-->。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class SearchController extends TextContentControllerBase {

  /**
   * SearchController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 设置输入光标的位置。
   *
   * @param { number } value - 从字符串开始到光标所在位置的长度。</br>当value<0时，按照0处理。当value>字符串长度时，按照字符串长度处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  caretPosition(value: number): void;

  /**
   * 退出编辑态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  stopEditing(): void;

  /**
   * 组件在获焦状态下，调用该接口设置文本选择区域并高亮显示，且只有在selectionStart小于selectionEnd时，文字才会被选取并高亮显示。
   *
   * @param { number } selectionStart - 文本选择区域起始位置，文本框中文字的起始位置为0。<br/>当selectionStart小于0时、按照0处理；当selectionStart大于文字最大长度时
   *     、按照文字最大长度处理。<br/>
   * @param { number } selectionEnd - 文本选择区域结束位置。<br/>当selectionEnd小于0时、按照0处理；当selectionEnd大于文字最大长度时、按照文字最大长度处理。<br/>
   * @param { SelectionOptions } [options] - 选中文字时的配置。<br />默认值：MenuPolicy.DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;
}

/**
 * 清除按钮样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum CancelButtonStyle {

  /**
   * 清除按钮常显样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CONSTANT = 0,

  /**
   * 清除按钮常隐样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INVISIBLE = 1,

  /**
   * 清除按钮输入样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INPUT = 2,
}

/**
 * 搜索输入框类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum SearchType {

  /**
   * 基本输入模式，无特殊限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NORMAL = 0,

  /**
   * 纯数字输入模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NUMBER = 2,

  /**
   * 电话号码输入模式。
   * 
   * 支持输入数字、空格、+ 、-、*、#、(、)，长度不限。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PHONE_NUMBER = 3,

  /**
   * 邮箱地址输入模式。
   * 
   * 支持数字，字母，下划线、小数点、!、#、$、%、&、'、*、+、-、/、=、?、^、`、{、|、}、~，以及@字符（只能存在一个@字符）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  EMAIL = 5,

  /**
   * 带小数点的数字输入模式。
   * 
   * 支持数字，小数点（只能存在一个小数点）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NUMBER_DECIMAL = 12,

  /**
   * 带URL的输入模式，无特殊限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  URL = 13,

  /**
   * 验证码输入模式，无特殊限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
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
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface SearchOptions {

  /**
   * 搜索文本框中的文本输入。
   *
   * @type { ?string } [since 8 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value?: ResourceStr;

  /**
   * 无输入时显示的文本。
   *
   * @type { string } [since 8 - 9]
   * @type { ?ResourceStr } [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  placeholder?: ResourceStr;

  /**
   * 搜索图标的路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  icon?: string;

  /**
   * Search组件的控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: SearchController;

  /**
   * Text input in the search text box.
   *
   * @type { ?(string | Bindable<string>)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  value?: string | Bindable<string>;
}

/**
 * 搜索框组件，适用于浏览器的搜索内容输入框等应用场景。
 * 
 * > **说明：**
 * >
 * > 该组件仅支持单文本样式，若需实现富文本样式，建议使用[RichEditor]{@link rich_editor}组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface SearchInterface {

  /**
   *
   * 定义搜索组件构造函数。
   *
   * @param { object } options - 搜索框组件初始化选项 [since 8 - 17]
   * @param { SearchOptions } [options] - 搜索框组件初始化选项 [since 18]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: SearchOptions): SearchAttribute;
}

/**
 * 定义图标选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface IconOptions {

  /**
   * 图标尺寸，不支持百分比。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size?: Length;

  /**
   * 图标颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * 图标/图片源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  src?: ResourceStr;
}

/**
 * 定义搜索按钮选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface SearchButtonOptions {

  /**
   * 文本按钮字体大小，不支持百分比。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontSize?: Length;

  /**
   * 文本按钮字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  autoDisable?: Boolean;
}

/**
 * 定义清除按钮选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface CancelButtonOptions {

  /**
   * 右侧清除按钮显示状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: CancelButtonStyle;

  /**
   * 右侧清除按钮图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon?: IconOptions;
}

/**
 * 定义清除按钮Symbol图标选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
interface CancelButtonSymbolOptions {

  /**
   * 右侧清除按钮显示状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: CancelButtonStyle;

  /**
   * 右侧清除按钮Symbol图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
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
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type SearchSubmitCallback = (searchContent: string, event?: SubmitEvent) => void;

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class SearchAttribute extends CommonMethod<SearchAttribute> {

  /**
   * 设置搜索框末尾搜索按钮。
   * 
   * 点击搜索按钮，同时触发onSubmit与onClick回调。
   * 
   * Wearable设备上默认字体大小为18fp。
   *
   * @param { string } value - Text on the search button located next to the search text box.<br>The Resource type is
   *     supported since API version 20. [since 8 - 19]
   * @param { ResourceStr } value - 搜索框末尾搜索按钮文本内容。 <br>从API version 20开始，支持Resource类型。 [since 20]
   * @param { SearchButtonOption } option - Text style of the search button located next to the search text box.<br>
   *     Default value:<br>{<br>fontSize: '16fp',<br>fontColor: '#ff3f97e9'<br>} [since 8 - 9]
   * @param { SearchButtonOptions } option - 配置搜索框末尾搜索按钮文本样式。<br />默认值：<br />{<br />fontSize: '16fp',<br />fontColor: '#
   *     ff3f97e9'<br />} [since 10]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  searchButton(value: ResourceStr, option?: SearchButtonOptions): SearchAttribute;

  /**
   * 设置输入文本的字体颜色。fontSize、fontStyle、fontWeight和fontFamily在[textFont]{@link SearchAttribute#textFont}属性中设置。
   *
   * @param { ResourceColor } value - 输入文本的字体颜色。<br/>默认值：'#FF182431'<br/>Wearable设备上默认值为：'#dbffffff'
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor(value: ResourceColor): SearchAttribute;

  /**
   * 设置左侧搜索图标样式。
   * 
   * Wearable设备上默认图标大小为16vp。
   *
   * @param { IconOptions } value - Style of the search icon on the left.<!--RP1--><br>Default value in light mode:<br>{
   *     <br>size: '16vp',<br>color: '#99182431',<br>src: ' '<br>}<br>Default value in dark mode:<br>{<br>size: '16vp',<
   *     br>color: '#99ffffff',<br>src: ' '<br>} <!--RP1End--> [since 10 - 11]
   * @param { IconOptions | SymbolGlyphModifier } value - 左侧搜索图标样式。<!--RP1--><br />浅色模式默认值：<br />{<br />size: '16vp',<br
   *     />color: '#99182431',<br />src: ' '<br />}<br />深色模式默认值：<br />{<br />size: '16vp',<br />color: '#99ffffff',<br
   *     />src: ' '<br />} <!--RP1End--> [since 12]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  searchIcon(value: IconOptions | SymbolGlyphModifier): SearchAttribute;

  /**
   * 设置右侧清除按钮样式。示例请参考
   * [示例2（设置搜索和删除图标）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#示例2设置搜索和删除图标)和
   * [示例11（设置symbol类型清除按钮）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#示例11设置symbol类型清除按钮)。
   * 
   * Wearable设备上默认图标大小为18fp。
   *
   * @param { object } value - Style of the cancel button on the right.<br>Default value:<br>{<br>style:
   *     CancelButtonStyle.INPUT,<br>icon: {<br>size: '16vp',<br>color: '#99ffffff',<br>src: ' '<br>}<br>}<br>When style
   *     is set to **CancelButtonStyle.CONSTANT**, the cancel button is displayed in a default style. [since 10 - 11]
   * @param { CancelButtonOptions | CancelButtonSymbolOptions } value - 右侧清除按钮样式。<br>默认值：<br />{<br/>style:
   *     CancelButtonStyle.INPUT,<br/>icon: {<br/>size: '16vp',<br/>color: '#99ffffff',<br/>src: ' '<br/>}<br/>}<br/>当
   *     style为CancelButtonStyle.CONSTANT时，默认显示清除样式。 [since 12]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions): SearchAttribute;

  /**
   * 设置是否对选中文本进行实体识别。该接口依赖设备底层应具有文本识别能力，否则设置不会生效。
   * 
   * 当enableSelectedDataDetector设置为true时，默认识别所有类型的实体。
   * 
   * 需要[CopyOptions]{@link CopyOptions}为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时，本功能生效。
   *
   * @param { boolean | undefined } enable - 开启选中词文本识别。<br/>true：开启识别，false：关闭识别。默认值为：true。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): SearchAttribute;

  /**
   * 设置首行文本缩进。
   *
   * @param { Dimension } value - 首行文本缩进。<br/>默认值：0 <br/>单位：
   *     [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) <br/>取值范围：大于等于0。设置负数时，按默认值处理。
   * @returns { SearchAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent(value: Dimension): SearchAttribute;

  /**
   * 通过正则表达式设置输入过滤器。匹配表达式的输入允许显示，不匹配的输入将被过滤。
   * 
   * 单字符输入场景仅支持单字符匹配，多字符输入场景支持字符串匹配，例如粘贴。
   * 
   * 设置inputFilter且输入的字符不为空字符，会导致设置输入框类型(即type接口)附带的文本过滤效果失效。
   *
   * @param { ResourceStr } value - 正则表达式。
   * @param { Callback<string> } error - 正则匹配失败时，返回被过滤的内容。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  inputFilter(value: ResourceStr, error?: Callback<string>): SearchAttribute;

  /**
   * 输入状态变化时，触发该回调。有光标时为编辑态，无光标时为非编辑态。
   *
   * @param { Callback<boolean> } callback - 编辑状态改变回调，其返回值为true表示正在输入，false表示无焦点，无法输入文字。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onEditChange(callback: Callback<boolean>): SearchAttribute;

  /**
   * 设置文本选中底板颜色。如果未设置不透明度，默认为20%不透明度。
   *
   * @param { ResourceColor } value - 文本选中底板颜色。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): SearchAttribute;

  /**
   * 设置光标样式。
   *
   * @param { CaretStyle } value - 光标样式。<br />默认值：<br />{<br />width: '2.0vp',<br />color: '#007DFF'<br />}
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  caretStyle(value: CaretStyle): SearchAttribute;

  /**
   * 设置placeholder文本颜色，Wearable设备上默认值为'#99ffffff'。
   *
   * @param { ResourceColor } value - placeholder文本颜色。<br />默认值：'#99182431'。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  placeholderColor(value: ResourceColor): SearchAttribute;

  /**
   * 设置placeholder文本样式，包括字体大小、字体粗细、字体族、字体风格。
   *
   * @param { Font } value - placeholder文本样式。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  placeholderFont(value?: Font): SearchAttribute;

  /**
   * 设置搜索框内输入文本样式，包括字体大小、字体粗细、字体族、字体风格。
   * 
   * Wearable设备上默认字体大小为18fp。
   *
   * @param { Font } value - 搜索框内输入文本样式。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  textFont(value?: Font): SearchAttribute;

  /**
   * 设置输入法回车键类型。
   *
   * @param { EnterKeyType } value - 输入法回车键类型。<br/>默认值：EnterKeyType.Search
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enterKeyType(value: EnterKeyType): SearchAttribute;

  /**
   * 点击搜索图标、搜索按钮或者按下软键盘搜索按钮时触发该回调。
   *
   * @param { function } callback - Search submission callback, which returns the text content currently in the search
   *     box. [since 8 - 17]
   * @param { Callback<string> } callback - 搜索提交回调，其返回值为当前搜索框中输入的文本内容。 [since 18]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSubmit(callback: Callback<string>): SearchAttribute;

  /**
   * 点击搜索图标、搜索按钮或者按下软键盘搜索按钮时触发该回调事件，提交事件时提供保持Search编辑状态的方法。
   *
   * @param { SearchSubmitCallback } callback - 点击搜索图标、搜索按钮或者按下软键盘搜索按钮时的回调事件。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onSubmit(callback: SearchSubmitCallback): SearchAttribute;

  /**
   * 输入内容发生变化时，触发该回调。
   * 
   * 在本回调中，若执行了光标操作，需要开发者在预上屏场景下依据previewText参数调整光标逻辑，以适应预上屏场景。
   *
   * @param { function } callback - Callback invoked when the input in the text box changes. [since 8 - 11]
   * @param { EditableTextOnChangeCallback } callback - 当前输入文本内容变化时的回调。 [since 12]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: EditableTextOnChangeCallback): SearchAttribute;

  /**
   * 文本选择的位置或编辑状态下光标位置发生变化时，触发该回调。
   *
   * @param { function } callback - Callback for text selection changes or caret position changes. [since 10 - 17]
   * @param { OnTextSelectionChangeCallback } callback - 文本选择变化回调或光标位置变化回调。 [since 18]
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTextSelectionChange(callback: OnTextSelectionChangeCallback): SearchAttribute;

  /**
   * 文本内容滚动时，触发该回调。
   *
   * @param { function } callback - Callback for text content scrolling. [since 10 - 17]
   * @param { OnContentScrollCallback } callback - 文本内容滚动回调。 [since 18]
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onContentScroll(callback: OnContentScrollCallback): SearchAttribute;

  /**
   * 进行复制操作时，触发该回调。
   *
   * @param { function } callback - Callback used to return the copied text content. [since 8 - 17]
   * @param { Callback<string> } callback - 复制回调，其返回值为复制的文本内容。 [since 18]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCopy(callback: Callback<string>): SearchAttribute;

  /**
   * 在进行复制操作前，触发该回调。
   *
   * @param { Callback<string, boolean> } callback - 复制操作前的回调。回调参数类型为string时，表示将要被复制的文本内容。回调参数类型为boolean时，表示当前选中文本是否允许被复
   *     制，true：允许文本被复制；false：不允许文本被复制。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Callback<string, boolean>): SearchAttribute;

  /**
   * 进行剪切操作时，触发该回调。
   *
   * @param { function } callback - Callback used to return the cut text content. [since 8 - 17]
   * @param { Callback<string> } callback - 剪切回调，其返回值为剪切的文本内容。 [since 18]
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCut(callback: Callback<string>): SearchAttribute;

  /**
   * 在进行剪切操作前，触发该回调。
   *
   * @param { Callback<string, boolean> } callback - 剪切操作前的回调。回调参数类型为string时，表示将要被剪切的文本内容。回调参数类型为boolean时，表示当前选中文本是否允许被剪
   *     切，true：允许文本被剪切；false：不允许文本被剪切。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCut(callback: Callback<string, boolean>): SearchAttribute;

  /**
   * 进行粘贴操作时，触发该回调。
   *
   * @param { function } callback
   *     Executed when a paste operation is performed.
   *     { string } value - The text content to be pasted.
   *     { PasteEvent } event - The user-defined paste event. [since 8 - 17]
   * @param { OnPasteCallback } callback - Executed when a paste operation is performed.Callback used to return the
   *     pasted text content. [since 18]
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPaste(callback: OnPasteCallback): SearchAttribute;

  /**
   * 设置输入的文本是否可复制。设置CopyOptions.None时，当前Search中的文字无法被复制、剪切、翻译、分享、搜索和帮写，支持粘贴和全选。
   * 
   * 设置CopyOptions.None时，不允许拖拽。
   *
   * @param { CopyOptions } value - 输入的文本是否可复制。<br />默认值：CopyOptions.LocalDevice，支持设备内复制。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): SearchAttribute;

  /**
   * 设置文本的最大输入字符数。默认不设置最大输入字符数限制。到达文本最大字符限制，将无法继续输入字符。
   *
   * @param { number } value - 文本的最大输入字符数。 </br> 当value<0时，按照默认值处理，不设限制。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  maxLength(value: number): SearchAttribute;

  /**
   * 设置文本在搜索框中的对齐方式。目前支持的对齐方式有：TextAlign.Start、TextAlign.Center、TextAlign.End、TextAlign.LEFT、TextAlign.RIGHT。
   * TextAlign.JUSTIFY的对齐方式按照TextAlign.Start处理。
   *
   * @param { TextAlign } value - 文本在搜索框中的对齐方式。<br/>默认值：TextAlign.Start
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  textAlign(value: TextAlign): SearchAttribute;

  /**
   * 设置Search通过点击以外的方式获焦时，是否主动拉起软键盘。
   * 
   * 从API version 10开始，获焦默认绑定输入法。
   *
   * @param { boolean } value - Search获焦时，是否主动拉起软键盘。<br/>true表示主动拉起，false表示不主动拉起。<br/>默认值：true
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableKeyboardOnFocus(value: boolean): SearchAttribute;

  /**
   * 设置是否不弹出系统文本选择菜单。
   *
   * @param { boolean } value - 是否不弹出系统文本选择菜单。<br />设置为true时，单击输入框光标、长按输入框、双击输入框、三击输入框或者右键输入框，不弹出系统文本选择菜单。<br />设置为false
   *     时，弹出系统文本选择菜单。<br />默认值：false
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectionMenuHidden(value: boolean): SearchAttribute;

  /**
   * 设置文本最小显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 需配合[maxFontSize]{@link SearchAttribute#maxFontSize}以及布局大小限制使用，单独设置不生效。
   * 
   * 自适应字号生效时，fontSize设置不生效。
   * 
   * minFontSize小于或等于0时，自适应字号不生效，此时按照[textFont]{@link SearchAttribute#textFont}属性里面size的取值生效，未设置时按照其默认值生效。
   *
   * @param { number | string | Resource } value - 文本最小显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minFontSize(value: number | string | Resource): SearchAttribute;

  /**
   * 设置文本最大显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 需配合[minFontSize]{@link SearchAttribute#minFontSize}以及布局大小限制使用，单独设置不生效。
   * 
   * 自适应字号生效时，fontSize设置不生效。
   * 
   * maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照[textFont]{@link SearchAttribute#textFont}属性里面size的取值生效，未设
   * 置时按照其默认值生效。
   *
   * @param { number | string | Resource } value - 文本最大显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxFontSize(value: number | string | Resource): SearchAttribute;

  /**
   * 设置文本最小的字体缩放倍数。
   *
   * @param { Optional<number | Resource> } scale - 文本最小的字体缩放倍数，支持undefined类型。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置的值小于0
   *     时，按值为0处理。设置的值大于1，按值为1处理。异常值默认不生效。<br/>使用前需在工程中配置
   *     [configuration.json](docroot://quick-start/app-configuration-file.md#configuration标签)文件和
   *     [app.json5](docroot://quick-start/app-configuration-file.md)文件，具体详见
   *     [示例19（设置最小字体范围与最大字体范围）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#示例19设置最小字体范围与最大字体范围)。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: Optional<number|Resource>): SearchAttribute;

  /**
   * 设置文本最大的字体缩放倍数。
   *
   * @param { Optional<number | Resource> } scale - 文本最大的字体缩放倍数，支持undefined类型。<br/>取值范围：
   *     [1, +∞)<br/>**说明：** <br/>设置的值小于1时，按值为1处理。异常值默认不生效。<br/>设置maxFontScale属性后，search组件内容最多放大到2倍。<br/>使用前需在工程中配置[configuration.json](docroot://quick-start/app-configuration-file.md#configuration标签)文件和[app.json5](docroot://quick-start/app-configuration-file.md)文件，具体详见[示例19（设置最小字体范围与最大字体范围）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#示例19设置最小字体范围与最大字体范围)。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): SearchAttribute;

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
   * 当设置自定义键盘时，可以通过绑定[onKeyPreIme]{@link CommonMethod#onKeyPreIme}事件规避物理键盘的输入。
   * 
   * 从API version 23开始，自定义键盘可以通过
   * [setCustomKeyboardContinueFeature](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#setcustomkeyboardcontinuefeature23)
   * 开启接续，在切换至其他自定义键盘时，会直接切换，不会触发键盘关闭和拉起动画。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { CustomBuilder } value - Custom keyboard. If the value is **undefined**, the custom keyboard is
   *     closed. [since 10 - 21]
   * @param { CustomBuilder | ComponentContent | undefined } value - 自定义键盘。设定值为undefined时，关闭自定义键盘。 [since 22]
   * @param { KeyboardOptions } [options] - 设置自定义键盘是否支持避让功能。 [since 12]
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): SearchAttribute;

  /**
   * 设置文本装饰线类型样式及其颜色。
   *
   * @param { TextDecorationOptions } value - 文本装饰线对象。<br />默认值：{<br/> type: TextDecorationType.None,<br/> color: 
   *     Color.Black,<br/> style: TextDecorationStyle.SOLID,<br/> thicknessScale: 1.0<br/>}
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  decoration(value: TextDecorationOptions): SearchAttribute;

  /**
   * 设置文本字符间距。设置该值为百分比时，按默认值显示。设置该值为0时，按默认值显示。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 当取值为负值时，文字会发生压缩，负值过小时会将组件内容区大小压缩为0，导致无内容显示。
   * 
   * 对每个字符生效，包括行尾字符。
   *
   * @param { number | string | Resource } value - 文本字符间距。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing(value: number | string | Resource): SearchAttribute;

  /**
   * 设置文本的文本行高，设置值不大于0时，不限制文本行高，自适应字体大小，number类型时单位为fp。
   *
   * @param { number | string | Resource } value - 文本的文本行高。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight(value: number | string | Resource): SearchAttribute;

  /**
   * 设置输入框类型。
   * 
   * 不同的SearchType会拉起对应类型的键盘，同时限制输入。
   *
   * @param { SearchType } value - 输入框类型。<br/>默认值：SearchType.NORMAL
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type(value: SearchType): SearchAttribute;

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
   * @param { string } value - 文字特性效果。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): SearchAttribute;

  /**
   * 在将要输入时，触发该回调。
   *
   * @param { Callback<InsertValue, boolean> } callback - 在将要输入时调用的回调。<br/>在返回true时，表示正常插入，返回false时，表示不插入。<br/>在预上屏和候选词操
   *     作时，该回调不触发。<br/>仅支持系统输入法输入的场景。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): SearchAttribute;

  /**
   * 在输入完成时，触发该回调。
   *
   * @param { Callback<InsertValue> } callback - 在输入完成时调用的回调。<br/>仅支持系统输入法输入的场景。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidInsert(callback: Callback<InsertValue>): SearchAttribute;

  /**
   * 在将要删除时，触发该回调。
   *
   * @param { Callback<DeleteValue, boolean> } callback - 在将要删除时调用的回调。<br/>在返回true时，表示正常删除，返回false时，表示不删除。<br/>在预上屏删除操作
   *     时，该回调不触发。<br/>仅支持系统输入法输入的场景。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): SearchAttribute;

  /**
   * 在删除完成时，触发该回调。
   *
   * @param { Callback<DeleteValue> } callback - 在删除完成时调用的回调。<br/>仅支持系统输入法输入的场景。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDelete(callback: Callback<DeleteValue>): SearchAttribute;

  /**
   * 在搜索框将要绑定输入法前触发该回调。
   * 
   * <!--Del-->
   * 
   * 在搜索框将要绑定输入法前，可以通过`UIContext`的系统接口
   * [setKeyboardAppearanceConfig]{@link @ohos.arkui.UIContext:UIContext#setKeyboardAppearanceConfig}设置键盘的样式。<!--DelEnd-
   * ->
   * 
   * 从API version 22开始，调用[IMEClient](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#imeclient20对象说明)的
   * [setExtraConfig]{@link IMEClient.setExtraConfig}方法可以设置输入法扩展信息。在绑定输入法成功后，输入法会收到扩展信息，输入法可以依据此信息实现自定义功能。
   * 
   * IMEClient仅在onWillAttachIME执行期间有效，不可进行异步调用。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<IMEClient> } callback - 在搜索框将要绑定输入法前触发该回调。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient>): SearchAttribute;

  /**
   * 设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。
   * 
   * 调用[disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20)或
   * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
   * 接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法[onCreateMenu]{@link EditMenuOptions.onCreateMenu}的入参列表中不包含被屏蔽的菜单选项。
   *
   * @param { EditMenuOptions } editMenu - 扩展菜单选项。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): SearchAttribute;

  /**
   * 设置是否开启输入预上屏。
   * 
   * 预上屏内容定义为文字暂存态，目前不支持文字拦截功能。
   *
   * @param { boolean } enable - 是否开启输入预上屏。<br/>true表示开启输入预上屏，false表示不开启输入预上屏。<br/>默认值：true
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): SearchAttribute;

  /**
   * 设置是否开启触控反馈。
   * 
   * 开启触控反馈时，需要在工程的[module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段以开启振动权限，配置如
   * 下：
   *
   * @param { boolean } isEnabled - 是否开启触控反馈。<br/>true表示开启触控反馈，false表示不开启触控反馈。<br/>默认值：true
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): SearchAttribute;

  /**
   * 设置自动大小写模式的文本模式，只提供接口能力，具体实现以输入法应用为主。
   *
   * @param { AutoCapitalizationMode } mode - 自动大小写模式，默认状态无效。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): SearchAttribute;

  /**
   * 设置文本在行内垂直居中，将行间距平分至行的顶部与底部。
   *
   * @param { Optional<boolean> } halfLeading - 设置文本是否垂直居中。<br/>true表示将行间距平分至行的顶部与底部，false则不平分。<br/>默认值：false
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading(halfLeading: Optional<boolean>): SearchAttribute;

  /**
   * 设置是否阻止返回键传递。
   *
   * @param { Optional<boolean> } isStopped - 是否阻止返回键。<br/>true表示阻止，false表示不阻止。<br/>默认值：true。异常值取默认值。
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): SearchAttribute;

  /**
   * 在文本内容将要发生变化时，触发该回调。
   * 
   * onWillChange的回调时序晚于onWillInsert、onWillDelete，早于onDidInsert、onDidDelete。
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - 在文本内容将要发生变化时的回调。<br/>返回true时，表示正常修改。返回false时，表示拦截此
   *     次触发。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): SearchAttribute;

  /**
   * 设置输入框拉起的键盘样式，需要输入法适配后生效。具体参考[输入法应用沉浸模式](docroot://inputmethod/inputmethod-immersive-mode-guide.md)。
   *
   * @param { Optional<KeyboardAppearance> } appearance - 键盘样式。<br/>默认值：KeyboardAppearance.NONE_IMMERSIVE
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): SearchAttribute;

  /**
   * 设置文本描边的宽度。
   *
   * @param { Optional<LengthMetrics> } width - 文本描边的宽度。如果LengthMetrics的unit值是PERCENT，当前设置不生效，按默认值处理。<br/>若设置值小于0，显示实心字；
   *     若大于0，显示空心字。<br/>默认值为0，不做描边处理。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeWidth(width: Optional<LengthMetrics>): SearchAttribute;

  /**
   * 设置文本描边的颜色。
   *
   * @param { Optional<ResourceColor> } color - 描边颜色。默认值为字体颜色，设置异常值时取默认值。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor(color: Optional<ResourceColor>): SearchAttribute;

  /**
   * 设置是否开启中文与西文的自动间距。
   *
   * @param { Optional<boolean> } enabled - 是否开启中文与西文的自动间距。<br/>true为开启自动间距，false为不开启。<br />默认值：false
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): SearchAttribute;

  /**
   * 设置输入框分割线颜色。
   *
   * @param { Optional<ColorMetrics> } color - 设置分割线颜色。<br/>默认使用系统的主题色：浅色模式下为0x33000000，显示为浅黑色，深色模式下为0x33FFFFFF，显示为浅白色。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  dividerColor(color: Optional<ColorMetrics>): SearchAttribute;

  /**
   * 设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。
   *
   * @param { Optional<boolean> } include - 是否在首行和尾行增加间距以避免文字截断。<br/>true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): SearchAttribute;

  /**
   * 针对多行文字叠加，支持行高基于文字实际高度自适应。此接口仅当行高小于文字实际高度时生效。不通过该接口设置，默认行高不基于文字实际高度自适应。
   *
   * @param { Optional<boolean> } enabled - 行高是否基于文字实际高度自适应。<br/>true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): SearchAttribute;

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
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): SearchAttribute;

  /**
   * 设置搜索框内文本拖拽时的背板样式。
   *
   * @param { SelectedDragPreviewStyle | undefined } value - 文本拖拽时的背板样式。<br/>设置为undefined时：背板颜色跟随主题，浅色模式显示白色，深色模式显示黑色。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): SearchAttribute;

  /**
   * 指定文本排版方向，未通过该接口设置时，默认文本排版方向遵循组件布局方向。
   *
   * @param { TextDirection | undefined } direction - 文本排版方向。<br/>设置为undefined时，按照TextDirection.DEFAULT处理，表现为文本排版方向遵循组件布
   *     局方向。
   * @returns { SearchAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): SearchAttribute;

  /**
   * 设置文本描边拐角样式。
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - 文本描边拐角样式。<br/>值为undefined时，按照StrokeJoinStyle.MITER_JOIN处理，
   *     请参考[StrokeJoinStyle]{@link StrokeJoinStyle}，文本拐角处表现为锐角。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): SearchAttribute;

  /**
   * 设置文本着色器效果，如线性渐变、径向渐变效果等。
   * 
   * > **说明：**
   * >
   * > 当同时设置shaderStyle和[strokeWidth]{@link SearchAttribute#strokeWidth}时，shaderStyle不生效。
   * >
   * > shaderStyle的优先级高于[fontColor]{@link SearchAttribute#fontColor}。
   *
   * @param { ShaderStyle | undefined } shader - 文本着色器效果。<br/>值为undefined时，无渐变效果。
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle(shader: ShaderStyle | undefined): SearchAttribute;
}

/**
 * 搜索框组件，适用于浏览器的搜索内容输入框等应用场景。
 * 
 * > **说明：**
 * >
 * > 该组件仅支持单文本样式，若需实现富文本样式，建议使用[RichEditor]{@link rich_editor}组件。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const Search: SearchInterface;

/**
 * 定义搜索组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const SearchInstance: SearchAttribute;