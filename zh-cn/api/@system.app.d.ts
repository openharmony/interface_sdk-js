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
 * @file
 * @kit ArkUI
 */

/**
* 定义AppResponse信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @FaAndStageModel
 * @atomicservice [since 12]
 * @since 3 dynamiconly
 */
export interface AppResponse {
  /**
   * 表示应用的包名，用于标识应用的唯一性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 6 dynamiconly
   */
  appID: string;

  /**
   * 表示应用的名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 3 dynamiconly
   */
  appName: string;

  /**
   * 表示应用的版本名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 3 dynamiconly
   */
  versionName: string;

  /**
   * 表示应用的版本号。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 3 dynamiconly
   */
  versionCode: number;
}

/**
* 定义屏幕上可见接口的选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 3 dynamiconly
 */
export interface ScreenOnVisibleOptions {
  /**
   * 是否启动保活，默认值false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamiconly
   */
  visible?: boolean;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamiconly
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamiconly
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamiconly
   */
  complete?: () => void;
}

/**
* 定义RequestFullWindow接口的选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 3 dynamiconly
 */
export interface RequestFullWindowOptions {
  /**
   * 定义动画选项的持续时间，单位为毫秒。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamiconly
   */
  duration: number;
}

/**
* 定义App类的静态函数
*
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @FaAndStageModel
 * @atomicservice [since 12]
 * @since 3 dynamiconly
 */
export default class App {
  /**
   * 获取当前应用配置文件中声明的信息。在Stage模型下接口返回值为null。
   *
   * 从API version9开始，推荐使用
   * [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   * 。
   *
   * @returns { AppResponse } 定义AppResponse信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 3 dynamiconly
   */
  static getInfo(): AppResponse;

  /**
   * 退出当前Ability。在Stage模型下接口功能不生效。
   *
   * 从API version 7开始，推荐使用[`@ohos.ability.featureAbility`]{@link @ohos.ability.featureAbility:featureAbility}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 3 dynamiconly
   */
  static terminate(): void;

  /**
   * 定义屏幕唤醒时是否保持应用可见。
   *
   * 该接口从API version 8 开始废弃。
   *
   * @param { ScreenOnVisibleOptions } options - 当启动保活时，锁屏时将阻止系统返回桌面显示，以保持屏幕唤醒时应用可见。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   */
  static screenOnVisible(options?: ScreenOnVisibleOptions): void;

  /**
   * Requests the application to run in full window.
   * In some scenarios, such as semi-modal FA, the FA runs in non-full window.
   * In this case, you can call this API.
   * This API is invalid for an application already in full-window mode.
   *
   * @param { RequestFullWindowOptions } options Transition time from non-full window to full window, in milliseconds.
   * By default, the value is in direct proportion to the distance between the non-full window and the full window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead startAbility
   */
  static requestFullWindow(options?: RequestFullWindowOptions): void;

  /**
   * Set image cache capacity of decoded image count.
   * if not set, the application will not cache any decoded image.
   *
   * @param { number } value - capacity of decoded image count.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  static setImageCacheCount(value: number): void;

  /**
   * Set image cache capacity of raw image data size in bytes before decode.
   * if not set, the application will not cache any raw image data.
   *
   * @param { number } value - capacity of raw image data size in bytes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  static setImageRawDataCacheSize(value: number): void;

  /**
   * 设置图像文件在解码前在磁盘上的缓存大小（字节）。
   *
   * 如果未设置，应用程序将在磁盘上缓存 100MB 的图像文件。
   *
   * @param { number } value - 原始图像数据大小的容量，单位为字节。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 7 dynamiconly
   */
  static setImageFileCacheSize(value: number): void;
}