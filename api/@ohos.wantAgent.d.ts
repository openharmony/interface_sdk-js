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
 * The WantAgent module provides APIs for creating and comparing WantAgent objects, and obtaining the user ID and bundle
 *  name of a WantAgent object.
 *
 * @file WantAgent Module
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback, Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import { WantAgentInfo } from './wantAgent/wantAgentInfo';
import { TriggerInfo } from './wantAgent/triggerInfo';

/**
 * The WantAgent module provides APIs for creating and comparing WantAgent objects, and obtaining the user ID and bundle
 *  name of a WantAgent object.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.app.ability.wantAgent/wantAgent
 */
declare namespace wantAgent {
  /**
   * Obtains the bundle name of a WantAgent.
   *
   * @param { WantAgent } agent - whose bundle name to obtain.
   * @param { AsyncCallback<string> } callback - A callback method to obtain the package name of the WantAgent instance.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getBundleName
   */
  function getBundleName(agent: WantAgent, callback: AsyncCallback<string>): void;

  /**
   * Obtains the bundle name of a WantAgent.
   *
   * @param { WantAgent } agent - whose bundle name to obtain.
   * @returns { Promise<string> } Promise used to return the bundle name.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getBundleName
   */
  function getBundleName(agent: WantAgent): Promise<string>;

  /**
   * Obtains the user ID of a WantAgent object. This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - whose UID to obtain.
   * @param { AsyncCallback<number> } callback - Create a callback method for WantAgent.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getUid
   */
  function getUid(agent: WantAgent, callback: AsyncCallback<number>): void;

  /**
   * Obtains the user ID of a WantAgent object. This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - whose UID to obtain.
   * @returns { Promise<number> } Promise used to return the user ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getUid
   */
  function getUid(agent: WantAgent): Promise<number>;

  /**
   * Obtains the Want in a WantAgent object. This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - WantAgent object.
   * @param { AsyncCallback<Want> } callback - Callback used to return the Want.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getWant
   */
  function getWant(agent: WantAgent, callback: AsyncCallback<Want>): void;

  /**
   * Obtains the Want in a WantAgent object. This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - WantAgent object.
   * @returns { Promise<Want> } Promise used to return the Want.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getWant
   */
  function getWant(agent: WantAgent): Promise<Want>;

  /**
   * Cancels a WantAgent object. This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - to cancel.
   * @param { AsyncCallback<void> } callback - Cancel the callback method for Want in WantAgent.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#cancel
   */
  function cancel(agent: WantAgent, callback: AsyncCallback<void>): void;

  /**
   * Cancels a WantAgent object. This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - to cancel.
   * @returns { Promise<void> } The promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#cancel
   */
  function cancel(agent: WantAgent): Promise<void>;

  /**
   * Triggers a WantAgent object. This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - WantAgent object.
   * @param { TriggerInfo } triggerInfo - TriggerInfo object.
   * @param { Callback<CompleteData> } [callback] - Callback used to return the result.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#trigger
   */
  function trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: Callback<CompleteData>): void;

  /**
   * Checks whether two WantAgent objects are equal to determine whether the same operation is from the same
   * application. This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - The first WantAgent object.
   * @param { WantAgent } otherAgent - WantAgent Object.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. true if the two WantAgent
   *     objects are equal, false otherwise.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#equal
   */
  function equal(agent: WantAgent, otherAgent: WantAgent, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether two WantAgent objects are equal to determine whether the same operation is from the same
   * application. This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - The first WantAgent object.
   * @param { WantAgent } otherAgent - WantAgent Object.
   * @returns { Promise<boolean> } Promise used to return the result. true if the two WantAgent objects are
   *     equal, false otherwise.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#equal
   */
  function equal(agent: WantAgent, otherAgent: WantAgent): Promise<boolean>;

  /**
   * Creates a WantAgent object. If the creation fails, a null WantAgent object is returned. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { WantAgentInfo } info - about the WantAgent object to obtain.
   * @param { AsyncCallback<WantAgent> } callback - Callback method for obtaining the user ID of WantAgent instance.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getWantAgent
   */
  function getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void;

  /**
   * Creates a WantAgent object. If the creation fails, a null WantAgent object is returned. This API uses a
   * promise to return the result.
   *
   * @param { WantAgentInfo } info - about the WantAgent object to obtain.
   * @returns { Promise<WantAgent> } Promise object used to return the WantAgent instance
   *     for triggering the specified operation.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#getWantAgent
   */
  function getWantAgent(info: WantAgentInfo): Promise<WantAgent>;

  /**
   * Enumerates flags for using a WantAgent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#WantAgentFlags
   */
  export enum WantAgentFlags {
    /**
     * The WantAgent object can be used only once.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#ONE_TIME_FLAG
     */
    ONE_TIME_FLAG = 0,

    /**
     * The WantAgent object does not exist and hence it is not created. In this case, null is returned.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#NO_BUILD_FLAG
     */
    NO_BUILD_FLAG,

    /**
     * The existing WantAgent object should be canceled before a new object is generated.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#CANCEL_PRESENT_FLAG
     */
    CANCEL_PRESENT_FLAG,

    /**
     * Extra information of the existing WantAgent object is replaced with that of the new object.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#UPDATE_PRESENT_FLAG
     */
    UPDATE_PRESENT_FLAG,

    /**
     * The WantAgent object is immutable.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#CONSTANT_FLAG
     */
    CONSTANT_FLAG,

    /**
     * The element property in the current Want can be replaced by the element property in
     * the Want passed in WantAgent.trigger().
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_ELEMENT
     */
    REPLACE_ELEMENT,

    /**
     * The action property in the current Want can be replaced by the action property in
     * the Want passed in WantAgent.trigger().
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_ACTION
     */
    REPLACE_ACTION,

    /**
     * The uri property in the current Want can be replaced by the uri property in the Want
     * passed in WantAgent.trigger().
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_URI
     */
    REPLACE_URI,

    /**
     * The entities property in the current Want can be replaced by the entities property
     * in the Want passed in WantAgent.trigger().
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgentFlags#REPLACE_ENTITIES
     */
    REPLACE_ENTITIES,

    /**
     * The bundleName property in the current Want can be replaced by the bundleName
     * property in the Want passed in WantAgent.trigger().
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
   * Identifies the operation for using a WantAgent, such as starting an ability or sending a common event.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#OperationType
   */
  export enum OperationType {
    /**
     * Unknown operation type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.OperationType#UNKNOWN_TYPE
     */
    UNKNOWN_TYPE = 0,

    /**
     * Starts an ability with a UI.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.OperationType#START_ABILITY
     */
    START_ABILITY,

    /**
     * Starts multiple abilities with a UI.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.OperationType#START_ABILITIES
     */
    START_ABILITIES,

    /**
     * Starts an Ability without a page.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.OperationType#START_SERVICE
     */
    START_SERVICE,

    /**
     * Sends a common event.
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
   * Describes the data returned by after wantAgent.trigger is called.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.app.ability.wantAgent/wantAgent#CompleteData
   */
  export interface CompleteData {
    /**
     * WantAgent to trigger.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.CompleteData#info
     */
    info: WantAgent;

    /**
     * Want that exists and is triggered.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.CompleteData#want
     */
    want: Want;

    /**
     * Request code for triggering the WantAgent.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.CompleteData#finalCode
     */
    finalCode: number;

    /**
     * Final data collected by the common event.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.app.ability.wantAgent/wantAgent.CompleteData#finalData
     */
    finalData: string;

    /**
     * Extra information.
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
 * Defines the WantAgent object.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 7 dynamiconly
 * @deprecated since 23
 * @useinstead ohos.app.ability.wantAgent/wantAgent.WantAgent
 */
export type WantAgent = object;

export default wantAgent;