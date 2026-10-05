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
 * @file 执行意图调用
 * @kit AbilityKit
 */

import Want from './@ohos.app.ability.Want';
import wantConstant from './@ohos.app.ability.wantConstant';
import type { AsyncCallback } from './@ohos.base';
import type insightIntent from './@ohos.app.ability.insightIntent';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * 本模块提供执行意图调用的能力，系统根据用户交互等信息执行意图调用。
 * 
 * > **说明：**
 * >
 * > 本模块从API version 20开始支持通过
 * > [@InsightIntentLink]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentLink}
 * > 装饰器定义的意图来实现应用跳转。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace insightIntentDriver {
  /**
   * 执行意图调用的参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExecuteParam {
    /**
     * 意图调用Ability所属的应用名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 意图调用Ability所属的模块名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * 意图调用Ability名称。 如果通过
     * [@InsightIntentLink]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentLink}
     * 装饰器定义的意图来实现应用跳转，此字段传空字符串即可。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 意图调用名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    insightIntentName: string;

    /**
     * 意图调用参数。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    insightIntentParam: Record<string, Object>;

    /**
     * Indicates the insight intent param.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    insightIntentParam: Record<string, RecordData>;

    /**
     * 意图调用执行模式。 如果通过
     * [@InsightIntentLink]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentLink}
     * 装饰器定义的意图来实现应用跳转，此字段需填写（可填任意符合定义的值），但实际不会生效。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    executeMode: insightIntent.ExecuteMode;

    /**
     * 意图调用时指定的物理屏幕id，该参数应为整数，仅在executeMode为UI_ABILITY_FOREGROUND时生效。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * 意图调用时，意图调用方给意图执行方授权的URI列表。 如果通过
     * [@InsightIntentLink]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentLink}
     * 装饰器定义的意图来实现应用跳转，此字段必选，仅读取数组第一个元素作为[openLink]{@link ./application/UIAbilityContext:UIAbilityContext.openLink}的URI。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    uris?: Array<string>;

    /**
     * 意图调用时，意图调用方给意图执行方授权的uris的[flags]{@link @ohos.app.ability.wantConstant:wantConstant.Flags}。 
     * 
     * > **说明：**
     * >
     * > 该参数仅支持FLAG_AUTH_READ_URI_PERMISSION、FLAG_AUTH_WRITE_URI_PERMISSION、FLAG_AUTH_READ_URI_PERMISSION|
     * > FLAG_AUTH_WRITE_URI_PERMISSION。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    flags?: int;

    /**
     * 目标意图所属的用户ID。
     * 
     * > **说明：**
     * >
     * > 如果调用方应用的用户ID与目标意图所属的用户ID不同，则需要申请权限`ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS`。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userId?: int;

    /**
     * 连接的目标设备ID。
     * 
     * > **说明：**
     * >
     * > 如果调用方应用的设备ID与目标意图所属的设备ID不同，则需要申请权限`ohos.permission.EXECUTE_DISTRIBUTED_INTENT`。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceId?: string;
  }

  /**
   * 意图筛选器，描述目标意图的筛选条件，用于筛选设备上符合条件的意图。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface InsightIntentInfoFilter {
    /**
     * 意图信息（[InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}）的标识，用于表示查询全量意图信息或者简要意图信息，取值可参考
     * [GetInsightIntentFlag]{@link insightIntentDriver.GetInsightIntentFlag}。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    intentFlags: int;

    /**
     * 目标意图所属的应用包名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bundleName?: string;

    /**
     * 目标意图所属的模块名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    moduleName?: string;

    /**
     * 目标意图名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    intentName?: string;

    /**
     * 目标意图所属的用户ID。
     * 
     * > **说明：**
     * >
     * > 如果调用方应用的用户ID与目标意图所属的用户ID不同，则需要申请权限`ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS`。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userId?: int;
  }

  /**
   * 查询洞察意图实体时的Param。
   *
   * @typedef QueryParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface QueryParam {
    /**
     * 目标意图实体所属的应用包名称。
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 26.0.0 dynamic&static
     */
    bundleName: string;

    /**
     * 目标意图实体所属的模块名称。
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 26.0.0 dynamic&static
     */
    moduleName: string;

    /**
     * 目标意图实体所属的意图名称。
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    intentName: string;

    /**
     * 表示
     * [@InsightIntentEntity]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntity}
     * 修饰的目标意图实体的类名。
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    className: string;

    /**
     * 意图实体查询参数，包含查询模式及查询条件，用于指定意图实体查询方式。
     *
     * @type { insightIntent.QueryEntityParam }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    queryEntityParam: insightIntent.QueryEntityParam;

    /**
     * 目标意图实体所属的用户ID。
     * 
     * > **说明：**
     * >
     * > 如果调用方应用的用户ID与目标意图实体所属的用户ID不同，则需要申请权限ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS。
     *
     * @type { ?int }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    userId?: int;
  }

  /**
   * 执行意图调用的接口。使用callback异步回调。
   * 当调用方在后台时，需要申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限。
   * 当意图调用执行模式[ExecuteMode]{@link @ohos.app.ability.insightIntent:insightIntent.ExecuteMode}取值为UI_ABILITY_BACKGROUND时，需要
   * 申请`ohos.permission.ABILITY_BACKGROUND_COMMUNICATION`权限。
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - 执行意图调用的参数。
   * @param { AsyncCallback<insightIntent.ExecuteResult> } callback - 回调函数，返回意图调用执行结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000137 - Cross-device execution failed due to a connection error. [since 26.0.0]
   * @throws { BusinessError } 16000138 - Device disconnected during cross-device intent execution. [since 26.0.0]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function execute(param: ExecuteParam, callback: AsyncCallback<insightIntent.ExecuteResult>): void;

  /**
   * 执行意图调用的接口。使用Promise异步回调。
   * 当调用方在后台时，需要申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限。
   * 当意图调用执行模式[ExecuteMode]{@link @ohos.app.ability.insightIntent:insightIntent.ExecuteMode}取值为UI_ABILITY_BACKGROUND时，需要
   * 申请`ohos.permission.ABILITY_BACKGROUND_COMMUNICATION`权限。
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - 执行意图调用的参数。
   * @returns { Promise<insightIntent.ExecuteResult> } Promise used to return the intent call execution result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000137 - Cross-device execution failed due to a connection error. [since 26.0.0]
   * @throws { BusinessError } 16000138 - Device disconnected during cross-device intent execution. [since 26.0.0]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function execute(param: ExecuteParam): Promise<insightIntent.ExecuteResult>;

  /**
   * 表示通过意图装饰器定义的意图类型，可通过[getAllInsightIntentInfo]{@link insightIntentDriver.getAllInsightIntentInfo}等方法返回的
   * [LinkIntentInfo]{@link insightIntentDriver.LinkIntentInfo}获取。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum InsightIntentType {
    /**
     * [@InsightIntentLink]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentLink}
     * 类型装饰器。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    LINK = '@InsightIntentLink',

    /**
     * [@InsightIntentPage]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentPage}
     * 类型装饰器。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PAGE = '@InsightIntentPage',

    /**
     * [@InsightIntentEntry]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntry}
     * 类型装饰器。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    ENTRY = '@InsightIntentEntry',

    /**
     * [@InsightIntentFunctionMethod]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentFunctionMethod}
     * 类型装饰器。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    FUNCTION = '@InsightIntentFunctionMethod',

    /**
     * [@InsightIntentForm]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentForm}
     * 类型装饰器。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    FORM = '@InsightIntentForm'
  }

  /**
   * [使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)支持的意图执行模式。例如，将
   * [insight_intent.json配置文件](docroot://application-models/insight-intent-config-development.md#insight_intentjson配置文件说明)
   * 中的executeMode设置为"foreground"，表示支持与UIAbility组件绑定的意图在前台运行。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum ExecuteModeForConfiguration {
    /**
     * 表示支持与UIAbility组件绑定的意图在前台运行。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FOREGROUND = 0,

    /**
     * 表示支持与UIAbility组件绑定的意图在后台运行。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BACKGROUND = 1
  }

  /**
   * 用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的UIAbility组件信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface UIAbilityIntentInfo {
    /**
     * 意图绑定的UIAbility组件名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly abilityName: string;
    /**
     * 意图调用执行模式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly executeMode: ExecuteModeForConfiguration[];
  }

  /**
   * 用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的UIExtensionAbility组件信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface UIExtensionIntentInfo {
    /**
     * 意图绑定的UIAbility组件名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly abilityName: string;
  }

  /**
   * 用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的ServiceExtensionAbility组件信息
   * 。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ServiceExtensionIntentInfo {
    /**
     * 意图绑定的UIAbility组件名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly abilityName: string;
  }

  /**
   * 用于描述意图的开发方式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DevelopType {
    /**
     * 使用配置文件开发的意图。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    CONFIGURATION = 'configuration',

    /**
     * 使用装饰器开发的意图。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DECORATOR = 'decorator'
  }

  /**
   * 用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)的特有信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface SubIntentInfoForConfiguration {
    /**
     * 表示意图执行文件的相对路径，取值为长度不超过127字节的字符串。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly srcEntry: string;

    /**
     * 表示意图绑定的UIAbility组件信息，包含"ability"字段和"executeMode"字段。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly uiAbility?: UIAbilityIntentInfo;

    /**
     * 表示意图绑定的UIExtensionAbility组件信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly uiExtension?: UIExtensionIntentInfo;
    /**
     * 表示意图绑定的ServiceExtensionAbility组件信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly serviceExtension?: ServiceExtensionIntentInfo;

    /**
     * 表示意图绑定的卡片信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly form?: FormIntentInfo;

    /**
     * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    readonly inputParams?: Array<Record<string, Object>>;

    /**
     * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly inputParams?: Array<Record<string, RecordData>>;

    /**
     * 表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    readonly outputParams?: Array<Record<string, Object>>;

    /**
     * 表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly outputParams?: Array<Record<string, RecordData>>;

    /**
     * 表示意图包含的实体信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    readonly entities?: Record<string, Object>;

    /**
     * 表示意图包含的实体信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly entities?: Record<string, RecordData>;
  }
  /**
   * 意图信息，表示设备中意图的具体参数配置。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface InsightIntentInfo {
    /**
     * 表示应用包名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
     * 表示模块名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly moduleName: string;

    /**
     * 表示意图名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly intentName: string;

    /**
     * 表示意图垂域，用于将意图按垂直领域分类（例如：视频、音乐、游戏），取值范围参见
     * [各垂域的智慧分发特性列表](https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215)
     * 中的垂域字段。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly domain: string;

    /**
     * 意图版本号，当意图能力演进时，可通过版本号进行区分和管理。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly intentVersion: string;

    /**
     * 表示在意图框架中显示的意图名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly displayName: string;

    /**
     * 表示在意图框架中显示的意图描述。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly displayDescription: string;

    /**
     * 标准意图名称，如果在标准意图列表中存在schema与intentVersion字段均匹配的意图，则按照标准意图处理。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly schema: string;

    /**
     * 表示意图图标。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly icon: string;

    /**
     * 表示意图的功能，用于大型语言模型理解该意图。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly llmDescription: string;

    /**
     * 表示意图的搜索关键字。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly keywords: string[];

    /**
     * 表示通过意图装饰器定义的意图类型。
     * 
     * > **说明：**
     * >
     * > 对于使用配置文件开发的意图，该字段返回值默认为[@InsightIntentEntry](./js-apis-app-ability-InsightIntentDecorator.md#insightintententry)类
     * > 型装饰器。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly intentType: InsightIntentType;

    /**
     * 表示特定意图装饰器的意图信息。 
     * 
     * > **说明：**
     * >
     * > 对于使用配置文件开发的意图，该字段返回值默认为[EntryIntentInfo](#entryintentinfo20)。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly subIntentInfo: LinkIntentInfo | PageIntentInfo | FunctionIntentInfo | FormIntentInfo | EntryIntentInfo;

    /**
     * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly parameters: Record<string, Object>;

    /**
     * The insight intent parameters.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly parameters: Record<string, RecordData>;

    /**
     * 表示意图调用返回的结果。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly result: Record<string, Object>;

    /**
     * The type definition of the result returned by intent call.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly result: Record<string, RecordData>;

    /**
     * 表示意图包含的实体信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly entities: Array<EntityInfo>;

    /**
     * 表示意图的开发方式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly developType?: DevelopType;

    /**
     * 表示使用配置文件开发的意图的特有信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly subIntentInfoForConfiguration?: SubIntentInfoForConfiguration;
  }

  /**
   * LinkIntentInfo用于描述
   * [@InsightIntentLink]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentLink}
   * 装饰器支持的参数，例如应用间跳转需要的uri信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface LinkIntentInfo {
    /**
     * 表示意图的uri信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly uri: string;
  }

  /**
   * PageIntentInfo用于描述
   * [@InsightIntentPage]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentPage}
   * 装饰器支持的参数，例如目标页面的
   * [NavDestination]{@link ./@internal/component/ets/nav_destination}名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface PageIntentInfo {
    /**
     * UIAbility组件名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly uiAbility: string;

    /**
     * 页面名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly pagePath: string;

    /**
     * 表示与意图绑定[Navigation]{@link @internal/component/ets/navigation}的id。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly navigationId: string;

    /**
     * 表示与意图绑定
     * [NavDestination组件]{@link ./@internal/component/ets/nav_destination}的名称
     * 。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly navDestinationName: string;
  }

  /**
   * [@InsightIntentFunctionMethod]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentFunctionMethod}
   * 装饰器的参数类型，当前全部属性均继承自[IntentDecoratorInfo]{@link @ohos.app.ability.InsightIntentDecorator:IntentDecoratorInfo}。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface FunctionIntentInfo {  }

  /**
   * FormIntentInfo用于描述
   * [@InsightIntentForm]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentForm}
   * 装饰器支持的参数，例如卡片名称。同时，该接口也可用于描述[使用配置文件开发的意图](docroot://application-models/insight-intent-config-development.md)所绑定的卡片信
   * 息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface FormIntentInfo {
    /**
     * Ability名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
     * 表示[FormExtensionAbility]{@link @ohos.app.form.FormExtensionAbility}绑定的卡片名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly formName: string;
  }

  /**
   * EntryIntentInfo用于描述
   * [@InsightIntentEntry]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntry}
   * 装饰器支持的参数，例如意图调用执行模式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface EntryIntentInfo {
    /**
     * Ability名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
     * 意图调用执行模式。即拉起绑定的Ability时支持的执行模式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly executeMode: insightIntent.ExecuteMode[];
  }

  /**
   * 意图信息（[InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}）的标识，用于
   * [getAllInsightIntentInfo]{@link insightIntentDriver.getInsightIntentInfoByBundleName}、
   * [getInsightIntentInfoByBundleName]{@link insightIntentDriver.getInsightIntentInfoByBundleName}和
   * [getInsightIntentInfoByIntentName]{@link insightIntentDriver.getInsightIntentInfoByIntentName}接口查询意图信息。
   * 
   * > **说明：**
   * >
   * > - 对于使用配置文件开发的意图，通过上述接口查询的全量信息和简要信息完全一致。
   * >
   * > - 对于使用装饰器开发的意图，通过上述接口查询的全量信息和简要信息存在差别，详见下表。
   * >
   * > 表1 全量意图信息与简要意图信息差别
   * >
   * > | 属性 | 全量意图信息是否包含 | 简要意图信息是否包含 |
   * > | -------- | -------- | -------- |
   * > | bundleName | 是 | 是 | 
   * > | moduleName | 是 | 是 |
   * > | intentName | 是 | 是 |
   * > | domain | 是 | 否 |
   * > | intentVersion | 是 | 否 |
   * > | displayName | 是 | 是 |
   * > | displayDescription | 是 | 否 |
   * > | schema | 是 | 否 |
   * > | icon | 是 | 否 |
   * > | llmDescription | 是 | 否 |
   * > | keywords | 是 | 否 |
   * > | intentType | 是 | 是 |
   * > | subIntentInfo | 是 | 是 |
   * > | parameters | 是 | 是 |
   * > | entities | 否 | 否 |
   * > | developType<sup>23+</sup> | 是 | 是 |
   * > | subIntentInfoForConfiguration<sup>23+</sup> | 否 | 否 |
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum GetInsightIntentFlag {
    /**
     * 查询[InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}中的除entities以外的全量意图信息，详见下表。查询entities信息需要使用
     * GET_ENTITY_INFO。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    GET_FULL_INSIGHT_INTENT = 0x00000001,

    /**
     * 查询[InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}中的简要意图信息，详见下表。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    GET_SUMMARY_INSIGHT_INTENT = 0x00000002,

    /**
     * 查询[EntityInfo]{@link insightIntentDriver.EntityInfo}的信息，不可单独使用，必选结合GET_FULL_INSIGHT_INTENT或者
     * GET_SUMMARY_INSIGHT_INTENT使用。例如`GET_FULL_INSIGHT_INTENT | GET_ENTITY_INFO`。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    GET_ENTITY_INFO = 0x00000004
  }

  /**
   * EntityInfo继承自[IntentEntityDecoratorInfo]{@link @ohos.app.ability.InsightIntentDecorator:IntentEntityDecoratorInfo}，
   * 用于描述
   * [@InsightIntentEntity]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntity}
   * 装饰器定义的意图实体的信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface EntityInfo {
    /**
     * 表示
     * [@InsightIntentEntity]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntity}
     * 装饰器修饰的类名。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly className: string;

    /**
     * 表示意图实体的ID。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly entityId: string;

    /**
     * 表示意图实体类别。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly entityCategory: string;

    /**
     * 表示意图实体参数的数据格式声明，用于意图调用时定义实体参数的数据格式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     */
    readonly parameters: Record<string, Object>;

    /**
     * 表示意图实体参数的数据格式声明，用于意图调用时定义实体参数的数据格式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    readonly parameters: Record<string, RecordData>;

    /**
     * 表示
     * [@InsightIntentEntity]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntity}
     * 装饰器修饰的类的父类名。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    readonly parentClassName: string;

    /**
     * 表示
     * [@InsightIntentEntity]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntity}
     * 装饰器修饰的意图实体类是否支持查询，只有继承自
     * [insightIntent.AppIntentEntity]{@link @ohos.app.ability.insightIntent:insightIntent.AppIntentEntity}
     * 类的意图实体支持查询。
     * - true：支持查询。
     * - false：不支持查询。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly isQueryable?: boolean;

    /**
     * 表示
     * [@InsightIntentEntity]{@link @ohos.app.ability.InsightIntentDecorator:InsightIntentEntity}
     * 装饰器修饰的意图实体支持通过哪些属性进行查询。意图实体查询参数
     * [parameters]{@link @ohos.app.ability.insightIntent:insightIntent.QueryEntityParam}
     * 的key值必须在该属性列表中。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly supportedQueryProperties?: string[];
  }

  /**
   * 查询当前设备上的所有意图信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { int } intentFlags - 意图信息（[InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}）的标识，用于表示查询全量意图信息或者简要意
   *     图信息，参考[GetInsightIntentFlag]{@link insightIntentDriver.GetInsightIntentFlag}。
   * @returns { Promise<Array<InsightIntentInfo>> } Promise对象，返回意图信息对象数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service fails to communicate with the dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllInsightIntentInfo(intentFlags: int): Promise<Array<InsightIntentInfo>>;

  /**
   * 根据包名查询当前设备上的意图信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用包名称。 <br/>**说明：**<br/> 若包名不存在，则返回空数组。
   * @param { int } intentFlags - 意图信息（[InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}）的标识，用于表示查询全量意图信息或者简要意
   *     图信息，参考[GetInsightIntentFlag]{@link insightIntentDriver.GetInsightIntentFlag}。
   * @returns { Promise<Array<InsightIntentInfo>> } Promise对象，返回意图信息对象数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service fails to communicate with the dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getInsightIntentInfoByBundleName(bundleName: string, intentFlags: int): Promise<Array<InsightIntentInfo>>;

  /**
   * 根据包名、模块名和意图名查询当前设备上的意图信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用包名称。<br/>**说明：**<br/> 若包名不存在，则返回空对象。
   * @param { string } moduleName - 模块名称。<br/>**说明：**<br/> 若模块名不存在，则返回空对象。
   * @param { string } intentName - 意图名称。<br/>**说明：**<br/> 若意图名不存在，则返回空对象。
   * @param { int } intentFlags - 意图信息（[InsightIntentInfo]{@link insightIntentDriver.InsightIntentInfo}）的标识，用于表示查询全量意图信息或者简要意
   *     图信息，参考[GetInsightIntentFlag]{@link insightIntentDriver.GetInsightIntentFlag}。
   * @returns { Promise<InsightIntentInfo> } Promise对象，返回意图信息对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service fails to communicate with the dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getInsightIntentInfoByIntentName(bundleName: string, moduleName: string, intentName: string, intentFlags: int): Promise<InsightIntentInfo>;

  /**
   * Obtains the intent information on the current device based on the given intent filter. This API uses a promise to
   * return the result.<br>If the user ID of the calling application is different from the user ID of the intent, the
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { InsightIntentInfoFilter } filter - Intent filter, which specifies the criteria for selecting a target
   *     intent. It is used to filter intents on the device that meet these criteria.
   * @returns { Promise<Array<InsightIntentInfo>> } Promise used to return an array holding InsightIntentInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getInsightIntentInfoByFilter(filter: InsightIntentInfoFilter): Promise<Array<InsightIntentInfo>>;

  /**
   * 根据[QueryParam]{@link insightIntentDriver.QueryParam}
   * 查询应用的动态意图实体信息。使用Promise异步回调。如果调用方应用的用户ID与目标用户ID不同，则需要申请权限
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS。
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { QueryParam } param - 查询参数。
   * @returns { Promise<Array<Record<string, Object>>> } - Returns the insight intent entity information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function queryEntityInfo(param: QueryParam): Promise<Array<Record<string, Object>>>;

  /**
   * 查询意图实体信息。
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { QueryParam } param - 查询参数。
   * @returns { Promise<Array<Record<string, RecordData>>> } - Returns the insight intent entity information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  function queryEntityInfo(param: QueryParam): Promise<Array<Record<string, RecordData>>>;
}

export default insightIntentDriver;