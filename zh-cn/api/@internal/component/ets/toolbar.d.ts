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
 * 声明toolbar item的放置位置。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare enum ToolBarItemPlacement {
  /**
   * 将toolbar item放置在顶部栏的起始位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  TOP_BAR_LEADING = 0,

  /**
   * 将toolbar item放置在顶部栏的结束位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  TOP_BAR_TRAILING = 1,
}

/**
 * ToolBarItem构造选项。
 *
 * @interface ToolBarItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
interface ToolBarItemOptions {
  /**
   * 垂直布局元素的间距。
   *
   * @type { ?ToolBarItemPlacement }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  placement?: ToolBarItemPlacement;
}

/**
 * 定义ToolBarItem组件。
 *
 * @interface ToolBarItemInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
interface ToolBarItemInterface {
  /**
   * 设置选项。
   *
   * @param { ToolBarItemOptions } [options] - 列选项
   * @returns { ToolBarItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  (options?: ToolBarItemOptions): ToolBarItemAttribute;
}

/**
 * 定义ToolBarItem组件的属性方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare class ToolBarItemAttribute { }

/**
 * 定义ToolBarItem组件。
 *
 * @type { ToolBarItemInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare const ToolBarItem: ToolBarItemInterface;

/**
 * 定义ToolBarItem组件实例。
 *
 * @type { ToolBarItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare const ToolBarItemInstance: ToolBarItemAttribute;
