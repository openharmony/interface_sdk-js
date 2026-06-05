
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

import { CommonMethod, Callback, LayoutSafeAreaType, LayoutSafeAreaEdge, PixelMap, AttributeModifier } from './common';

import { Builder, CustomBuilder, CustomBuilderT } from './builder';

import { Length, ResourceStr, VoidCallback } from './units';

import { TitleHeight, Curve } from './enums';

import { NavPathInfo, NavPathStack, NavigationTitleOptions, NavigationMenuItem, NavigationToolbarOptions, ToolbarItem,
    NavigationMenuOptions, NavigationOperation, SystemBarStyle } from './navigation';

import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';

import { Scroller } from './scroll';

import { ComponentBuilder } from './builder';

/**
 * Orientation实例对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Orientation = window.Orientation;

/**
 * NavDestination通用标题。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationCommonTitle {

  /**
   * 设置主标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  main: string | Resource;

  /**
   * 设置副标题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  sub: string | Resource;
}

/**
 * NavDestination自定义标题。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationCustomTitle {

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
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: TitleHeight | Length;
}

/**
 * 系统转场动画类型。
 *
 * > **说明：**
 * >
 * > 设置系统转场动画，支持分别设置系统标题栏动画和内容动画。
 * >
 * > 系统默认转场动画中只有STANDARD页面的push和pop动画有单独的标题栏动画，存在如下限制：
 * >
 * >
 * > 设置NONE或者TITLE时没有系统转场动画，设置CONTENT和DEFAULT时默认系统转场动画。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavigationSystemTransitionType {

  /**
   * 默认系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * 无系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 1,

  /**
   * 标题栏系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TITLE = 2,

  /**
   * 内容区系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT = 3,

  /**
   * 渐变类型的系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FADE = 4,

  /**
   * 中心缩放类型的系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EXPLODE = 5,

  /**
   * 右侧平移类型的系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SLIDE_RIGHT = 6,

  /**
   * 底部平移类型的系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SLIDE_BOTTOM = 7
}

/**
 * NavDestination类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavDestinationMode {

  /**
   * 标准模式的NavDestination。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  STANDARD = 0,

  /**
   * 默认透明，进出路由栈不影响下层NavDestination的可见性（onShown、onHidden等生命周期），只会触发onActive、onInactive这两个生命周期。
   *
   * API version 13之前，默认无系统转场动画。从API version 13开始，支持系统转场动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DIALOG = 1
}

/**
 * NavDestination激活态或者非激活态变化的原因。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NavDestinationActiveReason {

  /**
   * 通过页面跳转的方式使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TRANSITION = 0,

  /**
   * 通过全模态的开启和关闭使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT_COVER = 1,

  /**
   * 通过半模态的开启或关闭使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SHEET = 2,

  /**
   * 通过自定义Dialog开启或关闭使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DIALOG = 3,

  /**
   * 通过OverlayManager开启或者关闭Overlay使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  OVERLAY = 4,

  /**
   * 通过前后台切换使NavDestination激活态发生变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  APP_STATE = 5
}

/**
 * NavDestination可见性发生变化的原因。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum VisibilityChangeReason {

  /**
   * 通过页面路由改变可见性生命周期
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TRANSITION = 0,

  /**
   * 通过绑定覆盖页面改变可见性生命周期
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT_COVER = 1,

  /**
   * 通过应用切换前后台状态变化改变可见性生命周期
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  APP_STATE = 2
}

/**
 * 路由配置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RouteMapConfig {

  /**
   * 页面名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  name: string;

  /**
   * 页面在当前包中的路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pageSourceFile: string;

  /**
   * 页面自定义字段信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  data: Object;
}

/**
 * NavDestination上下文信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationContext {

  /**
   * 跳转NavDestination时指定的参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pathInfo: NavPathInfo;

  /**
   * 当前NavDestination所处的导航控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pathStack: NavPathStack;

  /**
   * 当前NavDestination的唯一ID，由系统自动生成，和组件通用属性id无关。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  navDestinationId?: string;

  /**
   * 当前NavDestination的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  mode?: NavDestinationMode;

  /**
   * 获取当前NavDestination的路由配置信息。
   *
   * @returns { RouteMapConfig | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getConfigInRouteMap(): RouteMapConfig | undefined;
}

/**
 * 嵌套可滚动容器组件信息
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NestedScrollInfo {

  /**
   * 可滚动容器组件的控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  parent: Scroller;

  /**
   * 可滚动容器组件的控制器，child对应的组件需要是parent对应组件的子组件，且组件间存在嵌套滚动关系。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  child: Scroller;
}

/**
 * NavDestination自定义动画接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationTransition {

  /**
   * 转场动画结束时的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTransitionEnd?: VoidCallback;

  /**
   * 转场动画的持续时间。
   * 取值范围为全体整数，单位：ms。 默认值： 1000（毫秒）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  duration?: int;

  /**
   * 动画的曲线类型，默认值为[Curve.EaseInOut]{@link ./../../@internal/component/ets/enums:Curve}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  curve?: Curve;

  /**
   * 转场动画的延迟。
   * 取值范围为全体整数，单位：ms。 默认值： 0（毫秒）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  delay?: int;

  /**
   * 指定转场动效的闭包函数，系统会根据闭包中对组件UI状态的修改，生成对应的过渡动画。参见
   * [animateTo](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#animateto)中的event。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  event: VoidCallback;
}

/**
 * NavDestination的模块信息
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare interface NavDestinationModuleInfo {

  /**
   * NavDestination的模块名称
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  moduleName: string;

  /**
   * NavDestination的源文件路径
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  pagePath: string;
}

/**
 * 支持[通用属性]{@link ./../../@internal/component/ets/common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NavDestinationAttribute extends CommonMethod {

  /**
   * 设置页面标题。字符串超长时，如果不设置副标题，先缩小再换行2行后以"..."截断。如果设置副标题，先缩小后以"..."截断。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle
   *     | Resource | undefined } value - NavDestination title.
   * @param { NavigationTitleOptions | undefined } [options] - 标题栏选项。<br/>取值为undefined时，按NavigationTitleOptions中的默认值处理。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource | undefined, options?: NavigationTitleOptions | undefined): this;

  /**
   * 设置是否隐藏标题栏。
   *
   * @param { boolean | undefined } value
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideTitleBar(value: boolean | undefined): this;

  /**
   * 设置是否隐藏标题栏。与[hideTitleBar]{@link NavDestinationAttribute.default hideTitleBar(value: boolean | undefined)}相比，新增标题栏显隐
   * 时是否使用动画。
   *
   * @param { boolean | undefined } hide
   * @param { boolean | undefined } animated
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideTitleBar(hide: boolean | undefined, animated: boolean | undefined): this;

  /**
   * 设置是否隐藏标题栏中的返回键。
   *
   * @param { boolean | undefined } hide
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideBackButton(hide: boolean | undefined): this;

  /**
   * 当该NavDestination页面显示时触发此回调。从API version 21开始，支持通过VisibilityChangeReason说明onShown触发的原因。
   *
   * @param { Callback<VisibilityChangeReason> | undefined } callback - 当该NavDestination页面显示时触发此回调。<br/>取值为undefined时，不使
   *     用回调函数。<br/>在API version 21之前，当NavDestination页面显示时触发回调。<br/>从API version 21开始，回调会提供入参VisibilityChangeReason以说明
   *     onShown触发的原因。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onShown(callback: Callback<VisibilityChangeReason> | undefined): this;

  /**
   * 当该NavDestination页面隐藏时触发此回调。从API version 21开始，支持通过VisibilityChangeReason说明onHidden触发的原因。
   *
   * @param { Callback<VisibilityChangeReason> | undefined } callback - 当该NavDestination页面隐藏时触发此回调。<br/>取值为undefined时，不使
   *     用回调函数。<br/>在API version 21之前，当NavDestination页面隐藏时触发回调。<br/>从API version 21开始，该回调会提供入参VisibilityChangeReason以说明
   *     onHidden触发的原因。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onHidden(callback: Callback<VisibilityChangeReason> | undefined): this;

  /**
   * 当与Navigation绑定的导航控制器中存在内容时，此回调生效。当点击返回键时，触发该回调。
   *
   * 返回值为true时，表示重写返回键逻辑，返回值为false时，表示回退到上一个页面。
   *
   * @param { function | undefined } callback - 当与Navigation绑定的导航控制器中存在内容时，此回调生效。当点击返回键时，触发该回调。<br/>取值为undefined时，不使用回调函
   *     数。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onBackPressed(callback: (() => boolean) | undefined): this;

  /**
   * NavDestination返回时触发该回调。
   *
   * > **说明：**
   * >
   * > 从API version 22开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Callback<Object | null | undefined> | undefined } callback - 页面返回回调，入参为
   *     [pop]{@link ./../../@internal/component/ets/navigation:NavPathStack#pop(result: Object, animated?: boolean)}、
   *     [popToName]{@link ./../../@internal/component/ets/navigation:NavPathStack#popToName(name: string, result: Object, animated?: boolean)}
   *     、
   *     [popToIndex]{@link ./../../@internal/component/ets/navigation:NavPathStack#popToIndex(index: number, result: Object, animated?: boolean)}
   *     接口传入的result参数。如果不传该参数，入参为undefined。<br/>取值为undefined时，不使用回调函数。
   * @returns {NavDestinationAttribute}
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onResult(callback: Callback<Object | null | undefined> | undefined): this;

  /**
   * 设置NavDestination类型，不支持动态修改。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { NavDestinationMode } value - NavDestinationMode [since 23 - 24]
   * @param { NavDestinationMode | undefined } value - NavDestination类型。<br/>取值为undefined时，按默认值处理。<br/>默认值：
   *     NavDestinationMode.STANDARD [since 23 - 24]
   * @returns { NavDestinationAttribute }    * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full    * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @stagemodelonly
   * @since 23 static
   */
  default mode(value: NavDestinationMode | undefined): this;

  /**
   * > **说明：**
   * >
   * > 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。
   *
   * 设置标题栏返回键图标和无障碍播报内容。
   *
   * @param { ResourceStr | PixelMap | SymbolGlyphModifier | undefined } icon - 标题栏返回键图标。<br/>取值为undefined时，显示返回图标。
   * @param { ResourceStr | undefined } [accessibilityText] - 返回键无障碍播报内容。<br/>取值为undefined时，按默认值处理。</br>默认值：系统语言是中文时为“返回
   *     ”，系统语言是英文时为“back”。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default backButtonIcon(icon: ResourceStr | PixelMap | SymbolGlyphModifier | undefined, accessibilityText?: ResourceStr | undefined): this;

  /**
   * > **说明：**
   * >
   * > 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。
   *
   * 设置页面右上角菜单。不设置时不显示菜单项。与
   * [menus](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination copy.md#menus12)相比，新增菜单选项。使用
   * Array<[NavigationMenuItem]{@link ./../../@internal/component/ets/navigation:NavigationMenuItem}&gt; 写法时，竖屏最多支持显示3个图
   * 标，横屏最多支持显示5个图标，多余的图标会被放入自动生成的更多图标。
   *
   * @param { Array<NavigationMenuItem> | CustomBuilder | undefined } items
   * @param { NavigationMenuOptions | undefined } [options] - 页面右上角菜单选项。<br/>取值为undefined时，按NavigationMenuOptions中的默认值处理
   *     。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default menus(items: Array<NavigationMenuItem> | CustomBuilder | undefined, options?: NavigationMenuOptions | undefined): this;

  /**
   * 设置工具栏内容。未调用本接口时不显示工具栏。
   *
   * > **说明：**
   * >
   * > - 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   * >
   * > - 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。
   *
   * @param { Array<ToolbarItem> | CustomBuilder | undefined } toolbarParam - 工具栏内容。<br/>使用Array<
   *     [ToolbarItem]{@link ./../../@internal/component/ets/navigation:ToolbarItem}>写法设置的工具栏有如下特性：<br/>-工具栏所有选项均分底部工具栏，
   *     在每个均分内容区布局文本和图标。<br/>-竖屏模式最多支持显示5个图标，多余的图标会被放入自动生成的更多图标中，点击更多图标，可以展示剩余内容。横屏模式时，如果为
   *     [Split]{@link ./../../@internal/component/ets/navigation:NavigationMode}模式，仍按照竖屏模式显示，如果为
   *     [Stack]{@link ./../../@internal/component/ets/navigation:NavigationMode}模式需配合
   *     [menus](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination copy.md#menus12)属性的Array<
   *     [NavigationMenuItem]{@link ./../../@internal/component/ets/navigation:NavigationMenuItem}>使用，底部工具栏会自动隐藏，同时底部工具栏
   *     所有选项移动至页面右上角菜单。<br/>使用[CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)写法为用户自
   *     定义工具栏选项，不具备以上功能。<br/>取值为undefined时，无内容。
   * @param { NavigationToolbarOptions | undefined } [options] - 工具栏选项。包含工具栏背景颜色、工具栏背景模糊样式及模糊选项、工具栏背景属性、工具栏布局方式、是否隐藏工具栏的
   *     文本、工具栏更多图标的菜单选项。<br/>取值为undefined时，按NavigationToolbarOptions的默认值处理。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default toolbarConfiguration(toolbarParam: Array<ToolbarItem> | CustomBuilder | undefined, options?: NavigationToolbarOptions | undefined): this;

  /**
   * 设置是否隐藏工具栏。
   *
   * @param { boolean | undefined } hide
   * @param { boolean | undefined } [animated]
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hideToolBar(hide: boolean | undefined, animated?: boolean | undefined): this;

  /**
   * 当NavDestination即将构建子组件之前会触发此回调。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Callback<NavDestinationContext> | undefined } callback - 当NavDestination即将构建子组件之前会触发此回调。<br/>取值为undefined时
   *     ，不使用回调函数。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onReady(callback: Callback<NavDestinationContext> | undefined): this;

  /**
   * 当该NavDestination挂载之前触发此回调。在该回调中允许修改路由栈，当前帧生效。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { VoidCallback | undefined } callback - 当该NavDestination挂载之前触发此回调。在该回调中允许修改路由栈，当前帧生效。<br/>取值为undefined时，不使用回
   *     调函数。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillAppear(callback: VoidCallback | undefined): this;

  /**
   * 当该NavDestination卸载之前触发的生命周期(有转场动画时，在转场动画开始之前触发)。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { VoidCallback | undefined } callback - 当该NavDestination卸载之前触发的生命周期(有转场动画时，在转场动画开始之前触发)。<br/>取值为undefined时，不
   *     使用回调函数。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillDisappear(callback: VoidCallback | undefined): this;

  /**
   * 当该NavDestination显示之前触发此回调。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { VoidCallback | undefined } callback - 当该NavDestination显示之前触发此回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillShow(callback: VoidCallback | undefined): this;

  /**
   * 当该NavDestination隐藏之前触发此回调。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { VoidCallback | undefined } callback - 当该NavDestination隐藏之前触发此回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillHide(callback: VoidCallback | undefined): this;

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
   * @param { Array<LayoutSafeAreaType> | undefined } [types] - 配置扩展安全区域的类型。<br />取值为undefined时，按照默认值处理。<br />默认值：<br />
   *     [LayoutSafeAreaType.SYSTEM]
   * @param { Array<LayoutSafeAreaEdge> | undefined } [edges] - 配置扩展安全区域的方向。<br />取值为undefined时，按照默认值处理。<br /> 默认值：<br /
   *     >[LayoutSafeAreaEdge.TOP, LayoutSafeAreaEdge.BOTTOM]。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType> | undefined, edges?: Array<LayoutSafeAreaEdge> | undefined): this;

  /**
   * 当Navigation中显示当前NavDestination时，设置对应系统状态栏的样式。
   *
   * > **说明：**
   * >
   * > - 必须配合Navigation使用，作为其Navigation目的页面的根节点时才能生效。
   * >
   * > - 其他使用限制请参考Navigation对应的
   * > [systemBarStyle](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#systembarstyle12)属性说明。
   * >
   * >
   * > - 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { SystemBarStyle | undefined } style - 系统状态栏样式。<br/>取值为undefined时，无样式。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default systemBarStyle(style: SystemBarStyle | undefined): this;

  /**
   * 配置NavDestination是否可恢复。如配置为可恢复，当应用进程异常退出并重新冷启动时，可自动创建该NavDestination。该功能需NavDestination对应的Navigation也配置了
   * [可恢复属性](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#recoverable14)。
   *
   * > **说明：**
   * >
   * > 该接口需要配合Navigation的
   * > [recoverable](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#recoverable14)接口使用。
   *
   * @param { boolean | undefined } recoverable - NavDestination是否可恢复。<br/>取值为undefined时，按默认值处理。<br/>默认值：false<br/>true：
   *     路由栈可恢复。<br/>false：路由栈不可恢复。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default recoverable(recoverable: boolean | undefined): this;

  /**
   * 设置NavDestination系统转场动画，支持分别设置系统标题栏动画和内容动画。
   *
   * @param { NavigationSystemTransitionType | undefined } type - 系统转场动画类型。<br/>取值为undefined时，按默认值处理。<br/>默认值：
   *     NavigationSystemTransitionType.DEFAULT
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default systemTransition(type: NavigationSystemTransitionType | undefined): this;

  /**
   * 绑定NavDestination组件和可滚动容器组件（支持[List]{@link ./../../@internal/component/ets/list}、
   * [Scroll]{@link ./../../@internal/component/ets/scroll}、[Grid]{@link ./../../@internal/component/ets/grid}、
   * [WaterFlow]{@link ./../../@internal/component/ets/water_flow}），当滑动可滚动容器组件时，会触发所有与其绑定的NavDestination组件的标题栏和工具栏的显示和隐藏
   * 动效，上滑隐藏，下滑显示。一个NavDestination可与多个可滚动容器组件绑定，一个可滚动容器组件也可与多个NavDestination绑定。使用示例参见
   * [示例1](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination copy.md#示例1标题栏工具栏与可滚动类组件联动)。
   *
   * > **说明：**
   * >
   * > - 只有NavDestination的标题栏或工具栏设置为可见时，联动效果才会生效。
   * >
   * > - 当多个可滚动容器组件绑定了同一个NavDestination组件时，滚动任何一个容器都会触发标题栏和工具栏的显示或隐藏效果。且当任何一个可滚动容器组件滑动到底部或顶部位置时，会立即触发标题栏和工具栏的显示动效。因此，为了获
   * > 得最佳用户体验，不建议同时触发多个可滚动容器组件的滚动事件。
   * >
   * > - 从API version 22开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Array<Scroller> | undefined } scrollers - 可滚动容器组件的控制器。<br/>取值为undefined时，无控制器。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default bindToScrollable(scrollers: Array<Scroller> | undefined): this;

  /**
   * 绑定NavDestination组件和嵌套的可滚动容器组件（支持[List]{@link ./../../@internal/component/ets/list}、
   * [Scroll]{@link ./../../@internal/component/ets/scroll}、[Grid]{@link ./../../@internal/component/ets/grid}、
   * [WaterFlow]{@link ./../../@internal/component/ets/water_flow}），当滑动父组件或子组件时，会触发所有与其绑定的NavDestination组件的标题栏和工具栏的显示和隐藏
   * 动效，上滑隐藏，下滑显示。一个NavDestination可与多个嵌套的可滚动容器组件绑定，嵌套的可滚动容器组件也可与多个NavDestination绑定。使用示例参见
   * [示例1](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination copy.md#示例1标题栏工具栏与可滚动类组件联动)。
   *
   * > **说明：**
   * >
   * > - 只有NavDestination的标题栏或工具栏设置为可见时，联动效果才会生效。
   * >
   * > - 当多个可滚动容器组件绑定了同一个NavDestination组件时，滚动任何一个容器都会触发标题栏和工具栏的显示或隐藏效果。且当任何一个可滚动容器组件滑动到底部或顶部位置时，会立即触发标题栏和工具栏的显示动效。因此，为了获
   * > 得最佳用户体验，不建议同时触发多个可滚动容器组件的滚动事件。
   * >
   * > - 从API version 22开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Array<NestedScrollInfo> | undefined } scrollInfos - 嵌套的可滚动容器组件的控制器。<br/>取值为undefined时，无控制器。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default bindToNestedScrollable(scrollInfos: Array<NestedScrollInfo> | undefined): this;

  /**
   * NavDestination处于激活态（处于栈顶可操作，且上层无特殊组件遮挡）时，触发该回调。使用示例参见
   * [示例5](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination copy.md#示例5navdestination的onactive与oninactive生命周期)
   * 。
   *
   * > **说明：**
   * >
   * > 从API version 22开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Callback<NavDestinationActiveReason> | undefined } callback - NavDestination由非激活态变为激活态的原因。<br/>取值为
   *     undefined时，不使用回调函数。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onActive(callback: Callback<NavDestinationActiveReason> | undefined): this;

  /**
   * NavDestination处于非激活态（处于非栈顶不可操作，或处于栈顶时上层有特殊组件遮挡）时，触发该回调。使用示例参见
   * [示例5](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navdestination copy.md#示例5navdestination的onactive与oninactive生命周期)
   * 。
   *
   * > **说明：**
   * >
   * > 从API version 22开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Callback<NavDestinationActiveReason> | undefined } callback - NavDestination由激活态变为非激活态的原因。<br/>取值为
   *     undefined时，不使用回调函数。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onInactive(callback: Callback<NavDestinationActiveReason> | undefined): this;

  /**
   * 设置NavDestination自定义转场动画。
   *
   * > **说明：**
   * >
   * > - 该接口不支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   * >
   * > - 该属性与[systemTransition]{@link NavDestinationAttribute.systemTransition}同时设置时，后设置的属性生效。
   *
   * @param { NavDestinationTransitionDelegate | undefined } delegate - NavDestination自定义动画的代理函数。<br/>取值为undefined时，不使用回
   *     调函数。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customTransition(delegate: NavDestinationTransitionDelegate | undefined): this;

  /**
   * 当之前存在于栈中的NavDestination页面通过
   * [launchMode.MOVE_TO_TOP_SINGLETON]{@link ./../../@internal/component/ets/navigation:LaunchMode}或
   * [launchMode.POP_TO_SINGLETON]{@link ./../../@internal/component/ets/navigation:LaunchMode}移动到栈顶时，触发该回调。
   *
   * > **说明：**
   * >
   * > -
   * > [replacePath]{@link ./../../@internal/component/ets/navigation:NavPathStack#replacePath(info: NavPathInfo, animated?: boolean)}
   * > 、[replaceDestination]{@link ./../../@internal/component/ets/navigation:NavPathStack.replaceDestination}不会触发该回调。
   * >
   * > - 从API version 22开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Callback<Object | null | undefined> | undefined } callback - Indicates callback when destination be pushed
   *     with singleton mode.
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onNewParam(callback: Callback<Object | null | undefined> | undefined): this;

  /**
   * 设置NavDestination对应的显示方向。转场到该NavDestination后，系统也会将应用主窗口切到该显示方向。
   *
   * > **说明：**
   * >
   * > - 该属性满足如下全部条件时才有效：
   * > >   1. NavDestination属于应用主窗口页面，并且主窗口为全屏窗口；
   * > >   2. NavDestination所属的Navigation的大小占满整个应用页面；
   * > >   3. NavDestination类型为[NavDestinationMode]{@link NavDestinationMode}.STANDARD。
   * >
   * > - 设置显示方向的实际效果依赖于具体的设备支持情况，具体参考窗口的
   * > [setPreferredOrientation](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setpreferredorientation9-1)接
   * > 口。
   *
   * @param { Orientation | undefined } orientation - NavDestination页面对应的Orientation。<br/>取值为undefined时，按当前设备的显示方向处理。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default preferredOrientation(orientation: Orientation | undefined): this;

  /**
   * 设置进入该NavDestination后，显示或者隐藏系统的状态栏。
   *
   * > **说明：**
   * >
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
   * @param { boolean | undefined } enabled - 进入该NavDestination后，系统状态栏的显示/隐藏状态。<br/>取值为undefined时，按默认值处理。<br/>true：显示状态栏
   *     。<br/>false：隐藏状态栏。
   * @param { boolean | undefined } [animated] - 进入该NavDestination后，系统状态栏的显示/隐藏状态。
   *     <br>取值为undefined时，按默认值处理。 默认值： false。
   * @returns { NavDestinationAttribute } 返回Navigation属性对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableStatusBar(enabled: boolean | undefined, animated?: boolean | undefined): this;

  /**
   * 设置进入该NavDestination后，显示或者隐藏系统的导航条。
   *
   * > **说明：**
   * >
   * > 该属性满足如下全部条件时才生效：
   * >
   * >
   * > 设置系统导航条的实际效果依赖于具体的设备支持情况，具体参考窗口的
   * > [setSpecificSystemBarEnabled](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setspecificsystembarenabled11)
   * > 接口。
   *
   * @param { boolean | undefined } enabled - 进入该NavDestination后，系统导航条的显示/隐藏状态。<br/>取值为undefined时，按默认值处理。<br/>true：显示导航条
   *     。<br/>false：隐藏导航条。
   * @returns { NavDestinationAttribute } Returns the instance of the NavDestinationAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableNavigationIndicator(enabled: boolean | undefined): this;

  /**
   * 动态设置NavDestination组件的属性方法。
   *
   * @param { AttributeModifier<NavDestinationAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   在当前组
   *     件上，动态设置属性方法，支持使用if/else语法。取值为undefined时，按当前组件的属性方法默认值处理。<br/>CommonMethod：通用属性和事件。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<NavDestinationAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 设置NavDestination是否以全屏覆盖模式显示。
   *
   * 当参数设置为true时，在Navigation分栏模式下，当前页面会覆盖整个Navigation容器，包括NavBar和内容区。该配置作用于当前NavDestination的所有实例；当路由栈中已有页面以全屏覆盖模式显示时，其后入
   * 栈的[DIALOG]{@link NavDestinationMode}页面与未设置fullScreenOverlay为false的[STANDARD]{@link NavDestinationMode}页面也会继承为全屏覆盖显示
   * 。未通过该接口设置时，NavDestination默认是普通显示模式，遵循Navigation分栏显示规则。
   *
   * @param { boolean | undefined } fullScreenOverlay - 是否以全屏覆盖模式显示。<br/>true：全屏覆盖模式，覆盖整个Navigation容器。<br/>false：普通显示模式，
   *     遵循Navigation分栏显示规则。指定为false的STANDARD类型页面不会继承全屏显示。<br/>undefined：普通显示模式，遵循Navigation分栏显示规则。指定为undefined的页面会继承全屏显
   *     示。
   * @returns { NavDestinationAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default fullScreenOverlay(fullScreenOverlay: boolean | undefined): this;

  /**
   * 设置navDestination选项。
   *
   * @param { NavDestinationModuleInfo } [moduleInfo] - NavDestination模块信息
   * @returns { NavDestinationAttribute } 返回NavDestinationAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setNavDestinationOptions(moduleInfo?: NavDestinationModuleInfo): this;
}

/**
 * NavDestination自定义转场动画的代理函数。
 *
 * @param { NavigationOperation } operation - 当前页面转场的操作类型。
 * @param { boolean } isEnter - 当前页面是否为入场页面。
 *     <br>true：当前页面是入场页面；
 *     false：当前页面不是入场页面。
 * @returns { Array<NavDestinationTransition> | undefined } user-set custom navDestination transitions.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NavDestinationTransitionDelegate = (operation: NavigationOperation, isEnter: boolean) => (Array<NavDestinationTransition> | undefined);

/**
 * 创建[Navigation]{@link ./../../@internal/component/ets/navigation}子页面的根容器。
 *
 * @param { CustomBuilder } [content_] - 支持多个子组件。<br/>**说明：** <br/>子组件类型：系统组件和自定义组件，支持渲染控制类型（
 *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 *     [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和
 *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。
 * @returns { NavDestinationAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function NavDestination(

  content_?: CustomBuilder
): NavDestinationAttribute;

/**
 * 定义NavDestination组件
 *
 * @param { CustomBuilderT<NavDestinationAttribute> } style_ - navDestination属性实例
 * @param { CustomBuilder } [content_] - 内容区
 * @returns { NavDestinationAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function NavDestination(
 style_: CustomBuilderT<NavDestinationAttribute>,
 content_?: CustomBuilder,
): NavDestinationAttribute;