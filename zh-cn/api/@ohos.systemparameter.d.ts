/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * 系统参数（SystemParameter）是为各系统服务提供的简单易用的键值对访问接口，各个系统服务可以定义系统参数来描述该服务的状态信息，或者通过系统参数来改变系统服务的行为。其基本操作原语为get和set，通过get可以查询系统参
 * 数的值，通过set可以修改系统参数的值。
 * 
 * 详细的系统参数设计原理及定义可参考[系统参数](docroot://../device-dev/subsystems/subsys-boot-init-sysparam.md)。
 * 
 * > **说明：**
 * >
 * > - 本模块接口从API version 9开始不再维护，建议使用新接口
 * > [@ohos.systemParameterEnhance]{@link @ohos.systemParameterEnhance:systemParameterEnhance}替代。
 * >
 * > - 本模块接口为系统接口。
 * >
 * > - 由于系统参数都是各个系统服务的内部信息和控制参数，每个系统参数都有各自不同的DAC和MAC访问控制权限，三方应用不能使用此类接口。
 *
 * @syscap SystemCapability.Startup.SystemInfo
 * @systemapi Hide this for inner system use.
 * @since 6 dynamiconly
 * @deprecated since 9
 * @useinstead null
 */
declare namespace systemParameter {
  /**
   * 获取系统参数Key对应的值。
   *
   * @param { string } key - 待查询的系统参数Key。
   * @param { string } def - def为所要获取的系统参数的默认值。 <br> def为可选参数，仅当系统参数不存在时生效。 <br>def可以传undefined或自定义的任意值。
   * @returns { string } 系统参数值。
   *     <br> 若key存在,返回设定的值。
   *     <br> 若key不存在且def有效，返回def；若未指定def或def无效(如undefined)，返回空字符串。
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getSync(key: string, def?: string): string;

  /**
   * 获取系统参数Key对应的值，使用callback异步回调。
   *
   * @param { string } key - 待查询的系统参数Key。
   * @param { AsyncCallback<string> } callback - 回调函数。
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function get(key: string, callback: AsyncCallback<string>): void;

  /**
   * 获取系统参数Key对应的值，使用callback异步回调。
   *
   * @param { string } key - 待查询的系统参数Key。
   * @param { string } def - 默认值。
   * @param { AsyncCallback<string> } callback - 回调函数。
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function get(key: string, def: string, callback: AsyncCallback<string>): void;

  /**
   * 获取系统参数Key对应的值，使用Promise异步回调。
   *
   * @param { string } key - 待查询的系统参数Key。
   * @param { string } def - def为所要获取的系统参数的默认值。 <br> def为可选参数，仅当系统参数不存在时生效。 <br> def可以传undefined或自定义的任意值。
   * @returns { Promise<string> } Promise示例，用于异步获取结果。
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function get(key: string, def?: string): Promise<string>;

  /**
   * 设置系统参数Key对应的值。
   *
   * @param { string } key - 待设置的系统参数Key。
   * @param { string } value - 待设置的系统参数值。
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function setSync(key: string, value: string): void;

  /**
   * 设置系统参数Key对应的值，使用callback异步回调。
   *
   * @param { string } key - 待设置的系统参数Key。
   * @param { string } value - 待设置的系统参数值。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function set(key: string, value: string, callback: AsyncCallback<void>): void;

  /**
   * 设置系统参数Key对应的值，使用Promise异步回调。
   *
   * @param { string } key - 待设置的系统参数Key。
   * @param { string } value - 待设置的系统参数值。
   * @returns { Promise<void> } Promise示例，用于异步获取结果。
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function set(key: string, value: string): Promise<void>;
}

export default systemParameter;