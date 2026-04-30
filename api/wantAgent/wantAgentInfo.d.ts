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
 * @file
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
   * Array of all Want objects. Currently, only one Want is supported. The array is reserved for future capability
   * expansion. If multiple values are passed in, only the first member in the array is used.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  wants: Array<Want>;

  /**
   * Operation type.
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
   * Operation type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  actionType?: abilityWantAgent.OperationType;

  /**
   * Custom request code, which is used to identify the operation to execute.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  requestCode: int;

  /**
   * Array of flags for using the WantAgent object.
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
   * Extra information.
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
   * Extra information. You are advised to use this property to replace **extraInfo**. When this property is set,
   * **extraInfo** does not take effect.
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
   *
   * The value must be greater than or equal to 0.
   *
   * The default value is the user ID of the caller.
   *
   * This API can be used only in the stage model.
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
   * Array of all Want objects. Currently, only one Want object is supported. If multiple values are passed in, only the
   * first member in the array is used.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  wants: Array<Want>;

  /**
   * Type of the operation to execute.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  operationType?: abilityWantAgent.OperationType;

  /**
   * Custom request code, which is used to identify the operation to execute.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  requestCode: int;
}