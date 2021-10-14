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
import {TextAlign, FontWeight, FontStyle} from "./text";

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class TextAreaExtend<T> extends TextAreaAttribute<T> {
}

/**
 * Provides an interface for the multi-line text input component.
 * @devices phone, tablet, car.
 * @since 7
 */
interface TextArea extends TextAreaAttribute<TextArea> {
  /**
   * Called when writing multiple lines of text.
   * @devices phone, tablet, car.
   * @since 7
   */
  (options?: {placeholder: string | Resource, text: string | Resource}): TextArea;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
declare class TextAreaAttribute<T> extends CommonMethod<T> {
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
  placeholderFont(value?:{ size?: number | string | Resource, weight?: number | FontWeight | string, family?: string | Resource, style?: FontStyle }): T;

  /**
   * Called when the alignment of the contents of a multiline text box is set.
   * @devices phone, tablet, car.
   * @since 7
   */
  textAlign(value: TextAlign): T;

  /**
   * Called when the insertion cursor color is set.
   * @devices phone, tablet, car.
   * @since 6
   */
  caretColor(value: Color | number | string | Resource): T;

  /**
    * Called when the input changes.
    * @devices phone, tablet, car.
    * @since 7
    */
  onChange(callback: (value: string) => void): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const TextAreaInterface: TextArea;