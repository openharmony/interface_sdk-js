/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * The module defines a skill object. Such an object can be obtained through 
 * [bundleManager.getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
 * , with at least **GET_BUNDLE_INFO_WITH_HAP_MODULE**, **GET_BUNDLE_INFO_WITH_ABILITY**, and 
 * **GET_BUNDLE_INFO_WITH_SKILL** passed in to **bundleFlags**. (The skill information is contained in 
 * [BundleInfo]{@link BundleInfo} -> [HapModuleInfo]{@link HapModuleInfo} -> [AbilityInfo]{@link AbilityInfo} or 
 * [ExtensionAbilityInfo]{@link ExtensionAbilityInfo:ExtensionAbilityInfo}.)
 *
 * @file
 * @kit AbilityKit
 */

/**
 * skill标签对象。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export interface Skill {
  /**
   * Skill接收的[Action集合]{@link ./../@ohos.ability.wantConstant:wantConstant.Action}。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly actions: Array<string>;

  /**
   * Skill接收的[Entity集合]{@link ./../@ohos.ability.wantConstant:wantConstant.Entity}。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly entities: Array<string>;

  /**
   * Want匹配的Uri集合。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly uris: Array<SkillUri>;

  /**
   * Skill接收的DomainVerify值，仅在AbilityInfo中存在，表示是否开启域名校验，取值为true表示开启域名校验，取值为false表示未开启域名校验。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly domainVerify: boolean;
}

/**
 * Want匹配的Uri集合。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export interface SkillUri {
  /**
   * 标识 URI 协议名，常见的有http、https、file、ftp等。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly scheme: string;

  /**
   * 标识 URI 主机地址部分，仅当 scheme 存在时才生效。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly host: string;

  /**
   * 标识 URI 端口，仅当 scheme 和 host 同时存在时才生效。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   */
  readonly port: int;

  /**
   * Indicates the port of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 23 static
   */
  readonly port: string;

  /**
   * 标识 URI 路径部分，仅当 scheme 和 host 同时存在时才生效。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly path: string;

  /**
   * 标识 URI 路径部分，用于前缀匹配，仅当 scheme 和 host 同时存在时才生效。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly pathStartWith: string;

  /**
   * 标识 URI 路径部分，用于正则匹配，仅当 scheme 和 host 同时存在时才生效。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly pathRegex: string;

  /**
   * 标识与Want相匹配的数据类型，使用MIME（Multipurpose?Internet?Mail?Extensions）类型规范和
   * [UniformDataType]{@link ./../@ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型规范。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly type: string;

  /**
   * 标识与 Want 相匹配的 URI 的标准化数据类型，适用于分享等场景。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly utd: string;

  /**
   * 对于指定类型的文件，标识一次能接收或打开的最大数量。取值范围：不小于0的整数。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly maxFileSupported: int;

  /**
   * 标识 URI 提供的[功能类型](docroot://application-models/app-uri-config.md#linkfeature标签说明)，用于实现应用间跳转，仅在AbilityInfo中存在。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly linkFeature: string;
}