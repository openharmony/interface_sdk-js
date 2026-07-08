/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import Want from './@ohos.app.ability.Want';

/**
 * dialogRequest模块用于处理模态弹框的能力，包括获取RequestInfo（用于绑定模态弹框）、获取RequestCallback（用于设置结果）。
 * 
 * 模态弹框是指一个系统弹框，该弹框会拦截弹框之下的页面的鼠标、键盘、触屏等事件。销毁该弹框后，才能对页面进行操作。
 * 
 * > **说明：**
 * >
 * > - 本模块接口可以在ServiceExtensionAbility下使用，如果ServiceExtensionAbility实现了模态弹框，则可以使用本模块的接口获取请求方的RequestInfo、RequestCallback并
 * > 返回请求结果。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace dialogRequest {
  /**
   * 表示模态弹框的属性。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  export interface WindowRect {
    /**
     * 弹框边框的左上角的X坐标。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * 弹框边框的左上角的Y坐标。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * 弹框的宽度，单位为px。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * 弹框的高度，单位为px。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    height: int;
  }
  /**
   * 表示发起方请求信息，作为窗口绑定模态弹框的入参。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9 dynamic
   * @since 23 static
   */
  export interface RequestInfo {
    /**
     * 表示模态弹框的位置属性。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    windowRect?: WindowRect;
  }

  /**
   * 模态弹框请求结果码。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ResultCode {
    /**
     * 表示成功。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamic
     * @since 23 static
     */
    RESULT_OK = 0,

    /**
     * 表示失败。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamic
     * @since 23 static
     */
    RESULT_CANCEL = 1
  }

  /**
   * 模态弹框请求结果，包含结果码ResultCode和请求结果ResultWant。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  export interface RequestResult {
    /**
     * 表示结果码。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    result: ResultCode;

    /**
     * 表示Want类型信息，如ability名称，包名等。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    want?: Want;
  }

  /**
   * 用于设置模态弹框请求结果的callback接口。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9 dynamic
   * @since 23 static
   */
  export interface RequestCallback {
    /**
     * 设置请求结果
     *
     * @param { RequestResult } result - 模态弹框请求结果信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    setRequestResult(result: RequestResult): void;
  }

  /**
   * 从Want中获取请求方的RequestInfo。
   * 
   * > **说明：**
   * >
   * > 该接口可以在ServiceExtensionAbility下使用，如果ServiceExtensionAbility实现了模态弹框，则能从Want中获取请求方的RequestInfo。其他场景使用该接口，均无法获取返回值。
   *
   * @param { Want } want - 表示发起方请求弹框时传入的want信息。
   * @returns { RequestInfo } 请求方RequestInfo，用于绑定模态窗口。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getRequestInfo(want: Want): RequestInfo;

  /**
   * 从Want中获取请求方的RequestCallback。
   * 
   * > **说明：**
   * >
   * > 该接口可以在ServiceExtensionAbility下使用，如果ServiceExtensionAbility实现了模态弹框，则能从Want中获取请求方的RequestCallback。其他场景使用该接口，均无法获取返回
   * > 值。
   *
   * @param { Want } want - 表示发起方请求弹框时传入的want信息。
   * @returns { RequestCallback } 请求方RequestCallback，用于设置返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getRequestCallback(want: Want): RequestCallback;
}

export default dialogRequest;