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
 * @file Defines 3D scene related interfaces
 * @kit ArkGraphics3D
 */

/*** if arkts static */
import { ResourceStr } from '@ohos.arkui.component';
/*** endif */
import { Shader, MaterialType, Material, Animation, Environment, Image, MeshResource, Sampler, SceneResource, Effect, ImageStream } from './SceneResources';
import { Camera, LightType, Light, Node, NodeType, Geometry } from './SceneNodes';
import { Position3, Color, GeometryDefinition, RenderingPipelineType, Vec2, Vec3, Vec4, ShadowAlgorithmType } from './SceneTypes';

/**
 * The parameters for loading a scene
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface SceneLoadParams {
  /**
   * The offset of the start of the 3D model data in the resource
   * Unit: byte, The value must be greater than or equal to 0. Default value: 0.
   *
   * @default { 0 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  offset?: long;
}

/**
 * The scene resource parameters type.
 *
 * @typedef SceneResourceParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceParameters {
  /**
   * The name of the scene resource parameters.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * The resource uri of the scene resource parameters.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  uri?: ResourceStr;
}

/**
 * The scene node parameters type.
 *
 * @typedef SceneNodeParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneNodeParameters {
  /**
   * The name of the scene node parameters.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * The path of the scene node parameters.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  path?: string;
}

/**
 * Describes a result object from raycasting, containing details about the 3D object hit by the ray.
 *
 * @typedef RaycastResult
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RaycastResult {
  /**
   * 3D scene node hit by the ray.
   * You can use this node to manipulate the target object (for example, moving, rotating, or hiding the object).
   *
   * @type { Node }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  node: Node;

  /**
   * Distance from the center of the hit object's bounding box to the camera center,
   * in scene units of the world coordinate system (such as cm, m, km, etc.).
   * The value range is greater than 0.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  centerDistance: double;

  /**
   * Exact world coordinates of the collision point between the ray and the object ({x: number, y: number, z: number}),
   * in scene units of the world coordinate system (such as cm, m, km, etc.).
   *
   * @type { Position3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  hitPosition: Position3;
}

/**
 * How a raycast should be performed.
 *
 * @interface RaycastParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RaycastParameters {
  /**
   * If defined, search only the nodes in the hierarchy under this node
   * If undefined, search all the nodes in the scene
   *
   * @type { ?Node }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  rootNode?: Node;
}

/** 
 * The render resource factory. RenderResourceFactory is used to create resources that can be shared
 * across Scenes that share a RenderContext
 * 
 * @interface RenderResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderResourceFactory {
  /**
   * Create a shader.
   *
   * @param { SceneResourceParameters } params - the param of creating a shader
   * @returns { Promise<Shader> } promise a shader
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createShader(params: SceneResourceParameters): Promise<Shader>;

  /**
   * Create an image.
   *
   * @param { SceneResourceParameters } params - the param of creating an image
   * @returns { Promise<Image> } promise an image
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createImage(params: SceneResourceParameters): Promise<Image>;

  /**
   * Create an image stream.
   *
   * @param { SceneResourceParameters } params - the param of creating an image stream
   * @returns { Promise<ImageStream> } promise an image stream
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  createImageStream(params: SceneResourceParameters): Promise<ImageStream>;

  /**
   * Create a Mesh from an array of vertices.
   * 
   * @param { SceneResourceParameters } params - the param of creating a Mesh object
   * @param { GeometryDefinition } geometry - what sort of a geometric shape to create
   * @returns { Promise<MeshResource> } promise a Mesh
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>;

  /**
   * Create a Sampler.
   * 
   * @param { SceneResourceParameters } params - the param of create a sampler
   * @returns { Promise<Sampler> } - promise a sampler
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createSampler(params:SceneResourceParameters): Promise<Sampler>

  /**
   * Create a new scene from a Resource.
   * If uri is not provided, will return an empty scene.
   * 
   * @param { ResourceStr } [uri] - the resource of creating a scene
   * @returns { Promise<Scene> } promise a scene
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createScene(uri?: ResourceStr): Promise<Scene>;

  /**
   * Create a new scene from a SceneLoadParams.
   *
   * @param { ResourceStr } uri - the resource of creating a scene
   * @param { SceneLoadParams } param - the params for scene load
   * @returns { Promise<Scene> } Promise used to return a scene
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  createScene(uri: ResourceStr, param: SceneLoadParams): Promise<Scene>;
}

/**
 * Describes the camera parameters, which are used to define additional configuration options for camera initialization.
 *
 * @interface CameraParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface CameraParameters {
  /**
   * Whether Multisample Anti-Aliasing (MSAA) is enabled for the camera. true if enabled, false otherwise.
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
   * Initial rendering pipeline type.
   * The default value is FORWARD_LIGHTWEIGHT.
   * 
   * @type { ?RenderingPipelineType }
   * @default RenderingPipelineType.FORWARD_LIGHTWEIGHT
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  renderingPipeline?: RenderingPipelineType;
}

/**
 * Special effect parameter configuration, which is used to specify the special effect ID required for creating a special effect.
 * It is used as the input parameter of the createEffect API to create a special effect object.
 * 
 * @interface EffectParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface EffectParameters {
  /**
   * Effect ID, which is in the format of 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
   * for example, 'e68a7f45-2d21-4a0d-9aef-7d9c825d3f12'.
   * 
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  effectId: string;
}

/**
 * The scene resource factory.
 *
 * @extends RenderResourceFactory
 * @interface SceneResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceFactory extends RenderResourceFactory {
  /**
   * Create a camera.
   *
   * @param { SceneNodeParameters } params - the param of creating a camera
   * @returns { Promise<Camera> } promise a camera
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters): Promise<Camera>;

  /**
   * Create a camera.
   *
   * @param { SceneNodeParameters } params - the param of creating a camera
   * @param { CameraParameters } cameraParams - camera specific extra parameters
   * @returns { Promise<Camera> } promise a camera
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>;
  
  /**
   * Create a light.
   *
   * @param { SceneNodeParameters } params - the param of creating a light
   * @param { LightType } lightType - the type of the light
   * @returns { Promise<Light> } promise a light
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>;

  /**
   * Create a node.
   *
   * @param { SceneNodeParameters } params - the param of creating a node
   * @returns { Promise<Node> } promise a node
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createNode(params: SceneNodeParameters): Promise<Node>;

  /**
   * Create a material.
   *
   * @param { SceneResourceParameters } params - the param of creating a material
   * @param { MaterialType } materialType - the type of the material
   * @returns { Promise<Material> } promise a material
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>;

  /**
   * Create an environment.
   *
   * @param { SceneResourceParameters } params - the param of creating an environment object
   * @returns { Promise<Environment> } promise an environment
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createEnvironment(params: SceneResourceParameters): Promise<Environment>;

  /**
   * Create a geometry node.
   *
   * @param { SceneNodeParameters } params - the param of creating a geometry
   * @param { MeshResource } mesh resource - The mesh data for the geometry
   * @returns { Promise<Geometry> } promise a geometry
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>;

  /**
   * Create an effect.
   * 
   * @param { EffectParameters } params - the params of creating an effect.
   * @returns { Promise<Effect> } promise an effect.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  createEffect(params: EffectParameters): Promise<Effect>;
}

/**
 * Represents a basic scene component, which is used to describe the component information of a scene node,
 * including the component name and its properties.
 * 
 * @interface SceneComponent
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface SceneComponent {
  /**
   * Name of the scene component, which is customizable.
   * 
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * A set of component properties stored in key-value pairs.
   * It supports multiple basic and complex types to describe various properties of the scene component.
   * The unit and value range depend on the specific scene component.
   * 
   * @type { Record<string, string | double | Vec2 | Vec3 | Vec4 | SceneResource | boolean | double[] | string[] |
   * SceneResource[] | Vec2[] | Vec3[] | Vec4[] | null | undefined> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  readonly property: Record<string, string | double | Vec2 | Vec3 | Vec4 | SceneResource | boolean | double[] |
  string[] | SceneResource[] | Vec2[] | Vec3[] | Vec4[] | null | undefined>;
}

/** 
 * Render context defines the context for all rendering resources. Resources within the same render context
 * may be shared between scenes created within the same render context.
 * 
 * @interface RenderContext
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderContext {
  /**
   * Get resource factory.
   * 
   * @returns { RenderResourceFactory } -- RenderResourceFactory instance
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  getRenderResourceFactory() : RenderResourceFactory;

  /**
   * Loads a plugin by name. The API locates and loads the corresponding plugin resource using the provided plugin name.
   * It uses a promise to return the result.
   * 
   * @param {string} name - Name of the plugin to load, which must be a system predefined or registered and available plugin name,
   *     and follow the naming conventions.
   * @returns { Promise<boolean> } - Promise used to return a Boolean value, indicating whether the plugin is loaded.
   *     The value true means that the plugin is loaded, and false means the opposite.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  loadPlugin(name: string): Promise<boolean>;

  /**
   * Registers the directory path and retrieval name for asset files, such as shaders.
   * It allows the system to find and replace the path descriptions of related files within the shaders using the retrieval name.
   * This ensures that the correct paths for assets and their associated files are located and loaded properly.
   *
   * @param { string } protocol - Path retrieval name to be registered, used as the prefix identifier for file paths associated internally in the shader.
   *     Must be a non-empty retrieval name that is not predefined or registered by the system.
   * @param { string } uri - Directory path of the assets to be registered, which corresponds to the retrieval name.
   *     When the shader is loaded, the retrieval name prefix in the path is replaced with this directory.
   *     It must be the path to the folder containing the asset files.
   * @returns { boolean } - Result indicating whether the registration is successful. true if successful, and false otherwise.
   *     The possible cause of a registration failure is that the retrieval name has been registered or an input parameter is invalid.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  registerResourcePath(protocol: string, uri: string): boolean;
}

/**
 * param config for soft shadow, control the algorithm type and its configuration
 * 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare abstract class SoftShadowConfig {
  /**
   * type of shadow shading algorithms
   *
   * @returns { ShadowAlgorithmType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get shadowAlgorithmType(): ShadowAlgorithmType;
}

/**
 * param config for pcf soft shadow
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class PCFConfig extends SoftShadowConfig {
  /**
   * Get sample radius around the shadow edge, the unit is pixel.
   *
   * @returns { double | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get shadowSampleRadius(): double | undefined;

  /**
   * Set sample radius around the shadow edge at pixel-level.
   *
   * @param { double | undefined } value
   * @default 5.0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  set shadowSampleRadius(value: double | undefined);

  /**
   * Get the sample count number from shadow map used to render a shadow pixel.
   * The value must be a positive integer.
   *
   * @returns { int | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get shadowSampleCount(): int | undefined;

  /**
   * Set the sample count number from shadow map used to render a shadow pixel.
   * Values outside the range are ignored and the previous value is retained.
   *
   * @param { int | undefined } value
   * @default 16
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  set shadowSampleCount(value: int | undefined);
}

/**
 * Describes the rendering configuration.
 *
 * @interface RenderConfiguration
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface RenderConfiguration {
  /**
   * Global shadow map resolution, in pixels (px). The default value is undefined,
   * indicating that the shadow map resolution is set to 1024 * 1024.
   * The value must be greater than 0 for the parameter to take effect.
   * If the input value is a floating-point number, it will be truncated to an integer;
   * if the input value is less than or equal to 0, the input will be ignored, and the original configuration will be retained.
   *
   * @type { ?Vec2 }
   * @default { 1024, 1024 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  shadowResolution?: Vec2;

  /**
   * param config for soft shadow, control the algorithm type and its configuration
   *
   * @default { undefined }, means that use the default hard shadow algorithm
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  softShadowConfig?: SoftShadowConfig;
}

/**
 * Describes the rendering parameters.
 *
 * @interface RenderParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 15 dynamic
 * @since 23 static
 */
export interface RenderParameters {
  /**
   * Whether to render every frame. The value true means to render every frame, and false means to render frames on demand.
   * The default value is true.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 15 dynamic
   * @since 23 static
   */
  alwaysRender?: boolean;
}

/**
 * Defines the 3d scene.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export declare class Scene {
  /**
   * Get default render context
   *
   * @returns { RenderContext | null } -- The default RenderContext instance
   * @static
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  static getDefaultRenderContext(): RenderContext | null;

  /**
   * Loads a resource by path.
   * This API uses a promise to return the result.
   *
   * @param { ResourceStr } [uri] - Path of the model file resource to load. The default value is undefined.
   * @returns { Promise<Scene> } Promise used to return the Scene object created.
   * @static
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  static load(uri? : ResourceStr): Promise<Scene>;

  /**
   * Create a new scene from a SceneLoadParams.
   *
   * @param { ResourceStr } uri - the resource of creating a scene
   * @param { SceneLoadParams } param - the params for scene load
   * @returns { Promise<Scene> } Promise used to return a scene
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  static load(uri: ResourceStr, param: SceneLoadParams):Promise<Scene>;

  /**
   * The environment of the scene.
   *
   * @return { Environment }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get environment(): Environment;

  /**
   * The environment of the scene.
   *
   * @param { Environment } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  set environment(value: Environment);

  /**
   * The animations of the scene.
   *
   * @return { Animation[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get animations(): Animation[];

  /**
   * The root node of the scene.
   *
   * @return { Node | null }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get root(): Node | null;

  /**
   * Obtains a node by path.
   *
   * @param { string } path - Path in the scene node tree. Each layer is separated by a slash (/).
   * @param { NodeType } type - Expected type of the node to be returned. The default value is null.
   * @returns { Node | null } Returns the instance of the requested node.
   *     Returns null if not found or if the type of the found node does not match the passed parameter.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getNodeByPath(path: string, type?: NodeType): Node | null;

  /**
   * Obtains the scene resource factory.
   *
   * @returns { SceneResourceFactory } Scene resource factory.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getResourceFactory(): SceneResourceFactory;

  /**
   * Destroys this scene and releases all scene resources.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  destroy(): void;

  /**
   * Import node into the scene. The original node may come from separate Scene.
   * The node will be cloned and any modifications to the old node will not be visible after the import.
   *
   * @param { string } name - The name of the newly created node.
   * @param { Node } node - The node to be imported.
   * @param { Node | null} parent - The parent node or null for root
   * @returns { Node } The newly created node.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importNode(name: string, node: Node, parent: Node | null): Node;

  /**
   * Import scene into the scene as a node. The node hierarchy will appear under the parent node.
   * All animations from the scene will be duplicated in the scene.
   *
   * @param { string } name - The name of the newly created node
   * @param { Scene } scene - The scene to be imported.
   * @param { Node | null } parent - The parent node or null for root
   * @returns { Node } The newly created node.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importScene(name: string, scene: Scene, parent: Node | null): Node;

   /**
   * A new frame is rendered for all active camera.
   *
   * @param { RenderParameters } params - Rendering parameters
   * @returns { boolean } True if rendering was scheduled, false otherwise
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 15 dynamic
   * @since 23 static
   */
  renderFrame(params?: RenderParameters): boolean;

  /**
   * Create a new component.
   * 
   * @param { Node } node - The node the component is attached to
   * @param { string } name - The name of the component to load. Valid names are defined by each plugin.
   * @returns { Promise<SceneComponent> } - The newly added component.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createComponent(node: Node, name: string): Promise<SceneComponent>;

  /**
   * render configuration settings
   *
   * @returns { RenderConfiguration }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get renderConfiguration(): RenderConfiguration;

  /**
    * Obtains the component instance from a node based on the component name.
    * 
    * @param { Node } node - Node to which the component is attached.
    * @param { string } name - Name of the component to obtain.
    *     The value must be a system predefined or registered custom component name, and follow the naming conventions.
    * @returns { SceneComponent | null } SceneComponent object corresponding to the given name, or null if not found.
    * @syscap SystemCapability.ArkUi.Graphics3D
    * @since 20 dynamic
    * @since 23 static
    */
  getComponent(node: Node, name: string): SceneComponent | null;

  /**
   * Clones a node in the current scene. Cross-scene node cloning is not supported.
   *
   * @param { Node } node - Node to be cloned.
   * @param { Node } parent - Target parent node of the cloned node in the current scene.
   *     The cloned node and the target parent node must belong to the same scene.
   * @param { string } name - Name of the cloned node, which can be customized and has no special requirements.
   * @returns { Node | null } Returns the cloned node. If the operation fails, null is returned.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  cloneNode(node: Node, parent: Node, name: string): Node | null;
}
