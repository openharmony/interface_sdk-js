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
* 表示LoadingProgress的样式类型，不推荐使用。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum LoadingProgressStyle {

  /**
   * Default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Default,

  /**
   * Announcement style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Circular,

  /**
   * The style of the track.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Orbital,
}

/**
* 用于显示加载动效的组件。
*
* 加载动效在组件不可见时停止，组件的可见状态基于
* [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}
* 处理，可见阈值ratios大于0即视为可见状态。
*
* > **说明：**
*
* > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface LoadingProgressInterface {

  /**
   * 创建加载进度组件。
   *
   * @returns { LoadingProgressAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (): LoadingProgressAttribute;
}

/**
* 除支持[通用属性]{@link common}外，还支持以下属性。
*
* 支持[通用事件]{@link common}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class LoadingProgressAttribute extends CommonMethod<LoadingProgressAttribute> {

  /**
   * 设置加载进度条前景色。
   *
   * @param { ResourceColor } value - 加载进度条的前景色。<br/>默认值：<br/>API version 10及以下：'#99666666'<br/>API version 11及以上：'#ff66
   *     6666'
   * @returns { LoadingProgressAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  color(value: ResourceColor): LoadingProgressAttribute;

  /**
   * 设置LoadingProgress动画是否显示。LoadingProgress动画不显示时，该组件依旧占位。通用属性[Visibility]{@link Visibility}.Hidden隐藏的是包括
   * [border]{@link CommonMethod#border}、[padding]{@link CommonMethod#padding}等整个组件范围，而enableLoading=false只隐藏
   * LoadingProgress本身动画内容，不包括border等。
   *
   * @param { boolean } value - LoadingProgress动画是否显示。<br/>默认值：true，true表示显示LoadingProgress动画，false表示不显示LoadingProgress动
   *     画。
   * @returns { LoadingProgressAttribute } the attribute of the LoadingProgress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableLoading(value: boolean): LoadingProgressAttribute;

  /**
   * 定制LoadingProgress内容区的方法。
   *
   * @param { ContentModifier<LoadingProgressConfiguration> } modifier - 在LoadingProgress组件上，定制内容区的方法。<br/>modifier： 内容修
   *     改器，开发者需要自定义class实现ContentModifier接口。
   * @returns { LoadingProgressAttribute} the attribute of the loading progress
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<LoadingProgressConfiguration>): LoadingProgressAttribute;
}

/**
* 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LoadingProgressConfiguration extends CommonConfiguration<LoadingProgressConfiguration> {

  /**
   * LoadingProgress动画是否显示。
   *
   * 默认值：true，true表示显示LoadingProgress动画，false表示不显示LoadingProgress动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableLoading: boolean;
}

/**
* 用于显示加载动效的组件。
*
* 加载动效在组件不可见时停止，组件的可见状态基于
* [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}
* 处理，可见阈值ratios大于0即视为可见状态。
*
* > **说明：**
*
* > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
*
* ###### 子组件
*
* 无
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const LoadingProgress: LoadingProgressInterface;

/**
* 定义Loading Progress组件实例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const LoadingProgressInstance: LoadingProgressAttribute;