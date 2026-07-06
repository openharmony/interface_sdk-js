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
 * **DataShareResultSet** 可提供访问由查询数据库生成的结果集的相关方法，根据提供的行数，查询相应的值，也可查询指定数据类型的值。
 *
 * @file
 * @kit ArkData
 */

import { ValuesBucket } from './@ohos.data.ValuesBucket';

/**
 * 数据类型枚举。
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export enum DataType {
  /**
   * 表示值类型为空。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  TYPE_NULL = 0,

  /**
   * 表示值类型为长整数值。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  TYPE_LONG = 1,

  /**
   * 表示值类型为双浮点数。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  TYPE_DOUBLE = 2,

  /**
   * 表示值类型为字符串。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  TYPE_STRING = 3,

  /**
   * 表示值类型为字节数组。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  TYPE_BLOB = 4
}

/**
 * 提供通过查询数据库生成的结果集的相关访问方法。
 *
 * 列或键名称作为字符串数组返回，其中字符串的顺序与结果集中的列或键的顺序相同。
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export default interface DataShareResultSet {
  /**
   * 结果集中所有列的名称。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  columnNames: Array<string>;

  /**
   * 结果集中的列数。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  columnCount: int;

  /**
   * 结果集中的行数。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  rowCount: int;

  /**
   * 标识当前结果集是否关闭。如果结果集已关闭，则为true；否则为false。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  isClosed: boolean;

  /**
   * 转到结果集的第一行。
   *
   * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToFirstRow(): boolean;

  /**
   * 转到结果集的最后一行。
   *
   * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToLastRow(): boolean;

  /**
   * 转到结果集的下一行。
   *
   * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToNextRow(): boolean;

  /**
   * 转到结果集的上一行。
   *
   * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToPreviousRow(): boolean;

  /**
   * 相对于当前位置向前或向后移动指定行数。
   *
   * @param { int } offset - 表示相对于当前位置的偏移量。offset为负值表示向前偏移，正值则表示向后偏移。
   * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goTo(offset: int): boolean;

  /**
   * 转到结果集的指定行。
   *
   * @param { int } position - 表示要移动到的指定位置，从 0 开始。
   * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToRow(position: int): boolean;

  /**
   * 以字节数组的形式获取当前行中指定列的值。
   *
   * 如果当前行中指定的列或键的值为空，或者指定的列或键不是Blob类型，则使用方需要确定是否抛出此异常。
   *
   * @param { int } columnIndex - 指定的列索引，从0开始。
   * @returns { Uint8Array } 以字节数组的形式返回指定列的值。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getBlob(columnIndex: int): Uint8Array;

  /**
   * 以字符串形式获取当前行中指定列的值。
   *
   * 如果当前行中指定的列或键的值为空，或者指定的列或键不是string类型，则使用方需要确定是否抛出此异常。
   *
   * @param { int } columnIndex - 指定的列索引，从0开始。
   * @returns { string } 以字符串形式返回指定列的值。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getString(columnIndex: int): string;

  /**
   * 以长整数值形式获取当前行中指定列的值。
   *
   * 如果当前行中指定的列或键的值为空，或者指定的列或键不是long类型，则使用方需要确定是否抛出此异常。
   *
   * @param { int } columnIndex - 指定的列索引，从0开始。
   * @returns { long } 以长整数值形式返回指定列的值。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getLong(columnIndex: int): long;

  /**
   * 以值类型为双浮点数形式获取当前行中指定列的值。
   *
   * 如果当前行中指定的列或键的值为空，或者指定的列或键不是double类型，则使用方需要确定是否抛出此异常。
   *
   * @param { int } columnIndex - 指定的列索引，从0开始。
   * @returns { double  } Value obtained.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getDouble(columnIndex: int): double;

  /**
   * 关闭结果集。
   *
   * 对结果集调用此方法将释放其所有资源并使其无效。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  close(): void;

  /**
   * 根据指定的列名获取列索引。
   *
   * 列名作为输入参数传递。
   *
   * @param { string } columnName - 表示结果集中指定列的名称。
   * @returns { int } 返回指定列的索引。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getColumnIndex(columnName: string): int;

  /**
   * 根据指定的列索引获取列名。
   *
   * 列索引作为输入参数传递。
   *
   * @param { int } columnIndex - 表示结果集中指定列的索引。
   * @returns { string } 返回指定列的名称。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getColumnName(columnIndex: int): string;

  /**
   * 指定列索引获取该列的数据类型。
   *
   * 如果当前行中指定的列或键的值为空，或者指定的列或键不是DataType类型，则使用方需要确定是否抛出此异常。
   *
   * @param { int } columnIndex - 表示结果集中指定列的索引。
   * @returns { DataType } 返回指定列的类型。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getDataType(columnIndex: int): DataType;
}