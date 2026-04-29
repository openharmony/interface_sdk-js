/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
/*** if arkts dynamic */
import type UIExtensionContentSession from './@ohos.app.ability.UIExtensionContentSession';
import type AutoFillExtensionContext from './application/AutoFillExtensionContext';
import type { FillRequest, SaveRequest, UpdateRequest, FillRequestCallback, SaveRequestCallback } from './application/AutoFillRequest';
/*** endif */
/*** if arkts static */
import UIExtensionContentSession from './@ohos.app.ability.UIExtensionContentSession';
import AutoFillExtensionContext from './application/AutoFillExtensionContext';
import { FillRequest, SaveRequest, UpdateRequest, FillRequestCallback, SaveRequestCallback } from './application/AutoFillRequest';
/*** endif */

/**
 * AutoFillExtensionAbility模块支持账号、密码、地址等多种数据类型的自动填充与保存，继承自
 * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare class AutoFillExtensionAbility extends ExtensionAbility {
  /**
   * AutoFillExtension的上下文环境，继承自ExtensionContext。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  context: AutoFillExtensionContext;

  /**
   * AutoFillExtensionAbility创建时触发回调函数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onCreate(): void;

  /**
   * 当发起自动填充请求或者生成密码时触发此回调函数。
   *
   * @param { UIExtensionContentSession } session - AutoFillExtensionAbility界面内容相关信息。
   * @param { FillRequest } request - 自动填充数据。
   * @param { FillRequestCallback } callback - 自动填充请求回调。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onFillRequest(session: UIExtensionContentSession, request: FillRequest, callback: FillRequestCallback): void;

  /**
   * 当发起自动保存或者手动保存时触发此回调函数。
   *
   * @param { UIExtensionContentSession } session - AutoFillExtensionAbility界面内容相关信息。
   * @param { SaveRequest } request - 保存请求数据。
   * @param { SaveRequestCallback } callback - 保存请求回调。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onSaveRequest(session: UIExtensionContentSession, request: SaveRequest, callback: SaveRequestCallback): void;

  /**
   * 当收到更新请求时触发此回调函数。
   *
   * @param { UpdateRequest } request - 更新请求。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  onUpdateRequest(request: UpdateRequest): void;

  /**
   * 当AutoFillExtensionAbility界面内容对象销毁后调用。
   *
   * @param { UIExtensionContentSession } session - AutoFillExtensionAbility界面内容相关信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onSessionDestroy(session: UIExtensionContentSession): void;

  /**
   * 当AutoFillExtensionAbility从后台转到前台时触发。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onForeground(): void;

  /**
   * 当AutoFillExtensionAbility从前台转到后台时触发。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onBackground(): void;

  /**
   * 在AutoFillExtensionAbility销毁时回调，执行资源清理等操作。回调结束直接返回，或者使用Promise异步回调。
   *
   * @returns { void | Promise<void> } Returns no value or returns a Promise.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  onDestroy(): void | Promise<void>;

  /**
   * 在AutoFillExtensionAbility销毁时回调，执行资源清理等操作。
   *
   * @returns { Promise<void> | undefined } the promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onDestroy(): Promise<void> | undefined;
}

export default AutoFillExtensionAbility;