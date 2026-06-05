/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type { Callback } from './@ohos.base';

import type UIAbilityContext from './application/UIAbilityContext';

import type { NavigationOperation, NavBar } from '../component/navigation';

import type { Size } from './@ohos.arkui.node';

/**
 * 注册回调函数来观测ArkUI的行为。
 *
 * @namespace uiObserver
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * 注册回调函数来观测ArkUI的行为。
 *
 * @namespace uiObserver
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare namespace uiObserver {

  /**
   * NavDestination组件状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export enum NavDestinationState {

    /**
     * NavDestination组件显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    ON_SHOWN = 0,

    /**
     * NavDestination组件隐藏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    ON_HIDDEN = 1,

    /**
     * NavDestination从组件树上挂载。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ON_APPEAR = 2,

    /**
     * NavDestination从组件树上卸载。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ON_DISAPPEAR = 3,

    /**
     * NavDestination组件显示之前。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ON_WILL_SHOW = 4,

    /**
     * NavDestination组件隐藏之前。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ON_WILL_HIDE = 5,

    /**
     * NavDestination挂载到组件树之前。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ON_WILL_APPEAR = 6,

    /**
     * NavDestination从组件树上卸载之前。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ON_WILL_DISAPPEAR = 7,

    /**
     * NavDestination组件处于激活态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 17 dynamic
     */
    ON_ACTIVE = 8,

    /**
     * NavDestination组件处于非激活态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 17 dynamic
     */
    ON_INACTIVE = 9,

    /**
     * NavDestination组件返回。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ON_BACKPRESS = 100
  }

  /**
   * routerPage生命周期触发时对应的状态。RouterPageState用于[RouterPageInfo]{@link uiObserver.RouterPageInfo}中，作为
   * [routerPageUpdate]{@link uiObserver.on(type: 'routerPageUpdate', context: UIAbilityContext | UIContext, callback:
   * Callback<RouterPageInfo>)}无感监听的返回值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export enum RouterPageState {

    /**
     * page即将显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    ABOUT_TO_APPEAR = 0,

    /**
     * page即将销毁。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    ABOUT_TO_DISAPPEAR = 1,

    /**
     * page显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    ON_PAGE_SHOW = 2,

    /**
     * page隐藏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    ON_PAGE_HIDE = 3,

    /**
     * page返回时。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    ON_BACK_PRESS = 4
  }

  /**
   * ScrollEvent type.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export enum ScrollEventType {

    /**
     * When the ScrollEvent start.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SCROLL_START = 0,

    /**
     * When the ScrollEvent stop.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SCROLL_STOP = 1
  }

  /**
   * TabContent组件的状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export enum TabContentState {

    /**
     * TabContent组件显示。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ON_SHOW = 0,

    /**
     * TabContent组件隐藏。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ON_HIDE = 1
  }

  /**
   * NavDestination组件信息，由系统返回给开发者。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export interface NavDestinationInfo {

    /**
     * 包含NavDestination组件的Navigation组件的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    navigationId: ResourceStr;

    /**
     * NavDestination组件的名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    name: ResourceStr;

    /**
     * NavDestination组件的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    state: NavDestinationState;

    /**
     * NavDestination在页面栈中的索引。
     * 取值应≥0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    index: number;

    /**
     * The detailed parameter of NavDestination.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    param?: Object;

    /**
     * Auto-generated navDestination id, which is different from common property id of Component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    navDestinationId: string;

    /**
     * NavDestination类型。
     * 默认值：NavDestinationMode.Standard。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    mode?: NavDestinationMode;

    /**
     * NavDestination组件的uniqueId。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    uniqueId?: number;

    /**
     * NavDestination组件的大小,单位是vp。
     *
     * @type { ?Size }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    size?: Size;
  }

  /**
   * Navigation组件信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface NavigationInfo {

    /**
     * Navigation组件的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    navigationId: string;

    /**
     * Navigation组件的导航控制器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    pathStack: NavPathStack;

    /**
     * Navigation组件的uniqueId，可以通过[queryNavigationInfo]{@link BaseCustomComponent#queryNavigationInfo}获取。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    uniqueId?: number;
  }

  /**
   * ScrollEvent info.
   *
   * @interface ScrollEventInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface ScrollEventInfo {

    /**
     * Scroll id.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    id: string;

    /**
     * The uniqueId of the scrollable component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    uniqueId: number;

    /**
     * Changed ScrollEvent type.
     *
     * @type { ScrollEventType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    scrollEvent: ScrollEventType;

    /**
     * Changed ScrollEvent offset.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    offset: number;

    /**
     * 滚动方向。
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    axis?: Axis;
  }

  /**
   * TabContent页面的切换信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface TabContentInfo {

    /**
     * TabContent id.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    tabContentId: string;

    /**
     * TabContent uniqueId.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    tabContentUniqueId: number;

    /**
     * TabContent组件的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    state: TabContentState;

    /**
     * TabContent组件的下标索引。索引从0开始。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    index: number;

    /**
     * Tabs组件的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    id: string;

    /**
     * Tabs组件的uniqueId。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    uniqueId: number;

    /**
     * 最近一次聚焦的TabsContent组件的下标索引。索引从0开始。仅在 [on('tabChange')]{@link @ohos.arkui.UIContext:UIObserver#on(type:
     * 'tabChange', callback: Callback<observer.TabContentInfo>)}的回调函数中存在。
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    lastIndex?: number;
  }

  /**
   * observer options.
   *
   * @interface ObserverOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface ObserverOptions {

    /**
     * component id.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    id: string;
  }

  /**
   * RouterPageInfo包含的信息，由系统返回给开发者。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export class RouterPageInfo {

    /**
     * 触发生命周期的routerPage页面对应的上下文信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    context: UIAbilityContext | UIContext;

    /**
     * 触发生命周期的routerPage页面对应的上下文信息。
     * 取值应≥0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    index: number;

    /**
     * 触发生命周期的routerPage页面的名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    name: string;

    /**
     * 触发生命周期的routerPage页面的路径。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    path: string;

    /**
     * 触发生命周期的routerPage页面的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    state: RouterPageState;

    /**
     * 触发生命周期的routerPage页面的唯一标识。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    pageId: string;

    /**
     * routerPage页面的大小，单位是vp。
     *
     * @type { ?Size }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    size?: Size;
  }

  /**
   * 密度信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export class DensityInfo {

    /**
     * 变化的屏幕密度的上下文。
     *
     * @type { UIContext }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    context: UIContext;

    /**
     * 变化的屏幕密度。
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    density: number;
  }

  /**
   * 定义窗口尺寸布局断点信息。
   * 此类基于配置的断点阈值，提供窗口宽度和高度的当前断点类别。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  export class WindowSizeLayoutBreakpointInfo {

    /**
     * 当前窗口的宽度断点分类。该值根据已配置的宽度断点阈值，指示窗口当前处于哪个宽度类别。
     *
     * @type { WidthBreakpoint }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice
     * @since 22 dynamic
     */
    readonly widthBreakpoint: WidthBreakpoint;

    /**
     * 当前窗口的高度断点分类。该值根据已配置的高度断点阈值，指示窗口当前处于哪个高度类别。
     *
     * @type { HeightBreakpoint }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice
     * @since 22 dynamic
     */
    readonly heightBreakpoint: HeightBreakpoint;
  }

  /**
   * Navigation组件页面切换的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface NavDestinationSwitchInfo {

    /**
     * The context of the navigation operation.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    context: UIAbilityContext | UIContext;

    /**
     * From navigation content info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    from: NavDestinationInfo | NavBar;

    /**
     * To navigation content info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    to: NavDestinationInfo | NavBar;

    /**
     * The operation type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    operation: NavigationOperation;
  }

  /**
   * Text change event info
   *
   * @interface TextChangeEventInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  export interface TextChangeEventInfo {

    /**
     * The id of text field component.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    id: string;

    /**
     * The uniqueId of the text field component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    uniqueId: number;

    /**
     * Current content of text field component.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    content: string;
  }

  /**
   * Navigation组件页面切换事件的监听选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface NavDestinationSwitchObserverOptions {

    /**
     * 指定需要监听的Navigation的ID。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    navigationId: ResourceStr;
  }

  /**
   * 监听NavDestination组件的状态变化。与
   * * [uiObserver.on]{@link uiObserver.on(type: 'navDestinationUpdate', callback:
   * Callback<NavDestinationInfo>)}相比，新增了options参数，即支持指定监听的Navigation的id。
   *
   * @param { 'navDestinationUpdate' } type - 监听事件，固定为'navDestinationUpdate'，即NavDestination组件的状态变化。
   * @param { object } options - 指定监听的Navigation的id。
   * @param { Callback<NavDestinationInfo> } callback - 回调函数。返回当前的NavDestination组件状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export function on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<NavDestinationInfo>): void;

  /**
   * 取消监听NavDestination组件的状态变化。与[uiObserver.off]{@link uiObserver.off(type: 'navDestinationUpdate', callback?:
   * Callback<NavDestinationInfo>)}相比，新增了options参数，即支持指定监听的Navigation的id。
   *
   * @param { 'navDestinationUpdate' } type - 监听事件，固定为'navDestinationUpdate'，即NavDestination组件的状态变化。
   * @param { object } options - 指定监听的Navigation的id。
   * @param { Callback<NavDestinationInfo> } callback - 回调函数。返回当前的NavDestination组件状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export function off(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback?: Callback<NavDestinationInfo>): void;

  /**
   * 监听NavDestination组件的状态变化。
   *
   * @param { 'navDestinationUpdate' } type - 监听事件，固定为'navDestinationUpdate'，即NavDestination组件的状态变化。
   * @param { Callback<NavDestinationInfo> } callback - 回调函数。返回当前的NavDestination组件状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export function on(type: 'navDestinationUpdate', callback: Callback<NavDestinationInfo>): void;

  /**
   * 取消监听NavDestination组件的状态变化。
   *
   * @param { 'navDestinationUpdate' } type - 监听事件，固定为'navDestinationUpdate'，即NavDestination组件的状态变化。
   * @param { Callback<NavDestinationInfo> } [callback] - 回调函数。返回当前的NavDestination组件状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export function off(type: 'navDestinationUpdate', callback?: Callback<NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event start or stop.
   *
   * @param { 'scrollEvent' } type - The type of event to listen for. Must be 'scrollEvent'.
   * @param { ObserverOptions } options - The options object.
   * @param { Callback<ScrollEventInfo> } callback - The callback function to be called when the scroll event start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'scrollEvent', options: ObserverOptions, callback: Callback<ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'scrollEvent' } type - The type of event to remove the listener for. Must be 'scrollEvent'.
   * @param { ObserverOptions } options - The options object.
   * @param { Callback<ScrollEventInfo> } callback - The callback function to remove. If not provided, all callbacks for the given event type and
   *                                                    scroll ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'scrollEvent', options: ObserverOptions, callback?: Callback<ScrollEventInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event start or stop.
   *
   * @param { 'scrollEvent' } type - The type of event to listen for. Must be 'scrollEvent'.
   * @param { Callback<ScrollEventInfo> } callback - The callback function to be called when the scroll event start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'scrollEvent', callback: Callback<ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'scrollEvent'} type - The type of event to remove the listener for. Must be 'scrollEvent'.
   * @param { Callback<ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                      will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'scrollEvent', callback?: Callback<ScrollEventInfo>): void;

  /**
   * 监听router中page页面的状态变化。
   *
   * @param { 'routerPageUpdate' } type - 监听事件，固定为'routerPageUpdate'，即router中page页面的状态变化。
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<RouterPageInfo> } callback - 回调函数。携带pageInfo，返回当前的page页面状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export function on(type: 'routerPageUpdate', context: UIAbilityContext | UIContext, callback: Callback<RouterPageInfo>): void;

  /**
   * 取消监听router中page页面的状态变化。
   *
   * @param { 'routerPageUpdate' } type - 监听事件，固定为'routerPageUpdate'，即router中page页面的状态变化。
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<RouterPageInfo> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  export function off(type: 'routerPageUpdate', context: UIAbilityContext | UIContext, callback?: Callback<RouterPageInfo>): void;

  /**
   * 注册一个回调函数，当屏幕密度更新时被调用。
   *
   * @param { 'densityUpdate' } type - 要监听的事件类型。必须为 'densityUpdate'。
   * @param { UIContext } context - observer的上下文作用域。
   * @param { Callback<DensityInfo> } callback - 当屏幕密度更新时要调用的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'densityUpdate', context: UIContext, callback: Callback<DensityInfo>): void;

  /**
   * 移除先前通过 on() 注册的回调函数。
   *
   * @param { 'densityUpdate' } type - 要移除监听器的事件类型。必须为 'densityUpdate'。
   * @param { UIContext } context - observer的上下文作用域。
   * @param { Callback<DensityInfo> } [callback] - 要移除的回调函数。如果未提供，将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'densityUpdate', context: UIContext, callback?: Callback<DensityInfo>): void;

  /**
   * 注册一个回调函数，当绘制命令即将被绘制时被调用。
   *
   * @param { 'willDraw' } type - 要监听的事件类型。必须为 'willDraw'。
   * @param { UIContext } context - observer的上下文作用域。
   * @param { Callback<void> } callback - 当绘制命令即将被绘制时要调用的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'willDraw', context: UIContext, callback: Callback<void>): void;

  /**
   * 移除先前通过 on() 注册的回调函数。
   *
   * @param { 'willDraw' } type - 要移除监听器的事件类型。必须为 'willDraw'。
   * @param { UIContext } context - observer的上下文作用域。
   * @param { Callback<void> } [callback] - 要移除的回调函数。如果未提供，将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'willDraw', context: UIContext, callback?: Callback<void>): void;

  /**
   * 注册一个回调函数，当布局完成时被调用。
   *
   * @param { 'didLayout' } type - 要监听的事件类型。必须为 'didLayout'。
   * @param { UIContext } context - observer的上下文作用域。
   * @param { Callback<void> } callback - 当布局完成时要调用的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'didLayout', context: UIContext, callback: Callback<void>): void;

  /**
   * 移除先前通过 on() 注册的回调函数。
   *
   * @param { 'didLayout' } type - 要移除监听器的事件类型。必须为 'didLayout'。
   * @param { UIContext } context - observer的上下文作用域。
   * @param { Callback<void> } [callback] - 要移除的回调函数。如果未提供，将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'didLayout', context: UIContext, callback?: Callback<void>): void;

  /**
   * 监听指定Tabs组件id的TabContent页面切换事件。相比[on('tabChange')]{@link @ohos.arkui.UIContext:UIObserver#on(type: 'tabChange',
   * callback: Callback<observer.TabContentInfo>)}，本接口不支持监听Tabs组件初始化时，显示首个页签的事件。
   *
   * @param { 'tabContentUpdate' } type - 监听事件，固定为'tabContentUpdate'，即TabContent页面的切换事件。
   * @param { ObserverOptions } options - 指定监听的Tabs组件的id。
   * @param { Callback<TabContentInfo> } callback - 回调函数。携带TabContentInfo，返回TabContent页面切换事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'tabContentUpdate', options: ObserverOptions, callback: Callback<TabContentInfo>): void;

  /**
   * 取消监听指定Tabs组件id的TabContent页面切换事件。
   *
   * @param { 'tabContentUpdate' } type - 监听事件，固定为'tabContentUpdate'，即TabContent页面的切换事件。
   * @param { ObserverOptions } options - 指定监听的Tabs组件的id。
   * @param { Callback<TabContentInfo> } callback - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'tabContentUpdate', options: ObserverOptions, callback?: Callback<TabContentInfo>): void;

  /**
   * 监听TabContent页面的切换事件。相比[on('tabChange')]{@link @ohos.arkui.UIContext:UIObserver#on(type: 'tabChange', callback:
   * Callback<observer.TabContentInfo>)}，本接口不支持监听Tabs组件初始化时，显示首个页签的事件。
   *
   * @param { 'tabContentUpdate' } type - 监听事件，固定为'tabContentUpdate'，即TabContent页面的切换事件。
   * @param { Callback<TabContentInfo> } callback - 回调函数。携带TabContentInfo，返回TabContent页面切换事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'tabContentUpdate', callback: Callback<TabContentInfo>): void;

  /**
   * 取消监听TabContent页面的切换事件。
   *
   * @param { 'tabContentUpdate' } type - 监听事件，固定为'tabContentUpdate'，即TabContent页面的切换事件。
   * @param { Callback<TabContentInfo> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'tabContentUpdate', callback?: Callback<TabContentInfo>): void;

  /**
   * 监听Navigation的页面切换事件。
   *
   * @param { 'navDestinationSwitch' } type - 监听事件，固定为'navDestinationSwitch'，即Navigation的页面切换事件。
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面切换事件的范围。
   * @param { Callback<NavDestinationSwitchInfo> } callback - 回调函数。携带NavDestinationSwitchInfo，返回页面切换事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(
    type: 'navDestinationSwitch',
    context: UIAbilityContext | UIContext,
    callback: Callback<NavDestinationSwitchInfo>
  ): void;

  /**
   * 取消监听Navigation的页面切换事件。
   *
   * @param { 'navDestinationSwitch' } type - 监听事件，固定为'navDestinationSwitch'，即Navigation的页面切换事件。
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面切换事件的范围。
   * @param { Callback<NavDestinationSwitchInfo> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(
    type: 'navDestinationSwitch',
    context: UIAbilityContext | UIContext,
    callback?: Callback<NavDestinationSwitchInfo>
  ): void;

  /**
   * 监听Navigation的页面切换事件。与[uiObserver.on]{@link uiObserver.on( type: 'navDestinationSwitch', context: UIAbilityContext |
   *  UIContext, callback: Callback<NavDestinationSwitchInfo> )}相比，新增了observerOptions参数，即支持设置监听选项。
   *
   * @param { 'navDestinationSwitch' } type - 监听事件，固定为'navDestinationSwitch'，即Navigation的页面切换事件。
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面切换事件的范围。
   * @param { NavDestinationSwitchObserverOptions } observerOptions - 监听选项。
   * @param { Callback<NavDestinationSwitchInfo> } callback - 回调函数。携带NavDestinationSwitchInfo，返回页面切换事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(
    type: 'navDestinationSwitch',
    context: UIAbilityContext | UIContext,
    observerOptions: NavDestinationSwitchObserverOptions,
    callback: Callback<NavDestinationSwitchInfo>
  ): void;

  /**
   * 取消监听Navigation的页面切换事件。与[uiObserver.off]{@link uiObserver.off( type: 'navDestinationSwitch', context:
   * UIAbilityContext | UIContext, callback?: Callback<NavDestinationSwitchInfo> )}相比，新增了observerOptions参数，即支持设置监听选项。
   *
   * @param { 'navDestinationSwitch' } type - 监听事件，固定为'navDestinationSwitch'，即Navigation的页面切换事件。
   * @param { UIAbilityContext | UIContext } context - 上下文信息，用以指定监听页面切换事件的范围。
   * @param { NavDestinationSwitchObserverOptions } observerOptions - 监听选项。
   * @param { Callback<NavDestinationSwitchInfo> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(
    type: 'navDestinationSwitch',
    context: UIAbilityContext | UIContext,
    observerOptions: NavDestinationSwitchObserverOptions,
    callback?: Callback<NavDestinationSwitchInfo>
  ): void;
}

export default uiObserver;