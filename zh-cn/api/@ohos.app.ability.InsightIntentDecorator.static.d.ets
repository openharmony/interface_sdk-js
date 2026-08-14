'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 意图装饰器定义
 * @kit AbilityKit
 */

import insightIntent from './@ohos.app.ability.insightIntent';

/**
 * [@InsightIntentLink]{@link InsightIntentLink}装饰器的意图参数类别，用于定义意图参数的传递形式。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum LinkParamCategory {
  /**
   * 表示意图参数类别为'link'。系统获取paramName字段对应的意图参数映射名称，并将该意图参数映射名称拼接到URI链接的末尾。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LINK = 'link',

  /**
   * 表示意图参数类别为'want'。系统获取paramName字段对应的意图参数映射名称，并将该意图参数映射名称及取值通过
   * [Want]{@link @ohos.app.ability.Want:Want}的parameters字段进行传递。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  WANT = 'want'
}

/**
 * LinkIntentParamMapping是[@InsightIntentLink]{@link InsightIntentLink}装饰器的意图参数和URI信息的映射。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface LinkIntentParamMapping {
  /**
   * 表示意图参数的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  paramName: string;

  /**
   * 表示意图参数映射名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  paramMappingName?: string;

  /**
   * 若取值为[LINK]{@link LinkParamCategory}，系统获取paramName对应的映射名称，并以键值对形式拼接到URI末尾。若取值为[WANT]{@link LinkParamCategory}，
   * 系统获取paramName对应的映射名称及其取值，通过[Want]{@link @ohos.app.ability.Want:Want}的parameters字段传递。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  paramCategory?: LinkParamCategory;
}
/**
 * 用于描述ArkTS-Sta中[@InsightIntentLink]{@link InsightIntentLink}支持的参数，用于定义意图的所有信息（包括意图名称、意图版本号）。使用该注解装饰当前应用的uri链接，可以将该uri
 * 链接定义为意图，便于AI入口通过定义的意图快速跳转到当前应用。
 * 该注解仅支持ArkTS-Sta模式，对应ArkTS-Dyn模式接口见
 * [@InsightIntentLink]{@link @ohos.app.ability.InsightIntentDecorator.InsightIntentLink}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentLink {
  /**
   * 表示意图名称，是意图的唯一标识。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * 表示意图垂域，用于将意图按垂直领域分类（例如：视频、音乐、游戏），取值范围参见
   * [各垂域的智慧分发特性列表](https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215)
   * 中的垂域字段。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * 表示意图版本号。当意图能力演进时，可通过版本号进行区分和管理。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * 表示显示给用户的意图名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * 表示显示给用户的意图描述。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * 表示接入的标准意图的名称。开发者[接入标准意图](docroot://application-models/insight-intent-definition.md#接入标准意图)时，需要配置该字段，
   * [创建自定义意图](docroot://application-models/insight-intent-definition.md#创建自定义意图)时，无需配置该字段。标准意图列表参见
   * [附录：标准意图接入规范](docroot://application-models/insight-intent-access-specifications.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';

  /**
   * 表示意图图标，用于在AI入口显示。ArkTS-Sta为字符串类型，所以与ArkTS-Dyn写法存在部分差异：
   * - 当表示图标读取网络资源时，赋值无差异，例如'https://www.example.com/music/'。
   * - 当表示图标读取本地资源时，ArkTS-Dyn写法为`$r("app.media.app_icon")`、ArkTS-Sta写法为`'$r("app.media.app_icon")'`。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * 表示意图的功能，用于大型语言模型理解该意图。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';

  /**
   * 表示意图的搜索关键字。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。取值参见
   * [各垂域意图Schema](https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713)。与ArkTS-Dyn不同，
   * ArkTS-Sta场景下的parameters字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * 表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。
   * 与ArkTS-Dyn不同，ArkTS-Sta场景下的result字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';

  /**
   * 表示意图的uri信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  uri: string;

  /**
   * 意图参数和uri信息的映射。与ArkTS-Dyn不同，ArkTS-Sta场景下的paramMappings字段为字符串类型，需赋值
   * [LinkIntentParamMapping]{@link LinkIntentParamMapping}[]类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  paramMappings: string = '';
}

/**
 * 使用该注解装饰当前应用的页面，可以将页面定义为意图，便于AI入口通过意图快速跳转到指定页面。
 * 该注解仅支持ArkTS-Sta模式，对应ArkTS-Dyn模式接口见
 * [@InsightIntentPage]{@link @ohos.app.ability.InsightIntentDecorator.InsightIntentPage}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentPage {
  /**
   * 表示意图名称，是意图的唯一标识。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * 表示意图垂域，用于将意图按垂直领域分类（例如：视频、音乐、游戏），取值范围参见
   * [各垂域的智慧分发特性列表](https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215)
   * 中的垂域字段。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * 表示意图版本号。当意图能力演进时，可通过版本号进行区分和管理。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * 表示显示给用户的意图名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * 表示显示给用户的意图描述。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * 表示接入的标准意图的名称。开发者[接入标准意图](docroot://application-models/insight-intent-definition.md#接入标准意图)时，需要配置该字段，
   * [创建自定义意图](docroot://application-models/insight-intent-definition.md#创建自定义意图)时，无需配置该字段。标准意图列表参见
   * [附录：标准意图接入规范](docroot://application-models/insight-intent-access-specifications.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';

  /**
   * 表示意图图标，用于在AI入口显示。ArkTS-Sta为字符串类型，所以与ArkTS-Dyn写法存在部分差异：
   * - 当表示图标读取网络资源时，赋值无差异，例如'https://www.example.com/music/'。
   * - 当表示图标读取本地资源时，ArkTS-Dyn写法为`$r("app.media.app_icon")`、ArkTS-Sta写法为`'$r("app.media.app_icon")'`。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * 表示意图的功能，用于大型语言模型理解该意图。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';
  /**
   * 表示意图的搜索关键字。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。取值参见
   * [各垂域意图Schema](https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713)。与ArkTS-Dyn不同，
   * ArkTS-Sta场景下的parameters字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * 表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。
   * 与ArkTS-Dyn不同，ArkTS-Sta场景下的result字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';

  /**
   * 表示与意图绑定的UIAbility名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  uiAbility: string = '';

  /**
   * 表示与意图绑定的页面路径，该页面需要是一个实际存在的文件。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  pagePath: string;

  /**
   * 表示与意图绑定的[Navigation]{@link ./@internal/component/ets/navigation}组件的id属性。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  navigationId: string = '';

  /**
   * 表示与意图绑定[navDestination]{@link ./@internal/component/ets/navigation.navDestination}组件的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  navDestinationName: string = '';
}
/**
 * 该注解与@InsightIntentFunctionMethod注解必须组合使用。
 * 使用该注解来装饰类，同时使用@InsightIntentFunctionMethod注解来装饰类中的静态函数，可以将对应的静态函数定义为意图，便于AI入口能够快速执行此函数。
 * 该注解仅支持ArkTS-Sta模式，对应ArkTS-Dyn模式接口见
 * [@InsightIntentFunction]{@link @ohos.app.ability.InsightIntentDecorator.InsightIntentFunction}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentFunction { }

/**
 * 该注解与@InsightIntentFunction注解必须组合使用。
 * 使用该注解来装饰类中的静态函数，同时使用@InsightIntentFunction注解来装饰静态函数所属的类，可以将对应的静态函数定义为意图，便于AI入口能够快速执行此函数。
 * 该注解仅支持ArkTS-Sta模式，对应ArkTS-Dyn模式接口见
 * [@InsightIntentFunctionMethod]{@link @ohos.app.ability.InsightIntentDecorator.InsightIntentFunctionMethod}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentFunctionMethod {
  /**
   * 表示意图名称，是意图的唯一标识。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * 表示意图垂域，用于将意图按垂直领域分类（例如：视频、音乐、游戏），取值范围参见
   * [各垂域的智慧分发特性列表](https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215)
   * 中的垂域字段。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * 表示意图版本号。当意图能力演进时，可通过版本号进行区分和管理。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * 表示显示给用户的意图名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * 表示显示给用户的意图描述。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * 表示接入的标准意图的名称。开发者[接入标准意图](docroot://application-models/insight-intent-definition.md#接入标准意图)时，需要配置该字段，
   * [创建自定义意图](docroot://application-models/insight-intent-definition.md#创建自定义意图)时，无需配置该字段。标准意图列表参见
   * [附录：标准意图接入规范](docroot://application-models/insight-intent-access-specifications.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';
  /**
   * 表示意图图标，用于在AI入口显示。ArkTS-Sta为字符串类型，所以与ArkTS-Dyn写法存在部分差异：
   * - 当表示图标读取网络资源时，赋值无差异，例如'https://www.example.com/music/'。
   * - 当表示图标读取本地资源时，ArkTS-Dyn写法为`$r("app.media.app_icon")`、ArkTS-Sta写法为`'$r("app.media.app_icon")'`。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * 表示意图的功能，用于大型语言模型理解该意图。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';

  /**
   * 表示意图的搜索关键字。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。取值参见
   * [各垂域意图Schema](https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713)。与ArkTS-Dyn不同，
   * ArkTS-Sta场景下的parameters字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * 表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。
   * 与ArkTS-Dyn不同，ArkTS-Sta场景下的result字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';
}
/**
 * 使用该注解装饰[FormExtensionAbility]{@link @ohos.app.form.FormExtensionAbility}并配置FormExtensionAbility绑定的卡片名称，便于AI入口通过意图添加卡
 * 片。
 * 该注解仅支持ArkTS-Sta模式，对应ArkTS-Dyn模式接口见
 * [@InsightIntentForm]{@link @ohos.app.ability.InsightIntentDecorator.InsightIntentForm}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentForm {
  /**
   * 表示意图名称，是意图的唯一标识。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * 表示意图垂域，用于将意图按垂直领域分类（例如：视频、音乐、游戏），取值范围参见
   * [各垂域的智慧分发特性列表](https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215)
   * 中的垂域字段。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * 表示意图版本号。当意图能力演进时，可通过版本号进行区分和管理。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * 表示显示给用户的意图名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * 表示显示给用户的意图描述。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * 表示接入的标准意图的名称。开发者[接入标准意图](docroot://application-models/insight-intent-definition.md#接入标准意图)时，需要配置该字段，
   * [创建自定义意图](docroot://application-models/insight-intent-definition.md#创建自定义意图)时，无需配置该字段。标准意图列表参见
   * [附录：标准意图接入规范](docroot://application-models/insight-intent-access-specifications.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';

  /**
   * 表示意图图标，用于在AI入口显示。ArkTS-Sta为字符串类型，所以与ArkTS-Dyn写法存在部分差异：
   * - 当表示图标读取网络资源时，赋值无差异，例如'https://www.example.com/music/'。
   * - 当表示图标读取本地资源时，ArkTS-Dyn写法为`$r("app.media.app_icon")`、ArkTS-Sta写法为`'$r("app.media.app_icon")'`。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * 表示意图的功能，用于大型语言模型理解该意图。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';
  /**
   * 表示意图的搜索关键字。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。取值参见
   * [各垂域意图Schema](https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713)。与ArkTS-Dyn不同，
   * ArkTS-Sta场景下的parameters字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * 表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。
   * 与ArkTS-Dyn不同，ArkTS-Sta场景下的result字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';

  /**
   * 表示FormExtensionAbility绑定的卡片名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  formName: string;
}
/**
 * 使用该注解装饰一个继承自
 * [InsightIntentEntryExecutor]{@link @ohos.app.ability.InsightIntentEntryExecutor:InsightIntentEntryExecutor}的类，实现意图操作并
 * 配置意图依赖的Ability组件，便于AI入口拉起依赖的Ability组件时，执行对应的意图操作。
 * 该注解仅支持ArkTS-Sta模式，对应ArkTS-Dyn模式接口见
 * [@InsightIntentEntry]{@link @ohos.app.ability.InsightIntentDecorator.InsightIntentEntry}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentEntry {
  /**
   * 表示意图名称，是意图的唯一标识。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentName: string;

  /**
   * 表示意图垂域，用于将意图按垂直领域分类（例如：视频、音乐、游戏），取值范围参见
   * [各垂域的智慧分发特性列表](https://developer.huawei.com/consumer/cn/doc/service/intents-ai-distribution-characteristic-0000001901922213#section2656133582215)
   * 中的垂域字段。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  domain: string;

  /**
   * 表示意图版本号。当意图能力演进时，可通过版本号进行区分和管理。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intentVersion: string;

  /**
   * 表示显示给用户的意图名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayName: string;

  /**
   * 表示显示给用户的意图描述。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  displayDescription: string = '';

  /**
   * 表示接入的标准意图的名称。开发者[接入标准意图](docroot://application-models/insight-intent-definition.md#接入标准意图)时，需要配置该字段，
   * [创建自定义意图](docroot://application-models/insight-intent-definition.md#创建自定义意图)时，无需配置该字段。标准意图列表参见
   * [附录：标准意图接入规范](docroot://application-models/insight-intent-access-specifications.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  schema: string = '';

  /**
   * 表示意图图标，用于在AI入口显示。ArkTS-Sta为字符串类型，所以与ArkTS-Dyn写法存在部分差异：
   * - 当表示图标读取网络资源时，赋值无差异，例如'https://www.example.com/music/'。
   * - 当表示图标读取本地资源时，ArkTS-Dyn写法为`$r("app.media.app_icon")`、ArkTS-Sta写法为`'$r("app.media.app_icon")'`。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon: string = '';

  /**
   * 表示意图的功能，用于大型语言模型理解该意图。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  llmDescription: string = '';
  /**
   * 表示意图的搜索关键字。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  keywords: string[] = [];

  /**
   * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。取值参见
   * [各垂域意图Schema](https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713)。与ArkTS-Dyn不同，
   * ArkTS-Sta场景下的parameters字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = '';

  /**
   * 表示意图调用返回结果的数据格式声明，用于定义意图调用返回结果的数据格式。
   * 与ArkTS-Dyn不同，ArkTS-Sta场景下的result字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  result: string = '';

  /**
   * 表示与意图绑定的Ability名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  abilityName: string;

  /**
   * 表示意图调用执行模式。即拉起绑定的Ability时支持的执行模式。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  executeMode: insightIntent.ExecuteMode[];
}

/**
 * 使用该注解装饰一个继承自[IntentEntity]{@link @ohos.app.ability.insightIntent:insightIntent.IntentEntity}的类，可将该类定义为意图实体，用于传递意图调用时所
 * 需的参数。
 * 该注解仅支持ArkTS-Sta模式，对应ArkTS-Dyn模式接口见
 * [@InsightIntentEntity]{@link @ohos.app.ability.InsightIntentDecorator.InsightIntentEntity}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export @interface InsightIntentEntity {
  /**
   * 表示意图实体类别。可以基于意图实体类别对意图实体进行归类
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  entityCategory: string;

  /**
   * 表示意图参数的数据格式声明，用于意图调用时定义入参的数据格式。取值参见
   * [各垂域意图Schema](https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713)。与ArkTS-Dyn不同，
   * ArkTS-Sta场景下的parameters字段为字符串类型，需赋值`Record<string, RecordData>`类型变量的名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  parameters: string = "";

  /**
   * 表示意图实体支持查询的属性列表。列表中的属性名必须在parameters中定义。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  supportedQueryProperties: string[] = [];
}