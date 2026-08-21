/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

/**
 * This module provides APIs for querying terminal device information, including the device type, brand, model, system version, security patch tag, and unique device ID. It is applicable to scenarios such as device adaptation, version compatibility check, device identification, and statistical analysis, helping you quickly obtain device information for application adaptation and optimization. You cannot configure this information.
 * 
 * > **NOTE**
 * >
 * > The initial APIs of this module are supported since API version 6. New APIs added in later versions are marked with superscripts to indicate their initial version.
 * > The return values **hardwareProfile**, **incrementalVersion**, **buildType**, **buildUser**, **buildHost**, **buildTime**, and **buildRootHash** are **default**. These parameters will be configured in the official commercial version of the device.
 * > The APIs of this module return information about device constants. It is recommended that your app call the APIs only once.
 *
 * @syscap SystemCapability.Startup.SystemInfo
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
declare namespace deviceInfo {
  /**
   * Enumerates device types, which can be used to verify the return value of **deviceType**.
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enum DeviceTypes {
    /**
     * Default device
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_DEFAULT = 'default',

    /**
     * Smartphone
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_PHONE = 'phone',

    /**
     * Tablet
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_TABLET = 'tablet',

    /**
     * PC/2-in-1 device
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_2IN1 = '2in1',

    /**
     * Smart TV
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_TV = 'tv',

    /**
     * Wearable
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_WEARABLE = 'wearable',

    /**
     * Head unit
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_CAR = 'car'
  }
  /**
   * Device type. For details, see [deviceTypes tag](docroot://quick-start/module-configuration-file.md#devicetypes).
   * 
   * Example: <!--RP1-->wearable<!--RP1End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  const deviceType: string;

  /**
   * Device manufacturer.
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const manufacture: string;

  /**
   * Device brand.
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */  
  const brand: string;

  /**
   * Marketing name.
   * 
   * Example: <!--RP2-->Mate XX<!--RP2End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const marketName: string;

  /**
   * Product series.
   * 
   * Example: <!--RP3-->TAS<!--RP3End-->
   *
   * @constant [since 6 - 9]
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const productSeries: string;

  /**
   * Product model.
   * 
   * Example: <!--RP4-->TAS-AL00<!--RP4End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  const productModel: string;

  /**
   * Product model alias.
   * 
   * Example: TAS-AL00
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  const productModelAlias: string;

  /**
   * Software model.
   * 
   * Example: <!--RP5-->TAS-AL00<!--RP5End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const softwareModel: string;

  /**
   * Hardware model.
   * 
   * Example: <!--RP6-->TASA00CVN1<!--RP6End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const hardwareModel: string;

  /**
   * Hardware profile.
   * 
   * **NOTE**
   * 
   * This API is supported since API version 6 and deprecated since API version 9. You are advised to use [SystemCapability](docroot://reference/syscap.md) instead.
   * 
   * Example: default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 6 dynamic
   * @deprecated since 9
   */
  const hardwareProfile: string;

  /**
   * Serial number of the device. This API will start a temporary process during execution. When the system load is high, blocking may occur. To ensure the response of the main thread of your application, you are advised not to call this API in the main thread. This value varies depending on the device and is fixed. To improve performance, you can store this information on a local device after obtaining it for the first time..
   * 
   * **NOTE**
   * 
   * The device SN can be used as the unique identifier of a device.
   * 
   * **Required permission**: ohos.permission.sec.ACCESS_UDID (for system applications and enterprise applications only)
   * 
   * Example: The SN varies with the device.
   *
   * @permission ohos.permission.sec.ACCESS_UDID
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 6 dynamic
   */
  const serial: string;

  /**
   * Bootloader version, which identifies the version of the device bootloader.
   * 
   * Example: bootloader
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const bootloaderVersion: string;

  /**
   * Application binary interface (Abi) list.
   * 
   * Example: arm64-v8a
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const abiList: string;

  /**
   * Security patch tag.
   * 
   * Example: <!--RP7-->2021/01/01<!--RP7End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const securityPatchTag: string;

  /**
   * Product version.
   * 
   * Example: <!--RP8-->XXX X.X.X.X<!--RP8End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const displayVersion: string;

  /**
   * Incremental version, which is the Ohos version number generated during compilation.
   * 
   * Example: default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const incrementalVersion: string;

  /**
   * OS release type. The options are as follows:
   * 
   * - **Canary**: Preliminary release open only to specific developers. This release does not promise API stability
   * and may require tolerance of instability.
   * - **Beta**: Release open to all developers. This release does not promise API stability and may require tolerance 
   * of instability.
   * - **Release**: Official release open to all developers. This release promises that all APIs are stable.
   * 
   * Example: <!--RP9-->Canary/Beta/Release<!--RP9End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const osReleaseType: string;

  /**
   * System version. The version number is in the format of **<!--RP12-->OpenHarmony-x.x.x.x**, where **x** is a placeholder for digits. <!--RP12End-->To obtain the value of a segment in the version number, you are advised to use **majorVersion**, **seniorVersion**, **featureVersion**, or **buildVersion**, which can improve efficiency. Parsing **osFullName** is not recommended.
   * 
   * Example: <!--RP10-->Openharmony-5.0.0.1<!--RP10End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  const osFullName: string;

  /**
   * Major version number, which increments with the main version. The value is the first digit in **osFullName**. You
   * are advised to use **deviceInfo.majorVersion** instead of parsing **osFullName** to obtain the value, facilitating
   * efficiency improvement.
   * 
   * Example: 5
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const majorVersion: number;

  /**
   * Senior version number, which increments with architecture and feature updates. The value is the second digit in
   * **osFullName**. You are advised to use **deviceInfo.seniorVersion** instead of parsing **osFullName** to obtain
   * the value, facilitating efficiency improvement.
   * 
   * Example: 0
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const seniorVersion: number;

  /**
   * Feature version number. The value is the third digit in **osFullName**. You are advised to use 
   * **deviceInfo.featureVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency 
   * improvement.
   * 
   * Example: 0
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const featureVersion: number;

  /**
   * Build version number. The value is the fourth digit in **osFullName**. You are advised to use 
   * **deviceInfo.buildVersion** instead of parsing **osFullName** to obtain the value, facilitating efficiency 
   * improvement.
   * 
   * Example: 1
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildVersion: number;

  /**
   * SDK API version.
   * 
   * Example: 12
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 14]
   * @since 6 dynamic
   */
  const sdkApiVersion: number;

  /**
   * System version. The version number is in the format of **<!--RP12-->OpenHarmony-x.x.x.x**, where **x** is a placeholder for digits. <!--RP12End-->To obtain the value of a segment in the version number, you are advised to use **majorVersion**, **seniorVersion**, **featureVersion**, or **buildVersion**, which can improve efficiency. Parsing **osFullName** is not recommended.
   *
   * Example:
   * If the system API version is 26.0.2, sdkMinorApiVersion is 0.
   * If the system API version is 26.1.2, sdkMinorApiVersion is 1.
   * 
   * @syscap SystemCapability.Startup.SystemInfo
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  const sdkMinorApiVersion: number;

  /**
   * SDK patch API version. Starting from API version 26.0.0, the system API version is in the format of **sdkApiVersion.sdkMinorApiVersion.sdkPatchApiVersion**.
   *
   * Example:
   * If the system API version is 26.2.0, sdkPatchApiVersion is 0.
   * If the system API version is 26.2.1, sdkPatchApiVersion is 1.
   * 
   * @syscap SystemCapability.Startup.SystemInfo
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  const sdkPatchApiVersion: number;

  /**
   * First API version.
   * 
   * Example: 3
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const firstApiVersion: number;

  /**
   * Version ID, which is a concatenation of **deviceType**, **manufacture**, **brand**, **productSeries**, **osFullName**, **productModel**, **softwareModel**, **sdkApiVersion**, **incrementalVersion**, and **buildType**. To obtain a specific field value, you are advised to use the corresponding field directly (such as **deviceType** and **manufacture**) instead of parsing **versionId**, facilitating efficiency improvement.
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const versionId: string;

  /**
   * Build type.
   * 
   * Example: default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildType: string;

  /**
   * Build user.
   * 
   * Example: default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildUser: string;

  /**
   * Build host.
   * 
   * Example: default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildHost: string;

  /**
   * Build time.
   * 
   * Example: default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildTime: string;

  /**
   * Build root hash.
   * 
   * Example: default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildRootHash: string;

  /**
   * UDID of the device. This API will start a temporary process during execution. When the system load is high, blocking may occur. To ensure the response of the main thread of your application, you are advised not to call this API in the main thread. This value varies depending on the device and is fixed. To improve performance, you can store this information on a local device after obtaining it for the first time.
   * 
   * **NOTE**
   * 
   * The data length is 65 bytes. The UDID can be used as the unique identifier of a device.
   * 
   * **Required permission**: ohos.permission.sec.ACCESS_UDID (for system applications and enterprise applications only)
   * 
   * Example: 9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412
   *
   * @permission ohos.permission.sec.ACCESS_UDID
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 7 dynamic
   */
  const udid: string;

  /**
   * Distribution OS name.<!--Del--> It is defined by the issuer.<!--DelEnd-->
   * 
   * Example: OpenHarmony
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 10 dynamic
   */
  const distributionOSName: string;

  /**
   * Distribution OS version.<!--Del--> It is defined by the issuer.<!--DelEnd--><!--RP11--><!--RP11End-->
   * 
   * Example: 5.0.0
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 10 dynamic
   */
  const distributionOSVersion: string;

  /**
   * Distribution OS API version.<!--Del--> It is defined by the issuer.<!--DelEnd-->
   * 
   * Example: 50001
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 10 dynamic
   */
  const distributionOSApiVersion: number;

  /**
   * Distribution OS API name.<!--Del--> It is defined by the issuer.<!--DelEnd-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 13 dynamic
   */
  const distributionOSApiName: string;

  /**
   * Distribution OS release type.<!--Del--> It is defined by the issuer.<!--DelEnd-->
   * 
   * Example: Release
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 10 dynamic
   */
  const distributionOSReleaseType: string;

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
   * The data length is 37 bytes (including the terminator).
   * 
   * Example: 1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 12 dynamic
   */
  const ODID: string;

  /**
   * Serial number of the disk. This API will start a temporary process during execution. When the system load is high, blocking may occur. To ensure the response of the main thread of your application, you are advised not to call this API in the main thread. This value varies depending on the device and is fixed. To improve performance, you can store this information on a local device after obtaining it for the first time.
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
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 15 dynamic
   */
  const diskSN: string;

/**
   * Enumerates the device capability levels.
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform
   * @since 19 dynamic
   */
  export enum PerformanceClassLevel {
    /**
     * High
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 19 dynamic
     */
    CLASS_LEVEL_HIGH,
    /**
     * Medium
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 19 dynamic
     */
    CLASS_LEVEL_MEDIUM,
    /**
     * Low
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 19 dynamic
     */
    CLASS_LEVEL_LOW
  }

  /**
   * Device capability level, which is evaluated based on factors such as CPU, memory, storage read/write performance, and screen resolution.
   *
   * Example: 0
   * 
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform
   * @since 19 dynamic
   */
  const performanceClass: PerformanceClassLevel;

    /**
     * Obtains the device CPU chipType by a string.
     *
     * Example: xxxxx
     * 
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 21 dynamic
     */
    const chipType: string;

    /**
     * Number of device reboots. If the number cannot be obtained, **-1** is returned.
     *
     * Example: 100
     * 
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 21 dynamic
     */
    const bootCount: number;

   /**
 	  * Checks whether a specified API version is available on the current device.
 	  * This API provides compatibility check across different OpenHarmony/Distribution OS versions.
 	  * A suitable version check method is automatically selected based on the input format and supported API versions.
    *
    * @param { string | number } version - API version number to be verified. The value can be an integer or in the
    *     dotted format.
    *     - String format shall be in M.S.F. (e.g., "26.0.0", "5.0.1"):
    *     - For API 26.0.0 & 26.0.0+ (version >= 26.0.0): Represents both OpenHarmony and Distribution OS API versions
    *     - For API 26.0.0- (version < 26.0.0): Represents Distribution OS API version
    *     - Number format (e.g., 13): Represents OpenHarmony SDK API version (API 26- only)
    *     M>=26,0<=S<=99,0<=F<=99. A compilation error occurs when an invalid literal is input.
    * @returns { boolean } Boolean value. The value **true** indicates that the current version number is later than
    *     or equal to the input parameter version number; **false** indicates that the current device's API version
    *     is lower than the input version number, or the input version number is in an invalid format,
    *     or the specified version does not exist.
    * @syscap SystemCapability.Startup.SystemInfo
    * @FaAndStageModel
    * @crossplatform
    * @atomicservice
    * @since 26.0.0 dynamic
 	  */
 	  function apiAvailable(version: string | number): boolean;

  /**
   * Device color. If the value cannot be obtained, an empty string is returned.
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  const deviceColor: string;
}

export default deviceInfo;