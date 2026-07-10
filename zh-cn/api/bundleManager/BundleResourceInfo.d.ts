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

import { DrawableDescriptor } from './../@ohos.arkui.drawableDescriptor';

/**
 * 应用配置的图标和名称信息，可以通过
 * [getBundleResourceInfo]{@link ./../@ohos.bundle.bundleResourceManager:bundleResourceManager.getBundleResourceInfo(bundleName: string, resourceFlags?: int)}
 * 获取。
 * 
 * > **说明：**
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Resource
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface BundleResourceInfo {
  /**
   * 应用的包名。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * 应用图标，为Base64编码格式。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * 应用名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * 应用图标的drawableDescriptor对象。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 12 dynamic
   */
  readonly drawableDescriptor: DrawableDescriptor;

  /**
   * Indicates the drawable descriptor of this bundle icon
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 23 static
   */
  readonly drawableDescriptor: DrawableDescriptor | null;

  /**
   * 应用分身Id。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;
}