/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @file 端云服务
 * @kit ArkData
 */

import { AsyncCallback, Callback } from './@ohos.base';
import type relationalStore from './@ohos.data.relationalStore';
import commonType from './@ohos.data.commonType';

/**
 * 端云服务提供端云协同和端云共享能力。
 * 端云协同提供结构化数据（RDB Store，关系型数据库）端云同步的能力。即：云作为数据的中心节点，通过与云空间的数据同步，实现数据云备份、同账号设备间的数据一致性。
 * 端云共享是在端云协同能力基础上，实现跨账号的数据共享。其中，端云共享资源标识是指：对于应用发起共享的每一条数据记录，该条数据在进行端云同步时会生成唯一的共享资源标识（字符串类型的值），此标识作为该条数据记录共享时的识别标识。
 * 端云共享参与者是指：共享发起者根据好友列表选中的参与当前数据共享的所有人员。
 * 端云共享邀请码是指：共享发起后，在共享的服务端会生成当前共享操作的邀请码，并将该邀请码附加到当前共享邀请中，通过推送消息推送到被邀请者的设备端，被邀请者可以通过该邀请码进行邀请的确认。
 * 
 * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace cloudData {
  /**
   * 清除本地下载的云端数据的行为枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum ClearAction {
    /**
     * 清除从云端下载的数据的云标识（即数据来源于云端的标记信息），相关数据作为本地数据保存。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CLEAR_CLOUD_INFO = 0,

    /**
     * 清除从云端下载的数据，不包括本地已修改的云端数据。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CLEAR_CLOUD_DATA_AND_INFO = 1,

    /**
     * 不执行任何清除操作。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    CLEAR_CLOUD_NONE = 2
  }

  /**
   * 表示云数据变更。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11 dynamic
   */
  const DATA_CHANGE_EVENT_ID = 'cloud_data_change';

  /**
   * 表示云数据变更。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  const DATA_CHANGE_EVENT_ID: string;

  /**
   * 透传数据，携带通知数据变更所需要的信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExtraData {
    /**
     * 事件标识。当前仅支持"cloud_data_change"，表示云数据变更，传入其他值视为无效参数。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    eventId: string;

    /**
     * 透传数据，extraData为JSON结构的字符串，其中必须包括"data"字段，"data"中是通知变更所需要的信息，包含账号、应用包名、数据库名、数据库类型和数据库表名，所有字段均不能为空。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    extraData: string;
  }

  /**
   * 端云同步的统计信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface StatisticInfo {
    /**
     * 查询的表名。如返回值为"cloud_notes"，表示查询结果是表名为"cloud_notes"的同步信息。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    table: string;

    /**
     * 本地新增且未同步到云端的数据条数，如返回值为2，表示本地新增2条数据且还未同步到云端。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    inserted: int;

    /**
     * 云端同步之后，本地或云端修改还未同步的数据条数，如返回值为2，表示本地或云端修改还有2条数据未同步。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    updated: int;

    /**
     * 端云一致的数据条数。如返回值为2，表示本地与云端一致的数据为2条。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    normal: int;
  }

  /**
   * 端云同步任务的状态。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum SyncStatus {
    /**
     * 端云同步任务正在运行中。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    RUNNING = 0,

    /**
     * 端云同步任务已完成。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    FINISHED = 1
  }

  /**
   * 端云同步信息，包含最近一次端云同步的时间、结果和状态。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface SyncInfo {
    /**
     * 最近一次端云同步的开始时间。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    startTime: Date;

    /**
     * 最近一次端云同步的结束时间。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    finishTime: Date;

    /**
     * 最近一次端云同步的结果。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    code: relationalStore.ProgressCode;

    /**
     * 最近一次端云同步的状态，默认值为cloudData.SyncStatus.RUNNING。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    syncStatus?: SyncStatus;
  }

  /**
   * 端云协同数据库开关配置信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DBSwitchInfo {
    /**
     * 数据库是否启用端云协同开关。true为启用端云协同开关，false为不启用该开关。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    enable: boolean;

    /**
     * 表级别的端云协同开关配置信息。键为表名，值为该表的开关状态。true为打开该表的端云协同开关，false为关闭该表开关。当未配置该参数时，默认按照数据库级开关状态enable生效。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    tableInfo?: Record<string, boolean>;
  }

  /**
   * 端云协同数据库级配置。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 23 dynamic&static
   */
  interface SwitchConfig {
    /**
      * 数据库级别的开关配置信息。键为库名称，值为该库的配置信息。
      *
      * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
      * @systemapi
      * @since 23 dynamic&static
      */
     dbInfo: Record<string, DBSwitchInfo>;
  }

  /**
   * 端云协同数据库级清除配置信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DBActionInfo {
    /**
     * 数据库默认数据清除方式。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    action: ClearAction;

    /**
     * 要清除数据的表信息及清除规则。键为表名称，值为该表的清除方式。当未配置该参数时，默认使用数据库的数据清除方式。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    tableInfo?: Record<string, ClearAction>;
  }

  /**
   * 端云协同数据库级清除配置。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 23 dynamic&static
   */
  interface ClearConfig {
    /**
      * 要清除数据的库信息及清除规则。键为数据库名称，值为该数据库的清除配置信息。
      *
      * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
      * @systemapi
      * @stagemodelonly
      * @since 23 dynamic&static
      */
     dbInfo: Record<string, DBActionInfo>;
  }

  /**
   * 端云协同应用信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface BundleInfo {
    /**
     * 应用包名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bundleName: string;

    /**
     * 数据库名称。默认值为空字符串，此时查询该应用下所有数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    storeId?: string;
  }

  /**
   * 提供配置端云协同的方法，包括云同步打开、关闭、清除数据、数据变化通知。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class Config {
    /**
     * 打开端云协同开关，使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { object } switches - 各应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。 [since 10 - 10]
     * @param { Record<string, boolean> } switches - 各应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。 [since 11]
     * @param { AsyncCallback<void> } callback - 回调函数。当打开端云协同功能成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static enableCloud(
      accountId: string,
      switches: Record<string, boolean>,
      callback: AsyncCallback<void>
    ): void;

    /**
      * 打开端云协同开关，使用Promise异步回调。
      *
      * @permission ohos.permission.CLOUDDATA_CONFIG
      * @param { string } accountId - 已登录的云账号ID。
      * @param { object } switches - 各应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。 [since 10 - 10]
      * @param { Record<string, boolean> } switches - 各应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。 [since 11]
      * @returns { Promise<void> } Promise对象，无返回结果。
      * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by
      *     VerifyAccessToken.
      * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
      *     uses system API.
      * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
      *     2. Incorrect parameter types;
      *     3. Parameter verification failed.
      * @throws { BusinessError } 801 - Capability not supported.
      * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
      * @systemapi
      * @since 10 dynamic
      * @since 23 static
      */
     static enableCloud(accountId: string, switches: Record<string, boolean>): Promise<void>;

    /**
     * 关闭端云协同，使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { AsyncCallback<void> } callback - 回调函数。当关闭端云协同成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static disableCloud(accountId: string, callback: AsyncCallback<void>): void;

    /**
     * 关闭端云协同，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static disableCloud(accountId: string): Promise<void>;

    /**
     * 修改单个应用端云协同开关，使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { boolean } status - 应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。
     * @param { AsyncCallback<void> } callback - 回调函数。当修改单个应用端云协同开关成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static changeAppCloudSwitch(
      accountId: string,
      bundleName: string,
      status: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 修改单个应用端云协同开关，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { boolean } status - 应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>;

    /**
     * 修改单个应用端云协同开关，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { boolean } status - 应用的端云协同开关信息。true为打开该应用端云开关，false为关闭该应用端云开关。
     * @param { SwitchConfig } [config] - 端云协同数据库级开关配置信息。端云协同开关优先级：应用级 > 数据库级 > 表级。当未配置该参数时，默认使用应用级的开关配置信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static changeAppCloudSwitch(
      accountId: string,
      bundleName: string,
      status: boolean,
      config?: SwitchConfig
    ): Promise<void>;

    /**
     * 通知云端的数据变更，可以通过extInfo中的extraData字段指定变更的数据库名和表名，可通过userId指定用户ID，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - 透传数据，包含通知数据变更后的应用信息。
     * @param { int } [userId] - 表示用户账号ID。此参数是可选的，默认值是当前用户账号ID，如果指定了此参数，则该值必须是系统中现有的用户账号ID。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, which
     *     is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    static notifyDataChange(extInfo: ExtraData, userId?: int): Promise<void>;

    /**
     * 通知云端的数据变更，可以通过extInfo中的extraData字段指定变更的数据库名和表名，使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - 透传数据，包含通知数据变更后的应用信息。
     * @param { AsyncCallback<void> } callback - 回调函数。当数据变更通知成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission verification failed, which
     *     is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    static notifyDataChange(extInfo: ExtraData, callback: AsyncCallback<void>): void;

    /**
     * 通知云端的数据变更，可以通过extInfo中的extraData字段指定变更的数据库名和表名，可通过userId指定用户ID，使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - 透传数据，包含通知数据变更后的应用信息。
     * @param { int } userId - 用户ID，对应为系统中现有的用户ID。
     * @param { AsyncCallback<void> } callback - 回调函数。当数据变更通知成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission verification failed, which
     *     is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    static notifyDataChange(extInfo: ExtraData, userId: int, callback: AsyncCallback<void>): void;

    /**
     * 通知云端的数据变更，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { string } bundleName - 应用包名。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static notifyDataChange(accountId: string, bundleName: string): Promise<void>;

    /**
     * 通知云端的数据变更，使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { AsyncCallback<void> } callback - 回调函数。当通知云端的数据变更成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * 查询端云统计信息，返回未同步、已同步且端云信息一致和已同步且端云信息不一致的统计信息，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } [storeId] - 数据库名称。默认值为空字符串，此时将查询当前应用所有的本地数据库。
     * @returns { Promise<Record<string, Array<StatisticInfo>>> } 返回以表名为键、统计信息数组为值的结果集。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    static queryStatistics(
        accountId: string,
        bundleName: string,
        storeId?: string
    ): Promise<Record<string, Array<StatisticInfo>>>;

    /**
     * 查询上一次端云同步信息，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } [storeId] - 数据库名称。默认值为空字符串，此时查询当前应用下所有数据库上一次端云同步信息。
     * @returns { Promise<Record<string, SyncInfo>> } 返回数据库名以及上一次端云同步的信息结果集。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    static queryLastSyncInfo(
        accountId: string,
        bundleName: string,
        storeId?: string
    ): Promise<Record<string, SyncInfo>>;

    /**
     * 批量查询上一次端云同步的信息，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { Array<BundleInfo> } bundleInfos - 批量查询的应用信息数组。取值范围：数组长度为[1, 30]，超过该范围返回14800001错误码。
     * @returns { Promise<Record<string, Record<string, SyncInfo>>> } Promise对象，返回应用包名以及对应数据库的上一次端云同步信息结果集。外层Record的键为应用
     *     包名，内层Record的键为数据库名。
     * @throws { BusinessError } 201 - Permission verification failed,
     *     usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. the accountId is empty;
     *     2. the bundlename is null; 3. the number of bundleInfos exceeds the upper limit or the number is 0.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static batchQueryLastSyncInfo(
        accountId: string,
        bundleInfos: Array<BundleInfo>
    ): Promise<Record<string, Record<string, SyncInfo>>>;

    /**
     * 订阅应用同步信息变化，使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { Array<BundleInfo> } bundleInfos - 订阅的应用信息数组。取值范围：数组长度为[1, 30]，超过该范围返回14800001错误码。
     * @param { Callback<Record<string, Record<string, SyncInfo>>> } progress - 回调函数。返回应用包名以及对应数据库的同步信息结果集。外层Record的键为应用
     *     包名，内层Record的键为数据库名。
     * @throws { BusinessError } 201 - Permission verification failed,
     *     usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. bundlename is null;
     *     <br>2. the number of bundleInfos exceeds the upper limit or the number is 0.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static onSyncInfoChanged(
        bundleInfos: Array<BundleInfo>,
        progress: Callback<Record<string, Record<string, SyncInfo>>>
    ): void;

    /**
     * 取消订阅应用同步信息变化，使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { Array<BundleInfo> } bundleInfos - 取消订阅的应用信息数组。取值范围：数组长度为[1, 30]，超过该范围返回14800001错误码。取消订阅时应用信息的storeId需要与订
     *     阅时保持一致。
     * @param { Callback<Record<string, Record<string, SyncInfo>>> } [progress] - 回调函数。如果传入此参数，则取消订阅指定的回调函数；如果不传此参数，则取消该
     *     应用的所有订阅。
     * @throws { BusinessError } 201 - Permission verification failed,
     *     usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. bundlename is null;
     *     <br>2. the number of bundleInfos exceeds the upper limit or the number is 0.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static offSyncInfoChanged(
        bundleInfos: Array<BundleInfo>,
        progress?: Callback<Record<string, Record<string, SyncInfo>>>
    ): void;

    /**
     * 清除本地下载的云端数据，使用callback异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { Record<string, ClearAction> } appActions - 要清除数据的应用信息及清除规则。 [since 11]
     * @param { Record<string, ClearAction> } appActions - 要清除数据的应用信息及清除规则。 [since 10 - 10]
     * @param { AsyncCallback<void> } callback - 回调函数。当清除本地下载的云端数据成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static clear(
      accountId: string,
      appActions: Record<string, ClearAction>,
      callback: AsyncCallback<void>
    ): void;

    /**
      * 清除本地下载的云端数据，使用Promise异步回调。
      *
      * @permission ohos.permission.CLOUDDATA_CONFIG
      * @param { string } accountId - 已登录的云账号ID。
      * @param { object } appActions - 要清除数据的应用信息及清除规则。 [since 10 - 10]
      * @param { Record<string, ClearAction> } appActions - 要清除数据的应用信息及清除规则。 [since 11]
      * @returns { Promise<void> } Promise对象，无返回结果。
      * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by
      *     VerifyAccessToken.
      * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
      *     uses system API.
      * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
      *     2. Incorrect parameter types;
      *     3. Parameter verification failed.
      * @throws { BusinessError } 801 - Capability not supported.
      * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
      * @systemapi
      * @since 10 dynamic
      * @since 23 static
      */
     static clear(accountId: string, appActions: Record<string, ClearAction>): Promise<void>;

    /**
     * 清除本地下载的云端数据，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - 已登录的云账号ID。
     * @param { Record<string, ClearAction> } appActions - 要清除数据的应用信息及清除规则。
     * @param { Record<string, ClearConfig> } [config] - 端云协同数据库级清除配置信息。键为应用包名，值为该应用数据库清除规则。清除规则优先级：表级 > 数据库级 > 应用级。当未配置
     *     该参数时，默认使用应用级的数据清除方式。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static clear(
      accountId: string,
      appActions: Record<string, ClearAction>,
      config?: Record<string, ClearConfig>
    ): Promise<void>;

    /**
     * 设置全局云同步策略，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { StrategyType } strategy - 配置的策略类型。
     * @param { Array<commonType.ValueType> } param - 策略参数。不填写时默认为空，默认取消所有配置。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    static setGlobalCloudStrategy(strategy: StrategyType, param?: Array<commonType.ValueType>): Promise<void>;

    /**
     * 对指定应用的数据进行端云同步，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } bundleName - 待端云同步数据的应用包名。
     * @param { string } storeId - 待端云同步的数据库名。
     * @param { relationalStore.SyncMode } mode - 端云同步类型。
     * @param { Callback<relationalStore.ProgressDetails> } progress - 同步进度回调。返回ProgressDetails实例对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed,
     *     <br>usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     <br>application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Empty conditions;
     *     <br>2. Missing GROUP BY clause.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static cloudSync(
      bundleName: string,
      storeId: string,
      mode: relationalStore.SyncMode,
      progress: Callback<relationalStore.ProgressDetails>
    ): Promise<void>;

    /**
     * 对指定应用的数据按照云同步配置信息进行端云同步，当
     * [CloudSyncConfig](docroot://reference/apis-arkdata/js-apis-data-relationalStore-sys.md#cloudsyncconfig)中的
     * downloadOnly为true时，端云同步仅把云侧数据同步到本地，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { BundleInfo } bundleInfo - 应用包信息配置。BundleInfo的实例对象。
     * @param { relationalStore.CloudSyncConfig } config - 云同步配置。
     * @param { Callback<relationalStore.ProgressDetails> } progress - 进度回调函数。返回ProgressDetails实例对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed,
     *     <br>usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application is not a system application.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Empty conditions.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static cloudSyncEx(
        bundleInfo: BundleInfo,
        config: relationalStore.CloudSyncConfig,
        progress: Callback<relationalStore.ProgressDetails>
    ): Promise<void>;

    /**
     * 停止与云端的数据同步，使用Promise异步回调。
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { Array<BundleInfo> } bundleInfos - 应用包信息配置数组。取值范围：数组长度为[1, 30]，超过该范围返回14800001错误码。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed,
     *     <br>usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system
     *     application uses system API.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. bundlename is null;
     *     <br>2. the number of bundleInfos exceeds the upper limit or the number is 0.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static stopCloudSync(bundleInfos: Array<BundleInfo>): Promise<void>;
  }

  /**
   * 云同步策略类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @since 12 dynamic
   * @since 23 static
   */
  enum StrategyType {

    /**
     * 通过网络同步策略。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 12 dynamic
     * @since 23 static
     */
    NETWORK
  }

  /**
   * 网络策略参数枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @since 12 dynamic
   * @since 23 static
   */
  enum NetWorkStrategy {

    /**
     * WIFI网络策略。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI = 1,

    /**
     * 蜂窝网络策略。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 12 dynamic
     * @since 23 static
     */
    CELLULAR = 2,
  }

  /**
   * 设置应用自身的云同步策略，使用Promise异步回调。
   *
   * @param { StrategyType } strategy - 配置的策略类型。
   * @param { Array<commonType.ValueType> } param - 策略参数，类型为Array<commonType.ValueType>，实际传入值为
   *     [NetWorkStrategy]{@link cloudData.NetWorkStrategy}枚举值，取值范围为WIFI和CELLULAR，默认支持WIFI和蜂窝网络策略。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @since 12 dynamic
   * @since 23 static
   */
  function setCloudStrategy(strategy: StrategyType, param?: Array<commonType.ValueType>): Promise<void>;

  /**
   * 提供端云共享的方法，包括发起共享、取消共享、退出共享、更改共享数据权限、查找共享参与者、确认邀请、更改已确认的邀请、查找共享资源。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export namespace sharing {
    /**
     * 端云共享参与者的角色。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enum Role {
      /**
       * 端云共享邀请者。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      ROLE_INVITER = 0,

      /**
       * 端云共享被邀请者。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      ROLE_INVITEE = 1,
    }

    /**
     * 端云共享状态。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enum State {
      /**
       * 未知状态。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      STATE_UNKNOWN = 0,

      /**
       * 端云共享已接受。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      STATE_ACCEPTED = 1,

      /**
       * 端云共享被拒绝。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      STATE_REJECTED = 2,

      /**
       * 端云共享被暂时挂起，未作处理。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      STATE_SUSPENDED = 3,

      /**
       * 端云共享不可用。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 12 dynamic
       * @since 23 static
       */
      STATE_UNAVAILABLE = 4,
    }

    /**
     * 端云共享错误码。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enum SharingCode {
      /**
       * 成功。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      SUCCESS = 0,

      /**
       * 重复邀请，表示当前参与者已被邀请。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      REPEATED_REQUEST = 1,

      /**
       * 非端云共享的邀请者，表示当前参与者不是端云共享的邀请者。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      NOT_INVITER = 2,

      /**
       * 非法参与者，表示当前参与者既不是共享的邀请者，也不是共享的被邀请者。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      NOT_INVITER_OR_INVITEE = 3,

      /**
       * 端云共享次数达到上限，表示当前账号可共享的次数达到上限。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      OVER_QUOTA = 4,

      /**
       * 端云共享参与者数量达到上限。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      TOO_MANY_PARTICIPANTS = 5,

      /**
       * 无效的参数。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      INVALID_ARGS = 6,

      /**
       * 网络错误。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      NETWORK_ERROR = 7,

      /**
       * 云开关未打开。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      CLOUD_DISABLED = 8,

      /**
       * 服务端发生错误。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      SERVER_ERROR = 9,

      /**
       * 系统发生内部错误。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      INNER_ERROR = 10,

      /**
       * 无效的邀请，表示当前邀请已失效或不存在。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      INVALID_INVITATION = 11,

      /**
       * 速率限制，表示单次同步的数据量达到上限。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      RATE_LIMIT = 12,

      /**
       * 定制错误，小于该枚举值的错误码用于定义系统内部的标准错误码，大于该枚举值的错误码用于使用者自定义错误码。请使用枚举名称而非枚举值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      CUSTOM_ERROR = 1000,
    }

    /**
     * 端云共享结果的返回值。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    interface Result<T> {
      /**
       * 错误码。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      code: int;

      /**
       * 错误码详细描述，默认为undefined。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      description?: string;

      /**
       * 返回结果的值，具体类型由参数T指定，默认为undefined。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      value?: T;
    }

    /**
     * 指定的端云共享数据的权限。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    interface Privilege {
      /**
       * 被共享者是否可修改共享的数据。true表示可修改，false表示不可修改，默认不可修改。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      writable?: boolean;

      /**
       * 被共享者是否可读取共享的数据。true表示可读取，false表示不可读取，默认不可读取
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      readable?: boolean;

      /**
       * 被共享者是否可创建新的共享数据。true表示可创建，false表示不可创建，默认不可创建。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      creatable?: boolean;

      /**
       * 被共享者是否可删除共享的数据。true表示可删除，false表示不可删除，默认不可删除。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      deletable?: boolean;

      /**
       * 被共享者是否可将共享的数据再次共享给其他参与者。true表示可再次共享，false表示不可再次共享，默认不可再次共享。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      shareable?: boolean;
    }

    /**
     * 端云共享的参与者。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    interface Participant {
      /**
       * 参与者的ID。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      identity: string;

      /**
       * 参与者的角色，为邀请者或被邀请者。默认为undefined。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      role?: Role;

      /**
       * 共享的状态。默认为undefined。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      state?: State;

      /**
       * 指定的共享数据权限。默认为Privilege的默认值。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      privilege?: Privilege;

      /**
       * 附加信息，用于扩展额外的参与者信息。如用于参与者身份校验的校验码等，默认为空字符串。
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      attachInfo?: string;
    }

    /**
     * 根据谓词条件匹配的数据申请共享资源标识并发起共享，返回已共享资源的结果集。
	 * 如果指定了列字段，则返回的结果集中同时包含对应列的字段值，使用Promise异步回调。
     *
     * @param { string } storeId - 数据库名称。
     * @param { relationalStore.RdbPredicates } predicates - 表示查找共享资源标识的数据的谓词条件。
     * @param { Array<Participant> } participants - 端云共享的参与者。
     * @param { Array<string> } [columns] - 表示要查找的列字段名。默认为undefined，不返回列字段。
     * @returns { Promise<relationalStore.ResultSet> } Promise对象，返回查询并共享的共享资源标识结果集。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function allocResourceAndShare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      columns?: Array<string>
    ): Promise<relationalStore.ResultSet>;

    /**
     * 根据谓词条件匹配的数据申请共享资源标识并发起共享，返回已共享资源的结果集，使用callback异步回调。
     *
     * @param { string } storeId - 数据库名称。
     * @param { relationalStore.RdbPredicates } predicates - 表示查找共享资源标识的数据的谓词条件。
     * @param { Array<Participant> } participants - 端云共享的参与者。
     * @param { AsyncCallback<relationalStore.ResultSet> } callback - 回调函数。返回查询并共享的共享资源标识结果集。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function allocResourceAndShare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      callback: AsyncCallback<relationalStore.ResultSet>
    ): void;

    /**
     * 根据谓词条件匹配的数据申请共享资源标识并发起共享，返回已共享资源的结果集
	 * 并根据指定的列字段，返回的结果集中同时包含对应列的字段值，使用callback异步回调。
     *
     * @param { string } storeId - 数据库名称。
     * @param { relationalStore.RdbPredicates } predicates - 表示查找共享资源标识的数据的谓词条件。
     * @param { Array<Participant> } participants - 端云共享的参与者。
     * @param { Array<string> } columns - 表示要查找的列字段名。
     * @param { AsyncCallback<relationalStore.ResultSet> } callback -
     *     回调函数。返回查询并共享的共享资源标识结果集。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function allocResourceAndShare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      columns: Array<string>,
      callback: AsyncCallback<relationalStore.ResultSet>
    ): void;

    /**
     * 根据指定的共享资源标识和共享参与者发起共享邀请，使用callback异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { Array<Participant> } participants - 端云共享的参与者。
     * @param { AsyncCallback<Result<Array<Result<Participant>>>> } callback - 回调函数。返回端云共享的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function share(
      sharingResource: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void;

    /**
     * 根据指定的共享资源标识和共享参与者发起共享邀请，使用Promise异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { Array<Participant> } participants - 端云共享的参与者。
     * @returns { Promise<Result<Array<Result<Participant>>>> } Promise对象，返回端云共享的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function share(
      sharingResource: string,
      participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * 根据指定的共享资源标识和共享参与者发起共享邀请，使用callback异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { Array<Participant> } participants - 端云共享的参与者。
     * @param { AsyncCallback<Result<Array<Result<Participant>>>> } callback - 回调函数。返回端云共享的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function unshare(
      sharingResource: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void;

    /**
     * 根据指定的共享资源标识和共享参与者发起共享邀请，使用Promise异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { Array<Participant> } participants - 端云共享的参与者。
     * @returns { Promise<Result<Array<Result<Participant>>>> } Promise对象，返回端云共享的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function unshare(
      sharingResource: string,
      participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * 根据指定的共享资源标识退出共享，使用callback异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { AsyncCallback<Result<void>> } callback - 回调函数。返回退出共享的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function exit(sharingResource: string, callback: AsyncCallback<Result<void>>): void;

    /**
     * 根据指定的共享资源标识退出共享，使用Promise异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @returns { Promise<Result<void>> } Promise对象，返回退出端云共享的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function exit(sharingResource: string): Promise<Result<void>>;

    /**
     * 根据指定的共享资源标识更改共享参与者对共享数据的操作权限，使用callback异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { Array<Participant> } participants - 端云共享的参与者。
     * @param { AsyncCallback<Result<Array<Result<Participant>>>> } callback - 回调函数。返回更改权限的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function changePrivilege(
      sharingResource: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void;

    /**
     * 根据指定的共享资源标识更改共享参与者对共享数据的操作权限，使用Promise异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { Array<Participant> } participants - 端云共享的参与者。
     * @returns { Promise<Result<Array<Result<Participant>>>> } Promise对象，返回更改共享参与者权限的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function changePrivilege(
      sharingResource: string,
      participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * 根据指定的共享资源标识查询当前共享的参与者，使用callback异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { AsyncCallback<Result<Array<Participant>>> } callback -
     *     回调函数。返回查找共享参与者的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function queryParticipants(sharingResource: string, callback: AsyncCallback<Result<Array<Participant>>>): void;

    /**
     * 根据指定的共享资源标识查询当前共享的参与者，使用Promise异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @returns { Promise<Result<Array<Participant>>> } Promise对象，返回查询共享参与者的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function queryParticipants(sharingResource: string): Promise<Result<Array<Participant>>>;

    /**
     * 根据指定的共享邀请码查询当前共享的参与者，使用callback异步回调。
     *
     * @param { string } invitationCode - 端云共享的邀请码。
     * @param { AsyncCallback<Result<Array<Participant>>> } callback -
     *     回调函数。返回查找共享参与者的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function queryParticipantsByInvitation(
      invitationCode: string,
      callback: AsyncCallback<Result<Array<Participant>>>
    ): void;

    /**
     * 根据指定的共享邀请码查询当前共享的参与者，使用Promise异步回调。
     *
     * @param { string } invitationCode - 端云共享的邀请码。
     * @returns { Promise<Result<Array<Participant>>> } Promise对象，返回查找共享参与者的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function queryParticipantsByInvitation(invitationCode: string): Promise<Result<Array<Participant>>>;

    /**
     * 被邀请者根据共享邀请码确认当前邀请，并获取当前邀请的共享资源标识，使用callback异步回调。
     *
     * @param { string } invitationCode - 端云共享的邀请码。
     * @param { State } state - 确认邀请的状态。
     * @param { AsyncCallback<Result<string>> } callback - 回调函数。返回确认邀请的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function confirmInvitation(invitationCode: string, state: State, callback: AsyncCallback<Result<string>>): void;

    /**
     * 被邀请者根据共享邀请码确认当前邀请，并获取当前邀请的共享资源标识，使用Promise异步回调。
     *
     * @param { string } invitationCode - 端云共享的邀请码。
     * @param { State } state - 确认邀请的状态。
     * @returns { Promise<Result<string>> } Promise对象，返回确认共享邀请的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function confirmInvitation(invitationCode: string, state: State): Promise<Result<string>>;

    /**
     * 根据共享资源标识更改共享邀请的状态，使用callback异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { State } state - 更改邀请的状态。
     * @param { AsyncCallback<Result<void>> } callback - 回调函数。返回更改邀请状态的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function changeConfirmation(sharingResource: string, state: State, callback: AsyncCallback<Result<void>>): void;

    /**
     * 根据共享资源标识更改共享邀请的状态，使用Promise异步回调。
     *
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { State } state - 更改邀请的状态。
     * @returns { Promise<Result<void>> } Promise对象，返回更改共享邀请状态的结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function changeConfirmation(sharingResource: string, state: State): Promise<Result<void>>;
  }

  /**
   * 自动同步触发模式枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AutoSyncTriggerMode {
    /**
     * 账号登录触发模式。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ACCOUNT_LOGIN = 0,

    /**
     * 同步开关触发模式。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CLOUD_SWITCH_ON = 1,

    /**
     * 网络恢复后的触发模式。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NETWORK_RECOVER = 2,

    /**
     * 云端数据变更触发模式。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CLOUD_DATA_CHANGE = 3,

    /**
     * 用户变更触发模式。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_CHANGE = 4
  }

  /**
   * 自动同步触发信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AutoSyncTriggerInfo {
    /**
     * 自动同步触发模式。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    mode: AutoSyncTriggerMode;
  }

  /**
   * 在已打开端云同步且应用关闭自动同步的条件下，注册自动同步触发事件通知。当满足自动触发条件时，回调函数会被调用。
   *
   * @param { Callback<AutoSyncTriggerInfo> } observer - 回调函数。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onAutoSyncTrigger(observer: Callback<AutoSyncTriggerInfo>): void;

  /**
   * 取消订阅自动同步触发事件通知。
   *
   * @param { Callback<AutoSyncTriggerInfo> } [observer] - 回调函数。 若传入observer，则取消指定回调函数的订阅；若不传入observer，则取消所有已注册的订阅。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offAutoSyncTrigger(observer?: Callback<AutoSyncTriggerInfo>): void;
}

export default cloudData;