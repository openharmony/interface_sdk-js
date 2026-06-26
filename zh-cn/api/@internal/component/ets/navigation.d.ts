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
 * 导入用于Navigation组件的材质类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type Material = import('../api/@ohos.arkui.uiMaterial').default.Material;

/**
* 状态栏的属性。在设置页面级状态栏属性时使用。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare type SystemBarStyle = import('../api/@ohos.window').default.SystemBarStyle;

/**
* Navigation通用标题。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface NavigationCommonTitle {

  /**
   * 设置主标题。
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
   * 设置副标题。
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
* Navigation自定义标题。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface NavigationCustomTitle {

  /**
   * 设置标题栏内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  builder: CustomBuilder;

  /**
   * 设置标题栏高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
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
* **表1** navBarWidth最终取值与开发者设置值的关系表
*
* | 开发者设置的navBarWidth值 | calcNavBarWidth计算值 | navBarWidth最终取值 |
* | --- | --- | --- |
* | navBarWidth < minNavBarWidth | NA | minNavBarWidth |
* | navBarWidth > maxNavBarWidth | calcNavBarWidth > maxNavBarWidth | maxNavBarWidth |
* | navBarWidth > maxNavBarWidth | calcNavBarWidth < minNavBarWidth | minNavBarWidth |
* | navBarWidth > maxNavBarWidth | minNavBarWidth ≤ calcNavBarWidth ≤ maxNavBarWidth | calcNavBarWidth |
* | minNavBarWidth ≤ navBarWidth ≤ maxNavBarWidth | calcNavBarWidth ≤ minNavBarWidth | minNavBarWidth |
* | minNavBarWidth ≤ navBarWidth ≤ maxNavBarWidth | minNavBarWidth < calcNavBarWidth <= navBarWidth | calcNavBarWidth |
* | minNavBarWidth ≤ navBarWidth ≤ maxNavBarWidth | calcNavBarWidth > navBarWidth | navBarWidth |
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum NavigationMode {

  /**
   * 导航页与内容区独立显示，相当于两个页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Stack = 0,

  /**
   * 导航页与内容区分两栏显示。
   *
   * **1.** navBarWidth最终取值与开发者设置值的关系参见表1。
   *
   * **2.** 缩小组件尺寸时，先缩小内容区的尺寸至minContentWidth，然后再缩小导航页的尺寸至minNavBarWidth。若继续缩小，先缩小内容区，内容区消失后再缩小导航页。
   *
   * **3.** 设置导航页为固定尺寸时，若持续缩小组件尺寸，导航页最后压缩显示。
   *
   * **4.** 若只设置了navBarWidth属性，则导航页宽度为navBarWidth，且分割线不可拖动。
   *
   * **5.** 分割线的热区左右各2vp，建议避让4vp以上。
   *
   * **6.** Split模式下，内容区若只存在一个页面，则页面左上角不会显示返回按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Split = 1,

  /**
   * API version 9及之前版本，Navigation宽度>=520vp时，采用Split模式显示；Navigation宽度<520vp时，采用Stack模式显示。
   *
   * 从API version 10开始：Navigation宽度>=600vp时，采用Split模式显示；Navigation宽度<600vp时，采用Stack模式显示，600vp等于minNavBarWidth(240vp) +
   * minContentWidth (360vp)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Auto = 2,

  /**
   * Navigation宽度>=600vp且高宽比小于等于1.2时，采用Split模式显示；否则采用Stack模式显示。600vp等于minNavBarWidth(240vp) + minContentWidth (360vp)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  AUTO_WITH_ASPECT_RATIO = 3
}

/**
* 导航页位置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum NavBarPosition {

  /**
   * 双栏显示时，主列在主轴方向首部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Start = 0,

  /**
   * 双栏显示时，主列在主轴方向尾部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  End = 1
}

/**
* 标题栏显示模式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum NavigationTitleMode {

  /**
   * 当内容为满一屏的可滚动组件时，标题随着内容向上滚动而缩小（子标题的大小不变、淡出）。向下滚动内容到顶时则恢复原样。
   *
   * **说明：**
   *
   * 标题随着内容滚动大小联动的动效在title设置为ResourceStr和NavigationCommonTitle时生效，设置成其余自定义节点类型时字体样式无法变化，下拉时只影响标题栏偏移。
   *
   * 可滚动组件不满一屏时，如果想使用联动效果，就要使用滚动组件提供的[edgeEffect]{@link ListAttribute#edgeEffect}接口将options参数设置为true。未滚动状态，标题栏高度与Full模式一
   * 致；滚动时，标题栏的最小高度与Mini模式一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Free = 0,

  /**
   * 固定为大标题模式。
   *
   * 默认值：只有主标题时，标题栏高度为112vp；同时有主标题和副标题时，标题栏高度为138vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Full = 1,

  /**
   * 固定为小标题模式。
   *
   * 默认值：API version 12之前，只有主标题时，标题栏高度为56vp；同时有主标题和副标题时，标题栏高度为82vp。从API version 12开始，该模式下标题栏高度为56vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Mini = 2
}

/**
* 导航菜单项，包括菜单图标和菜单信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare interface NavigationMenuItem {

  /**
   * API version 9：显示菜单栏单个选项的文本。
   *
   * 从API version 10开始，不显示菜单栏单个选项的文本。
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
   * 菜单栏单个选项的图标资源路径。
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
   * 菜单栏单个选项的symbol资源（优先级高于icon）。
   *
   * **说明：**
   *
   * 不支持通过[SymbolGlyphModifier]{@link SymbolGlyphModifier:SymbolGlyphModifier}对象的
   * [fontSize]{@link SymbolGlyphAttribute#fontSize}属性修改图标大小、[effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}
   * 属性修改动效、[symbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}属性修改动
   * 效类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * 使能状态，默认使能（false未使能，true使能）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isEnabled?: boolean;

  /**
   * 当前选项被选中的事件回调。
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
* 下一个页面返回的回调信息载体。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface PopInfo {

  /**
   * 页面触发返回时的当前页面信息，系统自动获取填入，无需开发者传入。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  info: NavPathInfo;

  /**
   * 页面触发返回时的结果，开发者自定义对象。
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
* 路由页面信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class NavPathInfo {

  /**
   * 创建NavPathInfo对象。
   *
   * @param { string } name - NavDestination页面名称。该名称匹配开发者设置的路由表中的name，包括以下两种：<br/>1. 自定义路由表，开发者通过
   *     [navDestination]{@link NavigationAttribute#navDestination}方法传递。<br/>2. 系统路由表，通过routerMap中的name设置，可参考
   *     [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#示例2使用导航控制器方法)。
   * @param { unknown } param - 开发者设置的NavDestination页面详细参数，unknown可以是用户自定义的类型。
   * @param { ?import('../api/@ohos.base').Callback<PopInfo> } onPop - NavDestination页面触发
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   *     [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}时返回的回调。仅
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   *     [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}中设置result参数后触
   *     发。 [since 11]
   * @param { ?boolean } isEntry - 标记NavDestination是否为入口页面。<br/>true：NavDestination是入口页面；false：NavDestination不是入口页面。<br/
   *     >默认值：false <br/>标记清理时机：1. 在当前navDestination页面触发一次全局返回事件。2. 应用退至后台。<br/>**说明：**<br/>入口NavDestination不响应应用内的全局
   *     back事件，直接触发应用间的全局back事件。 [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor(name: string, param: unknown, onPop?: import('../api/@ohos.base').Callback<PopInfo>, isEntry?: boolean);

  /**
   * NavDestination页面名称。该名称匹配开发者设置的路由表中的name，包括以下两种：
   *
   * 1. 自定义路由表，开发者通过[navDestination]{@link NavigationAttribute#navDestination}方法传递。
   * 2. 系统路由表，通过routerMap中的name设置，可参考[示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#示例2使用导航控制器方法)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  name: string;

  /**
   * 开发者设置的NavDestination页面详细参数，unknown可以是用户自定义的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  param?: unknown;

  /**
   * NavDestination页面触发[pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   * [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   * [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}时返回的回调。仅
   * [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   * [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   * [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}中设置result参数后触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onPop?: import('../api/@ohos.base').Callback<PopInfo>;

  /**
   * 标记NavDestination是否为入口页面。
   *
   * true：NavDestination是入口页面；false：NavDestination不是入口页面。
   *
   * 默认值：false
   *
   * 标记清理时机：1. 在当前navDestination页面触发一次全局back事件。2. 应用退至后台。
   *
   * **说明：**
   *
   * 入口NavDestination不响应应用内的全局back事件，直接触发应用间的全局back事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isEntry?: boolean;

  /**
   * NavDestination页面唯一标识符，该id由系统默认生成且全局唯一，通过[getPathStack]{@link NavPathStack#getPathStack}接口可读取，但不可以主动赋新值。
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
* 路由栈操作模式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LaunchMode {

  /**
   * 系统默认的栈操作模式。
   *
   * push操作会将指定的NavDestination入栈；replace操作会将当前栈顶NavDestination替换。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  STANDARD = 0,

  /**
   * 从栈底向栈顶查找，如果指定的名称已经存在，则将对应的NavDestination页面移到栈顶（replace操作会将最后的栈顶替换成指定的NavDestination），否则行为和STANDARD一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  MOVE_TO_TOP_SINGLETON = 1,

  /**
   * 从栈底向栈顶查找，如果指定的名称已经存在，则将其上方的NavDestination页面全部移除（replace操作会将最后的栈顶替换成指定的NavDestination），否则行为和STANDARD一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  POP_TO_SINGLETON = 2,

  /**
   * 创建新的NavDestination实例。与STANDARD模式相比，该方法不会复用栈中同名实例。并且指定该模式时，新创建的页面默认会执行push动效。
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
* 路由栈操作选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface NavigationOptions {

  /**
   * 路由栈的操作模式。
   *
   * 默认值：LaunchMode.STANDARD
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  animated?: boolean;
}

/**
* Navigation导航控制器，以栈的数据结构管理Navigation中所有的子页面，并提供栈操作的方法用于控制Navigation中子页面的切换。
*
* 从API version 12开始，NavPathStack允许被继承，派生类对象可以替代基类NavPathStack对象使用。使用示例参见
* [示例10](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#示例10定义导航控制器派生类)。
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
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class NavPathStack {

  /**
   * 创建NavPathStack对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * 将info指定的NavDestination页面信息入栈。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>传入参数非法时，按true处理。 [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  pushPath(info: NavPathInfo, animated?: boolean): void;

  /**
   * 将info指定的NavDestination页面信息入栈，具体根据options中指定不同的[LaunchMode]{@link LaunchMode}，来实现不同的行为。
   *
   * @param { NavPathInfo } info - NavDestination页面的信息。
   * @param { NavigationOptions } [options] - 路由栈操作选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pushPath(info: NavPathInfo, options?: NavigationOptions): void;

  /**
   * 将info指定的NavDestination页面信息入栈，使用Promise异步回调返回接口调用结果。
   *
   * > **说明：**
   * >
   * > 不建议在[aboutToAppear]{@link BaseCustomComponent#aboutToAppear}中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pushDestination(info: NavPathInfo, animated?: boolean): Promise<void>;

  /**
   * 将info指定的NavDestination页面信息入栈，使用Promise异步回调返回接口调用结果，具体根据options中指定不同的[LaunchMode]{@link LaunchMode}，来实现不同的行为。
   *
   * > **说明：**
   * >
   * > 不建议在[aboutToAppear]{@link BaseCustomComponent#aboutToAppear}中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pushDestination(info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { unknown } param - 开发者设置的NavDestination页面详细参数，unknown可以是用户自定义的类型。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  pushPathByName(name: string, param: unknown, animated?: boolean): void;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param，添加onPop回调接收入栈页面出栈时的返回结果，并进行处理。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - 开发者设置的NavDestination页面详细参数。
   * @param { import('../api/@ohos.base').Callback<PopInfo> } onPop - Callback回调，用于页面出栈时触发该回调处理返回结果。仅
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   *     [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}中设置result参数后触发。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pushPathByName(name: string, param: Object, onPop: import('../api/@ohos.base').Callback<PopInfo>, animated?: boolean): void;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param，使用Promise异步回调返回接口调用结果。
   *
   * > **说明：**
   * >
   * > 不建议在[aboutToAppear]{@link BaseCustomComponent#aboutToAppear}中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pushDestinationByName(name: string, param: Object, animated?: boolean): Promise<void>;

  /**
   * 将name指定的NavDestination页面信息入栈，传递的数据为param，并且添加用于页面出栈时处理返回结果的onPop回调，使用Promise异步回调返回接口调用结果。
   *
   * > **说明：**
   * >
   * > 不建议在[aboutToAppear]{@link BaseCustomComponent#aboutToAppear}中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } param - 开发者设置的NavDestination页面详细参数。
   * @param { import('../api/@ohos.base').Callback<PopInfo> } onPop - Callback回调，用于页面出栈时处理返回结果。仅
   *     [pop]{@link NavPathStack#pop(result: Object, animated?: boolean)}、
   *     [popToName]{@link NavPathStack#popToName(name: string, result: Object, animated?: boolean)}、
   *     [popToIndex]{@link NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}中设置result参数后触发。
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pushDestinationByName(name: string, param: Object, onPop: import('../api/@ohos.base').Callback<PopInfo>, animated?: boolean): Promise<void>;

  /**
   * 将当前路由栈栈顶退出，将info指定的NavDestination页面信息入栈。
   *
   * @param { NavPathInfo } info - 新栈顶页面参数信息。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  replacePath(info: NavPathInfo, animated?: boolean): void;

  /**
   * 替换路由栈操作，具体根据options中指定不同的[LaunchMode]{@link LaunchMode}，来实现不同的行为。
   *
   * @param { NavPathInfo } info - 新栈顶页面参数信息。
   * @param { NavigationOptions } [options] - 路由栈操作选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  replacePathByName(name: string, param: Object, animated?: boolean): void;

  /**
   * 将路由栈内索引值在indexes中的NavDestination页面删除。
   *
   * @param { Array<number> } indexes - 待删除NavDestination页面的索引值数组。索引值从0开始。
   * @returns { number } 返回删除的NavDestination页面数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  removeByIndexes(indexes: Array<number>): number;

  /**
   * 将路由栈内指定name的NavDestination页面删除。
   *
   * @param { string } name - 删除的NavDestination页面的名字。
   * @returns { number } 返回删除的NavDestination页面数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  removeByName(name: string): number;

  /**
   * 将路由栈内指定navDestinationId的NavDestination页面删除。navDestinationId可以在NavDestination的
   * [onReady]{@link NavDestinationAttribute#onReady}回调中获取，也可以在
   * [NavDestinationInfo]{@link @ohos.arkui.observer:uiObserver.NavDestinationInfo}中获取。
   *
   * @param { string } navDestinationId - 删除的NavDestination页面的唯一标识符navDestinationId。
   * @returns { boolean } 返回是否成功删除该页面，<br/>true：删除成功。<br/>false：删除失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true [since 11]
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
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
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
   * 回退路由栈到由栈底开始第一个名为name的NavDestination页面。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true [since 11]
   * @returns { number } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popToName(name: string, animated?: boolean): number;

  /**
   * 回退路由栈到由栈底开始第一个名为name的NavDestination页面，并触发onPop回调传入页面处理结果。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { Object } result - 页面自定义处理结果。不支持boolean类型。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @returns { number } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  popToName(name: string, result: Object, animated?: boolean): number;

  /**
   * 回退路由栈到index指定的NavDestination页面。
   *
   * @param { number } index - NavDestination页面的位置索引。索引值从0开始。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  popToIndex(index: number, animated?: boolean): void;

  /**
   * 回退路由栈到index指定的NavDestination页面，并触发onPop回调传入页面处理结果。
   *
   * @param { number } index - NavDestination页面的位置索引。索引值从0开始。
   * @param { Object } result - 页面自定义处理结果。不支持boolean类型。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  popToIndex(index: number, result: Object, animated?: boolean): void;

  /**
   * 将由栈底开始第一个名为name的NavDestination页面移到栈顶。
   *
   * @param { string } name - NavDestination页面名称。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true [since 11]
   * @returns { number } 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的当前索引，否则返回-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  moveToTop(name: string, animated?: boolean): number;

  /**
   * 将index指定的NavDestination页面移到栈顶。
   *
   * @param { number } index - NavDestination页面的位置索引。索引值从0开始。
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  moveIndexToTop(index: number, animated?: boolean): void;

  /**
   * 清除栈中所有页面。
   *
   * @param { boolean } [animated] - 是否支持转场动画。<br/>true：支持转场动画；false：不支持转场动画。<br/>默认值：true [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  clear(animated?: boolean): void;

  /**
   * 获取栈中所有NavDestination页面的名称。
   *
   * @returns { Array<string> } 返回栈中所有NavDestination页面的名称。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getAllPathName(): Array<string>;

  /**
   * 获取index指定的NavDestination页面的参数信息。
   *
   * @param { number } index - NavDestination页面的位置索引。 索引值从0开始。
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
   * 获取所有名为name的NavDestination页面的参数信息，按页面索引从小到大排序。
   *
   * @param { string } name - NavDestination页面名称。
   * @returns { Array<unknown> } 返回全部名为name的NavDestination页面的参数信息，unknown可以是用户自定义的类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getParamByName(name: string): Array<unknown>;

  /**
   * 获取全部名为name的NavDestination页面的位置索引。
   *
   * @param { string } name - NavDestination页面名称。
   * @returns { Array<number> } 返回全部名为name的NavDestination页面的位置索引。 当路由栈中不存在此name，返回空数组。索引取值范围为[0, 路由栈大小-1]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getIndexByName(name: string): Array<number>;

  /**
   * 获取父NavPathStack。
   *
   * 当出现Navigation嵌套Navigation的情况时（可以是直接嵌套，也可以是间接嵌套），内部Navigation的NavPathStack能够获取到外层Navigation的NavPathStack。
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
   * 获取栈大小。
   *
   * @returns { number } Stack size.
   *     <br>Value range: [0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size(): number;

  /**
   * 关闭（true）或打开（false）当前Navigation中所有转场动画。
   *
   * @param { boolean } value - 是否关闭转场动画，<br/>默认值：false<br/>true：关闭转场动画。<br/>false：不关闭转场动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  disableAnimation(value: boolean): void;

  /**
   * 设置Navigation页面跳转拦截回调。
   *
   * @param { NavigationInterception } interception - 设置Navigation跳转拦截对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setInterception(interception: NavigationInterception): void;

  /**
   * 获取当前路由栈中的路由页面信息数组。
   *
   * @returns { Array<NavPathInfo> } 当前路由栈中的路由页面信息数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  getPathStack(): Array<NavPathInfo>;

  /**
   * 将当前路由栈中的路由页面信息数组更新为指定内容，并实现路由转场。
   *
   * > **说明：**
   * >
   * > 1. 开发者可以在原有栈的基础上批量添加或删除页面。批量入栈的页面中，只有可见的页面会触发创建，其他页面虽已入栈但不会立即创建，当这些页面变为可见时，才会触发创建。
   * >
   * > 2. 通过批量入栈功能更新的路由栈，各页面的生命周期事件触发顺序为从栈顶到底部依次触发，这与其它入栈接口从栈底到顶部的触发顺序不同。
   * >
   * > 3. 开发者可以通过[NavPathInfo]{@link NavPathInfo}中的页面唯一标识符navDestinationId来操作已有页面，该id由系统默认生成且全局唯一（可以通过
   * > [getPathStack]{@link NavPathStack#getPathStack}接口获取，不可主动赋新值）。若该id在当前路由栈中不存在，则表示新增页面，若在当前路由栈中存在，同时对应的name相同，则表示复用已
   * > 有页面。
   *
   * @param { Array<NavPathInfo> } pathStack - 设置当前路由栈中的路由页面信息数组。<br/>**说明：**<br/>数组长度无限制。
   * @param { boolean } [animated] - 是否开启转场动画。<br/>true：开启转场动画；false：不开启转场动画。<br /> 默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setPathStack(pathStack: Array<NavPathInfo>, animated?: boolean): void;
}

/**
* Navigation首页名字。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type NavBar = 'navBar';

/**
* Navigation页面跳转前和页面跳转后的拦截回调。
*
 * @param { NavDestinationContext | NavBar } from - 页面跳转之前的栈顶页面信息。参数值为navBar，则表示跳转前的页面为Navigation首页。
 * @param { NavDestinationContext | NavBar } to - 页面跳转之前的栈顶页面信息。参数值为navBar，则表示跳转前的页面为Navigation首页。
 * @param { NavigationOperation } operation - 当前页面跳转类型。
 * @param { boolean } isAnimated - 页面跳转是否有动画。<br/>true：页面跳转有动画。<br/>false：页面跳转没有动画。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type InterceptionShowCallback = (from: NavDestinationContext|NavBar, to: NavDestinationContext|NavBar, operation: NavigationOperation, isAnimated: boolean) => void;

/**
* Navigation页面跳转前的拦截回调。
*
 * @param { NavPathInfo | NavBar } from - 退场页面信息。参数值为navBar，则表示跳转前的页面为Navigation首页。
 * @param { NavPathInfo | NavBar } to - 进场页面信息。参数值为navBar，则表示跳转的目标页面为Navigation首页。
 * @param { NavPathStack } pathStack - 页面栈。
 * @param { NavigationOperation } operation - 当前页面跳转类型。
 * @param { boolean } isAnimated - 页面跳转是否有动画。<br/>true：页面跳转有动画。<br/>false：页面跳转没有动画。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type InterceptionCallback = (from: NavPathInfo|NavBar, to: NavPathInfo|NavBar, pathStack: NavPathStack, operation: NavigationOperation, isAnimated: boolean) => void;

/**
* Navigation单双栏显示状态发生变更时的拦截回调。
*
 * @param { NavigationMode } mode - 导航页的显示模式。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type InterceptionModeCallback = (mode: NavigationMode) => void;

/**
* Navigation跳转拦截对象。
*
* ###### InterceptionShowCallback<sup>12+</sup>
*
* type InterceptionShowCallback = (from: NavDestinationContext | NavBar, to: NavDestinationContext | NavBar, operation:
* NavigationOperation, isAnimated: boolean) => void
*
* Navigation页面跳转前和页面跳转后的拦截回调。
*
* **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* **参数：**
*
* | 参数名  | 类型    | 必填 | 说明              |
* | ------ | ------ | ---- | ---------------- |
* | from | [NavDestinationContext]{@link NavDestinationContext} \| [NavBar]{@link NavBar} | 是 |  页面跳转之前的栈顶页面信息。参数值为navBar，则表示跳转前的页面为Navigation首页。 |
* | to | [NavDestinationContext]{@link NavDestinationContext} \| [NavBar]{@link NavBar} | 是 | 页面跳转之后的栈顶页面信息。参数值为navBar，则表示跳转的目标页面为Navigation首页。 |
* | operation | [NavigationOperation]{@link NavigationOperation} | 是 | 当前页面跳转类型。 |
* | isAnimated | boolean | 是 | 页面跳转是否有动画。<br/>true：页面跳转有动画。<br/>false：页面跳转没有动画。 |
*
* ###### InterceptionModeCallback<sup>12+</sup>
*
* type InterceptionModeCallback = (mode: NavigationMode) => void
*
* Navigation单双栏显示状态发生变更时的拦截回调。
*
* **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* **参数：**
*
* | 参数名  | 类型    | 必填 | 说明              |
* | ------ | ------ | ---- | ---------------- |
* | mode | [NavigationMode]{@link NavigationMode} | 是 |  导航页的显示模式。 |
*
* ###### InterceptionCallback<sup>22+</sup>
*
* type InterceptionCallback = (from: NavPathInfo | NavBar, to: NavPathInfo | NavBar, pathStack: NavPathStack,
* operation: NavigationOperation, isAnimated: boolean) => void
*
* Navigation页面跳转前的拦截回调。
*
* **原子化服务API：** 从API version 22开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* **参数：**
*
* | 参数名  | 类型    | 必填 | 说明              |
* | ------ | ------ | ---- | ---------------- |
* | from | [NavPathInfo]{@link NavPathInfo} \|[NavBar]{@link NavBar} | 是 |  退场页面信息。参数值为navBar，则表示跳转前的页面为Navigation首页。 |
* | to | [NavPathInfo]{@link NavPathInfo} \|[NavBar]{@link NavBar} | 是 | 进场页面信息。参数值为navBar，则表示跳转的目标页面为Navigation首页。 |
* | pathStack | [NavPathStack]{@link NavPathStack} | 是 | 页面栈。 |
* | operation | [NavigationOperation]{@link NavigationOperation} | 是 | 当前页面跳转类型。 |
* | isAnimated | boolean | 是 | 页面跳转是否有动画。<br/>true：页面跳转有动画。<br/>false：页面跳转没有动画。 |
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface NavigationInterception {

  /**
   * 页面跳转前的回调，允许操作栈，在当前跳转中生效。拦截的页面会被创建。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  willShow?: InterceptionShowCallback;

  /**
   * 页面跳转后回调。在该回调中操作栈在下一次跳转中刷新。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  didShow?: InterceptionShowCallback;

  /**
   * Navigation单双栏显示状态发生变更时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  modeChange?: InterceptionModeCallback;

  /**
   * 页面跳转前的回调，允许操作栈，在当前跳转中生效。拦截的页面不会被创建。
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
* 主页NavDestination的信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface HomePathInfo {

  /**
   * 主页NavDestination的页面名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  name: string;

  /**
   * 主页NavDestination的页面详细参数。
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
* Navigation组件是路由导航的根视图容器，一般作为Page页面的根容器使用，其内部默认包含了标题栏、内容区和工具栏，其中内容区默认首页显示导航内容（Navigation的子组件）或非首页显示（
* [NavDestination]{@link nav_destination}的子组件），首页和非首页通过路由进行切换。
*
* > **说明：**
*
* > - 该组件从API version 11开始默认支持安全区避让特性(默认值为：expandSafeArea(
* > [SafeAreaType.SYSTEM, SafeAreaType.KEYBOARD, SafeAreaType.CUTOUT], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重
* > 写该属性覆盖默认行为，API version 11之前的版本需配合[expandSafeArea]{@link CommonMethod#expandSafeArea}属性实现安全区避让。
* >
* > - [NavBar]{@link NavBar}嵌套使用Navigation时，内层NavDestination的生命周期不和外层NavDestination以及[全模态]{@link common}的生命周期进行联动。
* >
* > - Navigation未设置主副标题（[title]{@link NavigationAttribute#title}或[subTitle]{@link NavigationAttribute#subTitle}）且
* > [hideBackButton]{@link NavigationAttribute#hideBackButton}属性设置为true时，不显示标题栏。
* >
* > - Navigation的子页面切换时，新页面会主动请求焦点。
* >
* > - 不建议在[aboutToAppear]{@link BaseCustomComponent#aboutToAppear}中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface NavigationInterface {

  /**
   * 创建路由导航的根视图容器，适用于使用[NavRouter]{@link nav_router}组件进行页面路由。
   *
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (): NavigationAttribute;

  /**
   * 绑定导航控制器到Navigation组件，适用于使用[NavPathStack]{@link NavPathStack}配合
   * [navDestination]{@link NavigationAttribute#navDestination}属性进行页面路由。
   *
   * @param { NavPathStack } pathInfos - 导航控制器对象。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (pathInfos: NavPathStack): NavigationAttribute;

  /**
   * 绑定路由栈到Navigation组件，并且指定一个NavDestination作为Navigation的导航页（主页），适用于使用[NavPathStack]{@link NavPathStack}配合
   * [navDestination]{@link NavigationAttribute#navDestination}属性或者系统路由表进行页面路由。使用示例参考
   * [示例16（Navigation使用NavDestination作为导航页）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#示例16navigation使用navdestination作为导航页)。
   *
   * @param { NavPathStack } pathInfos - 路由栈信息。
   * @param { HomePathInfo } homeDestination - 主页NavDestination信息。
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
* 工具栏单个选项的状态。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ToolbarItemStatus {

  /**
   * 设置工具栏单个选项为NORMAL态，该选项显示默认样式，可以触发Hover，Press，Focus事件并显示对应的多态样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NORMAL = 0,

  /**
   * 设置工具栏单个选项为DISABLED态， 该选项显示DISABLED态样式，并且不可交互。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DISABLED = 1,

  /**
   * 设置工具栏单个选项为ACTIVE态， 该选项通过点击事件可以将icon图标更新为activeIcon对应的图片资源。
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
* 页面跳转类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum NavigationOperation {

  /**
   * 本次转场为页面进场。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PUSH = 1,

  /**
   * 本次转场为页面退场。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  POP = 2,

  /**
   * 本次转场为页面替换。
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
* 工具栏可配置参数。
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
   * 工具栏单个选项的显示文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  value: ResourceStr;

  /**
   * 工具栏单个选项的图标资源路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: ResourceStr;

  /**
   * 工具栏单个选项的symbol资源（优先级高于icon）。
   *
   * **说明：**
   *
   * 不支持通过[SymbolGlyphModifier]{@link SymbolGlyphModifier:SymbolGlyphModifier}对象的
   * [fontSize]{@link SymbolGlyphAttribute#fontSize}属性修改图标大小、[effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}
   * 属性修改动效、[symbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}属性修改动
   * 效类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * 当前选项被选中的事件回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  action?: () => void;

  /**
   * 工具栏单个选项的状态。
   *
   * 默认值：ToolbarItemStatus.NORMAL
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  status?: ToolbarItemStatus;

  /**
   * 工具栏单个选项处于ACTIVE态时的图标资源路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  activeIcon?: ResourceStr;

  /**
   * 工具栏单个选项处于ACTIVE态时的symbol资源（优先级高于activeIcon）。
   *
   * **说明：**
   *
   * 不支持通过[SymbolGlyphModifier]{@link SymbolGlyphModifier:SymbolGlyphModifier}对象的
   * [fontSize]{@link SymbolGlyphAttribute#fontSize}属性修改图标大小、[effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}
   * 属性修改动效、[symbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}属性修改动
   * 效类型。
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
* 滑动模糊效果类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum ScrollEffectType {

  /**
   * 普通模糊样式，对标题栏背景应用统一模糊效果，模糊背景伴随透明渐变出现或消失。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  COMMON_BLUR = 0,

  /**
   * 渐变模糊样式，对标题栏背景应用统一模糊效果，具有清晰边界。标题栏内容在滑动前后改变颜色或状态，滑动过程中跟随手势线性变化。
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
* 定义标题栏的滑动模糊效果选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface ScrollEffectOptions {

  /**
   * 标题栏滑动模糊样式。
   * 默认值： ScrollEffectType.COMMON_BLUR。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollEffectType?: ScrollEffectType;

  /**
   * 内容区域的最小滑动距离，实现标题栏滑动模糊效果。
   * 默认值： 0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  blurEffectiveStartOffset?: LengthMetrics;

  /**
   * 标题栏达到最终模糊样式的内容区最大滑动距离。
   * 默认值： 8vp。
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
* 标题栏选项。
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
   * 标题栏背景颜色，不设置时为系统默认颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 标题栏背景模糊样式，不设置时关闭背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 标题栏背景模糊选项。
   *
   * **说明：**
   *
   * 只在设置了backgroundBlurStyle时生效。
   *
   * 不建议与backgroundEffect同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 设置标题栏背景属性包括：模糊半径，亮度，饱和度，颜色等。
   *
   * **说明：**
   *
   * 不建议与backgroundBlurStyleOptions同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * 设置标题栏布局方式。
   *
   * 默认值：BarStyle.STANDARD
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
   * 标题栏起始端内间距。
   *
   * 仅支持以下任一场景：
   *
   * 1. 显示返回图标，即[hideBackButton]{@link NavigationAttribute#hideBackButton}为false；
   * 2. 使用非自定义标题，即[标题value]{@link NavigationAttribute#title}类型为ResourceStr或NavigationCommonTitle。
   *
   * 默认值：
   *
   * LengthMetrics.resource(`$r('sys.float.margin_left')`)。
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
   * 标题栏结束端内间距。
   *
   * 仅支持以下任一场景：
   *
   * 1. 使用非自定义菜单，即[菜单value]{@link NavigationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)}为Array<NavigationMenuItem>；
   * 2. 没有右上角菜单，且使用非自定义标题，即[标题value]{@link NavigationAttribute#title}类型为ResourceStr或NavigationCommonTitle。
   *
   * 默认值：
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
   * 主标题属性修改器。
   *
   * 1. 通过Modifier设置的属性会覆盖系统默认的属性（如果Modifier设置了fontSize，maxFontSize，minFontSize任一属性，则系统设置的大小相关属性不生效，以开发者的设置为准）；
   * 2. 不设该属性或者设置了异常值，则恢复系统默认设置；
   * 3. [Free]{@link NavigationTitleMode}模式下设置字体大小时，原有滑动改变标题大小的效果失效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  mainTitleModifier?: TextModifier;

  /**
   * 子标题属性修改器。
   *
   * 1. 通过Modifier设置的属性会覆盖系统默认的属性（如果Modifier设置了fontSize，maxFontSize，minFontSize任一属性，则系统设置的大小相关属性不生效，以开发者的设置为准）；
   * 2. 不设该属性或者设置了异常值，则恢复系统默认设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  subTitleModifier?: TextModifier;

  /**
   * 是否响应悬停态。
   *
   * 使用规则：
   *
   * 1. 需满足Navigation为全屏大小；
   * 2. 标题栏显示模式为[Free]{@link NavigationTitleMode}时或者标题栏布局方式为[STANDARD]{@link BarStyle}时，此接口设置无效。
   *
   * true：响应悬停态；false：不响应悬停态。
   *
   * 默认值：false
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
   * 标题滑动模糊样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollEffectOptions?: ScrollEffectOptions;

  /**
   * 为标题栏设置系统样式的材质。不同的材料有不同的效果，会影响
   * titleBar的背景颜色、边框、阴影和其他视觉属性。
   * 设备行为差异：相同材料在不同设备上的效果可能不同，具体取决于
   * 他们的计算能力。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: Material;
}

/**
* 标题栏或工具栏的布局样式。NavDestination的工具栏不支持设置该属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum BarStyle {

  /**
   * 指定该模式的标题栏或工具栏与内容区采用上下布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  STANDARD = 0,

  /**
   * 指定该模式的标题栏或工具栏与内容区采用层叠布局，标题栏或工具栏布局在内容区上层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  STACK = 1,

  /**
   * 将指定该模式的标题栏或工具栏设置为[组件级安全区]{@link CommonMethod#safeAreaPadding}。
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
* 工具栏选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NavigationToolbarOptions {

  /**
   * 标题栏背景颜色，不设置时为系统默认颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 标题栏背景模糊样式，不设置时关闭背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 标题栏背景模糊选项。
   *
   * **说明：**
   *
   * 只在设置了backgroundBlurStyle时生效。
   *
   * 不建议与backgroundEffect同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 设置标题栏背景属性包括：模糊半径，亮度，饱和度，颜色等。
   *
   * **说明：**
   *
   * 不建议与backgroundBlurStyleOptions同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * 工具栏更多图标的菜单选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  moreButtonOptions?: MoreButtonOptions;

  /**
   * 设置工具栏布局方式。
   *
   * 默认值：BarStyle.STANDARD
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
   * 设置是否隐藏工具栏的文本，默认显示文本。
   *
   * true：隐藏工具栏的文本；false：不隐藏工具栏的文本。
   *
   * 默认值：false
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
* 页面右上角菜单选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface NavigationMenuOptions {

  /**
   * 工具栏更多图标的菜单选项。
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
* 更多图标的菜单选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface MoreButtonOptions {

  /**
   * 更多图标的菜单背景模糊样式，不设置时关闭背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 标题栏背景模糊选项。
   *
   * **说明：**
   *
   * 只在设置了backgroundBlurStyle时生效。
   *
   * 不建议与backgroundEffect同时使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 设置标题栏背景属性包括：模糊半径，亮度，饱和度，颜色等。
   *
   * **说明：**
   *
   * 不建议与backgroundBlurStyleOptions同时使用。
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
* 导航配置选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface NavigationConfiguration {

  /**
   * 导航页面堆栈大小限制。
   * 说明：
   * -限制导航页面堆栈中活动页面节点的最大数量。
   * -超过限制时，自动销毁最旧的页节点
   * 以先进先出（先进先出）的顺序。
   * -完全保留页面的NavPathInfo，支持页面重建。
   * - value <=0不限制页面堆栈大小（默认值）。
   * - value >0将堆栈大小限制为指定值。
   * 取值范围为全体整数。
   *
   * @default 0 (nolimit)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  stackSizeLimit?: number;
}

/**
* 除支持[通用属性]{@link common}外，还支持以下属性：
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class NavigationAttribute extends CommonMethod<NavigationAttribute> {

  /**
   * 设置导航页宽度。仅在[mode]{@link NavigationAttribute#mode}设置为NavigationMode.Auto或NavigationMode.Split时生效。
   *
   * 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。
   *
   * @param { Length } value - 导航页宽度。<br/>默认值：240<br/>单位：vp<br/>undefined：行为不做处理，导航页宽度与默认值保持一致。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  navBarWidth(value: Length): NavigationAttribute;

  /**
   * 设置导航页位置。仅在[mode]{@link NavigationAttribute#mode}设置为NavigationMode.Auto或NavigationMode.Split时生效。
   *
   * @param { NavBarPosition } value - 导航页位置。<br/>默认值：NavBarPosition.Start
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  navBarPosition(value: NavBarPosition): NavigationAttribute;

  /**
   * 设置导航页最小和最大宽度（双栏模式下生效）。未设置该接口时，最小宽度默认为240vp，最大宽度默认为组件宽度的40%，且不大于432vp，即导航页和内容区之间的分割线可以在此范围内进行拖拽。拖拽分割线使导航页宽度变化时，内容区的内
   * 容会被压缩。
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
   * @param { [Dimension, Dimension] } value - 导航页最小和最大宽度。设置异常值时按默认值处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  navBarWidthRange(value: [Dimension, Dimension]): NavigationAttribute;

  /**
   * 设置导航页内容区最小宽度（双栏模式下生效）。
   *
   * @param { Dimension } value - 导航页内容区最小宽度。<br/>默认值：360<br/>单位：vp<br/>undefined：行为不做处理，导航页内容区最小宽度与默认值保持一致。<br/>Auto模式断
   *     点计算：默认600vp，minNavBarWidth(240vp) + minContentWidth (360vp)
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  minContentWidth(value: Dimension): NavigationAttribute;

  /**
   * 设置导航页的显示模式，支持单栏（Stack）、分栏（Split）和自适应（Auto）。
   *
   * @param { NavigationMode } value - 导航页的显示模式。<br/>默认值：NavigationMode.Auto<br/>自适应：基于组件宽度自适应单栏和双栏。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  mode(value: NavigationMode): NavigationAttribute;

  /**
   * 设置标题栏中返回键图标。
   *
   * > **说明：**
   * >
   * > 不支持通过[SymbolGlyphModifier]{@link SymbolGlyphModifier:SymbolGlyphModifier}对象的
   * > [fontSize]{@link SymbolGlyphAttribute#fontSize}属性修改图标大小、
   * > [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}属性修改动效、
   * > [symbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}属性修改动效类型。
   *
   * @param { string | PixelMap | Resource } value - Icon of the back button in the title bar. [since 9 - 11]
   * @param { string | PixelMap | Resource | SymbolGlyphModifier } value - 标题栏中返回键图标。 [since 9 - 11]
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  backButtonIcon(value: string | PixelMap | Resource | SymbolGlyphModifier): NavigationAttribute;

  /**
   * 设置标题栏中返回键图标和无障碍播报内容。
   *
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * >
   * > 不支持通过[SymbolGlyphModifier]{@link SymbolGlyphModifier:SymbolGlyphModifier}对象的
   * > [fontSize]{@link SymbolGlyphAttribute#fontSize}属性修改图标大小、
   * > [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}属性修改动效、
   * > [symbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}属性修改动效类型。
   *
   * @param { string | PixelMap | Resource | SymbolGlyphModifier } icon - 标题栏中返回键图标。
   * @param { ResourceStr } [accessibilityText] - 返回键无障碍播报内容。</br>默认值：系统语言是中文时为“返回”，系统语言是英文时为“back”。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backButtonIcon(icon: string | PixelMap | Resource | SymbolGlyphModifier, accessibilityText?: ResourceStr): NavigationAttribute;

  /**
   * 设置是否隐藏导航页。设置为true时，隐藏Navigation的导航页，包括标题栏、内容区和工具栏。如果此时路由栈中存在NavDestination页面，则直接显示栈顶NavDestination页面，反之显示空白。
   *
   * 从API version 9开始到API version 10仅在双栏模式下生效。从API version 11开始在单栏、双栏与自适应模式均生效。
   *
   * @param { boolean } value - 是否隐藏导航页。<br>默认值：false<br/>true：隐藏导航页；false：显示导航页。<br/>传入参数非法时，按false处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  hideNavBar(value: boolean): NavigationAttribute;

  /**
   * 设置页面标题。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
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
   * @param { ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle } value - 页面标题，使用
   *     NavigationCustomTitle类型设置height高度时，[titleMode]{@link NavigationAttribute#titleMode}属性不会生效。<br/>字符串超长时，如果不设置副标题，
   *     先缩小再换行（2行）最后截断。如果设置副标题，先缩小最后截断。 [since 10]
   * @param { NavigationTitleOptions } [options] - 标题栏选项。 包含标题栏背景颜色、标题栏背景模糊样式及模糊选项、标题栏背景属性、标题栏布局方式、标题栏起始端内间距、标题栏结束端内间距、主
   *     标题属性修改器、子标题属性修改器、是否响应悬停态。 [since 11]
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  title(value: ResourceStr | CustomBuilder | NavigationCommonTitle | NavigationCustomTitle, options?: NavigationTitleOptions): NavigationAttribute;

  /**
   * 设置页面副标题。
   *
   * > **说明：**
   *
   * @param { string } value - 页面副标题。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead title
   */
  subTitle(value: string): NavigationAttribute;

  /**
   * 设置是否隐藏标题栏。
   *
   * @param { boolean } value - 是否隐藏标题栏。<br>默认值：false<br/>true：隐藏标题栏；false：显示标题栏。<br/>传入参数非法时，按false处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hideTitleBar(value: boolean): NavigationAttribute;

  /**
   * 设置是否隐藏标题栏。与[hideTitleBar]{@link NavigationAttribute#hideTitleBar(value: boolean)}相比，新增标题栏显隐时是否使用动画。
   *
   * @param { boolean } hide - 是否隐藏标题栏。<br>默认值：false<br/>true：隐藏标题栏；false：显示标题栏。<br/>传入参数非法时，按false处理。
   * @param { boolean } animated - 设置是否使用动画显隐标题栏。<br>默认值：false<br/>true：使用动画显示隐藏标题栏；false：不使用动画显示隐藏标题栏。<br/>传入参数非法时，按
   *     false处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  hideTitleBar(hide: boolean, animated: boolean): NavigationAttribute;

  /**
   * 设置是否隐藏标题栏中的返回键。返回键仅在[titleMode]{@link NavigationAttribute#titleMode}设置为NavigationTitleMode.Mini时才生效。
   *
   * @param { boolean } value - 是否隐藏标题栏中的返回键。<br/>true：隐藏返回键。<br/>false：显示返回键。<br/>传入参数非法时，按false处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hideBackButton(value: boolean): NavigationAttribute;

  /**
   * 设置页面标题栏显示模式。
   *
   * @param { NavigationTitleMode } value - 页面标题栏显示模式。<br/>默认值：NavigationTitleMode.Free
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  titleMode(value: NavigationTitleMode): NavigationAttribute;

  /**
   * 设置页面右上角菜单。不设置时不显示菜单项。使用Array<[NavigationMenuItem]{@link NavigationMenuItem}&gt; 写法时，竖屏最多支持显示3个图标，横屏最多支持显示5个图标，多余的图标
   * 会被放入自动生成的更多图标。
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } value - 页面右上角菜单。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  menus(value: Array<NavigationMenuItem> | CustomBuilder): NavigationAttribute;

  /**
   * 设置页面右上角菜单。不设置时不显示菜单项。与[menus]{@link NavigationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)}相比，
   * 新增菜单选项。使用Array<[NavigationMenuItem]{@link NavigationMenuItem}&gt; 写法时，竖屏最多支持显示3个图标，横屏最多支持显示5个图标，多余的图标会被放入自动生成的更多图标。
   *
   *
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } items - 页面右上角菜单。
   * @param { NavigationMenuOptions } [options] - 页面右上角菜单选项。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  menus(items: Array<NavigationMenuItem> | CustomBuilder, options?: NavigationMenuOptions): NavigationAttribute;

  /**
   * 设置工具栏内容。不设置时不显示工具栏。items均分底部工具栏，在每个均分内容区布局文本和图标，文本超长时，逐级缩小，缩小之后换行，最后截断。
   *
   * **object类型说明：**
   *
   * | 名称     | 类型            | 必填   | 说明              |
   * | ------ | ------------- | ---- | --------------- |
   * | value  | string        | 是    | 工具栏单个选项的显示文本。   |
   * | icon   | string        | 否    | 工具栏单个选项的图标资源路径。 |
   * | action | () =&gt; void | 否    | 当前选项被选中的事件回调。   |
   *
   * @param { object | CustomBuilder } value - 工具栏内容。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead navigation/NavigationAttribute#toolbarConfiguration
   */
  toolBar(value: object | CustomBuilder): NavigationAttribute;

  /**
   * 设置工具栏内容。不设置时不显示工具栏。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Array<ToolbarItem> | CustomBuilder } value - 工具栏内容，使用Array<[ToolbarItem]{@link ToolbarItem}>设置的工具栏有如下特性：<
   *     br/>工具栏所有选项均分底部工具栏，在每个均分内容区布局文本和图标。<br/>竖屏模式最多支持显示5个图标，多余的图标会被放入自动生成的更多图标。横屏模式时，如果为
   *     [Split]{@link NavigationMode}模式，仍按照竖屏模式显示，如果为[Stack]{@link NavigationMode}模式需配合menus属性的Array<
   *     [NavigationMenuItem]{@link NavigationMenuItem}>使用，底部工具栏会自动隐藏，同时底部工具栏所有选项移动至页面右上角菜单。<br/>使用
   *     [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)写法为用户自定义工具栏选项，不具备以上功能。
   * @param { NavigationToolbarOptions } [options] - 工具栏选项。 包含工具栏背景颜色、工具栏背景模糊样式及模糊选项、工具栏背景属性、工具栏布局方式、是否隐藏工具栏的文本、工具栏更多图标的
   *     菜单选项。 [since 11]
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  toolbarConfiguration(value: Array<ToolbarItem> | CustomBuilder, options?: NavigationToolbarOptions): NavigationAttribute;

  /**
   * 设置是否隐藏工具栏。
   *
   * @param { boolean } value - 是否隐藏工具栏。<br>默认值：false<br/>true：隐藏工具栏；false：显示工具栏。<br/>传入参数非法时，按false处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hideToolBar(value: boolean): NavigationAttribute;

  /**
   * 设置是否隐藏工具栏。与[hideToolBar]{@link NavigationAttribute#hideToolBar(value: boolean)}相比，新增工具栏显隐时是否使用动画。
   *
   * @param { boolean } hide - 是否隐藏工具栏。<br>默认值：false<br/>true：隐藏工具栏；false：显示工具栏。<br/>传入参数非法时，按false处理。
   * @param { boolean } animated - 设置是否使用动画显隐工具栏。<br>默认值：false<br/>true：使用动画显示隐藏工具栏；false：不使用动画显示隐藏工具栏。<br/>传入参数非法时，按
   *     false处理。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  hideToolBar(hide: boolean, animated: boolean): NavigationAttribute;

  /**
   * 设置是否启用Navigation和NavDestination的工具栏[toolbarConfiguration]{@link NavigationAttribute#toolbarConfiguration}自适应能力。关闭此能
   * 力后，底部工具栏[toolbarConfiguration]{@link NavigationAttribute#toolbarConfiguration}将不会再移动至页面右上角的菜单中。该接口不适配于自定义菜单，使用该接口需采
   * 用[NavigationMenuItem]{@link NavigationMenuItem}接口来定义
   * [菜单]{@link NavigationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)}。
   *
   * @param { Optional<boolean> } enable - 是否启用Navigation和NavDestination的工具栏自适应能力。<br/>默认值：true<br/>true：启用Navigation和
   *     NavDestination的工具栏自适应能力。<br/>false：不启用Navigation和NavDestination的工具栏自适应能力。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  enableToolBarAdaptation(enable: Optional<boolean>): NavigationAttribute;

  /**
   * 当[titleMode]{@link NavigationAttribute#titleMode}为NavigationTitleMode.Free时，随着可滚动组件的滑动标题栏模式发生变化时触发此回调。
   *
   * @param { (titleMode: NavigationTitleMode) => void } callback - Title mode. [since 8 - 9]
   * @param { function } callback - 标题模式。 [since 10]
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onTitleModeChange(callback: (titleMode: NavigationTitleMode) => void): NavigationAttribute;

  /**
   * 导航页显示状态切换时触发该回调。
   *
   * @param { (isVisible: boolean) => void } callback - Whether the navigation bar is visible. The value **true** means
   *     that the navigation bar is visible, and **false** means the opposite. [since 9 - 9]
   * @param { function } callback - isVisible为true时表示显示，为false时表示隐藏。 [since 10]
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onNavBarStateChange(callback: (isVisible: boolean) => void): NavigationAttribute;

  /**
   * 当Navigation首次显示或者单双栏状态发生变化时触发该回调。
   *
   * @param { function } callback - NavigationMode.Split：当前Navigation显示为双栏;<br/>NavigationMode.Stack：当前Navigation显示为单栏。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onNavigationModeChange(callback: (mode: NavigationMode) => void): NavigationAttribute;

  /**
   * 创建NavDestination组件。使用builder函数，基于name和param构造NavDestination组件。builder下只能有一个根节点。builder中允许在NavDestination组件外包含一层自定义组
   * 件， 但自定义组件不允许设置属性和事件，否则仅显示空白。
   *
   * @param { function } builder - 创建NavDestination组件。name：NavDestination页面名称。param：开发者设置的NavDestination页面详细参数，unknown可以
   *     是用户自定义的类型。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  navDestination(builder: (name: string, param: unknown) => void): NavigationAttribute;

  /**
   * 自定义转场动画回调。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } delegate - 自定义转场动画回调。<br/>from：退场Destination的页面。<br/>to：进场Destination的页面。operation：转场类型。 <br/>返
   *     回NavigationAnimatedTransition时，表示自定义转场动画协议。<br/>undefined: 返回未定义，执行默认转场动效。
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
   * 控制组件的布局，使其扩展到非安全区域。
   *
   * > **说明：**
   * >
   * > - 组件设置ignoreLayoutSafeArea之后生效的条件为：
   * > > 设置LayoutSafeAreaType.SYSTEM时，组件的边界与非安全区域重合时组件能够延伸到非安全区域下。
   * >
   * > - 若组件扩展到非安全区域内，此时在非安全区域里触发的事件（例如：点击事件）等可能会被系统拦截，优先响应状态栏等系统组件。
   * >
   * > - 组件想要扩展到非安全区域内，需隐藏或者设置标题栏和工具栏为[STACK]{@link BarStyle}模式。
   *
   * @param { Array<LayoutSafeAreaType> } [types] - 配置扩展安全区域的类型。<br />默认值：<br />[LayoutSafeAreaType.SYSTEM]
   * @param { Array<LayoutSafeAreaEdge> } [edges] - 配置扩展安全区域的方向。<br /> 默认值：<br />
   *     [LayoutSafeAreaEdge.TOP, LayoutSafeAreaEdge.BOTTOM]。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): NavigationAttribute;

  /**
   * 当Navigation中显示Navigation首页时，设置对应系统状态栏的样式。
   *
   * > **说明：**
   * >
   * > 1. 不建议混合使用systemBarStyle属性和window设置状态栏样式的相关接口，例如：
   * > [setWindowSystemBarProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowsystembarproperties9)。
   * >
   * >
   * > 2. 初次设置Navigation/NavDestination的systemBarStyle属性时，会备份当前状态栏样式用于后续的恢复场景。
   * >
   * > 3. Navigation总是以首页（路由栈内没有NavDestination时）或者栈顶NavDestination设置的状态栏样式为准。
   * >
   * > 4. Navigation首页或者任何栈顶NavDestination页面，如果设置了有效的systemBarStyle，则会使用设置的样式，反之如果之前已经备份了样式，则使用备份的样式，否则不做任何处理。
   * >
   * > 5. [Split]{@link NavigationMode}模式下的Navigation，如果内容区没有NavDestination，则遵从Navigation首页的设置，反之则遵从栈顶NavDestination的设置。
   * >
   * >
   * > 6. 仅支持在主窗口的主页面中使用systemBarStyle设置状态栏样式。
   * >
   * > 7. 仅当Navigation占满整个页面时，设置的样式才会生效，当Navigation没有占满整个页面时，如果有备份的样式，则恢复备份的样式。
   * >
   * > 8. 当页面设置不同样式时，在页面转场开始时生效。
   * >
   * > 9. 非全屏窗口下，Navigation/NavDestination设置的状态栏不生效。
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<SystemBarStyle> } style - 系统状态栏样式。
   * @returns { NavigationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  systemBarStyle(style: Optional<SystemBarStyle>): NavigationAttribute;

  /**
   * 配置Navigation是否可恢复。如配置为可恢复，当应用进程异常退出并重新冷启动时，可自动创建该Navigation，并恢复至异常退出时的路由栈。
   *
   * > **说明：**
   * >
   * > 1. 使用该接口需要先设置Navigation的通用属性[id]{@link CommonMethod#id}，否则该接口无效。
   * >
   * > 2. 该接口需要配合NavDestination的[recoverable]{@link NavDestinationAttribute#recoverable}接口使用。
   * >
   * > 3. 恢复的过程中不可序列化的信息，例如不可序列化的参数与用户设置的onPop等，会被丢弃，无法恢复。
   * >
   * > 4. 当应用退到后台，因系统资源不足等原因被系统终止后，如果某页面已配置为可恢复，当应用再次被唤醒至前台时，系统将自动恢复该页面。详细说明请参考
   * > [UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)，详细使用请参考
   * > [示例18](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#示例18设置navigation可恢复)。
   *
   * @param { boolean } recoverable - Navigation是否可恢复，默认为不可恢复。<br/>true：路由栈可恢复；false：路由栈不可恢复。<br/>传入参数非法时，按false处理。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 14 dynamic
   */
  recoverable(recoverable: Optional<boolean>): NavigationAttribute;

  /**
   * 控制分栏场景下是否显示拖拽条。该属性在PC/2in1设备上不生效。
   *
   * @param { Optional<boolean> } isEnabled - 是否开启拖拽条，默认为无拖拽条样式。<br/>true：有拖拽条样式；false：无拖拽条样式。<br/>传入参数非法时，按false处理。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableDragBar(isEnabled: Optional<boolean>): NavigationAttribute;

  /**
   * 设置Navigation双栏模式下的分割线样式。
   *
   * @param { NavigationDividerStyle | null } style - 设置双栏分割线样式。<br> - null：隐藏分割线。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  divider(style: NavigationDividerStyle | null): NavigationAttribute;

  /**
   * 控制是否开启单双栏切换时的动效。
   *
   * @param { Optional<boolean> } isEnabled - 是否开启单双栏切换动效。<br/>true：开启单双栏切换动效；false：关闭单双栏切换动效。<br/>传入参数非法时，按true处理。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  enableModeChangeAnimation(isEnabled: Optional<boolean>): NavigationAttribute;

  /**
   * Navigation双栏模式下，支持设置右侧页面显示默认占位页，占位页仅作为UI展示页，不可获焦和响应事件。
   *
   * @param { ComponentContent } placeholder - 设置Navigation双栏模式下右侧的默认占位页。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  splitPlaceholder(placeholder: ComponentContent): NavigationAttribute;

  /**
   * 设置是否启用[NavDestination]{@link nav_destination}页面[onHidden]{@link NavDestinationAttribute#onHidden}、
   * [onShown]{@link NavDestinationAttribute#onShown}生命周期与全模态的联动触发。
   *
   * > **说明：**
   * >
   * > 从API version 23开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<boolean> } isEnabled - 是否启用NavDestination页面onShown、onHidden生命周期与全模态的联动触发。<br/>默认值：true<br/>true：全
   *     模态拉起时，会触发当前NavDestination页面的onHidden生命周期；全模态关闭时会触发当前NavDestination页面的onShown生命周期<br/>false：NavDestination页面
   *     onHidden、onShown生命周期不会因为全模态的拉起、关闭而触发。
   * @returns { NavigationAttribute } Returns the instance of the NavigationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  enableVisibilityLifecycleWithContentCover(isEnabled: Optional<boolean>): NavigationAttribute;

  /**
   * 设置导航配置。
   *
   * @param { NavigationConfiguration } config - 导航配置选项。
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
* 自定义转场动画协议，开发者需实现该协议来定义Navigation路由跳转的跳转动画。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface NavigationAnimatedTransition {

  /**
   * 转场完成回调。
   *
   * success：转场是否成功。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onTransitionEnd?: (success: boolean) => void;

  /**
   * 动画超时结束时间。
   *
   * 单位：ms。
   *
   * 取值范围：[0, +∞)。
   *
   * 默认值：可交互动画无默认值，不可交互动画默认超时时间为1000ms。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  timeout?: number;

  /**
   * 本次转场动画是否为可交互转场。
   *
   * true：本次转场动画是可交互转场；false：本次转场动画不是可交互转场。
   *
   * 默认值：false
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
   * 自定义转场动画执行回调。
   *
   * transitionProxy：自定义转场动画代理对象。
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
* 自定义转场动画代理对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface NavigationTransitionProxy {

  /**
   * 退场页面信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  from: NavContentInfo;

  /**
   * 进场页面信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  to: NavContentInfo;

  /**
   * 本次转场动画是否为可交互转场。
   *
   * true：本次转场动画是可交互转场；false：本次转场动画不是可交互转场。
   *
   * 默认值：false
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
   * 结束本次自定义转场动画，开发者需要主动触发该方法来结束本次转场，否则系统会在timeout的时间后结束本次转场。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  finishTransition(): void;

  /**
   * 取消本次交互转场，恢复到页面跳转前的路由栈(不支持取消不可交互转场动画)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelTransition?(): void;

  /**
   * 更新交互转场动画进度(不可交互动画不支持动画进度设置)。
   *
   * > **说明：**
   * >
   * > 不建议在[aboutToAppear]{@link BaseCustomComponent#aboutToAppear}中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
   *
   * @param { number } progress - 设置交互转场动画进度百分比。取值范围：[0, 1]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateTransition?(progress: number): void;
}

/**
* 跳转Destination信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface NavContentInfo {

  /**
   * NavDestination名称，如果为根视图(NavBar)，则返回值为undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  name?: string;

  /**
   * NavDestination在NavPathStack中的序号， 如果为根视图(NavBar)，则返回值为 -1。
   *
   * 取值范围：[-1, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  index: number;

  /**
   * NavDestination的模式，如果是根视图(NavBar)，则返回值为undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  mode?: NavDestinationMode;

  /**
   * NavDestination页面加载的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  param?: Object;

  /**
   * NavDestination的唯一标识符。
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
* Navigation分割线颜色及上下边距。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface NavigationDividerStyle {

  /**
   * 分割线的颜色。
   *
   * 默认值：#33000000，灰色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  color?: ResourceColor;

  /**
   * 分割线与侧边栏顶端的距离。
   *
   * 默认值：0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  startMargin?: Length;

  /**
   * 分割线与侧边栏底端的距离。
   *
   * 默认值：0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)
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
* Navigation组件是路由导航的根视图容器，一般作为Page页面的根容器使用，其内部默认包含了标题栏、内容区和工具栏，其中内容区默认首页显示导航内容（Navigation的子组件）或非首页显示（
* [NavDestination]{@link nav_destination}的子组件），首页和非首页通过路由进行切换。
*
* > **说明：**
*
* > - 该组件从API version 11开始默认支持安全区避让特性(默认值为：expandSafeArea(
* > [SafeAreaType.SYSTEM, SafeAreaType.KEYBOARD, SafeAreaType.CUTOUT], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重
* > 写该属性覆盖默认行为，API version 11之前的版本需配合[expandSafeArea]{@link CommonMethod#expandSafeArea}属性实现安全区避让。
* >
* > - [NavBar]{@link NavBar}嵌套使用Navigation时，内层NavDestination的生命周期不和外层NavDestination以及[全模态]{@link common}的生命周期进行联动。
* >
* > - Navigation未设置主副标题（[title]{@link NavigationAttribute#title}或[subTitle]{@link NavigationAttribute#subTitle}）且
* > [hideBackButton]{@link NavigationAttribute#hideBackButton}属性设置为true时，不显示标题栏。
* >
* > - Navigation的子页面切换时，新页面会主动请求焦点。
* >
* > - 不建议在[aboutToAppear]{@link BaseCustomComponent#aboutToAppear}中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。
*
* ###### 子组件
*
* 可以包含子组件。
*
* 从API version 9开始，推荐与[NavRouter]{@link nav_router}组件搭配使用。
*
* 从API version 10开始，推荐使用[NavPathStack]{@link NavPathStack}配合[navDestination]{@link NavigationAttribute#navDestination}属
* 性进行页面路由。
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