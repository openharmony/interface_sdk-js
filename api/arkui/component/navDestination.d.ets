/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */


import { Resource } from '../../global/resource';
import { CustomBuilder, CommonMethod, Callback, LayoutSafeAreaType, LayoutSafeAreaEdge, Optional, UICommonMethod, AttributeModifier } from "./common";
import { Length, ResourceStr } from "./units";
import { TitleHeight, Curve } from "./enums";
import { NavPathInfo, NavPathStack, NavigationTitleOptions, NavigationMenuItem, NavigationToolbarOptions, ToolbarItem, NavigationMenuOptions, NavigationOperation, SystemBarStyle } from "./navigation";
import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';
import window from '../../@ohos.window';
import image from '../../@ohos.multimedia.image';
import { Scroller } from "./scroll";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Import the Orientation type from @ohos.window.
 *
 * @typedef { import('../api/@ohos.window').default.Orientation } Orientation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type Orientation = window.Orientation;
/**
 * Defines the navigation destination common title.
 *
 * @interface NavDestinationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface NavDestinationCommonTitle {
    /**
     * Sets the main title.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    main: string | Resource;
    /**
     * Sets the sub title.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    sub: string | Resource;
}
/**
 * Defines the navigation destination custom title.
 *
 * @interface NavDestinationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface NavDestinationCustomTitle {
    /**
     * Sets the custom title builder.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    builder: CustomBuilder;
    /**
     * Sets the custom title height.
     *
     * @type { TitleHeight | Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    height: TitleHeight | Length;
}
/**
 * Types of system Transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum NavigationSystemTransitionType {
    /**
     * Default system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT = 0,
    /**
     * None system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NONE = 1,
    /**
     * Configure only titlebar transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TITLE = 2,
    /**
     * Configure only content transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CONTENT = 3,
    /**
     * Configure fade style system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    FADE = 4,
    /**
     * Configure explode style system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    EXPLODE = 5,
    /**
     * Configure right-side slide style system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SLIDE_RIGHT = 6,
    /**
     * Configure bottom-side slide style system transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SLIDE_BOTTOM = 7
}
/**
 * NavDestination mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum NavDestinationMode {
    /**
     * Standard mode is default mode of NavDestination.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    STANDARD = 0,
    /**
     * Dialog mode is transparent by default and does not affect the life cycle of other NavDestination.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DIALOG = 1
}
/**
 * Reason of navDestination be active or inactive.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum NavDestinationActiveReason {
    /**
     * NavDestination become active or inactive because of page transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TRANSITION = 0,
    /**
     * NavDestination become active or inactive because content cover changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CONTENT_COVER = 1,
    /**
     * NavDestination become active or inactive because sheet changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SHEET = 2,
    /**
     * NavDestination become active or inactive because dialog changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DIALOG = 3,
    /**
     * NavDestination become active or inactive because overlay changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    OVERLAY = 4,
    /**
     * NavDestination become active or inactive because app state changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    APP_STATE = 5
}
/**
 * Indicates configuration info of destination.
 *
 * @interface RouteMapConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface RouteMapConfig {
    /**
     * Get destination name.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    name: string;
    /**
     * Get destination builder file position
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pageSourceFile: string;
    /**
     * Indicate the custom data of current destination.
     *
     * @type { Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    data: Object;
}
/**
 * Indicates the context of NavDestination.
 *
 * @interface NavDestinationContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface NavDestinationContext {
    /**
     * Get path info.
     *
     * @type { NavPathInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pathInfo: NavPathInfo;
    /**
     * Get stack of the Navigation where the NavDestination is located.
     *
     * @type { NavPathStack }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pathStack: NavPathStack;
    /**
     * Get the unique id of NavDestination, which is different from common property id of Component.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    navDestinationId?: string;
    /**
     * Get configuration of current Destination in module.json
     *
     * @returns {RouteMapConfig | undefined}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getConfigInRouteMap(): RouteMapConfig | undefined;
}
/**
 * Indicates the nested scrollable container components.
 *
 * @interface NestedScrollInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface NestedScrollInfo {
    /**
     * The controller of parent scrollable container component.
     *
     * @type { Scroller }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    parent: Scroller;
    /**
     * The controller of child scrollable container component.
     *
     * @type { Scroller }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    child: Scroller;
}
/**
* NavDestination animation protocol.
*
* @interface NavDestinationTransition
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 20
*/
export declare interface NavDestinationTransition {
    /**
     * This method is called after the transition ends to notify whether the transition was successful.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onTransitionEnd?: Callback<void>;
    /**
     * Define the limit duration of the transition animation.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    duration?: number;
    /**
     * Define the curve of the transition animation.
     *
     * @type { ?Curve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    curve?: Curve;
    /**
     * Define the delay of the transition animation.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    delay?: number;
    /**
     * Configure the custom transition event.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    event: Callback<void>;
}
export declare interface NavDestinationAttribute extends CommonMethod {
    /**
     * NavDestination title bar
     *
     * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource } value
     * @param { NavigationTitleOptions } [options] - Indicates the options of titlebar.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource | undefined, options?: NavigationTitleOptions | undefined): this;
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hideTitleBar(value: boolean | undefined): this;
    /**
     * Hide navigation title bar
     *
     * @param { boolean } hide
     * @param { boolean } animated
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hideTitleBar(hide: boolean | undefined, animated: boolean | undefined): this;
    /**
     * Hide navDestination back button
     *
     * @param { Optional<boolean> } hide
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hideBackButton(hide: boolean | undefined): this;
    /**
     * Invoked when the navDestination page is displayed.
     *
     * @param { function } callback - Indicates callback when the navDestination page is displayed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onShown(callback: (() => void) | undefined): this;
    /**
     * Invoked when the navDestination is hidden.
     *
     * @param { function } callback - Indicates callback when the navDestination is hidden.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onHidden(callback: (() => void) | undefined): this;
    /**
     * Invoked when the backButton is pressed.
     *
     * @param { function } callback - Indicates callback when the backButton is pressed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onBackPressed(callback: (() => boolean) | undefined): this;
    /**
     * Sets the different mode of NavDestination.
     *
     * @param { NavDestinationMode } value - NavDestinationMode
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mode(value: NavDestinationMode | undefined): this;
    /**
     * Set back button icon.
     *
     * @param { ResourceStr | PixelMap | SymbolGlyphModifier } value - Indicates icon of back button.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backButtonIcon(value: ResourceStr | image.PixelMap | SymbolGlyphModifier | undefined): this;
    /**
     * Set back button icon and accessibility broadcast content.
     *
     * @param { ResourceStr | PixelMap | SymbolGlyphModifier } icon - Indicates icon of back button.
     * @param { ResourceStr } accessibilityText - Indicates content needs to broadcast.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backButtonIcon(icon: ResourceStr | image.PixelMap | SymbolGlyphModifier | undefined, accessibilityText?: ResourceStr | undefined): this;
    /**
     * NavDestination title bar's menus
     *
     * @param { Array<NavigationMenuItem> | CustomBuilder } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    menus(value: Array<NavigationMenuItem> | CustomBuilder | undefined): this;
    /**
     * NavDestination title bar's menus
     *
     * @param { Array<NavigationMenuItem> | CustomBuilder } items
     * @param { NavigationMenuOptions } [options] - Indicates the options of menu.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    menus(items: Array<NavigationMenuItem> | CustomBuilder | undefined, options?: NavigationMenuOptions | undefined): this;
    /**
      * Configure toolbar with default style parameter or custom parameter.
      *
      * @param { Array<ToolbarItem> | CustomBuilder } toolbarParam - Toolbar configuration parameters.
      * @param { NavigationToolbarOptions } [options] - Indicates the options of toolbar.
      * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    toolbarConfiguration(toolbarParam: Array<ToolbarItem> | CustomBuilder | undefined, options?: NavigationToolbarOptions | undefined): this;
    /**
     * Hide tool bar
     *
     * @param { boolean } hide
     * @param { boolean } [animated]
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hideToolBar(hide: boolean | undefined, animated?: boolean | undefined): this;
    /**
     * Invoked before sub-components of NavDestination are created.
     *
     * @param { Callback<NavDestinationContext> } callback
     * - Indicates callback that invoked before sub-components of NavDestination are created.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onReady(callback: Callback<NavDestinationContext> | undefined): this;
    /**
     * Invoked before the navDestination is appeared.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is appeared.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillAppear(callback: Callback<void> | undefined): this;
    /**
     * Invoked before the navDestination is disappeared.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is disappeared.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDisappear(callback: Callback<void> | undefined): this;
    /**
     * Invoked before the navDestination is displayed.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is displayed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillShow(callback: Callback<void> | undefined): this;
    /**
     * Invoked before the navDestination is hidden.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is hidden.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillHide(callback: Callback<void> | undefined): this;
    /**
     * Set navDestination content expand types and edges.
     *
     * @param { Array<LayoutSafeAreaType> } [types] - Indicates the types of the safe area.
     * @param { Array<LayoutSafeAreaEdge> } [edges] - Indicates the edges of the safe area.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType> | undefined, edges?: Array<LayoutSafeAreaEdge> | undefined): this;
    /**
     * Set the style of system bar
     *
     * @param { Optional<SystemBarStyle> } style - The properties of system bar
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    systemBarStyle(style: SystemBarStyle | undefined): this;
    /**
     * Set the NavDestination can be restored after the application is terminated.
     * To enable this attribute, recoverable and id of Navigation must be set.
     *
     * @param { boolean } recoverable - set navdestination can be recovered.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    recoverable(recoverable: boolean | undefined): this;
    /**
     * Configuration of system transition
     *
     * @param { NavigationSystemTransitionType } type - Types of system Transition
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    systemTransition(type: NavigationSystemTransitionType | undefined): this;
    /**
     * Bind NavDestination to scrollable container components to automatically hide titlebar and toolbar.
     *
     * @param { Array<Scroller> } scrollers - The controllers of the scrollable container components.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindToScrollable(scrollers: Array<Scroller> | undefined): this;
    /**
     * Bind NavDestination to nested scrollable container components to automatically hide titlebar and toolbar.
     *
     * @param { Array<NestedScrollInfo> } scrollInfos - The controllers of the nested scrollable container components.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindToNestedScrollable(scrollInfos: Array<NestedScrollInfo> | undefined): this;
    /**
     * Invoked when destination is active.
     *
     * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is active.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onActive(callback: Callback<NavDestinationActiveReason> | undefined): this;
    /**
     * Invoked when destination is inactive.
     *
     * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is inactive.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onInactive(callback: Callback<NavDestinationActiveReason> | undefined): this;
    /**
     * Set NavDestination custom animation.
     *
     * @param { NavDestinationTransitionDelegate } delegate - The delegate of NavDestination custom animation.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    customTransition(delegate: NavDestinationTransitionDelegate | undefined): this;
    /**
     * Invoked when destination be pushed with singleton mode.
     *
     * @param { Optional<Callback<ESObject>> } callback - Indicates callback when destination be pushed with singleton mode.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onNewParam(callback: Callback<Object | undefined | null> | undefined): this;
    /**
     * Set NavDestination's preferred Orientation.
     *
     * @param { Optional<Orientation> } orientation - The preferred Orientation of NavDestination.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    preferredOrientation(orientation: Orientation | undefined): this;
    /**
     * Set statusBar to visible or invisible.
     *
     * @param { Optional<boolean> } enabled - Show statusBar if true, or hide statusBar if false.
     * @param { boolean } [animated] - Whether using animation during hiding or showing statusBar,
     *                                 using animation if true or not using animation if false.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableStatusBar(enabled: boolean | undefined, animated?: boolean | undefined): this;
    /**
     * Set navigationIndicator to visible or invisible.
     *
     * @param { Optional<boolean> } enabled - Show navigationIndicator if true, or hide navigationIndicator if false.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableNavigationIndicator(enabled: boolean | undefined): this;
    attributeModifier(modifier: AttributeModifier<NavDestinationAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Delegate function for NavDestination custom animation.
 *
 * @typedef { function } NavDestinationTransitionDelegate
 * @param { NavigationOperation } operation - the operation type of current Navigation animation.
 * @param { boolean } isEnter - whether current NavDestination will do enter-type transition.
 * @returns { Array<NavDestinationTransition> | undefined } user-set custom navDestination transitions.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type NavDestinationTransitionDelegate = (operation: NavigationOperation, isEnter: boolean) => Array<NavDestinationTransition> | undefined;
export declare interface UINavDestinationAttribute extends UICommonMethod {
    /**
     * NavDestination title bar
     *
     * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource } value
     * @param { NavigationTitleOptions } [options] - Indicates the options of titlebar.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource | undefined, options?: NavigationTitleOptions | undefined): this;
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    hideTitleBar(value: boolean | undefined): this;
    /**
     * Hide navigation title bar
     *
     * @param { boolean } hide
     * @param { boolean } animated
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    hideTitleBar(hide: boolean | undefined, animated: boolean | undefined): this;
    /**
     * Hide navDestination back button
     *
     * @param { Optional<boolean> } hide
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    hideBackButton(hide: boolean | undefined): this;
    /**
     * Invoked when the navDestination page is displayed.
     *
     * @param { function } callback - Indicates callback when the navDestination page is displayed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onShown(callback: (() => void) | undefined): this;
    /**
     * Invoked when the navDestination is hidden.
     *
     * @param { function } callback - Indicates callback when the navDestination is hidden.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onHidden(callback: (() => void) | undefined): this;
    /**
     * Invoked when the backButton is pressed.
     *
     * @param { function } callback - Indicates callback when the backButton is pressed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onBackPressed(callback: (() => boolean) | undefined): this;
    /**
     * Sets the different mode of NavDestination.
     *
     * @param { NavDestinationMode } value - NavDestinationMode
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    mode(value: NavDestinationMode | undefined): this;
    /**
     * Set back button icon.
     *
     * @param { ResourceStr | PixelMap | SymbolGlyphModifier } value - Indicates icon of back button.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    backButtonIcon(value: ResourceStr | image.PixelMap | SymbolGlyphModifier | undefined): this;
    /**
     * Set back button icon and accessibility broadcast content.
     *
     * @param { ResourceStr | PixelMap | SymbolGlyphModifier } icon - Indicates icon of back button.
     * @param { ResourceStr } accessibilityText - Indicates content needs to broadcast.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    backButtonIcon(icon: ResourceStr | image.PixelMap | SymbolGlyphModifier | undefined, accessibilityText?: ResourceStr | undefined): this;
    /**
     * NavDestination title bar's menus
     *
     * @param { Array<NavigationMenuItem> | CustomBuilder } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    menus(value: Array<NavigationMenuItem> | CustomBuilder | undefined): this;
    /**
     * NavDestination title bar's menus
     *
     * @param { Array<NavigationMenuItem> | CustomBuilder } items
     * @param { NavigationMenuOptions } [options] - Indicates the options of menu.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    menus(items: Array<NavigationMenuItem> | CustomBuilder | undefined, options?: NavigationMenuOptions | undefined): this;
    /**
      * Configure toolbar with default style parameter or custom parameter.
      *
      * @param { Array<ToolbarItem> | CustomBuilder } toolbarParam - Toolbar configuration parameters.
      * @param { NavigationToolbarOptions } [options] - Indicates the options of toolbar.
      * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    @memo
    toolbarConfiguration(toolbarParam: Array<ToolbarItem> | CustomBuilder | undefined, options?: NavigationToolbarOptions | undefined): this;
    /**
     * Hide tool bar
     *
     * @param { boolean } hide
     * @param { boolean } [animated]
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    hideToolBar(hide: boolean | undefined, animated?: boolean | undefined): this;
    /**
     * Invoked before sub-components of NavDestination are created.
     *
     * @param { Callback<NavDestinationContext> } callback
     * - Indicates callback that invoked before sub-components of NavDestination are created.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onReady(callback: Callback<NavDestinationContext> | undefined): this;
    /**
     * Invoked before the navDestination is appeared.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is appeared.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillAppear(callback: Callback<void> | undefined): this;
    /**
     * Invoked before the navDestination is disappeared.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is disappeared.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillDisappear(callback: Callback<void> | undefined): this;
    /**
     * Invoked before the navDestination is displayed.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is displayed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillShow(callback: Callback<void> | undefined): this;
    /**
     * Invoked before the navDestination is hidden.
     *
     * @param { Callback<void> } callback - Indicates callback before the navDestination is hidden.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillHide(callback: Callback<void> | undefined): this;
    /**
     * Set navDestination content expand types and edges.
     *
     * @param { Array<LayoutSafeAreaType> } [types] - Indicates the types of the safe area.
     * @param { Array<LayoutSafeAreaEdge> } [edges] - Indicates the edges of the safe area.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType> | undefined, edges?: Array<LayoutSafeAreaEdge> | undefined): this;
    /**
     * Set the style of system bar
     *
     * @param { Optional<SystemBarStyle> } style - The properties of system bar
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    systemBarStyle(style: SystemBarStyle | undefined): this;
    /**
     * Set the NavDestination can be restored after the application is terminated.
     * To enable this attribute, recoverable and id of Navigation must be set.
     *
     * @param { boolean } recoverable - set navdestination can be recovered.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    recoverable(recoverable: boolean | undefined): this;
    /**
     * Configuration of system transition
     *
     * @param { NavigationSystemTransitionType } type - Types of system Transition
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    systemTransition(type: NavigationSystemTransitionType | undefined): this;
    /**
     * Bind NavDestination to scrollable container components to automatically hide titlebar and toolbar.
     *
     * @param { Array<Scroller> } scrollers - The controllers of the scrollable container components.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindToScrollable(scrollers: Array<Scroller> | undefined): this;
    /**
     * Bind NavDestination to nested scrollable container components to automatically hide titlebar and toolbar.
     *
     * @param { Array<NestedScrollInfo> } scrollInfos - The controllers of the nested scrollable container components.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindToNestedScrollable(scrollInfos: Array<NestedScrollInfo> | undefined): this;
    /**
     * Invoked when destination is active.
     *
     * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is active.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onActive(callback: Callback<NavDestinationActiveReason> | undefined): this;
    /**
     * Invoked when destination is inactive.
     *
     * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is inactive.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onInactive(callback: Callback<NavDestinationActiveReason> | undefined): this;
    /**
     * Set NavDestination custom animation.
     *
     * @param { NavDestinationTransitionDelegate } delegate - The delegate of NavDestination custom animation.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    customTransition(delegate: NavDestinationTransitionDelegate | undefined): this;
    /**
     * Invoked when destination be pushed with singleton mode.
     *
     * @param { Optional<Callback<ESObject>> } callback - Indicates callback when destination be pushed with singleton mode.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onNewParam(callback: Callback<Object | undefined | null> | undefined): this;
    /**
     * Set NavDestination's preferred Orientation.
     *
     * @param { Optional<Orientation> } orientation - The preferred Orientation of NavDestination.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    preferredOrientation(orientation: Orientation | undefined): this;
    /**
     * Set statusBar to visible or invisible.
     *
     * @param { Optional<boolean> } enabled - Show statusBar if true, or hide statusBar if false.
     * @param { boolean } [animated] - Whether using animation during hiding or showing statusBar,
     *                                 using animation if true or not using animation if false.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableStatusBar(enabled: boolean | undefined, animated?: boolean | undefined): this;
    /**
     * Set navigationIndicator to visible or invisible.
     *
     * @param { Optional<boolean> } enabled - Show navigationIndicator if true, or hide navigationIndicator if false.
     * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableNavigationIndicator(enabled: boolean | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<NavDestinationAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function NavDestination(
    
    @memo
    content_?: () => void,
): UINavDestinationAttribute