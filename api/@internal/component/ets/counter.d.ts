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
 * @file
 * @kit ArkUI
 */

/**
 * The **Counter** component provides increment and decrement operations. It is suitable for scenarios that require
 * frequent value changes, such as product quantity selection and parameter adjustment, helping users adjust values
 * quickly and intuitively.
 *
 * > **NOTE**
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface CounterInterface {

  /**
   * Create Counter component.
   *
   * @returns { CounterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (): CounterAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class CounterAttribute extends CommonMethod<CounterAttribute> {
  /**
   * Invoked when the value increases.
   *
   * @param { function } event - Callback invoked when the counter value increases. [since 7 - 17]
   * @param { VoidCallback } event - Callback invoked when the counter value increases. [since 18]
   * @returns { CounterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onInc(event: VoidCallback): CounterAttribute;

  /**
   * Invoked when the value decreases.
   *
   * @param { function } event - Callback invoked when the value of the Counter decreases. [since 7 - 17]
   * @param { VoidCallback } event - Callback invoked when the value of the Counter decreases. [since 18]
   * @returns { CounterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onDec(event: VoidCallback): CounterAttribute;

  /**
   * Sets whether to enable the decrement button.
   *
   * @param { boolean } value - Whether to enable or disable the decrement button.
   *     <br>Default value: **true**, which means the decrement button is enabled; **false** means the decrement button
   *     is disabled.
   * @returns { CounterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableDec(value: boolean): CounterAttribute;

  /**
   * Sets whether to enable the increment button.
   *
   * @param { boolean } value - Whether to disable or enable the increment button.
   *     <br>Default value: **true**, which means the increment button is enabled; **false** means the button is
   *     disabled.
   * @returns { CounterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableInc(value: boolean): CounterAttribute;
}

/**
 * Defines Counter Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const CounterInstance: CounterAttribute;

/**
 * The **Counter** component provides increment and decrement operations. It is suitable for scenarios that require
 * frequent value changes, such as product quantity selection and parameter adjustment, helping users adjust values
 * quickly and intuitively.
 *
 * > **NOTE**
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * ###### Child Components
 *
 * Supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Counter: CounterInterface;