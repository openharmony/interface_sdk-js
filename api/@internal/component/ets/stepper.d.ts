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
 * The **Stepper** component provides a step navigator, suitable for guiding users through a step-by-step task
 * completion process.
 *
 * > **NOTE**
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
   * Creates a **Stepper** component.
   *
   * > **NOTE**
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
 * Defines the stepper attribute functions
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
   * Triggered when [nextLabel]{@link StepperItemAttribute#nextLabel} of the last [StepperItem]{@link stepper_item} in
   * the stepper is clicked and the [ItemState]{@link ItemState} attribute is **Normal**.
   *
   * > **NOTE**
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
   * Triggered when [nextLabel]{@link StepperItemAttribute#nextLabel} is clicked and the
   * [StepperItem]{@link stepper_item} status is **ItemState.Skip**.
   *
   * > **NOTE**
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
   * Triggered when the step navigation switches by clicking [prevLabel]{@link StepperItemAttribute#prevLabel} of the
   * **StepperItem** component; or when clicking [nextLabel]{@link StepperItemAttribute#nextLabel} of the current
   * **StepperItem** component, provided that the current page is not the last **StepperItem** in the stepper and the
   * [ItemState]{@link ItemState} attribute is **Normal**.
   *
   * > **NOTE**
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
   * Triggered when switching to the next step by clicking [nextLabel]{@link StepperItemAttribute#nextLabel} of a
   * **StepperItem**, provided that the current page is not the last **StepperItem** in the stepper and the
   * [ItemState]{@link ItemState} attribute is **Normal**.
   *
   * > **NOTE**
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
   * Triggered when switching to the previous step by clicking [prevLabel]{@link StepperItemAttribute#prevLabel} of a
   * **StepperItem**.
   *
   * > **NOTE**
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
 * The **Stepper** component provides a step navigator, suitable for guiding users through a step-by-step task
 * completion process.
 *
 * > **NOTE**
 *
 *
 * ###### Child Components
 *
 * Only the child component [StepperItem]{@link stepper_item} is supported.
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