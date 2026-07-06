/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * 定义XComponent Node。
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
   * 构造函数。
   *
   * @param { UIContext } uiContext - 用于创建FrameNode的UIContext
   * @param { RenderOptions } options - Builder Node的渲染选项
   * @param { string } id - 应用定义的XComponent id
   * @param { XComponentType } type - XComponent类型
   * @param { string } libraryName - XComponent要加载的库名称
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.arkui.node/typeNode#createNode
   */
  constructor(uiContext: UIContext, options: RenderOptions,
    id: string, type: XComponentType, libraryName?: string);

  /**
   * 当XComponent的surface创建完成时回调。
   *
   * @param { Object } event - 加载库时来自native的事件
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead XComponent/XComponentAttribute#onLoad
   */
  onCreate(event?: Object): void;

  /**
   * 当XComponent的surface被销毁时回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead XComponent/XComponentAttribute#onDestroy
   */
  onDestroy(): void;

  /**
   * 设置builderNode的渲染类型。
   *
   * @param { NodeRenderType } type - 渲染类型
   * @returns { boolean } - 返回是否成功修改渲染类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.arkui.node/FrameNode#appendChild
   */
  changeRenderType(type: NodeRenderType): boolean;
}
