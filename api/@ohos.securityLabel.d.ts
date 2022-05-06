/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
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

import {AsyncCallback, Callback} from "./basic";

/**
 * Provides securityLabel APIs
 *
 * @since 8
 * @syscap  SystemCapability.FileManagement.File.DistributedFile
 */

declare namespace securityLabel {
  /**
   * set the SecurityLabel.
   *
   * @since 8
   */
  function setSecurityLabel(path:string, dataLevel:string, callback: AsyncCallback<void>): void;
  function setSecurityLabel(path:string, dataLevel:string): Promise<void>;

  /**
   * set the SecurityLabelSync.
   *
   * @since 8
   */
   function setSecurityLabelSync(path:string, dataLevel:string): void;

    /**
   * get the SecurityLabel.
   *
   * @since 8
   */
  function getSecurityLabel(path:string, callback: AsyncCallback<string>): void;
  function getSecurityLabel(path:string): Promise<string>;

  /**
   * get the SecurityLabelSync.
   *
   * @since 8
   */
   function getSecurityLabelSync(path:string): string;
}

export default securityLabel;