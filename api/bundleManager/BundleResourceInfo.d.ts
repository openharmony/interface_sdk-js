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
 * The module provides resource information of an application, such as the icon and label. The information can be
 * obtained by calling
 * [getBundleResourceInfo]{@link ./../@ohos.bundle.bundleResourceManager:bundleResourceManager.bundleResourceManager.getBundleResourceInfo(bundleName: string, resourceFlags?: int)}
 * .
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Resource
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface BundleResourceInfo {
  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Application icon, which is encoded using Base64.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * Application label.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * drawableDescriptor object of the application icon.
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
   * Index of an application clone.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;
}