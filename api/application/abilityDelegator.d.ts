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

import { AsyncCallback } from '../basic';
import { Ability } from '../@ohos.application.Ability'
import { AbilityMonitor } from './abilityMonitor'
import { Context } from '../app/context'
import { ShellCmdResult } from './shellCmdResult'

/**
 * A global test utility interface used for adding AbilityMonitor objects and control lifecycle states of abilities.
 *
 * @since 8
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import AbilityDelegator from 'application/abilityDelegator.d'
 * @permission N/A
 */
export interface AbilityDelegator {
    /**
     * Add an AbilityMonitor object for monitoring the lifecycle state changes of the specified ability.
     * 添加AbilityMonitor实例，用于监听ability生命周期变换
     * @param monitor AbilityMonitor实例
     */
    addAbilityMonitor​(monitor: AbilityMonitor, callback: AsyncCallback<void>): void;
    addAbilityMonitor​(monitor: AbilityMonitor): Promise<void>;

    /**
     * Remove a specified AbilityMonitor object from the application memory.
     * 删除已经添加的AbilityMonitor实例
     * @param monitor AbilityMonitor实例
     */
    removeAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>): void;​
    removeAbilityMonitor(monitor: AbilityMonitor): Promise<void>;

    /**
     * Wait for and returns the Ability object that matches the conditions set in the given AbilityMonitor.
     * 等待与AbilityMonitor实例匹配的ability到达OnCreate生命周期，并返回ability实例
     * @param monitor AbilityMonitor实例
     * @param timeout 最大等待时间，单位毫秒
     * @return 如果监听到与指定AbilityMonitor实例匹配的Abilityability到达OnCreate生命周期，则返回ability实例；否则返回空
     */
    waitAbilityMonitor​(monitor: AbilityMonitor, callback: AsyncCallback<Ability>): void;
    waitAbilityMonitor​(monitor: AbilityMonitor, timeout: number, callback: AsyncCallback<Ability>): void;
    waitAbilityMonitor​(monitor: AbilityMonitor, timeout?: number): Promise<Ability>;

    /**
     * Obtain the application context.
     * 异步方式获取应用Context，通过异步回调将Context实例返回
     * @return 应用Context
     */
    getAppContext(callback: AsyncCallback<Context>): void;
    getAppContext(): Promise<Context>;

    /**
     * Obtain the lifecycle state of a specified ability.
     * 异步方式获取指定ability状态
     * @param ability 指定Ability对象
     * @return 指定Ability对象的状态
     */
    getAbilityState(ability: Ability, callback: AsyncCallback<number>): void;
    getAbilityState(ability: Ability): Promise<number>;

    /**
     * Obtain the ability that is currently being displayed.
     * 异步方式获取当前应用顶部ability
     * @return 当前应用顶部ability
     */
    getCurrentTopAbility(callback: AsyncCallback<Ability>): void;
    getCurrentTopAbility(): Promise<Ability>

    /**
     * Invoke the Ability.onForeground() callback of a specified ability without changing its lifecycle state.
     * 异步方式调度指定ability生命周期状态到Foreground状态
     * @param ability 指定Ability对象
     * @return true： 成功 false： 失败
     */
    doAbilityForeground(ability: Ability, callback: AsyncCallback<boolean>): void;
    doAbilityForeground(ability: Ability): Promise<boolean>;

    /**
     * Invoke the Ability.onBackground() callback of a specified ability without changing its lifecycle state.
     * 异步方式调度指定ability生命周期状态到Background状态
     * @param ability 指定Ability对象
     * @return true： 成功 false： 失败
     */
    doAbilityBackground(ability: Ability, callback: AsyncCallback<boolean>): void;
    doAbilityBackground(ability: Ability): Promise<boolean>;

    /**
     * Prints log information to the unit testing console.
     * The total length of the log information to be printed cannot exceed 1000 characters.
     * 异步方式打印日志信息到单元测试终端控制台
     * 日志信息字符串长度最大不超过1000个字符
     * @param msg 日志字符串
     */
    print(msg: string, callback: AsyncCallback<void>): void;
    print(msg: string): Promise<void>;

    /**
     * Execute the given command in the aa tools side.
     * 异步方式执行指定的shell命令
     * @param cmd shell命令字符串
     * @param timeoutSecs 超时时间，单位秒
     * @return shell命令的执行结果ShellCmdResult对象
     */
    executeShellCommand(cmd: string, callback: AsyncCallback<ShellCmdResult>): void;​
    executeShellCommand(cmd: string, timeoutSecs: number, callback: AsyncCallback<ShellCmdResult>): void;​
    executeShellCommand(cmd: string, timeoutSecs?: number): Promise<ShellCmdResult>;​
}

export default AbilityDelegator;