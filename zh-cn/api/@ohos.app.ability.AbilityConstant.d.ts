/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import type appManager from './@ohos.app.ability.appManager';

/**
 * AbilityConstant提供Ability相关的枚举，包括应用启动原因[LaunchReason]{@link AbilityConstant.LaunchReason}、上次退出原因
 * [LastExitReason]{@link AbilityConstant.LastExitReason}、迁移结果[OnContinueResult]{@link AbilityConstant.OnContinueResult}
 * 等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace AbilityConstant {
  /**
   * 通过桌面快捷方式启动。开发者如果从[LaunchParam]{@link AbilityConstant.LaunchParam}的launchReasonMessage属性中获取到该字符串，表示UIAbility是通过点击桌面快
   * 捷方式启动的。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  const REASON_MESSAGE_DESKTOP_SHORTCUT = 'ReasonMessage_DesktopShortcut';

  /**
   * 启动参数，主要包括Ability启动原因以及上次退出原因。Ability启动时由系统自动传入，开发者无需修改。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LaunchParam {
    /**
     * 枚举类型，表示Ability启动原因（如故障恢复拉起、意图调用拉起、原子化服务分享拉起等），详见[LaunchReason]{@link AbilityConstant.LaunchReason}。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    launchReason: LaunchReason;

    /**
     * 表示Ability启动的详细原因。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    launchReasonMessage?: string;

    /**
     * 枚举类型，表示Ability上次退出原因。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    lastExitReason: LastExitReason;

    /**
     * 表示Ability上次退出的详细原因。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    lastExitMessage: string;

    /**
     * 表示Ability上次退出时的关键运行信息（含进程ID、退出时间戳、RSS内存值等）。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    lastExitDetailInfo?: LastExitDetailInfo;

    /**
     * 表示UIAbility开始启动的UTC时间戳，单位为毫秒。
     * 
     * **约束：**
     * 
     * 该功能仅在启动UIAbility时生效。对于其他类型的Ability（例如UIExtensionAbility），所获取的启动时间为默认值0。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    launchUTCTime?: long;

    /**
     * 表示UIAbility开始启动时系统已运行的时间（自系统开机启动以来的时间），单位为毫秒。
     * 
     * **约束：**
     * 
     * 该功能仅在启动UIAbility时生效。对于其他类型的Ability（例如UIExtensionAbility），所获取的启动时间为默认值0。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    launchUptime?: long;
  }

  /**
   * 记录Ability所在进程上次退出时的关键运行信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export interface LastExitDetailInfo {
    /**
     * Ability上次退出所在进程的进程号。 
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    pid: int;

    /**
     * Ability上次退出所在进程的名称。 
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    processName: string;

    /**
     * Ability上次退出所在应用的UID。 
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    uid: int;

    /**
     * Ability上次退出的子原因。 
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    exitSubReason: int;

    /**
     * Ability上次退出时所在进程被kill的描述信息。 
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    exitMsg: string;

    /**
     * Ability上次退出时所在进程实际占用内存大小，单位KB。 
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    rss: int;

    /**
     * Ability上次退出时所在进程实际使用的物理内存大小，单位KB。 
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    pss: int;

    /**
     * Ability上次退出时的时间戳。 
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Ability上次退出时的进程状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    processState?: appManager.ProcessState;

    /**
     * Ability上次退出时的原因，取值详见[应用终止事件reason字段说明](docroot://dfx/hiappevent-watcher-app-killed-events.md#reason字段说明)。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    killReason?: string;
  }

  /**
   * Ability启动原因，该类型为枚举，可配合UIAbility的[onCreate(want, launchParam)]{@link @ohos.app.ability.UIAbility:UIAbility#onCreate}
   * 方法根据launchParam.launchReason的不同类型执行相应操作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LaunchReason {
    /**
     * 未知原因。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * 通过
     * [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>)}
     * 接口启动Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    START_ABILITY = 1,

    /**
     * 通过[startAbilityByCall]{@link ./application/UIAbilityContext:UIAbilityContext.startAbilityByCall}接口启动Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CALL = 2,

    /**
     * 跨端迁移启动Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTINUATION = 3,

    /**
     * 设置应用恢复后，应用故障时自动恢复启动Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    APP_RECOVERY = 4,

    /**
     * 通过原子化服务分享启动Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    SHARE = 5,

    /**
     * 通过设置开机自启动来启动Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    AUTO_STARTUP = 8,

    /**
     * 通过洞察意图来启动Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    INSIGHT_INTENT = 9,

    /**
     * 跨端迁移提前启动Ability。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PREPARE_CONTINUATION = 10,

    /**
     * 表明该UIAbility是通过预加载机制启动的。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PRELOAD = 11
  }

  /**
   * Ability上次退出原因，该类型为枚举，可配合UIAbility的[onCreate()]{@link @ohos.app.ability.UIAbility:UIAbility#onCreate}方法根据
   * launchParam.lastExitReason的不同类型执行相应操作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum LastExitReason {
    /**
     * 未知原因。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * Ability组件未响应。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 10
     * @useinstead AbilityConstant.LastExitReason.APP_FREEZE
     */
    ABILITY_NOT_RESPONDING = 1,

    /**
     * 用户主动关闭应用，应用程序正常退出。
     * 
     * **说明**：当开发者直接调用[process.exit()](../apis-arkts/js-apis-process.md#processexitdeprecated)、内核kill命令等非Ability Kit提供的能
     * 力强制退出应用进程时，也会返回NORMAL。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NORMAL = 2,

    /**
     * [进程崩溃](docroot://dfx/cppcrash-guidelines.md)导致的应用程序退出。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    CPP_CRASH = 3,

    /**
     * 当应用存在JS语法错误并未被开发者捕获时，触发JS_ERROR故障，导致应用程序退出。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    JS_ERROR = 4,

    /**
     * [应用冻屏](docroot://dfx/appfreeze-guidelines.md)导致的应用程序退出。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    APP_FREEZE = 5,

    /**
     * 因系统性能问题（如设备内存不足）导致的应用程序退出。
     * 
     * **说明**：该接口即将废弃，建议使用RESOURCE_CONTROL替代。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    PERFORMANCE_CONTROL = 6,

    /**
     * 系统资源使用不当导致的应用程序退出。具体错误原因可以通过[LaunchParam.lastExitMessage]{@link AbilityConstant.LaunchParam}获取，可能原因如下: 
     * 
     * - CPU Highload，CPU高负载。
     * - CPU_EXT Highload，快速CPU负载检测。
     * - IO Manage Control，I/O管控。
     * - App Memory Deterioration，应用内存超限劣化。
     * - Temperature Control，温度管控。
     * - Memory Pressure，整机低内存触发按优先级由低到高终止进程。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    RESOURCE_CONTROL = 7,

    /**
     * 应用升级导致的应用程序退出。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    UPGRADE = 8,

    /**
     * 应用程序因多任务中心请求而退出。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    USER_REQUEST = 9,

    /**
     * 应用程序因收到系统kill指令信号而退出。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    SIGNAL = 10
  }

  /**
   * Ability迁移结果，该类型为枚举，可配合UIAbility的[onContinue()]{@link @ohos.app.ability.UIAbility:UIAbility#onContinue}方法完成相应的返回。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum OnContinueResult {
    /**
     * 表示同意。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AGREE = 0,

    /**
     * 表示拒绝：如应用在[onContinue]{@link @ohos.app.ability.UIAbility:UIAbility#onContinue}中异常会导致迁移以后数据恢复时显示异常，则可以返回REJECT。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    REJECT = 1,

    /**
     * 表示版本不匹配：迁移发起端应用可以在[onContinue]{@link @ohos.app.ability.UIAbility:UIAbility#onContinue}中获取到迁移目标端应用的版本号，进行协商后，如果版本不
     * 匹配导致无法迁移，可以返回该结果。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MISMATCH = 2
  }

  /**
   * 整机可用内存级别，该类型为枚举，可配合UIAbility的[onMemoryLevel()]{@link @ohos.app.ability.Ability:Ability#onMemoryLevel}方法根据level执行不同内
   * 存级别的相应操作。
   * 
   * > **说明：**
   * >
   * > - 不同产品的触发条件可能存在差异。以12G内存的标准设备为例：
   * > - 当整机可用内存下降至1700MB~1800MB时，会触发取值为0的onMemoryLevel回调，表示当前整机可用内存适中。
   * > - 当整机可用内存下降至1600MB~1700MB时，会触发取值为1的onMemoryLevel回调，表示当前整机可用内存偏低。
   * > - 当整机可用内存下降至1600MB以下时，会触发取值为2的onMemoryLevel回调，表示当前整机可用内存很低。
   * >
   * > - LRU：表示按应用最近使用顺序排序的链表。通常将最近使用的应用放在链表头部（位置靠前），将最不常用的应用放在链表尾部（位置靠后）。当内存不足时，位置靠后的应用将优先被清理。
   * >
   * > - 当LRU发生变化时，后台应用会根据处于应用使用排序链表（LRU）的位置，触发对应MemoryLevel级别(MEMORY_LEVEL_BACKGROUND_MODERATE、
   * > MEMORY_LEVEL_BACKGROUND_LOW、MEMORY_LEVEL_BACKGROUND_CRITICAL)的onMemoryLevel回调。如果应用被冻结，则会在应用唤醒时收到对应的onMemoryLevel回
   * > 调，因此不建议在此回调接口中做耗时操作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum MemoryLevel {
    /**
     * 表示整机可用内存适中。由于整机内存水线的不同，在不同产品上的表现可能存在差异，参见下方说明。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MEMORY_LEVEL_MODERATE = 0,

    /**
     * 表示整机可用内存低。由于整机内存水线的不同，在不同产品上的表现可能存在差异，参见下方说明。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MEMORY_LEVEL_LOW = 1,

    /**
     * 表示整机可用内存极低。由于整机内存水线的不同，在不同产品上的表现可能存在差异，参见下方说明。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    MEMORY_LEVEL_CRITICAL = 2,

    /**
     * 表示应用程序的所有UI界面已不可见，此时应该释放一些资源。该枚举仅对从前台切换到后台的应用生效。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    MEMORY_LEVEL_UI_HIDDEN = 3,

    /**
     * 表示应用刚被使用过，即处于应用使用排序链表（LRU）的头部，暂时不会被系统清理。该枚举仅对后台应用生效。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    MEMORY_LEVEL_BACKGROUND_MODERATE = 4,

    /**
     * 表示应用已被用户使用完一段时间，即处于应用使用排序链表（LRU）的中部，存在被系统清理的风险。该枚举仅对后台应用生效。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    MEMORY_LEVEL_BACKGROUND_LOW = 5,

    /**
     * 表示应用长期未被使用，即处于应用使用排序链表（LRU）的尾部，会被系统优先清理。该枚举仅对后台应用生效。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    MEMORY_LEVEL_BACKGROUND_CRITICAL = 6
  }

  /**
   * 启动UIAbility时窗口的创建模式，类型为枚举。可配合
   * [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, options?: StartOptions)}
   * 方法使用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum WindowMode {
    /**
     * 未定义窗口模式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_UNDEFINED = 0,

    /**
     * 全屏模式。仅在2in1和Tablet设备上生效。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_FULLSCREEN = 1,

    /**
     * 支持应用内拉起Ability时设置为分屏，左侧分屏。仅在折叠屏和Tablet设备上生效。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_SPLIT_PRIMARY = 100,

    /**
     * 支持应用内拉起Ability时设置为分屏，右侧分屏。仅在折叠屏和Tablet设备上生效。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_SPLIT_SECONDARY = 101,

    /**
     * 自由悬浮形式窗口模式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    WINDOW_MODE_FLOATING = 102
  }

  /**
   * 保存应用数据的结果，该类型为枚举。配合UIAbility的
   * [onSaveState()]{@link @ohos.app.ability.UIAbility:UIAbility.onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, Object>)}
   * 方法使用，可以实现[UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum OnSaveResult {
    /**
     * 总是同意保存状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ALL_AGREE = 0,

    /**
     * 拒绝迁移保存状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTINUATION_REJECT = 1,

    /**
     * 迁移不匹配。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTINUATION_MISMATCH = 2,

    /**
     * 同意恢复保存状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY_AGREE = 3,

    /**
     * 拒绝恢复保存状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY_REJECT = 4,

    /**
     * Always rejected to save the status.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ALL_REJECT = 5
  }

  /**
   * 保存应用数据场景原因，该类型为枚举。配合UIAbility的
   * [onSaveState()]{@link @ohos.app.ability.UIAbility:UIAbility.onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, Object>)}
   * 方法使用，可以实现[UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum StateType {
    /**
     * 应用迁移场景。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CONTINUATION = 0,

    /**
     * 应用故障恢复场景。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    APP_RECOVERY = 1
  }

  /**
   * 流转状态枚举值。用于表示当前应用任务流转的状态。可配合[UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}的
   * [setMissionContinueState]{@link ./application/UIAbilityContext:UIAbilityContext.setMissionContinueState(state: AbilityConstant.ContinueState, callback: AsyncCallback<void>)}
   * 方法进行设置。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ContinueState {
    /**
     * 指示当前应用任务流转处于激活状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    ACTIVE = 0,

    /**
     * 指示当前应用任务流转处于未激活状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    INACTIVE = 1
  }

  /**
   * 应用协同状态，该类型为枚举。用于多设备场景下，调用方应用拉起协同方应用时，协同方应用是否接受协同。需要配合UIAbility的
   * [onCollaborate()]{@link @ohos.app.ability.UIAbility:UIAbility.onCollaborate(wantParam: Record<string, Object>)}方法进行
   * 设置。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CollaborateResult {
    /**
     * 接受协同。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    ACCEPT = 0,

    /**
     * 拒绝协同。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    REJECT = 1
  }

  /**
   * 应用准备关闭时返回的动作，该类型为枚举。需要配合[AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}的
   * [onPrepareTermination]{@link @ohos.app.ability.AbilityStage:AbilityStage#onPrepareTermination}或者
   * [onPrepareTerminationAsync]{@link @ohos.app.ability.AbilityStage:AbilityStage#onPrepareTerminationAsync}方法使用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  export enum PrepareTermination {
    /**
     * 表示立即执行结束动作，默认值。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    TERMINATE_IMMEDIATELY = 0,

    /**
     * 表示取消结束动作。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    CANCEL = 1
  }
}

export default AbilityConstant;