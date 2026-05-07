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
 * 表示提供自动填充类型的枚举。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
export enum AutoFillType {
  /**
   * 表示未指定的类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  UNSPECIFIED = 0,

  /**
   * 密码类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  PASSWORD = 1,

  /**
   * 用户名的类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  USER_NAME = 2,

  /**
   * 新密码的类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  NEW_PASSWORD = 3,

  /**
   * 详细地址类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  FULL_STREET_ADDRESS = 4,

  /**
   * 门牌号类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  HOUSE_NUMBER = 5,

  /**
   * 区/县类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  DISTRICT_ADDRESS = 6,

  /**
   * 市类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  CITY_ADDRESS = 7,

  /**
   * 省类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PROVINCE_ADDRESS = 8,

  /**
   * 国家类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  COUNTRY_ADDRESS = 9,

  /**
   * 姓名类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PERSON_FULL_NAME = 10,

  /**
   * 姓氏类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PERSON_LAST_NAME = 11,

  /**
   * 名字类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PERSON_FIRST_NAME = 12,

  /**
   * 手机号类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PHONE_NUMBER = 13,

  /**
   * 国家和地区代码类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  PHONE_COUNTRY_CODE = 14,

  /**
   * 包含国家和地区代码的手机号类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  FULL_PHONE_NUMBER = 15,

  /**
   * 邮箱地址类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  EMAIL_ADDRESS = 16,

  /**
   * 银行卡号类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  BANK_CARD_NUMBER = 17,

  /**
   * 身份证号类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  ID_CARD_NUMBER = 18,

  /**
   * 昵称类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  NICKNAME = 24,

  /**
   * 无街道地址类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  DETAIL_INFO_WITHOUT_STREET = 25,

  /**
   * 标准地址类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  FORMAT_ADDRESS = 26,

  /**
   * 护照号。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  PASSPORT_NUMBER = 27,

  /**
   * 护照有效期。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  VALIDITY = 28,

  /**
   * 护照签发地。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  ISSUE_AT = 29,

  /**
   * 发票抬头名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  ORGANIZATION = 30,

  /**
   * 税号。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  TAX_ID = 31,

  /**
   * 所在地区。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  ADDRESS_CITY_AND_STATE = 32,

  /**
   * 航班号。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  FLIGHT_NUMBER = 33,

  /**
   * 驾驶证号。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  LICENSE_NUMBER = 34,

  /**
   * 驾驶证档案编号。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  LICENSE_FILE_NUMBER = 35,

  /**
   * 车牌号。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  LICENSE_PLATE = 36,

  /**
   * 行驶证发动机号。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  ENGINE_NUMBER = 37,

  /**
   * 车辆识别号。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  LICENSE_CHASSIS_NUMBER = 38,
}