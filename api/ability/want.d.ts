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
 * @file
 * @kit AbilityKit
 */

/**
 * Want is a carrier for information transfer between objects (application components). Want can be used as a parameter 
 * of 
 * [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>)}
 *  to specify a startup target and information that needs to be carried during startup, for example, **bundleName** and
 *  **abilityName**, which respectively indicate the bundle name of the target ability and the ability name in the 
 * bundle. When ability A needs to start ability B and transfer some data to ability B, it can use Want a carrier to 
 * transfer the data.
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 6 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.app.ability.Want:Want
 */
export declare interface Want {
  /**
   * device id
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.app.ability.Want:Want.deviceId
   */
  deviceId?: string;

  /**
   * bundle name
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.app.ability.Want:Want.bundleName
   */
  bundleName?: string;

  /**
   * ability name
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.app.ability.Want:Want.abilityName
   */
  abilityName?: string;

  /**
   * The description of a URI in a Want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.app.ability.Want:Want.uri
   */
  uri?: string;

  /**
   * The description of the type in this Want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.app.ability.Want:Want.type
   */
  type?: string;

  /**
   * The options of the flags in this Want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.app.ability.Want:Want.flags
   */
  flags?: number;

  /**
   * The description of an action in an want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.app.ability.Want:Want.action
   */
  action?: string;

  /**
   * The description of the WantParams object in an Want
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.app.ability.Want:Want.parameters
   */
  parameters?: { [key: string]: any };

  /**
   * The description of a entities in a Want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.app.ability.Want:Want.entities
   */
  entities?: Array<string>;
}