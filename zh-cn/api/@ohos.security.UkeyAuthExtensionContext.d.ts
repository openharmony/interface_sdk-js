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
 * UkeyAuthExtensionContext是UkeyAuthExtensionAbility的上下文，仅提供终止、报告绘制完成和颜色模式能力。它继承自
 * [ExtensionContext]{@link application/ExtensionContext:ExtensionContext}。
 *
 * @syscap SystemCapability.Security.CertificateManagerDialog
 * @stagemodelonly
 * @since 26.0.1 dynamic&static
 */
declare class UkeyAuthExtensionContext extends ExtensionContext {
  /**
   * 销毁此UkeyAuthExtensionAbility并关闭相应窗口。此API使用Promise返回结果。
   *
   * @returns { Promise<void> } 返回无值的Promise。
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  terminateSelf(): Promise<void>;

  /**
   * 销毁此UkeyAuthExtensionAbility，关闭相应窗口，并将结果返回给UkeyAuthExtensionAbility的调用方
   * （通常为系统服务）。此API使用Promise返回结果。
   *
   * @param { AbilityResult } parameter - 返回给UkeyAuthExtensionAbility调用方的信息。
   * @returns { Promise<void> } 返回无值的Promise。
   * @syscap SystemCapability.Security.CertificateManagerDialog
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  terminateSelfWithResult(parameter: AbilityResult): Promise<void>;
}

export default UkeyAuthExtensionContext;