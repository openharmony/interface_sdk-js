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
 * @file OverlayModuleInfo
 * @kit AbilityKit
 */

/**
 * OverlayModuleInfo信息，可以通过[overlay.getOverlayModuleInfo]{@link @ohos.bundle.overlay:overlay.getOverlayModuleInfo}接口获取当前
 * 应用中具有overlay特征模块的OverlayModuleInfo信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 10 dynamic
 * @since 23 static
 */
export interface OverlayModuleInfo {
  /**
   * overlay特征模块所属应用的bundle名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * overlay特征模块名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * overlay特征模块作用目标的模块名称，表示当前overlay包的资源需要替换生效的模块名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly targetModuleName: string;

  /**
   * overlay特征模块的优先级。取值为整数，取值范围：[1, 100]，数值越大优先级越高。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly priority: int;

  /**
   * overlay特征模块的禁用启用状态。取值为整数，取值范围：[0, 2]，0代表禁用状态，1代表启用状态，2代表无效状态。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly state: int;
}