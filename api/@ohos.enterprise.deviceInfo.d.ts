/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * The **deviceInfo** module provides APIs for enterprise device information management, including obtaining device
 * serial numbers and device names.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 * >
 * > The APIs of this module can be called only by a device administrator application that is enabled. For details, see
 * > [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace deviceInfo {
  /**
   * Obtains the device serial number. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<string> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is the device serial number obtained. If the operation fails, **err** is an
   *     error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceInfo.getDeviceInfo
   */
  function getDeviceSerial(admin: Want, callback: AsyncCallback<string>): void;

  /**
   * Obtains the device serial number. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<string> } Promise used to return the device serial number.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceInfo.getDeviceInfo
   */
  function getDeviceSerial(admin: Want): Promise<string>;

  /**
   * Obtains the device version number. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<string> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is the device version number obtained. If the operation fails, **err** is an
   *     error object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceInfo.getDeviceInfo
   */
  function getDisplayVersion(admin: Want, callback: AsyncCallback<string>): void;

  /**
   * Obtains the device version number. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<string> } Promise used to return the device version number.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceInfo.getDeviceInfo
   */
  function getDisplayVersion(admin: Want): Promise<string>;

  /**
   * Obtains the device name. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { AsyncCallback<string> } callback - Callback invoked to return the result. If the operation is successful,
   *     **err** is **null** and **data** is the device name obtained. If the operation fails, **err** is an error
   *     object.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceInfo.getDeviceInfo
   */
  function getDeviceName(admin: Want, callback: AsyncCallback<string>): void;

  /**
   * Obtains the device name. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @returns { Promise<string> } Promise used to return the device name.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead deviceInfo.getDeviceInfo
   */
  function getDeviceName(admin: Want): Promise<string>;

  /**
   * Obtains device information.
   *
   * @permission ohos.permission.ENTERPRISE_GET_DEVICE_INFO
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.
   * @param { string } label - Device information label that can be obtained.<br>- **deviceName**: device name.<br>-
   *     **deviceSerial**: device serial number.<br>- **simInfo**: SIM card information.<!--RP1--><!--RP1End-->
   * @returns { string } Device information obtained.
   *     <br>If **label** is **simInfo**, the return value is the SIM card information in a JSON string. For example,
   *     [{"slotId": 0, "MEID": "", "IMSI": "", "ICCID": "", "IMEI": "", "NUMBER": ""},
   *      {"slotId": 1, "MEID": "", "IMSI": "", "ICCID": "", "IMEI": "", "NUMBER": ""}]
   *     , where **slotId:0** indicates card slot 1, and **slotId:1** indicates card slot 2. **NUMBER** indicates the
   *     phone number and is supported since API version 23. The value is in the E.164 international standard format (
   *     for example, +8612345678901) that contains the country code.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function getDeviceInfo(admin: Want, label: string): string;
}

export default deviceInfo;