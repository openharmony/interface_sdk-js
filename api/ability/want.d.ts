/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Want is the basic communication component of the system.
 *
 * @interface Want
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.app.ability.Want
 */
export declare interface Want {
  /**
   * device id
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  deviceId?: string;

  /**
   * bundle name
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  bundleName?: string;

  /**
   * ability name
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  abilityName?: string;

  /**
   * The description of a URI in a Want.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  uri?: string;

  /**
   * The description of the type in this Want.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  type?: string;

  /**
   * The options of the flags in this Want.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  flags?: number;

  /**
   * The description of an action in an want.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  action?: string;

  /**
   * The description of the WantParams object in an Want
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  parameters?: { [key: string]: any };

  /**
   * The description of a entities in a Want.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6
   * @deprecated since 9
   */
  entities?: Array<string>;
}
