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

/**
 * Data gauge chart component, used to display data as a ring chart.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class GaugeExtend<T> extends GaugeAttribute<T> {
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
interface Gauge extends GaugeAttribute<Gauge> {
  /**
   * value:Current data value.
   * min: Current Segment Minimum Value
   * max: Current Segment Maximum Value
   * @devices phone, tablet, car.
   * @since 7
   */
  (options: {value: number, min?: number, max?: number}): Gauge;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
declare class GaugeAttribute<T> extends CommonMethod<T> {
  /**
   * Sets the value for the current profile.
   * @devices phone, tablet, car.
   * @since 7
   */
  value(value: number): T;

  /**
   * Set the start angle. Clock 0 is 0 degrees and clockwise is positive.
   * @devices phone, tablet, car.
   * @since 7
   */
  startAngle(angle: number): T;

  /**
   * Sets the end angle position. Clock 0 is 0 degrees and clockwise is positive.
   * @devices phone, tablet, car.
   * @since 7
   */
  endAngle(angle: number): T;

  /**
   * Set the color of the chart. You can set the solid color and segmented gradient color.
   * @devices phone, tablet, car.
   * @since 7
   */
  colors(colors: Array<any>): T;

  /**
   * Sets the thickness of the ring chart.
   * @devices phone, tablet, car.
   * @since 7
   */
  strokeWidth(length: number): T;

  /**
   * Mark points describe the content of the text.
   * @devices phone, tablet, car.
   * @since 7
   */
  labelTextConfig(markedLabelText: string): T;

  /**
   * Color of the marker point description text.
   * @devices phone, tablet, car.
   * @since 7
   */
  labelColorConfig(markedLabelColor: Color): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const GaugeInterface: Gauge;