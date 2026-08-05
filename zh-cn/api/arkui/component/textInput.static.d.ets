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
import { CancelButtonSymbolOptions, CancelButtonOptions } from "./search";

import { Callback, CommonMethod, TextContentControllerBase, SelectionOptions, InputCounterOptions, TextDecorationOptions, Bindable, AttributeModifier } from "./common";

import { Builder, CustomBuilder, CustomBuilderT, ComponentBuilder } from './builder';
import { BarState, LineBreakStrategy, TextAlign, FontStyle, FontWeight, WordBreak, TextOverflow, CopyOptions, TextHeightAdaptivePolicy, TextContentStyle, EllipsisMode } from "./enums";

import { Resource, ResourceStr, ResourceColor, Dimension, Font, Length, LengthMetrics } from "./units";

import { InsertValue, DeleteValue, CaretStyle, EditableTextOnChangeCallback, EditMenuOptions, AutoCapitalizationMode, EditableTextChangeValue, KeyboardAppearance, TextDirection, IMEClient, SelectedDragPreviewStyle, VoiceButtonOptions, ShaderStyle, StrokeJoinStyle } from "./textCommon";
import { KeyboardOptions, PasteEvent } from "./richEditor";
import { ComponentContentBase } from '../ComponentContent';
/**
 * 单行文本输入框类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum InputType {
  /**
   * 基本输入模式，无特殊限制。
   *
   * 内联输入风格只支持InputType.Normal类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Normal = 0,
  /**
   * 纯数字输入模式。
   *
   * 不支持负数、小数。
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
  PhoneNumber = 3,
  /**
   * 邮箱地址输入模式。
   *
   * 支持数字、字母、下划线、小数点、!、#、$、%、&、'、"、*、+、-、/、=、?、^、`、{、|、}、~，以及@字符（只能存在一个@字符）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Email = 5,
  /**
   * 密码输入模式。
   *
   * 默认输入文字短暂显示后变成圆点。从API version 12开始，PC/2in1设备上输入文字直接显示为圆点。
   *
   * TV设备上输入框末尾默认不显示小眼睛图标，其他设备输入框末尾默认显示小眼睛图标。
   *
   * 密码输入模式中，[decoration]{@link decoration}、[showUnderline]{@link showUnderline}、[lineHeight]{@link lineHeight}不生效。
   *
   * 在已启用密码保险箱的情况下，支持用户名、密码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Password = 7,
  /**
   * 纯数字密码输入模式。
   *
   * 默认输入文字短暂显示后变成圆点。从API version 12开始，PC/2in1设备上输入文字直接显示为圆点。
   *
   * TV设备上输入框末尾默认不显示小眼睛图标，其他设备输入框末尾默认显示小眼睛图标。
   *
   * 密码输入模式不支持下划线样式。在已启用密码保险箱的情况下，支持用户名、密码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NUMBER_PASSWORD = 8,
  /**
   * 锁屏应用密码输入模式。支持输入数字、字母、下划线、空格、特殊字符。密码显示小眼睛图标并且默认会将文字变成圆点，特定设备上输入文字直接显示为圆点。
   * 密码输入模式不支持下划线样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  SCREEN_LOCK_PASSWORD = 9,
  /**
   * 用户名输入模式，无特殊限制。
   *
   * 在已启用密码保险箱的情况下，支持用户名、密码的自动保存和自动填充。
   *
   * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  USER_NAME = 10,
  /**
   * 新密码输入模式，无特殊限制。
   *
   * 默认输入文字短暂显示后变成圆点。从API version 12开始，PC/2in1设备上输入文字直接显示为圆点。
   *
   * TV设备上输入框末尾默认不显示小眼睛图标，其他设备输入框末尾默认显示小眼睛图标。
   *
   * 在已启用密码保险箱的情况下，支持自动生成新密码。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NEW_PASSWORD = 11,
  /**
   * 带小数点的数字输入模式。
   *
   * 支持数字，小数点（只能存在一个小数点）。不支持负数小数，负数小数的数字输入模式请使用inputFilter实现。
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
  ONE_TIME_CODE = 14,
}
/**
 * 自动填充类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ContentType {
  /**
   * 【用户名】在已启用密码保险箱的情况下，支持用户名的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  USER_NAME = 0,
  /**
   * 【密码】在已启用密码保险箱的情况下，支持密码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PASSWORD = 1,
  /**
   * 【新密码】在已启用密码保险箱的情况下，支持自动生成新密码。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NEW_PASSWORD = 2,
  /**
   * 【详细地址】在已启用情景化自动填充的情况下，支持详细地址的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FULL_STREET_ADDRESS = 3,
  /**
   * 【门牌号】在已启用情景化自动填充的情况下，支持门牌号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOUSE_NUMBER = 4,
  /**
   * 【区/县】在已启用情景化自动填充的情况下，支持区/县的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DISTRICT_ADDRESS = 5,
  /**
   * 【市】在已启用情景化自动填充的情况下，支持市的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CITY_ADDRESS = 6,
  /**
   * 【省】在已启用情景化自动填充的情况下，支持省的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PROVINCE_ADDRESS = 7,
  /**
   * 【国家】在已启用情景化自动填充的情况下，支持国家的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  COUNTRY_ADDRESS = 8,
  /**
   * 【姓名】在已启用情景化自动填充的情况下，支持姓名的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PERSON_FULL_NAME = 9,
  /**
   * 【姓氏】在已启用情景化自动填充的情况下，支持姓氏的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PERSON_LAST_NAME = 10,
  /**
   * 【名字】在已启用情景化自动填充的情况下，支持名字的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PERSON_FIRST_NAME = 11,
  /**
   * 【手机号码】在已启用情景化自动填充的情况下，支持手机号码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PHONE_NUMBER = 12,
  /**
   * 【国家代码】在已启用情景化自动填充的情况下，支持国家代码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PHONE_COUNTRY_CODE = 13,
  /**
   * 【包含国家代码的手机号码】在已启用情景化自动填充的情况下，支持包含国家代码的手机号码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FULL_PHONE_NUMBER = 14,
  /**
   * 【邮箱地址】在已启用情景化自动填充的情况下，支持邮箱地址的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EMAIL_ADDRESS = 15,
  /**
   * 【银行卡号】在已启用情景化自动填充的情况下，支持银行卡号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BANK_CARD_NUMBER = 16,
  /**
   * 【身份证号】在已启用情景化自动填充的情况下，支持身份证号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ID_CARD_NUMBER = 17,
  /**
   * 【昵称】在已启用情景化自动填充的情况下，支持昵称的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NICKNAME = 23,
  /**
   * 【无街道地址】在已启用情景化自动填充的情况下，支持无街道地址的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DETAIL_INFO_WITHOUT_STREET = 24,
  /**
   * 【标准地址】在已启用情景化自动填充的情况下，支持标准地址的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FORMAT_ADDRESS = 25,
  /**
   * 【护照号】在已启用情景化自动填充的情况下，支持护照号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PASSPORT_NUMBER = 26,
  /**
   * 【护照有效期】在已启用情景化自动填充的情况下，支持护照有效期的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  VALIDITY = 27,
  /**
   * 【护照签发地】在已启用情景化自动填充的情况下，支持护照签发地的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ISSUE_AT = 28,
  /**
   * 【发票抬头名称】在已启用情景化自动填充的情况下，支持发票抬头名称的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ORGANIZATION = 29,
  /**
   * 【税号】在已启用情景化自动填充的情况下，支持税号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TAX_ID = 30,
  /**
   * 【所在地区】在已启用情景化自动填充的情况下，支持所在地区的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ADDRESS_CITY_AND_STATE = 31,
  /**
   * 【航班号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FLIGHT_NUMBER = 32,
  /**
   * 【驾驶证号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LICENSE_NUMBER = 33,
  /**
   * 【驾驶证档案编号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LICENSE_FILE_NUMBER = 34,
  /**
   * 【车牌号】在已启用情景化自动填充的情况下，支持车牌号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LICENSE_PLATE = 35,
  /**
   * 【行驶证发动机号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ENGINE_NUMBER = 36,
  /**
   * 【车牌识别号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LICENSE_CHASSIS_NUMBER = 37
}
/**
 * 输入法回车键类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EnterKeyType {
  /**
   * 显示为开始样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Go = 2,
  /**
   * 显示为搜索样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Search = 3,
  /**
   * 显示为发送样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Send = 4,
  /**
   * 显示为下一步样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Next = 5,
  /**
   * 显示为完成样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Done = 6,
  /**
   * 显示为上一步样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PREVIOUS = 7,
  /**
   * 显示为换行样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NEW_LINE = 8
}
/**
 * Defines the underline color width property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UnderlineColor {
  /**
   * 键入时下划线颜色。不填写、undefined、null、无效值时恢复默认。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  typing?: ResourceColor | undefined;
  /**
   * 非特殊状态时下划线颜色。不填写、undefined、null、无效值时恢复默认。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  normal?: ResourceColor | undefined;
  /**
   * 错误时下划线颜色。不填写、undefined、null、无效值时恢复默认。此选项会修改showCounter属性中达到最大字符数时的颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  error?: ResourceColor | undefined;
  /**
   * 禁用时下划线颜色。不填写、undefined、null、无效值时恢复默认。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disable?: ResourceColor | undefined;
}
/**
 * 定义用户提交事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SubmitEvent {
  /**
   * 用户自定义输入框编辑状态，调用时保持编辑态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  keepEditableState(): void;
  /**
   * 输入框文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text: string;
}
/**
 * TextInput组件的控制器继承自
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
export declare class TextInputController extends TextContentControllerBase {
  /**
   * TextInputController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();
  /**
   * 设置输入光标的位置。当取值小于0时，取0，大于文本长度时，显示在文本末尾。
   *
   * @param { int } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  caretPosition(value: int): void;
  /**
   * 设置文本选择区域并高亮显示。
   *
   * @param { int } selectionStart - 文本选择区域起始位置，文本框中文字的起始位置为0。
   * @param { int } selectionEnd - 文本选择区域结束位置。当selectionEnd<0时，按照0处理；当selectionEnd大于文本长度时，按照文本长度处理。
   * @param { SelectionOptions } [options] - 选中文字时的配置。<br />默认值：MenuPolicy.DEFAULT
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTextSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
  /**
   * 退出编辑态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopEditing(): void;
}
/**
 * TextInput初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextInputOptions {
  /**
   * 设置无输入时的提示文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  placeholder?: ResourceStr;
  /**
   * 输入框文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>;
  /**
   * 设置TextInput控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller?: TextInputController;
}
/**
 * 文本输入样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextInputStyle {
  /**
   * 默认风格
   *
   * 光标宽1.5vp，光标高度与文本选中底板高度和字体大小相关。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Default = 0,
  /**
   * 内联输入风格，也称内联模式。文本选中底板高度与输入框高度相同。
   *
   * <br/>内联输入是在有明显的编辑态/非编辑态的区分场景下使用，例如：文件列表视图中的重命名。<br/>不支持showError属性。<br/>内联模式下，不支持拖入文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Inline = 1
}
/**
 * PasswordIcon对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PasswordIcon {
  /**
   * 密码输入模式时，能够切换密码可见时显示的图标。
   *
   * string格式可用于加载网络图片和本地图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onIconSrc?: string | Resource;
  /**
   * 密码输入模式时，能够切换密码不可见时显示的图标。
   *
   * string格式可用于加载网络图片和本地图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offIconSrc?: string | Resource;
}
/**
 * 提交回调。
 *
 * @param { EnterKeyType } enterKey - 输入法回车键类型。
 * @param { SubmitEvent } event - 提交事件。可以控制是否收起键盘。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;
/**
 * 文本选择变化回调或光标位置变化回调。
 *
 * @param { int } selectionStart - 所选文本的起始位置，文字的起始位置为0。
 * @param { int } selectionEnd - 所选文本的结束位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTextSelectionChangeCallback = (selectionStart: int, selectionEnd: int) => void;
/**
 * 文本内容滚动回调。
 *
 * @param { double } totalOffsetX - 文本在内容区的横坐标偏移，单位px。
 * @param { double } totalOffsetY - 文本在内容区的纵坐标偏移，单位px。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnContentScrollCallback = (totalOffsetX: double, totalOffsetY: double) => void;
/**
 * 粘贴回调。
 *
 * @param { string } content - 粘贴的文本内容。
 * @param { PasteEvent } event - 用户自定义的粘贴事件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnPasteCallback = (content: string, event: PasteEvent) => void;
/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)，还支持以下属性：
 *
 * > **说明：**
 * >
 * > 默认情况下，通用属性[padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding)的默认值为：
 *
 * {
 *
 * &nbsp;top: '8vp',
 *
 * &nbsp;right: '16vp',
 *
 * &nbsp;bottom: '8vp',
 *
 * &nbsp;left: '16vp'
 *
 * }
 *
 * > 输入框开启下划线模式时，通用属性padding的默认值为：
 *
 * {
 *
 * &nbsp;top: '12vp',
 *
 * &nbsp;right: '0vp',
 *
 * &nbsp;bottom: '12vp',
 *
 * &nbsp;left: '0vp'
 *
 * }
 *
 * > 当输入框设置padding为0时，可设置
 * > [borderRadius](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderradius)为0避免光标被截断。当光标
 * > 在文本框边缘显示异常时，请检查是否是padding、borderRadius属性影响造成。
 * >
 * > 从API version 10开始，单行输入框可设置.width('auto')使组件宽度自适应文本宽度，自适应时组件宽度受constraintSize属性以及父容器传递的最大最小宽度限制，其余使用方式参考
 * > [尺寸设置](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TextInputAttribute extends CommonMethod {
  /**
   * 设置输入框类型。
   *
   * 不同的InputType会拉起对应类型的键盘，同时限制输入。
   *
   * @param { InputType | undefined } value - 输入框类型。<br/>默认值：InputType.Normal<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default type(value: InputType | undefined): this;
  /**
   * 设置自动填充类型。
   *
   * @param { ContentType | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default contentType(value: ContentType | undefined): this;

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
   * @param { boolean | undefined } enable - 是否开启选中文本实体识别。<br/>true：开启识别，false：关闭识别。默认值为：true。<br/>值为undefined时，按默认值处
   *     理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default enableSelectedDataDetector(enable: boolean | undefined): this;

  /**
   * 设置placeholder文本颜色。
   *
   * @param { ResourceColor | undefined } value - placeholder文本颜色。<br/>默认值：跟随主题。<br/>Wearable设备上默认值为：'#99ffffff'<br/>取
   *     值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default placeholderColor(value: ResourceColor | undefined): this;
  /**
   * 设置文本超长时的显示方式。仅在
   * [TextInputStyle](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputstyle9枚举说明)值为内
   * 联模式的编辑态、非编辑态下支持。
   *
   * 文本截断是按字进行。例如，英文以单词为最小单位进行截断，若需要以字母为单位进行截断，可将wordBreak属性设置为WordBreak.BREAK_ALL。
   *
   * 当overflow设置为TextOverflow.None时，效果与TextOverflow.Clip相同。
   *
   * @param { TextOverflow | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textOverflow(value: TextOverflow | undefined): this;
  /**
   * 设置首行文本缩进。
   *
   * @param { Dimension | undefined } value - 首行文本缩进。<br/>默认值：0 <br/>单位：
   *     [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) <br/>取值范围：大于等于0。设置负数时，按默认值处理。<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { TextInputAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textIndent(value: Dimension | undefined): this;
  /**
   * 设置placeholder文本样式，包括字体大小、字体粗细、字体族、字体风格。
   *
   * @param { Font | undefined } [value]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default placeholderFont(value?: Font | undefined): this;
  /**
   * 设置输入法回车键类型。
   *
   * @param { EnterKeyType | undefined } value - 输入法回车键类型。<br/>默认值：EnterKeyType.Done<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enterKeyType(value: EnterKeyType | undefined): this;
  /**
   * 设置输入框光标颜色。
   *
   * @param { ResourceColor | undefined } value - 输入框光标颜色。<br/>默认值：'#007DFF'<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default caretColor(value: ResourceColor | undefined): this;
  /**
   * 输入状态变化时，触发该回调。有光标时为编辑态，无光标时为非编辑态。取值为undefined时，不使用回调函数。
   *
   * @param { Callback<boolean> | undefined } callback
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onEditChange(callback: Callback<boolean> | undefined): this;
  /**
   * 按下输入法回车键触发该回调。
   *
   * 非TV设备按下回车键时输入框默认会失焦且收起键盘，可在OnSubmitCallback回调中配置是否收起键盘，参考
   * [示例2（设置下划线）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例2设置下划线)。
   *
   * @param { OnSubmitCallback | undefined } callback - 提交回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSubmit(callback: OnSubmitCallback | undefined): this;
  /**
   * 输入内容发生变化时，触发该回调。
   *
   * 在本回调中，若执行了光标操作，需要开发者在预上屏场景下依据previewText参数调整光标逻辑，以适应预上屏场景。
   *
   * @param { EditableTextOnChangeCallback | undefined } callback
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(callback: EditableTextOnChangeCallback | undefined): this;
  /**
   * 文本选择的位置或编辑状态下光标位置发生变化时，触发该回调。
   *
   * @param { OnTextSelectionChangeCallback | undefined } callback - 文本选择变化回调或光标位置变化回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onTextSelectionChange(callback: OnTextSelectionChangeCallback | undefined): this;
  /**
   * 文本内容滚动时，触发该回调。
   *
   * @param { OnContentScrollCallback | undefined } callback - 文本内容滚动回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentScroll(callback: OnContentScrollCallback | undefined): this;
  /**
   * 设置文本的最大输入字符数。
   *
   * @param { int | undefined } value - 文本的最大输入字符数。<br/>默认值：Infinity，可以无限输入。<br/>**说明：** <br/>当不设置该属性或设置异常值时，取默认值，设置小数
   *     时，取整数部分，设置值超过2^31-1时，可能导致异常行为。<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxLength(value: int | undefined): this;
  /**
   * 设置字体颜色。
   *
   * @param { ResourceColor | undefined } value - 字体颜色。<br/>Wearable设备上默认值为：'#dbffffff'<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontColor(value: ResourceColor | undefined): this;
  /**
   * 设置字体大小。
   *
   * @param { Length | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontSize(value: Length | undefined): this;
  /**
   * 设置字体样式。
   *
   * @param { FontStyle | undefined } value - 字体样式。<br/>默认值：FontStyle.Normal<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontStyle(value: FontStyle | undefined): this;
  /**
   * 设置文本的字体粗细，设置过大可能会在不同字体下有截断。
   *
   * @param { int | FontWeight | ResourceStr | undefined } value - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字
   *     体越粗。string类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。
   *     <br/>默认值：FontWeight.Normal
   *     <br>从API version 20开始，支持Resource类型。<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontWeight(value: int | FontWeight | ResourceStr | undefined): this;
  /**
   * 设置字体列表。
   *
   * @param { ResourceStr | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontFamily(value: ResourceStr | undefined): this;
  /**
   * 通过正则表达式设置输入过滤器。匹配表达式的输入允许显示，不匹配的输入将被过滤。
   *
   * 单字符输入场景仅支持单字符匹配，多字符输入场景支持字符串匹配，例如粘贴。
   *
   * 从API version 11开始，设置inputFilter且输入的字符不为空字符，会导致[type]{@link type}接口附带的文本过滤效果失效。
   *
   * @param { ResourceStr | undefined } value
   * @param { Callback<string> | undefined } [error]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default inputFilter(value: ResourceStr | undefined, error?: Callback<string> | undefined): this;
  /**
   * 进行复制操作时，触发该回调。
   *
   * @param { Callback<string> | undefined } callback - 复制回调，其返回值为复制的文本内容。<br/>取值为undefined时，不使用回调函数。
   * @returns { TextInputAttribute }
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
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCopy(callback: Callback<string, boolean> | undefined): this;
  /**
   * 进行剪切操作时，触发该回调。
   *
   * @param { Callback<string> | undefined } callback
   * @returns { TextInputAttribute }
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
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCut(callback: Callback<string, boolean> | undefined): this;
  /**
   * 进行粘贴操作时，触发该回调。
   *
   * @param { OnPasteCallback | undefined } callback - Executed when a paste operation is performed.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onPaste(callback: OnPasteCallback | undefined): this;
  /**
   * 设置输入的文本是否可复制。设置CopyOptions.None时，只支持粘贴和全选。
   *
   * 设置CopyOptions.None时，不允许拖拽。
   *
   * @param { CopyOptions | undefined } value - 输入的文本是否可复制。<br/>默认值：CopyOptions.LocalDevice，支持设备内复制。<br/>取值为undefined
   *     时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default copyOption(value: CopyOptions | undefined): this;
  /**
   * 设置当密码输入模式时，输入框末尾的图标是否显示。
   *
   * @param { boolean | undefined } value - 密码输入模式时，输入框末尾的图标是否显示。<br/>true表示显示，false表示不显示。<br/>默认值：TV设备为false，其他设备为
   *     true。<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showPasswordIcon(value: boolean | undefined): this;
  /**
   * 设置文本在输入框中的水平对齐方式。
   *
   * 支持TextAlign.Start、TextAlign.Center和TextAlign.End。TextAlign.JUSTIFY的对齐方式按照TextAlign.Start处理。
   *
   * 可通过[align](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#align)属性控制文本段落在垂直方向上的位置。此组
   * 件中不可使用align属性控制文本段落在水平方向上的位置。
   *
   * - Alignment.TopStart、Alignment.Top、Alignment.TopEnd：内容顶部对齐。
   * - Alignment.Start、Alignment.Center、Alignment.End：内容垂直居中。
   * - Alignment.BottomStart、Alignment.Bottom、Alignment.BottomEnd：内容底部对齐。
   *
   * @param { TextAlign | undefined } value - 文本在输入框中的水平对齐方式。<br/>默认值：TextAlign.Start<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textAlign(value: TextAlign | undefined): this;
  /**
   * 设置输入框为默认风格或内联输入风格，内联输入风格只支持InputType.Normal类型。
   *
   * 输入框类型介绍请参考[type]{@link type}接口。
   *
   * @param { TextInputStyle | TextContentStyle | undefined } value - 输入框为默认风格或内联输入风格。<br/>默认值：TextInputStyle.Default<
   *     br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default style(value: TextInputStyle | TextContentStyle | undefined): this;
  /**
   * 设置光标风格。
   *
   * @param { CaretStyle | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default caretStyle(value: CaretStyle | undefined): this;
  /**
   * 设置文本选中底板颜色。如果未设置不透明度，默认为20%不透明度。
   *
   * @param { ResourceColor | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedBackgroundColor(value: ResourceColor | undefined): this;
  /**
   * 设置光标位置。
   *
   * @param { int | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default caretPosition(value: int | undefined): this;
  /**
   * 设置TextInput通过点击以外的方式获焦时，是否主动拉起软键盘。
   *
   * @param { boolean | undefined } value - 通过点击以外的方式获焦时，是否主动拉起软键盘。<br/>true表示主动拉起软键盘，false表示不主动拉起。<br/>默认值：TV设备为
   *     false，其他设备为true。<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableKeyboardOnFocus(value: boolean | undefined): this;
  /**
   * 设置当密码输入模式时，输入框末尾的图标。
   *
   * 支持jpg、png、bmp、heic和webp类型的图片格式。
   *
   * @param { PasswordIcon | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default passwordIcon(value: PasswordIcon | undefined): this;
  /**
   * 设置错误状态下提示的错误文本或者不显示错误状态。
   *
   * 当参数类型为ResourceStr并且输入内容不符合定义规范时，提示错误文本，当提示错误单行文本超长时，末尾以省略号显示。当参数类型为undefined时，不显示错误状态。请参考
   * [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例2设置下划线)。
   *
   * @param { ResourceStr | undefined } [value]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showError(value?: ResourceStr | undefined): this;
  /**
   * 设置控件作为文本框单位。需搭配[showUnderline]{@link showUnderline}使用，当showUnderline为true时生效。
   *
   * @param { CustomBuilder | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showUnit(value: CustomBuilder | undefined): this;
  /**
   * 设置是否开启下划线。
   *
   * @param { boolean | undefined } value - 是否开启下划线。<br/>true表示开启，false表示不开启。<br/>默认值：false<br/>下划线默认颜色为'#33182431'，默认
   *     粗细为1px，文本框尺寸48vp，下划线只支持InputType.Normal类型。<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showUnderline(value: boolean | undefined): this;
  /**
   * 设置下划线颜色。
   *
   * 开启输入框下划线[showUnderline]{@link showUnderline}时，支持配置下划线颜色。
   *
   * @param { ResourceColor | UnderlineColor | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default underlineColor(value: ResourceColor | UnderlineColor | undefined): this;
  /**
   * 设置是否隐藏系统文本选择菜单。
   *
   * @param { boolean | undefined } value - 是否隐藏系统文本选择菜单。<br />设置为true时，单击输入框光标、长按输入框、双击输入框、三击输入框或者右键输入框，隐藏系统文本选择菜单。<
   *     br />设置为false时，显示系统文本选择菜单。<br />默认值：false<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectionMenuHidden(value: boolean | undefined): this;
  /**
   * 设置内联输入风格编辑态时滚动条的显示模式。
   *
   * @param { BarState | undefined } value - 内联输入风格编辑态时滚动条的显示模式。<br/>默认值：BarState.Auto<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barState(value: BarState | undefined): this;
  /**
   * 设置内联输入风格编辑态时文本可显示的最大行数。
   *
   * @param { int | undefined } value - 内联输入风格编辑态时文本可显示的最大行数。<br/>默认值：3 <br/>取值范围：(0, UINT32_MAX]<br/>取值为undefined时，按默
   *     认值处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxLines(value: int | undefined): this;
  /**
   * 设置文本断行规则。该属性在组件设置
   * [TextInputStyle](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputstyle9枚举说明)的内联
   * 模式时样式生效，但对placeholder文本无效。
   *
   * @param { WordBreak | undefined } value - 内联输入风格编辑态时断行规则。 <br />默认值：WordBreak.BREAK_WORD<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default wordBreak(value: WordBreak | undefined): this;
  /**
   * 设置折行规则。该属性在wordBreak不等于breakAll的时候生效，不支持连字符。
   *
   * @param { LineBreakStrategy | undefined } strategy - 文本的折行规则。 <br />默认值：LineBreakStrategy.GREEDY <br/>**说明：**<br/>
   *     仅设置
   *     [TextInputStyle](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputstyle9枚举说明)
   *     的内联模式时该属性生效。<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute } The attribute of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
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
   * 默认在输入控件失去焦点时，关闭自定义键盘，开发者也可以通过[TextInputController]{@link TextInputController}.
   * [stopEditing]{@link TextInputController#stopEditing}方法控制键盘关闭。
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
   * @param { CustomBuilder | ComponentContentBase | undefined } value - 自定义键盘。设定值为undefined时，关闭自定义键盘。
   * @param { KeyboardOptions } [options] - 设置自定义键盘是否支持避让功能。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customKeyboard(value: CustomBuilder | ComponentContentBase | undefined, options?: KeyboardOptions): this;

  /**
   * 设置当通过InputCounterOptions输入的字符数超过阈值时显示计数器。未调用showCounter接口时，默认不显示计数器。
   *
   * 参数value为true时，才能设置options，文本框开启计数下标功能，需要配合[maxLength]{@link maxLength}（设置最大字符限制）一起使用。字符计数器显示的效果是当前输入字符数/最大可输入字符数。
   *
   *
   * 当输入字符数大于最大字符数乘百分比值时，显示字符计数器。如果用户设置计数器时不设置InputCounterOptions，那么当前输入字符数超过最大字符数时，边框和计数器下标将变为红色。用户同时设置参数value为true和
   * [InputCounterOptions](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#inputcounteroptions11对象说明)，
   * 当thresholdPercentage数值在有效区间内，且输入字符数超过最大字符数时，边框和计数器下标将变为红色，框体抖动。highlightBorder设置为false，则不显示红色边框，计数器默认显示红色，框体抖动。
   *
   * [TextInputStyle](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputstyle9枚举说明)的内联
   * 模式、[密码模式](docroot://ui/arkts-common-components-text-input.md#密码模式)下字符计数器不显示。
   *
   * [示例5（设置计数器）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例5设置计数器)展示了设置showCounter的效
   * 果。
   *
   * @param { boolean | undefined } value - 是否显示计数器。<br/>true表示显示计数器，false表示不显示。<br/>取值为undefined时，不显示计数器。
   * @param { InputCounterOptions | undefined } [options] - 计数器的配置项。<br/>取值为undefined时，按
   *     [InputCounterOptions](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md#inputcounteroptions11对象说明)
   *     中的默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showCounter(value: boolean | undefined, options?: InputCounterOptions | undefined): this;
  /**
   * 设置右侧清除按钮样式。不支持内联模式。
   *
   * @param { CancelButtonOptions | undefined } iconOptions - 右侧清除按钮样式选项。<br />默认值：<br />{<br />style:
   *     CancelButtonStyle.INPUT<br />}<br/>Wearable设备上默认值为：28vp <br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cancelButton(iconOptions: CancelButtonOptions | undefined): this;
  /**
   * 设置右侧清除按钮样式，仅支持symbol图标。不支持
   * [TextInputStyle](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputstyle9枚举说明)的内联
   * 模式。示例请参考
   * [示例15（设置symbol类型清除按钮）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例15设置symbol类型清除按钮)。
   *
   * @param { CancelButtonSymbolOptions | undefined } symbolOptions - 右侧清除按钮样式。<br />默认值：<br />{<br />style:
   *     CancelButtonStyle.INPUT<br />}<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cancelButton(symbolOptions: CancelButtonSymbolOptions | undefined): this;
  /**
   * 设置初始状态时，是否全选文本。不支持
   * [TextInputStyle](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputstyle9枚举说明)的内联
   * 模式。
   *
   * @param { boolean | undefined } value - 是否全选文本。<br/>true表示会全选文本，false表示不会全选文本。<br />默认值：false<br/>取值为undefined时，按默
   *     认值处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectAll(value: boolean | undefined): this;
  /**
   * 设置文本最小显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * 需配合[maxFontSize]{@link maxFontSize}以及[maxLines]{@link maxLines}(组件设置为内联输入风格且编辑态时使用)或布局大小限制使用，单独设置不生效。
   *
   * 自适应字号生效时，fontSize设置不生效。
   *
   * minFontSize小于或等于0时，自适应字号不生效，此时按照[fontSize]{@link fontSize}属性的值生效，未设置时按照其默认值生效。
   *
   * @param { double | string | Resource | undefined } value -  文本最小显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)<br/>取值为undefined时，不生效。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minFontSize(value: double | string | Resource | undefined): this;
  /**
   * 设置文本最大显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * 需配合[minFontSize]{@link minFontSize}以及[maxLines]{@link maxLines}(组件设置为内联输入风格且编辑态时使用)或布局大小限制使用，单独设置不生效。
   *
   * 自适应字号生效时，fontSize设置不生效。
   *
   * maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照[fontSize]{@link fontSize}属性的值生效，未设置时按照其默认值生效。
   *
   * @param { double | string | Resource | undefined } value -  文本最大显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)<br/>取值为undefined时，不生效。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxFontSize(value: double | string | Resource | undefined): this;
  /**
   * 设置文本最小的字体缩放倍数。
   *
   * @param { double | Resource | undefined } scale
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minFontScale(scale: double | Resource | undefined): this;
  /**
   * 设置文本最大的字体缩放倍数。
   *
   * @param { double | Resource | undefined } scale
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxFontScale(scale: double | Resource | undefined): this;
  /**
   * 组件设置为内联输入风格时，设置文本自适应高度的方式。
   *
   * 当设置为TextHeightAdaptivePolicy.MAX_LINES_FIRST时，优先使用[maxLines]{@link maxLines}属性来调整文本高度。如果使用maxLines属性的布局大小超过了布局约束，
   * 则尝试在[minFontSize]{@link minFontSize}和[maxFontSize]{@link maxFontSize}的范围内缩小字体以显示更多文本。
   *
   * 当设置为TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST时，优先使用minFontSize属性来调整文本高度。如果使用minFontSize属性可以将文本布局在一行中，则尝试在
   * minFontSize和maxFontSize的范围内增大字体并使用最大限度的字体大小。
   *
   * 当设置为TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST时，与TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST效果一样。
   *
   * 组件设置为非内联输入风格时，设置文本自适应高度(TextHeightAdaptivePolicy)的三种方式效果一样，即在minFontSize和maxFontSize的范围内缩小字体以显示更多文本。
   *
   * > **说明：**
   * >
   * > 组件设置为内联输入风格，编辑态与非编辑态存在字体大小不一致情况。
   *
   * @param { TextHeightAdaptivePolicy | undefined } value - 文本自适应高度的方式。<br/>默认值：
   *     TextHeightAdaptivePolicy.MAX_LINES_FIRST<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
  /**
   * 设置是否启用自动填充。
   *
   * @param { boolean | undefined } value - 是否启用自动填充。<br/>true表示启用，false表示不启用。<br/>默认值：true<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableAutoFill(value: boolean | undefined): this;
  /**
   * 设置文本装饰线类型样式及其颜色。
   *
   * @param { TextDecorationOptions | undefined } value - 文本装饰线对象。<br />默认值：{<br/> type: TextDecorationType.None,<br/>
   *      color: Color.Black,<br/> style: TextDecorationStyle.SOLID,<br/> thicknessScale: 1.0<br/>}<br/>取值为undefined时，
   *     按默认值处理。
   * @returns { TextInputAttribute }
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
   * @param { double | string | Resource | undefined } value -  文本字符间距。<br/>默认值：0<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default letterSpacing(value: double | string | Resource | undefined): this;
  /**
   * 设置文本的行高。
   *
   * 设置值不大于0时，不限制文本行高，自适应字体大小，number类型时单位为fp。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * > **说明：**
   * >
   * > - 特殊字符字体高度远超出同行的其他字符高度时，文本框出现截断、遮挡、内容相对位置发生变化等不符合预期的显示异常，需要开发者调整组件高度、行高等属性，修改对应的页面布局。
   * >
   * > - 设置[密码模式](docroot://ui/arkts-common-components-text-input.md#密码模式)时，通过该接口设置行高[lineHeight]{@link lineHeight}不生
   * > 效。
   *
   * @param { double | string | Resource | undefined } value
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineHeight(value: double | string | Resource | undefined): this;
  /**
   * 定义生成密码的规则。在触发自动填充时，所设置的密码规则会透传给密码保险箱，用于新密码的生成。<!--RP1--><!--RP1End-->
   *
   * @param { string | undefined } value - 定义生成密码的规则。<br/>取值为undefined时，不生效。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default passwordRules(value: string | undefined): this;
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
   * @param { string | undefined } value - 文字特性效果。<br/>默认值：''<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontFeature(value: string | undefined): this;
  /**
   * 设置密码的显隐状态。
   *
   * 当[InputType](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#inputtype枚举说明)设置为Password、
   * NEW_PASSWORD和NUMBER_PASSWORD模式时，密码保护功能才能生效。非密码输入模式则不会触发该功能。
   *
   * [密码模式](docroot://ui/arkts-common-components-text-input.md#密码模式)时，由于输入框后端的状态和前端应用侧的状态管理变量会不一致，可能导致末尾图标的状态异常。建议在
   * [onSecurityStateChange]{@link onSecurityStateChange}上增加状态同步。参考
   * [示例1（设置与获取光标位置）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例1设置与获取光标位置)。
   *
   * @param { boolean | undefined } visible - 是否显示密码。<br/>true表示会显示密码，false表示不会显示密码。<br/>默认值：false<br/>取值为undefined时，按
   *     默认值处理。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showPassword(visible: boolean | undefined): this;
  /**
   * 密码显隐状态切换时，触发该回调。
   *
   * @param { Callback<boolean> | undefined } callback - 回调函数。<br/>true表示密码显示；false表示密码隐藏。<br/>取值为undefined时，不使用回调函数。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSecurityStateChange(callback: Callback<boolean> | undefined): this;
  /**
   * 在将要输入时，触发该回调。
   *
   * @param { Callback<InsertValue, boolean> | undefined } callback - 在将要输入时调用的回调。<br/>在返回true时，表示正常插入，返回false时，表示不插入。
   *     <br/>在预上屏和候选词操作时，该回调不触发。<br/>仅支持系统输入法输入的场景。<br/>取值为undefined时，不使用回调函数。
   * @returns { TextInputAttribute }
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
   * @returns { TextInputAttribute }
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
   * @returns { TextInputAttribute }
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
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidDelete(callback: Callback<DeleteValue> | undefined): this;
  /**
   * 在输入框将要绑定输入法前触发该回调。
   *
   * <!--Del-->
   *
   * 在输入框将要绑定输入法前，可以通过`UIContext`的系统接口
   * [setKeyboardAppearanceConfig](docroot://reference/apis-arkui/js-apis-arkui-UIContext-sys.md#setkeyboardappearanceconfig20)
   * 设置键盘的样式。<!--DelEnd-->
   *
   * 从API version 22开始，调用[IMEClient](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#imeclient20对象说明)的
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
   * @param { Callback<IMEClient> | undefined } callback - 在输入框将要绑定输入法前触发该回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { TextInputAttribute }
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
   * @returns { TextInputAttribute }
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
   * @param { boolean | undefined } enable - 是否开启输入预上屏。<br/>true表示开启输入预上屏，false表示不开启输入预上屏。<br/>默认值：true<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { TextInputAttribute }
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
   * @param { boolean | undefined } isEnabled - 是否开启触控反馈。<br/>true表示开启触控反馈，false表示不开启触控反馈。<br/>默认值：true<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableHapticFeedback(isEnabled: boolean | undefined): this;
  /**
   * 设置自动大小写模式的文本模式，只提供接口能力，具体实现以输入法应用为主。
   *
   * @param { AutoCapitalizationMode | undefined } mode - 自动大小写模式，默认状态无效。<br/>值为undefined时为默认状态无效。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoCapitalizationMode(mode: AutoCapitalizationMode | undefined): this;
  /**
   * 设置文本在行内垂直居中，将行间距平分至行的顶部与底部。
   *
   * @param { boolean | undefined } halfLeading
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default halfLeading(halfLeading: boolean | undefined): this;
  /**
   * 设置省略位置。ellipsisMode属性仅在
   * [TextInputStyle](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputstyle9枚举说明)的内联
   * 模式下生效，需要配合overflow设置为TextOverflow.Ellipsis使用，单独设置ellipsisMode属性不生效。
   *
   * 非编辑态时正常生效，编辑态时EllipsisMode.START和EllipsisMode.CENTER仅在maxLines设置为1时生效，EllipsisMode.END、
   * EllipsisMode.MULTILINE_START和EllipsisMode.MULTILINE_CENTER正常生效。
   *
   * @param { EllipsisMode | undefined } mode - 省略位置。 <br />默认值：EllipsisMode.END<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute } The attribute of TextInput.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default ellipsisMode(mode: EllipsisMode | undefined): this;
  /**
     * 设置语音按键选项。
     *
   * @param { VoiceButtonOptions | undefined } options - 语音按键的选项。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default voiceButton(options: VoiceButtonOptions | undefined): this;
  /**
   * 设置是否阻止返回键传递。
   *
   * @param { boolean | undefined } isStopped - 是否阻止返回键。<br/>true表示阻止，false表示不阻止。<br/>默认值：true。异常值取默认值。<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
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
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillChange(callback: Callback<EditableTextChangeValue, boolean> | undefined): this;
  /**
   * 设置输入框拉起的键盘样式，需要输入法适配后生效。具体参考[输入法应用沉浸模式](docroot://inputmethod/inputmethod-immersive-mode-guide.md)。
   *
   * @param { KeyboardAppearance | undefined } appearance - 键盘样式。<br/>默认值：KeyboardAppearance.NONE_IMMERSIVE<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
  /**
   * 设置文本描边的颜色。
   *
   * @param { ResourceColor | undefined } color - 描边颜色。<br/>默认值为字体颜色，设置异常值或undefined时取默认值。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default strokeColor(color: ResourceColor | undefined): this;
  /**
   * 设置是否开启中文与西文的自动间距。
   *
   * @param { boolean | undefined } enabled - 是否开启中文与西文的自动间距。<br/>true为开启自动间距，false为不开启。<br />默认值：false<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default enableAutoSpacing(enabled: boolean | undefined): this;
  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<TextInputAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
   * @returns { TextInputAttribute } the attribute of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<TextInputAttribute> | AttributeModifier<CommonMethod> | undefined): this;
  /**
   * 设置文本描边的宽度。
   *
   * @param { LengthMetrics | undefined } width - 文本描边的宽度。如果LengthMetrics的unit值是PERCENT，当前设置不生效，按默认值处理。<br/>若设置值小于0，显示
   *     实心字；若大于0，显示空心字。<br/>默认值为0，不做描边处理。<br/>值为undefined时，不做描边处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default strokeWidth(width: LengthMetrics | undefined): this;
  /**
   * 设置是否启用自动填充动效。
   *
   * @param { boolean | undefined } enabled - 是否启用自动填充动效。<br/>true表示启用，false表示不启用。<br/>默认值：true <br/>**说明：**<br/>启用之后，
   *     仅输入模式[InputType](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#inputtype枚举说明)设置为
   *     Password、NEW_PASSWORD或NUMBER_PASSWORD的输入框在进行自动填充时动效可生效。<br/>取值为undefined时，按默认值处理。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default enableAutoFillAnimation(enabled: boolean | undefined): this;
  /**
   * 设置文本输入框内文本拖拽时的背板样式。
   *
   * @param { SelectedDragPreviewStyle | undefined } value - 文本拖拽时的背板样式。<br/>设置为undefined时：背板颜色跟随主题，浅色模式显示白色，深色模式显示黑色。
   * @returns { TextInputAttribute }
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
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textDirection(direction: TextDirection | undefined): this;
  /**
   * 设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。
   *
   * @param { boolean | undefined } include - 是否在首行和尾行增加间距以避免文字截断。<br/>true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。<br/>
   *     undefined表示在首行和尾行不增加间距。
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
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
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
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
   * @param { boolean | undefined } enabled - 是否开启行首标点符号压缩。<br/>true表示开启行首标点符号压缩；false表示不开启行首标点符号压缩；undefined表示不开启。
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default compressLeadingPunctuation(enabled: boolean | undefined): this;
  /**
   * 设置文本排版时是否使能孤字优化。不通过该接口设置，默认不使能孤字优化。
   *
   * 孤字优化通过更高效地处理孤立字符（段落尾行首字符）来改善文本布局。使能后，它会调整换行点以尽可能避免孤立字符。孤字优化特性需在[wordBreak]{@link wordBreak}为非BREAK_ALL并且待排版文本首个
   * [TextStyle](docroot://reference/apis-arkgraphics2d/js-apis-graphics-text.md#textstyle)的
   * [locale](docroot://reference/apis-arkgraphics2d/js-apis-graphics-text.md#textstyle)为“zh-Hans”或“zh-Hant”时生效。
   *
   * @param { boolean | undefined } enabled - 段落最后一行是否使能孤字优化。<br/>true表示使能孤字优化，false表示不使能孤字优化。<br/>值为undefined或null时，不
   *     使能孤字优化。
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 26.0.0 static
   */
  default orphanCharOptimization(enabled: boolean | undefined): this;

  /**
   * 设置文本描边拐角样式。
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - 文本描边拐角样式。<br/>值为undefined时，按照StrokeJoinStyle.MITER_JOIN处
   *     理，请参考[StrokeJoinStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#strokejoinstyle)，文本拐角处表现为锐角。
   * @returns { TextInputAttribute }
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
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default shaderStyle(shader: ShaderStyle | undefined): this;

  /**
   * 设置是否启用行尾标点符号悬挂。不通过该接口设置，默认标点符号不悬挂。
   *
   * @param { boolean | undefined } enabled - 是否启用行尾标点符号悬挂。<br/>true表示启用行尾标点符号悬挂，false表示不启用行尾标点符号悬挂。设置为undefined或null
   *     时，不启用标点符号悬挂。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default punctuationOverflow(enabled: boolean | undefined): this;
}

/**
 * 定义TextInput组件。
 *
 * @param { TextInputOptions } [value]
 * @returns { TextInputAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TextInput(
    value?: TextInputOptions
): TextInputAttribute;
