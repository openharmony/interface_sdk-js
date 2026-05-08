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
 * This module provides word selection management capabilities, including creating, displaying, moving, hiding, and 
 * destroying windows, listening for word selection events, and retrieving the selected text.
 * 
 * > **NOTE**
 * > - This module is supported only on PCs/2-in-1 devices.
 * > - APIs of this module can be called only by applications that integrate the ExtensionAbility for word selection.
 *
 * @syscap SystemCapability.SelectionInput.Selection
 * @systemapi [since 20 - 23]
 * @publicapi [since 24]
 * @stagemodelonly
 * @since 20 dynamic
 * @since 24 static
 */

declare namespace selectionManager {
  /**
   * Registers a callback to listen for the word selection completion event. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { 'selectionCompleted' } type - Event type, which is **'selectionCompleted'**.
   * @param { Callback<SelectionInfo> } callback - Callback used to return the word selection information.
   * @throws { BusinessError } 33600003 - The application calling the API does not match the application
   *     selected in the system settings.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @since 20 dynamic
   */
  function on(type: 'selectionCompleted', callback: Callback<SelectionInfo>): void;

  /**
   * Registers a callback to listen for the word selection completion event. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { Callback<SelectionInfo> } callback - Callback used to listen for the word selection completion event.
   * @throws { BusinessError } 33600003 - The application calling the API does not match the application
   *     selected in the system settings.
   * @syscap SystemCapability.SelectionInput.Selection
   * @stagemodelonly
   * @since 24 static
   */
  function onSelectionComplete(callback: Callback<SelectionInfo>): void;

  /**
   * Unregisters the callback used to listen for the word selection completion event. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { 'selectionCompleted' } type - Event type, which is **'selectionCompleted'**.
   * @param { Callback<SelectionInfo> } [callback] - Callback to unregister. If this parameter is not specified, this
   *     API unregisters all callbacks for the specified type.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @since 20 dynamic
   */
  function off(type: 'selectionCompleted', callback?: Callback<SelectionInfo>): void;

  /**
   * Unregisters the callback used to listen for the word selection completion event. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { Callback<SelectionInfo> } [callback] - (Optional) Callback used to listen
   *     for the word selectioncompletion event.
   * @syscap SystemCapability.SelectionInput.Selection
   * @stagemodelonly
   * @since 24 static
   */
  function offSelectionComplete(callback?: Callback<SelectionInfo>): void;

  /**
   * Obtains this selected text content. This API uses a promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the selected content.
   * @throws { BusinessError } 33600001 - Selection service exception.
   * @throws { BusinessError } 33600004 - The interface is called too frequently.
   * @throws { BusinessError } 33600005 - The interface is called at the wrong time.
   * @throws { BusinessError } 33600006 - The current application is prohibited from accessing content.
   * @throws { BusinessError } 33600007 - The length of selected content is out of range.
   * @throws { BusinessError } 33600008 - Getting the selected content times out.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 22 - 23]
   * @publicapi [since 24]
   * @since 22 dynamic
   * @since 24 static
   */
  function getSelectionContent(): Promise<string>;

  /**
   * Creates a word selection panel. This API uses a promise to return the result.
   * Only one [main panel]{@link @ohos.selectionInput.SelectionPanel} and one 
   * [menu panel]{@link @ohos.selectionInput.SelectionPanel} can be created for a single word selection application.
   *
   * @param { Context } ctx - Context that the current word selection panel depends on.
   * @param { PanelInfo } info - Information about the word selection panel.
   * @returns { Promise<Panel> } Promise used to return the word selection panel.
   * @throws { BusinessError } 33600001 - Selection service exception.
   * @throws { BusinessError } 33600003 - The application calling the API does not match the application
   *     selected in the system settings.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  function createPanel(ctx: Context, info: PanelInfo): Promise<Panel>;

  /**
   * Destroys the word selection panel. This API uses a promise to return the result.
   *
   * @param { Panel } panel - Word selection panel to destroy.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 33600001 - Selection service exception.
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  function destroyPanel(panel: Panel): Promise<void>;

  /**
   * Defines the information of a word selection event.
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  interface SelectionInfo {
    /**
     * Operation for selecting words.
     *
     * @default MOUSE_MOVE
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    selectionType: SelectionType;

    /**
     * X-coordinate of the screen where the word selection starts, in px.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startDisplayX: int;

    /**
     * Y-coordinate of the screen where the word selection starts, in px.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startDisplayY: int;

    /**
     * X-coordinate of the screen where the word selection ends, in px.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    endDisplayX: int;

    /**
     * Y-coordinate of the screen where the word selection ends, in px.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    endDisplayY: int;

    /**
     * X-coordinate of the window where the word selection starts, in px.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startWindowX: int;

    /**
     * Y-coordinate of the window where the word selection starts, in px.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startWindowY: int;

    /**
     * X-coordinate of the window where the word selection ends, in px.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    endWindowX: int;

    /**
     * Y-coordinate of the window where the word selection ends, in px.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    endWindowY: int;

    /**
     * ID of the screen where the window with selected words is located.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    displayID: int;

    /**
     * ID of the window where words are selected.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    windowID: int;

    /**
     * Bundle name of the application where words are selected.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    bundleName: string;
  }

  /**
   * Represents the word selection panel.
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  interface Panel {
    /**
     * Sets the page content for the word selection panel. This API uses a promise to return the result.
     *
     * @param { string } path - Path of the page content to be set. This path is configured in the
     *     **resources/base/profile/main_pages.json** file of the project in the stage model. The FA model is not
     *     supported.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    setUiContent(path: string): Promise<void>;

    /**
     * Shows the word selection panel. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    show(): Promise<void>;

    /**
     * Hides the word selection panel. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     * @since 24 static
     */
    hide(): Promise<void>;

    /**
     * Moves the word selection panel by dragging. This API uses a promise to return the result. This API must be 
     * written in the **onTouch** callback and the event type must be **TouchType.Down**.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    startMoving(): Promise<void>;

    /**
     * Moves the word selection panel to the specified coordinates on the screen. This API uses a promise to return the
     * result.
     *
     * @param { int } x - Value of the movement along the X axis, in px.
     * @param { int } y - Value of the movement along the Y axis, in px.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi
     * @since 20 dynamiconly
     * @deprecated since 24
     * @useinstead selectionManager.Panel.moveToGlobalDisplay
     */
    moveTo(x: int, y: int): Promise<void>;

    /**
     * Moves the word selection panel to the specified coordinates on the screen. This API uses a promise to return the
     * result.
     *
     * @param { int } x - Value of the movement along the X axis, in px.
     * @param { int } y - Value of the movement along the Y axis, in px.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 33600001 - Selection service exception.
     * @throws { BusinessError } 33600002 - This selection window has been destroyed.
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    moveToGlobalDisplay(x: int, y: int): Promise<void>;

    /**
     * Registers a callback to listen for the destroy event of the word selection panel. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { 'destroyed' } type - Event type, which is **'destroyed'**.
     * @param { Callback<void> } callback - Callback function that returns no value.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    on(type: 'destroyed', callback: Callback<void>): void;

    /**
     * Registers a callback to listen for the destroy event of the word selection panel. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { Callback<void> } callback - Callback function that returns no value.
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    onDestroy(callback: Callback<void>): void;

    /**
     * Unregisters the callback used to listen for the destroy event of the word selection panel. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { 'destroyed' } type - Event type, which is **'destroyed'**.
     * @param { Callback<void> } [callback] - Callback function that returns no value. If this parameter is not
     *     specified, this API unregisters all callbacks for the specified type.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    off(type: 'destroyed', callback?: Callback<void>): void;

    /**
     * Unregisters the callback used to listen for the destroy event of the word selection panel. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { Callback<void> } [callback] - Callback function that returns no value. If this parameter is notspecified,
     *     this API unregisters all callbacks for the specified type.
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    offDestroy(callback?: Callback<void>): void;

    /**
     * Registers a callback to listen for the hide event of the word selection panel. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { 'hidden' } type - Event type, which is **'hidden'**.
     * @param { Callback<void> } callback - Callback function that returns no value.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    on(type: 'hidden', callback: Callback<void>): void;

    /**
     * Registers a callback to listen for the hide event of the word selection panel. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { Callback<void> } callback - Callback function that returns no value.
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    onHide(callback: Callback<void>): void;

    /**
     * Unregisters the callback used to listen for the hide event of the word selection panel. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { 'hidden' } type - Event type, which is **'hidden'**.
     * @param { Callback<void> } [callback] - Callback function that returns no value. If this parameter is not
     *     specified, this API unregisters all callbacks for the specified type.
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     */
    off(type: 'hidden', callback?: Callback<void>): void;

    /**
     * Unregisters the callback used to listen for the hide event of the word selection panel. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { Callback<void> } [callback] - Callback function that returns no value. If this parameter is not
     *     specified, this API unregisters all callbacks for the specified type.
     * @syscap SystemCapability.SelectionInput.Selection
     * @stagemodelonly
     * @since 24 static
     */
    offHide(callback?: Callback<void>): void;
  }

  /**
   * Enumerates the operations for selecting words.
   *
   * @syscap SystemCapability.SelectionInput.Selection
   * @systemapi [since 20 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 20 dynamic
   * @since 24 static
   */
  enum SelectionType {
    /**
     * Move the cursor to select words.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    MOUSE_MOVE = 1,

    /**
     * Double-click to select words.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    DOUBLE_CLICK = 2,

    /**
     * Triple-click to select words.
     *
     * @syscap SystemCapability.SelectionInput.Selection
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @stagemodelonly
     * @since 20 dynamic
     * @since 24 static
     */
    TRIPLE_CLICK = 3
  }
}

export default selectionManager;