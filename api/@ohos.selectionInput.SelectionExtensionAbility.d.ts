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

import type rpc from './@ohos.rpc';
import type Want from './@ohos.app.ability.Want';
import type SelectionExtensionContext from './@ohos.selectionInput.SelectionExtensionContext';

/**
 * This module provides ExtensionAbility for word selection, allowing users to search or translate text selected using a
 * mouse or touchpad.
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
declare class SelectionExtensionAbility {
  /**
   * Context of the SelectionExtensionAbility. This context is inherited from 
   * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}.
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  context: SelectionExtensionContext;

  /**
   * Called when the SelectionExtensionAbility instance is created. You can execute initialization logic (such as 
   * defining variables, loading resources, and listening for word selection events) within this callback.
   *
   * @param { Want } want - Want information of the SelectionExtensionAbility, including the ability name and bundle
   *     name.
   * @returns { rpc.RemoteObject } RPC remote connection object.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  onConnect(want: Want): rpc.RemoteObject;

  /**
   * Called when the **SelectionExtensionAbility** instance is destroyed (for example, when the user disables the word 
   * selection function or switches the word selection application). You can clear resources and save data during this 
   * lifecycle. This API returns the result synchronously or uses a promise to return the result.
   * After the **onDisconnect()** lifecycle callback is executed, the application may exit. Consequently, the 
   * asynchronous function (for example, asynchronously writing data to the database) in **onDisconnect()** may fail to 
   * be executed. Using a Promise for asynchronous callback is recommended to prevent such issues.
   * The callback is invoked only when the SelectionExtensionAbility exits gracefully. It is not invoked in cases of 
   * abnormal exits (for example, process termination due to low memory conditions).
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  onDisconnect(): void;

}

export default SelectionExtensionAbility;