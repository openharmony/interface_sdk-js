/*
* Copyright (C) 2025 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @file This section describes the interfaces used by AtomicServiceSearch
 * @kit ArkUI
 */
import { OperationOption } from '@ohos.arkui.advanced.SubHeader';
/**
 * 下拉菜单选中某一项的回调。
 *
 * @param { number } index - 选中项的索引，索引从0开始。
 * @param { string } [selectValue] - 选中项的值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnSelectCallback = (index: number, selectValue: string) => void;
/**
 * 进行粘贴操作时，触发该回调。
 *
 * @param { string } pasteValue - 要粘贴的文本内容。
 * @param { PasteEvent } event - 用户自定义粘贴事件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnPasteCallback = (pasteValue: string, event: PasteEvent) => void;
/**
 * 文本选择的位置发生变化或编辑状态下光标位置发生变化时，触发该回调。
 *
 * @param { number } selectionStart - 文本选择区域的起始位置。
 * @param { number } selectionEnd - 文本选择区域的结束位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;
/**
 * 文本内容滚动时，触发该回调。
 *
 * @param { number } totalOffsetX - 文本左上角横坐标相较于整个内容输入区左上角横坐标的偏移量。
 * @param { number } totalOffsetY - 文本左上角纵坐标相较于整个内容输入区左上角纵坐标的偏移量。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;
/**
 * 搜索框过滤设置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface InputFilterParams {
  /**
   * 正则表达式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  inputFilterValue: ResourceStr;
  /**
   * 正则匹配失败时，返回被过滤的内容。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  error?: Callback<string>;
}
/**
 * 搜索框末尾搜索按钮设置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SearchButtonParams {
  /**
   * 搜索框末尾搜索按钮文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchButtonValue: ResourceStr;
  /**
   * 配置搜索框文本样式。默认值：`{fontSize: '16fp',fontColor: '#ff3f97e9'}`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  options?: SearchButtonOptions;
}
/**
 * 下拉按钮与下拉菜单间的对齐方式设置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface MenuAlignParams {
  /**
   * 对齐方式类型。默认值：`MenuAlignType.START`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  alignType: MenuAlignType;
  /**
   * 按照对齐类型对齐后，下拉菜单相对下拉按钮的偏移量。默认值：`{dx: 0, dy: 0}`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  offset?: Offset;
}
/**
 * AtomicServiceSearch中“搜索区”的可选属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SearchParams {
  /**
   * 用作找到一个唯一的search组件。默认值：`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchKey?: ResourceStr;
  /**
   * 设置组件的背景色。默认值：`$r('sys.color.ohos_id_color_text_field_sub_bg')`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  componentBackgroundColor?: ResourceColor;
  /**
   * 设置组件按压态的背景色。默认值：`$r('sys.color.ohos_id_color_click_effect')`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  pressedBackgroundColor?: ResourceColor;
  /**
   * 设置搜索框末尾搜索按钮。点击搜索按钮，同时触发onSubmit与onClick回调。
   * 
   * -value：搜索框末尾搜索按钮文本内容。
   * 
   * -option: 配置搜索框文本样式。默认值：`{fontSize: '16fp', fontColor: '#ff3f97e9'}`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchButton?: SearchButtonParams;
  /**
   * placeholder文本颜色。默认值：`$r('sys.color.ohos_id_color_text_secondary')`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  placeholderColor?: ResourceColor;
  /**
   * 设置placeholder文本样式，包括字体大小，字体粗细，字体族，字体风格。默认值：`{size: $r('sys_float.ohos_id_text_size_body1')}`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  placeholderFont?: Font;
  /**
   * 设置搜索框内输入文本样式，包括字体大小，字体粗细，字体族，字体风格。目前仅支持默认字体族。默认值：`{size: $r('sys_float.ohos_id_text_size_body1')}`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  textFont?: Font;
  /**
   * 文本在搜索框中的对齐方式。默认值：`TextAlign.Start`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  textAlign?: TextAlign;
  /**
   * 输入的文本是否可复制。默认值：`CopyOptions.LocalDevice`，支持设备内复制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  copyOptions?: CopyOptions;
  /**
   * 左侧搜索图标样式。
   * 
   * 浅色模式默认值：`{size: '16vp', color: '#99182431', src: ' '}`。
   * 
   * 深色模式默认值：`{size: '16vp', color: '#99ffffff', src: ' '}`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchIcon?: IconOptions | SymbolGlyphModifier;
  /**
   * 右侧清除按钮样式。默认值：`{style: CancelButtonStyle.INPUT, icon: {size: '16vp', color: '#99ffffff', src: ' '}}`。
   * 
   * 当style为CancelButtonStyle.CONSTANT时，默认显示清除样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  cancelIcon?: IconOptions;
  /**
   * 输入文本的字体颜色。默认值：`$r('sys.color.ohos_id_color_text_secondary')`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  fontColor?: ResourceColor;
  /**
   * 光标样式。默认值：`{width: '1.5vp', color: '#007DFF'}`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  caretStyle?: CaretStyle;
  /**
   * Search获焦时，是否主动拉起软键盘。true表示Search获焦时主动拉起软键盘。false表示Search获焦时不主动拉起键盘。默认值：`true`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enableKeyboardOnFocus?: boolean;
  /**
   * 是否不弹出系统文本选择菜单。
   * 
   * 设置为true时，单击输入框光标、长按输入框、双击输入框、三击输入框或者右键输入框，不弹出系统文本选择菜单。设置为false时，弹出系统文本选择菜单。默认值：`false`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  hideSelectionMenu?: boolean;
  /**
   * 输入框类型。默认值：`SearchType.Normal`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  type?: SearchType;
  /**
   * 设置文本的最大输入字符数。默认不设置最大输入字符数限制。到达文本最大字符限制，将无法继续输入字符。默认值：`-1`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  maxLength?: number;
  /**
   * 输入法回车键类型。默认值：`EnterKeyType.Search`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enterKeyType?: EnterKeyType;
  /**
   * 文本装饰线对象。默认值：`{type: TextDecorationType.None, color: Color.Black, style: TextDecorationStyle.SOLID}`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  decoration?: TextDecorationOptions;
  /**
   * 设置文本字符间距。正数拉开字符距离，负数则拉近字符距离。浮点数默认值为0.0，单位为物理像素px。若输入类型非number且无法解析为数字，则使用默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  letterSpacing?: number | string | Resource;
  /**
   * 设置文字特性效果，比如数字等宽的特性。
   * 
   * 格式为：normal | <feature-tag-value>
   * 
   * <feature-tag-value>的格式为：<string> [ <integer> | on | off ]
   * 
   * <feature-tag-value>的个数可以有多个，中间用','隔开。
   * 
   * 例如，使用等宽数字的输入格式为："ss01" on。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  fontFeature?: ResourceStr;
  /**
   * 文本选中底板颜色。默认为20%不透明度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedBackgroundColor?: ResourceColor;
  /**
   * 通过正则表达式设置输入过滤器。匹配表达式的输入允许显示，不匹配的输入将被过滤。仅支持单个字符匹配，不支持字符串匹配。默认值为`undefined`。
   * 
   * -value: 正则表达式。 
   * 
   * -error: 正则匹配失败时，返回被过滤的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  inputFilter?: InputFilterParams;
  /**
   * 首行文本缩进。默认值：`0`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  textIndent?: Dimension;
  /**
   * 设置文本最小显示字号。需要配合maxFontSize以及布局大小限制使用，单独设置不生效。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  minFontSize?: number | string | Resource;
  /**
   * 设置文本最大显示字号。需要配合minFontSize以及布局大小限制使用，单独设置不生效。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  maxFontSize?: number | string | Resource;
  /**
   * 设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  editMenuOptions?: EditMenuOptions;
  /**
   * 是否开启输入预上屏。true表示开启输入预上屏。false表示不开启输入预上屏。默认值：`true`。 
   * 
   * 需要配合开启输入法的预上屏功能。预上屏内容定义为文字暂存态，目前不支持文字拦截功能，因此该值为true时不触发onWillInsert、onDidInsert回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enablePreviewText?: boolean;
  /**
   * 是否开启触控反馈。true表示开启触控反馈。false表示不开启触控反馈。默认值：`true`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enableHapticFeedback?: boolean;
  /**
   * 点击搜索图标、搜索按钮或者按下软键盘搜索按钮时触发该回调。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onSubmit?: Callback<string> | SearchSubmitCallback;
  /**
   * 输入内容发生变化时，触发该回调。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onChange?: EditableTextOnChangeCallback;
  /**
   * 进行复制操作时，触发该回调。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onCopy?: Callback<string>;
  /**
   * 进行剪切操作时，触发该回调。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onCut?: Callback<string>;
  /**
   * 进行粘贴操作时，触发该回调。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onPaste?: OnPasteCallback;
  /**
   * 文本选择的位置发生变化或编辑状态下光标位置发生变化时，触发该回调。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onTextSelectionChange?: OnTextSelectionChangeCallback;
  /**
   * 文本内容滚动时，触发该回调。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onContentScroll?: OnContentScrollCallback;
  /**
   * 输入状态变化时，触发该回调。有光标时为编辑态，无光标时为非编辑态。isEditing为true表示正在输入。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onEditChange?: Callback<boolean>;
  /**
   * 在将要输入时，触发该回调。true表示将输入内容正常插入结果字符串，false表示不插入。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onWillInsert?: Callback<InsertValue, boolean>;
  /**
   * 在输入完成时，触发该回调。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onDidInsert?: Callback<InsertValue>;
  /**
   * 在将要删除时，触发该回调。true表示正常删除，false表示不删除。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onWillDelete?: Callback<DeleteValue, boolean>;
  /**
   * 在删除完成时，触发该回调。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onDidDelete?: Callback<DeleteValue>;
}
/**
 * AtomicServiceSearch中“选择区”的可选属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SelectParams {
  /**
   * SubOption array of the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  options?: Array<SelectOption>;
  /**
   * The default selected index.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selected?: number;
  /**
   * The default text value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectValue?: ResourceStr;
  /**
   * Callback when the select is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onSelect?: OnSelectCallback;
  /**
   * Register a ContentModifier for each menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuItemContentModifier?: ContentModifier<MenuItemConfiguration>;
  /**
   * Sets the divider of select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  divider?: Optional<DividerOptions> | null;
  /**
   * Sets the text properties of the select button itself.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  font?: Font;
  /**
   * Sets the text color of the select button itself.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  fontColor?: ResourceColor;
  /**
   * Sets the background color of the selected items in the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedOptionBgColor?: ResourceColor;
  /**
   * Sets the text style of the selected items in the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedOptionFont?: Font;
  /**
   * Sets the text color of the selected item in the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedOptionFontColor?: ResourceColor;
  /**
   * Sets the background color of the select item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionBgColor?: ResourceColor;
  /**
   * Sets the text style for select items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionFont?: Font;
  /**
   * Sets the text color for select items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionFontColor?: ResourceColor;
  /**
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionWidth?: Dimension | OptionWidthMode;
  /**
   * Set the height of each option.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionHeight?: Dimension;
  /**
   * Set the space for text and icon in select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  space?: Length;
  /**
   * Set the layout direction for text and arrow in select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  arrowPosition?: ArrowPosition;
  /**
   * Set the alignment between select and menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuAlign?: MenuAlignParams;
  /**
   * Set the menu's background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuBackgroundColor?: ResourceColor;
  /**
   * Set menu background blur Style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuBackgroundBlurStyle?: BlurStyle;
}
/**
 * AtomicServiceSearch中“功能区”的初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface OperationParams {
  /**
   * 附属于搜索区（右侧）的功能位。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  auxiliaryItem?: OperationOption;
  /**
   * 独立于搜索区（右侧）的功能位。默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  independentItem?: OperationOption;
}
/**
 * AtomicServiceSearch为开发者提供满足定制化需求的功能，内容包括默认显示的搜索区、可自定义的选择区和功能区（最多两个）。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
@Component
export declare struct AtomicServiceSearch {
  /**
   * Sets the search text content that is currently displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  value?: ResourceStr;
  /**
   * Indicates default prompt text displayed in the search box.
   * The default value is Search, which supports globalization.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  placeholder?: ResourceStr;
  /**
   * Events and styles supported by the search area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  search?: SearchParams;
  /**
   * Contents, events, and styles of the select area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  select?: SelectParams;
  /**
   * Function settings in the selection area (right).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  operation?: OperationParams;
  /**
   * Set the Search component controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  controller?: SearchController;
}