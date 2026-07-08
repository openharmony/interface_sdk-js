/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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

import { Callback } from './@ohos.base';
import { AsyncCallback } from './@ohos.base';
import type { ContinuationResult as _ContinuationResult } from './continuation/continuationResult';
import type { ContinuationExtraParams as _ContinuationExtraParams } from './continuation/continuationExtraParams';

/**
 * continuationManager模块提供了流转/协同入口管理服务能力，包括连接/取消流转管理服务，注册/解注册设备连接变化监听，拉起设备选择模块，更新连接状态。
 *
 * @syscap SystemCapability.Ability.DistributedAbilityManager
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager
 */
declare namespace continuationManager {
  /**
   * 异步方法，监听设备连接状态，使用Callback形式返回连接的设备信息。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { 'deviceSelected' } type - 监听的事件类型，固定值"deviceSelected"。
   * @param { number } token - 注册后的token。
   * @param { Callback<Array<ContinuationResult>> } callback - 当用户从设备选择模块中选择设备时调用，返回设备ID、设备类型和设备名称供开发者使用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @throws { BusinessError } 16600004 - The specified callback has been registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function on(type: 'deviceSelected', token: number, callback: Callback<Array<ContinuationResult>>): void;

  /**
   * 取消监听设备连接状态。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { 'deviceSelected' } type - 取消监听的事件类型，固定值"deviceSelected"。
   * @param { number } token - 注册后的token。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @throws { BusinessError } 16600004 - The specified callback has been registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function off(type: 'deviceSelected', token: number): void;

  /**
   * 异步方法，监听设备断开状态，使用Callback形式返回断开的设备信息。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { 'deviceUnselected' } type - 监听的事件类型，固定值"deviceUnselected"。
   * @param { number } token - 注册后的token。
   * @param { Callback<Array<ContinuationResult>> } callback - 当用户从设备选择模块中断开设备时调用，返回设备ID、设备类型和设备名称供开发者使用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @throws { BusinessError } 16600004 - The specified callback has been registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function on(type: 'deviceUnselected', token: number, callback: Callback<Array<ContinuationResult>>): void;

  /**
   * 取消监听设备断开状态。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { 'deviceUnselected' } type - 取消监听的事件类型，固定值"deviceUnselected"。
   * @param { number } token - 注册后的token。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @throws { BusinessError } 16600004 - The specified callback has been registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function off(type: 'deviceUnselected', token: number): void;

  /**
   * 异步方法，监听设备连接状态，使用Callback形式返回连接的设备信息。
   *
   * @param { 'deviceConnect' } type - 监听的事件类型，固定值"deviceConnect"。
   * @param { Callback<ContinuationResult> } callback - 当用户从设备选择模块中选择设备时调用，返回设备ID、设备类型和设备名称供开发者使用。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function on(type: 'deviceConnect', callback: Callback<ContinuationResult>): void;

  /**
   * 异步方法，取消监听设备连接状态，使用Callback形式返回连接的设备信息。
   *
   * @param { 'deviceConnect' } type - 取消监听的事件类型，固定值"deviceConnect"。
   * @param { Callback<ContinuationResult> } [callback] - 当用户从设备选择模块中选择设备时调用，返回设备ID、设备类型和设备名称供开发者使用。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function off(type: 'deviceConnect', callback?: Callback<ContinuationResult>): void;

  /**
   * 异步方法，监听设备断开状态，使用Callback形式返回断开的设备信息。
   *
   * @param { 'deviceDisconnect' } type - 监听的事件类型，固定值"deviceDisconnect"。
   * @param { Callback<string> } callback - 当用户从设备选择模块中断开设备时调用，返回设备ID供开发者使用。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function on(type: 'deviceDisconnect', callback: Callback<string>): void;

  /**
   * 异步方法，取消监听设备断开状态，使用Callback形式返回连接的设备信息。
   *
   * @param { 'deviceDisconnect' } type - 取消监听的事件类型，固定值"deviceDisconnect"。
   * @param { Callback<string> } [callback] - 当用户从设备选择模块中断开设备时调用，返回设备ID供开发者使用。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function off(type: 'deviceDisconnect', callback?: Callback<string>): void;

  /**
   * 注册流转管理服务，并获取对应的注册token，无过滤条件，使用AsyncCallback方式作为异步方法。
   *
   * @param { AsyncCallback<number> } callback - AsyncCallback形式返回流转管理服务连接后生成的token。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function register(callback: AsyncCallback<number>): void;

  /**
   * 连接流转管理服务，并获取对应的注册token，使用AsyncCallback方式作为异步方法。
   *
   * @param { ContinuationExtraParams } options - 过滤可选择设备列表的额外参数。
   * @param { AsyncCallback<number> } callback - AsyncCallback形式返回流转管理服务连接后生成的token。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function register(options: ContinuationExtraParams, callback: AsyncCallback<number>): void;

  /**
   * 连接流转管理服务，并获取对应的注册token，使用Promise方式作为异步方法。
   *
   * @param { ContinuationExtraParams } [options] - 过滤可选择设备列表的额外参数，该参数可缺省。
   * @returns { Promise<number> } Promise形式返回流转管理服务连接后生成的token。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function register(options?: ContinuationExtraParams): Promise<number>;

  /**
   * 解注册流转管理服务，传入注册时获取的token进行解注册，使用AsyncCallback方式作为异步方法。
   *
   * @param { number } token - 注册后的token。
   * @param { AsyncCallback<void> } callback - 回调函数。当解注册成功，err为undefined，否则返回错误对象。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function unregister(token: number, callback: AsyncCallback<void>): void;

  /**
   * 解注册流转管理服务，传入注册时获取的token进行解注册，使用Promise方式作为异步方法。
   *
   * @param { number } token - 注册后的token。
   * @returns { Promise<void> } Promise形式返回接口调用结果。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>)
   */
  function unregister(token: number): Promise<void>;

  /**
   * 通知设备选择模块，更新当前的连接状态，使用AsyncCallback方式作为异步方法。
   *
   * @param { number } token - 注册后的token。
   * @param { string } deviceId - 设备ID。
   * @param { DeviceConnectState } status - 设备连接状态。
   * @param { AsyncCallback<void> } callback - 回调函数。当通知设备成功，err为undefined，否则返回错误对象。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync
   */
  function updateConnectStatus(
    token: number,
    deviceId: string,
    status: DeviceConnectState,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 通知设备选择模块，更新当前的连接状态，使用Promise方式作为异步方法。
   *
   * @param { number } token - 注册后的token。
   * @param { string } deviceId - 设备ID。
   * @param { DeviceConnectState } status - 设备连接状态。
   * @returns { Promise<void> } Promise形式返回接口调用结果。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync
   */
  function updateConnectStatus(token: number, deviceId: string, status: DeviceConnectState): Promise<void>;

  /**
   * 拉起设备选择模块，可显示组网内可选择设备列表信息，无过滤条件，使用AsyncCallback方式作为异步方法。
   *
   * @param { number } token - 注册后的token。
   * @param { AsyncCallback<void> } callback - 回调函数。当模块选择完成，err为undefined，否则返回错误对象。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; })
   */
  function startDeviceManager(token: number, callback: AsyncCallback<void>): void;

  /**
   * 拉起设备选择模块，可显示组网内可选择设备列表信息，使用AsyncCallback方式作为异步方法。
   *
   * @param { number } token - 注册后的token。
   * @param { ContinuationExtraParams } options - 过滤可选择设备列表的额外参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当模块选择完成，err为undefined，否则返回错误对象。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; })
   */
  function startDeviceManager(token: number, options: ContinuationExtraParams, callback: AsyncCallback<void>): void;

  /**
   * 拉起设备选择模块，可显示组网内可选择设备列表信息，使用Promise方式作为异步方法。
   *
   * @param { number } token - 注册后的token。
   * @param { ContinuationExtraParams } [options] - 过滤可选择设备列表的额外参数，该参数可缺省。
   * @returns { Promise<void> } Promise形式返回接口调用结果。
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.startDiscovering(discoverParam: { [key: string]: Object; }, filterOptions?: { [key: string]: Object; })
   */
  function startDeviceManager(token: number, options?: ContinuationExtraParams): Promise<void>;

  /**
   * 注册流转管理服务，并获取对应的注册token，无过滤条件，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { AsyncCallback<number> } callback - AsyncCallback形式返回流转管理服务连接后生成的token。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600003 - The number of token registration times has reached the upper limit.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function registerContinuation(callback: AsyncCallback<number>): void;

  /**
   * 连接流转管理服务，并获取对应的注册token，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinuationExtraParams } options - 过滤可选择设备列表的额外参数。
   * @param { AsyncCallback<number> } callback - AsyncCallback形式返回流转管理服务连接后生成的token。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600003 - The number of token registration times has reached the upper limit.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function registerContinuation(options: ContinuationExtraParams, callback: AsyncCallback<number>): void;

  /**
   * 连接流转管理服务，并获取对应的注册token，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { ContinuationExtraParams } [options] - 过滤可选择设备列表的额外参数，该参数可缺省。
   * @returns { Promise<number> } Promise形式返回流转管理服务连接后生成的token。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   *     <br>2. Parameter verification failed;
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600003 - The number of token registration times has reached the upper limit.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function registerContinuation(options?: ContinuationExtraParams): Promise<number>;

  /**
   * 解注册流转管理服务，传入注册时获取的token进行解注册，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { number } token - 注册后的token。
   * @param { AsyncCallback<void> } callback - 回调函数。当解注册成功，err为undefined，否则返回错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function unregisterContinuation(token: number, callback: AsyncCallback<void>): void;

  /**
   * 解注册流转管理服务，传入注册时获取的token进行解注册，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { number } token - 注册后的token。
   * @returns { Promise<void> } Promise形式返回接口调用结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function unregisterContinuation(token: number): Promise<void>;

  /**
   * 通知设备选择模块，更新当前的连接状态，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { number } token - 注册后的token。
   * @param { string } deviceId - 设备ID。
   * @param { DeviceConnectState } status - 设备连接状态。
   * @param { AsyncCallback<void> } callback - 回调函数。当通知设备成功，err为undefined，否则返回错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function updateContinuationState(
    token: number,
    deviceId: string,
    status: DeviceConnectState,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 通知设备选择模块，更新当前的连接状态，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { number } token - 注册后的token。
   * @param { string } deviceId - 设备ID。
   * @param { DeviceConnectState } status - 设备连接状态。
   * @returns { Promise<void> } Promise形式返回接口调用结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function updateContinuationState(token: number, deviceId: string, status: DeviceConnectState): Promise<void>;

  /**
   * 拉起设备选择模块，可显示组网内可选择设备列表信息，无过滤条件，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { number } token - 注册后的token。
   * @param { AsyncCallback<void> } callback - 回调函数。当模块选择完成，err为undefined，否则返回错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function startContinuationDeviceManager(token: number, callback: AsyncCallback<void>): void;

  /**
   * 拉起设备选择模块，可显示组网内可选择设备列表信息，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { number } token - 注册后的token。
   * @param { ContinuationExtraParams } options - 过滤可选择设备列表的额外参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当模块选择完成，err为undefined，否则返回错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function startContinuationDeviceManager(
    token: number,
    options: ContinuationExtraParams,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 拉起设备选择模块，可显示组网内可选择设备列表信息，使用Promise方式作为异步方法。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { number } token - 注册后的token。
   * @param { ContinuationExtraParams } [options] - 过滤可选择设备列表的额外参数，该参数可缺省。
   * @returns { Promise<void> } Promise形式返回接口调用结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   *     <br>2. Parameter verification failed;
   * @throws { BusinessError } 16600001 - The system ability works abnormally.
   * @throws { BusinessError } 16600002 - The specified token or callback is not registered.
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 22
   */
  function startContinuationDeviceManager(token: number, options?: ContinuationExtraParams): Promise<void>;

  /**
   * 设备连接状态。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  export enum DeviceConnectState {
    /**
     * 设备连接初始状态。
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    IDLE = 0,

    /**
     * 设备连接中状态。
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    CONNECTING = 1,

    /**
     * 设备已连接状态。
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    CONNECTED = 2,

    /**
     * 设备断开连接状态。
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    DISCONNECTING = 3
  }

  /**
   * 设备选择模块连接模式。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   */
  export enum ContinuationMode {
    /**
     * 设备选择模块单选模式。
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    COLLABORATION_SINGLE = 0,

    /**
     * 设备选择模块多选模式。
     *
     * @syscap SystemCapability.Ability.DistributedAbilityManager
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 22
     */
    COLLABORATION_MULTIPLE = 1
  }


  /**
   * 流转管理入口返回的设备信息。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 22
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo
   */
  export type ContinuationResult = _ContinuationResult;


  /**
   * 流转管理入口中设备选择模块所需的过滤参数。
   *
   * @syscap SystemCapability.Ability.DistributedAbilityManager
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 22
   * @useinstead @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo
   */
  export type ContinuationExtraParams = _ContinuationExtraParams;
}
export default continuationManager;