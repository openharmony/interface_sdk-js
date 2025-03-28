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


import { AttributeModifier } from './component/common'
import { ListItemAttribute } from './component/listItem'


/**
 * Defines ListItem Modifier
 *
 * @extends ListItemAttribute
 * @implements AttributeModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
*/
export declare class ListItemModifier extends ListItemAttribute implements AttributeModifier<ListItemAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { ListItemAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute: undefined | ((instance: ListItemAttribute) => void);
  applyPressedAttribute: undefined | ((instance: ListItemAttribute) => void);
  applyFocusedAttribute: undefined | ((instance: ListItemAttribute) => void);
  applyDisabledAttribute: undefined | ((instance: ListItemAttribute) => void);
  applySelectedAttribute: undefined | ((instance: ListItemAttribute) => void);
}
