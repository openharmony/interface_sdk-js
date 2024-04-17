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
 * This module provides the capability to manage the applications of the enterprise devices.
 *
 * @namespace applicationManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace applicationManager {
  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run.
   * @param { number } userId - userId indicates the user ID.
   * @returns { Promise<void> } the promise returned by the addDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Add appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run.
   * @param { number } [accountId] - accountId indicates the account ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function addDisallowedRunningBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run.
   * @param { number } userId - userId indicates the user ID.
   * @returns { Promise<void> } the promise returned by the removeDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Remove appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle are disallowed to run.
   * @param { number } [accountId] - accountId indicates the user ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function removeDisallowedRunningBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Get appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getDisallowedRunningBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback of getDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getDisallowedRunningBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } userId - userId indicates the user ID.
   * @returns { Promise<Array<string>> } the promise returned by the getDisallowedRunningBundles.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getDisallowedRunningBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Get appid list of bundles that is disallowed to run in the device.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [accountId] - accountId indicates the user ID.
   * @returns { Array<string> } ids of the bundle are disallowed to run.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function getDisallowedRunningBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * Adds auto start applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<Want> } autoStartApps - autoStartApps indicates the information of auto start app ability.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addAutoStartApps(admin: Want, autoStartApps: Array<Want>): void;

  /**
   * Removes auto start applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<Want> } autoStartApps - autoStartApps indicates the information of auto start app ability.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>): void;

  /**
   * Gets information of auto start applications.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Array<Want> } the information of auto start applications.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAutoStartApps(admin: Want): Array<Want>;
}

export default applicationManager;