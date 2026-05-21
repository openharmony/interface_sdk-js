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
 * > **NOTE**
 * >
 * > The initial APIs of this module are supported since API version 8. Newly added APIs will
 * > be marked with a superscript to indicate their earliest API version.
 * >
 * > The APIs of this module have been deprecated since API version 9. No substitute is provided.
 * >
 * > The APIs provided by this module are system APIs.
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
   * Used to obtain information when a bundle is installed.
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
   * Used to obtain information when a bundle is updated.
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
   * Used to obtain information when a bundle is uninstalled.
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