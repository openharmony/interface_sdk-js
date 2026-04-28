/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * DataUriUtils模块提供用于处理uri对象的能力，包括获取、绑定、删除和更新指定uri对象的路径末尾的ID。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace dataUriUtils {
  /**
   * 获取指定uri路径末尾的ID。
   *
   * @param { string } uri - 表示uri对象。
   * @returns { double } 返回uri路径末尾的ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getId(uri: string): double;

  /**
   * 将ID附加到uri的路径末尾。
   *
   * @param { string } uri - 表示uri对象。
   * @param { double } id - 表示要附加的ID。
   * @returns { string } 返回附加ID之后的uri对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function attachId(uri: string, id: double): string;

  /**
   * 删除指定uri路径末尾的ID。
   *
   * @param { string } uri - 表示要从中删除ID的uri对象。
   * @returns { string } 返回删除ID之后的uri对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteId(uri: string): string;

  /**
   * 更新指定uri中的ID。
   *
   * @param { string } uri - 表示uri对象
   * @param { double } id - 表示要更新的ID
   * @returns { string } 返回更新ID之后的uri对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function updateId(uri: string, id: double): string;
}

export default dataUriUtils;