'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkUI
 */

import contextConstant from '@ohos.app.ability.contextConstant';

import { ToJSONType, FromJSONType } from './persistentStorage';

/**
 * 返回默认构造器的函数。
 *
 * @returns { T } 返回默认构造器的函数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type StorageDefaultCreator<T> = () => T;

/**
 * 保存对象类型及其默认构造器的Map。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type StorageDefaultSubCreators = Map<Class, StorageDefaultCreator<object>>;

/**
 * globalConnect参数类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ConnectOptions<T extends object> {

  /**
   * 指定的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  type: Class;

  /**
   * 传入的key，不传则使用type的名字作为key。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  key?: string;

  /**
   * 默认数据的构造器，默认值为undefined，建议传递，如果globalConnect是第一次连接key，不传会报错。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  defaultCreator?: StorageDefaultCreator<T>;

  /**
   * 加密级别：EL1-EL5，详见[加密级别](docroot://application-models/application-context-stage.md#获取和修改加密分区)，不传时默认为EL2，不同加密级别对应不同的加密分
   * 区，即不同的存储路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  areaMode?: contextConstant.AreaMode;

  /**
   * 转换存储对象到JSON格式对象的函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  toJson?: ToJSONType<T>;

  /**
   * 转换JSON格式对象到存储对象的函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  fromJson?: FromJSONType<T>;

  /**
   * 是否自动持久化存储数据，默认值为true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableAutoSave?: boolean;

  /**
   * 保存对象类型及其默认构造器的Map。用于恢复内层对象数据。默认值为undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  defaultSubCreators?: StorageDefaultSubCreators;
}

/**
 * 持久化失败时返回错误原因的回调。
 *
 * @param { string } key - 出错的键值。
 * @param { string } reason - 出错的原因类型。
 * @param { string } message - 出错的更多消息。
 * @param { string } [oldValue] - 反序列化失败时返回原始序列化数据。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type PersistenceErrorCallback = (key: string, reason: string, message: string, 
    oldValue?: string) => void;

/**
 * PersistenceV2具体UI使用说明，详见
 * [PersistenceV2(持久化存储UI状态)](docroot://ui/state-management-static/arkts-static-new-persistencev2.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PersistenceV2 {

  /**
   * 将键值对数据储存在应用磁盘中。如果给定的key已经存在于PersistenceV2中，返回对应的值；否则，会通过获取默认值的构造器构造默认值，并返回。
   *
   * @param { Class } ttype - class type of the stored value.
   * @param { StorageDefaultCreator<T> } [defaultCreator] - the function generating the default value
   * @param { BaseConnectOptions<T> } [connectOptions] - additional connect options.
   * @returns { T | undefined } the value of the existing key or the default value.
   *     returns undefined when defaultCreator is not set and there is no data with matching type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static connect<T extends object>(
    ttype: Class,
    defaultCreator?: StorageDefaultCreator<T>,
    connectOptions?: BaseConnectOptions<T>
  ): T | undefined;

  /**
   * 将键值对数据储存在应用磁盘中。如果给定的key已经存在于PersistenceV2中，返回对应的值；否则，会通过获取默认值的构造器构造默认值，并返回。
   *
   * @param { Class } ttype - class type of the stored value.
   * @param { string } key - alias name of the key.
   * @param { StorageDefaultCreator<T> } [defaultCreator] - the function generating the default value
   * @param { BaseConnectOptions<T> } [connectOptions] - additional connect options.
   * @returns { T | undefined } the value of the existed key or the default value.
   *     returns undefined when defaultCreator is not set and there is no data with matching type and key.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static connect<T extends object>(
    ttype: Class,
    key: string,
    defaultCreator?: StorageDefaultCreator<T>,
    connectOptions?: BaseConnectOptions<T>
  ): T | undefined;

  /**
   * 将键值对数据储存在应用磁盘中。如果给定的key已经存在于[PersistenceV2](docroot://ui/state-management-static/arkts-static-new-persistencev2.md)
   * 中，返回对应的值；否则，会通过获取默认值的构造器构造默认值，并返回。
   *
   * @param { ConnectOptions<T> } params - application-level storage parameters.
   * @returns { T | undefined } the value of the existed key or the default value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static globalConnect<T extends object>(params: ConnectOptions<T>): T | undefined;

  /**
   * 手动持久化指定的键值对数据。
   *
   * @param { string | Class } keyOrType - 需要持久化的key；如果指定的是Class类型，持久化的key为Class的name。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static save(keyOrType: string | Class): void;

  /**
   * 在持久化失败时调用。
   *
   * @param { PersistenceErrorCallback | undefined } callback - 持久化失败时调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static notifyOnError(callback: PersistenceErrorCallback | undefined): void;

  /**
   * 将指定的键值对数据从PersistenceV2里面删除。如果指定的键值不存在于PersistenceV2中，将删除失败。
   * 
   * > **说明：**
   * >
   * > 删除PersistenceV2中不存在的key会打印warn日志警告。
   *
   * @param { string | Class } keyOrType - 需要删除的key。如果传入的是Class类型，则删除的key为Class类型入参的name。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static remove(keyOrType: string | Class): void;

  /**
   * 获取PersistenceV2中所有的key。
   * 
   * > **说明：**
   * >
   * > key在Array中的顺序是无序的，与key插入到PersistenceV2中的顺序无关。
   *
   * @returns { string[] } the array of all keys.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static keys(): string[];
}

/**
 * connect参数类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface BaseConnectOptions<T extends object> {

  /**
   * 转换存储对象到JSON格式对象的函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  toJson?: ToJSONType<T>;

  /**
   * 转换JSON格式对象到存储对象的函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  fromJson?: FromJSONType<T>;

  /**
   * 是否自动持久化存储数据，默认值为true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableAutoSave?: boolean;
}