'use static';
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

import { AttributeModifier, CommonMethod } from './common';
import { Callback } from '../../@ohos.base';

/**
 * inspector的性能分析（Profiler）工具。
 *
 * @namespace Profiler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @test
 */
export declare namespace Profiler {
    /**
     * 为profiler注册vsync回调。
     * AnonyMous Object Rectification.
     * @param { Callback<string> } callback - 回调信息为带有ui更新信息的json字符串。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     * @test
     */
    function registerVsyncCallback(callback: Callback<string>): void;
    /**
     * 注销vsync回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     * @test
     */
    function unregisterVsyncCallback(): void;
}
/**
 * 设置应用背景颜色。
 *
 * @param { string } value
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @test
 */
export declare function setAppBgColor(value: string): void;
