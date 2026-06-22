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
 * The **usbManager** module provides APIs for USB management.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 * >
 * > The global restriction policy is provided by **restrictions**. To disable USB globally, see
 * > [@ohos.enterprise.restrictions (restriction policy)]{@link @ohos.enterprise.restrictions:restrictions}.
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace usbManager {
  /**
   * Enumerates the USB access policies.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export enum UsbPolicy {
    /**
     * Read and write.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    READ_WRITE = 0,

    /**
     * Read only.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    READ_ONLY = 1,

    /**
     * Disabled.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    DISABLED = 2
  }

  /**
   * Represents the USB device identity information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  export interface UsbDeviceId {
    /**
     * Vendor ID.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    vendorId: number;

    /**
     * Product ID.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 12
     */
    productId: number;
  }

  /**
   * Enumerates USB descriptors.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  enum Descriptor {
    /**
     * Interface descriptor.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    INTERFACE = 0,

    /**
     * Device descriptor.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    DEVICE = 1
  }

  /**
   * Represents the USB device type information.
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  export interface UsbDeviceType {
    /**
     * Type code.
     *
     * You can obtain the list of USB devices connected to the host device through the
     * [getDevices]{@link @ohos.usbManager:usbManager.getDevices} API, find the current device in the returned list, and
     * check its value.
     *
     * First, determine the type of descriptor to pass in based on this value. If the descriptor is **DEVICE**, this
     * field takes the value of the **USBDevice.clazz** field; if the descriptor is **INTERFACE**, this field takes the
     * value of the **USBDevice.configs.interfaces.clazz** field.
     *
     * If the field value is 255 (indicating the device's type code is a vendor-defined code), calling the
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices} or
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices} API to enable or disable the device
     * will not take effect. If the field value is not defined in
     * [defined-class-codes](https://www.usb.org/defined-class-codes), calling the
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices} or
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices} API to enable or disable the device
     * will also not take effect.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    baseClass: number;

    /**
     * Subtype code.
     *
     * You can obtain the list of USB devices connected to the host device through the
     * [getDevices]{@link @ohos.usbManager:usbManager.getDevices} API, find the current device in the returned list, and
     * check its value.
     *
     * First, determine the type of descriptor to pass in based on the value of baseClass. If the descriptor is
     * **DEVICE**, this field takes the value of the **USBDevice.subClass** field; if the descriptor is **INTERFACE**,
     * this field takes the value of the **USBDevice.configs.interfaces.subClass** field.
     *
     * If the field value is 255 (indicating that the subtype code of the device is a vendor-defined code), calling the
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices} or
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices} API to enable or disable the device
     * will not take effect. If the field value is not defined in
     * [defined-class-codes](https://www.usb.org/defined-class-codes), calling the
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices} or
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices} API to enable or disable the device
     * will also not take effect.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    subClass: number;

    /**
     * Protocol code.
     *
     * You can obtain the list of USB devices connected to the host device through the
     * [getDevices]{@link @ohos.usbManager:usbManager.getDevices} API, find the current device in the returned list, and
     * check its value.
     *
     * First, determine the type of descriptor to pass in based on the value of baseClass. If the descriptor is
     * **DEVICE**, this field takes the value of the **USBDevice.protocol** field; if the descriptor is **INTERFACE**,
     * this field takes the value of the **USBDevice.configs.interfaces.protocol** field.
     *
     * If the field value is 255 (indicating the device's protocol code is a vendor-defined code), calling the
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices} or
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices} API to enable or disable the device
     * will not take effect. If the field value is not defined in
     * [defined-class-codes](https://www.usb.org/defined-class-codes), calling the
     * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices} or
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices} API to enable or disable the device
     * will also not take effect.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    protocol: number;

    /**
     * USB descriptor.
     *
     * You can obtain the list of USB devices connected to the host device through the
     * [getDevices]{@link @ohos.usbManager:usbManager.getDevices} API, find the current device in the returned list, and
     * check its value.
     *
     * If the value of **USBDevice.clazz** is **0**, you need to find the value of
     * **USBDevice.configs.interfaces.clazz** in the Base Class column in
     * [defined-class-codes](https://www.usb.org/defined-class-codes). The Descriptor Usage column in the row where the
     * search result is located indicates the descriptor type to be transferred. If the value of Descriptor Usage is
     * **Both**, both types can be transferred. If device-level disabling is required, transfer **DEVICE**. If interface
     * -level disabling is required, transfer **INTERFACE**.
     *
     * If the value of **USBDevice.clazz** is **255** (indicating the device's type code is a vendor-defined code),
     * calling the [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices} or
     * [removeDisallowedUsbDevices]{@link usbManager.removeDisallowedUsbDevices} API to enable or disable the device
     * will not take effect. If the value of **USBDevice.clazz** is another value, search for the value in the Base
     * Class column of [defined-class-codes](https://www.usb.org/defined-class-codes). The Descriptor Usage column in
     * the row where the search result is located indicates the descriptor type to be transferred. If the value of
     * Descriptor Usage is **Both**, both types can be transferred. If device-level disabling is required, transfer
     * **DEVICE**. If interface-level disabling is required, transfer **INTERFACE**.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 14
     */
    descriptor: Descriptor;
  }

  /**
   * Sets the USB read/write policy. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { UsbPolicy } usbPolicy - USB access policy. This API supports **READ_WRITE** and **READ_ONLY** only.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null**. Otherwise, **err** is an error object.
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
   * Sets the USB read/write policy. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { UsbPolicy } usbPolicy - USB access policy. This API supports **READ_WRITE** and **READ_ONLY** only.
   * @returns { Promise<void> } Promise that returns no value. An error object is thrown when the USB policy fails to be
   *     set.
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
   * Enables or disables USB.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { boolean } disable - Whether to disable USB. The value **true** means to disable USB; the value **false**
   *     means the opposite.
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
   * Queries whether the USB is disabled.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { boolean } Returns **true** if USB is disabled;
   *     <br>returns **false** otherwise.
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
   * Adds allowed USB devices.
   *
   * A policy conflict is reported when this API is called in the following scenarios:
   *
   * 1. The USB capability of the device or the USB-to-Serial capability has been disabled using the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)} API.
   * 2. The USB storage device access policy has been disabled using the [setUsbStorageDeviceAccessPolicy]{@link usbManager.setUsbStorageDeviceAccessPolicy} API.
   * 3. Disallowed USB device types have been added using the [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices} API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<UsbDeviceId> } usbDeviceIds - USB device IDs, which can be obtained through
   *     [getDevices]{@link @ohos.usbManager:usbManager.getDevices}. The maximum number of USB devices is 1,000. If
   *     there are already 300 USB device IDs, only 700 more can be added.
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
   * Removes allowed USB devices.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<UsbDeviceId> } usbDeviceIds - USB device IDs, which can be obtained through
   *     [getDevices]{@link @ohos.usbManager:usbManager.getDevices}.
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
   * Obtains allowed USB devices.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @returns { Array<UsbDeviceId> } Allowed USB devices obtained.
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
  function getAllowedUsbDevices(admin: Want | null): Array<UsbDeviceId>;

  /**
   * Sets the access policy of the USB storage device.
   *
   * > **NOTE**
   * > > Before calling the API, read and write operations on the USB storage device should be suspended to ensure
   * > operational stability and data integrity. Otherwise, unexpected exceptions may occur.
   *
   * A policy conflict occurs when you set the USB storage device access policy to read, write, or read-only in the
   * following scenarios:
   *
   * 1. The USB capability of the device has been disabled using the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)} API.
   * 2. The USB storage device has been disallowed to use through [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}.
   * 3. USB storage write access has been disabled for specific users via the [setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)} API.
   *
   * A policy conflict is reported if the USB storage device access policy is disabled by calling this API in the
   * following scenarios:
   *
   * 1. The USB capability of the device has been disabled using the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)} API.
   * 2. The available USB devices have been added through [addAllowedUsbDevices]{@link usbManager.addAllowedUsbDevices}.
   * 3. USB storage write access has been disabled for specific users via the [setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)} API.
   *
   * You can disable a USB storage device by calling this API or
   * [addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}. The latter is recommended.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB [since 12 - 24]
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 26.0.0]
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { UsbPolicy } usbPolicy - Access policy of the USB storage device.
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
   * Obtains the access policy of the USB storage device.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB [since 12 - 24]
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB  or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 26.0.0]
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @returns { UsbPolicy } Access policy of the USB storage device.
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
  function getUsbStorageDeviceAccessPolicy(admin: Want | null): UsbPolicy;

  /**
   * Adds disallowed USB device types.
   *
   * A policy conflict is reported when this API is called in the following scenarios:
   *
   * 1. The USB capability of the device has been disabled using the [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)} API.
   * 2. The available USB devices have been added through [addAllowedUsbDevices]{@link usbManager.addAllowedUsbDevices}.
   * 3. USB storage write access has been disabled for specific users via the [setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)} API.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<UsbDeviceType> } usbDevices - Array of the USB devices to be added, which can be obtained through
   *     [getDevices]{@link @ohos.usbManager:usbManager.getDevices}. The maximum number of USB devices is 200. If there
   *     are already 100 USB device IDs, only 100 more can be added.
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
   * Removes the disallowed USB device types.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { Array<UsbDeviceType> } usbDevices - Array of the USB devices to be removed, which can be obtained through
   *     [getDevices]{@link @ohos.usbManager:usbManager.getDevices}.
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
   * Obtains the disallowed USB device types.
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_USB
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 14 - 24]
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned. [since 26.0.0]
   * @returns { Array<UsbDeviceType> } Disallowed USB device types obtained.
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
  function getDisallowedUsbDevices(admin: Want | null): Array<UsbDeviceType>;
}

export default usbManager;