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

import type Want from './@ohos.app.ability.Want';
import type constant from './@ohos.bluetooth.constant';
import type access from './@ohos.bluetooth.access';

/**
 * This module provides the capability to manage the bluetooth of the enterprise devices.
 *
 * @namespace bluetoothManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 11
 */
declare namespace bluetoothManager {
  /**
   * The information of device bluetooth.
   *
   * @typedef BluetoothInfo
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface BluetoothInfo {
    /**
     * The name of bluetooth.
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    name: string;

    /**
     * The state of bluetooth.
     *
     * @type { access.BluetoothState }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    state: access.BluetoothState;

    /**
     * The state of bluetooth connection
     *
     * @type { constant.ProfileConnectionState }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    connectionState: constant.ProfileConnectionState;
  }

  /**
   * Gets bluetooth information.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { BluetoothInfo } the bluetooth information.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getBluetoothInfo(admin: Want): BluetoothInfo;

  /**
   * Disables the bluetooth.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { boolean } disabled - true if disable the bluetooth, otherwise false.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function setBluetoothDisabled(admin: Want, disabled: boolean): void;

  /**
   * Gets state of whether the bluetooth is disabled.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { boolean } true if the bluetooth is disabled, otherwise false.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function isBluetoothDisabled(admin: Want): boolean;
}

export default bluetoothManager;
