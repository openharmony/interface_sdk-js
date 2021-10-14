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

import {CommonMethod, Color, Resource} from "./common";
import {FontWeight, FontStyle} from "./text";

/**
 * Declare the type of input box
 * @devices phone, tablet, car.
 * @since 7
 */
export declare enum InputType {
  /**
   * Basic input mode.
   * @devices phone, tablet, car.
   * @since 7
   */
  Normal,

  /**
   * Password entry mode.
   * @devices phone, tablet, car.
   * @since 7
   */
  Number,

  /**
   * E-mail address input mode.
   * @devices phone, tablet, car.
   * @since 7
   */
  Email,

  /**
   * Pure digital input mode.
   * @devices phone, tablet, car.
   * @since 7
   */
  Password,
}

/**
 * Declare the type of soft keyboard.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare enum EnterKeyType {
  /**
   * Go.
   * @devices phone, tablet, car.
   * @since 7
   */
  Go,

  /**
   * Search.
   * @devices phone, tablet, car.
   * @since 7
   */
  Search,

  /**
   * Send.
   * @devices phone, tablet, car.
   * @since 7
   */
  Send,

  /**
   * Next.
   * @devices phone, tablet, car.
   * @since 7
   */
  Next,

  /**
   * Done.
   * @devices phone, tablet, car.
   * @since 7
   */
  Done,
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class TextInputExtend<T> extends TextInputAttribute<T> {
}

/**
 * Provides a single-line text input component interface.
 * @devices phone, tablet, car.
 * @since 7
 */
interface TextInput extends TextInputAttribute<TextInput> {
  /**
   * Called when writing a single line of text.
   * @devices phone, tablet, car.
   * @since 7
   */
  (options?: {
      placeholder: string | Resource,
      text: string | Resource,
  }): TextInput;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
declare class TextInputAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the input type is set.
   * @devices phone, tablet, car.
   * @since 7
   */
  type(value: InputType): T;

  /**
   * Called when the color of the placeholder is set.
   * @devices phone, tablet, car.
   * @since 7
   */
  placeholderColor(value: Color | number | string | Resource): T;

  /**
   * Called when the font property of the placeholder is set.
   * @devices phone, tablet, car.
   * @since 7
   */
  placeholderFont(value?: { size?: number | string | Resource, weight?: number | FontWeight | string, family?: string | Resource, style?: FontStyle }): T;

  /**
   * Called when the type of soft keyboard input button is set.
   * @devices phone, tablet, car.
   * @since 7
   */
  enterKeyType(value: EnterKeyType): T;

  /**
   * Called when the color of the insertion cursor is set.
   * @devices phone, tablet, car.
   * @since 7
   */
  caretColor(value: Color | number | string | Resource): T;

  /**
   * Called when judging whether the text editing has changed.
   * @devices phone, tablet, car.
   * @since 7
   */
  onEditChanged(callback: (isEditing: boolean) => void): T;

  /**
   * Called when submitted.
   * @devices phone, tablet, car.
   * @since 7
   */
  onSubmit(callback: (enterKey: EnterKeyType) => void): T;

  /**
   * Called when the input of the input box changes.
   * @devices phone, tablet, car.
   * @since 7
   */
  onChange(callback: (value: string) => void): T;

  /**
   * Called when the input of maximum text length is set.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision.
   * @since 5
   */
  maxLength(value: number): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const TextInputInterface: TextInput;
