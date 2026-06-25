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
 * Enumerates style types of **LoadingProgress**. This API is not recommended for use.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum LoadingProgressStyle {

  /**
   * Default loading style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Default,

  /**
   * Circular loading style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Circular,

  /**
   * Comet-shaped loading style.
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
 * The **LoadingProgress** component is used to create a loading progress animation.
 *
 * The loading progress animation stops when the component is invisible. The component's visibility is determined by the
 * value of **ratios** in the
 * [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}
 * event callback: If the value is greater than 0, the component is visible.
 *
 * > **NOTE**
 *
 * > - This component supports [WithTheme]{@link with_theme} since API version 26.0.0.
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
   * Creates a loading progress component.
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
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * The [universal events]{@link common} are supported.
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
   * Sets the foreground color for the **LoadingProgress** component.
   *
   * @param { ResourceColor } value - Foreground color of the **LoadingProgress** component.<br>Default value:<br>API
   *     version 10 or earlier: **'#99666666'**<br>API version 11 or later: **'#ff666666'**
   * @returns { LoadingProgressAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  color(value: ResourceColor): LoadingProgressAttribute;

  /**
   * Sets whether to display the LoadingProgress animation. The component still takes up space in the layout when the
   * loading animation is not shown. The universal attribute [Visibility]{@link Visibility}.Hidden hides the entire
   * component area, including the regions specified by [border]{@link CommonMethod#border} and
   * [padding]{@link CommonMethod#padding}. In contrast, when the value of **enableLoading** is set to **false**, only
   * the loading animation itself is hidden without affecting the borders or other elements.
   *
   * @param { boolean } value - Whether to show the loading animation.<br>Default value: **true**. **true**: Show the
   *     loading animation. **false**: Do not show the loading animation.
   * @returns { LoadingProgressAttribute } the attribute of the LoadingProgress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableLoading(value: boolean): LoadingProgressAttribute;

  /**
   * Creates a content modifier.
   *
   * @param { ContentModifier<LoadingProgressConfiguration> } modifier - Content modifier to apply to the current
   *     component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
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
 * You need a custom class to implement the **ContentModifier** API. Inherits from
 * [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LoadingProgressConfiguration extends CommonConfiguration<LoadingProgressConfiguration> {

  /**
   * Whether to show the loading animation.
   *
   * Default value: **true**. **true**: Show the loading animation. **false**: Do not show the loading animation.
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
 * The **LoadingProgress** component is used to create a loading progress animation.
 *
 * The loading progress animation stops when the component is invisible. The component's visibility is determined by the
 * value of **ratios** in the
 * [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}
 * event callback: If the value is greater than 0, the component is visible.
 *
 * > **NOTE**
 *
 * > - This component supports [WithTheme]{@link with_theme} since API version 26.0.0.
 *
 * ###### Child Components
 *
 * Not supported
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
 * Loading Progress Extensions on Declarative Classes
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const LoadingProgressInstance: LoadingProgressAttribute;