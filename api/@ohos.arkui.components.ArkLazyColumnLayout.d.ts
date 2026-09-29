/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * This component is used to implement a vertical linear layout that supports lazy loading. Its parent component can 
 * only be [List]{@link ./@internal/component/ets/list}, [Scroll]{@link ./@internal/component/ets/scroll}, 
 * [WaterFlow]{@link ./@internal/component/ets/water_flow}, or [FlowItem]{@link ./@internal/component/ets/flow_item}. It
 * can also be encapsulated using custom components or [NodeContainer]{@link ./@internal/component/ets/node_container} 
 * components and then applied to the preceding components.
 * 
 * This component supports the nested lazy-loading containers, including 
 * [LazyVGridLayout]{@link ./@internal/component/ets/lazy_grid_layout}, 
 * [LazyVWaterFlowLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazyvwaterflowlayout.md), and 
 * **LazyColumnLayout** itself.
 * 
 * For more usage scenarios and complete examples of lazy loading layout, see 
 * [Creating Lazy Layouts](docroot://ui/arkts-layout-development-create-lazy-layout.md).
 * 
 * > **NOTE**
 * >
 * > - The **LazyColumnLayout** component's height adapts to content by default. You are advised not to set attributes 
 * > that fix or constrain the component's vertical dimension. Setting such attributes will cause display exceptions or 
 * > prevent normal scrolling. The attributes involved include [height]{@link CommonMethod#height(value: Length)}, the 
 * > **height** in [size]{@link CommonMethod#size}, **minHeight**\/**maxHeight** in 
 * > [constraintSize]{@link CommonMethod#constraintSize}, [aspectRatio]{@link CommonMethod#aspectRatio}, 
 * > [layoutWeight]{@link CommonMethod#layoutWeight}, and the scenario where 
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)} takes a [LayoutPolicy]{@link LayoutPolicy} 
 * > value.
 * >
 * > - When the parent component sets the main axis dimension, **LazyColumnLayout** performs lazy loading based on the 
 * > parent component's viewport. When the parent component does not set the main axis dimension, **LazyColumnLayout** 
 * > is stretched by its content, causing all child components to be loaded and laid out.
 * >
 * > - The conditions for lazy loading support of this component under different parent components are as follows: 1. In
 * > the **List** component, the layout direction of **List** must be vertical (that is, the 
 * > [listDirection]{@link ListAttribute#listDirection} attribute is set to **Axis.Vertical**). Using this component in 
 * > a non-vertical **List** will cause an app crash. When **List** has any one or more of the 
 * > [lanes]{@link ListAttribute#lanes(value: number | LengthConstrain, gutter?: Dimension)}, 
 * > [chainAnimation]{@link ListAttribute#chainAnimation}, or [scrollSnapAlign]{@link ListAttribute#scrollSnapAlign} 
 * > attributes set, the lazy loading feature of this component becomes invalid. 2. In the **Scroll** component, the 
 * > layout direction of **Scroll** must be vertical (that is, the [scrollable]{@link ScrollAttribute#scrollable} 
 * > attribute is set to **ScrollDirection.Vertical**). Using this component in a non-vertical **Scroll** will cause an 
 * > app crash. 3. In the **WaterFlow** component, the layout direction of **WaterFlow** must be vertical (that is, the 
 * > [layoutDirection]{@link WaterFlowAttribute#layoutDirection} attribute is set to **FlexDirection.Column**). Using 
 * > this component in a non-vertical **WaterFlow** will cause an app crash. When **WaterFlow** is in multi-column mode 
 * > or the layout direction is **FlexDirection.Row** or **FlexDirection.RowReverse**, the lazy loading feature of this 
 * > component becomes invalid. In addition, using this component in a **WaterFlow** with the layout direction set to 
 * > **FlexDirection.ColumnReverse** will cause display exceptions.
 * >
 * > - When lazy loading takes effect, this component loads only the child components within the parent component's 
 * > viewport, and preloads content of half a screen above and below the viewport during idle time between frames.
 * >
 * > - The parent component here refers to the nearest upper-level scrollable component of the current component. For 
 * > the specific meaning in other documents, refer to the corresponding content.
 *
 * @file
 * @kit ArkUI
 */

/**
 * Defines the lazy column layout component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface LazyColumnLayoutInterface {
  /**
   * Construct the lazy column layout attribute.
   *
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (): LazyColumnLayoutAttribute;
}

/**
 * Defines the lazy column layout attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyColumnLayoutAttribute extends CommonMethod<LazyColumnLayoutAttribute> {
  /**
   * Sets the vertical spacing between child components. If this attribute is not set, the default spacing is **0vp**.
   *
   * @param { LengthMetrics | undefined } space - Spacing between child components in the vertical direction.
   *     <br/>Value range: [0, +∞)
   *     <br/>If set to a value less than 0, **0vp** is used.
   *     <br/>If the method parameter is **undefined**, the value is restored to **0vp**.
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  space(space: LengthMetrics | undefined): LazyColumnLayoutAttribute;

  /**
   * Sets the alignment mode of the child components in the horizontal direction. If this API is not called,
   * the default alignment mode is **HorizontalAlign.Center**.
   *
   * @param { HorizontalAlign | undefined } value - Alignment mode of child components in the horizontal direction.
   *     <br>If the input parameter is **undefined**, **HorizontalAlign.Center** is used.
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  alignItems(value: HorizontalAlign | undefined): LazyColumnLayoutAttribute;

  /**
   * Sets the header component of the current **LazyColumnLayout**. If not set through this API,
   * no header component is set by default.
   *
   * > **NOTE**
   * >
   * > The header component is located at the top area of the container and is typically used to display titles,
   * > group descriptions, or other elements fixed before the content.
   * >
   * > When this component scrolls with the scrollable container into the viewport
   * > and the header stick-to-top mode is set through [sticky](#sticky),
   * > the header sticks to the top of the scrollable container's viewport.
   *
   * @param { CustomBuilder | undefined } builder - Constructor of the header component.
   *     <br/>When the method parameter is **undefined**,
   *     the current **LazyColumnLayout** does not set a header component.
   *     If a header component already exists, it will also be removed.
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  header(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute;

  /**
   * Sets the footer component of the current **LazyColumnLayout**. If not set through this API,
   * no footer component is set by default.
   *
   * > **NOTE**
   * >
   * > The footer component is located at the bottom area of the container
   * > and is typically used to display supplementary information, loading status,
   * > or other elements fixed after the content.
   * >
   * > When this component scrolls with the scrollable container into the viewport
   * > and the footer stick-to-bottom mode is set through [sticky](#sticky),
   * > the footer sticks to the bottom of the scrollable container's viewport.
   *
   * @param { CustomBuilder | undefined } builder - Constructor of the footer component.
   *     <br/>When the method parameter is **undefined**,
   *     the current **LazyColumnLayout** does not set a footer component.
   *     If a footer component already exists, it will also be removed.
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  footer(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute;

  /**
   * Sets the sticky style for [header](#header) and [footer](#footer).
   *
   * When this component scrolls with the scrollable container into the viewport and the header stick-to-top or footer
   * stick-to-bottom mode is set through **sticky**, the header sticks to the top of the scrollable container's
   * viewport, and the footer sticks to the bottom of the scrollable container's viewport.
   *
   * > **NOTE**
   * >
   * > Due to floating-point calculation precision, after setting **sticky**, a small gap may occasionally appear during
   * scrolling. This issue can be resolved by using [pixelRound]{@link CommonMethod#pixelRound} to round the current
   * component's pixels downward.
   *
   * @param { StickyStyle | undefined } sticky - Sticky style for the header and footer components.
   *     The **sticky** attribute can be set to **StickyStyle.Header** or **StickyStyle.Footer**,
   *     or to **StickyStyle.BOTH** to support both header stick-to-top and footer stick-to-bottom.
   *     <br/>When the method parameter is **undefined**, the default value **StickyStyle.None** is restored.
   *     <br/>If not set through this API, the header does not stick to the top
   *     and the footer does not stick to the bottom by default.
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  sticky(sticky: StickyStyle | undefined): LazyColumnLayoutAttribute;

  /**
   * Triggered when the index of a child component in the viewport of **LazyColumnLayout** changes.
   * It returns the start index and end index of the child components in the viewport.
   * If not set through this API, the viewport index change is not monitored by default.
   *
   * > **NOTE**
   * >
   * > When the parent component sets the main axis dimension and lazy loading takes effect,
   * > **LazyColumnLayout** performs lazy loading based on the parent component's viewport.
   * > In this case, in the **onVisibleIndexesChange** callback,
   * > **start** returns the index of the child component at the start position of the current viewport,
   * > and **end** returns the index of the child component at the end position of the current viewport.
   * >
   * > When the parent component does not set the main axis dimension, **LazyColumnLayout** is stretched by its content,
   * > causing all child components to be loaded and laid out. In this case, in the **onVisibleIndexesChange** callback,
   * > **start** returns **0**, and **end** returns the index of the last child component in the data source.
   * >
   * > The parent component here refers to the nearest upper-level scrollable component of the current component.
   * > For the specific meaning in other documents, refer to the corresponding content.
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - Callback invoked
   *                                     when the start and end index values of child components in the viewport change.
   *                                     <br/>If the method parameter is **undefined**, the listening is canceled.
   * @returns { LazyColumnLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): LazyColumnLayoutAttribute;
}

/**
 * Defines the lazy column layout component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const LazyColumnLayout: LazyColumnLayoutInterface;

/**
 * Defines the lazy column layout component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyColumnLayoutInstance: LazyColumnLayoutAttribute;
