/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
* 步骤导航器组件，适用于引导用户按照步骤完成任务的导航场景。
*
* > **说明：**
*
* > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link swiper}替代。详细示例请参考
* > [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-stepper.md#示例2使用swiper替代stepper)。
*
 * @interface StepperInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper#SwiperInterface
 * @noninterop
 */
interface StepperInterface {

  /**
   * Called when the stepper component is used.
   *
   * @param { object } value - Index of the **StepperItem** that is currently displayed.<br>Default value: **0**<br>
   *     Since API version 10, this parameter supports two-way binding through
   *     [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#index
   */
  (value?: { index?: number }): StepperAttribute;
}

/**
* 无
*
 * @extends CommonMethod<StepperAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper#SwiperAttribute
 * @noninterop
 */
declare class StepperAttribute extends CommonMethod<StepperAttribute> {

  /**
   * Callback when the finish label is clicked.
   *
   * @param { function } callback - Invoked when the **nextLabel** of the last **StepperItem** in the **Stepper** is
   *     clicked and the **ItemState** attribute is set to **Normal**.
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onFinish(callback: () => void): StepperAttribute;

  /**
   * Callback when the skip label is clicked.
   *
   * @param { function } callback - Invoked when the current **StepperItem** is **ItemState.Skip** and the **nextLabel**
   *     is clicked.
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onSkip(callback: () => void): StepperAttribute;

  /**
   * Callback when the change label is clicked.
   *
   * @param { function } callback - Callback triggered when the page is switched.<br/>prevIndex: Index of the step page
   *     before the switching.<br>Value range:
   *     [0, +∞).<br/>index: Index of the step page after the switching, that is, index of the previous or next page.
   *     <br>Value range: [0, +∞).
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onChange(callback: (prevIndex: number, index: number) => void): StepperAttribute;

  /**
   * Callback when the next label is clicked.
   *
   * @param { function } callback - Callback triggered when the page is switched.<br/>index: Index of the current step
   *     page.<br/>pendingIndex: Index of the next step page.
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onNext(callback: (index: number, pendingIndex: number) => void): StepperAttribute;

  /**
   * Callback when the previous label is clicked.
   *
   * @param { function } callback - Callback triggered when the page is switched.<br/>index: Index of the current step
   *     page.<br/>pendingIndex: Index of the next step page.
   * @returns { StepperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#onChange
   */
  onPrevious(callback: (index: number, pendingIndex: number) => void): StepperAttribute;
}

/**
* 步骤导航器组件，适用于引导用户按照步骤完成任务的导航场景。
*
* > **说明：**
*
* > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link swiper}替代。详细示例请参考
* > [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-stepper.md#示例2使用swiper替代stepper)。
*
* ###### 子组件
*
* 仅能包含子组件[StepperItem]{@link stepper_item}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 * @noninterop
 */
declare const Stepper: StepperInterface;

/**
 * Defines Stepper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Stepper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Stepper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 * @noninterop
 */
declare const StepperInstance: StepperAttribute;