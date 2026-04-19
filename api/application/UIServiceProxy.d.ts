/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * UIServiceProxy functions as a proxy to send data from the UIServiceExtensionAbility client to the server.
 * 
 * > **NOTE**
 * >
 * > - The APIs of this module must be used in the main thread, but not in child threads such as Worker and TaskPool.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 14 dynamic
 * @since 23 static
 */
export default interface UIServiceProxy {
  /**
   * Sends data to the UIServiceExtensionAbility server.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   *
   * @param { Record<string, Object> } data - Data to be sent to the UIServiceExtensionAbility server.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  sendData(data: Record<string, Object>): void;

  /**
   * Sends data to the UIServiceExtensionAbility server.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   *
   * @param { Record<string, RecordData> } data - Data to be sent to the UIServiceExtensionAbility server.
   * @throws { BusinessError } 16000050 - Internal error. Possible cause: Connect to stub failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  sendData(data: Record<string, RecordData>): void;
}