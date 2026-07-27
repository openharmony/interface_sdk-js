/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Indicator组件的控制器，可以将此对象绑定至Indicator组件来控制翻页。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare class IndicatorComponentController {
  /**
   * IndicatorComponentController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  constructor();

  /**
   * 跳转到下一导航点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  showNext():void;

  /**
   * 跳转到上一导航点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  showPrevious():void;

   /**
   * 翻至指定导航点。
   *
   * @param { number } index - 指定导航点在Swiper中的索引值。<br/>**说明：** <br/>设置的值小于0或大于最大导航点索引时，取0。
   * @param { boolean } [useAnimation] - 设置翻至指定导航点时是否有动效，true表示有动效，false表示没有动效。<br/>默认值：false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  changeIndex(index: number, useAnimation?: boolean):void;
}

/**
 * Provides an interface for indicator.
 *
 * @interface IndicatorComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
interface IndicatorComponentInterface {
   
  /**
   * Called when a indicator is set.
   *
   * @param { IndicatorComponentController } controller - indicator component controller.
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  (controller?: IndicatorComponentController): IndicatorComponentAttribute;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性。
 *
 * @extends CommonMethod<IndicatorComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare class IndicatorComponentAttribute extends CommonMethod<IndicatorComponentAttribute> {
 /**
   * 设置首次显示时当前导航点的索引值。设置小于0或大于等于导航点数量时，按照默认值0处理。
   * 
   * 单独导航点组件和Swiper绑定的时候，该属性不生效。
   *
   * @param { number } index
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  initialIndex(index: number): IndicatorComponentAttribute;

  /**
   * 设置导航点总数量。
   * 
   * 单独导航点组件和Swiper绑定的时候，以Swiper的页面数量为准。
   *
   * @param { number } totalCount
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  count(totalCount: number): IndicatorComponentAttribute;

  /**
   * 设置可选导航点指示器样式。
   *
   * @param { DotIndicator | DigitIndicator } indicatorStyle - 可选导航点指示器样式。<br/> - DotIndicator：圆点指示器样式。<br/> -
   *     DigitIndicator：数字指示器样式。<br/>  默认类型：DotIndicator。
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  style(indicatorStyle: DotIndicator | DigitIndicator): IndicatorComponentAttribute;

  /**
   * 设置是否开启循环。
   * 
   * 单独导航点组件和Swiper绑定的时候，该属性不生效。
   *
   * @param { boolean } isLoop
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  loop(isLoop: boolean): IndicatorComponentAttribute;

  /**
   * 设置是否为纵向滑动。
   * 
   * 单独导航点组件和Swiper绑定的时候，该属性不生效。
   *
   * @param { boolean } isVertical
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  vertical(isVertical: boolean): IndicatorComponentAttribute;

  /**
   * Called when the index value changes.
   *
   * @param { Callback<number> } event
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  onChange(event: Callback<number>): IndicatorComponentAttribute;
}

/**
 * Defines IndicatorComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare const IndicatorComponent: IndicatorComponentInterface;

/**
 * Defines IndicatorComponent instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare const IndicatorComponentInstance: IndicatorComponentAttribute;