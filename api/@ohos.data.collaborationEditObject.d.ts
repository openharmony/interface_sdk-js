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

/**
 * @file
 * @kit ArkData
 */

import { Callback } from './@ohos.base';
import Context from './application/BaseContext';

/**
 * Provides interfaces to collaboration edit object.
 *
 * @namespace collaborationEditObject
 * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
 * @systemapi
 * @since 18
 */
declare namespace collaborationEditObject {
  /**
   * Manages collaboration configurations.
   *
   * @interface CollaborationConfig
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface CollaborationConfig {
    /**
     * The name of collaboration edit object.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    name: string;
  }

  /**
   * Obtains a collaboration edit object.
   *
   * @param { Context } context - Indicates the application context.
   * @param { CollaborationConfig } config - Indicates the {@link CollaborationConfig} config related to this object.
   * @returns { CollaborationEditObject } - Return the collaboration edit object. {@link CollaborationEditObject}.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 15410000 - Internal error.
   * @throws { BusinessError } 15410003 - Database error.
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  function getCollaborationEditObject(context: Context, config: CollaborationConfig): CollaborationEditObject;

  /**
   * Deletes a collaboration edit object.
   *
   * @param { Context } context - Indicates the application context.
   * @param { CollaborationConfig } config - Indicates the {@link CollaborationConfig} config related to this object.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 15410000 - Internal error.
   * @throws { BusinessError } 15410003 - Database error.
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  function deleteCollaborationEditObject(context: Context, config: CollaborationConfig): void;

  /**
   * Manages undo redo manager configurations.
   *
   * @interface UndoRedoConfig
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface UndoRedoConfig {
    /**
     * Interval for capturing an operation in milliseconds.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    captureTimeout: number;
  }

  /**
   * Represents the relative position in the edit unit.
   *
   * @interface RelativePos
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface RelativePos {
    /**
     * The id of the parent in the relative position, null if parent is edit unit.
     *
     * @type { UniqueId | null }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    parentId: UniqueId | null;

    /**
     * The name of the parent in the relative position, null if parent is not edit unit.
     *
     * @type { string | null }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    parentName: string | null;

    /**
     * The id of the left or right in the relative position, null if left or right is null.
     *
     * @type { UniqueId | null }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    id: UniqueId | null;

    /**
     * The position of the character binding to the relative position, default 0 means the character right after
     * the relative position, less than 0 means the character left to the relative position, greater than 0 means
     * the character right to the relative position.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    pos: number;
  }

  /**
   * The collaboration edit object record used to sync.
   *
   * @interface EditObjectRecord
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface EditObjectRecord {
    /**
     * Indicates the auto incrementing number of each record.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    cursor: number;

    /**
     * The identifier used to distinguish the different clients.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    id: string;

    /**
     * The collaboration edit object record data.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    data: Uint8Array;
  }

  /**
   * Describes the predicates of query condition.
   * 
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  enum Predicate {
    /**
     * EQUAL_TO: means to query records where record field is equal to the given field.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    EQUAL_TO = 0,

    /**
     * NOT_EQUAL_TO: means to query records where record field is not equal to the given field.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    NOT_EQUAL_TO,

    /**
     * GREATER_THAN: means to query records where record field is greater than the given field.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    GREATER_THAN,

    /**
     * LESS_THAN: means to query records where record field is less than the given field.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    LESS_THAN,

    /**
     * GREATER_THAN_OR_EQUAL_TO: means to query records where record field is greater than or equal to the given field.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    GREATER_THAN_OR_EQUAL_TO,

    /**
     * LESS_THAN_OR_EQUAL_TO: means to query records where record field is less than or equal to the given field.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    LESS_THAN_OR_EQUAL_TO
  }

  /**
   * Describes the condition of a query request.
   *
   * @interface QueryCondition
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface QueryCondition {
    /**
     * The predicate of query condition.
     * 
     * @type { Predicate }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    condition: Predicate;

    /**
     * The edit object record field name of query condition.
     * 
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    fieldName: string;

    /**
     * The edit object record field value of query condition.
     * 
     * @type { string | number }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    fieldValue: string | number;
  }

  /**
   * Manages asset operation configurations.
   *
   * @interface AssetOperationConfig
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface AssetOperationConfig {
    /**
     * The path of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    path: string;
  }

  /**
   * Provides definition of data upload function.
   *
   * @typedef { function } BatchInsertHandler
   * @param { Array<EditObjectRecord> } records - the inserted collaboration edit object records
   * @returns { Promise<number> } the number of inserted data
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  type BatchInsertHandler = (records: Array<EditObjectRecord>) => Promise<number>;

  /**
   * Provides definition of data query function.
   *
   * @typedef { function } QueryHandler
   * @param { Array<QueryCondition> } queryConditions - the conditions when query data from cloud
   * @returns { Promise<Array<EditObjectRecord>> } the collaboration edit object records queried from cloud
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  type QueryHandler = (queryConditions: Array<QueryCondition>) => Promise<Array<EditObjectRecord>>;

  /**
   * Provides definition of asset operation function.
   *
   * @typedef { function } AssetHandler
   * @param { AssetOperationConfig } config - the config of asset operation
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  type AssetHandler = (config: AssetOperationConfig) => Promise<void>;

  /**
   * Describes the handlers of CloudDB object.
   *
   * @interface CloudDB
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface CloudDB {
    /**
     * Provides ability of uploading data from local device to cloud.
     * 
     * @type { BatchInsertHandler }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    batchInsert: BatchInsertHandler;

    /**
     * Provides ability of querying data from cloud to local device.
     * 
     * @type { QueryHandler }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    query: QueryHandler;

    /**
     * Provides ability of downloading asset from cloud to local device.
     * 
     * @type { AssetHandler }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    downloadAsset: AssetHandler;

    /**
     * Provides ability of uploading asset from local device to cloud.
     * 
     * @type { AssetHandler }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    uploadAsset: AssetHandler;

    /**
     * Provides ability of deleting asset from cloud.
     * 
     * @type { AssetHandler }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    deleteAsset: AssetHandler;

    /**
     * Provides ability of deleting asset from local device.
     * 
     * @type { AssetHandler }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    deleteLocalAsset: AssetHandler;
  }

  /**
   * Describes the status of a cloud sync progress.
   * 
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  enum ProgressCode {
    /**
     * CLOUD_SYNC_SUCCESS: means the status of progress is success.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    CLOUD_SYNC_SUCCESS = 0,

    /**
     * CLOUD_NOT_SET: means the CloudDB handlers are not set.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    CLOUD_NOT_SET,

    /**
     * INTERNAL_ERROR: means the cloud sync progress meets internal error.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    INTERNAL_ERROR,

    /**
     * EXTERNAL_ERROR: means the cloud sync progress meets error in CloudDB handlers.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    EXTERNAL_ERROR,
  }

  /**
   * Describes the progress status of a cloud sync operation.
   *
   * @interface ProgressDetail
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface ProgressDetail {
    /**
     * The status code of cloud sync operation.
     * 
     * @type { ProgressCode }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    code: ProgressCode;
  }

  /**
   * Indicates the mode of cloud sync operation.
   * 
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  enum SyncMode {
    /**
     * SYNC_MODE_PUSH: Indicates the data is pushed to remote from local device.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    SYNC_MODE_PUSH = 0,

    /**
     * SYNC_MODE_PULL: Indicates the data is pulled from remote to local device.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    SYNC_MODE_PULL,

    /**
     * SYNC_MODE_PULL_PUSH: Indicates the data is first pulled from remote, then followed by a push operation.
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    SYNC_MODE_PULL_PUSH,
  }

  /**
   * Provides methods for managing the collaboration edit object.
   *
   * @interface CollaborationEditObject
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface CollaborationEditObject {
    /**
     * Get an edit unit of this collaboration edit object.
     *
     * @param { string } editUnitName - Indicates the name of the edit unit in collaboration edit object.
     * @returns { EditUnit } Indicates the edit unit {@link EditUnit} related to this collaboration edit object.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getEditUnit(editUnitName: string): EditUnit;

    /**
     * Get an undo redo manager of an edit unit in collaboration edit object.
     *
     * @param { string } editUnitName - Indicates the name of the edit unit in collaboration edit object.
     * @param { UndoRedoConfig } config - Indicates the {@link UndoRedoConfig} config of the undo redo manager.
     * @returns { UndoRedoManager } Indicates the {@link UndoRedoManager} undo redo manager of the edit unit.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getUndoRedoManager(editUnitName: string, config: UndoRedoConfig): UndoRedoManager;

    /**
     * Delete an undo redo manager of an edit unit in collaboration edit object.
     *
     * @param { string } editUnitName - Indicates the name of the edit unit in collaboration edit object.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    deleteUndoRedoManager(editUnitName: string): void;

    /**
     * Get local id in collaboration edit object.
     *
     * @returns { string } - local id.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getLocalId(): string;

    /**
     * Apply update in collaboration edit object.
     *
     * @returns { Array<UpdatedNode> } - the array that contains the modified node, used to refresh the editor.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    applyUpdate(): Array<UpdatedNode>;

    /**
     * Write update in collaboration edit object, used to process record pushed from remote.
     *
     * @param { EditObjectRecord } update - the collaboration edit object record.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    writeUpdate(update:EditObjectRecord): void;

    /**
     * Register cloudDB handlers which need to be implemented.
     *
     * @param { CloudDB } cloudDB - Indicates the CloudDB handlers.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *      1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    setCloudDB(cloudDB: CloudDB): void;

    /**
     * Synchronize data between local devices and cloud.
     *
     * @param { SyncMode } syncMode - Indicates the synchronization mode {@link SyncMode}.
     * @param { Callback<ProgressDetail> } progress - Indicates the specified sync callback function.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *      1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    cloudSync(syncMode: SyncMode, progress: Callback<ProgressDetail>): void;
  }

  /**
   * Provides methods for managing edit unit in the collaboration edit object.
   *
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  class EditUnit {
    /**
     * Return the name of this edit unit.
     *
     * @returns { string } Indicates the name of this edit unit.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getName(): string;

    /**
     * Inserts nodes into the target edit unit in index location.
     *
     * @param { number } index - Indicates the index at which to start inserting.
     * @param { Node[] } nodes - Indicates inserting new nodes.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    insertNodes(index: number, nodes: Node[]): void;

    /**
     * Deletes continuous length of nodes and texts from the target edit unit in index location.
     *
     * @param { number } index - Indicates the index at which to start deleting.
     * @param { number } length - Indicates deleting length.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    delete(index: number, length: number): void;

    /**
     * Get the children nodes and texts in range [start, end) of this edit unit.
     *
     * @param { number } start - Indicates the start location.
     * @param { number } end - Indicates the end location.
     * @returns { Array<Node | Text> } Indicates the children nodes and texts.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getChildren(start: number, end: number): Array<Node | Text>;

    /**
     * Get the json string result of this edit unit.
     *
     * @returns { string } Indicates the json string of this edit unit.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getJsonResult(): string;

    /**
     * Get the relative position in the edit unit by the absolute position of the cursor on the editor.
     *
     * @param { number } absolutePos - Indicates the absolute position of the cursor on the editor.
     * @returns { RelativePos } Relative position in the edit unit.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getRelativePos(absolutePos: number): RelativePos;

    /**
     * Get the absolute position of the cursor on the editor by the relative position in the edit unit.
     *
     * @param { RelativePos } relativePos - Indicates the relative position in the edit unit.
     * @returns { number } Absolute position of the cursor on the editor.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getAbsolutePos(relativePos: RelativePos): number;
  }

  /**
   * The unique identifier of current object.
   *
   * @interface UniqueId
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface UniqueId {
    /**
     * The identifier used to distinguish the different clients.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    id: string;

    /**
     * The clock of current object.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    clock: number;
  }

  /**
   * Attributes in node are stored in key-value pairs.
   *
   * @typedef { Record<string, string | number | boolean> } AttributesRecord
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  type AttributesRecord = Record<string, string | number | boolean>;

  /**
   * Provides methods for managing node in the edit unit.
   *
   * @extends EditUnit
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  class Node extends EditUnit {
    /**
     * A parameterized constructor used to create a Node instance.
     *
     * @param { string } name - Indicates the name of this node.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    constructor(name: string);

    /**
     * Returns the UniqueId of this node.
     *
     * @returns { UniqueId } Indicates the unique id of this node.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getId(): UniqueId;

    /**
     * Inserts texts into the target edit unit in index location.
     *
     * @param { number } index - Indicates the index at which to start inserting.
     * @param { Text[] } texts - Indicates inserting new texts.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    insertTexts(index: number, texts: Text[]): void;

    /**
     * Sets or updates attributes into the target node.
     *
     * @param { AttributesRecord } attributes - Indicates the attribute names and values that is to be set.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    setAttributes(attributes: AttributesRecord): void;

    /**
     * Removes attributes from the target node, including asset attribute.
     *
     * @param { string[] } attributeNames - Indicates the attribute names that is to be removed.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    removeAttributes(attributeNames: string[]): void;

    /**
     * Returns all attribute name and value pairs of this node.
     *
     * @returns { AttributesRecord } Indicates all attribute name and value pairs.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getAttributes(): AttributesRecord;

    /**
     * Sets or updates an asset into the target node.
     *
     * @param { string } assetKey - Indicates the asset key to be set.
     * @param { string } assetValue - Indicates the asset value to be set.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    setAsset(assetKey: string, assetValue: string): void;
  }

  /**
   * Indicates possible format value types.
   *
   * @typedef { null | number | string | boolean } FormatValueType
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  type FormatValueType = null | number | string | boolean;

  /**
   * Values in text format are stored in key-value pairs.
   *
   * @typedef { Record<string, FormatValueType> } TextFormat
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  type TextFormat = Record<string, FormatValueType>;

  /**
   * Provides methods for managing text in the edit unit.
   *
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  class Text {
    /**
     * A constructor used to create a Text instance.
     *
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    constructor();

    /**
     * Returns the UniqueId of this text.
     *
     * @returns { UniqueId } Indicates the unique id of this text.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getId(): UniqueId;

    /**
     * Inserts text with optional format into the target text in index location.
     *
     * @param { number } index - Indicates the index at which to start inserting.
     * @param { string } text - Indicates the text to insert at the specified position.
     * @param { TextFormat } format - Indicates the formatting information to apply on the inserted text.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    insert(index: number, text: string, format?: TextFormat): void;

    /**
     * Deletes continuous length into the target text in index location.
     *
     * @param { number } index - Indicates the index at which to start inserting.
     * @param { number } length - Indicates deleting length.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    delete(index: number, length: number): void;

    /**
     * Formats continuous length into the target text from index location.
     *
     * @param { number } index - Indicates the index at which to start formatting.
     * @param { number } length - Indicates formatting length.
     * @param { TextFormat } format - Indicates the formatting information to apply.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    format(index: number, length: number, format: TextFormat): void;

    /**
     * Get the plain string result without format of this text.
     *
     * @returns { string } Indicates the plain string result of this text.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getPlainText(): string;

    /**
     * Get the json string result with format of this text.
     *
     * @returns { string } Indicates the json string result of this text.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410001 - Unsupported operation.
     * @throws { BusinessError } 15410002 - Index out of range.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    getJsonResult(): string;
  }

  /**
   * Provides methods for managing undo redo operations in the collaboration edit object.
   *
   * @interface UndoRedoManager
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface UndoRedoManager {
    /**
     * Undo last changes.
     *
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    undo(): void;

    /**
     * Redo last undo operation.
     *
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 15410000 - Internal error.
     * @throws { BusinessError } 15410003 - Database error.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    redo(): void;
  }

  /**
   * The updated node {@link Node} or text {@link Text}.
   *
   * @interface UpdatedNode
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 18
   */
  interface UpdatedNode {
    /**
     * The identifier used to distinguish the different edit unit.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    editUnitName: string;

    /**
     * The updated node {@link Node} or text {@link Text}.
     *
     * @type { Node | Text }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 18
     */
    node: Node | Text;
  }
}

export default collaborationEditObject;
