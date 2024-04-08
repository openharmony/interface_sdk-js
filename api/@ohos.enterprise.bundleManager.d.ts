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
 * This module provides the capability to manage the bundles of the enterprise devices.
 *
 * @namespace bundleManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace bundleManager {
  /**
   * Provides parameters required for installing an application.
   *
   * @typedef InstallParam
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  interface InstallParam {
    /**
     * Indicates the user id
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @StageModelOnly
     * @since 12
     */
    userId?: number;

    /**
     * Indicates the install flag, which 0 for first install, 1 for cover install
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @StageModelOnly
     * @since 12
     */
    installFlag?: number;
  }

  /**
   * Add appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { AsyncCallback<void> } callback - the callback of addAllowedInstallBundles.
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
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of addAllowedInstallBundles.
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
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the addAllowedInstallBundles.
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
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Add appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } [accountId] - accountId indicates the account ID or do not pass account ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function addAllowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Remove appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { AsyncCallback<void> } callback - the callback of removeAllowedInstallBundles.
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
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeAllowedInstallBundles.
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
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the removeAllowedInstallBundles.
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
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Remove appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } [accountId] - accountId indicates the account ID or do not pass account ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function removeAllowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Get the appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<Array<string>> } callback - the callback that contains the appid list.
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
  function getAllowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get the appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback that contains the appid list.
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
  function getAllowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<Array<string>> } the promise that contains the appid list.
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
  function getAllowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Get appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [accountId] - accountId indicates the account ID or do not pass account ID.
   * @returns { Array<string> } ids of the bundle that can be installed.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function getAllowedInstallBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * Add appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be installed.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedInstallBundles.
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
  function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be installed.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedInstallBundles.
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
  function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be installed.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the addDisallowedInstallBundles.
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
  function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Add appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be installed.
   * @param { number } [accountId] - accountId indicates the account ID or do not pass account ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function addDisallowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Remove appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be installed.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedInstallBundles.
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
  function removeDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be installed.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedInstallBundles.
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
  function removeDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be installed.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the removeDisallowedInstallBundles.
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
  function removeDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Remove appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be installed.
   * @param { number } [accountId] - accountId indicates the account ID or do not pass account ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function removeDisallowedInstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Get the appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<Array<string>> } callback - the callback that contains the appid list.
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
  function getDisallowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get the appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback that contains the appid list.
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
  function getDisallowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<Array<string>> } the promise that contains the appid list.
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
  function getDisallowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Get appid list of bundles that can not be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [accountId] - accountId indicates the account ID or do not pass account ID.
   * @returns { Array<string> } ids of the bundle that can not be installed.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function getDisallowedInstallBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * Add appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be uninstalled.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedUninstallBundles.
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
  function addDisallowedUninstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be uninstalled.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of addDisallowedUninstallBundles.
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
  function addDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be uninstalled.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the addDisallowedUninstallBundles.
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
  function addDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Add appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be uninstalled.
   * @param { number } [accountId] - accountId indicates the account ID or do not pass account ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function addDisallowedUninstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Remove appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be uninstalled.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedUninstallBundles.
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
  function removeDisallowedUninstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be uninstalled.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeDisallowedUninstallBundles.
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
  function removeDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be uninstalled.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the removeDisallowedUninstallBundles.
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
  function removeDisallowedUninstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Remove appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can not be uninstalled.
   * @param { number } [accountId] - accountId indicates the account ID or do not pass account ID.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function removeDisallowedUninstallBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * Get the appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<Array<string>> } callback - the callback that contains the appid list.
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
  function getDisallowedUninstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get the appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback that contains the appid list.
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
  function getDisallowedUninstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<Array<string>> } the promise that contains the appid list.
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
  function getDisallowedUninstallBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * Get appid list of bundles that can not be uninstalled in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [accountId] - accountId indicates the account ID or do not pass account ID.
   * @returns { Array<string> } ids of the bundle that can not be uninstalled.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function getDisallowedUninstallBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * Uninstall an application.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } bundleName - indicates the bundle name of the application to be uninstalled.
   * @param { AsyncCallback<void> } callback - the callback of uninstalling application result.
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
  function uninstall(admin: Want, bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Uninstall an application.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } bundleName - Indicates the bundle name of the application to be uninstalled.
   * @param { number } userId - userId indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<void> } callback - the callback of uninstalling application result.
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
  function uninstall(admin: Want, bundleName: string, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Uninstall an application.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } bundleName - Indicates the bundle name of the application to be uninstalled.
   * @param { boolean } isKeepData - isKeepData indicates whether keep the data.
   * @param { AsyncCallback<void> } callback - the callback of uninstalling application result.
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
  function uninstall(admin: Want, bundleName: string, isKeepData: boolean, callback: AsyncCallback<void>): void;

  /**
   * Uninstall an application.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } bundleName - indicates the bundle name of the application to be uninstalled.
   * @param { number } userId - userId indicates the user ID or do not pass user ID.
   * @param { boolean } isKeepData - isKeepData indicates whether keep the data.
   * @param { AsyncCallback<void> } callback - the callback of uninstalling application result.
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
  function uninstall(admin: Want, bundleName: string, userId: number, isKeepData: boolean, callback: AsyncCallback<void>): void;

  /**
   * Uninstall an application.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { string } bundleName - indicates the bundle name of the application to be uninstalled.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @param { boolean } [isKeepData] - isKeepData indicates whether keep the data.
   * @returns { Promise<void> } the promise of uninstalling application result.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function uninstall(admin: Want, bundleName: string, userId?: number, isKeepData?: boolean): Promise<void>;

  /**
   * Install an application.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } hapFilePaths - indicates the path of the application to be installed.
   * @param { AsyncCallback<void> } callback - the callback of installing application result.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - the application install failed.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function install(admin: Want, hapFilePaths: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Install an application.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } hapFilePaths - indicates the path of the application to be installed.
   * @param { InstallParam } installParam - installParam indicates the install parameters.
   * @param { AsyncCallback<void> } callback - the callback of installing application result.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - the application install failed.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function install(admin: Want, hapFilePaths: Array<string>, installParam: InstallParam, callback: AsyncCallback<void>): void;

  /**
   * Install an application.
   *
   * @permission ohos.permission.ENTERPRISE_INSTALL_BUNDLE
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } hapFilePaths - indicates the path of the application to be installed.
   * @param { InstallParam } [installParam] - installParam indicates the install parameters.
   * @returns { Promise<void> } the promise of installing application result.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201002 - the application install failed.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function install(admin: Want, hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>;
}

export default bundleManager;
