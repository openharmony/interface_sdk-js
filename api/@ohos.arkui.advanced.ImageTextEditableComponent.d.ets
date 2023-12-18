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
 * Controls the style types of ImageTextEditableComponent.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export declare enum ImageTextEditableComponentType {
  /**
   * The ImageTextEditableComponent image text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  IMAGE_TEXT = "image_text",

  /**
   * The ImageTextEditableComponent text type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  TEXT = "text"
}


/**
 * Declaration of the ImageTextEditableComponent item.
 * @interface ImageTextEditableComponentIteml
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export interface ImageTextEditableComponentItem {
  /**
   * id of ImageTextEditableComponent item.
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  id: number | string;

  /**
   * ImageTextEditableComponent item id.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  text: ResourceStr;

  /**
   * state of ImageTextEditableComponent item.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  state: boolean;

  /**
   * order of ImageTextEditableComponentItem, Used for sorting dataList. 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  order: number;

  /**
   * image resource path of the ImageTextEditableComponent item.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  url?: ResourceStr;
}

/**
 * ImageTextEditableComponentOptions of ImageTextEditableComponent.
 * @interface GridEditOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
export interface ImageTextEditableComponentOptions {
  /**
   * Configuration ImageTextEditableComponent type.
   * @type { ImageTextEditableComponentType }
   * @default ImageTextEditableComponentType.TEXT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  type?: ImageTextEditableComponentType;

  /**
   * The size of the ImageTextEditableComponent image.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  imageSize?: number;

  /**
   * The title displayed in the unedited state of the  ImageTextEditableComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  title?: ResourceStr;

  /**
   * The title displayed in the ImageTextEditableComponent edit state.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  editTitle?: ResourceStr;

  /**
   * First subtitle of the ImageTextEditableComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  firstSubtitle?: ResourceStr;

  /**
   * second subtitle of the ImageTextEditableComponent.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  secondSubtitle?: ResourceStr;
}

/**
 * Declare struct ImageTextEditableComponent.
 * @struct { ImageTextEditableComponent }
 * @since 11
 */
@Component
export declare struct ImageTextEditableComponent {
  /**
   * Component types and parameters of the ImageTextEditableComponent.
   * @type { ImageTextEditableComponentOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  @Prop
  options: ImageTextEditableComponentOptions;

  /**
   * data list of ImageTextEditableComponent.
   * @type { Array<ImageTextEditableComponentItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  dataList: Array<ImageTextEditableComponentItem>;

  /**
   * Callback when Obtain edited data.
   * @type { (select: Array<ImageTextEditableComponentItem>, unselect: Array<ImageTextEditableComponentItem>) => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  onSave: (select: Array<ImageTextEditableComponentItem>, unselect: Array<ImageTextEditableComponentItem>) => void;

  /**
   * Cancel callback for saving data.
   * @type { () => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  onCancel: () => void;

  /**
   * Build function of ImageTextEditableComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  build(): void;
}