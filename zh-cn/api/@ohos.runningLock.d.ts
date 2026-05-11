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
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * 该模块为RunningLock锁相关操作的接口，RunningLock锁提供使能接近光亮灭屏或者设备熄屏后阻止进入睡眠的能力，包括创建、查询、持锁、释放锁等操作，RunningLock锁的类型详情见
 * [RunningLockType]{@link runningLock.RunningLockType}。
 *
 * @syscap SystemCapability.PowerManager.PowerManager.Core
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace runningLock {

  /**
   * 阻止系统睡眠的锁。
   *
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamic
   * @since 23 static
   */
  class RunningLock {
    /**
     * 锁定和持有RunningLock。
     *
     * @permission ohos.permission.RUNNING_LOCK
     * @param { number } timeout - 锁定和持有RunningLock的时长，单位：毫秒。
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead runningLock.RunningLock.hold
     */
    lock(timeout: number): void;

    /**
     * 锁定和持有RunningLock。
     *
     * @permission ohos.permission.RUNNING_LOCK
     * @param { int } timeout - 锁定和持有RunningLock的时长，单位：毫秒。<br>该参数必须为数字类型：<br>**-1**：永久持锁，需要主动释放。<br>**0**：默认3s后超时释放。<br>
     *     **>0**：按传入值超时释放。
     * @throws { BusinessError } 201 – If the permission is denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    hold(timeout: int): void;

    /**
     * 查询当前RunningLock是持有状态还是释放状态。
     *
     * @returns { boolean } Returns true if the lock is held or in use; returns false if the lock has been released.
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead runningLock.RunningLock.isHolding
     */
    isUsed(): boolean;

    /**
     * 查询当前RunningLock是持有状态还是释放状态。
     *
     * @returns { boolean } 返回true表示当前RunningLock是持有状态，返回false表示当前RunningLock是释放状态。
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    isHolding(): boolean;

    /**
     * 释放RunningLock锁。
     *
     * @permission ohos.permission.RUNNING_LOCK
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead runningLock.RunningLock.unhold
     */
    unlock(): void;

    /**
     * 释放RunningLock锁。
     *
     * @permission ohos.permission.RUNNING_LOCK
     * @throws { BusinessError } 201 – If the permission is denied.
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    unhold(): void;
  }

  /**
   * RunningLock锁的类型。
   *
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamic
   * @since 23 static
   */
  export enum RunningLockType {
    /**
     * 阻止系统睡眠的锁。
     *
     * **说明：** 从API version 7开始支持，从API version 10开始废弃。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamic
     * @since 23 static
     * @deprecated since 10
     */
    BACKGROUND = 1,
    /**
     * 接近光锁，使能接近光传感器，并根据传感器与障碍物的距离远近发起亮灭屏流程。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamic
     * @since 23 static
     */
    PROXIMITY_SCREEN_CONTROL = 2,
    /**
     * 阻止系统自动睡眠的后台闲时任务锁，持锁能保证一段时间用户不活动后系统不进入自动睡眠。注意：不能阻止如PC合盖等场景系统进入强制睡眠，使用方必须监听
     * [进入强制睡眠公共事件](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_enter_force_sleep12)
     * ，监听到事件后释放该锁。该类型锁行为存在设备差异，使用该类型锁请参考
     * [阻止系统闲时进入睡眠开发指南](docroot://basic-services/powermgr/runningLock/runningLock-dev.md)。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 23 dynamic&static
     */
    BACKGROUND_USER_IDLE = 129
  }

  /**
   * 查询系统是否支持该类型的锁。使用callback异步回调。
   *
   * @param { RunningLockType } type - 需要查询的锁的类型。
   * @param { AsyncCallback<boolean> } callback - 回调函数。当查询成功，err为undefined，data为获取到的支持情况，返回true表示支持，返回false表示不支持；否则为错误对象
   *     。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead runningLock.isSupported
   */
  function isRunningLockTypeSupported(type: RunningLockType, callback: AsyncCallback<boolean>): void;

  /**
   * 查询系统是否支持该类型的锁。使用Promise异步回调。
   *
   * @param { RunningLockType } type - 需要查询的锁的类型。
   * @returns { Promise<boolean> } Promise对象。返回true表示支持；返回false表示不支持。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead runningLock.isSupported
   */
  function isRunningLockTypeSupported(type: RunningLockType): Promise<boolean>;

  /**
   * 查询系统是否支持该类型的锁。
   *
   * @param { RunningLockType } type - 需要查询的锁的类型；该参数必须是一个枚举类。
   * @returns { boolean } 返回true表示支持，返回false表示不支持。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function isSupported(type: RunningLockType): boolean;

  /**
   * 创建RunningLock锁。使用callback异步回调。
   *
   * @permission ohos.permission.RUNNING_LOCK
   * @param { string } name 锁的名字。
   * @param { RunningLockType } type 要创建的锁的类型。
   * @param { AsyncCallback<RunningLock> } callback 回调函数。当创建锁成功，err为undefined，data为创建的RunningLock；否则为错误对象。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead RunningLock#create
   */
  function createRunningLock(name: string, type: RunningLockType, callback: AsyncCallback<RunningLock>): void;

  /**
   * 创建RunningLock锁。使用Promise异步回调。
   *
   * @permission ohos.permission.RUNNING_LOCK
   * @param { string } name 锁的名字。
   * @param { RunningLockType } type 要创建的锁的类型。
   * @returns { Promise<RunningLock> } Promise对象，返回RunningLock锁对象。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead RunningLock#create
   */
  function createRunningLock(name: string, type: RunningLockType): Promise<RunningLock>;

  /**
   * 创建RunningLock锁。使用callback异步回调。
   *
   * @permission ohos.permission.RUNNING_LOCK
   * @param { string } name - 锁的名字；该参数必须为字符串类型。
   * @param { RunningLockType } type - 要创建的锁的类型；该参数必须是一个枚举类。
   * @param { AsyncCallback<RunningLock> } callback - 回调函数。当创建锁成功，err为undefined，data为创建的RunningLock；否则为错误对象；
   *     AsyncCallback封装了一个RunningLock类型的类。
   * @throws { BusinessError } 201 - If the permission is denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function create(name: string, type: RunningLockType, callback: AsyncCallback<RunningLock>): void;

  /**
   * 创建RunningLock锁。使用Promise异步回调。
   *
   * @permission ohos.permission.RUNNING_LOCK
   * @param { string } name - 锁的名字；该参数必须为字符串类型。
   * @param { RunningLockType } type - 要创建的锁的类型；该参数必须是一个枚举类。
   * @returns { Promise<RunningLock> } Promise对象，返回RunningLock锁对象。
   * @throws { BusinessError } 201 - If the permission is denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function create(name: string, type: RunningLockType): Promise<RunningLock>;
}

export default runningLock;