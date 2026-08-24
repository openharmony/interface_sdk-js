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

/**
 * 位置信息，包含经度、纬度、定位精度等信息。
 * 
 * @syscap SystemCapability.Location.Location.Lite
 * @famodelonly
 * @since 3 dynamiconly
 * @deprecated since 9
 * @reserved ["liteWearable"]
 * @useinstead ohos.geoLocationManager/geoLocationManager.Location
 */
export interface GeolocationResponse {
    /**
     * 设备位置信息：经度。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#longitude
     */
    longitude: number;
  
    /**
     * 设备位置信息：纬度。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#latitude
     */
    latitude: number;
  
    /**
     * 设备位置信息：海拔。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#altitude
     */
    altitude: number;
  
    /**
     * 设备位置信息：精确度。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#accuracy
     */
    accuracy: number;
  
    /**
     * 设备位置信息：时间。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.Location#timeStamp
     */
    time: number;
  }
  
  /**
   * 单次定位请求的配置参数。
   * 
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 9
   * @reserved ["liteWearable"]
   * @useinstead ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest
   */
  export interface GetLocationOption {
    /**
     * 超时时间，单位为ms，默认值为30000。
     * 设置超时，是为了防止出现权限被系统拒绝、定位信号弱或者定位设置不当，导致请求阻塞的情况。超时后会使用fail回调函数。
     * 取值范围为32位正整数。如果设置值小于等于0，系统按默认值处理。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.CurrentLocationRequest#timeoutMs
     */
    timeout?: number;
  
    /**
     * 坐标系的类型，可通过getSupportedCoordTypes获取可选值，缺省值为wgs84。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    coordType?: string;
  
    /**
     * 接口调用成功的回调函数。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation#callback
     */
    success?: (data: GeolocationResponse) => void;
  
    /**
     * 接口调用失败的回调函数。data为错误信息，code为错误码。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation#callback
     */
    fail?: (data: string, code: number) => void;
  
    /**
     * 接口调用结束的回调函数。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation#callback
     */
    complete?: () => void;
  }
  
  /**
   * 当前设备支持的定位类型列表
   * 
   * @syscap SystemCapability.Location.Location.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 9
   * @reserved ["liteWearable"]
   */
  export interface GetLocationTypeResponse {
    /**
     * 可选的定位类型['gps', 'network']。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    types: Array<string>;
  }
  
  /**
   * 查询定位类型接口的入参，用于存放回调函数，在查询成功或者失败时接收查询结果。
   * 
   * @syscap SystemCapability.Location.Location.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 9
   * @reserved ["liteWearable"]
   */
  export interface GetLocationTypeOption {
    /**
     * 接口调用成功的回调函数。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    success?: (data: GetLocationTypeResponse) => void;
  
    /**
     * 接口调用失败的回调函数。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    fail?: (data: string, code: number) => void;
  
    /**
     * 接口调用结束的回调函数。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    complete?: () => void;
  }
  
  /**
   * 持续定位请求的配置参数。
   * 
   * @permission ohos.permission.LOCATION
   * @syscap SystemCapability.Location.Location.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 9
   * @reserved ["liteWearable"]
   * @useinstead ohos.geoLocationManager/geoLocationManager.LocationRequest
   */
  export interface SubscribeLocationOption {
    /**
     * 坐标系的类型，可通过getSupportedCoordTypes获取可选值，默认值为wgs84。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    coordType?: string;
  
    /**
     * 位置信息发生变化的回调函数。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    success: (data: GeolocationResponse) => void;
  
    /**
     * 接口调用失败的回调函数。
     * 
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    fail?: (data: string, code: number) => void;
  }
  
  /**
   * @syscap SystemCapability.Location.Location.Lite
   * @famodelonly
   * @since 3 dynamiconly
   * @deprecated since 9
   * @reserved ["liteWearable"]
   * @useinstead ohos.geoLocationManager/geoLocationManager
   */
  export default class Geolocation {
    /**
     * 获取设备的地理位置。
     * 
     * @permission ohos.permission.LOCATION
     * @param options 单次定位请求的配置参数
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.getCurrentLocation
     */
    static getLocation(options?: GetLocationOption): void;
  
    /**
     * 获取当前设备支持的定位类型。
     * @param options Options.
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    static getLocationType(options?: GetLocationTypeOption): void;
  
    /**
     * 订阅设备的地理位置信息。多次调用的话，只有最后一次的调用生效。
     * 
     * @permission ohos.permission.LOCATION
     * @param options Options.
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.on#event:locationChange
     */
    static subscribe(options: SubscribeLocationOption): void;
  
    /**
     * 取消订阅设备的地理位置信息。
     * 
     * @permission ohos.permission.LOCATION
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     * @useinstead ohos.geoLocationManager/geoLocationManager.off#event:locationChange
     */
    static unsubscribe(): void;
  
    /**
     * 获取设备支持的坐标系类型。
     * 
     * @returns A string array of the supported coordinate system types, for example, ['wgs84'].
     * @syscap SystemCapability.Location.Location.Lite
     * @famodelonly
     * @since 3 dynamiconly
     * @deprecated since 9
     * @reserved ["liteWearable"]
     */
    static getSupportedCoordTypes(): Array<string>;
  }
  