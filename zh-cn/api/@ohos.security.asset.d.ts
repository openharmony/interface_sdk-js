/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit AssetStoreKit
 */

/**
 * 关键资产存储服务提供了用户短敏感数据的安全存储及管理能力。其中，短敏感数据可以是密码类（账号/密码）、Token类（应用凭据）、其他关键明文（如银行卡号）等长度较短的用户敏感数据。
 *
 * @syscap SystemCapability.Security.Asset
 * @atomicservice [since 14]
 * @since 11
 */
declare namespace asset {
  /**
   * 新增一条关键资产。使用Promise异步回调。
   * 
   * 设置[Tag.IS_PERSISTENT]{@link asset.TagType}属性时，需要申请ohos.permission.STORE_PERSISTENT_DATA权限，申请方式请参考
   * [声明权限](docroot://security/AccessToken/declare-permissions.md)。
   *
   * @param { AssetMap } attributes - 待新增关键资产的属性集合，包括关键资产明文、访问控制属性、自定义数据等。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000003 - The asset already exists.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  function add(attributes: AssetMap): Promise<void>;

  /**
   * 批量新增关键资产。使用Promise异步回调。
   * 
   * 设置[Tag.IS_PERSISTENT]{@link asset.TagType}属性时，需要申请ohos.permission.STORE_PERSISTENT_DATA权限，申请方式请参考
   * [声明权限](docroot://security/AccessToken/declare-permissions.md)。
   * 
   * 批量新增的关键资产必须具有相同的[Tag.GROUP_ID]{@link asset.TagType}和[Tag.REQUIRE_ATTR_ENCRYPTED]{@link asset.TagType}属性。
   * 
   * 批量新增的关键资产数量最大值为100。
   *
   * @param { Array<AssetMap> } attributesArray - 待新增关键资产的属性集合数组，包括关键资产明文、访问控制属性、自定义数据等。
   * @returns { Promise<BatchResult> } Promise对象，返回批量操作结果，包含失败关键资产的错误信息。
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @throws { BusinessError } 24000019 - Each value of {@link Tag.GROUP_ID} and {@link Tag.REQUIRE_ATTR_ENCRYPTED}
   *     in the array is not consistent.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.0.0
   */
  function batchAdd(attributesArray: Array<AssetMap>): Promise<BatchResult>;

  /**
   * 在指定用户空间中新增一条关键资产。使用Promise异步回调。
   * 
   * 设置[Tag.IS_PERSISTENT]{@link @ohos.security.asset:asset.TagType}属性，需申请ohos.permission.STORE_PERSISTENT_DATA权限，申请方式请参
   * 考[声明权限](docroot://security/AccessToken/declare-permissions.md)。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。取值范围大于等于100。
   * @param { AssetMap } attributes - 待新增关键资产的属性集合，包括关键资产明文、访问控制属性、自定义数据等。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000003 - The asset already exists.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function addAsUser(userId: number, attributes: AssetMap): Promise<void>;

  /**
   * 新增一条关键资产，使用同步方式返回结果。
   * 
   * 如果要设置[Tag.IS_PERSISTENT]{@link asset.TagType}属性，需要申请ohos.permission.STORE_PERSISTENT_DATA权限，申请方式请参考
   * [声明权限](docroot://security/AccessToken/declare-permissions.md)。
   *
   * @param { AssetMap } attributes - 待新增关键资产的属性集合，包括关键资产明文、访问控制属性、自定义数据等。
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000003 - The asset already exists.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 12
   */
  function addSync(attributes: AssetMap): void;

  /**
   * 删除符合条件的一条或多条关键资产。使用Promise异步回调。
   *
   * @param { AssetMap } query - 待删除关键资产的搜索条件，如别名、访问控制属性、自定义数据等。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  function remove(query: AssetMap): Promise<void>;

  /**
   * 从指定用户空间中删除符合条件的一条或多条关键资产。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。取值范围大于等于100。
   * @param { AssetMap } query - 待删除关键资产的搜索条件，如别名、访问控制属性、自定义数据等。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function removeAsUser(userId: number, query: AssetMap): Promise<void>;

  /**
   * 批量删除符合条件的关键资产。使用Promise异步回调。
   * 
   * 批量删除的关键资产必须具有相同的[Tag.GROUP_ID]{@link asset.TagType}和[Tag.REQUIRE_ATTR_ENCRYPTED]{@link asset.TagType}属性。
   * 
   * 批量删除的关键资产数量最大值为100。
   *
   * @param { Array<AssetMap> } assetsToBeRemoved - 待删除关键资产的搜索条件数组，如别名、访问控制属性、自定义数据等。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @throws { BusinessError } 24000019 - Each value of {@link Tag.GROUP_ID} and {@link Tag.REQUIRE_ATTR_ENCRYPTED}
   *     in the array is not consistent.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.0.0
   */
  function batchRemove(assetsToBeRemoved: Array<AssetMap>): Promise<void>;

  /**
   * 删除符合条件的一条或多条关键资产，使用同步方式。
   *
   * @param { AssetMap } query - 待删除关键资产的搜索条件，如别名、访问控制属性、自定义数据等。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 12
   */
  function removeSync(query: AssetMap): void;

  /**
   * 更新符合条件的一条关键资产。使用Promise异步回调。
   *
   * @param { AssetMap } query - 待更新关键资产的搜索条件，如关键资产别名、访问控制属性、自定义数据等。
   * @param { AssetMap } attributesToUpdate - 待更新关键资产的属性集合，如关键资产明文、自定义数据等。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  function update(query: AssetMap, attributesToUpdate: AssetMap): Promise<void>;

  /**
   * 在指定用户空间中更新符合条件的一条关键资产。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。取值范围大于等于100。
   * @param { AssetMap } query - 待更新关键资产的搜索条件，如关键资产别名、访问控制属性、自定义数据等。
   * @param { AssetMap } attributesToUpdate - 待更新关键资产的属性集合，如关键资产明文和自定义数据等。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function updateAsUser(userId: number, query: AssetMap, attributesToUpdate: AssetMap): Promise<void>;



  /**
   * 批量更新符合条件的关键资产。使用Promise异步回调。
   * 
   * 批量更新的关键资产必须具有相同的[Tag.GROUP_ID]{@link asset.TagType}和[Tag.REQUIRE_ATTR_ENCRYPTED]{@link asset.TagType}属性。
   * 
   * 批量更新的关键资产数量最大值为100。
   *
   * @param { Array<AssetMap> } sourceAttributes - 待更新关键资产的搜索条件数组。
   * @param { Array<AssetMap> } destAttributes - 待更新关键资产的属性集合数组。
   * @returns { Promise<BatchResult> } Promise对象，返回批量操作结果，包含失败关键资产的错误信息。
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @throws { BusinessError } 24000019 - Each value of {@link Tag.GROUP_ID} and {@link Tag.REQUIRE_ATTR_ENCRYPTED}
   *     in the array is not consistent.
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.0.0
   */
  function batchUpdate(sourceAttributes: Array<AssetMap>, destAttributes: Array<AssetMap>): Promise<BatchResult>;

  /**
   * 更新符合条件的一条关键资产，使用同步方式返回结果。
   *
   * @param { AssetMap } query - 待更新关键资产的搜索条件，如关键资产别名、访问控制属性、自定义数据等。
   * @param { AssetMap } attributesToUpdate - 待更新关键资产的属性集合，如关键资产明文、自定义数据等。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000015 - Getting the system time failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 12
   */
  function updateSync(query: AssetMap, attributesToUpdate: AssetMap): void;

  /**
   * 查询的预处理，用于需要用户认证的关键资产。在用户认证成功后，应当随后调用[asset.query]{@link asset.query}和[asset.postQuery]{@link asset.postQuery}接口。使用
   * Promise异步回调。
   *
   * @param { AssetMap } query - 关键资产的查询条件，如别名、访问控制属性、自定义数据等。
   * @returns { Promise<Uint8Array> } Promise对象，返回挑战值。
   *     <br>**说明：** 挑战值用于后续的用户认证。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000016 - The cache exceeds the limit.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  function preQuery(query: AssetMap): Promise<Uint8Array>;

  /**
   * 在指定用户空间中查询的预处理，用于需要用户认证的关键资产。在用户认证成功后，应当随后调用[asset.queryAsUser]{@link asset.queryAsUser}和
   * [asset.postQueryAsUser]{@link asset.postQueryAsUser}接口。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。取值范围大于等于100。
   * @param { AssetMap } query - 关键资产的查询条件，如别名、访问控制属性、自定义数据等。
   * @returns { Promise<Uint8Array> } Promise对象，返回挑战值。
   *     <br>**说明：** 挑战值用于后续用户认证。
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000016 - The cache exceeds the limit.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function preQueryAsUser(userId: number, query: AssetMap): Promise<Uint8Array>;

  /**
   * 查询的预处理，用于需要用户认证的关键资产。在用户认证成功后，应当随后调用[asset.querySync]{@link asset.querySync}、
   * [asset.postQuerySync]{@link asset.postQuerySync}。使用同步方式返回结果。
   *
   * @param { AssetMap } query - 关键资产的查询条件，如别名、访问控制属性、自定义数据等。
   * @returns { Uint8Array } 挑战值。
   *     <br>**说明：** 挑战值用于后续用户认证。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000016 - The cache exceeds the limit.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 12
   */
  function preQuerySync(query: AssetMap): Uint8Array;

  /**
   * 查询一条或多条符合条件的关键资产。若查询需要用户认证的关键资产，则需要在本函数前调用[asset.preQuery]{@link asset.preQuery}接口，在本函数后调用
   * [asset.postQuery]{@link asset.postQuery}接口，开发步骤请参考[开发指导](docroot://security/AssetStoreKit/asset-js-query-auth.md)。使
   * 用Promise异步回调。
   * 
   * 如果未查询到符合条件的关键资产，将抛出“未找到关键资产”的异常，而非返回空的查询结果列表。
   *
   * @param { AssetMap } query - 关键资产的查询条件，如别名、访问控制属性、自定义数据等。
   * @returns { Promise<Array<AssetMap>> } Promise对象，返回查询结果列表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000004 - Access denied.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  function query(query: AssetMap): Promise<Array<AssetMap>>;

  /**
   * 在指定用户空间中查询一条或多条符合条件的关键资产。若查询需要用户认证的关键资产，则需要在本函数前调用[asset.preQueryAsUser]{@link asset.preQueryAsUser}接口，在本函数后调用
   * [asset.postQueryAsUser]{@link asset.postQueryAsUser}接口，开发步骤请参考
   * [开发指导](docroot://security/AssetStoreKit/asset-js-query-auth.md)。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。取值范围大于等于100。
   * @param { AssetMap } query - 关键资产的查询条件，如别名、访问控制属性、自定义数据等。
   * @returns { Promise<Array<AssetMap>> } Promise对象，返回查询结果列表。
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000004 - Access denied.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function queryAsUser(userId: number, query: AssetMap): Promise<Array<AssetMap>>;

  /**
   * 查询一条或多条符合条件的关键资产。若查询需要用户认证的关键资产，则需要在本函数前调用[asset.preQuerySync]{@link asset.preQuerySync}，在本函数后调用
   * [asset.postQuerySync]{@link asset.postQuerySync}，开发步骤请参考
   * [开发指导](docroot://security/AssetStoreKit/asset-js-query-auth.md)。使用同步方式返回结果。
   * 
   * 如果未查询到符合条件的关键资产，将抛出“未找到关键资产”的异常，而非返回空的查询结果列表。
   *
   * @param { AssetMap } query - 关键资产的查询条件，如别名、访问控制属性、自定义数据等。
   * @returns { Array<AssetMap> } 查询结果列表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Incorrect parameter types.
   *     2. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000002 - The asset is not found.
   * @throws { BusinessError } 24000004 - Access denied.
   * @throws { BusinessError } 24000005 - The screen lock status does not match.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000007 - The asset is corrupted.
   * @throws { BusinessError } 24000008 - The database operation failed.
   * @throws { BusinessError } 24000009 - The cryptography operation failed.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000017 - The capability is not supported.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 12
   */
  function querySync(query: AssetMap): Array<AssetMap>;

  /**
   * 查询的后置处理，用于需要用户认证的关键资产（与[asset.preQuery]{@link asset.preQuery}函数成对出现）。使用Promise异步回调。
   *
   * @param { AssetMap } handle - 待处理的查询句柄，包含[asset.preQuery]{@link asset.preQuery}执行成功返回的挑战值。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  function postQuery(handle: AssetMap): Promise<void>;

  /**
   * 在指定用户空间中查询的后置处理，用于需要用户认证的关键资产（与[asset.preQueryAsUser]{@link asset.preQueryAsUser}函数成对出现）。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { number } userId - 用户ID。取值范围大于等于100。
   * @param { AssetMap } handle - 待处理的查询句柄，当前包含[asset.preQueryAsUser]{@link asset.preQueryAsUser}执行成功返回的挑战值。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The caller doesn't have the permission.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @since 12
   */
  function postQueryAsUser(userId:number, handle: AssetMap): Promise<void>;

  /**
   * 查询的后置处理，用于需要用户认证的关键资产。需与[asset.preQuerySync]{@link asset.preQuerySync}函数成对出现。使用同步方式返回结果。
   *
   * @param { AssetMap } handle - 待处理的查询句柄，包含[asset.preQuerySync]{@link asset.preQuerySync}执行成功返回的挑战值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 12
   */
  function postQuerySync(handle: AssetMap): void;

  /**
   * 执行同步操作后，查询同步执行结果。使用Promise异步回调。
   *
   * @param { AssetMap } query - 同步结果查询条件，如关键资产所属群组、业务自定义属性信息是否加密。
   * @returns { Promise<SyncResult> } Promise对象，返回同步执行结果。
   * @throws { BusinessError } 24000001 - The ASSET service is unavailable.
   * @throws { BusinessError } 24000006 - Insufficient memory.
   * @throws { BusinessError } 24000010 - IPC failed.
   * @throws { BusinessError } 24000011 - Calling the Bundle Manager service failed.
   * @throws { BusinessError } 24000012 - Calling the OS Account service failed.
   * @throws { BusinessError } 24000013 - Calling the Access Token service failed.
   * @throws { BusinessError } 24000014 - The file operation failed.
   * @throws { BusinessError } 24000018 - Parameter verification failed.
   * @syscap SystemCapability.Security.Asset
   * @since 20
   */
  function querySyncResult(query: AssetMap): Promise<SyncResult>;

  /**
   * 关键资产属性的键-值对集合。
   *
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  type AssetMap = Map<Tag, Value>;

  /**
   * 关键资产属性的内容，用作[AssetMap]{@link asset.AssetMap}的值。
   *
   * @unionmember { boolean } The value is a boolean value, with a range of true or false.
   * @unionmember { number } The value is a number, and the value range is the enumerated value or number
   *     corresponding to the tag.
   * @unionmember { Uint8Array } The value is a byte array, and the content is defined by the service.
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  declare type Value = boolean | number | Uint8Array;

  /**
   * 枚举，关键资产基于锁屏状态的访问控制类型。
   *
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  enum Accessibility {
    /**
     * 开机后可访问。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DEVICE_POWERED_ON = 0,
    /**
     * 首次解锁后可访问
     * 
     * **说明：** 未设置锁屏密码时，等同于开机后可访问。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DEVICE_FIRST_UNLOCKED = 1,
    /**
     * 解锁状态时可访问
     * 
     * **说明：** 未设置锁屏密码时，等同于开机后可访问。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DEVICE_UNLOCKED = 2
  }

  /**
   * 枚举，关键资产支持的用户认证类型。
   *
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  enum AuthType {
    /**
     * 访问关键资产前无需用户认证。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    NONE = 0x00,
    /**
     * 隐私PIN码仅支持系统应用
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0
     */
    PRIVATE_PIN = 0x100,
    /**
     * 任意一种用户认证方式（PIN码、人脸、指纹等）通过后，均可访问关键资产。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    ANY = 0xFF
  }

  /**
   * 枚举，关键资产支持的同步类型。
   *
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  enum SyncType {
    /**
     * 不允许同步关键资产。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    NEVER = 0,
    /**
     * 只在本设备进行同步，如仅在本设备还原的备份场景。
     * 
     * **说明：** 本字段是能力预埋，当前不支持。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    THIS_DEVICE = 1 << 0,
    /**
     * 只在可信设备间进行同步，如克隆场景。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    TRUSTED_DEVICE = 1 << 1,
    /**
     * 只在登录可信账号的设备间进行同步，如云同步场景。
     * 
     * **说明：** 本字段是能力预埋，当前不支持。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 12
     */
    TRUSTED_ACCOUNT = 1 << 2
  }

  /**
   * 枚举，关键资产支持的加密导入导出类型。
   *
   * @syscap SystemCapability.Security.Asset
   * @since 18
   */
  enum WrapType {
    /**
     * 不允许加密导入导出关键资产。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 18
     */
    NEVER = 0,
    /**
     * 只在登录可信账号的设备进行加密导入导出关键资产。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 18
     */
    TRUSTED_ACCOUNT = 1
  }

  /**
   * 枚举，新增关键资产时的冲突（如：别名相同）处理策略。
   *
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  enum ConflictResolution {
    /**
     * 覆盖原有的关键资产。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    OVERWRITE = 0,
    /**
     * 抛出异常，由业务进行后续处理。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    THROW_ERROR = 1
  }

  /**
   * 枚举，关键资产查询返回的结果类型。
   *
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  enum ReturnType {
    /**
     * 返回关键资产明文及属性。
     * 
     * **说明：** 查询单条关键资产明文时，需设置此类型。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    ALL = 0,
    /**
     * 返回关键资产属性，不含关键资产明文。
     * 
     * **说明：** 批量查询关键资产属性时，需设置此类型。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    ATTRIBUTES = 1
  }

  /**
   * 枚举，附属的操作类型。
   *
   * @syscap SystemCapability.Security.Asset
   * @since 12
   */
  enum OperationType {
    /**
     * 需要进行同步操作。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    NEED_SYNC = 0,
    /**
     * 需要进行登出操作。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    NEED_LOGOUT = 1
  }

  /**
   * 批量操作中单个关键资产的错误信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.0.0
   */
  interface BatchErrInfo {
    /**
     * 关键资产的索引。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.0.0
     */
    index: number;
    /**
     * 批量操作的错误码。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.0.0
     */
    errCode: number;
    /**
     * 批量操作的错误信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.0.0
     */
    message: string;
  }

  /**
   * [batchAdd]{@link asset.batchAdd}、[batchUpdate]{@link asset.batchUpdate}和[batchRemove]{@link asset.batchRemove}批量操作的
   * 结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @FaAndStageModel
   * @since 26.0.0
   */
  interface BatchResult {
    /**
     * 批量操作的失败数量，0表示全部成功。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.0.0
     */
    failedCount: number;
    /**
     * 批量操作中失败的关键资产的错误信息数组，全部成功时为空数组。
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @since 26.0.0
     */
    failedErrorInfos: Array<BatchErrInfo>;
  }

  /**
   * 关键资产同步的结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @since 20
   */
  interface SyncResult {
    /**
     * 关键资产同步的结果码。同步成功时结果码为0，同步失败时结果码参考[ErrorCode]{@link asset.ErrorCode}。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 20
     */
    readonly resultCode: number;
    /**
     * 触发同步的关键资产总数。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 20
     */
    readonly totalCount?: number;
    /**
     * 关键资产同步失败的数量。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 20
     */
    readonly failedCount?: number;
  }

  /**
   * 枚举，关键资产属性支持的数据类型。
   *
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  enum TagType {
    /**
     * 标识关键资产属性对应的数据类型是布尔。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    BOOL = 0x01 << 28,
    /**
     * 标识关键资产属性对应的数据类型是整型。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    NUMBER = 0x02 << 28,
    /**
     * 标识关键资产属性对应的数据类型是字节数组。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    BYTES = 0x03 << 28
  }

  /**
   * 枚举，关键资产支持的属性名称类型，用作[AssetMap]{@link asset.AssetMap}的键。
   * 
   * > **说明：**
   * >
   * > 以下为Tag类型的全量枚举值，每个接口可传的Tag枚举及对应的Value取值范围不同，详见
   * > [各个场景的开发指导](docroot://security/AssetStoreKit/asset-store-kit-overview.md)。
   *
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  enum Tag {
    /**
     * 关键资产明文。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    SECRET = TagType.BYTES | 0x01,
    /**
     * 关键资产别名，每条关键资产的唯一索引。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    ALIAS = TagType.BYTES | 0x02,
    /**
     * 基于锁屏状态的访问控制。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    ACCESSIBILITY = TagType.NUMBER | 0x03,
    /**
     * 是否仅在设置了锁屏密码的情况下，可访问关键资产。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    REQUIRE_PASSWORD_SET = TagType.BOOL | 0x04,
    /**
     * 访问关键资产所需的用户认证类型。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    AUTH_TYPE = TagType.NUMBER | 0x05,
    /**
     * 用户认证的有效期。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    AUTH_VALIDITY_PERIOD = TagType.NUMBER | 0x06,
    /**
     * 用户认证的挑战值。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    AUTH_CHALLENGE = TagType.BYTES | 0x07,
    /**
     * 用户认证通过的授权令牌。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    AUTH_TOKEN = TagType.BYTES | 0x08,
    /**
     * 关键资产支持的同步类型。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    SYNC_TYPE = TagType.NUMBER | 0x10,
    /**
     * 在应用卸载时是否保留关键资产。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    IS_PERSISTENT = TagType.BOOL | 0x11,
    /**
     * 关键资产附属信息，内容由业务自定义且**有完整性保护**。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATA_LABEL_CRITICAL_1 = TagType.BYTES | 0x20,
    /**
     * 关键资产附属信息，内容由业务自定义且**有完整性保护**。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATA_LABEL_CRITICAL_2 = TagType.BYTES | 0x21,
    /**
     * 关键资产附属信息，内容由业务自定义且**有完整性保护**。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATA_LABEL_CRITICAL_3 = TagType.BYTES | 0x22,
    /**
     * 关键资产附属信息，内容由业务自定义且**有完整性保护**。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATA_LABEL_CRITICAL_4 = TagType.BYTES | 0x23,
    /**
     * 关键资产附属信息，内容由业务自定义且**无完整性保护**。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATA_LABEL_NORMAL_1 = TagType.BYTES | 0x30,
    /**
     * 关键资产附属信息，内容由业务自定义且**无完整性保护**。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATA_LABEL_NORMAL_2 = TagType.BYTES | 0x31,
    /**
     * 关键资产附属信息，内容由业务自定义且**无完整性保护**。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATA_LABEL_NORMAL_3 = TagType.BYTES | 0x32,
    /**
     * 关键资产附属信息，内容由业务自定义且**无完整性保护**。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATA_LABEL_NORMAL_4 = TagType.BYTES | 0x33,
    /**
     * 关键资产附属的本地信息，内容由业务自定义且**无完整性保护**，该项信息不会进行同步。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 12
     */
    DATA_LABEL_NORMAL_LOCAL_1 = TagType.BYTES | 0x34,
    /**
     * 关键资产附属的本地信息，内容由业务自定义且**无完整性保护**，该项信息不会进行同步。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 12
     */
    DATA_LABEL_NORMAL_LOCAL_2 = TagType.BYTES | 0x35,
    /**
     * 关键资产附属的本地信息，内容由业务自定义且**无完整性保护**，该项信息不会进行同步。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 12
     */
    DATA_LABEL_NORMAL_LOCAL_3 = TagType.BYTES | 0x36,
    /**
     * 关键资产附属的本地信息，内容由业务自定义且**无完整性保护**，该项信息不会进行同步。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 12
     */
    DATA_LABEL_NORMAL_LOCAL_4 = TagType.BYTES | 0x37,
    /**
     * 关键资产查询返回的结果类型。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    RETURN_TYPE = TagType.NUMBER | 0x40,
    /**
     * 关键资产查询返回的结果的最大数量。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    RETURN_LIMIT = TagType.NUMBER | 0x41,
    /**
     * 关键资产查询返回的结果偏移量。
     * 
     * **说明：** 用于分批查询场景，指定从第几个开始返回。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    RETURN_OFFSET = TagType.NUMBER | 0x42,
    /**
     * 关键资产查询返回的结果排序依据，仅支持按照附属信息排序。
     * 
     * **说明：** 默认按照关键资产新增的顺序返回。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    RETURN_ORDERED_BY = TagType.NUMBER | 0x43,
    /**
     * 新增关键资产时的冲突（如：别名相同）处理策略。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    CONFLICT_RESOLUTION = TagType.NUMBER | 0x44,
    /**
     * 数据的更新时间（时间戳形式）。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 12
     */
    UPDATE_TIME = TagType.BYTES | 0x45,
    /**
     * 附加的操作类型。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    OPERATION_TYPE = TagType.NUMBER | 0x46,
    /**
     * 是否加密业务自定义附属信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 14
     */
    REQUIRE_ATTR_ENCRYPTED = TagType.BOOL | 0x47,
    /**
     * 关键资产所属群组。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 18
     */
    GROUP_ID = TagType.BYTES | 0x48,
    /**
     * 关键资产支持的加密导入导出类型。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 18
     */
    WRAP_TYPE = TagType.NUMBER | 0x49,
    /**
     * 数据安全级别类型
     *
     * 相比原来，新增了TEE级别数据存储和云同步
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0
     */
    SECURITY_TYPE = TagType.NUMBER | 0x50,
    /**
     * uuid字段的tag
     *
     * 无
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0
     */
    DATA_UUID = TagType.BYTES | 0x51,
    /**
     * 标识盐值字段的tag
     *
     * 无
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0
     */
    DATA_SALT = TagType.BYTES | 0x52
  }

  /**
   * 表示错误码的枚举。
   *
   * @syscap SystemCapability.Security.Asset
   * @atomicservice [since 14]
   * @since 11
   */
  enum ErrorCode {
    /**
     * 调用方无权限。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 11
     */
    PERMISSION_DENIED = 201,
    /**
     * 调用方不是一个系统应用。
     *
     * @syscap SystemCapability.Security.Asset
     * @since 12
     */
    NOT_SYSTEM_APPLICATION = 202,
    /**
     * 参数错误。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    INVALID_ARGUMENT = 401,
    /**
     * 关键资产服务不可用。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    SERVICE_UNAVAILABLE = 24000001,
    /**
     * 未找到关键资产。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    NOT_FOUND = 24000002,
    /**
     * 关键资产已存在。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DUPLICATED = 24000003,
    /**
     * 访问被拒绝。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    ACCESS_DENIED = 24000004,
    /**
     * 锁屏状态不匹配。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    STATUS_MISMATCH = 24000005,
    /**
     * 系统内存不足。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    OUT_OF_MEMORY = 24000006,
    /**
     * 关键资产损坏。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATA_CORRUPTED = 24000007,
    /**
     * 数据库操作失败。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    DATABASE_ERROR = 24000008,
    /**
     * 算法库操作失败。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    CRYPTO_ERROR = 24000009,
    /**
     * 进程通信错误。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    IPC_ERROR = 24000010,
    /**
     * 包管理服务异常。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    BMS_ERROR = 24000011,
    /**
     * 账号系统服务异常。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    ACCOUNT_ERROR = 24000012,
    /**
     * 访问控制服务异常。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    ACCESS_TOKEN_ERROR = 24000013,
    /**
     * 文件操作失败。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    FILE_OPERATION_ERROR = 24000014,
    /**
     * 获取系统时间失败。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    GET_SYSTEM_TIME_ERROR = 24000015,
    /**
     * 缓存数量超限。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    LIMIT_EXCEEDED = 24000016,
    /**
     * 该子功能不支持。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice [since 14]
     * @since 11
     */
    UNSUPPORTED = 24000017,
    /**
     * 参数校验失败。
     *
     * @syscap SystemCapability.Security.Asset
     * @atomicservice
     * @since 20
     */
    PARAM_VERIFICATION_FAILED = 24000018,
    /**
     * 属性值不一致。
     * 
     * 26.0.0
     *
     * @syscap SystemCapability.Security.Asset
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0
     */
    INCONSISTENT_ATTRIBUTE = 24000019
  }
}

export default asset;