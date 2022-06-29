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

import { NfcATag, NfcBTag, NfcFTag, NfcVTag } from './tag/nfctech';
import { IsoDepTag, NdefTag, MifareClassicTag, MifareUltralightTag, NdefFormatableTag } from './tag/nfctech';
import { PacMap } from "./ability/dataAbilityHelper";
import rpc from "./@ohos.rpc";
import { AsyncCallback, Callback } from './basic';

/**
 * Provides methods to operate or manage NFC tag.
 *
 * @import import tag from '@ohos.nfc.tag';
 *
 * @since 7
 * @syscap SystemCapability.Communication.NFC.Core
 */
declare namespace tag {
  /** Indicates a NFC-A tag. */
  const NFC_A = 1;

  /** Indicates a NFC-B tag. */
  const NFC_B = 2;

  /** Indicates a ISO-DEP tag. */
  const ISO_DEP = 3;

  /** Indicates a NFC-F tag. */
  const NFC_F = 4;

  /** Indicates a NFC-V tag. */
  const NFC_V = 5;

  /** Indicates a NDEF tag. */
  const NDEF = 6;

  /** Indicates a MifareClassic tag. */
  const MIFARE_CLASSIC = 8;

  /** Indicates a MifareUltralight tag. */
  const MIFARE_ULTRALIGHT = 9;

  /**
   * Indicates a NdefFormatable tag.
   *
   * @since 9
   */
  const NDEF_FORMATABLE = 10;

  /**
   * Obtains an {@link NfcATag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-A technology, an {@link NfcATag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  function getNfcATag(tagInfo: TagInfo): NfcATag

  /**
   * Obtains an {@link NfcBTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-B technology, an {@link NfcBTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  function getNfcBTag(tagInfo: TagInfo): NfcBTag

  /**
   * Obtains an {@link NfcFTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-F technology, an {@link NfcFTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  function getNfcFTag(tagInfo: TagInfo): NfcFTag

  /**
   * Obtains an {@link NfcVTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NFC-V technology, an {@link NfcVTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 7
   */
  function getNfcVTag(tagInfo: TagInfo): NfcVTag

  /**
   * Obtains an {@link IsoDepTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the IsoDep technology, an {@link IsoDepTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getIsoDepTag(tagInfo: TagInfo): IsoDepTag

  /**
   * Obtains an {@link NdefTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NDEF technology, an {@link NdefTag} object
   * will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getNdefTag(tagInfo: TagInfo): NdefTag

  /**
   * Obtains an {@link MifareClassicTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the MifareClassic technology,
   * an {@link MifareClassicTag} object will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getMifareClassicTag(tagInfo: TagInfo): MifareClassicTag

   /**
   * Obtains an {@link MifareUltralightTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the MifareUltralight technology,
   * an {@link MifareUltralightTag} object will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getMifareUltralightTag(tagInfo: TagInfo): MifareUltralightTag

  /**
   * Obtains an {@link NdefFormatableTag} object based on the tag information.
   *
   * <p>During tag reading, if the tag supports the NdefFormatable technology,
   * an {@link NdefFormatableTag} object will be created based on the tag information.
   *
   * @param tagInfo Indicates the tag information.
   * @permission ohos.permission.NFC_TAG
   *
   * @since 9
   */
  function getNdefFormatableTag(tagInfo: TagInfo): NdefFormatableTag

  /**
   * Provides tag information.
   *
   * <p>This class provides the technology a tag supports, for example, NFC-A. Applications can create
   * different tags based on the supported technology.
   *
   * @since 7
   * @syscap SystemCapability.Communication.NFC.Core
   * @permission ohos.permission.NFC_TAG
   */
  export interface TagInfo {
   /**
    * The uid of this tag, it.
    *
    * @since 9
    */
    uid: string;

   /**
    * The supported technology list of this tag.
    *
    * @since 9
    */
    technology: number[];

   /**
    * The extra data for each technology of this tag.
    *
    * @since 9
    * @systemapi hide for inner use.
    */
    extrasData: PacMap[];

   /**
    * The the RF discovery id of this tag.
    *
    * @since 9
    * @systemapi hide for inner use.
    */
    tagRfDiscId: number;

   /**
    * The extra data for the technology of this tag.
    *
    * @since 9
    * @systemapi hide for inner use.
    */
    remoteTagService: rpc.RemoteObject;

   /**
    * The supported technology list of this tag.
    *
    * @since 7
    * @deprecated since 9
    */
    supportedProfiles: number[];
  }
}
export default tag;