/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @kit LocalizationKit
 */

import { RawFileDescriptor as _RawFileDescriptor } from './global/rawFileDescriptor';
import { Resource as _Resource } from './global/resource';
import { AsyncCallback as _AsyncCallback } from './@ohos.base';
import { DrawableDescriptor } from './@ohos.arkui.drawableDescriptor';

/**
 * 本模块提供资源获取能力。根据当前的[Configuration]{@link resourceManager.Configuration}配置，获取最匹配的应用资源或系统资源。具体匹配规则参考
 * [资源匹配](docroot://quick-start/resource-categories-and-access.md#资源匹配)。
 * Configuration配置包括语言、区域、横竖屏、颜色模式、Mcc（移动国家码）和Mnc（移动网络码）、Device capability（设备类型）、Density（分辨率）。
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace resourceManager {
  /**
   * 用于表示设备屏幕方向。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * 竖屏。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DIRECTION_VERTICAL = 0,

    /**
     * 横屏。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DIRECTION_HORIZONTAL = 1
  }

  /**
   * 用于表示当前设备类型。
   * 
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export enum DeviceType {
    /**
     * 手机。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_PHONE = 0x00,

    /**
     * 平板。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_TABLET = 0x01,

    /**
     * 车机。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_CAR = 0x02,

    /**
     * Indicates a PC.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_PC = 0x03,

    /**
     * 智慧屏。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_TV = 0x04,

    /**
     * 智能手表。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_WEARABLE = 0x06,

    /**
     * PC/2in1。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_2IN1 = 0x07
  }

  /**
   * 用于表示当前设备屏幕密度。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export enum ScreenDensity {
    /**
     * 低屏幕密度。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_SDPI = 120,

    /**
     * 中屏幕密度。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_MDPI = 160,

    /**
     * 高屏幕密度。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_LDPI = 240,

    /**
     * 特高屏幕密度。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_XLDPI = 320,

    /**
     * 超高屏幕密度。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_XXLDPI = 480,

    /**
     * 超特高屏幕密度。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_XXXLDPI = 640
  }

  /**
   * 用于表示当前设备颜色模式。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum ColorMode {

    /**
     * 深色模式。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DARK = 0,

    /**
     * 浅色模式。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    LIGHT = 1
  }

  /**
   * 表示当前设备的状态。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export class Configuration {
    /**
     * 屏幕方向。
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    direction: Direction;

    /**
     * 语言文字国家地区。
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    locale: string;

    /**
     * 设备类型。
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deviceType: DeviceType;

    /**
     * 屏幕密度。
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    screenDensity: ScreenDensity;

    /**
     * 颜色模式。 
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    colorMode: ColorMode;

    /**
     * 移动国家码。
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    mcc : int;

    /**
     * 移动网络码。
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    mnc : int;
  }

  /**
   * 表示设备支持的能力。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export class DeviceCapability {
    /**
     * 当前设备屏幕密度。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    screenDensity: ScreenDensity;

    /**
     * 当前设备类型。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    deviceType: DeviceType;
  }

  /**
   * The ResourceManager callback.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.base:AsyncCallback
   */
  export interface AsyncCallback<T> {
    /**
     * 异步回调函数，携带错误参数和异步返回值。
     *
     * @param { Error } err - 接口调用失败的错误信息。
     * @param { T } data - 接口调用时的回调信息。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.base:AsyncCallback
     */
    (err: Error, data: T): void;
  }

  /**
   * 获取当前应用的资源管理对象，使用callback异步回调。
   *
   * @param { AsyncCallback<ResourceManager> } callback - 回调函数，返回资源管理ResourceManager对象。
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6 dynamiconly
   */
  export function getResourceManager(callback: AsyncCallback<ResourceManager>): void;

  /**
   * 获取指定应用的资源管理对象，使用callback异步回调。
   *
   * @param { string } bundleName - 应用包名。
   * @param { AsyncCallback<ResourceManager> } callback - 回调函数，返回应用包名对应的资源管理ResourceManager对象。
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6 dynamiconly
   */
  export function getResourceManager(bundleName: string, callback: AsyncCallback<ResourceManager>): void;

  /**
   * 获取当前应用的资源管理对象，使用Promise异步回调。
   *
   * @returns { Promise<ResourceManager> } Promise对象，返回资源管理ResourceManager对象。
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6 dynamiconly
   */
  export function getResourceManager(): Promise<ResourceManager>;

  /**
   * 获取指定应用的资源管理对象，使用Promise异步回调。
   *
   * @param { string } bundleName - 应用包名。
   * @returns { Promise<ResourceManager> } Promise对象，返回应用包名对应的资源管理ResourceManager对象。
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6 dynamiconly
   */
  export function getResourceManager(bundleName: string): Promise<ResourceManager>;

  /**
   * 获取系统资源管理ResourceManager对象。
   * 
   * > **说明**
   * >
   * > 当前接口获取到的系统资源管理ResourceManager对象中的Configuration为默认值。默认值如下：
   * > {"locale": "", "direction": -1, "deviceType": -1, "screenDensity": 0, "colorMode": 1, "mcc": 0, "mnc": 0}。
   *
   * @returns { ResourceManager } 系统资源管理对象。
   * @throws { BusinessError } 9001009 - Failed to access the system resource.
   *     which is not mapped to application sandbox, This error code will be thrown.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 20
   * @useinstead resourceManager.getSysResourceManager
   */
  export function getSystemResourceManager(): ResourceManager;

  /**
   * 获取系统资源管理对象。
   *
   * @returns { ResourceManager } 系统资源管理对象。
   * @throws { BusinessError } 9001009 - Failed to access the system resource.
   *     which is not mapped to application sandbox, This error code will be thrown.
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export function getSysResourceManager(): ResourceManager;

  /**
   * 提供访问应用资源和系统资源的能力。
   * 
   * > **说明：**
   * >
   * > - ResourceManager涉及到的方法，仅限基于TS扩展的声明式开发范式使用。
   * >
   * > - 资源文件在工程的resources目录中定义，通过resName、resId、Resource对象等可以获取对应的字符串、字符串数组、颜色等资源值，resName为资源名称，resId可通过`$r(资源地址).id`的方式
   * > 获取，例如`$r('app.string.test').id`。
   * >
   * > - 单HAP包获取自身资源、跨HAP/HSP包获取资源，由于入参为Resource的接口相比于入参为resName、resId的接口耗时更长，因此更推荐使用参数为resName或resId的接口。跨HAP/HSP包获取资源，
   * > **需要先使用[createModuleContext]{@link @ohos.app.ability.application:application.createModuleContext(context: Context, moduleName: string)}创建对应module的context**
   * > ，再调用参数为resName或resId的接口。更多请参考[资源访问](docroot://quick-start/resource-categories-and-access.md#资源访问)。
   * >
   * > - 在API version 22及之前版本，中间码HAR、字节码HAR通过资源ID相关接口访问资源时，因ID无效会抛出异常；从API version 23开始，中间码HAR、字节码HAR通过资源ID相关接口可以正常访问资源，
   * > 更多请参考[资源访问](docroot://quick-start/resource-categories-and-access.md#资源访问)。
   * >
   * > - 示例代码中test文件的具体内容请参考[附录](docroot://reference/apis-localization-kit/js-apis-resource-manager.md#附录)。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export interface ResourceManager {
    /**
     * 获取指定资源ID对应的字符串，使用callback异步回调。
     *
     * @param { number } resId - 资源ID值。
     * @param { AsyncCallback<string> } callback - 回调函数，返回资源ID值对应的字符串。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getStringValue(resId: long, callback: _AsyncCallback<string>)
     */
    getString(resId: number, callback: AsyncCallback<string>): void;

    /**
     * 获取指定资源ID对应的字符串，使用Promise异步回调。
     *
     * @param { number } resId - 资源ID值。
     * @returns { Promise<string> } Promise对象，返回资源ID值对应的字符串。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getStringValue(resId: long)
     */
    getString(resId: number): Promise<string>;

    /**
     * 获取指定resource对象对应的字符串，使用callback异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回resource对象对应的字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getStringValue(resId: long, callback: _AsyncCallback<string>)
     */
    getStringValue(resource: Resource, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定resource对象对应的字符串，使用Promise异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { Promise<string> } Promise对象，返回resource对象对应的字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getStringValue(resId: long)
     */
    getStringValue(resource: Resource): Promise<string>;

    /**
     * 获取指定资源ID对应的字符串数组，使用callback异步回调。
     *
     * @param { number } resId - 资源ID值。
     * @param { AsyncCallback<Array<string>> } callback - 回调函数，返回资源ID值对应的字符串数组。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getStringArrayValue(resId: long, callback: _AsyncCallback<Array<string>>)
     */
    getStringArray(resId: number, callback: AsyncCallback<Array<string>>): void;

    /**
     * 获取指定资源ID对应的字符串数组，使用Promise异步回调。
     *
     * @param { number } resId - 资源ID值。
     * @returns { Promise<Array<string>> } Promise对象，返回资源ID值对应的字符串数组。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getStringArrayValue(resId: long)
     */
    getStringArray(resId: number): Promise<Array<string>>;

    /**
     * 获取指定resource对象对应的字符串数组，使用callback异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @param { _AsyncCallback<Array<string>> } callback - 回调函数，返回resource对象对应的字符串数组。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getStringArrayValue(resId: long, callback: _AsyncCallback<Array<string>>)
     */
    getStringArrayValue(resource: Resource, callback: _AsyncCallback<Array<string>>): void;

    /**
     * 获取指定resource对象对应的字符串数组，使用Promise异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { Promise<Array<string>> } Promise对象，返回resource对象对应的字符串数组。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getStringArrayValue(resId: long)
     */
    getStringArrayValue(resource: Resource): Promise<Array<string>>;

    /**
     * 获取指定资源ID对应的媒体文件内容，使用callback异步回调。
     *
     * @param { number } resId - 资源ID值。
     * @param { AsyncCallback<Uint8Array> } callback - 回调函数，返回资源ID值对应的媒体文件内容。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)
     */
    getMedia(resId: number, callback: AsyncCallback<Uint8Array>): void;

    /**
     * 获取指定资源ID对应的媒体文件内容，使用Promise异步回调。
     *
     * @param { number } resId - 资源ID值。
     * @returns { Promise<Uint8Array> } Promise对象，返回资源ID值对应的媒体文件内容。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getMediaContent(resId: long)
     */
    getMedia(resId: number): Promise<Uint8Array>;

    /**
     * 获取指定resource对象对应的媒体文件内容，使用callback异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @param { _AsyncCallback<Uint8Array> } callback - 回调函数，返回resource对象对应的媒体文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)
     */
    getMediaContent(resource: Resource, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * 获取指定resource对象对应的指定屏幕密度媒体文件内容，使用callback异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @param { _AsyncCallback<Uint8Array> } callback - 回调函数，返回resource对象对应的媒体文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2
     *     .Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContent(resId: long, density: int, callback: _AsyncCallback<Uint8Array>)
     */
    getMediaContent(resource: Resource, density: number, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * 获取指定resource对象对应的媒体文件内容，使用Promise异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { Promise<Uint8Array> } Promise对象，返回resource对象对应的媒体文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContent(resId: long)
     */
    getMediaContent(resource: Resource): Promise<Uint8Array>;

    /**
     * 获取指定resource对象对应的指定屏幕密度媒体文件内容，使用Promise异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @returns { Promise<Uint8Array> } Promise对象，返回resource对象对应的媒体文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2
     *     .Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContent(resId: long, density: int)
     */
    getMediaContent(resource: Resource, density: number): Promise<Uint8Array>;

    /**
     * 获取指定资源ID对应的图片资源Base64编码，使用callback异步回调。
     *
     * @param { number } resId - 资源ID值。
     * @param { AsyncCallback<string> } callback - 回调函数，返回资源ID值对应的图片资源Base64编码。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getMediaContentBase64(resId: long, callback: _AsyncCallback<string>)
     */
    getMediaBase64(resId: number, callback: AsyncCallback<string>): void;

    /**
     * 获取指定资源ID对应的图片资源Base64编码，使用Promise异步回调。
     *
     * @param { number } resId - 资源ID值。
     * @returns { Promise<string> } Promise对象，返回资源ID值对应的图片资源Base64编码。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getMediaContentBase64(resId: long)
     */
    getMediaBase64(resId: number): Promise<string>;

    /**
     * 获取指定resource对象对应的图片资源Base64编码，使用callback异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回resource对象对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContentBase64(resId: long, callback: _AsyncCallback<string>)
     */
    getMediaContentBase64(resource: Resource, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定resource对象对应的指定屏幕密度图片资源Base64编码，使用callback异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回resource对象对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2
     *     .Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContentBase64(resId: long, density: int, callback: _AsyncCallback<string>)
     */
    getMediaContentBase64(resource: Resource, density: number, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定resource对象对应的图片资源Base64编码，使用Promise异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { Promise<string> } Promise对象，返回resource对象对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContentBase64(resId: long)
     */
    getMediaContentBase64(resource: Resource): Promise<string>;

    /**
     * 获取指定resource对象对应的指定屏幕密度图片资源Base64编码，使用Promise异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @returns { Promise<string> } Promise对象，返回resource对象对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2
     *     .Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContentBase64(resId: long, density: int)
     */
    getMediaContentBase64(resource: Resource, density: number): Promise<string>;

    /**
     * 获取设备的DeviceCapability，使用callback异步回调。
     *
     * @param { _AsyncCallback<DeviceCapability> } callback - 回调函数，返回设备的DeviceCapability。
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getDeviceCapability(callback: _AsyncCallback<DeviceCapability>): void;

    /**
     * 获取设备的DeviceCapability，使用Promise异步回调。
     *
     * @returns { Promise<DeviceCapability> } Promise对象，返回设备的DeviceCapability。
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getDeviceCapability(): Promise<DeviceCapability>;

    /**
     * 获取设备的Configuration，使用callback异步回调。
     *
     * @param { _AsyncCallback<Configuration> } callback - 回调函数，返回设备的Configuration。
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getConfiguration(callback: _AsyncCallback<Configuration>): void;

    /**
     * 获取设备的Configuration，使用Promise异步回调。
     *
     * @returns { Promise<Configuration> } Promise对象，返回设备的Configuration。
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getConfiguration(): Promise<Configuration>;

    /**
     * 获取指定资源ID，指定资源数量的单复数字符串，使用callback异步回调。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { number } resId - 资源ID值。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @param { AsyncCallback<string> } callback - 回调函数，返回资源ID值对应的指定数量的单复数字符串。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getPluralStringValue(resId: number, num: number, callback: _AsyncCallback<string>)
     */
    getPluralString(resId: number, num: number, callback: AsyncCallback<string>): void;

    /**
     * 获取指定资源ID，指定资源数量的单复数字符串，使用Promise异步回调。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { number } resId - 资源ID值。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @returns { Promise<string> } Promise对象，返回资源ID值对应的指定数量的单复数字符串。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getPluralStringValue(resId: number, num: number)
     */
    getPluralString(resId: number, num: number): Promise<string>;

    /**
     * 获取指定资源信息，指定资源数量的单复数字符串，使用callback异步回调。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回resource对象对应的指定数量的单复数字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead resourceManager.ResourceManager.getIntPluralStringValueSync(resId: number, num: number,...args: Array<string | number>)
     */
    getPluralStringValue(resource: Resource, num: number, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定资源信息，指定资源数量的单复数字符串，使用Promise异步回调。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @returns { Promise<string> } Promise对象，返回resource对象对应的指定数量的单复数字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead resourceManager.ResourceManager.getIntPluralStringValueSync(resId: number, num: number,...args: Array<string | number>)
     */
    getPluralStringValue(resource: Resource, num: number): Promise<string>;

    /**
     * 获取resources/rawfile目录下对应的rawfile文件内容，使用callback异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @param { AsyncCallback<Uint8Array> } callback - 回调函数，返回rawfile文件内容。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getRawFileContent(path: string, callback: _AsyncCallback<Uint8Array>)
     */
    getRawFile(path: string, callback: AsyncCallback<Uint8Array>): void;

    /**
     * 获取resources/rawfile目录下对应的rawfile文件内容，使用Promise异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @returns { Promise<Uint8Array> } Promise对象，返回rawfile文件内容。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getRawFileContent(path: string)
     */
    getRawFile(path: string): Promise<Uint8Array>;

    /**
     * 获取resources/rawfile目录下对应rawfile文件的文件描述符（fd），使用callback异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @param { AsyncCallback<RawFileDescriptor> } callback - 回调函数，返回rawfile文件的文件描述符（fd）。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getRawFd(path: string, callback: _AsyncCallback<RawFileDescriptor>)
     */
    getRawFileDescriptor(path: string, callback: AsyncCallback<RawFileDescriptor>): void;

    /**
     * 获取resources/rawfile目录下对应rawfile文件的文件描述符（fd），使用Promise异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @returns { Promise<RawFileDescriptor> } Promise对象，返回rawfile文件的文件描述符（fd）。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getRawFd(path: string)
     */
    getRawFileDescriptor(path: string): Promise<RawFileDescriptor>;

    /**
     * 关闭resources/rawfile目录下rawfile文件的文件描述符（fd），使用callback异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @param { AsyncCallback<void> } callback - 回调函数。当关闭rawfile文件的文件描述符（fd）成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)
     */
    closeRawFileDescriptor(path: string, callback: AsyncCallback<void>): void;

    /**
     * 关闭resources/rawfile目录下rawfile文件的文件描述符（fd），使用Promise异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.closeRawFd(path: string)
     */
    closeRawFileDescriptor(path: string): Promise<void>;

    /**
     * 获取指定资源名称对应的字符串，使用callback异步回调。
     *
     * @param { string } resName - 资源名称。
     * @param { _AsyncCallback<string> } callback - 返回获取的字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getStringByName(resName: string, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定资源名称对应的字符串，使用Promise异步回调。
     *
     * @param { string } resName - 资源名称。
     * @returns { Promise<string> } Promise对象，返回资源名称对应的字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getStringByName(resName: string): Promise<string>;

    /**
     * 获取指定资源名称对应的字符串数组，使用callback异步回调。
     *
     * @param { string } resName - 资源名称。
     * @param { _AsyncCallback<Array<string>> } callback - 回调函数，返回资源名称对应的字符串数组。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getStringArrayByName(resName: string, callback: _AsyncCallback<Array<string>>): void;

    /**
     * 获取指定资源名称对应的字符串数组，使用Promise异步回调。
     *
     * @param { string } resName - 资源名称。
     * @returns { Promise<Array<string>> } Promise对象，返回资源名称对应的字符串数组。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getStringArrayByName(resName: string): Promise<Array<string>>;

    /**
     * 获取指定资源名称对应的媒体文件内容，使用callback异步回调。
     *
     * @param { string } resName - 资源名称。
     * @param { _AsyncCallback<Uint8Array> } callback - 回调函数，返回资源名称对应的媒体文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMediaByName(resName: string, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * 获取指定资源名称对应的指定屏幕密度媒体文件内容，使用callback异步回调。
     *
     * @param { string } resName - 资源名称。
     * @param { int } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @param { _AsyncCallback<Uint8Array> } callback - 回调函数，返回资源名称对应的媒体文件内容。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaByName(resName: string, density: int, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * 获取指定资源名称对应的媒体文件内容，使用Promise异步回调。
     *
     * @param { string } resName - 资源名称。
     * @returns { Promise<Uint8Array> } Promise对象，返回资源名称对应的媒体文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMediaByName(resName: string): Promise<Uint8Array>;

    /**
     * 获取指定资源名称对应的指定屏幕密度媒体文件内容，使用Promise异步回调。
     *
     * @param { string } resName - 资源名称。
     * @param { int } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @returns { Promise<Uint8Array> } Promise对象，返回资源名称对应的媒体文件内容。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaByName(resName: string, density: int): Promise<Uint8Array>;

    /**
     * 获取指定资源名称对应的图片资源Base64编码，使用callback异步回调。
     *
     * @param { string } resName - 资源名称。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回资源名称的图片资源Base64编码。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMediaBase64ByName(resName: string, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定资源名称对应的指定屏幕密度图片资源Base64编码，使用callback异步回调。
     *
     * @param { string } resName - 资源名称。
     * @param { int } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回资源名称的图片资源Base64编码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaBase64ByName(resName: string, density: int, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定资源名称对应的图片资源Base64编码，使用Promise异步回调。
     *
     * @param { string } resName - 资源名称。
     * @returns { Promise<string> } Promise对象，返回资源名称对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMediaBase64ByName(resName: string): Promise<string>;

    /**
     * 获取指定资源名称对应的指定屏幕密度图片资源Base64编码，使用Promise异步回调。
     *
     * @param { string } resName - 资源名称。
     * @param { int } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @returns { Promise<string> } Promise对象，返回资源名称对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaBase64ByName(resName: string, density: int): Promise<string>;

    /**
     * 获取指定资源名称，指定资源数量的单复数字符串，使用callback异步回调。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { string } resName - 资源名称。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回资源名称对应的指定数量的单复数字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead resourceManager.ResourceManager.getIntPluralStringByNameSync(resName: string, num: number, ...args: Array<string | number>)
     */
    getPluralStringByName(resName: string, num: number, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定资源名称，指定资源数量的单复数字符串，使用Promise异步回调。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { string } resName - 资源名称。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @returns { Promise<string> } 根据传入的数量值，获取资源名称对应的字符串资源。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead resourceManager.ResourceManager.getIntPluralStringByNameSync(resName: string, num: number, ...args: Array<string | number>)
     */
    getPluralStringByName(resName: string, num: number): Promise<string>;

    /**
     * 获取指定资源ID对应的字符串，使用同步方式返回。
     *
     * @param { long } resId - 资源ID值。
     * @returns { string } 资源ID值对应的字符串。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getStringSync(resId: long): string;

    /**
     * 获取指定资源ID对应的字符串，并根据args参数对字符串进行格式化，使用同步方式返回。
     *
     * @param { number } resId - 资源ID值。
     * @param { Array<string | number> } args - 格式化字符串资源参数。<br>支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。<br>说明
     *     ：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。<br>举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。
     * @returns { string } 资源ID值对应的格式化字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001007 - Failed to format the resource obtained based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getStringSync(resId: number, ...args: Array<string | number>): string;

    /**
     * Obtains a string resource based on the specified resource ID.
     *
     * @param { long } resId Resource ID.
     * @param { (string | double)[] } args Parameters used to populate placeholders in the string.
     * @returns { string } String obtained based on the specified resource ID.
     * @throws { BusinessError } 9001001 Invalid resource ID.
     * @throws { BusinessError } 9001002 No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 The resource is referenced cyclically.
     * @throws { BusinessError } 9001007 Failed to format the resource obtained based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getStringSync(resId: long, ...args: (string | double)[]): string;

    /**
     * 获取指定resource对象对应的字符串，使用同步方式返回。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { string } resource对象对应的字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getStringSync(resId: long)
     */
    getStringSync(resource: Resource): string;

    /**
     * 获取指定resource对象对应的字符串，并根据args参数对字符串进行格式化，使用同步方式返回。
     *
     * @param { Resource } resource - 资源信息。
     * @param { Array<string | number> } args - 格式化字符串资源参数。<br>支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。<br>说明
     *     ：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。<br>举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。
     * @returns { string } resource对象对应的格式化字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001007 - Failed to format the resource obtained based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getStringSync(resId: number, ...args: Array<string | number>)
     */
    getStringSync(resource: Resource, ...args: Array<string | number>): string;

    /**
     * 获取指定资源名称对应的字符串，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @returns { string } 资源名称对应的字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getStringByNameSync(resName: string): string;

    /**
     * 获取指定资源名称对应的字符串，并根据args参数对字符串进行格式化，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @param { Array<string | number> } args - 格式化字符串资源参数。<br>支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。<br>说明
     *     ：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。<br>举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。
     * @returns { string } 资源名称对应的格式化字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001008 - Failed to format the resource obtained based on the resource Name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getStringByNameSync(resName: string, ...args: Array<string | number>): string;

    /**
     * Obtains a string resource based on the specified resource name.
     *
     * @param { string } resName Resource name.
     * @param { (string | double)[] } args Parameters used to populate placeholders in the string.
     * @returns { string } String obtained based on the specified resource name.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001008 - Failed to format the resource obtained based on the resource Name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getStringByNameSync(resName: string, ...args: (string | double)[]): string;

    /**
     * 获取指定资源ID值对应的布尔值，使用同步方式返回。
     *
     * @param { long } resId - 资源ID值。
     * @returns { boolean } 资源ID值对应的布尔值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getBoolean(resId: long): boolean;

    /**
     * 获取指定resource对象对应的布尔值，使用同步方式返回。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { boolean } resource对象对应的布尔值。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getBoolean(resId: long)
     */
    getBoolean(resource: Resource): boolean;

    /**
     * 获取指定资源名称对应的布尔值，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @returns { boolean } 资源名称对应的布尔值。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getBooleanByName(resName: string): boolean;

    /**
     * 获取指定资源ID对应的integer数值或者float数值，使用同步方式返回。
     *
     * @param { number } resId - 资源ID值。
     * @returns { number } 资源ID值对应的数值。
     *     
     *     integer对应的是原数值，float不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值，具体参考示例代码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getNumber(resId: number): number;

    /**
     * Obtains the number result with a specified resource ID.
     *
     * @param { long } resId - Indicates the resource ID.
     * @returns { int } The number resource corresponding to the resource ID.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getInt(resId: long): int;

    /**
     * Obtains the number result with a specified resource ID.
     *
     * @param { long } resId - Indicates the resource ID.
     * @returns { double } The number resource corresponding to the resource ID.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getDouble(resId: long): double;

    /**
     * 获取指定resource对象对应的integer数值或者float数值，使用同步方式返回。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { number } resource对象对应的数值。
     *     integer对应的是原数值，float不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getNumber(resId: number)
     */
    getNumber(resource: Resource): number;

    /**
     * 获取指定资源名称对应的integer数值或者float数值，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @returns { number } 资源名称对应的数值。
     *     integer对应的是原数值，float不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getNumberByName(resName: string): number;

    /**
     * Obtains the number result with a specified resource name.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { int } The number resource corresponding to the resource name.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getIntByName(resName: string): int;
    
    /**
     * Obtains the number result with a specified resource name.
     *
     * @param { string } resName - Indicates the resource name.
     * @returns { double } The number resource corresponding to the resource name.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getDoubleByName(resName: string): double;

    /**
     * 释放创建的resourceManager, 此接口暂不支持。
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamiconly
     * @deprecated since 12
     */
    release();

    /**
     * 获取指定资源ID对应的字符串，使用callback异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回获取的字符串。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getStringValue(resId: long, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定资源ID对应的字符串，使用Promise异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @returns { Promise<string> } Promise对象，返回资源ID值对应的字符串。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getStringValue(resId: long): Promise<string>;

    /**
     * 获取指定资源ID对应的字符串数组，使用callback异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @param { _AsyncCallback<Array<string>> } callback - 回调函数，返回资源ID值对应的字符串数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getStringArrayValue(resId: long, callback: _AsyncCallback<Array<string>>): void;

    /**
     * 获取指定资源ID对应的字符串数组，使用Promise异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @returns { Promise<Array<string>> } Promise对象，返回资源ID值对应的字符串数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getStringArrayValue(resId: long): Promise<Array<string>>;

    /**
     * 获取指定资源ID，指定资源数量的单复数字符串，使用callback异步回调。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { number } resId - 资源ID值。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回资源ID值对应的指定数量的单复数字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead resourceManager.ResourceManager.getIntPluralStringValueSync(resId: number, num: number,...args: Array<string | number>)
     */
    getPluralStringValue(resId: number, num: number, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定资源ID，指定资源数量的单复数字符串，使用Promise异步回调。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { number } resId - 资源ID值。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @returns { Promise<string> } Promise对象，返回资源ID值对应的指定数量的单复数字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead resourceManager.ResourceManager.getIntPluralStringValueSync(resId: number, num: number,...args: Array<string | number>)
     */
    getPluralStringValue(resId: number, num: number): Promise<string>;

    /**
     * 获取指定资源ID对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > - 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * >
     * > - 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。
     *
     * @param { number } resId - 资源ID值。
     * @param { number } num - 数量值（整数）。根据当前语言的
     *     [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。
     * @param { Array<string | number> } args - 格式化字符串资源参数。<br>支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。<br>说明
     *     ：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。<br>举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。
     * @returns { string } 资源ID值对应的格式化单复数字符串。
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001007 - Failed to format the resource obtained based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getIntPluralStringValueSync(resId: number, num: number,...args: Array<string | number>): string;

    /**
     * Obtains the singular-plural character string represented by the ID string corresponding to
     * the specified number.
     *
     * @param { long } resId - Indicates the resource ID.
     * @param { int } num - an integer used to get the correct string for the current plural rules.
     * @param { (string | double)[] } args - Indicates the formatting string resource parameters.
     * @returns { string } The singular-plural character string represented by the ID string
     *     corresponding to the specified number.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001007 - Failed to format the resource obtained based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getIntPluralStringValueSync(resId: long, num: int,...args: (string | double)[]): string;

    /**
     * 获取指定resource对象对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } num - 数量值（整数）。根据当前语言的
     *     [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。
     * @param { Array<string | number> } args - 格式化字符串资源参数。<br>支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。<br>说明
     *     ：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。<br>举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。
     * @returns { string } resource对象对应的格式化单复数字符串。
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001007 - Failed to format the resource obtained based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getIntPluralStringValueSync(resId: number, num: number,...args: Array<string | number>)
     */
    getIntPluralStringValueSync(resource: Resource, num: number, ...args: Array<string | number>): string;

    /**
     * 获取指定资源名称对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > - 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * >
     * > - 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。
     *
     * @param { string } resName - 资源名称。
     * @param { number } num - 数量值（整数）。根据当前语言的
     *     [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。
     * @param { Array<string | number> } args - 格式化字符串资源参数。<br>支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。<br>说明
     *     ：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。<br>举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。
     * @returns { string } 资源名称对应的格式化单复数字符串。
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001008 - Failed to format the resource obtained based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getIntPluralStringByNameSync(resName: string, num: number, ...args: Array<string | number>): string;

    /**
     * Obtains a singular/plural string based on the specified resource name and number.
     *
     * @param { string } resName Resource name.
     * @param { int } num Integer number used to obtain the corresponding string representation for the
     *     current language's plural rules.
     * @param { (string | double)[] } args String resource formatting parameters.
     * @returns { string } Singular/plural string obtained based on the specified resource name and number.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001008 - Failed to format the resource obtained based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getIntPluralStringByNameSync(resName: string, num: int, ...args: (string | double)[]): string;

    /**
     * 获取指定资源ID对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > - 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * >
     * > - 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。
     *
     * @param { number } resId - 资源ID值。
     * @param { number } num - 数量值（浮点数）。根据当前语言的
     *     [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。
     * @param { Array<string | number> } args - 格式化字符串资源参数。<br>支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。<br>说明
     *     ：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。<br>举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。
     * @returns { string } 资源ID值对应的格式化单复数字符串。
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001007 - Failed to format the resource obtained based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getDoublePluralStringValueSync(resId: number, num: number, ...args: Array<string | number>): string;

    /**
     * Obtains a singular/plural string based on the specified resource ID and number.
     *
     * @param { long } resId Resource ID.
     * @param { double } num Double floating-point number used to obtain the corresponding string
     *     representation for the current language's plural rules.
     * @param { (string | double)[] } args String resource formatting parameters.
     * @returns { string } Singular/plural string obtained based on the specified resource ID and number.
     * @throws { BusinessError } 9001001 Invalid resource ID.
     * @throws { BusinessError } 9001002 No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 The resource is referenced cyclically.
     * @throws { BusinessError } 9001007 Failed to format the resource obtained based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getDoublePluralStringValueSync(resId: long, num: double, ...args: (string | double)[]): string;

    /**
     * 获取指定resource对象对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } num - 数量值（浮点数）。根据当前语言的
     *     [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。
     * @param { Array<string | number> } args - 格式化字符串资源参数。<br>支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。<br>说明
     *     ：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。<br>举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。
     * @returns { string } resource对象对应的格式化单复数字符串。
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001007 - Failed to format the resource obtained based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getDoublePluralStringValueSync(resId: number, num: number, ...args: Array<string | number>)
     */
    getDoublePluralStringValueSync(resource: Resource, num: number, ...args: Array<string | number>): string;

    /**
     * 获取指定资源名称对应的[单复数](docroot://internationalization/l10n-singular-plural.md)字符串，并根据args参数对字符串进行格式化，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > - 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * >
     * > - 在英语、德语等语言中，单复数类型包括基数词（如1、2、3）和序数词（如1st、2nd、3rd），本接口仅支持在基数词类型下使用。
     *
     * @param { string } resName - 资源名称。
     * @param { number } num - 数量值（浮点数）。根据当前语言的
     *     [单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)获取该数量值对应的字符串。
     * @param { Array<string | number> } args - 格式化字符串资源参数。<br>支持参数类型：`%d`、`%f`、`%s`、`%%`、`%数字$d`、`%数字$f`、`%数字$s`。<br>说明
     *     ：`%%`转义为`%`; `%数字$d`中的数字表示使用args中的第几个参数。<br>举例：`%%d`格式化后为`%d`字符串; `%1$d`表示使用第一个参数。
     * @returns { string } 资源名称对应的格式化单复数字符串。
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001008 - Failed to format the resource obtained based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getDoublePluralStringByNameSync(resName: string, num: number, ...args: Array<string | number>): string;

    /**
     * Obtains a singular/plural string based on the specified resource name and number.
     *
     * @param { string } resName Resource name.
     * @param { double } num Double floating-point number used to obtain the corresponding string
     *     representation for the current language's plural rules.
     * @param { (string | double)[] } args String resource formatting parameters.
     * @returns { string } Singular/plural string obtained based on the specified resource name and number.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @throws { BusinessError } 9001008 - Failed to format the resource obtained based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getDoublePluralStringByNameSync(resName: string, num: double, ...args: (string | double)[]): string;

    /**
     * 获取指定资源ID对应的媒体文件内容，使用callback异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @param { _AsyncCallback<Uint8Array> } callback - 回调函数，返回资源ID对应的媒体文件内容。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * 获取指定资源ID对应的指定屏幕密度媒体文件内容，使用callback异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @param { int } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @param { _AsyncCallback<Uint8Array> } callback - 回调函数，返回资源ID对应的媒体文件内容。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaContent(resId: long, density: int, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * 获取指定资源ID对应的媒体文件内容，使用Promise异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @returns { Promise<Uint8Array> } Promise对象，返回资源ID值对应的媒体文件内容。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMediaContent(resId: long): Promise<Uint8Array>;

    /**
     * 获取指定资源ID对应的指定屏幕密度媒体文件内容，使用Promise异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @param { int } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @returns { Promise<Uint8Array> } Promise对象，返回资源ID值对应的媒体文件内容。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaContent(resId: long, density: int): Promise<Uint8Array>;

    /**
     * 获取指定资源ID对应的图片资源Base64编码，使用callback异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回资源ID值对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMediaContentBase64(resId: long, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定资源ID对应的指定屏幕密度图片资源Base64编码，使用callback异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @param { int } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @param { _AsyncCallback<string> } callback - 回调函数，返回资源ID值对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaContentBase64(resId: long, density: int, callback: _AsyncCallback<string>): void;

    /**
     * 获取指定资源ID对应的图片资源Base64编码，使用Promise异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @returns { Promise<string> } Promise对象，返回资源ID值对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMediaContentBase64(resId: long): Promise<string>;

    /**
     * 获取指定资源ID对应的指定屏幕密度图片资源Base64编码，使用Promise异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @param { int } density - 资源获取需要的屏幕密度，0表示默认屏幕密度。
     * @returns { Promise<string> } Promise对象，返回资源ID值对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaContentBase64(resId: long, density: int): Promise<string>;

    /**
     * 获取resources/rawfile目录下对应的rawfile文件内容，使用callback异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @param { _AsyncCallback<Uint8Array> } callback - 回调函数，返回获取的rawfile文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getRawFileContent(path: string, callback: _AsyncCallback<Uint8Array>): void;

    /**
     * 获取resources/rawfile目录下对应的rawfile文件内容，使用Promise异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @returns { Promise<Uint8Array> } Promise对象，返回获取的rawfile文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getRawFileContent(path: string): Promise<Uint8Array>;

    /**
     * 获取resources/rawfile目录下对应rawfile文件所在HAP的文件描述符（fd），使用callback异步回调。
     * 
     * > **说明**
     * >
     * > 文件描述符（fd）使用完毕后需调用[closeRawFdSync]{@link resourceManager.ResourceManager.closeRawFdSync}或
     * > [closeRawFd]{@link resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)}关闭
     * > fd，避免资源泄露。
     *
     * @param { string } path - rawfile文件路径。
     * @param { _AsyncCallback<RawFileDescriptor> } callback - 回调函数，返回的rawfile文件所在HAP的文件描述符（fd）。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getRawFd(path: string, callback: _AsyncCallback<RawFileDescriptor>): void;

    /**
     * 获取resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用Promise异步回调。
     * 
     * > **说明**
     * >
     * > 文件描述符（fd）使用完毕后需调用[closeRawFdSync]{@link resourceManager.ResourceManager.closeRawFdSync}或
     * > [closeRawFd]{@link resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)}关闭
     * > fd，避免资源泄露。
     *
     * @param { string } path - rawfile文件路径。
     * @returns { Promise<RawFileDescriptor> } Promise对象，返回rawfile文件所在HAP的文件描述符（fd）。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getRawFd(path: string): Promise<RawFileDescriptor>;

    /**
     * 关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用callback异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @param { _AsyncCallback<void> } callback - 回调函数。当关闭rawfile所在HAP的文件描述符（fd）成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    closeRawFd(path: string, callback: _AsyncCallback<void>): void;

    /**
     * 关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用Promise异步回调。
     *
     * @param { string } path - rawfile文件路径。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    closeRawFd(path: string): Promise<void>;

    /**
     * 获取指定资源ID对应的DrawableDescriptor对象，用于图标的显示，使用同步方式返回。
     *
     * @param { long } resId - 资源ID值。
     * @param { int } density - 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。
     * @param { int } type - - 1表示获取主题资源包中应用的分层图标资源。<br> - 0或缺省表示获取应用自身图标资源。
     * @returns { DrawableDescriptor } 资源ID值对应的DrawableDescriptor对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getDrawableDescriptor(resId: long, density?: int, type?: int): DrawableDescriptor;

    /**
     * 获取指定资源名称对应的DrawableDescriptor对象，用于图标的显示，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @param { int } density - 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。
     * @param { int } type - - 1表示获取主题资源包中应用的分层图标资源。<br> - 0或缺省表示获取应用自身图标资源。
     * @returns { DrawableDescriptor } 资源名称对应的DrawableDescriptor对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getDrawableDescriptorByName(resName: string, density?: int, type?: int): DrawableDescriptor;

    /**
     * 获取指定resource对应的DrawableDescriptor对象，用于图标的显示，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > 从API version 10开始支持，从API version 20开始废弃，建议使用
     * > [getDrawableDescriptorByName]{@link resourceManager.ResourceManager.getDrawableDescriptorByName}或
     * > [getDrawableDescriptor]{@link resourceManager.ResourceManager.getDrawableDescriptor(resId: long, density?: int, type?: int)}
     * > 替代。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } density - 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。
     * @param { number } type - - 1表示获取主题资源包中应用的分层图标资源。<br> - 0或缺省表示获取应用自身图标资源。
     * @returns { DrawableDescriptor } 资源ID值对应的DrawableDescriptor对象。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2
     *     .Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getDrawableDescriptor(resId: long, density?: int, type?: int)
     */
    getDrawableDescriptor(resource: Resource, density?: number, type?: number): DrawableDescriptor;

    /**
     * 获取resources/rawfile目录下文件夹及文件列表，使用callback异步回调。
     * 
     * > **说明**
     * >
     * > 若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。
     *
     * @param { string } path - rawfile文件夹路径。
     * @param { _AsyncCallback<Array<string>> } callback - 回调函数，返回rawfile文件目录下的文件夹及文件列表。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getRawFileList(path: string, callback: _AsyncCallback<Array<string>>): void;

    /**
     * 获取resources/rawfile目录下文件夹及文件列表，使用Promise异步回调。
     * 
     * > **说明**
     * >
     * > 若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。
     *
     * @param { string } path - rawfile文件夹路径。
     * @returns { Promise<Array<string>> } Promise对象，返回rawfile文件目录下的文件夹及文件列表。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getRawFileList(path: string): Promise<Array<string>>;

    /**
     * 获取指定资源ID对应的颜色值，使用callback异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @param { _AsyncCallback<long> } callback - 回调函数，返回资源ID值对应的颜色值（十进制）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getColor(resId: long, callback: _AsyncCallback<long>): void;

    /**
     * 获取指定资源ID对应的颜色值，使用Promise异步回调。
     *
     * @param { long } resId - 资源ID值。
     * @returns { Promise<long> } Promise对象，返回资源ID值对应的颜色值（十进制）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getColor(resId: long): Promise<long>;

    /**
     * 获取指定resource对象对应的颜色值，使用callback异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @param { _AsyncCallback<number> } callback - 回调函数，返回resource对象对应的颜色值（十进制）。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getColor(resId: long, callback: _AsyncCallback<long>)
     */
    getColor(resource: Resource, callback: _AsyncCallback<number>): void;

    /**
     * 获取指定resource对象对应的颜色值，使用Promise异步回调。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { Promise<number> } Promise对象，返回resource对象对应的颜色值（十进制）。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getColor(resId: long)
     */
    getColor(resource: Resource): Promise<number>;

    /**
     * 获取指定资源名称对应的颜色值，使用callback异步回调。
     *
     * @param { string } resName - 资源名称。
     * @param { _AsyncCallback<long> } callback - 回调函数，返回资源名称对应的颜色值（十进制）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getColorByName(resName: string, callback: _AsyncCallback<long>): void;

    /**
     * 获取指定资源名称对应的颜色值，使用Promise异步回调。
     *
     * @param { string } resName - 资源名称。
     * @returns { Promise<long> } Promise对象，返回资源名称对应的颜色值（十进制）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getColorByName(resName: string): Promise<long>;

    /**
     * 获取指定资源ID对应的颜色值，使用同步方式返回。
     *
     * @param { long } resId - 资源ID值。
     * @returns { long } 资源ID值对应的颜色值（十进制）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getColorSync(resId: long) : long;

    /**
     * 获取指定resource对象对应的颜色值，使用同步方式返回。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { number } resource对象对应的颜色值（十进制）。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getColorSync(resId: long)
     */
    getColorSync(resource: Resource) : number;

    /**
     * 获取指定资源名称对应的颜色值，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @returns { long } 资源名称对应的颜色值（十进制）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getColorByNameSync(resName: string) : long;

    /**
     * 应用运行时加载指定的资源路径，实现资源覆盖。
     * 
     * > **说明**
     * >
     * > rawfile和resfile目录不支持资源覆盖。
     *
     * @param { string } path - 资源路径。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001010 - Invalid overlay path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    addResource(path: string) : void;

    /**
     * 应用运行时移除指定的资源路径，还原被覆盖前的资源。
     * 
     * > **说明**
     * >
     * > rawfile和resfile目录不支持资源覆盖。
     *
     * @param { string } path - 资源路径。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001010 - Invalid overlay path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    removeResource(path: string) : void;

    /**
     * 获取resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用同步方式返回。
     * 
     * > **说明**
     * >
     * > 文件描述符（fd）使用完毕后需调用[closeRawFdSync]{@link resourceManager.ResourceManager.closeRawFdSync}或
     * > [closeRawFd]{@link resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)}关闭
     * > fd，避免资源泄露。
     *
     * @param { string } path - rawfile文件路径。
     * @returns { RawFileDescriptor } rawfile文件所在HAP的文件描述符（fd）。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getRawFdSync(path: string): RawFileDescriptor;

    /**
     * 关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd），使用同步方式返回。
     *
     * @param { string } path - rawfile文件路径 。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    closeRawFdSync(path: string): void;

    /**
     * 获取resources/rawfile目录下文件夹及文件列表，使用同步形式返回。
     * 
     * > **说明**
     * >
     * > 若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。
     *
     * @param { string } path - rawfile文件夹路径。
     * @returns { Array<string> } rawfile文件目录下的文件夹及文件列表。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getRawFileListSync(path: string): Array<string>;

    /**
     * 获取resources/rawfile目录下对应的rawfile文件内容，使用同步形式返回。
     *
     * @param { string } path - rawfile文件路径。
     * @returns { Uint8Array } 返回获取的rawfile文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getRawFileContentSync(path: string): Uint8Array;

    /**
     * 获取指定资源ID对应的默认或指定的屏幕密度媒体文件内容，使用同步方式返回。
     *
     * @param { long } resId - 资源ID值。
     * @param { int } density - 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。
     * @returns { Uint8Array } 资源ID对应的媒体文件内容。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaContentSync(resId: long, density?: int): Uint8Array;

    /**
     * 获取指定resource对象对应的默认或指定的屏幕密度媒体文件内容，使用同步方式返回。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } density - 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。
     * @returns { Uint8Array } resource对象对应的媒体文件内容。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2
     *     .Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContentSync(resId: long, density?: int)
     */
    getMediaContentSync(resource: Resource, density?: number): Uint8Array;

    /**
     * 获取指定资源ID对应的默认或指定的屏幕密度图片资源Base64编码，使用同步方式返回。
     *
     * @param { long } resId - 资源ID值。
     * @param { int } density - 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。
     * @returns { string } 资源ID对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaContentBase64Sync(resId: long, density?: int): string;

    /**
     * 获取指定resource对象对应的默认或指定的屏幕密度图片资源Base64编码，使用同步方式返回。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } density - 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。
     * @returns { string } resource对象对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2
     *     .Parameter verification failed.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getMediaContentBase64Sync(resId: long, density?: int)
     */
    getMediaContentBase64Sync(resource: Resource, density?: number): string;

    /**
     * 获取指定资源ID，指定资源数量的单复数字符串，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { number } resId - 资源ID值。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @returns { string } 根据指定数量获取指定ID字符串表示的单复数字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 18
     * @useinstead resourceManager.ResourceManager.getIntPluralStringValueSync(resId: number, num: number,...args: Array<string | number>)
     */
    getPluralStringValueSync(resId: number, num: number): string;

    /**
     * 获取指定资源信息，指定资源数量的单复数字符串，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { Resource } resource - 资源信息。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @returns { string } 根据指定数量获取指定resource对象表示的单复数字符串。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 18
     * @useinstead resourceManager.ResourceManager.getIntPluralStringValueSync(resId: number, num: number,...args: Array<string | number>)
     */
    getPluralStringValueSync(resource: Resource, num: number): string;

    /**
     * 获取指定资源ID对应的字符串数组，使用同步方式返回。
     *
     * @param { long } resId - 资源ID值。
     * @returns { Array<string> } 资源ID值对应的字符串数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getStringArrayValueSync(resId: long): Array<string>;

    /**
     * 获取指定resource对象对应的字符串数组，使用同步方式返回。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { Array<string> } resource对象对应的字符串数组。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getStringArrayValueSync(resId: long)
     */
    getStringArrayValueSync(resource: Resource): Array<string>;

    /**
     * 获取指定资源名称，指定资源数量的单复数字符串，使用同步方式返回。
     * 
     * > **说明**
     * >
     * > 中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考
     * > [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     *
     * @param { string } resName - 资源名称。
     * @param { number } num - 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见
     *     [语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。
     * @returns { string } 根据指定数量获取指定资源名称表示的单复数字符串。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamiconly
     * @deprecated since 18
     * @useinstead resourceManager.ResourceManager.getIntPluralStringByNameSync(resName: string, num: number, ...args: Array<string | number>)
     */
    getPluralStringByNameSync(resName: string, num: number): string;

    /**
     * 获取指定资源名称对应的默认或指定的屏幕密度媒体文件内容，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @param { int } density - 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。
     * @returns { Uint8Array } 资源名称对应的媒体文件内容。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaByNameSync(resName: string, density?: int): Uint8Array;

    /**
     * 获取指定资源名称对应的默认或指定的屏幕密度图片资源Base64编码，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @param { int } density - 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。
     * @returns { string } 资源名称对应的图片资源Base64编码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getMediaBase64ByNameSync(resName: string, density?: int): string;

    /**
     * 获取指定资源名称对应的字符串数组，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @returns { Array<string> } 对应资源名称的字符串数组。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getStringArrayByNameSync(resName: string): Array<string>;

    /**
     * 获取设备的Configuration，使用同步形式返回。
     *
     * @returns { Configuration } 设备的Configuration。
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getConfigurationSync(): Configuration;

    /**
     * 获取设备的DeviceCapability，使用同步形式返回。
     *
     * @returns { DeviceCapability } 设备的DeviceCapability。
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceCapabilitySync(): DeviceCapability;

    /**
     * 获取应用的语言列表。
     *
     * @param { boolean } [includeSystem] - 是否包含系统资源，默认值为false。 <br> - false：表示仅获取应用资源的语言列表。 <br> - true：表示获取系统资源和应用资源的语
     *     言列表。 <br>当使用系统资源管理对象获取语言列表时，includeSystem值无效，始终返回系统资源语言列表。
     * @returns { Array<string> } 返回获取的语言列表，列表中的字符串由语言、脚本（可选）、地区（可选），按照顺序使用中划线“-”连接组成。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getLocales(includeSystem?: boolean): Array<string>;

    /**
     * 获取指定资源ID对应的[Symbol字符](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol)Unicode码，使用同步方式返回。
     *
     * @param { long } resId - 资源ID值。
     * @returns { long } 资源ID值对应的Symbol字符Unicode码（十进制）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getSymbol(resId: long) : long;

    /**
     * 获取指定resource对象对应的[Symbol字符](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol)Unicode码，使用同步方式返回。
     *
     * @param { Resource } resource - 资源信息。
     * @returns { number } resource对象对应的Symbol字符Unicode码（十进制）。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @throws { BusinessError } 9001002 - No matching resource is found based on the resource ID.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 20
     * @useinstead resourceManager.ResourceManager.getSymbol(resId: long)
     */
    getSymbol(resource: Resource) : number;

    /**
     * 获取指定资源名称对应的[Symbol字符](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol)Unicode码，使用同步方式返回。
     *
     * @param { string } resName - 资源名称。
     * @returns { long } 资源名称对应的Symbol字符Unicode码（十进制）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001003 - Invalid resource name.
     * @throws { BusinessError } 9001004 - No matching resource is found based on the resource name.
     * @throws { BusinessError } 9001006 - The resource is referenced cyclically.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getSymbolByName(resName: string) : long;

    /**
     * 判断指定路径是否为rawfile下的目录，使用同步方式返回。
     *
     * @param { string } path - rawfile路径。
     * @returns { boolean } 是否为rawfile下的目录。
     *     - true：表示是rawfile下的目录。 
     *     - false：表示非rawfile下的目录。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @throws { BusinessError } 9001005 - Invalid relative path.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isRawDir(path: string): boolean;

    /**
     * 获取可以加载差异化资源的资源管理对象，使用同步方式返回。
     * 普通的资源管理对象获取的资源的配置（语言、深浅色、分辨率、横竖屏等）是由系统决定的，而通过该接口返回的对象，应用可以获取符合指定配置的资源，即差异化资源，比如在浅色模式时可以获取深色资源。
     *
     * @param { Configuration } [configuration] - 指定想要获取的资源配置。<br>通过
     *     [getOverrideConfiguration]{@link resourceManager.ResourceManager.getOverrideConfiguration}获取差异化配置后，根据需求修改配置项，
     *     再作为参数传入该函数。<br>若缺省则表示使用当前系统的configuration。
     * @returns { ResourceManager } 可以加载差异化资源的资源管理对象。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getOverrideResourceManager(configuration?: Configuration): ResourceManager;

    /**
     * 获取差异化资源的配置，使用同步方式返回。普通资源管理对象与通过它的
     * [getOverrideResourceManager]{@link resourceManager.ResourceManager.getOverrideResourceManager}接口获取的差异化资源管理对象调用该方法
     * 可获得相同的返回值。
     *
     * @returns { Configuration } 差异化资源的配置。
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getOverrideConfiguration(): Configuration;

    /**
     * 更新差异化资源配置。普通资源管理对象与通过它的
     * [getOverrideResourceManager]{@link resourceManager.ResourceManager.getOverrideResourceManager}接口获取的差异化资源管理对象调用该方法
     * 均可更新差异化资源管理对象的配置。
     *
     * @param { Configuration } configuration - 指定差异化资源的配置。通过
     *     [getOverrideConfiguration]{@link resourceManager.ResourceManager.getOverrideConfiguration}获取差异化配置后，根据需求修改配置项，
     *     再作为参数传入。
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateOverrideConfiguration(configuration: Configuration): void;

    /**
     * 获取指定资源ID对应的资源名称。
     *
     * @param { long } resId - 资源ID值。
     * @returns { string } 资源ID值对应的资源名称。
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getResourceName(resId: long): string;
  }

  /**
   * 表示rawfile文件所在HAP的文件描述符（fd）。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type RawFileDescriptor = _RawFileDescriptor;

  /**
   * 表示资源信息，包含资源ID值、应用包名、模块名称等信息，一般可使用$r方式获取。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type Resource = _Resource;
}
export default resourceManager;