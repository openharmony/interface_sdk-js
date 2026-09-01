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
 * @file 划词扩展上下文
 * @kit BasicServicesKit
 */

import ExtensionContext from './application/ExtensionContext';
import Want from './@ohos.app.ability.Want';

/**
 * SelectionExtensionContext是
 * [SelectionExtensionAbility]{@link @ohos.selectionInput.SelectionExtensionAbility:SelectionExtensionAbility}的上下文，继承自
 * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
 * 
 * 每个SelectionExtensionAbility组件实例化时，系统都会自动创建对应的SelectionExtensionContext。开发者可以通过SelectionExtensionContext调用
 * [startAbility]{@link SelectionExtensionContext#startAbility}接口拉起同应用内其他Ability。适用于在划词扩展场景中需要跳转至应用内其他Ability的情况，帮助用户在划词
 * 操作后快速获取与划词内容关联的功能或信息。
 * 
 * > **说明：**
 * >
 * > - 本模块仅支持PC/2in1设备。开发者可通过canIUse('SystemCapability.SelectionInput.Selection')判断当前设备是否支持该功能。
 *
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi [since 20 - 23]
 * @publicapi [since 24]
 * @stagemodelonly
 * @since 20 dynamic
 * @since 24 static
 */
declare class SelectionExtensionContext extends ExtensionContext {
  /**
   * 拉起同应用内的目标Ability，适用于在划词扩展场景中需要跳转至应用内其他Ability的情况。系统根据Want对象中指定的bundleName和abilityName匹配并调度启动目标Ability。使用Promise异步回
   * 调。关于Ability启动机制，请参见[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @param { Want } want - 需要拉起的目标应用信息。主要字段包括bundleName（目标应用的Bundle名称）和abilityName（目标Ability名称）。设置后系统将根据其中指定的bundleName
   *     和abilityName查找并拉起对应的Ability。仅支持拉起同应用内的Ability。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application.
   * @throws { BusinessError } 16000070 - The extension cannot start the service.
   * @throws { BusinessError } 16000083 - The ExtensionAbility cannot start the ability due to system control.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  startAbility(want: Want): Promise<void>;
}

export default SelectionExtensionContext;