/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Defines the options of CustomDialogController.
 * @since 7
 */
/**
 * Defines the options of CustomDialogController.
 * @crossplatform
 * @since 10
 */
declare interface CustomDialogControllerOptions {
  /**
   * Custom builder function.
   * @since 7
   */
  /**
   * Custom builder function.
   * @crossplatform
   * @since 10
   */
  builder: any;

  /**
   * Defines the cancel function.
   * @since 7
   */
  /**
   * Defines the cancel function.
   * @crossplatform
   * @since 10
   */
  cancel?: () => void;

  /**
   * Defines if use auto cancel when click on the outside of the dialog.
   * @since 7
   */
  /**
   * Defines if use auto cancel when click on the outside of the dialog.
   * @crossplatform
   * @since 10
   */
  autoCancel?: boolean;

  /**
   * Defines the dialog alignment of the screen.
   * @since 7
   */
  /**
   * Defines the dialog alignment of the screen.
   * @crossplatform
   * @since 10
   */
  alignment?: DialogAlignment;

  /**
   * Defines the dialog offset.
   * @since 7
   */
  /**
   * Defines the dialog offset.
   * @crossplatform
   * @since 10
   */
  offset?: Offset;

  /**
   * Defines if use custom style.
   * @since 7
   */
  /**
   * Defines if use custom style.
   * @crossplatform
   * @since 10
   */
  customStyle?: boolean;

  /**
   * Grid count of dialog.
   * @since 8
   */
  /**
   * Grid count of dialog.
   * @crossplatform
   * @since 10
   */
  gridCount?: number;

  /**
   * Mask color of dialog.
   * @crossplatform
   * @since 10
   */
  maskColor?: ResourceColor;

  /**
   * Animation parameters of dialog opening.
   * @crossplatform
   * @since 10
   */
  openAnimation?: AnimateParam;

  /**
  * Animation parameters of dialog closing.
  * @crossplatform
  * @since 10
  */
  closeAnimation?: AnimateParam;

  /**
   * Whether to display in the sub window.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  showInSubWindow?: boolean;
}

/**
 * Use the CustomDialogController class to display the custom pop-up window.
 * @since 7
 */
/**
 * Use the CustomDialogController class to display the custom pop-up window.
 * @crossplatform
 * @since 10
 */
declare class CustomDialogController {
  /**
   * The constructor transfers parameter settings.
   * @since 7
   */
  /**
   * The constructor transfers parameter settings.
   * @crossplatform
   * @since 10
   */
  constructor(value: CustomDialogControllerOptions);

  /**
   * Display the content of the customized pop-up window. If the content has been displayed, it does not take effect.
   * @since 7
   */
  /**
   * Display the content of the customized pop-up window. If the content has been displayed, it does not take effect.
   * @crossplatform
   * @since 10
   */
  open();

  /**
   * Closes the custom pop-up window. If the window is closed, the window does not take effect.
   * @since 7
   */
  /**
   * Closes the custom pop-up window. If the window is closed, the window does not take effect.
   * @crossplatform
   * @since 10
   */
  close();
}
