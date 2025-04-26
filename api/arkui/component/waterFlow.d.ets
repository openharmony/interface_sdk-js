/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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


import { CustomBuilder, ScrollableCommonMethod, NestedScrollOptions, CommonMethod, UIScrollableCommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { Length, Dimension, Margin, ConstraintSizeOptions, Resource } from "./units";
import { Scroller, OnScrollFrameBeginCallback } from "./scroll";
import { ScrollState } from "./list";
import { FlexDirection } from "./enums";
import { ComponentContent } from '../../arkui/ComponentContent';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * function that returns item main size by index.
 *
 * @typedef { function } GetItemMainSizeByIndex
 * @param { number } index - the index of FlowItem
 * @returns { number } main size of the FlowItem at index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type GetItemMainSizeByIndex = (index: number) => number;
/**
 * Defines the water flow section options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class SectionOptions {
    /**
     * The number of FlowItems in this section.
     *
     * @type { number } itemsCount - the number of FlowItems in this section
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    itemsCount: number;
    /**
     * The columns of this section in vertical layout, or rows in horizontal layout.
     *
     * @type { ?number } crossCount - cross count of this section
     * @default 1 one column in vertical layout, or one row in horizontal layout
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    crossCount?: number;
    /**
     * Asks the developer for the main size in vp of the flow item with the specified index.
     * The water flow layout uses the size measured after the flow item is created if not set.
     *
     * @type { ?GetItemMainSizeByIndex } onGetItemMainSizeByIndex - function that returns item main size by index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onGetItemMainSizeByIndex?: GetItemMainSizeByIndex;
    /**
     * Set the spacing between columns of this section.
     *
     * @type { ?Dimension } columnsGap - column gap of this section
     * same with columnsGap of WaterFlow if not set
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    columnsGap?: Dimension;
    /**
     * Set the spacing between rows of this section.
     *
     * @type { ?Dimension } rowsGap - row gap of this section
     * same with rowsGap of WaterFlow if not set
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rowsGap?: Dimension;
    /**
     * Outer margin of this section.
     *
     * @type { ?(Margin | Dimension) } margin - outer margin of this section
     * @default {top: 0, right: 0, bottom: 0, left: 0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    margin?: Margin | Dimension;
}
/**
 * Indicates the sections of WaterFlow.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class WaterFlowSections {
    /**
     * Creates an instance of WaterFlowSections.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Changes sections in the WaterFlow by removing or replacing existing elements and/or adding new elements in place.
     *
     * @param { number } start - Zero-based index at which to start changing the sections.
     * @param { number } [deleteCount] - Indicating the number of sections in the WaterFlow to remove from start.
     * @param { Array<SectionOptions> } [sections] - The new sections to add to the WaterFlow, beginning from start.
     * @returns { boolean } Whether the splice was successful.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    splice(start: number, deleteCount?: number, sections?: Array<SectionOptions>): boolean;
    /**
     * Pushes a new section to the end of WaterFlow.
     *
     * @param { SectionOptions } section - new section options.
     * @returns { boolean } Whether the push was successful.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    push(section: SectionOptions): boolean;
    /**
     * Updates section at specified section index.
     *
     * @param { number } sectionIndex - index of section to be updated.
     * @param { SectionOptions } section - new section options.
     * @returns { boolean } Whether the update was successful.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    update(sectionIndex: number, section: SectionOptions): boolean;
    /**
     * Obtains all the section options in the WaterFlow.
     *
     * @returns { Array<SectionOptions> } Returns all the section options in the WaterFlow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    values(): Array<SectionOptions>;
    /**
     * Obtains the section counts in the WaterFlow.
     *
     * @returns { number } Returns section counts in the WaterFlow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    length(): number;
}
/**
 * Declare layout modes of WaterFlow.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum WaterFlowLayoutMode {
    /**
     * Top-down Layout mode. Positions of new items depend on items above.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ALWAYS_TOP_DOWN = 0,
    /**
     * Sliding window mode. Only maintains layout information of items currently in viewport.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SLIDING_WINDOW = 1
}
/**
 * Defines the water flow options.
 *
 * @interface WaterFlowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface WaterFlowOptions {
    /**
     * Describes the water flow footer.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    footer?: CustomBuilder;
    /**
     * Describes the water flow footer.
     *
     * @type { ?ComponentContent }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    footerContent?: ComponentContent;
    /**
     * Describes the water flow scroller.
     *
     * @type { ?Scroller }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scroller?: Scroller;
    /**
     * Describes the sections with different cross count that compose the water flow.
     *
     * @type { ?WaterFlowSections } sections - sections with different cross count
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    sections?: WaterFlowSections;
    /**
     * Describes the layout mode.
     *
     * @type { ?WaterFlowLayoutMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    layoutMode?: WaterFlowLayoutMode;
}
export declare interface WaterFlowAttribute extends ScrollableCommonMethod {
    /**
     * This parameter specifies the number of columns in the current waterflow.
     *
     * @param { string } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    columnsTemplate(value: string | undefined): this;
    /**
     * This parameter specifies the min or max size of each item.
     *
     * @param { ConstraintSizeOptions } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    itemConstraintSize(value: ConstraintSizeOptions | undefined): this;
    /**
     * Set the number of rows in the current waterflow.
     *
     * @param { string } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rowsTemplate(value: string | undefined): this;
    /**
     * Set the spacing between columns.
     *
     * @param { Length } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    columnsGap(value: Length | undefined): this;
    /**
     * Set the spacing between rows.
     *
     * @param { Length } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rowsGap(value: Length | undefined): this;
    /**
     * Control layout direction of the WaterFlow.
     *
     * @param { FlexDirection } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    layoutDirection(value: FlexDirection | undefined): this;
    /**
     * Called to set number of flow items to be preloaded (cached) in LazyForEach.
     * @param { number } value - number of flow items to be preloaded (cached).
     * @returns { WaterFlowAttribute } the attribute of the water flow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cachedCount(value: number | undefined): this;
    /**
     * Called to set number of flow items to be preloaded (cached) in LazyForEach / Repeat.
     * @param { number } count - number of flow items to be preloaded (cached).
     * @param { boolean } show - if true, cached items are displayed when clip is disabled.
     * @returns { WaterFlowAttribute } the attribute of the water flow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cachedCount(count: number | undefined, show: boolean | undefined): this;
    /**
     * Called when scrolling begin each frame.
     *
     * @param { OnScrollFrameBeginCallback } event
     * @returns { WaterFlowAttribute } the attribute of the water flow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;
    /**
     * Called when the first or last item displayed in the waterflow changes.
     *
     * @param { function } event - Callback function, triggered when the first or last item
     * displayed in the waterflow changes.
     * "first": the index of the first item displayed in the waterflow,
     * "last": the index of the last item displayed in the waterflow.
     * @returns { WaterFlowAttribute } the attribute of the water flow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollIndex(event: ((first: number, last: number) => void) | undefined): this;
    attributeModifier(modifier: AttributeModifier<WaterFlowAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIWaterFlowAttribute extends UIScrollableCommonMethod {
    /**
     * This parameter specifies the number of columns in the current waterflow.
     *
     * @param { string } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    columnsTemplate(value: string | undefined): this;
    /**
     * This parameter specifies the min or max size of each item.
     *
     * @param { ConstraintSizeOptions } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    itemConstraintSize(value: ConstraintSizeOptions | undefined): this;
    /**
     * Set the number of rows in the current waterflow.
     *
     * @param { string } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    rowsTemplate(value: string | undefined): this;
    /**
     * Set the spacing between columns.
     *
     * @param { Length } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    columnsGap(value: Length | undefined): this;
    /**
     * Set the spacing between rows.
     *
     * @param { Length } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    rowsGap(value: Length | undefined): this;
    /**
     * Control layout direction of the WaterFlow.
     *
     * @param { FlexDirection } value
     * @returns { WaterFlowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    layoutDirection(value: FlexDirection | undefined): this;
    /**
     * Called to set number of flow items to be preloaded (cached) in LazyForEach.
     * @param { number } value - number of flow items to be preloaded (cached).
     * @returns { WaterFlowAttribute } the attribute of the water flow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    cachedCount(value: number | undefined): this;
    /**
     * Called to set number of flow items to be preloaded (cached) in LazyForEach / Repeat.
     * @param { number } count - number of flow items to be preloaded (cached).
     * @param { boolean } show - if true, cached items are displayed when clip is disabled.
     * @returns { WaterFlowAttribute } the attribute of the water flow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    cachedCount(count: number | undefined, show: boolean | undefined): this;
    /**
     * Called when scrolling begin each frame.
     *
     * @param { OnScrollFrameBeginCallback } event
     * @returns { WaterFlowAttribute } the attribute of the water flow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;
    /**
     * Called when the first or last item displayed in the waterflow changes.
     *
     * @param { function } event - Callback function, triggered when the first or last item
     * displayed in the waterflow changes.
     * "first": the index of the first item displayed in the waterflow,
     * "last": the index of the last item displayed in the waterflow.
     * @returns { WaterFlowAttribute } the attribute of the water flow.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollIndex(event: ((first: number, last: number) => void) | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<WaterFlowAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function WaterFlow(
    options?: WaterFlowOptions, 
    @memo
    content_?: () => void,
): UIWaterFlowAttribute