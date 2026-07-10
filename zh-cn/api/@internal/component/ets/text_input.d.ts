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
 * 单行文本输入框类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum InputType {

  /**
   * 基本输入模式，无特殊限制。
   * 
   * 内联输入风格只支持InputType.Normal类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal = 0,

  /**
   * 纯数字输入模式。
   * 
   * 不支持负数、小数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Number = 1,

  /**
   * 电话号码输入模式。
   * 
   * 支持输入数字、空格、+ 、-、*、#、(、)，长度不限。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  PhoneNumber = 2,

  /**
   * 邮箱地址输入模式。
   * 
   * 支持数字、字母、下划线、小数点、!、#、$、%、&、'、"、*、+、-、/、=、?、^、`、{、|、}、~，以及@字符（只能存在一个@字符）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Email = 3,

  /**
   * 密码输入模式。
   * 
   * 默认输入文字短暂显示后变成圆点。从API version 12开始，PC/2in1设备上输入文字直接显示为圆点。
   * 
   * TV设备上输入框末尾默认不显示小眼睛图标，其他设备输入框末尾默认显示小眼睛图标。
   * 
   * 密码输入模式中，[decoration]{@link TextInputAttribute#decoration}、[showUnderline]{@link TextInputAttribute#showUnderline}、
   * [lineHeight]{@link TextInputAttribute#lineHeight}不生效。
   * 
   * 在已启用密码保险箱的情况下，支持用户名、密码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Password = 4,

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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NUMBER_PASSWORD = 8,

  /**
   * ScreenLock Password entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  SCREEN_LOCK_PASSWORD = 9,

  /**
   * 用户名输入模式，无特殊限制。
   * 
   * 在已启用密码保险箱的情况下，支持用户名、密码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
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
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NEW_PASSWORD = 11,

  /**
   * 带小数点的数字输入模式。
   * 
   * 支持数字，小数点（只能存在一个小数点）。不支持负数小数，负数小数的数字输入模式请使用inputFilter实现。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
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
  ONE_TIME_CODE = 14,
}

/**
 * 自动填充类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ContentType {

  /**
   * 【用户名】在已启用密码保险箱的情况下，支持用户名的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  USER_NAME = 0,

  /**
   * 【密码】在已启用密码保险箱的情况下，支持密码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PASSWORD = 1,

  /**
   * 【新密码】在已启用密码保险箱的情况下，支持自动生成新密码。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  NEW_PASSWORD = 2,

  /**
   * 【详细地址】在已启用情景化自动填充的情况下，支持详细地址的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  FULL_STREET_ADDRESS = 3,

  /**
   * 【门牌号】在已启用情景化自动填充的情况下，支持门牌号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  HOUSE_NUMBER = 4,

  /**
   * 【区/县】在已启用情景化自动填充的情况下，支持区/县的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  DISTRICT_ADDRESS = 5,

  /**
   * 【市】在已启用情景化自动填充的情况下，支持市的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  CITY_ADDRESS = 6,

  /**
   * 【省】在已启用情景化自动填充的情况下，支持省的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PROVINCE_ADDRESS = 7,

  /**
   * 【国家】在已启用情景化自动填充的情况下，支持国家的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  COUNTRY_ADDRESS = 8,

  /**
   * 【姓名】在已启用情景化自动填充的情况下，支持姓名的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PERSON_FULL_NAME = 9,

  /**
   * 【姓氏】在已启用情景化自动填充的情况下，支持姓氏的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PERSON_LAST_NAME = 10,

  /**
   * 【名字】在已启用情景化自动填充的情况下，支持名字的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PERSON_FIRST_NAME = 11,

  /**
   * 【手机号码】在已启用情景化自动填充的情况下，支持手机号码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PHONE_NUMBER = 12,

  /**
   * 【国家代码】在已启用情景化自动填充的情况下，支持国家代码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PHONE_COUNTRY_CODE = 13,

  /**
   * 【包含国家代码的手机号码】在已启用情景化自动填充的情况下，支持包含国家代码的手机号码的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  FULL_PHONE_NUMBER = 14,

  /**
   * 【邮箱地址】在已启用情景化自动填充的情况下，支持邮箱地址的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  EMAIL_ADDRESS = 15,

  /**
   * 【银行卡号】在已启用情景化自动填充的情况下，支持银行卡号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  BANK_CARD_NUMBER = 16,

  /**
   * 【身份证号】在已启用情景化自动填充的情况下，支持身份证号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ID_CARD_NUMBER = 17,

  /**
   * 【昵称】在已启用情景化自动填充的情况下，支持昵称的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  NICKNAME = 23,

  /**
   * 【无街道地址】在已启用情景化自动填充的情况下，支持无街道地址的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  DETAIL_INFO_WITHOUT_STREET = 24,

  /**
   * 【标准地址】在已启用情景化自动填充的情况下，支持标准地址的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  FORMAT_ADDRESS = 25,

  /**
   * 【护照号】在已启用情景化自动填充的情况下，支持护照号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  PASSPORT_NUMBER = 26,

  /**
   * 【护照有效期】在已启用情景化自动填充的情况下，支持护照有效期的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  VALIDITY = 27,

  /**
   * 【护照签发地】在已启用情景化自动填充的情况下，支持护照签发地的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ISSUE_AT = 28,

  /**
   * 【发票抬头名称】在已启用情景化自动填充的情况下，支持发票抬头名称的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ORGANIZATION = 29,

  /**
   * 【税号】在已启用情景化自动填充的情况下，支持税号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  TAX_ID = 30,

  /**
   * 【所在地区】在已启用情景化自动填充的情况下，支持所在地区的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ADDRESS_CITY_AND_STATE = 31,

  /**
   * 【航班号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  FLIGHT_NUMBER = 32,

  /**
   * 【驾驶证号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_NUMBER = 33,

  /**
   * 【驾驶证档案编号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_FILE_NUMBER = 34,

  /**
   * 【车牌号】在已启用情景化自动填充的情况下，支持车牌号的自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_PLATE = 35,

  /**
   * 【行驶证发动机号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ENGINE_NUMBER = 36,

  /**
   * 【车牌识别号】暂不支持自动保存和自动填充。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_CHASSIS_NUMBER = 37
}

/**
 * 输入法回车键类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum EnterKeyType {

  /**
   * 显示为开始样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Go = 2,

  /**
   * 显示为搜索样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Search = 3,

  /**
   * 显示为发送样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Send = 4,

  /**
   * 显示为下一步样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Next = 5,

  /**
   * 显示为完成样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Done = 6,

  /**
   * 显示为上一步样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PREVIOUS = 7,

  /**
   * 显示为换行样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NEW_LINE = 8
}

/**
 * 定义下划线颜色宽度属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface UnderlineColor {

  /**
   * 键入时下划线颜色。不填写、undefined、null、无效值时恢复默认。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  typing?: ResourceColor | undefined;

  /**
   * 非特殊状态时下划线颜色。不填写、undefined、null、无效值时恢复默认。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  normal?: ResourceColor | undefined;

  /**
   * 错误时下划线颜色。不填写、undefined、null、无效值时恢复默认。此选项会修改showCounter属性中达到最大字符数时的颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  error?: ResourceColor | undefined;

  /**
   * 禁用时下划线颜色。不填写、undefined、null、无效值时恢复默认。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  disable?: ResourceColor | undefined;
}

/**
 * 定义用户提交事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface SubmitEvent {

  /**
   * 用户自定义输入框编辑状态，调用时保持编辑态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  keepEditableState(): void;

  /**
   * 输入框文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  text: string;
}

/**
 * TextInput组件的控制器继承自[TextContentControllerBase]{@link TextContentControllerBase}，涉及的接口有
 * [getTextContentRect]{@link TextContentControllerBase#getTextContentRect}、
 * [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount}、
 * [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}、[addText]{@link TextContentControllerBase#addText}、
 * [deleteText]{@link TextContentControllerBase#deleteText}、[getSelection]{@link TextContentControllerBase#getSelection}
 * 、[clearPreviewText]{@link TextContentControllerBase#clearPreviewText}、
 * [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder}、
 * [deleteBackward]{@link TextContentControllerBase#deleteBackward}<!--Del-->以及系统接口
 * [getText]{@link TextContentControllerBase#getText}<!--DelEnd-->。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full [since 10]
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextInputController extends TextContentControllerBase {

  /**
   * TextInputController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 设置输入光标的位置。当取值小于0时，取0，大于文本长度时，显示在文本末尾。
   *
   * @param { number } value - 从字符串开始到光标所在位置的字符长度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  caretPosition(value: number): void;

  /**
   * 设置文本选择区域并高亮显示。
   *
   * @param { number } selectionStart - 文本选择区域起始位置，文本框中文字的起始位置为0。
   * @param { number } selectionEnd - 文本选择区域结束位置。当selectionEnd<0时，按照0处理；当selectionEnd大于文本长度时，按照文本长度处理。
   * @param { SelectionOptions } [options] - 选中文字时的配置。<br />默认值：MenuPolicy.DEFAULT<br/>从API version 12开始，该接口中的options参数支
   *     持在原子化服务中使用。 [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

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
}

/**
 * TextInput初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TextInputOptions {

  /**
   * 设置无输入时的提示文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholder?: ResourceStr;

  /**
   * 设置输入框当前的文本内容。</br>建议通过onChange事件将状态变量与文本实时绑定，</br>避免组件刷新时TextInput中的文本内容异常。
   * 
   * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   * 
   * 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  text?: ResourceStr;

  /**
   * 设置TextInput控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: TextInputController;
}

/**
 * 文本输入样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum TextInputStyle {

  /**
   * 默认风格，光标宽1.5vp，光标高度与文本选中底板高度和字体大小相关。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Default = 0,

  /**
   * 内联输入风格。文本选中底板高度与输入框高度相同。
   * 
   * 内联输入是在有明显的编辑态/非编辑态的区分场景下使用，例如：文件列表视图中的重命名。
   * 
   * 不支持showError属性。
   * 
   * [内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)下，不支持拖入文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Inline = 1,
}

/**
 * 单行文本输入框组件。
 * 
 * > **说明：**
 * 
 * > 该组件仅支持单文本样式，若需实现富文本样式，建议使用[RichEditor]{@link rich_editor}组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface TextInputInterface {

  /**
   *
   * 定义单行文本输入组件构造函数。
   *
   * @param { TextInputOptions } value - TextInput组件参数。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: TextInputOptions): TextInputAttribute;
}

/**
 * PasswordIcon对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface PasswordIcon {

  /**
   * 密码输入模式时，能够切换密码可见时显示的图标。
   * 
   * string格式可用于加载网络图片和本地图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onIconSrc?: string | Resource;

  /**
   * 密码输入模式时，能够切换密码不可见时显示的图标。
   * 
   * string格式可用于加载网络图片和本地图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
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
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;

/**
 * 文本选择变化回调或光标位置变化回调。
 *
 * @param { number } selectionStart - 所选文本的起始位置，文字的起始位置为0。
 * @param { number } selectionEnd - 所选文本的结束位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;

/**
 * 文本内容滚动回调。
 *
 * @param { number } totalOffsetX - 文本在内容区的横坐标偏移，单位px。
 * @param { number } totalOffsetY - 文本在内容区的纵坐标偏移，单位px。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;

/**
 * 粘贴回调。
 *
 * @param { string } content - 粘贴的文本内容。
 * @param { PasteEvent } event - 用户自定义的粘贴事件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnPasteCallback = (content: string, event: PasteEvent) => void;

/**
 * 除支持[通用属性]{@link common}，还支持以下属性：
 * 
 * 除支持[通用事件]{@link common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TextInputAttribute extends CommonMethod<TextInputAttribute> {

  /**
   * 设置输入框类型。
   * 
   * 不同的InputType会拉起对应类型的键盘，同时限制输入。
   *
   * @param { InputType } value - 输入框类型。<br/>默认值：InputType.Normal
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type(value: InputType): TextInputAttribute;

  /**
   * 设置自动填充类型。<!--RP7--><!--RP7End-->
   *
   * @param { ContentType } value - 自动填充类型。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  contentType(value: ContentType): TextInputAttribute;

  /**
   * 设置是否对选中文本进行实体识别。该接口依赖设备底层应具有文本识别能力，否则设置不会生效。
   * 
   * 当enableSelectedDataDetector设置为true时，默认识别所有类型的实体。
   * 
   * 需要[CopyOptions]{@link CopyOptions}为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时，本功能生效。
   *
   * @param { boolean | undefined } enable - 开启选中词文本识别。<br/>true：开启识别，false：关闭识别。默认值为：true。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): TextInputAttribute;

  /**
   * 设置placeholder文本颜色。
   *
   * @param { ResourceColor } value - placeholder文本颜色。<br/>默认值：跟随主题。<br/>Wearable设备上默认值为：'#99ffffff'
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderColor(value: ResourceColor): TextInputAttribute;

  /**
   * 设置文本超长时的显示方式。仅在[内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)的编辑态、非编辑态下支持。
   * 
   * 文本截断是按字进行。例如，英文以单词为最小单位进行截断，若需要以字母为单位进行截断，可将wordBreak属性设置为WordBreak.BREAK_ALL。
   * 
   * 当overflow设置为TextOverflow.None时，效果与TextOverflow.Clip相同。
   *
   * @param { TextOverflow } value - 文本超长时的显示方式。<br/>[内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)非编辑态
   *     下默认值：TextOverflow.Ellipsis <br/>内联模式编辑态下默认值：TextOverflow.Clip
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textOverflow(value: TextOverflow): TextInputAttribute;

  /**
   * 设置首行文本缩进。
   *
   * @param { Dimension } value - 首行文本缩进。<br/>默认值：0 <br/>单位：
   *     [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) <br/>取值范围：大于等于0。设置负数时，按默认值处理。
   * @returns { TextInputAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent(value: Dimension): TextInputAttribute;

  /**
   * 设置placeholder文本样式，包括字体大小、字体粗细、字体族、字体风格。
   *
   * @param { Font } value - placeholder文本样式。<br/>Wearable设备上默认值为：18fp
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderFont(value?: Font): TextInputAttribute;

  /**
   * 设置输入法回车键类型。
   *
   * @param { EnterKeyType } value - 输入法回车键类型。<br/>默认值：EnterKeyType.Done
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  enterKeyType(value: EnterKeyType): TextInputAttribute;

  /**
   * 设置输入框光标颜色。
   *
   * @param { ResourceColor } value - 输入框光标颜色。<br/>默认值：'#007DFF'
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  caretColor(value: ResourceColor): TextInputAttribute;

  /**
   * 输入状态变化时，触发该回调。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 8开始废弃，建议使用[onEditChange]{@link TextInputAttribute#onEditChange}替代。
   *
   * @param { function } callback - 监听事件的回调函数。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead TextInputAttribute#onEditChange
   */
  onEditChanged(callback: (isEditing: boolean) => void): TextInputAttribute;

  /**
   * 输入状态变化时，触发该回调。有光标时为编辑态，无光标时为非编辑态。
   *
   * @param { function } callback - Callback for the input status change. Returns **true** if the input box is in the
   *     editing state; returns **false** if the input box is in the non-editing state. [since 8 - 17]
   * @param { Callback<boolean> } callback - 输入状态变化回调，返回值为true表示输入框处于编辑态，返回值为false表示输入框处于非编辑态。 [since 18]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onEditChange(callback: Callback<boolean>): TextInputAttribute;

  /**
   * 按下输入法回车键触发该回调。
   * 
   * 非TV设备按下回车键时输入框默认会失焦且收起键盘，可在OnSubmitCallback回调中配置是否收起键盘，参考
   * [示例2（设置下划线）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例2设置下划线)。
   *
   * @param { function } callback - Callback for submission. [since 7 - 17]
   * @param { OnSubmitCallback } callback - 提交回调。 [since 18]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onSubmit(callback: OnSubmitCallback): TextInputAttribute;

  /**
   * 输入内容发生变化时，触发该回调。
   * 
   * 在本回调中，若执行了光标操作，需要开发者在预上屏场景下依据previewText参数调整光标逻辑，以适应预上屏场景。
   *
   * @param { function } callback - Callback invoked when the input in the text box changes. [since 7 - 11]
   * @param { EditableTextOnChangeCallback } callback - 当前输入文本内容变化时的回调。 [since 12]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(callback: EditableTextOnChangeCallback): TextInputAttribute;

  /**
   * 文本选择的位置或编辑状态下光标位置发生变化时，触发该回调。
   *
   * @param { function } callback - Callback for text selection changes or caret position changes. [since 10 - 17]
   * @param { OnTextSelectionChangeCallback } callback - 文本选择变化回调或光标位置变化回调。 [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTextSelectionChange(callback: OnTextSelectionChangeCallback): TextInputAttribute;

  /**
   * 文本内容滚动时，触发该回调。
   *
   * @param { function } callback - Callback for text content scrolling. [since 10 - 17]
   * @param { OnContentScrollCallback } callback - 文本内容滚动回调。 [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onContentScroll(callback: OnContentScrollCallback): TextInputAttribute;

  /**
   * 设置文本的最大输入字符数。
   *
   * @param { number } value - 文本的最大输入字符数。<br/>默认值：Infinity，可以无限输入。<br/>**说明：** <br/>当不设置该属性或设置异常值时，取默认值，设置小数时，取整数部分，设置值
   *     超过2^31-1时，可能导致异常行为。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxLength(value: number): TextInputAttribute;

  /**
   * 设置字体颜色。
   *
   * @param { ResourceColor } value - 字体颜色。<br/>Wearable设备上默认值为：'#dbffffff'
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): TextInputAttribute;

  /**
   * 设置字体大小。
   *
   * @param { Length } value - 字体大小。fontSize为number类型时，使用fp单位。字体默认大小16fp。不支持设置百分比字符串。<br/>Wearable设备上默认值为：18fp
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: Length): TextInputAttribute;

  /**
   * 设置字体样式。
   *
   * @param { FontStyle } value - 字体样式。<br/>默认值：FontStyle.Normal
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): TextInputAttribute;

  /**
   * 设置文本的字体粗细，设置过大可能会在不同字体下有截断。
   *
   * @param { number | FontWeight | string } value - Font weight. For the number type, the value range is [100, 900], at
   *     an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the
   *     string type, only strings that represent a number, for example, **400**, and the following enumerated values of
   *     **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.<br>Default value:
   *     **FontWeight.Normal**<br>The Resource type is supported since API version 20. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类
   *     型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。<br/>默认值：
   *     FontWeight.Normal <br>从API version 20开始，支持Resource类型。 [since 20]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): TextInputAttribute;

  /**
   * 设置字体列表。
   *
   * @param { ResourceStr } value - 字体列表。默认字体'HarmonyOS Sans'。<br>使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial,HarmonyOS Sans
   *     '。<br>应用当前支持'HarmonyOS Sans'字体和自定义字体。<br>卡片当前仅支持'HarmonyOS Sans'字体。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: ResourceStr): TextInputAttribute;

  /**
   * 通过正则表达式设置输入过滤器。匹配表达式的输入允许显示，不匹配的输入将被过滤。
   * 
   * 单字符输入场景仅支持单字符匹配，多字符输入场景支持字符串匹配，例如粘贴。
   * 
   * 从API version 11开始，设置inputFilter且输入的字符不为空字符，会导致[type]{@link TextInputAttribute#type}接口附带的文本过滤效果失效。
   *
   * @param { ResourceStr } value - 正则表达式。
   * @param { function } error - 正则匹配失败时，返回被过滤的内容。 [since 8 - 17]
   * @param { Callback<string> } [error] - 正则匹配失败时，返回被过滤的内容。 [since 18]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  inputFilter(value: ResourceStr, error?: Callback<string>): TextInputAttribute;

  /**
   * 进行复制操作时，触发该回调。
   *
   * @param { function } callback - Callback used to return the copied text content. [since 8 - 17]
   * @param { Callback<string> } callback - 复制回调，其返回值为复制的文本内容。 [since 18]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCopy(callback: Callback<string>): TextInputAttribute;

  /**
   * 在进行复制操作前，触发该回调。
   *
   * @param { Callback<string, boolean> } callback - 复制操作前的回调。回调参数类型为string时，表示将要被复制的文本内容。回调参数类型为boolean时，表示当前选中文本是否允许被复
   *     制，true：允许文本被复制；false：不允许文本被复制。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Callback<string, boolean>): TextInputAttribute;

  /**
   * 进行剪切操作时，触发该回调。
   *
   * @param { function } callback - Callback used to return the cut text content. [since 8 - 17]
   * @param { Callback<string> } callback - 剪切回调，其返回值为剪切的文本内容。 [since 18]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCut(callback: Callback<string>): TextInputAttribute;

  /**
   * 在进行剪切操作前，触发该回调。
   *
   * @param { Callback<string, boolean> } callback - 剪切操作前的回调。回调参数类型为string时，表示将要被剪切的文本内容。回调参数类型为boolean时，表示当前选中文本是否允许被剪
   *     切，true：允许文本被剪切；false：不允许文本被剪切。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCut(callback: Callback<string, boolean>): TextInputAttribute;

  /**
   * 进行粘贴操作时，触发该回调。
   *
   * @param { function } callback
   *     Executed when a paste operation is performed.
   *     { string } value - The text content to be pasted.
   *     { PasteEvent } event - The user-defined paste event. [since 8 - 17]
   * @param { OnPasteCallback } callback - Executed when a paste operation is performed. [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPaste(callback: OnPasteCallback): TextInputAttribute;

  /**
   * 设置输入的文本是否可复制。设置CopyOptions.None时，只支持粘贴和全选。
   * 
   * 设置CopyOptions.None时，不允许拖拽。
   *
   * @param { CopyOptions } value - 输入的文本是否可复制。<br/>默认值：CopyOptions.LocalDevice，支持设备内复制。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): TextInputAttribute;

  /**
   * 设置当密码输入模式时，输入框末尾的图标是否显示。
   *
   * @param { boolean } value - 密码输入模式时，输入框末尾的图标是否显示。<br/>true表示显示，false表示不显示。<br/>默认值：TV设备为false，其他设备为true。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  showPasswordIcon(value: boolean): TextInputAttribute;

  /**
   * 设置文本在输入框中的水平对齐方式。
   * 
   * 支持TextAlign.Start、TextAlign.Center和TextAlign.End。TextAlign.JUSTIFY的对齐方式按照TextAlign.Start处理。
   * 
   * 可通过[align]{@link CommonMethod#align(value: Alignment)}属性控制文本段落在垂直方向上的位置。此组件中不可使用align属性控制文本段落在水平方向上的位置。
   * 
   * - Alignment.TopStart、Alignment.Top、Alignment.TopEnd：内容顶部对齐。
   * - Alignment.Start、Alignment.Center、Alignment.End：内容垂直居中。
   * - Alignment.BottomStart、Alignment.Bottom、Alignment.BottomEnd：内容底部对齐。
   *
   * @param { TextAlign } value - 文本在输入框中的水平对齐方式。<br/>默认值：TextAlign.Start
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  textAlign(value: TextAlign): TextInputAttribute;

  /**
   * 设置输入框为默认风格或内联输入风格，内联输入风格只支持InputType.Normal类型。
   * 
   * 输入框类型介绍请参考[type]{@link TextInputAttribute#type}接口。
   *
   * @param { TextInputStyle | TextContentStyle } value - 输入框为默认风格或内联输入风格。<br/>默认值：TextInputStyle.Default
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  style(value: TextInputStyle | TextContentStyle): TextInputAttribute;

  /**
   * 设置光标风格。
   *
   * @param { CaretStyle } value - 光标的风格。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  caretStyle(value: CaretStyle): TextInputAttribute;

  /**
   * 设置文本选中底板颜色。如果未设置不透明度，默认为20%不透明度。
   *
   * @param { ResourceColor } value - 文本选中底板颜色。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): TextInputAttribute;

  /**
   * 设置光标位置。
   *
   * @param { number } value - 光标的位置。<br/>第一个字符前的位置是0。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  caretPosition(value: number): TextInputAttribute;

  /**
   * 设置TextInput通过点击以外的方式获焦时，是否主动拉起软键盘。
   * 
   * 从API version 10开始，获焦默认绑定输入法。
   *
   * @param { boolean } value - 通过点击以外的方式获焦时，是否主动拉起软键盘。<br/>true表示主动拉起软键盘，false表示不主动拉起。<br/>默认值：TV设备为false，其他设备为true。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableKeyboardOnFocus(value: boolean): TextInputAttribute;

  /**
   * 设置当密码输入模式时，输入框末尾的图标。
   * 
   * 支持jpg、png、bmp、heic和webp类型的图片格式。
   *
   * @param { PasswordIcon } value - 密码输入模式时，输入框末尾的图标。<br/>默认为系统提供的密码图标。<br/>该图标的固定尺寸为24vp，Wearable设备上默认值为28vp，若引用的图标过大或
   *     过小，均显示为固定尺寸。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  passwordIcon(value: PasswordIcon): TextInputAttribute;

  /**
   * 设置错误状态下提示的错误文本或者不显示错误状态。
   * 
   * 当参数类型为ResourceStr并且输入内容不符合定义规范时，提示错误文本，当提示错误单行文本超长时，末尾以省略号显示。当参数类型为undefined时，不显示错误状态。请参考
   * [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例2设置下划线)。
   *
   * @param { string | undefined } value - 错误状态下提示的错误文本或者不显示错误状态。<br/>默认不显示错误状态。<br/>Wearable设备上字体大小为：13fp，对齐方式为：居中对齐<br
   *     />**说明：** <br/>从API version 12开始，value支持Resource类型。 [since 10 - 11]
   * @param { ResourceStr | undefined } [value] - 错误状态下提示的错误文本或者不显示错误状态。<br/>默认不显示错误状态。<br/>Wearable设备上字体大小为：13fp，对齐方式为：
   *     居中对齐<br/>**说明：** <br/>从API version 12开始，value支持Resource类型。 [since 12]
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showError(value?: ResourceStr | undefined): TextInputAttribute;

  /**
   * 设置控件作为文本框单位。需搭配[showUnderline]{@link TextInputAttribute#showUnderline}使用，当showUnderline为true时生效。
   *
   * @param { CustomBuilder } value - 文本输入时，文本框的显示单位。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showUnit(value: CustomBuilder): TextInputAttribute;

  /**
   * 设置是否开启下划线。
   *
   * @param { boolean } value - 是否开启下划线。<br/>true表示开启，false表示不开启。<br/>默认值：false<br/>下划线默认颜色为'#33182431'，默认粗细为1px，文本框尺寸48
   *     vp，下划线只支持InputType.Normal类型。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showUnderline(value: boolean): TextInputAttribute;

  /**
   * 设置下划线颜色。
   * 
   * 开启输入框下划线[showUnderline]{@link TextInputAttribute#showUnderline}时，支持配置下划线颜色。
   *
   * @param { ResourceColor | UnderlineColor | undefined } value - 设置下划线颜色。<br/>当设置下划线颜色模式时，修改下划线颜色。当只设定非特殊状态下的颜色，可以直接输入
   *     ResourceColor。设定值为undefined、null、无效值时，所有下划线恢复为默认值。<br/>默认值：主题配置的下划线颜色。主题配置的默认下划线颜色为'#33182431'。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  underlineColor(value: ResourceColor | UnderlineColor | undefined): TextInputAttribute;

  /**
   * 设置是否隐藏系统文本选择菜单。
   *
   * @param { boolean } value - 是否隐藏系统文本选择菜单。<br />设置为true时，单击输入框光标、长按输入框、双击输入框、三击输入框或者右键输入框，隐藏系统文本选择菜单。<br />设置为false时，
   *     显示系统文本选择菜单。<br />默认值：false
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectionMenuHidden(value: boolean): TextInputAttribute;

  /**
   * 设置内联输入风格编辑态时滚动条的显示模式。
   *
   * @param { BarState } value - 内联输入风格编辑态时滚动条的显示模式。<br/>默认值：BarState.Auto
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barState(value: BarState): TextInputAttribute;

  /**
   * 设置内联输入风格编辑态时文本可显示的最大行数。
   *
   * @param { number } value - 内联输入风格编辑态时文本可显示的最大行数。<br/>默认值：3 <br/>取值范围：(0, UINT32_MAX]
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxLines(value: number): TextInputAttribute;

  /**
   * 设置文本断行规则。该属性在组件设置[内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)时样式生效，但对placeholder文本无效。
   *
   * @param { WordBreak } value - 内联输入风格编辑态时断行规则。 <br />默认值：WordBreak.BREAK_WORD
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  wordBreak(value: WordBreak): TextInputAttribute;

  /**
   * 设置折行规则。该属性在wordBreak不等于breakAll的时候生效，不支持连词符。
   *
   * @param { LineBreakStrategy } strategy - 文本的折行规则。 <br />默认值：LineBreakStrategy.GREEDY <br/>**说明：**<br/>仅设置
   *     [内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)时该属性生效。
   * @returns { TextInputAttribute } The attribute of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineBreakStrategy(strategy: LineBreakStrategy): TextInputAttribute;

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
   * 默认在输入控件失去焦点时，关闭自定义键盘，开发者也可以通过
   * [TextInputController](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputcontroller8).
   * [stopEditing]{@link TextInputController#stopEditing}方法控制键盘关闭。
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
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): TextInputAttribute;

  /**
   * 设置当通过InputCounterOptions输入的字符数超过阈值时显示计数器。未调用showCounter接口时，默认不显示计数器。
   * 
   * 参数value为true时，才能设置options，文本框开启计数下标功能，需要配合[maxLength]{@link TextInputAttribute#maxLength}（设置最大字符限制）一起使用。字符计数器显示的效果是
   * 当前输入字符数/最大可输入字符数。
   * 
   * 当输入字符数大于最大字符数乘百分比值时，显示字符计数器。如果用户设置计数器时不设置InputCounterOptions，那么当前输入字符数超过最大字符数时，边框和计数器下标将变为红色。用户同时设置参数value为true和
   * [InputCounterOptions]{@link InputCounterOptions}，当thresholdPercentage数值在有效区间内，且输入字符数超过最大字符数时，边框和计数器下标将变为红色，框体抖动。
   * highlightBorder设置为false，则不显示红色边框，计数器默认显示红色，框体抖动。
   * 
   * [内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)、
   * [密码模式](docroot://ui/arkts-common-components-text-input.md#密码模式)下字符计数器不显示。
   * 
   * [示例5（设置计数器）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例5设置计数器)展示了设置showCounter的效果。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } value - 是否显示计数器。<br/>true表示显示计数器，false表示不显示。
   * @param { InputCounterOptions } options - 计数器的配置项。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  showCounter(value: boolean, options?: InputCounterOptions): TextInputAttribute;

  /**
   * 设置右侧清除按钮样式，仅支持图片类型的图标。不支持[内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)。示例请参考
   * [示例4（设置右侧清除按钮样式）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例4设置右侧清除按钮样式)。
   *
   * @param { object } value - indicates the style of the cancel button. [since 11 - 17]
   * @param { CancelButtonOptions } options - 右侧清除按钮样式选项。<br />默认值：<br />{<br />style: CancelButtonStyle.INPUT<br />}<br
   *     />Wearable设备上默认值为：28vp [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  cancelButton(options: CancelButtonOptions): TextInputAttribute;

  /**
   * 设置右侧清除按钮样式，仅支持symbol图标。不支持[内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)。示例请参考
   * [示例15（设置symbol类型清除按钮）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例15设置symbol类型清除按钮)。
   *
   * @param { CancelButtonSymbolOptions } symbolOptions - 右侧清除按钮样式。<br />默认值：<br />{<br />style: CancelButtonStyle.INPUT
   *     <br />}
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  cancelButton(symbolOptions: CancelButtonSymbolOptions): TextInputAttribute;

  /**
   * 设置初始状态时，是否全选文本。不支持[内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)。
   *
   * @param { boolean } value - 是否全选文本。<br/>true表示会全选文本，false表示不会全选文本。<br />默认值：false
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectAll(value: boolean): TextInputAttribute;

  /**
   * 设置文本最小显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 需配合[maxFontSize]{@link TextInputAttribute#maxFontSize}以及[maxLines]{@link TextInputAttribute#maxLines}(组件设置为内联输入风格且编
   * 辑态时使用)或布局大小限制使用，单独设置不生效。
   * 
   * 自适应字号生效时，fontSize设置不生效。
   * 
   * minFontSize小于或等于0时，自适应字号不生效，此时按照[fontSize]{@link TextInputAttribute#fontSize}属性的值生效，未设置时按照其默认值生效。
   *
   * @param { number | string | Resource } value - 文本最小显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minFontSize(value: number | string | Resource): TextInputAttribute;

  /**
   * 设置文本最大显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 需配合[minFontSize]{@link TextInputAttribute#minFontSize}以及[maxLines]{@link TextInputAttribute#maxLines}(组件设置为内联输入风格且编
   * 辑态时使用)或布局大小限制使用，单独设置不生效。
   * 
   * 自适应字号生效时，fontSize设置不生效。
   * 
   * maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照[fontSize]{@link TextInputAttribute#fontSize}属性的值生效，未设置时按照
   * 其默认值生效。
   *
   * @param { number | string | Resource } value - 文本最大显示字号。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxFontSize(value: number | string | Resource): TextInputAttribute;

  /**
   * 设置文本最小的字体缩放倍数。
   *
   * @param { Optional<number | Resource> } scale - 文本最小的字体缩放倍数，支持undefined类型。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置的值小于0
   *     时，按值为0处理。设置的值大于1，按值为1处理。异常值默认不生效。<br/>使用前需在工程中配置
   *     [configuration.json](docroot://quick-start/app-configuration-file.md#configuration标签)文件和
   *     [app.json5](docroot://quick-start/app-configuration-file.md)文件，具体详见
   *     [示例18（设置最小字体范围与最大字体范围）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例18设置最小字体范围与最大字体范围)。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: Optional<number|Resource>): TextInputAttribute;

  /**
   * 设置文本最大的字体缩放倍数。
   *
   * @param { Optional<number | Resource> } scale - 文本最大的字体缩放倍数，支持undefined类型。<br/>取值范围：
   *     [1, +∞)<br/>**说明：** <br/>设置的值小于1时，按值为1处理。异常值默认不生效。<br/>当设置maxFontScale属性后，showError最多放大到2倍。<br/>使用前需在工程中配置[configuration.json](docroot://quick-start/app-configuration-file.md#configuration标签)文件和[app.json5](docroot://quick-start/app-configuration-file.md)文件，具体详见[示例18（设置最小字体范围与最大字体范围）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例18设置最小字体范围与最大字体范围)。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): TextInputAttribute;

  /**
   * 组件设置为内联输入风格时，设置文本自适应高度的方式。
   * 
   * 当设置为TextHeightAdaptivePolicy.MAX_LINES_FIRST时，优先使用[maxLines]{@link TextInputAttribute#maxLines}属性来调整文本高度。如果使用
   * maxLines属性的布局大小超过了布局约束，则尝试在[minFontSize]{@link TextInputAttribute#minFontSize}和
   * [maxFontSize]{@link TextInputAttribute#maxFontSize}的范围内缩小字体以显示更多文本。
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
   * @param { TextHeightAdaptivePolicy } value - 文本自适应高度的方式。<br/>默认值：TextHeightAdaptivePolicy.MAX_LINES_FIRST
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextInputAttribute;

  /**
   * 设置是否启用自动填充。<!--RP6--><!--RP6End-->
   *
   * @param { boolean } value - 是否启用自动填充。<br/>true表示启用，false表示不启用。<br/>默认值：true
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableAutoFill(value: boolean): TextInputAttribute;

  /**
   * 设置文本装饰线类型样式及其颜色。
   *
   * @param { TextDecorationOptions } value - 文本装饰线对象。<br />默认值：{<br/> type: TextDecorationType.None,<br/> color: 
   *     Color.Black,<br/> style: TextDecorationStyle.SOLID,<br/> thicknessScale: 1.0<br/>}
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  decoration(value: TextDecorationOptions): TextInputAttribute;

  /**
   * 设置文本字符间距。设置该值为百分比时，按默认值显示。设置该值为0时，按默认值显示。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 当取值为负值时，文字会发生压缩，负值过小时会将组件内容区大小压缩为0，导致无内容显示。
   * 
   * 对每个字符生效，包括行尾字符。
   *
   * @param { number | string | Resource } value - 文本字符间距。<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing(value: number | string | Resource): TextInputAttribute;

  /**
   * 设置文本的行高。
   * 
   * 设置值不大于0时，不限制文本行高，自适应字体大小，number类型时单位为fp。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * > **说明：**
   * >
   * > - 特殊字符字体高度远超出同行的其他字符高度时，文本框出现截断、遮挡、内容相对位置发生变化等不符合预期的显示异常，需要开发者调整组件高度、行高等属性，修改对应的页面布局。
   * >
   * > - 设置[密码模式](docroot://ui/arkts-common-components-text-input.md#密码模式)时，通过该接口设置行高
   * > [lineHeight]{@link TextInputAttribute#lineHeight}不生效。
   *
   * @param { number | string | Resource } value - 文本的文本行高。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight(value: number | string | Resource): TextInputAttribute;

  /**
   * 定义生成密码的规则。在触发自动填充时，所设置的密码规则会透传给密码保险箱，用于新密码的生成。<!--RP1--><!--RP1End-->
   *
   * @param { string } value - 定义生成密码的规则。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  passwordRules(value: string): TextInputAttribute;

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
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): TextInputAttribute;

  /**
   * 设置密码的显隐状态。
   * 
   * 当[InputType](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#inputtype枚举说明)设置为Password、
   * NEW_PASSWORD和NUMBER_PASSWORD模式时，密码保护功能才能生效。非密码输入模式则不会触发该功能。
   * 
   * [密码模式](docroot://ui/arkts-common-components-text-input.md#密码模式)时，由于输入框后端的状态和前端应用侧的状态管理变量会不一致，可能导致末尾图标的状态异常。建议在
   * [onSecurityStateChange]{@link TextInputAttribute#onSecurityStateChange}上增加状态同步。参考
   * [示例1（设置与获取光标位置）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#示例1设置与获取光标位置)。
   *
   * @param { boolean } visible - 是否显示密码。<br/>true表示会显示密码，false表示不会显示密码。<br/>默认值：false
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showPassword(visible: boolean): TextInputAttribute;

  /**
   * 密码显隐状态切换时，触发该回调。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<boolean> } callback - 回调函数。<br/>true表示状态切换；false表示状态未切换。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onSecurityStateChange(callback: Callback<boolean>): TextInputAttribute;

  /**
   * 在将要输入时，触发该回调。
   *
   * @param { Callback<InsertValue, boolean> } callback - 在将要输入时调用的回调。<br/>在返回true时，表示正常插入，返回false时，表示不插入。<br/>在预上屏和候选词操
   *     作时，该回调不触发。<br/>仅支持系统输入法输入的场景。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): TextInputAttribute;

  /**
   * 在输入完成时，触发该回调。
   *
   * @param { Callback<InsertValue> } callback - 在输入完成时调用的回调。<br/>仅支持系统输入法输入的场景。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidInsert(callback: Callback<InsertValue>): TextInputAttribute;

  /**
   * 在将要删除时，触发该回调。
   *
   * @param { Callback<DeleteValue, boolean> } callback - 在将要删除时调用的回调。<br/>在返回true时，表示正常删除，返回false时，表示不删除。<br/>在预上屏删除操作
   *     时，该回调不触发。<br/>仅支持系统输入法输入的场景。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): TextInputAttribute;

  /**
   * 在删除完成时，触发该回调。
   *
   * @param { Callback<DeleteValue> } callback - 在删除完成时调用的回调。<br/>仅支持系统输入法输入的场景。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDelete(callback: Callback<DeleteValue>): TextInputAttribute;

  /**
   * 在输入框将要绑定输入法前触发该回调。
   * 
   * <!--Del-->
   * 
   * 在输入框将要绑定输入法前，可以通过`UIContext`的系统接口
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
   * @param { Callback<IMEClient> } callback - 在输入框将要绑定输入法前触发该回调。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient>): TextInputAttribute;

  /**
   * 设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。
   * 
   * 调用[disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20)或
   * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
   * 接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法[onCreateMenu]{@link EditMenuOptions.onCreateMenu}的入参列表中不包含被屏蔽的菜单选项。
   *
   * @param { EditMenuOptions } editMenu - 扩展菜单选项。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): TextInputAttribute;

  /**
   * 设置是否开启输入预上屏。
   * 
   * 预上屏内容定义为文字暂存态，目前不支持文字拦截功能。
   *
   * @param { boolean } enable - 是否开启输入预上屏。<br/>true表示开启输入预上屏，false表示不开启输入预上屏。<br/>默认值：true
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): TextInputAttribute;

  /**
   * 设置是否开启触控反馈。
   * 
   * 开启触控反馈时，需要在工程的[module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段以开启振动权限，配置如
   * 下：
   *
   * @param { boolean } isEnabled - 是否开启触控反馈。<br/>true表示开启触控反馈，false表示不开启触控反馈。<br/>默认值：true
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): TextInputAttribute;

  /**
   * 设置自动大小写模式的文本模式，只提供接口能力，具体实现以输入法应用为主。
   *
   * @param { AutoCapitalizationMode } mode - 自动大小写模式，默认状态无效。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): TextInputAttribute;

  /**
   * 设置文本在行内垂直居中，将行间距平分至行的顶部与底部。
   *
   * @param { Optional<boolean> } halfLeading - 设置文本是否垂直居中。<br/>true表示将行间距平分至行的顶部与底部，false则不平分。<br/>默认值：false
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading(halfLeading: Optional<boolean>): TextInputAttribute;

  /**
   * 设置省略位置。ellipsisMode属性仅在[内联模式](docroot://ui/arkts-common-components-text-input.md#内联模式)下生效，需要配合overflow设置为
   * TextOverflow.Ellipsis使用，单独设置ellipsisMode属性不生效。
   * 
   * 非编辑态时正常生效，编辑态时EllipsisMode.START和EllipsisMode.CENTER仅在maxLines设置为1时生效，EllipsisMode.END、EllipsisMode.MULTILINE_START
   * 和EllipsisMode.MULTILINE_CENTER正常生效。
   *
   * @param { Optional<EllipsisMode> } mode - 省略位置。 <br />默认值：EllipsisMode.END
   * @returns { TextInputAttribute } The attribute of TextInput.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ellipsisMode(mode: Optional<EllipsisMode>): TextInputAttribute;

  /**
   * 设置是否阻止返回键传递。
   *
   * @param { Optional<boolean> } isStopped - 是否阻止返回键。<br/>true表示阻止，false表示不阻止。<br/>默认值：true。异常值取默认值。
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): TextInputAttribute;

  /**
   * 在文本内容将要发生变化时，触发该回调。
   * 
   * onWillChange的回调时序晚于onWillInsert、onWillDelete，早于onDidInsert、onDidDelete。
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - 在文本内容将要发生变化时的回调。<br/>返回true时，表示正常修改。返回false时，表示拦截此
   *     次触发。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextInputAttribute;

  /**
   * 设置输入框拉起的键盘样式，需要输入法适配后生效。具体参考[输入法应用沉浸模式](docroot://inputmethod/inputmethod-immersive-mode-guide.md)。
   *
   * @param { Optional<KeyboardAppearance> } appearance - 键盘样式。<br/>默认值：KeyboardAppearance.NONE_IMMERSIVE
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextInputAttribute;

  /**
   * 设置文本描边的宽度。
   *
   * @param { Optional<LengthMetrics> } width - 文本描边的宽度。如果LengthMetrics的unit值是PERCENT，当前设置不生效，按默认值处理。<br/>若设置值小于0，显示实心字；
   *     若大于0，显示空心字。<br/>默认值为0，不做描边处理。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeWidth(width: Optional<LengthMetrics>): TextInputAttribute;

  /**
   * 设置文本描边的颜色。
   *
   * @param { Optional<ResourceColor> } color - 描边颜色。默认值为字体颜色，设置异常值时取默认值。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor(color: Optional<ResourceColor>): TextInputAttribute;

  /**
   * 设置是否启用自动填充动效。
   *
   * @param { Optional<boolean> } enabled - 是否启用自动填充动效。<br/>true表示启用，false表示不启用。<br/>默认值：true <br/>**说明：**<br/>启用之后，仅输入模
   *     式[InputType](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#inputtype枚举说明)设置为Password
   *     、NEW_PASSWORD或NUMBER_PASSWORD的输入框在进行自动填充时动效可生效。
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoFillAnimation(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * 设置是否开启中文与西文的自动间距。
   *
   * @param { Optional<boolean> } enabled - 是否开启中文与西文的自动间距。<br/>true为开启自动间距，false为不开启。<br />默认值：false
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * 设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。
   *
   * @param { Optional<boolean> } include - 是否在首行和尾行增加间距以避免文字截断。<br/>true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): TextInputAttribute;

  /**
   * 针对多行文字叠加，支持行高基于文字实际高度自适应。此接口仅当行高小于文字实际高度时生效。不通过该接口设置，默认行高不基于文字实际高度自适应。
   *
   * @param { Optional<boolean> } enabled - 行高是否基于文字实际高度自适应。<br/>true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): TextInputAttribute;

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
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * 设置文本输入框内文本拖拽时的背板样式。
   *
   * @param { SelectedDragPreviewStyle | undefined } value - 文本拖拽时的背板样式。<br/>设置为undefined时：背板颜色跟随主题，浅色模式显示白色，深色模式显示黑色。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextInputAttribute;

  /**
   * 指定文本排版方向，未通过该接口设置时，默认文本排版方向遵循组件布局方向。
   *
   * @param { TextDirection | undefined } direction - 文本排版方向。<br/>设置为undefined时，按照TextDirection.DEFAULT处理，表现为文本排版方向遵循组件布
   *     局方向。
   * @returns { TextInputAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): TextInputAttribute;

  /**
   * 设置语音按键选项。
   *
   * @param { Optional<VoiceButtonOptions> } options - 语音按键的选项。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  voiceButton(options: Optional<VoiceButtonOptions>): TextInputAttribute;

  /**
   * 设置文本排版时是否使能孤字优化。不通过该接口设置，默认不使能孤字优化。
   * 
   * 孤字优化通过更高效地处理孤立字符（段落尾行首字符）来改善文本布局。使能后，它会调整换行点以尽可能避免孤立字符。孤字优化特性需在[wordBreak]{@link TextInputAttribute#wordBreak}为非
   * BREAK_ALL并且待排版文本首个[TextStyle]{@link @ohos.graphics.text:text.TextStyle}的
   * [locale]{@link @ohos.graphics.text:text.TextStyle}为“zh-Hans”或“zh-Hant”时生效。
   *
   * @param { Optional<boolean> } enabled - 段落最后一行是否使能孤字优化。<br/>true表示使能孤字优化，false表示不使能孤字优化。<br/>值为undefined或null时，不使能孤字
   *     优化。
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * 设置文本描边拐角样式。
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - 文本描边拐角样式。<br/>值为undefined时，按照StrokeJoinStyle.MITER_JOIN处理，
   *     请参考[StrokeJoinStyle]{@link StrokeJoinStyle}，文本拐角处表现为锐角。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextInputAttribute;

  /**
   * 设置文本着色器效果，如线性渐变、径向渐变效果等。
   * 
   * > **说明：**
   * >
   * > 当同时设置shaderStyle和[strokeWidth]{@link TextInputAttribute#strokeWidth}时，shaderStyle不生效。
   * >
   * > shaderStyle的优先级高于[fontColor]{@link TextInputAttribute#fontColor}。
   *
   * @param { ShaderStyle | undefined } shader - 文本着色器效果。<br/>值为undefined时，无渐变效果。
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle(shader: ShaderStyle | undefined): TextInputAttribute;

  /**
   * 是否启用行尾标点溢出。
   *
   * @param { Optional<boolean> } enabled - 是否开启，默认为false
   * @returns { TextInputAttribute } 返回TextInputAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  punctuationOverflow(enabled: Optional<boolean>): TextInputAttribute;
}

/**
 * 单行文本输入框组件。
 * 
 * > **说明：**
 * 
 * > 该组件仅支持单文本样式，若需实现富文本样式，建议使用[RichEditor]{@link rich_editor}组件。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const TextInput: TextInputInterface;

/**
 * 定义文本输入组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const TextInputInstance: TextInputAttribute;