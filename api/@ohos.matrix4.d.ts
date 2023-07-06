/*
 * Copyright (c) 2020-2023 Huawei Device Co., Ltd.
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

/**
 * Used to do matrix operations
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Used to do matrix operations
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare namespace matrix4 {
  /**
   * Set translation parameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set translation parameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  interface TranslateOption {
    /**
     * Indicates the translation distance of the x-axis, in px.
     * @since 7
     */
    /**
     * Indicates the translation distance of the x-axis, in px.
     * @crossplatform
     * @since 10
     */
    x?: number;

    /**
     * Indicates the translation distance of the y-axis, in px.
     * @since 7
     */
    /**
     * Indicates the translation distance of the y-axis, in px.
     * @crossplatform
     * @since 10
     */
    y?: number;

    /**
     * Indicates the translation distance of the z-axis, in px.
     * @since 7
     */
    /**
     * Indicates the translation distance of the z-axis, in px.
     * @crossplatform
     * @since 10
     */
    z?: number;
  }

  /**
   * Set scaling parameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set scaling parameters
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  interface ScaleOption {
    /**
     * Zoom factor of the x-axis.
     * @since 7
     */
    /**
     * Zoom factor of the x-axis.
     * @crossplatform
     * @since 10
     */
    x?: number;

    /**
     * Zoom factor of the y-axis.
     * @since 7
     */
    /**
     * Zoom factor of the y-axis.
     * @crossplatform
     * @since 10
     */
    y?: number;

    /**
     * Zoom factor of the z-axis.
     * @since 7
     */
    /**
     * Zoom factor of the z-axis.
     * @crossplatform
     * @since 10
     */
    z?: number;

    /**
     * Transform the x-axis coordinate of the center point.
     * @since 7
     */
    /**
     * Transform the x-axis coordinate of the center point.
     * @crossplatform
     * @since 10
     */
    centerX?: number;

    /**
     * Transform the y-axis coordinate of the center point.
     * @since 7
     */
    /**
     * Transform the y-axis coordinate of the center point.
     * @crossplatform
     * @since 10
     */
    centerY?: number;
  }

  /**
   * Set Rotation Parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set Rotation Parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  interface RotateOption {
    /**
     * Axis of rotation vector x coordinate.
     * @since 7
     */
    /**
     * Axis of rotation vector x coordinate.
     * @crossplatform
     * @since 10
     */
    x?: number;

    /**
     * Axis of rotation vector y coordinate.
     * @since 7
     */
    /**
     * Axis of rotation vector y coordinate.
     * @crossplatform
     * @since 10
     */
    y?: number;

    /**
     * Axis of rotation vector z coordinate.
     * @since 7
     */
    /**
     * Axis of rotation vector z coordinate.
     * @crossplatform
     * @since 10
     */
    z?: number;

    /**
     * Transform the x-axis coordinate of the center point.
     * @since 7
     */
    /**
     * Transform the x-axis coordinate of the center point.
     * @crossplatform
     * @since 10
     */
    centerX?: number;

    /**
     * Transform the y-axis coordinate of the center point.
     * @since 7
     */
    /**
     * Transform the y-axis coordinate of the center point.
     * @crossplatform
     * @since 10
     */
    centerY?: number;

    /**
     * Rotation angle.
     * @since 7
     */
    /**
     * Rotation angle.
     * @crossplatform
     * @since 10
     */
    angle?: number;
  }

  /**
   * Matrix4Transit.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Matrix4Transit.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  interface Matrix4Transit {
    /**
     * Copy function of Matrix, which can copy a copy of the current matrix object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @returns Return to Matrix4Transit
     */
    /**
     * Copy function of Matrix, which can copy a copy of the current matrix object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @returns Return to Matrix4Transit
     */
    copy(): Matrix4Transit;

    /**
     * The inverse function of Matrix returns an inverse matrix of the current matrix object, that is, the effect is exactly the opposite.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @returns Return to Matrix4Transit
     */
    /**
     * The inverse function of Matrix returns an inverse matrix of the current matrix object, that is, the effect is exactly the opposite.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @returns Return to Matrix4Transit
     */
    invert(): Matrix4Transit;

    /**
     * Matrix superposition function, which can superpose the effects of two matrices to generate a new matrix object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @returns Return to Matrix4Transit
     */
    /**
     * Matrix superposition function, which can superpose the effects of two matrices to generate a new matrix object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @returns Return to Matrix4Transit
     */
    combine(options: Matrix4Transit): Matrix4Transit;

    /**
     * Matrix translation function, which can add the x-axis, Y-axis, or Z-axis translation effect to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @returns Return to Matrix4Transit
     */
    /**
     * Matrix translation function, which can add the x-axis, Y-axis, or Z-axis translation effect to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @returns Return to Matrix4Transit
     */
    translate(options: TranslateOption): Matrix4Transit;

    /**
     * Scaling function of the Matrix, which can add the x-axis, Y-axis, or Z-axis scaling effect to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @returns Return to Matrix4Transit
     */
    /**
     * Scaling function of the Matrix, which can add the x-axis, Y-axis, or Z-axis scaling effect to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @returns Return to Matrix4Transit
     */
    scale(options: ScaleOption): Matrix4Transit;

    /**
     * Rotation function of the Matrix. You can add the x-axis, Y-axis, or Z-axis rotation effect to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @returns Return to Matrix4Transit
     */
    /**
     * Rotation function of the Matrix. You can add the x-axis, Y-axis, or Z-axis rotation effect to the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @returns Return to Matrix4Transit
     */
    rotate(options: RotateOption): Matrix4Transit;

    /**
     * Matrix coordinate point conversion function, which can apply the current transformation effect to a coordinate point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @returns Return to Matrix4Transit
     */
    /**
     * Matrix coordinate point conversion function, which can apply the current transformation effect to a coordinate point.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @returns Return to Matrix4Transit
     */
    transformPoint(options: [number, number]): [number, number];
  }

  /**
   * Constructor of Matrix, which can create a fourth-order matrix based on the input parameters. The matrix is column-first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @returns Return to Matrix4Transit
   */
  /**
   * Constructor of Matrix, which can create a fourth-order matrix based on the input parameters. The matrix is column-first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @returns Return to Matrix4Transit
   */
  function init(
    options: [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
    ],
  ): Matrix4Transit;

  /**
   * Matrix initialization function, which can return an identity matrix object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @returns Return to Matrix4Transit
   */
  /**
   * Matrix initialization function, which can return an identity matrix object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @returns Return to Matrix4Transit
   */
  function identity(): Matrix4Transit;

  /**
   * Copy function of Matrix, which can copy a copy of the current matrix object.
   * @returns Return to Matrix4Transit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  function copy(): Matrix4Transit;

  /**
   * The inverse function of Matrix returns an inverse matrix of the current matrix object, that is, the effect is exactly the opposite.
   * @returns Return to Matrix4Transit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  function invert(): Matrix4Transit;

  /**
   * Matrix superposition function, which can superpose the effects of two matrices to generate a new matrix object.
   * @returns Return to Matrix4Transit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  function combine(options: Matrix4Transit): Matrix4Transit;

  /**
   * Matrix translation function, which can add the x-axis, Y-axis, or Z-axis translation effect to the current matrix.
   * @returns Return to Matrix4Transit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  function translate(options: TranslateOption): Matrix4Transit;

  /**
   * Scaling function of the Matrix, which can add the x-axis, Y-axis, or Z-axis scaling effect to the current matrix.
   * @returns Return to Matrix4Transit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  function scale(options: ScaleOption): Matrix4Transit;

  /**
   * Rotation function of the Matrix. You can add the x-axis, Y-axis, or Z-axis rotation effect to the current matrix.
   * @returns Return to Matrix4Transit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  function rotate(options: RotateOption): Matrix4Transit;

  /**
   * Matrix coordinate point conversion function, which can apply the current transformation effect to a coordinate point.
   * @returns Return to Matrix4Transit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  function transformPoint(options: [number, number]): [number, number];
}

export default matrix4;
