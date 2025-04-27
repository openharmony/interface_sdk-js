/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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


import { EdgeEffectOptions, NestedScrollOptions, ItemDragInfo, ScrollableCommonMethod, Optional, CommonMethod, UIScrollableCommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { Length, Resource } from "./units";
import { Scroller, OnScrollFrameBeginCallback } from "./scroll";
import { ScrollState } from "./list";
import { BarState, Color, EdgeEffect } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * The options to help grid layout
 *
 * @interface GridLayoutOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface GridLayoutOptions {
    /**
     * The size of most grid items, in [rows, columns], generally [1, 1]
     *
     * @type { [number, number] } regularSize
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    regularSize: [
        number,
        number
    ];
    /**
     * The indexes of grid items with irregular size.
     *
     * @type { ?number[] } irregularIndexes
     * @default number[] no irregular grid item
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    irregularIndexes?: number[];
    /**
     * Called to return the size of the irregular grid items with the specified index in [rows, columns].
     *
     * @type { ?function } onGetIrregularSizeByIndex,
     * all irregular grid items will occupy an entire line if not set
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onGetIrregularSizeByIndex?: (index: number) => [
        number,
        number
    ];
    /**
     * Called to return the size of the grid items with the specified index in
     * [rowStart, columnStart, rowSpan, columnSpan].
     *
     * @type { ?function } onGetRectByIndex
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onGetRectByIndex?: (index: number) => [
        number,
        number,
        number,
        number
    ];
}
/**
 * The enum of property layoutDirection
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum GridDirection {
    /**
     * The row direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Row,
    /**
     * The column direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Column,
    /**
     * The row reverse direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    RowReverse,
    /**
     * The column reverse direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ColumnReverse
}
/**
 * Declare grid item alignment status
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum GridItemAlignment {
    /**
     * Use the default alignment of the Grid.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT = 0,
    /**
     * The height of the tallest grid item in the current line
     * will be used as the height for the other items in the same line
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    STRETCH = 1
}
/**
 * The attribute of scrollbar to compute scrollbar position and height.
 *
 * @interface ComputedBarAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ComputedBarAttribute {
    /**
     * The offset of the grid.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    totalOffset: number;
    /**
     * The range of the grid.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    totalLength: number;
}
export declare interface GridAttribute extends ScrollableCommonMethod {
    /**
     * This parameter specifies the number of columns in the current grid layout.
     *
     * @param { string } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    columnsTemplate(value: string | undefined): this;
    /**
     * Lets you set the number of rows in the current grid layout,
     *
     * @param { string } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rowsTemplate(value: string | undefined): this;
    /**
     * Allows you to set the spacing between columns.
     *
     * @param { Length } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    columnsGap(value: Length | undefined): this;
    /**
     * Lets you set the spacing between rows.
     *
     * @param { Length } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rowsGap(value: Length | undefined): this;
    /**
     * Set scrollbar position.
     *
     * @param { function } event - callback of grid scroll,
     * index is the current first displayed item, offset is the grid offset,
     * return ComputedBarAttribute to update scrollbar position and height.
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollBarUpdate(event: ((index: number, offset: number) => ComputedBarAttribute) | undefined): this;
    /**
     * Called when the first or last item displayed in the grid changes.
     *
     * @param { function } event - of grid scroll,
     * first is the index of the first item displayed in the grid,
     * last is the index of the last item displayed in the grid.
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollIndex(event: ((first: number, last: number) => void) | undefined): this;
    /**
     * cached Count
     *
     * @param { number } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cachedCount(value: number | undefined): this;
    /**
     * Called to set number of GridItems to be preloaded (cached) in LazyForEach / Repeat.
     * @param { number } count - number of GridItems to be preloaded (cached).
     * @param { boolean } show - if true, cached items are displayed when clip is disabled.
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cachedCount(count: number | undefined, show: boolean | undefined): this;
    /**
     * editMode
     *
     * @param { boolean } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    editMode(value: boolean | undefined): this;
    /**
     * Called when judging whether it is multiSelectable.
     *
     * @param { boolean } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    multiSelectable(value: boolean | undefined): this;
    /**
     * maxCount
     *
     * @param { number } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxCount(value: number | undefined): this;
    /**
     * minCount
     *
     * @param { number } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minCount(value: number | undefined): this;
    /**
     * cellLength
     *
     * @param { number } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cellLength(value: number | undefined): this;
    /**
     * Control GridDirection of the grid.
     *
     * @param { GridDirection } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    layoutDirection(value: GridDirection | undefined): this;
    /**
     * Control if the grid supports animation.
     *
     * @param { boolean } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    supportAnimation(value: boolean | undefined): this;
    /**
    * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
    * (To be triggered, press and hold for 170 milliseconds (ms))
    *
    * @param { function } event
    * @returns { GridAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    onItemDragStart(event: ((event: ItemDragInfo, itemIndex: number) => (() => Object) | undefined) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemDragEnter(event: ((event: ItemDragInfo) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemDragMove(event: ((event: ItemDragInfo, itemIndex: number, insertIndex: number) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemDragLeave(event: ((event: ItemDragInfo, itemIndex: number) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onItemDrop(event: ((event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void) | undefined): this;
    /**
     * Set the alignment of grid items.
     *
     * @param { Optional<GridItemAlignment> } alignment - Items alignment
     * @returns { GridAttribute } The attribute of the grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    alignItems(alignment: GridItemAlignment | undefined): this;
    /**
     * Called when scrolling begin each frame.
     *
     * @param { OnScrollFrameBeginCallback } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;
    attributeModifier(modifier: AttributeModifier<GridAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIGridAttribute extends UIScrollableCommonMethod {
    /**
     * This parameter specifies the number of columns in the current grid layout.
     *
     * @param { string } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    columnsTemplate(value: string | undefined): this;
    /**
     * Lets you set the number of rows in the current grid layout,
     *
     * @param { string } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    rowsTemplate(value: string | undefined): this;
    /**
     * Allows you to set the spacing between columns.
     *
     * @param { Length } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    columnsGap(value: Length | undefined): this;
    /**
     * Lets you set the spacing between rows.
     *
     * @param { Length } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    rowsGap(value: Length | undefined): this;
    /**
     * Set scrollbar position.
     *
     * @param { function } event - callback of grid scroll,
     * index is the current first displayed item, offset is the grid offset,
     * return ComputedBarAttribute to update scrollbar position and height.
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollBarUpdate(event: ((index: number, offset: number) => ComputedBarAttribute) | undefined): this;
    /**
     * Called when the first or last item displayed in the grid changes.
     *
     * @param { function } event - of grid scroll,
     * first is the index of the first item displayed in the grid,
     * last is the index of the last item displayed in the grid.
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollIndex(event: ((first: number, last: number) => void) | undefined): this;
    /**
     * cached Count
     *
     * @param { number } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    cachedCount(value: number | undefined): this;
    /**
     * Called to set number of GridItems to be preloaded (cached) in LazyForEach / Repeat.
     * @param { number } count - number of GridItems to be preloaded (cached).
     * @param { boolean } show - if true, cached items are displayed when clip is disabled.
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    cachedCount(count: number | undefined, show: boolean | undefined): this;
    /**
     * editMode
     *
     * @param { boolean } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    editMode(value: boolean | undefined): this;
    /**
     * Called when judging whether it is multiSelectable.
     *
     * @param { boolean } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    multiSelectable(value: boolean | undefined): this;
    /**
     * maxCount
     *
     * @param { number } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxCount(value: number | undefined): this;
    /**
     * minCount
     *
     * @param { number } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    minCount(value: number | undefined): this;
    /**
     * cellLength
     *
     * @param { number } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    cellLength(value: number | undefined): this;
    /**
     * Control GridDirection of the grid.
     *
     * @param { GridDirection } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    layoutDirection(value: GridDirection | undefined): this;
    /**
     * Control if the grid supports animation.
     *
     * @param { boolean } value
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    supportAnimation(value: boolean | undefined): this;
    /**
    * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
    * (To be triggered, press and hold for 170 milliseconds (ms))
    *
    * @param { function } event
    * @returns { GridAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    @memo
    onItemDragStart(event: ((event: ItemDragInfo, itemIndex: number) => (() => Object) | undefined) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemDragEnter(event: ((event: ItemDragInfo) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemDragMove(event: ((event: ItemDragInfo, itemIndex: number, insertIndex: number) => void) | undefined): this;
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemDragLeave(event: ((event: ItemDragInfo, itemIndex: number) => void) | undefined): this;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onItemDrop(event: ((event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void) | undefined): this;
    /**
     * Set the alignment of grid items.
     *
     * @param { Optional<GridItemAlignment> } alignment - Items alignment
     * @returns { GridAttribute } The attribute of the grid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    alignItems(alignment: GridItemAlignment | undefined): this;
    /**
     * Called when scrolling begin each frame.
     *
     * @param { OnScrollFrameBeginCallback } event
     * @returns { GridAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<GridAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Grid(
    scroller?: Scroller, layoutOptions?: GridLayoutOptions, 
    @memo
    content_?: () => void,
): UIGridAttribute