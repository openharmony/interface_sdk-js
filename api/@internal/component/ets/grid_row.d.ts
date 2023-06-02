/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Defines the option in length unit of grid-row component.
 * @form
 * @since 9
 */
/**
 * Defines the option in length unit of grid-row component.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface GridRowSizeOption {
  /**
   * Grid Row Size Option xs
   * @form
   * @since 9
   */
  /**
   * Grid Row Size Option xs
   * @form
   * @crossplatform
   * @since 10
   */
  xs?: Length,

  /**
   * Grid Row Size Option sm
   * @form
   * @since 9
   */
  /**
   * Grid Row Size Option sm
   * @form
   * @crossplatform
   * @since 10
   */
  sm?: Length,

  /**
   * Grid Row Size Option md
   * @form
   * @since 9
   */
  /**
   * Grid Row Size Option md
   * @form
   * @crossplatform
   * @since 10
   */
  md?: Length,

  /**
   * Grid Row Size Option lg
   * @form
   * @since 9
   */
  /**
   * Grid Row Size Option lg
   * @form
   * @crossplatform
   * @since 10
   */
  lg?: Length,

  /**
   * Grid Row Size Option xl
   * @form
   * @since 9
   */
  /**
   * Grid Row Size Option xl
   * @form
   * @crossplatform
   * @since 10
   */
  xl?: Length,

  /**
   * Grid Row Size Option xxl
   * @form
   * @since 9
   */
  /**
   * Grid Row Size Option xxl
   * @form
   * @crossplatform
   * @since 10
   */
  xxl?: Length,
}

/**
 * Defines the option in number unit of grid-container component.
 * @form
 * @since 9
 */
/**
 * Defines the option in number unit of grid-container component.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface GridRowColumnOption {
  /**
   * Grid Row Column Option xs
   * @form
   * @since 9
   */
  /**
   * Grid Row Column Option xs
   * @form
   * @crossplatform
   * @since 10
   */
  xs?: number,

  /**
   * Grid Row Column Option sm
   * @form
   * @since 9
   */
  /**
   * Grid Row Column Option sm
   * @form
   * @crossplatform
   * @since 10
   */
  sm?: number,

  /**
   * Grid Row Column Option md
   * @form
   * @since 9
   */
  /**
   * Grid Row Column Option md
   * @form
   * @crossplatform
   * @since 10
   */
  md?: number,

  /**
   * Grid Row Column Option lg
   * @form
   * @since 9
   */
  /**
   * Grid Row Column Option lg
   * @form
   * @crossplatform
   * @since 10
   */
  lg?: number,

  /**
   * Grid Row Column Option xl
   * @form
   * @since 9
   */
  /**
   * Grid Row Column Option xl
   * @form
   * @crossplatform
   * @since 10
   */
  xl?: number,

  /**
   * Grid Row Column Option xxl
   * @form
   * @since 9
   */
  /**
   * Grid Row Column Option xxl
   * @form
   * @crossplatform
   * @since 10
   */
  xxl?: number,
}

/**
 * Defines the gutter of grid-row component.
 * @form
 * @since 9
 */
/**
 * Defines the gutter of grid-row component.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface GutterOption {
  /**
   * Define x in GutterOption
   * @form
   * @since 9
   */
  /**
   * Define x in GutterOption
   * @form
   * @crossplatform
   * @since 10
   */
  x?: Length | GridRowSizeOption,

  /**
   * Define y in GutterOption
   * @form
   * @since 9
   */
  /**
   * Define y in GutterOption
   * @form
   * @crossplatform
   * @since 10
   */
  y?: Length | GridRowSizeOption
}

/**
 * Defines the breakpoint reference of grid-container component.
 * @form
 * @since 9
 */
/**
 * Defines the breakpoint reference of grid-container component.
 * @form
 * @crossplatform
 * @since 10
 */
declare enum BreakpointsReference {
  /**
   * Respond to breakpoint changes according to window width
   * @form
   * @since 9
   */
  /**
   * Respond to breakpoint changes according to window width
   * @form
   * @crossplatform
   * @since 10
   */
  WindowSize,

  /**
   * Respond to breakpoint changes according to component width
   * @form
   * @since 9
   */
  /**
   * Respond to breakpoint changes according to component width
   * @form
   * @crossplatform
   * @since 10
   */
  ComponentSize,
}

/**
 * Defines the direction of grid-container component.
 * @form
 * @since 9
 */
/**
 * Defines the direction of grid-container component.
 * @form
 * @crossplatform
 * @since 10
 */
declare enum GridRowDirection {
  /**
   * The elements in the grid component are arranged in rows
   * @form
   * @since 9
   */
  /**
   * The elements in the grid component are arranged in rows
   * @form
   * @crossplatform
   * @since 10
   */
  Row,

  /**
   * The elements in the grid component are arranged in reverse order of rows
   * @form
   * @since 9
   */
  /**
   * The elements in the grid component are arranged in reverse order of rows
   * @form
   * @crossplatform
   * @since 10
   */
  RowReverse,
}

/**
 * Defines the breakpoints of grid-row component.
 * @form
 * @since 9
 */
/**
 * Defines the breakpoints of grid-row component.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface BreakPoints {
  /**
   * Breakpoint array
   * @form
   * @since 9
   */
  /**
   * Breakpoint array
   * @form
   * @crossplatform
   * @since 10
   */
  value?: Array<string>,

  /**
   * Set breakpoint reference
   * @form
   * @since 9
   */
  /**
   * Set breakpoint reference
   * @form
   * @crossplatform
   * @since 10
   */
  reference?: BreakpointsReference,
}

/**
 * Defines the options of grid-row component.
 * @form
 * @since 9
 */
/**
 * Defines the options of grid-row component.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface GridRowOptions {
  /**
   * layout spacing between sub-components
   * @form
   * @since 9
   */
  /**
   * layout spacing between sub-components
   * @form
   * @crossplatform
   * @since 10
   */
  gutter?: Length | GutterOption;

  /**
   * Sets the total number of columns in the current layout.
   * @form
   * @since 9
   */
  /**
   * Sets the total number of columns in the current layout.
   * @form
   * @crossplatform
   * @since 10
   */
  columns?: number | GridRowColumnOption;

  /**
   * grid-row layout breakpoints.
   * @form
   * @since 9
   */
  /**
   * grid-row layout breakpoints.
   * @form
   * @crossplatform
   * @since 10
   */
  breakpoints?: BreakPoints;

  /**
   * grid-row layout direction.
   * @form
   * @since 9
   */
  /**
   * grid-row layout direction.
   * @form
   * @crossplatform
   * @since 10
   */
  direction?: GridRowDirection;
}

/**
 * Defines the the new version of grid-container component.
 * @form
 * @since 9
 */
/**
 * Defines the the new version of grid-container component.
 * @form
 * @crossplatform
 * @since 10
 */
interface GridRowInterface {
  /**
   * Defines the constructor of GridRow.
   * @form
   * @since 9
   */
  /**
   * Defines the constructor of GridRow.
   * @form
   * @crossplatform
   * @since 10
   */
  (option?: GridRowOptions): GridRowAttribute;
}

declare class GridRowAttribute extends CommonMethod<GridRowAttribute> {
  /**
   * Callback triggered when the breakpoint changes
   * @form
   * @since 9
   */
  /**
   * Callback triggered when the breakpoint changes
   * @form
   * @crossplatform
   * @since 10
   */
  onBreakpointChange(callback: (breakpoints: string) => void): GridRowAttribute;

  /**
   * Cross axis alignment of each line in GridRow.
   * @param { ItemAlign } value - element alignment
   * @default ItemAlign.Start
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  alignItems(value: ItemAlign): GridRowAttribute;
}

/**
 * Defines GridRow Component.
 * @form
 * @since 9
 */
/**
 * Defines GridRow Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const GridRow: GridRowInterface;

/**
 * Defines GridRow Component instance.
 * @form
 * @since 9
 */
/**
 * Defines GridRow Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const GridRowInstance: GridRowAttribute;