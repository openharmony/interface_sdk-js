/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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

/*** if arkts dynamic */
import type { AutoFillType } from './AutoFillType';
import type CustomData from './CustomData';
import type AutoFillPopupConfig from './AutoFillPopupConfig';
import type ViewData from './ViewData';
import type { AutoFillTriggerType } from './AutoFillTriggerType';
/*** endif */
/*** if arkts static */
import { AutoFillType } from './AutoFillType';
import CustomData from './CustomData';
import AutoFillPopupConfig from './AutoFillPopupConfig';
import ViewData from './ViewData';
import { AutoFillTriggerType } from './AutoFillTriggerType';
/*** endif */

/**
 * 自动填充的填充请求。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface FillRequest {
  /**
   * 自动填充类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  type: AutoFillType;

  /**
   * 查看数据。填充请求的页面基本信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  viewData: ViewData;

  /**
   * 自定义数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  customData: CustomData;

  /**
   * 自动填充服务是否拉起popup窗口。
   * 
   * true：当前拉起popup窗口。
   * 
   * false：当前拉起模态窗。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  isPopup: boolean;

  /**
   * The trigger type of autofill service.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  triggerType?: AutoFillTriggerType;
}

/**
 * 保存自动填充的请求。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface SaveRequest {
  /**
   * 查看数据。填充请求的页面基本信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  viewData: ViewData;
}

/**
 * 自动填充更新信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export interface UpdateRequest {
  /**
   * 页面数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  viewData: ViewData;
}

/**
 * 自动填充响应。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface FillResponse {
  /**
   * 查看数据。填充请求的页面基本信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  viewData: ViewData;
}

/**
 * 自动填充或者生成密码时的回调对象，可以通过此回调通知客户端成功或者失败。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface FillRequestCallback {
  /**
   * 通知自动填充请求已成功完成。
   *
   * @param { FillResponse } response - 自动填充响应信息。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Mandatory parameters are left unspecified.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onSuccess(response: FillResponse): void;

  /**
   * 通知自动填充请求已失败。
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onFailure(): void;

  /**
   * 通知自动填充已被取消。
   *
   * @param { string } [fillContent] - 表示通知自动填充取消后，返回给输入法框架的填充内容。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1.The input parameter is not valid parameter;
   *     <br>2. Mandatory parameters are left unspecified. [since 12]
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onCancel(fillContent?: string): void;

  /**
   * 动态调整气泡弹窗的尺寸和位置。
   *
   * @param { AutoFillPopupConfig } autoFillPopupConfig - 气泡弹窗尺寸和位置信息。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Mandatory parameters are left unspecified.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  setAutoFillPopupConfig(autoFillPopupConfig: AutoFillPopupConfig): void;
}

/**
 * 自动保存或者手动保存请求回调。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface SaveRequestCallback {
  /**
   * 通知保存请求已成功处理。
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onSuccess(): void;

  /**
   * 通知保存请求处理失败。
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onFailure(): void;
}