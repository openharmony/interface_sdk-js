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
 * @kit AbilityKit
 */
/**
 * @since 20
 */
export namespace TestModuleA {
  /**
   * @since 20
   * 
   */
  export interface TestResult<T> {
    success: boolean;
    data: T;
    timestamp: Date;
    metadata: Record<string, any>;
  }

  /**
   * @since 20
   * 
   */
  export enum OperationStatus {
    /**
     * @since 20
     * 
     */
    PENDING = "pending",
    /**
     * @since 20
     * 
     */
    RUNNING = "running",
    /**
     * @since 20
     * @systemapi
     */
    COMPLETED = "completed",
    /**
     * @since 20
     * 
     */
    FAILED = "failed",
    /**
     * @since 20
     * 
     */
    CANCELLED = "cancelled"
  }

  /**
   * @since 20
   *
   */
  export type ValidationRule = {
    field: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    customValidator?: (value: any) => boolean;
  };

  /**
   * @since 20
   *
   */
  export class DataProcessor {
    /**
     * @since 20
     * 
     */
    private data: any[] = [];

    /**
     * @since 20
     * 
     */
    constructor(initialData: any[] = []) {
      this.data = initialData;
    }

    /**
     * @since 20
     * @systemapi
     */
    public process(): TestResult<any[]> {
      return {
        success: true,
        data: this.data,
        timestamp: new Date(),
        metadata: { processed: true, count: this.data.length }
      };
    }

    /**
     * @since 20
     * 
     */
    public getStatus(): OperationStatus {
      return this.data.length > 0 ? OperationStatus.COMPLETED : OperationStatus.PENDING;
    }
  }

  /**
   * @since 20
   * @systemapi
   */
  export type ComplexType<T extends string | number> = {
    value: T;
    transformed: string;
    validated: boolean;
  };

  /**
   * @since 20
   * @systemapi
   */
  export function createValidator(rules: ValidationRule[]): (data: any) => boolean {
    return (data: any) => {
      return rules.every(rule => {
        if (rule.required && !data[rule.field]) return false;
        if (rule.minLength && data[rule.field]?.length < rule.minLength) return false;
        if (rule.maxLength && data[rule.field]?.length > rule.maxLength) return false;
        if (rule.pattern && !rule.pattern.test(data[rule.field])) return false;
        if (rule.customValidator && !rule.customValidator(data[rule.field])) return false;
        return true;
      });
    };
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface ContinuationExtraParams {
    /**
     * Device type.
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    deviceType?: Array<string>;

    /**
     * Name of the target bundle.
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    targetBundle?: string;

    /**
     * Device filtering description.
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    description?: string;

    /**
     * Device filtering parameter.
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    filter?: any;

    /**
     * Continuation mode.
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    continuationMode?: continuationManager.ContinuationMode;

    /**
     * Authentication information.
     *
     * @type { ?object } [since 8 - 10]
     * @type { ?Record<string, Object> } [since 11]
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    authInfo?: Record<string, Object>;
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface Resource {
    /**
     * Bundle name of the application.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Module name of the application.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * Resource ID. The value can be:
     * <br>- Application resource range: [0x01000000, 0x06FFFFFF] and [0x08000000, 0xFFFFFFFF]
     * <br>- System resource range: [0x07000000, 0x07FFFFFF]
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * Other resource parameters, including the resource name, substitution value for the formatting API, and quantifier
     * for the singular-plural formatting API.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    params?: any[];

    /**
     * Set params.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    params?: Array<string | int | long | double | Resource>;

    /**
     * Resource type. The options are as follows:
     * <br>- 10001: color
     * <br>- 10002: float
     * <br>- 10003: string
     * <br>- 10004: plural
     * <br>- 10005: boolean
     * <br>- 10006: intarray
     * <br>- 10007: integer
     * <br>- 10008: pattern
     * <br>- 10009: strarray
     * <br>- 20000: media
     * <br>- 30000: rawfile
     * <br>- 40000: symbol
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    type?: int;
  }

  /**
   * @since 20
   * @systemapi
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
   * @since 20
   * @systemapi
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
   * @since 20
   * @systemapi
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
     * Create a new scene from a ResourceStr.
     * If uri is not provided, will return an empty scene.
     *
     * @param { ResourceStr } [uri] - the resource of creating a scene
     * @returns { Promise<Scene> } promise a scene
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
     * Get a node by path.
     *
     * @param { string } path - the path of the node
     * @param { NodeType } type - verify the type of node, if it does not match, return null
     * @returns { Node | null } if the node is found by it's path
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12 dynamic
     * @since 23 static
     */
    getNodeByPath(path: string, type?: NodeType): Node | null;

    /**
     * Get resource factory.
     *
     * @returns { SceneResourceFactory } if the node is found by it's path
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12 dynamic
     * @since 23 static
     */
    getResourceFactory(): SceneResourceFactory;

    /**
     * Release all native scene resources. All TS references will be undefined.
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
     * Get component by name.
     *
     * @param { Node } node - The node component is attached to.
     * @param { string } name - name of the component
     * @returns { SceneComponent | null }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20 dynamic
     * @since 23 static
     */
    getComponent(node: Node, name: string): SceneComponent | null;

    /**
     * clone a node or a subtree whose root node is the input node
     *
     * @param { Node } node - input node to be cloned
     * @param { Node } parent - the parent node which the cloned node will be set as its child node
     * @param { string } name - the name of the cloned node
     * @returns { Node | null } the clone result, return null if clone is failed.
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 23 dynamic&static
     */
    cloneNode(node: Node, parent: Node, name: string): Node | null;
  }
}
