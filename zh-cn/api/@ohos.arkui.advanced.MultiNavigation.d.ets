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
* 表示MultiNavigation中页面的类型。
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
   * 主页页面类型。全屏模式显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  HOME_PAGE = 0,

  /**
   * 详情页页面类型。分栏模式显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  DETAIL_PAGE = 1,

  /**
   * 全屏页页面类型。全屏模式显示。
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
* MultiNavigation用于在大尺寸设备上分栏显示、进行路由跳转。
*
* > **说明：**
*
*
* > 由于MultiNavigation存在多重栈嵌套，调用本文档明确说明的不支持接口或不在本文档支持接口列表中的接口(例如[getParent]{@link NavPathStack#getParent}、
* > [setInterception]{@link NavPathStack#setInterception}、
* > [pushDestination]{@link NavPathStack#pushDestination(info: NavPathInfo, animated?: boolean)}等)，可能会发生无法预期的问题。
*
* > MultiNavigation在深层嵌套场景下，可能存在路由动效异常的问题。
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
   * 设置路由栈。
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
   * 设置加载目标页面的路由规则。
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
   * 设置MultiNavigation模式变更时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onNavigationModeChange?: OnNavigationModeChangeCallback;

  /**
   * 设置主页处于栈顶时的回调。
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
* 当前，MultiNavigation的路由栈仅支持由使用方自行创建，不支持通过回调方式获取。请勿使用[NavDestination]{@link nav_destination}的
* [onReady]{@link NavDestinationAttribute#onReady}等类似事件或接口来获取NavPathStack并进行栈操作，因为这可能会导致不可预知的问题。
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
   * 将指定的NavDestination页面信息入栈。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @param { SplitPolicy } [policy] - 当前入栈页面的策略。默认值：DETAIL_PAGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPath(info: NavPathInfo, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * 将指定的NavDestination页面信息入栈，通过NavigationOptions设置页面栈操作选项。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { NavigationOptions } [options] - 页面栈操作选项。仅支持其中的animated字段。
   * @param { SplitPolicy } [policy] - 当前入栈页面的策略。默认值：DETAIL_PAGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPathByName(name: string, param: Object, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param，添加onPop回调接收入栈页面出栈时的返回结果，并进行处理。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - NavDestination页面详细参数。
   * @param { base.Callback<PopInfo> } [onPop] - Callback回调，用于页面出栈时触发该回调处理返回结果。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @param { SplitPolicy } [policy] - 当前入栈页面的策略。默认值：DETAIL_PAGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pushPathByName(
    name: string, param: Object, onPop?: base.Callback<PopInfo>, animated?: boolean, policy?: SplitPolicy): void;

  /**
   * 将当前页面栈栈顶退出，将指定的NavDestination页面信息入栈，新页面的分栏策略继承原栈顶页面的策略。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  replacePath(info: NavPathInfo, animated?: boolean): void;

  /**
   * 将当前页面栈栈顶退出，将指定的NavDestination页面信息入栈，新页面的分栏策略继承原栈顶页面的策略，通过NavigationOptions设置页面栈操作选项。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { NavigationOptions } [options] - 页面栈操作选项。仅支持其中的animated字段。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  replacePathByName(name: string, param: Object, animated?: boolean): void;

  /**
   * 将页面栈内索引值在indexes中的NavDestination页面删除。
   *
   * @param { Array<number> } indexes - 待删除NavDestination页面的索引值数组。<br/>number类型的取值范围：[0, +∞)
   * @returns { number } 返回删除的NavDestination页面数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  removeByIndexes(indexes: Array<number>): number;

  /**
   * 将页面栈内指定name的NavDestination页面删除。
   *
   * @param { string } name - 待删除NavDestination页面的名字。
   * @returns { number } 返回删除的NavDestination页面数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  removeByName(name: string): number;

  /**
   * 弹出路由栈栈顶元素。
   *
   * > **说明：**
   *
   * > 当调用[keepBottomPage]{@link MultiNavPathStack#keepBottomPage}接口并设置为true时，会保留栈底页面。
   *
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @returns { NavPathInfo | undefined } Information about the navigation destination page at the top of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pop(animated?: boolean): NavPathInfo | undefined;

  /**
   * 弹出路由栈栈顶元素，并触发onPop回调传入页面处理结果。
   *
   * > **说明：**
   *
   * > 当调用[keepBottomPage]{@link MultiNavPathStack#keepBottomPage}接口并设置为true时，会保留栈底页面。
   *
   * @param { Object } [result] - 页面自定义处理结果。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @returns { NavPathInfo | undefined } Information about the navigation destination page at the top of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  pop(result?: Object, animated?: boolean): NavPathInfo | undefined;

  /**
   * 回退路由栈到由栈底开始第一个名为name的NavDestination页面。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
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
   * 回退路由栈到由栈底开始第一个名为name的NavDestination页面，并触发onPop回调传入页面处理结果。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } result - 页面自定义处理结果。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
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
   * 回退路由栈到index指定的NavDestination页面。
   *
   * @param { number } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToIndex(index: number, animated?: boolean): void;

  /**
   * 回退路由栈到index指定的NavDestination页面，并触发onPop回调传入页面处理结果。
   *
   * @param { number } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)
   * @param { Object } result - 页面自定义处理结果。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToIndex(index: number, result: Object, animated?: boolean): void;

  /**
   * 将由栈底开始第一个名为name的NavDestination页面移到栈顶。
   *
   * > **说明：**
   *
   * > 根据找到的第一个名为name的页面的不同，MultiNavigation会进行不同的处理：
   *
   * > 1)当找到的是最上层主页或者全屏页，此时不做任何处理；
   *
   * > 2)当找到的是最上层主页对应的详情页，则会将对应的详情页移到栈顶；
   *
   * > 3)当找到的是非最上层的主页，则会将主页和对应所有详情页移到栈顶，详情页相对栈关系不变；
   *
   * > 4)当找到的是非最上层的详情页，则会将主页和对应所有详情页移到栈顶，且将目标详情页移动到对应所有详情页的栈顶；
   *
   * > 5)当找到的是非最上层的全屏页，则会将全屏页移动到栈顶。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @returns { number } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  moveToTop(name: string, animated?: boolean): number;

  /**
   * 将指定index的NavDestination页面移到栈顶。
   *
   * > **说明：**
   *
   * > 根据找到的第一个名为name的页面的不同，MultiNavigation会进行不同的处理：
   *
   * > 1)当找到的是最上层主页或者全屏页，此时不做任何处理；
   *
   * > 2)当找到的是最上层主页对应的详情页，则会将对应的详情页移到栈顶；
   *
   * > 3)当找到的是非最上层的主页，则会将主页和对应所有详情页移到栈顶，详情页相对栈关系不变；
   *
   * > 4)当找到的是非最上层的详情页，则会将主页和对应所有详情页移到栈顶，且将目标详情页移动到对应所有详情页的栈顶；
   *
   * > 5)当找到的是非最上层的全屏页，则会将全屏页移动到栈顶。
   *
   * @param { number } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  moveIndexToTop(index: number, animated?: boolean): void;

  /**
   * 清除栈中所有页面。
   *
   * > **说明：**
   *
   * > 当调用[keepBottomPage]{@link MultiNavPathStack#keepBottomPage}接口并设置为true时，会保留栈底页面。
   *
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  clear(animated?: boolean): void;

  /**
   * 获取栈中所有NavDestination页面的名称。
   *
   * @returns { Array<string> } 返回栈中所有NavDestination页面的名称。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getAllPathName(): Array<string>;

  /**
   * 获取index指定的NavDestination页面的参数信息。
   *
   * @param { number } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)
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
   * 获取全部名为name的NavDestination页面的参数信息。
   *
   * @param { string } name - NavDestination页面名称。
   * @returns { Array<Object> } 返回全部名为name的NavDestination页面的参数信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getParamByName(name: string): Array<Object>;

  /**
   * 获取全部名为name的NavDestination页面的位置索引。
   *
   * @param { string } name - NavDestination页面名称。
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
   * 获取栈大小。
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
   * 关闭（true）或打开（false）当前MultiNavigation中所有转场动画。
   *
   * @param { boolean } disable - 是否关闭转场动画。<br/>默认值：false<br/>true：关闭转场动画。<br/>false：不关闭转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  disableAnimation(disable: boolean): void;

  /**
   * 切换当前顶栈详情页面的显示模式。
   *
   * @param { boolean } [isFullScreen] - 是否切换为全屏。默认值为false。true表示全屏模式，false表示分栏模式。
   * @returns { boolean } 切换成功或失败。<br/>true：切换成功。<br/>false：切换失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  switchFullScreenState(isFullScreen?: boolean): boolean;

  /**
   * 设置主页宽度可拖动范围。应用不设置的情况下宽度为50%，且不可拖动。
   *
   * @param { number } minPercent - 最小主页宽度百分比。<br/>取值范围：[0, 100]
   * @param { number } maxPercent - 最大主页宽度百分比。<br/>取值范围：[0, 100]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setHomeWidthRange(minPercent: number, maxPercent: number): void;

  /**
   * 设置在调用pop和clear接口时是否保留栈底页面。
   *
   * > **说明：**
   *
   * > MultiNavigation将主页也当作了NavDestination页面入栈，所以调用pop或clear接口时会将栈底页面也出栈。
   * > > 应用调用此接口并设置为true时，MultiNavigation会在调用pop和clear接口时保留栈底页面。
   *
   * @param { boolean } keepBottom - 是否保留栈底页面。<br/>默认值：false<br/>true：保留栈底页面。<br/>false：不保留栈底页面。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  keepBottomPage(keepBottom: boolean): void;

  /**
   * 设置占位页面。
   *
   * > **说明**
   *
   * > 占位页面为特殊页面类型，当应用设置后，在一些大屏设备上会和主页默认形成左右分栏的效果，即左边主页，右边占位页。
   *
   * > 当应用可绘制区域小于600vp、折叠屏由展开态切换为折叠态及平板横屏转竖屏等场景时，会自动将占位页出栈，只显示主页；
   * > > 而当应用可绘制区域大于等于600vp、折叠屏由折叠态切换为展开态及平板竖屏转横屏等场景时，会自动补充占位页，形成分栏。
   *
   * @param { NavPathInfo } info - 占位页页面信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setPlaceholderPage(info: NavPathInfo): void;
}

/**
* MultiNavigation用以加载NavDestination的方法。
*
 * @param { string } name - 路由页面的标识符。
 * @param { object } [param] - 路由跳转创建页面时传递的参数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
declare type NavDestinationBuildFunction = (name: string, param?: object) => void;

/**
* 当MultiNavigation的mode变化时触发的回调函数。
*
 * @param { NavigationMode } mode - 当回调触发时的NavigationMode。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
declare type OnNavigationModeChangeCallback = (mode: NavigationMode) => void;

/**
* 当主页在栈顶显示时触发的回调函数。
*
 * @param { string } name - 显示在栈顶的页面的标识符。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
declare type OnHomeShowOnTopCallback = (name: string) => void;