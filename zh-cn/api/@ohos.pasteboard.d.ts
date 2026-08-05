/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 剪贴板
 * @file
 剪贴板
 * @kit BasicServicesKit
 */

import { AsyncCallback, Callback, RecordData } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import image from './@ohos.multimedia.image';
import unifiedDataChannel from './@ohos.data.unifiedDataChannel';

/**
 * 本模块提供管理系统剪贴板的能力，支持系统复制、粘贴功能。系统剪贴板支持对文本、HTML、URI、Want、PixelMap等内容的操作。
 *
 * @syscap SystemCapability.MiscServices.Pasteboard
 * @crossplatform [since 24]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace pasteboard {
  /**
   * API version 10之前，此常量值为512，表示单个PasteData中所能包含的最大条目数为512。当剪贴板内容中添加的条目达到数量上限512后，后续的添加操作无效。
   *
   * 从API version 10开始，不再限制单个PasteData中所能包含的最大条目数。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MAX_RECORD_NUM = 512;

  /**
   * API version 10之前，此常量值为512，表示单个PasteData中所能包含的最大条目数为512。当剪贴板内容中添加的条目达到数量上限512后，后续的添加操作无效。
   * 
   * 从API version 10开始，不再限制单个PasteData中所能包含的最大条目数。
   * 单位: Numbers，该值必须是 [512, 512] 范围内的整数。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MAX_RECORD_NUM: int;

  /**
   * HTML内容的MIME类型定义。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MIMETYPE_TEXT_HTML = 'text/html';

  /**
   * HTML内容的MIME类型，值为'text/html'。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_TEXT_HTML: string;

  /**
   * Want内容的MIME类型定义。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MIMETYPE_TEXT_WANT = 'text/want';

  /**
   * Want内容的MIME类型，值为'text/want'。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_TEXT_WANT: string;

  /**
   * 纯文本内容的MIME类型定义。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MIMETYPE_TEXT_PLAIN = 'text/plain';

  /**
   * 纯文本内容的MIME类型，值为'text/plain'。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_TEXT_PLAIN: string;

  /**
   * URI内容的MIME类型定义。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  const MIMETYPE_TEXT_URI = 'text/uri';

  /**
   * URI内容的MIME类型，值为'text/uri'。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_TEXT_URI: string;

  /**
   * PixelMap内容的MIME类型定义。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  const MIMETYPE_PIXELMAP = 'pixelMap';

  /**
   * PixelMap内容的MIME类型，值为'pixelMap'。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @stagemodelonly
   * @since 23 static
   */
  const MIMETYPE_PIXELMAP: string;

  /**
   * 用于表示允许的数据字段类型。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @unionmember { string } 表示string的类型。
   * @unionmember { image.PixelMap } 表示[image.PixelMap]{@link @ohos.multimedia.image:image.PixelMap}的类型。
   * @unionmember { Want } 表示[Want]{@link @ohos.app.ability.Want:Want}的类型。
   * @unionmember { ArrayBuffer } 表示ArrayBuffer的类型。
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  type ValueType = string | image.PixelMap | Want | ArrayBuffer;

  /**
   * 构建一个HTML剪贴板内容对象。
   *
   * @param { string } htmlText - HTML内容，需符合标准HTML格式。
   * @returns { PasteData } 剪贴板内容对象。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createData(mimeType: string, value: ValueType)
   */
  function createHtmlData(htmlText: string): PasteData;

  /**
   * 构建一个Want剪贴板内容对象。
   *
   * @param { Want } want - Want内容。
   * @returns { PasteData } 剪贴板内容对象。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createData(mimeType: string, value: ValueType)
   */
  function createWantData(want: Want): PasteData;

  /**
   * 构建一个纯文本剪贴板内容对象。
   *
   * @param { string } text - 纯文本内容。
   * @returns { PasteData } 剪贴板内容对象。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createData(mimeType: string, value: ValueType)
   */
  function createPlainTextData(text: string): PasteData;

  /**
   * 构建一个URI剪贴板内容对象。
   *
   * @param { string } uri - URI内容，需符合标准URI格式。
   * @returns { PasteData } 剪贴板内容对象。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createData(mimeType: string, value: ValueType)
   */
  function createUriData(uri: string): PasteData;

  /**
   * 构建一个指定类型的剪贴板内容对象，根据传入的MIME类型和数据内容创建PasteData实例。
   * 调用此方法后，系统将验证MIME类型有效性，封装数据内容，并返回可用于后续剪贴板操作的PasteData对象。
   * 参数mimeType长度不能超过1024字节，value类型需与mimeType匹配。当需要将单一类型的数据（如纯文本、HTML、图片等）放入剪贴板时使用此方法。
   * mimeType优先使用已定义的常量类型（如MIMETYPE_TEXT_PLAIN），若需要传递自定义格式数据，可使用自定义MIME类型。
   *
   * @param { string } mimeType - 剪贴板数据对应的MIME类型，
   *     可以是[常量](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#常量)中已定义的类型，
   *     包括HTML类型，Want类型，纯文本类型，URI类型，PixelMap类型；也可以是自定义的MIME类型，开发者可自定义此参数值，mimeType长度不能超过1024字节。
   * @param { ValueType } value - 自定义数据内容。建议根据实际场景选择合适的数据类型，使用过大的数据对象会影响应用复制粘贴性能和内存占用。
   *     对于ArrayBuffer类型，建议合理设置数据大小；对于PixelMap类型，建议及时释放不再使用的对象。
   * @returns { PasteData } 剪贴板内容对象。
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function createData(mimeType: string, value: ValueType): PasteData;

  /**
   * 构建一个包含多个类型数据的剪贴板内容对象，支持一次创建多个MIME类型的数据条目。
   * 调用此方法后，系统将解析Record中的多个key-value对，创建多个PasteDataRecord条目，首个MIME类型作为默认类型。
   * 非默认类型数据需通过[getData]{@link pasteboard.PasteDataRecord.getData(type: string)}接口读取。
   * 应用需要将多种不同类型的数据(如文本、URI、HTML等)同时复制到剪贴板时，可使用此接口一次性构建包含多个MIME类型数据的剪贴板内容对象。
   *
   * @param { Record<string, ValueType> } data - Record的key为剪贴板数据对应的MIME类型。
   *     可以是[常量](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#常量)中已定义的类型，
   *     包括HTML类型，Want类型，纯文本类型，URI类型，PixelMap类型。也可以是自定义的MIME类型，可自定义此参数值，mimeType长度不能超过1024字节。
   *     Record的value为key中指定MIME类型对应的数据。
   *     Record中的首个key-value指定的MIME类型，会作为剪贴板内容对象中首个PasteDataRecord的默认MIME类型，
   *     非默认类型的数据在粘贴时只能使用[getData]{@link pasteboard.PasteDataRecord.getData(type: string)}接口读取。
   * @returns { PasteData } 剪贴板内容对象。
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @since 14 dynamic
   * @since 23 static
   */
  function createData(data: Record<string, ValueType>): PasteData;

  /**
   * 创建一条HTML内容的条目。
   *
   * @param { string } htmlText - HTML内容，需符合标准HTML格式。
   * @returns { PasteDataRecord } 一条新建的HTML内容条目。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createRecord(mimeType: string, value: ValueType)
   */
  function createHtmlTextRecord(htmlText: string): PasteDataRecord;

  /**
   * 创建一条Want内容条目。
   *
   * @param { Want } want - Want内容。
   * @returns { PasteDataRecord } 一条新建的Want内容条目。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createRecord(mimeType: string, value: ValueType)
   */
  function createWantRecord(want: Want): PasteDataRecord;

  /**
   * 创建一条纯文本内容条目。
   *
   * @param { string } text - 纯文本内容。
   * @returns { PasteDataRecord } 一条新建的纯文本内容条目。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createRecord(mimeType: string, value: ValueType)
   */
  function createPlainTextRecord(text: string): PasteDataRecord;

  /**
   * 创建一条URI内容的条目。
   *
   * @param { string } uri - URI内容，需符合标准URI格式。
   * @returns { PasteDataRecord } 一条新建的URI内容条目。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead pasteboard.createRecord(mimeType: string, value: ValueType)
   */
  function createUriRecord(uri: string): PasteDataRecord;

  /**
   * 创建一条指定类型的数据内容条目，将数据内容封装为PasteDataRecord对象。调用此方法后，系统将根据MIME类型封装数据内容，返回可添加到PasteData中的条目对象。
   * 参数mimeType长度不能超过1024字节，value类型需与mimeType对应（如mimeType为MIMETYPE_TEXT_PLAIN，则value类型必须是string），参数不能为空。
   * 
   * - 创建的条目通常需要通过[addRecord]{@link pasteboard.PasteData.addRecord(record: PasteDataRecord)}方法添加到
   *   [PasteData]{@link pasteboard.PasteData}对象中才能生效。
   * - 典型使用流程：先通过[createData]{@link pasteboard.createData(mimeType: string, value: ValueType)}创建PasteData对象，
   *   再使用createRecord创建条目，最后通过addRecord添加条目。
   *
   * @param { string } mimeType - 剪贴板数据对应的MIME类型，可以是
   *     [常量](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#常量)中已定义的类型，
   *     包括HTML类型，Want类型，纯文本类型，URI类型，PixelMap类型；也可以是自定义的MIME类型，开发者可自定义此参数值，mimeType长度不能超过1024字节。
   * @param { ValueType } value - 指定类型对应的数据内容。建议根据实际场景选择合适的数据类型，避免使用过大的数据对象以免影响剪贴板性能和内存占用。
   *     对于ArrayBuffer类型，建议合理设置数据大小；对于PixelMap类型，建议及时释放不再使用的对象。
   * @returns { PasteDataRecord } 一条新建的指定类型的数据内容条目。
   * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function createRecord(mimeType: string, value: ValueType): PasteDataRecord;

  /**
   * 获取系统剪贴板对象，返回剪贴板服务的单例实例。调用此方法后，返回的系统剪贴板对象可用于访问剪贴板的读写、监听等功能。
   * 每次调用返回同一实例，调用前剪贴板系统服务需要正常运行。在进行任何剪贴板读写操作前，都需要先调用此方法获取系统剪贴板对象。
   *
   * @returns { SystemPasteboard } 系统剪贴板对象。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  function getSystemPasteboard(): SystemPasteboard;

  /**
   * 可粘贴数据的范围类型枚举。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum ShareOption {
    /**
     * 表示仅允许同应用内粘贴。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    INAPP = 0,
    /**
     * 表示允许在任何应用内粘贴。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCALDEVICE = 1,
    /**
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 12
     */
    CROSSDEVICE = 2
  }

  /**
   * 剪贴板支持检测的模式类型。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @since 13 dynamic
   * @since 23 static
   */
  enum Pattern {
    /**
     * URL类型。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    URL = 0,
    /**
     * 数字类型。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    NUMBER = 1,
    /**
     * 邮箱地址类型。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    EMAIL_ADDRESS = 2,
    /**
     * HTTP web链接类型。
     * 模型约束：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    HTTP_URL = 3,
    /**
     * 航班号类型。
     * 模型约束：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    FLIGHT_NUMBER = 4
  }


  /**
   * 定义剪贴板中所有内容条目的属性，包含时间戳、数据类型、粘贴范围以及一些附加数据等，
   * 该属性必须通过[setProperty]{@link pasteboard.PasteData.setProperty(property: PasteDataProperty)}方法，才能设置到剪贴板中。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface PasteDataProperty {
    /**
     * 设置其他附加属性数据。不支持动态追加属性，只能通过重新赋值的方式修改附加值，具体见相关示例setProperty， 默认为空。
     *
     * @type { object } [since 7 - 22]
     * @type { Record<string, object> } [since 23]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    additions: Record<string, object>;
    /**
     * 设置其他附加属性数据。格式为键值对。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 23 static
     */
    additions: Record<string, RecordData>;
    /**
     * 剪贴板内容条目的数据类型，非重复的类型列表。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly mimeTypes: Array<string>;
    /**
     * 用户自定义标签，默认为空。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    tag: string;
    /**
     * 剪贴板数据的写入时间戳（单位：已开机时间的ns数）。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly timestamp: long;
    /**
     * 配置剪贴板内容是否为“仅在本地”，true表示仅在本地有效，false表示允许跨设备传输。默认值为false。
     * 其值会被shareOption属性覆盖，推荐使用[ShareOption]{@link pasteboard.ShareOption}属性。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    localOnly: boolean;
    /**
     * 指示剪贴板数据可以粘贴到的范围，默认值为CROSSDEVICE。与localOnly属性互斥，设置shareOption会影响localOnly的实际值。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    shareOption: ShareOption;
  }

  /**
   * 对于剪贴板中内容记录的抽象定义，称之为条目。剪贴板内容部分由一个或者多个条目构成，例如一条文本内容、一份HTML、一个URI或者一个Want。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface PasteDataRecord {
    /**
     * HTML内容，需符合标准HTML格式。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    htmlText: string;
    /**
     * Want内容。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    want: Want;
    /**
     * 默认数据类型。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    mimeType: string;
    /**
     * 纯文本内容。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    plainText: string;
    /**
     * URI内容，需符合标准URI格式。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * PixelMap内容。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    pixelMap: image.PixelMap;
    /**
     * 自定义数据内容。
     *
     * @type { object } [since 9 - 22]
     * @type { Record<string, ArrayBuffer> } [since 23]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    data: Record<string, ArrayBuffer>;

    /**
     * 将一个PasteData中的内容强制转换为文本内容，使用callback异步回调。
     *
     * @param { AsyncCallback<string> } callback - 回调函数，当转换成功，err为undefined，data为强制转换的文本内容；否则返回错误信息。
     * @throws { BusinessError } 401 - Possible causes: Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteDataRecord.toPlainText()
     */
    convertToText(callback: AsyncCallback<string>): void;

    /**
     * 将一个PasteData中的内容强制转换为文本内容，使用Promise异步回调。
     *
     * @returns { Promise<string> } Promise对象，返回强制转换的文本内容。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteDataRecord.toPlainText()
     */
    convertToText(): Promise<string>;

    /**
     * 将一个PasteDataRecord中的html、plain、uri内容强制转换为文本内容。若PasteDataRecord包含其他数据类型（如PixelMap、Want等），转换结果为空字符串。
     *
     * @returns { string } 纯文本内容。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    toPlainText(): string;

    /**
     * 往一个PasteDataRecord中额外添加一种样式的数据。此方式添加的MIME类型都不是Record的默认类型，
     * 粘贴时只能使用[getData]{@link pasteboard.PasteDataRecord.getData(type: string)}接口读取对应数据。
     *
     * @param { string } type - 剪贴板数据对应的MIME类型，
     *     可以是[常量](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#常量)中已定义的类型，
     *     包括HTML类型，Want类型，纯文本类型，URI类型，PixelMap类型；也可以是自定义的MIME类型，开发者可自定义此参数值，mimeType长度不能超过1024字节。
     * @param { ValueType } value - 自定义数据内容。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 14 dynamic
     * @since 23 static
     */
    addEntry(type: string, value: ValueType): void;

    /**
     * 根据传入的MIME类型，返回传入的MIME类型和剪贴板中数据的MIME类型的交集。在粘贴前，检查剪贴板数据是否包含应用支持的格式。
     * 例如，若应用仅支持纯文本和HTML格式，可调用此接口检查剪贴板数据是否包含这些格式，并根据返回结果决定是否执行粘贴操作。
     *
     * @param { Array<string> } types - MIME类型列表，设置后用于与剪贴板中数据的MIME类型进行交集匹配，返回匹配成功的类型列表。
     * @returns { Array<string> } 传入的MIME类型和剪贴板中数据的MIME类型的交集。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 14 dynamic
     * @since 23 static
     */
    getValidTypes(types: Array<string>): Array<string>;

    /**
     * 从PasteDataRecord中获取指定MIME类型的自定义数据，使用Promise异步回调。
     *
     * @param { string } type - MIME类型，取值范围：长度不超过1024字节。超出范围时返回错误码401。
     * @returns { Promise<ValueType> } Promise对象，返回PasteDataRecord中指定MIME类型的自定义数据。
     *     PasteDataRecord中包含多个MIME类型数据时，非PasteDataRecord的默认MIME类型的数据只能通过本接口获取。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 14 dynamic
     * @since 23 static
     */
    getData(type: string): Promise<ValueType>;
  }

  /**
   * 剪贴板内容对象。剪贴板内容包含一个或者多个内容条目（[PasteDataRecord]{@link pasteboard.PasteDataRecord}）
   * 以及属性描述对象（[PasteDataProperty]{@link pasteboard.PasteDataProperty}）。
   * 在调用PasteData的接口前，需要先通过[createData()]{@link pasteboard.createData(mimeType: string, value: ValueType)}
   * 或[getData()]{@link pasteboard.SystemPasteboard.getData(callback: AsyncCallback<PasteData>)}获取一个PasteData对象。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface PasteData {
    /**
     * 向当前剪贴板内容中添加一条HTML内容条目，并将MIMETYPE_TEXT_HTML添加到[PasteDataProperty]{@link pasteboard.PasteDataProperty}的mimeTypes中。
     * 入参均不能为空，否则添加失败。
     *
     * @param { string } htmlText - HTML内容，需符合标准HTML格式。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.addRecord(mimeType: string, value: ValueType)
     */
    addHtmlRecord(htmlText: string): void;

    /**
     * 向当前剪贴板内容中添加一条Want条目，并将MIMETYPE_TEXT_WANT添加到[PasteDataProperty]{@link pasteboard.PasteDataProperty}的mimeTypes中。
     * 入参均不能为空，否则添加失败。
     *
     * @param { Want } want - Want对象内容。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.addRecord(mimeType: string, value: ValueType)
     */
    addWantRecord(want: Want): void;

    /**
     * 向当前剪贴板内容中添加一条条目，同时也会将条目类型添加到[PasteDataProperty]{@link pasteboard.PasteDataProperty}的mimeTypes中。
     * 入参均不能为空，否则添加失败。
     *
     * @param { PasteDataRecord } record - 待添加的条目，设置后会将该条目添加到剪贴板内容中，同时更新mimeTypes属性列表。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    addRecord(record: PasteDataRecord): void;

    /**
     * 向当前剪贴板内容中添加一条纯文本条目，并将MIMETYPE_TEXT_PLAIN添加到[PasteDataProperty]{@link pasteboard.PasteDataProperty}的mimeTypes中。
     * 入参均不能为空，否则添加失败。
     *
     * @param { string } text - 纯文本内容。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.addRecord(mimeType: string, value: ValueType)
     */
    addTextRecord(text: string): void;

    /**
     * 向当前剪贴板内容中添加一条URI条目，并将MIMETYPE_TEXT_URI添加到[PasteDataProperty]{@link pasteboard.PasteDataProperty}的mimeTypes中。
     * 入参均不能为空，否则添加失败。
     *
     * @param { string } uri - URI内容。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.addRecord(mimeType: string, value: ValueType)
     */
    addUriRecord(uri: string): void;

    /**
     * 向当前剪贴板内容中添加一条数据内容条目，同时也会将数据类型添加到[PasteDataProperty]{@link pasteboard.PasteDataProperty}的mimeTypes中。
     * 入参均不能为空，否则添加失败。当剪贴板内容需要包含多种类型的数据（如同时包含纯文本和HTML）时，使用此方法向已有的PasteData对象添加额外的数据条目。
     *
     * @param { string } mimeType - 数据的MIME类型，取值范围：长度不超过1024字节。超出范围时返回错误码401。
     * @param { ValueType } value - 数据内容，设置后更新剪贴板内容的属性信息，包括时间戳、数据类型、粘贴范围等。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900002 - The number of records exceeds the upper limit. [since 9 - 9]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    addRecord(mimeType: string, value: ValueType): void;

    /**
     * 获取剪贴板中[PasteDataProperty]{@link pasteboard.PasteDataProperty}的mimeTypes列表，接口调用异常时返回undefined。
     *
     * @returns { Array<string> } 剪贴板内容条目的数据类型，非重复的类型列表。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getMimeTypes(): Array<string>;

    /**
     * 获取第一条的HTML内容。
     *
     * @returns { string } HTML内容。剪贴板内容对象中没有HTML内容时，默认返回为undefined。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getPrimaryHtml(): string;

    /**
     * 获取第一条的Want对象内容。
     *
     * @returns { Want } Want对象内容。剪贴板内容对象中没有Want内容时，默认返回为undefined。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getPrimaryWant(): Want;

    /**
     * 获取剪贴板内容中首个条目的数据类型。
     *
     * @returns { string } 首个条目的数据类型。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getPrimaryMimeType(): string;

    /**
     * 获取第一条纯文本内容。
     *
     * @returns { string } 纯文本内容。剪贴板内容对象中没有纯文本内容时，默认返回为undefined。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    getPrimaryText(): string;

    /**
     * 获取第一条的URI内容。
     *
     * @returns { string } URI内容。剪贴板内容对象中没有URI内容时，默认返回为undefined。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getPrimaryUri(): string;

    /**
     * 获取第一条的PixelMap内容。
     *
     * @returns { image.PixelMap } PixelMap内容。剪贴板内容对象中没有PixelMap内容时，默认返回为undefined。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getPrimaryPixelMap(): image.PixelMap;

    /**
     * 获取剪贴板内容的属性描述对象。
     *
     * @returns { PasteDataProperty } 属性描述对象。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getProperty(): PasteDataProperty;

    /**
     * 设置剪贴板内容的属性描述对象[PasteDataProperty]{@link pasteboard.PasteDataProperty}。
     *
     * @param { PasteDataProperty } property - 属性描述对象，设置后更新剪贴板内容的属性信息，包括时间戳、数据类型、粘贴范围等。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setProperty(property: PasteDataProperty): void;

    /**
     * 获取剪贴板内容中指定下标的条目。
     *
     * @param { number } index - 指定条目的下标。有效取值范围：[0, getRecordCount()-1]，超出范围返回错误码401。
     * @returns { PasteDataRecord } 指定下标的条目。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.getRecord(index: int)
     */
    getRecordAt(index: number): PasteDataRecord;

    /**
     * 获取剪贴板内容中指定下标的条目。
     *
     * @param { int } index - 指定条目的下标。有效取值范围：[0, getRecordCount()-1]，超出范围会触发错误码12900001。
     * @returns { PasteDataRecord } 指定下标的条目。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getRecord(index: int): PasteDataRecord;

    /**
     * 获取剪贴板内容中条目的个数。
     *
     * @returns { int } 条目的个数。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getRecordCount(): int;

    /**
     * 获取剪贴板内容中用户自定义的标签内容，如果没有设置用户自定义的标签内容将返回空。
     *
     * @returns { string } 返回用户自定义的标签内容，如果没有设置用户自定义的标签内容，将返回空。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getTag(): string;

    /**
     * 检查剪贴板内容中是否有指定的数据类型。
     *
     * @param { string } mimeType - 待查询的数据类型。可以是
     *     [常量](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#常量)中已定义的类型，
     *     包括：HTML类型、Want类型、纯文本类型、URI类型、PixelMap类型，也可以是自定义的MIME类型，长度不能超过1024字节。
     * @returns { boolean } 有指定的数据类型返回true，否则返回false。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.hasType(mimeType: string)
     */
    hasMimeType(mimeType: string): boolean;

    /**
     * 检查剪贴板内容中是否有指定的MIME数据类型。
     *
     * @param { string } mimeType - 待查询的数据类型。
     *     可以是[常量](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#常量)中已定义的类型，
     *     包括：HTML类型、Want类型、纯文本类型、URI类型、PixelMap类型；也可以是自定义的MIME类型，数据类型的字符串长度不能超过1024字节。
     * @returns { boolean } 有指定的数据类型返回true，否则返回false。
     * @throws { BusinessError } 401 - Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    hasType(mimeType: string): boolean;

    /**
     * 移除剪贴板内容中指定下标的条目。
     *
     * @param { number } index - 指定的下标。有效取值范围：[0, getRecordCount()-1]，超出范围返回错误码401。
     * @returns { boolean } 移除指定下标的条目成功返回true，移除失败（如指定下标不存在或超出范围）返回false。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.removeRecord(index: int)
     */
    removeRecordAt(index: number): boolean;

    /**
     * 移除剪贴板内容中指定下标的条目。
     *
     * @param { int } index - 指定的下标。有效取值范围：[0, getRecordCount()-1]，超出范围会触发错误码12900001。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    removeRecord(index: int): void;

    /**
     * 替换剪贴板内容中指定下标的条目。
     *
     * @param { number } index - 指定的下标。有效取值范围：[0, getRecordCount()-1]，超出范围返回错误码401。
     * @param { PasteDataRecord } record - 替换后的条目。
     * @returns { boolean } 替换指定下标的条目成功返回true，替换失败（如指定下标不存在或超出范围、参数为空）返回false。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.PasteData.replaceRecord(index: int, record: PasteDataRecord)
     */
    replaceRecordAt(index: number, record: PasteDataRecord): boolean;

    /**
     * 替换剪贴板内容中指定下标的条目。
     *
     * @param { int } index - 指定的下标。有效取值范围：[0, getRecordCount()-1]，超出范围会触发错误码12900001。
     * @param { PasteDataRecord } record - 被替换后的条目数据内容，设置后会替换指定下标位置的原始条目。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900001 - The index is out of the record.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    replaceRecord(index: int, record: PasteDataRecord): void;

    /**
     * 读取剪贴板数据前，通知剪贴板服务保留跨设备通道。访问剪贴板数据中的跨端文件数据前，通知剪贴板服务保留跨设备链路。
     * 跨设备链路用于连接远端设备并提供传输远端设备文件到本端设备的能力，如未调用此方法则跨设备链路将在30秒后自动断开。
     * 适用于跨设备粘贴场景。当需要确保跨设备剪贴板数据通道保持连接，以便后续读取远端设备剪贴板数据时使用。
     * 
     * - 必须与[pasteComplete]{@link pasteboard.PasteData.pasteComplete()}方法配对使用。
     * - 调用顺序：先调用pasteStart()通知保留通道，数据处理完成后必须调用pasteComplete()通知完成。
     * - 未调用pasteComplete()会导致跨设备通道未正确关闭，影响后续跨设备剪贴板操作。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 12 dynamic
     * @since 23 static
     */
    pasteStart(): void;

    /**
     * 通知剪贴板服务数据使用已完成，可释放跨设备通道等资源。
     * 应在调用pasteStart之后、完成数据处理后调用，避免资源浪费。未调用可能导致跨设备通道长时间占用，影响后续跨设备粘贴操作。
     * pasteComplete与其他接口的使用步骤可参考：
     * 1. getData()获取剪贴板数据
     * 2. pasteStart()保留跨设备通道
     * 3. 使用剪贴板数据
     * 4. pasteComplete()释放通道
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 12 dynamic
     * @since 23 static
     */
    pasteComplete(): void;
  }

  /**
   * 定义文件拷贝冲突时的选项。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum FileConflictOptions {
    /**
     * 目标路径存在同文件名时覆盖。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    OVERWRITE = 0,

    /**
     * 目标路径存在同文件名时跳过，若设置SKIP，应用获取到的粘贴数据不包含跳过文件。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    SKIP = 1
  }

  /**
   * 定义进度条指示选项，可选择是否采用系统默认进度显示。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  enum ProgressIndicator {
    /**
     * 不采用系统默认进度显示。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 采用系统默认进度显示。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    DEFAULT = 1
  }

  /**
   * 定义进度上报的数据结构，且仅当进度指示选项[ProgressIndicator]{@link pasteboard.ProgressIndicator}设置为NONE时才会上报此信息。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface ProgressInfo {
    /**
     * 不使用系统提供的进度条时，系统上报拷贝粘贴任务进度百分比，单位：%。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progress: int;
  }

  /**
   * 定义进度数据变化的订阅函数，当选择不使用系统默认进度显示时，可设置该项获取粘贴过程的进度。
   *
   * @param { ProgressInfo } progress - 定义进度上报的数据结构，且仅当进度指示选项[ProgressIndicator]{@link pasteboard.ProgressIndicator}设置为
   *     NONE时才会上报此信息。
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  type ProgressListener = (progress: ProgressInfo) => void;

  /**
   * 定义进度取消的函数，在粘贴过程中可选择取消任务，且仅当进度指示选项[ProgressIndicator]{@link pasteboard.ProgressIndicator}设置为NONE时此参数才生效。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @class ProgressSignal
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  export class ProgressSignal {
    /**
     * 取消正在进行的拷贝粘贴任务。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    cancel(): void;
  }

  /**
   * 应用在使用剪贴板提供的文件拷贝能力的情况下需要的参数，包含目标路径、文件冲突选项、进度条类型等。调用本接口前，需确保无其他拷贝或粘贴操作正在进行。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface GetDataParams {
    /**
     * 拷贝文件的目标路径对应的URI。
     * 若不支持文件处理，则不需要设置此参数；若应用涉及复杂文件处理策略或需要区分文件多路径存储，建议不设置此参数，由应用自行完成文件copy处理，默认为空。
     *
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    destUri?: string;

    /**
     * 定义文件拷贝冲突时的选项。
     * OVERWRITE（覆盖）适合需要确保目标路径使用最新文件内容的场景；SKIP（跳过）适合需要保留目标路径原有文件、避免意外覆盖的场景。默认为OVERWRITE。
     *
     * @default FileConflictOptions.OVERWRITE
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    fileConflictOptions?: FileConflictOptions;

    /**
     * 定义进度条指示选项，可选择是否采用系统默认进度显示。设置为DEFAULT时采用系统默认进度显示；设置为NONE时需应用自行处理进度，
     * 此时progressListener和progressSignal参数才有效。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressIndicator: ProgressIndicator;

    /**
     * 定义进度数据变化的订阅函数，用于获取粘贴过程的进度。仅当progressIndicator设置为NONE时此参数才生效，可设置该项自行处理进度显示；
     * 当progressIndicator设置为DEFAULT时此参数无效。默认为空（不监听进度）。
     *
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressListener?: ProgressListener;

    /**
     * 定义进度取消的函数，在粘贴过程中可选择取消任务，且仅当进度指示选项[ProgressIndicator]{@link pasteboard.ProgressIndicator}设置为NONE时此参数才有意义，默认为空。
     *
     * @default -
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    progressSignal?: ProgressSignal;
  }

  /**
   * 表示剪贴板内容变更的回调。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @since 22 dynamic
   * @since 23 static
   */
  type UpdateCallback = () => void;

  /**
   * 系统剪贴板对象。
   * 在调用SystemPasteboard的接口前，需要先通过[getSystemPasteboard]{@link pasteboard.getSystemPasteboard()}获取系统剪贴板。
   *
   * @syscap SystemCapability.MiscServices.Pasteboard
   * @crossplatform [since 24]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface SystemPasteboard {
    /**
     * 订阅系统剪贴板内容变化事件，当系统剪贴板中内容变化时触发用户程序的回调。调用此方法后，系统将在剪贴板服务中注册监听器，剪贴板内容被写入、清空或修改时触发回调。
     * 可注册多个监听器，需在适当时机调用off取消监听以释放资源。当应用需要实时响应剪贴板内容变化时使用，如自动检测剪贴板中的特定格式数据、实现智能粘贴建议等场景。
     *
     * - 订阅后必须在不再需要监听时调用[off('update')]{@link pasteboard.SystemPasteboard.off(type: 'update', callback?: () => void)}取消订阅。
     * - 未取消订阅会导致回调函数持续监听剪贴板变化，可能造成内存泄漏或多次回调触发。
     * - 建议在组件/页面销毁时取消订阅。
     *
     * @param { 'update' } type - 取值为'update'，表示系统剪贴板内容变化事件，其他值无效。
     * @param { function } callback - 剪贴板中内容变化时触发的用户程序的回调。
     * @throws { BusinessError }  401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 7 dynamic
     */
    on(type: 'update', callback: () => void): void;

    /**
     * 订阅系统剪贴板内容变化事件，当系统剪贴板中内容变化时触发用户程序的回调。
     *
     * @param { UpdateCallback } callback - 剪贴板中内容变化时触发的用户程序的回调。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 23 static
     */
    onUpdate(callback: UpdateCallback): void;

    /**
     * 订阅跨设备剪贴板内容变化事件，当远端设备系统剪贴板中内容变化时触发用户程序的回调。
     * 
     * - 订阅后必须在不再需要监听时调用
     * [offRemoteUpdate]{@link pasteboard.SystemPasteboard.offRemoteUpdate(callback?: UpdateCallback)}
     * 取消订阅。
     * - 未取消订阅会导致回调函数持续监听远端变化，造成内存泄漏。
     * - 建议在组件/页面销毁时取消订阅。
     *
     * @param { UpdateCallback } callback - 剪贴板中内容变化时触发的用户程序的回调，无参数。用于监听跨设备剪贴板内容更新事件，当远端设备剪贴板内容发生变化时触发此回调。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 22 dynamic
     * @since 23 static
     */
    onRemoteUpdate(callback: UpdateCallback): void;

    /**
     * 取消订阅系统剪贴板内容变化事件。
     * 
     * - 与on('update')方法配合使用，取消订阅的是通过on('update')订阅的事件监听。
     * - 必须在已订阅的情况下才能调用。
     * - 如果callback参数未填，清除本应用的所有监听回调；否则清除指定监听回调。
     *
     * @param { 'update' } type - 取值为'update'，表示系统剪贴板内容变化事件。
     * @param { function } [callback] - 剪贴板中内容变化时触发的用户程序的回调。如果此参数未填，表明清除本应用的所有监听回调，否则表示清除指定监听回调。
     * @throws { BusinessError }  401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @since 7 dynamic
     */
    off(type: 'update', callback?: () => void): void;

    /**
     * 取消订阅跨设备剪贴板内容变化事件。
     *
     * - 与onRemoteUpdate()方法配合使用，取消订阅的是通过onRemoteUpdate()订阅的事件监听。
     * - 必须在已订阅的情况下才能调用。
     * - 如果callback参数未填，清除本应用的所有远端监听回调；否则清除指定远端监听回调。
     *
     * @param { UpdateCallback } [callback] - 远端设备剪贴板中内容变化时触发的用户程序的回调。如果此参数未填，表明清除本应用的所有远端监听回调，否则表示清除指定远端监听回调。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 22 dynamic
     * @since 23 static
     */
    offRemoteUpdate(callback?: UpdateCallback): void;


    /**
     * 取消订阅系统剪贴板内容变化事件。
     *
     * @param { UpdateCallback } [callback] - 剪贴板中内容变化时触发的用户程序的回调。如果此参数未填，表明清除本应用的所有监听回调，否则表示清除指定监听回调。
     *
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 23 static
     */
    offUpdate(callback?: UpdateCallback): void;

    /**
     * 判断剪贴板中的数据是否来自其他设备。由于数据跨端传输耗时较大，如果剪贴板数据在远端设备上，不建议在UI线程执行检查剪贴板数据中是否包含自定义数据类型，或读取剪贴板数据。
     *
     * @returns { boolean } 判断剪贴板中的数据是否来自其他设备。剪贴板数据来自其他设备返回true；剪贴板数据来自本设备返回false。
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isRemoteData(): boolean;

    /**
     * 判断剪贴板数据是否在远端设备上。由于数据跨端传输耗时较大，如果剪贴板数据在远端设备上，不建议在UI线程执行检查剪贴板数据中是否包含自定义数据类型，或读取剪贴板数据。
     *
     * @returns { boolean } 返回指示剪贴板数据是否在远端设备上的结果。true表示剪贴板数据在远端设备上；false表示剪贴板数据不在远端设备上。默认为false。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 24 dynamic&static
     */
    hasRemoteData(): boolean;
    /**
     * 获取剪贴板数据的来源应用名称。适用于安全审计、数据追踪或向用户提示数据来源等场景。
     *
     * @returns { string } 数据来源的应用名称。
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getDataSource(): string;

    /**
     * 检查剪贴板内容中是否有指定类型的数据。
     *
     * @param { string } mimeType - 数据类型，设置后用于检查剪贴板内容中是否存在该类型的特定数据。其长度不能超过1024字节，超出范围时返回错误码401。
     * @returns { boolean } 检查剪贴板内容中是否有指定类型的数据。剪贴板内容中有指定类型的数据返回true；剪贴板内容中没有指定类型的数据返回false。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    hasDataType(mimeType: string): boolean;

    /**
     * 清空系统剪贴板内容，使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当成功清空时，err为undefined；否则为错误对象。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.clearData(callback: AsyncCallback<void>)
     */
    clear(callback: AsyncCallback<void>): void;

    /**
     * 清空系统剪贴板内容，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.clearData()
     */
    clear(): Promise<void>;

    /**
     * 清空系统剪贴板内容，使用callback异步回调。调用此方法后，系统将删除剪贴板中的所有数据，触发已注册的'update'监听回调。
     * 清空成功后，剪贴板中将没有任何数据，hasData方法将返回false。适用于需要异步清空剪贴板且不阻塞主线程的场景，如UI响应优先的交互流程。
     * 与同步接口[clearDataSync]{@link pasteboard.SystemPasteboard.clearDataSync()}不同，此接口不会阻塞UI线程，更适合在UI交互中使用。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当成功清空时，err为undefined；否则为错误对象。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    clearData(callback: AsyncCallback<void>): void;

    /**
     * 清空系统剪贴板内容，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    clearData(): Promise<void>;

    /**
     * 清空系统剪贴板内容，此接口为同步接口。适用于需要在关键业务流程中同步清空剪贴板数据，或需要立即确认清空结果的场景。
     *
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    clearDataSync(): void;

    /**
     * 读取系统剪贴板内容，使用callback异步回调。
     *
     * @param { AsyncCallback<PasteData> } callback - 回调函数。当读取成功，err为undefined，data为返回的系统剪贴板数据；否则返回错误对象。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.getData(callback: AsyncCallback<PasteData>)
     */
    getPasteData(callback: AsyncCallback<PasteData>): void;

    /**
     * 读取系统剪贴板内容，使用Promise异步回调。
     *
     * @returns { Promise<PasteData> } Promise对象，返回系统剪贴板数据。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.getData()
     */
    getPasteData(): Promise<PasteData>;

    /**
     * 读取系统剪贴板内容，使用callback异步回调。将剪贴板数据封装为PasteData对象返回。调用此方法后，系统将从剪贴板服务读取当前内容，通过callback返回PasteData对象。
     * 读取成功后，应用可以通过PasteData对象的方法获取具体的数据内容（如文本、HTML、URI等）。适用于需要异步读取剪贴板内容的场景，如UI响应优先、避免阻塞主线程。
     * 与[getDataSync]{@link pasteboard.SystemPasteboard.getDataSync()}相比，getData不会阻塞UI线程，适合处理大量数据或远端数据。
     *
     * @permission ohos.permission.READ_PASTEBOARD [since 12]
     * @param { AsyncCallback<PasteData> } callback - 回调函数。当读取成功，err为undefined，data为返回的系统剪贴板数据；否则返回错误对象。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 12]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getData(callback: AsyncCallback<PasteData>): void;

    /**
     * 读取系统剪贴板内容，将剪贴板数据封装为PasteData对象返回，使用Promise异步回调。适用于需要异步读取剪贴板内容的场景，如UI响应优先、避免阻塞主线程。
     * 适用于应用需要使用标准化数据结构[UnifiedData]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.UnifiedData}读取剪贴板数据的场景。
     *
     * @permission ohos.permission.READ_PASTEBOARD [since 12]
     * @returns { Promise<PasteData> } Promise对象，返回系统剪贴板数据。
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 12]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getData(): Promise<PasteData>;

    /**
     * 读取系统剪贴板内容，此接口为同步接口。适用于应用需要在关键业务流程中同步获取剪贴板数据，或需要立即处理剪贴板内容的场景。
     * 避免在UI线程调用此接口，以免阻塞界面；处理大量数据或远端数据时，建议使用异步接口[getData]{@link pasteboard.PasteDataRecord.getData(type: string)}。
     *
     * @permission ohos.permission.READ_PASTEBOARD [since 12]
     * @returns { PasteData } 返回系统剪贴板数据。
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 12]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getDataSync(): PasteData;

    /**
     * 判断系统剪贴板中是否有内容，使用callback异步回调。
     *
     * @param { AsyncCallback<boolean> } callback - 返回true表示系统剪贴板中有内容，返回false表示系统剪贴板中没有内容。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.hasData(callback: AsyncCallback<boolean>)
     */
    hasPasteData(callback: AsyncCallback<boolean>): void;

    /**
     * 判断系统剪贴板中是否有内容，使用Promise异步回调。
     *
     * @returns { Promise<boolean> } 返回true表示系统剪贴板中有内容，返回false表示系统剪贴板中没有内容。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.hasData()
     */
    hasPasteData(): Promise<boolean>;



    /**
     * 判断系统剪贴板中是否有内容，使用callback异步回调。适用于需要异步判断剪贴板是否有内容且不阻塞主线程的场景，如UI响应优先的交互流程。
     * 与同步接口[hasDataSync]{@link pasteboard.SystemPasteboard.hasDataSync}不同，此接口不会阻塞UI线程，更适合在UI交互中调用。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数，用于接收剪贴板是否有内容的判断结果。返回true表示系统剪贴板中有内容，返回false表示系统剪贴板中没有内容。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    hasData(callback: AsyncCallback<boolean>): void;

    /**
     * 判断系统剪贴板中是否有内容，使用Promise异步回调。
     *
     * @returns { Promise<boolean> } 返回true表示系统剪贴板中有内容，返回false表示系统剪贴板中没有内容。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    hasData(): Promise<boolean>;

    /**
     * 判断系统剪贴板中是否有内容，此接口为同步接口。
     *
     * @returns { boolean } 返回true表示系统剪贴板中有内容，返回false表示系统剪贴板中没有内容。
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    hasDataSync(): boolean;

    /**
     * 将数据写入系统剪贴板，使用callback异步回调。
     *
     * @param { PasteData } data - PasteData对象。
     * @param { AsyncCallback<void> } callback - 回调函数。当写入成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Possible causes: 1.  Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.setData(data: PasteData, callback: AsyncCallback<void>)
     */
    setPasteData(data: PasteData, callback: AsyncCallback<void>): void;

    /**
     * 将数据写入系统剪贴板，使用Promise异步回调。
     *
     * @param { PasteData } data - PasteData对象。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead pasteboard.SystemPasteboard.setData(data: PasteData)
     */
    setPasteData(data: PasteData): Promise<void>;

    /**
     * 将数据写入系统剪贴板，使用callback异步回调。调用此方法后，系统会将PasteData对象写入到系统剪贴板中。写入成功后，其他应用可以读取该剪贴板数据。
     * 写入的数据会替换剪贴板中已有的内容。适用于需要异步写入剪贴板内容的场景，如UI响应优先、避免阻塞主线程。
     * 与[setDataSync]{@link pasteboard.SystemPasteboard.setDataSync}相比，setData不会阻塞UI线程。
     *
     * @param { PasteData } data - PasteData对象，设置后会将该数据写入系统剪贴板，供应用读取和粘贴使用。
     * @param { AsyncCallback<void> } callback - 回调函数。当写入成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setData(data: PasteData, callback: AsyncCallback<void>): void;

    /**
     * 将数据写入系统剪贴板，使用Promise异步回调。适用于需要异步写入剪贴板且不阻塞主线程的场景，如UI响应优先的交互流程。
     * 与同步接口[setDataSync]{@link pasteboard.SystemPasteboard.setDataSync}不同，此接口不会阻塞UI线程，更适合在UI交互中调用。
     *
     * @param { PasteData } data - PasteData对象。调用本接口前，需确保无其他拷贝或粘贴操作正在进行。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setData(data: PasteData): Promise<void>;

    /**
     * 将数据写入系统剪贴板，此接口为同步接口。适用于应用需要在关键业务流程中同步完成剪贴板数据写入，或需要立即确认写入结果的场景。
     *
     * @param { PasteData } data - 需要写入剪贴板中的数据。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setDataSync(data: PasteData): void;

    /**
     * 读取系统剪贴板内容，使用Promise异步回调。
     * 适用于需要使用标准化数据结构[UnifiedData]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.UnifiedData}进行跨应用数据交换的场景。
     * 当应用需要与其他支持UnifiedData的应用进行数据共享，或需要处理复杂的多类型数据时，使用本接口。
     * 与[getData]{@link pasteboard.SystemPasteboard.getData(callback: AsyncCallback<PasteData>)}相比，getUnifiedData提供了更标准化的数据格式。
     *
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { Promise<unifiedDataChannel.UnifiedData> } Promise对象，返回系统剪贴板数据。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getUnifiedData(): Promise<unifiedDataChannel.UnifiedData>;

    /**
     * 读取系统剪贴板内容，此接口为同步接口。适用于需要同步使用标准化数据结构UnifiedData进行跨应用数据交换的场景。
     * 当应用需要在关键业务流程中立即获取剪贴板数据，且需要与其他支持UnifiedData的应用进行数据共享时使用。
     * 由于获取剪贴板中数据的时延受数据量大小与网络环境的影响，调用此接口可能耗时较长，建议开发者在非UI线程调用。
     *
     * @permission ohos.permission.READ_PASTEBOARD
     * @returns { unifiedDataChannel.UnifiedData } 返回系统剪贴板数据。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getUnifiedDataSync(): unifiedDataChannel.UnifiedData;

    /**
     * 将数据写入系统剪贴板，使用Promise异步回调。适用于需要异步写入剪贴板且不阻塞主线程的场景，如UI响应优先的交互流程。
     * 与同步接口[setUnifiedDataSync]{@link pasteboard.SystemPasteboard.setUnifiedDataSync}不同，此接口不会阻塞UI线程，更适合在UI交互中调用。
     *
     * @param { unifiedDataChannel.UnifiedData } data - 需要写入剪贴板中的数据。调用本接口前，需确保无其他拷贝或粘贴操作正在进行。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 27787277 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 27787278 - Replication is prohibited.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setUnifiedData(data: unifiedDataChannel.UnifiedData): Promise<void>;

    /**
     * 将数据写入系统剪贴板，此接口为同步接口。适用于需要同步使用标准化数据结构UnifiedData进行跨应用数据交换的场景。当应用需要在关键业务流程中立即写入剪贴板数据，
     * 且需要与其他支持[UnifiedData]{@link @ohos.data.unifiedDataChannel:unifiedDataChannel.UnifiedData}的应用进行数据共享时使用。
     *
     * @param { unifiedDataChannel.UnifiedData } data - 需要写入剪贴板中的数据内容。支持跨应用数据交换，其他应用可通过统一数据结构读取该内容。
     * @throws { BusinessError } 401 - Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect  parameters types.
     * @throws { BusinessError } 12900005 - Excessive processing time for internal data.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setUnifiedDataSync(data: unifiedDataChannel.UnifiedData): void;

    /**
     * 应用设置本应用剪贴板数据的可粘贴范围。适用于应用需要全局限制本应用产生的剪贴板数据的粘贴范围，如金融类应用需要保护用户敏感信息的场景。
     * 
     * - 与removeAppShareOptions()方法（删除应用全局的可粘贴的范围）配合使用。
     * - 需要删除已设置的分享范围时，调用removeAppShareOptions()。
     * - 在何处设置就在何处删除，确保分享范围设置和删除的一致性。
     *
     * @permission ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION [since 14]
     * @param { ShareOption } shareOptions - 可粘贴的范围，参数只允许pasteboard.ShareOption.INAPP。传入其他值时返回错误码401。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     *     [since 12 - 13]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 12900006 - Settings already exist.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 14]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @systemapi [since 12 - 13]
     * @publicapi [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    setAppShareOptions(shareOptions: ShareOption): void;

    /**
     * 删除应用全局的可粘贴的范围。适用于应用需要取消之前设置的粘贴范围限制，恢复剪贴板数据默认粘贴范围的场景。
     * 
     * - 与setAppShareOptions()方法（应用设置本应用剪贴板数据的可粘贴范围）配合使用。
     * - 删除的是通过setAppShareOptions()设置的分享范围。
     * - 必须在已设置分享范围的情况下才能调用。
     *
     * @permission ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION [since 14]
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     *     [since 12 - 13]
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API. [since 14]
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @systemapi [since 12 - 13]
     * @publicapi [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    removeAppShareOptions(): void;

    /**
     * 检测**本地**剪贴板中存在的[Pattern]{@link pasteboard.Pattern}模式，使用Promise异步回调。
     * 本地剪贴板指当前设备上的剪贴板数据，不包括跨设备传输的远端剪贴板数据。
     * 适用于应用在粘贴数据前需要检测剪贴板内容是否包含特定类型的数据(如URL、邮箱、电话号码等)，以便进行相应处理或提供智能提示的场景。
     *
     * @param { Array<Pattern> } patterns - 需要在剪贴板中检测的模式，用于检查剪贴板数据是否符合特定格式。
     *     可选值包括：URL(URL类型)、NUMBER(数字类型)、EMAIL_ADDRESS(邮箱地址类型)等。
     *     取值范围：数组元素数量不限，元素值只能为Pattern枚举值。传入无效值时返回错误码401。
     * @returns { Promise<Array<Pattern>> } Promise对象，返回检测到的模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @since 13 dynamic
     * @since 23 static
     */
    detectPatterns(patterns: Array<Pattern>): Promise<Array<Pattern>>;

    /**
     * 读取剪贴板中存在的MIME类型，使用Promise异步回调。
     *
     * @returns { Promise<Array<string>> } Promise对象，返回读取到的MIME类型。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getMimeTypes(): Promise<Array<string>>;

    /**
     * 获取剪贴板内容的变化次数。执行成功时返回剪贴板内容的变化次数，否则返回0。
     * 当剪贴板内容过期或调用[clearDataSync]{@link pasteboard.SystemPasteboard.clearDataSync()}等接口导致剪贴板内容为空时，内容变化次数不会因此改变。
     * 系统重启或剪贴板服务异常重启时，剪贴板内容变化次数重新从0开始计数。对同一内容连续多次复制会被记录为多次更改，每次复制均会导致内容变化次数增加。
     *
     * @returns { long } 返回读取到的剪贴板内容变化次数。
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @crossplatform [since 24]
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getChangeCount(): long;

    /**
     * 获取剪贴板的内容和进度，使用Promise异步回调，不支持对文件夹的拷贝。
     * 对于大文件拷贝操作，建议设置进度监听以跟踪拷贝进度，避免在UI线程长时间等待；建议合理设置目标路径以确保有足够的存储空间。
     * 适用于大文件粘贴场景。在此场景下，可通过此回调显示拷贝进度，或监听拷贝过程以便在必要时取消操作。
     *
     * @permission ohos.permission.READ_PASTEBOARD
     * @param { GetDataParams } params - 应用在使用剪贴板提供的文件拷贝能力的情况下需要的参数，包含目标路径、文件冲突选项、进度条类型等。
     * @returns { Promise<PasteData> } Promise对象，返回系统剪贴板数据。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
     *     permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 12900003 - Another copy or paste operation is in progress.
     * @throws { BusinessError } 12900007 - Invalid destUri or file system error.
     * @throws { BusinessError } 12900008 - Failed to start progress.
     * @throws { BusinessError } 12900009 - Progress exits abnormally.
     * @throws { BusinessError } 12900010 - System error occurred during paste execution.
     * @syscap SystemCapability.MiscServices.Pasteboard
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getDataWithProgress(params: GetDataParams): Promise<PasteData>;
  }
}

export default pasteboard;