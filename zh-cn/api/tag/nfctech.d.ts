/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * 本模块主要用于采用不同Nfc技术的Tag的读写操作。
 *
 * > **注意：**
 * >
 * > 导入tag模块编辑器报错，在某个具体设备型号上能力可能超出工程默认设备定义的能力集范围，如需要使用此部分能力需额外配置自定义syscap，参考
 * > [syscap开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap)。
 *
 * @file 标准NFC-Tag Nfc 技术
 * @kit ConnectivityKit
 */

import tag from '../@ohos.nfc.tag';
import { TagSession } from './tagSession';
import { AsyncCallback, Callback } from '../@ohos.base';

/**
 * NfcATag 提供 NFC-A(ISO 14443-3A)技术的属性和I/O操作的访问，继承自[TagSession]{@link ./tagSession:TagSession}。
 *
 * TagSession是所有NFC Tag技术类型的基类， 提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * NfcATag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是NfcATag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface NfcATag extends TagSession {
  /**
   * 获取NFC-A标签的SAK值。
   *
   * @returns { int } NfcA 标签的SAK值，十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getSak(): int;

  /**
   * 获取NFC-A标签的Atqa值。
   *
   * @returns { int[] } NfcA 标签的Atqa值，每个number十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getAtqa(): int[];
}

/**
 * NfcBTag 提供对NFC-B(ISO 14443-3B)技术的属性和I/O操作的访问，继承自TagSession。
 *
 * TagSession是所有NFC Tag技术类型的基类，提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * NfcBTag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是NfcBTag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface NfcBTag extends TagSession {
  /**
   * 获取标签的应用程序数据。
   *
   * @returns { int[] } NfcB 标签的应用程序数据，每个number十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getRespAppData(): int[];

  /**
   * 获取标签的协议信息。
   *
   * @returns { int[] } NfcB 标签的协议信息，每个number十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getRespProtocol(): int[];
}

/**
 * NfcFTag 提供对NFC-F(JIS 6319-4)技术的属性和I/O操作的访问，继承自TagSession。
 *
 * TagSession是所有NFC Tag技术类型的基类， 提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * NfcFTag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是NfcFTag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface NfcFTag extends TagSession {
  /**
   * 从标签实例获取系统代码。
   *
   * @returns { int[] } NfcF 标签的系统代码，每个number十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getSystemCode(): int[];

  /**
   * 从标签实例获取PMm（由IC代码和制造商参数组成）。
   *
   * @returns { int[] } NfcF 标签的PMm信息，每个number十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getPmm(): int[];
}

/**
 * NfcVTag 提供对NFC-V(ISO 15693)技术的属性和I/O操作的访问，继承自TagSession。
 *
 * TagSession是所有NFC Tag技术类型的基类， 提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * NfcVTag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是NfcVTag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface NfcVTag extends TagSession {
  /**
   * 从标签实例获取响应标志。
   *
   * @returns { int } NfcV 标签的响应标志，十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getResponseFlags(): int;

  /**
   * 从标签实例获取数据存储格式标识符（DSFID）。
   *
   * @returns { int } NfcV 标签的数据存储格式标识符，十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getDsfId(): int;
}

/**
 * IsoDepTag 提供对ISO-DEP(ISO 14443-4)技术的属性和I/O操作的访问，继承自TagSession。
 *
 * TagSession是所有NFC Tag技术类型的基类， 提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * IsoDepTag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是IsoDepTag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface IsoDepTag extends TagSession {
  /**
   * 获取标签的历史字节，针对基于NfcA通信技术的IsoDep卡片。
   *
   * @returns { int[] } IsoDepTag 标签的历史字节，每个number十六进制表示，范围是0x00~0xFF。如果该IsoDep类型Tag是基于NfcB技术的，则该返回值为空。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getHistoricalBytes(): int[];

  /**
   * 获取标签的更高层响应字节，针对基于NfcB通信技术的IsoDep卡片。
   *
   * @returns { int[] } IsoDepTag 标签的更高层响应字节，每个number十六进制表示，范围是0x00~0xFF。如果该IsoDep类型Tag是基于NfcA技术的，则该返回值为空。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getHiLayerResponse(): int[];

  /**
   * 检查是否支持扩展的APDU，使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<boolean> } Promise对象。返回true表示支持；返回false表示不支持。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  isExtendedApduSupported(): Promise<boolean>;

  /**
   * 检查是否支持扩展的APDU。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<boolean> } callback - 回调函数，true: 支持， false: 不支持。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  isExtendedApduSupported(callback: AsyncCallback<boolean>): void;
}

/**
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface NdefMessage {
  /**
   * 获取NDEF消息中的所有记录。
   *
   * @returns { tag.NdefRecord[] } NDEF标签的Record列表，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getNdefRecords(): tag.NdefRecord[];
}

/**
 * 提供对已格式化为NDEF的NFC标签的数据和操作的访问，继承自TagSession。
 *
 * TagSession是所有NFC Tag技术类型的基类，提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * NdefTag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是NdefTag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface NdefTag extends TagSession {
  /**
   * 获取NDEF标签的类型。
   *
   * @returns { tag.NfcForumType } NDEF标签类型，包括NFC FORUM TYPE 1/2/3/4等。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getNdefTagType(): tag.NfcForumType;

  /**
   * 获取发现NDEF标签时，从标签读取的Message。
   *
   * @returns { NdefMessage } NDEF标签的Message，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getNdefMessage(): NdefMessage;

  /**
   * 检查NDEF标签是否可写。在调用写数据接口前，需要先判断是否支持写操作。
   *
   * @returns { boolean } 检查结果，true: 可写， false: 不可写。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  isNdefWritable(): boolean;

  /**
   * 读取标签上的NDEF消息。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<NdefMessage> } Promise对象。返回从NDEF标签中读取到的Message数据对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  readNdef(): Promise<NdefMessage>;

  /**
   * 读取标签上的NDEF消息。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<NdefMessage> } callback - 回调函数，返回从NDEF标签中读取到的Message信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  readNdef(callback: AsyncCallback<NdefMessage>): void;

  /**
   * 将NDEF Message数据对象写入标签。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } msg - NDEF Message数据对象。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  writeNdef(msg: NdefMessage): Promise<void>;

  /**
   * 将NDEF Message数据对象写入此标签。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } msg - NDEF Message数据对象。
   * @param { AsyncCallback<void> } callback - 回调函数。当NDEF Message数据对象写入成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  writeNdef(msg: NdefMessage, callback: AsyncCallback<void>): void;

  /**
   * 检查NDEF标签是否可以设置为只读。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { boolean } true: NDEF标签可设置为只读， false: NDEF标签不可设置为只读。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  canSetReadOnly(): boolean;

  /**
   * 将NDEF标签设置为只读。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  setReadOnly(): Promise<void>;

  /**
   * 将NDEF标签设置为只读。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<void> } callback - 回调函数。当NDEF标签设置为只读成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  setReadOnly(callback: AsyncCallback<void>): void;

  /**
   * 将NFC论坛类型，转换为NFC论坛中定义的字符串描述。
   *
   * @param { tag.NfcForumType } type - NDEF标签类型，包括NFC FORUM TYPE 1/2/3/4等。
   * @returns { string } NFC论坛类型的字符串描述。
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getNdefTagTypeString(type: tag.NfcForumType): string;
}

/**
 * MifareClassicTag提供对MIFARE Classic属性和I/O操作的访问，继承自[TagSession]{@link ./tagSession:TagSession}。
 *
 * TagSession是所有NFC Tag技术类型的基类， 提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * MifareClassicTag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是MifareClassicTag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface MifareClassicTag extends TagSession {
  /**
   * 使用密钥对扇区进行身份验证，只有身份验证成功的扇区可以进行操作。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } sectorIndex - 待验证的扇区索引，从0开始。
   * @param { int[] } key - 用于扇区验证的密钥（6字节）。
   * @param { boolean } isKeyA - isKeyA标志。true 表示KeyA，false 表示KeyB。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  authenticateSector(sectorIndex: int, key: int[], isKeyA: boolean): Promise<void>;

  /**
   * 使用密钥对扇区进行身份验证，只有身份验证成功的扇区可以进行操作。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } sectorIndex - 待验证的扇区索引，从0开始。
   * @param { int[] } key - 用于扇区验证的密钥（6字节）。
   * @param { boolean } isKeyA - isKeyA标志。true 表示KeyA，false 表示KeyB。
   * @param { AsyncCallback<void> } callback - 回调函数。当身份验证成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  authenticateSector(sectorIndex: int, key: int[], isKeyA: boolean, callback: AsyncCallback<void>): void;

  /**
   * 读取标签中一个块存储的内容，一个块大小为16字节。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 要读取的块索引，从0开始。
   * @returns { Promise<int[]> } Promise对象。返回读取的块数据。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  readSingleBlock(blockIndex: int): Promise<int[]>;

  /**
   * 读取标签中一个块存储的内容，一个块大小为16字节。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 要读取的块索引，从0开始。
   * @param { AsyncCallback<int[]> } callback - 以callback形式异步返回读取到的块数据。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  readSingleBlock(blockIndex: int, callback: AsyncCallback<int[]>): void;

  /**
   * 向标签中一个块存储写入内容，一个块大小为16字节。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 要写入的块索引，从0开始。
   * @param { int[] } data - 要写入的数据，大小必须是16个字节。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  writeSingleBlock(blockIndex: int, data: int[]): Promise<void>;

  /**
   * 向标签中一个块存储写入内容，一个块大小为16字节。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 要写入的块索引，从0开始。
   * @param { int[] } data - 要写入的数据，大小必须是16个字节。
   * @param { AsyncCallback<void> } callback - 回调函数。当向块存储写入内容成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  writeSingleBlock(blockIndex: int, data: int[], callback: AsyncCallback<void>): void;

  /**
   * 对指定块的内容，增加指定的数值，并将结果存储在内部传输缓冲器中。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 要指定增加的块索引，从0开始。
   * @param { int } value - 要指定增加的数据，非负数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  incrementBlock(blockIndex: int, value: int): Promise<void>;

  /**
   * 对指定块的内容，增加指定的数值，并将结果存储在内部传输缓冲器中。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 要被运算的块索引，从0开始。
   * @param { int } value - 要增加的数值，非负数。
   * @param { AsyncCallback<void> } callback - 回调函数。当对块增加指定数值成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  incrementBlock(blockIndex: int, value: int, callback: AsyncCallback<void>): void;

  /**
   * 对指定块的内容，减少指定的数值，并将结果存储在内部传输缓冲器中。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 要被运算的块索引，从0开始。
   * @param { int } value - 要减少的数值，非负数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  decrementBlock(blockIndex: int, value: int): Promise<void>;

  /**
   * 对指定块的内容，减少指定的数值。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 要被运算的块索引，从0开始。
   * @param { int } value - 要减少的数值，非负数。
   * @param { AsyncCallback<void> } callback - 回调函数。当对块减少指定数值成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  decrementBlock(blockIndex: int, value: int, callback: AsyncCallback<void>): void;

  /**
   * 将临时寄存器的值转移到指定的块。使用Promise异步异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 被操作的块的索引，从0开始。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  transferToBlock(blockIndex: int): Promise<void>;

  /**
   * 将临时寄存器的值转移到指定的块。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 被操作的块的索引，从0开始。
   * @param { AsyncCallback<void> } callback - 回调函数。当临时寄存器的值转移到指定块成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  transferToBlock(blockIndex: int, callback: AsyncCallback<void>): void;

  /**
   * 将指定块的值复制到临时寄存器。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 被操作的块的索引，从0开始。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  restoreFromBlock(blockIndex: int): Promise<void>;

  /**
   * 将指定块的值复制到临时寄存器。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - 被操作的块的索引，从0开始。
   * @param { AsyncCallback<void> } callback - 回调函数。当复制指定块内容到临时寄存器成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  restoreFromBlock(blockIndex: int, callback: AsyncCallback<void>): void;

  /**
   * 获取MIFARE Classic标签中的扇区数。
   *
   * @returns { int } 标签中的扇区数量。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getSectorCount(): int;

  /**
   * 获取指定扇区中的块数。
   *
   * @param { int } sectorIndex - 扇区序号，从0开始。
   * @returns { int } 该扇区内的块数量。
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getBlockCountInSector(sectorIndex: int): int;

  /**
   * 获取MIFARE Classic标签的类型。
   *
   * @returns { tag.MifareClassicType } MifareClassic标签的类型。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getType(): tag.MifareClassicType;

  /**
   * 获取标签的存储空间大小，具体请参见[MifareClassicSize]{@link @ohos.nfc.tag:tag.MifareClassicSize}。
   *
   * @returns { int } 标签的大小，单位为字节，请参见[MifareClassicSize]{@link @ohos.nfc.tag:tag.MifareClassicSize}。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getTagSize(): int;

  /**
   * 检查标签是不是被模拟的。
   *
   * @returns { boolean } 检查结果，true: 是；false：否。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  isEmulatedTag(): boolean;

  /**
   * 获取特定扇区的第一个块的序号。
   *
   * @param { int } sectorIndex - 扇区序号，从0开始。
   * @returns { int } 该扇区内的第一个块的序号，从0开始。
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getBlockIndex(sectorIndex: int): int;

  /**
   * 获取包含指定块号的扇区序号。
   *
   * @param { int } blockIndex - 块序号，从0开始。
   * @returns { int } 扇区序号，从0开始。
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getSectorIndex(blockIndex: int): int;
}

/**
 * MifareUltralightTag 提供对MIFARE Ultralight属性和I/O操作的访问，继承自TagSession。
 *
 * TagSession是所有NFC Tag技术类型的基类， 提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * MifareUltralightTag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是MifareUltralightTag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface MifareUltralightTag extends TagSession {
  /**
   * 读取标签的4页数据，共16字节的数据。每个页面数据大小为4字节。使用Promise异步回调
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } pageIndex - 要读取页面的索引，从0开始。
   * @returns { Promise<int[]> } Promise对象。以Promise形式返回读取的4页的数据，共16字节。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  readMultiplePages(pageIndex: int): Promise<int[]>;

  /**
   * 读取标签的4页数据，共16字节的数据。每个页面数据大小为4字节。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } pageIndex - 要读取页面的索引，从0开始。
   * @param { AsyncCallback<int[]> } callback - 以callback形式异步返回页操作结果。返回读取到的数据，共16字节。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  readMultiplePages(pageIndex: int, callback: AsyncCallback<int[]>): void;

  /**
   * 写入一页数据，数据大小为4字节。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } pageIndex - 要写入页面的索引，从0开始。
   * @param { int[] } data - 要写入页面的数据内容，必须是4个字节大小。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  writeSinglePage(pageIndex: int, data: int[]): Promise<void>;

  /**
   * 写入一页数据，数据大小为4字节。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } pageIndex - 要写入页面的索引，从0开始。
   * @param { int[] } data - 要写入页面的数据内容，必须是4个字节大小。
   * @param { AsyncCallback<void> } callback - 回调函数。当写入数据成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  writeSinglePage(pageIndex: int, data: int[], callback: AsyncCallback<void>): void;

  /**
   * 获取MIFARE Ultralight标签的类型。
   *
   * @returns { tag.MifareUltralightType } MIFARE Ultralight标签的类型。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getType(): tag.MifareUltralightType;
}

/**
 * NdefFormatableTag为NDEF Formattable的标签提供格式化操作，继承自TagSession。
 *
 * TagSession是所有NFC Tag 技术类型的基类， 提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * NdefFormatableTag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是NdefFormatableTag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface NdefFormatableTag extends TagSession {
  /**
   * 将标签格式化为NDEF标签，将NDEF消息写入NDEF标签。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } message - 格式化成功时要写入的NDEF消息。可以为null，为null时仅格式化标签，不写入内容。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  format(message: NdefMessage): Promise<void>;

  /**
   * 将标签格式化为NDEF标签，然后将NDEF消息写入NDEF标签。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } message - 格式化成功时要写入的Ndef消息。可以为null，为null时仅格式化标签，不写入内容。
   * @param { AsyncCallback<void> } callback - 回调函数。当NDEF消息写入标签成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  format(message: NdefMessage, callback: AsyncCallback<void>): void;

  /**
   * 将标签格式化为NDEF标签，将NDEF消息写入NDEF标签，之后将标签设置为只读。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } message - 格式化成功时要写入的NDEF消息。可以为null，为null时仅格式化标签，不写入内容。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  formatReadOnly(message: NdefMessage): Promise<void>;

  /**
   * 将标签格式化为NDEF标签，然后将NDEF消息写入NDEF标签，之后将标签设置为只读。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } message - 格式化成功时要写入的NDEF消息。可以为null，为null时仅格式化标签，不写入内容。
   * @param { AsyncCallback<void> } callback - 回调函数。当NDEF消息写入NDEF标签成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The Tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  formatReadOnly(message: NdefMessage, callback: AsyncCallback<void>): void;
}

/**
 * BarcodeTag提供读取条形码标签的属性和访问I/O操作的能力，继承自TagSession。
 *
 * TagSession是所有NFC Tag 技术类型的基类， 提供建立连接和发送数据等共同接口。具体请参见[TagSession]{@link ./tagSession:TagSession}。
 *
 * BarcodeTag获取方式请参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 *
 * 以下是BarcodeTag的独有接口。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice
 * @since 18 dynamic
 * @since 23 static
 */
export interface BarcodeTag extends TagSession {
  /**
   * 获取读到的Barcode类型的完整Tag。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<ArrayBuffer> } Promise对象。返回BarCode类型的 tag。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  getBarcode(): Promise<ArrayBuffer>;
}