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

/**
 * 导出NodeRenderType、RenderOptions、BuilderNode，用于通过builder创建节点树并管理树的更新。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export { NodeRenderType, RenderOptions, BuilderNode } from './arkui/BuilderNode';

/**
 * 导出BuildOptions，用于通过builder创建节点树并管理树的更新。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export { BuildOptions } from './arkui/BuilderNode';

/**
 * 导出InputEventType，即要发送的输入事件类型。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export { InputEventType } from './arkui/BuilderNode';

/**
 * 导出ReactiveBuilderNode，用于通过builder创建节点树并管理树的更新。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export { ReactiveBuilderNode } from './arkui/BuilderNode';

/**
 * 导出NodeController，即节点容器的控制器。为关联的NodeContainer提供生命周期回调，并提供控制NodeContainer子节点的方法。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export { NodeController } from './arkui/NodeController';

/**
 * 导出FrameNode，一种包含RenderNode的基本节点类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export { FrameNode, LayoutConstraint, ExpandMode, UIState } from './arkui/FrameNode';

/**
 * 导出ChildrenCountMode。指定查询子节点数量时如何计数子节点。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export { ChildrenCountMode } from './arkui/FrameNode';

/**
 * 导出typeNode、NodeAdapter。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export { typeNode, NodeAdapter } from './arkui/FrameNode';

/**
 * 导出与图形相关的基本类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export { DrawContext, Size, Offset, Position, Pivot, Scale, Translation, Matrix4, Rotation, Frame, RoundRect, Circle, CommandPath, ShapeMask, ShapeClip, BorderRadiuses, CornerRadius, Rect, Edges, edgeColors, edgeWidths, borderStyles, borderRadiuses, LengthMetricsUnit } from './arkui/Graphics';

/**
 * 导出与图形相关的基本类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export { LengthUnit, SizeT, LengthMetrics, ColorMetrics } from './arkui/Graphics';

/**
 * 导出与图形相关的基本类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export { BackgroundBlur, ContentBlur, ForegroundBlur } from './arkui/Graphics';

/**
 * 导出RenderNode。RenderNode包含节点树操作和节点上的渲染属性操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export { RenderNode } from './arkui/RenderNode';

/**
 * 导出XComponentNode，继承自FrameNode。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export { XComponentNode } from './arkui/XComponentNode';

/**
 * 导出Content。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export { Content } from './arkui/Content';

/**
 * 导出ComponentContent、ComponentContentBase。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export { ComponentContent, ComponentContentBase } from './arkui/ComponentContent';

/**
 * 导出ReactiveComponentContent。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export { ReactiveComponentContent } from './arkui/ComponentContent';

/**
 * 导出NodeContent。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export { NodeContent } from './arkui/NodeContent';
