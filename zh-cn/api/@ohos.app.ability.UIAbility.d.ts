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
 * UIAbility是包含UI界面的应用组件，继承自[Ability]{@link ./@ohos.app.ability.Ability:Ability}，提供UIAbility组件创建、销毁、前后台切换等
 * [生命周期](docroot://reference/apis-ability-kit/js-apis-app-ability-uiAbility.md#uiability生命周期状态)回调，同时也具备
 * [后台通信能力](docroot://reference/apis-ability-kit/js-apis-app-ability-uiAbility.md#后台通信能力)。
 * 
 * > **说明：**
 * >
 * > 各类Ability的继承关系详见[继承关系说明](docroot://reference/apis-ability-kit/js-apis-app-ability-ability.md#ability的继承关系说明)。
 *
 * @file
 * @kit AbilityKit
 */

/**
 * # UIAbility生命周期状态
 * 
 * **图1** UIAbility生命周期状态
 * 
 * ![Ability-Life-Cycle](docroot://application-models/figures/Ability-Life-Cycle.png)
 * 
 * - Create：表示UIAbility实例已创建。系统会在该状态下触发其[onCreate]{@link UIAbility.onCreate}回调函数，开发者可以在
 * [onCreate]{@link UIAbility.onCreate}中执行初始化操作。
 * - Foreground：表示UIAbility被拉到前台。系统会在该状态下触发其[onForeground]{@link UIAbility.onForeground}回调函数，开发者可以在
 * [onForeground]{@link UIAbility.onForeground}中申请应用所需的资源。
 * - Background：表示UIAbility被拉到后台。系统会在该状态下触发其[onBackground]{@link UIAbility.onBackground}回调函数，开发者可以在
 * [onBackground]{@link UIAbility.onBackground}中释放一些应用资源。
 * - Destroy：表示UIAbility实例即将销毁。系统会在该状态下触发其[onDestroy]{@link UIAbility.onDestroy}回调函数，开发者可以在
 * [onDestroy]{@link UIAbility.onDestroy}中执行数据保存等操作。
 */
/**
 * # 后台通信能力
 * 
 * 通过Call调用可以与目标UIAbility进行后台通信。Call调用示意图如下所示。
 * 
 * **图2** Call调用示意图
 * 
 * ![call](docroot://application-models/figures/call.png)
 * 
 * - Caller UIAbility调用[startAbilityByCall()]{@link ./application/UIAbilityContext:UIAbilityContext.startAbilityByCall}接
 * 口获取[Caller]{@link Caller}对象，并使用Caller对象的[call]{@link Caller}方法向Callee UIAbility发送数据。
 * - Callee UIAbility持有一个[Callee]{@link Callee}对象，通过Callee的[on]{@link UIAbility.onCreate}方法注册回调函数，用于接收Caller对象发送的数据。
 */
import Ability from './@ohos.app.ability.Ability';
import AbilityConstant from './@ohos.app.ability.AbilityConstant';
import Want from './@ohos.app.ability.Want';
import window from './@ohos.window';
import UIAbilityContext from './application/UIAbilityContext';
import rpc from './@ohos.rpc';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * 注册通用组件服务端Stub（桩）断开监听通知的回调函数类型。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 9 dynamic
 */
export interface OnReleaseCallback {
  /**
   * 定义OnRelease的回调函数。
   *
   * @param { string } msg - 用于传递释放消息。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 9 dynamic
   */
  (msg: string): void;
}

/**
 * 注册通用组件服务端Stub（桩）断开监听通知的回调函数类型。
 *
 * @param { string } msg - 用于传递释放消息。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 23 static
 */
export type OnReleaseCallback = (msg: string) => void;

/**
 * 注册协同场景下跨设备组件状态变化监听通知的回调函数类型。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 10 dynamic
 */
export interface OnRemoteStateChangeCallback {
 /**
  * 定义OnRemoteStateChange的回调函数。
  *
  * @param { string } msg - 用于传递释放消息。
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 10 dynamic
  */
 (msg: string): void;
}

/**
* 注册协同场景下跨设备组件状态变化监听通知的回调函数类型。
*
* @param { string } msg - 用于传递释放消息。
* @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
* @stagemodelonly
* @since 23 static
*/
export type OnRemoteStateChangeCallback = (msg: string) => void;

/**
* 通用组件服务端注册消息通知的回调函数类型。
*
* @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
* @stagemodelonly
* @since 9 dynamic
*/
export interface CalleeCallback {
 /**
  * 定义Callee的回调函数。
  *
  * @param { rpc.MessageSequence } indata - 发送需传递的数据。
  * @returns { rpc.Parcelable } 返回的数据对象。
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 9 dynamic
  */
 (indata: rpc.MessageSequence): rpc.Parcelable;
}

/**
* 通用组件服务端注册消息通知的回调函数类型。
*
* @param { rpc.MessageSequence } indata - 发送需传递的数据。
* @returns { rpc.Parcelable } 返回的数据对象。
* @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
* @stagemodelonly
* @since 23 static
*/
export type CalleeCallback = (indata: rpc.MessageSequence) => rpc.Parcelable;

/**
 * 调用方Caller UIAbility通过[startAbilityByCall]{@link ./application/UIAbilityContext:UIAbilityContext.startAbilityByCall}接口
 * 拉起目标Callee UIAbility，目标UIAbility启动成功后，返回一个Caller对象给调用方进行通信。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export interface Caller {
 /**
  * Caller UIAbility向Callee UIAbility发送双方约定好的序列化的数据。使用Promise异步回调。
  *
  * @param { string } method - 由Caller和Callee双方约定好的方法名，Callee方通过该字段区分消息类型。
  * @param { rpc.Parcelable } data - 由Caller向Callee发送的消息内容，消息内容是序列化的数据。
  * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
  * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
  *     2. Incorrect parameter types.
  * @throws { BusinessError } 16200001 - The caller has been released.
  * @throws { BusinessError } 16200002 - The callee does not exist.
  * @throws { BusinessError } 16000050 - Internal error.
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 9 dynamic
  * @since 23 static
  */
 call(method: string, data: rpc.Parcelable): Promise<void>;

 /**
  * Caller UIAbility向Callee UIAbility发送消息，Callee UIAbility处理完成后返回结果。使用Promise异步回调。
  *
  * @param { string } method - 由Caller和Callee双方约定好的方法名，Callee方通过该字段区分消息类型。
  * @param { rpc.Parcelable } data - 由Caller向Callee发送的消息内容，消息内容是序列化的数据。
  * @returns { Promise<rpc.MessageSequence> } Promise对象，返回Callee UIAbility的应答数据。
  * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
  *     2. Incorrect parameter types.
  * @throws { BusinessError } 16200001 - The caller has been released.
  * @throws { BusinessError } 16200002 - The callee does not exist.
  * @throws { BusinessError } 16000050 - Internal error.
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 9 dynamic
  * @since 23 static
  */
 callWithResult(method: string, data: rpc.Parcelable): Promise<rpc.MessageSequence>;

 /**
  * Caller主动释放与Callee UIAbility的连接。调用该接口后，Caller不能再使用call或callWithResult向Callee方发送消息。
  *
  * @throws { BusinessError } 16200001 - The caller has been released.
  * @throws { BusinessError } 16200002 - The callee does not exist.
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 9 dynamic
  * @since 23 static
  */
 release(): void;

 /**
  * Caller UIAbility可使用该接口注册与Callee UIAbility连接断开通知的监听。
  *
  * @param { OnReleaseCallback } callback - 回调函数，返回onRelease回调结果。
  * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
  *     2. Incorrect parameter types.
  * @throws { BusinessError } 16200001 - The caller has been released.
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 9 dynamic
  * @since 23 static
  */
 onRelease(callback: OnReleaseCallback): void;

 /**
  * 注册协同场景下跨设备组件状态变化监听通知。使用callback异步回调。
  *
  * @param { OnRemoteStateChangeCallback } callback - 回调函数，返回onRemoteStateChange回调结果。
  * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
  *     2. Incorrect parameter types.
  * @throws { BusinessError } 16200001 - The caller has been released.
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 10 dynamic
  * @since 23 static
  */
 onRemoteStateChange(callback: OnRemoteStateChangeCallback): void;

 /**
  * Caller UIAbility可使用该接口注册与Callee UIAbility连接断开通知的监听。
  *
  * @param { 'release' } type - 监听releaseCall事件，固定为'release'。
  * @param { OnReleaseCallback } callback - 回调函数，返回on回调结果。
  * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
  *     2. Incorrect parameter types; 3. Parameter verification failed.
  * @throws { BusinessError } 16200001 - The caller has been released.
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 9 dynamic
  */
 on(type: 'release', callback: OnReleaseCallback): void;

 /**
  * 取消注册Callee UIAbility断开通知的监听，与[on('release')]{@link Caller.on}是反向操作，当前暂未支持。
  *
  * @param { 'release' } type - 监听releaseCall事件，固定为'release'。
  * @param { OnReleaseCallback } callback - 回调函数，返回off回调结果。
  * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
  *     2. Incorrect parameter types; 3. Parameter verification failed.
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 9 dynamic
  */
 off(type: 'release', callback: OnReleaseCallback): void;

   /**
   * 取消注册Callee UIAbility断开的通知，与[Caller.onRelease]{@link Caller.onRelease}是反向操作。
   *
   * @param { OnReleaseCallback } callback - 回调函数，返回off回调结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
   offRelease(callback: OnReleaseCallback): void;

   /**
    * 取消注册Callee UIAbility断开通知的监听，与[Caller.on('release')]{@link Caller.on}是反向操作，当前暂未支持。
    *
    * @param { 'release' } type - 监听releaseCall事件，固定为'release'。
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    *     2. Incorrect parameter types; 3. Parameter verification failed.
    * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
    * @stagemodelonly
    * @since 9 dynamic
    */
   off(type: 'release'): void;
 
   /**
    * 取消注册Callee UIAbility断开的通知，与[Caller.onRelease]{@link Caller.onRelease}是反向操作。
    *
    * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
    * @stagemodelonly
    * @since 23 static
    */
   offRelease(): void;
 }
 
 /**
  * 系统为UIAbility创建的后台通信对象，Callee UIAbility（被调用方）可以通过Callee对象接收Caller对象发送的数据。
  *
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @stagemodelonly
  * @since 9 dynamic
  * @since 23 static
  */
 export interface Callee {
   /**
    * 通用组件服务端注册消息通知callback。
    *
    * @param { string } method - 由Caller和Callee双方约定好的方法名，Callee方通过该字段区分消息类型。
    * @param { CalleeCallback } callback - 一个[rpc.MessageSequence]{@link ./@ohos.rpc:rpc.MessageSequence}类型入参的js通知同步回调函数, 回
    *     调函数至少要返回一个空的[rpc.Parcelable]{@link ./@ohos.rpc:rpc.Parcelable}数据对象, 其他视为函数执行错误。
    * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
    *     2. Incorrect parameter types; 3. Parameter verification failed.
    * @throws { BusinessError } 16200004 - The method has been registered.
    * @throws { BusinessError } 16000050 - Internal error.
    * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
    * @stagemodelonly
    * @since 9 dynamic
    * @since 23 static
    */
   on(method: string, callback: CalleeCallback): void;

  /**
   * 解除通用组件服务端注册消息通知callback。
   *
   * @param { string } method - 已注册的通知事件字符串。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16200005 - The method has not been registered.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  off(method: string): void;
}

/**
 * 表示包含UI界面的应用组件，提供组件创建、销毁、前后台切换等生命周期回调，同时也具备后台通信能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class UIAbility extends Ability {
  /**
   * UIAbility的上下文。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  context: UIAbilityContext;

  /**
   * UIAbility[冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)时接收到的Want参数，取值为
   * [onCreate]{@link UIAbility.onCreate}接收到的Want参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  launchWant: Want;

  /**
   * 最近一次拉起UIAbility请求的Want参数。
   * 
   * - 首次拉起UIAbility时，取值为[onCreate]{@link UIAbility.onCreate}接收到的Want参数。
   * - 重复拉起UIAbility时，取值为[onNewWant]{@link UIAbility.onNewWant}最近一次接收到的Want参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  lastRequestWant: Want;

  /**
   * 系统为UIAbility创建的后台通信对象，Callee UIAbility（被调用方）可以通过Callee对象接收Caller对象发送的数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  callee: Callee;

  /**
   * 仅当UIAbility启动模式为[specified](docroot://application-models/uiability-launch-type.md#specified启动模式)时存在，取值为开发者自定义的
   * UIAbility标识。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  specifiedId?: string;

  /**
   * 当UIAbility实例创建完成时，系统会触发该回调，开发者可在该回调中执行初始化逻辑（如定义变量、加载资源等）。该回调仅会在UIAbility
   * [冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)时触发。
   * 
   * 同步接口，不支持异步回调。
   *
   * @param { Want } want - 调用方拉起该UIAbility时传递的数据。
   * @param { AbilityConstant.LaunchParam } launchParam - 应用启动参数，包含应用启动原因、应用上次退出原因等。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void;

  /**
   * 当[WindowStage]{@link ./@ohos.window}实例创建完成后，系统会触发该回调。开发者可以在该回调中通过WindowStage加载页面。
   *
   * @param { window.WindowStage } windowStage - WindowStage实例对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageCreate(windowStage: window.WindowStage): void;

  /**
   * 当WindowStage即将销毁时，系统触发该回调。开发者可以在该生命周期中取消windowStage事件的监听。
   *
   * @param { window.WindowStage } windowStage - WindowStage实例对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  onWindowStageWillDestroy(windowStage: window.WindowStage): void;

  /**
   * 当WindowStage销毁后，系统触发该回调。该回调用于通知开发者WindowStage对象已被销毁，不能再继续使用。
   * 
   * 仅当UIAbility正常退出时会触发该回调，异常退出场景（例如低内存终止进程）不会触发该回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageDestroy(): void;

  /**
   * 当UIAbility跨端迁移时，目标端UIAbility恢复页面栈时回调。
   * 
   * > **说明：**
   * >
   * > 在应用迁移启动时，无论是[冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)还是
   * > [热启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability热启动)，都会在执行完
   * > [onCreate()]{@link UIAbility.onCreate}/[onNewWant()]{@link UIAbility.onNewWant}后，触发onWindowStageRestore()生命周期函数，不
   * > 执行onWindowStageCreate()生命周期函数。
   *
   * @param { window.WindowStage } windowStage - WindowStage实例对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onWindowStageRestore(windowStage: window.WindowStage): void;

  /**
   * 当UIAbility被销毁（例如使用
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelf(callback: AsyncCallback<void>)}
   * 接口停止UIAbility）时，系统触发该回调。开发者可以在该生命周期中执行资源清理、数据保存等相关操作。
   * 
   * 使用同步回调或Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 在执行完onDestroy生命周期回调后，应用可能会退出，从而导致其中的异步函数（比如异步写入数据库）未能正确执行。在此情况下，推荐使用Promise异步回调。
   * >
   * > - 该回调仅在UIAbility正常退出时触发，当UIAbility异常退出（例如低内存终止进程）时，该回调将不被触发。
   *
   * @returns { void | Promise<void> } 无返回结果或无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onDestroy(): void | Promise<void>;

  /**
   * 当UIAbility被销毁（例如使用
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelf(callback: AsyncCallback<void>)}
   * 接口停止UIAbility）时，系统触发该回调。开发者可以在该生命周期中执行资源清理、数据保存等相关操作。
   * 
   * 使用同步回调或Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 在执行完onDestroy生命周期回调后，应用可能会退出，从而导致其中的异步函数（比如异步写入数据库）未能正确执行。在此情况下，推荐使用Promise异步回调。
   * >
   * > - 该回调仅在UIAbility正常退出时触发，当UIAbility异常退出（例如低内存终止进程）时，该回调将不被触发。
   *
   * @returns { Promise<void> | undefined } 无返回结果或无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onDestroy(): Promise<void> | undefined;

  /**
   * 当应用首次启动到前台或者从后台转入到前台时，系统触发该回调。开发者可在该回调中实现系统所需资源的申请，如应用转到前台时申请定位服务等。
   * 
   * 同步接口，不支持异步回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onForeground(): void;

  /**
   * UIAbility生命周期回调，应用转到前台前触发，在[onForeground]{@link UIAbility.onForeground}前被调用。可在该回调中实现采集应用开始进入前台的时间。如果与
   * [onDidForeground]{@link UIAbility.onDidForeground}配合使用，还可以统计出从应用开始进入前台到切换至前台状态的耗时。
   * 
   * 同步接口，不支持异步回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  onWillForeground(): void;

  /**
   * UIAbility生命周期回调，应用转到前台后触发，在[onForeground]{@link UIAbility.onForeground}后被调用，可在该回调中实现应用切换到前台后的时间打点。如果与
   * [onWillForeground]{@link UIAbility.onWillForeground}配合使用，还可以统计出从应用开始进入前台到切换至前台状态的耗时。
   * 
   * 同步接口，不支持异步回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  onDidForeground(): void;

  /**
   * 当应用从前台转入到后台时，系统触发该回调。开发者可在该回调中实现UI不可见时的资源释放操作，如停止定位功能等。
   * 
   * 同步接口，不支持异步回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onBackground(): void;

  /**
   * UIAbility生命周期回调，当应用从前台转到后台前触发，在[onBackground]{@link UIAbility.onBackground}前被调用。可在该回调中实现数据打点，例如，打点应用运行过程中发生的故障信息、统计
   * 信息、安全信息、用户行为信息等。
   * 
   * 同步接口，不支持异步回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  onWillBackground(): void;

  /**
   * UIAbility生命周期回调，当应用从前台转到后台后触发，在[onBackground]{@link UIAbility.onBackground}之后被调用。可在该回调中实现应用进入后台之后的资源释放操作，如进入后台后停止音频
   * 播放等。
   * 
   * 同步接口，不支持异步回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  onDidBackground(): void;

  /**
   * 当UIAbility准备跨端迁移时触发，可以保存待迁移的业务数据。
   * 
   * > **说明：**
   * >
   * > 对于API version 18（不含18） 之前版本仅支持同步调用，从API version 18及后续版本可支持异步调用。
   *
   * @param { object } wantParam - 开发者通过该参数保存待迁移的数据。 [since 9 - 11]
   * @param { Record<string, Object> } wantParam - 开发者通过该参数保存待迁移的数据。 [since 11]
   * @returns { AbilityConstant.OnContinueResult } Return the result of onContinue. [since 9 - 11]
   * @returns { AbilityConstant.OnContinueResult | Promise<AbilityConstant.OnContinueResult> } 表示是否同意迁移的结果：
   *     <br>- AGREE：表示同意。
   *     <br>- REJECT：表示拒绝，如应用在onContinue中异常可以返回REJECT。
   *     <br>- MISMATCH：表示版本不匹配，接续源端应用可以在onContinue中获取到迁移对端应用的版本号，进行协商后，如果版本不匹配导致无法迁移，可以返回该结果。
   *     <br> 该回调与onWindowStageRestore成对出现。在接续场景下，源端的UIAbility触发onContinue保存自定义数据，在目标端UIAbility触发onWindowStageRestore恢复自定义数据
   *     。 [since 12]
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onContinue(wantParam: Record<string, Object>):
    AbilityConstant.OnContinueResult | Promise<AbilityConstant.OnContinueResult>;

  /**
   * 当已经启动的UIAbility实例再次被拉起时，系统会触发该回调。若在特定场景下（参见
   * [Scenarios]{@link ./@ohos.app.ability.contextConstant:contextConstant.Scenarios}），不需要触发该生命周期回调，可以使用
   * [setOnNewWantSkipScenarios]{@link ./application/UIAbilityContext:UIAbilityContext.setOnNewWantSkipScenarios}接口设置。
   * 
   * 同步接口，不支持异步回调。
   *
   * @param { Want } want - 调用方再次拉起该UIAbility时传递的数据。
   * @param { AbilityConstant.LaunchParam } launchParam - UIAbility启动参数，包含启动原因等。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void;

  /**
   * 应用调测场景下，通过命令行dump UIAbility数据时，系统会触发该回调。开发者可以在该回调中返回UIAbility要转储的非敏感信息。
   *
   * @param { Array<string> } params - 表示dump命令参数。
   * @returns { Array<string> } 返回的dump信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  onDump(params: Array<string>): Array<string>;

  /**
   * 该接口需要与[appRecovery]{@link ./@ohos.app.ability.appRecovery:appRecovery}配合使用。如果应用已使能故障恢复功能（即
   * [enableAppRecovery]{@link ./@ohos.app.ability.appRecovery:appRecovery.enableAppRecovery}接口中的saveOccasion参数设置为
   * SAVE_WHEN_ERROR），当应用出现故障时，系统将触发该回调来保存UIAbility的数据。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，当
   * > [onSaveStateAsync]{@link UIAbility.onSaveStateAsync(stateType: AbilityConstant.StateType, wantParam: Record<string, Object>)}
   * > 实现时，本回调函数将不执行。
   *
   * @param { AbilityConstant.StateType } reason - 触发应用保存状态的原因，当前仅支持APP_RECOVERY（即应用故障恢复场景）。
   * @param { object } wantParam - 用户自定义的应用状态数据，应用再启动时被保存在[onCreate]{@link UIAbility.onCreate}的Want.parameters中
   *     。 [since 9 - 10]
   * @param { Record<string, Object> } wantParam - 用户自定义的应用状态数据，应用再启动时被保存在[onCreate]{@link UIAbility.onCreate}的
   *     Want.parameters中。 [since 11]
   * @returns { AbilityConstant.OnSaveResult } 返回一个数据保存策略的对象（如全部拒绝、全部允许、只允许故障恢复场景等）。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, Object>): AbilityConstant.OnSaveResult;

  /**
   * 该接口需要与[appRecovery]{@link ./@ohos.app.ability.appRecovery:appRecovery}配合使用。如果应用已使能故障恢复功能（即
   * [enableAppRecovery]{@link ./@ohos.app.ability.appRecovery:appRecovery.enableAppRecovery}接口中的saveOccasion参数设置为
   * SAVE_WHEN_ERROR），当应用出现故障时，系统将触发该回调来保存UIAbility的数据。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，当
   * > [onSaveStateAsync]{@link UIAbility.onSaveStateAsync(stateType: AbilityConstant.StateType, wantParam: Record<string, Object>)}
   * > 实现时，本回调函数将不执行。
   *
   * @param { AbilityConstant.StateType } reason - 触发应用保存状态的原因，当前仅支持APP_RECOVERY（即应用故障恢复场景）。
   * @param { Record<string, RecordData> } wantParam - 用户自定义的应用状态数据，应用再启动时被保存在onCreate中的Want.parameters中。
   * @returns { AbilityConstant.OnSaveResult } 返回一个数据保存策略的对象（如全部拒绝、全部允许、只允许故障恢复场景等）。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onSaveState(reason: AbilityConstant.StateType, wantParam: Record<string, RecordData>): AbilityConstant.OnSaveResult;

  /**
   * 该接口需要与[appRecovery]{@link ./@ohos.app.ability.appRecovery:appRecovery}配合使用。如果应用已使能故障恢复功能（即
   * [enableAppRecovery]{@link ./@ohos.app.ability.appRecovery:appRecovery.enableAppRecovery}接口中的saveOccasion参数设置为
   * SAVE_WHEN_ERROR），当应用出现故障时，将触发该回调来保存UIAbility的数据。使用Promise异步回调。
   *
   * @param { AbilityConstant.StateType } stateType - 触发应用保存状态的原因，当前仅支持`APP_RECOVERY`（即应用故障恢复场景）。
   * @param { Record<string, Object> } wantParam - 用户自定义的应用状态数据，应用再启动时被保存在[onCreate]{@link UIAbility.onCreate}的
   *     Want.parameters中。
   * @returns { Promise<AbilityConstant.OnSaveResult> } Promise对象。返回一个数据保存策略的对象（如全部拒绝、全部允许、只允许故障恢复场景等）。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  onSaveStateAsync(stateType: AbilityConstant.StateType, wantParam: Record<string, Object>): Promise<AbilityConstant.OnSaveResult>;

  /**
   * 该接口需要与[appRecovery]{@link ./@ohos.app.ability.appRecovery:appRecovery}配合使用。如果应用已使能故障恢复功能（即
   * [enableAppRecovery]{@link ./@ohos.app.ability.appRecovery:appRecovery.enableAppRecovery}接口中的saveOccasion参数设置为
   * SAVE_WHEN_ERROR），当应用出现故障时，将触发该回调来保存UIAbility的数据。使用Promise异步回调。
   *
   * @param { AbilityConstant.StateType } stateType - 触发应用保存状态的原因，当前仅支持`APP_RECOVERY`（即应用故障恢复场景）。
   * @param { Record<string, RecordData> } wantParam - 用户自定义的应用状态数据，应用再启动时被保存在[onCreate]{@link UIAbility.onCreate}的
   *     Want.parameters中。
   * @returns { Promise<AbilityConstant.OnSaveResult> } Promise对象。返回一个数据保存策略的对象（如全部拒绝、全部允许、只允许故障恢复场景等）。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onSaveStateAsync(stateType: AbilityConstant.StateType, wantParam: Record<string, RecordData>): Promise<AbilityConstant.OnSaveResult>;

  /**
   * 当跨端分享原子化服务时，系统触发该回调。开发者可以在该回调中设置待分享原子化服务的标题、摘要和URL等数据。
   *
   * @param { object } wantParam - 待分享的数据。 [since 10 - 10]
   * @param { Record<string, Object> } wantParam - 待分享的数据。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  onShare(wantParam: Record<string, Object>): void;

  /**
   * 当跨端分享原子化服务时，系统触发该回调。开发者可以在该回调中设置待分享原子化服务的标题、摘要和URL等数据。
   *
   * @param { Record<string, RecordData> } wantParam - 待分享的数据。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onShare(wantParam: Record<string, RecordData>): void;

  /**
   * 在UIAbility即将关闭前（例如用户通过点击应用窗口右上角的关闭按钮、或者通过Dock栏/托盘右键退出应用时），系统会触发该回调，用于在UIAbility正式关闭前执行其他操作。开发者可以在该回调中返回true阻拦此次关闭，然
   * 后在合适时机主动调用
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelf(callback: AsyncCallback<void>)}
   * 接口关闭。例如，询问用户是否确认关闭UIAbility，再主动销毁UIAbility。
   * 该接口仅在2in1和Tablet设备中可正常执行回调，在其他设备上不执行回调。
   * 
   * > **说明：**
   * >
   * > - 从API version 15开始，当[UIAbility.onPrepareToTerminateAsync]{@link UIAbility.onPrepareToTerminateAsync}实现时，本回调函数将不执
   * > 行。当
   * > [AbilityStage.onPrepareTerminationAsync]{@link ./@ohos.app.ability.AbilityStage:AbilityStage.onPrepareTerminationAsync}
   * > 或[AbilityStage.onPrepareTermination]{@link ./@ohos.app.ability.AbilityStage:AbilityStage.onPrepareTermination}实现时，在
   * > dock栏或系统托盘处右键点击关闭，本回调函数将不执行。
   * >
   * > - 如果应用本身或者所使用的三方框架注册了
   * > [window.WindowStage.on('windowStageClose')](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#onwindowstageclose14)
   * > 监听，本回调函数将不执行。
   *
   * @permission ohos.permission.PREPARE_APP_TERMINATE
   * @returns { boolean } Whether to terminate the UIAbility.
   *     <br>The value <code>true</code> means that the termination process is canceled.
   *     <br>The value <code>false</code> means to continue terminating the UIAbility.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  onPrepareToTerminate(): boolean;

  /**
   * 在UIAbility关闭前（例如用户通过点击应用窗口右上角的关闭按钮、或者通过Dock栏/托盘右键退出应用时），系统会触发该回调，用于在UIAbility正式关闭前执行其他操作。
   * 
   * 开发者可以在该回调中返回true阻拦此次关闭，然后在合适时机主动调用
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelf(callback: AsyncCallback<void>)}
   * 接口关闭。例如，询问用户是否确认关闭UIAbility，再主动销毁UIAbility。
   * 从API version 15开始，该接口仅在2in1设备中可正常执行回调，在其他设备上不执行回调。
   * 从API version 19开始，该接口在2in1和Tablet设备中可正常执行回调，在其他设备上不执行回调。
   * 
   * > **说明：**
   * >
   * > - 当
   * > [AbilityStage.onPrepareTerminationAsync]{@link ./@ohos.app.ability.AbilityStage:AbilityStage.onPrepareTerminationAsync}
   * > 或[AbilityStage.onPrepareTermination]{@link ./@ohos.app.ability.AbilityStage:AbilityStage.onPrepareTermination}实现时，在
   * > dock栏或系统托盘处右键点击关闭，本回调函数将不执行。
   * >
   * > - 如果应用本身或者所使用的三方框架注册了
   * > [window.WindowStage.on('windowStageClose')](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#onwindowstageclose14)
   * > 监听，本回调函数将不执行。
   * >
   * > - 若异步回调内发生crash，按超时处理，执行等待超过10秒未响应，UIAbility将被强制关闭。
   *
   * @permission ohos.permission.PREPARE_APP_TERMINATE
   * @returns { Promise<boolean> } Promise used to return the result.
   *     <br>The value <code>true</code> means that the termination process is canceled.
   *     <br>The value <code>false</code> means to continue terminating the UIAbility.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  onPrepareToTerminateAsync(): Promise<boolean>;

  /**
   * UIAbility生命周期回调，当UIAbility侧滑返回时触发，根据返回值决定是否销毁UIAbility。
   * 
   * - 当targetSdkVersion<12时，默认返回值为false，会销毁UIAbility。
   * - 当targetSdkVersion>=12时，默认返回值为true，会将UIAbility移动到后台不销毁。
   *
   * @returns { boolean } The value <code>true</code> means that the UIAbility instance will be moved to the background
   *     and will not be destroyed, and <code>false</code> means that the UIAbility instance will be destroyed.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  onBackPressed(): boolean;

  /**
   * UIAbility生命周期回调，在多设备协同场景下，协同方应用在被拉起的过程中返回是否接受协同。
   * 
   * > **说明：**
   * >
   * > - 该生命周期回调不支持[specified启动模式](docroot://application-models/uiability-launch-type.md#specified启动模式)。
   * >
   * > - 通过
   * > [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>)}
   * > 等方法拉起协同方应用时，需要在Want对象中设置协同标记[Flags]{@link ./@ohos.app.ability.wantConstant:wantConstant.Flags}为
   * > FLAG_ABILITY_ON_COLLABORATE。
   * >
   * > - [冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)时，该回调在
   * > [onForeground]{@link UIAbility.onForeground}前或[onBackground]{@link UIAbility.onBackground}后调用；
   * > [热启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability热启动)时，该回调在
   * > [onNewWant]{@link UIAbility.onNewWant}前调用。
   *
   * @param { Record<string, Object> } wantParam - want相关参数，仅支持key值取"ohos.extra.param.key.supportCollaborateIndex"。通过该
   *     key值可以获取到调用方传输的数据并进行相应的处理。
   * @returns { AbilityConstant.CollaborateResult } 协同方是否接受协同的结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 18 dynamic
   */
  onCollaborate(wantParam: Record<string, Object>): AbilityConstant.CollaborateResult;

  /**
   * UIAbility生命周期回调，在多设备协同场景下，协同方应用在被拉起的过程中返回是否接受协同。
   * 
   * > **说明：**
   * >
   * > - 该生命周期回调不支持[specified启动模式](docroot://application-models/uiability-launch-type.md#specified启动模式)。
   * >
   * > - 通过
   * > [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>)}
   * > 等方法拉起协同方应用时，需要在Want对象中设置协同标记[Flags]{@link ./@ohos.app.ability.wantConstant:wantConstant.Flags}为
   * > FLAG_ABILITY_ON_COLLABORATE。
   * >
   * > - [冷启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability冷启动)时，该回调在
   * > [onForeground]{@link UIAbility.onForeground}前或[onBackground]{@link UIAbility.onBackground}后调用；
   * > [热启动](docroot://application-models/uiability-intra-device-interaction.md#目标uiability热启动)时，该回调在
   * > [onNewWant]{@link UIAbility.onNewWant}前调用。
   *
   * @param { Record<string, RecordData> } wantParam - want相关参数，仅支持key值取"ohos.extra.param.key.supportCollaborateIndex"。通过该
   *     key值可以获取到调用方传输的数据并进行相应的处理。
   * @returns { AbilityConstant.CollaborateResult } 协同方是否接受协同的结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  onCollaborate(wantParam: Record<string, RecordData>): AbilityConstant.CollaborateResult;
}

export default UIAbility;