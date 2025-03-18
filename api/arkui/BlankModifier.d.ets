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
import { BlankAttribute } from '../@ohos.arkui.component.Blank'
/**
 * Defines Blank Modifier
 *
 * @extends BlankAttribute
 * @implements AttributeModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
*/
export declare class BlankModifier extends BlankAttribute implements AttributeModifier<BlankAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { BlankAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute: undefined | ((instance: BlankAttribute) => void);
  applyPressedAttribute: undefined | ((instance: BlankAttribute) => void);
  applyFocusedAttribute: undefined | ((instance: BlankAttribute) => void);
  applyDisabledAttribute: undefined | ((instance: BlankAttribute) => void);
  applySelectedAttribute: undefined | ((instance: BlankAttribute) => void);
}
