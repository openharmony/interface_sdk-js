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
 * The ErrorObserver module defines an observer to listen for application errors. It can be used as an input parameter 
 * in 
 * [ErrorManager.on]{@link ./../@ohos.app.ability.errorManager:errorManager.on(type: 'error', observer: ErrorObserver)} 
 * to listen for errors that occur in the current application.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 19]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 */
export default class ErrorObserver {
  /**
   * Called when an uncaught exception occurs in the application.
   *
   * @param { string } errMsg - Message and error stack trace about the exception.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   */
  onUnhandledException(errMsg: string): void;

  /**
   * Called when the application encounters an exception and reports it to the JavaScript layer.
   *
   * @param { Error } errObject - Event name, message, and error stack of the exception.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   */
  onException?(errObject: Error): void;
}