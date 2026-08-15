/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics3D
 */

import { SceneResource, Mesh, Morpher, Effect } from './SceneResources';
import { RaycastParameters, RaycastResult } from './Scene';
import { Position3, Quaternion, Scale3, Color, Vec2, Vec3, RenderingPipelineType, Mat4x4 } from './SceneTypes';
import { PostProcessSettings } from './ScenePostProcessSettings';

/**
 * 用于定义节点的图层掩码。
 *
 * @interface LayerMask
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface LayerMask {
  /**
   * 获取指定图层下标图层掩码的使能状态。
   *
   * @param { int } index - 要使能图层的下标，值域为大于等于0的整数。
   * @returns { boolean } 返回特定下标的图层是否使能。true表示使用图层掩码，false表示不使用。 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getEnabled(index: int): boolean;

  /**
   * 将特定下标的图层掩码使能。
   *
   * @param { int } index - 要使能图层的下标，值域为大于等于0的整数。
   * @param { boolean } enabled - 要设置的使能状态。true表示使用图层掩码，false表示不使用。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  setEnabled(index: int, enabled: boolean): void;
}

/**
 * 节点类型枚举。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum NodeType {
  /**
   * 节点是空节点。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  NODE = 1,

  /**
   * 几何类型节点。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  GEOMETRY = 2,

  /**
   * 相机类型节点。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  CAMERA = 3,

  /**
   * 灯光类型节点。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  LIGHT = 4,

  /**
   * 自定义类型节点，通常这意味着该节点是在扩展插件中定义的类型。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  CUSTOM = 255
}

/**
 * 定义场景对象的容器。容器提供了一种将场景对象分组到层次结构中的方法。
 *
 * @interface Container
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Container<T> {
  /**
   * 追加一个对象到容器。如果追加的对象已存在于容器中，容器会先移除该对象再插入，因此数量不会增加。
   *
   * @param { T } item - T类型对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  append(item: T): void;

  /**
   * 在兄弟节点后面插入对象。如果插入的对象已存在于容器中，容器会先移除该对象再插入，因此数量不会增加。
   *
   * @param { T } item - 要插入节点。
   * @param { T | null } sibling - 兄弟节点。当为null时，表示插入到容器的开头位置。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  insertAfter(item: T, sibling: T | null): void;

  /**
   * 移除指定对象。
   *
   * @param { T } item - 要移除的对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  remove(item: T): void;

  /**
   * 获取特定下标对象，获取不到则返回空。
   *
   * @param { int } index - 要获取对象的下标，取值范围是大于等于0的整数。
   * @returns { T | null } 返回获取到的对象，获取不到则返回空值。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get(index: int): T | null;

  /**
   * 清空容器内的所有对象。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  clear(): void;

  /**
   * 获取容器中对象的数量。
   *
   * @returns { int } 返回容器中对象个数，取值范围是非负整数。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  count(): int;
}

/**
 * 3D场景由树状层次结构的节点组成，其中每个节点都实现了Node接口。继承自SceneResource。
 *
 * @extends SceneResource
 * @interface Node
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Node extends SceneResource {
  /**
   * 节点位置，单位为世界坐标系下的场景单位（比如cm、m、km等）。
   *
   * @type { Position3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  position: Position3;

  /**
   * 节点旋转角度。
   *
   * @type { Quaternion }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  rotation: Quaternion;

  /**
   * 节点缩放。
   *
   * @type { Scale3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  scale: Scale3;

  /**
   * 节点是否可见。true表示该节点可见，false表示不可见。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  visible: boolean;

  /**
   * 节点类型。
   *
   * @type { NodeType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly nodeType: NodeType;

  /**
   * 节点的图层掩码。
   *
   * @type { LayerMask }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly layerMask: LayerMask;

  /**
   * 节点路径。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly path: string;

  /**
   * 节点的父节点，不存在则为空值。
   *
   * @type { Node | null }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly parent: Node | null;

  /**
   * 根据路径获取节点，如果获取不到则返回空。
   *
   * @param { string } path - 场景节点层次中的路径。每层之间使用'/'符号进行分割。
   * @returns { Node | null } 返回节点对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getNodeByPath(path: string): Node | null;

  /**
   * 节点的子节点，不存在则为空值。为只读属性，表示不能替换整个children容器，但可以通过容器方法操作子节点（如append、insertAfter、remove或clear）。如果append或insertAfter的节点已存在于容器中，容器会先移除该节点再插入，因此数量不会增加，看似”无效”；添加新节点才会真正增加子节点数量。
   *
   * @type { Container<Node> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly children: Container<Node>
}

/**
 * 几何节点类型，用于承载可渲染的网格数据，并支持可选的形变功能，继承自Node。
 *
 * @extends Node
 * @interface Geometry
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Geometry extends Node {
  /**
   * 网格属性。
   *
   * @type { Mesh }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly mesh: Mesh;
  
  /**
   * 可选的形变器，用于为几何体添加基于顶点的形变或动画效果。若未设置，则该几何体不支持形变功能。
   * 
   * @type { ?Morpher }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  readonly morpher?: Morpher;
}

/**
 * 光源类型枚举。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum LightType {
  /**
   * 平行光类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  DIRECTIONAL = 1,

  /**
   * 聚光灯类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SPOT = 2,
}

/**
 * 光源，继承自Node。
 *
 * @extends Node
 * @interface Light
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Light extends Node {
  /**
   * 光源类型。
   *
   * @type { LightType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly lightType: LightType;

  /**
   * 颜色。
   *
   * @type { Color }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  color: Color;

  /**
   * 光照强度，单位为坎德拉（cd），取值范围是大于0的实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  intensity: double;

  /**
   * 是否使能阴影。true表示添加阴影，false表示没有阴影效果。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  shadowEnabled: boolean;

  /**
   * 是否使能光源。true表示使用光源，false表示不使用。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;
}

/**
 * 聚光灯类型，继承自Light。
 *
 * 聚光灯会朝某个方向发出锥形光，强度随着圆锥角度的衰减由innerAngle和outerAngle两个参数定义。另外与点光源类似，强度也会随着距离光源位置的增加而衰减。
 *
 * > **注意：**
 * >
 * > 用户需要保证设置的innerAngle与outerAngle值是合理的。当outerAngle设置的值大于PI/2时，内部会强制其等于PI/2。当outerAngle设置的值小于innerAngle时，内部会强制其等于innerAngle。
 *
 * @extends Light
 * @interface SpotLight
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SpotLight extends Light {
  /**
   * 从聚光灯中心到开始衰减的角度，对应圆锥的半顶角，在这个圆锥体内光强不随角度衰减。单位为弧度（rad），默认值为0。设置的值必须大于等于0，小于等于outerAngle。
   * 
   * @type { ?double }
   * @default 0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  innerAngle?: double;

  /**
   * 从聚光灯中心到衰减结束的角度，对应圆锥的半顶角，在这个圆锥体外不再有光强度。单位为弧度（rad），默认值为PI/4。设置的值必须大于等于innerAngle，小于等于PI/2。
   * 
   * @type { ?double }
    * @default PI / 4.0 π/4 弧度
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  outerAngle?: double;
}

/**
 * 平行光类型，继承自Light。
 *
 * @extends Light
 * @interface DirectionalLight
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface DirectionalLight extends Light {
}

/**
 * 相机类型，Camera继承自Node。
 *
 * @extends Node
 * @interface Camera
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Camera extends Node {
  /**
   * 视场，单位为弧度（rad），取值范围为(0, π)。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  fov: double;

  /**
   * 近平面，单位为世界坐标系下的场景单位（比如cm、m、km等），取值大于0。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  nearPlane: double;

  /**
   * 远平面，单位为世界坐标系下的场景单位（比如cm、m、km等），取值大于nearPlane。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  farPlane: double;

  /**
   * 是否使能相机。true表示使用相机，false表示不使用相机。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * 后处理设置。
   *
   * @type { PostProcessSettings | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  postProcess: PostProcessSettings | null;

  /**
   * 应用于相机输出的后处理特效。
   * 
   * @type { Container<Effect> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  readonly effects: Container<Effect>;

  /**
   * 将渲染目标（render target）清空后的特定颜色。
   *
   * @type { Color | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  clearColor: Color | null;

  /**
   * 控制MSAA是否使能。true表示使能MSAA，false表示不使能MSAA。若未设置，默认为false。
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  msaa?: boolean;

  /**
   * 控制渲染管线。若未设置，默认使用轻量级前向渲染管线。（如果选择了FORWARD_LIGHTWEIGHT管线，某些功能将不可用。）
   *
   * @type { ?RenderingPipelineType }
    * @default RenderingPipelineType.FORWARD_LIGHTWEIGHT 前向轻量级渲染管线
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  renderingPipeline?: RenderingPipelineType;

  /**
   * 从屏幕指定位置发射射线，检测并返回所有命中的3D物体信息。使用Promise异步回调。
   * @param { Vec2 } viewPosition - 使用屏幕归一化坐标，取值范围为[0, 1]。其中(0,0)表示Component3D控件的左上角，(1,1)表示Component3D控件的右下角。
   * @param { RaycastParameters } params - 射线检测的配置参数（如检测范围、过滤节点等）。
   * @returns { Promise<RaycastResult[]> } - Promise对象，返回命中的结果数组（按距离从近到远排序），若无命中则返回空数组。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  raycast(viewPosition: Vec2, params: RaycastParameters): Promise<RaycastResult[]>;

  /**
   * 获取相机的视图矩阵。
   * @returns { Mat4x4 } 返回相机的视图矩阵。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  getViewMatrix(): Mat4x4;

  /**
   * 获取相机的投影矩阵。
   * @returns { Mat4x4 } 返回相机的投影矩阵。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  getProjectionMatrix(): Mat4x4;
}
