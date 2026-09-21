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
 * UkeyAuthExtensionAbility is an ExtensionAbility component for UKey authentication UI display. It inherits from
 * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}. You can implement this class to
 * provide UKey authentication UI. The UI of a UkeyAuthExtensionAbility is displayed through a
 * [UIExtensionContentSession]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession} started
 * by the host application.
 * Unlike the UIExtensionAbility, the UkeyAuthExtensionAbility does not provide onForeground and onBackground
 * lifecycle callbacks.
 * Only applications granted ohos.permission.START_SYSTEM_DIALOG can start it.
 *
 * @syscap SystemCapability.Security.CertificateManagerDialog
 * @stagemodelonly
 * @since 26.0.1 dynamic&static
 */
declare class UkeyAuthExtensionAbility extends ExtensionAbility {
  /**
   * Context of the UkeyAuthExtensionAbility.
   *
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  context: UkeyAuthExtensionContext;

  /**
   * Called when a UkeyAuthExtensionAbility instance is created. You can execute initialization logic (such as
   * defining variables and loading resources) within this callback.
   *
   * @param { AbilityConstant.LaunchParam } launchParam - Parameters for application launch, including the reason for
   *     application launch and the reason for the last application exit.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  onCreate(launchParam: AbilityConstant.LaunchParam): void;

  /**
   * Called when a UIExtensionContentSession instance is created. You can load a page through the
   * UIExtensionContentSession instance within this callback.
   *
   * @param { Want } want - Data passed by the caller when launching the UkeyAuthExtensionAbility.
   * @param { UIExtensionContentSession } session - UIExtensionContentSession instance.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  onSessionCreate(want: Want, session: UIExtensionContentSession): void;

  /**
   * Called when a UIExtensionContentSession is destroyed. It informs applications that the UIExtensionContentSession
   * instance is no longer available for use.
   *
   * @param { UIExtensionContentSession } session - UIExtensionContentSession instance.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  onSessionDestroy(session: UIExtensionContentSession): void;

  /**
   * Called when a UkeyAuthExtensionAbility is destroyed. You can clear resources and save data during this lifecycle. This
   * API returns the result synchronously or uses a promise to return the result.
   * After the **onDestroy()** lifecycle callback is executed, the application may exit. Consequently, the asynchronous
   * function (for example, asynchronously writing data to the database) in **onDestroy()** may fail to be executed.
   * Using a Promise for asynchronous callback is recommended to prevent such issues.
   *
   * @returns { void | Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  onDestroy(): void | Promise<void>;
}

export default UkeyAuthExtensionAbility;