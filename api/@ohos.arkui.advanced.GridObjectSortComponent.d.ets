/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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

/*** if arkts 1.2 */
import { Resource, ResourceStr, ResourceColor, LocalizedMargin } from './arkui/component/units';
import { Prop } from './arkui/stateManagement/common';
import { Component } from './arkui/component/customComponent';
/*** endif */

/**
 * Controls the style types of GridObjectSortComponent.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Controls the style types of GridObjectSortComponent.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 * @noninterop
 */
export declare enum GridObjectSortComponentType {
  /**
   * The GridObjectSortComponent image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The GridObjectSortComponent image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  IMAGE_TEXT = "image_text",

  /**
   * The GridObjectSortComponent text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The GridObjectSortComponent text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  TEXT = "text"
}

/**
 * Declaration of the GridObjectSortComponent item.
 * @interface GridObjectSortComponentIteml
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Declaration of the GridObjectSortComponent item.
 * @interface GridObjectSortComponentIteml
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 * @noninterop
 */
export interface GridObjectSortComponentItem {
  /**
   * id of GridObjectSortComponent item.
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * id of GridObjectSortComponent item.
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  id: number | string;

  /**
   * GridObjectSortComponent item text.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * GridObjectSortComponent item text.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  text: ResourceStr;

  /**
   * selected of GridObjectSortComponent item, true is show area, false is add area.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * selected of GridObjectSortComponent item, true is show area, false is add area.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selected: boolean;

  /**
   * order of GridObjectSortComponentItem, Used for sorting dataList.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * order of GridObjectSortComponentItem, Used for sorting dataList.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  order: number;

  /**
   * image resource path of the GridObjectSortComponent item.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * image resource path of the GridObjectSortComponent item.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  url?: ResourceStr;

  /**
   * symbol of the GridObjectSortComponent item.
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  symbolStyle?: SymbolGlyphModifier;
}

/**
 * GridObjectSortComponentOptions of GridObjectSortComponent.
 * @interface GridEditOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * GridObjectSortComponentOptions of GridObjectSortComponent.
 * @interface GridEditOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 * @noninterop
 */
export interface GridObjectSortComponentOptions {
  /**
   * Configuration GridObjectSortComponent type.
   * @type { GridObjectSortComponentType }
   * @default GridObjectSortComponentType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Configuration GridObjectSortComponent type.
   * @type { GridObjectSortComponentType }
   * @default GridObjectSortComponentType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  type?: GridObjectSortComponentType;

  /**
   * The size of the GridObjectSortComponent image.
   * @type { ?number | ?Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The size of the GridObjectSortComponent image.
   * @type { ?number | ?Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  imageSize?: number | Resource;

  /**
   * The title displayed in the unedited state of the  GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The title displayed in the unedited state of the  GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  normalTitle?: ResourceStr;

  /**
   * The title displayed in the GridObjectSortComponent edit state.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The title displayed in the GridObjectSortComponent edit state.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  editTitle?: ResourceStr;

  /**
   * Display Area Title, First subtitle of the GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Display Area Title, First subtitle of the GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  showAreaTitle?: ResourceStr;

  /**
   * Add Zone Title, second subtitle of the GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Add Zone Title, second subtitle of the GridObjectSortComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  addAreaTitle?: ResourceStr;
}

/**
 * Declare struct GridObjectSortComponent.
 * @struct { GridObjectSortComponent }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Declare struct GridObjectSortComponent.
 * @struct { GridObjectSortComponent }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 * @noninterop
 */
@Component
export declare struct GridObjectSortComponent {
  /**
   * Component types and parameters of the GridObjectSortComponent.
   * @type { GridObjectSortComponentOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Component types and parameters of the GridObjectSortComponent.
   * @type { GridObjectSortComponentOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  @Prop
  options: GridObjectSortComponentOptions;

  /**
   * Data list of GridObjectSortComponent.
   * @type { Array<GridObjectSortComponentItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Data list of GridObjectSortComponent.
   * @type { Array<GridObjectSortComponentItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  dataList: Array<GridObjectSortComponentItem>;

  /**
   * Callback when Obtain edited data.
   * @type { (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Callback when Obtain edited data.
   * @type { (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onSave: (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void;

  /**
   * Cancel callback for saving data.
   * @type { () => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Cancel callback for saving data.
   * @type { () => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onCancel: () => void;

  /**
   * Build function of GridObjectSortComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Build function of GridObjectSortComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  build(): void;
}