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
 * The information of sheet.
 * @since 8
 */
/**
 * The information of sheet.
 * @crossplatform
 * @since 10
 */
interface SheetInfo {
  /**
   * Title Properties
   * @since 8
   */
  /**
   * Title Properties
   * @crossplatform
   * @since 10
   */
  title: string | Resource;

  /**
   * Icon Properties.
   * @since 8
   */
  /**
   * Icon Properties.
   * @crossplatform
   * @since 10
   */
  icon?: string | Resource;

  /**
   * Callback method after the operation.
   * @since 8
   */
  /**
   * Callback method after the operation.
   * @crossplatform
   * @since 10
   */
  action: () => void;
}

/**
 * The options of ActionSheet.
 * @since 8
 */
/**
 * The options of ActionSheet.
 * @crossplatform
 * @since 10
 */
interface ActionSheetOptions
{
  /**
   * Title Properties
   * @since 8
   */
  /**
   * Title Properties
   * @crossplatform
   * @since 10
   */
  title: string | Resource;

  /**
   * message Properties
   * @since 8
   */
  /**
   * message Properties
   * @crossplatform
   * @since 10
   */
  message: string | Resource;

  /**
   * Invoke the commit function.
   * @since 8
   */
  /**
   * Invoke the commit function.
   * @crossplatform
   * @since 10
   */
  confirm?: {
    /**
     * Text content of the confirmation button.
     * @since 8
     */
    /**
     * Text content of the confirmation button.
     * @crossplatform
     * @since 10
     */
    value: string | Resource;

    /**
     * Method executed by the callback.
     * @since 8
     */
    /**
     * Method executed by the callback.
     * @crossplatform
     * @since 10
     */
    action: () => void;
  };

  /**
   * Execute Cancel Function.
   * @since 8
   */
  /**
   * Execute Cancel Function.
   * @crossplatform
   * @since 10
   */
  cancel?: () => void;

  /**
   * The Array of sheets
   * @since 8
   */
  /**
   * The Array of sheets
   * @crossplatform
   * @since 10
   */
  sheets: Array<SheetInfo>;

  /**
   * Allows users to click the mask layer to exit.
   * @since 8
   */
  /**
   * Allows users to click the mask layer to exit.
   * @crossplatform
   * @since 10
   */
  autoCancel?: boolean;

  /**
   * Alignment in the vertical direction.
   * @since 8
   */
  /**
   * Alignment in the vertical direction.
   * @crossplatform
   * @since 10
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the pop-up window relative to the alignment position.
   * @since 8
   */
  /**
   * Offset of the pop-up window relative to the alignment position.
   * @crossplatform
   * @since 10
   */
  offset?: { dx: number | string | Resource; dy: number | string | Resource };
}

/**
 * Declare the ActionSheet
 * @since 8
 */
/**
 * Declare the ActionSheet
 * @crossplatform
 * @since 10
 */
declare class ActionSheet {
  /**
   * Invoking method display.
   * @since 8
   */
  /**
   * Invoking method display.
   * @crossplatform
   * @since 10
   */
  static show(value: ActionSheetOptions);
}

declare module "actionSheetParam" {
  module "actionSheetParam" {
    // @ts-ignore
    export { ActionSheetOptions };
  }
}
