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
 * ??????????????????????????????????洢???????????????????????????????HiAppEvent????????й????д??????????????????[AppEventInfo]{@link hiAppEvent.AppEventInfo}
 * ?У????????????????????????????
 * 
 * ???????????????????????????????????????????е????????????params??????????????????????壬??????κ???????????????????У?????
 * [???????????](docroot://dfx/hiappevent-watcher-crash-events.md)??
 * 
 * ????????????????????????????????????????????????????????????[Write]{@link hiAppEvent.write(info: AppEventInfo)}?????????????趨????????κ????????????????????
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
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const USER_LOGIN: string;

    /**
     * User logout event. This is a reserved application event name constant.
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
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SERVICE_START: string;

    /**
     * Application crash event. This is a system event name constant.
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
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    const APP_FREEZE: string;

    /**
     * Event indicating the application launch duration. This is a system event name constant.
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
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const SCROLL_JANK: string;

    /**
     * Event indicating a high CPU usage. This is a system event name constant.
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
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const BATTERY_USAGE: string;

    /**
     * Event indicating an application resource leakage. This is a system event name constant.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const RESOURCE_OVERLIMIT: string;

    /**
     * Address sanitizer event. This is a system event name constant.
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
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const MAIN_THREAD_JANK: string;

    /**
     * App killed event. This is a system event name constant.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    const APP_KILLED: string;

    /**
     * App task execution timeout event. This is a system event name constant.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    const APP_HICOLLIE: string;

    /**
     * Audio jank frame. This is a system event name constant.
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
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 23 dynamic&static
     */
    const SCROLL_ARKWEB_FLING_JANK: string;

    /**
     * ???????澯???????????????????
     * 
     * 26.0.0
     * 
     * **????????** ?????????Stage???????á?
     * 
     * **????????API??** ??API?汾26.0.0??????????????????????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    const appFreezeWarning: string;
  }

  /**
   * 参数
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  namespace param {
    /**
     * 用户ID
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const USER_ID: string;

    /**
     * 分布式服务名
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SERVICE_NAME: string;

    /**
     * 分布式服务实例
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SERVICE_INSTANCE_ID: string;
  }

  /**
   * ????????????÷????????????????????洢????С??
   *
   * @param { ConfigOption } config - ??????????????????
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
     * Whether to enable the event logging function. The default value is false.
     * <br>If this parameter is set to true, the logging function is disabled. Otherwise, the logging function is
     * enabled.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    disable?: boolean;

    /**
     * Quota for the directory that stores event logging files. The default value is 10M.
     * <br>It is recommended that the quota be less than or equal to 10 MB. Otherwise, the API efficiency may be
     * affected. If the directory size exceeds the specified quota when application event logging is performed, event
     * logging files in the directory will be cleared one by one based on the generation time to ensure that directory
     * size does not exceed the quota.
     * <br>The quota value must meet the following requirements:
     * <br>- The quota value consists of only digits and a unit (which can be one of [b|k|kb|m|mb|g|gb|t|tb], which are
     * case insensitive.)
     * <br>- The quota value must start with a digit. You can determine whether to pass the unit. If the unit is left
     * empty, b (that is, byte) is used by default.
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
     * Event domain. The value is a string of up to 32 characters, including digits (0 to 9), letters (a to z), and
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
     * Event name. The value is string that contains a maximum of 48 characters, including digits (0 to 9), letters
     * (a to z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a
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
     * ???????????????????????????????????????
     * **???????params??????????????????????壬??????κ?????????????????????У?????[???????????](docroot://dfx/hiappevent-watcher-crash-events.md)??** ??
     * ??????????[Write]{@link hiAppEvent.write(info: AppEventInfo)}???д???????????????壬?????????
     * 
     * - ???????string???????????????????????`$`??????м??????????????????????????????????????β??????????????????????????????????????32?????????testName??$123_name???
     * - ????????string??number??boolean???????????string???????????????8*1024?????????????????????????????????????number?????????????
     * Number.MIN_SAFE_INTEGER~Number.MAX_SAFE_INTEGER??Χ???????????????????????????????????е?????????????string??number??boolean?е?????????????????1
     * 00?????????????????101???????????????
     * - ????????????32??????????????????????????????
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    params: object;

    /**
     * ?????????????????????????????????????????????? 
     * params??????????????????????壬??????κ?????????????????????У?
     * ???磬?????????????????docroot://dfx/hiappevent-watcher-crash-events.md??????????? 
     * ?????[Write]{@link hiAppEvent.write(info: AppEventInfo)}???д???????????????塣
     * ?????????
     * 
     * - ???????string???????????????????????$?????
     * ?м??????????????????????????????????????β????? 
     * ?????????????????????????????????32?????????testName??$123_name???
     * - ????????string??number??boolean???????????string???????????????8*1024
     * ?????????????????????????????????????number???? 
     * ??????????Number.MIN_SAFE_INTEGER~Number.MAX_SAFE_INTEGER??Χ??? 
     * ????????????????????????????????е?????????????string?? 
     * number??boolean?е?????????????????100?????????????
     * ?????101???????????????
     * - ????????????32????????????????????????????

     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    params: RecordData;
  }

  /**
   * ???????????????AppEventInfo???????????д洢?????Promise????????????????????д??????????????????????????????????????????????????????????д?????????
   * [Event]{@link hiAppEvent.event}?ж????????????????????????д????????????????????????[addWatcher]{@link hiAppEvent.addWatcher}?????д?????
   *
   * @param { AppEventInfo } Application event object. You are advised to avoid the conflict between the custom event
   *     name and the system event name constant defined in Event. [since 9 - 10]
   * @param { AppEventInfo } info - ?????????????е????????????????
   *     [Event]{@link hiAppEvent.event}?ж????????????????????????? [since 11]
   * @returns { Promise<void> } Promise?????????????
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
   * ???????????????AppEventInfo???????????д洢?????callback????????????????????д??????????????????????????????????????????????????????????д?????????
   * [Event]{@link hiAppEvent.event}?ж????????????????????????д????????????????????????[addWatcher]{@link hiAppEvent.addWatcher}?????ж????
   *
   * @param { AppEventInfo } info - ???????????????????????????????????[Event]{@link hiAppEvent.event}?ж?????????????????????????
   * @param { AsyncCallback<void> } callback - ???????????
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
   * ???????????????????
   *
   * @unionmember { int } ????????????????
   * @unionmember { long } ??????????????????
   * @unionmember { double } ??????????????????
   * @unionmember { string } ????????????????
   * @unionmember { boolean } ????????????????
   * @unionmember { Array<string> } ??????????????????????顣
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 12]
   * @since 12 dynamic
   * @since 23 static
   */
  type ParamType = int | long | double | string | boolean | Array<string>;

  /**
   * Sets custom event parameters. This API uses a promise to return the result. During the same lifecycle, system
   * events and application events can be associated through event domain and event name. System events only support
   * crash and freeze events.
   *
   * @param { Record<string, ParamType> } params - Custom parameter object. The parameter name and value are defined as
   * follows:
   * <br>- A parameter name is a string that contains a maximum of 32 characters, including digits (0 to 9), letters
   * (a to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a digit
   * or letter.
   * <br>- The parameter value is of the ParamType and contains a maximum of 1024 characters.
   * <br>- The number of parameters must be less than 64.
   * @param { string } domain - Event domain. The event domain can be associated with application events and system
   * events (hiAppEvent.domain.OS).
   * @param { string } name - Event name. The default value is an empty string, which indicates all event names in the
   * associated event domain. The event name can be associated with application events and system events. System events
   * can be associated only with crash events (hiAppEvent.event.APP_CRASH) and freeze events
   * (hiAppEvent.event.APP_FREEZE).
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
   * 设置系统事件配置
   *
   * @param { string } name - name name name 系统事件名
   * @param { Record<string, ParamType> } config - name name name 系统事件名
   * @returns { Promise<void> } 返回值
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function setEventConfig(name: string, config: Record<string, ParamType>): Promise<void>;

  /**
   * ???????????????????????塣??????????????????????????????[takeNext]{@link hiAppEvent.AppEventPackageHolder#takeNext()}????á?
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AppEventPackage {
    /**
     * Event package ID, which is named from 0 in ascending order.
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
     * Constructs an AppEventPackageHolder instance. You can call addWatcher to add an event watcher, and then
     * associate the AppEventPackageHolder instance with the watcher added in the application based on the watcher name.
     *
     * @param { string } watcherName - Name of the event watcher added through addWatcher. If no watcher is added, no
     * data is displayed by default.
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
     * @param { int } size - Data size threshold, in bytes. The value range is [0, $2^{31}$-1]. If the value is out of
     *     the range, an exception is thrown.
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
     * Sets the number of data records of the event package obtained each time. When setRow() and setSize() are called
     * at the same time, only setRow() takes effect.
     *
     * @param { int } size - Number of events. The value range is (0, $2^{31}$-1]. If the value is out of the range, an
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
     * <br>The system obtains the subscription event data based on the data size threshold specified by setSize or the
     * number of data records specified by setRow. By default, one subscription event data record is obtained. When all
     * subscription event data is obtained, null is returned.
     * <br>When setRow and setSize are called at the same time, only setRow takes effect.
     *
     * @returns { AppEventPackage } Event package object. If all subscription event data has been retrieved, null is
     * returned.
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
   * Defines the triggering condition parameters of the onTrigger callback of a Watcher.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface TriggerCondition {
    /**
     * Total number of events that trigger callback. The value is a positive integer. The default value is 0,
     * indicating that no callback is triggered. If this parameter is set to a negative value, the default
     * value is used.
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
     * Timeout interval for triggering callback. The value is a positive integer, in unit of 30s. The default value is
     * 0, indicating that no callback is triggered. If this parameter is set to a negative value, the default value is
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
   * Defines parameters of subscription filtering conditions of a Watcher. This API is used to set event filtering
   * conditions in the event watcher to ensure that only the events that meet the filtering conditions are subscribed
   * to.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AppEventFilter {
    /**
     * Event domain, which can be the system event domain (hiAppEvent.domain.OS) or the event domain of the custom
     * event information (AppEventInfo) passed through the Write API.
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
   * ??????????????????????塣??????????????????????????鳣??[Watcher]{@link hiAppEvent.Watcher}??onReceive???????á?
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
   * Defines parameters for a Watcher object. This API is used to configure and manage event watchers to subscribe to
   * and process specified events.
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Watcher {
    /**
     * Unique name of a watcher. The value contains a maximum of 32 characters, including digits (0 to 9), letters
     * (a to z), underscore (_). It must start with a letter and end with a digit or letter. For example, testName1
     * and crash_Watcher.
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
     * onTrigger. If this parameter is not set, the onTrigger callback is not triggered by default.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    triggerCondition?: TriggerCondition;

    /**
     * Subscription filtering condition. This parameter is passed only when subscription events need to be filtered.
     * If this parameter is not set, events are not filtered by default.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    appEventFilters?: AppEventFilter[];

    /**
     * Subscription callback. This parameter takes effect only when it is passed together with triggerCondition.
     * The input arguments are described as follows:
     * <br>curRow: total number of subscription events when the callback is triggered.
     * <br>curSize: total size of subscribed events when the callback is triggered, in bytes.
     * <br>holder: subscription data holder, which can be used to process subscribed events.
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
     * onTrigger. The input arguments are described as follows:
     * <br>domain: domain name.
     * <br>appEventGroups: event group.
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
   * @returns { AppEventPackageHolder } Subscription data holder. If the subscription fails, null is returned.
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
   * ???????????????????????????????洢????????????????????
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function clearData(): void;

  /**
   * Sets a user ID, which is used for association when a Processor is configured.
   *
   * @param { string } name - Key of a user ID. The value is string that contains a maximum of 256 characters, including
   * digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a digit.
   * @param { string } value - Value of a user ID. It can contain a maximum of 256 characters. If the value is null or
   * left empty, the user ID is cleared.
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
   * ??????setUserId????????value???
   *
   * @param { string } name - ???ID??key??????????Сд???????????????? $?????????????????????????????256???????
   * @returns { string } ???ID???????в鵽????????????
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
   * Sets a user property, which is used for association when a Processor is configured.
   *
   * @param { string } name - Key of a user property. The value is string that contains a maximum of 256 characters,
   * including digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a digit.
   * @param { string } value - Value of a user property. It can contain a maximum of 1024 characters. If the value is
   * null or left empty, the user property is cleared.
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
   * ??????setUserProperty????????value???
   *
   * @param { string } name - ????????key??????????Сд???????????????? $?????????????????????????????256???????
   * @returns { string } ?????????????в鵽????????????
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
   * Event description configuration that can be reported by the data processor
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface AppEventReportConfig {
    /**
     * Event domain. The value is a string that contains a maximum of 32 characters, including digits (0 to 9), letters
     * (a to z), and underscore (_). It must start with a letter and cannot end with an underscore (_). The default
     * value is an empty string.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    domain?: string;

    /**
     * Event name. The value is string that contains a maximum of 48 characters, including digits (0 to 9), letters
     * (a to z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a
     * digit or letter. The default value is an empty string.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     * Whether to report events in real time. The value true indicates that events are reported in real time, and the
     * value false indicates the opposite. The default value is false.
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
     * 9), letters (a to z), underscore (_), and dollar sign ($). It must not start with a digit.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Whether to enable the debug mode. The default value is false. The value true means to enable the debugging mode,
     * and the value false means the opposite.
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
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    appId?: string;

    /**
     * Whether to report an event when the data processor starts. The default value is false. The value true means to
     * report events, and the value false means the opposite.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onStartReport?: boolean;

    /**
     * Whether to report an event when an application switches to the background. The default value is false. The value
     * true means to report events, and the value false means the opposite.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onBackgroundReport?: boolean;

    /**
     * Interval for event reporting, in seconds. The input value must be greater than or equal to 0. If the input value
     * is less than 0, the default value 0 is used and periodic reporting is not performed.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    periodReport?: int;

    /**
     * Event reporting threshold. When the number of events reaches the threshold, an event is reported. The value must
     * be greater than 0 and less than 1000. If the value is not within the range, the default value 0 is used and no
     * events are reported.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    batchReport?: int;

    /**
     * ????????????????????ID??name???顣name???[setUserId]{@link hiAppEvent.setUserId}????name???????????????顣
     * 
     * **????????API??** ??API version 11??????ò????????????????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    userIds?: string[];

    /**
     * ?????????????????????????name???顣name???[setUserProperty]{@link hiAppEvent.setUserProperty}????name???????????????顣
     * 
     * **????????API??** ??API version 11??????ò????????????????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    userProperties?: string[];

    /**
     * ???????????????????????????????顣?????????顣
     * 
     * **????????API??** ??API version 11??????ò????????????????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    eventConfigs?: AppEventReportConfig[];

    /**
     * Configuration ID for data processor. The input value must be greater than or equal to 0. If the input value is
     * less than 0, the default value 0 is used. If the input value is greater than 0, the value uniquely identifies a
     * data processor with its name.
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
     * <br>- A parameter name is a string that contains a maximum of 32 characters, including digits (0 to 9), letters
     * (a to z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a
     * digit or letter.
     * <br>- A parameter value is a string contains a maximum of 1024 characters.
     * <br>- The number of parameters must be less than 32.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    customConfigs?: Record<string, string>;

    /**
     * Initialize the processor by reading the configuration file based on the name.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    configName?: string;
  }

  /**
   * Adds a data processor to migrate event data to the cloud. You can preset the implementation of the processor on
   * the device and set its properties based on its constraints.
   * <br>The configuration information of Processor must be provided by the data processor. Yet, as no data processor
   * is preset in the device for interaction for the moment, migrating events to the cloud is unavailable.
   *
   * @param { Processor } processor - Data processor.
   * @returns { long } ID of the data processor of the reported event, which uniquely identifies the data processor
   *     and can be used to remove the data processor. If the operation fails, -1 is returned. If the operation is
   *     successful, a value greater than 0 is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function addProcessor(processor: Processor): long;

  /**
   * 新增数据处理者
   *
   * @param { string } processorName - The name of the processor.
   * @param { string } [configName] - Initialize the processor by reading the configuration file based on the name.
   * @returns { Promise<long> } The processor unique ID.
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
   * @param { long } id - ID of a data processor. The value must be greater than 0. The value is obtained by calling
   *     addProcessor.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function removeProcessor(id: long): void;

  /**
   * ???????????????ò??????塣
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface MainThreadJankPolicy {
    /**
     * ???????????????????0??
     * 
     * logType=0?????????????????????????????γ??150ms~450ms???????????????????450ms?????trace??
     * 
     * logType=1??????????????????????????????????塣
     * 
     * logType=2???????trace??
     * 
     * **???**??
     * 
     * - logType=0???????????autoStopSampling??????????????????????????????á?
     * - logType=2?????????????????Ч?????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    logType?: int;

    /**
     * The policy for MAIN_THREAD_JANK event
     * Ignore main thread timeout detection during startup.Unit: seconds (s), Minimum value: 3, Default
     * value: 10.Timeout detection is not performed for a certain period after thread startup.Some processes
     * have longer startup times, and capturing full timeout sampling stacks during this period holds little
     * analytical value.Therefore, timeout detection is disabled within the startup time interval
     * defined by the developer.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    ignoreStartupTime?: int;

    /**
     * The policy for MAIN_THREAD_JANK event
     * The timeout detection interval and sampling interval for the main thread.
     * The unit is milliseconds (ms), and the value range is [50, 500]. The Default Value is 150 (ms).
     * The system performs timeout detection judgments based on the interval set by the developer and
     *     uses this interval as the period for periodic task detection.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    sampleInterval?: int;

    /**
     * ???????????????????λ???Σ???????10????С???1??
     * 
     * ????????????????sampleInterval???ж?????????????sampleCount <= (2500 / sampleInterval - 4)??
     * 
     * **???**??
     * 
     * - 2500????壺???????涨???????????????????????????????2.5s??????2500ms???????sampleCount????????????????????????ó?????????
     * - 4????壺????γ??????????? + ????γ?????????????????η??????????????????? + ???????????????????
     * - ????????????????????к????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    sampleCount?: int;

    /**
     * The policy for MAIN_THREAD_JANK event
     * Number of main thread timeout sampling reports per application PID within a single lifecycle.
     *     This can only be set once per lifecycle.Default value: 1 time(s), Unit: time(s). The max
     *     value is 180. Exceed max value will be set to max value.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    reportTimesPerApp?: int;

    /**
     * The policy for MAIN_THREAD_JANK event
     * Stop sampling main thread stack when main thread blockage is resolved. Default value is false.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    autoStopSampling?: boolean;
  }

  /**
   * ??CPU???????????ò??????塣
   * 
   * > **???**
   * >
   * > ????????ú???????????????????????????????????????????????????????????????
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CpuUsageHighPolicy {
    /**
     * The policy for CPU_USAGE_HIGH event
     * The param is used for user to set the threshould for foreground progress cpu load anomaly,
     * The value rang is [1, 100], Strongly recommend less than 30
     * If not set the param, the default value is 30.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    foregroundLoadThreshold?: int;

    /**
     * The policy for CPU_USAGE_HIGH event
     * The param is used for user to set the threshould for background progress cpu load anomaly,
     * The value rang is [1, 100] Strongly recommend less than 10.
     * If not set the param, the default value is 10.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    backgroundLoadThreshold?: int;

    /**
     * The policy for CPU_USAGE_HIGH event
     * The param is used for user to set the threshould for thread cpu load anomaly,
     * The value rang is [15, 100]
     * If not set the param, the default value is 70.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    threadLoadThreshold?: int;

    /**
     * ????????????????????????????????????????????????????????????????????????????е?external_log??Σ????????????????·???????
     * 
     * Debug?汾?????????Χ??[-1, 100]??
     * 
     * Release?汾?????????Χ??[0, 20]??
     * 
     * ??λ???Σ???????1??
     * 
     * ??????????????Χ?????????????1??
     * 
     * **???**??
     * 
     * 1. ??-1??????????????????????
     *  2. ??0???????????????
     *  3. ?????0???????????????????
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    perfLogCaptureCount?: int;

    /**
     * The policy for CPU_USAGE_HIGH event
     * The Interval of cpu thread anomaly, The unit is second. If not set, default is 60s;
     * The value rang is [5, 3600] Strongly recommend multiples of 5.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    threadLoadInterval?: int;
  }

  /**
   * ????????????ò??????塣
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AppCrashPolicy {
    /**
     * 使能页面跟踪日志，默认值为false
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;

    /**
     * ?????????????????pc??lr???????????????
     * 
     * true??64λ?????pc??lr???????????248???????256????Χ????????32λ?????pc??lr???????????124???????128????Χ????????
     * 
     * false??64λ?????pc??lr???????????16???????232????Χ????????32λ?????pc??lr???????????8???????116????Χ????????
     * 
     * ??????false??
     * 
     * 26.0.0
     * 
     * **????????API??** ??API?汾26.0.0??????????????????????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    extendPcLrPrinting?: boolean;

    /**
     * ??????????????С????λ?byte??????Χ?[0, 5242880]???????0??????????????????
     * 
     * 26.0.0
     * 
     * **????????API??** ??API?汾26.0.0??????????????????????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    logFileCutoffSzBytes?: int;

    /**
     * ???????????????????VMA??Virtual Memory Area????????????????????????????????Maps??
     * 
     * true??????????????г????????????VMA???????????С?????С??
     * 
     * false?????????VMA????????
     * 
     * ??????false??
     * 
     * 26.0.0
     * 
     * **????????API??** ??API?汾26.0.0??????????????????????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    simplifyVmaPrinting?: boolean;

    /**
     * APP_CRASH事件策略
     * true表示启用minidump转储捕获功能。
     * false表示关闭minidump捕获功能。
     * <br>默认值:false。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    collectMinidump?: boolean;
  }

  /**
   * ??????????????ò??????塣
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AppFreezePolicy {
    /**
     * 使能页面跟踪日志，默认值为false
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;
  }

  /**
   * ?????й???????ò??????塣
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface ResourceOverlimitPolicy {
    /**
     * 使能页面跟踪日志，默认值为false
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;

    /**
     * ?????????????
     * 
     * "event"????÷???oom??????????????
     * 
     * "event_rawheap"????÷???oom???????????????????
     * 
     * **???**??
     * 
     * - ???????????????????????????????????????????????????????κ?Ч????
     * - ??????"event_rawheap"????????????????????????????????????????????????????????????????????????
     * - ??????????????????????????????Ч????????????????????????γ???????????????????????????????????????????
     * 
     * 26.0.0
     * 
     * **????????API??** ??API?汾26.0.0??????????????????????????á?
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    jsHeapLogtype?: string;

    /**
     * 该参数用于控制是否输出精细化的external log日志文件名。
     * 默认值为false。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    useRefinedLogFileName?: boolean;
  }

  /**
   * ??????????????ò??????塣
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AddressSanitizerPolicy {
    /**
     * 使能页面跟踪日志，默认值为false
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;
  }

  /**
   * ??????????ò??????壬???????[configEventPolicy]{@link hiAppEvent.configEventPolicy}??????????ò????
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface EventPolicy {
    /**
     * The policy for MAIN_THREAD_JANK event
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    mainThreadJankPolicy?: MainThreadJankPolicy;

    /**
     * The policy for CPU_USAGE_HIGH event
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cpuUsageHighPolicy?: CpuUsageHighPolicy;

    /**
     * APP_CRASH事件的策略
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    appCrashPolicy?: AppCrashPolicy;

    /**
     * APP_FREEZE事件的策略
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    appFreezePolicy?: AppFreezePolicy;

    /**
     * RESOURCE_OVERLIMIT事件的策略
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    resourceOverlimitPolicy?: ResourceOverlimitPolicy;

    /**
     * ADDRESS_SANITIZER事件的策略
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    addressSanitizerPolicy?: AddressSanitizerPolicy;
  }

  /**
   * Configure target event process policy
   *
   * @param { EventPolicy } policy - The policy object.
   * @returns { Promise<void> } Promise used to return the result.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function configEventPolicy(policy: EventPolicy): Promise<void>;

  /**
   * 定义external log日志管理器，用于external log日志管理。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  class ExternalLogManager {
    /**
     * 当达到external log日志目录容量时调用此函数
     *
     * @param { ExternalLogContainer } container - 包含所有外部日志文件的容器
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onCapacityReached(container: ExternalLogContainer): void;
  }

  /**
   * 包含所有external log日志文件的容器。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  class ExternalLogContainer {
    /**
     * 获取所有ExternalLogWrappers的集合
     *
     * @returns { Set<ExternalLogWrapper> } The set of all ExternalLogWrappers
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getAllLogs(): Set<ExternalLogWrapper>;

    /**
     * 获取所有external log日志文件路径的集合
     *
     * @returns { Set<string> } The set of all external log file paths
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getAllLogFiles(): Set<string>;

    /**
     * 获取给定系统事件的所有external log日志文件路径的集合
     *
     * @param { string } event - 给定系统事件的字符串
     * @returns { Set<string> } 给定系统事件的所有external log日志文件路径的集合
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getLogFilesOfSysEvent(event: string): Set<string>;

    /**
     * 获取指定时间之后的所有external log日志文件路径的集合
     *
     * @param { long } timePoint - 给定文件大小的生成时间点(ms)
     * @returns { Set<string> } 所有在给定时间之后的external log日志文件路径的集合
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getLogFilesGeneratedAfter(timePoint: long): Set<string>;

    /**
     * 获取指定时间之前的所有external log日志文件路径的集合
     *
     * @param { long } timePoint - 给定文件大小的生成时间点(ms)
     * @returns { Set<string> } 指定时间之前的所有external log日志文件路径的集合
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getLogFilesGeneratedBefore(timePoint: long): Set<string>;

    /**
     * 获取大小大于给定数量的所有external log日志文件路径的集合
     *
     * @param { long } sizeKb - 给定的文件大小
     * @returns { Set<string> } 大小大于给定数量的所有external log日志文件路径的集合
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getLogFilesLargerThan(sizeKb: long): Set<string>;

    /**
     * 获取大小小于给定数量的所有external log日志文件路径的集合
     *
     * @param { long } sizeKb - 给定的文件大小
     * @returns { Set<string> } 大小小于给定数量的所有external log日志文件路径的集合
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getLogFilesSmallerThan(sizeKb: long): Set<string>;

    /**
     * 获取所有external log日志文件的数量
     *
     * @returns { int } The number of all external log files
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getLogNumber(): int;

    /**
     * 获取给定数字的第一个生成的external log日志文件路径
     *
     * @param { int } num - 给定查询文件数
     * @returns { Set<string> } 限定的external log日志文件路径集
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getFirstGeneratedLogFiles(num: int): Set<string>;
  }

  /**
   * external log日志的包装器，提供各种信息。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  class ExternalLogWrapper {
    /**
     * 获取文件路径
     *
     * @returns { string } The file path
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getFilePath(): string;

    /**
     * 获取文件的生成时间点（毫秒）
     *
     * @returns { long } The generation time
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getGenerationTime(): long;

    /**
     * 获取文件大小(kb)
     *
     * @returns { long } The file size in kb
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getSizeInKb(): long;

    /**
     * 获取文件的系统事件
     *
     * @returns { string } The string form of system event
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getSysEvent(): string;
  }

  /**
   * 注册external log日志管理器
   *
   * @param { ExternalLogManager } logMngr - 外部日志管理器。
   * @throws { BusinessError } 11106001 - State error. Possible causes: 1. Log manager already registered;
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function registerExternalLogManager(logMngr: ExternalLogManager): void;

  /**
   * 查询external log日志管理器是否已注册
   *
   * @returns { boolean } true if already registered, false otherwise.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isExternalLogManagerRegistered(): boolean;
}

export default hiAppEvent;