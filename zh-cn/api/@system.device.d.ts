/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * 本模块提供当前设备的信息。
 * 
 * > **说明：**
 * >
 * > - 模块维护策略
 * > >
 * > >    \- 对于Lite Wearable设备类型，该模块长期维护，正常使用。
 * > >
 * > >     \- 对于支持该模块的其他设备类型，该模块从API Version 6开始不再维护，推荐使用新接口[@ohos.deviceInfo]{@link @ohos.deviceInfo:deviceInfo}进行设备信息查
 * > 询。
 *
 * @file
 * @kit BasicServicesKit
 */
/**
 * # device.getInfo<sup>(deprecated)</sup>
 * 
 * getInfo(options?: GetDeviceOptions): void
 * 
 * 获取当前设备的信息。
 * 
 * > **说明：**<br>
 * > > 在首页的onShow生命周期之前不建议调用device.getInfo接口。
 * 
 * **系统能力：** SystemCapability.Startup.SystemInfo.Lite
 * 
 * **参数：**
 * 
 * | 参数名 | 类型 | 必填 | 说明 |
 * | -------- | -------- | -------- | -------- |
 * | options | [GetDeviceOptions]{@link GetDeviceOptions} | 否 | 定义设备信息获取的参数选项。 |
 */

/**
 * 定义设备信息获取的参数选项。
 *
 * @syscap SystemCapability.Startup.SystemInfo.Lite
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export interface DeviceResponse {
  /**
   * 品牌。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  brand: string;

  /**
   * 生产商。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  manufacturer: string;

  /**
   * 型号。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  model: string;

  /**
   * 代号。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  product: string;

  /**
   * 系统语言。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  language: string;

  /**
   * 系统地区。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  region: string;

  /**
   * 可使用的窗口宽度。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  windowWidth: number;

  /**
   * 可使用的窗口高度。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  windowHeight: number;

  /**
   * 屏幕密度。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  screenDensity: number;

  /**
   * 屏幕形状。可取值：
   * 
   * - rect：方形屏；
   * 
   * - circle：圆形屏。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  screenShape: 'rect' | 'circle';

  /**
   * 系统API版本号。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  apiVersion: number;

  /**
   * 设备类型。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 4 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  deviceType: string;
}

/**
 * 定义设备信息获取的参数选项。
 *
 * @syscap SystemCapability.Startup.SystemInfo.Lite
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export interface GetDeviceOptions {
  /**
   * 接口调用成功的回调函数。 data为成功返回的设备信息，具体参考[DeviceResponse]{@link DeviceResponse}。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  success?: (data: DeviceResponse) => void;

  /**
   * 接口调用失败的回调函数。 code为失败返回的错误码。
   * 
   * code:200，表示返回结果中存在无法获得的信息。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  fail?: (data: any, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * getInfo interface
 *
 * @syscap SystemCapability.Startup.SystemInfo.Lite
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export default class Device {
  /**
   * Obtains the device information.
   *
   * @param { GetDeviceOptions } options - Options
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  static getInfo(options?: GetDeviceOptions): void;
}