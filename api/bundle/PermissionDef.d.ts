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
 * The module provides permission details defined in the configuration file.
 *
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use
 * > [bundleManager-PermissionDef]{@link PermissionDef:PermissionDef} instead.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead PermissionDef:PermissionDef
 */
export interface PermissionDef {
  /**
   * Name of the permission.
   *
   * @default Indicates the name of this permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.PermissionDef#permissionName
   */
  permissionName: string;

  /**
   * Grant mode of the permission. The value **0** means that the system automatically grants the permission after the
   * application installation, and **1** means that the application needs to dynamically request the permission from the
   * user.
   *
   * @default Indicates the grant mode of this permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.PermissionDef#grantMode
   */
  grantMode: number;

  /**
   * ID of the permission label.
   *
   * @default Indicates the labelId of this permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.PermissionDef#labelId
   */
  labelId: number;

  /**
   * ID of the permission description.
   *
   * @default Indicates the descriptionId of this permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.PermissionDef#descriptionId
   */
  descriptionId: number;
}