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

import { CommonMethod } from "./common"
import { Length, ResourceColor } from "./units";

/**
 * Provides methods for control pattern lock component.
 * @since 8
 */
export declare class PatternLockController {
  /**
   * constructor.
   */
  constructor();

  /**
   * Reset pattern lock.
   */
  reset();
}

/**
 * Provides an interface for generating PatternLock.
 * @since 8
 */
interface PatternLock extends PatternLockAttribute<PatternLock> {
  (controller?: PatternLockController): PatternLock;
}

/**
 * @since 8
 */
declare class PatternLockAttribute<T> extends CommonMethod<T> {
  /**
   * The square side length of pattern lock component.
   * @since 8
   */
  sideLength(value: Length): T;

  /**
   * Circle radius.
   * @since 8
   */
  circleRadius(value: Length): T;

  /**
   * The background color.
   * @since 8
   */
  backgroundColor(value: ResourceColor): T;

  /**
   * Regular color.
   * @since 8
   */
  regularColor(value: ResourceColor): T;

  /**
   * The color when cell is selected.
   * @since 8
   */
  selectedColor(value: ResourceColor): T;

  /**
   * The color when cell is active state.
   * @since 8
   */
  activeColor(value: ResourceColor): T;

  /**
   * The path line color.
   * @since 8
   */
  pathColor(value: ResourceColor): T;

  /**
   * The path line stroke width.
   * @since 8
   */
  pathStrokeWidth(value: number | string): T;

  /**
   * Called when the pattern input completed.
   * @since 8
   */
  onPatternComplete(callback: (input: Array<number>) => void): T;

  /**
   * Called when judging whether the input state can be reset by touch pattern lock.
   * @since 8
   */
  autoReset(value: boolean): T;
}

export declare class PatternLockExtend<T> extends PatternLockAttribute<T> {}
export declare const PatternLockInterface: PatternLock;