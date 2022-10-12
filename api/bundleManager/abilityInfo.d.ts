/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { ApplicationInfo } from './applicationInfo';
import { Metadata } from './metadata'

/**
 * Obtains configuration information about an ability
 * @typedef AbilityInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export interface AbilityInfo {
  /**
   * Indicates the name of the bundle containing the ability
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly bundleName: string;

  /**
   * Indicates the name of the .hap package to which the capability belongs
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly moduleName: string;

  /**
   * Ability simplified class name
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly name: string;

  /**
   * Indicates the label of the ability
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly label: string;

  /**
   * Indicates the label id of the ability
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly labelId: number;

  /**
   * Indicates the ability
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly description: string;

  /**
   * Indicates the description id of the ability
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly descriptionId: number;

  /**
   * Indicates the icon of the ability
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly icon: string;

  /**
   * Indicates the icon id of the ability
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly iconId: number;

  /**
   * Process of ability, if user do not set it, the value equal application process
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly process: string;

  /**
   * Indicates whether an ability can be called by other abilities
   * @type {boolean}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly isVisible: boolean;

  /**
   * Enumerates types of templates that can be used by an ability
   * @type {AbilityType}
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 9
   */
  readonly type: AbilityType;

  /**
   * Enumerates ability display orientations
   * @type {DisplayOrientation}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly orientation: DisplayOrientation;

  /**
   * Enumerates ability launch type
   * @type {LaunchType}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly launchType: LaunchType;

  /**
   * The permissions that others need to launch this ability
   * @type {Array<string>}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly permissions: Array<string>;

  /**
   * Indicates the permission required for reading ability data
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 9
   */
  readonly readPermission: string;

  /**
   * Indicates the permission required for writing data to the ability
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 9
   */
  readonly writePermission: string;

  /**
   * Uri of ability
   * @type {string}
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @FAModelOnly
   * @since 9
   */
  readonly uri: string;

  /**
   * The device types that this ability can run on
   * @type {Array<string>}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly deviceTypes: Array<string>;

  /**
   * Obtains configuration information about an application
   * @type {ApplicationInfo}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * Indicates the metadata of ability
   * @type {Array<Metadata>}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly metadata: Array<Metadata>;

  /**
   * Indicates whether the ability is enabled
   * @type {boolean}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly enabled: boolean;

  /**
   * Indicates which window mode is supported
   * @type {Array<SupportWindowMode>}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly supportWindowModes: Array<SupportWindowMode>;

  /**
   * Indicates window size
   * @type {WindowSize}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly windowSize: WindowSize;
}

/**
 * Indicates the window size.
 * @typedef WindowSize
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export interface WindowSize {
  /**
   * Indicates maximum ratio of width over height of window under free window status.
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly maxWindowRatio: number;

  /**
   * Indicates minimum ratio of width over height of window under free window status.
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly minWindowRatio: number;

  /**
   * Indicates maximum width of window under free window status.
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly maxWindowWidth: number;

  /**
   * Indicates minimum width of window under free window status.
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly minWindowWidth: number;

  /**
   * Indicates maximum height of window under free window status.
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly maxWindowHeight: number;

  /**
   * Indicates minimum height of window under free window status.
   * @type {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  readonly minWindowHeight: number;
}

/**
 * Support window mode
 * @enum {number}
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export enum SupportWindowMode {
  /**
   * Indicates supported window mode of full screen mode
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  FULL_SCREEN = 0,
  /**
   * Indicates supported window mode of split mode
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  SPLIT = 1,
  /**
   * Indicates supported window mode of floating mode
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  FLOATING = 2,
}

/**
 * Launch type
 * @enum {number}
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export enum LaunchType {
  /**
   * Indicates that the ability has only one instance
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  SINGLETON = 0,

  /**
   * Indicates that the ability can have multiple instances
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  STANDARD = 1,

  /**
   * Indicates that the ability can have specified instances
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  SPECIFIED = 2,
}

/**
 * Indicates ability type
 * @enum {number}
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export enum AbilityType {
  /**
   * Indicates an unknown ability type
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  UNKNOWN,

  /**
   * Indicates that the ability has a UI
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  PAGE,

  /**
   * Indicates that the ability does not have a UI
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  SERVICE,

  /**
   * Indicates that the ability is used to provide data access services
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  DATA,
}


/**
 * Display orientation
 * @enum {number}
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export enum DisplayOrientation {
  /**
   * Indicates that the system automatically determines the display orientation
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  UNSPECIFIED,

  /**
   * Indicates the landscape orientation
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  LANDSCAPE,

  /**
   * Indicates the portrait orientation
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  PORTRAIT,

  /**
   * Indicates the page ability orientation is the same as that of the nearest ability in the stack
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  FOLLOW_RECENT,

  /**
   * Indicates the inverted landscape orientation
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  LANDSCAPE_INVERTED,

  /**
   * Indicates the inverted portrait orientation
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  PORTRAIT_INVERTED,

  /**
   * Indicates the orientation can be auto-rotated
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  AUTO_ROTATION,

  /**
   * Indicates the landscape orientation rotated with sensor
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  AUTO_ROTATION_LANDSCAPE,

  /**
   * Indicates the portrait orientation rotated with sensor
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  AUTO_ROTATION_PORTRAIT,

  /**
   * Indicates the sensor restricted mode
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  AUTO_ROTATION_RESTRICTED,

  /**
   * Indicates the sensor landscape restricted mode
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  AUTO_ROTATION_LANDSCAPE_RESTRICTED,

  /**
   * Indicates the sensor portrait restricted mode
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  AUTO_ROTATION_PORTRAIT_RESTRICTED,

  /**
   * Indicates the locked orientation mode
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  LOCKED,
}
