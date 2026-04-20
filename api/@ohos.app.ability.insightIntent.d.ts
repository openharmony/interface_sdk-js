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

import Want from './@ohos.app.ability.Want';
import type wantConstant from './@ohos.app.ability.wantConstant';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * interface of insightIntent.
 *
 * @namespace insightIntent
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace insightIntent {
  /**
   * Enum for supported execute mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum ExecuteMode {
    /**
     * UIAbility foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    UI_ABILITY_FOREGROUND = 0,

    /**
     * UIAbility background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    UI_ABILITY_BACKGROUND = 1,

    /**
     * UIExtensionAbility.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    UI_EXTENSION_ABILITY = 2,

    /**
     * ServiceExtensionAbility.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    SERVICE_EXTENSION_ABILITY = 3,
  }

  /**
   * Result of intent execution.
   *
   * @typedef ExecuteResult
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExecuteResult {
    /**
     * Indicates result code.
     *
     * @type { int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * Indicates execute result.
     *
     * @type { ?Record<string, Object> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @atomicservice
     * @since 11 dynamic
     */
    result?: Record<string, Object>;

    /**
     * Indicates execute result.
     *
     * @type { ?Record<string, RecordData> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 23 static
     */
    result?: Record<string, RecordData>;

    /**
     * Indicates the URIs will be authorized to the insight intent driver.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    uris?: Array<string>;

    /**
     * Indicates the URIs read and write permissions which consistent with {@link Want#flags},
     * flags must be one of {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION}|
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION}.
     *
     * @type { ?int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    flags?: int;
  }

  /**
   * Define IntentEntity.
   *
   * @interface IntentEntity
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  interface IntentEntity {
    /**
     * The entity Id.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    entityId: string;
  }
  
  /**
   * Enum for query entity mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum QueryType {
    /**
     * Query all entities.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ALL = 'all',

    /**
     * Query entities by property.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    BY_PROPERTY = 'byProperty',
  }

  /**
   * Parameter for query entity.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface QueryEntityParam {
    /**
     * The query type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    queryType: QueryType;

    /**
     * Indicates the parameters when querying entities by property.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * Indicates the parameters when querying entities by property.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * Define AppIntentEntity.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
  */
  abstract class AppIntentEntity<T> implements IntentEntity {
    /**
     * Called when query entity execute.
     *
     * @param { QueryEntityParam } params - The params of query entity.
     * @returns { Promise<Array<T>> } - Returns an array of subclasses of the AppIntentEntity class, support promise.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    abstract onQueryEntity(params: QueryEntityParam): Promise<Array<T>>;

    /**
     * The display name of entity.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    displayName: string;
  }

  /**
   * The class of insight intent result.
   *
   * @interface IntentResult<T>
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  interface IntentResult<T> {
    /**
     * The result code.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    code: int;

    /**
     * The insight intent result.
     *
     * @type { ?T }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    result?: T;
  }

  /**
   * Return mode for insight intent execution results.
   * 
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  enum ReturnMode {  
    /**
     * Returns execution results through callback.
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    CALLBACK = 0,

    /**
     * Returns execution results through call function.
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    FUNCTION = 1
  }
}

export default insightIntent;
