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
 * 该模块管理输入法扩展信息。使ArkUI编辑器能够在输入法启动时将此类信息传递给输入法应用。
 * 输入法应用处理扩展信息后，可获取宿主应用添加的详情。这些信息的总长度不能超过32KB。
 *
 * @file 编辑框的额外配置
 * @kit IMEKit
 */

/**
 * 表示扩展信息类型。参数的具体类型取决于其功能。
 *
 * @unionmember { int } Number.
 * @unionmember { string } String.
 * @unionmember { boolean } Boolean.
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 22 dynamic
 * @since 23 static
 */
export type CustomValueType = int | string | boolean;

/**
 * 表示输入法的扩展信息。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 22 dynamic
 * @since 23 static
 */
export interface InputMethodExtraConfig {
    /**
     * 输入法扩展信息，用于存储自定义键值对。这些键值对可以是与输入法相关的任何配置信息，
     * 如用户输入习惯、快捷键设置、主题颜色等。这些设置在输入法应用绑定到系统时加载，
     * 从而提供个性化的用户体验。信息的总长度不能超过32KB。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    customSettings: Record<string, CustomValueType>;
}