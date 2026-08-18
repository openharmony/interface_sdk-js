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
  * @kit NetworkKit
 */

import ExtensionContext from './ExtensionContext';
/**
 * VpnExtensionContext是VpnExtensionAbility的上下文环境，继承自
 * [ExtensionContext]{@link ./ExtensionContext:ExtensionContext}。
 * 
 * VpnExtensionContext可直接作为VpnExtension的上下文环境，提供允许访问特定于VpnExtensionAbility的资源的能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 11 dynamic
 * @since 26.1.0 static
 */
export default class VpnExtensionContext extends ExtensionContext {}