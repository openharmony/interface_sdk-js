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
import { AsyncCallback, Callback } from './basic.d.ts';

/**
* Provides interfaces to get system capability.
*
* @since 8
* @syscap SystemCapability.Developtools.Syscap
* @systemapi
*/

declare namespace systemCapability {
  /**
   * Get System Capability.
   *
   * @since 8
   * @systemapi
   * @syscap SystemCapability.Developtools.Syscap
   * @return system capability string.
   * @param callback indicates the system capability string result.
   */
  function getSystemCapability(callback: Callback<string>): void;
  function getSystemCapability(): Promise<string>;
}

export default systemCapability;

