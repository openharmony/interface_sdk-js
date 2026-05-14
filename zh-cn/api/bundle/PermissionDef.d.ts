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
 * 配置文件中定义的权限详细信息。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[bundleManager-PermissionDef]{@link PermissionDef:PermissionDef}替代。
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead PermissionDef:PermissionDef
 */
export interface PermissionDef {
  /**
   * 权限名称。
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
   * 权限的授予模式。0表示安装后系统自动授予该权限，1表示使用时动态申请，用户授权后方可使用。
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
   * 权限的标签ID。
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
   * 描述权限的ID。
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