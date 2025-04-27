/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import image from './@ohos.multimedia.image';

/**
 * systemPasteboard
 * @namespace pasteboard
 * @syscap SystemCapability.MiscServices.Pasteboard
 * @atomicservice
 * @since 20
 */
declare namespace pasteboard {
  /**
   * Indicates MIME types of URIs.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  const MIMETYPE_TEXT_URI: string;

  /**
   * Indicates MIME types of HTML text.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  const MIMETYPE_TEXT_HTML: string;

  /**
   * Indicates MIME types of plain text.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  const MIMETYPE_TEXT_PLAIN: string;

  /**
   * Indicates MIME type of PixelMap.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  const MIMETYPE_PIXELMAP: string;

  /**
   * Indicates MIME types of wants.
   * @constant
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  const MIMETYPE_TEXT_WANT: string;

  /**
   * Indicates type of value.
   * @typedef { string | image.PixelMap | Want | ArrayBuffer }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  type ValueType = string | image.PixelMap | Want | ArrayBuffer;

  /**
   * Creates a PasteData object with MIME type and value.
   * @param { string } mimeType - indicates MIME type of value, its size cannot be greater than 1024 bytes.
   * @param { ValueType } value - indicates the content that is set to PasteData.
   * @returns { PasteData } a new PasteData object which contains mimeType and value.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified; 
   *    2. Incorrect parameters types;
   *    3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  function createData(mimeType: string, value: ValueType): PasteData;

  /**
   * Creates a PasteData object with the specified MIME types and values.
   * @param { Record<string, ValueType> } data - indicates the MEME types and values of the PasteData object to create.
   * @returns { PasteData } Returns the PasteData object created.
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *    2. Incorrect parameters types;
   *    3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 20
   */
  function createData(data: Record<string, ValueType>): PasteData;

  /**
   * get SystemPasteboard
   * @returns { SystemPasteboard } The system clipboard object
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  function getSystemPasteboard(): SystemPasteboard;

  /**
   * Types of scope that PasteData can be pasted.
   * @enum { number }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  enum ShareOption {
    /**
     * INAPP indicates that only paste in the same app is allowed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    INAPP,
    /**
     * LOCALDEVICE indicates that paste in any app in this device is allowed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    LOCALDEVICE,
    /**
     * CROSSDEVICE indicates that paste in any app across devices is allowed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     * @deprecated since 12
     */
    CROSSDEVICE
  }

  /**
   * Enumerates the patterns allowed in the system pasteboard.
   * @enum { number }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 20
   */
  enum Pattern {
    /**
     * URL pattern.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 20
     */
    URL = 0,
    /**
     * Number pattern.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 20
     */
    NUMBER = 1,
    /**
     * Email address pattern.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 20
     */
    EMAIL_ADDRESS = 2,
  }

  /**
   * Paste data property.
   * @interface PasteDataProperty
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  export interface PasteDataProperty {
     /**
     * the user-defined tag of a PasteData object.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    tag: string;
    /**
     * a timestamp, which indicates when data is written to the system pasteboard.
     * @type { number }
     * @readonly
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    readonly timestamp: number;
    /**
     * Indicates the scope of clipboard data which can be pasted.
     * If it is not set or is incorrectly set, The default value is CrossDevice.
     * @type { ShareOption }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    shareOption: ShareOption;
  }

  /**
   * Paste data record.
   * @interface PasteDataRecord
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  export interface PasteDataRecord {
    /**
     * MIME types of a record.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    mimeType: string;
    /**
     * plain text in a record.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    plainText: string;
    /**
     * an URI in a record.
     * @type { string }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    uri: string;
  }

  /**
   * Classes for paste data.
   * @interface PasteData
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  export interface PasteData {
    /**
     * Adds a PasteRecord to a PasteData object and updates MIME types in DataProperty.
     * @param { PasteDataRecord } record - The content of a new record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    addRecord(record: PasteDataRecord): void;

    /**
     * Adds a record with mimeType and value to a PasteData object.
     * @param { string } mimeType - indicates the MIME type of value, its size cannot be greater than 1024 bytes.
     * @param { ValueType } value - content to be saved.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect parameters types;
     *    3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    addRecord(mimeType: string, value: ValueType): void;

    /**
     * DataProperty of a PasteData object.
     * @returns { PasteDataProperty } PasteDataProperty type of PasteDataProperty
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    getProperty(): PasteDataProperty;

    /**
     * Sets PasteDataProperty to a PasteData object, Modifying shareOption is supported only.
     * @param { PasteDataProperty } property - save property to PasteData object.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    setProperty(property: PasteDataProperty): void;

    /**
     * Gets record by index in PasteData.
     * @param { number } index - indicates the record index in PasteData.
     * @returns { PasteDataRecord } the record in PasteData with index.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect parameters types.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    getRecord(index: number): PasteDataRecord;

    /**
     * the number of records in a PasteData object.
     * @returns { number } The number of the clipboard contents
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    getRecordCount(): number;
  }

  /**
   * Represents the get data parameters when getting PasteData from Pasteboard.
   * @interface GetDataParams
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  interface GetDataParams {
    /**
     * DestUri indicates the uri of dest path where copy files will be copied to sandbox of Application.
     * @type { ?string }
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    destUri?: string;

    /**
     * FileConflictOptions indicates fileConflictOptions when dest path has file with same name.
     * @type { ?FileConflictOptions }
     * @default FileConflictOptions.OVERWRITE
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    fileConflictOptions?: FileConflictOptions;

    /**
     * ProgressIndicator indicates whether to use default system progress indicator.
     * @type { ProgressIndicator }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    progressIndicator: ProgressIndicator;

    /**
     * ProgressListener indicates progress listener when getting PasteDate without using default system progress.
     * @type { ?ProgressListener }
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    progressListener?: ProgressListener;

    /**
     * Progress signal when getting PasteData with system progress indacator.
     * @type { ?ProgressSignal }
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    progressSignal?: ProgressSignal;
  }

    /**
   * Enumerates the types of file conflict options when getting data from the Pastedboard.
   * @enum { number }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  enum FileConflictOptions {
    /**
     * OVERWRITE overwrite when destUri has file with same name.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    OVERWRITE,

    /**
     * SKIP skip when destUri has file with same name.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    SKIP
  }

  /**
   * Enumerates the types of progress indicator when getting data from the Pastedboard.
   * @enum { number }
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  enum ProgressIndicator {
    /**
     * NONE getting data without system default progress indicator.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    NONE,

    /**
     * DEFALUT getting data with system default progress indicator.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    DEFAULT
  }

  /**
   * Indicates progress of getting PasteData.
   * @typedef { function } ProgressListener
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  type ProgressListener = (progress: ProgressInfo) => void;

  /**
   * Notifies progress when getting PasteData.
   * @interface ProgressInfo
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  interface ProgressInfo {
    /**
     * Progress when getting PasteData without using default system progress.
     * @type { number }
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    progress: number;
  }

  /**
   * Indicates the signals to process default system progress task.
   * @class ProgressSignal
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  export class ProgressSignal {
    /**
     * Cancel the paste in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    cancel(): void;
  }

  /**
   * Classes for system pasteboard.
   * @interface SystemPasteboard
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 20
   */
  export interface SystemPasteboard {
    /**
     * Gets source of data.
     * @returns { string } data source.
     * @throws { BusinessError } 12900005 - Request timed out.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    getDataSource(): string;

    /**
     * Checks whether there is a specified MIME type of data in Data.
     * @param { string } mimeType - indicates to query data type.
     * @returns { boolean } if having mimeType in PasteData returns true, else returns false.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect parameters types.
     * @throws { BusinessError } 12900005 - Request timed out.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    hasDataType(mimeType: string): boolean;

    /**
     * Clears the pasteboard.
     * @param { AsyncCallback<void> } callback - the callback of clearData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    clearData(callback: AsyncCallback<void>): void;

    /**
     * Clears the pasteboard.
     * @returns { Promise<void> } the promise returned by the clearData.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    clearData(): Promise<void>;

    /**
     * Gets pasteData from the system pasteboard.
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { PasteData }  a new PasteData.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *    permission required to call the API.
     * @throws { BusinessError } 12900005 - Request timed out.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    getDataSync(): PasteData;

    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard
     * @param { AsyncCallback<void> } callback - the callback of setData.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect parameters types.
     * @throws { BusinessError } 12900003 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 12900004 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    setData(data: PasteData, callback: AsyncCallback<void>): void;

    /**
     * Writes PasteData to the system pasteboard.
     * @param { PasteData } data - PasteData will be written to the clipboard.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *    2. Incorrect  parameters types.
     * @throws { BusinessError } 12900003 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 12900004 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 20
     */
    setData(data: PasteData): Promise<void>;
  }
}

export default pasteboard;