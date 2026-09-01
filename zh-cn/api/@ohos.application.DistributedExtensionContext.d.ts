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
import type ExtensionContext from './application/ExtensionContext';
import Want from './@ohos.app.ability.Want';

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
   * 将当前DistributedExtensionAbility连接到远端（其他设备上的）ServiceExtensionAbility，建立连接后
   * 通过onConnect回调返回的[rpc.IRemoteObject](../apis-ipc-kit/js-apis-rpc.md#iremoteobject)代理与远端
   * ServiceExtensionAbility进行跨设备IPC通信，以使用其对外提供的能力。适用于多设备限定协同场景，
   * 例如在当前设备上调用其他设备的后台服务能力。使用时，开发者首先通过Want中的deviceId指定目标设备、
   * bundleName和abilityName指定目标ServiceExtensionAbility，并构造
   * [ConnectOptions](../apis-ability-kit/js-apis-inner-ability-connectOptions.md)实现onConnect、
   * onDisconnect、onFailed三个回调分别处理连接成功、连接断开和连接失败状态；随后调用
   * connectServiceExtensionAbility发起连接并获取返回的连接ID，连接成功后在onConnect回调中拿到
   * IRemoteObject代理对象，基于该代理与远端ServiceExtensionAbility进行IPC通信；
   * 使用完毕后需调用[disconnectServiceExtensionAbility](#distributedextensioncontextdisconnectserviceextensionability)
   * 断开连接并释放资源。
   * 
   * @param { Want } want - 传入需要连接的远端ServiceExtensionAbility（服务扩展能力）的Want信息。
   *     系统将基于这些信息建立到远端设备的连接。
   * @param { ConnectOptions } options - ConnectOptions类型的配置对象，包含服务连接状态回调。
   *     连接成功时触发onConnect，连接断开时触发onDisconnect，连接失败时触发onFailed。
   * @returns { long } 返回连接ID，后续通过该ID断开连接。
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
   * 断开与远端ServiceExtensionAbility的连接，与[connectServiceExtensionAbility](#distributedextensioncontextconnectserviceextensionability)
   * 配对使用。调用connectServiceExtensionAbility后，必须在使用完毕后调用此方法释放连接资源，
   * 需要使用connectServiceExtensionAbility返回的连接ID调用此方法。断开连接之后开发者需要将连接成功时
   * onConnect回调中返回的remote对象置空，以避免后续误用已失效的代理对象。使用Promise异步回调。
   *
   * @param { long } connection - 连接ID，必须使用connectServiceExtensionAbility返回的连接ID值。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
