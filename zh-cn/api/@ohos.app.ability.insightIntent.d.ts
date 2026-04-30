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
 * 本模块提供[意图框架](docroot://application-models/insight-intent-overview.md)基础定义。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace insightIntent {
  /**
   * 意图执行模式。表示系统入口触发意图执行时传递的执行模式，每个意图支持的执行模式在意图开发时定义。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum ExecuteMode {
    /**
     * 将UIAbility在前台显示。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    UI_ABILITY_FOREGROUND = 0,

    /**
     * 将UIAbility在后台拉起。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    UI_ABILITY_BACKGROUND = 1,

    /**
     * 拉起UIExtensionAbility。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    UI_EXTENSION_ABILITY = 2,

    /**
     * 拉起ServiceExtensionAbility。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    SERVICE_EXTENSION_ABILITY = 3
  }

  /**
   * 意图执行的返回结果。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExecuteResult {
    /**
     * 意图执行返回的错误码，由开发者定义。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * 意图执行返回的结果，通常会包含需要返回给系统入口的数据。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     */
    result?: Record<string, Object>;

    /**
     * Indicates execute result.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 23 static
     */
    result?: Record<string, RecordData>;

    /**
     * 意图执行返回的URI列表。该字段需要与flags字段配合使用，根据URI列表将flags字段的相应权限授权给系统入口。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    uris?: Array<string>;

    /**
     * 意图执行返回给系统入口的URI列表的授权权限。
     * 
     * **说明：**
     * 
     * 该参数仅支持FLAG_AUTH_READ_URI_PERMISSION、FLAG_AUTH_WRITE_URI_PERMISSION、FLAG_AUTH_READ_URI_PERMISSION|
     * FLAG_AUTH_WRITE_URI_PERMISSION。权限介绍见[Flags]{@link @ohos.app.ability.wantConstant:wantConstant.Flags}。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    flags?: int;
  }

  /**
   * 意图实体结构体定义，用于定义意图执行过程中涉及的关键信息对象，包括意图参数和意图执行结果等。
   * 
   * 开发者通过继承该类来定义意图实体，继承类需使用
   * [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity)
   * 装饰。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  interface IntentEntity {
    /**
     * 意图实体的ID。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    entityId: string;
  }

  /**
   * 查询实体模式的枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum QueryType {
    /**
     * 查询所有实体。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ALL = 'all',

    /**
     * 根据属性查询实体。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    BY_PROPERTY = 'byProperty'
  }

  /**
   * 查询实体的参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface QueryEntityParam {
    /**
     * 查询类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    queryType: QueryType;

    /**
     * 根据属性查询实体时的参数。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * 根据属性查询实体时的参数。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * 定义AppIntentEntity。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  abstract class AppIntentEntity<T> implements IntentEntity {
    /**
     * 在查询实体执行时调用。
     *
     * @param { QueryEntityParam } params - 查询实体的参数。
     * @returns { Promise<Array<T>> } - Returns an array of subclasses of the AppIntentEntity class, support promise.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    abstract onQueryEntity(params: QueryEntityParam): Promise<Array<T>>;

    /**
     * 实体的显示名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    displayName: string;
  }

  /**
   * 意图执行的返回结果，支持[泛型类型](docroot://quick-start/introduction-to-arkts.md#泛型类和接口)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  interface IntentResult<T> {
    /**
     * 意图执行返回的错误码，由开发者定义。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    code: int;

    /**
     * 意图执行返回的结果，通常会包含需要返回给系统入口的数据。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    result?: T;
  }

  /**
   * 意图执行结果返回给意图拉起方的返回形式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  enum ReturnMode {
    /**
     * 表示意图执行结果将由[意图执行基类]{@link @ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor}中的
     * [onExecuteInUIAbilityForegroundMode]{@link @ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage)}
     * 接口或
     * [onExecuteInUIExtensionAbility]{@link @ohos.app.ability.InsightIntentExecutor:InsightIntentExecutor#onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>, pageLoader: UIExtensionContentSession)}
     * 接口返回。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    CALLBACK = 0,

    /**
     * 表示意图执行结果会延迟返回，直到开发者主动调用[意图提供方管理能力]{@link @ohos.app.ability.insightIntentProvider:insightIntentProvider}中的
     * [sendExecuteResult]{@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendExecuteResult}接口或
     * [sendIntentResult]{@link @ohos.app.ability.insightIntentProvider:insightIntentProvider.sendIntentResult}接口返回意图执行结
     * 果。
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