/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
* 页面显示方向的枚举类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type Orientation = import('../api/@ohos.window').default.Orientation;

/**
* NavDestination通用标题。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface NavDestinationCommonTitle {

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
* NavDestination自定义标题。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface NavDestinationCustomTitle {

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
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  height: TitleHeight | Length;
}

/**
* 系统转场动画类型。
*
* > **说明：**
*
* > 设置系统转场动画，支持分别设置系统标题栏动画和内容动画。
*
* > 系统默认转场动画中只有STANDARD页面的push和pop动画有单独的标题栏动画，存在如下限制：
* >
* > - 设置NavigationSystemTransitionType为TITLE时，系统转场只有标题栏动画。
* >
* > - 设置NavigationSystemTransitionType为CONTENT时，系统转场只有内容区动画。
* >
* > - 设置NavigationSystemTransitionType为NONE时，没有系统转场动画。
* >
* > - 设置NavigationSystemTransitionType为DEFAULT时，使用默认系统转场动画。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare enum NavigationSystemTransitionType {

  /**
   * 默认系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  DEFAULT = 0,

  /**
   * 无系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  NONE = 1,

  /**
   * 标题栏系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  TITLE = 2,

  /**
   * 内容区系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CONTENT = 3,

  /**
   * 渐变类型的系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  FADE = 4,

  /**
   * 中心缩放类型的系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  EXPLODE = 5,

  /**
   * 右侧平移类型的系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  SLIDE_RIGHT = 6,

  /**
   * 底部平移类型的系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  SLIDE_BOTTOM = 7
}

/**
* NavDestination类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum NavDestinationMode {

  /**
   * 标准模式的NavDestination，适合常规的内容页面场景，如列表详情页、设置页面、表单页面等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  STANDARD = 0,

  /**
   * 默认透明。进出路由栈不影响下层NavDestination的可见性（onShown、onHidden等生命周期），只触发onActive、onInactive生命周期。
   * 适合需要透明背景或悬浮效果的场景，如弹窗式页面、浮层提示、操作确认对话框等。
   *
   * API version 13之前，默认无系统转场动画。从API version 13开始，支持系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  DIALOG = 1
}

/**
* NavDestination激活态或者非激活态变化的原因。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 17 dynamic
 */
declare enum NavDestinationActiveReason {

  /**
   * 通过页面跳转的方式使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  TRANSITION = 0,

  /**
   * 通过全模态的开启和关闭使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  CONTENT_COVER = 1,

  /**
   * 通过半模态的开启或关闭使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  SHEET = 2,

  /**
   * 通过自定义Dialog开启或关闭使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  DIALOG = 3,

  /**
   * 通过OverlayManager开启或者关闭Overlay使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  OVERLAY = 4,

  /**
   * 通过前后台切换使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  APP_STATE = 5
}

/**
* NavDestination可见性发生变化的原因。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare enum VisibilityChangeReason {

  /**
   * 通过页面跳转的方式使NavDestination可见性发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  TRANSITION = 0,

  /**
   * 通过全模态的开启和关闭使NavDestination可见性发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  CONTENT_COVER = 1,

  /**
   * 通过前后台切换使NavDestination可见性发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  APP_STATE = 2
}

/**
* NavDestination作为[Navigation]{@link navigation}的子页面根容器，用于显示Navigation的内容区。支持自定义标题栏和工具栏、管理页面生命周期、配置系统/自定义转场动画、
* 绑定可滚动组件联动等功能。当需要实现多页面导航、管理页面状态、自定义页面交互效果时，使用本组件。
*
* > **说明：**
*
* > - 该组件从API version 11开始默认支持安全区避让特性(默认值为：expandSafeArea([SafeAreaType.SYSTEM],
* > [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重写该属性覆盖默认行为，API version 11之前的版本需配合[expandSafeArea]{@link common}属性实现
* > 安全区避让。
* >
* > - NavDestination组件必须配合Navigation使用，作为Navigation目的页面的根节点，单独使用只能作为普通容器组件，不具备路由相关属性能力。
* >
* > - 如果路由栈中间页面的生命周期发生变化，跳转之前的栈顶NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)与跳转之后的栈顶
* > NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)均在最后触发。
* >
* > - NavDestination未设置主副标题并且没有返回键时，不显示标题栏。
* >
* > - 不建议设置位置、大小等布局相关属性，可能会造成页面显示异常。例如在NavDestination上添加[zIndex]{@link CommonMethod#zIndex}属性时，会覆盖掉系统设置的层级，可能导致出现显示异常。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare interface NavDestinationInterface {

  /**
   * 创建[Navigation]{@link navigation}子页面的根容器。
   *
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (): NavDestinationAttribute;
}

/**
* 路由配置信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface RouteMapConfig {

  /**
   * 页面名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  name: string;

  /**
   * 页面在当前包中的路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pageSourceFile: string;

  /**
   * 页面自定义字段信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  data: Object;
}

/**
* NavDestination上下文信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NavDestinationContext {

  /**
   * 跳转NavDestination时指定的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  pathInfo: NavPathInfo;

  /**
   * 当前NavDestination所处的导航控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  pathStack: NavPathStack;

  /**
   * 当前NavDestination的唯一ID，由系统自动生成，和组件通用属性id无关。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  navDestinationId?: string;

  /**
   * 当前NavDestination的类型。
   * 默认值：NavDestinationMode.Standard。
   * 
   * 从API version 22开始，该接口支持在原子化服务中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  mode?: NavDestinationMode;

  /**
   * 获取当前NavDestination的路由配置信息。
   *
   * @returns {RouteMapConfig | undefined} Routing configuration of the current page.
   *     <br> **undefined** is returned when the page is not configured through the route table.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getConfigInRouteMap(): RouteMapConfig | undefined;
}

/**
* 嵌套可滚动容器组件信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface NestedScrollInfo {

  /**
   * 可滚动容器组件的控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  parent: Scroller;

  /**
   * 可滚动容器组件的控制器，child对应的组件需要是parent对应组件的子组件，且组件间存在嵌套滚动关系。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  child: Scroller;
}

/**
* NavDestination自定义动画接口。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface NavDestinationTransition {

  /**
   * 转场动画结束时的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onTransitionEnd?: Callback<void>;

  /**
   * 转场动画的持续时间。
   * 
   * 取值范围：[0, +∞)
   *
   * 默认值：1000（毫秒）
   *
   * 单位：ms
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  duration?: number;

  /**
   * 动画的曲线类型，默认值为[Curve.EaseInOut]{@link Curve}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  curve?: Curve;

  /**
   * 转场动画的延迟。
   * 
   * 取值范围：[0, +∞)
   *
   * 默认值：0（毫秒）
   *
   * 单位：ms
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  delay?: number;

  /**
   * 指定转场动效的闭包函数，系统会根据闭包中对组件UI状态的修改，生成对应的过渡动画。参见[animateTo]{@link @ohos.arkui.UIContext:UIContext#animateToImmediately}中
   * 的event。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  event: Callback<void>;
}

/**
* 支持[通用属性]{@link common}。
*
* 除支持[通用事件]{@link common}外，还支持如下事件：
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class NavDestinationAttribute extends CommonMethod<NavDestinationAttribute> {

  /**
   * 设置页面标题。字符串超长时，如果不设置副标题，先缩小再换行2行后以"..."截断。如果设置副标题，先缩小后以"..."截断。
   *
   * > **说明：**
   *
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle } value - Page
   *     title. [since 9 - 13]
   * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource } value - 页面标
   *     题。 [since 9 - 13]
   * @param { NavigationTitleOptions } [options] - 标题栏选项。<br/>默认值：不设置时使用标题栏默认配置。
   *     **模型约束：** 此接口仅可在Stage模型下使用。 [since 12]
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource,
          options?: NavigationTitleOptions): NavDestinationAttribute;

  /**
   * 设置是否隐藏标题栏。
   *
   * @param { boolean } value - 是否隐藏标题栏。<br/>默认值：false<br/>true：隐藏标题栏。<br/>false：显示标题栏。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  hideTitleBar(value: boolean): NavDestinationAttribute;

  /**
   * 设置是否隐藏标题栏。与[hideTitleBar]{@link NavDestinationAttribute#hideTitleBar(value: boolean)}相比，新增标题栏显隐时是否使用动画。
   *
   * @param { boolean } hide - 是否隐藏标题栏。<br/>默认值：false<br/>true：隐藏标题栏。<br/>false：显示标题栏。
   * @param { boolean } animated - 设置是否使用动画显隐标题栏。<br/>默认值：false<br/>true：使用动画显示隐藏标题栏。<br/>false：不使用动画显示隐藏标题栏。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  hideTitleBar(hide: boolean, animated: boolean): NavDestinationAttribute;

  /**
   * 设置是否隐藏标题栏中的返回键。隐藏返回键后，用户可通过系统返回手势、[onBackPressed](#onbackpressed10)回调或自定义导航按钮返回上一页面。适用于首页或不希望用户通过标准返回键返回的场景。
   *
   * @param { Optional<boolean> } hide - 是否隐藏标题栏中的返回键。 <br/>默认值：false<br/>true：隐藏返回键。<br/>false：显示返回键。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  hideBackButton(hide: Optional<boolean>): NavDestinationAttribute;

  /**
   * 当该NavDestination页面显示时触发此回调。从API version 21开始，支持通过VisibilityChangeReason说明onShown触发的原因。
   *
   * @param { function } callback - Triggered when the navigation destination page is displayed.<br>In versions earlier
   *     than API version 21, the callback is a basic callback without parameters.<br>Since API version 21, the callback
   *     includes a **VisibilityChangeReason** parameter describing the trigger cause. [since 10 - 20]
   * @param { Callback<VisibilityChangeReason> } callback - 当该NavDestination页面显示时触发此回调。<br/>在API version 21之前，当
   *     NavDestination页面显示时触发回调。<br/>从API version 21开始，回调会提供入参VisibilityChangeReason以说明onShown触发的原因。 [since 21]
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onShown(callback: Callback<VisibilityChangeReason>): NavDestinationAttribute;

  /**
   * 当该NavDestination页面隐藏时触发此回调。从API version 21开始，支持通过VisibilityChangeReason说明onHidden触发的原因。
   *
   * @param { function } callback - Triggered when the navigation destination page is hidden.<br>In versions earlier
   *     than API version 21, the callback is a basic callback without parameters.<br>Since API version 21, the callback
   *     includes a **VisibilityChangeReason** parameter describing the trigger cause. [since 10 - 20]
   * @param { Callback<VisibilityChangeReason> } callback - 当该NavDestination页面隐藏时触发此回调。<br/>在API version 21之前，当
   *     NavDestination页面隐藏时触发回调。<br/>从API version 21开始，该回调会提供入参VisibilityChangeReason以说明onHidden触发的原因。 [since 21]
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onHidden(callback: Callback<VisibilityChangeReason>): NavDestinationAttribute;

  /**
   * 当与Navigation绑定的导航控制器中存在内容时，此回调生效。当点击返回键时，触发该回调。
   *
   * @param { function } callback - 当与Navigation绑定的导航控制器中存在内容时，此回调生效。当点击返回键时，触发该回调。<br/>返回值为true时，
   *     表示重写返回键逻辑；返回值为false时，表示回退到上一个页面。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onBackPressed(callback: () => boolean): NavDestinationAttribute;

  /**
   * NavDestination返回时触发该回调。
   *
   * > **说明：**
   *
   * > 从API version 22开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param {Optional<Callback<ESObject>>} callback - Indicates callback when pop to the navDestination with result.
   * @returns {NavDestinationAttribute}
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onResult(callback: Optional<Callback<ESObject>>): NavDestinationAttribute;

  /**
   * 设置NavDestination类型，不支持动态修改。
   *
   * > **说明：**
   *
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { NavDestinationMode } value - NavDestination类型。<br/>默认值：NavDestinationMode.STANDARD
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  mode(value: NavDestinationMode): NavDestinationAttribute;

  /**
   * 设置标题栏返回键图标。
   *
   * > **说明：**
   *
   * > - 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * >
   * > - 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。
   *
   * @param { ResourceStr | PixelMap } value - Icon of the back button on the title bar. [since 11 - 11]
   * @param { ResourceStr | PixelMap | SymbolGlyphModifier } value - 标题栏返回键图标。 [since 11 - 11]
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backButtonIcon(value: ResourceStr | PixelMap | SymbolGlyphModifier): NavDestinationAttribute;

  /**
   * 设置标题栏返回键图标和无障碍播报内容。
   *
   * > **说明：**
   *
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * >
   * > - 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。
   *
   * @param { ResourceStr | PixelMap | SymbolGlyphModifier } icon - 标题栏返回键图标。
   * @param { ResourceStr } accessibilityText - 返回键无障碍播报内容。<br/>默认值：系统语言是中文时为“返回”，系统语言是英文时为“back”。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backButtonIcon(icon: ResourceStr | PixelMap | SymbolGlyphModifier, accessibilityText?: ResourceStr): NavDestinationAttribute;

  /**
   * 设置页面右上角菜单。不设置时不显示菜单项。使用Array<[NavigationMenuItem]{@link NavigationMenuItem}&gt; 写法时，竖屏最多支持显示3个图标，横屏最多支持显示5个图标，多余的图标
   * 会被放入自动生成的更多图标。
   *
   * > **说明：**
   *
   * > - 从API version 14开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * >
   * > - 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } value - 页面右上角菜单。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  menus(value: Array<NavigationMenuItem> | CustomBuilder): NavDestinationAttribute;

  /**
   * 设置页面右上角菜单。不设置时不显示菜单项。与
   * [menus]{@link NavDestinationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)}相比，新增菜单选项。使用Array<
   * [NavigationMenuItem]{@link NavigationMenuItem}&gt; 写法时，竖屏最多支持显示3个图标，横屏最多支持显示5个图标，多余的图标会被放入自动生成的更多图标。
   *
   * > **说明：**
   *
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * >
   * > - 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder } items - 页面右上角菜单。
   * @param { NavigationMenuOptions } [options] - 页面右上角菜单选项。<br/>默认值：不设置时使用菜单默认配置。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  menus(items: Array<NavigationMenuItem> | CustomBuilder, options?: NavigationMenuOptions): NavDestinationAttribute;

  /**
   * 设置工具栏内容。未调用本接口时不显示工具栏。
   *
   * > **说明：**
   *
   * > - 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * >
   * > - 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。
   *
   * @param { Array<ToolbarItem> | CustomBuilder } toolbarParam - 工具栏内容。<br/>使用Array<[ToolbarItem]{@link ToolbarItem}>写法
   *     设置的工具栏有如下特性：<br/>-底部工具栏的每个选项均分宽度，用于显示文本和图标。<br/>-竖屏模式最多支持显示5个图标，多余的图标会被放入自动生成的更多图标中，点击更多图标可以展示剩余内容。横屏模式
   *     时，如果为[Split]{@link NavigationMode}模式，仍按照竖屏模式显示，如果为[Stack]{@link NavigationMode}模式需配合
   *     [menus]{@link NavDestinationAttribute#menus(value: Array<NavigationMenuItem> | CustomBuilder)}属性的Array<
   *     [NavigationMenuItem]{@link NavigationMenuItem}>使用，底部工具栏会自动隐藏，同时底部工具栏所有选项移动至页面右上角菜单。<br/>使用
   *     [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)写法为用户自定义工具栏选项，不具备以上功能。
   * @param { NavigationToolbarOptions } [options] - 工具栏选项，用于自定义工具栏显示样式。包含工具栏背景颜色、工具栏背景模糊样式及模糊选项、工具栏背景属性、工具栏布局方式、
   *     是否隐藏工具栏的文本、工具栏更多图标的菜单选项。当需要自定义工具栏样式时传入，不传入时使用默认工具栏样式。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  toolbarConfiguration(toolbarParam: Array<ToolbarItem> | CustomBuilder, options?: NavigationToolbarOptions): NavDestinationAttribute;

  /**
   * 设置是否隐藏工具栏。
   *
   * @param { boolean } hide - 是否隐藏工具栏。<br/>默认值：false<br/>true：隐藏工具栏。<br/>false：显示工具栏。
   * @param { boolean } [animated] - 设置是否使用动画显隐工具栏。<br/>默认值：false<br/>true：使用动画显示隐藏工具栏。<br/>false：不使用动画显示隐藏工具栏。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  hideToolBar(hide: boolean, animated?: boolean): NavDestinationAttribute;

  /**
   * 当NavDestination即将构建子组件之前会触发此回调。
   *
   * > **说明：**
   *
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { import('../api/@ohos.base').Callback<NavDestinationContext> } callback - 当NavDestination即将构建子组件之前会触发此回调。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onReady(callback: import('../api/@ohos.base').Callback<NavDestinationContext>): NavDestinationAttribute;

  /**
   * 当该NavDestination挂载之前触发此回调。在该回调中允许修改路由栈，当前帧生效。
   *
   * > **说明：**
   *
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<void> } callback - 当该NavDestination挂载之前触发此回调。在该回调中允许修改路由栈，当前帧生效。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear(callback: Callback<void>): NavDestinationAttribute;

  /**
   * 当该NavDestination卸载之前触发的生命周期(有转场动画时，在转场动画开始之前触发)。
   *
   * > **说明：**
   *
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<void> } callback - 当该NavDestination卸载之前触发的生命周期(有转场动画时，在转场动画开始之前触发)。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear(callback: Callback<void>): NavDestinationAttribute;

  /**
   * 当该NavDestination显示之前触发此回调。
   *
   * > **说明：**
   *
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<void> } callback - 当该NavDestination显示之前触发此回调。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillShow(callback: Callback<void>): NavDestinationAttribute;

  /**
   * 当该NavDestination隐藏之前触发此回调。
   *
   * > **说明：**
   *
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Callback<void> } callback - 当该NavDestination隐藏之前触发此回调。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillHide(callback: Callback<void>): NavDestinationAttribute;

  /**
   * 控制组件的布局，使其扩展到非安全区域。
   *
   * > **说明：**
   *
   * > - 组件设置ignoreLayoutSafeArea生效条件：设置LayoutSafeAreaType.SYSTEM时，若组件边界与非安全区域重合，组件可延伸到非安全区域内。
   * >
   * > - 若组件扩展到非安全区域内，此时在非安全区域里触发的事件（例如：点击事件）等可能会被系统拦截，优先响应状态栏等系统组件。
   * >
   * > - 组件想要扩展到非安全区域内，需隐藏或者设置标题栏和工具栏为[STACK]{@link BarStyle}模式。
   *
   * @param { Array<LayoutSafeAreaType> } [types] - 配置扩展安全区域的类型。<br />默认值：<br />[LayoutSafeAreaType.SYSTEM]
   * @param { Array<LayoutSafeAreaEdge> } [edges] - 配置扩展安全区域的方向。<br /> 默认值：<br />
   *     [LayoutSafeAreaEdge.TOP, LayoutSafeAreaEdge.BOTTOM]。<br/>默认扩展顶部和底部方向，用于避让系统状态栏和导航栏的安全区域。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): NavDestinationAttribute;

  /**
   * 当Navigation中显示当前NavDestination时，设置对应系统状态栏的样式。
   *
   * > **说明：**
   *
   * > - 必须配合Navigation使用，作为其Navigation目的页面的根节点时才能生效。
   * >
   * > - 其他使用限制请参考Navigation对应的[systemBarStyle]{@link NavigationAttribute#systemBarStyle}属性说明。
   * >
   * > - 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<SystemBarStyle> } style - 系统状态栏样式。设置后进入该NavDestination时，系统状态栏会切换到对应样式。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  systemBarStyle(style: Optional<SystemBarStyle>): NavDestinationAttribute;

  /**
   * 配置NavDestination是否可恢复。如配置为可恢复，当应用进程异常退出并重新冷启动时，可自动创建该NavDestination。该功能需NavDestination对应的Navigation也配置了
   * [可恢复属性]{@link NavigationAttribute#recoverable}。
   *
   * > **说明：**
   *
   * > 该接口需要配合Navigation的[recoverable]{@link NavigationAttribute#recoverable}接口使用。
   *
   * @param { boolean } recoverable - NavDestination是否可恢复，默认为不可恢复。<br/>默认值：false<br/>true：
   *      路由栈可恢复，需配合Navigation的recoverable属性使用。<br/>false：路由栈不可恢复。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 14 dynamic
   */
  recoverable(recoverable: Optional<boolean>): NavDestinationAttribute;

  /**
   * 设置NavDestination系统转场动画，支持分别设置系统标题栏动画和内容动画。该属性与customTransition同时设置时，后设置的属性生效。
   *
   * @param { NavigationSystemTransitionType } type - 系统转场动画类型。<br/>默认值：NavigationSystemTransitionType.DEFAULT
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  systemTransition(type: NavigationSystemTransitionType): NavDestinationAttribute;

  /**
   * 绑定NavDestination组件和可滚动容器组件（支持[List]{@link list}、[Scroll]{@link scroll}、[Grid]{@link grid}、
   * [WaterFlow]{@link water_flow}），当滑动可滚动容器组件时，会触发所有与其绑定的NavDestination组件的标题栏和工具栏的显示和隐藏动效，上滑隐藏，下滑显示。一个NavDestination可与多
   * 个可滚动容器组件绑定，一个可滚动容器组件也可与多个NavDestination绑定。使用示例参见
   * [示例1](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#示例1标题栏工具栏与可滚动类组件联动)。
   *
   * > **说明：**
   *
   * > - 只有NavDestination的标题栏或工具栏设置为可见时，联动效果才会生效。
   * >
   * > - 当多个可滚动容器组件绑定了同一个NavDestination组件时，滚动任何一个容器都会触发标题栏和工具栏的显示或隐藏效果。且当任何一个可滚动容器组件滑动到底部或顶部位置时，会立即触发标题栏和工具栏的显示动效。因此，为了获
   * > 得最佳用户体验，不建议同时触发多个可滚动容器组件的滚动事件。
   * >
   * > - 从API version 22开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Array<Scroller> } scrollers - 可滚动容器组件的控制器。<br/>生效前提：NavDestination的标题栏或工具栏需设置为可见状态。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  bindToScrollable(scrollers: Array<Scroller>): NavDestinationAttribute;

  /**
   * 绑定NavDestination组件和嵌套的可滚动容器组件（支持[List]{@link list}、[Scroll]{@link scroll}、[Grid]{@link grid}、
   * [WaterFlow]{@link water_flow}），当滑动父组件或子组件时，会触发所有与其绑定的NavDestination组件的标题栏和工具栏的显示和隐藏动效，上滑隐藏，下滑显示。一个NavDestination可与多
   * 个嵌套的可滚动容器组件绑定，嵌套的可滚动容器组件也可与多个NavDestination绑定。使用示例参见
   * [示例1](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#示例1标题栏工具栏与可滚动类组件联动)。
   *
   * > **说明：**
   *
   * > - 只有NavDestination的标题栏或工具栏设置为可见时，联动效果才会生效。
   * >
   * > - 当多个可滚动容器组件绑定了同一个NavDestination组件时，滚动任何一个容器都会触发标题栏和工具栏的显示或隐藏效果。且当任何一个可滚动容器组件滑动到底部或顶部位置时，会立即触发标题栏和工具栏的显示动效。因此，为了获
   * > 得最佳用户体验，不建议同时触发多个可滚动容器组件的滚动事件。
   * >
   * > - 从API version 22开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Array<NestedScrollInfo> } scrollInfos - 嵌套的可滚动容器组件的控制器。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  bindToNestedScrollable(scrollInfos: Array<NestedScrollInfo>): NavDestinationAttribute;

  /**
   * NavDestination处于激活态（处于栈顶可操作，且上层无特殊组件遮挡）时，触发该回调。使用示例参见
   * [示例5](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#示例5navdestination的onactive与oninactive生命周期)。
   *
   *
   * > **说明：**
   *
   * > 从API version 22开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is active.
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  onActive(callback: Optional<Callback<NavDestinationActiveReason>>): NavDestinationAttribute;

  /**
   * NavDestination处于非激活态（处于非栈顶不可操作，或处于栈顶时上层有特殊组件遮挡）时，触发该回调。使用示例参见
   * [示例5](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination.md#示例5navdestination的onactive与oninactive生命周期)。
   *
   *
   * > **说明：**
   *
   * > 从API version 22开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<Callback<NavDestinationActiveReason>> } callback - Indicates callback when destination is
   *     inactive.
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  onInactive(callback: Optional<Callback<NavDestinationActiveReason>>): NavDestinationAttribute;

  /**
   * 设置NavDestination自定义转场动画。
   *
   * > **说明：**
   *
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   * >
   * > - 该属性与[systemTransition]{@link NavDestinationAttribute#systemTransition}同时设置时，后设置的属性生效。
   *
   * @param { NavDestinationTransitionDelegate } delegate - NavDestination自定义动画的代理函数。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  customTransition(delegate: NavDestinationTransitionDelegate): NavDestinationAttribute;

  /**
   * 当之前存在于栈中的NavDestination页面通过[launchMode.MOVE_TO_TOP_SINGLETON]{@link LaunchMode}或
   * [launchMode.POP_TO_SINGLETON]{@link LaunchMode}移动到栈顶时，触发该回调。
   *
   * > **说明：**
   *
   * > - [replacePath]{@link NavPathStack#replacePath(info: NavPathInfo, animated?: boolean)}、
   * > [replaceDestination]{@link NavPathStack#replaceDestination}不会触发该回调。
   * >
   * > - 从API version 22开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<Callback<ESObject>> } callback - Indicates callback when destination be pushed with singleton
   *     mode.
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  onNewParam(callback: Optional<Callback<ESObject>>): NavDestinationAttribute;

  /**
   * 设置NavDestination对应的显示方向。转场到该NavDestination后，系统也会将应用主窗口切到该显示方向。
   *
   * > **说明：**
   *
   * > - 该属性满足如下全部条件时才有效：
   * > >   1. NavDestination属于应用主窗口页面，并且主窗口为全屏窗口；
   * > >   2. NavDestination所属的Navigation的大小占满整个应用页面；
   * > >   3. NavDestination类型为[NavDestinationMode]{@link NavDestinationMode}.STANDARD。
   * >
   * > - 设置显示方向的实际效果依赖于具体的设备支持情况，具体参考窗口的
   * > [setPreferredOrientation](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setpreferredorientation9-1)接
   * > 口。
   *
   * @param { Optional<Orientation> } orientation - NavDestination页面的显示方向。转场到该NavDestination后，系统会将应用主窗口切换到该显示方向。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  preferredOrientation(orientation: Optional<Orientation>): NavDestinationAttribute;

  /**
   * 设置进入该NavDestination后，显示或者隐藏系统的状态栏。
   *
   * > **说明：**
   *
   * > - 该属性满足如下全部条件时才生效：
   * > >   1. NavDestination属于应用主窗口页面，并且主窗口为全屏窗口；
   * > >   2. NavDestination所属的Navigation的大小占满整个页面；
   * > >   3. NavDestination的大小占满整个Navigation组件；
   * > >   4. NavDestination类型为[NavDestinationMode]{@link NavDestinationMode}.STANDARD。
   * >
   * > - 设置系统状态栏的实际效果依赖于具体的设备支持情况，具体参考窗口的
   * > [setSpecificSystemBarEnabled](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setspecificsystembarenabled11)
   * > 接口。
   *
   * @param { Optional<boolean> } enabled - 进入该NavDestination后，系统状态栏的显示/隐藏状态。<br/>默认值：false<br/>true：
   *     显示状态栏。<br/>false：隐藏状态栏。<br/>undefined：不改变系统状态栏的显示/隐藏状态。
   * @param { boolean } [animated] - 是否使用动画的方式显示/隐藏系统状态栏。<br/>默认值：false<br/>true：使用动画的方式显示/隐藏系统状态栏。<br/>false：不使用动画的方式显示
   *     /隐藏系统状态栏。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  enableStatusBar(enabled: Optional<boolean>, animated?: boolean): NavDestinationAttribute;

  /**
   * 设置进入该NavDestination后，显示或者隐藏系统的导航条。
   *
   * > **说明：**
   *
   * > 该属性满足如下全部条件时才生效：
   *
   *
   * > 设置系统导航条的实际效果依赖于具体的设备支持情况，具体参考窗口的
   * > [setSpecificSystemBarEnabled](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setspecificsystembarenabled11)
   * > 接口。
   *
   * @param { Optional<boolean> } enabled - 进入该NavDestination后，系统导航条的显示/隐藏状态。<br/>默认值：false<br/>true：
   *     显示导航条。<br/>false：隐藏导航条。<br/>undefined：不改变系统导航条的显示/隐藏状态。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  enableNavigationIndicator(enabled: Optional<boolean>): NavDestinationAttribute;

  /**
   * 设置NavDestination是否以全屏覆盖模式显示。
   *
   * 当参数设置为true时，在Navigation分栏模式下，当前页面会覆盖整个Navigation容器，包括NavBar和内容区。该配置作用于当前NavDestination的所有实例；当路由栈中已有页面以全屏覆盖模式显示时，其后入
   * 栈的[DIALOG]{@link NavDestinationMode}页面与未将fullScreenOverlay为false的[STANDARD]{@link NavDestinationMode}页面也会继承为全屏覆盖显
   * 示。未通过该接口设置时，NavDestination默认是普通显示模式，遵循Navigation分栏显示规则。
   *
   * @param { Optional<boolean> } fullScreenOverlay - 是否以全屏覆盖模式显示。<br/>true：全屏覆盖模式，覆盖整个Navigation容器。<br/>false：普通显示模式，遵循
   *     Navigation分栏显示规则。指定为false的STANDARD类型页面不会继承全屏显示。<br/>undefined：普通显示模式，遵循Navigation分栏显示规则。指定为undefined的页面会继承全屏显示。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fullScreenOverlay(fullScreenOverlay: Optional<boolean>): NavDestinationAttribute;

  /**
   * 设置自定义页面状态保存回调。
   *
   * 当页面被隐藏时触发。保存自定义页面状态以备恢复。
   * 用于创建页面的初始参数由导航单独保留。
   * 状态对象必须是可序列化的。
   *
   * @param { Optional<SaveStateCallback> } callback - 自定义状态保存回调
   * @returns { NavDestinationAttribute } 返回NavDestinationAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onSaveState(callback: Optional<SaveStateCallback>): NavDestinationAttribute;

  /**
   * 设置自定义页面状态恢复回调。
   *
   * 当页面重构时触发。由onSaveState保存的自定义状态将传递给此回调。
   * 如果没有保存自定义状态，则传递Null。
   *
   * @param { Optional<RestoreStateCallback> } callback - 自定义状态恢复回调
   * @returns { NavDestinationAttribute } 返回NavDestinationAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onRestoreState(callback: Optional<RestoreStateCallback>): NavDestinationAttribute;
}

/**
* 作为子页面的根容器，用于显示[Navigation]{@link navigation}的内容区。
*
* > **说明：**
*
* > - 该组件从API version 11开始默认支持安全区避让特性(默认值为：expandSafeArea([SafeAreaType.SYSTEM],
* > [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重写该属性覆盖默认行为，API version 11之前的版本需配合[expandSafeArea]{@link common}属性实现
* > 安全区避让。
* >
* > - NavDestination组件必须配合Navigation使用，作为Navigation目的页面的根节点，单独使用只能作为普通容器组件，不具备路由相关属性能力。
* >
* > - 如果路由栈中间页面的生命周期发生变化，跳转之前的栈顶NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)与跳转之后的栈顶
* > NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)均在最后触发。
* >
* > - NavDestination未设置主副标题并且没有返回键时，不显示标题栏。
* >
* > - 不建议设置位置、大小等布局相关属性，可能会造成页面显示异常。例如在NavDestination上添加[zIndex]{@link CommonMethod#zIndex}属性时，会覆盖掉系统设置的层级，可能导致出现显示异常。
*
* ###### 子组件
*
* > **说明：**
* >
* > - 子组件类型：系统组件和自定义组件，支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和
* > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。
* >
* > - 子组件个数：多个。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const NavDestination: NavDestinationInterface;

/**
* Defines NavDestination Component instance.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const NavDestinationInstance: NavDestinationAttribute;

/**
* NavDestination自定义转场动画的代理函数。
*
 * @param { NavigationOperation } operation - 当前页面转场的操作类型。
 * @param { boolean } isEnter - 当前页面是否为入场页面。<br/>true：当前页面是入场页面；false：当前页面不是入场页面。
 * @returns { Array<NavDestinationTransition> | undefined } Array of custom animations for the **NavDestination** page.
 *     If **undefined** is returned, the default system animation is used.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type NavDestinationTransitionDelegate =
    (operation: NavigationOperation, isEnter: boolean) => Array<NavDestinationTransition> | undefined;

/**
 * 自定义页面状态保存回调。
 *
 * @returns { Record<string, Object> | null } Custom page state.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type SaveStateCallback = () => Record<string, Object> | null;

/**
 * 自定义页面状态恢复回调。
 *
 * @param { Record<string, Object> | null } savedState - onSaveState保存的自定义页面状态。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type RestoreStateCallback = (savedState: Record<string, Object> | null) => void;