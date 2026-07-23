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
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
/**
 * GridItem样式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GridItemStyle {

  /**
   * 无样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * 显示Hover、Press态样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PLAIN = 1
}

/**
 * GridItem样式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GridItemOptions {

  /**
   * 设置GridItem样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: GridItemStyle;
}

/**
 * The GridItemAttribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface GridItemAttribute extends CommonMethod {

  /**
   * 设置当前元素起始行号。
   *
   * @param { int | undefined } value
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default rowStart(value: int | undefined): this;

  /**
   * 设置当前元素终点行号。
   *
   * @param { int | undefined } value
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default rowEnd(value: int | undefined): this;

  /**
   * 设置当前元素起始列号。
   *
   * @param { int | undefined } value
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnStart(value: int | undefined): this;

  /**
   * 设置当前元素终点列号。
   *
   * @param { int | undefined } value
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnEnd(value: int | undefined): this;

  /**
   * 设置当前GridItem元素是否可以被鼠标框选。外层Grid容器的鼠标框选开启时，GridItem的框选才生效。
   *
   * 该属性需要在设置[多态样式]{@link common}前使用才能生效选中态样式。
   *
   * @param { boolean | undefined } value
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectable(value: boolean | undefined): this;

  /**
   * 设置当前GridItem选中状态。
   *
   * 从API version 23开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * 该属性需要在设置[多态样式]{@link common}前使用才能生效选中态样式。
   *
   * @param { boolean | Bindable<boolean> | undefined } value
   * @returns { GridItemAttribute }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selected(value: boolean | Bindable<boolean> | undefined): this;

  /**
   * GridItem元素被鼠标框选的状态改变时触发回调。
   *
   * @param { function | undefined } event
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSelect(event: ((isSelected: boolean) => void) | undefined): this;

  /**
   * 动态设置GridItem组件的属性方法。
   *
   * @param { AttributeModifier<GridItemAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<GridItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建网格容器中单项内容容器。
 *
 * @param { GridItemOptions } [value] - 为GridItem提供可选参数。
 * @param { CustomBuilder } [content_] - 容器内容。
 * @returns { GridItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function GridItem(
    value?: GridItemOptions, 
    content_?: CustomBuilder,
): GridItemAttribute;

/**
 * 可扩展的GridItem组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableGridItem implements GridItemAttribute {

  /**
   * 可扩展的GridItem组件的构造函数。
   *
   * @param { ConstructorT<T> } factory
   * @param { GridItemOptions } [value]
   * @param { CustomBuilder } [content_]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @ComponentBuilder
  static $_instantiate<T extends ExtendableGridItem>(
    factory: ConstructorT<T>, 
    value?: GridItemOptions, 
    content_?: CustomBuilder
  ): T;

  /**
   * 扩展网格项组件入口
   *
   * @param { CustomBuilderT<T> } styles
   * @param { ConstructorT<T> } factory
   * @param { CustomBuilder } [content_]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @Builder
  static _instantiateImpl<T extends ExtendableGridItem>(
    styles: CustomBuilderT<T>, 
    factory: ConstructorT<T>, 
    content_?: CustomBuilder
  ): void;

  /**
   * 设置GridItem组件参数。
   *
   * @param { GridItemOptions } [value]
   * @returns { ExtendableGridItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public setGridItemOptions(value?: GridItemOptions): this;
}