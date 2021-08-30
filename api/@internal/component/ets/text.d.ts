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

export declare enum FontStyle {
  Normal,
  Italic
}

export declare enum FontWeight {
  Lighter,
  Normal,
  Regular,
  Medium,
  Bold,
  Bolder
}

export declare enum TextAlign {
  Center,
  Start,
  End
}

export declare enum TextOverflow {
  Clip,
  Ellipsis
}

export declare enum TextDecorationType {
  None,
  Underline,
  Overline,
  LineThrough
}

export declare enum TextCase {
  Normal,
  LowerCase,
  UpperCase
}

interface Text extends CommonMethod<Text> {
  (content?: string | Resource): Text;

  fontColor(value: Color | number | string | Resource): Text;

  fontSize(value: number | string | Resource): Text;

  minFontSize(value: number | string | Resource): Text;

  maxFontSize(value: number | string | Resource): Text;

  fontStyle(value: FontStyle): Text;

  fontWeight(value: number | FontWeight | string): Text;

  textAlign(value: TextAlign): Text;

  lineHeight(value: number | string): Text;

  textOverflow(value: { overflow: TextOverflow }): Text;

  fontFamily(value: string | Resource): Text;

  maxLines(value: number): Text;

  decoration(value: { type: TextDecorationType, color?: Color | number | string | Resource}): Text;

  letterSpacing(value: number | string): Text;

  textCase(value: TextCase): Text;

  baselineOffset(value: number | string): Text;
}

export declare const TextInterface: Text;
