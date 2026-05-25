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
 * @kit FormKit
 */

import UIExtensionContext from './UIExtensionContext';
import type Want from '../@ohos.app.ability.Want';
import type { AbilityResult } from '../ability/abilityResult';

/**
 * **FormEditExtensionContext**, inherited from 
 * [UIExtensionContext]{@link ./application/UIExtensionContext:UIExtensionContext}, is the context of 
 * [FormEditExtensionAbility]{@link @ohos.app.form.FormEditExtensionAbility:FormEditExtensionAbility}.
 * 
 * > **NOTE**
 * 
 * > - The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @since 18 dynamic
 * @since 23 static
 */
declare class FormEditExtensionContext extends UIExtensionContext {
	/**
  * Starts the widget provider page to be edited. This API uses a promise to return the result.
  *
  * @param { Want } want - Information about the editing page that needs to be started by the home screen of a third-party 
  *     application.
  * @returns { Promise<AbilityResult> } Promise used to return the ability result.
  * @throws { BusinessError } 202 - The application is not a system application.
  * @throws { BusinessError } 16500050 - An IPC connection error happened.
  * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
  * @throws { BusinessError } 16501000 - An internal functional error occurred.
  * @syscap SystemCapability.Ability.Form
  * @stagemodelonly
  * @since 18 dynamic
  * @since 23 static
  */
	startSecondPage(want: Want): Promise<AbilityResult>;

     /**
      * Starts UIAbility of the application to which a widget belongs. This API uses a promise to return the result.
      *
      * @param { Want } want - Want information of the UIAbility of the application.
      * @returns { Promise<void> } Promise that returns no value.
      * @throws { BusinessError } 16500050 - An IPC connection error happened.
      * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
      * @throws { BusinessError } 16000130 - The target UIAbility does not belong to the caller.
      * @throws { BusinessError } 16501014 - The form edit page is not in the foreground. The current operation is
      *     not supported.
      * @throws { BusinessError } 16000121 - The target component type is not a UIAbility.
      * @syscap SystemCapability.Ability.Form
      * @stagemodelonly
      * @since 23 dynamic&static
      */
     startUIAbility(want: Want): Promise<void>;
}
export default FormEditExtensionContext;
