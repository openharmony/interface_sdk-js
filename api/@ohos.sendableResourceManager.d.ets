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
 * The **sendableResourceManager** module provides the 
 * [resourceToSendableResource]{@link sendableResourceManager.resourceToSendableResource} and 
 * [sendableResourceToResource]{@link sendableResourceManager.sendableResourceToResource} APIs to implement conversion 
 * between [Resource]{@link sendableResourceManager.Resource} and 
 * [SendableResource]{@link sendableResourceManager.resourceToSendableResource} objects.
 * A **Resource** object can be held by the [Sendable](docroot://arkts-utils/arkts-sendable.md) class after being 
 * converted into a **SendableResource** object. After cross-thread transmission, the **Sendable** class converts the 
 * **SendableResource** object into a **Resource** object and uses it as an input parameter for the API used to obtain 
 * resources.
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendableResourceManager {

  /**
   * Converts a **Resource** object to a **SendableResource** object.
   *
   * @param { Resource } resource - **Resource** object.
   * @returns { SendableResource } **SendableResource** object after conversion.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export function resourceToSendableResource(resource: Resource): SendableResource;

  /**
   * Converts a **SendableResource** object to a **Resource** object.
   *
   * @param { SendableResource } resource - **SendableResource** object.
   * @returns { Resource } **Resource** object after conversion.
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export function sendableResourceToResource(resource: SendableResource): Resource;

  /**
   * Defines a Resource object.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type Resource = _Resource;

  /**
   * Defines a SendableResource object.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type SendableResource = _SendableResource;
}

export default sendableResourceManager;