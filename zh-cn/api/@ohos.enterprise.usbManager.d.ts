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
 * 本模块提供USB管理能力。
 *
 * > **说明**：
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 * >
 * > 全局通用限制类策略由restrictions统一提供，若要全局禁用USB，请参考
 * > [@ohos.enterprise.restrictions（限制类策略）]{@link @ohos.enterprise.restrictions:restrictions}。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace usbManager {
  /**
   * USB读写策略的枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export enum UsbPolicy {
    /**
     * 可读可写。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    READ_WRITE = 0,

    /**
     * 只读。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    READ_ONLY = 1,

    /**
     * 禁用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DISABLED = 2
  }

  /**
   * USB设备ID信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface UsbDeviceId {
    /**
     * 厂商ID。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    vendorId: number;

    /**
     * 产品ID。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    productId: number;
  }

  /**
   * USB描述符的枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  enum Descriptor {
    /**
     * 接口描述符。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    INTERFACE = 0,

    /**
     * 设备描述符。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    DEVICE = 1
  }

  /**
   * USB设备类型信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  export interface UsbDeviceType {
    /**
     * 类型编码。
     *
     * 可通过[getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取已接入主设备的USB设备列表，需在返回值列表中查找当前设备，查看其值。
     *
     * 先根据此值确定descriptor应该传入的类型。若descriptor为DEVICE，则本字段取USBDevice.clazz字段值，若descriptor为INTERFACE，则本字段取
     * USBDevice.configs.interfaces.clazz字段值。
     *
     * 若字段值为255，表示此设备的类型编码是厂商自定义编码，则使用[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices}接口禁用/解禁该设备不生效；若字段值未在
     * [defined-class-codes](https://www.usb.org/defined-class-codes)中定义，则使用
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices}接口禁用/解禁该设备不生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    baseClass: number;

    /**
     * 子类型编码。
     *
     * 可通过[getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取已接入主设备的USB设备列表，需在返回值列表中查找当前设备，查看其值。
     *
     * 先根据baseClass的值确定descriptor应该传入的类型。若descriptor为DEVICE，则本字段取USBDevice.subClass字段值，若descriptor为INTERFACE，则本字段取
     * USBDevice.configs.interfaces.subClass字段值。
     *
     * 若字段值为255，表示此设备的子类型编码是厂商自定义编码，则使用[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices}接口禁用/解禁该设备不生效；若字段值未在
     * [defined-class-codes](https://www.usb.org/defined-class-codes)中定义，则使用
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices}接口禁用/解禁该设备不生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    subClass: number;

    /**
     * 协议编码。
     *
     * 可通过[getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取已接入主设备的USB设备列表，需在返回值列表中查找当前设备，查看其值。
     *
     * 先根据baseClass的值确定descriptor应该传入的类型。若descriptor为DEVICE，则本字段取USBDevice.protocol字段值，若descriptor为INTERFACE，则本字段取
     * USBDevice.configs.interfaces.protocol字段值。
     *
     * 若字段值为255，表示此设备的协议编码是厂商自定义编码，则使用[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices}接口禁用/解禁该设备不生效；若字段值未在
     * [defined-class-codes](https://www.usb.org/defined-class-codes)中定义，则使用
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices}接口禁用/解禁该设备不生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    protocol: number;

    /**
     * USB描述符。
     *
     * 可通过[getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取已接入主设备的USB设备列表，需在返回值列表中查找当前设备，查看其值。
     *
     * 若此值USBDevice.clazz字段值为0，则须在[defined-class-codes](https://www.usb.org/defined-class-codes)中的Base Class列查找此值
     * USBDevice.configs.interfaces.clazz字段值，查找结果所在行所对应的Descriptor Usage列就表示当前应该传入的descriptor类型（若Descriptor Usage列为Both，
     * 表示两种类型都可以传入，需要设备级禁用时传入DEVICE，需要接口级禁用时传入INTERFACE）;
     *
     * 若此值USBDevice.clazz字段值为255，表示此设备的类型编码是厂商自定义编码，则使用
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices}接口禁用/解禁该设备不生效；若此值USBDevice.clazz字段值为其他值，
     * 则须在[defined-class-codes](https://www.usb.org/defined-class-codes)中的Base Class列查找该值，查找结果所在行所对应的Descriptor Usage列就表
     * 示当前应该传入的descriptor类型（若Descriptor Usage列为Both，表示两种类型都可以传入，需要设备级禁用时传入DEVICE，需要接口级禁用时传入INTERFACE）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    descriptor: Descriptor;
  }

  /**
   * 设置USB的读写策略。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { UsbPolicy } usbPolicy - USB读写策略（此接口只支持READ_WRITE和READ_ONLY）。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
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
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead usbManager.setUsbStorageDeviceAccessPolicy
   */
  function setUsbPolicy(admin: Want, usbPolicy: UsbPolicy, callback: AsyncCallback<void>): void;

  /**
   * 设置USB的读写策略。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { UsbPolicy } usbPolicy - USB读写策略（此接口只支持READ_WRITE和READ_ONLY）。
   * @returns { Promise<void> } 无返回结果的Promise对象。当设置USB策略失败时抛出错误对象。
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
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead usbManager.setUsbStorageDeviceAccessPolicy
   */
  function setUsbPolicy(admin: Want, usbPolicy: UsbPolicy): Promise<void>;

  /**
   * 设置禁用或启用USB。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disable - 是否禁用USB设备，true表示禁用，false表示不禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
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
  function disableUsb(admin: Want, disable: boolean): void;

  /**
   * 查询USB是否禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } 返回true表示USB被禁用。<br/>返回false表示USB未被禁用。
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
  function isUsbDisabled(admin: Want): boolean;

  /**
   * 添加USB设备可用名单。
   *
   * 以下情况下，调用本接口会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备USB或者USB转串口能力。
   * 2. 已经通过[setUsbStorageDeviceAccessPolicy]{@link usbManager.setUsbStorageDeviceAccessPolicy}接口设置了USB存储设备访问策略为禁用。
   * 3. 已经通过[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口添加了禁止使用的USB设备类型。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<UsbDeviceId> } usbDeviceIds - USB设备ID数组，UsbDeviceId信息可以通过
   *     [getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取。USB设备可用名单数组长度上限为1000，若当前允许名单中已有300个USB设备ID，则只允许再
   *     添加700个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void;

  /**
   * 移除USB设备可用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<UsbDeviceId> } usbDeviceIds - USB设备ID数组，UsbDeviceId信息可以通过
   *     [getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取。
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
  function removeAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void;

  /**
   * 获取USB设备可用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<UsbDeviceId> } 可用USB允许名单设备ID数组。
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
  function getAllowedUsbDevices(admin: Want): Array<UsbDeviceId>;

  /**
   * 设置USB存储设备访问策略。
   *
   * > **说明**：
   * > > 在调用接口前，确保已暂停USB存储设备的读写操作，保证操作的稳定性和数据的完整性，否则可能出现不可预期的异常。
   *
   * 以下情况下，通过本接口设置USB存储设备访问策略为可读可写/只读，会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备USB能力。
   * 2. 已经通过[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口将存储类型的USB设备添加为禁止使用的USB设备类型。
   * 3. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}接口禁用了某用户USB存储设备写入能力。
   *
   * 以下情况下，通过本接口设置USB存储设备访问策略为禁用，会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备USB能力。
   * 2. 已经通过[addAllowedUsbDevices]{@link usbManager.addAllowedUsbDevices}接口添加了USB设备可用名单。
   * 3. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}接口禁用了某用户USB存储设备写入能力。
   *
   * 通过本接口设置，或者通过[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口添加存储类型的USB设备，均可禁用USB存储设备。推荐使用后者。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB [since 12 - 24]
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 26.0.0]
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { UsbPolicy } usbPolicy - USB存储设备访问策略。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function setUsbStorageDeviceAccessPolicy(admin: Want, usbPolicy: UsbPolicy): void;

  /**
   * 获取USB存储设备访问策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB [since 12 - 24]
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB  or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 26.0.0]
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { UsbPolicy } USB存储设备访问策略。
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
  function getUsbStorageDeviceAccessPolicy(admin: Want): UsbPolicy;

  /**
   * 添加禁止使用的USB设备类型。
   *
   * 以下情况下，调用本接口会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备USB能力。
   * 2. 已经通过[addAllowedUsbDevices]{@link usbManager.addAllowedUsbDevices}接口添加了USB设备可用名单。
   * 3. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}接口禁用了某用户USB存储设备写入能力。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<UsbDeviceType> } usbDevices - 要添加的USB设备类型的数组，UsbDeviceType信息可以通过
   *     [getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取。USB设备禁用名单数组长度上限为200，若当前禁用名单中已有100个USB设备ID，则只允许再添
   *     加100个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function addDisallowedUsbDevices(admin: Want, usbDevices: Array<UsbDeviceType>): void;

  /**
   * 移除禁止使用的USB设备类型。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<UsbDeviceType> } usbDevices - 要移除的USB设备类型的数组，UsbDeviceType信息可以通过
   *     [getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function removeDisallowedUsbDevices(admin: Want, usbDevices: Array<UsbDeviceType>): void;

  /**
   * 获取禁止使用的USB设备类型。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<UsbDeviceType> } 禁止使用的USB设备类型。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function getDisallowedUsbDevices(admin: Want): Array<UsbDeviceType>;
}

export default usbManager;