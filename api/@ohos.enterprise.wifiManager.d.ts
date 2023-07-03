/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * This module offers set wifi policies on the devices.
 *
 * @namespace wifiManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @stagemodelonly
 * @since 10
 */
declare namespace wifiManager {
  /**
   * Describes the wifi security type.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum WifiSecurityType {
    /**
     * Invalid security type
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /**
     * Open
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /**
     * Wired Equivalent Privacy (WEP)
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * Pre-shared key (PSK)
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * Simultaneous Authentication of Equals (SAE)
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_SAE = 4,

    /**
     * EAP authentication.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_EAP = 5,

    /**
     * SUITE_B_192 192 bit level.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_EAP_SUITE_B = 6,

    /**
     * Opportunistic Wireless Encryption.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_OWE = 7,

    /**
     * WAPI certificate to be specified.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_WAPI_CERT = 8,

    /**
     * WAPI pre-shared key to be specified.
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    WIFI_SEC_TYPE_WAPI_PSK = 9
  }

  /**
   * Wi-Fi IP type enumeration.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum IpType {
    /**
     * Use statically configured IP settings
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    STATIC,

    /**
     * Use dynamically configured IP settings
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    DHCP,

    /**
     * No IP details are assigned
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    UNKNOWN
  }

  /**
   * Wi-Fi IP profile.
   *
   * @typedef IpProfile
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface IpProfile {
    /**
     * The ip address
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ipAddress: number;

    /**
     * The gateway
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    gateway: number;

    /**
     * The length of prefix
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    prefixLength: number;

    /**
     * The DNS services
     *
     * @type { number[] }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    dnsServers: number[];

    /**
     * The domains
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    domains: Array<string>;
  }

  /**
   * Wi-Fi EAP method.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum EapMethod {
    /**
     * Not specified
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    EAP_NONE,

    /**
     * Protected extensible authentication protocol
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    EAP_PEAP,

    /**
     * Transport layer security
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    EAP_TLS,

    /**
     * Tunneled transport layer security
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    EAP_TTLS,

    /**
     * Password
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    EAP_PWD,

    /**
     * Subscriber identity module
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    EAP_SIM,

    /**
     * Authentication and key agreement
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    EAP_AKA,

    /**
     * AKA prime
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    EAP_AKA_PRIME,

    /**
     * Unauth TLS
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    EAP_UNAUTH_TLS
  }

  /**
   * Wi-Fi phase 2 method.
   *
   * @enum { number }
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  enum Phase2Method {
    /**
     * Not specified
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    PHASE2_NONE,

    /**
     * Password authentication protocol
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    PHASE2_PAP,

    /**
     * Microsoft challenge handshake authentication protocol
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    PHASE2_MSCHAP,

    /**
     * Microsoft challenge handshake authentication protocol version 2
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    PHASE2_MSCHAPV2,

    /**
     * Generic token card
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    PHASE2_GTC,

    /**
     * Subscriber identity module
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    PHASE2_SIM,

    /**
     * Authentication and key agreement
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    PHASE2_AKA,

    /**
     * AKA Prime
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    PHASE2_AKA_PRIME
  }

  /**
   * Wi-Fi EAP profile.
   *
   * @typedef WifiEapProfile
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface WifiEapProfile {
    /**
     * EAP authentication method
     *
     * @type { EapMethod }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    eapMethod: EapMethod;

    /**
     * Phase 2 authentication method
     *
     * @type { Phase2Method }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    phase2Method: Phase2Method;

    /**
     * The identity
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    identity: string;

    /**
     * Anonymous identity
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    anonymousIdentity: string;

    /**
     * Password
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    password: string;

    /**
     * CA certificate alias
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    caCertAliases: string;

    /**
     * CA certificate path
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    caPath: string;

    /**
     * Client certificate alias
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    clientCertAliases: string;

    /**
     * content of user's certificate
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    certEntry: Uint8Array;

    /**
     * Password of user's certificate
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    certPassword: string;

    /**
     * Alternate subject match
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    altSubjectMatch: string;

    /**
     * Domain suffix match
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    domainSuffixMatch: string;

    /**
     * Realm for Passpoint credential
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    realm: string;

    /**
     * Public Land Mobile Network of the provider of Passpoint credential
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    plmn: string;

    /**
     * Sub ID of the SIM card
     *
     * @type { number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    eapSubId: number;
  }

  /**
   * Wi-Fi profile.
   *
   * @typedef WifiProfile
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface WifiProfile {
    /**
     * Wi-Fi SSID: the maximum length is 32
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ssid: string;

    /**
     * Wi-Fi bssid(MAC): the length is 6
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    bssid?: string;

    /**
     * Wi-Fi key: maximum length is 64
     *
     * @type { string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    preSharedKey: string;

    /**
     * Hide SSID or not, false(default): not hide
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    isHiddenSsid?: boolean;

    /**
     * Security type: reference definition of WifiSecurityType
     *
     * @type { WifiSecurityType }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    securityType: WifiSecurityType;

    /**
     * The UID of the Wi-Fi profile creator
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    creatorUid?: number;

    /**
     * Disable reason
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    disableReason?: number;

    /**
     * Allocated networkId
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    netId?: number;

    /**
     * Random mac type
     *
     * @type { ?number }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    randomMacType?: number;

    /**
     * Random mac address, the length is 6
     *
     * @type { ?string }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    randomMacAddr?: string;

    /**
     * IP Type
     *
     * @type { ?IpType }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    ipType?: IpType;

    /**
     * IP profile of static
     *
     * @type { ?IpProfile }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    staticIp?: IpProfile;

    /**
     * EAP profile info.
     *
     * @type { ?WifiEapProfile }
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @stagemodelonly
     * @since 10
     */
    eapProfile?: WifiEapProfile;
  }

  /**
   * Gets state of whether the wifi is active.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<boolean> } callback - the callback of isWifiActive.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isWifiActive(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * Gets state of whether the wifi is active.
   * This function can be called by a super administrator.
   *
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<boolean> } the promise returned by isWifiActive.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function isWifiActive(admin: Want): Promise<boolean>;

  /**
   * Sets the wifi profile.
   *
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { WifiProfile } profile - profile indicates the profile of wifi.
   * @param { AsyncCallback<void> } callback - the callback of setWifiProfile.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setWifiProfile(admin: Want, profile: WifiProfile, callback: AsyncCallback<void>): void;

  /**
   * Sets the wifi profile.
   *
   * @permission ohos.permission.ENTERPRISE_SET_WIFI
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { WifiProfile } profile - profile indicates the profile of wifi.
   * @returns { Promise<void> } the promise returned by setWifiProfile.
   * @throws { BusinessError } 9200001 - the application is not an administrator of the device.
   * @throws { BusinessError } 9200002 - the administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function setWifiProfile(admin: Want, profile: WifiProfile): Promise<void>;
}

export default wifiManager;
