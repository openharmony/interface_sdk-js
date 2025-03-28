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
import { SymbolGlyphAttribute } from './component/symbolglyph'
import { AttributeModifier } from './component/common'
import { Resource } from '../global/resource'
/**
 * Defines SymbolGlyph Modifier
 *
 * @extends SymbolGlyphAttribute
 * @implements AttributeModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
*/
export declare interface SymbolGlyphModifier extends SymbolGlyphAttribute, AttributeModifier<SymbolGlyphAttribute> {
    // /**
    //  * constructor
    //  * 
    //  * @param { Resource } src
    //  * @syscap SystemCapability.ArkUI.ArkUI.Full
    //  * @crossplatform
    //  * @atomicservice
    //  * @since 12
    //  */
    // constructor(src?: Resource);

    /**
     * Defines the normal update attribute function.
     * 
     * @param { SymbolGlyphAttribute } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    applyNormalAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
    applyPressedAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
    applyFocusedAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
    applyDisabledAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
    applySelectedAttribute: undefined | ((instance: SymbolGlyphAttribute) => void);
  }