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

/**
 * @file Defines the DRM capability.
 * @kit DrmKit
 */

/**
 * DRM（Digital Rights Management）框架组件支持音视频媒体业务数字版权管理功能的开发。开发者可以调用系统提供的DRM插件，完成以下功能：
 * 
 * - DRM证书管理：生成证书请求、设置证书响应，实现对证书Provision（下载）功能。
 * - DRM媒体密钥管理：生成媒体密钥请求、设置媒体密钥响应、管理离线媒体密钥功能。
 * - DRM节目授权：支持DRM插件根据媒体密钥权限对DRM节目授权。
 * - DRM节目解密：支持媒体播放功能的解密调用，实现对DRM节目的解密。
 *
 * @syscap SystemCapability.Multimedia.Drm.Core
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace drm {
    /**
     * 枚举，错误码。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    enum DrmErrorCode {
      /**
       * 未知错误。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      ERROR_UNKNOWN = 24700101,
      /**
       * MediaKeySystem实例数量超过上限（64个）。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      MAX_SYSTEM_NUM_REACHED = 24700103,
      /**
       * MediaKeySession实例数量超过上限（64个）。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      MAX_SESSION_NUM_REACHED = 24700104,
      /**
       * DRM服务异常。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      SERVICE_FATAL_ERROR = 24700201
    }
  
    /**
     * 枚举，预定义的配置属性。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    enum PreDefinedConfigName {
      /**
       * 插件厂商名，通过[getConfigurationString]{@link @ohos.multimedia.drm:drm.MediaKeySystem.getConfigurationString}接口获取vendor对
       * 应配置值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CONFIG_DEVICE_VENDOR = 'vendor',
      /**
       * 插件版本号，通过[getConfigurationString]{@link @ohos.multimedia.drm:drm.MediaKeySystem.getConfigurationString}接口获取version
       * 对应配置值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CONFIG_DEVICE_VERSION = 'version',
      /**
       * 设备描述符，通过[getConfigurationString]{@link @ohos.multimedia.drm:drm.MediaKeySystem.getConfigurationString}接口获取
       * description对应配置值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CONFIG_DEVICE_DESCRIPTION = 'description',
      /**
       * 支持的算法，通过[getConfigurationString]{@link @ohos.multimedia.drm:drm.MediaKeySystem.getConfigurationString}接口获取
       * algorithms对应配置值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CONFIG_DEVICE_ALGORITHMS = 'algorithms',
      /**
       * 设备唯一标识，通过[getConfigurationByteArray]{@link @ohos.multimedia.drm:drm.MediaKeySystem.getConfigurationByteArray}接口获取
       * deviceUniqueId对应配置值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CONFIG_DEVICE_UNIQUE_ID = 'deviceUniqueId',
      /**
       * 设备支持的最大会话数，通过[getConfigurationString]{@link @ohos.multimedia.drm:drm.MediaKeySystem.getConfigurationString}接口获取
       * maxSessionNum对应配置值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CONFIG_SESSION_MAX = 'maxSessionNum',
      /**
       * 当前会话数量，通过[getConfigurationString]{@link @ohos.multimedia.drm:drm.MediaKeySystem.getConfigurationString}接口获取
       * currentSessionNum对应配置值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CONFIG_SESSION_CURRENT = 'currentSessionNum'
    }
  
    /**
     * 枚举，媒体密钥类型。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    enum MediaKeyType {
      /**
       * 离线。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      MEDIA_KEY_TYPE_OFFLINE = 0,
      /**
       * 在线。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      MEDIA_KEY_TYPE_ONLINE = 1
    }
  
    /**
     * 枚举，离线媒体密钥状态。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    enum OfflineMediaKeyStatus {
      /**
       * 未知状态。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      OFFLINE_MEDIA_KEY_STATUS_UNKNOWN = 0,
      /**
       * 可用状态。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      OFFLINE_MEDIA_KEY_STATUS_USABLE = 1,
      /**
       * 失活状态。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      OFFLINE_MEDIA_KEY_STATUS_INACTIVE = 2
    }
  
    /**
     * 枚举，设备证书状态。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    enum CertificateStatus {
      /**
       * 设备已安装设备证书。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CERT_STATUS_PROVISIONED = 0,
      /**
       * 设备未安装设备证书。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CERT_STATUS_NOT_PROVISIONED = 1,
      /**
       * 设备证书过期。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CERT_STATUS_EXPIRED = 2,
      /**
       * 设备证书无效。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CERT_STATUS_INVALID = 3,
      /**
       * 设备证书不可用。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      CERT_STATUS_UNAVAILABLE = 4
    }
  
    /**
     * 枚举，媒体密钥请求类型。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    enum MediaKeyRequestType {
      /**
       * 未知请求类型。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      MEDIA_KEY_REQUEST_TYPE_UNKNOWN = 0,
      /**
       * 初始化请求。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      MEDIA_KEY_REQUEST_TYPE_INITIAL = 1,
      /**
       * 续订请求。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      MEDIA_KEY_REQUEST_TYPE_RENEWAL = 2,
      /**
       * 释放请求。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      MEDIA_KEY_REQUEST_TYPE_RELEASE = 3,
      /**
       * 无请求。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      MEDIA_KEY_REQUEST_TYPE_NONE = 4,
      /**
       * 更新请求。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      MEDIA_KEY_REQUEST_TYPE_UPDATE = 5
    }
  
    /**
     * 枚举，内容保护级别。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    enum ContentProtectionLevel {
      /**
       * 未知内容保护级别。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      CONTENT_PROTECTION_LEVEL_UNKNOWN = 0,
      /**
       * 软件内容保护级别。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      CONTENT_PROTECTION_LEVEL_SW_CRYPTO = 1,
      /**
       * 硬件内容保护级别。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      CONTENT_PROTECTION_LEVEL_HW_CRYPTO = 2,
      /**
       * 硬件增强内容保护级别。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      CONTENT_PROTECTION_LEVEL_ENHANCED_HW = 3,
      /**
       * 最高内容保护级别。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      CONTENT_PROTECTION_LEVEL_MAX = 4
    }
  
    /**
     * 设备证书请求。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    interface ProvisionRequest {
      /**
       * 设备证书请求数据。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      data: Uint8Array;
      /**
       * Provision服务（设备证书请求服务）URL。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      defaultURL: string;
    }
  
    /**
     * 设备证书请求的可选数据。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    interface OptionsData {
      /**
       * 可选数据名。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      name: string;
      /**
       * 可选数据值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      value: string;
    }
  
    /**
     * 媒体密钥请求参数。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    interface MediaKeyRequest {
      /**
       * 媒体密钥请求类型。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      mediaKeyRequestType: MediaKeyRequestType;
      /**
       * 媒体密钥请求数据。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      data: Uint8Array;
      /**
       * 媒体密钥服务URL。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      defaultURL: string;
    }
  
    /**
     * 事件信息。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    interface EventInfo {
      /**
       * 事件信息数据。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      info: Uint8Array;
      /**
       * 事件扩展信息。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      extraInfo: string;
    }
  
    /**
     * 度量记录。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    interface StatisticKeyValue {
      /**
       * 度量记录名。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      name: string;
      /**
       * 度量记录值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      value: string;
    }
  
    /**
     * 媒体密钥状态。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    interface MediaKeyStatus {
      /**
       * 媒体密钥状态名称。常见名称包括：媒体密钥过期时间、内容保护安全级别等。具体可选名称由DRM解决方案决定。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      name: string;
      /**
       * 媒体密钥状态值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      value: string;
    }
  
    /**
     * 媒体密钥中密钥信息。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    interface KeysInfo {
      /**
       * 媒体密钥标识。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      keyId: Uint8Array;
      /**
       * 媒体密钥状态值。
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      value: string;
    }
  
    /**
     * 加密媒体内容的DRM信息。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    interface MediaKeySystemInfo {
      /**
       * Drm system ID.
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      uuid: string;
      /**
       * PSSH(protection scheme specific header) contain drm info.
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      pssh: Uint8Array;
    }
  
    /**
     * 插件信息。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    interface MediaKeySystemDescription {
      /**
       * Name of DRM plugin.
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 12 dynamic
       * @since 23 static
       */
      name: string;
      /**
       * UUID supported by DRM plugin.
       *
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 12 dynamic
       * @since 23 static
       */
      uuid: string;
    }
  
    /**
     * Get a MediaKeySystem's UUID.
     *
     * @param { string } name - The Digital Right Management solution name.
     * @returns { string } The MediaKeySystem uuid.
     * @throws { BusinessError } 401 - The parameter check failed.Possibly because:
     *     <br>1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    function getMediaKeySystemUuid(name: string): string;
  
    /**
     * Get all media key systems supported.
     *
     * @returns { MediaKeySystemDescription[] } The MediaKeySystem name and uuid info list.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    function getMediaKeySystems(): MediaKeySystemDescription[];
  
    /**
     * Creates a MediaKeySystem instance.
     *
     * @param { string } name - Used to point a Digital Right Management solution.
     * @returns { MediaKeySystem } The MediaKeySystem instance.
     * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
     *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700103 - Meet max MediaKeySystem num limit.
     * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11
     */
    function createMediaKeySystem(name: string): MediaKeySystem;
  
    /**
     * Creates a MediaKeySystem instance.
     *
     * @param { string } name - Used to point a Digital Right Management solution.
     * @returns { MediaKeySystem | undefined } The MediaKeySystem instance or undefined.
     * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
     *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700103 - Meet max MediaKeySystem num limit.
     * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @since 23 static
     */
    function createMediaKeySystem(name: string): MediaKeySystem | undefined;
  
    /**
     * Judge whether a system that specifies name, mimetype and content protection level is supported.
     *
     * @param { string } name - Used to point a Digital Right Management solution.
     * @param { string } mimeType - Used to specifies the media type.
     * @param { ContentProtectionLevel } level - Used to specifies the ContentProtectionLevel.
     * @returns { boolean } Whether these conditions will be met.
     * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
     *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     *     3.Parameter verification failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    function isMediaKeySystemSupported(name: string, mimeType: string, level: ContentProtectionLevel): boolean;
  
    /**
     * Judge whether a system that specifies name, mimetype is supported.
     *
     * @param { string } name - Used to point a Digital Right Management solution.
     * @param { string } mimeType - Used to specifies the media type.
     * @returns { boolean } Whether these conditions will be met.
     * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
     *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     *     3.Parameter verification failed.
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    function isMediaKeySystemSupported(name: string, mimeType: string): boolean;
  
    /**
     * Judge whether a system that specifies name is supported.
     *
     * @param { string } name - Used to point a Digital Right Management solution.
     * @returns { boolean } Whether these conditions will be met.
     * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
     *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed,
     *     the param name's length is zero or too big(exceeds 4096 Bytes).
     * @throws { BusinessError } 24700101 - All unknown errors.
     * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    function isMediaKeySystemSupported(name: string): boolean;
  
    /**
     * 支持MediaKeySystem实例管理、设备证书申请与处理、会话创建、离线媒体密钥管理、获取DRM度量记录、设备属性等。在调用MediaKeySystem方法之前，必须使用
     * [createMediaKeySystem]{@link @ohos.multimedia.drm:drm.createMediaKeySystem(name: string)}创建一个MediaKeySystem实例。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 14]
     * @since 11 dynamic
     * @since 23 static
     */
    interface MediaKeySystem {
      /**
       * 获取字符串类型的配置属性值。
       *
       * @param { string } configName - 配置属性名，不能为空，长度不能超过4096字节。<br>如果参数长度超过4096字节，会抛出错误码401。<br>属性名参考
       *     [PreDefinedConfigName]{@link @ohos.multimedia.drm:drm.PreDefinedConfigName}，具体支持的属性名由设备上DRM解决方案决定。
       * @returns { string } 返回字符串类型的配置属性值。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed,
       *     the param's length is zero or too big(exceeds 4096 Bytes).
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      getConfigurationString(configName: string): string;
  
      /**
       * 设置字符串类型的配置信息。
       *
       * @param { string } configName - 配置属性名，不能为空，属性名参考
       *     [PreDefinedConfigName]{@link @ohos.multimedia.drm:drm.PreDefinedConfigName}，具体支持的属性名由设备上DRM解决方案决定。
       * @param { string } value - 配置属性值。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      setConfigurationString(configName: string, value: string): void;
  
      /**
       * 获取数组类型的配置信息。
       *
       * @param { string } configName - 配置属性名，不能为空，属性名参考
       *     [PreDefinedConfigName]{@link @ohos.multimedia.drm:drm.PreDefinedConfigName}，具体支持的属性名由设备上DRM解决方案决定。
       * @returns { Uint8Array } 数组类型的配置属性值。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      getConfigurationByteArray(configName: string): Uint8Array;
  
      /**
       * 设置数组类型的配置信息。
       *
       * @param { string } configName - 配置属性名，不能为空，属性名参考
       *     [PreDefinedConfigName]{@link @ohos.multimedia.drm:drm.PreDefinedConfigName}，具体支持的属性名由设备上DRM解决方案决定。
       * @param { Uint8Array } value - 数组类型的配置属性值，具体属性值由设备上DRM解决方案决定。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      setConfigurationByteArray(configName: string, value: Uint8Array): void;
  
      /**
       * 获取性能度量记录。其中包括当前会话数、插件版本信息、每个会话最大三次解密耗时、解密次数和解密失败次数。
       *
       * @returns { StatisticKeyValue[] } 度量记录。
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      getStatistics(): StatisticKeyValue[];
  
      /**
       * 获取当前DRM解决方案支持的最大内容保护级别。
       *
       * @returns { ContentProtectionLevel } 返回设备支持的最大内容保护级别。
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      getMaxContentProtectionLevel(): ContentProtectionLevel;
  
      /**
       * 生成获取mediaKeySystem设备证书的请求。使用Promise异步回调。
       * 
       * 如果设备上已存在设备证书，调用此接口会返回失败。
       *
       * @returns { Promise<ProvisionRequest> } Promise对象，mediaKeySystem设备证书的请求。设备上如果已存在设备证书，会返回失败。
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      generateKeySystemRequest(): Promise<ProvisionRequest>;
  
      /**
       * 处理获得的设备证书请求的响应。使用Promise异步回调。
       * 
       * 如果设备上已存在设备证书，调用此接口会返回失败。
       *
       * @param { Uint8Array } response - 从DRM服务获取的设备证书响应。
       * @returns { Promise<void> } Promise对象，无返回结果。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      processKeySystemResponse(response: Uint8Array): Promise<void>;
  
      /**
       * 获取设备证书状态值。
       *
       * @returns { CertificateStatus } 设备证书状态值。
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      getCertificateStatus(): CertificateStatus;
  
      /**
       * 监听设备证书请求事件，获取事件信息。使用callback异步回调。
       *
       * @param { 'keySystemRequired' } type - 事件类型，通过
       *     [createMediaKeySystem]{@link @ohos.multimedia.drm:drm.createMediaKeySystem(name: string)}成功创建MediaKeySystem实例
       *     后可监听，需要设备证书时触发该事件。
       * @param { function } callback - 回调函数，返回事件信息。只要有该事件返回就证明需请求设备证书。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       */
      on(type: 'keySystemRequired', callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * Register keySystemRequired events.
       *
       * @param { function } callback - Used to listen for the key system required event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      onKeySystemRequired(callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * 注销设备证书请求事件的监听。使用callback异步回调。
       *
       * @param { 'keySystemRequired' } type - 监听事件类型，通过
       *     [createMediaKeySystem]{@link @ohos.multimedia.drm:drm.createMediaKeySystem(name: string)}成功创建MediaKeySystem实例
       *     后可监听。
       * @param { function } callback - 回调函数，返回事件信息。可选参数，不传时注销该事件类型的所有监听。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       */
      off(type: 'keySystemRequired', callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * Unregister keySystemRequired events.
       *
       * @param { function } [callback] - Used to listen for the key system required event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      offKeySystemRequired(callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * 创建指定内容保护级别的MediaKeySession实例。
       *
       * @param { ContentProtectionLevel } level - 内容保护级别。
       * @returns { MediaKeySession } MediaKeySession实例。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.The param level exceeds reasonable range,
       *     please use value in ContentProtectionLevel.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700104 - Meet max MediaKeySession num limit.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11
       */
      createMediaKeySession(level: ContentProtectionLevel): MediaKeySession;
  
      /**
       * Create a MediaKeySession instance with level.
       *
       * @param { ContentProtectionLevel } level - Used to specify the content protection level.
       * @returns { MediaKeySession | undefined } A MediaKeySession instance or undefined.
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.The param level exceeds reasonable range,
       *     please use value in ContentProtectionLevel.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700104 - Meet max MediaKeySession num limit.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      createMediaKeySession(level: ContentProtectionLevel): MediaKeySession | undefined;
  
      /**
       * 创建DRM解决方案默认内容保护级别的MediaKeySession实例。
       *
       * @returns { MediaKeySession } MediaKeySession实例。
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700104 - Meet max MediaKeySession num limit.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11
       */
      createMediaKeySession(): MediaKeySession;
  
      /**
       * Create a MediaKeySession instance.
       *
       * @returns { MediaKeySession | undefined } A MediaKeySession instance or undefined.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700104 - Meet max MediaKeySession num limit.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      createMediaKeySession(): MediaKeySession | undefined;
  
      /**
       * 获取离线媒体密钥标识列表。
       *
       * @returns { Uint8Array[] } 离线媒体密钥标识列表。
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      getOfflineMediaKeyIds(): Uint8Array[];
  
      /**
       * 获取指定离线媒体密钥标识的媒体密钥的状态值。
       *
       * @param { Uint8Array } mediaKeyId - 离线媒体密钥标识。
       * @returns { OfflineMediaKeyStatus } 离线媒体密钥状态值。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      getOfflineMediaKeyStatus(mediaKeyId: Uint8Array): OfflineMediaKeyStatus;
  
      /**
       * 删除指定媒体密钥标识的离线媒体密钥。
       *
       * @param { Uint8Array } mediaKeyId - 离线媒体密钥标识。
       * @throws { BusinessError } 401 - The parameter check failed.Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      clearOfflineMediaKeys(mediaKeyId: Uint8Array): void;
      /**
       * 销毁MediaKeySystem实例。
       *
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 14]
       * @since 11 dynamic
       * @since 23 static
       */
      destroy(): void;
    }
  
    /**
     * 支持媒体密钥管理。在调用MediaKeySession方法之前，必须使用
     * [createMediaKeySession]{@link @ohos.multimedia.drm:drm.MediaKeySystem.createMediaKeySession(level: ContentProtectionLevel)}
     * 获取一个MediaKeySession实例。
     *
     * @syscap SystemCapability.Multimedia.Drm.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    interface MediaKeySession {
  
      /**
       * 生成媒体密钥请求。使用Promise异步回调。
       *
       * @param { string } mimeType - 媒体类型，DRM解决方案名称，可通过
       *     [isMediaKeySystemSupported]{@link @ohos.multimedia.drm:drm.isMediaKeySystemSupported(name: string, mimeType: string)}
       *     查询。
       * @param { Uint8Array } initData - 初始数据，即加密流中的PSSH box中的实际PSSH数据。可通过监听AVPlayer的'mediaKeySystemInfoUpdate'事件（
       *     [on('mediaKeySystemInfoUpdate')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'mediaKeySystemInfoUpdate', callback: Callback<Array<drm.MediaKeySystemInfo>>)}
       *     ）获取DRM信息，从中提取pssh字段生成initData。具体开发流程可参考
       *     [基于AVPlayer播放DRM节目(ArkTS)](docroot://media/drm/drm-avplayer-arkts-integration.md)。
       * @param { int } mediaKeyType - 媒体密钥类型。取值范围为[0, 1]。0表示在线，1表示离线。<br>传入指定范围外的参数会导致参数校验失败，抛出错误码401。
       * @param { OptionsData[] } options - 可选数据。默认值为空数组。
       * @returns { Promise<MediaKeyRequest> } Promise对象，媒体密钥请求。
       * @throws { BusinessError } 401 -The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      generateMediaKeyRequest(mimeType: string, initData: Uint8Array, mediaKeyType: int, options?: OptionsData[]): Promise<MediaKeyRequest>;
  
      /**
       * 处理媒体密钥响应。使用Promise异步回调。
       *
       * @param { Uint8Array } response - 媒体密钥响应。
       * @returns { Promise<Uint8Array> } Promise对象，媒体密钥标识。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      processMediaKeyResponse(response: Uint8Array): Promise<Uint8Array>;
  
      /**
       * 检查当前媒体密钥状态。
       *
       * @returns { MediaKeyStatus[] } 当前媒体密钥状态值。
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      checkMediaKeyStatus(): MediaKeyStatus[];
  
      /**
       * 清除当前媒体密钥。
       *
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      clearMediaKeys(): void;
  
      /**
       * 生成离线媒体密钥释放请求。使用Promise异步回调。
       *
       * @param { Uint8Array } mediaKeyId - 离线媒体密钥标识。
       * @returns { Promise<Uint8Array> } Promise对象，设备上的DRM解决方案支持离线媒体密钥释放处理，则返回离线媒体密钥释放请求。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      generateOfflineReleaseRequest(mediaKeyId: Uint8Array): Promise<Uint8Array>;
  
      /**
       * 处理离线媒体密钥释放响应。使用Promise异步回调。
       * 
       * 如果设备上的DRM解决方案不支持离线媒体密钥释放，将抛出错误码24700101。
       *
       * @param { Uint8Array } mediaKeyId - 离线媒体密钥标识。
       * @param { Uint8Array } response - 离线媒体密钥释放响应。
       * @returns { Promise<void> } Promise对象，无返回结果。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      processOfflineReleaseResponse(mediaKeyId: Uint8Array, response: Uint8Array): Promise<void>;
  
      /**
       * 恢复离线媒体密钥。使用Promise异步回调。
       *
       * @param { Uint8Array } mediaKeyId - 离线媒体密钥标识。
       * @returns { Promise<void> } Promise对象，无返回结果。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      restoreOfflineMediaKeys(mediaKeyId: Uint8Array): Promise<void>;
  
      /**
       * 获取当前会话的内容保护级别。
       *
       * @returns { ContentProtectionLevel } 返回当前会话内容保护级别。
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      getContentProtectionLevel(): ContentProtectionLevel;
  
      /**
       * 是否需要安全解码。
       *
       * @param { string } mimeType - 媒体类型，支持的媒体类型取决于DRM解决方案，可通过
       *     [isMediaKeySystemSupported]{@link @ohos.multimedia.drm:drm.isMediaKeySystemSupported(name: string, mimeType: string)}
       *     查询。
       * @returns { boolean } 是否需要安全解码，true表示需要安全解码，false表示不需要安全解码。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      requireSecureDecoderModule(mimeType: string): boolean;
  
      /**
       * 监听密钥请求事件。使用callback异步回调。
       *
       * @param { 'keyRequired' } type - 事件类型，固定为'keyRequired'，当播放DRM节目需要获取媒体密钥时触发。
       * @param { function } callback - 回调函数，返回事件信息。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      on(type: 'keyRequired', callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * Register keyRequired event.
       *
       * @param { function } callback - used to listen for the key required event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      onKeyRequired(callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * 注销密钥请求事件监听。使用callback异步回调。
       * 
       * 该接口用于注销已在on('keyRequired')中注册的监听，当播放DRM节目需要获取媒体密钥时触发的事件。
       *
       * @param { 'keyRequired' } type - 监听事件类型，固定为'keyRequired'。
       * @param { function } callback - 回调函数，返回事件信息。可选参数，不传时注销该事件类型的所有监听。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      off(type: 'keyRequired', callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * Unregister keyRequired event.
       *
       * @param { function } [callback] - used to listen for the key required event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      offKeyRequired(callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * 监听密钥过期事件。使用callback异步回调。
       *
       * @param { 'keyExpired' } type - 监听事件类型，固定为'keyExpired'。密钥过期时触发。
       * @param { function } callback - 回调函数，返回事件信息。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      on(type: 'keyExpired', callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * Register keyExpired event.
       *
       * @param { function } callback - Used to listen for the key required event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      onKeyExpired(callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * 注销密钥过期事件监听。使用callback异步回调。
       *
       * @param { 'keyExpired' } type - 监听事件类型，固定为'keyExpired'。
       * @param { function } callback - 回调函数，返回事件信息。可选参数，不传时注销该事件类型的所有监听。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      off(type: 'keyExpired', callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * Unregister keyExpired event.
       *
       * @param { function } [callback] - Used to listen for the key required event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      offKeyExpired(callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * 监听DRM解决方案自定义事件。使用callback异步回调。
       *
       * @param { 'vendorDefined' } type - 监听事件，固定为'vendorDefined'。自定义事件发生时触发。
       * @param { function } callback - 回调函数，返回事件信息。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      on(type: 'vendorDefined', callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * Register vendorDefined event.
       *
       * @param { function } callback - Used to listen for the vendor defined event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      onVendorDefined(callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * 注销DRM解决方案自定义事件监听。使用callback异步回调。
       *
       * @param { 'vendorDefined' } type - 监听事件，固定为'vendorDefined'。
       * @param { function } callback - 回调函数，返回事件信息。可选参数，不传时注销该事件类型的所有监听。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      off(type: 'vendorDefined', callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * Unregister vendorDefined event.
       *
       * @param { function } [callback] - Used to listen for the vendor defined event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      offVendorDefined(callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * 监听密钥过期更新事件。使用callback异步回调。
       *
       * @param { 'expirationUpdate' } type - 监听事件类型，固定为'expirationUpdate'。密钥过期更新时触发。
       * @param { function } callback - 回调函数，返回事件信息。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      on(type: 'expirationUpdate', callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * Register expirationUpdate event.
       *
       * @param { function } callback - Used to listen for expiration update event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      onExpirationUpdate(callback: (eventInfo: EventInfo) => void): void;
  
      /**
       * 注销过期更新事件监听。使用callback异步回调。
       *
       * @param { 'expirationUpdate' } type - 监听事件类型，固定为'expirationUpdate'。
       * @param { function } callback - 回调函数，返回事件信息。可选参数，不传时注销该事件类型的所有监听。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      off(type: 'expirationUpdate', callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * Unregister expirationUpdate event.
       *
       * @param { function } [callback] - Used to listen for expiration update event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      offExpirationUpdate(callback?: (eventInfo: EventInfo) => void): void;
  
      /**
       * 监听密钥变化事件。使用callback异步回调。
       *
       * @param { 'keysChange' } type - 监听事件类型，固定为'keysChange'。密钥变化时触发。
       * @param { function } callback - 回调函数，返回事件信息，包含密钥标识和密钥状态描述的列表及密钥是否可用。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      on(type: 'keysChange', callback: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void;
  
      /**
       * Register keysChange event.
       *
       * @param { function } callback - Used to listen for keys change event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      onKeysChange(callback: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void;
  
      /**
       * 注销密钥变化事件监听。使用callback异步回调。
       *
       * @param { 'keysChange' } type - 监听事件类型，固定为'keysChange'。
       * @param { function } callback - 回调函数，返回事件信息，包含密钥标识和密钥状态描述的列表及密钥是否可用。<br>可选参数，不传时注销该事件类型的所有监听。
       * @throws { BusinessError } 401 - The parameter check failed. Possibly because:
       *     1.Mandatory parameters are left unspecified or too many parameters. 2.Incorrect parameter types.
       *     3.Parameter verification failed.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       */
      off(type: 'keysChange', callback?: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void;
  
      /**
       * Unregister keysChange event.
       *
       * @param { function } [callback] - Used to listen for keys change event.
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @since 23 static
       */
      offKeysChange(callback?: (keyInfo: KeysInfo[], newKeyAvailable: boolean) => void): void;
  
      /**
       * 销毁MediaKeySession实例。
       *
       * @throws { BusinessError } 24700101 - All unknown errors.
       * @throws { BusinessError } 24700201 - Fatal service error, for example, service died.
       * @syscap SystemCapability.Multimedia.Drm.Core
       * @atomicservice [since 12]
       * @since 11 dynamic
       * @since 23 static
       */
      destroy(): void;
    }
  }
  
  export default drm;