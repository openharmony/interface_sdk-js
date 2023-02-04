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
 * Provides methods for switching components.
 * @since 7
 */
/**
 * Provides methods for switching components.
 * @form
 * @systemapi
 * @since 9
 */
declare class SwiperController {
  /**
   * constructor.
   * @since 7
   */
  /**
   * constructor.
   * @form
   * @since 9
   */
  constructor();

  /**
   * Called when the next child component is displayed.
   * @since 7
   */
  /**
   * Called when the next child component is displayed.
   * @form
   * @since 9
   */
  showNext();

  /**
   * Called when the previous subcomponent is displayed.
   * @since 7
   */
  /**
   * Called when the previous subcomponent is displayed.
   * @form
   * @since 9
   */
  showPrevious();

  /**
   * Called when need to stop the swiper animation.
   * @since 7
   */
  /**
   * Called when need to stop the swiper animation.
   * @form
   * @since 9
   */
  finishAnimation(callback?: () => void);
}

/**
 * Declare the size of the swiper on the spindle.
 * @since 7
 */
/**
 * Declare the size of the swiper on the spindle.
 * @form
 * @systemapi
 * @since 9
 */
declare enum SwiperDisplayMode {
  /**
   * Carousel map extension.
   * @since 7
   */
  /**
   * Carousel map extension.
   * @form
   * @since 9
   */
  Stretch,

  /**
   * The rotation chart is self linear.
   * @since 7
   */
  /**
   * The rotation chart is self linear.
   * @form
   * @since 9
   */
  AutoLinear,
}

/**
 * Provides an interface for sliding containers.
 * @since 7
 */
/**
 * Provides an interface for sliding containers.
 * @form
 * @systemapi
 * @since 9
 */
interface SwiperInterface {
  /**
   * Called when a sliding container is set.
   * @since 7
   */
  /**
   * Called when a sliding container is set.
   * @form
   * @since 9
   */
  (controller?: SwiperController): SwiperAttribute;
}

/**
 * Setting indicator style navigation.
 * @since 8
 */
/**
 * Setting indicator style navigation.
 * @form
 * @systemapi
 * @since 9
 */
declare interface IndicatorStyle {
  /**
   * Set the indicator to the left.
   * @since 8
   */
  /**
   * Set the indicator to the left.
   * @form
   * @since 9
   */
  left?: Length;

  /**
   * Set the indicator to the top.
   * @since 8
   */
  /**
   * Set the indicator to the top.
   * @form
   * @since 9
   */
  top?: Length;

  /**
   * Set the indicator to the right.
   * @since 8
   */
  /**
   * Set the indicator to the right.
   * @form
   * @since 9
   */
  right?: Length;

  /**
   * Set the indicator to the bottom.
   * @since 8
   */
  /**
   * Set the indicator to the bottom.
   * @form
   * @since 9
   */
  bottom?: Length;

  /**
   * Set the indicator size.
   * @since 8
   */
  /**
   * Set the indicator size.
   * @form
   * @since 9
   */
  size?: Length;

  /**
   * Setting indicator style mask.
   * @since 8
   */
  /**
   * Setting indicator style mask.
   * @form
   * @since 9
   */
  mask?: boolean;

  /**
   * Set the indicator color.
   * @since 8
   */
  /**
   * Set the indicator color.
   * @form
   * @since 9
   */
  color?: ResourceColor;

  /**
   * Set the navigation point color.
   * @since 8
   */
  /**
   * Set the navigation point color.
   * @form
   * @since 9
   */
  selectedColor?: ResourceColor;
}

/**
 * Defines the swiper attribute functions.
 * @since 7
 */
/**
 * Defines the swiper attribute functions.
 * @form
 * @systemapi
 * @since 9
 */
declare class SwiperAttribute extends CommonMethod<SwiperAttribute> {
  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   * @since 7
   */
  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   * @form
   * @since 9
   */
  index(value: number): SwiperAttribute;

  /**
   * Called when setting whether the subcomponent plays automatically.
   * @since 7
   */
  /**
   * Called when setting whether the subcomponent plays automatically.
   * @form
   * @since 9
   */
  autoPlay(value: boolean): SwiperAttribute;

  /**
   * Called when the time interval for automatic playback is set.
   * @since 7
   */
  /**
   * Called when the time interval for automatic playback is set.
   * @form
   * @since 9
   */
  interval(value: number): SwiperAttribute;

  /**
   * Called when you set whether the navigation point indicator is enabled.
   * @since 7
   */
  /**
   * Called when you set whether the navigation point indicator is enabled.
   * @form
   * @since 9
   */
  indicator(value: boolean): SwiperAttribute;

  /**
   * Called when setting whether to turn on cyclic sliding.
   * @since 7
   */
  /**
   * Called when setting whether to turn on cyclic sliding.
   * @form
   * @since 9
   */
  loop(value: boolean): SwiperAttribute;

  /**
   * Called when the animation duration of the switch is set.
   * @since 7
   */
  /**
   * Called when the animation duration of the switch is set.
   * @form
   * @since 9
   */
  duration(value: number): SwiperAttribute;

  /**
   * Called when setting whether to slide vertically.
   * @since 7
   */
  /**
   * Called when setting whether to slide vertically.\
   * @form
   * @since 9
   */
  vertical(value: boolean): SwiperAttribute;

  /**
   * Called when the size of the rotation chart is set.
   * @since 7
   */
  /**
   * Called when the size of the rotation chart is set.
   * @form
   * @since 9
   */
  itemSpace(value: number | string): SwiperAttribute;

  /**
   * Called when setting the size of the swiper container on the spindle.
   * @since 7
   */
  /**
   * Called when setting the size of the swiper container on the spindle.
   * @form
   * @since 9
   */
  displayMode(value: SwiperDisplayMode): SwiperAttribute;

  /**
   * Called when setting the cached count of the swiper container one side.
   * @since 8
   */
  /**
   * Called when setting the cached count of the swiper container one side.
   * @form
   * @since 9
   */
  cachedCount(value: number): SwiperAttribute;

  /**
   * This command is invoked when the number of subcomponents is set.
   * @since 8
   */
  /**
   * This command is invoked when the number of subcomponents is set.
   * @form
   * @since 9
   */
  displayCount(value: number | string): SwiperAttribute;

  /**
   * Invoked when setting the sliding effect
   * @since 8
   */
  /**
   * Invoked when setting the sliding effect
   * @form
   * @since 9
   */
  effectMode(value: EdgeEffect): SwiperAttribute;

  /**
   * Called when sliding is disableSwipe
   * @since 8
   */
  /**
   * Called when sliding is disableSwipe
   * @form
   * @since 9
   */
  disableSwipe(value: boolean): SwiperAttribute;

  /**
   * Called when sliding is curve
   * @since 8
   */
  /**
   * Called when sliding is curve
   * @form
   * @since 9
   */
  curve(value: Curve | string): SwiperAttribute;
  /**
   * Called when the index value changes.
   * @since 7
   */
  /**
   * Called when the index value changes.
   * @form
   * @since 9
   */
  onChange(event: (index: number) => void): SwiperAttribute;

  /**
   * Setting indicator style navigation.
   * @since 8
   */
  /**
   * Setting indicator style navigation.
   * @form
   * @since 9
   */
  indicatorStyle(value?: IndicatorStyle): SwiperAttribute;

  /**
   * Called when the swiper animation start.
   * @param { number } index - the index value of the swiper page that when animation start.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when the swiper animation start.
   * @param { number } index - the index value of the swiper page that when animation start.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  onAnimationStart(event: (index: number) => void): SwiperAttribute;

  /**
   * Called when the swiper animation end.
   * @param { number } index - the index value of the swiper page that when animation end.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when the swiper animation end.
   * @param { number } index - the index value of the swiper page that when animation end.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  onAnimationEnd(event: (index: number) => void): SwiperAttribute;
}

declare const Swiper: SwiperInterface;
declare const SwiperInstance: SwiperAttribute;
