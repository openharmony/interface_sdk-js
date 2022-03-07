/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
import { AsyncCallback } from './basic';
import { Callback } from './basic';
import { Want } from './ability/want';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { AbilityResult } from './ability/abilityResult';
import { Context } from './app/context';
import { DataAbilityHelper } from './ability/dataAbilityHelper';
import { ConnectOptions } from './ability/connectOptions';
import { ContinueAbilityOptions } from './ability/continueAbilityOptions';
import { AbilityAgent } from './@ohos.ability.abilityAgent';
import window from './@ohos.window';

/**
 * A Feature Ability represents an ability with a UI and is designed to interact with users.
 * @name featureAbility
 * @since 6
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @permission N/A
 * @FAModelOnly
 */
declare namespace featureAbility {
  /**
   * Obtain the want sended from the source ability.
   *
   * @since 6
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param parameter Indicates the ability to start.
   * @return -
   * @FAModelOnly
   */
  function getWant(callback: AsyncCallback<Want>): void;
  function getWant(): Promise<Want>;

  /**
   * Starts a new ability.
   *
   * @since 6
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param parameter Indicates the ability to start.
   * @return -
   * @FAModelOnly
   */
  function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<number>): void;
  function startAbility(parameter: StartAbilityParameter): Promise<number>;

  /**
   * Obtains the application context.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return Returns the application context.
   * @since 6
   * @FAModelOnly
   */
  function getContext(): Context;

  /**
   * Starts an ability and returns the execution result when the ability is destroyed.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param parameter Indicates the ability to start.
   * @return Returns the {@link AbilityResult}.
   * @FAModelOnly
   */
  function startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>): void;
  function startAbilityForResult(parameter: StartAbilityParameter): Promise<AbilityResult>;

  /**
   * Sets the result code and data to be returned by this Page ability to the caller
   * and destroys this Page ability.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param parameter Indicates the result to return.
   * @return -
   * @FAModelOnly
   */
  function terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;
  function terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * Destroys this Page ability.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return -
   * @FAModelOnly
   */
  function terminateSelf(callback: AsyncCallback<void>): void;
  function terminateSelf(): Promise<void>;

  /**
   * Obtains the dataAbilityHelper.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param uri Indicates the path of the file to open.
   * @return Returns the dataAbilityHelper.
   * @FAModelOnly
   */
  function acquireDataAbilityHelper(uri: string): DataAbilityHelper;

   /**
   * Checks whether the main window of this ability has window focus.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return Returns {@code true} if this ability currently has window focus; returns {@code false} otherwise.
   * @FAModelOnly
   */
  function hasWindowFocus(callback: AsyncCallback<boolean>): void;
  function hasWindowFocus(): Promise<boolean>;

  /**
   * Connects the current ability to an ability using the AbilityInfo.AbilityType.SERVICE template.
   * @default -
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param request The element name of the service ability
   * @param options The remote object instance
   * @return Returns the number code of the ability connected
   * @FAModelOnly
   */
  function connectAbility(request: Want, options:ConnectOptions ): number;

  /**
  * The callback interface was connect successfully.
  * @default -
  * @since 7
  * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
  * @param connection The number code of the ability connected
  * @FAModelOnly
  */
  function disconnectAbility(connection: number, callback:AsyncCallback<void>): void;
  function disconnectAbility(connection: number): Promise<void>;

  /**
   * Migrates this ability to the given device on the same distributed network.
   * @default -
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @permission ohos.permission.DISTRIBUTED_DATASYNC.
   * @return -
   * @FAModelOnly
   */
  function continueAbility(options: ContinueAbilityOptions, callback: AsyncCallback<void>): void;
  function continueAbility(options: ContinueAbilityOptions): Promise<void>;

  /**
   * Obtains the window corresponding to the current ability.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return Returns the window corresponding to the current ability.
   * @FAModelOnly
   */
  function getWindow(callback: AsyncCallback<window.Window>): void;
  function getWindow(): Promise<window.Window>;

  /**
   * Obtains the migration state of this ability.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return Returns the migration state {@link ContinuationState}.
   * @FAModelOnly
   */
  function getContinuationState(callback: AsyncCallback<ContinuationState>): void;
  function getContinuationState(): Promise<ContinuationState>;

  /**
   * Obtains the ID of the source device from which this ability is migrated.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return Returns the source device ID.
   * @FAModelOnly
   */
  function getOriginalDeviceId(callback: AsyncCallback<string>): void;
  function getOriginalDeviceId(): Promise<string>;
 
  /**
   * Migrates this ability from another device on the same distributed network back to the local device.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @return -
   * @FAModelOnly
   */
  function reverseContinueAbility(callback: AsyncCallback<void>): void;
  function reverseContinueAbility(): Promise<void>;
 
  /**
   * Start assist ability.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @permission ohos.permission.DISTRIBUTED_DATASYNC, com.huawei.hwddmp.servicebus.BIND_SERVICE
   * @param want want.
   * @FAModelOnly
   */
  function startAssistAbility(want: Want): void;
 
  /**
   * Stop assist ability.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   */
  function stopAssistAbility(callback: AsyncCallback<void>): void;
  function stopAssistAbility(): Promise<void>;
 
  /**
   * Subscribe assist ability success event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type event type.
   * @FAModelOnly
   */
  function on(type: 'assistConnect', callback: Callback<AbilityAgent>): void;
 
  /**
   * Subscribe assist ability fail event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type event type.
   * @FAModelOnly
   */
  function on(type: 'assistConnectFailed', callback: Callback<number>): void;
 
  /**
   * Subscribe disconnect assist ability event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type event type.
   * @FAModelOnly
   */
  function on(type: 'assistDisconnect', callback: Callback<number>): void;
 
  /**
   * Unsubscribe assist ability success event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type event type.
   * @FAModelOnly
   */
  function off(type: 'assistConnect', callback?: Callback<AbilityAgent>): void;
 
  /**
   * Unsubscribe assist ability fail event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type event type.
   * @FAModelOnly
   */
  function off(type: 'assistConnectFailed', callback?: Callback<number>): void;
 
  /**
   * Unsubscribe disconnect assist ability event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @param type event type.
   * @FAModelOnly
   */
  function off(type: 'assistDisconnect', callback?: Callback<number>): void;

  /**
   * Obtain the window configuration.
   * 
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   */
  export enum AbilityWindowConfiguration {
    WINDOW_MODE_UNDEFINED = 0,
    WINDOW_MODE_FULLSCREEN = 1,
    WINDOW_MODE_SPLIT_PRIMARY = 100,
    WINDOW_MODE_SPLIT_SECONDARY = 101,
    WINDOW_MODE_FLOATING = 102
  }

  /**
   * Obtain the window properties.
   * 
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   */
  export enum AbilityStartSetting {
    BOUNDS_KEY = "abilityBounds",
    WINDOW_MODE_KEY = "windowMode",
    DISPLAY_ID_KEY = "displayId"
  }

  /**
   * Obtain the errorCode.
   * 
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   */
  export enum ErrorCode {
    NO_ERROR = 0,
    INVALID_PARAMETER = -1,
    ABILITY_NOT_FOUND = -2,
    PERMISSION_DENY = -3
  }

  /**
   * Indicates the operation type of data.
   * 
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   */
  export enum DataAbilityOperationType {
    TYPE_INSERT = 1,
    TYPE_UPDATE = 2,
    TYPE_DELETE = 3,
    TYPE_ASSERT = 4,
  }

  /**
   * Indicates the state of continuation.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   */
  export enum ContinuationState {
    LOCAL_RUNNING = 0,
    REMOTE_RUNNING = 1,
    REPLICA_RUNNING = 2
  }

  /**
   * Indicates the data structure of lifecycle.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   */
   export enum LifecycleEvent {
    UNDEFINED = 0,
    ON_START = 1,
    ON_INACTIVE = 2,
    ON_ACTIVE = 3,
    ON_BACKGROUND = 4,
    ON_FOREGROUND = 5,
    ON_STOP = 6
  }

  /**
   * Collaboration status code.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   */
  export enum AssistantCode {
    OK = 0,
    ERR_UNCONNECTED = 1,
    ERR_INVALID_PARAMETER = 2,
    ERR_SYSTEM_ERROR = 3,
    ERR_EVENT_HANDLER_IS_NOT_SET_UP = 4,
    ERR_ABILITY_TYPE_NOT_SUPPORTED = 5,
    ERR_SIGNATURE_IS_NOT_CONSISTENT = 6,
    ERR_ABILITY_NOT_MATCHED = 7,
    ERR_ABILITY_TERMINATED = 8,
    ERR_DEVICE_OFFLINE = 9,
    ERR_PROCESS_DIED = 10,
    ERR_ABILITY_START_FAILED = 11,
    ERR_VERSION_INCOMPATIBLE = 12,
    ERR_DISTRIBUTED_COMMUNICATION_PERMISSION_DENIED = 13,
    ERR_TIMEOUT = 14,
    ERR_IN_ASSISTING_MODE = 15,
    ERR_NETWORK_TYPE_NOT_SUPPORTED = 16
  }

  /**
   * Indicates the connection status of Collaboration devices.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   */
  export enum DeviceConnectState {
    IDLE = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    DISCONNECTING = 3
  }
}
export default featureAbility;
