/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import * as _EnterpriseAdminExtensionContext from './application/EnterpriseAdminExtensionContext';

/**
 * The module provides pure type definitions for common capabilities within MDM Kit, including enum types and data
 * structs. It exports type declarations only and does not include any implementation logic or executable code.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 22
 */
declare namespace common {
  /**
   * Defines application instance data.
   *
   * It is used as an input parameter in the
   * [addUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.addUserNonStopApps},
   * [removeUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeUserNonStopApps},
   * [addFreezeExemptedApps]{@link @ohos.enterprise.applicationManager:applicationManager.addFreezeExemptedApps}, and
   * [removeFreezeExemptedApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeFreezeExemptedApps}
   * APIs.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  export interface ApplicationInstance {
    /**
     * [Unique identifier]{@link ./bundleManager/BundleInfo:SignatureInfo} of an application. You can call the
     * [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
     * API to obtain **bundleInfo.signatureInfo.appIdentifier**.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    appIdentifier: string;

    /**
     * Account ID. The value is an integer greater than or equal to 0.
     * You can obtain the account ID by calling the
     * [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} API.
     * The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    accountId: number;

    /**
     * Index of the application clone. The value is an integer greater than or equal to 0.
     * You can obtain the index by calling the
     * [getAppCloneIdentity]{@link @ohos.bundle.bundleManager:bundleManager.getAppCloneIdentity} API.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    appIndex: number;
  }

  /**
   * Enumerates enterprise device management policies.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  export enum ManagedPolicy {
    /**
     * Default policy with no restrictions applied.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    DEFAULT = 0,

    /**
     * Policy that disallows extensions from external sources to run.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    DISALLOW = 1,

    /**
     * Policy that forcibly enables extensions from external sources to run.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    FORCE_OPEN = 2
  }

  /**
   * Enumerates application installation results.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  export enum Result {
    /**
     * The application is installed successfully.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    SUCCESS = 0,

    /**
     * The application fails to be installed.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    FAIL = -1
  }

  /**
   * An object that holds the application installation result.
   *
   * This object is used as a callback parameter in
   * [EnterpriseAdminExtensionAbility.onMarketAppInstallResult]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onMarketAppInstallResult}
   * .
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  export interface InstallationResult {
    /**
     * Application installation result.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    result: Result;

    /**
     * Application installation result message.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 22
     */
    message: string;
  }

  /**
   * Startup wizard completion scenario. When the initial switch to a sub-user (only on PCs), OTA upgrade, and first-
   * time startup wizard are complete, the device system calls the
   * [onStartupGuideCompleted]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility.onStartupGuideCompleted}
   * API to notify the device administrator application.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  export enum StartupScene {
    /**
     * A sub-user is switched to for the first time and the startup wizard for the sub-user is complete (only on PCs).
     * The callback will not be triggered when the sub-user is switched again.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    USER_SETUP = 0,

    /**
     * The OTA upgrade is complete.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    OTA = 1,

    /**
     * The initial startup wizard is complete.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    DEVICE_PROVISION = 2
  }

  /**
   * The policy event.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  export interface PolicyChangedEvent {
    /**
     * The bundle name of the application that sets the policy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    bundleName : string;

    /**
     * The function name for setting policy.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    functionName : string;

    /**
     * The JSON string containing policy parameters.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    parameters: string;

    /**
     * The timestamp when the policy was set.
     * Unit: milliseconds, The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    time: number;
  }

  /**
   * EnterpriseAdminExtensionContext is the context of
   * [EnterpriseAdminExtensionAbility]{@link @ohos.enterprise.EnterpriseAdminExtensionAbility:EnterpriseAdminExtensionAbility}
   * and inherits from [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  export type EnterpriseAdminExtensionContext = _EnterpriseAdminExtensionContext.default;
}

export default common;