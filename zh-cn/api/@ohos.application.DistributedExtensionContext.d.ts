/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * @file Distributed Extension Context
 * @kit DistributedServiceKit
 */

import { ConnectOptions } from './ability/connectOptions';

import { ConnectOptions } from '../ability/connectOptions';
import type ExtensionContext from './application/ExtensionContext';

import Want from './@ohos.app.ability.Want';
import Want from '../@ohos.app.ability.Want';

/**
 * 用于分布式扩展功能的实现。
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare class DistributedExtensionContext extends ExtensionContext {
  /**
   * 连接到远程服务扩展能力。
   *
   * 此方法连接到远程设备上的服务扩展能力。
   * 必须实现{@link ConnectOptions}接口才能获取目标的代理
   * 连接时的服务扩展。
   *
   * @param { Want } want - 指示要连接的服务扩展
   * @param { ConnectOptions } options - 连接回调
   * @returns { long } 返回连接ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): long;

  /**
   * 断开与远程服务扩展功能的连接。
   *
   * @param { long } connection - 从connectServiceExtensionAbility返回的连接ID
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 16000003 - The connection id does not exist.
   * @throws { BusinessError } 16000011 - The ability has been destroyed. The context is no longer valid,
   *     meaning the context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  disconnectServiceExtensionAbility(connection: long): Promise<void>;
}

export default DistributedExtensionContext;