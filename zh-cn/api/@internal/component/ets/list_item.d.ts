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
   * 无吸顶效果。
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
   * 编辑操作不限制。
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
 * 滑动效果枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum SwipeEdgeEffect {

  /**
   * ListItem划动距离超过划出组件大小后可以继续划动。
   *
   * 如果设置了删除区域，ListItem划动距离超过删除阈值后可以继续划动，
   *
   * 松手后按照弹簧阻尼曲线回弹。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Spring,

  /**
   * ListItem划动距离不能超过划出组件大小。
   *
   * 如果设置了删除区域，ListItem划动距离不能超过删除阈值，
   *
   * 并且在设置删除回调的情况下，达到删除阈值后松手触发删除回调。
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
   * 收起状态，操作项处于隐藏状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COLLAPSED,

  /**
   * 展开状态，操作项处于显示状态。
   *
   * **说明：**
   *
   * 需要ListItem设置划出操作项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  EXPANDED,

  /**
   * 长距离状态，当ListItem进入长距删除区后删除ListItem的状态。
   *
   * **说明：**
   *
   * actionAreaDistance的最终取值大于0，且小于ListItem在划动方向上的尺寸减去划出组件在划动方向上的尺寸时，滑动后松手的位置超过或等于该取值才能进入该状态。
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
   * > **说明：**
   * >
   * > - 如果List组件cachedCount属性show参数设置为true，List显示区域外已预加载完成的ListItem支持展开，否则List显示区域外节点不支持展开。
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
 * SwipeActionItem用于配置[SwipeActionOptions]{@link SwipeActionOptions}中的start或end划出项，包括划出时显示的操作项、长距离操作区域的距离阈值，以及进入、退出长距离操作
 * 区域、抬手触发操作和状态变化时的回调。
 *
 * 作为start划出项时，List为垂直布局时显示在ListItem左侧，List为水平布局时显示在ListItem上方；作为end划出项时，List为垂直布局时显示在ListItem右侧，List为水平布局时显示在ListItem下
 * 方。
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
 * start和end对应的@builder函数中顶层必须是单个组件（如果顶层是if/else、ForEach等渲染控制语句，则必须保证其仅能生成单个组件），否则会引发未定义行为。
 *
 * 滑动手势只在ListItem区域上生效，如果子组件滑出ListItem区域外，在ListItem以外部分不会响应滑动手势。所以在多列模式下，建议不要将划出组件设置太宽。
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
 * ListItem组件卡片样式枚举。
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
   * 显示默认卡片样式。
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
 * ListItem用于展示列表中的具体列表项，支持设置划出菜单、选中状态、鼠标框选和卡片样式等能力，必须配合List组件使用，适用于需要在列表中展示内容并对单个列表项进行交互操作（如滑动删除、选中标记）的场景。
 *
 * > **说明：**
 * >
 * > - 该组件的父组件只能是[List]{@link ./list}或者[ListItemGroup]{@link ./list_item_group}。
 * >
 * > - 当ListItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，ListItem子组件在
 * > ListItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为List/ListItemGroup时，ListItem子组
 * > 件在ListItem布局时创建。
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
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 10开始废弃。
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
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
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
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。
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
   * 设置当前ListItem元素是否可以被鼠标框选。外层[List]{@link ./list}组件设置[multiSelectable]{@link ListAttribute#multiSelectable}为true开启鼠标框选
   * 时，ListItem的框选才生效。
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
   * 设置当前ListItem选中状态。该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。该属性需要在设置
   * [多态样式]{@link ./common}前使用才能生效选中态样式。
   *
   * @param { boolean } value - 当前ListItem选中状态。设置为true时为选中状态，设置为false时为默认状态。<br/>默认值：false<br/>**说明：** 需要在设置多态样式前使用才能生效选
   *     中态样式。
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
   * @param { SwipeActionOptions } value - ListItem的划出组件配置，用于设置划出时显示的组件、滑动效果和滑动状态回调等。
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
   * 外层[List]{@link ./list}组件设置[multiSelectable]{@link ListAttribute#multiSelectable}为true开启鼠标框选，且当前ListItem的
   * [selectable]{@link ListItemAttribute#selectable}属性为true时，触发该回调。
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
 * ListItem用于展示列表中的具体列表项，支持设置划出菜单、选中状态、鼠标框选和卡片样式等能力，必须配合List组件使用，适用于需要在列表中展示内容并对单个列表项进行交互操作（如滑动删除、选中标记）的场景。
 *
 * > **说明：**
 * >
 * > - 该组件的父组件只能是[List]{@link ./list}或者[ListItemGroup]{@link ./list_item_group}。
 * >
 * > - 当ListItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，ListItem子组件在
 * > ListItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为List/ListItemGroup时，ListItem子组
 * > 件在ListItem布局时创建。
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