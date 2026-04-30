/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';
import { ProcessInformation as _ProcessInformation } from './application/ProcessInformation';
import bundleManager from './@ohos.bundle.bundleManager';
import { RunningMultiAppInfo as _RunningMultiAppInfo } from './application/RunningMultiAppInfo';
/*** if arkts dynamic */
import * as _ApplicationStateObserver from './application/ApplicationStateObserver';
import type * as _AppForegroundStateObserver from './application/AppForegroundStateObserver';
import * as _AbilityStateData from './application/AbilityStateData';
import * as _AppStateData from './application/AppStateData';
import type * as _ProcessData from './application/ProcessData';
import * as _AbilityFirstFrameStateObserver from './application/AbilityFirstFrameStateObserver';
import * as _AbilityFirstFrameStateData from './application/AbilityFirstFrameStateData';
/*** endif */
/*** if arkts static */
import _ApplicationStateObserver from './application/ApplicationStateObserver';
import _AbilityStateData from './application/AbilityStateData';
import _AppStateData from './application/AppStateData';
import _ProcessData from './application/ProcessData';
import _AppForegroundStateObserver from './application/AppForegroundStateObserver';
import { AbilityFirstFrameStateObserver as _AbilityFirstFrameStateObserver } from './application/AbilityFirstFrameStateObserver';
import { AbilityFirstFrameStateData as _AbilityFirstFrameStateData } from './application/AbilityFirstFrameStateData';
/*** endif */

/**
 * appManager模块提供App管理的能力，包括查询当前是否处于稳定性测试场景、查询是否为ram受限设备、获取应用程序的内存大小、获取有关运行进程的信息等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace appManager {
  /**
   * 应用状态，该类型为枚举，可配合[AbilityStateData]{@link ./application/AbilityStateData:AbilityStateData}返回相应的应用状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ApplicationState {
    /**
     * The application is being created.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_CREATE = 0,

    /**
     * The application is running in the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_FOREGROUND = 1,

    /**
     * The application is active.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_ACTIVE = 2,

    /**
     * The application is running in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_BACKGROUND = 3,

    /**
     * The application is being destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_DESTROY = 4
  }

  /**
   * 表示进程状态的枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ProcessState {
    /**
     * The process is created.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_CREATE = 0,

    /**
     * The process is running in the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_FOREGROUND = 1,

    /**
     * At least one window in the process has focus.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_ACTIVE = 2,

    /**
     * The process is running in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_BACKGROUND = 3,

    /**
     * The process is destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_DESTROY = 4
  }

  /**
   * 表示预加载应用进程模式的枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum PreloadMode {
    /**
     * The application process is preloaded when the application icon is pressed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    PRESS_DOWN = 0
  }

  /**
   * 表示被保活应用的应用类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  export enum KeepAliveAppType {
    /**
     * 三方应用和系统应用。此选项只能作为[getKeepAliveBundles]{@link appManager.getKeepAliveBundles}接口的入参被调用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    ALL = 0,

    /**
     * 三方应用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    THIRD_PARTY = 1,

    /**
     * 系统应用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SYSTEM = 2
  }

  /**
   * 表示应用保活的设置方类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  export enum KeepAliveSetter {
    /**
     * 应用保活设置方为系统。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SYSTEM = 0,

    /**
     * 应用保活设置方为用户。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    USER = 1
  }

  /**
   * 定义应用保活信息，可以通过[getKeepAliveBundles]{@link appManager.getKeepAliveBundles}或
   * [getKeepAliveAppServiceExtensions]{@link appManager.getKeepAliveAppServiceExtensions}获取。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  export interface KeepAliveBundleInfo {
    /**
     * Bundle名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 表示被保活应用的应用类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    type: KeepAliveAppType;

    /**
     * 表示应用保活设置者类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    setter: KeepAliveSetter;

    /**
     * 应用保活设置者的用户ID。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setterUserId?: int;

    /**
     * 表示是否允许用户取消保活。true表示允许，false表示不允许。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    allowUserToCancel?: boolean;
  }

  /**
   * 表示要监听的的应用类型，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的应用类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterBundleType {
    /**
     * 应用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    APP = 1 << 0,

    /**
     * 原子化服务。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ATOMIC_SERVICE = 1 << 1
  }

  /**
   * 表示要监听的应用状态，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的应用状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterAppStateType {
    /**
     * 应用正在初始化，对应[AppStateData](docroot://reference/apis-ability-kit/js-apis-inner-application-appStateData.md#属性)中state
     * 取值为0的状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    CREATE = 1 << 0,

    /**
     * 应用位于前台，对应[AppStateData](docroot://reference/apis-ability-kit/js-apis-inner-application-appStateData.md#属性)中state取
     * 值为2的状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    FOREGROUND = 1 << 1,

    /**
     * 应用位于后台，对应[AppStateData](docroot://reference/apis-ability-kit/js-apis-inner-application-appStateData.md#属性)中state取
     * 值为4的状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    BACKGROUND = 1 << 2,

    /**
     * 应用已退出，对应[AppStateData](docroot://reference/apis-ability-kit/js-apis-inner-application-appStateData.md#属性)中state取值
     * 为5的状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DESTROY = 1 << 3
  }

  /**
   * 表示要监听的进程状态，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的进程状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterProcessStateType {
    /**
     * 进程刚创建完成，对应[ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#属性)中state取值
     * 为0的状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    CREATE = 1 << 0,

    /**
     * 进程处于前台，对应[ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#属性)中state取值为
     * 2的状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    FOREGROUND = 1 << 1,

    /**
     * 进程处于后台，对应[ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#属性)中state取值为
     * 4的状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    BACKGROUND = 1 << 2,

    /**
     * 进程已终止，对应[ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#属性)中state取值为5
     * 的状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DESTROY = 1 << 3
  }

  /**
   * 表示要监听的Ability状态，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的Ability状态。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterAbilityStateType {
    /**
     * Ability正在创建中，对应
     * [Ability状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability状态)中的
     * ABILITY_STATE_CREATE。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    CREATE = 1 << 0,

    /**
     * Ability处于前台，对应
     * [Ability状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability状态)中的
     * ABILITY_STATE_FOREGROUND。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    FOREGROUND = 1 << 1,

    /**
     * Ability处于后台，对应
     * [Ability状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability状态)中的
     * ABILITY_STATE_BACKGROUND。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    BACKGROUND = 1 << 2,

    /**
     * Ability已经销毁，对应
     * [Ability状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability状态)中的
     * ABILITY_STATE_TERMINATED。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DESTROY = 1 << 3
  }

  /**
   * 表示要监听的回调函数，该类型为枚举。可配合[AppStateFilter]{@link appManager.AppStateFilter}过滤想要监听的回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterCallback {
    /**
     * 该枚举对应应用前后台状态发生变化时执行的回调函数
     * [ApplicationStateObserver.onForegroundApplicationChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronforegroundapplicationchanged)
     * 。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_FOREGROUND_APPLICATION_CHANGED = 1 << 0,

    /**
     * 该枚举对应Ability状态发生变化时执行的回调函数
     * [ApplicationStateObserver.onAbilityStateChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronabilitystatechanged)
     * 。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_ABILITY_STATE_CHANGED = 1 << 1,

    /**
     * 该枚举对应进程创建时执行的回调函数
     * [ApplicationStateObserver.onProcessCreated](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocesscreated)
     * 。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_PROCESS_CREATED = 1 << 2,

    /**
     * 该枚举对应进程销毁时执行的回调函数
     * [ApplicationStateObserver.onProcessDied](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocessdied)
     * 。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_PROCESS_DIED = 1 << 3,

    /**
     * 该枚举对应进程状态更新时执行的回调函数
     * [ApplicationStateObserver.onProcessStateChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocessstatechanged)
     * 。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_PROCESS_STATE_CHANGED = 1 << 4,

    /**
     * 该枚举对应应用第一个进程创建时执行的回调函数
     * [ApplicationStateObserver.onAppStarted](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronappstarted)
     * 。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_APP_STARTED = 1 << 5,

    /**
     * 该枚举对应应用最后一个进程销毁时执行的回调函数
     * [ApplicationStateObserver.onAppStopped](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronappstopped)
     * 。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_APP_STOPPED = 1 << 6
  }

  /**
   * 应用生命周期变化事件的过滤器，可作为
   * [on]{@link appManager.on(type: 'applicationState', observer: ApplicationStateObserver, filter: AppStateFilter)}的参数用
   * 于筛选所需监听的应用生命周期变化事件。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface AppStateFilter {
    /**
     * 表示要监听的应用类型。取值范围是：
     * 
     * - 0：表示不监听任何类型的应用。
     * - [FilterBundleType](#filterbundletype21)中枚举的按位或运算组合：例如 "appManager.FilterBundleType.APP | 
     * appManager.FilterBundleType.ATOMIC_SERVICE" ，表示同时监听应用和原子化服务的生命周期变化事件。
     * - 如果该项不设置，则默认监听所有的应用类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    bundleTypes?: int;

    /**
     * 表示要监听的应用状态。 取值范围是：
     * 
     * - 0：表示不监听任何应用状态。
     * - [FilterAppStateType](#filterappstatetype21)中枚举的按位或运算组合：例如 "appManager.FilterAppStateType.CREATE | 
     * appManager.FilterAppStateType.FOREGROUND" ，表示同时监听应用的创建状态和前台状态。
     * - 如果该项不设置，则默认监听所有的应用状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    appStateTypes?: int;

    /**
     * 表示要监听的进程状态。取值范围是：
     * 
     * - 0：表示不监听任何进程状态。
     * - [FilterProcessStateType](#filterprocessstatetype21)中枚举的按位或运算组合：例如 "appManager.FilterProcessStateType.CREATE | 
     * appManager.FilterProcessStateType.FOREGROUND" ，表示同时监听进程的创建状态和前台状态。
     * - 如果该项不设置，则默认监听所有的进程状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    processStateTypes?: int;

    /**
     * 表示要监听的Ability状态。取值范围是：
     * 
     * - 0：表示不监听任何Ability状态。
     * - [FilterAbilityStateType](#filterabilitystatetype21)中枚举的按位或运算组合：例如 "appManager.FilterAbilityStateType.CREATE | 
     * appManager.FilterAbilityStateType.FOREGROUND" ，表示同时监听Ability的创建状态和前台状态。
     * - 如果该项不设置，则默认监听所有的Ability状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    abilityStateTypes?: int;

    /**
     * 表示要监听的回调函数。取值范围是：
     * 
     * - 0：表示不监听任何回调函数。
     * - [FilterCallback](#filtercallback21)中枚举的按位或运算组合：例如 "appManager.FilterCallback.ON_ABILITY_STATE_CHANGED | 
     * appManager.FilterCallback.ON_PROCESS_STATE_CHANGED" ，表示同时监听
     * [ApplicationStateObserver.onAbilityStateChanged](js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronabilitystatechanged)
     * 和
     * [ApplicationStateObserver.onProcessStateChanged](js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocessstatechanged)
     * 。 
     * - 如果该项不设置，则默认监听[FilterCallback](#filtercallback21)中对应的所有回调函数。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    callbacks?: int;
  }

  /**
   * 注册所有应用程序的状态监听器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - 调用接口类型，固定填'applicationState'字符串。
   * @param { ApplicationStateObserver } observer - 应用状态监听器，用于监听应用的生命周期变化。
   * @returns { int } 已注册监听器ID，调用方可以通过
   *     [off('applicationState')]{@link appManager.off(type: 'applicationState', observerId: int)}传入该监听器ID来注销监听器。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  function on(type: 'applicationState', observer: ApplicationStateObserver): int;

  /**
   * 注册所有应用程序的状态监听器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - 应用状态监听器，用于监听应用的生命周期变化。
   * @returns { int } 已注册监听器ID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onApplicationStateChange(observer: ApplicationStateObserver): int;

  /**
   * 注册指定应用程序的状态监听器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - 调用接口类型，固定填'applicationState'字符串。
   * @param { ApplicationStateObserver } observer - 应用状态监听器，用于监听应用的生命周期变化。
   * @param { Array<string> } bundleNameList - 表示需要注册监听的bundleName数组。最大值128。
   * @returns { int } 已注册监听器ID，调用方可以通过
   *     [off('applicationState')]{@link appManager.off(type: 'applicationState', observerId: int)}传入该监听器ID来注销监听器。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  function on(type: 'applicationState', observer: ApplicationStateObserver, bundleNameList: Array<string>): int;

  /**
   * 注册指定应用程序的状态监听器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - 应用状态监听器，用于监听应用的生命周期变化。
   * @param { Array<string> } bundleNameList - 表示需要注册监听的bundleName数组。最大值128。
   * @returns { int } 已注册监听器ID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onApplicationStateChange(observer: ApplicationStateObserver, bundleNameList: Array<string>): int;

  /**
   * 注册应用程序的状态监听器，并通过设置过滤条件来筛选所需监听的应用生命周期变化事件。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - 调用接口类型，固定填'applicationState'字符串。
   * @param { ApplicationStateObserver } observer - 应用状态监听器，用于监听应用的生命周期变化。
   * @param { AppStateFilter } filter - 应用生命周期变化事件的过滤器。
   * @returns { int } 已注册监听器ID，可用于
   *     [off]{@link @ohos.app.ability.appManager:appManager.off(type: 'applicationState', observerId: int)}接口注销监听器。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   */
  function on(type: 'applicationState', observer: ApplicationStateObserver, filter: AppStateFilter): int;

  /**
   * 注册应用程序的状态监听器，并通过设置过滤条件来筛选所需监听的应用生命周期变化事件。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - 应用状态监听器，用于监听应用的生命周期变化。
   * @param { AppStateFilter } filter - 应用生命周期变化事件的过滤器。
   * @returns { int } 已注册监听器ID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onApplicationStateChange(observer: ApplicationStateObserver, filter: AppStateFilter): int;

  /**
   * 注册应用启动和退出的监听器，可用于系统应用监听所有应用的启动和退出。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'appForegroundState' } type - 调用接口类型，固定填'appForegroundState'字符串。
   * @param { AppForegroundStateObserver } observer - 应用状态监听器，用于监听应用的启动和退出。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'appForegroundState', observer: AppForegroundStateObserver): void;

  /**
   * 注册应用启动和退出的监听器，可用于系统应用监听所有应用的启动和退出。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AppForegroundStateObserver } observer - 应用状态监听器，用于监听应用的启动和退出。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onAppForegroundStateChange(observer: AppForegroundStateObserver): void;

  /**
   * 注册监听Ability首帧绘制完成事件观察者对象，可用于系统应用监听Ability首帧绘制事件。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityFirstFrameState' } type - 调用接口类型，固定填'abilityFirstFrameState'字符串。
   * @param { AbilityFirstFrameStateObserver } observer - 表示待注册的Ability首帧绘制完成事件观察者对象。
   * @param { string } [bundleName] - 表示待监听的Ability的应用bundleName，不填表示注册监听所有应用ability首帧绘制完成事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  function on(type: 'abilityFirstFrameState', observer: AbilityFirstFrameStateObserver, bundleName?: string): void;

  /**
   * 注册监听Ability首帧绘制完成事件观察者对象，可用于系统应用监听Ability首帧绘制事件。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityFirstFrameStateObserver } observer - 表示待注册的Ability首帧绘制完成事件观察者对象。
   * @param { string } [bundleName] - 表示待监听的Ability的应用bundleName，不填表示注册监听所有应用ability首帧绘制完成事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onAbilityFirstFrameStateChange(observer: AbilityFirstFrameStateObserver, bundleName?: string): void;

  /**
   * 注销应用状态监听器。使用callback异步回调。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - 调用接口类型，固定填'applicationState'字符串。
   * @param { int } observerId - 注册的应用状态监听器ID，即
   *     [on('applicationState')]{@link appManager.on(type: 'applicationState', observer: ApplicationStateObserver)}返回的监听器ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当取消注册应用程序状态观测器成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 15 dynamic
   */
  function off(type: 'applicationState', observerId: int, callback: AsyncCallback<void>): void;

  /**
   * 注销应用状态监听器。使用callback异步回调。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { int } observerId - 注册的应用状态监听器ID。
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offApplicationStateChange(observerId: int, callback: AsyncCallback<void>): void;

  /**
   * 注销应用状态监听器。使用Promise异步回调。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - 调用接口类型，固定填'applicationState'字符串。
   * @param { int } observerId - 注册的应用状态监听器ID，即
   *     [on('applicationState')]{@link appManager.on(type: 'applicationState', observer: ApplicationStateObserver)}返回的监听器ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  function off(type: 'applicationState', observerId: int): Promise<void>;

  /**
   * 注销应用状态监听器。使用Promise异步回调。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { int } observerId - 注册的应用状态监听器ID。
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offApplicationStateChange(observerId: int): Promise<void>;

  /**
   * 注销应用启动和退出的监听器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'appForegroundState' } type - 调用接口类型，固定填'appForegroundState'字符串。
   * @param { AppForegroundStateObserver } [observer] - 取消注册的应用启动和退出监听器。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: 'appForegroundState', observer?: AppForegroundStateObserver): void;

  /**
   * 注销应用启动和退出的监听器。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AppForegroundStateObserver } [observer] - 取消注册的应用启动和退出监听器。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function offAppForegroundStateChange(observer?: AppForegroundStateObserver): void;

  /**
   * 取消注册监听Ability首帧绘制完成事件观察者对象。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityFirstFrameState' } type - 调用接口类型，固定填'abilityFirstFrameState'字符串。
   * @param { AbilityFirstFrameStateObserver } [observer] - 表示待取消的Ability首帧绘制完成事件观察者对象，不填表示取消所有监听对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  function off(type: 'abilityFirstFrameState', observer?: AbilityFirstFrameStateObserver): void;

  /**
   * 取消注册监听Ability首帧绘制完成事件观察者对象。
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityFirstFrameStateObserver } [observer] - 表示待取消的Ability首帧绘制完成事件观察者对象，不填表示取消所有监听对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function offAbilityFirstFrameStateChange(observer?: AbilityFirstFrameStateObserver): void;

  /**
   * 获取当前所有前台应用的信息。该应用信息由[AppStateData]{@link ./application/AppStateData:AppStateData}定义。使用callback异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AppStateData>> } callback - 以回调方式返回接口运行结果及应用状态数据数组，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void;

  /**
   * 获取当前所有前台应用的信息。该应用信息由[AppStateData]{@link ./application/AppStateData:AppStateData}定义。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AppStateData>> } 返回前台进程应用程序的数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getForegroundApplications(): Promise<Array<AppStateData>>;

  /**
   * 终止account进程。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 当accountId为当前用户时，不需要校验ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 9 - 13]
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.KILL_APP_PROCESSES
   *     or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 14]
   * @param { string } bundleName - Bundle名称。
   * @param { int } accountId - 系统账号的账号ID，详情参考
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function killProcessWithAccount(bundleName: string, accountId: int): Promise<void>;

  /**
   * 终止account进程。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 当accountId为当前用户时，不需要校验ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.KILL_APP_PROCESSES
   *     or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - Bundle名称。
   * @param { int } accountId - 系统账号的账号ID，详情参考
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     。
   * @param { boolean } clearPageStack - 表示是否清除页面堆栈。true表示清除，false表示不清除。
   * @param { int } [appIndex] - 应用分身ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessWithAccount(bundleName: string, accountId: int, clearPageStack: boolean, appIndex?: int):
    Promise<void>;

  /**
   * 终止account进程。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 当accountId为当前用户时，不需要校验ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 9 - 13]
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.KILL_APP_PROCESSES
   *     or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 14]
   * @param { string } bundleName - 应用Bundle名称。
   * @param { int } accountId - 系统账号的账号ID，详情参考
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     。
   * @param { AsyncCallback<void> } callback - 以回调方式返回接口运行结果，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function killProcessWithAccount(bundleName: string, accountId: int, callback: AsyncCallback<void>): void;

  /**
   * 查询当前系统是否处于稳定性测试场景。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 稳定性测试场景指为验证应用在复杂、极端或长期运行条件下的可靠性而设计的特定测试环境。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当接口调用成功，err为undefined，data为当前系统是否处于稳定性测试场景的结果；否则为错误对象。可进行错误处理或其他自定义处理。
   *     <br>返回true表示系统处于稳定性测试场景；返回false表示系统不处于稳定性测试场景。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isRunningInStabilityTest(callback: AsyncCallback<boolean>): void;

  /**
   * 查询当前系统是否处于稳定性测试场景。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 稳定性测试场景指为验证应用在复杂、极端或长期运行条件下的可靠性而设计的特定测试环境。
   *
   * @returns { Promise<boolean> } 以Promise方式返回接口运行结果及当前是否处于稳定性测试场景，可进行错误处理或其他自定义处理。
   *     
   *     返回true表示系统处于稳定性测试场景；返回false表示系统不处于稳定性测试场景。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isRunningInStabilityTest(): Promise<boolean>;

  /**
   * 通过Bundle名称终止进程。使用Promise异步回调。
   *
   * @permission ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 9 - 13]
   * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 14]
   * @param { string } bundleName - 表示Bundle名称。
   * @returns { Promise<void> } The Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function killProcessesByBundleName(bundleName: string): Promise<void>;

  /**
   * 终止指定应用包名的应用进程。使用Promise异步回调。
   *
   * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - 表示需要终止进程的应用包名。
   * @param { boolean } clearPageStack - 表示是否清除页面堆栈。true表示清除，false表示不清除。
   * @param { int } [appIndex] - 应用分身Id，默认值为0。取值为0时，表示终止主应用的所有进程。取值大于0时，表示终止指定分身应用的所有进程。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessesByBundleName(bundleName: string, clearPageStack: boolean, appIndex?: int): Promise<void>;

  /**
   * 通过Bundle名称终止进程。使用callback异步回调。
   *
   * @permission ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 9 - 13]
   * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 14]
   * @param { string } bundleName - 表示Bundle名称。
   * @param { AsyncCallback<void> } callback - 以回调方式返回接口运行结果，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function killProcessesByBundleName(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * 通过Bundle名称清除应用数据。使用Promise异步回调。
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - 表示Bundle名称。
   * @returns { Promise<void> } 以Promise方式返回接口运行结果，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearUpApplicationData(bundleName: string): Promise<void>;

  /**
   * 通过Bundle名称清除应用数据。使用callback异步回调。
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - Bundle名称。
   * @param { AsyncCallback<void> } callback - 以回调方式返回接口运行结果，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearUpApplicationData(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * 查询当前设备是否为RAM受限设备（内存资源严重受限的设备）。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } 以Promise方式返回接口运行结果及当前设备是否为RAM受限设备，可进行错误处理或其他自定义处理。
   *     返回true表示当前设备为RAM受限设备；返回false表示当前设备为非RAM受限设备。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isRamConstrainedDevice(): Promise<boolean>;

  /**
   * 查询当前设备是否为RAM受限设备（内存资源严重受限的设备）。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当接口调用成功，err为undefined，data为当前设备是否为RAM受限设备的结果；否则为错误对象。可进行错误处理或其他自定义处理。<
   *     br>返回true表示当前设备为RAM受限设备；返回false表示当前设备为非RAM受限设备。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isRamConstrainedDevice(callback: AsyncCallback<boolean>): void;

  /**
   * 获取当前应用程序可以使用的最大内存（RAM）值。使用Promise异步回调。
   *
   * @returns { Promise<int> } 当前应用程序可以使用的最大内存（RAM）值，可根据此值进行错误处理或其他自定义处理，单位是M。使用Promise异步回调。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAppMemorySize(): Promise<int>;

  /**
   * 获取当前应用程序可以使用的最大内存（RAM）值。使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数。当接口调用成功，err为undefined，data为当前应用程序可以使用的最大内存（RAM）值，单位是M；否则为错误对象。可根据此值进行错误处理或
   *     其他自定义处理。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAppMemorySize(callback: AsyncCallback<int>): void;

  /**
   * 获取当前应用运行进程的相关信息。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 对于API version 11之前的版本，该接口需要申请权限ohos.permission.GET_RUNNING_INFO（该权限仅系统应用可申请）。
   * >
   * > - 从API version 11开始，该接口仅用于获取调用方自身的进程信息，不再需要申请权限。
   *
   * @permission ohos.permission.GET_RUNNING_INFO [since 9 - 10]
   * @returns { Promise<Array<ProcessInformation>> } Promise对象，返回接口运行结果及有关运行进程的信息，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getRunningProcessInformation(): Promise<Array<ProcessInformation>>;

  /**
   * 根据包类型获取当前运行进程的有关信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { bundleManager.BundleType } bundleType - 表示要查询的包类型。
   * @returns { Promise<Array<ProcessInformation>> } Promise对象，返回特定包类型的运行进程的信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getRunningProcessInformationByBundleType(
    bundleType: bundleManager.BundleType): Promise<Array<ProcessInformation>>;

  /**
   * 获取当前应用运行进程的相关信息。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 对于API version 11之前的版本，该接口需要申请权限ohos.permission.GET_RUNNING_INFO（该权限仅系统应用可申请）。
   * >
   * > - 从API version 11开始，该接口仅用于获取调用方自身的进程信息，不再需要申请权限。
   *
   * @permission ohos.permission.GET_RUNNING_INFO [since 9 - 10]
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - 回调函数。当接口调用成功，err为undefined，data为当前应用运行进程的信息；否则为错误对象。可进行错误
   *     处理或其他自定义处理。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * 检查共享库是否正在使用。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - 表示要查询的共享库包名。
   * @param { long } versionCode - 表示要查询的共享库版本号。
   * @returns { Promise<boolean> } Promise对象。返回true表示共享库正在使用，返回false表示共享库不在使用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function isSharedBundleRunning(bundleName: string, versionCode: long): Promise<boolean>;

  /**
   * 检查共享库是否正在使用。使用callback异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - 表示要查询的共享库包名。
   * @param { long } versionCode - 表示要查询的共享库版本号。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示共享库正在使用，返回false表示共享库不在使用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function isSharedBundleRunning(bundleName: string, versionCode: long, callback: AsyncCallback<boolean>): void;

  /**
   * 通过pid查询对应进程占用的内存大小。使用Promise异步回调。
   *
   * @param { int } pid - 表示进程id，详情参考
   *     [getRunningProcessInfoByBundleName]{@link appManager.getRunningProcessInfoByBundleName(bundleName: string, callback: AsyncCallback<Array<ProcessInformation>>)}
   *     。
   * @returns { Promise<int> } 以Promise方式返回接口运行结果及进程占用的内存大小（单位KB），可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getProcessMemoryByPid(pid: int): Promise<int>;

  /**
   * 通过pid查询对应进程占用的内存大小。使用callback异步回调。
   *
   * @param { int } pid - 表示进程id，详情参考
   *     [getRunningProcessInfoByBundleName]{@link appManager.getRunningProcessInfoByBundleName(bundleName: string, callback: AsyncCallback<Array<ProcessInformation>>)}
   *     。
   * @param { AsyncCallback<int> } callback - 以回调方式返回接口运行结果及进程占用的内存大小（单位KB），可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getProcessMemoryByPid(pid: int, callback: AsyncCallback<int>): void;

  /**
   * 通过bundleName获取有关运行进程的信息。使用callback异步回调。
   *
   * @param { string } bundleName - 表示Bundle名称。
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - 以回调方式返回接口运行结果及有关运行进程的信息，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string, callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * 通过bundleName和userId获取有关运行进程的信息。使用callback异步回调。
   *
   * @param { string } bundleName - 表示Bundle名称。
   * @param { int } userId - 表示用户Id。
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - 以回调方式返回接口运行结果及有关运行进程的信息，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string, userId: int, callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * 通过bundleName获取有关运行进程的信息。使用Promise异步回调。
   *
   * @param { string } bundleName - 表示Bundle名称。
   * @returns { Promise<Array<ProcessInformation>> } 以Promise方式返回接口运行结果及有关运行进程的信息，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string): Promise<Array<ProcessInformation>>;

  /**
   * 通过bundleName和userId获取有关运行进程的信息。使用Promise异步回调。
   *
   * @param { string } bundleName - 表示Bundle名称。
   * @param { int } userId - 表示用户Id。
   * @returns { Promise<Array<ProcessInformation>> } 以Promise方式返回接口运行结果及有关运行进程的信息，可进行错误处理或其他自定义处理。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string, userId: int): Promise<Array<ProcessInformation>>;

  /**
   * 查询所有用户下指定包名的应用是否正在运行。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - 表示要查询的应用的包名。
   * @returns { Promise<boolean> } Promise对象。返回true表示至少存在一个用户正在运行指定包名的应用，返回false表示所有用户下指定包名的应用都没有运行。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function isApplicationRunning(bundleName: string): Promise<boolean>;

  /**
   * 查询所有用户下指定包名的应用是否正在运行。使用callback异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - 表示要查询的应用的包名。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示至少存在一个用户正在运行指定包名的应用，返回false表示所有用户下指定包名的应用都没有运行。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function isApplicationRunning(bundleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * 预加载应用进程。接口返回成功并不代表预加载成功，具体结果以目标应用进程是否创建成功为准。使用Promise异步回调。
   *
   * @permission ohos.permission.PRELOAD_APPLICATION
   * @param { string } bundleName - 预加载的应用包名。
   * @param { int } userId - 预加载的用户Id。
   * @param { PreloadMode } mode - 预加载模式。
   * @param { int } [appIndex] - 预加载应用分身的appIndex。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16300005 - The target bundle does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function preloadApplication(bundleName: string, userId: int, mode: PreloadMode, appIndex?: int): Promise<void>;

  /**
   * 根据应用包名获取系统中运行态的应用多开（即在一个设备上运行多个相同的应用）的相关信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - 查询的应用包名。
   * @returns { Promise<RunningMultiAppInfo> } Promise对象。返回特定包名的运行态应用多开信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getRunningMultiAppInfo(bundleName: string): Promise<RunningMultiAppInfo>;

  /**
   * 判断所有用户下指定包名和分身应用索引的应用是否正在运行。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 如果当前用户未安装该应用，则返回错误码16000073；如果当前用户已安装该应用，则判断所有用户下该指定应用是否正在运行。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - 查询的应用包名。
   * @param { int } [appCloneIndex] - 分身应用索引，默认值为0。取值范围：0~1000。取值为0时表示主应用；取值大于0时表示指定分身应用。
   * @returns { Promise<boolean> } Promise对象。返回true表示至少存在一个用户正在运行指定包名和分身应用索引的应用，返回false表示所有用户下指定包名和分身应用索引的应用都没有运行。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function isAppRunning(bundleName: string, appCloneIndex?: int): Promise<boolean>;

  /**
   * 根据Bundle名称和应用分身索引，清除指定应用的数据。使用Promise异步回调。
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - 表示Bundle名称。
   * @param { int } [appCloneIndex] - 表示应用分身索引。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function clearUpAppData(bundleName: string, appCloneIndex?: int): Promise<void>;

  /**
   * 关闭指定的任务。使用Promise异步回调。
   *
   * @permission ohos.permission.KILL_APP_PROCESSES
   * @param { int } missionId - 任务ID，可通过
   *     [getMissionInfos]{@link @ohos.app.ability.missionManager:missionManager.getMissionInfos(deviceId: string, numMax: int, callback: AsyncCallback<Array<MissionInfo>>)}
   *     获取。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function terminateMission(missionId: int): Promise<void>;

  /**
   * 查询当前应用中支持缓存后快速启动的进程PID。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 本接口仅支持获取调用者所在系统账号下的进程PID。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - 表示要查询的应用包名。
   * @returns { Promise<Array<int>> } Promise对象。返回一个数组，包含当前应用中支持缓存后快速启动的所有进程PID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  function getSupportedProcessCachePids(bundleName : string): Promise<Array<int>>;

  /**
   * 为指定用户下的应用设置或取消保活。使用Promise异步回调。
   * 从API version 18开始，该接口仅在2in1和Wearable设备上生效。对于API version 18之前版本，该接口仅在2in1设备上生效。其他情况下调用该接口将返回错误码801。
   * 
   * > **说明：**
   * >
   * > - 应用如果需要支持保活，其[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中的mainElement必须是UIAbility。只有当
   * > mainElement启动后，系统才会执行应用保活操作。
   * >
   * > - 在2in1设备上，被保活的应用需要在启动后5秒内添加至状态栏。否则，系统将取消该应用的保活设置，并杀死保活重启的进程。
   * >
   * > - 当被保活的应用进程退出时，系统将尝试重启该进程，连续3次重启失败后将不再继续重启。
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @param { string } bundleName - 表示要设置保活的应用包名。
   * @param { int } userId - 表示要设置保活应用所属的用户ID。
   * @param { boolean } enable - 表示对应用保活或者取消保活。true表示对应用保活，false表示对应用取消保活。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16300005 - The target bundle does not exist.
   * @throws { BusinessError } 16300008 - The target bundle has no MainAbility.
   * @throws { BusinessError } 16300009 - The target bundle has no status-bar ability.
   * @throws { BusinessError } 16300010 - The target application is not attached to the status bar.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function setKeepAliveForBundle(bundleName: string, userId: int, enable: boolean): Promise<void>;

  /**
   * 获取指定用户下指定类型的保活应用信息。该应用信息由[KeepAliveBundleInfo]{@link appManager.KeepAliveBundleInfo}定义。使用Promise异步回调。
   * 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。
   * **需要权限**：ohos.permission.MANAGE_APP_KEEP_ALIVE
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @param { KeepAliveAppType } type - 表示要查询的保活应用类型。
   * @param { int } [userId] - 表示要设置保活应用所属的用户ID。
   * @returns { Promise<Array<KeepAliveBundleInfo>> } Promise对象，返回用户保活应用信息的数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function getKeepAliveBundles(type: KeepAliveAppType, userId?: int): Promise<Array<KeepAliveBundleInfo>>;

  /**
   * 为AppServiceExtensionAbility设置保活或取消保活。使用Promise异步回调。
   * 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。
   * 
   * > **说明：**
   * >
   * > - 仅当应用安装在userId为1的用户下，且应用中entry类型的HAP的module.json5配置文件中的mainElement字段配置为AppServiceExtensionAbility时，该接口才生效。
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @param { string } bundleName - 表示要设置保活的应用包名。
   * @param { boolean } enabled - 表示是否进行应用保活。true表示保活，false表示不保活。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000081 - Failed to obtain the target application information.
   * @throws { BusinessError } 16000202 - Invalid main element type.
   * @throws { BusinessError } 16000203 - Cannot change the keep-alive status.
   * @throws { BusinessError } 16000204 - The target bundle is not in u1.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setKeepAliveForAppServiceExtension(bundleName: string, enabled: boolean): Promise<void>;

  /**
   * 获取所有保活的AppServiceExtensionAbility应用信息，此信息由[KeepAliveBundleInfo]{@link appManager.KeepAliveBundleInfo}定义。使用Promise异步
   * 回调。
   * 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @returns { Promise<Array<KeepAliveBundleInfo>> } Promise对象，返回用户保活应用信息的数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getKeepAliveAppServiceExtensions(): Promise<Array<KeepAliveBundleInfo>>;

  /**
   * 批量终止进程。使用Promise异步回调。
   * 该接口在PC/2in1中可正常调用，在其他设备类型中返回801错误码。
   * **需要权限**：ohos.permission.KILL_APP_PROCESSES
   *
   * @permission ohos.permission.KILL_APP_PROCESSES
   * @param { Array<int> } pids - 要终止的进程ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessesInBatch(pids: Array<int>): Promise<void>;

  /**
   * Ability状态信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type AbilityStateData = _AbilityStateData.default;

  /**
   * Ability状态信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type AbilityStateData = _AbilityStateData;

  /**
   * 应用状态信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type AppStateData = _AppStateData.default;

  /**
   * 应用状态信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type AppStateData = _AppStateData;

  /**
   * 应用状态监听器。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type ApplicationStateObserver = _ApplicationStateObserver.default;

  /**
   * 应用状态监听器。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type ApplicationStateObserver = _ApplicationStateObserver;

  /**
   * 应用启动和退出的状态监听。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  export type AppForegroundStateObserver = _AppForegroundStateObserver.default;

  /**
   * 应用启动和退出的状态监听。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AppForegroundStateObserver = _AppForegroundStateObserver;

  /**
   * 进程信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type ProcessInformation = _ProcessInformation;

  /**
   * 进程数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type ProcessData = _ProcessData.default;

  /**
   * 进程数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type ProcessData = _ProcessData;

  /**
   * UIAbility首帧绘制完成事件监听对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  export type AbilityFirstFrameStateObserver = _AbilityFirstFrameStateObserver.default;

  /**
   * UIAbility首帧绘制完成事件监听对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AbilityFirstFrameStateObserver = _AbilityFirstFrameStateObserver;

  /**
   * UIAbility首帧绘制完成回调上报数据结构。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  export type AbilityFirstFrameStateData = _AbilityFirstFrameStateData.default;

  /**
   * UIAbility首帧绘制完成回调上报数据结构。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AbilityFirstFrameStateData = _AbilityFirstFrameStateData;

  /**
   * 应用多开在运行态的结构信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export type RunningMultiAppInfo = _RunningMultiAppInfo;
}

export default appManager;