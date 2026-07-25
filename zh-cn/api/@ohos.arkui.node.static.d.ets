'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * 导出NodeRenderType、RenderOptions、BuilderNode、ReactiveBuilderNode，用于通过builder创建节点树并管理树的更新。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { NodeRenderType, RenderOptions, BuilderNode, ReactiveBuilderNode } from 'arkui.BuilderNode';

/**
 * 导出BuildOptions，用于通过builder创建节点树并管理树的更新。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { BuildOptions } from 'arkui.BuilderNode';

/**
 * 导出NodeController，即节点容器的控制器。为关联的NodeContainer提供生命周期回调，并提供控制NodeContainer子节点的方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { NodeController } from 'arkui.NodeController';

/**
 * 导出FrameNode，一种包含RenderNode的基本节点类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { FrameNode, LayoutConstraint, ExpandMode, CrossLanguageOptions } from 'arkui.FrameNode';

/**
 * 导出UIState。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export { UIState } from 'arkui.FrameNode';

/**
 * 导出typeNode、NodeAdapter。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { typeNode, NodeAdapter } from 'arkui.FrameNode';

/**
 * 导出与图形相关的基本类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { DrawContext, Size, NodeOffset, NodePosition, Pivot, Scale, Translation, Matrix4, Rotation, Frame, RoundRect, Circle, CommandPath, ShapeMask, ShapeClip, NodeBorderRadiuses, CornerRadius, Rect, NodeEdges, edgeColors, edgeWidths, borderStyles, borderRadiuses, LengthMetricsUnit } from 'arkui.Graphics';

/**
 * 导出与图形相关的基本类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { LengthUnit, SizeT, PositionT, LengthMetrics, ColorMetrics } from 'arkui.Graphics';

/**
 * 导出RenderNode。RenderNode包含节点树操作和节点上的渲染属性操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { RenderNode } from 'arkui.RenderNode';

/**
 * 导出Content。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { Content } from 'arkui.Content';

/**
 * 导出ComponentContent、ComponentContentBase、ReactiveComponentContent。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { ComponentContent, ComponentContentBase, ReactiveComponentContent } from 'arkui.ComponentContent';

/**
 * 导出NodeContent。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export { NodeContent } from 'arkui.NodeContent';
