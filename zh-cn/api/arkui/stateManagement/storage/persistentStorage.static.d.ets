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
 * PersistentStorage具体UI使用说明，详见
 * [PersistentStorage(持久化存储UI状态)](docroot://ui/state-management-static/arkts-static-persiststorage.md)。
 *
 * @file
 * @kit ArkUI
 */

/**
 * Defines the PersistentStorage interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PersistentStorage {

  /**
   * 将[AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)中key对应的属性持久化到文件中。该接口的调用通常在访问
   * AppStorage之前。
   * 
   * 确定属性的类型和值的顺序如下：
   * 
   * 1. 如果[PersistentStorage](docroot://ui/state-management-static/arkts-static-persiststorage.md)文件中存在key对应的属性，则返回false。
   * 
   * 2. 如果PersistentStorage文件中没有查询到key对应的属性，则在AppStorage中查找key对应的属性。如果找到key对应的属性，则将该属性持久化，并返回true。
   * 
   * 3. 如果AppStorage中也没查找到key对应的属性，则在磁盘中查找key对应的属性。如果找到key对应的属性，则在AppStorage中创建和初始化key对应的属性，并将该属性持久化，最终返回true。
   * 
   * 4. 如果磁盘中不存在对应属性，则在AppStorage中创建和初始化key对应的属性，并将该属性持久化，最终返回true。
   * 
   *     根据上述的初始化流程，如果AppStorage中有该属性，则会使用其值，覆盖掉PersistentStorage文件中的值。由于AppStorage是内存内数据，该行为会导致数据丧失持久化能力。
   * 
   * 5. 对于复杂类型(联合类型都是复杂类型)，开发者必须实现toJson和fromJson才能实现持久化，只有boolean、int、double、long、string，开发者可以不传入toJson和fromJson。
   *
   * @param { string } key - 属性名。
   * @param { T } defaultValue - 当在[PersistentStorage]{@link PersistentStorage}和
   *     [AppStorage](docroot://reference/apis-arkui/arkui-ts/ts-state-management-Static-copy.md#appstorage)中未查询到key时，使用
   *     defaultValue中。
   * @param { ToJSONType<T> } [toJson] - 见[ToJSONType]{@link ToJSONType}，用于序列化。对于复杂类型（除boolean、int、double、long、string外），
   *     开发者必须实现该方法才能成功序列化。
   * @param { FromJSONType<T> } [fromJson] - 见[FromJSONType]{@link FromJSONType}，用于反序列化。对于复杂类型（除boolean、int、double、long、
   *     string外），开发者必须实现该方法才能成功反序列化。
   * @returns { boolean }
   如果PersistentStorage文件中存在key对应的属性，则返回false。否则将依次从AppStorage、磁盘中查找对应属性，若存在，则返回true，若不存在，则创建并持久化
   *     key对应的属性，并返回true。
   * @stagemodelonly
   * @since 23 static
   */
  static persistProp<T>(key: string, defaultValue: T, toJson?: ToJSONType<T>, fromJson?: FromJSONType<T>): boolean;

  /**
   * [persistProp]{@link PersistPropsOptions}的逆向操作。将key对应的属性从PersistentStorage中删除，后续
   * [AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)的操作，对
   * [PersistentStorage](docroot://ui/state-management-static/arkts-static-persiststorage.md)不会再有影响。该操作会将对应的key从持久化文件中删
   * 除，如果希望再次持久化，可以再次调用[persistProp]{@link PersistPropsOptions}接口。
   *
   * @param { string } key - PersistentStorage中的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static deleteProp(key: string): void;

  /**
   * 返回所有持久化属性的属性名的数组。
   *
   * @returns { Array<string> } 返回所有持久化属性的属性名的数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static keys(): Array<string>;

  /**
   * 将[AppStorage](docroot://ui/state-management-static/arkts-static-appstorage.md)中key对应的属性持久化到文件中。与
   * [persistProp]{@link PersistPropsOptions}的区别在于可以一次性持久化多个数据，适用场景是：应用启动时调用持久化接口。
   *
   * @param { PersistPropsOptions<Any>[] } props 持久化数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static persistProps(props: PersistPropsOptions<Any>[]): void;
}

/**
 * > **说明：**
 * >
 * > 静态ArkTS序列化接口，需开发者自己实现。
 *
 * @param { T } value  toJson value
 * @returns { jsonx.JsonElement } Json stringify element object
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type ToJSONType<T> = (value: T) => jsonx.JsonElement;

/**
 * > **说明：**
 * >
 * > 静态ArkTS反序列化接口，需开发者自己实现。
 *
 * @param { jsonx.JsonElement } element  json element
 * @returns { T } deserialization result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type FromJSONType<T> = (element: jsonx.JsonElement) => T;

/**
 * 指定持久化属性及其默认值的键值对对象，作为[persistProps]{@link PersistPropsOptions}参数传入。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PersistPropsOptions<T> {

  /**
   * 属性名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  key: string;

  /**
   * 当在[PersistentStorage]{@link PersistentStorage}和
   * [AppStorage](docroot://reference/apis-arkui/arkui-ts/ts-state-management-Static-copy.md#appstorage)中未查询到key时，使用
   * defaultValue中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  defaultValue: T;

  /**
   * 默认值为undefined。见[ToJsonType]{@link ToJSONType}，用于序列化。对于复杂类型（除boolean、int、double、long、string外），开发者必须实现该方法才能成功序列化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  toJson?: ToJSONType<T>;

  /**
   * 默认值为undefined。见[FromJsonType]{@link FromJSONType}，用于反序列化。对于复杂类型（除boolean、int、double、long、string外），开发者必须实现该方法才能成功反序列
   * 化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fromJson?: FromJSONType<T>;
}