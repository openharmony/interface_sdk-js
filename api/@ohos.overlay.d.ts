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
 * @file
 * @kit ArkUI
 */

import { FrameNode } from './@ohos.arkui.node'

/**
 * @namespace overlay
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare namespace overlay {
  /**
   * Add the FrameNode to the Overlay.
   *
   * @param { FrameNode } node - The node will be added to the Overlay.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  function addFrameNode(node: FrameNode): void;

  /**
   * Delete the FrameNode from the Overlay.
   *
   * @param { FrameNode } node - The node will be deleted from the Overlay.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  function deleteFrameNode(node: FrameNode): void;

  /**
   * Show the FrameNode.
   *
   * @param { FrameNode } node - The node will be shown.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  function showNode(node: FrameNode): void;

  /**
   * Hide the FrameNode.
   *
   * @param { FrameNode } node - The node will be hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  function hideNode(node: FrameNode): void;

  /**
   * Show all FrameNodes on the Overlay.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  function show(): void;

  /**
   * Hide all FrameNodes on the Overlay.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  function hide(): void;
}

export default overlay;
