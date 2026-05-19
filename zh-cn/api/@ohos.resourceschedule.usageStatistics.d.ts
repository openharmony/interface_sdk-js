/*
 * Copyright (c) 2023-2026  Huawei Device Co., Ltd.
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
 * @file 设备使用信息统计
 * @kit BackgroundTasksKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * 本模块提供设备使用信息统计能力，包括查询应用是否为常用应用、优先级分组、使用时长、系统事件（休眠、唤醒、解锁、锁屏）信息、应用事件（前台、后台、长时任务开始和结束）信息、通知次数等不同类型信息。
 * 
 * > **说明：**
 * >
 * > 本模块接口为系统接口。
 *
 * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace usageStatistics {
  /**
   * FA模型的使用信息属性集合。
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface BundleStatsInfo {
    /**
     * 用户id。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * 应用在前台可见的总时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    abilityInFgTotalTime?: long;

    /**
     * 应用最后一次使用的时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    abilityPrevAccessTime?: long;

    /**
     * 应用最后一次在前台可见的时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    abilityPrevSeenTime?: long;

    /**
     * 应用在前台可见的总时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    abilitySeenTotalTime?: long;

    /**
     * 应用包名。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName?: string;

    /**
     * 应用在前台可见的总时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    fgAbilityAccessTotalTime?: long;

    /**
     * 应用最后一次访问前台的时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    fgAbilityPrevAccessTime?: long;

    /**
     * BundleActiveInfo对象中第一条应用使用统计的记录时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    infosBeginTime?: long;

    /**
     * BundleActiveInfo对象中最后一条应用使用统计的记录时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    infosEndTime?: long;

    /**
     * 应用程序的索引。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 15 dynamic
     * @since 23 static
     */
    appIndex?: int;
  }

  /**
   * FA模型的使用信息属性集合。
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface HapFormInfo {
    /**
     * 卡片名称。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    formName: string;

    /**
     * 卡片尺寸。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    formDimension: int;

    /**
     * 卡片Id。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    formId: long;

    /**
     * 卡片的上一次点击时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    formLastUsedTime: long;

    /**
     * 卡片的点击次数。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    count: int;
  }

  /**
   * FA模型的使用信息属性集合。
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface HapModuleInfo {
    /**
     * 设备Id。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId?: string;

    /**
     * 应用名称。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * FA所属module名。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * FA的MainAbility名。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    abilityName?: string;

    /**
     * FA的应用labelId。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    appLabelId?: long;

    /**
     * FA所属module的labelId。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    labelId?: long;

    /**
     * FA所属的应用descriptionId。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionId?: long;

    /**
     * FA的MainAbility labelId。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    abilityLableId?: long;

    /**
     * FA的MainAbility descriptionId。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    abilityDescriptionId?: long;

    /**
     * FA的MainAbility iconId。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    abilityIconId?: long;

    /**
     * FA的启动次数。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    launchedCount: int;

    /**
     * FA的上一次使用时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    lastModuleUsedTime: long;

    /**
     * FA中卡片的使用记录。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    formRecords: Array<HapFormInfo>;
  }

  /**
   * FA模型的使用信息属性集合。
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface DeviceEventStats {
    /**
     * 通知应用包名或者系统事件名。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 应用事件类型。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventId: int;

    /**
     * 应用通知次数或者系统事件触发次数。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    count: int;
  }

  /**
   * FA模型的使用信息属性集合。
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface BundleEvents {
    /**
     * 应用程序的使用优先级组。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    appGroup?: int;

    /**
     * 应用名称。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName?: string;

    /**
     * 快捷方式id。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    indexOfLink?: string;

    /**
     * 类名。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    nameOfClass?: string;

    /**
     * 应用事件发生的时间戳，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventOccurredTime?: long;

    /**
     * 应用事件类型。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventId?: int;
  }

  /**
   * 应用分组变化回调返回的属性集合
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface AppGroupCallbackInfo {
    /**
     * 变化前的应用分组。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    appOldGroup: int;

    /**
     * 变化后的应用分组。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    appNewGroup: int;

    /**
     * 用户id。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    userId: int;

    /**
     * 分组变化原因。
     * 
     * - 256:使用记录初创建时，默认匹配的原因。
     * - 512:计算优先级分组时异常。
     * - 768:使用时长变化。  
     * - 1024:有其他应用为当前应用强制设置优先级分组。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    changeReason: long;

    /**
     * 应用名称。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName: string;
  }

  /**
   * 查询指定的应用是否为常用应用（GroupType值≤30），使用Callback形式返回。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { string } bundleName - 应用的bundleName。
   * @param { AsyncCallback<boolean> } callback - 回调函数。
   *     当查询成功，err为undefined，data为若应用为常用应用，返回true；若指定应用不是常用应用或bundleName无效，则返回false；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isIdleState(bundleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * 查询指定的应用是否为常用应用（GroupType值≤30），使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { string } bundleName - 应用的bundleName。
   * @returns { Promise<boolean> } Promise对象。
   *     若应用为常用应用，返回true；若指定应用不是常用应用或bundleName无效，则返回false。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isIdleState(bundleName: string): Promise<boolean>;

  /**
   * 查询指定的应用是否为常用应用（GroupType值≤30），使用同步方式返回。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { string } bundleName - 应用的bundleName。
   * @returns { boolean } 若应用为常用应用，返回true；若指定应用不是常用应用或bundleName无效，则返回false。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function isIdleStateSync(bundleName: string): boolean;

  /**
   * 查询当前应用的优先级分组，使用Callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { AsyncCallback<int> } callback - 回调函数。
   *     当查询成功，err为undefined，data为当前应用优先级分组结果，值越小，优先级越高；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000005 - Application is not installed.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10100002 - Failed to get the application group information.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryAppGroup(callback: AsyncCallback<int>): void;

  /**
   * 查询当前应用的优先级分组，使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @returns { Promise<int> } Promise对象。返回当前应用优先级分组结果，值越小，优先级越高。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000005 - Application is not installed.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10100002 - Failed to get the application group information.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryAppGroup(): Promise<int>;

  /**
   * 查询当前应用的优先级分组，使用同步方式返回。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @returns { int } 返回当前应用优先级分组结果，值越小，优先级越高。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000005 - Application is not installed.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10100002 - Failed to get the application group information.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryAppGroupSync(): int;

  /**
   * 查询指定bundleName应用的优先级分组，使用Callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { string } bundleName - 应用的bundleName。
   * @param { AsyncCallback<int> } callback - 回调函数。
   *     当查询成功，err为undefined，data为指定应用的优先级分组结果，值越小，优先级越高；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000005 - Application is not installed.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10100002 - Failed to get the application group information.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryAppGroup(bundleName: string, callback: AsyncCallback<int>): void;

  /**
   * 查询指定bundleName应用的优先级分组，使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { string } bundleName - 应用的bundleName。
   * @returns { Promise<int> } Promise对象。返回指定应用的优先级分组结果，值越小，优先级越高。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000005 - Application is not installed.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10100002 - Failed to get the application group information.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryAppGroup(bundleName: string): Promise<int>;

  /**
   * 查询指定bundleName应用的优先级分组，使用同步方式返回。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { string } bundleName - 应用的bundleName。
   * @returns { int } 返回应用的优先级分组结果，值越小，优先级越高。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000005 - Application is not installed.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10100002 - Failed to get the application group information.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryAppGroupSync(bundleName: string): int;

  /**
   * FA模型的使用信息属性集合。
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  type BundleStatsMap = Record<string, BundleStatsInfo>;

  /**
   * 通过指定起始和结束时间，查询应用使用时长的具体信息，统计的最小颗粒度是天，使用Callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @param { AsyncCallback<BundleStatsMap> } callback - 回调函数。
   *     当查询成功，err为undefined，data为指定时间段内应用使用时长的具体信息；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryBundleStatsInfos(begin: long, end: long, callback: AsyncCallback<BundleStatsMap>): void;

  /**
   * 通过指定起始和结束时间，查询应用使用时长的具体信息，统计的最小颗粒度是天，使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @returns { Promise<BundleStatsMap> } Promise对象。返回指定时间段内应用使用时长的具体信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryBundleStatsInfos(begin: long, end: long): Promise<BundleStatsMap>;

  /**
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 15 dynamic
   * @since 23 static
   */
  type AppStatsMap = Record<string, Array<BundleStatsInfo>>;

  /**
   * 通过指定起始和结束时间，查询应用使用时长的具体信息（包含分身应用），统计的最小颗粒度是天。使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @returns { Promise<AppStatsMap> } Promise对象。返回指定时间段内应用使用的具体信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 15 dynamic
   * @since 23 static
   */
  function queryAppStatsInfos(begin: long, end: long): Promise<AppStatsMap>;

  /**
   * 通过指定bundleName和应用的index，查询应用使用具体信息，统计的最小颗粒度是天，使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { Record<string, Array<long>> } appInfo - 参数为map结构，key是bundleName，value是查询应用的index（可以有多个，通过Array传入）。
   * @returns { Promise<AppStatsMap> } Promise对象。返回指定bundleName和index应用使用的具体信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 15 dynamic
   * @since 23 static
   */
  function queryLastUseTime(appInfo: Record<string, Array<long>>): Promise<AppStatsMap>;

  /**
   * 应用使用时长的查询类型。
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum IntervalType {
    /**
     * 表示系统自行判断最合适的查询类型（天、周、月、年）去查询指定时间段间隔的应用使用时长信息。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BY_OPTIMIZED = 0,

    /**
     * 表示系统按照天去查询指定时间段间隔的应用使用时长信息。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BY_DAILY = 1,

    /**
     * 表示系统按照周去查询指定时间段间隔的应用使用时长信息。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BY_WEEKLY = 2,

    /**
     * 表示系统按照月去查询指定时间段间隔的应用使用时长信息。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BY_MONTHLY = 3,

    /**
     * 表示系统按照年去查询指定时间段间隔的应用使用时长信息。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BY_ANNUALLY = 4
  }

  /**
   * 通过指定时间段间隔（天、周、月、年），查询应用使用时长的统计信息，使用Callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { IntervalType } byInterval - 查询类型。
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @param { AsyncCallback<Array<BundleStatsInfo>> } callback - 回调函数。
   *     当查询成功，err为undefined，data为指定时间段间隔内，应用使用时长的统计信息；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryBundleStatsInfoByInterval(
    byInterval: IntervalType,
    begin: long,
    end: long,
    callback: AsyncCallback<Array<BundleStatsInfo>>
  ): void;

  /**
   * 通过指定时间段间隔（天、周、月、年），查询应用使用时长的统计信息，使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { IntervalType } byInterval - 查询类型。
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @returns { Promise<Array<BundleStatsInfo>> } Promise对象。返回指定时间段间隔内，应用使用时长的统计信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryBundleStatsInfoByInterval(
    byInterval: IntervalType,
    begin: long,
    end: long
  ): Promise<Array<BundleStatsInfo>>;

  /**
   * 通过指定起始和结束时间，查询所有应用的事件集合，使用Callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @param { AsyncCallback<Array<BundleEvents>> } callback - 回调方法。
   *     当查询成功，err为undefined，data为起始和结束时间段内，所有应用的事件集合；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryBundleEvents(begin: long, end: long, callback: AsyncCallback<Array<BundleEvents>>): void;

  /**
   * 通过指定起始和结束时间，查询所有应用的事件集合，使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @returns { Promise<Array<BundleEvents>> } Promise对象。返回起始和结束时间段内，所有应用的事件集合。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryBundleEvents(begin: long, end: long): Promise<Array<BundleEvents>>;

    /**
     * 通过指定起始时间、结束时间及最大返回条数，查询指定时间段内所有应用的事件集合。若条数大于maxNum，则按事件发生时间降序排列，返回前maxNum条，否则返回所有数据。使用Promise异步回调。
     *
     * @permission ohos.permission.BUNDLE_ACTIVE_INFO
     * @param { long } begin - 起始时间。<br/>单位：ms
     * @param { long } end - 结束时间。<br/>单位：ms
     * @param { int } maxNum - 返回的事件的条数。<br/>取值范围：[1, 1000]。
     * @returns { Promise<Array<BundleEvents>> } Promise对象，返回起始和结束时间段内，所有应用的事件集合。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not System App.
     * @throws { BusinessError } 10000001 - Memory operation failed.
     * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
     *     <br> 2. Failed to apply for memory.
     * @throws { BusinessError } 10000003 - Failed to get system ability manager.
     * @throws { BusinessError } 10000004 - Failed to access the device usage service.
     * @throws { BusinessError } 10000006 - Failed to get the application information.
     * @throws { BusinessError } 10000007 - Failed to get the system time.
     * @throws { BusinessError } 10000008 - Parameter error. Possible cause: 1. Mandatory parameters are left
     *     unspecified;
     *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function queryBundleEvents(begin: long, end: long, maxNum: int): Promise<Array<BundleEvents>>;

  /**
   * 通过指定起始和结束时间，查询当前应用的事件集合，使用Callback异步回调。
   *
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @param { AsyncCallback<Array<BundleEvents>> } callback - 回调方法。
   *     当查询成功，err为undefined，data为指定起始和结束时间段内，当前应用的事件集合；否则为错误对象。
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryCurrentBundleEvents(begin: long, end: long, callback: AsyncCallback<Array<BundleEvents>>): void;

  /**
   * 通过指定起始和结束时间段内，查询当前应用的事件集合，使用Promise异步回调。
   *
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @returns { Promise<Array<BundleEvents>> } Promise对象。返回指定起始和结束时间段内，当前应用的事件集合。
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryCurrentBundleEvents(begin: long, end: long): Promise<Array<BundleEvents>>;

   /**
    * 通过指定起始时间、结束时间及最大返回条数，查询指定时间段内当前应用的事件集合。若条数大于maxNum，则按事件发生时间降序排列，返回前maxNum条，否则返回所有数据。使用Promise异步回调。
    *
    * @param { long } begin - 起始时间。<br/>单位：ms
    * @param { long } end - 结束时间。<br/>单位：ms
    * @param { int } maxNum - 返回的事件的条数。<br/>取值范围：[1, 1000]
    * @returns { Promise<Array<BundleEvents>> } Promise对象，返回指定起始和结束时间段内，当前应用的事件集合。
    * @throws { BusinessError } 202 - Not System App.
    * @throws { BusinessError } 10000001 - Memory operation failed.
    * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
    *     <br> 2. Failed to apply for memory.
    * @throws { BusinessError } 10000003 - Failed to get system ability manager.
    * @throws { BusinessError } 10000004 - Failed to access the device usage service.
    * @throws { BusinessError } 10000006 - Failed to get the application information.
    * @throws { BusinessError } 10000007 - Failed to get the system time.
    * @throws { BusinessError } 10000008 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified
    *     ;
    *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
    * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
    * @systemapi Hide this for inner system use.
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
   function queryCurrentBundleEvents(begin: long, end: long, maxNum: int): Promise<Array<BundleEvents>>;

  /**
   * 根据设置的maxNum，查询FA模型下各应用不用Hap包的使用记录。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用Callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { int } maxNum - 使用记录的条数，取值范围为[1，1000]。
   * @param { AsyncCallback<Array<HapModuleInfo>> } callback - 回调方法。
   *     当查询成功，err为undefined，data为FA模型下各应用不用Hap包的使用记录（不超过maxNum条）；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryModuleUsageRecords(maxNum: int, callback: AsyncCallback<Array<HapModuleInfo>>): void;

  /**
   * 根据设置的maxNum，查询FA模型下各应用不用Hap包的使用记录。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { int } maxNum - 使用记录的条数，取值范围为[1，1000]。
   * @returns { Promise<Array<HapModuleInfo>> } Promise对象，返回不超过maxNum条，FA模型下各应用不用Hap包的使用记录。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryModuleUsageRecords(maxNum: int): Promise<Array<HapModuleInfo>>;

  /**
   * 查询FA模型下各应用不用Hap包的使用记录（不超过1000条）。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用CallBack异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { AsyncCallback<Array<HapModuleInfo>> } callback - 回调函数。
   *     当查询成功，err为undefined，data为FA模型下各应用不用Hap包的使用记录（不超过1000条）；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryModuleUsageRecords(callback: AsyncCallback<Array<HapModuleInfo>>): void;

  /**
   * 查询FA模型下各应用不用Hap包的使用记录（不超过1000条）。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用Promise异步回调。
   * 
   * 使用Promise形式返回不超过1000条FA使用记录，FA使用记录由近及远排序。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @returns { Promise<Array<HapModuleInfo>> } Promise对象。返回FA模型下各应用不用Hap包的使用记录（不超过1000条）。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryModuleUsageRecords(): Promise<Array<HapModuleInfo>>;

  /**
   * 应用分组的设置类型。
   *
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum GroupType {
    /**
     * 活跃分组。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ALIVE_GROUP = 10,

    /**
     * 经常使用，但当前并未在活跃态。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DAILY_GROUP = 20,

    /**
     * 常用分组，定期使用，但不是每天使用。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FIXED_GROUP = 30,

    /**
     * 极少使用分组，不经常使用。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RARE_GROUP = 40,

    /**
     * 受限使用分组。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    LIMITED_GROUP = 50,

    /**
     * 从未使用分组，安装但是从未运行过。
     *
     * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NEVER_GROUP = 60
  }

  /**
   * 将指定bundleName应用的分组设置为newGroup，仅支持当前应用为其他应用设置，使用CallBack异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { string } bundleName - 应用的bundleName。
   * @param { GroupType } newGroup - 应用分组类型。
   * @param { AsyncCallback<void> } callback - 回调函数。
   *     当设置成功，err为undefined；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10100001 - Repeated operation on the application group.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setAppGroup(bundleName: string, newGroup: GroupType, callback: AsyncCallback<void>): void;

  /**
   * 将指定bundleName应用的分组设置为newGroup，仅支持当前应用为其他应用设置，使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { string } bundleName - 应用的bundleName。
   * @param { GroupType } newGroup - 应用分组类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10100001 - Repeated operation on the application group.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setAppGroup(bundleName: string, newGroup: GroupType): Promise<void>;

  /**
   * 应用注册分组变化监听，即用户名下的某个应用分组发生变化时，向所有已注册分组变化监听的应用返回[AppGroupCallbackInfo]{@link usageStatistics.AppGroupCallbackInfo}信息。
   * 使用Callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { Callback<AppGroupCallbackInfo> } groupCallback - 返回的应用分组变化信息。
   * @param { AsyncCallback<void> } callback - 回调函数。
   *     当注册监听成功，err为undefined；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10100001 - Repeated operation on the application group.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function registerAppGroupCallBack(groupCallback: Callback<AppGroupCallbackInfo>, callback: AsyncCallback<void>): void;

  /**
   * 注册应用分组变化监听，即用户名下的某个应用分组发生变化时，向所有已注册分组变化监听的应用返回[AppGroupCallbackInfo]{@link usageStatistics.AppGroupCallbackInfo}信息。
   * 使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { Callback<AppGroupCallbackInfo> } groupCallback - 返回的应用分组变化信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10100001 - Repeated operation on the application group.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function registerAppGroupCallBack(groupCallback: Callback<AppGroupCallbackInfo>): Promise<void>;

  /**
   * 应用解除分组变化监听。使用callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { AsyncCallback<void> } callback - 回调函数。
   *     当解除监听成功，err为undefined；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10100001 - Repeated operation on the application group.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function unregisterAppGroupCallBack(callback: AsyncCallback<void>): void;

  /**
   * 应用解除分组变化监听。使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10100001 - Repeated operation on the application group.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.AppGroup
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function unregisterAppGroupCallBack(): Promise<void>;

  /**
   * 通过指定起始和结束时间，查询系统事件（休眠、唤醒、解锁、锁屏）的统计信息，使用Callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @param { AsyncCallback<Array<DeviceEventStats>> } callback - 回调函数。
   *     当查询成功，err为undefined，data为起始和结束时间段内，系统事件（休眠、唤醒、解锁、锁屏）的统计信息；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryDeviceEventStats(begin: long, end: long, callback: AsyncCallback<Array<DeviceEventStats>>): void;

  /**
   * 通过指定起始和结束时间，查询系统事件（休眠、唤醒、解锁、锁屏）的统计信息，使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @returns { Promise<Array<DeviceEventStats>> } Promise对象。返回起始和结束时间段内，系统事件（休眠、唤醒、解锁、锁屏）的统计信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryDeviceEventStats(begin: long, end: long): Promise<Array<DeviceEventStats>>;

  /**
   * 通过指定起始和结束时间，查询所有应用的通知次数，使用Callback异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @param { AsyncCallback<Array<DeviceEventStats>> } callback - 回调函数。
   *     当查询成功，err为undefined，data为指定起始和结束时间段内，所有应用的通知次数；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryNotificationEventStats(
    begin: long,
    end: long,
    callback: AsyncCallback<Array<DeviceEventStats>>
  ): void;

  /**
   * 通过指定起始和结束时间，查询所有应用的通知次数，使用Promise异步回调。
   *
   * @permission ohos.permission.BUNDLE_ACTIVE_INFO
   * @param { long } begin - 起始时间，单位：ms。
   * @param { long } end - 结束时间，单位：ms。
   * @returns { Promise<Array<DeviceEventStats>> } Promise对象。返回指定起始和结束时间段内，所有应用的通知次数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     <br> 2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 10000001 - Memory operation failed.
   * @throws { BusinessError } 10000002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     <br> 2. Failed to apply for memory.
   * @throws { BusinessError } 10000003 - Failed to get system ability manager.
   * @throws { BusinessError } 10000004 - Failed to access the device usage service.
   * @throws { BusinessError } 10000006 - Failed to get the application information.
   * @throws { BusinessError } 10000007 - Failed to get the system time.
   * @syscap SystemCapability.ResourceSchedule.UsageStatistics.App
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function queryNotificationEventStats(begin: long, end: long): Promise<Array<DeviceEventStats>>;
}

export default usageStatistics;