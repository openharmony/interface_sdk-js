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

import type Context from './application/BaseContext';

/**
 * Provides interfaces to collaboration edit object.
 *
 * @namespace collaborationEditObject
 * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
 * @systemapi
 * @since 16
 */
declare namespace collaborationEditObject {
  /**
   * Manages collaboration configurations.
   *
   * @interface CollaborationConfig
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  interface CollaborationConfig {
    /**
     * The name of collaboration edit object.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    name: string;
  }

  /**
   * Obtains a collaboration edit object.
   *
   * @param { Context } context - Indicates the application context.
   * @param { CollaborationConfig } config - Indicates the {@link CollaborationConfig} config related to this object.
   * @returns { CollaborationEditObject } - Return the collaboration edit object. {@link CollaborationEditObject}.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  function getCollaborationEditObject(context: Context, config: CollaborationConfig): CollaborationEditObject;

  /**
   * Deletes a collaboration edit object.
   *
   * @param { Context } context - Indicates the application context.
   * @param { CollaborationConfig } config - Indicates the {@link CollaborationConfig} config related to this object.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  function deleteCollaborationEditObject(context: Context, config: CollaborationConfig): void;

  /**
   * Manages undo redo manager configurations.
   *
   * @interface UndoRedoConfig
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  interface UndoRedoConfig {
    /**
     * Interval for capturing an operation in milliseconds.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    captureTimeout: number;
  }

  /**
   * Provides methods for managing the collaboration edit object.
   *
   * @interface CollaborationEditObject
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  interface CollaborationEditObject {
    /**
     * Get an edit unit of this collaboration edit object.
     *
     * @param { string } editUnitName - Indicates the name of the edit unit in collaboration edit object.
     * @returns { EditUnit } Indicates the edit unit {@link EditUnit} related to this collaboration edit object.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getEditUnit(editUnitName: string): EditUnit;

    /**
     * Get an undo redo manager of an edit unit in collaboration edit object.
     *
     * @param { string } editUnitName - Indicates the name of the edit unit in collaboration edit object.
     * @param { UndoRedoConfig } config - Indicates the {@link UndoRedoConfig} config of the undo redo manager.
     * @returns { UndoRedoManager } Indicates the {@link UndoRedoManager} undo redo manager of the edit unit.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getUndoRedoManager(editUnitName: string, config: UndoRedoConfig): UndoRedoManager;

    /**
     * Delete an undo redo manager of an edit unit in collaboration edit object.
     *
     * @param { string } editUnitName - Indicates the name of the edit unit in collaboration edit object.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    deleteUndoRedoManager(editUnitName: string): void;
  }

  /**
   * Provides methods for managing edit unit in the collaboration edit object.
   *
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  class EditUnit {
    /**
     * Return the name of this edit unit.
     *
     * @returns { string } Indicates the name of this edit unit.
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getName(): string;

    /**
     * Inserts nodes into the target edit unit in index location.
     *
     * @param { number } index - Indicates the index at which to start inserting.
     * @param { Node[] } nodes - Indicates inserting new nodes.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    insertNodes(index: number, nodes: Node[]): void;

    /**
     * Deletes continuous length of nodes and texts from the target edit unit in index location.
     *
     * @param { number } index - Indicates the index at which to start deleting.
     * @param { number } length - Indicates deleting length.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    delete(index: number, length: number): void;

    /**
     * Get the children nodes and texts in range [start, end) of this edit unit.
     *
     * @param { number } start - Indicates the start location.
     * @param { number } end - Indicates the end location.
     * @returns { Array<Node | Text> } Indicates the children nodes and texts.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getChildren(start: number, end: number): Array<Node | Text>;

    /**
     * Get the json string result of this edit unit.
     *
     * @returns { string } Indicates the json string of this edit unit.
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getJsonResult(): string;
  }

  /**
   * The unique identifier of current object.
   *
   * @interface UniqueId
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  interface UniqueId {
    /**
     * The identifier used to distinguish the different clients.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    id: string;

    /**
     * The clock of current object.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    clock: number;
  }

  /**
   * Attributes in node are stored in key-value pairs.
   *
   * @typedef { Record<string, string | number | boolean> } AttributesRecord
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  type AttributesRecord = Record<string, string | number | boolean>;

  /**
   * Provides methods for managing node in the edit unit.
   *
   * @extends EditUnit
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  class Node extends EditUnit {
    /**
     * A parameterized constructor used to create a Node instance.
     *
     * @param { string } name - Indicates the name of this node.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    constructor(name: string);

    /**
     * Returns the UniqueId of this node.
     *
     * @returns { UniqueId } Indicates the unique id of this node.
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getId(): UniqueId;

    /**
     * Inserts texts into the target edit unit in index location.
     *
     * @param { number } index - Indicates the index at which to start inserting.
     * @param { Text[] } texts - Indicates inserting new texts.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    insertTexts(index: number, texts: Text[]): void;

    /**
     * Sets or updates attributes into the target node.
     *
     * @param { AttributesRecord } attributes - Indicates the attribute names and values that is to be set.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    setAttributes(attributes: AttributesRecord): void;

    /**
     * Removes attributes from the target node.
     *
     * @param { string[] } attributeNames - Indicates the attribute names that is to be removed.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    removeAttributes(attributeNames: string[]): void;

    /**
     * Returns all attribute name and value pairs of this node.
     *
     * @returns { AttributesRecord } Indicates all attribute name and value pairs.
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getAttributes(): AttributesRecord;
  }

  /**
   * Indicates possible format value types.
   *
   * @typedef { null | number | string | boolean } FormatValueType
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  type FormatValueType = null | number | string | boolean;

  /**
   * Values in text format are stored in key-value pairs.
   *
   * @typedef { Record<string, FormatValueType> } TextFormat
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  type TextFormat = Record<string, FormatValueType>;

  /**
   * Provides methods for managing text in the edit unit.
   *
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  class Text {
    /**
     * A constructor used to create a Text instance.
     *
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    constructor();

    /**
     * Returns the UniqueId of this text.
     *
     * @returns { UniqueId } Indicates the unique id of this text.
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getId(): UniqueId;

    /**
     * Inserts text with optional format into the target text in index location.
     *
     * @param { number } index - Indicates the index at which to start inserting.
     * @param { string } text - Indicates the text to insert at the specified position.
     * @param { TextFormat } format - Indicates the formatting information to apply on the inserted text.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    insert(index: number, text: string, format?: TextFormat): void;

    /**
     * Deletes continuous length into the target text in index location.
     *
     * @param { number } index - Indicates the index at which to start inserting.
     * @param { number } length - Indicates deleting length.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    delete(index: number, length: number): void;

    /**
     * Formats continuous length into the target text from index location.
     *
     * @param { number } index - Indicates the index at which to start formatting.
     * @param { number } length - Indicates formatting length.
     * @param { TextFormat } format - Indicates the formatting information to apply.
     * @throws { BusinessError } 202 - not system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    format(index: number, length: number, format: TextFormat): void;

    /**
     * Get the plain string result without format of this text.
     *
     * @returns { string } Indicates the plain string result of this text.
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getPlainText(): string;

    /**
     * Get the json string result with format of this text.
     *
     * @returns { string } Indicates the json string result of this text.
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    getJsonResult(): string;
  }

  /**
   * Provides methods for managing undo redo operations in the collaboration edit object.
   *
   * @interface UndoRedoManager
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @systemapi
   * @since 16
   */
  interface UndoRedoManager {
    /**
     * Undo last changes.
     *
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    undo(): void;

    /**
     * Redo last undo operation.
     *
     * @throws { BusinessError } 202 - not system application
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @systemapi
     * @since 16
     */
    redo(): void;
  }
}

export default collaborationEditObject;
