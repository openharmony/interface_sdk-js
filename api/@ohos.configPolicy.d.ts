/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * The **configPolicy** module provides APIs for obtaining the corresponding directory and file path based on the 
 * predefined custom configuration level.
 * 
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.Customization.ConfigPolicy
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace configPolicy {
  /**
   * Define followXMode.
   * 
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum FollowXMode {
    /**
     * Files are searched based on the follow rules configured in the **followx_file_list.cfg** file at each 
     * configuration level.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * No follow rule is used even if the **followx_file_list.cfg** file exists.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NO_RULE_FOLLOWED = 1,

    /**
     * Files are searched in **etc/carrier/${opkey}** at each configuration level based on the opkey of the default 
     * card.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SIM_DEFAULT = 10,

    /**
     * Files are searched in **etc/carrier/${opkey}** at each configuration level based on the opkey of card 1.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SIM_1 = 11,

    /**
     * Files are searched in **etc/carrier/${opkey}** at each configuration level based on the opkey of card 2.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SIM_2 = 12,

    /**
     * In user-defined mode, configuration files are obtained based on the follow rule provided by **extra**, and the 
     * **followx_file_list.cfg** file at each configuration level is ignored.
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    USER_DEFINED = 100
  }

  /**
   * Obtains the path of the configuration file with the highest priority. This API uses an asynchronous callback to 
   * return the result.
   * For example, if the paths of **config.xml** on the device are **\/system/etc/config.xml** and 
   * **\/sys_pod/etc/config.xml** in ascending order of priority, **\/sys_pod/etc/config.xml** 
   * is returned.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { AsyncCallback<string> } callback - Callback used to return the result. If the configuration file path is
   *     successfully obtained, **err** is **undefined**, and **data** is the path of the configuration file with the
   *     highest priority. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string, callback: AsyncCallback<string>): void;
  
  /**
   * Obtains the path of the configuration file with the highest priority. This API uses a promise to return the result.
   *
   * @param { string } relPath - Name of the configuration file.
   * @returns { Promise<string> } Promise used to return the path of the configuration file with the highest priority.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string): Promise<string>;

  /**
   * Obtains the path of the configuration file with the highest priority based on the provided follow mode. This API 
   * uses an asynchronous callback to return the result.
   * For example, if the paths of **config.xml** on the device are **\/system/etc/config.xml**, 
   * **\/sys_pod/etc/config.xml**, and **\/sys_pod/etc/carrier/46060/etc/config.xml** in 
   * ascending order of priority, the default opkey of the device is **46060**, and **followMode** is set to 
   * **configPolicy.FollowXMode.SIM_DEFAULT**, 
   * the final return value is **\/sys_pod/etc/carrier/46060/etc/config.xml**.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { FollowXMode } followMode - Follow mode.
   * @param { AsyncCallback<string> } callback - Callback used to return the result. If the configuration file path is
   *     successfully obtained, **err** is **undefined**, and **data** is the path of the configuration file with the
   *     highest priority. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string, followMode: FollowXMode, callback: AsyncCallback<string>): void;

  /**
   * Obtains the path of the configuration file with the highest priority based on the provided follow mode. This API 
   * uses an asynchronous callback to return the result.
   * For example, if the paths of **config.xml** on the device are **\/system/etc/config.xml**, 
   * **\/sys_pod/etc/config.xml**, and **\/sys_pod/etc/carrier/46060/etc/config.xml** in 
   * ascending order of priority, the opkey of the device card 1 is **46060**, **followMode** is set to 
   * **configPolicy.FollowXMode.USER_DEFINED**, and the custom follow rule is **"etc/carrier/${telephony.sim.opkey0}"**,
   * the final return value is **\/sys_pod/etc/carrier/46060/etc/config.xml**.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { FollowXMode } followMode - Follow mode.
   * @param { string } extra - Custom follow rule. This parameter is valid only when **followMode** is set to
   *     [USER_DEFINED]{@link configPolicy.FollowXMode}.
   * @param { AsyncCallback<string> } callback - Callback used to return the result. If the configuration file path is
   *     successfully obtained, **err** is **undefined**, and **data** is the path of the configuration file with the
   *     highest priority. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string, followMode: FollowXMode, extra: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains the path of the configuration file with the highest priority based on the provided follow mode. This API 
   * uses a promise to return the result.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { FollowXMode } followMode - Follow mode.
   * @param { string } extra - Custom follow rule. This parameter is valid only when **followMode** is set to
   *     [USER_DEFINED]{@link configPolicy.FollowXMode}.
   * @returns { Promise<string> } Promise used to return the path of the configuration file with the highest priority.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string, followMode: FollowXMode, extra?: string): Promise<string>;

  /**
   * Obtains the path of the configuration file with the highest priority based on the provided follow mode.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { FollowXMode } followMode - Follow mode. The default value is [DEFAULT]{@link configPolicy.FollowXMode} if
   *     this parameter is not set.
   * @param { string } extra - Custom follow rule. This parameter is valid only when **followMode** is set to
   *     [USER_DEFINED]{@link configPolicy.FollowXMode}.
   * @returns { string } The path of the configuration file with the highest priority obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getOneCfgFileSync(relPath: string, followMode?: FollowXMode, extra?: string): string;

  /**
   * Obtains a list of all files with the specified names, in ascending order of priority. This API uses an asynchronous
   * callback to return the result.
   * For example, if the paths of **config.xml** on the device are **\/system/etc/config.xml** and 
   * **\/sys_pod/etc/config.xml** in ascending order of priority, 
   * **\/system/etc/config.xml, /sys_pod/etc/config.xml** is returned.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result. If the file list is
   *     successfully obtained, **err** is **undefined**, and **data** is the obtained file list. Otherwise, **err** is
   *     an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains a list of all files of a specified file name based on the provided follow mode, in ascending order of 
   * priority. This API uses an asynchronous callback to return the result.
   * For example, if the paths of **config.xml** on the device are **\/system/etc/config.xml**, 
   * **\/sys_pod/etc/config.xml**, and **\/sys_pod/etc/carrier/46060/etc/config.xml** in 
   * ascending order of priority, the default opkey of the device is **46060**, and **followMode** is set to 
   * **configPolicy.FollowXMode.SIM_DEFAULT**, the return value is 
   * **\/system/etc/config.xml, /sys_pod/etc/config.xml, /sys_pod/etc/carrier/46060/etc/config.xml**.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { FollowXMode } followMode - Follow mode.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result. If the file list is
   *     successfully obtained, **err** is **undefined**, and **data** is the obtained file list. Otherwise, **err** is
   *     an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string, followMode: FollowXMode, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains a list of all files of a specified file name based on the provided follow mode, in ascending order of 
   * priority. This API uses an asynchronous callback to return the result.
   * For example, if the paths of **config.xml** on the device are **\/system/etc/config.xml**, 
   * **\/sys_pod/etc/config.xml**, and **\/sys_pod/etc/carrier/46060/etc/config.xml** in 
   * ascending order of priority, the opkey of the device card 1 is **46060**, **followMode** is set to 
   * **configPolicy.FollowXMode.USER_DEFINED**, and the custom follow rule is 
   * **"etc/carrier/${telephony.sim.opkey0}"**, the return value is 
   * **\/system/etc/config.xml, /sys_pod/etc/config.xml, /sys_pod/etc/carrier/46060/etc/config.xml**.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { FollowXMode } followMode - Follow mode.
   * @param { string } extra - Custom follow rule. This parameter is valid only when **followMode** is set to
   *     [USER_DEFINED]{@link configPolicy.FollowXMode}.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result. If the file list is
   *     successfully obtained, **err** is **undefined**, and **data** is the obtained file list. Otherwise, **err** is
   *     an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string, followMode: FollowXMode, extra: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains a list of all files with the specified names, in ascending order of priority. This API uses a promise to 
   * return the result.
   *
   * @param { string } relPath - Name of the configuration file.
   * @returns { Promise<Array<string>> } Promise used to return the file list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string): Promise<Array<string>>;

  /**
   * Obtains a list of all files of a specified file name based on the provided follow mode, in ascending order of 
   * priority. This API uses a promise to return the result.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { FollowXMode } followMode - Follow mode.
   * @param { string } extra - Custom follow rule. This parameter is valid only when **followMode** is set to
   *     [USER_DEFINED]{@link configPolicy.FollowXMode}.
   * @returns { Promise<Array<string>> } Promise used to return the file list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string, followMode: FollowXMode, extra?: string): Promise<Array<string>>;

  /**
   * Obtains a list of all files of a specified file name based on the provided follow mode, in ascending order of 
   * priority.
   *
   * @param { string } relPath - Name of the configuration file.
   * @param { FollowXMode } followMode - Follow mode. The default value is [DEFAULT]{@link configPolicy.FollowXMode} if
   *     this parameter is not set.
   * @param { string } extra - Custom follow rule. This parameter is valid only when **followMode** is set to
   *     [USER_DEFINED]{@link configPolicy.FollowXMode}.
   * @returns { Array<string> } List of configuration files obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgFilesSync(relPath: string, followMode?: FollowXMode, extra?: string): Array<string>;

  /**
   * Obtains a list of configuration level directories, in ascending order of priority. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result. If the list of configuration
   *     level directories is successfully obtained, <strong>err</strong> is <strong>undefined</strong>, 
   *     and <strong>data</strong> is the obtained list. Otherwise, <strong>err</strong> is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCfgDirList(callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains a list of configuration level directories, in ascending order of priority. This API uses a promise to 
   * return the result.
   *
   * @returns { Promise<Array<string>> } Promise used to return the list of configuration level directories.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCfgDirList(): Promise<Array<string>>;

  /**
   * Obtains a list of configuration level directories, in ascending order of priority.
   *
   * @returns { Array<string> } Obtains the list of configuration level directories. This API returns the result
   *     synchronously.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgDirListSync(): Array<string>;
}

export default configPolicy;