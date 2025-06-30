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
 * @file
 * @kit ArkUI
 */

/*** if arkts 1.2 */
import { KeyboardOptions, PasteEvent } from './richEditor';
import { CaretStyle, DeleteValue, EditMenuOptions, EditableTextOnChangeCallback, InsertValue,
  AutoCapitalizationMode,EditableTextChangeValue,KeyboardAppearance } from './textCommon';
import { BarState, CopyOptions, FontStyle, FontWeight, LineBreakStrategy, TextContentStyle, TextAlign, TextOverflow,
    TextHeightAdaptivePolicy, WordBreak, EllipsisMode } from './enums';
import { EnterKeyType, SubmitEvent, ContentType } from './textInput';
import { Dimension, Font, Length, LengthMetrics, ResourceColor, ResourceStr } from './units';
import { InputCounterOptions, TextContentControllerBase, SelectionOptions,
    TextDecorationOptions, CommonMethod, Callback, Optional, Bindable } from './common';
import { CustomBuilder } from './builder';
import { Resource } from '../../global/resource';
/*** endif */

/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @since 8
 */
/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class TextAreaController extends TextContentControllerBase {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor();

  /**
   * Called when the position of the insertion cursor is set.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @param { number } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  caretPosition(value: number): void;

  /**
   * Text selection is achieved by specifying the start and end positions of the text.
   *
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Text selection is achieved by specifying the start and end positions of the text.
   *
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Text selection is achieved by specifying the start and end positions of the text.
   *
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @param { SelectionOptions } [options] - Indicates the options of the text selection.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

  /**
   * Exit edit state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Exit edit state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  stopEditing(): void;
}

/**
 * Defines the options of TextArea.
 *
 * @interface TextAreaOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of TextArea.
 *
 * @interface TextAreaOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of TextArea.
 *
 * @interface TextAreaOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface TextAreaOptions {
  /**
   * The place holder text string.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The place holder text string.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The place holder text string.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  placeholder?: ResourceStr;

  /**
   * Sets the current value of TextArea.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the current value of TextArea.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the current value of TextArea.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  text?: ResourceStr;

  /**
   * Sets the current value of TextArea.
   *
   * @type { ?(ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  text?: ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>;

  /**
   * Called when the position of the insertion cursor is set.
   *
   * @type { ?TextAreaController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @type { ?TextAreaController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @type { ?TextAreaController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  controller?: TextAreaController;
}

/**
 * Provides an interface for the multi-line text input component.
 *
 * @interface TextAreaInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for the multi-line text input component.
 *
 * @interface TextAreaInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides an interface for the multi-line text input component.
 *
 * @interface TextAreaInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface TextAreaInterface {
  /**
   * Called when writing multiple lines of text.
   *
   * @param { TextAreaOptions } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when writing multiple lines of text.
   *
   * @param { TextAreaOptions } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when writing multiple lines of text.
   *
   * @param { TextAreaOptions } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (value?: TextAreaOptions): TextAreaAttribute;
}

/**
 * Declare the type of input box
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Declare the type of input box
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum TextAreaType {
  /**
   * Basic input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Basic input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NORMAL = 0,

  /**
   * Pure digital input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Pure digital input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NUMBER = 2,

  /**
   * Phone number entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Phone number entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  PHONE_NUMBER = 3,

  /**
   * E-mail address input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * E-mail address input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  EMAIL = 5,

  /**
   * Number decimal entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NUMBER_DECIMAL = 12,

  /**
   * URL entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  URL = 13,
}

/**
 * Declare the event listener callback of the enter key.
 *
 * @typedef { function } TextAreaSubmitCallback
 * @param { EnterKeyType } enterKeyType - The enter key type of soft keyboard.
 * @param { SubmitEvent } [event] - Provides the method of keeping textArea editable state when submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'14','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type TextAreaSubmitCallback = (enterKeyType: EnterKeyType, event?: SubmitEvent) => void;

/**
 * Defines the attribute functions of TextArea.
 *
 * @extends CommonMethod<TextAreaAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the attribute functions of TextArea.
 *
 * @extends CommonMethod<TextAreaAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the attribute functions of TextArea.
 *
 * @extends CommonMethod<TextAreaAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class TextAreaAttribute extends CommonMethod<TextAreaAttribute> {
  /**
   * Called when the color of the placeholder is set.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the color of the placeholder is set.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the color of the placeholder is set.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  placeholderColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Called when the font property of the placeholder is set.
   *
   * @param { Font } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font property of the placeholder is set.
   *
   * @param { Font } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font property of the placeholder is set.
   *
   * @param { Font } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  placeholderFont(value: Font): TextAreaAttribute;

  /**
   * Called when the type of soft keyboard input button is set.
   *
   * @param { EnterKeyType } value the type of soft keyboard
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the type of soft keyboard input button is set.
   *
   * @param { EnterKeyType } value the type of soft keyboard
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enterKeyType(value: EnterKeyType): TextAreaAttribute;

  /**
   * Called when the alignment of the contents of a multiline text box is set.
   *
   * @param { TextAlign } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the alignment of the contents of a multiline text box is set.
   *
   * @param { TextAlign } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the alignment of the contents of a multiline text box is set.
   *
   * @param { TextAlign } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textAlign(value: TextAlign): TextAreaAttribute;

  /**
   * Called when the insertion cursor color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the insertion cursor color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the insertion cursor color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  caretColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Called when the font size is set.
   *
   * @param { Length } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font size is set.
   *
   * @param { Length } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font size is set.
   *
   * @param { Length } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize(value: Length): TextAreaAttribute;

  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontStyle(value: FontStyle): TextAreaAttribute;

  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight(value: number | FontWeight | string): TextAreaAttribute;

  /**
   * Called when the font list of text is set.
   *
   * @param { ResourceStr } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the font list of text is set.
   *
   * @param { ResourceStr } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the font list of text is set.
   *
   * @param { ResourceStr } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFamily(value: ResourceStr): TextAreaAttribute;

  /**
   * Called when the overflow mode of the font is set.
   *
   * @param { TextOverflow } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textOverflow(value: TextOverflow): TextAreaAttribute;

  /**
   * Specify the indentation of the first line in a text-block.
   *
   * @param { Dimension } value - The length of text indent.
   * @returns { TextAreaAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textIndent(value: Dimension): TextAreaAttribute;

  /**
   * Called when the inputFilter of text is set.
   *
   * @param { ResourceStr } value
   * @param { function } error
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the inputFilter of text is set.
   *
   * @param { ResourceStr } value
   * @param { function } error
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the inputFilter of text is set.
   *
   * @param { ResourceStr } value
   * @param { function } error
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  inputFilter(value: ResourceStr, error?: (value: string) => void): TextAreaAttribute;

  /**
   * Define the caret style of the text input
   *
   * @param { CaretStyle } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  caretStyle(value: CaretStyle): TextAreaAttribute;

  /**
   * Define the text selected background color of the text input.
   *
   * @param { ResourceColor } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedBackgroundColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Called when submitted.
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when submitted.
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onSubmit(callback: (enterKey: EnterKeyType) => void): TextAreaAttribute;
  /**
   * Called when submitted.
   *
   * @param { TextAreaSubmitCallback } callback - callback of the listened event.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  onSubmit(callback: TextAreaSubmitCallback): TextAreaAttribute;
  /**
   * Called when submitted.
   *
   * @param { ((enterKey: EnterKeyType) => void) | TextAreaSubmitCallback } callback - callback of the listened event.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onSubmit(callback: ((enterKey: EnterKeyType) => void) | TextAreaSubmitCallback): TextAreaAttribute;

  /**
   * Called when the input changes.
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the input changes.
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the input changes.
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the input changes.
   *
   * @param { EditableTextOnChangeCallback } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onChange(callback: EditableTextOnChangeCallback): TextAreaAttribute;

  /**
   * Called when the text selection changes.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the text selection changes.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextAreaAttribute;

  /**
   * Called when the content scrolls.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the content scrolls.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onContentScroll(callback: (totalOffsetX: number, totalOffsetY: number) => void): TextAreaAttribute;

  /**
   * Called when judging whether the text editing change finished.
   *
   * @param { function } callback - Triggered when the text area status changes.
   * If the value of isEditing is true, text area is in progress.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when judging whether the text editing change finished.
   *
   * @param { function } callback - Triggered when the text area status changes.
   * If the value of isEditing is true, text area is in progress.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onEditChange(callback: (isEditing: boolean) => void): TextAreaAttribute;

  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onCopy(callback: (value: string) => void): TextAreaAttribute;

  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onCut(callback: (value: string) => void): TextAreaAttribute;

  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   *          Executed when a paste operation is performed.
   *          { string } value - The text content to be pasted.
   *          { PasteEvent } event - The user-defined paste event.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onPaste(callback: (value: string, event: PasteEvent) => void): TextAreaAttribute;

  /**
   * Called when the copy option is set.
   *
   * @param { CopyOptions } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Called when the copy option is set.
   *
   * @param { CopyOptions } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the copy option is set.
   *
   * @param { CopyOptions } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  copyOption(value: CopyOptions): TextAreaAttribute;

  /**
   * Sets whether request keyboard or not when on focus.
   *
   * @param { boolean } value
   * @returns { TextAreaAttribute } Returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets whether request keyboard or not when on focus.
   *
   * @param { boolean } value
   * @returns { TextAreaAttribute } Returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableKeyboardOnFocus(value: boolean): TextAreaAttribute;

  /**
   * Define the max length content of the text area.
   *
   * @param { number } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define the max length content of the text area.
   *
   * @param { number } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxLength(value: number): TextAreaAttribute;

  /**
   * Define show counter of the text area.
   *
   * @param { boolean } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define show counter of the text area.
   *
   * @param { boolean } value - Set showcounter of the text area.
   * @param { InputCounterOptions } options - Set the percentage of counter.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  showCounter(value: boolean, options?: InputCounterOptions): TextAreaAttribute;

  /**
   * Define style of the text area.
   *
   * @param { TextContentStyle } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define style of the text area.
   *
   * @param { TextContentStyle } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  style(value: TextContentStyle): TextAreaAttribute;

  /**
   * Define bar state of the text area.
   *
   * @param { BarState } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define bar state of the text area.
   *
   * @param { BarState } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  barState(value: BarState): TextAreaAttribute;

  /**
   * Controls whether the selection menu pops up.
   *
   * @param { boolean } value
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Controls whether the selection menu pops up.
   *
   * @param { boolean } value
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectionMenuHidden(value: boolean): TextAreaAttribute;

  /**
   * Called when the minimum font size of the font is set.
   *
   * @param { number | string | Resource } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  minFontSize(value: number | string | Resource): TextAreaAttribute;

  /**
   * Called when the maximum font size of the font is set.
   *
   * @param { number | string | Resource } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxFontSize(value: number | string | Resource): TextAreaAttribute;

  /**
   * Called when the minimum font scale of the font is set.
   *
   * @param { Optional<number | Resource> } scale
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  minFontScale(scale: Optional<number | Resource>): TextAreaAttribute;

  /**
   * Called when the maximum font scale of the font is set.
   *
   * @param { Optional<number | Resource> } scale
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxFontScale(scale: Optional<number | Resource>): TextAreaAttribute;
  
  /**
   * Called when the height adaptive policy is set.
   *
   * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAreaAttribute;

  /**
   * Define max lines of the text area.
   *
   * @param { number } value
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define max lines of the text area.
   *
   * @param { number } value
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  maxLines(value: number): TextAreaAttribute;

  /**
   * Set the word break type.
   *
   * @param { WordBreak } value - The word break type.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  wordBreak(value: WordBreak): TextAreaAttribute;

  /**
   * Set the text line break strategy type.
   *
   * @param { LineBreakStrategy } strategy - The text line break strategy type.
   * @returns { TextAreaAttribute } The attribute of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lineBreakStrategy(strategy: LineBreakStrategy): TextAreaAttribute;

  /**
   * Define custom keyboard of the text area.
   *
   * @param { CustomBuilder } value
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Define custom keyboard of the text area.
   *
   * @param { CustomBuilder } value
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Define custom keyboard of the text area.
   *
   * @param { CustomBuilder } value - Set up a custom keyboard of TextArea
   * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of TextArea
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  customKeyboard(value: CustomBuilder, options?: KeyboardOptions): TextAreaAttribute;
  
  /**
   * Called when the text decoration of the text is set.
   *
   * @param { TextDecorationOptions } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  decoration(value: TextDecorationOptions): TextAreaAttribute;

  /**
   * Called when the distance between text fonts is set.
   *
   * @param { number | string | Resource } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  letterSpacing(value: number | string | Resource): TextAreaAttribute;

  /**
   * Set font line spacing.
   *
   * @param { LengthMetrics } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lineSpacing(value: LengthMetrics): TextAreaAttribute;

  /**
   * Called when the line height of the font is set.
   *
   * @param { number | string | Resource } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  lineHeight(value: number | string | Resource): TextAreaAttribute;

  /**
   * Called when the input type is set.
   *
   * @param { TextAreaType } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the input type is set.
   *
   * @param { TextAreaType } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type(value: TextAreaType): TextAreaAttribute;

  /**
   * Sets whether enable auto fill or not.
   *
   * @param { boolean } value - Indicates the flag whether autofill is enabled.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableAutoFill(value: boolean): TextAreaAttribute;

  /**
   * Called when the auto fill type is set.
   *
   * @param { ContentType } contentType - Indicates autofill type.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  contentType(contentType: ContentType): TextAreaAttribute;

  /**
   * Set font feature.
   *
   * @param { string } value - The fontFeature.
   * normal | <feature-tag-value>, 
   * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
   * the values of <feature-tag-value> reference to doc of TextArea component
   * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFeature(value: string): TextAreaAttribute;

  /**
   * Get text value information when about to input.
   *
   * @param { Callback<InsertValue, boolean> } callback - The triggered function when text content is about to insert.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): TextAreaAttribute;

  /**
   * Get text value information when completed input.
   *
   * @param { Callback<InsertValue> } callback - The triggered function when text content has been inserted.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDidInsert(callback: Callback<InsertValue>): TextAreaAttribute;

  /**
   * Get text value information when about to delete.
   *
   * @param { Callback<DeleteValue, boolean> } callback - The triggered function when text content is about to delete.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): TextAreaAttribute;

  /**
   * Get text value information when the deletion has been completed
   *
   * @param { Callback<DeleteValue> } callback - The triggered function when text content has been deleted.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onDidDelete(callback: Callback<DeleteValue>): TextAreaAttribute;

  /**
   * Set the custom text menu.
   *
   * @param { EditMenuOptions } editMenu - Customize text menu options.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  editMenuOptions(editMenu: EditMenuOptions): TextAreaAttribute;

  /**
   * Define the preview text mode of the text input.
   *
   * @param { boolean } enable - Indicates the preview text mode.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enablePreviewText(enable: boolean): TextAreaAttribute;

  /**
   * Enable or disable haptic feedback.
   *
   * @param { boolean } isEnabled - Default value is true, set false to disable haptic feedback.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enableHapticFeedback(isEnabled: boolean): TextAreaAttribute;

  /**
   * Set text mode of automatic case mode switching.
   *
   * @param { AutoCapitalizationMode } mode - Automatic case mode values.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'20','1.2':'20'}
   * @arkts 1.1&1.2
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): TextAreaAttribute;

  /**
   * Set the text with half leading.
   *
   * @param { Optional<boolean> } halfLeading
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  halfLeading(halfLeading: Optional<boolean>): TextAreaAttribute;
  
  /**
   * Set the ellipsis mode.
   *
   * @param { EllipsisMode } mode - The ellipsis mode.
   * @returns { TextAreaAttribute } The attribute of TextArea.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ellipsisMode(mode: Optional<EllipsisMode>): TextAreaAttribute;

  /**
   * Set whether stop backPressed callback event or not.
   *
   * @param { Optional<boolean> } isStopped - Default value is true, set false to trigger the latest callback event.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  stopBackPress(isStopped: Optional<boolean>): TextAreaAttribute;

  /**
   * Get text value information when about to change.
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - The triggered function when text content is about to change.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextAreaAttribute;

  /**
   * Set the keyboard appearance.
   *
   * @param { Optional<KeyboardAppearance> } appearance - Default value is KeyboardAppearance.NONE_IMMERSIVE
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'15','1.2':'20'}
   * @arkts 1.1&1.2
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextAreaAttribute;
}

/**
 * Defines TextArea Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines TextArea Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TextArea Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TextArea: TextAreaInterface;

/**
 * Defines TextArea Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines TextArea Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TextArea Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TextAreaInstance: TextAreaAttribute;
