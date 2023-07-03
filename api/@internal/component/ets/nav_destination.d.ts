/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Defines the navigation destination common title.
 * @since 9
 */
/**
 * Defines the navigation destination common title.
 * @crossplatform
 * @since 10
 */
declare interface NavDestinationCommonTitle {
  /**
   * Sets the main title.
   * @since 9
   */
  /**
   * Sets the main title.
   * @crossplatform
   * @since 10
   */
  main: string;

  /**
   * Sets the sub title.
   * @since 9
   */
  /**
   * Sets the sub title.
   * @crossplatform
   * @since 10
   */
  sub: string;
}

/**
 * Defines the navigation destination custom title.
 * @since 9
 */
/**
 * Defines the navigation destination custom title.
 * @crossplatform
 * @since 10
 */
declare interface NavDestinationCustomTitle {
  /**
   * Sets the custom title builder.
   * @since 9
   */
  /**
   * Sets the custom title builder.
   * @crossplatform
   * @since 10
   */
  builder: CustomBuilder;

  /**
   * Sets the custom title height.
   * @since 9
   */
  /**
   * Sets the custom title height.
   * @crossplatform
   * @since 10
   */
  height: TitleHeight | Length;
}

/**
 * The construct function of NavDestination.
 * @since 9
 */
/**
 * The construct function of NavDestination.
 * @crossplatform
 * @since 10
 */
declare interface NavDestinationInterface {
  /**
   * Constructor.
   * @since 9
   */
  /**
   * Constructor.
   * @crossplatform
   * @since 10
   */
  (): NavDestinationAttribute;
}

/**
 * The attribute function of NavDestination
 * @since 9
 */
/**
 * The attribute function of NavDestination
 * @crossplatform
 * @since 10
 */
declare class NavDestinationAttribute extends CommonMethod<NavDestinationAttribute> {
  /**
   * Navigation title bar
   * @since 9
   */
  /**
   * Navigation title bar
   * @crossplatform
   * @since 10
   */
  title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle): NavDestinationAttribute;

  /**
   * Hide navigation title bar
   * @since 9
   */
  /**
   * Hide navigation title bar
   * @crossplatform
   * @since 10
   */
  hideTitleBar(value: boolean): NavDestinationAttribute;

  /**
   * Invoked when the navDestination page is displayed.
   * @param { () => void) } callback Indicates callback when the navDestination page is displayed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onShown(callback: () => void): NavDestinationAttribute;

  /**
   * Invoked when the navDestination is hidden.
   * @param { () => void } callback Indicates callback when the navDestination is hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onHidden(callback: () => void): NavDestinationAttribute;

  /**
   * Invoked when the backButton is pressed.
   * @param { () => boolean } callback Indicates callback when the backButton is pressed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onBackPressed(callback: () => boolean): NavDestinationAttribute;
}

/**
 * Defines NavDestination Component.
 * @since 9
 */
/**
 * Defines NavDestination Component.
 * @crossplatform
 * @since 10
 */
declare const NavDestination: NavDestinationInterface;

/**
 * Defines NavDestination Component instance.
 * @since 9
 */
/**
 * Defines NavDestination Component instance.
 * @crossplatform
 * @since 10
 */
declare const NavDestinationInstance: NavDestinationAttribute;
