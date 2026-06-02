/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * 本模块提供包管理能力，包括添加包安装允许名单、获取包安装允许名单、移除包安装允许名单等。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace bundleManager {
  /**
   * 应用包安装需指定的参数信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  interface InstallParam {
    /**
     * 指示用户ID，默认值：调用方所在用户，取值范围：大于等于0。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @StageModelOnly
     * @since 12
     */
    userId?: number;

    /**
     * 安装标志。枚举值：0：应用初次安装，1：应用覆盖安装，2：应用免安装，默认值为应用初次安装。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @StageModelOnly
     * @since 12
     */
    installFlag?: number;

    /**
     * 扩展参数，默认值为空。key取值支持"ohos.bms.param.enterpriseForAllUser"，若对应的value值为"true"，表示为所有用户安装应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 19
     */
    parameters?: Record<string, string>;
  }

  /**
   * 资源相关信息，包括应用包名、应用模块名、资源id。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  interface Resource {
    /**
     * 应用的bundle名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    bundleName: string;

    /**
     * 应用的module名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    moduleName: string;

    /**
     * 资源的id值。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    id: number;
  }

  /**
   * 应用程序签名证书的分发类型。详细介绍请参见[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}的appDistributionType属性
   * 。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  enum AppDistributionType {
    /**
     * 应用市场安装的应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    APP_GALLERY = 1,

    /**
     * 企业应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ENTERPRISE = 2,

    /**
     * 普通企业应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ENTERPRISE_NORMAL = 3,

    /**
     * 企业MDM应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ENTERPRISE_MDM = 4,

    /**
     * 应用市场内测的应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    INTERNALTESTING = 5,

    /**
     * 众包测试应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    CROWDTESTING = 6
  }

  /**
   * 包信息获取标志，指示需要获取的包信息的内容。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  export enum BundleInfoGetFlag {
    /**
     * 用于获取默认包信息，不包含applicationInfo、signatureInfo的信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    DEFAULT = 0,

    /**
     * 用于获取默认包信息和applicationInfo的信息，获取的applicationInfo中不包含iconData的信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    WITH_APPLICATION_INFO = 1 << 0,

    /**
     * 用于获取默认包信息和signatureInfo的信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    WITH_SIGNATURE_INFO = 1 << 1,

    /**
     * 用于获取默认包信息和applicationInfo的iconData信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    WITH_APPLICATION_ICON_INFO = 1 << 2
  }

  /**
   * 描述应用包信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  interface BundleInfo {
    /**
     * 应用包的名称，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的bundleName字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly name: string;

    /**
     * 应用包的供应商，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的vendor字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly vendor: string;

    /**
     * 应用包的版本号，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的versionCode字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly versionCode: number;

    /**
     * 应用包的版本文本描述信息，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的versionName字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly versionName: string;

    /**
     * 分布式场景下的应用包兼容的最低版本，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的minCompatibleVersionCode字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly minCompatibleVersionCode: number;

    /**
     * 应用运行目标版本，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的targetAPIVersion字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly targetVersion: number;

    /**
     * 应用程序的配置信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appInfo: ApplicationInfo;

    /**
     * 应用包的签名信息。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly signatureInfo: SignatureInfo;

    /**
     * 应用包安装时间戳，表示从1970-01-01 08:00:00 UTC+8逝去的毫秒数，单位毫秒。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly installTime: number;

    /**
     * 应用包更新时间戳，表示从1970-01-01 08:00:00 UTC+8逝去的毫秒数，单位毫秒。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly updateTime: number;

    /**
     * 应用包的分身索引标识，仅在分身应用中生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appIndex: number;

    /**
     * 应用在当前设备的首次安装时间戳，表示从1970-01-01 08:00:00 UTC+8逝去的毫秒数，单位毫秒，预置应用的首次安装时间戳为1533657660000。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly firstInstallTime?: number;
  }

  /**
   * 描述应用包的签名信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  interface SignatureInfo {
    /**
     * 应用的appId，表示应用的唯一标识，详情信息可参考[什么是appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appId: string;

    /**
     * 应用包的指纹信息，由签名证书通过SHA-256算法计算哈希值生成。使用的签名证书发生变化时，该字段也会发生变化。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly fingerprint: string;

    /**
     * 应用的唯一标识。详情信息可参考[什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appIdentifier: string;

    /**
     * 应用的证书公钥。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly certificate?: string;
  }

  /**
   * 应用程序信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  interface ApplicationInfo {
    /**
     * 应用包的名称，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的bundleName字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly name: string;

    /**
     * 标识应用的描述信息，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的description字段。关于description的详细信息详见本表中
     * 的descriptionResource字段说明。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly description: string;

    /**
     * 标识应用的描述信息的资源id，是编译构建时根据应用配置的description自动生成的资源id。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly descriptionId: number;

    /**
     * 判断应用程序是否可以使用，取值为true表示可以使用，取值为false表示不可使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly enabled: boolean;

    /**
     * 标识应用的名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly label: string;

    /**
     * 标识应用名称的资源id，是编译构建时根据应用配置的label自动生成的资源id。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly labelId: number;

    /**
     * 应用程序的图标，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的icon字段。关于icon的详细信息详见本表中的iconResource字段说
     * 明。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly icon: string;

    /**
     * 应用程序图标的资源id，是编译构建时根据应用配置的icon自动生成的资源id。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly iconId: number;

    /**
     * 应用程序的图标，为base64编码格式。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 23
     */
    readonly iconData: string;

    /**
     * 应用程序的进程名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly process: string;

    /**
     * 应用程序的安装目录。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly codePath: string;

    /**
     * 应用程序是否可以被移除，取值为true表示可以被移除，取值为false表示不可以被移除。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly removable: boolean;

    /**
     * 应用程序的accessTokenId，应用的身份标识，在程序访问控制校验接口
     * [checkAccessToken](docroot://reference/apis-ability-kit/js-apis-abilityAccessCtrl.md#checkaccesstoken9)中使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly accessTokenId: number;

    /**
     * 应用程序的UID。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly uid: number;

    /**
     * 应用程序的图标资源信息，包含了该资源的信息的bundleName、moduleName和id。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly iconResource: Resource;

    /**
     * 应用程序的标签资源信息，包含了该资源的信息的bundleName、moduleName和id。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly labelResource: Resource;

    /**
     * 应用程序的描述资源信息，包含了该资源的信息的bundleName、moduleName和id。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly descriptionResource: Resource;

    /**
     * 应用程序签名证书的分发类型，详细信息请参考[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}的appProvisionType字段。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appDistributionType: string;

    /**
     * 应用程序签名证书文件的类型，分为debug和release两种类型。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appProvisionType: string;

    /**
     * 标识应用是否为系统应用，取值为true表示系统应用，取值为false表示非系统应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly systemApp: boolean;

    /**
     * 标识应用是否处于调试模式，取值为true表示应用处于调试模式，取值为false表示应用处于非调试模式。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly debug: boolean;

    /**
     * 标识应用数据是否可被删除。true表示不可删除，false表示可以删除。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly dataUnclearable: boolean;

    /**
     * 应用程序的本地库文件路径。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly nativeLibraryPath: string;

    /**
     * 应用包的分身索引标识，仅在分身应用中生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly appIndex: number;

    /**
     * 应用程序的安装来源，支持的取值如下：
     *
     * - pre-installed表示应用为第一次开机时安装的预置应用。
     * - ota表示应用为系统升级时新增的预置应用。
     * - recovery表示卸载后再恢复的预置应用。
     * - bundleName表示应用由此包名对应的应用安装。
     * - unknown表示应用安装来源未知。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly installSource: string;

    /**
     * 标识应用打包时使用的SDK的发布类型。当前SDK的发布类型可能为Canary、Beta、Release，其中Canary和Beta可能通过序号进一步细分，例如Canary1、Canary2、Beta1、Beta2等。开发者可通
     * 过对比应用打包依赖的SDK发布类型和OS的发布类型（[deviceInfo.distributionOSReleaseType]{@link @ohos.deviceInfo:deviceInfo}）来判断兼容性。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    readonly releaseType: string;
  }

  /**
   * 应用的存储占用信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  interface BundleStorageStats {
    /**
     * 应用的包名。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    bundleName: string;

    /**
     * 应用安装文件大小，单位为Byte。
     *
     * 应用安装文件保存在以下目录：
     *
     * /data/storage/el1/bundle
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    appSize: number;

    /**
     * 应用的本地数据、分布式数据和数据库数据大小，单位为Byte。
     *
     * 本地文件保存在以下目录（注意缓存文件目录为以下目录的子目录）：
     *
     * /data/storage/${el1-el5}/base
     *
     * 分布式文件保存在以下目录：
     *
     * /data/storage/el2/distributedfiles
     *
     * 数据库文件保存在以下目录：
     *
     * /data/storage/${el1-el5}/database
     *
     * **说明**：${el1-el5}指的是[el1，el2，el3，el4，el5目录](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    dataSize: number;
  }

  /**
   * 添加应用至当前用户的应用程序包安装允许名单，添加至允许名单的应用允许在当前用户下安装，否则不允许安装，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 添加应用至应用程序包安装允许名单，添加至允许名单的应用允许在指定用户（通过userId指定）下安装，否则不允许安装，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 添加应用至应用程序包安装允许名单，添加至允许名单的应用允许在当前/指定用户下安装，否则不允许安装。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当添加应用程序包安装允许名单失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * 添加应用至应用程序包安装允许名单，添加至允许名单的应用允许在当前/指定用户下安装，其它非允许名单应用不允许安装。系统应用卸载后重新安装不会受到接口限制；而普通应用在卸载后重新安装时，则会受到接口限制。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。*@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addAllowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * 移除当前用户的应用程序包安装允许名单中的指定应用。安装允许名单存在时，不在允许名单中的应用不允许在当前用户下安装，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 移除在应用程序包安装允许名单中的应用，在允许名单存在的情况下，不在允许名单中的应用不允许在指定用户（通过userId指定）下安装，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 移除在应用程序包安装允许名单中的应用，在允许名单存在的情况下，不在允许名单中的应用不允许在当前/指定用户下安装。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当移除应用程序包安装允许名单失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * 在应用程序包安装允许名单中移除应用，在允许名单存在的情况下，不在应用程序包安装允许名单中的应用不允许在当前/指定用户下安装。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。*@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeAllowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * 获取当前用户下的应用程序包安装允许名单，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getAllowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取指定用户（通过userId指定）下的应用程序包安装允许名单，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getAllowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取当前/指定用户下的应用程序包安装允许名单，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<Array<string>> } Promise对象，返回当前/指定用户下的应用程序包安装允许名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getAllowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * 获取当前/指定用户下的应用程序包安装允许名单。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。*@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @returns { Array<string> } 返回当前用户下的应用程序包安装允许名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAllowedInstallBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * 添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前用户下安装，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在指定用户（通过userId指定）下安装。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前/指定用户下安装。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当添加应用程序包安装禁止名单失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * 添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前/指定用户下安装。系统应用卸载后重新安装不会受到接口限制；而普通应用在卸载后重新安装时，则会受到接口限制。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。*@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addDisallowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * 移除在应用程序包安装禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在当前用户下安装。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 移除在应用程序包安装禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在指定用户（通过userId指定）下安装，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 移除在应用程序包安装禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在当前/指定用户下安装。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当移除应用程序包安装禁止名单失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * 在应用程序包安装禁止名单中移除应用，在禁止名单存在的情况下，在应用程序包安装禁止名单中的应用不允许在当前/指定用户下安装。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。*@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeDisallowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * 获取当前用户下的应用程序包安装禁止名单，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getDisallowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取指定用户（通过userId指定）下的应用程序包安装禁止名单，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getDisallowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取当前/指定用户下的应用程序包安装禁止名单，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<Array<string>> } Promise对象，返回当前/指定用户下的应用程序包安装禁止名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getDisallowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * 获取当前/指定用户下的应用程序包安装禁止名单。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。*@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @returns { Array<string> } 返回当前用户下的应用程序包安装禁止名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getDisallowedInstallBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * 添加应用至应用程序包卸载禁止名单，添加至禁止名单的应用不允许在当前用户下卸载，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedUninstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 添加应用至应用程序包卸载禁止名单，添加至禁止名单的应用不允许在指定用户（通过userId指定）下卸载。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 添加应用至应用程序包卸载禁止名单，添加至禁止名单的应用不允许在当前/指定用户下卸载。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当添加应用程序包卸载禁止名单失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * 添加应用至包卸载禁止名单，添加至禁止名单的应用不允许在当前/指定用户下卸载。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>取值范围：单个用户下该名单总数不能超过200。例如100用户下已经设置了50个、101用户未设置，则100用户还能再设置150个，101用
   *     户还能再设置200个。不建议一次性设置个数大于50个，可能引入性能问题。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。*@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addDisallowedUninstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * 移除在应用程序包卸载禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在当前用户下卸载，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeDisallowedUninstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 移除在应用程序包卸载禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在指定用户（通过userId指定）下卸载。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 移除在应用程序包卸载禁止名单中的应用。在禁止名单存在的情况下，在禁止名单中的应用不允许在当前/指定用户下卸载。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当移除应用程序包卸载禁止名单失败时会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * 在包卸载禁止名单中移除应用。在禁止名单存在的情况下，在包卸载禁止名单中的应用不允许在当前/指定用户下卸载。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组。<br/>取值范围：不建议一次性设置个数大于50个，可能引入性能问题。<br/>**说明：** 从API version 21版本开始，数组中的元素
   *     支持使用[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。*@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeDisallowedUninstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * 获取当前用户下的应用程序包卸载禁止名单，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getDisallowedUninstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取指定用户（通过userId指定）下的应用程序包卸载禁止名单，使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getDisallowedUninstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取当前/指定用户下应用程序包卸载禁止名单接口，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<Array<string>> } Promise对象，返回当前/指定用户下的应用程序包卸载禁止名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function getDisallowedUninstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * 获取当前/指定用户下包卸载禁止名单。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。*@ohos.account.osAccount** to obtain the account ID.<br> - If **accountId** is passed in, this API applies to the
   *     specified user.<br> - If **accountId** is not passed in, this API applies to the current user.
   * @returns { Array<string> } 返回当前用户下的包卸载禁止名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getDisallowedUninstallBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * 卸载当前用户下的指定应用程序包，且不保留应用程序包数据。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 当应用为不可卸载的预置应用或者通过
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 包名。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function uninstall(admin: Want, bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * 卸载指定用户下（由参数userId指定）的指定应用程序包，且不保留应用程序包数据。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 当应用为不可卸载的预置应用或者通过
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 包名。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function uninstall(admin: Want, bundleName: string, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 卸载当前用户下的指定应用程序包，选择是否保留应用程序包数据（由isKeepData指定）。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 当应用为不可卸载的预置应用或者通过
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 包名。
   * @param { boolean } isKeepData - 是否保留包数据，true表示保留，false表示不保留。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function uninstall(admin: Want, bundleName: string, isKeepData: boolean, callback: AsyncCallback<void>): void;

  /**
   * 卸载指定用户下（由参数userId指定）的指定应用程序包接口，选择是否保留应用程序包数据（由isKeepData指定）。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 当应用为不可卸载的预置应用或者通过
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 包名。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { boolean } isKeepData - 是否保留包数据，true表示保留，false表示不保留。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function uninstall(admin: Want, bundleName: string, userId: number, isKeepData: boolean, callback: AsyncCallback<void>): void;

  /**
   * 卸载当前/指定用户下的指定包接口，选择是否保留包数据（由isKeepData指定）。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 当应用为不可卸载的预置应用或者通过
   * > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 应用程序包名。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @param { boolean } [isKeepData] - 是否保留包数据，true表示保留，false表示不保留。
   * @returns { Promise<void> } 无返回结果的Promise对象。当包卸载失败时抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function uninstall(admin: Want, bundleName: string, userId?: number, isKeepData?: boolean): Promise<void>;

  /**
   * 安装指定路径下的应用包。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } hapFilePaths - 待安装应用包路径数组。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function install(admin: Want, hapFilePaths: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 安装指定路径下的指定安装参数的应用包。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } hapFilePaths - 待安装应用包路径数组。
   * @param { InstallParam } installParam - 应用包安装参数。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function install(admin: Want, hapFilePaths: Array<string>, installParam: InstallParam, callback: AsyncCallback<void>): void;

  /**
   * 安装指定路径下的应用包。使用Promise异步回调。</br>此接口只能安装分发类型为enterprise_mdm（MDM应用）和enterprise_normal（普通企业应用）类型的应用，可以通过
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接口查询应用
   * 自身的[BundleInfo]{@link ./bundleManager/BundleInfo}，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。
   *
   * > **说明：**
   * >
   * > 该接口比较耗时，当调用此接口后，后续如果在应用主线程调用其他同步接口时需要等待该接口异步返回。
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } hapFilePaths - 待安装应用包路径数组。应用包路径为应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：
   *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径。
   * @param { InstallParam } [installParam] - 应用包安装参数。
   * @returns { Promise<void> } 无返回结果的Promise对象。当应用程序包安装失败时，抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function install(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>;

  /**
   * 安装应用
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { Array<string> } hapFilePaths - 应用包路径
   * @param { InstallParam } [installParam] - 安装参数
   * @returns { Promise<void> } 应用安装结果
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 9201022 - Failed to install the HAP because of insufficient system disk space.
   * @throws { BusinessError } 9201023 - Failed to install the HAP because enterprise device management disallows the
   *     installation.
   * @throws { BusinessError } 9201024 - Failed to install the HAP because the HAP fails to be parsed.
   * @throws { BusinessError } 9201025 - Failed to install the HAP because the HAP signature fails to be verified.
   * @throws { BusinessError } 9201026 - Failed to install the HAP because the HAP path is invalid or
   *     the HAP is too large.
   * @throws { BusinessError } 9201027 - Failed to install the HAPs because they have different configuration
   *     information.
   * @throws { BusinessError } 9201028 - Failed to install the HAP because the isolationMode configured is not
   *     supported.
   * @throws { BusinessError } 9201029 - Failed to install the HAP since the version of the HAP to install is too early.
   * @throws { BusinessError } 9201030 - Failed to install the HAP because the VersionCode to be updated is not greater
   *     than the current VersionCode.
   * @throws { BusinessError } 9201031 - Installation failed because the dependant module does not exist.
   * @throws { BusinessError } 9201032 - The specified user ID is not found.
   * @throws { BusinessError } 9201033 - Failed to install the HAP because the overlay check failed.
   * @throws { BusinessError } 9201034 - Failed to install the HSP due to missing required permissions.
   * @throws { BusinessError } 9201035 - Installation failed because the installation of cross-app shared libraries is
   *     not allowed.
   * @throws { BusinessError } 9201036 - Failed to install the HAP due to incorrect URI in the data proxy.
   * @throws { BusinessError } 9201037 - Failed to install the HAP due to incorrect permission configuration in
   *     the data proxy.
   * @throws { BusinessError } 9201038 - Failed to install the HAP due to code signature verification failure.
   * @throws { BusinessError } 9201039 - Failed to install the HAP due to enterprise device verification failure.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 26.0.0
   */
  function installForResult(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>;

  /**
   * 添加可安装应用的分发类型。添加成功后，当前设备可以安装对应分发类型的应用，但无法安装[AppDistributionType]{@link bundleManager.AppDistributionType}中未添加的分发类型的应
   * 用。
   *
   * 应用程序签名证书的分发类型详细介绍请参见[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}的appDistributionType属性。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<AppDistributionType> } appDistributionTypes - 应用程序签名证书的分发类型数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addInstallationAllowedAppDistributionTypes(admin: Want, appDistributionTypes: Array<AppDistributionType>): void;

  /**
   * 移除应用的分发类型。若只移除了数组中部分的分发类型，则当前设备可以安装数组中剩下的分发类型的应用，但无法安装
   * [AppDistributionType]{@link bundleManager.AppDistributionType}中未添加的分发类型的应用。
   *
   * 应用程序签名证书的分发类型详细介绍请参见[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}的appDistributionType属性。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<AppDistributionType> } appDistributionTypes - 应用程序签名证书的分发类型数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeInstallationAllowedAppDistributionTypes(admin: Want, appDistributionTypes: Array<AppDistributionType>): void;

  /**
   * 获取可安装的应用程序签名证书的分发类型。
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<AppDistributionType> } 应用程序签名证书的分发类型数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getInstallationAllowedAppDistributionTypes(admin: Want): Array<AppDistributionType>;

  /**
   * 获取设备指定用户下已安装应用列表。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值为正整数，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Promise<Array<BundleInfo>> } Promise对象，返回已安装应用包信息。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getInstalledBundleList(admin: Want, accountId: number): Promise<Array<BundleInfo>>;

  /**
   * 根据给定的bundleInfoGetFlag获取设备指定用户下已安装应用列表。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { int } accountId - 账号ID
   *     <br>取值应为≥0的整数。
   *     - 用户ID，取值为正整数，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { int } bundleInfoGetFlag - 指定返回的BundleInfo所包含的信息。
   *     <br>取值范围为全体整数。
   * @returns { Promise<Array<BundleInfo>> } Promise对象，返回已安装应用包信息。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function getInstalledBundleList(admin: Want, accountId: int, bundleInfoGetFlag: int): Promise<Array<BundleInfo>>;

  /**
   * 下载并安装应用市场应用。
   *
   * > **说明：**
   * >
   * > 本接口调用成功后会在桌面上生成应用下载任务，此任务与从应用市场下载所创建任务一致。下载安装结束后，安装结果会通过回调
   * > [EnterpriseAdminExtensionAbility.onMarketAppInstallResult]{@link
   *
   * > **说明**
   * >
   * 本接口调用成功后会在桌面上生成应用下载任务，此任务与从应用市场下载所创建任务一致。下载安装结束后，安装结果会通过回调[EnterpriseAdminExtensionAbility.onMarketAppInstallResult
   * ]{@link
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } bundleNames - 应用包名列表，一次最多传入10个。包名需与应用市场中包名一致，否则无法创建下载任务，并抛出错误码9201002。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201002 - Failed to install the application.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function installMarketApps(admin: Want, bundleNames: Array<string>): void;

  /**
   * 获取设备指定用户下已安装应用的存储占用信息。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 1.仅能获取已安装应用的存储占用信息。
   * >
   * > 2.bundleNames参数为empty或全部传入未安装的应用包名，会抛出9200012错误码。
   * >
   * > 3.bundleNames参数传递的包名部分应用已安装，部分应用未安装时，接口返回正常，已安装的应用返回实际的存储占用信息，未安装的应用存储占用信息为0。
   * >
   * > 4.该接口支持跨用户查询，比如可以在100用户下，查询101用户下的某些应用的存储占用信息。
   *
   * @permission ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } bundleNames - 应用包名列表。取值范围：小于等于200个应用包名。
   * @param { number } accountId - 账号ID
   *     <br>取值应为≥0的整数。
   *     - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Promise<Array<BundleStorageStats>> } Promise对象，返回已安装应用的存储占用信息。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getInstalledBundleStorageStats(admin: Want, bundleNames: Array<string>, accountId: number): Promise<Array<BundleStorageStats>>;
}

export default bundleManager;