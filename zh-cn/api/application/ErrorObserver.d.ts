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
 * 的入参监听当前应用发生的异常。通过异常监听，开发者可以及时捕获和处理应用运行时的未捕获异常及JS层上报的异常，提升应用的稳定性和用户体验。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 19]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 */
export default class ErrorObserver {
    /**
     * 应用产生未捕获的异常时的回调。当应用代码发生未捕获的异常时，系统会自动调用此方法，将异常信息传递给开发者进行处理。
     * 与[ErrorObserver.onException]{@link ErrorObserver.onException}的差异在于：
     * onUnhandledException仅捕获未处理的异常，参数仅包含错误消息字符串；而onException会捕获所有上报到JS层的异常，参数为完整的Error对象，包含name、message、stack等更多信息。
     * 建议在需要完整错误信息时使用onException，仅需简单错误消息时使用onUnhandledException。二者可组合使用。
     *
     * @param { string } errMsg - 有关异常的消息和错误堆栈跟踪。
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    onUnhandledException(errMsg: string): void;
  
    /**
     * 应用产生异常，上报js层时的回调。此回调为可选方法，若未实现，将使用系统默认异常处理逻辑。
     * 可与[ErrorObserver.onUnhandledException]{@link ErrorObserver.onUnhandledException}的配合使用，通过errorManager.on('error')注册ErrorObserver对象来实现异常监听。
     * 建议同时实现两个回调方法，用于获取完整的异常信息。
     *
     * @param { Error } errObject - 有关异常事件名字、消息和错误堆栈信息的对象。
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     */
    onException?(errObject: Error): void;
  }