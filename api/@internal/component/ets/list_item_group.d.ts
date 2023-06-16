/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Defines the list item group style.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum ListItemGroupStyle {
  /**
   * Show custom style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NONE = 0,

  /**
   * Show default style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  CARD = 1,
}

/**
 * Defines the list item group options.
 * @since 9
 */
/**
 * Defines the list item group options.
 * @crossplatform
 * @since 10
 */
declare interface ListItemGroupOptions {
  /**
   * Describes the ListItemGroup header.
   * @since 9
   */
  /**
   * Describes the ListItemGroup header.
   * @crossplatform
   * @since 10
   */
  header?: CustomBuilder;

  /**
   * Describes the ListItemGroup footer.
   * @since 9
   */
  /**
   * Describes the ListItemGroup footer.
   * @crossplatform
   * @since 10
   */
  footer?: CustomBuilder;

  /**
   * Describes the ListItemGroup space.
   * @since 9
   */
  /**
   * Describes the ListItemGroup space.
   * @crossplatform
   * @since 10
   */
  space?: number | string;

  /**
   * Describes the ListItemGroup style.
   * @type { ?ListItemGroupStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  style?: ListItemGroupStyle;
}

/**
 * Defines the ListItemGroup component
 * @since 9
 */
/**
 * Defines the ListItemGroup component
 * @crossplatform
 * @since 10
 */
interface ListItemGroupInterface {
  /**
   * Called when interface is called.
   * @since 9
   */
  /**
   * Called when interface is called.
   * @crossplatform
   * @since 10
   */
  (options?: ListItemGroupOptions): ListItemGroupAttribute;
}

/**
 * Defines the item group attribute functions.
 * @since 9
 */
/**
 * Defines the item group attribute functions.
 * @crossplatform
 * @since 10
 */
declare class ListItemGroupAttribute extends CommonMethod<ListItemGroupAttribute> {
  /**
   * Called when the ListItemGroup split line style is set.
   * @since 9
   */
  /**
   * Called when the ListItemGroup split line style is set.
   * @crossplatform
   * @since 10
   */
  divider(
    value: {
      strokeWidth: Length;
      color?: ResourceColor;
      startMargin?: Length;
      endMargin?: Length;
    } | null,
  ): ListItemGroupAttribute;
}

/**
 * Defines ListItemGroup Component instance.
 * @since 9
 */
/**
 * Defines ListItemGroup Component instance.
 * @crossplatform
 * @since 10
 */
declare const ListItemGroupInstance: ListItemGroupAttribute;

/**
 * Defines ListItemGroup Component.
 * @since 9
 */
/**
 * Defines ListItemGroup Component.
 * @crossplatform
 * @since 10
 */
declare const ListItemGroup: ListItemGroupInterface;
