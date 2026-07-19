/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * Import the Material type for Navigation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type Material = import('../api/@ohos.arkui.uiMaterial').default.Material;

/**
 * Describes the properties of the status bar. These properties are valid for the page-level status bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare type SystemBarStyle = import('../api/@ohos.window').default.SystemBarStyle;

/**
 * Defines a general title for the **Navigation** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface NavigationCommonTitle {

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
 * Defines a custom title for the **Navigation** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface NavigationCustomTitle {

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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  height: TitleHeight | Length;
}

/**
 * Display mode of the navigation page. When **Navigation** is displayed in split-column mode, a divider is displayed
 * between the navigation page and the content area.
 *
 * > **NOTE**
 * >
 * > For simplicity, **calcNavBarWidth** is defined as follows: Component width �C minContentWidth �C Divider width (1 px)
 *
 * **Table 1** Relationship between actual navBarWidth and the developer-defined value
 *
 * | Developer-defined navBarWidth| calcNavBarWidth Value| Actual navBarWidth|
 * | --- | --- | --- |
 * | navBarWidth < minNavBarWidth | NA | minNavBarWidth |
 * | navBarWidth > maxNavBarWidth | calcNavBarWidth > maxNavBarWidth | maxNavBarWidth |
 * | navBarWidth > maxNavBarWidth | calcNavBarWidth < minNavBarWidth | minNavBarWidth |
 * | navBarWidth > maxNavBarWidth | minNavBarWidth �� calcNavBarWidth �� maxNavBarWidth | calcNavBarWidth |
 * | minNavBarWidth �� navBarWidth �� maxNavBarWidth | calcNavBarWidth �� minNavBarWidth | minNavBarWidth |
 * | minNavBarWidth �� navBarWidth �� maxNavBarWidth | minNavBarWidth < calcNavBarWidth <= navBarWidth | calcNavBarWidth |
 * | minNavBarWidth �� navBarWidth �� maxNavBarWidth | calcNavBarWidth > navBarWidth | navBarWidth |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum NavigationMode {

  /**
   * The navigation page and content area are displayed independently of each other, which are equivalent to two pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Stack,

  /**
   * The navigation page and content area are displayed in different columns.
   *
   * **1.** Table 1 describes the relationship between the actual resulting **navBarWidth** and the value set by you.
   *
   * **2.** When the component size is decreased, the content area is shrunk until its width reaches the value defined
   * by **minContentWidth**, and then the navigation page is shrunk until its width reaches the value defined by
   * **minNavBarWidth**. if the component size is further decreased, the content area is further shrunk until it
   * disappears, and then navigation page is shrunk.
   *
   * **3.** When the navigation page is set to a fixed size and the component size is continuously decreased, the
   * navigation page is shrunk.
   *
   * **4.** If only **navBarWidth** is set, the width of the navigation page is fixed at the value of **navBarWidth**,
   * and the divider cannot be dragged.
   *
   * **5.** The touch target of the divider is 2 vp on each side (left and right). Therefore, it is recommended that you
   * keep a minimum distance of 4 vp from this area to avoid unintended interactions.
   *
   * **6.** In Split mode, if there is only one page in the content area, the back button will not be displayed in the
   * upper left corner of the page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Split,

  /**
   * In API version 9 and earlier versions: If the window width is greater than or equal to 520 vp, the Split mode is
   * used; otherwise, the Stack mode is used.
   *
   * In API version 10 and later versions: If the window width is greater than or equal to 600 vp, the Split mode is
   * used; otherwise, the Stack mode is used. 600 vp = minNavBarWidth (240 vp) + minContentWidth (360 vp).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Auto,

  /**
   * If the navigation width is greater than the sum of minNavBarWidth and minContentWidth,
   * and the navigation component's aspect ratio (height to width) is less than or equal to 1.2,
   * the navigation component is displayed in split mode. Otherwise it's displayed in stack mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  AUTO_WITH_ASPECT_RATIO
}

/**
 * Position of the navigation page.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum NavBarPosition {

  /**
   * When two columns are displayed, the main column is at the start of the main axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Start,

  /**
   * When two columns are displayed, the main column is at the end of the main axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  End
}

/**
 * Enumerates the display modes of the title bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum NavigationTitleMode {

  /**
   * When the content is more than one screen in a scrollable component, the main title shrinks as the content scrolls
   * down (the subtitle fades out with its size remaining unchanged) and restores as the content scrolls up to the top.
   *
   * **NOTE**
   *
   * The effect where the main title's size changes in response to content scrolling is effective only when **title** is
   * set to **ResourceStr** or **NavigationCommonTitle**. If **title** is set to any other value type, the main title
   * changes in mere location when pulled down.
   *
   * For this effect to work when the content is less than one screen in a scrollable component, set the **options**
   * parameter of the scrollable component's [edgeEffect]{@link ListAttribute#edgeEffect} attribute to **true**. In the
   * non-scrolling state, the height of the title bar is the same as in **Full** mode; in the scrolling state, the
   * minimum height of the title bar is the same as in **Mini** mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Free = 0,

  /**
   * The title is fixed at full mode.
   *
   * Default value: If there is only a main title, the title bar height is 112 vp; if there is both a main title and a
   * subtitle, the title bar height is 138 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Full,

  /**
   * The title is fixed at mini mode.
   *
   * Default value:
   *
   * In versions earlier than API version 12, if there is only a main title, the title bar height is 56 vp; if there is
   * both a main title and a subtitle, the title bar height is 82 vp.
   *
   * Since API version 12, the title bar height is 56 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Mini
}

/**
 * Defines the navigation menu item, including the menu icon and menu information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare interface NavigationMenuItem {

  /**
   * Text of the menu item. Its visibility varies by the API version.
   *
   * API version 9: visible.
   *
   * Since API version 10: invisible.
   *
   * @type { string } [since 8 - 13]
   * @type { string | Resource } [since 14]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value: string | Resource;

  /**
   * Icon path of the menu item.
   *
   * @type { ?string } [since 8 - 13]
   * @type { ?(string | Resource) } [since 14]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  icon?: string | Resource;

  /**
   * Symbol icon for a single option on the menu bar. It has higher priority than **icon**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * Enabled status. **true** (default): enabled. **false**: disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isEnabled?: boolean;

  /**
   * Callback invoked when the menu item is selected.
   *
   * @type { ?(() => void) } [since 8 - 9]
   * @type { ?function } [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  action?: () => void;
}

/**
 * Provides the callback information returned when a page is popped out of the routing stack.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface PopInfo {

  /**
   * Information about the current page when a back action is performed. The value is automatically obtained by the
   * system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  info: NavPathInfo;

  /**
   * Result returned when a back action is performed. You must customize the object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  result: Object;
}

/**
 * Provides the navigation page information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class NavPathInfo {

  /**
   * Creates a **NavPathInfo** object.
   *
   * @param { string } name - Name of the navigation destination page. The name matches the name in the following route
   *     tables:<br>1. Custom route table, which is passed via the
   *     [navDestination]{@link NavigationAttribute#navDestination} method.<br>2. System route table, which is set by
   *     **name** in **routerMap**. For details, please refer to
   *     [Example 2: Using NavPathStack APIs](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#example-2-using-navpathstack-apis).
   * @param { unknown } param - Detailed parameters for the custom **NavDestination** page. The **unknown** type can be
   *     replaced with a user-defined type.
   * @param { ?import('../api/@ohos.base').Callback<PopInfo> } onPop - Callback returned when
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)},
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}, or
   *     [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)} is called on the
   *     navigation destination page. It is triggered only when the **result** parameter is set in
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)},
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}, or
   *     [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}. [since 11]
   * @param { ?boolean } isEntry - Whether the navigation destination page is the entry page.<br>**true**: yes;
   *     **false**: no<br>Default value: **false**<br>The value of this parameter is reviewed or reset under the
   *     following conditions:<br>1. A global return event is triggered on the current navigation destination page.<br>
   *     2. The application is switched to the background.<br>**NOTE**<br>The navigation destination page serving as an
   *     entry does not respond to the in-app global back events; instead, it directly triggers the global back event
   *     between applications. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor(name: string, param: unknown, onPop?: import('../api/@ohos.base').Callback<PopInfo>, isEntry?: boolean);

  /**
   * Name of the navigation destination page. The name matches the name in the following route tables:
   *
   * 1. Custom route table, which is passed via the [navDestination]{@link NavigationAttribute#navDestination} method.
   * 2. System route table, which is set by **name** in **routerMap**. For details, please refer to [Example 2: Using NavPathStack APIs](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#example-2-using-navpathstack-apis).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  name: string;

  /**
   * Detailed parameters for the custom **NavDestination** page. The **unknown** type can be replaced with a user-
   * defined type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  param?: unknown;

  /**
   * Callback returned when [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)},
   * [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}, or
   * [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)} is called on the
   * navigation destination page. It is triggered only when the **result** parameter is set in
   * [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)},
   * [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}, or
   * [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onPop?: import('../api/@ohos.base').Callback<PopInfo>;

  /**
   * Whether the navigation destination page is the entry page.
   *
   * **true**: yes; **false**: no
   *
   * Default value: **false**
   *
   * The value of this parameter is reviewed or reset under the following conditions:
   *
   * 1. A global back event is triggered on the current navigation destination page.
   * 2. The application is switched to the background.
   *
   * **NOTE**
   *
   * The navigation destination page serving as an entry does not respond to the in-app global back events; instead, it
   * directly triggers the global back event between applications.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isEntry?: boolean;

  /**
   * Unique ID of the navigation destination page. This ID is system-generated and globally unique. It can be obtained
   * using the [getPathStack]{@link NavPathStack#getPathStack} API and should not be manually reassigned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  navDestinationId?: string;
}

/**
 * Enumerates the operation modes for the routing stack.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LaunchMode {

  /**
   * Default routing stack operation mode.
   *
   * In this mode, push operations add the specified **NavDestination** page to the stack; replace operations replace
   * the current top **NavDestination** page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  STANDARD = 0,

  /**
   * This mode searches from the bottom to the top of the routing stack. If a **NavDestination** page with the specified
   * name exists, it moves that page to the top of the stack (for a replace operation, it replaces the last top
   * **NavDestination** page with the specified one); otherwise, it behaves like **STANDARD**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  MOVE_TO_TOP_SINGLETON = 1,

  /**
   * This mode searches from the bottom to the top of the routing stack. If a **NavDestination** page with the specified
   * name exists, it removes all **NavDestination** pages above it(for a replace operation, it replaces the last top
   * **NavDestination** page with the specified one); otherwise, it behaves like **STANDARD**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  POP_TO_SINGLETON = 2,

  /**
   * This mode creates an instance of **NavDestination**. Compared with **STANDARD**, this mode does not reuse the
   * instance with the same name in the stack. When this mode is specified, the newly created page will execute the push
   * animation effect by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NEW_INSTANCE = 3
}

/**
 * Defines the routing stack operation options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface NavigationOptions {

  /**
   * Operation mode of the routing stack.
   *
   * Default value: **LaunchMode.STANDARD**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  launchMode?: LaunchMode;

  /**
   * Whether to enable the transition animation.
   *
   * **true**: yes; **false**: no
   *
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  animated?: boolean;
}

/**
 * A navigation controller that manages all child pages in the **Navigation** component with a stack data structure and
 * provides stack operation methods for controlling page transitions.
 *
 * Starting from API version 12, **NavPathStack** is inheritable. Objects of a derived class can replace those of the
 * base class. For details, see
 * [Example 10](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#example-10-defining-a-derived-class-of-navpathstack).
 *
 *
 * > **NOTE**
 * >
 * > 1. When multiple navigation controller operations are triggered in succession, the intermediate states are
 * > bypassed, and only the final result of the operations is rendered.
 *
 * > For example, if a Page1 is popped and then immediately pushed back, the system considers that the states before and
 * > after these operations are identical, leading to no actual change in the stack. To ensure that a new instance of
 * > Page1 is pushed onto the stack despite the consecutive operations, use the **NEW_INSTANCE** mode.
 * >
 * > 2. Avoid relying on lifecycle event listeners as a means to manage the navigation controller.
 * >
 * > 3. When the application is in the background, calling stack operation APIs of **NavPathStack** will trigger a
 * > refresh upon the application's return to the foreground.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class NavPathStack {

  /**
   * Creates a **NavPathStack** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * Pushes the navigation destination page specified by **info** onto the routing stack.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>If
   *     the input parameter is invalid, the value **true** is used. [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  pushPath(info: NavPathInfo, animated?: boolean): void;

  /**
   * Pushes the navigation destination page specified by **info** onto the routing stack. Depending on the
   * [LaunchMode]{@link LaunchMode} specified in the **options** parameter, different behaviors will be implemented.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { NavigationOptions } [options] - Routing stack operation options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pushPath(info: NavPathInfo, options?: NavigationOptions): void;

  /**
   * Pushes the navigation destination page specified by **info** onto the routing stack. This API uses a promise to
   * return the result.
   *
   * > **NOTE**
   * >
   * > You are not advised to use stack operations in [aboutToAppear]{@link BaseCustomComponent#aboutToAppear}, as the
   * > page has not yet finished building at this stage, which may lead to issues such as white screens or navigation
   * > failures.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pushDestination(info: NavPathInfo, animated?: boolean): Promise<void>;

  /**
   * Pushes the navigation destination page specified by **info** onto the routing stack. This API uses a promise to
   * return the result. Depending on the [LaunchMode]{@link LaunchMode} specified in the **options** parameter,
   * different behaviors will be implemented.
   *
   * > **NOTE**
   * >
   * > You are not advised to use stack operations in [aboutToAppear]{@link BaseCustomComponent#aboutToAppear}, as the
   * > page has not yet finished building at this stage, which may lead to issues such as white screens or navigation
   * > failures.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { NavigationOptions } [options] - Routing stack operation options.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pushDestination(info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * Pushes the navigation destination page specified by **name**, with the data specified by **param**, to the routing
   * stack.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { unknown } param - Detailed parameters for the custom **NavDestination** page. The **unknown** type can be
   *     replaced with a user-defined type.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true** [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  pushPathByName(name: string, param: unknown, animated?: boolean): void;

  /**
   * Pushes the navigation destination page specified by **name**, with the data specified by **param**, to the routing
   * stack. This API uses the **onPop** callback to receive the result returned when the page is popped out of the
   * stack.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } param - Detailed parameters for the custom **NavDestination** page.
   * @param { import('../api/@ohos.base').Callback<PopInfo> } onPop - Callback used to receive the result. It is
   *     triggered only when the **result** parameter is set in
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)},
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}, or
   *     [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pushPathByName(name: string, param: Object, onPop: import('../api/@ohos.base').Callback<PopInfo>, animated?: boolean): void;

  /**
   * Pushes the navigation destination page specified by **name**, with the data specified by **param**, to the routing
   * stack. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > You are not advised to use stack operations in [aboutToAppear]{@link BaseCustomComponent#aboutToAppear}, as the
   * > page has not yet finished building at this stage, which may lead to issues such as white screens or navigation
   * > failures.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } param - Detailed parameters for the custom **NavDestination** page.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pushDestinationByName(name: string, param: Object, animated?: boolean): Promise<void>;

  /**
   * Pushes the navigation destination page specified by **name**, with the data specified by **param**, to the routing
   * stack. This API uses the **onPop** callback to handle the result returned when the page is popped out of the stack.
   * It uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > You are not advised to use stack operations in [aboutToAppear]{@link BaseCustomComponent#aboutToAppear}, as the
   * > page has not yet finished building at this stage, which may lead to issues such as white screens or navigation
   * > failures.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } param - Detailed parameters for the custom **NavDestination** page.
   * @param { import('../api/@ohos.base').Callback<PopInfo> } onPop - Callback used to handle the result returned when
   *     the page is popped out of the stack. It is triggered only when the **result** parameter is set in
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)},
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}, or
   *     [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pushDestinationByName(name: string, param: Object, onPop: import('../api/@ohos.base').Callback<PopInfo>, animated?: boolean): Promise<void>;

  /**
   * Replaces the top of the routing stack with the navigation destination page specified by **info**.
   *
   * @param { NavPathInfo } info - Parameters for the new top page of the routing stack.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  replacePath(info: NavPathInfo, animated?: boolean): void;

  /**
   * Replaces the top page on the routing stack. Depending on the [LaunchMode]{@link LaunchMode} specified in the
   * **options** parameter, different behaviors will be implemented.
   *
   * @param { NavPathInfo } info - Parameters for the new top page of the routing stack.
   * @param { NavigationOptions } [options] - Routing stack operation options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replacePath(info: NavPathInfo, options?: NavigationOptions): void;

  /**
   * Performs a replacement operation on the routing stack. This API uses a promise to return the result. Its behavior
   * varies depending on the value of [LaunchMode]{@link LaunchMode} specified in **options**.
   *
   * @param { NavPathInfo } info - Information about the navigation destination page.
   * @param { NavigationOptions } [options] - Routing stack operation options.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  replaceDestination(info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * Replaces the top of the routing stack with the page specified by **name**.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } param - Detailed parameters for the custom **NavDestination** page.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  replacePathByName(name: string, param: Object, animated?: boolean): void;

  /**
   * Removes the navigation destination pages specified by **indexes** from the routing stack.
   *
   * @param { Array<number> } indexes - Array of indexes of the navigation destination pages to remove. The index is
   *     zero-based.
   * @returns { number } Number of the navigation destination pages removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  removeByIndexes(indexes: Array<number>): number;

  /**
   * Removes the navigation destination page specified by **name** from the routing stack.
   *
   * @param { string } name - Name of the navigation destination page to remove.
   * @returns { number } Number of the navigation destination pages removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  removeByName(name: string): number;

  /**
   * Removes the navigation destination page specified by **navDestinationId** from the routing stack.
   * **navDestinationId** can be obtained from the [onReady]{@link NavDestinationAttribute#onReady} callback of
   * **NavDestination** or from [NavDestinationInfo]{@link @ohos.arkui.observer:uiObserver.NavDestinationInfo}.
   *
   * @param { string } navDestinationId - Unique ID of the navigation destination page to remove.
   * @returns { boolean } Whether the page is removed successfully.
   *     <br>**true**: Removal succeeded.
   *     <br>**false**: Removal failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeByNavDestinationId(navDestinationId: string): boolean;

  /**
   * Pops the top element out of the routing stack.
   *
   * > **NOTE**
   * >
   * > When multiple navigation controller methods are called consecutively, any pages popped during the sequence are
   * > cached. If a page with the same name is later pushed, the system reuses the cached instance instead of
   * > instantiating a new page.
   *
   * > Example:
   *
   * > pathStack: NavPathStack = new NavPathStack()
   *
   * > //The initial page stack is [A].
   *
   * > pathStack.pop()
   *
   * > pathStack.pushPath(A)
   *
   * > pathStack.pushPath(B)
   *
   * > // The page stack after the operation is [A B].
   *
   * > In this case, page A is reused, and the new creation process is not performed.
   *
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true** [since 11]
   * @returns { NavPathInfo | undefined } **NavPathInfo**: information about the navigation destination page at the top
   *     of the stack.
   *     <br>**undefined**: the routing stack is empty.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  pop(animated?: boolean): NavPathInfo | undefined;

  /**
   * Pops the top element out of the routing stack and invokes the **onPop** callback to pass the page processing
   * result.
   *
   * > **NOTE**
   * >
   * > When multiple navigation controller methods are called consecutively, any pages popped during the sequence are
   * > cached. If a page with the same name is later pushed, the system reuses the cached instance instead of
   * > instantiating a new page.
   *
   * > Example:
   *
   * > pathStack: NavPathStack = new NavPathStack()
   *
   * > //The initial page stack is [A].
   *
   * > pathStack.pop()
   *
   * > pathStack.pushPath(A)
   *
   * > pathStack.pushPath(B)
   *
   * > // The page stack after the operation is [A B].
   *
   * > In this case, page A is reused, and the new creation process is not performed.
   *
   * @param { Object } result - Custom processing result on the page. The boolean type is not supported.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @returns { NavPathInfo | undefined } **NavPathInfo**: information about the navigation destination page at the top
   *     of the stack.
   *     <br>**undefined**: the routing stack is empty.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pop(result: Object, animated?: boolean): NavPathInfo | undefined;

  /**
   * Pops pages until the first navigation destination page that matches **name** from the bottom of the routing stack
   * is at the top of the stack.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true** [since 11]
   * @returns { number } Returns the index of the first navigation destination page that matches **name** from the
   *     bottom of the routing stack; returns **-1** if such a page does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popToName(name: string, animated?: boolean): number;

  /**
   * Pops pages until the first navigation destination page that matches **name** from the bottom of the routing stack
   * is at the top of the stack. This API uses the **onPop** callback to pass in the page processing result.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { Object } result - Custom processing result on the page. The boolean type is not supported.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @returns { number } Returns the index of the first navigation destination page that matches **name** from the
   *     bottom of the routing stack; returns **-1** if such a page does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  popToName(name: string, result: Object, animated?: boolean): number;

  /**
   * Returns the routing stack to the page specified by **index**.
   *
   * @param { number } index - Index of the navigation destination page. The index is zero-based.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true** [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popToIndex(index: number, animated?: boolean): void;

  /**
   * Returns the routing stack to the page specified by **index** and invokes the **onPop** callback to pass the page
   * processing result.
   *
   * @param { number } index - Index of the navigation destination page. The index is zero-based.
   * @param { Object } result - Custom processing result on the page. The boolean type is not supported.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  popToIndex(index: number, result: Object, animated?: boolean): void;

  /**
   * Moves the first navigation destination page that matches **name** from the bottom of the routing stack to the top
   * of the stack.
   *
   * @param { string } name - Name of the navigation destination page.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true** [since 11]
   * @returns { number } Returns the index of the first navigation destination page that matches **name** from the
   *     bottom of the routing stack; returns **-1** if such a page does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  moveToTop(name: string, animated?: boolean): number;

  /**
   * Moves to the top of the routing stack the navigation destination page specified by **index**.
   *
   * @param { number } index - Index of the navigation destination page. The index is zero-based.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true** [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  moveIndexToTop(index: number, animated?: boolean): void;

  /**
   * Clears the routing stack.
   *
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true** [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  clear(animated?: boolean): void;

  /**
   * Obtains the names of all navigation destination pages in the routing stack.
   *
   * @returns { Array<string> } Names of all navigation destination pages in the routing stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getAllPathName(): Array<string>;

  /**
   * Obtains the parameter information of the navigation destination page specified by **index**.
   *
   * @param { number } index - Index of the navigation destination page. The index is zero-based.
   * @returns { unknown | undefined } **unknown**: parameter information of the corresponding navigation destination
   *     page. **unknown** can represent a user-defined type.
   *     <br>**undefined**: an invalid index is provided.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getParamByIndex(index: number): unknown | undefined;

  /**
   * Obtains the parameter information of all **NavDestination** pages with the specified name, and sorts the
   * information in ascending order by page index.
   *
   * @param { string } name - Name of the navigation destination page.
   * @returns { Array<unknown> } Parameter information of all **NavDestination** pages with the specified name.
   *     **unknown** can represent a user-defined type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getParamByName(name: string): Array<unknown>;

  /**
   * Obtains the indexes of all the navigation destination pages that match **name**.
   *
   * @param { string } name - Name of the navigation destination page.
   * @returns { Array<number> } Indexes of all the matching navigation destination pages. If no pages with the specified
   *     name exist in the routing stack, an empty array is returned. The index range is [0, routing stack size - 1].
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getIndexByName(name: string): Array<number>;

  /**
   * Obtains the parent navigation path stack.
   *
   * When a **Navigation** component is nested (directly or indirectly) inside another **Navigation** component, the
   * **NavPathStack** of the inner component can obtain the **NavPathStack** of the outer component.
   *
   * @returns { NavPathStack | null } Navigation path stack of the outer **Navigation** component in which the current
   *     **Navigation** component is nested. If there is no outer **Navigation** component., **null** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getParent(): NavPathStack | null;

  /**
   * Obtains the stack size.
   *
   * @returns { number } Stack size.
   *     <br>Value range: [0, +��)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size(): number;

  /**
   * Disables or enables the transition animation in the **Navigation** component.
   *
   * @param { boolean } value - Whether to disable the transition animation.<br>Default value: **false**<br>**true**:
   *     Disable the transition animation.<br>**false**: Enable the transition animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  disableAnimation(value: boolean): void;

  /**
   * Sets the interception callback for navigation page redirection.
   *
   * @param { NavigationInterception } interception - Object to be intercepted during navigation redirection.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setInterception(interception: NavigationInterception): void;

  /**
   * Obtains the array of route page information from this routing stack.
   *
   * @returns { Array<NavPathInfo> } Array of route page information in the current routing stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  getPathStack(): Array<NavPathInfo>;

  /**
   * Updates the array of route page information in this routing stack to the specified content and performs route
   * transitions.
   *
   * > **NOTE**
   * >
   * > 1. You can add or remove pages in batches based on the existing stack. Among the pages added in batches, only the
   * > visible pages will trigger creation; other pages, although added to the stack, will not be created immediately.
   * > They will only be created when they become visible.
   * >
   * > 2. For routing stacks updated through the batch push functionality, the lifecycle events of each page are
   * > triggered from the top to the bottom of the stack. This differs from the triggering order of other push APIs,
   * > which are triggered from the bottom to the top of the stack.
   * >
   * > 3. You can operate existing pages using **navDestinationId** (unique ID) in [NavPathInfo]{@link NavPathInfo}.
   * > This ID is system-generated and globally unique (it can be obtained using the
   * > [getPathStack]{@link NavPathStack#getPathStack} API and should not be manually reassigned). If the specified ID
   * > does not exist in the current routing stack, it indicates a new page. If it exists and the corresponding name is
   * > the same, it indicates reuse of an existing page.
   *
   * @param { Array<NavPathInfo> } pathStack - Array of route page information in the current routing stack.<br>**NOTE**
   *     <br>The array length is not limited.
   * @param { boolean } [animated] - Whether to enable the transition animation.<br>**true**: yes; **false**: no<br>
   *     Default value: **true**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setPathStack(pathStack: Array<NavPathInfo>, animated?: boolean): void;
}

/**
 * Defines the name of the navigation home page.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type NavBar = 'navBar';

/**
 * Represents the interception callback invoked before and after page redirection.
 *
 * @param { NavDestinationContext | NavBar } from - Information about the top page in the routing stack after
 *     page redirection. The value **navBar** indicates that the top page is the home page.
 * @param { NavDestinationContext | NavBar } to - Information about the top page in the routing stack after
 *     page redirection. The value **navBar** indicates that the top page is the home page.
 * @param { NavigationOperation } operation - Current page redirection type.
 * @param { boolean } isAnimated - Whether to enable the transition animation.
 *     <br>**true**: Enable the transition animation.<br>**false**: Disable the transition animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type InterceptionShowCallback = (from: NavDestinationContext|NavBar, to: NavDestinationContext|NavBar, operation: NavigationOperation, isAnimated: boolean) => void;

/**
 * Defines the callback triggered before a navigation page is redirected.
 *
 * @param { NavPathInfo | NavBar } from - Information about the exit page.
 *     The value **navBar** indicates that the top page is the home page.
 * @param { NavPathInfo | NavBar } to - Information about the enter page.
 *     The value **navBar** indicates that the top page is the home page.
 * @param { NavPathStack } pathStack - Page stack.
 * @param { NavigationOperation } operation - Current page redirection type.
 * @param { boolean } isAnimated - Whether to enable the transition animation.
 *     <br>**true**: Enable the transition animation.<br>**false**: Disable the transition animation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type InterceptionCallback = (from: NavPathInfo|NavBar, to: NavPathInfo|NavBar, pathStack: NavPathStack, operation: NavigationOperation, isAnimated: boolean) => void;

/**
 * Implements an interception callback invoked when the display mode of the **Navigation** component switches between
 * single-column and split-column.
 *
 * @param { NavigationMode } mode - Display mode of the navigation page.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type InterceptionModeCallback = (mode: NavigationMode) => void;

/**
 * Describes the object to be intercepted during navigation redirection.
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface NavigationInterception {

  /**
   * Callback invoked before a page transition, allowing for stack operations, which take effect immediately for the
   * current transition. The intercepted page will be created.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  willShow?: InterceptionShowCallback;

  /**
   * Callback after page redirection. The setting takes effect in the next redirection.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  didShow?: InterceptionShowCallback;

  /**
   * Callback invoked when the display mode of the **Navigation** component switches between single-column and split-
   * column.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  modeChange?: InterceptionModeCallback;

  /**
   * Callback invoked before a page transition, allowing for stack operations, which take effect immediately for the
   * current transition. The intercepted page will not be created.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  interception?: InterceptionCallback;
}

/**
 * Defines the home page **NavDestination** information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface HomePathInfo {

  /**
   * Name of the home page **NavDestination**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  name: string;

  /**
   * Detailed parameters of the home page **NavDestination**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  param?: Object;
}

/**
 * The **Navigation** component is the root view container for navigation. It typically functions as the root container
 * of a page and includes a title bar, content area, and toolbar. The content area switches between the home page
 * content (child components of **Navigation**) and non-home page content (child components of
 * [NavDestination]{@link nav_destination}) through routing.
 *
 * > **NOTE**
 *
 * > - Since API version 11, this component supports the safe area attribute by default, with the default attribute
 * > value being
 * > **expandSafeArea([SafeAreaType.SYSTEM, SafeAreaType.KEYBOARD, SafeAreaType.CUTOUT],
 *     [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])**.
 * > You can override this attribute to change the default behavior. In earlier versions, you need to use the
 * > [expandSafeArea]{@link CommonMethod#expandSafeArea} attribute to implement the safe area feature.
 * >
 * > - When [NavBar]{@link NavBar} is nested within a **Navigation** component, the lifecycle of the inner
 * > **NavDestination** component does not synchronize with the outer **NavDestination** component or the lifecycle of a
 * > [modal]{@link common}.
 * >
 * > - If the [title]{@link NavigationAttribute#title} and [subTitle]{@link NavigationAttribute#subTitle} are not set
 * > and [hideBackButton]{@link NavigationAttribute#hideBackButton} is set to **true**, the title bar is not displayed.
 * >
 * > - During subpage navigation within **Navigation**, the new page actively requests focus.
 * >
 * > - You are not advised to use stack operations in [aboutToAppear]{@link BaseCustomComponent#aboutToAppear}, as the
 * > page has not yet finished building at this stage, which may lead to issues such as white screens or navigation
 * > failures.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface NavigationInterface {

  /**
   * Creates a root view container for route navigation, suitable for page routing using the
   * [NavRouter]{@link nav_router} component.
   *
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (): NavigationAttribute;

  /**
   * Binds a navigation controller to the **Navigation** component, suitable for page routing using
   * [NavPathStack]{@link NavPathStack} with the [navDestination]{@link NavigationAttribute#navDestination} attribute.
   *
   * @param { NavPathStack } pathInfos - Navigation controller object.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (pathInfos: NavPathStack): NavigationAttribute;

  /**
   * Binds a routing stack to the **Navigation** component and specifies a **NavDestination** component as the
   * navigation page (home page) for **Navigation**. This is suitable for page routing using
   * [NavPathStack]{@link NavPathStack} with the [navDestination]{@link NavigationAttribute#navDestination} attribute or
   * the system routing table. For the usage example, see
   * [Example 16: Using NavDestination as a Navigation Page in Navigation](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#example-16-using-navdestination-as-a-navigation-page-in-navigation).
   *
   * @param { NavPathStack } pathInfos - Information about the routing stack.
   * @param { HomePathInfo } homeDestination - Home page **NavDestination** information.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  (pathInfos: NavPathStack, homeDestination: HomePathInfo): NavigationAttribute;
}

/**
 * Enumerates the toolbar item states.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ToolbarItemStatus {

  /**
   * Normal state. In this state, the toolbar item takes on the default style and can switch to another state-specific
   * style by responding to the hover, press, and focus events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NORMAL = 0,

  /**
   * Disabled state. In this state, the toolbar item is disabled and does not allow for user interactions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DISABLED = 1,

  /**
   * Active state. In this state, the toolbar item can update its icon to the one specified by **activeIcon** by
   * responding to a click event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ACTIVE = 2
}

/**
 * Enumerates the page redirection types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum NavigationOperation {

  /**
   * The transition is enter transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PUSH = 1,

  /**
   * The transition is exit transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  POP = 2,

  /**
   * The transition is page replacement.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  REPLACE = 3
}

/**
 * Provides customizable parameters of the toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare interface ToolbarItem {

  /**
   * Text of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * Icon path of the toolbar item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: ResourceStr;

  /**
   * Symbol icon for a single option on the toolbar. It has higher priority than **icon**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * Callback invoked when the menu item is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * Status of a toolbar item.
   *
   * Default value: **ToolbarItemStatus.NORMAL**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  status?: ToolbarItemStatus;

  /**
   * Icon path of the toolbar item in the active state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  activeIcon?: ResourceStr;

  /**
   * Symbol icon for a single option on the menu bar when it is in active state. It has higher priority than
   * **activeIcon**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  activeSymbolIcon?: SymbolGlyphModifier;
}

/**
 * Enumerates the scroll effect types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum ScrollEffectType {

  /**
   * Common blur style. It applies uniform blur to the background.
   * The blurred background appear/disappear with transparent gradient.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  COMMON_BLUR = 0,

  /**
   * Gradual blur style. It applies uniform blur to the title background with clear boundaries.
   * The title bar content changes color/state before and after scrolling.
   * During scrolling, it changes linearly following the gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  GRADUAL_BLUR = 1
}

/**
 * Defines the scroll effect options for the title bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface ScrollEffectOptions {

  /**
   * Title bar scroll blur style.
   * Default value: ScrollEffectType.COMMON_BLUR.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollEffectType?: ScrollEffectType;

  /**
   * The minimum sliding distance of the content area to enable the title bar sliding blur effect.
   * Default value: 0vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  blurEffectiveStartOffset?: LengthMetrics;

  /**
   * The maximum sliding distance of the content area to enable the final blur style of the title bar.
   * Default value: 8vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  blurEffectiveEndOffset?: LengthMetrics;
}

/**
 * Defines the title bar options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare interface NavigationTitleOptions {

  /**
   * Background color of the title bar. If this parameter is not set, the default color is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background blur style of the title bar. If this parameter is not set, the background blur effect is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Options for the title bar background blur style.
   *
   * **NOTE**
   *
   * This parameter is only effective when **backgroundBlurStyle** is set.
   *
   * Avoid using this API in conjunction with **backgroundEffect**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Title bar background properties, including blur radius, brightness, saturation, and color.
   *
   * **NOTE**
   *
   * Avoid using this API in conjunction with **backgroundBlurStyleOptions**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Layout style of the title bar.
   *
   * Default value: **BarStyle.STANDARD**
   *
   * @default BarStyle.STANDARD
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  barStyle?: BarStyle;

  /**
   * Padding at the start of the title bar.
   *
   * Only supported in one of the following scenarios:
   *
   * 1. Displaying the back icon, that is, [hideBackButton]{@link NavigationAttribute#hideBackButton} is **false**
   * 2. Using a non-custom title, that is, the [title value]{@link NavigationAttribute#title} type is **ResourceStr** or **NavigationCommonTitle**
   *
   * Default value:
   *
   * LengthMetrics.resource(**$r('sys.float.margin_left')**)
   *
   * @default LengthMetrics.resource($r('sys.float.margin_left'))
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  paddingStart?: LengthMetrics;

  /**
   * Padding at the end of the title bar.
   *
   * Only supported in one of the following scenarios:
   *
   * 1. Using a non-custom menu, that is, the
   *     [menu value]{@link NavigationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)}
   *     is Array<NavigationMenuItem>
   * 2. Using a non-custom menu without a menu in the upper right corner, that is,
   *     the [title value]{@link NavigationAttribute#title} type is **ResourceStr** or **NavigationCommonTitle**
   *
   * Default value:
   *
   * LengthMetrics.resource(`$r('sys.float.margin_right')`)
   *
   * @default LengthMetrics.resource($r('sys.float.margin_right'))
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  paddingEnd?: LengthMetrics;

  /**
   * Main title attribute modifier.
   *
   * 1. Attribute settings configured by this modifier will override the system's default attribute settings.
   *     For example, if the modifier is used to set font size attributes, such as **fontSize**, **maxFontSize**,
   *     and **minFontSize**, the settings will take precedence over the system's default settings for
   *     size-related attributes.
   * 2. If no modifier is used or an invalid value is set, the system reverts to its default settings.
   * 3. In [Free]{@link NavigationTitleMode} mode, setting the font size will disable the effect where the main title's
   *     size changes in response to content scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  mainTitleModifier?: TextModifier;

  /**
   * Subtitle attribute modifier.
   *
   * 1. Attribute settings configured by this modifier will override the system's default attribute settings.
   *     For example, if the modifier is used to set font size attributes, such as **fontSize**, **maxFontSize**,
   *     and **minFontSize**, the settings will take precedence over the system's default settings
   *     for size-related attributes.
   * 2. If no modifier is used or an invalid value is set, the system reverts to its default settings.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  subTitleModifier?: TextModifier;

  /**
   * Whether to respond when the device is in semi-folded mode.
   *
   * Observe the following when using this API:
   *
   * 1. Make sure the **Navigation** component is in full screen.
   * 2. When the title bar is in [Free]{@link NavigationTitleMode} display mode or in [STANDARD]{@link BarStyle} layout
   *     style, this API has no effect.
   *
   * **true**: yes; **false**: no
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Title scroll blur style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollEffectOptions?: ScrollEffectOptions;

  /**
   * Set system-styled materials for the TitleBar. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the titleBar.
   * Device Behavior Differences:The effect of the same material may vary across different devices depending on
   * their computing power.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: Material;
}

/**
 * Enumerates the layout styles of the title bar and toolbar. Note that this API is not supported for the toolbar in
 * **NavDestination**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum BarStyle {

  /**
   * In this mode, the title bar or toolbar is laid out above the content area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  STANDARD = 0,

  /**
   * In this mode, the title bar or toolbar is overlaid on top of the content area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  STACK = 1,

  /**
   * In this mode, the title bar or toolbar is configured to respect the
   * [component-level safe area]{@link CommonMethod#safeAreaPadding}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  SAFE_AREA_PADDING = 2
}

/**
 * Defines the toolbar options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NavigationToolbarOptions {

  /**
   * Background color of the title bar. If this parameter is not set, the default color is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background blur style of the title bar. If this parameter is not set, the background blur effect is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Options for the title bar background blur style.
   *
   * **NOTE**
   *
   * This parameter is only effective when **backgroundBlurStyle** is set.
   *
   * Avoid using this API in conjunction with **backgroundEffect**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Title bar background properties, including blur radius, brightness, saturation, and color.
   *
   * **NOTE**
   *
   * Avoid using this API in conjunction with **backgroundBlurStyleOptions**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Options for the toolbar's more button menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  moreButtonOptions?: MoreButtonOptions;

  /**
   * Layout style of the toolbar.
   *
   * Default value: **BarStyle.STANDARD**
   *
   * @default BarStyle.STANDARD
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  barStyle?: BarStyle;

  /**
   * Whether to hide the toolbar text.
   *
   * Default value: **false**
   *
   * **true**: yes; **false**: no
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  hideItemValue?: boolean;
}

/**
 * Defines options for menu items in the upper right corner of the page.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface NavigationMenuOptions {

  /**
   * Options for the toolbar's more button menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  moreButtonOptions?: MoreButtonOptions;
}

/**
 * Defines the options for the more button menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface MoreButtonOptions {

  /**
   * Background blur style of the more button menu. If this parameter is not set, background blur is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Options for the title bar background blur style.
   *
   * **NOTE**
   *
   * This parameter is only effective when **backgroundBlurStyle** is set.
   *
   * Avoid using this API in conjunction with **backgroundEffect**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Title bar background properties, including blur radius, brightness, saturation, and color.
   *
   * **NOTE**
   *
   * Avoid using this API in conjunction with **backgroundBlurStyleOptions**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;
}

/**
 * Navigation configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface NavigationConfiguration {

  /**
   * Navigation page stack size limit.
   *
   * Description:
   * - Limits to maximum number of active page nodes in Navigation page stack.
   * - When limit is exceeded, oldest page nodes are automatically destroyed
   *   in FIFO (First-In-First-Out) order.
   * - NavPathInfo of pages is completely retained, supporting page recreation.
   * - value <=0 No limit on page stack size (default value).
   * - value >0 Limit stack size to specified value.
   *
   * @default 0 (nolimit)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  stackSizeLimit?: int;
}

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class NavigationAttribute extends CommonMethod<NavigationAttribute> {

  /**
   * Set the width of the navigation page. It takes effect only when [mode]{@link NavigationAttribute#mode} is set to
   * **NavigationMode.Auto** or **NavigationMode.Split**.
   *
   * Since API version 18, this attribute supports two-way binding through
   * [!!](docroot://ui/state-management/arkts-new-binding.md).
   *
   * @param { Length } value - Width of the navigation page.<br>Default value: **240**<br>Unit: vp<br>**undefined**: No
   *     action is taken, and the navigation page width remains consistent with the default value.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  navBarWidth(value: Length): NavigationAttribute;

  /**
   * Sets the position of the navigation page. It takes effect only when [mode]{@link NavigationAttribute#mode} is set
   * to **NavigationMode.Auto** or **NavigationMode.Split**.
   *
   * @param { NavBarPosition } value - Position of the navigation page.<br>Default value: **NavBarPosition.Start**
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  navBarPosition(value: NavBarPosition): NavigationAttribute;

  /**
   * Sets the minimum and maximum widths of the navigation page (effective in split-column mode). When this API is not
   * used, the minimum width defaults to 240 vp, and the maximum width defaults to 40% of the component width (not
   * exceeding 432 vp). When dragging the divider changes the navigation page width, the content area will be
   * compressed.
   *
   * Divider dragging range:
   *
   * | Condition| Dragging Range |
   * | ----| ----------- |
   * |Both **navBarWidthRange** and **minContentWidth** are set.| Range set by **navBarWidthRange**
   *     if the value set by **minContentWidth** is satisfied|
   * |Neither **navBarWidthRange** nor **minContentWidth** is set.| Default minimum and maximum ranges
   *     of **navBarWidthRange**|
   * |Only the **navBarWidthRange** attribute is set.| Range set by **navBarWidthRange**,
   *     where the maximum dragging range cannot exceed the default value of **minContentWidth**|
   * |Only the **minContentWidth** attribute is set.| Default minimum and maximum ranges of **navBarWidthRange**|
   * |Only the **navBarWidth** attribute is set.| Dragging not supported|
   *
   * @param { [Dimension, Dimension] } value - Minimum and maximum widths of the navigation page. If an invalid value is
   *     set, the default value is used.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  navBarWidthRange(value: [Dimension, Dimension]): NavigationAttribute;

  /**
   * Minimum width of the navigation bar content area (effective in split-column mode).
   *
   * @param { Dimension } value - Minimum width of the content area on the navigation page.<br>Default value: **360**<br
   *     >Unit: vp<br>**undefined**: No action is taken, and the minimum width of the navigation page remains consistent
   *     with the default value.<br>Breakpoint calculation in Auto mode: default 600 vp = minNavBarWidth (240 vp) +
   *     minContentWidth (360 vp)
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  minContentWidth(value: Dimension): NavigationAttribute;

  /**
   * Sets the display mode of the navigation page.
   *
   * @param { NavigationMode } value - Display mode of the navigation page.<br>Default value: **NavigationMode.Auto**<br
   *     >At the default settings, the component adapts to a single column or two columns based on the component width.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  mode(value: NavigationMode): NavigationAttribute;

  /**
   * Sets the icon of the back button in the title bar.
   *
   * > **NOTE**
   * >
   * > The following are not allowed: modify the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, change the animation effects through the **effectStrategy** attribute, or change
   * > the type of animation effects through the **symbolEffect** attribute.
   *
   * @param { string | PixelMap | Resource } value - Icon of the back button in the title bar. [since 9 - 11]
   * @param { string | PixelMap | Resource | SymbolGlyphModifier } value - Icon of the back button in the title
   *     bar. [since 12]
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  backButtonIcon(value: string | PixelMap | Resource | SymbolGlyphModifier): NavigationAttribute;

  /**
   * Sets the icon and accessibility text for the back button on the title bar.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   * >
   * > The following are not allowed: modify the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, change the animation effects through the **effectStrategy** attribute, or change
   * > the type of animation effects through the **symbolEffect** attribute.
   *
   * @param { string | PixelMap | Resource | SymbolGlyphModifier } icon - Icon of the back button in the title bar.
   * @param { ResourceStr } [accessibilityText] - Accessibility text for the back button.<br>Default value: **back**
   *     when the system language is English.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backButtonIcon(icon: string | PixelMap | Resource | SymbolGlyphModifier, accessibilityText?: ResourceStr): NavigationAttribute;

  /**
   * Sets whether to hide the navigation page. If the value is set to **true**, the navigation bar, including the title
   * bar, content area, and toolbar, will be hidden. In this case, if the navigation destination page is in the routing
   * stack, it is moved to the top of the stack and displayed. Otherwise, a blank page is displayed.
   *
   * From API version 9 to API version 10, this attribute takes effect only in split-column mode. Since API version 11,
   * this attribute takes effect in all display modes.
   *
   * @param { boolean } value - Whether to hide the navigation page.<br>**true**: yes<br>**false**: no<br>If the input
   *     parameter is invalid, the value **false** is used.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  hideNavBar(value: boolean): NavigationAttribute;

  /**
   * Sets the page title.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { string | CustomBuilder } value - Page title. When the NavigationCustomTitle type is used to set the
   *     height, [titleMode]{@link NavigationAttribute#titleMode} does not take effect.<br>When the title string is too
   *     long:<br>- If no subtitle is set, the string is scaled down, wrapped in two lines, and then clipped.<br> - If a
   *     subtitle is set, the subtitle is scaled down and then clipped. [since 8 - 8]
   * @param { string | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value - Page title. When the
   *     NavigationCustomTitle type is used to set the height, [titleMode]{@link NavigationAttribute#titleMode} does not
   *     take effect.<br>When the title string is too long:<br>- If no subtitle is set, the string is scaled down,
   *     wrapped in two lines, and then clipped.<br> - If a subtitle is set, the subtitle is scaled down and then
   *     clipped. [since 9 - 9]
   * @param { ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value - Page title. When the
   *     NavigationCustomTitle type is used to set the height, [titleMode]{@link NavigationAttribute#titleMode} does not
   *     take effect.<br>When the title string is too long:<br>- If no subtitle is set, the string is scaled down,
   *     wrapped in two lines, and then clipped.<br> - If a subtitle is set, the subtitle is scaled down and then
   *     clipped. [since 10]
   * @param { NavigationTitleOptions } [options] - Defines the title bar options. Title bar options include the
   *     background color, background blur style, blur options, background properties, layout style, and padding at the
   *     start and end of the title bar, as well as main title attribute modifier, subtitle attribute modifier, and
   *     whether to respond when the device is in semi-folded mode.. [since 11]
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  title(value: ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle, options?: NavigationTitleOptions): NavigationAttribute;

  /**
   * Sets the page subtitle.
   *
   * > **NOTE**
   *
   * @param { string } value - Page subtitle.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead title
   */
  subTitle(value: string): NavigationAttribute;

  /**
   * Specifies whether to hide the title bar.
   *
   * @param { boolean } value - Whether to hide the title bar.<br>**true**: yes<br>**false**: no<br>If the input
   *     parameter is invalid, the value **false** is used.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hideTitleBar(value: boolean): NavigationAttribute;

  /**
   * Specifies whether to hide the title bar. Compared with
   * [hideTitleBar]{@link NavigationAttribute#hideTitleBar(value: boolean)}, this API adds the capability to control
   * whether to animate the visibility change of the title bar.
   *
   * @param { boolean } hide - Whether to hide the title bar.<br>**true**: yes<br>**false**: no<br>If the input
   *     parameter is invalid, the value **false** is used.
   * @param { boolean } animated - Whether to animate the visibility change.<br>**true**: yes<br> **false**: no<br>If
   *     the input parameter is invalid, the value **false** is used.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  hideTitleBar(hide: boolean, animated: boolean): NavigationAttribute;

  /**
   * Sets whether to hide the back button in the title bar. The back button takes effect only when
   * [titleMode]{@link NavigationAttribute#titleMode} is set to **NavigationTitleMode.Mini**.
   *
   * @param { boolean } value - Whether to hide the back button in the title bar.<br>**true**: Hide the back button in
   *     the title bar.<br>**false**: Show the back button in the title bar.<br>If the input parameter is invalid, the
   *     value **false** is used.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hideBackButton(value: boolean): NavigationAttribute;

  /**
   * Sets the display mode of the page title bar.
   *
   * @param { NavigationTitleMode } value - Display mode of the page title bar.<br>Default value:
   *     **NavigationTitleMode.Free**
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  titleMode(value: NavigationTitleMode): NavigationAttribute;

  /**
   * Sets the menu items in the upper right corner of the page. If this attribute is not set, no menu item is displayed.
   * When the value type is Array<[NavigationMenuItem]{@link NavigationMenuItem}&gt;, the menu shows a maximum of three
   * icons in portrait mode and a maximum of five icons in landscape mode, with excess icons (if any) placed under the
   * automatically generated **More** icon.
   *
   * > **NOTE**
   * >
   * > The following are not allowed: modify the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, change the animation effects through the **effectStrategy** attribute, or change
   * > the type of animation effects through the **symbolEffect** attribute.
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } value - Menu items in the upper right corner of the page.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  menus(value: Array<NavigationMenuItem> | CustomBuilder): NavigationAttribute;

  /**
   * Sets the menu items in the upper right corner of the page. If this attribute is not set, no menu item is displayed.
   * Compared with [menus]{@link NavigationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)}, this API
   * adds menu options. When the value type is Array<[NavigationMenuItem]{@link NavigationMenuItem}&gt;, the menu shows
   * a maximum of three icons in portrait mode and a maximum of five icons in landscape mode, with excess icons (if any)
   * placed under the automatically generated **More** icon.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   * >
   * > The following are not allowed: modify the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, change the animation effects through the **effectStrategy** attribute, or change
   * > the type of animation effects through the **symbolEffect** attribute.
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } items - Menu items in the upper right corner of the page.
   * @param { NavigationMenuOptions } [options] - Configuration options for menu items in the upper right corner of the
   *     page.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  menus(items: Array<NavigationMenuItem> | CustomBuilder, options?: NavigationMenuOptions): NavigationAttribute;

  /**
   * Sets the content of the toolbar. If this attribute is not set, no toolbar is displayed. Toolbar items are evenly
   * distributed on the bottom toolbar, with text and icons evenly spaced in each content area. If any item contains
   * overlong text and there are fewer than five items, the toolbar will reduce the text size progressively, wrap the
   * text over two lines if necessary, and then clip the text to fit.
   *
   * **object**
   *
   *
   * @param { object | CustomBuilder } value - Content of the toolbar.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead navigation/NavigationAttribute#toolbarConfiguration
   */
  toolBar(value: object | CustomBuilder): NavigationAttribute;

  /**
   * Sets the content of the toolbar. If this attribute is not set, no toolbar is displayed.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   * >
   * > The following are not allowed: modify the icon size through the **fontSize** attribute of the
   * > **SymbolGlyphModifier** object, change the animation effects through the **effectStrategy** attribute, or change
   * > the type of animation effects through the **symbolEffect** attribute.
   *
   * @param { Array<ToolbarItem> | CustomBuilder } value - Content of the toolbar. When configured with Array<
   *     [ToolbarItem]{@link ToolbarItem}>, the toolbar follows the rules below:<br>Toolbar items are evenly distributed
   *     on the bottom toolbar, with text and icons evenly spaced in each content area.<br>In portrait mode, the toolbar
   *     shows a maximum of five icons, with any additional icons placed into an automatically generated **More** icon.
   *     In landscape mode, toolbar behavior depends on the display mode: <br>- If the display mode is
   *     [Split]{@link NavigationMode}, the toolbar maintains the portrait mode. <br>- If the display mode is
   *     [Stack]{@link NavigationMode}, the toolbar must be used together with Array<
   *     [NavigationMenuItem]{@link NavigationMenuItem}> of the **menus** attribute; in this configuration, the bottom
   *     toolbar is automatically hidden, and all items on the toolbar are relocated to the menu in the upper right
   *     corner of the screen.<br>When configured with
   *     [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8), the toolbar does not
   *     follow the above rules.
   * @param { NavigationToolbarOptions } [options] - Toolbar options. Toolbar options include the background color,
   *     background blur style and blur option, background properties, and layout mode of the toolbar, as well as
   *     whether to hide the toolbar text, and options for the toolbar's more button menu.. [since 11]
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  toolbarConfiguration(value: Array<ToolbarItem> | CustomBuilder, options?: NavigationToolbarOptions): NavigationAttribute;

  /**
   * Specifies whether to hide the toolbar.
   *
   * @param { boolean } value - Whether to hide the toolbar.<br>**true**: Hide the toolbar. <br>**false**: Display the
   *     toolbar.<br>If the input parameter is invalid, the value **false** is used.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hideToolBar(value: boolean): NavigationAttribute;

  /**
   * Specifies whether to hide the toolbar. Compared with
   * [hideToolBar]{@link NavigationAttribute#hideToolBar(value: boolean)}, this API adds the capability to control
   * whether to animate the visibility change of the toolbar.
   *
   * @param { boolean } hide - Whether to hide the toolbar.<br>**true**: Hide the toolbar. <br>**false**: Display the
   *     toolbar.<br>If the input parameter is invalid, the value **false** is used.
   * @param { boolean } animated - Whether to animate the visibility change.<br>**true**: yes<br>**false**: no<br>If the
   *     input parameter is invalid, the value **false** is used.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  hideToolBar(hide: boolean, animated: boolean): NavigationAttribute;

  /**
   * Sets whether to enable toolbar adaptation ([toolbarConfiguration]{@link NavigationAttribute#toolbarConfiguration})
   * for the **Navigation** and **NavDestination** components. If this feature is disabled, the bottom toolbar (
   * [toolbarConfiguration]{@link NavigationAttribute#toolbarConfiguration}) will no longer be moved into the menu in
   * the upper right corner of the page. This API does not apply to custom menus; using it requires defining the
   * [menu]{@link NavigationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)} via the
   * [NavigationMenuItem]{@link NavigationMenuItem} API.
   *
   * @param { Optional<boolean> } enable - Whether to enable toolbar adaptation.<br>Default value: **true**<br>**true**:
   *     Enable toolbar adaptation.<br>**false**: Disable toolbar adaptation.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  enableToolBarAdaptation(enable: Optional<boolean>): NavigationAttribute;

  /**
   * Triggered when [titleMode]{@link NavigationAttribute#titleMode} is set to **NavigationTitleMode.Free** and the
   * title bar mode changes as content scrolls.
   *
   * @param { (titleMode: NavigationTitleMode) => void } callback - Title mode. [since 8 - 9]
   * @param { function } callback - Title mode. [since 10]
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onTitleModeChange(callback: (titleMode: NavigationTitleMode) => void): NavigationAttribute;

  /**
   * Callback invoked when the navigation page visibility status changes.
   *
   * @param { (isVisible: boolean) => void } callback - Whether the navigation bar is visible. The value **true** means
   *     that the navigation bar is visible, and **false** means the opposite. [since 9 - 9]
   * @param { function } callback - Whether the navigation bar is visible. The value **true** means that the navigation
   *     bar is visible, and **false** means the opposite. [since 10]
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onNavBarStateChange(callback: (isVisible: boolean) => void): NavigationAttribute;

  /**
   * Triggered when the **Navigation** component is displayed for the first time or its display mode switches between
   * single-column and split-column.
   *
   * @param { function } callback - **NavigationMode.Split**: The component is displayed in split-column mode.<br>
   *     **NavigationMode.Stack**: The component is displayed in single-column mode.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onNavigationModeChange(callback: (mode: NavigationMode) => void): NavigationAttribute;

  /**
   * Creates a **NavDestination** component. The builder receives the **name** and **param** parameters for constructing
   * the **NavDestination** component. The builder must return a single root node. The builder can have only one root
   * node. In the builder, a layer of custom components can wrap the **NavDestination** component. However, no
   * attributes or events can be set for these custom components. Otherwise, only blank content is displayed.
   *
   * @param { function } builder - Builder for a **NavDestination** component. **name**: name of the **NavDestination**
   *     page. **param**: detailed parameters for the custom **NavDestination** page. The **unknown** type can be
   *     replaced with a user-defined type.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  navDestination(builder: (name: string, param: unknown) => void): NavigationAttribute;

  /**
   * Defines the callback of the custom transition animation.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } delegate - Defines the callback of the custom transition animation.<br/>from: Destination page
   *     to exit.<br/>to: Destination page to enter.<br/>operation: Transition type.<br/>
   *     **NavigationAnimatedTransition**: protocol object for custom transition animations.<br>**undefined**:
   *     undefined, executing the default transition animation effect.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  customNavContentTransition(delegate: (from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation)
    => NavigationAnimatedTransition | undefined): NavigationAttribute;

  /**
   * Ignores the layout safe area by allowing the component to extend into the non-safe areas of the screen.
   *
   * > **NOTE**
   * >
   * > - Prerequisites for the **ignoreLayoutSafeArea** attribute to take effect:
   * > > When **LayoutSafeAreaType.SYSTEM** is set, the component can extend into the non-safe area if its boundaries
   * > overlap with it.
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
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): NavigationAttribute;

  /**
   * Sets the style of the system status bar when the home page of the **Navigation** component is displayed.
   *
   * > **NOTE**
   * >
   * > 1. Avoid using the **systemBarStyle** attribute in conjunction with the status bar style APIs in the **Window**
   * > module, such as
   * > [setWindowSystemBarProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowsystembarproperties9).
   * >
   * >
   * > 2. When you first set the **systemBarStyle** attribute for a **Navigation** or **NavDestination** component, the
   * > current status bar style is saved for potential future restoration.
   * >
   * > 3. **Navigation** always uses the status bar style defined by the home page (when no **NavDestination** exists in
   * > the routing stack) or the top **NavDestination** in the stack.
   * >
   * > 4. If the home page or any top **NavDestination** page has a valid **systemBarStyle** set, that style will be
   * > used. If no style is set, and there is a previously saved style available, the saved style will be used. If no
   * > style has been set or saved, no changes will be made.
   * >
   * > 5. In [Split]{@link NavigationMode} mode, if there is no **NavDestination** in the content area, the settings of
   * > the **Navigation** home page will apply. Otherwise, the settings of the top **NavDestination** page on the
   * > routing stack will apply.
   * >
   * > 6. The **systemBarStyle** attribute is effective only for the main page of the main window.
   * >
   * > 7. The set style will only take effect if the **Navigation** component spans the entire page. If it does not, and
   * > there is a previously saved style available, the saved style will be used instead.
   * >
   * > 8. When different styles are set for pages, the new style takes effect at the start of the page transition.
   * >
   * > 9. The status bar style set by **Navigation** or **NavDestination** does not apply in non-fullscreen windows.
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Optional<SystemBarStyle> } style - Style of the system status bar.
   * @returns { NavigationAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  systemBarStyle(style: Optional<SystemBarStyle>): NavigationAttribute;

  /**
   * Sets whether the **Navigation** component is recoverable. If set to recoverable, when the application process exits
   * unexpectedly and restarts, the **Navigation** component can be automatically re-created and its routing stack
   * restored to the state at the time of the unexpected exit.
   *
   * > **NOTE**
   * >
   * > 1. For this API to work properly, you must first set the universal attribute [id]{@link CommonMethod#id} of the
   * > **Navigation** component.
   * >
   * > 2. This API must be used together with the [recoverable]{@link NavDestinationAttribute#recoverable} API of
   * > **NavDestination**.
   * >
   * > 3. Non-serializable information, such as non-serializable parameters and custom **onPop**, is discarded and
   * > cannot be restored during the recovery process.
   * >
   * > 4. If an application is terminated due to insufficient system resources after it is switched to the background,
   * > any page configured as recoverable will be automatically restored when the application is revived to the
   * > foreground. For details, see
   * > [UIAbility Backup and Restore](docroot://application-models/ability-recover-guideline.md). For the usage example,
   * > see
   * > [Example 18: Setting Navigation as Recoverable](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#example-18-setting-navigation-as-recoverable).
   *
   * @param { boolean } recoverable - Whether the **Navigation** component is recoverable. By default, it is not
   *     recoverable.<br>**true**: yes<br>**false**: no<br>If the input parameter is invalid, the value **false** is
   *     used.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 14 dynamic
   */
  recoverable(recoverable: Optional<boolean>): NavigationAttribute;

  /**
   * Sets whether to display a drag bar in split-column scenarios. This attribute has no effect on PCs/2-in-1 devices.
   *
   * @param { Optional<boolean> } isEnabled - Whether to enable the drag bar. By default, there is no drag bar.<br>
   *     **true**: yes; **false**: no<br>If the input parameter is invalid, the value **false** is used.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableDragBar(isEnabled: Optional<boolean>): NavigationAttribute;

  /**
   * Sets the divider style in the split-column mode of the **Navigation** component.
   *
   * @param { NavigationDividerStyle | null } style - Sets the divider style of the split-column layout.<br> - null: The
   *     divider is hidden.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  divider(style: NavigationDividerStyle | null): NavigationAttribute;

  /**
   * Sets whether to enable the animation for switching between single- and split-column modes.
   *
   * @param { Optional<boolean> } isEnabled - Whether to enable the animation for switching between single- and split-
   *     column modes.<br>**true**: yes; **false**: no<br>If the input parameter is invalid, the value **true** is used.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  enableModeChangeAnimation(isEnabled: Optional<boolean>): NavigationAttribute;

  /**
   * Sets a default placeholder page for the right column in the **Navigation** component's split-column mode. The
   * placeholder page is for UI display only and cannot receive focus or respond to events.
   *
   * @param { ComponentContent } placeholder - Default placeholder page for the right column in the **Navigation**
   *     component's split-column mode.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  splitPlaceholder(placeholder: ComponentContent): NavigationAttribute;

  /**
   * Sets whether to enable the linkage between the [onShown]{@link NavDestinationAttribute#onShown} and
   * [onHidden]{@link NavDestinationAttribute#onHidden} lifecycle callbacks of the
   * [NavDestination]{@link nav_destination} page and the full-modal triggering.
   *
   * @param { Optional<boolean> } isEnabled - Whether to enable the linkage between the **onShown** and **onHidden**
   *     lifecycle callbacks of the NavDestination page and the full-modal triggering.<br>Default value: **true**<br>
   *     **true**: When a full-modal page is shown, the current **NavDestination** page triggers **onHidden**. When the
   *     full-modal pages is dismissed, the page triggers **onShown**.<br>**false**: The **onShown** and **onHidden**
   *     callbacks of the **NavDestination** page are not triggered by the showing or dismissing of a full-modal page.
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  enableVisibilityLifecycleWithContentCover(isEnabled: Optional<boolean>): NavigationAttribute;

  /**
   * Sets Navigation configuration.
   *
   * @param { NavigationConfiguration } config - Navigation configuration options.
   * @returns { NavigationAttribute } Returns instance of NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  configuration(config: NavigationConfiguration): NavigationAttribute;
}

/**
 * Defines the custom transition animation protocol. You need to implement this protocol to define the redirection
 * animation of the navigation route.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface NavigationAnimatedTransition {

  /**
   * Callback invoked when the transition is complete.
   *
   * **success**: whether the transition is successful.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onTransitionEnd?: (success: boolean) => void;

  /**
   * Animation timeout time.
   *
   * Unit: ms
   *
   * Value range: [0, +��)
   *
   * Default value: no default value for interactive animations; 1000 ms for non-interactive animations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  timeout?: number;

  /**
   * Whether the transition animation is interactive.
   *
   * **true**: yes; **false**: no
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isInteractive?: boolean;

  /**
   * Callback for executing the custom transition animation.
   *
   * **transitionProxy**: proxy for the custom transition animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  transition: (transitionProxy: NavigationTransitionProxy) => void;
}

/**
 * Implements a custom transition animation proxy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface NavigationTransitionProxy {

  /**
   * Information about the exit page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  from: NavContentInfo;

  /**
   * Information about the enter page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  to: NavContentInfo;

  /**
   * Whether the transition animation is interactive.
   *
   * **true**: yes; **false**: no
   *
   * Default value: **false**
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isInteractive?: boolean;

  /**
   * Finishes this custom transition animation. This API must be manually called to end the animation. Otherwise, the
   * system ends the animation when the timeout expires.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  finishTransition(): void;

  /**
   * Cancels this interactive transition animation, restoring the routing stack to its state before page redirection. (
   * Non-interactive transition animations cannot be canceled.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelTransition?(): void;

  /**
   * Updates the progress of this interactive transition animation. (Non-interactive animations do not support setting
   * the animation progress).
   *
   * > **NOTE**
   * >
   * > You are not advised to use stack operations in [aboutToAppear]{@link BaseCustomComponent#aboutToAppear}, as the
   * > page has not yet finished building at this stage, which may lead to issues such as white screens or navigation
   * > failures.
   *
   * @param { number } progress - Progress percentage of the interactive transition animation. Value range: [0, 1].
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateTransition?(progress: number): void;
}

/**
 * Provides the destination information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface NavContentInfo {

  /**
   * Name of the navigation destination. If the view is a root view (**NavBar**), the return value is **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  name?: string;

  /**
   * Index of the navigation destination in the routing stack. If the view is a root view (**NavBar**), the return value
   * is **-1**.
   *
   * Value range: [-1, +��)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  index: number;

  /**
   * Mode of the navigation destination. If the view is a root view (**NavBar**), the return value is **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  mode?: NavDestinationMode;

  /**
   * Parameters loaded on the navigation destination page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  param?: Object;

  /**
   * Unique identifier of the navigation destination page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  navDestinationId?: string;
}

/**
 * Color of the navigation divider and the upper and lower margins of the **Navigation** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface NavigationDividerStyle {

  /**
   * Color of the divider.
   *
   * Default value: **#33000000**, indicating gray
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  color?: ResourceColor;

  /**
   * Distance between the divider and the top of the sidebar.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * Value range: [0, +��)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  startMargin?: Length;

  /**
   * Distance between the divider and the bottom of the sidebar.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * Value range: [0, +��)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  endMargin?: Length;
}

/**
 * The **Navigation** component is the root view container for navigation. It typically functions as the root container
 * of a page and includes a title bar, content area, and toolbar. The content area switches between the home page
 * content (child components of **Navigation**) and non-home page content (child components of
 * [NavDestination]{@link nav_destination}) through routing.
 *
 * > **NOTE**
 *
 * > - Since API version 11, this component supports the safe area attribute by default, with the default attribute
 * > value being
 * > **expandSafeArea([SafeAreaType.SYSTEM, SafeAreaType.KEYBOARD, SafeAreaType.CUTOUT], [SafeAreaEdge.TOP,
 *    SafeAreaEdge.BOTTOM])**.
 * > You can override this attribute to change the default behavior. In earlier versions, you need to use the
 * > [expandSafeArea]{@link CommonMethod#expandSafeArea} attribute to implement the safe area feature.
 * >
 * > - When [NavBar]{@link NavBar} is nested within a **Navigation** component, the lifecycle of the inner
 * > **NavDestination** component does not synchronize with the outer **NavDestination** component or the lifecycle of a
 * > [modal]{@link common}.
 * >
 * > - If the [title]{@link NavigationAttribute#title} and [subTitle]{@link NavigationAttribute#subTitle} are not set
 * > and [hideBackButton]{@link NavigationAttribute#hideBackButton} is set to **true**, the title bar is not displayed.
 * >
 * > - During subpage navigation within **Navigation**, the new page actively requests focus.
 * >
 * > - You are not advised to use stack operations in [aboutToAppear]{@link BaseCustomComponent#aboutToAppear}, as the
 * > page has not yet finished building at this stage, which may lead to issues such as white screens or navigation
 * > failures.
 *
 * ###### Child Components
 *
 * Supported
 *
 * Since API version 9, it is recommended that this component be used together with the [NavRouter]{@link nav_router}
 * component.
 *
 * Since API version 10, it is recommended that this component be used together with the
 * [NavPathStack]{@link NavPathStack} component and [navDestination]{@link NavigationAttribute#navDestination} attribute
 * for page routing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const Navigation: NavigationInterface;

/**
 * Defines Navigation Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const NavigationInstance: NavigationAttribute;