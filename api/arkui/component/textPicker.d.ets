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
 * @arkts 1.2
 */


import { Resource, ResourceColor, Offset, Dimension } from "./units";
import { CommonMethod, PickerTextStyle, PickerDialogButtonStyle, Rectangle, BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, BackgroundBlurStyleOptions, BackgroundEffectOptions, Optional, Callback, UICommonMethod, AttributeModifier } from "./common";
import { DialogAlignment } from "./alertDialog";
import { CrownSensitivity, TextOverflow } from "./enums";
import { LengthMetrics } from './../Graphics';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Define the contents of each selector item.
 *
 * @interface TextPickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextPickerRangeContent {
    /**
     * Specifies the icon content.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    icon: string | Resource;
    /**
     * Specifies the text content.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    text?: string | Resource;
}
/**
 * Define the contents of text cascade picker.
 *
 * @interface TextCascadePickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextCascadePickerRangeContent {
    /**
     * Specifies the text content.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    text: string | Resource;
    /**
     * Defines the text cascade picker children.
     *
     * @type { ?TextCascadePickerRangeContent[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    children?: TextCascadePickerRangeContent[];
}
/**
 * Defines the options of TextPicker.
 *
 * @interface TextPickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextPickerOptions {
    /**
     * Specifies the range of the selector.
     * Support the display of pictures, text and pictures plus text, or multi column plain text.
     *
     * @type {string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[];
    /**
     * Value of the current selection.
     * Only valid when only text is displayed.
     *
     * @type { ?(string | string[]) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    value?: string | string[];
    /**
     * Current selected subscript.
     *
     * @type { ?(number | number[]) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selected?: number | number[];
    /**
     * Defines the column width of the text picker.
     *
     * @type { ?LengthMetrics[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    columnWidths?: LengthMetrics[];
}
/**
 * Defines the struct of DividerOptions.
 *
 * @interface DividerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DividerOptions {
    /**
     * The strokeWidth of Divider.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    strokeWidth?: Dimension;
    /**
     * The color of Divider.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * The startMargin of Divider.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    startMargin?: Dimension;
    /**
     * The endMargin of Divider.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    endMargin?: Dimension;
}
/**
 * Provide an interface for the text style of the text picker.
 *
 * @extends PickerTextStyle
 * @interface TextPickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextPickerTextStyle extends PickerTextStyle {
    /**
     * Defines the minimum font size of the text.
     *
     * @type { ?(number | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minFontSize?: number | string | Resource;
    /**
     * Defines the maximum font size of the text.
     *
     * @type { ?(number | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxFontSize?: number | string | Resource;
    /**
     * Defines the overflow mode of the text.
     *
     * @type { ?TextOverflow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    overflow?: TextOverflow;
}
/**
 * Callback of the listened scroll stop event.
 *
 * @typedef {function} TextPickerScrollStopCallback
 * @param { string | string[] } value - Value of the selected item.
 * @param { number | number[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type TextPickerScrollStopCallback = (value: string | string[], index: number | number[]) => void;
/**
 * Callback of TextPicker item is selected event.
 *
 * @typedef {function} OnTextPickerChangeCallback
 * @param { string | string[] } selectItem - Value of the selected item.
 * @param { number | number[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnTextPickerChangeCallback = (selectItem: string | string[], index: number | number[]) => void;
/**
 * Callback of the listened onEnterSelectedArea event.
 *
 * @typedef {function} TextPickerEnterSelectedAreaCallback
 * @param { string | string[] } value - Value of the selected item.
 * @param { number | number[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type TextPickerEnterSelectedAreaCallback = (value: string | string[], index: number | number[]) => void;
export declare interface TextPickerAttribute extends CommonMethod {
    /**
     * Called when the default height of the selected element is set.
     *
     * @param { number | string } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    defaultPickerItemHeight(value: number | string | undefined): this;
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @param { boolean } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    canLoop(value: boolean | undefined): this;
    /**
     * Sets the text style of disappearing items
     *
     * @param { PickerTextStyle } value - indicates the text style of disappearing items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    disappearTextStyle(value: PickerTextStyle | undefined): this;
    /**
     * Sets the text style of normal items
     *
     * @param { PickerTextStyle } value - indicates the text style of normal items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textStyle(value: PickerTextStyle | undefined): this;
    /**
     * Sets the text style of selected items
     *
     * @param { PickerTextStyle } value - indicates the text style of selected items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedTextStyle(value: PickerTextStyle | undefined): this;
    /**
     * Defines whether to disable the text style animation.
     *
     * @param { boolean } disabled
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    disableTextStyleAnimation(disabled: boolean | undefined): this;
    /**
     * Defines to set the default text style for options.
     *
     * @param { TextPickerTextStyle } style
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    defaultTextStyle(style: TextPickerTextStyle | undefined): this;
    /**
     * This event is triggered when a TextPicker item is selected.
     * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
     *
     * @param { Optional<OnTextPickerChangeCallback> } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onChange(callback: OnTextPickerChangeCallback | undefined): this;
    /**
     * This event is triggered when a TextPicker item is selected and scrolling has stopped.
     * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
     *
     * @param { TextPickerScrollStopCallback } callback - the callback of onScrollStop.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollStop(callback: TextPickerScrollStopCallback | undefined): this;
    /**
     * This event is triggered when an item enters the selected area.
     * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
     *
     * @param { TextPickerEnterSelectedAreaCallback } callback - the callback of onEnterSelectedArea.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback | undefined): this;
    /**
     * Set the selected indices.
     * The array size is the total number of columns.
     *
     * @param { number | number[] } value - the selected indices.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedIndex(value: number | number[] | undefined): this;
    /**
     * Set the divider of TextPicker
     *
     * @param { DividerOptions | null } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    divider(value: DividerOptions | null | undefined): this;
    /**
     * Called when set the height of gradient
     *
     * @param { Dimension } value - The value the gradient height
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    gradientHeight(value: Dimension | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { Optional<boolean> } enable - Default value is true, set false to disable haptic feedback.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableHapticFeedback(enable: boolean | undefined): this;
    /**
     * If the attribute is set, the crown rotation sensitivity can be changed.
     *
     * @param { Optional<CrownSensitivity> } sensitivity
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    attributeModifier(modifier: AttributeModifier<TextPickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the struct of TextPickerResult.
 *
 * @interface TextPickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextPickerResult {
    /**
     * The currently selected value.
     * Only valid when only text is displayed.When picture or picture plus text is displayed, the value of value is "".
     *
     * @type { string | string[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    value: string | string[];
    /**
     * The subscript of the current selection.
     *
     * @type { number | number[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    index: number | number[];
}
/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 *
 * @extends TextPickerOptions
 * @interface TextPickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextPickerDialogOptions extends TextPickerOptions {
    /**
     * Called when the default height of the selected element is set.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    defaultPickerItemHeight?: number | string;
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    canLoop?: boolean;
    /**
     * Text style of disappearing items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    disappearTextStyle?: PickerTextStyle;
    /**
     * Text style of normal items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textStyle?: PickerTextStyle;
    /**
     * Style of accept button.
     *
     * @type { ?PickerDialogButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    acceptButtonStyle?: PickerDialogButtonStyle;
    /**
     * Style of cancel button.
     *
     * @type { ?PickerDialogButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cancelButtonStyle?: PickerDialogButtonStyle;
    /**
     * Text style of selected items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedTextStyle?: PickerTextStyle;
    /**
     * Defines whether to disable the text style animation.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    disableTextStyleAnimation?: boolean;
    /**
     * Defines to set the default text style for options.
     *
     * @type { ?TextPickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    defaultTextStyle?: TextPickerTextStyle;
    /**
     * Called when the OK button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onAccept?: (value: TextPickerResult) => void;
    /**
     * Called when the Cancel button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onCancel?: () => void;
    /**
     * This event is triggered when a TextPicker text is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onChange?: (value: TextPickerResult) => void;
    /**
     * This event is triggered when a TextPicker text is selected and scrolling has stopped in dialog.
     *
     * @type { ?Callback<TextPickerResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScrollStop?: Callback<TextPickerResult>;
    /**
     * This event is triggered when an item enters the selected area in dialog.
     *
     * @type { ?Callback<TextPickerResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onEnterSelectedArea?: Callback<TextPickerResult>;
    /**
     * Mask Region of dialog. The size cannot exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maskRect?: Rectangle;
    /**
     * Defines the dialog alignment of the screen.
     *
     * @type { ?DialogAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    alignment?: DialogAlignment;
    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offset?: Offset;
    /**
     * Defines the textPickerDialog's background color
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundColor?: ResourceColor;
    /**
     * Defines the textPickerDialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Defines the textPickerDialog's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the textPickerDialog's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * Callback function when the dialog appears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDidAppear?: () => void;
    /**
     * Callback function when the dialog disappears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDidDisappear?: () => void;
    /**
     * Callback function before the dialog openAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillAppear?: () => void;
    /**
     * Callback function before the dialog closeAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDisappear?: () => void;
    /**
     * Defines the dialog's shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableHoverMode?: boolean;
    /**
     * Defines the dialog's display area in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hoverModeArea?: HoverModeAreaType;
    /**
     * Enable or disable haptic feedback.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableHapticFeedback?: boolean;
}
/**
 * Defines TextPickerDialog which uses show method to show TextPicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class TextPickerDialog {
}
export declare interface UITextPickerAttribute extends UICommonMethod {
    /**
     * Called when the default height of the selected element is set.
     *
     * @param { number | string } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    defaultPickerItemHeight(value: number | string | undefined): this;
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @param { boolean } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    canLoop(value: boolean | undefined): this;
    /**
     * Sets the text style of disappearing items
     *
     * @param { PickerTextStyle } value - indicates the text style of disappearing items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    disappearTextStyle(value: PickerTextStyle | undefined): this;
    /**
     * Sets the text style of normal items
     *
     * @param { PickerTextStyle } value - indicates the text style of normal items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textStyle(value: PickerTextStyle | undefined): this;
    /**
     * Sets the text style of selected items
     *
     * @param { PickerTextStyle } value - indicates the text style of selected items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectedTextStyle(value: PickerTextStyle | undefined): this;
    /**
     * Defines whether to disable the text style animation.
     *
     * @param { boolean } disabled
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    disableTextStyleAnimation(disabled: boolean | undefined): this;
    /**
     * Defines to set the default text style for options.
     *
     * @param { TextPickerTextStyle } style
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    defaultTextStyle(style: TextPickerTextStyle | undefined): this;
    /**
     * This event is triggered when a TextPicker item is selected.
     * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
     *
     * @param { Optional<OnTextPickerChangeCallback> } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: OnTextPickerChangeCallback | undefined): this;
    /**
     * This event is triggered when a TextPicker item is selected and scrolling has stopped.
     * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
     *
     * @param { TextPickerScrollStopCallback } callback - the callback of onScrollStop.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScrollStop(callback: TextPickerScrollStopCallback | undefined): this;
    /**
     * This event is triggered when an item enters the selected area.
     * Only valid when only text is displayed. When picture or picture plus text is displayed, the value is "".
     *
     * @param { TextPickerEnterSelectedAreaCallback } callback - the callback of onEnterSelectedArea.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback | undefined): this;
    /**
     * Set the selected indices.
     * The array size is the total number of columns.
     *
     * @param { number | number[] } value - the selected indices.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectedIndex(value: number | number[] | undefined): this;
    /**
     * Set the divider of TextPicker
     *
     * @param { DividerOptions | null } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    divider(value: DividerOptions | null | undefined): this;
    /**
     * Called when set the height of gradient
     *
     * @param { Dimension } value - The value the gradient height
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    gradientHeight(value: Dimension | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { Optional<boolean> } enable - Default value is true, set false to disable haptic feedback.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    enableHapticFeedback(enable: boolean | undefined): this;
    /**
     * If the attribute is set, the crown rotation sensitivity can be changed.
     *
     * @param { Optional<CrownSensitivity> } sensitivity
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<TextPickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function TextPicker(
    options?: TextPickerOptions, 
    @memo
    content_?: () => void,
): UITextPickerAttribute