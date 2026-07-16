'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
import { Resource, ResourceStr, ResourceColor, LocalizedMargin } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
import { Component } from '@ohos.arkui.component';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { Builder } from '@ohos.arkui.component';
/**
 * Enumerates display types for nodes in the **GridObjectSortComponent** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum GridObjectSortComponentType {
  /**
   * Image with text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  IMAGE_TEXT = 'image_text',
  /**
   * Text only.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEXT = 'text'
}
/**
 * Provides data item configuration for the **GridObjectSortComponent** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface GridObjectSortComponentItem {
  /**
   * Data ID, which must be unique.
   *
   * The default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  id: int | string;
  /**
   * Text information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text: ResourceStr;
  /**
   * Whether the grid object has been added. The value **true** means that the grid object has been added, and **false**
   * means the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selected: boolean;
  /**
   * Sequence number.
   * The value must be greater than or equal to 0. Default value: **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  order: int;
  /**
   * URL of the image. Required when **GridObjectSortComponentType** is set to **IMAGE_TEXT**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  url?: ResourceStr;
  /**
   * Symbol resource of the image. Required when **GridObjectSortComponentType** is set to **IMAGE_TEXT**. The priority
   * of this property is higher than that of **url**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  symbolStyle?: SymbolGlyphModifier;
}
/**
 * Provides configuration options for the **GridObjectSortComponent** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface GridObjectSortComponentOptions {
  /**
   * Component display type: text only or image with text.
   *
   * Default value: **GridObjectSortComponentType.TEXT**
   *
   * @default GridObjectSortComponentType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type?: GridObjectSortComponentType;
  /**
   * Image size, in vp.
   *
   * The value must be greater than or equal to 0.
   *
   * Default value: **56vp**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageSize?: int | Resource;
  /**
   * Title displayed in the non-editing state.
   *
   * Default value: **Channel**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  normalTitle?: ResourceStr;
  /**
   * Title displayed in the editing state.
   *
   * Default value: **Edit**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  editTitle?: ResourceStr;
  /**
   * First subtitle of the display area.
   *
   * Default value: **Drag to sort**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showAreaTitle?: ResourceStr;
  /**
   * Second subtitle of the display area.
   *
   * Default value: **Tap to add**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  addAreaTitle?: ResourceStr;
}
/**
 * **GridObjectSortComponent** is a grid object organizer that you can use to edit, drag to sort, add, and delete grid
 * objects.
 *
 * > **NOTE**
 * >
 * > - If the **GridObjectSortComponent** component has [universal attributes]{@link ./@internal/component/ets/common}
 * > and [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node
 * > rather than the **GridObjectSortComponent** component itself. As a result, the configured universal attributes and
 * > universal events may fail to take effect or behave as intended. For this reason, avoid using universal attributes
 * > and events with the **GridObjectSortComponent** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct GridObjectSortComponent {
  /**
   * Component configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  options: GridObjectSortComponentOptions;
  /**
   * Data to pass. The maximum data length is 50 characters. If it is exceeded, only the first 50 characters are used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dataList: Array<GridObjectSortComponentItem>;
  /**
   * Callback invoked when changes are saved. The data after the changes is returned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSave: (select: Array<GridObjectSortComponentItem>, unselect: Array<GridObjectSortComponentItem>) => void;
  /**
   * Callback invoked when changes are canceled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCancel: () => void;
  /**
   * Build function of GridObjectSortComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}
