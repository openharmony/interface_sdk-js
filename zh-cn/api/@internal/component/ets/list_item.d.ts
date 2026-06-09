/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * ListItem吸顶效果枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead list/StickyStyle
 */
declare enum Sticky {

  /**
   * 不吸顶。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  None,

  /**
   * Normal mode
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Normal,

  /**
   * Set opacity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Opacity,
}

/**
 * ListItem元素编辑模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 7 dynamiconly
 * @deprecated since 9
 */
declare enum EditMode {

  /**
   * 无操作限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  None,

  /**
   * Deletable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Deletable,

  /**
   * Movable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Movable,
}

/**
 * 滑动效果枚举
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum SwipeEdgeEffect {

  /**
   * 弹性物理动效，滑动到边缘后按初始速度或触摸事件继续滑动一段距离，释放后回弹。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Spring,

  /**
   * 滑动到边缘后无效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None,
}

/**
 * 列表项滑动状态枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum SwipeActionState {

  /**
   * 折叠状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COLLAPSED,

  /**
   * 展开状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  EXPANDED,

  /**
   * 操作中状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  ACTIONING,
}

/**
 * ListItem划出菜单的展开方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare enum ListItemSwipeActionDirection {

  /**
   * 当列表方向是垂直方向时，LTR模式下表示ListItem的左边，RTL模式下表示ListItem的右边。当列表是水平方向时，表示ListItem的上边。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  START = 0,

  /**
   * 当列表方向是垂直方向时，LTR模式下表示ListItem的右边，RTL模式下表示ListItem的左边。当列表是水平方向时，表示ListItem的下边。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  END = 1,
}

/**
 * ListItem划出菜单的管理器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare class ListItemSwipeActionManager {

  /**
   * 展开指定ListItem的划出菜单。
   *
   * @param { FrameNode } node - ListItem节点对象。
   * @param { ListItemSwipeActionDirection } direction - ListItem划出菜单的展开方向。
   * @throws { BusinessError } 100023 - The component type of the node is incorrect.
   * @throws { BusinessError } 106203 - The node not mounted to component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  static expand(node: FrameNode, direction: ListItemSwipeActionDirection): void;

  /**
   * 收起指定ListItem的划出菜单。
   *
   * @param { FrameNode } node - ListItem节点对象。
   * @throws { BusinessError } 100023 - The component type of the node is incorrect.
   * @throws { BusinessError } 106203 - The node not mounted to component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  static collapse(node: FrameNode): void;
}

/**
 * List垂直布局，ListItem向右滑动时，item左边的长距离滑动删除选项。向左滑动时，item右边的长距离滑动删除选项。
 * List水平布局，ListItem向上滑动时，item下边的长距离滑动删除选项。向下滑动时，item上边的长距离滑动删除选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SwipeActionItem {

  /**
   * 当列表项向左或向右滑动（当列表方向为"垂直"时），向上或向下滑动（当列表方向为"水平"时）时显示的操作项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  builder?: CustomBuilder;

  /**
   * 当列表项向左或向右滑动（当列表方向为"垂直"时），向上或向下滑动（当列表方向为"水平"时）时显示的操作项。
   * 该参数的优先级高于参数builder。即同时设置builder和builderComponent时，以builderComponent设置的值为准。
   * 同一个builderComponent不推荐同时给不同的start/end使用，否则会导致显示问题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  builderComponent?: ComponentContent;

  /**
   * 设置组件长距离滑动删除距离阈值。即划出组件被完全滑进视窗后，继续滑动触发删除的距离阈值。
   * 不支持设置百分比。
   * 删除距离阈值大于item宽度减去划出组件宽度，或删除距离阈值小于等于0就不会设置删除区域。
   *
   * @default 56vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  actionAreaDistance?: Length;

  /**
   * 组件进入长距删除区后抬手时触发。
   * 滑动后松手的位置超过或等于设置的距离阈值，并且设置的距离阈值有效时才会触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onAction?: () => void;

  /**
   * 在滑动条目进入删除区域时调用，只触发一次，当再次进入时仍触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onEnterActionArea?: () => void;

  /**
   * 当滑动条目退出删除区域时调用，只触发一次，当再次退出时仍触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onExitActionArea?: () => void;

  /**
   * 当列表项滑动状态变化时候触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onStateChange?: (state: SwipeActionState) => void;
}

/**
 * start和end对应的@builder函数中顶层必须是单个组件，否则会引发未定义行为。
 * 如果@builder函数中顶层是if/else、ForEach等语句，那么需要保证if/else、ForEach等语句必须能生成单个组件。
 *
 * 滑动手势只在listItem区域上，如果子组件划出ListItem区域外，在ListItem以外部分不会响应划动手势。
 * 所以在多列模式下，建议不要将划出组件设置太宽。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface SwipeActionOptions {

  /**
   * ListItem向右划动时item左边的组件（List垂直布局时）或ListItem向下划动时item上方的组件（List水平布局时）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  start?: CustomBuilder | SwipeActionItem;

  /**
   * ListItem向左划动时item右边的组件（List垂直布局时）或ListItem向上划动时item下方的组件（List水平布局时）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  end?: CustomBuilder | SwipeActionItem;

  /**
   * 滑动效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  edgeEffect?: SwipeEdgeEffect;

  /**
   * 当列表项向左或向右滑动（当列表方向为"垂直"时），向上或向下滑动（当列表方向为"水平"时）位置发生变化触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onOffsetChange?: (offset: number) => void;
}

/**
 * List组件卡片样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ListItemStyle {

  /**
   * 无样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE = 0,

  /**
   * 显示默认样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CARD = 1,
}

/**
 * ListItem组件参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ListItemOptions {

  /**
   * 设置List组件卡片样式。
   * 默认值：ListItemStyle.NONE
   * 设置为ListItemStyle.NONE时无样式。
   * 设置为ListItemStyle.CARD时，建议配合ListItemGroup的ListItemGroupStyle.CARD同时使用，显示默认卡片样式。
   * 卡片样式下，ListItem默认规格：高度48vp，宽度100%，左右内边距8vp。如果需要实现ListItem高度自适应，可以把height设置为undefined。
   * 卡片样式下，为卡片内的列表选项提供了默认的focus、hover、press、selected和disable样式。
   * 当设置为ListItemStyle.CARD时，List的listDirection属性值须为Axis.Vertical，如果设置为Axis.Horizontal，会导致显示混乱；
   * List属性alignListItem默认为ListItemAlign.Center，居中对齐显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style?: ListItemStyle;
}

/**
 * 用来展示列表具体item，必须配合[List]{@link list}来使用。
 *
 * > **说明：**
 * >
 * > *
 * >
 * > * 该组件的父组件只能是[List]{@link list}或者[ListItemGroup]{@link list_item_group}。
 * >
 * > * 当ListItem配合LazyForEach使用时，ListItem子组件在ListItem创建时创建。配合if/else、ForEach使用时，或父组件为List/ListItemGroup时，ListItem子组件在ListItem布局时创建。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ListItemInterface {

  /**
   * 创建ListItem组件。
   *
   * @param { ListItemOptions } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (value?: ListItemOptions): ListItemAttribute;

  /**
   * 创建ListItem组件。
   *
   * @param { string } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form [since 9]
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead listItem/ListItemInterface
   */
  (value?: string): ListItemAttribute;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ListItemAttribute extends CommonMethod<ListItemAttribute> {

  /**
   * 设置ListItem吸顶效果。
   *
   * @param { Sticky } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead list/List#sticky
   */
  sticky(value: Sticky): ListItemAttribute;

  /**
   * 设置当前ListItem元素是否可编辑，进入编辑模式后可删除或移动列表项。
   *
   * @param { boolean | EditMode } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  editable(value: boolean | EditMode): ListItemAttribute;

  /**
   * 设置当前ListItem元素是否可以被鼠标框选。外层List容器的鼠标框选开启时，ListItem的框选才生效。
   *
   * @param { boolean } value
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectable(value: boolean): ListItemAttribute;

  /**
   * 设置当前ListItem选中状态。该属性支持$$双向绑定变量。
   * 该属性需要在设置多态样式前使用才能生效选中态样式。
   *
   * @param { boolean } value - 当前ListItem选中状态。设置为true时为选中状态，设置为false时为默认状态。默认值：false
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected(value: boolean): ListItemAttribute;

  /**
   * 用于设置ListItem的划出组件。
   *
   * @param { SwipeActionOptions } value - ListItem的划出组件。
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  swipeAction(value: SwipeActionOptions): ListItemAttribute;

  /**
   * ListItem元素被鼠标框选的状态改变时触发回调。
   *
   * @param { function } event
   * @returns { ListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(event: (isSelected: boolean) => void): ListItemAttribute;
}

/**
 * ListItem组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ListItemInstance: ListItemAttribute;

/**
 * 用来展示列表具体item，必须配合[List]{@link list}来使用。
 *
 * > **说明：**
 * >
 * > *
 * >
 * > * 该组件的父组件只能是[List]{@link list}或者[ListItemGroup]{@link list_item_group}。
 * >
 * > * 当ListItem配合LazyForEach使用时，ListItem子组件在ListItem创建时创建。配合if/else、ForEach使用时，或父组件为List/ListItemGroup时，ListItem子组件在ListItem布局时创建。
 *
 * ###### 子组件
 *
 * 可以包含单个子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ListItem: ListItemInterface;