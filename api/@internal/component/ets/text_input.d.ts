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

/*** if arkts 1.2 */
import { CancelButtonSymbolOptions, CancelButtonOptions } from "./search";
import { Callback, CommonMethod, TextContentControllerBase, SelectionOptions, InputCounterOptions, TextDecorationOptions, Optional, Bindable} from "./common";
import { CustomBuilder } from './builder';
import { BarState, LineBreakStrategy, TextAlign, FontStyle, FontWeight, WordBreak, TextOverflow,
   CopyOptions, TextHeightAdaptivePolicy, TextContentStyle, EllipsisMode } from './enums';
import { Resource, ResourceStr, ResourceColor, Dimension, Font, Length } from './units';
import { InsertValue, DeleteValue, CaretStyle, EditableTextOnChangeCallback, EditMenuOptions,
  AutoCapitalizationMode,EditableTextChangeValue,KeyboardAppearance } from "./textCommon";
import { KeyboardOptions, PasteEvent } from "./richEditor";
/*** endif */

/**
 * Declare the type of input box
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare the type of input box
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Declare the type of input box
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum InputType {
  /**
   * Basic input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Basic input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Basic input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Normal,

  /**
   * Pure digital input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Pure digital input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pure digital input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Number,

  /**
   * Phone number entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Phone number entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Phone number entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PhoneNumber,

  /**
   * E-mail address input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * E-mail address input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * E-mail address input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Email,

  /**
   * Password entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Password entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Password entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Password,

  /**
   * Number Password entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Number Password entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NUMBER_PASSWORD = 8,

  /**
   * Screen Lock Password entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  SCREEN_LOCK_PASSWORD = 9,

  /**
   * UserName entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * UserName entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  USER_NAME = 10,

  /**
   * NewPassword entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * NewPassword entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NEW_PASSWORD = 11,

  /**
   * Number decimal entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NUMBER_DECIMAL = 12,

  /**
   * URL entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  URL = 13,
}

/**
 * Declare the type of input content
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ContentType {
  /**
   * User name content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  USER_NAME = 0,

  /**
   * Password content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PASSWORD = 1,

  /**
   * New password content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NEW_PASSWORD = 2,

  /**
   * Full street address content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  FULL_STREET_ADDRESS = 3,

  /**
   * House number content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  HOUSE_NUMBER = 4,

  /**
   * District address content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DISTRICT_ADDRESS = 5,

  /**
   * City address content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  CITY_ADDRESS = 6,

  /**
   * Province address content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PROVINCE_ADDRESS = 7,

  /**
   * Country address content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  COUNTRY_ADDRESS = 8,

  /**
   * Person full name content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PERSON_FULL_NAME = 9,

  /**
   * Person last name content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PERSON_LAST_NAME = 10,

  /**
   * Person first name content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PERSON_FIRST_NAME = 11,

  /**
   * Phone number content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PHONE_NUMBER = 12,

  /**
   * Phone country code content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PHONE_COUNTRY_CODE = 13,

  /**
   * Full phone number content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  FULL_PHONE_NUMBER = 14,

  /**
   * Email address content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  EMAIL_ADDRESS = 15,

  /**
   * Bank card number content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  BANK_CARD_NUMBER = 16,

  /**
   * ID card number content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ID_CARD_NUMBER = 17,

  /**
   * Nickname content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NICKNAME = 23,

  /**
   * Detail info without street content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  DETAIL_INFO_WITHOUT_STREET = 24,

  /**
   * Format address content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  FORMAT_ADDRESS = 25,

  /**
   * Passport number content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PASSPORT_NUMBER = 26,

  /**
   * Passport validity content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  VALIDITY = 27,

  /**
   * Place of issue content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ISSUE_AT = 28,

  /**
   * Invoice organization content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ORGANIZATION = 29,

  /**
   * Invoice tax id content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  TAX_ID = 30,

  /**
   * Address city and state content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ADDRESS_CITY_AND_STATE = 31,

  /**
   * Airline flight number content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  FLIGHT_NUMBER = 32,

  /**
   * License number for drivers content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  LICENSE_NUMBER = 33,

  /**
   * License file number for drivers content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  LICENSE_FILE_NUMBER = 34,

  /**
   * License plate for vehicles content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  LICENSE_PLATE = 35,

  /**
   * Engine number for vehicles content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ENGINE_NUMBER = 36,

  /**
   * License chassis number for vehicles content type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  LICENSE_CHASSIS_NUMBER = 37
}

/**
 * Declare the type of soft keyboard.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare the type of soft keyboard.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Declare the type of soft keyboard.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum EnterKeyType {
  /**
   * Go.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Go.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Go.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Go = 2,

  /**
   * Search.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Search.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Search.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Search = 3,

  /**
   * Send.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Send.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Send.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Send = 4,

  /**
   * Next.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Next.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Next.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Next = 5,

  /**
   * Done.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Done.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Done.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Done = 6,

  /**
   * Showed as 'previous' pattern.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Showed as 'previous' pattern.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PREVIOUS = 7,

  /**
   * Showed as 'new line' pattern.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Showed as 'new line' pattern.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NEW_LINE = 8,
}

/**
  * Defines the underline color width property.
  *
  * @interface UnderlineColor
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since arkts {'1.1':'12','1.2':'20'}
  * @arkts 1.1&1.2
  */
declare interface UnderlineColor {
  /**
    * Typing underline color width property.
    *
    * @type { ?(ResourceColor | undefined) }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
  typing?: ResourceColor | undefined;
  /**
    * Normal underline color width property.
    *
    * @type { ?(ResourceColor | undefined) }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
  normal?: ResourceColor | undefined;
  /**
    * Error underline color width property.
    *
    * @type { ?(ResourceColor | undefined) }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
  error?: ResourceColor | undefined;
  /**
    * Disable underline color width property.
    *
    * @type { ?(ResourceColor | undefined) }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since arkts {'1.1':'12','1.2':'20'}
    * @arkts 1.1&1.2
    */
  disable?: ResourceColor | undefined;
} 

/**
 * Provides the method of keeping TextInput editable state when submitted.
 *
 * @interface SubmitEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface SubmitEvent {
  /**
   * Keeps TextInput editable state when submitted
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  keepEditableState(): void;

  /**
   * Sets the current value of TextInput.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  text: string;
}

/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @since 8
 */
/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class TextInputController extends TextContentControllerBase {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor();

  /**
   * Called when the position of the insertion cursor is set.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  caretPosition(value: number): void;

  /**
   * Text selection is achieved by specifying the start and end positions of the text.
   *
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Text selection is achieved by specifying the start and end positions of the text.
   *
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Text selection is achieved by specifying the start and end positions of the text.
   *
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @param { SelectionOptions } [options] - Indicates the options of the text selection.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

  /**
   * Exit edit state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Exit edit state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  stopEditing(): void;
}

/**
 * Defines the options of TextInput.
 *
 * @interface TextInputOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of TextInput.
 *
 * @interface TextInputOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of TextInput.
 *
 * @interface TextInputOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TextInputOptions {
  /**
   * The place holder text string.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The place holder text string.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The place holder text string.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  placeholder?: ResourceStr;

  /**
   * Sets the current value of TextInput.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the current value of TextInput.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the current value of TextInput.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  text?: ResourceStr;

  /**
   * Sets the current value of TextInput.
   *
   * @type { ?(ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
   text?: ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>;

  /**
   * Called when the position of the insertion cursor is set.
   *
   * @type { ?TextInputController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @type { ?TextInputController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @type { ?TextInputController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  controller?: TextInputController;
}

/**
 * Text input style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Text input style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Text input style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum TextInputStyle {
  /**
   * Text input default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Text input default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Text input default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Default,

  /**
   * Text input inline style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Text input inline style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Text input inline style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Inline
}

/**
 * Provides a single-line text input component interface.
 *
 * @interface TextInputInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides a single-line text input component interface.
 *
 * @interface TextInputInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides a single-line text input component interface.
 *
 * @interface TextInputInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface TextInputInterface {
  /**
   * Called when writing a single line of text.
   *
   * @param { TextInputOptions } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when writing a single line of text.
   *
   * @param { TextInputOptions } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when writing a single line of text.
   *
   * @param { TextInputOptions } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (value?: TextInputOptions): TextInputAttribute;
}

/**
 * PasswordIcon object.
 *
 * @interface PasswordIcon
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * PasswordIcon object.
 *
 * @interface PasswordIcon
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PasswordIcon {
  /**
   * Define the on icon source of PasswordIcon.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define the on icon source of PasswordIcon.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onIconSrc?: string | Resource;

  /**
   * Define the off icon source of PasswordIcon.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define the off icon source of PasswordIcon.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  offIconSrc?: string | Resource;
}

/**
 * Defines a TextInput callback when onSubmit.
 *
 * @typedef { function } OnSubmitCallback
 * @param { EnterKeyType } enterKey - Input method Enter key type.
 * @param { SubmitEvent } event - The event submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;

/**
 * Defines a TextInput callback when onTextSelectionChange.
 *
 * @typedef { function } OnTextSelectionChangeCallback
 * @param { number } selectionStart - The starting position of the selected text, the starting position of the text is 0.
 * @param { number } selectionEnd - The end location of the selected text.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;

/**
 * Defines a TextInput callback when onContentScroll.
 *
 * @typedef { function } OnContentScrollCallback
 * @param { number } totalOffsetX - The text is offset in px on the horizontal axis of the content area.
 * @param { number } totalOffsetY - The text is offset in px on the vertical axis of the content area.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;

/**
 * Defines a TextInput callback when onPaste.
 *
 * @typedef { function } OnPasteCallback
 * @param { string } content - The text content of the paste.
 * @param { PasteEvent } event - User-defined paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnPasteCallback = (content: string, event: PasteEvent) => void;

/**
 * Defines the TextInput attribute functions.
 *
 * @extends CommonMethod<TextInputAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the TextInput attribute functions.
 *
 * @extends CommonMethod<TextInputAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the TextInput attribute functions.
 *
 * @extends CommonMethod<TextInputAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class TextInputAttribute extends CommonMethod<TextInputAttribute> {
  /**
   * Called when the input type is set.
   *
   * @param { InputType } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the input type is set.
   *
   * @param { InputType } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the input type is set.
   *
   * @param { InputType } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type(value: InputType): TextInputAttribute;

  /**
   * Called when the content type is set.
   *
   * @param { ContentType } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  contentType(value: ContentType): TextInputAttribute;

  /**
   * Called when the color of the placeholder is set.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the color of the placeholder is set.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the color of the placeholder is set.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  placeholderColor(value: ResourceColor): TextInputAttribute;

  /**
   * Called when the overflow mode of the font is set.
   *
   * @param { TextOverflow } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textOverflow(value: TextOverflow): TextInputAttribute;

  /**
   * Specify the indentation of the first line in a text-block.
   *
   * @param { Dimension } value - The length of text indent.
   * @returns { TextInputAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textIndent(value: Dimension): TextInputAttribute;

  /**
   * Called when the font property of the placeholder is set.
   *
   * @param { Font } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font property of the placeholder is set.
   *
   * @param { Font } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font property of the placeholder is set.
   *
   * @param { Font } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  placeholderFont(value?: Font): TextInputAttribute;

  /**
   * Called when the type of soft keyboard input button is set.
   *
   * @param { EnterKeyType } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the type of soft keyboard input button is set.
   *
   * @param { EnterKeyType } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the type of soft keyboard input button is set.
   *
   * @param { EnterKeyType } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enterKeyType(value: EnterKeyType): TextInputAttribute;

  /**
   * Called when the color of the insertion cursor is set.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the color of the insertion cursor is set.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the color of the insertion cursor is set.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  caretColor(value: ResourceColor): TextInputAttribute;

  /**
   * Called when judging whether the text editing change finished.
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 8
   * @useinstead onEditChange
   */
  onEditChanged(callback: (isEditing: boolean) => void): TextInputAttribute;

  /**
   * Called when judging whether the text editing change finished.
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when judging whether the text editing change finished.
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when judging whether the text editing change finished.
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when judging whether the text editing change finished.
   *
   * @param { Callback<boolean> } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onEditChange(callback: Callback<boolean>): TextInputAttribute;

  /**
   * Called when submitted.
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when submitted.
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when submitted.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when submitted.
   *
   * @param { OnSubmitCallback } callback - Callback of the listened event.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSubmit(callback: OnSubmitCallback): TextInputAttribute;

  /**
   * Called when the input of the input box changes.
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the input of the input box changes.
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the input of the input box changes.
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the input of the input box changes.
   *
   * @param { EditableTextOnChangeCallback } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onChange(callback: EditableTextOnChangeCallback): TextInputAttribute;

  /**
   * Called when the text selection changes.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the text selection changes.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the text selection changes.
   *
   * @param { OnTextSelectionChangeCallback } callback - Callback of the listened event.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onTextSelectionChange(callback: OnTextSelectionChangeCallback): TextInputAttribute;

  /**
   * Called when the content scrolls.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the content scrolls.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the content scrolls.
   *
   * @param { OnContentScrollCallback } callback - Callback of the listened event.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onContentScroll(callback: OnContentScrollCallback): TextInputAttribute;

  /**
   * Called when the input of maximum text length is set.
   *
   * @param { number } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the input of maximum text length is set.
   *
   * @param { number } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the input of maximum text length is set.
   *
   * @param { number } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxLength(value: number): TextInputAttribute;

  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor(value: ResourceColor): TextInputAttribute;

  /**
   * Called when the font size is set.
   *
   * @param { Length } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font size is set.
   *
   * @param { Length } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font size is set.
   *
   * @param { Length } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize(value: Length): TextInputAttribute;

  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontStyle(value: FontStyle): TextInputAttribute;

  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight(value: number | FontWeight | string): TextInputAttribute;

  /**
   * Called when the font list of text is set.
   *
   * @param { ResourceStr } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font list of text is set.
   *
   * @param { ResourceStr } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font list of text is set.
   *
   * @param { ResourceStr } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFamily(value: ResourceStr): TextInputAttribute;

  /**
   * Called when the inputFilter of text is set.
   *
   * @param { ResourceStr } value
   * @param { function } error
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the inputFilter of text is set.
   *
   * @param { ResourceStr } value
   * @param { function } error
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the inputFilter of text is set.
   *
   * @param { ResourceStr } value
   * @param { function } error
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the inputFilter of text is set.
   *
   * @param { ResourceStr } value
   * @param { Callback<string> } [error]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  inputFilter(value: ResourceStr, error?: Callback<string>): TextInputAttribute;

  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when using the Clipboard menu.
   *
   * @param { Callback<string> } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onCopy(callback: Callback<string>): TextInputAttribute;

  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when using the Clipboard menu.
   *
   * @param { Callback<string> } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onCut(callback: Callback<string>): TextInputAttribute;

  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   *          Executed when a paste operation is performed.
   *          { string } value - The text content to be pasted.
   *          { PasteEvent } event - The user-defined paste event.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when using the Clipboard menu.
   *
   * @param { OnPasteCallback } callback - Executed when a paste operation is performed.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onPaste(callback: OnPasteCallback): TextInputAttribute;

  /**
   * Called when the copy option is set.
   *
   * @param { CopyOptions } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when the copy option is set.
   *
   * @param { CopyOptions } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the copy option is set.
   *
   * @param { CopyOptions } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  copyOption(value: CopyOptions): TextInputAttribute;

  /**
   * Called when the password show/hide icon is set.
   *
   * @param { boolean } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when the password show/hide icon is set.
   *
   * @param { boolean } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the password show/hide icon is set.
   *
   * @param { boolean } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showPasswordIcon(value: boolean): TextInputAttribute;

  /**
   * Called when the text align is set.
   *
   * @param { TextAlign } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when the text align is set.
   *
   * @param { TextAlign } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the text align is set.
   *
   * @param { TextAlign } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textAlign(value: TextAlign): TextInputAttribute;

  /**
   * Text input style
   *
   * @param { TextInputStyle | TextContentStyle } value - Text input style
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Text input style
   *
   * @param { TextInputStyle | TextContentStyle } value - Text input style
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Text input style
   *
   * @param { TextInputStyle | TextContentStyle } value - Text input style
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style(value: TextInputStyle | TextContentStyle): TextInputAttribute;

  /**
   * Define the caret style of the text input
   *
   * @param { CaretStyle } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the caret style of the text input
   *
   * @param { CaretStyle } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  caretStyle(value: CaretStyle): TextInputAttribute;

  /**
   * Define the text selected background color of the text input.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the text selected background color of the text input.
   *
   * @param { ResourceColor } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedBackgroundColor(value: ResourceColor): TextInputAttribute;

  /**
   * Define the caret position of the text input.
   *
   * @param { number } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the caret position of the text input.
   *
   * @param { number } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  caretPosition(value: number): TextInputAttribute;

  /**
   * Sets whether request keyboard or not when on focus.
   *
   * @param { boolean } value
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets whether request keyboard or not when on focus.
   *
   * @param { boolean } value
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableKeyboardOnFocus(value: boolean): TextInputAttribute;

  /**
   * Define the password icon of the text input.
   *
   * @param { PasswordIcon } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define the password icon of the text input.
   *
   * @param { PasswordIcon } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  passwordIcon(value: PasswordIcon): TextInputAttribute;

  /**
   * Define the show error of the text input.
   *
   * @param { string | undefined } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define the show error of the text input.
   *
   * @param { string | undefined } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Define the show error of the text input.
   *
   * @param { ResourceStr | undefined } [value]
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showError(value?: ResourceStr | undefined): TextInputAttribute;

  /**
   * Define the show unit of the text input.
   *
   * @param { CustomBuilder } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define the show unit of the text input.
   *
   * @param { CustomBuilder } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showUnit(value: CustomBuilder): TextInputAttribute;

  /**
   * Define the show underline of the text input.
   *
   * @param { boolean } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define the show underline of the text input.
   *
   * @param { boolean } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showUnderline(value: boolean): TextInputAttribute;

  /**
   * Define the underline color of the text input.
   *
   * @param { ResourceColor | UnderlineColor | undefined } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  underlineColor(value: ResourceColor | UnderlineColor | undefined): TextInputAttribute;

  /**
   * Controls whether the selection menu pops up.
   *
   * @param { boolean } value
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Controls whether the selection menu pops up.
   *
   * @param { boolean } value
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectionMenuHidden(value: boolean): TextInputAttribute;

  /**
   * Define bar state of the text input.
   *
   * @param { BarState } value
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define bar state of the text input.
   *
   * @param { BarState } value
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  barState(value: BarState): TextInputAttribute;

  /**
   * Define max lines of the text input.
   *
   * @param { number } value
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define max lines of the text input.
   *
   * @param { number } value
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxLines(value: number): TextInputAttribute;

  /**
   * Set the text inline style word break type.
   *
   * @param { WordBreak } value - The word break type.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  wordBreak(value: WordBreak): TextInputAttribute;

  /**
   * Set the text line break strategy type.
   *
   * @param { LineBreakStrategy } strategy - The text line break strategy type.
   * @returns { TextInputAttribute } The attribute of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lineBreakStrategy(strategy: LineBreakStrategy): TextInputAttribute;

  /**
   * Define custom keyboard of the text input.
   *
   * @param { CustomBuilder } value
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define custom keyboard of the text input.
   *
   * @param { CustomBuilder } value
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */

  /**
   * Define custom keyboard of the text input.
   *
   * @param { CustomBuilder } value - Set up a custom keyboard of TextInput
   * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of TextInput
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  customKeyboard(value: CustomBuilder, options?: KeyboardOptions): TextInputAttribute;

  /**
   * Show the counter when the number of characters entered exceeds the threshold through InputCounterOptions.
   *
   * @param { boolean } value - Set showcounter of the text input.
   * @param { InputCounterOptions } options - Set the percentage of counter.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showCounter(value: boolean, options?: InputCounterOptions): TextInputAttribute;

  /**
   * Set the cancel button style
   *
   * @param { object } value - indicates the style of the cancel button.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set the cancel button style
   *
   * @param { object } value - indicates the style of the cancel button.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Set the cancel button style.
   *
   * @param { CancelButtonOptions } options - Indicates the style of the cancel button.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  cancelButton(options: CancelButtonOptions): TextInputAttribute;

  /**
   * Set the cancel button style
   *
   * @param { CancelButtonSymbolOptions } symbolOptions - indicates the style of the cancel button.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  cancelButton(symbolOptions: CancelButtonSymbolOptions): TextInputAttribute;

  /**
   * Set the cancel button style
   *
   * @param { CancelButtonOptions | CancelButtonSymbolOptions } symbolOptions - indicates the style of the cancel button.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  cancelButton(symbolOptions: CancelButtonOptions | CancelButtonSymbolOptions): TextInputAttribute;

  /**
   * Sets selection when on focus.
   *
   * @param { boolean } value - Sets selection or not.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Sets selection when on focus.
   *
   * @param { boolean } value - Sets selection or not.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectAll(value: boolean): TextInputAttribute;

  /**
   * Called when the minimum font size of the font is set.
   *
   * @param { number | string | Resource } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  minFontSize(value: number | string | Resource): TextInputAttribute;

  /**
   * Called when the maximum font size of the font is set.
   *
   * @param { number | string | Resource } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxFontSize(value: number | string | Resource): TextInputAttribute;

  /**
   * Called when the minimum font scale of the font is set.
   *
   * @param { Optional<number | Resource> } scale
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  minFontScale(scale: Optional<number | Resource>): TextInputAttribute;

  /**
   * Called when the maximum font scale of the font is set.
   *
   * @param { Optional<number | Resource> } scale
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxFontScale(scale: Optional<number | Resource>): TextInputAttribute;
  
  /**
   * Called when the height adaptive policy is set.
   *
   * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextInputAttribute;

  /**
   * Sets whether enable auto fill or not.
   *
   * @param { boolean } value - Indicates the flag whether autofill is enabled.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Sets whether enable auto fill or not.
   *
   * @param { boolean } value - Indicates the flag whether autofill is enabled.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableAutoFill(value: boolean): TextInputAttribute;

  /**
   * Called when the text decoration of the text is set.
   *
   * @param { TextDecorationOptions } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  decoration(value: TextDecorationOptions): TextInputAttribute;

  /**
   * Called when the distance between text fonts is set.
   *
   * @param { number | string | Resource } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  letterSpacing(value: number | string | Resource): TextInputAttribute;

  /**
   * Called when the line height of the font is set.
   *
   * @param { number | string | Resource } value
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lineHeight(value: number | string | Resource): TextInputAttribute;

  /**
   * Define the password rules of the text input.
   *
   * @param { string } value - Indicates the password rules. 
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Define the password rules of the text input.
   *
   * @param { string } value - Indicates the password rules. 
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  passwordRules(value: string): TextInputAttribute;

  /**
   * Set font feature.
   *
   * @param { string } value - The fontFeature.
   * normal | <feature-tag-value>, 
   * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
   * the values of <feature-tag-value> reference to doc of TextInput component
   * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFeature(value: string): TextInputAttribute;  

  /**
   * Define the password visible mode of the text input.
   *
   * @param { boolean } visible - Indicates the password visible mode. 
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showPassword(visible: boolean): TextInputAttribute;

  /**
   * Called when changing the password visible mode of the text input.
   *
   * @param { Callback<boolean> } callback - callback of the password visible mode change event.
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSecurityStateChange(callback: Callback<boolean>): TextInputAttribute;

  /**
   * Get text value information when about to input.
   *
   * @param { Callback<InsertValue, boolean> } callback - The triggered function when text content is about to insert.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): TextInputAttribute;

  /**
   * Get text value information when completed input.
   *
   * @param { Callback<InsertValue> } callback - The triggered function when text content has been inserted.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDidInsert(callback: Callback<InsertValue>): TextInputAttribute;

  /**
   * Get text value information when about to delete.
   *
   * @param { Callback<DeleteValue, boolean> } callback - The triggered function when text content is about to delete.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): TextInputAttribute;

  /**
   * Get text value information when the deletion has been completed
   *
   * @param { Callback<DeleteValue> } callback - The triggered function when text content has been deleted.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDidDelete(callback: Callback<DeleteValue>): TextInputAttribute;

  /**
   * Set the custom text menu.
   *
   * @param { EditMenuOptions } editMenu - Customize text menu options.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  editMenuOptions(editMenu: EditMenuOptions): TextInputAttribute;

  /**
   * Define the preview text mode of the text input.
   *
   * @param { boolean } enable - Indicates the preview text mode.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enablePreviewText(enable: boolean): TextInputAttribute;

  /**
   * Enable or disable haptic feedback.
   *
   * @param { boolean } isEnabled - Default value is true, set false to disable haptic feedback.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableHapticFeedback(isEnabled: boolean): TextInputAttribute;

  /**
   * Set text mode of automatic case mode switching.
   *
   * @param { AutoCapitalizationMode } mode - Automatic case mode switching.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): TextInputAttribute;

  /**
   * Set the text with half leading.
   *
   * @param { Optional<boolean> } halfLeading
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  halfLeading(halfLeading: Optional<boolean>): TextInputAttribute;
  
  /**
   * Set the ellipsis mode.
   *
   * @param { EllipsisMode } mode - The ellipsis mode.
   * @returns { TextInputAttribute } The attribute of TextInput.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ellipsisMode(mode: Optional<EllipsisMode>): TextInputAttribute;

  /**
   * Set whether stop backPressed callback event or not.
   *
   * @param { Optional<boolean> } isStopped - Default value is true, set false to trigger the latest callback event.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  stopBackPress(isStopped: Optional<boolean>): TextInputAttribute;

  /**
   * Get text value information when about to change.
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - The triggered function when text content is about to change.
   * @returns { TextInputAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextInputAttribute;

  /**
   * Set the keyboard appearance.
   *
   * @param { Optional<KeyboardAppearance> } appearance - Default value is KeyboardAppearance.NONE_IMMERSIVE
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2

   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextInputAttribute;
}

/**
 * Defines TextInput Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines TextInput Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TextInput Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TextInput: TextInputInterface;

/**
 * Defines TextInput Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines TextInput Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TextInput Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TextInputInstance: TextInputAttribute;
