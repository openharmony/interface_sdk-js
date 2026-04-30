/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WantAgent模块封装了[Want]{@link ./@ohos.app.ability.Want:Want}对象，允许应用程序在未来的某个时间点触发WantAgent实例执行指定操作（如启动Ability、发送公共事件等）。
 * 
 * 该模块提供了创建WantAgent实例、获取WantAgent实例所属应用的包名、获取WantAgent实例所属应用的UID、主动触发WantAgent实例、判断两个WantAgent实例是否相等等功能。WantAgent的一个典型应
 * 用场景是通知处理。例如，当用户点击通知时，会触发WantAgent的[trigger]{@link trigger}接口，并拉起目标应用。具体使用请参考
 * [通知模块](docroot://notification/notification-with-wantagent.md)。
 *
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import { WantAgentInfo as _WantAgentInfo } from './wantAgent/wantAgentInfo';
import { TriggerInfo as _TriggerInfo } from './wantAgent/triggerInfo';
import Context from './application/Context';
import { LocalWantAgentInfo as _LocalWantAgentInfo } from './wantAgent/wantAgentInfo';
/*** endif */
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * WantAgent模块封装了[Want]{@link ./@ohos.app.ability.Want:Want}对象，允许应用程序在未来的某个时间点触发WantAgent实例执行指定操作（如启动Ability、发送公共事件等）。
 * 
 * 该模块提供了创建WantAgent实例、获取WantAgent实例所属应用的包名、获取WantAgent实例所属应用的UID、主动触发WantAgent实例、判断两个WantAgent实例是否相等等功能。WantAgent的一个典型应
 * 用场景是通知处理。例如，当用户点击通知时，会触发WantAgent的[trigger]{@link trigger}接口，并拉起目标应用。具体使用请参考[Notification](docroot://notification/notification-with-wantagent.md)。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace wantAgent {
  /**
   * 获取WantAgent实例所属应用的包名，使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { AsyncCallback<string> } callback - 回调函数。当获取包名成功，err为undefined，data为创建的WantAgent；否则err会返回对应的错误码和错误信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleName(agent: WantAgent, callback: AsyncCallback<string>): void;

  /**
   * 获取WantAgent实例所属应用的包名。使用Promise异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @returns { Promise<string> } Promise对象，返回获取WantAgent实例的包名。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundleName(agent: WantAgent): Promise<string>;

  /**
   * 获取WantAgent实例所属应用的UID，使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { AsyncCallback<int> } callback - 获取WantAgent实例所属应用的UID的回调方法。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getUid(agent: WantAgent, callback: AsyncCallback<int>): void;

  /**
   * 获取WantAgent实例所属应用的UID。使用Promise异步回调。
   *
   * @param { WantAgent } agent - 	WantAgent对象。
   * @returns { Promise<int> } Promise对象，返回获取WantAgent实例所属应用的UID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getUid(agent: WantAgent): Promise<int>;

  /**
   * 获取WantAgent对象的want。使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { AsyncCallback<Want> } callback - 回调函数。当获取WantAgent对象want成功，err中code为0，data为获取到的Want数据；否则err会返回对应的错误码和错误信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000015 - Service timeout.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getWant(agent: WantAgent, callback: AsyncCallback<Want>): void;

  /**
   * 获取WantAgent对象的want。使用Promise异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @returns { Promise<Want> } Promise对象，返回WantAgent对象的want。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000015 - Service timeout.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getWant(agent: WantAgent): Promise<Want>;

  /**
   * 取消WantAgent实例，使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { AsyncCallback<void> } callback - 取消WantAgent实例的回调方法。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function cancel(agent: WantAgent, callback: AsyncCallback<void>): void;

  /**
   * 取消WantAgent实例。使用Promise异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function cancel(agent: WantAgent): Promise<void>;

  /**
   * 触发WantAgent实例，执行指定的操作（启动Ability、发送公共事件等）。使用callback异步回调。
   *
   * @param { WantAgent } agent - 	WantAgent对象。
   * @param { TriggerInfo } triggerInfo - 表示触发WantAgent实例时携带的信息，如自定义的extraInfos。
   * @param { AsyncCallback<CompleteData> } [callback] - 主动激发WantAgent实例的回调方法。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: AsyncCallback<CompleteData>): void;

  /**
   * 主动触发WantAgent实例，即按照WantAgent实例中已封装的指定操作和参数等信息执行。使用Promise异步回调。
   * 仅当入参agent为本地WantAgent实例时需要申请: ohos.permission.TRIGGER_LOCAL_WANTAGENT permission.
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { TriggerInfo } triggerInfo - TriggerInfo对象。
   * @param { Context } context - 请求触发WantAgent的UIAbility/ExtensionAbility的Context。
   * @returns { Promise<CompleteData> } Promise对象，返回主动激发WantAgent获得的数据。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000020 - The context is not ability context.
   * @throws { BusinessError } 16000151 - Invalid wantagent object.
   * @throws { BusinessError } 16000153 - The Wantagent has been canceled.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function triggerAsync(agent: WantAgent, triggerInfo: TriggerInfo, context: Context): Promise<CompleteData>;

  /**
   * 判断两个WantAgent实例是否相等，使用callback异步回调，以此来确定是否是来自同一应用的相同操作。
   * 当两个WantAgent实例由当前用户下的同一应用使用相同的WantAgentInfo信息创建，并且实例未被cancel取消，这两个实例相等。在通知（携带WantAgent实例）场景，通知更新时会比较2个通知中的
   * WantAgent实例，不相等时会把旧通知的WantAgent实例删除。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { WantAgent } otherAgent - WantAgent对象。
   * @param { AsyncCallback<boolean> } callback - 判断两个WantAgent实例是否相等的回调方法。返回true表示两个WantAgent实例相等，false表示两个WantAgent实例不相等。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function equal(agent: WantAgent, otherAgent: WantAgent, callback: AsyncCallback<boolean>): void;

  /**
   * 判断两个WantAgent实例是否相等，使用Promise异步回调，以此来确定是否是来自同一应用的相同操作。
   * 当两个WantAgent实例由当前用户下的同一应用使用相同的WantAgentInfo信息创建，并且实例未被cancel取消，这两个实例相等。在通知（携带WantAgent实例）场景，通知更新时会比较2个通知中的
   * WantAgent实例，不相等时会把旧通知的WantAgent实例删除。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { WantAgent } otherAgent - WantAgent对象。
   * @returns { Promise<boolean> } Promise对象，返回获取判断两个WantAgent实例是否相等的结果。返回true表示两个WantAgent实例相等，false表示两个WantAgent实例不相等。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function equal(agent: WantAgent, otherAgent: WantAgent): Promise<boolean>;

  /**
   * 创建WantAgent，使用callback异步回调。创建成功返回WantAgent对象，创建失败返回空值。
   *
   * @param { WantAgentInfo } info - 表示创建WantAgent所需的配置信息，包括目标UIAbility、操作类型、请求码等。三方应用在WantAgentInfo中只能设置本应用的UIAbility。
   * @param { AsyncCallback<WantAgent> } callback - 	回调函数。当创建WantAgent成功，err中code为0，data为创建的WantAgent；否则err会返回对应的错误码和错误信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void;

  /**
   * 创建WantAgent。使用Promise异步回调。创建成功返回WantAgent对象，创建失败返回空值。
   *
   * @param { WantAgentInfo } info - 表示创建WantAgent所需的配置信息，包括目标UIAbility、操作类型、请求码等。三方应用在WantAgentInfo中只能设置本应用的UIAbility。
   * @returns { Promise<WantAgent> } Promise对象，返回创建的WantAgent。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getWantAgent(info: WantAgentInfo): Promise<WantAgent>;

  /**
   * 获取一个WantAgent实例的OperationType信息，使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { AsyncCallback<int> } callback - 获取一个WantAgent的OperationType信息的回调方法。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000015 - Service timeout.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getOperationType(agent: WantAgent, callback: AsyncCallback<int>): void;

  /**
   * 获取一个WantAgent实例的OperationType信息。使用Promise异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @returns { Promise<int> } Promise对象，返回OperationType的结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000007 - Service busy. There are concurrent tasks. Try again later.
   * @throws { BusinessError } 16000015 - Service timeout.
   * @throws { BusinessError } 16000151 - Invalid wantAgent object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getOperationType(agent: WantAgent): Promise<int>;

  /**
   * 开启或者关闭WantAgent多线程传递功能。
   *
   * @param { boolean } isMultithreadingSupported - 	表示是否开启多线程传递功能。true表示开启，false表示关闭。
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function setWantAgentMultithreading(isMultithreadingSupported: boolean) : void;

  /**
   * 创建本地WantAgent实例。
   * 
   * > **说明：**
   * > 本接口创建的本地WantAgent实例仅存储于WantAgent客户端，不受WantAgent服务端管理。使用该本地实例时，需要校验实例，以保证安全性。
   * > 本地WantAgent实例创建后，触发方法参见[wantAgent.triggerAsync]{@link triggerAsync}接口说明。
   *
   * @param { LocalWantAgentInfo } info - Information about the local WantAgent object to create.
   * @returns { WantAgent } Returns the created WantAgent.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function createLocalWantAgent(info: LocalWantAgentInfo): WantAgent;

  /**
   * 判断WantAgent实例是否为本地实例。
   *
   * @param { WantAgent } agent - Indicates the WantAgent.
   * @returns { boolean } Returns true if the WantAgent is local.
   * @throws { BusinessError } 202 - Not System app. Interface caller is not a system app.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function isLocalWantAgent(agent: WantAgent): boolean;

  /**
   * 表示WantAgent行为控制标志，用于配置WantAgent的创建和触发行为。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum WantAgentFlags {
    /**
     * WantAgent仅能使用一次，trigger触发后自动cancel取消。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ONE_TIME_FLAG = 0,

    /**
     * 如果描述WantAgent对象不存在，则不创建它，直接返回null。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NO_BUILD_FLAG,

    /**
     * 在生成一个新的WantAgent对象前取消已存在的一个WantAgent对象。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    CANCEL_PRESENT_FLAG,

    /**
     * 使用新的WantAgent的额外数据替换已存在的WantAgent中的额外数据。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UPDATE_PRESENT_FLAG,

    /**
     * WantAgent是不可变的。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTANT_FLAG,

    /**
     * 当前Want中的element属性可被WantAgent.trigger()中Want的element属性取代。当前版本暂不支持。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_ELEMENT,

    /**
     * 当前Want中的action属性可被WantAgent.trigger()中Want的action属性取代。当前版本暂不支持。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_ACTION,

    /**
     * 当前Want中的uri属性可被WantAgent.trigger()中Want的uri属性取代。当前版本暂不支持。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_URI,

    /**
     * 	当前Want中的entities属性可被WantAgent.trigger()中Want的entities属性取代。当前版本暂不支持。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_ENTITIES,

    /**
     * 当前Want中的bundleName属性可被WantAgent.trigger()中Want的bundleName属性取代。当前版本暂不支持。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_BUNDLE
  }

  /**
   * 表示WantAgent支持的操作类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum OperationType {
    /**
     * 不识别的类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN_TYPE = 0,

    /**
     * 	开启一个有页面的Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    START_ABILITY,

    /**
     * 开启多个有页面的Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    START_ABILITIES,

    /**
     * 开启一个无页面的Ability（仅在FA模型下生效）。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    START_SERVICE,

    /**
     * 发送一个公共事件。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SEND_COMMON_EVENT,

    /**
     * 开启一个ServiceExtension。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    START_SERVICE_EXTENSION = 6
  }

  /**
   * 表示主动触发WantAgent返回的数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CompleteData {
    /**
     * 触发的wantAgent。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    info: WantAgent;

    /**
     * 触发wantAgent时实际使用的want信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    want: Want;

    /**
     * 触发wantAgent的返回码。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    finalCode: int;

    /**
     * 触发wantAgent的返回数据。返回**canceled**时表示触发失败，WantAgent实例已经被取消。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    finalData: string;

    /**
     * 额外数据。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    extraInfo?: Record<string, Object>;

    /**
     * 额外数据。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 23 static
     */
    extraInfo?: Record<string, RecordData>;
  }

  /**
   * TriggerInfo对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type TriggerInfo = _TriggerInfo;

  /**
   * WantAgentInfo对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type WantAgentInfo = _WantAgentInfo;

  /**
   * LocalWantAgentInfo对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export type LocalWantAgentInfo = _LocalWantAgentInfo;

}

/**
 * WantAgent对象。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9 dynamic
 * @since 23 static
 */
export type WantAgent = object;

export default wantAgent;