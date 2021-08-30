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

export declare enum IndexerAlign {
    Left,
    Right
}

interface AlphabetIndexer extends CommonMethod<AlphabetIndexer> {
  (value: {ArrayValue : Array<string>, selected : number}): AlphabetIndexer;

  onSelected(event: (index: number) => void): AlphabetIndexer;

  color(value: Color | number | string | Resource): AlphabetIndexer;

  selectedColor(value: Color | number | string | Resource): AlphabetIndexer;

  popupColor(value: Color | number | string | Resource): AlphabetIndexer;

  selectedBackgroundColor(value: Color | number | string | Resource): AlphabetIndexer;

  popupBackground(value: Color | number | string | Resource): AlphabetIndexer;

  usingPopup(value: boolean): AlphabetIndexer;

  selectedFont(value: { size?: number, weight?: FontWeight, family?: string, style?: FontStyle}): AlphabetIndexer;

  popupFont(value: { size?: number, weight?: FontWeight, family?: string, style?: FontStyle}): AlphabetIndexer;

  iteamSize(value: string | number): AlphabetIndexer;

  font(value: { size?: number, weight?: FontWeight, family?: string, style?: FontStyle}): AlphabetIndexer;

  alignStyle(value: IndexerAlign): AlphabetIndexer;
}

export declare const AlphabetIndexerInterface: AlphabetIndexer;
