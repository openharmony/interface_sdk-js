'use static';
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
 * @file Defines toolbar attributes.
 * @kit ArkUI
 */

import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { Builder } from '@ohos.arkui.component';
/**
 * 定义工具栏项在标题栏对应分栏的放置位置选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ToolBarItemPlacement {
  /**
   * 表示将工具栏项放置在对应顶部栏的开头位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP_BAR_LEADING = 0,
  /**
   * 表示将工具栏项放置在对应顶部栏的末尾位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP_BAR_TRAILING = 1
}
/**
 * 用于配置ToolBarItem的可选参数，主要通过placement设置工具栏项在标题栏的放置位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ToolBarItemOptions {
  /**
   * 设置工具栏项的放置位置。默认值: ToolBarItemPlacement.TOP_BAR_LEADING
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  placement?: ToolBarItemPlacement;
}

/**
 * 定义ToolBarItem组件的属性方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ToolBarItemAttribute {
  /**
   * 设置组件的源代码重定向信息。
   *
   * @param { string } sourceLine - 源代码行。
   * @param { string } [moduleName] - 组件所属的模块。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  debugLine(sourceLine: string, moduleName?: string): this;
  /**
   * 设置toolbar item选项。
   *
   * @param { ToolBarItemOptions } [options] - 列选项
   * @returns { this } ToolBarItemAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setToolBarItemOptions(options?: ToolBarItemOptions): this;
  /**
   * 通知ToolBarItem已完成属性设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  applyAttributesFinish(): void;
}

/**
 * 定义ToolBarItem组件。
 *
 * @param { ToolBarItemOptions } [options] - 分栏选项
 * @param { CustomBuilder } [content_] - 容器
 * @returns { ToolBarItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function ToolBarItem(
    options?: ToolBarItemOptions,
    content_?: CustomBuilder,
): ToolBarItemAttribute;

/**
 * 定义ToolBarItem组件。需要在组件属性设置开始时调用setToolBarItemOptions，
 * 并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<ToolBarItemAttribute> } style - 用于设置toolbaritem属性的回调。
 * @param { CustomBuilder } [content_] - 容器。
 * @returns { ToolBarItemAttribute } ToolBarItem的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function ToolBarItem(
    style: CustomBuilderT<ToolBarItemAttribute>,
    content_?: CustomBuilder,
): ToolBarItemAttribute;