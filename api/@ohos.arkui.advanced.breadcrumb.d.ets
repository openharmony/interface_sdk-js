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
 * LabelInfo of Breadcrumb.
 *
 * @interface LabelInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface LabelInfo {
  /**
   * Text of label.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  text: string;

  /**
   * Icon of label.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  icon?: ResourceStr;
}

/**
 * View of Breadcrumb.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
@Component
export declare struct Breadcrumb {
  /**
   * Labels of Breadcrumb.
   *
   * @type { Array<LabelInfo> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  @Link
  labelInfo: Array<LabelInfo>;

  /**
   * Called when the label is clicked.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onLabelClick: (index: number, event: ClickEvent) => void;

  /**
   * Called when the label begins to be dragged.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11 
   */
  onLabelDragStart: (index: number, event: DragEvent) => CustomBuilder | DragItemInfo;

  /**
   * Called when a component is dragged to the range of the label.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onLabelDragEnter: (index: number, event: DragEvent) => void;

  /**
   * Called when a component is dragged out of the label range.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onLabelDragLeave: (index: number, event: DragEvent) => void;

  /**
   * Called when the drag behavior is stopped within the scope of the label.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onLabelDrop: (index: number, event: DragEvent) => void;

  /**
   * Called when the drag behavior is canceled.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  onLabelDragCancel: (event: DragEvent) => void;

  /**
   * Build function of Breadcrumb.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  build(): void;
}
