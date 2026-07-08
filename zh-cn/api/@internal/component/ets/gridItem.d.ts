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
* GridItem样式枚举。
*
* > **说明：**
* >
* > GridItem焦点态样式设置：Grid组件需要设置4vp规格以上的内边距，用于显示GridItem的焦点框。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum GridItemStyle {

  /**
   * 无样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NONE = 0,

  /**
   * 显示Hover、Press态样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PLAIN = 1,
}

/**
* GridItem样式对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GridItemOptions {

  /**
   * 设置GridItem样式。
   *
   * 默认值：GridItemStyle.NONE
   *
   * 设置为GridItemStyle.NONE时无样式。
   *
   * 设置为GridItemStyle.PLAIN时，显示Hover、Press态样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  style?: GridItemStyle;
}

/**
* 网格容器中单项内容容器。
*
* > **说明：**
* >
* > *
* >
* > * 仅支持作为[Grid]{@link grid}组件的子组件使用。
* >
* > * 当GridItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，GridItem子组件在
* > GridItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为Grid时，GridItem子组件在GridItem布局时创
* > 建。
* >
* > * 当Grid中存在大量GridItem时，使用[columnStart]{@link GridItemAttribute#columnStart}/
* > [columnEnd]{@link GridItemAttribute#columnEnd}、[rowStart]{@link GridItemAttribute#rowStart}/
* > [rowEnd]{@link GridItemAttribute#rowEnd}设置GridItem大小会导致在使用scrollToIndex滑动到指定Index时，依次遍历GridItem节点，耗时较长。建议使用
* > [GridLayoutOptions]{@link GridLayoutOptions}布局，以提高查找GridItem位置的效率。最佳实践请参考
* > [优化Grid组件加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve_grid_performance)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface GridItemInterface {

  /**
   * 创建网格容器中单项内容容器。
   *
   * @param { GridItemOptions } value - 为GridItem提供可选参数，该对象内含有[GridItemStyle]{@link GridItemStyle}枚举类型的style参
   *     数。 [since 11]
   * @returns { GridItemAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: GridItemOptions): GridItemAttribute;
}

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class GridItemAttribute extends CommonMethod<GridItemAttribute> {

  /**
   * 设置当前元素起始行号。
   *
   * @param { number } value - 当前元素起始行号。<br/>需要指定GridItem起始行列号和所占行列数的场景推荐使用Grid的
   *     [GridLayoutOptions]{@link GridLayoutOptions}参数，详细可参考Grid的
   *     [示例1（固定行列Grid）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)和
   *     [示例3（可滚动Grid设置跨行跨列节点）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)。<br/>取值
   *     范围：[0, 总行数-1]
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowStart(value: number): GridItemAttribute;

  /**
   * 设置当前元素终点行号。
   *
   * @param { number } value - 当前元素终点行号。<br/>需要指定GridItem起始行列号和所占行列数的场景推荐使用Grid的
   *     [GridLayoutOptions]{@link GridLayoutOptions}参数，详细可参考Grid的
   *     [示例1（固定行列Grid）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)和
   *     [示例3（可滚动Grid设置跨行跨列节点）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)。<br/>取值
   *     范围：[0, 总行数-1]
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowEnd(value: number): GridItemAttribute;

  /**
   * 设置当前元素起始列号。
   *
   * @param { number } value - 当前元素起始列号。<br/>需要指定GridItem起始行列号和所占行列数的场景推荐使用Grid的
   *     [GridLayoutOptions]{@link GridLayoutOptions}参数，详细可参考Grid的
   *     [示例1（固定行列Grid）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)和
   *     [示例3（可滚动Grid设置跨行跨列节点）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)。<br/>取值
   *     范围：[0, 总列数-1]
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnStart(value: number): GridItemAttribute;

  /**
   * 设置当前元素终点列号。
   *
   * @param { number } value - 当前元素终点列号。<br/>需要指定GridItem起始行列号和所占行列数的场景推荐使用Grid的
   *     [GridLayoutOptions]{@link GridLayoutOptions}参数，详细可参考Grid的
   *     [示例1（固定行列Grid）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)和
   *     [示例3（可滚动Grid设置跨行跨列节点）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)。<br/>取值
   *     范围：[0, 总列数-1]
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnEnd(value: number): GridItemAttribute;

  /**
   * 设置在触发组件build时是否重新创建此节点。
   *
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。GridItem会根据自身属性和子组件变化自行决定是否需要重新创建，无需设置。
   *
   * @param { boolean } value - 在触发组件build时是否重新创建此节点。<br/>默认值：false
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  forceRebuild(value: boolean): GridItemAttribute;

  /**
   * 设置当前GridItem元素是否可以被鼠标框选。外层Grid容器的鼠标框选开启时，GridItem的框选才生效。
   *
   * 该属性需要在设置[多态样式]{@link common}前使用才能生效选中态样式。
   *
   * @param { boolean } value - 当前GridItem元素是否可以被鼠标框选。设置为true时可以被鼠标框选，设置为false时无法被鼠标框选。<br/>默认值：true
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectable(value: boolean): GridItemAttribute;

  /**
   * 设置当前GridItem选中状态。该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * 该属性需要在设置[多态样式]{@link common}前使用才能生效选中态样式。
   *
   * @param { boolean } value - 当前GridItem选中状态。设置为true时为选中状态，设置为false时为默认状态。<br/>默认值：false
   * @returns { GridItemAttribute } the attribute of the gridItem.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected(value: boolean): GridItemAttribute;

  /**
   * GridItem元素被鼠标框选的状态改变时触发回调。
   *
   * @param { function } event - 回调函数。进入鼠标框选范围即被选中返回true，移出鼠标框选范围即未被选中返回false。
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(event: (isSelected: boolean) => void): GridItemAttribute;
}

/**
 * 网格容器中单项内容容器。
 *
 * > **说明：**
 * >
 * > *
 * >
 * > * 仅支持作为[Grid]{@link grid}组件的子组件使用。
 * >
 * > * 当GridItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，GridItem子组件在
 * > GridItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为Grid时，GridItem子组件在GridItem布局时创
 * > 建。
 * >
 * > * 当Grid中存在大量GridItem时，使用[columnStart]{@link GridItemAttribute#columnStart}/
 * > [columnEnd]{@link GridItemAttribute#columnEnd}、[rowStart]{@link GridItemAttribute#rowStart}/
 * > [rowEnd]{@link GridItemAttribute#rowEnd}设置GridItem大小会导致在使用scrollToIndex滑动到指定Index时，依次遍历GridItem节点，耗时较长。建议使用
 * > [GridLayoutOptions]{@link GridLayoutOptions}布局，以提高查找GridItem位置的效率。最佳实践请参考
 * > [优化Grid组件加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve_grid_performance)。
 *
 * ###### 子组件
 *
 * 可以包含单个子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const GridItem: GridItemInterface;

/**
 * GridItem组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const GridItemInstance: GridItemAttribute;