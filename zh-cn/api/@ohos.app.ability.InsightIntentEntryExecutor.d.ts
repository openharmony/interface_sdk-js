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

import window from './@ohos.window';
import insightIntent from './@ohos.app.ability.insightIntent';
import InsightIntentContext from './@ohos.app.ability.InsightIntentContext';
import UIExtensionContentSession from './@ohos.app.ability.UIExtensionContentSession';

/**
 * 本模块提供
 * [@InsightIntentEntry](docroot://reference/apis-ability-kit/js-apis-app-ability-InsightIntentDecorator.md#insightintententry)
 * 装饰器的意图执行基类，必须与@InsightIntentEntry装饰器联合使用。
 * 开发者需要在继承该基类的子类中，实现[onExecute()]{@link InsightIntentEntryExecutor.InsightIntentEntryExecutor#onExecute}意图执行回调，并使用@
 * InsightIntentEntry装饰器来装饰子类。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @class InsightIntentEntryExecutor<T>
 * @atomicservice
 * @since 20 dynamiconly
 */
declare class InsightIntentEntryExecutor<T> {
  /**
   * 表示意图执行模式。即拉起绑定的Ability组件时支持的执行模式。
   *
   * @type { insightIntent.ExecuteMode }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  executeMode: insightIntent.ExecuteMode;

  /**
   * 表示意图执行上下文。
   *
   * @type { InsightIntentContext }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  context: InsightIntentContext;

  /**
   * 表示windowStage实例对象，和[onWindowStageCreate]{@link @ohos.app.ability.UIAbility:UIAbility#onWindowStageCreate}
   * 接口的windowStage实例是同一个，可用于加载意图执行的页面。仅当executeMode字段取值为UI_ABILITY_FOREGROUND
   * （即意图执行需要将UIAbility显示在前台时），该属性生效。
   *
   * @type { ?window.WindowStage }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  windowStage?: window.WindowStage;

  /**
   * 表示UIExtensionContentSession实例对象，和
   * [onSessionCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onSessionCreate}
   * 接口的UIExtensionContentSession实例是同一个，可用于加载意图执行的页面。
   * 仅当executeMode字段取值为UI_EXTENSION_ABILITY（即意图执行需要拉起UIExtensionAbility时），该属性生效。
   *
   * @type { ?UIExtensionContentSession }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  uiExtensionSession?: UIExtensionContentSession;

  /**
   * 当AI入口触发意图执行时，系统拉起绑定的Ability组件，触发回调，开发者在此实现意图操作。使用Promise异步回调。
   *
   * @returns { Promise<insightIntent.IntentResult<T>> } Promise对象。返回
   *        [insightIntent.IntentResult<T>]{@link @ohos.app.ability.insightIntent:insightIntent.IntentResult}
   *        对象，表示意图执行结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  onExecute(): Promise<insightIntent.IntentResult<T>>;
}

export default InsightIntentEntryExecutor;