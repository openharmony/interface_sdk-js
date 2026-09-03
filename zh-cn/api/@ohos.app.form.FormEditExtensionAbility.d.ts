/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file FormEditExtensionAbility
 * @kit FormKit
 */
import UIExtensionAbility from './@ohos.app.ability.UIExtensionAbility';
import FormEditExtensionContext from './application/FormEditExtensionContext';

/**
 * FormEditExtensionAbility模块提供卡片编辑功能，支持用户在卡片提供方应用内编辑卡片内容，适用于需要动态更新卡片展示信息、实现卡片个性化配置的场景。继承自
 * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @since 18 dynamic
 * @since 23 static
 */
declare class FormEditExtensionAbility extends UIExtensionAbility {
	/**
	 * FormEditExtensionAbility的上下文环境。
	 *
	 * @syscap SystemCapability.Ability.Form
	 * @stagemodelonly
	 * @since 18 dynamic
	 */
    context: FormEditExtensionContext;

    /**
     * FormEditExtensionAbility的上下文环境。
     *
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @since 23 static
     */
    formEditContext: FormEditExtensionContext;
}
export default FormEditExtensionAbility;