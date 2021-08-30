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

import {CommonMethod, Edge, Axis, Curve, BarState, EdgeEffect, Color} from "./common";

export declare enum ScrollDirection {
  Vertical,
  Horizontal,
  Free,
  None
}

export declare class Scroller {
  constructor();

  scrollTo(value: { xOffset: number | string, yOffset: number | string,
    animation?: { duration: number, curve: Curve } });

  scrollEdge(value: Edge);

  scrollPage(value: { next: boolean, direction?: Axis });

  currentOffset();

  scrollToIndex(value: number);
}

interface Scroll extends CommonMethod<Scroll> {
  (scroller?: Scroller): Scroll;

  scrollable(value: ScrollDirection): Scroll;

  onScroll(event: (xOffset: number, yOffset: number) => void): Scroll;

  onScrollEdge(event: (side: Edge) => void): Scroll;

  onScrollEnd(event: () => void): Scroll;

  scrollBar(barState: BarState): Scroll;

  scrollBarColor(color: Color | number | string): Scroll;

  scrollBarWidth(value: number | string): Scroll;

  edgeEffect(edgeEffect: EdgeEffect): Scroll;
}

export declare const ScrollInterface: Scroll;
