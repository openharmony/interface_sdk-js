/*
* Copyright (c) 2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * The **shortKey** module provides APIs to set the delay for starting an ability using a shortcut key. For example, you
 * can set the delay to 3 seconds so that a screenshot is taken when you press and hold the shortcut key for 3 seconds.
 *
 * @file Preset Global Shortcut Keys
 * @kit InputKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 通过本模块接口，可以设置快捷键拉起Ability的延迟时间，如设置长按快捷键3s后再截屏等。
 * 
 * > **说明：**
 * >
 * > - 本模块接口为系统接口。
 * @syscap SystemCapability.MultimodalInput.Input.ShortKey
 * @systemapi hide for inner use
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace shortKey {

  /**
   * 设置快捷键拉起Ability的延迟时间，使用callback异步回调。
   *
   * @param { string } businessKey - 业务在多模侧注册的唯一标识，与ability_launch_config.json中的businessId对应。调用接口前自行查询。
   * @param { int } delay - 按下快捷键多长时间后拉起Ability，单位：ms，仅支持快捷键按下触发。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置快捷键拉起Ability的延迟时间成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.ShortKey
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function setKeyDownDuration(businessKey: string, delay: int, callback: AsyncCallback<void>): void;

  /**
   * 设置快捷键拉起Ability的延迟时间，使用Promise异步回调。
   *
   * @param { string } businessKey - 业务在多模侧注册的唯一标识，与ability_launch_config.json中的businessId对应。调用接口前自行查询。
   * @param { int } delay - 按下快捷键多长时间后拉起Ability，单位：ms，仅支持快捷键按下触发。
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.ShortKey
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function setKeyDownDuration(businessKey: string, delay: int): Promise<void>;
}

export default shortKey;

/**
 * 指纹手势事件类型的枚举。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi Hide this for inner system use.
 * @since 12 dynamic
 * @since 23 static
 */
export declare enum FingerprintAction {

  /**
   * 按下事件。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  DOWN = 0,

  /**
   * 抬起事件。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  UP = 1,

  /**
   * 滑动事件。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  SLIDE = 2,

  /**
   * 第二次按下事件。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  RETOUCH = 3,

  /**
   * 双触事件。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  CLICK = 4
}

/**
 * 指纹手势事件的类型和相对侧边指纹器件的偏移位置。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi Hide this for inner system use.
 * @since 12 dynamic
 * @since 23 static
 */
export declare interface FingerprintEvent {

  /**
   * 指纹手势事件类型的枚举。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  action: FingerprintAction;

  /**
   * 相对于侧边指纹器件短轴偏移量（正数表示向右移动，负数表示向左移动）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  distanceX: double;

  /**
   * 相对于侧边指纹器件长轴偏移量（正数表示向上移动，负数表示向下移动）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  distanceY: double;
}