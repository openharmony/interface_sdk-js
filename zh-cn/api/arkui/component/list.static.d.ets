'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { ChildrenMainSize, EditModeOptions, ItemDragInfo, RectResult, ScrollableCommonMethod, OnWillScrollCallback, OnScrollCallback, OnItemDragStartCallback } from './common';
import { Axis, FocusWrapMode } from './enums';
import { OnScrollFrameBeginCallback, ScrollAlign, Scroller } from "./scroll";
import { Dimension, Length, LengthConstrain, ResourceColor, ItemFillPolicy, CacheCountInfo, Resource } from './units';
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { AttributeModifier, Bindable, Callback, CommonMethod, UIScrollableCommonEvent } from "./common";
/**
 * 滑动状态枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ScrollState {

  /**
   * Idle state. Triggered when the scroll state returns to idle, and when the controller's
   * non-animated methods are used to control the scroll.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Idle,

  /**
   * Scrolling state. Triggered when the list is dragged with the finger,
   * when the scrollbar is dragged, or when the mouse scroll wheel is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Scroll,

  /**
   * Inertial scrolling state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Fling
}

/**
 * 设置子组件在List交叉轴方向的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ListItemAlign {

  /**
   * The list items are packed toward the start edge of the <em>List</em> component along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start,

  /**
   * The list items are centered in the <em>List</em> component along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Center,

  /**
   * The list items are packed toward the end edge of the <em>List</em> component along the cross axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End
}

/**
 * 枚举了ListItemGroup各个区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ListItemGroupArea {

  /**
   * ListItemGroup内部ListItem区域、header区域以及footer区域以外的区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * ListItemGroup内部ListItem区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  IN_LIST_ITEM_AREA = 1,

  /**
   * ListItemGroup内部header区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  IN_HEADER_AREA = 2,

  /**
   * ListItemGroup内部footer区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  IN_FOOTER_AREA = 3
}

/**
 * ListItemGroup吸顶或吸底效果枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum StickyStyle {

  /**
   * ListItemGroup的header不吸顶，footer不吸底。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 0,

  /**
   * ListItemGroup的header吸顶，footer不吸底。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Header = 1,

  /**
   * ListItemGroup的footer吸底，header不吸顶。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Footer = 2,

  /**
   * ListItemGroup的header吸顶，footer吸底。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTH = 3
}

/**
 * 链式动效边缘效果枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ChainEdgeEffect {

  /**
   * Default edge effect. Compress the space in the drag direction
   * and stretch the space in the opposite drag direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT,

  /**
   * Stretch all space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  STRETCH
}

/**
 * 设置列表项滚动结束对齐效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ScrollSnapAlign {

  /**
   * 默认无项目滚动对齐效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * 视图中的第一项将在列表的开头对齐。
   *
   * <p><strong>说明</strong>
   * <br>当列表位移至末端，需要将末端的item完整显示，可能出现开头不对齐的情况。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  START = 1,

  /**
   * 视图中的中间项将在列表中心对齐。
   *
   * <p><strong>说明</strong>
   * <br>顶端和末尾的item都可以在列表中心对齐，列表显示可能露出空白。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CENTER = 2,

  /**
   * 视图中的最后一项将在列表末尾对齐。
   *
   * <p><strong>说明</strong>
   * <br>当列表位移至顶端，需要将顶端的item完整显示，可能出现末尾不对齐的情况。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END = 3
}

/**
 * 定义链式联动动效选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ChainAnimationOptions {

  /**
   * 链式动效的最小间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  minSpace: Length;

  /**
   * 链式动效的最大间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  maxSpace: Length;

  /**
   * 链式动效的传导系数。
   *
   * @default 0.7
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  conductivity?: double;

  /**
   * 链式动效的强度。
   *
   * @default 0.3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  intensity?: double;

  /**
   * 链式动效的边缘效果。
   *
   * @default ChainEdgeEffect.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  edgeEffect?: ChainEdgeEffect;

  /**
   * 链式弹簧的刚度。
   *
   * @default 228
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  stiffness?: double;

  /**
   * 链式弹簧的阻尼。
   *
   * @default 30
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  damping?: double;
}

/**
 * frameNode中[getEvent('List')](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#geteventlist19)方法的返回值，可用于给List
 * 节点设置滚动事件。
 *
 * UIListEvent继承于[UIScrollableCommonEvent]{@link UIScrollableCommonEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface UIListEvent extends UIScrollableCommonEvent {

  /**
   * 设置[onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12)事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnWillScrollCallback | undefined } callback - onWillScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnWillScroll(callback: OnWillScrollCallback | undefined): void;

  /**
   * 设置[onDidScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#ondidscroll12)事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnScrollCallback | undefined } callback - onDidScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;

  /**
   * 设置[onScrollIndex]{@link onScrollIndex}事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnListScrollIndexCallback | undefined } callback - onScrollIndex事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollIndex(callback: OnListScrollIndexCallback | undefined): void;

  /**
   * 设置[onScrollVisibleContentChange]{@link onScrollVisibleContentChange}事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnScrollVisibleContentChangeCallback | undefined } callback - onScrollVisibleContentChange事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollVisibleContentChange(callback: OnScrollVisibleContentChangeCallback | undefined): void;
}

/**
 * 定义收起滑动操作选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CloseSwipeActionOptions {

  /**
   * 在收起动画完成后触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onFinish?: () => void;
}

/**
 * 定义List可见内容区子组件的详细信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VisibleListContentInfo {

  /**
   * 表示ListItem或ListItemGroup在List中的索引值。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: int;

  /**
   * 表示处于ListItemGroup的哪一个区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  itemGroupArea?: ListItemGroupArea;

  /**
   * 表示ListItem在ListItemGroup中的索引值。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  itemIndexInGroup?: int;
}

/**
 * 定义List组件的系统返回键行为。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ListBackPressBehavior {

  /**
   * 系统返回键生效时，是否收起已展开的ListItem的划出组件。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  closeSwipeAction?: boolean;
}

/**
 * 有子组件划入或划出List显示区域时触发。
 *
 * List从有子组件变成空的List时，上报的start和end参数会保留上次有子组件时的值。
 *
 * start和end的index同时返回0，代表List内只有一个子组件。
 *
 * > **说明：**
 * >
 * > 从API version 14开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
 *
 * @param {VisibleListContentInfo} start - 1. 通过该参数获取List显示区域第一个子组件在List中的索引值。<br/>2. 如果当前List显示区域第一个子组件是ListItemGroup，可
 *     以获取当前List显示区域第一个组件属于该ListItemGroup的哪一区域。<br/>3. 如果当前List显示区域第一个组件是ListItemGroup内的ListItem，可以获取该ListItem在
 *     ListItemGroup内的索引值。
 * @param {VisibleListContentInfo} end - 1. 通过该参数获取List显示区域最后一个子组件在List中的索引值。<br/>2. 如果当前List显示区域最后一个子组件是ListItemGroup，可
 *     以获取当前List显示区域最后一个组件属于该ListItemGroup的哪一区域。<br/>3. 如果当前List显示区域最后一个组件是ListItemGroup内的ListItem，可以获取该ListItem在
 *     ListItemGroup内的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnScrollVisibleContentChangeCallback = (start: VisibleListContentInfo, end: VisibleListContentInfo) => void;

/**
 * List组件可见区域item变化事件的回调类型。
 *
 * @param { int } start - List显示区域内第一个子组件的索引值。
 * @param { int } end - List显示区域内最后一个子组件的索引值。
 * @param { int } center - List显示区域内中间位置子组件的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnListScrollIndexCallback = (start: int, end: int, center: int) => void;

/**
 * List组件的滚动控制器，通过它控制List组件的滚动，仅支持一对一绑定到List组件。
 *
 * > **说明：**
 * >
 * > ListScroller继承自[Scroller]{@link Scroller}，具有[Scroller]{@link Scroller}的全部方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ListScroller extends Scroller {

  /**
   * 获取[ListItemGroup]{@link list_item_group}中的[ListItem]{@link list_item}的大小和相对于List的位置。
   *
   * <p><strong>注意</strong>：
   * <br>-<em>index</em>的值必须是显示区域中可见的子组件的索引。
   * 否则，该值将被视为无效值。
   * <br>-设置<em>index</em>的子组件必须是列表项组。否则，
   * <em>index </em>值被认为是无效的。
   * <br>-<em>indexInGroup</em>的值必须是列表项组中某个列表项的索引
   * 在显示区域中可见。否则，该值将被视为无效值。
   * <br>-当<em>index</em>或<em>indexInGroup</em>设置为无效值时，返回的大小和位置均为<em>0</em>。
   * </p>
   *
   * @param { int } index - ListItemGroup在List中的索引值。
   *     <br>取值限定为整数。
   * @param { int } indexInGroup - ListItemGroup在List中的索引值。
   *     <br>取值限定为整数。
   * @returns { RectResult } - ListItemGroup中的ListItem的大小和相对于List的位置。<br/>单位：vp。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getItemRectInGroup(index: int, indexInGroup: int): RectResult;

  /**
   * 滑动到指定的ListItemGroup中指定的ListItem。
   *
   * @param { int } index - 要滑动到的目标元素所在的ListItemGroup在当前容器中的索引值。      <br/>**说明：** <br/>index值设置成负值或者大于当前容器子组件的最大索引值，视
   *     为异常值，本次跳转不生效。
   *     <br>取值限定为整数。
   *     <br>
   *     <em>注意</em>
   *     <br>如果设置的值为负值或大于容器中项目的最大索引，则
   *     则认为值异常，不进行滚动。
   * @param { int } indexInGroup - 要滑动到的目标元素所在的ListItemGroup在当前容器中的索引值。      <br/>**说明：** <br/>index值设置成负值或者大于当前容器子组件的最大索引值，视
   *     为异常值，本次跳转不生效。
   *     <br>取值限定为整数。
   *     <br>
   *     <em>注意</em>
   *     <br>如果设置的值为负值或大于容器中项目的最大索引，则
   *     则认为值异常，不进行滚动。
   * @param { boolean } [smooth] - 设置该次滑动是否有动效，true表示有动效，false表示没有动效。<br/>。
   *     <br>默认值：false<br/>**说明：** <br/>开启动效时，会对经过的所有item
   *     进行加载和布局计算，当大量加载item时会导致性能问题。
   * @param { ScrollAlign } [align] - 指定滑动到的元素与当前容器的对齐方式。<br/>。
   *     <br>默认值：<em>ScrollAlign.START</em>。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scrollToItemInGroup(index: int, indexInGroup: int, smooth?: boolean, align?: ScrollAlign): void;

  /**
   * 将[EXPANDED]{@link SwipeActionState}状态的[ListItem]{@link list_item}收起，并设置回调事件。
   *
   * <p><strong>注意</strong>：
   * <br>-一个<em>ListScroller</em>必须绑定到<em>List</em>组件。
   * </p>
   *
   * @param { CloseSwipeActionOptions } [options] - 收起[EXPANDED]{@link SwipeActionState}状态的[ListItem]{@link list_item}
   *     的回调事件集合。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  closeAllSwipeActions(options?: CloseSwipeActionOptions): void;

  /**
   * 根据坐标获取子组件的索引信息。
   *
   * <p><strong>注意</strong>：
   * <br>-如果提供的<em>x</em>或<em>y</em>的值无效，
   * 返回的VisibleListContentInfo对象的<em>index</em>属性设置为<em>-1</em>。
   * 且<em>itemGroupArea</em>和<em>itemIndexInGroup</em>均为<em>未定义</em>。
   * </p>
   *
   * @param { double } x - x轴坐标，单位为vp。
   * @param { double } y - y轴坐标，单位为vp。
   * @returns { VisibleListContentInfo } 入参坐标处的子组件的索引信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getVisibleListContentInfo(x: double, y: double): VisibleListContentInfo;
}

/**
 * 定义List组件参数。
 *
 * <p><strong>说明</strong>:
 * <br>- List组件通用属性clip的默认值为true。
 * </p>
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ListOptions {

  /**
   * 设置当前List初次加载时显示区域起始位置的item索引值。
   * 匿名对象整改。
   * <p><strong>说明</strong>。
   * 取值限定为整数。
   * <br>设置为负数或超过了当前List最后一个item的索引值时视为无效取值，无效取值按默认值显示。
   * </p>
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  initialIndex?: int;

  /**
   * 子组件主轴方向的间隔。
   * 匿名对象整改。
   * <p><strong>说明</strong>。
   * <br>设置为负数或者大于等于List内容区长度时，按默认值显示。
   * <br>space参数值小于List分割线宽度时，子组件主轴方向的间隔取分割线宽度。
   * <br> List子组件的visibility属性设置为None时不显示，但该子组件上下的space还是会生效。
   * </p>
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  space?: double | string;

  /**
   * 子组件主轴方向的间隔。
   * <p><strong>说明</strong>。
   * <br>设置为负数或者大于等于List内容区长度时，按默认值显示。
   * <br>space参数值小于List分割线宽度时，子组件主轴方向的间隔取分割线宽度。
   * <br> List子组件的visibility属性设置为None时不显示，但该子组件上下的space还是会生效。
   * <br> 如果同时设置了spaceWidth和space，则spaceWidth优先生效。
   * </p>
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  spaceWidth?: Dimension;

  /**
   * 可滚动组件的控制器，与List绑定后，可以通过它控制List的滚动。
   * 匿名对象整改。
   * <p><strong>说明</strong>。
   * <br>不允许和其他滚动类组件绑定同一个滚动控制对象。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scroller?: Scroller;
}

/**
* 设置列表项滚动限位动画速度。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ScrollSnapAnimationSpeed {

  /**
   * 默认列表限位动画速度，通常用于列表项尺寸较大，划一下滚动一个列表项场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NORMAL = 0,

  /**
   * 列表限位动画速度较慢，通常用于列表项尺寸较小，划一下滚动多个列表项场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SLOW = 1
}

/**
* 定义List或ListItemGroup组件的分割线样式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ListDividerOptions {

  /**
   * 分割线的线宽。
   * 匿名对象整改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeWidth: Length;

  /**
   * 分割线颜色。
   * 匿名对象整改。
   *
   * @default 0x08000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;

  /**
   * 分割线与列表侧边起始端的距离。
   * 匿名对象整改。
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  startMargin?: Length;

  /**
   * 分割线与列表侧边结束端的距离。
   * 匿名对象整改。
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  endMargin?: Length;
}

/**
 * 除支持[通用属性]{@link common}和[滚动组件通用属性](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#属性)外，还支持
 * 以下属性：
 *
 * > **说明：**
 * >
 * > List组件通用属性[clip]{@link CommonMethod#clip(value: boolean)}的默认值为true。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ListAttribute extends ScrollableCommonMethod {

  /**
   * 设置List组件布局列的数量和列的间距，默认按固定一列显示。
   *
   * @param { int | LengthConstrain | ItemFillPolicy | undefined } value - 当前List组件布局列的数量。<br/> 设置为number类型时，根据number类
   *     型的数值确定列数，number类型取值范围：
   *     [1, +∞)。<br/>设置为LengthConstrain类型时，根据LengthConstrain中的最大最小值确定列数。<br/>设置为ItemFillPolicy类型时，根据List组件宽度对应[断点类型](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)确定列数，该类型只在List滚动方向为垂直方向时才生效。
   * @param { Dimension | undefined } [gutter] - 列间距。<br />默认值：0 <br/>取值为undefined时，列间距为0。<br/>取值范围：[0, +∞)
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lanes(value: int | LengthConstrain | ItemFillPolicy | undefined, gutter?: Dimension | undefined): this;

  /**
   * 设置List交叉轴方向宽度大于ListItem交叉轴宽度 * lanes + (lanes - 1) * gutter时，ListItem在List交叉轴方向的布局方式。
   *
   * @param { ListItemAlign | undefined } value - 交叉轴方向的布局方式。<br/>默认值：ListItemAlign.Start
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default alignListItem(value: ListItemAlign | undefined): this;

  /**
   * 设置List组件排列方向。
   *
   * @param { Axis | undefined } value - 组件的排列方向。<br/>默认值：Axis.Vertical
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default listDirection(value: Axis | undefined): this;

  /**
   * 设置内容区域起始偏移量。列表滚动到起始位置时，列表内容与列表显示区域边界保留指定距离。与
   * [contentStartOffset<sup>11+</sup>](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#contentstartoffset11)
   * 相比，参数名改为offset，并开始支持Resource类型。
   *
   * contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。
   *
   * @param { double | Resource | undefined } offset - 内容区域起始偏移量。<br/>默认值：0<br/>参数类型为number时单位为vp。 <br/>设置异常值如负数、非数字
   *     Resource与undefined时，按默认值处理。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default contentStartOffset(offset: double | Resource | undefined): this;

  /**
   * 设置内容区末尾偏移量。列表滚动到末尾位置时，列表内容与列表显示区域边界保留指定距离。与
   * [contentEndOffset<sup>11+</sup>](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#contentendoffset11)
   * 相比，参数名改为offset，并开始支持Resource类型。
   *
   * contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。
   *
   * @param { double | Resource | undefined } offset - 内容区末尾偏移量。<br/>默认值：0<br/>参数类型为number时单位为vp。 <br/>设置异常值如负数、非数字
   *     Resource与undefined时，按默认值处理。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default contentEndOffset(offset: double | Resource | undefined): this;

  /**
   * 设置ListItem分割线样式，默认无分割线。
   *
   * List的分割线画在主轴方向两个子组件之间，第一个子组件上方和最后一个子组件下方不会绘制分割线。
   *
   * 多列模式下，ListItem与ListItem之间的分割线起始边距从每一列的交叉轴方向起始边开始计算，单列模式从List交叉轴方向起始边开始计算。
   *
   * ListItem设置[多态样式]{@link common}时，被按压的子组件上下的分割线不绘制。
   *
   * @param { ListDividerOptions | null | undefined } value - ListItem分割线样式。<br/>默认值：null
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default divider(value: ListDividerOptions | null | undefined): this;

  /**
   * 设置是否开启鼠标框选。
   *
   * @param { boolean | undefined } value - 是否开启鼠标框选。false：关闭框选。true：开启框选。<br/>默认值：false
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default multiSelectable(value: boolean | undefined): this;

  /**
   * 设置列表中ListItem/ListItemGroup的预加载数量，懒加载场景只会预加载List显示区域外上下各cachedCount行的ListItem，非懒加载场景会全部加载。懒加载、非懒加载都只布局List显示区域+
   * List显示区域外cachedCount的内容。<!--Del-->具体使用可参考
   * [减少应用白块说明](docroot://performance/arkts-performance-improvement-recommendation.md#减少应用滑动白块)。<!--DelEnd-->
   *
   * List设置cachedCount后，显示区域外上下各会预加载并布局cachedCount行ListItem。计算ListItem行数时，会计算ListItemGroup内部的ListItem行数。如果
   * ListItemGroup内没有ListItem，则整个ListItemGroup算一行。
   *
   * List下嵌套使用LazyForEach，并且LazyForEach下嵌套使用ListItemGroup时，LazyForEach会在List显示区域外上下各会创建cachedCount个ListItemGroup。
   *
   * @param { int | undefined } value - ListItem/ListItemGroup的预加载数量。<br/>。
   *     <br>取值应≥0。默认值：根据屏幕内显示的节点个数设置，最大值为16。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedCount(value: int | undefined): this;

  /**
   * 设置列表中ListItem/ListItemGroup的预加载数量，并配置是否显示预加载节点。
   *
   * 若cachedCount属性的第一个参数为number类型，在帧间空闲时隙会在显示区域外上下各预加载并布局count行ListItem。
   *
   * 若cachedCount属性的第一个参数为CacheCountInfo类型，当已缓存行数小于CacheCountInfo.minCount时，会在帧间空闲时隙预加载和布局。当已缓存行数大于
   * CacheCountInfo.maxCount时，会将超出范围的节点销毁或回收复用。UI空闲时（无动画或用户操作），会在显示区域外上下各预加载CacheCountInfo.maxCount行ListItem。
   *
   * 在计算ListItem行数时，会计算ListItemGroup内部的ListItem行数。如果ListItemGroup内没有ListItem，则整个ListItemGroup算一行。配合
   * [clip]{@link CommonMethod#clip(value: boolean)}或
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14)属性可以显示出预加载节
   * 点。
   *
   * 默认行为：count参数默认为number类型，数值根据屏幕内显示的节点个数设置，最大值为16。预加载的ListItem默认不参与绘制。
   *
   * > **说明：**
   * >
   * > 通常建议设置cachedCount=n/2（n代表一屏显示的列表项数量），同时需考虑其他因素以实现体验和内存使用的平衡。从API version 22开始，支持设置最大最小缓存数，可以将最大缓存数设置稍大，如设置为最小缓存
   * > 数的两倍，利用UI线程空闲时间创建节点，减少滚动过程中预加载创建节点，提升滚动流畅性。最佳实践请参考
   * > [优化长列表加载慢丢帧问题-缓存列表项](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list#section11667144010222)。
   *
   * @param { int | CacheCountInfo | undefined } count - 当参数类型为number时，表示预加载的ListItem的数量。 <br/>取值范围：
   *     [0, +∞)，设置为小于0的值时，按1处理。 <br>当参数类型为CacheCountInfo时，表示预加载的最大最小范围。<br/>取值为undefined时，按默认行为处理。
   * @param { boolean | undefined } show - 被预加载的ListItem是否需要显示。<br/>true：显示预加载的ListItem。<br/>false：不显示预加载的ListItem。<br
   *     />取值为undefined时，不显示预加载的ListItem。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedCount(count: int | CacheCountInfo | undefined, show: boolean | undefined): this;

  /**
   * 设置当前List是否启用链式联动动效。
   *
   * > **说明：**
   * >
   * > - 链式联动效果是指在手指划动过程中，手指拖动的ListItem是主动对象，相邻的ListItem为从动对象，主动对象驱动从动对象联动，驱动效果遵循弹簧物理动效。
   * >
   * > - 链式动效的驱动效果体现在ListItem之间的间距上。静止状态下的间距可以通过List组件space参数设置，如果不设置space参数并且启用了链式动效，该间距默认为20vp。
   * >
   * > - 链式动效启用后，List的分割线不显示。
   * >
   * > - 链式动效生效的前提是List处于单列模式并且边缘效果为EdgeEffect.Spring类型。
   *
   * @param { boolean | undefined } value - 是否启用链式联动动效。false：不启用链式联动。true：启用链式联动。<br/>默认值：false
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default chainAnimation(value: boolean | undefined): this;

  /**
   * 设置链式联动动效选项。
   *
   * @param { ChainAnimationOptions | undefined } value - 链式联动动效选项。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default chainAnimationOptions(value: ChainAnimationOptions | undefined): this;

  /**
   * 配合[ListItemGroup]{@link list_item_group}组件使用，设置ListItemGroup中header是否要吸顶或footer是否要吸底。sticky属性可以设置为
   * StickyStyle.Header \| StickyStyle.Footer 以同时支持header吸顶和footer吸底。从API version 20开始，sticky属性也可以设置为StickyStyle.BOTH，
   * 以同时支持header吸顶和footer吸底。
   *
   * > **说明：**
   * >
   * > 由于浮点数计算精度，设置sticky后，在List滑动过程中小概率产生缝隙，可以通过[pixelRound]{@link CommonMethod#pixelRound}指定当前组件向下像素取整解决该问题。
   *
   * @param { StickyStyle | undefined } value - ListItemGroup吸顶或吸底效果。<br/>默认值：StickyStyle.None
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default sticky(value: StickyStyle | undefined): this;

  /**
   * 设置列表项滚动结束对齐效果。
   *
   * 只支持item等高场景限位，不等高场景可能存在不准确的情况。对齐动画期间
   * [onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12)事件上报的滚动操作
   * 来源类型为ScrollSource.FLING。
   *
   * @param { ScrollSnapAlign | undefined } value - 列表项滚动结束对齐效果。<br/>。
   *     <br>默认值：ScrollSnapAlign。
   * @returns { this } 列表的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollSnapAlign(value: ScrollSnapAlign | undefined): this;

  /**
   * 设置List组件的子组件在主轴方向的大小信息。
   *
   * > **说明：**
   * >
   * > - 该属性通过向List组件提供所有子组件在主轴方向的大小信息，确保在面对子组件主轴大小不一致、增删子组件、使用[scrollToIndex]{@link Scroller#scrollToIndex}等场景时，List组
   * > 件能够维护其滑动位置准确性。这样，[scrollTo]{@link Scroller#scrollTo}可以准确的跳转到指定位置，[currentOffset]{@link Scroller#currentOffset}可
   * > 以获取到当前准确的滑动位置，内置滚动条可以实现平滑移动无跳变。
   * >
   * > - 当子组件是ListItemGroup时，需要根据ListItemGroup的列数、ListItemGroup中ListItem在主轴方向的间距以及ListItemGroup中header、footer和ListItem
   * > 的大小，来准确计算出ListItemGroup在主轴方向的整体大小，并传递给List组件。
   * >
   * > - 如果子组件有ListItemGroup，必须为每一个ListItemGroup设置[childrenMainSize]{@link ListItemGroupAttribute#childrenMainSize}属性。
   * > List组件和每一个ListItemGroup组件都要通过childrenMainSize属性接口一对一绑定一个ChildrenMainSize对象。
   * >
   * > - 多列场景使用LazyForEach生成子组件时，需确保LazyForEach全部生成ListItemGroup组件或者全部生成ListItem组件。
   *
   * @param { ChildrenMainSize | undefined } value - 该对象用来维护子组件在主轴方向的大小信息。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default childrenMainSize(value: ChildrenMainSize | undefined): this;

  /**
   * 设置显示区域上方插入或删除数据时是否要保持可见内容位置不变。
   *
   * <p><strong>注意</strong>：
   * <br>-只有在使用<em>LazyForEach</em>插入或删除可见区域外的数据时，可见的内容位置才会保持不变。
   * 如果使用<em>ForEach</em>来插入或删除数据，或者使用<em>LazyForEach</em>来重新加载数据。
   * 即使<em>maintainVisibleContentPosition</em>设置为<em>true</em>，可见内容位置也会改变。
   * <br>-当<em>maintainVisibleContentPosition</em>设置为<em>true</em>时，
   * 在可见区域上方插入或删除数据将触发<em>onDidScroll</em>和<em>onScrollIndex</em>事件。
   * <br>-在多列场景中，将<em>maintainVisibleContentPosition</em>设置为<em>true</em>允许
   * 可以插入或删除整行数据，同时保持可见内容位置不变。
   * 但是，如果插入或删除不涉及整行，可见的内容位置仍然会改变。
   * </p>
   *
   * @param { boolean | undefined } enabled - 设置显示区域上方插入或删除数据时是否要保持可见内容位置不变。false：显示区域上方插入或删除数据时可见内容位置会跟随变化。 true：显示区域
   *     上方插入或删除数据时可见内容位置不变。<br/>。
   *     <br>默认值：false。
   * @returns { this } 列表的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maintainVisibleContentPosition(enabled: boolean | undefined): this;

  /**
   * 设置当前List组件是否支持在LazyForEach或Repeat中使用if/else渲染控制语法生成不包含任何子组件的空分支节点。未设置时不支持空分支节点。此属性初次赋值后不支持更新，所以赋值后无法在支持空分支、不支持空分支
   * 行为之间切换。
   *
   * @param { boolean | undefined } supported - 当前List组件是否支持在
   *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)或
   *     [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中使用
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)渲染控制语法生成一个不含任何子节点的空分支节点。</br>true表
   *     示支持空分支节点；false表示不支持空分支节点。</br>值为undefined时，按false处理。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default supportEmptyBranchInLazyLoading(supported: boolean | undefined): this;

  /**
   * 设置List组件是否从末尾开始布局。
   *
   * <p><strong>注意</strong>：
   * <br>-当<em>stackFromEnd</em>设置为<em>true</em>时，以下规则适用：
   * <br>如果<em>List</em>组件的内容小于组件高度，则
   * 内容将对齐到组件的底部。
   * <br>-如果可见区域中列表项的高度发生变化，或者插入了新的列表项。
   * 更改或插入的项上方的列表项将向上移动以适应新的布局。
   * <br>-<em>initialIndex</em>的默认值变为列表项的总数减一。
   * </p>
   *
   * @param { boolean | undefined } enabled - 设置List组件是否从末尾开始布局。false：List从顶部开始布局。 true：List组件从末尾开始布局。<br/>。
   *     <br>默认值：false。
   * @returns { this } 列表的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default stackFromEnd(enabled: boolean | undefined): this;

  /**
   * 配置编辑模式选项参数。
   *
   * @param { EditModeOptions } [options] - 编辑模式选项。
   * @returns { this } - 列表的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default editModeOptions(options?: EditModeOptions): this;

  /**
   * 设置List是否启用编辑模式，启用编辑模式后可以在List组件内滑动多选[ListItem]{@link list_item}。未通过该接口设置时，不启用编辑模式。
   *
   * @param { boolean | Bindable<boolean> | undefined } enabled - 是否启用编辑模式。<br/>设置为true时启用编辑模式，可以滑动多选；设置为false或
   *     undefined时关闭编辑模式，不可滑动多选。<br/>Bindable<boolean>时，支持双向绑定。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default enableEditMode(enabled: boolean | Bindable<boolean> | undefined): this;

  /**
   * 编辑模式状态变化时触发该回调。
   *
   * @param { Callback<boolean> | undefined } callback - 编辑模式状态变化时触发的回调。<br>true表示进入编辑模式，false表示退出编辑模式。<br>传入undefined时取消回调。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onEditModeChange(callback: Callback<boolean> | undefined): this;

  /**
   * 设置方向键走焦模式。
   *
   * @param { FocusWrapMode | undefined } mode - 交叉轴方向键走焦模式。<br/>默认值：FocusWrapMode.DEFAULT<br/>**说明：** <br/>异常值按默认值处理，
   *     即交叉轴方向键不能换行。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default focusWrapMode(mode: FocusWrapMode | undefined): this;

  /**
   * 设置是否同步加载List区域内所有子组件。
   *
   * @param { boolean | undefined } enable - 是否同步加载List区域内所有子组件。<br/>true表示同步加载，false表示异步加载。默认值：true。<br/>**说明：** <br/
   *     >设置为false时，在首次显示、不带动画scrollToIndex跳转场景，若当帧布局耗时超过50ms，会将List区域内尚未布局的子组件延后到下一帧进行布局。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default syncLoad(enable: boolean | undefined): this;

  /**
   * 设置列表项滚动限位动画速度。只在列表设置了滚动结束对齐效果后才生效。
   *
   * @param { ScrollSnapAnimationSpeed | undefined } speed - 列表滚动限位动画速度。<br/>默认值：ScrollSnapAnimationSpeed.NORMAL
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default scrollSnapAnimationSpeed(speed: ScrollSnapAnimationSpeed | undefined): this;

  /**
   * 设置List组件的系统返回键行为。
   *
   * @param { ListBackPressBehavior | undefined } behavior - List组件的系统返回键行为选项。当前支持通过
   *     [ListBackPressBehavior]{@link ListBackPressBehavior}参数，配置系统返回键生效时，是否收起已展开的ListItem的划出组件。<br/>设置为undefined时，恢复
   *     默认行为，即系统返回键生效时，收起已展开的ListItem的划出组件。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default backPressBehavior(behavior: ListBackPressBehavior | undefined): this;

  /**
   * 有子组件划入或划出List显示区域时触发。计算索引值时，ListItemGroup作为一个整体占一个索引值，不计算ListItemGroup内部ListItem的索引值。
   *
   * List的边缘效果为弹簧效果时，在List划动到边缘继续划动和松手回弹过程不会触发onScrollIndex事件。
   *
   * 触发该事件的条件：列表初始化时会触发一次，List显示区域内第一个子组件的索引值或最后一个子组件的索引值有变化时会触发。
   *
   * 从API version 10开始，List显示区域中间位置子组件变化时也会触发该事件。
   *
   * @param { function | undefined } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollIndex(event: ((start: int, end: int, center: int) => void) | undefined): this;

  /**
   * 有子组件划入或划出List显示区域时触发。计算触发条件时，每一个ListItem、ListItemGroup中的header或footer都算一个子组件。
   *
   * List的边缘效果为弹簧效果时，在List划动到边缘继续划动和松手回弹过程不会触发onScrollVisibleContentChange事件。
   *
   * 触发该事件的条件：列表初始化时会触发一次，List显示区域内第一个子组件的索引值或最后一个子组件的索引值有变化时会触发。
   *
   * @param { OnScrollVisibleContentChangeCallback | undefined } handler - 当前显示内容发生改变的时候触发回调。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollVisibleContentChange(handler: OnScrollVisibleContentChangeCallback | undefined): this;

  /**
   * 列表元素发生移动时触发。
   *
   * @param { function } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemMove(event: ((from: int, to: int) => boolean) | undefined): this;

  /**
   * 开始拖拽列表元素时触发。
   *
   * 不支持拖动到List边缘时触发List的自动滚动，可以使用ForEach、LazyForEach、Repeat的
   * [onMove](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-drag-sorting.md#onmove)接口实现该效果，参考
   * [示例12（使用OnMove进行拖拽）](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#示例12使用onmove进行拖拽)。但需注意
   * [onMove](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-drag-sorting.md#onmove)接口不支持跨
   * ListItemGroup拖拽。
   *
   * > **说明：**
   * >
   * > 从API version 14开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { OnItemDragStartCallback | undefined } event - 列表元素拖拽开始时触发的回调。<br> API version 22及之前版本，该参数类型为(event:
   *     ItemDragInfo, itemIndex: number) => (() => any) | void，其中event和itemIndex参数含义参考
   *     [OnItemDragStartCallback](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onitemdragstartcallback23)。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDragStart(event: OnItemDragStartCallback | undefined): this;

  /**
   * 拖拽列表元素进入列表范围内时触发。
   *
   * @param { function | undefined } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDragEnter(event: ((event: ItemDragInfo) => void) | undefined): this;

  /**
   * 拖拽列表元素在列表范围内移动时触发。
   *
   * @param { function } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDragMove(event: ((event: ItemDragInfo, itemIndex: int, insertIndex: int) => void) | undefined): this;

  /**
   * 拖拽列表元素离开列表范围时触发。
   *
   * @param { function | undefined } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDragLeave(event: ((event: ItemDragInfo, itemIndex: int) => void) | undefined): this;

  /**
   * 绑定该事件的列表可作为拖拽释放目标，当在列表范围内停止拖拽时触发。
   *
   * 跨List拖拽时，当拖拽释放的位置绑定了onItemDrop时isSuccess为true，否则为false。List内部拖拽时，isSuccess为onItemMove事件的返回值。
   *
   * @param { function | undefined } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDrop(event: ((event: ItemDragInfo, itemIndex: int, insertIndex: int, isSuccess: boolean) => void) | undefined): this;

  /**
   * 该接口回调时，事件参数传入即将发生的滑动量，事件处理函数中可根据应用场景计算实际需要的滑动量并作为事件处理函数的返回值返回，列表将按照返回值的实际滑动量进行滑动。
   *
   * 当listDirection的值为Axis.Vertical时，返回垂直方向滑动量，当listDirection的值为Axis.Horizontal时，返回水平方向滑动量。
   *
   * 满足以下任一条件时触发该事件：
   *
   * 1. 用户交互（如手指滑动、键鼠操作等）触发滚动。
   * 2. List惯性滚动。
   * 3. 调用[fling]{@link Scroller#fling}接口触发滚动。
   *
   * 不触发该事件的条件：
   *
   * 1. 调用除[fling]{@link Scroller#fling}接口外的其他滚动控制接口。
   * 2. 越界回弹。
   * 3. 拖动滚动条。
   *
   * @param { OnScrollFrameBeginCallback | undefined } event - 每帧滚动开始回调函数。
   * @returns { this } 返回ListAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;

  /**
   * 滚动事件回调，List滚动前触发。
   *
   * 回调当前帧将要滚动的偏移量和当前滚动状态和滚动操作来源，其中回调的偏移量为计算得到的将要滚动的偏移量值，并非最终实际滚动偏移。可以通过该回调返回值指定滚动组件将要滚动的偏移。
   *
   * @param { OnWillScrollCallback | undefined } handler - List滑动前触发的回调。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillScroll(handler: OnWillScrollCallback | undefined): this;

  /**
   * List滑动时触发，返回当前帧滑动的偏移量和当前滑动状态。
   *
   * @param { OnScrollCallback | undefined } handler - List滑动时触发的回调。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidScroll(handler: OnScrollCallback | undefined): this;

  /**
   * 设置列表选项。
   *
   * @param { ListOptions } [options] - 列表构造函数选项
   * @returns { ListAttribute } 返回ListAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setListOptions(options?: ListOptions): this;

  /**
   * 动态设置List组件的属性方法。
   *
   * @param { AttributeModifier<ListAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<ListAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义List组件。
 *
 * @param { ListOptions } [options]
 * @param { CustomBuilder } [content_]
 * @returns { ListAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function List(
    options?: ListOptions, 
    content_?: CustomBuilder,
): ListAttribute;

/**
 * 定义可扩展List组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableList implements ListAttribute {

  /**
   * 可扩展List组件的构造函数。
   *
   * @param { ConstructorT<T> } factory
   * @param { ListOptions } [options]
   * @param { CustomBuilder } [content_]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @ComponentBuilder
  static $_instantiate<T extends ExtendableList>(
    factory: ConstructorT<T>, 
    options?: ListOptions, 
    content_?: CustomBuilder
  ): T;

  /**
   * 扩展列表组件入口
   *
   * @param { CustomBuilderT<T> } styles
   * @param { ConstructorT<T> } factory
   * @param { CustomBuilder } [content_]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  static _instantiateImpl<T extends ExtendableList>(
    styles: CustomBuilderT<T>, 
    factory: ConstructorT<T>,
    content_?: CustomBuilder
  ): void;

  /**
   * 设置List组件参数。
   *
   * @param { ListOptions } [options]
   * @returns { ExtendableList }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public setListOptions(options?: ListOptions): this;
}

/**
* 可扩展List组件的入口。
*
 * @param { CustomBuilderT<ListAttribute> } style_ - The style to create a List.
 * @param { CustomBuilder } [content_]
 * @returns { ListAttribute } The attribute of the List.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function List(
    style_: CustomBuilderT<ListAttribute>,
    content_?: CustomBuilder
): ListAttribute;