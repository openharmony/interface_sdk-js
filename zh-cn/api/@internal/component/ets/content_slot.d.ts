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
 * 定义ComponentContent和NodeContent的基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Content = import('../api/@ohos.arkui.node').Content;

/**
 * 定义ContentSlot属性，以防止不当的递归使用ContentSlot。
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
 * 用于渲染Native侧使用C-API创建的组件，并通过Content管理器管理这些组件。
 *
 * 支持混合模式开发，当容器是ArkTS组件，子组件在Native侧创建时，推荐使用ContentSlot占位组件。
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
   * 创建ContentSlot占位组件，用于渲染Content管理器中Native侧创建的组件。
   *
   * @param { Content } content - Content作为ContentSlot的管理器，通过Native侧提供的接口，可以注册并触发ContentSlot的上下树（即组件节点加入或移出组件渲染树）事件回调以及管
   *     理ContentSlot的子组件。
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
 * 用于渲染Native侧使用C-API创建的组件，并通过Content管理器管理这些组件。
 *
 * 支持混合模式开发，当容器是ArkTS组件，子组件在Native侧创建时，推荐使用ContentSlot占位组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare const ContentSlot: ContentSlotInterface;