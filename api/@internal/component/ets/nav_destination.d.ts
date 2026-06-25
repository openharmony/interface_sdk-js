/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * Defines an instance object of the Orientation type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type Orientation = import('../api/@ohos.window').default.Orientation;

/**
 * Defines a general title for the **NavDestination** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface NavDestinationCommonTitle {

  /**
   * Main title.
   *
   * @type { string } [since 9 - 13]
   * @type { string | Resource } [since 14]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  main: string | Resource;

  /**
   * Subtitle.
   *
   * @type { string } [since 9 - 13]
   * @type { string | Resource } [since 14]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sub: string | Resource;
}

/**
 * Defines a custom title for the **NavDestination** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface NavDestinationCustomTitle {

  /**
   * Content of the title bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  builder: CustomBuilder;

  /**
   * Height of the title bar.
   *
   * Value range: [0, +��)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  height: TitleHeight | Length;
}

/**
 * Type of the system transition animation.
 *
 * > **NOTE**
 *
 * > System transition animations for the title bar and content area can be configured separately.
 *
 * > The system transition animation of the title bar is only available for the push and pop animations of navigation
 * > destination pages in STANDARD mode, with the following constraints:
 *
 *
 * > When **NONE** or **TITLE** is set, no system transition animation is displayed. When **CONTENT** or **DEFAULT** is
 * > set, the system transition animation is displayed by default.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum NavigationSystemTransitionType {

  /**
   * Default system transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  DEFAULT = 0,

  /**
   * No system transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  NONE = 1,

  /**
   * System transition animation of the title bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  TITLE = 2,

  /**
   * System transition animation of the content area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CONTENT = 3,

  /**
   * Fade-type system transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  FADE = 4,

  /**
   * Center-scale type system transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  EXPLODE = 5,

  /**
   * Right-slide type system transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  SLIDE_RIGHT = 6,

  /**
   * Bottom-slide type system transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  SLIDE_BOTTOM = 7
}

/**
 * Mode of the **NavDestination** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum NavDestinationMode {

  /**
   * Standard mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  STANDARD = 0,

  /**
   * The navigation destination is transparent by default. Stack operations do not affect the visibility of underlying
   * **NavDestination** components (lifecycle methods like **onShown** and **onHidden** remain unchanged). Only the
   * **onActive** and **onInactive** lifecycle methods are triggered.
   *
   * Before API version 13, no system transition animation is available by default. System transition animations are
   * supported since API version 13.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DIALOG = 1
}

/**
 * Enumerates reasons for the activation state changes of the **NavDestination** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 17 dynamic
 */
declare enum NavDestinationActiveReason {

  /**
   * Activation state changes due to page navigation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  TRANSITION = 0,

  /**
   * Activation state changes due to the opening or closing of a modal page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  CONTENT_COVER = 1,

  /**
   * Activation state changes due to the opening or closing of a sheet.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  SHEET = 2,

  /**
   * Activation state changes due to the opening or closing of a custom dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  DIALOG = 3,

  /**
   * Activation state changes due to the opening or closing of an overlay using **OverlayManager**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  OVERLAY = 4,

  /**
   * Activation state changes due to switching between foreground and background states of the application.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  APP_STATE = 5
}

/**
 * Enumerates reasons for **NavDestination** visibility changes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare enum VisibilityChangeReason {

  /**
   * Visibility changes due to page navigation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  TRANSITION = 0,

  /**
   * Visibility changes due to the opening or closing of a modal page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  CONTENT_COVER = 1,

  /**
   * Visibility changes due to switching between the foreground and background states.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  APP_STATE = 2
}

/**
 * **NavDestination** is the root container of a destination page and represents the content area of the
 * [Navigation]{@link navigation} component.
 *
 * > **NOTE**
 *
 * > - Since API version 11, this component supports the safe area attribute by default, with the default attribute
 * > value being **expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])**. You can override
 * > this attribute to change the default behavior. In earlier versions, you need to use the
 * > [expandSafeArea]{@link common} attribute to implement the safe area feature.
 * >
 * > - The **NavDestination** component must be used in conjunction with the **Navigation** component to act as the root
 * > node for the navigation destination page. When used alone, it can only function as a standard container component
 * > and does not possess any routing-related attributes or capabilities.
 * >
 * > - If the lifecycle of an intermediate page in the routing stack changes, the lifecycle callbacks (**onWillShow**,
 * > **onShown**, **onHidden**, **onWillDisappear**) of the top **NavDestination** in the stack both before and after
 * > the navigation will be triggered last in the sequence.
 * >
 * > - If no main title or subtitle is set for **NavDestination** and there is no back button, the title bar is not
 * > displayed.
 * >
 * > - Avoid setting layout-related attributes such as the position and size. They may result in display issues on the
 * > page. For example, do not apply the [zIndex]{@link CommonMethod#zIndex} attribute to a **NavDestination**
 * > component. This will override the system-defined stacking order and may cause display anomalies.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare interface NavDestinationInterface {

  /**
   * Creates the root container for a subpage in [Navigation]{@link navigation}.
   *
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (): NavDestinationAttribute;
}

/**
 * Defines the routing configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface RouteMapConfig {

  /**
   * Page name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  name: string;

  /**
   * Path of the page in the current package.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pageSourceFile: string;

  /**
   * Custom data of the page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  data: Object;
}

/**
 * Defines the context information for the **NavDestination** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NavDestinationContext {

  /**
   * Path information of the navigation destination page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  pathInfo: NavPathInfo;

  /**
   * Navigation controller of the current **NavDestination** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  pathStack: NavPathStack;

  /**
   * Unique ID of the current navigation destination page, which is automatically generated by the system and is
   * irrelevant to the universal attribute **id** of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  navDestinationId?: string;

  /**
   * Type of the current **NavDestination**.
   * Default value: NavDestinationMode.Standard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  mode?: NavDestinationMode;

  /**
   * Obtains the routing configuration of the current **NavDestination** component.
   *
   * @returns {RouteMapConfig | undefined} Routing configuration of the current page.
   *     <br> **undefined** is returned when the page is not configured through the route table.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getConfigInRouteMap(): RouteMapConfig | undefined;
}

/**
 * Provides the information about the nested scrollable containers.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface NestedScrollInfo {

  /**
   * Controller of the target scrollable container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  parent: Scroller;

  /**
   * Controller of the scrollable container nested within the target scrollable container. This scrollable container is
   * a child component of the target scrollable container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  child: Scroller;
}

/**
 * Defines a custom transition animation for the **NavDestination** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface NavDestinationTransition {

  /**
   * Callback triggered when the transition animation ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onTransitionEnd?: Callback<void>;

  /**
   * Duration of the transition animation.
   *
   * Default value: **1000** (in milliseconds)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  duration?: number;

  /**
   * Curve type of the animation.
   *
   * Default value: Curve.EaseInOut](ts-appendix-enums.md#curve)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  curve?: Curve;

  /**
   * Delay of the transition animation.
   *
   * Default value: **0** (in milliseconds)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  delay?: number;

  /**
   * Closure function specifying the transition animation. The system generates the corresponding transition animation
   * based on the modifications to the component's UI state within the closure. For details, see **event** in
   * [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  event: Callback<void>;
}

/**
 * The [universal attributes]{@link common} are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class NavDestinationAttribute extends CommonMethod<NavDestinationAttribute> {

  /**
   * Sets the page title. When the title string is too long: (1) If no subtitle is set, the string is scaled down,
   * wrapped in two lines, and then clipped with an ellipsis (...) if it is still overlong. (2) If a subtitle is set,
   * the subtitle is scaled down and then truncated with an ellipsis (...) if it is still overlong.
   *
   * > **NOTE**
   *
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle } value - Page
   *     title. [since 9 - 13]
   * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource } value - Page
   *     title. [since 14]
   * @param { NavigationTitleOptions } [options] - Title bar options. [since 12]
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource,
          options?: NavigationTitleOptions): NavDestinationAttribute;

  /**
   * Specifies whether to hide the title bar.
   *
   * @param { boolean } value - Whether to hide the title bar.<br>Default value: **false**.<br>**true**: Hide the title
   *     bar.<br>**false**: Show the title bar.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  hideTitleBar(value: boolean): NavDestinationAttribute;

  /**
   * Specifies whether to hide the title bar. Compared with
   * [hideTitleBar]{@link NavDestinationAttribute#hideTitleBar(value: boolean)}, this API adds the capability to control
   * whether to animate the visibility change of the title bar.
   *
   * @param { boolean } hide - Whether to hide the title bar.<br>Default value: **false**.<br>**true**: Hide the title
   *     bar.<br>**false**: Show the title bar.
   * @param { boolean } animated - Whether to animate the visibility change of the title bar.<br>Default value:
   *     **false**.<br>**true**: Animate the visibility change of the title bar.<br>**false**: Do not animate the
   *     visibility change of the title bar.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  hideTitleBar(hide: boolean, animated: boolean): NavDestinationAttribute;

  /**
   * Sets whether to hide the back button in the title bar.
   *
   * @param { Optional<boolean> } hide - Whether to hide the back button in the title bar.<br>Default value: **false**.<
   *     br>**true**: Hide the back button in the title bar.<br>**false**: Show the back button in the title bar.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  hideBackButton(hide: Optional<boolean>): NavDestinationAttribute;

  /**
   * Triggered when the navigation destination page is displayed. Starting from API version 21, the callback includes a
   * **VisibilityChangeReason** parameter indicating the cause of the visibility change.
   *
   * @param { function } callback - Triggered when the navigation destination page is displayed.<br>In versions earlier
   *     than API version 21, the callback is a basic callback without parameters.<br>Since API version 21, the callback
   *     includes a **VisibilityChangeReason** parameter describing the trigger cause. [since 10 - 20]
   * @param { Callback<VisibilityChangeReason> } callback - Triggered when the navigation destination page is displayed.
   *     <br>In versions earlier than API version 21, the callback is a basic callback without parameters.<br>Since API
   *     version 21, the callback includes a **VisibilityChangeReason** parameter describing the trigger
   *     cause. [since 21]
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onShown(callback: Callback<VisibilityChangeReason>): NavDestinationAttribute;

  /**
   * Triggered when the navigation destination page is hidden. Starting from API version 21, the callback includes a
   * **VisibilityChangeReason** parameter indicating the cause of the visibility change.
   *
   * @param { function } callback - Triggered when the navigation destination page is hidden.<br>In versions earlier
   *     than API version 21, the callback is a basic callback without parameters.<br>Since API version 21, the callback
   *     includes a **VisibilityChangeReason** parameter describing the trigger cause. [since 10 - 20]
   * @param { Callback<VisibilityChangeReason> } callback - Triggered when the navigation destination page is hidden.<br
   *     >In versions earlier than API version 21, the callback is a basic callback without parameters.<br>Since API
   *     version 21, the callback includes a **VisibilityChangeReason** parameter describing the trigger
   *     cause. [since 21]
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onHidden(callback: Callback<VisibilityChangeReason>): NavDestinationAttribute;

  /**
   * This callback takes effect when content exists in the navigation controller bound to the **Navigation** component.
   * Triggered when the back button is pressed.
   *
   * The value **true** means that the back button logic is overridden, and **false** means that the previous page is
   * displayed.
   *
   * @param { function } callback - This callback takes effect when content exists in the navigation controller bound to
   *     the **Navigation** component. Triggered when the back button is pressed.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onBackPressed(callback: () => boolean): NavDestinationAttribute;

  /**
   * Triggered when the **NavDestination** component returns.
   *
   * > **NOTE**
   *
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 22.
   *
   * @param {Optional<Callback<ESObject>>} callback - Indicates callback when pop to the navDestination with result.
   * @returns {NavDestinationAttribute}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onResult(callback: Optional<Callback<ESObject>>): NavDestinationAttribute;

  /**
   * Sets the mode of the **NavDestination** component. Dynamic modification is not supported.
   *
   * > **NOTE**
   *
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { NavDestinationMode } value - Mode of the **NavDestination** component.<br>Default value:
   *     **NavDestinationMode.STANDARD**.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  mode(value: NavDestinationMode): NavDestinationAttribute;

  /**
   * Sets the icon of the back button on the title bar.
   *
   * > **NOTE**
   *
   * > - This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   * >
   * > - The following operations are not allowed: modifying the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, changing the animation effects through the **effectStrategy** attribute, or
   * > changing the animation effect type through the **symbolEffect** attribute.
   *
   * @param { ResourceStr | PixelMap } value - Icon of the back button on the title bar. [since 11 - 11]
   * @param { ResourceStr | PixelMap | SymbolGlyphModifier } value - Icon of the back button on the title bar. [since 12]
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backButtonIcon(value: ResourceStr | PixelMap | SymbolGlyphModifier): NavDestinationAttribute;

  /**
   * Sets the icon and accessibility text for the back button on the title bar.
   *
   * > **NOTE**
   *
   * > - This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   * >
   * > - The following operations are not allowed: modifying the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, changing the animation effects through the **effectStrategy** attribute, or
   * > changing the animation effect type through the **symbolEffect** attribute.
   *
   * @param { ResourceStr | PixelMap | SymbolGlyphModifier } icon - Icon of the back button on the title bar.
   * @param { ResourceStr } accessibilityText - Accessibility text for the back button.<br>Default value: **back** when
   *     the system language is English.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backButtonIcon(icon: ResourceStr | PixelMap | SymbolGlyphModifier, accessibilityText?: ResourceStr): NavDestinationAttribute;

  /**
   * Sets the menu items in the upper right corner of the page. If this attribute is not set, no menu item is displayed.
   * When the value type is Array<[NavigationMenuItem]{@link NavigationMenuItem}&gt;, the menu shows a maximum of three
   * icons in portrait mode and a maximum of five icons in landscape mode, with excess icons (if any) placed under the
   * automatically generated **More** icon.
   *
   * > **NOTE**
   *
   * > - This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 14.
   * >
   * > - The following operations are not allowed: modifying the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, changing the animation effects through the **effectStrategy** attribute, or
   * > changing the animation effect type through the **symbolEffect** attribute.
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } value - Menu items in the upper right corner of the page.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  menus(value: Array<NavigationMenuItem> | CustomBuilder): NavDestinationAttribute;

  /**
   * Sets the menu items in the upper right corner of the page. If this attribute is not set, no menu item is displayed.
   * Compared with [menus]{@link NavDestinationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)}, this
   * API adds menu options. When the value type is Array<[NavigationMenuItem]{@link NavigationMenuItem}&gt;, the menu
   * shows a maximum of three icons in portrait mode and a maximum of five icons in landscape mode, with excess icons (
   * if any) placed under the automatically generated **More** icon.
   *
   * > **NOTE**
   *
   * > - This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   * >
   * > - The following operations are not allowed: modifying the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, changing the animation effects through the **effectStrategy** attribute, or
   * > changing the animation effect type through the **symbolEffect** attribute.
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } items - Menu items in the upper right corner of the page.
   * @param { NavigationMenuOptions } [options] - Optional settings for menu items in the upper right corner of the
   *     page.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  menus(items: Array<NavigationMenuItem> | CustomBuilder, options?: NavigationMenuOptions): NavDestinationAttribute;

  /**
   * Sets the content of the toolbar. If this API is not called, the toolbar remains hidden.
   *
   * > **NOTE**
   *
   * > - This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   * >
   * > - The following operations are not allowed: modifying the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, changing the animation effects through the **effectStrategy** attribute, or
   * > changing the animation effect type through the **symbolEffect** attribute.
   *
   * @param { Array<ToolbarItem> | CustomBuilder } toolbarParam - Content of the toolbar.<br>When configured with Array<
   *     [ToolbarItem]{@link ToolbarItem}>, the toolbar follows the rules below:<br>- Toolbar items are evenly
   *     distributed on the bottom toolbar, with text and icons evenly spaced in each content area.<br>- In portrait
   *     mode, the toolbar shows a maximum of five icons, with any additional icons placed under an automatically
   *     generated **More** icon. In landscape mode, the behavior of the toolbar is determined by the display mode: (1)
   *     If the display mode is [Split]{@link NavigationMode}, the display will remain the same as in portrait mode. (2)
   *     If the display mode is [Stack]{@link NavigationMode}, the toolbar must be used together with Array<
   *     [NavigationMenuItem]{@link NavigationMenuItem}> of the
   *     [menus]{@link NavDestinationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)} attribute; in
   *     this configuration, the bottom toolbar is automatically hidden, and all items on the toolbar are relocated to
   *     the menu in the upper right corner of the screen.<br>When configured with
   *     [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8), the toolbar does not
   *     follow the above rules.
   * @param { NavigationToolbarOptions } [options] - Toolbar options. Toolbar options include the background color,
   *     background blur style and blur option, background properties, layout mode of the toolbar, as well as whether to
   *     hide the toolbar text, and options for the toolbar's more button menu.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  toolbarConfiguration(toolbarParam: Array<ToolbarItem> | CustomBuilder, options?: NavigationToolbarOptions): NavDestinationAttribute;

  /**
   * Specifies whether to hide the toolbar.
   *
   * @param { boolean } hide - Whether to hide the toolbar.<br>Default value: **false**.<br>**true**: Hide the toolbar.<
   *     br>**false**: Show the toolbar.
   * @param { boolean } [animated] - Whether to animate the visibility change of the toolbar.<br>Default value:
   *     **false**.<br>**true**: Animate the visibility change of the toolbar.<br>**false**: Do not animate the
   *     visibility change of the toolbar.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  hideToolBar(hide: boolean, animated?: boolean): NavDestinationAttribute;

  /**
   * Triggered when the **NavDestination** component is about to build a child component.
   *
   * > **NOTE**
   *
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { import('../api/@ohos.base').Callback<NavDestinationContext> } callback - Triggered when the
   *     **NavDestination** component is about to build a child component.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onReady(callback: import('../api/@ohos.base').Callback<NavDestinationContext>): NavDestinationAttribute;

  /**
   * Called when the **NavDestination** component is about to be mounted. The routing stack can be modified in the
   * callback, and the modification takes effect in the current frame.
   *
   * > **NOTE**
   *
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Callback<void> } callback - Called when the **NavDestination** component is about to be mounted. The
   *     routing stack can be modified in the callback, and the modification takes effect in the current frame.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear(callback: Callback<void>): NavDestinationAttribute;

  /**
   * Called when the the **NavDestination** component is about to be unmounted (or when the transition animation, if
   * any, is about to start).
   *
   * > **NOTE**
   *
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Callback<void> } callback - Called when the the **NavDestination** component is about to be unmounted (or
   *     when the transition animation, if any, is about to start).
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear(callback: Callback<void>): NavDestinationAttribute;

  /**
   * Called when the **NavDestination** component is about to display.
   *
   * > **NOTE**
   *
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Callback<void> } callback - Called when the **NavDestination** component is about to display.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillShow(callback: Callback<void>): NavDestinationAttribute;

  /**
   * Called when the **NavDestination** component is about to be hidden.
   *
   * > **NOTE**
   *
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Callback<void> } callback - Called when the **NavDestination** component is about to be hidden.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillHide(callback: Callback<void>): NavDestinationAttribute;

  /**
   * Ignores the layout safe area by allowing the component to extend into the non-safe areas of the screen.
   *
   * > **NOTE**
   *
   * > - Prerequisites for the **ignoreLayoutSafeArea** attribute to take effect:
   * > > When **LayoutSafeAreaType.SYSTEM** is set, the component can extend into the non-safe area if its boundaries
   * > overlap with the non-safe area.
   * >
   * > - If the component extends into the non-safe area, events triggered within that area (such as click events) might
   * > be intercepted by the system. This allows the system to prioritize responses to system components such as the
   * > status bar.
   * >
   * > - To allow a component to extend into non-safe areas, the title bar and toolbar must be hidden or set to
   * > [STACK]{@link BarStyle} mode.
   *
   * @param { Array<LayoutSafeAreaType> } [types] - Types of non-safe areas to extend into.<br>Default value:<br>
   *     [LayoutSafeAreaType.SYSTEM]
   * @param { Array<LayoutSafeAreaEdge> } [edges] - Edges for expanding the safe area.<br> Default value:<br>
   *     [LayoutSafeAreaEdge.TOP, LayoutSafeAreaEdge.BOTTOM]
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): NavDestinationAttribute;

  /**
   * Sets the style of the system status bar when this **NavDestination** page is displayed in the **Navigation**
   * component.
   *
   * > **NOTE**
   *
   * > - The setting takes effect only when the **NavDestination** component is used in conjunction with the
   * > **Navigation** component.
   * >
   * > - For other usage restrictions, see the description of [systemBarStyle]{@link NavigationAttribute#systemBarStyle}
   * > for the **Navigation** component.
   * >
   * > - This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Optional<SystemBarStyle> } style - Style of the system status bar.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  systemBarStyle(style: Optional<SystemBarStyle>): NavDestinationAttribute;

  /**
   * Sets whether the **NavDestination** component is recoverable. If set to recoverable, when the application process
   * exits unexpectedly and restarts, the **NavDestination** component will be automatically re-created. To use this
   * feature, ensure that the [recoverable]{@link NavigationAttribute#recoverable} attribute is set for the
   * **Navigation** component associated with the **NavDestination** component.
   *
   * > **NOTE**
   *
   * > This API must be used together with the [recoverable]{@link NavigationAttribute#recoverable} API of
   * > **Navigation**.
   *
   * @param { boolean } recoverable - Whether the **NavDestination** component is recoverable. By default, it is not
   *     recoverable.<br>Default value: **false**.<br>**true**: The **NavDestination** component is recoverable.<br>
   *     **false**: The **NavDestination** component is not recoverable.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 14 dynamic
   */
  recoverable(recoverable: Optional<boolean>): NavDestinationAttribute;

  /**
   * Sets the system transition animation of the **NavDestination** component. System transition animations for the
   * title bar and content area can be configured separately.
   *
   * @param { NavigationSystemTransitionType } type - Type of the system transition animation.<br>Default value:
   *     **NavigationSystemTransitionType.DEFAULT**.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  systemTransition(type: NavigationSystemTransitionType): NavDestinationAttribute;

  /**
   * Binds the **NavDestination** component with a scrollable container, which can be a [List]{@link list},
   * [Scroll]{@link scroll}, [Grid]{@link grid}, or [WaterFlow]{@link water_flow} component. This way, scrolling in the
   * scrollable container triggers the display and hide animations of the title bar and toolbar of all
   * **NavDestination** components that are bound to it �C scrolling up triggers the hide animation, and scrolling down
   * triggers the show animation. A single **NavDestination** component can be bound to multiple scrollable containers,
   * and a single scrollable container can be bound to multiple **NavDestination** components. For details, see
   * [Example 1](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#example-1-linking-the-title-bar-and-toolbar-with-scrollable-components).
   *
   *
   * > **NOTE**
   *
   * > - The connection between the scrolling actions and the animations for showing or hiding the title bar and toolbar
   * > of the **NavDestination** component takes effect only when the title bar or toolbar is visible.
   * >
   * > - If a **NavDestination** component is bound to multiple scrollable containers, scrolling in any of these
   * > containers triggers the display or hiding animations of the title bar and toolbar. Specifically, when any
   * > scrollable container reaches either the bottom or the top, the display animation for the title bar and toolbar is
   * > triggered without delay. As such, to ensure the optimal user experience, avoid triggering scroll events of
   * > multiple scrollable containers simultaneously.
   * >
   * > - This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 22.
   *
   * @param { Array<Scroller> } scrollers - Controller of the target scrollable container.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  bindToScrollable(scrollers: Array<Scroller>): NavDestinationAttribute;

  /**
   * Binds the **NavDestination** component with a nested scrollable container, which can be a [List]{@link list},
   * [Scroll]{@link scroll}, [Grid]{@link grid}, or [WaterFlow]{@link water_flow} component. This way, scrolling in the
   * scrollable container triggers the display and hide animations of the title bar and toolbar of all
   * **NavDestination** components that are bound to it �C scrolling up triggers the hide animation, and scrolling down
   * triggers the show animation. A single **NavDestination** component can be bound to multiple nested scrollable
   * containers, and a single nested scrollable container can be bound to multiple **NavDestination** components. For
   * details, see
   * [Example 1](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#example-1-linking-the-title-bar-and-toolbar-with-scrollable-components).
   *
   *
   * > **NOTE**
   *
   * > - The connection between the scrolling actions and the animations for showing or hiding the title bar and toolbar
   * > of the **NavDestination** component takes effect only when the title bar or toolbar is visible.
   * >
   * > - If a **NavDestination** component is bound to multiple scrollable containers, scrolling in any of these
   * > containers triggers the display or hiding animations of the title bar and toolbar. Specifically, when any
   * > scrollable container reaches either the bottom or the top, the display animation for the title bar and toolbar is
   * > triggered without delay. As such, to ensure the optimal user experience, avoid triggering scroll events of
   * > multiple scrollable containers simultaneously.
   * >
   * > - This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 22.
   *
   * @param { Array<NestedScrollInfo> } scrollInfos - Controller of the target nested scrollable containers.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  bindToNestedScrollable(scrollInfos: Array<NestedScrollInfo>): NavDestinationAttribute;

  /**
   * Triggered when the **NavDestination** component becomes active (on top of the stack and operable, with no special
   * components blocking it). For details, see
   * [Example 5](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#example-5-handling-navdestination-onactive-and-oninactive-lifecycle-events).
   *
   *
   * > **NOTE**
   *
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 22.
   *
   * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is active.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  onActive(callback: Optional<Callback<NavDestinationActiveReason>>): NavDestinationAttribute;

  /**
   * Triggered when the **NavDestination** component becomes inactive (not on top of the stack and inoperable, or on top
   * but blocked by special components). For details, see
   * [Example 5](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#example-5-handling-navdestination-onactive-and-oninactive-lifecycle-events).
   *
   *
   * > **NOTE**
   *
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 22.
   *
   * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is
   *     inactive.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  onInactive(callback: Optional<Callback<NavDestinationActiveReason>>): NavDestinationAttribute;

  /**
   * Sets a custom transition animation for the **NavDestination** component.
   *
   * > **NOTE**
   *
   * > - This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   * >
   * > - If both this attribute and [systemTransition]{@link NavDestinationAttribute#systemTransition} are set,
   * > whichever is set later takes effect.
   *
   * @param { NavDestinationTransitionDelegate } delegate - Delegate function for custom animations of the
   *     **NavDestination** component.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  customTransition(delegate: NavDestinationTransitionDelegate): NavDestinationAttribute;

  /**
   * Triggered when a **NavDestination** page that already exists in the stack is moved to the top using
   * [launchMode.MOVE_TO_TOP_SINGLETON]{@link LaunchMode} or [launchMode.POP_TO_SINGLETON]{@link LaunchMode}.
   *
   * > **NOTE**
   *
   * > - This callback is not triggered by
   * > [replacePath]{@link NavPathStack#replacePath(info: NavPathInfo, animated?: boolean)} or
   * > [replaceDestination]{@link NavPathStack#replaceDestination}.
   * >
   * > - This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 22.
   *
   * @param { Optional<Callback<ESObject>> } callback - Indicates callback when destination be pushed with singleton
   *     mode.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onNewParam(callback: Optional<Callback<ESObject>>): NavDestinationAttribute;

  /**
   * Sets the display orientation for the **NavDestination** component. After the transition to the NavDestination, the
   * system also switches the application's main window to the specified display orientation.
   *
   * > **NOTE**
   *
   * > - This attribute is effective only if the following conditions are all met:
   * > >   1. The **NavDestination** component belongs to the application's main window page, and the main window is a
   * > full-screen window.
   * > >   2. The **Navigation** container containing the **NavDestination** component occupies the entire application
   * > page area.
   * > >   3. The type of **NavDestination** is [NavDestinationMode]{@link NavDestinationMode}.STANDARD.
   * >
   * > - The actual effect of setting the display orientation depends on the specific device support. For details, see
   * > [setPreferredOrientation](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setpreferredorientation9-1).
   *
   * @param { Optional<Orientation> } orientation - Display orientation to set.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  preferredOrientation(orientation: Optional<Orientation>): NavDestinationAttribute;

  /**
   * Sets whether to show or hide the system status bar when entering this **NavDestination** component.
   *
   * > **NOTE**
   *
   * > - This attribute is effective only if the following conditions are all met:
   * > >   1. The **NavDestination** component belongs to the application's main window page, and the main window is a
   * > full-screen window.
   * > >   2. The **Navigation** container containing the **NavDestination** component occupies the entire page area.
   * > >   3. The **NavDestination** component occupies the entire **Navigation** container.
   * > >   4. The type of **NavDestination** is [NavDestinationMode]{@link NavDestinationMode}.STANDARD.
   * >
   * > - The actual effect of setting the system status bar depends on the specific device support. For details, see
   * > [setSpecificSystemBarEnabled](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setspecificsystembarenabled11).
   *
   * @param { Optional<boolean> } enabled - Whether to show or hide the system status bar when entering the current
   *     **NavDestination** component.<br>**true**: Show the system status bar.<br>**false**: Hide the system status
   *     bar.
   * @param { boolean } [animated] - Whether to animate the visibility change of the system status bar. Default value:
   *     **false**.<br>**true**: Animate the visibility change of the system status bar.<br>**false**: Do not animate
   *     the visibility change of the system status bar.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  enableStatusBar(enabled: Optional<boolean>, animated?: boolean): NavDestinationAttribute;

  /**
   * Sets whether to show or hide the system navigation bar when entering this **NavDestination** component.
   *
   * > **NOTE**
   *
   * > This attribute is effective only if the following conditions are all met:
   *
   *
   * > The actual effect of setting the system navigation bar depends on the specific device support. For details, see
   * > [setSpecificSystemBarEnabled](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setspecificsystembarenabled11).
   *
   * @param { Optional<boolean> } enabled - Whether to show or hide the system navigation bar when entering the current
   *     **NavDestination** component.<br>**true**: Show the system navigation bar.<br>**false**: Hide the system
   *     navigation bar.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  enableNavigationIndicator(enabled: Optional<boolean>): NavDestinationAttribute;

  /**
   * Sets whether the NavDestination should cover the entire navigation container.
   *
   * When set to true, in split navigation mode, the page covers both the NavBar
   * and content area, displaying in full screen overlay mode. This setting applies
   * to all instances of this NavDestination whenever it is pushed onto the stack, unless
   * overridden by the fullScreen option in the push operation.
   *
   * @param { Optional<boolean> } fullScreenOverlay - Whether to display as full screen overlay.
   *     <br>**true**: Full screen overlay mode, covers entire navigation container.
   *     <br>**false**: Normal display mode, follows navigation split rules(Except for DIALOG mode).
   *     <br>**undefined**: Follow the fullscreen inheritance rules.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fullScreenOverlay(fullScreenOverlay: Optional<boolean>): NavDestinationAttribute;

  /**
   * Sets custom page state save callback.
   *
   * Triggered when page becomes hidden. Save custom page state for potential restoration.
   * The initial param used to create the page is preserved by Navigation separately.
   * State object must be serializable.
   *
   * @param { Optional<SaveStateCallback> } callback - Custom state save callback.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onSaveState(callback: Optional<SaveStateCallback>): NavDestinationAttribute;

  /**
   * Sets custom page state restore callback.
   *
   * Triggered when page is reconstructed. The custom state saved by onSaveState is passed to this callback.
   * Null is passed if no custom state was saved.
   *
   * @param { Optional<RestoreStateCallback> } callback - Custom state restore callback.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onRestoreState(callback: Optional<RestoreStateCallback>): NavDestinationAttribute;
}

/**
 * **NavDestination** is the root container of a destination page and represents the content area of the
 * [Navigation]{@link navigation} component.
 *
 * > **NOTE**
 *
 * > - Since API version 11, this component supports the safe area attribute by default, with the default attribute
 * > value being **expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])**. You can override
 * > this attribute to change the default behavior. In earlier versions, you need to use the
 * > [expandSafeArea]{@link common} attribute to implement the safe area feature.
 * >
 * > - The **NavDestination** component must be used in conjunction with the **Navigation** component to act as the root
 * > node for the navigation destination page. When used alone, it can only function as a standard container component
 * > and does not possess any routing-related attributes or capabilities.
 * >
 * > - If the lifecycle of an intermediate page in the routing stack changes, the lifecycle callbacks (**onWillShow**,
 * > **onShown**, **onHidden**, **onWillDisappear**) of the top **NavDestination** in the stack both before and after
 * > the navigation will be triggered last in the sequence.
 * >
 * > - If no main title or subtitle is set for **NavDestination** and there is no back button, the title bar is not
 * > displayed.
 * >
 * > - Avoid setting layout-related attributes such as the position and size. They may result in display issues on the
 * > page. For example, do not apply the [zIndex]{@link CommonMethod#zIndex} attribute to a **NavDestination**
 * > component. This will override the system-defined stacking order and may cause display anomalies.
 *
 * ###### Child Components
 *
 * > **NOTE**
 * >
 * > - Allowed child component types: built-in and custom components, including rendering control types (
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), and
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)).
 * >
 * > - Number of child components: multiple.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const NavDestination: NavDestinationInterface;

/**
 * Defines NavDestination Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const NavDestinationInstance: NavDestinationAttribute;

/**
 * Defines the delegate function for custom transition animations of the **NavDestination** component.
 *
 * @param { NavigationOperation } operation - Type of navigation operation for the current page transition.
 * @param { boolean } isEnter - Whether the current page is an entry page.<br>**true**: The current page is an entry
 *     page.<br>**false**: The current page is not an entry page.
 * @returns { Array<NavDestinationTransition> | undefined } Array of custom animations for the **NavDestination** page.
 *     If **undefined** is returned, the default system animation is used.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type NavDestinationTransitionDelegate =
    (operation: NavigationOperation, isEnter: boolean) => Array<NavDestinationTransition> | undefined;

/**
 * Custom page state save callback.
 *
 * @returns { Record<string, Object> | null } Custom page state.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type SaveStateCallback = () => Record<string, Object> | null;

/**
 * Custom page state restore callback.
 *
 * @param { Record<string, Object> | null } savedState - Custom page state saved by onSaveState.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type RestoreStateCallback = (savedState: Record<string, Object> | null) => void;