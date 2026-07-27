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

/**
 * @file
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * 系统参数（SystemParameter）是为各系统服务提供的简单易用的键值对访问接口，各个系统服务可以定义系统参数来描述该服务的状态信息，或者通过系统参数来改变系统服务的行为。其基本操作原语为get和set，通过get可以查询系统参
 * 数的值，通过set可以修改系统参数的值。详细的系统参数设计原理及定义可参考[系统参数](docroot://../device-dev/subsystems/subsys-boot-init-sysparam.md)。
 * 
 * > **说明：**
 * > - 本模块接口从API version 9开始不再维护，建议使用新接口[@ohos.systemParameterEnhance](js-apis-system-parameterEnhance-sys.md)替代。
 * >
 * > - 本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > - 本模块接口为系统接口。
 * >
 * > - 由于系统参数都是各个系统服务的内部信息和控制参数，每个系统参数都有各自不同的DAC（Discretionary Access Control，自主访问控制）和MAC（Mandatory Access Control，强制访问控制）访问控制权限，三方应用不能使用此类接口。
 *
 * @syscap SystemCapability.Startup.SystemInfo
 * @systemapi Hide this for inner system use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace systemParameterEnhance {
  /**
   * 获取系统参数key对应的值。
   * 
   * > **说明：**
 	 * >
 	 * > getSync和get方法都用于获取系统参数值：
 	 * > - getSync：同步方法，直接返回系统参数值，适用于简单同步场景。
 	 * > - get：异步方法，使用callback或Promise异步返回结果，适用于需要异步处理的场景。
 	 * >
 	 * > 开发者应根据具体场景选择合适的方法。
   *
   * @param { string } key - 待查询的系统参数key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。
   * @param { string } def - def为所要获取的系统参数的默认值； <br> def为可选参数，仅当系统参数不存在时生效； <br> def可以传undefined或任意字符串值。
   * @returns { string } 系统参数值。 
   *     <br> 若key存在,返回设定的值。 
   *     <br> 若key不存在且未指定def或def为undefined，抛异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700101 - System parameter not found.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSync(key: string, def?: string): string;

  /**
   * 获取系统参数key对应的值，使用callback异步回调。
   *
   * @param { string } key - 待查询的系统参数key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。
   * @param { AsyncCallback<string> } callback - 回调函数，异步获取系统参数值。成功时err为undefined，data为系统参数值；失败时err为错误对象，data为undefined。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700101 - System parameter not found.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function get(key: string, callback: AsyncCallback<string>): void;

  /**
   * 获取系统参数Key对应的值，使用callback异步回调。
   *
   * @param { string } key - 待查询的系统参数Key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。
   * @param { string } def - def为所要获取的系统参数的默认值，仅当系统参数不存在时生效； <br> def可以传任意字符串值。
   * @param { AsyncCallback<string> } callback - 回调函数，异步获取系统参数值。成功时err为undefined，data为系统参数值；失败时err为错误对象，data为undefined。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700101 - System parameter not found.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function get(key: string, def: string, callback: AsyncCallback<string>): void;

  /**
   * 获取系统参数key对应的值，使用Promise异步回调。
   *
   * @param { string } key - 待查询的系统参数key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。
   * @param { string } def - def为所要获取的系统参数的默认值； <br> def为可选参数，仅当系统参数不存在时生效； <br> def可以传undefined或任意字符串值。
   * @returns { Promise<string> } Promise对象，用于异步获取结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700101 - System parameter not found.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function get(key: string, def?: string): Promise<string>;

  /**
   * 设置系统参数key对应的值。
   *
   * > **说明：**
 	 * >
 	 * > setSync和set方法都用于设置系统参数值：
 	 * > - setSync：同步方法，直接设置系统参数并立即返回，适用于简单同步场景。
 	 * > - set：异步方法，使用callback或Promise异步返回结果，适用于需要异步处理的场景。
 	 * >
 	 * > 开发者应根据具体场景选择合适的方法。
   * 
   * @param { string } key - 待设置的系统参数key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。
   * @param { string } value - 待设置的系统参数值。最大长度96字节（包括结束符）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700102 - Invalid system parameter value.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setSync(key: string, value: string): void;

  /**
   * 设置系统参数key对应的值，使用callback异步回调。
   *
   * @param { string } key - 待设置的系统参数key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。
   * @param { string } value - 待设置的系统参数值。最大长度96字节（包括结束符）。
   * @param { AsyncCallback<void> } callback - 回调函数，异步设置系统参数。成功时err为undefined；失败时err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700102 - Invalid system parameter value.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function set(key: string, value: string, callback: AsyncCallback<void>): void;

  /**
   * 设置系统参数key对应的值，使用Promise异步回调。
   *
   * @param { string } key - 待设置的系统参数key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。
   * @param { string } value - 待设置的系统参数值。最大长度96字节（包括结束符）。
   * @returns { Promise<void> } Promise实例，用于异步获取结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700102 - Invalid system parameter value.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function set(key: string, value: string): Promise<void>;
}

export default systemParameterEnhance;