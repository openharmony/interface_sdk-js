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

/*** if arkts static */
import { ResourceStr } from '@ohos.arkui.component';
/*** endif */
import { Shader, MaterialType, Material, Animation, Environment, Image, MeshResource, Sampler, SceneResource, Effect, ImageStream } from './SceneResources';
import { Camera, LightType, Light, Node, NodeType, Geometry } from './SceneNodes';
import { Position3, Color, GeometryDefinition, RenderingPipelineType, Vec2, Vec3, Vec4, ShadowAlgorithmType } from './SceneTypes';

/**
 * Scene load parameters object, used to specify additional configuration options when loading 3D model resources. A typical use case is loading an embedded glb model from an MP4 container file.
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
   * @default 0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  offset?: long;
}

/**
 * Describes the scene resource parameters (name and uri), which are used to provide the name of a scene resource and the path of the resource file required in the 3D scene.
 *
 * @typedef SceneResourceParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceParameters {
  /**
   * Name of the scene resource. It is customizable.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Path of the resource file required in the 3D scene. The default value is undefined.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  uri?: ResourceStr;
}

/**
 * Describes the scene node parameters, which are used to provide the name and path in the scene node tree.
 *
 * @typedef SceneNodeParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneNodeParameters {
  /**
   * Name of the scene node. It is customizable.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Path in the scene node tree. It specifies the position of the created camera, light, or node in the scene node tree. Each layer is separated by a slash (/). If not provided, it is set as a child node of the root node. The default value is undefined.
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
 * Describes the configuration parameters for raycasting, defining the behavior of raycasting.
 *
 * @interface RaycastParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RaycastParameters {
  /**
   * Limits the detection scope to this node and its child nodes. If this parameter is not specified, the entire scene is detected.
   *
   * @type { ?Node }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  rootNode?: Node;
}

/**
 * Creates rendering resources that can be shared in multiple scenes ([Scene]{@link Scene}) that share RenderContext.
 *
 * @interface RenderResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderResourceFactory {
  /**
   * Creates a shader based on the scene resource parameters. This API uses a promise to return the result.
   *
   * @param { SceneResourceParameters } params - Parameters for creating the shader.
   *     For details about the .shader file format, see Requirements on the .shader File Format.
   * @returns { Promise<Shader> } Promise used to return the Shader object created.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createShader(params: SceneResourceParameters): Promise<Shader>;

  /**
   * Creates an image based on the scene resource parameters. This API uses a promise to return the result.
   *
   * @param { SceneResourceParameters } params - Parameters for creating the image.
   * @returns { Promise<Image> } Promise used to return the Image object created.
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
   * Creates a mesh based on the scene resource parameters and geometry definition. This API uses a promise to return the result.
   *
   * @param { SceneResourceParameters } params - Parameters for creating the mesh.
   * @param { GeometryDefinition } geometry - Geometry of the mesh to create.
   * @returns { Promise<MeshResource> } Promise used to return the Mesh object created.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>;

  /**
   * Creates a sampler based on the scene resource parameters. This API uses a promise to return the result.
   *
   * @param { SceneResourceParameters } params - Parameters for creating the sampler.
   * @returns { Promise<Sampler> } Promise used to return the Sampler object created.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createSampler(params:SceneResourceParameters): Promise<Sampler>

  /**
   * Creates a scene from the specified resource URI. If no URI is specified, an empty scene is created. This API uses a promise to return the result.
   *
   * @param { ResourceStr } [uri] - Resource path used for creating the scene. If no resource path is passed, an empty scene is created.
   * @returns { Promise<Scene> } Promise used to return the Scene object created.
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
   * Whether Multisample Anti-Aliasing (MSAA) is enabled for the camera. true if enabled, false otherwise. The default value is false.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  msaa?: boolean;

  /**
   * Initial rendering pipeline type. The default value is FORWARD_LIGHTWEIGHT.
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
 * Provides APIs for creating resources, such as cameras and light sources, used in 3D scenes. This class inherits from RenderResourceFactory.
 *
 * @extends RenderResourceFactory
 * @interface SceneResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceFactory extends RenderResourceFactory {
  /**
   * Creates a camera based on scene node parameters. This API uses a promise to return the result.
   *
   * @param { SceneNodeParameters } params - Scene node parameters.
   * @returns { Promise<Camera> } Promise used to return the Camera object created.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters): Promise<Camera>;

  /**
   * Creates a camera based on scene node parameters and camera parameters. This API uses a promise to return the result.
   *
   * @param { SceneNodeParameters } params - Scene node parameters.
   * @param { CameraParameters } cameraParams - Camera parameters.
   * @returns { Promise<Camera> } Promise used to return the Camera object created.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>;
  
  /**
   * Creates a light based on the scene node parameters and light type. This API uses a promise to return the result.
   *
   * @param { SceneNodeParameters } params - Scene node parameters.
   * @param { LightType } lightType - Light type.
   * @returns { Promise<Light> } Promise used to return the Light object created.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>;

  /**
   * Creates a node. This API uses a promise to return the result.
   *
   * @param { SceneNodeParameters } params - Scene node parameters.
   * @returns { Promise<Node> } Promise object, which returns the node object.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createNode(params: SceneNodeParameters): Promise<Node>;

  /**
   * Creates a material based on the scene resource parameters and material type. This API uses a promise to return the result.
   *
   * @param { SceneResourceParameters } params - Scene resource parameters.
   * @param { MaterialType } materialType - Material type.
   * @returns { Promise<Material> } Promise used to return the Material object.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>;

  /**
   * Creates an environment based on the scene resource parameters. This API uses a promise to return the result.
   *
   * @param { SceneResourceParameters } params - Scene resource parameters.
   * @returns { Promise<Environment> } Promise used to return the Environment object created.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createEnvironment(params: SceneResourceParameters): Promise<Environment>;

  /**
   * Creates a geometry object based on the scene node parameters and mesh data. This API uses a promise to return the result.
   *
   * @param { SceneNodeParameters } params - Scene node parameters.
   * @param { MeshResource } mesh resource - Mesh data parameters.
   * @returns { Promise<Geometry> } Promise used to return the Geometry object created.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>;

  /**
   * Creates an effect object based on the effect parameters. This API uses a promise to return the result.
   *
   * @param { EffectParameters } params - Effect parameters.
   * @returns { Promise<Effect> } Promise used to return the Environment object created.
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
 * Defines the context of all rendering resources. Multiple scenes created within the same render context can share rendering resources.
 * 
 * @interface RenderContext
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderContext {
  /**
   * Obtains the rendering resource factory, which provides APIs for creating different rendering resources.
   *
   * @returns { RenderResourceFactory } RenderResourceFactory instance for creating rendering resources.
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
   * param config for soft shadow, control the algorithm type and its configuration.
   *
   * @default undefined
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
 * Describes a scene.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export declare class Scene {
  /**
   * Obtains the rendering context associated with the current graphics object.
   *
   * @returns { RenderContext | null } Rendering context associated with the current object, or null if no rendering context is associated.
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
   * Environment object.
   *
   * @return { Environment }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get environment(): Environment;

  /**
   * Environment object.
   *
   * @param { Environment } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  set environment(value: Environment);

  /**
   * Animation objects in the 3D scene.
   *
   * @return { Animation[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get animations(): Animation[];

  /**
   * Root node of the 3D scene tree.
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
   * Generally used for importing nodes from other scenes.
   *
   * @param { string } name - Name of the imported node, which can be customized and has no special requirements.
   * @param { Node } node - Node to be imported.
   * @param { Node | null} parent - Parent node of the imported node in the new scene.
   * @returns { Node } Node to be imported.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importNode(name: string, node: Node, parent: Node | null): Node;

  /**
   * Imports another scene into the current one.
   *
   * @param { string } name - Name of the root node of the imported scene, which can be customized and has no special requirements.
   * @param { Scene } scene - Scene to import.
   * @param { Node | null } parent - Parent node of the imported scene in the new scene.
   * @returns { Node } Root node of the imported scene.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importScene(name: string, scene: Scene, parent: Node | null): Node;

   /**
   * Renders frames on demand, such as controlling the frame rate.
   *
   * @param { RenderParameters } params - Rendering parameters. The default value is undefined.
   * @returns { boolean } Rendering result. The value true is returned if rendering is successfully scheduled; returns false otherwise.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 15 dynamic
   * @since 23 static
   */
  renderFrame(params?: RenderParameters): boolean;

  /**
   * Creates a component and attaches it to a node. This API uses a promise to return the result.
   *
   * @param { Node } node - Node to which the component will be attached.
   * @param { string } name - Name of the component to create, which is defined by individual plugins.
   * @returns { Promise<SceneComponent> } Promise used to return the SceneComponent object created.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createComponent(node: Node, name: string): Promise<SceneComponent>;

  /**
   * Rendering configuration.
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
