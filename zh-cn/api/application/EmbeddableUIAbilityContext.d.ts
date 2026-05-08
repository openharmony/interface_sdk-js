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

import UIAbilityContext from './UIAbilityContext';

/**
 * EmbeddableUIAbilityContext是
 * [EmbeddableUIAbility]{@link ./../@ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}组件的上下文，继承自
 * [UIAbilityContext]{@link UIAbilityContext:UIAbilityContext}。
 * 
 * 每个EmbeddableUIAbility组件实例化时，系统都会自动创建对应的EmbeddableUIAbilityContext。
 * 
 * > **说明：**
 * >
 * > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamiconly
 */
export default class EmbeddableUIAbilityContext extends UIAbilityContext {}