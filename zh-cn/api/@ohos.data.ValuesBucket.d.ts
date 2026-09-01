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
 * **ValuesBucket**  是开发者向数据库插入的数据集合，数据集以键值对的形式进行传输。
 *
 * @file
 * @kit ArkData
 */

/**
 * 该类型用于表示数据库允许的数据字段类型。
 *
 * @unionmember { number } The value is a number. [since 12 - 19]
 * @unionmember { long } [since 20]
 * @unionmember { double } [since 20]
 * @unionmember { string } The value is a string. [since 12]
 * @unionmember { boolean } The value is **true** or **false**. [since 12]
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @stagemodelonly
 * @crossplatform [since 12]
 * @atomicservice [since 20]
 * @since 10 dynamic
 * @since 23 static
 */
export type ValueType = long | double | string | boolean;

/**
 * 用于存储键值对的类型。该类型不是多线程安全的，如果应用中存在多线程同时操作该类派生出的实例，注意加锁保护。
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
export type ValuesBucket = Record<string, ValueType | Uint8Array | null>;