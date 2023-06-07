/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import type appAccount from './@ohos.account.appAccount';
import type { AsyncCallback } from './@ohos.base';

/**
 * Class of the application account authorization extension ability.
 *
 * @extends ExtensionAbility
 * @syscap SystemCapability.Account.AppAccount
 * @systemapi
 * @StageModelOnly
 * @since 10
 */
export default class AuthorizationExtensionAbility extends ExtensionAbility {
  /**
   * Called back when an authorization request is started.
   *
   * @param { AuthorizationRequest } request - Indicates the authorization request.
   * @param { AuthorizationCallback } callback - Indicates the authorization callback.
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  onStartAuthorization(request: AuthorizationRequest, callback: AuthorizationCallback): void;
}

/**
 * The definition of an authorization request.
 *
 * @interface AuthorizationRequest
 * @syscap SystemCapability.Account.AppAccount
 * @systemapi
 * @StageModelOnly
 * @since 10
 */
declare interface AuthorizationRequest {
  /**
   * Indicates the caller UID of the authorization request.
   *
   * @type { number }
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  readonly callerUid: number;

  /**
   * Indicates the business parameters of the authorization request.
   *
   * @type { appAccount.AccountCapabilityRequest }
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  readonly parameters: appAccount.AccountCapabilityRequest;
}

/**
 * The definition of an authorization callback.
 *
 * @interface AuthorizationCallback
 * @syscap SystemCapability.Account.AppAccount
 * @systemapi
 * @StageModelOnly
 * @since 10
 */
declare interface AuthorizationCallback {
  /**
   * Indicates the callback for notifying the result.
   *
   * @type { AsyncCallback<appAccount.AccountCapabilityResponse, { [key: string]: object }> }
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Account.AppAccount
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  onResult: AsyncCallback<appAccount.AccountCapabilityResponse, { [key: string]: object }>;
}