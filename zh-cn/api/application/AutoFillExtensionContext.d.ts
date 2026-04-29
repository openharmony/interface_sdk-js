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
 * AutoFillExtensionContext模块是AutoFillExtensionAbility的上下文环境，继承自
 * [ExtensionContext]{@link ExtensionContext:ExtensionContext}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare class AutoFillExtensionContext extends ExtensionContext {
  /**
   * 拉起模态页面。使用Promise异步回调。
   *
   * @param { CustomData } customData - 拉起模态页面时的自定义信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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