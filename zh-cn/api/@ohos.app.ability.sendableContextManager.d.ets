/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

import common from '@ohos.app.ability.common';
import type { SendableContext as _SendableContext } from './application/SendableContext';
/**
 * # 使用场景
 * 
 * 本模块主要用于ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）的数据传递。
 * 
 * 例如，从主线程向子线程（如TaskPool或Worker工作线程）传递Sendable数据（符合[Sendable协议](docroot://arkts-utils/arkts-sendable.md#sendable协议)的数据）时
 * ，需要通过Context与SendableContext之间的相互转换来实现。过程如下：
 * 
 * - 主线程向子线程传递Sendable数据时，需要将Context转换为SendableContext。
 * - 子线程使用Sendable数据时，需要将SendableContext转换为Context。
 * 
 * 这里的Context与
 * [createModuleContext]{@link @ohos.app.ability.application:application.createModuleContext(context: Context, moduleName: string)}
 * 方法创建的Context不同，具体差异如下：
 * 
 * - 与SendableContext相互转换的Context：ArkTS并发实例持有的应用侧Context是不同的实例，底层对应同一个Context对象。当一个实例中Context属性和方法被修改时，相关实例中的Context属性和方
 * 法将会同步修改。其中，Context实例中的eventHub属性比较特殊，不同实例中的eventHub是独立的对象，不支持跨ArkTS实例使用。如果需要使用
 * [EventHub]{@link ./application/EventHub:EventHub}跨实例传递数据，可以通过
 * [setEventHubMultithreadingEnabled](docroot://reference/apis-ability-kit/js-apis-app-ability-sendableContextManager.md#sendablecontextmanagerseteventhubmultithreadingenabled20)
 * 启用跨线程数据传递功能。
 * - 通过
 * [createModuleContext]{@link @ohos.app.ability.application:application.createModuleContext(context: Context, moduleName: string)}
 * 创建的Context：ArkTS并发实例持有的应用侧Context是不同的实例，底层对应不同的Context对象。
 */
/**
 * # 约束限制
 * 
 * “Context转换为SendableContext”和“SendableContext转换为Context”两个环节中的Context类型必须保持一致。例如，主线程使用
 * [convertFromContext](docroot://reference/apis-ability-kit/js-apis-app-ability-sendableContextManager.md#sendablecontextmanagerconvertfromcontext)
 * 将[UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}转换为SendableContext，子线程收到该SendableContext之后，
 * 需要通过
 * [convertToUIAbilityContext](docroot://reference/apis-ability-kit/js-apis-app-ability-sendableContextManager.md#sendablecontextmanagerconverttouiabilitycontext)
 * 将SendableContext转换为[UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}。
 * 
 * 目前支持转换的Context包括[Context]{@link ./app/context}、
 * [ApplicationContext]{@link ./application/ApplicationContext:ApplicationContext}、
 * [AbilityStageContext]{@link ./application/AbilityStageContext:AbilityStageContext}、
 * [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}。
 */
/**
 * sendableContextManager模块提供Context与[SendableContext]{@link ./application/SendableContext:SendableContext}相互转换的能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendableContextManager {
  /**
   * SendableContext二级模块
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type SendableContext = _SendableContext;

  /**
   * 将Context转换为SendableContext对象。
   *
   * @param { context } common.Context - Context对象。支持Context基类，
   *     [ApplicationContext]{@link ./application/ApplicationContext:ApplicationContext}、
   *     [AbilityStageContext]{@link ./application/AbilityStageContext:AbilityStageContext}和
   *     [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}子类。
   * @returns { SendableContext } [SendableContext]{@link ./application/SendableContext:SendableContext}对象。
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertFromContext(context: common.Context): SendableContext;

  /**
   * 将SendableContext对象转换为Context。
   *
   * @param { sendableContext } SendableContext - SendableContext对象。
   * @returns { common.Context } [Context]{@link ./app/context} object.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertToContext(sendableContext: SendableContext): common.Context;

  /**
   * 将SendableContext对象转换为ApplicationContext。
   *
   * @param { sendableContext } SendableContext - SendableContext对象。
   * @returns { common.ApplicationContext } [ApplicationContext]{@link ./application/ApplicationContext:ApplicationContext}
   *     object.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertToApplicationContext(sendableContext: SendableContext): common.ApplicationContext;

  /**
   * 将SendableContext对象转换为AbilityStageContext。
   *
   * @param { sendableContext } SendableContext - SendableContext对象。
   * @returns { common.AbilityStageContext } [AbilityStageContext]{@link ./application/AbilityStageContext:AbilityStageContext}
   *     object.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertToAbilityStageContext(sendableContext: SendableContext): common.AbilityStageContext;

  /**
   * 将SendableContext对象转换为UIAbilityContext。
   *
   * @param { sendableContext } SendableContext - SendableContext对象。
   * @returns { common.UIAbilityContext } [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}
  object.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function convertToUIAbilityContext(sendableContext: SendableContext): common.UIAbilityContext;

  /**
   * 设置[Context]{@link ./app/context}中的[EventHub]{@link ./application/EventHub:EventHub}是否启用跨线程通信能力。
   * 
   * > **说明：**
   * >
   * > - 当多个Context进行通信时，需要调用该接口设置每个Context都支持EventHub跨线程数据传递功能。
   *
   * @param { common.Context } context - Context对象。其中，Eventhub支持传递的序列化数据类型参见
   *     [序列化支持的类型](docroot://reference/apis-arkts/js-apis-taskpool.md#序列化支持类型)，数据大小不超过16MB。
   * @param { boolean } enabled - 表示是否启用Context的EventHub跨线程通信能力。true表示启用，false表示禁用。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  function setEventHubMultithreadingEnabled(context: common.Context, enabled: boolean): void;
}

export default sendableContextManager;