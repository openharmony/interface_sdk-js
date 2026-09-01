'use static'
/*
 * Copyright (C) 2026 Huawei Device Co., Ltd.
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
 状态管理
 * @file
 状态管理
 * @kit ArkUI
 */

import { StorageDefaultCreator } from './persistenceV2';

/**
 * 状态管理模块提供了应用程序动态刷新、UI数据存储、使能数据观察等能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class AppStorageV2 {
  /**
   * 将键值对数据存储在应用内存中。如果给定的key已经存在于[AppStorageV2](docroot://ui/state-management-static/arkts-static-appstoragev2.md)中，返回对应
   * 的值；否则，通过获取默认值的构造器构造默认值，存储后返回。
   * 
   * > **说明：**
   * 
   * > - 如果数据已存储在AppStorageV2中，可省略默认构造器，获取存储的数据；否则必须指定默认构造器，不指定将导致应用异常。
   * >
   * > - key相同，connect类型不同的数据会导致应用异常，开发者需要确保类型匹配。
   * >
   * > - 建议key使用有意义的值，可由字母、数字和下划线组成，长度不超过255字符，避免使用非法字符或空字符。
   *
   * @param { Class } ttype - 指定的类型。
   * @param { string } key - 指定的key。
   * @param { StorageDefaultCreator<T> } [defaultCreator] - 获取默认值的构造器，默认值为undefined。
   * @returns { T | undefined } 创建或获取AppStorageV2数据成功时，返回数据；否则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public static connect<T extends object>(ttype: Class, key: string,
    defaultCreator?: StorageDefaultCreator<T>): T | undefined;

  /**
   * 将键值对数据存储在应用内存中。如果给定的ttype已经存在于[AppStorageV2](docroot://ui/state-management-static/arkts-static-appstoragev2.md)中，返回
   * 对应的值；否则，通过获取默认值的构造器构造默认值，存储后返回。
   * 
   * > **说明：**
   * 
   * > - ttype使用Class.from\<classname\>()方法获得。
   * >
   * > - 未传入key时，默认使用ttype的name作为key。
   * >
   * > - 如果数据已存储在AppStorageV2中，可省略默认构造器，获取存储的数据；否则必须指定默认构造器，不指定将导致应用异常。
   *
   * @param { Class } ttype - 指定的类型。
   * @param { StorageDefaultCreator<T> } [defaultCreator] - 获取默认值的构造器，默认值为undefined。
   * @returns { T | undefined } 创建或获取AppStorageV2数据成功时，返回数据；否则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public static connect<T extends object>(ttype: Class, defaultCreator?: StorageDefaultCreator<T>): T | undefined;

  /**
   * 将指定的键值对数据从[AppStorageV2](docroot://ui/state-management-static/arkts-static-appstoragev2.md)里面删除。如果指定的键值不存在于
   * AppStorageV2中，将删除失败。
   * 
   * > **说明：**
   * 
   * > 删除AppStorageV2中不存在的key会报警告。
   *
   * @param { string | Class } keyOrType - 需要删除的key。如果传入的是Class类型，则删除的key为Class类型入参的name。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public static remove(keyOrType: string | Class): void;

  /**
   * 获取[AppStorageV2](docroot://ui/state-management-static/arkts-static-appstoragev2.md)中的所有key。
   * 
   * > **说明：**
   * 
   * > key在Array中的顺序是无序的，与key插入到AppStorageV2中的顺序无关。
   *
   * @returns { string[] } 所有AppStorageV2中的key。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public static keys(): string[];
}