/*
* Copyright (c) 2024 Huawei Device Co., Ltd.
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
  * @kit LocalizationKit
 */

import lang from '../../arkts/@arkts.lang';
import collections from '../../arkts/@arkts.collections';

/**
 * 本模块提供SendableResource资源相关信息，包括应用包名、应用模块名、资源类型等。SendableResource实现了
 * [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)接口，支持跨线程传输，用于在多线程场景下访问应用资源。
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
interface SendableResource extends lang.ISendable {

  /**
   * 应用包名。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  bundleName: string;

  /**
   * 应用模块名。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  moduleName: string;

  /**
   * 资源ID，取值如下：
   * - 应用资源区间：[0x01000000, 0x06FFFFFF] 和 [0x08000000, 0xFFFFFFFF]，表示应用自身的资源ID。
   * - 系统资源区间：[0x07000000, 0x07FFFFFF]，表示系统预置的资源ID。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  id: number;

  /**
   * 资源参数，包括：资源名（string类型）、格式化接口替换值（按占位符顺序提供string或number）、复数接口量词（number类型，表示数量）。
   * 格式化接口的替换值用于字符串格式化时的参数替换，复数接口的量词用于选择多语言环境下的复数形式。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  params?: collections.Array <string | number>;

  /**
   * 资源类型，取值如下：
   * - 10001：color
   * - 10002：float
   * - 10003：string
   * - 10004：plural
   * - 10005：boolean
   * - 10006：intarray
   * - 10007：integer
   * - 10008：pattern
   * - 10009：strarray
   * - 20000：media
   * - 30000：rawfile
   * - 40000：symbol
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  type?: number;
}