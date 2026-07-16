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
 * UIServiceProxy提供代理能力，可以从UIServiceExtension客户端发送数据到服务端。
 * 
 * > **说明：**
 * >
 * > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 14 dynamic
 * @since 23 static
 */
export default interface UIServiceProxy {
  /**
   * 给UIServiceExtension服务端发送数据。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。  
   *
   * @param { Record<string, Object> } data - 待发送给UIServiceExtension服务端的数据。
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
   * 给UIServiceExtension服务端发送数据。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。  
   *
   * @param { Record<string, RecordData> } data - 待发送给UIServiceExtension服务端的数据。
   * @throws { BusinessError } 16000050 - Internal error. Possible cause: Connect to stub failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  sendData(data: Record<string, RecordData>): void;
}