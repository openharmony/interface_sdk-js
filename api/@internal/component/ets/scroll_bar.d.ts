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
 * Enumerates the scrolling directions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum ScrollBarDirection {

  /**
   * Vertical scrollbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Vertical,

  /**
   * Horizontal scrollbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Horizontal,
}

/**
 * Parameters of the **ScrollBar** component.
 *
 * > **NOTE**
 * >
 * > - The ScrollBar component is used to display and control the scroll position of the bound scrollable component.
 * > When child components are set, the child component serves as a custom scrollbar slider and moves with the scroll
 * > position of the scrollable component.
 * >
 * > - The scrollbar component is bound to the scrollable component through a Scroller, and they can be linked only when
 * > their directions are the same. A scrollable component can be bound to multiple ScrollBar components, while a
 * > ScrollBar component can be bound to only one scrollable component.
 * >
 * > - Since API version 12, the ScrollBar component supports displaying a scrollbar in the default style when it has no
 * > child nodes.
 * >
 * > - The visibility of the ScrollBar component is set through BarState. The component automatically adjusts opacity
 * > based on the BarState setting to control visibility. Therefore, the
 * > [opacity]{@link CommonMethod#opacity(opacity: Optional<number | Resource>)} attribute set for the ScrollBar
 * > component does not take effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface ScrollBarOptions {

  /**
   * Scroller, which can be bound to scrollable components for scrolling control.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scroller: Scroller;

  /**
   * Scrollbar direction in which scrollable components scroll.<br>Default value: **ScrollBarDirection.Vertical**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  direction?: ScrollBarDirection;

  /**
   * Scrollbar state.<br>Default value: **BarState.Auto**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  state?: BarState;
}

/**
 * The **ScrollBar** component is used together with scrollable components, such as
 * [ArcList]{@link @ohos.arkui.ArcList}, [List]{@link ./list}, [Grid]{@link ./grid}, [Scroll]{@link ./scroll}, and
 * [WaterFlow]{@link ./water_flow}, to provide visual scrolling indication and control capabilities, and supports custom
 * scrollbar styles.
 *
 * > **NOTE**
 * >
 * > - If the size of the main axis direction is not set for **ScrollBar**, the **maxSize** value in the
 * > [layout constraints]{@link ../../../arkui/FrameNode:LayoutConstraint} of the parent component is used. If the
 * > parent component of the **ScrollBar** component contains a scrollable component, such as
 * > [ArcList]{@link @ohos.arkui.ArcList}, [List]{@link ./list}, [Grid]{@link ./grid}, [Scroll]{@link ./scroll}, or
 * > [WaterFlow]{@link ./water_flow}, you are advised to set the size in the main axis direction of the **ScrollBar**;
 * > otherwise, the size in the main axis direction of **ScrollBar** may become infinite.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface ScrollBarInterface {

  /**
   * Creates a scroll bar.
   *
   * @param { ScrollBarOptions } value - Parameters of the **ScrollBar** component.
   * @returns { ScrollBarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (value: ScrollBarOptions): ScrollBarAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class ScrollBarAttribute extends CommonMethod<ScrollBarAttribute> {

  /**
   * Sets whether the scrollbar supports nested scrolling. It is used in scenarios such as multi-layer scroll containers
   * and nested lists where the inner scrollable component needs to be dragged through the scrollbar and linked with the
   * parent scrolling. It takes effect only when the ScrollBar is bound to a scrollable component through a Scroller.
   *
   * @param { Optional<boolean> } enabled - Whether to perform nested scrolling. Set this parameter to **true** to pass
   *     scroll events between multiple layers of scroll containers; set it to **false** when nested scrolling is not
   *     required.<br/>Default value: **false**
   * @returns { ScrollBarAttribute } The attribute of the scroll bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableNestedScroll(enabled: Optional<boolean>): ScrollBarAttribute;

  /**
   * Sets the color of the scrollbar. This parameter takes effect only when the scrollbar does not contain child
   * components.
   *
   * @param { Optional<ColorMetrics> } color - Color of the scrollbar. This parameter takes effect only when the
   *     scrollbar does not contain any child component.<br/>Default value: ColorMetrics.numeric(0x66182431)
   * @returns { ScrollBarAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  scrollBarColor(color: Optional<ColorMetrics>): ScrollBarAttribute;
}

/**
 * The **ScrollBar** component is used together with scrollable components, such as
 * [ArcList]{@link @ohos.arkui.ArcList}, [List]{@link ./list}, [Grid]{@link ./grid}, [Scroll]{@link ./scroll}, and
 * [WaterFlow]{@link ./water_flow}, to provide visual scrolling indication and control capabilities, and supports custom
 * scrollbar styles.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 8. Updates will be marked with a superscript to indicate their
 * > earliest API version.
 * >
 * > - If the size of the main axis direction is not set for **ScrollBar**, the **maxSize** value in the
 * > [layout constraints]{@link ../../../arkui/FrameNode:LayoutConstraint} of the parent component is used. If the
 * > parent component of the **ScrollBar** component contains a scrollable component, such as
 * > [ArcList]{@link @ohos.arkui.ArcList}, [List]{@link ./list}, [Grid]{@link ./grid}, [Scroll]{@link ./scroll}, or
 * > [WaterFlow]{@link ./water_flow}, you are advised to set the size in the main axis direction of the **ScrollBar**;
 * > otherwise, the size in the main axis direction of **ScrollBar** may become infinite.
 *
 * ###### Child Components
 *
 * This component can contain a single child component.
 *
 * ###### Example 1: Implementing a ScrollBar Component with Child Components
 *
 * This example illustrates the style of a **ScrollBar** component with child components.
 *
 * ```ts
 * // xxx.ets
 * @Entry
 * @Component
 * struct ScrollBarExample {
 *   private scroller: Scroller = new Scroller();
 *   private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 *   build() {
 *     Column() {
 *       Stack({ alignContent: Alignment.End }) {
 *         Scroll(this.scroller) {
 *           Flex({ direction: FlexDirection.Column }) {
 *             ForEach(this.arr, (item: number) => {
 *               Row() {
 *                 Text(item.toString())
 *                   .width('80%')
 *                   .height(60)
 *                   .backgroundColor('#3366CC')
 *                   .borderRadius(15)
 *                   .fontSize(16)
 *                   .textAlign(TextAlign.Center)
 *                   .margin({ top: 5 })
 *               }
 *             }, (item: number) => item.toString())
 *           }.margin({ right: 15 })
 *         }
 *         .width('90%')
 *         .scrollBar(BarState.Off)
 *         .scrollable(ScrollDirection.Vertical)
 *         ScrollBar({ scroller: this.scroller, direction: ScrollBarDirection.Vertical, state: BarState.Auto }) {
 *           Text()
 *             .width(20)
 *             .height(100)
 *             .borderRadius(10)
 *             .backgroundColor('#C0C0C0')
 *         }.width(20).backgroundColor('#ededed')
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * ![scrollBar1](figures/scrollBar1.gif)
 *
 * ###### Example 2: Implementing a ScrollBar Component Without Child Components
 *
 * This example illustrates the style of a **ScrollBar** component without child components. The
 * [scrollBarColor]{@link ScrollBarAttribute#scrollBarColor} attribute is added since API version 20.
 *
 * ```ts
 * import { ColorMetrics } from '@kit.ArkUI'
 * @Entry
 * @Component
 * struct ScrollBarExample {
 *   private scroller: Scroller = new Scroller();
 *   private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 *   @State scrollBarColor: ColorMetrics = ColorMetrics.rgba(24, 35, 48, 0.4);
 *   build() {
 *     Column() {
 *       Stack({ alignContent: Alignment.End }) {
 *         Scroll(this.scroller) {
 *           Flex({ direction: FlexDirection.Column }) {
 *             ForEach(this.arr, (item: number) => {
 *               Row() {
 *                 Text(item.toString())
 *                   .width('80%')
 *                   .height(60)
 *                   .backgroundColor('#3366CC')
 *                   .borderRadius(15)
 *                   .fontSize(16)
 *                   .textAlign(TextAlign.Center)
 *                   .margin({ top: 5 })
 *               }
 *             }, (item: number) => item.toString())
 *           }.margin({ right: 15 })
 *         }
 *         .width('90%')
 *         .scrollBar(BarState.Off)
 *         .scrollable(ScrollDirection.Vertical)
 *         ScrollBar({ scroller: this.scroller, direction: ScrollBarDirection.Vertical, state: BarState.Auto })
 *           .scrollBarColor(this.scrollBarColor)
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * ![en-us_image_scrollbar](figures/image-scrollbar.gif)
 *
 * ###### Example 3: Enabling Nested Scrolling
 *
 * Since API version 14, the ScrollBar component supports nested scrolling through the
 * [enableNestedScroll]{@link ScrollBarAttribute#enableNestedScroll} attribute. This example also uses the
 * [scrollBarColor]{@link ScrollBarAttribute#scrollBarColor} attribute, supported since API version 20, to set the
 * scrollbar color.
 *
 * ```ts
 * import { ColorMetrics } from '@kit.ArkUI'
 * @Entry
 * @Component
 * struct StickyNestedScroll {
 *   listScroller: Scroller = new Scroller();
 *   @State array: number[] = [];
 *   @State scrollBarColor: ColorMetrics = ColorMetrics.rgba(24, 35, 48, 0.4);
 *   @Styles
 *   listCard() {
 *     .backgroundColor(Color.White)
 *     .height(72)
 *     .width('100%')
 *     .borderRadius(12)
 *   }
 *   build() {
 *     Stack() {
 *       Scroll() {
 *         Column() {
 *           Text('Scroll Area')
 *             .width('100%')
 *             .height('40%')
 *             .backgroundColor('#0080DC')
 *             .textAlign(TextAlign.Center)
 *           List({ space: 10, scroller: this.listScroller }) {
 *             ForEach(this.array, (item: number) => {
 *               ListItem() {
 *                 Text('item' + item)
 *                   .fontSize(16)
 *               }
 *               .listCard()
 *             }, (item: number) => item.toString())
 *           }
 *           .scrollBar(BarState.Off)
 *           .nestedScroll({
 *             scrollForward: NestedScrollMode.PARENT_FIRST,
 *             scrollBackward: NestedScrollMode.SELF_FIRST
 *           })
 *           .height('100%')
 *         }
 *         .width('100%')
 *       }
 *       .edgeEffect(EdgeEffect.Spring)
 *       .backgroundColor('#DCDCDC')
 *       .scrollBar(BarState.Off)
 *       .width('100%')
 *       .height('100%')
 *       ScrollBar({ scroller: this.listScroller })
 *         .position({ right: 0 })
 *         .enableNestedScroll(true)
 *         .scrollBarColor(this.scrollBarColor)
 *     }
 *   }
 *   aboutToAppear() {
 *     for (let i = 0; i < 15; i++) {
 *       this.array.push(i);
 *     }
 *   }
 * }
 * ```
 *
 * ![EnableNestedScroll](figures/EnableNestedScroll.gif)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const ScrollBar: ScrollBarInterface;

/**
 * Defines ScrollBar Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const ScrollBarInstance: ScrollBarAttribute;
