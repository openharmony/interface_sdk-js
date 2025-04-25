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
 * @kit ArkData
 */

import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
import Want from './@ohos.app.ability.Want';

/**
 * Provide methods for sharing data between different applications across unified data channels.
 *
 * @namespace unifiedDataChannel
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare namespace unifiedDataChannel {
  /**
   * Types of scope that UnifiedData can be used.
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 20
   */
  enum ShareOptions {
    /**
     * IN_APP indicates that only use in the same app is allowed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20
     */
    IN_APP,
    /**
     * CROSS_APP indicates that use in any app in this device is allowed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20
     */
    CROSS_APP
  }
  /**
   * Indicated delay get UnifiedData
   *
   * @typedef {function} GetDelayData
   * @param { string } type - the type of UnifiedData required.
   * @returns { UnifiedData } Return the UnifiedData required.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 20
   */
  type GetDelayData = (type: string) => UnifiedData;
  /**
   * Indicates type of value.
   * @typedef {number | string | boolean | image.PixelMap | Want | ArrayBuffer | object | null | undefined}
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  type ValueType = number | string | boolean | image.PixelMap | Want | ArrayBuffer | object | null | undefined;
  
  /**
   * The data abstract supported by unified data
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 20
   */
  export class Summary {
    
    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @type { Record<string, number> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20
     */
    summary: Record<string, number>;
    
    /**
     * Total data size of data in Bytes
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20
     */
    totalSize: number;
  }
  /**
   * Describe the unified data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  export class UnifiedData {
     /**
     * Create unified data with a record
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect Parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(record: UnifiedRecord);
    /**
     * Create a empty unified data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Add a record into unified data
     *
     * @param { UnifiedRecord } record - Record will add into unified data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect Parameters types.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    addRecord(record: UnifiedRecord): void;
     /**
     * Get all records of unified data
     *
     * @returns { Array<UnifiedRecord> } Return the records of unified data
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getRecords(): Array<UnifiedRecord>;
  }

  /**
   * Describe the unified record
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  class UnifiedRecord {
    /**
     * Create unified record.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Create unified record by type and value.
     *
     * @param { string } type - indicates to data type of unified record. It can not be empty. When type of value is object, parameter type must be pixel-map or want UTD type.
     * @param { ValueType } value - indicates to value of unified record.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect Parameters types;
     * <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(type: string, value: ValueType);
  }
  /**
   * Describe the unified file data
   *
   * @extends UnifiedRecord
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  class File extends UnifiedRecord {
    /**
     * Indicates the details of unified File
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    details?: Record<string, string>;
    /**
     * Indicates the uri of file
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    uri: string;
  }
  /**
   * Describe the unified video data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  class Video extends File {
    /**
     * Indicates the uri of video
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    videoUri: string;
  }
  /**
   * Describe the unified image data
   *
   * @extends File
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  class Image extends File {
    /**
     * Indicates the uri of image
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    imageUri: string;
  }
  /**
   * Describe the unified data properties.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @atomicservice
   * @since 20
   */
  class UnifiedDataProperties {
    /**
     * extra property data. key-value pairs.
     * @type { ?Record<string, object> }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20
     */
    extras?: Record<string, object>;

    /**
     * the user-defined tag of a UnifiedData object.
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20
     */
    tag?: string;
    /**
     * a timestamp, which indicates when data is written.
     * @type { ?Date }
     * @readonly
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20
     */
    readonly timestamp?: Date;
    /**
     * Indicates the scope of clipboard data which can be used.
     * If it is not set or is incorrectly set, The default value is CrossDevice.
     * @type { ?ShareOptions }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20
     */
    shareOptions?: ShareOptions;

    /**
     * Indicated delay get UnifiedData.
     * @type { ?GetDelayData }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @atomicservice
     * @since 20
     */
    getDelayData?: GetDelayData;
  }
}

export default unifiedDataChannel;
