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
 * @file 无感监听
 * @kit ArkUI
 */

import type { Callback } from './@ohos.base';
import type UIAbilityContext from './application/UIAbilityContext';
import type { NavigationOperation, NavBar } from '../component/navigation';
import type { Size } from './@ohos.arkui.node';

/**
 * 本模块提供UI组件行为变化的无感监听能力，包括监听页面状态、滚动事件、页面路由、屏幕像素密度、布局和绘制、页面切换以及TabContent状态变化等。适用于需要在不侵入组件业务逻辑的情况下感知UI状态变化的场景。推荐使用
 * [UIObserver]{@link @ohos.arkui.UIContext}进行组件监听。
 * 
 * > **说明：**
 * >
 * > - UIObserver仅能监听到本进程内的相关信息，不支持获取<!--Del-->
 * > [UIExtensionComponent]{@link ./@internal/component/ets/ui_extension_component}等<!--DelEnd-->跨进程场景的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
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
   * [routerPageUpdate]{@link uiObserver.on(type: 'routerPageUpdate', context: UIAbilityContext | UIContext, callback: Callback<RouterPageInfo>)}
   * 无感监听的返回值。
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
   * 滚动事件的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export enum ScrollEventType {
    /**
     * 滚动事件开始。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SCROLL_START = 0,

    /**
     * 滚动事件结束。
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
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    index: number;

    /**
     * NavDestination组件的参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    param?: Object;

    /**
     * NavDestination组件的唯一标识ID。
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
     * NavDestination组件的大小，单位是vp。
     *
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
     * Navigation组件的uniqueId，可以通过
     * [queryNavigationInfo](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-api.md#querynavigationinfo12)获
     * 取。
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
   * ScrollEvent滚动信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface ScrollEventInfo {
    /**
     * 滚动组件的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    id: string;

    /**
     * 滚动组件的uniqueId。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    uniqueId: number;

    /**
     * 滚动事件的类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    scrollEvent: ScrollEventType;

    /**
     * 滚动组件的当前偏移量。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    offset: number;

    /**
     * 滚动组件的滚动方向。
     *
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
     * TabContent组件的id。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    tabContentId: string;

    /**
     * TabContent组件的uniqueId。
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
     * 最近一次聚焦的TabContent组件的下标索引。索引从0开始。仅在
     * [on('tabChange')](docroot://reference/apis-arkui/arkts-apis-uicontext-uiobserver.md#ontabchange22)的回调函数中存在。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    lastIndex?: number;
  }

  /**
   * Observer选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface ObserverOptions {

    /**
     * 组件的id。
     *
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
     * 触发生命周期的routerPage在栈中的位置。
     * 
     * 取值范围：[0, +∞)
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    size?: Size;
  }

  /**
   * 屏幕像素密度变化回调包含的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export class DensityInfo {

    /**
     * 屏幕像素密度变化时页面对应的上下文信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    context: UIContext;

    /**
     * 变化后的屏幕像素密度。
     *
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    density: number;
  }

  /**
   * 窗口尺寸布局断点变化回调的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  export class WindowSizeLayoutBreakpointInfo {

    /**
     * 窗口宽度所在的布局断点枚举。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice
     * @since 22 dynamic
     */
    readonly widthBreakpoint: WidthBreakpoint;

    /**
     * 窗口高度所在的布局断点枚举。
     *
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
     * 触发页面切换的Navigation对应的上下文信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    context: UIAbilityContext | UIContext;

    /**
     * 页面切换的源页面。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    from: NavDestinationInfo | NavBar;

    /**
     * 页面切换的目的页面。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    to: NavDestinationInfo | NavBar;

    /**
     * 页面切换操作类型。
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
   * 输入框文本变化的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  export interface TextChangeEventInfo {
    /**
     * 文本输入组件的ID。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    id: string;

    /**
     * 文本输入组件的唯一标识符。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    uniqueId: number;

    /**
     * 变化后的文本内容。
     *
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
   * [uiObserver.on]{@link uiObserver.on(type: 'navDestinationUpdate', callback: Callback<NavDestinationInfo>)}相比，新增了
   * options参数，即支持指定监听的Navigation的id。
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
   * 取消监听NavDestination组件的状态变化。与
   * [uiObserver.off]{@link uiObserver.off(type: 'navDestinationUpdate', callback?: Callback<NavDestinationInfo>)}相比，新增了
   * options参数，即支持指定监听的Navigation的id。
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
   * 监听指定id的滚动组件滚动事件的开始和结束。滚动组件包括[List]{@link ./@internal/component/ets/list}、
   * [Grid]{@link ./@internal/component/ets/grid}、[Scroll]{@link ./@internal/component/ets/scroll}、
   * [WaterFlow]{@link ./@internal/component/ets/water_flow}、[ArcList]{@link @ohos.arkui.ArcList}。
   *
   * @param { 'scrollEvent' } type - 监听事件，固定为'scrollEvent'，即滚动事件的开始和结束。
   * @param { ObserverOptions } options - 指定监听的滚动组件的id。
   * @param { Callback<ScrollEventInfo> } callback - 回调函数。返回滚动事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'scrollEvent', options: ObserverOptions, callback: Callback<ScrollEventInfo>): void;

  /**
   * 取消监听指定id的滚动组件滚动事件的开始和结束。滚动组件包括[List]{@link ./@internal/component/ets/list}、
   * [Grid]{@link ./@internal/component/ets/grid}、[Scroll]{@link ./@internal/component/ets/scroll}、
   * [WaterFlow]{@link ./@internal/component/ets/water_flow}、[ArcList]{@link @ohos.arkui.ArcList}。
   *
   * @param { 'scrollEvent' } type - 监听事件，固定为'scrollEvent'，即滚动事件的开始和结束。
   * @param { ObserverOptions } options - 指定监听的滚动组件的id。
   * @param { Callback<ScrollEventInfo> } callback - 回调函数。返回滚动事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'scrollEvent', options: ObserverOptions, callback?: Callback<ScrollEventInfo>): void;

  /**
   * 监听所有滚动组件滚动事件的开始和结束。滚动组件包括[List]{@link ./@internal/component/ets/list}、[Grid]{@link ./@internal/component/ets/grid}、
   * [Scroll]{@link ./@internal/component/ets/scroll}、[WaterFlow]{@link ./@internal/component/ets/water_flow}、
   * [ArcList]{@link @ohos.arkui.ArcList}。
   *
   * @param { 'scrollEvent' } type - 监听事件，固定为'scrollEvent'，即滚动事件的开始和结束。
   * @param { Callback<ScrollEventInfo> } callback - 回调函数。返回滚动事件的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'scrollEvent', callback: Callback<ScrollEventInfo>): void;

  /**
   * 取消监听所有滚动组件滚动事件的开始和结束。滚动组件包括[List]{@link ./@internal/component/ets/list}、
   * [Grid]{@link ./@internal/component/ets/grid}、[Scroll]{@link ./@internal/component/ets/scroll}、
   * [WaterFlow]{@link ./@internal/component/ets/water_flow}、[ArcList]{@link @ohos.arkui.ArcList}。
   *
   * @param { 'scrollEvent'} type - 监听事件，固定为'scrollEvent'，即滚动事件的开始和结束。
   * @param { Callback<ScrollEventInfo> } [callback] - 回调函数。返回滚动事件的信息。
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
   * 监听屏幕像素密度变化。
   *
   * @param { 'densityUpdate' } type - 监听事件，固定为'densityUpdate'，即屏幕像素密度变化。
   * @param { UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<DensityInfo> } callback - 回调函数。携带DensityInfo，返回变化后的屏幕像素密度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'densityUpdate', context: UIContext, callback: Callback<DensityInfo>): void;

  /**
   * 取消监听屏幕像素密度的变化。
   *
   * @param { 'densityUpdate' } type - 监听事件，固定为'densityUpdate'，即屏幕像素密度变化。
   * @param { UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<DensityInfo> } [callback] - 需要被注销的回调函数。若不指定具体的回调函数，则注销指定UIContext下所有densityUpdate事件监听。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'densityUpdate', context: UIContext, callback?: Callback<DensityInfo>): void;

  /**
   * 监听每一帧绘制指令下发情况。
   *
   * @param { 'willDraw' } type - 监听事件，固定为'willDraw'，即是否将要绘制。
   * @param { UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<void> } callback - 回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'willDraw', context: UIContext, callback: Callback<void>): void;

  /**
   * 取消监听每一帧绘制指令下发情况。
   *
   * @param { 'willDraw' } type - 监听事件，固定为'willDraw'，即是否将要绘制。
   * @param { UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<void> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'willDraw', context: UIContext, callback?: Callback<void>): void;

  /**
   * 监听每一帧布局完成情况。
   *
   * @param { 'didLayout' } type - 监听事件，固定为'didLayout'，即是否布局完成。
   * @param { UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<void> } callback - 回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function on(type: 'didLayout', context: UIContext, callback: Callback<void>): void;

  /**
   * 取消监听每一帧布局完成情况。
   *
   * @param { 'didLayout' } type - 监听事件，固定为'didLayout'，即是否布局完成。
   * @param { UIContext } context - 上下文信息，用以指定监听页面的范围。
   * @param { Callback<void> } [callback] - 需要被注销的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export function off(type: 'didLayout', context: UIContext, callback?: Callback<void>): void;

  /**
   * 监听指定Tabs组件id的TabContent页面切换事件。相比
   * [on('tabChange')](docroot://reference/apis-arkui/arkts-apis-uicontext-uiobserver.md#ontabchange22)，本接口不支持监听Tabs组件初始
   * 化时，显示首个页签的事件。
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
   * 监听TabContent页面的切换事件。相比
   * [on('tabChange')](docroot://reference/apis-arkui/arkts-apis-uicontext-uiobserver.md#ontabchange22)，本接口不支持监听Tabs组件初始
   * 化时，显示首个页签的事件。
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
  * 监听Navigation的页面切换事件。与
  * [uiObserver.on]{@link uiObserver.on( type: 'navDestinationSwitch', context: UIAbilityContext | UIContext, callback: Callback<NavDestinationSwitchInfo> )}
  * 相比，新增了observerOptions参数，即支持设置监听选项。
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
   * 取消监听Navigation的页面切换事件。与
   * [uiObserver.off]{@link uiObserver.off( type: 'navDestinationSwitch', context: UIAbilityContext | UIContext, callback?: Callback<NavDestinationSwitchInfo> )}
   * 相比，新增了observerOptions参数，即支持设置监听选项。
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