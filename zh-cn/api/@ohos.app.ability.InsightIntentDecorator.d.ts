/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import insightIntent from './@ohos.app.ability.insightIntent';

/**
 * 意图装饰器的通用属性，用于定义意图的基本信息（包括意图名称、意图版本号）。适用于本模块的所有装饰器。
 * 
 * > **说明：**
 * >
 * > 如果根据schema与intentVersion字段，在标准意图列表存在匹配的标准意图，系统会将intentName、domain、llmDescription、keywords、parameters、result字段均设置为标准
 * > 意图的相应字段值。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
declare interface IntentDecoratorInfo {
  /**
   * 表示意图名称，是意图的唯一标识。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  intentName: string;

  /**
   * 表示意图垂域，用于将意图按垂直领域分类（例如：视频、音乐、游戏），取值范围参见
   * [各垂域的智慧分发特性列表](https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215)
   * 中的垂域字段。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  domain: string;

  /**
   * 表示意图版本号。当意图能力演进时，可通过版本号进行区分和管理。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  intentVersion: string;

  /**
   * 表示显示给用户的意图名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  displayName: string;

  /**
   * 表示显示给用户的意图描述。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  displayDescription?: string;

  /**
   * 表示接入的标准意图的名称。开发者[接入标准意图](docroot://application-models/insight-intent-definition.md#接入标准意图)时，需要配置该字段，
   * [创建自定义意图](docroot://application-models/insight-intent-definition.md#创建自定义意图)时，无需配置该字段。标准意图列表参见
   * [附录：标准意图接入规范](docroot://application-models/insight-intent-access-specifications.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  schema?: string;

  /**
   * 表示意图图标，用于在AI入口显示。
   * 
   * - 当取值为字符串类型时，表示图标读取网络资源。
   * - 当取值为[Resource](../../reference/apis-localization-kit/js-apis-resource-manager.md)时，表示图标读取本地资源。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  icon?: ResourceStr;

  /**
   * 表示意图的功能，用于大型语言模型理解该意图。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  llmDescription?: string;

  /**
   * 表示意图的搜索关键字。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  keywords?: string[];

  /**
   * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。取值参见
   * [各垂域意图Schema](https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713)
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  parameters?: Record<string, Object>;

  /**
   * 表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  result?: Record<string, Object>;
}

/**
 * LinkIntentDecoratorInfo继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}，用于描述
 * [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)
 * 装饰器支持的参数，例如应用间跳转需要的uri信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
declare interface LinkIntentDecoratorInfo extends IntentDecoratorInfo {
  /**
   * 表示意图的uri信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  uri: string;

  /**
   * 意图参数和uri信息的映射。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  paramMappings?: LinkIntentParamMapping[];
}

/**
 * [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)
 * 装饰器的意图参数类别，用于定义意图参数的传递形式。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
declare enum LinkParamCategory {
  /**
   * 表示意图参数类别为'link'。意图参数将被拼接到uri链接的末尾，以uri链接的形式传给应用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  LINK = 'link',

  /**
   * 表示意图参数类别为'want'。意图参数将通过[Want]{@link @ohos.app.ability.Want:Want}的parameters字段传给应用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  WANT = 'want'
}

/**
 * LinkIntentParamMapping是
 * [@InsightIntentLink](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentlink)
 * 装饰器的意图参数和uri信息的映射。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
declare interface LinkIntentParamMapping {
  /**
   * 表示意图参数的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  paramName: string;

  /**
   * 表示意图参数映射名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  paramMappingName?: string;

  /**
   * 表示意图参数类别。
   * 
   * 若意图参数类别取值为[LINK](#linkparamcategory)，系统获取paramName字段对应的意图参数映射名称，并将该意图参数映射名称拼接到uri链接的末尾(以键值对的形式key=value，key为意图参数映射名
   * 称，value为意图参数值)。
   * 
   * 若意图参数类别为[WANT](#linkparamcategory)，系统获取paramName字段对应的意图参数映射名称，并将该意图参数映射名称及取值通过[Want](./js-apis-app-ability-want.md)
   * 的parameters字段进行传递。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  paramCategory?: LinkParamCategory;
}

/**
 * Define InsightIntentLink.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
export declare const InsightIntentLink: ((intentInfo: LinkIntentDecoratorInfo) => ClassDecorator);

/**
 * PageIntentDecoratorInfo继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}，用于描述
 * [@InsightIntentPage](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentpage)
 * 装饰器支持的参数，例如目标页面的
 * [NavDestination](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10)名称。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
declare interface PageIntentDecoratorInfo extends IntentDecoratorInfo {
  /**
   * 表示与意图绑定的UIAbility名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  uiAbility?: string;

  /**
   * 表示与意图绑定的页面路径，该页面需要是一个实际存在的文件。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  pagePath: string;

  /**
   * 表示与意图绑定的[Navigation组件](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#属性)的id属性。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  navigationId?: string;

  /**
   * 表示与意图绑定
   * [NavDestination组件](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navdestination10)的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  navDestinationName?: string;
}

/**
 * 使用该装饰器装饰当前应用的页面，可以将页面定义为意图，便于AI入口通过意图快速跳转到指定页面。该装饰器支持的参数参见
 * [PageIntentDecoratorInfo]{@link PageIntentDecoratorInfo}。
 * 
 * > **说明：**
 * >
 * > 该装饰器仅支持装饰struct页面。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
export declare const InsightIntentPage: ((intentInfo: PageIntentDecoratorInfo) => ClassDecorator);

/**
 * [@InsightIntentFunctionMethod](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentfunctionmethod)
 * 装饰器的参数类型，当前全部属性均继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
declare interface FunctionIntentDecoratorInfo extends IntentDecoratorInfo {
}

/**
 * 该装饰器与[@InsightIntentFunction]{@link InsightIntentFunction}装饰器必须组合使用。
 * 使用该装饰器来装饰类中的静态函数，同时使用@InsightIntentFunction装饰器来装饰静态函数所属的类，可以将对应的静态函数定义为意图，便于AI入口能够快速执行此函数。
 * 
 * > **说明：**
 * >
 * > 静态方法所在的类需要通过export导出。
 * > 函数的参数名称、参数类型需要与意图定义的参数名称、参数类型保持一致。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
export declare const InsightIntentFunctionMethod: ((intentInfo: FunctionIntentDecoratorInfo) => MethodDecorator);

/**
 * 该装饰器与[@InsightIntentFunctionMethod]{@link InsightIntentFunctionMethod}装饰器必须组合使用。
 * 使用该装饰器来装饰类，同时使用[@InsightIntentFunctionMethod]{@link InsightIntentFunctionMethod}装饰器来装饰类中的静态函数，可以将对应的静态函数定义为意图，
 * 便于AI入口能够快速执行此函数。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
export declare const InsightIntentFunction: (() => ClassDecorator);

/**
 * EntryIntentDecoratorInfo继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}，用于描述
 * [@InsightIntentEntry](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententry)
 * 装饰器支持的参数。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
declare interface EntryIntentDecoratorInfo extends IntentDecoratorInfo {
  /**
   * 表示与意图绑定的Ability名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  abilityName: string;

  /**
   * 表示意图调用执行模式。即拉起绑定的Ability时支持的执行模式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  executeMode: insightIntent.ExecuteMode[];

  /**
   * The execute mode of the intent.
   * For UIAbility, the parameter can be set to insightIntent.ExecuteMode.UI_ABILITY_FOREGROUND or
   * insightIntent.ExecuteMode.UI_ABILITY_UI_ABILITY_BACKGROUND or both of them.
   *
   * @type { ?insightIntent.ExecuteMode[] }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  executeMode?: insightIntent.ExecuteMode[];
}

/**
 * 使用该装饰器装饰一个继承自
 * [InsightIntentEntryExecutor]{@link @ohos.app.ability.InsightIntentEntryExecutor:InsightIntentEntryExecutor}的类，实现意图操作
 * 并配置意图依赖的Ability组件，便于AI入口拉起依赖的Ability组件时，执行对应的意图操作。该装饰器支持的参数参见
 * [EntryIntentDecoratorInfo]{@link EntryIntentDecoratorInfo}。
 * 
 * > **说明：**
 * >
 * > 如果使用该装饰器接入标准意图，必须实现标准意图Json Schema中定义的所有必选参数且类型匹配。
 * > 如果创建自定义意图，必须实现parameters字段中定义的所有必选参数且类型匹配。
 * > 被装饰的类需要使用export default导出。类的属性仅支持基础类型或意图实体，返回值仅支持意图实体。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
export declare const InsightIntentEntry: ((intentInfo: EntryIntentDecoratorInfo) => ClassDecorator);

/**
 * FormIntentDecoratorInfo继承自[IntentDecoratorInfo]{@link IntentDecoratorInfo}，用于描述
 * [@InsightIntentForm](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintentform)
 * 装饰器支持的参数。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
declare interface FormIntentDecoratorInfo extends IntentDecoratorInfo {
  /**
   * 表示FormExtensionAbility绑定的卡片名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  formName: string;
}

/**
 * 使用该装饰器装饰[FormExtensionAbility]{@link @ohos.app.form.FormExtensionAbility}并配置
 * [FormExtensionAbility]{@link @ohos.app.form.FormExtensionAbility}绑定的卡片名称，便于AI入口通过意图添加卡片。该装饰器支持的参数参见
 * [FormIntentDecoratorInfo]{@link FormIntentDecoratorInfo}。
 * 
 * > **说明：**
 * >
 * > 卡片名称定义的要求参见卡片配置。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
export declare const InsightIntentForm: ((intentInfo: FormIntentDecoratorInfo) => ClassDecorator);

/**
 * 用于描述
 * [@InsightIntentEntity](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententity)
 * 装饰器支持的参数。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
declare interface IntentEntityDecoratorInfo {
  /**
   * 表示意图实体类别。可以基于意图实体类别对意图实体进行归类
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  entityCategory: string;

  /**
   * 表示意图实体的数据格式声明。用于定义意图实体的数据格式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  parameters?: Record<string, Object>;

  /**
   * 支持的查询属性。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  supportedQueryProperties?: string[];
}

/**
 * 使用该装饰器装饰一个继承自[IntentEntity]{@link @ohos.app.ability.insightIntent:insightIntent.IntentEntity}的类，可将该类定义为意图实体，用于传递意图调用
 * 时所需的参数。该装饰器支持的参数参见[IntentEntityDecoratorInfo]{@link IntentEntityDecoratorInfo}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamiconly
 */
export declare const InsightIntentEntity: ((intentEntityInfo: IntentEntityDecoratorInfo) => ClassDecorator);