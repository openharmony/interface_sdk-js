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
declare class SwiperController {
  /**
   * constructor.
   * @since 7
   */
  constructor();

  /**
   * Called when the next child component is displayed.
   * @since 7
   */
  showNext();

  /**
   * Called when the previous subcomponent is displayed.
   * @since 7
   */
  showPrevious();

  /**
   * Called when need to stop the swiper animation.
   * @since 7
   */
  finishAnimation(callback?: () => void);
}

/**
 * Defines the indicator class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class Indicator<T> {
  /**
   * Set the indicator to the left.
   * @param { Length } value - the indicator to the left.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  left(value: Length): T;

  /**
   * Set the indicator to the top.
   * @param { Length } value - the indicator to the left.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  top(value: Length): T;

  /**
   * Set the indicator to the right.
   * @param { Length } value - the indicator to the right.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  right(value: Length): T;

  /**
   * Set the indicator to the bottom.
   * @param { Length } value - the indicator to the bottom.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  bottom(value: Length): T;

  /**
   * DotIndicator class object.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  static dot(): DotIndicator;

  /**
   * DigitIndicator class object.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  static digit(): DigitIndicator;
}

/**
 * Define DotIndicator, the indicator type is dot.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class DotIndicator extends Indicator<DotIndicator> {
  /**
   * Constructor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  constructor();

  /**
   * Set the indicator item width.
   * @default 6vp
   * @param { Length } value - the indicator item width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  itemWidth(value: Length): DotIndicator;

  /**
   * Set the indicator item height.
   * @default 24vp
   * @param { Length } value - the indicator item height.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  itemHeight(value: Length): DotIndicator;

  /**
   * Set the indicator item width.
   * @default 6vp
   * @param { Length } value - the indicator item width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedItemWidth(value: Length): DotIndicator;

  /**
   * Set the indicator item height when selected.
   * @default 24vp
   * @param { Length } value - the indicator item height when selected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedItemHeight(value: Length): DotIndicator;

  /**
   * Setting indicator style mask.
   * @default false
   * @param { boolean } value - the indicator item mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  mask(value: boolean): DotIndicator;

  /**
   * Set the indicator color.
   * @default #007DFF
   * @param { ResourceColor } value - the indicator item color.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  color(value: ResourceColor): DotIndicator;

  /**
   * Set the navigation point color.
   * @default 10%#182431
   * @param { ResourceColor } value - the indicator item when selected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedColor(value: ResourceColor): DotIndicator;
}

/**
 * Define DigitIndicator, the indicator type is digit.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class DigitIndicator extends Indicator<DigitIndicator> {
  /**
   * Constructor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  constructor();

  /**
   * Set the digital indicator font size when selected.
   * @default 14sp
   * @param { ResourceColor } fontColor - the indicator font size.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor(value: ResourceColor): DigitIndicator;

  /**
   * Set the digital indicator font size when selected.
   * @default 14sp
   * @param { ResourceColor } selectedFontColor - the indicator font size when selected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedFontColor(value: ResourceColor): DigitIndicator;

  /**
   * Set the digital indicator font (just support fontSize and fontWeight).
   * @param { digitFont } value - the indicator font color.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  digitFont(value: Font): DigitIndicator;

  /**
   * Set the digital indicator font (just support fontSize and fontWeight).
   * @param { selectedDigitFont } value - the indicator font color when selected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedDigitFont(value: Font): DigitIndicator;
}

/**
 * Declare the size of the swiper on the spindle.
 * @since 7
 */
declare enum SwiperDisplayMode {
  /**
   * Carousel map extension.
   * @since 7
   */
  Stretch,

  /**
   * The rotation chart is self linear.
   * @since 7
   */
  AutoLinear,
}

/**
 * Provides an interface for sliding containers.
 * @since 7
 */
interface SwiperInterface {
  /**
   * Called when a sliding container is set.
   * @since 7
   */
  (controller?: SwiperController): SwiperAttribute;
}

/**
 * Setting indicator style navigation.
 * @since 8
 * @deprecated since 10
 */
declare interface IndicatorStyle {
  /**
   * Set the indicator to the left.
   * @since 8
   */
  left?: Length;

  /**
   * Set the indicator to the top.
   * @since 8
   */
  top?: Length;

  /**
   * Set the indicator to the right.
   * @since 8
   */
  right?: Length;

  /**
   * Set the indicator to the bottom.
   * @since 8
   */
  bottom?: Length;

  /**
   * Set the indicator size.
   * @since 8
   */
  size?: Length;

  /**
   * Setting indicator style mask.
   * @since 8
   */
  mask?: boolean;

  /**
   * Set the indicator color.
   * @since 8
   */
  color?: ResourceColor;

  /**
   * Set the navigation point color.
   * @since 8
   */
  selectedColor?: ResourceColor;
}

/**
 * Defines the swiper attribute functions.
 * @since 7
 */
declare class SwiperAttribute extends CommonMethod<SwiperAttribute> {
  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   * @since 7
   */
  index(value: number): SwiperAttribute;

  /**
   * Called when setting whether the subcomponent plays automatically.
   * @since 7
   */
  autoPlay(value: boolean): SwiperAttribute;

  /**
   * Called when the time interval for automatic playback is set.
   * @since 7
   */
  interval(value: number): SwiperAttribute;

  /**
   * Called when you set whether the navigation point indicator is enabled.
   * @param { boolean } value - show indicator of the swiper indicator.
   * @since 7
   */
  /**
   * Set indicator is enabled, or set type style.
   * @param { DotIndicator | DigitIndicator | boolean } value - the style value or show indicator of the swiper indicator.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  indicator(value: DotIndicator | DigitIndicator | boolean): SwiperAttribute;

  /**
   * Called when setting whether to turn on cyclic sliding.
   * @since 7
   */
  loop(value: boolean): SwiperAttribute;

  /**
   * Called when the animation duration of the switch is set.
   * @since 7
   */
  duration(value: number): SwiperAttribute;

  /**
   * Called when setting whether to slide vertically.
   * @since 7
   */
  vertical(value: boolean): SwiperAttribute;

  /**
   * Called when the size of the rotation chart is set.
   * @since 7
   */
  itemSpace(value: number | string): SwiperAttribute;

  /**
   * Called when setting the size of the swiper container on the spindle.
   * @since 7
   */
  displayMode(value: SwiperDisplayMode): SwiperAttribute;

  /**
   * Called when setting the cached count of the swiper container one side.
   * @since 8
   */
  cachedCount(value: number): SwiperAttribute;

  /**
   * This command is invoked when the number of subcomponents is set.
   * @since 8
   */
  displayCount(value: number | string): SwiperAttribute;

  /**
   * Invoked when setting the sliding effect
   * @since 8
   */
  effectMode(value: EdgeEffect): SwiperAttribute;

  /**
   * Called when sliding is disableSwipe
   * @since 8
   */
  disableSwipe(value: boolean): SwiperAttribute;

  /**
   * Called when sliding is curve
   * @since 8
   */
  curve(value: Curve | string): SwiperAttribute;
  /**
   * Called when the index value changes.
   * @since 7
   */
  onChange(event: (index: number) => void): SwiperAttribute;

  /**
   * Setting indicator style navigation.
   * @since 8
   * @deprecated since 10
   */
  indicatorStyle(value?: IndicatorStyle): SwiperAttribute;

  /**
   * Called when the swiper animation start.
   * @param { number } index - the index value of the swiper page that when animation start.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  onAnimationStart(event: (index: number) => void): SwiperAttribute;

  /**
   * Called when the swiper animation end.
   * @param { number } index - the index value of the swiper page that when animation end.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  onAnimationEnd(event: (index: number) => void): SwiperAttribute;
}

/**
 * Defines Swiper Component.
 * @since 7
 */
declare const Swiper: SwiperInterface;

/**
 * Defines Swiper Component instance.
 * @since 7
 */
declare const SwiperInstance: SwiperAttribute;
