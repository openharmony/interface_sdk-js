/*
 * Copyright (C) 2021-2025 Huawei Device Co., Ltd.
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
 * @kit ContactsKit
 */

import { AsyncCallback } from './@ohos.base';
import type Context from './application/BaseContext';

import { ValueType } from './@ohos.data.ValuesBucket';
import type image from './@ohos.multimedia.image';

/**
 * 本模块提供联系人管理能力，包括添加联系人、删除联系人、更新联系人等。
 *
 * @syscap SystemCapability.Applications.ContactsData
 * @atomicservice [since 11]
 * @since 7
 */
declare namespace contact {
  /**
   * 添加联系人。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Contact } contact - 联系人信息。
   * @param { AsyncCallback<number> } callback - 回调函数。成功返回添加的联系人id；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.addContact(context: Context, contact: Contact, callback: AsyncCallback<number>)
   */
  function addContact(contact: Contact, callback: AsyncCallback<number>): void;

  /**
   * 添加联系人。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Contact } contact - 联系人信息。
   * @param { AsyncCallback<number> } callback - 回调函数。成功返回添加的联系人id；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 12]
   * @since 10
   */
  function addContact(context: Context, contact: Contact, callback: AsyncCallback<number>): void;

  /**
   * 添加联系人。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Contact } contact - 联系人信息。
   * @returns { Promise<number> } Promise对象，返回添加的联系人id。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.addContact(context: Context, contact: Contact)
   */
  function addContact(contact: Contact): Promise<number>;

  /**
   * 添加联系人。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Contact } contact - 联系人信息。
   * @returns { Promise<number> } Promise对象，返回添加的联系人id。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 12]
   * @since 10
   */
  function addContact(context: Context, contact: Contact): Promise<number>;

  /**
   * 调用选择联系人接口，打开选择联系人UI界面。使用callback异步回调。
   *
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回选择的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.Contacts
   * @since 7
   * @deprecated since 10
   * @useinstead contact.selectContacts(callback: AsyncCallback<Array<Contact>>)
   */
  function selectContact(callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 调用选择联系人接口，打开选择联系人UI界面。使用callback异步回调。
   *
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回选择的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice [since 11]
   * @since 10
   */
  function selectContacts(callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 调用选择联系人接口，打开选择联系人UI界面。使用Promise异步回调。
   *
   * @returns { Promise<Array<Contact>> } Promise对象。返回选择的联系人数组对象。
   * @syscap SystemCapability.Applications.Contacts
   * @since 7
   * @deprecated since 10
   * @useinstead contact.selectContacts()
   */
  function selectContact(): Promise<Array<Contact>>;

  /**
   * 调用选择联系人接口，打开选择联系人UI界面。使用Promise异步回调。
   *
   * @returns { Promise<Array<Contact>> } Promise对象。返回选择的联系人数组对象。
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice [since 11]
   * @since 10
   */
  function selectContacts(): Promise<Array<Contact>>;

  /**
   * 调用选择联系人接口，打开选择联系人UI界面（选择联系人时支持传入[筛选条件]{@link contact.ContactSelectionOptions}）。使用callback异步回调。
   *
   * @param { ContactSelectionOptions } options - 选择联系人时的筛选条件，表示单选或多选。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回选择的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice [since 11]
   * @since 10
   */
  function selectContacts(options: ContactSelectionOptions, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 调用选择联系人接口，打开选择联系人UI界面（选择联系人时支持传入筛选条件）。使用Promise异步回调。
   *
   * @param { ContactSelectionOptions } options - 选择联系人时的筛选条件，用于指定是单选还是多选。
   * @returns { Promise<Array<Contact>> } Promise对象。返回选择的联系人数组对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice [since 11]
   * @since 10
   */
  function selectContacts(options: ContactSelectionOptions): Promise<Array<Contact>>;

  /**
   * 删除联系人。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { string } key - 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回删除的联系人id；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.deleteContact(context: Context, key: string, callback: AsyncCallback<void>)
   */
  function deleteContact(key: string, callback: AsyncCallback<void>): void;

  /**
   * 删除联系人。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } key - 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回删除的联系人id；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function deleteContact(context: Context, key: string, callback: AsyncCallback<void>): void;

  /**
   * 删除联系人。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { string } key - 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.deleteContact(context: Context, key: string)
   */
  function deleteContact(key: string): Promise<void>;

  /**
   * 删除联系人。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } key - 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function deleteContact(context: Context, key: string): Promise<void>;

  /**
   * 根据联系人唯一标识符key查询联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContact(context: Context, key: string, callback: AsyncCallback<Contact>)
   */
  function queryContact(key: string, callback: AsyncCallback<Contact>): void;

  /**
   * 根据key查询联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContact(context: Context, key: string, callback: AsyncCallback<Contact>): void;

  /**
   * 根据key和holder查询联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContact(context: Context, key: string, holder: Holder, callback: AsyncCallback<Contact>)
   */
  function queryContact(key: string, holder: Holder, callback: AsyncCallback<Contact>): void;

  /**
   * 根据key和holder查询联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContact(context: Context, key: string, holder: Holder, callback: AsyncCallback<Contact>): void;

  /**
   * 根据key和指定属性(attrs)查询联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContact(context: Context, key: string, attrs: ContactAttributes, callback: AsyncCallback<Contact>)
   */
  function queryContact(key: string, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;

  /**
   * 根据key和attrs查询联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContact(context: Context, key: string, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;

  /**
   * 根据key、holder和attrs查询联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { Holder } holder - 创建联系人的应用信息类，为空则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，当该参数为空时，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)
   */
  function queryContact(key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;

  /**
   * 根据key、holder和attrs查询联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回查询的联系人对象；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;

  /**
   * 根据key、holder和attrs查询联系人。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，不传默认查询所有联系人属性。
   * @returns { Promise<Contact> } Promise对象。返回查询到的联系人对象。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContact(context: Context, key: string, holder?: Holder, attrs?: ContactAttributes)
   */
  function queryContact(key: string, holder?: Holder, attrs?: ContactAttributes): Promise<Contact>;

  /**
   * 根据key、holder和attrs查询联系人。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } key - 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key,可以通过[queryKey]{@link contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>): void}获取。
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，不传该参数，则默认查询所有联系人属性。
   * @returns { Promise<Contact> } Promise对象。返回查询到的联系人对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContact(context: Context, key: string, holder?: Holder, attrs?: ContactAttributes): Promise<Contact>;

  /**
   * 查询所有联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContacts(context: Context, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContacts(callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 查询所有联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContacts(context: Context, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据holder查询所有联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContacts(context: Context, holder: Holder, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContacts(holder: Holder, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据holder查询所有联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContacts(context: Context, holder: Holder, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据attrs查询所有联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContacts(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContacts(attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据attrs查询所有联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContacts(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据holder和attrs查询所有联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContacts(context: Context, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContacts(holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据holder和attrs查询所有联系人。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContacts(context: Context, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据holder和attrs查询所有联系人。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，不传默认查询所有联系人属性。
   * @returns { Promise<Array<Contact>> } Promise对象。返回查询到的联系人数组对象。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContacts(context: Context, holder?: Holder, attrs?: ContactAttributes)
   */
  function queryContacts(holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * 根据holder和attrs查询所有联系人。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Holder } holder - 创建联系人的应用信息类，如果为空，默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，不传该参数默认查询所有联系人属性。
   * @returns { Promise<Array<Contact>> } Promise对象。返回查询到的联系人数组对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContacts(context: Context, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * 根据email查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } email - 联系人的邮箱地址。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByEmail(context: Context, email: string, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContactsByEmail(email: string, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据email查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } email - 联系人的邮箱地址。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByEmail(context: Context, email: string, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据email和holder查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } email - 联系人的邮箱地址。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空默认使用系统联系人应用查询。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByEmail(context: Context, email: string, holder: Holder, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContactsByEmail(email: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据email和holder查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } email - 联系人的邮箱地址。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则使用系统联系人应用。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByEmail(context: Context, email: string, holder: Holder,
    callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据email和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } email - 联系人的邮箱地址。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByEmail(context: Context, email: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContactsByEmail(email: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据email和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } email - 联系人的邮箱地址。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByEmail(context: Context, email: string, attrs: ContactAttributes,
    callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据email、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } email - 联系人的邮箱地址。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByEmail(context: Context, email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContactsByEmail(email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据email、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } email - 联系人的邮箱地址。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByEmail(context: Context, email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据email、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } email - 联系人的邮箱地址。
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，不传默认查询所有联系人属性。
   * @returns { Promise<Array<Contact>> } Promise对象。返回查询到的联系人数组对象。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByEmail(context: Context, email: string, holder?: Holder, attrs?: ContactAttributes)
   */
  function queryContactsByEmail(email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * 根据email、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } email - 联系人的邮箱地址。
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，不传默认查询所有联系人属性。
   * @returns { Promise<Array<Contact>> } Promise对象。返回查询到的联系人数组对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByEmail(context: Context, email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * 根据电话号码查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByPhoneNumber(context: Context, phoneNumber: string, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContactsByPhoneNumber(phoneNumber: string, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据电话号码查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByPhoneNumber(context: Context, phoneNumber: string, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据电话号码和holder查询联系人，使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空默认使用系统联系人应用查询。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder: Holder, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据电话号码和holder查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据电话号码和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByPhoneNumber(context: Context, phoneNumber: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContactsByPhoneNumber(phoneNumber: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据电话号码和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByPhoneNumber(context: Context, phoneNumber: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据电话号码、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { Holder } holder - 创建联系人的应用信息类，如果该参数为空，则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果该参数为空，则查询联系人的所有属性字段。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>)
   */
  function queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据电话号码、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { Holder } holder - 创建联系人的应用信息类，如果该参数为空，则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Array<Contact>> } callback - 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder: Holder, attrs: ContactAttributes,
    callback: AsyncCallback<Array<Contact>>): void;

  /**
   * 根据电话号码、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，不传默认查询所有联系人属性。
   * @returns { Promise<Array<Contact>> } Promise对象。返回查询到的联系人数组对象。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder?: Holder, attrs?: ContactAttributes)
   */
  function queryContactsByPhoneNumber(phoneNumber: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * 根据电话号码、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用
   * [queryContact]{@link contact.queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>)}
   * 接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息必须要申请对应的长时任务。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { string } phoneNumber - 联系人的电话号码，仅支持全匹配，不支持通配符匹配。
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @param { ContactAttributes } attrs - 联系人的属性列表，不传默认查询所有联系人属性。
   * @returns { Promise<Array<Contact>> } Promise对象。返回查询到的联系人数组对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>;

  /**
   * 查询联系人的所有群组。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { AsyncCallback<Array<Group>> } callback - 回调函数。成功返回查询到的群组对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryGroups(context: Context, callback: AsyncCallback<Array<Group>>)
   */
  function queryGroups(callback: AsyncCallback<Array<Group>>): void;

  /**
   * 查询联系人的所有群组。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { AsyncCallback<Array<Group>> } callback - 回调函数。成功返回查询到的群组对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryGroups(context: Context, callback: AsyncCallback<Array<Group>>): void;

  /**
   * 根据holder查询联系人的所有群组。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { AsyncCallback<Array<Group>> } callback - 回调函数。成功返回查询到的群组对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryGroups(context: Context, holder: Holder, callback: AsyncCallback<Array<Group>>)
   */
  function queryGroups(holder: Holder, callback: AsyncCallback<Array<Group>>): void;

  /**
   * 根据holder查询联系人的所有群组。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { AsyncCallback<Array<Group>> } callback - 回调函数。成功返回查询到的群组对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryGroups(context: Context, holder: Holder, callback: AsyncCallback<Array<Group>>): void;

  /**
   * 根据holder查询联系人的所有群组。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @returns { Promise<Array<Group>> } Promise对象。返回查询到的群组对象数组。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryGroups(context: Context, holder?: Holder)
   */
  function queryGroups(holder?: Holder): Promise<Array<Group>>;

  /**
   * 根据holder查询联系人的所有群组。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @returns { Promise<Array<Group>> } Promise对象。返回查询到的群组对象数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryGroups(context: Context, holder?: Holder): Promise<Array<Group>>;

  /**
   * 查询所有创建联系人的应用信息类。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { AsyncCallback<Array<Holder>> } callback - 回调函数。成功返回查询到的创建联系人应用信息的对象数组；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryHolders(context: Context, callback: AsyncCallback<Array<Holder>>)
   */
  function queryHolders(callback: AsyncCallback<Array<Holder>>): void;

  /**
   * 查询所有创建联系人的应用信息类。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { AsyncCallback<Array<Holder>> } callback - 回调函数。成功返回查询到的创建联系人应用信息的对象数组；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryHolders(context: Context, callback: AsyncCallback<Array<Holder>>): void;

  /**
   * 查询所有创建联系人的应用信息类。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @returns { Promise<Array<Holder>> } Promise对象。返回查询到的创建联系人应用信息的对象数组。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryHolders(context: Context)
   */
  function queryHolders(): Promise<Array<Holder>>;

  /**
   * 查询所有创建联系人的应用信息类。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @returns { Promise<Array<Holder>> } Promise对象。返回查询到的创建联系人应用信息的对象数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryHolders(context: Context): Promise<Array<Holder>>;

  /**
   * 根据联系人的id查询联系人的唯一查询键key。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { number } id - 联系人对象的id属性。
   * @param { AsyncCallback<string> } callback - 回调函数。成功返回查询到的联系人对应的key；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryKey(context: Context, id: number, callback: AsyncCallback<string>)
   */
  function queryKey(id: number, callback: AsyncCallback<string>): void;

  /**
   * 根据联系人的id查询联系人的唯一查询键key。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { number } id - 联系人对象的id属性，是联系人对象在数据库中的唯一标识符。
   * @param { AsyncCallback<string> } callback - 回调函数。成功返回查询到的联系人对应的key；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryKey(context: Context, id: number, callback: AsyncCallback<string>): void;

  /**
   * 根据联系人的id和holder查询联系人的唯一查询键key。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { number } id - 联系人对象的id属性。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { AsyncCallback<string> } callback - 回调函数。成功返回查询到的联系人对应的key；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryKey(context: Context, id: number, holder: Holder, callback: AsyncCallback<string>)
   */
  function queryKey(id: number, holder: Holder, callback: AsyncCallback<string>): void;

  /**
   * 根据联系人的id和holder查询联系人的唯一查询键key。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { number } id - 联系人对象的id属性。
   * @param { Holder } holder - 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。
   * @param { AsyncCallback<string> } callback - 回调函数。成功返回查询到的联系人对应的key；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryKey(context: Context, id: number, holder: Holder, callback: AsyncCallback<string>): void;

  /**
   * 根据联系人的id和holder查询联系人的唯一查询键key。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { number } id - 联系人对象的id属性。
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @returns { Promise<string> } Promise对象。返回查询到的联系人对应的key。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryKey(context: Context, id: number, holder?: Holder)
   */
  function queryKey(id: number, holder?: Holder): Promise<string>;

  /**
   * 根据联系人的id和holder查询联系人的唯一查询键key。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { number } id - 联系人对象的id属性。
   * @param { Holder } holder - 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。
   * @returns { Promise<string> } Promise对象。返回查询到的联系人对应的key。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryKey(context: Context, id: number, holder?: Holder): Promise<string>;

  /**
   * 查询“我的名片”。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回“我的名片”信息；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryMyCard(context: Context, callback: AsyncCallback<Contact>)
   */
  function queryMyCard(callback: AsyncCallback<Contact>): void;

  /**
   * 查询“我的名片”。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回“我的名片”信息；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryMyCard(context: Context, callback: AsyncCallback<Contact>): void;

  /**
   * 查询“我的名片”（支持传入联系人的属性列表）。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回“我的名片”信息；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryMyCard(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Contact>)
   */
  function queryMyCard(attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;

  /**
   * 查询“我的名片”（支持传入联系人的属性列表）。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<Contact> } callback - 回调函数。成功返回“我的名片”信息；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryMyCard(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void;

  /**
   * 查询“我的名片”（支持传入联系人的属性列表）。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @returns { Promise<Contact> } Promise对象。返回“我的名片”联系人对象。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.queryMyCard(context: Context, attrs?: ContactAttributes)
   */
  function queryMyCard(attrs?: ContactAttributes): Promise<Contact>;

  /**
   * 查询“我的名片”（支持传入联系人的属性列表）。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @returns { Promise<Contact> } Promise对象。返回“我的名片”联系人对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function queryMyCard(context: Context, attrs?: ContactAttributes): Promise<Contact>;

  /**
   * 更新联系人。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Contact } contact - 联系人信息。id必填，可通过[selectContacts]{@link contact.selectContacts()}接口获取。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回更新的联系人id；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.updateContact(context: Context, contact: Contact, callback: AsyncCallback<void>)
   */
  function updateContact(contact: Contact, callback: AsyncCallback<void>): void;

  /**
   * 更新联系人。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Contact } contact - 联系人信息。id必填，可通过[selectContacts]{@link contact.selectContacts()}接口获取。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回更新的联系人id；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function updateContact(context: Context, contact: Contact, callback: AsyncCallback<void>): void;

  /**
   * 更新联系人，支持传入联系人的属性列表。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Contact } contact - 联系人信息。id必填，可通过[selectContacts]{@link contact.selectContacts()}接口获取。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回更新的联系人id；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.updateContact(context: Context, contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>)
   */
  function updateContact(contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void;

  /**
   * 更新联系人（支持传入联系人的属性列表）。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Contact } contact - 联系人信息。id必填，可通过[selectContacts]{@link contact.selectContacts()}接口获取。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @param { AsyncCallback<void> } callback - 回调函数。成功返回更新的联系人id；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function updateContact(context: Context, contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void;

  /**
   * 更新联系人，支持传入联系人的属性列表。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Contact } contact - 联系人信息。id必填，可通过[selectContacts]{@link contact.selectContacts()}接口获取。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.updateContact(context: Context, contact: Contact, attrs?: ContactAttributes)
   */
  function updateContact(contact: Contact, attrs?: ContactAttributes): Promise<void>;

  /**
   * 更新联系人（支持传入联系人的属性列表）。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Contact } contact - 联系人信息。id必填，可通过[selectContacts]{@link contact.selectContacts()}接口获取。
   * @param { ContactAttributes } attrs - 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function updateContact(context: Context, contact: Contact, attrs?: ContactAttributes): Promise<void>;

  /**
   * 判断当前联系人id是否在电话簿中。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { number } id - 联系人对象的id属性，一个联系人对应一个id。
   * @param { AsyncCallback<boolean> } callback - 回调函数。成功返回布尔值，true代表联系人id在本地电话簿中，false则代表联系人id不在本地电话簿中；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.isLocalContact(context: Context, id: number, callback: AsyncCallback<boolean>)
   */
  function isLocalContact(id: number, callback: AsyncCallback<boolean>): void;

  /**
   * 判断当前联系人id是否在电话簿中。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { number } id - 联系人对象的id属性，一个联系人对应一个id。
   * @param { AsyncCallback<boolean> } callback - 回调函数。成功返回布尔值，true代表联系人id在本地电话簿中，false则代表联系人id不在本地电话簿中；失败返回具体的错误码信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function isLocalContact(context: Context, id: number, callback: AsyncCallback<boolean>): void;

  /**
   * 判断当前联系人id是否在电话簿中。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { number } id - 联系人对象的id属性，一个联系人对应一个id。
   * @returns { Promise<boolean> } Promise对象。返回true表示联系人id在本地电话簿中，返回false表示联系人id不在本地电话簿中。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.isLocalContact(context: Context, id: number)
   */
  function isLocalContact(id: number): Promise<boolean>;

  /**
   * 判断当前联系人id是否在电话簿中。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { number } id - 联系人对象的id属性，一个联系人对应一个id。
   * @returns { Promise<boolean> } Promise对象。返回true表示联系人id在本地电话簿中，返回false表示联系人id不在本地电话簿中。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function isLocalContact(context: Context, id: number): Promise<boolean>;

  /**
   * 判断是否为“我的名片”。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { number } id - 名片对象的id属性。
   * @param { AsyncCallback<boolean> } callback - 回调函数。成功返回是否为“我的名片”的布尔值。true代表的是“我的名片”，false则代表不是；失败返回具体的错误码信息。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.isMyCard(context: Context, id: number, callback: AsyncCallback<boolean>)
   */
  function isMyCard(id: number, callback: AsyncCallback<boolean>): void;

  /**
   * 判断是否为“我的名片”。使用callback异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { number } id - 名片对象的id属性。
   * @param { AsyncCallback<boolean> } callback - 回调函数。成功返回是否为“我的名片”的布尔值。true代表的是“我的名片”，false代表不是；失败时则返回错误码。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function isMyCard(context: Context, id: number, callback: AsyncCallback<boolean>): void;

  /**
   * 判断是否为“我的名片”。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { number } id - 名片对象的id属性。
   * @returns { Promise<boolean> } Promise对象。返回true表示是“我的名片”，返回false代表不是。
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   * @deprecated since 10
   * @useinstead contact.isMyCard(context: Context, id: number)
   */
  function isMyCard(id: number): Promise<boolean>;

  /**
   * 判断是否为“我的名片”。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { number } id - 名片对象的id属性。
   * @returns { Promise<boolean> } Promise对象。返回true表示是“我的名片”，返回false代表不是。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified. 2.Parameter verification failed.
   * @syscap SystemCapability.Applications.ContactsData
   * @since 10
   */
  function isMyCard(context: Context, id: number): Promise<boolean>;

  /**
   * 选择联系人条件。
   *
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice [since 11]
   * @since 10
   */
  interface ContactSelectionOptions {
    /**
     * 是否为多选，true:多选，false:单选。默认值为false。
 
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice [since 11]
     * @since 10
     */
    isMultiSelect?: boolean;

    /**
     * 联系人查询过滤器。
     * 从API version 15 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    filter?: ContactSelectionFilter;

    /**
     * 联系人数量上限。默认值为10000，超出上限则以默认值筛选。
     * 从API version 15 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    maxSelectable?: number;

    /**
     * 是否按联系人姓名维度展示，true:按联系人姓名维度展示，false:按联系人号码维度展示，默认值为false。
     * 从API version 15 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    isDisplayedByName?: boolean;

    /**
     * 联系人picker发生页面路由时是否自动关闭，比如应用退后台场景
     *     默认值为false
     *
     * @syscap SystemCapability.Applications.Contacts
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
     */
    isAutoDismissOnNavigation?: boolean;
  }

  /**
   * 联系人对象类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Contact {
    /**
     * 默认联系人的id，值为-1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly INVALID_CONTACT_ID: -1;

    /**
     * 联系人的id，由系统自动生成。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    readonly id?: number;

    /**
     * 联系人的唯一查询键key，由系统自动生成。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    readonly key?: string;

    /**
     * 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    contactAttributes?: ContactAttributes;

    /**
     * 联系人的邮箱地址列表。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    emails?: Email[];

    /**
     * 联系人的生日、周年纪念等重要日期列表。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    events?: Event[];

    /**
     * 联系人的群组列表。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    groups?: Group[];

    /**
     * 联系人的即时消息地址列表。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    imAddresses?: ImAddress[];

    /**
     * 联系人的电话号码列表。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    phoneNumbers?: PhoneNumber[];

    /**
     * 联系人的头像。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    portrait?: Portrait;

    /**
     * 联系人的邮政地址列表。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    postalAddresses?: PostalAddress[];

    /**
     * 联系人的关系列表。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    relations?: Relation[];

    /**
     * 联系人的会话发起协议(SIP)地址列表。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    sipAddresses?: SipAddress[];

    /**
     * 联系人的网站列表。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    websites?: Website[];

    /**
     * 联系人的姓名。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    name?: Name;

    /**
     * 联系人的昵称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    nickName?: NickName;

    /**
     * 联系人的备注。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    note?: Note;

    /**
     * 联系人的组织信息。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    organization?: Organization;
  }

  /**
   * 联系人属性列表，一般作为入参用来标识希望查询的联系人属性。
   * 当传入为null时，默认查询全部属性。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class ContactAttributes {
    /**
     * 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    attributes: Attribute[];
  }

  /**
   * 枚举，类型为number。联系人属性列表。
   * 通过JSON格式创建数据。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  enum Attribute {
    /**
     * 联系人的生日、周年纪念等重要日期。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_CONTACT_EVENT = 0,

    /**
     * 联系人的邮箱地址。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_EMAIL = 1,

    /**
     * 联系人的群组。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_GROUP_MEMBERSHIP = 2,

    /**
     * 联系人的即时消息地址。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_IM = 3,

    /**
     * 联系人的姓名。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_NAME = 4,

    /**
     * 联系人的昵称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_NICKNAME = 5,

    /**
     * 联系人的备注。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_NOTE = 6,

    /**
     * 联系人的组织信息。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_ORGANIZATION = 7,

    /**
     * 联系人的电话号码。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_PHONE = 8,

    /**
     * 联系人的头像。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_PORTRAIT = 9,

    /**
     * 联系人的邮政地址。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_POSTAL_ADDRESS = 10,

    /**
     * 联系人的关系。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_RELATION = 11,

    /**
     * 联系人的会话发起协议(SIP)地址。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_SIP_ADDRESS = 12,

    /**
     * 联系人的网站。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    ATTR_WEBSITE = 13
  }

  /**
   * 联系人的邮箱。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Email {
    /**
     * 自定义邮箱类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly CUSTOM_LABEL: 0;

    /**
     * 家庭邮箱类型，默认值为1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly EMAIL_HOME: 1;

    /**
     * 工作邮箱类型，默认值为2。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly EMAIL_WORK: 2;

    /**
     * 其它邮箱类型，默认值为3。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly EMAIL_OTHER: 3;

    /**
     * 无效邮箱类型，默认值为-1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly INVALID_LABEL_ID: -1;

    /**
     * 联系人的邮箱地址。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    email: string;

    /**
     * 邮箱的类型名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelName?: string;

    /**
     * 邮箱的显示名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    displayName?: string;

    /**
     * 邮箱的类型。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelId?: number;
  }

  /**
   * 联系人事件类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Event {
    /**
     * 自定义邮箱类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly CUSTOM_LABEL: 0;

    /**
     * 自定义邮箱类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly EVENT_ANNIVERSARY: 1;

    /**
     * 自定义邮箱类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly EVENT_OTHER: 2;

    /**
     * 生日事件类型，默认值为3。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly EVENT_BIRTHDAY: 3;

    /**
     * 无效邮箱类型，默认值为-1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly INVALID_LABEL_ID: -1;

    /**
     * 事件的日期。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    eventDate: string;

    /**
     * 邮箱的类型名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelName?: string;

    /**
     * 邮箱的类型。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelId?: number;
  }

  /**
   * 联系人的群组类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Group {
    /**
     * 联系人群组的Id。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    groupId?: number;

    /**
     * 联系人群组的名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    title: string;
  }

  /**
   * 创建联系人的应用信息类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @since 7
   */
  class Holder {
    /**
     * Bundle名称，默认值为com.ohos.contacts。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    readonly bundleName: string;

    /**
     * 应用名称，默认值为空。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    readonly displayName?: string;

    /**
     * 应用Id，默认值为空。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @since 7
     */
    holderId?: number;
  }

  /**
   * 联系人的即时消息地址。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class ImAddress {
    /**
     * 自定义邮箱类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly CUSTOM_LABEL: -1;

    /**
     * AIM即时消息类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly IM_AIM: 0;

    /**
     * MSN即时消息类型，默认值为1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly IM_MSN: 1;

    /**
     * YAHOO即时消息类型，默认值为2。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly IM_YAHOO: 2;

    /**
     * SKYPE即时消息类型，默认值为3。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly IM_SKYPE: 3;

    /**
     * QQ即时消息类型，默认值为4。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly IM_QQ: 4;

    /**
     * ICQ即时消息类型，默认值为6。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly IM_ICQ: 6;

    /**
     * JABBER即时消息类型，默认值为7。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly IM_JABBER: 7;

    /**
     * 无效邮箱类型，默认值为-1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly INVALID_LABEL_ID: -2;

    /**
     * 即时消息地址。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    imAddress: string;

    /**
     * 邮箱的类型名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelName?: string;

    /**
     * 邮箱的类型。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelId?: number;
  }

  /**
   * 联系人的名字类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Name {
    /**
     * 联系人的家庭姓名。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    familyName?: string;

    /**
     * 联系人的家庭姓名拼音。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    familyNamePhonetic?: string;

    /**
     * 联系人的全名。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    fullName: string;

    /**
     * 联系人的名称(firstName)。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    givenName?: string;

    /**
     * 联系人的名称拼音。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    givenNamePhonetic?: string;

    /**
     * 联系人的中间名。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    middleName?: string;

    /**
     * 联系人的中间名拼音。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    middleNamePhonetic?: string;

    /**
     * 联系人的姓名前缀。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    namePrefix?: string;

    /**
     * 联系人的姓名后缀。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    nameSuffix?: string;

    /**
     * 联系人信息中是否包含姓名。true表示包含，false表示不包含。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 22
     */
    hasName?: boolean;
  }

  /**
   * 联系人的昵称类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class NickName {
    /**
     * 联系人的昵称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    nickName: string;
  }

  /**
   * 联系人的备注类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Note {
    /**
     * 联系人的备注内容。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    noteContent: string;
  }

  /**
   * 联系人的组织类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Organization {
    /**
     * 单位名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    name: string;

    /**
     * 职位名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    title?: string;
  }

  /**
   * 联系人电话号码类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class PhoneNumber {
    /**
     * 自定义邮箱类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly CUSTOM_LABEL: 0;

    /**
     * 家庭电话类型，默认值是1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_HOME: 1;

    /**
     * 移动电话类型，默认值是2。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_MOBILE: 2;

    /**
     * 工作电话类型，默认值是3。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_WORK: 3;

    /**
     * 工作传真电话类型，默认值是4。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_FAX_WORK: 4;

    /**
     * 家庭传真电话类型，默认值是5。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_FAX_HOME: 5;

    /**
     * 寻呼机电话类型，默认值是6。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_PAGER: 6;

    /**
     * 其它电话类型，默认值是7。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_OTHER: 7;

    /**
     * 回呼电话类型，默认值是8。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_CALLBACK: 8;

    /**
     * 车机电话类型，默认值是9。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_CAR: 9;

    /**
     * 公司电话类型，默认值是10。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_COMPANY_MAIN: 10;

    /**
     * 综合业务数字网(ISDN)电话类型，默认值是11。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_ISDN: 11;

    /**
     * 主电话类型，默认值是12。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_MAIN: 12;

    /**
     * 其它传真类型，默认值是13。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_OTHER_FAX: 13;

    /**
     * 无线电话类型，默认值是14。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_RADIO: 14;

    /**
     * 电传电话类型，默认值是15。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_TELEX: 15;

    /**
     * 电传打字机(TTY)或测试驱动开发(TDD)电话类型，默认值是16。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_TTY_TDD: 16;

    /**
     * 工作移动电话类型，默认值是17。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_WORK_MOBILE: 17;

    /**
     * 工作寻呼机电话类型，默认值是18。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_WORK_PAGER: 18;

    /**
     * 助理电话类型，默认值是19。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_ASSISTANT: 19;

    /**
     * 彩信电话类型，默认值是20。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly NUM_MMS: 20;

    /**
     * 无效邮箱类型，默认值为-1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly INVALID_LABEL_ID: -1;

    /**
     * 邮箱的类型名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelName?: string;

    /**
     * 电话号码。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    phoneNumber: string;

    /**
     * 邮箱的类型。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelId?: number;
  }

  /**
   * 联系人的头像类。
   * 
   * > **说明：**
   * >
   * > 从API version 22开始，支持通过uri和[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}格式设置联系人头像资源(暂不支持通过
   * > [addContactViaUI]{@link contact.addContactViaUI}、
   * > [saveToExistingContactViaUI]{@link contact.saveToExistingContactViaUI}接口设置)。
   * > 
   * > uri为可访问的联系人头像文件地址，[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}为通过联系人头像资源生成的
   * > [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}对象。
   * > 
   * > 从API version 22开始，支持通过uri格式读取联系人头像资源，该格式仅支持以
   * > [fs.open]{@link @ohos.file.fs:open(path: string, mode?: number)}方式打开，无法直接在Image组件内显示，需读取后转换为
   * > [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}格式显示。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Portrait {
    /**
     * uri格式联系人头像。
 
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    uri: string;

    /**
     * PixelMap格式的联系人头像。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice
     * @since 22
     */
    photo?: image.PixelMap;
  }

  /**
   * 联系人的邮政地址类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class PostalAddress {
    /**
     * 自定义邮箱类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly CUSTOM_LABEL: 0;

    /**
     * 家庭地址类型，默认值为1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly ADDR_HOME: 1;

    /**
     * 工作地址类型，默认值为2。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly ADDR_WORK: 2;

    /**
     * 其它地址类型，默认值为3。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly ADDR_OTHER: 3;

    /**
     * 无效邮箱类型，默认值为-1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly INVALID_LABEL_ID: -1;

    /**
     * 联系人所在的城市。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    city?: string;

    /**
     * 联系人所在的国家。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    country?: string;

    /**
     * 邮箱的类型名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelName?: string;

    /**
     * 联系人的邻居。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    neighborhood?: string;

    /**
     * 联系人的邮箱。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    pobox?: string;

    /**
     * 联系人的邮政地址。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    postalAddress: string;

    /**
     * 联系人所在区域的邮政编码。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    postcode?: string;

    /**
     * 联系人所在的区域。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    region?: string;

    /**
     * 联系人所在的街道。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    street?: string;

    /**
     * 邮箱的类型。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelId?: number;
  }

  /**
   * 联系人的关系类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Relation {
    /**
     * 自定义关系类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly CUSTOM_LABEL: 0;

    /**
     * 助手关系类型，默认值为1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_ASSISTANT: 1;

    /**
     * 兄弟关系类型，默认值为2。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_BROTHER: 2;

    /**
     * 子女关系类型，默认值为3。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_CHILD: 3;

    /**
     * 同居同伴关系类型，默认值为4。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_DOMESTIC_PARTNER: 4;

    /**
     * 父亲关系类型，默认值为5。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_FATHER: 5;

    /**
     * 朋友关系类型，默认值为6。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_FRIEND: 6;

    /**
     * 管理者关系类型，默认值为7。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_MANAGER: 7;

    /**
     * 母亲关系类型，默认值为8。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_MOTHER: 8;

    /**
     * 父母关系类型，默认值为9。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_PARENT: 9;

    /**
     * 父母关系类型，默认值为9。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_PARTNER: 10;

    /**
     * 推荐人关系类型，默认值为11。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_REFERRED_BY: 11;

    /**
     * 亲属关系类型，默认值为12。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_RELATIVE: 12;

    /**
     * 亲属关系类型，默认值为12。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_SISTER: 13;

    /**
     * 配偶关系类型，默认值为14。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly RELATION_SPOUSE: 14;

    /**
     * 无效的关系类型，默认值为-1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly INVALID_LABEL_ID: -1;

    /**
     * 邮箱的类型名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelName?: string;

    /**
     * 关系名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    relationName: string;

    /**
     * 邮箱的类型。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelId?: number;
  }

  /**
   * 联系人的会话发起协议(SIP)地址类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class SipAddress {
    /**
     * 自定义邮箱类型，默认值为0。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly CUSTOM_LABEL: 0;

    /**
     * 家庭会话发起协议(SIP)地址类型，默认值为1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly SIP_HOME: 1;

    /**
     * 工作会话发起协议(SIP)地址类型，默认值为2。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly SIP_WORK: 2;

    /**
     * 其它会话发起协议(SIP)地址类型，默认值为3。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly SIP_OTHER: 3;

    /**
     * 无效邮箱类型，默认值为-1。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    static readonly INVALID_LABEL_ID: -1;

    /**
     * 邮箱的类型名称。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelName?: string;

    /**
     * 会话发起协议(SIP)地址。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    sipAddress: string;

    /**
     * 邮箱的类型。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    labelId?: number;
  }

  /**
   * 联系人的网站信息类。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice [since 11]
   * @since 7
   */
  class Website {
    /**
     * 联系人的网站。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @atomicservice [since 11]
     * @since 7
     */
    website: string;
  }

  /**
   * 联系人过滤参数。
   *
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 15
   */
  interface FilterOptions {

    /**
     * 过滤条件。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    filterCondition: FilterCondition;

    /**
     * 过滤值，默认为undefined。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    value?: string | ValueType[];
  }

  /**
   * 联系人数据过滤项。
   *
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 15
   */
  interface DataFilter {

    /**
     * 联系人过滤参数，数组中多个FilterOptions之间是“或”的关系，数组的最大长度为3。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    options: Array<FilterOptions>;

    /**
     * 联系人数据字段。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    field: DataField;
  }

  /**
   * 联系人过滤条件。多个筛选条件之间是“或者”的关系，如果参数是数组类型，数组最多只能包含3个元素。
   *
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 15
   */
  interface FilterClause {

    /**
     * 联系人数据过滤项。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    dataItem?: DataFilter;

    /**
     * 联系人姓名。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    name?: Array<FilterOptions>;

    /**
     * 联系人id。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    id?: Array<FilterOptions>;

    /**
     * 专注模式。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    focusModeList?: Array<FilterOptions>;
  }

  /**
   * 调用保存至已有联系人接口，选择联系人UI界面并完成编辑。使用Promise异步回调。
   *
   * @param { Context } context - 应用上下文Context。
   * @param { Contact } contact - 联系人信息。
   * @returns { Promise<number> } Promise对象。返回添加的联系人id。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found.
   * @throws { BusinessError } 16700001 - General error.
   * @throws { BusinessError } 16700101 - Failed to get value to contacts data.
   * @throws { BusinessError } 16700102 - Failed to set value to contacts data.
   * @throws { BusinessError } 16700103 - User cancel.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 15
   */
  function saveToExistingContactViaUI(context: Context, contact: Contact): Promise<number>;

  /**
   * 联系人查询过滤器。
   *
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 15
   */
  interface ContactSelectionFilter {

    /**
     * 过滤条件。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    filterClause: FilterClause;

    /**
     * 过滤类型。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    filterType: FilterType;
  }

  /**
   * 枚举，联系人过滤类型。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice
   * @since 15
   */
  enum FilterType {

    /**
     * 仅展示符合过滤条件的联系人。
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    SHOW_FILTER = 0,

    /**
     * 默认勾选符合过滤条件的联系人。
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    DEFAULT_SELECT = 1,

    /**
     * 默认勾选仅展示符合过滤条件的联系人。
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    SHOW_FILTER_AND_DEFAULT_SELECT = 2
  }

  /**
   * 枚举，过滤条件。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice
   * @since 15
   */
  enum FilterCondition {

    /**
     * 对应字段等于某值，值类型为string。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    EQUAL_TO = 1,

    /**
     * 对应字段不等于某值。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    NOT_EQUAL_TO = 2,

    /**
     * 对应字段值在某数组中，值类型为string。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    IN = 3,

    /**
     * 对应字段不为空。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    IS_NOT_NULL = 0,

    /**
     * 对应字段值不在某数组中。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    NOT_IN = 4,

    /**
     * 对应字段值包含某值，值类型为string
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    CONTAINS = 5
  }

  /**
   * 枚举，联系人数据字段。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice
   * @since 15
   */
  enum DataField {

    /**
     * 联系人电话。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    PHONE = 1,

    /**
     * 联系人单位。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    ORGANIZATION = 2,

    /**
     * 联系人邮箱。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @atomicservice
     * @since 15
     */
    EMAIL = 0
  }

  /**
   * 通过UI交互创建联系人。使用Promise异步回调。
   *
   * @param { Context } context - 应用上下文Context。
   * @param { Contact } contact - 联系人信息。
   * @returns { Promise<number> } Promise对象。返回添加的联系人id，即新建联系人时系统自动生成的唯一标识，一个id唯一对应一个联系人。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found.
   * @throws { BusinessError } 16700001 - General error.
   * @throws { BusinessError } 16700102 - Failed to set value to contacts data.
   * @throws { BusinessError } 16700103 - User cancel.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 15
   */
  function addContactViaUI(context: Context, contact: Contact): Promise<number>;

  /**
   * 查询所有联系人的数量。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @returns { Promise<int> } Promise对象。返回查询到的联系人数量。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16700001 - General error.
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice
   * @since 22
   */
  function queryContactsCount(context: Context): Promise<int>;

  /**
   * 批量添加联系人。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { Array<Contact> } contacts - 联系人信息数组。
   * @returns { Promise<Array<int>> } Promise对象，返回批量添加的联系人id数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16700001 - General error.
   * @throws { BusinessError } 16700002 - Invalid parameter value.
   * @syscap SystemCapability.Applications.ContactsData
   * @atomicservice
   * @since 23
   */
  function addContacts(context: Context, contacts: Array<Contact>): Promise<Array<int>>;

  /**
   * 检查是否有符合条件的通话记录，默认查询6小时以内的通话记录，仅针对运营商通话。使用Promise异步回调。
   *
   * @permission ohos.permission.CHECK_CALL_LOG
   * @param { Context } context - 应用上下文Context。
   * @param { string } phoneNumber - 联系人的电话号码。
   * @param { int } minDuration - 最短通话时长，单位为秒，取值范围大于0。
   * @returns { Promise<boolean> } Promise对象，返回是否有符合条件的通话记录，true代表有符合条件的，false代表没有。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16700001 - General error.
   * @throws { BusinessError } 16700002 - Invalid parameter value.
   * @syscap SystemCapability.Applications.ContactsData
   * @stagemodelonly
   * @atomicservice
   * @since 24
   */
  function hasMatchedCallLog(context: Context, phoneNumber: string, minDuration: int): Promise<boolean>;

  /**
   * 检查是否有符合条件的通话记录，仅针对运营商通话。使用Promise异步回调。
   *
   * @permission ohos.permission.CHECK_CALL_LOG
   * @param { Context } context - 应用上下文Context。
   * @param { string } phoneNumber - 联系人的电话号码。
   * @param { int } minDuration - 最短通话时长，单位为秒，取值范围大于0。
   * @param { int } withinTime - 表示从当前时间开始计算，通话的起始时间和结束时间应在此时间范围内，单位为秒。最多可设置6小时，超过6小时的默认以6小时查询。
   * @returns { Promise<boolean> } Promise对象，返回是否有符合条件的通话记录，true代表有符合条件的，false代表没有。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16700001 - General error.
   * @throws { BusinessError } 16700002 - Invalid parameter value.
   * @syscap SystemCapability.Applications.ContactsData
   * @stagemodelonly
   * @atomicservice
   * @since 24
   */
  function hasMatchedCallLog(context: Context, phoneNumber: string, minDuration: int, withinTime: int): Promise<boolean>;

  /**
   * 批量同步多个联系人至联系人数据库。
   *
   *  最多可批量同步400个联系人。调用方必须处于前台。
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @param { ContactSyncMode } mode - 表示联系人同步模式的类型。
   * @param { ContactSyncProgress } progress - 表示联系人同步进度的相关信息。
   * @param { Array<Contact> } contacts - 表示需要同步至数据库的联系人信息数组。
   * @returns { Promise<Array<int>> } 返回联系人创建结果的数组。有效的联系人ID (可为通过 {@link Contact#getId()}) 
   * 获得的值表示创建成功。
   * {@link Contact#INVALID_CONTACT_ID} 表示创建失败。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16700001 - General error.
   * @throws { BusinessError } 16700002 - Invalid parameter value.
   * @throws { BusinessError } 16700003 - Background usage is prohibited.
   * @throws { BusinessError } 16700004 - The number of contacts exceeds the limit.
   * @throws { BusinessError } 16700103 - User canceled.
   * @syscap SystemCapability.Applications.ContactsData
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0
   */
  function syncContacts(context: Context, mode: ContactSyncMode, progress: ContactSyncProgress, contacts: Array<Contact>): Promise<Array<int>>;

  /**
   * 查询调用应用程序正在进行的联系人同步信息。
   *
   * 如果返回的联系人同步信息为空，则调用方不进行联系人同步或联系人同步已完成。
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { Context } context - 应用上下文Context。
   * @returns { Promise<Array<ContactSyncInfo>> } 返回调用应用程序的联系人同步信息数组。如果没有正在同步的联系人，则返回null。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16700001 - General error.
   * @syscap SystemCapability.Applications.ContactsData
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0
   */
  function queryContactSyncInfo(context: Context): Promise<Array<ContactSyncInfo>>;

  /**
   * 通过UI交互批量导入多个联系人。
   *
   *  每次最多可导入100个联系人。
   *
   * @param { Context } context - 应用上下文Context。
   * @param { Array<Contact> } contacts - 表示待导入数据库的联系人信息数组。
   * @returns { Promise<Array<int>> } 返回联系人创建结果的数组。返回的联系人id有效（可通过[getId]{@link Contact#getId()}获取）表示创建成功。
   * 返回值为-1[INVALID_CONTACT_ID]{@link Contact.INVALID_CONTACT_ID} 表示创建失败。-2表示用户未选择该联系人。
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found.
   * @throws { BusinessError } 16700001 - General error.
   * @throws { BusinessError } 16700002 - Invalid parameter value.
   * @throws { BusinessError } 16700004 - The number of contacts exceeds the limit.
   * @throws { BusinessError } 16700103 - User canceled.
   * @syscap SystemCapability.Applications.Contacts
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0
   */
  function importContactsViaUI(context: Context, contacts: Array<Contact>): Promise<Array<int>>;

  /**
   * 同步模式的类型。
   * 
   * @syscap SystemCapability.Applications.ContactsData
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0
   */
  enum ContactSyncMode {

    /**
     * 表示将在数据库中插入或更新云端和本地之间不同的联系人。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
     */
    MODE_INCREMENTAL = 1,

    /**
     * 表示所有本地联系人将被云联系人替换。
     *
     * 当使用云覆盖本地模式进行批量同步时，在第一次批量同步期间会删除所有本地联系人（第三方联系人除外）。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
     */
    MODE_CLOUD_BASED = 2
  }

  /**
   * 联系人同步进度的信息。
   *
   * 包含同步ID、当前批次和总批次。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0
   */
  interface ContactSyncProgress {
    /**
     * 表示用于同步所有联系人的同步标识符。
     *
     * 该值应从0开始。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
     */
    syncId: int;

    /**
     * 表示要同步的当前联系人批次的标识符。
     *
     * 值的范围是从1到totalBatches。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
     */
    currentBatch: int;

    /**
    * 表示要同步的联系人批次总数。
    *
    * @syscap SystemCapability.Applications.ContactsData
    * @stagemodelonly
    * @atomicservice
    * @since 26.0.0
    */
    totalBatches: int;
  }

  /**
   * 调用应用程序相关的联系人同步的信息。
   *
   * @syscap SystemCapability.Applications.ContactsData
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0
   */
  interface ContactSyncInfo {

    /**
     * 联系人同步模式。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
    */
    mode: ContactSyncMode;
    /**
     * 表示用于同步所有联系人的同步标识符。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
    */
    syncId: int;

    /**
     * 表示已成功同步的联系人的批处理标识符数组。
     *
     * 值的范围是从1到totalBatches。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
    */
    completedBatches: Array<int>;

    /**
     * 指示要同步的联系人批次总数。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
    */
    totalBatches: int;

    /**
     * 指示联系人同步的最新时间戳（毫秒）。
     *
     * @syscap SystemCapability.Applications.ContactsData
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
     */
    lastSyncTime: int;
  }
}

export default contact;