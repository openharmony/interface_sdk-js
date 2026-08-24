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
 * @file
 * @kit LocationKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { WantAgent } from './@ohos.wantAgent';

/**
 * 位置服务提供GNSS定位、网络定位、地理编码、逆地理编码、国家码和地理围栏等基本功能。
 *
 * @namespace geolocation
 * @permission ohos.permission.LOCATION
 * @syscap SystemCapability.Location.Location.Core
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.geoLocationManager
 */
declare namespace geolocation {
  /**
   * 开启位置变化订阅，并发起定位请求。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'locationChange' } type - 设置事件类型。type为“locationChange”，表示位置变化。
   * @param { LocationRequest } request - 设置位置请求参数。
   * @param { Callback<Location> } callback - 回调函数，返回位置信息。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:locationChange
   */
  function on(type: 'locationChange', request: LocationRequest, callback: Callback<Location>): void;

  /**
   * 关闭位置变化订阅，并删除对应的定位请求。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'locationChange' } type - 设置事件类型。type为“locationChange”，表示位置变化。
   * @param { Callback<Location> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。
   *    若无此参数，则取消当前类型的所有订阅。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:locationChange
   */
  function off(type: 'locationChange', callback?: Callback<Location>): void;

  /**
   * 订阅位置服务状态变化。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'locationServiceState' } type - 设置事件类型。type为“locationServiceState”，表示位置服务状态。
   * @param { Callback<boolean> } callback - 回调函数。返回true表示打开位置服务；返回false表示关闭位置服务。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:locationEnabledChange
   */
  function on(type: 'locationServiceState', callback: Callback<boolean>): void;

  /**
   * 取消订阅位置服务状态变化。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'locationServiceState' } type - 设置事件类型。type为“locationServiceState”，表示位置服务状态。
   * @param { Callback<boolean> } [callback] - 需要取消订阅的回调函数。
   *    该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:locationEnabledChange
   */
  function off(type: 'locationServiceState', callback?: Callback<boolean>): void;

  /**
   * 订阅缓存GNSS定位结果上报事件。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'cachedGnssLocationsReporting' } type - 设置事件类型。type为“cachedGnssLocationsReporting”，表示GNSS缓存定位结果上报。
   * @param { CachedGnssLocationsRequest } request - GNSS缓存功能配置参数。
   * @param { Callback<Array<Location>> } callback - 回调函数，返回GNSS缓存位置。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:cachedGnssLocationsChange
   */
  function on(type: 'cachedGnssLocationsReporting', request: CachedGnssLocationsRequest, callback: Callback<Array<Location>>): void;

  /**
   * 取消订阅缓存GNSS定位结果上报事件。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'cachedGnssLocationsReporting' } type - 设置事件类型。type为“cachedGnssLocationsReporting”，表示GNSS缓存定位结果上报。
   * @param { Callback<Array<Location>> } [callback] - 需要取消订阅的回调函数。该回调函数需要与on接口传入的回调函数保持一致。
   *    若无此参数，则取消当前类型的所有订阅。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:cachedGnssLocationsChange
   */
  function off(type: 'cachedGnssLocationsReporting', callback?: Callback<Array<Location>>): void;

  /**
   * 订阅GNSS卫星状态信息上报事件。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'gnssStatusChange' } type - 设置事件类型。type为“gnssStatusChange”，表示订阅GNSS卫星状态信息上报。
   * @param { Callback<SatelliteStatusInfo> } callback - 回调函数，返回GNSS卫星状态信息。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:satelliteStatusChange
   */
  function on(type: 'gnssStatusChange', callback: Callback<SatelliteStatusInfo>): void;

  /**
   * 取消订阅GNSS卫星状态信息上报事件。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'gnssStatusChange' } type - 设置事件类型。type为“gnssStatusChange”，表示订阅GNSS卫星状态信息上报。
   * @param { Callback<SatelliteStatusInfo> } [callback] - 需要取消订阅的回调函数。
   *    该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:satelliteStatusChange
   */
  function off(type: 'gnssStatusChange', callback?: Callback<SatelliteStatusInfo>): void;

  /**
   * 订阅GNSS NMEA信息上报事件。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'nmeaMessageChange' } type - 设置事件类型。type为“nmeaMessageChange”，表示订阅GNSS NMEA信息上报。
   * @param { Callback<string> } callback - 回调函数，返回GNSS NMEA信息。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:nmeaMessage
   */
  function on(type: 'nmeaMessageChange', callback: Callback<string>): void;

  /**
   * 取消订阅GNSS NMEA信息上报事件。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'nmeaMessageChange' } type - 设置事件类型。type为“nmeaMessageChange”，表示订阅GNSS NMEA信息上报。
   * @param { Callback<string> } [callback] - 需要取消订阅的回调函数。
   *    该回调函数需要与on接口传入的回调函数保持一致。若无此参数，则取消当前类型的所有订阅。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:nmeaMessage
   */
  function off(type: 'nmeaMessageChange', callback?: Callback<string>): void;

  /**
   * 添加一个围栏，并订阅地理围栏事件。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'fenceStatusChange' } type - 设置事件类型。type为“fenceStatusChange”，表示订阅围栏事件上报。
   * @param { GeofenceRequest } request - 围栏的配置参数。
   * @param { WantAgent } want - 用于接收地理围栏事件上报（进出围栏）。
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:gnssFenceStatusChange
   */
  function on(type: 'fenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

  /**
   * 删除一个围栏，并取消订阅该围栏事件。
   *
   * @permission ohos.permission.LOCATION
   * @param { 'fenceStatusChange' } type - 设置事件类型。type为“fenceStatusChange”，表示订阅围栏事件上报。
   * @param { GeofenceRequest } request - 围栏的配置参数。
   * @param { WantAgent } want - 用于接收地理围栏事件上报（进出围栏）。
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:gnssFenceStatusChange
   */
  function off(type: 'fenceStatusChange', request: GeofenceRequest, want: WantAgent): void;

  /**
   * 获取当前位置，使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { CurrentLocationRequest } request - 设置位置请求参数。
   * @param { AsyncCallback<Location> } callback - 回调函数，返回当前位置信息。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation
   */
  function getCurrentLocation(request: CurrentLocationRequest, callback: AsyncCallback<Location>): void;

  /**
   * 获取当前位置，使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { AsyncCallback<Location> } callback - 回调函数，返回当前位置信息。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation
   */
  function getCurrentLocation(callback: AsyncCallback<Location>): void;

  /**
   * 获取当前位置，使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { CurrentLocationRequest } [request] - 设置位置请求参数。
   * @returns { Promise<Location> } Promise对象，返回当前位置信息。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation
   */
  function getCurrentLocation(request?: CurrentLocationRequest): Promise<Location>;

  /**
   * 获取上一次位置，使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { AsyncCallback<Location> } callback - 回调函数，返回上次位置信息。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getLastLocation
   */
  function getLastLocation(callback: AsyncCallback<Location>): void;

  /**
   * 获取上一次位置，使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @returns { Promise<Location> } Promise对象，返回上次位置信息。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getLastLocation
   */
  function getLastLocation(): Promise<Location>;

  /**
   * 判断位置服务是否已经打开，使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示位置服务已经开启；返回false表示位置服务已经关闭。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.isLocationEnabled
   */
  function isLocationEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * 判断位置服务是否已经开启，使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @returns { Promise<boolean> } Promise对象，返回true表示位置服务已经开启；返回false表示位置服务已经关闭。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.isLocationEnabled
   */
  function isLocationEnabled(): Promise<boolean>;

  /**
   * 请求打开位置服务，使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示打开位置服务；返回false表示关闭位置服务。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function requestEnableLocation(callback: AsyncCallback<boolean>): void;

  /**
   * 请求打开位置服务，使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @returns { Promise<boolean> } Promise对象，返回true表示位置服务已经开启；返回false表示位置服务已经关闭。
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function requestEnableLocation(): Promise<boolean>;

  /**
   * 调用逆地理编码服务，将坐标转换为地理描述，使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { ReverseGeoCodeRequest } request - 设置逆地理编码请求的相关参数。
   * @param { AsyncCallback<Array<GeoAddress>> } callback - 回调函数，返回逆地理编码结果。
   * @syscap SystemCapability.Location.Location.Geocoder
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getAddressesFromLocation
   */
  function getAddressesFromLocation(request: ReverseGeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;

  /**
   * 调用逆地理编码服务，将坐标转换为地理描述，使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { ReverseGeoCodeRequest } request - 	设置逆地理编码请求的相关参数。
   * @returns { Promise<Array<GeoAddress>> } Promise对象，返回地理描述信息。
   * @syscap SystemCapability.Location.Location.Geocoder
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getAddressesFromLocation
   */
  function getAddressesFromLocation(request: ReverseGeoCodeRequest): Promise<Array<GeoAddress>>;

  /**
   * 调用地理编码服务，将地理描述转换为具体坐标，使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { GeoCodeRequest } request - 设置地理编码请求的相关参数。
   * @param { AsyncCallback<Array<GeoAddress>> } callback - 回调函数，返回地理编码结果。
   * @syscap SystemCapability.Location.Location.Geocoder
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getAddressesFromLocationName
   */
  function getAddressesFromLocationName(request: GeoCodeRequest, callback: AsyncCallback<Array<GeoAddress>>): void;

  /**
   * 调用地理编码服务，将地理描述转换为具体坐标，使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { GeoCodeRequest } request - 设置地理编码请求的相关参数。
   * @returns { Promise<Array<GeoAddress>> } Promise对象，返回地理编码查询结果。
   * @syscap SystemCapability.Location.Location.Geocoder
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getAddressesFromLocationName
   */
  function getAddressesFromLocationName(request: GeoCodeRequest): Promise<Array<GeoAddress>>;

  /**
   * 判断（逆）地理编码服务状态，使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回true表示地理编码服务可用；返回false表示地理编码服务不可用。
   * @syscap SystemCapability.Location.Location.Geocoder
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.isGeocoderAvailable
   */
  function isGeoServiceAvailable(callback: AsyncCallback<boolean>): void;

  /**
   * 判断（逆）地理编码服务状态，使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @returns { Promise<boolean> } Promise对象，返回true表示地理编码服务可用；返回false表示地理编码服务不可用。
   * @syscap SystemCapability.Location.Location.Geocoder
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.isGeocoderAvailable
   */
  function isGeoServiceAvailable(): Promise<boolean>;

  /**
   * 获取GNSS芯片缓存位置的个数。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { AsyncCallback<number> } callback - 回调函数，返回GNSS芯片缓存位置个数。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getCachedGnssLocationsSize
   */
  function getCachedGnssLocationsSize(callback: AsyncCallback<number>): void;

  /**
   * 获取GNSS芯片缓存位置的个数。使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @returns { Promise<number> } Promise对象，返回GNSS缓存位置的个数。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.getCachedGnssLocationsSize
   */
  function getCachedGnssLocationsSize(): Promise<number>;

  /**
   * 读取并清空GNSS芯片所有缓存位置。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示操作成功；返回false表示操作失败。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.flushCachedGnssLocations
   */
  function flushCachedGnssLocations(callback: AsyncCallback<boolean>): void;

  /**
   * 读取并清空GNSS芯片所有缓存位置。使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @returns { Promise<boolean> } Promise对象，返回true表示操作成功；返回false表示操作失败。
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.flushCachedGnssLocations
   */
  function flushCachedGnssLocations(): Promise<boolean>;

  /**
   * 给位置服务子系统的各个部件发送扩展命令。使用callback异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { LocationCommand } command - 指定目标场景，和将要发送的命令（字符串）。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示命令发送成功；返回false表示命令发送失败。
   * @syscap SystemCapability.Location.Location.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.sendCommand
   */
  function sendCommand(command: LocationCommand, callback: AsyncCallback<boolean>): void;

  /**
   * 给位置服务子系统的各个部件发送扩展命令。使用Promise异步回调。
   *
   * @permission ohos.permission.LOCATION
   * @param { LocationCommand } command - 指定目标场景，和将要发送的命令（字符串）。
   * @returns { Promise<boolean> } Promise对象，返回true表示命令发送成功；返回false表示命令发送失败。
   * @syscap SystemCapability.Location.Location.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.sendCommand
   */
  function sendCommand(command: LocationCommand): Promise<boolean>;

  /**
   * 卫星状态信息。
   *
   * @interface SatelliteStatusInfo
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.SatelliteStatusInfo
   */
  export interface SatelliteStatusInfo {
    /**
     * 表示卫星个数。取值范围为大于等于0。
     * 
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.SatelliteStatusInfo#satellitesNumber
     */
    satellitesNumber: number;

    /**
     * 表示每个卫星的ID，数组类型。取值范围为大于等于0。
     * 
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.SatelliteStatusInfo#satelliteIds
     */
    satelliteIds: Array<number>;

    /**
     * 表示载波噪声功率谱密度比，即cn0。取值范围为大于0。
     * 
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.SatelliteStatusInfo#carrierToNoiseDensitys
     */
    carrierToNoiseDensitys: Array<number>;

    /**
     * 表示卫星高度角信息。单位是“度”，取值范围为-90到90。
     * 
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.SatelliteStatusInfo#altitudes
     */
    altitudes: Array<number>;

    /**
     * 表示方位角。单位是“度”，取值范围为0到360。
     * 
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.SatelliteStatusInfo#azimuths
     */
    azimuths: Array<number>;

    /**
     * 表示载波频率。单位是Hz，取值范围为大于等于0。
     * 
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.SatelliteStatusInfo#carrierFrequencies
     */
    carrierFrequencies: Array<number>;
  }

  /**
   * 请求订阅GNSS缓存位置上报功能接口的配置参数。
   *
   * @interface CachedGnssLocationsRequest
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Gnss
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.CachedGnssLocationsRequest
   */
  export interface CachedGnssLocationsRequest {
    /**
     * 表示GNSS缓存位置上报的周期，单位是毫秒。取值范围为大于0。
     * 
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.CachedGnssLocationsRequest#reportingPeriodSec
     */
    reportingPeriodSec: number;

    /**
     * GNSS芯片底层缓存队列满之后是否主动唤醒AP芯片。
     * true表示GNSS芯片底层缓存队列满之后会主动唤醒AP芯片，并把缓存位置上报给应用。
     * false表示GNSS芯片底层缓存队列满之后不会主动唤醒AP芯片，会把缓存位置直接丢弃。
     * 
     * @syscap SystemCapability.Location.Location.Gnss
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.CachedGnssLocationsRequest#wakeUpCacheQueueFull
     */
    wakeUpCacheQueueFull: boolean;
  }

  /**
   * 请求添加GNSS围栏消息中携带的参数，包括定位场景和围栏信息。
   *
   * @interface GeofenceRequest
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.GeofenceRequest
   */
  export interface GeofenceRequest {
    /**
     * 	设置事件类型。type为“fenceStatusChange”，表示订阅围栏事件上报。
     * 
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeofenceRequest#priority
     */
    priority: LocationRequestPriority;

    /**
     * 	围栏的配置参数。
     * 
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeofenceRequest#scenario
     */
    scenario: LocationRequestScenario;

    /**
     * 用于接收地理围栏事件上报（进出围栏）。
     * 
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeofenceRequest#geofence
     */
    geofence: Geofence;
  }

  /**
   * GNSS围栏的配置参数。目前只支持圆形围栏。
   *
   * @interface Geofence
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Geofence
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.Geofence
   */
  export interface Geofence {
    /**
     * 表示纬度。取值范围为-90到90。
     * 
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Geofence#latitude
     */
    latitude: number;

    /**
     * 表示经度。取值范围为-180到180。
     * 
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Geofence#longitude
     */
    longitude: number;

    /**
     * 表示圆形围栏的半径。单位是米，取值范围为大于0。
     * 
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Geofence#radius
     */
    radius: number;

    /**
     * 围栏存活的时间，单位是毫秒。取值范围为大于0。
     * 
     * @syscap SystemCapability.Location.Location.Geofence
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Geofence#expiration
     */
    expiration: number;
  }

  /**
   * 逆地理编码请求参数。
   *
   * @interface ReverseGeoCodeRequest
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Geocoder
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.ReverseGeoCodeRequest
   */
  export interface ReverseGeoCodeRequest {
    /**
     * 指定位置描述信息的语言，“zh”代表中文，“en”代表英文。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.ReverseGeoCodeRequest#locale
     */
    locale?: string;

    /**
     * 表示纬度信息，正值表示北纬，负值表示南纬。取值范围为-90到90。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.ReverseGeoCodeRequest#latitude
     */
    latitude: number;

    /**
     * 表示经度信息，正值表示东经，负值表示西经。取值范围为-180到180。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.ReverseGeoCodeRequest#longitude
     */
    longitude: number;

    /**
     * 指定返回位置信息的最大个数。取值范围为大于等于0，推荐该值小于10。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.ReverseGeoCodeRequest#maxItems
     */
    maxItems?: number;
  }

  /**
   * 地理编码请求参数。
   *
   * @interface GeoCodeRequest
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Geocoder
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.GeoCodeRequest
   */
  export interface GeoCodeRequest {
    /**
     * 表示位置描述信息的语言，“zh”代表中文，“en”代表英文。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoCodeRequest#locale
     */
    locale?: string;

    /**
     * 表示位置信息描述，如“上海市浦东新区xx路xx号”。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoCodeRequest#description
     */
    description: string;

    /**
     * 表示返回位置信息的最大个数。取值范围为大于等于0，推荐该值小于10。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoCodeRequest#maxItems
     */
    maxItems?: number;

    /**
     * 	表示最小纬度信息，与下面三个参数一起，表示一个经纬度范围。取值范围为-90到90。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoCodeRequest#minLatitude
     */
    minLatitude?: number;

    /**
     * 表示最小经度信息。取值范围为-180到180。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoCodeRequest#minLongitude
     */
    minLongitude?: number;

    /**
     * 表示最大纬度信息。取值范围为-90到90。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoCodeRequest#maxLatitude
     */
    maxLatitude?: number;

    /**
     * 表示最大经度信息。取值范围为-180到180。
     * 
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoCodeRequest#maxLongitude
     */
    maxLongitude?: number;
  }

  /**
   * 地理编码地址信息。
   *
   * @interface GeoAddress
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Geocoder
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress
   */
  export interface GeoAddress {
    /**
     * 	表示纬度信息，正值表示北纬，负值表示南纬。取值范围为-90到90。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#latitude
     */
    latitude?: number;

    /**
     * 表示经度信息，正值表示东经，负值表是西经。取值范围为-180到180。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#longitude
     */
    longitude?: number;

    /**
     * 表示位置描述信息的语言，“zh”代表中文，“en”代表英文。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#locale
     */
    locale?: string;

    /**
     * 表示地区信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#placeName
     */
    placeName?: string;

    /**
     * 表示国家码信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#countryCode
     */
    countryCode?: string;

    /**
     * 表示国家信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#countryName
     */
    countryName?: string;

    /**
     * 表示省份区域信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#administrativeArea
     */
    administrativeArea?: string;

    /**
     * 表示子区域信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#subAdministrativeArea
     */
    subAdministrativeArea?: string;

    /**
     * 表示城市信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#locality
     */
    locality?: string;

    /**
     * 表示子城市信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#subLocality
     */
    subLocality?: string;

    /**
     * 表示路名信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#roadName
     */
    roadName?: string;

    /**
     * 表示子路名信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#subRoadName
     */
    subRoadName?: string;

    /**
     * 表示门牌号信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#premises
     */
    premises?: string;

    /**
     * 表示邮政编码信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#postalCode
     */
    postalCode?: string;

    /**
     * 表示联系方式信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#phoneNumber
     */
    phoneNumber?: string;

    /**
     * 表示位置信息附件的网址信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#addressUrl
     */
    addressUrl?: string;

    /**
     * 表示附加的描述信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#descriptions
     */
    descriptions?: Array<string>;

    /**
     * 表示附加的描述信息数量。取值范围为大于等于0，推荐该值小于10。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Geocoder
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.GeoAddress#descriptionsSize
     */
    descriptionsSize?: number;
  }

  /**
   * 位置信息请求参数。
   *
   * @interface LocationRequest
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequest
   */
  export interface LocationRequest {
    /**
     * 表示优先级信息。取值范围见[LocationRequestPriority]{@link geolocation.LocationRequestPriority}的定义。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequest#priority
     */
    priority?: LocationRequestPriority;

    /**
     * 表示场景信息。取值范围见[LocationRequestScenario]{@link geolocation.LocationRequestScenario}的定义。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequest#scenario
     */
    scenario?: LocationRequestScenario;

    /**
     * 表示上报位置信息的时间间隔，单位是秒。取值范围为大于0。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequest#timeInterval
     */
    timeInterval?: number;

    /**
     * 	表示上报位置信息的距离间隔。单位是米，取值范围为大于0。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequest#distanceInterval
     */
    distanceInterval?: number;

    /**
     * 表示精度信息，单位是米。
     * 仅在精确位置功能场景（同时授予了ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION 权限）下有效，
     * 模糊位置功能生效场景（仅授予了ohos.permission.APPROXIMATELY_LOCATION 权限）下该字段无意义。默认值为0，取值范围为大于等于0。
     * 当scenario为NAVIGATION/TRAJECTORY_TRACKING/CAR_HAILING或者priority为ACCURACY时建议设置maxAccuracy为大于10的值。
     * 当scenario为DAILY_LIFE_SERVICE/NO_POWER或者priority为LOW_POWER/FIRST_FIX时建议设置maxAccuracy为大于100的值。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequest#maxAccuracy
     */
    maxAccuracy?: number;
  }

  /**
   * 当前位置信息请求参数。
   *
   * @interface CurrentLocationRequest
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest
   */
  export interface CurrentLocationRequest {
    /**
     * 表示优先级信息。取值范围见[LocationRequestPriority]{@link geolocation.LocationRequestPriority}的定义。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest#priority
     */
    priority?: LocationRequestPriority;

    /**
     * 表示场景信息。取值范围见[LocationRequestScenario]{@link geolocation.LocationRequestScenario}的定义。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest#scenario
     */
    scenario?: LocationRequestScenario;

    /**
     * 表示精度信息，单位是米。
     * 仅在精确位置功能场景（同时授予了ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION 权限）下有效，
     * 模糊位置功能生效场景（仅授予了ohos.permission.APPROXIMATELY_LOCATION 权限）下该字段无意义。默认值为0，取值范围为大于等于0。
     * 当scenario为NAVIGATION/TRAJECTORY_TRACKING/CAR_HAILING或者priority为ACCURACY时建议设置maxAccuracy为大于10的值。
     * 当scenario为DAILY_LIFE_SERVICE/NO_POWER或者priority为LOW_POWER/FIRST_FIX时建议设置maxAccuracy为大于100的值。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest#maxAccuracy
     */
    maxAccuracy?: number;

    /**
     * 表示超时时间，单位是毫秒，最小为1000毫秒。取值范围为大于等于1000。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest#timeoutMs
     */
    timeoutMs?: number;
  }

  /**
   * 位置信息。
   *
   * @interface Location
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.Location
   */
  export interface Location {
    /**
     * 表示纬度信息，正值表示北纬，负值表示南纬。取值范围为-90到90。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#latitude
     */
    latitude: number;

    /**
     * 	表示经度信息，正值表示东经，负值表是西经。取值范围为-180到180。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#longitude
     */
    longitude: number;

    /**
     * 表示高度信息，单位米。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#altitude
     */
    altitude: number;

    /**
     * 表示精度信息，单位米。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#accuracy
     */
    accuracy: number;

    /**
     * 表示速度信息，单位米每秒。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#speed
     */
    speed: number;

    /**
     * 表示位置时间戳，UTC格式。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#timeStamp
     */
    timeStamp: number;

    /**
     * 	表示航向信息。单位是“度”，取值范围为0到360。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#direction
     */
    direction: number;

    /**
     * 表示位置时间戳，开机时间格式。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#timeSinceBoot
     */
    timeSinceBoot: number;

    /**
     * 附加信息。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#additions
     */
    additions?: Array<string>;

    /**
     * 附加信息数量。取值范围为大于等于0。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#additionSize
     */
    additionSize?: number;
  }

  /**
   * 位置请求中位置信息优先级类型。
   *
   * @permission ohos.permission.LOCATION
   * @enum { number }
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestPriority
   */
  export enum LocationRequestPriority {
    /**
     * 	表示未设置优先级，表示LocationRequestPriority无效。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestPriority#UNSET
     */
    UNSET = 0x200,

    /**
     * 表示精度优先。
     * 定位精度优先策略主要以GNSS定位技术为主，在开阔场景下可以提供米级的定位精度，具体性能指标依赖用户设备的定位硬件能力，但在室内等强遮蔽定位场景下，无法提供准确的位置服务。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestPriority#ACCURACY
     */
    ACCURACY,

    /**
     * 表示低功耗优先。
     * 低功耗定位优先策略主要使用基站定位和WLAN、蓝牙定位技术，也可以同时提供室内和户外场景下的位置服务，
     * 因为其依赖周边基站、可见WLAN、蓝牙设备的分布情况，定位结果的精度波动范围较大，
     * 如果对定位结果精度要求不高，或者使用场景多在有基站、可见WLAN、蓝牙设备高密度分布的情况下，推荐使用，可以有效节省设备功耗。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestPriority#LOW_POWER
     */
    LOW_POWER,

    /**
     * 表示快速获取位置优先，如果应用希望快速拿到一个位置，可以将优先级设置为该字段。
     * 快速定位优先策略会同时使用GNSS定位、基站定位和WLAN、蓝牙定位技术，
     * 以便室内和户外场景下，通过此策略都可以获得位置结果，当各种定位技术都有提供位置结果时，系统会选择其中精度较好的结果返回给应用。
     * 因为对各种定位技术同时使用，对设备的硬件资源消耗较大，功耗也较大。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestPriority#FIRST_FIX
     */
    FIRST_FIX
  }

  /**
   * 位置请求中定位场景类型。
   *
   * @permission ohos.permission.LOCATION
   * @enum { number }
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestScenario
   */
  export enum LocationRequestScenario {
    /**
     * 表示未设置场景信息。
     * 表示LocationRequestScenario字段无效。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestScenario#UNSET
     */
    UNSET = 0x300,

    /**
     * 表示导航场景。
     * 适用于在户外定位设备实时位置的场景，如车载、步行导航。
     * 在此场景下，为保证系统提供位置结果精度最优，主要使用GNSS定位技术提供定位服务。
     * 此场景默认以最小1秒间隔上报定位结果。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestScenario#NAVIGATION
     */
    NAVIGATION,

    /**
     * 表示运动轨迹记录场景。
     * 适用于记录用户位置轨迹的场景，如运动类应用记录轨迹功能。主要使用GNSS定位技术提供定位服务。
     * 此场景默认以最小1秒间隔上报定位结果。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestScenario#TRAJECTORY_TRACKING
     */
    TRAJECTORY_TRACKING,

    /**
     * 表示打车场景。
     * 适用于用户出行打车时定位当前位置的场景，如网约车类应用。
     * 此场景默认以最小1秒间隔上报定位结果。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestScenario#CAR_HAILING
     */
    CAR_HAILING,

    /**
     * 表示日常服务使用场景。
     * 适用于不需要定位用户精确位置的使用场景，如新闻资讯、网购、点餐类应用，做推荐、推送时定位用户大致位置即可。
     * 此场景默认以最小1秒间隔上报定位结果。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestScenario#DAILY_LIFE_SERVICE
     */
    DAILY_LIFE_SERVICE,

    /**
     * 表示无功耗功场景，这种场景下不会主动触发定位，会在其他应用定位时，才给当前应用返回位置。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequestScenario#NO_POWER
     */
    NO_POWER
  }

  /**
   * 位置服务中的错误码信息。
   *
   * @permission ohos.permission.LOCATION
   * @enum { number }
   * @syscap SystemCapability.Location.Location.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  export enum GeoLocationErrorCode {
    /**
     * 表示输入参数错误。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    INPUT_PARAMS_ERROR,

    /**
     * 表示逆地理编码接口调用失败。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    REVERSE_GEOCODE_ERROR,

    /**
     * 表示地理编码接口调用失败。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    GEOCODE_ERROR,

    /**
     * 表示定位失败。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
       * @deprecated since 9
     */
    LOCATOR_ERROR,

    /**
     * 表示定位开关。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    LOCATION_SWITCH_ERROR,

    /**
     * 表示获取上次位置失败。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    LAST_KNOWN_LOCATION_ERROR,

    /**
     * 表示单次定位，没有在指定时间内返回位置。
     *
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    LOCATION_REQUEST_TIMEOUT_ERROR
  }

  /**
   * 定位服务隐私协议类型。
   *
   * @permission ohos.permission.LOCATION
   * @enum { number }
   * @syscap SystemCapability.Location.Location.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.LocationPrivacyType
   */
  export enum LocationPrivacyType {
    /**
     * 其他场景。预留字段。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationPrivacyType#OTHERS
     */
    OTHERS = 0,

    /**
     * 开机向导场景下的隐私协议。在开机时弹出协议，提醒用户阅读并选择是否授权。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationPrivacyType#STARTUP
     */
    STARTUP,

    /**
     * 开启网络定位时弹出的隐私协议。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationPrivacyType#CORE_LOCATION
     */
    CORE_LOCATION
  }

  /**
   * 扩展命令参数。
   *
   * @interface LocationCommand
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.geoLocationManager/geoLocationManager.LocationCommand
   */
  export interface LocationCommand {
    /**
     * 表示定位场景。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationCommand#scenario
     */
    scenario: LocationRequestScenario;

    /**
     * 扩展命令字符串。
     * 
     * @syscap SystemCapability.Location.Location.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.geoLocationManager/geoLocationManager.LocationCommand#command
     */
    command: string;
  }
}

export default geolocation;
