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
 * Define the contents of each selector item.
 * @interface TextPickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface TextPickerRangeContent {
  /**
   * Specifies the icon content.
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  icon: string | Resource;

  /**
   * Specifies the text content.
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  text?: string | Resource;
}

/**
 * Define the contents of text cascade picker.
 * @interface TextCascadePickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface TextCascadePickerRangeContent {

  /**
   * Specifies the text content.
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  text: string | Resource;

  /**
   * Defines the text cascade picker children.
   * @type { TextCascadePickerRangeContent[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  children?: TextCascadePickerRangeContent[];
}

/**
 * Defines the options of TextPicker.
 * @since 8
 */
/**
 * Defines the options of TextPicker.
 * @crossplatform
 * @since 10
 */
declare interface TextPickerOptions {
  /**
   * Specifies the range of the text selector.
   * @type { string[] | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Specifies the range of the selector.
   * Support the display of pictures, text and pictures plus text, or multi column plain text.
   * @type { string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[];

  /**
   * Value of the current selection.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Value of the current selection.
   * Only valid when only text is displayed.
   * @type { string | string[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  value?: string | string[];

  /**
   * Current selected subscript.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Current selected subscript.
   * @type { number | number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selected?: number | number[];
}

/**
 * @since 8
 */
/**
 * @crossplatform
 * @since 10
 */
interface TextPickerInterface {
  /**
   * Defines the TextPicker constructor.
   * @since 8
   */
  /**
   * Defines the TextPicker constructor.
   * @crossplatform
   * @since 10
   */
  (options?: TextPickerOptions): TextPickerAttribute;
}

/**
 * Style the text selector.
 * @since 8
 */
/**
 * Style the text selector.
 * @crossplatform
 * @since 10
 */
declare class TextPickerAttribute extends CommonMethod<TextPickerAttribute> {
  /**
   * Called when the default height of the selected element is set.
   * @since 8
   */
  /**
   * Called when the default height of the selected element is set.
   * @crossplatform
   * @since 10
   */
  defaultPickerItemHeight(value: number | string): TextPickerAttribute;

  /**
   * Can scroll loop if true is set, on the contrary it can not.
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  canLoop(value: boolean): TextPickerAttribute;

  /**
   * Sets the text style of disappearing items
   * @param { PickerTextStyle } value - indicates the text style of disappearing items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  disappearTextStyle(value: PickerTextStyle): TextPickerAttribute;

  /**
   * Sets the text style of normal items
   * @param { PickerTextStyle } value - indicates the text style of normal items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  textStyle(value: PickerTextStyle): TextPickerAttribute;

  /**
   * Sets the text style of selected items
   * @param { PickerTextStyle } value - indicates the text style of selected items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedTextStyle(value: PickerTextStyle): TextPickerAttribute;

  /**
   * Called when the pop-up value is returned.
   * @since 8
   * @deprecated since 10
   */
  onAccept(callback: (value: string, index: number) => void): TextPickerAttribute;

  /**
   * Called when the Cancel button in the pop-up window is clicked.
   * @since 8
   * @deprecated since 10
   */
  onCancel(callback: () => void): TextPickerAttribute;

  /**
   * Called when the OK button in the pop-up window is clicked.
   * @param { (value: string, index: number) => void } callback - the callback of onChange.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * This event is triggered when a TextPicker item is selected.
   * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
   * @param { (value: string | string[], index: number | number[]) => void } callback - the callback of onChange.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onChange(callback: (value: string | string[], index: number | number[]) => void): TextPickerAttribute;

  /**
   * Set the selected indices.
   * The array size is the total number of columns.
   * @param { number | number[] } value - the selected indices.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedIndex(value: number | number[]): TextPickerAttribute;
}

/**
 * Defines the struct of TextPickerResult.
 * @since 8
 */
/**
 * Defines the struct of TextPickerResult.
 * @crossplatform
 * @since 10
 */
declare interface TextPickerResult {
  /**
   * The currently selected value.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The currently selected value.
   * Only valid when only text is displayed.When picture or picture plus text is displayed, the value of value is "".
   * @type { string | string[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  value: string | string[];

  /**
   * The subscript of the current selection.
   * @since 8
   */
  /**
   * The subscript of the current selection.
   * @type { number | number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  index: number | number[];
}

/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 * @since 8
 */
/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 * @crossplatform
 * @since 10
 */
declare interface TextPickerDialogOptions extends TextPickerOptions {
  /**
   * Called when the default height of the selected element is set.
   * @since 8
   */
  /**
   * Called when the default height of the selected element is set.
   * @crossplatform
   * @since 10
   */
  defaultPickerItemHeight?: number | string;

  /**
   * Can scroll loop if true is set, on the contrary it can not.
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  canLoop?: boolean;

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
  onAccept?: (value: TextPickerResult) => void;

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
   * This event is triggered when a TextPicker text is selected in dialog.
   * @since 8
   */
  /**
   * This event is triggered when a TextPicker text is selected in dialog.
   * @crossplatform
   * @since 10
   */
  onChange?: (value: TextPickerResult) => void;
}

/**
 * Defines TextPickerDialog which uses show method to show TextPicker dialog.
 * @since 8
 */
/**
 * Defines TextPickerDialog which uses show method to show TextPicker dialog.
 * @crossplatform
 * @since 10
 */
declare class TextPickerDialog {
  /**
   * Invoking method display.
   * @since 8
   */
  /**
   * Invoking method display.
   * @crossplatform
   * @since 10
   */
  static show(options?: TextPickerDialogOptions);
}

/**
 * Defines TextPicker Component.
 * @since 8
 */
/**
 * Defines TextPicker Component.
 * @crossplatform
 * @since 10
 */
declare const TextPicker: TextPickerInterface;

/**
 * Defines TextPicker Component instance.
 * @since 8
 */
/**
 * Defines TextPicker Component instance.
 * @crossplatform
 * @since 10
 */
declare const TextPickerInstance: TextPickerAttribute;

declare module "textPickerDialogParam" {
  module "textPickerDialogParam" {
    // @ts-ignore
    export { TextPickerDialogOptions };
  }
}