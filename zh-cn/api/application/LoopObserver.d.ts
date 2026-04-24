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
 * 定义异常监听，可以作为
 * [ErrorManager.on]{@link ./../@ohos.app.ability.errorManager:errorManager.on(type: 'loopObserver', timeout: number, observer: LoopObserver)}
 * 的入参监听当前应用主线程事件处理事件。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 19]
 * @atomicservice
 * @since 12 dynamiconly
 */
export interface LoopObserver {
    /**
     * 将在js运行时应用主线程处理事件超时的回调。
     *
     * @param { int } timeout - 返回应用主线程消息实际执行时间。
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 19]
     * @atomicservice
     * @since 12 dynamiconly
     */
    onLoopTimeOut?(timeout: int): void;
  }