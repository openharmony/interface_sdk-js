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
 * FormEditExtensionContext是
 * [FormEditExtensionAbility]{@link @ohos.app.form.FormEditExtensionAbility:FormEditExtensionAbility}的上下文，继承自
 * [UIExtensionContext]{@link ./UIExtensionContext:UIExtensionContext}。用于管理卡片编辑场景的上下文环境，支持拉起卡片提供方页面和所属应用UIAbility，适用于卡片编
 * 辑流程中需要与卡片提供方交互的场景。
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @since 18 dynamic
 * @since 23 static
 */
declare class FormEditExtensionContext extends UIExtensionContext {
	/**
  * 拉起需要被编辑的卡片提供方页面。使用Promise异步回调。
  * 
  * - 用户在卡片编辑界面点击编辑按钮，需要打开卡片提供方的编辑页面。
  * - 用户需要修改卡片配置或内容时，拉起卡片提供方应用进行编辑。
  *
  * @param { Want } want - 需要拉起的编辑页面信息。必须包含bundleName字段，且parameters中需包含secPageAbilityName。
  * @returns { Promise<AbilityResult> } Promise对象，返回被启动方退出时的结果码和数据。
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
      * 拉起卡片所属应用的UIAbility。使用Promise异步回调。说明：需在卡片编辑页面处于前台时调用，页面不在前台时调用将返回错误码16501014。
      *
      * @param { Want } want - 用于指定要拉起的UIAbility的Want信息。必须包含abilityName字段。
      * @returns { Promise<void> } Promise对象，无返回结果。
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