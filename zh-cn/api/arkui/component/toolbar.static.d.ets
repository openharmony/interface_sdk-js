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
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { Builder } from '@ohos.arkui.component';
/**
 * 声明toolbar item的放置位置。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ToolBarItemPlacement {
    /**
     * 将toolbar item放置在顶部栏的起始位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP_BAR_LEADING = 0,
    /**
     * 将toolbar item放置在顶部栏的结束位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    TOP_BAR_TRAILING = 1
}
/**
 * ToolBarItem构造选项。
 *
 * @interface ToolBarItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ToolBarItemOptions {
    /**
     * 垂直布局元素的间距。
     *
     * @type { ?ToolBarItemPlacement }
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
 * @param { ToolBarItemOptions } options - 列选项
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
): ToolBarItemAttribute

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
): ToolBarItemAttribute
