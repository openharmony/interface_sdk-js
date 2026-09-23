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

/**
 * @file
 * @kit ArkUI
 */

/**
 * Enumerates device width types, used to distinguish device types of different widths in the grid layout to implement
 * responsive layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
 */
declare enum SizeType {
  /**
   * Automatically matches the appropriate size type based on the device width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  Auto,

  /**
   * Device with minimum width. Width ≤320 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  XS,

  /**
   * Device with small width. Width 320 vp–600 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  SM,

  /**
   * Device with medium width. Width 600 vp–840 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  MD,

  /**
   * Device with large width. Width ≥840 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  LG,
}

/**
 * Defines the grid layout container configuration parameter object, used to set the number of columns, device width
 * type, gutter, and margin for the **GridContainer** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
 */
declare interface GridContainerOptions {
  /**
   * Total number of columns in the current layout. If set to a number, it must be a positive integer. When set to a
   * number, a fixed-column layout is used. When set to **'auto'**, the system automatically determines the number of
   * columns based on the device width type (XS: 2 columns, SM: 4 columns, MD: 8 columns, LG: 12 columns). If **0** or a
   * negative number is passed, it is treated as not set, and the system automatically determines the number of columns.
   *
   * Default value: **'auto'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  columns?: number | "auto";

  /**
   * Device width type for responsive layout.
   *
   * Default value: **SizeType.Auto**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  sizeType?: SizeType;

  /**
   * Gutter of the grid layout. Percentage values are not supported. When the type is number, the default unit is vp,
   * with a value range of
   * [0, +∞). If not set, it is automatically determined based on the device width type: 12 vp for XS, and 24 vp for SM, MD, and LG.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  gutter?: number | string;

  /**
   * Margin on both sides of the grid layout. Percentage values are not supported. When the type is number, the default
   * unit is vp, with a value range of
   * [0, +∞). If not set, it is automatically determined based on the device width type: 12 vp for XS, 24 vp for SM, 32 vp for MD, and 48 vp for LG.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  margin?: number | string;
}

/**
 * A vertical grid layout container, used only in grid layout scenarios. The grid layout implements responsive layout by
 * dividing the container width into a specified number of columns, allowing child components to occupy different
 * numbers of columns and offsets. It is suitable for responsive page layouts, multi-column content display, dashboard
 * layouts, and other scenarios.
 *
 * > **NOTE**
 * >
 * > This component is deprecated since API version 9. You are advised to use the new components
 * > [GridCol]{@link ./grid_col} and [GridRow]{@link ./grid_row} instead.
 * >
 * > This component is supported since API version 7. New APIs added in later versions are marked with superscripts to
 * > indicate their starting version.
 *
 * @interface GridContainerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
 */
interface GridContainerInterface {
  /**
   * Creates a vertical grid layout container.
   *
   * @param { GridContainerOptions } value - Configuration parameter of **GridContainer**, used to set the number of
   *     columns, device width type, gutter, and margin of the grid layout. If not passed, the default configuration is
   *     used.
   * @returns { GridContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
   */
  (value?: GridContainerOptions): GridContainerAttribute;
}

/**
 * The [universal attributes]{@link CommonMethod} and attributes of the
 * [Column](docroot://reference/apis-arkui/arkui-ts/ts-container-column.md#attributes) component are supported.
 *
 * The [universal events]{@link CommonMethod} are supported.
 *
 * @extends ColumnAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColAttribute and grid_row/GridRowAttribute
 */
declare class GridContainerAttribute extends ColumnAttribute {}

/**
 * A vertical grid layout container, used only in grid layout scenarios. The grid layout implements responsive layout by
 * dividing the container width into a specified number of columns, allowing child components to occupy different
 * numbers of columns and offsets. It is suitable for responsive page layouts, multi-column content display, dashboard
 * layouts, and other scenarios.
 *
 * > **NOTE**
 * >
 * > This component is deprecated since API version 9. You are advised to use the new components
 * > [GridCol]{@link ./grid_col} and [GridRow]{@link ./grid_row} instead.
 * >
 * > This component is supported since API version 7. New APIs added in later versions are marked with superscripts to
 * > indicate their starting version.
 *
 * ## Child Components
 *
 * Supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
 */
declare const GridContainer: GridContainerInterface

/**
 * Defines GridContainer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColAttribute and grid_row/GridRowAttribute
 */
declare const GridContainerInstance: GridContainerAttribute;
