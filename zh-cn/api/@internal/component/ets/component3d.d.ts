/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @file Defines 3D component
 * @kit ArkUI
 */

/**
 * 提供控制3D场景的方法 
 *
 * @typedef { import('../api/@ohos.graphics.scene').Scene }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @atomicservice 
 * @since 12 dynamic
 */
declare type Scene = import('../api/@ohos.graphics.scene').Scene;

/**
 * 模型类型枚举
 * @enum { number }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ModelType {
  /**
   * 渲染到纹理，GPU将此纹理合成到屏幕.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  TEXTURE = 0,

  /**
   * 渲染到表面，专有硬件将此表面合成到屏幕.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  SURFACE = 1,
}

/**
 * 3D场景控制使用的场景选项 
 *
 * @interface SceneOptions
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SceneOptions {
  /**
   * 3D渲染的资源类型，3D场景控制的Scene类型
   *
   * @type { ?(ResourceStr | Scene) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  scene?: ResourceStr | Scene;

  /**
   * 3D渲染时的场景类型
   *
   * @type { ?ModelType }
    * @default ModelType.SURFACE 表面模型类型
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  modelType?: ModelType; 
}

/**
 * 定义Component3D. 
 *
 * @interface Component3DInterface
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @atomicservice
 * @since 12 dynamic
 */
interface Component3DInterface {
  /**
   * 构造函数使用的SceneOptions 
   *
   * @param { SceneOptions } sceneOptions - 3D场景控制器
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  (sceneOptions?: SceneOptions): Component3DAttribute;
}

/**
 * @extends CommonMethod<Component3DAttribute>
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @atomicservice
 * @since 12 dynamic
 */
declare class Component3DAttribute extends CommonMethod<Component3DAttribute> {
  /**
   * 加载3D模型环境资源.
   *
   * @param { ResourceStr } uri - 3D环境资源的路径
   * @returns { Component3DAttribute } component3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  environment(uri: ResourceStr): Component3DAttribute;

  /**
   * 设置3D场景渲染的渲染管线.
   *
   * @param { ResourceStr } uri - 渲染管线配置文件的路径
   * @param { boolean } selfRenderUpdate - 每帧触发动效渲染
   * @returns { Component3DAttribute } component3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  customRender(uri: ResourceStr, selfRenderUpdate: boolean): Component3DAttribute;

  /**
   * 加载着色器URI. 
   *
   * @param { ResourceStr } uri - 自定义着色器的路径
   * @returns { Component3DAttribute } component3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  shader(uri: ResourceStr): Component3DAttribute;

  /**
   * 加载着色器纹理URI. 
   *
   * @param { ResourceStr } uri - 着色器所用纹理的路径
   * @returns { Component3DAttribute } component3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  shaderImageTexture(uri: ResourceStr): Component3DAttribute;
  
  /**
   * 着色器动画的缓冲区输入 
   *
   * @param { Array<number> } buffer - 着色器输入的统一缓冲区
   * @returns { Component3DAttribute } component3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  shaderInputBuffer(buffer: Array<number>): Component3DAttribute;

  /**
   * 设置渲染宽度分辨率. 
   *
   * @param { Dimension } value - GPU渲染目标的宽度，目标将上采样或下采样到视图宽度.
   * @returns { Component3DAttribute } component3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  renderWidth(value: Dimension): Component3DAttribute;

  /**
   * 设置渲染高度分辨率. 
   *
   * @param { Dimension } value - GPU渲染目标的高度，目标将上采样或下采样到视图高度.
   * @returns { Component3DAttribute } component3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @atomicservice
   * @since 12 dynamic
   */
  renderHeight(value: Dimension): Component3DAttribute;
}

/**
 * 定义Component3D组件. 
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @atomicservice
 * @since 12 dynamic
 */
declare const Component3D: Component3DInterface;

/**
 * 定义Component3D实例.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @atomicservice
 * @since 12 dynamic
 */
declare const Component3DInstance: Component3DAttribute;
