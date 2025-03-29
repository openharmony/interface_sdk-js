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

import { ImageAttribute } from './component/image'
import { AttributeModifier }from './component/common'

/**
 * Defines Image Modifier
 *
 * @extends ImageAttribute
 * @implements AttributeModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
*/
export declare interface ImageModifier extends ImageAttribute, AttributeModifier<ImageAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { ImageAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute: undefined | ((instance: ImageAttribute) => void);
  applyPressedAttribute: undefined | ((instance: ImageAttribute) => void);
  applyFocusedAttribute: undefined | ((instance: ImageAttribute) => void);
  applyDisabledAttribute: undefined | ((instance: ImageAttribute) => void);
  applySelectedAttribute: undefined | ((instance: ImageAttribute) => void);
}
