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
import {FontWeight} from "./text";

/**
 * @devices phone, tablet
 * @since 5
 */
export declare class MarqueeExtend<T> extends MarqueeAttribute<T> {
}

/**
 * Provides the interface for the marquee attributes.
 * @devices phone, tablet
 * @since 5
 */
interface Marquee extends MarqueeAttribute<Marquee> {
  /**
   * Create marquee.
   * @devices phone, tablet
   * @since 5
   */
  (value: {start: boolean, step?: number, loop?: number, fromStart?: boolean, src: string}): Marquee;
}

/**
 * Declares marquee properties.
 * @devices phone, tablet
 * @since 5
 */
declare class MarqueeAttribute<T> extends CommonMethod<T> {
  /**
   * Set marquee font Color.
   * @devices phone, tablet
   * @since 5
   */
  fontColor(value: Color | number | string | Resource): T;

  /**
   * Set marquee font size.
   * @devices phone, tablet
   * @since 5
   */
  fontSize(value: number | string | Resource): T;

  /**
   * Set marquee allow scale.
   * @devices phone, tablet
   * @since 5
   */
  allowScale(value: boolean): T;

  /**
   * Set marquee font weight.
   * @devices phone, tablet
   * @since 5
   */
  fontWeight(value: number | FontWeight | string): T;

  /**
   * Set marquee font family.
   * @devices phone, tablet
   * @since 5
   */
  fontFamily(value: string | Resource): T;

  /**
   * Called when scrolling starts.
   * @devices phone, tablet
   * @since 5
   */
  onStart(event: () => void): T;

  /**
   * Called when scrolling to the bottom.
   * @devices phone, tablet
   * @since 5
   */
  onBounce(event: () => void): T;

  /**
   * Called when scrolling is complete.
   * @devices phone, tablet
   * @since 5
   */
  onFinish(event: () => void): T;
}

/**
 * @devices phone, tablet
 * @since 5
 */
export declare const MarqueeInterface: Marquee;
