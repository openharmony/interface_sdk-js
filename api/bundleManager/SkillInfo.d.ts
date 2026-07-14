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
 * @kit AbilityKit
 */

/**
 * Provides information about a skill.
 * A skill is an independent functional unit that can be called by an agent application.
 *
 * @typedef SkillInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface SkillInfo {
  /**
   * Indicates the bundle name of the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly bundleName: string;

  /**
   * Indicates the module name of the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly moduleName: string;

  /**
   * Indicates the name of the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly skillName: string;

  /**
   * Indicates the type of the skill.
   *
   * @type { SkillType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly skillType: SkillType;

  /**
   * Indicates the skill path of the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly skillPath: string;

  /**
   * Indicates the ability name associated with the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly abilityName: string;

  /**
   * Indicates the version code of the skill.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly versionCode: long;

  /**
   * Indicates the semantic version of the skill.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly version?: string;

  /**
   * Indicates the visibility of the skill.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly visibility?: string;

  /**
   * Indicates the description of the skill.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly description?: string;

  /**
   * Indicates the source entries of the skill.
   *
   * @type { ?Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly srcEntries?: Array<string>;

  /**
   * Indicates the permissions required by the skill.
   *
   * @type { ?Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly permissions?: Array<string>;

  /**
   * Indicates the permissions declared under requestPermissions in the module manifest.
   *
   * @type { ?Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly requestPermissions?: Array<string>;
}

/**
 * Enumerates the skill types.
 *
 * @enum { int }
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export enum SkillType {
  /**
   * Indicates an app skill.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  APP_SKILL = 0,
  /**
   * Indicates an independent skill.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  INDEPENDENT_SKILL = 1
}