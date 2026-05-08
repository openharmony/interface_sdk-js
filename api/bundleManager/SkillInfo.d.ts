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
 * @since 26.0.0 dynamic&static
 */
export interface SkillInfo {
  /**
   * Indicates the bundle name of the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly bundleName: string;

  /**
   * Indicates the module name of the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly moduleName: string;

  /**
   * Indicates the name of the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly skillName: string;

  /**
   * Indicates the type of the skill.
   *
   * @type { SkillType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly skillType: SkillType;

  /**
   * Indicates the skill path of the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly skillPath: string;

  /**
   * Indicates the ability name associated with the skill.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly abilityName: string;

  /**
   * Indicates the version code of the skill.
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly versionCode: long;

  /**
   * Indicates the description of the skill.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly description?: string;

  /**
   * Indicates the source entries of the skill.
   *
   * @type { ?Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly srcEntries?: Array<string>;

  /**
   * Indicates the permissions required by the skill.
   *
   * @type { ?Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly permissions?: Array<string>;

  /**
   * Indicates the permissions declared under requestPermissions in the module manifest.
   *
   * @type { ?Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly requestPermissions?: Array<string>;
}

/**
 * Enumerates the skill types.
 *
 * @enum { int }
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum SkillType {
  /**
   * Indicates an app skill.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  APP_SKILL = 0,
  /**
   * Indicates an independent skill.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  INDEPENDENT_SKILL = 1,
}
