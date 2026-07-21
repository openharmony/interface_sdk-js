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
   * 主页页面类型。全屏模式显示。适用于应用主页，作为导航起始页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  HOME_PAGE = 0,

  /**
   * 详情页页面类型。分栏模式显示。适用于详情页面，在大屏设备上与主页形成左右分栏布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  DETAIL_PAGE = 1,

  /**
   * 全屏页页面类型。全屏模式显示。适用于视频播放、图片浏览等需要全屏展示的页面。
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
* MultiNavigation是一个支持分栏导航的组件，提供多层页面栈管理能力，通过MultiNavPathStack统一管理主页、详情页、全屏页等不同类型页面的导航栈。
* 支持左起右清栈等智能路由策略，适用于平板、折叠屏等大尺寸设备的复杂导航场景，能够优化页面跳转体验、提升用户操作效率。
*
* > **说明：**
*
* > 由于MultiNavigation存在多层次的页面栈结构（主页、详情页、全屏页各自维护子栈，并由MultiNavPathStack统一管理），
* > 调用本文档明确说明的不支持接口或不在本文档支持接口列表中的接口(例如[getParent](ts-basic-components-navigation.md#getparent11)、
* > [setInterception](ts-basic-components-navigation.md#setinterception12)
* > [pushDestination](ts-basic-components-navigation.md#pushdestination11)等)，可能会发生无法预期的问题。
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
   * 设置MultiNavigation模式变更时的回调。当需要在导航模式变化时执行特定业务逻辑（如调整页面布局、更新UI状态等）时传入此回调。不传入时不监听导航模式变更事件，导航模式变更时无回调触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onNavigationModeChange?: OnNavigationModeChangeCallback;

  /**
   * 设置主页处于栈顶时的回调。不传入时不监听主页栈顶状态变化。
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
* MultiNavigation的路由栈仅支持由使用方自行创建，不支持通过回调方式获取。请勿使用[NavDestination]{@link nav_destination}的
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
   * 创建MultiNavPathStack路由栈实例。
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
   * @param { SplitPolicy } [policy] - 当前入栈页面的策略。<br/>默认值：DETAIL_PAGE
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
   * @param { NavigationOptions } [options] - 页面栈操作选项。仅支持其中的animated字段，使用其他字段将被忽略。省略时使用默认动画配置。
   * @param { SplitPolicy } [policy] - 当前入栈页面的策略。<br/>默认值：DETAIL_PAGE
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
   * @param { string } name - NavDestination页面名称。需要与NavDestinationBuildFunction中注册的页面名称一致。
   * @param { Object } param - NavDestination页面详细参数，用于向目标页面传递自定义数据。具体字段规格请参考NavDestination相关文档。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @param { SplitPolicy } [policy] - 当前入栈页面的策略。<br/>默认值：DETAIL_PAGE
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
   * @param { string } name - NavDestination页面名称。需要与NavDestinationBuildFunction中注册的页面名称一致。
   * @param { Object } param - NavDestination页面详细参数，用于向目标页面传递自定义数据。具体字段规格请参考NavDestination相关文档。
   * @param { base.Callback<PopInfo> } [onPop] - Callback回调，用于页面出栈时触发该回调处理返回结果。省略时不触发回调处理。
   * 可通过pop方法、popToName方法、popToIndex方法的result参数传递数据给此回调。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @param { SplitPolicy } [policy] - 当前入栈页面的策略。<br/>默认值：DETAIL_PAGE
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
   * @param { Array<number> } indexes - 待删除NavDestination页面的索引值数组。<br/>number类型的取值范围：[0, +∞)。超出范围时操作不生效。
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
   * @returns { NavPathInfo | undefined } 返回栈顶NavDestination页面的信息。栈为空时返回undefined。
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
   * @param { Object } [result] - 页面自定义处理结果。具体内容由开发者自定义，建议包含明确的业务标识和处理结果数据。该结果将传递给入栈时设置的onPop回调函数。省略时不传递结果数据。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @returns { NavPathInfo | undefined } 返回栈顶NavDestination页面的信息。栈为空时返回undefined。
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
   * @param { Object } result - 页面自定义处理结果。具体内容由开发者自定义，建议包含明确的业务标识和处理结果数据。该结果将传递给入栈时设置的onPop回调函数。
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
   * 回退路由栈到index指定的NavDestination页面。当index无效（超出范围）时，不执行回退操作。
   *
   * @param { number } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)。超出范围时操作不生效。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>默认值：true<br/>true：支持转场动画。<br/>false：不支持转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  popToIndex(index: number, animated?: boolean): void;

  /**
   * 回退路由栈到index指定的NavDestination页面，并触发onPop回调传入页面处理结果。当index无效（超出范围）时，不执行回退操作。
   *
   * @param { number } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)。超出范围时操作不生效。
   * @param { Object } result - 页面自定义处理结果。具体内容由开发者自定义，建议包含明确的业务标识和处理结果数据。
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
   * > 根据指定的index页面的不同，MultiNavigation会进行不同的处理：
   *
   * > 1)当指定的是最上层主页或者全屏页的index，此时不做任何处理；
   *
   * > 2)当指定的是最上层主页对应的详情页的index，则会将对应的详情页移到栈顶；
   *
   * > 3)当指定的是非最上层的主页的index，则会将主页和对应所有详情页移到栈顶，详情页相对栈关系不变；
   *
   * > 4)当指定的是非最上层的详情页的index，则会将主页和对应所有详情页移到栈顶，且将目标详情页移动到对应所有详情页的栈顶；
   *
   * > 5)当指定的是非最上层的全屏页的index，则会将全屏页移动到栈顶。
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
   * @param { number } index - NavDestination页面的位置索引。<br/>取值范围：[0, +∞)。超出范围时操作不生效。
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
   * @returns { Array<string> } 返回栈中所有NavDestination页面的名称，数组元素按栈底到栈顶的顺序排列。
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
   * @returns { unknown | undefined } **Object**: 返回对应NavDestination页面的参数信息，具体字段由pushPath或pushPathByName时传入的param决定。
   *     <br/>undefined: 传入index无效时返回undefined。
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
   * 关闭（true）或打开（false）当前MultiNavigation中所有转场动画。适用于需要提升页面切换性能或实现自定义转场效果的场景。
   *
   * > **说明：**
   * >
   * > 此配置会影响以下栈操作方法的动画效果：pushPath、pushPathByName、replacePath、replacePathByName、pop、popToName、
   * > popToIndex、moveToTop、moveIndexToTop、clear。配置立即生效，在MultiNavigation生命周期内持续有效。
   * > 建议在批量栈操作前调用disableAnimation(true)关闭动画以提升性能，操作完成后调用disableAnimation(false)恢复动画。
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
   * 切换当前栈顶详情页面的显示模式。适用于视频播放、图片浏览等需要全屏展示的场景。
   *
   * @param { boolean } [isFullScreen] - 是否切换为全屏模式。<br/>默认值：false<br/>true：全屏模式；false：分栏模式。
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
   * @param { number } minPercent - 最小主页宽度百分比。<br/>取值范围：[0, 100]，且需小于等于maxPercent。
   * @param { number } maxPercent - 最大主页宽度百分比。<br/>取值范围：[0, 100]，且需大于等于minPercent。
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
   * > **说明：**
   *
   * > 占位页面为特殊页面类型，当应用设置后，在支持分栏显示的大屏设备上会和主页默认形成左右分栏的效果，即左边主页，右边占位页。
   * >
   * > 当应用可绘制区域小于600vp、折叠屏由展开态切换为折叠态及平板横屏转竖屏等场景时，会自动将占位页出栈，只显示主页；
   * >
   * > 而当应用可绘制区域大于等于600vp、折叠屏由折叠态切换为展开态及平板竖屏转横屏等场景时，会自动补充占位页，形成分栏。
   *
   * @param { NavPathInfo } info - 占位页页面信息，用于设置占位页。占位页在大屏设备上会与主页形成左右分栏效果。
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
 * @param { object } [param] - 路由跳转创建页面时传递的参数。默认效果：不传入时无参数传递。
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