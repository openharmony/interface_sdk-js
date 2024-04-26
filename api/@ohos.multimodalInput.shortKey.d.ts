/*
* Copyright (c) 2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @file
 * @kit InputKit
 */

import type { AsyncCallback } from './@ohos.base';
/**
 * Declares interfaces related to short key attributes.
 *
 * @namespace shortKey
 * @syscap SystemCapability.MultimodalInput.Input.ShortKey
 * @systemapi hide for inner use
 * @since 10
 */

declare namespace shortKey {
  /**
   * Sets short key down duration.
   * @param { string } businessKey - The key for business which should be applied to MMI.
   * @param { number } delay - Duration of short key press which should be limited to 0-4000ms.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.ShortKey
   * @systemapi hide for inner use
   * @since 10
   */
  function setKeyDownDuration(businessKey: string, delay: number, callback: AsyncCallback<void>): void;

  /**
   * Sets short key down duration.
   * @param { string } businessKey - The key for business which should be applied to MMI.
   * @param { number } delay - Duration of short key press which should be limited to 0-4000ms.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.ShortKey
   * @systemapi hide for inner use
   * @since 10
   */
  function setKeyDownDuration(businessKey: string, delay: number): Promise<void>;

}
export default shortKey;