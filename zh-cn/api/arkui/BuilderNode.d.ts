/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * 提供能够挂载系统组件的自定义节点BuilderNode。BuilderNode仅可作为叶子节点使用。
 * 使用方式参考[BuilderNode开发指南](docroot://ui/arkts-user-defined-arktsNode-builderNode.md)。最佳实践请参考
 * [组件动态创建-组件动态添加、更新和删除](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-ui-dynamic-operations#section153921947151012).
 * 
 * 与BuilderNode相比，ReactiveBuilderNode能通过多参数的无状态UI方法@Builder生成组件树。
 * 
 * > **说明：**
 * >
 * > 若传入的Builder的根节点为语法节点（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)/
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)/
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)/
 * > [ContentSlot](docroot://ui/rendering-control/arkts-rendering-control-contentslot.md)…）、
 * > [Span]{@link span}、[ContainerSpan]{@link container_span}、[SymbolSpan]{@link symbol_span}或自定义组件，
 * > 将额外生成一个[FrameNode]{@link FrameNode}，在节点树中显示为“BuilderProxyNode”，
 * > 这会导致树结构变化，影响某些测试的传递过程。
 * > 详情参见[BuilderNode内的BuilderProxyNode导致树结构发生变化](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#buildernode内的builderproxynode导致树结构发生变化)。
 * >
 * > - 如果在跨页面复用BuilderNode时显示异常，可参考
 * > [跨页面复用注意事项](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#跨页面复用注意事项)。
 * >
 * > - 当前不支持在预览器中使用BuilderNode。
 * >
 * > - BuilderNode下的自定义组件支持使用[@Prop装饰器](docroot://ui/state-management/arkts-prop.md)。
 * > 不支持使用[@Link装饰器](docroot://ui/state-management/arkts-link.md)来跨越BuilderNode同步外界的数据和状态。
 * >
 * > - 如果BuilderNode的子节点是自定义组件，不支持该自定义组件使用[@Reusable装饰器](docroot://ui/state-management/arkts-reusable.md)，
 * > 详细内容参见[BuilderNode在子自定义组件中使用@Reusable装饰器](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#buildernode在子自定义组件中使用reusable装饰器)。
 * >
 * > - 从API version 12开始，自定义组件支持接收[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例。
 * > 可以通过[传递LocalStorage实例](docroot://ui/state-management/arkts-localstorage.md#自定义组件接收localstorage实例)来使用
 * > LocalStorage相关的装饰器[@LocalStorageProp](docroot://ui/state-management/arkts-localstorage.md#localstorageprop)、
 * > [@LocalStorageLink](docroot://ui/state-management/arkts-localstorage.md#localstoragelink)。
 * >
 * > - 从API version 20开始，通过配置[BuildOptions](#buildoptions12)，
 * > 内部自定义组件的[@Consume](docroot://ui/state-management/arkts-provide-and-consume.md)支持接收
 * > 所在页面的[@Provide](docroot://ui/state-management/arkts-provide-and-consume.md)数据。
 * >
 * > - 其余装饰器行为未定义，不建议使用。
 * >
 * > - 仅支持在自定义组件中使用[Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)。
 * >
 * > - BuilderNode对象不支持使用JSON序列化。
 *
 * @file
 * @kit ArkUI
 */

import { UIContext } from '../@ohos.arkui.UIContext';

import { FrameNode } from './FrameNode';

import { Size } from './Graphics';

/**
* 节点渲染类型枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export declare enum NodeRenderType {

  /**
   * 表示该节点将被显示到屏幕上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  RENDER_TYPE_DISPLAY = 0,

  /**
   * 表示该节点将被导出为纹理。
   *
   * > **说明**
   * > > **说明：**
   * > >
   * > > - RENDER_TYPE_TEXTURE类型目前仅在[BuilderNode]{@link BuilderNode}持有组件树的根节点为自定义组件时以及
   * > > [XComponentNode]{@link XComponentNode:XComponentNode}中设置生效。
   * > >
   * > > - 在[BuilderNode]{@link BuilderNode}的情况下，目前在作为根节点的自定义组件中支持纹理导出的有以下组件：
   * > > [Badge]{@link ./../@internal/component/ets/badge}、[Blank]{@link ./../@internal/component/ets/blank}、
   * > > [Button]{@link ./../@internal/component/ets/button}、[CanvasGradient]{@link
   * ./../@internal/component/ets/canvas}、
   * > > [CanvasPattern]{@link ./../@internal/component/ets/canvas}、
   * > > [CanvasRenderingContext2D]{@link ./../@internal/component/ets/canvas}、
   * > > [Canvas]{@link ./../@internal/component/ets/canvas}、
   * > > [CheckboxGroup]{@link ./../@internal/component/ets/checkboxgroup}、
   * > > [Checkbox]{@link ./../@internal/component/ets/checkbox}、[Circle]{@link ./../@internal/component/ets/circle}、
   * > > [ColumnSplit]{@link ./../@internal/component/ets/column_split}、[Column]{@link
   * ./../@internal/component/ets/column}、
   * > > [ContainerSpan]{@link ./../@internal/component/ets/container_span}、
   * > > [Counter]{@link ./../@internal/component/ets/counter}、[DataPanel]{@link
   * ./../@internal/component/ets/data_panel}、
   * > > [Divider]{@link ./../@internal/component/ets/divider}、[Ellipse]{@link ./../@internal/component/ets/ellipse}、
   * > > [Flex]{@link ./../@internal/component/ets/flex}、[Gauge]{@link ./../@internal/component/ets/gauge}、
   * > > [Hyperlink]{@link ./../@internal/component/ets/hyperlink}、[ImageBitmap]{@link
   * ./../@internal/component/ets/canvas}、
   * > > [ImageData]{@link ./../@internal/component/ets/canvas}、[Image]{@link ./../@internal/component/ets/image}、
   * > > [Line]{@link ./../@internal/component/ets/line}、
   * > > [LoadingProgress]{@link ./../@internal/component/ets/loading_progress}、
   * > > [Marquee]{@link ./../@internal/component/ets/marquee}、[Matrix2D]{@link ./../@internal/component/ets/canvas}、
   * > > [OffscreenCanvasRenderingContext2D]{@link ./../@internal/component/ets/canvas}、
   * > > [OffscreenCanvas]{@link ./../@internal/component/ets/canvas}、[Path2D]{@link
   * ./../@internal/component/ets/canvas}、
   * > > [Path]{@link ./../@internal/component/ets/path}、[PatternLock]{@link ./../@internal/component/ets/pattern_lock}、
   * > > [Polygon]{@link ./../@internal/component/ets/polygon}、[Polyline]{@link ./../@internal/component/ets/polyline}、
   * > > [Progress]{@link ./../@internal/component/ets/progress}、[QRCode]{@link ./../@internal/component/ets/qrcode}、
   * > > [Radio]{@link ./../@internal/component/ets/radio}、[Rating]{@link ./../@internal/component/ets/rating}、
   * > > [Rect]{@link ./../@internal/component/ets/rect}、
   * > > [RelativeContainer]{@link ./../@internal/component/ets/relative_container}、
   * > > [RowSplit]{@link ./../@internal/component/ets/row_split}、[Row]{@link ./../@internal/component/ets/row}、
   * > > [Shape]{@link ./../@internal/component/ets/shape}、[Slider]{@link ./../@internal/component/ets/slider}、
   * > > [Span]{@link ./../@internal/component/ets/span}、[Stack]{@link ./../@internal/component/ets/stack}、
   * > > [TextArea]{@link ./../@internal/component/ets/text_area}、[TextClock]{@link
   * ./../@internal/component/ets/text_clock}
   * > > 、[TextInput]{@link ./../@internal/component/ets/text_input}、
   * > > [TextTimer]{@link ./../@internal/component/ets/text_timer}、[Text]{@link ./../@internal/component/ets/text}、
   * > > [Toggle]{@link ./../@internal/component/ets/toggle}、[Video]{@link
   * ./../@internal/component/ets/video}（不含全屏播放能力）、
   * > > [Web]{@link ./../@internal/component/ets/web}、[XComponent]{@link ./../@internal/component/ets/xcomponent}。
   * > >
   * > > - 从API version 12开始，新增以下组件支持纹理导出：[DatePicker]{@link ./../@internal/component/ets/date_picker}、
   * > > [ForEach]{@link ./../@internal/component/ets/for_each}、[Grid]{@link ./../@internal/component/ets/grid}、
   * > > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
   * > > [LazyForEach]{@link ./../@internal/component/ets/lazy_for_each}、[List]{@link
   * ./../@internal/component/ets/list}、
   * > > [Scroll]{@link ./../@internal/component/ets/scroll}、[Swiper]{@link ./../@internal/component/ets/swiper}、
   * > > [TimePicker]{@link ./../@internal/component/ets/time_picker}、
   * > > [@Component](docroot://ui/state-management/arkts-create-custom-components.md#component)修饰的自定义组件、
   * > > [NodeContainer]{@link ./../@internal/component/ets/node_container}以及
   * > > [NodeContainer]{@link ./../@internal/component/ets/node_container}下挂载的[FrameNode]{@link FrameNode}和
   * > > [RenderNode]{@link RenderNode:RenderNode}。
   * > >
   * > > - 使用方式可参考[同层渲染绘制](docroot://web/web-same-layer.md)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  RENDER_TYPE_TEXTURE = 1
}

/**
* 创建BuilderNode时的可选参数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface RenderOptions {

  /**
   * 节点的理想大小。
   *
   * 默认值：{ width: 0, height: 0 }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selfIdealSize?: Size;

  /**
   * 节点的渲染类型。
   *
   * 默认值：NodeRenderType.RENDER_TYPE_DISPLAY
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type?: NodeRenderType;

  /**
   * 纹理接收方的surfaceId。纹理接收方一般为
   * [OH_NativeImage](docroot://reference/apis-arkgraphics2d/capi-oh-nativeimage-oh-nativeimage.md)。
   *
   * surfaceId仅当type为NodeRenderType.RENDER_TYPE_TEXTURE时生效。
   *
   * 默认值：""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  surfaceId?: string;
}

/**
* build的可选参数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface BuildOptions {

  /**
   * 是否支持Builder嵌套Builder进行使用。其中，true表示支持，false表示不支持。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  nestingBuilderSupported?: boolean;

  /**
   * 给当前BuilderNode设置LocalStorage，挂载在此BuilderNode下的自定义组件共享该LocalStorage。如果自定义组件构造函数同时也传入LocalStorage，优先使用构造函数中传入的
   * LocalStorage。
   *
   * 默认值：null
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  localStorage?: LocalStorage;

  /**
   * 定义BuilderNode内[状态管理V1](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)自定义组件的
   * [@Consume](docroot://ui/state-management/arkts-provide-and-consume.md)变量是否与BuilderNode外部的
   * [@Provide](docroot://ui/state-management/arkts-provide-and-consume.md)变量双向同步，BuilderNode内
   * [状态管理V2](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)自定义组件的
   * [@Consumer](docroot://ui/state-management/arkts-new-provider-and-consumer.md)变量是否与BuilderNode外部的
   * [@Provider](docroot://ui/state-management/arkts-new-provider-and-consumer.md)变量双向同步。
   *
   * 从API version 20开始支持状态管理V1自定义组件的双向同步，从API version 23开始支持状态管理V2自定义组件的双向同步。
   *
   * true表示支持，false表示不支持。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableProvideConsumeCrossing?: boolean;
}

/**
* [postInputEvent]{@link BuilderNode.postInputEvent}的参数，定义要发送的输入事件类型。
*
 * @unionmember { TouchEvent } Touch  触摸事件。
 * @unionmember { MouseEvent } Mouse  鼠标事件。
 * @unionmember { AxisEvent } Axis  轴事件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type InputEventType = TouchEvent | MouseEvent | AxisEvent;

/**
* class BuilderNode\<Args extends Object[]>
*
* BuilderNode支持通过无状态的UI方法[@Builder](docroot://ui/state-management/arkts-builder.md)生成组件树，并持有组件树的根节点。不支持定义为状态变量。
* BuilderNode中持有的FrameNode仅用于将该BuilderNode作为子节点挂载到其他FrameNode上。对BuilderNode持有的FrameNode进行属性设置与子节点操作可能会产生未定义行为，因此不建议通过
* BuilderNode的[getFrameNode]{@link BuilderNode.getFrameNode}方法和[FrameNode]{@link FrameNode}的
* [getRenderNode]{@link FrameNode:FrameNode.getRenderNode}方法获取RenderNode，并通过[RenderNode]{@link RenderNode:RenderNode}的接
* 口对其进行属性设置与子节点操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class BuilderNode<Args extends Object[]> {

  /**
   * 当将BuilderNode生成的内容嵌入到其它RenderNode中显示时，需要显式指定RenderOptions中的selfIdealSize，否则Builder内的节点默认父组件布局约束为[0, 0]。该场景下，若不设置
   * selfIdealSize则认为BuilderNode中子树的根节点大小为[0, 0]。
   *
   * @param { UIContext } uiContext - UI上下文，获取方式可参考
   *     [UIContext获取方法](docroot://ui/arkts-global-interface.md#uicontext获取方法)。
   * @param { RenderOptions } options - BuilderNode的构造可选参数。<br/>默认值：undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(uiContext: UIContext, options?: RenderOptions);

  /**
   * 依照传入的对象创建组件树，并持有组件树的根节点。无状态的UI方法[@Builder](docroot://ui/state-management/arkts-builder.md)最多拥有一个根节点。
   *
   * 支持自定义组件。
   *
   * > **说明**
   * >
   * > - @Builder嵌套使用的时候需要保证内外的@Builder方法的入参对象一致。
   * >
   * > - 最外层的@Builder只支持一个入参。
   * >
   * > - build的参数是值传递，需要使用[update]{@link BuilderNode.update}接口进行更新。
   * >
   * > - 需要操作BuilderNode中的对象时，需要保证其引用不被回收。当BuilderNode对象被虚拟机回收之后，它的[FrameNode]{@link FrameNode}、
   * > [RenderNode]{@link RenderNode:RenderNode}对象也会与后端节点解引用。即从BuilderNode中获取的FrameNode对象不对应任何一个节点。
   * >
   * > - BuilderNode对象会持有实体节点的引用。如果不需要使用BuilderNode前端对象管理后端节点，可以调用[dispose]{@link BuilderNode.dispose}接口，实现前后端对象的解绑。
   *
   * @param { WrappedBuilder<Args> } builder - 创建对应节点树的时候所需的无状态UI方法
   *     [@Builder](docroot://ui/state-management/arkts-builder.md)。
   * @param { Object } arg - builder的入参。当前仅支持一个入参，且入参对象类型与@Builder定义的入参类型保持一致。<br/>默认值：undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  build(builder: WrappedBuilder<Args>, arg?: Object): void;

  /**
   * 依照传入的对象创建组件树，并持有组件树的根节点。无状态的UI方法[@Builder](docroot://ui/state-management/arkts-builder.md)最多拥有一个根节点。
   *
   * 支持自定义组件。相比
   * [build(builder: WrappedBuilder\<Args>, arg?: Object)]{@link BuilderNode:BuilderNode.build}
   * 接口，本接口支持builder的配置参数，用于判断是否支持@Builder中嵌套@Builder。
   *
   * > **说明**
   * >
   * > - @Builder进行创建和更新的规格参考[@Builder](docroot://ui/state-management/arkts-builder.md)。
   * >
   * > - 最外层的@Builder只支持一个入参。
   *
   * @param { WrappedBuilder<Args> } builder - 创建对应节点树的时候所需的无状态UI方法
   *     [@Builder](docroot://ui/state-management/arkts-builder.md)。
   * @param { Object } arg - builder的入参。当前仅支持一个入参，且入参对象类型与@Builder定义的入参类型保持一致。
   * @param { BuildOptions } options - builder的配置参数，判断是否支持@Builder中嵌套@Builder的行为。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  build(builder: WrappedBuilder<Args>, arg: Object, options: BuildOptions): void;

  /**
   * 根据提供的参数更新BuilderNode，该参数与[build]{@link BuilderNode:BuilderNode.build}方法调用时传入的参数类型相同。对
   * 自定义组件进行update的时候需要在自定义组件中将使用的变量定义为[@Prop](docroot://ui/state-management/arkts-prop.md)类型。
   *
   * @param { Object } arg - 用于更新BuilderNode的参数，和
   *     [build]{@link BuilderNode:BuilderNode.build}调用时传入的参数类型一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  update(arg: Object): void;

  /**
   * 获取BuilderNode中的[FrameNode]{@link FrameNode}。在BuilderNode执行build操作之后，才会生成FrameNode。
   *
   * @returns { FrameNode | null } **FrameNode** object. If no such object is held by the **BuilderNode** instance, null
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getFrameNode(): FrameNode | null;

  /**
   * 将原始事件派发到某个BuilderNode创建出的FrameNode上。
   *
   * postTouchEvent是从组件树的中间节点往下分发，需要变换到父组件坐标系才能分发成功，参考下图。
   *
   * OffsetA为buildNode相对于父组件的偏移量，可以通过FrameNode中的[getPositionToParent]{@link FrameNode:FrameNode.getPositionToParent}获取。
   * OffsetB为point点相对于buildNode的偏移量，可以通过
   * [TouchEvent](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent对象说明) 获取。OffsetC为
   * OffsetA与OffsetB的和，是传给postTouchEvent的最终结果。
   *
   * ![postTouchEvent](docroot://reference/apis-arkui/figures/postTouchEvent.PNG)
   *
   * > **说明：**
   * >
   * > - 传入的坐标值需要转换为px，如果builderNode有仿射变换，则需要再叠加仿射变换。
   * >
   * > - 在[webview]{@link docroot://reference/apis-arkweb/webview}中，内部已经处理过坐标系变换，可以将TouchEvent事件直接下发。
   * >
   * > - 同一时间戳，postTouchEvent只能调用一次。
   * >
   * > - 不支持[UIExtensionComponent]{@link ./../@internal/component/ets/ui_extension_component}。
   *
   * @param { TouchEvent } event - 触摸事件。
   * @returns { boolean } 派发事件是否成功。true为已命中响应事件的组件，false为未命中任何可响应事件的组件。<br/>**说明：** <br/>如果未按照预期命中组件，需要确认以下几点：<br/>1.坐标系
   *     是否转换正确。<br/>2.组件是否可交互状态。<br/>3.是否绑定事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  postTouchEvent(event: TouchEvent): boolean;

  /**
   * 立即释放当前BuilderNode对象对[实体节点](docroot://ui/arkts-user-defined-node.md#基本概念)的引用关系。关于BuilderNode的解绑场景请参见
   * [节点解绑](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。
   *
   * > **说明：**
   * >
   * > 当BuilderNode对象调用dispose之后，会与后端实体节点解除引用关系。若前端对象BuilderNode无法释放，容易导致内存泄漏。建议在不再需要对该BuilderNode对象进行操作时，开发者主动调用dispose
   * > 释放后端节点，以减少引用关系的复杂性，降低内存泄漏的风险。具体场景可见
   * > [BuilderNode前后端循环引用导致的内存泄漏问题](docroot://ui/arkts-user-defined-node-faq.md#buildernode前后端循环引用导致的内存泄漏问题)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * 触发BuilderNode中的自定义组件的复用。组件复用请参见[@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。关于BuilderNode
   * 的解绑场景请参见[节点解绑](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。从API版本26.0.0开始，BuilderNode中的自定义
   * 组件支持V2组件复用，请参见[@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * @param { Object } [param] - 用于复用BuilderNode的参数。该参数将直接用于BuilderNode中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定义行为。
   *     调用此方法将同步触发内部自定义组件的
   *     [aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)生命周期回调，并
   *     将该参数作为回调的入参。默认值为undefined，此时BuilderNode中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reuse(param?: Object): void;

  /**
   * 触发BuilderNode中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见
   * [@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。从API版本26.0.0开始，BuilderNode中的自定义组件支持V2组件复用，请参
   * 见[@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * > **说明：**
   * >
   * > BuilderNode通过reuse和recycle完成其内外自定义组件之间的复用事件传递，具体使用场景请参见
   * > [BuilderNode调用reuse和recycle接口实现节点复用能力](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#
   *     buildernode调用reuse和recycle接口实现节点复用能力)
   * > 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  recycle(): void;

  /**
   * 传递系统环境变化事件，触发节点的全量更新。系统环境变化的相关信息请参见
   * [@ohos.app.ability.Configuration (环境变量)]{@link ./../@ohos.app.ability.Configuration:Configuration}。
   *
   * > **说明：**
   * >
   * > updateConfiguration接口用于通知对象更新，更新所使用的系统环境由应用当前的系统环境变化决定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateConfiguration(): void;

  /**
   * 将事件分发到目标节点。
   *
   * offsetA为builderNode相对于父组件的偏移，offsetB为命中位置相对于builderNode的偏移，offsetC为offsetA+offsetB，最终输入给postInputEvent中的window信息。
   *
   * ![接口坐标换算示例图](docroot://reference/apis-arkui/figures/postInputEvent-point.png)
   *
   * > **说明：**
   * >
   * > - 传入的坐标值需要转换为px，坐标转换示例可以参考下面示例代码。
   * >
   * > - 鼠标左键点击事件将转换为触摸事件，转发时应注意不在外层同时绑定触摸事件与鼠标事件，否则可能导致坐标偏移。这是由于在事件转换过程中，SourceType不会发生变化，规格可查看
   * > [onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)。
   * >
   * > - 注入事件为轴事件[（AxisEvent）]{@link ./../@internal/component/ets/common}时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发
   * > [RotationGesture]{@link ./../@internal/component/ets/gesture}。
   * >
   * > - 转发的事件会在被分发到的目标组件所在的子树里做touchtest，并触发对应手势，原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。
   * >
   * > - 如果是开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段，轴事件的scrollStep字段。要保证事件的完整，比如触摸事件的
   * > [TouchType]{@link ./../@internal/component/ets/enums}中DOWN和UP字段都要有，防止出现未定义行为。
   * >
   * > - [webview]{@link ./../@ohos.web.webview:webview}已经处理过坐标系变换，可以将事件直接下发。
   * >
   * > - postTouchEvent接口需要提供手势坐标相对于post事件对端内的局部坐标，postInputEvent接口需要提供手势坐标相对于post事件对端内的窗口坐标。
   * >
   * > - 不建议同一个事件转发多次。不支持[UIExtensionComponent]{@link ./../@internal/component/ets/ui_extension_component}。
   *
   * @param { InputEventType } event - 用于透传的输入事件。
   * @returns { boolean } 事件是否被成功派发。如果事件派发成功，则返回true；否则，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  postInputEvent(event: InputEventType): boolean;

  /**
   * 将含有竞争策略的事件分发到目标UI组件节点。
   *
   * 接口调用前需要将event转化为对应的事件，并对event中的window参数的坐标进行转化：offsetA表示builderNode相对于父组件的偏移量，offsetB为命中位置相对于builderNode的偏移量，
   * offsetC是offsetA与offsetB之和，最终作为event中的window参数，传递给postInputEventWithStrategy方法，具体请参考示例。
   *
   * ![接口坐标换算示例图](docroot://reference/apis-arkui/figures/postInputEvent-point.png)
   *
   * > **说明：**
   * >
   * > - 传入的坐标值单位需要转换为px，坐标转换示例可以参考下面示例代码。
   * >
   * > - 系统在处理鼠标左键点击事件时将转换为触摸事件，转发时应注意不在外层同时绑定触摸事件与鼠标事件，否则可能导致坐标偏移。这是由于在事件转换过程中，
   * > [TouchType]{@link ./../@internal/component/ets/enums}不会发生变化，规格可查看
   * > [onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)。
   * >
   * > - 注入事件为轴事件[AxisEvent]{@link ./../@internal/component/ets/common}时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发旋转手势
   * > [RotationGesture]{@link ./../@internal/component/ets/gesture}。
   * >
   * > - 转发的事件会在被分发到的目标组件及其子组件里做事件处理，并触发对应手势。可以通过入参控制当前组件和目标组件手势是否为竞争关系。
   * >
   * > - 如果event转化为对应的事件后，该事件为开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段，轴事件的scrollStep字段。要保证事件的完整，比如触摸事件的
   * > [TouchType]{@link ./../@internal/component/ets/enums}中必须同时包含DOWN和UP两个字段，防止出现程序异常或意外崩溃。
   * >
   * > - 支持同一个事件转发多次，不支持[UIExtensionComponent]{@link ./../@internal/component/ets/ui_extension_component}调用本接口
   * > 。
   *
   * @param { InputEventType } event - 用于事件分发的输入事件。
   * @param { CompetitionStrategy } [competitionStrategy] - Whether the gesture for posting the event is in
   *     a competition scenario. By default, the gesture is not in a competition scenario.
   * @returns { boolean } 事件是否被成功派发。如果成功，则返回true；否则，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean;

  /**
   * 设置当前BuilderNode对象是否继承父组件中自定义组件的冻结策略。如果设置继承状态为false，则BuilderNode对象的冻结策略为false。在这种情况下，节点在不活跃状态下不会被冻结。
   * > **说明：**
   * >
   * > BuilderNode设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或
   * > ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，其冻结策略不会传递给子组件
   *
   * @param { boolean } enabled - BuilderNode对象是否设置为继承父组件中自定义组件的冻结策略。true为继承父组件中自定义组件的冻结策略，false为不继承父组件中自定义组件的冻结策略。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * 查询当前BuilderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在
   * dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;
}

/**
* ReactiveBuilderNode支持通过无状态的UI方法[@Builder](docroot://ui/state-management/arkts-builder.md)生成组件树，并持有该组件树的根节点，不支持定义为状态变量
* 。ReactiveBuilderNode中持有的[FrameNode]{@link FrameNode}仅用于将此ReactiveBuilderNode作为子节点挂载到其他FrameNode上。对ReactiveBuilderNode
* 持有的FrameNode进行属性设置与子节点操作可能会导致未定义行为，因此不建议通过ReactiveBuilderNode的[getFrameNode]{@link BuilderNode.getFrameNode}方法和
* [FrameNode]{@link FrameNode}节点的[getRenderNode]{@link FrameNode:FrameNode.getRenderNode}方法获取RenderNode，并通过
* [RenderNode]{@link RenderNode:RenderNode}的接口对其进行属性设置与子节点操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class ReactiveBuilderNode<Args extends Object[]> {

  /**
   * 用于构造ReactiveBuilderNode类。当将ReactiveBuilderNode生成的内容嵌入到其它[RenderNode]{@link RenderNode:RenderNode}中显示时，需要显式指定
   * [RenderOptions]{@link BuilderNode:RenderOptions}中的[selfIdealSize]{@link BuilderNode:RenderOptions}，否则
   * ReactiveBuilderNode内的节点默认父组件布局约束为[0, 0]。调用此接口，若不设置selfIdealSize则认为ReactiveBuilderNode中子树的根节点大小为[0, 0]。
   *
   * @param { UIContext } uiContext - UI上下文，获取方式可参考
   *     [UIContext获取方法](docroot://ui/arkts-global-interface.md#uicontext获取方法)。uiContext需要为一个有效的值，即UI上下文正确
   *     ，如果传入非法值或者未设置，会导致创建失败。
   * @param { RenderOptions } [options] - ReactiveBuilderNode的构造可选参数，参数用于构造节点的理想大小和节点的渲染类型。<br/>默认值：undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  constructor(uiContext: UIContext, options?: RenderOptions);

  /**
   * 依照传入的对象创建组件树，并持有组件树的根节点。无状态的UI方法[@Builder](docroot://ui/state-management/arkts-builder.md)最多拥有一个根节点。
   *
   * 支持自定义组件。
   *
   * > **说明：**
   * >
   * > @Builder进行创建和更新的规格参考[@Builder](docroot://ui/state-management/arkts-builder.md)。
   *
   * @param { WrappedBuilder<Args> } builder - 创建对应节点树时所需的无状态UI方法
   *     [@Builder](docroot://ui/state-management/arkts-builder.md)。
   * @param { BuildOptions } config - 作用是配置Builder的构建行为，BuildOptions中所有属性都是可选的，默认值为BuildOptions中对应的默认值。
   * @param { Args } args - Input arguments of the builder, which are used to construct the **builder** function
   *     encapsulated by the **WrappedBuilder** object. Multiple arguments are supported. The default value is
   *     **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  build(builder: WrappedBuilder<Args>, config: BuildOptions, ...args: Args): void;

  /**
   * 获取ReactiveBuilderNode中的[FrameNode]{@link FrameNode}。在ReactiveBuilderNode执行build操作之后，才会生成FrameNode。
   *
   * @returns { FrameNode | null } **FrameNode** object. If no such object is held by the **ReactiveBuilderNode**
   *     instance, **null** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  getFrameNode(): FrameNode | null;

  /**
   * 将原始事件派发到某个ReactiveBuilderNode创建的FrameNode上。
   *
   * postTouchEvent是从组件树的中间节点往下分发，需要变换到父组件坐标系才能分发成功，参考下图。
   *
   * OffsetA为buildNode相对于父组件的偏移量，可以通过FrameNode中的[getPositionToParent]{@link FrameNode:FrameNode.getPositionToParent}获取。
   * OffsetB为point点相对于buildNode的偏移量，可以通过
   * [TouchEvent](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent对象说明)获取。OffsetC为
   * OffsetA与OffsetB的和，是传给postTouchEvent的最终结果。
   *
   * ![postTouchEvent](docroot://reference/apis-arkui/figures/postTouchEvent.PNG)
   *
   * > **说明：**
   * >
   * > 传入的坐标值需要转换为px，如果builderNode有仿射变换，则需要再叠加仿射变换。
   * >
   * > 在[webview]{@link ./../@ohos.web.webview:webview}中，内部已经处理过坐标系变换，可以将TouchEvent事件直接下发。
   * >
   * > 同一时间戳，postTouchEvent只能调用一次。
   * >
   * > postTouchEvent的参数不支持[UIExtensionComponent]{@link ./../@internal/component/ets/ui_extension_component}。
   *
   * @param { TouchEvent } event - 触摸事件。
   * @returns { boolean } 派发事件是否成功。true：已命中响应事件的组件；false：未命中任何可响应事件的组件。<br/>**说明：** <br/>如果未按照预期命中组件，需要确认：<br/>1.坐标系是否转
   *     换正确。<br/>2.组件是否可交互状态。<br/>3.是否绑定事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  postTouchEvent(event: TouchEvent): boolean;

  /**
   * 立即释放当前ReactiveBuilderNode对象对[实体节点](docroot://ui/arkts-user-defined-node.md#基本概念)的引用关系。关于ReactiveBuilderNode的解绑场景请参
   * 见[节点解绑](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。
   *
   * > **说明：**
   * >
   * > 当ReactiveBuilderNode对象调用dispose之后，会与后端实体节点解除引用关系。若前端对象ReactiveBuilderNode无法释放，容易导致内存泄漏。建议在不再需要对该
   * > ReactiveBuilderNode对象进行操作时，开发者主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏的风险。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  dispose(): void;

  /**
   * 触发ReactiveBuilderNode中的自定义组件的复用。组件复用请参见[@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。关于
   * ReactiveBuilderNode的解绑场景请参见[节点解绑](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。从API版本26.0.
   * 0开始，ReactiveBuilderNode中的自定义组件支持V2组件复用，请参见
   * [@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * ReactiveBuilderNode通过reuse和[recycle]{@link ReactiveBuilderNode.recycle}完成其内外自定义组件之间的复用事件传递，
   * 具体使用场景请参见
   * [BuilderNode调用reuse和recycle接口实现节点复用能力](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#
   *     buildernode调用reuse和recycle接口实现节点复用能力)
   * 。
   *
   * @param { Object } [param] - 用于复用[ReactiveBuilderNode]{@link ReactiveBuilderNode}的参数。该参数将直接用于
   *     [ReactiveBuilderNode]{@link ReactiveBuilderNode}中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定义行为。调用此方法将同步触发内部自
   *     定义组件的[aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)生命
   *     周期回调，并将该参数作为回调的入参。默认值为undefined，此时ReactiveBuilderNode中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  reuse(param?: Object): void;

  /**
   * 触发ReactiveBuilderNode中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见
   * [@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。从API版本26.0.0开始，
   * ReactiveBuilderNode中的自定义组件支持V2组件复用，请参见
   * [@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * ReactiveBuilderNode通过[reuse]{@link ReactiveBuilderNode.reuse}和recycle完成其内外自定义组件之间的复用事件传递，
   * 具体使用场景请参见
   * [BuilderNode调用reuse和recycle接口实现节点复用能力](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#
   *     buildernode调用reuse和recycle接口实现节点复用能力)
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  recycle(): void;

  /**
   * 传递系统环境变化事件，触发节点的全量更新。可用于通知对象更新，是否更新所使用的系统环境由应用当前的系统环境变化决定。系统环境变化的相关信息请参见
   * [@ohos.app.ability.Configuration (环境变量)]{@link ./../@ohos.app.ability.Configuration:Configuration}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  updateConfiguration(): void;

  /**
   * 根据提供的参数更新ReactiveBuilderNode。当ReactiveBuilderNode中
   * [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md)对象封装的builder函数中使用的绑定参数是由V1装饰器（如@Observed）装饰的类实
   * 例时，需要在此类数据变更后手动调用此方法以更新数据，当使用V2装饰器（如@ObservedV2）装饰的类实例时，支持自动更新，无需手动调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  flushState(): void;

  /**
   * 将输入事件分发到ReactiveBuilderNode管理的目标节点。
   *
   * offsetA为builderNode相对于父组件的偏移，offsetB为命中位置相对于builderNode的偏移，offsetC为offsetA+offsetB，最终输入给postInputEvent当中。
   *
   * ![接口坐标换算示例图](docroot://reference/apis-arkui/figures/postTouchEvent.PNG)
   *
   * > **说明：**
   * >
   * > 传入的坐标值需要转换为px，坐标转换示例可以参考下面示例代码。
   * >
   * > 鼠标左键点击事件将转换为触摸事件，转发时应注意不在外层且绑定触摸事件与鼠标事件，否则可能导致坐标偏移。这是由于在事件转换过程中，事件的
   * > [SourceType](docroot://reference/apis-arkui/arkui-ts/ts-gesture-settings.md#sourcetype枚举说明8)不会发生变化，规格可查看
   * > [onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)。
   * >
   * > 注入事件为轴事件[（AxisEvent）]{@link ./../@internal/component/ets/common}时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发
   * > [RotationGesture]{@link ./../@internal/component/ets/gesture}。
   * >
   * > 转发的事件会在被分发到的目标组件所在的子树里做触摸测试（TouchTest），并触发对应手势，原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。
   * >
   * > 如果是开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段、轴事件的scrollStep字段，同时要保证事件的完整，比如触摸事件的
   * > [TouchType]{@link ./../@internal/component/ets/enums}中DOWN和UP字段都要有，防止出现未定义行为。
   * >
   * > [webview]{@link ./../@ohos.web.webview:webview}已经处理过坐标系变换，可以将事件直接下发。
   * >
   * > postTouchEvent接口需要提供手势坐标相对于输入事件对端内的局部坐标，postInputEvent接口需要提供手势坐标相对于输入事件对端内的窗口坐标。
   * >
   * > 不建议同一个事件转发多次。
   * >
   * > postInputEvent的参数不支持[UIExtensionComponent]{@link ./../@internal/component/ets/ui_extension_component}。
   *
   * @param { InputEventType } event - 待分发的输入事件。
   * @returns { boolean } 事件是否被成功分发。如果事件分发成功，则返回true；否则，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  postInputEvent(event: InputEventType): boolean;

  /**
   * 将含有竞争策略的事件分发到目标UI组件节点。
   *
   * 接口调用前需要将event转化为对应的事件，并对event中的window参数的坐标进行转化：offsetA表示ReactiveBuilderNode相对于父组件的偏移量，offsetB为命中位置相对于
   * ReactiveBuilderNode的偏移量，offsetC是offsetA与offsetB之和，最终作为event中的window参数，传递给postInputEventWithStrategy方法，具体请参考示例。
   *
   * ![接口坐标换算示例图](docroot://reference/apis-arkui/figures/postInputEvent-point.png)
   *
   * > **说明：**
   * >
   * > - 传入的坐标值单位需要转换为px，坐标转换示例可以参考下面示例代码。
   * >
   * > - 系统在处理鼠标左键点击事件时将转换为触摸事件，转发时应注意不在外层同时绑定触摸事件与鼠标事件，否则可能导致坐标偏移。这是由于在事件转换过程中，
   * > [TouchType]{@link ./../@internal/component/ets/enums}不会发生变化，规格可查看
   * > [onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)。
   * >
   * > - 注入事件为轴事件[AxisEvent]{@link ./../@internal/component/ets/common}时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发旋转手势
   * > [RotationGesture]{@link ./../@internal/component/ets/gesture}。
   * >
   * > - 转发的事件会在被分发到的目标组件及其子组件里做事件处理，并触发对应手势。可以通过入参控制当前组件和目标组件手势是否为竞争关系。
   * >
   * > - 如果event转化为对应的事件后，该事件为开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段，轴事件的scrollStep字段。要保证事件的完整，比如触摸事件的
   * > [TouchType]{@link ./../@internal/component/ets/enums}中必须同时包含DOWN和UP两个字段，防止出现程序异常或意外崩溃。
   * >
   * > - 支持同一个事件转发多次，不支持[UIExtensionComponent]{@link ./../@internal/component/ets/ui_extension_component}调用本接
   * > 口。
   *
   * @param { InputEventType } event - 用于事件分发的输入事件。
   * @param { CompetitionStrategy } [competitionStrategy] - 分发事件的手势是否为竞争场景，默认为非竞争。
   * @returns { boolean } 事件是否被成功派发。如果成功，则返回true；否则，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean;

  /**
   * 设置当前ReactiveBuilderNode对象是否继承父组件中自定义组件的冻结策略。如果设置继承状态为false，则ReactiveBuilderNode对象的冻结策略为false。在这种情况下，节点在不活跃状态下不会被冻结
   * 。
   *
   * > **说明：**
   * >
   * > ReactiveBuilderNode设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或
   * > ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，其冻结策略不会传递给子组件。
   *
   * @param { boolean } enabled - ReactiveBuilderNode对象是否设置为继承父组件中自定义组件的冻结策略。true为继承父组件中自定义组件的冻结策略，false为不继承父组件中自定义组件的冻
   *     结策略。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * 查询当前ReactiveBuilderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。因为在节点
   * dispose后可能仍存在被调用dispose接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  isDisposed(): boolean;
}