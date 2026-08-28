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
 * boardInfo模块提供板级硬件信息查询，包括CPU、主板、BIOS等信息，开发者不可配置。
 *
 * > **说明：**
 * >
 * > 本模块首批接口从API version 26开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > 本模块接口返回设备常量信息，建议应用只调用一次，不需要频繁调用。
 *
 * @syscap SystemCapability.Startup.BoardInfo
 * @stagemodelonly
 * @since 26.0.1 static
 */
declare namespace boardInfo {

    /**
     * CPU ID。
     *
     * 示例：48FD0010（十六进制字符串）
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get cpuId(): string;

    /**
     * CPU架构。
     *
     * 示例：arm64-v8a
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get cpuArch(): string;

    /**
     * CPU厂商信息。
     *
     * 示例：ARM
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get cpuVendor(): string;

    /**
     * 主板序列号。
     *
     * **说明：**
     *
     * 主板序列号可作为设备唯一识别码。
     *
     * **需要权限**：ohos.permission.sec.ACCESS_UDID（仅系统应用和企业应用可获取）
     *
     * 示例：0123456789ABCDEF
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
     * 主板厂商。
     *
     * 示例：HUAWEI
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get boardVendor(): string;

    /**
     * 主板产品名称。
     *
     * 示例：MAINBOARD-A1
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get boardName(): string;

    /**
     * BIOS厂商。
     *
     * 示例：AMI
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get biosVendor(): string;

    /**
     * BIOS版本。
     *
     * 示例：1.0.0
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get biosVersion(): string;

    /**
     * BIOS发布日期。
     *
     * 示例：2026/01/01 08:00:00
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.BoardInfo
     * @stagemodelonly
     * @since 26.0.1 static
     */
    get biosDate(): string;
}
export default boardInfo;
