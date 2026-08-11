/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import type image from './@ohos.multimedia.image';
import type common2D from './@ohos.graphics.common2D';

/**
 * 提供获取组件绘制区域坐标和大小的能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace componentUtils {


  /**
   * 组件大小、位置、平移缩放旋转及仿射矩阵属性信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface ComponentInfo {


    /**
     * 组件大小。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size: Size;


    /**
     * 组件相对于父组件信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    localOffset: Offset;


    /**
     * 组件相对于窗口信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowOffset: Offset;


    /**
     * 组件相对于屏幕信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    screenOffset: Offset;


    /**
     * 组件平移信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    translate: TranslateResult;


    /**
     * 组件缩放信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale: ScaleResult;


    /**
     * 组件旋转信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rotate: RotateResult;


    /**
     * 仿射矩阵信息，根据入参创建的四阶矩阵对象。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transform: Matrix4Result;
    }


  /**
   * 定义尺寸属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface Size {


    /**
     * 组件宽度。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width: double;


    /**
     * 组件高度。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height: double;
    }


  /**
   * 定义坐标属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface Offset {


    /**
     * x点坐标。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;


    /**
     * y点坐标。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    }


  /**
   * 平移信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface TranslateResult {


    /**
     * x轴平移距离。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;


    /**
     * y轴平移距离。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;


    /**
     * z轴平移距离。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z: double;
    }


  /**
   * 缩放信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface ScaleResult {


    /**
     * x轴缩放倍数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;


    /**
     * y轴缩放倍数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;


    /**
     * z轴缩放倍数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z: double;


    /**
     * 变换中心点x轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerX: double;


    /**
     * 变换中心点y轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerY: double;
    }


  /**
   * 旋转信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface RotateResult {


    /**
     * 旋转轴向量x坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;


    /**
     * 旋转轴向量y坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;


    /**
     * 旋转轴向量z坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z: double;


    /**
     * 变换中心点x轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerX: double;


    /**
     * 变换中心点y轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerY: double;


    /**
     * 旋转角度。
     * 
     * 单位: deg
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle: double;
    }


  /**
   * 列优先四阶矩阵。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export type Matrix4Result = [
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double
    ];

  /**
   * Describes a rotation in 2D, which can be defined by rotation angle and rotation center.
   * @typedef Rotation2D
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface Rotation2D {
    /**
     * Rotation angle Information.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    angle: double;
    /**
     * Rotation centerX Information.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    centerX: double;
    /**
     * Rotation centerY Information.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    centerY: double;
    }

  /**
   * Image object with layout information.
   *
   * @interface ImageItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface ImageItem {
    /**
     * Image Decoding Information.
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    image: image.PixelMap;
    /**
     * Information about the position and size of the box which displays the image.
     *
     * @type { common2D.Rect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    rect: common2D.Rect;
    /**
     * Information about the rotation of the box which displays the image.
     *
     * @type { ?Rotation2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    rotation?: Rotation2D;
    /**
     * Information about image rendering hierarchy.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    zIndex: int;
    }

  /**
   * Image options setted when need to get the image objects.
   *
   * @interface GetItemsInShapePathParams
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GetItemsInShapePathParams {
    /**
     * image information.
     *
     * @type { Array<ImageItem> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    images: Array<ImageItem>;

    /**
     * Indicates the path points information.
     *
     * @type { Array<common2D.Point> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    shapePath: Array<common2D.Point>;

    /**
     * The proportion of non-transparent blank pixels in the selected area
     * relative to the total pixels of the image. Default value is 0.15.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    ratio?: double;
    }

  /**
   * Get the image objects located within the selected area.
   *
     * @param { GetItemsInShapePathParams } value - options to get images in shapePath.
     * @returns { Array<ImageItem> } Returns the image objects located within the selected area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function getItemsInShapePath(value: GetItemsInShapePathParams): Array<ImageItem>;
}
export default componentUtils;