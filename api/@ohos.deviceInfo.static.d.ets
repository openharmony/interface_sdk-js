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
 * The **deviceInfo** module provides terminal device information query, which cannot be configured by developers.
 * 
 * > **NOTE**
 * >
 * > Some parameters whose return value is the default value are not yet available.
 * > > The APIs of this module return information about device getants. You are not expected to call these APIs 
 * > frequently.
 *
 * @syscap SystemCapability.Startup.SystemInfo
 * @stagemodelonly
 * @since 24 static
 */
declare namespace deviceInfo {
    
    /**
     * Enumerates device types, which can be used to verify the return value of **deviceType**.
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    enum DeviceTypes {
        /**
         * Default device
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_DEFAULT = 'default',

        /**
         * Smartphone
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_PHONE = 'phone',

        /**
         * Tablet
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_TABLET = 'tablet',

        /**
         * PC/2-in-1 device
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_2IN1 = '2in1',

        /**
         * Smart TV
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_TV = 'tv',

        /**
         * Wearable
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_WEARABLE = 'wearable',

        /**
         * Head unit
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_CAR = 'car'
    }

    /**
     * Device type. For details, see [deviceTypes tag](docroot://quick-start/module-configuration-file.md#devicetypes).
     * 
     * Example: <!--RP1-->wearable<!--RP1End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get deviceType(): string;
    
    /**
     * Device manufacturer.
     * 
     * Example: HUAWEI
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get manufacture(): string;
    
    /**
     * Device brand.
     * 
     * Example: HUAWEI
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */  
    get brand(): string;

    /**
     * Device brand.
     * 
     * Example: HUAWEI
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get marketName(): string;
    
    /**
     * Product series.
     * 
     * Example: <!--RP3-->TAS<!--RP3End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get productSeries(): string;
    
    
    /**
     * Product model.
     * 
     * Example: <!--RP4-->TAS-AL00<!--RP4End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get productModel(): string;

    /**
     * Product model alias.
     * 
     * Example: TAS-AL00
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get productModelAlias(): string;
    
    /**
     * Software model.
     * 
     * Example: <!--RP5-->TAS-AL00<!--RP5End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get softwareModel(): string;
    
    /**
     * Hardware model.
     * 
     * Example: <!--RP6-->TASA00CVN1<!--RP6End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get hardwareModel(): string;

    /**
     * Hardware model.
     * 
     * Example: <!--RP6-->TASA00CVN1<!--RP6End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get hardwareProfile(): string;

    /**
     * Device serial number (SN).
     * 
     * **NOTE**
     * 
     * The device SN can be used as the unique identifier of a device.
     * 
     * **Required permission**: ohos.permission.sec.ACCESS_UDID (for system applications and enterprise applications 
     * only)
     * 
     * Example: The SN varies with the device.
     *
     * @permission ohos.permission.sec.ACCESS_UDID
     * @returns { string }
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get serial(): string;
    
    /**
     * Bootloader version.
     * 
     * Example: bootloader
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get bootloaderVersion(): string;
    
    /**
     * Application binary interface (Abi) list.
     * 
     * Example: arm64-v8a
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get abiList(): string;
    
    /**
     * Security patch tag.
     * 
     * Example: <!--RP7-->2021/01/01<!--RP7End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get securityPatchTag(): string;
    
    /**
     * Product version.
     * 
     * Example: <!--RP8-->XXX X.X.X.X<!--RP8End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get displayVersion(): string;
    
    /**
     * Incremental version.
     * 
     * Example: default
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get incrementalVersion(): string;
    
    /**
     * OS release type. The options are as follows:
     * 
     * - **Canary**: Preliminary release open only to specific developers. This release does not promise API stability 
     * and may require tolerance of instability.
     * - **Beta**: Release open to all developers. This release does not promise API stability and may require
     * tolerance of instability.
     * - **Release**: Official release open to all developers. This release promises that all APIs are stable.
     * 
     * Example: <!--RP9-->Canary/Beta/Release<!--RP9End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get osReleaseType(): string;
    
    
    /**
     * System version. The version number is in the format of **OpenHarmony-x.x.x.x**, where **x** is a digit.
     * 
     * Example: <!--RP10-->Openharmony-5.0.0.1<!--RP10End-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get osFullName(): string;
    
    /**
     * Major version number, which increments with the main version. The value is the first digit in **osFullName**.
     * You are advised to use **deviceInfo.majorVersion** instead of parsing **osFullName** to obtain the value, 
     * facilitating efficiency improvement.
     * 
     * Example: 5
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get majorVersion(): int;
    
    /**
     * Senior version number, which increments with architecture and feature updates. The value is the second digit in 
     * **osFullName**. You are advised to use **deviceInfo.seniorVersion** instead of parsing **osFullName** to obtain 
     * the value, facilitating efficiency improvement.
     * 
     * Example: 0
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get seniorVersion(): int;
    
    /**
     * Feature version number. The value is the third digit in **osFullName**. You are advised to use 
     * **deviceInfo.featureVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency 
     * improvement.
     * 
     * Example: 0
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get featureVersion(): int;
    
    /**
     * Build version number. The value is the fourth digit in **osFullName**. You are advised to use 
     * **deviceInfo.buildVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency 
     * improvement.
     * 
     * Example: 1
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildVersion(): int;
    
    
    /**
     * SDK API version.
     * 
     * Example: 12
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get sdkApiVersion(): int;
    
    /**
     * First API version.
     * 
     * Example: 3
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get firstApiVersion(): int;
    
    /**
     * Version ID. It consists of the following fields: **deviceType**, **manufacture**, **brand**, **productSeries**,
     * **osFullName**, **productModel**, **softwareModel**, **sdkApiVersion**, **incrementalVersion**, and 
     * **buildType**.
     * 
     * Example: wearable/HUAWEI/HUAWEI/TAS/OpenHarmony-5.0.0.1/TAS-AL00/TAS-AL00/12/default/release:nolog
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get versionId(): string;
    
    /**
     * Build type.
     * 
     * Example: default
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildType(): string;
    
    /**
     * Build user.
     * 
     * Example: default
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildUser(): string;
    
    /**
     * Build host.
     * 
     * Example: default
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildHost(): string;
    
    /**
     * Build time.
     * 
     * Example: default
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildTime(): string;
    
    /**
     * Build root hash.
     * 
     * Example: default
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildRootHash(): string;

    /**
     * Device UDID.
     * 
     * **NOTE**
     * 
     * The data length is 65 bytes. The UDID can be used as the unique identifier of a device.
     * 
     * **Required permission**: ohos.permission.sec.ACCESS_UDID (for system applications and enterprise applications 
     * only)
     * 
     * Example: 9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412
     *
     * @permission ohos.permission.sec.ACCESS_UDID
     * @returns { string }
     * @throws { BusinessError } 201 - Permission denied
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get udid(): string;

    /**
     * Distribution OS name.<!--Del--> It is defined by the issuer.<!--DelEnd-->
     * 
     * Example: OpenHarmony
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSName(): string;

    /**
     * Distribution OS version.<!--Del--> It is defined by the issuer.<!--DelEnd--><!--RP11--><!--RP11End-->
     * 
     * Example: 5.0.0
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSVersion(): string;

    /**
     * Distribution OS API version.<!--Del--> It is defined by the issuer.<!--DelEnd-->
     * 
     * Example: 50001
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSApiVersion(): int;

    /**
     * Distribution OS API name.<!--Del--> It is defined by the issuer.<!--DelEnd-->
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSApiName(): string;

    /**
     * Distribution OS release type.<!--Del--> It is defined by the issuer.<!--DelEnd-->
     * 
     * Example: Release
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSReleaseType(): string;

    /**
     * Open device identifier.
     * 
     * An ODID will be regenerated in the following scenarios:
     * 
     * Restore a phone to its factory settings.
     * 
     * Uninstall and reinstall all applications with the same **developerId** on one device.
     * 
     * An ODID is generated based on the following rules:
     * 
     * The value is generated based on the **groupId** parsed from the **developerId** in the signature information. As
     * **groupId.developerId** is the rule, if no **groupId** exists, the **developerId** is used as the **groupId**.
     * 
     * Applications with the same **developerId** use the same ODID on one device.
     * 
     * Applications with different **developerId**s use different ODIDs on one device.
     * 
     * Applications with the same **developerId** use different ODIDs on different devices.
     * 
     * Applications with different **developerId**s use different ODIDs on different devices.
     * 
     * **NOTE**
     * 
     * The data length is 37 bytes.
     * 
     * Example: 1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get ODID(): string;
    
    /**
     * Disk SN.
     * 
     * **NOTE**
     * 
     * This field can be queried only on the 2-in-1 device. For other devices, the query result is empty.
     * 
     * ohos.permission.ACCESS_DISK_PHY_INFO
     * 
     * Example: 2502EM400567
     *
     * @permission ohos.permission.ACCESS_DISK_PHY_INFO
     * @returns { string }
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get diskSN(): string;

    /**
     * Enumerates the device capability levels.
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    enum PerformanceClassLevel {
        /**
         * High
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        CLASS_LEVEL_HIGH,
        /**
         * Medium
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        CLASS_LEVEL_MEDIUM,
        /**
         * Low
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        CLASS_LEVEL_LOW
    }

    /**
     * Device capability level.
     *
     * @returns { PerformanceClassLevel }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get performanceClass(): PerformanceClassLevel;

    /**
     * Obtaining the hard drive chip type.
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get chipType(): string;

    /**
     * Obtaining the drive boot count.
     * if get failed, it will be -1
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get bootCount(): int;

    /**
     * Obtain the device color represented by a string. If it cannot be obtained, return an empty string
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 26.0.0 static
     */
    get deviceColor(): string;
}
export default deviceInfo;