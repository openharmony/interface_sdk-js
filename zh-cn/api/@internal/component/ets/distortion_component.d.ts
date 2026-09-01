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
 * 二维向量类型，包含x和y坐标，表示位置坐标关系。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Vector2 = import('../api/arkui/Graphics').Vector2;

/**
 * 四维向量类型，包含x、y、z、w，各数值表示桶形形变程度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Vector4 = import('../api/arkui/Graphics').Vector4;

/**
 * 空间扭曲形变参数。
 * 
 * > **说明：**
 * >
 * > - 四个角的坐标可以按照如下坐标系设置。一个组件，左上角位置为[0, 0]，右上角位置为[1, 0]，左下角位置为[0, 1]，右下角位置为[1, 1]。
 * >
 * > - 如bottomLeft属性设置为[0.5, 0.5]，则表示左下角形变到组件中心点的位置，产生对应的形变效果。
 * >
 * > - 设置四个角坐标位置时请符合空间感逻辑。如topLeft = [0, 0.7]，bottomLeft = [0, 0.2]，左上角的位置低于左下角的位置，违背空间感的逻辑，可能导致渲染异常。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DistortionParam {
  /**
   * 左上角的坐标。
   * 
   * 默认值：[0, 0]
   *
   * @default [0, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  topLeft: Vector2;
  /**
   * 右上角的坐标。
   * 
   * 默认值：[1, 0]
   *
   * @default [1, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  topRight: Vector2;
  /**
   * 左下角的坐标。
   * 
   * 默认值：[0, 1]
   *
   * @default [0, 1]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  bottomLeft: Vector2;
  /**
   * 右下角的坐标。
   * 
   * 默认值：[1, 1]
   *
   * @default [1, 1]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  bottomRight: Vector2;
  /**
   * 四条边的桶形扭曲程度参数。
   * 
   * Vector4中四个值分别控制：x是左边，y是右边，z是上边，w是下边。
   * 
   * 默认值：[0, 0, 0, 0] 
   * 
   * 正数表示边向外凸出的扭曲，负数表示边向内凹陷的扭曲。扭曲参数绝对值达到1时，扭曲程度为极端扭曲。
   * 
   * x、y、z、w 各值建议设置范围：[-1, 1]
   *
   * **说明：**
   * 
   * barrelDistortion的四个分量共同决定四条边的桶形扭曲强度，可与四个角点坐标组合使用，构建更丰富的空间形变。
   * 
   * 从几何意义上看，x、y决定左右两条竖直边的弯曲方向与幅度，z、w决定上下两条水平边的弯曲方向与幅度。当某一分量为正值时，对应边向组件外侧凸出，呈现“桶形外凸”效果；为负值时，对应边向组件内侧凹陷，呈现“枕形内凹”效果。四个分量取值相近时，
   * 整体呈现类似广角镜头的均匀桶形畸变；x、y与z、w取值差异较大时，则会产生横向拉伸或纵向拉伸的非对称形变。
   * 
   * 由于极端值可能导致画面折叠或采样异常，建议将x、y、z、w保持在[-1, 1]范围内使用。
   *
   * @default [0, 0, 0, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  barrelDistortion: Vector4;
}

/**
 * 空间扭曲形变选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DistortionComponentOptions {
  /**
   * 空间扭曲形变参数。通过指定四个角的位置关系和四条边的桶形变程度产生空间扭曲效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortion?: DistortionParam;
}

/**
 * DistortionComponent（空间形变组件）是一种容器型视效组件，可对其子组件施加二维平面上的空间形变，模拟透视投影、镜头桶形/枕形畸变以及边角拉伸等视觉效果。通过改变四个角点的
 * 归一化坐标与四条边的桶形扭曲系数，组件内容能够产生贴近三维空间的扭曲、凸起、凹陷或错切感。
 *
 * >  **说明：**
 * > 
 * > - 空间扭曲感的形变视效支持动画，需在[animateTo]{@link @ohos.arkui.UIContext:UIContext.animateTo}动画接口闭包中修改distortion相关参数，才能实现参数的平滑过渡动画；
 * > 直接修改参数时效果将立即生效，无过渡动画。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface DistortionComponentInterface {
  /**
   * 创建提供空间扭曲形变视效的组件。
   *
   * @param { DistortionComponentOptions } [options] - 空间扭曲形变选项，用于配置组件的空间形变效果。不设置该参数或该参数设置为undefined时组件正常渲染、不施加任何形变效果。
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