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
import { TagSession } from './tagSession';
import { AsyncCallback, Callback } from '../basic';

/**
 * Provides interfaces to control the read and write of tags that support the NFC-A technology.
 *
 * <p>This class is inherited from the {@link TagSession} abstract class, and provides methods to create
 * {@code NfcATag} objects and obtain the ATQA and SAK.
 *
 * @since 7
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface NfcATag extends TagSession {
  /**
   * Obtains the SAK of an NFC-A tag.
   *
   * @return Returns the SAK of the NFC-A tag.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  getSak(): number;

  /**
   * Obtains the ATQA of an NFC-A tag.
   *
   * @return Returns the ATQA of the NFC-A tag.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  getAtqa(): number[];
}

/**
 * Provides interfaces to create an {@code NfcBTag} and perform I/O operations on the tag.
 *
 * <p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an
 * {@code NfcBTag} and obtain the tag information.
 *
 * @since 7
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface NfcBTag extends TagSession {
  /**
   * Obtains the application data of a tag.
   *
   * @return Returns the application data of the tag.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  getRespAppData(): number[];

  /**
   * Obtains the protocol information of a tag.
   *
   * @return Returns the protocol information of the tag.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  getRespProtocol(): number[];
}

/**
 * Provides methods for creating an NFC-F tag, obtaining tag information, and controlling tag read and write.
 *
 * <p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an
 * {@code NfcFTag} and obtain the tag information.
 *
 * @since 7
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface NfcFTag extends TagSession {
  /**
   * Obtains the system code from this {@code NfcFTag} instance.
   *
   * @return Returns the system code.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  getSystemCode(): number[];

  /**
   * Obtains the PMm (consisting of the IC code and manufacturer parameters) from this {@code NfcFTag} instance.
   *
   * @return Returns the PMm.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  getPmm(): number[];
}

/**
 * Provides methods for creating an NFC-V tag, obtaining tag information, and controlling tag read and write.
 *
 * <p>This class inherits from the {@link TagSession} abstract class and provides interfaces to create an
 * {@code NfcVTag} and obtain the tag information.
 *
 * @since 7
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface NfcVTag extends TagSession {
  /**
   * Obtains the response flags from this {@code NfcVTag} instance.
   *
   * @return Returns the response flags.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  getResponseFlags(): number;

  /**
   * Obtains the data storage format identifier (DSFID) from this {@code NfcVTag} instance.
   *
   * @return Returns the DSFID.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  getDsfId(): number;
}

/**
 * Provides methods for accessing IsoDep tag.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface IsoDepTag extends TagSession {
 /**
  * Get Historical bytes of the tag.
  * @return the Historical bytes.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getHistoricalBytes(): string;

 /**
  * Get HiLayerResponse bytes of the tag.
  * @return HiLayerResponse bytes
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getHiLayerResponse(): string;

 /**
  * Check if externded apdu length supported or not.
  * @return return true if externded apdu length supported, otherwise false.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  isExtendedApduSupported(): Promise<boolean>;
  isExtendedApduSupported(callback: AsyncCallback<boolean>): void;
}

/**
 * NDEF records definition, see NFCForum-TS-NDEF_1.0.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface NdefRecord {
  /** tnf of NdefRecord */
  tnf: number;

   /** RTD type of NdefRecord */
  rtdType: string;

   /** id of NdefRecord */
  id: string;

   /** payload of NdefRecord */
  payload: string;
}

/**
 * TNF types definitions, see NFCForum-TS-NDEF_1.0.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
export enum TnfType {
  /** Empty */
  TNF_EMPTY = 0x0,

  /** NFC Forum well-known type [NFC RTD] */
  TNF_WELL_KNOWN = 0x1,

  /** Media-type as defined in RFC 2046 [RFC 2046] */
  TNF_MEDIA = 0x2,

  /** Absolute URI as defined in RFC 3986 [RFC 3986] */
  TNF_ABSOLUTE_URI = 0x3,

  /** NFC Forum external type [NFC RTD] */
  TNF_EXT_APP = 0x4,

  /** Unknown */
  TNF_UNKNOWN = 0x5,

  /** Unchanged (see section 2.3.3) */
  TNF_UNCHANGED = 0x6,
}

/**
 * RTD types definitions, see NFC Record Type Definition (RTD) Specification.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
 export interface RtdType {
  /** RTD type text */
  RTD_TEXT: 'T';

  /** RTD type URI */
  RTD_URI: 'U';
}

export interface NdefMessage {
 /**
  * Get all records of a ndef message.
  * @return record list of a ndef message
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getNdefRecords(): NdefRecord[];

 /**
  * Create a ndef record with uri data.
  * @param uri uri data for new a ndef record
  * @return the instance of NdefRecord
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  makeUriRecord(uri: string): NdefMessage;

 /**
  * Create a ndef record with text data.
  * @param text text data for new a ndef record
  * @param locale language code for the ndef record. if locale is null, use default locale
  * @return the instance of NdefRecord
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  makeTextRecord(text: string, locale: string): NdefMessage;

 /**
  * Create a ndef record with mime data.
  * @param mimeType type of mime data for new a ndef record
  * @param mimeData mime data for new a ndef record
  * @return the instance of NdefRecord
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  makeMimeRecord(mimeType: string, mimeData: string): NdefMessage;

 /**
  * Create a ndef record with external data.
  * @param domainName domain name of issuing organization for the external data
  * @param serviceName domain specific type of data for the external data
  * @param externalData data payload of a ndef record
  * @return the instance of NdefRecord
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  makeExternalRecord(domainName: string, serviceName: string, externalData: string): NdefMessage;

 /**
  * Parse a ndef message into raw bytes.
  * @param ndefMessage a ndef message to parse
  * @return raw bytes of a ndef message
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  messageToString(ndefMessage: NdefMessage): string;
}

/**
 * NfcForum Type definition. The Ndef tag may use one of them.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
 export enum NfcForumType {
  /** NFC FORUM TYPE 1 */
  NFC_FORUM_TYPE_1 = 1,

  /** NFC FORUM TYPE 2 */
  NFC_FORUM_TYPE_2 = 2,

  /** NFC FORUM TYPE 3 */
  NFC_FORUM_TYPE_3 = 3,

  /** NFC FORUM TYPE 4 */
  NFC_FORUM_TYPE_4 = 4,

  /** Mifare Classic */
  MIFARE_CLASSIC = 101,
}

/**
 * Provides methods for accessing NDEF tag.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface NdefTag extends TagSession {
 /**
  * Create a ndef message with raw bytes.
  * @param data raw bytes to parse ndef message
  * @return the instance of NdefMessage
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  createNdefMessage(data: string): NdefMessage;

 /**
  * Create a ndef message with record list.
  * @param ndefRecords record list to parse ndef message
  * @return the instance of NdefMessage
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  createNdefMessage(ndefRecords: NdefRecord[]): NdefMessage;

 /**
  * Get the type of the Ndef tag.
  * @return type of Ndef tag.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getNdefTagType(): NfcForumType;

 /**
  * Get the ndef message that was read from ndef tag when tag discovery.
  * @return ndef message.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getNdefMessage(): NdefMessage;

 /**
  * Check if ndef tag is writable.
  * @return return true if the tag is writable, otherwise return false.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  isNdefWritable(): Promise<boolean>;
  isNdefWritable(callback: AsyncCallback<boolean>): void;

 /**
  * Read ndef message on this tag.
  * @return ndef message in tag.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  readNdef(): Promise<NdefMessage>;
  readNdef(callback: AsyncCallback<NdefMessage>): void;

 /**
  * Write ndef message into this tag.
  * @param msg ndef message to write
  * @return Error code of write. if return 0, means successful.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  writeNdef(msg: NdefMessage): Promise<number>;
  writeNdef(msg: NdefMessage, callback: AsyncCallback<number>): void;

 /**
  * Check ndef tag can be set read-only
  * @return return true if the tag can be set readonly, otherwise return false.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  canSetReadOnly(): Promise<boolean>;
  canSetReadOnly(callback: AsyncCallback<boolean>): void;

 /**
  * Set ndef tag read-only
  * @return if return 0 means successful, otherwise the error code.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  setReadOnly(): Promise<number>;
  setReadOnly(callback: AsyncCallback<number>): void;

 /**
  * Convert the Nfc forum type into byte array defined in Nfc forum.
  * @param type Nfc forum type of ndef tag
  * @return Nfc forum type byte array
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getNdefTagTypeString(type: NfcForumType): string;
}

/**
 * MifareClassic Type definition
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
export enum MifareClassicType {
  /** Mifare Type unknown */
  TYPE_UNKNOWN = -1,

  /** Mifare Classic */
  TYPE_CLASSIC = 0,

  /** Mifare Plus */
  TYPE_PLUS = 1,

  /** Mifare Pro */
  TYPE_PRO = 2,
}

/**
 * MifareClassic Tag size.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
export enum MifareTagSize {
  /** 5 sectors per tag, 4 blocks per sector */
  MC_SIZE_MINI = 320,

  /** 16 sectors per tag, 4 blocks per sector */
  MC_SIZE_1K = 1024,

  /** 32 sectors per tag, 4 blocks per sector */
  MC_SIZE_2K = 2048,

  /** 40 sectors per tag, 4 blocks per sector */
  MC_SIZE_4K = 4096,
}

/**
 * Provides methods for accessing MifareClassic tag.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface MifareClassicTag extends TagSession {
 /**
  * Authenticate a sector with the key.Only successful authentication sector can be operated.
  * @param sectorIndex Index of sector to authenticate
  * @param key key(6-bytes) to authenticate
  * @param isKeyA KeyA flag. true means KeyA, otherwise KeyB
  * @return Result of authenticattion. if return ture, means successful.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  authenticateSector(sectorIndex: number, key: number[], isKeyA: boolean): Promise<boolean>;
  authenticateSector(sectorIndex: number, key: number[], isKeyA: boolean, callback: AsyncCallback<boolean>): void;

 /**
  * Read a block, one block size is 16 bytes.
  * @param blockIndex index of block to read
  * @return the block data
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  readSingleBlock(blockIndex: number): Promise<string>;
  readSingleBlock(blockIndex: number, callback: AsyncCallback<string>): void;

 /**
  * Write a block, one block size is 16 bytes.
  * @param blockIndex index of block to write
  * @param data block data to write
  * @return Error code of write. if return 0, means successful.
  * @since 9
  * @permission ohos.pemission.NFC_TAG
  */
  writeSingleBlock(blockIndex: number, data: string): Promise<number>;
  writeSingleBlock(blockIndex: number, data: string, callback: AsyncCallback<number>): void;

 /**
  * Increment a value block
  * @param blockIndex index of block to increment
  * @param value value to increment, none-negative
  * @return Error code of increment. if return 0, means successful.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  incrementBlock(blockIndex: number, value: number): Promise<number>;
  incrementBlock(blockIndex: number, value: number, callback: AsyncCallback<number>): void;

 /**
  * Decrement a value block
  * @param blockIndex index of block to decrement
  * @param value value to increment, none-negative
  * @return Error code of decrement. if return 0, means successful.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  decrementBlock(blockIndex: number, value: number): Promise<number>;
  decrementBlock(blockIndex: number, value: number, callback: AsyncCallback<number>): void;

 /**
  * Copy from the value of register to the value block
  * @param blockIndex index of value block to copy to
  * @return if return 0, means successful. otherwise the error code
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  transferToBlock(blockIndex: number): Promise<number>;
  transferToBlock(blockIndex: number, callback: AsyncCallback<number>): void;

 /**
  * Copy from the value block to the register
  * @param blockIndex index of value block to copy from
  * @return if return 0, means successful. otherwise the error code
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  restoreFromBlock(blockIndex: number): Promise<number>;
  restoreFromBlock(blockIndex: number, callback: AsyncCallback<number>): void;

 /**
  * Get the number of sectors in mifareclassic tag
  * @return the number of sectors.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getSectorCount(): number;

 /**
  * Get the number of blocks in the sector.
  * @param sectorIndex index of sector
  * @return the number of blocks.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getBlockCountInSector(sectorIndex: number): number;

 /**
  * Get the type of the MifareClassic tag.
  * @return type of MifareClassic tag.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getType(): MifareClassicType;

 /**
  * Get size of the tag in bytes, see {@code MifareTagSize}.
  * @return size of the tag
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getTagSize(): number;

 /**
  * check if if tag is emulated
  * @return return true if tag is emulated, otherwise return false.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  isEmulatedTag(): boolean;

 /**
  * Get the first block of the specific sector.
  * @param sectorIndex index of sector
  * @return index of first block in the sector
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getBlockIndex(sectorIndex: number): number;

 /**
  * Get the sector index, that the sector contains the specific block.
  * @param blockIndex index of block
  * @return the sector index
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getSectorIndex(blockIndex: number): number;
}

/**
 * MifareUltralight Type definition
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
 export enum MifareUltralightType {
  /** Mifare Type unknown */
  TYPE_UNKOWN = -1,

  /** Mifare Ultralight */
  TYPE_ULTRALIGHT = 1,

  /** Mifare UltralightC */
  TYPE_ULTRALIGHT_C = 2
}

/**
 * Provides methods for accessing MifareUltralight tag.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface MifareUltralightTag extends TagSession {
 /**
  * Read 4 pages, total is 16 bytes. page size is 4bytes.
  * @param pageIndex index of page to read
  * @return 4 pages data
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  readMultiplePages(pageIndex: number): Promise<string>;
  readMultiplePages(pageIndex: number, callback: AsyncCallback<string>): void;

 /**
  * Write a page, total 4 bytes.
  * @param pageIndex index of page to write
  * @param data page data to write
  * @return Error code of write. if return 0, means successful.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  writeSinglePages(pageIndex: number, data: string): Promise<number>;
  writeSinglePages(pageIndex: number, data: string, callback: AsyncCallback<number>): void;

  /**
  * Get the type of the MifareUltralight tag in bytes.
  * @return type of MifareUltralight tag.
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  getType(): MifareUltralightType;
}

/**
 * Provides methods for accessing NdefFormatable tag.
 *
 * @since 9
 * @syscap SystemCapability.Communication.NFC.Core
 */
export interface NdefFormatableTag extends TagSession {
 /**
  * Format a tag as NDEF tag, then write Ndef message into the Ndef Tag
  * @param message Ndef message to write while format successful. it can be null, then only format the tag.
  * @return if return 0, means successful. otherwise the error code
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  format(message: NdefMessage): Promise<number>;
  format(message: NdefMessage, callback: AsyncCallback<number>): void;

 /**
  * Format a tag as NDEF tag, then write Ndef message into the Ndef Tag, then set the tag readonly
  * @param message Ndef message to write while format successful. it can be null, then only format the tag.
  * @return if return 0, means successful. otherwise the error code
  * @since 9
  * @permission ohos.permission.NFC_TAG
  */
  formatReadOnly(message: NdefMessage): Promise<number>;
  formatReadOnly(message: NdefMessage, callback: AsyncCallback<number>): void;
}