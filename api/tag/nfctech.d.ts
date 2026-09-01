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
 * The **nfctech** module provides APIs for reading and writing tags that use different Near-Field Communication (NFC) 
 * technologies.
 * 
 * > **NOTE**
 * >
 * > If an error is reported while importing the tag module editor, the capabilities of a specific device model may 
 * > exceed the capability set defined for the default device. To use these capabilities, configure a custom SysCap by 
 * > following instructions in 
 * > [SystemCapability](https://developer.huawei.com/consumer/en/doc/harmonyos-references/syscap).
 *
 * @file Standard NFC Technologies
 * @kit ConnectivityKit
 */

import tag from '../@ohos.nfc.tag';
import { TagSession } from './tagSession';
import { AsyncCallback, Callback } from '../@ohos.base';

/**
 * Provides APIs to access NFC-A (ISO 14443-3A) properties and perform I/O operations on a tag. This class inherits from
 * **[TagSession]{@link ./tagSession:TagSession}**.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain an **NfcATag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **NfcATag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface NfcATag extends TagSession {
  /**
   * Obtains the SAK value of this NFC-A tag.
   *
   * @returns { int } SAK value obtained. The SAK is a hexadecimal number ranging from **0x00** to **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getSak(): int;

  /**
   * Obtains the ATQA value of this NFC-A tag.
   *
   * @returns { int[] } ATQA value obtained. Each number of the ATQA is a hexadecimal number ranging from **0x00** to
   *     **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getAtqa(): int[];
}

/**
 * Provides APIs to access NFC-B (ISO 14443-3B) properties and perform I/O operations on a tag. This class inherits from
 * **TagSession**.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain an **NfcBTag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **NfcBTag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface NfcBTag extends TagSession {
  /**
   * Obtains the application data of this NFC-B tag.
   *
   * @returns { int[] } Application data obtained, which consists of hexadecimal numbers ranging from **0x00** to
   *     **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getRespAppData(): int[];

  /**
   * Obtains the protocol information of this NFC-B tag.
   *
   * @returns { int[] } Protocol information obtained, which consists of hexadecimal numbers ranging from **0x00** to
   *     **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getRespProtocol(): int[];
}

/**
 * Provides APIs to access NFC-F (JIS 6319-4) properties and perform I/O operations on a tag. This class inherits from
 * **TagSession**.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain an **NfcFTag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **NfcFTag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface NfcFTag extends TagSession {
  /**
   * Obtains the system code from this NFC-F tag.
   *
   * @returns { int[] } System code obtained, which consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getSystemCode(): int[];

  /**
   * Obtains the PMm (consisting of the IC code and manufacturer parameters) information from this NFC-F tag.
   *
   * @returns { int[] } PMm information obtained, which consists of hexadecimal numbers ranging from **0x00** to
   *     **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getPmm(): int[];
}

/**
 * Provides APIs to access NFC-V (ISO 15693) properties and perform I/O operations on a tag. This class inherits from
 * **TagSession**.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain an **NfcVTag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **NfcVTag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface NfcVTag extends TagSession {
  /**
   * Obtains the response flags from this NFC-V tag.
   *
   * @returns { int } Response flags obtained, which consist of hexadecimal numbers ranging from **0x00** to **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getResponseFlags(): int;

  /**
   * Obtains the data storage format identifier (DSFID) from this NFC-V tag.
   *
   * @returns { int } DSFID obtained, which consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  getDsfId(): int;
}

/**
 * Provides APIs to access ISO-DEP (ISO 14443-4) properties and I/O operations on a tag. This class inherits from
 * **TagSession**.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain an **IsoDepTag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **IsoDepTag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface IsoDepTag extends TagSession {
  /**
   * Obtains the historical bytes for the given tag. This API applies only to the IsoDep tags that use the NFC-A
   * technology.
   *
   * @returns { int[] } Historical bytes obtained, which consist of hexadecimal numbers ranging from **0x00** to
   *     **0xFF**. If the IsoDep tag uses the NFC-B technology, **null** will be returned.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getHistoricalBytes(): int[];

  /**
   * Obtains the higher-layer response bytes for the given tag. This API applies only to the IsoDep tags that use the
   * NFC-B technology.
   *
   * @returns { int[] } Higher-layer response bytes obtained, which consist of hexadecimal numbers ranging from **0x00**
   *     to **0xFF**. If the IsoDep tag uses the NFC-A technology, **null** will be returned.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getHiLayerResponse(): int[];

  /**
   * Checks whether extended APDUs are supported. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that extended APDUs
   *     are supported, and the value **false** indicates the opposite.
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
   * Checks whether extended APDUs are supported. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<boolean> } callback - Callback used to return the operation result. The value **true**
   *     indicates that extended APDUs are supported, and the value **false** indicates the opposite.
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
 * Provides methods for Message of NDEF.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface NdefMessage {
  /**
   * Obtains all NDEF records.
   *
   * @returns { tag.NdefRecord[] } List of NDEF records obtained. For details, see *NFCForum-TS-NDEF_1.0*.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getNdefRecords(): tag.NdefRecord[];
}

/**
 * Provides APIs to access the tags in the NFC Data Exchange Format (NDEF). This class inherits from **TagSession**.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain an **NdefTag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **NdefTag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface NdefTag extends TagSession {
  /**
   * Obtains the NDEF tag type.
   *
   * @returns { tag.NfcForumType } NDEF tag type obtained. It can be NFC FORUM TYPE 1, 2, 3, or 4.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getNdefTagType(): tag.NfcForumType;

  /**
   * Obtains the NDEF message from this NDEF tag.
   *
   * @returns { NdefMessage } NDEF message created. For details, see *NFCForum-TS-NDEF_1.0*.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getNdefMessage(): NdefMessage;

  /**
   * Check whether this NDEF tag is writable. Before calling the data write API, check whether the write operation is
   * supported.
   *
   * @returns { boolean } Promise used to return the result. If the tag is writable, **true** is returned; otherwise,
   *     **false** is returned.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  isNdefWritable(): boolean;

  /**
   * Reads the NDEF message from the NDEF tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<NdefMessage> } Promise used to return the **Message** object read from the NDEF tag.
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
   * Reads the NDEF message from the NDEF tag. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<NdefMessage> } callback - Callback used to return the NDEF message read.
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
   * Writes a **Message** object to the NDEF tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } msg - NDEF message to write.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Writes a **Message** object to the NDEF tag. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } msg - NDEF message to write.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Checks whether this NDEF tag can be set to read-only.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { boolean } Returns **true** if the tag can be set to read-only; returns **false** otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  canSetReadOnly(): boolean;

  /**
   * Sets the NDEF tag to read-only. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the NDEF tag to read-only. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Converts an NFC Forum Type tag to a string defined in the NFC Forum.
   *
   * @param { tag.NfcForumType } type - NDEF tag type. It can be NFC FORUM type 1, 2, 3, or 4.
   * @returns { string } Byte array obtained.
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
 * Provides APIs to access MIFARE Classic properties and perform I/O operations on a tag. This class inherits from
 * [TagSession]{@link ./tagSession:TagSession}.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain a **MifareClassicTag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **MifareClassicTag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface MifareClassicTag extends TagSession {
  /**
   * Authenticates a sector using a key. The sector can be accessed only after the authentication is successful. This
   * API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } sectorIndex - Index of the sector to authenticate. The sector indexes start from **0**.
   * @param { int[] } key - Key (6 bytes) used for sector authentication.
   * @param { boolean } isKeyA - Whether the key is key A. The value **true** indicates key A, and **false** indicates
   *     key B.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Authenticates a sector using a key. The sector can be accessed only after the authentication is successful. This
   * API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } sectorIndex - Index of the sector to authenticate. The sector indexes start from **0**.
   * @param { int[] } key - Key (6 bytes) used for sector authentication.
   * @param { boolean } isKeyA - Whether the key is key A. The value **true** indicates key A, and **false** indicates
   *     key B.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Reads a block (16 bytes) on this tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the block to read. The block indexes start from **0**.
   * @returns { Promise<int[]> } Promise used to return the read block data.
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
   * Reads a block (16 bytes) on this tag. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the block to read. The block indexes start from **0**.
   * @param { AsyncCallback<int[]> } callback - Callback used to return the block data read.
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
   * Writes data to a block on this tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the block to write. The block indexes start from **0**.
   * @param { int[] } data - 16-byte data to write.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Writes data to a block on this tag. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the block to write. The block indexes start from **0**.
   * @param { int[] } data - 16-byte data to write.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Increments a block with the specified value and saves the result in a buffer for internal transmission. This API
   * uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the block to increment. The block indexes start from **0**.
   * @param { int } value - Block data to increment. The value cannot be a negative number.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Increments a block with the specified value and saves the result in a buffer for internal transmission. This API
   * uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the block to increment. The block indexes start from **0**.
   * @param { int } value - Block data to increment. The value cannot be a negative number.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Decrements a block with the specified value and saves the result in a buffer for internal transmission. This API
   * uses a promise to return the result. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the block to increment. The block indexes start from **0**.
   * @param { int } value - Block data to decrement. The value cannot be a negative number.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Decrements a block with the specified value. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the block to increment. The block indexes start from **0**.
   * @param { int } value - Block data to decrement. The value cannot be a negative number.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Transfers data from the temporary register to a block. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the destination block. The value starts form **0**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Transfers data from the temporary register to a block. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the destination block. The value starts form **0**.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Restores data in the temporary register from a block. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the destination block. The value starts form **0**.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Restores data in the temporary register from a block. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } blockIndex - Index of the destination block. The value starts form **0**.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Obtains the number of sectors in this MIFARE Classic tag.
   *
   * @returns { int } Number of sectors obtained.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getSectorCount(): int;

  /**
   * Obtains the number of blocks in a sector.
   *
   * @param { int } sectorIndex - Index of the target sector. The sector indexes start from **0**.
   * @returns { int } Number of blocks obtained.
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
   * Obtains the type of this MIFARE Classic tag.
   *
   * @returns { tag.MifareClassicType } Type of the MIFARE Classic tag obtained.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getType(): tag.MifareClassicType;

  /**
   * Obtains the size of this tag. For details, see [MifareClassicSize]{@link @ohos.nfc.tag:tag.MifareClassicSize}.
   *
   * @returns { int } Tag size obtained, in bytes. For details, see
   *     [MifareClassicSize]{@link @ohos.nfc.tag:tag.MifareClassicSize}.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getTagSize(): int;

  /**
   * Checks whether it is an emulated tag.
   *
   * @returns { boolean } Returns **true** if the tag is an emulated tag; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  isEmulatedTag(): boolean;

  /**
   * Obtains the index of the first block in a sector.
   *
   * @param { int } sectorIndex - Index of the target sector. The sector indexes start from **0**.
   * @returns { int } Index of the first block obtained.
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
   * Obtains the index of the sector that holds the specified block.
   *
   * @param { int } blockIndex - Index of the block. The block indexes start from **0**.
   * @returns { int } Index of the sector obtained. The sector indexes start from **0**.
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
 * Provides APIs to access MIFARE Ultralight properties and perform I/O operations on a tag. This class inherits from
 * **TagSession**.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain a **MifareUltralightTag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **MifareUltralightTag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface MifareUltralightTag extends TagSession {
  /**
   * Reads four pages of data (16 bytes in total) from the tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } pageIndex - Index of the first page to read. The page indexes start from **0**.
   * @returns { Promise<int[]> } Promise used to return the data read.
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
   * Reads four pages of data (16 bytes in total) from the tag. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } pageIndex - Index of the first page to read. The page indexes start from **0**.
   * @param { AsyncCallback<int[]> } callback - Callback used to return the data (16 bytes in size) read.
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
   * Writes one page (4 bytes) of data to this tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } pageIndex - Index of the page to write. The page indexes start from **0**.
   * @param { int[] } data - 4-byte data to write.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Writes one page (4 bytes) of data to this tag. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } pageIndex - Index of the page to write. The page indexes start from **0**.
   * @param { int[] } data - 4-byte data to write.
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Obtains the type of this MIFARE Ultralight tag.
   *
   * @returns { tag.MifareUltralightType } Type of the MIFARE Ultralight tag obtained.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getType(): tag.MifareUltralightType;
}

/**
 * Provides APIs for formatting NDEF formattable tags. This class inherits from **TagSession**.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain an **NdefFormatableTag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **NdefFormatableTag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export interface NdefFormatableTag extends TagSession {
  /**
   * Formats this tag as an NDEF tag, and writes an NDEF message to it. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } message - NDEF message to write. If this parameter is **null**, the tag is formatted only (
   *     no data will be written).
   * @returns { Promise<void> } Promise that returns no value.
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
   * Formats this tag as an NDEF tag, and writes an NDEF message to it. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } message - NDEF message to write when the formatting is successful. If this parameter is
   *     **null**, the tag is formatted only (no data will be written).
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Formats this tag as an NDEF tag, writes an NDEF message to it, and then sets the tag to read-only. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } message - NDEF message to write. If this parameter is **null**, the tag is formatted only (
   *     no data will be written).
   * @returns { Promise<void> } Promise that returns no value.
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
   * Formats this tag as an NDEF tag, writes an NDEF message to the NDEF tag, and then sets the tag to read-only. This
   * API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { NdefMessage } message - NDEF message to write. If this parameter is **null**, the tag is formatted only (
   *     no data will be written).
   * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
   *     successful, **err** is **undefined**; otherwise, **err** is an error object.
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
 * Provides the capability of reading barcode label attributes and accessing I/O operations. It is inherited from
 * **TagSession**.
 *
 * **TagSession** is the base class of all NFC tag technologies. It provides common interfaces for establishing
 * connections and transferring data. For more details, see [TagSession]{@link ./tagSession:TagSession}.
 *
 * For details about how to obtain a **BarcodeTag** object, see
 * [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 *
 * The following describes the unique APIs of **BarcodeTag**.
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice
 * @since 18 dynamic
 * @since 23 static
 */
export interface BarcodeTag extends TagSession {
  /**
   * Obtains a complete barcode tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<ArrayBuffer> } Promise used to return the barcode tag read.
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