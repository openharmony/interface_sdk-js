/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
import image from "./@ohos.multimedia.image";
import Want from "./@ohos.app.ability.Want";

/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * As a part of the Unified Data Management Framework (UDMF), the **unifiedDataChannel** module provides unified data 
 * channels and standard data access interfaces for many-to-many data sharing across applications. It also provides 
 * definitions for uniform data types, such as text and image, to streamline data interaction between different 
 * applications and minimize the workload of data type adaptation. Although the UDMF does not parse user data, you are 
 * advised not to transfer sensitive personal data or privacy data due to low-level security of storage path.
 *
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @stagemodelonly
 * @crossplatform [since 14]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace unifiedDataChannel {
  /**
   * Enumerates the options for using **UnifiedData** in a device.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum ShareOptions {
    /**
     * **UnifiedData** can be used only in the same application of a device.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    IN_APP = 0,
    /**
     * **UnifiedData** can be used across applications of a device.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CROSS_APP = 1
  }

  /**
   * Defines a function used to obtain a deferred **UnifiedData** object. Currently, it can be used only in the 
   * pasteboard application of the same device.
   *
   * @param { string } type - Identifier of the deferred encapsulation.
   * @returns { UnifiedData } **UnifiedData** object.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type GetDelayData = (type: string) => UnifiedData;

    /**
   * Enumerates the data field types allowed in a unified data record.
   *
   * @unionmember { int } Int.
   * @unionmember { long } Long.
   * @unionmember { double } Double.
   * @unionmember { string } String.
   * @unionmember { boolean } Boolean.
   * @unionmember { image.PixelMap } The value is of the [image.PixelMap]{@link @ohos.multimedia.image:image} type.
   * @unionmember { Want } [Want]{@link @ohos.app.ability.Want:Want}.
   * @unionmember { ArrayBuffer } ArrayBuffer.
   * @unionmember { object } Object.
   * @unionmember { null } Null.
   * @unionmember { undefined } Undefined.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice
   * @since 12 dynamic
   */
  type ValueType = int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | object | null | undefined;

  /**
   * Indicates type of value.
   *
   * @unionmember { int } Int.
   * @unionmember { long } Long.
   * @unionmember { double } Double.
   * @unionmember { string } String.
   * @unionmember { boolean } Boolean.
   * @unionmember { image.PixelMap } The value is of the [image.PixelMap]{@link @ohos.multimedia.image:image} type.
   * @unionmember { Want } [Want]{@link @ohos.app.ability.Want:Want}.
   * @unionmember { ArrayBuffer } ArrayBuffer.
   * @unionmember { RecordData } RecordData.
   * @unionmember { null } Null.
   * @unionmember { undefined } Undefined.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @since 23 static
   */
  type ValueType = int | long | double | string | boolean | image.PixelMap | Want | ArrayBuffer | RecordData | null | undefined;

  /**
   * Defines URI permissions for drag intention.
   * 
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export const enum UriPermission {  
    /**
     * No permissions granted.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    NONE = 0,

    /**
     * Permission to read or view data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    READ = 1,

    /**
     * Permission to modify data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    WRITE = 2,

    /**
     * Permission to persist files.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PERSIST = 3
  }

  /**
   * Defines the properties of the data records in the unified data object, including the timestamp, tag, pasting range,
   * and additional data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class UnifiedDataProperties {
    /**
     * Object of the dictionary type used to set other properties. The default value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     */
    extras?: Record<string, object>;

    /**
     * extra property data. key-value pairs.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    extras?: Record<string, RecordData>;

    /**
     * Customized tag. The default value is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    tag?: string;
    /**
     * Timestamp when [UnifiedData]{@link unifiedDataChannel.UnifiedDataProperties} is generated. The default value is 
     * January 1, 1970 (UTC).
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readonly timestamp?: Date;
    /**
     * Range, in which [UnifiedData]{@link unifiedDataChannel.UnifiedDataProperties} can be used. The default value is 
     * **CROSS_APP**.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    shareOptions?: ShareOptions;

    /**
     * Callback for obtaining the deferred data. Currently, it can be used only in the pasteboard application of the 
     * same device. The default value is **undefined**.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getDelayData?: GetDelayData;

    /**
     * Defines URI authorization policies for drag intention.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    uriAuthorizationPolicies?: Array<UriPermission>;
  }

  /**
   * Provides APIs for encapsulating a set of data records.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class UnifiedData {
    /**
     * Defines a constructor used to create a **UnifiedData** object with a data record.
     *
     * @param { UnifiedRecord } record - Data record in the **UnifiedData** object. It is a **UnifiedRecord** object or
     *     its child class object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    constructor(record: UnifiedRecord);
    /**
     * Defines a constructor used to create a **UnifiedData** object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * Adds a data record to this **UnifiedRecord** object.
     *
     * @param { UnifiedRecord } record - Data record to add. It is a **UnifiedRecord** child class object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    addRecord(record: UnifiedRecord): void;
    /**
     * Obtains all data records from this **UnifiedData** object. The data obtained is of the **UnifiedRecord** type. 
     * Before using the data, you need to use [getType]{@link unifiedDataChannel.UnifiedData.getTypes} to obtain the 
     * data type and convert the data type to a child class.
     *
     * @returns { Array<UnifiedRecord> } Records in the **UnifiedData** object obtained.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getRecords(): Array<UnifiedRecord>;

    /**
     * Checks whether this **UnifiedData** object contains the specified data type, including the data types added by 
     * using the [addEntry]{@link unifiedDataChannel.UnifiedRecord.addEntry} function.
     * 
     * For file types, if the type set of **UnifiedData** includes **general.jpeg**, calling the **hasType** API to 
     * check for the **general.image** type will return **true**. This is because the **general.jpeg** type belongs to 
     * the **general.image** type.
     *
     * @param { string } type - Data type to check. For details, see
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     * @returns { boolean } Returns **true** if the specified data type exists; returns **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hasType(type: string): boolean;

    /**
     * Obtains the types of all data records in this **UnifiedData** object.
     *
     * @returns { Array<string> } Array of the
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType} types
     *     obtained.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getTypes(): Array<string>;

    /**
     * UnifiedData properties.
     *
     * @returns { UnifiedDataProperties } Properties of all data records in a unified data. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get properties(): UnifiedDataProperties;

    /**
     * UnifiedData properties.
     *
     * @param { UnifiedDataProperties } Properties of all data records in a unified data. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    set properties(value: UnifiedDataProperties);
  }

  /**
   * Summarizes the data information of the **unifiedData** object, including the data type and size.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Summary {
    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @returns { Record<string, long> } Type and size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get summary(): Record<string, long>;

    /**
     * A map for each type and data size, key is data type, value is the corresponding data size
     *
     * @param { Record<string, long> } Type and size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set summary(value: Record<string, long>);

    /**
     * Total data size of data in Bytes
     *
     * @returns { long } Total size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get totalSize(): long;

    /**
     * Total data size of data in Bytes
     *
     * @param { long } Total size information of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set totalSize(value: long);

    /**
     * Indicates the overview information of unifiedData.
     *
     * @returns { Record<string, long> } Key represents the data type, and value represents the corresponding data
     *     size. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    get overview(): Record<string, long>;
  }

  /**
   * An abstract definition of the data content supported by the UDMF. A **UnifiedRecord** object contains one or more 
   * data records, for example, a text record, an image record, or an HTML record. Since API version 15, different 
   * styles of the same content can be added to a **UnifiedRecord** object. Data users can obtain the corresponding 
   * styles as required.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class UnifiedRecord {
    /**
     * Obtains the type of this **UnfiedRecord**. The data obtained by 
     * [getRecords]{@link unifiedDataChannel.UnifiedData.getRecords} from the **UnifiedData** object is a 
     * **UnifiedRecord** object. You need to use this API to obtain the specific type of the record, convert the 
     * **UnifiedRecord** object to its child class, and call the child class interfaces.
     *
     * @returns { string } Data type obtained. For details, see
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getType(): string;

    /**
     * Defines a constructor used to create a **UnfiedRecord** object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Defines a constructor used to create a data record with the specified type and value.
     * 
     * If **value** is of the [image.PixelMap]{@link @ohos.multimedia.image:image} type, **type** must be the value of 
     * **OPENHARMONY_PIXEL_MAP** in 
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     * 
     * If **value** is of the [Want]{@link @ohos.app.ability.Want:Want} type, **type** must be the value of 
     * **OPENHARMONY_WANT** in 
     * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     *
     * @param { string } type - Type of the data record to create.
     * @param { ValueType } value - Value of the data record to create.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(type: string, value: ValueType);

    /**
     * Obtains the value of this data record.
     *
     * @returns { ValueType } Value obtained.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getValue(): ValueType;

    /**
     * Obtains all the data types in the data record. This API can be called using the **UnifiedRecord** object to query
     * all data types in the record, including the data types added using the 
     * [addEntry]{@link unifiedDataChannel.UnifiedRecord.addEntry} function.
     *
     * @returns { Array<string> } Array of
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}s obtained.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getTypes(): Array<string>;

    /**
     * Adds data of a specified data type and content to the current data record. You can use this API to add different 
     * data types and contents to the same data.
     *
     * @param { string } type - Type of the data to add. For details, see
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     * @param { ValueType } value - Value of the data to add.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    addEntry(type: string, value: ValueType): void;

    /**
     * Obtains data of the specified type from the data record.
     *
     * @param { string } type - Type of the data to obtain. For details, see
     *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
     * @returns { ValueType } Value obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getEntry(type: string): ValueType;

    /**
     * Obtains all the data in the current data record.
     *
     * @returns { Record<string, ValueType> } Values and types obtained.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getEntries(): Record<string, ValueType>;
  }

  /**
   * Represents the text data. It is a child class of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and a base
   * class of text data. You are advised to use the child class of **Text**, for example, 
   * [PlainText]{@link unifiedDataChannel.PlainText}, [Hyperlink]{@link unifiedDataChannel.Hyperlink}, and 
   * [HTML]{@link unifiedDataChannel.HTML}, to describe data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Text extends UnifiedRecord {
    /**
     * A dictionary type object, where both the key and value are of the string type and are used to describe the text 
     * content. For example, a data object with the following content can be created to describe a text file:
     * 
     * {
     * 
     * "title":"Title of the file",
     * 
     * "content":"Content of the file"
     * 
     * }
     * 
     * The default value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    details?: Record<string, string>;

    /**
     * Indicates the details of unified text
     *
     * @returns { Record<string, string> | undefined } the details of unified text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, string> | undefined;

    /**
     * Indicates the details of unified text
     *
     * @param { Record<string, string> | undefined } the details of unified text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, string> | undefined);
  }

  /**
   * Represents the plain text data. It is a child class of [Text]{@link unifiedDataChannel.Text}.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class PlainText extends Text {
    /**
     * Indicates the content of text
     *
     * @returns { string } the content of text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get textContent(): string;

    /**
     * Indicates the content of text
     *
     * @param { string } the content of text [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set textContent(value: string);

    /**
     * Indicates the abstract of text
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    abstract?: string;

    /**
     * Indicates the abstract of text
     *
     * @returns { string | undefined } the abstract of text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    get textAbstract(): string | undefined;

    /**
     * Indicates the abstract of text
     *
     * @param { string | undefined } the abstract of text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 23 static
     */
    set textAbstract(value: string | undefined);
  }

  /**
   * Represents the hyperlink data. It is a child class of [Text]{@link unifiedDataChannel.Text}.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Hyperlink extends Text {
    /**
     * Indicates the url of a link
     *
     * @returns { string } the url of a link [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get url(): string;

    /**
     * Indicates the url of a link
     *
     * @param { string } the url of a link [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set url(value: string);

    /**
     * Indicates the description of a link
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    description?: string;

    /**
     * Indicates the description of a link
     *
     * @returns { string | undefined } the description of a link. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get description(): string | undefined;

    /**
     * Indicates the description of a link
     *
     * @param { string | undefined } the description of a link [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set description(value: string | undefined);
  }

  /**
   * Represents the HTML data. It is a child class of [Text]{@link unifiedDataChannel.Text}.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class HTML extends Text {
    /**
     * Indicates the content of html, with html tags
     *
     * @returns { string } the content of html. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get htmlContent(): string;

    /**
     * Indicates the content of html, with html tags
     *
     * @param { string } the content of html. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set htmlContent(value: string);

    /**
     * Plaintext without HTML tags. This parameter is optional. The default value is an empty string.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    plainContent?: string;

    /**
     * Indicates the plain content of html
     *
     * @returns { string | undefined } the plain content of html [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get plainContent(): string | undefined;

    /**
     * Indicates the plain content of html
     *
     * @param { string | undefined} the plain content of html [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set plainContent(value: string | undefined);

    /**
     * Defines URI authorization policies for drag intention.
     *
     * @param { Array<UriPermission> | undefined } value - URI authorization policies.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    set uriAuthorizationPolicies(value: Array<UriPermission> | undefined);
  }

  /**
   * Represents the file data. It is a child class of [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and a base
   * class of the data of the file type. You are advised to use the child class of **File**, for example, 
   * [Image]{@link unifiedDataChannel.Image}, [Video]{@link unifiedDataChannel.Video}, and 
   * [Folder]{@link unifiedDataChannel.Folder}, to describe data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class File extends UnifiedRecord {
    /**
     * A dictionary type object, where both the key and value are of the string type and are used to describe file 
     * information. For example, a data object with the following content can be created to describe a file:
     * 
     * {
     * 
     * "name":"File name",
     * 
     * "type":"File type"
     * 
     * }
     * 
     * The default value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    details?: Record<string, string>;

    /**
     * Indicates the details of unified File
     *
     * @returns { Record<string, string> | undefined } the details of unified File [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, string> | undefined;

    /**
     * Indicates the details of unified File
     *
     * @param { Record<string, string> } the details of unified File. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, string> | undefined);

    /**
     * Indicates the uri of file
     *
     * @returns { string } the uri of file. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get uri(): string;

    /**
     * Indicates the uri of file
     *
     * @param { string } the uri of file. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set uri(value: string);

    /**
     * Defines URI authorization policies for drag intention.
     *
     * @param { Array<UriPermission> | undefined } value - URI authorization policies.
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    set uriAuthorizationPolicies(value: Array<UriPermission> | undefined);
  }

  /**
   * Represents the image data. It is a child class of [File]{@link unifiedDataChannel.File} and is used to describe 
   * images.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Image extends File {
    /**
     * Indicates the uri of image
     *
     * @returns { string } the uri of image. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get imageUri(): string;

    /**
     * Indicates the uri of image
     *
     * @param { string } the uri of image. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set imageUri(value: string);
  }

  /**
   * Represents video data. It is a child class of [File]{@link unifiedDataChannel.File} and is used to describe a video
   * file.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Video extends File {
    /**
     * Indicates the uri of video
     *
     * @returns { string } the uri of video. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get videoUri(): string;

    /**
     * Indicates the uri of video
     *
     * @param { string } the uri of video. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set videoUri(value: string);
  }

  /**
   * Represents audio data. It is a child class of [File]{@link unifiedDataChannel.File} and is used to describe an 
   * audio file.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Audio extends File {
    /**
     * Indicates the uri of audio
     *
     * @returns { string } the uri of audio. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get audioUri(): string;

    /**
     * Indicates the uri of audio
     *
     * @param { string } the uri of audio. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set audioUri(value: string);
  }

  /**
   * Represents the folder data. It is a child class of [File]{@link unifiedDataChannel.File} and is used to describe a 
   * folder.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @crossplatform [since 14]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class Folder extends File {
    /**
     * Indicates the uri of folder
     *
     * @returns { string } the uri of folder [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get folderUri(): string;

    /**
     * Indicates the uri of folder
     *
     * @param { string } the uri of folder [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @crossplatform [since 14]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set folderUri(value: string);
  }

  /**
   * Represents specific data types defined by OpenHarmony. It is a child class of 
   * [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and a base class of OpenHarmony-specific data types. You 
   * are advised to use the child class of **SystemDefinedRecord**, for example, 
   * [SystemDefinedForm]{@link unifiedDataChannel.SystemDefinedForm}, 
   * [SystemDefinedAppItem]{@link unifiedDataChannel.SystemDefinedAppItem}, and 
   * [SystemDefinedPixelMap]{@link unifiedDataChannel.SystemDefinedPixelMap}, to describe OpenHarmony-specific data.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
    class SystemDefinedRecord extends UnifiedRecord {
    /**
     * A dictionary type object, where the key is of the string type, and the value can be a number, a string, or a Uint
     * 8Array. The default value is an empty dictionary object.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    details?: Record<string, int | long | double | string | Uint8Array>;

    /**
     * Indicates the details of system defined data
     *
     * @returns { Record<string, int | long | double | string | Uint8Array> | undefined } the details of system defined
     *     data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    get details(): Record<string, int | long | double | string | Uint8Array> | undefined;

    /**
     * Indicates the details of system defined data
     *
     * @param { Record<string, int | long | double | string | Uint8Array> | undefined } the details of system defined
     *     data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 23 static
     */
    set details(value: Record<string, int | long | double | string | Uint8Array> | undefined);
  }

  /**
   * Represents the service widget data defined by the system. It is a child class of 
   * [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord}.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedForm extends SystemDefinedRecord {
    /**
     * Indicates the id of form
     *
     * @returns { int } the id of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get formId(): int;

    /**
     * Indicates the id of form
     *
     * @param { int } the id of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set formId(value: int);

    /**
     * Indicates the name of form
     *
     * @returns { string } the name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get formName(): string;

    /**
     * Indicates the name of form
     *
     * @param { string } the name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set formName(value: string);

    /**
     * Indicates the bundle name of form
     *
     * @returns { string } the bundle name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get bundleName(): string;

    /**
     * Indicates the bundle name of form
     *
     * @param { string } the bundle name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set bundleName(value: string);

    /**
     * Indicates the ability name of form
     *
     * @returns { string } the ability name of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get abilityName(): string;

    /**
     * Indicates the ability name of form.
     *
     * @param { string } the ability name of form [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set abilityName(value: string);

    /**
     * Indicates the module of form
     *
     * @returns { string } the module of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get module(): string;

    /**
     * Indicates the module of form
     *
     * @param { string } the module of form. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set module(value: string);
  }

  /**
   * Represents the data of the home screen icon defined by the system. It is a child class of 
   * [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord}.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedAppItem extends SystemDefinedRecord {
    /**
     * Indicates the app id
     *
     * @returns { string } the app id. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appId(): string;

    /**
     * Indicates the app id
     *
     * @param { string } the app id. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appId(value: string);

    /**
     * Indicates the app name
     *
     * @returns { string } the app name. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appName(): string;

    /**
     * Indicates the app name
     *
     * @param { string } the app name. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appName(value: string);

    /**
     * Indicates the id of app icon.
     * This field can be sourced from BMS or customized as needed.
     *
     * @returns { string } the id of app icon [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appIconId(): string;

    /**
     * Indicates the id of app icon.
     * This field can be sourced from BMS or customized as needed.
     *
     * @param { string } the id of app icon [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appIconId(value: string);

    /**
     * Indicates the id of app label.
     * This field can be sourced from BMS or customized as needed.
     *
     * @returns { string } the id of app label [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get appLabelId(): string;

    /**
     * Indicates the id of app label.
     * This field can be sourced from BMS or customized as needed.
     *
     * @param { string } the id of app label [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set appLabelId(value: string);

    /**
     * Indicates the bundle name of app
     *
     * @returns { string } the bundle name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get bundleName(): string;

    /**
     * Indicates the bundle name of app
     *
     * @param { string } the bundle name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set bundleName(value: string);

    /**
     * Indicates the ability name of app
     *
     * @returns { string } the ability name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get abilityName(): string;

    /**
     * Indicates the ability name of app
     *
     * @param { string } the ability name of app. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set abilityName(value: string);
  }

  /**
   * Represents the image data type corresponding to [PixelMap]{@link @ohos.multimedia.image:image} defined by the 
   * system. It is a child class of [SystemDefinedRecord]{@link unifiedDataChannel.SystemDefinedRecord} and holds only 
   * binary data of **PixelMap**.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class SystemDefinedPixelMap extends SystemDefinedRecord {
    /**
     * Indicates the raw data of pixel map
     *
     * @returns { Uint8Array } the raw data of pixel map. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get rawData(): Uint8Array;

    /**
     * Indicates the raw data of pixel map
     *
     * @param { Uint8Array } the raw data of pixel map. [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set rawData(value: Uint8Array);
  }

  /**
   * Represents the custom data type for applications only. It is a child class of 
   * [UnifiedRecord]{@link unifiedDataChannel.UnifiedRecord} and a base class of custom data types of applications. 
   * Applications can extend custom data types based on this class.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  class ApplicationDefinedRecord extends UnifiedRecord {
    /**
     * Indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @returns { string } the type of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get applicationDefinedType(): string;

    /**
     * Indicates the type of data, should always be started with 'ApplicationDefined.', will
     * return error otherwise
     *
     * @param { string } the type of data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set applicationDefinedType(value: string);

    /**
     * Indicates the raw data of application defined data
     *
     * @returns { Uint8Array } the raw data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    get rawData(): Uint8Array;

    /**
     * Indicates the raw data of application defined data
     *
     * @param { Uint8Array } the raw data [since 23]
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    set rawData(value: Uint8Array);
  }

  /**
   * Enumerates the data channel types supported by the UDMF. It is used to identify different service scenarios, to 
   * which the UDMF data channels apply.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum Intention {
    /**
     * Public data channel.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    DATA_HUB = 'DataHub',

    /**
     * Channel in which data can be dragged and dropped.
     * 
     * **Use scenario**: This API is used to share data across applications in drag-and-drop scenarios.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @systemapi [since 12 - 13]
     * @publicapi [since 14]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG = 'Drag',

    /**
     * Data channel of the system sharing type.
     * 
     * **Use scenario**: This API is used to share data across applications in system sharing scenarios.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SHARE = 'SystemShare',

    /**
     * Data channel of the picker type.
     * 
     * **Use scenario**: This API is used to share data across applications in the scenarios where a picker is used.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PICKER = 'Picker',

    /**
     * Data channel of the menu type.
     * 
     * **Use scenario**: This API is used to share data across applications in the shortcut menu.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    MENU = 'Menu'
  }

  /**
   * Enumerates the data visibility levels.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum Visibility {
    /**
     * Visible to all applications.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    ALL,

    /**
     * Visible only to the data provider.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    OWN_PROCESS
  }

  /**
   * Defines the data operation performed by the UDMF. It includes three optional parameters: **intention**, **key**, 
   * and **visibility**. The three parameters can be left unspecified. For details, see the parameter description of the
   * specific API.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * Type of the data channel related to the data operation.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    intention?: Intention;

    /**
     * Unique identifier of the data object in the UDMF, which can be obtained from the value returned by 
     * [insertData]{@link unifiedDataChannel.insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>)}.
     * 
     * The key consists of **udmf:/**, **intention**, **bundleName**, and **groupId** with a (/) in between, for example
     * , **udmf://DataHub/com.ohos.test/0123456789**.
     * 
     * **udmf:/** is fixed, **DataHub** is an enum of **intention**, **com.ohos.test** is the bundle name, and 
     * **0123456789** is a group ID randomly generated.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    key?: string;

    /**
     * Data visibility level. This parameter is effective only when specified during data writing. If unspecified, the 
     * default value **Visibility.ALL** is used.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    visibility?: Visibility;
  }

  /**
   * Enumerates the options for resolving file copy conflicts.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum FileConflictOptions {
    /**
     * Overwrite the file with the same name in the destination directory.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    OVERWRITE = 0,

    /**
     * Skip the file if there is a file with the same name in the destination directory.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SKIP = 1
  }

  /**
   * Enumerates the progress indicator options.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ProgressIndicator {
    /**
     * Do not use the default progress indicator.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Use the default progress indicator. If data is obtained within 500 ms, the default progress bar is not started.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DEFAULT = 1
  }

  /**
   * Enumerates the status codes returned when data is obtained from the UDMF.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ListenerStatus {
    /**
     * The task is completed.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FINISHED = 0,

    /**
     * The task is being processed.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    PROCESSING = 1,

    /**
     * The task is canceled.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    CANCELED = 2,

    /**
     * An internal error occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    INNER_ERROR = 200,

    /**
     * [GetDataParams]{@link unifiedDataChannel.GetDataParams} contains invalid parameters.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    INVALID_PARAMETERS = 201,

    /**
     * No data is obtained.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DATA_NOT_FOUND = 202,

    /**
     * Failed to sync data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SYNC_FAILED = 203,

    /**
     * Failed to copy data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    COPY_FILE_FAILED = 204,
  }

  /**
   * Represents the progress information.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface ProgressInfo {
    /**
     * Progress of the drag task, in percentage. 
     * 
     * The value is an integer ranging from -1 to 100. The value **-1** indicates a failure to obtain data, and the 
     * value **100** indicates data is obtained.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progress: int;

    /**
     * Status code of the drag task reported by the system.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    status: ListenerStatus;
  }

  /**
   * Defines the callback used to return the data retrieval progress information and data obtained.
   *
   * @param { ProgressInfo } progressInfo - Progress information to report.
   * @param { UnifiedData | null } data - Data obtained when the progress reaches 100. If the progress does not reach 10
   *     0, **null** is returned.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  type DataProgressListener = (progressInfo: ProgressInfo, data: UnifiedData | null) => void;

  /**
   * Represents the parameters for obtaining data from UDMF, including the destination directory, option for resolving 
   * file conflicts, and progress indicator type.
   * 
   * For details, see 
   * [Obtaining Data Asynchronously Through Drag-and-Drop].
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface GetDataParams {
    /**
     * Indicates whether to use default system progress indicator.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressIndicator: ProgressIndicator;

    /**
     * Indicates progress and data listener when getting unified data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    dataProgressListener: DataProgressListener;

    /**
     * Indicates the dest path uri where copy file will be copied to sandbox of application.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    destUri?: string;

    /**
     * Indicates file conflict options when dest path has file with same name.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    fileConflictOptions?: FileConflictOptions;

    /**
     * Indicates the supported data information.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    acceptableInfo?: DataLoadInfo;
  }

  /**
   * Defines type and quantity of the data to load.
   * 
   * - Used by the **data sender** to define the data range that can be provided. This field is mandatory.
   * - Used by the **data receiver** to define the expected data type and quantity. This field is optional.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataLoadInfo {
    /**
     * Represents the data type or supported types to load.
     * <br>This parameter is mandatory when used by the data provider.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    types?: Set<string>;

    /**
     * Indicates the maximum number of data records to be loaded.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    recordCount?: long;
  }

  /**
   * Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information 
   * passed by the data receiver to implement more flexible and precise data interaction policies.
   * 
   * This API is a synchronous function and is applicable to simple service logic. If the service logic is complex and 
   * the execution time lasts for more than 3s, you are advised to use the asynchronous handler 
   * [DelayedDataLoadHandler]{@link unifiedDataChannel.DelayedDataLoadHandler}.
   *
   * @param { DataLoadInfo } acceptableInfo - Data type and quantity to receive. The default value is empty.
   * @returns { UnifiedData | null } Returns **UnifiedData** or **null** when the processing function for lazy data
   *     loading is triggered.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  type DataLoadHandler = (acceptableInfo?: DataLoadInfo) => UnifiedData | null;

  /**
   * Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information 
   * passed by the data receiver to implement more flexible and precise data interaction policies.
   * 
   * This API is an asynchronous function, which uses a promise to return the result. It does not block the main thread 
   * and can be used to process time-consuming tasks with complex service logic.
   *
   * @param { DataLoadInfo } [acceptableInfo] - Data type and quantity to receive. The default value is empty.
   * @returns { Promise<UnifiedData | null> } Promise used to return the result.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  type DelayedDataLoadHandler = (acceptableInfo?: DataLoadInfo) => Promise<UnifiedData | null>;

  /**
   * Defines the data loading policy for the data sender in the lazy loading scenario.
   * 
   * If both **loadHandler** and **delayedDataLoadHandler** are passed, **delayedDataLoadHandler** is preferentially 
   * used, and **loadHandler** does not take effect.
   *
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataLoadParams {
    /**
     * Indicates the callback function for loading data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    loadHandler: DataLoadHandler;

    /**
     * Indicates data loading information.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    dataLoadInfo: DataLoadInfo;

    /**
     * Indicates the callback function for deferred and non-blocking data loading.
     * This handler is optional. If it is provided, it will take precedence over
     * the synchronous DataLoadHandler (i.e., DataLoadHandler will be ignored).
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    delayedDataLoadHandler?: DelayedDataLoadHandler;
  }

  /**
   * Inserts data to the UDMF public data channel. This API uses an asynchronous callback to return the unique 
   * identifier of the data inserted.
   *
   * @param { Options } options - Configuration for the data insertion operation. The **intention** field is mandatory (
   *     the DRAG channel is not supported). If it is not specified, error code 401 will be returned. The settings of
   *     other parameters do not affect the use of this API.
   * @param { UnifiedData } data - Data to insert.
   * @param { AsyncCallback<string> } callback - Callback used to return the key (unique identifier) of the data
   *     inserted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>): void;

  /**
   * Inserts data to the UDMF public data channel. This API uses a promise to return the unique identifier of the data 
   * inserted.
   *
   * @param { Options } options - Configuration for the data insertion operation. The **intention** field is mandatory (
   *     the DRAG channel is not supported). If it is not specified, error code 401 will be returned. The settings of
   *     other parameters do not affect the use of this API.
   * @param { UnifiedData } data - Data to insert.
   * @returns { Promise<string> } Promise used to return the key of the data inserted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function insertData(options: Options, data: UnifiedData): Promise<string>;

  /**
   * Updates the data in the UDMF public data channel. This API uses an asynchronous callback to return the result.
   *
   * @param { Options } options - Configuration for the data update operation. The **key** field is mandatory. If it is
   *     not specified, error code 401 will be returned. Only the DATA_HUB channel of the **intention** parameter is
   *     supported. The settings of other parameters do not affect the use of this API.
   * @param { UnifiedData } data - Data to update.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the data is updated successfully,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function updateData(options: Options, data: UnifiedData, callback: AsyncCallback<void>): void;

  /**
   * Updates the data in the UDMF public data channel. This API uses a promise to return the result.
   *
   * @param { Options } options - Configuration for the data update operation. The **key** field is mandatory. If it is
   *     not specified, error code 401 will be returned. Only the DATA_HUB channel of the **intention** parameter is
   *     supported. The settings of other parameters do not affect the use of this API.
   * @param { UnifiedData } data - Data to update.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function updateData(options: Options, data: UnifiedData): Promise<void>;

  /**
   * Queries data in the UDMF public data channel. This API uses an asynchronous callback to return the result.
   *
   * @param { Options } options - Configuration for the data query operation. Both the **key** and **intention** are
   *     optional (the DRAG channel of **intention** is not supported). The return value varies depending on the
   *     parameters passed in.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - Callback used to return the queried data.<br>If only the
   *     **key** is specified in **options**, the data corresponding to the key is returned.<br>If only the
   *     **intention** is specified in **options**, all data in the **intention** is returned.<br>If both **intention**
   *     and **key** are specified, the intersection of the two is returned, which is the result obtained when only
   *     **key** is specified. If there is no intersection between the specified **intention** and **key**, an error
   *     object is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function queryData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * Queries data in the UDMF public data channel. This API uses a promise to return the result.
   *
   * @param { Options } options - Configuration for the data query operation. Both the **key** and **intention** are
   *     optional (the DRAG channel of **intention** is not supported). The return value varies depending on the
   *     parameters passed in.
   * @returns { Promise<Array<UnifiedData>> } Promise used to return the result queried.
   *     <br>If only the **key** is specified in **options**, the data corresponding to the key is returned.
   *     <br>If only the **intention** is specified in **options**, all data in the **intention** is returned.
   *     <br>If both **intention** and **key** are specified, the intersection of the two is returned, which is the result
   *     obtained when only **key** is specified. If there is no intersection between the specified **intention** and
   *     **key**, an error object is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function queryData(options: Options): Promise<Array<UnifiedData>>;

  /**
   * Deletes data from the UDMF public data channel. This API uses an asynchronous callback to return the result.
   *
   * @param { Options } options - Configuration for the data deletion operation. Both the **key** and **intention** are
   *     optional (only the DATA_HUB channel of **intention** is supported). The return value varies depending on the
   *     parameters passed in.
   * @param { AsyncCallback<Array<UnifiedData>> } callback - Callback used to return the data deleted.<br>If only the
   *     **key** is specified in **options**, the data corresponding to the key deleted is returned.<br>If only the
   *     **intention** is specified in **options**, all data in the **intention** deleted is returned.<br>If both
   *     **intention** and **key** are specified, the intersection of the two deleted is returned. If there is no
   *     intersection between the two, an error object is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;

  /**
   * Deletes data from the UDMF public data channel. This API uses a promise to return the result.
   *
   * @param { Options } options - Configuration for the data deletion operation. Both the **key** and **intention** are
   *     optional (only the DATA_HUB channel of **intention** is supported). The return value varies depending on the
   *     parameters passed in.
   * @returns { Promise<Array<UnifiedData>> } Promise used to return the data deleted.
   *     <br>If only the **key** is specified in **options**, the data corresponding to the key deleted is returned.
   *     <br>If only the **intention** is specified in **options**, all data in the **intention** deleted is returned.
   *     <br>If both **intention** and **key** are specified, the intersection of the two deleted is returned. If there 
   *     is no intersection between the two, an error object is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.UDMF.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteData(options: Options): Promise<Array<UnifiedData>>;

  /**
    * Sets the [ShareOptions]{@link unifiedDataChannel.ShareOptions} for the application data. Currently, only the drag-
    * and-drop data channel is supported.
    *
    * @permission ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION [since 14]
    * @param { Intention } intention - Type of the data channel. Currently, only the data channel of the **DRAG** type
    *     is supported.
    * @param { ShareOptions } shareOptions - Usage scope of the
    *     [UnifiedData]{@link unifiedDataChannel.UnifiedDataProperties}.
    * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
    *     system API. [since 12 - 13]
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    *     2. Incorrect parameter types;
    *     3. Parameter verification failed.
    * @throws { BusinessError } 20400001 - Settings already exist. To reconfigure, remove the existing sharing options.
    * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "
    *     ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION". [since 14]
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @systemapi [since 12 - 13]
    * @publicapi [since 14]
    * @stagemodelonly
    * @since 12 dynamic
    * @since 23 static
    */
   function setAppShareOptions(intention: Intention, shareOptions: ShareOptions): void;

   /**
    * Removes the data control information set by [setAppShareOptions]{@link unifiedDataChannel.setAppShareOptions}.
    *
    * @permission ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION [since 14]
    * @param { Intention } intention - Type of the data channel. Currently, only the data channel of the **DRAG** type
    *     is supported.
    * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
    *     uses system API. [since 12 - 13]
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    *     2. Incorrect parameter types;
    *     3. Parameter verification failed.
    * @throws { BusinessError } 201 - Permission denied. Interface caller does not have permission "
    *     ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION". [since 14]
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @systemapi [since 12 - 13]
    * @publicapi [since 14]
    * @stagemodelonly
    * @since 12 dynamic
    * @since 23 static
    */
   function removeAppShareOptions(intention: Intention): void;

  /**
    * Converts the provided data into a multi-style data structure, which is useful when the original data uses multiple
    * records to represent different styles of the same data.
    * 
    * This API is used only when the following rules are met:
    * 
    * 1. The number of records in data is greater than 1.
    * 2. The value of **unifiedData.properties.tag** is **records_to_entries_data_format**.
    *
    * @param { UnifiedData } data - Data to convert.
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2.Incorrect parameter types;
   *     <br>3. Parameter verification failed.
    * @syscap SystemCapability.DistributedDataManager.UDMF.Core
    * @stagemodelonly
    * @atomicservice
    * @since 17 dynamic
    * @since 23 static
    */
   function convertRecordsToEntries(data: UnifiedData): void;
}

export default unifiedDataChannel;