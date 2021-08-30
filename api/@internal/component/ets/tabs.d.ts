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

import {CommonMethod} from "./common";

export declare enum BarMode {
  Scrollable,
  Fixed
}

export declare enum BarPosition {
  Start,
  End
}

export declare class TabsController {
  constructor();

  changeIndex(value: number): void;
}

interface Tabs extends CommonMethod<Tabs> {
  (value?: { barPosition?: BarPosition, initialIndex?: number, controller?: TabsController }): Tabs;

  vertical(value: boolean): Tabs;

  scrollable(value: boolean): Tabs;

  barMode(value: BarMode): Tabs;

  barWidth(value: number): Tabs;

  barHeight(value: number): Tabs;

  animationDuration(value: number): Tabs;

  onChange(event: (index: number) => void): Tabs;
}

export declare const TabsInterface: Tabs;
