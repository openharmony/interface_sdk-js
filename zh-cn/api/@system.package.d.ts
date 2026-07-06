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
 * > **NOTE**
 * >
 * > - The APIs of this module have been deprecated since API version 9. You are advised to use 
 * > [@ohos.bundle.bundleManager]{@link @ohos.bundle.bundleManager:bundleManager} instead.
 *
 * @file
 * @kit AbilityKit
 */

/**
 * > **说明：**
 * >
 * > 从API version 3开始支持，从API version 9开始废弃。
 * 
 * 指示应用包是否已安装。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 3 dynamiconly
 * @deprecated since 9
 */
export interface CheckPackageHasInstalledResponse {
  /**
   * 指示应用是否已安装。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 3 dynamiconly
   * @deprecated since 9
   */
  result: boolean;
}

/**
 * > **说明：**
 * >
 * > 从API version 3开始支持，从API version 9开始废弃。
 * 
 * 指示应用包是否已安装。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 3 dynamiconly
 * @deprecated since 9
 */
export interface CheckPackageHasInstalledOptions {
  /**
   * 应用Bundle名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 3 dynamiconly
   * @deprecated since 9
   */
  bundleName: string;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 3 dynamiconly
   * @deprecated since 9
   */
  success?: (data: CheckPackageHasInstalledResponse) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 3 dynamiconly
   * @deprecated since 9
   */
  fail?: (data: any, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 3 dynamiconly
   * @deprecated since 9
   */
  complete?: () => void;
}

/**
 * > **说明：**
 * >
 * > 从API version 3开始支持，从API version 9开始废弃。
 * 
 * 指示应用包是否已安装。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 3 dynamiconly
 * @deprecated since 9
 */
export default class Package {
  /**
   * 查询指定应用是否存在，或者原生应用是否安装。
   *
   * @param { CheckPackageHasInstalledOptions } options Options
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager#canOpenLink
   */
  static hasInstalled(options: CheckPackageHasInstalledOptions): void;
}