/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit FormKit
 */

import { AsyncCallback } from '../@ohos.base';
import type { ConnectOptions } from '../ability/connectOptions';
import Want from '../@ohos.app.ability.Want';
import ExtensionContext from './ExtensionContext';

/**
 * FormExtensionContext模块是[FormExtensionAbility]{@link @ohos.app.form.FormExtensionAbility}的上下文环境，继承自
 * [ExtensionContext]{@link ./ExtensionContext:ExtensionContext}。
 * 
 * FormExtensionContext模块提供FormExtensionAbility具有的接口和能力。
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class FormExtensionContext extends ExtensionContext {
  /**
   * 拉起一个应用的Ability。使用callback异步回调。
   *
   * @param { Want } want - 包含bundleName，abilityName以及用户自定义参数用于拉起Ability。
   * @param { AsyncCallback<void> } callback - 回调函数。当拉起一个应用的Ability成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16500101 - The application is not a system application. [since 9 - 11]
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * 拉起一个应用的Ability。使用Promise异步回调。
   *
   * @param { Want } want - 包含bundleName，abilityName以及用户自定义参数用于拉起Ability。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16500101 - The application is not a system application. [since 9 - 11]
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;

  /**
   * 将一个Ability与服务类型的Ability绑定。
   *
   * @param { Want } want - Want类型参数，传入需要启动的ability的信息，如Ability名称，Bundle名称等。
   * @param { ConnectOptions } options - ConnectOptions类型的回调函数，返回服务连接成功、断开或连接失败后的信息。
   * @returns { long } 返回一个connectId，后续根据此connectId断开连接。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): long;

  /**
   * 将一个Ability与绑定的服务类型的Ability解绑，断开连接之后需要将连接成功时返回的remote对象置空，使用callback异步回调。
   *
   * @param { long } connection - 在
   *     [connectServiceExtensionAbility]{@link FormExtensionContext.connectServiceExtensionAbility}中返回的number。
   * @param { AsyncCallback<void> } callback - 回调函数。当Ability与绑定的服务类型的Ability解绑成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>): void;

  /**
   * 将一个Ability与绑定的服务类型的Ability解绑，断开连接之后需要将连接成功时返回的remote对象置空(Promise形式返回结果)。
   *
   * @param { long } connection - 在
   *     [connectServiceExtensionAbility]{@link FormExtensionContext.connectServiceExtensionAbility}中返回的number。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long): Promise<void>;
}
export default FormExtensionContext;