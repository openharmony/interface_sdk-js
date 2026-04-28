/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import type { UIContext } from './@ohos.arkui.UIContext';
import type * as _ViewData from './application/ViewData';
import type * as _PageNodeInfo from './application/PageNodeInfo';
import { AutoFillType } from './application/AutoFillType';
import type * as _AutoFillRequest from './application/AutoFillRequest';
import type * as _CustomData from './application/CustomData';
import type * as _AutoFillRect from './application/AutoFillRect';
import type * as _AutoFillPopupConfig from './application/AutoFillPopupConfig';
import { PopupPlacement } from './application/AutoFillPopupConfig';
import { AutoFillTriggerType } from './application/AutoFillTriggerType';
/*** endif */
/*** if arkts static */
import { UIContext } from './@ohos.arkui.UIContext';
import _ViewData from './application/ViewData';
import _PageNodeInfo from './application/PageNodeInfo';
import { AutoFillType as _AutoFillType } from './application/AutoFillType';
import { FillRequest as _FillRequest, SaveRequest as _SaveRequest} from './application/AutoFillRequest';
import { UpdateRequest as _UpdateRequest, FillResponse as _FillResponse} from './application/AutoFillRequest';
import { FillRequestCallback as _FillRequestCallback } from './application/AutoFillRequest';
import { SaveRequestCallback as _SaveRequestCallback } from './application/AutoFillRequest';
import _CustomData from './application/CustomData';
import _AutoFillRect from './application/AutoFillRect';
import _AutoFillPopupConfig from './application/AutoFillPopupConfig';
import { PopupSize as _PopupSize } from './application/AutoFillPopupConfig';
import { PopupPlacement as _PopupPlacement } from './application/AutoFillPopupConfig';
import { AutoFillTriggerType as _AutoFillTriggerType } from './application/AutoFillTriggerType';
/*** endif */

/**
 * autoFillManager模块提供账号密码保存等功能。
 * 
 * 不同于页面切换时触发的系统自动保存功能，该功能需要由用户手动触发。例如用户在网站上输入了账号密码，并点击“保存”按钮，才能触发相应的自动保存操作。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace autoFillManager {
  /**
   * 当保存请求成功时，该回调被调用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  type OnSuccessFn = () => void;

  /**
   * 当保存请求失败时，该回调被调用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  type OnFailureFn = () => void;

  /**
   * 当保存请求完成时所触发的回调接口。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface AutoSaveCallback {

    /**
     * 当保存请求成功时，该回调被调用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    onSuccess: OnSuccessFn;

    /**
     * 当保存请求失败时，该回调被调用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    onFailure: OnFailureFn;
}

  /**
   * 请求保存表单数据。使用callback异步回调。
   * 如果当前表单没有提供表单切换的功能，可以通过此接口保存历史表单输入数据，保存请求完成时会触发该回调。
   *
   * @param { UIContext } context - UI context in which the auto-save operation will be performed.
   * @param { AutoSaveCallback } [callback] - Implements callbacks triggered when auto-save is complete.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Get instance id failed;
   *     <br>2. Parse instance id failed; 3. The second parameter is not of type callback.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export function requestAutoSave(context: UIContext, callback?: AutoSaveCallback): void;

  /**
   * 自动填充的视图数据信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type ViewData = _ViewData.default;

  /**
   * 自动填充的视图数据信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type ViewData = _ViewData;

  /**
   * 自动填充的页面节点信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type PageNodeInfo = _PageNodeInfo.default;

  /**
   * 自动填充的页面节点信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type PageNodeInfo = _PageNodeInfo;

  /**
   * 自动填充的类型信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 static
   */
  export { AutoFillType };

  /**
   * 自动填充的类型信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillType = _AutoFillType;

  /**
   * 自动填充的请求信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  export type FillRequest = _AutoFillRequest.FillRequest;

  /**
   * 自动填充的请求信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 23 static
   */
  export type FillRequest = _FillRequest;

  /**
   * 自动保存的请求信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  export type SaveRequest = _AutoFillRequest.SaveRequest;

  /**
   * 自动保存的请求信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  export type SaveRequest = _SaveRequest;

  /**
   * 自动填充的更新信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type UpdateRequest = _AutoFillRequest.UpdateRequest;

  /**
   * 自动填充的更新信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type UpdateRequest = _UpdateRequest;

  /**
   * 自动填充的响应信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type FillResponse = _AutoFillRequest.FillResponse;

  /**
   * 自动填充的响应信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type FillResponse = _FillResponse;

  /**
   * 自动填充或者生成密码时的回调对象，可以通过此回调通知客户端成功或者失败。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type FillRequestCallback = _AutoFillRequest.FillRequestCallback;

  /**
   * 自动填充或者生成密码时的回调对象，可以通过此回调通知客户端成功或者失败。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type FillRequestCallback = _FillRequestCallback;

  /**
   * 自动保存或者手动保存请求的回调对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type SaveRequestCallback = _AutoFillRequest.SaveRequestCallback;

  /**
   * 自动保存或者手动保存请求的回调对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type SaveRequestCallback = _SaveRequestCallback;

  /**
   * 自定义数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  export type CustomData = _CustomData.default;

  /**
   * 自定义数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type CustomData = _CustomData;

  /**
   * 用于自动填充的矩形区域。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type AutoFillRect = _AutoFillRect.default;

  /**
   * 用于自动填充的矩形区域。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillRect = _AutoFillRect;

  /**
   * 自动填充气泡弹窗的尺寸和位置信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type AutoFillPopupConfig = _AutoFillPopupConfig.default;

  /**
   * 自动填充气泡弹窗的尺寸和位置信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillPopupConfig = _AutoFillPopupConfig;

  /**
   * 气泡弹窗的宽和高。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type PopupSize = _AutoFillPopupConfig.PopupSize;

  /**
   * 气泡弹窗的宽和高。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type PopupSize = _PopupSize;

  /**
   * 气泡弹窗的位置。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export { PopupPlacement };

  /**
   * 气泡弹窗的位置。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type PopupPlacement = _PopupPlacement;

  /**
   * 自动填充拉起类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  export { AutoFillTriggerType };

  /**
   * 自动填充拉起类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillTriggerType = _AutoFillTriggerType;
}

export default autoFillManager;