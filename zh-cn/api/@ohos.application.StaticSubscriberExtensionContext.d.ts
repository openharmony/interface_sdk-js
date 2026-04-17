/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';

/*** if arkts 1.1 */
import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
/*** endif */
import Want from './@ohos.app.ability.Want';
import ExtensionContext from './application/ExtensionContext';

/**
 * # 使用说明
 *
 * 在使用StaticSubscriberExtensionContext的功能前，需要通过StaticSubscriberExtensionAbility获取。
 *
 * ```ts
 * import { StaticSubscriberExtensionAbility, StaticSubscriberExtensionContext } from '@kit.BasicServicesKit';
 * ```
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 10 dynamic
 * @since 23 static
 */
declare class StaticSubscriberExtensionContext extends ExtensionContext {
  /**
   * 拉起一个静态订阅所属的同应用的Ability。使用callback异步回调。
   *
   * 使用规则：
   *
   * - 调用方应用位于后台时，使用该接口启动Ability需申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限
   * - 跨应用场景下，目标Ability的visible属性若配置为false，调用方应用需申请`ohos.permission.START_INVISIBLE_ABILITY`权限
   *
   * @permission ohos.permission.START_ABILITIES_FROM_BACKGROUND
   * @param { Want } want - 启动Ability的want信息。
   * @param { AsyncCallback<void> } callback - callback形式返回启动结果。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Params error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16300003 - The target application is not the current application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * 拉起一个静态订阅所属的同应用的Ability。使用Promise异步回调。
   *
   * 使用规则：
   *
   * - 调用方应用位于后台时，使用该接口启动Ability需申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限
   * - 跨应用场景下，目标Ability的visible属性若配置为false，调用方应用需申请`ohos.permission.START_INVISIBLE_ABILITY`权限
   *
   * @permission ohos.permission.START_ABILITIES_FROM_BACKGROUND
   * @param { Want } want - 启动Ability的want信息。
   * @returns { Promise<void> } Promise形式返回启动结果。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Params error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16300003 - The target application is not the current application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;
}
export default StaticSubscriberExtensionContext;