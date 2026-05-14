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
 * @file
 * @kit AbilityKit
 */

/**
 * [module.json5配置文件](docroot://quick-start/module-configuration-file.md)中定义的权限详细信息，通过接口
 * [bundleManager.getPermissionDef]{@link ./../@ohos.bundle.bundleManager:bundleManager.getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>)}
 * 获取。
 * 
 * > **说明：**
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface PermissionDef {
  /**
   * 用户权限名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly permissionName: string;

  /**
   * [权限的授予方式](docroot://security/AccessToken/app-permission-mgmt-overview.md#授权方式)。0：表示用户授权，1：表示系统授权。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly grantMode: int;

  /**
   * 权限的标签ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * 描述权限的ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;
}