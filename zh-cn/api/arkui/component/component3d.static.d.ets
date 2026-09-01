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
 * @file 定义3D组件
 * @kit ArkUI
 */

import { Scene } from './../../@ohos.graphics.scene';
import { ResourceStr, Dimension } from './units';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';

/**
 * 模型类型枚举
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 static
 */
export declare enum ModelType {
  /**
   * 渲染到纹理，GPU将该纹理合成到屏幕。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  TEXTURE = 0,

  /**
   * 渲染到Surface，特殊硬件将该Surface合成到屏幕。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  SURFACE = 1
}

/**
 * 3D场景控制使用的场景选项
 *
 * @interface SceneOptions
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 static
 */
export declare interface SceneOptions {
  /**
   * 3D渲染时为ResourceStr类型，3D场景控制时为Scene类型
   *
   * @type { ?(ResourceStr | Scene) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  scene?: ResourceStr | Scene;

  /**
   * 3D渲染时的场景类型
   *
   * @type { ?ModelType }
   * @default ModelType.SURFACE 表面模型类型
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  modelType?: ModelType;
}

/**
 * Component3DAttribute属性接口。
 * 
 * @extends CommonMethod
 * @interface Component3DAttribute
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 static
 * @noninterop
 */
export declare interface Component3DAttribute extends CommonMethod {
  /**
   * 加载3D模型环境资源。
   *
   * @param { ResourceStr | undefined } uri - 3D环境资源的路径
   * @returns { Component3DAttribute } 组件3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default environment(uri: ResourceStr | undefined): this;

  /**
   * 设置3D场景渲染的渲染管线。
   *
   * @param { ResourceStr | undefined } uri - 渲染管线配置文件的路径
   * @param { boolean | undefined } selfRenderUpdate - 是否每帧触发渲染
   * @returns { Component3DAttribute } 组件3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default customRender(uri: ResourceStr | undefined, selfRenderUpdate: boolean | undefined): this;

  /**
   * 加载着色器URI。
   *
   * @param { ResourceStr | undefined } uri - 自定义着色器的路径
   * @returns { Component3DAttribute } 组件3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default shader(uri: ResourceStr | undefined): this;

  /**
   * 加载着色器纹理URI。
   *
   * @param { ResourceStr | undefined } uri - 着色器使用的纹理的路径
   * @returns { Component3DAttribute } 组件3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default shaderImageTexture(uri: ResourceStr | undefined): this;

  /**
   * 着色器动画的缓冲区输入
   *
   * @param { Array<double> | undefined } buffer - 着色器输入的统一缓冲区
   * @returns { Component3DAttribute } 组件3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default shaderInputBuffer(buffer: Array<double> | undefined): this;

  /**
   * 设置渲染宽度分辨率。
   *
   * @param { Dimension | undefined } value - GPU渲染目标的宽度，
   *     目标将上缩或下缩至视图的宽度。
   * @returns { Component3DAttribute } 组件3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default renderWidth(value: Dimension | undefined): this;

  /**
   * 设置渲染高度分辨率。
   *
   * @param { Dimension | undefined } value - GPU渲染目标的高度，
   *     目标将上缩或下缩至视图的高度。
   * @returns { Component3DAttribute } 组件3D的属性
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default renderHeight(value: Dimension | undefined): this;

  /**
   * 设置属性修改器
   *
   * @param { AttributeModifier<Component3DAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { Component3DAttribute }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<Component3DAttribute>
      | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义Component3D。
 *
 * @param { SceneOptions } [sceneOptions] - 3D场景控制器
 * @param { CustomBuilder } [content_] - 容器
 * @returns { Component3DAttribute }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Component3D(
    sceneOptions?: SceneOptions,
    content_?: CustomBuilder,
): Component3DAttribute