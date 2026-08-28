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
 * @file VCard
 * @kit TelephonyKit
 */

import type { AsyncCallback } from './@ohos.base';
import type dataSharePredicates from './@ohos.data.dataSharePredicates';

import type Context from './application/BaseContext';

/**
 * VCard is a file format standard for electronic business cards. It contains information such as names, addresses,
 * phone numbers, URLs, logos, and photos. The VCard module provides the VCard management functions, including importing
 * VCard files to the contact database and exporting contact data to VCard files.
 *
 * @syscap SystemCapability.Telephony.CoreService
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace vcard {
  /**
   * Imports a VCard file (that is, **.vcf** file) to the contact database. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.WRITE_CONTACTS and
   *     ohos.permission.READ_CONTACTS
   * @param { Context } context - Application context.
   * @param { string } filePath - URL of the vcard file (VCF).
   * @param { int } accountId - Contact account ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Imports a VCard file (that is, **.vcf** file) to the contact database. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.WRITE_CONTACTS and
   *     ohos.permission.READ_CONTACTS
   * @param { Context } context - Application context.
   * @param { string } filePath - URL of the vcard file (VCF).
   * @param { int } accountId - Contact account ID.
   * @returns { Promise<void> } Promise used to return the operation result.
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
   * Imports a VCard file (that is, **.vcf** file) to the contact database. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.WRITE_CONTACTS and
   *     ohos.permission.READ_CONTACTS
   * @param { Context } context - Application context.
   * @param { string } filePath - URL of the vcard file (VCF).
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Exports contacts as a vcard file (VCF). This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS
   * @param { Context } context - Application context.
   * @param { dataSharePredicates.DataSharePredicates } predicates - Query statement.
   * @param { VCardBuilderOptions } options - VCard version and encoding type.
   * @param { AsyncCallback<string> } callback - Callback used to Address of the generated vcard file (VCF).
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
   * Exports contacts as a vcard file (VCF). This API uses a promise to return the result.
   *
   * @permission ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS
   * @param { Context } context - Application context.
   * @param { dataSharePredicates.DataSharePredicates } predicates - Query statement.
   * @param { VCardBuilderOptions } options - VCard version and encoding type.
   * @returns { Promise<string> } Promise used to return the operation result.
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
   * Exports contacts as a vcard file (VCF). This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.WRITE_CONTACTS and ohos.permission.READ_CONTACTS
   * @param { Context } context - Application context.
   * @param { dataSharePredicates.DataSharePredicates } predicates - Query statement.
   * @param { AsyncCallback<string> } callback - Callback used to Address of the generated vcard file (VCF).
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
   * Enumerates VCard versions.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  export enum VCardType {

    /**
     * VCard 2.1.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use. [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    VERSION_21 = 0,

    /**
     * VCard 3.0.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use. [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    VERSION_30 = 1,

    /**
     * VCard 4.0.
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
   * Defines the VCard information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use. [since 11 - 22]
   * @publicapi [since 23]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface VCardBuilderOptions {
    /**
     * VCard version. The default value is **VERSION_21**.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use. [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    cardType?: VCardType;
    /**
     * VCard encoding type. The default value is **UTF-8**.
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