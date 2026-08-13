/*
 * Copyright (C) 2023-2024 Huawei Device Co., Ltd.
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
 * @file VCard模块
 * @kit TelephonyKit
 */

import type { AsyncCallback } from './@ohos.base';
import type dataSharePredicates from './@ohos.data.dataSharePredicates';

import type Context from './application/BaseContext';

/**
 * VCard是电子名片的文件格式标准，它可包含的信息有：姓名、地址资讯、电话号码、URL、logo、相片等。VCard模块提供了VCard能力，包括将VCard文件导入联系人数据库和将联系人数据导出为VCard文件等。
 *
 * @syscap SystemCapability.Telephony.CoreService
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace vcard {
  /**
   * 将VCard文件导入联系人数据库。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS and
   *     ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文。
   * @param { string } filePath - VCF(vcard file)文件地址。
   * @param { int } accountId - 联系人账户ID。
   * @param { AsyncCallback<void> } callback - 回调函数，返回导入成功或失败的状态码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 11 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  function importVCard(context: Context, filePath: string, accountId: int, callback: AsyncCallback<void>): void;

  /**
   * 将VCard文件导入联系人数据库。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS and
   *     ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文。
   * @param { string } filePath - VCF(vcard file)文件地址。
   * @param { int } accountId - 联系人账户ID。
   * @returns { Promise<void> } Promise对象，返回重置的结果码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 11 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  function importVCard(context: Context, filePath: string, accountId?: int): Promise<void>;

  /**
   * 将VCard文件导入联系人数据库。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS and
   *     ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文。
   * @param { string } filePath - VCF(vcard file)文件地址。
   * @param { AsyncCallback<void> } callback - 回调函数，返回导入成功或失败的状态码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 11 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  function importVCard(context: Context, filePath: string, callback: AsyncCallback<void>): void;

  /**
   * 将联系人导出为 VCF(vcard file)文件。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文。
   * @param { dataSharePredicates.DataSharePredicates } predicates - 查询语句。
   * @param { VCardBuilderOptions } options - VCard版本与编码类型。
   * @param { AsyncCallback<string> } callback - 回调函数。生成的 VCF(vcard file)文件地址。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 11 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options: VCardBuilderOptions, callback: AsyncCallback<string>): void;

  /**
   * 将联系人导出为 VCF(vcard file)文件。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文。
   * @param { dataSharePredicates.DataSharePredicates } predicates - 查询语句。
   * @param { VCardBuilderOptions } options - VCard版本与编码类型。
   * @returns { Promise<string> } Promise对象，返回重置的结果码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 11 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, options?: VCardBuilderOptions): Promise<string>;

  /**
   * 将联系人导出为 VCF(vcard file)文件。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文。
   * @param { dataSharePredicates.DataSharePredicates } predicates - 查询语句。
   * @param { AsyncCallback<string> } callback - 回调函数。生成的 VCF(vcard file)文件地址。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 11 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  function exportVCard(context: Context, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<string>): void;

  /**
   * VCard版本类型。
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  export enum VCardType {

    /**
     * VCard2.1版本。
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use. [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    VERSION_21 = 0,

    /**
     * VCard3.0版本。
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use. [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    VERSION_30 = 1,

    /**
     * VCard4.0版本。
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use. [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    VERSION_40 = 2
  }

  /**
   * VCard版本和编码信息。
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface VCardBuilderOptions {
    /**
     * VCard版本类型 (默认值为VERSION_21)。
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use. [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    cardType?: VCardType;
    /**
     * VCard编码类型（默认值为'UTF-8'）。
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use. [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    charset?: string;
  }
}

export default vcard;