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
 * 设备宽度类型枚举，用于在栅格布局中区分不同宽度的设备类型，实现响应式布局。
 * 
 * > **说明：**
 * >
 * > 从API version 7开始支持，从API version 9开始废弃。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
 */
declare enum SizeType {
  /**
   * 根据设备宽度自动匹配合适的尺寸类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  Auto = 0,

  /**
   * 最小宽度类型设备，宽度≤320vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  XS,

  /**
   * 小宽度类型设备，宽度320vp-600vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  SM,

  /**
   * 中等宽度类型设备，宽度600vp-840vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  MD,

  /**
   * 大宽度类型设备，宽度≥840vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  LG,
}

/**
 * 栅格栅格布局容器配置参数对象，用于设置GridContainer组件的列数、设备宽度类型、列间距和两侧间距。
 * 
 * > **说明：**
 * >
 * > 从API version 7开始支持，从API version 9开始废弃。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
 */
declare interface GridContainerOptions {
  /**
   * 当前布局总列数，number类型需为正整数。设置为number时使用固定列数布局；设置为'auto'时，系统根据设备宽度类型自动确定列数（XS为2列，SM为4列，MD为8列，LG为12列）。传入0或负数时视为未设置，系统自动确定列
   * 数。
   * 
   * 默认值：'auto'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  columns?: number | "auto";

  /**
   * 设置设备宽度类型，用于响应式布局。
   * 
   * 默认值：SizeType.Auto
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  sizeType?: SizeType;

  /**
   * 栅格布局列间距，不支持百分比。number类型默认单位为vp，取值范围[0, +∞)。不设置时根据设备宽度类型自动确定：XS为12vp，SM/MD/LG为24vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  gutter?: number | string;

  /**
   * 栅格布局两侧间距，不支持百分比。number类型默认单位为vp，取值范围[0, +∞)。不设置时根据设备宽度类型自动确定：XS为12vp，SM为24vp，MD为32vp，LG为48vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColOptions and grid_row/GridRowOptions
   */
  margin?: number | string;
}

/**
 * 纵向排布栅格布局容器，仅在栅格布局场景中使用。栅格布局通过将容器宽度划分为指定列数，实现响应式布局，子组件可占用不同的列数和偏移量。适用于响应式页面布局、多栏目内容展示、仪表盘布局等场景。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该组件不再维护，推荐使用新组件[GridCol]{@link ./grid_col}、[GridRow]{@link ./grid_row}。
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
 * @noninterop
 */
interface GridContainerInterface {
  /**
   * 创建纵向排布栅格布局容器。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
   *
   * @param { GridContainerOptions } value - GridContainer配置参数，用于设置栅格布局的列数、设备宽度类型、列间距和两侧间距。不传入时使用默认配置。
   * @returns { GridContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
   */
  (value?: GridContainerOptions): GridContainerAttribute;
}

/**
 * 支持[通用属性]{@link ./common}和Column组件的[属性方法](docroot://reference/apis-arkui/arkui-ts/ts-container-column.md#属性)。
 * 
 * 支持[通用事件]{@link ./common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColAttribute and grid_row/GridRowAttribute
 * @noninterop
 */
declare class GridContainerAttribute extends ColumnAttribute {}

/**
 * 纵向排布栅格布局容器，仅在栅格布局场景中使用。栅格布局通过将容器宽度划分为指定列数，实现响应式布局，子组件可占用不同的列数和偏移量。适用于响应式页面布局、多栏目内容展示、仪表盘布局等场景。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该组件不再维护，推荐使用新组件[GridCol]{@link ./grid_col}、[GridRow]{@link ./grid_row}。
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * 
 * ###### 子组件
 * 
 * 可以包含子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
 * @noninterop
 */
declare const GridContainer: GridContainerInterface

/**
 * Defines GridContainer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead grid_col/GridColAttribute and grid_row/GridRowAttribute
 * @noninterop
 */
declare const GridContainerInstance: GridContainerAttribute;