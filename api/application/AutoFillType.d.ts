/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

/**
 * AutoFillType enumerates the types of elements to be automatically filled in.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export enum AutoFillType {
  /**
   * Undefined type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  UNSPECIFIED = 0,

  /**
   * Password.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  PASSWORD = 1,

  /**
   * Username.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  USER_NAME = 2,

  /**
   * New password.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  NEW_PASSWORD = 3,

  /**
   * Detailed address with street information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  FULL_STREET_ADDRESS = 4,

  /**
   * House number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  HOUSE_NUMBER = 5,

  /**
   * District.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  DISTRICT_ADDRESS = 6,

  /**
   * City.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  CITY_ADDRESS = 7,

  /**
   * Province.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PROVINCE_ADDRESS = 8,

  /**
   * Country/Region.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  COUNTRY_ADDRESS = 9,

  /**
   * Full name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PERSON_FULL_NAME = 10,

  /**
   * Last name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PERSON_LAST_NAME = 11,

  /**
   * First name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PERSON_FIRST_NAME = 12,

   /**
   * Mobile number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PHONE_NUMBER = 13,

  /**
   * Country/Region code.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PHONE_COUNTRY_CODE = 14,

  /**
   * Mobile number with the country/region code.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  FULL_PHONE_NUMBER = 15,

  /**
   * Email address.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  EMAIL_ADDRESS = 16,

  /**
   * Bank card number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  BANK_CARD_NUMBER = 17,

  /**
   * ID card number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  ID_CARD_NUMBER = 18,

  /**
   * Nickname.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  NICKNAME = 24,

  /**
   * Detailed address without street information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  DETAIL_INFO_WITHOUT_STREET = 25,

  /**
   * Standard address.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  FORMAT_ADDRESS = 26,

  /**
   * Passport number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  PASSPORT_NUMBER = 27,

  /**
   * Validity period of the passport.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  VALIDITY = 28,

  /**
   * Location where the passport was issued.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  ISSUE_AT = 29,

  /**
   * Invoice title.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  ORGANIZATION = 30,

  /**
   * Tax ID.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  TAX_ID = 31,

  /**
   * Location (city and state).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  ADDRESS_CITY_AND_STATE = 32,

  /**
   * Flight number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  FLIGHT_NUMBER = 33,

  /**
   * Driver's license number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  LICENSE_NUMBER = 34,

  /**
   * Driver's license file number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  LICENSE_FILE_NUMBER = 35,

  /**
   * License plate.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  LICENSE_PLATE = 36,

  /**
   * Vehicle engine number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  ENGINE_NUMBER = 37,

  /**
   * Chassis number (VIN) of a vehicle.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  LICENSE_CHASSIS_NUMBER = 38
}