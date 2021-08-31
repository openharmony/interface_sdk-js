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

import {CommonMethod, Axis, Color, Resource} from "./common";
import {Scroller} from "./scroll";

export declare enum BarState {
  Off,
  Auto,
  On
}

export declare enum EdgeEffect {
  Spring,
  Fade,
  None
}

export declare enum ScrollState {
  Idle,
  Scroll,
  Fling
}

interface List extends CommonMethod<List> {
  (value?: { initialIndex?: number, space?: number | string, scroller?: Scroller }): List;

  listDirection(value: Axis): List;

  scrollBar(value: BarState): List;

  edgeEffect(value: EdgeEffect): List;

  divider(value: {
    strokeWidth: number | string | Resource, color?: Color | number | string | Resource,
    startMargin?: number | string | Resource, endMargin?: number | string | Resource
  } | null): List;

  editMode(value: boolean): List;

  cachedCount(value: number): List;

  chainAnimation(value: boolean): List;

  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): List;

  onScrollIndex(event: (start: number, end: number) => void): List;

  onReachStart(event: () => void): List;

  onReachEnd(event: () => void): List;

  onScrollStop(event: () => void): List;

  onItemDelete(event: (index: number) => boolean): List;

  onItemMove(event: (from: number, to: number) => boolean): List;
}

export declare const ListInterface: List;
