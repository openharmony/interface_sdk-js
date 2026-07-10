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
 * A result set is a set of results returned after the relational database (RDB) query APIs are called. You can use the
 * **resultset** APIs to obtain required data.
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.data.relationalStore:relationalStore
 */
export interface ResultSet {
  /**
   * Names of all columns in the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.columnNames
   */
  columnNames: Array<string>;

  /**
   * Number of columns in the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.columnCount
   */
  columnCount: number;

  /**
   * Number of rows in the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.rowCount
   */
  rowCount: number;

  /**
   * Index of the current row in the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.rowIndex
   */
  rowIndex: number;

  /**
   * Whether the cursor is in the first row of the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isAtFirstRow
   */
  isAtFirstRow: boolean;

  /**
   * Whether the cursor is in the last row of the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isAtLastRow
   */
  isAtLastRow: boolean;

  /**
   * Whether the cursor is after the last row of the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isEnded
   */
  isEnded: boolean;

  /**
   * Whether the cursor has been moved.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isStarted
   */
  isStarted: boolean;

  /**
   * Whether the result set is closed.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isClosed
   */
  isClosed: boolean;

  /**
   * Obtains the column index based on the column name.
   *
   * @param { string } columnName - Column name specified.
   * @returns { number } Index of the column obtained.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getColumnIndex
   */
  getColumnIndex(columnName: string): number;

  /**
   * Obtains the column name based on the column index.
   *
   * @param { number } columnIndex - Column index specified.
   * @returns { string } Column name obtained.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getColumnName
   */
  getColumnName(columnIndex: number): string;

  /**
   * Moves the result set forward or backward to the specified row with an offset relative to the current position.
   *
   * @param { number } offset - Offset relative to the current position.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goTo
   */
  goTo(offset: number): boolean;

  /**
   * Moves the cursor to the specified row in the result set.
   *
   * @param { number } position - Position to which the cursor is to be moved.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToRow
   */
  goToRow(position: number): boolean;

  /**
   * Moves the cursor to the first row of the result set.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToFirstRow
   */
  goToFirstRow(): boolean;

  /**
   * Moves the cursor to the last row of the result set.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToLastRow
   */
  goToLastRow(): boolean;

  /**
   * Moves the cursor to the next row in the result set.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToNextRow
   */
  goToNextRow(): boolean;

  /**
   * Moves the cursor to the previous row in the result set.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.goToPreviousRow
   */
  goToPreviousRow(): boolean;

  /**
   * Obtains the value from the specified column in the current row as a byte array.
   *
   * @param { number } columnIndex - Index of the specified column, starting from 0.
   * @returns { Uint8Array } Value in the specified column as a byte array.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getBlob
   */
  getBlob(columnIndex: number): Uint8Array;

  /**
   * Obtains the value from the specified column in the current row as a string.
   *
   * @param { number } columnIndex - Index of the specified column, starting from 0.
   * @returns { string } Value in the specified column as a string.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getString
   */
  getString(columnIndex: number): string;

  /**
   * Obtains the value from the specified column in the current row as a Long.
   *
   * @param { number } columnIndex - Index of the specified column, starting from 0.
   * @returns { number } Value in the specified column as a Long.
   *     <br>The value range supported by this API is **Number.MIN_SAFE_INTEGER** to **Number.MAX_SAFE_INTEGER**. If the
   *     value is out of this range, use [getDouble]{@link ResultSet.getDouble}.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getLong
   */
  getLong(columnIndex: number): number;

  /**
   * Obtains the value from the specified column in the current row as a Double.
   *
   * @param { number } columnIndex - Index of the specified column, starting from 0.
   * @returns { number } Value in the specified column as a Double.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.getDouble
   */
  getDouble(columnIndex: number): number;

  /**
   * Checks whether the value in the specified column of the current row is null.
   *
   * @param { number } columnIndex - Index of the specified column, starting from 0.
   * @returns { boolean } Returns **true** if the value is null; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.isColumnNull
   */
  isColumnNull(columnIndex: number): boolean;

  /**
   * Closes this result set.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.relationalStore.ResultSet.close
   */
  close(): void;
}
