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
 * 本模块提供终端设备信息查询，开发者不可配置。
 * 
 * > **说明：**
 * >
 * > 部分参数返回值为default的，会在正式发布的版本中配置。
 * > > 本模块接口返回设备常量信息，建议应用只调用一次，不需要频繁调用。
 *
 * @syscap SystemCapability.Startup.SystemInfo [since 24]
 * @stagemodelonly
 * @since 24 static
 */
declare namespace deviceInfo {
    
    /**
     * 设备类型枚举值，可用于校验deviceType的返回值。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    enum DeviceTypes {
        /**
         * 默认设备。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_DEFAULT = 'default',

        /**
         * 手机。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_PHONE = 'phone',

        /**
         * 平板。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_TABLET = 'tablet',

        /**
         * PC/2in1。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_2IN1 = '2in1',

        /**
         * 智慧屏。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_TV = 'tv',

        /**
         * 智能手表。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_WEARABLE = 'wearable',

        /**
         * 车机。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        TYPE_CAR = 'car'
    }

    /**
     * 设备类型。详细请参考[deviceTypes标签](docroot://quick-start/module-configuration-file.md#devicetypes标签)。
     * 
     * 示例：<!--RP1-->wearable<!--RP1End-->
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get deviceType(): string;
    
    /**
     * 设备厂家名称。
     * 
     * 示例：HUAWEI 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get manufacture(): string;
    
    /**
     * 设备品牌名称。
     * 
     * 示例：HUAWEI 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */  
    get brand(): string;

    /**
     * 设备品牌名称。
     * 
     * 示例：HUAWEI 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get marketName(): string;
    
    /**
     * 产品系列。
     * 
     * 示例：<!--RP3-->TAS<!--RP3End--> 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get productSeries(): string;
    
    
    /**
     * 认证型号。
     * 
     * 示例：<!--RP4-->TAS-AL00<!--RP4End--> 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get productModel(): string;

    /**
     * 认证型号别名。
     * 
     * 示例：TAS-AL00 
     * 
     * **ArkTs-Dyn起始版本：** 14
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get productModelAlias(): string;
    
    /**
     * 内部软件子型号。
     * 
     * 示例：<!--RP5-->TAS-AL00<!--RP5End--> 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get softwareModel(): string;
    
    /**
     * 硬件版本号。
     * 
     * 示例：<!--RP6-->TASA00CVN1<!--RP6End--> 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get hardwareModel(): string;

    /**
     * 硬件版本号。
     * 
     * 示例：<!--RP6-->TASA00CVN1<!--RP6End--> 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get hardwareProfile(): string;

    /**
     * 设备序列号SN(Serial Number)。
     * 
     * **说明**：可作为设备唯一识别码。
     * 
     * ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业定制应用申请) 
     * 
     * 示例：序列号随设备差异 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
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
     * Bootloader版本号。
     * 
     * 示例：bootloader 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get bootloaderVersion(): string;
    
    /**
     * 应用二进制接口（Abi）。
     * 
     * 示例：arm64-v8a 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get abiList(): string;
    
    /**
     * 安全补丁级别。
     * 
     * 示例：<!--RP7-->2021/01/01<!--RP7End--> 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get securityPatchTag(): string;
    
    /**
     * 产品版本。
     * 
     * 示例：<!--RP8-->XXX X.X.X.X<!--RP8End--> 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get displayVersion(): string;
    
    /**
     * 差异版本号。
     * 
     * 示例：default 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get incrementalVersion(): string;
    
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
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get osReleaseType(): string;
    
    
    /**
     * 系统版本，版本格式OpenHarmony-x.x.x.x,x为数值。
     * 
     * 示例：<!--RP10-->Openharmony-5.0.0.1<!--RP10End--> 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get osFullName(): string;
    
    /**
     * Major版本号，随主版本更新增加，值为osFullName中的第一位数值，建议直接使用deviceInfo.majorVersion获取，可提升效率，不建议开发者解析osFullName获取。
     * 
     * 示例：5 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get majorVersion(): int;
    
    /**
     * Senior版本号，随局部架构、重大特性增加，值为osFullName中的第二位数值，建议直接使用deviceInfo.seniorVersion获取，可提升效率，不建议开发者自主解析osFullName获取。
     * 
     * 示例：0 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get seniorVersion(): int;
    
    /**
     * Feature版本号，标识规划的新特性版本，值为osFullName中的第三位数值，建议直接使用deviceInfo.featureVersion获取，可提升效率，不建议开发者自主解析osFullName获取。
     * 
     * 示例：0 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get featureVersion(): int;
    
    /**
     * Build版本号，标识编译构建的版本号，值为osFullName中的第四位数值，建议直接使用deviceInfo.buildVersion获取，可提升效率，不建议开发者自主解析osFullName获取。
     * 
     * 示例：1 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildVersion(): int;
    
    
    /**
     * 系统软件API版本。
     * 
     * 示例：12 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get sdkApiVersion(): int;
    
    /**
     * 首个版本系统软件API版本。
     * 
     * 示例：3 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get firstApiVersion(): int;
    
    /**
     * 版本ID。由deviceType、manufacture、brand、productSeries、osFullName、productModel、softwareModel、sdkApiVersion、
     * incrementalVersion、buildType拼接组成。
     * 
     * 示例：wearable/HUAWEI/HUAWEI/TAS/OpenHarmony-5.0.0.1/TAS-AL00/TAS-AL00/12/default/release:nolog 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get versionId(): string;
    
    /**
     * 构建类型。
     * 
     * 示例：default 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildType(): string;
    
    /**
     * 构建用户。
     * 
     * 示例：default 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildUser(): string;
    
    /**
     * 构建主机。
     * 
     * 示例：default 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildHost(): string;
    
    /**
     * 构建时间。
     * 
     * 示例：default 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildTime(): string;
    
    /**
     * 构建版本Hash。
     * 
     * 示例：default 
     * 
     * **ArkTs-Dyn起始版本：** 6
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get buildRootHash(): string;

    /**
     * 设备Udid。
     * 
     * **说明**：数据长度为65字节。可作为设备唯一识别码。
     * 
     * ohos.permission.sec.ACCESS_UDID(该权限只允许系统应用及企业定制应用申请)
     * 
     * 示例：9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412  
     * 
     * **ArkTs-Dyn起始版本：** 7
     * 
     * **ArkTs-Sta起始版本：** 20
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
     * 发行版系统名称<!--Del-->，由发行方定义<!--DelEnd-->。
     * 
     * 示例：OpenHarmony 
     * 
     * **ArkTs-Dyn起始版本：** 10
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSName(): string;

    /**
     * 发行版系统版本号<!--Del-->，由发行方定义<!--DelEnd-->。<!--RP11--><!--RP11End-->
     * 
     * 示例：5.0.0  
     * 
     * **ArkTs-Dyn起始版本：** 10
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSVersion(): string;

    /**
     * 发行版系统api版本<!--Del-->，由发行方定义<!--DelEnd-->。
     * 
     * 示例：50001 
     * 
     * **ArkTs-Dyn起始版本：** 10
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { int }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSApiVersion(): int;

    /**
     * 发行版系统api版本名称<!--Del-->，由发行方定义<!--DelEnd-->。 
     * 
     * **ArkTs-Dyn起始版本：** 13
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSApiName(): string;

    /**
     * 发行版系统类型<!--Del-->，由发行方定义<!--DelEnd-->。
     * 
     * 示例：Release 
     * 
     * **ArkTs-Dyn起始版本：** 10
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get distributionOSReleaseType(): string;

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
     * **说明**：数据长度为37字节。
     * 
     * 示例：1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX 
     * 
     * **ArkTs-Dyn起始版本：** 12
     * 
     * **ArkTs-Sta起始版本：** 20
     *
     * @returns { string }
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    get ODID(): string;
    
    /**
     * 硬盘序列号。
     * 
     * **说明** ：该字段只能在2in1上设备进行查询，其他设备查询结果为空。
     * 
     * ohos.permission.ACCESS_DISK_PHY_INFO 
     * 
     * 示例：2502EM400567 
     * 
     * **ArkTs-Dyn起始版本：** 15
     * 
     * **ArkTs-Sta起始版本：** 20
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
     * 表示设备能力定级的枚举。
     *
     * @syscap SystemCapability.Startup.SystemInfo
     * @stagemodelonly
     * @since 24 static
     */
    enum PerformanceClassLevel {
        /**
         * 表示设备能力定级为高。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        CLASS_LEVEL_HIGH,
        /**
         * 表示设备能力定级为中。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        CLASS_LEVEL_MEDIUM,
        /**
         * 表示设备能力定级为低。
         *
         * @syscap SystemCapability.Startup.SystemInfo
         * @stagemodelonly
         * @since 24 static
         */
        CLASS_LEVEL_LOW
    }

    /**
     * 描述设备能力等级。
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