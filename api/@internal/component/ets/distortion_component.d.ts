/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * Defines the two-dimensional vector, which contains the x and y coordinates and indicates the position relationship.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Vector2 = import('../api/arkui/Graphics').Vector2;

/**
 * Defines the four-dimensional vector, which contains x, y, z, and w coordinates that indicate the barrel distortion 
 * degree.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Vector4 = import('../api/arkui/Graphics').Vector4;

/**
 * Defines the spatial distortion parameters.
 * 
 * > **NOTE**
 * >
 * > - The coordinates of the four corner points can be set according to the following coordinate system. For a 
 * > component, the top-left corner is at **{ x:0, y:0 }**, the top-right corner is at **{ x:1, y:0 }**, the bottom-left
 * > corner is at **{ x:0, y:1 }**, and the bottom-right corner is at **{ x:1, y:1 }**.
 * >
 * > - If the bottomLeft attribute is set to **{ x:0.5, y:0.5 }**, it indicates that the bottom-left corner is distorted
 * > to the center of the component, producing an inward-shrinking distortion effect in the bottom-left area of the 
 * > component.
 * >
 * > - When setting the coordinates of the four corner points, comply with the spatial logic: the y coordinate of the 
 * > top corner points should be smaller than that of the bottom corner points, and the x coordinate of the left corner 
 * > points should be smaller than that of the right corner points, to ensure that the distorted quadrilateral maintains
 * > a reasonable spatial perspective relationship. (That is, the corner point coordinates should maintain a reasonable 
 * > spatial perspective relationship to avoid vertical flipping or crossing.) For example, if **topLeft** = 
 * > **{ x:0, y:0.7 }** and **bottomLeft** = **{ x:0, y:0.2 }**, the top-left corner is lower than the bottom-left 
 * > corner, which violates the spatial logic and may cause rendering exceptions (such as crossing or flipping of mesh 
 * > patches, resulting in disordered or unpredictable visual results).
 * >
 * > - The coordinates of the four corner points can be used together with **barrelDistortion** to build richer spatial 
 * > distortion effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DistortionParam {
  /**
   * Coordinate of the top-left corner. Value principle: the coordinate value is a ratio relative to the component size,
   * where 0 indicates 0% and 1 indicates 100%. Recommended value range: [0, 1]. The value must comply with spatial 
   * logic to avoid rendering anomalies.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  topLeft: Vector2;
  /**
   * Coordinate of the top-right corner. Value principle: the coordinate value is a ratio relative to the component 
   * size, where 0 indicates 0% and 1 indicates 100%. Recommended value range: [0, 1]. The value must comply with 
   * spatial logic to avoid rendering anomalies.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  topRight: Vector2;
  /**
   * Coordinate of the bottom-left corner. Value principle: the coordinate value is a ratio relative to the component 
   * size, where 0 indicates 0% and 1 indicates 100%. Recommended value range: [0, 1]. The value must comply with 
   * spatial logic to avoid rendering anomalies.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  bottomLeft: Vector2;
  /**
   * Coordinate of the bottom-right corner. Value principle: the coordinate value is a ratio relative to the component 
   * size, where 0 indicates 0% and 1 indicates 100%. Recommended value range: [0, 1]. The value must comply with 
   * spatial logic to avoid rendering anomalies.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  bottomRight: Vector2;
  /**
   * Barrel distortion parameters for the four edges.
   * 
   * The four values in Vector4: **x** for the left edge, **y** for the right edge, **z** for the top edge, and **w** 
   * for the bottom edge.
   * 
   * A positive value indicates the edge is convex, while a negative value indicates it is concave. When the absolute 
   * value of the distortion parameter is 1, the distortion is at its extreme.
   * 
   * Value range for x, y, z, and w: [-1, 1] 
   * 
   * **Note:**
   * 
   * The four components of **barrelDistortion** jointly determine the barrel distortion intensity of the four edges and
   * can be used in combination with the four corner coordinates to create more various spatial distortion.
   * 
   * Geometrically, **x** and **y** determine the bending direction and magnitude of the left and right vertical edges, 
   * while **z** and **w** determine those of the top and bottom horizontal edges. When a component is positive, the 
   * corresponding edge bulges outward from the component, creating a convex barrel distortion; when negative, the 
   * corresponding edge curves inward toward the component, creating a concave pincushion distortion. When the four 
   * component values are similar, the overall effect presents a uniform barrel distortion similar to that of a wide-
   * angle lens; when **x**, **y** differ significantly from **z**, **w**, asymmetric distortion with horizontal or 
   * vertical stretching occurs.
   * 
   * Because extreme values may cause image folding (mesh patches overlapping and flipping) or sampling anomalies (
   * texture coordinates exceeding the valid sampling range), it is recommended to keep **x**, **y**, **z**, and **w** 
   * within the range of [-1, 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  barrelDistortion: Vector4;
}

/**
 * Defines the spatial distortion options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DistortionComponentOptions {
  /**
   * Spatial distortion parameter that produces a distortion effect by specifying the positional relationship of the 
   * four corner points and the barrel distortion degree of the four edges. Pass this parameter when spatial distortion 
   * needs to be applied; if it is not passed, the component is rendered normally without any distortion effect.
   * 
   * Default value: 
   * **{ topLeft: { x:0, y:0 }, topRight: { x:1, y:0 }, bottomLeft: { x:0, y:1 }, bottomRight: { x:1, y:1 }, barrelDistortion: { x:0, y:0, z:0, w:0 } }**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortion?: DistortionParam;
}

/**
 * Create DistortionComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface DistortionComponentInterface {
  /**
   * Creates a DistortionComponent with content.
   *
   * @param { DistortionComponentOptions } [options] - DistortionComponent Options.
   * @returns { DistortionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  (options?: DistortionComponentOptions): DistortionComponentAttribute;
}

/**
 * Defines the DistortionComponent attribute functions
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class DistortionComponentAttribute extends CommonMethod<DistortionComponentAttribute> {}

/**
 * Defines DistortionComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DistortionComponent: DistortionComponentInterface;