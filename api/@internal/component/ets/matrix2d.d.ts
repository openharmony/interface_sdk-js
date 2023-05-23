/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * 2D transformation matrix, supporting rotation, translation, and scaling of the X-axis and Y-axis
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 2D transformation matrix, supporting rotation, translation, and scaling of the X-axis and Y-axis
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * 2D transformation matrix, supporting rotation, translation, and scaling of the X-axis and Y-axis
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @crossplatform
 * @since 10
 */
declare class Matrix2D {
  /**
   * Horizontal Zoom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Horizontal Zoom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Horizontal Zoom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  scaleX?: number;

  /**
   * Vertical Tilt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Vertical Tilt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Vertical Tilt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  rotateY?: number;

  /**
   * Horizontal Tilt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Horizontal Tilt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Horizontal Tilt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  rotateX?: number;

  /**
   * Vertical Zoom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Vertical Zoom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Vertical Zoom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  scaleY?: number;

  /**
   * Horizontal movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Horizontal movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Horizontal movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  translateX?: number;

  /**
   * Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Vertical movement
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  translateY?: number;

  /**
   * Transforms the current 2D matrix back to the identity matrix (i.e., without any rotational
   * translation scaling effect)
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Transforms the current 2D matrix back to the identity matrix (i.e., without any rotational
   * translation scaling effect)
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Transforms the current 2D matrix back to the identity matrix (i.e., without any rotational
   * translation scaling effect)
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  identity(): Matrix2D;

  /**
   * Transform the current 2D matrix into an inverse matrix (that is, the transformation effect
   * is the opposite effect of the original)
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Transform the current 2D matrix into an inverse matrix (that is, the transformation effect
   * is the opposite effect of the original)
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Transform the current 2D matrix into an inverse matrix (that is, the transformation effect
   * is the opposite effect of the original)
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  invert(): Matrix2D;

  /**
   * The matrix is superimposed in right multiplication mode. When the input parameter is empty,
   * the matrix is superimposed.
   * @param { Matrix2D } other - Matrix to be superimposed
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The matrix is superimposed in right multiplication mode. When the input parameter is empty,
   * the matrix is superimposed.
   * @param { Matrix2D } other - Matrix to be superimposed
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  multiply(other?: Matrix2D): Matrix2D;

  /**
   * Adds the rotation effect of the X and Y axes to the current matrix.
   * @param { number } rx - Rotation effect of the X-axis
   * @param { number } ry - Rotation effect of the Y-axis
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Adds the rotation effect of the X and Y axes to the current matrix.
   * @param { number } rx - Rotation effect of the X-axis
   * @param { number } ry - Rotation effect of the Y-axis
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   * @useinstead rotate(degree: number, rx?: number, ry?: number)
   */
  rotate(rx?: number, ry?: number): Matrix2D;

  /**
   * Adds the rotation effect of the X and Y axes to the current matrix.
   * @param { number } degree - The rotation angle, clockwise in radians.
   * @param { number } rx - Rotation effect of the X-axis
   * @param { number } ry - Rotation effect of the Y-axis
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  rotate(degree: number, rx?: number, ry?: number): Matrix2D;

  /**
   * Adds the translation effect of the X and Y axes to the current matrix.
   * @param { number } tx - X-axis translation effect
   * @param { number } ty - Y-axis translation effect
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Adds the translation effect of the X and Y axes to the current matrix.
   * @param { number } tx - X-axis translation effect
   * @param { number } ty - Y-axis translation effect
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds the translation effect of the X and Y axes to the current matrix.
   * @param { number } tx - X-axis translation effect
   * @param { number } ty - Y-axis translation effect
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  translate(tx?: number, ty?: number): Matrix2D;

  /**
   * Adds the scaling effect of the X and Y axes to the current matrix.
   * @param { number } sx - X-axis scaling effect
   * @param { number } sy - Y-axis scaling effect
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Adds the scaling effect of the X and Y axes to the current matrix.
   * @param { number } sx - X-axis scaling effect
   * @param { number } sy - Y-axis scaling effect
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds the scaling effect of the X and Y axes to the current matrix.
   * @param { number } sx - X-axis scaling effect
   * @param { number } sy - Y-axis scaling effect
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  scale(sx?: number, sy?: number): Matrix2D;

  /**
   * Constructs a 2D change matrix object. The default value is the unit matrix.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  constructor();
}
