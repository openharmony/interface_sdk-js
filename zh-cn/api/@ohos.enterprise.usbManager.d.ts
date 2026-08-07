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
 * @file USB管理
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * 本模块提供USB管理能力。
 *
 * > **说明：**
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 * >
 * > 全局通用限制类策略由restrictions统一提供，若要全局禁用USB，请参考
 * > [@ohos.enterprise.restrictions（限制类策略）]{@link @ohos.enterprise.restrictions:restrictions}。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi [since 10 - 11]
 * @publicapi [since 12]
 * @since 10
 */
declare namespace usbManager {
  /**
   * USB存储设备访问策略的枚举。
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
   * 可通过[getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取已接入主设备的USB设备列表，并从返回值列表中查找当前设备的类型信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  export interface UsbDeviceType {
    /**
     * 类型编码。
     *
     * 先根据此值确定descriptor应该传入的类型。若descriptor为DEVICE，则本字段取USBDevice.clazz字段值，若descriptor为INTERFACE，则本字段取
     * USBDevice.configs.interfaces.clazz字段值。
     *
     * 若字段值为255，表示此设备的类型编码是厂商自定义编码，则使用[addDisallowedUsbDevices]{@link addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link removeDisallowedUsbDevices}接口禁用/解禁该设备不生效；若字段值未在
     * [defined-class-codes](https://www.usb.org/defined-class-codes)中定义，则使用
     * [addDisallowedUsbDevices]{@link addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link removeDisallowedUsbDevices}接口禁用/解禁该设备不生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    baseClass: number;

    /**
     * 子类型编码。
     *
     * 先根据baseClass的值确定descriptor应该传入的类型。若descriptor为DEVICE，则本字段取USBDevice.subClass字段值，若descriptor为INTERFACE，则本字段取
     * USBDevice.configs.interfaces.subClass字段值。
     *
     * 若字段值为255，表示此设备的子类型编码是厂商自定义编码，则使用[addDisallowedUsbDevices]{@link addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link removeDisallowedUsbDevices}接口禁用/解禁该设备不生效；若字段值未在
     * [defined-class-codes](https://www.usb.org/defined-class-codes)中定义，则使用
     * [addDisallowedUsbDevices]{@link addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link removeDisallowedUsbDevices}接口禁用/解禁该设备不生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    subClass: number;

    /**
     * 协议编码。
     *
     * 先根据baseClass的值确定descriptor应该传入的类型。若descriptor为DEVICE，则本字段取USBDevice.protocol字段值，若descriptor为INTERFACE，则本字段取
     * USBDevice.configs.interfaces.protocol字段值。
     *
     * 若字段值为255，表示此设备的协议编码是厂商自定义编码，则使用[addDisallowedUsbDevices]{@link addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link removeDisallowedUsbDevices}接口禁用/解禁该设备不生效；若字段值未在
     * [defined-class-codes](https://www.usb.org/defined-class-codes)中定义，则使用
     * [addDisallowedUsbDevices]{@link addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link removeDisallowedUsbDevices}接口禁用/解禁该设备不生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    protocol: number;

    /**
     * USB描述符。
     *
     * 若此值USBDevice.clazz字段值为0，则须在[defined-class-codes](https://www.usb.org/defined-class-codes)中的Base Class列查找此值
     * USBDevice.configs.interfaces.clazz字段值，查找结果所在行所对应的Descriptor Usage列就表示当前应该传入的descriptor类型（若Descriptor Usage列为Both，
     * 表示两种类型都可以传入，需要设备级禁用时传入DEVICE，需要接口级禁用时传入INTERFACE）;
     *
     * 若此值USBDevice.clazz字段值为255，表示此设备的类型编码是厂商自定义编码，则使用
     * [addDisallowedUsbDevices]{@link addDisallowedUsbDevices}/
     * [removeDisallowedUsbDevices]{@link removeDisallowedUsbDevices}接口禁用/解禁该设备不生效；若此值USBDevice.clazz字段值为其他值，
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
   * USB设备类型信息，支持部分字段匹配。
   *
   * - 与[UsbDeviceType]{@link usbManager.UsbDeviceType}相比，本接口的subClass、protocol、descriptor字段为可选字段，实现更灵活的USB设备禁用策略。
   * - 支持仅根据baseClass字段进行匹配。
   * - 支持配置多个字段，多个字段同时满足才匹配。
   * - 可通过[getDevices]{@link @ohos.usbManager:usbManager.getDevices}接口获取已接入主设备的USB设备列表，并从返回值列表中查找当前设备的类型信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  export interface PermissiveUsbDeviceType {
    /**
     * 类型编码。取值范围为[0, 255]。
     * 若descriptor为DEVICE，则本字段取USBDevice.clazz字段值；若descriptor为INTERFACE，则本字段取USBDevice.configs.interfaces.clazz字段值。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    baseClass: number;

    /**
     * 子类型编码。取值范围为[0, 255]。
     * 若descriptor为DEVICE，则本字段取USBDevice.subClass字段值；若descriptor为INTERFACE，则本字段取USBDevice.configs.interfaces.subClass字段
     * 值。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    subClass?: number;

    /**
     * 协议编码。取值范围为[0, 255]。
     * 若descriptor为DEVICE，则本字段取USBDevice.protocol字段值；若descriptor为INTERFACE，则本字段取USBDevice.configs.interfaces.protocol字段
     * 值。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    protocol?: number;

    /**
     * USB描述符。
     * 若USBDevice.clazz字段值为0，则须在[defined-class-codes](https://www.usb.org/defined-class-codes)中的Base Class列查找
     * USBDevice.configs.interfaces.clazz字段值，查找结果所在行所对应的Descriptor Usage列就表示当前应该传入的descriptor类型（若Descriptor Usage列为Both，
     * 表示两种类型都可以传入，需要设备级禁用时传入DEVICE，需要接口级禁用时传入INTERFACE）；若USBDevice.clazz字段值为其他值，则须在
     * [defined-class-codes](https://www.usb.org/defined-class-codes)中的Base Class列查找该值，查找结果所在行所对应的Descriptor Usage列就表示当前
     * 应该传入的descriptor类型（若Descriptor Usage列为Both，表示两种类型都可以传入，需要设备级禁用时传入DEVICE，需要接口级禁用时传入INTERFACE）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    descriptor?: Descriptor;
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
   * **使用场景**：
   *
   * - 企业安全管理场景，需要限制只有特定的USB设备可以接入设备
   * - 设备管理员需要精确控制哪些USB设备能够被识别和使用
   * - 配合[removeAllowedUsbDevices]{@link usbManager.removeAllowedUsbDevices}接口实现USB设备的动态管理
   *
   * 以下情况下，调用本接口会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}接口禁用了设备USB或者USB转串口能力。
   * 2. 已经通过[setUsbStorageDeviceAccessPolicy]{@link usbManager.setUsbStorageDeviceAccessPolicy}接口设置了USB存储设备访问策略为禁用。
   * 3. 已经通过[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口添加了禁止使用的USB设备类型。
   * 4. 已经通过[addDisallowedPermissiveUsbDevices]{@link usbManager.addDisallowedPermissiveUsbDevices}接口添加了禁止使用的USB设备类型。
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
   * **使用场景**：
   *
   * - 企业安全管理场景，需要撤销某些USB设备的访问权限
   * - 设备管理员需要动态调整允许使用的USB设备列表
   * - 当USB设备不再需要或存在安全风险时，从允许名单中移除
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
   * 获取USB设备可用名单。一般使用场景：在修改策略前，需要先获取现有策略进行评估；管理界面需要展示当前的USB存储设备访问控制状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<UsbDeviceId> } USB设备可用名单的设备ID数组。
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
   * 获取USB设备可用名单。一般使用场景：在修改策略前，需要先获取现有策略进行评估；管理界面需要展示当前的USB存储设备访问控制状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @returns { Array<UsbDeviceId> } USB设备可用名单的设备ID数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getAllowedUsbDevices(admin: Want | null): Array<UsbDeviceId>;

  /**
   * 设置USB存储设备（baseClass = 0x08）访问策略。
   *
   * > **说明：**
   * >
   * > 在调用接口前，确保已暂停USB存储设备的读写操作，保证操作的稳定性和数据的完整性，否则可能出现不可预期的异常。
   * > 以下情况下，通过本接口设置USB存储设备访问策略为可读可写/只读，会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}接口禁用了设备USB能力。
   * 2. 已经通过[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口将存储类型的USB设备添加为禁止使用的USB设备类型。
   * 3. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount}接口禁用了某用户USB存储设备写入能力。
   *
   * 以下情况下，通过本接口设置USB存储设备访问策略为禁用，会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}接口禁用了设备USB能力。
   * 2. 已经通过[addAllowedUsbDevices]{@link usbManager.addAllowedUsbDevices}接口添加了USB设备可用名单。
   * 3. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount}接口禁用了某用户USB存储设备写入能力。
   *
   * 通过本接口设置，或者通过[addDisallowedUsbDevices]{@link addDisallowedUsbDevices}接口添加存储类型的USB设备，均可禁用USB存储设备。推荐使用后者。
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
   * 获取USB存储设备（baseClass = 0x08）访问策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB [since 12 - 24]
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 26.0.0]
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { UsbPolicy } USB存储设备访问策略。设置为READ_WRITE表示允许读写USB存储设备；设置为READ_ONLY表示仅允许读取USB存储设备，禁止写入；设置为DISABLED表示完全禁止访问USB存储设备。
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
   * 获取USB存储设备（baseClass = 0x08）访问策略。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @returns { UsbPolicy } USB存储设备访问策略。设置为READ_WRITE表示允许读写USB存储设备；设置为READ_ONLY表示仅允许读取USB存储设备，禁止写入；设置为DISABLED表示完全禁止访问
   *     USB存储设备。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getUsbStorageDeviceAccessPolicy(admin: Want | null): UsbPolicy;

  /**
   * 添加禁止使用的USB设备类型。
   *
   * **使用场景**：
   *
   * - 企业安全管理场景，需要禁用特定类型的USB设备
   * - 防止数据泄露：禁用USB存储设备类型
   * - 设备管理员需要根据安全策略，禁止使用某些类型的USB设备
   * - 配合[removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices}接口实现USB设备类型的动态管理
   *
   * > **说明：**
   * >
   * > 推荐使用[addDisallowedPermissiveUsbDevices]{@link usbManager.addDisallowedPermissiveUsbDevices}接口。
   * > 以下情况下，调用本接口会报策略冲突：
   *
   * 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}接口禁用了设备USB能力。
   * 2. 已经通过[addAllowedUsbDevices]{@link usbManager.addAllowedUsbDevices}接口添加了USB设备可用名单。
   * 3. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount}接口禁用了某用户USB存储设备写入能力。
   * 4. 已经通过[addDisallowedPermissiveUsbDevices]{@link usbManager.addDisallowedPermissiveUsbDevices}接口添加了禁止使用的USB设备类型。
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
   * **使用场景**：
   *
   * - 企业安全管理场景，需要解除对某些USB设备类型的禁用
   * - 设备管理员需要动态调整禁止使用的USB设备类型列表
   * - 当某些USB设备类型不再存在安全风险时，从禁用名单中移除
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
   * **使用场景**：
   *
   * - 设备管理员需要查看当前禁止使用的USB设备类型列表
   * - 在修改禁用名单前，需要先获取现有名单进行比对
   * - 管理界面需要展示当前的USB设备类型禁用策略配置
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

  /**
   * 获取禁止使用的USB设备类型。
   *
   * **使用场景**：
   *
   * - 设备管理员需要查看当前禁止使用的USB设备类型列表
   * - 在修改禁用名单前，需要先获取现有名单进行比对
   * - 管理界面需要展示当前的USB设备类型禁用策略配置
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @returns { Array<UsbDeviceType> } 禁止使用的USB设备类型。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDisallowedUsbDevices(admin: Want | null): Array<UsbDeviceType>;

  /**
   * 添加禁止使用的USB设备类型。与[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口不同的是，本接口可以不按照
   * [defined-class-codes](https://www.usb.org/defined-class-codes)标准进行匹配。对已连接的USB设备热生效，无需重新插拔，例如USB线控耳机正常使用时，调用本接口禁用该耳
   * 机，会导致耳机不可用。
   *
   * 以下情况下，调用本接口会报策略冲突：
   *
   * 1. 已经通过[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口添加了禁止使用的USB设备类型。
   * 2. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy}接口禁用了设备USB能力。
   * 3. 已经通过[addAllowedUsbDevices]{@link usbManager.addAllowedUsbDevices}接口添加了USB设备可用名单。
   * 4. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount}接口禁用了某用户USB存储设备写入能力。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<PermissiveUsbDeviceType> } usbDevices - 要添加的USB设备类型的数组，支持部分字段匹配。USB设备禁用名单数组长度上限为1000，若当前禁用名单中已有500个
   *     USB设备ID，则只允许再添加500个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addDisallowedPermissiveUsbDevices(admin: Want, usbDevices: Array<PermissiveUsbDeviceType>): void;

  /**
   * 移除通过[addDisallowedPermissiveUsbDevices]{@link usbManager.addDisallowedPermissiveUsbDevices}接口禁用的USB设备类型。被移除的USB设备类型
   * 可恢复正常使用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<PermissiveUsbDeviceType> } usbDevices - 要移除的USB设备类型的数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeDisallowedPermissiveUsbDevices(admin: Want, usbDevices: Array<PermissiveUsbDeviceType>): void;

  /**
   * 获取通过[addDisallowedPermissiveUsbDevices]{@link usbManager.addDisallowedPermissiveUsbDevices}接口禁用的USB设备类型。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。当取值为null时，表示获取当前设备禁止使用的
   *     USB设备类型。
   * @returns { Array<PermissiveUsbDeviceType> } 禁止使用的USB设备类型数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDisallowedPermissiveUsbDevices(admin: Want | null): Array<PermissiveUsbDeviceType>;
}

export default usbManager;