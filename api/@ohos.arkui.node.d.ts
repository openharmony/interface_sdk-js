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

import { UIContext } from './@ohos.arkui.UIContext';
import { WrappedBuilder } from 'wrappedBuilderObject';

/**
 * Size info.
 *
 * @interface Size
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface Size {
  /**
   * Get the width of the rect.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  width: number;

  /**
   * Get the height of the rect.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  height: number;
}

/**
* Defined the controller of node container.Provides lifecycle callbacks for the associated NodeContainer
* and methods to control the child node of the NodeContainer.
* 
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @since 11
*/
export abstract class NodeController {
  /**
   * makeNode Method. Used to build a node tree and return the a BaseNode or null, and
   * attach the return result to the associated NodeContainer.
   * Executed when the associated NodeContainer is created or the rebuild function is called.
   * @param { UIContext } uiContext - uiContext used to makeNode
   * @returns { BaseNode | null } - Returns a BaseNode or null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  abstract makeNode(uiContext: UIContext): BaseNode | null;

  /**
   * aboutToResize Method. Executed when the associated NodeContainer performs the measure method.
   * @param { Size } size - size used to resize
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  aboutToResize?(size: Size): void;

  /**
   * aboutToAppear Method. Executed when the associated NodeContainer is aboutToAppear.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  aboutToAppear?(): void;

  /**
   * aboutToDisappear Method. Executed when the associated NodeContainer is aboutToDisappear.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  aboutToDisappear?(): void;

  /**
   * rebuild Method. Used to re invoke the makeNode method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  rebuild(): void;
}

/**
 * Defines BaseNode. Used as a base class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare class BaseNode {
  /**
  * constructor.
  *
  * @param { UIContext } uiContext - uiContext used to create the BaseNode
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  constructor(uiContext: UIContext);
}

/**
* Defines BuilderNode.
*
* @extends BaseNode
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @since 11
*/
export declare class BuilderNode<Args extends Object[]> extends BaseNode {
  /**
  * Build the BuilderNode with the builder.
  *
  * @param { WrappedBuilder<Args> } builder - Defined the builder will be called to build the node.
  * @param { Object } arg - Defined the args will be used in the builder.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
  build(builder: WrappedBuilder<Args>, arg?: Object): void;
}
