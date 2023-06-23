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
 * Defines the grid interface.
 * @since 7
 */
/**
 * Defines the grid interface.
 * @crossplatform
 * @since 10
 */
interface GridInterface {
  /**
   * Grid is returned when the parameter is transferred.
   * @since 7
   */
  /**
   * Grid is returned when the parameter is transferred.
   * @crossplatform
   * @since 10
   */
  (scroller?: Scroller): GridAttribute;
}

/**
 * The enum of property layoutDirection
 * @since 8
 */
/**
 * The enum of property layoutDirection
 * @crossplatform
 * @since 10
 */
declare enum GridDirection {
  /**
   * The row direction.
   * @since 8
   */
  /**
   * The row direction.
   * @crossplatform
   * @since 10
   */
  Row,

  /**
   * The column direction.
   * @since 8
   */
  /**
   * The column direction.
   * @crossplatform
   * @since 10
   */
  Column,

  /**
   * The row reverse direction.
   * @since 8
   */
  /**
   * The row reverse direction.
   * @crossplatform
   * @since 10
   */
  RowReverse,

  /**
   * The column reverse direction.
   * @since 8
   */
  /**
   * The column reverse direction.
   * @crossplatform
   * @since 10
   */
  ColumnReverse,
}

/**
 * The attribute of scrollbar to compute scrollbar position and height.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface ComputedBarAttribute {
  /**
   * The offset of the grid.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  totalOffset: number;

  /**
   * The range of the grid.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  totalLength: number;
}

/**
 * Defines the grid attribute functions.
 * @since 7
 */
/**
 * Defines the grid attribute functions.
 * @crossplatform
 * @since 10
 */
declare class GridAttribute extends CommonMethod<GridAttribute> {
  /**
   * This parameter specifies the number of columns in the current grid layout.
   * @since 7
   */
  /**
   * This parameter specifies the number of columns in the current grid layout.
   * @crossplatform
   * @since 10
   */
  columnsTemplate(value: string): GridAttribute;

  /**
   * Lets you set the number of rows in the current grid layout,
   * @since 7
   */
  /**
   * Lets you set the number of rows in the current grid layout,
   * @crossplatform
   * @since 10
   */
  rowsTemplate(value: string): GridAttribute;

  /**
   * Allows you to set the spacing between columns.
   * @since 7
   */
    /**
   * Allows you to set the spacing between columns.
   * @crossplatform
   * @since 10
   */
  columnsGap(value: Length): GridAttribute;

  /**
   * Lets you set the spacing between rows.
   * @since 7
   */
  /**
   * Lets you set the spacing between rows.
   * @crossplatform
   * @since 10
   */
  rowsGap(value: Length): GridAttribute;

  /**
   * This parameter specifies the width of the scroll bar.
   * @since 7
   */
  /**
   * This parameter specifies the width of the scroll bar.
   * @crossplatform
   * @since 10
   */
  scrollBarWidth(value: number | string): GridAttribute;

  /**
   * Sets the color of the scroll bar.
   * @since 7
   */
  /**
   * Sets the color of the scroll bar.
   * @crossplatform
   * @since 10
   */
  scrollBarColor(value: Color | number | string): GridAttribute;

  /**
   * Lets you set the spacing between rows.
   * @since 7
   */
  /**
   * Lets you set the spacing between rows.
   * @crossplatform
   * @since 10
   */
  scrollBar(value: BarState): GridAttribute;

  /**
   * Set scrollbar position.
   * @param {(index: number, offset: number) => ComputedBarAttribute} callback of grid scroll,
   * index is the current first displayed item, offset is the grid offset,
   * return ComputedBarAttribute to update scrollbar position and height.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onScrollBarUpdate(event: (index: number, offset: number) => ComputedBarAttribute): GridAttribute;

  /**
   * Sets the status of the scroll bar.
   * @since 7
   */
  /**
   * Sets the status of the scroll bar.
   * @crossplatform
   * @since 10
   */
  onScrollIndex(event: (first: number) => void): GridAttribute;

  /**
   * cached Count
   * @since 7
   */
  /**
   * cached Count
   * @crossplatform
   * @since 10
   */
  cachedCount(value: number): GridAttribute;

  /**
   * editMode
   * @since 8
   */
  /**
   * editMode
   * @crossplatform
   * @since 10
   */
  editMode(value: boolean): GridAttribute;

  /**
   * Called when judging whether it is multiSelectable.
   * @since 8
   */
  /**
   * Called when judging whether it is multiSelectable.
   * @crossplatform
   * @since 10
   */
  multiSelectable(value: boolean): GridAttribute;

  /**
   * maxCount
   * @since 8
   */
  /**
   * maxCount
   * @crossplatform
   * @since 10
   */
  maxCount(value: number): GridAttribute;

  /**
   * minCount
   * @since 8
   */
  /**
   * minCount
   * @crossplatform
   * @since 10
   */
  minCount(value: number): GridAttribute;

  /**
   * cellLength
   * @since 8
   */
  /**
   * cellLength
   * @crossplatform
   * @since 10
   */
  cellLength(value: number): GridAttribute;

  /**
   * Control GridDirection of the grid.
   * @since 8
   */
  /**
   * Control GridDirection of the grid.
   * @crossplatform
   * @since 10
   */
  layoutDirection(value: GridDirection): GridAttribute;

  /**
   * Control if the grid supports animation.
   * @since 8
   */
  /**
   * Control if the grid supports animation.
   * @crossplatform
   * @since 10
   */
  supportAnimation(value: boolean): GridAttribute;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @since 8
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @crossplatform
   * @since 10
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => (() => any) | void): GridAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @crossplatform
   * @since 10
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): GridAttribute;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @crossplatform
   * @since 10
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): GridAttribute;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @crossplatform
   * @since 10
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): GridAttribute;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @since 8
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @crossplatform
   * @since 10
   */
  onItemDrop(
    event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void,
  ): GridAttribute;

  /**
   * Called when the sliding effect is set.
   * @param { EdgeEffect } value - Scroll effect. For details, see EdgeEffect.
   * @default EdgeEffect.None
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  edgeEffect(value: EdgeEffect): GridAttribute;

  /**
   * Called to setting the nested scroll options.
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  nestedScroll(value: NestedScrollOptions): GridAttribute
}

/**
 * Defines Grid Component.
 * @since 7
 */
/**
 * Defines Grid Component.
 * @crossplatform
 * @since 10
 */
declare const Grid: GridInterface;

/**
 * Defines Grid Component instance.
 * @since 7
 */
/**
 * Defines Grid Component instance.
 * @crossplatform
 * @since 10
 */
declare const GridInstance: GridAttribute;
