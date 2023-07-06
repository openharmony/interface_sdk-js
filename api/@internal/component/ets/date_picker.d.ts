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
 * Defines the struct of DatePickerResult.
 * @since 8
 */
/**
 * Defines the struct of DatePickerResult.
 * @crossplatform
 * @since 10
 */
declare interface DatePickerResult {
  /**
   * Application year
   * @since 8
   */
  /**
   * Application year
   * @crossplatform
   * @since 10
   */
  year?: number;

  /**
   * Application month
   * @since 8
   */
  /**
   * Application month
   * @crossplatform
   * @since 10
   */
  month?: number;

  /**
   * Application day
   * @since 8
   */
  /**
   * Application day
   * @crossplatform
   * @since 10
   */
  day?: number;
}

/**
 * Defines the options of DatePicker.
 * @since 8
 */
/**
 * Defines the options of DatePicker.
 * @crossplatform
 * @since 10
 */
declare interface DatePickerOptions {
  /**
   * Specifies the start date of the date selector.
   * @since 8
   */
  /**
   * Specifies the start date of the date selector.
   * @crossplatform
   * @since 10
   */
  start?: Date;

  /**
   * Specifies the end date for the date selector.
   * @since 8
   */
  /**
   * Specifies the end date for the date selector.
   * @crossplatform
   * @since 10
   */
  end?: Date;

  /**
   * Specifies the date selector check date or time selector check time.
   * @since 8
   */
  /**
   * Specifies the date selector check date or time selector check time.
   * @crossplatform
   * @since 10
   */
  selected?: Date;
}

/**
 * Defines the DatePicker Component.
 * @since 8
 */
/**
 * Defines the DatePicker Component.
 * @crossplatform
 * @since 10
 */
interface DatePickerInterface {
  /**
   * Defines the DatePicker constructor.
   * @since 8
   */
  /**
   * Defines the DatePicker constructor.
   * @crossplatform
   * @since 10
   */
  (options?: DatePickerOptions): DatePickerAttribute;
}

/**
 * Defines the DatePicker attribute functions.
 * @since 8
 */
/**
 * Defines the DatePicker attribute functions.
 * @crossplatform
 * @since 10
 */
declare class DatePickerAttribute extends CommonMethod<DatePickerAttribute> {
  /**
   * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
   * @since 8
   */
  /**
   * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
   * @crossplatform
   * @since 10
   */
  lunar(value: boolean): DatePickerAttribute;

  /**
   * Sets the text style of disappearing items
   * @param { PickerTextStyle } value - indicates the text style of disappearing items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  disappearTextStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * Sets the text style of normal items
   * @param { PickerTextStyle } value - indicates the text style of normal items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  textStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * Sets the text style of selected items
   * @param { PickerTextStyle } value - indicates the text style of selected items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedTextStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * This event is triggered when a DatePicker date or time is selected.
   * @since 8
   */
  /**
   * This event is triggered when a DatePicker date or time is selected.
   * @crossplatform
   * @since 10
   */
  onChange(callback: (value: DatePickerResult) => void): DatePickerAttribute;
}

/**
 * Defines the DatePickerDialogOptions for Data Picker Dialog.
 * @since 8
 */
/**
 * Defines the DatePickerDialogOptions for Data Picker Dialog.
 * @crossplatform
 * @since 10
 */
declare interface DatePickerDialogOptions extends DatePickerOptions {
  /**
   * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
   * @since 8
   */
  /**
   * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
   * @crossplatform
   * @since 10
   */
  lunar?: boolean;

  /**
   * Whether to show the switch to display the lunar.
   * @param { boolean } value - indicates whether to show the switch to display the lunar
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  lunarSwitch?: boolean;

  /**
   * Indicates whether to show the time selector.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  showTime?: boolean;

  /**
   * Indicates whether to display the 24-hour clock.
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  useMilitaryTime?: boolean;

  /**
   * Text style of disappearing items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * Text style of normal items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  textStyle?: PickerTextStyle;

  /**
   * Text style of selected items
   * @type { PickerTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * Called when the OK button in the dialog is clicked.
   * @since 8
   */
  /**
   * Called when the OK button in the dialog is clicked.
   * @crossplatform
   * @since 10
   */
  onAccept?: (value: DatePickerResult) => void;

  /**
   * Called when the Cancel button in the dialog is clicked.
   * @since 8
   */
  /**
   * Called when the Cancel button in the dialog is clicked.
   * @crossplatform
   * @since 10
   */
  onCancel?: () => void;

  /**
   * This event is triggered when a DatePicker date or time is selected in dialog.
   * @since 8
   */
  /**
   * This event is triggered when a DatePicker date or time is selected in dialog.
   * @crossplatform
   * @since 10
   */
  onChange?: (value: DatePickerResult) => void;
}

/**
 * Defines DatePickerDialog which uses show method to show DatePicker dialog.
 * @since 8
 */
/**
 * Defines DatePickerDialog which uses show method to show DatePicker dialog.
 * @crossplatform
 * @since 10
 */
declare class DatePickerDialog {
  /**
   * Invoking method display.
   * @since 8
   */
  /**
   * Invoking method display.
   * @crossplatform
   * @since 10
   */
  static show(options?: DatePickerDialogOptions);
}

/**
 * Defines DatePicker Component.
 * @since 8
 */
/**
 * Defines DatePicker Component.
 * @crossplatform
 * @since 10
 */
declare const DatePicker: DatePickerInterface;

/**
 * Defines DatePicker Component instance.
 * @since 8
 */
/**
 * Defines DatePicker Component instance.
 * @crossplatform
 * @since 10
 */
declare const DatePickerInstance: DatePickerAttribute;

declare module "DatePickerDialogParam" {
  module "DatePickerDialogParam"{
    // @ts-ignore
    export { DatePickerDialogOptions };
  }
}
