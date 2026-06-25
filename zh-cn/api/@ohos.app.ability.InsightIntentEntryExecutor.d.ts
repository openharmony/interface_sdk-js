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
export default class InsightIntentEntryExecutor<T> {}