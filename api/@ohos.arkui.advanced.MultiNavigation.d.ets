/**
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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

import base from '@ohos.base';

/**
 * Enumerates the types of pages in **MultiNavigation**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export declare enum SplitPolicy {

  /**
   * Home page. Displayed in full-screen mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  HOME_PAGE = 0,

  /**
   * Detail page. Displayed in split-screen mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  DETAIL_PAGE = 1,

  /**
   * Full-screen page. Displayed in full-screen mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  FULL_PAGE = 2
}

/**
 * **MultiNavigation** is a component designed for multi-column display and routing navigation on large-screen devices.
 *
 * > **NOTE**
 *
 * > Due to the nested stack structure of **MultiNavigation**, calling APIs explicitly stated as unsupported in this
 * > document or APIs not listed in the supported API list (such as **getParent**, **setInterception**, and
 * > **pushDestination**) may lead to unpredictable issues.
 *
 * > In scenarios with deep nesting, **MultiNavigation** may encounter routing animation issues.
 *
 * @struct { MultiNavigation }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
@Component
export declare struct MultiNavigation {

  /**
   * Navigation stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @State
  multiStack: MultiNavPathStack;

  /**
   * Routing rules for loading the target page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @BuilderParam
  navDestination: NavDestinationBuildFunction;

  /**
   * Callback invoked when the mode of the **MultiNavigation** component changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onNavigationModeChange?: OnNavigationModeChangeCallback;

  /**
   * Callback invoked when the home page is on the top of the navigation stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onHomeShowOnTop?: OnHomeShowOnTopCallback;
}

/**
 * Implements a navigation stack of the **MultiNavigation** component. Currently, this stack can be created only by the
 * user and cannot be obtained through callbacks. Do not use events or APIs such as **onReady** of **NavDestination** to
 * obtain the navigation stack and perform stack operations, as this may lead to unpredictable issues.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export declare class MultiNavPathStack extends NavPathStack {

  /**
   * Creates an instance of MultiNavPathStack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  constructor();

  /**
   * Pushes the specified navigation destination page to the navigation stack.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @param { SplitPolicy } [policy] - Policy for the current page being pushed. Default value: **DETAIL_PAGE**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPath(info: NavPathInfo, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * Pushes the specified navigation destination page to the navigation stack, with stack operation settings through
   * **NavigationOptions**.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { NavigationOptions } [options] - Stack operation settings. Only the **animated** field is supported.
   * @param { SplitPolicy } [policy] - Policy for the current page being pushed. Default value: **DETAIL_PAGE**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPath(info: NavPathInfo, options?: NavigationOptions, policy?: SplitPolicy): void;

  /**
   * Pushes the navigation destination page specified by **name** to the navigation stack, passing the data specified by
   * **param**.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } param - Detailed parameters of the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @param { SplitPolicy } [policy] - Policy for the current page being pushed. Default value: **DETAIL_PAGE**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPathByName(name: string, param: Object, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * Pushes the navigation destination page specified by **name** to the navigation stack, passing the data specified by
   * **param**. This API uses the **onPop** callback to handle the result returned when the page is popped out of the
   * stack.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } param - Detailed parameters of the navigation destination page.
   * @param { base.Callback<PopInfo> } [onPop] - Callback used to handle the return result.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @param { SplitPolicy } [policy] - Policy for the current page being pushed. Default value: **DETAIL_PAGE**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPathByName(
    name: string, param: Object, onPop?: base.Callback<PopInfo>, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * Replaces the current top page on the stack with the specified navigation destination page. The new page inherits
   * the split policy of the original top page.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  replacePath(info: NavPathInfo, animated?: boolean): void;

  /**
   * Replaces the current top page on the stack with the specified navigation destination page, with stack operation
   * settings through **NavigationOptions**. The new page inherits the split policy of the original top page.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { NavigationOptions } [options] - Stack operation settings. Only the **animated** field is supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  replacePath(info: NavPathInfo, options?: NavigationOptions): void;

  /**
   * Replaces the current top page on the stack with the navigation destination page specified by **name**. The new page
   * inherits the split policy of the original top page.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } param - Detailed parameters of the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  replacePathByName(name: string, param: Object, animated?: boolean): void;

  /**
   * Removes the navigation destination pages specified by **indexes** from the navigation stack.
   *
   * @param { Array<number> } indexes - Array of indexes of the navigation destination pages to remove.<br>Value range
   *     of the number type: [0, +∞).
   * @returns { number } Number of the navigation destination pages removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  removeByIndexes(indexes: Array<number>): number;

  /**
   * Removes the navigation destination page specified by **name** from the navigation stack.
   *
   * @param { string } name - Name of the navigation destination page to be removed.
   * @returns { number } Number of the navigation destination pages removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  removeByName(name: string): number;

  /**
   * Pops the top element out of the navigation stack.
   *
   * > **NOTE**
   *
   * > If [keepBottomPage]{@link MultiNavPathStack#keepBottomPage} is called with **true**, the bottom page of the
   * > navigation stack is retained.
   *
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @returns { NavPathInfo | undefined } Information about the navigation destination page at the top of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pop(animated?: boolean): NavPathInfo | undefined;

  /**
   * Pops the top element out of the navigation stack and invokes the **onPop** callback to pass the page processing
   * result.
   *
   * > **NOTE**
   *
   * > If [keepBottomPage]{@link MultiNavPathStack#keepBottomPage} is called with **true**, the bottom page of the
   * > navigation stack is retained.
   *
   * @param { Object } [result] - Custom processing result on the page.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @returns { NavPathInfo | undefined } Information about the navigation destination page at the top of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pop(result?: Object, animated?: boolean): NavPathInfo | undefined;

  /**
   * Pops pages until the first navigation destination page that matches **name** from the bottom of the navigation
   * stack is at the top of the stack.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @returns { number } Returns the index of the first navigation destination page that matches **name** from the
   *     bottom of the navigation stack; returns **-1** if no such a page is found.
   *     <br>Value range: [-1, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToName(name: string, animated?: boolean): number;

  /**
   * Pops pages until the first navigation destination page that matches **name** from the bottom of the navigation
   * stack is at the top of the stack. This API uses the **onPop** callback to pass in the page processing result.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } result - Custom processing result on the page.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @returns { number } Returns the index of the first navigation destination page that matches **name** from the
   *     bottom of the navigation stack; returns **-1** if no such a page is found.
   *     <br>Value range: [-1, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToName(name: string, result: Object, animated?: boolean): number;

  /**
   * Returns the navigation stack to the page specified by **index**.
   *
   * @param { number } index - Index of the navigation destination page.<br>Value range: [0, +∞).
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToIndex(index: number, animated?: boolean): void;

  /**
   * Returns the navigation stack to the page specified by **index** and invokes the **onPop** callback to pass the page
   * processing result.
   *
   * @param { number } index - Index of the navigation destination page.<br>Value range: [0, +∞).
   * @param { Object } result - Custom processing result on the page.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToIndex(index: number, result: Object, animated?: boolean): void;

  /**
   * Moves the first navigation destination page that matches **name** from the bottom of the navigation stack to the
   * top of the stack.
   *
   * > **NOTE**
   *
   * > Depending on the type of page found, **MultiNavigation** performs different actions:
   *
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @returns { number } Returns the index of the first navigation destination page that matches **name** from the
   *     bottom of the navigation stack; returns **-1** if no such a page is found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  moveToTop(name: string, animated?: boolean): number;

  /**
   * Moves the navigation destination page specified by **index** to the top of the navigation stack.
   *
   * > **NOTE**
   *
   * > Depending on the type of page found, **MultiNavigation** performs different actions:
   *
   *
   * @param { number } index - Index of the navigation destination page.<br>Value range: [0, +∞).
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  moveIndexToTop(index: number, animated?: boolean): void;

  /**
   * Clears the navigation stack.
   *
   * > **NOTE**
   *
   * > If [keepBottomPage]{@link MultiNavPathStack#keepBottomPage} is called with **true**, the bottom page of the
   * > navigation stack is retained.
   *
   * @param { boolean } [animated] - Whether to support the transition animation.<br>Default value: **true**.<br>
   *     **true**: The transition animation is supported.<br>**false**: The transition animation is not supported.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  clear(animated?: boolean): void;

  /**
   * Obtains the names of all navigation destination pages in the navigation stack.
   *
   * @returns { Array<string> } Names of all navigation destination pages in the navigation stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getAllPathName(): Array<string>;

  /**
   * Obtains the parameter information of the navigation destination page specified by **index**.
   *
   * @param { number } index - Index of the navigation destination page.<br>Value range: [0, +∞).
   * @returns { unknown | undefined } **Object**: parameter information of the matching navigation destination page.
   *     <br>**undefined**: returned when an invalid index is provided.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getParamByIndex(index: number): Object | undefined;

  /**
   * Obtains the parameter information of all the navigation destination pages that match **name**.
   *
   * @param { string } name - Name of the navigation destination page.
   * @returns { Array<Object> } Parameter information of all the matching navigation destination pages.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getParamByName(name: string): Array<Object>;

  /**
   * Obtains the indexes of all the navigation destination pages that match **name**.
   *
   * @param { string } name - Name of the navigation destination page.
   * @returns { Array<number> } Indexes of all the matching navigation destination pages.
   *     <br>Value range of the number type: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getIndexByName(name: string): Array<number>;

  /**
   * Obtains the stack size.
   *
   * @returns { number } Stack size.
   *     <br>Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  size(): number;

  /**
   * Disables or enables the transition animation in the **MultiNavigation** component.
   *
   * @param { boolean } disable - Whether to disable the transition animation.<br>Default value: **false**.<br>**true**:
   *     The transition animation is disabled.<br>**false**: The transition animation is not disabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  disableAnimation(disable: boolean): void;

  /**
   * Switches the display mode of the current top detail page in the stack.
   *
   * @param { boolean } [isFullScreen] - Whether to enable full-screen mode. The default value is **false**. The value
   *     **true** means to enable full-screen mode, and **false** means to enable split-screen mode.
   * @returns { boolean } Whether the switching is successful.
   *     <br>**true**: The switching is successful.
   *     <br>**false**: The switching failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  switchFullScreenState(isFullScreen?: boolean): boolean;

  /**
   * Sets the draggable range for the home page width. If not set, the width defaults to 50% and is not draggable.
   *
   * @param { number } minPercent - Minimum width percentage of the home page.<br>Value range: [0, 100]
   * @param { number } maxPercent - Maximum width percentage of the home page.<br>Value range: [0, 100]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setHomeWidthRange(minPercent: number, maxPercent: number): void;

  /**
   * Sets whether to retain the bottom page when the **pop** or **clear** APIs is called.
   *
   * > **NOTE**
   *
   * > **MultiNavigation** treats the home page as a navigation destination page in the stack. By default, calling
   * > **pop** or **clear** will also remove the bottom page.
   * > > If this API is called with **TRUE**, **MultiNavigation** will retain the bottom page when the **pop** or
   * > **clear** API is called.
   *
   * @param { boolean } keepBottom - Whether to retain the bottom page.<br>Default value: **false**.<br>**true**: The
   *     bottom page is retained.<br>**false**: The bottom page is not retained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  keepBottomPage(keepBottom: boolean): void;

  /**
   * Sets a placeholder page.
   *
   * > **NOTE**
   *
   * > The placeholder page is a special page type. When set, it forms a default split-screen effect with the home page
   * > on some large-screen devices, that is, the left side is the home page, and the right side is the placeholder
   * > page.
   *
   * > In scenarios where the application's drawable area is less than 600 vp, or when a foldable screen switches from
   * > the expanded state to the folded state, or when a tablet switches from landscape to portrait mode, the
   * > placeholder page will be automatically removed, resulting in only the home page being shown.
   * > > Conversely, when the application's drawable area is greater than or equal to 600 vp, or when a foldable screen
   * > switches from the folded state to the expanded state, or when a tablet switches from portrait to landscape mode,
   * > the placeholder page will be automatically added to form a split-screen.
   *
   * @param { NavPathInfo } info - Information about the placeholder page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setPlaceholderPage(info: NavPathInfo): void;
}

/**
 * Represents the function used by the **MultiNavigation** component to load navigation destination pages.
 *
 * @param { string } name - ID of the navigation destination page.
 * @param { object } [param] - Parameters passed when the page is created during navigation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
declare type NavDestinationBuildFunction = (name: string, param?: object) => void;

/**
 * Represents the callback invoked when the mode of the **MultiNavigation** component changes.
 *
 * @param { NavigationMode } mode - Navigation mode when the callback is invoked.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
declare type OnNavigationModeChangeCallback = (mode: NavigationMode) => void;

/**
 * Represents the callback invoked when the home page is displayed at the top of the stack.
 *
 * @param { string } name - ID of the page displayed at the top of the stack.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
declare type OnHomeShowOnTopCallback = (name: string) => void;