/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * ElementName信息，通过接口
 * [Context.getElementName](docroot://reference/apis-ability-kit/js-apis-inner-app-context.md#contextgetelementname7)获取。
 * 
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[bundleManager-ElementName]{@link elementName:ElementName}替代。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead elementName:ElementName
 */
export interface ElementName {
  /**
   * 设备id值。
   *
   * @default -
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ElementName#deviceId
   */
  deviceId?: string;

  /**
   * 应用Bundle的名称。
   *
   * @default -
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ElementName#bundleName
   */
  bundleName: string;

  /**
   * Ability的名称。
   *
   * @default ability class name.
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ElementName#abilityName
   */
  abilityName: string;

  /**
   * 资源标识符。
   *
   * @default -
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ElementName#uri
   */
  uri?: string;

  /**
   * Ability的短名称。
   *
   * @default -
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.ElementName#shortName
   */
  shortName?: string;
}