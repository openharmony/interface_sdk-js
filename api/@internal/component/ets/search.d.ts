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
import { ResourceColor, Font } from "./units";

/**
 * @since 8
 */
interface Search extends SearchAttribute<Search> {
  (options?: { value?: string; placeholder?: string; icon?: string }): Search;
}

/**
 * @since 8
 */
declare class SearchAttribute<T> extends CommonMethod<T> {
  /**
   * Set the search button text
   * @since 8
   */
  searchButton(value: string): T;
  /**
   * Set the place hold text color
   * @since 8
   */
  placeholderColor(value: ResourceColor): T;

  /**
   * Set the font used for place holder text
   * @since 8
   */
  placeholderFont(value?: Font): T;

  /**
   * Set the font used for input text
   * @since 8
   */
  textFont(value?: Font): T;
  /**
   * Call the function when clicked the search button
   * @since 8
   */
  onSubmit(callback: (value: string) => void): T;
  /**
   * Call the function when editing the input text
   * @since 8
   */
  onChange(callback: (value: string) => void): T;
  /**
   * Called when using the Clipboard menu
   * @since 8
   */
  onCopy(callback: (value: string) => void): T;

  /**
   * Called when using the Clipboard menu
   * @since 8
   */
  onCut(callback: (value: string) => void): T;

  /**
   * Called when using the Clipboard menu
   * @since 8
   */
  onPaste(callback: (value: string) => void): T;
}

export declare class SearchExtend<T> extends SearchAttribute<T> {}
export declare const SearchInterface: Search;
