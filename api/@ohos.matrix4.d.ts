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
 * @file Matrix Transformation
 * @kit ArkUI
 */

/**
 * Provides matrix transformation capabilities for components, including translation, rotation, and scaling. For 
 * details, see [Transformation]{@link ./@internal/component/ets/common}.
 * 
 * **Matrix4** can be used in the following scenarios:
 * 
 * In [Transformation]{@link ./@internal/component/ets/common}, the 
 * [transform]{@link CommonMethod#transform(transform: Optional<object>)} API uses the **Matrix4** object to set the two
 * -dimensional transformation matrix for a component, and the [transform3D]{@link CommonMethod#transform3D} API uses 
 * the **Matrix4** object to set the three-dimensional transformation matrix for a component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare namespace matrix4 {
  /**
   * Describes the translation parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface TranslateOption {
    /**
     * Translation distance along the x-axis.
     * 
     * Unit: px
     * 
     * Default value: **0**
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    x?: number;

    /**
     * Translation distance along the y-axis.
     * 
     * Unit: px
     * 
     * Default value: **0**
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    y?: number;

    /**
     * Translation distance along the z-axis.
     * 
     * Unit: px
     * 
     * Default value: **0**
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    z?: number;
  }

  /**
   * Describes the scale parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface ScaleOption {
    /**
     * Scaling multiple along the x-axis. x = 1: No scaling is applied, and the original size is retained.
     * 
     * x > 1: The image is scaled up along the x-axis.
     * 
     * 0 < x < 1: The image is scaled down along the x-axis.
     * 
     * x < 0: The image is scaled in the reverse direction along the x-axis.
     * 
     * Default value: **1**
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    x?: number;

    /**
     * Scaling multiple along the y-axis. y > 1: The image is scaled up along the y-axis.
     * 
     * 0 < y < 1: The image is scaled down along the y-axis.
     * 
     * y < 0: The image is scaled in the reverse direction along the y-axis.
     * 
     * Default value: **1**
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    y?: number;

    /**
     * Scaling multiple along the z-axis. z = 1: No scaling is applied, and the original size is retained.
     * 
     * z > 1: The image is scaled up along the z-axis.
     * 
     * 0 < z < 1: The image is scaled down along the z-axis.
     * 
     * z < 0: The image is scaled in the reverse direction along the z-axis.
     * 
     * Default value: **1**
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    z?: number;

    /**
     * X-coordinate of the transformation center.
     * 
     * Unit: px
     * 
     * Default value: X-coordinate of the component center
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    centerX?: number;

    /**
     * Y-coordinate of the transformation center.
     * 
     * Unit: px
     * 
     * Default value: Y-coordinate of the component center
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    centerY?: number;
  }

  /**
   * Describes the rotation parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface RotateOption {
    /**
     * X-coordinate of the rotation axis vector, which specifies the component of the rotation axis in the x direction. 
     * Pass this parameter when rotating around an axis with an x component. If not passed, the x component of the 
     * rotation axis defaults to **0**.
     * 
     * **Note:** The rotation vector is meaningful only when at least one of x, y, and z is not 0.
     * 
     * Default value: **0**
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    x?: number;

    /**
     * Y-coordinate of the rotation axis vector, which specifies the component of the rotation axis in the y direction. 
     * Pass this parameter when rotating around an axis with a y component. If not passed, the y component of the 
     * rotation axis defaults to **0**.
     * 
     * **Note:** The rotation vector is meaningful only when at least one of x, y, and z is not 0.
     * 
     * Default value: **0**
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    y?: number;

    /**
     * Z-coordinate of the rotation axis vector, which specifies the component of the rotation axis in the z direction. 
     * Pass this parameter when rotating around an axis with a z component. If not passed, the z component of the 
     * rotation axis defaults to **0**.
     * 
     * Default value: **0**
     * 
     * Value range: (-∞, +∞).
     * 
     * **Note:** The rotation vector is meaningful only when at least one of x, y, and z is not 0; otherwise, no 
     * rotation effect is produced.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    z?: number;

    /**
     * Additional x-axis offset of the center point of a single matrix transformation operation relative to the 
     * component transform center point (anchor point).
     * 
     * Unit: px
     * 
     * Default value: **0**
     * 
     * **Note**
     * 
     * When the value is **0**, the matrix transformation center in the x direction is exactly the component anchor 
     * point in the x direction. The value indicates the additional offset relative to the component anchor point in the
     * x direction. For details about the implementation, see 
     * [Example 3: Implementing Rotation Around a Center Point](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#example-3-implementing-rotation-around-a-center-point).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    centerX?: number;

    /**
     * Additional y-axis offset of the center point of a single matrix transformation operation relative to the 
     * component transform center point (anchor point).
     * 
     * Unit: px
     * 
     * Default value: **0**
     * 
     * **Note**
     * 
     * When the value is **0**, the matrix transformation center in the y direction is exactly the component anchor 
     * point in the y direction. The value indicates the additional offset relative to the component anchor point in the
     * y direction. For details about the implementation, see 
     * [Example 3: Implementing Rotation Around a Center Point](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#example-3-implementing-rotation-around-a-center-point).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    centerY?: number;

    /**
     * Rotation angle, which is used to set the rotation amount of the component around the rotation axis. Pass this 
     * parameter when the component needs to be rotated. If not passed, the component is not rotated.
     * 
     * Unit: degree (°)
     * 
     * Default value: **0**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    angle?: number;
  }

  /**
   * Defines the data structure of a coordinate point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface Point {

    /**
     * X-axis coordinate.
     * 
     * Unit: px
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    x: number;

    /**
     * Y-axis coordinate.
     * 
     * Unit: px
     * 
     * Value range: (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    y: number;
  }

  /**
   * Describes the configuration options for polygon-to-polygon transformation mapping.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface PolyToPolyOptions {

    /**
     * Vertex coordinates of the source polygon, used to define the start shape of the transformation mapping.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    src: Array<Point>;

    /**
     * Start index of the source point coordinates, used to specify the position in the **src** array from which point 
     * obtaining starts. This parameter is passed when the source point needs to be obtained from a specific position in
     * the **src** array. If not passed, the point is obtained from index 0.
     * 
     * Default value: **0**
     * 
     * Value range: [0, +∞)
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    srcIndex?: number;

    /**
     * Vertex coordinates of the target polygon, used to define the target shape of the transformation mapping.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    dst:Array<Point>;

    /**
     * Start index of the destination point coordinates, used to specify the position in the **dst** array from which 
     * destination point obtaining starts.
     * 
     * Default value: **src.length/2**
     * 
     * Value range: [0, +∞)
     *
     * @default src.Length/2
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    dstIndex?: number;

    /**
     * Number of used points. Prerequisite: The number of points in the **src** and **dst** arrays must be no less than 
     * the value of **pointCount**. If the number of used points is 0, the identity matrix is returned. If the number is
     * 1, one source point and one destination point are used, and a translation matrix that translates the source point
     * to the destination point is returned. If the number is 2, an affine transformation matrix (including rotation, 
     * scaling, and translation) is returned. If the number is 3, an affine transformation matrix (including rotation, 
     * scaling, translation, and shearing) is returned. If the number is 4, a perspective transformation matrix is 
     * returned. The value does not take effect when it is out of range.
     * 
     * Default value: **0**
     * 
     * Value range: [0, +∞)
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    pointCount?:number;
  }
  /**
   * Implements a matrix object. It supports combining multiple transformation effects by chained calls of the 
   * **translate**, **scale**, **rotate**, and **skew** APIs.
   * 
   * > **NOTE**
   * >
   * > When multiple transformation APIs are called in chain mode, the order of transformations affects the final 
   * > result. For example, translating first and then scaling produces a different transformation effect from scaling 
   * > first and then translating. Select the correct call order based on the expected effect.
   * >
   * > The **translate**, **scale**, **rotate**, **skew**, **combine**, and **invert** APIs modify the original matrix 
   * > on which they are called. To keep the original matrix unchanged, call **copy()** before performing the 
   * > transformation, for example, **matrix.copy().translate({x:100})**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface Matrix4Transit {
    /**
     * Copies this matrix object.
     *
     * @returns { Matrix4Transit } Copy object of the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    copy(): Matrix4Transit;

    /**
     * Inverts this matrix object. The matrix that calls this API will be changed and transformed into its inverse 
     * matrix, which is then returned. The product of the inverse matrix and the original matrix is the identity matrix.
     *
     * @returns { Matrix4Transit } Inverse matrix object of the current matrix.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    invert(): Matrix4Transit;

    /**
     * Combines the effects of two matrices to generate a new matrix object. The matrix that calls this API will be 
     * changed.
     *
     * @param { Matrix4Transit } options - Matrix object to be combined. Its transformation effect is combined on the
     *     current matrix (matrix multiplication) to generate a new transformation matrix.
     * @returns { Matrix4Transit } Object after matrix combination.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    combine(options: Matrix4Transit): Matrix4Transit;

    /**
     * Translates this matrix object along the x, y, and z axes. The matrix that calls this API will be changed.
     *
     * @param { TranslateOption } options - Translation configuration.
     * @returns { Matrix4Transit } Matrix object after the translation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    translate(options: TranslateOption): Matrix4Transit;

    /**
     * Scales this matrix object along the x, y, and z axes. The matrix that calls this API will be changed.
     *
     * @param { ScaleOption } options - Scaling configuration.
     * @returns { Matrix4Transit } Matrix object after the scaling.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    scale(options: ScaleOption): Matrix4Transit;

    /**
     * Skews this matrix object along the x and y axes. The matrix that calls this API will be changed.
     *
     * @param { number } x - Skew on the x-axis. The value is the shear factor (that is, the tan value).
     *     <br>The value **0** indicates no skew, a positive value indicates the skew along the positive direction of
     *     the x-axis, and a negative value indicates the skew along the negative direction of the x-axis.
     * @param { number } y - Skew on the y-axis. The value is the shear factor (that is, the tan value).
     *     <br>The value **0** indicates no skew, a positive value indicates the skew along the positive direction of
     *     the y-axis, and a negative value indicates the skew along the negative direction of the y-axis.
     * @returns { Matrix4Transit } Matrix object after the skewing.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    skew(x: number, y: number): Matrix4Transit;

    /**
     * Rotates this matrix object along the x, y, and z axes. The matrix that calls this API will be changed.
     *
     * @param { RotateOption } options - Rotation configuration.
     * @returns { Matrix4Transit } Matrix object after the rotation.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    rotate(options: RotateOption): Matrix4Transit;

    /**
     * Applies the current transformation effect to a coordinate point.
     *
     * @param { [number, number] } options - Coordinate point to be transformed, in the format of [x, y], where **x** is
     *     the horizontal coordinate and **y** is the vertical coordinate, in px.
     * @returns { [number, number] } Coordinate point after matrix transformation, in the format of [x, y].
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    transformPoint(options: [number, number]): [number, number];

    /**
     * Maps the vertex coordinates of a polygon to those of another polygon. This API is applicable to scenarios 
     * requiring custom deformation, such as image perspective correction, 3D visual effects, and card flip effects.
     *
     * @param { PolyToPolyOptions } options - Options for polygon mapping, which specify the mapping relationship
     *     between the source polygon vertex coordinates and the target polygon vertex coordinates.
     * @returns { Matrix4Transit } Matrix object after the mapping.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    setPolyToPoly(options: PolyToPolyOptions): Matrix4Transit;
  }

  /**
   * Constructor of **Matrix4**. It is used to create a 4 x 4 matrix based on the input parameters. The matrix is column
   * -major, that is, the 16 values in the input array are filled into the matrix column by column: array[0] to array[3]
   * form the first column, array[4] to array[7] form the second column, array[8] to array[11] form the third column, 
   * and array[12] to array[15] form the fourth column. When only an identity matrix is required, you are advised to use
   * **matrix4.identity()**.
   *
   * @param {
   *     
   *     
   *
   *     [number,number,number,number,number,number,number,number,number,number,number,number,number,number,number,number]
   *     } options - Number array whose length is 16 (4 x 4). For details, see **4 x 4 matrix description**.
   *     <br>Value range of each number: (-∞, +∞)
   *     <br>Default value:
   *     <br>[1, 0, 0, 0,
   *     <br>0, 1, 0, 0,
   *     <br>0, 0, 1, 0,
   *     <br>0, 0, 0, 1]
   * @returns { Matrix4Transit } 4 x 4 matrix object created based on the input parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
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
      number
    ]
  ): Matrix4Transit;

  /**
   * Initializes a matrix and returns an identity matrix object, which can serve as the basis for subsequent matrix 
   * transformation operations.
   *
   * @returns { Matrix4Transit } Identity matrix object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function identity(): Matrix4Transit;

  /**
   * Copies this matrix object.
   *
   * @returns { Matrix4Transit } Copy object of the current matrix.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.copy
   */
  function copy(): Matrix4Transit;

  /**
   * Inverts this matrix object. The matrix that calls this API will be changed.
   *
   * @returns { Matrix4Transit } Inverse matrix object of the current matrix.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.invert
   */
  function invert(): Matrix4Transit;

  /**
   * Combines the effects of two matrices to generate a new matrix object. The matrix that calls this API will be 
   * changed.
   * 
   * > **NOTE**
   * >
   * > The transformation results of **matrixA.combine(matrixB)** and **matrixB.combine(matrixA)** are different. The 
   * > call order of **combine()** determines the order in which the transformations are combined. For example, 
   * > translating first and then scaling produces a different transformation effect from scaling first and then 
   * > translating. Select the correct call order based on the expected transformation effect. To keep the original 
   * > matrix unchanged, call **copy()** before calling **combine()**, for example, **matrixA.copy().combine(matrixB)**.
   *
   * @param { Matrix4Transit } options - Matrix object to be combined. Its transformation effect will be combined with
   *     the identity matrix.
   * @returns { Matrix4Transit } Matrix object after combination.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.combine
   */
  function combine(options: Matrix4Transit): Matrix4Transit;

  /**
   * Translates this matrix object along the x, y, and z axes. The matrix that calls this API will be changed.
   *
   * @param { TranslateOption } options - Translation options for setting the translation distance on the x-axis, y-
   *     axis, and z-axis.
   * @returns { Matrix4Transit } Matrix object after translation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.translate
   */
  function translate(options: TranslateOption): Matrix4Transit;

  /**
   * Scales this matrix object along the x, y, and z axes. The matrix that calls this API will be changed.
   *
   * @param { ScaleOption } options - Scaling options for setting the scale multiples of the x-axis, y-axis, and z-axis
   *     and the coordinates of the transform center point.
   * @returns { Matrix4Transit } Matrix object after scaling.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.scale
   */
  function scale(options: ScaleOption): Matrix4Transit;

  /**
   * Rotates this matrix object along the x, y, and z axes. The matrix that calls this API will be changed.
   *
   * @param { RotateOption } options - Rotation options for setting the rotation axis vector (x/y/z), rotation angle,
   *     and transform center point offset.
   * @returns { Matrix4Transit } Matrix object after rotation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.rotate
   */
  function rotate(options: RotateOption): Matrix4Transit;

  /**
   * Applies the current transformation effect to a coordinate point.
   *
   * @param { [number, number] } options - Point to be transformed.
   * @returns { [number, number] } Coordinate point after matrix transformation, in the format [x, y].
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.transformPoint
   */
  function transformPoint(options: [number, number]): [number, number];
}

export default matrix4;