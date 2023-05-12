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

/**
 * UDMF - Unified Data Management Framework
 *
 * @namespace UDMF
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @import import unifiedData from '@ohos.data.UDMF';
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
    HYPER_LINK = 'Text.HyperLink',
    /**
     * indicate the data type is html
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    HTML = 'Text.HTML',
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
     * @returns { Array<UnifiedRecord> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     * @return the records of unified data
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
     * @returns { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     * @return the type of unified data
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
  class HyperLink extends Text {
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
   * describe the unified image data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @since 10
   */
  class Image extends UnifiedRecord {
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
  class Video extends UnifiedRecord {
    /**
     * indicates the uri of video
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    videoUri: string;
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
}

export default UDMF;
