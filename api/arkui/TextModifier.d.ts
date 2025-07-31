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

/*** if arkts 1.2 */
import { TextAttribute } from './component/text'
import { AttributeModifier }from './component/common'
/*** endif */

/*** if arkts 1.2 */
/**
 * Declare the apply normal status function.
 *
 * @typedef { function } TextApplyNormalFunction
 * @param { TextAttribute } textAttribute - The attribute of component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type TextApplyNormalFunction = (textAttribute: TextAttribute) => void;

/**
 * Defines Text Modifier
 *
 * @extends TextAttribute, AttributeModifier<TextAttribute>
 * @typedef TextModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
 * @noninterop
*/
export declare interface TextModifier extends TextAttribute, AttributeModifier<TextAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @type {undefined | ((instance: TextAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyNormalAttribute: undefined | ((instance: TextAttribute) => void);
  /**
   * Defines the pressed update attribute function.
   * 
   * @type {undefined | ((instance: TextAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyPressedAttribute: undefined | ((instance: TextAttribute) => void);
  /**
   * Defines the focused update attribute function.
   * 
   * @type {undefined | ((instance: TextAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyFocusedAttribute: undefined | ((instance: TextAttribute) => void);
  /**
   * Defines the disabled update attribute function.
   * 
   * @type {undefined | ((instance: TextAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyDisabledAttribute: undefined | ((instance: TextAttribute) => void);
  /**
   * Defines the selected update attribute function.
   * 
   * @type {undefined | ((instance: TextAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applySelectedAttribute: undefined | ((instance: TextAttribute) => void);
}
/*** endif */

/**
 * Defines Text Modifier
 *
 * @extends TextAttribute
 * @implements AttributeModifier<TextAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
*/
/**
 * Defines Text Modifier
 *
 * @extends TextAttribute
 * @implements AttributeModifier<TextAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @noninterop
 */
export declare class TextModifier extends TextAttribute implements AttributeModifier<TextAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { TextAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute?(instance: TextAttribute): void;
}
