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
 * The OverlayModuleInfo information can be obtained through
 * [overlay.getOverlayModuleInfo]{@link @ohos.bundle.overlay:overlay.getOverlayModuleInfo} to get the OverlayModuleInfo
 * information of the module with the overlay feature in the current application.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 10 dynamic
 * @since 23 static
 */
export interface OverlayModuleInfo {
  /**
   * Bundle name of the application to which the overlay feature module belongs.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Name of the overlay feature module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Name of the target module on which the overlay feature module takes effect, indicating the module whose resources
   * are to be replaced by the current overlay package.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly targetModuleName: string;

  /**
   * Priority of the overlay feature module. The value is an integer ranging from 1 to 100. A larger value indicates a
   * higher priority.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly priority: int;

  /**
   * Enabled or disabled state of the overlay feature module. The value is an integer ranging from 0 to 2, where 0
   * indicates the disabled state, 1 indicates the enabled state, and 2 indicates the invalid state.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10 dynamic
   * @since 23 static
   */
  readonly state: int;
}