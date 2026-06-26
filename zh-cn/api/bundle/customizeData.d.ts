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
 * 自定义元数据。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[Metadata]{@link ./../bundleManager/Metadata:Metadata}替代。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ./../bundleManager/Metadata:Metadata
 */
export interface CustomizeData {
  /**
   * 标识自定义数据项的键名称。
   *
   * @default Indicates the custom metadata name
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.Metadata#name
   */
  name: string;

  /**
   * 标识自定义数据项的值名称。
   *
   * @default Indicates the custom metadata value
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.Metadata#value
   */
  value: string;

  /**
   * 标识用户自定义数据格式，标签值为标识该数据的资源的索引值。
   *
   * @default Indicates the custom metadata resource
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.bundleManager/bundleManager.Metadata#resource
   */
  extra: string;
}