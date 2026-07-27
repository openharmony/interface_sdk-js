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
 * 本模块提供当前设备的信息，通过读取系统配置获取设备品牌、型号、生产商、屏幕参数等基础信息，供开发者进行设备适配和功能判断。
 * 
 * > **说明：**
 * >
 * > - 模块维护策略
 * > >
 * > >    \- 对于Lite Wearable设备类型，该模块长期维护，正常使用。
 * > >
 * > >     \- 对于支持该模块的其他设备类型，该模块从API Version 6开始不再维护，推荐使用新接口[@ohos.deviceInfo]{@link @ohos.deviceInfo:deviceInfo}进行设备信息查
 * > 询。
 * > - 本模块首批接口从API version 3开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * @file
 * @kit BasicServicesKit
 */
/**
 * # device.getInfo<sup>(deprecated)</sup>
 * 
 * getInfo(options?: GetDeviceOptions): void
 * 
 * 获取当前设备的信息。该接口异步读取系统设备信息，通过回调函数返回设备品牌、型号、屏幕参数等数据。
 * 
 * > **说明：**<br>
 * > > 在首页的onShow生命周期之前不建议调用device.getInfo接口。
 * 
 * **系统能力：** SystemCapability.Startup.SystemInfo.Lite
 * 
 * **返回值：**
 * 
 * | 类型 | 说明 |
 * | -------- | -------- |
 * | void | 无返回值，设备信息通过回调函数返回。 |
 * 
 * **参数：**
 * 
 * | 参数名 | 类型 | 必填 | 说明 |
 * | -------- | -------- | -------- | -------- |
 * | options | [GetDeviceOptions]{@link GetDeviceOptions} | 否 | 定义设备信息获取的参数选项。省略时使用默认配置获取设备基本信息。 |
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
   * 产品代号。
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
   * 可使用的窗口宽度，单位px。不同设备的可使用窗口尺寸存在差异。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  windowWidth: number;

  /**
   * 可使用的窗口宽度，单位px。不同设备的可使用窗口尺寸存在差异。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  windowHeight: number;

  /**
   * 屏幕像素密度。表示屏幕每英寸的像素点数量，单位为dpi(dots per inch)。不同设备的屏幕像素密度存在差异。
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
   * 设备类型。常见取值：phone（手机）、tablet（平板）、tv（电视）、wearable（可穿戴设备）等。
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
 * @throws { BusinessError } 200 - 返回结果中存在无法获取的信息。可能原因包括：设备不支持部分信息字段、系统权限受限或设备配置缺失。解决措施：建议检查设备兼容性、确认应用权限配置，并设置此回调以处理错误情况。
 * @syscap SystemCapability.Startup.SystemInfo.Lite
 * @since 3 dynamiconly
 * @deprecated since 6
 * @reserved ["liteWearable"]
 */
export interface GetDeviceOptions {
  /**
   * 接口调用成功的回调函数，在接口调用成功时执行。data 为成功返回的设备信息。不传入时无法获取设备信息，建议设置此回调。
   *
   * @syscap SystemCapability.Startup.SystemInfo.Lite
   * @since 3 dynamiconly
   * @deprecated since 6
   * @reserved ["liteWearable"]
   */
  success?: (data: DeviceResponse) => void;

  /**
   * 接口调用失败的回调函数，在接口调用失败时执行。data为失败时返回的错误信息对象或错误描述字符串，code为失败返回的错误码。
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
   * 接口调用结束的回调函数，在接口调用完成后（无论成功或失败）执行，适用于需执行清理或收尾工作的场景。不传入时不执行结束回调。
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