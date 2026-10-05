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
 * @file BaseContext
 * @kit AbilityKit
 */

/**
 * BaseContext is an abstract class that specifies whether a child class Context is used for the stage model or FA
 * model. It is the parent class for all types of Context.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
export default abstract class BaseContext {
  /**
   * Whether the child class Context is used for the stage model.
   * true: [Stage model](docroot://application-models/ability-terminology.md#stage-model).
   * false：[FA model](docroot://application-models/ability-terminology.md#fa-model).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  stageMode: boolean;
}