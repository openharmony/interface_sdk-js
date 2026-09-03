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
 * @kit ArkUI
 */



import { UIContext } from '../@ohos.arkui.UIContext';
import { NodeRenderType, RenderOptions } from './BuilderNode';
import { FrameNode } from './FrameNode';

/**
 * 提供XComponent节点XComponentNode，表示组件树中的XComponent组件，用于EGL/OpenGL ES渲染和媒体数据写入，并支持动态修改节点渲染类型，
 * 适用于需要在ArkUI组件树中嵌入Native自渲染内容的场景。
 *
 * @extends FrameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 11 dynamiconly
 * @deprecated since 12
 * @useinstead ohos.arkui.node/typeNode#XComponent
 */
export declare class XComponentNode extends FrameNode {
  /**
   * XComponentNode的构造函数。
   *
   * @param { UIContext } uiContext - UI上下文，获取方式可参考UIContext获取方法。
   * @param { RenderOptions } options - XComponentNode的渲染配置选项，用于设置节点渲染相关参数，如理想尺寸（selfIdealSize）等。
   * @param { string } id - XComponent的唯一标识，最大支持字符串长度128，超出长度时无效。详见XComponent组件。
   * @param { XComponentType } type - 用于指定XComponent组件类型，取值为XComponentType枚举定义的值。详见XComponent组件。
   * @param { string } libraryName - Native层编译输出动态库名称。不传该参数时，默认不加载Native动态库。详见XComponent组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.arkui.node/typeNode#createNode
   */
  constructor(uiContext: UIContext, options: RenderOptions,
    id: string, type: XComponentType, libraryName?: string);

  /**
   * XComponentNode加载完成时触发该回调。
   *
   * @param { Object } event - XComponent实例对象的事件参数，用于获取XComponent实例的context。
   *         context上挂载的方法由开发者在Native层定义，开发者可通过该context调用Native层注册的方法。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead XComponent/XComponentAttribute#onLoad
   */
  onCreate(event?: Object): void;

  /**
   * XComponentNode销毁时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead XComponent/XComponentAttribute#onDestroy
   */
  onDestroy(): void;

  /**
   * 动态修改XComponentNode的渲染类型。可在运行时动态切换渲染策略，适用于根据内容渲染需求选择不同渲染类型的场景。
   * 例如，当需要在组件上进行EGL/OpenGL ES直接绘制时可使用RENDER_TYPE_DISPLAY类型；当需要将渲染内容作为纹理参与合成（如实现半透明叠加效果或离屏渲染）时可切换为RENDER_TYPE_TEXTURE类型。
   *
   * @param { NodeRenderType } type - 需要修改的目标渲染类型，取值为NodeRenderType枚举定义的值。
   * @returns { boolean } 修改渲染类型是否成功。<br>true：修改渲染类型成功；false：修改渲染类型失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.arkui.node/FrameNode#appendChild
   */
  changeRenderType(type: NodeRenderType): boolean;
}
