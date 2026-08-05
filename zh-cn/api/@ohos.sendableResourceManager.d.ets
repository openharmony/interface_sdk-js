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
 * 本模块提供[Resource]{@link sendableResourceManager.Resource}对象与
 * [SendableResource]{@link sendableResourceManager.SendableResource}对象之间的相互转换功能。SendableResource实现了
 * [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)接口，支持跨线程传输。跨线程传输后，SendableResource对象可以再转换为Resource对象，作为
 * 参数传递给[资源管理]{@link @ohos.resourceManager:resourceManager}接口以获取资源。
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendableResourceManager {

  /**
   * 将Resource对象转换为可用于跨线程传输的SendableResource对象。
   *
   * @param { Resource } resource - Resource对象。
   * @returns { SendableResource } 转换后的SendableResource对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export function resourceToSendableResource(resource: Resource): SendableResource;

  /**
   * 将跨线程传输的SendableResource对象转换为Resource对象。
   *
   * @param { SendableResource } resource - SendableResource对象。
   * @returns { Resource } 转换后的Resource对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export function sendableResourceToResource(resource: SendableResource): Resource;

  /**
   * 表示资源相关信息，包括应用包名、应用模块名、资源ID、资源类型和其他资源参数。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type Resource = _Resource;

  /**
   * 表示跨线程传输的Sendable资源相关信息，包括应用包名、应用模块名、资源ID、资源类型和其他资源参数。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type SendableResource = _SendableResource;
}

export default sendableResourceManager;