/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';

/**
 * UDMF - Unified Data Management Framework
 *
 * @namespace UDMF
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 */
declare namespace UDMF {
  /**
   * the data type supported by unified data
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  enum UnifiedDataType {
    /**
     * indicate the data type is text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    TEXT = 'Text',
    /**
     * indicate the data type is plain text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    PLAIN_TEXT = 'Text.PlainText',
    /**
     * indicate the data type is hyperlink
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    HYPERLINK = 'Text.Hyperlink',
    /**
     * indicate the data type is html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    HTML = 'Text.HTML',
    /**
     * indicate the data type is File
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FILE = 'File',
    /**
     * indicate the data type is image
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    IMAGE = 'File.Media.Image',
    /**
     * indicate the data type is video
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    VIDEO = 'File.Media.Video',
    /**
     * indicate the data type is audio
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    AUDIO = 'File.Media.Audio',
    /**
     * indicate the data type is Folder
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    FOLDER = 'File.Folder',
    /**
     * indicate the data type is system defined record(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    SYSTEM_DEFINED_RECORD = 'SystemDefinedType',
    /**
     * indicate the data type is system defined form(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    SYSTEM_DEFINED_FORM = 'SystemDefinedType.Form',
    /**
     * indicate the data type is system defined app item(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    SYSTEM_DEFINED_APP_ITEM = 'SystemDefinedType.AppItem',
    /**
     * indicate the data type is system defined pixel map(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    SYSTEM_DEFINED_PIXEL_MAP = 'SystemDefinedType.PixelMap',
    /**
     * indicate the data type is application defined data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    APPLICATION_DEFINED_RECORD = 'ApplicationDefinedType'
  }

  /**
   * describe the unified data, which can at most contains 512 unified data records, and its maximum memory is 512M.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class UnifiedData {
    /**
     * create unified data with a record
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    constructor(record: UnifiedRecord);
    /**
     * add a record into unified data
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    addRecord(record: UnifiedRecord): void;
    /**
     * get all records of unified data
     *
     * @returns { Array<UnifiedRecord> } Return the records of unified data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    getRecords(): Array<UnifiedRecord>;
  }

  /**
   * the data abstract supported by unified data
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class Summary {
    /**
     * a map for each type and data size, key is data type, value is the corresponding data size
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    summary: { [key: string]: number };
    /**
     * total data size of data in Bytes
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    totalSize: number;
  }

  /**
   * describe the unified record
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class UnifiedRecord {
    /**
     * get type of unified record
     *
     * @returns { string } Return the type of unified data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    getType(): string;
  }

  /**
   * describe the unified text data
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class Text extends UnifiedRecord {
    /**
     * indicates the details of unified text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    details?: { [key: string]: string };
  }

  /**
   * describe the unified plain text data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class PlainText extends Text {
    /**
     * indicates the content of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    textContent: string;
    /**
     * indicates the abstract of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    abstract?: string;
  }

  /**
   * describe the unified link data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class Hyperlink extends Text {
    /**
     * indicates the url of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    url: string;
    /**
     * indicates the description of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    description?: string;
  }

  /**
   * describe the unified html data
   *
   * @extends Text
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class HTML extends Text {
    /**
     * indicates the content of html, with html tags
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    htmlContent: string;
    /**
     * indicates the plain content of html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    plainContent?: string;
  }

  /**
   * describe the unified file data
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class File extends UnifiedRecord {
    /**
     * indicates the details of unified File
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    details?: { [key: string]: string };
    /**
     * indicates the uri of file
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    uri: string;
  }

  /**
   * describe the unified image data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class Image extends File {
    /**
     * indicates the uri of image
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    imageUri: string;
  }

  /**
   * describe the unified video data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class Video extends File {
    /**
     * indicates the uri of video
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    videoUri: string;
  }

  /**
   * describe the unified audio data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class Audio extends File {
    /**
     * indicates the uri of audio
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    audioUri: string;
  }

  /**
   * describe the unified folder data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class Folder extends File {
    /**
     * indicates the uri of folder
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    folderUri: string;
  }

  /**
   * describe system defined type data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class SystemDefinedRecord extends UnifiedRecord {
    /**
     * indicates the details of system defined data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    details?: { [key: string]: number | string | Uint8Array };
  }

  /**
   * describe system defined form data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends SystemDefinedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class SystemDefinedForm extends SystemDefinedRecord {
    /**
     * indicates the id of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    formId: number;
    /**
     * indicates the name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    formName: string;
    /**
     * indicates the bundle name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    bundleName: string;
    /**
     * indicates the ability name of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    abilityName: string;
    /**
     * indicates the module of form
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    module: string;
  }

  /**
   * describe system defined app item data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends SystemDefinedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class SystemDefinedAppItem extends SystemDefinedRecord {
    /**
     * indicates the app id
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    appId: string;
    /**
     * indicates the app name
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    appName: string;
    /**
     * indicates the id of app icon
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    appIconId: string;
    /**
     * indicates the id of app label
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    appLabelId: string;
    /**
     * indicates the bundle name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    bundleName: string;
    /**
     * indicates the ability name of app
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    abilityName: string;
  }

  /**
   * describe system defined pixel map data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends SystemDefinedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class SystemDefinedPixelMap extends SystemDefinedRecord {
    /**
     * indicates the raw data of pixel map
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    rawData: Uint8Array;
  }

  /**
   * describe application defined data(this kind of data is provided and bound to OpenHarmony,
   * also can be parsed by system provided API)
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class ApplicationDefinedRecord extends UnifiedRecord {
    /**
     * indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    applicationDefinedType: string;
    /**
     * indicates the raw data of application defined data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    rawData: Uint8Array;
  }

  /**
   * describe the sharing channel that UDMF support
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  enum Intention {
    /**
     * indicates the intention of super hub
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    SUPER_HUB = 'SuperHub'
  }

  /**
   * describe the optional arguments of data operation
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  type Options = {
    /**
     * indicates the target Intention
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    intention?: Intention;

    /**
     * indicates the unique identifier of target UnifiedData
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    key?: string;
  };

  /**
   * Insert data into UDMF by Intention
   *
   * @param { Options } options - fill the intention field to indicate the target {@link Intention}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to insert into target intention.
   * @param { AsyncCallback<string> } callback - {string}: the unique identifier.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>): void;

  /**
   * Insert data into UDMF by Intention
   *
   * @param { Options } options - fill the intention field to indicate the target {@link Intention}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to insert into target intention.
   * @returns { Promise<string> } {string}: the unique identifier.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function insertData(options: Options, data: UnifiedData): Promise<string>;

  /**
   * Update data to UDMF by Unique Identifier
   *
   * @param { Options } options - fill the unique identifier field to indicate the target {@link UnifiedData}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to update the target data.
   * @param { AsyncCallback<void> } callback - the callback of updateData.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function updateData(options: Options, data: UnifiedData, callback: AsyncCallback<void>): void;

  /**
   * Update data to UDMF by Unique Identifier
   *
   * @param { Options } options - fill the unique identifier field to indicate the target {@link UnifiedData}.
   * @param { UnifiedData } data - {@link UnifiedData} data object to update the target data.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function updateData(options: Options, data: UnifiedData): Promise<void>;

  /**
   * Query data of UDMF by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention} or {@link UnifiedData}.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - {Array<UnifiedData>}: the target {@link UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function queryData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * Query data of UDMF by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention} or {@link UnifiedData}.
   * @returns { Promise<Array<UnifiedData>> } {Array<UnifiedData>}: the target {@link UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function queryData(options: Options): Promise<Array<UnifiedData>>;

  /**
   * Delete data of UDMF by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention} or {@link UnifiedData}.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - {Array<UnifiedData>}: the deleted {@link UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function deleteData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * Delete data of UDMF by Intention or Unique Identifier
   *
   * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention} or {@link UnifiedData}.
   * @returns { Promise<Array<UnifiedData>> } {Array<UnifiedData>}: the deleted {@link UnifiedData} object array.
   * @throws { BusinessError } 201 - Permission denied..
   * @throws { BusinessError } 401 - Parameter error..
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  function deleteData(options: Options): Promise<Array<UnifiedData>>;
}

export default UDMF;
