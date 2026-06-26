
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

import window from '../../@ohos.window';

import { Resource } from '../../global/resource';

import { TextModifier } from '../../arkui/TextModifier';

import { LengthMetrics } from '../../arkui/Graphics';

import { Callback, BlurStyle, CommonMethod, LayoutSafeAreaType, LayoutSafeAreaEdge, BackgroundEffectOptions, 
  BackgroundBlurStyleOptions, PixelMap, Bindable, AttributeModifier } from './common';

import { Builder, CustomBuilder, CustomBuilderT, PageMapBuilder } from './builder';

import { Length, ResourceStr, ResourceColor, Dimension, VoidCallback } from './units';

import { TitleHeight } from './enums';

import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';

import { NavDestinationContext, NavDestinationMode } from './navDestination';

import { ComponentBuilder } from './builder';

import { ComponentContent } from '@ohos.arkui.node';

/**
 * 状态栏的属性。在设置页面级状态栏属性时使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SystemBarStyle = window.SystemBarStyle;

/**
 * Navigation通用标题。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationCommonTitle {

  /**
   * 设置主标题。
   *
   * 取值为undefined时，不显示主标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  main: string | Resource | undefined;

  /**
   * 设置副标题。
   *
   * 取值为undefined时，不显示副标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  sub: string | Resource | undefined;
}

/**
 * Navigation自定义标题。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationCustomTitle {

  /**
   * 设置标题栏内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  builder: CustomBuilder;

  /**
   * 设置标题栏高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: TitleHeight | Length;
}

/**
 * 导航页显示模式。Navigation处于分栏显示状态时，导航页和内容区之间会显示分割线。
 *
 * > **说明：**
 * >
 * > 为了简化表示，可以将`组件宽度 - minContentWidth - 分割线宽度 (1px)`称为calcNavBarWidth。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavigationMode {

  /**
     * The navigation bar and the content area are displayed in stack.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Stack = 0,

  /**
     * The navigation bar and the content area are displayed side by side.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Split = 1,

  /**
   * If the window width is greater than the sum of minNavBarWidth and minContentWidth, the navigation component is displayed in split mode.
   * Otherwise it's displayed in stack mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Auto = 2,

  /**
   * 如果导航宽度大于minNavBarWidth和minContentWidth之和。
   * 导航组件的长宽比（高宽比）小于等于1.2，
   * 则导航组件以分割方式显示。否则它将以堆栈模式显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  AUTO_WITH_ASPECT_RATIO = 3
}

/**
 * 导航页位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavBarPosition {

  /**
     * The navigation bar is on the Start of the container
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 0,

  /**
     * The navigation bar is on the End of the container
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 1
}

/**
 * 标题栏显示模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavigationTitleMode {

  /**
   * 当内容为满一屏的可滚动组件时，标题随着内容向上滚动而缩小（子标题的大小不变、淡出）。向下滚动内容到顶时则恢复原样。
   *
   * **说明：**
   *
   * 标题随着内容滚动大小联动的动效在title设置为ResourceStr和NavigationCommonTitle时生效，设置成其余自定义节点类型时字体样式无法变化，下拉时只影响标题栏偏移。
   *
   * 可滚动组件不满一屏时，如果想使用联动效果，就要使用滚动组件提供的
   * [edgeEffect](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#edgeeffect)接口将options参数设置为true。未滚动状态，标题
   * 栏高度与Full模式一致；滚动时，标题栏的最小高度与Mini模式一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Free = 0,

  /**
     * The title is full mode.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Full = 1,

  /**
     * The title is mini mode.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Mini = 2
}

/**
 * 导航菜单项，包括菜单图标和菜单信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationMenuItem {

  /**
   * API version 9：显示菜单栏单个选项的文本。
   *
   * 从API version 10开始，不显示菜单栏单个选项的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  value: string | Resource;

  /**
   * API version 9：显示菜单栏单个选项的文本。
   *
   * 从API version 10开始，不显示菜单栏单个选项的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: string | Resource;

  /**
   * 菜单栏单个选项的symbol资源（优先级高于icon）。
   * **说明：**
   * 不支持通过[SymbolGlyphModifier]{@link ./../SymbolGlyphModifier:SymbolGlyphModifier}对象的
   * [fontSize](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#fontsize)属性修改图标大小、
   * [effectStrategy](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#effectstrategy)属性修改动效
   * 、[symbolEffect](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#symboleffect12)属性修改动效类
   * 型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * 使能状态，默认使能（false未使能，true使能）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isEnabled?: boolean;

  /**
   * 当前选项被选中的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: () => void;
}

/**
 * 下一个页面返回的回调信息载体。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PopInfo {

  /**
   * 页面触发返回时的当前页面信息，系统自动获取填入，无需开发者传入。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  info: NavPathInfo;

  /**
   * 页面触发返回时的结果，开发者自定义对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  result: Object;
}

/**
 * 路由页面信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class NavPathInfo {

  /**
   * 创建NavPathInfo对象。
   *
   * @param { string } name - NavDestination页面名称。该名称匹配开发者设置的路由表中的name，包括以下两种：<br/>1. 自定义路由表，开发者通过
   *     [navDestination]{@link NavigationAttribute.navDestination}方法传递。<br/>2. 系统路由表，通过routerMap中的name设置，可参考
   *     [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation copy.md#示例2使用导航控制器方法)。
   * @param { Object | null | undefined } param - 开发者设置的NavDestination页面详细参数，unknown可以是用户自定义的类型。<br/>取值为undefined时，页面信
   *     息无效。
   * @param { Callback<PopInfo> } [onPop] - NavDestination页面触发
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   *     [popToIndex]{@link NavPathStack#popToIndex(index: int, result: Object, animated?: boolean)}时返回的回调。仅
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   *     [popToIndex]{@link NavPathStack#popToIndex(index: int, result: Object, animated?: boolean)}中设置result参数后触发。
   * @param { boolean } [isEntry] - 标记NavDestination是否为入口页面。<br/>true：NavDestination是入口页面；false：NavDestination不是入口页面。<
   *     br/>默认值：false <br/>标记清理时机：1. 在当前navDestination页面触发一次全局返回事件。2. 应用退至后台。<br/>**说明：**<br/>入口NavDestination不响应应用内的
   *     全局back事件，直接触发应用间的全局back事件
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(name: string, param: Object | null | undefined, onPop?: Callback<PopInfo>, isEntry?: boolean);

  /**
     * The name of NavDestination.
     *
   * @returns { string }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get name(): string;

  /**
     * Set the name of NavDestination.
     *
   * @param { string } name
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set name(name: string);

  /**
     * The detailed parameter of the NavDestination.
     *
   * @returns { Object | null | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get param(): Object | null | undefined;

  /**
   * Set the detailed parameter of the NavDestination, default value is undefined,
   *     null is also a meaningful input parameter.
   *
   * @param { Object | null | undefined } param
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set param(param: Object | null | undefined);

  /**
     * The callback when next page returns.
     *
   * @returns { Callback<PopInfo> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get onPop(): Callback<PopInfo> | undefined;

  /**
     * Set the callback when next page returns, the default value is nullptr, undefined means set to default value.
     *
   * @param { Callback<PopInfo> | undefined } onPop
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set onPop(onPop: Callback<PopInfo> | undefined);

  /**
     * Indicates whether it is an entry destination.
     *
   * @returns { boolean | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get isEntry(): boolean | undefined;

  /**
     * Set whether it is an entry destination, the default value is false, undefined means set to default value.
     *
   * @param { boolean | undefined } isEntry
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set isEntry(isEntry: boolean | undefined);

  /**
   * 获取NavDestination页面唯一标识符。
   *
   * @returns { string | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get navDestinationId(): string | undefined;
}

/**
 * 路由栈操作模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LaunchMode {

  /**
   * 系统默认的栈操作模式。
   *
   * push操作会将指定的NavDestination入栈；replace操作会将当前栈顶NavDestination替换。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  STANDARD = 0,

  /**
   * 从栈底向栈顶查找，如果指定的名称已经存在，则将对应的NavDestination页面移到栈顶（replace操作会将最后的栈顶替换成指定的NavDestination），否则行为和STANDARD一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MOVE_TO_TOP_SINGLETON = 1,

  /**
   * 从栈底向栈顶查找，如果指定的名称已经存在，则将其上方的NavDestination页面全部移除（replace操作会将最后的栈顶替换成指定的NavDestination），否则行为和STANDARD一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  POP_TO_SINGLETON = 2,

  /**
   * 创建新的NavDestination实例。与STANDARD模式相比，该方法不会复用栈中同名实例。并且指定该模式时，新创建的页面默认会执行push动效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NEW_INSTANCE = 3
}

/**
 * Navigation的模块信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare interface NavigationModuleInfo {

  /**
   * Navigation的模块名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  moduleName: string;

  /**
   * Navigation的页面信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  pagePath: string;

  /**
   * 导航的堆栈是否由用户创建
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  isUserCreateStack?: boolean;
}

/**
 * 路由栈操作选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationOptions {

  /**
     * 路由栈的操作模式。
     * 默认值： LaunchMode.STANDARD。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  launchMode?: LaunchMode;

  /**
   * 是否支持转场动画。
   *
   * true：支持转场动画；false：不支持转场动画。
   *
   * 默认值：true
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  animated?: boolean;
}

/**
 * Navigation导航控制器，以栈的数据结构管理Navigation中所有的子页面，并提供栈操作的方法用于控制Navigation中子页面的切换。
 *
 * 从API version 12开始，NavPathStack允许被继承，派生类对象可以替代基类NavPathStack对象使用。使用示例参见
 * [示例10](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation copy.md#示例10定义导航控制器派生类)。
 *
 * > **说明：**
 * >
 * > 1.连续调用多个导航控制器操作方法时，中间过程会被忽略，显示最终的栈操作结果。
 *
 * > 例如：在Page1页面先pop再push一个Page1，系统会认为操作前和操作后的结果一致而不进行任何操作，如果需要强行push一个Page1实例，可以设置
 * > [NavigationOption]{@link NavigationOptions}中的launchMode属性值为LaunchMode.NEW_INSTANCE模式。
 * >
 * > 2.不建议开发者通过监听页面生命周期的方式管理自己的导航控制器。
 * >
 * > 3.在应用处于后台状态下，调用NavPathStack的栈操作方法，会在应用再次回到前台状态时触发刷新。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class NavPathStack {

  /**
   * 创建NavPathStack对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 将info指定的NavDestination页面信息入栈。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>传入参数非法时，按true处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushPath(info: NavPathInfo, animated?: boolean): void;

  /**
   * 将info指定的NavDestination页面信息入栈，具体根据options中指定不同的[LaunchMode]{@link LaunchMode}，来实现不同的行为。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { NavigationOptions } [options] - 路由栈操作选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushPath(info: NavPathInfo, options?: NavigationOptions): void;

  /**
   * 将info指定的NavDestination页面信息入栈，使用Promise异步回调返回接口调用结果。
   *
   * > **说明：**
   * >
   * > 不建议在[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)中使用栈
   * > 操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @returns { Promise<void> } 异步返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushDestination(info: NavPathInfo, animated?: boolean): Promise<void>;

  /**
   * 将info指定的NavDestination页面信息入栈，使用Promise异步回调返回接口调用结果，具体根据options中指定不同的[LaunchMode]{@link LaunchMode}，来实现不同的行为。
   *
   * > **说明：**
   * >
   * > 不建议在[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)中使用栈
   * > 操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { NavigationOptions } [options] - 路由栈操作选项。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushDestination(info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object | null | undefined } param - 开发者设置的NavDestination页面详细参数，unknown可以是用户自定义的类型。<br/>取值为undefined时，页面信
   *     息无效。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushPathByName(name: string, param: Object | null | undefined, animated?: boolean): void;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param，添加onPop回调接收入栈页面出栈时的返回结果，并进行处理。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - 开发者设置的NavDestination页面详细参数。
   * @param { Callback<PopInfo> } onPop - Callback回调，用于页面出栈时触发该回调处理返回结果。仅
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   *     [popToIndex]{@link NavPathStack#popToIndex(index: int, result: Object, animated?: boolean)}中设置result参数后触发。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushPathByName(name: string, param: Object, onPop: Callback<PopInfo>, animated?: boolean): void;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param，使用Promise异步回调返回接口调用结果。
   *
   * > **说明：**
   * >
   * > 不建议在[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)中使用栈
   * > 操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - 开发者设置的NavDestination页面详细参数。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushDestinationByName(name: string, param: Object, animated?: boolean): Promise<void>;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param，并且添加用于页面出栈时处理返回结果的onPop回调，使用Promise异步回调返回接口调用结果。
   *
   * > **说明：**
   * >
   * > 不建议在[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)中使用栈
   * > 操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - 开发者设置的NavDestination页面详细参数。
   * @param { Callback<PopInfo> } onPop - Callback回调，用于页面出栈时处理返回结果。仅
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   *     [popToIndex]{@link NavPathStack#popToIndex(index: int, result: Object, animated?: boolean)}中设置result参数后触发。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushDestinationByName(name: string, param: Object, onPop: Callback<PopInfo>, animated?: boolean): Promise<void>;

  /**
   * 将当前路由栈栈顶退出，将info指定的NavDestination页面信息入栈。
   *
   * @param { NavPathInfo } info - 新栈顶页面参数信息。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replacePath(info: NavPathInfo, animated?: boolean): void;

  /**
   * 替换路由栈操作，具体根据options中指定不同的[LaunchMode]{@link LaunchMode}，来实现不同的行为。
   *
   * @param { NavPathInfo } info - 新栈顶页面参数信息。
   * @param { NavigationOptions } [options] - 路由栈操作选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replacePath(info: NavPathInfo, options?: NavigationOptions): void;

  /**
   * 替换路由栈操作。使用Promise异步回调返回接口调用结果，具体根据options中指定不同的[LaunchMode]{@link LaunchMode}，来实现不同的行为。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { NavigationOptions } [options] - 路由栈操作选项。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceDestination(info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * 将当前路由栈栈顶退出，将name指定的页面入栈。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - 开发者设置的NavDestination页面详细参数。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replacePathByName(name: string, param: Object, animated?: boolean): void;

  /**
   * 将路由栈内索引值在indexes中的NavDestination页面删除。
   *
   * @param { Array<int> } indexes - 待删除NavDestination页面的索引值数组。索引值从0开始。
   * @returns { int } 返回删除的NavDestination页面数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeByIndexes(indexes: Array<int>): int;

  /**
   * 将路由栈内指定name的NavDestination页面删除。
   *
   * @param { string } name - 删除的NavDestination页面的名字。
   * @returns { int } 返回删除的NavDestination页面数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeByName(name: string): int;

  /**
   * 将路由栈内指定navDestinationId的NavDestination页面删除。navDestinationId可以在NavDestination的
   * [onReady](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#onready11)回调中获取，也可以在
   * [NavDestinationInfo]{@link ./../../@ohos.arkui.observer:uiObserver.NavDestinationInfo}中获取。
   *
   * @param { string } navDestinationId - 删除的NavDestination页面的唯一标识符navDestinationId。
   * @returns { boolean } 返回是否成功删除该页面，<br/>true：删除成功。<br/>false：删除失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeByNavDestinationId(navDestinationId: string): boolean;

  /**
   * 弹出路由栈栈顶元素。
   *
   * > **说明：**
   * >
   * > 连续调用多个导航控制器方法时，中间被pop的页面会被缓存，后续push同名页面时会优先复用该页面，不会走新的页面创建流程。
   *
   * > 例如：
   *
   * > pathStack: NavPathStack = new NavPathStack()
   *
   * > // 初始页面栈为：[A]
   *
   * > pathStack.pop()
   *
   * > pathStack.pushPath(A)
   *
   * > pathStack.pushPath(B)
   *
   * > // 操作后页面栈为：[A B]
   *
   * > 此时A页面会被复用，不会走新的创建流程。
   *
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>
   *     <br>默认值： true。
   * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns
   *     undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pop(animated?: boolean): NavPathInfo | undefined;

  /**
   * 弹出路由栈栈顶元素，并触发onPop回调传入页面处理结果。
   *
   * > **说明：**
   * >
   * > 连续调用多个导航控制器方法时，中间被pop的页面会被缓存，后续push同名页面时会优先复用该页面，不会走新的页面创建流程。
   *
   * > 例如：
   *
   * > pathStack: NavPathStack = new NavPathStack()
   *
   * > // 初始页面栈为：[A]
   *
   * > pathStack.pop()
   *
   * > pathStack.pushPath(A)
   *
   * > pathStack.pushPath(B)
   *
   * > // 操作后页面栈为：[A B]
   *
   * > 此时A页面会被复用，不会走新的创建流程。
   *
   * @param { Object } result - 页面自定义处理结果。不支持boolean类型。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>
   *     <br>默认值： true。
   * @returns { NavPathInfo | undefined } Returns the top NavPathInfo if the stack is not empty, otherwise returns
   *     undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pop(result: Object, animated?: boolean): NavPathInfo | undefined;

  /**
   * 回退路由栈到由栈底开始第一个名为name的NavDestination页面。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @returns { int } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  popToName(name: string, animated?: boolean): int;

  /**
   * 回退路由栈到由栈底开始第一个名为name的NavDestination页面，并触发onPop回调传入页面处理结果。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } result - 页面自定义处理结果。不支持boolean类型。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @returns { int } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  popToName(name: string, result: Object, animated?: boolean): int;

  /**
   * 回退路由栈到index指定的NavDestination页面。
   *
   * @param { int } index - NavDestination页面的位置索引。索引值从0开始。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  popToIndex(index: int, animated?: boolean): void;

  /**
   * 回退路由栈到index指定的NavDestination页面，并触发onPop回调传入页面处理结果。
   *
   * @param { int } index - NavDestination页面的位置索引。索引值从0开始。
   * @param { Object } result - 页面自定义处理结果。不支持boolean类型。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  popToIndex(index: int, result: Object, animated?: boolean): void;

  /**
   * 将由栈底开始第一个名为name的NavDestination页面移到栈顶。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @returns { int } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的当前索引，否则返回-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  moveToTop(name: string, animated?: boolean): int;

  /**
   * 将index指定的NavDestination页面移到栈顶。
   *
   * @param { int } index - NavDestination页面的位置索引。索引值从0开始。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  moveIndexToTop(index: int, animated?: boolean): void;

  /**
   * 清除栈中所有页面。
   *
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
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
   * @param { int } index - NavDestination页面的位置索引。 索引值从0开始。
   * @returns { Object | null | undefined } Returns the detailed parameter of the NavDestination if it exists
   *     in the stack, otherwise returns undefined;
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getParamByIndex(index: int): Object | null | undefined;

  /**
   * 获取所有名为name的NavDestination页面的参数信息，按页面索引从小到大排序。
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
   * @returns { Array<int> } 返回全部名为name的NavDestination页面的位置索引。 当路由栈中不存在此name，返回空数组。索引取值范围为[0, 路由栈大小-1]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getIndexByName(name: string): Array<int>;

  /**
   * 获取父NavPathStack。
   *
   * 当出现Navigation嵌套Navigation的情况时（可以是直接嵌套，也可以是间接嵌套），内部Navigation的NavPathStack能够获取到外层Navigation的NavPathStack。
   *
   * @returns { NavPathStack | null } Returns the parent of the current stack. If no parent, it returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getParent(): NavPathStack | null;

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
   * 关闭（true）或打开（false）当前Navigation中所有转场动画。
   *
   * @param { boolean } value - 是否关闭转场动画，<br/>默认值：false<br/>true：关闭转场动画。<br/>false：不关闭转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disableAnimation(value: boolean): void;

  /**
   * 设置Navigation页面跳转拦截回调。
   *
   * @param { NavigationInterception } interception - 设置Navigation跳转拦截对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setInterception(interception: NavigationInterception): void;

  /**
   * 获取当前路由栈中的路由页面信息数组。
   *
   * @returns { Array<NavPathInfo> } 当前路由栈中的路由页面信息数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPathStack(): Array<NavPathInfo>;

  /**
   * 将当前路由栈中的路由页面信息数组更新为指定内容，并实现路由转场。
   *
   *
   * @param { Array<NavPathInfo> } pathStack - 设置当前路由栈中的路由页面信息数组。<br/>**说明：**<br/>数组长度无限制。
   * @param { boolean } [animated] - 是否开启转场动画。<br/>true：开启转场动画；false：不开启转场动画。<br /> 默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setPathStack(pathStack: Array<NavPathInfo>, animated?: boolean): void;
}

/**
 * Navigation首页名字。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NavBar = 'navBar';

/**
 * Navigation页面跳转前和页面跳转后的拦截回调。
 *
 * @param { NavDestinationContext | NavBar } from - 页面跳转之前的栈顶页面信息。
 *     <br>取值约束:参数值为navBar，则表示跳转前的页面为Navigation首页。
 * @param { NavDestinationContext | NavBar } to - 页面跳转之后的栈顶页面信息。
 *     <br>取值约束:参数值为navBar，则表示跳转的目标页面为Navigation首页。
 * @param { NavigationOperation } operation - 当前页面跳转类型。
 * @param { boolean } isAnimated - 页面跳转是否有动画。
 *     <br>true：页面跳转有动画。
 *     false：页面跳转没有动画。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type InterceptionShowCallback = (from: NavDestinationContext | NavBar, to: NavDestinationContext | NavBar, operation: NavigationOperation, isAnimated: boolean) => void;

/**
 * Navigation页面跳转前的拦截回调。
 *
 * @param { NavPathInfo | NavBar } from - Navigation页面跳转前的拦截回调。
 *     <br>取值约束:参数值为navBar，则表示跳转前的页面为Navigation首页。
 * @param { NavPathInfo | NavBar } to - Navigation页面跳转前的拦截回调。
 *     <br>取值约束:参数值为navBar，则表示跳转前的页面为Navigation首页。
 * @param { NavPathStack } pathStack - 页面栈。
 * @param { NavigationOperation } operation - 当前页面跳转类型。
 * @param { boolean } isAnimated - 页面跳转是否有动画。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type InterceptionCallback = (from: NavPathInfo | NavBar, to: NavPathInfo | NavBar, pathStack: NavPathStack, operation: NavigationOperation, isAnimated: boolean) => void;

/**
 * Navigation单双栏显示状态发生变更时的拦截回调。
 *
 * @param { NavigationMode } mode - 导航页的显示模式。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type InterceptionModeCallback = (mode: NavigationMode) => void;

/**
 * Navigation跳转拦截对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationInterception {

  /**
   * 页面跳转前的回调，允许操作栈，在当前跳转中生效。拦截的页面会被创建。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  willShow?: InterceptionShowCallback;

  /**
   * 页面跳转后回调。在该回调中操作栈在下一次跳转中刷新。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  didShow?: InterceptionShowCallback;

  /**
   * Navigation单双栏显示状态发生变更时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  modeChange?: InterceptionModeCallback;

  /**
   * 页面跳转前的回调，允许操作栈，在当前跳转中生效。拦截的页面不会被创建。
   *
   * **模型约束：** 此接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  interception?: InterceptionCallback;
}

/**
 * 主页NavDestination的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface HomePathInfo {

  /**
   * 主页NavDestination的页面名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  name: string;

  /**
   * 主页NavDestination的页面详细参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  param?: Object;
}

/**
 * 工具栏单个选项的状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ToolbarItemStatus {

  /**
   * 设置工具栏单个选项为NORMAL态，该选项显示默认样式，可以触发Hover，Press，Focus事件并显示对应的多态样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NORMAL = 0,

  /**
   * 设置工具栏单个选项为DISABLED态， 该选项显示DISABLED态样式，并且不可交互。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DISABLED = 1,

  /**
   * 设置工具栏单个选项为ACTIVE态， 该选项通过点击事件可以将icon图标更新为activeIcon对应的图片资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTIVE = 2
}

/**
 * 页面跳转类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavigationOperation {

  /**
   * 本次转场为页面进场。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PUSH = 1,

  /**
   * 本次转场为页面退场。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  POP = 2,

  /**
   * 本次转场为页面替换。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  REPLACE = 3
}

/**
 * 工具栏可配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ToolbarItem {

  /**
   * 工具栏单个选项的显示文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  value: ResourceStr | undefined;

  /**
   * 工具栏单个选项的图标资源路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: ResourceStr;

  /**
   * 工具栏单个选项的symbol资源（优先级高于icon）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * 当前选项被选中的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  action?: () => void;

  /**
   * 工具栏单个选项的状态。
   * 默认值： ToolbarItemStatus.NORMAL。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  status?: ToolbarItemStatus;

  /**
   * 工具栏单个选项处于ACTIVE态时的图标资源路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  activeIcon?: ResourceStr;

  /**
   * 工具栏单个选项处于ACTIVE态时的symbol资源（优先级高于activeIcon）。
   * **说明：**
   * 不支持通过[SymbolGlyphModifier]{@link ./../SymbolGlyphModifier:SymbolGlyphModifier}对象的
   * [fontSize](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#fontsize)属性修改图标大小、
   * [effectStrategy](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#effectstrategy)属性修改动效
   * 、[symbolEffect](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#symboleffect12)属性修改动效类
   * 型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  activeSymbolIcon?: SymbolGlyphModifier;
}

/**
 * 标题栏滑动模糊效果类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ScrollEffectType {

  /**
   * 普通模糊样式，对标题栏背景应用统一模糊效果，模糊背伴随透明渐变出现或消失。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  COMMON_BLUR = 0,

  /**
   * 渐变模糊样式，对标题栏背景应用统一模糊效果，具有清晰边界。标题栏内容在滑动前后改变颜色或状态，滑动过程中跟随手势线性变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  GRADUAL_BLUR = 1
}

/**
 * 标题栏滑动效果类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ScrollEffectOptions {

  /**
   * 标题栏滑动模糊样式。
   * 默认值： ScrollEffectType.COMMON_BLUR。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  scrollEffectType?: ScrollEffectType;

  /**
   * 开启标题栏滑动模糊效果的内容区最小滑动距离。
   * 默认值： 0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  blurEffectiveStartOffset?: LengthMetrics;

  /**
   * 标题栏达到最终模糊样式的内容区最大滑动距离。
   * 默认值： 8vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  blurEffectiveEndOffset?: LengthMetrics;
}

/**
 * 标题栏选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationTitleOptions {

  /**
   * 标题栏背景颜色，不设置时为系统默认颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ResourceColor;

  /**
   * 标题栏背景模糊样式，不设置时关闭背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 标题栏背景模糊选项。
   * **说明：**
   * 只在设置了backgroundBlurStyle时生效。
   * 不建议与backgroundEffect同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 设置标题栏背景属性包括：模糊半径，亮度，饱和度，颜色等。
   * **说明：**
   * 不建议与backgroundBlurStyleOptions同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * 设置标题栏布局方式。
   * 默认值： BarStyle.STANDARD。
   *
   * @default BarStyle.STANDARD
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  barStyle?: BarStyle;

  /**
   * 标题栏起始端内间距。
   * 仅支持以下任一场景：
   * 1. 显示返回图标，即[hideBackButton]{@link NavigationAttribute.hideBackButton}为false；
   * 2. 使用非自定义标题，即[标题value]{@link NavigationAttribute.title}类型为ResourceStr或NavigationCommonTitle。
   * 默认值： LengthMetrics.resource($r('sys.float.margin_left'))。
   *
   * @default LengthMetrics.resource($r('sys.float.margin_left'))
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  paddingStart?: LengthMetrics;

  /**
   * 标题栏结束端内间距。
   * 仅支持以下任一场景：
   * 1. 使用非自定义菜单，即[菜单value]{@link NavigationAttribute.menus}为Array<NavigationMenuItem>；
   * 2. 没有右上角菜单，且使用非自定义标题，即[标题value]{@link NavigationAttribute.title}类型为ResourceStr或NavigationCommonTitle。
   * 默认值： LengthMetrics.resource(`$r('sys.float.margin_right')`)。
   *
   * @default LengthMetrics.resource($r('sys.float.margin_right'))
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  paddingEnd?: LengthMetrics;

  /**
   * 主标题属性修改器。
   * 1. 通过Modifier设置的属性会覆盖系统默认的属性（如果Modifier设置了fontSize，maxFontSize，minFontSize任一属性，则系统设置的大小相关属性不生效，以开发者的设置为准）；
   * 2. 不设该属性或者设置了异常值，则恢复系统默认设置；
   * 3. [Free]{@link NavigationTitleMode}模式下设置字体大小时，原有滑动改变标题大小的效果失效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  mainTitleModifier?: TextModifier;

  /**
   * 子标题属性修改器。
   * 1. 通过Modifier设置的属性会覆盖系统默认的属性（如果Modifier设置了fontSize，maxFontSize，minFontSize任一属性，则系统设置的大小相关属性不生效，以开发者的设置为准）；
   * 2. 不设该属性或者设置了异常值，则恢复系统默认设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  subTitleModifier?: TextModifier;

  /**
   * 是否响应悬停态。
   * 使用规则：
   * 1. 需满足Navigation为全屏大小；
   * 2. 标题栏显示模式为[Free]{@link NavigationTitleMode}时或者标题栏布局方式为[STANDARD]{@link BarStyle}时，此接口设置无效。
   * true：响应悬停态；false：不响应悬停态。
   * 默认值： false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableHoverMode?: boolean;

  /**
   * 标题栏滑动模糊效果选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  scrollEffectOptions?: ScrollEffectOptions;
}

/**
 * 标题栏或工具栏的布局样式。NavDestination的工具栏不支持设置该属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BarStyle {

  /**
   * 指定该模式的标题栏或工具栏与内容区采用上下布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  STANDARD = 0,

  /**
   * 指定该模式的标题栏或工具栏与内容区采用层叠布局，标题栏或工具栏布局在内容区上层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  STACK = 1,

  /**
   * 将指定该模式的标题栏或工具栏设置为
   * [组件级安全区](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#safeareapadding14)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SAFE_AREA_PADDING = 2
}

/**
 * 工具栏选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationToolbarOptions {

  /**
   * 标题栏背景颜色，不设置时为系统默认颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ResourceColor;

  /**
   * 标题栏背景模糊样式，不设置时关闭背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 标题栏背景模糊选项。
   * **说明：**
   * 只在设置了backgroundBlurStyle时生效。
   * 不建议与backgroundEffect同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 设置标题栏背景属性包括：模糊半径，亮度，饱和度，颜色等。
   * **说明：**
   * 不建议与backgroundBlurStyleOptions同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * 工具栏更多图标的菜单选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  moreButtonOptions?: MoreButtonOptions;

  /**
   * 设置工具栏布局方式。
   * 默认值： BarStyle.STANDARD。
   *
   * @default BarStyle.STANDARD
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  barStyle?: BarStyle;

  /**
   * 设置是否隐藏工具栏的文本，默认显示文本。
   * true：隐藏工具栏的文本；false：不隐藏工具栏的文本。
   * 默认值： false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hideItemValue?: boolean;
}

/**
 * 页面右上角菜单选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationMenuOptions {

  /**
   * 工具栏更多图标的菜单选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  moreButtonOptions?: MoreButtonOptions;
}

/**
 * 更多图标的菜单选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MoreButtonOptions {

  /**
   * 标题栏背景模糊样式，不设置时关闭背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 标题栏背景模糊选项。
   * **说明：**
   * 只在设置了backgroundBlurStyle时生效。
   * 不建议与backgroundEffect同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 设置标题栏背景属性包括：模糊半径，亮度，饱和度，颜色等。
   * **说明：**
   * 不建议与backgroundBlurStyleOptions同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundEffect?: BackgroundEffectOptions;
}

/**
 * 除支持[通用属性]{@link ./../../@internal/component/ets/common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationAttribute extends CommonMethod {

  /**
   * 设置导航页宽度。仅在[mode]{@link NavigationAttribute.mode}设置为NavigationMode.Auto或NavigationMode.Split时生效。
   *
   * 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。
   *
   * @param { Length | Bindable<Length> | undefined } value
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default navBarWidth(value: Length | Bindable<Length> | undefined): this;

  /**
   * 设置导航页位置。仅在[mode]{@link NavigationAttribute.mode}设置为NavigationMode.Auto或NavigationMode.Split时生效。
   *
   * @param { NavBarPosition | undefined } value
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default navBarPosition(value: NavBarPosition | undefined): this;

  /**
   * 设置导航页最小和最大宽度（双栏模式下生效）。未设置该接口时，最小宽度默认为240vp，最大宽度默认为组件宽度的40%，且不大于432vp，即导航页和内容区之间的分割线可以在此范围内进行拖拽。拖拽分割线使导航页宽度变化时，内容区
   * 的内容会被压缩。
   *
   * 分割线的拖拽范围：
   *
   * | 条件| 拖拽范围  |
   * | ----| ----------- |
   * |navBarWidthRange和minContentWidth同时设置 | 满足minContentWidth所设置的值后，在navBarWidthRange所设置的范围内进行拖拽 |
   * |navBarWidthRange和minContentWidth均不设置 | 在navBarWidthRange默认的最小和最大范围内进行拖拽 |
   * |仅设置navBarWidthRange属性 | 在navBarWidthRange所设置的范围内进行拖拽，最大拖拽范围不能超过minContentWidth的默认值 |
   * |仅设置minContentWidth属性 | 在navBarWidthRange默认的最小和最大范围内进行拖拽 |
   * |仅设置navBarWidth属性 | 不支持拖拽 |
   *
   * @param { [Dimension, Dimension] | undefined } value - 导航页最小和最大宽度。<br/>参数非法或为undefined时，按默认值处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default navBarWidthRange(value: [
        Dimension,
        Dimension
    ] | undefined): this;

  /**
   * 设置导航页内容区最小宽度（双栏模式下生效）。
   *
   * @param { Dimension | undefined } value - 导航页内容区最小宽度。<br/>默认值：360<br/>单位：vp<br/>取值为undefined时，按默认值处理。<br/>Auto模式断点
   *     计算：默认600vp，minNavBarWidth(240vp) + minContentWidth (360vp)
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minContentWidth(value: Dimension | undefined): this;

  /**
   * 设置导航页的显示模式，支持单栏（Stack）、分栏（Split）和自适应（Auto）。
   *
   * @param { NavigationMode | undefined } value
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default mode(value: NavigationMode | undefined): this;

  /**
   * 设置标题栏中返回键图标和无障碍播报内容。
   *
   * > **说明：**
   * >
   * > 不支持通过[SymbolGlyphModifier]{@link ./../SymbolGlyphModifier:SymbolGlyphModifier}对象的
   * > [fontSize](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#fontsize)属性修改图标大小、
   * > [effectStrategy](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#effectstrategy)属性修改
   * > 动效、[symbolEffect](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#symboleffect12)属性修
   * > 改动效类型。
   *
   * @param { string | PixelMap | Resource | SymbolGlyphModifier } icon - 标题栏中返回键图标。<br/>取值为undefined时，显示返回键图标。
   * @param { ResourceStr | undefined } accessibilityText - 需要播报的内容。<br/>取值为undefined时，无播报内容。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default backButtonIcon(icon: string | PixelMap | Resource | SymbolGlyphModifier | undefined, accessibilityText?: ResourceStr | undefined): this;

  /**
   * 设置是否隐藏导航页。设置为true时，隐藏Navigation的导航页，包括标题栏、内容区和工具栏。如果此时路由栈中存在NavDestination页面，则直接显示栈顶NavDestination页面，反之显示空白。
   *
   * 从API version 9开始到API version 10仅在双栏模式下生效。从API version 11开始在单栏、双栏与自适应模式均生效。
   *
   * @param { boolean | undefined } value
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideNavBar(value: boolean | undefined): this;

  /**
   * 设置页面标题。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle | undefined } value
   * @param { NavigationTitleOptions | undefined } [options] - 标题栏选项。 包含标题栏背景颜色、标题栏背景模糊样式及模糊选项、标题栏背景属性、标题栏布局方式、标题栏起始端内
   *     间距、标题栏结束端内间距、主标题属性修改器、子标题属性修改器、是否响应悬停态。<br/>取值为undefined时，按NavigationTitleOptions中的默认值处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default title(value: ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle | undefined, options?: NavigationTitleOptions | undefined): this;

  /**
     * Hide navigation title bar
     *
   * @param { boolean | undefined } value
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideTitleBar(value: boolean | undefined): this;

  /**
   * 设置是否隐藏标题栏。与
   * [hideTitleBar]{@link NavigationAttribute.default hideTitleBar(hide: boolean | undefined, animated: boolean | undefined)}
   * 相比，新增标题栏显隐时是否使用动画。
   *
   * @param { boolean | undefined } hide
   * @param { boolean | undefined } animated
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideTitleBar(hide: boolean | undefined, animated: boolean | undefined): this;

  /**
   * 设置是否隐藏标题栏中的返回键。返回键仅在[titleMode]{@link NavigationAttribute.titleMode}设置为NavigationTitleMode.Mini时才生效。
   *
   * @param { boolean | undefined } value
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideBackButton(value: boolean | undefined): this;

  /**
   * 设置页面标题栏显示模式。
   *
   * @param { NavigationTitleMode | undefined } value
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default titleMode(value: NavigationTitleMode | undefined): this;

  /**
   * 设置页面右上角菜单。不设置时不显示菜单项。使用Array<[NavigationMenuItem]{@link NavigationMenuItem}&gt; 写法时，竖屏最多支持显示3个图标，横屏最多支持显示5个图标，多余的
   * 图标会被放入自动生成的更多图标。
   *
   * > **说明：**
   * >
   * > 不支持通过[SymbolGlyphModifier]{@link ./../SymbolGlyphModifier:SymbolGlyphModifier}对象的
   * > [fontSize](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#fontsize)属性修改图标大小、
   * > [effectStrategy](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#effectstrategy)属性修改
   * > 动效、[symbolEffect](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolGlyph.md#symboleffect12)属性修
   * > 改动效类型。
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder | undefined } items
   * @param { NavigationMenuOptions | undefined } [options] - 菜单选项。<br/>取值为undefined时，按NavigationMenuOptions中的默认值处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default menus(items: Array<NavigationMenuItem> | CustomBuilder | undefined, options?: NavigationMenuOptions | undefined): this;

  /**
   * 设置工具栏内容。不设置时不显示工具栏。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Array<ToolbarItem> | CustomBuilder | undefined } value - 工具栏内容，使用Array<[ToolbarItem]{@link ToolbarItem}>
   *     设置的工具栏有如下特性：<br/>工具栏所有选项均分底部工具栏，在每个均分内容区布局文本和图标。<br/>竖屏模式最多支持显示5个图标，多余的图标会被放入自动生成的更多图标。横屏模式时，如果为
   *     [Split]{@link NavigationMode}模式，仍按照竖屏模式显示，如果为[Stack]{@link NavigationMode}模式需配合menus属性的Array<
   *     [NavigationMenuItem]{@link NavigationMenuItem}>使用，底部工具栏会自动隐藏，同时底部工具栏所有选项移动至页面右上角菜单。<br/>使用
   *     [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)写法为用户自定义工具栏选项，不具备以上功能。<br/
   *     >取值为undefined时，无工具栏。
   * @param { NavigationToolbarOptions | undefined } [options] - 工具栏选项。 包含工具栏背景颜色、工具栏背景模糊样式及模糊选项、工具栏背景属性、工具栏布局方式、是否隐藏工
   *     具栏的文本、工具栏更多图标的菜单选项。<br/>取值为undefined时，按NavigationToolbarOptions中的默认值处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default toolbarConfiguration(value: Array<ToolbarItem> | CustomBuilder | undefined, options?: NavigationToolbarOptions | undefined): this;

  /**
     * Hide tool bar
     *
   * @param { boolean | undefined } value
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideToolBar(value: boolean | undefined): this;

  /**
   * 设置是否隐藏工具栏。与
   * [hideToolBar]{@link NavigationAttribute.default hideToolBar(hide: boolean | undefined, animated: boolean | undefined)}
   * 相比，新增工具栏显隐时是否使用动画。
   *
   * @param { boolean | undefined } hide
   * @param { boolean | undefined } animated
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideToolBar(hide: boolean | undefined, animated: boolean | undefined): this;

  /**
   * 设置是否启用Navigation和NavDestination的工具栏[toolbarConfiguration]{@link NavigationAttribute.toolbarConfiguration}自适应能力。关闭
   * 此能力后，底部工具栏[toolbarConfiguration]{@link NavigationAttribute.toolbarConfiguration}将不会再移动至页面右上角的菜单中。该接口不适配于自定义菜单，使用该
   * 接口需采用[NavigationMenuItem]{@link NavigationMenuItem}接口来定义[菜单]{@link NavigationAttribute.menus}。
   *
   * @param { boolean | undefined } enable - 是否启用Navigation和NavDestination的工具栏自适应能力。<br/>默认值：true<br/>true：启用
   *     Navigation和NavDestination的工具栏自适应能力。<br/>false：不启用Navigation和NavDestination的工具栏自适应能力。<br/>参数非法或为undefined时，按默认
   *     值处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableToolBarAdaptation(enable: boolean | undefined): this;

  /**
   * 当[titleMode]{@link NavigationAttribute.titleMode}为NavigationTitleMode.Free时，随着可滚动组件的滑动标题栏模式发生变化时触发此回调。
   *
   * @param { function | undefined } callback
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onTitleModeChange(callback: ((titleMode: NavigationTitleMode) => void) | undefined): this;

  /**
   * 导航页显示状态切换时触发该回调。
   *
   * @param { function | undefined } callback
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onNavBarStateChange(callback: ((isVisible: boolean) => void) | undefined): this;

  /**
   * 当Navigation首次显示或者单双栏状态发生变化时触发该回调。
   *
   * @param { function | undefined } callback
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onNavigationModeChange(callback: ((mode: NavigationMode) => void) | undefined): this;

  /**
   * 创建NavDestination组件。使用builder函数，基于name和param构造NavDestination组件。builder下只能有一个根节点。builder中允许在NavDestination组件外包含一层自定
   * 义组件， 但自定义组件不允许设置属性和事件，否则仅显示空白。
   *
   * @param { PageMapBuilder | undefined } builder - 创建NavDestination组件。name：NavDestination页面名称。param：开发者设置的
   *     NavDestination页面详细参数，unknown可以是用户自定义的类型。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default navDestination(builder: PageMapBuilder | undefined): this;

  /**
   * 自定义转场动画回调。取值为undefined时，不使用回调函数。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { function | undefined } delegate - 自定义转场动画的回调函数。<br/>from：退场Destination的页面信息。<br/>to：进场Destination的页面信息。<
   *     br/>operation：当前页面转场的类型。<br/>当回调函数返回[NavigationAnimatedTransition]{@link NavigationAnimatedTransition}时，表示自定义
   *     转场动画协议；返回undefined时表示未定义，执行默认转场动效。 <br/>取值为undefined时，不使用自定义转场动画回调函数，执行默认转场动效。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customNavContentTransition(delegate: ((from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation) => NavigationAnimatedTransition | undefined) | undefined): this;

  /**
   * 控制组件的布局，使其扩展到非安全区域。
   *
   * > **说明：**
   * >
   * > - 组件设置ignoreLayoutSafeArea之后生效的条件为：
   * > > 设置LayoutSafeAreaType.SYSTEM时，组件的边界与非安全区域重合时组件能够延伸到非安全区域下。
   * >
   * > - 若组件扩展到非安全区域内，此时在非安全区域里触发的事件（例如：点击事件）等可能会被系统拦截，优先响应状态栏等系统组件。
   * >
   * > - 组件想要扩展到非安全区域内，需隐藏或者设置标题栏和工具栏为[STACK]{@link ./../../@internal/component/ets/navigation:BarStyle}模式。
   *
   * @param { Array<LayoutSafeAreaType> | undefined } [types] - 配置扩展安全区域的类型。<br/>取值为undefined时，按默认值处理。<br />默认值：<br />
   *     [LayoutSafeAreaType.SYSTEM]
   * @param { Array<LayoutSafeAreaEdge> | undefined } [edges] - 配置扩展安全区域的方向。<br/>取值为undefined时，按默认值处理。<br /> 默认值：<br /
   *     >[LayoutSafeAreaEdge.TOP, LayoutSafeAreaEdge.BOTTOM]。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType> | undefined, edges?: Array<LayoutSafeAreaEdge> | undefined): this;

  /**
   * 当Navigation中显示Navigation首页时，设置对应系统状态栏的样式。
   *
   * > **说明：**
   * >
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { SystemBarStyle | undefined } style - 系统状态栏样式。<br/>取值为undefined时，无样式。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default systemBarStyle(style: SystemBarStyle | undefined): this;

  /**
   * 配置Navigation是否可恢复。如配置为可恢复，当应用进程异常退出并重新冷启动时，可自动创建该Navigation，并恢复至异常退出时的路由栈。
   *
   *
   * @param { boolean | undefined } recoverable - Navigation是否可恢复，默认为不可恢复。<br/>true：路由栈可恢复；false：路由栈不可恢复。<br/>参数非法或为
   *     undefined时，按默认值处理。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default recoverable(recoverable: boolean | undefined): this;

  /**
   * 控制分栏场景下是否显示拖拽条。该属性在PC/2in1设备上不生效。
   *
   * @param { boolean | undefined } isEnabled - 是否开启拖拽条，默认为无拖拽条样式。<br/>true：有拖拽条样式；false：无拖拽条样式。<br/>参数非法或为undefined时，
   *     按默认值处理。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableDragBar(isEnabled: boolean | undefined): this;

  /**
   * 设置Navigation双栏模式下的分割线样式。
   *
   * @param { NavigationDividerStyle | null } style - navigation divider style in split mode.[since 23 - 24]
   *     <br>null: hides the split line.
   * @returns { NavigationAttribute } - 返回Navigation属性对象
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default divider(style: NavigationDividerStyle | null): this;

  /**
   * 控制是否开启单双栏切换时的动效。
   *
   * @param { boolean | undefined } isEnabled - 是否开启单双栏切换动效。<br/>默认值：true<br/>true：开启单双栏切换动效；false：关闭单双栏切换动效。<br/>参数非法
   *     或为undefined时，按默认值处理。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableModeChangeAnimation(isEnabled: boolean | undefined): this;

  /**
   * 设置是否启用[NavDestination]{@link ./../../@internal/component/ets/nav_destination}页面
   * [onHidden](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#onhidden10)、
   * [onShown](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#onshown10)生命周期与全模态的联动触发。
   *
   * > **说明：**
   * >
   * > 从API version 23开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { boolean | undefined } isEnabled - 是否启用NavDestination页面onShown、onHidden生命周期与全模态的联动触发。<br/>默认值：true<br/>
   *     true：全模态拉起时，会触发当前NavDestination页面的onHidden生命周期；全模态关闭时会触发当前NavDestination页面的onShown生命周期<br/>false：
   *     NavDestination页面onHidden、onShown生命周期不会因为全模态的拉起、关闭而触发。<br/>取值为undefined时，按默认值处理。
   * @returns { NavigationAttribute } - Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default enableVisibilityLifecycleWithContentCover(isEnabled: boolean | undefined): this;

  /**
   * 设置Navigation配置项。
   *
   * @param { NavPathStack } [pathInfos] - Navigation页面栈。
   * @param { HomePathInfo } [homeDestination] - 自定义Navigation首页信息。
   * @param { NavigationModuleInfo } [moduleInfo] - 导航的页面路径和模块信息
   * @returns { NavigationAttribute } 返回导航属性的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setNavigationOptions(pathInfos?: NavPathStack, homeDestination?: HomePathInfo, moduleInfo?: NavigationModuleInfo): this;

  /**
   * 设置导航选项。
   *
   * @param { NavPathStack } [pathInfos] - 导航栈
   * @param { NavigationModuleInfo } [moduleInfo] - 导航的pageInfo和模块信息
   * @returns { NavigationAttribute } 返回导航属性的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setNavigationOptions(pathInfos?: NavPathStack,  moduleInfo?: NavigationModuleInfo): this;

  /**
   * 动态设置Navigation组件的属性方法。
   *
   * @param { AttributeModifier<NavigationAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   在当前组件上
   *     ，动态设置属性方法，支持使用if/else语法。<br/>CommonMethod：通用属性和事件。<br/>取值为undefined时，按当前组件的属性方法默认值处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<NavigationAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * Navigation双栏模式下，支持设置右侧页面显示默认占位页，占位页仅作为UI展示页，不可获焦和响应事件。
   *
   * @param { ComponentContent<Object> | undefined } placeholder - 设置Navigation双栏模式下右侧的默认占位页。
   * @returns { NavigationAttribute } - Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default splitPlaceholder<T extends Object>(placeholder: ComponentContent<T>): this;
}

/**
 * 自定义转场动画协议，开发者需实现该协议来定义Navigation路由跳转的跳转动画。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationAnimatedTransition {

  /**
   * 转场完成回调。
   *
   * success：转场是否成功。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTransitionEnd?: (success: boolean) => void;

  /**
   * 动画超时结束时间。
   * 单位为： ms，取值应为≥0的整数，不可交互动画默认超时时间为1000ms。
   * 可交互动画无默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  timeout?: int;

  /**
   * 本次转场动画是否为可交互转场。
   * true：本次转场动画是可交互转场；false：本次转场动画不是可交互转场。
   * 默认值： false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isInteractive?: boolean;

  /**
   * 自定义转场动画执行回调。
   *
   * transitionProxy：自定义转场动画代理对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  transition: (transitionProxy: NavigationTransitionProxy) => void;
}

/**
 * 自定义转场动画代理对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationTransitionProxy {

  /**
   * 退场页面信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  from: NavContentInfo;

  /**
   * 进场页面信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  to: NavContentInfo;

  /**
   * 本次转场动画是否为可交互转场。
   * true：本次转场动画是可交互转场；false：本次转场动画不是可交互转场。
   * 默认值： false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isInteractive?: boolean;

  /**
   * 结束本次自定义转场动画，开发者需要主动触发该方法来结束本次转场，否则系统会在timeout的时间后结束本次转场。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  finishTransition(): void;

  /**
   * 取消本次交互转场，恢复到页面跳转前的路由栈(不支持取消不可交互转场动画)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  cancelTransition?: VoidCallback;

  /**
   * 更新交互转场动画进度(不可交互动画不支持动画进度设置)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  updateTransition?: UpdateTransitionCallback;
}

/**
 * 交互转场动画进度。
 *
 * @param { double } progress - 设置交互转场动画进度百分比。
 *     取值范围：[0,1]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type UpdateTransitionCallback = (progress: double) => void;

/**
 * 跳转Destination信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavContentInfo {

  /**
   * NavDestination名称，如果为根视图(NavBar)，则返回值为undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  name?: string;

  /**
   * NavDestination在NavPathStack中的序号， 如果为根视图(NavBar)，则返回值为 -1。
   * 取值应为≥-1的整数。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: int;

  /**
   * NavDestination的模式，如果是根视图(NavBar)，则返回值为undefined。
   * 默认值： NavDestinationMode.STANDARD。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  mode?: NavDestinationMode;

  /**
   * NavDestination页面加载的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  param?: Object;

  /**
   * NavDestination的唯一标识符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  navDestinationId?: string;
}

/**
 * Navigation分割线颜色及上下边距。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavigationDividerStyle {

  /**
   * 分割线的颜色。
   * 默认值： #33000000, 灰色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;

  /**
   * 分割线与侧边栏顶端的距离。
   * 单位为： vp。 默认值： 0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  startMargin?: Length;

  /**
   * 分割线与侧边栏底端的距离。
   * 单位：vp。
   * 单位为： vp。 默认值： 0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  endMargin?: Length;
}

/**
 * 绑定导航控制器到Navigation组件，适用于使用[NavPathStack]{@link NavPathStack}配合
 * [navDestination]{@link NavigationAttribute.navDestination}属性进行页面路由。
 *
 * @param { NavPathStack } [pathInfos] - 导航控制器对象。
 * @param { CustomBuilder } [content_] - 子组件。
 * @returns { NavigationAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Navigation(
    pathInfos?: NavPathStack, 
    content_?: CustomBuilder
): NavigationAttribute;

/**
 * 绑定导航控制器到Navigation组件，并设置自定义首页，适用于使用[NavPathStack]{@link NavPathStack}配合
 * [navDestination]{@link NavigationAttribute.navDestination}属性进行页面路由。
 *
 * @param { NavPathStack } [pathInfos] - 导航控制器对象。
 * @param { HomePathInfo } [homeDestination] - 自定义首页信息。
 * @param { CustomBuilder } [content_] - 子组件。
 * @returns { NavigationAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 * @noninterop
 */
@ComponentBuilder
export declare function Navigation(
   pathInfos?: NavPathStack, 
   homeDestination?: HomePathInfo,
   content_?: CustomBuilder
): NavigationAttribute;

/**
 * 绑定导航控制器到Navigation组件，适用于使用[NavPathStack]{@link NavPathStack}配合
 * [navDestination]{@link NavigationAttribute.navDestination}属性进行页面路由。
 *
 * @param { CustomBuilderT<NavigationAttribute> } style_ - 导航控制器对象。
 * @param { CustomBuilder } [content_] - 子组件。
 * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function Navigation(
 style_: CustomBuilderT<NavigationAttribute>,
 content_?: CustomBuilder,
): NavigationAttribute;