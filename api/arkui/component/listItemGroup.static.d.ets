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
 * Defines the list item group style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ListItemGroupStyle {

  /**
   * Show custom style.
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
 * Defines the list item group header/footer style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ListItemGroupHeaderFooterStyle {

  /**
   * Show none style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NONE = 0,

  /**
   * Show floating style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FLOATING = 1
}

/**
 * Defines the list item group options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ListItemGroupOptions {

  /**
   * Describes the ListItemGroup header.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  header?: CustomBuilder;

  /**
   * Describes the ListItemGroup headerComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  headerComponent?: ComponentContentBase;

  /**
   * Describes the ListItemGroup footer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  footer?: CustomBuilder;

  /**
   * Describes the ListItemGroup footerComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  footerComponent?: ComponentContentBase;

  /**
   * Describes the ListItemGroup space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  space?: double | string;

  /**
   * Spacing between list items along the main axis.
   * <p><strong>NOTE</strong>.
   * <br>If this parameter is set to a negative number or a value greater than or equal to the length of the list
   * content area, the default value is used.
   * <br>If this parameter is set to a value less than the width of the list divider, the width of the list divider
   * is used as the spacing.
   * <br> Child components of <em>ListItemGroup</em> whose <em>visibility</em> attribute is set to <em>None</em>
   * are not displayed, but the spacing above and below them still takes effect.
   * <br> If both spaceWidth and space are set, spaceWidth will take precedence.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  spaceWidth?: Dimension;

  /**
   * Describes the ListItemGroup style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: ListItemGroupStyle;

  /**
   * Describes the ListItemGroup header style.
   *
   * @default ListItemGroupHeaderFooterStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  headerStyle?: ListItemGroupHeaderFooterStyle;

  /**
   * Describes the ListItemGroup footer style.
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
   * Called when the ListItemGroup split line style is set.
   * Anonymous Object Rectification.
   *
   * @param { ListDividerOptions | null | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default divider(value: ListDividerOptions | null | undefined): this;

  /**
   * Set children main size for ListItemGroup.
   *
   * @param { ChildrenMainSize | undefined } value - children main size for ListItemGroup
   * @returns { this } the attribute of the ListItemGroup.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default childrenMainSize(value: ChildrenMainSize | undefined): this;

  /**
   * Set ListItemGroup options.
   *
   * @param { ListItemGroupOptions } [options] - ListItemGroup constructor options
   * @returns { ListItemGroupAttribute } Returns the instance of the ListItemGroupAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  default setListItemGroupOptions(options?: ListItemGroupOptions): this;

  /**
   * Called attributeModifier.
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
 * Defines ListItemGroup Component.
 *
 * @param { ListItemGroupOptions } [options] - options
 * @param { CustomBuilder } [content_] - container
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
): ListItemGroupAttribute

/**
 * Defines ListItemGroup Component.
 *
 * @param { CustomBuilderT<ListItemGroupAttribute> } style_ - The style to create a ListItemGroup.
 * @param { CustomBuilder } [content_]
 * @returns { ListItemGroupAttribute } The attribute of the ListItemGroup.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 * @noninterop
 */
@Builder
export declare function ListItemGroup(
    style_: CustomBuilderT<ListItemGroupAttribute>,
    content_?: CustomBuilder
): ListItemGroupAttribute;