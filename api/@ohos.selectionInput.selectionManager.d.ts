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
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';
import type Context from './application/Context';
import type { PanelInfo } from './@ohos.selectionInput.SelectionPanel';

/**
 * Declares the selectionManager for listening for word selection events and managing word selection panels.
 * @namespace selectionManager
 * @syscap SystemCapability.SelectionInput.Selection
 * @since 20
 */

declare namespace selectionManager {
  /**
   * Registers a callback to listen for the word selection completion event.
   * @param { 'selectionCompleted' } type Word selection completion event.
   * @param { Callback<SelectionInfo> } callback Callback used to listen for the word selection completion
   * event.
   * @throws { BusinessError } 33600003 Invalid operation. The selection app is not valid.
   * @syscap SystemCapability.SelectionInput.Selection
   * @since 20
   */
  function on(type: 'selectionCompleted', callback: Callback<SelectionInfo>): void;

  /**
   * Unregisters the callback used to listen for the word selection completion event.
   * @param { 'selectionCompleted' } type Word selection completion event.
   * @param { Callback<SelectionInfo> } [callback] (Optional) Callback used to listen for the word selection
   * completion event.
   * @syscap SystemCapability.SelectionInput.Selection
   * @since 20
   */
  function off(type: 'selectionCompleted', callback?: Callback<SelectionInfo>): void;

  /**
   * Creates a word selection panel.
   * @param { Context } ctx Context on which the word selection panel depends.
   * @param { PanelInfo } info Information about the word selection panel.
   * @returns { Promise<Panel> } Promise used to return the word selection panel.
   * @throws { BusinessError } 33600001 Selection service exception.
   * @throws { BusinessError } 33600003 Invalid operation. The selection app is not valid.
   * @syscap SystemCapability.SelectionInput.Selection
   * @since 20
   */
  function createPanel(ctx: Context, info: PanelInfo): Promise<Panel>;

  /**
   * Destroys the word selection panel.
   * @param { Panel } panel Word selection panel.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 33600001 Selection service exception.
   * @syscap SystemCapability.SelectionInput.Selection
   * @since 20
   */
  function destroyPanel(panel: Panel): Promise<void>;

  /**
   * Defines the information of a word selection event.
   * @typedef SelectionInfo
   * @syscap SystemCapability.SelectionInput.Selection
   * @since 20
   */
  interface SelectionInfo {
    /**
     * Selected text.
     * @type { string }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    text: string;

    /**
     * Operation for selecting words.
     * @type { SelectionType }
     * @default MOUSE_MOVE
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    selectionType: SelectionType;

    /**
     * X-coordinate of the screen where the word selection starts.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    startDisplayX: number;

    /**
     * Y-coordinate of the screen where the word selection starts.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    startDisplayY: number;

    /**
     * X-coordinate of the screen where the word selection ends.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    endDisplayX: number;

    /**
     * Y-coordinate of the screen where the word selection ends.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    endDisplayY: number;

    /**
     * X-coordinate of the window where the word selection starts.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    startWindowX: number;

    /**
     * Y-coordinate of the window where the word selection starts.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    startWindowY: number;

    /**
     * X-coordinate of the window where the word selection ends.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    endWindowX: number;

    /**
     * Y-coordinate of the window where the word selection ends.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    endWindowY: number;

    /**
     * ID of the screen where the window with selected words is located.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    displayID: number;

    /**
     * ID of the window where words are selected.
     * @type { number }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    windowID: number;

    /**
     * Bundle name of the application where words are selected.
     * @type { string }
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    bundleName: string;
  }

  /**
   * Defines a word selection panel.
   * @typedef Panel
   * @syscap SystemCapability.SelectionInput.Selection
   * @since 20
   */
  interface Panel {
    /**
     * Sets the content to be displayed in the panel.
     * @param { string } path Path of the content to be displayed.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 Selection service exception.
     * @throws { BusinessError } 33600002 This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    setUiContent(path: string): Promise<void>;

    /**
     * Shows this word selection panel.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 Selection service exception.
     * @throws { BusinessError } 33600002 This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    show(): Promise<void>;

    /**
     * Hides this word selection panel.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 Selection service exception.
     * @throws { BusinessError } 33600002 This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    hide(): Promise<void>;

    /**
     * Moves the word selection panel by dragging.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 Selection service exception.
     * @throws { BusinessError } 33600002 This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    startMoving(): Promise<void>;

    /**
     * Moves the word selection panel to the specified coordinates on the screen.
     * @param { number } x X-coordinate on the screen.
     * @param { number } y Y-coordinate on the screen.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 Selection service exception.
     * @throws { BusinessError } 33600002 This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    moveTo(x: number, y: number): Promise<void>;

    /**
     * Registers a callback to listen for the destroy event of the word selection panel.
     * @param { 'destroyed' } type Destroy event of the word selection panel.
     * @param { Callback<void> } callback Callback used to listen for the destroy event of the word selection
     * panel.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    on(type: 'destroyed', callback: Callback<void>): void;

    /**
     * Unregisters the callback used to listen for the destroy event of the word selection panel.
     * @param { 'destroyed' } type Destroy event of the word selection panel.
     * @param { Callback<void> } [callback] Callback used to listen for the destroy event of the word
     * selection panel.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    off(type: 'destroyed', callback?: Callback<void>): void;

    /**
     * Registers a callback to listen for the hide event of the word selection panel.
     * @param { 'hidden' } type Hide event of the word selection panel.
     * @param { Callback<void> } callback Callback used to listen for the hide event of the word selection
     * panel.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    on(type: 'hidden', callback: Callback<void>): void;

    /**
     * Unregisters the callback used to listen for the hide event of the word selection panel.
     * @param { 'hidden' } type Hide event of the word selection panel.
     * @param { Callback<void> } [callback] Callback used to listen for the hide event of the word selection
     * panel.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    off(type: 'hidden', callback?: Callback<void>): void;
  }

  /**
   * Enumerates the operations for selecting words.
   * @enum { number }
   * @syscap SystemCapability.SelectionInput.Selection
   * @since 20
   */
  enum SelectionType {
    /**
     * Move the cursor to select words.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    MOUSE_MOVE = 1,

    /**
     * Double-click to select words.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    DOUBLE_CLICK = 2,

    /**
     * Triple-click to select words.
     * @syscap SystemCapability.SelectionInput.Selection
     * @since 20
     */
    TRIPLE_CLICK = 3
  }
}

export default selectionManager;