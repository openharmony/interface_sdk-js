/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import type PageNodeInfo from './PageNodeInfo';
import type AutoFillRect from './AutoFillRect';
/*** endif */
/*** if arkts static */
import PageNodeInfo from './PageNodeInfo';
import AutoFillRect from './AutoFillRect';
/*** endif */

/**
 * The module defines the view data used for auto-fill.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi [since 11 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
export default interface ViewData {
  /**
   * Bundle name. The value cannot exceed 512 characters.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Module name, used to specify the module to which the auto-fill data belongs.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  moduleName: string;

  /**
   * Ability name, used to specify the Ability to which the auto-fill data belongs.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  abilityName: string;

  /**
   * URL of the page.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  pageUrl: string;

  /**
   * Information of the page nodes.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  pageNodeInfos: Array<PageNodeInfo>;

  /**
   * Coordinates, width, and height of the page. On PC/2-in-1 devices, the password vault is displayed as a pop-up. To
   * ensure the pop-up position follows the input box, left and top must be set to 0.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi [since 12 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  pageRect: AutoFillRect;

  /**
   * Whether the content to be filled is selected by the user. **true** if the content is selected by the user, and
   * **false** otherwise.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  isUserSelected: boolean;

  /**
   * Whether to display other account information saved in the password box for the user to select. **true** to display,
   * **false** otherwise.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  isOtherAccount: boolean;
}