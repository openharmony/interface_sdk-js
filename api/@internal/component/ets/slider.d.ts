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

import {CommonMethod, Color} from "./common";

export declare enum SliderStyle {
  OUTSET = 0,
  INSET,
}

export declare enum SliderChangeMode {
  BEGIN = 0,
  MOVING,
  END,
}

interface Slider extends CommonMethod<Slider> {
  (options?: {value?: number, min?: number, max?: number, step?: number, style?: SliderStyle}): Slider;
  blockColor(value: Color): Slider;
  trackColor(value: Color): Slider;
  selectedColor(value: Color): Slider;
  minLabel(value: string): Slider;
  maxLabel(value: string): Slider;
  showSteps(value: boolean): Slider;
  showTips(value: boolean): Slider;
  onChange(callback:(value: number, mode: SliderChangeMode) => void): Slider;
}

export declare const SliderInterface: Slider;
