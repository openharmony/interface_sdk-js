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
* 滚动条方向枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum ScrollBarDirection {

  /**
   * 纵向滚动条。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Vertical = 0,

  /**
   * 横向滚动条。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Horizontal = 1
}

/**
* 滚动条组件参数。
*
* > **说明：**
* >
* > - ScrollBar组件用于显示并控制所绑定可滚动组件的滚动位置。设置子组件时，该子组件作为自定义滚动条滑块，并随可滚动组件的滚动位置移动。
* >
* > - 滚动条组件与可滚动组件通过Scroller进行绑定，且只有当两者方向相同时，才能联动。一个可滚动组件可以绑定多个ScrollBar组件，一个ScrollBar组件只能绑定一个可滚动组件。
* >
* > - 从API version 12开始，ScrollBar组件没有子节点时，支持显示默认样式的滚动条。
* >
* > - ScrollBar组件的显隐是通过BarState设置，组件内部会自动根据BarState设置调整opacity来控制显隐，因此ScrollBar组件设置
* > [opacity]{@link CommonMethod#opacity(opacity: Optional<number | Resource>)}属性不生效。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface ScrollBarOptions {

  /**
   * 可滚动组件的控制器。用于与可滚动组件进行绑定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scroller: Scroller;

  /**
   * 滚动条的方向，控制可滚动组件对应方向的滚动。<br/>默认值：ScrollBarDirection.Vertical
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  direction?: ScrollBarDirection;

  /**
   * 滚动条状态。<br/>默认值：BarState.Auto
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
* 滚动条组件ScrollBar，用于配合可滚动组件使用，如[ArcList]{@link @ohos.arkui.ArcList}、[List]{@link ./list}、[Grid]{@link ./grid}、
* [Scroll]{@link ./scroll}、[WaterFlow]{@link ./water_flow}，提供可视化的滚动指示和控制能力，支持自定义滚动条样式。
*
* > **说明：**
* >
* > - ScrollBar主轴方向不设置大小时，采用父组件[布局约束]{@link ../../../arkui/FrameNode:LayoutConstraint}中的maxSize作为主轴方向大小。如果ScrollBar的父组件
* > 存在可滚动组件，如[ArcList]{@link @ohos.arkui.ArcList}、[List]{@link ./list}、[Grid]{@link ./grid}、[Scroll]{@link ./scroll}、
* > [WaterFlow]{@link ./water_flow}，建议设置ScrollBar主轴方向大小，否则ScrollBar主轴方向大小可能为无穷大。
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
   * 创建滚动条组件。
   *
   * @param { ScrollBarOptions } value - 滚动条组件参数。
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
* 除支持[通用属性]{@link ./common}外，还支持以下属性：
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
   * 设置滚动条是否嵌套滚动。用于多层滚动容器、嵌套列表等需要通过滚动条拖动内层可滚动组件并联动父级滚动的场景，仅当ScrollBar通过Scroller与可滚动组件绑定时生效。
   *
   * @param { Optional<boolean> } enabled - 是否执行嵌套滚动。当需要在多层滚动容器之间传递滚动事件时设置为true；不需要嵌套滚动时设置为false。<br/>默认值：false
   * @returns { ScrollBarAttribute } ScrollBar组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableNestedScroll(enabled: Optional<boolean>): ScrollBarAttribute;

  /**
   * 设置滚动条的颜色，仅滚动条不放置子组件时生效。
   *
   * @param { Optional<ColorMetrics> } color - 滚动条的颜色，仅滚动条不放置子组件时生效。<br/>默认值：ColorMetrics.numeric(0x66182431)
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
* 滚动条组件ScrollBar，用于配合可滚动组件使用，如[ArcList]{@link @ohos.arkui.ArcList}、[List]{@link list}、[Grid]{@link grid}、
* [Scroll]{@link scroll}、[WaterFlow]{@link water_flow}。
*
* > **说明：**
* >
* > - 该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
* >
* > - ScrollBar主轴方向不设置大小时，采用父组件[布局约束]{@link FrameNode:LayoutConstraint}中的maxSize作为主轴方向大小。如果ScrollBar的父组件存在可滚动组件，如
* > [ArcList]{@link @ohos.arkui.ArcList}、[List]{@link list}、[Grid]{@link grid}、[Scroll]{@link scroll}、
* > [WaterFlow]{@link water_flow}，建议设置ScrollBar主轴方向大小，否则ScrollBar主轴方向大小可能为无穷大。
*
* ###### 子组件
*
* 可以包含单个子组件。
*
* ###### ScrollBarOptions对象说明
*
* 滚动条组件参数。
*
* > **说明：**
* >
* > - ScrollBar组件负责定义可滚动区域的行为样式，ScrollBar的子节点负责定义滚动条的行为样式。
* >
* > - 滚动条组件与可滚动组件通过Scroller进行绑定，且只有当两者方向相同时，才能联动，ScrollBar与可滚动组件仅支持一对一绑定。
* >
* > - 从API version 12开始，ScrollBar组件没有子节点时，支持显示默认样式的滚动条。
* >
* > - ScrollBar组件的显隐是通过BarState设置，组件内部会自动根据BarState设置调整opacity来控制显隐，因此ScrollBar组件设置
* > [opacity](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-opacity.md#opacity18)属性不生效。
*
* **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称 | 类型 | 只读 | 可选 | 说明 |
* | -------- | -------- | -------- | -- | -------- |
* | scroller | [Scroller]{@link scroll:Scroller} | 否 | 否 | 可滚动组件的控制器。用于与可滚动组件进行绑定。 |
* | direction | [ScrollBarDirection](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-scrollbar.md#scrollbardirection枚举说明) | 否 | 是 | 滚动条的方向，控制可滚动组件对应方向的滚动。<br/>默认值：ScrollBarDirection.Vertical |
* | state | [BarState]{@link enums:BarState} | 否 | 是 | 滚动条状态。<br/>默认值：BarState.Auto |
*
* ###### ScrollBarDirection枚举说明
*
* 滚动条方向枚举。
*
* **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称 | 值 | 说明 |
* | -------- | ---- | -------- |
* | Vertical | 0 | 纵向滚动条。 |
* | Horizontal | 1 | 横向滚动条。 |
*
* ###### 示例1（设置子节点）
*
* 该示例为ScrollBar组件有子节点时的滚动条样式。
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
 * ![en-us_image_0000001232775585](figures/en-us_image_0000001232775585.gif)
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
 * ![en-us_image_scrollbar](figures/en-us_image_scrollbar.gif)
 *
 * ###### Example 3: Enabling Nested Scrolling
 *
 * This example demonstrates how to enable nested scrolling for a **ScrollBar** component using the
 * [enableNestedScroll]{@link ScrollBarAttribute#enableNestedScroll} attribute. This feature is available from API
 * version 20.
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
* ScrollBar组件实例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const ScrollBarInstance: ScrollBarAttribute;