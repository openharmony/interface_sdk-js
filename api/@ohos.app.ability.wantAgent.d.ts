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
 * The WantAgent module encapsulates a [Want]{@link ./@ohos.app.ability.Want:Want} object, enabling an application to 
 * trigger a WantAgent object to perform specified operations (such as starting an ability or publishing a common event)
 * at a future time.
 * 
 * The module provides the APIs for creating a WantAgent object, obtaining the bundle name and UID of the application to
 * which a WantAgent object belongs, proactively triggering a WantAgent object, and checking whether two WantAgent 
 * objects are the same. A typical use scenario of WantAgent is notification processing. For example, when a user 
 * touches a notification, the [trigger]{@link wantAgent.trigger} API of WantAgent is triggered and the target 
 * application is started. For details, see 
 * [Notification](docroot://notification/notification-with-wantagent.md).
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
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * The WantAgent module encapsulates a [Want]{@link ./@ohos.app.ability.Want:Want} object, enabling an application to 
 * trigger a WantAgent object to perform specified operations (such as starting an ability or publishing a common event)
 * at a future time.
 * 
 * The module provides the APIs for creating a WantAgent object, obtaining the bundle name and UID of the application to
 * which a WantAgent object belongs, proactively triggering a WantAgent object, and checking whether two WantAgent 
 * objects are the same. A typical use scenario of WantAgent is notification processing. For example, when a user 
 * touches a notification, the [trigger]{@link trigger} API of WantAgent is triggered and the target application is 
 * started. For details, see [Notification](docroot://notification/notification-with-wantagent.md).
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace wantAgent {
  /**
   * Obtains the bundle name of a WantAgent object.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @param { AsyncCallback<string> } callback - Callback used to return the bundle name.
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
   * Obtains the bundle name of a WantAgent object.
   * This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @returns { Promise<string> } Promise used to return the bundle name.
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
   * Obtains the user ID of a WantAgent object.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @param { AsyncCallback<int> } callback - Callback used to return the user ID.
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
   * Obtains the user ID of a WantAgent object.
   * This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @returns { Promise<int> } Promise used to return the user ID.
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
   * Obtains the Want in a WantAgent object.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @param { AsyncCallback<Want> } callback - Callback used to return the Want.
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
   * Obtains the Want in a WantAgent object.
   * This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @returns { Promise<Want> } Promise used to return the Want.
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
   * Cancels a WantAgent object.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Cancels a WantAgent object.
   * This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Proactively triggers a WantAgent object.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @param { TriggerInfo } triggerInfo - {@link TriggerInfo} object.
   * @param { AsyncCallback<CompleteData> } [callback] - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: AsyncCallback<CompleteData>): void;

  /**
   * Asynchronously triggers a predefined operation encration encapsulated in a Wantagent with specified trigger
   * information.
   * If the specified wantAgent is local, you need to apply for permission:
   * ohos.permission.TRIGGER_LOCAL_WANTAGENT permission.
   *
   * @param { WantAgent } agent - Indicates the WantAgent.
   * @param { TriggerInfo } triggerInfo - Indicates the information required for triggering a WantAgent.
   * @param { Context } context - Indicates current context.
   * @returns { Promise<CompleteData> } Returns the CompleteData.
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
   * Checks whether two WantAgent objects are equal, so as to determine whether the same operation is from the
   * same application.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - The first WantAgent object.
   * @param { WantAgent } otherAgent - The second WantAgent object.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value <code>true</code> means
   *     that the two WantAgent objects are equal, and <code>false</code> means the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function equal(agent: WantAgent, otherAgent: WantAgent, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether two WantAgent objects are equal, so as to determine whether the same operation is from the
   * same application.
   * This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - The first WantAgent object.
   * @param { WantAgent } otherAgent - The second WantAgent object.
   * @returns { Promise<boolean> } Promise used to return the result. The value <code>true</code> means that the two
   *     WantAgent objects are equal, and <code>false</code> means the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function equal(agent: WantAgent, otherAgent: WantAgent): Promise<boolean>;

  /**
   * Obtains a WantAgent object.
   * This API uses an asynchronous callback to return the result.
   * If the creation fails, a null WantAgent object is returned.
   * 
   * <p>**NOTE**:
   * <br>Third-party applications can set only their own abilities.
   * </p>
   *
   * @param { WantAgentInfo } info - Information about the WantAgent object to obtain.
   * @param { AsyncCallback<WantAgent> } callback - Callback used to return the WantAgent object.
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
   * Obtains a WantAgent object.
   * This API uses a promise to return the result.
   * If the creation fails, a null WantAgent object is returned.
   * 
   * <p>**NOTE**:
   * <br>Third-party applications can set only their own abilities.
   * </p>
   *
   * @param { WantAgentInfo } info - Information about the WantAgent object to obtain.
   * @returns { Promise<WantAgent> } Promise used to return the WantAgent object.
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
   * Obtains the operation type of a WantAgent object.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { WantAgent } agent - Target WantAgent object.
   * @param { AsyncCallback<int> } callback - Callback used to return the operation type.
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
   * Obtains the operation type of a WantAgent object.
   * This API uses a promise to return the result.
   *
   * @param { WantAgent } agent - Indicates the WantAgent.
   * @returns { Promise<int> } Returns the OperationType of the WantAgent.
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
   * Enables or disables the WantAgent multithreading feature.
   *
   * @param { boolean } isMultithreadingSupported - Whether to enable the multithreading feature. The value
   *     <code>true</code> means to enable multithreading, and <code>false</code> means the opposite.
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
   * Create a local WantAgent object.
   * The WantAgent created by this interface stores data on the client side
   * and is not managed by the WantAgent servcer.
   * If this WantAgent object is passed across processes,
   * its contained data will be serialized and transmitted to the target process.
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
   * Checks whether the specified WantAgent is local.
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
   * Enumerates the flags used by the WantAgent objects.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum WantAgentFlags {
    /**
     * The WantAgent object can be used only once.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ONE_TIME_FLAG = 0,

    /**
     * The WantAgent object does not exist and hence it is not created. In this case, <code>null</code> is returned.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    NO_BUILD_FLAG,

    /**
     * The existing WantAgent object should be canceled before a new object is generated.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    CANCEL_PRESENT_FLAG,

    /**
     * Extra information of the existing WantAgent object is replaced with that of the new object.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UPDATE_PRESENT_FLAG,

    /**
     * The WantAgent object is immutable.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTANT_FLAG,

    /**
     * The element property in the current Want can be replaced by the element property in the Want passed in
     * WantAgent.trigger().This processing is not supported yet.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_ELEMENT,

    /**
     * The action property in the current Want can be replaced by the action property in the Want passed in
     * WantAgent.trigger().This processing is not supported yet.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_ACTION,

    /**
     * The uri property in the current Want can be replaced by the uri property in the Want passed in
     * WantAgent.trigger().This processing is not supported yet.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_URI,

    /**
     * The <code>entities</code> property in the current Want can be replaced by the <code>entities</code> property in
     * the Want passed in WantAgent.trigger().This processing is not supported yet.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_ENTITIES,

    /**
     * The <code>bundleName</code> property in the current Want can be replaced by the <code>bundleName</code> property
     * in the Want passed in WantAgent.trigger().This processing is not supported yet.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    REPLACE_BUNDLE
  }

  /**
   * Enumerates the operation types of the WantAgent objects.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum OperationType {
    /**
     * Unknown operation type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN_TYPE = 0,

    /**
     * Starts an ability with a UI.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    START_ABILITY,

    /**
     * Starts multiple abilities with a UI.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    START_ABILITIES,

    /**
     * Starts an ability without a UI (valid only in the FA model).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    START_SERVICE,

    /**
     * Sends a common event.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SEND_COMMON_EVENT,

    /**
     * Starts a service extension.
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
   * Describes the data returned by the operation of proactive triggering a WantAgent object.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CompleteData {
    /**
     * WantAgent object that is triggered.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    info: WantAgent;

    /**
     * Existing Want that is triggered.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    want: Want;

    /**
     * Request code that triggers the WantAgent object.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    finalCode: int;

    /**
     * Final data collected by the common event.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    finalData: string;

    /**
     * Extra information.
     *
     * @type { ?object } [since 9 - 10]
     * @type { ?Record<string, Object> } [since 11]
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    extraInfo?: Record<string, Object>;

    /**
     * Extra information.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 23 static
     */
    extraInfo?: Record<string, RecordData>;
  }

  /**
   * Defines the TriggerInfo object.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type TriggerInfo = _TriggerInfo;

  /**
   * Defines the WantAgentInfo object.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  export type WantAgentInfo = _WantAgentInfo;

  /**
   * Provides the information required to create a local WantAgent.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export type LocalWantAgentInfo = _LocalWantAgentInfo;

}

/**
 * Target WantAgent object.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9 dynamic
 * @since 23 static
 */
export type WantAgent = object;

export default wantAgent;