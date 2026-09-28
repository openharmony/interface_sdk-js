/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @file Prompt
 * @kit ArkUI
 */

import { AsyncCallback } from './@ohos.base';

/**
 * The **Prompt** module provides APIs for creating and showing toasts, dialog boxes, and action menus.
 *
 * > **NOTE**
 * >
 * > The APIs of this module are deprecated since API Version 9. You are advised to use
 * > [@ohos.promptAction]{@link @ohos.promptAction} instead.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.promptAction
 */
declare namespace prompt {

  /**
   * Describes the options for showing the toast.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions
   */
  interface ShowToastOptions {

    /**
     * Text to display.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowToastOptions#message
     */
    message: string;

    /**
     * Duration that the toast will remain on the screen. The default value is 1500 ms. The value range is 1500 ms to 10
     * 000 ms. If a value less than 1500 ms is set, the default value is used. If the value greater than 10000 ms is
     * set, the upper limit 10000 ms is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowToastOptions#duration
     */
    duration?: number;

    /**
     * Distance between the toast border and the bottom of the screen. It does not have an upper limit. The default unit
     * is vp.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowToastOptions#bottom
     */
    bottom?: string | number;
  }

  /**
   * Describes the menu item button in the action menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.Button
   */
  interface Button {

    /**
     * Button text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.Button#text
     */
    text: string;

    /**
     * Text color of the button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.Button#color
     */
    color: string;
  }

  /**
   * Describes the dialog box response result.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ShowDialogSuccessResponse
   */
  interface ShowDialogSuccessResponse {

    /**
     * Index of the selected button in the **buttons** array.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowDialogSuccessResponse#index
     */
    index: number;
  }

  /**
   * Describes the options for showing the dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ShowDialogOptions
   */
  interface ShowDialogOptions {

    /**
     * Title of the dialog box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowDialogOptions#title
     */
    title?: string;

    /**
     * Text body.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowDialogOptions#message
     */
    message?: string;

    /**
     * Array of buttons in the dialog box. The array structure is **{text:'button', color: '#666666'}**. Up to three
     * buttons are supported. The first button is of the **positiveButton** type, the second is of the
     * **negativeButton** type, and the third is of the **neutralButton** type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ShowDialogOptions#buttons
     */
    buttons?: [Button, Button?, Button?];
  }

  /**
   * Describes the action menu response result.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ActionMenuSuccessResponse
   */
  interface ActionMenuSuccessResponse {

    /**
     * Index of the selected button in the **buttons** array, starting from **0**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ActionMenuSuccessResponse#index
     */
    index: number;
  }

  /**
   * Describes the options for showing the action menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.promptAction/promptAction.ActionMenuOptions
   */
  interface ActionMenuOptions {

    /**
     * Title of the menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ActionMenuOptions#title
     */
    title?: string;

    /**
     * Array of menu item buttons. The array structure is **{text:'button', color: '#666666'}**. Up to six buttons are
     * supported. If there are more than six buttons, extra buttons will not be displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.promptAction/promptAction.ActionMenuOptions#buttons
     */
    buttons: [Button, Button?, Button?, Button?, Button?, Button?];
  }

  /**
   * Shows a toast.
   *
   * @param { ShowToastOptions } options - Toast options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showToast
   */
  function showToast(options: ShowToastOptions): void;

  /**
   * Shows a dialog box. This API uses an asynchronous callback to return the result.
   *
   * @param { ShowDialogOptions } options - Dialog box options.
   * @param { AsyncCallback<ShowDialogSuccessResponse> } callback - Callback used to return the dialog box response
   *     result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showDialog
   */
  function showDialog(options: ShowDialogOptions, callback: AsyncCallback<ShowDialogSuccessResponse>): void;

  /**
   * Shows a dialog box. This API uses a promise to return the result.
   *
   * @param { ShowDialogOptions } options - Dialog box options.
   * @returns { Promise<ShowDialogSuccessResponse> } Promise used to return the dialog box response result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showDialog
   */
  function showDialog(options: ShowDialogOptions): Promise<ShowDialogSuccessResponse>;

  /**
   * Shows an action menu. This API uses a callback to return the result asynchronously.
   *
   * @param { ActionMenuOptions } options - Action menu options.
   * @param { AsyncCallback<ActionMenuSuccessResponse> } callback - Callback used to return the action menu response
   *     result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showActionMenu
   */
  function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void;

  /**
   * Shows an action menu. This API uses a promise to return the result.
   *
   * @param { ActionMenuOptions } options - Action menu options.
   * @returns { Promise<ActionMenuSuccessResponse> } Promise used to return the action menu response result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.arkui.UIContext.PromptAction#showActionMenu
   */
  function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>;
}

export default prompt;