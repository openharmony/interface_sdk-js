/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { Font } from ".";
import { CommonMethod } from "./common";
import { FontWeight, FontStyle } from "./enums";
import { Resource, ResourceColor, ResourceStr } from "./units";

/**
 * Declare the type of input box
 * @since 8
 */
export declare enum InputType {
  /**
   * Basic input mode.
   * @since 8
   */
  Normal,

  /**
   * Password entry mode.
   * @since 8
   */
  Number,

  /**
   * E-mail address input mode.
   * @since 8
   */
  Email,

  /**
   * Pure digital input mode.
   * @since 8
   */
  Password,
}

/**
 * Declare the type of soft keyboard.
 * @since 8
 */
export declare enum EnterKeyType {
  /**
   * Go.
   * @since 8
   */
  Go,

  /**
   * Search.
   * @since 8
   */
  Search,

  /**
   * Send.
   * @since 8
   */
  Send,

  /**
   * Next.
   * @since 8
   */
  Next,

  /**
   * Done.
   * @since 8
   */
  Done,
}

/**
 * Defines the option of TextInput.
 * @since 8
 */
export declare interface TextInputOption {
  /**
   * The place holder text string.
   * @since 8
   */
  placeholder?: ResourceStr;

  /**
   * Sets the current value of TextArea.
   * @since 8
   */
  text?: ResourceStr;
}

/**
 * Provides a single-line text input component interface.
 * @since 8
 */
interface TextInput extends TextInputAttribute<TextInput> {
  /**
   * Called when writing a single line of text.
   * @since 8
   */
  (value?: TextInputOption): TextInput;
}

/**
 * @since 8
 */
declare class TextInputAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the input type is set.
   * @since 8
   */
  type(value: InputType): T;

  /**
   * Called when the color of the placeholder is set.
   * @since 8
   */
  placeholderColor(value: ResourceColor): T;

  /**
   * Called when the font property of the placeholder is set.
   * @since 8
   */
  placeholderFont(value?: Font): T;

  /**
   * Called when the type of soft keyboard input button is set.
   * @since 8
   */
  enterKeyType(value: EnterKeyType): T;

  /**
   * Called when the color of the insertion cursor is set.
   * @since 8
   */
  caretColor(value: ResourceColor): T;

  /**
   * Called when judging whether the text editing has changed.
   * @since 8
   */
  onEditChanged(callback: (isEditing: boolean) => void): T;

  /**
   * Called when submitted.
   * @since 8
   */
  onSubmit(callback: (enterKey: EnterKeyType) => void): T;

  /**
   * Called when the input of the input box changes.
   * @since 8
   */
  onChange(callback: (value: string) => void): T;

  /**
   * Called when the input of maximum text length is set.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision.
   * @since 5
   */
  maxLength(value: number): T;
}

export declare class TextInputExtend<T> extends TextInputAttribute<T> {}
export declare const TextInputInterface: TextInput;
