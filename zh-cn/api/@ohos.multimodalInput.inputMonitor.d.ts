/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file Input Monitor
 * @kit InputKit
 */

import { Callback } from './@ohos.base';

import { MouseEvent } from './@ohos.multimodalInput.mouseEvent';

import type display from './@ohos.display';

import type { TouchEvent } from './@ohos.multimodalInput.touchEvent';

import type { Rotate, Pinch, ThreeFingersSwipe, FourFingersSwipe, SwipeInward } from './@ohos.multimodalInput.gestureEvent';

import type { ThreeFingersTap, TouchGestureEvent } from './@ohos.multimodalInput.gestureEvent';

import type { FingerprintEvent } from './@ohos.multimodalInput.shortKey';

import type { KeyEvent } from './@ohos.multimodalInput.keyEvent';

import type { KeyCode } from './@ohos.multimodalInput.keyCode';

/**
 * 输入监听模块，提供了监听输入设备事件的能力。输入设备事件当前包括触屏输入事件、鼠标输入事件和触控板输入事件。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * >
 * > - 文档中“全局”表示整个触控屏或触控板。如监听全局触屏输入事件，表示触摸触控板任何位置时，整个触控板的触屏输入事件均被监听。
 * >
 * > - 本模块接口均为系统接口。
 *
 * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
 * @systemapi hide for inner use
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace inputMonitor {

  /**
   * 触屏输入事件的回调函数。
   *
   * @param { TouchEvent } touchEvent - 触屏输入事件。
   * @returns { boolean } 若返回true，本次触屏后续产生的事件不再分发到窗口；若返回false，本次触屏后续产生的事件还会分发到窗口。
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 7 dynamic
   * @since 23 static
   */
  type TouchEventReceiver = (touchEvent: TouchEvent) => boolean;

  /**
   * 监听全局触屏输入事件，使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'touch' } type - 输入设备事件类型，取值'touch'。
   * @param { TouchEventReceiver } receiver - 回调函数，返回触摸屏输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 7 dynamic
   */
  function on(type: 'touch', receiver: TouchEventReceiver): void;

  /**
   * 监听全局触屏事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { TouchEventReceiver } receiver - 回调函数，异步上报触摸屏输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onTouch(receiver: TouchEventReceiver): void;

  /**
   * 监听全局鼠标事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'mouse' } type - 输入设备事件类型，取值'mouse'。
   * @param { Callback<MouseEvent> } receiver - 回调函数，返回鼠标输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 9 dynamic
   */
  function on(type: 'mouse', receiver: Callback<MouseEvent>): void;

  /**
   * 监听全局鼠标事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<MouseEvent> } receiver - 回调函数，异步上报鼠标输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onMouse(receiver: Callback<MouseEvent>): void;

  /**
   * 监听鼠标事件，当鼠标移动至指定矩形区域内时，触发回调任务。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'mouse' } type - 输入设备事件类型，取值'mouse'。
   * @param { display.Rect[] } rect - 可以触发回调任务的矩形区域，可传入1至2个。
   * @param { Callback<MouseEvent> } receiver - 回调函数，返回鼠标输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - SystemAPI permit error. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 11 dynamic
   */
  function on(type: 'mouse', rect: display.Rect[], receiver: Callback<MouseEvent>): void;

  /**
   * 监听鼠标事件，当鼠标移动至指定矩形区域内时，触发回调任务。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { display.Rect[] } rect - 可以触发回调任务的矩形区域，可传入1至2个。
   * @param { Callback<MouseEvent> } receiver - 回调函数，异步上报鼠标输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onMouse(rect: display.Rect[], receiver: Callback<MouseEvent>): void;

  /**
   * 取消监听全局触屏输入事件，使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'touch' } type - 输入设备事件类型，取值'touch'。
   * @param { TouchEventReceiver } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 7 dynamic
   */
  function off(type: 'touch', receiver?: TouchEventReceiver): void;

  /**
   * 取消监听全局触屏事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { TouchEventReceiver } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offTouch(receiver?: TouchEventReceiver): void;

  /**
   * 取消监听全局鼠标事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'mouse' } type - 输入设备事件类型，取值'mouse'。
   * @param { Callback<MouseEvent> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 9 dynamic
   */
  function off(type: 'mouse', receiver?: Callback<MouseEvent>): void;

  /**
   * 取消监听全局鼠标事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<MouseEvent> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offMouse(receiver?: Callback<MouseEvent>): void;

  /**
   * 监听全局触控板的捏合事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'pinch' } type - 输入设备事件类型，取值'pinch'。
   * @param { Callback<Pinch> } receiver - 回调函数，返回捏合输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10 dynamic
   */
  function on(type: 'pinch', receiver: Callback<Pinch>): void;

  /**
   * 监听全局触控板的捏合事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<Pinch> } receiver - 回调函数，异步上报捏合输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onPinch(receiver: Callback<Pinch>): void;

  /**
   * 取消监听全局触控板的捏合事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'pinch' } type - 输入设备事件类型，取值'pinch'。
   * @param { Callback<Pinch> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10 dynamic
   */
  function off(type: 'pinch', receiver?: Callback<Pinch>): void;

  /**
   * 取消监听全局触控板的捏合事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<Pinch> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offPinch(receiver?: Callback<Pinch>): void;

  /**
   * 监听全局触控板的捏合事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'pinch' } type - 输入设备事件类型，取值'pinch'。
   * @param { number } fingers - 捏合的手指数，取值范围：大于等于2。
   * @param { Callback<Pinch> } receiver - 回调函数，返回捏合输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 11 dynamic
   */
  function on(type: 'pinch', fingers: number, receiver: Callback<Pinch>): void;

  /**
   * 监听全局触控板的捏合事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { int } fingers - 捏合的手指数，手指数不能小于0，当前仅支持收到捏合手势的回调。
   * @param { Callback<Pinch> } receiver - 回调函数，异步上报捏合输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onPinch(fingers: int, receiver: Callback<Pinch>): void;

  /**
   * 取消监听全局触控板的捏合事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'pinch' } type - 输入设备事件类型，取值'pinch'。
   * @param { number } fingers - 捏合的手指数，取值范围：大于等于2。
   * @param { Callback<Pinch> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 11 dynamic
   */
  function off(type: 'pinch', fingers: number, receiver?: Callback<Pinch>): void;

  /**
   * 取消监听全局触控板的捏合事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { int } fingers - 捏合的手指数，手指数不能小于0，当前仅支持收到捏合手势的回调。
   * @param { Callback<Pinch> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offPinch(fingers: int, receiver?: Callback<Pinch>): void;

  /**
   * 监听全局触控板的旋转事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'rotate' } type - 输入设备事件类型，取值'rotate'。
   * @param { number } fingers - 旋转的手指数，目前支持监听手指数是2。
   * @param { Callback<Rotate> } receiver - 回调函数，返回旋转输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 11 dynamic
   */
  function on(type: 'rotate', fingers: number, receiver: Callback<Rotate>): void;

  /**
   * 监听全局触控板的旋转事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { int } fingers - 旋转的手指数，手指数不能小于0，当前仅支持收到旋转手势的回调。
   * @param { Callback<Rotate> } receiver - 回调函数，异步上报旋转输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onRotate(fingers: int, receiver: Callback<Rotate>): void;

  /**
   * 取消监听全局触控板的旋转事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'rotate' } type - 输入设备事件类型，取值'rotate'。
   * @param { number } fingers - 旋转的手指数，目前支持监听手指数是2。
   * @param { Callback<Rotate> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 11 dynamic
   */
  function off(type: 'rotate', fingers: number, receiver?: Callback<Rotate>): void;

  /**
   * 取消监听全局触控板的旋转事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { int } fingers - 旋转的手指数，手指数不能小于0，当前仅支持收到旋转手势的回调。
   * @param { Callback<Rotate> }[receiver] - Callback used to receive the reported data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offRotate(fingers: int, receiver?: Callback<Rotate>): void;

  /**
   * 监听全局触控板的三指滑动事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'threeFingersSwipe' } type - 输入设备事件类型，取值'threeFingersSwipe'。
   * @param { Callback<ThreeFingersSwipe> } receiver - 回调函数，返回三指滑动输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10 dynamic
   */
  function on(type: 'threeFingersSwipe', receiver: Callback<ThreeFingersSwipe>): void;

  /**
   * 监听全局触控板的三指滑动事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<ThreeFingersSwipe> } receiver - 回调函数，异步上报三指滑动输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onThreeFingersSwipe(receiver: Callback<ThreeFingersSwipe>): void;

  /**
   * 取消监听全局触控板的三指滑动事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'threeFingersSwipe' } type - 输入设备事件类型，取值'threeFingersSwipe'。
   * @param { Callback<ThreeFingersSwipe> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10 dynamic
   */
  function off(type: 'threeFingersSwipe', receiver?: Callback<ThreeFingersSwipe>): void;

  /**
   * 取消监听全局触控板的三指滑动事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<ThreeFingersSwipe> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offThreeFingersSwipe(receiver?: Callback<ThreeFingersSwipe>): void;

  /**
   * 监听全局触控板的四指滑动事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'fourFingersSwipe' } type - 输入设备事件类型，取值'fourFingersSwipe'。
   * @param { Callback<FourFingersSwipe> } receiver - 回调函数，返回四指滑动输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10 dynamic
   */
  function on(type: 'fourFingersSwipe', receiver: Callback<FourFingersSwipe>): void;

  /**
   * 监听全局触控板的四指滑动事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<FourFingersSwipe> } receiver - 回调函数，异步上报四指滑动输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onFourFingersSwipe(receiver: Callback<FourFingersSwipe>): void;

  /**
   * 取消监听全局触控板的四指滑动事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'fourFingersSwipe' } type - 输入设备事件类型，取值'fourFingersSwipe'。
   * @param { Callback<FourFingersSwipe> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10 dynamic
   */
  function off(type: 'fourFingersSwipe', receiver?: Callback<FourFingersSwipe>): void;

  /**
   * 取消监听全局触控板的四指滑动事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<FourFingersSwipe> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offFourFingersSwipe(receiver?: Callback<FourFingersSwipe>): void;

  /**
   * 监听全局触控板的三指轻点事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'threeFingersTap' } type - 输入设备事件类型，取值'threeFingersTap'。
   * @param { Callback<ThreeFingersTap> } receiver - 回调函数，返回三指轻点输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 11 dynamic
   */
  function on(type: 'threeFingersTap', receiver: Callback<ThreeFingersTap>): void;

  /**
   * 监听全局触控板的三指轻点事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<ThreeFingersTap> } receiver - 回调函数，异步上报三指轻点输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onThreeFingersTap(receiver: Callback<ThreeFingersTap>): void;

  /**
   * 取消监听全局触控板的三指轻点事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'threeFingersTap' } type - 输入设备事件类型，取值'threeFingersTap'。
   * @param { Callback<ThreeFingersTap> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 11 dynamic
   */
  function off(type: 'threeFingersTap', receiver?: Callback<ThreeFingersTap>): void;

  /**
   * 取消监听全局触控板的三指轻点事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<ThreeFingersTap> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offThreeFingersTap(receiver?: Callback<ThreeFingersTap>): void;

  /**
   * 监听指纹手势输入事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'fingerprint' } type - 输入事件类型，取唯一值'fingerprint'。
   * @param { Callback<FingerprintEvent> } receiver - 回调函数，返回指纹器件手势输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 12 dynamic
   */
  function on(type: 'fingerprint', receiver: Callback<FingerprintEvent>): void;

  /**
   * 监听指纹手势输入事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<FingerprintEvent> } receiver - 用于接收上报数据的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onFingerprint(receiver: Callback<FingerprintEvent>): void;

  /**
   * 取消监听指纹手势输入事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'fingerprint' } type - 输入事件类型，取值'fingerprint'。
   * @param { Callback<FingerprintEvent> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 12 dynamic
   */
  function off(type: 'fingerprint', receiver?: Callback<FingerprintEvent>): void;

  /**
   * 取消监听指纹手势输入事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<FingerprintEvent> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offFingerprint(receiver?: Callback<FingerprintEvent>): void;

  /**
   * 监听向内滑动事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'swipeInward' } type - 输入事件类型，取唯一值'SwipeInward'。
   * @param { Callback<SwipeInward> } receiver - 回调函数，返回向内滑动事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 12 dynamic
   */
  function on(type: 'swipeInward', receiver: Callback<SwipeInward>): void;

  /**
   * 监听向内滑动事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<SwipeInward> } receiver - 用于接收上报数据的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onSwipeInward(receiver: Callback<SwipeInward>): void;

  /**
   * 取消监听向内滑动事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'swipeInward' } type - 输入事件类型，取值'swipeInward'。
   * @param { Callback<SwipeInward> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 12 dynamic
   */
  function off(type: 'swipeInward', receiver?: Callback<SwipeInward>): void;

  /**
   * 取消监听向内滑动事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<SwipeInward> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offSwipeInward(receiver?: Callback<SwipeInward>): void;

  /**
   * 监听触摸屏滑动手势事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'touchscreenSwipe' } type - 输入设备事件类型，取值'touchscreenSwipe'。
   * @param { number } fingers - 滑动手势的手指数，取值范围：[3,5]。
   * @param { Callback<TouchGestureEvent> } receiver - 回调函数，返回触摸屏滑动手势事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 18 dynamic
   */
  function on(type: 'touchscreenSwipe', fingers: number, receiver: Callback<TouchGestureEvent>): void;

  /**
   * 监听触摸屏滑动手势事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { int } fingers - 滑动手势的手指数，取值范围：[3,5]。
   * @param { Callback<TouchGestureEvent> } receiver - 回调函数，异步上报触摸屏滑动手势事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onTouchscreenSwipe(fingers: int, receiver: Callback<TouchGestureEvent>): void;

  /**
   * 取消监听触摸屏滑动手势事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'touchscreenSwipe' } type - 输入设备事件类型，取值'touchscreenSwipe'。
   * @param { number } fingers - 滑动手势的手指数，取值范围：[3,5]。
   * @param { Callback<TouchGestureEvent> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 18 dynamic
   */
  function off(type: 'touchscreenSwipe', fingers: number, receiver?: Callback<TouchGestureEvent>): void;

  /**
   * 取消监听触摸屏滑动手势事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { int } fingers - 滑动手势的手指数，取值范围：[3,5]。
   * @param { Callback<TouchGestureEvent> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offTouchscreenSwipe(fingers: int, receiver?: Callback<TouchGestureEvent>): void;

  /**
   * 监听触摸屏捏合手势事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'touchscreenPinch' } type - 输入设备事件类型，取值'touchscreenPinch'。
   * @param { number } fingers - 捏合手势的手指数，取值范围：[4,5]。
   * @param { Callback<TouchGestureEvent> } receiver - 回调函数，返回触摸屏捏合手势事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 18 dynamic
   */
  function on(type: 'touchscreenPinch', fingers: number, receiver: Callback<TouchGestureEvent>): void;

  /**
   * 监听触摸屏捏合手势事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { int } fingers - 捏合手势的手指数，取值范围：[4,5]。
   * @param { Callback<TouchGestureEvent> } receiver - 回调函数，异步上报触摸屏捏合手势事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onTouchscreenPinch(fingers: int, receiver: Callback<TouchGestureEvent>): void;

  /**
   * 取消监听触摸屏捏合手势事件。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'touchscreenPinch' } type - 输入设备事件类型，取值'touchscreenPinch'。
   * @param { number } fingers - 捏合手势的手指数，取值范围：[4,5]。
   * @param { Callback<TouchGestureEvent> } receiver - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 18 dynamic
   */
  function off(type: 'touchscreenPinch', fingers: number, receiver?: Callback<TouchGestureEvent>): void;

  /**
   * 取消监听触摸屏捏合手势事件。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { int } fingers - 捏合手势的手指数，取值范围：[4,5]。
   * @param { Callback<TouchGestureEvent> } [receiver] - 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offTouchscreenPinch(fingers: int, receiver?: Callback<TouchGestureEvent>): void;

  /**
   * 监听指定按键的按下抬起事件，支持监听META_LEFT键、META_RIGHT键、电源键、音量键。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'keyPressed' } type - 按键事件类型，取唯一值'keyPressed'。
   * @param { Array<KeyCode> }  keys - 键值，支持如下键值：KEYCODE_META_LEFT、KEYCODE_META_RIGHT、KEYCODE_POWER、KEYCODE_VOLUME_DOWN、
   *     KEYCODE_VOLUME_UP。
   * @param { Callback<KeyEvent> } receiver - 回调函数，返回按键输入事件。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4100001 - Event listening not supported for the key.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 15 dynamic
   */
  function on(type: 'keyPressed', keys: Array<KeyCode>, receiver: Callback<KeyEvent>): void;

  /**
   * 监听指定按键的按下抬起事件，支持监听META_LEFT键、META_RIGHT键、电源键、音量键。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Array<KeyCode> }  keys - 按键码列表，支持如下取值：KEYCODE_META_LEFT、KEYCODE_META_RIGHT、KEYCODE_POWER、
   *     KEYCODE_VOLUME_DOWN、KEYCODE_VOLUME_UP。
   * @param { Callback<KeyEvent> } receiver - 用于接收上报数据的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4100001 - Event listening not supported for the key.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onKeyPressed(keys: Array<KeyCode>, receiver: Callback<KeyEvent>): void;

  /**
   * 取消监听按键按下抬起事件。支持取消监听META_LEFT键、META_RIGHT键、电源键、音量键。需和inputMonitor.on('keyPressed')配套使用。使用callback异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'keyPressed' } type - 按键事件类型，取唯一值'keyPressed'。
   * @param { Callback<KeyEvent> } receiver - 需要取消监听的回调函数。若不填，取消应用所有按键监听的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 15 dynamic
   */
  function off(type: 'keyPressed', receiver?: Callback<KeyEvent>): void;

  /**
   * 取消监听按键按下抬起事件。支持取消监听META_LEFT键、META_RIGHT键、电源键、音量键。需和inputMonitor.on('keyPressed')配套使用。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { Callback<KeyEvent> } [receiver] - 需要取消监听的回调函数。若不填，取消应用所有按键监听的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offKeyPressed(receiver?: Callback<KeyEvent>): void;

  /**
   * 查询最近的触屏输入事件，最多支持查询100条事件，从API版本26.0.0开始，最多支持查询60条事件，使用Promise异步回调。
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { int } count - 需要查询的触屏输入事件数量，取值范围为0到100的整数。小于0时取值为0、大于100时取值为100。从API版本26.0.0开始，大于60时取值为60。如果实际触屏输入事件只有30个，
   *     但该参数取值为50 ，则仅支持查询到30个触屏输入事件。
   * @returns { Promise<Array<TouchEvent>> } Promise对象，返回查询到的触屏输入事件。包含以下有效信息，其余均为无效信息：<br/>- actionTime：触屏输入事件发生的时间，表示系统
   *     启动运行至今逝去的微秒数，单位为微秒（μs）。<br/>- [SourceType]{@link @ohos.multimodalInput.touchEvent:SourceType}：触摸来源的设备类型。<br/>-
   *     [isInject]{@link @ohos.multimodalInput.touchEvent:TouchEvent}：表示该触屏输入事件是否为注入事件。<br/>- pressure：压力值，取值范围是
   *     [0.0, 1.0]，0.0表示不支持。<br/>- tiltX：相对YZ平面的角度，取值的范围[-90, 90]，其中正值是向右倾斜。<br/>- tiltY：相对XZ平面的角度，取值的范围[-90, 90]，其中正值是
   *     向下倾斜。<br/>从API version 23开始，可以额外获取以下有效信息：<br/>- [Action]{@link @ohos.multimodalInput.touchEvent:Action}：触屏输入事件类
   *     型。<br/>- screenX：相对于屏幕左上角的X轴坐标，单位为像素，取值范围[0, 屏幕宽度]，向右递增。仅限指定应用获取。<br/>- screenY：相对于屏幕左上角的Y轴坐标，单位为像素，取值范围
   *     [0, 屏幕高度]，向下递增。仅限指定应用获取。<br/>从API版本26.0.0开始，最多支持查询60条事件，且不会返回MOVE和PULL_MOVE类型的事件。screenX和screenY不再限制指定应用获取，所有系统
   *     应用均可获取。同时可以额外获取以下有效信息：<br/>- screenId：目标屏幕ID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 20 dynamic
   * @since 23 static
   */
  function queryTouchEvents(count: int) : Promise<Array<TouchEvent>>;
}

export default inputMonitor;