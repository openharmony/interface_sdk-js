/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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

/**
 * Describes the options for showing the toast.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @since 3 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.promptAction/promptAction.ShowToastOptions
 */
export interface ShowToastOptions {
  /**
   * Text to display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions#message
   */
  message: string;

  /**
   * Duration that the toast will remain on the screen. The default value is 1500 ms. The recommended value range is 150
   * 0 ms to 10000 ms. If a value less than 1500 ms is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions#duration
   */
  duration?: number;

  /**
   * Distance between the toast border and the bottom of the screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 5 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.promptAction/promptAction.ShowToastOptions#bottom
   */
  bottom?: string | number;
}

/**
 * Defines the display information of a button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export interface Button {
  /**
   * Text of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  text: string;

  /**
   * Color of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  color: string;
}

/**
 * Defines the dialog box response result.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export interface ShowDialogSuccessResponse {
  /**
   * Index of the clicked button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  index: number;
}

/**
 * Describes the options for showing the dialog box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 3 dynamic
 */
export interface ShowDialogOptions {
  /**
   * Title of the text to display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  title?: string;

  /**
   * Text body.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  message?: string;

  /**
   * Array of buttons in the dialog box. The structure is {text:'button', color: '#666666'}, which supports 1 to 3
   * buttons. If more than 3 buttons are specified, the dialog box is not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  buttons?: [Button, Button?, Button?];

  /**
   * Callback invoked upon success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  success?: (data: ShowDialogSuccessResponse) => void;

  /**
   * Callback invoked when the API call is canceled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  cancel?: (data: string, code: string) => void;

  /**
   * Called invoked when the API call is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 3 dynamic
   */
  complete?: (data: string) => void;
}

/**
 * Describes the options for showing the action menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface ShowActionMenuOptions {
  /**
   * Title of the text to display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  title?: string;

  /**
   * Array of buttons in the action menu. The structure is {text: 'button', color: '#666666'}, which supports 1 to 6
   * buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  buttons: [Button, Button?, Button?, Button?, Button?, Button?];

  /**
   * Callback invoked when an action menu item is selected successfully.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  success?: (tapIndex: number, errMsg: string) => void;

  /**
   * Callback invoked upon failure.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  fail?: (errMsg: string) => void;

  /**
   * Callback invoked when the API call is complete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  complete?: () => void;
}

/**
 * Defines the prompt interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
/**
 * Defines the prompt interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @atomicservice
 * @since 11 dynamic
 */
export default class Prompt {
  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Displays the notification text.
   *
   * @param { ShowToastOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  static showToast(options: ShowToastOptions): void;

  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Displays the dialog box.
   *
   * @param { ShowDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  static showDialog(options: ShowDialogOptions): void;

  /**
   * Displays the menu.
   *
   * @param { ShowActionMenuOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Displays the menu.
   *
   * @param { ShowActionMenuOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice
   * @since 11 dynamic
   */
  static showActionMenu(options: ShowActionMenuOptions): void;
}
