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
 * @file PermissionDef
 * @kit AbilityKit
 */

/**
 * The module provides permission details defined in the
 * [module.json5](docroot://quick-start/module-configuration-file.md) file. The information can be obtained using
 * [bundleManager.getPermissionDef]{@link @ohos.bundle.bundleManager:bundleManager.getPermissionDef}.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface PermissionDef {
  /**
   * Permission name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly permissionName: string;

  /**
   * [Grant mode of the permission](docroot://security/AccessToken/app-permission-mgmt-overview.md#authorization-mode).
   * The value **0** means user authorization, and **1** means system authorization.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly grantMode: int;

  /**
   * Resource ID of the permission label, used to display the permission name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * Resource ID of the permission description.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;
}