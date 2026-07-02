/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
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
 * @file 定义3D基础类型
 * @kit ArkGraphics3D
 */

/**
 * 定义Vec2（二维向量）.
 *
 * @typedef Vec2
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec2 {
  /**
   * vec2的X分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * vec2的Y分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;
}

/**
 * 定义Vec3（三维向量）.
 *
 * @typedef Vec3
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec3 {
  /**
   * vec3的X分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * vec3的Y分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * vec3的Z分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;
}

/**
 * 定义Vec4（四维向量）.
 *
 * @typedef Vec4
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec4 {
  /**
   * vec4的X分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * vec4的Y分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * vec4的Z分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;

  /**
   * vec4的W分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  w: double;
}

/**
 * 表示旋转的四元数.
 *
 * @typedef Quaternion
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Quaternion {
  /**
   * 四元数的X分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * 四元数的Y分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * 四元数的Z分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;

  /**
   * 四元数的W分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  w: double;
}

/**
 * 轴对齐边界盒.
 *
 * @typedef Aabb 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Aabb {
  /**
   * AABB最小角点的坐标, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  aabbMin: Vec3;

  /**
   * AABB最大角点的坐标, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  aabbMax: Vec3;
}

/**
 * 定义颜色.
 *
 * @typedef Color 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Color {
  /**
   * 颜色的R分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  r: double;

  /**
   * 颜色的G分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  g: double;

  /**
   * 颜色的B分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  b: double;

  /**
   * 颜色的A分量.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  a: double;
}

/**
 * 定义矩形.
 *
 * @typedef Rect
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Rect {
  /**
   * 左上角x坐标, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * 左上角y坐标, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * 矩形的宽度, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  width: double;

  /**
   * 矩形的高度, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  height: double;
}

/**
 * 几何形状类型.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export enum GeometryType {
  /**
   * 自定义几何形状.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  CUSTOM = 0,

  /**
   * 立方体.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  CUBE = 1,

  /**
   * 平面.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  PLANE = 2,

  /**
   * 球体.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  SPHERE = 3,

  /**
   * 圆柱体.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  CYLINDER = 4
}

/**
 * 渲染管线类型枚举.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export enum RenderingPipelineType {
  /**
   * 轻量级前向渲染管线，直接渲染到后缓冲区.
   * 该管线只能在着色器中实现逐像素效果（例如色调映射）,
   * 不支持复杂效果（例如光晕）.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  FORWARD_LIGHTWEIGHT = 0,
  
  /**
   * 高质量前向渲染管线.
   * 用于复杂的视觉效果（例如光晕）.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  FORWARD = 1
}

/**
 * 定义用于网格创建的几何形状.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare abstract class GeometryDefinition {
  /**
   * 从该定义中解释几何形状的类型.
   *
   * @returns { GeometryType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get geometryType(): GeometryType;
}

/**
 * 定义Mat4x4（4x4矩阵）
 *
 * @typedef Mat4x4
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface Mat4x4 {
  /**
   * 矩阵的第一列
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  x: Vec4;

  /**
   * 矩阵的第二列
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  y: Vec4;

  /**
   * 矩阵的第三列
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  z: Vec4;

  /**
   * 矩阵的第四列
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  w: Vec4;
}

/**
 * 顶点序列如何构成三角形.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export enum PrimitiveTopology {
  /**
   * 顶点形成一组独立的三角形. 顶点(0, 1, 2)、(3, 4, 5)、...定义独立的三角形.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  TRIANGLE_LIST = 0,

  /**
   * 顶点形成三角形条带. 从第三个顶点开始，每个顶点与前两个顶点构成三角形.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  TRIANGLE_STRIP = 1
}

/**
 * 阴影算法类型
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum ShadowAlgorithmType {
  /**
   * PCF算法（百分比邻近过滤）
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  PCF = 0
}

/**
 * 定义自定义几何形状的顶点数组及其数据.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class CustomGeometry extends GeometryDefinition {
  /**
   * 如何从索引顶点形成网格三角形.
   *
   * @type { ?PrimitiveTopology }
    * @default PrimitiveTopology.TRIANGLE_LIST 三角形列表拓扑
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  topology?: PrimitiveTopology;

  /**
   * 如何从索引顶点形成网格三角形.
   *
   * @return { PrimitiveTopology | undefined }
    * @default PrimitiveTopology.TRIANGLE_LIST 三角形列表拓扑
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get topology(): PrimitiveTopology | undefined;

  /**
   * 如何从索引顶点形成网格三角形.
   *
   * @param { PrimitiveTopology | undefined } value
    * @default PrimitiveTopology.TRIANGLE_LIST 三角形列表拓扑
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set topology(value: PrimitiveTopology | undefined);

  /**
   * 顶点数组.
   *
   * @return { Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get vertices(): Vec3[];

  /**
   * 顶点数组.
   *
   * @param { Vec3[] } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set vertices(value: Vec3[]);

  /**
   * 构成三角形的顶点索引. PrimitiveTopology应用于索引定义的序列.
   *
   * 给定vertices = [a, b, c, d]，创建相同的一对三角形的示例:
   *     topology = PrimitiveTopology.TRIANGLE_LIST
   *     indices = [0, 1, 2, 2, 1, 3]
   *     生成的三角形：abc、cbd
   *
   *     topology = PrimitiveTopology.TRIANGLE_STRIP
   *     indices = [0, 1, 2, 3]
   *     生成的三角形：abc、cbd (b和c在cbd中被反转，以匹配第一个三角形的面方向)
   *
   * @type { ?int[] }
   * @default indices: [0, 1 ,2,..., vertices.size() - 1]
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  indices?: int[];

  /**
   * 构成三角形的顶点索引. PrimitiveTopology应用于索引定义的序列.
   *
   * 给定vertices = [a, b, c, d]，创建相同的一对三角形的示例:
   *     topology = PrimitiveTopology.TRIANGLE_LIST
   *     indices = [0, 1, 2, 2, 1, 3]
   *     生成的三角形：abc、cbd
   *
   *     topology = PrimitiveTopology.TRIANGLE_STRIP
   *     indices = [0, 1, 2, 3]
   *     生成的三角形：abc、cbd (b和c在cbd中被反转，以匹配第一个三角形的面方向)
   *
   * @return { int[] | undefined }
   * @default indices: [0, 1 ,2,..., vertices.size() - 1]
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get indices(): int[] | undefined;

  /**
   * 构成三角形的顶点索引. PrimitiveTopology应用于索引定义的序列.
   *
   * 给定vertices = [a, b, c, d]，创建相同的一对三角形的示例:
   *     topology = PrimitiveTopology.TRIANGLE_LIST
   *     indices = [0, 1, 2, 2, 1, 3]
   *     生成的三角形：abc、cbd
   *
   *     topology = PrimitiveTopology.TRIANGLE_STRIP
   *     indices = [0, 1, 2, 3]
   *     生成的三角形：abc、cbd (b和c在cbd中被反转，以匹配第一个三角形的面方向)
   *
   * @param { int[] | undefined } value
   * @default indices: [0, 1 ,2,..., vertices.size() - 1]
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set indices(value: int[] | undefined);

  /**
   * 顶点法线。如果normals不为null，则normals[N]对应vertices[N]，且generateNormals参数会被忽略。
   *
   * @type { ?Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  normals?: Vec3[];

  /**
   * 顶点法线。如果normals不为null，则normals[N]对应vertices[N]，且generateNormals参数会被忽略。
   *
   * @return { Vec3[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get normals(): Vec3[] | undefined;

  /**
   * 顶点法线。如果normals不为null，则normals[N]对应vertices[N]，且generateNormals参数会被忽略。
   *
   * @param { Vec3[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set normals(value: Vec3[] | undefined);

  /**
   * 顶点纹理映射UV坐标. 如果uvs不为null，则uvs[N]对应vertices[N]
   *
   * @type { ?Vec2[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  uvs?: Vec2[];

  /**
   * 顶点纹理映射UV坐标. 如果uvs不为null，则uvs[N]对应vertices[N]
   *
   * @return { Vec2[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get uvs(): Vec2[] | undefined;

  /**
   * 顶点纹理映射UV坐标. 如果uvs不为null，则uvs[N]对应vertices[N]
   *
   * @param { Vec2[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set uvs(value: Vec2[] | undefined);

  /**
   * 顶点颜色. 如果colors不为null，则colors[N]对应vertices[N].
   *
   * @type { ?Color[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  colors?: Color[];

  /**
   * 顶点颜色. 如果colors不为null，则colors[N]对应vertices[N].
   *
   * @return { Color[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get colors(): Color[] | undefined;

  /**
   * 顶点颜色. 如果colors不为null，则colors[N]对应vertices[N].
   *
   * @param { Color[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set colors(value: Color[] | undefined);
}

/**
 * 定义长方体.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class CubeGeometry extends GeometryDefinition {
  /**
   * 立方体的宽高深, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @return { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get size(): Vec3;

  /**
   * 立方体的宽高深, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @param { Vec3 } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set size(value: Vec3);
}

/**
 * 定义平面.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class PlaneGeometry extends GeometryDefinition {
  /**
   * 平面的宽和长, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @return { Vec2 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get size(): Vec2;

  /**
   * 平面的宽和长, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @param { Vec2 } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set size(value: Vec2);
}

/**
 * 定义球体.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class SphereGeometry extends GeometryDefinition {
  /**
   * 球体的半径, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get radius(): double;

  /**
   * 球体的半径, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set radius(value: double);

  /**
   * 将球体按经纬度分割成若干圈和段.
   *
   * @return { int }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get segmentCount(): int;

  /**
   * 将球体按经纬度分割成若干圈和段.
   *
   * @param { int } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set segmentCount(value: int);
}

/**
 * 定义圆柱体.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export declare class CylinderGeometry extends GeometryDefinition {
  /**
   * 圆柱体底面的半径, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get radius(): double;

  /**
   * 圆柱体底面的半径, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set radius(value: double);

  /**
   * 圆柱体的高度, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get height(): double;

  /**
   * 圆柱体的高度, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set height(value: double);

  /**
   * 使用正多边形近似圆柱体的圆形底面,
   * 其中segmentCount是正多边形的边数.
   *
   * @return { int }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get segmentCount(): int;

  /**
   * 使用正多边形近似圆柱体的圆形底面,
   * 其中segmentCount是正多边形的边数.
   *
   * @param { int } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set segmentCount(value: int);
}

/**
 * 3D位置信息, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Position3 = Vec3;

/**
 * 3D旋转信息（欧拉角）, 单位为弧度.
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Rotation3 = Vec3;

/**
 * 3D缩放信息.
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Scale3 = Vec3;
