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
 * Defines the navigation common title.
 * @since 9
 */
/**
 * Defines the navigation common title.
 * @crossplatform
 * @since 10
 */
declare interface NavigationCommonTitle {
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
 * Defines the navigation custom title.
 * @since 9
 */
/**
 * Defines the navigation custom title.
 * @crossplatform
 * @since 10
 */
declare interface NavigationCustomTitle {
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
 * Navigation mode
 * @since 9
 */
/**
 * Navigation mode
 * @crossplatform
 * @since 10
 */
declare enum NavigationMode {
  /**
   * The navigation bar and the content area are displayed in stack.
   * @since 9
   */
  /**
   * The navigation bar and the content area are displayed in stack.
   * @crossplatform
   * @since 10
   */
  Stack,

  /**
   * The navigation bar and the content area are displayed side by side.
   * @since 9
   */
  /**
   * The navigation bar and the content area are displayed side by side.
   * @crossplatform
   * @since 10
   */
  Split,

  /**
   * If the window width is greater than 520vp, the navigation component is displayed in split mode.
   * Otherwise it's displayed in stack mode.
   * @since 9
   */
  /**
   * If the window width is greater than the sum of minNavBarWidth and minContentWidth, the navigation component is displayed in split mode.
   * Otherwise it's displayed in stack mode.
   * @crossplatform
   * @since 10
   */
  Auto,
}

/**
 * Navigation bar position
 * @since 9
 */
/**
 * Navigation bar position
 * @crossplatform
 * @since 10
 */
declare enum NavBarPosition {
  /**
   * The navigation bar is on the Start of the container
   * @since 9
   */
  /**
   * The navigation bar is on the Start of the container
   * @crossplatform
   * @since 10
   */
  Start,

  /**
   * The navigation bar is on the End of the container
   * @since 9
   */
  /**
   * The navigation bar is on the End of the container
   * @crossplatform
   * @since 10
   */
  End,
}

/**
 * Navigation title mode.
 * @since 8
 */
/**
 * Navigation title mode.
 * @crossplatform
 * @since 10
 */
declare enum NavigationTitleMode {
  /**
   * The title is free mode.
   * @since 8
   */
  /**
   * The title is free mode.
   * @crossplatform
   * @since 10
   */
  Free = 0,

  /**
   * The title is full mode.
   * @since 8
   */
  /**
   * The title is full mode.
   * @crossplatform
   * @since 10
   */
  Full,

  /**
   * The title is mini mode.
   * @since 8
   */
  /**
   * The title is mini mode.
   * @crossplatform
   * @since 10
   */
  Mini,
}

declare interface NavigationMenuItem {
  /**
   * The value of navigation menu item.
   * @since 8
   */
  /**
   * The value of navigation menu item.
   * @crossplatform
   * @since 10
   */
  value: string;

  /**
   * The icon of navigation menu item.
   * @since 8
   */
  /**
   * The icon of navigation menu item.
   * @crossplatform
   * @since 10
   */
  icon?: string;

  /**
   * Trigger by navigation menu item click.
   * @since 8
   */
  /**
   * Trigger by navigation menu item click.
   * @crossplatform
   * @since 10
   */
  action?: () => void;
}

/**
 * Indicates the information of route page.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class NavPathInfo {
  /**
   * Creates an instance of NavPathInfo.
   * @param { string } name The name of route page.
   * @param { unknown } param The detailed parameter of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor(name: string, param: unknown);

  /**
   * The name of route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @type { string }
   * @crossplatform
   * @since 10
   */
  name: string;

  /**
   * The detailed parameter of the route page.
   * @type { unknown }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  param?: unknown;
}

declare class NavPathStack {
  /**
   * Creates an instance of NavPathStack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Pushes the route page into the stack.
   * @param { NavPathInfo } info Indicates the route page to be pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  push(info: NavPathInfo): void;

  /**
   * Pushes the specified route page into the stack.
   * @param { string } name Indicates the name of the route page to be pushed.
   * @param { unknown } param Indicates the detailed parameter of the route page to be pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  pushName(name: string, param: unknown): void;

  /**
   * Pops the top route page out of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns undefined.
   * @crossplatform
   * @since 10
   */
  pop(): NavPathInfo | undefined;

  /**
   * Pops the specified route page out of the stack.
   * @param { string } name Indicates the name of the route page to be popped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { number } Returns the index of the route page if it exists in the stack, otherwise returns -1;
   * @crossplatform
   * @since 10
   */
  popTo(name: string): number;

  /**
   * Pops the specified route page out of the stack.
   * @param { number } index Indicates the index of the route page to be popped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  popToIndex(index: number): void;

  /**
   * Moves the specified route page to stack top.
   * @param { string } name Indicates the name of the route page to be moved to the top.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { number } Returns the index of the route page if it exists in the stack, otherwise returns -1;
   * @crossplatform
   * @since 10
   */
  moveToTop(name: string): number;

  /**
   * Moves the specified route page to stack top.
   * @param { number } index Indicates the index of the route page to be moved to the top.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  moveIndexToTop(index: number): void;

  /**
   * Clears the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  clear(): void;

  /**
   * Obtains all the page name in the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { Array<string> } Returns all the page name in the stack;
   * @crossplatform
   * @since 10
   */
  getAllPathName(): Array<string>;

  /**
   * Obtains the param of the specified route page.
   * @param { number } index Indicates the index of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { unknown | undefined } Returns the detailed parameter of the route page if it exists in the stack, otherwise returns undefined;
   * @crossplatform
   * @since 10
   */
  getParamByIndex(index: number): unknown | undefined;

  /**
   * Obtains the param of the specified route page.
   * @param { string } name Indicates the name of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { Array<unknown> } Returns the detailed parameter of all the route pages named name.
   * @crossplatform
   * @since 10
   */
  getParamByName(name: string): Array<unknown>;

  /**
   * Obtains the index of the specified route page.
   * @param { string } name Indicates the name of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { Array<number> } Returns the index of all the route pages named name.
   * @crossplatform
   * @since 10
   */
  getIndexByName(name: string): Array<number>;

  /**
   * Obtains the size of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { number } Returns the size of the stack.
   * @crossplatform
   * @since 10
   */
  size(): number;
}

/**
 * Provide navigator view interface
 * @since 8
 */
/**
 * Provide navigator view interface
 * @crossplatform
 * @since 10
 */
interface NavigationInterface {
  /**
   * Called when the navigator view interface is used.
   * @since 8
   */
  /**
   * Called when the navigator view interface is used.
   * @crossplatform
   * @since 10
   */
  (): NavigationAttribute;

  /**
   * Called when the navigator view interface is used, with route table provided.
   * @param { NavPathStack } pathInfos The stack of the route table.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @crossplatform
   * @since 10
   */
  (pathInfos: NavPathStack): NavigationAttribute;
}

/**
 * Defines the status of toolbar item and it is used in the ToolbarItem interface.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum ToolbarItemStatus {
  /**
   * Normal state of toolbar item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NORMAL = 0,

  /**
   * Disable state of toolbar item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DISABLED = 1,

  /**
   * Active state of toolbar item.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ACTIVE = 2,
}

/**
 * Defines configurable parameters for toolbar item.
 * @interface ToolbarItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ToolbarItem {
  /**
   * The value of navigation toolbar item.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  value: ResourceStr;

  /**
   * The icon of navigation toolbar item.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  icon?: ResourceStr;

  /**
   * Trigger by navigation toolbar item click.
   * @type { ?() => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  action?: () => void;

  /**
   * The state of navigation toolbar item.
   * @type { ?ToolbarItemStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  status?: ToolbarItemStatus;

  /**
   * The icon of navigation toolbar item in active state.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  activeIcon?: ResourceStr;
}

/**
 * Declare Navigation view properties.
 * @since 8
 */
/**
 * Declare Navigation view properties.
 * @crossplatform
 * @since 10
 */
declare class NavigationAttribute extends CommonMethod<NavigationAttribute> {
  /**
   * Sets the width of navigation bar.
   * @since 9
   */
  /**
   * Sets the width of navigation bar.
   * @crossplatform
   * @since 10
   */
  navBarWidth(value: Length): NavigationAttribute;

  /**
   * Sets the position of navigation bar.
   * @since 9
   */
  /**
   * Sets the position of navigation bar.
   * @crossplatform
   * @since 10
   */
  navBarPosition(value: NavBarPosition): NavigationAttribute;

  /**
   * Sets the minimum width and the maximum width of navigation bar.
   * @param { [Dimension, Dimension] } value The minimum and the maximum width of navigation bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { NavigationAttribute }
   * @since 10
   * @crossplatform
   */
  navBarWidthRange(value: [Dimension, Dimension]): NavigationAttribute;

  /**
   * Sets the minimum width of content.
   * @default value is 360vp.
   * @param { Dimension } value The minimum width of content.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { NavigationAttribute }
   * @since 10
   * @crossplatform
   */
  minContentWidth(value: Dimension): NavigationAttribute;

  /**
   * Sets the mode of navigation.
   * @since 9
   */
  /**
   * Sets the mode of navigation.
   * @crossplatform
   * @since 10
   */
  mode(value: NavigationMode): NavigationAttribute;

  /**
   * Sets the back button icon.
   * @since 9
   */
  /**
   * Sets the back button icon.
   * @crossplatform
   * @since 10
   */
  backButtonIcon(value: string | PixelMap | Resource): NavigationAttribute;

  /**
   * Hide the navigation bar.
   * @since 9
   */
  /**
   * Hide the navigation bar.
   * @crossplatform
   * @since 10
   */
  hideNavBar(value: boolean): NavigationAttribute;

  /**
   * Navigation title
   * @type { (string | CustomBuilder) }
   * @since 8
   */
  /**
   * Navigation title
   * @type { (string | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle) }
   * @since 9
   */
  /**
   * Navigation title
   * @type { (ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle) }
   * @crossplatform
   * @since 10
   */
  title(value: ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle): NavigationAttribute;

  /**
   * Navigation subtitle
   * @since 8
   * @deprecated since 9
   * @useinstead title
   */
  subTitle(value: string): NavigationAttribute;

  /**
   * Hide navigation title bar
   * @since 8
   */
  /**
   * Hide navigation title bar
   * @crossplatform
   * @since 10
   */
  hideTitleBar(value: boolean): NavigationAttribute;

  /**
   * Hide navigation back button
   * @since 8
   */
  /**
   * Hide navigation back button
   * @crossplatform
   * @since 10
   */
  hideBackButton(value: boolean): NavigationAttribute;

  /**
   * Navigation title mode
   * @since 8
   */
  /**
   * Navigation title mode
   * @crossplatform
   * @since 10
   */
  titleMode(value: NavigationTitleMode): NavigationAttribute;

  /**
   * Navigation title bar's menus
   * @since 8
   */
  /**
   * Navigation title bar's menus
   * @crossplatform
   * @since 10
   */
  menus(value: Array<NavigationMenuItem> | CustomBuilder): NavigationAttribute;

  /**
   * Tool bar
   * @since 8
   * @deprecated since 10
   * @useinstead toolbarConfiguration
   */
  toolBar(value: object | CustomBuilder): NavigationAttribute;

  /**
   * Configure toolbar with default style parameter or custom parameter.
   * @param { Array<ToolbarItem> | CustomBuilder } value - Toolbar configuration parameters.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  toolbarConfiguration(value: Array<ToolbarItem> | CustomBuilder): NavigationAttribute;

  /**
   * Hide tool bar
   * @since 8
   */
  /**
   * Hide tool bar
   * @crossplatform
   * @since 10
   */
  hideToolBar(value: boolean): NavigationAttribute;

  /**
   * Trigger callback when title mode change finished at free mode.
   * @since 8
   */
  /**
   * Trigger callback when title mode change finished at free mode.
   * @crossplatform
   * @since 10
   */
  onTitleModeChange(callback: (titleMode: NavigationTitleMode) => void): NavigationAttribute;

  /**
   * Trigger callback when the visibility of navigation bar change.
   * @since 9
   */
  /**
   * Trigger callback when the visibility of navigation bar change.
   * @crossplatform
   * @since 10
   */
  onNavBarStateChange(callback: (isVisible: boolean) => void): NavigationAttribute;

  /**
   * Set builder for user-defined NavDestination component.
   * @param { (name: string, param: unknown) => void } builder The builder function of NavDestination component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @crossplatform
   * @since 10
   */
  navDestination(builder: (name: string, param: unknown) => void): NavigationAttribute;
}

/**
 * Defines Navigation Component.
 * @since 8
 */
/**
 * Defines Navigation Component.
 * @crossplatform
 * @since 10
 */
declare const Navigation: NavigationInterface;

/**
 * Defines Navigation Component instance.
 * @since 8
 */
/**
 * Defines Navigation Component instance.
 * @crossplatform
 * @since 10
 */
declare const NavigationInstance: NavigationAttribute;
