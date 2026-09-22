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

import type { AsyncCallback } from './@ohos.base';

import type ConfigurationConstant from './@ohos.app.ability.ConfigurationConstant';

import ExtensionContext from './application/ExtensionContext';

import type { AbilityResult } from './ability/abilityResult';

/**
 * UkeyAuthExtensionContext is the context of a UkeyAuthExtensionAbility, providing only terminate,
 * report-drawn-completed and color-mode capabilities. It inherits from
 * [ExtensionContext]{@link application/ExtensionContext:ExtensionContext}.
 *
 * @syscap SystemCapability.Security.CertificateManagerDialog
 * @stagemodelonly
 * @since 26.0.1 dynamic&static
 */
declare class UkeyAuthExtensionContext extends ExtensionContext {
  /**
   * Destroys this UkeyAuthExtensionAbility and closes the corresponding window.
   * This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  terminateSelf(): Promise<void>;

  /**
   * Destroys this UkeyAuthExtensionAbility, closes the corresponding window, and returns the result to the caller of the
   * UkeyAuthExtensionAbility (usually a system service). This API uses a promise to return the result.
   *
   * @param { AbilityResult } parameter - Information returned to the caller of the UkeyAuthExtensionAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  terminateSelfWithResult(parameter: AbilityResult): Promise<void>;
}

export default UkeyAuthExtensionContext;