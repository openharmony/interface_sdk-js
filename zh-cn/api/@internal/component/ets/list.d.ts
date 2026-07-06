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
 * 滑动状态枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ScrollState {

  /**
   * 空闲状态。滚动状态回归空闲时触发，控制器提供的无动画方法控制滚动时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Idle,

  /**
   * 滚动状态。手指拖动List，拖动滚动条和滚动鼠标滚轮时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Scroll,

  /**
   * 惯性滚动状态。动画控制的滚动都会触发。包括快速划动松手后的惯性滚动，
   *
   * 划动到边缘回弹的滚动，快速拖动内置滚动条松手后的惯性滚动，
   *
   * 使用滚动控制器提供的带动画的方法控制的滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fling,
}

/**
 * 设置子组件在List交叉轴方向的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ListItemAlign {

  /**
   * ListItem在List中，交叉轴方向首部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Start,

  /**
   * ListItem在List中，交叉轴方向居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Center,

  /**
   * ListItem在List中，交叉轴方向尾部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  End,
}

/**
 * 枚举了ListItemGroup各个区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ListItemGroupArea {

  /**
   * ListItemGroup内部ListItem区域、header区域以及footer区域以外的区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 0,

  /**
   * ListItemGroup内部ListItem区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IN_LIST_ITEM_AREA = 1,

  /**
   * ListItemGroup内部header区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IN_HEADER_AREA = 2,

  /**
   * ListItemGroup内部footer区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  IN_FOOTER_AREA = 3,
}

/**
 * ListItemGroup吸顶或吸底效果枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum StickyStyle {

  /**
   * ListItemGroup的header不吸顶，footer不吸底。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * ListItemGroup的header吸顶，footer不吸底。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Header = 1,

  /**
   * ListItemGroup的footer吸底，header不吸顶。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Footer = 2,

  /**
   * ListItemGroup的header吸顶，footer吸底。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  BOTH = 3,
}

/**
 * 设置链式动效边缘效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare enum ChainEdgeEffect {

  /**
   * Default edge effect. Compress the space in the drag direction
   * and stretch the space in the opposite drag direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  DEFAULT,

  /**
   * Stretch all space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  STRETCH,
}

/**
 * 设置列表项滚动结束对齐效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ScrollSnapAlign {

  /**
   * 默认无项目滚动对齐效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE = 0,

  /**
   * 视图中的第一项将在列表的开头对齐。
   *
   * **说明：**
   *
   * 当列表位移至末端，需要将末端的item完整显示，可能出现开头不对齐的情况。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START = 1,

  /**
   * 视图中的中间项将在列表中心对齐。
   *
   * **说明：**
   *
   * 顶端和末尾的item都可以在列表中心对齐，列表显示可能露出空白。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER = 2,

  /**
   * 视图中的最后一项将在列表末尾对齐。
   *
   * **说明：**
   *
   * 当列表位移至顶端，需要将顶端的item完整显示，可能出现末尾不对齐的情况。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END = 3,
}

/**
 * 链式联动动效属性集合，用于设置List最大间距、最小间距、动效强度、传导系数和边缘效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 10 dynamic
 */
declare interface ChainAnimationOptions {

  /**
   * 设置链式联动动效最小间距。<br/>单位：与Length一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  minSpace: Length;

  /**
   * 设置链式联动动效最大间距。<br/>单位：与Length一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  maxSpace: Length;

  /**
   * 设置链式联动动效传导系数。取值范围[0,1]，数值越大，动效传导范围越远。
   *
   * @default 0.7
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  conductivity?: number;

  /**
   * 设置链式联动动效效果强度。取值范围[0,1]，数值越大，动效效果越明显。
   *
   * @default 0.3
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  intensity?: number;

  /**
   * 设置链式联动动效边缘效果。
   *
   * @default ChainEdgeEffect.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  edgeEffect?: ChainEdgeEffect;

  /**
   * 设置链式联动动效效果刚度。<br/>取值范围[0, +∞)
   *
   * @default 228
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  stiffness?: number;

  /**
   * 设置链式联动动效效果阻尼。<br/>取值范围[0, +∞)
   *
   * @default 30
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  damping?: number;
}

/**
 * frameNode中[getEvent('List')]{@link FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'List')}方法的返回值，可用于给List节点设置
 * 滚动事件。
 *
 * UIListEvent继承于[UIScrollableCommonEvent]{@link UIScrollableCommonEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIListEvent extends UIScrollableCommonEvent {

  /**
   * 设置[onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12)事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnWillScrollCallback | undefined } callback - onWillScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;

  /**
   * 设置[onScrollIndex](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#onscrollindex)事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnListScrollIndexCallback | undefined } callback - onScrollIndex事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollIndex(callback: OnListScrollIndexCallback | undefined): void;

  /**
   * 设置[onScrollVisibleContentChange]{@link ListAttribute#onScrollVisibleContentChange}事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnScrollVisibleContentChangeCallback | undefined } callback - onScrollVisibleContentChange事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollVisibleContentChange(callback: OnScrollVisibleContentChangeCallback | undefined): void;
}

/**
 * 收起EXPANDED状态ListItem回调事件集合，用于设置收起动画完成后回调事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface CloseSwipeActionOptions {

  /**
   * Called after collapse animation completed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFinish?: ()=>void;
}

/**
 * 用于表示List可见内容区子组件的详细信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface VisibleListContentInfo {

  /**
   * Index of the list item or list item group in the list display area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number

  /**
   * Position of the top or bottom edge of the viewport in the
   * list item group to which the edge is located, if applicable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemGroupArea?: ListItemGroupArea

  /**
   * Index of the starting or ending list item in the list
   * item group to which the top or bottom edge of the viewport is located.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemIndexInGroup?: number
}

/**
 * 定义List组件的系统返回键行为。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface ListBackPressBehavior {

  /**
   * 系统返回键生效时是否收起ListItem的划出组件。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
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
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type OnScrollVisibleContentChangeCallback = (start: VisibleListContentInfo, end: VisibleListContentInfo) => void;

/**
 * List组件可见区域item变化事件的回调类型。
 *
 * @param {number} start - List显示区域内第一个子组件的索引值。
 * @param {number} end - List显示区域内最后一个子组件的索引值。
 * @param {number} center - List显示区域内中间位置子组件的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 19 dynamic
 */
declare type OnListScrollIndexCallback = (start: number, end: number, center: number) => void;

/**
 * List组件的滚动控制器，通过它控制List组件的滚动，仅支持一对一绑定到List组件。
 *
 * > **说明：**
 * >
 * > ListScroller继承自[Scroller]{@link Scroller}，具有[Scroller]{@link Scroller}的全部方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare class ListScroller extends Scroller {

  /**
   * 获取[ListItemGroup]{@link list_item_group}中的[ListItem]{@link list_item}的大小和相对于List的位置。
   *
   * @param { number } index - ListItemGroup在List中的索引值。
   * @param { number } indexInGroup - ListItemGroup在List中的索引值。
   * @returns { RectResult } ListItemGroup中的ListItem的大小和相对于List的位置。<br/>单位：vp。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getItemRectInGroup(index: number, indexInGroup: number): RectResult;

  /**
   * 滑动到指定的ListItemGroup中指定的ListItem。
   *
   * @param { number } index - 要滑动到的目标元素所在的ListItemGroup在当前容器中的索引值。      <br/>**说明：** <br/>index值设置成负值或者大于当前容器子组件的最大索引值，
   *     视为异常值，本次跳转不生效。
   * @param { number } indexInGroup - 要滑动到的目标元素所在的ListItemGroup在当前容器中的索引值。      <br/>**说明：** <br/>index值设置成负值或者大于当前容器子组件的最大索引值，
   *     视为异常值，本次跳转不生效。
   * @param { boolean } smooth - 设置该次滑动是否有动效，true表示有动效，false表示没有动效。<br/>默认值：false<br/>**说明：** <br/>开启动效时，会对经过的所有item进行加载
   *     和布局计算，当大量加载item时会导致性能问题。
   * @param { ScrollAlign } align - 指定滑动到的元素与当前容器的对齐方式。<br/>默认值：ScrollAlign.START。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  scrollToItemInGroup(index: number, indexInGroup:number, smooth?: boolean, align?: ScrollAlign): void;

  /**
   * 将[EXPANDED]{@link SwipeActionState}状态的[ListItem]{@link list_item}收起，并设置回调事件。
   *
   * @param { CloseSwipeActionOptions } options - 收起[EXPANDED]{@link SwipeActionState}状态的[ListItem]{@link list_item}的回调事
   *     件集合。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  closeAllSwipeActions(options?: CloseSwipeActionOptions): void;

  /**
   * 根据坐标获取子组件的索引信息。
   *
   * @param { number } x - x轴坐标，单位为vp。
   * @param { number } y - y轴坐标，单位为vp。
   * @returns { VisibleListContentInfo } 入参坐标处的子组件的索引信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getVisibleListContentInfo(x: number, y: number): VisibleListContentInfo;
}

/**
 * 用于设置List组件参数。
 *
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface ListOptions {

  /**
   * Set initialIndex.
   *
   * @default 0 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  initialIndex?: number;

  /**
   * 子组件主轴方向的间隔。
   *
   * <br/>默认值：0
   * <br/>参数类型为number时单位为vp。
   * <br/>**说明：**
   * <br/>设置为负数或者大于等于List内容区长度时，按默认值显示。
   * <br/>space参数值小于List分割线宽度时，子组件主轴方向的间隔取分割线宽度。
   * <br/>List子组件的visibility属性设置为None时不显示，但该子组件上下的space还是会生效。<br/>
   *
   * @default 0 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  space?: number | string;

  /**
   * 沿着主轴的列表项之间的间距。
   *
   * <p><strong>注意</strong>
   * <br>如果设置为负数或大于或等于列表长度的值
   * 内容区域，使用默认值。
   * <br>如果设置的值小于列表分割线的宽度，则列表分割线的宽度
   * 作为间距。
   * <br><em>ListItemGroup</em>的子组件，其<em>可见性</em>属性设置为<em>无</em>
   * 不显示，但它们上下的间距仍然有效。
   * <br>如果同时设置了spaceWidth和space，则spaceWidth优先。
   * </p>
   *
   * @type { ?Dimension }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  spaceWidth?: Dimension;

  /**
   * Set scroller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scroller?: Scroller;
}

/**
 * 设置列表项滚动限位动画速度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum ScrollSnapAnimationSpeed {

  /**
   * 默认列表限位动画速度，通常用于列表项尺寸较大，划一下滚动一个列表项场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  NORMAL = 0,

  /**
   * 列表限位动画速度较慢，通常用于列表项尺寸较小，划一下滚动多个列表项场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  SLOW = 1,
}

/**
 * 列表包含一系列相同宽度的列表项。适合连续、多行呈现同类数据，例如图片和文本。
 *
 * List的懒加载是指组件按需加载可见区域可见的子组件。相比全量加载，使用懒加载可以提升应用启动速度，减少内存消耗。List和
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，懒加载能力存在差异：
 *
 * - 当List和ForEach结合，会一次性创建所有的子节点，在需要的时候布局和渲染屏幕范围内的节点。当用户滑动时，划出屏幕范围的节点不会下树销毁，划入屏幕范围的节点会布局和渲染。
 * - 当List和LazyForEach结合，会一次性创建、布局、渲染屏幕范围的节点。当用户滑动时，划出屏幕范围的节点会下树销毁，划入屏幕范围的节点会创建、布局、渲染。
 * - 当List和带[virtualScroll]{@link RepeatAttribute#virtualScroll}的Repeat结合，它的懒加载行为和LazyForEach一致。当List和不带virtualScroll的
 * Repeat结合，它的懒加载行为和ForEach一致。
 *
 * 如果可滚动组件嵌套List组件，并且滚动方向相同，List组件又没有设置主轴尺寸时，List组件会全量加载子组件，导致懒加载失效。该场景推荐使用List嵌套[ListItemGroup]{@link list_item_group}组
 * 件以实现优化性能。
 *
 * List的预加载是指除了加载显示区域内可见的子组件外，还支持空闲时隙提前加载部分显示区域外不可见的子组件。使用预加载可以减少滚动丢帧，提升流畅性。预加载需要结合懒加载才会生效。List支持通过
 * [cachedCount]{@link ListAttribute#cachedCount(value: number)}设置预加载的数量。默认会预加载显示区域上下各一屏子节点（最大预加载16行子节点）。List和
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，预加载能力存在差异：
 *
 * - 当List和ForEach结合，如果设置了cachedCount，除了会布局显示区域内子组件外，还会在空闲时隙预布局显示区域外cachedCount范围内的子节点。
 * - 当List和LazyForEach结合，如果设置了cachedCount，除了会创建和布局显示区域内子组件外，还会在空闲时隙预创建和预布局显示区域外cachedCount范围内的子节点。
 * - 当List和带[virtualScroll]{@link RepeatAttribute#virtualScroll}的Repeat结合，它的预加载行为和LazyForEach一致。当List和不带virtualScroll的
 * Repeat结合，它的预加载行为和ForEach一致。
 *
 * > **说明：**
 * >
 * > 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link common}进行处理。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ListInterface {

  /**
   * 创建List列表容器。
   *
   * @param { object } value [since 7 - 17]
   * @param { ListOptions } [options] - 设置List组件参数。 [since 18]
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: ListOptions): ListAttribute;
}

/**
 * 用于设置List或ListItemGroup组件的分割线样式。
 *
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ListDividerOptions {

  /**
   * Set strokeWidth.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeWidth: Length;

  /**
   * Set color.
   *
   * @default 0x08000000 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color?: ResourceColor;

  /**
   * Set startMargin.
   *
   * @default 0vp [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  startMargin?: Length;

  /**
   * Set endMargin.
   *
   * @default 0vp [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  endMargin?: Length;
}

/**
* 除支持[通用属性]{@link common}和[滚动组件通用属性](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#属性)外，还支持
* 以下属性：
*
* 除支持[通用事件]{@link common}和[滚动组件通用事件](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#事件)外，还支持
* 以下事件：
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ListAttribute extends ScrollableCommonMethod<ListAttribute> {

  /**
   * 设置List组件的布局列数或行数（List垂直滚动时表示列数，水平滚动时表示行数）。
   *
   * 以列数作为示例，介绍设置规则如下：
   *
   * - value为number类型时，根据number类型数值指定列数。
   * - value为LengthConstrain类型时，LengthConstrain中的minLength表示最小列宽，List组件会根据自身宽度在满足最小列宽情况下计算最大列数。同时，LengthConstrain会作为最大最小
   * 布局宽度约束传递给List的子组件，子组件没有设置宽度时会生效该最大最小布局约束。
   * - &nbsp;ListItemGroup在多列模式下也是独占一行，ListItemGroup中的ListItem按照List组件的lanes属性设置值来布局。
   * - value为LengthConstrain类型时，计算ListItemGroup中的列数时会按照ListItemGroup的自身宽度计算。因此ListItemGroup宽度与List宽度不一致时，ListItemGroup中的
   * 列数与List中的列数可能不一样。
   *
   * @param { number | LengthConstrain } value - List组件的布局列数或行数。<br/>默认值：1 <br/>取值范围：[1, +∞)
   * @param { Dimension } gutter - 列间距或行间距。<br />默认值：0 <br/>取值范围：
   *     [0, +∞)<br/>**说明：**<br/>gutter为列间距或行间距，当列数或行数大于1时生效。 [since 10]
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  lanes(value: number | LengthConstrain, gutter?: Dimension): ListAttribute;

  /**
   * 设置List组件布局列的数量和列的间距，默认按固定一列显示。
   *
   * @param { number | LengthConstrain | ItemFillPolicy } value - 当前List组件布局列的数量。<br/> 设置为number类型时，根据number类型的数值确定列数，
   *     number类型取值范围：
   *     [1, +∞)。<br/>设置为LengthConstrain类型时，根据LengthConstrain中的最大最小值确定列数。<br/>设置为ItemFillPolicy类型时，根据List组件宽度对应[断点类型](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)确定列数，该类型只在List滚动方向为垂直方向时才生效。
   * @param { Dimension } [gutter] - 列间距。<br />默认值：0 <br/>取值范围：[0, +∞)
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  lanes(value: number | LengthConstrain | ItemFillPolicy, gutter?: Dimension): ListAttribute;

  /**
   * 设置List交叉轴方向宽度大于ListItem交叉轴宽度 * lanes + (lanes - 1) * gutter时，ListItem在List交叉轴方向的布局方式。
   *
   * @param { ListItemAlign } value - 交叉轴方向的布局方式。<br/>默认值：ListItemAlign.Start
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  alignListItem(value: ListItemAlign): ListAttribute;

  /**
   * 设置List组件排列方向。
   *
   * @param { Axis } value - 组件的排列方向。<br/>默认值：Axis.Vertical
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  listDirection(value: Axis): ListAttribute;

  /**
   * 设置滚动条状态。
   *
   * @param { BarState } value - 滚动条状态。<br/>默认值：API version 9及以下版本默认值为BarState.Off，API version 10及以上版本的默认值为BarState.Auto。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBar(value: BarState): ListAttribute;

  /**
   * 设置边缘滑动效果。
   *
   * > **说明：**
   * >
   * > 当List组件的内容区小于一屏时，默认没有回弹效果。若要启用回弹效果，可以通过设置edgeEffect属性的options参数为{ alwaysEnabled: true }来实现。
   *
   * @param { EdgeEffect } value - List组件的边缘滑动效果，支持弹簧效果和阴影效果。<br/>默认值：EdgeEffect.Spring
   * @param { EdgeEffectOptions } options - 组件内容大小小于组件自身时，是否开启滑动效果。设置为{ alwaysEnabled: true }会开启滑动效果，{ alwaysEnabled:
   *     false }不开启。<br/>默认值：{ alwaysEnabled: false } [since 11]
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions): ListAttribute;

  /**
   * 设置内容区域起始偏移量。列表滚动到起始位置时，列表内容与列表显示区域边界保留指定距离。
   *
   * contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。
   *
   * @param { number } value - 内容区域起始偏移量。<br/>默认值：0<br/>单位：vp <br/>**说明：**<br/>设置为负数时，按默认值处理。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  contentStartOffset(value: number): ListAttribute;

  /**
   * 设置内容区域起始偏移量。列表滚动到起始位置时，列表内容与列表显示区域边界保留指定距离。与
   * [contentStartOffset<sup>11+</sup>]{@link ListAttribute#contentStartOffset(value: number)}相比，参数名改为offset，并开始支持
   * Resource类型。
   *
   * contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。
   *
   * @param { number | Resource } offset - 内容区域起始偏移量。<br/>默认值：0<br/>参数类型为number时单位为vp。 <br/>设置异常值如负数、非数字Resource时，按默认值处理
   *     。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentStartOffset(offset: number | Resource): ListAttribute;

  /**
   * 设置内容区末尾偏移量。列表滚动到末尾位置时，列表内容与列表显示区域边界保留指定距离。
   *
   * contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。
   *
   * @param { number } value - 内容区末尾偏移量。<br/>默认值：0<br/>单位：vp <br/>**说明：**<br/>设置为负数时，按默认值处理。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  contentEndOffset(value: number): ListAttribute;

  /**
   * 设置内容区末尾偏移量。列表滚动到末尾位置时，列表内容与列表显示区域边界保留指定距离。与
   * [contentEndOffset<sup>11+</sup>]{@link ListAttribute#contentEndOffset(value: number)}相比，参数名改为offset，并开始支持Resource类
   * 型。
   *
   * contentStartOffset + contentEndOffset超过List内容区长度后contentStartOffset和contentEndOffset会置0。
   *
   * @param { number | Resource } offset - 内容区末尾偏移量。<br/>默认值：0<br/>参数类型为number时单位为vp。 <br/>设置异常值如负数、非数字Resource时，按默认值处理。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentEndOffset(offset: number | Resource): ListAttribute;

  /**
   * 设置ListItem分割线样式，默认无分割线。
   *
   * List的分割线画在主轴方向两个子组件之间，第一个子组件上方和最后一个子组件下方不会绘制分割线。
   *
   * 多列模式下，ListItem与ListItem之间的分割线起始边距从每一列的交叉轴方向起始边开始计算，单列模式从List交叉轴方向起始边开始计算。
   *
   * ListItem设置[多态样式]{@link common}时，被按压的子组件上下的分割线不绘制。
   *
   * @param { object | null } value - Style of the divider for the list items.<br>Default value: **null** [since 7 - 8]
   * @param { {strokeWidth: Length;color?: ResourceColor;startMargin?: Length;endMargin?: Length;} | null }
   *     value - Style of the divider for the list items.<br>Default value: **null** [since 9 - 17]
   * @param { ListDividerOptions | null } value - ListItem分割线样式。<br/>默认值：null [since 18]
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  divider(
    value: ListDividerOptions | null,
  ): ListAttribute;

  /**
   * 设置当前List组件是否处于可编辑模式。可参考[示例3](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#示例3设置编辑模式)实现删除选中的list项。
   *
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，无替代接口。
   *
   * @param { boolean } value - 当前List组件是否处于可编辑模式。<br/>默认值：false，当前List组件不处于可编辑模式。
   * @returns { ListAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  editMode(value: boolean): ListAttribute;

  /**
   * 设置是否开启鼠标框选。
   *
   * @param { boolean } value - 是否开启鼠标框选。<br/>默认值：false，关闭框选。true，开启框选。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  multiSelectable(value: boolean): ListAttribute;

  /**
   * 设置列表中ListItem/ListItemGroup的预加载数量，懒加载场景只会预加载List显示区域外上下各cachedCount行的ListItem，非懒加载场景会全部加载。懒加载、非懒加载都只布局List显示区域+List
   * 显示区域外cachedCount的内容。<!--Del-->具体使用可参考
   * [减少应用白块说明](docroot://performance/arkts-performance-improvement-recommendation.md#减少应用滑动白块)。<!--DelEnd-->
   *
   * List设置cachedCount后，显示区域外上下各会预加载并布局cachedCount行ListItem。计算ListItem行数时，会计算ListItemGroup内部的ListItem行数。如果ListItemGroup内
   * 没有ListItem，则整个ListItemGroup算一行。
   *
   * List下嵌套使用LazyForEach，并且LazyForEach下嵌套使用ListItemGroup时，LazyForEach会在List显示区域外上下各会创建cachedCount个ListItemGroup。
   *
   * @param { number } value - ListItem/ListItemGroup的预加载数量。<br/>默认值：根据屏幕内显示的节点个数设置，最大值为16。<br/>取值范围：
   *     [0, +∞)，设置为小于0的值时，按1处理。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  cachedCount(value: number): ListAttribute;

  /**
   * 设置列表中ListItem/ListItemGroup的预加载数量，并配置是否显示预加载节点。
   *
   * List设置cachedCount后，显示区域外上下各会预加载并布局cachedCount行ListItem。计算ListItem行数时，会计算ListItemGroup内部的ListItem行数。如果ListItemGroup内
   * 没有ListItem，则整个ListItemGroup算一行。配合裁剪[clip]{@link CommonMethod#clip(value: boolean)}或内容裁剪
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14)属性可以显示出预加载节点。
   *
   * > **说明：**
   * >
   * > 通常建议设置cachedCount=n/2（n代表一屏显示的列表项数量），同时需考虑其他因素以实现体验和内存使用的平衡。最佳实践请参考
   * > [优化长列表加载慢丢帧问题-缓存列表项](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list#section11667144010222)
   *
   * @param { number } count - 预加载的ListItem的数量。<br/>默认值：根据屏幕内显示的节点个数设置，最大值为16。 <br/>取值范围：[0, +∞)，设置为小于0的值时，按1处理。
   * @param { boolean } show - 被预加载的ListItem是否需要显示。设置为true时显示预加载的ListItem，设置为false时不显示预加载的ListItem。 <br/> 默认值：false
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   */
  cachedCount(count: number, show: boolean): ListAttribute;

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
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14)属性可以显示出预加载节点。
   *
   * 默认行为：count参数默认为number类型，数值根据屏幕内显示的节点个数设置，最大值为16。预加载的ListItem默认不参与绘制。
   *
   * > **说明：**
   * >
   * > 通常建议设置cachedCount=n/2（n代表一屏显示的列表项数量），同时需考虑其他因素以实现体验和内存使用的平衡。从API version 22开始，支持设置最大最小缓存数，可以将最大缓存数设置稍大，如设置为最小缓存数的
   * > 两倍，利用UI线程空闲时间创建节点，减少滚动过程中预加载创建节点，提升滚动流畅性。最佳实践请参考
   * > [优化长列表加载慢丢帧问题-缓存列表项](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list#section11667144010222)
   *
   * @param { number | CacheCountInfo } count - 当参数类型为number时，表示预加载的ListItem的数量。 <br/>取值范围：
   *     [0, +∞)，设置为小于0的值时，按1处理。 <br>当参数类型为CacheCountInfo时，表示预加载的最大最小范围。
   * @param { boolean } show - 被预加载的ListItem是否需要显示。<br/>true：显示预加载的ListItem。<br/>false：不显示预加载的ListItem。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  cachedCount(count: number | CacheCountInfo, show: boolean): ListAttribute;

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
   * @param { boolean } value - 是否启用链式联动动效。<br/>默认值：false，不启用链式联动。true，启用链式联动。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  chainAnimation(value: boolean): ListAttribute;

  /**
   * 设置链式联动动效。
   *
   * @param { ChainAnimationOptions } value - 链式联动动效参数。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  chainAnimationOptions(value: ChainAnimationOptions): ListAttribute;

  /**
   * 配合[ListItemGroup]{@link list_item_group}组件使用，设置ListItemGroup中header是否要吸顶或footer是否要吸底。sticky属性可以设置为
   * StickyStyle.Header \| StickyStyle.Footer 以同时支持header吸顶和footer吸底。从API version 20开始，sticky属性也可以设置为StickyStyle.BOTH，以同
   * 时支持header吸顶和footer吸底。
   *
   * > **说明：**
   * >
   * > 由于浮点数计算精度，设置sticky后，在List滑动过程中小概率产生缝隙，可以通过[pixelRound]{@link CommonMethod#pixelRound}指定当前组件向下像素取整解决该问题。
   *
   * @param { StickyStyle } value - ListItemGroup吸顶或吸底效果。<br/>默认值：StickyStyle.None
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sticky(value: StickyStyle): ListAttribute;

  /**
   * 设置列表项滚动结束对齐效果。
   *
   * 只支持item等高场景限位，不等高场景可能存在不准确的情况。对齐动画期间
   * [onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12)事件上报的滚动操作来源
   * 类型为ScrollSource.FLING。
   *
   * @param { ScrollSnapAlign } value - 列表项滚动结束对齐效果。<br/>默认值：ScrollSnapAlign.NONE
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scrollSnapAlign(value: ScrollSnapAlign): ListAttribute;

  /**
   * 设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。
   *
   * @param { NestedScrollOptions } value - 嵌套滚动选项。<br/>默认值：{ scrollForward: NestedScrollMode.SELF_ONLY, scrollBackward:
   *     NestedScrollMode.SELF_ONLY }
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nestedScroll(value: NestedScrollOptions): ListAttribute;

  /**
   * 设置是否支持滚动手势。
   *
   * @param { boolean } value - 是否支持滚动手势。设置为true时可以通过手指或者鼠标滚动，设置为false时无法通过手指或者鼠标滚动，但不影响控制器[Scroller]{@link Scroller}的滚动
   *     接口。<br/>默认值：true
   * @returns { ListAttribute } The attribute of the list
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): ListAttribute;

  /**
   * 设置摩擦系数，手动划动滚动区域时生效，仅影响惯性滚动过程。设置为小于等于0的值时，按默认值处理。
   *
   * @param { number | Resource } value - 摩擦系数。<br/>默认值：非wearable设备为0.6，wearable设备为0.9。<br/>从API version 11开始，非wearable设
   *     备默认值为0.7。<br/>从API version 12开始，非wearable设备默认值为0.75。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  friction(value: number | Resource): ListAttribute;

  /**
   * 设置List组件的子组件在主轴方向的大小信息。
   *
   * > **说明：**
   * >
   * > - 该属性通过向List组件提供所有子组件在主轴方向的大小信息，确保在面对子组件主轴大小不一致、增删子组件、使用[scrollToIndex]{@link Scroller#scrollToIndex}等场景时，List组件能
   * > 够维护其滑动位置准确性。这样，[scrollTo]{@link Scroller#scrollTo}可以准确的跳转到指定位置，[currentOffset]{@link Scroller#currentOffset}可以获取到
   * > 当前准确的滑动位置，内置滚动条可以实现平滑移动无跳变。
   * >
   * > - 当子组件是ListItemGroup时，需要根据ListItemGroup的列数、ListItemGroup中ListItem在主轴方向的间距以及ListItemGroup中header、footer和ListItem的大
   * > 小，来准确计算出ListItemGroup在主轴方向的整体大小，并传递给List组件。
   * >
   * > - 如果子组件有ListItemGroup，必须为每一个ListItemGroup设置[childrenMainSize]{@link ListItemGroupAttribute#childrenMainSize}属性。
   * > List组件和每一个ListItemGroup组件都要通过childrenMainSize属性接口一对一绑定一个ChildrenMainSize对象。
   * >
   * > - 多列场景使用LazyForEach生成子组件时，需确保LazyForEach全部生成ListItemGroup组件或者全部生成ListItem组件。
   *
   * @param { ChildrenMainSize } value - 该对象用来维护子组件在主轴方向的大小信息。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  childrenMainSize(value: ChildrenMainSize): ListAttribute;

  /**
   * 设置显示区域上方插入或删除数据时是否要保持可见内容位置不变。
   *
   * @param { boolean } enabled - 设置显示区域上方插入或删除数据时是否要保持可见内容位置不变。<br/>默认值：false，显示区域上方插入或删除数据时可见内容位置会跟随变化。 true：显示区域上方插入或
   *     删除数据时可见内容位置不变。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maintainVisibleContentPosition(enabled: boolean): ListAttribute;

  /**
   * 设置List组件是否从末尾开始布局。
   *
   * @param { boolean } enabled - 设置List组件是否从末尾开始布局。<br/>默认值：false，List从顶部开始布局。 true：List组件从末尾开始布局。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  stackFromEnd(enabled: boolean): ListAttribute;

  /**
   * 设置方向键走焦模式。
   *
   * @param { Optional<FocusWrapMode> } mode - 交叉轴方向键走焦模式。<br/>默认值：FocusWrapMode.DEFAULT<br/>**说明：** <br/>异常值按默认值处理，即交叉轴
   *     方向键不能换行。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  focusWrapMode(mode: Optional<FocusWrapMode>): ListAttribute;

  /**
   * 设置是否同步加载List区域内所有子组件。
   *
   * @param { boolean } enable - 是否同步加载List区域内所有子组件。<br/>true表示同步加载，false表示异步加载。默认值：true。<br/>**说明：** <br/>设置为false时，在首次
   *     显示、不带动画scrollToIndex跳转场景，若当帧布局耗时超过50ms，会将List区域内尚未布局的子组件延后到下一帧进行布局。
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  syncLoad(enable: boolean): ListAttribute;

  /**
   * 设置列表项滚动限位动画速度。只在列表设置了滚动结束对齐效果后才生效。
   *
   * @param { ScrollSnapAnimationSpeed } speed - 列表滚动限位动画速度。<br/>默认值：ScrollSnapAnimationSpeed.NORMAL
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollSnapAnimationSpeed(speed: ScrollSnapAnimationSpeed): ListAttribute;

  /**
   * 配置编辑模式选项参数。
   *
   * @param { EditModeOptions } [options] - 编辑模式选项。
   * @returns { ListAttribute } - The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  editModeOptions(options?: EditModeOptions): ListAttribute;

  /**
   * 设置List是否启用编辑模式，启用编辑模式后可以在List组件内滑动多选[ListItem]{@link list_item}。未通过该接口设置时，不启用编辑模式。
   *
   * @param { boolean | undefined } enabled - 是否启用编辑模式。<br/>设置为true时启用编辑模式，可以滑动多选；设置为false或undefined时关闭编辑模式，不可滑动多选。
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableEditMode(enabled: boolean | undefined): ListAttribute;

  /**
   * 编辑模式状态变化时触发。
   *
   * @param { Callback<boolean> | undefined } callback - 编辑模式状态变化时触发的回调。
   *     <br>传入undefined会注销回调。
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onEditModeChange(callback: Callback<boolean> | undefined): ListAttribute;

  /**
   * 设置当前List组件是否支持在LazyForEach或Repeat中使用if/else渲染控制语法生成不包含任何子组件的空分支节点。未设置时不支持空分支节点。此属性初次赋值后不支持更新，所以赋值后无法在支持空分支、不支持空分支行为
   * 之间切换。
   *
   * @param { boolean | undefined } supported - 当前List组件是否支持在
   *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)或
   *     [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中使用
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)渲染控制语法生成一个不含任何子节点的空分支节点。</br>true表示支
   *     持空分支节点；false表示不支持空分支节点。</br>值为undefined时，按false处理。
   * @returns { ListAttribute } the attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  supportEmptyBranchInLazyLoading(supported: boolean | undefined): ListAttribute;

  /**
   * 设置List组件的系统返回键行为。
   *
   * @param { ListBackPressBehavior | undefined } behavior - List组件的系统返回键行为选项。当前支持通过
   *     [ListBackPressBehavior]{@link ListBackPressBehavior}参数，配置系统返回键生效时，是否收起已展开的ListItem的划出组件。<br/>设置为undefined时，恢复默认
   *     行为，即系统返回键生效时，收起已展开的ListItem的划出组件。
   * @returns { ListAttribute } The attribute of the list.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backPressBehavior(behavior: ListBackPressBehavior | undefined): ListAttribute;

  /**
   * 列表滑动时触发。
   *
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 12开始废弃，建议使用
   * > [onDidScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#ondidscroll12)替代。
   *
   * @param { function } event - Callback when scroll,
   * scrollOffset: 相对于上一帧的偏移量，List的内容向上滚动时偏移量为正，向下滚动时偏移量为负。<br/>单位vp。
   * scrollState: 当前滑动状态。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead common.ScrollableCommonMethod#onDidScroll
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): ListAttribute;

  /**
   * 有子组件划入或划出List显示区域时触发。计算索引值时，ListItemGroup作为一个整体占一个索引值，不计算ListItemGroup内部ListItem的索引值。
   *
   * List的边缘效果为弹簧效果时，在List划动到边缘继续划动和松手回弹过程不会触发onScrollIndex事件。
   *
   * 触发该事件的条件：列表初始化时会触发一次，List显示区域内第一个子组件的索引值或最后一个子组件的索引值有变化时会触发。
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onScrollIndex(event: (start: number, end: number, center: number) => void): ListAttribute;

  /**
   * 有子组件划入或划出List显示区域时触发。计算触发条件时，每一个ListItem、ListItemGroup中的header或footer都算一个子组件。
   *
   * List的边缘效果为弹簧效果时，在List划动到边缘继续划动和松手回弹过程不会触发onScrollVisibleContentChange事件。
   *
   * 触发该事件的条件：列表初始化时会触发一次，List显示区域内第一个子组件的索引值或最后一个子组件的索引值有变化时会触发。
   *
   * @param { OnScrollVisibleContentChangeCallback } handler - 当前显示内容发生改变的时候触发回调。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onScrollVisibleContentChange(handler: OnScrollVisibleContentChangeCallback): ListAttribute;

  /**
   * 列表到达起始位置时触发。
   *
   * List初始化时如果initialIndex为0会触发一次，List滚动到起始位置时触发一次。List边缘效果为弹簧效果时，划动经过起始位置时触发一次，回弹回起始位置时再触发一次。
   *
   * @param { function } event - 列表到达起始位置时触发的回调。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onReachStart(event: () => void): ListAttribute;

  /**
   * 列表到达末尾位置时触发事件。当最后一个子组件因滚动或内容/布局变化出现在列表视窗中时，触发此回调。
   *
   * 当子组件未撑满列表，无须滚动即可直接在列表内完整展示时，首次加载也会触发此事件。
   *
   * List边缘效果为弹簧效果时，划动经过末尾位置时触发一次，回弹回末尾位置时再触发一次。
   *
   * @param { function } event - 列表到达末尾位置时触发的回调。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onReachEnd(event: () => void): ListAttribute;

  /**
   * 列表滑动开始时触发。手指拖动列表或列表的滚动条触发的滑动开始时，会触发该事件。使用[Scroller]{@link scroll:Scroller}滑动控制器触发的带动画的滑动，动画开始时会触发该事件。
   *
   * @param { function } event - 列表滑动开始时触发的回调。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollStart(event: () => void): ListAttribute;

  /**
   * 列表滑动停止时触发。手拖动列表或列表的滚动条触发的滑动，手离开屏幕后滑动停止时会触发该事件。使用[Scroller]{@link scroll:Scroller}滑动控制器触发的带动画的滑动，动画停止会触发该事件。
   *
   * @param { function } event - 列表滑动停止时触发的回调。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onScrollStop(event: () => void): ListAttribute;

  /**
   * 当List组件在编辑模式时，点击ListItem右边出现的删除按钮时触发。
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  onItemDelete(event: (index: number) => boolean): ListAttribute;

  /**
   * 列表元素发生移动时触发。
   *
   * @param { function } event
   * @returns { ListAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onItemMove(event: (from: number, to: number) => boolean): ListAttribute;

  /**
   * 开始拖拽列表元素时触发。
   *
   * 不支持拖动到List边缘时触发List的自动滚动，可以使用ForEach、LazyForEach、Repeat的
   * [onMove](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-drag-sorting.md#onmove)接口实现该效果，参考
   * [示例12（使用OnMove进行拖拽）](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#示例12使用onmove进行拖拽)。但需注意
   * [onMove](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-drag-sorting.md#onmove)接口不支持跨ListItemGroup
   * 拖拽。
   *
   * > **说明：**
   * >
   * > 从API version 14开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } event - Callback triggered when the dragging of a list item starts.<br> In API version 22 and
   *     earlier versions, the parameter type is **(event: ItemDragInfo, itemIndex: number) => (() => any) | void**. For
   *     details about the **event** and **itemIndex** parameters, see
   *     [OnItemDragStartCallback]{@link OnItemDragStartCallback}. [since 8 - 22]
   * @param { OnItemDragStartCallback } event - 列表元素拖拽开始时触发的回调。<br> API version 22及之前版本，该参数类型为(event: ItemDragInfo,
   *     itemIndex: number) => (() => any) | void，其中event和itemIndex参数含义参考
   *     [OnItemDragStartCallback]{@link OnItemDragStartCallback}。 [since 23]
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragStart(event: OnItemDragStartCallback): ListAttribute;

  /**
   * 拖拽列表元素进入列表范围内时触发。
   *
   * @param { function } event - 拖拽点的信息。
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): ListAttribute;

  /**
   * 拖拽列表元素在列表范围内移动时触发。
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): ListAttribute;

  /**
   * 拖拽列表元素离开列表范围时触发。
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): ListAttribute;

  /**
   * 绑定该事件的列表可作为拖拽释放目标，当在列表范围内停止拖拽时触发。
   *
   * @param { function } event
   * @returns { ListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDrop(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void): ListAttribute;

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
   * @param { function } event - Callback triggered when each frame scrolling starts. [since 9 - 19]
   * @param { OnScrollFrameBeginCallback } event - 每帧滚动开始回调函数。 [since 20]
   * @returns { ListAttribute } Returns the instance of the ListAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollFrameBegin(event: OnScrollFrameBeginCallback): ListAttribute;
}

/**
* 列表包含一系列相同宽度的列表项。适合连续、多行呈现同类数据，例如图片和文本。
*
* List的懒加载是指组件按需加载可见区域可见的子组件。相比全量加载，使用懒加载可以提升应用启动速度，减少内存消耗。List和
* [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
* [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、
* [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，懒加载能力存在差异：
*
* - 当List和ForEach结合，会一次性创建所有的子节点，在需要的时候布局和渲染屏幕范围内的节点。当用户滑动时，划出屏幕范围的节点不会下树销毁，划入屏幕范围的节点会布局和渲染。
* - 当List和LazyForEach结合，会一次性创建、布局、渲染屏幕范围的节点。当用户滑动时，划出屏幕范围的节点会下树销毁，划入屏幕范围的节点会创建、布局、渲染。
* - 当List和带[virtualScroll]{@link RepeatAttribute#virtualScroll}的Repeat结合，它的懒加载行为和LazyForEach一致。当List和不带virtualScroll的
* Repeat结合，它的懒加载行为和ForEach一致。
*
* 如果可滚动组件嵌套List组件，并且滚动方向相同，List组件又没有设置主轴尺寸时，List组件会全量加载子组件，导致懒加载失效。该场景推荐使用List嵌套[ListItemGroup]{@link list_item_group}组
* 件以实现优化性能。
*
* List的预加载是指除了加载显示区域内可见的子组件外，还支持空闲时隙提前加载部分显示区域外不可见的子组件。使用预加载可以减少滚动丢帧，提升流畅性。预加载需要结合懒加载才会生效。List支持通过
* [cachedCount]{@link ListAttribute#cachedCount(value: number)}设置预加载的数量。默认会预加载显示区域上下各一屏子节点（最大预加载16行子节点）。List和
* [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
* [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、
* [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，预加载能力存在差异：
*
* - 当List和ForEach结合，如果设置了cachedCount，除了会布局显示区域内子组件外，还会在空闲时隙预布局显示区域外cachedCount范围内的子节点。
* - 当List和LazyForEach结合，如果设置了cachedCount，除了会创建和布局显示区域内子组件外，还会在空闲时隙预创建和预布局显示区域外cachedCount范围内的子节点。
* - 当List和带[virtualScroll]{@link RepeatAttribute#virtualScroll}的Repeat结合，它的预加载行为和LazyForEach一致。当List和不带virtualScroll的
* Repeat结合，它的预加载行为和ForEach一致。
*
* > **说明：**
* >
* > 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link common}进行处理。
*
* ###### 子组件
*
* 仅支持[ListItem]{@link list_item}、[ListItemGroup]{@link list_item_group}子组件和自定义组件。自定义组件在List下使用时，建议使用ListItem或
* ListItemGroup作为自定义组件的顶层组件，不建议给自定义组件设置属性和事件方法。
*
* 支持通过渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
* [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和
* [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)）动态生成子组件，更推荐使用LazyForEach或Repeat以优化性能。
*
* > **说明：**
* >
* > 如果在处理大量子组件时遇到卡顿问题，请考虑采用懒加载、缓存列表项、动态预加载、组件复用和布局优化等方法来进行优化。最佳实践请参考
* > [优化长列表加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list)。
* >
* > 从API version 21开始，List单个子组件的宽高最大为16777216px；API version 20及之前，List单个子组件的宽高最大为1000000px。子组件超出该大小可能导致滚动或显示异常。
* >
* > List的子组件的索引值计算规则：
* >
* > - 按子组件的顺序依次递增。
* >
* > - if/else语句中，只有条件成立的分支内的子组件会参与索引值计算，条件不成立的分支内子组件不计算索引值。
* >
* > - ForEach/LazyForEach/Repeat语句中，会计算展开所有子节点索引值。
* >
* > - [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
* > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和
* > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)发生变化以后，会更新子节点索引值。
* >
* > - ListItemGroup作为一个整体计算一个索引值，ListItemGroup内部的ListItem不计算索引值。
* >
* > - List子组件visibility属性设置为Hidden或None依然会计算索引值。
*
* ###### ListOptions<sup>18+</sup>对象说明
*
* 用于设置List组件参数。
*
* > **说明：**
* >
* > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
*
* **卡片能力：** 从API version 18开始，该接口支持在ArkTS卡片中使用。
*
* **原子化服务API：** 从API version 18开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* <!--Table: 15%; 15%; 10%; 10%; 50%-->
*
* | 名称       | 类型                                    | 只读 | 可选 | 说明                                                     |
* | ------------ | ------------------------------------------- | ---- | -- | ------------------------------------------------------------ |
* | initialIndex<sup>7+</sup> | number | 否 | 是 | 设置当前List初次加载时显示区域起始位置的item索引值。<br/>默认值：0<br/>**说明：** <br/>设置为负数或超过了当前List最后一个item的索引值时视为无效取值，无效取值按默认值显示。<br/>从API version 14开始，如果在List组件创建完成后首次布局前（如List的[onAttach](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-show-hide.md#onattach12)事件中），调用Scroller滚动控制器中不带动画的scrollToIndex或scrollEdge方法，会覆盖initialIndex设置的值。<br/>设置了initialIndex后，List从initialIndex对应的子组件开始布局，在这之前的子组件未参与布局，无法计算准确大小，因此通过[currentOffset]{@link scroll:Scroller.currentOffset}接口获取到的List的滚动总偏移量通过估算得出，可能会有误差。可通过设置[childrenMainSize](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#childrenmainsize12)确保List的滚动总偏移量的准确性。<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。 |
* | space<sup>7+</sup>        | number&nbsp;\|&nbsp;string                  | 否   | 是 | 子组件主轴方向的间隔。<br/>默认值：0<br/>参数类型为number时单位为vp。<br/>**说明：** <br/>设置为负数或者大于等于List内容区长度时，按默认值显示。<br/>space参数值小于List分割线宽度时，子组件主轴方向的间隔取分割线宽度。<br/> List子组件的visibility属性设置为None时不显示，但该子组件上下的space还是会生效。<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。|
* | spaceWidth        | [Dimension]{@link units:Dimension}                  | 否   | 是 | 子组件主轴方向的间隔。<br/>默认值：0<br/><br/>**说明：** <br/>设置为负数或者大于等于List内容区长度时，按默认值显示。<br/>space参数值小于List分割线宽度时，子组件主轴方向的间隔取分割线宽度。<br/>List子组件的visibility属性设置为None时不显示，但该子组件上下的space还是会生效。如果同时设置了spaceWidth和space，则spaceWidth优先生效。当spaceWidth为undefined或null时，space生效。<br/>**起始版本：** 26.0.0 <br/>**模型约束：** 此接口仅可在Stage模型下使用。<br/>**卡片能力：** 从API版本26.0.0开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。|
* | scroller<sup>7+</sup>      | [Scroller]{@link scroll:Scroller} | 否   | 是 | 可滚动组件的控制器。与List绑定后，可以通过它控制List的滚动。<br/>**说明：** <br/>不允许和其他滚动类组件，如：[ArcList]{@link ./../../../@ohos.arkui.ArcList}、[List]{@link list}、[Grid]{@link grid}、[Scroll]{@link scroll}和[WaterFlow]{@link water_flow}绑定同一个滚动控制对象。<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。 |
*
* ###### ListItemAlign<sup>9+</sup>枚举说明
*
* 设置子组件在List交叉轴方向的对齐方式。
*
* **卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
*
* **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称     |  值  | 说明                      |
* | ------ | ------ | ------------------------- |
* | Start  | 0 | ListItem在List中，交叉轴方向首部对齐。 |
* | Center | 1 | ListItem在List中，交叉轴方向居中对齐。 |
* | End    | 2 | ListItem在List中，交叉轴方向尾部对齐。 |
*
* ###### StickyStyle<sup>9+</sup>枚举说明
*
* ListItemGroup吸顶或吸底效果枚举。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称     |  值  | 说明                               |
* | ------ | ------ | ---------------------------------- |
* | None   | 0 | ListItemGroup的header不吸顶，footer不吸底。<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。 |
* | Header | 1 | ListItemGroup的header吸顶，footer不吸底。<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。  |
* | Footer | 2 | ListItemGroup的footer吸底，header不吸顶。<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。  |
* | BOTH<sup>20+</sup> | 3 | ListItemGroup的header吸顶，footer吸底。<br/>**卡片能力：** 从API version 20开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 20开始，该接口支持在原子化服务中使用。 |
*
* ###### ScrollSnapAlign<sup>10+</sup>枚举说明
*
* 设置列表项滚动结束对齐效果。
*
* **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称     |  值  | 说明                                     |
* | ------ | ------ | ---------------------------------------- |
* | NONE   | 0 | 默认无项目滚动对齐效果。            |
* | START  | 1 | 视图中的第一项将在列表的开头对齐。<br/>**说明：**<br/>当列表位移至末端，需要将末端的item完整显示，可能出现开头不对齐的情况。 |
* | CENTER | 2 | 视图中的中间项将在列表中心对齐。<br/>**说明：**<br/>顶端和末尾的item都可以在列表中心对齐，列表显示可能露出空白。 |
* | END    | 3 | 视图中的最后一项将在列表末尾对齐。<br/>**说明：**<br/>当列表位移至顶端，需要将顶端的item完整显示，可能出现末尾不对齐的情况。 |
*
* ###### ScrollSnapAnimationSpeed<sup>22+</sup>枚举说明
*
* 设置列表项滚动限位动画速度。
*
* **原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称     |  值  | 说明                                     |
* | ------ | ------ | ---------------------------------------- |
* | NORMAL   | 0 | 默认列表限位动画速度，通常用于列表项尺寸较大，划一下滚动一个列表项场景。            |
* | SLOW  | 1 | 列表限位动画速度较慢，通常用于列表项尺寸较小，划一下滚动多个列表项场景。 |
*
* ###### CloseSwipeActionOptions<sup>11+</sup>对象说明
*
* 收起[EXPANDED]{@link list_item:SwipeActionState}状态[ListItem]{@link list_item}回调事件集合，用于设置收起动画完成后回调事件。
*
* **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称     | 类型     | 只读 | 可选 | 说明                   |
* | ------- | -------- | ---- | -- | ---------------------- |
* | onFinish | ()=>void | 否   | 是 | 在收起动画完成后触发。 |
*
* ###### ListDividerOptions<sup>18+</sup>对象说明
*
* 用于设置List或ListItemGroup组件的分割线样式。
*
* > **说明：**
* >
* > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
*
* **卡片能力：** 从API version 18开始，该接口支持在ArkTS卡片中使用。
*
* **原子化服务API：** 从API version 18开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* <!--Table: 15%; 15%; 10%; 10%; 50%-->
*
* | 名称     | 类型     | 只读 | 可选 | 说明                   |
* | ------- | -------- | ---- | -- | ---------------------- |
* | strokeWidth<sup>7+</sup> | [Length]{@link units:Length} | 否   | 否 | 分割线的线宽。<br/>单位：vp<br/>**说明：** <br/>设置为负数，百分比，或者大于等于List内容区长度时，按0处理。<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。|
* | color<sup>7+</sup> | [ResourceColor]{@link units:ResourceColor} | 否   | 是 | 分割线颜色。<br/>默认值：0x08000000<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。 |
* | startMargin<sup>7+</sup> | [Length]{@link units:Length} | 否   | 是 | 分割线与列表侧边起始端的距离。<br/>默认值：0 <br/>单位：vp<br/>**说明：** <br/>设置为负数或者百分比时，按默认值处理。<br/>endMargin + startMargin 超过列宽度后startMargin和endMargin均会被置0。<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。|
* | endMargin<sup>7+</sup> | [Length]{@link units:Length} | 否   | 是 | 分割线与列表侧边结束端的距离。<br/>默认值：0 <br/>单位：vp<br/> **说明：** <br/>设置为负数或者百分比时，按默认值处理。<br/>endMargin + startMargin 超过列宽度后startMargin和endMargin均会被置0。<br/>**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。|
*
* ###### ScrollState枚举说明
*
* 滑动状态枚举。
*
* **卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
*
* **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称     |  值  | 说明                                     |
* | ------ | ------ | ---------------------------------------- |
* | Idle   |  0  | 空闲状态。滚动状态回归空闲时触发，控制器提供的无动画方法控制滚动时触发。 |
* | Scroll |  1  | 滚动状态。手指拖动List，拖动滚动条和滚动鼠标滚轮时触发。|
* | Fling  |  2  | 惯性滚动状态。动画控制的滚动都会触发。包括快速划动松手后的惯性滚动， <br/>划动到边缘回弹的滚动，快速拖动内置滚动条松手后的惯性滚动， <br/>使用滚动控制器提供的带动画的方法控制的滚动。 |
*
* ###### VisibleListContentInfo<sup>12+</sup>对象说明
*
* 用于表示List可见内容区子组件的详细信息。
*
* **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称 | 类型 | 只读 | 可选 | 说明 |
* | ------ | ------ | -- | ------ | ------|
* | index | number | 否 | 否 | 表示ListItem或ListItemGroup在List中的索引值。 |
* | itemGroupArea | [ListItemGroupArea]{@link ListItemGroupArea} | 否 | 是 | 表示处于ListItemGroup的哪一个区域。 |
* | itemIndexInGroup | number | 否 | 是 | 表示ListItem在ListItemGroup中的索引值。 |
*
* ###### ListItemGroupArea<sup>12+</sup>枚举说明
*
* 枚举了ListItemGroup各个区域。
*
* **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称     |  值  | 说明                                     |
* | ------ | ------ | ---------------------------------------- |
* | NONE |  0  | ListItemGroup内部ListItem区域、header区域以及footer区域以外的区域。 |
* | IN_LIST_ITEM_AREA |  1  | ListItemGroup内部ListItem区域。 |
* | IN_HEADER_AREA |  2  | ListItemGroup内部header区域。 |
* | IN_FOOTER_AREA |  3  | ListItemGroup内部footer区域。 |
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const List: ListInterface;

/**
* 定义List组件实例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ListInstance: ListAttribute;