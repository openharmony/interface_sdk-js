'use static';
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
 * @file
 * @kit ArkUI
 */

import { UIContext } from '@ohos.arkui.UIContext';

import { FrameNode } from 'arkui.FrameNode';

import { Size } from 'arkui.Graphics';

import { TouchEvent, MouseEvent, AxisEvent } from '@ohos.arkui.component';

import { WrappedBuilder, CustomBuilder, CustomBuilderT } from '@ohos.arkui.component';

import { RecordData } from '@ohos.base';

import { CompetitionStrategy } from '@ohos.arkui.component';

import { LocalStorage } from '@ohos.arkui.stateManagement';

/**
* 节点渲染类型枚举。
*
* > **说明：**
* >
* > - RENDER_TYPE_TEXTURE类型目前仅在[BuilderNode]{@link BuilderNode}持有组件树的根节点为自定义组件时以及
* > [XComponentNode]{@link XComponentNode:XComponentNode}中设置生效。
* >
* > - 在[BuilderNode]{@link BuilderNode}的情况下，目前在作为根节点的自定义组件中支持纹理导出的有以下组件：[Badge]{@link badge}、[Blank]{@link blank}、
* > [Button]{@link button}、[CanvasGradient]{@link canvas}、[CanvasPattern]{@link canvas}、
* > [CanvasRenderingContext2D]{@link canvas}、[Canvas]{@link canvas}、[CheckboxGroup]{@link checkboxgroup}、
* > [Checkbox]{@link checkbox}、[Circle]{@link circle}、[ColumnSplit]{@link column_split}、[Column]{@link column}、
* > [ContainerSpan]{@link container_span}、[Counter]{@link counter}、[DataPanel]{@link data_panel}、
* > [Divider]{@link divider}、[Ellipse]{@link ellipse}、[Flex]{@link flex}、[Gauge]{@link gauge}、
* > [Hyperlink]{@link hyperlink}、[ImageBitmap]{@link canvas}、[ImageData]{@link canvas}、[Image]{@link image}、
* > [Line]{@link line}、[LoadingProgress]{@link loading_progress}、[Marquee]{@link marquee}、[Matrix2D]{@link canvas}、
* > [OffscreenCanvasRenderingContext2D]{@link canvas}、[OffscreenCanvas]{@link canvas}、[Path2D]{@link canvas}、
* > [Path]{@link path}、[PatternLock]{@link pattern_lock}、[Polygon]{@link polygon}、[Polyline]{@link polyline}、
* > [Progress]{@link progress}、[QRCode]{@link qrcode}、[Radio]{@link radio}、[Rating]{@link rating}、[Rect]{@link rect}、
* > [RelativeContainer]{@link relative_container}、[RowSplit]{@link row_split}、[Row]{@link row}、[Shape]{@link shape}、
* > [Slider]{@link slider}、[Span]{@link span}、[Stack]{@link stack}、[TextArea]{@link text_area}、
* > [TextClock]{@link text_clock}、[TextInput]{@link text_input}、[TextTimer]{@link text_timer}、[Text]{@link text}、
* > [Toggle]{@link toggle}、[Video]{@link video}（不含全屏播放能力）、[Web]{@link web}、[XComponent]{@link xcomponent}。
* >
* > - 从API version 12开始，新增以下组件支持纹理导出：[DatePicker]{@link date_picker}、[ForEach]{@link for_each}、[Grid]{@link grid}、
* > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、[LazyForEach]{@link lazy_for_each}、
* > [List]{@link list}、[Scroll]{@link scroll}、[Swiper]{@link swiper}、[TimePicker]{@link time_picker}、
* > [@Component](docroot://ui/state-management/arkts-create-custom-components.md#component)修饰的自定义组件、
* > [NodeContainer]{@link node_container}以及[NodeContainer]{@link node_container}下挂载的[FrameNode]{@link FrameNode}和
* > [RenderNode]{@link RenderNode:RenderNode}。
* >
* > - 使用方式可参考[同层渲染绘制](docroot://web/web-same-layer.md)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NodeRenderType {

  /**
   * 表示该节点将被显示到屏幕上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RENDER_TYPE_DISPLAY = 0,

  /**
   * 表示该节点将被导出为纹理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RENDER_TYPE_TEXTURE = 1
}

/**
* 创建BuilderNode时的可选参数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RenderOptions {

  /**
   * 节点的理想大小。
   *
   * 默认值：{ width: 0, height: 0 }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selfIdealSize?: Size;

  /**
   * 节点的渲染类型。
   *
   * 默认值：NodeRenderType.RENDER_TYPE_DISPLAY
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  surfaceId?: string;

  /**
   * 控制BuilderNode持有的FrameNode的类型，当此开关设置为true时，BuilderNode持有的FrameNode为轻量化的FrameNode，内存更小，但是不支持FrameNode的部分接口，具体信息请参见
   * [isMinimized](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#isminimized)。
   * 默认值：false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  enableMinimized?: boolean;
}

/**
* build的可选参数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BuildOptions {

  /**
   * 是否开启BuilderNode并行构建。`true`表示开启，`false`表示关闭。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  useParallel?: boolean;

  /**
   * 给当前BuilderNode设置LocalStorage，挂载在此BuilderNode下的自定义组件共享该LocalStorage。如果自定义组件构造函数同时也传入LocalStorage，优先使用构造函数中传入的
   * LocalStorage。
   *
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  localStorage?: LocalStorage;
}

/**
* class BuilderNode\<T = undefined>
* BuilderNode支持通过无状态的UI方法[@Builder](docroot://ui/state-management/arkts-builder.md)生成组件树，并持有组件树的根节点。不支持定义为状态变量。
* BuilderNode中持有的FrameNode仅用于将该BuilderNode作为子节点挂载到其他FrameNode上。对BuilderNode持有的FrameNode进行属性设置与子节点操作可能会产生未定义行为，因此不建议通过
* BuilderNode的[getFrameNode]{@link BuilderNode#getFrameNode}方法和[FrameNode]{@link FrameNode}的
* [getRenderNode]{@link FrameNode:FrameNode#getRenderNode}方法获取RenderNode，并通过[RenderNode]{@link RenderNode:RenderNode}的接
* 口对其进行属性设置与子节点操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class BuilderNode<T = undefined> {

  /**
   * 当将BuilderNode生成的内容嵌入到其它RenderNode中显示时，需要显式指定RenderOptions中的selfIdealSize，否则Builder内的节点默认父组件布局约束为[0, 0]。该场景下，若不设置
   * selfIdealSize则认为BuilderNode中子树的根节点大小为[0, 0]。
   *
   * @param { UIContext } uiContext - UI上下文，获取方式可参考
   *     [UIContext获取方法](docroot://reference/apis-arkui/js-apis-arkui-node.md#uicontext获取方法)。
   * @param { RenderOptions } [options] - BuilderNode的构造可选参数。<br/>默认值：undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(uiContext: UIContext, options?: RenderOptions);

  /**
   * 依照传入的无参数[CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuildertt23)创建组件树，并持有组件树的根节点。
   *
   * > **说明：**
   * >
   * > @Builder进行创建和更新的规格参考@Builder。
   *
   * @param { WrappedBuilder<CustomBuilder> } builder - 创建对应节点树的时候所需的无状态UI方法
   *     [@Builder（ArkTS-Sta）](docroot://ui/arkts-v1.2-user-defined-arktsNode-builderNode.md)封装的WrappedBuilder对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  build(builder: WrappedBuilder<CustomBuilder>): void;

  /**
   * 依照传入的带参数的[CustomBuilderT\<T>](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuildertt23)创建组件树，并持有组件树的根节
   * 点。无状态的UI方法[@Builder（ArkTS-Sta）](docroot://ui/arkts-v1.2-user-defined-arktsNode-builderNode.md)最多拥有一个根节点。
   *
   * 支持自定义组件。
   *
   * > **说明：**
   * >
   * > - @Builder嵌套使用时，需要保证内外的@Builder方法的入参对象一致。
   * >
   * > - 最外层的@Builder只支持一个入参。
   * >
   * > - 操作BuilderNode中的对象时，确保其引用不被回收。一旦BuilderNode对象被虚拟机回收，其FrameNode、RenderNode对象将与后端节点解除引用关系，导致从BuilderNode中获取的
   * > FrameNode对象不再对应任何节点。
   *
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - 在构建节点树时所需的无状态UI方法
   *     [@Builder（ArkTS-Sta）](docroot://ui/arkts-v1.2-user-defined-arktsNode-builderNode.md)封装的WrappedBuilder对象。
   * @param { T } arg - builder的入参。当前仅支持一个入参，且入参对象类型与@Builder定义的入参类型保持一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  build(builder: WrappedBuilder<CustomBuilderT<T>>, arg: T): void;

  /**
   * 依照传入的带参数的[CustomBuilderT\<T>](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuildertt23)创建组件树，并持有组件树的根节
   * 点。同时，支持设置build相关的配置项。无状态的UI方法@Builder最多拥有一个根节点。
   *
   * 支持自定义组件。
   *
   * > **说明：**
   * >
   * > - @Builder进行创建和更新的规格参考[@Builder](docroot://ui/arkts-v1.2-user-defined-arktsNode-builderNode.md)。
   * >
   * > - 最外层的@Builder只支持一个入参。
   *
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - 用于构建对应节点树的无状态UI方法
   *     [@Builder（ArkTS-Sta）](docroot://ui/arkts-v1.2-user-defined-arktsNode-builderNode.md)封装的WrappedBuilder对象。
   * @param { T } arg - builder的入参。
   * @param { BuildOptions } options - 该值无效，默认支持@Builder参数不一致，且行为与@Builder的行为保持一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  build(builder: WrappedBuilder<CustomBuilderT<T>>, arg: T, options: BuildOptions): void;

  /**
   *
   * @param { T } arg - 用于更新BuilderNode的参数，和[build]{@link BuilderNode}调用时传入的参数类型一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  update(arg: T): void;

  /**
   * 获取BuilderNode中的[FrameNode]{@link FrameNode}。在BuilderNode执行build操作之后，才会生成FrameNode。
   *
   * @returns { FrameNode | null } - Returns a FrameNode inside the BuilderNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFrameNode(): FrameNode | null;

  /**
   * 将原始事件派发到某个BuilderNode创建出的FrameNode上。
   *
   * postTouchEvent是从组件树的中间节点往下分发，需要变换到父组件坐标系才能分发成功，参考下图。
   *
   * OffsetA为buildNode相对于父组件的偏移量，可以通过FrameNode中的[getPositionToParent]{@link FrameNode:FrameNode#getPositionToParent}获取。
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
   * > - 在[webview]{@link @ohos.web.webview:webview}中，内部已经处理过坐标系变换，可以将TouchEvent事件直接下发。
   * >
   * > - 同一时间戳，postTouchEvent只能调用一次。<!--Del-->
   * >
   * > - 不支持[UIExtensionComponent]{@link ui_extension_component}。
   *
   * <!--DelEnd-->
   *
   * @param { TouchEvent } event - 触摸事件。
   * @returns { boolean } - 派发事件是否成功。true为已命中响应事件的组件，false为未命中任何可响应事件的组件。<br/>**说明：** <br/>如果未按照预期命中组件，需要确认以下几点：<br/>1.坐标系
   *     是否转换正确。<br/>2.组件是否可交互状态。<br/>3.是否绑定事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  dispose(): void;

  /**
   * 根据提供的参数重用BuilderNode。
   *
   * @param { RecordData } [param] - 用于复用BuilderNode的参数。该参数将直接用于BuilderNode中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定
   *     义行为。调用此方法将同步触发内部自定义组件的
   *     [aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)生命周期回调，并
   *     将该参数作为回调的入参。默认值为undefined，此时BuilderNode中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  reuse(param?: RecordData): void;

  /**
   * 触发BuilderNode中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见
   * [@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。从API版本26.0.0开始，BuilderNode中的自定义组件支持V2组件复用，请参
   * 见[@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * > **说明：**
   * >
   * > BuilderNode通过reuse和recycle完成其内外自定义组件之间的复用事件传递，具体使用场景请参见
   * > [BuilderNode调用reuse和recycle接口实现节点复用能力](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#buildernode调用reuse和recycle接口实现节点复用能力)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  recycle(): void;

  /**
   * 传递系统环境变化事件，触发节点的全量更新。系统环境变化的相关信息请参见
   * [@ohos.app.ability.Configuration (环境变量)]{@link @ohos.app.ability.Configuration:Configuration}。
   *
   * > **说明：**
   * >
   * > updateConfiguration接口用于通知对象更新，更新所使用的系统环境由应用当前的系统环境变化决定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  updateConfiguration(): void;

  /**
   * 查询当前BuilderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在
   * dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } - 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isDisposed(): boolean;

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
   * > [onTouch]{@link CommonMethod#onTouch}。
   * >
   * > - 注入事件为轴事件[（AxisEvent）]{@link AxisEvent}时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发[RotationGesture]{@link gesture}。
   * >
   * > - 转发的事件会在被分发到的目标组件所在的子树里做touchtest，并触发对应手势，原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。
   * >
   * > - 如果是开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段，轴事件的scrollStep字段。要保证事件的完整，比如触摸事件的[TouchType]{@link TouchType}中DOWN和UP字段都要
   * > 有，防止出现未定义行为。
   * >
   * > - [webview]{@link @ohos.web.webview:webview}已经处理过坐标系变换，可以将事件直接下发。
   * >
   * > - postTouchEvent接口需要提供手势坐标相对于post事件对端内的局部坐标，postInputEvent接口需要提供手势坐标相对于post事件对端内的窗口坐标。
   * >
   * > - 不建议同一个事件转发多次。<!--Del-->不支持[UIExtensionComponent]{@link ui_extension_component}。<!--DelEnd-->
   *
   * @param { InputEventType } event - 用于透传的输入事件。
   * @returns { boolean } - 事件是否被成功派发。如果事件派发成功，则返回true；否则，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * > - 系统在处理鼠标左键点击事件时将转换为触摸事件，转发时应注意不在外层同时绑定触摸事件与鼠标事件，否则可能导致坐标偏移。这是由于在事件转换过程中，[TouchType]{@link TouchType}不会发生变化，规格可查看
   * > [onTouch]{@link CommonMethod#onTouch}。
   * >
   * > - 注入事件为轴事件[AxisEvent]{@link AxisEvent}时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发旋转手势[RotationGesture]{@link gesture}。
   * >
   * > - 转发的事件会在被分发到的目标组件及其子组件里做事件处理，并触发对应手势。可以通过入参控制当前组件和目标组件手势是否为竞争关系。
   * >
   * > - 如果event转化为对应的事件后，该事件为开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段，轴事件的scrollStep字段。要保证事件的完整，比如触摸事件的
   * > [TouchType]{@link TouchType}中必须同时包含DOWN和UP两个字段，防止出现程序异常或意外崩溃。
   * >
   * > - 支持同一个事件转发多次<!--Del-->，不支持[UIExtensionComponent]{@link ui_extension_component}调用本接口<!--DelEnd-->。
   *
   * @param { InputEventType } event - 用于事件分发的输入事件。
   * @param { CompetitionStrategy } [competitionStrategy] - The competition strategy.
   * @returns { boolean } - 事件是否被成功派发。如果成功，则返回true；否则，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean;

  /**
   * 设置当前BuilderNode对象是否继承父组件中自定义组件的冻结策略。如果设置继承状态为false，则BuilderNode对象的冻结策略为false。在这种情况下，节点在不活跃状态下不会被冻结。
   *
   * > **说明：**
   * >
   * > BuilderNode设置inheritFreezeOptions为true，且父组件为自定义组件、BuilderNode、ComponentContent、ReactiveBuilderNode或
   * > ReactiveComponentContent时，会继承父组件的冻结策略。当子组件为自定义组件时，其冻结策略不会传递给子组件。
   *
   * @param { boolean } enabled - BuilderNode对象是否设置为继承父组件中自定义组件的冻结策略。true为继承父组件中自定义组件的冻结策略，false为不继承父组件中自定义组件的冻结策略。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  inheritFreezeOptions(enabled: boolean): void;
}

/**
* [postInputEvent]{@link BuilderNode#postInputEvent}的参数，定义要发送的输入事件类型。
*
 * @unionmember { TouchEvent }
 * @unionmember { MouseEvent }
 * @unionmember { AxisEvent }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare type InputEventType = TouchEvent | MouseEvent | AxisEvent;

/**
* ReactiveBuilderNode支持通过无状态的UI方法[@Builder](docroot://ui/state-management/arkts-builder.md)生成组件树，并持有该组件树的根节点，不支持定义为状态变
* 量。ReactiveBuilderNode中持有的[FrameNode]{@link FrameNode}仅用于将此ReactiveBuilderNode作为子节点挂载到其他FrameNode上。对
* ReactiveBuilderNode持有的FrameNode进行属性设置与子节点操作可能会导致未定义行为，因此不建议通过ReactiveBuilderNode的
* [getFrameNode]{@link BuilderNode#getFrameNode}方法和[FrameNode]{@link FrameNode}节点的
* [getRenderNode]{@link FrameNode:FrameNode#getRenderNode}方法获取RenderNode，并通过[RenderNode]{@link RenderNode:RenderNode}的接
* 口对其进行属性设置与子节点操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ReactiveBuilderNode {

  /**
   * 用于构造ReactiveBuilderNode类。当将ReactiveBuilderNode生成的内容嵌入到其它[RenderNode]{@link RenderNode:RenderNode}中显示时，需要显式指定
   * [RenderOptions]{@link BuilderNode:RenderOptions}中的[selfIdealSize]{@link BuilderNode:RenderOptions}，否则
   * ReactiveBuilderNode内的节点默认父组件布局约束为[0, 0]。调用此接口，若不设置selfIdealSize则认为ReactiveBuilderNode中子树的根节点大小为[0, 0]。
   *
   * @param { UIContext } uiContext - UI上下文，获取方式可参考
   *     [UIContext获取方法](docroot://reference/apis-arkui/js-apis-arkui-node.md#uicontext获取方法)。uiContext需要为一个有效的值，即UI上下文正
   *     确，如果传入非法值或者未设置，会导致创建失败。
   * @param { RenderOptions } [options] - ReactiveBuilderNode的构造可选参数，参数用于构造节点的理想大小和节点的渲染类型。<br/>默认值：undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(uiContext: UIContext, options?: RenderOptions);

  /**
   * 依照传入的[CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)创建组件树，并持有组件树的根节点。支持响应式状态管理。
   *
   * > **说明：**
   * >
   * > @Builder进行创建和更新的规格参考[@Builder](docroot://ui/state-management/arkts-builder.md)。
   *
   * @param { CustomBuilder } builder - 创建对应节点树的时候所需的无状态UI方法[@Builder](docroot://ui/state-management/arkts-builder.md)。
   * @param { BuildOptions } [options] - build相关的配置项。<br/>默认值：参考[BuildOptions]{@link BuilderNode:BuildOptions}各个成员的默认值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  build(builder: CustomBuilder, options?: BuildOptions): void;

  /**
   * 获取ReactiveBuilderNode中的[FrameNode]{@link FrameNode}。在ReactiveBuilderNode执行build操作之后，才会生成FrameNode。
   *
   * @returns { FrameNode | null } - Returns a FrameNode inside the ReactiveBuilderNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getFrameNode(): FrameNode | null;

  /**
   * 将原始事件派发到某个ReactiveBuilderNode创建的FrameNode上。
   *
   * postTouchEvent是从组件树的中间节点往下分发，需要变换到父组件坐标系才能分发成功，参考下图。
   *
   * OffsetA为buildNode相对于父组件的偏移量，可以通过FrameNode中的[getPositionToParent]{@link FrameNode:FrameNode#getPositionToParent}获取。
   * OffsetB为point点相对于buildNode的偏移量，可以通过
   * [TouchEvent](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent对象说明)获取。OffsetC为OffsetA
   * 与OffsetB的和，是传给postTouchEvent的最终结果。
   *
   * ![postTouchEvent](docroot://reference/apis-arkui/figures/postTouchEvent.PNG)
   *
   * > **说明：**
   * >
   * > 传入的坐标值需要转换为px，如果builderNode有仿射变换，则需要再叠加仿射变换。
   * >
   * > 在[webview]{@link @ohos.web.webview:webview}中，内部已经处理过坐标系变换，可以将TouchEvent事件直接下发。
   * >
   * > 同一时间戳，postTouchEvent只能调用一次。<!--Del-->
   * >
   * > postTouchEvent的参数不支持[UIExtensionComponent]{@link ui_extension_component}。
   *
   * <!--DelEnd-->
   *
   * @param { TouchEvent } event - 触摸事件。
   * @returns { boolean } - 派发事件是否成功。true：已命中响应事件的组件；false：未命中任何可响应事件的组件。<br/>**说明：** <br/>如果未按照预期命中组件，需要确认：<br/>1.坐标系是否转换
   *     正确。<br/>2.组件是否可交互状态。<br/>3.是否绑定事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  postTouchEvent(event: TouchEvent): boolean;

  /**
   * 立即释放当前ReactiveBuilderNode对象对[实体节点](docroot://ui/arkts-user-defined-node.md#基本概念)的引用关系。关于ReactiveBuilderNode的解绑场景请参见
   * [节点解绑](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。
   *
   * > **说明：**
   * >
   * > 当ReactiveBuilderNode对象调用dispose之后，会与后端实体节点解除引用关系。若前端对象ReactiveBuilderNode无法释放，容易导致内存泄漏。建议在不再需要对该
   * > ReactiveBuilderNode对象进行操作时，开发者主动调用dispose释放后端节点，以减少引用关系的复杂性，降低内存泄漏的风险。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  dispose(): void;

  /**
   * 触发ReactiveBuilderNode中的自定义组件的复用。组件复用请参见[@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。关于
   * ReactiveBuilderNode的解绑场景请参见[节点解绑](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#解除实体节点引用关系)。从API版本26.0.0
   * 开始，ReactiveBuilderNode中的自定义组件支持V2组件复用，请参见
   * [@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * ReactiveBuilderNode通过reuse和[recycle]{@link ReactiveBuilderNode#recycle}完成其内外自定义组件之间的复用事件传递，具体使用场景请参见
   * [BuilderNode调用reuse和recycle接口实现节点复用能力](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#buildernode调用reuse和recycle接口实现节点复用能力)。
   *
   * @param { RecordData } [param] - 用于复用[ReactiveBuilderNode]{@link ReactiveBuilderNode}的参数。该参数将直接用于
   *     [ReactiveBuilderNode]{@link ReactiveBuilderNode}中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定义行为。调用此方法将同步触发内部自定
   *     义组件的[aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)生命周期
   *     回调，并将该参数作为回调的入参。默认值为undefined，此时ReactiveBuilderNode中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  reuse(param?: RecordData): void;

  /**
   * 触发ReactiveBuilderNode中自定义组件的回收。自定义组件的回收是组件复用机制中的环节，具体信息请参见
   * [@Reusable装饰器：V1组件复用](docroot://ui/state-management/arkts-reusable.md)。从API版本26.0.0开始，ReactiveBuilderNode中的自定义组件支持V
   * 2组件复用，请参见[@ReusableV2装饰器：V2组件复用](docroot://ui/state-management/arkts-new-reusableV2.md)。
   *
   * ReactiveBuilderNode通过[reuse]{@link ReactiveBuilderNode#reuse}和recycle完成其内外自定义组件之间的复用事件传递，具体使用场景请参见
   * [BuilderNode调用reuse和recycle接口实现节点复用能力](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#buildernode调用reuse和recycle接口实现节点复用能力)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  recycle(): void;

  /**
   * 传递系统环境变化事件，触发节点的全量更新。可用于通知对象更新，是否更新所使用的系统环境由应用当前的系统环境变化决定。系统环境变化的相关信息请参见
   * [@ohos.app.ability.Configuration (环境变量)]{@link @ohos.app.ability.Configuration:Configuration}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  updateConfiguration(): void;

  /**
   * 根据提供的参数更新ReactiveBuilderNode。当ReactiveBuilderNode中
   * [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md)对象封装的builder函数中使用的绑定参数是由V1装饰器（如@Observed）装饰的类实例
   * 时，需要在此类数据变更后手动调用此方法以更新数据，当使用V2装饰器（如@ObservedV2）装饰的类实例时，支持自动更新，无需手动调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  flushState(): void;

  /**
   * 查询当前ReactiveBuilderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。因为在节点
   * dispose后可能仍存在被调用dispose接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } - 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isDisposed(): boolean;

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
   * > [onTouch]{@link CommonMethod#onTouch}。
   * >
   * > 注入事件为轴事件[（AxisEvent）]{@link AxisEvent}时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发[RotationGesture]{@link gesture}。
   * >
   * > 转发的事件会在被分发到的目标组件所在的子树里做触摸测试（TouchTest），并触发对应手势，原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。
   * >
   * > 如果是开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段、轴事件的scrollStep字段，同时要保证事件的完整，比如触摸事件的[TouchType]{@link TouchType}中DOWN和UP字段都要
   * > 有，防止出现未定义行为。
   * >
   * > [webview]{@link @ohos.web.webview:webview}已经处理过坐标系变换，可以将事件直接下发。
   * >
   * > postTouchEvent接口需要提供手势坐标相对于输入事件对端内的局部坐标，postInputEvent接口需要提供手势坐标相对于输入事件对端内的窗口坐标。
   * >
   * > 不建议同一个事件转发多次。<!--Del-->
   * >
   * > postInputEvent的参数不支持[UIExtensionComponent]{@link ui_extension_component}。<!--DelEnd-->
   *
   * @param { InputEventType } event - 待分发的输入事件。
   * @returns { boolean } - 事件是否被成功分发。如果事件分发成功，则返回true；否则，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * > - 系统在处理鼠标左键点击事件时将转换为触摸事件，转发时应注意不在外层同时绑定触摸事件与鼠标事件，否则可能导致坐标偏移。这是由于在事件转换过程中，[TouchType]{@link TouchType}不会发生变化，规格可查看
   * > [onTouch]{@link CommonMethod#onTouch}。
   * >
   * > - 注入事件为轴事件[AxisEvent]{@link AxisEvent}时，由于轴事件中缺少旋转轴信息，因此注入的事件无法触发旋转手势[RotationGesture]{@link gesture}。
   * >
   * > - 转发的事件会在被分发到的目标组件及其子组件里做事件处理，并触发对应手势。可以通过入参控制当前组件和目标组件手势是否为竞争关系。
   * >
   * > - 如果event转化为对应的事件后，该事件为开发者构造的事件，必填字段必须赋值，比如触摸事件的touches字段，轴事件的scrollStep字段。要保证事件的完整，比如触摸事件的
   * > [TouchType]{@link TouchType}中必须同时包含DOWN和UP两个字段，防止出现程序异常或意外崩溃。
   * >
   * > - 支持同一个事件转发多次<!--Del-->，不支持[UIExtensionComponent]{@link ui_extension_component}调用本接口<!--DelEnd-->。
   *
   * @param { InputEventType  } event - 用于事件分发的输入事件。
   * @param { CompetitionStrategy  } competitionStrategy - 分发事件的手势是否为竞争场景，默认为非竞争。
   * @returns { boolean } - 事件是否被成功派发。如果成功，则返回true；否则，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean;
}