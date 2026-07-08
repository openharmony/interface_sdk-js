/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/**
 * 应用状态发生变化时回调的信息。
 * > **说明：**
 * >
 * > 本模块首批接口从API version 8 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > 从API version 9开始，该模块不再维护，暂无替代接口。
 * > 
 * > 本模块为系统接口。
 *
 * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.bundle.bundleMonitor/bundleMonitor
 */
export interface BundleStatusCallback {
  /**
   * 获取应用安装时的信息。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor/bundleMonitor.BundleChangedInfo
   */
  add: (bundleName: string, userId: number) => void;

  /**
   * 获取应用更新时的信息。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor/bundleMonitor.BundleChangedInfo
   */
  update: (bundleName: string, userId: number) => void;

  /**
   * 获取应用卸载时的信息。
   *
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleMonitor/bundleMonitor.BundleChangedInfo
   */
  remove: (bundleName: string, userId: number) => void;
}