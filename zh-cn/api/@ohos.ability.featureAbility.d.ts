/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

/**
 * # 使用说明
 * 
 * FeatureAbility模块的接口只能在Page类型的Ability中调用。
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { AbilityResult } from './ability/abilityResult';
import { AppVersionInfo as _AppVersionInfo } from './app/appVersionInfo';
import { Context as _Context } from './app/context';
import { DataAbilityHelper } from './ability/dataAbilityHelper';
import { ConnectOptions } from './ability/connectOptions';
import { ProcessInfo as _ProcessInfo } from './app/processInfo';
import window from './@ohos.window';

/**
 * FeatureAbility模块提供与用户进行交互的Ability的能力，包括启动新的Ability、停止Ability、获取dataAbilityHelper对象、获取当前Ability对应的窗口，连接断连Service等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly
 * @since 6 dynamiconly
 */
declare namespace featureAbility {
  /**
   * 获取要拉起的Ability对应的Want。使用callback异步回调。
   *
   * @param { AsyncCallback<Want> } callback - 回调函数，返回want信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 6 dynamiconly
   */
  function getWant(callback: AsyncCallback<Want>): void;

  /**
   * 获取要拉起的Ability对应的Want。使用Promise异步回调。
   *
   * @returns { Promise<Want> } Promise对象，返回want信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 6 dynamiconly
   */
  function getWant(): Promise<Want>;

  /**
   * 启动新的Ability。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   *
   * @param { StartAbilityParameter } parameter - 表示被启动的Ability。
   * @param { AsyncCallback<number> } callback - 回调函数。当启动Ability成功，err为undefined，data为0表示启动成功，data为其他表示启动失败；否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 6 dynamiconly
   */
  function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<number>): void;

  /**
   * 启动新的Ability。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   *
   * @param { StartAbilityParameter } parameter - 表示被启动的Ability。
   * @returns { Promise<number> } Promise对象。返回0表示启动成功，返回其他表示启动失败。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 6 dynamiconly
   */
  function startAbility(parameter: StartAbilityParameter): Promise<number>;

  /**
   * 获取应用上下文。
   *
   * @returns { Context } 返回应用程序上下文。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 6 dynamiconly
   */
  function getContext(): Context;

  /**
   * 启动一个Ability。使用callback异步回调。启动Ability后，存在如下几种情况：
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死Ability会返回异常信息给调用方, 异常信息中resultCode为-1。
   * - 如果被启动的Ability模式是单实例模式, 不同应用多次调用该接口启动这个Ability，当这个Ability调用
   * [terminateSelfWithResult]{@link featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方, 其它调用方返回异常信息, 异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   *
   * @param { StartAbilityParameter } parameter - 表示被启动的Ability。
   * @param { AsyncCallback<AbilityResult> } callback - 回调函数。当启动Ability成功，err为undefined，data为ability的启动结果；否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>): void;

  /**
   * 启动一个Ability。使用Promise异步回调。启动Ability后，存在如下几种情况：
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死Ability会返回异常信息给调用方, 异常信息中resultCode为-1。
   * - 如果被启动的Ability模式是单实例模式, 不同应用多次调用该接口启动这个Ability，当这个Ability调用
   * [terminateSelfWithResult]{@link featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方, 其它调用方返回异常信息, 异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   *
   * @param { StartAbilityParameter } parameter - 表示被启动的Ability。
   * @returns { Promise<AbilityResult> } Promise对象，返回启动Ability的结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function startAbilityForResult(parameter: StartAbilityParameter): Promise<AbilityResult>;

  /**
   * 停止当前的Ability。使用callback异步回调。如果该Ability是通过调用
   * [startAbilityForResult]{@link featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)}
   * 接口被拉起的，调用terminateSelfWithResult接口时会将结果返回给调用者，如果该Ability不是通过调用
   * [startAbilityForResult]{@link featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)}
   * 接口被拉起的，调用terminateSelfWithResult接口时不会有结果返回给调用者。
   *
   * @param { AbilityResult } parameter - 表示停止Ability之后返回的结果。
   * @param { AsyncCallback<void> } callback - 回调函数。当停止当前Ability成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

  /**
   * 停止当前的Ability。使用Promise异步回调。如果该Ability是通过调用
   * [startAbilityForResult]{@link featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)}
   * 接口被拉起的，调用terminateSelfWithResult接口时会将结果返回给调用者，如果该Ability不是通过调用
   * [startAbilityForResult]{@link featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)}
   * 接口被拉起的，调用terminateSelfWithResult接口时不会有结果返回给调用者。
   *
   * @param { AbilityResult } parameter - 表示停止Ability之后返回的结果。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * 停止当前的Ability。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当停止当前的Ability成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * 停止当前的Ability。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function terminateSelf(): Promise<void>;

  /**
   * 获取dataAbilityHelper对象。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   * >
   * > 跨应用访问dataAbility，对端应用需配置关联启动。
   *
   * @param { string } uri - 表示要打开的文件的路径。
   * @returns { DataAbilityHelper } 用来协助其他Ability访问DataAbility的工具类。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function acquireDataAbilityHelper(uri: string): DataAbilityHelper;

  /**
   * 检查Ability的主窗口是否具有窗口焦点。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。<br>如果此Ability当前具有视窗焦点，则返回true；否则返回false。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function hasWindowFocus(callback: AsyncCallback<boolean>): void;

  /**
   * 检查Ability的主窗口是否具有窗口焦点。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。如果此Ability当前具有视窗焦点，则返回true；否则返回false。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function hasWindowFocus(): Promise<boolean>;

  /**
   * 将当前Ability与指定的ServiceAbility进行连接。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。
   * > > 跨应用连接serviceAbility，对端应用需配置关联启动。
   *
   * @param { Want } request - 表示被连接的ServiceAbility。
   * @param { ConnectOptions } options - 表示连接回调函数。
   * @returns { number } 连接的ServiceAbility的ID(ID从0开始自增，每连接成功一次ID加1)。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function connectAbility(request: Want, options: ConnectOptions): number;

  /**
   * 断开与指定ServiceAbility的连接。使用callback异步回调。
   *
   * @param { number } connection - 表示断开连接的ServiceAbility的ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当断开与指定ServiceAbility的连接成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function disconnectAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * 断开与指定ServiceAbility的连接。使用Promise异步回调。
   *
   * @param { number } connection - 表示断开连接的ServiceAbility的ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function disconnectAbility(connection: number): Promise<void>;

  /**
   * 获取当前Ability对应的窗口。使用callback异步回调。
   *
   * @param { AsyncCallback<window.Window> } callback - 回调函数，返回当前Ability对应的窗口。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function getWindow(callback: AsyncCallback<window.Window>): void;

  /**
   * 获取当前Ability对应的窗口。使用Promise异步回调。
   *
   * @returns { Promise<window.Window> } Promise对象，返回当前Ability对应的窗口。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  function getWindow(): Promise<window.Window>;

  /**
   * 表示当前Ability对应的窗口配置项，使用时通过featureAbility.AbilityWindowConfiguration获取。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  export enum AbilityWindowConfiguration {
    /**
     * 未定义。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    WINDOW_MODE_UNDEFINED = 0,

    /**
     * 全屏。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    WINDOW_MODE_FULLSCREEN = 1,

    /**
     * 屏幕如果是水平方向表示左分屏，屏幕如果是竖直方向表示上分屏。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    WINDOW_MODE_SPLIT_PRIMARY = 100,

    /**
     * 屏幕如果是水平方向表示右分屏，屏幕如果是竖直方向表示下分屏。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    WINDOW_MODE_SPLIT_SECONDARY = 101,

    /**
     * 悬浮窗。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    WINDOW_MODE_FLOATING = 102
  }

  /**
   * 表示当前Ability对应的窗口属性，abilityStartSetting属性是一个定义为[key: string]: any的对象，key对应设定类型为：AbilityStartSetting枚举类型，value对应设定类型为
   * ：AbilityWindowConfiguration枚举类型。
   * 
   * 使用时通过featureAbility.AbilityStartSetting获取。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  export enum AbilityStartSetting {
    /**
     * 窗口显示大小属性的参数名。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    BOUNDS_KEY = 'abilityBounds',

    /**
     * 窗口显示模式属性的参数名。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    WINDOW_MODE_KEY = 'windowMode',

    /**
     * 窗口显示设备ID属性的参数名。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    DISPLAY_ID_KEY = 'displayId'
  }

  /**
   * 定义启动Ability时返回的错误码。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  export enum ErrorCode {
    /**
     * 没有异常。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    NO_ERROR = 0,

    /**
     * 无效的参数。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    INVALID_PARAMETER = -1,

    /**
     * 找不到ABILITY。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    ABILITY_NOT_FOUND = -2,

    /**
     * 权限拒绝。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    PERMISSION_DENY = -3
  }

  /**
   * 表示数据的操作类型。DataAbility批量操作数据时可以通过该枚举值指定操作类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  export enum DataAbilityOperationType {
    /**
     * 插入类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    TYPE_INSERT = 1,

    /**
     * 修改类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    TYPE_UPDATE = 2,

    /**
     * 删除类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    TYPE_DELETE = 3,

    /**
     * 声明类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 7 dynamiconly
     */
    TYPE_ASSERT = 4
  }

  /**
   * Context模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 9 dynamiconly
   */
  export type Context = _Context;

  /**
   * 应用版本信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 9 dynamiconly
   */
  export type AppVersionInfo = _AppVersionInfo;

  /**
   * 进程信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 9 dynamiconly
   */
  export type ProcessInfo = _ProcessInfo;
}

export default featureAbility;