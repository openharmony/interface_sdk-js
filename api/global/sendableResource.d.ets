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
 * This module provides information related to `SendableResource`, including the application bundle package name,
 * application module name, and resource type. `SendableResource` implements the 
 * [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable) API 
 * and supports cross-thread transmission, enabling access to application resources in multi-thread scenarios.
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
interface SendableResource extends lang.ISendable {

  /**
   * Application bundle name.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  bundleName: string;

  /**
   * Application module name.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  moduleName: string;

  /**
   * Resource ID. The value ranges are as follows:
   * <br>- Application resource ranges: [0x01000000, 0x06FFFFFF] and [0x08000000, 0xFFFFFFFF], indicating the resource 
   * IDs of the application itself.
   * <br>- System resource range: [0x07000000, 0x07FFFFFF], indicating the resource IDs preset by the system.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  id: number;

  /**
   * Resource parameters, including the resource name (string type), replacement values for formatting APIs (string or 
   * number in the order of placeholders), and plural quantifier (number type, indicating the quantity). The 
   * replacement value of the formatting API is used for parameter substitution during string formatting, while the 
   * quantifier of the plural API is used to select the plural form in multilingual environments.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  params?: collections.Array <string | number>;

  /**
   * Resource type. The options are as follows:
   * <br>- 10001: color
   * <br>- 10002: float
   * <br>- 10003: string
   * <br>- 10004: plural
   * <br>- 10005: boolean
   * <br>- 10006: intarray
   * <br>- 10007: integer
   * <br>- 10008: pattern
   * <br>- 10009: strarray
   * <br>- 20000: media
   * <br>- 30000: rawfile
   * <br>- 40000: symbol
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  type?: number;
}