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

/**
 * @file
 * @kit BasicServicesKit
 */

/**
 * class of wallpaper extension ability.
 *
 * @syscap SystemCapability.MiscServices.Wallpaper
 * @systemapi Hide this for inner system use.
 * @StageModelOnly
 * @since 10 dynamiconly
 * @deprecated since 23
 */
declare class WallpaperExtensionAbility {
  /**
   * 初始化壁纸扩展应用。在拉起Extension壁纸扩展应用时触发回调，执行初始化应用操作。不支持多线程并发调用。
   *
   * @param { object } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  onCreate(want: object): void;

  /**
   * 监听壁纸变化。在壁纸变化时触发回调。不支持多线程并发调用。
   *
   * @param { number } wallpaperType - 壁纸类型。主屏幕壁纸为0，锁屏壁纸为1。
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  onWallpaperChange(wallpaperType: number): void;

  /**
   * 清理壁纸扩展应用资源。在销毁壁纸扩展应用时触发回调，执行资源清理。不支持多线程并发调用。
   *
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  onDestroy(): void;
}

export default WallpaperExtensionAbility;
