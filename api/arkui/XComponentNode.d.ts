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
 * Provides APIs for the XComponentNode, which represents an XComponent in the component tree. You can write
 * EGL/OpenGL ES and media data and display it on the XComponent, whose render type can be dynamically modified.
 * It is suitable for scenarios where native self-rendering content needs to be embedded in the ArkUI component tree.
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
   * Constructor used to create an XComponentNode.
   * <br>You need to explicitly specify **selfIdealSize** in RenderOptions. Otherwise, the XComponentNode's content
   * size is empty, resulting in no content being displayed.
   *
   * @param { UIContext } uiContext - UI context. For details about how to obtain it, see
   *     [Obtaining UI Context](./js-apis-arkui-node.md#obtaining-ui-context).
   * @param { RenderOptions } options - Rendering options of an XComponentNode, used to set node rendering related
   *     parameters such as the ideal size (**selfIdealSize**).
   * @param { string } id - Unique ID of the **XComponent**. The value can contain a maximum of 128 characters. If the
   *     length exceeds the limit, the API fails to create the component. For details, see
   *     [XComponent](arkui-ts/ts-basic-components-xcomponent.md).
   * @param { XComponentType } type - Type of the **XComponent**, specified using the
   *     [XComponentType](arkui-ts/ts-appendix-enums.md#xcomponenttype10) enumeration. For details, see
   *     [XComponent](arkui-ts/ts-basic-components-xcomponent.md).
   * @param { string } libraryName - Name of the dynamic library compiled and output at the native layer. If this
   *     parameter is not passed, the native dynamic library is not loaded by default. For details, see
   *     [XComponent](arkui-ts/ts-basic-components-xcomponent.md).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.arkui.node/typeNode#createNode
   */
  constructor(uiContext: UIContext, options: RenderOptions,
    id: string, type: XComponentType, libraryName?: string);

  /**
   * Called when the XComponentNode loading is complete.
   *
   * @param { Object } event - Event parameter of the **XComponent** instance, used to obtain the context of the
   *     **XComponent** instance. The APIs mounted on the context are defined by you at the C++ layer, and you can call
   *     the APIs registered at the native layer through this context.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead XComponent/XComponentAttribute#onLoad
   */
  onCreate(event?: Object): void;

  /**
   * Called when the XComponentNode is destroyed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead XComponent/XComponentAttribute#onDestroy
   */
  onDestroy(): void;

  /**
   * Dynamically changes the render type of the **XComponentNode**. The render policy can be switched dynamically at
   * runtime, which is suitable for scenarios where different render types are selected based on content rendering
   * requirements. For example, the **DISPLAY** type can be used when direct EGL/OpenGL ES drawing on the component is
   * required; the **TEXTURE** type can be used when the rendered content needs to participate in composition as a
   * texture (such as implementing semi-transparent overlay effects or off-screen rendering).
   *
   * @param { NodeRenderType } type - Target render type to change, specified using the
   *     [NodeRenderType](./js-apis-arkui-builderNode.md#noderendertype) enumeration.
   * @returns { boolean } - Whether the render type is changed successfully. The value **true** indicates that the
   *     render type is changed successfully, and **false** indicates the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.arkui.node/FrameNode#appendChild
   */
  changeRenderType(type: NodeRenderType): boolean;
}
