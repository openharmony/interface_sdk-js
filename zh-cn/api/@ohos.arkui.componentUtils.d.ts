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
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare namespace componentUtils {

  /**
   * 组件大小、位置、平移缩放旋转及仿射矩阵属性信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface ComponentInfo {

    /**
     * 组件大小。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    size: Size;

    /**
     * 组件相对于父组件信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    localOffset: Offset;

    /**
     * 组件相对于窗口信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    windowOffset: Offset;

    /**
     * 组件相对于屏幕信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    screenOffset: Offset;

    /**
     * 组件平移信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    translate: TranslateResult;

    /**
     * 组件缩放信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    scale: ScaleResult;

    /**
     * 组件旋转信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    rotate: RotateResult;

    /**
     * 仿射矩阵信息，根据入参创建的四阶矩阵对象。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    transform: Matrix4Result;
  }

  /**
   * 定义尺寸属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface Size {

    /**
     * 组件宽度。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    width: number;

    /**
     * 组件高度。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    height: number;
  }

  /**
   * 定义坐标属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface Offset {

    /**
     * x点坐标。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    x: number;

    /**
     * y点坐标。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    y: number;
  }

  /**
   * 平移信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface TranslateResult {

    /**
     * x轴平移距离。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    x: number;

    /**
     * y轴平移距离。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    y: number;

    /**
     * z轴平移距离。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    z: number;
  }

  /**
   * 缩放信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface ScaleResult {

    /**
     * x轴缩放倍数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    x: number;

    /**
     * y轴缩放倍数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    y: number;

    /**
     * z轴缩放倍数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    z: number;

    /**
     * 变换中心点x轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    centerX: number;

    /**
     * 变换中心点y轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    centerY: number;
  }

  /**
   * 旋转信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface RotateResult {

    /**
     * 旋转轴向量x坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    x: number;

    /**
     * 旋转轴向量y坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    y: number;

    /**
     * 旋转轴向量z坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    z: number;

    /**
     * 变换中心点x轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    centerX: number;

    /**
     * 变换中心点y轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    centerY: number;

    /**
     * 旋转角度。
     * 
     * 单位: deg
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    angle: number;
  }

  /**
   * 列优先四阶矩阵。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type Matrix4Result = [
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
  ];

  /**
   * 描述二维空间中的旋转，可以通过旋转角度和旋转中心来定义。
   *
   * @typedef Rotation2D
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface Rotation2D {

    /**
     * 旋转角信息
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    angle: double;

    /**
     * 旋转中心X信息。
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    centerX: double;

    /**
     * 旋转中心Y信息。
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    centerY: double;
  }

  /**
   * 带有布局信息的图像对象。
   *
   * @interface ImageItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface ImageItem {

    /**
     * 图像解码信息。
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    image: image.PixelMap;

    /**
     * 显示图像的框的位置和大小信息。
     *
     * @type { common2D.Rect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    rect: common2D.Rect;

    /**
     * 显示图像的框的旋转信息。
     *
     * @type { ?Rotation2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    rotation?: Rotation2D;

    /**
     * 图像渲染层次结构信息。
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    zIndex: int;
  }

  /**
   * 需要获取图像对象时设置的图像选项。
   *
   * @interface GetItemsInShapePathParams
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GetItemsInShapePathParams {

    /**
     * 图片信息
     *
     * @type { Array<ImageItem> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    images: Array<ImageItem>;

    /**
     * 表示路径的点信息
     *
     * @type { Array<common2D.Point> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    shapePath: Array<common2D.Point>;

    /**
     * 所选区域中非透明空白像素的比例
     * 相对于图像总像素的比例。默认值为0.15。
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    ratio?: double;
  }

  /**
   * 获取位于选定区域内的图像对象。
   *
   * @param { GetItemsInShapePathParams } value - 获取形状路径中图像的选项。
   * @returns { Array<ImageItem> } 返回位于选定区域内的图像对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  function getItemsInShapePath(value: GetItemsInShapePathParams): Array<ImageItem>;

  /**
   * 根据组件ID获取组件实例对象，通过组件实例对象将获取的坐标位置和大小同步返回给开发者。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getComponentUtils]{@link @ohos.arkui.UIContext:UIContext#getComponentUtils}方法获取当前UI上下
   * > 文关联的[ComponentUtils]{@link @ohos.arkui.UIContext:ComponentUtils}对象。在目标组件布局完成后，通过该接口能够获取组件坐标和尺寸信息。建议在
   * > [布局回调]{@link @ohos.arkui.inspector:inspector}中使用该接口。如果组件动态创建但未挂载组件树，则无法通过该接口获取正常的组件信息。因为组件在未挂载组件树的情况下，一般未经过UI框架正常
   * > 的测量与布局，此时请确保组件正常挂载组件树后再尝试获取组件信息。
   *
   * @param {string} id - 指定组件id。
   * @returns {ComponentInfo} 组件大小、位置、平移缩放旋转及仿射矩阵属性信息。
   * @throws { BusinessError } 100001 - UI execution context not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentUtils#getRectangleById
   */
  function getRectangleById(id: string): ComponentInfo;
}

export default componentUtils;