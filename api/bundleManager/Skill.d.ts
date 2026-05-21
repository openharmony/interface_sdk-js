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
 * The module defines a skill object.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export interface Skill {
  /**
   * Indicates the actions of the skill
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly actions: Array<string>;

  /**
   * Indicates the entities of the skill
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly entities: Array<string>;

  /**
   * Indicates the uris of the skill
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly uris: Array<SkillUri>;

  /**
   * Indicates the domainVerify of the skill
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly domainVerify: boolean;
}

/**
 * Indicates the uris of the skill
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export interface SkillUri {
  /**
   * Indicates the scheme of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly scheme: string;

  /**
   * Indicates the host of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly host: string;

  /**
   * Indicates the port of the skillUri
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
   * Indicates the path of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly path: string;

  /**
   * Indicates the pathStartWith of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly pathStartWith: string;

  /**
   * Indicates the pathRegex of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly pathRegex: string;

  /**
   * Indicates the type of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly type: string;

  /**
   * Indicates the utd of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly utd: string;

  /**
   * Indicates the maxFileSupported of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly maxFileSupported: int;

  /**
   * Indicates the linkFeature of the skillUri
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly linkFeature: string;
}