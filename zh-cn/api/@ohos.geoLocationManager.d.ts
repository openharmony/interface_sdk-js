/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @file 位置服务
 * @kit LocationKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
/*** if arkts dynamic */
import { WantAgent } from './@ohos.wantAgent';
/*** endif */
/*** if arkts static */
import { WantAgent } from '@ohos.app.ability.wantAgent';
/*** endif */
import { NotificationRequest } from './notification/notificationRequest';

/**
 * 位置服务提供GNSS定位、网络定位（蜂窝基站、WLAN、蓝牙定位技术）、地理编码、逆地理编码、国家码和地理围栏等基本功能。
 * 
 * 使用位置服务时请打开设备“位置”开关。如果“位置”开关关闭并且代码未设置捕获异常，可能导致应用异常。
 * 
 *
 * @syscap SystemCapability.Location.Location.Core [since 11]
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace geoLocationManager {
  /**
   * 开启位置变化订阅，并发起定位请求。使用callback异步回调。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locationChange' } type - 设置事件类型。type为“locationChange”，表示位置变化。
   * @param { LocationRequest } request - 设置位置请求参数。ContinuousLocationRequest为API12新增参数。 [since 9 - 11]
   * @param { LocationRequest | ContinuousLocationRequest } request - 设置位置请求参数。ContinuousLocationRequest为API12新增参
   *     数。 [since 12]
   * @param { Callback<Location> } callback - 回调函数，返回位置信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters
   *     are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('locationChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location. [since 9 - 17]
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function on(type: 'locationChange', request: LocationRequest | ContinuousLocationRequest,
      callback: Callback<Location>): void;

  /**
   * 开启位置变化订阅，并发起定位请求。使用callback异步回调。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION [since 23]
   * @param { LocationRequest | ContinuousLocationRequest } request - 设置位置请求参数。 [since 23]
   * @param { Callback<Location> } callback - 回调函数，返回位置信息。 [since 23]
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API. [since 23]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed. [since 23]
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onLocationChange} due to limited device capabilities. [since 23]
   * @throws { BusinessError } 3301000 - The location service is unavailable. [since 23]
   * @throws { BusinessError } 3301100 - The location switch is off. [since 23]
   * @syscap SystemCapability.Location.Location.Core [since 23]
   * @since 23 static
   * @since 26.0.0 dynamic
   */
  function onLocationChange(request: LocationRequest | ContinuousLocationRequest,
  callback: Callback<Location>): void;

  /**
   * 关闭位置变化订阅，并删除对应的定位请求。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION [since 9 - 24]
   * @param { 'locationChange' } type - 设置事件类型。type为“locationChange”，表示位置变化。
   * @param { Callback<Location> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致，否则会取消订阅失败且不会返回任何错误码。若无此参数，则取消当前类型的所有
   *     订阅。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. Introduced in API 9 and will not be threw above
   *     API 24. [since 9 - 24]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('locationChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   *     Introduced in API 9 and will not be threw above API 17. [since 9 - 17]
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   *     Introduced in API 9 and will not be threw above API 17. [since 9 - 17]
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function off(type: 'locationChange', callback?: Callback<Location>): void;

  /**
   * 关闭位置变化订阅，并删除对应的定位请求。
   * 
   * 当传入的callback与onLocationChange接口传入的callback不一致时会抛出401错误码。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION [since 23 - 24]
   * @param { Callback<Location> } [callback] - 需要取消订阅的回调函数。该回调函数需要与onLocationChange接口传入的回调函数保持一致，否则将抛出401错误码。若无此参数，则取消所
   *     有订阅。 [since 23]
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API. Introduced in API 9 and
   *     will not be threw above API 24. [since 23 - 24]
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offLocationChange} due to limited device capabilities. [since 23]
   * @throws { BusinessError } 3301000 - The location service is unavailable. [since 23]
   * @syscap SystemCapability.Location.Location.Core [since 23]
   * @since 23 static
   * @since 26.0.0 dynamic
   */
  function offLocationChange(callback?: Callback<Location>): void;

  /**
   * 订阅持续定位过程中的错误码。使用callback异步回调。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locationError' } type - 设置事件类型。type为“locationError”，表示持续定位过程中的错误码变化。
   * @param { Callback<LocationError> } callback - 回调函数，返回持续定位过程中的错误码。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not
   *     have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters
   *     are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('locationError')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'locationError', callback: Callback<LocationError>): void;

  /**
   * 订阅持续定位过程中的错误码，使用callback异步回调。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<LocationError> } callback - 回调函数，返回持续定位过程中的错误码。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onLocationError} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function onLocationError(callback: Callback<LocationError>): void;

  /**
   * 取消订阅持续定位过程中的错误码。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locationError' } type - 设置事件类型。type为“locationError”，表示持续定位过程中的错误码变化。
   * @param { Callback<LocationError> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are
   *     left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('locationError')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'locationError', callback?: Callback<LocationError>): void;

  /**
   * 取消订阅持续定位过程中的错误码。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<LocationError> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offLocationError} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function offLocationError(callback?: Callback<LocationError>): void;

  /**
   * 订阅位置服务状态变化。使用callback异步回调。
   *
   * @param { 'locationEnabledChange' } type - 设置事件类型。type为“locationEnabledChange”，表示位置服务状态。
   * @param { Callback<boolean> } callback - 回调函数。返回true表示位置信息开关已经开启；返回false表示位置信息开关已经关闭。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('locationEnabledChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'locationEnabledChange', callback: Callback<boolean>): void;

  /**
   * 订阅位置服务状态变化。使用callback异步回调。
   *
   * @param { Callback<boolean> } callback - 回调函数。返回true表示位置信息开关已经开启；返回false表示位置信息开关已经关闭。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onLocationEnabledChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function onLocationEnabledChange(callback: Callback<boolean>): void;

  /**
   * 取消订阅位置服务状态变化。
   *
   * @param { 'locationEnabledChange' } type - 设置事件类型。type为“locationEnabledChange”，表示位置服务状态。
   * @param { Callback<boolean> } [callback] - 需要取消订阅的回调函数。返回true表示位置信息开关已经开启；返回false表示位置信息开关已经关闭。该回调函数需要与on接口传入的回调函数保持一
   *     致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('locationEnabledChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'locationEnabledChange', callback?: Callback<boolean>): void;

  /**
   * 取消订阅位置服务状态变化。
   *
   * @param { Callback<boolean> } [callback] - 需要取消订阅的回调函数。返回true表示位置信息开关已经开启；返回false表示位置信息开关已经关闭。该回调函数需要与on接口传入的回调函数保持一
   *     致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offLocationEnabledChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function offLocationEnabledChange(callback?: Callback<boolean>): void;

  /**
   * 订阅缓存GNSS定位结果上报事件。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。使用callback异步回
   * 调。调用该接口前建议先通过
   * [geoLocationManager.isCachedGnssServiceSupported]{@link geoLocationManager.isCachedGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cachedGnssLocationsChange' } type - 设置事件类型。type为“cachedGnssLocationsChange”，表示GNSS缓存定位结果上报。
   * @param { CachedGnssLocationsRequest } request - GNSS缓存功能配置参数。
   * @param { Callback<Array<Location>> } callback - 回调函数，返回GNSS缓存位置。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('cachedGnssLocationsChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location. [since 9 - 17]
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'cachedGnssLocationsChange', request: CachedGnssLocationsRequest, 
      callback: Callback<Array<Location>>): void;

  /**
   * 订阅缓存GNSS定位结果上报事件。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。使用callback异步回
   * 调。调用该接口前建议先通过
   * [geoLocationManager.isCachedGnssServiceSupported]{@link geoLocationManager.isCachedGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { CachedGnssLocationsRequest } request - GNSS缓存功能配置参数。
   * @param { Callback<Array<Location>> } callback - 回调函数，返回GNSS缓存位置。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onCachedGnssLocationsChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function onCachedGnssLocationsChange(request: CachedGnssLocationsRequest, callback: Callback<Array<Location>>): void;

  /**
   * 取消订阅缓存GNSS定位结果上报事件。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。调用该接口前建议先通过
   * [geoLocationManager.isCachedGnssServiceSupported]{@link geoLocationManager.isCachedGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'cachedGnssLocationsChange' } type - 设置事件类型。type为“cachedGnssLocationsChange”，表示GNSS缓存定位结果上报。
   * @param { Callback<Array<Location>> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('cachedGnssLocationsChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location. [since 9 - 17]
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'cachedGnssLocationsChange', callback?: Callback<Array<Location>>): void;

  /**
   * 取消订阅缓存GNSS定位结果上报事件。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。调用该接口前建议先通过
   * [geoLocationManager.isCachedGnssServiceSupported]{@link geoLocationManager.isCachedGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<Array<Location>> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offCachedGnssLocationsChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function offCachedGnssLocationsChange(callback?: Callback<Array<Location>>): void;

  /**
   * 订阅GNSS卫星状态信息上报事件。使用callback异步回调。调用该接口前建议先通过
   * [geoLocationManager.isGnssServiceSupported]{@link geoLocationManager.isGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'satelliteStatusChange' } type - 设置事件类型。type为“satelliteStatusChange”，表示订阅GNSS卫星状态信息上报。
   * @param { Callback<SatelliteStatusInfo> } callback - 回调函数，返回GNSS卫星状态信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('satelliteStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'satelliteStatusChange', callback: Callback<SatelliteStatusInfo>): void;

  /**
   * 订阅GNSS卫星状态信息上报事件。使用callback异步回调。调用该接口前建议先通过
   * [geoLocationManager.isGnssServiceSupported]{@link geoLocationManager.isGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<SatelliteStatusInfo> } callback - 回调函数，返回GNSS卫星状态信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onSatelliteStatusChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function onSatelliteStatusChange(callback: Callback<SatelliteStatusInfo>): void;

  /**
   * 取消订阅GNSS卫星状态信息上报事件。调用该接口前建议先通过
   * [geoLocationManager.isGnssServiceSupported]{@link geoLocationManager.isGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'satelliteStatusChange' } type - 设置事件类型。type为“satelliteStatusChange”，表示订阅GNSS卫星状态信息上报。
   * @param { Callback<SatelliteStatusInfo> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('satelliteStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'satelliteStatusChange', callback?: Callback<SatelliteStatusInfo>): void;

  /**
   * 取消订阅GNSS卫星状态信息上报事件。调用该接口前建议先通过
   * [geoLocationManager.isGnssServiceSupported]{@link geoLocationManager.isGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<SatelliteStatusInfo> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offSatelliteStatusChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function offSatelliteStatusChange(callback?: Callback<SatelliteStatusInfo>): void;

  /**
   * 订阅GNSS NMEA信息上报事件。使用callback异步回调。调用该接口前建议先通过
   * [geoLocationManager.isGnssServiceSupported]{@link geoLocationManager.isGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'nmeaMessage' } type - 设置事件类型。type为“nmeaMessage”，表示订阅GNSS NMEA信息上报。
   * @param { Callback<string> } callback - 回调函数，返回GNSS NMEA信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('nmeaMessage')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'nmeaMessage', callback: Callback<string>): void;
  
  /**
   * 订阅GNSS NMEA信息上报事件。使用callback异步回调。调用该接口前建议先通过
   * [geoLocationManager.isGnssServiceSupported]{@link geoLocationManager.isGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<string> } callback - 回调函数，返回GNSS NMEA信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onNmeaMessage} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function onNmeaMessage(callback: Callback<string>): void;

  /**
   * 取消订阅GNSS NMEA信息上报事件。调用该接口前建议先通过
   * [geoLocationManager.isGnssServiceSupported]{@link geoLocationManager.isGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'nmeaMessage' } type - 设置事件类型。type为“nmeaMessage”，表示订阅GNSS NMEA信息上报。
   * @param { Callback<string> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('nmeaMessage')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'nmeaMessage', callback?: Callback<string>): void;

  /**
   * 取消订阅GNSS NMEA信息上报事件。调用该接口前建议先通过
   * [geoLocationManager.isGnssServiceSupported]{@link geoLocationManager.isGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<string> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offNmeaMessage} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 23 static
   */
  function offNmeaMessage(callback?: Callback<string>): void;

  /**
   * 添加一个围栏，并订阅地理围栏事件。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。调用该接口前建议先通过
   * [geoLocationManager.isGnssFenceServiceSupported]{@link geoLocationManager.isGnssFenceServiceSupported}接口判断对应能力是否支持。
   * 单应用添加地理围栏上限为100，超过上限将移除剩余地理围栏中存活时间最短的围栏。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'gnssFenceStatusChange' } type - 设置事件类型。type为“gnssFenceStatusChange”，表示订阅围栏事件上报。
   * @param { GeofenceRequest } request - 围栏的配置参数。
   * @param { WantAgent } want - 用于接收地理围栏事件上报（进出围栏）。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.on('
   *     gnssFenceStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301600 - Failed to operate the geofence.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 9 dynamic
   */
  function on(type: 'gnssFenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

  /**
   * 添加一个围栏，并订阅地理围栏事件。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。调用该接口前建议先通过
   * [geoLocationManager.isGnssFenceServiceSupported]{@link geoLocationManager.isGnssFenceServiceSupported}接口判断对应能力是否支持。
   * 单应用添加地理围栏上限为100，超过上限将移除剩余地理围栏中存活时间最短的围栏。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { GeofenceRequest } request - 围栏的配置参数。
   * @param { WantAgent } want - 用于接收地理围栏事件上报（进出围栏）。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onGnssFenceStatusChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301600 - Failed to operate the geofence.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 26.1.0 static
   */
  function onGnssFenceStatusChange(request: GeofenceRequest, want: WantAgent): void;

  /**
   * 删除一个围栏，并取消订阅该围栏事件。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。调用该接口前建议先通过
   * [geoLocationManager.isGnssFenceServiceSupported]{@link geoLocationManager.isGnssFenceServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION [since 9 - 24]
   * @param { 'gnssFenceStatusChange' } type - 设置事件类型。type为“gnssFenceStatusChange”，表示订阅围栏事件上报。
   * @param { GeofenceRequest } request - 围栏的配置参数。
   * @param { WantAgent } want - 用于接收地理围栏事件上报（进出围栏）。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 9 - 24]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('gnssFenceStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301600 - Failed to operate the geofence.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 9 dynamic
   */
  function off(type: 'gnssFenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

  /**
   * 删除一个围栏，并取消订阅该围栏事件。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。调用该接口前建议先通过
   * [geoLocationManager.isGnssFenceServiceSupported]{@link geoLocationManager.isGnssFenceServiceSupported}接口判断对应能力是否支持。
   *
   * @param { GeofenceRequest } request - 围栏的配置参数。
   * @param { WantAgent } want - 用于接收地理围栏事件上报（进出围栏）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offGnssFenceStatusChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301600 - Failed to operate the geofence.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 26.1.0 static
   */
  function offGnssFenceStatusChange(request: GeofenceRequest, want: WantAgent): void;

  /**
   * 订阅国家码信息变化事件。使用callback异步回调。
   *
   * @param { 'countryCodeChange' } type - 设置事件类型。type为“countryCodeChange”，表示订阅国家码信息变化事件。
   * @param { Callback<CountryCode> } callback - 回调函数，返回国家码信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('countryCodeChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function on(type: 'countryCodeChange', callback: Callback<CountryCode>): void;

  /**
   * 订阅国家码信息变化事件。使用callback异步回调。
   *
   * @param { Callback<CountryCode> } callback - 回调函数，返回国家码信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onCountryCodeChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function onCountryCodeChange(callback: Callback<CountryCode>): void;

  /**
   * 取消订阅国家码变化事件。
   *
   * @param { 'countryCodeChange' } type - 设置事件类型。type为“countryCodeChange”，表示取消订阅国家码信息变化事件。
   * @param { Callback<CountryCode> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('countryCodeChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   */
  function off(type: 'countryCodeChange', callback?: Callback<CountryCode>): void;

  /**
   * 取消订阅国家码变化事件。
   *
   * @param { Callback<CountryCode> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offCountryCodeChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function offCountryCodeChange(callback?: Callback<CountryCode>): void;

  /**
   * 订阅定位业务所需数据的变化，主要包含WiFi和蓝牙扫描信息；根据入参决定是否启动WiFi和蓝牙扫描。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locatingRequiredDataChange' } type - 设置事件类型。
   * @param { LocatingRequiredDataConfig } config - 表示获取定位所需数据时的配置参数。
   * @param { Callback<Array<LocatingRequiredData>> } [callback] - 回调函数，返回定位业务所需数据。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('locatingRequiredDataChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301800 - Failed to start WiFi or Bluetooth scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'locatingRequiredDataChange', config: LocatingRequiredDataConfig, 
      callback: Callback<Array<LocatingRequiredData>>): void;

  /**
   * 订阅定位业务所需数据的变化，主要包含WiFi和蓝牙扫描信息；根据入参决定是否启动WiFi和蓝牙扫描。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { LocatingRequiredDataConfig } config - 表示获取定位所需数据时的配置参数。
   * @param { Callback<Array<LocatingRequiredData>> } callback - 回调函数，返回定位业务所需数据。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onLocatingRequiredDataChange} due to limited device capabilities.
   * @throws { BusinessError } 3301800 - Failed to start WiFi or Bluetooth scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 23 static
   */
  function onLocatingRequiredDataChange(config: LocatingRequiredDataConfig, 
      callback: Callback<Array<LocatingRequiredData>>): void;

  /**
   * 取消订阅定位业务所需数据的变化，并停止WiFi和蓝牙扫描。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'locatingRequiredDataChange' } type - 设置事件类型。
   * @param { Callback<Array<LocatingRequiredData>> } [callback] - 需要取消订阅的回调函数。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.off('
   *     locatingRequiredDataChange')} due to limited device capabilities.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: 'locatingRequiredDataChange', callback?: Callback<Array<LocatingRequiredData>>): void;
  
  /**
   * 取消订阅定位业务所需数据的变化，并停止WiFi和蓝牙扫描。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<Array<LocatingRequiredData>> } [callback] - 需要取消订阅的回调函数。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offLocatingRequiredDataChange} due to limited device capabilities.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 23 static
   */
  function offLocatingRequiredDataChange(callback?: Callback<Array<LocatingRequiredData>>): void;

  /**
   * 订阅定位图标状态变化。使用callback异步回调。
   *
   * @param { 'locationIconStatusChange' } type - 设置事件类型。
   * @param { Callback<LocationIconStatus> } callback - 回调函数，返回定位图标状态。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.on('
   *     locationIconStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 12 dynamic
   */
  function on(type: 'locationIconStatusChange', callback: Callback<LocationIconStatus>): void;

  /**
   * 订阅定位图标状态变化。使用callback异步回调。
   *
   * @param { Callback<LocationIconStatus> } callback - 回调函数，返回定位图标状态。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onLocationIconStatusChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 23 static
   */
  function onLocationIconStatusChange(callback: Callback<LocationIconStatus>): void;

  /**
   * 订阅定位图标状态变化。使用callback异步回调。
   *
   * @param { 'locationIconStatusChange' } type - 设置事件类型。
   * @param { Callback<LocationIconStatus> } [callback] - 回调函数，返回定位图标状态。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.off('
   *     locationIconStatusChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 12 dynamic
   */
  function off(type: 'locationIconStatusChange', callback?: Callback<LocationIconStatus>): void;

  /**
   * 取消定位图标状态变化。
   *
   * @param { Callback<LocationIconStatus> } [callback] - 需要取消订阅的回调函数。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offLocationIconStatusChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 23 static
   */
  function offLocationIconStatusChange(callback?: Callback<LocationIconStatus>): void;

  /**
   * 订阅蓝牙扫描信息上报事件，使用callback异步回调。
   * 
   * 本API会启动蓝牙扫描，为了避免产生较多功耗，需要开发者在适当的时机调用 
   * [geoLocationManager.off('bluetoothScanResultChange')]{@link geoLocationManager.off(type: 'bluetoothScanResultChange', callback?: Callback<BluetoothScanResult>)}
   * 接口停止蓝牙扫描。
   * 
   * 当前仅支持扫描BLE设备。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'bluetoothScanResultChange' } type - 设置事件类型。type为“bluetoothScanResultChange”，表示订阅蓝牙扫描信息上报事件。
   * @param { Callback<BluetoothScanResult> } callback - 回调函数，返回蓝牙扫描信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does
   *     not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.on('bluetoothScanResultChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 16 dynamic
   */
  function on(type: 'bluetoothScanResultChange', callback: Callback<BluetoothScanResult>): void;

  /**
   * 订阅蓝牙扫描信息上报事件，使用callback异步回调。
   * 
   * 本API会启动蓝牙扫描，为了避免产生较多功耗，需要开发者在适当的时机调用 
   * [geoLocationManager.off('bluetoothScanResultChange')]{@link geoLocationManager.off(type: 'bluetoothScanResultChange', callback?: Callback<BluetoothScanResult>)}
   * 接口停止蓝牙扫描。
   * 
   * 当前仅支持扫描BLE设备。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<BluetoothScanResult> } callback - 回调函数，返回蓝牙扫描信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.onBluetoothScanResultChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function onBluetoothScanResultChange(callback: Callback<BluetoothScanResult>): void;

  /**
   * 取消订阅蓝牙扫描信息上报事件并停止蓝牙扫描。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { 'bluetoothScanResultChange' } type - 设置事件类型。type为“bluetoothScanResultChange”，表示停止订阅蓝牙扫描信息上报事件。
   * @param { Callback<BluetoothScanResult> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.off('bluetoothScanResultChange')} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 16 dynamic
   */
  function off(type: 'bluetoothScanResultChange', callback?: Callback<BluetoothScanResult>): void;

  /**
   * 取消订阅蓝牙扫描信息上报事件并停止蓝牙扫描。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<BluetoothScanResult> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.offBluetoothScanResultChange} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 23 static
   */
  function offBluetoothScanResultChange(callback?: Callback<BluetoothScanResult>): void;

  /**
   * 获取当前位置，使用callback异步回调。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { CurrentLocationRequest } request - 设置位置请求参数。 [since 9 - 11]
   * @param { CurrentLocationRequest | SingleLocationRequest } request - 设置位置请求参数。SingleLocationRequest为API12新增参
   *     数。 [since 12]
   * @param { AsyncCallback<Location> } callback - 回调函数，返回当前位置信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCurrentLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentLocation(request: CurrentLocationRequest | SingleLocationRequest,
  callback: AsyncCallback<Location>): void;

  /**
   * 获取当前位置，使用callback异步回调。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<Location> } callback - 回调函数，返回当前位置信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCurrentLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentLocation(callback: AsyncCallback<Location>): void;

  /**
   * 获取当前位置，使用Promise异步回调。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { CurrentLocationRequest } [request] - 设置位置请求参数。[since 9 - 11]
   * @param { CurrentLocationRequest | SingleLocationRequest } [request] - 设置位置请求参数。SingleLocationRequest为API12新增参
   *     数。若无此参数设置，则使用CurrentLocationRequest为默认值。 [since 12]
   * @returns { Promise<Location> } Promise对象，返回当前位置信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does
   *     not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCurrentLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentLocation(request?: CurrentLocationRequest | SingleLocationRequest):
  Promise<Location>;

  /**
   * 获取上一次位置。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Location } 位置信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getLastLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLastLocation(): Location;

  /**
   * 判断位置服务是否已经开启。
   *
   * @returns { boolean } true：位置信息开关已开启。false：位置信息开关已关闭。
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.isLocationEnabled} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isLocationEnabled(): boolean;

  /**
   * 判断指定系统账号的位置开关是否开启。
   *
   * @param { int } userId - 系统账号ID。
   * @returns { boolean } true：位置信息开关已开启。 false：位置信息开关已关闭。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.isLocationEnabledByUserId} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function isLocationEnabledByUserId(userId: int): boolean;

  /**
   * 打开位置服务，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS [since 9 - 19]
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH [since 20]
   * @param { AsyncCallback<void> } callback - 回调函数，当打开位置服务成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.enableLocation} due
   *     to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableLocation(callback: AsyncCallback<void>): void;

  /**
   * 打开位置服务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS [since 9 - 19]
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH [since 20]
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.enableLocation} due
   *     to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableLocation(): Promise<void>;

  /**
   * 打开指定系统账号的定位开关，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH
   * @param { int } userId - 系统账号ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.enableLocationByUserId} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function enableLocationByUserId(userId: int): Promise<void>;

  /**
   * 关闭位置服务。
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS [since 9 - 19]
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH [since 20]
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.disableLocation} due
   *     to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableLocation(): void;

  /**
   * 关闭指定系统账号的定位开关。
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS and ohos.permission.CONTROL_LOCATION_SWITCH
   * @param { int } userId - 系统账号ID。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call ${geoLocationManager.disableLocationByUserId} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function disableLocationByUserId(userId: int): void;

  /**
   * 设置应用获取位置信息是否受位置开关控制。
   * 设置为true后，允许应用在位置开关关闭的场景获取到位置信息，有效时间为从调用接口成功开始的两分钟。
   *
   * @permission ohos.permission.LOCATION_SWITCH_IGNORED
   * @param { boolean } isIgnored - true：需要在位置开关关闭的场景下获取位置信息。有效时间为从调用接口成功开始的两分钟。
   * 	 false：不需要在位置开关关闭的场景下获取位置信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call 
   *     ${geoLocationManager.setLocationSwitchIgnored} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setLocationSwitchIgnored(isIgnored: boolean): void;

  /**
   * 调用逆地理编码服务，将坐标转换为地理描述，使用callback异步回调。
   *
   * @param { ReverseGeoCodeRequest } request - 设置逆地理编码请求的相关参数。
   * @param { AsyncCallback<Array<GeoAddress>> } callback - 回调函数，返回逆地理编码结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getAddressesFromLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301300 - Reverse geocoding query failed.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;

  /**
   * 调用逆地理编码服务，将坐标转换为地理描述，使用Promise异步回调。
   *
   * @param { ReverseGeoCodeRequest } request - 设置逆地理编码请求的相关参数。
   * @returns { Promise<Array<GeoAddress>> } Promise对象，返回地理描述信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getAddressesFromLocation} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301300 - Reverse geocoding query failed.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>;

  /**
   * 调用地理编码服务，将地理描述转换为具体坐标，使用callback异步回调。
   *
   * @param { GeoCodeRequest } request - 设置地理编码请求的相关参数。
   * @param { AsyncCallback<Array<GeoAddress>> } callback - 回调函数，返回地理编码结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are
   *     left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301400 - Geocoding query failed.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;

  /**
   * 调用地理编码服务，将地理描述转换为具体坐标，使用Promise异步回调。
   *
   * @param { GeoCodeRequest } request - 设置地理编码请求的相关参数。
   * @returns { Promise<Array<GeoAddress>> } Promise对象，返回地理编码查询结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getAddressesFromLocationName} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301400 - Geocoding query failed.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>;

  /**
   * 判断地理编码与逆地理编码服务状态。
   *
   * @returns { boolean } true:地理编码与逆地理编码服务可用。false：地理编码与逆地理编码服务不可用。
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.isGeocoderAvailable} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function isGeocoderAvailable(): boolean;

  /**
   * 获取GNSS芯片缓存位置的个数。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。使用callback异步回
   * 调。调用该接口前建议先通过
   * [geoLocationManager.isCachedGnssServiceSupported]{@link geoLocationManager.isCachedGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<int> } callback - 回调函数，返回GNSS芯片缓存位置个数。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCachedGnssLocationsSize} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCachedGnssLocationsSize(callback: AsyncCallback<int>): void;

  /**
   * 获取GNSS芯片缓存位置的个数。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。使用Promise异步回调。
   * 调用该接口前建议先通过[geoLocationManager.isCachedGnssServiceSupported]{@link geoLocationManager.isCachedGnssServiceSupported}
   * 接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<int> } Promise对象，返回GNSS缓存位置的个数。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCachedGnssLocationsSize} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCachedGnssLocationsSize(): Promise<int>;

  /**
   * 读取并清空GNSS芯片所有缓存位置。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。使用callback异步
   * 回调。调用该接口前建议先通过
   * [geoLocationManager.isCachedGnssServiceSupported]{@link geoLocationManager.isCachedGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { AsyncCallback<void> } callback - 回调函数。当操作成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.flushCachedGnssLocations} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function flushCachedGnssLocations(callback: AsyncCallback<void>): void;

  /**
   * 读取并清空GNSS芯片所有缓存位置。该接口功能由GNSS定位芯片提供（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。使用Promise异步回
   * 调。调用该接口前建议先通过
   * [geoLocationManager.isCachedGnssServiceSupported]{@link geoLocationManager.isCachedGnssServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.flushCachedGnssLocations} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the geographical location.
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function flushCachedGnssLocations(): Promise<void>;

  /**
   * 给位置服务子系统的各个部件发送扩展命令。使用callback异步回调。
   *
   * @param { LocationCommand } command - 指定目标场景，和将要发送的命令（字符串）。
   * @param { AsyncCallback<void> } callback - 回调函数。当命令发送成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.sendCommand} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function sendCommand(command: LocationCommand, callback: AsyncCallback<void>): void;

  /**
   * 给位置服务子系统的各个部件发送扩展命令。使用Promise异步回调。
   *
   * @param { LocationCommand } command - 指定目标场景，和将要发送的命令（字符串）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.sendCommand} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function sendCommand(command: LocationCommand): Promise<void>;

  /**
   * 查询当前的国家码。使用callback异步回调。
   *
   * @param { AsyncCallback<CountryCode> } callback - 回调函数，返回国家码信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCountryCode} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCountryCode(callback: AsyncCallback<CountryCode>): void;

  /**
   * 查询当前的国家码。使用Promise异步回调。
   *
   * @returns { Promise<CountryCode> } Promise对象，返回国家码信息。
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCountryCode} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301500 - Failed to query the area information.
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  function getCountryCode(): Promise<CountryCode>;

  /**
   * 使能位置模拟功能。
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.enableLocationMock}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableLocationMock(): void;

  /**
   * 去使能位置模拟功能。
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.disableLocationMock}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableLocationMock(): void;

  /**
   * 设置模拟的位置信息，后面会以该接口中携带的时间间隔上报模拟位置。
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @param { LocationMockConfig } config - 指示位置模拟的配置参数，包含模拟位置上报的时间间隔和模拟位置数组。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.setMockedLocations}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setMockedLocations(config: LocationMockConfig): void;

  /**
   * 使能逆地理编码模拟功能。
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${
   *     geoLocationManager.enableReverseGeocodingMock} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableReverseGeocodingMock(): void;

  /**
   * 去使能逆地理编码模拟功能。
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${
   *     geoLocationManager.disableReverseGeocodingMock} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableReverseGeocodingMock(): void;

  /**
   * 设置逆地理编码模拟功能的配置信息，包含了位置和地名的对应关系，后续进行逆地理编码查询时如果位置信息位于配置信息中，就返回对应的地名。
   * 该接口需要在调用geoLocationManager.enableReverseGeocodingMock之后才能调用。
   *
   * @permission ohos.permission.MOCK_LOCATION [since 20]
   * @param { Array<ReverseGeocodingMockInfo> } mockInfos - 指示逆地理编码模拟功能的配置参数数组。逆地理编码模拟功能的配置参数包含了一个位置和一个地名。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${
   *     geoLocationManager.setReverseGeocodingMockInfo} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20]
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setReverseGeocodingMockInfo(mockInfos: Array<ReverseGeocodingMockInfo>): void;

  /**
   * 查询用户是否同意定位服务隐私申明，是否同意启用定位服务。只有系统应用才能调用。
   *
   * @param { LocationPrivacyType } type - 指定隐私申明场景，例如开机向导中的隐私申明、开启网络定位功能时弹出的隐私申明等。
   * @returns { boolean } true：用户同意定位服务隐私申明。
   * 	 false：用户不同意定位服务隐私申明。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${
   *     geoLocationManager.isLocationPrivacyConfirmed} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isLocationPrivacyConfirmed(type: LocationPrivacyType): boolean;

  /**
   * 设置用户勾选定位服务隐私申明的状态，记录用户是否同意启用定位服务。只有系统应用才能调用。
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS
   * @param { LocationPrivacyType } type - 指定隐私申明场景，例如开机向导中的隐私申明、开启网络定位功能时弹出的隐私申明等。
   * @param { boolean } isConfirmed - 	true：用户同意定位服务隐私申明。
   *     false：用户不同意定位服务隐私申明。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.setLocationPrivacyConfirmStatus} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setLocationPrivacyConfirmStatus(type: LocationPrivacyType, isConfirmed: boolean): void;

  /**
   * 单次获取定位业务所需数据，包含WiFi蓝牙扫描信息，使用Promise方式异步返回结果。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { LocatingRequiredDataConfig } config - 表示获取定位所需数据时的配置参数。
   * @returns { Promise<Array<LocatingRequiredData>> } 以Promise形式返回定位业务所需数据，包含WiFi蓝牙扫描信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed.
   *     A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getLocatingRequiredData} due to limited device capabilities.
   * @throws { BusinessError } 3301800 - Failed to start WiFi or Bluetooth scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getLocatingRequiredData(config: LocatingRequiredDataConfig): Promise<Array<LocatingRequiredData>>;

  /**
   * 添加一个GNSS地理围栏，并订阅地理围栏事件。使用Promise异步回调。调用该接口前建议先通过
   * [geoLocationManager.isGnssFenceServiceSupported]{@link geoLocationManager.isGnssFenceServiceSupported}接口判断对应能力是否支持。
   * GNSS地理围栏功能依赖GNSS定位芯片（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。
   * 单应用添加地理围栏上限为100，超过上限将移除剩余地理围栏中存活时间最短的围栏。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { GnssGeofenceRequest } fenceRequest - 添加GNSS地理围栏请求参数。包含圆形围栏信息、需要监听的地理围栏事件、地理围栏事件触发后弹出的通知对象和监听地理围栏事件的回调
   *     函数。
   * @returns { Promise<int> } Promise对象，返回地理围栏ID。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory
   *     parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.addGnssGeofence} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301601 - The number of geofences exceeds the maximum.
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function addGnssGeofence(fenceRequest: GnssGeofenceRequest): Promise<int>;

  /**
   * 删除一个GNSS地理围栏，并取消订阅该地理围栏事件。使用Promise异步回调。
   * GNSS地理围栏功能依赖GNSS定位芯片（仅部分型号支持），如果设备无此芯片或使用的芯片型号不支持该功能，则返回错误码801（Capability not supported）。调用该接口前建议先通过
   * [geoLocationManager.isGnssFenceServiceSupported]{@link geoLocationManager.isGnssFenceServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION [since 12 - 24]
   * @param { int } geofenceId - GNSS地理围栏的ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not
   *     have the permission required to call the API. [since 12 - 24]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters
   *     are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.removeGnssGeofence} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301602 - Failed to delete a geofence due to an incorrect ID.
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function removeGnssGeofence(geofenceId: int): Promise<void>;

  /**
   * 查询当前有效的围栏信息。使用Promise异步回调。调用该接口前建议先通过
   * [geoLocationManager.isGnssFenceServiceSupported]{@link geoLocationManager.isGnssFenceServiceSupported}接口判断对应能力是否支持。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<Map<int, Geofence>> } Promise对象，返回有效的围栏信息。Map中的key值为fenceId，value值为对应围栏的具体信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not
   *     have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getActiveGeoFences} due to limited device capabilities.
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 23 dynamic&static
   */
  function getActiveGeoFences(): Promise<Map<int, Geofence>>;

  /**
   * 获取地理围栏功能支持的坐标系列表。调用该接口前建议先通过
   * [geoLocationManager.isGnssFenceServiceSupported]{@link geoLocationManager.isGnssFenceServiceSupported}接口判断对应能力是否支持。
   *
   * @returns { Array<CoordinateSystemType> } 地理围栏功能支持的坐标系列表。
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getGeofenceSupportedCoordTypes} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function getGeofenceSupportedCoordTypes(): Array<CoordinateSystemType>;

  /**
   * 获取当前的定位图标状态。
   *
   * @returns { LocationIconStatus } 返回定位图标状态。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getLocationIconStatus} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getLocationIconStatus(): LocationIconStatus;

  /**
     * 获取连接的Wi-Fi AP（Access Point）的Bssid（Basic Service Set Identifier）信息。如果当前设备未连接Wi-Fi，调用该接口将抛出错误码3301900。建议参考示例代码，通过
     * try-catch结构捕获异常。
     *
     * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
     * @returns {string} Wi-Fi Bssid
     * @throws { BusinessError } 201 - Permission verification failed. The application
     *     does not have the permission required to call the API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call
     *     ${geoLocationManager.getCurrentWifiBssidForLocating()} due to limited device capabilities.
     * @throws { BusinessError } 3301000 - The location service is unavailable.
     * @throws { BusinessError } 3301100 - The location switch is off.
     * @throws { BusinessError } 3301900 - Failed to obtain the BSSID of the Wi-Fi hotspot.
     *     The Wi-Fi network is not connected.
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    function getCurrentWifiBssidForLocating(): string;

  /**
   * 获取两个位置之间的直线距离。
   *
   * @param { Location } location1 - 位置1。
   * @param { Location } location2 - 位置2。
   * @returns { double } 两个位置之间的直线距离，单位为米。
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getDistanceBetweenLocations(location1: Location, location2: Location): double;

  /**
   * 查询系统（即软件）是否支持POI服务。
   *
   * @returns { boolean } true:POI服务可用。 false:POI服务不可用。
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  function isPoiServiceSupported(): boolean;

  /**
   * 获取当前位置附近的POI信息。使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns { Promise<PoiInfo> } 当前位置附近的POI信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getPoiInfo} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function getPoiInfo(): Promise<PoiInfo>;

  /**
   * 添加一个beacon围栏，并订阅地理围栏事件。使用Promise异步回调。
   * beacon围栏是指通过蓝牙beacon设备和手机应用配合，实现“虚拟围栏”的功能。当用户靠近或离开某个特定的beacon设备时，手机应用会收到通知。
   * 应用可以在入参[BeaconFenceRequest]{@link geoLocationManager.BeaconFenceRequest}中传入回调函数用于接收围栏事件；也可以传入
   * [FenceExtensionAbility]{@link @ohos.app.ability.FenceExtensionAbility:FenceExtensionAbility}名称，在系统识别到围栏事件发生时通知应用。
   * 单应用添加beacon围栏上限为10，超过上限会导致添加beacon围栏失败，并抛出3501601错误码。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { BeaconFenceRequest } fenceRequest - 添加beacon围栏请求参数。
   * @returns { Promise<int> } Promise对象，返回beacon围栏ID。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.addBeaconFence}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3501100 - Failed to add a beacon fence because the location switch is off.
   * @throws { BusinessError } 3501101 - Failed to add a beacon fence because the bluetooth switch is off.
   * @throws { BusinessError } 3501601 - The number of beacon fences exceeds the maximum.
   * @throws { BusinessError } 3501603 - Duplicate beacon fence information.
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function addBeaconFence(fenceRequest: BeaconFenceRequest): Promise<int>;

  /**
   * 删除beacon围栏，并取消订阅地理围栏事件。使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION [since 20 - 24]
   * @param { BeaconFence } [beaconFence] - 传入beaconFence参数，删除指定围栏；不传入参数，删除该应用所有围栏。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 20 - 24]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.removeBeaconFence}
   *     due to limited device capabilities.
   * @throws { BusinessError } 3501602 - Failed to delete the fence due to incorrect beacon fence information.
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function removeBeaconFence(beaconFence?: BeaconFence): Promise<void>;

  /**
   * 判断当前设备是否支持beacon围栏。
   *
   * @returns { boolean } true：支持beacon围栏。false：不支持beacon围栏。
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function isBeaconFenceSupported(): boolean;

  /**
   * 判断指定的BSSID是否存在于最新的WLAN扫描结果里。使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Array<string> } wlanBssidArray - 请求匹配的BSSID列表。单个字符串的长度不超过64，数组的长度不超过1000。
   * @param { int } rssiThreshold - RSSI阈值。只匹配RSSI大于此阈值的BSSID，取值范围为-10000至10000（单位：dBm）。
   * @param { boolean } needStartScan - 是否需要发起WLAN扫描。需要发起WLAN扫描设置为true。不需要发起WLAN扫描，使用最近一次WLAN扫描结果进行匹配设置为false。
   * @returns { Promise<boolean> } 表示匹配是否成功。当扫描结果中存在wlanBssidArray中的任意BSSID，且其RSSI值高于rssiThreshold时，返回true，否则返回false。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.isWlanBssidMatched} due to limited device capabilities.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301800 - Failed to start WiFi scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function isWlanBssidMatched(
      wlanBssidArray: Array<string>, rssiThreshold: int, needStartScan: boolean): Promise<boolean>;

  /**
   * 判断是否支持GNSS功能。
   *
   * @returns { boolean } true：支持GNSS功能。false：不支持GNSS功能。
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isGnssServiceSupported(): boolean;

  /**
   * 判断是否支持围栏功能。
   *
   * @returns { boolean } true：支持围栏功能。false：不支持围栏功能。
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isGnssFenceServiceSupported(): boolean;

  /**
   * 判断是否支持GNSS batching功能。
   *
   * @returns { boolean } true：支持GNSS batching功能。false：不支持GNSS batching功能。
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isCachedGnssServiceSupported(): boolean;

  /**
   * 使用WLAN扫描结果与输入的WLAN BSSID列表进行匹配，匹配成功时返回对应的WLAN设备信息，匹配失败时返回空数组(数组长度为0)。使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Array<string> } wlanBssidArray - 请求匹配的BSSID列表。单个字符串的长度不超过64，数组的长度不超过1000。
   * @param { int } rssiThreshold - RSSI阈值。只匹配RSSI大于此阈值的BSSID，取值范围为-10000至10000（单位：dBm）。
   * @param { boolean } needStartScan - 是否需要发起WLAN扫描。需要发起WLAN扫描设置为true。不需要发起WLAN扫描，使用最近一次WLAN扫描结果进行匹配设置为false。
   * @returns { Promise<Array<MatchingWlanInfo>> } Promise对象，匹配成功时返回对应的WLAN设备信息，匹配失败时返回空数组(数组长度为0)。仅返回rssi最强的3个设备信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.findMatchingWlan} due to limited device capabilities.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301800 - Failed to start WLAN scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function findMatchingWlan(
      wlanBssidArray: Array<string>, rssiThreshold: int, needStartScan: boolean): Promise<Array<MatchingWlanInfo>>;

  /**
   * 获取当前设备所在区域的信息。使用Promise异步回调。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { DistrictRequestParams } [params] - 设置区域信息请求参数。
   * @returns { Promise<DistrictInfo> } Promise对象，当前设备所在区域的信息。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getCurrentDistrict} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301500 - Failed to query the area information because the reverse geocoding server
   *     returns an error.
   * @syscap SystemCapability.Location.Location.Geocoder
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function getCurrentDistrict(params?: DistrictRequestParams): Promise<DistrictInfo>;

  /**
   * 启动蓝牙扫描并查找指定的蓝牙设备，仅当扫描到的蓝牙设备满足入参BluetoothSearchRequestParams指定的条件时，才通过callback异步返回该蓝牙设备信息。
   *
   * @permission ohos.permission.APPROXIMATELY_LOCATION
   * @param { BluetoothSearchRequestParams } request - 设置蓝牙扫描请求参数。
   * @param { Callback<BluetoothScanResult> } callback - 回调函数，用于返回蓝牙扫描结果。
   * @throws { BusinessError } 201 - Permission verification failed. The application does
   *     not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.startBluetoothSearch} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301800 - Failed to start Bluetooth scanning.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function startBluetoothSearch(
      request: BluetoothSearchRequestParams, callback: Callback<BluetoothScanResult>): void;
	  
  /**
   * 停止蓝牙扫描，该回调函数需要与startBluetoothSearch接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   *
   * @param { Callback<BluetoothScanResult> } [callback] - 取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.stopBluetoothSearch} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function stopBluetoothSearch(callback?: Callback<BluetoothScanResult>): void;

  /**
   * 根据传入的[sportsType]{@link geoLocationManager.SportsType}获取特定运动模式下的后处理轨迹。在调用此接口之前，需要先调用
   * [geoLocationManager.on('locationChange')]{@link geoLocationManager.on(type: 'locationChange', request: LocationRequest | ContinuousLocationRequest, callback: Callback<Location>)}
   * ，并在[ContinuousLocationRequest]{@link geoLocationManager.ContinuousLocationRequest}入参中的
   * [SportsType]{@link geoLocationManager.SportsType}配置正确的运动模式。当前仅支持滑雪模式。记录的运动轨迹会在24小时之后清除。
   *
   * @permission ohos.permission.LOCATION
   * @param { SportsType } sportsType - 设置要获取后处理轨迹的运动模式。当前仅支持滑雪模式。
   * @returns { Promise<Array<Location>> } Promise对象，用于返回后处理运动轨迹。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call
   *     ${geoLocationManager.getPostProcessingTrack} due to limited device capabilities.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3301200 - Failed to obtain the post processing track because sports type is not
   *     supported.
   * @syscap SystemCapability.Location.Location.Gnss
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function getPostProcessingTrack(sportsType: SportsType): Promise<Array<Location>>;

  /**
   * 添加一个融合围栏，并订阅围栏事件。使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { FusionFenceRequestParams } fenceRequestParams - 融合围栏请求信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application
   *     does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.addFusionFence}
   *     due to limited device.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301100 - The location switch is off.
   * @throws { BusinessError } 3501603 - Duplicate fusion fence identifier.
   * @throws { BusinessError } 3301601 - The number of geofences exceeds the maximum.
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function addFusionFence(fenceRequestParams: FusionFenceRequestParams): Promise<void>;

  /**
   * 删除一个融合围栏，并取消订阅该围栏事件。使用Promise异步回调。
   *
   * @param { string } identifier - 融合围栏唯一标识。必须与addFusionFence传入的identifier相同才能成功删除围栏。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call ${geoLocationManager.removeFusionFence}
   *     due to limited device.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @throws { BusinessError } 3301602 - Failed to delete a fusion fence due to an incorrect identifier.
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function removeFusionFence(identifier: string): Promise<void>;
  
  /**
   * 判断系统是否支持融合围栏能力。
   *
   * @returns { boolean } true：支持融合围栏能力。
   *     false：不支持融合围栏能力。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system
   *     application calls a system API.
   * @throws { BusinessError } 3301000 - The location service is unavailable.
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function isFusionFenceSupported(): boolean;

  /**
   * 蓝牙扫描请求参数。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface BluetoothSearchRequestParams {  
    /**
     * 表示蓝牙设备的地址列表，用于过滤扫描结果。单个字符串的长度不超过64，数组的长度不超过1000。仅当扫描到的蓝牙设备的地址与该数组中的一个元素相同时才通过callback返回该蓝牙设备信息。当传入空数组（数组长度为0）时，不会
     * 返回蓝牙扫描结果。数组中每个元素的格式如下："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    deviceIdArray: Array<string>;

    /**
     * 表示RSSI阈值，只扫描RSSI大于此阈值的设备。取值范围为-128至127。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    rssiThreshold?: int;
  }

  /**
   * 表示区域信息。
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  interface DistrictInfo {  
    /**
     * 表示位置描述信息的语言，“zh”代表中文，“en”代表英文。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    locale?: string;

    /**
     * 表示国家码信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    countryCode?: string;

    /**
     * 表示国家信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    countryName?: string;

    /**
     * 表示国家以下的一级行政区，一般是省/州。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    administrativeArea?: string;

    /**
     * 表示国家以下的二级行政区，一般是市。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    subAdministrativeArea?: string;

    /**
     * 表示城市信息，一般是市。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    locality?: string;

    /**
     * 表示子城市信息，一般是区/县。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    subLocality?: string;
  } 

  /**
   * 表示获取区县信息的请求参数。
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface DistrictRequestParams {  
    /**
     * 表示位置描述信息的语言，“zh”代表中文，“en”代表英文。默认值从设置中的“语言和地区”获取。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    locale?: string;

    /**
     * 表示超时时间，单位是毫秒。默认值是5000毫秒。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    timeoutMs?: int;
  }

  /**
   * 逆地理编码模拟功能的配置信息，包含一个位置信息和一个地名信息。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ReverseGeocodingMockInfo {
    /**
     * 表示经纬度信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    location: ReverseGeoCodeRequest;

    /**
     * 表示地名信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    geoAddress: GeoAddress;
  }

  /**
   * 位置模拟功能的配置参数，包含了模拟位置上报的时间间隔和模拟位置数组。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LocationMockConfig {
    /**
     * 表示模拟位置上报的时间间隔，单位是秒。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    timeInterval: int;

    /**
     * 表示模拟位置数组。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    locations: Array<Location>;
  }

  /**
   * 卫星状态信息。
   *
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface SatelliteStatusInfo {
    /**
     * 表示卫星个数。取值范围为大于等于0。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    satellitesNumber: int;

    /**
     * 表示每个卫星的ID，数组类型。取值范围为大于等于0。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    satelliteIds: Array<int>;

    /**
     * 表示载波噪声功率谱密度比，即cn0。取值范围为大于0。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    carrierToNoiseDensitys: Array<double>;

    /**
     * 表示卫星高度角信息。单位是“度”，取值范围为-90到90。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    altitudes: Array<double>;

    /**
     * 表示方位角。单位是“度”，取值范围为0到360。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    azimuths: Array<double>;

    /**
     * 表示载波频率。单位是Hz，取值范围为大于等于0。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    carrierFrequencies: Array<double>;

    /**
     * 表示卫星星座类型。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    satelliteConstellation?: Array<SatelliteConstellationCategory>;

    /**
     * 表示卫星的附加信息。
     * 
     * 每个比特位代表不同含义，具体定义参见[SatelliteAdditionalInfo]{@link geoLocationManager.SatelliteAdditionalInfo}。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    satelliteAdditionalInfo?: Array<int>;
  }

  /**
   * 请求订阅GNSS缓存位置上报功能接口的配置参数。
   *
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CachedGnssLocationsRequest {
    /**
     * 表示GNSS缓存位置上报的周期，单位是毫秒。取值范围为大于0。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    reportingPeriodSec: int;

    /**
     * true表示GNSS芯片底层缓存队列满之后会主动唤醒AP芯片，并把缓存位置上报给应用。
     * 
     * false表示GNSS芯片底层缓存队列满之后不会主动唤醒AP芯片，会把缓存位置直接丢弃。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    wakeUpCacheQueueFull: boolean;
  }

  /**
   * 蜂窝小区信息。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface CellInfo {  
    /**
     * 表示从本次开机到获取位置成功所经过的时间，单位为纳秒。设置飞行模式并解除不记为重启。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    timeSinceBoot: long;

    /**
     * 表示蜂窝网络的小区ID。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cellId: long;

    /**
     * 表示位置区码。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lac: int;

    /**
     * 表示移动国家码。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mcc: int;

    /**
     * 表示移动网络代码。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mnc: int;

    /**
     * 表示无线接入技术。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rat: int;

    /**
     * 表示信号强度。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    signalIntensity: int;

    /**
     * 表示绝对无线载频信道号（absolute radio frequency channel number）。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    arfcn: int;

    /**
     * 	表示物理小区标识。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pci: int;

    /**
     * 	表示跟踪区域码。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    tac?: int;

    /**
     * 附加信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    additionsMap?: Map<string, string>;
  }

  /**
   * GNSS地理围栏请求参数。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export interface GnssGeofenceRequest {
    /**
     * 表示地理围栏信息，包含圆形围栏圆心坐标、半径等信息。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    geofence: Geofence;

    /**
     * 表示APP监听的地理围栏事件列表。数组长度不超过3。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    monitorTransitionEvents: Array<GeofenceTransitionEvent>;

    /**
     * 表示地理围栏事件发生后弹出的通知对象列表。
     * 
     * monitorTransitionEvents与notifications中的顺序要一一对应，例如monitorTransitionEvents[0]为
     * [GeofenceTransitionEvent]{@link geoLocationManager.GeofenceTransitionEvent}.GEOFENCE_TRANSITION_EVENT_ENTER，那
     * notifications[0]中就需要填入用户进入围栏时需要弹出的通知对象。默认值为空数组。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    notifications?: Array<NotificationRequest>;

    /**
     * 表示用于接收地理围栏事件的回调函数。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    geofenceTransitionCallback: AsyncCallback<GeofenceTransition>;

    /**
     * 徘徊时间，单位为毫秒，需关注GEOFENCE_TRANSITION_DWELL事件。若设备在多边形围栏内徘徊时间达到该值，则上报GEOFENCE_TRANSITION_DWELL事件。徘徊状态检测周期为10000毫秒。例如：设
     * 置15000，将在驻留超过20000毫秒时上报驻留状态；设置5000，将在驻留超过10000毫秒时上报驻留状态。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 23 dynamic&static
     */
    loiterTimeMs?: int;

    /**
     * FenceExtensionAbility名称，参见
     * [FenceExtensionAbility]{@link @ohos.app.ability.FenceExtensionAbility:FenceExtensionAbility}。后台拉起需要申请后台定位权限，权限申请方
     * 式参见[申请位置权限开发指导](docroot://device/location/location-permission-guidelines.md#开发步骤)。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 23 dynamic&static
     */
    fenceExtensionAbilityName?: string;
  }

  /**
   * 请求添加GNSS围栏消息中携带的参数，包括定位场景和围栏信息。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 9 dynamic
   * @since 23 static
   */
  export interface GeofenceRequest {
    /**
     * 表示定位场景。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 9 dynamic
     * @since 23 static
     */
    scenario: LocationRequestScenario;

    /**
     * 表示围栏信息。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 9 dynamic
     * @since 23 static
     */
    geofence: Geofence;
  }

  /**
   * GNSS围栏的配置参数。目前只支持圆形围栏。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Geofence {
    /**
     * 表示纬度。取值范围为-90到90。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * 表示经度。取值范围为-180到180。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * 表示地理围栏圆心坐标的坐标系。
     * 
     * APP应先使用[getGeofenceSupportedCoordTypes]{@link geoLocationManager.getGeofenceSupportedCoordTypes}查询支持的坐标系，然后传入正确的圆
     * 心坐标。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    coordinateSystemType?: CoordinateSystemType;

    /**
     * 表示圆形围栏的半径。单位是米，取值范围为大于0。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    radius: double;

    /**
     * 围栏存活的时间，单位是毫秒。取值范围为大于0。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    expiration: double;
  }

  /**
   * 逆地理编码请求参数。
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ReverseGeoCodeRequest {
    /**
     * 指定位置描述信息的语言，“zh”代表中文，“en”代表英文。默认值从设置中的“语言和地区”获取。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * 限制查询结果在指定的国家内，采用ISO 3166-1 alpha-2 。“CN”代表中国。默认值从设置中的“语言和地区”获取。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    country?: string;

    /**
     * 表示纬度信息，正值表示北纬，负值表示南纬。取值范围为-90到90。仅支持WGS84坐标系。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * 表示经度信息，正值表示东经，负值表示西经。取值范围为-180到180。仅支持WGS84坐标系。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * 指定返回位置信息的最大个数。取值范围为大于等于0，推荐该值小于10。默认值是1。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    maxItems?: int;
  }

  /**
   * 地理编码请求参数。
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface GeoCodeRequest {
    /**
     * 表示位置描述信息的语言，“zh”代表中文，“en”代表英文。默认值从设置中的“语言和地区”获取。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * 限制查询结果在指定的国家内，采用ISO 3166-1 alpha-2 。“CN”代表中国。默认值从设置中的“语言和地区”获取。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    country?: string;

    /**
     * 表示位置信息描述，如“上海市浦东新区xx路xx号”，字符串长度不超过100。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * 表示返回位置信息的最大个数。取值范围为大于等于0，推荐该值小于10。默认值是1。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    maxItems?: int;

    /**
     * 表示最小纬度信息，与下面三个参数一起，表示一个经纬度范围。取值范围为-90到90。仅支持WGS84坐标系。默认值是0。如果该参数有值时，下面三个参数必填。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    minLatitude?: double;

    /**
     * 表示最小经度信息。取值范围为-180到180。仅支持WGS84坐标系。默认值是0。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    minLongitude?: double;

    /**
     * 表示最大纬度信息。取值范围为-90到90。仅支持WGS84坐标系。默认值是0。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    maxLatitude?: double;

    /**
     * 表示最大经度信息。取值范围为-180到180。仅支持WGS84坐标系。默认值是0。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    maxLongitude?: double;
  }

  /**
   * 地理编码地址信息。
   *
   * @syscap SystemCapability.Location.Location.Geocoder
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface GeoAddress {
    /**
     * 表示纬度信息，正值表示北纬，负值表示南纬。取值范围为-90到90。仅支持WGS84坐标系。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    latitude?: double;

    /**
     * 表示经度信息，正值表示东经，负值表示西经。取值范围为-180到180。仅支持WGS84坐标系。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    longitude?: double;

    /**
     * 表示位置描述信息的语言，“zh”代表中文，“en”代表英文。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    locale?: string;

    /**
     * 表示详细地址信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    placeName?: string;

    /**
     * 表示国家码信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    countryCode?: string;

    /**
     * 表示国家信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    countryName?: string;

    /**
     * 表示国家以下的一级行政区，一般是省/州。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    administrativeArea?: string;

    /**
     * 表示国家以下的二级行政区，一般是市。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    subAdministrativeArea?: string;

    /**
     * 表示城市信息，一般是市。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    locality?: string;

    /**
     * 表示子城市信息，一般是区/县。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    subLocality?: string;

    /**
     * 表示路名信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    roadName?: string;

    /**
     * 表示子路名信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    subRoadName?: string;

    /**
     * 表示门牌号信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    premises?: string;

    /**
     * 表示邮政编码信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    postalCode?: string;

    /**
     * 表示联系方式信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    phoneNumber?: string;

    /**
     * 表示位置信息附件的网址信息。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    addressUrl?: string;

    /**
     * 表示附加的描述信息。目前包含城市编码cityCode（Array下标为0）和区划编码adminCode（Array下标为1），例如["025","320114001"]。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    descriptions?: Array<string>;

    /**
     * 表示附加的描述信息数量。取值范围为大于等于0，推荐该值小于10。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionsSize?: int;

    /**
     * 表示地名信息是否来自于逆地理编码模拟功能。
     * true：地名信息来自于逆地理编码模拟功能。
     * false：地名信息不是来自于逆地理编码模拟功能。
     *
     * @syscap SystemCapability.Location.Location.Geocoder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    isFromMock?: Boolean;
  }

  /**
   * 位置信息请求参数。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LocationRequest {
    /**
     * 表示优先级信息。当scenario取值为UNSET时，priority参数生效，否则priority参数不生效；当scenario和priority均取值为UNSET时，无法发起定位请求。取值范围见
     * [LocationRequestPriority]{@link geoLocationManager.LocationRequestPriority}的定义。默认值为FIRST_FIX。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    priority?: LocationRequestPriority;

    /**
     * 表示场景信息。当scenario取值为UNSET时，priority参数生效，否则priority参数不生效；当scenario和priority均取值为UNSET时，无法发起定位请求。取值范围见
     * [LocationRequestScenario]{@link geoLocationManager.LocationRequestScenario}的定义。默认值为UNSET。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    scenario?: LocationRequestScenario;

    /**
     * 表示上报位置信息的时间间隔，单位为秒。
     * 
     * 取值范围为大于等于0的值。
     * 
     * 默认值为对应定位模式下允许的最小时间间隔：
     * 
     * 默认值在GNSS定位时为1秒，网络定位时为20秒。
     * 
     * 当设置值小于最小间隔时，以最小时间间隔生效。
     * 
     * 设置为0时不对时间间隔进行校验，直接上报位置信息。
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?int } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    timeInterval?: int;

    /**
     * 表示上报位置信息的距离间隔。单位是米，默认值为0，取值范围为大于等于0。等于0时对位置上报距离间隔无限制。
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?double } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    distanceInterval?: double;

    /**
     * 应用向系统请求位置信息时要求的精度值，单位为米。该参数仅在精确位置功能场景（即同时授权了ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION 权限）下有
     * 效，模糊位置功能生效场景（即仅授权了ohos.permission.APPROXIMATELY_LOCATION 权限）下该字段无意义。
     * 
     * 该参数生效的情况下，系统会对比GNSS或网络定位服务上报的位置信息与应用的位置信息申请。当位置信息[Location]{@link geoLocationManager.Location}中的精度值（accuracy）小于等于
     * 应用要求的精度值（maxAccuracy）时，位置信息会返回给应用；否则系统将丢弃本次收到的位置信息。
     * 
     * 默认值为0，表示不限制位置信息的精度，取值范围为大于等于0。
     * 
     * 当scenario为NAVIGATION/TRAJECTORY_TRACKING/CAR_HAILING或者priority为ACCURACY时建议设置maxAccuracy为大于10的值。
     * 
     * 当scenario为DAILY_LIFE_SERVICE/NO_POWER或者priority为LOW_POWER/FIRST_FIX时建议设置maxAccuracy为大于100的值。
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?double } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    maxAccuracy?: double;
  }

  /**
   * 当前位置信息请求参数。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CurrentLocationRequest {
    /**
     * 表示优先级信息。当scenario取值为UNSET时，priority参数生效，否则priority参数不生效；当scenario和priority均取值为UNSET时，无法发起定位请求。取值范围见
     * [LocationRequestPriority]{@link geoLocationManager.LocationRequestPriority}的定义。默认值为FIRST_FIX。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    priority?: LocationRequestPriority;

    /**
     * 表示场景信息。当scenario取值为UNSET时，priority参数生效，否则priority参数不生效；当scenario和priority均取值为UNSET时，无法发起定位请求。取值范围见
     * [LocationRequestScenario]{@link geoLocationManager.LocationRequestScenario}的定义。默认值为UNSET。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    scenario?: LocationRequestScenario;

    /**
     * 应用向系统请求位置信息时要求的精度值，单位为米。该参数仅在精确位置功能场景（即同时授权了ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION 权限）下有
     * 效，模糊位置功能生效场景（即仅授权了ohos.permission.APPROXIMATELY_LOCATION 权限）下该字段无意义。
     * 
     * 该参数生效的情况下，系统会对比GNSS或网络定位服务上报的位置信息与应用的位置信息申请。当位置信息[Location]{@link geoLocationManager.Location}中的精度值（accuracy）小于等于
     * 应用要求的精度值（maxAccuracy）时，位置信息会返回给应用；否则系统将丢弃本次收到的位置信息。
     * 
     * 默认值为0，表示不限制位置信息的精度，取值范围为大于等于0。
     * 
     * 当scenario为NAVIGATION/TRAJECTORY_TRACKING/CAR_HAILING或者priority为ACCURACY时建议设置maxAccuracy为大于10的值。
     * 
     * 当scenario为DAILY_LIFE_SERVICE/NO_POWER或者priority为LOW_POWER/FIRST_FIX时建议设置maxAccuracy为大于100的值。
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?double } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    maxAccuracy?: double;

    /**
     * 表示超时时间，单位是毫秒，最小为1000毫秒。默认值是5000。取值范围为大于等于1000。
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?int } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    timeoutMs?: int;
  }

  /**
   * 地理围栏事件信息；包含地理围栏ID和具体的地理围栏事件。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export interface GeofenceTransition {
    /**
     * 表示地理围栏ID。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    geofenceId: int;

    /**
     * 表示当前发生的地理围栏事件。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    transitionEvent: GeofenceTransitionEvent;

    /**
     * beacon围栏的参数配置。仅beacon围栏使用。
     * 
     * 从API version 20开始，支持该字段。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    beaconFence?: BeaconFence;
  }

  /**
   * 持续定位的请求参数。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export interface ContinuousLocationRequest {
    /**
     * 表示上报位置信息的时间间隔，单位是秒。默认值为1，取值范围为大于等于0。等于0时对位置上报时间间隔无限制。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    interval: int;

    /**
     * 表示定位的场景信息。取值范围见[UserActivityScenario]{@link geoLocationManager.UserActivityScenario}和
     * [PowerConsumptionScenario]{@link geoLocationManager.PowerConsumptionScenario}的定义。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    locationScenario: UserActivityScenario | PowerConsumptionScenario;

    /**
     * 表示运动模式。取值范围见[SportsType]{@link geoLocationManager.SportsType}定义。此参数仅在locationScenario设置为
     * UserActivityScenario.SPORT时有效。默认值为0，表示该参数不生效。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi [since 18 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    sportsType?: SportsType;

    /**
     * 表示是否需要获取当前位置附近的POI信息。false代表不需要获取当前位置附近的POI信息，true代表需要获取当前位置附近的POI信息。不设置时，默认值为false。
     * 
     * 该参数仅在精确位置功能场景（即同时授权了ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION 权限）下有效，模糊位置功能生效场景（即仅授权了
     * ohos.permission.APPROXIMATELY_LOCATION 权限）下不返回POI信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    needPoi?: boolean;
  }

  /**
   * 单次定位的请求参数。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export interface SingleLocationRequest {
    /**
     * 表示优先级信息。取值范围见[LocatingPriority]{@link geoLocationManager.LocatingPriority}的定义。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    locatingPriority: LocatingPriority;

    /**
     * 表示超时时间，单位是毫秒，最小为1000毫秒。取值范围为大于等于1000。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    locatingTimeoutMs: int;

    /**
     * 表示是否需要获取当前位置附近的POI信息。false代表不需要获取当前位置附近的POI信息，true代表需要获取当前位置附近的POI信息。不设置时，默认值为false。
     * 
     * 该参数仅在精确位置功能场景（即同时授权了ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION 权限）下有效，模糊位置功能生效场景（即仅授权了
     * ohos.permission.APPROXIMATELY_LOCATION 权限）下不返回POI信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    needPoi?: boolean;
  }

  /**
   * 位置信息。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Location {
    /**
     * 表示纬度信息，正值表示北纬，负值表示南纬。取值范围为-90到90。仅支持WGS84坐标系。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * 表示经度信息，正值表示东经，负值表示西经。取值范围为-180到180。仅支持WGS84坐标系。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * 表示高度信息，单位米。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    altitude: double;

    /**
     * 表示精度信息，单位米。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    accuracy: double;

    /**
     * 表示速度信息，单位米每秒。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    speed: double;

    /**
     * 表示位置时间戳，UTC格式，单位毫秒。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    timeStamp: long;

    /**
     * 表示航向信息。单位是“度”，取值范围为0到360。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    direction: double;

    /**
     * 表示获取位置成功的时间戳，值表示从本次开机到获取位置成功所经过的时间，单位为纳秒。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    timeSinceBoot: long;

    /**
     * 附加信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    additions?: Array<string>;

    /**
     * 附加信息。具体内容和顺序与additions一致。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    additionsMap?: Map<string, string>;

    /**
     * 附加信息数量。取值范围为大于等于0。
     *
     * @type { ?number } [since 9 - 10]
     * @type { ?int } [since 11]
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    additionSize?: int;

    /**
     * true：位置信息来自于位置模拟功能。
     * 
     * false：位置信息不是来自于位置模拟功能。
     *
     * @type {?boolean} [since 9 - 24]
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi [since 9 - 24]
     * @publicapi [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    isFromMock?: boolean;

    /**
     * 表示高度信息的精度，单位米。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    altitudeAccuracy?: double;

    /**
     * 表示速度信息的精度，单位米每秒。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    speedAccuracy?: double;

    /**
     * 表示航向信息的精度。单位是“度”，取值范围为0到360。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    directionAccuracy?: double;

    /**
     * 表示位置时间戳的不确定度。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncertaintyOfTimeSinceBoot?: long;

    /**
     * 表示定位结果的来源。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    sourceType?: LocationSourceType;

    /**
     * 表示当前位置附近的POI信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    poi?: PoiInfo;
  }

  /**
   * 订阅定位业务所需数据的变化，主要包含WiFi和蓝牙扫描信息；根据入参决定是否启动WiFi和蓝牙扫描。使用callback异步回调。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface LocatingRequiredDataConfig {
    /**
     * 表示请求获取数据的类型。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    type: LocatingRequiredDataType;

    /**
     * 是否需要发起扫描。
     * true：需要发起扫描。
     * false：不需要发起扫描。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    needStartScan: boolean;

    /**
     * 表示扫描的时间间隔。单位是毫秒，默认值是10000毫秒，取值范围为大于0。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    scanInterval?: int;

    /**
     * 表示单次扫描的超时时间。单位是毫秒，默认值是10000毫秒，取值范围为大于0小于600000。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    scanTimeout?: int;

    /**
     * 表示SIM卡的卡槽号。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    slotId?: int;

    /**
     * 表示绝对无线载频信道号（Absolute Radio Frequency Channel Number，ARFCN）
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    arfcn?: int[];

    /**
     * 表示SIM卡的PLMN号码（Public Land Mobile Network Identifier，PLMN ID）
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    plmnId?: int[];
  }

  /**
   * 表示定位业务所需的数据，包含WiFi或蓝牙扫描结果，APP拿到这些数据之后可以用于网络定位等业务。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface LocatingRequiredData {
    /**
     * 表示WiFi扫描结果。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    wifiData?: WifiScanInfo;

    /**
     * 表示蓝牙扫描结果。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bluetoothData?: BluetoothScanInfo;

    /**
     * 表示SIM卡的卡槽号。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    slotId?: int;

    /**
     * 表示驻留小区信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    campedCellInfo?: CellInfo;

    /**
     * 表示邻区信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    neighboringCellInfo?: CellInfo[];
  }

  /**
   * WiFi扫描信息，包含扫描到的WiFi热点的ssid、bssid和rssi等信息。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface WifiScanInfo {
    /**
     * WiFi热点的SSID，编码格式为UTF-8。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    ssid: string;

    /**
     * 	WiFi热点的BSSID。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    bssid: string;

    /**
     * WiFi热点的信号强度(dBm)。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * 	WiFi热点的频率。单位是赫兹。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    frequency: int;

    /**
     * 时间戳，单位微秒。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    timestamp: long;
  }

  /**
   * 蓝牙扫描信息。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface BluetoothScanInfo {
    /**
     * 蓝牙设备名称。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * 蓝牙设备的MAC地址。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    macAddress: string;

    /**
     * 蓝牙设备的信号强度(dBm)。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * 时间戳，单位微秒。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    timestamp: long;
  }

  /**
   * 蓝牙扫描结果。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 16 dynamic
   * @since 23 static
   */
  export interface BluetoothScanResult {
    /**
     * 表示扫描到的设备地址。例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 表示扫描到的设备的rssi值，单位dBm。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    rssi: int;

    /**
     * 表示扫描到的设备发送的广播包。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    data?: ArrayBuffer;

    /**
     * 表示扫描到的设备名称。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * 表示扫描到的设备是否可连接。true表示可连接，false表示不可连接。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 16 dynamic
     * @since 23 static
     */
    connectable: boolean;
  }

  /**
   * POI(Point of Interest, 兴趣点)信息。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  export interface Poi {
    /**
     * 表示POI的ID。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * 表示POI信息的置信度。置信度越高，用户离该POI信息点越近。取值范围为0到1。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    confidence: double;

    /**
     * 表示POI的名称。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 表示POI所在的纬度。取值范围为-90到90。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * 表示POI所在的经度。取值范围为-180到180。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    longitude: double;

    /**
     * 表示POI所在的国家以下的一级行政区，一般是省/州。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    administrativeArea: string;

    /**
     * 表示POI所在的国家以下的二级行政区，一般是市。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    subAdministrativeArea: string;

    /**
     * 表示POI所在的城市信息，一般是市。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    locality: string;

    /**
     * 表示POI所在的子城市信息，一般是区/县。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    subLocality: string;

    /**
     * 表示POI的详细地址。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    address: string;

    /**
     * 表示POI附加信息，本字符串为JSON格式。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    additionalInfo?: string;
  }

  /**
   * POI信息结构体。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  export interface PoiInfo {
    /**
     * 表示POI信息列表。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    poiArray: Array<Poi>;

    /**
     * 表示获取到POI信息时的时间戳，UTC时间，单位毫秒。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    timestamp: long;
  }

  /**
   * beacon设备制造商数据。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export interface BeaconManufactureData {
    /**
     * 制造商标识。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    manufactureId: int;

    /**
     * 厂商自定义数据。例如：[0x02,0x15,0x00...0xFF,0x11,0x22,0x33,0x44,0x55]
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    manufactureData: ArrayBuffer;

    /**
     * 搭配manufactureData使用，可设置过滤部分制造商数据，0xFF为全匹配，0x00为模糊匹配。例如：[0xFF,0xFF,0xFF...0xFF,0xFF,0xFF,0xFF,0xFF,0xFF]
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    manufactureDataMask: ArrayBuffer;
  }

  /**
   * beacon围栏的参数配置。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export interface BeaconFence {
    /**
     * beacon围栏标识。可自行定义，如："123", "beaconName"。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    identifier: string;

    /**
     * beacon围栏信息类型。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    beaconFenceInfoType: BeaconFenceInfoType;

    /**
     * beacon设备制造商数据。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    manufactureData?: BeaconManufactureData;
  }

  /**
   * beacon围栏请求参数。transitionCallback与fenceExtensionAbilityName任选其一，都不填则参数无效。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  export interface BeaconFenceRequest {
    /**
     * beacon围栏的参数配置。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    beacon: BeaconFence;

    /**
     * beacon围栏事件信息。默认值为undefined。仅支持前台回调。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    transitionCallback?: Callback<GeofenceTransition>;

    /**
     * [FenceExtensionAbility]{@link @ohos.app.ability.FenceExtensionAbility:FenceExtensionAbility}名称。默认值为空字符串。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    fenceExtensionAbilityName?: string;
  }

  /**
   * 匹配的WLAN信息结构体。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export interface MatchingWlanInfo {  
    /**
     * 表示匹配的WLAN在wlanBssidArray中的索引。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    index: int;

    /**
     * 表示匹配的WLAN的SSID。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ssid: string;
  }

  /**
   * 定位结果的来源。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum LocationSourceType {
    /**
     * 表示定位结果来自于GNSS定位技术。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    GNSS = 1,

    /**
     * 表示定位结果来自于网络定位技术。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NETWORK = 2,

    /**
     * 表示定位结果来自于室内高精度定位技术。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    INDOOR = 3,

    /**
     * 表示定位结果来自于室外高精度定位技术。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RTK = 4
  }

  /**
   * 坐标系类型。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export enum CoordinateSystemType {
    /**
     * World Geodetic System 1984，是为GPS全球定位系统使用而建立的坐标系统。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    WGS84 = 1,

    /**
     * GCJ-02是由中国国家测绘局制订的地理信息系统的坐标系统。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GCJ02 = 2
  }

  /**
   * 定位图标状态。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export enum LocationIconStatus {
    /**
     * 表示当前无定位业务，无需显示定位图标。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_NOT_STARTED = 0,

    /**
     * 表示当前在进行普通定位业务，需要显示普通定位图标。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_STARTED = 1,

    /**
     * 表示当前正在进行高精度定位业务，需要显示高精度定位图标。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HD_LOCATING_STARTED = 2
  }

  /**
   * 持续定位过程中的错误信息。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum LocationError {
    /**
     * 默认值。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_DEFAULT = -1,

    /**
     * 表示ohos.permission.APPROXIMATELY_LOCATION权限或ohos.permission.LOCATION权限校验失败导致持续定位失败。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_LOCATION_PERMISSION_DENIED = -2,

    /**
     * 表示应用在后台时位置权限校验失败导致持续定位失败。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_BACKGROUND_PERMISSION_DENIED = -3,

    /**
     * 表示位置信息开关关闭导致持续定位失败。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_LOCATION_SWITCH_OFF = -4,

    /**
     * 表示无法访问网络，导致网络定位失败。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOCATING_FAILED_INTERNET_ACCESS_FAILURE = -5
  }

  /**
   * 地理围栏事件。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export enum GeofenceTransitionEvent {
    /**
     * 该事件表示设备从地理围栏外进入地理围栏内。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GEOFENCE_TRANSITION_EVENT_ENTER = 1,

    /**
     * 该事件表示设备从地理围栏内退出到地理围栏外。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GEOFENCE_TRANSITION_EVENT_EXIT = 2,

    /**
     * 该事件表示设备在地理围栏范围内，且持续徘徊超过10秒。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    GEOFENCE_TRANSITION_EVENT_DWELL = 4,

    /**
     * 该事件表示设备正在接近地理围栏区域。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    GEOFENCE_TRANSITION_EVENT_APPROACHING_GEOFENCE = 8,

    /**
     * 该事件表示设备已离开地理围栏区域。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    GEOFENCE_TRANSITION_EVENT_LEAVING_GEOFENCE = 16,

    /**
     * 该事件表示设备正在接近地理围栏区域，且持续徘徊超过15分钟。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    GEOFENCE_TRANSITION_EVENT_NEAR_WANDER = 32
  }

  /**
   * 卫星星座类型。
   *
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export enum SatelliteConstellationCategory {
    /**
     * 默认值。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_UNKNOWN = 0,

    /**
     * GPS（Global Positioning System），即全球定位系统，是美国研制发射的一种以人造地球卫星为基础的高精度无线电导航的定位系统。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_GPS = 1,

    /**
     * SBAS（Satellite-Based Augmentation System），即星基增强系统，通过地球静止轨道（GEO）卫星搭载卫星导航增强信号转发器，可以向用户播发星历误差、卫星钟差、电离层延迟等多种修正信息，实现对于
     * 原有卫星导航系统定位精度的改进。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_SBAS = 2,

    /**
     * GLONASS（GLOBAL NAVIGATION SATELLITE SYSTEM），是苏联/俄罗斯研制卫星导航系统。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_GLONASS = 3,

    /**
     * QZSS（Quasi-Zenith Satellite System），即准天顶卫星系统，是以三颗人造卫星透过时间转移完成全球定位系统区域性功能的卫星扩增系统，是日本研发的卫星系统。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_QZSS = 4,

    /**
     * 北斗卫星导航系统（Beidou Navigation Satellite System）是中国自行研制的全球卫星导航系统。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_BEIDOU = 5,

    /**
     * GALILEO（Galileo satellite navigation system），即伽利略卫星导航系统，是由欧盟研制和建立的全球卫星导航定位系统。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_GALILEO = 6,

    /**
     * IRNSS（Indian Regional Navigation Satellite System），即印度区域导航卫星系统，是一个由印度空间研究组织（ISRO）发展的自由区域型卫星导航系统。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    CONSTELLATION_CATEGORY_IRNSS = 7
  }

  /**
   * 卫星附加信息类型。
   *
   * @syscap SystemCapability.Location.Location.Gnss
   * @crossplatform [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  export enum SatelliteAdditionalInfo {
    /**
     * 默认值。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_NULL = 0,

    /**
     * 表示本卫星具有星历数据。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_EPHEMERIS_DATA_EXIST = 1,

    /**
     * 表示本卫星具有年历数据。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_ALMANAC_DATA_EXIST = 2,

    /**
     * 表示在最新的位置解算中使用了本卫星。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_USED_IN_FIX = 4,

    /**
     * 表示本卫星具有载波频率。
     *
     * @syscap SystemCapability.Location.Location.Gnss
     * @crossplatform [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SATELLITES_ADDITIONAL_INFO_CARRIER_FREQUENCY_EXIST = 8
  }

  /**
   * 位置请求中的用户活动场景类型。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum UserActivityScenario {
    /**
     * 表示导航场景。
     * 
     * 适用于在户外获取设备实时位置的场景，如车载、步行导航。
     * 
     * 主要使用GNSS定位技术提供定位服务，功耗较高。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NAVIGATION = 0x401,

    /**
     * 表示运动场景。
     * 
     * 适用于记录用户位置轨迹的场景，如运动类应用记录轨迹功能。
     * 
     * 主要使用GNSS定位技术提供定位服务，功耗较高。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPORT = 0x402,

    /**
     * 表示出行场景。
     * 
     * 适用于用户出行场景，如打车、乘坐公共交通等场景。
     * 
     * 主要使用GNSS定位技术提供定位服务，功耗较高。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TRANSPORT = 0x403,

    /**
     * 表示日常服务使用场景。
     * 
     * 适用于不需要定位用户精确位置的使用场景，如新闻资讯、网购、点餐类应用。
     * 
     * 该场景仅使用网络定位技术提供定位服务，功耗较低。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DAILY_LIFE_SERVICE = 0x404
  }

  /**
   * 单次位置请求中的优先级类型。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum LocatingPriority {
    /**
     * 表示精度优先。
     * 
     * 定位精度优先策略会同时使用GNSS定位和网络定位技术，并把一段时间内精度较好的结果返回给应用；这个时间段长度为
     * [SingleLocationRequest]{@link geoLocationManager.SingleLocationRequest}.locatingTimeoutMs与“30秒”中的较小者。
     * 
     * 对设备的硬件资源消耗较大，功耗较大。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PRIORITY_ACCURACY = 0x501,

    /**
     * 表示快速获取位置优先，如果应用希望快速拿到一个位置，可以将优先级设置为该类型。
     * 
     * 快速定位优先策略会同时使用GNSS定位和网络定位技术，以便在室内和户外场景下均可以快速获取到位置结果，我们会把最先拿到的定位结果返回给应用。对设备的硬件资源消耗较大，功耗也较大。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PRIORITY_LOCATING_SPEED = 0x502
  }

  /**
   * 位置请求中位置信息优先级类型。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LocationRequestPriority {
    /**
     * 表示未设置优先级，表示[LocationRequestPriority]{@link geoLocationManager.LocationRequestPriority}无效。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNSET = 0x200,

    /**
     * 表示精度优先。
     * 
     * 定位精度优先策略主要以GNSS定位技术为主。我们会在GNSS提供稳定位置结果之前使用网络定位技术提供服务。在持续定位过程中，如果超过30秒无法获取GNSS定位结果则使用网络定位技术。对设备的硬件资源消耗较大，功耗较大。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ACCURACY = 0x201,

    /**
     * 表示低功耗优先。
     * 
     * 低功耗定位优先策略仅使用网络定位技术，在室内和户外场景均可提供定位服务，因为其依赖周边基站、可见WLAN、蓝牙设备的分布情况，定位结果的精度波动范围较大，推荐在对定位结果精度要求不高的场景下使用该策略，可以有效节省设备功耗。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LOW_POWER = 0x202,

    /**
     * 表示快速获取位置优先，如果应用希望快速拿到一个位置，可以将优先级设置为该字段。
     * 
     * 快速定位优先策略会同时使用GNSS定位和网络定位技术，以便在室内和户外场景下均可以快速获取到位置结果；当各种定位技术都有提供位置结果时，系统会选择其中精度较好的结果返回给应用。因为对各种定位技术同时使用，对设备的硬件资源消耗较
     * 大，功耗也较大。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FIRST_FIX = 0x203
  }

  /**
   * 位置请求中定位场景类型。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LocationRequestScenario {
    /**
     * 表示未设置场景信息。
     * 
     * 表示[LocationRequestScenario]{@link geoLocationManager.LocationRequestScenario}字段无效。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNSET = 0x300,

    /**
     * 表示导航场景。
     * 
     * 适用于在户外获取设备实时位置的场景，如车载、步行导航。
     * 
     * 主要使用GNSS定位技术提供定位服务，功耗较高。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NAVIGATION = 0x301,

    /**
     * 表示运动轨迹记录场景。
     * 
     * 适用于记录用户位置轨迹的场景，如运动类应用记录轨迹功能。
     * 
     * 主要使用GNSS定位技术提供定位服务，功耗较高。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    TRAJECTORY_TRACKING = 0x302,

    /**
     * 表示打车场景。
     * 
     * 适用于用户出行打车时定位当前位置的场景，如网约车类应用。
     * 
     * 主要使用GNSS定位技术提供定位服务，功耗较高。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CAR_HAILING = 0x303,

    /**
     * 表示日常服务使用场景。
     * 
     * 适用于不需要定位用户精确位置的使用场景，如新闻资讯、网购、点餐类应用。
     * 
     * 该场景仅使用网络定位技术提供定位服务，功耗较低。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    DAILY_LIFE_SERVICE = 0x304,

    /**
     * 表示无功耗功场景，这种场景下不会主动触发定位，会在其他应用定位时，才给当前应用返回位置。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NO_POWER = 0x305
  }

  /**
   * 位置请求中的功耗场景类型。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum PowerConsumptionScenario {
    /**
     * 高功耗。
     * 
     * 以GNSS定位技术为主。我们会在GNSS提供稳定位置结果之前使用网络定位技术提供服务；在持续定位时，如果超过30秒无法获取GNSS定位结果则会使用网络定位技术获取位置。对设备的硬件资源消耗较大，功耗较大。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    HIGH_POWER_CONSUMPTION = 0x601,

    /**
     * 低功耗。
     * 
     * 适用于对用户位置精度要求不高的使用场景，如新闻资讯、网购、点餐类应用。
     * 
     * 该场景仅使用网络定位技术提供定位服务，功耗较低。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LOW_POWER_CONSUMPTION = 0x602,

    /**
     * 无功耗。
     * 
     * 这种场景下不会主动触发定位，会在其他应用定位时，才给当前应用返回位置。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NO_POWER_CONSUMPTION = 0x603
  }

  /**
   * 定位服务隐私协议类型。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LocationPrivacyType {
    /**
     * 其他场景。预留字段。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    OTHERS = 0,

    /**
     * 开机向导场景下的隐私协议。在开机时弹出协议，提醒用户阅读并选择是否授权。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STARTUP = 1,

    /**
     * 开启网络定位时弹出的隐私协议。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CORE_LOCATION = 2
  }

  /**
   * 运动类型。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum SportsType {
    /**
     * 表示跑步。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    RUNNING = 1,

    /**
     * 表示步行。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    WALKING = 2,

    /**
     * 表示骑行。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    CYCLING = 3,

    /**
     * 表示滑雪。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    SKIING = 4
  }

  /**
   * 扩展命令参数。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LocationCommand {
    /**
     * 表示定位场景。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @since 9 dynamic
     * @since 23 static
     */
    scenario: LocationRequestScenario;

    /**
     * 扩展命令字符串，字符串长度不超过100。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @since 9 dynamic
     * @since 23 static
     */
    command: string;
  }

  /**
   * 国家码信息，包含国家码字符串和国家码的来源信息。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CountryCode {
    /**
     * 表示国家码字符串。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    country: string;

    /**
     * 表示国家码信息来源。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    type: CountryCodeType;
  }

  /**
   * 融合围栏请求信息。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface FusionFenceRequestParams {  
    /**
     * 表示融合围栏唯一标识。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    identifier: string;

    /**
     * 表示融合围栏场景。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    scene: FusionFenceScene;

    /**
     * 表示融合围栏类型。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    fenceType: int;

    /**
     * 表示POI类型。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    poiType?: string;

    /**
     * 	表示POI位置信息。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    poiLocation: Point;

    /**
     * 表示监听的围栏事件。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    monitorTransitionEvents: int;
	
    /**
     * 表示徘徊时间，单位为毫秒。取值范围为大于0。若监听徘徊事件，当设备在围栏内徘徊时间达到该值，则上报徘徊事件。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    loiterTimeMs: int;
	
    /**
     * 表示GNSS围栏信息集合
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    gnssFences?: Array<GnssFence>;
	
    /**
     * 表示CELL围栏信息集合。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    cellFences?: Array<CellFence>;
	
    /**
     * 表示Wi-Fi围栏信息集合。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    wifiFences?: Array<WifiFence>;

    /**
     * 表示围栏存活时间，单位是毫秒。取值范围为大于0。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    expirationMs: double;

    /**
     * 表示用于接收围栏事件的回调函数。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    fenceTransitionCallback: Callback<FusionFenceTransition>;
  }

  /**
   * 融合围栏回调事件信息。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface FusionFenceTransition {  
    /**
     * 	表示融合围栏唯一标识。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    identifier: string;

    /**
     * 表示融合围栏场景。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    scene: FusionFenceScene;

    /**
     * 表示围栏事件。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    transitionEvent: GeofenceTransitionEvent;
  }
  
  /**
   * GNSS围栏信息。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface GnssFence {  
    /**
     * 表示GNSS围栏类型。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    gnssFenceType: int;
	
    /**
     * 表示圆形围栏信息集合。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    circularFence?: Geofence;
	
    /**
     * 	表示多边形围栏信息集合。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    polygon?: Array<Point>;
  }

  /**
   * CELL围栏信息。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface CellFence {  
    /**
     * 表示CELL围栏信息集合。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    cellInfos: Array<CellInfo>;
  }
  
  /**
   * Wi-Fi围栏信息。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface WifiFence {  
    /**
     * 表示Wi-Fi指纹算法类型。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    type: WifiFingerprintType;

    /**
     * 	表示Wi-Fi指纹信息集合。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    wifiFeatures: Array<WirelessSignalFeature>;
  }
  
  /**
   * Wi-Fi指纹信息。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface WirelessSignalFeature {  
    /**
     * 表示RSSI平均值。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    rssiAvg: int;

    /**
     * 表示RSSI标准差。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    rssiStandardDeviation: double;
	
    /**
     * 表示设备MAC地址信息集合。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    mac: Array<string>;
  }
  
  /**
   * 表示一个位置点。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export interface Point {  
    /**
     * 表示纬度信息，正值表示北纬，负值表示南纬。取值范围为-90到90。仅支持WGS84坐标系。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    latitude: double;
	
    /**
     * 表示经度信息，正值表示东经，负值表示西经。取值范围为-180到180。仅支持WGS84坐标系。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    longitude: double;
  }

  /**
   * 国家码来源类型。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @crossplatform [since 22]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum CountryCodeType {
    /**
     * 从全球化模块的语言配置信息中获取到的国家码。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    COUNTRY_CODE_FROM_LOCALE = 1,

    /**
     * 从SIM卡中获取到的国家码。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    COUNTRY_CODE_FROM_SIM = 2,

    /**
     * 基于用户的位置信息，通过逆地理编码查询到的国家码。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    COUNTRY_CODE_FROM_LOCATION = 3,

    /**
     * 从蜂窝网络注册信息中获取到的国家码。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @crossplatform [since 22]
     * @since 9 dynamic
     * @since 23 static
     */
    COUNTRY_CODE_FROM_NETWORK = 4
  }

  /**
   * 定位业务所需数据的类型。
   *
   * @syscap SystemCapability.Location.Location.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export enum LocatingRequiredDataType {
    /**
     * 表示WiFi扫描信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIFI = 1,

    /**
     * 表示蓝牙扫描信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    BLUETOOTH = 2,

    /**
     * 表示蜂窝小区信息。
     *
     * @syscap SystemCapability.Location.Location.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    CELLULAR = 3
  }

  /**
   * beacon围栏信息类型。当前仅支持设备制造商数据过滤。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export enum BeaconFenceInfoType {
    /**
     * 标识使用beacon设备制造商数据。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    BEACON_MANUFACTURE_DATA = 1
  }

  /**
   * GNSS围栏类型。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export enum GnssFenceType {  
    /**
     * 	表示多边形围栏。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    POLYGON = 1,

    /**
     * 表示圆形围栏。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    CIRCULAR = 2
  }
  
  /**
   * Wi-Fi指纹算法类型。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export enum WifiFingerprintType {  
    /**
     * 表示语义算法。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    SEMANTIC = 1,

    /**
     * 表示高精指纹算法。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    LOCATION = 2
  }

  /**
   * 融合围栏类型采用二进制标记，该类型在使用时是将支持的围栏类型所在bit位置为1。例如支持GNSS和CELLULAR围栏，则值为0011（二进制），转换为十进制为3；全部四种围栏都支持，则值为1111（二进制），转换为十进制为15。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export enum FusionFenceType {  
    /**
     * 四位二进制数的最低位，表示GNSS围栏。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    GNSS = 1,
	
    /**
     * 四位二进制数由低到高的第二位，表示CELLULAR围栏。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    CELLULAR = 2,
	
    /**
     * 四位二进制数由低到高的第三位，表示Wi-Fi围栏。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    WIFI = 4,
	
    /**
     * 四位二进制数的最高位，表示蓝牙围栏。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    BLUETOOTH = 8
  }
  
  /**
   * 融合围栏场景。
   *
   * @syscap SystemCapability.Location.Location.Geofence
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  export enum FusionFenceScene {  
    /**
     * 表示机场场景。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    AIRPORT = 1,

    /**
     * 表示火车站场景。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    TRAIN_STATION = 2,
	
    /**
     * 表示地铁场景。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    SUBWAY = 3,

    /**
     * 表示商场场景。
     *
     * @syscap SystemCapability.Location.Location.Geofence
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     * @since 26.1.0 static
     */
    SHOP = 4
  }
}

export default geoLocationManager;