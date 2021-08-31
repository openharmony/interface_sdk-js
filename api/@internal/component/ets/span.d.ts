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
import {FontStyle, FontWeight, TextDecorationType, TextCase} from "./text";

interface Span extends CommonMethod<Span> {
  (value: string | Resource): Span;

  fontColor(value: Color | number | string | Resource): Span;

  fontSize(value: number | string | Resource): Span;

  fontStyle(value: FontStyle): Span;

  fontWeight(value: number | FontWeight | string): Span;

  fontFamily(value: string | Resource): Span;

  decoration(value: { type: TextDecorationType, color?: Color | number | string | Resource}): Span;

  letterSpacing(value: number | string): Span;

  textCase(value: TextCase): Span;
}

export declare const SpanInterface: Span;
