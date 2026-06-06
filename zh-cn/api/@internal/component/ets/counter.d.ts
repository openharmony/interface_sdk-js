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
* 计数器组件，提供相应的增加或者减少的计数操作。
*
* > **说明：**
*
* > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
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
   * 创建计数器组件。
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
* 除支持[通用属性]{@link common}外，还支持以下属性。
*
* 除支持[通用事件]{@link common}外，还支持以下事件。
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
   * 监听数值增加事件。
   *
   * @param { function } event - Callback invoked when the value increases. [since 7 - 17]
   * @param { VoidCallback } event - Counter数值增加的回调函数。 [since 18]
   * @returns { CounterAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onInc(event: VoidCallback): CounterAttribute;

  /**
   * 监听数值减少事件。
   *
   * @param { function } event - Callback invoked when the value decreases. [since 7 - 17]
   * @param { VoidCallback } event - Counter数值减少的回调函数。 [since 18]
   * @returns { CounterAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onDec(event: VoidCallback): CounterAttribute;

  /**
   * 设置“减少”按钮的禁用或使能。
   *
   * @param { boolean } value - “减少”按钮禁用或使能。<br/>默认值：true，true表示使能“减少”按钮，false表示禁用“减少”按钮。
   * @returns { CounterAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableDec(value: boolean): CounterAttribute;

  /**
   * 设置“增加”按钮的禁用或使能。
   *
   * @param { boolean } value - “增加”按钮禁用或使能。<br/>默认值：true，true表示使能“增加”按钮，false表示禁用“增加”按钮。
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
* 定义Counter组件实例。
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
* 计数器组件，提供相应的增加或者减少的计数操作。
*
* > **说明：**
*
* > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
*
* ###### 子组件
*
* 可以包含子组件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Counter: CounterInterface;