/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * @file Universal Keystore
 * @kit UniversalKeystoreKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 向应用提供密钥库能力，包括密钥管理及密钥的密码学操作等功能。
 *
 * HUKS所管理的密钥可以由应用导入或者由应用调用HUKS接口生成。
 *
 * @syscap SystemCapability.Security.Huks.Core
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 8
 */
declare namespace huks {
  /**
   * 生成密钥。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.generateKeyItem<sup>9+</sup>]{@link huks.generateKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { string } keyAlias - 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。
   * @param { HuksOptions } options - 用于存放生成key所需TAG。
   * @param { AsyncCallback<HuksResult> } callback - 回调函数。当生成密钥成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.generateKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>)
   */
  function generateKey(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void;

  /**
   * 生成密钥。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.generateKeyItem<sup>9+</sup>]{@link huks.generateKeyItem(keyAlias: string, options: HuksOptions)}替代。
   *
   * @param { string } keyAlias - 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。
   * @param { HuksOptions } options - 用于存放生成key所需TAG。
   * @returns { Promise<HuksResult> } Promise对象，返回HuksResult。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.generateKeyItem(keyAlias: string, options: HuksOptions)
   */
  function generateKey(keyAlias: string, options: HuksOptions): Promise<HuksResult>;

  /**
   * 生成密钥。使用callback异步回调。
   *
   * 基于密钥不出[TEE](docroot://security/UniversalKeystoreKit/huks-concepts.md#可信执行环境tee)原则，此接口不会返回密钥材料内容，只用于表示此次调用是否成功。
   *
   * > **说明：**
   * >
   * > 生成[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。
   * @param { HuksOptions } options - 用于存放生成key所需TAG。其中密钥使用的算法、密钥用途、密钥长度为必选参数。
   *     指定[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别时，需要ohos.permission.ACCESS_SE_KEY权限。
   * @param { AsyncCallback<void> } callback - 回调函数。当生成密钥成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000013 - queried credential does not exist
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000011 - The queried entity does not exist. This may happen because
   *     the key resource ID specified by keyAlias has not been opened in the external crypto scenario. [since 26.0.0]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 26.0.0]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 26.0.0]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 26.0.0]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 26.0.0]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  function generateKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>): void;

  /**
   * 生成密钥。使用Promise异步回调。
   *
   * 基于密钥不出[TEE](docroot://security/UniversalKeystoreKit/huks-concepts.md#可信执行环境tee)原则，此接口不会返回密钥材料内容，只用于表示此次调用是否成功。
   *
   * > **说明：**
   * >
   * > 生成[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。
   * @param { HuksOptions } options - 用于存放生成key所需TAG。其中密钥使用的算法、密钥用途、密钥长度为必选参数。
   *     指定[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别时，需要ohos.permission.ACCESS_SE_KEY权限。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000013 - queried credential does not exist
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000011 - The queried entity does not exist. This may happen because
   *     the key resource ID specified by keyAlias has not been opened in the external crypto scenario. [since 26.0.0]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 26.0.0]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 26.0.0]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 26.0.0]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 26.0.0]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 11]
   * @since 9
   */
  function generateKeyItem(keyAlias: string, options: HuksOptions): Promise<void>;

  /**
   * 指定用户身份生成密钥，使用Promise方式异步返回结果。基于密钥不出[TEE](docroot://security/UniversalKeystoreKit/huks-concepts.md#可信执行环境tee)原则，通过
   * promise不会返回密钥材料内容，只用于表示此次调用是否成功。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。
   * @param { string } keyAlias - 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。
   * @param { HuksOptions } huksOptions -
   用于存放生成key所需的
   *     [属性标签](docroot://reference/apis-universal-keystore-kit/capi-native-huks-type-h.md#枚举)。其中密钥使用的算法、密钥用途、密钥长度为必选参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The algorithm mode is not supported.
   *     2. The group key is not supported.
   *     3. The crypto extension key is not supported.
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000013 - queried credential does not exist
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function generateKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<void>;

  /**
   * 删除密钥。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.deleteKeyItem<sup>9+</sup>]{@link huks.deleteKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { string } keyAlias - 密钥别名，应为生成key时传入的别名。
   * @param { HuksOptions } options - 用于删除时指定密钥的属性TAG。
   * @param { AsyncCallback<HuksResult> } callback - 回调函数。当删除密钥成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.deleteKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>)
   */
  function deleteKey(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void;

  /**
   * 删除密钥。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.deleteKeyItem<sup>9+</sup>]{@link huks.deleteKeyItem(keyAlias: string, options: HuksOptions)}替代。
   *
   * @param { string } keyAlias - 密钥别名，应为生成key时传入的别名。
   * @param { HuksOptions } options - 用于删除时指定密钥的属性TAG。
   * @returns { Promise<HuksResult> } Promise对象，返回HuksResult。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.deleteKeyItem(keyAlias: string, options: HuksOptions)
   */
  function deleteKey(keyAlias: string, options: HuksOptions): Promise<HuksResult>;

  /**
   * 删除密钥。使用callback异步回调。
   *
   * > **说明：**
   * > 删除[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - 密钥别名，应为生成key时传入的别名。
   * @param { HuksOptions } options - 用于删除密钥时指定密钥的属性，如使用[HuksAuthStorageLevel]{@link huks.HuksAuthStorageLevel}指定需删除密钥的安
   *     全级别，<br>可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除密钥成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  function deleteKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>): void;

  /**
   * 删除密钥。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 删除[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - 密钥别名，应为生成key时传入的别名。
   * @param { HuksOptions } options - 用于删除时指定密钥的属性TAG，如使用[HuksAuthStorageLevel]{@link huks.HuksAuthStorageLevel}指定需删除密钥的
   *     安全级别，<br>可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 11]
   * @since 9
   */
  function deleteKeyItem(keyAlias: string, options: HuksOptions): Promise<void>;

  /**
   * 指定用户身份删除密钥，使用Promise方式异步返回结果。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。
   * @param { string } keyAlias - 密钥别名，应为生成key时传入的别名。
   * @param { HuksOptions } huksOptions - 用于删除时指定密钥的属性TAG，如使用
   *     [HuksAuthStorageLevel]{@link @ohos.security.huks:huks.HuksAuthStorageLevel}指定需删除密钥的安全级别，<br>可传空，当API version ≥
   *     12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The group key is not supported.
   *     2. The crypto extension key is not supported. [since 23]
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function deleteKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<void>;

  /**
   * 导入明文密钥，使用Callback方式回调异步返回结果。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.importKeyItem<sup>9+</sup>]{@link huks.importKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { string } keyAlias - 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。
   * @param { HuksOptions } options - 用于导入时所需TAG和需要导入的密钥。
   * @param { AsyncCallback<HuksResult> } callback - 回调函数。当导入密钥成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.importKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>)
   */
  function importKey(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void;

  /**
   * 导入明文密钥。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.importKeyItem<sup>9+</sup>]{@link huks.importKeyItem(keyAlias: string, options: HuksOptions)}替代。
   *
   * @param { string } keyAlias - 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。
   * @param { HuksOptions } options - 用于导入时所需TAG和需要导入的密钥。
   * @returns { Promise<HuksResult> } Promise对象，返回HuksResult。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.importKeyItem(keyAlias: string, options: HuksOptions)
   */
  function importKey(keyAlias: string, options: HuksOptions): Promise<HuksResult>;

  /**
   * Imports a key in plaintext. This API uses an asynchronous callback to return the result.
   *
   * @param { string } keyAlias - Alias of the key. The value can contain up to 128 bytes and should not include
   *     sensitive data such as personal information.
   * @param { HuksOptions } options - Tags required for the import and key to import. The algorithm, key purpose, and
   *     key length are mandatory.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist [since 9 - 19]
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000013 - queried credential does not exist
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  function importKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>): void;

  /**
   * Imports a key in plaintext. This API uses a promise to return the result.
   *
   * @param { string } keyAlias - Alias of the key. The value can contain up to 128 bytes and should not include
   *     sensitive data such as personal information.
   * @param { HuksOptions } options - Tags required for the import and key to import. The algorithm, key purpose, and
   *     key length are mandatory.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist [since 9 - 19]
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000013 - queried credential does not exist
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 11]
   * @since 9
   */
  function importKeyItem(keyAlias: string, options: HuksOptions): Promise<void>;

  /**
   * 指定用户身份导入明文密钥，使用Promise方式异步返回结果。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。
   * @param { string } keyAlias - 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。
   * @param { HuksOptions } huksOptions - 用于导入时所需TAG和需要导入的密钥。其中密钥使用的算法、密钥用途、密钥长度为必选参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The algorithm mode is not supported.
   *     2. The group key is not supported.
   *     3. The crypto extension key is not supported.
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000013 - queried credential does not exist
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function importKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<void>;

  /**
   * Imports a wrapped key. This API uses an asynchronous callback to return the result.
   *
   * > **说明：**
   * >
   * > 导入[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别加密密钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - Alias of the wrapped key to import.
   * @param { string } wrappingKeyAlias - Alias of the data used to unwrap the key imported.
   * @param { HuksOptions } options - Tags required for the import and the wrapped key to import. The algorithm, key
   *     purpose, and key length are mandatory.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, no
   *     **err** value is returned; otherwise, an error code is returned.
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000013 - queried credential does not exist
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 26.0.0]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 26.0.0]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 26.0.0]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 26.0.0]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 9
   */
  function importWrappedKeyItem(
    keyAlias: string,
    wrappingKeyAlias: string,
    options: HuksOptions,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Import Wrapped Key As User.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - User ID.
   * @param { string } keyAlias - Alias of the wrapped key to import.
   * @param { string } wrappingKeyAlias - Alias of the key used to decrypt the wrapped key.
   * @param { HuksOptions } huksOptions - Options for importing the wrapped key. The algorithm, key purpose, and key
   *     length are mandatory.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The algorithm mode is not supported.
   *     2. The group key is not supported.
   *     3. The crypto extension key is not supported.
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000013 - queried credential does not exist
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function importWrappedKeyItemAsUser(
    userId: number, keyAlias: string,
    wrappingKeyAlias: string,
    huksOptions: HuksOptions
  ): Promise<void>;

  /**
   * Imports a wrapped key. This API uses a promise to return the result.
   *
   * > **说明：**
   * >
   * > 导入[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别加密密钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - Alias of the wrapped key to import.
   * @param { string } wrappingKeyAlias - Alias of the data used to unwrap the key imported.
   * @param { HuksOptions } options - Tags required for the import and the wrapped key to import. The algorithm, key
   *     purpose, and key length are mandatory.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000013 - queried credential does not exist
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 26.0.0]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 26.0.0]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 26.0.0]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 26.0.0]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  function importWrappedKeyItem(keyAlias: string, wrappingKeyAlias: string, options: HuksOptions): Promise<void>;

  /**
   * 导出密钥，使用Callback方式回调异步返回的结果。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.exportKeyItem<sup>9+</sup>]{@link huks.exportKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>)}
   * > 替代。
   *
   * @param { string } keyAlias - 密钥别名，应与所用密钥生成时使用的别名相同。
   * @param { HuksOptions } options - 空对象（此处传空即可）。
   * @param { AsyncCallback<HuksResult> } callback - 回调函数。当导出密钥成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。HuksResult的
   *     outData返回从密钥中导出的公钥。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.exportKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>)
   */
  function exportKey(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void;

  /**
   * 导出密钥。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.exportKeyItem<sup>9+</sup>]{@link huks.exportKeyItem(keyAlias: string, options: HuksOptions)}替代。
   *
   * @param { string } keyAlias - 密钥别名，应与所用密钥生成时使用的别名相同。
   * @param { HuksOptions } options - 空对象（此处传空即可）。
   * @returns { Promise<HuksResult> } Promise对象，返回HuksResult。HuksResult的outData返回从HUKS中导出的公钥。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.exportKeyItem(keyAlias: string, options: HuksOptions)
   */
  function exportKey(keyAlias: string, options: HuksOptions): Promise<HuksResult>;

  /**
   * 导出密钥。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 导出[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别公钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - 密钥别名，应与所用密钥生成时使用的别名相同。
   * @param { HuksOptions } options - 用于导出密钥时指定密钥的属性，如使用[HuksAuthStorageLevel]{@link huks.HuksAuthStorageLevel}指定需导出密钥的安
   *     全级别，<br>可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。
   * @param { AsyncCallback<HuksReturnResult> } callback - 回调函数。当导出密钥成功时，err为undefined，data为获取到的HuksReturnResult；否则为错误对象
   *     。HuksReturnResult中的outData返回从HUKS中导出的公钥。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing [since 9 - 11]
   * @throws { BusinessError } 12000003 - algorithm param is invalid [since 9 - 11]
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 26.0.0]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 26.0.0]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 9
   */
  function exportKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>): void;

  /**
   * 指定用户身份导出密钥，使用Promise方式回调异步返回的结果。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。
   * @param { string } keyAlias - 密钥别名，应与所用密钥生成时使用的别名相同。
   * @param { HuksOptions } huksOptions - 空对象（此处传空即可）。
   * @returns { Promise<HuksReturnResult> } Promise对象。 当调用成功时，HuksReturnResult的outData成员非空，为从密钥中导出的公钥，否则为失败。
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The algorithm mode is not supported.
   *     2. The group key is not supported.
   *     3. The crypto extension key is not supported.
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function exportKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<HuksReturnResult>;

  /**
   * 导出密钥。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 导出[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别公钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - 密钥别名，应与所用密钥生成时使用的别名相同。
   * @param { HuksOptions } options - 空对象（此处传空即可）。
   * @returns { Promise<HuksReturnResult> } Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的outData成员为从密钥中导出的公钥。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing [since 9 - 11]
   * @throws { BusinessError } 12000003 - algorithm param is invalid [since 9 - 11]
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 26.0.0]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 26.0.0]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  function exportKeyItem(keyAlias: string, options: HuksOptions): Promise<HuksReturnResult>;

  /**
   * 获取密钥属性。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.getKeyItemProperties<sup>9+</sup>]{@link huks.getKeyItemProperties( keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult> )}
   * > 替代。
   *
   * @param { string } keyAlias - 密钥别名，应与所用密钥生成时使用的别名相同。
   * @param { HuksOptions } options - 空对象（此处传空即可）。
   * @param { AsyncCallback<HuksResult> } callback - 回调函数。当获取密钥属性成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.getKeyItemProperties( keyAlias: string, options: HuksOptions,
   *     callback: AsyncCallback<HuksReturnResult> )
   */
  function getKeyProperties(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void;

  /**
   * 获取密钥属性。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.getKeyItemProperties<sup>9+</sup>]{@link huks.getKeyItemProperties(keyAlias: string, options: HuksOptions)}
   * > 替代。
   *
   * @param { string } keyAlias - 密钥别名，应与所用密钥生成时使用的别名相同。
   * @param { HuksOptions } options - 空对象（此处传空即可）。
   * @returns { Promise<HuksResult> } Promise对象，返回HuksResult。HuksResult的properties返回密钥参数。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.getKeyItemProperties(keyAlias: string, options: HuksOptions)
   */
  function getKeyProperties(keyAlias: string, options: HuksOptions): Promise<HuksResult>;

  /**
   * Obtains key properties. This API uses an asynchronous callback to return the result.
   *
   * > **说明：**
   * >
   * > 获取[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥属性需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - Key alias, which must be the same as the alias used when the key was generated.
   * @param { HuksOptions } options - Empty object (leave this parameter empty).
   * @param { AsyncCallback<HuksReturnResult> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined**, and **data** is the obtained **HuksReturnResult**. Otherwise, **err** is
   *     an error object. **properties** of **HuksReturnResult** are the parameters required for generating a key.
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing [since 9 - 11]
   * @throws { BusinessError } 12000003 - algorithm param is invalid [since 9 - 11]
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 9
   */
  function getKeyItemProperties(
    keyAlias: string,
    options: HuksOptions,
    callback: AsyncCallback<HuksReturnResult>
  ): void;

  /**
   * Get properties of the key as user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - User ID.
   * @param { string } keyAlias - Key alias, which must be the same as the alias used when the key was generated.
   * @param { HuksOptions } huksOptions - Empty object (leave this parameter empty).
   * @returns { Promise<HuksReturnResult> } Promise used to return the result. If the operation is successful,
   *     **properties** in **HuksReturnResult** holds the parameters required for generating the key.
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The algorithm mode is not supported.
   *     2. The group key is not supported.
   *     3. The crypto extension key is not supported.
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function getKeyItemPropertiesAsUser(
    userId: number,
    keyAlias: string,
    huksOptions: HuksOptions
  ): Promise<HuksReturnResult>;

  /**
   * 获取密钥属性。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 获取[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥属性需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - 密钥别名，应与所用密钥生成时使用的别名相同。
   * @param { HuksOptions } options - 空对象（此处传空即可）。
   * @returns { Promise<HuksReturnResult> } Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的properties成员为获取的密钥属性信息。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing [since 9 - 11]
   * @throws { BusinessError } 12000003 - algorithm param is invalid [since 9 - 11]
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  function getKeyItemProperties(keyAlias: string, options: HuksOptions): Promise<HuksReturnResult>;

  /**
   * 判断密钥是否存在。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.isKeyItemExist<sup>9+</sup>]{@link huks.isKeyItemExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>)}
   * > 替代。
   *
   * @param { string } keyAlias - 所需查找的密钥的别名。
   * @param { HuksOptions } options - 用于查询时指定密钥的属性TAG。
   * @param { AsyncCallback<boolean> } callback - 回调函数。false代表密钥不存在，true代表密钥存在。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.isKeyItemExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>)
   */
  function isKeyExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>): void;

  /**
   * 判断密钥是否存在。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.isKeyItemExist<sup>9+</sup>]{@link huks.isKeyItemExist(keyAlias: string, options: HuksOptions)}替代。
   *
   * @param { string } keyAlias - 所需查找的密钥的别名。
   * @param { HuksOptions } options - 用于查询时指定密钥的属性TAG。
   * @returns { Promise<boolean> } Promise对象。false代表密钥不存在，true代表密钥存在。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.isKeyItemExist(keyAlias: string, options: HuksOptions)
   */
  function isKeyExist(keyAlias: string, options: HuksOptions): Promise<boolean>;

  /**
   * 判断密钥是否存在。使用callback异步回调。
   *
   * 若密钥不存在，则抛出错误码为12000011的异常。
   *
   * @param { string } keyAlias - 所需查找的密钥的别名。
   * @param { HuksOptions } options - 用于查询时指定密钥的属性TAG，如使用[HuksAuthStorageLevel]{@link huks.HuksAuthStorageLevel}指定需查询密钥的
   *     安全级别，<br>可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。
   * @param { AsyncCallback<boolean> } callback - 回调函数。密钥存在时，data为true；密钥不存在时，data为undefined，err中的错误码为12000011，并附带对应错误描述
   *     。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @since 9
   */
  function isKeyItemExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>): void;

  /**
   * 判断密钥是否存在。使用Promise异步回调。
   *
   * 若密钥不存在，则抛出错误码为12000011的异常。
   *
   * @param { string } keyAlias - 所需查找的密钥的别名。
   * @param { HuksOptions } options - 用于查询时指定密钥的属性TAG，如使用[HuksAuthStorageLevel]{@link huks.HuksAuthStorageLevel}指定需查询密钥的
   *     安全级别，<br>可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。
   * @returns { Promise<boolean> } Promise对象。密钥存在时，data为true；密钥不存在时，err中的错误码为12000011，并附带对应错误描述。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 9
   */
  function isKeyItemExist(keyAlias: string, options: HuksOptions): Promise<boolean>;

  /**
   * 判断密钥是否存在。使用callback异步回调。
   *
   * 若密钥不存在，则通过callback返回false。
   *
   * @param { string } keyAlias - 所需查找的密钥的别名。
   * @param { HuksOptions } options - 用于查询时指定密钥的属性TAG，如使用[HuksAuthStorageLevel]{@link huks.HuksAuthStorageLevel}指定需查询密钥的
   *     安全级别，<br>可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。
   * @param { AsyncCallback<boolean> } callback - 回调函数。若密钥存在，data为true，若密钥不存在，data为false。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice
   * @since 11
   */
  function hasKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>): void;

  /**
   * 指定用户身份判断密钥是否存在，使用Promise回调异步返回结果。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。
   * @param { string } keyAlias - 所需查找的密钥的别名。
   * @param { HuksOptions } huksOptions - 用于查询时指定密钥的属性TAG，如使用
   *     [HuksAuthStorageLevel]{@link @ohos.security.huks:huks.HuksAuthStorageLevel}指定需查询密钥的安全级别，<br>可传空，当API version ≥
   *     12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。
   * @returns { Promise<boolean> } Promise对象。若密钥存在，返回值为true，若密钥不存在，返回值为false。
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The group key is not supported.
   *     2. The crypto extension key is not supported. [since 23]
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function hasKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<boolean>;

  /**
   * 判断密钥是否存在。使用Promise异步回调。
   *
   * 若密钥不存在，则通过Promise返回false。
   *
   * @param { string } keyAlias - 所需查找的密钥的别名。
   * @param { HuksOptions } options - 用于查询时指定密钥的属性TAG，如使用[HuksAuthStorageLevel]{@link huks.HuksAuthStorageLevel}指定需查询密钥的
   *     安全级别，<br>可传空，当API version ≥ 12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。
   * @returns { Promise<boolean> } Promise对象。若密钥存在，返回值为true，若密钥不存在，返回值为false。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 11
   */
  function hasKeyItem(keyAlias: string, options: HuksOptions): Promise<boolean>;

  /**
   * init操作密钥接口。使用callback异步回调。
   *
   * huks.init、huks.update、huks.finish为三段式接口，需要一起使用。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.initSession<sup>9+</sup>]{@link huks.initSession(keyAlias: string, options: HuksOptions)}替代。
   *
   * @param { string } keyAlias - Init操作密钥的别名。
   * @param { HuksOptions } options - Init操作的参数集合。
   * @param { AsyncCallback<HuksHandle> } callback - 回调函数。当密钥操作init成功时，err为undefined，data为获取到的HuksHandle；否则为错误对象。
   *     HuksHandle的handle返回init生成的handle。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.initSession(keyAlias: string, options: HuksOptions)
   */
  function init(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksHandle>): void;

  /**
   * init操作密钥接口。使用Promise异步回调。
   *
   * huks.init、huks.update、huks.finish为三段式接口，需要一起使用。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.initSession<sup>9+</sup>]{@link huks.initSession(keyAlias: string, options: HuksOptions)}替代。
   *
   * @param { string } keyAlias - Init操作密钥的别名。
   * @param { HuksOptions } options - Init参数集合。
   * @returns { Promise<HuksHandle> } Promise对象，返回HuksResult。HuksHandle的handle返回init生成的handle。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.initSession(keyAlias: string, options: HuksOptions)
   */
  function init(keyAlias: string, options: HuksOptions): Promise<HuksHandle>;

  /**
   * initSession操作密钥接口。使用callback异步回调。
   *
   * huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。
   *
   * > **说明：**
   * >
   * > 初始化[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥会话需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - initSession操作密钥的别名。
   * @param { HuksOptions } options - initSession操作的参数集合。
   * @param { AsyncCallback<HuksSessionHandle> } callback - 回调函数。当密钥操作init成功时，err为undefined，data为获取到的HuksSessionHandle；否
   *     则为错误对象。HuksSessionHandle的handle返回initSession生成的handle。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine or UKey driver
   * @throws { BusinessError } 12000010 - the number of sessions has reached limit
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the input parameter is invalid. Possible causes:
   *     1. the aead length is invalid.
   *     2. the group id specified by the access group tag is invalid. [since 22]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 22]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 22]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 22]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 22]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  function initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>): void;

  /**
   * initSession操作密钥接口。使用Promise异步回调。
   *
   * huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。
   *
   * > **说明：**
   * >
   * > 初始化[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥会话需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * @param { string } keyAlias - initSession操作密钥的别名。
   * @param { HuksOptions } options - initSession参数集合。
   * @returns { Promise<HuksSessionHandle> } Promise对象，返回HuksSessionHandle。HuksSessionHandle的handle返回initSession生成的
   *     handle。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine or UKey driver
   * @throws { BusinessError } 12000010 - the number of sessions has reached limit
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the input parameter is invalid. Possible causes:
   *     1. the aead length is invalid.
   *     2. the group id specified by the access group tag is invalid. [since 22]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 22]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 22]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 22]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 22]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 11]
   * @since 9
   */
  function initSession(keyAlias: string, options: HuksOptions): Promise<HuksSessionHandle>;

  /**
   * 指定用户身份操作密钥接口，使用Promise方式异步返回结果。huks.initSessionAsUser, huks.updateSession, huks.finishSession为三段式接口，需要一起使用。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。
   * @param { string } keyAlias - initSessionAsUser操作密钥的别名。
   * @param { HuksOptions } huksOptions - initSessionAsUser参数集合。
   * @returns { Promise<HuksSessionHandle> } Promise对象。将initSessionAsUser操作返回的handle添加到密钥管理系统的回调。
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The algorithm mode is not supported.
   *     2. The group key is not supported.
   *     3. The crypto extension key is not supported.
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000010 - the number of sessions has reached limit
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function initSessionAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<HuksSessionHandle>;

  /**
   * update操作密钥接口。使用callback异步回调。
   *
   * huks.init、huks.update、huks.finish为三段式接口，需要一起使用。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.updateSession<sup>9+</sup>]{@link huks.updateSession( handle: long, options: HuksOptions, token: Uint8Array, callback: AsyncCallback<HuksReturnResult> )}
   * > 替代。
   *
   * @param { number } handle - Update操作的uint64类型的handle值。
   * @param { Uint8Array } token - Update操作的token。
   * @param { HuksOptions } options - Update操作的参数集合。
   * @param { AsyncCallback<HuksResult> } callback - 回调函数。当密钥操作update成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.updateSession( handle: long, options: HuksOptions, token: Uint8Array,
   *     callback: AsyncCallback<HuksReturnResult> )
   */
  function update(handle: number, token?: Uint8Array, options: HuksOptions, callback: AsyncCallback<HuksResult>): void;

  /**
   * update操作密钥接口。使用Promise异步回调。
   *
   * huks.init、huks.update、huks.finish为三段式接口，需要一起使用。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.updateSession<sup>9+</sup>]{@link huks.updateSession(handle: long, options: HuksOptions, token?: Uint8Array)}
   * > 替代。
   *
   * @param { number } handle - Update操作的uint64类型的handle值。
   * @param { Uint8Array } token - Update操作的token。
   * @param { HuksOptions } options - Update操作的参数集合。
   * @returns { Promise<HuksResult> } Promise对象，返回HuksResult。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.updateSession(handle: long, options: HuksOptions, token?: Uint8Array)
   */
  function update(handle: number, token?: Uint8Array, options: HuksOptions): Promise<HuksResult>;

  /**
   * updateSession操作密钥接口。使用callback异步回调。
   *
   * huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。
   *
   * @param { long } handle - updateSession操作的uint64类型的handle值。
   * @param { HuksOptions } options - updateSession的参数集合。
   * @param { AsyncCallback<HuksReturnResult> } callback - 回调函数。当密钥操作update成功时，err为undefined，data为获取到的HuksReturnResult；否
   *     则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine or UKey driver
   * @throws { BusinessError } 12000007 - this credential is already invalidated permanently
   * @throws { BusinessError } 12000008 - verify auth token failed
   * @throws { BusinessError } 12000009 - auth token is already timeout
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000020 - the provider operation failed [since 22]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 22]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 22]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 22]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  function updateSession(handle: long, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>): void;

  /**
   * Updates the key operation by segment. This API uses an asynchronous callback to return the result.
   * huks.initSession, huks.updateSession, and huks.finishSession must be used together.
   *
   * @param { long } handle - Handle of the **updateSession** operation, which is of the uint64 type.
   * @param { HuksOptions } options - Parameter set used for the **updateSession** operation.
   * @param { Uint8Array } token - Authentication token for
   *     [refined key access control](docroot://security/UniversalKeystoreKit/huks-identity-authentication-overview.md#refined-key-access-control)
   *     .
   * @param { AsyncCallback<HuksReturnResult> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined**, and **data** is the obtained **HuksReturnResult**. Otherwise, **err** is
   *     an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000007 - this credential is already invalidated permanently
   * @throws { BusinessError } 12000008 - verify auth token failed
   * @throws { BusinessError } 12000009 - auth token is already timeout
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  function updateSession(
    handle: long,
    options: HuksOptions,
    token: Uint8Array,
    callback: AsyncCallback<HuksReturnResult>
  ): void;

  /**
   * updateSession操作密钥接口。使用Promise异步回调。
   *
   * huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。
   *
   * @param { long } handle - updateSession操作的uint64类型的handle值。
   * @param { HuksOptions } options - updateSession操作的参数集合。
   * @param { Uint8Array } token - 密钥
   *     [二次认证密钥访问控制](docroot://security/UniversalKeystoreKit/huks-identity-authentication-overview.md#二次认证密钥访问控制)的用户鉴权证
   *     明(AuthToken)，不填表示不进行二次认证密钥访问控制。
   * @returns { Promise<HuksReturnResult> } Promise对象，返回调用接口的结果。调用成功时，若使用AES/DES/3DES/SM4密钥加解密时，HuksReturnResult的outData
   *     成员将返回加密后的密文或者解密后的明文；否则outData为空。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine or UKey driver
   * @throws { BusinessError } 12000007 - this credential is already invalidated permanently
   * @throws { BusinessError } 12000008 - verify auth token failed
   * @throws { BusinessError } 12000009 - auth token is already timeout
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000020 - the provider operation failed [since 22]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 22]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 22]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 22]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 11]
   * @since 9
   */
  function updateSession(handle: long, options: HuksOptions, token?: Uint8Array): Promise<HuksReturnResult>;

  /**
   * finish操作密钥接口。使用callback异步回调。
   *
   * huks.init、huks.update、huks.finish为三段式接口，需要一起使用。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.finishSession<sup>9+</sup>]{@link huks.finishSession(handle: number, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>)}
   * > 替代。
   *
   * @param { number } handle - Finish操作的uint64类型的handle值。
   * @param { HuksOptions } options - Finish的参数集合。
   * @param { AsyncCallback<HuksResult> } callback - 回调函数。当密钥操作finish成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.finishSession(handle: number, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>)
   */
  function finish(handle: number, options: HuksOptions, callback: AsyncCallback<HuksResult>): void;

  /**
   * finish操作密钥接口。使用Promise异步回调。
   *
   * huks.init、huks.update、huks.finish为三段式接口，需要一起使用。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.finishSession<sup>9+</sup>]{@link huks.finishSession( handle: number, options: HuksOptions, token: Uint8Array, callback: AsyncCallback<HuksReturnResult> )}
   * > 替代。
   *
   * @param { number } handle - Finish操作的uint64类型的handle值。
   * @param { HuksOptions } options - Finish操作的参数集合。
   * @returns { Promise<HuksResult> } Promise对象，返回HuksResult。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.finishSession( handle: number, options: HuksOptions, token: Uint8Array,
   *     callback: AsyncCallback<HuksReturnResult> )
   */
  function finish(handle: number, options: HuksOptions): Promise<HuksResult>;

  /**
   * finishSession操作密钥接口。使用callback异步回调。
   *
   * huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。
   *
   * @param { long } handle - finishSession操作的uint64类型的handle值。
   * @param { HuksOptions } options - finishSession的参数集合。
   * @param { AsyncCallback<HuksReturnResult> } callback - 回调函数。当密钥操作finish成功时，err为undefined，data为获取到的HuksReturnResult；否
   *     则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000007 - this credential is already invalidated permanently
   * @throws { BusinessError } 12000008 - verify auth token failed
   * @throws { BusinessError } 12000009 - auth token is already timeout
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 22]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 22]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 22]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 22]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  function finishSession(handle: number, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>): void;

  /**
   * Finishes the key operation. This API uses an asynchronous callback to return the result.
   * huks.initSession, huks.updateSession, and huks.finishSession must be used together.
   *
   * @param { number } handle - Handle for the finishSession operation.
   *     <br>取值限定为整数。
   * @param { HuksOptions } options - Parameter set used for the **finishSession** operation.
   * @param { Uint8Array } token - Authentication token for
   *     [refined key access control](docroot://security/UniversalKeystoreKit/huks-identity-authentication-overview.md#refined-key-access-control)
   *     .
   * @param { AsyncCallback<HuksReturnResult> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined**, and **data** is the obtained **HuksReturnResult**. Otherwise, **err** is
   *     an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000007 - this credential is already invalidated permanently
   * @throws { BusinessError } 12000008 - verify auth token failed
   * @throws { BusinessError } 12000009 - auth token is already timeout
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  function finishSession(
    handle: number,
    options: HuksOptions,
    token: Uint8Array,
    callback: AsyncCallback<HuksReturnResult>
  ): void;

  /**
   * finishSession操作密钥接口。使用Promise异步回调。
   *
   * huks.initSession、huks.updateSession、huks.finishSession为三段式接口，需要一起使用。
   *
   * @param { long } handle - finishSession操作的uint64类型的handle值。
   * @param { HuksOptions } options - finishSession操作的参数集合。
   * @param { Uint8Array } token - 密钥
   *     [二次认证密钥访问控制](docroot://security/UniversalKeystoreKit/huks-identity-authentication-overview.md#二次认证密钥访问控制)的用户鉴权证
   *     明(AuthToken)，不填表示不进行二次认证密钥访问控制。
   * @returns { Promise<HuksReturnResult> } Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的outData成员为对应操作返回的数据。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000007 - this credential is already invalidated permanently
   * @throws { BusinessError } 12000008 - verify auth token failed
   * @throws { BusinessError } 12000009 - auth token is already timeout
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000017 - The key with the same alias already exists [since 20]
   * @throws { BusinessError } 12000020 - the provider operation failed [since 22]
   * @throws { BusinessError } 12000021 - the UKey PIN is locked [since 22]
   * @throws { BusinessError } 12000023 - the UKey PIN not authenticated [since 22]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 22]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 11]
   * @since 9
   */
  function finishSession(handle: number, options: HuksOptions, token?: Uint8Array): Promise<HuksReturnResult>;

  /**
   * abort终止密钥操作。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.abortSession<sup>9+</sup>]{@link huks.abortSession(handle: number, options: HuksOptions, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { number } handle - Abort操作的uint64类型的handle值。
   * @param { HuksOptions } options - Abort操作的参数集合。
   * @param { AsyncCallback<HuksResult> } callback - 回调函数。当密钥操作abort成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.abortSession(handle: number, options: HuksOptions, callback: AsyncCallback<void>)
   */
  function abort(handle: number, options: HuksOptions, callback: AsyncCallback<HuksResult>): void;

  /**
   * abort终止密钥操作。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [huks.abortSession<sup>9+</sup>]{@link huks.abortSession(handle: number, options: HuksOptions)}替代。
   *
   * @param { number } handle - Abort操作的uint64类型的handle值。
   * @param { HuksOptions } options - Abort操作的参数集合。
   * @returns { Promise<HuksResult> } Promise对象，返回HuksResult。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.abortSession(handle: number, options: HuksOptions)
   */
  function abort(handle: number, options: HuksOptions): Promise<HuksResult>;

  /**
   * abortSession终止密钥操作。使用callback异步回调。
   *
   * @param { long } handle - abortSession操作的uint64类型的handle值。
   * @param { HuksOptions } options - abortSession操作的参数集合。
   * @param { AsyncCallback<void> } callback - 回调函数。当密钥操作abort成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine or UKey driver
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000020 - the provider operation failed [since 22]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 22]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  function abortSession(handle: number, options: HuksOptions, callback: AsyncCallback<void>): void;

  /**
   * abortSession终止密钥操作。使用Promise异步回调。
   *
   * @param { long } handle - abortSession操作的uint64类型的handle值。
   * @param { HuksOptions } options - abortSession操作的参数集合。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine or UKey driver
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000020 - the provider operation failed [since 22]
   * @throws { BusinessError } 12000024 - the provider or UKey is busy [since 22]
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 11]
   * @since 9
   */
  function abortSession(handle: number, options: HuksOptions): Promise<void>;

  /**
   * 获取密钥证书。使用callback异步回调。
   *
   * <!--RP6-->
   * > **说明：**
   * >
   * > 在使用非匿名证书密钥证明时生成的证书链可能包含设备标识符（具体实现需向厂商确认），如包含设备标识符，其使用、留存、销毁由开发者决定，建议开发者在其隐私声明中对其使用目的、留存策略和销毁方式进行说明。
   * <!--RP6End-->
   *
   * @permission ohos.permission.ATTEST_KEY
   * @param { string } keyAlias - 密钥别名，存放待获取证书密钥的别名。
   * @param { HuksOptions } options - 用于获取证书时指定所需参数与数据。
   * @param { AsyncCallback<HuksReturnResult> } callback - 回调函数。当获取密钥证书成功时，err为undefined，data为获取到的HuksReturnResult；否则为错误
   *     对象。
   * @throws { BusinessError } 201 - check permission failed
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 9
   */
  function attestKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>): void;

  /**
   * 指定用户身份获取密钥证书，使用Promise方式异步返回结果。
   *
   * @permission ohos.permission.ATTEST_KEY and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。
   * @param { string } keyAlias - 密钥别名，存放待获取证书密钥的别名。
   * @param { HuksOptions } huksOptions - 用于获取证书时指定所需参数与数据。
   * @returns { Promise<HuksReturnResult> } Promise对象。当调用成功时，HuksReturnResult的certChains成员非空，为获取到的证书链，否则为失败。
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The algorithm mode is not supported.
   *     2. The group key is not supported.
   *     3. The crypto extension key is not supported.
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function attestKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<HuksReturnResult>;

  /**
   * 获取密钥证书。使用Promise异步回调。
   *
   * <!--RP6-->
   * > **说明：**
   * >
   * > 在使用非匿名证书密钥证明时生成的证书链可能包含设备标识符（具体实现需向厂商确认），如包含设备标识符，其使用、留存、销毁由开发者决定，建议开发者在其隐私声明中对其使用目的、留存策略和销毁方式进行说明。
   * <!--RP6End-->
   *
   * @permission ohos.permission.ATTEST_KEY
   * @param { string } keyAlias - 密钥别名，存放待获取证书密钥的别名。
   * @param { HuksOptions } options - 用于获取证书时指定所需参数与数据。
   * @returns { Promise<HuksReturnResult> } Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的certChains成员为获取到的证书链。
   * @throws { BusinessError } 201 - check permission failed
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 9
   */
  function attestKeyItem(keyAlias: string, options: HuksOptions): Promise<HuksReturnResult>;

  /**
  * 获取匿名化密钥证书。使用callback异步回调。
   *
   * 该操作需要联网进行，且耗时较长。返回12000012错误码时，可能是由于网络异常导致。此时如果没有联网，需要提示用户网络没有连接，如果已经联网，可能是由于网络抖动导致失败，建议重试。
   *
   * > **说明：**
   * >
   * > 获取[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥证书需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * <!--RP1--><!--RP1End-->
   *
   * @param { string } keyAlias - 密钥别名，存放待获取证书密钥的别名。
   * @param { HuksOptions } options - 用于获取证书时指定所需参数与数据。
   * @param { AsyncCallback<HuksReturnResult> } callback - 回调函数。当获取匿名化密钥证书成功时，err为undefined，data为获取到的HuksReturnResult；否则
   *     为错误对象。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 11
   */
  function anonAttestKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>): void;

  /**
   * 指定用户身份获取匿名化密钥证书，使用Promise方式异步返回结果。
   *
   * 该操作需要联网进行，且耗时较长。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。
   * @param { string } keyAlias - 密钥别名，存放待获取证书密钥的别名。
   * @param { HuksOptions } huksOptions - 用于获取证书时指定所需参数与数据。
   * @returns { Promise<HuksReturnResult> } Promise对象。当调用成功时，HuksReturnResult的certChains成员非空，为获取到的证书链，否则为失败。
   * @throws { BusinessError } 201 - the application permission is not sufficient, which may be caused by lack of
   *     <br>cross-account permission, or the system has not been unlocked by user, or the user does not exist.
   * @throws { BusinessError } 202 - non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - Feature is not supported. Possible causes:
   *     1. The algorithm mode is not supported.
   *     2. The group key is not supported.
   *     3. The crypto extension key is not supported.
   * @throws { BusinessError } 12000002 - algorithm param is missing
   * @throws { BusinessError } 12000003 - algorithm param is invalid
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 12
   */
  function anonAttestKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<HuksReturnResult>;

  /**
   * 离线获取匿名证明证书。该接口使用promise返回结果。此操作不需要每次都需要网络连接，
   * 比anonAttestKeyItemAsUser函数性能高。
   *
   * > **说明**
   * > >
   * > -离线密钥证明依赖于网络。您需要定期连接网络才能使用此API更新离线证书。
   * > >
   * > -离线匿名密钥证明要求本地时间准确。否则，可能导致对端无法正常工作。验证证书过期。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID
   *     <br>取值范围为全体整数。
   * @param { string } keyAlias - 密钥的别名。
   * @param { HuksParam[] } params - 表示密钥证明操作的选项。
   * @returns { Promise<HuksReturnResult> } Promise用于返回结果。如果操作成功。
   *     HuksReturnResult中的certChains包含获取到的证书链。
   * @throws { BusinessError } 201 - The app does not have sufficient permissions. Possible causes: The
   *     cross-account permission is not granted, the system is not unlocked by the user, or the user does not
   *     exist.
   * @throws { BusinessError } 202 - Non-system apps use system APIs.
   * @throws { BusinessError } 801 - The API is not supported.
   * @throws { BusinessError } 12000001 - The function is not supported. Possible causes:
   *     1. The algorithm mode is not supported.
   *     2. The group key is not supported.
   *     3. The extended encryption key is not supported.
   * @throws { BusinessError } 12000002 - The algorithm parameter is missing.
   * @throws { BusinessError } 12000003 - The algorithm parameter is invalid.
   * @throws { BusinessError } 12000004 - The file operation failed.
   * @throws { BusinessError } 12000005 - The IPC communication failed.
   * @throws { BusinessError } 12000006 - The encryption engine is faulty.
   * @throws { BusinessError } 12000011 - The queried entity does not exist.
   * @throws { BusinessError } 12000012 - The device environment or input parameter is abnormal.
   * @throws { BusinessError } 12000014 - The memory is insufficient.
   * @throws { BusinessError } 12000018 - The parameter is incorrect. Possible causes:
   *     1. A mandatory parameter is left empty.
   *     2. The parameter type is incorrect.
   *     3. The parameter verification failed.
   * @throws { BusinessError } 12000024 - The operation times out. This may be caused by network jitter.
   *     You can try again later.
   * @throws { BusinessError } 12000027 - The network is unavailable. Check network connections.
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi This method can be used only by system applications.
   * @stagemodelonly
   * @since 26.0.0
   */
  function anonAttestKeyItemOfflineAsUser(userId: number, keyAlias: string,
      params: HuksParam[]): Promise<HuksReturnResult>;
  /**
   * 获取匿名化密钥证书。使用Promise异步回调。
   *
   * 该操作需要联网进行，且耗时较长。返回12000012错误码时，可能是由于网络异常导致。此时如果没有联网，需要提示用户网络没有连接，如果已经联网，可能是由于网络抖动导致失败，建议重试。
   *
   * > **说明：**
   * >
   * > 获取[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥证书需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * <!--RP1--><!--RP1End-->
   *
   * @param { string } keyAlias - 密钥别名，存放待获取证书密钥的别名。
   * @param { HuksOptions } options - 用于获取证书时指定所需参数与数据。
   * @returns { Promise<HuksReturnResult> } Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的certChains成员为获取到的证书链。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000001 - algorithm mode is not supported
   * @throws { BusinessError } 12000002 - algorithm param is missing [since 11 - 11]
   * @throws { BusinessError } 12000003 - algorithm param is invalid [since 11 - 11]
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000006 - error occurred in crypto engine
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 11
   */
  function anonAttestKeyItem(keyAlias: string, options: HuksOptions): Promise<HuksReturnResult>;

  /**
   * 离线模式下获取匿名化密钥证书。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > - 离线密钥证明依赖网络，需要定期联网使用该接口以更新离线证书，推荐优先使用离线匿名密钥证明。
   * >
   * > - 离线匿名密钥证明需保证本地时间是准确的，否则可能导致对端校验证书超期失败。
   *
   * > **说明**
   * > >
   * > - Offline key attestation depends on the network. You need to periodically connect to the network to use this API
   * > to update the offline certificate. Offline anonymous key attestation is recommended.
   * > >
   * > - Offline anonymous key attestation requires that the local time be accurate. Otherwise, the peer end may fail to
   * > verify the certificate expiration。
   *
   * @param { string } keyAlias - 密钥别名，存放待获取证书密钥的别名。
   * @param { HuksParam[] } params - 用于获取证书时指定所需参数与数据。
   * @returns { Promise<HuksReturnResult> } Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的certChains成员为获取到的证书链。
   * @throws { BusinessError } 801 - The API is not supported.
   * @throws { BusinessError } 12000001 - The algorithm mode is not supported.
   * @throws { BusinessError } 12000004 - The file operation failed.
   * @throws { BusinessError } 12000005 - The IPC communication failed.
   * @throws { BusinessError } 12000006 - The encryption engine is faulty.
   * @throws { BusinessError } 12000011 - The queried entity does not exist.
   * @throws { BusinessError } 12000012 - The device environment or input parameter is abnormal.
   * @throws { BusinessError } 12000014 - The memory is insufficient.
   * @throws { BusinessError } 12000018 - The parameter is incorrect. Possible causes:
   *     1. A mandatory parameter is left empty.
   *     2. The parameter type is incorrect.
   *     3. The parameter verification failed.
   *     4. The group ID specified by the access group tag is invalid.
   * @throws { BusinessError } 12000024 - The operation times out. This may be caused by network jitter.
   *     You can try again later.
   * @throws { BusinessError } 12000027 - The network is unavailable. Check network connections.
   * @syscap SystemCapability.Security.Huks.Extension
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0
   */
  function anonAttestKeyItemOffline(keyAlias: string, params: HuksParam[]): Promise<HuksReturnResult>;

  /**
   * 获取当前系统sdk版本。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 11开始废弃。
   *
   * @param { HuksOptions } options - 空对象（此处传空即可）。
   * @returns { string } 返回sdk版本。
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 11
   */
  function getSdkVersion(options: HuksOptions): string;

  /**
   * 查询密钥别名集接口。使用Promise异步回调。
   *
   * @param { HuksOptions } options - listAliases操作的参数集合。
   * @returns { Promise<HuksListAliasesReturnResult> } Promise对象，返回调用接口的结果。当调用成功时，HuksListAliasesReturnResult的成员
   *     keyAliases为获取的密钥别名集。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the group id specified by the access group tag is invalid [since 23]
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 12
   */
  function listAliases(options: HuksOptions): Promise<HuksListAliasesReturnResult>;

  /**
   * 加密导出密钥。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 加密导出[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * <!--Del-->该功能暂不支持。<!--DelEnd-->
   *
   * @param { string } keyAlias - 密钥别名，应与所用密钥生成时使用的别名相同。
   * @param { HuksOptions } params - 用于指定导出密钥时的加密类型。
   * @returns { Promise<HuksReturnResult> } Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的outData成员为导出的密钥密文。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000011 - queried entity does not exist
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000018 - the input parameter is invalid
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 26.0.0]
   * @since 20
   */
  function wrapKeyItem(keyAlias: string, params: HuksOptions): Promise<HuksReturnResult>;

  /**
   * 加密导入密钥。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 加密导入[HuksKeySecurityLevel]{@link huks.HuksKeySecurityLevel}中定义的SE安全级别密钥需要ohos.permission.ACCESS_SE_KEY权限。
   *
   * <!--Del-->该功能暂不支持。<!--DelEnd-->
   *
   * @param { string } keyAlias - 密钥别名，指定导入密钥的密钥别名。
   * @param { HuksOptions } params - 用于指定导入密钥时的加密类型。
   * @param { Uint8Array } wrappedKey - 加密导出密钥的密文。
   * @returns { Promise<HuksReturnResult> } Promise对象，返回调用接口的结果。
   * @throws { BusinessError } 201 - The application permissions are insufficient, possibly because
   *     the ohos.permission.ACCESS_SE_KEY permission is missing. [since 26.0.0]
   * @throws { BusinessError } 801 - api is not supported
   * @throws { BusinessError } 12000004 - operating file failed
   * @throws { BusinessError } 12000005 - IPC communication failed
   * @throws { BusinessError } 12000012 - Device environment or input parameter abnormal
   * @throws { BusinessError } 12000014 - memory is insufficient
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM
   * @throws { BusinessError } 12000018 - the input parameter is invalid
   * @throws { BusinessError } 12000026 - the secure element is not available [since 26.0.0]
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 26.0.0]
   * @since 20
   */
  function unwrapKeyItem(keyAlias: string, params: HuksOptions, wrappedKey: Uint8Array): Promise<HuksReturnResult>;

  /**
   * 后量子加密密钥封装操作，支持HUKS密钥管理
   * 或由应用程序本身决定。如果应用程序选择管理密钥，
   * 对称密钥携带在HuksReturnResult的outData字段中。
   *
   * @param { string } keyAlias - 后量子加密算法的密钥名称
   * @param { HuksParam[] } params - 表示封装属性
   * @param { string } [sharedKeyAlias] - 封装密钥的密钥别名。
   *     如果使用HUKS进行密钥管理，则必须指定该参数。
   *     如果应用程序自己管理密钥，则忽略此参数
   * @param { HuksParam[] } [sharedKeyParams] - 表示封装的密钥的属性。
   *     如果使用HUKS进行密钥管理，则必须指定该参数。
   *     如果应用程序自己管理密钥，则忽略此参数
   * @returns { Promise<HuksReturnResult> } 函数返回的promise。
   * @throws { BusinessError } 801 - API is not supported.
   * @throws { BusinessError } 12000001 - Algorithm mode is not supported
   * @throws { BusinessError } 12000002 - Algorithm parameters are missing, please check the algorithm parameters.
   * @throws { BusinessError } 12000003 - The algorithm parameters are invalid, please check the algorithm parameters.
   * @throws { BusinessError } 12000004 - File operation failed.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - The algorithm engine reported an error, please check the input parameters.
   * @throws { BusinessError } 12000011 - The queried key does not exist, please check the key-related parameters.
   * @throws { BusinessError } 12000012 - Device environment or input parameters are abnormal.
   * @throws { BusinessError } 12000013 - Queried credential does not exist
   * @throws { BusinessError } 12000014 - Memory is insufficient.
   * @throws { BusinessError } 12000015 - Failed to obtain the security information via UserIAM.
   * @throws { BusinessError } 12000016 - The screen lock password is not set.
   * @throws { BusinessError } 12000017 - The key with the same alias already exists.
   * @throws { BusinessError } 12000018 - The input parameter is invalid.
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0
   */
  function encapsulate(keyAlias: string, params: HuksParam[],
      sharedKeyAlias?: string, sharedKeyParams?: HuksParam[]): Promise<HuksReturnResult>;
  /**
   * Post-Quantum Cryptography密钥解封装操作，支持HUKS密钥管理
   * 或由应用程序本身决定。如果应用程序选择管理密钥，
   * 对称密钥包含在HuksReturnResult的outData字段中。
   *
   * @param { string } keyAlias - 后量子加密算法的密钥名称。
   * @param { HuksParam[] } params - 表示解封装属性。
   * @param { Uint8Array } encapData - 表示封装后的共享密钥。
   * @param { string } [sharedKeyAlias] - 表示解封装密钥的密钥别名。
   *     如果使用HUKS进行密钥管理，则必须指定该参数。
   *     如果应用程序自己管理密钥，则忽略此参数。
   * @param { HuksParam[] } [sharedKeyParams] - 表示解封装后的key的属性。
   *     如果使用HUKS进行密钥管理，则必须指定该参数。
   *     如果应用程序自己管理密钥，则忽略此参数。
   * @returns { Promise<HuksReturnResult> } 返回值
   * @throws { BusinessError } 801 - API is not supported.
   * @throws { BusinessError } 12000001 - Algorithm mode is not supported
   * @throws { BusinessError } 12000002 - The algorithm parameter is missing. Check the algorithm parameter.
   * @throws { BusinessError } 12000003 - The algorithm parameter is invalid. Check the algorithm parameter.
   * @throws { BusinessError } 12000004 - The file operation failed.
   * @throws { BusinessError } 12000005 - IPC communication failed.
   * @throws { BusinessError } 12000006 - The algorithm engine reports an error. Check the input parameters.
   * @throws { BusinessError } 12000011 - The queried key does not exist. Check the key-related parameters.
   * @throws { BusinessError } 12000012 - The device environment or input parameter is abnormal.
   * @throws { BusinessError } 12000013 - Queried credential does not exist
   * @throws { BusinessError } 12000014 - Insufficient memory.
   * @throws { BusinessError } 12000015 - Failed to obtain the security information using UserIAM.
   * @throws { BusinessError } 12000016 - The lock screen password is not set.
   * @throws { BusinessError } 12000017 - A key with the same alias already exists.
   * @throws { BusinessError } 12000018 - Invalid input parameter.
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @since 26.0.0
   */
  function decapsulate(keyAlias: string, params: HuksParam[], encapData: Uint8Array,
      sharedKeyAlias?: string, sharedKeyParams?:  HuksParam[]): Promise<HuksReturnResult>;
  /**
   * 调用接口使用的options中的properties数组中的param。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8
   */
  export interface HuksParam {
    /**
     * 标签。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    tag: HuksTag;
    /**
     * 标签对应值。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    value: boolean | number | bigint | Uint8Array;
  }

  /**
   * huks Handle结构体。
   *
   * > **说明：**
   * >
   * > 从API version 9开始废弃，建议使用[HuksSessionHandle<sup>9+</sup>]{@link huks.HuksSessionHandle}替代。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead null
   */
  export interface HuksHandle {
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    errorCode: number;
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    handle: number;
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    token?: Uint8Array;
  }

  /**
   * HUKS handle结构体。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  export interface HuksSessionHandle {
    /**
     * 表示无符号整数类型的handle值。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    handle: number;
    /**
     * 表示
     * [initSession]{@link huks.initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>)}
     * 操作之后获取到的challenge信息。默认为undefined。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    challenge?: Uint8Array;
  }

  /**
   * 调用接口使用的options。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8
   */
  export interface HuksOptions {
    /**
     * 标签。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    properties?: Array<HuksParam>;
    /**
     * 标签。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    inData?: Uint8Array;
  }

  /**
   * 调用接口返回的result。
   *
   * > **说明：**
   * >
   * > - 从API version 8开始，从API version 9开始废弃，建议使用[HuksReturnResult<sup>9+</sup>]{@link huks.HuksReturnResult}替代。
   * >
   * > - errorCode的具体信息，请参考[HUKS错误码](docroot://reference/apis-universal-keystore-kit/errorcode-huks.md)。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead huks.HuksReturnResult
   */
  export interface HuksResult {
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    errorCode: number;
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    outData?: Uint8Array;
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    properties?: Array<HuksParam>;
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    certChains?: Array<string>;
  }

  /**
   * 调用接口返回的result。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  export interface HuksReturnResult {
    /**
     * 表示
     * [initSession]{@link huks.initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>)}
     * 操作之后获取到的challenge信息。默认为undefined。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    outData?: Uint8Array;
    /**
     * 表示
     * [initSession]{@link huks.initSession(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksSessionHandle>)}
     * 操作之后获取到的challenge信息。默认为undefined。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    properties?: Array<HuksParam>;
    /**
     * 表示证书链数据。默认为undefined。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    certChains?: Array<string>;
    /**
     * 定义共享密钥。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    sharedSecret?: Uint8Array;
  }

  /**
   * 返回的密钥别名数组。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 12
   */
  export interface HuksListAliasesReturnResult {

    /**
     * 表示密钥别名集。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    keyAliases: Array<string>;
  }

  /**
   * 表示错误码的枚举。
   *
   * > **说明：**
   * >
   * > 从API version 9开始废弃，建议使用[HuksExceptionErrCode<sup>9+</sup>]{@link huks.HuksExceptionErrCode}替代。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 8
   * @deprecated since 9
   * @useinstead null
   */
  export enum HuksErrorCode {
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_SUCCESS = 0,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_FAILURE = -1,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_BAD_STATE = -2,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_ARGUMENT = -3,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_NOT_SUPPORTED = -4,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_NO_PERMISSION = -5,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INSUFFICIENT_DATA = -6,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_BUFFER_TOO_SMALL = -7,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INSUFFICIENT_MEMORY = -8,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_COMMUNICATION_FAILURE = -9,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_STORAGE_FAILURE = -10,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_HARDWARE_FAILURE = -11,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_ALREADY_EXISTS = -12,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_NOT_EXIST = -13,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_NULL_POINTER = -14,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_FILE_SIZE_FAIL = -15,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_READ_FILE_FAIL = -16,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_PUBLIC_KEY = -17,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_PRIVATE_KEY = -18,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_KEY_INFO = -19,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_HASH_NOT_EQUAL = -20,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_MALLOC_FAIL = -21,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_WRITE_FILE_FAIL = -22,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_REMOVE_FILE_FAIL = -23,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_OPEN_FILE_FAIL = -24,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CLOSE_FILE_FAIL = -25,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_MAKE_DIR_FAIL = -26,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_KEY_FILE = -27,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_IPC_MSG_FAIL = -28,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_REQUEST_OVERFLOWS = -29,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_PARAM_NOT_EXIST = -30,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CRYPTO_ENGINE_ERROR = -31,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_COMMUNICATION_TIMEOUT = -32,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_IPC_INIT_FAIL = -33,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_IPC_DLOPEN_FAIL = -34,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_EFUSE_READ_FAIL = -35,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_NEW_ROOT_KEY_MATERIAL_EXIST = -36,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_UPDATE_ROOT_KEY_MATERIAL_FAIL = -37,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_VERIFICATION_FAILED = -38,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_ALG_FAIL = -100,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_KEY_SIZE_FAIL = -101,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_PADDING_FAIL = -102,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_PURPOSE_FAIL = -103,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_DIGEST_FAIL = -104,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_MODE_FAIL = -105,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_NONCE_FAIL = -106,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_AAD_FAIL = -107,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_IV_FAIL = -108,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_AE_TAG_FAIL = -109,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_SALT_FAIL = -110,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_CHECK_GET_ITERATION_FAIL = -111,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_ALGORITHM = -112,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_KEY_SIZE = -113,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_PADDING = -114,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_PURPOSE = -115,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_MODE = -116,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_DIGEST = -117,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_SIGNATURE_SIZE = -118,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_IV = -119,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_AAD = -120,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_NONCE = -121,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_AE_TAG = -122,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_SALT = -123,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_ITERATION = -124,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INVALID_OPERATION = -125,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_INTERNAL_ERROR = -999,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_ERROR_UNKNOWN_ERROR = -1000
  }

  /**
   * 表示错误码的枚举以及对应的错误信息，错误码表示错误类型，错误信息展示错误详情。
   *
   * 关于错误码的具体信息，可在[通用错误码](docroot://reference/errorcode-universal.md)和
   * [HUKS错误码](docroot://reference/apis-universal-keystore-kit/errorcode-huks.md)中查看。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 9
   */
  export enum HuksExceptionErrCode {
    /**
     * 权限错误导致失败。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_PERMISSION_FAIL = 201,
    /**
     * 非系统应用不可以调用系统API。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 12
     */
    HUKS_ERR_CODE_NOT_SYSTEM_APP = 202,
    /**
     * 参数错误导致失败。可能原因：1. 必选参数未指定。2. 参数类型不正确。3. 参数校验失败。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401,
    /**
     * 不支持的API。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_NOT_SUPPORTED_API = 801,
    /**
     * 不支持的功能/特性。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001,
    /**
     * 缺少密钥算法参数。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002,
    /**
     * 无效密钥算法参数。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003,
    /**
     * 文件操作失败。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_FILE_OPERATION_FAIL = 12000004,
    /**
     * 通信失败。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005,
    /**
     * 算法库操作失败。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_CRYPTO_FAIL = 12000006,
    /**
     * 密钥访问失败-密钥访问失效。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_KEY_AUTH_PERMANENTLY_INVALIDATED = 12000007,
    /**
     * 密钥访问失败-密钥认证失败。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_KEY_AUTH_VERIFY_FAILED = 12000008,
    /**
     * 密钥访问失败-密钥访问超时。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_KEY_AUTH_TIME_OUT = 12000009,
    /**
     * 密钥操作会话数已达上限。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_SESSION_LIMIT = 12000010,
    /**
     * 目标对象不存在。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011,
    /**
     * 外部错误。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_EXTERNAL_ERROR = 12000012,
    /**
     * 缺失所需凭据。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_CREDENTIAL_NOT_EXIST = 12000013,
    /**
     * 内存不足。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014,
    /**
     * 调用其他系统服务失败。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 9
     */
    HUKS_ERR_CODE_CALL_SERVICE_FAILED = 12000015,
    /**
     * 需要锁屏密码但未设置。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 11
     */
    HUKS_ERR_CODE_DEVICE_PASSWORD_UNSET = 12000016,
    /**
     * 同名密钥已存在。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 20
     */
    HUKS_ERR_CODE_KEY_ALREADY_EXIST = 12000017,
    /**
     * 输入参数非法。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 20
     */
    HUKS_ERR_CODE_INVALID_ARGUMENT = 12000018,
    /**
     * 同名provider已注册。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 22
     */
    HUKS_ERR_CODE_ITEM_EXISTS = 12000019,
    /**
     * 依赖的外部模块返回错误。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 22
     */
    HUKS_ERR_CODE_EXTERNAL_MODULE = 12000020,
    /**
     * Ukey PIN码被锁。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @atomicservice
     * @since 22
     */
    HUKS_ERR_CODE_PIN_LOCKED = 12000021,
    /**
     * Ukey PIN码错误。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @atomicservice
     * @since 22
     */
    HUKS_ERR_CODE_PIN_INCORRECT = 12000022,
    /**
     * Ukey PIN码未认证。
     *
     * @syscap SystemCapability.Security.Huks.CryptoExtension
     * @atomicservice
     * @since 22
     */
    HUKS_ERR_CODE_PIN_NO_AUTH = 12000023,
    /**
     * 设备或资源繁忙。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 22
     */
    HUKS_ERR_CODE_BUSY = 12000024,
    /**
     * 资源超过限制。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 22
     */
    HUKS_ERR_CODE_EXCEED_LIMIT = 12000025,
    /**
     * 安全元件故障。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_ERR_CODE_SE_FAULT = 12000026,
    /**
     * 网络不可用。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_ERR_CODE_NETWORK_UNAVAILABLE = 12000027
  }

  /**
   * 表示密钥用途。
   *
   * 一个密钥仅能用于单类用途，不能既用于加解密又用于签名验签。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8
   */
  export enum HuksKeyPurpose {
    /**
     * 表示密钥用于对明文进行加密操作。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_KEY_PURPOSE_ENCRYPT = 1,
    /**
     * 表示密钥用于对密文进行解密操作。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_KEY_PURPOSE_DECRYPT = 2,
    /**
     * 表示密钥用于对数据进行签名。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_PURPOSE_SIGN = 4,
    /**
     * 表示密钥用于验证签名后的数据。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_PURPOSE_VERIFY = 8,
    /**
     * 表示密钥用于派生密钥。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_PURPOSE_DERIVE = 16,
    /**
     * 表示密钥用于加密导出。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_PURPOSE_WRAP = 32,
    /**
     * 表示密钥用于安全导入。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_PURPOSE_UNWRAP = 64,
    /**
     * 表示密钥用于生成消息验证码。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_PURPOSE_MAC = 128,
    /**
     * 表示密钥用于进行密钥协商。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_PURPOSE_AGREE = 256
  }

  /**
   * 表示摘要算法。
   *
   * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 8
   */
  export enum HuksKeyDigest {
    /**
     * 表示无摘要算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DIGEST_NONE = 0,
    /**
     * 表示MD5摘要算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DIGEST_MD5 = 1,
    /**
     * 表示SM3摘要算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_DIGEST_SM3 = 2,
    /**
     * 表示SHA1摘要算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DIGEST_SHA1 = 10,
    /**
     * 表示SHA224摘要算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DIGEST_SHA224 = 11,
    /**
     * 表示SHA256摘要算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DIGEST_SHA256 = 12,
    /**
     * 表示SHA384摘要算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DIGEST_SHA384 = 13,
    /**
     * 表示SHA512摘要算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DIGEST_SHA512 = 14
  }

  /**
   * 表示填充算法。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8
   */
  export enum HuksKeyPadding {
    /**
     * 表示不使用填充算法。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_PADDING_NONE = 0,
    /**
     * 表示使用OAEP填充算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_PADDING_OAEP = 1,
    /**
     * 表示使用PSS填充算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_PADDING_PSS = 2,
    /**
     * 表示使用PKCS1_V1_5填充算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_PADDING_PKCS1_V1_5 = 3,
    /**
     * 表示使用PKCS5填充算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_PADDING_PKCS5 = 4,
    /**
     * 表示使用PKCS7填充算法。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_PADDING_PKCS7 = 5,
    /**
     * 表示使用ISO_IEC_9796_2填充算法<!--Del-->（暂不支持）<!--DelEnd-->。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 12
     */
    HUKS_PADDING_ISO_IEC_9796_2 = 6,
    /**
     * 表示使用ISO_IEC_9797_1填充算法<!--Del-->（暂不支持）<!--DelEnd-->。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 12
     */
    HUKS_PADDING_ISO_IEC_9797_1 = 7
  }

  /**
   * 表示加密模式。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8
   */
  export enum HuksCipherMode {
    /**
     * 表示使用ECB加密模式。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_MODE_ECB = 1,
    /**
     * 表示使用CBC加密模式。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_MODE_CBC = 2,
    /**
     * 表示使用CTR加密模式。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_MODE_CTR = 3,
    /**
     * 表示使用OFB加密模式。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_MODE_OFB = 4,
    /**
     * 表示使用CFB加密模式。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 12
     */
    HUKS_MODE_CFB = 5,
    /**
     * 表示使用CCM加密模式。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_MODE_CCM = 31,

    /**
     * 表示使用GCM加密模式。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_MODE_GCM = 32
  }

  /**
   * 表示密钥长度。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8
   */
  export enum HuksKeySize {
    /**
     * 表示使用RSA算法的密钥长度为512bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_RSA_KEY_SIZE_512 = 512,
    /**
     * 表示使用RSA算法的密钥长度为768bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_RSA_KEY_SIZE_768 = 768,
    /**
     * 表示使用RSA算法的密钥长度为1024bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_RSA_KEY_SIZE_1024 = 1024,
    /**
     * 表示使用RSA算法的密钥长度为2048bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_RSA_KEY_SIZE_2048 = 2048,
    /**
     * 表示使用RSA算法的密钥长度为3072bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_RSA_KEY_SIZE_3072 = 3072,
    /**
     * 表示使用RSA算法的密钥长度为4096bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_RSA_KEY_SIZE_4096 = 4096,

    /**
     * 表示使用ECC算法的密钥长度为224bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ECC_KEY_SIZE_224 = 224,
    /**
     * 表示使用ECC算法的密钥长度为256bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ECC_KEY_SIZE_256 = 256,
    /**
     * 表示使用ECC算法的密钥长度为384bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ECC_KEY_SIZE_384 = 384,
    /**
     * 表示使用ECC算法的密钥长度为521bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ECC_KEY_SIZE_521 = 521,

    /**
     * 表示使用AES算法的密钥长度为128bit。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_AES_KEY_SIZE_128 = 128,
    /**
     * 表示使用AES算法的密钥长度为192bit。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_AES_KEY_SIZE_192 = 192,
    /**
     * 表示使用AES算法的密钥长度为256bit。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_AES_KEY_SIZE_256 = 256,

    /**
     * 表示使用AES算法的密钥长度为512bit。
     *
     * **说明：** 从API version 8开始支持，从API version 11开始废弃。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 11
     */
    HUKS_AES_KEY_SIZE_512 = 512,

    /**
     * 表示使用CURVE25519算法的密钥长度为256bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_CURVE25519_KEY_SIZE_256 = 256,

    /**
     * 表示使用DH算法的密钥长度为2048bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DH_KEY_SIZE_2048 = 2048,
    /**
     * 表示使用DH算法的密钥长度为3072bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DH_KEY_SIZE_3072 = 3072,
    /**
     * 表示使用DH算法的密钥长度为4096bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_DH_KEY_SIZE_4096 = 4096,

    /**
     * 表示SM2算法的密钥长度为256bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_SM2_KEY_SIZE_256 = 256,
    /**
     * 表示SM4算法的密钥长度为128bit。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_SM4_KEY_SIZE_128 = 128,
    /**
     * 表示DES算法的密钥长度为64bit。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 12
     */
    HUKS_DES_KEY_SIZE_64 = 64,
    /**
     * 表示3DES算法的密钥长度为128bit。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 12
     */
    HUKS_3DES_KEY_SIZE_128 = 128,
    /**
     * 表示3DES算法的密钥长度为192bit。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 12
     */
    HUKS_3DES_KEY_SIZE_192 = 192,
    /**
     * ML-DSA-44参数集。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_ML_DSA_KEY_PARAM_SET_44 = 44,
    /**
     * ML-DSA-65参数集。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_ML_DSA_KEY_PARAM_SET_65 = 65,
    /**
     * ML-DSA-87参数集。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_ML_DSA_KEY_PARAM_SET_87 = 87,
    /**
     * ML-KEM-768参数集。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_ML_KEM_KEY_PARAM_SET_768 = 768,
    /**
     * ML-KEM-1024参数集。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_ML_KEM_KEY_PARAM_SET_1024 = 1024

  }

  /**
   * 表示密钥使用的算法。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8
   */
  export enum HuksKeyAlg {
    /**
     * 表示使用RSA算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_RSA = 1,
    /**
     * 表示使用ECC算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_ECC = 2,
    /**
     * 表示使用DSA算法<!--RP5--><!--RP5End-->。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_DSA = 3,

    /**
     * 表示使用AES算法。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_ALG_AES = 20,
    /**
     * 表示使用HMAC算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_HMAC = 50,
    /**
     * 表示使用HKDF算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_HKDF = 51,
    /**
     * 表示使用PBKDF2算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_PBKDF2 = 52,

    /**
     * 表示使用ECDH算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_ECDH = 100,
    /**
     * 表示使用X25519算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_X25519 = 101,
    /**
     * 表示使用ED25519算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_ED25519 = 102,
    /**
     * 表示使用DH算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_ALG_DH = 103,

    /**
     * 表示使用SM2算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_ALG_SM2 = 150,
    /**
     * 表示SM3摘要算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_ALG_SM3 = 151,
    /**
     * 表示使用SM4算法。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_ALG_SM4 = 152,
    /**
     * 表示使用DES算法（API 12开始支持<!--RP4-->轻量级设备<!--RP4End-->，API 18开始支持<!--RP5-->标准设备<!--RP5End-->）。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_DES = 160,
    /**
     * 表示使用3DES算法（API 12开始支持<!--RP4-->轻量级设备<!--RP4End-->，API 18开始支持<!--RP5-->标准设备<!--RP5End-->）。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_3DES = 161,
    /**
     * 表示使用CMAC算法（API 12开始支持<!--RP4-->轻量级设备<!--RP4End-->，API 18开始支持<!--RP5-->标准设备<!--RP5End-->）。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_CMAC = 162,
    /**
     * ML-KEM算法
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_ALG_ML_KEM = 200,
    /**
     * ML-DSA算法
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_ALG_ML_DSA = 201
  }

  /**
   * 表示安全导入密钥的算法套件。
   *
   * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 9
   */
  export enum HuksUnwrapSuite {
    /**
     * 安全导入密钥时，X25519密钥协商后使用AES-256 GCM解密。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_UNWRAP_SUITE_X25519_AES_256_GCM_NOPADDING = 1,
    /**
     * 安全导入密钥时，ECDH密钥协商后使用AES-256 GCM解密。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_UNWRAP_SUITE_ECDH_AES_256_GCM_NOPADDING = 2,
    /**
     * 安全导入密钥时，使用临时SM4密钥加密导入密钥，使用已导入HUKS的SM2密钥加密SM4密钥。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 23
     */
    HUKS_UNWRAP_SUITE_SM2_SM4_ECB_NOPADDING = 5
  }

  /**
   * 表示生成密钥的类型。
   *
   * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 8
   */
  export enum HuksKeyGenerateType {
    /**
     * 默认生成的密钥。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_GENERATE_TYPE_DEFAULT = 0,
    /**
     * 派生生成的密钥。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_GENERATE_TYPE_DERIVE = 1,
    /**
     * 协商生成的密钥。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_GENERATE_TYPE_AGREE = 2
  }

  /**
   * 表示密钥的产生方式。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 8
   */
  export enum HuksKeyFlag {
    /**
     * 表示通过导入公钥接口导入的密钥。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_FLAG_IMPORT_KEY = 1,
    /**
     * 表示通过生成密钥接口生成的密钥。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_FLAG_GENERATE_KEY = 2,
    /**
     * 表示通过生成密钥协商接口生成的密钥。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_FLAG_AGREE_KEY = 3,
    /**
     * 表示通过生成密钥派生接口生成的密钥。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_KEY_FLAG_DERIVE_KEY = 4
  }

  /**
   * 表示密钥存储方式。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 8
   */
  export enum HuksKeyStorageType {
    /**
     * 表示通过本地直接管理密钥。
     *
     * **说明：** 从API version 8开始支持，从API version 10开始废弃，由于开发者正常使用密钥管理过程中并不需要使用此TAG，故无替代接口。针对密钥派生场景，可使用
     * HUKS_STORAGE_ONLY_USED_IN_HUKS 与 HUKS_STORAGE_KEY_EXPORT_ALLOWED。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 10
     */
    HUKS_STORAGE_TEMP = 0,
    /**
     * 表示通过HUKS service管理密钥。
     *
     * **说明：** 从API version 8开始支持，从API version 10开始废弃，由于开发者正常使用密钥管理过程中并不需要使用此TAG，故无替代接口。针对密钥派生场景，可使用
     * HUKS_STORAGE_ONLY_USED_IN_HUKS 与 HUKS_STORAGE_KEY_EXPORT_ALLOWED。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 10
     */
    HUKS_STORAGE_PERSISTENT = 1,
    /**
     * 表示主密钥派生的密钥存储于huks中，由HUKS进行托管。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 10 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10
     */
    HUKS_STORAGE_ONLY_USED_IN_HUKS = 2,
    /**
     * 表示主密钥派生的密钥直接导出给业务方，HUKS不对其进行托管服务。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 10 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10
     */
    HUKS_STORAGE_KEY_EXPORT_ALLOWED = 3
  }

  /**
   * 表示导入密钥的密钥类型，默认为导入公钥，导入对称密钥时不需要该字段。
   *
   * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 9
   */
  export enum HuksImportKeyType {
    /**
     * 表示导入的密钥类型为公钥。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_KEY_TYPE_PUBLIC_KEY = 0,
    /**
     * 表示导入的密钥类型为私钥。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_KEY_TYPE_PRIVATE_KEY = 1,
    /**
     * 表示导入的密钥类型为公私钥对。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_KEY_TYPE_KEY_PAIR = 2
  }

  /**
   * 表示Rsa在签名验签、padding为pss时需指定的salt_len类型。
   *
   * @syscap SystemCapability.Security.Huks.Extension [since 10 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 10
   */
  export enum HuksRsaPssSaltLenType {
    /**
     * 表示以摘要长度设置salt_len。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 10 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10
     */
    HUKS_RSA_PSS_SALT_LEN_DIGEST = 0,

    /**
     * 表示以最大长度设置salt_len。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 10 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10
     */
    HUKS_RSA_PSS_SALT_LEN_MAX = 1
  }

  /**
   * 表示用户认证类型。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  export enum HuksUserAuthType {
    /**
     * 表示用户认证类型为指纹。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_USER_AUTH_TYPE_FINGERPRINT = 1 << 0,
    /**
     * 表示用户认证类型为人脸。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_USER_AUTH_TYPE_FACE = 1 << 1,
    /**
     * 表示用户认证类型为PIN码。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_USER_AUTH_TYPE_PIN = 1 << 2,
    /**
     * 表示用户认证类型为TUI PIN码。<!--Del-->（暂不支持）<!--DelEnd-->
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 26.0.0]
     * @since 20
     */
    HUKS_USER_AUTH_TYPE_TUI_PIN = 1 << 5,
  }

  /**
   * 表示安全访问控制类型。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  export enum HuksAuthAccessType {
    /**
     * 表示安全访问控制类型为清除密码后密钥无效。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD = 1 << 0,
    /**
     * 表示安全访问控制类型为新录入生物特征后密钥无效。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL = 1 << 1,
    /**
     * 表示安全访问控制类型为该密钥总是有效。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 11
     */
    HUKS_AUTH_ACCESS_ALWAYS_VALID = 1 << 2
  }

  /**
   * 表示用户认证模式。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 12
   */
  export enum HuksUserAuthMode {
    /**
     * 本地认证模式。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_USER_AUTH_MODE_LOCAL = 0,
    /**
     * 跨端协同认证模式。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_USER_AUTH_MODE_COAUTH = 1
  }
  /**
   * 表示生成或导入密钥时，指定该密钥的存储安全等级。
   *
   * > **说明：**
   * >
   * > 业务在使用存储等级为ECE的密钥时，建议通过感知
   * > [锁屏事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_screen_locked)
   * > 来清理使用该密钥创建的会话资源，以保证安全性。
   *
   * @syscap SystemCapability.Security.Huks.Extension [since 11 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 11
   */
  export enum HuksAuthStorageLevel {
    /**
     * 表示密钥仅在开机后可访问。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 11 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 11
     */
    HUKS_AUTH_STORAGE_LEVEL_DE = 0,
    /**
     * 表示密钥仅在首次解锁后可访问。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 11 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 11
     */
    HUKS_AUTH_STORAGE_LEVEL_CE = 1,
    /**
     * 表示密钥仅在解锁状态时可访问。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 11 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 11
     */
    HUKS_AUTH_STORAGE_LEVEL_ECE = 2
  }

  /**
   * 表示密钥使用时生成challenge的类型。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  export enum HuksChallengeType {
    /**
     * 表示challenge为普通类型，默认32字节。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_CHALLENGE_TYPE_NORMAL = 0,
    /**
     * 表示challenge为用户自定义类型。支持使用多个密钥仅一次认证。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_CHALLENGE_TYPE_CUSTOM = 1,
    /**
     * 表示免challenge类型。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_CHALLENGE_TYPE_NONE = 2
  }

  /**
   * 表示challenge类型为用户自定义类型时，生成的challenge有效长度仅为8字节连续的数据，且仅支持4种位置。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  export enum HuksChallengePosition {
    /**
     * 表示0~7字节为当前密钥的有效challenge。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_CHALLENGE_POS_0 = 0,
    /**
     * 表示8~15字节为当前密钥的有效challenge。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_CHALLENGE_POS_1 = 1,
    /**
     * 表示16~23字节为当前密钥的有效challenge。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_CHALLENGE_POS_2 = 2,
    /**
     * 表示24~31字节为当前密钥的有效challenge。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_CHALLENGE_POS_3 = 3
  }

  /**
   * 表示生成或导入密钥时，指定该密钥的签名类型。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice [since 12]
   * @since 9
   */
  export enum HuksSecureSignType {
    /**
     * 表示签名类型为携带认证信息。生成或导入密钥时指定该字段，则在使用密钥进行签名时，对待签名的数据添加认证信息后进行签名。
     *
     * **注意：**
     *
     * 携带的认证信息包含身份信息，开发者需在其隐私声明中对此身份信息的使用目的、存留策略和销毁方式进行说明。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_SECURE_SIGN_WITH_AUTHINFO = 1
  }

  /**
   * 表示发送TAG的方式。
   *
   * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
   * @syscap SystemCapability.Security.Huks.Core [since 12]
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 8
   */
  export enum HuksSendType {
    /**
     * 表示异步发送TAG。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_SEND_TYPE_ASYNC = 0,
    /**
     * 表示同步发送TAG。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_SEND_TYPE_SYNC = 1
  }
  /**
   * 表示密钥的来源。
   *
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 22
   */
  export enum HuksKeyClassType {
    /**
     * 表示HUKS本地管理的密钥。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 22
     */
    HUKS_KEY_CLASS_DEFAULT = 0,
    /**
     * 表示外部密钥管理扩展管理的密钥。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 22
     */
    HUKS_KEY_CLASS_EXTENSION = 1
  }

  /**
   * 表示密钥加密类型（加密导出或导入密钥）的枚举。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice
   * @since 20
   */
  export enum HuksKeyWrapType {
    /**
     * 硬件唯一密钥加密类型。<!--Del-->（暂不支持）<!--DelEnd-->
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 20
     */
    HUKS_KEY_WRAP_TYPE_HUK_BASED = 2
  }

  /**
   * 表示Tag的数据类型。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8
   */
  export enum HuksTagType {
    /**
     * 表示非法的Tag类型。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_TYPE_INVALID = 0 << 28,
    /**
     * 表示该Tag的数据类型为int类型的number。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_TYPE_INT = 1 << 28,
    /**
     * 表示该Tag的数据类型为uint类型的number。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_TYPE_UINT = 2 << 28,
    /**
     * 表示该Tag的数据类型为bigint。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_TYPE_ULONG = 3 << 28,
    /**
     * 表示该Tag的数据类型为boolean。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_TYPE_BOOL = 4 << 28,
    /**
     * 表示该Tag的数据类型为Uint8Array。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_TYPE_BYTES = 5 << 28,
  }

  /**
   * 表示密钥安全级别的枚举。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0
   */
  export enum HuksKeySecurityLevel {
    /**
     * 密钥在可信执行环境中生成并使用。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_KEY_SECURITY_LEVEL_TEE = 0,
    /**
     * 密钥在安全环境中生成并使用。
     *
     * @permission ohos.permission.ACCESS_SE_KEY
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_KEY_SECURITY_LEVEL_SE = 1
  }
  /**
   * 表示调用参数的Tag。
   *
   * @syscap SystemCapability.Security.Huks.Core
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 8
   */
  export enum HuksTag {
    /**
     * 表示非法的Tag。
     *
     * **说明：** 从API version 8开始使用，从API version 9开始废弃。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_INVALID = HuksTagType.HUKS_TAG_TYPE_INVALID | 0,

    /**
     * 表示算法的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_ALGORITHM = HuksTagType.HUKS_TAG_TYPE_UINT | 1,
    /**
     * 表示密钥用途的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_PURPOSE = HuksTagType.HUKS_TAG_TYPE_UINT | 2,
    /**
     * 表示密钥长度的Tag，单位：bit。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_KEY_SIZE = HuksTagType.HUKS_TAG_TYPE_UINT | 3,

    /**
     * 表示摘要算法的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_DIGEST = HuksTagType.HUKS_TAG_TYPE_UINT | 4,
    /**
     * 表示填充模式的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_PADDING = HuksTagType.HUKS_TAG_TYPE_UINT | 5,
    /**
     * 表示加密模式的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_BLOCK_MODE = HuksTagType.HUKS_TAG_TYPE_UINT | 6,
    /**
     * 表示密钥类型的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_KEY_TYPE = HuksTagType.HUKS_TAG_TYPE_UINT | 7,
    /**
     * 表示附加身份验证数据的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_ASSOCIATED_DATA = HuksTagType.HUKS_TAG_TYPE_BYTES | 8,

    /**
     * 表示密钥加解密的NONCE字段。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_NONCE = HuksTagType.HUKS_TAG_TYPE_BYTES | 9,
    /**
     * 表示密钥初始化的向量。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_IV = HuksTagType.HUKS_TAG_TYPE_BYTES | 10,

    /**
     * 表示密钥派生时的info。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_INFO = HuksTagType.HUKS_TAG_TYPE_BYTES | 11,
    /**
     * 表示密钥派生时的盐值。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_SALT = HuksTagType.HUKS_TAG_TYPE_BYTES | 12,
    /**
     * 表示操作系统补丁级别的Tag。
     *
     * **说明：** 从API version 8开始支持，从API version 9开始废弃。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_PWD = HuksTagType.HUKS_TAG_TYPE_BYTES | 13,
    /**
     * 表示密钥派生时的迭代次数。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_ITERATION = HuksTagType.HUKS_TAG_TYPE_UINT | 14,

    /**
     * 表示生成密钥类型的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_KEY_GENERATE_TYPE = HuksTagType.HUKS_TAG_TYPE_UINT | 15,

    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_DERIVE_MAIN_KEY = HuksTagType.HUKS_TAG_TYPE_BYTES | 16,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_DERIVE_FACTOR = HuksTagType.HUKS_TAG_TYPE_BYTES | 17,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_DERIVE_ALG = HuksTagType.HUKS_TAG_TYPE_UINT | 18,
    /**
     * 表示密钥协商时的算法类型。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_AGREE_ALG = HuksTagType.HUKS_TAG_TYPE_UINT | 19,
    /**
     * 表示密钥协商时的公钥别名。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_AGREE_PUBLIC_KEY_IS_KEY_ALIAS = HuksTagType.HUKS_TAG_TYPE_BOOL | 20,
    /**
     * 表示密钥协商时的私钥别名。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_AGREE_PRIVATE_KEY_ALIAS = HuksTagType.HUKS_TAG_TYPE_BYTES | 21,
    /**
     * 表示密钥协商时的公钥。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_AGREE_PUBLIC_KEY = HuksTagType.HUKS_TAG_TYPE_BYTES | 22,
    /**
     * 表示密钥别名。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_KEY_ALIAS = HuksTagType.HUKS_TAG_TYPE_BYTES | 23,
    /**
     * 表示派生密钥的大小，单位：byte。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_DERIVE_KEY_SIZE = HuksTagType.HUKS_TAG_TYPE_UINT | 24,

    /**
     * 表示导入的密钥类型。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_TAG_IMPORT_KEY_TYPE = HuksTagType.HUKS_TAG_TYPE_UINT | 25,

    /**
     * 表示安全导入密钥的套件。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 9 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_TAG_UNWRAP_ALGORITHM_SUITE = HuksTagType.HUKS_TAG_TYPE_UINT | 26,

    /**
     * 表示派生密钥/协商密钥的存储类型。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 10 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10
     */
    HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG = HuksTagType.HUKS_TAG_TYPE_UINT | 29,

    /**
     * 表示rsa_pss_salt_length的类型。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 10 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10
     */
    HUKS_TAG_RSA_PSS_SALT_LEN_TYPE = HuksTagType.HUKS_TAG_TYPE_UINT | 30,

    /**
     * 原为证书业务预留字段，当前证书管理已独立，此字段废弃，不再预留。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ACTIVE_DATETIME = HuksTagType.HUKS_TAG_TYPE_ULONG | 201,
    /**
     * 原为证书业务预留字段，当前证书管理已独立，此字段废弃，不再预留。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ORIGINATION_EXPIRE_DATETIME = HuksTagType.HUKS_TAG_TYPE_ULONG | 202,
    /**
     * 原为证书业务预留字段，当前证书管理已独立，此字段废弃，不再预留。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_USAGE_EXPIRE_DATETIME = HuksTagType.HUKS_TAG_TYPE_ULONG | 203,
    /**
     * 原为证书业务预留字段，当前证书管理已独立，此字段废弃，不再预留。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_CREATION_DATETIME = HuksTagType.HUKS_TAG_TYPE_ULONG | 204,

    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_ALL_USERS = HuksTagType.HUKS_TAG_TYPE_BOOL | 301,
    /**
     * 表示当前密钥属于哪个userID。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_USER_ID = HuksTagType.HUKS_TAG_TYPE_UINT | 302,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_NO_AUTH_REQUIRED = HuksTagType.HUKS_TAG_TYPE_BOOL | 303,
    /**
     * 表示用户认证类型。从[HuksUserAuthType]{@link huks.HuksUserAuthType}中选择，需要与安全访问控制类型同时设置。支持同时指定两种用户认证类型，如：安全访问控制类型指定为
     * HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL时，密钥访问认证类型可以指定以下三种： HUKS_USER_AUTH_TYPE_FACE 、
     * HUKS_USER_AUTH_TYPE_FINGERPRINT、HUKS_USER_AUTH_TYPE_FACE | HUKS_USER_AUTH_TYPE_FINGERPRINT
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_USER_AUTH_TYPE = HuksTagType.HUKS_TAG_TYPE_UINT | 304,
    /**
     * 表示auth token单次有效期，单位：秒。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_AUTH_TIMEOUT = HuksTagType.HUKS_TAG_TYPE_UINT | 305,
    /**
     * 用于传入authToken的字段。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_AUTH_TOKEN = HuksTagType.HUKS_TAG_TYPE_BYTES | 306,

    /**
     * 表示安全访问控制类型。从[HuksAuthAccessType]{@link huks.HuksAuthAccessType}中选择，需要和用户认证类型同时设置。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_TAG_KEY_AUTH_ACCESS_TYPE = HuksTagType.HUKS_TAG_TYPE_UINT | 307,

    /**
     * 表示生成或导入密钥时，指定该密钥的签名类型。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_TAG_KEY_SECURE_SIGN_TYPE = HuksTagType.HUKS_TAG_TYPE_UINT | 308,

    /**
     * 表示密钥使用时生成的challenge类型。从[HuksChallengeType]{@link huks.HuksChallengeType}中选择。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_TAG_CHALLENGE_TYPE = HuksTagType.HUKS_TAG_TYPE_UINT | 309,

    /**
     * 表示challenge类型为用户自定义类型时，huks产生的challenge有效长度仅为8字节连续的数据。从[HuksChallengePosition]{@link huks.HuksChallengePosition}中
     * 选择。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 9
     */
    HUKS_TAG_CHALLENGE_POS = HuksTagType.HUKS_TAG_TYPE_UINT | 310,

    /**
     * 表示密钥认证用途的tag。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 10
     */
    HUKS_TAG_KEY_AUTH_PURPOSE = HuksTagType.HUKS_TAG_TYPE_UINT | 311,

    /**
     * 表示密钥存储安全等级的tag。从[HuksAuthStorageLevel]{@link huks.HuksAuthStorageLevel}中选择。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 11
     */
    HUKS_TAG_AUTH_STORAGE_LEVEL = HuksTagType.HUKS_TAG_TYPE_UINT | 316,

    /**
     * 表示用户认证模式。从[HuksUserAuthMode]{@link huks.HuksUserAuthMode}中选择。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_USER_AUTH_MODE = HuksTagType.HUKS_TAG_TYPE_UINT | 319,

    /**
     * 表示attestation时的挑战值。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_ATTESTATION_CHALLENGE = HuksTagType.HUKS_TAG_TYPE_BYTES | 501,
    /**
     * 表示attestation时拥有该密钥的application的Id。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_ATTESTATION_APPLICATION_ID = HuksTagType.HUKS_TAG_TYPE_BYTES | 502,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_BRAND = HuksTagType.HUKS_TAG_TYPE_BYTES | 503,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_DEVICE = HuksTagType.HUKS_TAG_TYPE_BYTES | 504,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_PRODUCT = HuksTagType.HUKS_TAG_TYPE_BYTES | 505,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_SERIAL = HuksTagType.HUKS_TAG_TYPE_BYTES | 506,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_IMEI = HuksTagType.HUKS_TAG_TYPE_BYTES | 507,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_MEID = HuksTagType.HUKS_TAG_TYPE_BYTES | 508,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_MANUFACTURER = HuksTagType.HUKS_TAG_TYPE_BYTES | 509,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_MODEL = HuksTagType.HUKS_TAG_TYPE_BYTES | 510,
    /**
     * 表示attestation时的密钥别名。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_ATTESTATION_ID_ALIAS = HuksTagType.HUKS_TAG_TYPE_BYTES | 511,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_SOCID = HuksTagType.HUKS_TAG_TYPE_BYTES | 512,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ATTESTATION_ID_UDID = HuksTagType.HUKS_TAG_TYPE_BYTES | 513,
    /**
     * 表示attestation时的安全凭据。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_ATTESTATION_ID_SEC_LEVEL_INFO = HuksTagType.HUKS_TAG_TYPE_BYTES | 514,
    /**
     * 表示attestation时的版本号。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_ATTESTATION_ID_VERSION_INFO = HuksTagType.HUKS_TAG_TYPE_BYTES | 515,
    /**
     * 表示是否覆写同名密钥。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 20
     */
    HUKS_TAG_KEY_OVERRIDE = HuksTagType.HUKS_TAG_TYPE_BOOL | 520,
    /**
     * 表示指定的AEAD标签长度，单位：byte。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 22
     */
    HUKS_TAG_AE_TAG_LEN = HuksTagType.HUKS_TAG_TYPE_UINT | 521,
    /**
     * 表示密钥来源。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 22
     */
    HUKS_TAG_KEY_CLASS = HuksTagType.HUKS_TAG_TYPE_UINT | 522,
    /**
     * 表示指定的分组信息。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 23
     */
    HUKS_TAG_KEY_ACCESS_GROUP = HuksTagType.HUKS_TAG_TYPE_BYTES | 523,
    /**
     * 表示密钥安全级别。
     *
     * 26.0.0
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_TAG_KEY_SECURITY_LEVEL = HuksTagType.HUKS_TAG_TYPE_UINT | 526,
    /**
     * 标记指示GCM或CCM模式的附加验证数据。
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 24
     */
    HUKS_TAG_AAD = HuksTagType.HUKS_TAG_TYPE_BYTES | 527,
    /**
     * 标记指示加密操作的上下文，例如ML-DSA等。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    HUKS_TAG_CONTEXT = HuksTagType.HUKS_TAG_TYPE_BYTES | 528,
    /**
     * 表示是否使用生成key时传入的别名的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_IS_KEY_ALIAS = HuksTagType.HUKS_TAG_TYPE_BOOL | 1001,
    /**
     * 表示密钥存储方式的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_KEY_STORAGE_FLAG = HuksTagType.HUKS_TAG_TYPE_UINT | 1002,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_IS_ALLOWED_WRAP = HuksTagType.HUKS_TAG_TYPE_BOOL | 1003,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_KEY_WRAP_TYPE = HuksTagType.HUKS_TAG_TYPE_UINT | 1004,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_KEY_AUTH_ID = HuksTagType.HUKS_TAG_TYPE_BYTES | 1005,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_KEY_ROLE = HuksTagType.HUKS_TAG_TYPE_UINT | 1006,
    /**
     * 表示密钥标志的Tag。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_KEY_FLAG = HuksTagType.HUKS_TAG_TYPE_UINT | 1007,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_IS_ASYNCHRONIZED = HuksTagType.HUKS_TAG_TYPE_UINT | 1008,
    /**
     * 表示操作系统补丁级别的Tag。
     *
     * **说明：** 从API version 8开始支持，从API version 9开始废弃。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_SECURE_KEY_ALIAS = HuksTagType.HUKS_TAG_TYPE_BOOL | 1009,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_SECURE_KEY_UUID = HuksTagType.HUKS_TAG_TYPE_BYTES | 1010,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_KEY_DOMAIN = HuksTagType.HUKS_TAG_TYPE_UINT | 1011,

    /**
     * 表示密钥锁屏密码访问控制字段，可限制密钥只有在用户设置了锁屏密码时可用。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice [since 12]
     * @since 11
     */
    HUKS_TAG_IS_DEVICE_PASSWORD_SET = HuksTagType.HUKS_TAG_TYPE_BOOL | 1012,

    /* Inner-use TAG: 10001 - 10999 */
    /**
     * 表示操作系统补丁级别的Tag。
     *
     * **说明：** 从API version 8开始支持，从API version 9开始废弃。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_PROCESS_NAME = HuksTagType.HUKS_TAG_TYPE_BYTES | 10001,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_PACKAGE_NAME = HuksTagType.HUKS_TAG_TYPE_BYTES | 10002,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_ACCESS_TIME = HuksTagType.HUKS_TAG_TYPE_UINT | 10003,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_USES_TIME = HuksTagType.HUKS_TAG_TYPE_UINT | 10004,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_CRYPTO_CTX = HuksTagType.HUKS_TAG_TYPE_ULONG | 10005,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_KEY = HuksTagType.HUKS_TAG_TYPE_BYTES | 10006,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_KEY_VERSION = HuksTagType.HUKS_TAG_TYPE_UINT | 10007,
    /**
     * 原为预留字段。
     *
     * **说明：** 从API version 9开始废弃，无替代接口。
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_PAYLOAD_LEN = HuksTagType.HUKS_TAG_TYPE_UINT | 10008,

    /**
     * 用于传入GCM模式中的AEAD数据的字段。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 11]
     * @since 8
     */
    HUKS_TAG_AE_TAG = HuksTagType.HUKS_TAG_TYPE_BYTES | 10009,

    /**
     * 表示操作系统补丁级别的Tag。
     *
     * **说明：** 从API version 8开始支持，从API version 9开始废弃。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_IS_KEY_HANDLE = HuksTagType.HUKS_TAG_TYPE_ULONG | 10010,

    /**
     * 表示操作系统版本的Tag。
     *
     * **说明：** 从API version 8开始支持，从API version 9开始废弃。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_OS_VERSION = HuksTagType.HUKS_TAG_TYPE_UINT | 10101,
    /**
     * 表示操作系统补丁级别的Tag。
     *
     * **说明：** 从API version 8开始支持，从API version 9开始废弃。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @since 8
     * @deprecated since 9
     */
    HUKS_TAG_OS_PATCHLEVEL = HuksTagType.HUKS_TAG_TYPE_UINT | 10102,

    /** Reserved TAGs: 11000 - 12000
     *
     * Other TAGs: 20001 - N
     * TAGs used for paramSetOut
     */
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_SYMMETRIC_KEY_DATA = HuksTagType.HUKS_TAG_TYPE_BYTES | 20001,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_ASYMMETRIC_PUBLIC_KEY_DATA = HuksTagType.HUKS_TAG_TYPE_BYTES | 20002,
    /**
     * 预留。
     *
     * @syscap SystemCapability.Security.Huks.Extension [since 8 - 11]
     * @syscap SystemCapability.Security.Huks.Core [since 12]
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8
     */
    HUKS_TAG_ASYMMETRIC_PRIVATE_KEY_DATA = HuksTagType.HUKS_TAG_TYPE_BYTES | 20003,
  }
}

export default huks;