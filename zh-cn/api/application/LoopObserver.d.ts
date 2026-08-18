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
 * 的入参，用于监听应用主线程事件处理超时的情况。通过回调机制实时获取主线程消息实际执行时间，帮助开发者及时发现和定位故障问题。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 19]
 * @atomicservice
 * @since 12 dynamiconly
 */
export interface LoopObserver {
    /**
     * 当JS运行时应用主线程处理事件超时时触发的回调函数。
     * 使用场景：用于监控应用主线程处理事件的执行情况，当主线程处理事件超时时触发该回调，开发者可以根据超时情况记录日志、优化代码逻辑等。
     *
     * @param { int } timeout - 表示应用主线程消息实际执行时间，单位：毫秒，取值范围：大于0的正整数。
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 19]
     * @atomicservice
     * @since 12 dynamiconly
     */
    onLoopTimeOut?(timeout: int): void;
  }