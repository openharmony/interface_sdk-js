"use static"
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
 * @kit BasicServicesKit
 */

/**
 * The **boardInfo** module provides query of board-level hardware information, including CPU, board, and BIOS information.
 *
 * > **NOTE**
 * >
 * > The initial APIs of this module are supported since API version 26. Newly added APIs
 * > will be marked with a superscript to indicate their earliest API version.
 * > The APIs of this module return information about device constants. You are not expected to call these APIs
 * > frequently.
 *
 * @syscap SystemCapability.Startup.BoardInfo
 * @stagemodelonly
 * @since 26.0.1 static
 */
declare namespace boardInfo {

    /**
     * CPU ID.
     *
     * Example: 48FD0010 (hexadecimal string)
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get cpuId(): string;

    /**
     * CPU architecture.
     *
     * Example: arm64-v8a
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get cpuArch(): string;

    /**
     * CPU vendor information.
     *
     * Example: ARM
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get cpuVendor(): string;

    /**
     * Board serial number.
     *
     * **NOTE**
     *
     * The board serial number can be used as the unique identifier of a device.
     *
     * **Required permission**: ohos.permission.sec.ACCESS_UDID (for system applications and enterprise applications
     * only)
     *
     * Example: 0123456789ABCDEF
     *
     * @permission ohos.permission.sec.ACCESS_UDID
     * @returns { string }
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get boardSn(): string;

    /**
     * Board vendor.
     *
     * Example: HUAWEI
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get boardVendor(): string;

    /**
     * Board product name.
     *
     * Example: MAINBOARD-A1
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get boardName(): string;

    /**
     * BIOS vendor.
     *
     * Example: AMI
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get biosVendor(): string;

    /**
     * BIOS version.
     *
     * Example: 1.0.0
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get biosVersion(): string;

    /**
     * BIOS release date.
     *
     * Example: 2026/01/01 08:00:00
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get biosDate(): string;
}
export default boardInfo;
