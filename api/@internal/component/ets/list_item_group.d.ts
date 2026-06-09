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
 * Enumerates the card styles of the **ListItemGroup** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ListItemGroupStyle {

  /**
   * No style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE = 0,

  /**
   * Default card style.
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
 * Enumerates the header and footer styles of **ListItemGroup**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum ListItemGroupHeaderFooterStyle {

  /**
   * No style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NONE = 0,

  /**
   * Floating style.
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
 * Describes the **ListItemGroup** component parameter.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface ListItemGroupOptions {

  /**
   * Header of the list item group.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  header?: CustomBuilder;

  /**
   * Header of the list item group, in the type of ComponentContent.
   * This parameter takes precedence over the header parameter. This means that, if both header and
   * headerComponent are set, the value of headerComponent is used.
   * To avoid display issues, do not assign the same headerComponent to different ListItemGroup components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  headerComponent?: ComponentContent;

  /**
   * Footer of the list item group.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  footer?: CustomBuilder;

  /**
   * Footer of the list item group, in the type of ComponentContent.
   * This parameter takes precedence over the footer parameter. This means that, if both footer and
   * footerComponent are set, the value of footerComponent is used.
   * To avoid display issues, do not assign the same footerComponent to different ListItemGroup components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  footerComponent?: ComponentContent;

  /**
   * Spacing between list items. This parameter only affects the spacing between list items,
   * but not spacing between the header and list items or between the footer and list items.
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
   * Spacing between list items along the main axis.
   * Unit: vp
   * <p><strong>NOTE</strong>.
   * <br>If this parameter is set to a negative number or a value greater than or equal to the length of the list
   * content area, the default value is used.
   * <br>If this parameter is set to a value less than the width of the list divider, the width of the list divider
   * is used as the spacing.
   * <br> Child components of <em>ListItemGroup</em> whose <em>visibility</em> attribute is set to <em>None</em>
   * are not displayed, but the spacing above and below them still takes effect.
   * <br> If both spaceWidth and space are set, spaceWidth will take precedence.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  spaceWidth?: Dimension;

  /**
   * Style of the list item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style?: ListItemGroupStyle;

  /**
   * Header style of ListItemGroup.
   * If this parameter is set to ListItemGroupHeaderFooterStyle.FLOATING, the header component is displayed
   * in floating mode during scrolling.
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
   * Footer style of ListItemGroup.
   * If this parameter is set to ListItemGroupHeaderFooterStyle.FLOATING, the footer component is displayed
   * in floating mode during scrolling.
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
 * The **ListItemGroup** component is used to display list item groups. It must be used with the [List]{@link list}
 * component. Unless specified otherwise, it spans the entire width of the **List** component.
 *
 * Lazy loading of **ListItemGroup** loads the child components in the visible area as required. Compared with full
 * loading, lazy loading can improve the application startup speed and reduce the memory usage. The lazy loading
 * capabilities vary when the **ListItemGroup** component is used together with
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), or
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md).
 *
 * - When **ListItemGroup** is used together with **ForEach**, all child nodes are created at a time. The nodes within
 * the screen range are laid out and rendered when needed. When a user swipes, the nodes that are out of the screen
 * range are not removed from the tree, and the nodes that are within the screen range are laid out and rendered.
 * - When **ListItemGroup** is used together with **LazyForEach**, all nodes within the screen range are created, laid
 * out, and rendered at a time. When a user swipes, the nodes that are out of the screen range are removed from the
 * tree, and the nodes that are within the screen range are created, laid out, and rendered.
 * - When the **ListItemGroup** component is used together with **Repeat** with
 * [virtualScroll]{@link RepeatAttribute#virtualScroll}, the lazy loading behavior is the same as that of
 * **LazyForEach**. When the **ListItemGroup** component is used together with **Repeat** without **virtualScroll**, the
 * lazy loading behavior is the same as that of **ForEach**.
 *
 * Preloading in **ListItemGroup** refers to loading not only the visible child components within the display area but
 * also some invisible child components outside the display area during idle time. Preloading can reduce frame loss
 * during scrolling and improve smoothness. Preloading takes effect only when lazy loading is used. The preloading
 * capabilities vary when the **ListItemGroup** component is used together with
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), or
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md).
 *
 * - When the **ListItemGroup** component is used together with **ForEach** and
 * [cachedCount]{@link ListAttribute#cachedCount(value: number)} is set, in addition to laying out child components
 * within the display area, child components within the range of **cachedCount** outside the display area are pre-laid
 * out during idle time based on the **cachedCount** attribute of the **List** component.
 * - When the **ListItemGroup** component is used together with **LazyForEach** and
 * [cachedCount]{@link ListAttribute#cachedCount(value: number)} is set, in addition to creating and laying out child
 * components within the display area, child components within the range of **cachedCount** outside the display area are
 * created and pre-laid out during idle time based on the **cachedCount** attribute of the **List** component.
 * - When the **ListItemGroup** component is used together with **Repeat** with
 * [virtualScroll]{@link RepeatAttribute#virtualScroll}, the preloading behavior is the same as that of **LazyForEach**.
 * When the **ListItemGroup** component is used together with **Repeat** without **virtualScroll**, the preloading
 * behavior is the same as that of **ForEach**.
 *
 * > **NOTE**
 *
 * > - This component can be used only as a child of [List]{@link list}.
 * >
 * > - The **ListItemGroup** component does not support the universal attribute
 * > [aspectRatio]{@link CommonMethod#aspectRatio}.
 * >
 * > - If the parent **List** component of **ListItemGroup** has its [listDirection]{@link ListAttribute#listDirection}
 * > attribute set to **Axis.Vertical**, setting the
 * > [universal attribute height]{@link CommonMethod#height(value: Length)} has no effect. In this case, the height of
 * > the **ListItemGroup** component is fixed at the sum of the component's header height, footer height, and total
 * > height of the list items.
 * >
 * > - If the parent **List** component of **ListItemGroup** has its **listDirection** attribute set to
 * > **Axis.Horizontal**, setting the [universal attribute width]{@link CommonMethod#width(value: Length)} has no
 * > effect. In this case, the width of the **ListItemGroup** component is fixed at the sum of the component's header
 * > width, footer width, and total width of the list items.
 * >
 * > - The list items in the **ListItemGroup** component cannot be edited or dragged. This means that their
 * > [editable]{@link ListItemAttribute#editable} attribute does not take effect.
 * >
 * > - The **ListItemGroup** ignores the **direction** attribute for setting the layout direction; instead, it adopts
 * > the layout direction of its parent **List** component.
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
   * Creates a **ListItemGroup** component.
   *
   * @param { ListItemGroupOptions } options - Parameters of the list item group.
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
 * In addition to the universal attributes, the following attributes are supported.
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
   * Sets the style of the divider for the list items. By default, there is no divider.
   *
   * strokeWidth, startMargin, and endMargin cannot be set in percentage.
   *
   * When a list item has polymorphic styles applied, the dividers above and below the pressed
   * child component are not rendered.
   *
   * @param { {
   *     strokeWidth: Length;
   *     color?: ResourceColor;
   *     startMargin?: Length;
   *     endMargin?: Length;
   *     } | null } value [since 9 - 17]
   * @param { ListDividerOptions | null } value [since 18]
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
   * Sets the size information of the child components of a **ListItemGroup** component along the main axis.
   *
   * > **NOTE**
   * >
   * > - The **childrenMainSize** attribute of the **List** component must be set at the same time for the attribute to
   * > take effect.
   *
   * @param { ChildrenMainSize } value - Size information of child components in the main axis direction.
   * @returns { ListItemGroupAttribute } the attribute of the ListItemGroup.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  childrenMainSize(value: ChildrenMainSize): ListItemGroupAttribute;
}

/**
 * Defines ListItemGroup Component instance.
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
 * The **ListItemGroup** component is used to display list item groups. It must be used with the [List]{@link list}
 * component. Unless specified otherwise, it spans the entire width of the **List** component.
 *
 * Lazy loading of **ListItemGroup** loads the child components in the visible area as required. Compared with full
 * loading, lazy loading can improve the application startup speed and reduce the memory usage. The lazy loading
 * capabilities vary when the **ListItemGroup** component is used together with
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), or
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md).
 *
 * - When **ListItemGroup** is used together with **ForEach**, all child nodes are created at a time. The nodes within
 * the screen range are laid out and rendered when needed. When a user swipes, the nodes that are out of the screen
 * range are not removed from the tree, and the nodes that are within the screen range are laid out and rendered.
 * - When **ListItemGroup** is used together with **LazyForEach**, all nodes within the screen range are created, laid
 * out, and rendered at a time. When a user swipes, the nodes that are out of the screen range are removed from the
 * tree, and the nodes that are within the screen range are created, laid out, and rendered.
 * - When the **ListItemGroup** component is used together with **Repeat** with
 * [virtualScroll]{@link RepeatAttribute#virtualScroll}, the lazy loading behavior is the same as that of
 * **LazyForEach**. When the **ListItemGroup** component is used together with **Repeat** without **virtualScroll**, the
 * lazy loading behavior is the same as that of **ForEach**.
 *
 * Preloading in **ListItemGroup** refers to loading not only the visible child components within the display area but
 * also some invisible child components outside the display area during idle time. Preloading can reduce frame loss
 * during scrolling and improve smoothness. Preloading takes effect only when lazy loading is used. The preloading
 * capabilities vary when the **ListItemGroup** component is used together with
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), or
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md).
 *
 * - When the **ListItemGroup** component is used together with **ForEach** and
 * [cachedCount]{@link ListAttribute#cachedCount(value: number)} is set, in addition to laying out child components
 * within the display area, child components within the range of **cachedCount** outside the display area are pre-laid
 * out during idle time based on the **cachedCount** attribute of the **List** component.
 * - When the **ListItemGroup** component is used together with **LazyForEach** and
 * [cachedCount]{@link ListAttribute#cachedCount(value: number)} is set, in addition to creating and laying out child
 * components within the display area, child components within the range of **cachedCount** outside the display area are
 * created and pre-laid out during idle time based on the **cachedCount** attribute of the **List** component.
 * - When the **ListItemGroup** component is used together with **Repeat** with
 * [virtualScroll]{@link RepeatAttribute#virtualScroll}, the preloading behavior is the same as that of **LazyForEach**.
 * When the **ListItemGroup** component is used together with **Repeat** without **virtualScroll**, the preloading
 * behavior is the same as that of **ForEach**.
 *
 * > **NOTE**
 *
 * > - This component can be used only as a child of [List]{@link list}.
 * >
 * > - The **ListItemGroup** component does not support the universal attribute
 * > [aspectRatio]{@link CommonMethod#aspectRatio}.
 * >
 * > - If the parent **List** component of **ListItemGroup** has its [listDirection]{@link ListAttribute#listDirection}
 * > attribute set to **Axis.Vertical**, setting the
 * > [universal attribute height]{@link CommonMethod#height(value: Length)} has no effect. In this case, the height of
 * > the **ListItemGroup** component is fixed at the sum of the component's header height, footer height, and total
 * > height of the list items.
 * >
 * > - If the parent **List** component of **ListItemGroup** has its **listDirection** attribute set to
 * > **Axis.Horizontal**, setting the [universal attribute width]{@link CommonMethod#width(value: Length)} has no
 * > effect. In this case, the width of the **ListItemGroup** component is fixed at the sum of the component's header
 * > width, footer width, and total width of the list items.
 * >
 * > - The list items in the **ListItemGroup** component cannot be edited or dragged. This means that their
 * > [editable]{@link ListItemAttribute#editable} attribute does not take effect.
 * >
 * > - The **ListItemGroup** ignores the **direction** attribute for setting the layout direction; instead, it adopts
 * > the layout direction of its parent **List** component.
 *
 * ###### Child Components
 *
 * Contains the [ListItem]{@link list_item} child component. Child components can be dynamically generated using
 * rendering control types [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md). **LazyForEach** or **Repeat** is
 * recommended to optimize performance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const ListItemGroup: ListItemGroupInterface;