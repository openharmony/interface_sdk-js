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

import { CommonMethod } from "./common";
import { Resource } from "./units";

/**
 * Declare the type of selector
 * @since 8
 */
export declare enum PickerStyle {
  /**
   * Inside the line.
   * @since 8
   */
  INLINE = 0,

  /**
   * Block-level elements.
   * @since 8
   */
  BLOCK,

  /**
   * fade.
   * @since 8
   */
  FADE,
}

/**
 * @since 8
 */
interface TextPicker extends TextPickerAttribute<TextPicker> {
  /**
   * Add the property of the selector value range.
   * @since 8
   */
  (options?: {
    range: string[] | Resource;
    value?: string;
    selected?: number;
    loop?: boolean;
    style?: PickerStyle;
  }): TextPicker;
}

/**
 * Style the text selector.
 * @since 8
 */
declare class TextPickerAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the default height of the selected element is set.
   * @since 8
   */
  defaultPickerItemHeight(value: number): T;

  /**
   * Called when the pop-up value is returned.
   * @since 8
   */
  onAccept(callback: (value: string, index: number) => void): T;

  /**
   * Called when the Cancel button in the pop-up window is clicked.
   * @since 8
   */
  onCancel(callback: () => void): T;

  /**
   * Called when the OK button in the pop-up window is clicked.
   * @since 8
   */
  onChange(callback: (value: string, index: number) => void): T;
}

export declare class TextPickerExtend<T> extends TextPickerAttribute<T> {}
export declare const TextPickerInterface: TextPicker;
