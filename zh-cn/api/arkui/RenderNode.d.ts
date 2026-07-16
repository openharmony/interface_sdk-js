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
 * 提供自绘制渲染节点RenderNode，支持开发者通过C API进行开发，完成自定义绘制需求。
 *
 * > **说明：**
 * >
 * > - 不建议对[BuilderNode]{@link BuilderNode}中的RenderNode进行修改操作。
 * > BuilderNode中持有的[FrameNode]{@link FrameNode}仅用于将该BuilderNode作为子节点挂载到其他FrameNode上，
 * > 对该FrameNode或对应的RenderNode进行属性设置与子节点操作可能会产生未定义行为，包括但不限于显示异常、事件异常、稳定性问题等。
 * >
 * > - RenderNode对象不支持使用JSON序列化。
 *
 * @file
 * @kit ArkUI
 */

import { BusinessError } from '../@ohos.base';

import { DrawContext, Size, Offset, Position, Pivot, Scale, Translation, Matrix4, Rotation, Frame, BorderRadiuses, ShapeMask, ShapeClip, Edges, LengthMetricsUnit, BackgroundBlur, ContentBlur, ForegroundBlur } from './Graphics';

/**
 * 提供自绘制渲染节点RenderNode，支持开发者通过C API进行开发，完成自定义绘制需求。
 *
 * > **说明：**
 *
 * > - 不建议对[BuilderNode]{@link BuilderNode}中的RenderNode进行修改操作。BuilderNode中持有的[FrameNode]{@link FrameNode}仅用于将该
 * > BuilderNode作为子节点挂载到其他FrameNode上，对该FrameNode或对应的RenderNode进行属性设置与子节点操作可能会产生未定义行为，包括但不限于显示异常、事件异常、稳定性问题等。
 * >
 * > - RenderNode对象不支持使用JSON序列化。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class RenderNode {
  /**
   * RenderNode的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor();

  /**
   * 在RenderNode最后一个子节点后添加新的子节点。
   *
   * @param { RenderNode } node - 需要添加的RenderNode。
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'node' is invalid: its corresponding FrameNode
   *     cannot be adopted." [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  appendChild(node: RenderNode): void;

  /**
   * 在RenderNode指定子节点之后添加新的子节点。
   *
   * @param { RenderNode } child - 需要添加的子节点。
   * @param { RenderNode | null } sibling - 需要添加的子节点。
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: its corresponding FrameNode
   *     cannot be adopted." [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  insertChildAfter(child: RenderNode, sibling: RenderNode | null): void;

  /**
   * 从RenderNode中删除指定的子节点。
   *
   * @param { RenderNode } node - 需要删除的子节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  removeChild(node: RenderNode): void;

  /**
   * 清除当前RenderNode的所有子节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  clearChildren(): void;

  /**
   * 获取当前RenderNode指定位置的子节点。
   *
   * @param { number } index - 需要查询的子节点的序列号。
   * @returns { RenderNode | null } Child node obtained. If the RenderNode does not contain the specified child node,
   *     null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getChild(index: number): RenderNode | null;

  /**
   * 获取当前RenderNode的第一个子节点。
   *
   * @returns {  RenderNode | null } First child node. If the RenderNode does not contain any child node, null is
   *     returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getFirstChild(): RenderNode | null;

  /**
   * 获取当前RenderNode的下一个同级节点。
   *
   * @returns { RenderNode | null } Next sibling node of the current RenderNode. If the RenderNode does not have the
   *     next sibling node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getNextSibling(): RenderNode | null;

  /**
   * 获取当前RenderNode的上一个同级节点。
   *
   * @returns { RenderNode | null } Previous sibling node of the current RenderNode. If the RenderNode does not have the
   *     previous sibling node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getPreviousSibling(): RenderNode | null;

  /**
   * 设置当前RenderNode的背景颜色。
   *
   * @param { number } color - 背景颜色值，ARGB格式，示例：0xE5E5E5。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set backgroundColor(color: number);

  /**
   * Get the background color of the RenderNode.
   *
   * @default 0X00000000 [since 11 - 11]
   * @returns { number } - Returns a background color. Colors are defined as ARGB format represented by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get backgroundColor(): number;

  /**
   * 设置是否对当前RenderNode剪裁。若设置为true，则超出该RenderNode大小的部分将会被截断。
   *
   * @param { boolean } useClip - 设置是否进行剪裁。<br/>true表示对当前RenderNode剪裁，false表示不对当前RenderNode剪裁。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set clipToFrame(useClip: boolean);

  /**
   * Get whether the RenderNode clip to frame.
   *
   * @default true [since 11 - 11]
   * @returns { boolean } - Returns whether the RenderNode clip to frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get clipToFrame(): boolean;

  /**
   * 设置当前RenderNode的不透明度。若输入的数值小于0，会被视为0。若输入的数值大于1，会被视为1。
   *
   * @param { number } value - 将要设置的不透明度，数据范围为[0, 1]，值越大透明度越低。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set opacity(value: number);

  /**
   * Get opacity of the RenderNode.
   *
   * @default 1 [since 11 - 11]
   * @returns { number } Returns the opacity of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get opacity(): number;

  /**
   * 设置当前RenderNode的大小。
   *
   * @param { Size } size - 将要设置的RenderNode的大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set size(size: Size);

  /**
   * Get frame size of the RenderNode.
   *
   * @default Size { width: 0, height: 0 } [since 11 - 11]
   * @returns { Size } The size of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get size(): Size;

  /**
   * 设置当前RenderNode的位置。
   *
   * @param { Position } position - 将要设置的RenderNode的位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set position(position: Position);

  /**
   * Get frame position of the RenderNode.
   *
   * @default Position { x: 0, y: 0 } [since 11 - 11]
   * @returns { Position } - The position of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get position(): Position;

  /**
   * 设置当前RenderNode的大小和位置。当和[position]{@link RenderNode#set position(position: Position)}、
   * [size]{@link RenderNode#set size(size: Size)}同时使用时，以后设置的为准。
   *
   * @param { Frame } frame - 将要设置的RenderNode的大小和位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set frame(frame: Frame);

  /**
   * Get frame info of the RenderNode.
   *
   * @default Frame { x: 0, y: 0, width: 0, height: 0 } [since 11 - 11]
   * @returns { Frame } - Returns frame info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get frame(): Frame;

  /**
   * 设置当前RenderNode的轴心，影响RenderNode的缩放和旋转效果。
   *
   * @param { Pivot } pivot - 将要设置的RenderNode的轴心。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set pivot(pivot: Pivot);

  /**
   * Get pivot vector of the RenderNode.
   *
   * @default Pivot { x: 0.5, y: 0.5 } [since 11 - 11]
   * @returns { Pivot } - Returns pivot vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get pivot(): Pivot;

  /**
   * 设置当前RenderNode的比例。
   *
   * @param { Scale } scale - 将要设置的RenderNode的缩放比例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set scale(scale: Scale);

  /**
   * Get scale vector of the RenderNode.
   *
   * @default Scale { x: 1, y: 1 } [since 11 - 11]
   * @returns { Scale } - Returns scale vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get scale(): Scale;

  /**
   * 设置当前RenderNode的平移量。
   *
   * @param { Translation } translation - 将要设置的RenderNode的平移量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set translation(translation: Translation);

  /**
   * Get translation vector of the RenderNode.
   *
   * @default Translation { x: 0, y: 0 } [since 11 - 11]
   * @returns { Translation } - Returns translation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get translation(): Translation;

  /**
   * 设置当前RenderNode的旋转角度。
   *
   * @param { Rotation } rotation - 将要设置的RenderNode的旋转角度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set rotation(rotation: Rotation);

  /**
   * Get rotation vector of the RenderNode.
   *
   * @default Rotation { x: 0, y: 0, z: 0 } [since 11 - 11]
   * @returns { Rotation } - Returns rotation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get rotation(): Rotation;

  /**
   * 设置当前RenderNode的变换矩阵。
   *
   * @param { Matrix4 } transform - 将要设置的RenderNode的变换矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set transform(transform: Matrix4);

  /**
   * Get transform info of the RenderNode.
   *
   * @default Matrix4 [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] [since 11 - 11]
   * @returns {Matrix4 } - Returns transform info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get transform(): Matrix4;

  /**
   * 设置当前RenderNode的阴影颜色，ARGB格式。若设置了[shadowAlpha]{@link RenderNode#set shadowAlpha(alpha: number)}，则不透明度以shadowAlpha为准。
   *
   * @param { number } color - 将要设置的RenderNode的阴影颜色，ARGB格式。<br/>取值范围是符合ARGB格式的颜色。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowColor(color: number);

  /**
   * Get shadow color of the RenderNode.
   *
   * @default 0X00000000 [since 11 - 11]
   * @returns { number } - Returns the shadow color of the RenderNode. Colors are defined as ARGB format represented by
   *     number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowColor(): number;

  /**
   * 设置当前RenderNode的阴影偏移。
   *
   * @param { Offset } offset - 将要设置的RenderNode的阴影偏移。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowOffset(offset: Offset);

  /**
   * Get shadow offset of the RenderNode.
   *
   * @default Offset { x: 0, y: 0 } [since 11 - 11]
   * @returns { Offset } - Returns the shadow offset of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowOffset(): Offset;

  /**
   * 设置当前RenderNode的标签。若当前节点是通过new创建的RenderNode，则设置的标签信息会在节点Inspector信息的属性中。
   *
   * @param { string } label - 将要设置的RenderNode的标签。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set label(label: string);

  /**
   * 获取当前RenderNode的标签。默认值为""。
   *
   * @returns { string } - 返回当前RenderNode的标签。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get label(): string;

  /**
   * 设置当前RenderNode的阴影颜色的Alpha值。
   *
   * @param { number } alpha - 将要设置的RenderNode的阴影颜色的Alpha值。<br/> 取值范围是alpha值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowAlpha(alpha: number);

  /**
   * Get shadow alpha of the RenderNode.
   *
   * @default 0 [since 11 - 11]
   * @returns { number } - Returns the shadow alpha of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowAlpha(): number;

  /**
   * 设置当前RenderNode的阴影的光照高度。
   *
   * @param { number } elevation - 将要设置的RenderNode的光照高度。<br/> 取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowElevation(elevation: number);

  /**
   * Get shadow elevation of the RenderNode.
   *
   * @default 0 [since 11 - 11]
   * @returns { number } - Returns the shadow elevation of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowElevation(): number;

  /**
   * 设置当前RenderNode的阴影模糊半径。
   *
   * @param { number } radius - 将要设置的RenderNode的阴影模糊半径。<br/> 取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowRadius(radius: number);

  /**
   * Get shadow radius of the RenderNode.
   *
   * @default 0 [since 11 - 11]
   * @returns { number } - Returns the shadow radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowRadius(): number;

  /**
   * 设置当前RenderNode的边框样式。
   *
   * @param { Edges<BorderStyle> } style - RenderNode的边框样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderStyle(style: Edges<BorderStyle>);

  /**
   * 获取当前RenderNode的边框样式。
   *
   * @returns { Edges<BorderStyle> } - 返回当前RenderNode的边框样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderStyle(): Edges<BorderStyle>;

  /**
   * 设置当前RenderNode的边框宽度。
   *
   * @param { Edges<number> } width - RenderNode的边框宽度，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderWidth(width: Edges<number>);

  /**
   * Get border width of the RenderNode.
   *
   * @default 0
   * @returns { Edges<number> } - Returns the border width of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderWidth(): Edges<number>;

  /**
   * 设置当前RenderNode的边框颜色。
   *
   * @param { Edges<number> } color - RenderNode的边框颜色。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderColor(color: Edges<number>);

  /**
   * Get border color of the RenderNode.
   *
   * @default 0XFF000000
   * @returns { Edges<number> } - Returns the border color of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderColor(): Edges<number>;

  /**
   * 设置当前RenderNode的边框圆角。
   *
   * @param { BorderRadiuses } radius - RenderNode的边框圆角，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderRadius(radius: BorderRadiuses);

  /**
   * Get border radius of the RenderNode.
   *
   * @default 0
   * @returns { BorderRadiuses } - Returns the border radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderRadius(): BorderRadiuses;

  /**
   * 设置当前RenderNode的遮罩。
   *
   * @param { ShapeMask } shapeMask - RenderNode的遮罩。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set shapeMask(shapeMask: ShapeMask);

  /**
   * 获取当前RenderNode的遮罩。
   *
   * @returns { ShapeMask } - 返回当前RenderNode的遮罩。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get shapeMask(): ShapeMask;

  /**
   * 设置当前RenderNode的裁剪形状。
   *
   * @param { ShapeClip } shapeClip - RenderNode的裁剪形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set shapeClip(shapeClip: ShapeClip);

  /**
   * 获取目标RenderNode的形状裁剪属性
   *
   * @returns { ShapeClip } - 返回目标RenderNode的形状裁剪属性
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set markNodeGroup(isNodeGroup: boolean);

  /**
   * Get whether to preferentially draw the node and its children.
   *
   * @default false
   * @returns { boolean } - Return whether to preferentially draw the node and its children.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  draw(context: DrawContext): void;

  /**
   * 该方法会触发RenderNode的重新渲染。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  invalidate(): void;

  /**
   * 立即释放当前RenderNode。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * 设置RenderNode各个属性使用的单位。
   *
   * @param { LengthMetricsUnit } unit - 设置RenderNode各个属性使用的单位。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set lengthMetricsUnit(unit: LengthMetricsUnit);

  /**
   * Get the length metrics unit of RenderNode.
   *
   * @default LengthMetricsUnit.DEFAULT
   * @returns { LengthMetricsUnit } - Return the length metrics unit of RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get lengthMetricsUnit(): LengthMetricsUnit;

  /**
   * 查询当前RenderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在
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

  /**
   * 设置背景模糊效果。
   *
   * @param { BackgroundBlur | undefined } blurValue - 背景模糊效果。undefined表示无背景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  set backgroundBlur(blurValue: BackgroundBlur | undefined);

  /**
   * 获取背景模糊效果。
   *
   * @returns { BackgroundBlur } - 返回背景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  get backgroundBlur(): BackgroundBlur;

  /**
   * 设置内容模糊效果。
   *
   * @param { ContentBlur | undefined } blurValue - 内容模糊效果。undefined表示无内容模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  set contentBlur(blurValue: ContentBlur | undefined);

  /**
   * 获取内容模糊效果。
   *
   * @returns { ContentBlur } - 返回内容模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  get contentBlur(): ContentBlur;

  /**
   * 设置前景模糊效果。
   *
   * @param { ForegroundBlur | undefined } blurValue - 前景模糊效果。undefined表示无前景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  set foregroundBlur(blurValue: ForegroundBlur | undefined);

  /**
   * 获取前景模糊效果。
   *
   * @returns { ForegroundBlur } - 返回前景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  get foregroundBlur(): ForegroundBlur;
}