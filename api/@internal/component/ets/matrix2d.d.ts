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
 * @file
 * @kit ArkUI
 */

/**
 * **Matrix2D** allows you to perform matrix transformation, such as scaling, rotating, and translating.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class Matrix2D {
  /**
   * Horizontal scaling coefficient. The value range is not limited.<br>If the value is undefined, it is regarded as an
   * invalid value. If the value is NaN or Infinity, the Matrix2D will be abnormal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scaleX?: number;

  /**
   * Vertical skew coefficient. The value range is not limited.<br>If the value is undefined, it is regarded as an
   * invalid value. If the value is NaN or Infinity, the Matrix2D will be abnormal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  rotateY?: number;

  /**
   * Horizontal skew coefficient. The value range is not limited.<br>If the value is undefined, it is regarded as an
   * invalid value. If the value is NaN or Infinity, the Matrix2D will be abnormal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  rotateX?: number;

  /**
   * Vertical scaling coefficient. The value range is not limited.<br>If the value is undefined, it is regarded as an
   * invalid value. If the value is NaN or Infinity, the Matrix2D will be abnormal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scaleY?: number;

  /**
   * Horizontal translation distance. The value range is unlimited. <br>The abnormal value undefined is processed as an
   * invalid value. NaN and Infinity will cause Matrix2D exceptions. After the setting, the drawn content is not
   * displayed. <br>Default unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translateX?: number;

  /**
   * Vertical translation distance. The value range is unlimited. <br>The abnormal value undefined is processed as an
   * invalid value. NaN and Infinity will cause Matrix2D exceptions. After the setting, the drawn content is not
   * displayed. <br>Default unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translateY?: number;

  /**
   * Transforms the current 2D matrix back to the identity matrix (i.e., without any rotational
   * translation scaling effect)
   *
   * @returns { Matrix2D } - Identity matrix.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  identity(): Matrix2D;

  /**
   * Transform the current 2D matrix into an inverse matrix (that is, the transformation effect
   * is the opposite effect of the original)
   *
   * @returns { Matrix2D } - Inverse of the current matrix.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  invert(): Matrix2D;

  /**
   * The matrix is superimposed in right multiplication mode. When the input parameter is empty,
   * the matrix is superimposed.
   *
   * @param { Matrix2D } other - Target matrix.
   *     <br>Invalid values **undefined** and **null** are treated as invalid
   *     inputs.<br>Default value: **null**.
   * @returns { Matrix2D } - Matrix of the multiplication result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form [since 9]
   * @since 8 dynamic
   * @deprecated since 10
   */
  multiply(other?: Matrix2D): Matrix2D;

  /**
   * Adds the rotation effect of the X and Y axes to the current matrix.
   *
   * @param { number } rx - Horizontal coordinate of the rotation point. The value range is not limited.<br>Invalid
   *     values **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values will trigger
   *     **Matrix2D** exceptions.<br>Default unit: vp.
   * @param { number } ry - Vertical coordinate of the rotation point. The value range is not limited.<br>Invalid values
   *     **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values will trigger
   *     **Matrix2D** exceptions.<br>Default unit: vp.
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form [since 9]
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead rotate
   */
  rotate(rx?: number, ry?: number): Matrix2D;

  /**
   * Adds the rotation effect of the X and Y axes to the current matrix.
   *
   * @param { number } degree - Rotation angle. The value range is not limited. Positive angles represent clockwise
   *     rotation. You can convert the angle to radians using the following formula: degree * Math.PI/180.
   *     <br>Invalid values **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values
   *     will trigger **Matrix2D** exceptions.<br>Default unit: radian.
   * @param { number } rx - Horizontal coordinate of the rotation point. The value range is not limited.<br>Default
   *     unit: vp.<br>Invalid values **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity**
   *     values will trigger **Matrix2D** exceptions.<br>Default value: **0**.
   * @param { number } ry - Vertical coordinate of the rotation point. The value range is not limited.<br>Default unit:
   *     vp.<br>Invalid values **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values
   *     will trigger **Matrix2D** exceptions.<br>Default value: **0**.
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  rotate(degree: number, rx?: number, ry?: number): Matrix2D;

  /**
   * Performs a left multiplication translation operation on this matrix.
   *
   * @param { number } tx - Horizontal translation distance. The value range is not limited.<br>Invalid values
   *     **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values will trigger
   *     **Matrix2D** exceptions.<br>Default unit: vp.<br>Default value: **0**.
   * @param { number } ty - Vertical translation distance. The value range is not limited.<br>Invalid values
   *     **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values will trigger
   *     **Matrix2D** exceptions.<br>Default unit: vp.<br>Default value: **0**.
   * @returns { Matrix2D } - Matrix of the translation result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translate(tx?: number, ty?: number): Matrix2D;

  /**
   * Adds the scaling effect of the X and Y axes to the current matrix.
   *
   * @param { number } sx - Horizontal scaling ratio coefficient. The value range is not limited.<br>Invalid values
   *     **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values will trigger
   *     **Matrix2D** exceptions.<br>Default value: **1.0**.
   * @param { number } sy - Vertical scaling ratio coefficient. The value range is not limited.<br>Invalid values
   *     **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values will trigger
   *     **Matrix2D** exceptions.<br>Default value: **1.0**.
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scale(sx?: number, sy?: number): Matrix2D;

  /**
   * Constructs a two-dimensional transformation matrix object.
   * The default value is a matrix whose attributes are all 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * Constructs a two-dimensional transformation matrix object.
   * The default value is a matrix whose attributes are all 0. The unit mode of the Matrix2D object can be configured.
   *
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **Matrix2D** object. The value cannot be dynamically changed
   *     once set. The configuration method is the same as that of CanvasRenderingContext2D.<br>For abnormal values NaN
   *     and Infinity, the default values are used.<br>Default value: DEFAULT.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(unit: LengthMetricsUnit);
}
