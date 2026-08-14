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

/**
 * 二维向量，通常用于表示2D空间中的点或方向，由x和y两个分量组成。
 *
 * @typedef Vec2
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec2 {
  /**
   * x轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * y轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;
}

/**
 * 三维向量，通常用于表示3D空间中的点、方向或向量变换，由x、y和z三个分量组成。
 *
 * @typedef Vec3
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec3 {
  /**
   * x轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * y轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * z轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;
}

/**
 * 四维向量，通常用于表示4D空间中的点、方向或向量变换，由x、y、z和w四个分量组成。
 *
 * @typedef Vec4
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec4 {
  /**
   * x轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * y轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * z轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;

  /**
   * w轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  w: double;
}

/**
 * 用于表示3D空间中旋转的数学结构。与传统的欧拉角相比，四元数在数值稳定性和避免万向节锁方面具有优势。
 *
 * @typedef Quaternion
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Quaternion {
  /**
   * x轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * y轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * z轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;

  /**
   * w轴分量，取值范围是实数。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  w: double;
}

/**
 * 轴对齐边界盒，主要用于判断空间中的物体是否重叠。
 *
 * @typedef Aabb 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Aabb {
  /**
   * 轴对齐边界盒的小值点，单位为世界坐标系下的场景单位（比如cm、m、km等）。
   *
   * @type { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  aabbMin: Vec3;

  /**
   * 轴对齐边界盒的大值点，单位为世界坐标系下的场景单位（比如cm、m、km等）。
   *
   * @type { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  aabbMax: Vec3;
}

/**
 * 用于表示RGBA格式的颜色，包含四个分量，依次为红色、绿色、蓝色和透明度。
 *
 * @typedef Color 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Color {
  /**
   * 红色分量，取值范围是[0, 1]。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  r: double;

  /**
   * 绿色分量，取值范围是[0, 1]。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  g: double;

  /**
   * 蓝色分量，取值范围是[0, 1]。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  b: double;

  /**
   * 透明度分量，取值范围是[0, 1]。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  a: double;
}

/**
 * 用于表示平面中的矩形。
 *
 * @typedef Rect
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Rect {
  /**
   * 矩形左下角x轴分量，单位为世界坐标系下的场景单位（比如cm、m、km等），取值为任意实数，具体范围依赖场景坐标系设置。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * 矩形左下角y轴分量，单位为世界坐标系下的场景单位（比如cm、m、km等），取值为任意实数，具体范围依赖场景坐标系设置。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * 矩形宽度，单位为世界坐标系下的场景单位（比如cm、m、km等），有效取值范围大于0。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  width: double;

  /**
   * 矩形高度，单位为世界坐标系下的场景单位（比如cm、m、km等），有效取值范围大于0。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  height: double;
}

/**
 * 几何类型枚举，用于指定不同的几何类型。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export enum GeometryType {
  /**
   * 自定义几何体类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  CUSTOM = 0,

  /**
   * 立方体类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  CUBE = 1,

  /**
   * 平面类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  PLANE = 2,

  /**
   * 球体类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  SPHERE = 3,

  /**
   * 圆柱体类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  CYLINDER = 4
}

/**
 * 渲染管线类型枚举。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export enum RenderingPipelineType {
  /**
   * 轻量级前向渲染管线，直接渲染到后缓冲区。该管线只能在着色器中实现逐像素效果（例如色调映射），不支持复杂效果（例如光晕）。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  FORWARD_LIGHTWEIGHT = 0,
  
  /**
   * 高质量前向渲染管线，用于复杂的视觉效果（例如光晕）。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  FORWARD = 1
}

/**
 * 几何类型定义抽象类，用于解释特定几何类型的属性。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare abstract class GeometryDefinition {
  /**
   * 定义不同的几何类型。
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
 * 4x4矩阵类型，可用于坐标变换。
 *
 * @typedef Mat4x4
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface Mat4x4 {
  /**
   * 矩阵的第一列，其值是一个四维向量。
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  x: Vec4;

  /**
   * 矩阵的第二列，其值是一个四维向量。
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  y: Vec4;

  /**
   * 矩阵的第三列，其值是一个四维向量。
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  z: Vec4;

  /**
   * 矩阵的第四列，其值是一个四维向量。
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  w: Vec4;
}

/**
 * 图元拓扑枚举，在顶点处理过程中，指定顶点的不同处理方式。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export enum PrimitiveTopology {
  /**
   * 由不相交的顶点集合构成不同的三角形。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  TRIANGLE_LIST = 0,

  /**
   * 每个顶点和前一个三角形的一条边构成新的三角形。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  TRIANGLE_STRIP = 1
}

/**
 * 阴影算法的枚举类型。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum ShadowAlgorithmType {
  /**
   * 百分比邻近过滤算法。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  PCF = 0
}

/**
 * 自定义几何类型，继承自GeometryDefinition。
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class CustomGeometry extends GeometryDefinition {
  /**
   * 三角形图元的解析方式，默认值为TRIANGLE_LIST。
   *
   * @type { ?PrimitiveTopology }
   * @default PrimitiveTopology.TRIANGLE_LIST
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  topology?: PrimitiveTopology;

  /**
   * 三角形图元的解析方式，默认值为TRIANGLE_LIST。
   *
   * @return { PrimitiveTopology | undefined }
   * @default PrimitiveTopology.TRIANGLE_LIST
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get topology(): PrimitiveTopology | undefined;

  /**
   * 三角形图元的解析方式，默认值为TRIANGLE_LIST。
   *
   * @param { PrimitiveTopology | undefined } value
   * @default PrimitiveTopology.TRIANGLE_LIST
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set topology(value: PrimitiveTopology | undefined);

  /**
   * 模型的顶点数组。
   *
   * @return { Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get vertices(): Vec3[];

  /**
   * 模型的顶点数组。
   *
   * @param { Vec3[] } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set vertices(value: Vec3[]);

  /**
   * 顶点索引数组，数组中元素的取值范围大于等于0，默认值为undefined。
   *
   * @type { ?int[] }
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  indices?: int[];

  /**
   * 顶点索引数组，数组中元素的取值范围大于等于0，默认值为undefined。
   *
   * @return { int[] | undefined }
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get indices(): int[] | undefined;

  /**
   * 顶点索引数组，数组中元素的取值范围大于等于0，默认值为undefined。
   *
   * @param { int[] | undefined } value
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set indices(value: int[] | undefined);

  /**
   * 顶点数组对应的法向量数组，默认值为undefined。
   *
   * @type { ?Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  normals?: Vec3[];

  /**
   * 顶点数组对应的法向量数组，默认值为undefined。
   *
   * @return { Vec3[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get normals(): Vec3[] | undefined;

  /**
   * 顶点数组对应的法向量数组，默认值为undefined。
   *
   * @param { Vec3[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set normals(value: Vec3[] | undefined);

  /**
   * 顶点数组对应的UV坐标数组，默认值为undefined。
   *
   * @type { ?Vec2[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  uvs?: Vec2[];

  /**
   * 顶点数组对应的UV坐标数组，默认值为undefined。
   *
   * @return { Vec2[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get uvs(): Vec2[] | undefined;

  /**
   * 顶点数组对应的UV坐标数组，默认值为undefined。
   *
   * @param { Vec2[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set uvs(value: Vec2[] | undefined);

  /**
   * 顶点数组对应的颜色数组，默认值为undefined。
   *
   * @type { ?Color[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  colors?: Color[];

  /**
   * 顶点数组对应的颜色数组，默认值为undefined。
   *
   * @return { Color[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get colors(): Color[] | undefined;

  /**
   * 顶点数组对应的颜色数组，默认值为undefined。
   *
   * @param { Color[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set colors(value: Color[] | undefined);
}

/**
 * 立方体几何类型，继承自GeometryDefinition。
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class CubeGeometry extends GeometryDefinition {
  /**
   * 立方体的宽、高和深度，表示立方体的大小，单位为世界坐标系下的场景单位（比如cm、m、km等）。
   *
   * @return { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get size(): Vec3;

  /**
   * 立方体的宽、高和深度，表示立方体的大小，单位为世界坐标系下的场景单位（比如cm、m、km等）。
   *
   * @param { Vec3 } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set size(value: Vec3);
}

/**
 * 平面几何类型，继承自GeometryDefinition。
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class PlaneGeometry extends GeometryDefinition {
  /**
   * 平面的宽、高，表示平面的大小，单位为世界坐标系下的场景单位（比如cm、m、km等）。
   *
   * @return { Vec2 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get size(): Vec2;

  /**
   * 平面的宽、高，表示平面的大小，单位为世界坐标系下的场景单位（比如cm、m、km等）。
   *
   * @param { Vec2 } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set size(value: Vec2);
}

/**
 * 球体几何类型，继承自GeometryDefinition。
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class SphereGeometry extends GeometryDefinition {
  /**
   * 球体半径，单位为世界坐标系下的场景单位（比如cm、m、km等），取值范围大于0。
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get radius(): double;

  /**
   * 球体半径，单位为世界坐标系下的场景单位（比如cm、m、km等），取值范围大于0。
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set radius(value: double);

  /**
   * 在球体上以经纬度分割的段数，取值范围是大于等于3的正整数。
   *
   * @return { int }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get segmentCount(): int;

  /**
   * 在球体上以经纬度分割的段数，取值范围是大于等于3的正整数。
   *
   * @param { int } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set segmentCount(value: int);
}

/**
 * 圆柱体几何类型，继承自GeometryDefinition。
 *
 * > **说明：**
 * >
 * > 开发者需保证参数radius，height，segmentCount设置正确，否则无法创建圆柱体并可能引发不可预期的行为。
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export declare class CylinderGeometry extends GeometryDefinition {
  /**
   * 圆柱体的底面半径，单位为世界坐标系下的场景单位（比如cm、m、km等），取值范围大于0。
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get radius(): double;

  /**
   * 圆柱体的底面半径，单位为世界坐标系下的场景单位（比如cm、m、km等），取值范围大于0。
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set radius(value: double);

  /**
   * 圆柱体的高度，单位为世界坐标系下的场景单位（比如cm、m、km等），取值范围大于0。
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get height(): double;

  /**
   * 圆柱体的高度，单位为世界坐标系下的场景单位（比如cm、m、km等），取值范围大于0。
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set height(value: double);

  /**
   * 圆柱体圆周方向的分段面数量，取值范围是大于等于3的正整数，若设为浮点数将自动向下取整。该数值直接影响圆柱体侧面的光滑度：数值越大，侧面包含的面片数量越多，视觉上越接近光滑曲面；数值越小，侧面会呈现明显的多边形轮廓。注意数值过大会延长几何创建耗时，还可能导致线程阻塞。
   *
   * @return { int }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get segmentCount(): int;

  /**
   * 圆柱体圆周方向的分段面数量，取值范围是大于等于3的正整数，若设为浮点数将自动向下取整。该数值直接影响圆柱体侧面的光滑度：数值越大，侧面包含的面片数量越多，视觉上越接近光滑曲面；数值越小，侧面会呈现明显的多边形轮廓。注意数值过大会延长几何创建耗时，还可能导致线程阻塞。
   *
   * @param { int } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set segmentCount(value: int);
}

/**
 * 用于表示3维空间中物体的位置。
 * 类型为三维向量，单位为世界坐标系下的场景单位（比如cm、m、km等），可取任意值。
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Position3 = Vec3;

/**
 * 用于表示3维空间中物体的旋转。
 * 类型为三维向量，单位为弧度（rad），可取任意值。
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Rotation3 = Vec3;

/**
 * 用于表示3维空间中物体的缩放。
 * 类型为三维向量，可取任意值。
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Scale3 = Vec3;
