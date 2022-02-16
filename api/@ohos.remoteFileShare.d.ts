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
 * Provides remote file share APIs
 *
 * @since 8
 * @syscap  SystemCapability.FileManagement.File.DistributedFile
 */

declare namespace remoteFileShare {
  /**
   * Create the remote share path of src share file.
   *
   * @since 8
   */
  function createSharePath(fd: number, cid: string, callback: AsyncCallback<number>): void;
  function createSharePath(fd: number, cid: string): Promise<number>;

  /**
   * set the SecurityLabel.
   *
   * @since 8
   */
  function setSecurityLabel(path:string, dataLevel:string, callback: AsyncCallback<void>): void;
  function setSecurityLabel(path:string, dataLevel:string): Promise<void>;

    /**
   * get the SecurityLabel.
   *
   * @since 8
   */
  function getSecurityLabel(path:string, callback: AsyncCallback<string>): void;
  function getSecurityLabel(path:string): Promise<string>;
}

export default remoteFileShare;
