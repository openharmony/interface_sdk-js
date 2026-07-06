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
 * The **BuilderNode** module provides APIs for a BuilderNode – a custom node that can be used to mount built-in 
 * components. A BuilderNode can be used only as a leaf node. For details, see 
 * [BuilderNode Development](docroot://ui/arkts-user-defined-arktsNode-builderNode.md). For best practices, see 
 * [Dynamic Component Creation: Dynamically Adding, Updating, and Deleting Components](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-ui-dynamic-operations#section153921947151012).
 * 
 * Compared with **BuilderNode**, **ReactiveBuilderNode** can generate a component tree through the stateless UI method 
 * @Builder with multiple parameters.
 * 
 * > **NOTE**
 * >
 * > - If the root node of the provided Builder is a syntax node (
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)/
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)/
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)/
 * > [ContentSlot](docroot://ui/rendering-control/arkts-rendering-control-contentslot.md)...), [Span]{@link span}, 
 * > [ContainerSpan]{@link container_span}, [SymbolSpan]{@link symbol_span}, or a custom component, an additional 
 * > [FrameNode]{@link FrameNode} is generated and displayed as BuilderProxyNode in the node tree. This structural 
 * > change affects the propagation of certain events. For details, see 
 * > [BuilderProxyNode in BuilderNode Causes Tree Structure Changes](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#builderproxynode-in-buildernode-causes-tree-structure-changes).
 * >
 * > - If you encounter display issues when reusing a BuilderNode across pages, see 
 * > [Cross-Page Reuse Considerations](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#cross-page-reuse-considerations)
 * > for guidance.
 * >
 * > - **BuilderNode** is not available in DevEco Studio Previewer.
 * >
 * > - Custom components under **BuilderNode** can use the [@Prop](docroot://ui/state-management/arkts-prop.md) 
 * > decorator. The [@Link](docroot://ui/state-management/arkts-link.md) decorator cannot be used to synchronize 
 * > external data and status across **BuilderNode** boundaries.
 * >
 * > - If a BuilderNode contains custom components as child nodes, these custom components cannot use the 
 * > [@Reusable](docroot://ui/state-management/arkts-reusable.md) decorator. For details, see 
 * > [Using the @Reusable Decorator with BuilderNode Child Components](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#using-the-reusable-decorator-with-buildernode-child-components).
 * >
 * > - Since API version 12, custom components can receive 
 * > [LocalStorage](docroot://ui/state-management/arkts-localstorage.md) instances. You can use LocalStorage related 
 * > decorators such as [@LocalStorageProp](docroot://ui/state-management/arkts-localstorage.md#localstorageprop) and 
 * > [@LocalStorageLink](docroot://ui/state-management/arkts-localstorage.md#localstoragelink) by 
 * > [passing LocalStorage instances](docroot://ui/state-management/arkts-localstorage.md#providing-a-custom-component-with-access-to-a-localstorage-instance).
 * >
 * > - Since API version 20, when configured with [BuildOptions]{@link BuildOptions}, custom components within a 
 * > BuilderNode can access the host page's [@Provide](docroot://ui/state-management/arkts-provide-and-consume.md) data 
 * > through their [@Consume](docroot://ui/state-management/arkts-provide-and-consume.md) decorated attributes.
 * >
 * > - The behavior of other decorators is undefined. Avoid using those decorators.
 * >
 * > - [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) can be used only in custom 
 * > components.
 * >
 * > - BuilderNode objects do not support JSON serialization.
 *
 * @file
 * @kit ArkUI
 */

import { UIContext } from '../@ohos.arkui.UIContext';

import { FrameNode } from './FrameNode';

import { Size } from './Graphics';

/**
 * Enumerates the node rendering types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export declare enum NodeRenderType {

  /**
   * The node is displayed on the screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  RENDER_TYPE_DISPLAY = 0,

  /**
   * The node is exported as a texture.
   *
   * > **NOTE**
   * >
   * > - Currently, the **RENDER_TYPE_TEXTURE** type takes effect only for the
   * > [XComponentNode]{@link XComponentNode:XComponentNode} and
   * > the [BuilderNode]{@link BuilderNode} holding a component tree whose root node is a custom component.
   * >
   * > - The following custom components currently support texture export as root nodes in
   * > [BuilderNode]{@link BuilderNode} scenarios: [Badge]{@link badge}, [Blank]{@link blank}, [Button]{@link button},
   * > [CanvasGradient]{@link canvas}, [CanvasPattern]{@link canvas}, [CanvasRenderingContext2D]{@link canvas},
   * > [Canvas]{@link canvas}, [CheckboxGroup]{@link checkboxgroup}, [Checkbox]{@link checkbox}, [Circle]{@link circle},
   * > [ColumnSplit]{@link column_split}, [Column]{@link column}, [ContainerSpan]{@link container_span},
   * > [Counter]{@link counter}, [DataPanel]{@link data_panel}, [Divider]{@link divider}, [Ellipse]{@link ellipse},
   * > [Flex]{@link flex}, [Gauge]{@link gauge}, [Hyperlink]{@link hyperlink}, [ImageBitmap]{@link canvas},
   * > [ImageData]{@link canvas}, [Image]{@link image}, [Line]{@link line}, [LoadingProgress]{@link loading_progress},
   * > [Marquee]{@link marquee}, [Matrix2D]{@link canvas}, [OffscreenCanvasRenderingContext2D]{@link canvas},
   * > [OffscreenCanvas]{@link canvas}, [Path2D]{@link canvas}, [Path]{@link path}, [PatternLock]{@link pattern_lock},
   * > [Polygon]{@link polygon}, [Polyline]{@link polyline}, [Progress]{@link progress}, [QRCode]{@link qrcode},
   * > [Radio]{@link radio}, [Rating]{@link rating}, [Rect]{@link rect}, [RelativeContainer]{@link relative_container},
   * > [RowSplit]{@link row_split}, [Row]{@link row}, [Shape]{@link shape}, [Slider]{@link slider}, [Span]{@link span},
   * > [Stack]{@link stack}, [TextArea]{@link text_area}, [TextClock]{@link text_clock}, [TextInput]{@link text_input},
   * > [TextTimer]{@link text_timer}, [Text]{@link text}, [Toggle]{@link toggle}, [Video]{@link video} (excluding full-
   * > screen playback), [Web]{@link web}, [XComponent]{@link xcomponent}.
   * >
   * > - Since API version 12, the following components also support texture export: [DatePicker]{@link date_picker},
   * > [ForEach]{@link for_each}, [Grid]{@link grid},
   * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md), [LazyForEach]{@link lazy_for_each},
   * > [List]{@link list}, [Scroll]{@link scroll}, [Swiper]{@link swiper}, [TimePicker]{@link time_picker}, custom
   * > components decorated with [@Component](docroot://ui/state-management/arkts-create-custom-components.md#component),
   * > [NodeContainer]{@link node_container}, and [FrameNode]{@link FrameNode} and
   * > [RenderNode]{@link RenderNode:RenderNode} mounted to [NodeContainer]{@link node_container}.
   * >
   * > - For details, see [Rendering and Drawing Video and Button Components at the Same Layer](docroot://web/web-same-layer.md).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  RENDER_TYPE_TEXTURE = 1
}

/**
 * Provides optional parameters for creating a BuilderNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface RenderOptions {

  /**
   * Ideal size of the node.
   *
   * Default value: **{ width: 0, height: 0 }**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selfIdealSize?: Size;

  /**
   * Rendering type of the node.
   *
   * Default value: **NodeRenderType.RENDER_TYPE_DISPLAY**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type?: NodeRenderType;

  /**
   * Surface ID of the texture receiver. Typically, the texture receiver is
   * [OH_NativeImage](docroot://reference/apis-arkgraphics2d/capi-oh-nativeimage-oh-nativeimage.md).
   *
   * This parameter is effective only when **type** is set to **NodeRenderType.RENDER_TYPE_TEXTURE**.
   *
   * Default value: **""**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  surfaceId?: string;
}

/**
 * Defines the optional build options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface BuildOptions {

  /**
   * Whether to support nested **@Builder** within **@Builder**. **true** if supported, **false** otherwise.
   *
   * Default value: **false**.
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
   * LocalStorage for the current BuilderNode. Custom components mounted under this BuilderNode will share the specified
   * LocalStorage. **NOTE**
   *
   * If LocalStorage is also passed through a custom component's constructor, the constructor parameter takes
   * precedence.
   *
   * Default value: **null**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  localStorage?: LocalStorage;

  /**
   * Defines whether two-way synchronization is supported between the
   * [@Consume](docroot://ui/state-management/arkts-provide-and-consume.md) decorated variable of the custom component
   * of [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1)
   * inside the **BuilderNode** and the [@Provide](docroot://ui/state-management/arkts-provide-and-consume.md) decorated
   * variable outside the **BuilderNode**, and whether two-way synchronization is supported between the
   * [@Consumer](docroot://ui/state-management/arkts-new-provider-and-consumer.md) decorated variable of the custom
   * component of
   * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2) inside
   * the **BuilderNode** and the [@Provider](docroot://ui/state-management/arkts-new-provider-and-consumer.md) decorated
   * variable outside the **BuilderNode**.
   *
   * API version 20 and later versions support two-way synchronization for the custom component of state management V1.
   * API version 23 and later versions support two-way synchronization for the custom component of state management V2.
   *
   * The value **true** means that this feature is supported, and **false** means the opposite.
   *
   * Default value: **false**.
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
 * Defines the type of input event to be dispatched. For details, see
 * [postInputEvent]{@link BuilderNode#postInputEvent}.
 *
 * @unionmember { TouchEvent } Touch event.
 * @unionmember { MouseEvent } Mouse event.
 * @unionmember { AxisEvent } Axis event.
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
 * Implements a BuilderNode, which can create a component tree through the stateless UI method
 * [@Builder](docroot://ui/state-management/arkts-builder.md) and hold the root node of the component tree. A
 * BuilderNode cannot be defined as a state variable. The FrameNode held in the BuilderNode is only used to mount the
 * BuilderNode to other FrameNodes as a child node. Undefined behavior may occur if you set attributes or perform
 * operations on subnodes of the FrameNode held by the BuilderNode. Therefore, after you have obtained a
 * [RenderNode]{@link RenderNode:RenderNode} through the [getFrameNode]{@link BuilderNode#getFrameNode} method of the
 * BuilderNode and the [getRenderNode]{@link FrameNode:FrameNode#getRenderNode} method of the
 * [FrameNode]{@link FrameNode}, avoid setting the attributes or operating the subnodes through APIs of
 * [RenderNode]{@link RenderNode:RenderNode}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class BuilderNode<Args extends Object[]> {

  /**
   * When content generated by BuilderNode is embedded within another RenderNode for display, the **selfIdealSize**
   * parameter in **RenderOptions** must be explicitly specified. Otherwise, the layout constraints for the parent
   * component in Builder default to [0, 0]. In this case, if **selfIdealSize** is not set, the root node of the subtree
   * in BuilderNode will have a size of [0, 0].
   *
   * @param { UIContext } uiContext - UI context. For details about how to obtain it, see
   *     [Obtaining UI Context](docroot://reference/apis-arkui/js-apis-arkui-node.md#obtaining-ui-context).
   * @param { RenderOptions } options - Parameters for creating a BuilderNode.<br>Default value: **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(uiContext: UIContext, options?: RenderOptions);

  /**
   * Creates a component tree based on the passed object and holds the root node of the component tree. The stateless UI
   * method [@Builder](docroot://ui/state-management/arkts-builder.md) has at most one root node.
   *
   * Custom components are allowed.
   *
   * > **NOTE**
   *
   * > - When nesting @Builder, ensure that the input objects for the inner and outer @Builder methods are consistent.
   * >
   * > - The outermost @Builder supports only one input parameter.
   * >
   * > - The build parameter uses the pass-by-value semantics. To implement state updates, you must explicitly use the
   * > [update]{@link BuilderNode#update} API.
   * >
   * > - To operate objects in a BuilderNode, ensure that the reference to the BuilderNode is not garbage collected.
   * > When a BuilderNode object is garbage collected by the virtual machine, the associated
   * > [FrameNode]{@link FrameNode} and [RenderNode]{@link RenderNode:RenderNode} objects are also dereferenced from the
   * > backend node tree. This means that any FrameNode objects obtained from a BuilderNode will no longer correspond to
   * > any actual node if the BuilderNode is garbage collected.
   * >
   * > - The BuilderNode object maintains references to its underlying entity nodes. When the BuilderNode frontend
   * > object is no longer required for managing backend nodes, call the [dispose]{@link BuilderNode#dispose} API to
   * > release node references and unbind frontend and backend nodes.
   *
   * @param { WrappedBuilder<Args> } builder - Stateless UI method
   *     [@Builder](docroot://ui/state-management/arkts-builder.md) required for creating a component tree.
   * @param { Object } arg - Argument of the builder. Only one input parameter is supported, and the type of the input
   *     parameter must be consistent with the type defined by @Builder.<br>Default value: **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  build(builder: WrappedBuilder<Args>, arg?: Object): void;

  /**
   * Creates a component tree based on the passed object and holds the root node of the component tree. The stateless UI
   * method [@Builder](docroot://ui/state-management/arkts-builder.md) has at most one root node.
   *
   * Custom components are allowed. Compared with the
   * [build(builder: WrappedBuilder\<Args>, arg?: Object)]{@link BuilderNode} API, this API can use the builder
   * configuration parameters to determine whether @Builder can be nested with @Builder.
   *
   * > **NOTE**
   *
   * > - For details about the creation and update using @Builder, see
   * > [@Builder](docroot://ui/state-management/arkts-builder.md).
   * >
   * > - The outermost @Builder supports only one input parameter.
   *
   * @param { WrappedBuilder<Args> } builder - Stateless UI method
   *     [@Builder](docroot://ui/state-management/arkts-builder.md) required for creating a component tree.
   * @param { Object } arg - Argument of the builder. Only one input parameter is supported, and the type of the input
   *     parameter must be consistent with the type defined by @Builder.
   * @param { BuildOptions } options - Build options, which determine whether to support nesting @Builder within @
   *     Builder.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  build(builder: WrappedBuilder<Args>, arg: Object, options: BuildOptions): void;

  /**
   * Updates this BuilderNode using the provided parameter, which must be of the same type as the input parameter passed
   * to the [build]{@link BuilderNode} API. When updating a custom component, define the variables used in the component
   * as [@Prop](docroot://ui/state-management/arkts-prop.md) decorated properties.
   *
   * @param { Object } arg - Parameter used to update the BuilderNode. It is of the same type as the parameter passed to
   *     the [build]{@link BuilderNode} API.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  update(arg: Object): void;

  /**
   * Obtains the [FrameNode]{@link FrameNode} from the BuilderNode. The FrameNode is generated only after the
   * BuilderNode executes the build operation.
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
   * Posts a raw touch event to the FrameNode created by this BuilderNode.
   *
   * **postTouchEvent** dispatches the event from a middle node in the component tree downwards. To ensure the event is
   * dispatched correctly, it needs to be transformed into the coordinate system of the parent component, as shown in
   * the figure below.
   *
   * **OffsetA** indicates the offset of the BuilderNode relative to the parent component. You can obtain this offset by
   * calling [getPositionToParent]{@link FrameNode:FrameNode#getPositionToParent} in the FrameNode. **OffsetB**
   * indicates the offset of the touch point relative to the BuilderNode. You can obtain this offset from the
   * [TouchEvent]{@link TouchEvent} object. **OffsetC** is the sum of **OffsetA** and **OffsetB**. It represents the
   * final offset that you need to pass to **postTouchEvent**.
   *
   * ![postTouchEvent](docroot://reference/apis-arkui/figures/postTouchEvent.PNG)
   *
   * > **NOTE**
   * >
   * > - The coordinates you pass in need to be converted to pixel values (px). If the BuilderNode has any affine
   * > transformations applied to it, they must be taken into account and combined with the touch event coordinates.
   * >
   * > - In [Webview]{@link @ohos.web.webview:webview}, coordinate system transformations are already handled
   * > internally, so you can directly dispatch the touch event without additional adjustments.
   * >
   * > - The **postTouchEvent** API can be called only once for the same timestamp.
   * >
   * > - [UIExtensionComponent]{@link ui_extension_component} is not supported.
   *
   * @param { TouchEvent } event - Touch event.
   * @returns { boolean } Whether the event is successfully dispatched. The value **true** means the event is consumed
   *     by a component that responds to the event, and **false** means that no component responds to the event.
   *     <br>**NOTE**
   *     <br>If the event does not hit the expected component, ensure the following:
   *     <br>1. The coordinate system has been correctly transformed
   *     <br>2. The component is in an interactive state.
   *     <br>3. The event has been bound to the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  postTouchEvent(event: TouchEvent): boolean;

  /**
   * Immediately releases the reference relationship between this BuilderNode object and its
   * [entity node](docroot://ui/arkts-user-defined-node.md#basic-concepts). For details about the scenarios involving
   * BuilderNode unbinding, see
   * [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
   *
   * > **NOTE**
   * >
   * > After calling **dispose()**, the BuilderNode object cancels its reference to the backend entity node. If the
   * > frontend object BuilderNode cannot be released, memory leaks may occur. To avoid this, be sure to call
   * > **dispose()** on the BuilderNode when you no longer need it. This reduces the complexity of reference
   * > relationships and lowers the risk of memory leaks. For details, see
   * > [Memory Leak Caused by Circular Reference Between BuilderNode Frontend and Backend](docroot://ui/arkts-user-defined-node-faq.md#memory-leak-caused-by-circular-reference-between-buildernode-frontend-and-backend).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * Triggers component reuse for custom components under this BuilderNode. For details about component reuse, see
   * [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md). For details about
   * the scenarios involving BuilderNode unbinding, see
   * [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
   * Since API version 26.0.0, custom components in **BuilderNode** support V2 component reuse. For details, see
   * [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).
   *
   * @param { Object } [param] - Parameter used to reuse the BuilderNode. This parameter is passed to all top-level
   *     custom components within the BuilderNode during reuse and must include all required constructor parameters for
   *     each component; otherwise, undefined behavior may occur. Calling this method synchronously triggers the
   *     [aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)
   *     lifecycle callback of internal custom components, with this parameter as the callback input. Default value:
   *     **undefined**, in which case the custom components in the BuilderNode will use their original construction data
   *     source.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reuse(param?: Object): void;

  /**
   * Triggers recycling of custom components under this BuilderNode. Component recycling is part of the component reuse
   * mechanism. For details, see
   * [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md). Since API version 26
   * .0.0, custom components in **BuilderNode** support V2 component reuse. For details, see
   * [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).
   *
   * > **NOTE**
   * >
   * > The BuilderNode completes the reuse event transfer between internal and external custom components through
   * > **reuse** and **recycle**. For specific usage scenarios, see
   * > [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  recycle(): void;

  /**
   * Updates the configuration of the entire node by passing in a
   * [system environment change]{@link @ohos.app.ability.Configuration:Configuration} event.
   *
   * > **NOTE**
   * >
   * > The **updateConfiguration** API is used to instruct an object to update, with the system environment used for
   * > the update being determined by the changes in the application's current system environment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateConfiguration(): void;

  /**
   * Dispatches the specified input event to the target node.
   *
   * **offsetA** indicates the BuilderNode's offset relative to its parent component, **offsetB** the hit position's
   * offset relative to the BuilderNode, **offsetC** the composite offset (offsetA + offsetB) passed to the window in
   * **postInputEvent**.
   *
   * ![Coordinate conversion example](docroot://reference/apis-arkui/figures/postInputEvent-point.png)
   *
   * > **NOTE**
   * >
   * > - The passed coordinates must be converted to the unit of px. The sample code below demonstrates how to perform
   * > such coordinate conversion.
   * >
   * > - Mouse left-click events are automatically converted to touch events. Avoid binding both touch and mouse events
   * > at the outer layer, as this may cause coordinate offsets. This is because the **SourceType** remains unchanged
   * > during event conversion. For details, see [onTouch]{@link CommonMethod#onTouch}.
   * >
   * > - When an [axis event]{@link AxisEvent} event is injected, it cannot trigger [rotation gestures]{@link gesture},
   * > because the axis event does not include rotation axis information.
   * >
   * > - A forwarded event undergoes touch testing in the target component's subtree and triggers corresponding
   * > gestures. The original event also triggers gestures in the source component tree. There is no guaranteed outcome
   * > for gesture competition between these two types of gestures.
   * >
   * > - For developer-constructed events, mandatory fields must be assigned values, such as the **touches** field for
   * > touch events and the **scrollStep** field for axis events Ensure the completeness of the event, for example, both
   * > **DOWN** and **UP** [TouchType]{@link TouchType} states must be included for a touch event to prevent undefined
   * > behavior.
   * >
   * > - [webview]{@link @ohos.web.webview:webview} has already handled coordinate system transformation, so events can
   * > be dispatched.
   * >
   * > - The **postTouchEvent** API needs to provide the gesture coordinates relative to the local coordinates of the
   * > target component, and the **postInputEvent** API needs to provide the gesture coordinates relative to the window
   * > coordinates of the target component.
   * >
   * > - Avoid forwarding a single event multiple times. [UIExtensionComponent]{@link ui_extension_component}
   * > is not supported.
   *
   * @param { InputEventType } event - Input event to dispatch.
   * @returns { boolean } Whether the event is successfully dispatched. Returns **true** if the event is successfully
   *     dispatched; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  postInputEvent(event: InputEventType): boolean;

  /**
   * Posts an event containing a competition strategy to the target UI component node.
   *
   * Before calling this API, you need to convert the value of **event** to the corresponding event and convert the
   * coordinates in the **window** parameter in **event**. **offsetA** indicates the offset of the builderNode relative
   * to the parent component, **offsetB** indicates the offset of the hit position relative to the builderNode, and
   * **offsetC** is the sum of **offsetA** and **offsetB**. The value of **offsetC** is used as the value of the
   * **window** parameter in **event** and passed to the **postInputEventWithStrategy** method. For details, see the
   * following sample code.
   *
   * > **NOTE**
   * >
   * > - The passed coordinates must be converted to the unit of px. The sample code below demonstrates how to perform
   * > such coordinate conversion.
   * >
   * > - When processing a mouse left-click event, the system converts the event to a touch event. When forwarding the
   * > event, do not bind the touch event and mouse event at the outer layer at the same time, as this may cause
   * > coordinate offsets. This is because [SourceType]{@link TouchType} does not change during the event conversion.
   * > For details about the specifications, see [onTouch]{@link CommonMethod#onTouch}.
   * >
   * > - When an [axis event]{@link AxisEvent} event is injected, it cannot trigger [rotation gestures]{@link gesture},
   * > because the axis event does not include rotation axis information.
   * >
   * > - The forwarded event is posted to the target component and its child components for processing, and triggers the
   * > corresponding gesture. You can use input parameters to control whether the gestures of the current component and
   * > the target component are in a competitive relationship.
   * >
   * > - If the event is converted to a developer-constructed event, mandatory fields must be assigned values, for
   * > example, the **touches** field of a touch event and the **scrollStep** field of an axis event. Ensure the
   * > completeness of the event. For example, [TouchType]{@link TouchType} of a touch event must contain both the
   * > **DOWN** and **UP** fields to prevent program exceptions or unexpected crashes.
   * >
   * > - The same event can be forwarded multiple times. This API cannot be called by
   * > [UIExtensionComponent]{@link ui_extension_component}.
   *
   * @param { InputEventType } event - Input event used for event posting.
   * @param { CompetitionStrategy } [competitionStrategy] - Whether the gesture for posting the event is in
   *     a competition scenario. By default, the gesture is not in a competition scenario.
   * @returns { boolean } Whether the event is successfully dispatched. Returns **true** if the operation is successful;
   *     returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean;

  /**
   * Sets whether this **BuilderNode** object inherits the freeze policy from its parent component's custom components.
   * When inheritance is disabled (set to **false**), the object's freeze policy is set to **false**, which means its
   * associated node remains unfrozen even in an inactive state.
   * > **NOTE**
   * >
   * > When **inheritFreezeOptions** is set to **true** for **BuilderNode** and the parent component is a custom
   * > component, BuilderNode, ComponentContent, ReactiveBuilderNode, or ReactiveComponentContent, the freeze policy of
   * > the parent component is inherited. If the child component is a custom component, its freeze policy is not
   * > transferred to the child component.
   *
   * @param { boolean } enabled - Whether the current **BuilderNode** object inherits the freeze policy from its parent
   *     component's custom components. The value **true** means to inherit the freeze policy from parent component's
   *     custom components, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * Checks whether this BuilderNode object has released its reference to its backend entity node. Frontend nodes
   * maintain references to corresponding backend entity nodes. After a node calls the **dispose** API to release this
   * reference, subsequent API calls may cause crashes or return default values. This API facilitates validation of node
   * validity prior to operations, thereby mitigating risks in scenarios where calls after disposal are required.
   *
   * @returns { boolean } Whether the reference to the backend node is released. The value **true** means that the
   *     reference to backend node is released, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;
}

/**
 * **ReactiveBuilderNode** uses the stateless UI method [@Builder](docroot://ui/state-management/arkts-builder.md) to
 * generate a component tree and holds the root node of the component tree. A ReactiveBuilderNode cannot be defined as a
 * state variable. [FrameNode]{@link FrameNode} held in **ReactiveBuilderNode** is used only to mount the
 * ReactiveBuilderNode as a child node to another FrameNode. Undefined behavior may occur if you set attributes or
 * perform operations on subnodes of the FrameNode held by the ReactiveBuilderNode. Therefore, after you have obtained a
 * RenderNode through the [getFrameNode]{@link BuilderNode#getFrameNode} method of the ReactiveBuilderNode and the
 * [getRenderNode]{@link FrameNode:FrameNode#getRenderNode} method of the [FrameNode]{@link FrameNode}, avoid setting
 * the attributes or operating the subnodes through APIs of [RenderNode]{@link RenderNode:RenderNode}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class ReactiveBuilderNode<Args extends Object[]> {

  /**
   * Constructs a **ReactiveBuilderNode** class. When the content generated by **ReactiveBuilderNode** is embedded into
   * another [RenderNode]{@link RenderNode:RenderNode} for display, you need to explicitly specify
   * [selfIdealSize]{@link RenderOptions} in [RenderOptions]{@link RenderOptions}. Otherwise, the default parent
   * component layout constraint of the nodes in **ReactiveBuilderNode** is [0, 0]. If this API is called and
   * **selfIdealSize** is not set, the size of the root node of the subtree in **ReactiveBuilderNode** is [0, 0].
   *
   * @param { UIContext } uiContext - UI context. For details about how to obtain it, see
   *     [Obtaining UI Context](docroot://reference/apis-arkui/js-apis-arkui-node.md#obtaining-ui-context). The value of
   *     **uiContext** must be valid, that is, the UI context is correct. If this parameter is invalid or not set, the
   *     creation will fail.
   * @param { RenderOptions } [options] - Optional parameter for constructing **ReactiveBuilderNode**. This parameter is
   *     used to construct the ideal size of the node and the rendering type of the node.<br>Default value:
   *     **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  constructor(uiContext: UIContext, options?: RenderOptions);

  /**
   * Creates a component tree based on the passed object and holds the root node of the component tree. The stateless UI
   * method [@Builder](docroot://ui/state-management/arkts-builder.md) has at most one root node.
   *
   * Custom components are allowed.
   *
   * > **NOTE**
   * >
   * > For details about the creation and update using @Builder, see
   * > [@Builder](docroot://ui/state-management/arkts-builder.md).
   *
   * @param { WrappedBuilder<Args> } builder - Stateless UI method
   *     [@Builder](docroot://ui/state-management/arkts-builder.md) required for creating a component tree.
   * @param { BuildOptions } config - Configures the build behavior of the builder. All attributes in BuildOptions are
   *     optional. The default value is the corresponding default value in BuildOptions.
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
   * Obtains the [FrameNode]{@link FrameNode} from the ReactiveBuilderNode. The FrameNode is generated only after the
   * ReactiveBuilderNode executes the build operation.
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
   * Posts a raw touch event to the FrameNode created by a ReactiveBuilderNode.
   *
   * **postTouchEvent** dispatches the event from a middle node in the component tree downwards. To ensure the event is
   * dispatched correctly, it needs to be transformed into the coordinate system of the parent component, as shown in
   * the figure below.
   *
   * **OffsetA** indicates the offset of the BuilderNode relative to the parent component. You can obtain this offset
   * by calling [getPositionToParent]{@link FrameNode:FrameNode#getPositionToParent} in the FrameNode. **OffsetB**
   * indicates the offset of the touch point relative to the BuilderNode. You can obtain this offset from the
   * [TouchEvent]{@link TouchEvent} object. **OffsetC** is the sum of **OffsetA** and **OffsetB**. It represents the
   * final offset that you need to pass to **postTouchEvent**.
   *
   * ![postTouchEvent](docroot://reference/apis-arkui/figures/postTouchEvent.PNG)
   *
   * > **NOTE**
   * >
   * > The coordinates you pass in need to be converted to pixel values (px). If the BuilderNode has any affine
   * > transformations applied to it, they must be taken into account and combined with the touch event coordinates.
   * >
   * > In [Webview]{@link @ohos.web.webview:webview}, coordinate system transformations are already handled internally,
   * > so you can directly dispatch the touch event without additional adjustments.
   * >
   * > The **postTouchEvent** API can be called only once for the same timestamp.
   * >
   * > The **postTouchEvent** parameter does not support [UIExtensionComponent]{@link ui_extension_component}.
   *
   * @param { TouchEvent } event - Touch event.
   * @returns { boolean } Whether the event is successfully dispatched. Returns **true** if the event is successfully
   *     dispatched; returns **false** otherwise.
   *     <br>**NOTE**
   *     <br>If the event does not hit the expected component, ensure the following:
   *     <br>1. The coordinate system has been correctly transformed
   *     <br>2. The component is in an interactive state.
   *     <br>3. The event has been bound to the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  postTouchEvent(event: TouchEvent): boolean;

  /**
   * Immediately releases the reference relationship between this **ReactiveBuilderNode** object and its
   * [entity node](docroot://ui/arkts-user-defined-node.md#basic-concepts). For details about the scenarios involving
   * ReactiveBuilderNode unbinding, see
   * [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
   *
   * > **NOTE**
   * >
   * > After calling **dispose()**, the ReactiveBuilderNode object cancels its reference to the backend entity node. If
   * > the frontend object ReactiveBuilderNode cannot be released, memory leakage may occur. To avoid this, be sure to
   * > call **dispose()** on the ReactiveBuilderNode when you no longer need it. This reduces the complexity of
   * > reference relationships and lowers the risk of memory leakage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  dispose(): void;

  /**
   * Triggers reuse for custom components in **ReactiveBuilderNode**. For details about component reuse, see
   * [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md). For details about
   * the scenarios involving ReactiveBuilderNode unbinding, see
   * [Canceling the Reference to the Entity Node](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#canceling-the-reference-to-the-entity-node).
   * Since API version 26.0.0, custom components in **ReactiveBuilderNode** support V2 component reuse. For details,
   * see [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).
   *
   * ReactiveBuilderNode completes the reuse event transfer between internal and external custom components through
   * **reuse** and [recycle]{@link ReactiveBuilderNode#recycle}. For specific usage scenarios, see
   * [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).
   *
   * @param { Object } [param] - Parameter used to reuse [ReactiveBuilderNode]{@link ReactiveBuilderNode}. This
   *     parameter is passed to all top-level custom components within the
   *     [ReactiveBuilderNode]{@link ReactiveBuilderNode} during reuse and must include all required constructor
   *     parameters for each component; otherwise, undefined behavior may occur. Calling this method synchronously
   *     triggers the
   *     [aboutToReuse](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoreuse10)
   *     lifecycle callback of internal custom components, with this parameter as the callback input. Default value:
   *     **undefined**, in which case the custom components in the ReactiveBuilderNode will use their original
   *     construction data source.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  reuse(param?: Object): void;

  /**
   * Recycles the custom component in ReactiveBuilderNode. Component recycling is part of the component reuse
   * mechanism. For details, see
   * [@Reusable Decorator: Reusing V1 Components](docroot://ui/state-management/arkts-reusable.md). Since API version 2
   * 6.0.0, custom components in **ReactiveBuilderNode** support V2 component reuse. For details, see
   * [@ReusableV2 Decorator: Reusing Components](docroot://ui/state-management/arkts-new-reusableV2.md).
   *
   * ReactiveBuilderNode completes the reuse event transfer between internal and external custom components through
   * [reuse]{@link ReactiveBuilderNode#reuse} and **recycle**. For specific usage scenarios, see
   * [Implementing Node Reuse with the BuilderNode reuse and recycle APIs](docroot://ui/arkts-user-defined-arktsNode-builderNode.md#implementing-node-reuse-with-the-buildernode-reuse-and-recycle-apis).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  recycle(): void;

  /**
   * Updates the configuration of the entire node by passing in a
   * [system environment change]{@link @ohos.app.ability.Configuration:Configuration} event. This event can be used to
   * notify the object of the update. Whether the system environment used by the object is updated depends on the
   * current system environment change of the application.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  updateConfiguration(): void;

  /**
   * Updates the **ReactiveBuilderNode** based on the provided parameters. If the bound parameters used in the
   * **builder** function encapsulated by the [WrappedBuilder](docroot://ui/state-management/arkts-wrapBuilder.md)
   * object in **ReactiveBuilderNode** are class instances decorated by the V1 decorator (such as @Observed), you need
   * to manually call this API to update data after the data of this class changes. If the bound parameters are class
   * instances decorated by the V2 decorator (such as @ObservedV2), the data can be automatically updated without
   * manual calling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  flushState(): void;

  /**
   * Posts the input event to the target node managed by the **ReactiveBuilderNode**.
   *
   * **offsetA** indicates the **BuilderNode**'s offset relative to its parent component, **offsetB** the hit position'
   * s offset relative to the **BuilderNode**, **offsetC** the composite offset (offsetA + offsetB) passed to the
   * **postInputEvent**.
   *
   * ![API coordinate conversion example](docroot://reference/apis-arkui/figures/postTouchEvent.PNG)
   *
   * > **NOTE**
   * >
   * > The passed coordinates must be converted to the unit of px. The sample code below demonstrates how to perform
   * > such coordinate conversion.
   * >
   * > Mouse left-click events are automatically converted to touch events. Avoid binding both touch and mouse events
   * > at the outer layer, as this may cause coordinate offsets. This is because [SourceType]{@link SourceType} does
   * > not change during the event conversion. For details about the specifications, see
   * > [onTouch]{@link CommonMethod#onTouch}.
   * >
   * > When an [axis event]{@link AxisEvent} event is injected, it cannot trigger [rotation gestures]{@link gesture},
   * > because the axis event does not include rotation axis information.
   * >
   * > A forwarded event undergoes touch testing in the target component's subtree and triggers corresponding gestures.
   * > The original event also triggers gestures in the source component tree. There is no guaranteed outcome for
   * > gesture competition between these two types of gestures.
   * >
   * > For the event you construct, the mandatory fields must be assigned values, for example, the **touches** field of
   * > the touch event and the **scrollStep** field of the axis event. In addition, ensure the completeness of the
   * > event, for example, both **DOWN** and **UP** in [TouchType]{@link TouchType} of the touch event must be included
   * > to prevent undefined behavior.
   * >
   * > [webview]{@link @ohos.web.webview:webview} has already handled coordinate system transformation, so events can
   * > be dispatched.
   * >
   * > The **postTouchEvent** API needs to provide the gesture coordinates relative to the local coordinates of the
   * > target component, and the **postInputEvent** API needs to provide the gesture coordinates relative to the window
   * > coordinates of the target component.
   * >
   * > Avoid forwarding a single event multiple times.
   * >
   * > The **postInputEvent** parameter does not support [UIExtensionComponent]{@link ui_extension_component}.
   *
   * @param { InputEventType } event - Input event to be posted.
   * @returns { boolean } Whether the event is successfully dispatched. Returns **true** if the event is successfully
   *     dispatched; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  postInputEvent(event: InputEventType): boolean;

  /**
   * Posts an event containing a competition strategy to the target UI component node.
   *
   * Before calling this API, you need to convert the value of **event** to the corresponding event and convert the
   * coordinates in the **window** parameter in **event**. **offsetA** indicates the offset of the ReactiveBuilderNode
   * relative to the parent component, **offsetB** indicates the offset of the hit position relative to the
   * ReactiveBuilderNode, and **offsetC** is the sum of **offsetA** and **offsetB**. The value of **offsetC** is used
   * as the value of the **window** parameter in **event** and passed to the **postInputEventWithStrategy** method. For
   * details, see the following sample code.
   *
   * > **NOTE**
   * >
   * > - The passed coordinates must be converted to the unit of px. The sample code below demonstrates how to perform
   * > such coordinate conversion.
   * >
   * > - When processing a mouse left-click event, the system converts the event to a touch event. When forwarding the
   * > event, do not bind the touch event and mouse event at the outer layer at the same time, as this may cause
   * > coordinate offsets. This is because [SourceType]{@link TouchType} does not change during the event conversion.
   * > For details about the specifications, see [onTouch]{@link CommonMethod#onTouch}.
   * >
   * > - When an [axis event]{@link AxisEvent} event is injected, it cannot trigger [rotation gestures]{@link gesture},
   * > because the axis event does not include rotation axis information.
   * >
   * > - The forwarded event is posted to the target component and its child components for processing, and triggers
   * > the corresponding gesture. You can use input parameters to control whether the gestures of the current component
   * > and the target component are in a competitive relationship.
   * >
   * > - If the event is converted to a developer-constructed event, mandatory fields must be assigned values, for
   * > example, the **touches** field of a touch event and the **scrollStep** field of an axis event. Ensure the
   * > completeness of the event. For example, [TouchType]{@link TouchType} of a touch event must contain both the
   * > **DOWN** and **UP** fields to prevent program exceptions or unexpected crashes.
   * >
   * > - The same event can be forwarded multiple times. This API cannot be called by
   * > [UIExtensionComponent]{@link ui_extension_component}.
   *
   * @param { InputEventType } event - Input event used for event posting.
   * @param { CompetitionStrategy } [competitionStrategy] - Whether the gesture for posting the event is
   *     in a competition scenario. By default, the gesture is not in a competition scenario.
   * @returns { boolean } Whether the event is successfully dispatched. Returns **true** if the operation is
   *     successful; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean;

  /**
   * Sets whether this **ReactiveBuilderNode** object inherits the freeze policy from its parent component's custom
   * components. When inheritance is disabled (set to **false**), the **ReactiveBuilderNode** object's freeze policy is
   * set to **false**, which means its associated node remains unfrozen even in an inactive state.
   *
   * > **NOTE**
   * >
   * > When **inheritFreezeOptions** is set to **true** for **ReactiveBuilderNode** and the parent component is a
   * > custom component, **BuilderNode**, **ComponentContent**, **ReactiveBuilderNode**, or
   * > **ReactiveComponentContent**, the freeze policy of the parent component is inherited. If the child component is
   * > a custom component, its freeze policy is not transferred to the child component.
   *
   * @param { boolean } enabled - Whether the current **ReactiveBuilderNode** object inherits the freeze policy from
   *     its parent component's custom components. The value **true** means to inherit the freeze policy from parent
   *     component's custom components, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  inheritFreezeOptions(enabled: boolean): void;

  /**
   * Queries whether the current **ReactiveBuilderNode** object has released its reference to its backend entity node.
   * Frontend nodes maintain references to corresponding backend entity nodes. After a node calls the **dispose** API
   * to release this reference, subsequent API calls may cause crashes or return default values. This API facilitates
   * validation of node validity prior to operations, thereby mitigating risks in scenarios where calls after disposal
   * are required.
   *
   * @returns { boolean } Whether the reference to the backend node is released. The value **true** means that the
   *     reference to backend node is released, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  isDisposed(): boolean;
}