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
 * The **DataShareResultSet** module provides APIs for accessing the result set obtained from the database. You can
 * access the values in the specified rows or the value of the specified data type.
 *
 * @file
 * @kit ArkData
 */

/**
 * # Usage
 *
 * You can use
 * [query]{@link @ohos.data.dataShare:dataShare.DataShareHelper.query(uri: string, predicates: dataSharePredicates.DataSharePredicates, columns: Array<string>, callback: AsyncCallback<DataShareResultSet>)}
 * to obtain a **DataShareResultSet** object.
 *
 * ```ts
 * import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
 * import { DataShareResultSet, dataShare, dataSharePredicates } from '@kit.ArkData';
 * import { BusinessError } from '@kit.BasicServicesKit';
 * export default class EntryAbility extends UIAbility {
 *   onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
 *     let dataShareHelper: dataShare.DataShareHelper | undefined = undefined;
 *     let uri = "datashare:///com.samples.datasharetest.DataShare";
 *     let context = this.context;
 *     dataShare.createDataShareHelper(context, uri, (err:BusinessError, data:dataShare.DataShareHelper) => {
 *       if (err != undefined) {
 *         console.error("createDataShareHelper fail, error message : " + err);
 *       } else {
 *         console.info("createDataShareHelper end, data : " + data);
 *         dataShareHelper = data;
 *       }
 *       let columns = ["*"];
 *       let da = new dataSharePredicates.DataSharePredicates();
 *       let resultSet: DataShareResultSet | undefined = undefined;
 *       da.equalTo("name0", "ZhangSan");
 *       if (dataShareHelper != undefined) {
 *         (dataShareHelper as dataShare.DataShareHelper).query(uri, da, columns).then((data: DataShareResultSet) => {
 *           console.info("query end, data : " + data);
 *           resultSet = data;
 *         }).catch((err: BusinessError) => {
 *           console.error("query fail, error message : " + err);
 *         });
 *       }
 *     });
 *   };
 * };
 * ```
 */
import { ValuesBucket } from './@ohos.data.ValuesBucket';

/**
 * Enumerates the data types.
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export enum DataType {
  /**
   * Null.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  TYPE_NULL = 0,

  /**
   * Long integer.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  TYPE_LONG = 1,

  /**
   * Double-precision floating-point number.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  TYPE_DOUBLE = 2,

  /**
   * String.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  TYPE_STRING = 3,

  /**
   * Byte array.
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
 * Provides APIs for accessing the result sets returned.
 *
 * The column or key names are returned as a string array, in which the strings are in the same order as the columns or
 * keys in the result set.
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export default interface DataShareResultSet {
  /**
   * Names of all columns in the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  columnNames: Array<string>;

  /**
   * Number of columns in the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  columnCount: int;

  /**
   * Number of rows in the result set.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  rowCount: int;

  /**
   * Whether the result set is closed. The value **true** means the result set is closed; the value **false** means the
   * opposite.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  isClosed: boolean;

  /**
   * Moves to the first row of the result set.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToFirstRow(): boolean;

  /**
   * Moves to the last row of the result set.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToLastRow(): boolean;

  /**
   * Moves to the next row in the result set.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToNextRow(): boolean;

  /**
   * Moves to the previous row in the result set.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToPreviousRow(): boolean;

  /**
   * Moves based on the specified offset.
   *
   * @param { int } offset - Offset relative to the current position. A negative value means to move forward, and a
   *     positive value means to move backward.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goTo(offset: int): boolean;

  /**
   * Moves to the specified row in the result set.
   *
   * @param { int } position - Position to move to, starting from 0.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  goToRow(position: int): boolean;

  /**
   * Obtains the value in the form of a byte array based on the specified column and the current row.
   *
   * If the specified column or key is empty or the value is not of the Blob type, you need to determine whether to
   * throw an exception.
   *
   * @param { int } columnIndex - Index of the target column, starting from 0.
   * @returns { Uint8Array } Value obtained.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getBlob(columnIndex: int): Uint8Array;

  /**
   * Obtains the value in the form of a string based on the specified column and the current row.
   *
   * If the specified column or key is empty or the value is not of the string type, you need to determine whether to
   * throw an exception.
   *
   * @param { int } columnIndex - Index of the target column, starting from 0.
   * @returns { string } Value obtained.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getString(columnIndex: int): string;

  /**
   * Obtains the value in the form of a long integer based on the specified column and the current row.
   *
   * If the specified column or key is empty or the value is not of the long type, you need to determine whether to
   * throw an exception.
   *
   * @param { int } columnIndex - Index of the target column, starting from 0.
   * @returns { long } Value obtained.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getLong(columnIndex: int): long;

  /**
   * Obtains the value in the form of a double-precision floating-point number based on the specified column and the
   * current row.
   *
   * If the specified column or key is empty or the value is not of the double type, you need to determine whether to
   * throw an exception.
   *
   * @param { int } columnIndex - Index of the target column, starting from 0.
   * @returns { double  } Value obtained.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getDouble(columnIndex: int): double;

  /**
   * Closes this result set.
   *
   * Calling this API will invalidate the result set and release all its resources.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  close(): void;

  /**
   * Obtains the column index based on a column name.
   *
   * The column name is passed in as an input parameter.
   *
   * @param { string } columnName - Column name.
   * @returns { int } Column index obtained.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getColumnIndex(columnName: string): int;

  /**
   * Obtains the column name based on a column index.
   *
   * The column index is passed in as an input parameter.
   *
   * @param { int } columnIndex - Column index.
   * @returns { string } Column name obtained.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getColumnName(columnIndex: int): string;

  /**
   * Obtains the data type based on the specified column index.
   *
   * If the specified column or key is empty or the value is not of the DataType type, you need to determine whether to
   * throw an exception.
   *
   * @param { int } columnIndex - Column index.
   * @returns { DataType } Data type obtained.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  getDataType(columnIndex: int): DataType;
}

