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
 * @file Skill
 * @kit AbilityKit
 */

/**
 * The module defines a skill object. Such an object can be obtained through
 * [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}, with at
 * least **GET_BUNDLE_INFO_WITH_HAP_MODULE**, **GET_BUNDLE_INFO_WITH_ABILITY**, and **GET_BUNDLE_INFO_WITH_SKILL**
 * passed in to **bundleFlags**. (The skill information is contained in [BundleInfo]{@link ./BundleInfo} ->
 * [HapModuleInfo]{@link ./HapModuleInfo} -> [AbilityInfo]{@link ./AbilityInfo} or
 * [ExtensionAbilityInfo]{@link ./ExtensionAbilityInfo:ExtensionAbilityInfo}.)
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export interface Skill {
  /**
   * [Actions](docroot://reference/apis-ability-kit/js-apis-ability-wantConstant.md#action) received by the skill.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly actions: Array<string>;

  /**
   * [Entities](docroot://reference/apis-ability-kit/js-apis-ability-wantConstant.md#entity) received by the skill.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly entities: Array<string>;

  /**
   * Collection of URIs matched by Want.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly uris: Array<SkillUri>;

  /**
   * Whether to enable domain verification. This attribute exists only in AbilityInfo. The value true indicates that
   * domain verification is enabled and domain verification is required; the value false indicates that domain
   * verification is not enabled.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly domainVerify: boolean;
}

/**
 * URI matched by Want.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export interface SkillUri {
  /**
   * Scheme of the URI, such as HTTP, HTTPS, file, and FTP.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly scheme: string;

  /**
   * Host address of the URI. This parameter takes effect only when **scheme** is specified.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly host: string;

  /**
   * Port number of the URI. This parameter takes effect only when both **scheme** and **host** are specified.
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
   * Path of the URI. This parameter takes effect only when both **scheme** and **host** are specified.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly path: string;

  /**
   * Prefix of the path of the URI. This parameter takes effect only when both **scheme** and **host** are specified.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly pathStartWith: string;

  /**
   * Regular expression of the path of the URI. This parameter takes effect only when both **scheme** and **host** are
   * specified.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly pathRegex: string;

  /**
   * Data type that matches the Want, using the MIME (Multipurpose Internet Mail Extensions) type specification and the
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType} type specification.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly type: string;

  /**
   * Standard data type of the URI that matches Want. This parameter applies to sharing scenarios.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly utd: string;

  /**
   * Maximum number of files of a specified type that can be received or opened at a time. The value must be an integer
   * greater than or equal to 0.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly maxFileSupported: int;

  /**
   * [Feature type](docroot://application-models/app-uri-config.md#description-of-linkfeature) provided by the URI. It
   * is used to implement redirection between applications and exists only in **AbilityInfo**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly linkFeature: string;
}