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
 */

/**
 * 将子组件纵向布局，并在每个子组件之间插入横向分割线。适用于需要垂直方向上多区域布局且支持动态调整区域大小的场景，如仪表盘界面、可调节高度的上下分区布局等。通过可拖拽的分割线，用户可以灵活调整各区域高度，提升界面交互性和用户体验。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ColumnSplitInterface {
  /**
   * 带分割线的子组件纵向布局。
   *
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (): ColumnSplitAttribute;
}

/**
 * 设置子组件与上下分割线的距离。
 * 
 * > **说明：**
 * >
 * > 与[RowSplit]{@link ./row_split}相同，ColumnSplit的分割线可调整上下两侧子组件的高度，子组件的高度调整范围受其最大最小高度限制。
 * >
 * > 支持[clip]{@link CommonMethod#clip(value: boolean)}、[margin]{@link CommonMethod#margin}等通用属性，未设置clip属性时，其默认值为true。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ColumnSplitDividerStyle {
  /**
   * 子组件与其上方分割线的距离。可调整间距（如避免内容与分割线重叠、美化布局等场景）。
   * 
   * 默认值：0vp
   * 
   * 取值范围：不支持负值。
   * 
   * 非法值：按默认值处理，此时
   * [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)
   * 接口获取到的属性值为undefined。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  startMargin?: Dimension;

  /**
   * 子组件与其下方分割线的距离。可调整间距（如避免内容与分割线重叠、美化布局等场景）。
   * 
   * 默认值：0vp
   * 
   * 取值范围：不支持负值。
   * 
   * 非法值：按默认值处理，此时
   * [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)
   * 接口获取到的属性值为undefined。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  endMargin?: Dimension;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 支持[通用事件]{@link ./common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ColumnSplitAttribute extends CommonMethod<ColumnSplitAttribute> {
  /**
   * 设置分割线是否可拖拽。设置为true时，用户可拖动分割线调整相邻子组件高度；设置为false时，分割线不可拖动，子组件高度固定。
   * 
   * > **说明：**
   * >
   * > 初始化后，当动态修改[margin]{@link CommonMethod#margin}、[border]{@link CommonMethod#border}、
   * > [padding]{@link CommonMethod#padding}通用属性导致子组件尺寸大于相邻分割线间距时，不支持拖动分割线改变子组件的高度。
   *
   * @param { boolean } value - 分割线是否可拖动。设置为true时表示分割线可拖动，设置为false时表示分割线不可拖动。子组件的高度调整范围受其最大最小高度限制；当子组件尺寸大于相邻分割线间距时，不支持拖动
   *     分割线。初始化后，当动态修改margin、border、padding通用属性导致子组件尺寸大于相邻分割线间距时，不支持拖动分割线改变子组件的高度。
   *     <br>默认值：false 
   *     <br>非法值：按默认值处理。
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  resizeable(value: boolean): ColumnSplitAttribute;

  /**
   * 设置分割线与子组件之间的距离。
   *
   * @param { ColumnSplitDividerStyle | null } value - 分割线的margin，即设置分割线与子组件的距离。对象属性包括：startMargin（子组件与上方分割线的距离）和
   *     endMargin（子组件与下方分割线的距离）。
   *     <br>默认值：null。当设置为null时，分割线与子组件的距离为0vp。
   *     <br>非法值：按默认值处理。
   * @returns { ColumnSplitAttribute } the attribute of the ColumnSplit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  divider(value: ColumnSplitDividerStyle | null): ColumnSplitAttribute;
}

/**
 * Defines ColumnSplit Component instance.
 * 
 * > **Child Components**
 * >
 * > Supported
 * >
 * > **Note**
 * >
 * > - This component limits the height of its child components through dividers. During initialization, the divider
 * > positions are calculated based on the height of its child components. After initialization, dynamic height
 * > modifications to child components do not affect divider positions. To adjust child component heights, drag the
 * > adjacent dividers.
 * >
 * > - After initialization, dynamic changes to the
 * > [margin]{@link CommonMethod#margin}, [border]{@link CommonMethod#border}, or [padding]{@link CommonMethod#padding}
 * > attributes may cause the size of the child components to exceed the allowable distance between adjacent dividers.
 * > In such cases, dividers cannot be dragged to adjust the height of the child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ColumnSplitInstance: ColumnSplitAttribute;

/**
 * 将子组件纵向布局，并在每个子组件之间插入横向分割线。适用于需要垂直方向上多区域布局且支持动态调整区域大小的场景，如仪表盘界面、可调节高度的上下分区布局等。通过可拖拽的分割线，用户可以灵活调整各区域高度，提升界面交互性和用户体验。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * 
 * ###### 子组件
 * 
 * 可以包含子组件。
 * 
 * ColumnSplit通过分割线限制子组件的高度。初始化时，分割线位置根据子组件的高度来计算。初始化后，动态修改子组件的高度不生效，分割线位置保持不变。设置resizeable(true)后，可通过拖动相邻分割线改变子组件高度。
 * 
 * 初始化后，当动态修改[margin]{@link CommonMethod#margin}、[border]{@link CommonMethod#border}、
 * [padding]{@link CommonMethod#padding}通用属性导致子组件尺寸大于相邻分割线间距时，不支持拖动分割线改变子组件的高度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ColumnSplit: ColumnSplitInterface;