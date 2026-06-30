/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { ResourceColor, ResourceStr, Length, LengthMetrics } from './units';
import { DecorationStyleInterface, MutableStyledString, StyledString } from './styledString';
import { SelectionOptions, Callback } from './common';
import { TextDecorationType, TextDecorationStyle } from './enums';
import { AttributeModifier, CommonMethod, LinearGradientOptions, RadialGradientOptions } from './common';
import text from '../../@ohos.graphics.text';
import { InputMethodExtraConfig } from '../../@ohos.inputMethod.ExtraConfig'

/**
 * Defines the text data detector type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextDataDetectorType {
    /**
     * Detector type phone number.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PHONE_NUMBER = 0,
    /**
     * Detector type URL.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    URL = 1,
    /**
     * Detector type email.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    EMAIL = 2,
    /**
     * Detector type address.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ADDRESS = 3,
    /**
     * Detector type datetime.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DATE_TIME = 4
}

/**
 * Vertical Alignment of text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TextVerticalAlign {
  /**
   * Baseline alignment, the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  BASELINE = 0,

  /**
   * Bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  BOTTOM = 1,

  /**
   * Center alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  CENTER = 2,

  /**
   * Top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  TOP = 3
}

/**
 * Alignment of text content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TextContentAlign {
    /**
     * Top the text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    TOP = 0,
    /**
     * Center alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    CENTER = 1,
    /**
     * Bottom alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    BOTTOM = 2
}

/**
 * Defines the input method client.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface IMEClient {
  /**
   * The unique ID of this input component node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  nodeId: long;

  /**
   * Used to set extra config to the input component.
   *
   * @param { InputMethodExtraConfig } config - The extra config object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  setExtraConfig(config: InputMethodExtraConfig): void;
}

/**
 * Defines text layout options. Use this to set constraints for measure text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface TextLayoutOptions {
  /**
   * Text display area of width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constraintWidth?: LengthMetrics;
}

/**
 * Text data detector config.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextDataDetectorConfig {
    /**
     * Text data detector types. The default value is an empty array.
     * Set to `undefined` or `null` will restore it to the default value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    types: TextDataDetectorType[] | undefined | null;
    /**
     * Text data detect result callback.
     *
     * @type { ?Callback<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDetectResultUpdate?: Callback<string>;
    /**
     * The color of AI entity.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * The decoration of AI entity.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    decoration?: DecorationStyleInterface;

    /**
     * Used to set whether the preview window will be displayed when long-presses and selects a word.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    enablePreviewMenu?: boolean;
}

/**
 * Defines range of text type component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextRange {
    /**
     * Start offset.
     * The value should be an integer.
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start?: int;
    /**
     * End offset.
     * The value should be an integer.
     *
     * @default text length
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end?: int;
}
/**
 * Defines the inserted text value info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface InsertValue {
    /**
     * The location info where the value will be inserted.
     * The value should be an integer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    insertOffset: int;
    /**
     * The inserted value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    insertValue: string;
}
/**
 * Defines delete text direction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextDeleteDirection {
    /**
     * Delete backward.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BACKWARD = 0,
    /**
     * Delete forward.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FORWARD = 1
}
/**
 * Defines the superscript style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum SuperscriptStyle {
    /**
     * normal font style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    NORMAL = 0,
    /**
     * Superscript font style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    SUPERSCRIPT = 1,
    /**
     * Subscript font style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    SUBSCRIPT = 2
}
/**
 * Defines menu type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuType {
    /**
     * Selection menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SELECTION_MENU = 0,
    /**
     * Preview menu, only for image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREVIEW_MENU = 1
}

/**
 * The Paragraph type provides detailed information about a paragraph,
 * including properties such as line count, line height, and other relevant metrics.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare type Paragraph = text.Paragraph;

/**
 * Define the FontVariation type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type FontVariation = text.FontVariation;

/**
 * Declare the type of automatic case mode switching.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AutoCapitalizationMode {
    /**
     * The default status is invalid.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * Automatic case by words.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    WORDS = 1,
    /**
     * Automatic case by sentences.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SENTENCES = 2,
    /**
     * Automatic case by full characters.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ALL_CHARACTERS = 3
}
/**
 * Defines the options of max lines.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MaxLinesOptions {
  /**
   * The mode of max lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  overflowMode?: MaxLinesMode;
}
/**
 * Defines maxlines mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MaxLinesMode {
  /**
   * Clip mode of max lines
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CLIP = 0,

  /**
   * Scroll mode of max lines
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SCROLL = 1
}
/**
 * Defines the reason for text changes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum TextChangeReason {
  /**
   * Default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  UNKNOWN = 0,

  /**
   * Reason for input from input method.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  INPUT = 1,

  /**
   * Reason for paste.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  PASTE = 2,

  /**
   * Reason for cut.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  CUT = 3,

  /**
   * Reason for drag.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  DRAG = 4,

  /**
   * Reason for auto fill.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  AUTO_FILL = 5,

  /**
   * Reason for ai write.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  AI_WRITE = 6,

  /**
   * Reason for redo.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  REDO = 7,

  /**
   * Reason for undo.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  UNDO = 8,

  /**
   * Reason for controller methods.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  CONTROLLER = 9,

  /**
   * Reason for accessibilty methods.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  ACCESSIBILITY = 10,

  /**
   * Reason for collarboration input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  COLLABORATION = 11,

  /**
   * Reason for stylus input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  STYLUS = 12
}
/**
 * Keyboard Gradient mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum KeyboardGradientMode {
  /**
   * Disable gradient mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  NONE = 0,

  /**
   * Linear gradient mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  LINEAR_GRADIENT = 1
}

/**
 * Keyboard fluid light mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare enum KeyboardFluidLightMode {
  /**
   * Disable fluid light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  NONE = 0,

  /**
   * Background fluid light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  BACKGROUND_FLUID_LIGHT = 1
}

/**
 * Defines the keyboard appearance config.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 24 static
 */
export declare interface KeyboardAppearanceConfig {
  /**
   * Used to set keyboard gradient mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  gradientMode?: KeyboardGradientMode;

  /**
   * Used to set keyboard fluid light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  fluidLightMode?: KeyboardFluidLightMode;
}
/**
 * Provides an interface for deleting value from text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DeleteValue {
    /**
     * The location info where the value will be deleted.
     * The value should be an integer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deleteOffset: int;
    /**
     * The deleted direction.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction: TextDeleteDirection;
    /**
     * The deleted value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    deleteValue: string;
}
/**
 * Callback after content changed.
 *
 * @param { TextRange } rangeBefore - Range of content that had been replaced.
 * @param { TextRange } rangeAfter - Range of content that newly added.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnDidChangeCallback = (rangeBefore: TextRange, rangeAfter: TextRange) => void;
/**
 * Callback when input sometimes has info of previewText.
 *
 * @param { string } value - Value of body text, without previewText value.
 * @param { PreviewText } [previewText] - info of previewText, contains previewText value and start index.
 * @param { TextChangeOptions } [options] - contains the selection range before and after the change, as well as the old
 *     content.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type EditableTextOnChangeCallback = (value: string, previewText?: PreviewText, options?: TextChangeOptions) => void;
/**
 * Define the text selection controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextBaseController {
    /**
     * Set selection to select a range of content.
     *
     * @param { int } selectionStart - The start position of the selected text.
     * @param { int } selectionEnd - The end position of the selected text.
     * @param { SelectionOptions } [options] - Indicates the options of selection.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
    /**
     * Close the select menu when menu is on.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    closeSelectionMenu(): void;
    /**
     * Get LayoutManager.
     *
     * @returns { LayoutManager | undefined } - Return the LayoutManager.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getLayoutManager(): LayoutManager | undefined;
}
/**
 * Define the text extended editing controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextEditControllerEx extends TextBaseController {
    /**
     * Judge whether is in editing state
     *
     * @returns { boolean | undefined } - true means that the component is in editing state,
     *     false means is non in editing status
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isEditing(): boolean | undefined;
    /**
     * Stop editing state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopEditing(): void;
    /**
     * Set caret offset.
     *
     * @param { int } offset - caret offset.
     * @returns { boolean | undefined } - Return true if the caret offset was successfully set, false otherwise.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setCaretOffset(offset: int): boolean | undefined;
    /**
     * Get caret offset from controller.
     *
     * @returns { int | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getCaretOffset(): int | undefined;
    /**
     * Get PreviewText.
     *
     * @returns { PreviewText | undefined } - Return the PreviewText.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPreviewText(): PreviewText | undefined;
}
/**
 * The previewText.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PreviewText {
    /**
     * Start offset of the previewText.
     * The value should be an integer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset: int;
    /**
     * Value of the previewText.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string;
}
/**
 * Define the StyledString controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StyledStringController {
    /**
     * Set the StyledString of the component.
     *
     * @param { StyledString } styledString - StyledString.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setStyledString(styledString: StyledString): void;
    /**
     * Get the StyledString of the component.
     *
     * @returns { MutableStyledString | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getStyledString(): MutableStyledString | undefined;
}
/**
 * Define the StyledString changed listener.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StyledStringChangedListener {
    /**
     * Called before text changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillChange?: Callback<StyledStringChangeValue, boolean>;
    /**
     * Called after text changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidChange?: OnDidChangeCallback;
}
/**
 * Define the StyledString changed value.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface StyledStringChangeValue {
    /**
     * Range of the content to be replaced.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    range: TextRange;
    /**
     * StyledString to replace.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    replacementString: StyledString;
    /**
     * Preview StyledString.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewText?: StyledString;
}
/**
 * Define the LayoutManager for querying layout information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LayoutManager {
    /**
     * Get the line count.
     *
     * @returns { int | undefined } The line count value returned to the caller.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getLineCount(): int | undefined;
    /**
     * Get the glyph position at coordinate.
     *
     * @param { double } x - the positionX of typography.
     * @param { double } y - the positionY of typography.
     * @returns { PositionWithAffinity | undefined } TextBlob object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getGlyphPositionAtCoordinate(x: double, y: double): PositionWithAffinity | undefined;

    /**
     * Get the character position at coordinate.
     *
     * @param { double } x - the positionX of typography.
     * @param { double } y - the positionY of typography.
     * @returns { PositionWithAffinity | undefined } Position and Affinity.
     *     Returning undefined indicates that the function call failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getCharacterPositionAtCoordinate(x: double, y: double): PositionWithAffinity | undefined;

    /**
     * Get the glyph range produced by the specified range of characters.
     *
     * @param { TextRange } charRange - The character range.
     * @returns { Array<TextRange> | undefined } The range infos, first item is the range of glyphs generated
     *     by charRange. The second item, if present, specifies the actual character range that fully defines
     *     glyph range, which may match or slightly exceed the requested range.
     *     the returned Returning undefined indicates that the function call failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getGlyphRangeForCharacterRange(charRange: TextRange): Array<TextRange> | undefined;

    /**
     * Get the character range that maps to the glyphs in the given glyph range.
     *
     * @param { TextRange } glyphRange - The glyph range.
     * @returns { Array<TextRange> | undefined } The range infos, first item is the range of characters generated
     *     by glyphRange. The second item, if present, specifies the full glyph range generated by the returned
     *     which may match or slightly exceed the requested glyph range.
     *     character range, Returning undefined indicates that the function call failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    getCharacterRangeForGlyphRange(glyphRange: TextRange): Array<TextRange> | undefined;

    /**
     * Get LineMetrics.
     *
     * @param { int } lineNumber - the number of line.
     * @returns { LineMetrics | undefined } The line Metrics.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getLineMetrics(lineNumber: int): LineMetrics | undefined;

    /**
     * Get the rects for range.
     *
     * @param { TextRange } range - The range to set.
     * @param { RectWidthStyle } widthStyle - Width style to set.
     * @param { RectHeightStyle } heightStyle - Height style to set.
     * @returns { Array<TextBox> | undefined } The rects for range.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox> | undefined;
}
/**
 * Position and affinity.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PositionWithAffinity {
    /**
     * Position of text.
     * The value should be an integer.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    position: int;

    /**
     * Affinity of the position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    affinity: Affinity;
}

/**
 * Define the Affinity type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type Affinity = text.Affinity;

/**
 * Define the LineMetrics type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type LineMetrics = text.LineMetrics;

/**
 * Define the RectWidthStyle type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type RectWidthStyle = text.RectWidthStyle;

/**
 * Define the RectHeightStyle type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type RectHeightStyle = text.RectHeightStyle;

/**
 * Define the TextBox type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type TextBox = text.TextBox;

/**
 * Defines the cursor style
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface CaretStyle {
    /**
     * Set the cursor width.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Length;
    /**
     * Set the cursor color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
}
/**
 * Defines the TextMenuItemId.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TextMenuItemId {
    /**
     * Init a TextMenuItemId with id.
     *
     * @param { ResourceStr } id - The id of the TextMenuItemId.
     * @returns { TextMenuItemId } - Returns the TextMenuItemId object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static of(id: ResourceStr): TextMenuItemId;
    /**
     * Judge if two TextMenuItemId are equal.
     *
     * @param { TextMenuItemId } id - id TextMenuItemId.
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    equals(id: TextMenuItemId): boolean;
    /**
     * Indicates the TextMenuItemId to copy and delete the currently selected text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly CUT: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to copy the currently selected text to the clipboard.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly COPY: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to copy the current contents of the clipboard into the text view.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly PASTE: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to select all text in a text view.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly SELECT_ALL: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId for collaboration service menu items.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly COLLABORATION_SERVICE: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to recognize the text in the picture and input it into the text view.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly CAMERA_INPUT: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to help with text creation by invoking large models.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly AI_WRITER: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to translate the selected content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly TRANSLATE: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to search the selected content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly SEARCH: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to share the selected content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly SHARE: TextMenuItemId;
    /**
     * Indicates the TextMenuItemId to open url.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static readonly url: TextMenuItemId;

    /**
     * Indicates the TextMenuItemId to open email.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static readonly email: TextMenuItemId;

    /**
     * Indicates the TextMenuItemId to call the phone number.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static readonly phoneNumber: TextMenuItemId;

    /**
     * Indicates the TextMenuItemId to open map.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static readonly address: TextMenuItemId;

    /**
     * Indicates the TextMenuItemId to open calendar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static readonly dateTime: TextMenuItemId;

    /**
     * Indicates the TextMenuItemId for asking AI.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static readonly askAI: TextMenuItemId;

    /**
     * Indicates the TextMenuItemId for auto fill.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly autoFill: TextMenuItemId;

    /**
     * Indicates the TextMenuItemId for password vault.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static readonly passwordVault: TextMenuItemId;
}
/**
 * TextMenuItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextMenuItem {
    /**
     * Customize what the menu displays.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    content: ResourceStr;
    /**
     * Customize the icon before the menu displays content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * Distinguish clicked menu content by Id.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: TextMenuItemId;
    /**
     * Customize what the menu item shortcut displays.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    labelInfo?: ResourceStr;
}
/**
 * Callback function when the selection menu create.
 *
 * @param { Array<TextMenuItem> } menuItems - currently displayed menu items.
 * @returns { Array<TextMenuItem> } Return the menu items will displayed after operations.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnCreateMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;
/**
 * Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.
 *
 * @param { TextMenuItem } menuItem - current default menu.
 * @param { TextRange } range - current selected range.
 * @returns { boolean } - Return True, the event is consumed, false otherwise.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnMenuItemClickCallback = (menuItem: TextMenuItem, range: TextRange) => boolean;
/**
 * Callback before displaying the menu when the selection range changes.
 *
 * @param { Array<TextMenuItem> } menuItems - currently displayed menu items.
 * @returns { Array<TextMenuItem> } Return the menu items will displayed after operations.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export type OnPrepareMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;
/**
 * EditMenuOptions
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EditMenuOptions {
    /**
     * Passes the default menu, invokes before every display to generate a menu for triggering click events.
     * If `undefined` is passed, the existing registered event will be removed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onCreateMenu: OnCreateMenuCallback | undefined;
    /**
     * Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.
     * If `undefined` is passed, the existing registered event will be removed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onMenuItemClick: OnMenuItemClickCallback | undefined;
    /**
     * Callback before displaying the menu when the selection range changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    onPrepareMenu?: OnPrepareMenuCallback;
}
/**
 * Defines the font decoration result.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DecorationStyleResult {
    /**
     * Font decoration type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: TextDecorationType;
    /**
     * Font decoration color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color: ResourceColor;
    /**
     * The style value of the decoration property object.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    style?: TextDecorationStyle;
    /**
     * The thicknessScale value of the decoration property object.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    thicknessScale?: double;
}
/**
 * Defines shader style class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class ShaderStyle {}
/**
 * Defines linear gradient class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class LinearGradientStyle extends ShaderStyle {
    /**
     * The constructor.
     *
     * @param { LinearGradientOptions } options - The options of the gradient.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(options: LinearGradientOptions);
    /**
     * The options of the gradient.
     * angle: Angle of linear gradient.
     * direction: Direction of linear gradient.
     * colors: Color description for gradients
     * repeating: if the gradient colors with repeated coloring.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    options: LinearGradientOptions;
}
/**
 * Defines radial gradient class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class RadialGradientStyle extends ShaderStyle {
    /**
     * The constructor.
     *
     * @param { RadialGradientOptions } options - The options of the gradient.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(options: RadialGradientOptions);
    /**
     * The options of the gradient.
     * center:Center point of radial gradient
     * radius:Radius of Radial Gradient. value range [0, +∞)
     * colors:Color description for gradients
     * repeating: Refill. The default value is false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    options: RadialGradientOptions;
}
/**
 * Defines a shader with single color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class ColorShaderStyle extends ShaderStyle {
    /**
     * The constructor.
     *
     * @param { ResourceColor } color - The color used by shader.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    constructor(color: ResourceColor);
    /**
     * The color of the shader.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    color: ResourceColor;
}
/**
 * Defines the options of font.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FontSettingOptions {
    /**
     * Define whether VariableFontWeight is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableVariableFontWeight?: boolean;
}
/**
 * The TextChangeOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextChangeOptions {
    /**
     * The selected area before the change.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rangeBefore: TextRange;
    /**
     * The selected area after the change.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rangeAfter: TextRange;
    /**
     * The content before the change.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    oldContent: string;
    /**
     * The info of PreviewText before the change.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    oldPreviewText: PreviewText;
}
/**
 * Define the editableText Component changed value.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface EditableTextChangeValue {
    /**
     * Value of body text, without previewText value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    content: string;
    /**
     * Info of previewText, contains previewText value and start index.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewText?: PreviewText;
    /**
     * The TextChangeOptions.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    options?: TextChangeOptions;
}
/**
 * Defines text menu show mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextMenuShowMode {
    /**
     * Display the text selection menu in the current window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Prefer to display the text selection menu in a separate window
     * and continue to display it within the current window if a separate window is not supported
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PREFER_WINDOW = 1
}
/**
 * Defines text menu options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextMenuOptions {
    /**
     * Text menu show mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showMode?: TextMenuShowMode;
}
/**
 * Defines keyboard appearance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum KeyboardAppearance {
    /**
     * Default appearance mode, don't adopt immersive styles
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE_IMMERSIVE = 0,
    /**
     * Immersive mode
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMMERSIVE = 1,
    /**
     * Light immersive style
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    LIGHT_IMMERSIVE = 2,
    /**
     * Dark immersive style
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DARK_IMMERSIVE = 3
}
/**
 * Defines the line spacing options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LineSpacingOptions {
    /**
     * Used to set whether it will only take effect between lines.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onlyBetweenLines?: boolean;
}
/**
 * Defines the voice button options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface VoiceButtonOptions {
    /**
     * Enable or disable voice button.
     * True means enable voice button, false means disable voice button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    enabled?: boolean;
}

/**
 * Defines the configuration of font.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface FontConfigs {
  /**
   * Defines font weight configurations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  fontWeightConfigs?: FontWeightConfigs;
}

/**
 * Defines the configuration of font weight.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface FontWeightConfigs {
  /**
   * Defines whether VariableFontWeight is supported. The default value is false.
   * True means enable VariableFontWeight, false means disable VariableFontWeight.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableVariableFontWeight?: boolean;
  /**
   * Defines whether font weight will be automatically updated when the device's font weight category changes.
   * The default value is true.
   * True means font weight will be automatically updated when the device's font weight category changes.
   * False means font weight will not be automatically updated when the device's font weight category changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableDeviceFontWeightCategory?: boolean;
}

/**
 * Defines the text content transition class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class ContentTransition {}

/**
 * Defines the numeric text content transition class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare class NumericTextTransition extends ContentTransition {
  /**
   * constructor.
   *
   * @param { NumericTextTransitionOptions } [options] - The options of numeric text transition.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constructor(options?: NumericTextTransitionOptions);

  /**
   * The flip direction of numeric text transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  flipDirection?: FlipDirection;

  /**
   * Define whether enable blur effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  enableBlur?: boolean;
}

/**
 * The options of numeric text transition.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface NumericTextTransitionOptions {
  /**
   * Define the flip direction of numeric text transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  flipDirection?: FlipDirection;

  /**
   * Define whether enable blur effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  enableBlur?: boolean;
}

/**
 * Defines the flip direction of numeric text transition.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum FlipDirection {
  /**
   * The flip direction is down.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  DOWN = 0,

  /**
   * The flip direction is up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  UP = 1
}

/**
 * Defines text direction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextDirection {
  /**
   * Left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LTR = 0,
  /**
   * Right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RTL = 1,
  /**
   * The text direction follows the component layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 2,
  /**
   * The text direction follows the actual text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  AUTO = 3
}

/**
 * Selected drag preview style configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SelectedDragPreviewStyle {
    /**
     * The color of background.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
}

/**
 * Configuration for Accessibility .
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AccessibilitySpanOptions {
  /**
   * Indicates the accessibility text of component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityText?: ResourceStr;

  /**
   * Indicates more detailed description text of component,
   * which is used to further describe the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level.
   *
   * @default "auto".
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityLevel?: string;
}

/**
 * An enumeration that defines the line corner style, i.e.,
 * the style of the brush when drawing a polyline at the corners of the line segments.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum StrokeJoinStyle {

  /**
   * The corner type is an acute angle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MITER_JOIN = 0,

  /**
   * The corner type is round.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ROUND_JOIN = 1,

  /**
   * The corner type is flat.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BEVEL_JOIN = 2
}

/**
 * Defines incremental update policies for text rendering.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum IncrementalUpdatePolicy {
  /**
   * Disable incremental updates. Full layout rendering is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NONE = 0,

  /**
   * Enable incremental updates with paragraph-level cache.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PARAGRAPH_CACHE = 1
}
