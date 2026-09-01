/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * ListItemGroup组件卡片样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ListItemGroupStyle {

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
 * ListItemGroup头部和尾部样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum ListItemGroupHeaderFooterStyle {

  /**
   * 无样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NONE = 0,

  /**
   * 悬浮样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FLOATING = 1
}

/**
 * ListItemGroup组件参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface ListItemGroupOptions {

  /**
   * 设置ListItemGroup头部组件。
   *
   * **说明：**
   *
   * 可以放单个子组件或不放子组件，不设置时无头部组件。该参数的优先级低于参数headerComponent。即同时设置header和headerComponent时，以headerComponent设置的值为准。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  header?: CustomBuilder;

  /**
   * 使用ComponentContent类型参数设置ListItemGroup头部组件。
   *
   * **说明：**
   *
   * 可以放单个子组件或不放子组件，不设置时无头部组件。该参数的优先级高于参数header。即同时设置header和headerComponent时，以headerComponent设置的值为准。
   *
   * 同一个headerComponent不推荐同时给不同的ListItemGroup使用，否则会导致显示问题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  headerComponent?: ComponentContent;

  /**
   * 设置ListItemGroup尾部组件。
   *
   * **说明：**
   *
   * 可以放单个子组件或不放子组件，不设置时无尾部组件。该参数的优先级低于参数footerComponent。即同时设置footer和footerComponent时，以footerComponent设置的值为准。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  footer?: CustomBuilder;

  /**
   * 使用ComponentContent类型参数设置ListItemGroup尾部组件。
   *
   * **说明：**
   *
   * 可以放单个子组件或不放子组件，不设置时无尾部组件。该参数的优先级高于参数footer。即同时设置footer和footerComponent时，以footerComponent设置的值为准。
   *
   * 同一个footerComponent不推荐同时给不同的ListItemGroup使用，否则会导致显示问题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  footerComponent?: ComponentContent;

  /**
   * 列表项间距。只作用于ListItem与ListItem之间，不作用于header与ListItem、footer与ListItem之间。
   *
   * 默认值：0
   *
   * 单位：vp
   *
   * **说明：**
   *
   * 设置为负数或者大于等于List内容区长度时，按默认值显示。如果同时设置了spaceWidth和space，则spaceWidth优先生效。当spaceWidth为undefined或null时，space生效。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  space?: number | string;

  /**
   * 列表项间距。只作用于ListItem与ListItem之间，不作用于header与ListItem、footer与ListItem之间。
   *
   * 默认值：0
   *
   * 单位：vp
   *
   * **说明：**
   *
   * 设置为负数或者大于等于List内容区长度时，按默认值显示。如果同时设置了spaceWidth和space，则spaceWidth优先生效。当spaceWidth为undefined或null时，space生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  spaceWidth?: Dimension;

  /**
   * 设置ListItemGroup组件卡片样式。
   *
   * 默认值：ListItemGroupStyle.NONE
   *
   * 设置为ListItemGroupStyle.NONE时无样式。
   *
   * 设置为ListItemGroupStyle.CARD时，建议配合[ListItem]{@link ./list_item}的ListItemStyle.CARD同时使用，显示默认卡片样式。
   *
   * 卡片样式下，ListItemGroup默认规格：左右外边距12vp，上下左右内边距4vp。
   *
   * 卡片样式下，为卡片内的列表选项提供了默认的focused、hover、pressed、selected和disabled样式。
   *
   * **说明：**
   *
   * 当设置为ListItemGroupStyle.CARD时，List的listDirection属性值须为Axis.Vertical，如果设置为Axis.Horizontal，会导致显示混乱；List属性
   * [alignListItem]{@link ListAttribute#alignListItem}默认为ListItemAlign.Center，居中对齐显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style?: ListItemGroupStyle;

  /**
   * 设置ListItemGroup头部样式。
   *
   * 默认值：ListItemGroupHeaderFooterStyle.NONE
   *
   * 设置为ListItemGroupHeaderFooterStyle.NONE时无样式。
   *
   * 设置为ListItemGroupHeaderFooterStyle.FLOATING时，头部组件在滚动时悬浮显示。
   *
   * @default ListItemGroupHeaderFooterStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  headerStyle?: ListItemGroupHeaderFooterStyle;

  /**
   * 设置ListItemGroup尾部样式。
   *
   * 默认值：ListItemGroupHeaderFooterStyle.NONE
   *
   * 设置为ListItemGroupHeaderFooterStyle.NONE时无样式。
   *
   * 设置为ListItemGroupHeaderFooterStyle.FLOATING时，尾部组件在滚动时悬浮显示。
   *
   * @default ListItemGroupHeaderFooterStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  footerStyle?: ListItemGroupHeaderFooterStyle;
}

/**
 * 该组件用来展示列表项分组，支持自定义分组头部和尾部区域、卡片样式、分割线、懒加载与预加载等能力，适用于需要对列表项进行逻辑分组展示的场景。宽度默认充满[List]{@link ./list}组件，必须配合List组件来使用。
 *
 * ListItemGroup的懒加载是指组件按需加载可见区域内的子组件。相比全量加载，使用懒加载可以提升应用启动速度，减少内存消耗。ListItemGroup和
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，懒加载能力存在差异：
 *
 * - 当ListItemGroup和ForEach结合，会一次性创建所有的子组件，在需要的时候布局和渲染屏幕范围内的节点。当用户滑动时，滑出屏幕范围的节点不会下树销毁，滑入屏幕范围的节点会布局和渲染。
 * - 当ListItemGroup和LazyForEach结合，会一次性创建、布局、渲染屏幕范围的节点。当用户滑动时，滑出屏幕范围的节点会下树销毁，滑入屏幕范围的节点会创建、布局、渲染。
 * - 当ListItemGroup和带[virtualScroll]{@link RepeatAttribute#virtualScroll}的Repeat结合，它的懒加载行为和LazyForEach一致。当ListItemGroup和
 * 不带virtualScroll的Repeat结合，它的懒加载行为和ForEach一致。
 *
 * ListItemGroup的预加载是指除了加载显示区域内的子组件外，还支持空闲时隙提前加载部分显示区域外的子组件。使用预加载可以减少滚动丢帧，提升流畅性。预加载需要结合懒加载才会生效。ListItemGroup和
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，预加载能力存在差异：
 *
 * - 当ListItemGroup和ForEach结合，如果设置了[cachedCount]{@link ListAttribute#cachedCount(value: number)}，除了会布局显示区域内子组件外，还会在空闲时隙根
 * 据List组件的cachedCount属性预布局显示区域外cachedCount范围内的子组件。
 * - 当ListItemGroup和LazyForEach结合，如果设置了[cachedCount]{@link ListAttribute#cachedCount(value: number)}，除了会创建和布局显示区域内子组件外，还
 * 会在空闲时隙根据List组件的cachedCount属性预创建和预布局显示区域外cachedCount范围内的子组件。
 * - 当ListItemGroup和带[virtualScroll]{@link RepeatAttribute#virtualScroll}的Repeat结合，它的预加载行为和LazyForEach一致。当ListItemGroup和
 * 不带virtualScroll的Repeat结合，它的预加载行为和ForEach一致。
 *
 * > **说明：**
 * >
 * > - 该组件的父组件只能是[List]{@link ./list}。
 * >
 * > - ListItemGroup组件不支持设置[通用属性aspectRatio]{@link CommonMethod#aspectRatio}。
 * >
 * > - 当ListItemGroup的父组件List的[listDirection]{@link ListAttribute#listDirection}属性为Axis.Vertical时，设置
 * > [通用属性height]{@link CommonMethod#height(value: Length)}不生效。ListItemGroup的高度为header高度、footer高度和所有ListItem布局后总高度之和。
 * >
 * > - 当父组件List的listDirection属性为Axis.Horizontal时，设置[通用属性width]{@link CommonMethod#width(value: Length)}不生效。ListItemGroup
 * > 的宽度为header宽度、footer宽度和所有ListItem布局后总宽度之和。
 * >
 * > - ListItemGroup使用direction属性设置布局方向不生效，ListItemGroup组件布局方向跟随父容器List组件的布局方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
interface ListItemGroupInterface {

  /**
   * 创建ListItemGroup组件。该组件的父组件只能是List组件。
   *
   * @param { ListItemGroupOptions } options - ListItemGroup组件参数，用于配置header、footer、间距和样式等。不传入时使用默认配置（无header、footer，间距为
   *     0，无卡片样式）。
   * @returns { ListItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (options?: ListItemGroupOptions): ListItemGroupAttribute;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class ListItemGroupAttribute extends CommonMethod<ListItemGroupAttribute> {

  /**
   * 设置ListItem分割线样式，默认无分割线。
   *
   * strokeWidth，startMargin和endMargin不支持设置百分比。
   *
   * ListItem设置[多态样式]{@link common}时，被按压的子组件上下的分割线不绘制。
   *
   * @param { {
   *     strokeWidth: Length;
   *     color?: ResourceColor;
   *     startMargin?: Length;
   *     endMargin?: Length;
   *     } | null } value [since 9 - 17]
   * @param { ListDividerOptions | null } value ListItem分割线样式。<br/> 默认值：null [since 18]
   * @returns { ListItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  divider(
    value: ListDividerOptions | null,
  ): ListItemGroupAttribute;

  /**
   * 设置ListItemGroup组件的子组件在主轴方向的大小信息。
   *
   * > **说明：**
   * >
   * > - 当List组件的子组件包含ListItemGroup时，必须同时给List组件和每个ListItemGroup组件设置childrenMainSize属性。ListItemGroup通过该属性提供其子组件在主轴方向的大小信
   * > 息，用于配合List组件的childrenMainSize属性正常生效。
   *
   * @param { ChildrenMainSize } value - 该对象用来维护子组件在主轴方向的大小信息。
   * @returns { ListItemGroupAttribute } ListItemGroup的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  childrenMainSize(value: ChildrenMainSize): ListItemGroupAttribute;
}

/**
 * 定义ListItemGroup组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const ListItemGroupInstance: ListItemGroupAttribute;

/**
 * 该组件用来展示列表项分组，支持自定义分组头部和尾部区域、卡片样式、分割线、懒加载与预加载等能力，适用于需要对列表项进行逻辑分组展示的场景。宽度默认充满[List]{@link ./list}组件，必须配合List组件来使用。
 *
 * ListItemGroup的懒加载是指组件按需加载可见区域内的子组件。相比全量加载，使用懒加载可以提升应用启动速度，减少内存消耗。ListItemGroup和
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，懒加载能力存在差异：
 *
 * - 当ListItemGroup和ForEach结合，会一次性创建所有的子组件，在需要的时候布局和渲染屏幕范围内的节点。当用户滑动时，滑出屏幕范围的节点不会下树销毁，滑入屏幕范围的节点会布局和渲染。
 * - 当ListItemGroup和LazyForEach结合，会一次性创建、布局、渲染屏幕范围的节点。当用户滑动时，滑出屏幕范围的节点会下树销毁，滑入屏幕范围的节点会创建、布局、渲染。
 * - 当ListItemGroup和带[virtualScroll]{@link RepeatAttribute#virtualScroll}的Repeat结合，它的懒加载行为和LazyForEach一致。当ListItemGroup和
 * 不带virtualScroll的Repeat结合，它的懒加载行为和ForEach一致。
 *
 * ListItemGroup的预加载是指除了加载显示区域内的子组件外，还支持空闲时隙提前加载部分显示区域外的子组件。使用预加载可以减少滚动丢帧，提升流畅性。预加载需要结合懒加载才会生效。ListItemGroup和
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)、
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)结合，预加载能力存在差异：
 *
 * - 当ListItemGroup和ForEach结合，如果设置了[cachedCount]{@link ListAttribute#cachedCount(value: number)}，除了会布局显示区域内子组件外，还会在空闲时隙根
 * 据List组件的cachedCount属性预布局显示区域外cachedCount范围内的子组件。
 * - 当ListItemGroup和LazyForEach结合，如果设置了[cachedCount]{@link ListAttribute#cachedCount(value: number)}，除了会创建和布局显示区域内子组件外，还
 * 会在空闲时隙根据List组件的cachedCount属性预创建和预布局显示区域外cachedCount范围内的子组件。
 * - 当ListItemGroup和带[virtualScroll]{@link RepeatAttribute#virtualScroll}的Repeat结合，它的预加载行为和LazyForEach一致。当ListItemGroup和
 * 不带virtualScroll的Repeat结合，它的预加载行为和ForEach一致。
 *
 * > **说明：**
 * >
 * > - 该组件的父组件只能是[List]{@link ./list}。
 * >
 * > - ListItemGroup组件不支持设置[通用属性aspectRatio]{@link CommonMethod#aspectRatio}。
 * >
 * > - 当ListItemGroup的父组件List的[listDirection]{@link ListAttribute#listDirection}属性为Axis.Vertical时，设置
 * > [通用属性height]{@link CommonMethod#height(value: Length)}不生效。ListItemGroup的高度为header高度、footer高度和所有ListItem布局后总高度之和。
 * >
 * > - 当父组件List的listDirection属性为Axis.Horizontal时，设置[通用属性width]{@link CommonMethod#width(value: Length)}不生效。ListItemGroup
 * > 的宽度为header宽度、footer宽度和所有ListItem布局后总宽度之和。
 * >
 * > - ListItemGroup使用direction属性设置布局方向不生效，ListItemGroup组件布局方向跟随父容器List组件的布局方向。
 *
 * ###### 子组件
 *
 * 包含[ListItem]{@link ./list_item}子组件。支持通过渲染控制类型（
 * [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)）动态生成子组件，更推荐使用LazyForEach或Repeat以优化性能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const ListItemGroup: ListItemGroupInterface;