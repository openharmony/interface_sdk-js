/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import UIAbility from './@ohos.app.ability.UIAbility';
import type EmbeddableUIAbilityContext from './application/EmbeddableUIAbilityContext';
/**
 * EmbeddableUIAbility组件是为原子化服务提供可嵌入式的UIAbility组件，继承自[UIAbility]{@link @ohos.app.ability.UIAbility}。
 * 开发者通过实现EmbeddableUIAbility，为其他应用提供跳出式启动和嵌入式启动原子化服务方式。
 * 各类Ability的继承关系详见[继承关系说明](docroot://reference/apis-ability-kit/js-apis-app-ability-ability.md#ability的继承关系说明)。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamiconly
 */
export default class EmbeddableUIAbility extends UIAbility {
  /**
   * EmbeddableUIAbility组件的上下文。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   */
  context: EmbeddableUIAbilityContext;
}