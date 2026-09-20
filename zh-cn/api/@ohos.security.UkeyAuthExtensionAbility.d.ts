/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit DeviceCertificateKit
 */

import AbilityConstant from './@ohos.app.ability.AbilityConstant';

import type Want from './@ohos.app.ability.Want';

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';

import type UIExtensionContentSession from './@ohos.app.ability.UIExtensionContentSession';

import type UkeyAuthExtensionContext from './@ohos.security.UkeyAuthExtensionContext';

/**
 * UkeyAuthExtensionAbility是用于UKey认证UI显示的ExtensionAbility组件。它继承自
 * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}。您可以实现此类来
 * 提供UKey认证UI。UkeyAuthExtensionAbility的UI通过宿主应用启动的
 * [UIExtensionContentSession]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession}
 * 进行显示。
 * 与UIExtensionAbility不同，UkeyAuthExtensionAbility不提供onForeground和onBackground
 * 生命周期回调。
 * 仅被授予ohos.permission.START_SYSTEM_DIALOG权限的应用可以启动它。
 *
 * @syscap SystemCapability.Security.CertificateManagerDialog
 * @stagemodelonly
 * @since 26.0.1 dynamic&static
 */
declare class UkeyAuthExtensionAbility extends ExtensionAbility {
  /**
   * UkeyAuthExtensionAbility的上下文。
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  context: UkeyAuthExtensionContext;

  /**
   * 当UkeyAuthExtensionAbility实例创建时调用。您可以在此回调中执行初始化逻辑（例如
   * 定义变量和加载资源）。
   *
   * @param { AbilityConstant.LaunchParam } launchParam - 应用启动参数，包括应用启动原因
   *     和上次应用退出原因。
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  onCreate(launchParam: AbilityConstant.LaunchParam): void;

  /**
   * 当UIExtensionContentSession实例创建时调用。您可以在此回调中通过
   * UIExtensionContentSession实例加载页面。
   *
   * @param { Want } want - 启动UkeyAuthExtensionAbility时调用方传递的数据。
   * @param { UIExtensionContentSession } session - UIExtensionContentSession实例。
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  onSessionCreate(want: Want, session: UIExtensionContentSession): void;

  /**
   * 当UIExtensionContentSession被销毁时调用。它通知应用UIExtensionContentSession
   * 实例不再可用。
   *
   * @param { UIExtensionContentSession } session - UIExtensionContentSession实例。
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  onSessionDestroy(session: UIExtensionContentSession): void;

  /**
   * 当UkeyAuthExtensionAbility被销毁时调用。您可以在此生命周期中清除资源并保存数据。此
   * API同步返回结果或使用Promise返回结果。
   * **onDestroy()**生命周期回调执行后，应用可能退出。因此，**onDestroy()**中的异步函数
   * （例如异步写入数据库）可能无法执行。
   * 建议使用Promise进行异步回调以避免此类问题。
   *
   * @returns { void | Promise<void> } 不返回任何值的Promise。
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  onDestroy(): void | Promise<void>;
}

export default UkeyAuthExtensionAbility;