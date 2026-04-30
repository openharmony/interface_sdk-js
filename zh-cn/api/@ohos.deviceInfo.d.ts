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
 * @file
 * @kit BasicServicesKit
 */

/**
 * 本模块提供终端设备信息查询，开发者不可配置。
 * 
 * > **说明：**
 * >
 * > 部分参数返回值为default的，会在正式发布的版本中配置。
 * > > 本模块接口返回设备常量信息，建议应用只调用一次，不需要频繁调用。
 *
 * @syscap SystemCapability.Startup.SystemInfo
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
declare namespace deviceInfo {
  /**
   * 设备类型枚举值，可用于校验deviceType的返回值。
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enum DeviceTypes {
    /**
     * 默认设备。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_DEFAULT = 'default',

    /**
     * 手机。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_PHONE = 'phone',

    /**
     * 平板。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_TABLET = 'tablet',

    /**
     * PC/2in1。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_2IN1 = '2in1',

    /**
     * 智慧屏。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_TV = 'tv',

    /**
     * 智能手表。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_WEARABLE = 'wearable',

    /**
     * 车机。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    TYPE_CAR = 'car'
  }
  /**
   * 设备类型。详细请参考[deviceTypes标签](docroot://quick-start/module-configuration-file.md#devicetypes标签)。
   * 
   * 示例：<!--RP1-->wearable<!--RP1End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  const deviceType: string;

  /**
   * 设备厂家名称。
   * 
   * 示例：HUAWEI
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const manufacture: string;

  /**
   * 设备品牌名称。
   * 
   * 示例：HUAWEI
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */  
  const brand: string;

  /**
   * 外部产品系列。
   * 
   * 示例：<!--RP2-->Mate XX<!--RP2End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const marketName: string;

  /**
   * 产品系列。
   * 
   * 示例：<!--RP3-->TAS<!--RP3End-->
   *
   * @constant [since 6 - 9]
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const productSeries: string;

  /**
   * 认证型号。
   * 
   * 示例：<!--RP4-->TAS-AL00<!--RP4End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  const productModel: string;

  /**
   * 认证型号别名。
   * 
   * 示例：TAS-AL00
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  const productModelAlias: string;

  /**
   * 内部软件子型号。
   * 
   * 示例：<!--RP5-->TAS-AL00<!--RP5End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const softwareModel: string;

  /**
   * 硬件版本号。
   * 
   * 示例：<!--RP6-->TASA00CVN1<!--RP6End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const hardwareModel: string;

  /**
   * 硬件Profile。
   * 
   * **说明**：
   * 
   * 从API version 6 开始支持，从API version 9 开始废弃，建议使用[系统能力SystemCapability](docroot://reference/syscap.md)替代。
   * 
   * 示例：default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 6 dynamic
   * @deprecated since 9
   */
  const hardwareProfile: string;

  /**
   * 设备序列号SN(Serial Number)。
   * 
   * **说明**：可作为设备唯一识别码。
   * 
   * ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业定制应用申请) 
   * 
   * 示例：序列号随设备差异
   *
   * @permission ohos.permission.sec.ACCESS_UDID
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 6 dynamic
   */
  const serial: string;

  /**
   * Bootloader版本号。
   * 
   * 示例：bootloader
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const bootloaderVersion: string;

  /**
   * 应用二进制接口（Abi）。
   * 
   * 示例：arm64-v8a
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const abiList: string;

  /**
   * 安全补丁级别。
   * 
   * 示例：<!--RP7-->2021/01/01<!--RP7End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const securityPatchTag: string;

  /**
   * 产品版本。
   * 
   * 示例：<!--RP8-->XXX X.X.X.X<!--RP8End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const displayVersion: string;

  /**
   * 差异版本号。
   * 
   * 示例：default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const incrementalVersion: string;

  /**
   * 系统的发布类型，取值为：
   * 
   * - Canary：面向特定开发者发布的早期预览版本，不承诺API稳定性。
   * 
   * - Beta：面向开发者公开发布的Beta版本，不承诺API稳定性。
   * 
   * - Release：面向开发者公开发布的正式版本，承诺API稳定性。
   * 
   * 示例：<!--RP9-->Canary/Beta/Release<!--RP9End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const osReleaseType: string;

  /**
   * 系统版本，版本格式<!--RP12-->OpenHarmony-x.x.x.x,x为数值。<!--RP12End-->
   * 
   * 示例：<!--RP10-->Openharmony-5.0.0.1<!--RP10End-->
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  const osFullName: string;

  /**
   * Major版本号，随主版本更新增加，值为osFullName中的第一位数值，建议直接使用deviceInfo.majorVersion获取，可提升效率，不建议开发者解析osFullName获取。
   * 
   * 示例：5
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const majorVersion: number;

  /**
   * Senior版本号，随局部架构、重大特性增加，值为osFullName中的第二位数值，建议直接使用deviceInfo.seniorVersion获取，可提升效率，不建议开发者自主解析osFullName获取。
   * 
   * 示例：0
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const seniorVersion: number;

  /**
   * Feature版本号，标识规划的新特性版本，值为osFullName中的第三位数值，建议直接使用deviceInfo.featureVersion获取，可提升效率，不建议开发者自主解析osFullName获取。
   * 
   * 示例：0
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const featureVersion: number;

  /**
   * Build版本号，标识编译构建的版本号，值为osFullName中的第四位数值，建议直接使用deviceInfo.buildVersion获取，可提升效率，不建议开发者自主解析osFullName获取。
   * 
   * 示例：1
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildVersion: number;

  /**
   * 系统软件API版本。
   * 
   * 示例：12
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @atomicservice [since 14]
   * @since 6 dynamic
   */
  const sdkApiVersion: number;

  /**
   * 系统软件Minor API版本。**从** API 26 版本开始，系统API版本格式：sdkApiVersion.sdkMinorApiVersion.sdkPatchApiVersion。
   * 
   * 26.0.0
   * 
   * 示例：0
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  const sdkMinorApiVersion: number;

  /**
   * 系统软件Patch API版本。**从** API 26 版本开始，系统API版本格式：sdkApiVersion.sdkMinorApiVersion.sdkPatchApiVersion。
   * 
   * 26.0.0
   * 
   * 示例：0
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  const sdkPatchApiVersion: number;

  /**
   * 首个版本系统软件API版本。
   * 
   * 示例：3
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const firstApiVersion: number;

  /**
   * 版本ID。由deviceType、manufacture、brand、productSeries、osFullName、productModel、softwareModel、sdkApiVersion、
   * incrementalVersion、buildType拼接组成。
   * 
   * 示例：wearable/HUAWEI/HUAWEI/TAS/OpenHarmony-5.0.0.1/TAS-AL00/TAS-AL00/12/default/release:nolog
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const versionId: string;

  /**
   * 构建类型。
   * 
   * 示例：default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildType: string;

  /**
   * 构建用户。
   * 
   * 示例：default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildUser: string;

  /**
   * 构建主机。
   * 
   * 示例：default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildHost: string;

  /**
   * 构建时间。
   * 
   * 示例：default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildTime: string;

  /**
   * 构建版本Hash。
   * 
   * 示例：default
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform [since 10]
   * @since 6 dynamic
   */
  const buildRootHash: string;

  /**
   * 设备Udid。
   * 
   * **说明**：数据长度为65字节。可作为设备唯一识别码。
   * 
   * ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业类应用申请)
   * 
   * 示例：9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412
   *
   * @permission ohos.permission.sec.ACCESS_UDID
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 7 dynamic
   */
  const udid: string;

  /**
   * 发行版系统名称<!--Del-->，由发行方定义<!--DelEnd-->。
   * 
   * 示例：OpenHarmony
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 10 dynamic
   */
  const distributionOSName: string;

  /**
   * 发行版系统版本号<!--Del-->，由发行方定义<!--DelEnd-->。<!--RP11--><!--RP11End-->
   * 
   * 示例：5.0.0
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 10 dynamic
   */
  const distributionOSVersion: string;

  /**
   * 发行版系统api版本<!--Del-->，由发行方定义<!--DelEnd-->。
   * 
   * 示例：50001
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 10 dynamic
   */
  const distributionOSApiVersion: number;

  /**
   * 发行版系统api版本名称<!--Del-->，由发行方定义<!--DelEnd-->。
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 13 dynamic
   */
  const distributionOSApiName: string;

  /**
   * 发行版系统类型<!--Del-->，由发行方定义<!--DelEnd-->。
   * 
   * 示例：Release
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 10 dynamic
   */
  const distributionOSReleaseType: string;

  /**
   * 开发者匿名设备标识符。
   * 
   * **ODID值会在以下场景重新生成**：
   * 
   * 手机恢复出厂设置。
   * 
   * 同一设备上同一个开发者(developerId相同)的应用全部卸载后重新安装时。
   * 
   * **ODID生成规则**：
   * 
   * 根据签名信息里developerId解析出的groupId生成，developerId规则为groupId.developerId，若无groupId则取整个developerId作为groupId。
   * 
   * 同一设备上运行的同一个开发者(developerId相同)的应用，ODID相同。
   * 
   * 同一个设备上不同开发者(developerId不同)的应用，ODID不同。
   * 
   * 不同设备上同一个开发者(developerId相同)的应用，ODID不同。
   * 
   * 不同设备上不同开发者(developerId不同)的应用，ODID不同。
   * 
   * **说明**：数据长度为37字节(包含结束符)。
   * 
   * 示例：1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 12 dynamic
   */
  const ODID: string;

  /**
   * 硬盘序列号。
   * 
   * **说明** ：该字段只能在2in1设备进行查询，其他设备查询结果为空。
   * 
   * ohos.permission.ACCESS_DISK_PHY_INFO 
   * 
   * 示例：2502EM400567
   *
   * @permission ohos.permission.ACCESS_DISK_PHY_INFO
   * @syscap SystemCapability.Startup.SystemInfo
   * @since 15 dynamic
   */
  const diskSN: string;

/**
   * 表示设备能力定级的枚举。
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform
   * @since 19 dynamic
   */
  export enum PerformanceClassLevel {
    /**
     * 表示设备能力定级为高。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 19 dynamic
     */
    CLASS_LEVEL_HIGH,
    /**
     * 表示设备能力定级为中。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 19 dynamic
     */
    CLASS_LEVEL_MEDIUM,
    /**
     * 表示设备能力定级为低。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @crossplatform
     * @since 19 dynamic
     */
    CLASS_LEVEL_LOW
  }

  /**
   * 描述设备能力等级，基于CPU、内存、存储读写性能和屏幕分辨率等因素综合评估。
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @crossplatform
   * @since 19 dynamic
   */
  const performanceClass: PerformanceClassLevel;

    /**
     * 当前设备CPU芯片型号
     * 
     * 示例：xxxxx
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 21 dynamic
     */
    const chipType: string;

    /**
     * 当前设备重启次数，获取失败时返回-1
     * 
     * 示例：100
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 21 dynamic
     */
    const bootCount: number;

  /**
   * <!--RP13-->
   * 
   * 检查指定的API版本在当前设备上是否可用。
   * 
   * 此方法提供跨不同OpenHarmony/分布式操作系统版本的兼容性检查。它会根据输入格式和API版本范围自动选择合适的版本检查方法。
   *
   * @param { string | number } version - 需要校验的API版本号，支持整数版本号和点分版本号。
   * @returns { boolean } Returns `true` if the specified API version is available on the
   *     current device, `false` otherwise.
   * @syscap SystemCapability.Startup.SystemInfo
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @example
   *     ```typescript
   *     // Check API 26.0.0 (String format for API 26+ represents both OpenHarmony and Distribution OS)
   *     if (apiAvailable("26.0.0"))
   *     // Check API 5.0.1 (Distribution OS version, API 26-)
   *     if (apiAvailable("5.0.1"))
   *     // Check API 13 (OpenHarmony SDK version, API 26-)
   *     if (apiAvailable(13))
   *     ```
   */
  function apiAvailable(version: string | number): boolean;

  /**
   * 当前设备颜色
   * 
   * 示例：gold
   *
   * @syscap SystemCapability.Startup.SystemInfo
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  const deviceColor: string;
}

export default deviceInfo;