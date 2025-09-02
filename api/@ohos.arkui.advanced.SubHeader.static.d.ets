'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 * @arkts 1.2
 */
import { TextModifier } from './arkui/TextModifier';
import { ResourceStr, Resource, ResourceColor, LocalizedMargin, LocalizedPadding } from '@ohos.arkui.component';
import { SelectOption } from '@ohos.arkui.component';
import { PropRef } from './arkui/stateManagement/decorator';
import { Component } from '@ohos.arkui.component';
import { FontWeight } from '@ohos.arkui.component';
import { SymbolEffectStrategy, SymbolRenderingStrategy } from '@ohos.arkui.component';
import { BuilderParam, Builder } from '@ohos.arkui.component';
/**
 * Control style of operation element
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare enum OperationType {
    /**
     * The TextArrow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    TEXT_ARROW = 0,
    /**
     * The Button style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    BUTTON = 1,
    /**
     * The IconGroup style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    ICON_GROUP = 2,
    /**
     * The LoadingProgress style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    LOADING = 3
}
/**
 * Declare type OperationOption
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class OperationOption {
    /**
     * The content of text or the address of icon.
     *
     * @type { ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    value: ResourceStr;
    /**
     * callback function when operate the text or icon.
     *
     * @type { ?function }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    action?: () => void;
    /**
     * The accessibilityText of this text or icon.
     *
     * @type { ?ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    accessibilityText?: ResourceStr;
    /**
     * The accessibilityDescription of this text or icon.
     *
     * @type { ?ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    accessibilityDescription?: ResourceStr;
    /**
     * The accessibilityLevel of this text or icon.
     *
     * @type { ?string }.
     * @default "auto"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    accessibilityLevel?: string;
    /**
     * Sets the default focus state of the text or icon.
     *
     * @type { ?boolean }.
     * @default { false }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    defaultFocus?: boolean;
}
/**
 * Declare type SelectOption
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class SelectOptions {
    /**
     * SubOption array of the select.
     *
     * @type { Array<SelectOption> }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    options: Array<SelectOption>;
    /**
     * The default selected index.
     *
     * @type { ?number }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    selected?: number;
    /**
     * The default text value.
     *
     * @type { ?ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    value?: ResourceStr;
    /**
     * Callback when the select is selected.
     *
     * @type { ?function }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onSelect?: (index: number, value?: string) => void;
    /**
     * Sets the default focus state of select.
     *
     * @type { ?boolean }.
     * @default { false }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    defaultFocus?: boolean;
}
/**
* Declare type SymbolOptions
*
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @since 20
* @noninterop
*/
export declare class SymbolOptions {
    /**
     * The size of symbol icon.
     *
     * @type { ?(number | string | Resource) }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    fontSize?: number | string | Resource;
    /**
     * The color of symbol icon.
     *
     * @type { ?Array<ResourceColor> }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    fontColor?: Array<ResourceColor>;
    /**
     * The fontWeight of symbol icon.
     *
     * @type { ?(number | FontWeight | string) }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    fontWeight?: number | FontWeight | string;
    /**
     * The effect strategy of symbol icon.
     *
     * @type { ?SymbolEffectStrategy }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    effectStrategy?: SymbolEffectStrategy;
    /**
     * The rendering strategy of symbol icon.
     *
     * @type { ?SymbolRenderingStrategy }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    renderingStrategy?: SymbolRenderingStrategy;
}
/**
 * Declare struct SubHeader
 * @struct { SubHeader }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct SubHeader {
    /**
     * Icon resource of content area.
     *
     * @type { ?ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    icon?: ResourceStr;
    /**
     * Attributes of Symbol icon.
     *
     * @type { ?SymbolOptions }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    iconSymbolOptions?: SymbolOptions;
    /**
     * The first line text of content area.
     *
     * @type { ?ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    primaryTitle?: ResourceStr;
    /**
     * The secondary line text of content area.
     *
     * @type { ?ResourceStr }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    secondaryTitle?: ResourceStr;
    /**
     * Select option of content area.
     *
     * @type { ?SelectOptions }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    select?: SelectOptions;
    /**
     * Operation style of SubHeader.
     *
     * @type { ?OperationType }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    operationType?: OperationType;
    /**
     * operation item.
     *
     * @type { ?Array<OperationOption> }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    operationItem?: Array<OperationOption>;
    /**
     * Attributes of Symbol icons in operation area.
     *
     * @type { ?Array<SymbolOptions> }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    operationSymbolOptions?: Array<SymbolOptions>;
    /**
     * Text modifier for primary title.
     *
     * @type { ?TextModifier }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    primaryTitleModifier?: TextModifier;
    /**
     * Text modifier for secondary title.
     *
     * @type { ?TextModifier }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    secondaryTitleModifier?: TextModifier;
    /**
     * Set the title content.
     *
     * @type { ?function }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @BuilderParam
    titleBuilder?: () => void;
    /**
     * Set the content margin.
     *
     * @type { ?LocalizedMargin }
     * @default {start: LengthMetrics.resource($r('sys.float.margin_left')),
     * <br> end: LengthMetrics.resource($r('sys.float.margin_right'))}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    contentMargin?: LocalizedMargin;
    /**
     * Set the content padding.
     *
     * @type { ?LocalizedPadding }.
     * @default set different default values according to the width of the subHeader:
     *     <br> When the left area is secondaryTitle or the group of secondaryTitle and icon,
     *     <br> the default value is {start: LengthMetrics.vp(12), end: LengthMetrics.vp(12)};
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @PropRef
    contentPadding?: LocalizedPadding;
    /**
     * The method to build component.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @Builder
    build(): void;
}
