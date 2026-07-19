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
 * Display status of **nextLabel** in the stepper.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 */
declare enum ItemState {

  /**
   * The button on the right is clickable and can navigate users to the next **StepperItem** when it is clicked.
   *
   * **NOTE**
   *
   * This API is supported since API version 8 and deprecated since API version 22. You are advised to use
   * [index]{@link SwiperAttribute#index} instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#index
   */
  Normal,

  /**
   * The button on the right is disabled.
   *
   * **NOTE**
   *
   * This API is supported since API version 8 and deprecated since API version 22. You are advised to use
   * [indicatorInteractive]{@link SwiperAttribute#indicatorInteractive} instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#indicatorInteractive
   */
  Disabled,

  /**
   * The button on the right is not displayed, and a progress bar is displayed instead.
   *
   * **NOTE**
   *
   * This API is supported since API version 8 and deprecated since API version 22. You are advised to use
   * [Swiper]{@link swiper} instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper
   */
  Waiting,

  /**
   * The button on the right reads "Skip" by default. You can define the processing logic for this state in the
   * **onSkip** callback of the stepper.
   *
   * **NOTE**
   *
   * This API is supported since API version 8 and deprecated since API version 22. You are advised to use
   * [index]{@link SwiperAttribute#index} instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#index
   */
  Skip
}

/**
 * The **StepperItem** component represents a page component used within a [Stepper]{@link stepper} container.
 *
 * > **NOTE**
 *
 * > - This component is supported since API version 8 and deprecated since API version 22. You are advised to use
 * > [Swiper]{@link swiper} instead.
 *
 * > Updates will be marked with a superscript to indicate their
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper#SwiperInterface
 * @noninterop
 */
interface StepperItemInterface {

  /**
   * Creates a page component for the [Stepper]{@link stepper} container.
   *
   * > **NOTE**
   *
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper#SwiperAttribute
   */
  (): StepperItemAttribute;
}

/**
 * Defines StepperItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper#SwiperAttribute
 * @noninterop
 */
declare class StepperItemAttribute extends CommonMethod<StepperItemAttribute> {

  /**
   * Sets the text label of the button on the left, which is not displayed on the first page. When the **Stepper**
   * contains more than one page, the default value for all pages except the first page is **Back**.
   *
   * > **NOTE**
   *
   * @param { string } value - Text label of the button on the left. When the string is too long, it is scaled down,
   *     wrapped in two lines, and then clipped.
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperController#showPrevious
   */
  prevLabel(value: string): StepperItemAttribute;

  /**
   * Sets the text label of the button on the right. The default value is **Start** for the last page and **Next** for
   * the other pages.
   *
   * > **NOTE**
   *
   * @param { string } value - Text label of the button on the right. When the string is too long, it is scaled down,
   *     wrapped in two lines, and then clipped.
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperController#showNext
   */
  nextLabel(value: string): StepperItemAttribute;

  /**
   * Sets the display status of **nextLabel** in the stepper.
   *
   * > **NOTE**
   *
   * @param { ItemState } value - Display status of **nextLabel** in the stepper.<br>Default value: **ItemState.Normal**
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 22
   * @useinstead Swiper.SwiperAttribute#indicatorInteractive
   */
  status(value?: ItemState): StepperItemAttribute;
}

/**
 * Defines StepperItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 * @noninterop
 */
declare const StepperItemInstance: StepperItemAttribute;

/**
 * The **StepperItem** component represents a page component used within a [Stepper]{@link stepper} container.
 *
 * > **NOTE**
 *
 * > - This component is supported since API version 8 and deprecated since API version 22. You are advised to use
 * > [Swiper]{@link swiper} instead.
 *
 * > Updates will be marked with a superscript to indicate their
 *
 * ###### Child Components
 *
 * This component supports only one child component.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 22
 * @useinstead Swiper
 * @noninterop
 */
declare const StepperItem: StepperItemInterface;