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

export declare enum TextInputType {
  BEGIN = 0,
  TEXT = BEGIN,
  MULTILINE = 1,
  NUMBER = 2,
  PHONE = 3,
  DATETIME = 4,
  EMAIL_ADDRESS = 5,
  URL = 6,
  VISIBLE_PASSWORD = 7,
  END
}

export declare enum TextInputAction {
  BEGIN = 0,
  UNSPECIFIED = BEGIN,
  NONE = 1,
  GO = 2,
  SEARCH = 3,
  SEND = 4,
  NEXT = 5,
  DONE = 6,
  PREVIOUS = 7,
  END = PREVIOUS
}

export declare class TextInputExtend<T> extends TextInputAttribute<T> {
}

interface TextInput extends TextInputAttribute<TextInput> {
  (options?: {
      placeholder: string;
      text: string;
  }): TextInput;
}

declare class TextInputAttribute<T> extends CommonMethod<T> {
  textInputType(value: TextInputType): T;
  placeholderColor(value: Color): T;
  placeholderFont(value: {size: number, weight: FontWeight, fontFamily: string | Resource, style: FontStyle}): T;
  textInputAction(value: TextInputAction): T;
  inputFilter(value: boolean): T;
  caretColor(value: Color): T;
  correction(value: boolean): T;
  onEditChanged(callback: (isEditing: boolean) => void): T;
  onSubmit(callback: (enterKey: TextInputAction) => void): T;
  onChange(callback: (value: string) => void): T;
}

export declare const TextInputInterface: TextInput;
