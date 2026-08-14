'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit ArkTS
 */

/**
 * 用于时间测量和时钟访问的工具类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Chrono {
    /**
     * 一毫秒所包含的纳秒数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly NS_PER_MS: long = 1000000

    /**
     * 获取当前时间戳，单位为纳秒。
     *
     * @returns { long } 自系统启动以来经过的纳秒数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static nanoNow(): long;

    /**
     * 获取当前时间戳，单位为毫秒。
     *
     * @returns { double } 自系统启动以来经过的毫秒数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static milliNow(): double;

    /**
     * 获取当前进程的CPU时间，单位为纳秒。
     *
     * @returns { long } 当前进程消耗的CPU时间，单位为纳秒。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static getCpuTime(): long;
}
