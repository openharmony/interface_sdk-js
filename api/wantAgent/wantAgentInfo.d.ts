/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * The module defines the information required for triggering the WantAgent.
 *
 * @file WantAgentInfo
 * @kit AbilityKit
 */

import type abilityWantAgent from '../@ohos.app.ability.wantAgent';
import Want from '../@ohos.app.ability.Want';
/*** if arkts dynamic */
import wantAgent from '../@ohos.wantAgent';
/*** endif */
/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * Defines the information required for triggering a WantAgent object. The information can be used as an input parameter
 * in [getWantAgent](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#wantagentgetwantagent) to
 * obtain a specified WantAgent object.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface WantAgentInfo {
  /**
   * The wants array is a reserved capability. Currently, only one want is supported. If multiple wants are passed in,
   * only the first member of the wants array is used.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  wants: Array<Want>;

  /**
   * Operation type. If this parameter is not set, no default operation type is used.
   *
   * This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use
   * actionType<sup>11+</sup> instead.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead WantAgentInfo.actionType
   */
  operationType?: wantAgent.OperationType;

  /**
   * Action execution attribute. If this parameter is not set, no execution attribute is used.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  actionType?: abilityWantAgent.OperationType;

  /**
   * Request code defined by the developer, used to identify the action to be executed.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  requestCode: int;

  /**
   * Action execution attribute. If this parameter is not set, no execution attribute is used.
   *
   * This attribute is supported since API version 7 and deprecated since API version 11. You are advised to use
   * actionFlags<sup>11+</sup> instead.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead WantAgentInfo.actionFlags
   */
  wantAgentFlags?: Array<wantAgent.WantAgentFlags>;

  /**
   * Array of flags for using the WantAgent object.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  actionFlags?: Array<abilityWantAgent.WantAgentFlags>;

  /**
   * Extra data used to pass custom extended information. This parameter is a key-value pair object,
   * where key is a string key name and value is a value of any type. You are advised to use the
   * type-safe extraInfos attribute instead. If both extraInfo and extraInfos are set, extraInfos
   * takes effect and extraInfo is ignored.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  extraInfo?: { [key: string]: any };

  /**
   * Extra information about how the Want starts an ability.
   * If there is no extra information to set, this constant can be left empty.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;

  /**
   * Extra data used to pass custom key-value pair information in a type-safe manner. You are advised
   * to use this attribute instead of extraInfo. When both are set, this attribute takes precedence.
   * Pass this parameter when you need to carry additional custom data when triggering the WantAgent.
   * If this parameter is not passed, it defaults to null and no extra data is carried.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  extraInfos?: Record<string, Object>;

  /**
   * Extra information about how the Want starts an ability.
   * If there is no extra information to set, this constant can be left empty.
   * The ability of this property is same as extraInfo. If both are set, this property will be used.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  extraInfos?: Record<string, RecordData>;

  /**
   * User ID.
   * Value range: greater than or equal to 0.
   * Pass this parameter when a specific user needs to be specified. It applies to cross-user operation
   * scenarios (for example, a system application manages applications of other users). If not passed,
   * the default is the user ID of the caller.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  userId?: int;
}

/**
 * Defines the information required for triggering a local WantAgent object. The information can be used as an input
 * parameter in
 * [createLocalWantAgent](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent-sys.md#wantagentcreatelocalwantagent20)
 * to obtain a local WantAgent object.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
export interface LocalWantAgentInfo {
  /**
   * List of actions that will be executed. Currently, only one Want is supported. When multiple Wants are passed in,
   * the system uses only the first member of the wants array and ignores the others.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  wants: Array<Want>;

  /**
   * Type of the action that will be executed, used to specify the trigger mode of the WantAgent (for example,
   * starting an ability or sending an event). For details about the values, see the OperationType enum description.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  operationType?: abilityWantAgent.OperationType;

  /**
   * Request code defined by the developer, used to identify the action that will be executed, so that the
   * corresponding action can be identified and matched by this request code later. A unique value is recommended
   * to avoid confusion.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  requestCode: int;
}