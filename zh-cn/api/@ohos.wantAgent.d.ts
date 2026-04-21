/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * WantAgent模块提供了创建WantAgent实例、获取实例的用户ID、获取want信息、比较WantAgent实例和获取bundle名称等能力。
 *
 * @file
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback, Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import { WantAgentInfo } from './wantAgent/wantAgentInfo';
import { TriggerInfo } from './wantAgent/triggerInfo';

/**
 * WantAgent模块提供了创建WantAgent实例、获取实例的用户ID、获取want信息、比较WantAgent实例和获取bundle名称等能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.app.ability.wantAgent/wantAgent
 */
declare namespace wantAgent {
  /**
   * 获取WantAgent实例的Bundle名称。使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { AsyncCallback<string> } callback - 获取WantAgent实例的包名的回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getBundleName
   */
  function getBundleName(agent: WantAgent, callback: AsyncCallback<string>): void;

  /**
   * 获取WantAgent实例的Bundle名称。使用Promise异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @returns { Promise<string> } 以Promise形式返回获取WantAgent实例的Bundle名称。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getBundleName
   */
  function getBundleName(agent: WantAgent): Promise<string>;

  /**
   * 获取WantAgent实例的用户ID。使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { AsyncCallback<number> } callback - 获取WantAgent实例的用户ID的回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getUid
   */
  function getUid(agent: WantAgent, callback: AsyncCallback<number>): void;

  /**
   * 获取WantAgent实例的用户ID。使用Promise异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @returns { Promise<number> } 以Promise形式返回获取WantAgent实例的用户ID。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getUid
   */
  function getUid(agent: WantAgent): Promise<number>;

  /**
   * 获取WantAgent中的Want(callback形式)。
   *
   * @param { WantAgent } agent - Indicates the {@link WantAgent} WantAgent信息。
   * @param { AsyncCallback<Want> } callback - 获取WantAgent中的Want的回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getWant
   */
  function getWant(agent: WantAgent, callback: AsyncCallback<Want>): void;

  /**
   * 获取WantAgent中的Want(Promise形式)。
   *
   * @param { WantAgent } agent - WantAgent信息。
   * @returns { Promise<Want> } 以Promise形式返回Want。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getWant
   */
  function getWant(agent: WantAgent): Promise<Want>;

  /**
   * 取消WantAgent实例。使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { AsyncCallback<void> } callback - 取消WantAgent实例的回调方法
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#cancel
   */
  function cancel(agent: WantAgent, callback: AsyncCallback<void>): void;

  /**
   * 取消WantAgent实例。使用Promise异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @returns { Promise<void> } 以Promise形式获取异步返回结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#cancel
   */
  function cancel(agent: WantAgent): Promise<void>;

  /**
   * 主动激发WantAgent实例。使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { TriggerInfo } triggerInfo - TriggerInfo对象。
   * @param { Callback<CompleteData> } [callback] - 主动激发WantAgent实例的回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#trigger
   */
  function trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: Callback<CompleteData>): void;

  /**
   * 判断两个WantAgent实例是否相等，以此来判断是否是来自同一应用的相同操作。使用callback异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { WantAgent } otherAgent - WantAgent对象。
   * @param { AsyncCallback<boolean> } callback - 判断两个WantAgent实例是否相等的回调方法。返回true表示两个WantAgent实例相等；返回false表示不相等。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#equal
   */
  function equal(agent: WantAgent, otherAgent: WantAgent, callback: AsyncCallback<boolean>): void;

  /**
   * 判断两个WantAgent实例是否相等，以此来判断是否是来自同一应用的相同操作。使用Promise异步回调。
   *
   * @param { WantAgent } agent - WantAgent对象。
   * @param { WantAgent } otherAgent - WantAgent对象。
   * @returns { Promise<boolean> } 以Promise形式返回获取判断两个WantAgent实例是否相等的结果。返回true表示两个WantAgent实例相等；返回false表示不相等。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#equal
   */
  function equal(agent: WantAgent, otherAgent: WantAgent): Promise<boolean>;

  /**
   * 创建WantAgent。创建失败返回的WantAgent为空值。使用callback异步回调。
   *
   * @param { WantAgentInfo } info - WantAgent信息。
   * @param { AsyncCallback<WantAgent> } callback - 创建WantAgent的回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getWantAgent
   */
  function getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void;

  /**
   * 创建WantAgent。创建失败返回的WantAgent为空值。使用Promise异步回调。
   *
   * @param { WantAgentInfo } info - WantAgent信息。
   * @returns { Promise<WantAgent> } 以Promise形式返回WantAgent。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getWantAgent
   */
  function getWantAgent(info: WantAgentInfo): Promise<WantAgent>;

  /**
   * 表示WantAgent行为控制标志，用于配置WantAgent的创建和触发行为。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#WantAgentFlags
   */
  export enum WantAgentFlags {
    /**
     * WantAgent仅能使用一次。  
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#ONE_TIME_FLAG
     */
    ONE_TIME_FLAG = 0,

    /**
     * 如果描述WantAgent对象不存在，则不创建它，直接返回null。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#NO_BUILD_FLAG
     */
    NO_BUILD_FLAG,

    /**
     * 在生成一个新的WantAgent对象前取消已存在的一个WantAgent对象。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#CANCEL_PRESENT_FLAG
     */
    CANCEL_PRESENT_FLAG,

    /**
     * 使用新的WantAgent的额外数据替换已存在的WantAgent中的额外数据。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#UPDATE_PRESENT_FLAG
     */
    UPDATE_PRESENT_FLAG,

    /**
     * WantAgent是不可变的。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#CONSTANT_FLAG
     */
    CONSTANT_FLAG,

    /**
     * 当前Want中的element属性可被WantAgent.trigger()中Want的element属性取代。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_ELEMENT
     */
    REPLACE_ELEMENT,

    /**
     * 当前Want中的action属性可被WantAgent.trigger()中Want的action属性取代。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_ACTION
     */
    REPLACE_ACTION,

    /**
     * 当前Want中的uri属性可被WantAgent.trigger()中Want的uri属性取代。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_URI
     */
    REPLACE_URI,

    /**
     * 当前Want中的entities属性可被WantAgent.trigger()中Want的entities属性取代。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_ENTITIES
     */
    REPLACE_ENTITIES,

    /**
     * 当前Want中的bundleName属性可被WantAgent.trigger()中Want的bundleName属性取代。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_BUNDLE
     */
    REPLACE_BUNDLE
  }

  /**
   * 表示WantAgent支持的操作类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#OperationType
   */
  export enum OperationType {
    /**
     * 不识别的类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.OperationType#UNKNOWN_TYPE
     */
    UNKNOWN_TYPE = 0,

    /**
     * 开启一个有页面的Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.OperationType#START_ABILITY
     */
    START_ABILITY,

    /**
     * 开启多个有页面的Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.OperationType#START_ABILITIES
     */
    START_ABILITIES,

    /**
     * 开启一个无页面的ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.OperationType#START_SERVICE
     */
    START_SERVICE,

    /**
     * 发送一个公共事件。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.OperationType#SEND_COMMON_EVENT
     */
    SEND_COMMON_EVENT
  }

  /**
   * 表示主动触发WantAgent返回的数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#CompleteData
   */
  export interface CompleteData {
    /**
     * 触发的wantAgent。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.CompleteData#info
     */
    info: WantAgent;

    /**
     * 存在的被触发的want。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.CompleteData#want
     */
    want: Want;

    /**
     * 触发wantAgent的请求代码。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.CompleteData#finalCode
     */
    finalCode: number;

    /**
     * 公共事件收集的最终数据。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.CompleteData#finalData
     */
    finalData: string;

    /**
     * 额外数据。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.CompleteData#extraInfo
     */
    extraInfo?: { [key: string]: any };
  }
}

/**
 * WantAgent对象。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 7 dynamiconly
 * @deprecated since 23
 * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgent
 */
export type WantAgent = object;

export default wantAgent;