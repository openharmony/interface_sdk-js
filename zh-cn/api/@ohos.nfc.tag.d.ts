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
 * @file 标准NFC-Tag
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
 * 本模块主要用于操作及管理NFC Tag，提供后台读卡和前台应用优先分发两种读卡模式。
 * 后台读卡是指不需要打开应用程序，电子设备通过NFC读取标签卡片后，根据标签卡片的类型匹配到一个或多个应用程序。如果仅匹配到一个，则直接拉起应用程序的读卡页面；如果是多个则弹出应用选择器，让用户选择指定的读卡应用。后台读卡不涉及tag相
 * 关接口，示例参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md#后台读取标签)。
 * 前台读卡是指提前打开应用程序，并进入对应的NFC读卡页面后读卡，只会把读到的标签卡片信息分发给前台应用程序。
 * 
 * > **说明：**
 * >
 * > 2. 从API版本26.0.0开始请使用[canIUse("SystemCapability.Communication.NFC.Tag")](docroot://reference/common/init.md#caniuse)
 * > && [nfcController.isNfcSupported]{@link @ohos.nfc.controller:nfcController.isNfcSupported}共同判断设备是否支持NFC能力更加准确，否则可能导
 * > 致应用运行稳定性问题，参考[nfc-tag开发指南](docroot://connectivity/nfc/nfc-tag-access-guide.md)。
 * >
 * > 3. 导入tag模块编辑器报错，在某个具体设备型号上能力可能超出工程默认设备定义的能力集范围，如需要使用此部分能力需额外配置自定义syscap，参考
 * > [syscap开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap)。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace tag {
  /**
   * NFC-A (ISO 14443-3A)技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NFC_A = 1;

  /**
   * NFC-A标签。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_A: int;

  /**
   * NFC-B (ISO 14443-3B)技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NFC_B = 2;

  /**
   * NFC-B标签。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_B: int;

  /**
   * ISO-DEP (ISO 14443-4)技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const ISO_DEP = 3;

  /**
   * ISO_DEP标签。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const ISO_DEP: int;

  /**
   * NFC-F (JIS 6319-4)技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NFC_F = 4;

  /**
   * NFC-F标签。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_F: int;

  /**
   * NFC-V (ISO 15693)技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NFC_V = 5;

  /**
   * NFC-V标签。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_V: int;

  /**
   * NDEF技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const NDEF = 6;

  /**
   * NDEF标签。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NDEF: int;

  /**
   * 可以格式化的NDEF技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  const NDEF_FORMATABLE = 7;

  /**
   * NDEF Formatable标记。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NDEF_FORMATABLE: int;

  /**
   * MIFARE Classic技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const MIFARE_CLASSIC = 8;

  /**
   * MIFARE经典标签。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const MIFARE_CLASSIC: int;

  /**
   * MIFARE Ultralight技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  const MIFARE_ULTRALIGHT = 9;

  /**
   * MIFARE ULTRALIGHT标签。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const MIFARE_ULTRALIGHT: int;

  /**
   * NDEF Record的TNF(Type Name Field)类型值，参考NDEF标签技术规范《NFCForum-TS-NDEF_1.0》的定义细节。
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
   * NFC Forum标准里面Tag类型的定义。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum NfcForumType {
    /**
     * NFC论坛类型1。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NFC_FORUM_TYPE_1 = 1,

    /**
     * NFC论坛类型2。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NFC_FORUM_TYPE_2 = 2,

    /**
     * NFC论坛类型3。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NFC_FORUM_TYPE_3 = 3,

    /**
     * NFC论坛类型4。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NFC_FORUM_TYPE_4 = 4,

    /**
     * MIFARE Classic类型。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MIFARE_CLASSIC = 101
  }

  /**
   * 文本类型的NDEF Record，参考NDEF标签技术规范《NFCForum-TS-NDEF_1.0》的定义细节。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  const RTD_TEXT: int[];

  /**
   * URI类型的NDEF Record，参考NDEF标签技术规范《NFCForum-TS-NDEF_1.0》的定义细节。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  const RTD_URI: int[];

  /**
   * MIFARE Classic标签类型的定义。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum MifareClassicType {
    /**
     * 未知的MIFARE类型。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_UNKNOWN = 0,

    /**
     * MIFARE Classic类型。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_CLASSIC = 1,

    /**
     * MIFARE Plus类型。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_PLUS = 2,

    /**
     * MIFARE Pro类型。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_PRO = 3
  }

  /**
   * MIFARE Classic标签存储大小的定义。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum MifareClassicSize {
    /**
     * 每个标签5个扇区，每个扇区4个块。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MC_SIZE_MINI = 320,

    /**
     * 每个标签16个扇区，每个扇区4个块。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MC_SIZE_1K = 1024,

    /**
     * 每个标签32个扇区，每个扇区4个块。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MC_SIZE_2K = 2048,

    /**
     * 每个标签40个扇区，每个扇区4个块。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    MC_SIZE_4K = 4096
  }

  /**
   * MIFARE Ultralight标签类型的定义。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum MifareUltralightType {
    /**
     * 未知的MIFARE类型。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_UNKNOWN = 0,

    /**
     * MIFARE Ultralight类型。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_ULTRALIGHT = 1,

    /**
     * MIFARE UltralightC 类型。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_ULTRALIGHT_C = 2
  }

  /**
   * 获取NFC A类型Tag对象，通过该对象可访问NfcA技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { NfcATag } NFC A类型Tag对象。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcA
   */
  function getNfcATag(tagInfo: TagInfo): NfcATag;

  /**
   * 获取NFC A类型Tag对象，通过该对象可访问NfcA技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { NfcATag } NFC A类型Tag对象。
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
   * 获取NFC B类型Tag对象，通过该对象可访问NfcB技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { NfcBTag } NFC B类型Tag对象。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcB
   */
  function getNfcBTag(tagInfo: TagInfo): NfcBTag;

  /**
   * 获取NFC B类型Tag对象，通过该对象可访问NfcB技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { NfcBTag } NFC B类型Tag对象。
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
   * 获取NFC F类型Tag对象，通过该对象可访问NfcF技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { NfcFTag } NFC F类型Tag对象。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcF
   */
  function getNfcFTag(tagInfo: TagInfo): NfcFTag;

  /**
   * 获取NFC F类型Tag对象，通过该对象可访问NfcF技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { NfcFTag } NFC F类型Tag对象。
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
   * 获取NFC V类型Tag对象，通过该对象可访问NfcV技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { NfcVTag } NFC V类型Tag对象。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getNfcV
   */
  function getNfcVTag(tagInfo: TagInfo): NfcVTag;

  /**
   * 获取NFC V类型Tag对象，通过该对象可访问NfcV技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { NfcVTag } NFC V类型Tag对象。
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
   * 获取IsoDep类型Tag对象，通过该对象可访问支持IsoDep技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { IsoDepTag } IsoDep类型Tag对象，通过该对象访问IsoDep类型的相关接口。
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
   * 获取NDEF类型Tag对象，通过该对象可访问支持NDEF技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { NdefTag } NDEF类型Tag对象，通过该对象访问NDEF类型的相关接口。
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
   * 获取MIFARE Classic类型Tag对象，通过该对象访问支持MIFARE Classic技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - 包含Tag技术类型和相关参数，从[tag.getTagInfo(want: Want)]{@link tag.getTagInfo}获取。
   * @returns { MifareClassicTag } MIFARE Classic类型Tag对象，通过该对象访问MIFARE Classic类型的相关接口。
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
   * 获取MIFARE Ultralight类型Tag对象，通过该对象可访问支持MIFARE Ultralight技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { MifareUltralightTag } MIFARE Ultralight类型Tag对象，通过该对象访问MIFARE Ultralight类型的相关接口。
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
   * 获取NDEF Formatable类型Tag对象，通过该对象可访问支持NDEF Formatable技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { NdefFormatableTag } NDEF Formatable类型Tag对象，通过该对象访问NDEF Formatable类型的相关接口。
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
   * 从Want中获取TagInfo，Want是被NFC服务初始化，包含了TagInfo所需的属性值。
   *
   * @param { Want } want - 分发Ability时，在系统onCreate入口函数的参数中获取。
   * @returns { TagInfo } TagInfo对象，用于获取不同技术类型的Tag对象。
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
   * 注册对NFC Tag读卡事件的监听，实现前台应用优先分发的目的。通过discTech设置支持的读卡技术类型，通过callback方式获取读取到Tag的[TagInfo]{@link tag.TagInfo}信息。应用必须在前台才能
   * 调用。需要与取消监听接口[tag.unregisterForegroundDispatch]{@link tag.unregisterForegroundDispatch}成对使用。如果已注册事件监听，需要在页面退出前台或页面销毁
   * 前调用取消注册。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - 所属应用读卡的页面信息（至少包含bundleName、abilityName这两项的赋值），不可以为空。
   * @param { int[] } discTech - 前台应用指定的NFC读卡技术类型，不可以为空，至少指定一种读卡技术类型。每个number值表示所支持技术类型的常量值型，根据number值设置NFC读卡轮询的Tag技术类型（仅包含 
   *     [NFC_A]{@link NFC_A},
   *     [NFC_B]{@link NFC_B},
   *     [NFC_F]{@link NFC_F},
   *     [NFC_V]{@link NFC_V},
   *     [SKIP_NDEF]{@link SKIP_NDEF}）中的一种或多种。
   * @param { AsyncCallback<TagInfo> } callback - 前台读卡监听回调函数，返回读到的Tag信息，不可以为空。
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
   * 取消注册对NFC Tag读卡事件的监听，退出前台应用优先分发。如果已注册事件监听，需要在页面退出前台或页面销毁前调用取消注册。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { ElementName } elementName - 所属应用读卡的页面信息（至少包含bundleName、abilityName这两项的赋值），不可以为空。
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
   * 订阅NFC Tag读卡事件，实现前台应用优先分发。设备会进入读卡器模式，同时关闭卡模拟。通过discTech设置支持的读卡技术类型，通过callback方式获取到Tag的[TagInfo]{@link tag.TagInfo}信
   * 息。需要与取消读卡器模式的
   * [tag.off]{@link tag.off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>)}成对使用，如果已通过
   * on进行设置，需要在页面退出前台或页面销毁时调用
   * [tag.off]{@link tag.off(type: 'readerMode', elementName: ElementName, callback?: AsyncCallback<TagInfo>)}。使用
   * callback异步回调。与注册读卡器模式的
   * [tag.on]{@link tag.on( type: 'readerModeWithInterval', elementName: ElementName, discTech: int[], callback: Callback<TagInfo>, interval: int )}
   * 互斥使用。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerMode' } type - 要注册的回调类型，固定填"readerMode"字符串。
   * @param { ElementName } elementName - 所属应用读卡的页面信息（至少包含bundleName、abilityName这两项的赋值），不可以为空。
   * @param { int[] } discTech - 前台应用指定的NFC读卡技术类型，不可以为空，至少指定一种读卡技术类型。每个number值表示所支持技术类型的常量值型，根据number值设置NFC读卡轮询的Tag技术类型（仅包含
   *     [NFC_A]{@link NFC_A},
   *     [NFC_B]{@link NFC_B},
   *     [NFC_F]{@link NFC_F},
   *     [NFC_V]{@link NFC_V},
   *     [SKIP_NDEF]{@link SKIP_NDEF}）中的一种或多种。
   *     。
   * @param { AsyncCallback<TagInfo> } callback - 读卡器模式监听回调函数，返回读到的Tag信息，不可以为空。
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
   * 取消订阅NFC Tag读卡事件。设备退出读卡模式，并恢复卡模拟。如果已通过
   * [tag.on]{@link tag.on(type: 'readerMode', elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>)}
   * 设置NFC的读卡器模式，需要在页面退出前台或页面销毁时调用off进行取消。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerMode' } type - 要注销的回调类型，固定填"readerMode"字符串。
   * @param { ElementName } elementName - 所属应用读卡的页面信息（至少包含bundleName、abilityName这两项的赋值），不可以为空。
   * @param { AsyncCallback<TagInfo> } [callback] - 前台读卡监听回调函数，返回读到的Tag信息。不填该参数则取消订阅该type对应的读卡回调。
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
   * 订阅NFC Tag读卡事件，实现前台应用优先分发，并支持卡在位检测间隔设置。使用callback异步回调。
   * 
   * - 设备会进入读卡器模式，同时关闭卡模拟。
   * - 通过discTech设置支持的读卡技术类型，通过callback方式获取到Tag的[TagInfo]{@link tag.TagInfo}信息，通过interval设置卡在位检测间隔。
   * - 需要与取消读卡器模式的
   * [tag.off]{@link tag.off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>)}成对使
   * 用，如果已通过on进行设置，需要在页面退出前台或页面销毁时调用
   * [tag.off]{@link tag.off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>)}。
   * - 与注册读卡器模式的
   * [tag.on]{@link tag.on(type: 'readerMode', elementName: ElementName, discTech: int[], callback: AsyncCallback<TagInfo>)}
   * 互斥使用。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerModeWithInterval' } type - 要注册的回调类型，固定填"readerModeWithInterval"字符串。
   * @param { ElementName } elementName - 所属应用读卡的页面信息（至少包含bundleName、abilityName这两项的赋值）。
   * @param { int[] } discTech - 前台应用指定的NFC读卡技术类型，至少指定一种读卡技术类型。每个number值表示所支持技术类型的常量值型，根据number值设置NFC读卡轮询的Tag技术类型（仅包含
   *     [NFC_A]{@link NFC_A},
   *     [NFC_B]{@link NFC_B},
   *     [NFC_F]{@link NFC_F},
   *     [NFC_V]{@link NFC_V},
   *     [SKIP_NDEF]{@link SKIP_NDEF}）中的一种或多种。
   *     。
   * @param { Callback<TagInfo> } callback - 读卡器模式监听回调函数，返回读到的Tag信息。
   * @param { int } interval - 设置卡在位检测间隔，单位为ms。推荐范围100-2000，若传入负值则不生效，系统会使用默认卡在位间隔（150ms）。
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
   * 取消订阅NFC Tag读卡事件。设备退出读卡模式，并恢复卡模拟。如果已通过
   * [tag.on]{@link tag.on( type: 'readerModeWithInterval', elementName: ElementName, discTech: int[], callback: Callback<TagInfo>, interval: int )}
   * 设置NFC的读卡器模式，需要在页面退出前台或页面销毁时调用
   * [tag.off]{@link tag.off(type: 'readerModeWithInterval', elementName: ElementName, callback?: Callback<TagInfo>)}进行取
   * 消。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'readerModeWithInterval' } type - 要注销的回调类型，固定填"readerModeWithInterval"字符串。
   * @param { ElementName } elementName - 所属应用读卡的页面信息（至少包含bundleName、abilityName这两项的赋值）。
   * @param { Callback<TagInfo> } [callback] - 前台读卡监听回调函数，返回读到的Tag信息。不填该参数则取消订阅该type对应的读卡回调。
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
   * 在对相关Tag类型卡片进行读写之前，必须先获取[TagInfo]{@link tag.TagInfo}相关属性值，以确认设备读取到的Tag卡片支持哪些技术类型。这样Tag应用程序才能调用正确的接口和所读取到的Tag卡片进行通信。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export interface TagInfo {
    /**
     * 标签的uid，每个number值是十六进制表示，范围是0x00~0xFF。
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    uid: int[];

    /**
     * 支持的技术类型，每个number值表示所支持技术类型的常量值。
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    technology: int[];

    /**
     * 标签所支持技术的扩展属性值。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    extrasData: PacMap[];

    /**
     * 标签发现时分配的ID值。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    tagRfDiscId: int;

    /**
     * NFC服务进程的远端对象，用于客户端和服务之间的接口通信。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @permission ohos.permission.NFC_TAG
     * @syscap SystemCapability.Communication.NFC.Tag
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    remoteTagService: rpc.RemoteObject;

    /**
     * 支持的技术类型。
     * 
     * **说明：** 从API version 7开始支持，从API version 9开始废弃，使用[tag.TagInfo#technology]{@link tag.TagInfo}替代。
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
   * NDEF标签Record属性的定义，参考NDEF标签技术规范《NFCForum-TS-NDEF_1.0》的定义细节。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface NdefRecord {
    /**
     * NDEF Record的TNF(Type Name Field)。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    tnf: int;

    /**
     * NDEF Record的RTD(Record Type Definition)类型值，每个number十六进制表示，范围是0x00~0xFF。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    rtdType: int[];

    /**
     * NDEF Record的ID，每个number十六进制表示，范围是0x00~0xFF。
     *
     * @syscap SystemCapability.Communication.NFC.Tag
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    id: int[];

    /**
     * NDEF Record的PAYLOAD，每个number十六进制表示，范围是0x00~0xFF。
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
     * 根据输入的URI，构建NDEF标签的Record数据对象。
     *
     * @param { string } uri - 写入到NDEF Record里面的数据内容。
     * @returns { NdefRecord } NDEF标签的Record，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
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
     * 根据输入的文本数据和语言类型，构建NDEF标签的Record。
     *
     * @param { string } text - 写入到NDEF Record里面的文本数据内容。长度小于待写入的NFC标签容量。
     * @param { string } locale - Record中记录文本的语言类型。长度小于待写入的NFC标签容量。
     * @returns { NdefRecord } NDEF标签的Record，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
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
     * 根据输入的MIME数据和类型，构建NDEF标签的Record。
     *
     * @param { string } mimeType - 符合RFC规则的MIME类型，比如"text/plain"或"image/jpeg"。
     * @param { int[] } mimeData - MIME数据内容，每个number十六进制表示，范围是0x00~0xFF。
     * @returns { NdefRecord } NDEF标签的Record，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
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
     * 根据应用程序特定的外部数据，构建NDEF标签的Record。
     *
     * @param { string } domainName - 外部数据发布组织的域名，一般是应用程序的包名。
     * @param { string } type - 外部数据的指定类型。
     * @param { int[] } externalData - 外部数据内容，每个number十六进制表示，范围是0x00~0xFF。
     * @returns { NdefRecord } NDEF标签的Record，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
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
     * 使用原始字节数据创建NDEF标签的Message。该数据必须符合NDEF Record数据格式，如果不符合格式，则返回的NdefMessage数据对象，所包含的NDEF Record列表会为空。
     *
     * @param { int[] } data - 原始字节，每个number十六进制表示，范围是0x00~0xFF。要求必须满足NDEF Record的格式。
     * @returns { NdefMessage } NDEF标签的Message，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
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
     * 使用NDEF Records列表，创建NDEF Message。
     *
     * @param { NdefRecord[] } ndefRecords - NDEF标签的Record列表，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
     * @returns { NdefMessage } NDEF标签的Message，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
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
     * 把输入的NDEF消息数据对象，转换为字节格式的数据。
     *
     * @param { NdefMessage } ndefMessage - NDEF消息数据对象。
     * @returns { int[] } NDEF消息数据对象，所转换成的字节格式的数据。每个number十六进制表示，范围是0x00~0xFF。
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
     * 根据OpenHarmony应用的bundlename，构建NDEF标签的Record。
     *
     * @param { string } bundleName - 要创建标签的应用包名。
     * @returns { NdefRecord } NDEF标签的Record，详见NDEF技术规范《NFCForum-TS-NDEF_1.0》。
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
   * 获取NfcATag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export type NfcATag = _NfcATag;

  /**
   * 获取NfcBTag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export type NfcBTag = _NfcBTag;

  /**
   * 获取NfcFTag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export type NfcFTag = _NfcFTag;

  /**
   * 获取NfcVTag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  export type NfcVTag = _NfcVTag;

  /**
   * 获取IsoDepTag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type IsoDepTag = _IsoDepTag;

  /**
   * 获取NdefTag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NdefTag = _NdefTag;

  /**
   * 获取MifareClassicTag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type MifareClassicTag = _MifareClassicTag;

  /**
   * 获取MifareUltralightTag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type MifareUltralightTag = _MifareUltralightTag;

  /**
   * 获取NdefFormatableTag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NdefFormatableTag = _NdefFormatableTag;

  /**
   * 获取NdefMessage。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type NdefMessage = _NdefMessage;

  /**
   * 获取TagSession。
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
   * BARCODE技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 18 dynamic
   */
  const NFC_BARCODE = 10;

  /**
   * NfcBarcode标签。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  const NFC_BARCODE: int;

  /**
   * 获取BarcodeTag。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type BarcodeTag = _BarcodeTag;

  /**
   * 获取BarcodeTag类型Tag对象，通过该对象可访问BarcodeTag技术类型的Tag。
   *
   * @param { TagInfo } tagInfo - Indicates the dispatched tag information.
   * @returns { BarcodeTag } BarcodeTag类型Tag对象。
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
   * 跳过NDEF检查的技术。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  const SKIP_NDEF = 11;

  /**
   * 当应用在前台读卡时，跳过NDEF。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.Communication.NFC.Tag
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 static
   */
  const SKIP_NDEF: int;
}
export default tag;