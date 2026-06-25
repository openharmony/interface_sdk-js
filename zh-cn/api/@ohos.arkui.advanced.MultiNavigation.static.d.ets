
'use static';
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { BuilderParam, Callback, Component, NavPathInfo, NavPathStack, NavigationMode, NavigationOptions, PopInfo, Builder, PageMapBuilder } from '@ohos.arkui.component';

import { State } from '@ohos.arkui.stateManagement';

/**
 * 表示MultiNavigation中页面的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SplitPolicy {

  /**
   * 主页页面类型。全屏模式显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOME_PAGE = 0,

  /**
   * 详情页页面类型。分栏模式显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DETAIL_PAGE = 1,

  /**
   * 全屏页页面类型。全屏模式显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FULL_PAGE = 2
}

/**
 * 当MultiNavigation的mode变化时触发的回调函数。
 *
 * @param { NavigationMode } mode - 当回调触发时的NavigationMode。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type OnNavigationModeChangeCallback = (mode: NavigationMode) => void;

/**
 * 当主页在栈顶显示时触发的回调函数。
 *
 * @param { string } name - 显示在栈顶的页面的标识符。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type OnHomeShowOnTopCallback = (name: string) => void;

/**
 * MultiNavigation({navDestination: PageMapBuilder | undefined, multiStack: MultiNavPathStack, onNavigationModeChange?: 
 * OnNavigationModeChangeCallback, onHomeShowOnTop?: OnHomeShowOnTopCallback})
 * 
 * 创建并初始化MultiNavigation组件。
 * 
 * MultiNavigation组件遵循默认的左起右清栈规则，这意味着从左侧主页点击时，会触发详情页的加载并同时清除右侧所有其他详情页，确保右侧仅展示最新加载的详情页。然而，若在右侧的详情页上再次执行详情页加载操作，系统将不会执行清栈动
 * 作。效果可参见[主页跳转详情页效果演示](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-MultiNavigation copy.md#示例)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Component
export declare struct MultiNavigation {

  /**
   * 设置路由栈。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @State
  multiStack: MultiNavPathStack;

  /**
   * 设置加载目标页面的路由规则。
   * 
   * 取值为undefined时，不会加载。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @BuilderParam
  navDestination: PageMapBuilder | undefined;

  /**
   * 设置MultiNavigation模式变更时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNavigationModeChange?: OnNavigationModeChangeCallback;

  /**
   * 设置主页处于栈顶时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onHomeShowOnTop?: OnHomeShowOnTopCallback;

  /**
   * The method to build multiNavigation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @Builder
  build(): void;
}

/**
 * 当前，MultiNavigation的路由栈仅支持由使用方自行创建，不支持通过回调方式获取。请勿使用[NavDestination]{@link ./@internal/component/ets/nav_destination}的
 * [onReady](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#onready11)等类似事件或接口来获取
 * NavPathStack并进行栈操作，因为这可能会导致不可预知的问题。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class MultiNavPathStack extends NavPathStack {

  /**
   * Creates an instance of MultiNavPathStack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 将指定的NavDestination页面信息入栈。
   *
   * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
   *     pushed in stack. Default splitPolicy is DETAIL_PAGE.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushPath(info: NavPathInfo, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * 将指定的NavDestination页面信息入栈，通过NavigationOptions设置页面栈操作选项。
   *
   * @param { NavPathInfo } info - Indicates the NavDestination to be pushed.
   * @param { NavigationOptions } [options] - Indicates options of stack operation.
   * @param { SplitPolicy } [policy] - SplitPolicy of the NavDestination which is currently
   *     pushed in stack. Default splitPolicy is DETAIL_PAGE.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushPath(info: NavPathInfo, options?: NavigationOptions, policy?: SplitPolicy): void;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - NavDestination页面详细参数。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @param { SplitPolicy } [policy] - 当前入栈页面的策略。默认值：DETAIL_PAGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushPathByName(name: string, param: Object, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param，添加onPop回调接收入栈页面出栈时的返回结果，并进行处理。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - NavDestination页面详细参数。
   * @param { Callback<PopInfo> } [onPop] - Callback回调，用于页面出栈时触发该回调处理返回结果。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @param { SplitPolicy } [policy] - 当前入栈页面的策略。默认值：DETAIL_PAGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushPathByName(
    name: string, param: Object, onPop?: Callback<PopInfo>, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * 将当前页面栈栈顶退出，将指定的NavDestination页面信息入栈，新页面的分栏策略继承原栈顶页面的策略。
   *
   * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
   * @param { boolean } [animated] - Indicates whether the transition is animated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replacePath(info: NavPathInfo, animated?: boolean): void;

  /**
   * 将当前页面栈栈顶退出，将指定的NavDestination页面信息入栈，新页面的分栏策略继承原栈顶页面的策略，通过NavigationOptions设置页面栈操作选项。
   *
   * @param { NavPathInfo } info - Indicates the new NavDestination in top of the stack.
   * @param { NavigationOptions } [options] - Indicates options of stack operation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replacePath(info: NavPathInfo, options?: NavigationOptions): void;

  /**
   * 将当前页面栈栈顶退出，将name指定的页面入栈，新页面的分栏策略继承原栈顶页面的策略。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - NavDestination页面详细参数。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replacePathByName(name: string, param: Object, animated?: boolean): void;

  /**
   * 将页面栈内索引值在indexes中的NavDestination页面删除。
   *
   * @param { Array<int> } indexes - 待删除NavDestination页面的索引值数组。<br/>number/int类型的取值范围：[0, +∞)
   * @returns { int } 返回删除的NavDestination页面数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeByIndexes(indexes: Array<int>): int;

  /**
   * 将页面栈内指定name的NavDestination页面删除。
   *
   * @param { string } name - 待删除NavDestination页面的名字。
   * @returns { int } 返回删除的NavDestination页面数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeByName(name: string): int;

  /**
   * 弹出路由栈栈顶元素，并触发onPop回调传入页面处理结果。
   * 
   * > **说明：**
   * >
   * > 当调用[keepBottomPage]{@link MultiNavPathStack.keepBottomPage}接口并设置为true时，会保留栈底页面。
   *
   * @param { Object } [result] - 页面自定义处理结果。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty,
   *     otherwise returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pop(result?: Object, animated?: boolean): NavPathInfo | undefined;

  /**
   * 回退路由栈到由栈底开始第一个名为name的NavDestination页面。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @returns { int } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。<br/>取值范围：[-1, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  popToName(name: string, animated?: boolean): int;

  /**
   * 回退路由栈到由栈底开始第一个名为name的NavDestination页面，并触发onPop回调传入页面处理结果。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } result - 页面自定义处理结果。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @returns { int } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  popToName(name: string, result: Object, animated?: boolean): int;

  /**
   * 回退路由栈到index指定的NavDestination页面。
   *
   * @param { int } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  popToIndex(index: int, animated?: boolean): void;

  /**
   * 回退路由栈到index指定的NavDestination页面，并触发onPop回调传入页面处理结果。
   *
   * @param { int } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)
   * @param { Object } result - 页面自定义处理结果。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  popToIndex(index: int, result: Object, animated?: boolean): void;

  /**
   * 将由栈底开始第一个名为name的NavDestination页面移到栈顶。
   * 
   * > **说明：**
   * >
   * > 根据找到的第一个名为name的页面的不同，MultiNavigation会进行不同的处理：
   * >
   * > 1)当找到的是最上层主页或者全屏页，此时不做任何处理；
   * >
   * > 2)当找到的是最上层主页对应的详情页，则会将对应的详情页移到栈顶；
   * >
   * > 3)当找到的是非最上层的主页，则会将主页和对应所有详情页移到栈顶，详情页相对栈关系不变；
   * >
   * > 4)当找到的是非最上层的详情页，则会将主页和对应所有详情页移到栈顶，且将目标详情页移动到对应所有详情页的栈顶；
   * >
   * > 5)当找到的是非最上层的全屏页，则会将全屏页移动到栈顶。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @returns { int } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  moveToTop(name: string, animated?: boolean): int;

  /**
   * 将指定index的NavDestination页面移到栈顶。
   * 
   * > **说明：**
   * >
   * > 根据找到的第一个名为name的页面的不同，MultiNavigation会进行不同的处理：
   * >
   * > 1)当找到的是最上层主页或者全屏页，此时不做任何处理；
   * >
   * > 2)当找到的是最上层主页对应的详情页，则会将对应的详情页移到栈顶；
   * >
   * > 3)当找到的是非最上层的主页，则会将主页和对应所有详情页移到栈顶，详情页相对栈关系不变；
   * >
   * > 4)当找到的是非最上层的详情页，则会将主页和对应所有详情页移到栈顶，且将目标详情页移动到对应所有详情页的栈顶；
   * >
   * > 5)当找到的是非最上层的全屏页，则会将全屏页移动到栈顶。
   *
   * @param { int } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  moveIndexToTop(index: int, animated?: boolean): void;

  /**
   * 清除栈中所有页面。
   * 
   * > **说明：**
   * >
   * > 当调用[keepBottomPage]{@link MultiNavPathStack.keepBottomPage}接口并设置为true时，会保留栈底页面。
   *
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clear(animated?: boolean): void;

  /**
   * 获取栈中所有NavDestination页面的名称。
   *
   * @returns { Array<string> } 返回栈中所有NavDestination页面的名称。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getAllPathName(): Array<string>;

  /**
   * 获取index指定的NavDestination页面的参数信息。
   *
   * @param { int } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)
   * @returns { Object | undefined } Returns the detailed parameter of the NavDestination
   *     if it exists in the stack, otherwise returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getParamByIndex(index: int): Object | undefined;

  /**
   * 获取全部名为name的NavDestination页面的参数信息。
   *
   * @param { string } name - NavDestination页面名称。
   * @returns { Array<Object | null | undefined> } Returns the detailed parameter of all the NavDestinations.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getParamByName(name: string): Array<Object | null | undefined>;

  /**
   * 获取全部名为name的NavDestination页面的位置索引。
   *
   * @param { string } name - NavDestination页面名称。
   * @returns { Array<int> } 返回全部名为name的NavDestination页面的位置索引。<br/>number/int类型的取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getIndexByName(name: string): Array<int>;

  /**
   * 获取栈大小。
   *
   * @returns { int } 返回栈大小。<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  size(): int;

  /**
   * 关闭（true）或打开（false）当前MultiNavigation中所有转场动画。
   *
   * @param { boolean } disable - 是否关闭转场动画。<br/>默认值：false<br/>true：关闭转场动画。<br/>false：不关闭转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disableAnimation(disable: boolean): void;

  /**
   * 切换当前顶栈详情页面的显示模式。
   *
   * @param { boolean } [isFullScreen] - Whether to switch to full screen.
   * @returns { boolean } 切换成功或失败。<br/>true：切换成功。<br/>false：切换失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  switchFullScreenState(isFullScreen?: boolean): boolean;

  /**
   * 设置主页宽度可拖动范围。应用不设置的情况下宽度为50%，且不可拖动。
   *
   * @param { double } minPercent - 最小主页宽度百分比。
   * @param { double } maxPercent - 最大主页宽度百分比。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setHomeWidthRange(minPercent: double, maxPercent: double): void;

  /**
   * 设置在调用pop和clear接口时是否保留栈底页面。
   * 
   * > **说明：**
   * >
   * > MultiNavigation将主页也当作了NavDestination页面入栈，所以调用pop或clear接口时会将栈底页面也出栈。
   * > > 应用调用此接口并设置为true时，MultiNavigation会在调用pop和clear接口时保留栈底页面。
   *
   * @param { boolean } keepBottom - 是否保留栈底页面。<br/>默认值：false<br/>true：保留栈底页面。<br/>false：不保留栈底页面。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  keepBottomPage(keepBottom: boolean): void;

  /**
   * 设置占位页面。
   * 
   * > **说明**
   * >
   * > 占位页面为特殊页面类型，当应用设置后，在一些大屏设备上会和主页默认形成左右分栏的效果，即左边主页，右边占位页。
   * >
   * > 当应用可绘制区域小于600vp、折叠屏由展开态切换为折叠态及平板横屏转竖屏等场景时，会自动将占位页出栈，只显示主页；
   * > > 而当应用可绘制区域大于等于600vp、折叠屏由折叠态切换为展开态及平板竖屏转横屏等场景时，会自动补充占位页，形成分栏。
   *
   * @param { NavPathInfo } info - 占位页页面信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setPlaceholderPage(info: NavPathInfo): void;
}