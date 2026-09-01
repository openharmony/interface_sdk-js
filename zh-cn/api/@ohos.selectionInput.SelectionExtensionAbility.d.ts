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
 * @file 划词扩展能力
 * @kit BasicServicesKit
 */

import type rpc from './@ohos.rpc';
import type Want from './@ohos.app.ability.Want';
import type SelectionExtensionContext from './@ohos.selectionInput.SelectionExtensionContext';

/**
 * 本模块提供划词扩展能力，支持开发者通过继承SelectionExtensionAbility实现自定义的划词扩展服务，适用于在用户通过鼠标、触控板选中文本后提供搜索、翻译等扩展交互的场景。开发者需在工程配置中声明该
 * ExtensionAbility。具体的配置请参见
 * [实现一个划词扩展能力](docroot://basic-services/selectionInput/selection-services-application-guide.md)。本模块提供的具体能力包括：
 * 
 * - 生命周期管理：通过[onConnect]{@link SelectionExtensionAbility#onConnect}和
 * [onDisconnect]{@link SelectionExtensionAbility#onDisconnect}回调处理连接与断开逻辑。
 * - 提供context属性：开发者可通过context调用
 * [startAbility]{@link @ohos.selectionInput.SelectionExtensionContext:SelectionExtensionContext#startAbility}拉起同应用内的目标
 * Ability，或将context作为[createPanel]{@link @ohos.selectionInput.selectionManager:selectionManager.createPanel}的入参创建划词面板。
 * 
 * > **说明：**
 * >
 * > - 本模块仅支持PC/2in1设备。开发者可通过canIUse('SystemCapability.SelectionInput.Selection')判断当前设备是否支持该能力。
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
   * SelectionExtensionAbility的上下文环境，继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。开发者可通过
   * context调用
   * [startAbility]{@link @ohos.selectionInput.SelectionExtensionContext:SelectionExtensionContext#startAbility}拉起同应用内的目
   * 标Ability，或将context作为[createPanel]{@link @ohos.selectionInput.selectionManager:selectionManager.createPanel}的入参创建划词面
   * 板。
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
   * 当客户端连接到SelectionExtensionAbility时，系统会触发该回调，开发者可在该回调中返回RPC通信对象，用于客户端与服务端建立IPC通信连接。开发者需返回一个继承了rpc.RemoteObject的通信桩对象，
   * 系统将该桩对象传递给客户端，客户端通过该桩对象与SelectionExtensionAbility进行IPC通信。
   *
   * @param { Want } want - 连接SelectionExtensionAbility时系统传入的Want对象，包含当前Ability的名称、Bundle名称等描述信息，用于在onConnect回调中获取
   *     Ability连接配置，以便据此执行相应的初始化逻辑。
   * @returns { rpc.RemoteObject } RemoteObject通信桩对象，开发者需实现该对象的远程消息处理方法（如onRemoteMessageRequest），系统将此对象传递给客户端用于IPC通信。
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  onConnect(want: Want): rpc.RemoteObject;

  /**
   * 当客户端断开与SelectionExtensionAbility的连接（例如用户关闭划词开关或切换划词应用）时，系统会触发该回调。开发者可在该回调中执行与onConnect对应的清理操作，如调用
   * [destroyPanel]{@link @ohos.selectionInput.selectionManager:selectionManager.destroyPanel}销毁已创建的面板、调用
   * [off('selectionCompleted')]{@link @ohos.selectionInput.selectionManager:selectionManager.off(type: 'selectionCompleted', callback?: Callback<SelectionInfo>)}
   * 取消订阅的划词完成事件等。
   * 
   * 仅当SelectionExtensionAbility正常断开连接时会触发该回调，异常断开场景（例如低内存终止进程）不会触发该回调。
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