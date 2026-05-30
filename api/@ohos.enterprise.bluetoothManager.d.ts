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
 * The **bluetoothManager** module provides Bluetooth management capabilities, including setting and obtaining Bluetooth
 * information.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 * >
 * > The global restriction policies are provided by **restrictions**. To disable Bluetooth globally, see
 * > [@ohos.enterprise.restrictions]{@link @ohos.enterprise.restrictions:restrictions}.
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 11
 */
declare namespace bluetoothManager {
  /**
   * Represents the device Bluetooth information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface BluetoothInfo {
    /**
     * Bluetooth name of the device.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    name: string;

    /**
     * Bluetooth state of the device.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    state: access.BluetoothState;

    /**
     * Bluetooth profile connection state of the device.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    connectionState: constant.ProfileConnectionState;
  }

  /**
   * Represents the Bluetooth protocol type.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  export enum Protocol {
    /**
     * [Generic Attribute Profile (GATT)](docroot://connectivity/terminology.md#gatt)
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    GATT = 0,

    /**
     * [Serial Port Profile (SPP)](docroot://connectivity/terminology.md#spp)
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    SPP = 1,

    /**
     * [Object Push Profile (OPP)](docroot://connectivity/terminology.md#opp)
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    OPP = 2
  }

  /**
   * The transfer policy.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  export enum TransferPolicy {
    /**
     * Send only.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SEND_ONLY = 0,

    /**
     * Receive only.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RECEIVE_ONLY = 1,

    /**
     * Receive and send.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RECEIVE_SEND = 2
  }

  /**
   * Obtains device Bluetooth information.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { BluetoothInfo } Bluetooth information, including the Bluetooth name, state, and profile connection
   *     state.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getBluetoothInfo(admin: Want): BluetoothInfo;

  /**
   * Sets the policy for disabling Bluetooth.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disabled - Whether to disable Bluetooth. The value **true** means to disable Bluetooth;
   *     **false** means the opposite.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function setBluetoothDisabled(admin: Want, disabled: boolean): void;

  /**
   * Queries whether Bluetooth is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { boolean } Returns **true** if Bluetooth is disabled; returns **false** otherwise.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  function isBluetoothDisabled(admin: Want): boolean;

  /**
   * Adds Bluetooth devices to the trustlist. After adding devices to this list, the current device will only be allowed
   * to connect to Bluetooth devices in the list. Since API version 22, the MAC addresses in the array must comply with
   * the Bluetooth MAC address specifications (for example, 00:1A:2B:3C:4D:5E). Invalid MAC addresses will be removed
   * and only valid MAC addresses will be added.
   *
   * A policy conflict is reported when this API is called in the following scenarios:
   *
   * 1. Bluetooth has been disabled by calling [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}.
   * You can resolve the conflict by enabling the Bluetooth through [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}.
   * 2. Disallowed Bluetooth devices have been added by calling [addDisallowedBluetoothDevices]{@link bluetoothManager.addDisallowedBluetoothDevices}.
   * You can resolve the conflict by removing disallowed Bluetooth devices through [removeDisallowedBluetoothDevices]{@link bluetoothManager.removeDisallowedBluetoothDevices}.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } deviceIds - MAC addresses of the Bluetooth devices to add. The maximum number of allowed
   *     Bluetooth devices is 1,000. If there are already 300 MAC addresses of the devices, only 700 more can be added.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addAllowedBluetoothDevices(admin: Want, deviceIds: Array<string>): void;

  /**
   * Removes allowed Bluetooth devices.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } deviceIds - MAC addresses of the Bluetooth devices to remove.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeAllowedBluetoothDevices(admin: Want, deviceIds: Array<string>): void;

  /**
   * Obtains allowed Bluetooth devices.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<string> } MAC addresses of allowed Bluetooth devices obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAllowedBluetoothDevices(admin: Want): Array<string>;

  /**
   * Enables Bluetooth. After Bluetooth is enabled, the user can manually disable it.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function turnOnBluetooth(admin: Want): void;

  /**
   * Disables Bluetooth. After Bluetooth is disabled, the user can manually enable it.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function turnOffBluetooth(admin: Want): void;

  /**
   * Adds Bluetooth devices to the blocklist. The current device cannot connect to the disallowed Bluetooth devices.
   * Since API version 22, the MAC addresses in the array must comply with the Bluetooth MAC address specifications (for
   * example, 00:1A:2B:3C:4D:5E). Invalid MAC addresses will be removed and only valid MAC addresses will be added.
   *
   * A policy conflict is reported when this API is called in the following scenarios:
   *
   * 1. Bluetooth has been disabled by calling [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}.
   * You can resolve the conflict by enabling the Bluetooth through [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}.
   * 2. Allowed Bluetooth devices have been added by calling [addAllowedBluetoothDevices]{@link bluetoothManager.addAllowedBluetoothDevices}.
   * You can resolve the conflict by removing allowed Bluetooth devices through [removeAllowedBluetoothDevices]{@link bluetoothManager.removeAllowedBluetoothDevices}.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } deviceIds - MAC addresses of the Bluetooth devices to add. The maximum number of
   *     disallowed Bluetooth devices is 1,000. If there are already 300 MAC addresses of the devices, only 700 more can
   *     be added.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addDisallowedBluetoothDevices(admin: Want, deviceIds: Array<string>): void;

  /**
   * Removes disallowed Bluetooth devices. If some Bluetooth devices are removed from the disallowed list, the current
   * device cannot connect to the remaining ones; if all Bluetooth devices are removed, the current device can connect
   * to any Bluetooth device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<string> } deviceIds - MAC addresses of the Bluetooth devices to remove.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeDisallowedBluetoothDevices(admin: Want, deviceIds: Array<string>): void;

  /**
   * Obtains disallowed Bluetooth devices.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Array<string> } MAC addresses of disallowed Bluetooth devices obtained.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getDisallowedBluetoothDevices(admin: Want): Array<string>;

  /**
   * Adds disallowed Bluetooth protocols. Specified users cannot use the disallowed Bluetooth protocols to send files to
   * other devices. This API is used to disable the GATT or SPP protocol, which does not take effect for system services
   * and system applications.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the account ID.
   * @param { Array<Protocol> } protocols - Bluetooth protocol array, which has a maximum length of 10,000.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addDisallowedBluetoothProtocols(admin: Want, accountId: number,  protocols: Array<Protocol>): void;

  /**
   * Removes disallowed Bluetooth protocols. After removing some protocols, the user is still restricted by the
   * remaining disallowed protocols; after removing all protocols, the user can use any protocol; removing non-existent
   * protocols results in a successful API call but no actual change.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the account ID.
   * @param { Array<Protocol> } protocols - Bluetooth protocol array.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeDisallowedBluetoothProtocols(admin: Want, accountId: number, protocols: Array<Protocol>): void;

  /**
   * Obtains the disallowed Bluetooth protocols of a specified user.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { number } accountId - Account ID, which must be greater than or equal to 0.<br> You can call
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()} of @
   *     ohos.account.osAccount to obtain the account ID.
   * @returns { Array<Protocol> } Array of disallowed Bluetooth protocols.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getDisallowedBluetoothProtocols(admin: Want, accountId: number): Array<Protocol>;

  /**
   * Adds protocols to the list of bluetooth server that are disallowed to use.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { number } accountId - accountId indicates the local ID of the OS account
   *     <br>The value must be an integer greater than or equal to 0.
   * @param { Array<Protocol> } protocols - protocols of the bluetooth to be added to the list
   *     <br>The maximum length is 10000 and cannot be empty.
   * @param { TransferPolicy } policy - policy indicates the policy of transfer.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addDisallowedBluetoothProtocols(admin: Want, accountId: number, protocols: Array<Protocol>, policy: TransferPolicy): void;

  /**
   * Removes protocol from the list of bluetooth server that are disallowed to use.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - admin indicates the enterprise admin extension ability information.
   * @param { number } accountId - accountId indicates the local ID of the OS account
   *     <br>The value must be an integer greater than or equal to 0.
   * @param { Array<Protocol> } protocols - protocols of the bluetooth to be added to the list
   *     <br>The maximum length is 10000.
   * @param { TransferPolicy } policy - policy indicates the policy of transfer.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeDisallowedBluetoothProtocols(admin: Want, accountId: number, protocols: Array<Protocol>, policy: TransferPolicy): void;

  /**
   * Gets protocols from the list of bluetooth server that are disallowed to use.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want | null } admin - admin indicates the enterprise admin extension ability information.
   * @param { number } accountId - accountId indicates the local ID of the OS account
   *     <br>The value must be an integer greater than or equal to 0.
   * @param { TransferPolicy } policy - policy indicates the policy of transfer.
   * @returns { Array<Protocol> } protocol of the bluetooth list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDisallowedBluetoothProtocols(admin: Want | null, accountId: number, policy: TransferPolicy): Array<Protocol>;
}

export default bluetoothManager;