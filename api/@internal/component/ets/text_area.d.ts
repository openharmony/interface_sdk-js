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

import { ResourceStr } from ".";
import { CommonMethod } from "./common";
import { TextAlign } from "./enums";
import { Font, ResourceColor } from "./units";

/**
 * Defines the option of TextArea.
 * @since 8
 */
export declare interface TextAreaOption {
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
 * Provides an interface for the multi-line text input component.
 * @since 8
 */
interface TextArea extends TextAreaAttribute<TextArea> {
  /**
   * Called when writing multiple lines of text.
   * @since 8
   */
  (value?: TextAreaOption): TextArea;
}

/**
 * Defines the attribute functions of TextArea.
 * @since 8
 */
declare class TextAreaAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the color of the placeholder is set.
   * @since 8
   */
  placeholderColor(value: ResourceColor): T;

  /**
   * Called when the font property of the placeholder is set.
   * @since 8
   */
  placeholderFont(value: Font): T;

  /**
   * Called when the alignment of the contents of a multiline text box is set.
   * @since 8
   */
  textAlign(value: TextAlign): T;

  /**
   * Called when the insertion cursor color is set.
   * @since 6
   */
  caretColor(value: ResourceColor): T;

  /**
   * Called when the input changes.
   * @devices phone, tablet, car.
   * @since 8
   */
  onChange(callback: (value: string) => void): T;
}

export declare class TextAreaExtend<T> extends TextAreaAttribute<T> {}
export declare const TextAreaInterface: TextArea;
