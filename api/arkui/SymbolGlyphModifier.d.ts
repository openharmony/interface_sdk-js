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
import { SymbolGlyphAttribute } from './component/symbolglyph'
import { AttributeModifier } from './component/common'
import { Resource } from '../global/resource'
/*** endif */

/*** if arkts 1.2 */
/**
 * Declare the apply normal status function.
 *
 * @typedef { function } SymbolGlyphApplyNormalFunction
 * @param { SymbolGlyphAttribute } symbolGlyphAttribute - The attribute of component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type SymbolGlyphApplyNormalFunction = (symbolGlyphAttribute: SymbolGlyphAttribute) => void;
/**
 * Defines SymbolGlyph Modifier
 *
 * @extends SymbolGlyphAttribute, AttributeModifier<SymbolGlyphAttribute>
 * @typedef SymbolGlyphModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
*/
export declare interface SymbolGlyphModifier extends SymbolGlyphAttribute, AttributeModifier<SymbolGlyphAttribute> {
  /**
   * Defines the normal update attribute function.
   * 
   * @type {undefined | ((instance: SymbolGlyphAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyNormalAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
  /**
   * Defines the pressed update attribute function.
   * 
   * @type {undefined | ((instance: SymbolGlyphAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyPressedAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
  /**
   * Defines the focused update attribute function.
   * 
   * @type {undefined | ((instance: SymbolGlyphAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyFocusedAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
  /**
   * Defines the disabled update attribute function.
   * 
   * @type {undefined | ((instance: SymbolGlyphAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyDisabledAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
  /**
   * Defines the selected update attribute function.
   * 
   * @type {undefined | ((instance: SymbolGlyphAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applySelectedAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
}
/*** endif */

/**
 * Defines SymbolGlyph Modifier
 *
 * @extends SymbolGlyphAttribute
 * @implements AttributeModifier<SymbolGlyphAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
*/
/**
 * Defines SymbolGlyph Modifier
 *
 * @extends SymbolGlyphAttribute
 * @implements AttributeModifier<SymbolGlyphAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class SymbolGlyphModifier extends SymbolGlyphAttribute implements AttributeModifier<SymbolGlyphAttribute> {
    /**
     * constructor
     * 
     * @param { Resource } src
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    /**
     * constructor
     * 
     * @param { Resource } src
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(src?: Resource);

    /**
     * Defines the normal update attribute function.
     * 
     * @param { SymbolGlyphAttribute } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    /**
     * Defines the normal update attribute function.
     * 
     * @param { SymbolGlyphAttribute } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    applyNormalAttribute?(instance: SymbolGlyphAttribute): void;
  }