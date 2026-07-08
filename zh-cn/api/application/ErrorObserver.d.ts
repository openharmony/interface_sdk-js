/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * [errorManager.on('error')]{@link ./../@ohos.app.ability.errorManager:errorManager.on(type: 'error', observer: ErrorObserver)}
 * 的入参监听当前应用发生的异常。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 19]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 */
export default class ErrorObserver {
    /**
     * 应用产生未捕获的异常时的回调。
     *
     * @param { string } errMsg - 有关异常的消息和错误堆栈跟踪。
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    onUnhandledException(errMsg: string): void;
  
    /**
     * 应用产生异常，上报js层时的回调。
     *
     * @param { Error } errObject - 有关异常事件名字、消息和错误堆栈信息的对象。
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    onException?(errObject: Error): void;
  }