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
 * 配置策略提供按系统预定义的定制配置层级获取对应目录和文件路径的能力。
 * 
 * > **说明：**
 * >
 * > 本模块接口均为系统接口。
 *
 * @syscap SystemCapability.Customization.ConfigPolicy
 * @systemapi
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace configPolicy {
  /**
   *
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum FollowXMode {
    /**
     * 默认模式，会根据各配置层级下的followx_file_list.cfg文件配置的跟随规则进行文件查找。
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 不跟随模式，不会使用任何跟随规则，即使存在followx_file_list.cfg文件。
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NO_RULE_FOLLOWED = 1,

    /**
     * 跟随默认卡模式，会根据默认卡的opkey在各配置层级下的etc/carrier/${opkey}下查找文件。
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SIM_DEFAULT = 10,

    /**
     * 跟随卡1模式，会根据卡1的opkey在各配置层级下的etc/carrier/${opkey}下查找文件。
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SIM_1 = 11,

    /**
     * 跟随卡2模式，会根据卡2的opkey在各配置层级下的etc/carrier/${opkey}下查找文件。
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SIM_2 = 12,

    /**
     * 用户自定义模式，会根据入参extra提供的跟随规则进行配置文件获取，忽略各配置层级下的followx_file_list.cfg文件。
     *
     * @syscap SystemCapability.Customization.ConfigPolicy
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    USER_DEFINED = 100
  }

  /**
   * 获取指定文件名优先级最高的配置文件路径。使用callback异步回调。
   * 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml，最终返回优先级最高的是：/sys_pod/etc/config.xml。
   *
   * @param { string } relPath - 配置文件名。
   * @param { AsyncCallback<string> } callback - 回调函数。当获取配置文件路径成功，err为undefined，data为获取到的优先级最高的配置文件路径；否则err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string, callback: AsyncCallback<string>): void;

  /**
   * 根据提供的跟随模式获取指定文件名优先级最高的配置文件路径。使用callback异步回调。
   * 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、/sys_pod/etc/carrier/46060/etc/
   * config.xml。设备默认卡opkey为46060，设置的followMode为configPolicy.FollowXMode.SIM_DEFAULT。最终返回的是：/sys_pod/etc/carrier/46060/
   * etc/config.xml。
   *
   * @param { string } relPath - 配置文件名。
   * @param { FollowXMode } followMode - 跟随模式。
   * @param { AsyncCallback<string> } callback - 回调函数。当获取配置文件路径成功，err为undefined，data为获取到的优先级最高的配置文件路径；否则err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string, followMode: FollowXMode, callback: AsyncCallback<string>): void;

  /**
   * 根据跟随模式获取指定文件优先级最高的配置文件路径。使用callback异步回调。
   * 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、/sys_pod/etc/carrier/46060/etc/
   * config.xml。设备卡1的opkey为46060，设置的followMode为configPolicy.FollowXMode.USER_DEFINED，自定义跟随规则为"etc/carrier/${
   * telephony.sim.opkey0}"。最终返回的是：/sys_pod/etc/carrier/46060/etc/config.xml。
   *
   * @param { string } relPath - 配置文件名。
   * @param { FollowXMode } followMode - 跟随模式。
   * @param { string } extra - 用户自定义跟随规则，仅在followMode为[USER_DEFINED]{@link configPolicy.FollowXMode}时有效。
   * @param { AsyncCallback<string> } callback - 回调函数。当获取配置文件路径成功，err为undefined，data为获取到的优先级最高的配置文件路径；否则err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string, followMode: FollowXMode, extra: string, callback: AsyncCallback<string>): void;

  /**
   * 获取指定文件名优先级最高的配置文件路径。使用Promise异步回调。
   *
   * @param { string } relPath - 配置文件名。
   * @returns { Promise<string> } Promise对象，返回优先级最高的配置文件路径。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string): Promise<string>;

  /**
   * 根据提供的跟随模式，获取指定文件名优先级最高的配置文件路径。使用Promise异步回调。
   *
   * @param { string } relPath - 配置文件名。
   * @param { FollowXMode } followMode - 跟随模式。
   * @param { string } extra - 用户自定义跟随规则，仅在followMode为[USER_DEFINED]{@link configPolicy.FollowXMode}时有效。
   * @returns { Promise<string> } Promise对象，返回优先级最高的配置文件路径。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getOneCfgFile(relPath: string, followMode: FollowXMode, extra?: string): Promise<string>;

  /**
   * 根据提供的跟随模式，获取指定文件名优先级最高的配置文件路径。
   *
   * @param { string } relPath - 配置文件名。
   * @param { FollowXMode } followMode - 跟随模式，不设置时，默认使用[DEFAULT]{@link configPolicy.FollowXMode}。
   * @param { string } extra - 用户自定义跟随规则，仅在followMode为[USER_DEFINED]{@link configPolicy.FollowXMode}时有效。
   * @returns { string } 返回优先级最高的配置文件路径。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getOneCfgFileSync(relPath: string, followMode?: FollowXMode, extra?: string): string;

  /**
   * 获取指定文件名的所有文件列表，按优先级从低到高。使用callback异步回调。
   * 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml。最终返回的是：/system/etc/config.xml, /
   * sys_pod/etc/config.xml。
   *
   * @param { string } relPath - 配置文件名。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数。当获取文件列表成功，err为undefined，data为获取到的文件列表；否则err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * 根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。使用callback异步回调。
   * 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、/sys_pod/etc/carrier/46060/etc/
   * config.xml。设备默认卡opkey为46060，设置的followMode为configPolicy.FollowXMode.SIM_DEFAULT。最终返回的是：/system/etc/config.xml, /
   * sys_pod/etc/config.xml, /sys_pod/etc/carrier/46060/etc/config.xml。
   *
   * @param { string } relPath - 配置文件名。
   * @param { FollowXMode } followMode - 跟随模式。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数。当获取文件列表成功，err为undefined，data为获取到的文件列表；否则err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string, followMode: FollowXMode, callback: AsyncCallback<Array<string>>): void;

  /**
   * 根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。使用callback异步回调。
   * 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、/sys_pod/etc/carrier/46060/etc/
   * config.xml。设备卡1的opkey为46060，设置的followMode为configPolicy.FollowXMode.USER_DEFINED，自定义跟随规则为"etc/carrier/${
   * telephony.sim.opkey0}"。最终返回的是：/system/etc/config.xml, /sys_pod/etc/config.xml, /sys_pod/etc/carrier/46060/etc/
   * config.xml。
   *
   * @param { string } relPath - 配置文件名。
   * @param { FollowXMode } followMode - 跟随模式。
   * @param { string } extra - 用户自定义跟随规则，仅在followMode为[USER_DEFINED]{@link configPolicy.FollowXMode}时有效。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数。当获取文件列表成功，err为undefined，data为获取到的文件列表；否则err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string, followMode: FollowXMode, extra: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取指定文件名的所有文件列表，按优先级从低到高。使用Promise异步回调。
   *
   * @param { string } relPath - 配置文件名。
   * @returns { Promise<Array<string>> } Promise对象，返回文件列表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string): Promise<Array<string>>;

  /**
   * 根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。使用Promise异步回调。
   *
   * @param { string } relPath - 配置文件名。
   * @param { FollowXMode } followMode - 跟随模式。
   * @param { string } extra - 用户自定义跟随规则，仅在followMode为[USER_DEFINED]{@link configPolicy.FollowXMode}时有效。
   * @returns { Promise<Array<string>> } Promise对象，返回文件列表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgFiles(relPath: string, followMode: FollowXMode, extra?: string): Promise<Array<string>>;

  /**
   * 根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。
   *
   * @param { string } relPath - 配置文件名。
   * @param { FollowXMode } followMode - 跟随模式，不设置时，默认使用[DEFAULT]{@link configPolicy.FollowXMode}。
   * @param { string } extra - 用户自定义跟随规则，仅在followMode为[USER_DEFINED]{@link configPolicy.FollowXMode}时有效。
   * @returns { Array<string> } 返回文件列表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgFilesSync(relPath: string, followMode?: FollowXMode, extra?: string): Array<string>;

  /**
   * 获取配置层级目录列表，按优先级从低到高。使用callback异步回调。
   *
   * @param { AsyncCallback<Array<string>> } callback - 回调函数。当获取配置层级目录列表成功，err为undefined，data为获取到的配置层级目录列表；否则err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCfgDirList(callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取配置层级目录列表，按优先级从低到高。使用Promise异步回调。
   *
   * @returns { Promise<Array<string>> } Promise对象，返回配置层级目录列表。
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCfgDirList(): Promise<Array<string>>;

  /**
   * 获取配置层级目录列表，按优先级从低到高。
   *
   * @returns { Array<string> } 返回配置层级目录列表。
   * @syscap SystemCapability.Customization.ConfigPolicy
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getCfgDirListSync(): Array<string>;
}

export default configPolicy;