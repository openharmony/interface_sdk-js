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

import ExtensionContext from './ExtensionContext';
/*** if arkts dynamic */
import type CustomData from './CustomData';
/*** endif */
/*** if arkts static */
import CustomData from './CustomData';
/*** endif */

/**
 * # Usage
 * 
 * Before using the AutoFillExtensionContext module, you must define a child class that inherits from 
 * AutoFillExtensionAbility.
 * 
 * ```ts
 * import { AutoFillExtensionAbility } from '@kit.AbilityKit';
 * 
 * class MyAutoFillExtensionAbility extends AutoFillExtensionAbility {
 *   onCreate() {
 *     let AutoFillExtensionContext = this.context;
 *   }
 * }
 * ```
 */
/**
 * The AutoFillExtensionContext module provides the context environment for the AutoFillExtensionAbility. It inherits 
 * from [ExtensionContext]{@link ExtensionContext:ExtensionContext}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare class AutoFillExtensionContext extends ExtensionContext {
  /**
   * Starts a modal page. This API uses a promise to return the result.
   *
   * @param { CustomData } customData - Custom information for starting the modal page.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  reloadInModal(customData: CustomData): Promise<void>;
}

export default AutoFillExtensionContext;