/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * The module defines the application information. An application can obtain its own application information through 
 * [bundleManager.getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
 * , with **GET_BUNDLE_INFO_WITH_APPLICATION** passed in to 
 * [bundleFlags]{@link ./../@ohos.bundle.bundleManager:bundleManager.BundleFlag}.
 *
 * @file
 * @kit AbilityKit
 */

import { Metadata } from './Metadata';
import { Resource } from '../global/resource';
import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * 应用程序信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ApplicationInfo {
  /**
   * 应用包的bundle名称，对应[app.json5](docroot://quick-start/app-configuration-file.md)里面的bundleName。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 标识应用的描述信息，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的description字段。关于description的详细信息详见本表中的
   * descriptionResource字段说明。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly description: string;

  /**
   * 标识应用的描述信息的资源id，是编译构建时根据应用配置的description自动生成的资源id。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * 判断应用程序是否可以使用，取值为true表示可以使用，取值为false表示不可使用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled: boolean;

  /**
   * 标识应用的名称，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的label字段。关于label的详细信息详见本表中的labelResource字段
   * 说明。从API version 20开始，如果是通过
   * [bundleManager.getAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getAbilityInfo}获取ApplicationInfo
   * 信息，该字段为应用对用户显示的名称，而不是资源描述符。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * 标识应用名称的资源id，是编译构建时根据应用配置的label自动生成的资源id。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * 应用程序的图标，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的icon字段。关于icon的详细信息详见本表中的iconResource字段说明。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * 应用程序图标的资源id，是编译构建时根据应用配置的icon自动生成的资源id。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * 应用程序的进程名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly process: string;

  /**
   * 访问应用程序所需的权限列表<!--Del-->，可以通过调用
   * [getApplicationInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getApplicationInfo(bundleName: string, appFlags: int, userId: int, callback: AsyncCallback<ApplicationInfo>)}
   * 接口，appFlags参数传入GET_APPLICATION_INFO_WITH_PERMISSION获取<!--DelEnd-->。
   * 
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}或
   * 者
   * [getBundleInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>)}
   * 接口获取ApplicationInfo信息时不会返回该字段内容，可以通过获取[bundleInfo]{@link BundleInfo:BundleInfo}.reqPermissionDetails信息获取权限列表。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly permissions: Array<string>;

  /**
   * 应用程序的安装目录。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly codePath: string;

  /**
   * 应用程序的元信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_APPLICATION和GET_BUNDLE_INFO_WITH_METADATA获取。
   * 
   * **说明：** 从API version 9开始支持，从API version 10开始不再维护，建议使用metadataArray替代。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead ApplicationInfo#metadataArray
   */
  readonly metadata: Map<string, Array<Metadata>>;

  /**
   * 应用程序的元信息，通过调用
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接
   * 口，bundleFlags参数传入GET_BUNDLE_INFO_WITH_APPLICATION和GET_BUNDLE_INFO_WITH_METADATA获取。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly metadataArray: Array<ModuleMetadata>;

  /**
   * 应用程序是否可以被移除，取值为true表示可以被移除，取值为false表示不可以被移除。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly removable: boolean;

  /**
   * 应用程序的accessTokenId，应用的身份标识，在
   * [程序访问控制校验接口](docroot://reference/apis-ability-kit/js-apis-abilityAccessCtrl.md#checkaccesstoken9)中使用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly accessTokenId: long;

  /**
   * 应用程序的UID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly uid: int;

  /**
   * 应用程序的图标资源信息，包含了该资源信息的bundleName、moduleName 和 id，可以调用全球化的接口
   * [getMediaContent]{@link ./../@ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)}
   * 来获取详细的资源数据信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconResource: Resource;

  /**
   * 应用程序的名称资源信息，包含了该资源信息的bundleName、moduleName 和 id，可以调用全球化的接口
   * [getMediaContent]{@link ./../@ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)}
   * 来获取详细的资源数据信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelResource: Resource;

  /**
   * 应用程序的描述资源信息，包含了该资源信息的bundleName、moduleName 和 id，可以调用全球化的接口
   * [getMediaContent]{@link ./../@ohos.resourceManager:resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)}
   * 来获取详细的资源数据信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionResource: Resource;

  /**
   * 应用程序签名证书的分发类型，分为： <li>app_gallery：应用市场安装的应用。<!--RP1--><!--RP1End--> <li> enterprise：企业内部应用，企业自行开发、仅限企业内部员工使用的应用，不通过
   * 应用市场等公开渠道发布，而是通过企业自己的渠道进行内部分发。<!--RP2--><!--RP2End--><li> enterprise_mdm：企业
   * [MDM应用](docroot://mdm/mdm-kit-term.md#mdm应用设备管理应用)。<!--Del-->需要被激活
   * [管理员特权]{@link ./../@ohos.enterprise.adminManager:adminManager.enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, callback: AsyncCallback<void>)}
   * 后，才能安装普通企业应用。<!--DelEnd--><!--RP3--><!--RP3End--> <li>enterprise_normal：普通企业应用，无需上架华为应用市场，可通过企业
   * [MDM应用](docroot://mdm/mdm-kit-term.md#mdm应用设备管理应用)以及离线安装器分发安装。<!--RP4--><!--RP4End--><li>os_integration：预置应用，三方应用无法
   * 申请配置。<li>crowdtesting：众包测试应用，是由应用市场分发给部分用户，有一定的有效期的特定应用，系统检测到应用的有效期到期后，会通知用户到应用市场更新release版本的应用。从API version 11开始被废
   * 弃。<li>internaltesting：应用市场内测的应用。<!--RP5--><!--RP5End--><li>none：其他。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly appDistributionType: string;

  /**
   * 应用程序签名证书文件的类型，分为debug和release两种类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly appProvisionType: string;

  /**
   * 标识应用是否为系统应用，取值为true表示系统应用，取值为false表示非系统应用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly systemApp: boolean;

  /**
   * 标识包的类型，取值为APP（应用）或者ATOMIC_SERVICE（原子化服务）。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly bundleType: bundleManager.BundleType;

  /**
   * 标识应用是否处于调试模式，取值为true表示应用处于调试模式，取值为false表示应用处于非调试模式。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly debug: boolean;

  /**
   * 标识应用数据是否可被删除。true表示不可删除，false表示可以删除。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly dataUnclearable: boolean;

  /**
   * 应用程序的本地库文件路径。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  readonly nativeLibraryPath: string;

  /**
   * 应用多开模式。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly multiAppMode: MultiAppMode;

  /**
   * 应用包的分身索引标识，仅在分身应用中生效。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;

  /**
   * 标识应用程序的安装来源，支持的取值如下：
   * 
   * - pre-installed：表示首次开机时已安装的预置应用。
   * - ota：表示系统升级时新增的预置应用。
   * - recovery：表示用户卸载后又手动恢复的预置应用。
   * - bundleName：表示由此包名对应的应用安装。该bundleName代表变量，以实际值为准。
   * - unknown：表示应用安装来源未知。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly installSource: string;

  /**
   * 标识应用打包时使用的SDK的发布类型。当前SDK的发布类型为Canary、Beta或Release，其中Canary和Beta通过序号进一步细分，例如Canary1、Canary2、Beta1、Beta2等。开发者可通过对比应用打
   * 包依赖的SDK发布类型和OS的发布类型（[deviceInfo.distributionOSReleaseType]{@link ./../@ohos.deviceInfo:deviceInfo}）来判断兼容性。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly releaseType: string;

  /**
   * 标识当前应用是否启用端云文件同步能力。true表示当前应用启用端云文件同步能力，false表示当前应用不启用端云文件同步能力。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly cloudFileSyncEnabled: boolean;

  /**
   * 标识当前应用是否启用端云结构化数据同步能力。true表示当前应用启用端云结构化数据同步能力，false表示当前应用不启用端云结构化数据同步能力。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  readonly cloudStructuredDataSyncEnabled?: boolean;

  /**
   * 标识当前应用和当前用户之间的状态集合，每一位表示一个特定的布尔状态，取值参考
   * [ApplicationInfoFlag]{@link ./../@ohos.bundle.bundleManager:bundleManager.ApplicationInfoFlag}。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly flags?: int;
}

/**
 * 描述模块的元数据信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
export interface ModuleMetadata {
  /**
   * 模块名。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * 该模块下的元数据信息列表。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly metadata: Array<Metadata>;
}

/**
 * 表示[应用多开](docroot://quick-start/multiInstance.md)模式。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 12 dynamic
 * @since 23 static
 */
export interface MultiAppMode {
  /**
   * 应用多开模式的类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly multiAppModeType: bundleManager.MultiAppModeType;

  /**
   * 应用多开的最大个数。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly maxCount: int;
}

/**
 * 预装应用的信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface PreinstalledApplicationInfo {

  /**
   * 应用包的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * 应用包的模块名，返回entry模块的moduleName。若不存在entry模块则返回feature模块的moduleName。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * 应用图标Id。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * 应用标签Id。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * 应用描述Id。
   * 
   * **模型约束：** 此接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  readonly descriptionId?: long;
}