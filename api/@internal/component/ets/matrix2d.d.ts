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
 * A matrix object used for graphic transformation in 
 * [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}, 
 * [OffscreenCanvasRenderingContext2D]{@link OffscreenCanvasRenderingContext2D}, 
 * [CanvasPattern]{@link CanvasPattern}, and [Path2D]{@link Path2D}. 
 * It can perform scaling, rotation, translation, and other transformations on the matrix.
 * 
 * **Matrix2D** is used in the following scenarios:
 * 
 * 1. In [CanvasRenderingContext2D]{@link CanvasRenderingContext2D} and 
 * [OffscreenCanvasRenderingContext2D]{@link OffscreenCanvasRenderingContext2D}, call 
 * [getTransform]{@link CanvasRenderer#getTransform} to obtain the canvas graphic transformation **Matrix2D** 
 * object, and call [setTransform]{@link CanvasPattern#setTransform} to apply the graphic transformation 
 * corresponding to the **Matrix2D** object to subsequent drawing content.
 * 2. In [CanvasPattern]{@link CanvasPattern}, call 
 * [setTransform](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvaspattern.md#settransform) 
 * to apply the graphic transformation corresponding to the **Matrix2D** object to the 
 * [CanvasPattern]{@link CanvasPattern} object.
 * 3. In [Path2D]{@link Path2D}, call 
 * [addPath](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-path2d.md#addpath) 
 * to apply the graphic transformation corresponding to the **Matrix2D** object to the 
 * [Path2D]{@link Path2D} object.
 *
 * > **NOTE**
 * >
 * > You can use the [px2vp](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#px2vp12) API for unit
 * > conversion.
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
   * Horizontal scale factor. The value range is unlimited. Values greater than 1 enlarge, less than 1 shrink, and 
   * negative values flip horizontally.
   * 
   * Default: **1**
   * 
   * The value **undefined** is treated as invalid. **NaN** and **Infinity** cause **Matrix2D** to behave abnormally, 
   * and drawn content will not be displayed after setting.
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
   * Vertical skew factor. The value range is unlimited.
   * 
   * Default: **0**
   * 
   * The value **undefined** is treated as invalid. **NaN** and **Infinity** cause **Matrix2D** to behave abnormally, 
   * and drawn content will not be displayed after setting.
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
   * Horizontal skew factor. The value range is unlimited.
   * 
   * Default: **0**
   * 
   * The value **undefined** is treated as invalid. **NaN** and **Infinity** cause **Matrix2D** to behave abnormally, 
   * and drawn content will not be displayed after setting.
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
   * Vertical scale factor. The value range is unlimited. Values greater than 1 enlarge, less than 1 shrink, and 
   * negative values flip vertically.
   * 
   * Default: **1**
   * 
   * The value **undefined** is treated as invalid. **NaN** and **Infinity** cause **Matrix2D** to behave abnormally, 
   * and drawn content will not be displayed after setting.
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
   * Horizontal translation distance. The value range is unlimited.
   * 
   * Default: **0**
   * 
   * The value **undefined** is treated as invalid. **NaN** and **Infinity** cause **Matrix2D** to behave abnormally, 
   * and drawn content will not be displayed after setting.
   * 
   * Default unit: vp
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
   * Vertical translation distance. The value range is unlimited.
   * 
   * Default: **0**
   * 
   * The value **undefined** is treated as invalid. **NaN** and **Infinity** cause **Matrix2D** to behave abnormally, 
   * and drawn content will not be displayed after setting.
   * 
   * Default unit: vp
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
   * Creates an identity matrix. It is commonly used to reset the transformation matrix, clearing all previous 
   * transformation operations so that subsequent drawing content is not affected by previous transformations.
   *
   * @returns { Matrix2D } Identity matrix, which can be used to initialize or reset the graphics transformation state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  identity(): Matrix2D;

  /**
   * Obtains the inverse of the current matrix. It is commonly used to undo previous transformation operations or 
   * calculate reverse transformations, enabling reverse mapping of the coordinate system.
   *
   * @returns { Matrix2D } Inverse matrix result, which can be used for reverse transformation or to undo previous
   *     transformation operations.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  invert(): Matrix2D;

  /**
   * Multiplies the current matrix by the target matrix. This API is an empty API and has no actual effect.
   * 
   * This API is deprecated since API version 10 and has no actual drawing effect, so no example is provided.
   *
   * @param { Matrix2D } other - Target matrix.
   *     <br>Invalid values **undefined** and **null** are treated as invalid inputs.
   *     <br>Default value: **null**.
   * @returns { Matrix2D } This API is an empty implementation, and its return value has no practical meaning.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form [since 9]
   * @since 8 dynamic
   * @deprecated since 10
   */
  multiply(other?: Matrix2D): Matrix2D;

  /**
   * Performs a rotation operation on the current matrix. This API is an empty API and has no actual effect.
   *
   * @param { number } rx - Horizontal coordinate of the rotation point. The value range is unlimited.
   *     <br>Default unit: vp
   *     <br>The abnormal values **undefined** and **null** are processed as invalid values, and **NaN** and
   *     **Infinity** cause **Matrix2D** exceptions.
   *     <br>Default value: **0**
   * @param { number } ry - Vertical coordinate of the rotation point. The value range is unlimited.
   *     <br>Default unit: vp
   *     <br>The abnormal values **undefined** and **null** are processed as invalid values, and **NaN** and
   *     **Infinity** cause **Matrix2D** exceptions.
   *     <br>Default value: **0**
   * @returns { Matrix2D } Result matrix object after rotation, which can be used to perform rotation transformation on
   *     graphics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form [since 9]
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead rotate
   */
  rotate(rx?: number, ry?: number): Matrix2D;

  /**
   * Performs a left-multiply rotation operation on the current matrix, centered at the rotation point. It is commonly 
   * used in scenarios such as graphic rotation animation or image rotation processing.
   *
   * @param { number } degree - Rotation angle (in radians). The value range is unlimited. A positive value indicates
   *     clockwise rotation. You can convert an angle to radians using `angle * Math.PI / 180` and pass it to this API.
   *     <br>Invalid values **undefined** and **null** are treated as invalid values. **NaN** and **Infinity** will
   *     cause **Matrix2D** exceptions.
   *     <br>Default unit: radians
   * @param { number } rx - Horizontal coordinate of the rotation point. The value range is not limited.
   *     <br>Default unit: vp.
   *     <br>Invalid values **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values
   *     will trigger **Matrix2D** exceptions.
   *     <br>Default value: **0**.
   * @param { number } ry - Vertical coordinate of the rotation point. The value range is not limited.
   *     <br>Default unit: vp.
   *     <br>Invalid values **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values
   *     will trigger **Matrix2D** exceptions.
   *     <br>Default value: **0**.
   * @returns { Matrix2D } Resulting matrix object after rotation, which can be used to perform rotation transformation
   *     on graphics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  rotate(degree: number, rx?: number, ry?: number): Matrix2D;

  /**
   * Performs a left-multiply translation operation on the current matrix. It is commonly used in scenarios such as 
   * adjusting graphic positions, implementing displacement animations, or offsetting the canvas coordinate system.
   *
   * @param { number } tx - Horizontal translation distance. The value range is not limited.
   *     <br>Invalid values **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values
   *     will trigger **Matrix2D** exceptions.
   *     <br>Default unit: vp.
   *     <br>Default value: **0**.
   * @param { number } ty - Vertical translation distance. The value range is not limited.
   *     <br>Invalid values **undefined** and **null** are treated as invalid inputs. **NaN** and **Infinity** values
   *     will trigger **Matrix2D** exceptions.
   *     <br>Default unit: vp.
   *     <br>Default value: **0**.
   * @returns { Matrix2D } Result matrix object after translation, which can be used to perform translation
   *     transformation on graphics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translate(tx?: number, ty?: number): Matrix2D;

  /**
   * Performs a left-multiply scaling operation on the current matrix. It is commonly used in scenarios such as graphic 
   * scaling or flipping.
   *
   * @param { number } sx - Horizontal scaling ratio coefficient. The value range is not limited. A value greater than 1
   *     indicates magnification, less than 1 indicates reduction, and a negative value indicates horizontal flipping.
   *     <br>Abnormal values **undefined** and **null** are treated as invalid input. **NaN** and **Infinity** cause
   *     **Matrix2D** exceptions.
   *     <br>Default value: **1.0**
   * @param { number } sy - Vertical scaling ratio coefficient. The value range is not limited. A value greater than 1
   *     indicates magnification, less than 1 indicates reduction, and a negative value indicates vertical flipping.
   *     <br>Abnormal values **undefined** and **null** are treated as invalid input. **NaN** and **Infinity** cause
   *     **Matrix2D** exceptions.
   *     <br>Default value: **1.0**
   * @returns { Matrix2D } Scaling result matrix object, which can be used to scale graphics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scale(sx?: number, sy?: number): Matrix2D;

  /**
   * Constructs a two-dimensional transformation matrix object. The default value is a matrix whose attributes are all 
   * 0.
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
   * Constructs a two-dimensional transformation matrix object. The default value is a matrix whose attributes are all 
   * 0. The unit mode of the Matrix2D object can be configured.
   *
   * @param { LengthMetricsUnit } [unit] - Unit mode of the **Matrix2D** object. The configuration cannot be dynamically
   *     changed after being set. The configuration method is the same as that of
   *     [CanvasRenderingContext2D]{@link CanvasRenderingContext2D}.
   *     <br>Default value: **DEFAULT**
   *     <br>If the invalid values **NaN** and **Infinity** are passed in, the default value is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(unit: LengthMetricsUnit);
}
