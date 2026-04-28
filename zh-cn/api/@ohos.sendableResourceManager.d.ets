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
 * 资源管理导入sendableResourceManager模块，通过调用
 * [resourceToSendableResource]{@link sendableResourceManager.resourceToSendableResource}和
 * [sendableResourceToResource]{@link sendableResourceManager.sendableResourceToResource}方法可以将
 * [Resource]{@link sendableResourceManager.Resource}对象和
 * [SendableResource]{@link sendableResourceManager.resourceToSendableResource}对象进行互转。
 * Resource对象通过转换为SendableResource对象后，可以被[Sendable类](docroot://arkts-utils/arkts-sendable.md)持有。Sendable类在跨线程传输后，取出持有的
 * SendableResource对象转为Resource对象，作为参数获取资源。
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendableResourceManager {

  /**
   * 将Resource对象转换为SendableResource对象。
   *
   * @param { Resource } resource - Resource对象。
   * @returns { SendableResource } 转换后的SendableResource对象。
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export function resourceToSendableResource(resource: Resource): SendableResource;

  /**
   * 将SendableResource对象转换为Resource对象。
   *
   * @param { SendableResource } resource - SendableResource对象。
   * @returns { Resource } 转换后的Resource对象。
   * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types;
   *     2.Parameter verification failed.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export function sendableResourceToResource(resource: SendableResource): Resource;

  /**
   * 表示Resource资源信息。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type Resource = _Resource;

  /**
   * 表示SendableResource资源信息。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  export type SendableResource = _SendableResource;
}

export default sendableResourceManager;