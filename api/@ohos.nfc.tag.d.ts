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
 * @file Standard NFC Tags
 * @kit ConnectivityKit
 */

import type { NfcATag as _NfcATag, NfcBTag as _NfcBTag, NfcFTag as _NfcFTag, NfcVTag as _NfcVTag } from './tag/nfctech';
import {
  IsoDepTag as _IsoDepTag,
  NdefTag as _NdefTag,
  MifareClassicTag as _MifareClassicTag,
  MifareUltralightTag as _MifareUltralightTag,
  NdefFormatableTag as _NdefFormatableTag,
  BarcodeTag as _BarcodeTag
} from './tag/nfctech';
import { NdefMessage as _NdefMessage } from './tag/nfctech';
import { TagSession as _TagSession } from './tag/tagSession';
import type { PacMap } from './ability/dataAbilityHelper';
import type rpc from './@ohos.rpc';
import type { AsyncCallback, Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import type { ElementName } from './bundleManager/ElementName';

/**
 * The **tag** module provides APIs for operating and managing NFC tags. The following tag read modes are available:
 *
 * Background mode: The device reads the tag by using NFC without starting any application, and then searches for
 * applications based on the tag type. If only one application is matched, the card reading page of that application
 * will be started. If multiple applications are matched, an application selector will be started, asking the user to
 * select an application. Background mode does not involve tag-related APIs. For details, see
 * [nfc-tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md#accessing-an-nfc-tag-without-starting-an-application).
 *
 * Foreground mode: A foreground application has priority to read the NFC tag discovered.
 *
 * > **NOTE**
 * >
 * > 2. Since API version 26.0.0, it is more accurate to determine whether a device supports NFC by calling both
 * > [canIUse("SystemCapability.Communication.NFC.Tag")](docroot://reference/common/init.md#caniuse) and
 * > [nfcController.isNfcSupported]{@link @ohos.nfc.controller:nfcController.isNfcSupported}. If the device does not
 * > support NFC, the application stability may be affected. For details, see
 * > [NFC Tag Read/Write Development](docroot://connectivity/nfc/nfc-tag-access-guide.md).
 * >
 * > 3. If an error is reported while importing the tag module editor, the capabilities of a specific device model may
 * > exceed the capability set defined for the default device. To use these capabilities, configure a custom SysCap by
 * > following instructions in
 * > [SystemCapability](https://developer.huawei.com/consumer/en/doc/harmonyos-references/syscap).
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace tag {
  /**
   * NFC-A (ISO 14443-3A).
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NFC_A = 1;

  /**
   * Indicates an NFC-A tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_A: int;

  /**
   * NFC-B (ISO 14443-3B).
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NFC_B = 2;

  /**
   * Indicates an NFC-B tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_B: int;

  /**
   * ISO-DEP (ISO 14443-4).
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const ISO_DEP = 3;

  /**
   * Indicates an ISO_DEP tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const ISO_DEP: int;

  /**
   * NFC-F (JIS 6319-4).
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NFC_F = 4;

  /**
   * Indicates an NFC-F tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_F: int;

  /**
   * NFC-V (ISO 15693).
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NFC_V = 5;

  /**
   * Indicates an NFC-V tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_V: int;

  /**
   * NDEF.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NDEF = 6;

  /**
   * Indicates an NDEF tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NDEF: int;

  /**
   * NDEF formattable.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  const NDEF_FORMATABLE = 7;

  /**
   * Indicates an NDEF Formatable tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NDEF_FORMATABLE: int;

  /**
   * MIFARE Classic.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const MIFARE_CLASSIC = 8;

  /**
   * Indicates an MIFARE CLASSIC tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const MIFARE_CLASSIC: int;

  /**
   * MIFARE Ultralight.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const MIFARE_ULTRALIGHT = 9;

  /**
   * Indicates an MIFARE ULTRALIGHT tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const MIFARE_ULTRALIGHT: int;

  /**
   * Enumerates the TNF types. For details, see *NFCForum-TS-NDEF_1.0*.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum TnfType {
    /**
     * Empty.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TNF_EMPTY = 0x0,

    /**
     * NFC Forum Well Known Type [NFC RTD].
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TNF_WELL_KNOWN = 0x1,

    /**
     * Media-type as defined in RFC 2046 [RFC 2046].
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TNF_MEDIA = 0x2,

    /**
     * Absolute URI as defined in RFC 3986 [RFC 3986].
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TNF_ABSOLUTE_URI = 0x3,

    /**
     * NFC Forum external type [NFC RTD].
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TNF_EXT_APP = 0x4,

    /**
     * Unknown.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TNF_UNKNOWN = 0x5,

    /**
     * Unchanged (see section 2.3.3 in *NFCForum-TS-NDEF_1.0*).
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TNF_UNCHANGED = 0x6
  }

  /**
   * Enumerates the NFC Forum tag types.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum NfcForumType {
    /**
     * NFC Forum tag type 1.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NFC_FORUM_TYPE_1 = 1,

    /**
     * NFC Forum tag type 2.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NFC_FORUM_TYPE_2 = 2,

    /**
     * NFC Forum tag type 3.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NFC_FORUM_TYPE_3 = 3,

    /**
     * NFC Forum tag type 4.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NFC_FORUM_TYPE_4 = 4,

    /**
     * MIFARE Classic.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MIFARE_CLASSIC = 101
  }

  /**
   * NDEF record of the text type. For details, see **NFCForum-TS-NDEF_1.0**.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  const RTD_TEXT: int[];

  /**
   * NDEF record of the URI type. For details, see **NFCForum-TS-NDEF_1.0**.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  const RTD_URI: int[];

  /**
   * Enumerates the MIFARE Classic tag types.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum MifareClassicType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_UNKNOWN = 0,

    /**
     * MIFARE Classic.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_CLASSIC = 1,

    /**
     * MIFARE Plus.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_PLUS = 2,

    /**
     * MIFARE Pro.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_PRO = 3
  }

  /**
   * Enumerates the sizes of a MIFARE Classic tag.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum MifareClassicSize {
    /**
     * Each tag has 5 sectors, and each sector has 4 blocks.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MC_SIZE_MINI = 320,

    /**
     * Each tag has 16 sectors, and each sector has 4 blocks.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MC_SIZE_1K = 1024,

    /**
     * Each tag has 32 sectors, and each sector has 4 blocks.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MC_SIZE_2K = 2048,

    /**
     * Each tag has 40 sectors, and each sector has 4 blocks.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MC_SIZE_4K = 4096
  }

  /**
   * Enumerates the MIFARE Ultralight tag types.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum MifareUltralightType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_UNKNOWN = 0,

    /**
     * MIFARE Ultralight.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_ULTRALIGHT = 1,

    /**
     * MIFARE Ultralight C.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_ULTRALIGHT_C = 2
  }

  /**
   * Obtains an **NfcATag** object, which allows access to the tags that use the NFC-A technology.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tag.getNfcA]{@link tag.getNfcA} instead.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { NfcATag } **NfcATag** object obtained.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcA
   */
  function getNfcATag(tagInfo: TagInfo): NfcATag;

  /**
   * Obtains an **NfcATag** object, which allows access to the tags that use the NFC-A technology.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { NfcATag } **NfcATag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getNfcA(tagInfo: TagInfo): NfcATag;

  /**
   * Obtains an **NfcBTag** object, which allows access to the tags that use the NFC-B technology.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tag.getNfcB]{@link tag.getNfcB} instead.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { NfcBTag } **NfcBTag** object obtained.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcB
   */
  function getNfcBTag(tagInfo: TagInfo): NfcBTag;

  /**
   * Obtains an **NfcBTag** object, which allows access to the tags that use the NFC-B technology.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { NfcBTag } **NfcBTag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getNfcB(tagInfo: TagInfo): NfcBTag;

  /**
   * Obtains an **NfcFTag** object, which allows access to the tags that use the NFC-F technology.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tag.getNfcF]{@link tag.getNfcF} instead.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { NfcFTag } **NfcFTag** object obtained.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcF
   */
  function getNfcFTag(tagInfo: TagInfo): NfcFTag;

  /**
   * Obtains an **NfcFTag** object, which allows access to the tags that use the NFC-F technology.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { NfcFTag } **NfcFTag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getNfcF(tagInfo: TagInfo): NfcFTag;

  /**
   * Obtains an **NfcVTag** object, which allows access to the tags that use the NFC-V technology.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tag.getNfcV]{@link tag.getNfcV} instead.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { NfcVTag } **NfcVTag** object obtained.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcV
   */
  function getNfcVTag(tagInfo: TagInfo): NfcVTag;

  /**
   * Obtains an **NfcVTag** object, which allows access to the tags that use the NFC-V technology.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { NfcVTag } **NfcVTag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getNfcV(tagInfo: TagInfo): NfcVTag;

  /**
   * Obtains an **IsoDepTag** object, which allows access to the tags that use the IsoDep technology.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { IsoDepTag } **IsoDepTag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getIsoDep(tagInfo: TagInfo): IsoDepTag;

  /**
   * Obtains an **NdefTag** object, which allows access to NFC Data Exchange Format (NDEF) tags.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { NdefTag } **NdefTag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed.  Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getNdef(tagInfo: TagInfo): NdefTag;

  /**
   * Obtains a **MifareClassicTag** object, which allows access to the tags that use MIFARE Classic.
   *
   * @param { TagInfo } tagInfo - Tag information, including the tag technology type and related parameters, obtained
   *     from [tag.getTagInfo(want: Want)]{@link tag.getTagInfo}.
   * @returns { MifareClassicTag } **MifareClassicTag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getMifareClassic(tagInfo: TagInfo): MifareClassicTag;

  /**
   * Obtains a **MifareUltralightTag** object, which allows access to the tags that use MIFARE Ultralight.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { MifareUltralightTag } **MifareUltralightTag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getMifareUltralight(tagInfo: TagInfo): MifareUltralightTag;

  /**
   * Obtains an **NdefFormatableTag** object, which allows access to the tags that are NDEF formattable.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NdefFormatableTag } **NdefFormatableTag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getNdefFormatable(tagInfo: TagInfo): NdefFormatableTag;

  /**
   * Obtains **TagInfo** from **Want**, which is initialized by the NFC service and contains the attributes required by
   * **TagInfo**.
   *
   * @param { Want } want - Data obtained from the parameters of the **onCreate** entry function when an ability is
   *     dispatched.
   * @returns { TagInfo } **TagInfo** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getTagInfo(want: Want): TagInfo;

  /**
   * Registers a listener for the NFC tag read event so that the tag can be preferentially dispatched to a foreground
   * application. You can set the supported NFC tag technologies in **discTech**. The [TagInfo]{@link tag.TagInfo} read
   * is returned through a callback. This API can be called only by an application running in the foreground. It must be
   * used with [tag.unregisterForegroundDispatch]{@link tag.unregisterForegroundDispatch} in pairs. The registered
   * callback must be unregistered before the tag reading page exits the foreground or is destroyed. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - Information about the tag reading page of the application. It cannot be empty
   *     and must contain at least **bundleName** and **abilityName**.
   * @param { int[] } discTech - NFC tag technologies supported by the foreground application. It cannot be empty. At
   *     least one NFC tag technology must be specified. Each number indicates the constant value of an NFC tag
   *     technology. The tag technologies are polled based on the specified value, which contains one or more of
   *     [NFC_A]{@link NFC_A},
   *     [NFC_B]{@link NFC_B},
   *     [NFC_F]{@link NFC_F}, and
   *     [NFC_V]{@link NFC_V}, only.
   * @param { AsyncCallback<TagInfo> } callback - Callback used to return the tag information read. It cannot be empty.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service. [since 12]
   * @throws { BusinessError } 3100202 - The element state is invalid. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function registerForegroundDispatch(elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>): void;

  /**
   * Unregisters the listener for the NFC tag read event. If the listener is unregistered, the NFC tag discovered will
   * not be dispatched to foreground applications. The registered callback must be unregistered before the tag reading
   * page exits the foreground or is destroyed.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - Information about the tag reading page of the application. It cannot be empty
   *     and must contain at least **bundleName** and **abilityName**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function unregisterForegroundDispatch(elementName: ElementName): void;

  /**
   * Subscribes to the NFC tag read event to implement dispatch of the tag to a foreground application preferentially.
   * The device enters the reader mode and disables card emulation. You can set the supported NFC tag technologies in
   * **discTech**. The [TagInfo]{@link tag.TagInfo} read is returned through a callback. This API must be used with
   * [tag.off]{@link tag.off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>)} in pairs.
   * If the NFC reader mode is enabled by **tag.on**,
   * [tag.off]{@link tag.off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>)} must be
   * called when the application page exits the foreground or is destroyed. This API uses an asynchronous callback to
   * return the result. This API and
   * [tag.on]{@link tag.on( type: 'readerModeWithInterval', elementName: ElementName, discTech: int[], callback: Callback<TagInfo>, interval: int )}
   * are mutually exclusive.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerMode' } type - Event type, which has a fixed value of **readerMode**.
   * @param { ElementName } elementName - Information about the tag reading page of the application. It cannot be empty
   *     and must contain at least **bundleName** and **abilityName**.
   * @param { int[] } discTech - NFC tag technologies supported by the foreground application. It cannot be empty. At
   *     least one NFC tag technology must be specified. Each number indicates the constant value of an NFC tag
   *     technology. The tag technologies are polled based on the specified value, which contains one or more of
   *     [NFC_A]{@link NFC_A},
   *     [NFC_B]{@link NFC_B},
   *     [NFC_F]{@link NFC_F},
   *     [NFC_V]{@link NFC_V}, and
   *     [SKIP_NDEF]{@link SKIP_NDEF} only.
   * @param { AsyncCallback<TagInfo> } callback - Callback used to return the tag information read. It cannot be empty.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100202 - The element state is invalid.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  function on(type: 'readerMode', elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>): void;

  /**
   * Set reader mode enabled when the specific application is foreground.
   * Dispatches to this application only if a tag discovered.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { int[] } discTech - The technologies list to set for discovering.
   *     From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}.
   * @param { AsyncCallback<TagInfo> } callback - The callback to dispatched the TagInfo object for application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100202 - The element state is invalid.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 23 static
   */
  function onReaderMode(elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>): void;

  /**
   * Unsubscribes from the NFC tag card read event. The device exits the reader mode and resumes card emulation. If the
   * NFC reader mode is enabled by
   * [tag.on]{@link tag.on(type: 'readerMode', elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>)},
   * this API must be used when the application page exits the foreground or is destroyed.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerMode' } type - Event type, which has a fixed value of **readerMode**.
   * @param { ElementName } elementName - Information about the tag reading page of the application. It cannot be empty
   *     and must contain at least **bundleName** and **abilityName**.
   * @param { AsyncCallback<TagInfo> } [callback] - Callback to unregister. If this parameter is not set, this API
   *     unregisters the tag reading callback for the specified **type**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100203 - The off() API can be called only when the on() has been called.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  function off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>): void;

  /**
   * Disable foreground reader mode settings explicitly.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { AsyncCallback<TagInfo> } [callback] - The callback to dispatched the TagInfo object for application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100203 - The off() API can be called only when the on() has been called.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 23 static
   */
  function offReaderMode(elementName: ElementName, callback?: AsyncCallback<TagInfo>): void;

  /**
   * Subscribes to the NFC tag read event so that the tag can be preferentially dispatched to a foreground application.
   * You can also set the interval for detecting whether a card is present. This API uses an asynchronous callback to
   * return the result.
   *
   *
   * - The device enters the reader mode and disables card emulation.
   * - You can set the supported NFC tag technologies in **discTech** and set the interval for detecting whether a card
   * is present. The callback returns [TagInfo]{@link tag.TagInfo} read.
   * - This API must be used with
   * [tag.off]{@link tag.off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>)} in
   * pairs. If the NFC reader mode is enabled by **tag.on**,
   * [tag.off]{@link tag.off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>)}
   * must be called when the application page exits the foreground or is destroyed.
   * - This API and
   * [tag.on]{@link tag.on(type: 'readerMode', elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>)}
   * are mutually exclusive.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerModeWithInterval' } type - Event type, which has a fixed value of **readerModeWithInterval**.
   * @param { ElementName } elementName - Information about the tag reading page of the application. It must contain at
   *     least **bundleName** and **abilityName**.
   * @param { int[] } discTech - NFC tag technologies supported by the foreground application. At least one NFC tag
   *     technology must be specified. Each number indicates the constant value of an NFC tag technology. The tag
   *     technologies are polled based on the specified value, which contains one or more of
   *     [NFC_A]{@link NFC_A},
   *     [NFC_B]{@link NFC_B},
   *     [NFC_F]{@link NFC_F},
   *     [NFC_V]{@link NFC_V}, and
   *     [SKIP_NDEF]{@link SKIP_NDEF} only.
   * @param { Callback<TagInfo> } callback - Callback used to listen for the card reader mode, which returns the tag
   *     information read.
   * @param { int } interval - Interval for checking whether a card is present, in milliseconds. The recommended value
   *     range is 100 to 2000. If a negative value is passed, the value does not take effect. The system uses the
   *     default interval (150 ms).
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100202 - The element state is invalid.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 23 dynamic
   */
  function on(
    type: 'readerModeWithInterval',
    elementName: ElementName,
    discTech: int[],
    callback: Callback<TagInfo>,
    interval: int
  ): void;

  /**
   * Set reader mode enabled when the specific application is on foreground and set card presence interval.
   * Tag infomation will be dispatched to the application only if a NFC tag is discovered.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { int[] } discTech - The technologies list to set for discovering.
   *     From {@link NFC_A} to {@link MIFARE_ULTRALIGHT}.
   * @param { Callback<TagInfo> } callback - The callback to dispatched the TagInfo object for application.
   * @param { int } interval - The interval for reader presence check.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100202 - The element state is invalid.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 23 static
   */
  function onReaderModeWithInterval(
    elementName: ElementName,
    discTech: int[],
    callback: Callback<TagInfo>,
    interval: int
  ): void;

  /**
   * Unsubscribes from the NFC tag card read event. The device exits the reader mode and resumes card emulation. If the
   * NFC reader mode is enabled by
   * [tag.on]{@link tag.on( type: 'readerModeWithInterval', elementName: ElementName, discTech: int[], callback: Callback<TagInfo>, interval: int )},
   * this API must be used when the application page exits the foreground or is destroyed. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerModeWithInterval' } type - Event type, which has a fixed value of **readerModeWithInterval**.
   * @param { ElementName } elementName - Information about the tag reading page of the application. It must contain at
   *     least **bundleName** and **abilityName**.
   * @param { Callback<TagInfo> } [callback] - Callback to unregister. If this parameter is not set, this API
   *     unregisters the tag reading callback for the specified **type**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100203 - The off() API can be called only when the on() has been called.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 23 dynamic
   */
  function off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>): void;

  /**
   * Disable foreground reader mode settings explicitly.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - The element name of application, must include the bundleName and abilityName.
   * @param { Callback<TagInfo> } [callback] - The callback to dispatched the TagInfo object for application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100203 - The off() API can be called only when the on() has been called.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 23 static
   */
  function offReaderModeWithInterval(elementName: ElementName, callback?: Callback<TagInfo>): void;

  /**
   * Before a card with tags is read or written, **[TagInfo]{@link tag.TagInfo}** must be obtained to determine the tag
   * technologies supported by the card. In this way, the application can invoke the correct API to communicate with the
   * card.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export interface TagInfo {
    /**
     * Tag unique identifier (UID), which consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    uid: int[];

    /**
     * Supported tag technologies. Each number is a constant indicating the supported technology.
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    technology: int[];

    /**
     * Extended attribute value of the tag technology.
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    extrasData: PacMap[];

    /**
     * ID allocated when the tag is discovered.
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    tagRfDiscId: int;

    /**
     * Remote object of the NFC service process used for interface communication between the client and the service.
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    remoteTagService: rpc.RemoteObject;

    /**
     * Supported profiles.
     *
     * Note: This parameter is supported since API version 7 and deprecated since API version 9. Use
     * **[tag.TagInfo#technology]{@link tag.TagInfo}** instead.
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.tag/tag.TagInfo#technology
     */
    supportedProfiles: number[];
  }

  /**
   * Defines an NDEF record. For details, see *NFCForum-TS-NDEF_1.0*.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface NdefRecord {
    /**
     * Type name field (TNF) of the NDEF record.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    tnf: int;

    /**
     * Record type definition (RTD) of the NDEF record. It consists of hexadecimal numbers ranging from **0x00** to
     * **0xFF**.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    rtdType: int[];

    /**
     * NDEF record ID, which consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    id: int[];

    /**
     * NDEF payload, which consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    payload: int[];
  }

  /**
   * Provides methods for accessing NDEF tag.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  namespace ndef {
    /**
     * Creates an NDEF record based on the specified URI.
     *
     * @param { string } uri - Data to write to the NDEF record.
     * @returns { NdefRecord } NDEF record created. For details, see *NFCForum-TS-NDEF_1.0*.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    function makeUriRecord(uri: string): NdefRecord;

    /**
     * Creates an NDEF record based on the specified text data and language type.
     *
     * @param { string } text - Text to write to the NDEF record. The length must be less than the capacity of the NFC
     *     tag to be written.
     * @param { string } locale - Locale of the text in the record. The length must be less than the capacity of the NFC
     *     tag to be written.
     * @returns { NdefRecord } NDEF record created. For details, see *NFCForum-TS-NDEF_1.0*.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    function makeTextRecord(text: string, locale: string): NdefRecord;

    /**
     * Creates an NDEF record based on the specified MIME data and type.
     *
     * @param { string } mimeType - MIME type that complies with RFC rules, for example, **text/plain** or
     *     **image/jpeg**.
     * @param { int[] } mimeData - MIME data, which consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
     * @returns { NdefRecord } NDEF record created. For details, see *NFCForum-TS-NDEF_1.0*.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    function makeMimeRecord(mimeType: string, mimeData: int[]): NdefRecord;

    /**
     * Creates an NDEF record based on application-specific data.
     *
     * @param { string } domainName - Bundle name of the application or domain name of the organization that releases
     *     the applications.
     * @param { string } type - Type of the application data.
     * @param { int[] } externalData - Application data, which consists of hexadecimal numbers ranging from **0x00** to
     *     **0xFF**.
     * @returns { NdefRecord } NDEF record created. For details, see *NFCForum-TS-NDEF_1.0*.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    function makeExternalRecord(domainName: string, type: string, externalData: int[]): NdefRecord;
    /**
     * Creates an NDEF message from raw byte data. The data must comply with the NDEF record format. Otherwise, the NDEF
     * record list contained in the **NdefMessage** object will be empty.
     *
     * @param { int[] } data - Raw byte data, which consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
     *     The data must comply with the NDEF record format.
     * @returns { NdefMessage } NDEF message created. For details, see *NFCForum-TS-NDEF_1.0*.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    function createNdefMessage(data: int[]): NdefMessage;

    /**
     * Creates an NDEF message with raw bytes.
     *
     * @param { int[] } data - The raw bytes to parse NDEF message.
     * @returns { NdefMessage } The instance of NdefMessage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 23 static
     */
    function createNdefMessageByData(data: int[]): NdefMessage;

    /**
     * Creates an NDEF message from the NDEF records list.
     *
     * @param { NdefRecord[] } ndefRecords - NDEF record list used to create the NDEF message. For details, see
     *     *NFCForum-TS-NDEF_1.0*.
     * @returns { NdefMessage } NDEF message created. For details, see *NFCForum-TS-NDEF_1.0*.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    function createNdefMessage(ndefRecords: NdefRecord[]): NdefMessage;

    /**
     * Creates an NDEF message with record list.
     *
     * @param { NdefRecord[] } ndefRecords - The NDEF records to parse NDEF message.
     * @returns { NdefMessage } The instance of NdefMessage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @since 23 static
     */
    function createNdefMessageByRecords(ndefRecords: NdefRecord[]): NdefMessage;

    /**
     * Converts an NDEF message to bytes.
     *
     * @param { NdefMessage } ndefMessage - NDEF message to convert.
     * @returns { int[] } NDEF message in bytes, which consists of hexadecimal numbers ranging from **0x00** to
     *     **0xFF**.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    function messageToBytes(ndefMessage: NdefMessage): int[];

    /**
     * Creates an NDEF record based on the specified application bundle name.
     *
     * @param { string } bundleName - Application bundle name.
     * @returns { NdefRecord } NDEF record created. For details, see *NFCForum-TS-NDEF_1.0*.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    function makeApplicationRecord(bundleName: string): NdefRecord;
  }

  /**
   * Obtains an **NfcATag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export type NfcATag = _NfcATag;

  /**
   * Obtains an **NfcBTag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export type NfcBTag = _NfcBTag;

  /**
   * Obtains an **NfcFTag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export type NfcFTag = _NfcFTag;

  /**
   * Obtains an **NfcVTag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export type NfcVTag = _NfcVTag;

  /**
   * Obtains an **IsoDepTag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type IsoDepTag = _IsoDepTag;

  /**
   * Obtains an **NdefTag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NdefTag = _NdefTag;

  /**
   * Obtains a **MifareClassicTag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type MifareClassicTag = _MifareClassicTag;

  /**
   * Obtains a **MifareUltralightTag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type MifareUltralightTag = _MifareUltralightTag;

  /**
   * Obtains a **NdefFormatableTag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NdefFormatableTag = _NdefFormatableTag;

  /**
   * Obtains an **NdefMessage** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NdefMessage = _NdefMessage;

  /**
   * Obtains a **TagSession** object.
   *
   * <!--no_check-->
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export type TagSession = _TagSession;

  /**
   * BARCODE technology.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 18 dynamic
   */
  const NFC_BARCODE = 10;

  /**
   * Indicates an NfcBarcode tag.
   * The value should be an integer.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_BARCODE: int;

  /**
   * Obtains a **BarcodeTag** object.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type BarcodeTag = _BarcodeTag;

  /**
   * Obtains a **BarcodeTag** object, which allows access to the tags in the BarcodeTag format.
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { BarcodeTag } **BarcodeTag** object obtained.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function getBarcodeTag(tagInfo: TagInfo): BarcodeTag;

  /**
   * Method used to skip the NDEF check.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  const SKIP_NDEF = 11;

  /**
   * Skip NDEF when app is reading a card in the foreground.
   * The value range is all integers.
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  const SKIP_NDEF: int;
}
export default tag;