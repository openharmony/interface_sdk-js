/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * **NodeContent** is the ArkUI-provided manager for [ContentSlot]{@link content_slot}.
 *
 * > **NOTE**
 * >
 * > - **NodeContent** objects do not support JSON serialization.
 *
 * @file
 * @kit ArkUI
 */

import { Content } from './Content';

import { FrameNode } from './FrameNode';

/**
 * NodeContent is the entity encapsulation of the node content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class NodeContent extends Content {

  /**
   * A constructor used to create a **NodeContent** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Adds a FrameNode to this **NodeContent** object.
   *
   * @param { FrameNode } node - FrameNode to add.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message.
   *     For example: "The parameter 'node' is invalid: it cannot be adopted." [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addFrameNode(node: FrameNode): void;

  /**
   * Removes a FrameNode from this **NodeContent** object.
   *
   * @param { FrameNode } node - FrameNode to remove.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeFrameNode(node: FrameNode): void;
}