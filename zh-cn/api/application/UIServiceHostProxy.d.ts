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
 * UIServiceHostProxy提供代理能力，可以将数据从
 * [UIServiceExtension]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}服务端发送到客户端。
 * 
 * > **说明：**
 * >
 * > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 14 dynamic
 * @since 23 static
 */
export default interface UIServiceHostProxy {
  /**
   * 从[UIServiceExtension]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}服务端给客户端发送数据。
   *
   * @param { Record<string, Object> } data - 待发送到
   *     [UIServiceExtension]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}客户端的数据。
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  sendData(data: Record<string, Object>): void;

  /**
   * 从[UIServiceExtension]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}服务端给客户端发送数据。
   *
   * @param { Record<string, RecordData> } data - 待发送到
   *     [UIServiceExtension]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}客户端的数据。
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  sendData(data: Record<string, RecordData>): void;
}