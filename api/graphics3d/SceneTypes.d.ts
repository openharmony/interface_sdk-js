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
 * @file
 * @kit ArkGraphics3D
 */

/**
 * A two-dimensional vector used to represent a point or a direction in 2D space. It consists of two components: x and y.
 *
 * @typedef Vec2
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec2 {
  /**
   * Component on the X axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Component on the Y axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;
}

/**
 * A three-dimensional vector used to represent a point, a direction, or a vector transformation in 3D space.
 * It consists of three components: x, y, and z.
 *
 * @typedef Vec3
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec3 {
  /**
   * Component on the X axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Component on the Y axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * Component on the Z axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;
}

/**
 * A four-dimensional vector used to represent a point, a direction, or a vector transformation in 4D space.
 * It consists of four components: x, y, z, and w.
 * The fourth component (w) enhances normalization and convenience for various calculations and transformations.
 *
 * @typedef Vec4
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Vec4 {
  /**
   * Component on the X axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Component on the Y axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * Component on the Z axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;

  /**
   * Component on the W axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  w: double;
}

/**
 * A mathematical notation for representing spatial rotations of elements in 3D space.
 * Compared with Euler angles, a quaternion has advantages in numerical stability and avoiding the gimbal lock problem.
 *
 * @typedef Quaternion
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Quaternion {
  /**
   * Component on the X axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Component on the Y axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * Component on the Z axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  z: double;

  /**
   * Component on the W axis. The value is a real number.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  w: double;
}

/**
 * Axis aligned boundary box used to determine whether two objects in space are overlapping.
 *
 * @typedef Aabb 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Aabb {
  /**
   * Minimum point of the axis-aligned bounding box, in scene units of the world coordinate system (such as cm, m, km, etc.).
   *
   * @type { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  aabbMin: Vec3;

  /**
   * Maximum point of the axis-aligned bounding box, in scene units of the world coordinate system (such as cm, m, km, etc.).
   *
   * @type { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  aabbMax: Vec3;
}

/**
 * Color in RGBA format. It consists of four components: red, green, blue, and alpha.
 *
 * @typedef Color 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Color {
  /**
   * Red component. The value range is [0, 1].
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  r: double;

  /**
   * Green component. The value range is [0, 1].
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  g: double;

  /**
   * Blue component. The value range is [0, 1].
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  b: double;

  /**
   * Alpha component. The value range is [0, 1].
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  a: double;
}

/**
 * Rectangle in a plane.
 *
 * @typedef Rect
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Rect {
  /**
   * X component of the rectangle's bottom-left corner, in scene units of the world coordinate system (such as cm, m, km, etc.).
   * The value can be any real number, and the specific range depends on the scene coordinate system settings.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  x: double;

  /**
   * Y component of the rectangle's bottom-left corner, in scene units of the world coordinate system (such as cm, m, km, etc.).
   * The value can be any real number, and the specific range depends on the scene coordinate system settings.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  y: double;

  /**
   * Rectangle width, in scene units of the world coordinate system (such as cm, m, km, etc.).
   * The valid value range is greater than 0.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  width: double;

  /**
   * Rectangle height, in scene units of the world coordinate system (such as cm, m, km, etc.).
   * The valid value range is greater than 0.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  height: double;
}

/**
 * Enumerates the geometry types.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export enum GeometryType {
  /**
   * Custom geometry type.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  CUSTOM = 0,

  /**
   * Cube.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  CUBE = 1,

  /**
   * Plane.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  PLANE = 2,

  /**
   * Sphere.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  SPHERE = 3,

  /**
   * Cylinder.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  CYLINDER = 4
}

/**
 * Enumerates the rendering pipeline types.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export enum RenderingPipelineType {
  /**
   * Lightweight forward rendering pipeline that directly renders to the back buffer.
   * It supports per-pixel effects (for example, tone mapping), but not complex effects (for example, bloom), in shaders.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  FORWARD_LIGHTWEIGHT = 0,
  
  /**
   * High-quality forward rendering pipeline designed for complex visual effects (for example, bloom).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  FORWARD = 1
}

/**
 * An abstract class used to define the properties of specific geometry types.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare abstract class GeometryDefinition {
  /**
   * Type of geometry.
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
 * A camera matrix, which is a mathematical tool for transforming 3D world coordinates into 2D image coordinates.
 *
 * @typedef Mat4x4
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface Mat4x4 {
  /**
   * The first column of the matrix, represented as a four-dimensional vector.
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  x: Vec4;

  /**
   * The second column of the matrix, represented as a four-dimensional vector.
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  y: Vec4;

  /**
   * The third column of the matrix, represented as a four-dimensional vector.
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  z: Vec4;

  /**
   * The fourth column of the matrix, represented as a four-dimensional vector.
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  w: Vec4;
}

/**
 * Enumerates the vertex processing methods.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export enum PrimitiveTopology {
  /**
   * A set of vertices forming separate triangles without intersecting.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  TRIANGLE_LIST = 0,

  /**
   * Each vertex and the edge of the previous triangle create a new triangle.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  TRIANGLE_STRIP = 1
}

/**
 * the type of shadow algorithm
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum ShadowAlgorithmType {
  /**
   * PCF algorithm
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  PCF = 0
}

/**
 * A custom geometry type that inherits from GeometryDefinition.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class CustomGeometry extends GeometryDefinition {
  /**
   * Parsing mode of triangle primitives. The default value is TRIANGLE_LIST.
   *
   * @type { ?PrimitiveTopology }
   * @default PrimitiveTopology.TRIANGLE_LIST
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  topology?: PrimitiveTopology;

  /**
   * Parsing mode of triangle primitives. The default value is TRIANGLE_LIST.
   *
   * @return { PrimitiveTopology | undefined }
   * @default PrimitiveTopology.TRIANGLE_LIST
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get topology(): PrimitiveTopology | undefined;

  /**
   * Parsing mode of triangle primitives. The default value is TRIANGLE_LIST.
   *
   * @param { PrimitiveTopology | undefined } value
   * @default PrimitiveTopology.TRIANGLE_LIST
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set topology(value: PrimitiveTopology | undefined);

  /**
   * Array of vertices that make up the model.
   *
   * @return { Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get vertices(): Vec3[];

  /**
   * Array of vertices that make up the model.
   *
   * @param { Vec3[] } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set vertices(value: Vec3[]);

  /**
   * Array of indices for the vertices, with values starting at 0. The default value is undefined.
   *
   * @type { ?int[] }
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  indices?: int[];

  /**
   * Array of indices for the vertices, with values starting at 0. The default value is undefined.
   *
   * @return { int[] | undefined }
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get indices(): int[] | undefined;

  /**
   * Array of indices for the vertices, with values starting at 0. The default value is undefined.
   *
   * @param { int[] | undefined } value
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set indices(value: int[] | undefined);

  /**
   * Array of normals corresponding to the vertices. The default value is undefined.
   *
   * @type { ?Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  normals?: Vec3[];

  /**
   * Array of normals corresponding to the vertices. The default value is undefined.
   *
   * @return { Vec3[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get normals(): Vec3[] | undefined;

  /**
   * Array of normals corresponding to the vertices. The default value is undefined.
   *
   * @param { Vec3[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set normals(value: Vec3[] | undefined);

  /**
   * Array of UV coordinates for the vertices. The default value is undefined.
   *
   * @type { ?Vec2[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  uvs?: Vec2[];

  /**
   * Array of UV coordinates for the vertices. The default value is undefined.
   *
   * @return { Vec2[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get uvs(): Vec2[] | undefined;

  /**
   * Array of UV coordinates for the vertices. The default value is undefined.
   *
   * @param { Vec2[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set uvs(value: Vec2[] | undefined);

  /**
   * Array of colors for the vertices. The default value is undefined.
   *
   * @type { ?Color[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   */
  colors?: Color[];

  /**
   * Array of colors for the vertices. The default value is undefined.
   *
   * @return { Color[] | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  get colors(): Color[] | undefined;

  /**
   * Array of colors for the vertices. The default value is undefined.
   *
   * @param { Color[] | undefined } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  set colors(value: Color[] | undefined);
}

/**
 * A cube geometry type that inherits from GeometryDefinition.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class CubeGeometry extends GeometryDefinition {
  /**
   * Width, height, and depth of the cube, indicating the size of the cube.
   * The unit is the scene unit of the world coordinate system (such as cm, m, km, etc.).
   *
   * @return { Vec3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get size(): Vec3;

  /**
   * Width, height, and depth of the cube, indicating the size of the cube.
   * The unit is the scene unit of the world coordinate system (such as cm, m, km, etc.).
   *
   * @param { Vec3 } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set size(value: Vec3);
}

/**
 * A plane geometry type that inherits from GeometryDefinition.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class PlaneGeometry extends GeometryDefinition {
  /**
   * Width and height of the plane, indicating the size of the plane.
   * The unit is the scene unit of the world coordinate system (such as cm, m, km, etc.).
   *
   * @return { Vec2 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get size(): Vec2;

  /**
   * Width and height of the plane, indicating the size of the plane.
   * The unit is the scene unit of the world coordinate system (such as cm, m, km, etc.).
   *
   * @param { Vec2 } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set size(value: Vec2);
}

/**
 * A sphere geometry type that inherits from GeometryDefinition.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export declare class SphereGeometry extends GeometryDefinition {
  /**
   * Radius of the sphere, measured in the world coordinate system's units (for example, cm, m, or km).
   * The value must be greater than 0.
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get radius(): double;

  /**
   * Radius of the sphere, measured in the world coordinate system's units (for example, cm, m, or km).
   * The value must be greater than 0.
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set radius(value: double);

  /**
   * Number of segments divided by longitude and latitude on the sphere.
   * The value range is a positive integer greater than or equal to 3.
   *
   * @return { int }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  get segmentCount(): int;

  /**
   * Number of segments divided by longitude and latitude on the sphere.
   * The value range is a positive integer greater than or equal to 3.
   *
   * @param { int } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  set segmentCount(value: int);
}

/**
 * A cylinder geometry type that inherits from GeometryDefinition.
 *
 * > **NOTE**
 * >
 * > You must ensure that all three parameters are set correctly.
 * > Invalid values may prevent cylinder creation or cause undefined behavior.
 *
 * @extends GeometryDefinition
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export declare class CylinderGeometry extends GeometryDefinition {
  /**
   * Bottom radius of the cylinder, in scene units of the world coordinate system (such as cm, m, km, etc.).
   * The value range is greater than 0.
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get radius(): double;

  /**
   * Bottom radius of the cylinder, in scene units of the world coordinate system (such as cm, m, km, etc.).
   * The value range is greater than 0.
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set radius(value: double);

  /**
   * Height of the cylinder, in scene units of the world coordinate system (such as cm, m, km, etc.).
   * The value range is greater than 0.
   *
   * @return { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get height(): double;

  /**
   * Height of the cylinder, in scene units of the world coordinate system (such as cm, m, km, etc.).
   * The value range is greater than 0.
   *
   * @param { double } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set height(value: double);

  /**
   * Use regular polygons to approximate the circular base of the cylinder,
   * where segmentCount is the number of sides of the regular polygon used.
   *
   * @return { int }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get segmentCount(): int;

  /**
   * Use regular polygons to approximate the circular base of the cylinder,
   * where segmentCount is the number of sides of the regular polygon used.
   *
   * @param { int } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  set segmentCount(value: int);
}

/**
 * Position of an object in 3D space.
 * The type is a three-dimensional vector.
 * The unit is the scene unit in the world coordinate system (such as cm, m, and km).
 * The value can be any value.
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Position3 = Vec3;

/**
 * Rotation of an object in 3D space.
 * The type is a three-dimensional vector in the unit of radian (rad).
 * The value can be any value.
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Rotation3 = Vec3;

/**
 * Scaling of an object in 3D space.
 * The value is of the Vec3 type.
 * Any 3D vector.
 *
 * @typedef { Vec3 } 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export type Scale3 = Vec3;
