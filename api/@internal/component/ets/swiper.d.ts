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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class SwiperController {
  /**
   * constructor.
   * @since 7
   */
  /**
   * constructor.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Called when the next child component is displayed.
   * @since 7
   */
  /**
   * Called when the next child component is displayed.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  showNext();

  /**
   * Called when the previous subcomponent is displayed.
   * @since 7
   */
  /**
   * Called when the previous subcomponent is displayed.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  showPrevious();

  /**
   * Called when need to stop the swiper animation.
   * @since 7
   */
  /**
   * Called when need to stop the swiper animation.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  finishAnimation(callback?: () => void);
}

/**
 * Defines the indicator class.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class Indicator<T> {
  /**
   * Set the indicator to the left.
   * @param { Length } value - the indicator to the left.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  left(value: Length): T;

  /**
   * Set the indicator to the top.
   * @param { Length } value - the indicator to the top.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  top(value: Length): T;

  /**
   * Set the indicator to the right.
   * @param { Length } value - the indicator to the right.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  right(value: Length): T;

  /**
   * Set the indicator to the bottom.
   * @param { Length } value - the indicator to the bottom.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  bottom(value: Length): T;

  /**
   * DotIndicator class object.
   * @static
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static dot(): DotIndicator;

  /**
   * DigitIndicator class object.
   * @static
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  static digit(): DigitIndicator;
}

/**
 * Define DotIndicator, the indicator type is dot.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class DotIndicator extends Indicator<DotIndicator> {
  /**
   * Constructor.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Set the indicator item width.
   * @default 6vp
   * @param { Length } value - the indicator item width.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  itemWidth(value: Length): DotIndicator;

  /**
   * Set the indicator item height.
   * @default 6vp
   * @param { Length } value - the indicator item height.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  itemHeight(value: Length): DotIndicator;

  /**
   * Set the indicator item width when selected.
   * @default 12vp
   * @param { Length } value - the indicator item width when selected.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedItemWidth(value: Length): DotIndicator;

  /**
   * Set the indicator item height when selected.
   * @default 6vp
   * @param { Length } value - the indicator item height when selected.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedItemHeight(value: Length): DotIndicator;

  /**
   * Setting indicator style mask.
   * @default false
   * @param { boolean } value - the indicator item mask.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  mask(value: boolean): DotIndicator;

  /**
   * Set the indicator color.
   * @default #007DFF
   * @param { ResourceColor } value - the indicator item color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  color(value: ResourceColor): DotIndicator;

  /**
   * Set the navigation point color.
   * @default 10%#182431
   * @param { ResourceColor } value - the indicator item when selected.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedColor(value: ResourceColor): DotIndicator;
}

/**
 * Set Swiper column count adaptation.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare type AutoFill = {
  /**
   * Set idealSize size.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  idealSize: VP;
}

/**
 * Define DigitIndicator, the indicator type is digit.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class DigitIndicator extends Indicator<DigitIndicator> {
  /**
   * Constructor.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Set font color of the digital indicator.
   * @default #182431
   * @param { ResourceColor } fontColor - the indicator font color.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontColor(value: ResourceColor): DigitIndicator;

  /**
   * Set font color of the digital indicator when selected.
   * @default #182431
   * @param { ResourceColor } selectedFontColor - the indicator font color when selected.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedFontColor(value: ResourceColor): DigitIndicator;

  /**
   * Set the digital indicator font (just support font size and weight).
   * @param { Font } value - the indicator font size and weight.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  digitFont(value: Font): DigitIndicator;

  /**
   * Set the digital indicator font (just support font size and weight).
   * @param { Font } value - the indicator font size and weight when selected.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedDigitFont(value: Font): DigitIndicator;
}

/**
 * Arrow object.
 * @interface arrow style
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ArrowStyle {
  /**
   * Is show the arrow background or not.
   * @default false
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  isShowBackground?: boolean;

  /**
   * When the indicator show, set the arrow position is side of the indicator or in the middle of content area.
   * The arrow is displayed on side of the indicator, if the value is false.
   * @default false
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  isSidebarMiddle?: boolean;

  /**
   * The arrow background size.
   * The size of the arrow is three-quarters of the background size, when the background is displayed.
   * @default 24vp
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  backgroundSize?: Length;

  /**
   * The arrow background background color.
   * @default #19182431
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  backgroundColor?: ResourceColor;

  /**
   * The arrow size.
   * The arrow size can be set, when the background is not displayed.
   * The size of the arrow is three-quarters of the background size, when the background is displayed.
   * @default 18vp
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  arrowSize?: Length;

  /**
   * The arrow color.
   * @default #182431
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  arrowColor?: ResourceColor;
}

/**
 * Declare the size of the swiper on the spindle.
 * @since 7
 */
/**
 * Declare the size of the swiper on the spindle.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum SwiperDisplayMode {
  /**
   * Carousel map extension.
   * @since 7
   */
  /**
   * Carousel map extension.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @deprecated since 10
   * @useinstead SwiperDisplayMode#STRETCH
   */
  Stretch,

  /**
   * The rotation chart is self linear.
   * @since 7
   */
  /**
   * The rotation chart is self linear.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   * @deprecated since 10
   * @useinstead SwiperDisplayMode#AUTO_LINEAR
   */
  AutoLinear,

  /**
   * Carousel map extension.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  STRETCH,

  /**
   * The rotation chart is self linear.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  AUTO_LINEAR,
}

/**
 * Provides an interface for sliding containers.
 * @since 7
 */
/**
 * Provides an interface for sliding containers.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface SwiperInterface {
  /**
   * Called when a sliding container is set.
   * @since 7
   */
  /**
   * Called when a sliding container is set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
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
/**
 * Defines the swiper attribute functions.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class SwiperAttribute extends CommonMethod<SwiperAttribute> {
  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   * @since 7
   */
  /**
   * Called when the index value of the displayed subcomponent is set in the container.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  index(value: number): SwiperAttribute;

  /**
   * Called when setting whether the subcomponent plays automatically.
   * @since 7
   */
  /**
   * Called when setting whether the subcomponent plays automatically.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  autoPlay(value: boolean): SwiperAttribute;

  /**
   * Called when the time interval for automatic playback is set.
   * @since 7
   */
  /**
   * Called when the time interval for automatic playback is set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
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
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  indicator(value: DotIndicator | DigitIndicator | boolean): SwiperAttribute;

  /**
   * Set arrow is enabled, or set the arrow style.
   * @default value: false, isHoverShow: false
   * @param { ArrowStyle | boolean } value - arrow is displayed or set the arrow style.
   * @param { boolean } value - arrow is display when mouse hover in indicator hotspot.
   * @returns { SwiperAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  displayArrow(value: ArrowStyle | boolean, isHoverShow?: boolean): SwiperAttribute;

  /**
   * Called when setting whether to turn on cyclic sliding.
   * @since 7
   */
  /**
   * Called when setting whether to turn on cyclic sliding.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  loop(value: boolean): SwiperAttribute;

  /**
   * Called when the animation duration of the switch is set.
   * @since 7
   */
  /**
   * Called when the animation duration of the switch is set.
   * @crossplatform
   * @since 10
   */
  duration(value: number): SwiperAttribute;

  /**
   * Called when setting whether to slide vertically.
   * @since 7
   */
  /**
   * Called when setting whether to slide vertically.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  vertical(value: boolean): SwiperAttribute;

  /**
   * Called when the size of the rotation chart is set.
   * @since 7
   */
  /**
   * Called when the size of the rotation chart is set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  itemSpace(value: number | string): SwiperAttribute;

  /**
   * Called when setting the size of the swiper container on the spindle.
   * @since 7
   */
  /**
   * Called when setting the size of the swiper container on the spindle.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  displayMode(value: SwiperDisplayMode): SwiperAttribute;

  /**
   * Called when setting the cached count of the swiper container one side.
   * @since 8
   */
  /**
   * Called when setting the cached count of the swiper container one side.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  cachedCount(value: number): SwiperAttribute;

  /**
   * This command is invoked when the number of subcomponents is set.
   * @since 8
   */
  /**
   * This command is invoked when the number of subcomponents is set.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  displayCount(value: number | string | AutoFill): SwiperAttribute;

  /**
   * Invoked when setting the sliding effect
   * @since 8
   */
  /**
   * Invoked when setting the sliding effect
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  effectMode(value: EdgeEffect): SwiperAttribute;

  /**
   * Called when sliding is disableSwipe
   * @since 8
   */
  /**
   * Called when sliding is disableSwipe
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  disableSwipe(value: boolean): SwiperAttribute;

  /**
   * Called when sliding is curve
   * @type { ?(Curve | string) }
   * @since 8
   */
  /**
   * Called when sliding is curve
   * Curve is an enumeration type for common curves
   * ICurve is a curve object
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @type { ?(Curve | string | ICurve) }
   * @crossplatform
   * @since 10
   */
  curve(value: Curve | string | ICurve): SwiperAttribute;

  /**
   * Called when the index value changes.
   * @since 7
   */
  /**
   * Called when the index value changes.
   * @form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
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
  /**
   * Called when the swiper animation start.
   * @param { number } index - the index value of the swiper page that when animation start.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
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
   * @crossplatform
   * @since 10
   */
  onAnimationEnd(event: (index: number) => void): SwiperAttribute;
}

/**
 * Defines Swiper Component.
 * @since 7
 */
/**
 * Defines Swiper Component.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Swiper: SwiperInterface;

/**
 * Defines Swiper Component instance.
 * @since 7
 */
/**
 * Defines Swiper Component instance.
 * @form
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const SwiperInstance: SwiperAttribute;
