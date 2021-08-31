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

import {CommonMethod, Color, Resource} from "./common"
import {FontWeight} from "./text"

export declare enum ButtonType {
  Capsule,
  Circle,
  Arc,
  Normal
}

interface Button extends CommonMethod<Button> {
  (): Button;

  (options: { type?: ButtonType, stateEffect?: boolean }): Button;

  (label: string, options?: { type?: ButtonType, stateEffect?: boolean }): Button;

  type(value: ButtonType): Button;

  stateEffect(value: boolean): Button;

  fontColor(value: Color | number | string | Resource): Button;

  fontSize(value: number | string | Resource): Button;

  fontWeight(value: number | FontWeight | string): Button;
}

export declare const ButtonInterface: Button
