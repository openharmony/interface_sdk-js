/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { ErrorCallback, AsyncCallback } from './basic';
import type Callback from './basic';
import { Context } from './app/context';

/**
 * This module provides the DRM capability to multimedia player.
 * @namespace drm
 * @syscap SystemCapability.Multimedia.Drm.Core
 * @since 11
 */
declare namespace drm {
/**
 * Enumerates drm error code.
 * @enum { number }
 * @syscap SystemCapability.Multimedia.Drm.Core
 * @since 11
 */
  enum DrmErrorCode {
    /**
     * All unknown errors.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    ERROR_UNKNOWN = 24700101,
    /**
     * Meet max MediaKeySystem num limit.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    MAX_SYSTEM_NUM_REACHED = 24700103,
    /**
     * Meet max MediaKeySession num limit.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    MAX_SESSION_NUM_REACHED = 24700104,
    /**
     * Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    SERVICE_FATAL_ERROR = 24700201
  };

  /**
   * Enumerates which config name we can get.
   * @enum { string }
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  enum PreDefinedConfigName {
    /**
     * Config name vendor
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CONFIG_DEVICE_VENDOR = 'vendor',
    /**
     * Config name version
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CONFIG_DEVICE_VERSION = 'version',
    /**
     * Config name description
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CONFIG_DEVICE_DESCRIPTION = 'description',
    /**
     * Config name algorithms
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CONFIG_DEVICE_ALGORITHMS = 'algorithms',
    /**
     * Config name deviceUniqueId
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CONFIG_DEVICE_UNIQUE_ID = 'deviceUniqueId',
    /**
     * Config name maxSessionNum
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CONFIG_SESSION_MAX = 'maxSessionNum',
    /**
     * Config name currentSessionNum
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CONFIG_SESSION_CURRENT = 'currentSessionNum',
  }
  /**
   * Enumerates event types of listener.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  enum ListenerType {
    /**
     * DRM event base.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    LISTENER_DRM_EVENT = 200,
    /**
     * Provision required event.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    LISTENER_PROVISION_REQUIRED = 201,
    /**
     * License required event.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    LISTENER_KEY_REQUIRED = 202,
    /**
     * License expired event.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    LISTENER_KEY_EXPIRED = 203,
    /**
     * Vendor defined event.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    LISTENER_VENDOR_DEFINED = 204,
    /**
     * Expiration update event.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    LISTENER_EXPIRATION_UPDATE = 206,
    /**
     * License change event.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    LISTENER_KEY_CHANGE = 207,
  }

  /**
   * Enumerates license type.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  enum LicenseType {
    /**
     * Offline license type.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    LICENSE_TYPE_OFFLINE = 0,
    /**
     * Online license type.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    LICENSE_TYPE_ONLINE,
  }

  /**
   * Enumerates offline license status.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  enum OfflineLicenseStatus {
    /**
     * Offline license status unknown.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    OFFLINE_LICENSE_STATUS_UNKNOWN = 0,
    /**
     * Offline license status usable.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    OFFLINE_LICENSE_STATUS_USABLE = 1,
    /**
     * Offline license status inactive.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    OFFLINE_LICENSE_STATUS_INACTIVE = 2,
  }

  /**
   * Enumerates certificate status.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  enum CertificateStatus {
    /**
     * Device already provisioned.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CERT_STATUS_PROVISIONED = 0,
    /**
     * Device not provisioned.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CERT_STATUS_NOT_PROVISIONED,
    /**
     * Cert already expired.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CERT_STATUS_EXPIRED,
    /**
     * Certs are invalid.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CERT_STATUS_INVALID,
    /**
     * Get certs status failed.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    CERT_STATUS_UNAVAILABLE,
  }

  /**
   * Enumerates license request types.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  enum RequestType {
    /**
     * License request type unknown.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    REQUEST_TYPE_UNKNOWN = 0,
    /**
     * License request type initial.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    REQUEST_TYPE_INITIAL = 1,
    /**
     * License request type renewal.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    REQUEST_TYPE_RENEWAL = 2,
    /**
     * License request type release.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    REQUEST_TYPE_RELEASE = 3,
    /**
     * License request type none.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    REQUEST_TYPE_NONE = 4,
    /**
     * License request type update.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    REQUEST_TYPE_UPDATE = 5,
  }

  /**
   * Enumerates security level.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  enum SecurityLevel {
    /**
     * Device decrypt and decode type unknown.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    SECURITY_LEVEL_UNKNOWN = 0,
    /**
     * Device using software decrypt.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    SECURITY_LEVEL_SW_CRYPTO = 1,
    /**
     * Device using software decode.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    SECURITY_LEVEL_SW_DECODE = 2,
    /**
     * Device using hardware decrypt.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    SECURITY_LEVEL_HW_CRYPTO = 3,
    /**
     * Device using hardware decode.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    SECURITY_LEVEL_HW_DECODE = 4,
    /**
     * Device using hardware and software decode.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    SECURITY_LEVEL_HW_ALL = 5,
    /**
     * Max mode.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    SECURITY_LEVEL_MAX = 6,
  }

  /**
   * Provides the drm provision request definitions.
   * @interface ProvisionRequest
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  interface ProvisionRequest {
    /**
     * Provision request data sent to provision server.
     * @type { Uint8Array }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    data: Uint8Array;
    /**
     * Provision server URL.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    defaultURL: string;
  }

  /**
   * Provides the drm license request info optional data.
   * @interface OptionsData
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  interface OptionsData {
    /**
     * App defined optional data name.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    name: string;
    /**
     * App defined optional data value.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    value: string;
  }

  /**
   * Provides the drm license request definitions.
   * @interface LicenseRequest
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  interface LicenseRequest {
    /**
     * License request type.
     * @type { RequestType }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    licenseRequestType: RequestType;
    /**
     * License request data sent to license server.
     * @type { Uint8Array }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    data: Uint8Array;
    /**
     * License server URL.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    defaultURL: string;
  }

  /**
   * Used to indicates the event info attached to specific event type.
   * @interface EventInfo
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  interface EventInfo {
    /**
     * Event info name.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    name: string;
    /**
     * Event info value.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    value: string;
  }

  /**
   * Used to indicates the metrics info.
   * @interface MetricKeyValue
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  interface MetricKeyValue {
    /**
     * Metric info name.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    name: string;
    /**
     * Metric info value.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    value: string;
  }

  /**
   * Used to indicates the license status.
   * @interface LicenseStatus
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  interface LicenseStatus {
    /**
     * License Id in string.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    name: string;
    /**
     * License status description.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    value: string;
  }

  /**
   * Used to indicates the license status with a key and its value.
   * @interface KeysInfo
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  interface KeysInfo {
    /**
     * Keys Id in license.
     * @type { Uint8Array }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    keyId: Uint8Array;
    /**
     * Keys status description.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    value: string;
  }

  interface DrmInfo {
    /**
     * Drm system ID.
     * @type { string }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    uuid: string;
    /**
     * PSSH(protection scheme specific header) contain drm info.
     * @type { Uint8Array }
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    pssh: Uint8Array;
  }
  /**
   * Creates a MediaKeySystem instance.
   * @param { string } name - Used to point a Digital Right Management solution.
   * @returns { MediaKeySystem } The MediaKeySystem instance.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 24700101 - All unknown errors.
   * @throws { BusinessError } 24700103 - Meet max MediaKeySystem num limit.
   * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  function createMediaKeySystem(name: string): MediaKeySystem;

  /**
   * Judge whether a system that specifies name, mimetype and security level is supported.
   * @param { string } name - Used to point a Digital Right Management solution.
   * @param { string } mimeType - Used to specifies the media type.
   * @param { SecurityLevel } level - Used to specifies the SecurityLevel.
   * @returns { boolean } Whether these conditions will be met.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 24700101 - All unknown errors.
   * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  function isMediaKeySystemSupported(name: string, mimeType: string, level: SecurityLevel): boolean;

  /**
   * Judge whether a system that specifies name, mimetype and security level is supported.
   * @param { string } name - Used to point a Digital Right Management solution.
   * @param { string } mimeType - Used to specifies the media type.
   * @returns { boolean } Whether these conditions will be met.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 24700101 - All unknown errors.
   * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  function isMediaKeySystemSupported(name: string, mimeType: string): boolean;

  /**
   * Judge whether a system that specifies name, mimetype and security level is supported.
   * @param { string } name - Used to point a Digital Right Management solution.
   * @returns { boolean } Whether these conditions will be met.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 24700101 - All unknown errors.
   * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  function isMediaKeySystemSupported(name: string): boolean;

  /**
   * Manages and record MediaKeySessions. Before calling an MediaKeySystem method, we must use getMediaKeySystem
   * to get a MediaKeySystem instance, then we can call functions.
   * @interface MediaKeySystem
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   *
   */
  interface MediaKeySystem {

    /**
     * Get the specified configuration.
     * @param { string } - configName - Used to specify the config name.
     * @returns { string } The config value string.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    getConfigurationString(configName: string): string;

    /**
     * Set the specified configuration.
     * @param { string } configName - Used to specify the config name.
     * @param { string } value - The value to be set.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    setConfigurationString(configName: string, value: string): void;

    /**
     * Get the specified configuration.
     * @param { string } configName - Used to specify the config name.
     * @returns { Uint8Array } The config value.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    getConfigurationByteArray(configName: string): Uint8Array;

    /**
     * Set the specified configuration.
     * @param { string } configName - Used to specify the config name.
     * @param { Uint8Array } value - The value to be set.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    setConfigurationByteArray(configName: string, value: Uint8Array): void;

    /**
     * Get performance statistics information.That includes currentSessionNum, version, decryptNumber,
     * and errorDecryptNumber.
     * @returns { MetricKeyValue[] } A list that includes performance index and corresponding statistics.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    getMetrics(): MetricKeyValue[];

    /**
     * Get security level.
     * @returns { SecurityLevel } The max securityLevel of the MediaKeySystem instance.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    getMaxSecurityLevel(): SecurityLevel;

    /**
     * Generate a media key system provision request.
     * @returns { Promise<ProvisionRequest> } Promise with ProvisionRequest used to return the result.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */

    generateKeySystemRequest(): Promise<ProvisionRequest>;

    /**
     * Process the response corresponding the key system request obtained by the application.
     * @param { Uint8Array } response - Response corresponding to the request.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    processKeySystemResponse(response: Uint8Array): Promise<void>;

    /**
     * Get certificate status of the MediaKeySystem.
     * @returns { CertificateStatus } Certificate Status of the MediaKeySystem instance.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    getCertificateStatus(): CertificateStatus;

    /**
     * Register or unregister listens for drm events.
     * @param { 'keySystemRequired' } type - Type of the drm event to listen for.
     * @param { Callback<EventInfo> } callback - Used to listen for the key system required event.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    on(type: 'keySystemRequired', callback: Callback<EventInfo>): void;

    off(type: 'keySystemRequired'): void;

    /**
     * Create a MediaKeySession instance with level.
     * @param { SecurityLevel } level - Used to specify the Security level.
     * @returns { MediaKeySession } A MediaKeySession instance.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700104 - Meet max MediaKeySession num limit.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    createMediaKeySession(level: SecurityLevel): MediaKeySession;

    /**
     * Create a MediaKeySession instance.
     * @returns { MediaKeySession } A MediaKeySession instance.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700104 - Meet max MediaKeySession num limit.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    createMediaKeySession(): MediaKeySession;

    /**
     * Get the list of offline LicenseIds.
     * @returns { Uint8Array[] } The list of offline LicenseIds.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    getOfflineLicenseIds(): Uint8Array[];

    /**
     * Get offline license status corresponding to the licenseId.
     * @param { Uint8Array } licenseId - The license identifier.
     * @returns { OfflineLicenseStatus } Offline License Status.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    getOfflineLicenseStatus(licenseId: Uint8Array): OfflineLicenseStatus;

    /**
     * Remove license corresponding to the licenseId.
     * @param { Uint8Array } licenseId - The licenseId specifies which license should be remove.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    removeOfflineLicense(licenseId: Uint8Array): void;
    /**
     * Release the resource before the MediaKeySystem gonna be unused.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    destroy(): void;
  }

  /**
   * Provide functions and keep a decrypt module. Before calling an MediaKeySession method, we must
   * use MediaKeySystem's createMediaKeySession to get a MediaKeySession instance.
   * @interface MediaKeySession
   * @syscap SystemCapability.Multimedia.Drm.Core
   * @since 11
   */
  interface MediaKeySession {

    /**
     * Generate the license request.
     * @param { string } mimeType - Media type.
     * @param { Uint8Array } initData - PSSH after base64 encoding.
     * @param { number } licenseType - Offline or online.
     * @param { OptionsData[] } options - Optional data the application set to drm framework.
     * @returns { Promise<LicenseRequest> } Promise with LicenseRequest used to return the result.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    generateLicenseRequest(mimeType: string, initData: Uint8Array, licenseType: number, options?: OptionsData[]): Promise<LicenseRequest>;

    /**
     * Process the response corresponding to the license request obtained by the application.
     * @param { Uint8Array } response - The response.
     * @returns { Promise<Uint8Array> } Promise with license identifier in Uint8ARRY used to return the result.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    processLicenseResponse(response: Uint8Array): Promise<Uint8Array>;

    /**
     * Check the license status
     * @returns { LicenseStatus[] } A list of license status description pairs.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    checkLicenseStatus(): LicenseStatus[];

    /**
     * Remove license.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    removeLicense(): void;

    /**
     * Generate offline license request.
     * @param { Uint8Array } licenseId - The licenseId specifies which media content's license request
     * should be generated.
     * @returns { Promise<Uint8Array> } Promise with license request in Uint8Array used to return the result.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    generateOfflineReleaseRequest(licenseId: Uint8Array): Promise<Uint8Array>;

    /**
     * Process offline license response.
     * @param { Uint8Array } licenseId - The licenseId specifies which media content's license it is
     * @param { Uint8Array } response - The offline license.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    processOfflineReleaseResponse(licenseId: Uint8Array, response: Uint8Array): Promise<void>;

    /**
     * Restore offline license response.
     * @param { Uint8Array } licenseId - The licenseId specifies which license should be restore.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    restoreOfflineLicense(licenseId: Uint8Array): Promise<void>;

    /**
     * Get security level.
     * @returns { SecurityLevel } MediaKeySession securityLevel.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    getSecurityLevel(): SecurityLevel;

    /**
     * Whether the encrypted content require a secure decoder or not.
     * @param { string } mimeType - The media type.
     * @returns { boolean } Whether secure decoder is required.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    requireSecureDecoderModule(mimeType: string): boolean;

    /**
     * Register or unregister keyRequired event.
     * @param { 'keyRequired' } type - Type of the drm event to listen for.
     * @param { Callback<EventInfo> } callback used to listen for the key required event.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    on(type: 'keyRequired', callback: Callback<EventInfo>): void;

    off(type: 'keyRequired'): void;

    /**
     * Register or unregister keyExpired event.
     * @param { 'keyExpired' } type - Type of the drm event to listen for.
     * @param { Callback<EventInfo> } callback - Used to listen for the key required event.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    on(type: 'keyExpired', callback: Callback<EventInfo>): void;

    off(type: 'keyExpired'): void;

    /**
     * Register or unregister vendorDefined event.
     * @param { 'vendorDefined' } type - Type of the drm event to listen for.
     * @param { Callback<EventInfo> } callback - Used to listen for the vendor defined event.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    on(type: 'vendorDefined', callback: Callback<EventInfo>): void;

    off(type: 'vendorDefined'): void;

    /**
     * Register or unregister expirationUpdate event.
     * @param { 'expirationUpdate' } type - Type of the drm event to listen for.
     * @param { Callback<EventInfo> } callback - Used to listen for expiration update event.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    on(type: 'expirationUpdate', callback: Callback<EventInfo>): void;

    off(type: 'expirationUpdate'): void;

    /**
     * Register or unregister keysChange event.
     * @param { 'keysChange' } type - Type of the drm event to listen for.
     * @param { Callback<KeysInfo[]> } callback - Used to listen for keys change event.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    on(type: 'keysChange', callback: Callback<KeysInfo[]>): void;

    off(type: 'keysChange'): void;

    /**
     * Release the resource before the session gonna be unused.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Service fatal error e.g. service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 11
     */
    destroy(): void;

  }
}

export default drm;