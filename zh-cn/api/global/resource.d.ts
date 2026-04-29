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
 * @kit LocalizationKit
 */

/**
 * 本模块提供资源相关信息，包括应用包名、应用模块名、资源id等。
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface Resource {
  /**
   * 应用的bundle名称。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * 应用的module名称。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  moduleName: string;

  /**
   * 资源的id值，取值如下：
   * <br>- 应用资源区间：[0x01000000, 0x06FFFFFF] 和 [0x08000000, 0xFFFFFFFF]
   * <br>- 系统资源区间：[0x07000000, 0x07FFFFFF]
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  id: long;

  /**
   * 其他资源参数，包括资源名、格式化接口的替换值、复数接口的量词。
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  params?: any[];

  /**
   * Set params.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  params?: Array<string | int | long | double | Resource>;

  /**
   * 资源的类型，取值如下：
   * <br>- 10001：color
   * <br>- 10002：float
   * <br>- 10003：string
   * <br>- 10004：plural
   * <br>- 10005：boolean
   * <br>- 10006：intarray
   * <br>- 10007：integer
   * <br>- 10008：pattern
   * <br>- 10009：strarray
   * <br>- 20000：media
   * <br>- 30000：rawfile
   * <br>- 40000：symbol
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  type?: int;
}