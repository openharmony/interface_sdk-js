./*
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
 * @file 壁纸
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';

/**
 * 壁纸管理服务为OpenHarmony系统服务，提供壁纸切换功能。从API 9开始壁纸管理的接口调整为系统API，壁纸的切换只能通过系统应用来完成。壁纸管理提供壁纸切换通道，使用壁纸的应用（如：桌面）需订阅壁纸变化通知并刷新壁纸显示。
 * 
 * > **说明：**
 * >
 * > 当前页面仅包含本模块的系统接口，其他公开接口参见[@ohos.wallpaper (壁纸)]{@link wallpaper}。
 *
 * @syscap SystemCapability.MiscServices.Wallpaper
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace wallpaper {
  /**
   * 定义壁纸颜色信息结构。
   *
   * @typedef RgbaColor
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  interface RgbaColor {
    /**
     * 表示红色值，范围为 0 到 255。
     *
     * @type { long }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    red: long;
    /**
     * 表示绿色值，范围为 0 到 255。
     *
     * @type { long }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    green: long;
    /**
     * 表示蓝色值，范围为 0 到 255。
     *
     * @type { long }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    blue: long;
    /**
     * 表示 alpha 值，范围为 0 到 255。
     *
     * @type { long }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    alpha: long;
  }

  /**
   * 定义壁纸的枚举类型。
   *
   * @enum { int } WallpaperType
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamic
   * @since 23 static
   */
  enum WallpaperType {
    /**
     * 主屏幕壁纸标识。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7 dynamic
     * @since 23 static
     */
    WALLPAPER_SYSTEM,
    /**
     * 锁屏壁纸标识。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7 dynamic
     * @since 23 static
     */
    WALLPAPER_LOCKSCREEN
  }

  /**
   * 定义壁纸的信息结构。
   *
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 23 static
   */
  interface WallpaperInfo {
    /**
     * 表示设备的折展状态。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    foldState: FoldState;
    /**
     * 表示设备的横竖屏状态。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    rotateState: RotateState;
    /**
     * 表示壁纸资源uri，只支持应用沙箱目录。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    source: string;
  }

  /**
   * 定义设备的折展状态枚举类型。
   *
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 23 static
   */
  enum FoldState {
    /**
     * 设备默认状态。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    NORMAL = 0,
    /**
     * 一次展开态。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    UNFOLD_ONCE_STATE = 1,
    /**
     * 二次展开态。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    UNFOLD_TWICE_STATE = 2
  }

  /**
   * 定义设备的横竖屏状态枚举类型。
   *
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 23 static
   */
  enum RotateState {
    /**
     * 设备默认为竖屏状态。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    PORTRAIT = 0,
    /**
     * 横屏状态。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    LANDSCAPE = 1
  }

  /**
   * 定义壁纸资源的枚举类型。
   *
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum WallpaperResourceType {
    /**
     * 默认为图片资源。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEFAULT,
    /**
     * 图片资源。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    PICTURE,
    /**
     * 视频资源。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    VIDEO,
    /**
     * 包资源。
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    PACKAGE
  }

  /**
   * 获取指定类型壁纸的主要颜色信息。
   *
   * @param { WallpaperType } WallpaperType -  壁纸类型。
   * @param { AsyncCallback<Array<RgbaColor>> } callback - 回调函数，返回壁纸的主要颜色信息。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getColors(wallpaperType: WallpaperType, callback: AsyncCallback<Array<RgbaColor>>): void;

  /**
   *获取指定类型壁纸的主要颜色信息。
   *
   * @param { WallpaperType } WallpaperType - 壁纸类型。
   * @returns { Promise<Array<RgbaColor>> } 返回壁纸的主要颜色信息。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getColors(wallpaperType: WallpaperType): Promise<Array<RgbaColor>>;

  /**
   * 获取指定类型壁纸的主要颜色信息。
   * 
   * > **说明：**
   * >
   * > 从 API version 9开始支持，从API version 23开始废弃。
   *
   * @param { WallpaperType } WallpaperType - 壁纸类型。
   * @returns { Array<RgbaColor> } 返回壁纸的主要颜色信息。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  function getColorsSync(wallpaperType: WallpaperType): Array<RgbaColor>;

  /**
   * 获取指定类型壁纸的ID。
   *
   * @param { WallpaperType } 壁纸类型。
   * @param { AsyncCallback<number> } 回调函数，返回壁纸的ID。如果配置了指定类型的壁纸就返回一个大于等于0的数，否则返回-1。取值范围是-1到（2^31-1）。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getId(wallpaperType: WallpaperType, callback: AsyncCallback<number>): void;

  /**
   * 获取指定类型壁纸的ID。
   *
   * @param { WallpaperType } 壁纸类型。
   * @returns { Promise<number> } 壁纸的ID。如果配置了这种壁纸类型的壁纸就返回一个大于等于0的数，否则返回-1。取值范围是-1到（2^31-1）。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getId(wallpaperType: WallpaperType): Promise<number>;

  /**
   * 获取指定类型的壁纸文件。
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } 壁纸类型。
   * @param { AsyncCallback<number> } 回调函数，调用成功则返回壁纸文件描述符ID，调用失败则返回error信息。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  function getFile(wallpaperType: WallpaperType, callback: AsyncCallback<number>): void;

  /**
   * 获取指定类型的壁纸文件。
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } 壁纸类型。
   * @returns { Promise<number> } 调用成功则返回壁纸文件描述符ID，调用失败则返回error信息。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  function getFile(wallpaperType: WallpaperType): Promise<number>;

  /**
   * 获取壁纸的最小高度值。
   *
   * @param { AsyncCallback<number> } 回调函数，返回壁纸的最小高度值，单位是像素。如果返回值等于0，说明没有设置壁纸，调用者应该使用默认显示的高度值代替。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getMinHeight(callback: AsyncCallback<number>): void;

  /**
   * 获取壁纸的最小高度值。
   *
   * @returns { Promise<number> } 返回壁纸的最小高度值，单位是像素。如果返回值等于0，说明没有设置壁纸，调用者应该使用默认显示的高度值代替。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getMinHeight(): Promise<number>;

  /**
   * 获取壁纸的最小高度值。
   *
   * @returns { int } 返回壁纸的最小高度值，单位是像素。如果返回值等于0，说明没有设置壁纸，调用者应该使用默认显示的高度值代替。
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getMinHeightSync(): int;

  /**
   * 获取壁纸的最小宽度值。
   *
   * @param { AsyncCallback<number> } 回调函数，壁纸的最小宽度值，单位是像素。如果返回值等于0，说明没有设置壁纸，调用者应该使用默认显示的宽度值代替。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getMinWidth(callback: AsyncCallback<number>): void;

  /**
   * 获取壁纸的最小宽度值。
   *
   * @returns { Promise<number> } 壁纸的最小宽度值，单位是像素。如果返回值等于0，说明没有设置壁纸，调用者应该使用默认显示的宽度值代替。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getMinWidth(): Promise<number>;

  /**
   * 获取壁纸的最小宽度值。
   *
   * @returns { int } 壁纸的最小宽度值，单位是像素。如果返回值等于0，说明没有设置壁纸，调用者应该使用默认显示的宽度值代替。
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getMinWidthSync(): int;

  /**
   * 是否允许应用改变当前用户的壁纸。
   *
   * @param { AsyncCallback<boolean> } 回调函数，返回是否允许应用改变当前用户的壁纸。如果允许返回true，否则返回false。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function isChangePermitted(callback: AsyncCallback<boolean>): void;

  /**
   * 是否允许应用改变当前用户的壁纸。
   *
   * @returns { Promise<boolean> } 返回是否允许应用改变当前用户的壁纸。如果允许返回true，否则返回false。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function isChangePermitted(): Promise<boolean>;

  /**
   * 是否允许用户设置壁纸。
   *
   * @param { AsyncCallback<boolean> } 回调函数，返回是否允许用户设置壁纸。如果允许返回true，否则返回false。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function isOperationAllowed(callback: AsyncCallback<boolean>): void;

  /**
   * 是否允许用户设置壁纸。
   *
   * @returns { Promise<boolean> } 异步回调函数，返回是否允许用户设置壁纸。如果允许返回true，否则返回false。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function isOperationAllowed(): Promise<boolean>;

  /**
   * 移除指定类型的壁纸，恢复为默认显示的壁纸。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { WallpaperType } WallpaperType - 壁纸类型。
   * @param { AsyncCallback<void> } callback - 回调函数，移除壁纸成功，error为undefined，否则返回error信息。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function reset(wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * 移除指定类型的壁纸，恢复为默认显示的壁纸。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { WallpaperType } WallpaperType - 壁纸类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function reset(wallpaperType: WallpaperType): Promise<void>;

  /**
   * 移除指定类型的壁纸，恢复为默认显示的壁纸。使用callback异步回调。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { WallpaperType } WallpaperType - 壁纸类型。
   * @param { AsyncCallback<void> } callback - 回调函数，移除壁纸成功，error为undefined，否则返回error信息。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function restore(wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * 移除指定类型的壁纸，恢复为默认显示的壁纸。使用promise异步回调。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { WallpaperType } WallpaperType - 壁纸类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function restore(wallpaperType: WallpaperType): Promise<void>;

  /**
   * 将指定资源设置为指定类型的壁纸。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string | image.PixelMap } PEG或PNG文件的Uri路径，或者PNG格式文件的位图。
   * @param { WallpaperType } WallpaperType - 壁纸类型。
   * @param { AsyncCallback<void> } callback - 回调函数，设置壁纸成功，error为undefined，否则返回error信息。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function setWallpaper(
    source: string | image.PixelMap,
    wallpaperType: WallpaperType,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 将指定资源设置为指定类型的壁纸。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string | image.PixelMap } JPEG或PNG文件的Uri路径，或者PNG格式文件的位图。
   * @param { WallpaperType } WallpaperType - 壁纸类型。
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function setWallpaper(source: string | image.PixelMap, wallpaperType: WallpaperType): Promise<void>;

  /**
   * 将指定资源设置为指定类型的壁纸。使用callback异步回调。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string | image.PixelMap } source - JPEG或PNG文件的Uri路径，或者PNG格式文件的位图。
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @param { AsyncCallback<void> } callback - 回调函数，设置壁纸成功，error为undefined，否则返回error信息。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setImage(source: string | image.PixelMap, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * 将指定资源设置为指定类型的壁纸。使用promise异步回调。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string | image.PixelMap } source - JPEG或PNG文件的Uri路径，或者PNG格式文件的位图。
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setImage(source: string | image.PixelMap, wallpaperType: WallpaperType): Promise<void>;

  /**
   * 获取壁纸图片的像素图。
   * 
   * > **说明：**
   * >
   * > 从 API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @param { AsyncCallback<image.PixelMap> } callback - 回调函数，调用成功则返回壁纸图片的像素图对象，调用失败则返回error信息。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getPixelMap(wallpaperType: WallpaperType, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * 获取壁纸图片的像素图。
   * 
   * > **说明：**
   * >
   * > 从 API version 7开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @returns { Promise<image.PixelMap> } 调用成功则返回壁纸图片的像素图对象，调用失败则返回error信息。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getPixelMap(wallpaperType: WallpaperType): Promise<image.PixelMap>;

  /**
   * 获取壁纸图片的像素图，且只能获取使用setImage设置的静态壁纸。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @param { AsyncCallback<image.PixelMap> } callback - 回调函数，调用成功则返回壁纸图片的像素图对象，调用失败则返回error信息。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getImage(wallpaperType: WallpaperType, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * 获取壁纸图片的像素图，且只能获取使用setImage设置的静态壁纸。使用promise异步回调。
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @returns { Promise<image.PixelMap> } 调用成功则返回壁纸图片的像素图对象，调用失败则返回error信息。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getImage(wallpaperType: WallpaperType): Promise<image.PixelMap>;

  /**
   * 将视频资源设置为桌面或锁屏的动态壁纸。使用callback异步回调。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string } source - mp4文件的Uri路径。
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @param { AsyncCallback<void> } callback - 回调函数，设置壁纸成功，error为undefined，否则返回error信息。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setVideo(source: string, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * 将视频资源设置为桌面或锁屏的动态壁纸。使用promise异步回调。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string } source - mp4文件的Uri路径。
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setVideo(source: string, wallpaperType: WallpaperType): Promise<void>;

  /**
   * 将指定的zip资源包设置为桌面或锁屏的壁纸资源，仅当com.ohos.sceneboard存在时，支持使用该接口。且具有ohos.permission.GET_WALLPAPER权限的应用可以访问/data/wallpaper/目
   * 录获取设置的资源。使用callback异步回调。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string } source - 指定的zip资源包。
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @param { AsyncCallback<void> } callback - 回调函数，设置壁纸成功，error为undefined，否则返回error信息。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setCustomWallpaper(source: string, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * 将指定的zip资源包设置为桌面或锁屏的壁纸资源，仅当com.ohos.sceneboard存在时，支持使用该接口。且具有ohos.permission.GET_WALLPAPER权限的应用可以访问/data/wallpaper/目
   * 录获取设置的资源。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string } source - 指定的zip资源包。
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setCustomWallpaper(source: string, wallpaperType: WallpaperType): Promise<void>;

  /**
   * 订阅壁纸颜色变化结果上报事件。不支持多线程并发调用。
   *
   * @param { 'colorChange' } 取值为'colorChange'，表示壁纸颜色变化结果上报事件。
   * @param { function } 壁纸颜色变化触发该回调方法，返回壁纸类型和壁纸的主要颜色信息。<br/>- colors：壁纸的主要颜色信息，其类型见RgbaColor。<br/>- resourceType：壁纸资源类型。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function on(type: 'colorChange', callback: (colors: Array<RgbaColor>, wallpaperType: WallpaperType) => void): void;

  /**
   * 定义壁纸变化的监听回调函数。
   *
   * @typedef { function } WallpaperChangeObserver
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @param { WallpaperResourceType } resourceType - 壁纸资源类型。
   * @param { string } [uri] - 壁纸资源地址。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 23 static
   */
  type WallpaperChangeObserver = (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void;

  /**
   * 订阅壁纸变化通知事件。不支持多线程并发调用。
   *
   * @param { 'wallpaperChange' } type - 事件回调类型。支持的事件为'wallpaperChange'，完成壁纸切换后触发该事件。
   * @param { function } callback - 壁纸变化触发该回调方法，返回壁纸类型和壁纸资源类型。<br/>- wallpaperType：壁纸类型。<br/>- resourceType：壁纸资源类型。<br/>
   *     - uri：壁纸资源地址。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(
    type: 'wallpaperChange',
    callback: (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void
  ): void;

  /**
   * 订阅壁纸变化通知事件。不支持多线程并发调用。
   *
   * @param { WallpaperChangeObserver } 表示壁纸变换的回调实例。
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onWallpaperChange(callback: WallpaperChangeObserver): void;

  /**
   * 取消订阅壁纸颜色变化结果上报事件。不支持多线程并发调用。
   *
   * @param { 'colorChange' } 取值为'colorChange'，表示取消订阅壁纸颜色变化结果上报事件。
   * @param { function } 表示要取消的壁纸颜色变化的回调，不填写该参数则取消订阅该type对应的所有回调。<br/>- colors：壁纸的主要颜色信息，其类型见RgbaColor。
   *     <br/>- resourceType：壁纸资源类型。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function off(type: 'colorChange', callback?: (colors: Array<RgbaColor>, wallpaperType: WallpaperType) => void): void;

  /**
   * 取消订阅壁纸变化通知事件。不支持多线程并发调用。
   *
   * @param { 'wallpaperChange' } type - 事件回调类型。支持的事件为'wallpaperChange'，完成壁纸切换后触发该事件。
   * @param { function } callback - 表示要取消的壁纸变化回调，不填写该参数则取消订阅该type对应的所有回调。<br/>- wallpaperType：壁纸类型。<br/>- resourceType：壁
   *     纸资源类型。<br/>- uri：壁纸资源地址。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(
    type: 'wallpaperChange',
    callback?: (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void
  ): void;

  /**
   * 取消订阅壁纸变化通知事件。不支持多线程并发调用。
   *
   * @param { WallpaperChangeObserver } 需要取消监听的事件回调，若不设置，则取消对该事件的所有监听。
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses 
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offWallpaperChange(callback?: WallpaperChangeObserver): void;

  /**
   * 设置设备所有形态的壁纸。使用promise异步回调。（包括折展状态、横竖屏状态、资源路径，其中NORMAL-PORT为必选）
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { Array<WallpaperInfo> } wallpaperInfos - 所有壁纸的信息结构。
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified.
   *     2.The first parameter type must be Array<WallpaperInfo>. The second type must be WallpaperType.
   *     3.The first parameter type must be Array<WallpaperInfo>, must include wallpaper with FoldState NORMAL and
   *     RotateState PORTRAIT.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 23 static
   */
  function setAllWallpapers(wallpaperInfos: Array<WallpaperInfo>, wallpaperType: WallpaperType): Promise<void>;

  /**
   * 获取指定壁纸类型、折展态、横竖屏的壁纸图片的像素图，如果指定的壁纸不存在，会逐步降级匹配，unfolded-land -> unfolded-port ->normal-port。使用promise异步回调。
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - 壁纸类型。
   * @param { FoldState } foldState - 折展状态类型。
   * @param { RotateState } rotateState - 横竖屏状态类型。
   * @returns { Promise<image.PixelMap> } 调用成功则返回壁纸图片的像素图对象，调用失败则返回error信息。
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified.
   *     2.The type must be WallpaperType, parameter range must be WALLPAPER_LOCKSCREEN or WALLPAPER_SYSTEM.
   *     3.The type must be FoldState, parameter range must be NORMAL or UNFOLD_ONCE_STATE or UNFOLD_TWICE_STATE.
   *     4.The type must be RotateState, parameter range must be PORTRAIT or LANDSCAPE.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses
   *     system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 23 static
   */
  function getWallpaperByState(wallpaperType: WallpaperType, foldState: FoldState, rotateState: RotateState): Promise<image.PixelMap>;
}

export default wallpaper;