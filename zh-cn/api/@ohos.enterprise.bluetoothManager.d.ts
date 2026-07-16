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
 * 本模块提供设备蓝牙管理的能力，包括设置和查询蓝牙信息等。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 * >
 * > 全局通用限制类策略由restrictions统一提供，若要全局禁用蓝牙，请参考
 * > [@ohos.enterprise.restrictions （限制类策略）]{@link @ohos.enterprise.restrictions:restrictions}。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 11
 */
declare namespace bluetoothManager {
  /**
   * 设备的蓝牙信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface BluetoothInfo {
    /**
     * 表示设备的蓝牙名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    name: string;

    /**
     * 表示设备的蓝牙状态。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    state: access.BluetoothState;

    /**
     * 表示设备的蓝牙连接状态。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    connectionState: constant.ProfileConnectionState;
  }

  /**
   * 蓝牙协议类型。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  export enum Protocol {
    /**
     * [GATT协议](docroot://connectivity/terminology.md#gatt)。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    GATT = 0,

    /**
     * [SPP协议](docroot://connectivity/terminology.md#spp)。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    SPP = 1,

    /**
     * [OPP协议](docroot://connectivity/terminology.md#opp)。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    OPP = 2
  }

  /**
   * 传输策略。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  export enum TransferPolicy {
    /**
     * 禁止发送。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SEND_ONLY = 0,

    /**
     * 禁止接收。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RECEIVE_ONLY = 1,

    /**
     * 禁止发送和接收。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RECEIVE_SEND = 2
  }

  /**
   * 查询设备蓝牙信息。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { BluetoothInfo } 蓝牙信息，包含蓝牙名称、蓝牙状态和蓝牙连接状态。
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
   * 设置禁用蓝牙策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁用蓝牙，false表示解除蓝牙禁用。
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
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setBluetoothDisabled(admin: Want, disabled: boolean): void;

  /**
   * 查询蓝牙是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } 返回蓝牙禁用状态，true表示蓝牙被禁用，false表示蓝牙未被禁用。
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
   * @deprecated since 26.0.0
   * @useinstead @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isBluetoothDisabled(admin: Want): boolean;

  /**
   * 添加蓝牙设备可用名单。添加蓝牙设备可用名单后当前设备仅允许连接该名单下的蓝牙设备。从API version 22开始，数组中的MAC地址必须符合蓝牙MAC规范（例如：00:1A:2B:3C:4D:5E），添加时会移除不合法的MAC
   * 地址，仅添加合法的MAC地址。
   *
   * 以下情况下，通过本接口添加蓝牙设备可用名单，会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了蓝牙。通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口启用蓝牙后，可解除冲突。
   * 2. 已经通过[addDisallowedBluetoothDevices]{@link bluetoothManager.addDisallowedBluetoothDevices}接口添加了蓝牙设备禁用名单。通过[removeDisallowedBluetoothDevices]{@link bluetoothManager.removeDisallowedBluetoothDevices}移除蓝牙设备禁用名单后，可解除冲突。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } deviceIds - 蓝牙设备MAC地址的数组。蓝牙设备允许名单数组长度上限为1000，若当前允许名单中已有300个蓝牙设备MAC地址，则只允许再添加700个。
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
   * 移除蓝牙设备可用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } deviceIds - 蓝牙设备MAC地址的数组。
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
   * 获取蓝牙设备可用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<string> } 可用名单中蓝牙设备MAC地址的数组。
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
   * 开启蓝牙。蓝牙开启后用户可以手动关闭。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
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
   * 关闭蓝牙。蓝牙关闭后用户可以手动打开。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
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
   * 添加蓝牙设备禁用名单。添加禁用名单后当前设备不允许连接该名单下的蓝牙设备。从API version 22开始，数组中的MAC地址必须符合蓝牙MAC规范（例如：00:1A:2B:3C:4D:5E），添加时会移除不合法的MAC地址，仅
   * 添加合法的MAC地址。
   *
   * 以下情况下，通过本接口添加蓝牙设备禁用名单，会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了蓝牙。通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口启用蓝牙后，可解除冲突。
   * 2. 已经通过[addAllowedBluetoothDevices]{@link bluetoothManager.addAllowedBluetoothDevices}接口添加了蓝牙设备可用名单。通过[removeAllowedBluetoothDevices]{@link bluetoothManager.removeAllowedBluetoothDevices}移除蓝牙设备可用名单后，可解除冲突。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } deviceIds - 蓝牙设备MAC地址的数组。蓝牙设备禁用名单数组长度上限为1000，若当前禁用名单中已有300个蓝牙设备MAC地址，则只允许再添加700个。
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
   * 移除蓝牙设备禁用名单。若移除禁用名单中的部分蓝牙设备，则当前设备不允许连接禁用名单内剩余的蓝牙设备。若移除禁用名单中的所有蓝牙设备，则当前设备可以连接任意的蓝牙设备。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } deviceIds - 蓝牙设备MAC地址的数组。
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
   * 获取蓝牙设备禁用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<string> } 禁用名单中蓝牙设备MAC地址的数组。
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
   * 添加蓝牙协议禁用名单。添加后，指定用户将无法使用该禁用名单中的蓝牙协议向其他设备外发文件。通过该接口禁用GATT或SPP协议，对系统服务和系统应用不生效。当传入SPP协议时，会同时禁用接收和发送功能。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { Array<Protocol> } protocols - 蓝牙协议的数组。数组长度上限为10000。
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
   * 移除蓝牙协议禁用名单。若移除禁用名单中某个用户的部分蓝牙协议，则该用户不能使用禁用名单内剩余的蓝牙协议向其他设备外发文件。若移除禁用名单中某个用户的所有蓝牙协议，则该用户可以使用任意蓝牙协议向其他设备外发文件。若移除禁用名单中不存
   * 在的蓝牙协议，接口可调用成功，但不会移除禁用名单中不存在的蓝牙协议。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { Array<Protocol> } protocols - 蓝牙协议的数组。
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
   * 获取指定用户的蓝牙协议禁用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Array<Protocol> } 禁用名单中蓝牙协议的数组。
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
   * 添加蓝牙协议至禁用名单。添加后，指定用户将无法根据指定的传输策略使用该禁用名单中的蓝牙协议。
   *
   * > **说明：**
   * >
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { Array<Protocol> } protocols - 蓝牙协议数组，指定需要添加至禁用名单的协议。
   * @param { TransferPolicy } policy - 传输策略。
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
   * 从禁用名单中移除蓝牙协议。移除后，指定用户将不再受该传输策略的限制，可以正常使用这些蓝牙协议。
   *
   * > **说明：**
   * >
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { Array<Protocol> } protocols - 蓝牙协议数组，指定需要从禁用名单中移除的协议。
   * @param { TransferPolicy } policy - 传输策略。
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
   * 获取指定用户指定传输策略下已禁用的蓝牙协议列表。
   *
   * > **说明：**
   * >
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - <br>不合法的值区间: [0, +。
   *     - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { TransferPolicy } policy - 传输策略。
   * @returns { Array<Protocol> } 返回禁用名单中的蓝牙协议数组。
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