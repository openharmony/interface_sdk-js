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

import { DrawContext, Size, NodeOffset, NodePosition, Pivot, Scale, Translation, Matrix4, Rotation, Frame, NodeBorderRadiuses, ShapeMask, ShapeClip, NodeEdges, LengthMetricsUnit, BackgroundBlur, ContentBlur, ForegroundBlur } from 'arkui.Graphics';

import { BorderStyle } from '@ohos.arkui.component';

/**
* 提供自绘制渲染节点RenderNode，支持开发者通过C API进行开发，完成自定义绘制需求。
*
* > **说明：**
* >
* > - 不建议对[BuilderNode]{@link BuilderNode}中的RenderNode进行修改操作。BuilderNode中持有的[FrameNode]{@link FrameNode}仅用于将该
* > BuilderNode作为子节点挂载到其他FrameNode上，对该FrameNode或对应的RenderNode进行属性设置与子节点操作可能会产生未定义行为，包括但不限于显示异常、事件异常、稳定性问题等。
* >
* > - RenderNode对象不支持使用JSON序列化。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RenderNode {

  /**
   * RenderNode的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 在RenderNode最后一个子节点后添加新的子节点。
   *
   * @param { RenderNode } node - 需要添加的RenderNode。
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'node' is invalid: its corresponding FrameNode
   *     cannot be adopted."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  appendChild(node: RenderNode): void;

  /**
   * 在RenderNode指定子节点之后添加新的子节点。
   *
   * @param { RenderNode } child - 需要添加的子节点。
   * @param { RenderNode | null } sibling - 新节点将插入到该节点之后。若该参数设置为空，则新节点将插入到首个子节点之前。
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: its corresponding FrameNode
   *     cannot be adopted."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  insertChildAfter(child: RenderNode, sibling: RenderNode | null): void;

  /**
   * 从RenderNode中删除指定的子节点。
   *
   * @param { RenderNode } node - 需要删除的子节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeChild(node: RenderNode): void;

  /**
   * 清除当前RenderNode的所有子节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clearChildren(): void;

  /**
   * 通过索引获取当前RenderNode的子节点。
   *
   * @param { int } index - 需要查询的子节点的序列号。
   *     <br>取值限定为整数。
   * @returns { RenderNode | null } - Returns a RenderNode. When the required node does not exist, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getChild(index: int): RenderNode | null;

  /**
   * 获取当前RenderNode的第一个子节点。
   *
   * @returns {  RenderNode | null } - Returns a RenderNode, which is first child of the current RenderNode.
   *     If current RenderNode does not have child node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFirstChild(): RenderNode | null;

  /**
   * 获取当前RenderNode的下一个同级节点。
   *
   * @returns { RenderNode | null } - Returns a RenderNode. If current RenderNode does not have next
   *     sibling node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getNextSibling(): RenderNode | null;

  /**
   * 获取当前RenderNode的上一个同级节点。
   *
   * @returns { RenderNode | null } - Returns a RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPreviousSibling(): RenderNode | null;

  /**
   * 设置RenderNode的背景颜色。
   *
   * @param { int } color - 背景颜色值，ARGB格式，示例：0xE5E5E5。
   *     <br>取值限定为整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set backgroundColor(color: int);

  /**
   * 获取RenderNode的背景色。
   *
   * @returns { int } - Returns a background color. Colors are defined as ARGB format represented by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get backgroundColor(): int;

  /**
   * 设置是否对当前RenderNode剪裁。若设置为true，则超出该RenderNode大小的部分将会被截断。
   *
   * @param { boolean } useClip - 设置是否进行剪裁。<br/>true表示对当前RenderNode剪裁，false表示不对当前RenderNode剪裁。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set clipToFrame(useClip: boolean);

  /**
   * 获取RenderNode是否裁剪到帧。
   *
   * @returns { boolean } - 返回RenderNode是否裁剪到帧。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get clipToFrame(): boolean;

  /**
   * 设置RenderNode的不透明度。
   *
   * @param { double } value - 将要设置的不透明度，数据范围为[0, 1]，值越大透明度越低。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set opacity(value: double);

  /**
   * 获取RenderNode的不透明度。
   *
   * @returns { double } 返回RenderNode的不透明度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get opacity(): double;

  /**
   * 设置当前RenderNode的大小。
   *
   * @param { Size } size - 将要设置的RenderNode的大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set size(size: Size);

  /**
   * 获取RenderNode的帧大小。
   *
   * @returns { Size } RenderNode框架的大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get size(): Size;

  /**
   * 设置RenderNode的frame位置。
   *
   * @param { NodePosition } position - 将要设置的RenderNode的位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set position(position: NodePosition);

  /**
   * 获取RenderNode的帧位置。
   *
   * @returns { NodePosition } - RenderNode框架的位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get position(): NodePosition;

  /**
   * 设置当前RenderNode的大小和位置。当和[position]{@link RenderNode#set position(position: NodePosition)}、
   * [size]{@link RenderNode#set size(size: Size)}同时使用时，以后设置的为准。
   *
   * @param { Frame } frame - 将要设置的RenderNode的大小和位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set frame(frame: Frame);

  /**
   * 获取RenderNode的框架信息。
   *
   * @returns { Frame } - 返回RenderNode的帧信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get frame(): Frame;

  /**
   * 设置当前RenderNode的轴心，影响RenderNode的缩放和旋转效果。
   *
   * @param { Pivot } pivot - 将要设置的RenderNode的轴心。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set pivot(pivot: Pivot);

  /**
   * 获取RenderNode的轴心向量。
   *
   * @returns { Pivot } - 返回RenderNode的轴心向量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get pivot(): Pivot;

  /**
   * 设置当前RenderNode的比例。
   *
   * @param { Scale } scale - 将要设置的RenderNode的缩放比例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set scale(scale: Scale);

  /**
   * 获取RenderNode的缩放向量。
   *
   * @returns { Scale } - 返回RenderNode的缩放向量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get scale(): Scale;

  /**
   * 设置当前RenderNode的平移量。
   *
   * @param { Translation } translation - 将要设置的RenderNode的平移量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set translation(translation: Translation);

  /**
   * 获取RenderNode的平移向量。
   *
   * @returns { Translation } - 返回RenderNode的平移向量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get translation(): Translation;

  /**
   * 设置当前RenderNode的旋转角度。
   *
   * @param { Rotation } rotation - 将要设置的RenderNode的旋转角度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set rotation(rotation: Rotation);

  /**
   * 获取RenderNode的旋转向量。
   *
   * @returns { Rotation } - 返回RenderNode的旋转向量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get rotation(): Rotation;

  /**
   * 设置当前RenderNode的变换矩阵。
   *
   * @param { Matrix4 } transform - 将要设置的RenderNode的变换矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set transform(transform: Matrix4);

  /**
   * 获取RenderNode的转换信息。
   *
   * @returns {Matrix4 } - Returns transform info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get transform(): Matrix4;

  /**
   * 设置RenderNode的阴影颜色。
   *
   * @param { int } color - 将要设置的RenderNode的阴影颜色，ARGB格式。<br/>取值范围是符合ARGB格式的颜色。
   *     <br>取值限定为整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowColor(color: int);

  /**
   * 获取RenderNode的阴影颜色。
   *
   * @returns { int } - 返回RenderNode的阴影颜色。颜色定义为ARGB格式，表示为
   *     号。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowColor(): int;

  /**
   * 设置RenderNode的阴影偏移量。
   *
   * @param { NodeOffset } offset - 将要设置的RenderNode的阴影偏移。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowOffset(offset: NodeOffset);

  /**
   * 获取RenderNode的阴影偏移量。
   *
   * @returns { NodeOffset } - 返回RenderNode的阴影偏移量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowOffset(): NodeOffset;

  /**
   * 设置当前RenderNode的标签。若当前节点是通过new创建的RenderNode，则设置的标签信息会在节点Inspector信息的属性中。
   *
   * @param { string } label - 将要设置的RenderNode的标签。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set label(label: string);

  /**
   * 获取RenderNode的标签。
   *
   * @returns { string } - 返回RenderNode的标签。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get label(): string;

  /**
   * 设置RenderNode的阴影alpha。
   *
   * @param { double } alpha - 将要设置的RenderNode的阴影颜色的Alpha值。<br/> 取值范围是alpha值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowAlpha(alpha: double);

  /**
   * 获取RenderNode的阴影alpha。
   *
   * @returns { double } - 返回RenderNode的阴影alpha。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowAlpha(): double;

  /**
   * 设置RenderNode的阴影高度。
   *
   * @param { double } elevation - 将要设置的RenderNode的光照高度。<br/>。
   *     <br>取值范围：[0, +∞)。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowElevation(elevation: double);

  /**
   * 获取RenderNode的阴影高度。
   *
   * @returns { double } - 返回RenderNode的阴影高度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowElevation(): double;

  /**
   * 设置RenderNode的阴影半径。
   *
   * @param { double } radius - 将要设置的RenderNode的阴影模糊半径。<br/>。
   *     <br>取值范围：[0, +∞)。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowRadius(radius: double);

  /**
   * 获取RenderNode的阴影半径。
   *
   * @returns { double } - 返回RenderNode的阴影半径。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowRadius(): double;

  /**
   * 设置RenderNode的边框样式。
   *
   * @param { NodeEdges<BorderStyle> } style - RenderNode的边框样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set borderStyle(style: NodeEdges<BorderStyle>);

  /**
   * 获取RenderNode的边框样式。
   *
   * @returns { NodeEdges<BorderStyle> | undefined } - Returns the border style of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get borderStyle(): NodeEdges<BorderStyle> | undefined;

  /**
   * 设置RenderNode的边框宽度。
   *
   * @param { NodeEdges<double> } width - RenderNode的边框宽度，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set borderWidth(width: NodeEdges<double>);

  /**
   * 获取RenderNode的边框宽度。
   *
   * @returns { NodeEdges<double> | undefined } - Returns the border width of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get borderWidth(): NodeEdges<double> | undefined;

  /**
   * 设置RenderNode的边框颜色。
   *
   * @param { NodeEdges<int> } color - RenderNode的边框颜色。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set borderColor(color: NodeEdges<int>);

  /**
   * 获取RenderNode的边框颜色。
   *
   * @returns { NodeEdges<int> | undefined } - Returns the border color of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get borderColor(): NodeEdges<int> | undefined;

  /**
   * 设置RenderNode的边界半径。
   *
   * @param { NodeBorderRadiuses } radius - RenderNode的边框圆角，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set borderRadius(radius: NodeBorderRadiuses);

  /**
   * 获取RenderNode的边界半径。
   *
   * @returns { NodeBorderRadiuses | undefined } - Returns the border radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get borderRadius(): NodeBorderRadiuses | undefined;

  /**
   * 设置当前RenderNode的遮罩。
   *
   * @param { ShapeMask } shapeMask - RenderNode的遮罩。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shapeMask(shapeMask: ShapeMask);

  /**
   * 获取RenderNode的形状掩码。
   *
   * @returns { ShapeMask | undefined } - Returns the shape mask of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shapeMask(): ShapeMask | undefined;

  /**
   * 设置当前RenderNode的裁剪形状。
   *
   * @param { ShapeClip } shapeClip - RenderNode的裁剪形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shapeClip(shapeClip: ShapeClip);

  /**
   * 获取RenderNode的形状裁剪属性
   *
   * @returns { ShapeClip } - 返回RenderNode的形状裁剪属性
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shapeClip(): ShapeClip;

  /**
   * 标记是否优先绘制节点及其子节点。若设置为true，则透明度等属性将在节点绘制完毕后再进行合成。设置效果如下：
   *
   * ![markNodeGroup](docroot://reference/apis-arkui/figures/renderNode-markNodeGroup.png)
   *
   * @param { boolean } isNodeGroup - 设置是否优先绘制节点及其子节点。<br/>true表示优先绘制节点及其子节点，false表示不是优先绘制节点及其子节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set markNodeGroup(isNodeGroup: boolean);

  /**
   * 获取是否优先绘制节点及其子节点。
   *
   * @returns { boolean } - 返回是否优先绘制节点及其子节点。
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get markNodeGroup(): boolean;

  /**
   * 绘制方法，需要开发者进行实现。该方法会在RenderNode进行绘制时被调用。
   *
   * 该接口的[DrawContext]{@link Graphics:DrawContext}中的Canvas是用于记录指令的临时Canvas，并非节点的真实Canvas。使用请参见
   * [调整自定义绘制Canvas的变换矩阵](docroot://ui/arkts-user-defined-arktsNode-renderNode.md#调整自定义绘制canvas的变换矩阵)。
   *
   * > **说明：**
   * >
   * > RenderNode初始化时，会调用两次draw方法。第一次调用是在首次创建FrameNode时触发Render流程，第二次调用是在首次设置modifier时触发绘制。后续绘制流程皆由modifier触发。
   *
   * @param { DrawContext } context - 图形绘制上下文。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  draw(context: DrawContext): void;

  /**
   * 该方法会触发RenderNode的重新渲染。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  invalidate(): void;

  /**
   * 立即释放当前RenderNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dispose(): void;

  /**
   * 查询当前RenderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在
   * dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。
   *
   * @returns { boolean } - 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isDisposed(): boolean;

  /**
   * 设置RenderNode各个属性使用的单位。
   *
   * @param { LengthMetricsUnit } unit - 设置RenderNode各个属性使用的单位。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set lengthMetricsUnit(unit: LengthMetricsUnit);

  /**
   * 获取RenderNode的长度度量单位。
   *
   * @returns { LengthMetricsUnit } - 返回RenderNode的长度度量单位。
   * @default LengthMetricsUnit.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get lengthMetricsUnit(): LengthMetricsUnit;

  /**
   * 设置背景模糊效果。当参数为undefined时，移除背景模糊效果。
   *
   * @param { BackgroundBlur | undefined } blurValue - 背景模糊效果。undefined表示移除效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  set backgroundBlur(blurValue: BackgroundBlur | undefined);

  /**
   * 获取背景模糊效果。
   *
   * @returns { BackgroundBlur } - 返回背景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  get backgroundBlur(): BackgroundBlur;

  /**
   * 设置内容模糊效果。当参数为undefined时，移除内容模糊效果。
   *
   * @param { ContentBlur | undefined } blurValue - 内容模糊效果。undefined表示无内容模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  set contentBlur(blurValue: ContentBlur | undefined);

  /**
   * 获取内容模糊效果。
   *
   * @returns { ContentBlur } - 返回内容模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  get contentBlur(): ContentBlur;

  /**
   * 设置前景模糊效果。当参数为undefined时，移除前景模糊效果。
   *
   * @param { ForegroundBlur | undefined } blurValue - 前景模糊效果。undefined表示无前景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  set foregroundBlur(blurValue: ForegroundBlur | undefined);

  /**
   * 获取前景模糊效果。
   *
   * @returns { ForegroundBlur } - 返回前景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  get foregroundBlur(): ForegroundBlur;
}