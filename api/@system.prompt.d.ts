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
 * @file
 * @kit ArkUI
 */

/**
 * Defines the options of ShowToast.
 *
 * @interface ShowToastOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 * @deprecated since 8
 * @useinstead ohos.prompt
 */
export interface ShowToastOptions {
  /**
   * Text to display.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   * @deprecated since 8
   */
  message: string;

  /**
   * Duration of toast dialog box. The default value is 1500.
   * The recommended value ranges from 1500 ms to 10000ms.
   * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000 ms.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   * @deprecated since 8
   */
  duration?: number;

  /**
   * The distance between toast dialog box and the bottom of screen.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 5
   * @deprecated since 8
   */
  bottom?: string | number;
}

/**
 * Defines the prompt info of button.
 *
 * @interface Button
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
/**
 * Defines the prompt info of button.
 *
 * @interface Button
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface Button {
  /**
   * Defines the button info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Defines the button info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  text: string;

  /**
   * Defines the color of button.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Defines the color of button.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color: string;
}

/**
 * Defines the one-button array.
 *
 * @typedef { [Button] } PromptSingleButton
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type PromptSingleButton = [Button];

/**
 * Defines the two-buttons array.
 *
 * @typedef { [Button, Button | undefined] } PromptDoubleButtons
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type PromptDoubleButtons = [Button, Button | undefined];

/**
 * Defines the three-buttons array.
 *
 * @typedef { [Button, Button | undefined, Button | undefined] } PromptTripleButtons
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type PromptTripleButtons = [Button, Button | undefined, Button | undefined];

/**
 * Defines the four-buttons array.
 *
 * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined] } PromptQuadrupleButtons
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type PromptQuadrupleButtons = [Button, Button | undefined, Button | undefined, Button | undefined];

/**
 * Defines the five-buttons array.
 *
 * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined] } PromptQuintupleButtons
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type PromptQuintupleButtons = [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined];

/**
 * Defines the six-buttons array.
 *
 * @typedef { [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined, Button | undefined] } PromptSextupleButtons
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type PromptSextupleButtons = [Button, Button | undefined, Button | undefined, Button | undefined, Button | undefined, Button | undefined];

/**
 * Defines the response of ShowDialog.
 *
 * @interface ShowDialogSuccessResponse
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
/**
 * Defines the response of ShowDialog.
 *
 * @interface ShowDialogSuccessResponse
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface ShowDialogSuccessResponse {
  /**
   * Defines the index of data.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Defines the index of data.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  index: number;
}

/**
 * Defines the option of show dialog.
 *
 * @interface ShowDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
/**
 * Defines the option of show dialog.
 *
 * @interface ShowDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface ShowDialogOptions {
  /**
   * Title of the text to display.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Title of the text to display.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  title?: string;

  /**
   * Text body.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Text body.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  message?: string;

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
   *
   * @type { ?[Button, Button?, Button?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
   *
   * @type { ?[Button, Button?, Button?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  buttons?: [Button, Button?, Button?];

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
   *
   * @type { ?(PromptSingleButton | PromptDoubleButtons | PromptTripleButtons) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  buttons?: PromptSingleButton | PromptDoubleButtons | PromptTripleButtons;

  /**
   * Called when the dialog box is displayed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Called when the dialog box is displayed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  success?: (data: ShowDialogSuccessResponse) => void;

  /**
   * Called when the operation is cancelled.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Called when the operation is cancelled.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  cancel?: (data: string, code: string) => void;

  /**
   * Called when the dialog box is closed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3
   */
  /**
   * Called when the dialog box is closed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  complete?: (data: string) => void;
}

/**
 * Defines the option of ShowActionMenu.
 *
 * @interface ShowActionMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 6
 */
/**
 * Defines the option of ShowActionMenu.
 *
 * @interface ShowActionMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface ShowActionMenuOptions {
  /**
   * Title of the text to display.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Title of the text to display.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  title?: string;

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to six buttons are supported.
   *
   * @type { [Button, Button?, Button?, Button?, Button?, Button?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to six buttons are supported.
   *
   * @type { [Button, Button?, Button?, Button?, Button?, Button?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  buttons: [Button, Button?, Button?, Button?, Button?, Button?];

  /**
   * Array of buttons in the dialog box.
   * The array structure is {text:'button', color: '#666666'}.
   * One to six buttons are supported.
   *
   * @type { PromptSingleButton | PromptDoubleButtons | PromptTripleButtons | PromptQuadrupleButtons | PromptQuintupleButtons | PromptSextupleButtons }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  buttons: PromptSingleButton | PromptDoubleButtons | PromptTripleButtons | PromptQuadrupleButtons | PromptQuintupleButtons | PromptSextupleButtons;

  /**
   * Called when the dialog box is displayed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Called when the dialog box is displayed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  success?: (tapIndex: number, errMsg: string) => void;

  /**
   * Called when the operation is cancelled.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Called when the operation is cancelled.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fail?: (errMsg: string) => void;

  /**
   * Called when the dialog box is closed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6
   */
  /**
   * Called when the dialog box is closed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
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
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
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
   * @atomicservice
   * @since 11
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
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
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
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static showActionMenu(options: ShowActionMenuOptions): void;
}
