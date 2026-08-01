/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit LocalizationKit
 */

import { Resource as _Resource } from './global/resource';
import { SendableResource as _SendableResource } from './global/sendableResource';

/**
 * This module provides the mutual conversion between [Resource]{@link sendableResourceManager.Resource} objects and 
 * [SendableResource]{@link sendableResourceManager.SendableResource} objects. `SendableResource` implements the 
 * [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable) API and supports cross-thread transmission. After 
 * cross-thread transmission, the `SendableResource` object can be converted back to a `Resource` object and passed as 
 * a parameter to the [resource management]{@link @ohos.resourceManager:resourceManager} APIs to obtain resources.
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendableResourceManager {

  /**
   * Converts a `Resource` object to a `SendableResource` object that can be used for cross-thread transmission.
   *
   * @param { Resource } resource - **Resource** object.
   * @returns { SendableResource } **SendableResource** object after conversion.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export function resourceToSendableResource(resource: Resource): SendableResource;

  /**
   * Converts a `SendableResource` object transmitted across threads to a `Resource` object.
   *
   * @param { SendableResource } resource - **SendableResource** object.
   * @returns { Resource } **Resource** object after conversion.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export function sendableResourceToResource(resource: SendableResource): Resource;

  /**
   * Represents resource-related information, including the application bundle name, application module name, resource 
   * ID, resource type, and other resource parameters.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type Resource = _Resource;

  /**
   * Represents Sendable resource-related information for cross-thread transmission, including the application bundle 
   * name, application module name, resource ID, resource type, and other resource parameters.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type SendableResource = _SendableResource;
}

export default sendableResourceManager;