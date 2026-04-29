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

/*** if arkts dynamic&static */
import { RawFileDescriptor as _RawFileDescriptor } from './global/rawFileDescriptor';
import { Resource as _Resource } from './global/resource';
import { AsyncCallback as _AsyncCallback } from './@ohos.base';
import { DrawableDescriptor } from './@ohos.arkui.drawableDescriptor';
/*** endif */

/**
 * The **resourceManager** module provides the resource management functionality. It allows an application to obtain the
 * best matched application resources or system resources based on the specified 
 * [configuration]{@link resourceManager.Configuration}. For details about the matching rules, see 
 * [Matching Resources](docroot://quick-start/resource-categories-and-access.md#matching-resources).
 * The configuration includes language, region, screen orientation, color mode, mobile country code (MCC), mobile network code (MNC)
 * , device capability, and density.
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace resourceManager {
  /**
   * Enumerates the screen directions.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * Portrait
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DIRECTION_VERTICAL = 0,

    /**
     * Landscape
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
   * Enumerates the device types.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export enum DeviceType {
    /**
     * Phone
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_PHONE = 0x00,

    /**
     * Tablet
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_TABLET = 0x01,

    /**
     * Head unit
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
     * Smart TV
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_TV = 0x04,

    /**
     * Wearable
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_WEARABLE = 0x06,

    /**
     * PC/2-in-1 device
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
   * Enumerates the screen density types.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export enum ScreenDensity {
    /**
     * Small-scale DPI.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_SDPI = 120,

    /**
     * Medium-scale DPI.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_MDPI = 160,

    /**
     * Large-scale DPI.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_LDPI = 240,

    /**
     * Extra-large-scale DPI.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_XLDPI = 320,

    /**
     * Extra-extra-large-scale DPI.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SCREEN_XXLDPI = 480,

    /**
     * Extra-extra-extra-large-scale DPI.
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
   * Defines the color mode of the current device.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum ColorMode {

    /**
     * Dark mode.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DARK = 0,

    /**
     * Light mode.
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
   * Defines the device configuration.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export class Configuration {
    /**
     * Screen orientation modes.
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    direction: Direction;

    /**
     * Language locale.
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    locale: string;

    /**
     * Device type.
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deviceType: DeviceType;

    /**
     * Screen density
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    screenDensity: ScreenDensity;

    /**
     * Color mode.
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    colorMode: ColorMode;

    /**
     * Mobile country code (MCC).
     * 
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    mcc : int;

    /**
     * Mobile network code (MNC).
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
   * Defines the device capability.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export class DeviceCapability {
    /**
     * Screen density of the device.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    screenDensity: ScreenDensity;

    /**
     * Device type.
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
     * Defines an asynchronous callback that carries an error parameter and asynchronous return value.
     *
     * @param { Error } err - Error message returned when the API fails to be called.
     * @param { T } data - Callback invoked when the API is called.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.base:AsyncCallback
     */
    (err: Error, data: T): void;
  }

  /**
   * Obtains the **ResourceManager** object of this application. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { AsyncCallback<ResourceManager> } callback - Callback used to return the **ResourceManager** object.
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6 dynamiconly
   */
  export function getResourceManager(callback: AsyncCallback<ResourceManager>): void;

  /**
   * Obtains the **ResourceManager** object of the specified application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { string } bundleName - Bundle name of the application.
   * @param { AsyncCallback<ResourceManager> } callback - Callback used to return the **ResourceManager** object.
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6 dynamiconly
   */
  export function getResourceManager(bundleName: string, callback: AsyncCallback<ResourceManager>): void;

  /**
   * Obtains the **ResourceManager** object of this application. This API uses a promise to return the result.
   *
   * @returns { Promise<ResourceManager> } Promise used to return the **ResourceManager** object.
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6 dynamiconly
   */
  export function getResourceManager(): Promise<ResourceManager>;

  /**
   * Obtains the **ResourceManager** object of the specified application. This API uses a promise to return the result.
   *
   * @param { string } bundleName - Bundle name of the application.
   * @returns { Promise<ResourceManager> } Promise used to return the **ResourceManager** object.
   * @syscap SystemCapability.Global.ResourceManager
   * @FAModelOnly
   * @since 6 dynamiconly
   */
  export function getResourceManager(bundleName: string): Promise<ResourceManager>;

  /**
   * Obtains a system **ResourceManager** object.
   * 
   * > **NOTE**
   * >
   * > The **Configuration** field in the **ResourceManager** object obtained via this API uses the default value,
   * > which is as follows:
   * > {"locale": "", "direction": -1, "deviceType": -1, "screenDensity": 0, "colorMode": 1, "mcc": 0, "mnc": 0}.
   *
   * @returns { ResourceManager } The system **ResourceManager** object.
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
   * Obtains a system **ResourceManager** object.
   *
   * @returns { ResourceManager } The system **ResourceManager** object.
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
   * Provides APIs for accessing application resources and system resources.
   * 
   * > **NOTE**
   * >
   * > - The methods involved in **ResourceManager** are applicable only to the TypeScript-based declarative development
   * > paradigm.
   * >
   * > - Resource files are defined in the **resources** directory of the project. You can obtain resource values such 
   * > as strings, string arrays, and colors based on the specified **resName**, **resId**, or **Resource** object. 
   * > **resName** indicates the resource name, **resId** indicates the resource ID, which can be obtained through `$r(
   * > *resource-address*).id`, for example, `$r('app.string.test').id`.
   * >
   * > - No matter whether resources are in the same HAP or different HAPs or HSPs, you are advised to use the API with 
   * > **resName** or **resId** specified. Using the **Resource** object will take a longer time. If the resources are 
   * > in different HAPs or HSPs, you first need to use 
   * > [createModuleContext]{@link @ohos.app.ability.application:application.createModuleContext(context: Context, moduleName: string)}
   * > to create the context of the corresponding module and then call the API with **resName** or **resId** specified. 
   * > For details, see 
   * > [Accessing Resources](docroot://quick-start/resource-categories-and-access.md#accessing-resources).
   * >
   * > - For details about the content of the test files used in the sample code, see 
   * > [Appendix](docroot://reference/apis-localization-kit/js-apis-resource-manager.md#appendix).
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export interface ResourceManager {
    /**
     * Obtains a string based on the specified resource ID. This API uses an asynchronous callback to return the result.
     *
     * @param { number } resId - Resource ID.
     * @param { AsyncCallback<string> } callback - Callback used to return the obtained string.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getStringValue(resId: long, callback: _AsyncCallback<string>)
     */
    getString(resId: number, callback: AsyncCallback<string>): void;

    /**
     * Obtains a string based on the specified resource ID. This API uses a promise to return the result.
     *
     * @param { number } resId - Resource ID.
     * @returns { Promise<string> } Promise used to return the obtained string.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getStringValue(resId: long)
     */
    getString(resId: number): Promise<string>;

    /**
     * Obtains a string based on the specified resource object. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { Resource } resource - Resource object.
     * @param { _AsyncCallback<string> } callback - Callback used to return the obtained string.
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
     * Obtains a string based on the specified resource object. This API uses a promise to return the result.
     *
     * @param { Resource } resource - Resource object.
     * @returns { Promise<string> } Promise used to return the obtained string.
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
     * Obtains a string array based on the specified resource ID. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { number } resId - Resource ID.
     * @param { AsyncCallback<Array<string>> } callback - Callback used to return the obtained string array.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getStringArrayValue(resId: long, callback: _AsyncCallback<Array<string>>)
     */
    getStringArray(resId: number, callback: AsyncCallback<Array<string>>): void;

    /**
     * Obtains a string array based on the specified resource ID. This API uses a promise to return the result.
     *
     * @param { number } resId - Resource ID.
     * @returns { Promise<Array<string>> } Promise used to return the obtained string array.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getStringArrayValue(resId: long)
     */
    getStringArray(resId: number): Promise<Array<string>>;

    /**
     * Obtains a string array based on the specified resource object. This API uses an asynchronous callback to return 
     * the result.
     *
     * @param { Resource } resource - Resource object.
     * @param { _AsyncCallback<Array<string>> } callback - Callback used to return the obtained string array.
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
     * Obtains a string array based on the specified resource object. This API uses a promise to return the result.
     *
     * @param { Resource } resource - Resource object.
     * @returns { Promise<Array<string>> } Promise used to return the obtained string array.
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
     * Obtains media file content based on the specified resource ID. This API uses an asynchronous callback to return 
     * the result.
     *
     * @param { number } resId - Resource ID.
     * @param { AsyncCallback<Uint8Array> } callback - Callback used to return the media file content.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getMediaContent(resId: long, callback: _AsyncCallback<Uint8Array>)
     */
    getMedia(resId: number, callback: AsyncCallback<Uint8Array>): void;

    /**
     * Obtains media file content based on the specified resource ID. This API uses a promise to return the result.
     *
     * @param { number } resId - Resource ID.
     * @returns { Promise<Uint8Array> } Promise used to return the media file content.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getMediaContent(resId: long)
     */
    getMedia(resId: number): Promise<Uint8Array>;

    /**
     * Obtains media file content based on the specified resource object. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { Resource } resource - Resource object.
     * @param { _AsyncCallback<Uint8Array> } callback - Callback used to return the media file content.
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
     * Obtains media file content for the specified screen density based on the specified resource object. This API uses
     * an asynchronous callback to return the result.
     *
     * @param { Resource } resource - Resource object.
     * @param { number } density - Screen density. The value **0** indicates the default screen density.
     * @param { _AsyncCallback<Uint8Array> } callback - Callback used to return the media file content.
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
     * Obtains media file content based on the specified resource object. This API uses a promise to return the result.
     *
     * @param { Resource } resource - Resource object.
     * @returns { Promise<Uint8Array> } Promise used to return the media file content.
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
     * Obtains media file content for the specified screen density based on the specified resource object. This API uses
     * a promise to return the result.
     *
     * @param { Resource } resource - Resource object.
     * @param { number } density - Screen density. The value **0** indicates the default screen density.
     * @returns { Promise<Uint8Array> } Promise used to return the media file content.
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
     * Obtains an image's Base64 code based on the specified resource ID. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { number } resId - Resource ID.
     * @param { AsyncCallback<string> } callback - Callback used to return the Base64 code of the image.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getMediaContentBase64(resId: long, callback: _AsyncCallback<string>)
     */
    getMediaBase64(resId: number, callback: AsyncCallback<string>): void;

    /**
     * Obtains an image's Base64 code based on the specified resource ID. This API uses a promise to return the result.
     *
     * @param { number } resId - Resource ID.
     * @returns { Promise<string> } Promise used to return the Base64 code of the image.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getMediaContentBase64(resId: long)
     */
    getMediaBase64(resId: number): Promise<string>;

    /**
     * Obtains an image's Base64 code based on the specified resource object. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { Resource } resource - Resource object.
     * @param { _AsyncCallback<string> } callback - Callback used to return the Base64 code of the image.
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
     * Obtains an image's Base64 code for the specified screen density based on the specified resource object. This API 
     * uses an asynchronous callback to return the result.
     *
     * @param { Resource } resource - Resource object.
     * @param { number } density - Screen density. The value **0** indicates the default screen density.
     * @param { _AsyncCallback<string> } callback - Callback used to return the Base64 code of the image.
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
     * Obtains an image's Base64 code based on the specified resource object. This API uses a promise to return the 
     * result.
     *
     * @param { Resource } resource - Resource object.
     * @returns { Promise<string> } Promise used to return the Base64 code of the image.
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
     * Obtains an image's Base64 code for the specified screen density based on the specified resource object. This API 
     * uses a promise to return the result.
     *
     * @param { Resource } resource - Resource object.
     * @param { number } density - Screen density. The value **0** indicates the default screen density.
     * @returns { Promise<string> } Promise used to return the Base64 code of the image.
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
     * Obtains the device capability. This API uses an asynchronous callback to return the result.
     *
     * @param { _AsyncCallback<DeviceCapability> } callback - Callback used to return the device capability.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getDeviceCapability(callback: _AsyncCallback<DeviceCapability>): void;

    /**
     * Obtains the device capability. This API uses a promise to return the result.
     *
     * @returns { Promise<DeviceCapability> } Promise used to return the device capability.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getDeviceCapability(): Promise<DeviceCapability>;

    /**
     * Obtains the device configuration. This API uses an asynchronous callback to return the result.
     *
     * @param { _AsyncCallback<Configuration> } callback - Callback used to return the device configuration.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getConfiguration(callback: _AsyncCallback<Configuration>): void;

    /**
     * Obtains the device configuration. This API uses a promise to return the result.
     *
     * @returns { Promise<Configuration> } Promise used to return the device configuration.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getConfiguration(): Promise<Configuration>;

    /**
     * Obtains singular/plural strings based on the specified quantity and resource ID. This API uses an asynchronous 
     * callback to return the result.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { number } resId - Resource ID.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { AsyncCallback<string> } callback - Callback used to return the obtained singular/plural string.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getPluralStringValue(resId: number, num: number, callback: _AsyncCallback<string>)
     */
    getPluralString(resId: number, num: number, callback: AsyncCallback<string>): void;

    /**
     * Obtains singular/plural strings based on the specified quantity and resource ID. This API uses a promise to 
     * return the result.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { number } resId - Resource ID.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @returns { Promise<string> } Promise used to return the obtained singular/plural string.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getPluralStringValue(resId: number, num: number)
     */
    getPluralString(resId: number, num: number): Promise<string>;

    /**
     * Obtains singular/plural strings based on the specified quantity and resource object. This API uses an 
     * asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { Resource } resource - Resource object.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { _AsyncCallback<string> } callback - Callback used to return the obtained singular/plural string.
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
     * Obtains singular/plural strings based on the specified quantity and resource object. This API uses a promise to 
     * return the result.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { Resource } resource - Resource object.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @returns { Promise<string> } Promise used to return the obtained singular/plural string.
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
     * Obtains the content of a rawfile in the **resources/rawfile** directory. This API uses an asynchronous callback 
     * to return the result.
     *
     * @param { string } path - Path of the rawfile.
     * @param { AsyncCallback<Uint8Array> } callback - Callback used to return the rawfile content.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getRawFileContent(path: string, callback: _AsyncCallback<Uint8Array>)
     */
    getRawFile(path: string, callback: AsyncCallback<Uint8Array>): void;

    /**
     * Obtains the content of a rawfile in the **resources/rawfile** directory. This API uses a promise to return the 
     * result.
     *
     * @param { string } path - Path of the rawfile.
     * @returns { Promise<Uint8Array> } Promise used to return the rawfile content.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getRawFileContent(path: string)
     */
    getRawFile(path: string): Promise<Uint8Array>;

    /**
     * Obtains the fd of the rawfile in the **resources/rawfile** directory. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { string } path - Path of the rawfile.
     * @param { AsyncCallback<RawFileDescriptor> } callback - Callback used to return the obtained fd.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getRawFd(path: string, callback: _AsyncCallback<RawFileDescriptor>)
     */
    getRawFileDescriptor(path: string, callback: AsyncCallback<RawFileDescriptor>): void;

    /**
     * Obtains the fd of the rawfile in the **resources/rawfile** directory. This API uses a promise to return the 
     * result.
     *
     * @param { string } path - Path of the rawfile.
     * @returns { Promise<RawFileDescriptor> } Promise used to return the obtained fd.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.getRawFd(path: string)
     */
    getRawFileDescriptor(path: string): Promise<RawFileDescriptor>;

    /**
     * Closes the fd of the rawfile in the **resources/rawfile** directory. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { string } path - Path of the rawfile.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, 
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)
     */
    closeRawFileDescriptor(path: string, callback: AsyncCallback<void>): void;

    /**
     * Closes the fd of the rawfile in the **resources/rawfile** directory. This API uses a promise to return the 
     * result.
     *
     * @param { string } path - Path of the rawfile.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Global.ResourceManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead resourceManager.ResourceManager.closeRawFd(path: string)
     */
    closeRawFileDescriptor(path: string): Promise<void>;

    /**
     * Obtains a string based on the specified resource name. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { string } resName - Resource name.
     * @param { _AsyncCallback<string> } callback - Callback used to return the result, which is the string 
     *     corresponding to the specified resource ID.
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
     * Obtains a string based on the specified resource name. This API uses a promise to return the result.
     *
     * @param { string } resName - Resource name.
     * @returns { Promise<string> } Promise used to return the obtained string.
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
     * Obtains a string array based on the specified resource name. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { string } resName - Resource name.
     * @param { _AsyncCallback<Array<string>> } callback - Callback used to return the obtained string array.
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
     * Obtains a string array based on the specified resource name. This API uses a promise to return the result.
     *
     * @param { string } resName - Resource name.
     * @returns { Promise<Array<string>> } Promise used to return the obtained string array.
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
     * Obtains media file content based on the specified resource name. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { string } resName - Resource name.
     * @param { _AsyncCallback<Uint8Array> } callback - Callback used to return the media file content.
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
     * Obtains the media file content for the specified screen density based on the specified resource name. This API 
     * uses an asynchronous callback to return the result.
     *
     * @param { string } resName - Resource name.
     * @param { int } density - Screen density. The value **0** indicates the default screen density.
     * @param { _AsyncCallback<Uint8Array> } callback - Callback used to return the media file content.
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
     * Obtains media file content based on the specified resource name. This API uses a promise to return the result.
     *
     * @param { string } resName - Resource name.
     * @returns { Promise<Uint8Array> } Promise used to return the media file content.
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
     * Obtains the media file content for the specified screen density based on the specified resource name. This API 
     * uses a promise to return the result.
     *
     * @param { string } resName - Resource name.
     * @param { int } density - Screen density. The value **0** indicates the default screen density.
     * @returns { Promise<Uint8Array> } Promise used to return the media file content.
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
     * Obtains an image's Base64 code based on the specified resource name. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { string } resName - Resource name.
     * @param { _AsyncCallback<string> } callback - Callback used to return the Base64 code of the image.
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
     * Obtains an image's Base64 code for the specified screen density based on the specified resource name. This API 
     * uses an asynchronous callback to return the result.
     * 
     * @param { string } resName - Resource name.
     * @param { int } density - Screen density. The value **0** indicates the default screen density.
     * @param { _AsyncCallback<string> } callback - Callback used to return the Base64 code of the image.
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
     * Obtains an image's Base64 code based on the specified resource name. This API uses a promise to return the 
     * result.
     *
     * @param { string } resName - Resource name.
     * @returns { Promise<string> } Promise used to return the Base64 code of the image.
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
     * Obtains an image's Base64 code for the specified screen density based on the specified resource name. This API 
     * uses a promise to return the result.
     *
     * @param { string } resName - Resource name.
     * @param { int } density - Screen density. The value **0** indicates the default screen density.
     * @returns { Promise<string> } Promise used to return the Base64 code of the image.
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
     * Obtains singular/plural strings based on the specified quantity and resource name. This API uses an asynchronous 
     * callback to return the result.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { string } resName - Resource name.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { _AsyncCallback<string> } callback - Callback used to return the obtained singular/plural string.
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
     * Obtains singular/plural strings based on the specified quantity and resource name. This API uses a promise to 
     * return the result.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { string } resName - Resource name.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @returns { Promise<string> } Promise used to return the result, which is the singular/plural string corresponding
     *     to the specified resource name.
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
     * Obtains a string based on the specified resource ID. This API returns the result synchronously.
     *
     * @param { long } resId - Resource ID.
     * @returns { string } String corresponding to the specified resource ID.
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
     * Obtains a string based on the specified resource ID and formats the string based on **args**. This API returns 
     * the result synchronously.
     *
     * @param { number } resId - Resource ID.
     * @param { Array<string | number> } args - Arguments for formatting strings.<br>Supported value types include `%d`,
     *     `%f`, `%s`, `%%`, `%number$d`, `%number$f`, and `%number$s`.<br>Note: `%%` is converted to `%`. **number** in
     *     `%number$d` indicates the sequence number of the parameter in **args**.<br>For example, `%%d` is converted to
     *     `%d` after formatting, and `%1$d` indicates that the first parameter is used.
     * @returns { string } Formatted string corresponding to the specified resource ID.
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
     * Obtains a string based on the specified resource object. This API returns the result synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @returns { string } String corresponding to the specified resource object.
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
     * Obtains a string based on the specified resource object and formats the string based on **args**. This API 
     * returns the result synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @param { Array<string | number> } args - Arguments for formatting strings.<br>Supported value types include `%d`,
     *     `%f`, `%s`, `%%`, `%number$d`, `%number$f`, and `%number$s`.<br>Note: `%%` is converted to `%`. **number** in
     *     `%number$d` indicates the sequence number of the parameter in **args**.<br>For example, `%%d` is converted to
     *     `%d` after formatting, and `%1$d` indicates that the first parameter is used.
     * @returns { string } Formatted string corresponding to the specified resource object.
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
     * Obtains a string based on the specified resource name. This API returns the result synchronously.
     *
     * @param { string } resName - Resource name.
     * @returns { string } String corresponding to the specified resource name.
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
     * Obtains a string based on the specified resource ame and formats the string based on **args**. This API returns 
     * the result synchronously.
     *
     * @param { string } resName - Resource name.
     * @param { Array<string | number> } args - Arguments for formatting strings.<br>Supported value types include `%d`,
     *     `%f`, `%s`, `%%`, `%number$d`, `%number$f`, and `%number$s`.<br>Note: `%%` is converted to `%`. **number** in
     *     `%number$d` indicates the sequence number of the parameter in **args**.<br>For example, `%%d` is converted to
     *     `%d` after formatting, and `%1$d` indicates that the first parameter is used.
     * @returns { string } Formatted string corresponding to the specified resource name.
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
     * Obtains a Boolean value based on the specified resource ID. This API returns the result synchronously.
     *
     * @param { long } resId - Resource ID.
     * @returns { boolean } Boolean value.
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
     * Obtains a Boolean value based on the specified resource object. This API returns the result synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @returns { boolean } Boolean value.
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
     * Obtains a Boolean value based on the specified resource name. This API returns the result synchronously.
     *
     * @param { string } resName - Resource name.
     * @returns { boolean } Boolean value.
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
     * Obtains an integer or float number based on the specified resource ID. This API returns the result synchronously.
     * 
     *
     * @param { number } resId - Resource ID.
     * @returns { number } Integer or float value corresponding to the specified resource ID.
     *     An integer indicates the original value, and a float number without a unit indicates the original value and a float 
     *     number with the unit of vp or fp indicates the px value. For details, see the sample code.
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
     * Obtains an integer or float number based on the specified resource object. This API returns the result 
     * synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @returns { number } Integer or float number.
     *     An integer indicates the original value, and a float number without a unit indicates the original value and a float 
     *     number with the unit of vp or fp indicates the px value.
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
     * Obtains an integer or float number based on the specified resource name. This API returns the result 
     * synchronously.
     *
     * @param { string } resName - Resource name.
     * @returns { number } Integer or float value corresponding to the specified resource name.
     *     An integer indicates the original value, and a float number without a unit indicates the original value and a float 
     *     number with the unit of vp or fp indicates the px value.
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
     * Releases a **ResourceManager** object. This API is not supported currently.
     *
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamiconly
     * @deprecated since 12
     */
    release();

    /**
     * Obtains a string based on the specified resource ID. This API uses an asynchronous callback to return the result.
     * 
     *
     * @param { long } resId - Resource ID.
     * @param { _AsyncCallback<string> } callback - Callback used to return the obtained string.
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
     * Obtains a string based on the specified resource ID. This API uses a promise to return the result.
     *
     * @param { long } resId - Resource ID.
     * @returns { Promise<string> } Promise used to return the obtained string.
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
     * Obtains a string array based on the specified resource ID. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { long } resId - Resource ID.
     * @param { _AsyncCallback<Array<string>> } callback - Callback used to return the obtained string array.
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
     * Obtains a string array based on the specified resource ID. This API uses a promise to return the result.
     *
     * @param { long } resId - Resource ID.
     * @returns { Promise<Array<string>> } Promise used to return the obtained string array.
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
     * Obtains singular/plural strings based on the specified quantity and resource ID. This API uses an asynchronous 
     * callback to return the result.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { number } resId - Resource ID.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { _AsyncCallback<string> } callback - Callback used to return the obtained singular/plural string.
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
     * Obtains singular/plural strings based on the specified quantity and resource ID. This API uses a promise to 
     * return the result.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { number } resId - Resource ID.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @returns { Promise<string> } Promise used to return the obtained singular/plural string.
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
     * Obtains a [singular/plural](docroot://internationalization/l10n-singular-plural.md) string based on the specified
     * resource ID and formats the string based on the **args** parameter. This API returns the result synchronously.
     * 
     * > **NOTE**
     * >
     * > - Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * >
     * > - In languages such as English and German, singular/plural numbers are classified into cardinal numbers (for 
     * > example, 1, 2, 3) and ordinal numbers (for example, 1st, 2nd, 3rd). This API applies only to cardinal numbers.
     *
     * @param { number } resId - Resource ID.
     * @param { number } num - Integer number used to obtain the corresponding string representation based on the 
     *     current language's 
     *     [plural rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { Array<string | number> } args - Arguments for formatting strings.<br>Supported value types include `%d`,
     *     `%f`, `%s`, `%%`, `%number$d`, `%number$f`, and `%number$s`.<br>Note: `%%` is converted to `%`. **number** in
     *     `%number$d` indicates the sequence number of the parameter in **args**.<br>For example, `%%d` is converted to
     *     `%d` after formatting, and `%1$d` indicates that the first parameter is used.
     * @returns { string } Formatted string corresponding to the specified resource ID.
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
     * Obtains a [singular/plural](docroot://internationalization/l10n-singular-plural.md) string based on the specified
     * resource object and formats the string based on the **args** parameter. This API returns the result 
     * synchronously.
     * 
     * > **NOTE**
     * >
     * > - Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { Resource } resource - Resource object.
     * @param { number } num - Integer number used to obtain the corresponding string representation based on the 
     *     current language's 
     *     [plural rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { Array<string | number> } args - Arguments for formatting strings.<br>Supported value types include `%d`,
     *     `%f`, `%s`, `%%`, `%number$d`, `%number$f`, and `%number$s`.<br>Note: `%%` is converted to `%`. **number** in
     *     `%number$d` indicates the sequence number of the parameter in **args**.<br>For example, `%%d` is converted to
     *     `%d` after formatting, and `%1$d` indicates that the first parameter is used.
     * @returns { string } Formatted string corresponding to the specified resource object.
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
     * Obtains a [singular/plural](docroot://internationalization/l10n-singular-plural.md) string based on the specified
     * resource name and formats the string based on the **args** parameter. This API returns the result synchronously.
     * 
     * > **NOTE**
     * >
     * > - Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * >
     * > - In languages such as English and German, singular/plural numbers are classified into cardinal numbers (for 
     * > example, 1, 2, 3) and ordinal numbers (for example, 1st, 2nd, 3rd). This API applies only to cardinal numbers.
     *
     * @param { string } resName - Resource name.
     * @param { number } num - Integer number used to obtain the corresponding string representation based on the 
     *     current language's 
     *     [plural rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { Array<string | number> } args - Arguments for formatting strings.<br>Supported value types include `%d`,
     *     `%f`, `%s`, `%%`, `%number$d`, `%number$f`, and `%number$s`.<br>Note: `%%` is converted to `%`. **number** in
     *     `%number$d` indicates the sequence number of the parameter in **args**.<br>For example, `%%d` is converted to
     *     `%d` after formatting, and `%1$d` indicates that the first parameter is used.
     * @returns { string } Formatted string corresponding to the specified resource name.
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
     * Obtains a [singular/plural](docroot://internationalization/l10n-singular-plural.md) string based on the specified
     * resource ID and formats the string based on the **args** parameter. This API returns the result synchronously.
     * 
     * > **NOTE**
     * >
     * > - Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * >
     * > - In languages such as English and German, singular/plural numbers are classified into cardinal numbers (for 
     * > example, 1, 2, 3) and ordinal numbers (for example, 1st, 2nd, 3rd). This API applies only to cardinal numbers.
     *
     * @param { number } resId - Resource ID.
     * @param { number } num - Quantity value (a floating point number), used to obtain the corresponding string 
     *     representation based on the current language's 
     *     [plural rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { Array<string | number> } args - Arguments for formatting strings.<br>Supported value types include `%d`,
     *     `%f`, `%s`, `%%`, `%number$d`, `%number$f`, and `%number$s`.<br>Note: `%%` is converted to `%`. **number** in
     *     `%number$d` indicates the sequence number of the parameter in **args**.<br>For example, `%%d` is converted to
     *     `%d` after formatting, and `%1$d` indicates that the first parameter is used.
     * @returns { string } Formatted string corresponding to the specified resource ID.
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
     * Obtains a [singular/plural](docroot://internationalization/l10n-singular-plural.md) string based on the specified
     * resource object and formats the string based on the **args** parameter. This API returns the result 
     * synchronously.
     * 
     * > **NOTE**
     * >
     * > - Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { Resource } resource - Resource object.
     * @param { number } num - Quantity value (a floating point number), used to obtain the corresponding string 
     *     representation based on the current language's 
     *     [plural rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { Array<string | number> } args - Arguments for formatting strings.<br>Supported value types include `%d`,
     *     `%f`, `%s`, `%%`, `%number$d`, `%number$f`, and `%number$s`.<br>Note: `%%` is converted to `%`. **number** in
     *     `%number$d` indicates the sequence number of the parameter in **args**.<br>For example, `%%d` is converted to
     *     `%d` after formatting, and `%1$d` indicates that the first parameter is used.
     * @returns { string } Formatted string corresponding to the specified resource object.
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
     * Obtains a [singular/plural](docroot://internationalization/l10n-singular-plural.md) string based on the specified
     * resource name and formats the string based on the **args** parameter. This API returns the result synchronously.
     * 
     * > **NOTE**
     * >
     * > - Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * >
     * > - In languages such as English and German, singular/plural numbers are classified into cardinal numbers (for 
     * > example, 1, 2, 3) and ordinal numbers (for example, 1st, 2nd, 3rd). This API applies only to cardinal numbers.
     *
     * @param { string } resName - Resource name.
     * @param { number } num - Quantity value (a floating point number), used to obtain the corresponding string 
     *     representation based on the current language's 
     *     [plural rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @param { Array<string | number> } args - Arguments for formatting strings.<br>Supported value types include `%d`,
     *     `%f`, `%s`, `%%`, `%number$d`, `%number$f`, and `%number$s`.<br>Note: `%%` is converted to `%`. **number** in
     *     `%number$d` indicates the sequence number of the parameter in **args**.<br>For example, `%%d` is converted to
     *     `%d` after formatting, and `%1$d` indicates that the first parameter is used.
     * @returns { string } Formatted string corresponding to the specified resource name.
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
     * Obtains media file content based on the specified resource ID. This API uses an asynchronous callback to return 
     * the result.
     *
     * @param { long } resId - Resource ID.
     * @param { _AsyncCallback<Uint8Array> } callback - Callback used to return the media file content.
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
     * Obtains the media file content for the specified screen density based on the specified resource ID. This API uses
     * an asynchronous callback to return the result.
     *
     * @param { long } resId - Resource ID.
     * @param { int } density - Screen density. The value **0** indicates the default screen density.
     * @param { _AsyncCallback<Uint8Array> } callback - Callback used to return the media file content.
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
     * Obtains media file content based on the specified resource ID. This API uses a promise to return the result.
     *
     * @param { long } resId - Resource ID.
     * @returns { Promise<Uint8Array> } Promise used to return the media file content.
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
     * Obtains the media file content for the specified screen density based on the specified resource ID. This API uses
     * a promise to return the result.
     *
     * @param { long } resId - Resource ID.
     * @param { int } density - Screen density. The value **0** indicates the default screen density.
     * @returns { Promise<Uint8Array> } Promise used to return the media file content.
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
     * Obtains an image's Base64 code based on the specified resource ID. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { long } resId - Resource ID.
     * @param { _AsyncCallback<string> } callback - Callback used to return the Base64 code of the image.
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
     * Obtains an image's Base64 code for the specified screen density based on the specified resource ID. This API uses
     * an asynchronous callback to return the result.
     *
     * @param { long } resId - Resource ID.
     * @param { int } density - Screen density. The value **0** indicates the default screen density.
     * @param { _AsyncCallback<string> } callback - Callback used to return the Base64 code of the image.
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
     * Obtains an image's Base64 code based on the specified resource ID. This API uses a promise to return the result.
     *
     * @param { long } resId - Resource ID.
     * @returns { Promise<string> } Promise used to return the Base64 code of the image.
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
     * Obtains an image's Base64 code for the specified screen density based on the specified resource ID. This API uses
     * a promise to return the result.
     *
     * @param { long } resId - Resource ID.
     * @param { int } density - Screen density. The value **0** indicates the default screen density.
     * @returns { Promise<string> } Promise used to return the Base64 code of the image.
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
     * Obtains the content of a rawfile in the **resources/rawfile** directory. This API uses an asynchronous callback 
     * to return the result.
     *
     * @param { string } path - Path of the rawfile.
     * @param { _AsyncCallback<Uint8Array> } callback - Callback used to return the content of the rawfile.
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
     * Obtains the content of a rawfile in the **resources/rawfile** directory. This API uses a promise to return the 
     * result.
     *
     * @param { string } path - Path of the rawfile.
     * @returns { Promise<Uint8Array> } Promise used to return the content of the rawfile.
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
     * Obtains the fd of the HAP where a specific rawfile in the **resources/rawfile** directory is located. This API 
     * uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > To prevent resource leakage, call [closeRawFdSync]{@link resourceManager.ResourceManager.closeRawFdSync} or 
     * > [closeRawFd]{@link resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)} to
     * > close the fd after use.
     *
     * @param { string } path - Path of the rawfile.
     * @param { _AsyncCallback<RawFileDescriptor> } callback - Callback used to return the fd of the HAP.
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
     * Obtains the fd of the HAP where a specific rawfile in the **resources/rawfile** directory is located. This API 
     * uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > To prevent resource leakage, call [closeRawFdSync]{@link resourceManager.ResourceManager.closeRawFdSync} or 
     * > [closeRawFd]{@link resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)} to
     * > close the fd after use.
     *
     * @param { string } path - Path of the rawfile.
     * @returns { Promise<RawFileDescriptor> } Promise used to return the fd of the HAP.
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
     * Closes the fd of the HAP where a specific rawfile in the **resources/rawfile** directory is located. This API 
     * uses an asynchronous callback to return the result.
     *
     * @param { string } path - Path of the rawfile.
     * @param { _AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, 
     *     **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Closes the fd of the HAP where a specific rawfile in the **resources/rawfile** directory is located. This API 
     * uses a promise to return the result.
     *
     * @param { string } path - Path of the rawfile.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains a **DrawableDescriptor** object for icon display based on the specified resource ID. This API returns the
     * result synchronously.
     *
     * @param { long } resId - Resource ID.
     * @param { int } density - Screen density. The default value or value **0** indicates the default screen density.
     * @param { int } type - - **1**: Layered icon resource of the application in the theme resource package.<br> - 
     *     **0** or default value: Icon resource of the application.
     * @returns { DrawableDescriptor } **DrawableDescriptor** object corresponding to the specified resource ID.
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
     * Obtains a **DrawableDescriptor** object for icon display based on the specified resource name. This API returns 
     * the result synchronously.
     *
     * @param { string } resName - Resource name.
     * @param { int } density - Screen density. The default value or value **0** indicates the default screen density.
     * @param { int } type - - **1**: Layered icon resource of the application in the theme resource package.<br> - 
     *     **0** or default value: Icon resource of the application.
     * @returns { DrawableDescriptor } **DrawableDescriptor** object.
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
     * Obtains a **DrawableDescriptor** object for icon display based on the specified resource object. This API returns
     * the result synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @param { number } density - Screen density. The default value or value **0** indicates the default screen 
     *     density.
     * @param { number } type - - **1**: Layered icon resource of the application in the theme resource package.<br> -
     *     **0** or default value: Icon resource of the application.
     * @returns { DrawableDescriptor } **DrawableDescriptor** object corresponding to the specified resource ID.
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
     * Obtains the list of folders and files in the **resources/rawfile** directory. This API uses an asynchronous 
     * callback to return the result.
     * 
     * > **NOTE**
     * >
     * > If there is no folder or file in the directory, an exception is thrown. If there are folders and files in the 
     * > directory, the list of the folders and files is returned.
     *
     * @param { string } path - **rawfile** directory.
     * @param { _AsyncCallback<Array<string>> } callback - Callback used to return the list of folders and files.
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
     * Obtains the list of folders and files in the **resources/rawfile** directory. This API uses a promise to return 
     * the result.
     * 
     * > **NOTE**
     * >
     * > If there is no folder or file in the directory, an exception is thrown. If there are folders and files in the 
     * > directory, the list of the folders and files is returned.
     *
     * @param { string } path - **rawfile** directory.
     * @returns { Promise<Array<string>> } Promise used to return the list of folders and files.
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
     * Obtains a color value based on the specified resource ID. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { long } resId - Resource ID.
     * @param { _AsyncCallback<long> } callback - Callback used to return the color value (decimal).
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
     * Obtains a color value based on the specified resource ID. This API uses a promise to return the result.
     *
     * @param { long } resId - Resource ID.
     * @returns { Promise<long> } Promise used to return the color value (decimal).
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
     * Obtains a color value based on the specified resource object. This API uses an asynchronous callback to return 
     * the result.
     *
     * @param { Resource } resource - Resource object.
     * @param { _AsyncCallback<number> } callback - Callback used to return the color value (decimal).
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
     * Obtains a color value based on the specified resource object. This API uses a promise to return the result.
     *
     * @param { Resource } resource - Resource object.
     * @returns { Promise<number> } Promise used to return the color value (decimal).
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
     * Obtains a color value based on the specified resource name. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { string } resName - Resource name.
     * @param { _AsyncCallback<long> } callback - Callback used to return the color value (decimal).
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
     * Obtains a color value based on the specified resource name. This API uses a promise to return the result.
     *
     * @param { string } resName - Resource name.
     * @returns { Promise<long> } Promise used to return the color value (decimal).
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
     * Obtains a color value based on the specified resource ID. This API returns the result synchronously.
     *
     * @param { long } resId - Resource ID.
     * @returns { long } Color value (decimal) corresponding to the specified resource ID.
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
     * Obtains a color value based on the specified resource object. This API returns the result synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @returns { number } Color value (decimal) corresponding to the specified resource object.
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
     * Obtains a color value based on the specified resource name. This API returns the result synchronously.
     *
     * @param { string } resName - Resource name.
     * @returns { long } Color value (decimal) corresponding to the specified resource name.
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
     * Loads resources from the specified path.
     * 
     * > **NOTE**
     * >
     * > Resource overwriting is not supported for the **rawfile** and **resfile** directories.
     *
     * @param { string } path - Resource path.
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
     * Removes the resources loaded from the specified path to restore the original resources.
     * 
     * > **NOTE**
     * >
     * > Resource overwriting is not supported for the **rawfile** and **resfile** directories.
     *
     * @param { string } path - Resource path.
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
     * Obtains the file descriptor (fd) of the HAP where the rawfile file in the resources/rawfile directory is located.
     * This API is called in synchronous mode.
     * 
     * > **NOTE**
     * >
     * > To prevent resource leakage, call [closeRawFdSync]{@link resourceManager.ResourceManager.closeRawFdSync} or 
     * > [closeRawFd]{@link resourceManager.ResourceManager.closeRawFd(path: string, callback: _AsyncCallback<void>)} to
     * > close the fd after use.
     *
     * @param { string } path - Path of the rawfile.
     * @returns { RawFileDescriptor } fd of the HAP where the rawfile is located.
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
     * Obtains the fd of the HAP where a specific rawfile in the **resources/rawfile** directory is located. This API 
     * returns the result synchronously.
     *
     * @param { string } path - Path of the rawfile.
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
     * Obtains the list of folders and files in the **resources/rawfile** directory. This API returns the result 
     * synchronously.
     * 
     * > **NOTE**
     * >
     * > If there is no folder or file in the directory, an exception is thrown. If there are folders and files in the 
     * > directory, the list of the folders and files is returned.
     *
     * @param { string } path - **rawfile** directory.
     * @returns { Array<string> } List of folders and files in the **rawfile** directory.
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
     * Obtains the content of a rawfile in the **resources/rawfile** directory. This API returns the result 
     * synchronously.
     *
     * @param { string } path - Path of the rawfile.
     * @returns { Uint8Array } Content of the rawfile.
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
     * Obtains the media file content for the default or specified screen density based on the specified resource ID. 
     * This API returns the result synchronously.
     *
     * @param { long } resId - Resource ID.
     * @param { int } density - Screen density. The default value or value **0** indicates the default screen density.
     * @returns { Uint8Array } Content of the media file corresponding to the specified resource ID.
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
     * Obtains the media file content for the default or specified screen density based on the specified resource 
     * object. This API returns the result synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @param { number } density - Screen density. The default value or value **0** indicates the default screen 
     *     density.
     * @returns { Uint8Array } Content of the media file corresponding to the specified resource object.
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
     * Obtains an image's Base64 code for the default or specified screen density based on the specified resource ID. 
     * This API returns the result synchronously.
     *
     * @param { long } resId - Resource ID.
     * @param { int } density - Screen density. The default value or value **0** indicates the default screen density.
     * @returns { string } Base64 code of the image corresponding to the specified resource ID.
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
     * Obtains an image's Base64 code for the default or specified screen density based on the specified resource 
     * object. This API returns the result synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @param { number } density - Screen density. The default value or value **0** indicates the default screen 
     *     density.
     * @returns { string } Base64 code of the image corresponding to the specified resource object.
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
     * Obtains singular/plural strings based on the specified resource ID and quantity. This API returns the result 
     * synchronously.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { number } resId - Resource ID.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @returns { string } Singular/plural string corresponding to the specified quantity and resource ID.
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
     * Obtains singular/plural strings based on the specified quantity and resource object. This API returns the result 
     * synchronously.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { Resource } resource - Resource object.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @returns { string } Singular/plural string corresponding to the specified quantity and resource object.
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
     * Obtains a string array based on the specified resource ID. This API returns the result synchronously.
     *
     * @param { long } resId - Resource ID.
     * @returns { Array<string> } String array corresponding to the specified resource ID.
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
     * Obtains a string array based on the specified resource object. This API returns the result synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @returns { Array<string> } String array corresponding to the specified resource object.
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
     * Obtains singular/plural strings based on the specified quantity and resource name. This API returns the result 
     * synchronously.
     * 
     * > **NOTE**
     * >
     * > Strings distinguish between singular and plural forms in all languages except Chinese. For details, see 
     * > [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     *
     * @param { string } resName - Resource name.
     * @param { number } num - Quantity value, which is used to obtain the corresponding string representation based on 
     *     the current language's plural rules. For details about the plural rules of a language, see 
     *     [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html).
     * @returns { string } Singular/plural string corresponding to the specified quantity and resource name.
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
     * Obtains the media file content for the default or specified screen density based on the specified resource name. 
     * This API returns the result synchronously.
     *
     * @param { string } resName - Resource name.
     * @param { int } density - Screen density. The default value or value **0** indicates the default screen density.
     * @returns { Uint8Array } Promise used to return the result, which is the content of the media file corresponding 
     *     to the specified resource name.
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
     * Obtains an image's Base64 code for the default or specified screen density based on the specified resource name. 
     * This API returns the result synchronously.
     *
     * @param { string } resName - Resource name.
     * @param { int } density - Screen density. The default value or value **0** indicates the default screen density.
     * @returns { string } Base64 code of the image corresponding to the specified resource name.
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
     * Obtains a string array based on the specified resource name. This API returns the result synchronously.
     *
     * @param { string } resName - Resource name.
     * @returns { Array<string> } String array corresponding to the specified resource name.
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
     * Obtains the device configuration. This API returns the result synchronously.
     *
     * @returns { Configuration } Device configuration.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getConfigurationSync(): Configuration;

    /**
     * Obtains the device capability. This API returns the result synchronously.
     *
     * @returns { DeviceCapability } Device capability.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getDeviceCapabilitySync(): DeviceCapability;

    /**
     * Obtains the language list of an application.
     *
     * @param { boolean } [includeSystem] - Whether system resources are included. The default value is **false**.<br> -
     *     **false**: Only application resources are included.<br> - **true**: Both system and application resources are
     *     included.<br>If the value of **includeSystem** is invalid, the language list of system resources will be 
     *     returned.
     * @returns { Array<string> } Language list. The strings in the list are comprised of the language, script (optional
     *     ), and region (optional), which are connected by a hyphen (-).
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getLocales(includeSystem?: boolean): Array<string>;

    /**
     * Obtains the Unicode of a [symbol](https://developer.huawei.com/consumer/en/design/harmonyos-symbol) based on the 
     * specified resource ID. This API returns the result synchronously.
     *
     * @param { long } resId - Resource ID.
     * @returns { long } Unicode code (decimal) of the symbol.
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
     * Obtains the Unicode of a [symbol](https://developer.huawei.com/consumer/en/design/harmonyos-symbol) based on the 
     * specified resource object. This API returns the result synchronously.
     *
     * @param { Resource } resource - Resource object.
     * @returns { number } Unicode code (decimal) of the symbol.
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
     * Obtains the Unicode of a [symbol](https://developer.huawei.com/consumer/en/design/harmonyos-symbol) based on the 
     * specified resource name. This API returns the result synchronously.
     *
     * @param { string } resName - Resource name.
     * @returns { long } Unicode code (decimal) of the symbol.
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
     * Checks whether a path is a subdirectory in the **rawfile** directory. This API returns the result synchronously.
     *
     * @param { string } path - Path of a rawfile.
     * @returns { boolean } Whether the path is a subdirectory in the **rawfile** directory.
     *     - **true**: The path is a subdirectory in the **rawfile** directory.
     *     - **false**: The path is not a subdirectory in the **rawfile** directory.
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
     * Obtains a **ResourceManager** object for loading differentiated resources. This API returns the result 
     * synchronously.
     * The resource configuration (including the language, color mode, resolution, and orientation) obtained by a common
     * **ResourceManager** object is determined by the system. With this API, an application can obtain resources of the
     * specified configuration (that is, differentiated resources), for example, dark color resources in light color 
     * mode.
     *
     * @param { Configuration } [configuration] - Resource configuration.<br>After obtaining the configuration of 
     *     differentiated resources through 
     *     [getOverrideConfiguration]{@link resourceManager.ResourceManager.getOverrideConfiguration}, modify the 
     *     configuration items as required, and then pass these items as input parameters to the API.<br>If no 
     *     configuration is specified, the current system configuration is used.
     * @returns { ResourceManager } **ResourceManager** object for loading differentiated resources.
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getOverrideResourceManager(configuration?: Configuration): ResourceManager;

    /**
     * Obtains the configuration of differentiated resources. This API returns the result synchronously. This API allows
     * a common **ResourceManager** object and a **ResourceManager** object obtained through 
     * [getOverrideResourceManager]{@link resourceManager.ResourceManager.getOverrideResourceManager} to obtain the 
     * configuration of differentiated resources.
     *
     * @returns { Configuration } Configuration of differentiated resources.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getOverrideConfiguration(): Configuration;

    /**
     * Updated configuration of differentiated resources. This API allows a common **ResourceManager** object and a 
     * **ResourceManager** object obtained through 
     * [getOverrideResourceManager]{@link resourceManager.ResourceManager.getOverrideResourceManager} to update the 
     * configuration of differentiated resources.
     *
     * @param { Configuration } configuration - Configuration of differentiated resources. After obtaining the 
     *     configuration of differentiated resources through 
     *     [getOverrideConfiguration]{@link resourceManager.ResourceManager.getOverrideConfiguration}, modify the 
     *     configuration items as required, and then pass these items as input parameters to the API.
     * @throws { BusinessError } 401 - If the input parameter invalid. Possible causes: Incorrect parameter types.
     * @syscap SystemCapability.Global.ResourceManager
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    updateOverrideConfiguration(configuration: Configuration): void;

    /**
     * Obtains the resource name based on the specified resource ID.
     *
     * @param { long } resId - Resource ID.
     * @returns { string } Resource name based on the specified resource ID
     * @throws { BusinessError } 9001001 - Invalid resource ID.
     * @syscap SystemCapability.Global.ResourceManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getResourceName(resId: long): string;
  }

  /**
   * File descriptor (fd) of the HAP where the rawfile is located.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type RawFileDescriptor = _RawFileDescriptor;

  /**
   * Resource information, including the resource ID, application package name, and module name. Generally, you can
   * use $r to obtain the resource information.
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