/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @kit ArkUI
 */


import { AttributeModifier } from '../@ohos.arkui.component.Common'
import { SelectAttribute } from '../@ohos.arkui.component.Select'




/**
 * Defines Select Modifier
 *
 * @extends SelectAttribute
 * @implements AttributeModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
*/
export declare class SelectModifier extends SelectAttribute implements AttributeModifier<SelectAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { SelectAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute: undefined | ((instance: SelectAttribute) => void);
  applyPressedAttribute: undefined | ((instance: SelectAttribute) => void);
  applyFocusedAttribute: undefined | ((instance: SelectAttribute) => void);
  applyDisabledAttribute: undefined | ((instance: SelectAttribute) => void);
  applySelectedAttribute: undefined | ((instance: SelectAttribute) => void);
}
