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
 * Utility class for time measurement and clock access.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Chrono {
    /**
     * The number of nanoseconds in one millisecond.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly NS_PER_MS: long = 1000000

    /**
     * Gets the current timestamp in nanoseconds.
     *
     * @returns { long } the number of nanoseconds elapsed since system start.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static nanoNow(): long;

    /**
     * Gets the current timestamp in milliseconds.
     *
     * @returns { double } the number of milliseconds elapsed since system start.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static milliNow(): double;

    /**
     * Gets the current process CPU time in nanoseconds.
     *
     * @returns { long } the CPU time in nanoseconds consumed by the current process.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static getCpuTime(): long;
}
