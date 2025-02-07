​
/*
* Copyright (C) 2025 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @file This section describes the interfaces used by AtomicServiceSearch
 * @kit ArkUI
 */
import { OperationType, SelectOptions, OperationOption } from '@ohos.arkui.advanced.SubHeader';
/**
 * The event of AtomicServiceSearch
 *
 * @since 16
 */
interface OnSearchEvent {
  /**
   * Call the function when clicked the search button
   *
   * @param { function } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onSubmit?: (value: string) => void;
  /**
   * Call the function when editing the input text
   *
   * @param { EditableTextOnChangeCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onChange?: EditableTextOnChangeCallback;
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onCopy?: (value: string) => void;
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onCut?: (value: string) => void;
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   *          Executed when a paste operation is performed.
   *          { string } value - The text content to be pasted.
   *          { PasteEvent } event - The user-defined paste event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onPaste?: (value: string, event: PasteEvent) => void;
  /**
   * Called when the text selection changes.
   *
   * @param { function } callback - callback of the listened event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onTextSelectionChange?: (selectionStart: number, selectionEnd: number) => void;
  /**
   * Called when the content scrolls.
   *
   * @param { function } callback - callback of the listened event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onContentScroll?: (totalOffsetX: number, totalOffsetY: number) => void;
  /**
   * Called when judging whether the text editing change finished.
   *
   * @param { Callback<boolean> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onEditChange?: Callback<boolean>;
  /**
   * Get text value information when about to input.
   *
   * @param { Callback<InsertValue, boolean> } callback - The triggered function when text content is about to insert.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onWillInsert?: Callback<InsertValue, boolean>;
  /**
   * Get text value information when completed input.
   *
   * @param { Callback<InsertValue> } callback - The triggered function when text content has been inserted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onDidInsert?: Callback<InsertValue>;
  /**
   * Get text value information when about to delete.
   *
   * @param { Callback<DeleteValue, boolean> } callback - The triggered function when text content is about to delete.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onWillDelete?: Callback<DeleteValue, boolean>;
  /**
   * Get text value information when the deletion has been completed
   *
   * @param { Callback<DeleteValue> } callback - The triggered function when text content has been deleted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onDidDelete?: Callback<DeleteValue>;
}

/**
 * Defines AtomicServiceSearch.
 *
 * @struct AtomicServiceSearch
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
@Component
export declare struct AtomicServiceSearch {
  /**
   * default prompt text displayed in the search box. (The default value is Search, which supports globalization.)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop hint?: ResourceStr;
  /**
   * select content and events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  select?: SelectOptions;
  /**
   * ribbon (right) element style. default value: OperationType.BUTTON
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  operationType?: OperationType;
  /**
   * settings in the ribbon (right). A maximum of two entries are allowed. 
   * If more than two entries are allowed, only the first two entries take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  operationItem?: Array<OperationOption>;
  /**
   * AtomicServiceSearch events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onSearch?: OnSearchEvent;
}
