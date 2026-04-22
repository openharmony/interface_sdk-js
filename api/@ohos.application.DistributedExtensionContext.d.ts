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

import { ConnectOptions } from '../ability/connectOptions';
import type ExtensionContext from './application/ExtensionContext';
import Want from '../@ohos.app.ability.Want';

/**
 * Class inherited for the distributed extension function.
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare class DistributedExtensionContext extends ExtensionContext {
  /**
   * Connects to a remote Service extension ability.
   * 
   * This method connects to a Service extension ability on a remote device.
   * You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
   * service extension when connected.
   *
   * @param { Want } want - Indicates the service extension to connect.
   * @param { ConnectOptions } options - Indicates the callback of connection.
   * @returns { long } Returns the connection id.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
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
   * Disconnects from a remote Service extension ability.
   *
   * @param { long } connection - the connection id returned from connectServiceExtensionAbility.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  disconnectServiceExtensionAbility(connection: long): Promise<void>;
}

export default DistributedExtensionContext;