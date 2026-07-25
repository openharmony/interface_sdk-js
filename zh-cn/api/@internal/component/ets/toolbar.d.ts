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
 * @file 定义toolbar属性。
 * @kit ArkUI
 */

/**
 * 定义工具栏项在标题栏对应分栏的放置位置选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare enum ToolBarItemPlacement {
  /**
   * 将工具栏项放置在对应顶部栏的开头位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  TOP_BAR_LEADING = 0,

  /**
   * 将工具栏项放置在对应顶部栏的末尾位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  TOP_BAR_TRAILING = 1
}

/**
 * 用于配置ToolBarItem的可选参数，主要通过placement设置工具栏项在标题栏的放置位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
interface ToolBarItemOptions {
  /**
   * 设置工具栏项的放置位置。
   *
   * 默认值：**ToolBarItemPlacement.TOP_BAR_LEADING**。
   *
   * **ToolBarItemPlacement.TOP_BAR_LEADING**：将工具栏项放置在对应顶部栏的开头位置。
   *
   * **ToolBarItemPlacement.TOP_BAR_TRAILING**：将工具栏项放置在对应顶部栏的末尾位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  placement?: ToolBarItemPlacement;
}

/**
 * 可以使用**ToolBarItem**组件，通过[toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar)通用属性向标题栏中添加toolbar item。
 *
 * > **说明**
 * >
 * > 该组件通常与[toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar)通用属性一起使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
interface ToolBarItemInterface {
  /**
   * 默认在标题栏对应分栏开头位置创建工具栏项，分栏位置由绑定该[toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar)属性的组件所在分栏位置而定。
   *
   * @param { ToolBarItemOptions } [options] - **ToolBarItem**的可选参数，包括[ToolBarItemPlacement]{@link ToolBarItemPlacement}类型的**placement**参数。<br>默认值：**placement: ToolBarItemPlacement.TOP_BAR_LEADING**
   * @returns { ToolBarItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  (options?: ToolBarItemOptions): ToolBarItemAttribute;
}

/**
 * 不支持[通用属性]{@link ./common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare class ToolBarItemAttribute {}

/**
 * 可以使用**ToolBarItem**组件，通过[toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar)通用属性向标题栏中添加toolbar item。
 *
 * > **说明**
 * >
 * > 该组件通常与[toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar)通用属性一起使用。
 *
 * ###### 子组件
 *
 * 该组件可以包含单个子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare const ToolBarItem: ToolBarItemInterface;

/**
 * 定义ToolBarItem组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare const ToolBarItemInstance: ToolBarItemAttribute;