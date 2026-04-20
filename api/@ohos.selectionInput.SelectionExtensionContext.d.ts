/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import ExtensionContext from './application/ExtensionContext';
import Want from './@ohos.app.ability.Want';

/**
 * **SelectionExtensionContext** is the context of 
 * [SelectionExtensionAbility]{@link @ohos.selectionInput.SelectionExtensionAbility:SelectionExtensionAbility}, which is
 * inherited from [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}.
 * When a **SelectionExtensionAbility** component is instantiated, the system automatically creates the corresponding 
 * **SelectionExtensionContext**. You can use **SelectionExtensionContext** to start other abilities in the same 
 * application.
 * 
 * > **NOTE**
 * > - This module is supported only on PCs/2-in-1 devices.
 *
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi [since 20 - 23]
 * @publicapi [since 24]
 * @stagemodelonly
 * @since 20 dynamic
 * @since 24 static
 */
declare class SelectionExtensionContext extends ExtensionContext {
  /**
   * Starts an ability. This API uses a promise to return the result.
   *
   * @param { Want } want - Want information of the ability to start, including the ability name and bundle name.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application.
   * @throws { BusinessError } 16000070 - The extension cannot start the service.
   * @throws { BusinessError } 16000083 - The ExtensionAbility cannot start the ability due to system control.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  startAbility(want: Want): Promise<void>;
}

export default SelectionExtensionContext;