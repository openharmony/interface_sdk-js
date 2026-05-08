/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type rpc from './@ohos.rpc';
import type Want from './@ohos.app.ability.Want';
import type SelectionExtensionContext from './@ohos.selectionInput.SelectionExtensionContext';

/**
 * 本模块提供划词扩展功能，用于用户通过鼠标、触控板等方式选择文本后的搜索、翻译等场景。
 * 
 * > **说明：**
 * > - 本模块仅支持PC/2in1设备。
 *
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi [since 20 - 23]
 * @publicapi [since 24]
 * @stagemodelonly
 * @since 20 dynamic
 * @since 24 static
 */
declare class SelectionExtensionAbility {
  /**
   * SelectionExtensionAbility的上下文环境，继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  context: SelectionExtensionContext;

  /**
   * 当SelectionExtensionAbility实例完成创建时，系统会触发该回调，开发者可在该回调中执行初始化逻辑（如定义变量、加载资源、监听划词事件等）。
   *
   * @param { Want } want - 当前SelectionExtensionAbility的Want类型信息，包括Ability名称、Bundle名称等。
   * @returns { rpc.RemoteObject } RPC remote connection object.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  onConnect(want: Want): rpc.RemoteObject;

  /**
   * 当SelectionExtensionAbility实例被销毁（例如用户关闭划词开关或切换划词应用）时，系统触发该回调。开发者可以在该生命周期中执行资源清理、数据保存等相关操作。使用同步回调或Promise异步回调。
   * 在执行完onDisconnect生命周期回调后，应用可能会退出，从而可能导致onDisconnect中的异步函数未能正确执行，比如异步写入数据库。推荐使用Promise异步回调，避免因应用退出导致onDisconnect中的异步
   * 函数（比如异步写入数据库）未能正确执行。
   * 仅当SelectionExtensionAbility正常退出时会触发该回调，异常退出场景（例如低内存终止进程）不会触发该回调。
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  onDisconnect(): void;

}

export default SelectionExtensionAbility;