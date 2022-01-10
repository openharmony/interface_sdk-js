/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { CommonMethod, ItemDragInfo } from "./common";
import { BarState, Color } from "./enums";
import { Scroller } from "./scroll";
import { Length } from "./units";

/**
 * @since 7
 */
interface Grid extends GridAttribute<Grid> {
  /**
   * Grid is returned when the parameter is transferred.
   * @since 7
   */
  (scroller?: Scroller): Grid;
}

/**
 * The enum of property layoutDirection
 * @since 8
 */
export declare enum GridDirection {
  Row,
  Column,
  RowReverse,
  ColumnReverse
}

/**
 * @since 7
 */
declare class GridAttribute<T> extends CommonMethod<T> {
  /**
   * This parameter specifies the number of columns in the current grid layout.
   * @since 7
   */
  columnsTemplate(value: string): T;

  /**
   * Lets you set the number of rows in the current grid layout,
   * @since 7
   */
  rowsTemplate(value: string): T;

  /**
   * Allows you to set the spacing between columns.
   * @since 7
   */
  columnsGap(value: Length): T;

  /**
   * Lets you set the spacing between rows.
   * @since 7
   */
  rowsGap(value: Length): T;

  /**
   * This parameter specifies the width of the scroll bar.
   * @since 7
   */
  scrollBarWidth(value: number | string): T;

  /**
   * Sets the color of the scroll bar.
   * @since 7
   */
  scrollBarColor(value: Color | number | string): T;

  /**
   * Lets you set the spacing between rows.
   * @since 7
   */
  scrollBar(value: BarState): T;

  /**
   * Sets the status of the scroll bar.
   * @since 7
   */
  onScrollIndex(event: (first: number) => void): T;

  /**
   * cached Count
   * @since 7
   */
  cachedCount(value: number): T;

  /**
   * editMode
   * @since 8
   */
  editMode(value: boolean): T;

  /**
   * maxCount
   * @since 8
   */
  maxCount(value: number): T;

   /**
    * minCount
    * @since 8
    */
  minCount(value: number): T;

  /**
   * cellLength
   * @since 8
   */
  cellLength(value: number): T;

  /**
   * control GridDirection of the grid.
   * @since 8
   */
  layoutDirection(value: GridDirection): T;

  /**
   * control if the grid supports animation.
   * @since 8
   */
  supportAnimation(value: boolean): T;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @since 8
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => (() => any) | void): T;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @since 8
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): T;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @since 8
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): T;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @since 8
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): T;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @since 8
   */
  onItemDrop(event:
    (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void): T;
}

export declare class GridExtend<T> extends GridAttribute<T> {}
export declare const GridInterface: Grid;
