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
import { ChildrenMainSize, CommonMethod } from './common';
import { Builder, CustomBuilder, ComponentBuilder, CustomBuilderT } from './builder';
import { ComponentContentBase } from '../ComponentContent';
import { ListDividerOptions } from "./list";
import { AttributeModifier, CommonMethod } from "./common";
import { Resource, Dimension} from './units';
/**
 * ListItemGroup组件卡片样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ListItemGroupStyle {

  /**
   * 无样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * Show default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CARD = 1
}

/**
 * ListItemGroup头部和尾部样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ListItemGroupHeaderFooterStyle {

  /**
   * 无样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NONE = 0,

  /**
   * 悬浮样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FLOATING = 1
}

/**
 * ListItemGroup组件参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ListItemGroupOptions {

  /**
   * 设置ListItemGroup头部组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  header?: CustomBuilder;

  /**
   * 使用ComponentContent类型参数设置ListItemGroup头部组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  headerComponent?: ComponentContentBase;

  /**
   * 设置ListItemGroup尾部组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  footer?: CustomBuilder;

  /**
   * 使用ComponentContent类型参数设置ListItemGroup尾部组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  footerComponent?: ComponentContentBase;

  /**
   * 列表项间距。只作用于ListItem与ListItem之间，不作用于header与ListItem、footer与ListItem之间。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  space?: double | string;

  /**
   * 列表项间距。只作用于ListItem与ListItem之间，不作用于header与ListItem、footer与ListItem之间。
   * <p><strong>说明：</strong>
   * <br/>设置为负数或者大于等于List内容区长度时，按默认值显示。
   * <br/>如果同时设置了spaceWidth和space，则spaceWidth优先生效。当spaceWidth为undefined或null时，space生效。
   * </p>。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  spaceWidth?: Dimension;

  /**
   * 设置List组件卡片样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: ListItemGroupStyle;

  /**
   * 设置ListItemGroup头部样式。
   *
   * @default ListItemGroupHeaderFooterStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  headerStyle?: ListItemGroupHeaderFooterStyle;

  /**
   * 设置ListItemGroup尾部样式。
   *
   * @default ListItemGroupHeaderFooterStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  footerStyle?: ListItemGroupHeaderFooterStyle;
}

/**
 * The ListItemGroupAttribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ListItemGroupAttribute extends CommonMethod {

  /**
   * 设置ListItem分割线样式，默认无分割线。
   *
   * strokeWidth，startMargin和endMargin不支持设置百分比。
   *
   * ListItem设置[多态样式]{@link common}时，被按压的子组件上下的分割线不绘制。
   *
   * @param { ListDividerOptions | null | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default divider(value: ListDividerOptions | null | undefined): this;

  /**
   * 设置ListItemGroup组件的子组件在主轴方向的大小信息。
   *
   * > **说明：**
   * >
   * > - 必须同时给所在的List组件设置childrenMainSize属性才可以正常生效。
   *
   * @param { ChildrenMainSize | undefined } value - 该对象用来维护子组件在主轴方向的大小信息。<br/>取值undefined时，没有childrenMainSize。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default childrenMainSize(value: ChildrenMainSize | undefined): this;

  /**
   * 设置ListItemGroup选项。
   *
   * @param { ListItemGroupOptions } [options] - ListItemGroup构造函数选项
   * @returns { ListItemGroupAttribute } 返回ListItemGroupAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setListItemGroupOptions(options?: ListItemGroupOptions): this;

  /**
   * 动态设置ListItemGroup组件的属性方法。
   *
   * @param { AttributeModifier<ListItemGroupAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<ListItemGroupAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建ListItemGroup组件。
 *
 * @param { ListItemGroupOptions } [列表item分组组件参数。] - 列表item分组组件参数。
 * @param { CustomBuilder } [content_] - 容器内容。
 * @returns { ListItemGroupAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ListItemGroup(
    options?: ListItemGroupOptions, 
    content_?: CustomBuilder,
): ListItemGroupAttribute;

/**
 * 定义ListItemGroup组件。
 *
 * @param { CustomBuilderT<ListItemGroupAttribute> } style_ - 创建ListItemGroup的样式
 * @param { CustomBuilder } [content_]
 * @returns { ListItemGroupAttribute } ListItemGroup的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function ListItemGroup(
    style_: CustomBuilderT<ListItemGroupAttribute>,
    content_?: CustomBuilder
): ListItemGroupAttribute;