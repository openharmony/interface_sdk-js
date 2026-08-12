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
 * @file Defines 3D node related interfaces
 * @kit ArkGraphics3D
 */

import { SceneResource, Mesh, Morpher, Effect } from './SceneResources';
import { RaycastParameters, RaycastResult } from './Scene';
import { Position3, Quaternion, Scale3, Color, Vec2, Vec3, RenderingPipelineType, Mat4x4 } from './SceneTypes';
import { PostProcessSettings } from './ScenePostProcessSettings';

/**
 * Defines the layer mask of the node.
 *
 * @interface LayerMask
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface LayerMask {
  /**
   * Checks whether the mask is enabled for a layer of a given index.
   *
   * @param { int } index - Index of the layer. The value is an integer greater than or equal to 0.
   * @returns { boolean } Check result for whether the layer mask is enabled. true if enabled, false otherwise.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getEnabled(index: int): boolean;

  /**
   * Enables the mask of a layer of a given index.
   *
   * @param { int } index - Index of the layer. The value is an integer greater than or equal to 0.
   * @param { boolean } enabled - Whether to enable the layer mask. true to enable, false otherwise.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  setEnabled(index: int, enabled: boolean): void;
}

/**
 * The enum of node type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum NodeType {
  /**
   * The node is an empty node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  NODE = 1,

  /**
   * The node is a geometry node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  GEOMETRY = 2,

  /**
   * The node is a camera node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  CAMERA = 3,

  /**
   * The node is a light node.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  LIGHT = 4,

  /** 
   * The node is of custom type.
   * Usually this means that the node is of a type defined in an extension plugin.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  CUSTOM = 255
}

/**
 * Defines a scene object container.
 *
 * @interface Container
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Container<T> {
  /**
   * Append an item to the container.
   *
   * @param { T } item - the item append to the end of container
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  append(item: T): void;

  /**
   * Insert an item.
   *
   * @param { T } item - the item insert to the container
   * @param { T | null } sibling - insert after this item, insert to the head if sibling is null
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  insertAfter(item: T, sibling: T | null): void;

  /**
   * Remove an item from Container's children.
   *
   * @param { T } item - the item to be removed
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  remove(item: T): void;

  /**
   * Obtains a node of a given index. If no node is obtained, null is returned.
   *
   * @param { int } index - Index of the node. The value is an integer greater than or equal to 0.
   * @returns { T | null } Object obtained. If no object is obtained, null is returned.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get(index: int): T | null;

  /**
   * Clear all children.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  clear(): void;

  /**
   * Obtains the number of nodes in the container.
   *
   * @returns { int } Number of nodes in the container. The value is a non-negative integer.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  count(): int;
}

/**
 * The 3D scene consists of nodes in a tree hierarchy, where each node implements a Node interface.
 *
 * @extends SceneResource
 * @interface Node
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Node extends SceneResource {
  /**
   * Node position, in scene units of the world coordinate system (for example, cm, m, or km).
   *
   * @type { Position3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  position: Position3;

  /**
   * Rotation angle of a node.
   *
   * @type { Quaternion }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  rotation: Quaternion;

  /**
   * Node scale.
   *
   * @type { Scale3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  scale: Scale3;

  /**
   * Whether a node is visible. true if visible, false otherwise.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  visible: boolean;

  /**
   * Node type.
   *
   * @type { NodeType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly nodeType: NodeType;

  /**
   * Layer mask of a node.
   *
   * @type { LayerMask }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly layerMask: LayerMask;

  /**
   * Node path.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly path: string;

  /**
   * Parent node of the node and null if it does not exist.
   *
   * @type { Node | null }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly parent: Node | null;

  /**
   * Obtains a node by path. If no node is obtained, null is returned.
   *
   * @param { string } path - Path in the scene node tree. Each layer is separated by a slash (/).
   * @returns { Node | null } Returns the node object.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getNodeByPath(path: string): Node | null;

  /**
   * Child node of the node and null if it does not exist.
   * This is a read-only property, indicating that you cannot directly replace the entire children container.
   * However, you can operate the child nodes using container methods like [append]{@link Container.append},
   * [insertAfter]{@link Container.insertAfter}, [remove]{@link Container.remove}, or [clear]{@link Container.clear}.
   * If the node being appended or inserted already exists in the container, it is removed first and then reinserted.
   * As a result, the total number of child nodes remains unchanged, making the operation seem ineffective.
   * The count increases only when a new node is added.
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
 * Geometric node type that holds renderable mesh data and supports optional deformation features.
 *
 * @extends Node
 * @interface Geometry
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Geometry extends Node {
  /**
   * Mesh property.
   *
   * @type { Mesh }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly mesh: Mesh;
  
  /**
   * Optional morpher that adds vertex-based deformation or animation effects to the geometry.
   * If this parameter is not specified, the geometry does not support deformation.
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
 * The enum of light type.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum LightType {
  /**
   * Directional light.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  DIRECTIONAL = 1,

  /**
   * Spot light.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SPOT = 2,
}

/**
 * Defines light interface.
 *
 * @extends Node
 * @interface Light
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Light extends Node {
  /**
   * The type of the light.
   *
   * @type { LightType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly lightType: LightType;

  /**
   * The color of the light.
   *
   * @type { Color }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  color: Color;

  /**
   * Light density in candelas (cd) with a value range of real numbers greater than 0.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  intensity: double;

  /**
   * Whether the shadow effect is enabled. true if enabled, false otherwise.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  shadowEnabled: boolean;

  /**
   * Whether the light is used. true if used, false otherwise.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;
}

/**
 * Spotlight, which inherits from [Light]{@link Light}.
 *
 * A spotlight emits a conical beam of light in a specific direction,
 * with the intensity of the light decaying according to the angles defined by the innerAngle and outerAngle parameters.
 * Like a point light, a spotlight's intensity also diminishes with distance from the source.
 *
 * > **NOTE**
 * >
 * > Ensure that the innerAngle and outerAngle values are proper.
 * > If the value set for outerAngle is greater than PI/2, it is forcibly set to PI/2 internally.
 * > If the value set for outerAngle is less than innerAngle, it is forcibly set to innerAngle internally.
 *
 * @extends Light
 * @interface SpotLight
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SpotLight extends Light {
  /**
   * The inner angle of the spot light, the unit is radian.
   * 
   * @type { ?double }
   * @default 0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  innerAngle?: double;

  /**
   * The outer angle of the spot light, the unit is radian.
   * 
   * @type { ?double }
   * @default PI / 4.0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  outerAngle?: double;
}

/**
 * Defines directional light.
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
 * Defines camera.
 *
 * @extends Node
 * @interface Camera
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Camera extends Node {
  /**
   * Field of view. The unit is radian (rad).
   * The value ranges from 0 to π radians.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  fov: double;

  /**
   * Near plane. The unit is the scene unit (such as cm, m, and km) in the world coordinate system.
   * The value is greater than 0.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  nearPlane: double;

  /**
   * Far plane. The unit is the scene unit (such as cm, m, and km) in the world coordinate system.
   * The value is greater than that of nearPlane.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  farPlane: double;

  /**
   * Whether the camera is enabled. true if enabled, false otherwise.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * Post-processing settings.
   *
   * @type { PostProcessSettings | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  postProcess: PostProcessSettings | null;

  /**
   * Post-processing effects applied to the camera output.
   * 
   * @type { Container<Effect> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  readonly effects: Container<Effect>;

  /**
   * Color after the render target is cleared.
   *
   * @type { Color | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  clearColor: Color | null;

  /**
   * Whether Multisample Anti-Aliasing (MSAA) is enabled. true if enabled, false otherwise.
   * The default value is false.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  msaa?: boolean;

  /**
   * Rendering pipeline type. If this parameter is not set, the lightweight forward rendering pipeline is used by default.
   * (If the FORWARD_LIGHTWEIGHT pipeline is selected, certain features are unavailable.)
   *
   * @type { ?RenderingPipelineType }
   * @default RenderingPipelineType.FORWARD_LIGHTWEIGHT
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  renderingPipeline?: RenderingPipelineType;

  /**
   * Casts a ray from a specific position on the screen to detect and retrieve information about all hit 3D objects.
   * This API uses a promise to return the result.
   *
   * @param { Vec2 } viewPosition - Normalized screen coordinates.
   *     The value range is [0, 1], where (0,0) corresponds to the top-left corner of the Component3D component,
   *     and (1,1) corresponds to the bottom-right corner.
   * @param { RaycastParameters } params - Configuration parameters for raycasting, such as detection range and filtered nodes.
   * @returns { Promise<RaycastResult[]> } - An array of hit objects sorted by distance (from nearest to farthest).
   *     If no objects are hit, an empty array is returned.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  raycast(viewPosition: Vec2, params: RaycastParameters): Promise<RaycastResult[]>;

  /**
   * Get the view matrix of this camera.
   * @returns { Mat4x4 } -- the view matrix of this camera
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  getViewMatrix(): Mat4x4;

  /**
   * Get the projection matrix of this camera.
   * @returns { Mat4x4 } -- the projection matrix of this camera
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  getProjectionMatrix(): Mat4x4;
}
