/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

export class ParameterError extends Error {
    constructor(code: int) {
        this.code = code;
    }
    code: int;
}

/**
 * The interface of system parameters class.
 *
 * @namespace systemParameterEnhance
 * @syscap SystemCapability.Startup.SystemInfo
 * @systemapi Hide this for inner system use.
 * @since 20
 */
namespace systemParameterEnhance {
  loadLibrary("systemparameterenhance_ani.z")

  /**
   * Gets the value of the attribute with the specified key.
   *
   * @param { string } key Key of the system attribute, cannot exceed 128 characters,
   * only allow alphanumeric, plus '.', '-', '@', ':', or '_', don't allow '..'.
   * @param { string } def Default value.
   * @returns { string } the value of the parameter.
   * 2.incorrect parameter types; 3.parameter verification failed.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 20
   */
  export native function getSync(key: string, def?: string): string;

  /**
   * Gets the value of the attribute with the specified key.
   *
   * @param { string } key Key of the system attribute, cannot exceed 128 characters,
   * only allow alphanumeric, plus '.', '-', '@', ':', or '_', don't allow '..'.
   * @param { string } def Default value.
   * @returns { Promise<string> }, which is used to obtain the result asynchronously.
   * 2.incorrect parameter types; 3.parameter verification failed.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 20
   */
  export function get(key: string, def?: string): Promise<string> {
      return new Promise<string>((resolve, reject) => {
        resolve(getSync(key, def));
      });
  }
}
export default systemParameterEnhance;