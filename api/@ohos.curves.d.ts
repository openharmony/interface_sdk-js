/*
* Copyright (c) 2021-2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * Contains interpolator functions such as initialization, third-order Bezier curves, and spring curves.
 * @import import Curves from '@ohos.curves'
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
declare namespace curves {
  /**
   * enum Curve.
   * @since 7
   */
  enum Curve {
    Linear,
    Ease,
    EaseIn,
    EaseOut,
    EaseInOut,
    FastOutSlowIn,
    LinearOutSlowIn,
    FastOutLinearIn,
    ExtremeDeceleration,
    Sharp,
    Rhythm,
    Smooth,
    Friction,
  }

  /**
   * Interface for curve object.
   * @since 9
   */
  interface ICurve {
    /**
    * Get curve value by fraction.
    * @since 9
    */ 
     interpolate(fraction : number) : number;
  }

  /**
   * Initializes the interpolator curve when called.
   * @since 9
   */
  function initCurve(curve?: Curve): ICurve;

  /**
   * Initializes the interpolator curve when called.
   * @since 7
   * @deprecated since 9
   */
  function init(curve?: Curve): string;
 
  /**
   * Constructs a step curve when called.
   * @since 9
   */
   function stepsCurve(count: number, end: boolean): ICurve;
 
  /**
   * Constructs a step curve when called.
   * @since 7
   * @deprecated since 9
   */
  function steps(count: number, end: boolean): string;
 
  /**
   * Constructs a third-order Bezier curve when called.
   * @since 9
   */
  function cubicBezierCurve(x1: number, y1: number, x2: number, y2: number): ICurve;
 
  /**
   * Constructs a third-order Bezier curve when called.
   * @since 7
   * @deprecated since 9
   */
  function cubicBezier(x1: number, y1: number, x2: number, y2: number): string;
 
  /**
   * Constructs a spring curve when called.
   * @since 9
   */
  function springCurve(velocity: number, mass: number, stiffness: number, damping: number): ICurve;
 
  /**
   * Constructs a spring curve when called.
   * @since 7
   * @deprecated since 9
   */
  function spring(velocity: number, mass: number, stiffness: number, damping: number): string;

  /**
   * Constructs a spring motion when called.
   * If one parameter is not specified, it uses the corresponding default values.
   * @since 9
   */
  function springMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve;

  /**
   * Constructs a responsive spring motion when called.
   * If one parameter is not specified, it uses the corresponding default values.
   * @since 9
   */
  function responsiveSpringMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve;

}

export default curves;
