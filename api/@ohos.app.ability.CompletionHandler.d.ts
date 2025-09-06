/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

import { ElementName } from './bundleManager/ElementName';

/**
 * Notify the success result of startAbility.
 *
 * @typedef { function }
 * @param { ElementName } elementName - Indicates the component to start.
 * @param { string } message - Indicates the message of the request result.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnRequestSuccessFn = (elementName: ElementName, message: string) => void;
/**
 * Notify the failure result of startAbility.
 *
 * @typedef { function }
 * @param { ElementName } elementName - Indicates the component to start.
 * @param { string } message - Indicates the message of the request result.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 20
 * @arkts 1.2
 */
type OnRequestFailureFn = (elementName: ElementName, message: string) => void;

/**
 * CompletionHandler is a handler to handle the completion events of start ability.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare class CompletionHandler {
  /**
   * Notify the success result of startAbility.
   *
   * @param { ElementName } elementName - Indicates the component to start.
   * @param { string } message - Indicates the message of the request result.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20
   */
  onRequestSuccess(elementName: ElementName, message: string): void;

  /**
   * Notify the failure result of startAbility.
   *
   * @param { ElementName } elementName - Indicates the component to start.
   * @param { string } message - Indicates the message of the request result.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20
   */
  onRequestFailure(elementName: ElementName, message: string): void;

  /**
   * Notify the success result of startAbility.
   *
   * @type { OnRequestSuccessFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20
   * @arkts 1.2
   */
  onRequestSuccess: OnRequestSuccessFn;

  /**
   * Notify the failure result of startAbility.
   *
   * @type { OnRequestFailureFn }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20
   * @arkts 1.2
   */
  onRequestFailure: OnRequestFailureFn;
}
export default CompletionHandler;