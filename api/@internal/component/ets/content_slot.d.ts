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

/**
 * Defines a base class for **ComponentContent** and **NodeContent**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Content = import('../api/@ohos.arkui.node').Content;

/**
 * Define ContentSlot attribute, to prevent improper recursive usage of ContentSlot.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare class ContentSlotAttribute {
}

/**
 * Renders components created using C-API on the native side and manages these components through the Content manager.
 *
 * With support for hybrid development, the **ContentSlot** component is recommended when the container is an ArkTS
 * component and the child component is created on the native side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
interface ContentSlotInterface {
  /**
   * Creates a **ContentSlot** placeholder component for rendering components created on the native side in the Content
   * manager.
   *
   * @param { Content } content - Manager of **ContentSlot**. Through the APIs provided by the native side, it can
   *     register and trigger the callback for **ContentSlot** attach/detach events (i.e., when a component node is
   *     added to or removed from the component rendering tree) and manage child components of **ContentSlot**.
   * @returns { ContentSlotAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  (content: Content): ContentSlotAttribute;
}

/**
 * Renders components created using C-API on the native side and manages these components through the Content manager.
 *
 * With support for hybrid development, the **ContentSlot** component is recommended when the container is an ArkTS
 * component and the child component is created on the native side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const ContentSlot: ContentSlotInterface;