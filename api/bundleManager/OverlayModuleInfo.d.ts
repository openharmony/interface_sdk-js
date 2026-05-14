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
 * @kit AbilityKit
 */

/**
 * The module provides information about a module with the overlay feature. An application can obtain such information
 * through
 * [overlay.getOverlayModuleInfo]{@link ./../@ohos.bundle.overlay:overlay.getOverlayModuleInfo(moduleName: string)}.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 10 dynamic
 * @since 23 static
 */
export interface OverlayModuleInfo {
  /**
   * Bundle name of the application to which the module with the overlay feature belongs.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Name of the module with the overlay feature.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Name of the target module specified by the overlay feature, that is, the name of the module whose resources are to
   * be replaced by the overlay package.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly targetModuleName: string;

  /**
   * Priority of the module with the overlay feature. The value is an integer ranging from 1 to 100. A larger value
   * indicates a higher priority.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly priority: int;

  /**
   * Whether the module with the overlay feature is
   * [disabled]{@link ./../@ohos.bundle.overlay:overlay.setOverlayEnabled(moduleName:string, isEnabled: boolean)}. The
   * value **0** means that the module with the overlay feature is disabled, and **1** means the opposite.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly state: int;
}