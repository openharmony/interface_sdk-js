/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */


import { Resource } from './../../../api/global/resource';
import { CommonMethod, AttributeModifier, UICommonMethod } from "./common";
import { ResourceColor } from "./units";
import { FontWeight } from "./enums";
import { SymbolEffectStrategy, SymbolRenderingStrategy } from "./symbolglyph";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
export declare interface SymbolSpanAttribute extends CommonMethod {
    /**
     * Called when the SymbolSpan size is set.
     *
     * @param { number | string | Resource } value
     * @returns { SymbolSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    fontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the SymbolSpan color is set.
     *
     * @param { Array<ResourceColor> } value
     * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    fontColor(value: Array<ResourceColor> | undefined): this;
    /**
     * Called when the font SymbolSpan weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { SymbolSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Called when the SymbolSpan effect is set.
     *
     * @param { SymbolEffectStrategy } value
     * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    effectStrategy(value: SymbolEffectStrategy | undefined): this;
    /**
     * Called when the SymbolSpan rendering strategy is set.
     *
     * @param { SymbolRenderingStrategy } value
     * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    renderingStrategy(value: SymbolRenderingStrategy | undefined): this;
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<SymbolSpanAttribute> } modifier - The instance of symbol span modifier.
     * @returns { SymbolSpanAttribute } the attribute of the SymbolSpanAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute> | undefined): this;
    attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UISymbolSpanAttribute extends UICommonMethod {
    /**
     * Called when the SymbolSpan size is set.
     *
     * @param { number | string | Resource } value
     * @returns { SymbolSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the SymbolSpan color is set.
     *
     * @param { Array<ResourceColor> } value
     * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontColor(value: Array<ResourceColor> | undefined): this;
    /**
     * Called when the font SymbolSpan weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { SymbolSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Called when the SymbolSpan effect is set.
     *
     * @param { SymbolEffectStrategy } value
     * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    effectStrategy(value: SymbolEffectStrategy | undefined): this;
    /**
     * Called when the SymbolSpan rendering strategy is set.
     *
     * @param { SymbolRenderingStrategy } value
     * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    renderingStrategy(value: SymbolRenderingStrategy | undefined): this;
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<SymbolSpanAttribute> } modifier - The instance of symbol span modifier.
     * @returns { SymbolSpanAttribute } the attribute of the SymbolSpanAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function SymbolSpan(
    value: Resource, 
    @memo
    content_?: () => void,
): UISymbolSpanAttribute