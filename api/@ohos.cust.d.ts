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

import {AsyncCallback} from "./basic";

/**
 * Provides cust file path related APIS.
 *
 * @since 8
 * @sysCap SystemCapability.Customization.Cust
 */
declare namespace cust {
  /**
   * Get file from the highest priority config path which contains the given file name.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 8
   * @sysCap SystemCapability.Customization.Cust
   * @param pathSuffix the relative path of the config file.
   * @param type 0 for common file, 1 for future use.
   * @return Returns the path of the highest priority config file.
   */
  function getCfgFile(pathSuffix: string, type?: number, callback: AsyncCallback<string>);
  function getCfgFile(pathSuffix: string, type?: number): Promise<string>;

  /**
   * Get config files in device architecture, ordered by priority from low to high.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 8
   * @sysCap SystemCapability.Customization.Cust
   * @param pathSuffix Indicates the path of the file to open.
   * @param type 0 for common file, 1 for future use.
   * @return Returns paths of config files.
   */
  function getCfgFileList(pathSuffix: string, type?: number, callback: AsyncCallback<Array<string>);
  function getCfgFileList(pathSuffix: string, type?: number): Promise<Array<string>>;

  /**
   * Get config directories in device architecture, ordered by priority from low to high.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 8
   * @sysCap SystemCapability.Customization.Cust
   * @param type 0 for common file, 1 for future use.
   * @return Returns paths of config directories.
   */
  function getCfgDir(type?: number, callback: AsyncCallback<Array<string>>): void;
  function getCfgDir(type?: number): Promise<Array<string>>;
}

export default cust;