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
 * The alignment of dialog,
 * @since 7
 */
/**
 * The alignment of dialog,
 * @crossplatform
 * @since 10
 */
declare enum DialogAlignment {
  /**
   * Vertical top alignment.
   * @since 7
   */
  /**
   * Vertical top alignment.
   * @crossplatform
   * @since 10
   */
  Top,

  /**
   * Align vertically to the center.
   * @since 7
   */
  /**
   * Align vertically to the center.
   * @crossplatform
   * @since 10
   */
  Center,

  /**
   * Vertical bottom alignment.
   * @since 7
   */
  /**
   * Vertical bottom alignment.
   * @crossplatform
   * @since 10
   */
  Bottom,

  /**
   * Default alignment.
   * @since 7
   */
  /**
   * Default alignment.
   * @crossplatform
   * @since 10
   */
  Default,

  /**
   * Align the upper left corner.
   * @since 8
   */
  /**
   * Align the upper left corner.
   * @crossplatform
   * @since 10
   */
  TopStart,

  /**
   * Align the upper right corner.
   * @since 8
   */
  /**
   * Align the upper right corner.
   * @crossplatform
   * @since 10
   */
  TopEnd,

  /**
   * Left center alignment.
   * @since 8
   */
  /**
   * Left center alignment.
   * @crossplatform
   * @since 10
   */
  CenterStart,

  /**
   * Right center alignment.
   * @since 8
   */
  /**
   * Right center alignment.
   * @crossplatform
   * @since 10
   */
  CenterEnd,

  /**
   * Align the lower left corner.
   * @since 8
   */
  /**
   * Align the lower left corner.
   * @crossplatform
   * @since 10
   */
  BottomStart,

  /**
   * Align the lower right corner.
   * @since 8
   */
  /**
   * Align the lower right corner.
   * @crossplatform
   * @since 10
   */
  BottomEnd,
}

/**
 * Base param used for AlertDialog.show method.
 * @since 7
 */
/**
 * Base param used for AlertDialog.show method.
 * @crossplatform
 * @since 10
 */
declare interface AlertDialogParam {
  /**
   * Title Properties
   * @since 7
   */
  /**
   * Title Properties
   * @crossplatform
   * @since 10
   */
  title?: ResourceStr;

  /**
   * message Properties
   * @since 7
   */
  /**
   * message Properties
   * @crossplatform
   * @since 10
   */
  message: ResourceStr;

  /**
   * Allows users to click the mask layer to exit.
   * @since 7
   */
  /**
   * Allows users to click the mask layer to exit.
   * @crossplatform
   * @since 10
   */
  autoCancel?: boolean;

  /**
   * Execute Cancel Function.
   * @since 7
   */
  /**
   * Execute Cancel Function.
   * @crossplatform
   * @since 10
   */
  cancel?: () => void;

  /**
   * Alignment in the vertical direction.
   * @since 7
   */
  /**
   * Alignment in the vertical direction.
   * @crossplatform
   * @since 10
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the pop-up window relative to the alignment position.
   * @since 7
   */
  /**
   * Offset of the pop-up window relative to the alignment position.
   * @crossplatform
   * @since 10
   */
  offset?: Offset;

  /**
   * Grid count of dialog.
   * @since 7
   */
  /**
   * Grid count of dialog.
   * @crossplatform
   * @since 10
   */
  gridCount?: number;
}

/**
 * Defines the AlertDialog with confirm button.
 * @since 7
 */
/**
 * Defines the AlertDialog with confirm button.
 * @crossplatform
 * @since 10
 */
declare interface AlertDialogParamWithConfirm extends AlertDialogParam {
  /**
   * Invoke the commit function.
   * @since 7
   */
  /**
   * Invoke the commit function.
   * @crossplatform
   * @since 10
   */
  confirm?: {
    /**
     * Text content of the confirmation button.
     * @since 7
     */
    /**
     * Text content of the confirmation button.
     * @crossplatform
     * @since 10
     */
    value: ResourceStr;

    /**
     * Text color of the confirmation button.
     * @since 7
     */
    /**
     * Text color of the confirmation button.
     * @crossplatform
     * @since 10
     */
    fontColor?: ResourceColor;

    /**
     * Background color of the confirmation button.
     * @since 7
     */
    /**
     * Background color of the confirmation button.
     * @crossplatform
     * @since 10
     */
    backgroundColor?: ResourceColor;

    /**
     * Method executed by the callback.
     * @since 7
     */
    /**
     * Method executed by the callback.
     * @crossplatform
     * @since 10
     */
    action: () => void;
  };
}

/**
 * Defines the dialog param with buttons.
 * @since 7
 */
/**
 * Defines the dialog param with buttons.
 * @crossplatform
 * @since 10
 */
declare interface AlertDialogParamWithButtons extends AlertDialogParam {
  /**
   * First button.
   * @since 7
   */
  /**
   * First button.
   * @crossplatform
   * @since 10
   */
  primaryButton: {
    /**
     * Text content of the confirmation button.
     * @since 7
     */
    /**
     * Text content of the confirmation button.
     * @crossplatform
     * @since 10
     */
    value: ResourceStr;

    /**
     * Text color of the confirmation button.
     * @since 7
     */
    /**
     * Text color of the confirmation button.
     * @crossplatform
     * @since 10
     */
    fontColor?: ResourceColor;

    /**
     * Background color of the confirmation button.
     * @since 7
     */
    /**
     * Background color of the confirmation button.
     * @crossplatform
     * @since 10
     */
    backgroundColor?: ResourceColor;

    /**
     * Method executed by the callback.
     * @since 7
     */
    /**
     * Method executed by the callback.
     * @crossplatform
     * @since 10
     */
    action: () => void;
  };

  /**
   * Second button.
   * @since 7
   */
  /**
   * Second button.
   * @crossplatform
   * @since 10
   */
  secondaryButton: {
    /**
     * Text content of the confirmation button.
     * @since 7
     */
    /**
     * Text content of the confirmation button.
     *  @crossplatform
     * @since 10
     */
    value: ResourceStr;

    /**
     * Text color of the confirmation button.
     * @since 7
     */
    /**
     * Text color of the confirmation button.
     * @crossplatform
     * @since 10
     */
    fontColor?: ResourceColor;

    /**
     * Background color of the confirmation button.
     * @since 7
     */
    /**
     * Background color of the confirmation button.
     * @crossplatform
     * @since 10
     */
    backgroundColor?: ResourceColor;

    /**
     * Method executed by the callback.
     * @since 7
     */
    /**
     * Method executed by the callback.
     * @crossplatform
     * @since 10
     */
    action: () => void;
  };
}

/**
 * Defines AlertDialog which uses show method to show alert dialog.
 * @since 7
 */
/**
 * Defines AlertDialog which uses show method to show alert dialog.
 * @crossplatform
 * @since 10
 */
declare class AlertDialog {
  /**
   * Invoking method display.
   * @since 7
   */
  /**
   * Invoking method display.
   * @crossplatform
   * @since 10
   */
  static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons);
}

declare module "AlertDialogParam" {
  module "AlertDialogParam" {
    // @ts-ignore
    export { AlertDialogParamWithConfirm, AlertDialogParamWithButtons, DialogAlignment };
  }
}