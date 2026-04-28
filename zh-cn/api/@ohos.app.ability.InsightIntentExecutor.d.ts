/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type window from './@ohos.window';
import type insightIntent from './@ohos.app.ability.insightIntent';
import type InsightIntentContext from './@ohos.app.ability.InsightIntentContext';
import type UIExtensionContentSession from './@ohos.app.ability.UIExtensionContentSession';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/** 
 * 本模块提供意图执行基类，开发者通过本模块对接端侧[意图框架](docroot://application-models/insight-intent-overview.md)，
 * [通过配置文件开发意图][configuration files](docroot://application-models/insight-intent-config-development.md)实现意图的业务逻辑。
 * 
 * 除了可以通过配置文件开发意图，还可以通过装饰器开发意图。对于API version 20及以后的版本，推荐使用
 * [通过装饰器开发意图](docroot://application-models/insight-intent-decorator-development.md)。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare class InsightIntentExecutor {
  /**
   * 意图执行上下文。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  context: InsightIntentContext;

  /**
   * 当意图执行依赖[UIAbility]{@link @ohos.app.ability.UIAbility}组件前台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。
   * 
   * - 若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：[onCreate]{@link @ohos.app.ability.UIAbility:UIAbility#onCreate}、
   * [onWindowStageCreate]{@link @ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate}、
   * onExecuteInUIAbilityForegroundMode、[onForeground]{@link @ohos.app.ability.UIAbility:UIAbility#onForeground}。
   * - 若UIAbility组件热启动，且启动时UIAbility组件处于后台，意图执行时UIAbility组件生命周期触发顺序：
   * [onNewWant]{@link @ohos.app.ability.UIAbility:UIAbility#onNewWant}、onExecuteInUIAbilityForegroundMode、
   * [onForeground]{@link @ohos.app.ability.UIAbility:UIAbility#onForeground}。
   * - 若UIAbility组件热启动，且启动时UIAbility组件处于前台，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityForegroundMode。
   *
   * @param { string } name - 意图名称。
   * @param { Record<string, Object> } param - 意图参数，表示本次意图执行由系统入口传递给应用的数据。
   * @param { window.WindowStage } pageLoader - 表示windowStage实例对象，和
   *     [onWindowStageCreate]{@link @ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate}接口的windowStage实例是同一个，可用于加载意图执行
   *     的页面。
   * @returns { insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult> } Intent execution result or a Promise
   *     object containing the intent execution result, representing the data returned to the system entry point from this
   *     intent execution.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>;

  /**
   * 当意图执行依赖[UIAbility]{@link @ohos.app.ability.UIAbility}组件前台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。
   * 
   * - 若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：[onCreate]{@link @ohos.app.ability.UIAbility:UIAbility#onCreate}、
   * [onWindowStageCreate]{@link @ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate}、
   * onExecuteInUIAbilityForegroundMode、[onForeground]{@link @ohos.app.ability.UIAbility:UIAbility#onForeground}。
   * - 若UIAbility组件热启动，且启动时UIAbility组件处于后台，意图执行时UIAbility组件生命周期触发顺序：
   * [onNewWant]{@link @ohos.app.ability.UIAbility:UIAbility#onNewWant}、onExecuteInUIAbilityForegroundMode、
   * [onForeground]{@link @ohos.app.ability.UIAbility:UIAbility#onForeground}。
   * - 若UIAbility组件热启动，且启动时UIAbility组件处于前台，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityForegroundMode。
   *
   * @param { string } name - 意图调用名称。
   * @param { Record<string, RecordData> } param - 	意图调用参数。
   * @param { window.WindowStage } pageLoader - 页面加载器。
   * @returns { insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult> } Intent execution result or a Promise
   *     object containing the intent execution result, representing the data returned to the system entry point from this
   *     intent execution.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, RecordData>, pageLoader: window.WindowStage):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>;

  /**
   * 当意图执行依赖[UIAbility]{@link @ohos.app.ability.UIAbility}组件后台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。
   * 
   * - 若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：[onCreate]{@link @ohos.app.ability.UIAbility:UIAbility#onCreate}、
   * onExecuteInUIAbilityBackgroundMode、[onBackground]{@link @ohos.app.ability.UIAbility:UIAbility#onBackground}。
   * - 若UIAbility组件热启动，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityBackgroundMode。
   *
   * @param { string } name - 意图名称。
   * @param { Record<string, Object> } param - 意图参数，表示本次意图执行由系统入口传递给应用的数据。
   * @returns { insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult> } Intent execution result or a Promise
   *     object containing the intent execution result, representing the data returned to the system entry point from this
   *     intent execution.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  onExecuteInUIAbilityBackgroundMode(name: string, param: Record<string, Object>):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>;

  /**
   * 当意图执行依赖[UIAbility]{@link @ohos.app.ability.UIAbility}组件后台启动时，会在UIAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。
   * 
   * - 若UIAbility组件冷启动，意图执行时UIAbility组件生命周期触发顺序：[onCreate]{@link @ohos.app.ability.UIAbility:UIAbility#onCreate}、
   * onExecuteInUIAbilityBackgroundMode、[onBackground]{@link @ohos.app.ability.UIAbility:UIAbility#onBackground}。
   * - 若UIAbility组件热启动，意图执行时UIAbility组件生命周期触发顺序：onExecuteInUIAbilityBackgroundMode。
   *
   * @param { string } name - 意图调用名称。
   * @param { Record<string, RecordData> } param - 意图调用参数。
   * @returns { insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult> } Intent execution result or a Promise
   *     object containing the intent execution result, representing the data returned to the system entry point from this
   *     intent execution.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onExecuteInUIAbilityBackgroundMode(name: string, param: Record<string, RecordData>):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>;

  /**
   * 当意图执行依赖[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}启动时，会在UIExtensionAbility组
   * 件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。
   * 
   * - 意图执行时UIExtensionAbility生命周期触发顺序：
   * [onCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onCreate}、
   * [onSessionCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onSessionCreate}、
   * onExecuteInUIExtensionAbility、
   * [onForeground]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onForeground}。
   *
   * @param { string } name - 意图名称。
   * @param { Record<string, Object> } param - 意图参数，表示本次意图执行由系统入口传递给应用的数据。
   * @param { UIExtensionContentSession } pageLoader - 表示UIExtensionContentSession实例对象，和
   *     [onSessionCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onSessionCreate}接口的
   *     UIExtensionContentSession实例是同一个，可用于加载意图执行的页面。
   * @returns { insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult> } Intent execution result or a Promise
   *     object containing the intent execution result, representing the data returned to the system entry point from this
   *     intent execution.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>, pageLoader: UIExtensionContentSession):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>;

  /**
   * 当意图执行依赖[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}启动时，会在UIExtensionAbility组
   * 件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。
   * 
   * - 意图执行时UIExtensionAbility生命周期触发顺序：
   * [onCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onCreate}、
   * [onSessionCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onSessionCreate}、
   * onExecuteInUIExtensionAbility、
   * [onForeground]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onForeground}。
   *
   * @param { string } name - 意图调用名称。
   * @param { Record<string, RecordData> } param - 意图调用参数。
   * @param { UIExtensionContentSession } pageLoader - 页面加载器。
   * @returns { insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult> } Intent execution result or a Promise
   *     object containing the intent execution result, representing the data returned to the system entry point from this
   *     intent execution.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onExecuteInUIExtensionAbility(name: string, param: Record<string, RecordData>, pageLoader: UIExtensionContentSession):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>;

  /**
   * 当意图执行依赖ServiceExtensionAbility组件启动时，会在ServiceExtensionAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。
   * 
   * - 意图执行时ServiceExtensionAbility生命周期触发顺序：onCreate、onRequest、onExecuteInServiceExtensionAbility。
   *
   * @param { string } name - 意图名称。
   * @param { Record<string, Object> } param - 意图参数，表示本次意图执行由系统入口传递给应用的数据。
   * @returns { insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult> } Intent execution result or a Promise
   *     object containing the intent execution result, representing the data returned to the system entry point from this
   *     intent execution.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  onExecuteInServiceExtensionAbility(name: string, param: Record<string, Object>):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>;

  /**
   * 当意图执行依赖ServiceExtensionAbility组件启动时，会在ServiceExtensionAbility组件生命周期执行中触发本意图执行接口。支持同步返回和使用Promise异步返回。
   * 
   * - 意图执行时ServiceExtensionAbility生命周期触发顺序：onCreate、onRequest、onExecuteInServiceExtensionAbility。
   *
   * @param { string } name - 意图调用名称。
   * @param { Record<string, RecordData> } param - 意图调用参数。
   * @returns { insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult> } Intent execution result or a Promise
   *     object containing the intent execution result, representing the data returned to the system entry point from this
   *     intent execution.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onExecuteInServiceExtensionAbility(name: string, param: Record<string, RecordData>):
    insightIntent.ExecuteResult | Promise<insightIntent.ExecuteResult>;
}

export default InsightIntentExecutor;