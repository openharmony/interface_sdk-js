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
 * @file 应用事件打点
 * @kit PerformanceAnalysisKit
 */

import type { AsyncCallback } from './@ohos.base';
/*** if arkts static */
import type { RecordData } from './@ohos.base'
/*** endif */

/**
 * 本模块提供应用打点和事件订阅能力，包括事件存储、事件订阅、事件清理、打点配置等功能。HiAppEvent将应用运行过程中触发的事件信息统一归纳到[AppEventInfo]{@link hiAppEvent.AppEventInfo}
 * 中，并将事件分为系统事件和应用事件两类。
 * 
 * 系统事件来源于系统服务，是系统预先定义的事件，这类事件信息中的事件参数对象params包含的字段已由各系统事件定义，具体字段含义在各系统事件指南的介绍中，例如
 * [崩溃事件介绍](docroot://dfx/hiappevent-watcher-crash-events.md)。
 * 
 * 应用事件来源于应用，是应用开发者自己定义的事件，这类事件信息支持自定义后通过[Write]{@link hiAppEvent.write(info: AppEventInfo)}打点接口进行配置设定，具体字段含义可结合开发者需求展开。
 *
 * @syscap SystemCapability.HiviewDFX.HiAppEvent
 * @crossplatform [since 19]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace hiAppEvent {
  /**
   * 事件类型枚举。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum EventType {
    /**
     * 故障事件。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FAULT = 1,

    /**
     * 统计事件。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    STATISTIC = 2,

    /**
     * 安全事件。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SECURITY = 3,

    /**
     * 行为事件。
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
   * 提供域名常量。
   * 
   * |名称|类型|只读|描述|
   * | ---  | ------ | ------ | ---------- |
   * | OS   | string |是|系统域|
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  namespace domain {
    /**
     * 系统领域。
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
   * 提供事件名称常量，包括系统事件名称常量和应用事件名称常量。
   * <br>应用事件名称常量是为开发者在调用Write接口进行应用事件打点时预留的可选自定义事件名称。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  namespace event {
    /**
     * 用户登录事件。预留的应用事件名称常量。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const USER_LOGIN: string;

    /**
     * 用户登出事件。预留的应用事件名称常量。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const USER_LOGOUT: string;

    /**
     * 分布式服务启动事件。预留的应用事件名称常量。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SERVICE_START: string;

    /**
     * 应用崩溃事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    const APP_CRASH: string;

    /**
     * 应用冻屏事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    const APP_FREEZE: string;

    /**
     * 应用启动耗时事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 12开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const APP_LAUNCH: string;

    /**
     * 应用滑动丢帧事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 12开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const SCROLL_JANK: string;

    /**
     * 应用CPU高负载事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 12开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const CPU_USAGE_HIGH: string;

    /**
     * 应用24h功耗器件分解统计事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 12开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const BATTERY_USAGE: string;

    /**
     * 应用资源泄漏事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 12开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const RESOURCE_OVERLIMIT: string;

    /**
     * 应用地址越界事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 12开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const ADDRESS_SANITIZER: string;

    /**
     * 应用主线程超时事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 12开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    const MAIN_THREAD_JANK: string;

    /**
     * 应用终止事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 20开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    const APP_KILLED: string;

    /**
     * 应用任务执行超时事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 21开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    const APP_HICOLLIE: string;

    /**
     * 应用音频卡顿事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 21开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    const AUDIO_JANK_FRAME: string;

    /**
     * ArkWeb抛滑丢帧事件。系统事件名称常量。
     * 
     * **原子化服务API：** 从API version 23开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 23 dynamic&static
     */
    const SCROLL_ARKWEB_FLING_JANK: string;

    /**
     * 应用冻屏告警事件。系统事件名称常量。
     * 
     * 26.0.0
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     * 
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    const appFreezeWarning: string;
  }

  /**
   * 提供参数名常量。
   *
   * |名称|类型|只读|描述|
   * | ------------------------------- | ------ | ------ | ------------------ |
   * | USER_ID                         | string |是|自定义用户ID|
   * | DISTRIBUTED_SERVICE_NAME        | string |是|分布式服务名称|
   * | DISTRIBUTED_SERVICE_INSTANCE_ID | string |是|分布式服务实例ID|
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  namespace param {
    /**
     * 用户自定义ID。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const USER_ID: string;

    /**
     * 分布式服务名称。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SERVICE_NAME: string;

    /**
     * 分布式服务实例ID。
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
   * 应用事件打点配置方法，支持配置打点开关和目录存储配额大小。
   *
   * @param { ConfigOption } config - 应用事件打点配置项对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11103001 - Invalid max storage quota value. Possibly caused by incorrectly formatted.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function configure(config: ConfigOption): void;

  /**
   * 提供对应用事件打点功能的配置选项。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface ConfigOption {
    /**
     * 打点功能开关，默认值为false。true：关闭打点功能，false：开启打点功能。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    disable?: boolean;

    /**
     * 打点数据存放目录的配额大小，默认值为“10MB”。建议配额大小不超过10MB，配额过大可能会影响接口效率。
     * 
     * 在目录大小超出配额后，下次打点会触发对目录的清理操作：按从旧到新的顺序逐个删除打点数据文件，直到目录大小不超出配额时结束。
     * 
     * 配额值字符串规格如下：
     * 
     * - 配额值字符串只由数字字符和大小单位字符（单位字符支持[b|k|kb|m|mb|g|gb|t|tb]，不区分大小写）构成。
     * - 配额值字符串必须以数字开头，后面可以选择不传单位字符（默认使用byte作为单位），或者以单位字符结尾。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    maxStorage?: string;
  }

  /**
   * 提供事件信息的参数选项。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AppEventInfo {
    /**
     * 事件领域。事件领域名称支持数字、字母、下划线字符，需要以字母开头且不能以下划线结尾，长度非空且不超过32个字符。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * 事件名称。首字符必须为字母字符或$字符，中间字符必须为数字字符、字母字符或下划线字符，结尾字符必须为数字字符或字母字符，长度非空且不超过48个字符。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 事件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    eventType: EventType;

    /**
     * 事件参数对象，包含每个事件参数的参数名和参数值。
     * **系统事件中params包含的字段已由各系统事件定义，具体字段含义在各类系统事件指南的介绍中，例如[崩溃事件介绍](docroot://dfx/hiappevent-watcher-crash-events.md)。** 针
     * 对应用事件，[Write]{@link hiAppEvent.write(info: AppEventInfo)}打点写入的参数由开发者定义，其规格如下：
     * 
     * - 参数名为string类型，首字符必须为字母字符或`$`字符，中间字符必须为数字字符、字母字符或下划线字符，结尾字符必须为数字字符或字母字符，长度非空且不超过32个字符。如testName、$123_name等。
     * - 参数值支持string、number、boolean、数组类型。string类型参数长度需在8*1024个字符以内，超出后会和对应的参数名一同被丢弃；number类型参数取值需在
     * Number.MIN_SAFE_INTEGER~Number.MAX_SAFE_INTEGER范围内，超出可能会产生不确定值；数组类型参数中的元素类型只能全为string、number、boolean中的一种，且元素个数需在100
     * 以内，超出部分即从第101个元素开始会被丢弃。
     * - 参数个数需在32个以内，超出的参数会做丢弃处理。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    params: object;

    /**
     * 事件参数对象，包含每个事件参数的参数名和参数值。系统事件中 
     * params包含的字段已由各系统事件定义，具体字段含义在各类系统事件指南的介绍中，
     * 例如，[崩溃事件介绍](docroot://dfx/hiappevent-watcher-crash-events.md)。对于应用
     * 事件，[Write]{@link hiAppEvent.write(info: AppEventInfo)}打点写入的参数由开发者定义。
     * 其规格如下：
     * 
     * - 参数名为string类型，首字符必须为字母字符或$字符，
     * 中间字符必须为数字字符、字母字符或下划线字符，结尾字符必 
     * 须为数字字符或字母字符，长度非空且不超过32个字符。如testName、$123_name等。
     * - 参数值支持string、number、boolean、数组类型。string类型参数长度需在8*1024
     * 个字符以内，超出后会和对应的参数名一同被丢弃；number类型 
     * 参数取值需在Number.MIN_SAFE_INTEGER~Number.MAX_SAFE_INTEGER范围内， 
     * 超出可能会产生不确定值；数组类型参数中的元素类型只能全为string、 
     * number、boolean中的一种，且元素个数需在100以内，超出部分
     * 即从第101个元素开始会被丢弃。
     * - 参数个数需在32个以内，超出的参数会做丢弃处理

     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    params: RecordData;
  }

  /**
   * 应用事件打点方法，将AppEventInfo类型的事件进行存储，使用Promise方式作为异步回调。通过此接口写入的事件对象是开发者自定义的对象，为了避免与系统事件产生冲突混淆，不建议写入
   * 系统事件（[Event]{@link hiAppEvent.event}中定义的系统事件名称常量）。此接口写入的事件可通过订阅事件观察者（[addWatcher]{@link hiAppEvent.addWatcher}）进行处理。
   *
   * @param { AppEventInfo } 应用事件对象。其中的事件名称建议避免
   *     与Event中定义的系统事件名称常量冲突混淆。 [since 9 - 10]
   * @param { AppEventInfo } info - 应用事件对象。其中的事件名称建议避免与
   *     [Event]{@link hiAppEvent.event}中定义的系统事件名称常量冲突混淆。 [since 11]
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11100001 - Function disabled. Possibly caused by the param disable in ConfigOption is
   *     true.
   * @throws { BusinessError } 11101001 - Invalid event domain. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101002 - Invalid event name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101003 - Invalid number of event parameters. Possibly caused by the number of
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
   * 应用事件打点方法，将AppEventInfo类型的事件进行存储，使用callback方式作为异步回调。通过此接口写入的事件对象是开发者自定义的对象，为了避免与系统事件产生冲突混淆，不建议写入
   * 系统事件（[Event]{@link hiAppEvent.event}中定义的系统事件名称常量）。此接口写入的事件可通过订阅事件观察者（[addWatcher]{@link hiAppEvent.addWatcher}）进行订阅。
   *
   * @param { AppEventInfo } info - 应用事件对象。其内部定义的事件名称建议避免与[Event]{@link hiAppEvent.event}中定义的系统事件名称常量产生冲突。
   * @param { AsyncCallback<void> } callback - 打点回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11100001 - Function disabled. Possibly caused by the param disable in ConfigOption is
   *     true.
   * @throws { BusinessError } 11101001 - Invalid event domain. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101002 - Invalid event name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11101003 - Invalid number of event parameters. Possibly caused by the number of
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
   * 事件自定义参数值的类型。
   *
   * @unionmember { int } 表示值类型为整数值。
   * @unionmember { long } 表示值类型为长整数值。
   * @unionmember { double } 表示值类型为双浮点数。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @unionmember { Array<string> } 表示值类型为字符串类型的数组。
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 12]
   * @since 12 dynamic
   * @since 23 static
   */
  type ParamType = int | long | double | string | boolean | Array<string>;

  /**
   * 事件自定义参数设置方法，使用Promise方式作为异步回调。在同一生命周期中，可以通过事件领域和事件名称关联系统事件和应用事件。
   *
   * @param { Record<string, ParamType> } params - 事件自定义参数对象。参数名和参数值规格定义如下：<br>- 参数名为string类型，首字符必须为字母字符或$字符。中间字符必须为
   *     数字字符、字母字符或下划线字符。结尾字符必须为数字字符或字母字符。长度非空且不超过32个字符。<br>- 参数值为[ParamType]{@link hiAppEvent.ParamType}类型，参数值长度需在
   *     1024个字符以内。<br>- 参数个数需在64个以内。
   * @param { string } domain - 事件领域。事件领域可支持关联应用事件和系统事件（hiAppEvent.domain.OS）。
   * @param { string } name - 事件名称。默认为空字符串，空字符串表示关联事件领域下的所有事件名称。事件名称可支持关联应用事件和系统事件，其中系统事件仅支持关联：<br>-
   *     [崩溃事件](docroot://dfx/hiappevent-watcher-crash-events.md)（hiAppEvent.event.APP_CRASH）<br>-
   *     [应用冻屏事件](docroot://dfx/hiappevent-watcher-freeze-events.md)（hiAppEvent.event.APP_FREEZE）<br>-
   *     [资源泄漏事件](docroot://dfx/hiappevent-watcher-resourceleak-events.md)（hiAppEvent.event.RESOURCE_OVERLIMIT）。<br>
   *     **注意**：从API version 20开始，支持[资源泄漏事件](docroot://dfx/hiappevent-watcher-resourceleak-events.md)。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11100001 - Function disabled. Possibly caused by the param disable in ConfigOption is
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
   * 事件相关的配置参数设置方法，使用Promise方式作为异步回调。在同一生命周期中，可以通过事件名称，设置事件相关的配置参数。
   * 
   * 不同的事件有不同的配置项，目前仅支持以下事件：
   * 
   * - MAIN_THREAD_JANK（参数配置详见
   * [主线程超时事件检测](docroot://dfx/hiappevent-watcher-mainthreadjank-events.md#seteventconfig接口参数设置说明)）
   * - APP_CRASH（参数配置详见[崩溃日志配置参数设置介绍](docroot://dfx/hiappevent-watcher-crash-events.md#自定义规格设置)）
   * - RESOURCE_OVERLIMIT（参数配置详见[资源泄漏事件检测](docroot://dfx/hiappevent-watcher-resourceleak-events.md#自定义规格设置)）
   *
   * @param { string } name - 事件名称。
   * @param { Record<string, ParamType> } config - 事件自定义参数对象。参数名和参数值规格定义如下：<br>- 参数名为string类型，要求非空，且参数名长度需在1024个字符以内。
   *     <br>- 参数值为ParamType类型，参数值长度需在1024个字符以内。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function setEventConfig(name: string, config: Record<string, ParamType>): Promise<void>;

  /**
   * 提供订阅返回的事件包的参数定义。可用于获取事件包的详细信息，事件包由[takeNext]{@link hiAppEvent.AppEventPackageHolder#takeNext()}接口获得。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AppEventPackage {
    /**
     * 事件包ID，从0开始自动递增。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    packageId: int;

    /**
     * 事件包的事件数量。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    row: int;

    /**
     * 事件包的事件大小，单位为byte。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    size: int;

    /**
     * 事件包的事件信息。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    data: string[];

    /**
     * 事件对象集合。
     * 
     * **原子化服务API：** 从API version 12开始，该参数支持在原子化服务中使用。
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
   * 订阅数据持有者类，用于对事件信息进行处理。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  class AppEventPackageHolder {
    /**
     * 类构造函数，用于创建订阅数据持有者实例。先通过[addWatcher]{@link hiAppEvent.addWatcher}添加事件观察者，再通过观察者名称关联到应用内已添加的观察者对象。
     *
     * @param { string } watcherName - 已通过[addWatcher]{@link hiAppEvent.addWatcher}添加的事件观察者名称。若未通过addWatcher添加，则默认无数据。
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    constructor(watcherName: string);

    /**
     * 设置每次取出的事件包的数据大小阈值。
     *
     * @param { int } size - 数据大小阈值，单位为byte。取值范围[0, 2^31-1]，超出范围会抛异常。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 11104001 - Invalid size value. Possibly caused by the size value is less than or equal
     *     to zero.
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setSize(size: int): void;

    /**
     * 设置每次取出的事件包的数据条数，优先级高于setSize，和setSize同时调用时仅setRow生效。
     *
     * @param { int } size - 事件条数，单位为条。取值范围(0, 2^31-1]，超出范围会抛异常。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 11104001 - Invalid size value. Possibly caused by the size value is less than or equal
     *     to zero.
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 12]
     * @since 12 dynamic
     * @since 23 static
     */
    setRow(size: int): void;

    /**
     * 获取订阅事件。
     * 
     * 系统根据setSize设置的数据大小阈值或setRow设置的条数来取出订阅事件数据，默认取1条订阅事件。当订阅事件数据全部被取出时返回null。
     * 
     * 当setRow和setSize同时调用时仅setRow生效。
     *
     * @returns { AppEventPackage } 取出的事件包对象，订阅事件数据被全部取出后会返回null。
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    takeNext(): AppEventPackage;

    /**
     * 获取订阅事件。
     * 
     * <br>系统根据 **setSize** 设置的数据大小阈值或
     * **setRow** 设置的条数来取出订阅事件数据，默认取1条订阅事件。 
     * 当订阅事件数据全部被取出时返回null。
     * 
     * <br>当 **setRow** 和 **setSize** 同时调用时仅 **setRow** 生效。
     *
     * @returns { AppEventPackage | null } 取出的事件包对象，订阅事件数据被全部取出后
     *     会返回null。
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    takeNext(): AppEventPackage | null;
  }

  /**
   * 提供设置[Watcher]{@link hiAppEvent.Watcher}的onTrigger回调触发条件的参数选项。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface TriggerCondition {
    /**
     * 满足触发回调的事件总数量，正整数。默认值0，不触发回调。传入负值时，会被置为默认值。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    row?: int;

    /**
     * 满足触发回调的事件总大小，正整数，单位为byte。默认值0，不触发回调。传入负值时，会被置为默认值。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    size?: int;

    /**
     * 满足触发回调的超时时长，正整数，单位为s，值为timeOut * 30。默认值0，不触发回调。传入负值时，会被置为默认值。
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
   * 提供设置[Watcher]{@link hiAppEvent.Watcher}的订阅过滤条件的参数选项。用于在事件观察者中设置事件过滤条件，确保只有满足过滤条件的事件才会被监听处理。
   * 
   * > **说明：**
   * >
   * > 不同类型应用上，系统事件的订阅规格不同，具体规格可参见[HiAppEvent约束与限制](docroot://dfx/hiappevent-intro.md#约束与限制)。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AppEventFilter {
    /**
     * 需要订阅的事件领域。可以是系统事件领域（hiAppEvent.domain.OS）或开发者在使用[Write]{@link hiAppEvent.write(info: AppEventInfo)}接口时传入的
     * 自定义事件信息（[AppEventInfo]{@link hiAppEvent.AppEventInfo}）中的事件领域。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * 需要订阅的事件类型集合。默认不进行过滤。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    eventTypes?: EventType[];

    /**
     * 需要订阅的事件名称集合。默认不进行过滤。
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
   * 提供订阅返回的事件组的参数定义。可用于获取事件组的详细信息，事件组常在[Watcher]{@link hiAppEvent.Watcher}的onReceive回调中使用。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AppEventGroup {
    /**
     * 事件名称。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 事件对象集合。
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
   * 提供事件观察者的参数选项。用于配置和管理事件的观察者，实现对特定事件的监听和处理。
   * 
   * > **说明：**
   * >
   * > 不建议在回调函数中执行[removeWatcher]{@link hiAppEvent.removeWatcher}的操作，watcher一旦被移除，则其原有的订阅回调功能也会随之失效，可能会造成某些事件发生后无订阅回调情况。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Watcher {
    /**
     * 观察者名称，用于唯一标识观察者。首字符必须为字母字符，中间字符必须为数字字符、字母字符或下划线字符，结尾字符必须为数字字符或字母字符，长度非空且不超过32个字符。如testName1、crash_Watcher等。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 订阅回调触发条件，需要与回调函数onTrigger一同传入才会生效。默认不触发。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    triggerCondition?: TriggerCondition;

    /**
     * 订阅过滤条件，在需要对订阅事件进行过滤时传入。默认不过滤事件。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    appEventFilters?: AppEventFilter[];

    /**
     * 订阅回调函数，需要与回调触发条件triggerCondition一同传入才会生效，函数入参说明如下：
     * 
     * curRow：在本次回调触发时的订阅事件总数量； 
     * 
     * curSize：在本次回调触发时的订阅事件总大小，单位为byte；  
     * 
     * holder：订阅数据持有者对象，可以通过其对订阅事件进行处理。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    onTrigger?: (curRow: int, curSize: int, holder: AppEventPackageHolder) => void;

    /**
     * 订阅实时回调函数，与回调函数onTrigger同时存在时，只触发此回调，函数入参说明如下：
     * 
     * domain：回调事件的领域名称； 
     * 
     * appEventGroups：回调事件集合。
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
   * 添加事件观察者。可通过事件观察者的回调函数监听事件。
   *
   * @param { Watcher } watcher - 事件观察者。
   * @returns { AppEventPackageHolder } 订阅数据持有者。订阅失败时返回null。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11102001 - Invalid watcher name. Possible causes: 1. Contain invalid characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11102002 - Invalid filtering event domain. Possible causes: 1. Contain invalid
   *     characters;
   *     <br>2. Length is invalid.
   * @throws { BusinessError } 11102003 - Invalid row value. Possibly caused by the row value is less than zero.
   * @throws { BusinessError } 11102004 - Invalid size value. Possibly caused by the size value is less than zero.
   * @throws { BusinessError } 11102005 - Invalid timeout value. Possibly caused by the timeout value is less than zero.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function addWatcher(watcher: Watcher): AppEventPackageHolder;

  /**
   * 移除事件观察者。
   *
   * @param { Watcher } watcher - 事件观察者。
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
   * 应用事件打点数据清理方法，将当前应用存储在本地的打点数据进行清除。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function clearData(): void;

  /**
   * 设置用户ID值。用于在配置[Processor]{@link hiAppEvent.Processor}数据处理者时进行关联。
   *
   * @param { string } name - 用户ID的key。只能包含大小写字母、数字、下划线和 $，不能以数字开头，长度非空且不超过256个字符。
   * @param { string } value - 用户ID的值。长度不超过256，当值为null或空字符串时，则清除用户ID。
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
   * 获取通过setUserId接口设置的value值。
   *
   * @param { string } name - 用户ID的key。只能包含大小写字母、数字、下划线和 $，不能以数字开头，长度非空且不超过256个字符。
   * @returns { string } 用户ID的值。没有查到返回空字符串。
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
   * 设置用户属性值。用于在配置[Processor]{@link hiAppEvent.Processor}数据处理者时进行关联。
   *
   * @param { string } name - 用户属性的key。只能包含大小写字母、数字、下划线和 $，不能以数字开头，长度非空且不超过256个字符。
   * @param { string } value - 用户属性的值。长度不超过1024，当值为null或空字符串时，则清除用户属性。
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
   * 获取通过setUserProperty接口设置的value值。
   *
   * @param { string } name - 用户属性的key。只能包含大小写字母、数字、下划线和 $，不能以数字开头，长度非空且不超过256个字符。
   * @returns { string } 用户属性的值。没有查到返回空字符串。
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
   * 数据处理者可以上报事件的描述配置。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface AppEventReportConfig {
    /**
     * 事件领域。默认为空字符串，事件领域名称支持数字、字母、下划线字符，需要以字母开头且不能以下划线结尾，长度非空且不超过32个字符。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    domain?: string;

    /**
     * 事件名称。默认为空字符串，首字符必须为字母字符或$字符，中间字符必须为数字字符、字母字符或下划线字符，结尾字符必须为数字字符或字母字符，长度非空且不超过48个字符。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     * 是否实时上报事件。默认值为false，配置值为true表示实时上报事件，false表示不实时上报事件。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isRealTime?: boolean;
  }

  /**
   * 可以上报事件的数据处理者对象。用于事件的上报和管理，开发者可自定义数据处理配置，满足不同的数据处理需求。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface Processor {
    /**
     * 数据处理者的名称。名称只能包含大小写字母、数字、下划线和 $，不能以数字开头，长度非空且不超过256个字符。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 是否开启debug模式，默认值为false。配置值为true表示开启debug模式，false表示不开启debug模式。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    debugMode?: boolean;

    /**
     * 服务器位置信息，默认为空字符串。传入字符串长度不能超过8KB，超过时会被置为默认值。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    routeInfo?: string;

    /**
     * 应用id，默认为空字符串。传入字符串长度不能超过8KB，超过时会被置为默认值。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    appId?: string;

    /**
     * 数据处理者在启动时是否上报事件，默认值为false。配置值为true表示上报事件，false表示不上报事件。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onStartReport?: boolean;

    /**
     * 当应用程序进入后台时是否上报事件，默认值为false。配置值为true表示上报事件，false表示不上报事件。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    onBackgroundReport?: boolean;

    /**
     * 事件定时上报时间周期，单位为秒。传入数值必须大于或等于0，小于0时会被置为默认值0，不进行定时上报。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    periodReport?: int;

    /**
     * 事件上报阈值，当事件条数达到阈值时上报事件。传入数值必须大于0且小于1000，不在数值范围内会被置为默认值0，不进行上报。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    batchReport?: int;

    /**
     * 数据处理者可以上报的用户ID的name数组。name对应[setUserId]{@link hiAppEvent.setUserId}接口的name参数。默认为空数组。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    userIds?: string[];

    /**
     * 数据处理者可以上报的用户属性的name数组。name对应[setUserProperty]{@link hiAppEvent.setUserProperty}接口的name参数。默认为空数组。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    userProperties?: string[];

    /**
     * 数据处理者可以上报的事件描述配置数组。默认为空数组。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    eventConfigs?: AppEventReportConfig[];

    /**
     * 数据处理者配置id。传入数值必须大于或等于0，小于0时会被置为默认值0。传入的值大于0时，与数据处理者的名称name共同唯一标识数据处理者。
     * 
     * **原子化服务API：** 从API version 12开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    configId?: int;

    /**
     * 自定义扩展参数。传入参数名和参数值不符合规格会默认不配置扩展参数，其规格定义如下：
     * 
     * - 参数名为string类型，首字符必须为字母字符或$字符，中间字符必须为数字字符、字母字符或下划线字符，结尾字符必须为数字字符或字母字符，长度非空且不超过32个字符。
     * - 参数值为string类型，参数值长度需在1024个字符以内。
     * - 参数个数需在32个以内。
     * 
     * 元服务API： 从API version 12开始，该参数支持在元服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    customConfigs?: Record<string, string>;

    /**
     * 数据处理者的配置名称，支持从配置文件中加载对应配置，默认为空。只能包含大小写字母、数字、下划线和$，不能以数字开头，长度非空且不超过256个字符。
     * 
     * **原子化服务API：** 从API version 20开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    configName?: string;
  }

  /**
   * 添加数据处理者配置信息，用于配置处理者接收的事件名等信息。事件发生后处理者可以接收事件。
   * 
   * 该接口为同步接口，包含耗时操作。为了确保性能，建议使用[addProcessorFromConfig]{@link hiAppEvent.addProcessorFromConfig}异步接口或者交由子线程执行。
   *
   * @param { Processor } processor - 上报事件的数据处理者。
   * @returns { long } 所添加上报事件数据处理者的ID，标识唯一数据处理者，可用于移除数据处理者。 添加失败返回-1，添加成功返回大于0的值。
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
   * 添加数据处理者配置信息，通过配置文件配置处理者接收的事件名等信息，事件发生后处理者可以接收事件，使用Promise异步回调。
   *
   * @param { string } processorName - 数据处理者的名称。名称只能包含大小写字母、数字、下划线和$，不能以数字开头，长度非空且不超过256个字符。
   * @param { string } [configName] - 数据处理者的配置名称，支持从配置文件中加载对应配置，默认为“SDK_OCG”。只能包含大小写字母、数字、下划线和$，不能以数字开头，长度非空且不
   *     超过256个字符。
   * @returns { Promise<long> } Promise对象。返回添加的事件数据处理者的唯一ID，可用于移除该数据处理者。 添加失败返回11105001错误码。
   * @throws { BusinessError } 11105001 - Invalid parameter value. Possible causes: 1. Incorrect parameter length;
   *     2. Incorrect parameter format.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function addProcessorFromConfig(processorName: string, configName?: string): Promise<long>;

  /**
   * 移除上报事件的数据处理者。
   *
   * @param { long } id - 上报事件数据处理者ID。值大于0。由调用[addProcessor]{@link hiAppEvent.addProcessor}或
   *     [addProcessorFromConfig]{@link hiAppEvent.addProcessorFromConfig}接口返回值所得。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  function removeProcessor(id: long): void;

  /**
   * 提供主线程超时事件配置策略的定义。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface MainThreadJankPolicy {
    /**
     * 采集日志的类型。默认值：0。
     * 
     * logType=0：其他选项均取默认值，主线程连续两次超时150ms~450ms，采集调用栈；主线程超时450ms，采集trace。
     * 
     * logType=1：仅采集调用栈，触发检测的阈值由用户自定义。
     * 
     * logType=2：仅采集trace。
     * 
     * **说明**：
     * 
     * - logType=0时，仅需配置autoStopSampling参数，其他参数均取默认值，无需设置。
     * - logType=2时，其他参数均不生效，无需设置。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    logType?: int;

    /**
     * 应用启动期间忽略主线程超时检测的时间。单位：秒，默认值：10，最小值：3。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    ignoreStartupTime?: int;

    /**
     * 主线程超时检测间隔和采样间隔。单位：毫秒，默认值：150，取值范围：[50, 500]。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    sampleInterval?: int;

    /**
     * 主线程超时采样次数。单位：次，默认值：10，最小值：1。
     * 
     * 最大值需要结合自定义的sampleInterval进行动态计算，计算公式：sampleCount <= (2500 / sampleInterval - 4)。
     * 
     * **说明**：
     * 
     * - 2500的含义：根据系统规定，主线程超时事件从检测到上报的时间不可以超过2.5s（即：2500ms）。因此sampleCount的设置值不能超过系统按计算公式得出的最大值。
     * - 4的含义：第一次超时间隔检测时间 + 第二次超时间隔（系统提供两次再次发生超时事件的检测机会）时间 + 收集并上报堆栈信息的时间。
     * - 开发者要结合需求场景，进行合理的设置。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    sampleCount?: int;

    /**
     * 同一个应用的PID一个生命周期内，主线程超时采样上报次数。一个生命周期内只能设置一次。
     * 
     * 默认值：1，单位：次。
     * 
     * 每分钟上报次数范围：[1, 3]。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    reportTimesPerApp?: int;

    /**
     * 主线程超时结束时，是否自动停止采样主线程堆栈。
     * 
     * true: 超时结束或达到设置的采样次数，停止采样。
     * 
     * false：达到设置的采样次数时停止采样。
     * 
     * 默认值：false。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    autoStopSampling?: boolean;
  }

  /**
   * 提供CPU高负载事件配置策略的定义。
   * 
   * > **注意：**
   * >
   * > 该接口被调用后，会将设置值持久化。后续重复调用该接口时，若不设置对应参数，则取上一次系统取用的值。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface CpuUsageHighPolicy {
    /**
     * 应用前台CPU高负载异常阈值，阈值范围：[1, 100]，单位：%，默认值：30。若设置值在阈值范围外，系统将取用默认值30。
     * 
     * **说明**：建议取值小于30。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    foregroundLoadThreshold?: int;

    /**
     * 应用后台CPU高负载异常阈值，阈值范围：[1, 100]，单位：%，默认值：10。若设置值在阈值范围外，系统将取用默认值10。
     * 
     * **说明**：建议取值小于10。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    backgroundLoadThreshold?: int;

    /**
     * 应用线程CPU高负载异常阈值，阈值范围：[15, 100]，单位：%，默认值：70。若设置值在阈值范围外，系统将取用默认值70。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    threadLoadThreshold?: int;

    /**
     * 采样栈每日采集次数。一旦系统检测到当前异常日志的采集次数超过设置值，系统仍会正常上报事件，但异常事件中的external_log字段，将不再附加日志文件路径信息。
     * 
     * Debug版本应用，阈值范围：[-1, 100]；
     * 
     * Release版本应用，阈值范围：[0, 20]。
     * 
     * 单位：次，默认值：1。
     * 
     * 若设置值在阈值范围外，系统将取用默认值1。
     * 
     * **说明**：
     * 
     * 1. 值为-1，表示不限制采集日志次数。
     *  2. 值为0，表示不采集日志。
     *  3. 值大于0，表示每日采集次数上限。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    perfLogCaptureCount?: int;

    /**
     * 应用线程CPU高负载异常检测周期，阈值范围：[5, 3600]，单位：秒，默认值：60。
     * 
     * 若设置值在阈值范围外，系统将取用默认值60。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    threadLoadInterval?: int;
  }

  /**
   * 提供崩溃事件配置策略的定义。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AppCrashPolicy {
    /**
     * 是否使能崩溃事件的页面切换日志。
     * 
     * true：使能崩溃事件的页面切换日志。
     * 
     * false：不使能崩溃事件的页面切换日志。
     * 
     * 默认值：false。
     * 
     * **说明**：应用每次使能行为只在应用当前生命周期生效，在同一生命周期内，以最后一次成功调用的使能状态为准。应用重启后，需要重新设置使能状态。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;

    /**
     * 设置崩溃日志中是否打印pc和lr寄存器前后的内存值。
     * 
     * true：64位系统打印pc和lr寄存器地址向前248字节、向后256字节范围的内存值。32位系统打印pc和lr寄存器地址向前124字节、向后128字节范围的内存值。
     * 
     * false：64位系统打印pc和lr寄存器地址向前16字节、向后232字节范围的内存值。32位系统打印pc和lr寄存器地址向前8字节、向后116字节范围的内存值。
     * 
     * 默认值：false。
     * 
     * 26.0.0
     * 
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    extendPcLrPrinting?: boolean;

    /**
     * 设置崩溃日志截断大小。单位为byte，取值范围为[0, 5242880]。默认值取0，表示不截断崩溃日志。
     * 
     * 26.0.0
     * 
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    logFileCutoffSzBytes?: int;

    /**
     * 设置崩溃日志是否打印所有VMA（Virtual Memory Area，虚拟内存空间）的映射信息，即崩溃日志中Maps。
     * 
     * true：只打印崩溃日志中出现的地址所属的VMA映射信息，以减小日志大小。
     * 
     * false：打印所有VMA映射信息。
     * 
     * 默认值：false。
     * 
     * 26.0.0
     * 
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    simplifyVmaPrinting?: boolean;

    /**
     * APP_CRASH事件策略
     * 值为true表示启用日志转储捕获功能。
     * false表示关闭日志转储功能。
     * <br>默认值：false。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    collectMinidump?: boolean;
  }

  /**
   * 提供应用冻屏事件配置策略的定义。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AppFreezePolicy {
    /**
     * 是否使能应用冻屏事件的页面切换日志。
     * 
     * true：使能应用冻屏事件的页面切换日志。
     * 
     * false：不使能应用冻屏事件的页面切换日志。
     * 
     * 默认值：false。
     * 
     * **说明**：应用每次使能行为只在应用当前生命周期生效，在同一生命周期内，以最后一次成功调用的使能状态为准。应用重启后，需要重新设置使能状态。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;
  }

  /**
   * 提供资源泄漏事件配置策略的定义。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface ResourceOverlimitPolicy {
    /**
     * 是否使能资源泄漏事件的页面切换日志。
     * 
     * true：使能资源泄漏事件的页面切换日志。
     * 
     * false：不使能资源泄漏事件的页面切换日志。
     * 
     * 默认值：false。
     * 
     * **说明**：应用每次使能行为只在应用当前生命周期生效，在同一生命周期内，以最后一次成功调用的使能状态为准。应用重启后，需要重新设置使能状态。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;

    /**
     * 设置传递堆快照规格。
     * 
     * "event"：应用发生OOM时，不传递堆快照。
     * 
     * "event_rawheap"：应用发生OOM时，系统生成并传递堆快照。
     * 
     * **说明**：
     * 
     * - 当前仅接收以上二值，如果传入其他内容，方法将调用失败，不会产生任何效果。
     * - 参数值为"event_rawheap"，无法确保成功生成堆快照文件。原因是生成堆快照时，应用可能因性能问题触发冻屏而提前退出。
     * - 应用每次使能行为只在应用当前生命周期生效，在同一生命周期内，以最后一次成功调用的使能状态为准。应用重启后，需要重新设置使能状态。
     * 
     * 26.0.0
     * 
     * **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    jsHeapLogtype?: string;

    /**
     * 该参数用于控制是否输出精细化的external log日志文件名。
     * true：使能事件日志文件名精细化开关。
     * false：不使能事件日志文件名精细化开关。
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
   * 提供地址越界事件配置策略的定义。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AddressSanitizerPolicy {
    /**
     * 是否使能地址越界事件的页面切换日志。
     * 
     * true：使能地址越界事件的页面切换日志。
     * 
     * false：不使能地址越界事件的页面切换日志。
     * 
     * 默认值：false。
     * 
     * **说明**：应用每次使能行为只在应用当前生命周期生效，在同一生命周期内，以最后一次成功调用的使能状态为准。应用重启后，需要重新设置使能状态。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    pageSwitchLogEnable?: boolean;
  }

  /**
   * 提供系统事件配置策略的定义，用于使用[configEventPolicy]{@link hiAppEvent.configEventPolicy}设置事件配置策略。
   *
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface EventPolicy {
    /**
     * 主线程超时事件配置策略。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    mainThreadJankPolicy?: MainThreadJankPolicy;

    /**
     * CPU高负载事件配置策略。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    cpuUsageHighPolicy?: CpuUsageHighPolicy;

    /**
     * 崩溃事件配置策略。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    appCrashPolicy?: AppCrashPolicy;

    /**
     * 应用冻屏事件配置策略。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    appFreezePolicy?: AppFreezePolicy;

    /**
     * 资源泄漏事件配置策略。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    resourceOverlimitPolicy?: ResourceOverlimitPolicy;

    /**
     * 地址越界事件配置策略。
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    addressSanitizerPolicy?: AddressSanitizerPolicy;
  }

  /**
   * 系统事件相关的配置策略设置方法，使用Promise方式作为异步回调。
   * 
   * 在同一生命周期中，可以通过配置策略设置系统事件相关的策略参数。
   *
   * @param { EventPolicy } policy - 系统事件配置策略。
   * @returns { Promise<void> } Promise对象，无返回结果。
   *     <br>各个事件的事件配置策略，详细规格见[EventPolicy]{@link hiAppEvent.EventPolicy}类型说明。若配置策略设置有误，会导致接口返回失败。
   *     <br>- 参数类型设置有误，则返回401通用错误信息；
   *     <br>- 参数规格设置有误，则在hilog日志输出相关错误信息。
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function configEventPolicy(policy: EventPolicy): Promise<void>;
}

export default hiAppEvent;