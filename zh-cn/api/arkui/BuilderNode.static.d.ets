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

import { LocalStorage } from '@ohos.arkui.stateManagement';

import { CompetitionStrategy } from '@ohos.arkui.component';

/**
 * Render type of the node using for indicating that
 * if the node will be shown on the display or rendered to a texture
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NodeRenderType {

  /**
   * Display type.The node will be shown on the display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RENDER_TYPE_DISPLAY = 0,

  /**
   * Exporting texture type.The node will be render to a  texture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RENDER_TYPE_TEXTURE = 1
}

/**
 * RenderOptions info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RenderOptions {

  /**
   * The ideal size of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selfIdealSize?: Size;

  /**
   * Render type of the node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type?: NodeRenderType;

  /**
   * The surfaceId of a texture consumer。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  surfaceId?: string;

  /**
   * 是否启用最小化模式。
   * 如果启用此选项，则通过BuilderNode.getFrameNode()获取的FrameNode
   * 是一个最小化的FrameNode，它提供最小的能力集。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  enableMinimized?: boolean;
}

/**
 * BuildOptions info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BuildOptions {

  /**
   * 是否支持 BuilderNode 的并行创建。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  useParallel?: boolean;

  /**
   * BuilderNode的LocalStorage。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  localStorage?: LocalStorage;
}

/**
 * Defines BuilderNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class BuilderNode<T = undefined> {

  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the BuilderNode
   * @param { RenderOptions } [options] - Render options of the Builder Node
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(uiContext: UIContext, options?: RenderOptions);

  /**
   * Build the BuilderNode with the builder.
   *
   * @param { WrappedBuilder<CustomBuilder> } builder - Defines the builder that will be called to build the node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  build(builder: WrappedBuilder<CustomBuilder>): void;

  /**
   * Build the BuilderNode with the builder.
   *
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - Defines the builder that will be called to build the node.
   * @param { T } arg - Defines the args that will be used in the builder.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  build(builder: WrappedBuilder<CustomBuilderT<T>>, arg: T): void;

  /**
   * Build the BuilderNode with the builder.Support the type that WrappedBuilder contains builder used different params.
   *
   * @param { WrappedBuilder<CustomBuilderT<T>> } builder - Defines the builder that will be called to build the node.
   * @param { T } arg - Defines the args that will be used in the builder.
   * @param { BuildOptions } options - Defines the options that will be used when building.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  build(builder: WrappedBuilder<CustomBuilderT<T>>, arg: T, options: BuildOptions): void;

  /**
   * Update the BuilderNode based on the provided parameters.
   *
   * @param { T } arg - Parameters used to update the BuilderNode, which must match the types required by the builder
   *     bound to the BuilderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  update(arg: T): void;

  /**
   * Get the FrameNode in BuilderNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode inside the BuilderNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFrameNode(): FrameNode | null;

  /**
   * 将 touchEvent 派发到当前BuilderNode下的FrameNode上。postTouchEvent 从组件树中的中间节点向下派发事件。为确保事件正确派发，需要将事件坐标转换为父组件的坐标系
   *
   * <p><strong>注意：</strong>
   * <br>传入的坐标需要转换为像素值（px）。如果 BuilderNode 应用了任何仿射变换，
   * <br>则必须将这些变换考虑在内，并与触摸事件坐标结合计算。
   * <br>在 Webview 中，坐标系转换已在内部处理，因此可直接派发触摸事件而无需额外调整。
   * <br>同一时间戳的 postTouchEvent API 只能调用一次。
   * <br>不支持 UIExtensionComponent。
   * </p>
   * @param { TouchEvent } event - 将被发送的 touchEvent。
   * @returns { boolean } - 如果触摸事件已成功发送到目标节点则返回 true，否则返回 false。
   *     如果事件未命中预期组件，请确保：
   *     1. 坐标系已正确转换
   *     2. 组件处于可交互状态
   *     3. 事件已绑定到组件
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  postTouchEvent(event: TouchEvent): boolean;

  /**
   * Dispose the BuilderNode immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dispose(): void;

  /**
   * 基于提供的参数复用BuilderNode。
   *
   * @param { RecordData } [param] - 用于复用BuilderNode的参数。该参数将直接用于BuilderNode中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定义行为。调用此方法将同步触发内部自定义组件的aboutToReuse生命周期回调，并将该参数作为回调的入参。默认值为undefined，此时BuilderNode中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  reuse(param?: RecordData): void;

  /**
   * Recycle the BuilderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  recycle(): void;

  /**
   * Notify BuilderNode to update the configuration to trigger a reload of the BuilderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  updateConfiguration(): void;

  /**
   * 获取 BuilderNode 是否已解绑。
   *
   * @returns { boolean } - 如果 BuilderNode 已解绑，返回 true；否则返回 false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isDisposed(): boolean;

  /**
   * 将输入事件分发到 BuilderNode 中的 FrameNode。postInputEvent 从组件树中的中间节点向下派发事件。为确保事件正确派发，需要将事件坐标转换为父组件的坐标系。
   *
   * 说明：
   * 输入的坐标值需要转换为像素单位(px)。鼠标左键点击事件将被转换为触摸事件。转发时请注意，如果在外层绑定了触摸事件和鼠标事件，可能会导致坐标偏移。注入轴事件时，由于轴事件缺少旋转轴信息，注入的事件无法触发旋转手势。转发的事件会在被分发到的目标组件所在的子树中进行触摸测试，并触发对应手势。原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。对于开发者构造的事件，必填字段必须赋值，例如触摸事件的touches字段和轴事件的scrollStep字段。同时要确保事件的完整性，例如触摸事件的TouchType中必须同时包含DOWN和UP字段，防止出现未定义行为。Webview已内部处理坐标系变换，可直接下发事件。postInputEvent接口需要提供手势坐标相对于输入事件对端内的窗口坐标。不建议多次转发同一事件。postInputEvent参数不支持UIExtensionComponent。
   *
   * @param { InputEventType } event - 要发送的事件。
   * @returns { boolean } - Returns true if the event has been successfully posted, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  postInputEvent(event: InputEventType): boolean;

  /**
   * 将事件分发到目标节点并指定处理策略。
   * 从组件树中的中间节点向下派发事件。为确保事件正确派发，需要将事件坐标转换为父组件的坐标系。
   *
   * 说明：
   * 输入的坐标值需要转换为像素单位(px)。鼠标左键点击事件将被转换为触摸事件。转发时请注意，如果在外层绑定了触摸事件和鼠标事件，可能会导致坐标偏移。注入轴事件时，由于轴事件缺少旋转轴信息，注入的事件无法触发旋转手势。转发的事件会在被
   * 分发到的目标组件所在的子树中进行触摸测试，并触发对应手势。原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。对于开发者构造的事件，必填字段必须赋值，例如触摸事件的touches字段和轴事件的scrollStep
   * 字段。同时要确保事件的完整性，例如触摸事件的TouchType中必须同时包含DOWN和UP字段，防止出现未定义行为。Webview已内部处理坐标系变换，可直接下发事件。postInputEvent接口需要提供手势坐标相对于输入事件
   * 对端内的窗口坐标。不建议多次转发同一事件。postInputEvent参数不支持UIExtensionComponent。
   *
   * @param { InputEventType } event - The event which will be sent to the targetNode.
   * @param { CompetitionStrategy } [competitionStrategy] - The competition strategy.
   * @returns { boolean } - 返回事件处理结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean;

  /**
   * Set if the BuilderNode inherits the freezing policy of the parent CustomComponent, BuilderNode, ComponentContent,
   * ReactiveBuilderNode or ReactiveComponentContent.
   * @param { boolean } enabled - If the BuilderNode inherits the freezing policy of the parent CustomComponent,
   *     BuilderNode, ComponentContent, ReactiveBuilderNode or ReactiveComponentContent. True to inherit, false not
   *     to inherit.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  inheritFreezeOptions(enabled: boolean): void;
}

/**
 * 定义转发支持的事件类型
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
 * 定义 ReactiveBuilderNode。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ReactiveBuilderNode {

  /**
   * 构造函数。
   *
   * @param { UIContext } uiContext - 用于创建 ReactiveBuilderNode 的 uiContext
   * @param { RenderOptions } [options] - ReactiveBuilderNode 的渲染选项
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(uiContext: UIContext, options?: RenderOptions);

  /**
   * 使用 builder 构建 ReactiveBuilderNode。
   *
   * @param { CustomBuilder } builder - 定义将用于构建节点的 builder。
   * @param { BuildOptions } [options] - 定义构建时将使用的选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  build(builder: CustomBuilder, options?: BuildOptions): void;

  /**
   * 获取 ReactiveBuilderNode 中的 FrameNode。
   *
   * @returns { FrameNode | null } - Returns a FrameNode inside the ReactiveBuilderNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getFrameNode(): FrameNode | null;

  /**
   * 将 touchEvent 派发到当前ReactiveBuilderNode下的FrameNode上。postTouchEvent 从组件树中的中间节点向下派发事件。为确保事件正确派发，需要将事件坐标转换为父组件的坐标系。
   *
   * <p><strong>注意：</strong>
   * <br>传入的坐标需要转换为像素值（px）。如果 ReactiveBuilderNode 应用了任何仿射变换，
   * <br>则必须将这些变换考虑在内，并与触摸事件坐标结合计算。
   * <br>在 Webview 中，坐标系转换已在内部处理，因此可直接派发触摸事件而无需额外调整。
   * <br>同一时间戳的 postTouchEvent API 只能调用一次。
   * <br>不支持 UIExtensionComponent。
   * </p>
   *
   * @param { TouchEvent } event - 将被发送的 touchEvent。
   * @returns { boolean } - 如果触摸事件已成功发送到目标节点则返回 true，否则返回 false。
   *     如果事件未命中预期组件，请确保：
   *     1. 坐标系已正确转换
   *     2. 组件处于可交互状态
   *     3. 事件已绑定到组件
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  postTouchEvent(event: TouchEvent): boolean;

  /**
   * 立即解绑 ReactiveBuilderNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  dispose(): void;

  /**
   * 基于提供的参数复用ReactiveBuilderNode。
   *
   * @param { RecordData } [param] - 用于复用ReactiveBuilderNode的参数。该参数将直接用于ReactiveBuilderNode中所有顶层自定义组件的复用，应该包含每个自定义组件的构造函数参数所需内容，否则，会导致未定义行为。调用此方法将同步触发内部自定义组件的aboutToReuse生命周期回调，并将该参数作为回调的入参。默认值为undefined，此时ReactiveBuilderNode中的自定义组件将直接使用构造时的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  reuse(param?: RecordData): void;

  /**
   * 回收 ReactiveBuilderNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  recycle(): void;

  /**
   * 通知 ReactiveBuilderNode 更新配置以触发重新加载。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  updateConfiguration(): void;

  /**
   * 立即刷新当前状态变更以更新ReactiveBuilderNode。
   * 这会强制组件使用最新的状态值进行同步更新。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  flushState(): void;

  /**
   * 获取 ReactiveBuilderNode 是否已被解绑。
   *
   * @returns { boolean } - 如果 ReactiveBuilderNode 已被解绑则返回 true，否则返回 false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isDisposed(): boolean;

  /**
   * 将输入事件分发到 ReactiveBuilderNode中的 FrameNode。postInputEvent 从组件树中的中间节点向下派发事件。为确保事件正确派发，需要将事件坐标转换为父组件的坐标系。
   *
   * 说明：
   * 输入的坐标值需要转换为像素单位(px)。鼠标左键点击事件将被转换为触摸事件。转发时请注意，如果在外层绑定了触摸事件和鼠标事件，可能会导致坐标偏移。注入轴事件时，由于轴事件缺少旋转轴信息，注入的事件无法触发旋转手势。转发的事件会在被分发到的目标组件所在的子树中进行触摸测试，并触发对应手势。原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。对于开发者构造的事件，必填字段必须赋值，例如触摸事件的touches字段和轴事件的scrollStep字段。同时要确保事件的完整性，例如触摸事件的TouchType中必须同时包含DOWN和UP字段，防止出现未定义行为。Webview已内部处理坐标系变换，可直接下发事件。postInputEvent接口需要提供手势坐标相对于输入事件对端内的窗口坐标。不建议多次转发同一事件。postInputEvent参数不支持UIExtensionComponent。
   *
   * @param { InputEventType } event - 要发送的事件。
   * @returns { boolean } - 如果事件已成功发送则返回 true，否则返回 false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  postInputEvent(event: InputEventType): boolean;

  /**
   * 使用竞争策略将事件分发到targetNode。
   * postInputEventWithStrategy从组件树的中间节点向下派发事件。为确保
   * 事件被正确调度，则需要将事件坐标转换为
   * 父组件。
   *
   * 说明：
   * 输入的坐标值需要转换为像素单位(px)。鼠标左键点击事件将被转换为触摸事件。转发时请注意，如果在外层绑定了触摸事件和鼠标事件，可能会导致坐标偏移。注入轴事件时，由于轴事件缺少旋转轴信息，注入的事件无法触发旋转手势。转发的事件会在被
   * 分发到的目标组件所在的子树中进行触摸测试，并触发对应手势。原始事件也会触发当前组件所在组件树中的手势。不保证两类手势的竞争结果。对于开发者构造的事件，必填字段必须赋值，例如触摸事件的touches字段和轴事件的scrollStep
   * 字段。同时要确保事件的完整性，例如触摸事件的TouchType中必须同时包含DOWN和UP字段，防止出现未定义行为。Webview已内部处理坐标系变换，可直接下发事件。postInputEvent接口需要提供手势坐标相对于输入事件
   * 对端内的窗口坐标。不建议多次转发同一事件。postInputEvent参数不支持UIExtensionComponent。
   *
   * @param { InputEventType  } event - The event which will be sent to the targetNode.
   * @param { CompetitionStrategy  } competitionStrategy - The competition strategy.
   * @returns { boolean } - 返回事件处理结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  postInputEventWithStrategy(event: InputEventType, competitionStrategy?: CompetitionStrategy): boolean;
}