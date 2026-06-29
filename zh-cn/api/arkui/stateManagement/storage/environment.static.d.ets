'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/*
 * 用于指定环境变量名称及其默认值的键值对对象，作为[envProps]{@link Environment.envProps}参数传入。
 *
 * @file
 * @kit ArkUI
 */

/**
 * Defining the EnvPropsOptions interface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EnvPropsOptions {

  /**
   *  环境变量名称，支持的范围详见内置环境变量说明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  key: string;

  /**
   * 查询不到环境变量key，则使用defaultValue作为默认值存入AppStorage中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  defaultValue: int | long | double | string | boolean;
}

/**
 * Environment具体使用说明，详见[Environment(设备环境查询)](docroot://ui/state-management/arkts-environment.md)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Environment {

  /**
   * 将[Environment](docroot://ui/state-management/arkts-environment.md)的内置环境变量key
   * 存入[AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)中。
   * 如果系统中未查询到Environment环境变量key的值，则使用默认值value，存入成功，返回true。如果AppStorage中已经有对应的key，则返回false。
   * 
   * 所以建议在程序启动的时候调用该接口。
   * 
   * 在没有调用envProp的情况下，就使用AppStorage读取环境变量是错误的。
   *
   * @param { string } key - 环境变量名称，支持的范围详见内置环境变量说明。
   * @param { T } value - 查询不到环境变量key时，则使用value作为默认值存入AppStorage中。
   * @returns { boolean } 如果key对应的属性在AppStorage中存在，则返回false。不存在则在AppStorage中用value作为默认值创建key对应的属性，返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static envProp<T>(key: string, value: T): boolean;

  /**
   * 和[envProp]{@link Environment.envProp}类似，不同点在于参数为数组，可以一次性初始化多个数据。
   * 建议在应用启动时调用，将系统环境变量批量存入[AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)中。
   * 需注意的是，如果传入的dafultValue为
   * [ColorMode](docroot://ui/state-management-static/arkts-static-environment.md#environment内置参数)、
   * [LayoutDirection](docroot://ui/state-management-static/arkts-static-environment.md#environment内置参数)类型，
   * 或是数字，则需额外指定其具体类型。
   *
   * @param { EnvPropsOptions[] } props 系统环境变量和默认值的键值对的数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static envProps(props: EnvPropsOptions[]): void;

  /**
   * 返回环境变量的属性key的数组。
   *
   * @returns { Array<string> } 返回关联的系统项数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static keys(): Array<string>;
}