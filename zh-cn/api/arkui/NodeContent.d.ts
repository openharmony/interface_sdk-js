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
 * @kit ArkUI
 */

import { Content } from './Content';
import { FrameNode } from './FrameNode';

/**
 * NodeContent是ArkUI提供的[ContentSlot]{@link ../@internal/component/ets/content_slot}的管理器，用于管理挂载到ContentSlot上的FrameNode节点内
 * 容，支持动态添加、删除FrameNode节点。适用于需要通过ContentSlot动态管理FrameNode节点内容的场景，例如根据用户交互动态新增或移除文本、图片等自定义FrameNode节点。
 * 
 * > **说明：**
 * >
 * > - NodeContent对象不支持使用JSON序列化。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class NodeContent extends Content {
  /**
   * 节点内容的实体封装。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * 将FrameNode添加到NodeContent中，添加后FrameNode将通过关联的ContentSlot渲染显示。适用于需要动态管理ContentSlot中显示内容节点的场景，例如根据用户交互动态新增文本、图片等自定义
   * FrameNode节点。
   *
   * @param { FrameNode } node - 需要添加的FrameNode，该节点需为可被添加的有效FrameNode。
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
   * 将FrameNode从NodeContent中删除，删除后FrameNode将不再通过ContentSlot显示。适用于需要动态移除已添加内容节点的场景，例如用户交互后移除指定的文本、图片等自定义FrameNode节点。
   *
   * @param { FrameNode } node - 需要删除的FrameNode，该节点需已添加到当前NodeContent中，若未添加则删除无效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeFrameNode(node: FrameNode): void;
}