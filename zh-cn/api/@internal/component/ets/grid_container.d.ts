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
 * Defines the size type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
 */
declare enum SizeType {
  /**
   * 根据设备类型进行选择。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  Auto,

  /**
   * 最小宽度类型设备。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  XS,

  /**
   * 小宽度类型设备。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  SM,

  /**
   * 中等宽度类型设备。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  MD,

  /**
   * 大宽度类型设备。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  LG,
}

/**
 * Defines the options of GridContainer.
 *
 * @interface GridContainerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
 */
declare interface GridContainerOptions {
  /**
   * 当前布局总列数。
   *
   * 默认值：'auto'
   *
   * @type { ?(number | "auto") }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  columns?: number | "auto";

  /**
   * 选用设备宽度类型。
   *
   * 默认值：SizeType.Auto
   *
   * @type { ?SizeType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  sizeType?: SizeType;

  /**
   * 栅格布局列间距，不支持百分比。
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  gutter?: number | string;

  /**
   * 栅格布局两侧间距，不支持百分比。
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
 * 纵向排布栅格布局容器，仅在栅格布局场景中使用。
 *
 * @interface GridContainerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
 */
interface GridContainerInterface {
  /**
   * 纵向排布栅格布局容器。
   *
   * @param { GridContainerOptions } value - GridContainer参数。
   * @returns { GridContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
   */
  (value?: GridContainerOptions): GridContainerAttribute;
}

/**
 * 支持[通用属性]{@link common}和Column组件的[属性方法](docroot://reference/apis-arkui/arkui-ts/ts-container-column.md#属性)。
 *
 * 支持[通用事件]{@link common}。
 *
 * @extends ColumnAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColAttribute and grid_row/GridRowAttribute
 */
declare class GridContainerAttribute extends ColumnAttribute {}

/**
 * 纵向排布栅格布局容器，仅在栅格布局场景中使用。
 *
 * ###### 子组件
 *
 * 可以包含子组件。
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
