
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import window from '../../@ohos.window';

import { Resource } from '../../global/resource';

import { CommonMethod, Callback, LayoutSafeAreaType, LayoutSafeAreaEdge, PixelMap, AttributeModifier } from './common';

import { Builder, CustomBuilder, CustomBuilderT } from './builder';

import { Length, ResourceStr, VoidCallback } from './units';

import { TitleHeight, Curve } from './enums';

import { NavPathInfo, NavPathStack, NavigationTitleOptions, NavigationMenuItem, NavigationToolbarOptions, ToolbarItem,
    NavigationMenuOptions, NavigationOperation, SystemBarStyle } from './navigation';

import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';

import { Scroller } from './scroll';

import { ComponentBuilder } from './builder';

/**
 * Import the Orientation type from @ohos.window.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Orientation = window.Orientation;

/**
 * Defines the navigation destination common title.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationCommonTitle {

  /**
   * Sets the main title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  main: string | Resource;

  /**
   * Sets the sub title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  sub: string | Resource;
}

/**
 * Defines the navigation destination custom title.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationCustomTitle {

  /**
   * Sets the custom title builder.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  builder: CustomBuilder;

  /**
   * Sets the custom title height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: TitleHeight | Length;
}

/**
 * Types of system Transition.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavigationSystemTransitionType {

  /**
   * Default system transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * None system transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 1,

  /**
   * Configure only titlebar transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TITLE = 2,

  /**
   * Configure only content transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT = 3,

  /**
   * Configure fade style system transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FADE = 4,

  /**
   * Configure explode style system transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EXPLODE = 5,

  /**
   * Configure right-side slide style system transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SLIDE_RIGHT = 6,

  /**
   * Configure bottom-side slide style system transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SLIDE_BOTTOM = 7
}

/**
 * NavDestination mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavDestinationMode {

  /**
   * Standard mode is default mode of NavDestination.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  STANDARD = 0,

  /**
   * Dialog mode is transparent by default and does not affect the life cycle of other NavDestination.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DIALOG = 1
}

/**
 * Reason of navDestination be active or inactive.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavDestinationActiveReason {

  /**
   * NavDestination become active or inactive because of page transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TRANSITION = 0,

  /**
   * NavDestination become active or inactive because content cover changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT_COVER = 1,

  /**
   * NavDestination become active or inactive because sheet changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SHEET = 2,

  /**
   * NavDestination become active or inactive because dialog changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DIALOG = 3,

  /**
   * NavDestination become active or inactive because overlay changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  OVERLAY = 4,

  /**
   * NavDestination become active or inactive because app state changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  APP_STATE = 5
}

/**
 * The reason of navDestination be shown or hidden.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum VisibilityChangeReason {

  /**
   * The visibility lifecycle changes through page navigation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TRANSITION = 0,

  /**
   * The visibility lifecycle changes through bindContentCover.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT_COVER = 1,

  /**
   * The visibility lifecycle changes through the states of application (foreground or background).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  APP_STATE = 2
}

/**
 * Indicates configuration info of destination.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RouteMapConfig {

  /**
   * Get destination name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  name: string;

  /**
   * Get destination builder file position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pageSourceFile: string;

  /**
   * Indicate the custom data of current destination.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  data: Object;
}

/**
 * Indicates the context of NavDestination.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationContext {

  /**
   * Get path info.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pathInfo: NavPathInfo;

  /**
   * Get stack of the Navigation where the NavDestination is located.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pathStack: NavPathStack;

  /**
   * Get the unique id of NavDestination, which is different from common property id of Component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  navDestinationId?: string;

  /**
   * The mode of NavDestination.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  mode?: NavDestinationMode;

  /**
   * Get configuration of current Destination in module.json
   *
   * @returns { RouteMapConfig | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getConfigInRouteMap(): RouteMapConfig | undefined;
}

/**
 * Indicates the nested scrollable container components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NestedScrollInfo {

  /**
   * The controller of parent scrollable container component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  parent: Scroller;

  /**
   * The controller of child scrollable container component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  child: Scroller;
}

/**
 * NavDestination animation protocol.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationTransition {

  /**
   * This method is called after the transition ends to notify whether the transition was successful.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTransitionEnd?: VoidCallback;

  /**
   * Define the limit duration of the transition animation.
   * The value range is all integers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  duration?: int;

  /**
   * Define the curve of the transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  curve?: Curve;

  /**
   * Define the delay of the transition animation.
   * The value range is all integers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  delay?: int;

  /**
   * Configure the custom transition event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  event: VoidCallback;
}

/**
 * The module info of NavDestination
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare interface NavDestinationModuleInfo {

  /**
   * The module name of NavDestination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  moduleName: string;

  /**
   * The source file path of NavDestination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  pagePath: string;
}

/**
 * Custom page state save callback.
 *
 * @returns { Record<string, Object> | null } Custom page state.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type SaveStateCallback = () => Record<string, Object> | null;

/**
 * Custom page state restore callback.
 *
 * @param { Record<string, Object> | null } savedState - Custom page state saved by onSaveState.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type RestoreStateCallback = (savedState: Record<string, Object> | null) => void;

/**
 * The attribute function of NavDestination
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationAttribute extends CommonMethod {

  /**
   * NavDestination title bar
   *
   * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle
   *     | Resource | undefined } value - NavDestination title.
   * @param { NavigationTitleOptions | undefined } [options] - Indicates the options of titlebar.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource | undefined, options?: NavigationTitleOptions | undefined): this;

  /**
   * Hide navigation title bar
   *
   * @param { boolean | undefined } value
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideTitleBar(value: boolean | undefined): this;

  /**
   * Hide navigation title bar
   *
   * @param { boolean | undefined } hide
   * @param { boolean | undefined } animated
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideTitleBar(hide: boolean | undefined, animated: boolean | undefined): this;

  /**
   * Hide navDestination back button
   *
   * @param { boolean | undefined } hide
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideBackButton(hide: boolean | undefined): this;

  /**
   * Invoked when the navDestination page is displayed.
   *
   * @param { Callback<VisibilityChangeReason> | undefined } callback - Indicates
   *     callback when the navDestination page is displayed.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onShown(callback: Callback<VisibilityChangeReason> | undefined): this;

  /**
   * Invoked when the navDestination is hidden.
   *
   * @param { Callback<VisibilityChangeReason> | undefined } callback - Indicates
   *     callback when the navDestination is hidden.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onHidden(callback: Callback<VisibilityChangeReason> | undefined): this;

  /**
   * Invoked when the backButton is pressed.
   *
   * @param { function | undefined } callback - Indicates callback when the backButton is pressed.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onBackPressed(callback: (() => boolean) | undefined): this;

  /**
   * Invoked when pop to the navDestination with result.
   *
   * @param { Callback<Object | null | undefined> | undefined } callback - Indicates callback when pop to the
   *     navDestination with result.
   * @returns {NavDestinationAttribute}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onResult(callback: Callback<Object | null | undefined> | undefined): this;

  /**
   * Sets the different mode of NavDestination.
   *
   * @param { NavDestinationMode } value - NavDestinationMode [since 23 - 24]
   * @param { NavDestinationMode | undefined } value - NavDestinationMode [since 26.0.0]
   * @returns { NavDestinationAttribute } [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @stagemodelonly
   * @since 23 static
   */
  default mode(value: NavDestinationMode | undefined): this;

  /**
   * Set back button icon and accessibility broadcast content.
   *
   * @param { ResourceStr | PixelMap | SymbolGlyphModifier | undefined } icon - Indicates icon of back button.
   * @param { ResourceStr | undefined } [accessibilityText] - Indicates content needs to broadcast.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default backButtonIcon(icon: ResourceStr | PixelMap | SymbolGlyphModifier | undefined, accessibilityText?: ResourceStr | undefined): this;

  /**
   * NavDestination title bar's menus
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder | undefined } items
   * @param { NavigationMenuOptions | undefined } [options] - Indicates the options of menu.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default menus(items: Array<NavigationMenuItem> | CustomBuilder | undefined, options?: NavigationMenuOptions | undefined): this;

  /**
   * Configure toolbar with default style parameter or custom parameter.
   *
   * @param { Array<ToolbarItem> | CustomBuilder | undefined } toolbarParam - Toolbar configuration parameters.
   * @param { NavigationToolbarOptions | undefined } [options] - Indicates the options of toolbar.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default toolbarConfiguration(toolbarParam: Array<ToolbarItem> | CustomBuilder | undefined, options?: NavigationToolbarOptions | undefined): this;

  /**
   * Hide tool bar
   *
   * @param { boolean | undefined } hide
   * @param { boolean | undefined } [animated]
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideToolBar(hide: boolean | undefined, animated?: boolean | undefined): this;

  /**
   * Invoked before sub-components of NavDestination are created.
   *
   * @param { Callback<NavDestinationContext> | undefined } callback - Indicates callback that invoked before sub-
   *     components of NavDestination are created.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onReady(callback: Callback<NavDestinationContext> | undefined): this;

  /**
   * Invoked before the navDestination is appeared.
   *
   * @param { VoidCallback | undefined } callback - Indicates callback before the navDestination is appeared.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillAppear(callback: VoidCallback | undefined): this;

  /**
   * Invoked before the navDestination is disappeared.
   *
   * @param { VoidCallback | undefined } callback - Indicates callback before the navDestination is disappeared.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillDisappear(callback: VoidCallback | undefined): this;

  /**
   * Invoked before the navDestination is displayed.
   *
   * @param { VoidCallback | undefined } callback - Indicates callback before the navDestination is displayed.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillShow(callback: VoidCallback | undefined): this;

  /**
   * Invoked before the navDestination is hidden.
   *
   * @param { VoidCallback | undefined } callback - Indicates callback before the navDestination is hidden.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillHide(callback: VoidCallback | undefined): this;

  /**
   * Set navDestination content expand types and edges.
   *
   * @param { Array<LayoutSafeAreaType> | undefined } [types] - Indicates the types of the safe area.
   * @param { Array<LayoutSafeAreaEdge> | undefined } [edges] - Indicates the edges of the safe area.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType> | undefined, edges?: Array<LayoutSafeAreaEdge> | undefined): this;

  /**
   * Set the style of system bar
   *
   * @param { SystemBarStyle | undefined } style - The properties of system bar
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default systemBarStyle(style: SystemBarStyle | undefined): this;

  /**
   * Set the NavDestination can be restored after the application is terminated.
   * To enable this attribute, recoverable and id of Navigation must be set.
   *
   * @param { boolean | undefined } recoverable - set navdestination can be recovered.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default recoverable(recoverable: boolean | undefined): this;

  /**
   * Configuration of system transition
   *
   * @param { NavigationSystemTransitionType | undefined } type - Types of system Transition
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default systemTransition(type: NavigationSystemTransitionType | undefined): this;

  /**
   * Bind NavDestination to scrollable container components to automatically hide titlebar and toolbar.
   *
   * @param { Array<Scroller> | undefined } scrollers - The controllers of the scrollable container components.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default bindToScrollable(scrollers: Array<Scroller> | undefined): this;

  /**
   * Bind NavDestination to nested scrollable container components to automatically hide titlebar and toolbar.
   *
   * @param { Array<NestedScrollInfo> | undefined } scrollInfos - The controllers of the nested scrollable container
   *     components.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default bindToNestedScrollable(scrollInfos: Array<NestedScrollInfo> | undefined): this;

  /**
   * Invoked when destination is active.
   *
   * @param { Callback<NavDestinationActiveReason> | undefined } callback - Indicates callback when destination is
   *     active.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onActive(callback: Callback<NavDestinationActiveReason> | undefined): this;

  /**
   * Invoked when destination is inactive.
   *
   * @param { Callback<NavDestinationActiveReason> | undefined } callback - Indicates callback when destination is
   *     inactive.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onInactive(callback: Callback<NavDestinationActiveReason> | undefined): this;

  /**
   * Set NavDestination custom animation.
   *
   * @param { NavDestinationTransitionDelegate | undefined } delegate - The delegate of NavDestination custom animation.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customTransition(delegate: NavDestinationTransitionDelegate | undefined): this;

  /**
   * Invoked when destination be pushed with singleton mode.
   *
   * @param { Callback<Object | null | undefined> | undefined } callback - Indicates callback when destination be pushed
   *     with singleton mode.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onNewParam(callback: Callback<Object | null | undefined> | undefined): this;

  /**
   * Set NavDestination's preferred Orientation.
   *
   * @param { Orientation | undefined } orientation - The preferred Orientation of NavDestination.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default preferredOrientation(orientation: Orientation | undefined): this;

  /**
   * Set statusBar to visible or invisible.
   *
   * @param { boolean | undefined } enabled - Show statusBar if true, or hide statusBar if false.
   * @param { boolean | undefined } [animated] - Whether using animation during hiding or showing statusBar,
   *     using animation if true or not using animation if false
   *     <br>If this parameter is set to undefined, the default value is used. Default value: false.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableStatusBar(enabled: boolean | undefined, animated?: boolean | undefined): this;

  /**
   * Set navigationIndicator to visible or invisible.
   *
   * @param { boolean | undefined } enabled - Show navigationIndicator if true, or hide navigationIndicator if false.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableNavigationIndicator(enabled: boolean | undefined): this;

  /**
   * Set the attribute modifier of navDestination.
   *
   * @param { AttributeModifier<NavDestinationAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   *     The attribute modifier of navDestination.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<NavDestinationAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * Sets whether the NavDestination should cover the entire navigation container.
   *
   * When set to true, in split navigation mode, the page covers both the Navbar
   * and content area, displaying in full screen overlay mode. This setting applies
   * to all instances of this NavDestination whenever it is pushed onto the stack, unless
   * overridden by the fullScreen option in the push operation.
   *
   * @param { boolean | undefined } fullScreenOverlay - Whether to display as full screen overlay.
   *     <br>**true**: Full screen overlay mode, covers entire navigation container.
   *     <br>**false**: Normal display mode, follows navigation split rules(Except for DIALOG mode).
   *     <br>**undefined**: Follow the fullscreen inheritance rules.
   * @returns { NavDestinationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default fullScreenOverlay(fullScreenOverlay: boolean | undefined): this;

  /**
   * Sets custom page state save callback.
   *
   * Triggered when page becomes hidden. Save custom page state for potential restoration.
   * The initial param used to create the page is preserved by Navigation separately.
   * State object must be serializable.
   *
   * @param { SaveStateCallback | undefined } callback - Custom state save callback.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onSaveState(callback: SaveStateCallback | undefined): this;

  /**
   * Sets custom page state restore callback.
   *
   * Triggered when page is reconstructed. The custom state saved by onSaveState is passed to this callback.
   * Null is passed if no custom state was saved.
   *
   * @param { RestoreStateCallback | undefined } callback - Custom state restore callback.
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onRestoreState(callback: RestoreStateCallback | undefined): this;

  /**
   * Set navDestination options.
   *
   * @param { NavDestinationModuleInfo } [moduleInfo] - The NavDestination module info
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setNavDestinationOptions(moduleInfo?: NavDestinationModuleInfo): this;
}

/**
 * Delegate function for NavDestination custom animation.
 *
 * @param { NavigationOperation } operation - the operation type of current Navigation animation.
 * @param { boolean } isEnter - whether current NavDestination will do enter-type transition.
 * @returns { Array<NavDestinationTransition> | undefined } user-set custom navDestination transitions.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NavDestinationTransitionDelegate = (operation: NavigationOperation, isEnter: boolean) => (Array<NavDestinationTransition> | undefined);

/**
 * Defines NavDestination Component
 *
 * @param { CustomBuilder } [content_] - container
 * @returns { NavDestinationAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function NavDestination(

  content_?: CustomBuilder
): NavDestinationAttribute;

/**
 * Defines NavDestination Component
 *
 * @param { CustomBuilderT<NavDestinationAttribute> } style_ - navDestination attribute instance
 * @param { CustomBuilder } [content_] - container
 * @returns { NavDestinationAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function NavDestination(
 style_: CustomBuilderT<NavDestinationAttribute>,
 content_?: CustomBuilder,
): NavDestinationAttribute;