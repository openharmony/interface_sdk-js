/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * BaseContext抽象类用于表示继承的子类Context是Stage模型还是FA模型，是所有Context类型的父类。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
export default abstract class BaseContext {
  /**
   * 表示是否Stage模型。<br>true：[Stage模型](docroot://application-models/ability-terminology.md#stage模型)。<br>false：
   * [FA模型](docroot://application-models/ability-terminology.md#fa模型)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  stageMode: boolean;
}