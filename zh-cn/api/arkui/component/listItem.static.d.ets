'use static'
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
import { CommonMethod, Bindable } from './common';
import { CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { Length } from './units';
import { ComponentContent, ComponentContentBase } from '../ComponentContent';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
import { FrameNode } from '../FrameNode';
/**
 * 滑动效果枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SwipeEdgeEffect {

  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or touch event, and spring back when released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Spring,

  /**
   * Sliding to the edge has no effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None
}

/**
 * 列表项滑动状态枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SwipeActionState {

  /**
   * Collapsed type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  COLLAPSED,

  /**
   * EXPANDED type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EXPANDED,

  /**
   * Action type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ACTIONING
}

/**
 * ListItem划出菜单的展开方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ListItemSwipeActionDirection {

  /**
   * 当列表方向是垂直方向时，LTR模式下表示ListItem的左边，RTL模式下表示ListItem的右边。当列表是水平方向时，表示ListItem的上边。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  START = 0,

  /**
   * 当列表方向是垂直方向时，LTR模式下表示ListItem的右边，RTL模式下表示ListItem的左边。当列表是水平方向时，表示ListItem的下边。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  END = 1
}

/**
 * ListItem划出菜单的管理器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ListItemSwipeActionManager {

  /**
   * 展开指定ListItem的划出菜单。
   *
   * @param { FrameNode } node - ListItem节点对象。
   * @param { ListItemSwipeActionDirection } direction - ListItem划出菜单的展开方向。
   * @throws { BusinessError } 100023 - The component type of the node is incorrect.
   * @throws { BusinessError } 106203 - The node not mounted to component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static expand(node: FrameNode, direction: ListItemSwipeActionDirection): void;

  /**
   * 收起指定ListItem的划出菜单。
   *
   * @param { FrameNode } node - ListItem节点对象。
   * @throws { BusinessError } 100023 - The component type of the node is incorrect.
   * @throws { BusinessError } 106203 - The node not mounted to component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static collapse(node: FrameNode): void;
}

/**
 * SwipeActionOptions的滑动操作项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SwipeActionItem {

  /**
   * 当列表项向左或向右滑动（当列表方向为"垂直"时），向上或向下滑动（当列表方向为"水平"时）时显示的操作项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  builder?: CustomBuilder;

  /**
   * 当列表项向左或向右滑动（当列表方向为"垂直"时），向上或向下滑动（当列表方向为"水平"时）时显示的操作项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  builderComponent?: ComponentContentBase;

  /**
   * 设置组件长距离滑动删除距离阈值。
   *
   * @default 56vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  actionAreaDistance?: Length;

  /**
   * 组件进入长距删除区后抬手时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onAction?: () => void;

  /**
   * 在滑动条目进入删除区域时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onEnterActionArea?: () => void;

  /**
   * 当滑动条目退出删除区域时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onExitActionArea?: () => void;

  /**
   * 当列表项滑动状态变化时候触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onStateChange?: (state: SwipeActionState) => void;
}

/**
 * swipeAction属性的滑动操作选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SwipeActionOptions {

  /**
   * 当列表项向左或向右滑动（当列表方向为"垂直"时），向上或向下滑动（当列表方向为"水平"时）时显示的操作项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: CustomBuilder | SwipeActionItem;

  /**
   * ListItem向左划动时item右边的组件（List垂直布局时）或ListItem向上划动时item下方的组件（List水平布局时）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end?: CustomBuilder | SwipeActionItem;

  /**
   * 滑动效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  edgeEffect?: SwipeEdgeEffect;

  /**
   * 当列表项向左或向右滑动（当列表方向为"垂直"时），向上或向下滑动（当列表方向为"水平"时）位置发生变化触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onOffsetChange?: (offset: double) => void;
}

/**
* List组件卡片样式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ListItemStyle {

  /**
   * 无样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * 显示默认卡片样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CARD = 1
}

/**
 * ListItem组件参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ListItemOptions {

  /**
   * 设置List组件卡片样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: ListItemStyle;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ListItemAttribute extends CommonMethod {

  /**
   * 设置当前ListItem元素是否可以被鼠标框选。外层List容器的鼠标框选开启时，ListItem的框选才生效。
   *
   * @param { boolean } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectable(value: boolean | undefined): this;

  /**
   * 设置当前ListItem选中状态。该属性需要在设置[多态样式]{@link common}前使用才能生效选中态样式。
   *
   * 从API version 22开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * @param { boolean | Bindable<boolean> } value - 当前ListItem选中状态。设置为true时为选中状态，设置为false时为默认状态。<br/>默认值：
   *     false <br/>Bindable<boolean>时，支持双向绑定。取值undefined时，按默认值处理。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selected(value: boolean | Bindable<boolean> | undefined): this;

  /**
   * 用于设置ListItem的划出组件。
   *
   * @param { SwipeActionOptions } value - ListItem的划出组件。 <br/>取值为undefined时，恢复默认行为，没有ListItem划出组件。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default swipeAction(value: SwipeActionOptions | undefined): this;

  /**
   * ListItem元素被鼠标框选的状态改变时触发回调。
   *
   * @param { function } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSelect(event: ((isSelected: boolean) => void) | undefined): this;

  /**
   * 设置ListItem选项。
   *
   * @param { ListItemOptions } [value] - ListItem构造函数选项
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setListItemOptions(value?: ListItemOptions): this;

  /**
   * 动态设置ListItem组件的属性方法。
   *
   * @param { AttributeModifier<ListAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<ListItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建ListItem组件。
 *
 * @param { ListItemOptions } [value]
 * @param { CustomBuilder } [content_]
 * @returns { ListItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ListItem(
    value?: ListItemOptions, 
    content_?: CustomBuilder,
): ListItemAttribute;

/**
 * 可扩展的ListItem组件的入口。
 *
 * @param { CustomBuilderT<ListItemAttribute> } style_ - The style to create a ListItem.
 * @param { CustomBuilder } [content_]
 * @returns { ListItemAttribute } The attribute of the ListItem.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function ListItem(
    style_: CustomBuilderT<ListItemAttribute>,
    content_?: CustomBuilder
): ListItemAttribute;

/**
 * 可扩展的ListItem组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableListItem implements ListItemAttribute {

  /**
   * 可扩展的ListItem组件的构造函数。
   *
   * @param { ConstructorT<T> } factory
   * @param { ListItemOptions } [value]
   * @param { CustomBuilder } [content_]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @ComponentBuilder
  static $_instantiate<T extends ExtendableListItem>(
    factory: ConstructorT<T>, 
    value?: ListItemOptions, 
    content_?: CustomBuilder
  ): T;

  /**
   * 扩展列表项组件入口
   *
   * @param { CustomBuilderT<T> } styles
   * @param { ConstructorT<T> } factory
   * @param { CustomBuilder } [content_]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  @Builder
  static _instantiateImpl<T extends ExtendableListItem>(
    styles: CustomBuilderT<T>, 
    factory: ConstructorT<T>, 
    content_?: CustomBuilder
  ): void;

  /**
   * 设置ListItem组件参数。
   *
   * @param { ListItemOptions } [value]
   * @returns { ExtendableListItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public setListItemOptions(value?: ListItemOptions): this;
}