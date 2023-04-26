/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
declare interface NavigationCommonTitle {
  /**
   * Sets the main title.
   * @since 9
   */
  main: string;

  /**
   * Sets the sub title.
   * @since 9
   */
  sub: string;
}

/**
 * Defines the navigation custom title.
 * @since 9
 */
declare interface NavigationCustomTitle {
  /**
   * Sets the custom title builder.
   * @since 9
   */
  builder: CustomBuilder;

  /**
   * Sets the custom title height.
   * @since 9
   */
  height: TitleHeight | Length;
}

/**
 * Navigation mode
 * @since 9
 */
declare enum NavigationMode {
  /**
   * The navigation bar and the content area are displayed in stack.
   * @since 9
   */
  Stack,
  /**
   * The navigation bar and the content area are displayed side by side.
   * @since 9
   */
  Split,
  /**
  * If the window width is greater than 520vp, the navigation component is displayed in split mode.
  * Otherwise it's displayed in stack mode.
  * @since 9
  */
  Auto,
}

/**
 * Navigation bar position
 * @since 9
 */
declare enum NavBarPosition {
  /**
   * The navigation bar is on the Start of the container
   * @since 9
   */
  Start,
  /**
   * The navigation bar is on the End of the container
   * @since 9
   */
  End,
}

/**
 * Navigation title mode.
 * @since 8
 */
declare enum NavigationTitleMode {
  /**
   * The title is free mode.
   * @since 8
   */
  Free = 0,

  /**
   * The title is full mode.
   * @since 8
   */
  Full,

  /**
   * The title is mini mode.
   * @since 8
   */
  Mini,
}

declare interface NavigationMenuItem {
  /**
   * The value of navigation menu item.
   * @since 8
   */
  value: string;
  /**
   * The icon of navigation menu item.
   * @since 8
   */
  icon?: string;
  /**
   * Trigger by navigation menu item click.
   * @since 8
   */
  action?: () => void;
}

/**
 * Indicates the information of route page.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class NavPathInfo {
  /**
   * Creates an instance of NavPathInfo.
   * @param { string } name The name of route page.
   * @param { unknown } param The detailed parameter of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  constructor(name: string, param: unknown);

  /**
   * The name of route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @type { string }
   * @since 10
   */
  name: string;

  /**
   * The detailed parameter of the route page.
   * @type { unknown }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  param?: unknown;
}

declare class NavPathStack {

  /**
   * Creates an instance of NavPathStack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  constructor();
  
  /**
   * Pushes the route page into the stack.
   * @param { NavPathInfo } info Indicates the route page to be pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  push(info: NavPathInfo): void;

  /**
   * Pushes the specified route page into the stack.
   * @param { string } name Indicates the name of the route page to be pushed.
   * @param { unknown } param Indicates the detailed parameter of the route page to be pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  pushName(name: string, param: unknown): void;

  /**
   * Pops the top route page out of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns undefined.
   * @since 10
   */
  pop(): NavPathInfo | undefined;

  /**
   * Pops the specified route page out of the stack.
   * @param { string } name Indicates the name of the route page to be popped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { number } Returns the index of the route page if it exists in the stack, otherwise returns -1;
   * @since 10
   */
  popTo(name: string): number;

  /**
   * Pops the specified route page out of the stack.
   * @param { number } index Indicates the index of the route page to be popped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  popToIndex(index: number): void;

  /**
   * Moves the specified route page to stack top.
   * @param { string } name Indicates the name of the route page to be moved to the top.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { number } Returns the index of the route page if it exists in the stack, otherwise returns -1;
   * @since 10
   */ 
  moveToTop(name: string): number;

  /**
   * Moves the specified route page to stack top.
   * @param { number } index Indicates the index of the route page to be moved to the top.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */ 
  moveIndexToTop(index: number): void;

  /**
   * Clears the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */  
  clear(): void;

  /**
   * Obtains all the page name in the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { Array<string> } Returns all the page name in the stack;
   * @since 10
   */ 
  getAllPathName(): Array<string>;

  /**
   * Obtains the param of the specified route page.
   * @param { number } index Indicates the index of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { unknown | undefined } Returns the detailed parameter of the route page if it exists in the stack, otherwise returns undefined;
   * @since 10
   */ 
  getParamByIndex(index: number): unknown | undefined;

  /**
   * Obtains the param of the specified route page.
   * @param { string } name Indicates the name of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { Array<unknown> } Returns the detailed parameter of all the route pages named name.
   * @since 10
   */
  getParamByName(name: string): Array<unknown>;

  /**
   * Obtains the index of the specified route page.
   * @param { string } name Indicates the name of the route page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { Array<number> } Returns the index of all the route pages named name.
   * @since 10
   */
  getIndexByName(name: string): Array<number>;

  /**
   * Obtains the size of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { number } Returns the size of the stack.
   * @since 10
   */
  size(): number;
}

/**
 * Provide navigator view interface
 * @since 8
 */
interface NavigationInterface {
  /**
   * Called when the navigator view interface is used.
   * @since 8
   */
  (): NavigationAttribute;

  /**
   * Called when the navigator view interface is used, with route table provided.
   * @param { NavPathStack } pathInfos The stack of the route table.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @since 10
   */
  (pathInfos: NavPathStack): NavigationAttribute;
}

/**
 * Declare Navigation view properties.
 * @since 8
 */
declare class NavigationAttribute extends CommonMethod<NavigationAttribute> {
  /**
   * Sets the width of navigation bar.
   * @since 9
   */
  navBarWidth(value: Length): NavigationAttribute;

  /**
   * Sets the position of navigation bar.
   * @since 9
   */
  navBarPosition(value: NavBarPosition): NavigationAttribute;

  /**
   * Sets the mode of navigation.
   * @since 9
   */
  mode(value: NavigationMode): NavigationAttribute;

  /**
   * Sets the back button icon.
   * @since 9
   */
  backButtonIcon(value: string | PixelMap | Resource): NavigationAttribute;

  /**
   * Hide the navigation bar.
   * @since 9
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
  hideTitleBar(value: boolean): NavigationAttribute;

  /**
   * Hide navigation back button
   * @since 8
   */
  hideBackButton(value: boolean): NavigationAttribute;

  /**
   * Navigation title mode
   * @since 8
   */
  titleMode(value: NavigationTitleMode): NavigationAttribute;

  /**
   * Navigation title bar's menus
   * @since 8
   */
  menus(value: Array<NavigationMenuItem> | CustomBuilder): NavigationAttribute;

  /**
   * Tool bar
   * @since 8
   */
  toolBar(value: object | CustomBuilder): NavigationAttribute;

  /**
   * Hide tool bar
   * @since 8
   */
  hideToolBar(value: boolean): NavigationAttribute;

  /**
   * Trigger callback when title mode change finished at free mode.
   * @since 8
   */
  onTitleModeChange(callback: (titleMode: NavigationTitleMode) => void): NavigationAttribute;

  /**
   * Trigger callback when the visibility of navigation bar change.
   * @since 9
   */
  onNavBarStateChange(callback: (isVisible: boolean) => void): NavigationAttribute;

  /**
   * Set builder for user-defined NavDestination component.
   * @param { (name: string, param: unknown) => void } builder The builder function of NavDestination component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @since 10
   */
  navDestination(builder: (name: string, param: unknown) => void): NavigationAttribute;
}

/**
 * Defines Navigation Component.
 * @since 8
 */
declare const Navigation: NavigationInterface;

/**
 * Defines Navigation Component instance.
 * @since 8
 */
declare const NavigationInstance: NavigationAttribute;
