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
 * Type of the single-line text input box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum InputType {
  /**
   * Basic input mode with no special restrictions.
   *
   * The inline input style supports only the InputType.Normal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal,

  /**
   * Pure number input mode.
   *
   * Negative numbers and decimals are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Number,

  /**
   * Phone number input mode.
   *
   * Supports digits, spaces, +, -, *, #, (, and ), with no length limit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  PhoneNumber,

  /**
   * Email address input mode.
   *
   * Supports digits, letters, underscores, decimal points, !, #, $, %, &, ', ", *, +, -, /, =, ?, ^,
   * `, {, |, }, ~, and @ (only one is supported). The email address format must comply with the basic specification:
   * the part before the @ character is the username, and the part after the @ character is the domain name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Email,

  /**
   * Password input mode.
   *
   * By default, the entered text is briefly displayed and then becomes dots. Since API version 12, the entered text is
   * directly displayed as dots on PC/2-in-1 devices.
   *
   * On TV devices, the eye icon is not displayed at the end of the input box by default; on other devices, the eye icon
   * is displayed at the end of the input box by default.
   *
   * In password input mode, [decoration]{@link TextInputAttribute#decoration},
   * [showUnderline]{@link TextInputAttribute#showUnderline}, [lineHeight]{@link TextInputAttribute#lineHeight}, and
   * [fontFeature]{@link TextInputAttribute#fontFeature} do not take effect.
   *
   * When the password vault is enabled, auto-save and auto-fill of the username and password are supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Password,

  /**
   * Pure number password input mode.
   *
   * By default, the entered text is briefly displayed and then becomes dots. Since API version 12, the entered text is
   * directly displayed as dots on PC/2-in-1 devices.
   *
   * On TV devices, the eye icon is not displayed at the end of the input box by default; on other devices, the eye icon
   * is displayed at the end of the input box by default.
   *
   * In password input mode, [decoration]{@link TextInputAttribute#decoration},
   * [showUnderline]{@link TextInputAttribute#showUnderline}, [lineHeight]{@link TextInputAttribute#lineHeight}, and
   * [fontFeature]{@link TextInputAttribute#fontFeature} do not take effect. When the password vault is enabled, auto-
   * save and auto-fill of the username and password are supported.
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
   * Username input mode with no special restrictions.
   *
   * When the password vault is enabled, auto-save and auto-fill of the username are supported, which are used together
   * with [InputType.Password]{@link InputType}, [InputType.NUMBER_PASSWORD]{@link InputType}, and
   * [InputType.NEW_PASSWORD]{@link InputType} to complete paired filling of the username and password.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  USER_NAME = 10,

  /**
   * New password input mode.
   *
   * By default, the entered text is briefly displayed and then becomes dots. Since API version 12, the entered text is
   * directly displayed as dots on PC/2-in-1 devices.
   *
   * On TV devices, the eye icon is not displayed at the end of the input box by default; on other devices, the eye icon
   * is displayed at the end of the input box by default.
   *
   * In password input mode, [decoration]{@link TextInputAttribute#decoration},
   * [showUnderline]{@link TextInputAttribute#showUnderline}, [lineHeight]{@link TextInputAttribute#lineHeight}, and
   * [fontFeature]{@link TextInputAttribute#fontFeature} do not take effect. When the password vault is enabled,
   * automatic generation of a new password is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NEW_PASSWORD = 11,

  /**
   * Number input mode with a decimal point.
   *
   * Supports digits and a decimal point (only one decimal point is allowed). Negative numbers (including negative
   * integers and negative decimals) are not supported. To support negative number input, use the
   * [inputFilter]{@link TextInputAttribute#inputFilter} attribute to implement negative number filtering.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  NUMBER_DECIMAL = 12,

  /**
   * Input mode with a URL, with no special restrictions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  URL = 13,

  /**
   * Verification code input mode with no special restrictions. In this mode, the system input method is pulled up by
   * default after the component gains focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  ONE_TIME_CODE = 14
}

/**
 * Enumerates autofill types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ContentType {
  /**
   * [User name] When the password vault is enabled, supports auto-save and auto-fill of the user name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  USER_NAME = 0,

  /**
   * [Password] When the password vault is enabled, supports auto-save and auto-fill of the password.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PASSWORD = 1,

  /**
   * [New password] When the password vault is enabled, supports automatic generation of a new password.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  NEW_PASSWORD = 2,

  /**
   * [Detailed address] When contextual auto-fill is enabled, supports auto-save and auto-fill of the detailed address.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  FULL_STREET_ADDRESS = 3,

  /**
   * [House number] When contextual auto-fill is enabled, supports auto-save and auto-fill of the house number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  HOUSE_NUMBER = 4,

  /**
   * [District/county] When contextual auto-fill is enabled, supports auto-save and auto-fill of the district/county.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  DISTRICT_ADDRESS = 5,

  /**
   * [City] When contextual auto-fill is enabled, supports auto-save and auto-fill of the city.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  CITY_ADDRESS = 6,

  /**
   * [Province] When contextual auto-fill is enabled, supports auto-save and auto-fill of the province.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PROVINCE_ADDRESS = 7,

  /**
   * [Country] When contextual auto-fill is enabled, supports auto-save and auto-fill of the country.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  COUNTRY_ADDRESS = 8,

  /**
   * [Full name] When contextual auto-fill is enabled, supports auto-save and auto-fill of the full name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PERSON_FULL_NAME = 9,

  /**
   * [Last name] When contextual auto-fill is enabled, supports auto-save and auto-fill of the last name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PERSON_LAST_NAME = 10,

  /**
   * [First name] When contextual auto-fill is enabled, supports auto-save and auto-fill of the first name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PERSON_FIRST_NAME = 11,

  /**
   * [Phone number] When contextual auto-fill is enabled, supports auto-save and auto-fill of the phone number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PHONE_NUMBER = 12,

  /**
   * [Country code] When contextual auto-fill is enabled, supports auto-save and auto-fill of the country code.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PHONE_COUNTRY_CODE = 13,

  /**
   * [Phone number with country code] When contextual auto-fill is enabled, supports auto-save and auto-fill of the
   * phone number with country code.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  FULL_PHONE_NUMBER = 14,

  /**
   * [Email address] When contextual auto-fill is enabled, supports auto-save and auto-fill of the email address.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  EMAIL_ADDRESS = 15,

  /**
   * [Bank card number] When contextual auto-fill is enabled, supports auto-save and auto-fill of the bank card number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  BANK_CARD_NUMBER = 16,

  /**
   * [ID card number] When contextual auto-fill is enabled, supports auto-save and auto-fill of the ID card number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ID_CARD_NUMBER = 17,

  /**
   * [Nickname] When contextual auto-fill is enabled, supports auto-save and auto-fill of the nickname.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  NICKNAME = 23,

  /**
   * [Address without street] When contextual auto-fill is enabled, supports auto-save and auto-fill of the address
   * without street.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  DETAIL_INFO_WITHOUT_STREET = 24,

  /**
   * [Standard address] When contextual auto-fill is enabled, supports auto-save and auto-fill of the standard address.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  FORMAT_ADDRESS = 25,

  /**
   * [Passport number] When contextual auto-fill is enabled, supports auto-save and auto-fill of the passport number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  PASSPORT_NUMBER = 26,

  /**
   * [Passport validity] When contextual auto-fill is enabled, supports auto-save and auto-fill of the passport
   * validity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  VALIDITY = 27,

  /**
   * [Passport issuing place] When contextual auto-fill is enabled, supports auto-save and auto-fill of the passport
   * issuing place.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ISSUE_AT = 28,

  /**
   * [Invoice title name] When contextual auto-fill is enabled, supports auto-save and auto-fill of the invoice title
   * name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ORGANIZATION = 29,

  /**
   * [Tax ID] When contextual auto-fill is enabled, supports auto-save and auto-fill of the tax ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  TAX_ID = 30,

  /**
   * [Region] When contextual auto-fill is enabled, supports auto-save and auto-fill of the region.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ADDRESS_CITY_AND_STATE = 31,

  /**
   * [Flight number] Auto-save and auto-fill are not supported yet.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  FLIGHT_NUMBER = 32,

  /**
   * [Driver's license number] Auto-save and auto-fill are not supported yet.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_NUMBER = 33,

  /**
   * [Driver's license file number] Auto-save and auto-fill are not supported yet.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_FILE_NUMBER = 34,

  /**
   * [License plate number] When contextual auto-fill is enabled, supports auto-save and auto-fill of the license plate
   * number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_PLATE = 35,

  /**
   * [Engine number] Auto-save and auto-fill are not supported yet.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ENGINE_NUMBER = 36,

  /**
   * [Chassis number] Auto-save and auto-fill are not supported yet.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_CHASSIS_NUMBER = 37
}

/**
 * Type of the Enter key on the input method.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum EnterKeyType {
  /**
   * Displayed as the start style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Go = 2,

  /**
   * Displayed as the search style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Search = 3,

  /**
   * Displayed as the send style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Send = 4,

  /**
   * Displayed as the next step style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Next = 5,

  /**
   * Displayed as the done style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Done = 6,

  /**
   * Displayed as the previous step style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PREVIOUS = 7,

  /**
   * Displayed as the new line style.
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
 * Defines the underline color width property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface UnderlineColor {
  /**
   * Underline color during typing. When not set, undefined, null, or an invalid value is used, the default value is
   * restored, which is the underline color configured by the theme.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  typing?: ResourceColor | undefined;

  /**
   * Underline color in the non-special state. When not set, undefined, null, or an invalid value is used, the default
   * value is restored, which is the underline color configured by the theme.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  normal?: ResourceColor | undefined;

  /**
   * Underline color in the error state. When not set, undefined, null, or an invalid value is used, the default value
   * is restored, which is the underline color configured by the theme. This option modifies the color when the maximum
   * number of characters is reached in the showCounter attribute.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  error?: ResourceColor | undefined;

  /**
   * Underline color in the disabled state. When not set, undefined, null, or an invalid value is used, the default
   * value is restored, which is the underline color configured by the theme.
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
 * Defines the user submit event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface SubmitEvent {
  /**
   * Customizes the editing state of the input box and keeps it in the editing state when called.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  keepEditableState(): void;

  /**
   * Text content of the input box.
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
 * The controller of the TextInput component inherits from [TextContentControllerBase]{@link TextContentControllerBase}.
 * The involved APIs include [getTextContentRect]{@link TextContentControllerBase#getTextContentRect},
 * [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount},
 * [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}, [addText]{@link TextContentControllerBase#addText},
 * [deleteText]{@link TextContentControllerBase#deleteText},
 * [getSelection]{@link TextContentControllerBase#getSelection},
 * [clearPreviewText]{@link TextContentControllerBase#clearPreviewText},
 * [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder},
 * [deleteBackward]{@link TextContentControllerBase#deleteBackward},
 * [scrollToVisible]{@link TextContentControllerBase#scrollToVisible}<!--Del-->, and the system API
 * [getText]{@link TextContentControllerBase#getText}<!--DelEnd-->.
 *
 * ###### Imported Object
 *
 * ```ts
 * controller: TextInputController = new TextInputController();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full [since 10]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextInputController extends TextContentControllerBase {
  /**
   * Constructor of TextInputController.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Sets the position of the input cursor. If the value is less than 0, it is set to 0. If the value is greater than
   * the text length, the cursor is displayed at the end of the text.
   *
   * @param { number } value - Character length from the start of the string to the cursor position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  caretPosition(value: number): void;

  /**
   * Sets the text selection region and highlights it.
   *
   * @param { number } selectionStart - Start position of the text selection region. The start position of the text in
   *     the text box is 0. If selectionStart is less than 0, it is processed as 0. If selectionStart is greater than
   *     the text length, it is processed as the text length.
   * @param { number } selectionEnd - End position of the text selection region. If selectionEnd is less than 0, it is
   *     processed as 0. If selectionEnd is greater than the text length, it is processed as the text length.
   * @param { SelectionOptions } [options] - Configuration for the selected text, used to control the display policy of
   *     the text selection menu.
   *     <br>The configuration item includes menuPolicy, which specifies the menu display mode: MenuPolicy.DEFAULT
   *     indicates that the menu is displayed according to the system default behavior; MenuPolicy.SHOW indicates that
   *     the menu is forcibly displayed; MenuPolicy.HIDE indicates that the menu is forcibly hidden.
   *     <br>Default value: MenuPolicy.DEFAULT
   *     <br>Since API version 12, the options parameter in this API is supported in atomic services. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

  /**
   * Exits the editing state.
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
 * Initialization parameters of TextInput.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TextInputOptions {
  /**
   * Sets the placeholder text displayed when there is no input. When not set, no placeholder text is displayed by
   * default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholder?: ResourceStr;

  /**
   * Sets the current text content of the input box. When not set, the default value is an empty string.
   *
   * It is recommended to bind the state variable to the text in real time through the onChange event,
   *
   * to avoid abnormal text content in TextInput when the component is refreshed.
   *
   * Since API version 10, this parameter supports [$$](docroot://ui/state-management/arkts-two-way-sync.md) two-way
   * binding variables.
   *
   * Since API version 18, this parameter supports
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters) two-
   * way binding variables.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  text?: ResourceStr;

  /**
   * Sets the TextInput controller. Pass this parameter when you need to call methods such as cursor setting and text
   * selection through the controller. When not set, there is no controller by default, and controller-related methods
   * cannot be used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: TextInputController;
}

/**
 * Text input style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum TextInputStyle {
  /**
   * Default style. The cursor is 1.5 vp wide, and the cursor height is related to the text selection highlight height
   * and font size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Default,

  /**
   * Inline input style, also called inline mode. The text selection highlight height is the same as the input box
   * height.
   *
   * Inline input is used in scenarios where there is a clear distinction between the editing state and the non-editing
   * state, for example, renaming in a file list view.
   *
   * The showError attribute is not supported.
   *
   * The showCounter attribute is not supported, and the character counter is not displayed in inline mode.
   *
   * In inline mode, dragging text into the input box is not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Inline,
}

/**
 * A single-line text input box component used to receive single-line text input from users. It supports multiple input
 * types (such as text, password, email, and number), custom styles (font, color, underline, decoration line, and more),
 * input filtering, password input mode, auto-fill, and other features. It is suitable for various scenarios such as
 * login and registration, search, and form filling. It can address common requirements such as text input validation,
 * formatting, and secure input, simplifying the development process, improving user experience, and enhancing data
 * security.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Newly added APIs in later versions are marked with a superscript
 * > to indicate their initial version.
 * >
 * > - This component supports only a single text style. To implement rich text style, use the
 * > [RichEditor]{@link ./rich_editor} component.
 * >
 * > - To set whether to clear text selection and handles when touching outside the text component, use the
 * > [setTextSelectionClearPolicy]{@link @ohos.arkui.UIContext:UIContext.setTextSelectionClearPolicy} API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface TextInputInterface {
  /**
   * Defines the constructor of TextInput.
   *
   * @param { TextInputOptions } value - Parameters of the TextInput component. The default value is undefined. When
   *     this parameter is not set, the input box is initialized to empty.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: TextInputOptions): TextInputAttribute;
}

/**
 * PasswordIcon object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface PasswordIcon {
  /**
   * Icon displayed when the password visibility can be toggled in password input mode. The system-provided password
   * icon is used by default.
   *
   * The string format can be used to load network images and local images.
   *
   * Network images support URLs in HTTP or HTTPS format; local images support the application resource path format.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onIconSrc?: string | Resource;

  /**
   * Icon displayed when the password visibility cannot be toggled in password input mode. The system-provided password
   * icon is used by default.
   *
   * The string format can be used to load network images and local images.
   *
   * Network images support URLs in HTTP or HTTPS format; local images support the application resource path format.
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
 * Callback for submission.
 *
 * @param { EnterKeyType } enterKey - Enter key type of the input method.
 * @param { SubmitEvent } event - Submit event. You can control whether to collapse the keyboard.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;

/**
 * Callback for text selection changes or cursor position changes.
 *
 * @param { number } selectionStart - Start position of the selected text. The start position of the text is 0.
 * @param { number } selectionEnd - End position of the selected text.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;

/**
 * Callback for text content scrolling.
 *
 * @param { number } totalOffsetX - Horizontal offset of the text in the content area, in px.
 * @param { number } totalOffsetY - Vertical offset of the text in the content area, in px.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;

/**
 * Paste callback.
 *
 * @param { string } content - Pasted text content.
 * @param { PasteEvent } event - User-defined paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnPasteCallback = (content: string, event: PasteEvent) => void;

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported:
 *
 * > **NOTE**
 * >
 * > By default, the default value of the universal attribute [padding]{@link CommonMethod#padding} is
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
 * > When underline mode is enabled for the input box, the default value of the universal attribute padding is
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
 * > When padding is set to 0 for the input box, you can set
 * > [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)} to 0 to
 * > prevent the cursor from being truncated. If the cursor is displayed abnormally at the edge of the text box, check
 * > whether this is caused by the padding and borderRadius attributes.
 * >
 * > Since API version 10, a single-line input box can be set with .width('auto') to make the component width adapt to
 * > the text width. During adaptation, the component width is limited by the constraintSize attribute and the maximum
 * > and minimum widths passed by the parent container. For other usage, see [Sizing]{@link ./common}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TextInputAttribute extends CommonMethod<TextInputAttribute> {
  /**
   * Sets the input box type.
   *
   * Different InputType values bring up the corresponding keyboard type and restrict input. When not set through this
   * interface, the default value is InputType.Normal.
   *
   * @param { InputType } value - Input box type.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type(value: InputType): TextInputAttribute;

  /**
   * Sets the autofill type.<!--RP7--><!--RP7End-->
   *
   * @param { ContentType } value - Autofill type. Value range: see ContentType Enum Description.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  contentType(value: ContentType): TextInputAttribute;

  /**
   * Sets whether to perform entity recognition on the selected text. This API depends on the text recognition
   * capability of the underlying device; otherwise, the setting does not take effect. When not set through this API,
   * entity recognition for the selected text is enabled by default, all types of entities are recognized, and the AI
   * menu feature is enabled.
   *
   * When enableSelectedDataDetector is set to true, all types of entities are recognized by default.
   *
   * After being enabled, entities such as emails, phone numbers, URLs, dates, and addresses in the selection can be
   * recognized, and the corresponding AI menu items are displayed in the text selection menu.
   *
   * When the AI menu feature is enabled, after text is selected in the component, the text selection menu can display
   * the corresponding AI menu items, including url (open link), email (create email), phoneNumber (call), address (
   * navigate to), and dateTime (create schedule) in [TextMenuItemId]{@link TextMenuItemId}.
   *
   * When the AI menu takes effect, the selected range must include exactly one complete AI entity for the corresponding
   * option to be displayed. This menu item does not appear together with the askAI menu item in
   * [TextMenuItemId]{@link TextMenuItemId}.
   *
   * This feature takes effect only when [CopyOptions]{@link CopyOptions} is CopyOptions.LocalDevice or
   * CopyOptions.CROSS_DEVICE.
   *
   * @param { boolean | undefined } enable - Whether to enable entity recognition for the selected text.
   *     <br>true: enables recognition; false: disables recognition.
   *     <br>When the value is undefined, the default value is used.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): TextInputAttribute;

  /**
   * Sets the placeholder text color. When not set through this interface, the default color follows the theme. On
   * Wearable devices, the default value is '#99ffffff' (white, with an opacity of 60%).
   *
   * @param { ResourceColor } value - Placeholder text color.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderColor(value: ResourceColor): TextInputAttribute;

  /**
   * Sets how text is displayed when it is too long. This is supported only in the editing and non-editing states when
   * the [TextInputStyle]{@link TextInputStyle} value is inline mode. When not set through this interface, the default
   * value is TextOverflow.Ellipsis in the non-editing state of inline mode, and TextOverflow.Clip in the editing state
   * of inline mode.
   *
   * Text truncation is performed by character. For example, English text is truncated by word as the minimum unit. To
   * truncate by letter, set the wordBreak attribute to WordBreak.BREAK_ALL.
   *
   * When overflow is set to TextOverflow.None, the effect is the same as TextOverflow.Clip.
   *
   * @param { TextOverflow } value - Display mode when the text is too long.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textOverflow(value: TextOverflow): TextInputAttribute;

  /**
   * Sets the indentation of the first line of text. When not set through this interface, the default value is 0.
   *
   * @param { Dimension } value - Indentation of the first line of text.
   *     <br>Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>Value range: greater than or equal to 0. If a negative value is set, the default value is used.
   * @returns { TextInputAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent(value: Dimension): TextInputAttribute;

  /**
   * Sets the placeholder text style, including font size, font weight, font family, and font style.
   *
   * > **NOTE**
   * >
   * > You can use [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} to register a custom font.
   *
   * @param { Font } value - Placeholder text style.
   *     <br>When this parameter is omitted, the default system font style is used.
   *     <br>On Wearable devices, the default font size is 18fp.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderFont(value?: Font): TextInputAttribute;

  /**
   * Sets the Enter key type of the input method. When not set through this interface, the default is EnterKeyType.Done.
   *
   * @param { EnterKeyType } value - Enter key type of the input method.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  enterKeyType(value: EnterKeyType): TextInputAttribute;

  /**
   * Sets the color of the input box caret. When not set through this API, the default value is '#007DFF' (blue), and on
   * Wearable devices the default value is '#5EA1FF' (blue, slightly lighter than '#007DFF').
   *
   * @param { ResourceColor } value - Color of the input box caret.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  caretColor(value: ResourceColor): TextInputAttribute;

  /**
   * Triggered when the input state changes.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead TextInputAttribute#onEditChange
   */
  onEditChanged(callback: (isEditing: boolean) => void): TextInputAttribute;

  /**
   * Triggered when the input state changes. The editing state is active when a cursor is present, and inactive when no
   * cursor is present.
   *
   * @param { function } callback - Callback invoked when the input state changes. The return value **true** indicates
   *     that the input box is in the editing state (a cursor is displayed and user input can be received); the return
   *     value **false** indicates that the input box is in the non-editing state (no cursor is displayed and user input
   *     cannot be received). [since 8 - 17]
   * @param { Callback<boolean> } callback - Callback invoked when the input state changes. The return value **true**
   *     indicates that the input box is in the editing state (a cursor is displayed and user input can be received);
   *     the return value **false** indicates that the input box is in the non-editing state (no cursor is displayed and
   *     user input cannot be received). [since 18]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onEditChange(callback: Callback<boolean>): TextInputAttribute;

  /**
   * Triggered when the Enter key on the input method is pressed.
   *
   * On non-TV devices, when the Enter key is pressed, the input box loses focus and the keyboard is collapsed by
   * default. You can configure whether to collapse the keyboard in the OnSubmitCallback callback. For details, see
   * [Example 2 (Set Underline)](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-2-set-underline).
   *
   * @param { function } callback - Callback for submission. [since 7 - 17]
   * @param { OnSubmitCallback } callback - Callback for submission. [since 18]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onSubmit(callback: OnSubmitCallback): TextInputAttribute;

  /**
   * Triggered when the input content changes.
   *
   * In this callback, if a cursor operation is performed, the developer needs to adjust the cursor logic based on the
   * previewText parameter in the preview scenario to adapt to the preview scenario.
   *
   * > **NOTE**
   * >
   * > onWillChange and onChange form a will/did timing pattern:
   * >
   * > - onWillChange is triggered before the text changes. It can return false to intercept the change; returning true
   * > allows the change, and then onChange is triggered.
   * >
   * > - onChange is triggered after the change is complete and cannot intercept the change.
   * >
   * > - The two can be used together: onWillChange is used for interception control, and onChange is used to obtain the
   * > change result.
   *
   * @param { function } callback - Callback invoked when the current input text content changes. [since 7 - 11]
   * @param { EditableTextOnChangeCallback } callback - Callback invoked when the current input text content
   *     changes. [since 12]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(callback: EditableTextOnChangeCallback): TextInputAttribute;

  /**
   * Triggered when the position of the text selection or the cursor position in editing state changes.
   *
   * @param { function } callback - Callback for the text selection change or cursor position change. [since 10 - 17]
   * @param { OnTextSelectionChangeCallback } callback - Callback for the text selection change or cursor position
   *     change. [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTextSelectionChange(callback: OnTextSelectionChangeCallback): TextInputAttribute;

  /**
   * Called when the text content scrolls.
   *
   * @param { function } callback - Callback for the text content scroll event. [since 10 - 17]
   * @param { OnContentScrollCallback } callback - Callback for the text content scroll event. [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onContentScroll(callback: OnContentScrollCallback): TextInputAttribute;

  /**
   * Sets the maximum number of characters that can be entered. When not set through this interface, unlimited input is
   * allowed by default.
   *
   * @param { number } value - Maximum number of characters that can be entered.
   *     <br>Value range: [0, 2^31-1]
   *     <br>**Note:**
   *     <br>When this attribute is not set or an invalid value is set, the default value is used. When a decimal is
   *     set, the integer part is used. When the set value exceeds the upper limit of the value range, the component may
   *     display or function abnormally. Do not exceed the upper limit.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxLength(value: number): TextInputAttribute;

  /**
   * Sets the font color. When not set through this interface, the default color follows the theme. On Wearable devices,
   * the default value is '#dbffffff' (white, with an opacity of 86%).
   *
   * @param { ResourceColor } value - Font color.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): TextInputAttribute;

  /**
   * Sets the font size. When not set through this interface, the default font size is 16fp, and the default value on
   * Wearable devices is 18fp.
   *
   * @param { Length } value - Font size. When fontSize is of the number type, the unit fp is used. Percentage strings
   *     are not supported.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: Length): TextInputAttribute;

  /**
   * Sets the font style. When not passed through this interface, the default value is FontStyle.Normal.
   *
   * @param { FontStyle } value - Font style.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): TextInputAttribute;

  /**
   * Sets the font weight of the text. If the value is too large, the text may be truncated under different fonts. When
   * not set through this interface, the default value is FontWeight.Normal.
   *
   * @param { number | FontWeight | string } value - Font weight of the text. For the number type, the value ranges from
   *     100 to 900, with an interval of 100. A larger value indicates a heavier font. For the string type, only the
   *     string form of the number type value is supported, for example, "400", as well as "bold", "bolder", "lighter",
   *     "regular", and "medium", which correspond to the respective enum values in FontWeight.
   *     <br>Since API version 20, the Resource type is supported. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - Font weight of the text. For the number type, the value ranges
   *     from 100 to 900, with an interval of 100. A larger value indicates a heavier font. For the string type, only
   *     the string form of the number type value is supported, for example, "400", as well as "bold", "bolder", "
   *     lighter", "regular", and "medium", which correspond to the respective enum values in FontWeight.
   *     <br>Since API version 20, the Resource type is supported. [since 20]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): TextInputAttribute;

  /**
   * Sets the font list. When not set through this interface, the default font is 'HarmonyOS Sans'.
   *
   * > **NOTE**
   * >
   * > It is recommended that you use [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} to
   * > register custom fonts.
   *
   * @param { ResourceStr } value - Font list. When multiple fonts are used, separate them with commas ','. The font
   *     priority takes effect in order. For example: 'Arial,HarmonyOS Sans'.
   *     <br>Applications currently support the 'HarmonyOS Sans' font and custom fonts.
   *     <br>Cards currently support only the 'HarmonyOS Sans' font.
   *     <br>Wearable devices support the 'HarmonyOS Sans' font and custom fonts.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: ResourceStr): TextInputAttribute;

  /**
   * Sets an input filter through a regular expression. Input that matches the expression is allowed to be displayed,
   * and input that does not match is filtered out. In single-character input scenarios, only single-character matching
   * is supported; in multi-character input scenarios, such as pasting, string matching is supported. When not set
   * through this interface, there is no input filtering rule by default, and all input is allowed to be displayed.
   *
   * Since API version 11, setting inputFilter with a non-empty input character causes the text filtering effect
   * attached to the [type]{@link TextInputAttribute#type} interface to become invalid.
   *
   * @param { ResourceStr } value - Regular expression.
   * @param { function } error - Returns the filtered content when the regular expression matching fails. [since 8 - 17]
   * @param { Callback<string> } [error] - Returns the filtered content when the regular expression matching
   *     fails. [since 18]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  inputFilter(value: ResourceStr, error?: Callback<string>): TextInputAttribute;

  /**
   * Triggered when a copy operation is performed.
   *
   * @param { function } callback - Callback used to return the copied text content. [since 8 - 17]
   * @param { Callback<string> } callback - Callback used to return the copied text content. [since 18]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCopy(callback: Callback<string>): TextInputAttribute;

  /**
   * This callback is triggered before a copy operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCopy and onCopy form a will/did timing pattern:
   * >
   * > - onWillCopy is triggered before the copy operation. It can intercept the copy operation by returning false;
   * > returning true allows the copy, and onCopy is then triggered.
   * >
   * > - onCopy is triggered after the copy operation is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillCopy is used for interception control, and onCopy is used to obtain the
   * > copy result.
   *
   * @param { Callback<string, boolean> } callback - Callback before the copy operation. When the callback parameter
   *     type is string, it indicates the text content to be copied. When the callback parameter type is boolean, it
   *     indicates whether the currently selected text is allowed to be copied. true: the text is allowed to be copied,
   *     and the normal copy operation is performed; false: the text is not allowed to be copied, this copy operation is
   *     intercepted, and the text will not be copied to the clipboard.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Callback<string, boolean>): TextInputAttribute;

  /**
   * Triggered when a cut operation is performed.
   *
   * @param { function } callback - Callback used to return the cut text content. [since 8 - 17]
   * @param { Callback<string> } callback - Callback used to return the cut text content. [since 18]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCut(callback: Callback<string>): TextInputAttribute;

  /**
   * Triggered before the cut operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCut and onCut form a will/did timing pattern:
   * >
   * > - onWillCut is triggered before the cut operation. Returning false intercepts the cut operation; returning true
   * > allows the cut, and then onCut is triggered.
   * >
   * > - onCut is triggered after the cut operation is completed and cannot be intercepted.
   * >
   * > - The two can be used together: onWillCut is used for interception control, and onCut is used to obtain the cut
   * > result.
   *
   * @param { Callback<string, boolean> } callback - Callback invoked before the cut operation. When the callback
   *     parameter type is string, it indicates the text content to be cut. When the callback parameter type is boolean,
   *     it indicates whether the currently selected text is allowed to be cut. true: the text is allowed to be cut and
   *     the normal cut operation is performed; false: the text is not allowed to be cut, this cut operation is
   *     intercepted, and the text is neither cut to the clipboard nor deleted from the input box.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCut(callback: Callback<string, boolean>): TextInputAttribute;

  /**
   * Triggered when a paste operation is performed.
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
   * Sets whether the input text can be copied. When CopyOptions.None is set, only paste and select all are supported.
   * When CopyOptions.None is set, dragging is not allowed. When not set through this interface, the default value is
   * CopyOptions.LocalDevice, which supports copying within the device.
   *
   * @param { CopyOptions } value - Whether the input text can be copied.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): TextInputAttribute;

  /**
   * Sets whether to display the icon at the end of the input box in password mode. When not set through this interface,
   * the default value is false on TV devices and true on other devices.
   *
   * @param { boolean } value - Whether to display the icon at the end of the input box in password input mode.
   *     <br>true indicates display, and false indicates no display.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  showPasswordIcon(value: boolean): TextInputAttribute;

  /**
   * Sets the horizontal alignment of text in the input box. When not set through this interface, the default value is
   * TextAlign.Start.
   *
   * TextAlign.Start, TextAlign.Center, and TextAlign.End are supported. TextAlign.JUSTIFY is processed as
   * TextAlign.Start.
   *
   * The [align]{@link CommonMethod#align(value: Alignment)} attribute can be used to control the vertical position of
   * the text paragraph. This component does not support controlling the horizontal position of the text paragraph
   * through the align attribute.
   *
   * - Alignment.TopStart, Alignment.Top, Alignment.TopEnd: The content is aligned to the top.
   * - Alignment.Start, Alignment.Center, Alignment.End: The content is vertically centered.
   * - Alignment.BottomStart, Alignment.Bottom, Alignment.BottomEnd: The content is aligned to the bottom.
   *
   * @param { TextAlign } value - Horizontal alignment of the text in the input box.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  textAlign(value: TextAlign): TextInputAttribute;

  /**
   * Sets the input box to the default style or inline input style. The inline input style supports only the
   * InputType.Normal type.
   *
   * For details about the input box types, see [type]{@link TextInputAttribute#type}. When not set through this
   * interface, the default value is TextInputStyle.Default.
   *
   * @param { TextInputStyle | TextContentStyle } value - Input box in the default style or inline input style.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  style(value: TextInputStyle | TextContentStyle): TextInputAttribute;

  /**
   * Sets the caret style.
   *
   * @param { CaretStyle } value - Caret style, used to customize the display style of the caret. The configuration
   *     items include width (caret width) and color (caret color). When not set, the system default caret style is
   *     used.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  caretStyle(value: CaretStyle): TextInputAttribute;

  /**
   * Sets the highlight color of the selected text. If the opacity is not set or is set to fully opaque, 20% opacity is
   * used by default. When not set through this API, the default value is '#007DFF' (blue), and on Wearable devices the
   * default value is '#1F71FF' (blue, slightly darker than '#007DFF').
   *
   * @param { ResourceColor } value - Highlight color of the selected text.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): TextInputAttribute;

  /**
   * Sets the caret position.
   *
   * @param { number } value - Caret position.
   *     <br>The position before the first character is 0.
   *     <br>When the value is less than 0, 0 is used; when it is greater than the text length, the caret is displayed
   *     at the end of the text.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  caretPosition(value: number): TextInputAttribute;

  /**
   * Sets whether to actively bring up the soft keyboard when TextInput gains focus by means other than tapping. When
   * not set through this interface, the default value is false on TV devices and true on other devices.
   *
   * Since API version 10, focus gain is bound to the input method by default.
   *
   * @param { boolean } value - Whether to actively bring up the soft keyboard when focus is gained by means other than
   *     tapping.
   *     <br>The value true means to actively bring up the soft keyboard, and false means not to actively bring it up.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableKeyboardOnFocus(value: boolean): TextInputAttribute;

  /**
   * Sets the icon at the end of the input box in password mode. When not set through this interface, the system-
   * provided password icon is used by default. Image formats including jpg, png, bmp, heic, and webp are supported. The
   * fixed size of this icon is 24 vp, and the default size on Wearable devices is 28 vp. If the referenced icon is too
   * large or too small, it is displayed at the fixed size.
   *
   * @param { PasswordIcon } value - Icon at the end of the input box in password input mode.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  passwordIcon(value: PasswordIcon): TextInputAttribute;

  /**
   * Sets the error text to display in the error state or hides the error state.
   *
   * When the parameter type is ResourceStr and the input content does not comply with the defined specification, the
   * error text is displayed. When the single-line error text is too long, an ellipsis is displayed at the end. When the
   * parameter type is undefined, the error state is not displayed. See
   * [Example 2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-2-set-underline).
   *
   * @param { string | undefined } value - Error text to display in the error state, or no error state is displayed.
   *     <br>Not displayed by default.
   *     <br>On Wearable devices, the font size is 13fp and the alignment is center.
   *     <br>**Note:**
   *     <br>Since API version 12, value supports the Resource type.
   *     <br>The inline mode of [TextInputStyle]{@link TextInputStyle} is not supported. [since 10 - 11]
   * @param { ResourceStr | undefined } [value] - Error text to display in the error state, or no error state is
   *     displayed.
   *     <br>Not displayed by default.
   *     <br>On Wearable devices, the font size is 13fp and the alignment is center.
   *     <br>**Note:**
   *     <br>Since API version 12, value supports the Resource type.
   *     <br>The inline mode of [TextInputStyle]{@link TextInputStyle} is not supported. [since 12]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showError(value?: ResourceStr | undefined): TextInputAttribute;

  /**
   * Sets a control as the unit of the text box. It must be used together with
   * [showUnderline]{@link TextInputAttribute#showUnderline} and takes effect only when showUnderline is set to true.
   *
   * @param { CustomBuilder } value - Unit displayed in the text box during text input.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showUnit(value: CustomBuilder): TextInputAttribute;

  /**
   * Sets whether to enable the underline. When not set through this interface, the underline is not displayed by
   * default. The default underline color is '#33182431' (dark gray with an opacity of 20%), the default thickness is 1
   * px, the text box size is 48vp, and the underline supports only the InputType.Normal type. When password mode is
   * set, the underline does not take effect.
   *
   * @param { boolean } value - Whether to enable the underline.
   *     <br>The value **true** means to enable the underline, and **false** means the opposite.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showUnderline(value: boolean): TextInputAttribute;

  /**
   * Sets the underline color. When not passed through this interface, the underline color configured by the theme is
   * used by default. The default underline color configured by the theme is '#33182431' (dark gray, with an opacity of
   * 20%).
   *
   * When the input box underline [showUnderline]{@link TextInputAttribute#showUnderline} is enabled, the underline
   * color can be configured.
   *
   * @param { ResourceColor | UnderlineColor | undefined } value - Sets the underline color.
   *     <br>When the underline color mode is set, the underline color is modified. When only the color in the non-
   *     special state is set, a ResourceColor can be directly input. When the value is set to undefined, null, or an
   *     invalid value, all underlines are restored to the default value.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  underlineColor(value: ResourceColor | UnderlineColor | undefined): TextInputAttribute;

  /**
   * Sets whether to hide the system text selection menu. When not set through this interface, the system text selection
   * menu is displayed by default.
   *
   * @param { boolean } value - Whether to hide the system text selection menu.
   *     <br>When set to **true**, the system text selection menu is hidden when the input box cursor is clicked, the
   *     input box is long pressed, double-clicked, or triple-clicked, or the input box is right-clicked.
   *     <br>When set to **false**, the system text selection menu is displayed.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectionMenuHidden(value: boolean): TextInputAttribute;

  /**
   * Sets the display mode of the scroll bar in the inline input style editing state. When not set through this API, the
   * default value is BarState.Auto.
   *
   * @param { BarState } value - Display mode of the scroll bar in the inline input style editing state. This attribute
   *     takes effect only when the inline mode is set.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barState(value: BarState): TextInputAttribute;

  /**
   * Sets the maximum number of lines that can be displayed for text in the inline input style editing state. When not
   * set through this interface, the default value is 3.
   *
   * @param { number } value - Maximum number of lines that can be displayed for text in the inline input style editing
   *     state. This attribute takes effect only when inline mode is set and the component is in the editing state.
   *     <br>Value range: (0, UINT32_MAX]. If 0 or a negative number is passed in, the default value 3 is used; if the
   *     value exceeds UINT32_MAX, it is automatically corrected to UINT32_MAX.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxLines(value: number): TextInputAttribute;

  /**
   * Sets the text line break rule. This attribute takes effect when the component is set to the inline mode of
   * [TextInputStyle]{@link TextInputStyle}, but it does not apply to placeholder text. When not set through this
   * interface, the default value is WordBreak.BREAK_WORD.
   *
   * @param { WordBreak } value - Line break rule in the editing state of the inline input style.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  wordBreak(value: WordBreak): TextInputAttribute;

  /**
   * Sets the line breaking rule. This attribute takes effect only when wordBreak is not equal to BREAK_ALL, and hyphens
   * are not supported. When not set through this interface, the default value is LineBreakStrategy.GREEDY.
   *
   * This attribute applies to scenarios where the text wrapping effect needs to be optimized: LineBreakStrategy.GREEDY
   * is suitable for fast line breaking that fills each line first; LineBreakStrategy.HIGH_QUALITY is suitable for
   * typesetting that pursues a better visual effect; LineBreakStrategy.BALANCED is suitable for layouts that require
   * even distribution of content across lines.
   *
   * @param { LineBreakStrategy } strategy - Line breaking rule of the text.
   *     <br>LineBreakStrategy.GREEDY indicates greedy line breaking, which fills each line first;
   *     LineBreakStrategy.HIGH_QUALITY indicates high-quality line breaking, which balances line length;
   *     LineBreakStrategy.BALANCED indicates balanced line breaking, which optimizes typesetting aesthetics.
   *     <br>**Note:**
   *     <br>This attribute takes effect only when the inline mode of [TextInputStyle]{@link TextInputStyle} is set.
   * @returns { TextInputAttribute } The attribute of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineBreakStrategy(strategy: LineBreakStrategy): TextInputAttribute;

  /**
   * Sets a custom keyboard.
   *
   * When a custom keyboard is set, the system input method is not opened after the input box is activated; instead, the
   * specified custom component is loaded.
   *
   * The height of the custom keyboard can be set through the height attribute of the root node of the custom component.
   * The width cannot be set and uses the system default value.
   *
   * The custom keyboard is presented by overlaying the original UI. When the avoidance mode is not enabled or the input
   * box does not need avoidance, the original application UI is not compressed or lifted.
   *
   * The custom keyboard cannot obtain focus, but it intercepts gesture events.
   *
   * By default, the custom keyboard is closed when the input control loses focus. Developers can also control the
   * closing of the keyboard through the [TextInputController]{@link TextInputController}.
   * [stopEditing]{@link TextInputController#stopEditing} method.
   *
   * When a custom keyboard is set, the input from a physical keyboard can be avoided by binding the
   * [onKeyPreIme]{@link CommonMethod#onKeyPreIme} event.
   *
   * Since API version 23, a custom keyboard can enable continuation through
   * [setCustomKeyboardContinueFeature]{@link @ohos.arkui.UIContext:UIContext.setCustomKeyboardContinueFeature}. When
   * switching to another custom keyboard, the switch is performed directly without triggering the keyboard closing and
   * opening animations.
   *
   * > **NOTE**
   * >
   * > This API cannot be called in [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { CustomBuilder } value - Custom keyboard. When the value is set to undefined, the custom keyboard is
   *     closed. [since 10 - 21]
   * @param { CustomBuilder | ComponentContent | undefined } value - Custom keyboard. When the value is set to
   *     undefined, the custom keyboard is closed. [since 22]
   * @param { KeyboardOptions } [options] - Sets whether the custom keyboard supports avoidance.
   *     <br>When this parameter is not set, the custom keyboard does not support avoidance by default. [since 12]
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): TextInputAttribute;

  /**
   * Sets whether to display the counter when the number of characters entered through InputCounterOptions exceeds the
   * threshold. When the showCounter API is not called, the counter is not displayed by default.
   *
   * Only when the value parameter is true can options be set. The text box enables the counter subscript feature, which
   * must be used together with [maxLength]{@link TextInputAttribute#maxLength} (which sets the maximum character limit
   * ). The character counter displays the current number of entered characters / the maximum number of enterable
   * characters.
   *
   * When the number of entered characters is greater than the maximum number of characters multiplied by the percentage
   * value, the character counter is displayed. If the user does not set InputCounterOptions when setting the counter,
   * the border and the counter subscript turn red when the current number of entered characters exceeds the maximum
   * number of characters. If the user sets the value parameter to true and
   * [InputCounterOptions]{@link InputCounterOptions} at the same time, when the thresholdPercentage value is within the
   * valid range and the number of entered characters exceeds the maximum number of characters, the border and the
   * counter subscript turn red and the box shakes. If highlightBorder is set to false, the red border is not displayed,
   * the counter is displayed in red by default, and the box shakes.
   *
   * The character counter is not displayed in the inline mode of [TextInputStyle]{@link TextInputStyle} or in
   * [Password Mode](docroot://ui/arkts-common-components-text-input.md#password-mode).
   *
   * [Example 5 (Setting the Counter)](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-5-setting-the-counter)
   * shows the effect of setting showCounter.
   *
   * > **NOTE**
   * >
   * > Since API version 12, this API is supported in [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { boolean } value - Whether to display the counter.
   *     <br>The value true means to display the counter, and false means not to display it.
   * @param { InputCounterOptions } options - Configuration options of the counter, used to set the counter threshold
   *     percentage, border highlight, and so on. This parameter is passed in when the counter display rules need to be
   *     customized. When it is not passed in, the default counter configuration is used (threshold percentage 100%,
   *     border highlight true).
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  showCounter(value: boolean, options?: InputCounterOptions): TextInputAttribute;

  /**
   * Sets the style of the right-side clear button. Only image-type icons are supported. The inline mode of
   * [TextInputStyle]{@link TextInputStyle} is not supported. For an example, see
   * [Example 4: Setting the Style of the Clear Button on the Right](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-4-setting-the-style-of-the-clear-button-on-the-right).
   * When not set through this interface, the default value is {
   *
   * style: CancelButtonStyle.INPUT
   *
   * }, and the default icon size on Wearable devices is 28 vp.
   *
   * @param { object } value - indicates the style of the cancel button. [since 11 - 17]
   * @param { CancelButtonOptions } options - Style options of the right-side clear button. [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  cancelButton(options: CancelButtonOptions): TextInputAttribute;

  /**
   * Sets the style of the clear button on the right. Only symbol icons are supported. The inline mode of
   * [TextInputStyle]{@link TextInputStyle} is not supported. For details, see
   * [Example 15: Setting a Symbol-Type Clear Button](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-15-setting-a-symbol-type-clear-button).
   * When not set through this interface, the default value is {
   *
   * style: CancelButtonStyle.INPUT
   *
   * }.
   *
   * @param { CancelButtonSymbolOptions } symbolOptions - Style of the clear button on the right.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  cancelButton(symbolOptions: CancelButtonSymbolOptions): TextInputAttribute;

  /**
   * Sets whether to select all text in the initial state. The inline mode of [TextInputStyle]{@link TextInputStyle} is
   * not supported. When not set through this interface, text is not selected by default.
   *
   * @param { boolean } value - Whether to select all text.
   *     <br>**true** indicates that all text is selected, and **false** indicates that no text is selected.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectAll(value: boolean): TextInputAttribute;

  /**
   * Sets the minimum display font size of the text. The string type supports the string form of the number type value,
   * which can carry a unit, for example, "10" and "10fp".
   *
   * This attribute must be used together with [maxFontSize]{@link TextInputAttribute#maxFontSize} and
   * [maxLines]{@link TextInputAttribute#maxLines} (used when the component is set to the inline input style and in the
   * editing state) or layout size constraints. Setting it alone does not take effect.
   *
   * When adaptive font size takes effect, the fontSize setting does not take effect.
   *
   * When minFontSize is less than or equal to 0, adaptive font size does not take effect. In this case, the value of
   * the [fontSize]{@link TextInputAttribute#fontSize} attribute takes effect; when it is not set, its default value
   * takes effect.
   *
   * @param { number | string | Resource } value - Minimum display font size of the text.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>Must be greater than 0. When it is less than or equal to 0, adaptive font size does not take effect, and
   *     the fontSize attribute value takes effect.
   *     <br>Must be used together with maxFontSize. Setting it alone does not take effect.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minFontSize(value: number | string | Resource): TextInputAttribute;

  /**
   * Sets the maximum display font size of the text. The string type supports the string form of a number value, which
   * can carry a unit, for example, "10" and "10fp".
   *
   * This attribute must be used together with [minFontSize]{@link TextInputAttribute#minFontSize} and
   * [maxLines]{@link TextInputAttribute#maxLines} (used when the component is set to the inline input style and is in
   * editing state) or layout size constraints; setting it alone does not take effect.
   *
   * When adaptive font size takes effect, the fontSize setting does not take effect.
   *
   * When maxFontSize is less than or equal to 0, or maxFontSize is less than minFontSize, adaptive font size does not
   * take effect. In this case, the value of the [fontSize]{@link TextInputAttribute#fontSize} attribute takes effect;
   * when it is not set, its default value takes effect.
   *
   * @param { number | string | Resource } value - Maximum display font size of the text.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>Must be greater than 0 and greater than minFontSize; otherwise, adaptive font size does not take effect,
   *     and the value of the fontSize attribute takes effect.
   *     <br>Must be used together with minFontSize; setting it alone does not take effect.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxFontSize(value: number | string | Resource): TextInputAttribute;

  /**
   * Sets the text height adaptation mode when the component is set to the inline input style. When not set through this
   * API, the default value is TextHeightAdaptivePolicy.MAX_LINES_FIRST.
   *
   * When set to TextHeightAdaptivePolicy.MAX_LINES_FIRST, the [maxLines]{@link TextInputAttribute#maxLines} attribute
   * is preferentially used to adjust the text height. If the layout size using the maxLines attribute exceeds the
   * layout constraints, the font is reduced within the range of [minFontSize]{@link TextInputAttribute#minFontSize} and
   * [maxFontSize]{@link TextInputAttribute#maxFontSize} to display more text.
   *
   * When set to TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST, the minFontSize attribute is preferentially used to
   * adjust the text height. If the text can be laid out in a single line using the minFontSize attribute, the font is
   * enlarged within the range of minFontSize and maxFontSize and the maximum font size is used.
   *
   * When set to TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST, the effect is the same as that of
   * TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST.
   *
   * When the component is set to a non-inline input style, the three modes of setting the text height adaptation (
   * TextHeightAdaptivePolicy) have the same effect, that is, the font is reduced within the range of minFontSize and
   * maxFontSize to display more text.
   *
   * > **NOTE**
   * >
   * > When the component is set to the inline input style, the font size may be inconsistent between the editing state
   * > and the non-editing state.
   *
   * @param { TextHeightAdaptivePolicy } value - Text height adaptation mode. This attribute takes effect only when the
   *     inline input style is set.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextInputAttribute;

  /**
   * Sets whether to enable auto-fill. When not set through this interface, auto-fill is enabled by default.<!--RP6--><!
   * --RP6End-->
   *
   * @param { boolean } value - Whether to enable auto-fill.
   *     <br>The value **true** means to enable auto-fill, and **false** means the opposite.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableAutoFill(value: boolean): TextInputAttribute;

  /**
   * Sets the type, style, and color of the text decoration line. When not set through this interface, the default value
   * is {
   *
   * &nbsp;type:&nbsp;TextDecorationType.None,
   *
   * &nbsp;color:&nbsp;Color.Black,
   *
   * &nbsp;style:&nbsp;TextDecorationStyle.SOLID,
   *
   * &nbsp;thicknessScale:&nbsp;1.0
   *
   * }.
   *
   * @param { TextDecorationOptions } value - Text decoration line object.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  decoration(value: TextDecorationOptions): TextInputAttribute;

  /**
   * Sets the character spacing of the text. When this value is set to a percentage, the default value is used. When
   * this value is set to 0, the default value is used. The string type supports the string form of the number type
   * value, and a unit can be attached, for example, "10" and "10fp".
   *
   * When the value is negative, the text is compressed. If the negative value is too small, the size of the component
   * content area is compressed to 0, resulting in no content being displayed.
   *
   * This attribute takes effect on each character, including the character at the end of a line.
   *
   * @param { number | string | Resource } value - Character spacing of the text.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing(value: number | string | Resource): TextInputAttribute;

  /**
   * Sets the line height of the text.
   *
   * When the value is not greater than 0, the text line height is not limited and adapts to the font size. For the
   * number type, the unit is fp. For the string type, the string form of the number type value is supported, and a unit
   * can be attached, for example, "10" and "10fp".
   *
   * > **NOTE**
   * >
   * > - When the font height of a special character is far greater than that of other characters in the same line, the
   * > text box may display unexpected anomalies such as truncation, occlusion, and changes in the relative positions of
   * > content. In this case, you need to adjust the component height, line height, and other attributes, and modify the
   * > corresponding page layout.
   * >
   * > - When [Password Mode](docroot://ui/arkts-common-components-text-input.md#password-mode) is set, setting the line
   * > height [lineHeight]{@link TextInputAttribute#lineHeight} through this API does not take effect.
   *
   * @param { number | string | Resource } value - Text line height.
   *     <br>For the number type, the unit is fp.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight(value: number | string | Resource): TextInputAttribute;

  /**
   * Defines the rules for generating a password. When auto-fill is triggered, the set password rules are passed to the
   * password vault for generating a new password.<!--RP1--><!--RP1End-->
   *
   * @param { string } value - Defines the rules for generating a password.
   *     <br>**Note:**
   *     <br>You must first set [enableAutoFill]{@link TextInputAttribute#enableAutoFill} to enable auto-fill and set
   *     [contentType]{@link TextInputAttribute#contentType} to NEW_PASSWORD. This attribute takes effect when auto-fill
   *     is triggered.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  passwordRules(value: string): TextInputAttribute;

  /**
   * Sets the font feature of the text style, such as monospaced digits.
   *
   * The format is: normal \| \<feature-tag-value\>
   *
   * The format of \<feature-tag-value\> is: \<string\> \[ \<integer\> \| on \| off ]
   *
   * There can be multiple \<feature-tag-value\> values, separated by commas (,).
   *
   * For example, the input format for using monospaced digits is "ss01" on.
   *
   * @param { string } value - Text feature effect, used to set the advanced typography capabilities of OpenType fonts (
   *     such as monospaced digits and ligatures). The format is normal or <feature-tag-value>, for example, "ss01" on.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): TextInputAttribute;

  /**
   * Sets the visibility state of the password. When not set through this interface, the password is not displayed by
   * default.
   *
   * When [InputType]{@link InputType} is set to Password, NEW_PASSWORD, or NUMBER_PASSWORD mode, the password
   * protection feature takes effect. In non-password input modes, this feature is not triggered.
   *
   * In [password mode](docroot://ui/arkts-common-components-text-input.md#password-mode), the state on the backend of
   * the input box and the state management variable on the frontend application side may become inconsistent, which may
   * cause an abnormal state of the trailing icon. It is recommended that you add state synchronization in
   * [onSecurityStateChange]{@link TextInputAttribute#onSecurityStateChange}. For details, see
   * [Example 1 (Setting and Obtaining the Cursor Position)](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-1-setting-and-obtaining-the-cursor-position).
   *
   * @param { boolean } visible - Whether to display the password.
   *     <br>The value **true** means to display the password, and **false** means not to display the password.
   *     <br>It is recommended that you synchronize the state in the
   *     [onSecurityStateChange]{@link TextInputAttribute#onSecurityStateChange} callback to avoid an abnormal state of
   *     the trailing icon.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showPassword(visible: boolean): TextInputAttribute;

  /**
   * Triggered when the password display state changes.
   *
   * > **NOTE**
   * >
   * > Since API version 20, this API is supported in [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Callback<boolean> } callback - Callback function.
   *     <br>The value **true** indicates that the password is displayed, and **false** indicates that the password is
   *     hidden.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onSecurityStateChange(callback: Callback<boolean>): TextInputAttribute;

  /**
   * Triggered when text is about to be inserted.
   *
   * > **NOTE**
   * >
   * > onWillInsert and onDidInsert form a will/did timing pattern:
   * >
   * > - onWillInsert is triggered before the input operation. You can return false to intercept the input operation;
   * > returning true allows the input, and then onDidInsert is triggered.
   * >
   * > - onDidInsert is triggered after the input is completed and cannot intercept the operation.
   * >
   * > - The two can be used together: onWillInsert is used for interception control, and onDidInsert is used to obtain
   * > the input result.
   *
   * @param { Callback<InsertValue, boolean> } callback - Callback invoked when text is about to be inserted.
   *     <br>When the callback parameter type is InsertValue, it contains information such as the text content to be
   *     inserted. When the callback parameter type is boolean, it indicates whether to allow this insertion. Returning
   *     true allows the text to be inserted into the input box normally; returning false intercepts this insertion
   *     operation, and the text will not be inserted. Developers can use this callback to filter and intercept the
   *     input content.
   *     <br>This callback is not triggered during preview and candidate word operations.
   *     <br>It is supported only in scenarios where the system input method is used for input.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): TextInputAttribute;

  /**
   * Triggered when input is complete.
   *
   * @param { Callback<InsertValue> } callback - Callback invoked when input is complete.
   *     <br>Only supported in the scenario where the system input method is used.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidInsert(callback: Callback<InsertValue>): TextInputAttribute;

  /**
   * Triggered when the text is about to be deleted.
   *
   * > **NOTE**
   * >
   * > - Tapping the clear button does not trigger the onWillDelete callback.
   * >
   * > - onWillDelete and onDidDelete form a will/did timing pattern:
   * >
   * > - onWillDelete is triggered before the deletion operation. You can return false to intercept the deletion
   * > operation; returning true allows the deletion, and then onDidDelete is triggered.
   * >
   * > - onDidDelete is triggered after the deletion is complete and cannot intercept the operation.
   * >
   * > - The two can be used together: onWillDelete is used for interception control, and onDidDelete is used to obtain
   * > the deletion result.
   *
   * @param { Callback<DeleteValue, boolean> } callback - Callback invoked when the text is about to be deleted.
   *     <br>When the callback parameter type is DeleteValue, it contains information such as the text content to be
   *     deleted. When the callback parameter type is boolean, it indicates whether to allow this deletion. Returning
   *     true allows the text to be deleted normally; returning false intercepts this deletion operation, and the text
   *     will not be deleted. Developers can use this callback to intercept and control the deletion operation.
   *     <br>This callback is not triggered during the preview deletion operation.
   *     <br>It is supported only in the scenario where the system input method is used for input.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): TextInputAttribute;

  /**
   * Triggered when the deletion is complete.
   *
   * > **NOTE**
   * >
   * > - Tapping the clear button does not trigger the onDidDelete callback.
   * >
   * > - onWillDelete and onDidDelete form a will/did timing pattern:
   * >
   * > - onWillDelete is triggered before the deletion operation and can intercept the deletion by returning false;
   * > returning true allows the deletion, after which onDidDelete is triggered.
   * >
   * > - onDidDelete is triggered after the deletion is complete and cannot intercept it.
   * >
   * > - The two can be used together, with onWillDelete for interception control and onDidDelete for obtaining the
   * > deletion result.
   *
   * @param { Callback<DeleteValue> } callback - Callback invoked when the deletion is complete.
   *     <br>Supported only in the scenario where the input is provided by the system input method.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDelete(callback: Callback<DeleteValue>): TextInputAttribute;

  /**
   * Triggered before the input box is about to bind to the input method.
   *
   * <!--Del-->
   *
   * Before the input box is about to bind to the input method, you can set the keyboard style through the system API
   * [setKeyboardAppearanceConfig]{@link @ohos.arkui.UIContext:UIContext#setKeyboardAppearanceConfig} of `UIContext`. <!
   * --DelEnd-->
   *
   * Since API version 22, you can call [setExtraConfig]{@link IMEClient.setExtraConfig} of [IMEClient]{@link IMEClient}
   * to set the input method extension information. After the input method is successfully bound, the input method
   * receives the extension information and can implement custom functions based on it.
   *
   * IMEClient is valid only during the execution of onWillAttachIME and cannot be called asynchronously.
   *
   * > **NOTE**
   * >
   * > This API cannot be called in [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Callback<IMEClient> } callback - Triggered before the input box is about to bind to the input method.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient>): TextInputAttribute;

  /**
   * Sets custom menu extension items, allowing users to set the text content, icon, and callback method of the
   * extension items.
   *
   * When [disableMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableMenuItems} or
   * [disableSystemServiceMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableSystemServiceMenuItems} is
   * called to block the system service menu items in the text selection menu, the input parameter list of the callback
   * method [onCreateMenu]{@link EditMenuOptions.onCreateMenu} in the editMenuOptions API does not include the blocked
   * menu options.
   *
   * @param { EditMenuOptions } editMenu - Extended menu options.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): TextInputAttribute;

  /**
   * Sets whether to enable input preview. When this API is not used to set it, input preview is enabled by default.
   *
   * Preview content is defined as a temporary text state, and the text interception feature is not supported currently.
   *
   * @param { boolean } enable - Whether to enable input preview.
   *     <br>The value **true** means to enable input preview, and **false** means not to enable input preview.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): TextInputAttribute;

  /**
   * Sets the text mode of the auto-capitalization mode. This API only provides the interface capability, and the
   * specific implementation is subject to the input method application. When not set through this interface, no
   * capitalization conversion takes effect by default, and the specific implementation is subject to the input method
   * application.
   *
   * @param { AutoCapitalizationMode } mode - Auto-capitalization mode, used to set the capitalization conversion rule
   *     of the input method. The specific implementation is subject to the input method application.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): TextInputAttribute;

  /**
   * Sets whether to enable haptic feedback. If this attribute is not used, haptic feedback is enabled by default.
   *
   * When haptic feedback is enabled, you need to set the **requestPermissions** field in the
   * [module.json5](docroot://quick-start/module-configuration-file.md) of the project to enable the vibration
   * permission. The configuration is as follows:
   *
   * @param { boolean } isEnabled - Whether to enable haptic feedback.
   *     <br>The value **true** means to enable haptic feedback, and **false** means the opposite.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): TextInputAttribute;

  /**
   * Sets the ellipsis position. The ellipsisMode attribute takes effect only in the inline mode of
   * [TextInputStyle]{@link TextInputStyle}, and must be used together with
   * [textOverflow]{@link TextInputAttribute#textOverflow} set to TextOverflow.Ellipsis. Setting the ellipsisMode
   * attribute alone does not take effect. When not set through this interface, the default value is EllipsisMode.END.
   *
   * It takes effect normally in the non-editing state. In the editing state, EllipsisMode.START and EllipsisMode.CENTER
   * take effect only when maxLines is set to 1, while EllipsisMode.END, EllipsisMode.MULTILINE_START, and
   * EllipsisMode.MULTILINE_CENTER take effect normally.
   *
   * @param { Optional<EllipsisMode> } mode - Ellipsis position.
   * @returns { TextInputAttribute } The attribute of TextInput.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ellipsisMode(mode: Optional<EllipsisMode>): TextInputAttribute;

  /**
   * Sets the style of the keyboard pulled up by the input box. This takes effect only after the input method is
   * adapted. For details, see
   * [Immersive Mode of the Input Method Application](docroot://inputmethod/inputmethod-immersive-mode-guide.md). When
   * not set through this interface, the default value is KeyboardAppearance.NONE_IMMERSIVE.
   *
   * @param { Optional<KeyboardAppearance> } appearance - Keyboard style.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextInputAttribute;

  /**
   * Set voice button options.
   *
   * @param { Optional<VoiceButtonOptions> } options - Indicates the options of the voice button.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  voiceButton(options: Optional<VoiceButtonOptions>): TextInputAttribute;

  /**
   * Sets the maximum font scale factor of the text.
   *
   * @param { Optional<number | Resource> } scale - Maximum font scale factor of the text. The undefined type is
   *     supported.
   *     <br>Value range: [1, +∞)
   *     <br>**Note:**
   *     <br>If the value set is less than 1, it is processed as 1. Abnormal values do not take effect by default.
   *     <br>After the maxFontScale attribute is set, showError can be scaled up to 2 times at most.
   *     <br>Before use, configure the
   *     [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) file and
   *     the [app.json5](docroot://quick-start/app-configuration-file.md) file in the project. For details, see
   *     [Example 18: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-18-setting-the-minimum-and-maximum-font-scale-factors).
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): TextInputAttribute;

  /**
   * Sets the text to be vertically centered within the line, evenly distributing the line spacing to the top and bottom
   * of the line. When not set through this interface, the default value is false.
   *
   * @param { Optional<boolean> } halfLeading - Sets whether the text is vertically centered.
   *     <br>The value true evenly distributes the line spacing to the top and bottom of the line, and false does not.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading(halfLeading: Optional<boolean>): TextInputAttribute;

  /**
   * Triggers this callback when the text content is about to change.
   *
   * > **NOTE**
   * >
   * > - The callback timing of onWillChange is later than onWillInsert and onWillDelete, and earlier than onDidInsert
   * > and onDidDelete.
   * >
   * > - onWillChange and onChange form a will/did timing pattern:
   * >
   * > - onWillChange is triggered before the text changes. Returning false intercepts the change; returning true allows
   * > the change, and onChange is then triggered.
   * >
   * > - onChange is triggered after the change is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillChange is used for interception control, and onChange is used to obtain the
   * > change result.
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - Callback invoked when the text content is about to
   *     change.
   *     <br>When the callback parameter type is EditableTextChangeValue, it contains information about the text change.
   *     When the callback parameter type is boolean, it indicates whether this text change is allowed. Returning true
   *     allows the text to be modified normally and the change takes effect; returning false intercepts this text
   *     change operation and the text content does not change. Developers can use this callback to intercept and
   *     control text changes.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextInputAttribute;

  /**
   * Sets the minimum font scale factor for text.
   *
   * @param { Optional<number | Resource> } scale - Minimum font scale factor for text. The undefined type is supported.
   *     <br>Value range: [0, 1]
   *     <br>**Note:**
   *     <br>If the value is less than 0, it is processed as 0. If the value is greater than 1, it is processed as 1.
   *     Abnormal values do not take effect by default.
   *     <br>Before use, configure the
   *     [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) file and
   *     the [app.json5](docroot://quick-start/app-configuration-file.md) file in the project. For details, see
   *     [Example 18: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-18-setting-the-minimum-and-maximum-font-scale-factors).
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: Optional<number|Resource>): TextInputAttribute;

  /**
   * Sets whether to prevent the back key event from being passed to other components or the system. When set to true,
   * TextInput intercepts the back key event and does not pass it to other components; when set to false, the back key
   * event is passed to other components or the system normally. This applies to scenarios where custom back key
   * behavior is required, such as intercepting the back operation and displaying a confirmation prompt when a form is
   * not saved, custom navigation flows, and games or special interaction scenarios where back key control needs to be
   * taken over. When not set through this interface, the default value is true, and an invalid value takes the default
   * value.
   *
   * @param { Optional<boolean> } isStopped - Whether to block the back key.
   *     <br>true indicates blocking, and false indicates not blocking.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): TextInputAttribute;

  /**
   * Sets whether to enable automatic spacing between Chinese and Western characters. When not set through this
   * interface, the default value is false.
   *
   * @param { Optional<boolean> } enabled - Whether to enable automatic spacing between Chinese and Western characters.
   *     <br>The value true means to enable automatic spacing, and false means not to enable it.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * Sets whether to enable the auto-fill animation. When not set through this interface, the default value is true.
   *
   * @param { Optional<boolean> } enabled - Whether to enable the auto-fill animation.
   *     <br>true indicates enabled, and false indicates disabled.
   *     <br>**NOTE**
   *     <br>You must first set [enableAutoFill]{@link TextInputAttribute#enableAutoFill} to enable the auto-fill
   *     feature. After it is enabled, the animation takes effect only when the input mode [InputType]{@link InputType}
   *     of the input box is set to Password, NEW_PASSWORD, or NUMBER_PASSWORD during auto-fill.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoFillAnimation(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * Sets the width of the text stroke. When not set through this interface, the default value is 0, and no stroke is
   * applied.
   *
   * @param { Optional<LengthMetrics> } width - Width of the text stroke. When the unit attribute of the LengthMetrics
   *     object is LengthUnit.PERCENT, this setting does not take effect and the default value is used.
   *     <br>If the value is less than 0, solid characters are displayed; if the value is greater than 0, hollow
   *     characters are displayed.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeWidth(width: Optional<LengthMetrics>): TextInputAttribute;

  /**
   * Sets the color of the text stroke. When not set through this interface, the default value is the font color. When
   * an invalid value is set, the default value is used.
   *
   * @param { Optional<ResourceColor> } color - Stroke color.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor(color: Optional<ResourceColor>): TextInputAttribute;

  /**
   * Sets the backplane style during text dragging in the text input box.
   *
   * @param { SelectedDragPreviewStyle | undefined } value - Backplane style during text dragging.
   *     <br>When set to undefined: the backplane color follows the theme, displaying white in light mode and black in
   *     dark mode.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextInputAttribute;

  /**
   * Specifies the text layout direction. When not set through this API, the default text layout direction follows the
   * component layout direction.
   *
   * @param { TextDirection | undefined } direction - Text layout direction.
   *     <br>When set to undefined, it is processed as TextDirection.DEFAULT, meaning that the text layout direction
   *     follows the component layout direction.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): TextInputAttribute;

  /**
   * Sets whether to add spacing to the first and last lines to prevent text truncation. If this API is not used to set
   * the value, no spacing is added by default.
   *
   * @param { Optional<boolean> } include - Whether to add spacing to the first and last lines to prevent text
   *     truncation.
   *     <br>The value **true** means to add spacing to the first and last lines, and **false** means not to add spacing
   *     to the first and last lines.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): TextInputAttribute;

  /**
   * For multi-line text stacking, supports line height adaptation based on the actual text height. This interface takes
   * effect only when the line height is smaller than the actual text height. When not set through this interface, the
   * line height is not adapted based on the actual text height by default.
   *
   * @param { Optional<boolean> } enabled - Whether the line height is adapted based on the actual text height.
   *     <br>true indicates that the line height is adapted based on the actual text height; false indicates that the
   *     line height is not adapted based on the actual text height.
   *     <br>This interface takes effect only when the line height is smaller than the actual text height.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * Sets whether to enable compression of leading punctuation. When not set through this interface, compression of
   * leading punctuation is disabled by default.
   *
   * > **NOTE**
   * >
   * > - For the punctuation marks that support compression, see the leading punctuation compression range of
   * > [ParagraphStyle]{@link @ohos.graphics.text:text.ParagraphStyle}.
   *
   * @param { Optional<boolean> } enabled - Whether to enable compression of leading punctuation.
   *     <br>true indicates that compression of leading punctuation is enabled; false indicates that it is disabled.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): TextInputAttribute;
  /**
   * Sets whether to enable orphan character optimization during text layout. If this API is not used to set it, orphan
   * character optimization is disabled by default.
   *
   * When enabled, the line break points are adjusted to avoid isolated characters (the first character of the last line
   * of a paragraph) as much as possible, improving text layout. This feature takes effect only when wordBreak is not
   * BREAK_ALL and the [locale]{@link @ohos.graphics.text:text.TextStyle} of the first
   * [TextStyle]{@link @ohos.graphics.text:text.TextStyle} of the text to be laid out is "zh-Hans" or "zh-Hant".
   *
   * @param { Optional<boolean> } enabled - Whether to enable orphan character optimization for the last line of a
   *     paragraph.
   *     <br>true indicates that orphan character optimization is enabled, and false indicates that it is disabled.
   *     <br>When the value is undefined or null, orphan character optimization is disabled.
   *     <br>Orphan character optimization takes effect only when wordBreak is not BREAK_ALL and the locale of the first
   *     TextStyle of the text to be laid out is "zh-Hans" or "zh-Hant".
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * Sets the corner style of the text stroke. This attribute takes effect only when the text stroke is set by using
   * strokeWidth.
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - Sets the corner style of the text stroke. This attribute
   *     takes effect only when the text stroke is set by using strokeWidth.
   *     <br>When the value is undefined, the corner style is processed according to StrokeJoinStyle.MITER_JOIN. For
   *     details, see [StrokeJoinStyle]{@link StrokeJoinStyle}. The text corner is displayed as a sharp angle.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextInputAttribute;

  /**
   * Sets the text shader effect, such as linear gradient and radial gradient effects.
   *
   * > **NOTE**
   * >
   * > When shaderStyle and [strokeWidth]{@link TextInputAttribute#strokeWidth} are set at the same time, shaderStyle
   * > does not take effect.
   * >
   * > shaderStyle has a higher priority than [fontColor]{@link TextInputAttribute#fontColor}.
   *
   * @param { ShaderStyle | undefined } shader - Text shader effect, used to set the gradient or special color effect of
   *     the text. Supports linear gradient, radial gradient, solid color, and other types.
   *     <br>When shaderStyle and strokeWidth are set at the same time, shaderStyle does not take effect.
   *     <br>When the value is undefined, there is no gradient effect.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle(shader: ShaderStyle | undefined): TextInputAttribute;

  /**
   * Sets whether to enable hanging punctuation at the end of a line. If this API is not used to set this, hanging
   * punctuation is disabled by default.
   *
   * @param { Optional<boolean> } enabled - Whether to enable hanging punctuation at the end of a line.
   *     <br>The value **true** means to enable hanging punctuation at the end of a line, and **false** means the
   *     opposite. If this parameter is set to **undefined** or **null**, hanging punctuation is disabled.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  punctuationOverflow(enabled: Optional<boolean>): TextInputAttribute;
}

/**
 * A single-line text input box component used to receive single-line text input from users. It supports multiple input
 * types (such as text, password, email, and number), custom styles (font, color, underline, decoration line, and more),
 * input filtering, password input mode, auto-fill, and other features. It is suitable for various scenarios such as
 * login and registration, search, and form filling. It can address common requirements such as text input validation,
 * formatting, and secure input, simplifying the development process, improving user experience, and enhancing data
 * security.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Newly added APIs in later versions are marked with a superscript
 * > to indicate their initial version.
 * >
 * > - This component supports only a single text style. To implement rich text style, use the
 * > [RichEditor]{@link ./rich_editor} component.
 * >
 * > - To set whether to clear text selection and handles when touching outside the text component, use the
 * > [setTextSelectionClearPolicy]{@link @ohos.arkui.UIContext:UIContext.setTextSelectionClearPolicy} API.
 *
 * ###### Child Components
 *
 * None
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const TextInput: TextInputInterface;

/**
 * Defines TextInput Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const TextInputInstance: TextInputAttribute;