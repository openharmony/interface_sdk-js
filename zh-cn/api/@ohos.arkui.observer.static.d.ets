
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

import { ResourceStr } from '@ohos.arkui.component';

import { NavPathStack, NavigationOperation, NavBar } from '@ohos.arkui.component';

import { NavDestinationMode } from '@ohos.arkui.component';

import { HeightBreakpoint, WidthBreakpoint } from '@ohos.arkui.component';

import { Axis } from '@ohos.arkui.component';

import { UIContext } from '@ohos.arkui.UIContext';

import UIAbilityContext from './application/UIAbilityContext';

import { Callback } from './@ohos.base';

import { Size } from '@ohos.arkui.node';

import { ResourceStr } from './arkui/component/units';

import { NavPathStack, NavigationOperation, NavBar } from './arkui/component/navigation';

import { NavDestinationMode } from './arkui/component/navDestination';

/**
 * Register callbacks to observe ArkUI behavior.
 *
 * @namespace uiObserver
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace uiObserver {

  /**
   * NavDestination组件状态。
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export enum NavDestinationState {

    /**
     * NavDestination组件显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_SHOWN = 0,

    /**
     * NavDestination组件隐藏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_HIDDEN = 1,

    /**
     * NavDestination从组件树上挂载。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_APPEAR = 2,

    /**
     * NavDestination从组件树上卸载。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_DISAPPEAR = 3,

    /**
     * NavDestination组件显示之前。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_WILL_SHOW = 4,

    /**
     * NavDestination组件隐藏之前。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_WILL_HIDE = 5,

    /**
     * NavDestination挂载到组件树之前。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_WILL_APPEAR = 6,

    /**
     * NavDestination从组件树上卸载之前。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_WILL_DISAPPEAR = 7,

    /**
     * NavDestination组件处于激活态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_ACTIVE = 8,

    /**
     * NavDestination组件处于非激活态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_INACTIVE = 9,

    /**
     * NavDestination组件返回。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_BACKPRESS = 100
  }

  /**
   * routerPage生命周期触发时对应的状态。
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export enum RouterPageState {

    /**
     * page即将显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ABOUT_TO_APPEAR = 0,

    /**
     * page即将销毁。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ABOUT_TO_DISAPPEAR = 1,

    /**
     * page显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_PAGE_SHOW = 2,

    /**
     * page隐藏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_PAGE_HIDE = 3,

    /**
     * page返回时。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_BACK_PRESS = 4
  }

  /**
   * ScrollEvent type.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export enum ScrollEventType {

    /**
     * When the ScrollEvent start.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SCROLL_START = 0,

    /**
     * When the ScrollEvent stop.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SCROLL_STOP = 1
  }

  /**
   * TabContent组件的状态。
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export enum TabContentState {

    /**
     * TabContent组件显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_SHOW = 0,

    /**
     * TabContent组件隐藏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ON_HIDE = 1
  }

  /**
   * NavDestination组件信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface NavDestinationInfo {

    /**
     * 包含NavDestination组件的Navigation组件的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    navigationId: ResourceStr;

    /**
     * NavDestination组件的名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: ResourceStr;

    /**
     * NavDestination组件的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    state: NavDestinationState;

    /**
     * NavDestination在页面栈中的索引。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;

    /**
     * NavDestination组件的参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    param?: Object;

    /**
     * NavDestination组件的唯一标识ID。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    navDestinationId: string;

    /**
     * NavDestination组件的uniqueId。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uniqueId?: int;

    /**
     * NavDestination类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mode?: NavDestinationMode;

    /**
     * NavDestination的尺寸。
     *
     * @type { ?Size }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size?: Size;
  }

  /**
   * Navigation组件信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface NavigationInfo {

    /**
     * 包含NavDestination组件的Navigation组件的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    navigationId: string;

    /**
     * Navigation组件的导航控制器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pathStack: NavPathStack;

    /**
     * The uniqueId of the navigation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uniqueId?: int;
  }

  /**
   * ScrollEvent info.
   *
   * @interface ScrollEventInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface ScrollEventInfo {

    /**
     * Scroll id.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;

    /**
     * The uniqueId of the scrollable component.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uniqueId: int;

    /**
     * Changed ScrollEvent type.
     *
     * @type { ScrollEventType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scrollEvent: ScrollEventType;

    /**
     * Changed ScrollEvent offset.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset: double;

    /**
     * 滚动轴。
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    axis?: Axis;
  }

  /**
   * TabContent页面的切换信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface TabContentInfo {

    /**
     * TabContent组件的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tabContentId: string;

    /**
     * TabContent组件的uniqueId。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tabContentUniqueId: int;

    /**
     * TabContent组件的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    state: TabContentState;

    /**
     * TabContent组件的下标索引。索引从0开始。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;

    /**
     * Tabs组件的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;

    /**
     * Tabs组件的uniqueId。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    uniqueId: int;

    /**
     * Tabs组件的lastIndex。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lastIndex?: int;
  }

  /**
   * 文本更改事件信息
   *
   * @interface TextChangeEventInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  export interface TextChangeEventInfo {

    /**
     * 文本字段组件的ID。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    id: string;

    /**
     * 文本字段组件的唯一ID。
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    uniqueId: int;

    /**
     * 文本字段组件的当前内容。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    content: string;
  }

  /**
   * observer options.
   *
   * @interface ObserverOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface ObserverOptions {

    /**
     * component id.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;
  }

  /**
   * RouterPageInfo包含的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export class RouterPageInfo {

    /**
     * 触发生命周期的routerPage页面对应的上下文信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    context: UIAbilityContext | UIContext;

    /**
     * 触发生命周期的routerPage在栈中的位置。
     * 取值限定为整数。
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;

    /**
     * 触发生命周期的routerPage页面的名称。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
     * 触发生命周期的routerPage页面的路径。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    path: string;

    /**
     * 触发生命周期的routerPage页面的状态。
     *
     * @type { RouterPageState }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    state: RouterPageState;

    /**
     * 触发生命周期的routerPage页面的唯一标识。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pageId: string;

    /**
     * routerPage页面的大小，单位是vp。
     *
     * @type { ?Size }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size?: Size;
  }

  /**
   * Density info.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export class DensityInfo {

    /**
     * The context of the changed screen density.
     *
     * @type { UIContext }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    context: UIContext;

    /**
     * The changed screen density.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    density: double;
  }

  /**
   * Navigation组件页面切换的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface NavDestinationSwitchInfo {

    /**
     * 触发页面切换的Navigation对应的上下文信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    context: UIAbilityContext | UIContext;

    /**
     * From navigation content info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    from: NavDestinationInfo | NavBar;

    /**
     * To navigation content info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    to: NavDestinationInfo | NavBar;

    /**
     * The operation type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    operation: NavigationOperation;
  }

  /**
   * 定义窗口大小断点信息。
   * 这个接口定义了当前窗口长宽的断点信息，基于配置好的断点阈值。
   *
   * @interface WindowSizeLayoutBreakpointInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @since 24 static
   */
  export interface WindowSizeLayoutBreakpointInfo {

    /**
     * 当前窗口的宽度断点分类。该值根据已配置的宽度断点阈值，指示窗口当前处于哪个宽度类别。
     *
     * @type { WidthBreakpoint }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @since 24 static
     */
    readonly widthBreakpoint: WidthBreakpoint;

    /**
     * 当前窗口的高度断点分类。该值根据已配置的高度断点阈值和宽高比，指示窗口当前所处的高度类别。
     *
     * @type { HeightBreakpoint }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @since 24 static
     */
    readonly heightBreakpoint: HeightBreakpoint;
  }

  /**
   * Indicates the options of NavDestination switch.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface NavDestinationSwitchObserverOptions {

    /**
     * The navigationId that need observation
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    navigationId: ResourceStr;
  }

  /**
   * 监听NavDestination组件的状态变化。
   *
   * @param { NavDestinationSwitchObserverOptions } options - 指定监听的Navigation的id。
   * @param { Callback<NavDestinationInfo> } callback - 回调函数。返回当前的NavDestination组件状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onNavDestinationUpdate(
    options: NavDestinationSwitchObserverOptions, 
    callback: Callback<NavDestinationInfo>
  ): void;

  /**
   * 取消监听NavDestination组件的状态变化。
   *
   * @param { NavDestinationSwitchObserverOptions } options - 指定监听的Navigation的id。
   * @param { Callback<NavDestinationInfo> } [callback] - 回调函数。返回当前的NavDestination组件状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offNavDestinationUpdate(
    options: NavDestinationSwitchObserverOptions, 
    callback?: Callback<NavDestinationInfo>
  ): void;

  /**
   * 监听NavDestination组件的状态变化。
   *
   * @param { Callback<NavDestinationInfo> } callback - 回调函数。返回当前的NavDestination组件状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onNavDestinationUpdate(callback: Callback<NavDestinationInfo>): void;

  /**
   * 取消监听NavDestination组件的状态变化。
   *
   * @param { Callback<NavDestinationInfo> } [callback] - 回调函数。返回当前的NavDestination组件状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offNavDestinationUpdate(callback?: Callback<NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event starts or stops.
   *
   * @param { ObserverOptions } options - The options object.
   * @param { Callback<ScrollEventInfo> } callback - The callback function to be called when the scroll event start or
   *     stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onScrollEvent(options: ObserverOptions, callback: Callback<ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onScrollEvent()`.
   *
   * @param { ObserverOptions } options - The options object.
   * @param { Callback<ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all callbacks 
   *     for the given event type and scroll ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offScrollEvent(options: ObserverOptions, callback?: Callback<ScrollEventInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event starts or stops.
   *
   * @param { Callback<ScrollEventInfo> } callback - The callback function to be called when the scroll event
   *     start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onScrollEvent(callback: Callback<ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onScrollEvent()`.
   *
   * @param { Callback<ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all callbacks
   *     for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offScrollEvent(callback?: Callback<ScrollEventInfo>): void;

  /**
   * 监听router中page页面的状态变化。
   *
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<RouterPageInfo> } callback - 回调函数。携带pageInfo，返回当前的page页面状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onRouterPageUpdate(context: UIAbilityContext | UIContext, callback: Callback<RouterPageInfo>): void;

  /**
   * 取消监听router中page页面的状态变化。
   *
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<RouterPageInfo> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offRouterPageUpdate(context: UIAbilityContext | UIContext, callback?: Callback<RouterPageInfo>): void;

  /**
   * Registers a callback function to be called when the screen density is updated.
   *
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<DensityInfo> } callback - The callback function to be called when the screen density is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onDensityUpdate(context: UIContext, callback: Callback<DensityInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<DensityInfo> } [callback] - The callback function to remove. If not provided, all callbacks
   *     for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offDensityUpdate(context: UIContext, callback?: Callback<DensityInfo>): void;

  /**
   * Registers a callback function to be called when the draw command will be drawn.
   *
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<void> } callback - The callback function to be called when the draw command will be drawn.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onWillDraw(context: UIContext, callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the
   *     given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offWillDraw(context: UIContext, callback?: Callback<void>): void;

  /**
   * Registers a callback function to be called when the layout is done.
   *
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<void> } callback - The callback function to be called when the layout is done.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onDidLayout(context: UIContext, callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the
   *     given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offDidLayout(context: UIContext, callback?: Callback<void>): void;

  /**
   * 监听TabContent页面的切换事件。
   *
   * @param { ObserverOptions } options - 指定监听的Tabs组件的id。
   * @param { Callback<TabContentInfo> } callback - 回调函数。携带TabContentInfo，返回TabContent页面切换事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onTabContentUpdate(options: ObserverOptions, callback: Callback<TabContentInfo>): void;

  /**
   * 取消监听TabContent页面的切换事件。
   *
   * @param { ObserverOptions } options - 指定监听的Tabs组件的id。
   * @param { Callback<TabContentInfo> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offTabContentUpdate(options: ObserverOptions, callback?: Callback<TabContentInfo>): void;

  /**
   * 监听TabContent页面的切换事件。
   *
   * @param { Callback<TabContentInfo> } callback - 回调函数。携带TabContentInfo，返回TabContent页面切换事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onTabContentUpdate(callback: Callback<TabContentInfo>): void;

  /**
   * 取消监听TabContent页面的切换事件。
   *
   * @param { Callback<TabContentInfo> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offTabContentUpdate(callback?: Callback<TabContentInfo>): void;

  /**
   * 监听Navigation的页面切换事件。
   *
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面切换事件的范围。
   * @param { Callback<NavDestinationSwitchInfo> } callback - 回调函数。携带NavDestinationSwitchInfo，返回页面切换事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onNavDestinationSwitch(
    context: UIAbilityContext | UIContext,
    callback: Callback<NavDestinationSwitchInfo>
  ): void;

  /**
   * 取消监听Navigation的页面切换事件。
   *
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面切换事件的范围。
   * @param { Callback<NavDestinationSwitchInfo> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offNavDestinationSwitch(
    context: UIAbilityContext | UIContext,
    callback?: Callback<NavDestinationSwitchInfo>
  ): void;

  /**
   * 监听Navigation的页面切换事件。
   *
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面切换事件的范围。
   * @param { NavDestinationSwitchObserverOptions } observerOptions - 监听选项。
   * @param { Callback<NavDestinationSwitchInfo> } callback - 回调函数。携带NavDestinationSwitchInfo，返回页面切换事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function onNavDestinationSwitch(
    context: UIAbilityContext | UIContext,
    observerOptions: NavDestinationSwitchObserverOptions,
    callback: Callback<NavDestinationSwitchInfo>
  ): void;

  /**
   * 取消监听Navigation的页面切换事件。
   *
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面切换事件的范围。
   * @param { NavDestinationSwitchObserverOptions } observerOptions - 监听选项。
   * @param { Callback<NavDestinationSwitchInfo> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export function offNavDestinationSwitch(
    context: UIAbilityContext | UIContext,
    observerOptions: NavDestinationSwitchObserverOptions,
    callback?: Callback<NavDestinationSwitchInfo>
  ): void;
}

export default uiObserver;