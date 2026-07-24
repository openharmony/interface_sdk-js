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
 * @file The result set of database queries.
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from '../../@ohos.base';

/**
 * 结果集是指用户调用关系型数据库查询接口之后返回的结果集合，提供了多种灵活的数据访问方式，以便用户获取各项数据。
 * 
 * > **说明：**
 * >
 * > 从API Version 9开始，该接口不再维护，推荐使用新接口[ResultSet]{@link @ohos.data.relationalStore:relationalStore.ResultSet}。
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.data.relationalStore:relationalStore
 */
export interface ResultSet {
  /**
   * columnNames: Array<string>
   * 
   * 获取结果集中所有列的名称。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.columnNames
   */
  columnNames: Array<string>;

  /**
   * columnCount: number
   * 
   * 获取结果集中的列数。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.columnCount
   */
  columnCount: number;

  /**
   * rowCount: number
   * 
   * 获取结果集中的行数。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.rowCount
   */
  rowCount: number;

  /**
   * rowIndex: number
   * 
   * 获取结果集当前行的索引。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.rowIndex
   */
  rowIndex: number;

  /**
   * isAtFirstRow: boolean
   * 
   * 检查结果集是否位于第一行。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isAtFirstRow
   */
  isAtFirstRow: boolean;

  /**
   * isAtLastRow: boolean
   * 
   * 检查结果集是否位于最后一行。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isAtLastRow
   */
  isAtLastRow: boolean;

  /**
   * isEnded: boolean
   * 
   * 检查结果集是否位于最后一行之后。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isEnded
   */
  isEnded: boolean;

  /**
   * isStarted: boolean
   * 
   * 检查指针是否移动过。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isStarted
   */
  isStarted: boolean;

  /**
   * isClosed: boolean
   * 
   * 检查当前结果集是否关闭。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isClosed
   */
  isClosed: boolean;

  /**
   * 根据指定的列名获取列索引。
   *
   * @param { string } columnName - 表示结果集中指定列的名称。
   * @returns { number } 返回指定列的索引。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getColumnIndex
   */
  getColumnIndex(columnName: string): number;

  /**
   * 根据指定的列索引获取列名。
   *
   * @param { number } columnIndex - 表示结果集中指定列的索引。
   * @returns { string } 返回指定列的名称。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getColumnName
   */
  getColumnName(columnIndex: number): string;

  /**
   * 向前或向后移至结果集的指定行，相对于其当前位置偏移。
   *
   * @param { number } offset - 表示相对于当前位置的偏移量。
   * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goTo
   */
  goTo(offset: number): boolean;

  /**
   * 转到结果集的指定行。
   *
   * @param { number } position - 表示要移动到的指定位置。
   * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToRow
   */
  goToRow(position: number): boolean;

  /**
   * 转到结果集的第一行。
   *
   * @returns { boolean } 如果成功移动结果集到第一行，则为true；否则为false。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToFirstRow
   */
  goToFirstRow(): boolean;

  /**
   * 转到结果集的最后一行。
   *
   * @returns { boolean } 如果成功移动结果集到最后一行，则为true；否则为false。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToLastRow
   */
  goToLastRow(): boolean;

  /**
   * 转到结果集的下一行。
   *
   * @returns { boolean } 如果成功移动结果集到下一行，则为true；否则为false。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToNextRow
   */
  goToNextRow(): boolean;

  /**
   * 转到结果集的上一行。
   *
   * @returns { boolean } 如果成功移动结果集到上一行，则为true；否则为false。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToPreviousRow
   */
  goToPreviousRow(): boolean;

  /**
   * 以字节数组的形式获取当前行中指定列的值。
   *
   * @param { number } columnIndex - 指定的列索引，从0开始。
   * @returns { Uint8Array } 以字节数组的形式返回指定列的值。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getBlob
   */
  getBlob(columnIndex: number): Uint8Array;

  /**
   * 以字符串形式获取当前行中指定列的值。
   *
   * @param { number } columnIndex - 指定的列索引，从0开始。
   * @returns { string } 以字符串形式返回指定列的值。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getString
   */
  getString(columnIndex: number): string;

  /**
   * 以Long形式获取当前行中指定列的值。
   *
   * @param { number } columnIndex - 指定的列索引，从0开始。
   * @returns { number } 以Long形式返回指定列的值。<br/>该接口支持的数据范围是：Number.MIN_SAFE_INTEGER ~ Number.MAX_SAFE_INTEGER，若超出该范围，建议使用
   *     [getDouble](docroot://reference/apis-arkdata/js-apis-data-resultset.md#getdouble)。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getLong
   */
  getLong(columnIndex: number): number;

  /**
   * 以double形式获取当前行中指定列的值。
   *
   * @param { number } columnIndex - 指定的列索引，从0开始。
   * @returns { number } 以double形式返回指定列的值。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getDouble
   */
  getDouble(columnIndex: number): number;

  /**
   * 检查当前行中指定列的值是否为null。
   *
   * @param { number } columnIndex - 指定的列索引，从0开始。
   * @returns { boolean } 如果当前行中指定列的值为null，则返回true，否则返回false。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isColumnNull
   */
  isColumnNull(columnIndex: number): boolean;

  /**
   * 关闭结果集。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.close
   */
  close(): void;
}
