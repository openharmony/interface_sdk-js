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
 * Sets the single-line text box type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum InputType {

  /**
   * Normal input mode. In this mode, there is no special restriction on the input characters.
   *
   * The inline style supports only the **InputType.Normal** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal = 0,

  /**
   * Digit input mode.
   *
   * Negative numbers and decimals are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Number = 1,

  /**
   * Phone number input mode.
   *
   * In this mode, the following characters are allowed: digits, spaces, plus signs (+), hyphens (-), asterisks (*), and
   * number signs (#), opening parentheses ((), and closing parenthesis ()); the length is not limited.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  PhoneNumber = 2,

  /**
   * Email address input mode.
   *
   * This mode accepts only digits, letters, underscores (_), dots (.), and the following special characters: ! # $ % &
   * ' " * + - / = ? ^ ` { | } ~ @. The at sign can appear only once.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Email = 3,

  /**
   * Password input mode.
   *
   * The entered text is briefly displayed before turning to dots by default. Since API version 12, the entered text is
   * directly displayed as dots on PCs and 2-in-1 devices.
   *
   * The eye icon at the end of the input box is hidden by default on TV devices, and shown by default on other devices.
   *
   * The [decoration]{@link TextInputAttribute#decoration}, [showUnderline]{@link TextInputAttribute#showUnderline}, and
   * [lineHeight]{@link TextInputAttribute#lineHeight} attributes do not take effect in password input mode.
   *
   * If Password Vault is enabled, autofill is available for the username and password.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Password = 4,

  /**
   * Numeric password input mode.
   *
   * The entered text is briefly displayed before turning to dots by default. Since API version 12, the entered text is
   * directly displayed as dots on PCs and 2-in-1 devices.
   *
   * The eye icon at the end of the input box is hidden by default on TV devices, and shown by default on other devices.
   *
   * The password input mode does not support underlines. If Password Vault is enabled, autofill is available for the
   * username and password.
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
   * User name input mode with no special restrictions.
   *
   * If Password Vault is enabled, autofill is available for the username and password.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  USER_NAME = 10,

  /**
   * New password input mode with no special restrictions.
   *
   * The entered text is briefly displayed before turning to dots by default. Since API version 12, the entered text is
   * directly displayed as dots on PCs and 2-in-1 devices.
   *
   * The eye icon at the end of the input box is hidden by default on TV devices, and shown by default on other devices.
   *
   * If Password Vault is enabled, a new password can be automatically generated.
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
   * The value can contain digits and only one decimal point. Negative decimals are not supported. For the input mode of
   * negative decimals, use **inputFilter**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  NUMBER_DECIMAL = 12,

  /**
   * URL input mode with no special restrictions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  URL = 13,

  /**
   * One-time code (verification code) input mode with no special restrictions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  ONE_TIME_CODE = 14,
}

/**
 * Enumerates the content types for autofill.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ContentType {

  /**
   * Username. Password Vault, when enabled, can automatically save and fill in usernames.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  USER_NAME = 0,

  /**
   * Password. Password Vault, when enabled, can automatically save and fill in passwords.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PASSWORD = 1,

  /**
   * New password. Password Vault, when enabled, can automatically generate a new password.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  NEW_PASSWORD = 2,

  /**
   * Full street address. The scenario-based autofill feature, when enabled, can automatically save and fill in full
   * street addresses.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  FULL_STREET_ADDRESS = 3,

  /**
   * House number. The scenario-based autofill feature, when enabled, can automatically save and fill in house numbers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  HOUSE_NUMBER = 4,

  /**
   * District and county. The scenario-based autofill feature, when enabled, can automatically save and fill in
   * districts and counties.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  DISTRICT_ADDRESS = 5,

  /**
   * City. The scenario-based autofill feature, when enabled, can automatically save and fill in cities.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  CITY_ADDRESS = 6,

  /**
   * Province. The scenario-based autofill feature, when enabled, can automatically save and fill in provinces.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PROVINCE_ADDRESS = 7,

  /**
   * Country. The scenario-based autofill feature, when enabled, can automatically save and fill in countries.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  COUNTRY_ADDRESS = 8,

  /**
   * Full name. The scenario-based autofill feature, when enabled, can automatically save and fill in full names.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PERSON_FULL_NAME = 9,

  /**
   * Last name. The scenario-based autofill feature, when enabled, can automatically save and fill in last names.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PERSON_LAST_NAME = 10,

  /**
   * First name. The scenario-based autofill feature, when enabled, can automatically save and fill in first names.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PERSON_FIRST_NAME = 11,

  /**
   * Phone number. The scenario-based autofill feature, when enabled, can automatically save and fill in phone numbers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PHONE_NUMBER = 12,

  /**
   * Country code. The scenario-based autofill feature, when enabled, can automatically save and fill in country codes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  PHONE_COUNTRY_CODE = 13,

  /**
   * Phone number with country code. The scenario-based autofill feature, when enabled, can automatically save and fill
   * in phone numbers with country codes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  FULL_PHONE_NUMBER = 14,

  /**
   * Email address. The scenario-based autofill feature, when enabled, can automatically save and fill in email
   * addresses.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  EMAIL_ADDRESS = 15,

  /**
   * Bank card number. The scenario-based autofill feature, when enabled, can automatically save and fill in bank card
   * numbers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  BANK_CARD_NUMBER = 16,

  /**
   * ID card number. The scenario-based autofill feature, when enabled, can automatically save and fill in ID card
   * numbers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ID_CARD_NUMBER = 17,

  /**
   * Nickname. The scenario-based autofill feature, when enabled, can automatically save and fill in nicknames.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  NICKNAME = 23,

  /**
   * Address information without street address. The scenario-based autofill feature, when enabled, can automatically
   * save and fill in address information without street addresses.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  DETAIL_INFO_WITHOUT_STREET = 24,

  /**
   * Standard address. The scenario-based autofill feature, when enabled, can automatically save and fill in standard
   * addresses.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  FORMAT_ADDRESS = 25,

  /**
   * Passport number. The scenario-based autofill feature, when enabled, can automatically save and fill in passport
   * numbers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  PASSPORT_NUMBER = 26,

  /**
   * Passport validity period. The scenario-based autofill feature, when enabled, can automatically save and fill in
   * passport validity periods.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  VALIDITY = 27,

  /**
   * Passport place of issue. The scenario-based autofill feature, when enabled, can automatically save and fill in the
   * place of issue for passports.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ISSUE_AT = 28,

  /**
   * Invoice title. The scenario-based autofill feature, when enabled, can automatically save and fill in invoice
   * titles.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ORGANIZATION = 29,

  /**
   * Tax ID. The scenario-based autofill feature, when enabled, can automatically save and fill in tax IDs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  TAX_ID = 30,

  /**
   * Location. The scenario-based autofill feature, when enabled, can automatically save and fill in locations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ADDRESS_CITY_AND_STATE = 31,

  /**
   * Flight number. Currently not supported for automatic saving and auto-filling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  FLIGHT_NUMBER = 32,

  /**
   * Driver's license number. Currently not supported for automatic saving and auto-filling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_NUMBER = 33,

  /**
   * Driver's license file number. Currently not supported for automatic saving and auto-filling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_FILE_NUMBER = 34,

  /**
   * License plate number. The scenario-based autofill feature, when enabled, can automatically save and fill in license
   * plate numbers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_PLATE = 35,

  /**
   * Vehicle registration engine number. Currently not supported for automatic saving and auto-filling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  ENGINE_NUMBER = 36,

  /**
   * Chassis number. Currently not supported for automatic saving and auto-filling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LICENSE_CHASSIS_NUMBER = 37
}

/**
 * Type of the Enter key.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum EnterKeyType {

  /**
   * The Enter key is labeled "Go."
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Go = 2,

  /**
   * The Enter key is labeled "Search."
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Search = 3,

  /**
   * The Enter key is labeled "Send."
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Send = 4,

  /**
   * The Enter key is labeled "Next."
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Next = 5,

  /**
   * The Enter key is labeled "Done."
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Done = 6,

  /**
   * The Enter key is labeled "Previous."
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PREVIOUS = 7,

  /**
   * The Enter key is labeled "New Line."
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
   * Underline color in the typing state. If no value is specified or if the value specified is **undefined**, **null**,
   * or invalid, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  typing?: ResourceColor | undefined;

  /**
   * Underline color in the normal state. If no value is specified or if the value specified is **undefined**, **null**,
   * or invalid, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  normal?: ResourceColor | undefined;

  /**
   * Underline color when an error occurs. If no value is specified or if the value specified is **undefined**,
   * **null**, or invalid, the default value is used. This option changes the color used in the **showCounter**
   * attribute when the maximum number of characters is reached.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  error?: ResourceColor | undefined;

  /**
   * Underline color in the disabled state. If no value is specified or if the value specified is **undefined**,
   * **null**, or invalid, the default value is used.
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
 * Defines the user submission event.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface SubmitEvent {

  /**
   * Maintains the editable state of the text box when called.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  keepEditableState(): void;

  /**
   * Text in the text box.
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
 * The controller for the **TextInput** component inherits from
 * [TextContentControllerBase]{@link TextContentControllerBase}. The APIs involved are as follows:<!--Del--> system API
 * [getText]{@link TextContentControllerBase#getText} and other APIs like<!--DelEnd-->
 * [getTextContentRect]{@link TextContentControllerBase#getTextContentRect},
 * [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount},
 * [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}, [addText]{@link TextContentControllerBase#addText},
 * [deleteText]{@link TextContentControllerBase#deleteText},
 * [getSelection]{@link TextContentControllerBase#getSelection},
 * [clearPreviewText]{@link TextContentControllerBase#clearPreviewText},
 * [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder}, and
 * [deleteBackward]{@link TextContentControllerBase#deleteBackward}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full [since 10]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextInputController extends TextContentControllerBase {

  /**
   * A constructor used to create a **TextInputController** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Sets the position of the caret. If the value is less than 0, the value **0** is used. If the value exceeds the text
   * length, the caret is placed at the end of the text.
   *
   * @param { number } value - Length from the start of the string to the position where the caret is located.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  caretPosition(value: number): void;

  /**
   * Sets the text selection area, which will be highlighted.
   *
   * @param { number } selectionStart - Start position of the text selection range. The start position of text in the
   *     text box is 0.
   * @param { number } selectionEnd - End position of the text selection range. If **selectionEnd** is less than 0, it
   *     is handled as **0**. If **selectionEnd** exceeds the text length, it is clamped to the text length.
   * @param { SelectionOptions } [options] - Configuration options for text selection.<br>Default value:
   *     **MenuPolicy.DEFAULT**<br>This parameter can be used in atomic services since API version 12. [since 12]
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
 * **TextInput** initialization parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TextInputOptions {

  /**
   * Text displayed when there is no input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholder?: ResourceStr;

  /**
   * Current text input.
   *
   * You are advised to bind the state variable to the text in real time through the **onChange** event, so as to
   * prevent display errors when the component is updated.
   *
   * Since API version 10, this parameter supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * Since API version 18, this parameter supports two-way binding through
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  text?: ResourceStr;

  /**
   * Text input controller.
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
   * Default style. The caret width is fixed at 1.5 vp, and the caret height is subject to the background height and
   * font size of the selected text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Default = 0,

  /**
   * Inline style. The background height of the selected text is the same as the height of the text box.
   *
   * This style is used in scenarios where editing and non-editing states are obvious, for example, renaming in the file
   * list view.
   *
   * The **showError** attribute is not supported for this style.
   *
   * In the [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style), text cannot be dragged into
   * the text box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Inline = 1,
}

/**
 * The **TextInput** component provides single-line text input.
 *
 * > **NOTE**
 * >
 * > This component supports plain text only. For rich text, use the [RichEditor]{@link rich_editor} component.
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
   * Defines the constructor of TextInput.
   *
   * @param { TextInputOptions } value - Parameters of the **TextInput** component.
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
   * Displays the icon when the password is toggled to visible in the password input mode.
   *
   * The string type can be used to load network images and local images.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onIconSrc?: string | Resource;

  /**
   * Displays the icon when the password is toggled to hidden in the password input mode.
   *
   * The string type can be used to load network images and local images.
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
 * Defines the callback for submission.
 *
 * @param { EnterKeyType } enterKey - Type of the Enter key.
 * @param { SubmitEvent } event - Submit event. It can be used to control whether to dismiss the keyboard.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;

/**
 * Defines the callback for text selection changes or caret position changes.
 *
 * @param { number } selectionStart - Start position of the selected text. The start position of text is 0.
 * @param { number } selectionEnd - End position of the selected text.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;

/**
 * Defines the callback for text content scrolling.
 *
 * @param { number } totalOffsetX - Offset in the X coordinate of the text in the content area, in px.
 * @param { number } totalOffsetY - Offset in the Y coordinate of the text in the content area, in px.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;

/**
 * Defines the callback used to return the pasted text content.
 *
 * @param { string } content - Text to be pasted.
 * @param { PasteEvent } event - Custom paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnPasteCallback = (content: string, event: PasteEvent) => void;

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TextInputAttribute extends CommonMethod<TextInputAttribute> {

  /**
   * Sets the text box type.
   *
   * Different **InputType** values trigger corresponding keyboard types and enforce input restrictions.
   *
   * @param { InputType } value - Text box type.<br>Default value: **InputType.Normal**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  type(value: InputType): TextInputAttribute;

  /**
   * Sets the content type for autofill.<!--RP7--><!--RP7End-->
   *
   * @param { ContentType } value - Content type for autofill.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  contentType(value: ContentType): TextInputAttribute;

  /**
   * Sets whether to enable entity recognition for selected text. This API only works on devices that provide text
   * recognition.
   *
   * When **enableSelectedDataDetector** is set to **true**, all entity types are recognized by default.
   *
   * This feature is only effective when [CopyOptions]{@link CopyOptions} is set to **CopyOptions.LocalDevice** or
   * **CopyOptions.CrossDevice**.
   *
   * @param { boolean | undefined } enable - Whether to enable entity recognition for selected text.<br>**true**: Entity
   *     recognition is enabled. **false**: Entity recognition is disabled. Default value: **true**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): TextInputAttribute;

  /**
   * Sets the placeholder text color.
   *
   * @param { ResourceColor } value - Placeholder text color.<br>The default value follows the theme.<br>Default value
   *     on wearables: **'#99ffffff'**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderColor(value: ResourceColor): TextInputAttribute;

  /**
   * Sets the display mode for overflowing text. This attribute is supported only in the editing and non-editing states
   * of the [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style).
   *
   * Chinese text is truncated by character. English text is truncated by word. To truncate English text by letter, set
   * **wordBreak** to **WordBreak.BREAK_ALL**.
   *
   * When **overflow** is set to **TextOverflow.None**, the effect is the same as **TextOverflow.Clip**.
   *
   * @param { TextOverflow } value - Display mode of overflowing text.<br>Default value for the
   *     [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) in the non-editing state:
   *     **TextOverflow.Ellipsis**<br>Default value for the inline style in the editing state: **TextOverflow.Clip**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textOverflow(value: TextOverflow): TextInputAttribute;

  /**
   * Sets the indent of the first line text.
   *
   * @param { Dimension } value - Indent of the first line text.<br>Default value: **0**
   * @returns { TextInputAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent(value: Dimension): TextInputAttribute;

  /**
   * Sets the placeholder text style, including the font size, font weight, font family, and font style.
   *
   * @param { Font } value - Placeholder text style.<br>Default value on wearables: **18fp**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderFont(value?: Font): TextInputAttribute;

  /**
   * Sets the type of the Enter key.
   *
   * @param { EnterKeyType } value - Type of the Enter key.<br>Default value: **EnterKeyType.Done**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  enterKeyType(value: EnterKeyType): TextInputAttribute;

  /**
   * Sets the color of the caret in the text box.
   *
   * @param { ResourceColor } value - Color of the caret in the text box.<br>Default value: **'#007DFF'**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  caretColor(value: ResourceColor): TextInputAttribute;

  /**
   * Triggered when the input status changes.
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
   * Triggered when the input status changes. The text box is in the editing state when it has the caret placed in it,
   * and is in the non-editing state otherwise.
   *
   * @param { function } callback - Callback for the input status change. Returns **true** if the input box is in the
   *     editing state; returns **false** if the input box is in the non-editing state. [since 8 - 17]
   * @param { Callback<boolean> } callback - Callback for the input status change. Returns **true** if the input box is
   *     in the editing state; returns **false** if the input box is in the non-editing state. [since 18]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onEditChange(callback: Callback<boolean>): TextInputAttribute;

  /**
   * Triggered when the Enter key on the keyboard is pressed for submission.
   *
   * On non-TV devices, the input box loses focus and the keyboard is dismissed by default when the Enter key is
   * pressed. You can configure whether to dismiss the keyboard in **OnSubmitCallback**. For details, see
   * [Example 2: Setting Underlines](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-2-setting-underlines).
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
   * Triggered when the input in the text box changes.
   *
   * In this callback, if caret operations are performed, you must adjust the caret logic based on the **previewText**
   * parameter to ensure it works seamlessly within the preview display scenario.
   *
   * @param { function } callback - Callback invoked when the input in the text box changes. [since 7 - 11]
   * @param { EditableTextOnChangeCallback } callback - Callback invoked when the input in the text box
   *     changes. [since 12]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(callback: EditableTextOnChangeCallback): TextInputAttribute;

  /**
   * Triggered when the text selection changes or the caret position changes during editing.
   *
   * @param { function } callback - Callback for text selection changes or caret position changes. [since 10 - 17]
   * @param { OnTextSelectionChangeCallback } callback - Callback for text selection changes or caret position
   *     changes. [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTextSelectionChange(callback: OnTextSelectionChangeCallback): TextInputAttribute;

  /**
   * Triggered when the text content is scrolled.
   *
   * @param { function } callback - Callback for text content scrolling. [since 10 - 17]
   * @param { OnContentScrollCallback } callback - Callback for text content scrolling. [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onContentScroll(callback: OnContentScrollCallback): TextInputAttribute;

  /**
   * Sets the maximum number of characters for text input.
   *
   * @param { number } value - Maximum number of characters for text input.<br>Default value: **Infinity**, indicating
   *     that there is no upper limit on the number of characters that can be entered<br>**NOTE**<br>If this attribute
   *     is not set or set to an invalid value, the default value is used. If a decimal value is provided, only its
   *     integer part is applied. If the value exceeds 2^31-1, exceptions may occur.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxLength(value: number): TextInputAttribute;

  /**
   * Sets the font color.
   *
   * @param { ResourceColor } value - Font color.<br>Default value on wearables: **'#dbffffff' **
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): TextInputAttribute;

  /**
   * Sets the font size.
   *
   * @param { Length } value - Font size. If **fontSize** is of the number type, the unit fp is used. The default font
   *     size is 16 fp. The value cannot be a percentage.<br>Default value on wearables: **18fp**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: Length): TextInputAttribute;

  /**
   * Sets the font style.
   *
   * @param { FontStyle } value - Font style.<br>Default value: **FontStyle.Normal**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): TextInputAttribute;

  /**
   * Sets the font weight. If the value is too large, the text may be clipped depending on the font.
   *
   * @param { number | FontWeight | string } value - Font weight. For the number type, the value range is [100, 900], at
   *     an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the
   *     string type, only strings that represent a number, for example, **400**, and the following enumerated values of
   *     **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.<br>Default value:
   *     **FontWeight.Normal**<br>The Resource type is supported since API version 20. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - Font weight. For the number type, the value range is
   *     [100, 900], at an interval of 100. The default value is **400**. A larger value indicates a heavier font
   *     weight. For the string type, only strings that represent a number, for example, **400**, and the following
   *     enumerated values of **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and
   *     **medium**.<br>Default value: **FontWeight.Normal**<br>The Resource type is supported since API version 2
   *     0. [since 20]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): TextInputAttribute;

  /**
   * Sets the font family.
   *
   * @param { ResourceStr } value - Font family. Default font: **'HarmonyOS Sans'**<br>To specify multiple fonts,
   *     separate them with commas (,), and fonts are applied in priority order. Example: **'Arial, HarmonyOS Sans'**.<
   *     br>The 'HarmonyOS Sans' font and custom fonts are supported for applications.<br>Only the **'HarmonyOS Sans'**
   *     font is supported for widgets.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: ResourceStr): TextInputAttribute;

  /**
   * Sets the regular expression for input filtering. Only inputs that comply with the regular expression can be
   * displayed. Other inputs are filtered out.
   *
   * For single-character input scenarios, only single-character matching is supported; for multi-character input
   * scenarios (such as pasting), string matching is supported.
   *
   * Since API version 11, setting **inputFilter** with a non-empty string invalidates the text filtering effect
   * attached to the [type]{@link TextInputAttribute#type} API.
   *
   * @param { ResourceStr } value - Regular expression.
   * @param { function } error - Filtered-out content to return when regular expression matching fails. [since 8 - 17]
   * @param { Callback<string> } [error] - Filtered-out content to return when regular expression matching
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
   * Triggered before the copy operation is performed.
   *
   * **Since**: 26.0.0
   *
   * @param { Callback<string, boolean> } callback - Callback invoked before the copy operation. If the callback is the
   *     string type, the value indicates the text content to be copied. If the callback is the boolean type, the value
   *     indicates whether the selected text is allowed to be copied. **true**: yes. **false**: no.
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
   * **Since**: 26.0.0
   *
   * @param { Callback<string, boolean> } callback - Callback invoked before the cut operation. If the callback is the
   *     string type, the value indicates the text content to be cut. If the callback is the boolean type, the value
   *     indicates whether the selected text is allowed to be cut. **true**: yes. **false**: no.
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
   * Sets whether the input text can be copied. If this attribute is set to **CopyOptions.None**, only paste and select
   * all operations are supported.
   *
   * If this attribute is set to **CopyOptions.None**, drag and drop operations are not supported.
   *
   * @param { CopyOptions } value - Whether the input text can be copied.<br>Default value: **CopyOptions.LocalDevice**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): TextInputAttribute;

  /**
   * Sets whether to display the password icon at the end of the password text box.
   *
   * @param { boolean } value - Whether to display the password icon at the end of the password text box.<br>**true** to
   *     display, **false** otherwise.<br>Default value: **false** for TV devices; **true** for other devices
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  showPasswordIcon(value: boolean): TextInputAttribute;

  /**
   * Sets the horizontal alignment of the text.
   *
   * Available options are **TextAlign.Start**, **TextAlign.Center**, and **TextAlign.End**. **TextAlign.JUSTIFY**
   * behaves the same as **TextAlign.Start**.
   *
   * You can use the [align]{@link CommonMethod#align(value: Alignment)} attribute to control the vertical position of a
   * text paragraph. In this component, the **align** attribute cannot be used to control the horizontal position of a
   * text paragraph.
   *
   * - **Alignment.TopStart**, **Alignment.Top**, **Alignment.TopEnd**: Content aligns to the top.
   * - **Alignment.Start**, **Alignment.Center**, **Alignment.End**: Content is centered vertically.
   * - **Alignment.BottomStart**, **Alignment.Bottom**, **Alignment.BottomEnd:** Content aligns to the bottom.
   *
   * @param { TextAlign } value - Horizontal alignment of the text.<br>Default value: **TextAlign.Start**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  textAlign(value: TextAlign): TextInputAttribute;

  /**
   * Sets the text input style. The inline style only supports **InputType.Normal**.
   *
   * For details about the text box types, see [type]{@link TextInputAttribute#type}.
   *
   * @param { TextInputStyle | TextContentStyle } value - Text input style.<br>Default value: **TextInputStyle.Default**
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
   * @param { CaretStyle } value - Caret style.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  caretStyle(value: CaretStyle): TextInputAttribute;

  /**
   * Sets the background color of the selected text. If the opacity is not set, a 20% opacity will be used.
   *
   * @param { ResourceColor } value - Background color of the selected text.
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
   * @param { number } value - Caret position.<br>The position before the first character is 0.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  caretPosition(value: number): TextInputAttribute;

  /**
   * Sets whether to pop up the soft keyboard when the **TextInput** component obtains focus in a way other than
   * clicking.
   *
   * Since API version 10, the **TextInput** component is bound to the input method by default when it obtains focus.
   *
   * @param { boolean } value - Whether to pop up the soft keyboard when the **TextInput** component obtains focus in a
   *     way other than clicking.<br>**true**: The soft keyboard pops up. **false**: The soft keyboard does not pop up.
   *     <br>Default value: **false** for TV devices; **true** for other devices
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableKeyboardOnFocus(value: boolean): TextInputAttribute;

  /**
   * Sets the password icon to display at the end of the password text box.
   *
   * Images in JPG, PNG, BMP, HEIC, and WEBP formats are supported.
   *
   * @param { PasswordIcon } value - Password icon to display at the end of the password text box.<br>By default, the
   *     system-provided icon is used.<br>The icon size is fixed at 24 vp (or 28 vp on wearables), regardless of the
   *     source image size.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  passwordIcon(value: PasswordIcon): TextInputAttribute;

  /**
   * Sets the error message displayed when an error occurs.
   *
   * If the data type is **ResourceStr** and the input content does not comply with specifications, the error message is
   * displayed. If the error message does not fit in one line, an ellipsis is displayed to represent clipped text. If
   * the data type is **undefined**, no error message is displayed. For details, see
   * [Example 2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-2-setting-underlines).
   *
   * @param { string | undefined } value - Error message displayed when an error occurs.<br>By default, no error message
   *     is displayed.<br>On wearables, the font size is 13 fp and the alignment mode is center alignment.<br>**NOTE**<
   *     br>The Resource type is supported since API version 12. [since 10 - 11]
   * @param { ResourceStr | undefined } [value] - Error message displayed when an error occurs.<br>By default, no error
   *     message is displayed.<br>On wearables, the font size is 13 fp and the alignment mode is center alignment.<br>
   *     **NOTE**<br>The Resource type is supported since API version 12. [since 12]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showError(value?: ResourceStr | undefined): TextInputAttribute;

  /**
   * Sets the unit displayed with the text box. This attribute effective only when
   * [showUnderline]{@link TextInputAttribute#showUnderline} is set to **true**.
   *
   * @param { CustomBuilder } value - Unit displayed with the text box.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showUnit(value: CustomBuilder): TextInputAttribute;

  /**
   * Sets whether to enable an underline.
   *
   * @param { boolean } value - Whether to enable an underline.<br>**true** to enable, **false** otherwise.<br>Default
   *     value: **false**<br>By default, the underline comes in the color of **'#33182431'**, thickness of 1 px, and
   *     text box size of 48 vp. The underline is only available for the **InputType.Normal** type.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showUnderline(value: boolean): TextInputAttribute;

  /**
   * Color of the underline.
   *
   * When [showUnderline]{@link TextInputAttribute#showUnderline} is enabled, the underline color can be configured.
   *
   * @param { ResourceColor | UnderlineColor | undefined } value - Color of the underline.<br>The underline color
   *     changes with the underline mode. If the underline color is only set for the normal state, you can directly
   *     enter a value of the ResourceColor type. If the value specified is **undefined**, **null**, or invalid, all
   *     underlines are restored to the default value.<br>Default value: underline color configured for the theme. The
   *     default underline color in the theme is **'#33182431'**.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  underlineColor(value: ResourceColor | UnderlineColor | undefined): TextInputAttribute;

  /**
   * Sets whether to hide the system text selection menu.
   *
   * @param { boolean } value - Whether to hide the system text selection menu.<br>**true**: The system text selection
   *     menu is hidden when a user clicks the text box cursor, long-presses the text box, double-taps the text box,
   *     triple-taps the text box, or right-clicks the text box.<br>**false**: The system text selection menu is
   *     displayed.<br>Default value: **false**
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectionMenuHidden(value: boolean): TextInputAttribute;

  /**
   * Sets the scrollbar display mode for the inline style in the editing state.
   *
   * @param { BarState } value - Scrollbar display mode for the inline style in the editing state.<br>Default value:
   *     **BarState.Auto**
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barState(value: BarState): TextInputAttribute;

  /**
   * Sets the maximum number of lines that can be displayed with the inline style in the editing state.
   *
   * @param { number } value - Maximum number of lines that can be displayed with the inline style in the editing state.
   *     <br>Default value: **3**<br>Value range: (0, UINT32_MAX]
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxLines(value: number): TextInputAttribute;

  /**
   * Sets the word break rule. This attribute takes effect when the
   * [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is set for the component, but has
   * no effect on placeholder text.
   *
   * @param { WordBreak } value - Word break rule in the inline style.<br>Default value: **WordBreak.BREAK_WORD**
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  wordBreak(value: WordBreak): TextInputAttribute;

  /**
   * Sets the line break rule. This attribute takes effect when **wordBreak** is not set to **breakAll**. Hyphens are
   * not supported.
   *
   * @param { LineBreakStrategy } strategy - Line break rule.<br>Default value: **LineBreakStrategy.GREEDY**<br>**NOTE**
   *     <br>This attribute takes effect only when the
   *     [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is set.
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
   * When a custom keyboard is set, activating the text box opens the specified custom component, instead of the system
   * input method.
   *
   * The custom keyboard's height can be set through the **height** attribute of the custom component's root node, and
   * its width is fixed at the default value.
   *
   * The custom keyboard is presented by overlaying the original screen, which is not compressed or lifted if avoid mode
   * is not enabled or avoidance is not needed for the text box.
   *
   * The custom keyboard cannot obtain the focus, but it blocks gesture events.
   *
   * By default, the custom keyboard is closed when the input component loses the focus. You can also use the
   * [TextInputController](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputcontroller8).
   * [stopEditing]{@link TextInputController#stopEditing} API to close the keyboard.
   *
   * When setting a custom keyboard, you can bind the [onKeyPreIme]{@link CommonMethod#onKeyPreIme} event to prevent
   * input from the physical keyboard.
   *
   * From API version 23, the
   * [setCustomKeyboardContinueFeature](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#setcustomkeyboardcontinuefeature23)
   * API can be used to enable the continuation feature for custom keyboards. When switching between custom keyboards,
   * the system changes the keyboard directly without triggering the close and open animations.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { CustomBuilder } value - Custom keyboard. If the value is **undefined**, the custom keyboard is
   *     closed. [since 10 - 21]
   * @param { CustomBuilder | ComponentContent | undefined } value - Custom keyboard. If the value is **undefined**, the
   *     custom keyboard is closed. [since 22]
   * @param { KeyboardOptions } [options] - Whether to support keyboard avoidance. [since 12]
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): TextInputAttribute;

  /**
   * Sets the character counter displayed when the number of characters entered exceeds the threshold. If the
   * **showCounter** API is not called, the character counter is not displayed by default.
   *
   * **options** can be set only when **value** is set to **true**, in which case a character counter is displayed below
   * the text box. This attribute must be used together with [maxLength]{@link TextInputAttribute#maxLength}. The
   * character counter is displayed in this format: Number of characters entered/Character limit.
   *
   * It is visible when the number of characters entered is greater than the character limit multiplied by the threshold
   * percentage value. If **options** is not set, the text box border and character counter subscript turn red when the
   * number of characters entered exceeds the limit. If **value** is set to **true** and
   * [InputCounterOptions]{@link InputCounterOptions} is set, the text box border and character counter subscript turn
   * red and the text box shakes when the number of characters entered reaches the limit, provided that the value of
   * **thresholdPercentage** is valid. If **highlightBorder** is set to **false**, the text box border does not turn
   * red. By default, **highlightBorder** is set to **true**.
   *
   * The character counter is not displayed in the
   * [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) and
   * [password mode](docroot://ui/arkts-common-components-text-input.md#password-mode).
   *
   * [Example 5: Setting a Character Counter](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-5-setting-a-character-counter)
   * shows the effect of setting **showCounter**.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { boolean } value - Whether to display the character counter.<br>**true**: Character counter is displayed.
   *     **false**: Character counter is not displayed.
   * @param { InputCounterOptions } options - Configuration options for the character counter.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  showCounter(value: boolean, options?: InputCounterOptions): TextInputAttribute;

  /**
   * Sets the style of the cancel button on the right. Only icons of the image type are supported. The
   * [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is not supported. For details, see
   * [Example 4 Customizing the Cancel Button Style on the Right](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-4-customizing-the-cancel-button-style-on-the-right).
   *
   * @param { object } value - indicates the style of the cancel button. [since 11 - 17]
   * @param { CancelButtonOptions } options - Options of the cancel button on the right.<br>Default value:<br>{<br>
   *     style: CancelButtonStyle.INPUT<br>}<br>Default value on wearables: **28vp** [since 18]
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  cancelButton(options: CancelButtonOptions): TextInputAttribute;

  /**
   * Sets the style of the cancel button on the right. Only symbol-type icons are supported. The
   * [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is not supported. For details, see
   * [Example 15: Setting a Symbol-Type Cancel Button](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-15-setting-a-symbol-type-cancel-button).
   *
   * @param { CancelButtonSymbolOptions } symbolOptions - Style of the cancel button on the right.<br>Default value:<br>
   *     {<br>style: CancelButtonStyle.INPUT<br>}
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  cancelButton(symbolOptions: CancelButtonSymbolOptions): TextInputAttribute;

  /**
   * Sets whether to select all text in the initial state. The
   * [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is not supported.
   *
   * @param { boolean } value - Whether to select all text in the initial state.<br>**true**: Selecting all text is
   *     enabled. **false**: Selecting all text is disabled.<br>Default value: **false**
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectAll(value: boolean): TextInputAttribute;

  /**
   * Sets the minimum font size. For the string type, numeric string values with optional units, for example, **"10"**
   * or **"10fp"**, are supported.
   *
   * This attribute takes effect only when used together with [maxFontSize]{@link TextInputAttribute#maxFontSize} and
   * [maxLines]{@link TextInputAttribute#maxLines} (for the editing state of the inline style), or layout constraint
   * settings.
   *
   * When the adaptive font size is used, the **fontSize** settings do not take effect.
   *
   * If the value of **minFontSize** is less than or equal to 0, the adaptive font sizing feature is disabled. In such
   * cases, the [fontSize]{@link TextInputAttribute#fontSize} attribute is used instead. If **fontSize** is not set, the
   * default value will apply.
   *
   * @param { number | string | Resource } value - Minimum font size.<br>Unit: [fp]{@link common}
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minFontSize(value: number | string | Resource): TextInputAttribute;

  /**
   * Sets the maximum font size. For the string type, numeric string values with optional units, for example, **"10"**
   * or **"10fp"**, are supported.
   *
   * This attribute takes effect only when used together with [minFontSize]{@link TextInputAttribute#minFontSize} and
   * [maxLines]{@link TextInputAttribute#maxLines} (for the editing state of the inline style), or layout constraint
   * settings.
   *
   * When the adaptive font size is used, the **fontSize** settings do not take effect.
   *
   * If the value of **maxFontSize** is less than or equal to 0 or is less than the value of **minFontSize**, the
   * adaptive font sizing feature is disabled. In such cases, the [fontSize]{@link TextInputAttribute#fontSize}
   * attribute is used instead. If **fontSize** is not set, the default value will apply.
   *
   * @param { number | string | Resource } value - Maximum font size.<br>Unit: [fp]{@link common}
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxFontSize(value: number | string | Resource): TextInputAttribute;

  /**
   * Sets the minimum font scale factor for text.
   *
   * @param { Optional<number | Resource> } scale - Minimum font scale factor for text. The **undefined** type is
   *     supported.<br>Value range: [0, 1]<br>**NOTE**<br>A value less than 0 is handled as **0**. A value greater than
   *     1 is handled as **1**. Invalid values are not applied by default.<br>Before use, you need to configure the
   *     [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) and
   *     [app.json5](docroot://quick-start/app-configuration-file.md) files in the project. For details, see
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
   * Sets the maximum font scale factor for text.
   *
   * @param { Optional<number | Resource> } scale - Maximum font scale factor for text. The **undefined** type is
   *     supported.<br>Value range:
   *     [1, +∞)<br>**NOTE**<br>Values less than 1 are treated as **1**. Invalid values are not applied by default.<br>After the **maxFontScale** attribute is set, the error message set by **showError** can be enlarged to a maximum of twice the original size.<br>Before use, you need to configure the [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) and [app.json5](docroot://quick-start/app-configuration-file.md) files in the project. For details, see [Example 18: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-18-setting-the-minimum-and-maximum-font-scale-factors).
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): TextInputAttribute;

  /**
   * Sets how the adaptive height is determined for the text in the inline style.
   *
   * When this attribute is set to **TextHeightAdaptivePolicy.MAX_LINES_FIRST**, the
   * [maxLines]{@link TextInputAttribute#maxLines} attribute takes precedence for adjusting the text height. If the
   * **maxLines** setting results in a layout beyond the layout constraints, the text will shrink to a font size between
   * [minFontSize]{@link TextInputAttribute#minFontSize} and [maxFontSize]{@link TextInputAttribute#maxFontSize} to
   * allow for more content to be shown.
   *
   * If this attribute is set to **TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST**, the **minFontSize** attribute takes
   * precedence for adjusting the text height. If the text can fit in one line with the **minFontSize** setting, the
   * text will enlarge to the maximum available font size between **minFontSize** and **maxFontSize**.
   *
   * **TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST** produces the same effect as
   * **TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST**.
   *
   * When the component is in the non-inline style, the three values of **TextHeightAdaptivePolicy** have the same
   * effect, that is, the text will shrink to a font size between **minFontSize** and **maxFontSize** to allow for more
   * content to be shown.
   *
   * > **NOTE**
   * >
   * > If the text box is in the inline style, the font size in the editing state is different from that in the non-
   * > editing state.
   *
   * @param { TextHeightAdaptivePolicy } value - How the adaptive height is determined for the text.<br>Default value:
   *     **TextHeightAdaptivePolicy.MAX_LINES_FIRST**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextInputAttribute;

  /**
   * Sets whether to enable autofill.<!--RP6--><!--RP6End-->
   *
   * @param { boolean } value - Whether to enable autofill.<br>**true** to enable; **false** otherwise.<br>Default
   *     value: **true**
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableAutoFill(value: boolean): TextInputAttribute;

  /**
   * Sets the color, type, and style of the text decorative line.
   *
   * @param { TextDecorationOptions } value - Text decorative line options.<br>Default value: {<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID,<br> thicknessScale: 1.0<
   *     br>}
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  decoration(value: TextDecorationOptions): TextInputAttribute;

  /**
   * Sets the letter spacing for a text style. If the value specified is a percentage or **0**, the default value is
   * used. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are
   * supported.
   *
   * If the value specified is a negative value, the text is compressed. A negative value too small may result in the
   * text being compressed to 0 and no content being displayed.
   *
   * This setting applies to every character, including those at line endings.
   *
   * @param { number | string | Resource } value - Letter spacing.<br>Unit: [fp]{@link common}
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing(value: number | string | Resource): TextInputAttribute;

  /**
   * Sets the text line height.
   *
   * If the value is less than or equal to **0**, the line height is unrestricted and adapts to the font size. When the
   * value is a number, the unit is fp. For the string type, numeric string values with optional units, for example,
   * **"10"** or **"10fp"**, are supported.
   *
   * > **NOTE**
   * >
   * > - If certain characters have significantly taller glyphs than others in the same line, layout anomalies such as
   * > clipping, overlapping, or misalignment may occur. In this case, adjust component attributes such as height and
   * > line height to ensure proper layout rendering.
   * >
   * > - When the [password mode](docroot://ui/arkts-common-components-text-input.md#password-mode) is set,
   * > [lineHeight]{@link TextInputAttribute#lineHeight} set by this API does not take effect.
   *
   * @param { number | string | Resource } value - Text line height.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight(value: number | string | Resource): TextInputAttribute;

  /**
   * Defines the rules for generating passwords. When autofill is used, these rules are transparently transmitted to
   * Password Vault for generating a new password.<!--RP1--><!--RP1End-->
   *
   * @param { string } value - Rules for generating passwords.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  passwordRules(value: string): TextInputAttribute;

  /**
   * Sets the font feature, for example, monospaced digits.
   *
   * Format: normal \| \<feature-tag-value\>
   *
   * Format of **\<feature-tag-value\>**: \<string\> \[ \<integer\> \| on \| off ]
   *
   * There can be multiple **\<feature-tag-value\>** values, which are separated by commas (,).
   *
   * For example, the input format for monospaced clock fonts is "ss01" on.
   *
   * @param { string } value - Font feature.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): TextInputAttribute;

  /**
   * Sets whether to show the password.
   *
   * This API has effect only when the [input type]{@link InputType} is set to **Password**, **NEWPASSWORD**, or
   * **NUMBERPASSWORD** mode. It does not work in other modes.
   *
   * In the [password mode](docroot://ui/arkts-common-components-text-input.md#password-mode), inconsistencies between
   * the backend state of the text box and the frontend application's state management variables may cause abnormal
   * behavior of the trailing icon. To avoid such issues, use the
   * [onSecurityStateChange]{@link TextInputAttribute#onSecurityStateChange} callback to sync the states. For details,
   * see
   * [Example 1: Setting and Obtaining the Caret Position](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-1-setting-and-obtaining-the-caret-position).
   *
   * @param { boolean } visible - Whether to show the password.<br>**true**: The password is shown. **false**: The
   *     password is not shown.<br>Default value: **false**
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showPassword(visible: boolean): TextInputAttribute;

  /**
   * Triggered when the password visibility state is toggled.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Callback<boolean> } callback - Callback used to return the result.<br>Returns **true** if the state is
   *     toggled; returns **false** otherwise.
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
   * @param { Callback<InsertValue, boolean> } callback - Callback triggered when text is about to be inserted.<br>It
   *     returns **true** if the text is inserted; returns **false** otherwise.<br>This callback is not triggered for
   *     pre-edit or candidate word operations.<br>It is available only for system input methods.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): TextInputAttribute;

  /**
   * Triggered when text is inserted.
   *
   * @param { Callback<InsertValue> } callback - Callback triggered when text is inserted.<br>It is available only for
   *     system input methods.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidInsert(callback: Callback<InsertValue>): TextInputAttribute;

  /**
   * Triggered when text is about to be deleted.
   *
   * @param { Callback<DeleteValue, boolean> } callback - Callback triggered when text is about to be deleted.<br>It
   *     returns **true** if the text is deleted; returns **false** otherwise.<br>This callback is not called for text
   *     preview.<br>It is available only for system input methods.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): TextInputAttribute;

  /**
   * Triggered when text is deleted.
   *
   * @param { Callback<DeleteValue> } callback - Callback triggered when text is deleted.<br>It is available only for
   *     system input methods.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDelete(callback: Callback<DeleteValue>): TextInputAttribute;

  /**
   * Called when the input box is about to be bound to an input method.
   *
   * <!--Del-->
   *
   * Before the input box is bound to an input method, you can use the
   * [setKeyboardAppearanceConfig]{@link @ohos.arkui.UIContext:UIContext#setKeyboardAppearanceConfig} API of
   * **UIContext** to set the keyboard style.<!--DelEnd-->
   *
   * From API version 22, the [setExtraConfig]{@link IMEClient.setExtraConfig} method of [IMEClient]{@link IMEClient}
   * can be called to set input method extension information. After the input method is bound, it receives this
   * extension information which can be used to implement custom functionality.
   *
   * **IMEClient** is valid only during the execution of **onWillAttachIME** and cannot be called asynchronously.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Callback<IMEClient> } callback - Callback invoked when the input box is about to be bound to an input
   *     method.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient>): TextInputAttribute;

  /**
   * Sets the extended options of the custom menu, including the text content, icon, and callback.
   *
   * When
   * [disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20) or
   *
   * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
   * is used to disable system service menu items in the text selection menu, the disabled menu options will be excluded
   * from the parameter list in the [onCreateMenu]{@link EditMenuOptions.onCreateMenu} callback of **editMenuOptions**.
   *
   * @param { EditMenuOptions } editMenu - Extended options of the custom menu.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): TextInputAttribute;

  /**
   * Sets whether to enable preview text.
   *
   * The preview content is defined as a temporary, uncommitted input state. Currently, the text interception function
   * is not supported.
   *
   * @param { boolean } enable - Whether to enable preview text.<br>**true**: Preview text is enabled. **false**:
   *     Preview text is disabled.<br>Default value: **true**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): TextInputAttribute;

  /**
   * Sets whether to enable haptic feedback.
   *
   * To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under **requestPermissions**
   * in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the project.
   *
   * @param { boolean } isEnabled - Whether to enable haptic feedback.<br>**true**: Haptic feedback is enabled.
   *     **false**: Haptic feedback is disabled.<br>Default value: **true**
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): TextInputAttribute;

  /**
   * Sets the auto-capitalization text mode. This API provides the capability, but actual implementation depends on the
   * input method application.
   *
   * @param { AutoCapitalizationMode } mode - Auto-capitalization mode. The default state is inactive.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): TextInputAttribute;

  /**
   * Enables half leading for text, which splits the leading equally between the top and bottom of the line.
   *
   * @param { Optional<boolean> } halfLeading - Whether half leading is enabled. Half leading refers to splitting the
   *     leading in half and applying it equally to the top and bottom of the line.<br>**true**: Half leading is
   *     enabled. **false**: Half leading is not enabled.<br>Default value: **false**
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading(halfLeading: Optional<boolean>): TextInputAttribute;

  /**
   * Sets the ellipsis position. The **ellipsisMode** attribute takes effect only in the
   * [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style). It must be used together with
   * **overflow** set to **TextOverflow.Ellipsis**. The **ellipsisMode** attribute does not take effect if set alone.
   *
   * This attribute works normally in the non-editing state. In the editing state, **EllipsisMode.START** and
   * **EllipsisMode.CENTER** take effect only when **maxLines** is set to **1**, while **EllipsisMode.END**,
   * **EllipsisMode.MULTILINE_START**, and **EllipsisMode.MULTILINE_CENTER** take effect normally.
   *
   * @param { Optional<EllipsisMode> } mode - Ellipsis position.<br>Default value: **EllipsisMode.END**
   * @returns { TextInputAttribute } The attribute of TextInput.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ellipsisMode(mode: Optional<EllipsisMode>): TextInputAttribute;

  /**
   * Sets whether to prevent the back key event from being propagated.
   *
   * @param { Optional<boolean> } isStopped - Whether to prevent the back button press from being propagated to other
   *     components or applications.<br>**true**: Propagation is prevented. **false**: Propagation is allowed.<br>
   *     Default value: **true** Invalid values are treated as the default value.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): TextInputAttribute;

  /**
   * Triggered when the text content is about to change.
   *
   * This callback is triggered after **onWillInsert** and **onWillDelete**, but before **onDidInsert** and
   * **onDidDelete**.
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - Callback triggered when the text content is about
   *     to change.<br>Returning **true** allows the change to proceed, while returning **false** cancels the change.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextInputAttribute;

  /**
   * Sets the keyboard appearance for the text box. This setting takes effect only after input method adaptation. For
   * details, see
   * [Immersive Mode of the Input Method Application](docroot://inputmethod/inputmethod-immersive-mode-guide.md).
   *
   * @param { Optional<KeyboardAppearance> } appearance - Appearance of the keyboard.<br>Default value:
   *     **KeyboardAppearance.NONE_IMMERSIVE**
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextInputAttribute;

  /**
   * Sets the text stroke width.
   *
   * @param { Optional<LengthMetrics> } width - Text stroke width. When the unit of **LengthMetrics** is **px**:<br>
   *     Values < 0: solid text.<br>Values > 0: outlined text.<br>Default value: **0** (no stroke)
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeWidth(width: Optional<LengthMetrics>): TextInputAttribute;

  /**
   * Sets the text stroke color.
   *
   * @param { Optional<ResourceColor> } color - Stroke color. Default value: font color. Invalid values are treated as
   *     the default value.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor(color: Optional<ResourceColor>): TextInputAttribute;

  /**
   * Sets whether to enable the autofill animation.
   *
   * @param { Optional<boolean> } enabled - Whether to enable the autofill animation.<br>**true** to enable; **false**
   *     otherwise.<br>Default value: **true**<br>**NOTE**<br>When enabled, the animation takes effect only for text
   *     boxes where [InputType]{@link InputType} is set to **Password**, **NEW_PASSWORD**, or **NUMBER_PASSWORD**.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoFillAnimation(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * Sets whether to enable automatic spacing between Chinese and Western characters.
   *
   * @param { Optional<boolean> } enabled - Whether to enable automatic spacing between Chinese and Western characters.<
   *     br>**true** to enable, **false** otherwise.<br>Default value: **false**
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * Sets whether to add spacing to the first and last lines to avoid text truncation. If this attribute is not set, no
   * spacing is added by default.
   *
   * @param { Optional<boolean> } include - Whether to add spacing to the first and last lines to avoid text truncation.
   *     <br>**true**: Spacing is added to the first and last lines. **false**: Spacing is not added to the first and
   *     last lines.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): TextInputAttribute;

  /**
   * Adapts the line height to the actual text height for overlapped multi-line text. This API takes effect only when
   * the line height is less than the actual text height. If this API is not set, the line height does not adapt to the
   * actual text height by default.
   *
   * @param { Optional<boolean> } enabled - Whether the line height adapts to the actual text height.<br>**true**: Line
   *     height adapts to the actual text height. **false**: Line height does not adapt to the actual text height.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * Sets whether to enable leading punctuation compression.
   *
   * > **NOTE**
   * >
   * > - Leading punctuation is not compressed by default.
   * >
   * > - For the range of punctuation marks that support leading compression, see
   * > [ParagraphStyle]{@link @ohos.graphics.text:text.ParagraphStyle}.
   *
   * @param { Optional<boolean> } enabled - Whether to enable leading punctuation compression.<br>**true**: Leading
   *     punctuation compression is enabled. **false**: Leading punctuation compression is disabled.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * Sets the drag preview style for text being dragged in the text box.
   *
   * @param { SelectedDragPreviewStyle | undefined } value - Drag preview style for text being dragged in the text box.<
   *     br>If this parameter is set to **undefined**, the drag preview follows the theme: white in light mode and black
   *     in dark mode.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextInputAttribute;

  /**
   * Specifies the text layout direction. If this attribute is not set, the default text layout direction follows the
   * component layout direction.
   *
   * @param { TextDirection | undefined } direction - Text layout direction.<br>If this parameter is set to
   *     **undefined**, the text layout direction follows the component layout direction as defined by
   *     **TextDirection.DEFAULT**.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): TextInputAttribute;

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
   * Sets whether to enable orphan character optimization during text typesetting. If this attribute is not set, orphan
   * character optimization is disabled by default.
   *
   * Orphan character optimization improves the text layout by handling the orphan character (the first Chinese
   * character of the last line of a paragraph) more efficiently. When enabled, it adjusts line breaks to avoid orphan
   * characters as much as possible. This feature takes effect only when [wordBreak]{@link TextInputAttribute#wordBreak}
   * is not **BREAK_ALL** and [locale]{@link @ohos.graphics.text:text.TextStyle} of the first
   * [TextStyle]{@link @ohos.graphics.text:text.TextStyle} of the text to be typeset is either **"zh-Hans"** or
   * **"zh-Hant"**.
   *
   * **Since**: 26.0.0
   *
   * @param { Optional<boolean> } enabled - Whether to enable orphan character optimization for the last line of the
   *     paragraph.<br>**true**: Orphan character optimization is enabled. **false**: Orphan character optimization is
   *     disabled.<br>When the value is **undefined** or **null**, orphan character optimization is disabled.
   * @returns { TextInputAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): TextInputAttribute;

  /**
   * Set the join style of the stroke.
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - The join style of stroke.
   *     Passing `undefined` resets it to the default value.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextInputAttribute;

  /**
   * Set the shader style of the text, such as lineargradient or radialgradient.
   *
   * @param { ShaderStyle | undefined } shader - The shader style of the text.
   *     Passing `undefined` resets it to the default value.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle(shader: ShaderStyle | undefined): TextInputAttribute;

  /**
   * Whether to enable punctuation overflow at line ends.
   *
   * @param { Optional<boolean> } enabled - Whether to enable the feature, the default value is false.
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
 * The **TextInput** component provides single-line text input.
 *
 * > **NOTE**
 * >
 * > This component supports plain text only. For rich text, use the [RichEditor]{@link rich_editor} component.
 *
 * ###### Child Components
 *
 * Not supported
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