/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
 * The context of form edit extension
 *
 * @extends UIExtensionContext
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since 16
 */
export default class FormEditExtensionContext extends UIExtensionContext {
	
	startSecondPage(want: Want): Promise<AbilityResult>;
}
