/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
 * The module defines an observer to listen for event processing timeout. It can be used as an input parameter in 
 * [ErrorManager.on]{@link ./../@ohos.app.ability.errorManager:errorManager.on(type: 'loopObserver', timeout: number, observer: LoopObserver)}
 * to listen for the event processing timeout of the current application's main thread.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 19]
 * @atomicservice
 * @since 12 dynamiconly
 */
export interface LoopObserver {
  /**
   * Called when a timeout occurs for the main thread to process an event in the JS runtime.
   *
   * @param { int } timeout - Actual execution time of the main thread.
   * The value must be greater than **0**. The unit is milliseconds (ms).
   * The value should be an integer.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice
   * @since 12 dynamiconly
   */
  onLoopTimeOut?(timeout: int): void;
}