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
 * @file Application Event Logging
 * @kit PerformanceAnalysisKit
 */

import type { AsyncCallback } from './@ohos.base';
/*** if arkts static */
import type { RecordData } from './@ohos.base'
/*** endif */

/**
 * This module provides application logging and event subscription capabilities, including event storage, event
 * subscription, event clearance, and logging configuration. HiAppEvent records the events triggered during application
 * running in [AppEventInfo]{@link hiAppEvent.AppEventInfo}, and classifies the events into system events and
 * application events.
 *
 * System events are triggered in system services and are predefined in the system. The fields of the event parameter
 * object **params** of such events are defined by each system event. For details, see overviews of user guides. For
 * example, [Crash Event Overview](docroot://dfx/hiappevent-watcher-crash-events.md).
 *
 * Application events are defined by application developers and can be customized using the
 * [Write]{@link hiAppEvent.write(info: AppEventInfo)} API as required.
 *
 * @syscap SystemCapability.HiviewDFX.HiAppEvent
 * @crossplatform [since 19]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace hiAppEvent {
  /**
   * Enumerates event types.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum EventType {
    /**
     * Fault event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FAULT = 1,

    /**
     * Statistic event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    STATISTIC = 2,

    /**
     * Security event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SECURITY = 3,

    /**
     * Behavior event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    BEHAVIOR = 4
  }

  /**
   * Provides domain name constants.
   *
   * | Name| Type  | Read Only  | Description      |
   * | ---  | ------ | ------ | ---------- |
   * | OS   | string | Yes| System domain.|
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  namespace domain {
    /**
     * System domain.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 11 dynamic
     * @since 23 static
     */
    const OS: string;
  }

  /**
   * Provides event name constants, including system event name constants and application event name constants.
   * <br>The application event name constants are optional custom event names reserved when you call Write for
   * application event logging.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  namespace event {
    /**
     * User login event. This is a reserved application event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const USER_LOGIN: string;

    /**
     * User logout event. This is a reserved application event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const USER_LOGOUT: string;

    /**
     * Distributed service startup event. This is a reserved application event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SERVICE_START: string;

    /**
     * Application crash event. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    const APP_CRASH: string;

    /**
     * Application freeze event. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    const APP_FREEZE: string;

    /**
     * Event indicating the application launch duration. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const APP_LAUNCH: string;

    /**
     * Event indicating frame loss during swiping. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const SCROLL_JANK: string;

    /**
     * Event indicating a high CPU usage. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const CPU_USAGE_HIGH: string;

    /**
     * Event indicating battery usage statistics. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const BATTERY_USAGE: string;

    /**
     * Application resource leak event. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const RESOURCE_OVERLIMIT: string;

    /**
     * Application address sanitizer event. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const ADDRESS_SANITIZER: string;

    /**
     * Main thread jank event. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const MAIN_THREAD_JANK: string;

    /**
     * Application killed event. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 20.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    const APP_KILLED: string;

    /**
     * Application task execution timeout event. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 21.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    const APP_HICOLLIE: string;

    /**
     * Audio jank event. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 21.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    const AUDIO_JANK_FRAME: string;

    /**
     * ArkWeb fling jank event. This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 23.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 23 dynamic&static
     */
    const SCROLL_ARKWEB_FLING_JANK: string;

    /**
     * App encounter a longer hang and trigger an system warning, such as THREAD_BLOCK_3S or LIFECYCLE_HALF_TIMEOUT.
     * This is a system event name constant.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 26.0.0.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    const appFreezeWarning: string;
  }

  /**
   * Provides parameter name constants.
   *
   * | Name                           | Type  | Read Only  | Description              |
   * | ------------------------------- | ------ | ------ | ------------------ |
   * | USER_ID                         | string | Yes| Custom user ID.    |
   * | DISTRIBUTED_SERVICE_NAME        | string | Yes| Distributed service name.  |
   * | DISTRIBUTED_SERVICE_INSTANCE_ID | string | Yes| Distributed service instance ID.|
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  namespace param {
    /**
     * Custom user ID.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const USER_ID: string;

    /**
     * Distributed service name.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SERVICE_NAME: string;

    /**
     * Distributed service instance ID.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SERVICE_INSTANCE_ID: string;
  }

  /**
   * Configures the application event logging function, such as setting the logging switch and directory storage quota.
   *
   * @param { ConfigOption } config - Configuration items for application event logging.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11103001 - Invalid max storage quota value. Possible caused by incorrectly formatted.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function configure(config: ConfigOption): void;

  /**
   * Provides configuration options for application event logging.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface ConfigOption {
    /**
     * Whether to enable the event logging function. The default value is **false**. If this parameter is set to
     * **true**, the logging function is disabled. Otherwise, the logging function is enabled.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    disable?: boolean;

    /**
     * Quota for the directory that stores event logging files. The default value is **10M**. It is recommended that the
     * quota be less than or equal to 10 MB. Otherwise, the API efficiency may be affected.
     *
     * If the directory size exceeds the specified quota when application event logging is performed, event logging
     * files in the directory will be cleared one by one based on the generation time to ensure that directory size does
     * not exceed the quota.
     *
     * The quota value must meet the following requirements:
     *
     * - The quota value consists of only digits and a unit (including b|k|kb|m|mb|g|gb|t|tb, which are case-insensitive
     * ).
     * - The quota value must start with a digit. You can determine whether to pass the unit. If the unit is left empty,
     * **b** (that is, byte) is used by default.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    maxStorage?: string;
  }

  /**
   * Defines parameters of the event information.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AppEventInfo {
    /**
     * Event domain. The value is a string of up to 32 characters, including digits (0 to 9), letters (a to z)(A to Z), and
     * underscores (_). It must start with a letter and cannot end with an underscore (_).
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * Event name. The value is string that contains a maximum of 48 characters, including digits (0 to 9), letters (a
     * to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a
     * digit or letter.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Event type.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    eventType: EventType;

    /**
     * Event parameter object, which consists of a parameter name and a parameter value. In system events, the fields
     * contained in **params** are defined by system. For details about the fields, you can see the overviews of system
     * events, for example, [Crash Event Overview](docroot://dfx/hiappevent-watcher-crash-events.md). For application
     * events, you need to define the parameters of the [Write]{@link hiAppEvent.write(info: AppEventInfo)} API. The
     * specifications are as follows:
     *
     * - A parameter name is a string that contains a maximum of 32 characters, including digits (0 to 9), letters (a to
     * z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with
     * a digit or letter. For example, **testName** and **$123_name**.
     * - The parameter value can be a string, number, boolean, or array. The string type parameter can contain a maximum
     * of 8 * 1024 characters. If the length exceeds the limit, the parameter and its name will be discarded. The value
     * of the number type parameter must be within the range of **Number.MIN_SAFE_INTEGER** to
     * **Number.MAX_SAFE_INTEGER**. If the value exceeds the range, an uncertain value may be generated. The element
     * type in the array type parameter can only be string, number, or boolean. The number of elements must be less than
     * 100. If this limit is exceeded, excess elements will be discarded.
     * - The maximum number of parameters is 32. If this limit is exceeded, excess parameters will be discarded.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    params: object;

    /**
     * Event parameter object, which consists of a parameter name and a parameter value. In system events, the fields
     * contained in params are defined by system. For details about the fields, you can see the overviews of system
     * events, for example, Crash Event Overview. For application events, you need to define the parameters of the
     * Write API. The specifications are as follows:
     * <br>- A parameter name is a string that contains a maximum of 32 characters, including digits (0 to 9), letters
     * (a to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end
     * with a digit or letter. For example, testName and $123_name.
     * <br>- The parameter value can be a string, number, boolean, or array. The string type parameter can contain a
     * maximum of 8 x 1024 characters. If the length exceeds the limit, the parameter and its name will be discarded.
     * The value of the number type parameter must be within the range of Number.MIN_SAFE_INTEGER to
     * Number.MAX_SAFE_INTEGER. If the value exceeds the range, an uncertain value may be generated. The element type
     * in the array type parameter can only be string, number, or boolean. The number of elements must be less than
     * 100. If this limit is exceeded, excess elements will be discarded.
     * <br>- The maximum number of parameters is 32. If this limit is exceeded, excess parameters will be discarded.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    params: RecordData;
  }

  /**
   * Writes events of the **AppEventInfo** type. This API uses a promise to return the result. The event object written
   * by calling this API is a custom object. To avoid conflicts with system events, you are not advised to write it to
   * system events (system event name constants defined in [Event]{@link hiAppEvent.event}). The events written by this
   * API can be subscribed to through ([addWatcher]{@link hiAppEvent.addWatcher}).
   *
   * @param { AppEventInfo } Application event object. You are advised to avoid the conflict between the custom event
   *     name and the system event name constant defined in Event. [since 9 - 10]
   * @param { AppEventInfo } info - Application event object. You are advised to avoid the conflict between the custom
   *     event name and the system event name constant defined in [Event]{@link hiAppEvent.event}. [since 11]
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11100001 - Function disabled. Possible caused by the param disable in ConfigOption is
   *     true.
   * @throws { BusinessError } 11101001 - Invalid event domain. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101002 - Invalid event name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101003 - Invalid number of event parameters. Possible caused by the number of
   *     parameters
   *     <br>is over 32.
   * @throws { BusinessError } 11101004 - Invalid string length of the event parameter.
   * @throws { BusinessError } 11101005 - Invalid event parameter name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101006 - Invalid array length of the event parameter.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function write(info: AppEventInfo): Promise<void>;

  /**
   * Writes events of the **AppEventInfo** type. This API uses an asynchronous callback to return the result. The event
   * object written by calling this API is a custom object. To avoid conflicts with system events, you are not advised
   * to write it to system events (system event name constants defined in [Event]{@link hiAppEvent.event}). The events
   * written by this API can be subscribed to through ([addWatcher]{@link hiAppEvent.addWatcher}).
   *
   * @param { AppEventInfo } info - Application event object. You are advised to avoid the conflict between the custom
   *     event name and the system event name constant defined in [Event]{@link hiAppEvent.event}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11100001 - Function disabled. Possible caused by the param disable in ConfigOption is
   *     true.
   * @throws { BusinessError } 11101001 - Invalid event domain. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101002 - Invalid event name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101003 - Invalid number of event parameters. Possible caused by the number of
   *     parameters
   *     <br>is over 32.
   * @throws { BusinessError } 11101004 - Invalid string length of the event parameter.
   * @throws { BusinessError } 11101005 - Invalid event parameter name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101006 - Invalid array length of the event parameter.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function write(info: AppEventInfo, callback: AsyncCallback<void>): void;

  /**
   * Enumerates the types of custom event parameter values.
   *
   * @unionmember { int } Int.
   * @unionmember { long } Long.
   * @unionmember { double } Double.
   * @unionmember { string } String.
   * @unionmember { boolean } The value is true or false.
   * @unionmember { Array<string> } The value is an array of strings.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 12]
   * @since 12 dynamic
   * @since 23 static
   */
  type ParamType = int | long | double | string | boolean | Array<string>;

  /**
   * Sets custom event parameters. This API uses a promise to return the result. During the same lifecycle, system
   * events and application events can be associated through event domain and event name.System events only support
   * crash, freeze and resource leak events.
   *
   * @param { Record<string, ParamType> } params - Custom parameter object. The parameter name and value are defined as
   *     follows:<br>- A parameter name is a string that contains a maximum of 32 characters, including digits (0 to 9),
   *     letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and
   *     end with a digit or letter.  <br>- The parameter value is of the [ParamType]{@link hiAppEvent.ParamType} and
   *     contains a maximum of 1024 characters.<br>- The number of parameters must be less than 64.
   * @param { string } domain - Event domain. The event domain can be associated with application events and system
   *     events (hiAppEvent.domain.OS).
   * @param { string } name - Event name. The default value is an empty string, which indicates all event names in the
   *     associated event domain. Event names can be used to associate application events and system events. System
   *     events can only be associated with the following events:<br>-
   *     [Crash event](docroot://dfx/hiappevent-watcher-crash-events.md) (**hiAppEvent.event.APP_CRASH**)<br>-
   *     [Application freeze event](docroot://dfx/hiappevent-watcher-freeze-events.md) (**hiAppEvent.event.APP_FREEZE**)
   *     <br>- [Resource leak event](docroot://dfx/hiappevent-watcher-resourceleak-events.md) (
   *     **hiAppEvent.event.RESOURCE_OVERLIMIT**).<br>**Note**: Since API version 20, the
   *     [resource leak event](docroot://dfx/hiappevent-watcher-resourceleak-events.md) is supported.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11100001 - Function disabled. Possible caused by the param disable in ConfigOption is
   *     true.
   * @throws { BusinessError } 11101001 - Invalid event domain. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101002 - Invalid event name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101004 - Invalid string length of the event parameter.
   * @throws { BusinessError } 11101005 - Invalid event parameter name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101007 - The number of parameter keys exceeds the limit.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 12]
   * @since 12 dynamic
   * @since 23 static
   */
  function setEventParam(params: Record<string, ParamType>, domain: string, name?: string): Promise<void>;

  /**
   * Sets event configuration. This method uses a promise to return the result. In the same lifecycle, you can set event
   * configuration by event name.
   *
   * Configuration items vary depending on events. Currently, only the following events are supported:
   *
   * - **MAIN_THREAD_JANK**. (For details about the parameter configuration, see
   * [Main Thread Jank Event Overview](docroot://dfx/hiappevent-watcher-mainthreadjank-events.md#parameters-of-seteventconfig)
   * .)
   * - **APP_CRASH** (For details about the parameter configuration, see
   * [Customizing Crash Log Specifications](docroot://dfx/hiappevent-watcher-crash-events.md#customizing-crash-log-specifications)
   * .)
   * - **RESOURCE_OVERLIMIT** (For details about the parameter configuration, see
   * [Resource Leak Event Overview](docroot://dfx/hiappevent-watcher-resourceleak-events.md#customizing-specifications).
   * )
   *
   * @param { string } name - Event name.
   * @param { Record<string, ParamType> } config - Custom parameter object. The parameter name and value are defined as
   *     follows:<br>- The parameter name contains a maximum of 1024 characters, which is of the string type and cannot
   *     be empty.<br>- The parameter value is of the ParamType and contains a maximum of 1024 characters.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function setEventConfig(name: string, config: Record<string, ParamType>): Promise<void>;

  /**
   * Defines parameters of an **AppEventPackage** object. This API is used to obtain detail information about an event
   * package, which is obtained using the [takeNext]{@link hiAppEvent.AppEventPackageHolder#takeNext()} API.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AppEventPackage {
    /**
     * Event package ID, which is named from **0** in ascending order.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    packageId: int;

    /**
     * Number of events in the event package.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    row: int;

    /**
     * Event size of the event package, in bytes.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    size: int;

    /**
     * Event data in the event package.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    data: string[];

    /**
     * Event object group.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 12]
     * @since 12 dynamic
     * @since 23 static
     */
    appEventInfos: Array<AppEventInfo>;
  }

  /**
   * Defines a subscription data holder for processing event information.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  class AppEventPackageHolder {
    /**
     * Constructs an **AppEventPackageHolder** instance. You can call [addWatcher]{@link hiAppEvent.addWatcher} to add
     * an event watcher, and then associate the **AppEventPackageHolder** instance with the watcher added in the
     * application based on the watcher name.
     *
     * @param { string } watcherName - Name of the event watcher added through [addWatcher]{@link hiAppEvent.addWatcher}
     *     . If no watcher is added, no data is displayed by default.
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    constructor(watcherName: string);

    /**
     * Sets the threshold for the data size of the event package obtained each time.
     *
     * @param { int } size - Data size threshold, in bytes. The value range is [0, 2^31-1]. If the value is out of the
     *     range, an exception is thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 11104001 - Invalid size value. Possible caused by the size value is less than or equal
     *     to zero.
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setSize(size: int): void;

    /**
     * Sets the number of data records of the event package obtained each time. When **setRow()** and **setSize()** are
     * called at the same time, only **setRow()** takes effect.
     *
     * @param { int } size - Number of events. The value range is (0, 2^31-1]. If the value is out of the range, an
     *     exception is thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 11104001 - Invalid size value. Possible caused by the size value is less than or equal
     *     to zero.
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 12]
     * @since 12 dynamic
     * @since 23 static
     */
    setRow(size: int): void;

    /**
     * Obtains the subscription event.
     *
     * The system obtains the subscription event data based on the data size threshold specified by **setSize** or the
     * number of data records specified by **setRow**. By default, one subscription event data record is obtained. When
     * all subscription event data is obtained, **null** is returned.
     *
     * When **setRow** and **setSize** are called at the same time, only **setRow** takes effect.
     *
     * @returns { AppEventPackage } Event package object. If all subscription event data has been retrieved, **null** is
     *     returned.
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    takeNext(): AppEventPackage;

    /**
     * Obtains the subscription event.
     * <br>The system obtains the subscription event data based on the data size threshold specified by setSize or the
     * number of data records specified by setRow. By default, one subscription event data record is obtained. When all
     * subscription event data is obtained, null is returned.
     * <br>When setRow and setSize are called at the same time, only setRow takes effect.
     *
     * @returns { AppEventPackage | null } Event package object. If all subscription event data has been retrieved,
     *      null is returned.
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    takeNext(): AppEventPackage | null;
  }

  /**
   * Defines the triggering condition parameters of the **onTrigger** callback of a [Watcher]{@link hiAppEvent.Watcher}.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface TriggerCondition {
    /**
     * Total number of events that trigger callback. The value is a positive integer. The default value is 0, indicating
     * that no callback is triggered. If this parameter is set to a negative value, the default value is used.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    row?: int;

    /**
     * Total size of events that trigger callback. The value is a positive integer, in bytes. The default value is 0,
     * indicating that no callback is triggered. If this parameter is set to a negative value, the default value is
     * used.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    size?: int;

    /**
     * Timeout interval for triggering callback. The value is a positive integer, in unit of 30s. The default value is 0
     * , indicating that no callback is triggered. If this parameter is set to a negative value, the default value is
     * used.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    timeOut?: int;
  }

  /**
   * Defines parameters of subscription filtering conditions of a [Watcher]{@link hiAppEvent.Watcher}. This API is used
   * to set event filtering conditions in the event watcher to ensure that only the events that meet the filtering
   * conditions are subscribed to.
   *
   * > **NOTE**
   * >
   * > The subscription specifications of system events vary according to application types. For details, see
   * > [HiAppEvent Constraints](docroot://dfx/hiappevent-intro.md#constraints).
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AppEventFilter {
    /**
     * Event domain, which can be the system event domain (**hiAppEvent.domain.OS**) or the event domain of the custom
     * event information ([AppEventInfo]{@link hiAppEvent.AppEventInfo}) passed through the
     * [Write]{@link hiAppEvent.write(info: AppEventInfo)} API.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * Event types. If this parameter is not set, events are not filtered by default.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    eventTypes?: EventType[];

    /**
     * Names of the events to be subscribed. If this parameter is not set, events are not filtered by default.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 11 dynamic
     * @since 23 static
     */
    names?: string[];
  }

  /**
   * Defines parameters of the event group returned by the subscription. This API can be used to obtain detail
   * information about an event group, which is often used in the **onReceive** callback of
   * [Watcher]{@link hiAppEvent.Watcher}.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AppEventGroup {
    /**
     * Event name.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Event object group.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 11 dynamic
     * @since 23 static
     */
    appEventInfos: Array<AppEventInfo>;
  }

  /**
   * Defines parameters for a **Watcher** object. This API is used to configure and manage event watchers to subscribe
   * to and process specified events.
   *
   * > **NOTE**
   * >
   * > You are not advised to [remove watchers]{@link hiAppEvent.removeWatcher} in the callback. Once a watcher is
   * > removed, the subscription callback of the watcher becomes invalid, and the callback may not be triggered when an
   * > event occurs.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Watcher {
    /**
     * Unique name of a watcher. The value contains a maximum of 32 characters, including digits (0 to 9), letters (a to
     * z)(A to Z), and underscore (_). It must start with a letter and end with a digit or letter. For example, **testName1**
     * and **crash_Watcher**.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Subscription callback triggering condition. This parameter takes effect only when it is passed together with
     * **onTrigger**. If this parameter is not set, the **onTrigger** callback is not triggered by default.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    triggerCondition?: TriggerCondition;

    /**
     * Subscription filtering condition. This parameter is passed only when subscription events need to be filtered. If
     * this parameter is not set, events are not filtered by default.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    appEventFilters?: AppEventFilter[];

    /**
     * Subscription callback. This parameter takes effect only when it is passed together with **triggerCondition**. The
     * input arguments are described as follows:
     *
     * **curRow**: total number of subscription events when the callback is triggered.
     *
     * **curSize**: total size of subscribed events when the callback is triggered, in bytes.
     *
     * **holder**: subscription data holder, which can be used to process subscribed events.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    onTrigger?: (curRow: int, curSize: int, holder: AppEventPackageHolder) => void;

    /**
     * Real-time subscription callback. Only this callback function is triggered if it is passed together with
     * **onTrigger**. The input arguments are described as follows:
     *
     * domain: domain name.
     *
     * appEventGroups: event group.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 11 dynamic
     * @since 23 static
     */
    onReceive?: (domain: string, appEventGroups: Array<AppEventGroup>) => void;
  }

  /**
   * Adds an event watcher. You can use the callback of the event watcher to subscribe to events.
   *
   * @param { Watcher } watcher - Event watcher.
   * @returns { AppEventPackageHolder } Subscription data holder. If the subscription fails, **null** is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11102001 - Invalid watcher name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11102002 - Invalid filtering event domain. Possible causes: 1. Contain invalid
   *     characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11102003 - Invalid row value. Possible caused by the row value is less than zero.
   * @throws { BusinessError } 11102004 - Invalid size value. Possible caused by the size value is less than zero.
   * @throws { BusinessError } 11102005 - Invalid timeout value. Possible caused by the timeout value is less than zero.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function addWatcher(watcher: Watcher): AppEventPackageHolder;

  /**
   * Removes an event watcher.
   *
   * @param { Watcher } watcher - Event watcher.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11102001 - Invalid watcher name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function removeWatcher(watcher: Watcher): void;

  /**
   * Clears local logging data of the application.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function clearData(): void;

  /**
   * Sets a user ID, which is used for association when a [Processor]{@link hiAppEvent.Processor} is configured.
   *
   * @param { string } name - Key of a user ID. The value is string that contains a maximum of 256 characters, including
   *     digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a digit.
   * @param { string } value - Value of a user ID. It can contain a maximum of 256 characters. If the value is **null**
   *     or left empty, the user ID is cleared.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 11 dynamic
   * @since 23 static
   */
  function setUserId(name: string, value: string): void;

  /**
   * Obtains the value set through **setUserId**.
   *
   * @param { string } name - Key of a user ID. The value is string that contains a maximum of 256 characters, including
   *     digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a digit.
   * @returns { string } Value of a user ID. If no user ID is found, an empty string is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 11 dynamic
   * @since 23 static
   */
  function getUserId(name: string): string;

  /**
   * Sets a user property, which is used for association when a [Processor]{@link hiAppEvent.Processor} is configured.
   *
   * @param { string } name - Key of a user property. The value is string that contains a maximum of 256 characters,
   *     including digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a
   *     digit.
   * @param { string } value - Value of a user property. It can contain a maximum of 1024 characters. If the value is
   *     **null** or left empty, the user property is cleared.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 11 dynamic
   * @since 23 static
   */
  function setUserProperty(name: string, value: string): void;

  /**
   * Obtains the value set through **setUserProperty**.
   *
   * @param { string } name - Key of a user property. The value is string that contains a maximum of 256 characters,
   *     including digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a
   *     digit.
   * @returns { string } Value of a user property. If no user ID is found, an empty string is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 11 dynamic
   * @since 23 static
   */
  function getUserProperty(name: string): string;

  /**
   * Defines the event configuration for the data processor to report.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface AppEventReportConfig {
    /**
     * Event domain. The value is a string that contains a maximum of 32 characters, including digits (0 to 9), letters
     * (a to z)(A to Z), and underscore (_). It must start with a letter and cannot end with an underscore (_). The default
     * value is an empty string.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    domain?: string;

    /**
     * Event name. The value is string that contains a maximum of 48 characters, including digits (0 to 9), letters (a
     * to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a
     * digit or letter. The default value is an empty string.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     * Whether to report events in real time. The value **true** indicates that events are reported in real time, and
     * the value **false** indicates the opposite. The default value is **false**.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isRealTime?: boolean;
  }

  /**
   * Defines a data processor for reporting and managing events. You can customize processor configurations as required.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface Processor {
    /**
     * Name of a data processor. The value is string that contains a maximum of 256 characters, including digits (0 to
     * 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a digit.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Whether to enable the debug mode. The default value is **false**. The value **true** means to enable the
     * debugging mode, and the value **false** means the opposite.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    debugMode?: boolean;

    /**
     * Server location information. It is left empty by default. The length of the input string cannot exceed 8 KB. If
     * the length exceeds 8 KB, the default value is used.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    routeInfo?: string;

    /**
     * Application ID. It is left empty by default. The length of the input string cannot exceed 8 KB. If the length
     * exceeds 8 KB, the default value is used.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    appId?: string;

    /**
     * Whether to report an event when the data processor starts. The default value is **false**. The value **true**
     * means to report events, and the value **false** means the opposite.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onStartReport?: boolean;

    /**
     * Whether to report an event when an application switches to the background. The default value is **false**. The
     * value **true** means to report events, and the value **false** means the opposite.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onBackgroundReport?: boolean;

    /**
     * Interval for event reporting, in seconds. The input value must be greater than or equal to **0**. If the input
     * value is less than **0**, the default value **0** is used and periodic reporting is not performed.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    periodReport?: int;

    /**
     * Event reporting threshold. When the number of events reaches the threshold, an event is reported. The value must
     * be greater than **0** and less than **1000**. If the value is not within the range, the default value **0** is
     * used and no events are reported.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    batchReport?: int;

    /**
     * Name array of user IDs that can be reported by the data processor. **name** corresponds to the **name** parameter
     * of the [setUserId]{@link hiAppEvent.setUserId} API. The default value is an empty array.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    userIds?: string[];

    /**
     * Name array of user properties that can be reported by the data processor. **name** corresponds to the **name**
     * parameter of the [setUserProperty]{@link hiAppEvent.setUserProperty} API. The default value is an empty array.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    userProperties?: string[];

    /**
     * Event description configuration array that can be reported by the data processor. The default value is an empty
     * array.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 11.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    eventConfigs?: AppEventReportConfig[];

    /**
     * Configuration ID for data processor. The input value must be greater than or equal to **0**. If the input value
     * is less than **0**, the default value 0 is used. If the input value is greater than 0, the value uniquely
     * identifies a data processor with its name.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    configId?: int;

    /**
     * Custom extended parameters. If the input parameter name and value do not meet the specifications, extended
     * parameters are not configured by default. The specifications are as follows:
     *
     * <br>- A parameter name is a string that contains a maximum of 32 characters, including digits (0 to 9), letters
     * (a to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and
     * end with a digit or letter.
     * <br>- A parameter value is a string contains a maximum of 1024 characters.
     * <br>- The number of parameters must be less than 32.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    customConfigs?: Record<string, string>;

    /**
     * Name of the data processor configuration, which can be loaded from the configuration file. By default, this
     * parameter is left empty. It can contain only letters, digits, underscores (_), and dollar signs ($). It cannot
     * start with a digit and cannot exceed 256 characters.
     *
     * **Atomic service API**: This parameter can be used in atomic services since API version 20.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    configName?: string;
  }

  /**
   * Adds the configuration information of the data processor, such as name of the data processor.
   *
   * This is a synchronous API and involves time-consuming operations. To ensure performance, you are advised to use the
   * asynchronous API [addProcessorFromConfig]{@link hiAppEvent.addProcessorFromConfig} or use a child thread.
   *
   * @param { Processor } processor - Data processor.
   * @returns { long } ID of the data processor of the reported event, which uniquely identifies the data processor and
   *     can be used to remove the data processor. If the operation fails, **-1** is returned. If the operation is
   *     successful, a value greater than **0** is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function addProcessor(processor: Processor): long;

  /**
   *
   * Adds the configuration information of the data processor. The configuration file contains information such as the
   * name of the event received by the data processor. This API uses a promise to return the result.
   *
   * @param { string } processorName - Name of a data processor. It can contain only letters, digits,
   *     underscores (_), and dollar signs ($). It cannot start with a digit and cannot exceed 256 characters.
   * @param { string } [configName] - Name of the data processor configuration. The corresponding
   *     configuration can be loaded from the configuration file. The default value is **SDK_OCG**. It can contain only
   *     letters, digits, underscores (_), and dollar signs ($). It cannot start with a digit and cannot exceed 256
   *     characters.
   * @returns { Promise<long> } Promise that returns the unique ID of the added event data processor, which can be used
   *     to remove the data processor. If the adding fails, error code **11105001** is returned.
   * @throws { BusinessError } 11105001 - Invalid parameter value. Possible causes: 1. Incorrect parameter length;
   *     2. Incorrect parameter format.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function addProcessorFromConfig(processorName: string, configName?: string): Promise<long>;

  /**
   * Removes the data processor of a reported event.
   *
   * @param { long } id - ID of a data processor. The value must be greater than **0**. The value is obtained by calling
   *     [addProcessor]{@link hiAppEvent.addProcessor} or
   *     [addProcessorFromConfig]{@link hiAppEvent.addProcessorFromConfig}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function removeProcessor(id: long): void;

  /**
   * Defines the configuration policy for the main thread jank event.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface MainThreadJankPolicy {
    /**
     * Type of logs to collect. Default value: **0**
     *
     * **logType = 0**: The default values of other parameters are used. When the main thread experiences two
     * consecutive timeouts between 150 ms and 450 ms, a call stack capture is triggered. When the timeout exceeds 450
     * ms, a trace capture is triggered.
     *
     * **logType=1**: Only the call stack is captured, and the threshold for triggering the detection is customized.
     *
     * **logType=2**: Only traces are captured.
     *
     * **NOTE**
     *
     * - When **logType** is set to **0**, you only need to set **autoStopSampling**. Default values are used for other
     * parameters.
     * - When **logType** is set to **2**, other parameters do not take effect and do not need to be set.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    logType?: int;

    /**
     * Mainthread jank event detection time ignored during application startup, in seconds. The default value is **10**,
     * and the minimum value is **3**.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    ignoreStartupTime?: int;

    /**
     * Interval for the main thread jank event detection and sampling, in milliseconds. The default value is **150**.
     * The value range is [50, 500].
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    sampleInterval?: int;

    /**
     * Number of samplings for the main thread jank event. Unit: times. The default value is **10**. The minimum
     *
     * value is 1. The maximum value is calculated using the following formula:
     *
     * **sampleCount** = (2500/**sampleInterval** - 4).
     *
     * **NOTE**
     *
     * - The value **2500** (ms) indicates the maximum time allowed for a main thread jank event to be reported after
     * being detected. Therefore, the value of **sampleCount** cannot be greater than the maximum value calculated based
     * on the formula.
     * - The value **4** indicates the number of check intervals, that is, the first check interval, the twice second
     * check intervals, and the interval for collecting and reporting stack information.
     * - You need to set the parameters as required.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    sampleCount?: int;

    /**
     * Number of sampling reporting times for the main thread jank event of the processes with the same PID of an
     * application. This can only be set once per lifecycle.
     *
     * The default value is **1**, Unit: times.
     *
     * The number of times that the sampling is reported per minute ranges from 1 to 3.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    reportTimesPerApp?: int;

    /**
     * Whether to automatically stop sampling the main thread stack when the main thread jank event ends.
     *
     * The value **true** means to stop sampling when the main thread jank event ends or the number of samplings reaches
     * the specified value.
     *
     * The value **false** means to stop sampling when the number of samplings reaches the specified value.
     *
     * The default value is **false**.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    autoStopSampling?: boolean;
  }

  /**
   * Defines the configuration policy for the high CPU usage event.
   *
   * > **NOTE**
   * >
   * > After this API is called, the setting is persisted. If this API is called again and the corresponding parameter
   * > is not set, the value used by the system last time is used.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CpuUsageHighPolicy {
    /**
     * High CPU usage threshold of the application foreground, in percentage. The value range is **[1, 100]**. The
     * default value is **30**. If the value is not within the threshold range, the default value **30** is used.
     *
     * **Note**: It is recommended that the value be less than **30**.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    foregroundLoadThreshold?: int;

    /**
     * High CPU usage threshold of the application background, in percentage. The value range is **[1, 100]**. The
     * default value is **10**. If the value is not within the threshold range, the default value **10** is used.
     *
     * **Note**: It is recommended that the value be less than **10**.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    backgroundLoadThreshold?: int;

    /**
     * High CPU usage threshold of the application thread, in percentage. The value range is **[15, 100]**. The default
     * value is **70**. If the value is not within the threshold range, the default value **70** is used.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    threadLoadThreshold?: int;

    /**
     * Number of log collection times per day. Once the system detects that the number of log collection times exceeds
     * the set value, the system still reports the event normally, but the **external_log** field in the exception event
     * is not attached with the log file path information.
     *
     * For debug-type applications, the threshold range is **[-1, 100]**.
     *
     * For release-type applications, the threshold range is **[0, 20]**.
     *
     * Unit: times. Default value: **1**.
     *
     * If the value is not within the threshold range, the default value **1** is used.
     *
     * **NOTE**
     *
     * 1. The value **-1** indicates that log collection times are not limited.
     *  2. The value **0** indicates that logs are not collected.
     *  3. A value greater than **0** indicates the maximum number of daily collection times.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    perfLogCaptureCount?: int;

    /**
     * Interval for detecting high CPU usage of application threads, in seconds. The value range is **[5, 3600]**. The
     * default value is **60**.
     *
     * If the value is not within the threshold range, the default value **60** is used.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    threadLoadInterval?: int;
  }

  /**
   * Defines the application crash event configuration policy.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AppCrashPolicy {
    /**
     * Whether to enable the page switching log for APP_CRASH event.
     *
     * **true**: yes.
     *
     * **false**: no.
     *
     * The default value is **false**.
     *
     * Note: The enabling behavior of an application takes effect only in its current lifecycle. In the same lifecycle,
     * the enabling status of the last successful call is used. After the application restarts, you need to set the
     * enabling status again.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;

    /**
     * The policy for APP_CRASH event
     * The value true means to print the memory values of the 248 bytes before and 256 bytes after
     * the PC and LR in the 64-bit system, or print the memory values of the 124 bytes before and 128 bytes
     * after the PC and LR in the 32-bit system.
     * The value false means to print the memory values of the 16 bytes before and 232 bytes after
     * the PC and LR in the 64-bit system, or print the memory values of the 8 bytes before and 116 bytes
     * after the PC and LR in the 32-bit system.
     * If not set the param, the default value is false.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    extendPcLrPrinting?: boolean;

    /**
     * The policy for APP_CRASH event
     * The value ranges from 0 to 5242880, in bytes. The crash log is truncated to the specified size
     * when this parameter is set. Otherwise, the default value 0 is used, which means no truncation.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    logFileCutoffSzBytes?: int;

    /**
     * The policy for APP_CRASH event
     * The value true means to print only the Virtual Memory Area (VMA) mapping information of the addresses
     * in the crash log, that is, Maps in the crash log, to reduce the log size.
     * The value false means to print all VMA mapping information.
     * Default value: false.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    simplifyVmaPrinting?: boolean;

    /**
     * Policy for the APP_CRASH event
     * the value true means to the minidump capture capability is enabled.
     * the value false means to the minidump capture function is disabled.
     * <br>Default value:false.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    collectMinidump?: boolean;
  }

  /**
   * Defines the application freeze event configuration policy.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AppFreezePolicy {
    /**
     * Whether to enable the page switching log for APP_FREEZE event.
     *
     * **true**: yes.
     *
     * **false**: no.
     *
     * The default value is **false**.
     *
     * Note: The enabling behavior of an application takes effect only in its current lifecycle. In the same lifecycle,
     * the enabling status of the last successful call is used. After the application restarts, you need to set the
     * enabling status again.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;
  }

  /**
   * Defines the resource leak event configuration policy.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface ResourceOverlimitPolicy {
    /**
     * Whether to enable the page switching log for RESOURCE_OVERLIMIT event.
     *
     * **true**: yes.
     *
     * **false**: no.
     *
     * The default value is **false**.
     *
     * Note: The enabling behavior of an application takes effect only in its current lifecycle. In the same lifecycle,
     * the enabling status of the last successful call is used. After the application restarts, you need to set the
     * enabling status again.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;

    /**
     * The policy for RESOURCE_OVERLIMIT event
     * event: No heap snapshot is transferred when an OOM error occurs.
     * event_rawheap: The system generates and transfers a heap snapshot when an OOM error occurs.
     * Note: Only the preceding two values are supported. If other values are passed in,
     * the API fails to be called and takes no effect.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    jsHeapLogtype?: string;

    /**
     * This parameter is used to control whether to output refined external log file names.
     * The default value is false.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    useRefinedLogFileName?: boolean;
  }

  /**
   * Defines the address sanitizer event configuration policy.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AddressSanitizerPolicy {
    /**
     * Whether to enable the page switching log for ADDRESS_SANITIZER event.
     *
     * **true**: yes.
     *
     * **false**: no.
     *
     * The default value is **false**.
     *
     * Note: The enabling behavior of an application takes effect only in its current lifecycle. In the same lifecycle,
     * the enabling status of the last successful call is used. After the application restarts, you need to set the
     * enabling status again.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;
  }

  /**
   * Defines the system event configuration policy, which is set by calling
   * [configEventPolicy]{@link hiAppEvent.configEventPolicy}.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface EventPolicy {
    /**
     * Configuration policy for MAIN_THREAD_JANK event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    mainThreadJankPolicy?: MainThreadJankPolicy;

    /**
     * Configuration policy for CPU_USAGE_HIGH event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cpuUsageHighPolicy?: CpuUsageHighPolicy;

    /**
     * APP_CRASH event configuration policy.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    appCrashPolicy?: AppCrashPolicy;

    /**
     * APP_FREEZE event configuration policy.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    appFreezePolicy?: AppFreezePolicy;

    /**
     * RESOURCE_OVERLIMIT event configuration policy.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    resourceOverlimitPolicy?: ResourceOverlimitPolicy;

    /**
     * ADDRESS_SANITIZER event configuration policy.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    addressSanitizerPolicy?: AddressSanitizerPolicy;
  }

  /**
   * Sets a system event configuration policy. This API uses a promise to return the result.
   *
   * In the same lifecycle, you can set system event configuration by policy.
   *
   * @param { EventPolicy } policy - System event configuration policy.
   * @returns { Promise<void> } Promise that returns no value.
   *     <br>For details about the event configuration policy, see [EventPolicy]{@link hiAppEvent.EventPolicy}. If the
   *     configuration policy is incorrect, the API returns a failure message.
   *     <br>- If the parameter type is incorrect, error code 401 is returned.
   *     <br>- If the parameter specifications are incorrect, the error information is output in HiLog logs.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function configEventPolicy(policy: EventPolicy): Promise<void>;
}

export default hiAppEvent;