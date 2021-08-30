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

import {CommonMethod, BarState, Color} from "./common";
import {Scroller} from "./scroll";

interface Grid extends CommonMethod<Grid> {
  (scroller?: Scroller): Grid;

  columnsTemplate(value: string): Grid;

  rowsTemplate(value: string): Grid;

  columnsGap(value: number | string): Grid;

  rowsGap(value: number | string): Grid;

  scrollBarWidth(value: number | string): Grid;

  scrollBarColor(value: Color | number | string): Grid;

  scrollBar(value: BarState): Grid;

  onScrollIndex(event: (first: number) => void): Grid;
}

export declare const GridInterface: Grid;
