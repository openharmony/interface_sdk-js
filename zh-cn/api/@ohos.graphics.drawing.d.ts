/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics2D
 */

import type image from './@ohos.multimedia.image';
import type common2D from './@ohos.graphics.common2D';
import { Resource } from './global/resource';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
/*** if arkts static */
import { ResourceColor } from '@ohos.arkui.component';
/*** endif */

/**
 * 应用在开发中，经常需要针对不同的元素内容进行绘制，开发者通常可以选择直接使用ArkUI组件来绘制想要的元素或效果，但有些自定义图形或
 * 效果无法满足，此时可以选择使用Drawing来实现灵活的自定义绘制效果。Drawing模块提供基本的绘
 * 制能力，如绘制矩形、圆形、点、直线、自定义Path和字体等。
 * 
 * > **说明：**
 * >
 * > - 本模块使用屏幕物理像素单位px。
 * >
 * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @crossplatform [since 20]
 * @atomicservice [since 22]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace drawing {
  /**
   * 混合模式枚举。混合模式会将两种颜色（源色、目标色）以特定的方式混合生成一种新的颜色，通常用于叠加、滤镜和遮罩等图形操作场景。混
   * 合操作会分别作用于红、绿、蓝三个颜色通道，采用相同的混合逻辑，而透明度（Alpha通道）则根据各模式的定
   * 义另行处理。
   * 为简洁起见，我们使用以下缩写：
   * 
   * s : source 源的缩写。
   * d : destination 目标的缩写。
   * sa : source alpha 源透明度的缩写。
   * da : destination alpha 目标透明度的缩写。
   * 
   * 计算结果用如下缩写表示：
   * 
   * r : 如果4个通道（透明度、红、绿、蓝）的计算方式相同，用r表示。
   * ra : 如果只操作透明度通道，用ra表示。
   * rc : 如果操作3个颜色通道，用rc表示。
   * 
   * 以黄色矩形为源图像，蓝色圆形为目标图像，各混合模式枚举生成的效果示意图请参考下表。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  enum BlendMode {
    /**
     * 清除模式，r = 0，设置为全透明。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    CLEAR = 0,
    /**
     * r = s（result的4个通道，都等于source的4个通道，即结果等于源。），使用源像素替换目标像素。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC = 1,
    /**
     * r = d（result的4个通道，都等于destination的4个通道，即结果等于目标。），保持目标像素不变。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST = 2,
    /**
     * r = s + (1 - sa) * d，在目标像素上方绘制源像素，考虑源像素的透明度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC_OVER = 3,
    /**
     * r = d + (1 - da) * s，在源像素上方绘制目标像素，考虑目标像素的透明度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST_OVER = 4,
    /**
     * r = s * da，仅保留源像素与目标不透明部分的交集。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC_IN = 5,
    /**
     * r = d * sa，仅保留目标像素与源不透明部分的交集。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST_IN = 6,
    /**
     * r = s * (1 - da)，保留源像素中不与目标重叠的部分。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC_OUT = 7,
    /**
     * r = d * (1 - sa)，保留目标像素中不与源重叠的部分。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST_OUT = 8,
    /**
     * r = s * da + d * (1 - sa)，源像素覆盖在目标像素上，仅在目标不透明部分显示源像素。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SRC_ATOP = 9,
    /**
     * r = d * sa + s * (1 - da)，目标像素覆盖在源像素上，仅在源不透明部分显示目标像素。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DST_ATOP = 10,
    /**
     * r = s * (1 - da) + d * (1 - sa)，仅显示源像素和目标像素中不重叠的部分。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    XOR = 11,
    /**
     * r = min(s + d, 1)，源和目标像素的颜色值相加。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    PLUS = 12,
    /**
     * r = s * d，源和目标像素的颜色值相乘。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    MODULATE = 13,
    /**
     * 滤色模式，r = s + d - s * d，反转源和目标像素的颜色值，相乘后再反转，结果通常更亮。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SCREEN = 14,
    /**
     * 叠加模式，根据目标像素的亮度，选择性地应用MULTIPLY或SCREEN模式，增强对比度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    OVERLAY = 15,
    /**
     * 变暗模式，rc = s + d - max(s * da, d * sa), ra = s + (1 - sa) * d，取源和目标像素中较暗的颜色值。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DARKEN = 16,
    /**
     * 变亮模式，rc = s + d - min(s * da, d * sa), ra = s + (1 - sa) * d，取源和目标像素中较亮的颜色值。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    LIGHTEN = 17,
    /**
     * 颜色减淡模式，通过减小对比度使目标像素变亮以反映源像素。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_DODGE = 18,
    /**
     * 颜色加深模式，通过增加对比度使目标像素变暗以反映源像素。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_BURN = 19,
    /**
     * 强光模式，根据源像素的亮度，选择性地应用MULTIPLY或SCREEN模式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    HARD_LIGHT = 20,
    /**
     * 柔光模式，根据源像素的亮度，柔和地变亮或变暗目标像素。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SOFT_LIGHT = 21,
    /**
     * 差值模式，rc = s + d - 2 * (min(s * da, d * sa)), ra = s + (1 - sa) * d，计算源和目标像素颜色值的差异。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DIFFERENCE = 22,
    /**
     * 排除模式，rc = s + d - two(s * d), ra = s + (1 - sa) * d，类似于DIFFERENCE，但对比度较低。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    EXCLUSION = 23,
    /**
     * 正片叠底，r = s * (1 - da) + d * (1 - sa) + s * d，源和目标像素的颜色值相乘，结果通常更暗。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    MULTIPLY = 24,
    /**
     * 色相模式，使用源像素的色相，目标像素的饱和度和亮度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    HUE = 25,
    /**
     * 饱和度模式，使用源像素的饱和度，目标像素的色相和亮度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SATURATION = 26,
    /**
     * 颜色模式，使用源像素的色相和饱和度，目标像素的亮度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR = 27,
    /**
     * 亮度模式，使用源像素的亮度，目标像素的色相和饱和度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    LUMINOSITY = 28
  }

  /**
   * 顶点绘制的连接方式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 23 dynamic&static
   */
  enum VertexMode {
    /**
     * 每三个顶点来自不同的三角形。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 dynamic&static
     */
    TRIANGLES_VERTEXMODE = 0,
    /**
     * 连续的三角形共享一条边。对于连续表面效率高。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 dynamic&static
     */
    TRIANGLESSTRIP_VERTEXMODE = 1,
    /**
     * 所有三角形共享一个顶点。非常适合圆形/扇形。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 dynamic&static
     */
    TRIANGLESFAN_VERTEXMODE = 2
  }

  /**
   * 添加闭合轮廓方向的枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PathDirection {
    /**
     * 顺时针方向添加闭合轮廓。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    CLOCKWISE = 0,

    /**
     * 逆时针方向添加闭合轮廓。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    COUNTER_CLOCKWISE = 1
  }

  /**
   * 定义路径的填充类型枚举。
   * 
   * > **说明：**
   * 
   * > ![WINDING&EVEN_ODD](figures/zh-ch_image_PathFillType_Winding_Even_Odd.png)
   * 
   * > 如图所示圆环为路径，箭头指示路径的方向，p为区域内任意一点，蓝色线条为点p出发的射线，黑色箭头所指为对应填充规则下使用蓝色填
   * 充路径的结果。WINDING填充规则下，射线与路径的交点计数为2，不为0，点p被涂色；EVEN_ODD
   * > 填充规则下，射线与路径的相交次数为2，是偶数，点p不被涂色。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PathFillType {
    /**
     * 绘制区域中的任意一点，向任意方向射出一条射线，对于射线和路径的所有交点，初始计数为0，遇到每个顺时针的交点（路径从射线的左边
     * 向右穿过），计数加1，遇到每个逆时针的交点（路径从射线的右边向左穿过），计数减1，若最终的计数结果不为
     * 0，则认为这个点在路径内部，需要被涂色；若计数为0则不被涂色。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    WINDING = 0,

    /**
     * 绘制区域中的任意一点，向任意方向射出一条射线，若这条射线和路径相交的次数是奇数，则这个点被认为在路径内部，需要被涂色；若是
     * 偶数则不被涂色。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    EVEN_ODD = 1,

    /**
     * WINDING涂色规则取反。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INVERSE_WINDING = 2,

    /**
     * EVEN_ODD涂色规则取反。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INVERSE_EVEN_ODD = 3
  }

  /**
   * 路径测量中的矩阵信息维度枚举，常用于控制物体沿路径移动的动画场景。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PathMeasureMatrixFlags {
    /**
     * 获取位置信息对应的矩阵。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GET_POSITION_MATRIX = 0,
    /**
     * 获取切线信息对应的矩阵。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GET_TANGENT_MATRIX = 1,
    /**
     * 获取位置和切线信息对应的矩阵。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GET_POSITION_AND_TANGENT_MATRIX = 2
  }

  /**
   * 圆角矩形对象。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class RoundRect {
    /**
     * 拷贝一个圆角矩形。
     *
     * @param { RoundRect } roundRect - 用于拷贝的圆角矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(roundRect: RoundRect);

    /**
     * 构造一个圆角矩形对象，当且仅当xRadii和yRadii均大于0时，圆角生效，否则只会构造一个矩形。
     *
     * @param { common2D.Rect } rect - 需要创建的圆角矩形区域。
     * @param { double } xRadii - X轴上的圆角半径，该参数为浮点数，小于等于0时无效。
     * @param { double } yRadii - Y轴上的圆角半径，该参数为浮点数，小于等于0时无效。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(rect: common2D.Rect, xRadii: double, yRadii: double);

    /**
     * 设置圆角矩形中指定圆角位置的圆角半径。
     *
     * @param { CornerPos } pos - 圆角位置。
     * @param { double } x - x轴方向的圆角半径，该参数为浮点数，小于等于0时无效。
     * @param { double } y - y轴方向的圆角半径，该参数为浮点数，小于等于0时无效。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setCorner(pos: CornerPos, x: double, y: double): void;

    /**
     * 获取圆角矩形中指定圆角位置的圆角半径。
     *
     * @param { CornerPos } pos - 圆角位置。
     * @returns { common2D.Point } Point. The horizontal coordinate indicates the radius of the rounded corner on the X
     *     axis, and the vertical coordinate indicates the radius on the Y axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getCorner(pos: CornerPos): common2D.Point;

    /**
     * Obtains the radii of the specified rounded corner in this rounded rectangle.
     *
     * @param { CornerPos } pos - Position of the rounded corner.
     * @returns { common2D.Point | undefined } Point. The horizontal coordinate indicates the radius of
     *     the rounded corner on the X axis, and the vertical coordinate indicates the radius on the Y axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getCorner(pos: CornerPos): common2D.Point | undefined;

    /**
     * 将圆角矩形分别沿x轴方向和y轴方向平移dx,dy。
     *
     * @param { double } dx - 表示x轴方向上的偏移量。正数表示向x轴正方向平移，负数表示向x轴负方向平移，该参数为浮点数。
     * @param { double } dy - 表示y轴方向上的偏移量。正数表示向y轴正方向平移，负数表示向y轴负方向平移，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    offset(dx: double, dy: double): void;
  }

  /**
   * 路径操作类型枚举，可用于合并或裁剪路径等功能。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PathOp {
    /**
     * 差集操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DIFFERENCE = 0,

    /**
     * 交集操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INTERSECT = 1,

    /**
     * 并集操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    UNION = 2,

    /**
     * 异或操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    XOR = 3,

    /**
     * 反向差集操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    REVERSE_DIFFERENCE = 4
  }

  /**
   * 迭代器包含的路径操作类型枚举，可用于读取path的操作指令。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 18 dynamic
   * @since 23 static
   */
  enum PathIteratorVerb {
    /**
     * 设置起始点。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    MOVE = 0,

    /**
     * 添加线段。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    LINE = 1,

    /**
     * 添加二阶贝塞尔圆滑曲线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    QUAD = 2,

    /**
     * 添加圆锥曲线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    CONIC = 3,

    /**
     * 添加三阶贝塞尔圆滑曲线。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    CUBIC = 4,

    /**
     * 路径闭合。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    CLOSE = 5,

    /**
     * 路径设置完成。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    DONE = CLOSE + 1
  }

  /**
   * 表示路径操作迭代器，可通过遍历迭代器读取path的操作指令。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 18开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 18 dynamic
   * @since 23 static
   */
  class PathIterator {
    /**
     * 构造迭代器并绑定路径。
     *
     * @param { Path } path - 迭代器绑定的路径对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    constructor(path: Path);

    /**
     * 返回当前路径的下一个操作，并将迭代器置于该操作。
     *
     * @param { Array<common2D.Point> } points - 坐标点数组，长度必须至少为偏移量加4，以确保能容纳所有类型的路径数据。操作执行后，该数组会被覆盖。填入的坐标点数量取决于操作类型，其中，
     *     MOVE填入1个坐标点，LINE填入2个坐标点，QUAD填入3个坐标点，CONIC填入3个坐标点 + 1个权重值（共3.5组），CUBIC填入4个坐标点，CLOSE和DONE不填入任何点。
     * @param { number } [offset] - 数组中写入位置相对起始点的偏移量，默认为0，取值范围为[0, size-4]，size是指坐标点数组长度。
     * @returns { PathIteratorVerb } 迭代器包含的路径操作类型。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    next(points: Array<common2D.Point>, offset?: number): PathIteratorVerb;

    /**
     * Retrieves the next operation in this path and moves the iterator to that operation.
     *
     * @param { Array<common2D.Point> } points - Indicates the point array.
     * @param { int } [offset] - Indicates the offset into the array where entries should be placed.
     *     The default value is 0.
     * @returns { PathIteratorVerb | undefined } Returns the next verb in this iterator's path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    next(points: Array<common2D.Point>, offset?: int): PathIteratorVerb | undefined;

    /**
     * 返回当前路径的下一个操作，迭代器保持在原操作。
     *
     * @returns { PathIteratorVerb } 迭代器包含的路径操作类型。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    peek(): PathIteratorVerb;

    /**
     * Retrieves the next operation in this path, without moving the iterator.
     *
     * @returns { PathIteratorVerb | undefined } Returns the next verb in the iteration.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    peek(): PathIteratorVerb | undefined;

    /**
     * 判断路径操作迭代器中是否还有下一个操作。
     *
     * @returns { boolean } 判断路径操作迭代器中是否还有下一个操作。true表示有，false表示没有。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    hasNext(): boolean;
  }

  /**
   * 由直线、圆弧、二阶贝塞尔、三阶贝塞尔组成的复合几何路径。
   * 
   * > **说明：**
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  class Path {
    /**
     * 构造一个路径。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 构造一个已有路径的副本。
     *
     * @param { Path } path - 待复制的路径对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(path: Path);

    /**
     * 使用另一个路径对当前路径进行更新。
     *
     * @param { Path } src - 用于更新的路径。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 24 static
     */
    set(src: Path): void;

    /**
     * 设置自定义路径的起始点位置。
     *
     * @param { double } x - 起始点的x轴坐标，该参数为浮点数。
     * @param { double } y - 起始点的y轴坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    moveTo(x: double, y: double): void;

    /**
     * 添加一条从路径的最后点位置（若路径没有内容则默认为 (0, 0)）到目标点位置的线段。
     *
     * @param { double } x - 目标点的x轴坐标，该参数为浮点数。
     * @param { double } y - 目标点的y轴坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    lineTo(x: double, y: double): void;

    /**
     * 给路径添加一段弧线，绘制弧线的方式为角度弧，该方式首先会指定一个矩形边框，取其内切椭圆，然后会指定一个起始角度和扫描度数，从起始角度扫描截取的椭圆周长一部分即为绘制的弧线。另外会默认添加一条从路径的最后点位置到弧线起始点位置的
     * 线段。
     *
     * @param { double } x1 - 矩形左上角的x坐标，该参数为浮点数。
     * @param { double } y1 - 矩形左上角的y坐标，该参数为浮点数。
     * @param { double } x2 - 矩形右下角的x坐标，该参数为浮点数。
     * @param { double } y2 - 矩形右下角的y坐标，该参数为浮点数。
     * @param { double } startDeg - 起始的角度。角度的起始方向（0°）为x轴正方向。
     * @param { double } sweepDeg - 扫描的度数，为正数时顺时针扫描，为负数时逆时针扫描。实际扫描的度数为该入参对360取模的结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    arcTo(x1: double, y1: double, x2: double, y2: double, startDeg: double, sweepDeg: double): void;

    /**
     * 添加从路径最后点位置（若路径没有内容则为 (0, 0)）到目标点位置的二阶贝塞尔曲线。
     *
     * @param { double } ctrlX - 控制点的x坐标，该参数为浮点数。
     * @param { double } ctrlY - 控制点的y坐标，该参数为浮点数。
     * @param { double } endX - 目标点的x坐标，该参数为浮点数。
     * @param { double } endY - 目标点的y坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    quadTo(ctrlX: double, ctrlY: double, endX: double, endY: double): void;

    /**
     * 在当前路径上添加一条路径最后点位置（若路径没有内容则默认为 (0, 0)）到目标点位置的圆锥曲线，其控制点为 (ctrlX, ctrlY)，结束点为 (endX, endY)。
     *
     * @param { double } ctrlX - 控制点的x坐标，该参数为浮点数。
     * @param { double } ctrlY - 控制点的y坐标，该参数为浮点数。
     * @param { double } endX - 目标点的x坐标，该参数为浮点数。
     * @param { double } endY - 目标点的y坐标，该参数为浮点数。
     * @param { double } weight - 表示曲线权重，决定了曲线的形状。值越大，曲线越接近控制点。小于等于0时，效果与[lineTo]{@link drawing.Path.lineTo}相同；值为1时，效果与
     *     [quadTo]{@link drawing.Path.quadTo}相同。该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    conicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void;

    /**
     * 添加一条从路径最后点位置（若路径没有内容则默认为 (0, 0)）到目标点位置的三阶贝塞尔圆滑曲线。
     *
     * @param { double } ctrlX1 - 第一个控制点的x坐标，该参数为浮点数。
     * @param { double } ctrlY1 - 第一个控制点的y坐标，该参数为浮点数。
     * @param { double } ctrlX2 - 第二个控制点的x坐标，该参数为浮点数。
     * @param { double } ctrlY2 - 第二个控制点的y坐标，该参数为浮点数。
     * @param { double } endX - 目标点的x坐标，该参数为浮点数。
     * @param { double } endY - 目标点的y坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    cubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void;

    /**
     * 设置一个相对于当前路径终点（若路径没有内容则默认为 (0, 0)）的路径起始点位置。
     *
     * @param { double } dx - 路径新起始点相对于当前路径终点的x轴偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { double } dy - 路径新起始点相对于当前路径终点的y轴偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rMoveTo(dx: double, dy: double): void;

    /**
     * 使用相对位置在当前路径上添加一条当前路径终点（若路径没有内容则默认为 (0, 0)）到目标点位置的线段。
     *
     * @param { double } dx - 目标点相对于当前路径终点的x轴偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { double } dy - 目标点相对于当前路径终点的y轴偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rLineTo(dx: double, dy: double): void;

    /**
     * 使用相对位置在当前路径上添加一条当前路径终点（若路径没有内容则默认为 (0, 0)）到目标点位置的二阶贝塞尔曲线。
     *
     * @param { double } dx1 - 控制点相对于路径终点的x轴偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { double } dy1 - 控制点相对于路径终点的y轴偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @param { double } dx2 - 目标点相对于路径终点的x轴偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { double } dy2 - 目标点相对于路径终点的y轴偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rQuadTo(dx1: double, dy1: double, dx2: double, dy2: double): void;

    /**
     * 使用相对位置在当前路径上添加一条路径终点（若路径没有内容则默认为 (0, 0)）到目标点位置的圆锥曲线。
     *
     * @param { double } ctrlX - 控制点相对于路径终点的x轴偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { double } ctrlY - 控制点相对于路径终点的y轴偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @param { double } endX - 目标点相对于路径终点的x轴偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { double } endY - 目标点相对于路径终点的y轴偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @param { double } weight - 表示曲线的权重，决定了曲线的形状，越大越接近控制点。若小于等于0则等同于使用[rLineTo]{@link drawing.Path.rLineTo}添加一条到结束点的线段
     *     ，若为1则等同于[rQuadTo]{@link drawing.Path.rQuadTo}，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rConicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void;

    /**
     * 使用相对位置在当前路径上添加一条当前路径终点（若路径没有内容则默认为 (0, 0)）到目标点位置的三阶贝塞尔曲线。
     *
     * @param { double } ctrlX1 - 第一个控制点相对于路径终点的x轴偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { double } ctrlY1 - 第一个控制点相对于路径终点的y轴偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @param { double } ctrlX2 - 第二个控制点相对于路径终点的x轴偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { double } ctrlY2 - 第二个控制点相对于路径终点的y轴偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @param { double } endX - 目标点相对于路径终点的x轴偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { double } endY - 目标点相对于路径终点的y轴偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    rCubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void;

    /**
     * 通过坐标点列表添加多条连续的线段。
     *
     * @param { Array<common2D.Point> } points - 坐标点数组。
     * @param { boolean } close - 表示是否将路径闭合，即是否添加路径起始点到终点的连线。true表示将路径闭合，false表示不将路径闭合。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addPolygon(points: Array<common2D.Point>, close: boolean): void;

    /**
     * 将当前路径置为和path按照指定的路径操作类型合并后的结果。
     *
     * @param { Path } path - 路径对象，用于与当前路径合并。
     * @param { PathOp } pathOp - 路径操作类型枚举。
     * @returns { boolean } 返回路径合并是否成功的结果。true表示合并成功，false表示合并失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    op(path: Path, pathOp: PathOp): boolean;

    /**
     * 向路径添加一段圆弧。
     * 当startAngle和sweepAngle同时满足以下两种情况时，添加整个椭圆而不是圆弧：
     * 1.startAngle对90取余接近于0；
     * 2.sweepAngle不在(-360, 360)区间内。
     * 其余情况sweepAngle会对360取余后添加圆弧。
     *
     * @param { common2D.Rect } rect - 包含弧的椭圆的矩形边界。
     * @param { double } startAngle - 弧的起始角度，单位为度，0度为x轴正方向，该参数为浮点数。
     * @param { double } sweepAngle - 扫描角度，单位为度。正数表示顺时针方向，负数表示逆时针方向，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addArc(rect: common2D.Rect, startAngle: double, sweepAngle: double): void;

    /**
     * 按指定方向，向路径添加圆形，圆的起点位于(x + radius, y)。
     *
     * @param { double } x - 表示圆心的x轴坐标，该参数为浮点数。
     * @param { double } y - 表示圆心的y轴坐标，该参数为浮点数。
     * @param { double } radius - 表示圆形的半径，该参数为浮点数，小于等于0时不会有任何效果。
     * @param { PathDirection } pathDirection - 表示路径方向，默认为顺时针方向。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addCircle(x: double, y: double, radius: double, pathDirection?: PathDirection): void;

    /**
     * 按指定方向，将矩形的内切椭圆添加到路径中。
     *
     * @param { common2D.Rect } rect - 椭圆的矩形边界。
     * @param { int } start - 表示椭圆初始点的索引，0，1，2，3分别对应椭圆的上端点，右端点，下端点，左端点，该参数为不小于0的整数，大于等于4时会对4取余。
     * @param { PathDirection } pathDirection - 表示路径方向，默认为顺时针方向。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addOval(rect: common2D.Rect, start: int, pathDirection?: PathDirection): void;

    /**
     * 按指定方向，将矩形添加到路径中，添加的路径的起始点为矩形左上角。
     *
     * @param { common2D.Rect } rect - 向路径中添加的矩形轮廓。
     * @param { PathDirection } pathDirection - 表示路径方向，默认为顺时针方向。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addRect(rect: common2D.Rect, pathDirection?: PathDirection): void;

    /**
     * 按指定方向，向路径添加圆角矩形轮廓。路径添加方向为顺时针时，起始点位于圆角矩形左下方圆角与左边界的交点；路径添加方向为逆时针时，起始点位于圆角矩形左上方圆角与左边界的交点。
     *
     * @param { RoundRect } roundRect - 圆角矩形对象。
     * @param { PathDirection } pathDirection - 表示路径方向，默认为顺时针方向。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addRoundRect(roundRect: RoundRect, pathDirection?: PathDirection): void;

    /**
     * 对源路径进行矩阵变换后，将其添加到当前路径中。
     *
     * @param { Path } path - 表示源路径对象。
     * @param { Matrix | null } matrix - 表示矩阵对象，默认为单位矩阵。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    addPath(path: Path, matrix?: Matrix | null): void;

    /**
     * 对路径进行矩阵变换。
     *
     * @param { Matrix } matrix - 表示矩阵对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    transform(matrix: Matrix): void;

    /**
     * 判断指定坐标点是否被路径包含，判定是否被路径包含的规则参考[PathFillType]{@link @ohos.graphics.drawing:drawing.PathFillType}。
     *
     * @param { double } x - x轴上坐标点，该参数必须为浮点数。
     * @param { double } y - y轴上坐标点，该参数必须为浮点数。
     * @returns { boolean } 返回指定坐标点是否在路径内。true表示点在路径内，false表示点不在路径内。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    contains(x: double, y: double): boolean;

    /**
     * 修改路径的最后一个点。
     *
     * @param { double } x - 指定点的x轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { double } y - 指定点的y轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setLastPoint(x: double, y: double): void;

    /**
     * 设置路径的填充类型，决定路径内部区域的定义方式。例如，使用Winding填充类型时，路径内部区域由路径环绕的次数决定，而使用EvenOdd填充类型时，路径内部区域由路径环绕的次数是否为奇数决定。
     *
     * @param { PathFillType } pathFillType - 表示路径填充规则。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setFillType(pathFillType: PathFillType): void;

    /**
     * 获取路径的填充类型。
     *
     * @returns { PathFillType } 路径填充类型。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getFillType(): PathFillType;

    /**
     * Gets fill type, the rule used to fill path.
     *
     * @returns { PathFillType | undefined } Returns the pathFillType.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getFillType(): PathFillType | undefined;

    /**
     * 获取包含路径的最小矩形边界。
     *
     * @returns { common2D.Rect } Minimum bounding rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getBounds(): common2D.Rect;

    /**
     * Obtains the minimum bounding rectangle that encloses this path.
     *
     * @returns { common2D.Rect | undefined } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getBounds(): common2D.Rect | undefined;

    /**
     * 闭合路径，会添加一条从路径起点位置到最后点位置的线段。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * 将路径沿着x轴和y轴方向偏移一定距离并保存在返回的路径对象中。
     *
     * @param { number } dx - x轴方向偏移量，正数往x轴正方向偏移，负数往x轴负方向偏移，该参数为浮点数。
     * @param { number } dy - y轴方向偏移量，正数往y轴正方向偏移，负数往y轴负方向偏移，该参数为浮点数。
     * @returns { Path } 返回当前路径偏移(dx,dy)后生成的新路径对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    offset(dx: number, dy: number): Path;

    /**
     * Offsets this path by specified distances along the X axis and Y axis and stores
     * the resulting path in the Path object returned.
     *
     * @param { double } dx - X offset. A positive number indicates an offset towards
     *     the positive direction of the X axis,
     *     and a negative number indicates an offset towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Y offset. A positive number indicates an offset towards
     *     the positive direction of the Y axis,
     *     and a negative number indicates an offset towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @returns { Path | undefined } New path generated.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    offset(dx: double, dy: double): Path | undefined;

    /**
     * 重置自定义路径数据。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    reset(): void;

    /**
     * 将路径内添加的各类点/线清空，但是保留内存空间。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    rewind(): void;

    /**
     * 判断路径是否为空。
     *
     * @returns { boolean } 路径是否为空。true表示当前路径为空，false表示路径不为空。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isEmpty(): boolean;

    /**
     * 判断路径是否构成矩形。
     *
     * @param { common2D.Rect | null } rect - 矩形对象，作为出参使用，路径构成矩形时，会被改写为路径表示的矩形，否则不会改变。可以为null，表示无需获取路径表示的矩形。
     * @returns { boolean } 返回路径是否构成矩形。true表示路径构成矩形，false表示路径不构成矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    isRect(rect: common2D.Rect | null): boolean;

    /**
     * 获取路径长度。
     *
     * @param { boolean } forceClosed - 表示是否按照闭合路径测量，true表示测量时路径会被强制视为已闭合，false表示会根据路径的实际闭合状态测量。
     * @returns { double } 路径长度。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getLength(forceClosed: boolean): double;

    /**
     * 获取路径起始点指定距离处的坐标点和切线值。
     *
     * @param { boolean } forceClosed - 表示是否按照闭合路径测量，true表示测量时路径会被强制视为已闭合，false表示会根据路径的实际闭合状态测量。
     * @param { double } distance - 表示与路径起始点的距离，小于0时会被视作0，大于路径长度时会被视作路径长度。该参数为浮点数。
     * @param { common2D.Point } position - 存储获取到的距离路径起始点distance处的点的坐标。
     * @param { common2D.Point } tangent - 存储获取到的距离路径起始点distance处的点的切线值，tangent.x表示该点切线的余弦值，tangent.y表示该点切线的正弦值。
     * @returns { boolean } 表示是否成功获取距离路径起始点distance处的点的坐标和正切值的结果。true表示获取成功，false表示获取失败，position和tangent不会被改变。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getPositionAndTangent(forceClosed: boolean, distance: double, position: common2D.Point, tangent: common2D.Point): boolean;

    /**
     * 截取路径的片段并追加到目标路径上。
     *
     * @param { boolean } forceClosed - 表示是否按照闭合路径测量，true表示测量时路径会被强制视为已闭合，false表示会根据路径的实际闭合状态测量。
     * @param { double } start - 表示与路径起始点的距离，距离路径起始点start距离的位置即为截取路径片段的起始点，小于0时会被视作0，大于等于stop时会截取失败。该参数为浮点数。
     * @param { double } stop - 表示与路径起始点的距离，距离路径起始点stop距离的位置即为截取路径片段的终点，小于等于start时会截取失败，大于路径长度时会被视作路径长度。该参数为浮点数。
     * @param { boolean } startWithMoveTo - 表示是否在目标路径执行[moveTo]{@link drawing.Path.moveTo}移动到截取路径片段的起始点位置。true表示执行，false
     *     表示不执行。
     * @param { Path } dst - 目标路径，截取成功时会将得到的路径片段追加到目标路径上，截取失败时不做改变。
     * @returns { boolean } 表示是否成功截取路径片段。true表示截取成功，false表示截取失败。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    getSegment(forceClosed: boolean, start: double, stop: double, startWithMoveTo: boolean, dst: Path): boolean;

    /**
     * 获取路径是否闭合。
     *
     * @returns { boolean } 表示当前路径是否闭合，true表示闭合，false表示不闭合。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isClosed(): boolean;

    /**
     * 在路径上的某个位置，获取一个变换矩阵，用于表示该点的坐标和朝向。
     *
     * @param { boolean } forceClosed - 表示是否按照闭合路径测量，true表示测量时路径会被强制视为已闭合，false表示会根据路径的实际闭合状态测量。
     * @param { double } distance - 表示与路径起始点的距离，小于0时会被视作0，大于路径长度时会被视作路径长度。该参数为浮点数。
     * @param { Matrix } matrix - 矩阵对象，用于存储得到的矩阵。
     * @param { PathMeasureMatrixFlags } flags - 矩阵信息维度枚举。
     * @returns { boolean } 返回是否成功获取变换矩阵的结果。true表示成功，false表示失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getMatrix(forceClosed: boolean, distance: double, matrix: Matrix, flags: PathMeasureMatrixFlags): boolean;

    /**
     * 解析SVG字符串表示的路径。
     *
     * @param { string } str - SVG格式的字符串，用于描述绘制路径。
     * @returns { boolean } 返回是否成功解析SVG字符串的结果。true表示解析成功，false表示解析失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    buildFromSvgString(str: string): boolean;

    /**
     * 将路径转换为SVG字符串。
     *
     * @returns { string } 转换后的SVG字符串结果。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    convertToSvgString(): string;

    /**
     * 获取路径的点数据。
     * 在路径（path）图元中，点数据以数值序列的形式存在，与动词verb指令一一对应，用来精确指定绘图操作的几何坐标位置。
     * 点数据的主要类型包括：
     * 终点坐标：与[moveTo]{@link drawing.Path.moveTo}、[lineTo]{@link drawing.Path.lineTo}等指令配合，定义线段或移动的目标位置。
     * 控制点坐标：与曲线指令配合，用于定义贝塞尔曲线的形状（如三次曲线需要两个控制点和一个终点）。
     * 闭合点：通常不单独提供坐标，由[close]{@link drawing.Path.close}指令隐式使用路径起点。
     *
     * @returns { Array<common2D.Point> } path points array.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getPointData(): Array<common2D.Point>;

    /**
     * 获取路径的指令数据。
     * 在路径（path）图元中，指令数据verb用于描述路径构造过程中的基本绘图动作。
     * 指令数据以枚举的形式存在，每个取值对应一种几何操作类型，例如：
     * [moveTo]{@link drawing.Path.moveTo}：将当前绘图点移至指定坐标，不产生线段。
     * [lineTo]{@link drawing.Path.lineTo}：从当前点向指定点绘制直线段。
     * [close]{@link drawing.Path.close}：将当前点与路径起点相连，形成封闭区域。
     *
     * @returns { Array<PathIteratorVerb> } 类型为浮点数。理论上取值范围为全体实数，但实际受限于渲染坐标系的有效范围（如-2^31到2^31-1或屏幕可见区域）；超出范围可能导致图形不可见或裁剪。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getVerbData(): Array<PathIteratorVerb>;

    /**
     * 获取路径的圆锥曲线权重数据。
     * 在路径（path）图元中，圆锥曲线数据采用有理贝塞尔曲线（Rational Bézier Curve）形式表示，其中每个控制点附带一个权重值（weight）。权重属于曲线定义的几何参数。
     * 主要作用如下：
     * 形状调控：权重值越大，曲线越靠近对应控制点；权重为1时退化为标准贝塞尔曲线；权重为0时该控制点不起作用。
     * 精确表示圆锥曲线：通过组合权重与二次贝塞尔曲线，可以精确表示圆弧、椭圆弧、抛物线等圆锥曲线段，无需使用分段逼近或专用椭圆弧指令。
     * 数据组织：权重通常以数组形式与点数据并列，按顺序对应每个控制点，与相应的指令verb（如[conicTo]{@link drawing.Path.conicTo}）配合使用。
     *
     * @returns { Array<double> } 类型为浮点数（取值范围为非负数）。取值为0.0时，该控制点完全无效，曲线不经过此点，曲线实际由其余控制点定义。取值为1.0时，该控制点对应的曲线变为标准贝塞尔曲线，此时权重
     *     不产生额外形变效果。取值大于1时，权重值越大，曲线越靠近该控制点；小于1.0但大于0.0时，曲线则相对远离该控制点。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getConicWeightData(): Array<double>;

    /**
     * 返回该路径的操作迭代器。
     *
     * @returns { PathIterator } 该路径的迭代器对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    getPathIterator(): PathIterator;

    /**
     * Obtains the operation iterator of this path.
     *
     * @returns { PathIterator | undefined } Indicates the pointer to an pathIterator object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getPathIterator(): PathIterator | undefined;

    /**
     * 将当前路径转化为由连续直线段构成的近似路径。
     * 
     * > **说明：**
     * >
     * > - 当acceptableError为0时，曲线路径被极度细分，会严重影响性能和内存消耗，不建议设置误差值为0。
     * >
     * > - 当acceptableError特别大时，路径会极度简化，保留少量关键点，可能会丢失原有形状。
     * >
     * > - 对于椭圆等曲线，当acceptableError过大时，拟合结果通常只包含椭圆的分段贝塞尔曲线的起止点，椭圆形会被极度简化为多边形。
     *
     * @param { number } acceptableError - 表示路径上每条线段的可接受误差。该参数为浮点数，不应小于0，当参数小于0时报错。
     * @returns { Array<number> } 返回包含近似路径的点的数组，至少包含两个点。每个点由三个值组成：
     *     <br>1. 该点所在的位置距离路径起点的长度比例值，范围为[0.0, 1.0]。
     *     <br>2. 点的x坐标。
     *     <br>3. 点的y坐标。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    approximate(acceptableError: number): Array<number>;

    /**
     * Approximates the path with a series of line segments.
     *
     * @param { double } acceptableError - Indicates the acceptable error for a line on the path. Should be no less than
     *     0.
     * @returns { Array<double> | undefined } - Returns with the array containing point components.
     *     <br>There are three components for each point:
     *     <br>1. Fraction along the length of the path that the point resides [0.0, 1.0].
     *     <br>2. The x coordinate of the point.
     *     <br>3. The y coordinate of the point.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    approximate(acceptableError: double): Array<double> | undefined;

    /**
     * 根据给定的权重，在当前路径和另一条路径之间进行插值，并将结果存储在目标路径对象中。两条路径点数相同即可插值成功，目标路径按照当前路径的结构进行创建。
     *
     * @param { Path } other - 表示另一条路径对象。
     * @param { double } weight - 表示插值权重，必须在[0.0, 1.0]范围内。该参数为浮点数。
     * @param { Path } interpolatedPath - 表示用于存储插值结果的目标路径对象。
     * @returns { boolean } 返回插值操作是否成功的结果。true表示插值成功，false表示插值失败。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    interpolate(other: Path, weight: double, interpolatedPath: Path): boolean;

    /**
     * 判断当前路径与另一条路径在结构和操作顺序上是否完全一致，以确定两条路径是否兼容插值。若路径中包含圆锥曲线（Conic）操作，则对应操作的权重值也必须一致，才能视为兼容插值。
     *
     * @param { Path } other - 表示另一条路径对象。
     * @returns { boolean } 返回当前路径与另一条路径是否兼容插值的结果。true表示兼容插值，false表示不兼容插值。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isInterpolate(other: Path): boolean;

    /**
     * 检查当前路径填充类型是否是反向填充类型。例如填充类型Winding、EvenOdd不是反向类型，InverseWinding、InverseEvenOdd是反向类型。
     *
     * @returns { boolean } 检查当前路径填充类型是否是反向填充类型。true表示是反向填充类型，false表示不是反向填充类型。
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 dynamic&static
     */
    isInverseFillType(): boolean;

    /**
     * 切换路径的填充类型为反向类型。例如，使用Winding填充类型时，经过取反后填充类型为InverseWinding，而使用EvenOdd填充类型时，经过取反后填充类型为InverseEvenOdd，反之亦然。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 dynamic&static
     */
    toggleInverseFillType(): void;

    /**
     * 获取路径的最后一个点坐标。
     *
     *
     *
     * @returns { common2D.Point } Returns the last point of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getLastPoint(): common2D.Point;

    /**
     * 获取路径的最后一个点坐标。
     *
     * @returns { common2D.Point | undefined } Returns the last point of the path, or undefined if the path is empty.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getLastPoint(): common2D.Point | undefined;

    /**
     * Checks if two paths are equal.
     *
     * @param { Path } path - Another Path object to compare.
     * @returns { boolean } Returns true if the two paths are equal, otherwise returns false.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isEqual(path: Path): boolean;
  }

  /**
   * 绘制数组点的方式的枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum PointMode {
    /**
     * 分别绘制每个点。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    POINTS = 0,

    /**
     * 将每对点绘制为线段。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    LINES = 1,

    /**
     * 将点阵列绘制为开放多边形。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    POLYGON = 2
  }

  /**
   * 过滤模式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FilterMode {
    /**
     * 邻近过滤模式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FILTER_MODE_NEAREST = 0,

    /**
     * 线性过滤模式。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FILTER_MODE_LINEAR = 1
  }

  /**
   * 控制阴影绘制行为的枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum ShadowFlag {
    /**
     * 不使用任何阴影处理选项。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 遮挡物是半透明的。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    TRANSPARENT_OCCLUDER = 1,

    /**
     * 仅使用几何阴影效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    GEOMETRIC_ONLY = 2,

    /**
     * 使用所有可用的阴影处理选项，以生成组合阴影效果，包括半透明遮挡和几何阴影效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    ALL = 3
  }

  /**
   * 采样选项对象。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class SamplingOptions {
    /**
     * 构造一个新的采样选项对象，[FilterMode]{@link @ohos.graphics.drawing:drawing.FilterMode}的默认值为FILTER_MODE_NEAREST。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * 构造一个新的采样选项对象。
     *
     * @param { FilterMode } filterMode - 过滤模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(filterMode: FilterMode);
  }

  /**
   * 表示字体特征。字体特征是字体内置的排版规则，用于控制字形的显示效果，具体包括连字、替代字形、上下标等功能。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 24 static
   */
  interface FontFeature {
    /**
     * 字体特征的名称。常见的字体特征名称包含liga、frac、case等，需要对应的ttf文件支持才能生效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 24 static
     */
    name: string;
    /**
     * 字体特征的数值，浮点数。建议通过字体查看工具或查阅字体文档，确定具体的有效取值范围。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 24 static
     */
    value: double;
  }

  /**
   * 承载绘制内容与绘制状态的载体。
   * 
   * > **说明：**
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   * > > **说明：**
   * >
   * > 画布自带一个默认画刷，该画刷为黑色，开启反走样，不具备其他任何样式效果。当画布中没有主动设置画刷和画笔时，该默认画刷生效。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  class Canvas {
    /**
     * 创建一个以PixelMap作为绘制目标的Canvas对象。
     *
     * @param { image.PixelMap } pixelmap - 构造函数入参。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(pixelmap: image.PixelMap);

    /**
     * 绘制一个矩形，默认使用黑色填充。
     *
     * @param { common2D.Rect } rect - 绘制的矩形区域。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawRect(rect: common2D.Rect): void;

    /**
     * 绘制一个矩形，默认使用黑色填充。性能优于[drawRect]{@link drawing.Canvas#drawRect(rect: common2D.Rect)}接口，推荐使用本接口。
     *
     * @param { double } left - 矩形的左上角x轴坐标，该参数为浮点数。
     * @param { double } top - 矩形的左上角y轴坐标，该参数为浮点数。
     * @param { double } right - 矩形的右下角x轴坐标，该参数为浮点数。
     * @param { double } bottom - 矩形的右下角y轴坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawRect(left: double, top: double, right: double, bottom: double): void;

    /**
     * 画一个圆角矩形。
     *
     * @param { RoundRect } roundRect - 圆角矩形对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawRoundRect(roundRect: RoundRect): void;

    /**
     * 绘制两个嵌套的圆角矩形，外部矩形边界必须包含内部矩形边界，否则无绘制效果。
     *
     * @param { RoundRect } outer - 圆角矩形对象，表示外部圆角矩形边界。
     * @param { RoundRect } inner - 圆角矩形对象，表示内部圆角矩形边界。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawNestedRoundRect(outer: RoundRect, inner: RoundRect): void;

    /**
     * 使用画刷填充画布的可绘制区域。
     *
     * @param { Brush } brush - 画刷对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawBackground(brush: Brush): void;

    /**
     * 绘制射灯类型阴影，使用路径描述环境光阴影的轮廓。
     *
     * @param { Path } path - 路径对象，可生成阴影。
     * @param { common2D.Point3d } planeParams - 表示一个三维向量，用于计算遮挡物相对于画布在z轴上的偏移量，其值取决于x与y坐标。
     * @param { common2D.Point3d } devLightPos - 光线相对于画布的位置。
     * @param { double } lightRadius - 圆形灯半径，该参数为浮点数。
     * @param { common2D.Color } ambientColor - 环境阴影颜色。
     * @param { common2D.Color } spotColor - 点阴影颜色。
     * @param { ShadowFlag } flag - 阴影标志枚举。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawShadow(path: Path, planeParams: common2D.Point3d, devLightPos: common2D.Point3d, lightRadius: double,
      ambientColor: common2D.Color, spotColor: common2D.Color, flag: ShadowFlag) : void;

    /**
     * 绘制射灯类型阴影，使用路径描述环境光阴影的轮廓。
     *
     * @param { Path } path - 路径对象，可生成阴影。
     * @param { common2D.Point3d } planeParams - 表示一个三维向量，用于计算z轴方向的偏移量。
     * @param { common2D.Point3d } devLightPos - 光线相对于画布的位置。
     * @param { double } lightRadius - 圆形灯半径，该参数为浮点数。
     * @param { common2D.Color | int } ambientColor - 环境阴影颜色，可以用16进制ARGB格式的32位无符号整数表示。
     * @param { common2D.Color | int } spotColor - 点阴影颜色，可以用16进制ARGB格式的32位无符号整数表示。
     * @param { ShadowFlag } flag - 阴影标志枚举。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawShadow(path: Path, planeParams: common2D.Point3d, devLightPos: common2D.Point3d, lightRadius: double,
      ambientColor: common2D.Color | int, spotColor: common2D.Color | int, flag: ShadowFlag) : void;

    /**
     * 绘制一个圆形。如果半径小于等于零，则不绘制。默认使用黑色填充。
     *
     * @param { double } x - 圆心的x坐标，该参数为浮点数。
     * @param { double } y - 圆心的y坐标，该参数为浮点数。
     * @param { double } radius - 圆的半径，大于0的浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawCircle(x: double, y: double, radius: double): void;

    /**
     * 画一张图片，图片的左上角坐标为(left, top)。
     *
     * @param { image.PixelMap } pixelmap - 图片的PixelMap。
     * @param { double } left - 图片位置的左上角x轴坐标，该参数为浮点数。
     * @param { double } top - 图片位置的左上角y轴坐标，该参数为浮点数。
     * @param { SamplingOptions } samplingOptions - 采样选项对象，默认为不使用任何参数构造的原始采样选项对象。 [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawImage(pixelmap: image.PixelMap, left: double, top: double, samplingOptions?: SamplingOptions): void;

    /**
     * 将图像按照矩形网格对象的设置划分为多个网格，并把图像的每个部分按照网格对象的设置绘制到画布上的目标矩形区域。使用此接口时，设置开启抗锯齿无效。
     * 
     * 偶数行和列（起始计数为0）的每个交叉点都是固定的，若固定网格区域的尺寸不超过目标矩形，则会在不缩放的情况下被绘制在目标矩形，反之则会按比例缩放绘制在目标矩形；如果还有剩余空间，剩下的区域会通过拉伸或压缩来绘制，以便能够完全覆盖
     * 目标矩形。
     *
     * @param { image.PixelMap } pixelmap - 用于绘制网格的像素图。
     * @param { Lattice } lattice - 矩形网格对象。
     * @param { common2D.Rect } dstRect - 目标矩形区域。
     * @param { FilterMode } filterMode - 过滤模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawImageLattice(pixelmap: image.PixelMap, lattice: Lattice, dstRect: common2D.Rect,
      filterMode: FilterMode): void;

    /**
     * 通过绘制两条水平线和两条垂直线将图像分割成9个部分：四个边，四个角和中心。使用此接口时，设置开启抗锯齿无效。
     * 
     * 若角落的4个区域尺寸不超过目标矩形，则会在不缩放的情况下被绘制在目标矩形，反之则会按比例缩放绘制在目标矩形；如果还有剩余空间，剩下的5个区域会通过拉伸或压缩来绘制，以便能够完全覆盖目标矩形。
     *
     * @param { image.PixelMap } pixelmap - 用于绘制网格的像素图。
     * @param { common2D.Rect } center - 分割图像的中心矩形。矩形四条边所在的直线将图像分成了9个部分。
     * @param { common2D.Rect } dstRect - 在画布上绘制的目标矩形区域。
     * @param { FilterMode } filterMode - 过滤模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawImageNine(pixelmap: image.PixelMap, center: common2D.Rect, dstRect: common2D.Rect,
      filterMode: FilterMode): void;

    /**
     * 将图片绘制到画布的指定区域上。
     *
     * @param { image.PixelMap } pixelmap - 图片的PixelMap。
     * @param { common2D.Rect } dstRect - 矩形对象，用于指定画布上图片的绘制区域。
     * @param { SamplingOptions } samplingOptions - 采样选项对象，默认为不使用任何参数构造的原始采样选项对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawImageRect(pixelmap: image.PixelMap, dstRect: common2D.Rect, samplingOptions?: SamplingOptions): void;

    /**
     * 将图片的指定区域绘制到画布的指定区域。
     *
     * @param { image.PixelMap } pixelmap - 图片的PixelMap。
     * @param { common2D.Rect } srcRect - 矩形对象，用于指定图片的待绘制区域。
     * @param { common2D.Rect } dstRect - 矩形对象，用于指定画布上图片的绘制区域。
     * @param { SamplingOptions } samplingOptions - 采样选项对象，默认为不使用任何参数构造的原始采样选项对象。
     * @param { SrcRectConstraint } constraint - 源矩形区域约束类型，默认为STRICT。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawImageRectWithSrc(pixelmap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      samplingOptions?: SamplingOptions, constraint?: SrcRectConstraint): void;

    /**
     * 使用指定颜色并按照指定的[BlendMode]{@link @ohos.graphics.drawing:drawing.BlendMode}对画布当前可绘制区域进行填充。
     *
     * @param { common2D.Color } color - ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。
     * @param { BlendMode } [blendMode] - 颜色混合模式，默认模式为SRC_OVER。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawColor(color: common2D.Color, blendMode?: BlendMode): void;

    /**
     * 使用指定颜色并按照指定的[BlendMode]{@link @ohos.graphics.drawing:drawing.BlendMode}对画布当前可绘制区域进行填充。性能优于
     * [drawColor]{@link drawing.Canvas#drawColor(color: common2D.Color, blendMode?: BlendMode)}接口，推荐使用本接口。
     *
     * @param { int } alpha - ARGB格式颜色的透明度通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { int } red - ARGB格式颜色的红色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { int } green - ARGB格式颜色的绿色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { int } blue - ARGB格式颜色的蓝色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { BlendMode } [blendMode] - 颜色混合模式，默认模式为SRC_OVER。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawColor(alpha: int, red: int, green: int, blue: int, blendMode?: BlendMode): void;

    /**
     * 使用指定颜色并按照指定的[BlendMode]{@link @ohos.graphics.drawing:drawing.BlendMode}对画布当前可绘制区域进行填充。
     *
     * @param { int } color - 16进制ARGB格式的颜色。
     * @param { BlendMode } [blendMode] - 颜色混合模式，默认模式为SRC_OVER。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawColor(color: int, blendMode?: BlendMode): void;

    /**
     * 在画布上绘制一个椭圆，椭圆的形状和位置由椭圆的外切矩形给出。
     *
     * @param { common2D.Rect } oval - 矩形区域，该矩形的内切椭圆即为待绘制椭圆。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawOval(oval: common2D.Rect): void;

    /**
     * 在画布上绘制圆弧。该方法允许指定起始角度、扫描角度。当扫描角度的绝对值大于360度时，则绘制椭圆。
     *
     * @param { common2D.Rect } arc - 包含要绘制的圆弧的椭圆的矩形边界。
     * @param { double } startAngle - 弧的起始角度，单位为度，该参数为浮点数。0度时起始点位于椭圆的右端点，正数时以顺时针方向放置起始点，负数时以逆时针方向放置起始点。
     * @param { double } sweepAngle - 弧的扫描角度，单位为度，该参数为浮点数。为正数时顺时针扫描，为负数时逆时针扫描。它的有效范围在-360度到360度之间，当绝对值大于360度时，该方法绘制的是一个椭
     *     圆。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawArc(arc: common2D.Rect, startAngle: double, sweepAngle: double): void;

    /**
     * 在画布上绘制圆弧。该方法允许指定圆弧的起始角度、扫描角度以及圆弧的起点和终点是否连接圆弧的中心点。
     *
     * @param { common2D.Rect } arc - 包含要绘制的圆弧的椭圆的矩形边界。
     * @param { double } startAngle - 弧的起始角度，单位为度，该参数为浮点数。0度时起始点位于椭圆的右端点，为正数时以顺时针方向放置起始点，为负数时以逆时针方向放置起始点。
     * @param { double } sweepAngle - 弧的扫描角度，单位为度，该参数为浮点数。为正数时顺时针扫描，为负数时逆时针扫描。扫描角度可以超过360度，将绘制一个完整的椭圆。
     * @param { boolean } useCenter - 绘制时弧形的起点和终点是否连接弧形的中心点。true表示连接，false表示不连接。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    drawArcWithCenter(arc: common2D.Rect, startAngle: double, sweepAngle: double, useCenter: boolean): void;

    /**
     * 绘制一个点。
     *
     * @param { double } x - 点的x轴坐标，该参数为浮点数。
     * @param { double } y - 点的y轴坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawPoint(x: double, y: double): void;

    /**
     * 在画布上绘制一组点、线段或多边形。通过指定点的数组和绘制模式来决定绘制方式。
     *
     * @param { Array<common2D.Point> } points - 要绘制的点的数组。长度不能为0。
     * @param { PointMode } mode - 绘制数组中的点的方式，默认为drawing.PointMode.POINTS。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawPoints(points: Array<common2D.Point>, mode?: PointMode): void;

    /**
     * 绘制一个自定义路径，该路径包含了一组路径轮廓，每个路径轮廓可以是开放的或封闭的。
     *
     * @param { Path } path - 要绘制的路径对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawPath(path: Path): void;

    /**
     * 画一条直线段，从指定的起点到终点。如果直线段的起点和终点是同一个点，无法绘制。
     *
     * @param { double } x0 - 线段起点的X坐标，该参数为浮点数。
     * @param { double } y0 - 线段起点的Y坐标，该参数为浮点数。
     * @param { double } x1 - 线段终点的X坐标，该参数为浮点数。
     * @param { double } y1 - 线段终点的Y坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawLine(x0: double, y0: double, x1: double, y1: double): void;

    /**
     * 绘制单个字符。当前字型中的字体不支持待绘制字符时，退化到使用系统字体绘制字符。
     *
     * @param { string } text - 待绘制的单个字符，字符串的长度必须为1。
     * @param { Font } font - 字型对象。
     * @param { double } x - 所绘制出的字符基线（下图蓝线）的左端点（下图红点）的横坐标，该参数为浮点数。
     * @param { double } y - 所绘制出的字符基线（下图蓝线）的左端点（下图红点）的纵坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawSingleCharacter(text: string, font: Font, x: double, y: double): void;

    /**
     * 绘制单个字符，字符带有字体特征。当前字型中的字体不支持待绘制字符时，退化到使用系统字体绘制字符。
     *
     * @param { string } text - 待绘制的单个字符，字符串长度必须为1。
     * @param { Font } font - 字型对象。
     * @param { double } x - 所绘制字符基线左端点的横坐标，该参数为浮点数。
     * @param { double } y - 所绘制字符基线左端点的纵坐标，该参数为浮点数。
     * @param { Array<FontFeature> } features - 字体特征对象数组。参数为空数组时使用TTF(TrueType Font)文件中预设的字体特征。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    drawSingleCharacterWithFeatures(text: string, font: Font, x: double, y: double, features: Array<FontFeature>): void;

    /**
     * 绘制一段文字。若构造blob的字体不支持待绘制字符，则该部分字符无法绘制。
     *
     * @param { TextBlob } blob - TextBlob对象。
     * @param { double } x - 所绘制出的文字基线（下图蓝线）的左端点（下图红点）的横坐标，该参数为浮点数。
     * @param { double } y - 所绘制出的文字基线（下图蓝线）的左端点（下图红点）的纵坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    drawTextBlob(blob: TextBlob, x: double, y: double): void;

    /**
     * 绘制具有指定字体的字形数组。如果字形计数小于或等于0，则不绘制任何内容。
     *
     * @param { Array<int> } glyphIds - 指示字形ID的数组。
     * @param { int } glyphIdOffset - 指示在绘制字形Ids数组之前要跳过的元素的数量。
     *     取值限定为整数。
     * @param { Array<common2D.Point> } positions - 表示位置数组。
     * @param { int } positionOffset - 指示在绘制位置数组之前要跳过的元素的数量。
     *     取值限定为整数。
     * @param { int } glyphCount - 指示要绘制的字形的数目。
     *     取值限定为整数。
     * @param { Font } font - 指示用于绘图的字体。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    drawGlyphs(glyphIds: Array<int>, glyphIdOffset: int, positions: Array<common2D.Point>,
      positionOffset: int, glyphCount: int, font: Font): void;

    /**
     * 在网格上绘制像素图，网格均匀分布在像素图上。（只支持brush，使用pen没有绘制效果。）
     *
     * @param { image.PixelMap } pixelmap - 用于绘制网格的像素图。
     * @param { int } meshWidth - 网格中的列数，大于0的整数。
     * @param { int } meshHeight - 网格中的行数，大于0的整数。
     * @param { Array<double> } vertices - 顶点数组，指定网格的绘制位置，浮点数组，大小必须为((meshWidth+1) * (meshHeight+1) + vertOffset) * 2。
     * @param { int } vertOffset - 绘图前要跳过的vert元素数，大于等于0的整数。
     * @param { Array<int> | null } colors - 颜色数组，在每个顶点指定一种颜色，整数数组，可为null，大小必须为(meshWidth+1) * (meshHeight+1) +
     *     colorOffset。 [since 20]
     * @param { int } colorOffset - 绘制前要跳过的颜色元素数，大于等于0的整数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawPixelMapMesh(pixelmap: image.PixelMap, meshWidth: int, meshHeight: int,
      vertices: Array<double>, vertOffset: int, colors: Array<int> | null, colorOffset: int): void;

    /**
     * 绘制顶点数组描述的三角网格。
     *
     * @param { VertexMode } vertexMode - 绘制顶点的连接方式。
     * @param { int } vertexCount - 顶点数组元素的数量，值为大于等于3的整数。
     * @param { Array<common2D.Point> } positions - 描述顶点位置的数组，不能为空，其长度必须等于vertexCount。
     * @param { Array<common2D.Point> | null } texs - 描述顶点对应纹理空间坐标的数组。其可以为空，表明纹理空间失效；若不为空，其长度必须等于vertexCount。
     * @param { Array<int> | null } colors - 描述顶点对应颜色的数组，用于在三角形中进行插值。其可以为空，表明颜色效果为用户所设置的默认色；若不为空其长度必须等于vertexCount。
     * @param { int } indexCount - 索引的数量。其值可以为0，且indices数组长度为0时可以画图；若不为0，则值必须为大于等于3的整数。
     * @param { Array<int> | null } indices - 描述顶点对应索引的数组。其可以为空，此时将忽略indexCount的合理传值（大于等于3的整数或等于0）；若不为空其长度必须等于indexCount
     *     。
     * @param { BlendMode } mode - 颜色混合模式。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 dynamic&static
     */
    drawVertices(vertexMode: VertexMode, vertexCount: int, positions: Array<common2D.Point>,
      texs: Array<common2D.Point> | null, colors: Array<int> | null, indexCount: int,
      indices: Array<int> | null, mode: BlendMode): void;

    /**
     * 绘制一个区域。
     *
     * @param { Region } region - 绘制的区域。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    drawRegion(region: Region): void;

    /**
     * 绑定画笔到画布上，在画布上进行绘制时，将使用画笔的样式去绘制图形形状的轮廓。
     * 
     * > **说明：**
     * >
     * > 执行该方法后，若pen的效果发生改变并且开发者希望该变化生效于接下来的绘制动作，需要再次执行该方法以确保变化生效。
     *
     * @param { Pen } pen - 画笔对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    attachPen(pen: Pen): void;

    /**
     * 绑定画刷到画布上，在画布上进行绘制时，将使用画刷的样式对绘制图形形状的内部进行填充。
     * 
     * > **说明：**
     * >
     * > 执行该方法后，若brush的效果发生改变并且开发者希望该变化生效于接下来的绘制动作，需要再次执行该方法以确保变化生效。
     *
     * @param { Brush } brush - 画刷对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    attachBrush(brush: Brush): void;

    /**
     * 将画笔与画布解绑，在画布上进行绘制时，不会再使用画笔去绘制图形形状的轮廓。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    detachPen(): void;

    /**
     * 将画刷与画布解绑，在画布上进行绘制时，不会再使用画刷对绘制图形形状的内部进行填充。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    detachBrush(): void;

    /**
     * 保存当前画布状态（画布矩阵和可绘制区域）到栈顶。需要与恢复接口[restore]{@link drawing.Canvas.restore}配合使用。
     *
     * @returns { int } 画布状态个数，该参数为正整数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    save(): int;

    /**
     * 保存当前画布的矩阵和裁剪区域，并为后续绘制分配位图。调用恢复接口[restore]{@link drawing.Canvas.restore}将会舍弃对矩阵和裁剪区域做的更改，并绘制位图。
     *
     * @param { common2D.Rect | null } rect - 矩形对象，用于限制图层大小，默认为当前画布大小。
     * @param { Brush | null } brush - 画刷对象，绘制位图时会应用画刷对象的透明度，颜色滤波器效果和混合模式，默认不设置额外效果。
     * @returns { long } 返回调用前保存的画布状态数，该参数为正整数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    saveLayer(rect?: common2D.Rect | null, brush?: Brush | null): long;

    /**
     * 使用指定颜色填充画布上的裁剪区域。效果等同于[drawColor]{@link drawing.Canvas#drawColor(color: common2D.Color, blendMode?: BlendMode)}。
     *
     * @param { common2D.Color } color - ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clear(color: common2D.Color): void;

    /**
     * 使用指定颜色填充画布上的裁剪区域。
     *
     * @param { common2D.Color | int } color - 颜色，可以用16进制ARGB格式的无符号整数表示。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    clear(color: common2D.Color | int): void;

    /**
     * 恢复保存在栈顶的画布状态（画布矩阵和裁剪区域）。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    restore(): void;

    /**
     * 恢复到指定数量的画布状态（画布矩阵和裁剪区域）。
     *
     * @param { int } count - 要恢复的画布状态深度，该参数为整数。小于等于1时，恢复为初始状态；大于已保存的画布状态数量时，不执行任何操作。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    restoreToCount(count: int): void;

    /**
     * 获取栈中保存的画布状态（画布矩阵和裁剪区域）的数量。
     *
     * @returns { int } 已保存的画布状态的数量，该参数为正整数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getSaveCount(): int;

    /**
     * 获取画布的宽度。
     *
     * @returns { int } 返回画布的宽度，该参数为浮点数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getWidth(): int;

    /**
     * 获取画布的高度。
     *
     * @returns { int } 返回画布的高度，该参数为浮点数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getHeight(): int;

    /**
     * 获取画布裁剪区域的边界。
     *
     * @returns { common2D.Rect } Bounds of the cropping region.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getLocalClipBounds(): common2D.Rect;

    /**
     * Obtains the bounds of the cropping region of the canvas.
     *
     * @returns { common2D.Rect | undefined } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getLocalClipBounds(): common2D.Rect | undefined;

    /**
     * 获取画布矩阵。
     *
     * @returns { Matrix } 返回画布矩阵。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getTotalMatrix(): Matrix;

    /**
     * Obtains the canvas matrix.
     *
     * @returns { Matrix | undefined } Canvas matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getTotalMatrix(): Matrix | undefined;

    /**
     * 在当前画布矩阵（默认是单位矩阵）的基础上再叠加一个缩放矩阵，后续绘制操作和裁剪操作的形状和位置都会自动叠加一个缩放效果。
     *
     * @param { double } sx - x轴方向的缩放比例，该参数为浮点数。
     * @param { double } sy - y轴方向的缩放比例，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    scale(sx: double, sy: double): void;

    /**
     * 在当前画布矩阵（默认是单位矩阵）的基础上再叠加一个倾斜矩阵，后续绘制操作和裁剪操作的形状和位置都会自动叠加一个倾斜效果。
     *
     * @param { double } sx - x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。
     * @param { double } sy - y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    skew(sx: double, sy: double) : void;

    /**
     * 在当前画布矩阵（默认是单位矩阵）的基础上再叠加一个旋转矩阵，后续绘制操作和裁剪操作的形状和位置都会自动叠加一个旋转效果。
     *
     * @param { double } degrees - 旋转角度，单位为度，该参数为浮点数，正数为顺时针旋转，负数为逆时针旋转。
     * @param { double } sx - 旋转中心的横坐标，该参数为浮点数。
     * @param { double } sy - 旋转中心的纵坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    rotate(degrees: double, sx: double, sy: double) : void;

    /**
     * 在当前画布矩阵（默认是单位矩阵）的基础上再叠加一个平移矩阵，后续绘制操作和裁剪操作的形状和位置都会自动叠加一个平移效果。
     *
     * @param { double } dx - x轴方向的移动距离，该参数为浮点数。
     * @param { double } dy - y轴方向的移动距离，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    translate(dx: double, dy: double): void;

    /**
     * 使用自定义路径对画布的可绘制区域进行裁剪。
     *
     * @param { Path } path - 路径对象。
     * @param { ClipOp } clipOp - 裁剪方式。默认为INTERSECT。
     * @param { boolean } doAntiAlias - 表示是否使能抗锯齿绘制。true表示使能，false表示不使能。默认为false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clipPath(path: Path, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * 使用矩形对画布的可绘制区域进行裁剪。
     *
     * @param { common2D.Rect } rect - 需要裁剪的矩形区域。
     * @param { ClipOp } clipOp - 裁剪方式。默认为INTERSECT。
     * @param { boolean } doAntiAlias - 表示是否使能抗锯齿绘制。true表示使能，false表示不使能。默认为false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clipRect(rect: common2D.Rect, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * 画布现有矩阵左乘传入矩阵，不影响之前的绘制操作，后续绘制操作和裁剪操作的形状和位置都会受到该矩阵的影响。
     *
     * @param { Matrix } matrix - 矩阵对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    concatMatrix(matrix: Matrix): void;

    /**
     * 在画布上裁剪一个区域。
     *
     * @param { Region } region - 区域对象，表示裁剪范围。
     * @param { ClipOp } clipOp - 裁剪方式，默认为INTERSECT。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clipRegion(region: Region, clipOp?: ClipOp): void;

    /**
     * 在画布上裁剪一个圆角矩形。
     *
     * @param { RoundRect } roundRect - 圆角矩形对象，表示裁剪范围。
     * @param { ClipOp } clipOp - 裁剪方式，默认为INTERSECT。
     * @param { boolean } doAntiAlias - 表示是否使能抗锯齿。true表示使能，false表示不使能。默认为false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    clipRoundRect(roundRect: RoundRect, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * 判断裁剪后的可绘制区域是否为空。
     *
     * @returns { boolean } 返回画布的可绘制区域是否为空的结果，true表示为空，false表示不为空。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isClipEmpty(): boolean;

    /**
     * 检查绘制到设备中的当前图层是否不透明。
     *
     * @returns { boolean } 如果绘制到设备中的当前层是不透明的，则返回true。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isOpaque(): boolean;

    /**
     * 设置画布的矩阵，后续绘制操作和裁剪操作的形状和位置都会受到该矩阵的影响。
     *
     * @param { Matrix } matrix - 矩阵对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMatrix(matrix: Matrix): void;

    /**
     * 将当前画布的矩阵重置为单位矩阵。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    resetMatrix(): void;

    /**
     * 将当前画布的裁剪状态重置为初始状态。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    resetClip(): void;

    /**
     * 判断路径与画布区域是否不相交。画布区域包含边界。
     *
     * @param { Path } path - 路径对象。
     * @returns { boolean } 返回路径是否与画布区域不相交的结果。true表示路径与画布区域不相交，false表示路径与画布区域相交。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    quickRejectPath(path: Path): boolean;

    /**
     * 判断矩形和画布区域是否不相交。画布区域包含边界。
     *
     * @param { common2D.Rect } rect - 矩形区域。
     * @returns { boolean } 返回矩形是否与画布区域不相交的结果。true表示矩形与画布区域不相交，false表示矩形与画布区域相交。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    quickRejectRect(rect: common2D.Rect): boolean;
  }

  /**
   * 画布裁剪方式的枚举。
   * 
   * > **说明：**
   * >
   * > 示意图展示了以INTERSECT方式裁剪一个矩形后，使用不同枚举值继续裁剪一个圆形的结果，绿色区域为最终的裁剪区域。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum ClipOp {
    /**
     * 将指定区域裁剪（取差集）。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DIFFERENCE = 0,
    /**
     * 将指定区域保留（取交集）。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INTERSECT = 1
  }

  /**
   * 描述一行文字中具有相同属性的连续字形。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  interface TextBlobRunBuffer {
    /**
     * 存储文字的索引，该参数为整数，传入浮点类型时向下取整。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    glyph: int;
    /**
     * 文本的起点x轴坐标，该参数为浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    positionX: double;
    /**
     * 文本的起点y轴坐标，该参数为浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    positionY: double;
  }

  /**
   * 文本的编码类型枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  enum TextEncoding {
    /**
     * 使用1个字节表示UTF-8或ASCII。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT_ENCODING_UTF8 = 0,
    /**
     * 使用2个字节表示大部分unicode。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT_ENCODING_UTF16 = 1,
    /**
     * 使用4个字节表示全部unicode。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT_ENCODING_UTF32 = 2,
    /**
     * 使用2个字节表示glyph index。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT_ENCODING_GLYPH_ID = 3
  }

  /**
   * 由一个或多个具有相同字体的字符组成的字块。
   * 
   * > **说明：**
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  class TextBlob {
    /**
     * 将string类型的值转化成TextBlob对象。
     *
     * @param { string } text - 绘制字形的文本内容。
     * @param { Font } font - 字型对象。
     * @param { TextEncoding } [encoding] - 编码类型，默认值为TEXT_ENCODING_UTF8。当前只有TEXT_ENCODING_UTF8生效，其余编码类型也会被视为
     *     TEXT_ENCODING_UTF8。
     * @returns { TextBlob } TextBlob对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob;

    /**
     * Converts a value of the string type into a TextBlob object.
     *
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @param { TextEncoding } [encoding] - Encoding type. The default value is TEXT_ENCODING_UTF8.
     *     Currently, only TEXT_ENCODING_UTF8 takes effect, and other encoding types are treated as TEXT_ENCODING_UTF8.
     * @returns { TextBlob | undefined } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob | undefined;

    /**
     * 使用文本创建TextBlob对象，TextBlob对象中每个字形的坐标由points中对应的坐标信息决定。
     *
     * @param { string } text - 绘制字形的文本内容。
     * @param { number } len - 字形个数，由[countText]{@link @ohos.graphics.drawing:drawing.Font.countText}获取，该参数为整数。
     * @param { common2D.Point[] } points - 点数组，用于指定每个字形的坐标，长度必须为len。
     * @param { Font } font - 字型对象。
     * @returns { TextBlob } TextBlob对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static makeFromPosText(text: string, len: number, points: common2D.Point[], font: Font): TextBlob;

    /**
     * Creates a TextBlob object from the text.
     * The coordinates of each font in the TextBlob object are determined by
     * the coordinate information in the points array.
     *
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { int } len - Number of fonts. The value is an integer and is obtained from countText.
     * @param { common2D.Point[] } points - Array of points, which are used to specify the coordinates of each font.
     *     The array length must be the same as the value of len.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @returns { TextBlob | undefined } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromPosText(text: string, len: int, points: common2D.Point[], font: Font): TextBlob | undefined;

    /**
     * 基于RunBuffer信息创建TextBlob对象。
     *
     * @param { Array<TextBlobRunBuffer> } pos - TextBlobRunBuffer数组。
     * @param { Font } font - 字型对象。
     * @param { common2D.Rect } [bounds] - 可选，如果不设置，则无边界框。
     * @returns { TextBlob } TextBlob对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob;

    /**
     * Creates a Textblob object based on the RunBuffer information.
     *
     * @param { Array<TextBlobRunBuffer> } pos - The array of TextBlobRunBuffer.
     * @param { Font } font - Font used for this run.
     * @param { common2D.Rect } [bounds] - Optional run bounding box. The default value is null;
     * @returns { TextBlob | undefined } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob | undefined;

    /**
     * 获取文字边界框的矩形区域。
     *
     * @returns { common2D.Rect } Rectangular bounding box.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    bounds(): common2D.Rect;

    /**
     * Obtains the rectangular bounding box of the text blob.
     *
     * @returns { common2D.Rect | undefined } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    bounds(): common2D.Rect | undefined;

    /**
     * 获取该TextBlob对象的唯一的非零标识符。
     *
     * @returns { long } 返回TextBlob对象的唯一的非零标识符。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    uniqueID(): long;
  }

  /**
   * 提供字体属性配置的结构体。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 20开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice [since 22]
   * @since 20 dynamic
   * @since 23 static
   */
  class TypefaceArguments {
    /**
     * 字体属性的构造函数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    constructor();
    /**
     * 给字体属性设置字重值。
     *
     * @param { string } axis  - Indicates the axis tag, which must contain four ASCII characters.
     * @param { number } value  - Indicates the value of the axis field.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     */
    addVariation(axis: string, value: number);

    /**
     * Adds variation axis for the TypefaceArguments.
     *
     * @param { string } axis  - Indicates the axis tag, which must contain four ASCII characters.
     * @param { double } value  - Indicates the value of the axis field.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    addVariation(axis: string, value: double) : void;
  }

  /**
   * 字体，如宋体、楷体等。
   * 
   * > **说明：**
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  class Typeface {
    /**
     * 获取字体的族名，即一套字体设计的名称。
     *
     * @returns { string } 返回字体的族名。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    getFamilyName(): string;

    /**
     * Get the family name for this typeface.
     *
     * @returns { string | undefined } Family name.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getFamilyName(): string | undefined;

    /**
     * 基于当前字体结合字体属性构造新的字体对象。
     *
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface } 返回字体对象（异常情况下会返回空指针）。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface;

    /**
     * Generate typeface from current typeface and TypefaceArguments.
     *
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface | undefined } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface | undefined;

    /**
     * 从指定字体文件构造字体。
     *
     * @param { string } filePath - 表示字体资源存放的路径。应用沙箱路径和真实物理路径的对应关系请参考
     *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系)。
     * @returns { Typeface } 返回Typeface对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    static makeFromFile(filePath: string): Typeface;

    /**
     * Constructs a typeface from a file.
     *
     * @param { string } filePath - file path for typeface.
     * @returns { Typeface | undefined } Typeface.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromFile(filePath: string): Typeface | undefined;

    /**
     * 使用指定的字体文件构造字体，其中要求指定的字体文件需保存在应用资源文件夹的rawfile路径下。
     *
     * @param { Resource } rawfile - 指定字体文件对应的资源对象。当前只支持``$rawfile``格式引用的资源对象，对应格式写为``$rawfile('filePath')``，其中filePath为
     *     指定字体文件相对于工程中resources/rawfile目录的相对路径。如将字体文件直接存放在resources/rawfile目录下，则引用格式应写为：``$rawfile('
     *     HarmonyOS_Sans_Bold.ttf')``；也可以创建子目录，将字体文件存放在resources/rawfile/ttf下，则引用格式应写为：``$rawfile('ttf/
     *     HarmonyOS_Sans_Bold.ttf')``。
     * @returns { Typeface } 返回Typeface对象（异常情况下会返回空指针）。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    static makeFromRawFile(rawfile: Resource): Typeface;

    /**
     * Constructs a typeface from a file, which must be stored in the
     * resources/rawfile directory of the application project.
     *
     * @param { Resource } rawfile - Resource object corresponding to the file.
     *     Currently, only resource objects referenced in rawfile format are supported.
     *     The corresponding format is rawfile('filePath'),
     *     where filePath is the relative path of the file to the resources/rawfile directory in the project.
     *     If the file is stored in resources/rawfile, the reference format is rawfile('HarmonyOS_Sans_Bold.ttf').
     *     If the file is stored in a subdirectory, for example, in resources/rawfile/ttf,
     *     the reference format is rawfile('ttf/HarmonyOS_Sans_Bold.ttf').
     * @returns { Typeface | undefined } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeFromRawFile(rawfile: Resource): Typeface | undefined;

    /**
     * 根据字体文件路径和字体属性构造新的字体。
     *
     * @param { string } filePath - 表示字体资源存放的路径。应用沙箱路径和真实物理路径的对应关系请参考
     *     [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系)。
     * @param { TypefaceArguments } typefaceArguments - 表示字体属性。
     * @returns { Typeface } 返回字体对象（异常情况下会返回空指针）。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     */
    static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface;

    /**
     * Generate typeface from file and TypefaceArguments.
     *
     * @param { string } filePath - file path for typeface.
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface | undefined } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface | undefined;

    /**
     * 使用指定的字体文件和字体属性构造字体，其中要求指定的字体文件需保存在应用资源文件夹的rawfile路径下。
     *
     * @param { Resource } rawfile - 指定字体文件对应的资源对象。当前只支持``$rawfile``格式引用的资源对象，对应格式写为``$rawfile('filePath')``，其中filePath为
     *     指定字体文件相对于工程中resources/rawfile目录的相对路径。
     * @param { TypefaceArguments } typefaceArguments - 表示字体属性。
     * @returns { Typeface } 返回字体对象（异常情况下会返回空指针）。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     */
    static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface;

    /**
     * Generate typeface from Rawfile and TypefaceArguments.
     *
     * @param { Resource } rawfile - RawFile for typeface.
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface | undefined } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface | undefined;

    /**
     * 检查字体是否加粗。
     *
     * @returns { boolean } 返回当前字体是否加粗。true表示字体加粗，false表示字体未加粗。
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 dynamic&static
     */
    isBold(): boolean;

    /**
     * 检查字体是否是斜体。
     *
     * @returns { boolean } 返回当前字体是否是斜体。true表示字体是斜体，false表示字体不是斜体。
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 dynamic&static
     */
    isItalic(): boolean;
  }

  /**
   * 字型边缘效果类型枚举。
   * 
   * > **说明：**
   * >
   * > FontEdging不支持位图字体（如点阵字体、emoji等）。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontEdging {
    /**
     * 无抗锯齿处理。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ALIAS = 0,

    /**
     * 使用抗锯齿来平滑字型边缘。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    ANTI_ALIAS = 1,

    /**
     * 使用次像素级别的抗锯齿平滑字型边缘，可以获得更平滑的字型渲染效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SUBPIXEL_ANTI_ALIAS = 2
  }

  /**
   * 字型轮廓效果类型枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontHinting {
    /**
     * 不修改字型轮廓。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 最小限度修改字型轮廓以改善对比度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    SLIGHT = 1,

    /**
     * 修改字型轮廓以提高对比度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 2,

    /**
     * 修改字型轮廓以获得最大对比度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    FULL = 3
  }

  /**
   * 描述字型绘制时所使用的属性，如大小、字体等。
   * 
   * > **说明：**
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  class Font {
    /**
     * 使能字型亚像素级别的文字绘制，显示效果平滑。
     *
     * @param { boolean } isSubpixel - 表示是否使能字型亚像素级别的文字绘制。true表示使能，false表示不使能。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    enableSubpixel(isSubpixel: boolean): void;

    /**
     * 使能字型粗体。
     *
     * @param { boolean } isEmbolden - 表示是否使能字型粗体。true表示使能，false表示不使能。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    enableEmbolden(isEmbolden: boolean): void;

    /**
     * 使能字型的线性缩放。
     *
     * @param { boolean } isLinearMetrics - 表示是否使能字型的线性缩放。true表示使能，false表示不使能。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    enableLinearMetrics(isLinearMetrics: boolean): void;

    /**
     * 设置字型大小。
     *
     * @param { double } textSize - 字型大小，该参数为浮点数，为负数时字型大小会被置为0。字型大小为0时，绘制的文字不会显示。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    setSize(textSize: double): void;

    /**
     * 获取字型大小。
     *
     * @returns { double } 字型大小，浮点数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    getSize(): double;

    /**
     * 为字型设置字体样式（包括字体名称、粗细、斜体等属性）。
     *
     * @param { Typeface } typeface - 字体样式，包括字体名称、粗细、斜体等属性。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    setTypeface(typeface: Typeface): void;

    /**
     * 获取字体。
     *
     * @returns { Typeface } 字体。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     */
    getTypeface(): Typeface;

    /**
     * Obtains the typeface.
     *
     * @returns { Typeface | undefined } Typeface object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getTypeface(): Typeface | undefined;

    /**
     * 获取与字体关联的FontMetrics属性。
     *
     * @returns { FontMetrics } FontMetrics属性。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     */
    getMetrics(): FontMetrics;

    /**
     * Obtains the font metrics of the typeface.
     *
     * @returns { FontMetrics | undefined } The fontMetrics value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getMetrics(): FontMetrics | undefined;

    /**
     * 测量单个字符的宽度。当前字型中的字体不支持待测量字符时，退化到使用系统字体测量字符宽度。
     *
     * @param { string } text - 待测量的单个字符，字符串的长度必须为1。
     * @returns { double } 字符的宽度，浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    measureSingleCharacter(text: string): double;

    /**
     * 测量单个字符的宽度，字符带有字体特征。当前字型中的字体不支持待测量字符时，退化到使用系统字体测量字符宽度。
     *
     * @param { string } text - 待测量的单个字符。字符串长度必须为1。
     * @param { Array<FontFeature> } features - 字体特征对象数组。参数为空数组时使用TTF(TrueType Font)文件中预设的字体特征。
     * @returns { double } 字符的宽度，浮点数，单位为px。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 24 static
     */
    measureSingleCharacterWithFeatures(text: string, features: Array<FontFeature>): double;

    /**
     * 测量文本的宽度。
     * 
     * > **说明：**
     * >
     * > 此接口用于测量原始字符串的文本宽度，若想测量排版后的文本宽度，建议使用
     * > [measure.measureText](docroot://reference/apis-arkui/arkts-apis-uicontext-measureutils.md#measuretext12)替代。
     *
     * @param { string } text - 文本内容。
     * @param { TextEncoding } encoding - 编码格式。
     * @returns { double } 文本的宽度，浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    measureText(text: string, encoding: TextEncoding): double;

    /**
     * 设置字型对象在x轴上的缩放比例。
     *
     * @param { double } scaleX - 文本在x轴上的缩放比例，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setScaleX(scaleX: double): void;

    /**
     * 设置字型对象在x轴上的倾斜比例。
     *
     * @param { double } skewX - 文本在x轴上的倾斜比例，正数表示往左边倾斜，负数表示往右边倾斜，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setSkewX(skewX: double): void;

    /**
     * 设置字型边缘效果。
     *
     * @param { FontEdging } edging - 字型边缘效果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setEdging(edging: FontEdging): void;

    /**
     * 设置字型轮廓效果。
     *
     * @param { FontHinting } hinting - 字型轮廓效果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setHinting(hinting: FontHinting): void;

    /**
     * 获取文本所表示的字符数量。
     *
     * @param { string } text - 文本内容。
     * @returns { int } 返回文本所表示的字符数量，整数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    countText(text: string): int;

    /**
     * 当前画布矩阵轴对齐时，设置字型基线是否与像素对齐。
     *
     * @param { boolean } isBaselineSnap - 指示字型基线是否和像素对齐，true表示对齐，false表示不对齐。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setBaselineSnap(isBaselineSnap: boolean): void;

    /**
     * 当前画布矩阵轴对齐时，获取字型基线是否与像素对齐的结果。
     *
     * @returns { boolean } 返回字型基线是否与像素对齐，true为对齐，false为没有对齐。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isBaselineSnap(): boolean;

    /**
     * 设置字型是否转换成位图处理。
     *
     * @param { boolean } isEmbeddedBitmaps - 设置字型是否转换成位图处理，true表示转换成位图处理，false表示不转换成位图处理。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setEmbeddedBitmaps(isEmbeddedBitmaps: boolean): void;

    /**
     * 获取字型是否转换成位图处理的结果。
     *
     * @returns { boolean } 返回字型是否转换成位图处理结果，true表示转换成位图处理，false表示不转换成位图处理。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isEmbeddedBitmaps(): boolean;

    /**
     * 设置是否自动调整字型轮廓。
     *
     * @param { boolean } isForceAutoHinting - 是否自动调整字型轮廓，true为自动调整，false为不自动调整。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    setForceAutoHinting(isForceAutoHinting: boolean): void;

    /**
     * 获取字型轮廓是否自动调整的结果。
     *
     * @returns { boolean } 返回字型轮廓是否自动调整，true为自动调整，false为不自动调整。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isForceAutoHinting(): boolean;

    /**
     * 获取字形数组中每个字形对应的宽度。
     *
     * @param { Array<number> } glyphs - 字形索引数组，可由
     *     [textToGlyphs]{@link drawing.Font#textToGlyphs(text: string, glyphCount?: number)}生成。
     * @returns { Array<number> } 返回字形宽度数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    getWidths(glyphs: Array<number>): Array<number>;

    /**
     * Obtains the width of each glyph in an array.
     *
     * @param { Array<int> } glyphs - Glyph array, which can be generated by textToGlyphs.
     * @returns { Array<double> | undefined } Glyph array, which can be generated by textToGlyphs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getWidths(glyphs: Array<int>): Array<double> | undefined;

    /**
     * 将文本转换为字形索引。
     *
     * @param { string } text - 文本字符串。
     * @param { number } [glyphCount] - 文本表示的字符数量，必须与[countText]{@link drawing.Font.countText}获取的值相等，默认为text的字符数量，该参数为整数
     *     。
     * @returns { Array<number> } Array that holds the glyph indexes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    textToGlyphs(text: string, glyphCount?: number): Array<number>;

    /**
     * Converts text into glyph indexes.
     *
     * @param { string } text - Text string.
     * @param { int } [glyphCount] - Number of glyphs represented by the text.
     *     The value must be the same as the value obtained from countText.
     *     The default value is the number of characters in the text string. The value is an integer.
     * @returns { Array<int> | undefined } Returns the storage for glyph indices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    textToGlyphs(text: string, glyphCount?: int): Array<int> | undefined;

    /**
     * 获取字型是否使用次像素渲染。
     *
     * @returns { boolean } 返回字型是否使用次像素渲染的结果，true表示使用，false表示不使用。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isSubpixel(): boolean;

    /**
     * 获取字型是否可以线性缩放。
     *
     * @returns { boolean } 返回字型是否可线性缩放的结果，true表示可线性缩放，false表示不可线性缩放。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isLinearMetrics(): boolean;

    /**
     * 获取字型在x轴方向上的倾斜度。
     *
     * @returns { double } 返回字型在x轴方向上的倾斜度。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getSkewX(): double;

    /**
     * 获取字型是否设置了粗体效果。
     *
     * @returns { boolean } 返回字型是否设置粗体效果的结果，true表示设置了粗体效果，false表示未设置粗体效果。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    isEmbolden(): boolean;

    /**
     * 获取字型在x轴方向上的缩放比例。
     *
     * @returns { double } 返回字型在x轴方向上的缩放比例。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    getScaleX(): double;

    /**
     * 获取字型轮廓效果。
     *
     * @returns { FontHinting } 返回字型轮廓效果。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    getHinting(): FontHinting;

    /**
     * Obtains the font hinting effect.
     *
     * @returns { FontHinting | undefined } Font hinting effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getHinting(): FontHinting | undefined;

    /**
     * 获取字型边缘效果。
     *
     * @returns { FontEdging } 返回字型边缘效果。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    getEdging(): FontEdging;

    /**
     * Obtains the font edging effect.
     *
     * @returns { FontEdging | undefined } Font edging effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getEdging(): FontEdging | undefined;

    /**
     * 获取指定字形的路径轮廓。
     *
     * @param { number } index - 字形索引。
     * @returns { Path } 返回指定字形的路径轮廓。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    createPathForGlyph(index: number): Path;

    /**
     * Obtains the outline path of a glyph.
     *
     * @param { int } index - Index of the glyph.
     * @returns { Path | undefined } Outline path of the glyph.
     *     Note: Path use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    createPathForGlyph(index: int): Path | undefined;

    /**
     * 获取字形数组中每个字形的边界矩形。
     *
     * @param { Array<number> } glyphs - 字形索引数组，可由
     *     [textToGlyphs]{@link drawing.Font#textToGlyphs(text: string, glyphCount?: number)}生成。
     * @returns { Array<common2D.Rect> } Array that holds the rectangular bounding boxes.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getBounds(glyphs: Array<number>): Array<common2D.Rect>;

    /**
     * Obtains the rectangular bounding box of each glyph in an array.
     *
     * @param { Array<int> } glyphs - Glyph array, which can be generated by textToGlyphs.
     * @returns { Array<common2D.Rect> | undefined } Array that holds the rectangular bounding boxes.
     *     Note: 1. Rect use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     *     <br>2. Rect use two points(left-bottom & right-top) to describe the bound.
     *     <br>3. The bound rect will be snap to integral boundaries.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getBounds(glyphs: Array<int>): Array<common2D.Rect> | undefined;

    /**
     * 获取文字的轮廓路径。
     *
     * @param { string } text - 表示存储UTF-8 文本编码的字符。
     * @param { number } byteLength - 表示要获取对应文本路径的字节长度，按传入的字节长度和实际的文本字节大小之间的最小值来获取对应的文本路径。
     * @param { number } x - 表示文本在绘图区域内以原点为起始位置的X坐标。
     * @param { number } y - 表示文本在绘图区域内以原点为起始位置的Y坐标。
     * @returns { Path } 返回获取到的文本的路径轮廓。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 18 dynamic
     */
    getTextPath(text: string, byteLength: number, x: number, y: number): Path;

    /**
     * Obtains the outline path of a text.
     *
     * @param { string } text - UTF-8 text-encoded characters.
     * @param { int } byteLength - Length of the outline path,
     *     which is obtained based on the minimum value between the passed value of byteLength and
     *     the actual text byte size.
     * @param { double } x - X coordinate of the text in the drawing area, with the origin as the start point.
     * @param { double } y - Y coordinate of the text in the drawing area, with the origin as the start point.
     * @returns { Path | undefined } Outline path of the text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getTextPath(text: string, byteLength: int, x: double, y: double): Path | undefined;

    /**
     * 设置字型中的字体是否跟随主题字体。设置跟随主题字体后，若系统启用主题字体并且字型未被设置字体，字型会使用该主题字体。
     *
     * @param { boolean } followed - 字型中的字体是否跟随主题字体，true表示跟随主题字体，false表示不跟随主题字体。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 15 dynamic
     * @since 23 static
     */
    setThemeFontFollowed(followed: boolean): void;

    /**
     * 获取字型中的字体是否跟随主题字体。默认不跟随。
     *
     * @returns { boolean } 返回字型中的字体是否跟随主题字体的结果，true表示跟随主题字体，false表示不跟随主题字体。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 15 dynamic
     * @since 23 static
     */
    isThemeFontFollowed(): boolean;
  }

  /**
   * 字体度量标志枚举，指示字体度量中的各字段数据是否有效。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  enum FontMetricsFlags {
    /**
     * 表示[FontMetrics]{@link @ohos.graphics.drawing:drawing.FontMetrics}结构中的underlineThickness（下划线厚度）字段有效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    UNDERLINE_THICKNESS_VALID = 1 << 0,

    /**
     * 表示[FontMetrics]{@link @ohos.graphics.drawing:drawing.FontMetrics}结构中的underlinePosition（下划线位置）字段有效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    UNDERLINE_POSITION_VALID = 1 << 1,

    /**
     * 表示[FontMetrics]{@link @ohos.graphics.drawing:drawing.FontMetrics}结构中strikethroughThickness（删除线厚度）是有效的。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    STRIKETHROUGH_THICKNESS_VALID = 1 << 2,

    /**
     * 表示[FontMetrics]{@link @ohos.graphics.drawing:drawing.FontMetrics}结构中strikethroughPosition（删除线位置）字段有效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    STRIKETHROUGH_POSITION_VALID = 1 << 3,

    /**
     * 表示[FontMetrics]{@link @ohos.graphics.drawing:drawing.FontMetrics}结构中的边界度量值（如top、bottom、xMin、xMax）无效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    BOUNDS_INVALID = 1 << 4
  }

  /**
   * 描述字形大小和布局的属性信息，同一种字体中的字符属性大致相同。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  interface FontMetrics {
    /**
     * 表明哪些字体度量标志有效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    flags?: FontMetricsFlags;

    /**
     * Font measurement flags that are valid.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 static
     */
    flags?: int;

    /**
     * 文字最高处到基线之间的最大距离，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    top: double;
    /**
     * 文字最高处到基线之间的距离，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    ascent: double;
    /**
     * 基线到文字最低处之间的距离，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    descent: double;
    /**
     * 基线到文字最低处之间的最大距离，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    bottom: double;
    /**
     * 行间距，从上一行文字descent到下一行文字ascent之间的距离，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    leading: double;
    /**
     * 平均字符宽度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    avgCharWidth?: double;

    /**
     * 最大字符宽度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    maxCharWidth?: double;

    /**
     * 字体中任意字形边界框最左边沿到原点的水平距离，这个值往往小于零，意味着字形在水平方向上的最小边界。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    xMin?: double;

    /**
     * 字体中任意字形边界框最右边沿到原点的水平距离，此值多为正数，指示了字形在水平方向上的最大延伸范围。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    xMax?: double;

    /**
     * 小写字母x的高度，通常为负值。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    xHeight?: double;

    /**
     * 大写字母的高度，通常为负值。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    capHeight?: double;

    /**
     * 下划线的厚度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    underlineThickness?: double;

    /**
     * 文本基线到下划线顶部的垂直距离，通常是正数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    underlinePosition?: double;

    /**
     * 文本删除线的厚度，即贯穿文本字符的水平线的宽度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    strikethroughThickness?: double;

    /**
     * 文本基线到底部删除线的垂直距离，通常为负值。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    strikethroughPosition?: double;
  }

  /**
   * 矩形网格对象。该对象用于将图片按照矩形网格进行划分。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class Lattice {
    /**
     * 创建矩形网格对象。将图像划分为矩形网格，同时处于偶数列和偶数行上的网格是固定的，如果目标网格足够大，则这些固定网格以其原始大小进行绘制。如果目标网格太小，无法容纳这些固定网格，则所有固定网格都会按比例缩小以适应目标网格。其余网
     * 格将进行缩放，来适应剩余的空间。
     *
     * @param { Array<number> } xDivs - 用于划分图像的X坐标值数组。该参数为整数。
     * @param { Array<number> } yDivs - 用于划分图像的Y坐标值数组。该参数为整数。
     * @param { number } fXCount - X坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。
     * @param { number } fYCount - Y坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。
     * @param { common2D.Rect | null } [fBounds] - 可选，要绘制的原始边界矩形，矩形参数须为整数，默认为原始图像矩形大小（若矩形参数为小数，会直接舍弃小数部分，转为整数）。
     * @param { Array<RectType> | null } [fRectTypes] - 可选，填充网格类型的数组，默认为空。如果设置，大小必须为(fXCount + 1) * (fYCount + 1)。
     * @param { Array<common2D.Color> | null } [fColors] - 可选，填充网格的颜色数组，默认为空。如果设置，大小必须为(fXCount + 1) * (fYCount + 1)。
     * @returns { Lattice } 返回创建的矩形网格对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice;

    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     *
     * @param { Array<int> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<int> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { int } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { int } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal,
     *     the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<common2D.Color> | null } [fColors] - Array that holds the colors used to fill the lattices.
     *     The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice | undefined } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createImageLattice(xDivs: Array<int>, yDivs: Array<int>, fXCount: int, fYCount: int,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice | undefined;

    /**
     * 创建矩形网格对象。将图像划分为矩形网格，同时处于偶数列和偶数行上的网格是固定的，如果目标网格足够大，则这些固定网格以其原始大小进行绘制。如果目标网格太小，无法容纳这些固定网格，则所有固定网格都会按比例缩小以适应目标网格。其余网
     * 格将进行缩放，来适应剩余的空间。
     *
     * @param { Array<number> } xDivs - 用于划分图像的X坐标值数组。该参数为整数。
     * @param { Array<number> } yDivs - 用于划分图像的Y坐标值数组。该参数为整数。
     * @param { number } fXCount - X坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。
     * @param { number } fYCount - Y坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。
     * @param { common2D.Rect | null } [fBounds] - 可选，要绘制的原始边界矩形，矩形参数须为整数，默认为原始图像矩形大小（若矩形参数为小数，会直接舍弃小数部分，转为整数）。
     * @param { Array<RectType> | null } [fRectTypes] - 可选，填充网格类型的数组，默认为空。如果设置，大小必须为(fXCount + 1) * (fYCount + 1)。
     * @param { Array<number> | null } [fColors] - 可选，填充网格的颜色数组，颜色用16进制ARGB格式的32位无符号整数表示，参数默认为空。如果设置，大小必须为(fXCount + 1)
     *     * (fYCount + 1)。
     * @returns { Lattice } 返回创建的矩形网格对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<number> | null): Lattice;

    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     *
     * @param { Array<int> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<int> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { int } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { int } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal,
     *     the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<int> | null } [fColors] - Array that holds the colors used to fill the lattices.
     *     Each color is represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     *     The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice | undefined } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 23 static
     */
    static createImageLatticeWithArrayInt(xDivs: Array<int>, yDivs: Array<int>, fXCount: int, fYCount: int,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<int> | null): Lattice | undefined;
  }

  /**
   * 定义填充网格的矩形类型的枚举。仅在[Lattice]{@link @ohos.graphics.drawing:drawing}中使用。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectType {
    /**
     * 将图像绘制到矩形网格中。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 将矩形网格设置为透明的。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    TRANSPARENT = 1,

    /**
     * 将[Lattice]{@link @ohos.graphics.drawing:drawing}中fColors数组的颜色绘制到矩形网格中。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FIXEDCOLOR = 2
  }

  /**
   * 蒙版滤镜对象。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class MaskFilter {
    /**
     * 创建具有模糊效果的蒙版滤镜。
     *
     * @param { BlurType } blurType - 模糊类型。
     * @param { number } sigma - 高斯模糊的标准偏差，必须为大于0的浮点数。
     * @returns { MaskFilter } 返回创建的蒙版滤镜对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createBlurMaskFilter(blurType: BlurType, sigma: number): MaskFilter;

    /**
     * Creates a mask filter with a blur effect.
     *
     * @param { BlurType } blurType - Blur type.
     * @param { double } sigma - Standard deviation of the Gaussian blur to apply.
     *     The value must be a floating point number greater than 0.
     * @returns { MaskFilter | undefined } MaskFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createBlurMaskFilter(blurType: BlurType, sigma: double): MaskFilter | undefined;
  }

  /**
   * 路径效果的绘制样式枚举。
   * | 名称   | 值 | 说明               |
   * | ------ | - | ------------------ |
   * | TRANSLATE | 0 | 不会随着路径旋转，只会平移。 |
   * | ROTATE  | 1 | 随着路径的旋转而旋转。 |
   * | MORPH  | 2 | 随着路径的旋转而旋转，并在转折处进行拉伸或压缩等操作以增加平滑度。 |
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 18 dynamic
   * @since 23 static
   */
  enum PathDashStyle {
    /**
     * Translates only, not rotating with the path.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSLATE = 0,
    /**
     * Rotates with the path.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    ROTATE = 1,
    /**
     * Rotates with the path and stretches or compresses at turns to enhance smoothness.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    MORPH = 2
  }

  /**
   * 路径效果对象。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class PathEffect {
    /**
     * 创建将路径变为虚线的路径效果对象。
     *
     * @param { Array<number> } intervals - 表示虚线的ON（实线部分）和OFF（空白部分）长度的数组，数组个数必须是偶数，且>=2，该参数为正整数。
     * @param { number } phase - 绘制时的偏移量，该参数为浮点数。
     * @returns { PathEffect } 返回创建的路径效果对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createDashPathEffect(intervals: Array<number>, phase: number): PathEffect;

    /**
     * Creates a PathEffect object that converts a path into a dotted line.
     *
     * @param { Array<double> } intervals - Array of ON and OFF lengths of dotted lines.
     *     The number of arrays must be an even number and be greater than or equal to 2.
     * @param { double } phase - Offset used during drawing. The value is a floating point number.
     * @returns { PathEffect | undefined } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createDashPathEffect(intervals: Array<double>, phase: double): PathEffect | undefined;

    /**
     * 创建将路径的夹角变成指定半径的圆角的路径效果对象。
     *
     * @param { number } radius - 圆角的半径，必须大于0，该参数为浮点数。
     * @returns { PathEffect } 返回创建的路径效果对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createCornerPathEffect(radius: number): PathEffect;

    /**
     * Creates a path effect that transforms the sharp angle between line segments
     * into a rounded corner with the specified radius.
     *
     * @param { double } radius - Radius of the rounded corner.
     *     The value must be greater than 0. The value is a floating point number.
     * @returns { PathEffect | undefined } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createCornerPathEffect(radius: double): PathEffect | undefined;

    /**
     * 创建一种将路径打散，并且在路径上产生不规则分布的效果。
     *
     * @param { number } segLength - 路径中每进行一次打散操作的长度，该长度为浮点数，负数和0时无效果。
     * @param { number } dev - 绘制时的末端点的最大移动偏离量，该偏移量为浮点数。
     * @param { number } [seedAssist] - 生成效果伪随机种子辅助变量，默认值为0，该参数为32位无符号整数。
     * @returns { PathEffect } 返回创建的路径效果对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createDiscretePathEffect(segLength: number, dev: number, seedAssist?: number): PathEffect;

    /**
     * Creates an effect that segments the path and scatters the segments in an irregular pattern along the path.
     *
     * @param { double } segLength - Distance along the path at which each segment is fragmented.
     *     The value is a floating point number.
     *     If a negative number or the value 0 is passed in, no effect is created.
     * @param { double } dev - Maximum amount by which the end points of the segments can be
     *     randomly displaced during rendering. The value is a floating-point number.
     * @param { int } [seedAssist] - Optional parameter to assist in generating a pseudo-random seed for the effect.
     *     The default value is 0, and the value is a 32-bit unsigned integer.
     * @returns { PathEffect | undefined } PathEffect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createDiscretePathEffect(segLength: double, dev: double, seedAssist?: int): PathEffect | undefined;

    /**
     * 创建路径组合的路径效果对象，首先应用内部路径效果，然后应用外部路径效果。
     *
     * @param { PathEffect } outer - 组合路径效果中外部路径效果。
     * @param { PathEffect } inner - 组合路径效果中内部路径效果。
     * @returns { PathEffect } 返回创建的路径效果对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect;

    /**
     * Creates a path effect by sequentially applying the inner effect and then the outer effect.
     *
     * @param { PathEffect } outer - Path effect that is applied second, overlaying the first effect.
     * @param { PathEffect } inner - Inner path effect that is applied first.
     * @returns { PathEffect | undefined } PathEffect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect | undefined;

    /**
     * 通过路径描述的形状创建一个虚线路径效果。
     *
     * @param { Path } path - 通过该路径生成一个图形，用来填充每个虚线段。
     * @param { number } advance - 虚线段的步长，该参数为大于0的浮点数，否则会抛错误码。
     * @param { number } phase - 表示虚线段内图形在虚线步长范围内的偏移量，该参数为浮点数，效果为先对偏移量取绝对值，然后对步长取模。
     * @param { PathDashStyle } style - 指定虚线效果的样式。
     * @returns { PathEffect } 返回创建的路径效果对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createPathDashEffect(path: Path, advance: number, phase: number, style: PathDashStyle): PathEffect;

    /**
     * Creates a dashed path effect based on the shape described by a path.
     *
     * @param { Path } path - Path that defines the shape to be used for filling each dash in the pattern.
     * @param { double } advance - Distance between two consecutive dashes.
     *     The value is a floating point number greater than 0.
     *     Otherwise, an error code is thrown.
     * @param { double } phase - Starting offset of the dash pattern. The value is a floating point number.
     *     The actual offset used is the absolute value of this value modulo the value of advance.
     * @param { PathDashStyle } style - Style of the dashed path effect.
     * @returns { PathEffect | undefined } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createPathDashEffect(path: Path, advance: double, phase: double, style: PathDashStyle): PathEffect | undefined;

    /**
     * 创建一个叠加的路径效果。与createComposePathEffect不同，此接口会分别对两个参数的效果各自独立进行表现，然后将两个效果简单重叠显示。
     *
     * @param { PathEffect } firstPathEffect - 表示第一个路径效果。
     * @param { PathEffect } secondPathEffect - 表示第二个路径效果。
     * @returns { PathEffect } 返回创建的路径效果对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect;

    /**
     * Creates an overlay path effect based on two distinct path effects.
     * Different from createComposePathEffect,
     * this API applies each effect separately and then displays them as a simple overlay.
     *
     * @param { PathEffect } firstPathEffect - First path effect.
     * @param { PathEffect } secondPathEffect - Second path effect.
     * @returns { PathEffect | undefined } PathEffect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect | undefined;
  }

  /**
   * 着色器。画刷和画笔设置着色器后，会使用着色器效果而不是颜色属性去绘制，但此时画笔和画刷的透明度属性仍然生效。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class ShaderEffect {
    /**
     * 创建具有单一颜色的着色器。
     *
     * @param { number } color - 表示着色器的ARGB格式颜色，该参数为32位无符号整数。
     * @returns { ShaderEffect } 返回具有单一颜色的着色器对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createColorShader(color: number): ShaderEffect;

    /**
     * Creates a ShaderEffect object with a single color.
     *
     * @param { int } color - Color in the ARGB format. The value is a 32-bit unsigned integer.
     * @returns { ShaderEffect | undefined } Returns the shader with single color ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createColorShader(color: int): ShaderEffect | undefined;

    /**
     * 创建着色器，在两个指定点之间生成线性渐变。
     *
     * @param { common2D.Point } startPt - 表示渐变的起点。
     * @param { common2D.Point } endPt - 表示渐变的终点。
     * @param { Array<int> } colors - 表示在两个点之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。
     * @param { TileMode } mode - 着色器效果平铺模式。
     * @param { Array<double> | null } [pos] - 表示每种对应颜色在颜色数组中的相对位置。数组长度需和colors保持一致，数组的首个元素应当是0.0，末尾元素应当是1.0，中间的元素应当在0与1
     *     之间并且逐下标递增，表示colors中每个对应颜色的相对位置。默认为null，表示颜色均匀分布在起点和终点之间。
     * @param { Matrix | null } [matrix] - 矩阵对象，用于对着色器做矩阵变换。默认为null，表示单位矩阵。
     * @returns { ShaderEffect } 返回创建的着色器对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<int>,
        mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a linear gradient between two points.
     *
     * @param { common2D.Point } startPt - Start point.
     * @param { common2D.Point } endPt - End point.
     * @param { Array<int> } colors - Array of colors to distribute between the two points.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0, and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two points.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a linear gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<int>,
        mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * 创建着色器，使用给定的圆心和半径生成径向渐变。径向渐变是指颜色从圆心逐渐向外扩散形成的渐变。
     *
     * @param { common2D.Point } centerPt - 表示渐变的圆心。
     * @param { double } radius - 表示渐变的半径，小于等于0时无效，该参数为浮点数。
     * @param { Array<int> } colors - 表示在圆心和圆边界之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。
     * @param { TileMode } mode - 着色器效果平铺模式。
     * @param { Array<double> | null } [pos] - 表示每种对应颜色在颜色数组中的相对位置。数组长度需和colors保持一致，数组的首个元素应当是0.0，末尾元素应当是1.0，中间的元素应当在0与1
     *     之间并且逐下标递增，表示colors中每个对应颜色的相对位置。默认为null，表示颜色均匀分布在圆心和圆边界之间。
     * @param { Matrix | null } [matrix] - 矩阵对象，用于对着色器做矩阵变换。默认为null，表示单位矩阵。
     * @returns { ShaderEffect } 返回创建的着色器对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createRadialGradient(centerPt: common2D.Point, radius: double, colors: Array<int>,
      mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a radial gradient based on the center and radius of a circle.
     * A radial gradient refers to the color transition that spreads out gradually from the center of a circle.
     *
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { double } radius - Radius of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { Array<int> } colors - Array of colors to distribute between the center
     *     and ending shape of the circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between
     *     the center and ending shape of the circle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a radial gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createRadialGradient(centerPt: common2D.Point, radius: double, colors: Array<int>,
      mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * 创建着色器。该着色器以给定中心点为圆心，在顺时针或逆时针方向上生成颜色扫描渐变。
     *
     * @param { common2D.Point } centerPt - 表示渐变的圆心。
     * @param { Array<number> } colors - 表示在起始角度和结束角度之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。
     * @param { TileMode } mode - 着色器效果平铺模式。
     * @param { number } startAngle - 表示扇形渐变的起始角度，单位为度。0度时为x轴正方向，正数往顺时针方向偏移，负数往逆时针方向偏移。该参数为浮点数。
     * @param { number } endAngle - 表示扇形渐变的结束角度，单位为度。0度时为x轴正方向，正数往顺时针方向偏移，负数往逆时针方向偏移。小于起始角度时无效。该参数为浮点数。
     * @param { Array<number> | null } [pos] - 表示每种对应颜色在颜色数组中的相对位置。数组长度需和colors保持一致，数组的首个元素应当是0.0，末尾元素应当是1.0，中间的元素应当在0与1
     *     之间并且逐下标递增，表示colors中每个对应颜色的相对位置。默认为null，表示颜色均匀分布在起始角度和结束角度之间。
     * @param { Matrix | null } [matrix] - 矩阵对象，用于对着色器做矩阵变换。默认为null，表示单位矩阵。
     * @returns { ShaderEffect } 返回创建的着色器对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createSweepGradient(centerPt: common2D.Point, colors: Array<number>,
        mode: TileMode, startAngle: number, endAngle: number, pos?: Array<number> | null,
        matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a color sweep gradient around a given center point,
     * either in a clockwise or counterclockwise direction.
     *
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { Array<int> } colors - Array of colors to distribute between the start angle and end angle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { double } startAngle - Start angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     The value is a floating point number.
     * @param { double } endAngle - End angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     A value less than the start angle is invalid.
     *     The value is a floating point number.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that the colors are evenly distributed between
     *     the start angle and end angle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a sweep gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createSweepGradient(centerPt: common2D.Point, colors: Array<int>,
      mode: TileMode, startAngle: double, endAngle: double, pos?: Array<double> | null,
      matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * 创建着色器，在给定两个圆之间生成径向渐变。
     *
     * @param { common2D.Point } startPt - 表示渐变的起始圆的圆心。
     * @param { number } startRadius - 表示渐变的起始圆的半径，小于0时无效。该参数为浮点数。
     * @param { common2D.Point } endPt - 表示渐变的结束圆的圆心。
     * @param { number } endRadius - 表示渐变的结束圆的半径，小于0时无效。该参数为浮点数。
     * @param { Array<number> } colors - 表示在起始圆和结束圆之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。
     * @param { TileMode } mode - 着色器效果平铺模式。
     * @param { Array<number> | null } [pos] - 表示每种对应颜色在颜色数组中的相对位置。数组长度需和colors保持一致，数组的首个元素应当是0.0，末尾元素应当是1.0，中间的元素应当在0与1
     *     之间并且逐下标递增，表示colors中每个对应颜色的相对位置。默认为null，表示颜色均匀分布在起始圆和结束圆之间。
     * @param { Matrix | null } [matrix] - 矩阵对象，用于对着色器做矩阵变换。默认为null，表示单位矩阵。
     * @returns { ShaderEffect } 返回创建的着色器对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createConicalGradient(startPt: common2D.Point, startRadius: number, endPt: common2D.Point,
        endRadius: number, colors: Array<number>, mode: TileMode,
        pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a conical gradient between two given circles.
     *
     * @param { common2D.Point } startPt - Center of the start circle of the gradient.
     * @param { double } startRadius - Radius of the start circle of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { common2D.Point } endPt - Center of the end circle of the gradient.
     * @param { double } endRadius - Radius of the end circle of the gradient. A negative value is invalid.
     *     The value is a floating point number.
     * @param { Array<int> } colors - Array of colors to distribute between the start circle and end circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two circles.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a conical gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createConicalGradient(startPt: common2D.Point, startRadius: double, endPt: common2D.Point,
        endRadius: double, colors: Array<int>, mode: TileMode,
        pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * 基于图片创建一个着色器。此接口不建议用于录制类型的画布，会影响性能。
     *
     * @param { image.PixelMap } pixelmap - 进行采样的图片对象。
     * @param { TileMode } tileX - 水平方向的平铺模式。
     * @param { TileMode } tileY - 竖直方向的平铺模式。
     * @param { SamplingOptions } samplingOptions - 图片采样参数。
     * @param { Matrix | null } [matrix] - 可选参数，对图片施加的矩阵变换，如果为空，则不施加任何变换。
     * @returns { ShaderEffect } 返回创建的着色器对象。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createImageShader(pixelmap: image.PixelMap, tileX: TileMode, tileY: TileMode,
        samplingOptions: SamplingOptions, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates an ShaderEffect object that generates a shader with single image.
     *
     * @param { image.PixelMap } pixelmap - PixelMap.
     * @param { TileMode } tileX - Indicates the type of tile mode for horizontal shader effect.
     * @param { TileMode } tileY - Indicates the type of tile mode for vertical shader effect.
     * @param { SamplingOptions } samplingOptions - SamplingOptions used to describe the sampling mode.
     * @param { Matrix | null } [matrix] - Indicates the Matrix object. The default value is null.
     * @returns { ShaderEffect | undefined } Returns the shader with single image ShaderEffect object.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createImageShader(pixelmap: image.PixelMap, tileX: TileMode, tileY: TileMode,
        samplingOptions: SamplingOptions, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * 按照指定的混合模式对两个着色器进行叠加，生成一个新的着色器。
     *
     * @param { ShaderEffect } dstShaderEffect - 在混合模式中作为目标色的着色器。
     * @param { ShaderEffect } srcShaderEffect - 在混合模式中作为源色的着色器。
     * @param { BlendMode } blendMode - 混合模式。
     * @returns { ShaderEffect } 返回创建的着色器对象。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createComposeShader(dstShaderEffect: ShaderEffect, srcShaderEffect: ShaderEffect,
        blendMode: BlendMode): ShaderEffect;

    /**
     * Creates an ShaderEffect object that generates a blend ShaderEffect object by two shaders.
     *
     * @param { ShaderEffect } dstShaderEffect - Indicates a destination ShaderEffect pointer.
     * @param { ShaderEffect } srcShaderEffect - Indicates a source ShaderEffect pointer.
     * @param { BlendMode } blendMode - BlendMode.
     * @returns { ShaderEffect | undefined } Returns a blend ShaderEffect object.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createComposeShader(dstShaderEffect: ShaderEffect, srcShaderEffect: ShaderEffect,
        blendMode: BlendMode): ShaderEffect | undefined;
  }

  /**
   * 着色器效果平铺模式的枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum TileMode {
    /**
     * 如果着色器效果超出其原始边界，剩余区域使用着色器的边缘颜色填充。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    CLAMP = 0,

    /**
     * 在水平和垂直方向上重复着色器效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    REPEAT = 1,

    /**
     * 在水平和垂直方向上重复着色器效果，交替镜像图像，以便相邻图像始终接合。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * 仅在其原始边界内渲染着色器效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DECAL = 3
  }

  /**
   * 阴影层对象。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class ShadowLayer {
    /**
     * 创建阴影层对象。
     *
     * @param { number } blurRadius - 阴影的半径，必须为大于零的浮点数。
     * @param { number } x - x轴上的偏移点，该参数为浮点数。
     * @param { number } y - Y轴上的偏移点，该参数为浮点数。
     * @param { common2D.Color } color - ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。
     * @returns { ShadowLayer } 返回创建的阴影层对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static create(blurRadius: number, x: number, y: number, color: common2D.Color): ShadowLayer;

    /**
     * Creates a ShadowLayer object.
     *
     * @param { double } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { double } x - Offset on the X axis. The value is a floating point number.
     * @param { double } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @returns { ShadowLayer | undefined } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static create(blurRadius: double, x: double, y: double, color: common2D.Color): ShadowLayer | undefined;

    /**
     * 创建阴影层对象。
     *
     * @param { number } blurRadius - 阴影的半径，必须为大于零的浮点数。
     * @param { number } x - x轴上的偏移点，该参数为浮点数。
     * @param { number } y - Y轴上的偏移点，该参数为浮点数。
     * @param { common2D.Color | number } color - 颜色，可以用16进制ARGB格式的无符号整数表示。
     * @returns { ShadowLayer } 返回创建的阴影层对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static create(blurRadius: number, x: number, y: number, color: common2D.Color | number): ShadowLayer;

    /**
     * Creates a ShadowLayer object.
     *
     * @param { double } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { double } x - Offset on the X axis. The value is a floating point number.
     * @param { double } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @returns { ShadowLayer | undefined } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static create(blurRadius: double, x: double, y: double, color: common2D.Color | int): ShadowLayer | undefined;
  }

  /**
   * 颜色滤波器。
   * 
   * > **说明：**
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  class ColorFilter {
    /**
     * 创建指定的颜色和混合模式的颜色滤波器。
     *
     * @param { common2D.Color } color - ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。
     * @param { BlendMode } mode - 颜色的混合模式。
     * @returns { ColorFilter } 返回颜色滤波器。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter;

    /**
     * Creates a ColorFilter object with a given color and blend mode.
     *
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter | undefined;

    /**
     * 使用指定的颜色和混合模式创建颜色滤波器。
     *
     * @param { common2D.Color | number } color - 颜色，可以用16进制ARGB格式的无符号整数表示。
     * @param { BlendMode } mode - 颜色的混合模式。
     * @returns { ColorFilter } 返回颜色滤波器。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     */
    static createBlendModeColorFilter(color: common2D.Color | number, mode: BlendMode): ColorFilter;

    /**
     * Creates a ColorFilter object with a given color and blend mode.
     *
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createBlendModeColorFilter(color: common2D.Color | int, mode: BlendMode): ColorFilter | undefined;

    /**
     * 创建一个先应用inner进行滤波，再应用outer进行滤波的组合颜色滤波器。
     *
     * @param { ColorFilter } outer - 组合滤波器中后生效的颜色滤波器。
     * @param { ColorFilter } inner - 组合滤波器中先生效的颜色滤波器。
     * @returns { ColorFilter } 返回颜色滤波器。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter;

    /**
     * Creates a ColorFilter object by combining another two color filters.
     *
     * @param { ColorFilter } outer - Color filter that takes effect later in the new filter.
     * @param { ColorFilter } inner - Color filter that takes effect first in the new filter.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter | undefined;

    /**
     * 创建一个从线性颜色空间转换到SRGB颜色空间的颜色滤波器。
     *
     * @returns { ColorFilter } 返回颜色滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createLinearToSRGBGamma(): ColorFilter;

    /**
     * Creates a ColorFilter object that applies the sRGB gamma curve to the RGB channels.
     *
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createLinearToSRGBGamma(): ColorFilter | undefined;

    /**
     * 创建一个从SRGB颜色空间转换到线性颜色空间的颜色滤波器。
     *
     * @returns { ColorFilter } 返回颜色滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createSRGBGammaToLinear(): ColorFilter;

    /**
     * Creates a ColorFilter object that applies the RGB channels to the sRGB gamma curve.
     *
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createSRGBGammaToLinear(): ColorFilter | undefined;

    /**
     * 创建一个颜色滤波器将其输入的亮度值乘以透明度通道，并将红色、绿色和蓝色通道设置为零。
     *
     * @returns { ColorFilter } 返回颜色滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     */
    static createLumaColorFilter(): ColorFilter;

    /**
     * Creates a ColorFilter object that multiplies the luma into the alpha channel and sets the RGB channels to zero.
     *
     * @returns { ColorFilter | undefined } Colorfilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createLumaColorFilter(): ColorFilter | undefined;

    /**
     * 创建颜色滤波器，通过4x5颜色矩阵变换颜色。
     *
     * @param { Array<double> } matrix - 长度为20的数组，表示用于颜色变换的4*5矩阵。
     * @returns { ColorFilter } 返回颜色滤波器。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createMatrixColorFilter(matrix: Array<double>): ColorFilter;

    /**
     * Creates a color filter object with a 4*5 color matrix.
     *
     * @param { Array<double> } matrix - An array of 20 numbers, indicating the 4*5 matrix.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createMatrixColorFilter(matrix: Array<double>): ColorFilter | undefined;

    /**
     * 创建一个光照颜色滤波器，此滤波器会将RGB通道的颜色值乘以一种颜色值并加上另一种颜色值，计算结果会被限制在0到255范围内。
     *
     * @param { common2D.Color | number } mutColor - 用来进行乘法运算的颜色，ARGB格式的颜色，每个颜色通道是0到255之间的整数。为number类型时必须是16进制ARGB格式的无符号
     *     整数。
     * @param { common2D.Color | number } addColor - 用来进行加法运算的颜色，ARGB格式的颜色，每个颜色通道是0到255之间的整数。为number类型时必须是16进制ARGB格式的无符号
     *     整数。
     * @returns { ColorFilter } 返回一个颜色滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createLightingColorFilter(mutColor: common2D.Color | number, addColor: common2D.Color | number): ColorFilter;

    /**
     * Makes a color filter with the given mutColor and addColor.
     *
     * @param { common2D.Color | int } mutColor - The range of color channels must be [0, 255],
     *     used to multiply source color.
     * @param { common2D.Color | int } addColor - The range of color channels must be [0, 255],
     *     used to add to source color.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createLightingColorFilter(mutColor: common2D.Color | int, addColor: common2D.Color | int): ColorFilter | undefined;

  }

  /**
   * 图像滤波器。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class ImageFilter {
    /**
     * 创建具有模糊效果的图像滤波器。
     *
     * @param { number } sigmaX - 表示沿x轴方向上高斯模糊的标准差，必须大于0，该参数为浮点数。
     * @param { number } sigmaY - 表示沿y轴方向上高斯模糊的标准差，必须大于0，该参数为浮点数。
     * @param { TileMode } tileMode - 表示在边缘处应用的平铺模式。
     * @param { ImageFilter | null } [imageFilter] - 要与当前图像滤波器叠加的输入滤波器，默认为null，表示直接将当前图像滤波器作用于原始图像。
     * @returns { ImageFilter } 返回创建的图像滤波器。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createBlurImageFilter(sigmaX: number, sigmaY: number,
        tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter;

    /**
     * Creates an image filter with a given blur effect.
     *
     * @param { double } sigmaX - Standard deviation of the Gaussian blur along the X axis.
     *     The value must be a floating point number greater than 0.
     * @param { double } sigmaY - Standard deviation of the Gaussian blur along the Y axis.
     *     The value must be a floating point number greater than 0.
     * @param { TileMode } tileMode - Tile mode to apply to the edges.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied.
     *     The default value is null, indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createBlurImageFilter(sigmaX: double, sigmaY: double,
        tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter | undefined;

    /**
     * 创建一个将颜色滤波器应用于传入的图像滤波器的图像滤波器。
     *
     * @param { ColorFilter } colorFilter - 表示颜色滤波器。
     * @param { ImageFilter | null } imageFilter - 要与当前图像滤波器叠加的输入滤波器，默认为null，表示直接将当前图像滤波器作用于原始图像。 [since 12 - 19]
     * @param { ImageFilter | null } [imageFilter] - 要与当前图像滤波器叠加的输入滤波器，默认为null，表示直接将当前图像滤波器作用于原始图像。 [since 20]
     * @returns { ImageFilter } 返回创建的图像滤波器。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter;

    /**
     * Creates an image filter object with a given color filter effect.
     *
     * @param { ColorFilter } colorFilter - Color filter.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied.
     *     The default value is null, indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter | undefined;

    /**
     * 创建一个偏移滤波器，将输入的滤波器按照指定向量进行平移。
     *
     * @param { number } dx - 水平方向的平移距离， 该参数为浮点数。
     * @param { number } dy - 竖直方向的平移距离， 该参数为浮点数。
     * @param { ImageFilter | null } [input] - 需进行平移的滤波器。默认为空，如果为空，则将无滤波效果的绘制结果进行平移。
     * @returns { ImageFilter } 返回创建的图像滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createOffsetImageFilter(dx: number, dy: number, input?: ImageFilter | null): ImageFilter;

    /**
     * Makes an ImageFilter object that instance with the provided x and y offset.
     *
     * @param { double } dx - Indicates the offset in the X direction.
     * @param { double } dy - Indicates the offset in the Y direction.
     * @param { ImageFilter | null } [input] - Indicates the input image filter used to generate offset effects, or uses
     *     the source bitmap if this is null.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createOffsetImageFilter(dx: double, dy: double, input?: ImageFilter | null): ImageFilter | undefined;

    /**
     * 基于给定的图像创建一个图像滤波器。此接口不建议用于录制类型的画布，会影响性能。
     *
     * @param { image.PixelMap } pixelmap - 图片对象。
     * @param { common2D.Rect | null } [srcRect] - 可选参数，默认为空。图片要被此滤波器使用的像素区域，如果为空，则使用pixelmap全部区域。
     * @param { common2D.Rect | null } [dstRect] - 可选参数，默认为空。要进行渲染的区域，如果为空，则和srcRect保持一致。
     * @returns { ImageFilter } 返回创建的图像滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createFromImage(pixelmap: image.PixelMap, srcRect?: common2D.Rect | null, dstRect?: common2D.Rect | null): ImageFilter;

    /**
     * Makes an ImageFilter object that applies the bitmap to the input.
     *
     * @param { image.PixelMap } pixelmap - The source input image.
     * @param { common2D.Rect | null } [srcRect] - Indicates the input srcRect, or uses the source bitmap if this is
     *     null.
     * @param { common2D.Rect | null } [dstRect] - Indicates the input dstRect, or uses the source bitmap if this is
     *     null.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createFromImage(pixelmap: image.PixelMap, srcRect?: common2D.Rect | null, dstRect?: common2D.Rect | null): ImageFilter | undefined;

    /**
     * 按照指定的混合模式对两个滤波器进行叠加，生成一个新的滤波器。
     *
     * @param { BlendMode } mode - 颜色混合模式。
     * @param { ImageFilter } background - 在混合模式中作为目标色的滤波器。
     * @param { ImageFilter } foreground - 在混合模式中作为源色的滤波器。
     * @returns { ImageFilter } 返回创建的图像滤波器。
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createBlendImageFilter(mode: BlendMode, background: ImageFilter, foreground: ImageFilter): ImageFilter;

    /**
     * Makes an ImageFilter object that applies the blend to the input.
     *
     * @param { BlendMode } mode - Blendmode.
     * @param { ImageFilter } background - Indicates the input background filter.
     * @param { ImageFilter } foreground - Indicates the input foreground filter.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createBlendImageFilter(mode: BlendMode, background: ImageFilter, foreground: ImageFilter): ImageFilter | undefined;

    /**
     * 将两个图像滤波器进行级联生成新的图像滤波器，级联时会将第一级滤波器的输出作为第二级滤波器的输入，经过第二级滤波器处理后，输出最终的滤波结果。
     *
     * @param { ImageFilter } cOuter - 在级联中，作为第二级的滤波器，处理第一级滤波器的输出。如果第二级滤波器为空，第一级滤波器不为空，最后输出第一级滤波器的结果。两级滤波器不能同时为空。
     * @param { ImageFilter } cInner - 在级联中，作为第一级的滤波器，直接处理图像的原始内容。如果第一级滤波器为空，第二级滤波器不为空，最后输出第二级滤波器的结果。两级滤波器不能同时为空。
     * @returns { ImageFilter } 返回创建的图像滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createComposeImageFilter(cOuter: ImageFilter, cInner: ImageFilter): ImageFilter;

    /**
     * Makes an ImageFilter object that combines the "inner" and "outer" filters, allowing the output of the "inner"
     * filter to serve as the input source bitmap for the "outer" filter.
     *
     * @param { ImageFilter } cOuter - Indicates the instance to apply its effects to the output of the 'inner'
     *     filter.
     * @param { ImageFilter } cInner - Indicates the output as input for "outer" filters.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createComposeImageFilter(cOuter: ImageFilter, cInner: ImageFilter): ImageFilter | undefined;

    /**
     * 基于着色器创建一个图像滤波器。
     *
     * @param { ShaderEffect } shader - 表示应用于图像的着色器效果。
     * @returns { ImageFilter } 返回创建的图像滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createFromShaderEffect(shader: ShaderEffect): ImageFilter;

    /**
     * Makes an ImageFilter object that renders the contents of the input Shader.
     *
     * @param { ShaderEffect } shader - Indicates the shader effect to be applied to the image.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static createFromShaderEffect(shader: ShaderEffect): ImageFilter | undefined;
  }
  /**
   * 定义线条转角样式的枚举，即画笔在绘制折线段时，在折线转角处的样式。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum JoinStyle {
    /**
     * 转角类型为尖角，如果折线角度比较小，则尖角会很长，需要使用限制值（miter limit）进行限制。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    MITER_JOIN = 0,

    /**
     * 转角类型为圆头。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    ROUND_JOIN = 1,

    /**
     * 转角类型为平头。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    BEVEL_JOIN = 2
  }

  /**
   * 定义线帽样式的枚举，即画笔在绘制线段时，在线段头尾端点的样式。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum CapStyle {
    /**
     * 没有线帽样式，线条头尾端点处横切。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FLAT_CAP = 0,

    /**
     * 线帽的样式为方框，线条的头尾端点处多出一个方框，方框宽度和线段一样宽，高度是线段宽度的一半。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    SQUARE_CAP = 1,

    /**
     * 线帽的样式为圆弧，线条的头尾端点处多出一个半圆弧，半圆的直径与线段宽度一致。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    ROUND_CAP = 2
  }

  /**
   * 定义蒙版滤镜模糊中操作类型的枚举。
   * | 名称   | 值 | 说明               | 示意图   |
   * | ------ | - | ------------------ | -------- |
   * | NORMAL | 0 | 全面模糊，外圈边缘和内部实体一起模糊。 | ![NORMAL](figures/zh-ch_image_BlueType_Normal.png) |
   * | SOLID  | 1 | 内部实体不变，只模糊外圈边缘部分。 | ![SOLID](figures/zh-ch_image_BlueType_Solid.png) |
   * | OUTER  | 2 | 只有外圈边缘模糊，内部实体完全透明。 | ![OUTER](figures/zh-ch_image_BlueType_Outer.png) |
   * | INNER  | 3 | 只有内部实体模糊，外圈边缘清晰。 | ![INNER](figures/zh-ch_image_BlueType_Inner.png) |
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum BlurType {
    /**
     * Both the outer edges and the inner solid parts are blurred.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    NORMAL = 0,

    /**
     * The inner solid part remains unchanged, while only the outer edges are blurred.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    SOLID = 1,

    /**
     * Only the outer edges are blurred, with the inner solid part being fully transparent.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    OUTER = 2,

    /**
     * Only the inner solid part is blurred, while the outer edges remain sharp.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INNER = 3
  }

  /**
   * 画笔对象，描述所绘制图形形状的轮廓信息。
   * 
   * > **说明：**
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  class Pen {
    /**
     * 构造一个新的画笔对象。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 复制构造一个新的画笔对象。
     *
     * @param { Pen } pen - 待复制的画笔对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(pen: Pen);

    /**
     * 设置折线尖角长度与线宽的最大比值，当画笔绘制一条折线，并且[JoinStyle]{@link @ohos.graphics.drawing:drawing.JoinStyle}为MITER_JOIN时，若尖角长度与线宽的比值大
     * 于限制值，则该折角使用BEVEL_JOIN绘制。
     *
     * @param { double } miter - 折线尖角长度与线宽的最大比值，负数在绘制时会被视作4.0处理，非负数正常生效，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMiterLimit(miter: double): void;

    /**
     * 获取折线尖角的限制值。
     *
     * @returns { double } 返回折线尖角长度与线宽的最大比值。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getMiterLimit(): double;

    /**
     * 设置画笔着色器效果。
     *
     * @param { ShaderEffect } shaderEffect - **ShaderEffect** object. If **null** is passed in, the shader effect will
     *     be cleared. [since 12 - 19]
     * @param { ShaderEffect | null } shaderEffect - 着色器对象。null表示清空着色器效果。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setShaderEffect(shaderEffect: ShaderEffect | null): void;

    /**
     * 设置画笔的颜色。
     *
     * @param { common2D.Color } color - ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setColor(color: common2D.Color): void;

    /**
     * 设置画笔的颜色。性能优于[setColor]{@link drawing.Pen#setColor(color: common2D.Color)}接口，推荐使用本接口。
     *
     * @param { int } alpha - ARGB格式颜色的透明度通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { int } red - ARGB格式颜色的红色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { int } green - ARGB格式颜色的绿色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { int } blue - ARGB格式颜色的蓝色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setColor(alpha: int, red: int, green: int, blue: int): void;

    /**
     * 设置画笔的颜色。
     *
     * @param { int } color - 16进制ARGB格式的颜色。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    setColor(color: int): void;

    /**
     * 设置画笔的颜色以及标准色域，与[setColor]{@link drawing.Pen#setColor(color: common2D.Color)}区别在于可以单独设置色域，适用于需要单独设置色域的场景。
     *
     * @param { common2D.Color4f } color4f - ARGB格式的颜色，每个颜色通道的值是0.0-1.0之间的浮点数，大于1.0时，取1.0，小于0.0时，取0.0。
     * @param { colorSpaceManager.ColorSpaceManager | null } colorSpace - 标准色域对象，null表示使用SRGB色域。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void;

    /**
     * 获取画笔的颜色。
     *
     * @returns { common2D.Color } Color of the pen.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getColor(): common2D.Color;

    /**
     * Obtains the color of this pen.
     *
     * @returns { common2D.Color | undefined } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getColor(): common2D.Color | undefined;

    /**
     * 获取画笔的颜色，与[getColor]{@link drawing.Pen#getColor()}的区别在于返回值类型为浮点数，适用于需要浮点数类型的场景。
     *
     * @returns { common2D.Color4f } Color of the pen.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColor4f(): common2D.Color4f;

    /**
     * Obtains the color of a pen. The color is used by the pen to outline a shape.
     *
     * @returns { common2D.Color4f | undefined} Returns four floating point values that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getColor4f(): common2D.Color4f | undefined;

    /**
     * 获取画笔的颜色。
     *
     * @returns { int } 返回画笔的颜色，以16进制ARGB格式的32位无符号整数表示。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    getHexColor(): int;

    /**
     * 设置画笔的线宽。0线宽被视作特殊的极细线宽，在绘制时始终会被绘制为1像素，不随画布的缩放而改变；负数线宽在实际绘制时会被视作0线宽。
     *
     * @param { double } width - 表示线宽，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setStrokeWidth(width: double): void;

    /**
     * 获取画笔的线宽属性，线宽描述了画笔绘制图形轮廓的宽度。
     *
     * @returns { double } 返回画笔的线宽，单位为物理像素px。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getWidth(): double;

    /**
     * 设置画笔是否开启抗锯齿。开启后，可以使得图形的边缘在显示时更平滑。未调用此接口设置时，系统默认关闭抗锯齿。
     *
     * @param { boolean } aa - 表示是否开启抗锯齿。true表示开启，false表示关闭。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setAntiAlias(aa: boolean): void;

    /**
     * 获取画笔是否开启抗锯齿属性。
     *
     * @returns { boolean } 返回画笔是否开启抗锯齿属性，true表示开启，false表示关闭。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isAntiAlias(): boolean;

    /**
     * 设置画笔的透明度。
     *
     * @param { int } alpha - 用于表示透明度的[0, 255]区间内的整数值，传入浮点类型时向下取整。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setAlpha(alpha: int): void;

    /**
     * 获取画笔的透明度。
     *
     * @returns { int } 返回画笔的透明度，该返回值为0到255之间的整数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getAlpha(): int;

    /**
     * 给画笔添加额外的颜色滤波器。
     *
     * @param { ColorFilter } filter - Defines a color filter. If **null** is passed in, the color filter is cleared.
     *     [since 11 - 19]
     * @param { ColorFilter | null } filter - 颜色滤波器。null表示清空颜色滤波器。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setColorFilter(filter: ColorFilter | null): void;

    /**
     * 获取画笔的颜色滤波器。
     *
     * @returns { ColorFilter } 返回颜色滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getColorFilter(): ColorFilter;

    /**
     * Obtains the color filter of this pen.
     *
     * @returns { ColorFilter | undefined } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getColorFilter(): ColorFilter | undefined;

    /**
     * 设置画笔的图像滤波器。
     *
     * @param { ImageFilter | null } filter - 图像滤波器，null表示清空画笔的图像滤波器效果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setImageFilter(filter: ImageFilter | null): void;
    /**
     * 给画笔添加额外的蒙版滤镜。
     *
     * @param { MaskFilter } filter - Mask filter. If **null** is passed in, the mask filter is cleared. [since 12 - 19]
     * @param { MaskFilter | null } filter - 蒙版滤镜。null表示清空蒙版滤镜。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMaskFilter(filter: MaskFilter | null): void;

    /**
     * 设置画笔路径效果。
     *
     * @param { PathEffect } effect - Implements a path effect. If **null** is passed in, the path filter is cleared.
     *     [since 12 - 19]
     * @param { PathEffect | null } effect - 路径效果对象。null表示清空路径效果。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setPathEffect(effect: PathEffect | null): void;

    /**
     * 设置画笔阴影层效果。当前仅在绘制文字时生效。
     *
     * @param { ShadowLayer } shadowLayer - Implements a shadow layer. If **null** is passed in, the shadow layer is
     *     cleared. [since 12 - 19]
     * @param { ShadowLayer | null } shadowLayer - 阴影层对象。null表示清空阴影层效果。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setShadowLayer(shadowLayer: ShadowLayer | null): void;

    /**
     * 设置画笔的混合模式。
     *
     * @param { BlendMode } mode - 颜色的混合模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setBlendMode(mode: BlendMode): void;

    /**
     * 开启画笔的抖动绘制效果。抖动绘制可以使得绘制出的颜色更加真实。
     *
     * @param { boolean } dither - 是否开启画笔的抖动绘制效果。true表示开启，false表示关闭。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setDither(dither: boolean): void;

    /**
     * 设置画笔绘制转角的样式。未调用此接口设置时，系统默认的转角样式为MITER_JOIN。
     *
     * @param { JoinStyle } style - 折线转角样式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setJoinStyle(style: JoinStyle): void;

    /**
     * 获取画笔绘制转角的样式。
     *
     * @returns { JoinStyle } 返回折线转角的样式。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getJoinStyle(): JoinStyle;

    /**
     * 设置画笔的线帽样式。未调用此接口设置时，系统默认的线帽样式为FLAT_CAP。
     *
     * @param { CapStyle } style - 描述画笔的线帽样式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setCapStyle(style: CapStyle): void;

    /**
     * 获取画笔的线帽样式。
     *
     * @returns { CapStyle } 返回画笔的线帽样式。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getCapStyle(): CapStyle;

    /**
     * 重置当前画笔为初始状态。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    reset(): void;
    /**
     * 获取使用画笔绘制的源路径轮廓，并用目标路径表示。
     *
     * @param { Path } src - 源路径对象。
     * @param { Path } dst - 目标路径对象。
     * @returns { boolean } 返回获取源路径轮廓是否成功，true表示成功，false表示失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getFillPath(src: Path, dst: Path): boolean;
  }

  /**
   * 画刷对象，描述所绘制图形的填充信息。
   * 
   * > **说明：**
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  class Brush {
    /**
     * 构造一个新的画刷对象。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 复制构造一个新的画刷对象。
     *
     * @param { Brush } brush - 待复制的画刷对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(brush: Brush);

    /**
     * 设置画刷的颜色。
     *
     * @param { common2D.Color } color - ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setColor(color: common2D.Color): void;

    /**
     * 设置画刷的颜色。性能优于[setColor]{@link drawing.Brush#setColor(color: common2D.Color)}接口，推荐使用本接口。
     *
     * @param { int } alpha - ARGB格式颜色的透明度通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { int } red - ARGB格式颜色的红色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { int } green - ARGB格式颜色的绿色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @param { int } blue - ARGB格式颜色的蓝色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setColor(alpha: int, red: int, green: int, blue: int): void;

    /**
     * 设置画刷的颜色。
     *
     * @param { int } color - 16进制ARGB格式的颜色。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    setColor(color: int): void;

    /**
     * 设置画刷的颜色以及标准色域，与[setColor]{@link drawing.Brush#setColor(color: common2D.Color)}区别在于可以单独设置色域，适用于需要单独设置色域的场景。
     *
     * @param { common2D.Color4f } color4f - ARGB格式的颜色，每个颜色通道的值是0.0-1.0之间的浮点数，大于1.0时，取1.0，小于0.0时，取0.0。
     * @param { colorSpaceManager.ColorSpaceManager | null } colorSpace - 标准色域对象，null表示使用SRGB色域。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void;

    /**
     * 获取画刷的颜色。
     *
     * @returns { common2D.Color } Color of the brush.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getColor(): common2D.Color;

    /**
     * Obtains the color of this brush.
     *
     * @returns { common2D.Color | undefined } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getColor(): common2D.Color | undefined;

    /**
     * 获取画刷的颜色，与[getColor]{@link drawing.Brush#getColor()}的区别是返回值类型为浮点数，适用于需要浮点数类型的场景。
     *
     * @returns { common2D.Color4f } Color of the brush.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColor4f(): common2D.Color4f;

    /**
     * Obtains the color of a brush. The color is used by the brush to outline a shape.
     *
     * @returns { common2D.Color4f | undefined} Returns four floating point values that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getColor4f(): common2D.Color4f | undefined;

    /**
     * 获取画刷的颜色。
     *
     * @returns { int } 返回画刷的颜色，以16进制ARGB格式的32位无符号整数表示。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    getHexColor(): int;

    /**
     * 设置画刷是否开启抗锯齿。开启后，可以使得图形的边缘在显示时更平滑。未调用此接口设置时，系统默认关闭抗锯齿。
     *
     * @param { boolean } aa - 表示是否开启抗锯齿，true表示开启，false表示关闭。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setAntiAlias(aa: boolean): void;

    /**
     * 获取画刷是否开启抗锯齿属性。
     *
     * @returns { boolean } 返回画刷是否开启抗锯齿属性，true表示开启，false表示关闭。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isAntiAlias(): boolean;

    /**
     * 设置画刷的透明度。
     *
     * @param { int } alpha - 用于表示透明度的[0, 255]区间内的整数值，传入浮点类型时向下取整。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setAlpha(alpha: int): void;

    /**
     * 获取画刷的透明度。
     *
     * @returns { int } 返回画刷的透明度，该返回值为0到255之间的整数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getAlpha(): int;

    /**
     * 给画刷添加额外的颜色滤波器。
     *
     * @param { ColorFilter } filter - Defines a color filter. If **null** is passed in, the color filter is cleared.
     *     [since 11 - 19]
     * @param { ColorFilter | null } filter - 颜色滤波器。null表示清空颜色滤波器。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setColorFilter(filter: ColorFilter | null): void;

    /**
     * 获取画刷的颜色滤波器。
     *
     * @returns { ColorFilter } 返回颜色滤波器。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getColorFilter(): ColorFilter;

    /**
     * Obtains the color filter of this brush.
     *
     * @returns { ColorFilter | undefined } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getColorFilter(): ColorFilter | undefined;

    /**
     * 为画刷设置图像滤波器。
     *
     * @param { ImageFilter | null } filter - 图像滤波器，null表示清空图像滤波器效果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setImageFilter(filter: ImageFilter | null): void;
    /**
     * 给画刷添加额外的蒙版滤镜。
     *
     * @param { MaskFilter } filter - Mask filter. If **null** is passed in, the mask filter is cleared. [since 12 - 19]
     * @param { MaskFilter | null } filter - 蒙版滤镜。null表示清空蒙版滤镜。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMaskFilter(filter: MaskFilter | null): void;

    /**
     * 设置画刷阴影层效果。当前仅在绘制文字时生效。
     *
     * @param { ShadowLayer } shadowLayer - Implements a shadow layer. If **null** is passed in, the shadow layer is
     *     cleared. [since 12 - 19]
     * @param { ShadowLayer | null } shadowLayer - 阴影层对象。null表示清空阴影层效果。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setShadowLayer(shadowLayer: ShadowLayer | null): void;

    /**
     * 设置画刷着色器效果。
     *
     * @param { ShaderEffect } shaderEffect - **ShaderEffect** object. If **null** is passed in, the shader effect will
     *     be cleared. [since 12 - 19]
     * @param { ShaderEffect | null } shaderEffect - 着色器对象。null表示清空着色器效果。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setShaderEffect(shaderEffect: ShaderEffect | null): void;

    /**
     * 设置画刷的混合模式。未调用此接口设置时，系统默认的混合模式为SRC_OVER。
     *
     * @param { BlendMode } mode - 颜色的混合模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    setBlendMode(mode: BlendMode): void;

    /**
     * 重置当前画刷为初始状态。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    reset(): void;
  }

  /**
   * 矩阵对象。
   * 表示为3*3的矩阵，如下图所示：
   * ![matrix_3x3](figures/matrix3X3.PNG)
   * 矩阵中的元素从左到右，从上到下分别表示水平缩放系数、水平倾斜系数、水平位移系数、垂直倾斜系数、垂直缩放系数、垂直位移系数、X轴透视系数、Y轴透视系数、透视缩放系数。
   * 设(x<sub>1</sub>, y<sub>1</sub>)为源坐标点，(x<sub>2</sub>, y<sub>2</sub>)为源坐标点通过矩阵变换后的坐标点，则两个坐标点的关系如下：
   * ![matrix_xy](figures/matrix_xy.PNG)
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class Matrix {
    /**
     * 构造一个矩阵对象。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 拷贝一个矩阵。
     *
     * @param { Matrix } matrix - 被拷贝的矩阵。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(matrix: Matrix);

    /**
     * 判断当前矩阵是否为仿射矩阵。仿射矩阵是一种包括平移、旋转、缩放等变换的矩阵。
     *
     * @returns { boolean } 返回当前矩阵是否为仿射矩阵。true表示是仿射矩阵，false表示不是仿射矩阵。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isAffine(): boolean;

    /**
     * 判断经过该矩阵映射后的矩形的形状是否仍为矩形。
     *
     * @returns { boolean } 返回经过该矩阵映射后的矩形的形状是否仍为矩形。true表示仍是矩形，false表示不是矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    rectStaysRect(): boolean;

    /**
     * 设置矩阵为单位矩阵，并围绕位于(px, py)的旋转轴点进行旋转。
     *
     * @param { double } degree - 角度，单位为度。正数表示顺时针旋转，负数表示逆时针旋转，该参数为浮点数。
     * @param { double } px - 旋转轴点的横坐标，该参数为浮点数。
     * @param { double } py - 旋转轴点的纵坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setRotation(degree: double, px: double, py: double): void;

    /**
     * 设置矩阵为单位矩阵围绕位于(px, py)的中心点，以sx和sy进行缩放后的结果。
     *
     * @param { double } sx - x轴方向缩放系数，为负数时可看作是先关于y = px作镜像翻转后再进行缩放，该参数为浮点数。
     * @param { double } sy - y轴方向缩放系数，为负数时可看作是先关于x = py作镜像翻转后再进行缩放，该参数为浮点数。
     * @param { double } px - 缩放中心点的横坐标，该参数为浮点数。
     * @param { double } py - 缩放中心点的纵坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setScale(sx: double, sy: double, px: double, py: double): void;

    /**
     * 设置矩阵为单位矩阵平移(dx, dy)后的结果。
     *
     * @param { double } dx - x轴方向平移距离，正数表示往x轴正方向平移，负数表示往x轴负方向平移，该参数为浮点数。
     * @param { double } dy - y轴方向平移距离，正数表示往y轴正方向平移，负数表示往y轴负方向平移，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setTranslation(dx: double, dy: double): void;

    /**
     * 设置矩阵的倾斜系数。
     *
     * @param { double } kx - x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。
     * @param { double } ky - y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。
     * @param { double } px - 倾斜中心点的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。
     * @param { double } py - 倾斜中心点的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setSkew(kx: double, ky: double, px: double, py: double): void;

    /**
     * 设置矩阵，使其围绕旋转中心(px, py)以指定的正弦值和余弦值旋转。
     *
     * @param { double } sinValue - 旋转角度的正弦值。仅当正弦值和余弦值的平方和为1时，为旋转变换，否则矩阵可能包含平移缩放等其他变换。
     * @param { double } cosValue - 旋转角度的余弦值。仅当正弦值和余弦值的平方和为1时，为旋转变换，否则矩阵可能包含平移缩放等其他变换。
     * @param { double } px - 旋转中心的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。
     * @param { double } py - 旋转中心的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setSinCos(sinValue: double, cosValue: double, px: double, py: double): void;

    /**
     * 设置矩阵对象的各项参数。
     *
     * @param { Array<double> } values - 长度为9的浮点数组，表示矩阵对象参数。数组中的值按下标从小，到大分别表示水平缩放系数、水平倾斜系数、水平位移系数、垂直倾斜系数、垂直缩放系数、垂直位移系数、X
     *     轴透视系数、Y轴透视系数、透视缩放系数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setMatrix(values: Array<double>): void;

    /**
     * 用一个矩阵对当前矩阵进行更新。
     *
     * @param { Array<double> | Matrix } matrix - 用于更新的数组或矩阵。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setMatrix(matrix: Array<double> | Matrix): void;

    /**
     * 用两个矩阵的乘积更新当前矩阵。
     *
     * @param { Matrix } matrixA - 用于运算的矩阵A。
     * @param { Matrix } matrixB - 用于运算的矩阵B。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setConcat(matrixA: Matrix, matrixB: Matrix): void;

    /**
     * 用当前矩阵右乘一个矩阵。
     *
     * @param { Matrix } matrix - 用于运算的矩阵。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    postConcat(matrix: Matrix): void;

    /**
     * 将当前矩阵设置为当前矩阵左乘matrix的结果。
     *
     * @param { Matrix } matrix - 表示矩阵对象，位于乘法表达式右侧。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    preConcat(matrix: Matrix): void;

    /**
     * 判断两个矩阵是否相等。
     *
     * @param { Matrix } matrix - 另一个矩阵。
     * @returns { boolean } 返回两个矩阵的比较结果。true表示两个矩阵相等，false表示两个矩阵不相等。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isEqual(matrix: Matrix): boolean;

    /**
     * 将矩阵matrix设置为当前矩阵的逆矩阵，并返回是否设置成功的结果。
     *
     * @param { Matrix } matrix - 矩阵对象，用于存储获取到的逆矩阵。
     * @returns { boolean } 返回matrix是否被设置为逆矩阵的结果。true表示当前矩阵可逆，matrix被设置为逆矩阵，false表示当前矩阵不可逆，matrix不被设置。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    invert(matrix: Matrix): boolean;

    /**
     * 判断矩阵是否是单位矩阵。
     *
     * @returns { boolean } 返回矩阵是否是单位矩阵。true表示矩阵是单位矩阵，false表示矩阵不是单位矩阵。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isIdentity(): boolean;

    /**
     * 获取矩阵给定索引位的值。索引范围0-8。
     *
     * @param { int } index - 索引位置，范围0-8，该参数为整数。
     * @returns { double } 函数返回矩阵给定索引位对应的值，该返回值为整数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getValue(index: int): double;
    /**
     * 将矩阵设置为矩阵右乘围绕轴心点旋转一定角度的单位矩阵后得到的矩阵。
     *
     * @param { double } degree - 旋转角度，单位为度。正数表示顺时针旋转，负数表示逆时针旋转，该参数为浮点数。
     * @param { double } px - 旋转中心点的横坐标，该参数为浮点数。
     * @param { double } py - 旋转中心点的纵坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    postRotate(degree: double, px: double, py: double): void;
    /**
     * 将矩阵设置为矩阵右乘围绕轴心点按一定缩放系数缩放后的单位矩阵后得到的矩阵。
     *
     * @param { double } sx - x轴方向缩放系数，负数表示先关于y = px作镜像翻转后再进行缩放，该参数为浮点数。
     * @param { double } sy - y轴方向缩放系数，负数表示先关于x = py作镜像翻转后再进行缩放，该参数为浮点数。
     * @param { double } px - 缩放中心点的横坐标，该参数为浮点数。
     * @param { double } py - 缩放中心点的纵坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    postScale(sx: double, sy: double, px: double, py: double): void;
    /**
     * 将矩阵设置为矩阵右乘平移一定距离后的单位矩阵后得到的矩阵。
     *
     * @param { double } dx - x轴方向平移距离，正数表示往x轴正方向平移，负数表示往x轴负方向平移，该参数为浮点数。
     * @param { double } dy - y轴方向平移距离，正数表示往y轴正方向平移，负数表示往y轴负方向平移，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    postTranslate(dx: double, dy: double): void;

    /**
     * 将矩阵设置为矩阵左乘围绕轴心点旋转一定角度的单位矩阵后得到的矩阵。
     *
     * @param { double } degree - 旋转角度，单位为度。正数表示顺时针旋转，负数表示逆时针旋转，该参数为浮点数。
     * @param { double } px - 旋转中心点的横坐标，该参数为浮点数。
     * @param { double } py - 旋转中心点的纵坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    preRotate(degree: double, px: double, py: double): void;

    /**
     * 当前矩阵右乘一个倾斜变换矩阵。
     *
     * @param { double } kx - x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。
     * @param { double } ky - y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。
     * @param { double } px - 倾斜中心点的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。
     * @param { double } py - 倾斜中心点的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    postSkew(kx: double, ky: double, px: double, py: double): void;

    /**
     * 将矩阵设置为矩阵左乘围绕轴心点按一定缩放系数缩放后的单位矩阵后得到的矩阵。
     *
     * @param { double } sx - x轴方向缩放系数，为负数时可看作是先关于y = px作镜像翻转后再进行缩放，该参数为浮点数。
     * @param { double } sy - y轴方向缩放系数，为负数时可看作是先关于x = py作镜像翻转后再进行缩放，该参数为浮点数。
     * @param { double } px - 轴心点横坐标，该参数为浮点数。
     * @param { double } py - 轴心点纵坐标，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    preScale(sx: double, sy: double, px: double, py: double): void;
    /**
     * 将矩阵设置为矩阵左乘平移一定距离后的单位矩阵后得到的矩阵。
     *
     * @param { double } dx - x轴方向平移距离，正数表示往x轴正方向平移，负数表示往x轴负方向平移，该参数为浮点数。
     * @param { double } dy - y轴方向平移距离，正数表示往y轴正方向平移，负数表示往y轴负方向平移，该参数为浮点数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    preTranslate(dx: double, dy: double): void;

    /**
     * 当前矩阵左乘一个倾斜变换矩阵。
     *
     * @param { double } kx - x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。
     * @param { double } ky - y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。
     * @param { double } px - 倾斜中心点的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。
     * @param { double } py - 倾斜中心点的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    preSkew(kx: double, ky: double, px: double, py: double): void;

    /**
     * 重置当前矩阵为单位矩阵。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    reset(): void;

    /**
     * 通过矩阵变换将源点数组映射到目标点数组。
     *
     * @param { Array<common2D.Point> } src - 源点数组。
     * @returns { Array<common2D.Point> } Array of points obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    mapPoints(src: Array<common2D.Point>): Array<common2D.Point>;

    /**
     * Maps a source point array to a destination point array by means of matrix transformation.
     *
     * @param { Array<common2D.Point> } src - Array of source points.
     * @returns { Array<common2D.Point> | undefined } Return mapped points array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    mapPoints(src: Array<common2D.Point>): Array<common2D.Point> | undefined;

    /**
     * 返回半径为radius的圆经过当前矩阵映射形成的椭圆的平均半径。平均半径的平方为椭圆长轴长度和短轴长度的乘积。若当前矩阵包含透视变换，则该结果无意义。
     *
     * @param { double } radius - 用于计算的圆的半径，浮点数。如果是负数，则按照绝对值进行计算。
     * @returns { double } 返回经过变换之后的平均半径。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    mapRadius(radius: double): double;

    /**
     * 获取矩阵的所有元素值。
     *
     * @returns { Array<number> } 存储矩阵元素值的浮点数组，长度为9。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    getAll(): Array<number>;

    /**
     * Obtains all element values of this matrix.
     *
     * @returns { Array<double> | undefined } nine scalar values contained by Matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getAll(): Array<double> | undefined;

    /**
     * 将目标矩形设置为源矩形通过矩阵变换后的图形的外接矩形。如下图所示，蓝色矩形为源矩形，假设黄色矩形为源矩形通过矩阵变换形成的图形，此时黄色矩形的边不与坐标轴平行，无法使用矩形对象表示，因此，将目标矩形设置为黄色矩形的外接矩形，即
     * 黑色矩形。
     * ![mapRect](figures/zh-ch_matrix_mapRect.png)
     *
     * @param { common2D.Rect } dst - 目标矩形对象，用于存储源矩形经矩阵变换后的图形的外接矩形。
     * @param { common2D.Rect } src - 源矩形对象。
     * @returns { boolean } 返回源矩形经过矩阵变换后的图形是否仍然是矩形，true表示是矩形，false表示不是矩形。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    mapRect(dst: common2D.Rect, src: common2D.Rect): boolean;
    /**
     * 将当前矩阵设置为能使源矩形映射到目标矩形的变换矩阵。
     *
     * @param { common2D.Rect } src - 源矩形。
     * @param { common2D.Rect } dst - 目标矩形。
     * @param { ScaleToFit } scaleToFit - 源矩形到目标矩形的映射方式。
     * @returns { boolean } 返回矩阵是否可以表示矩形之间的映射，true表示可以，false表示不可以。如果源矩形的宽高任意一个小于等于0，则返回false，并将矩阵设置为单位矩阵；如果目标矩形的宽高任意一个小于
     *     等于0，则返回true，并将矩阵设置为除透视缩放系数为1外其余值皆为0的矩阵。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setRectToRect(src: common2D.Rect, dst: common2D.Rect, scaleToFit: ScaleToFit): boolean;
    /**
     * 将当前矩阵设置为能够将源点数组映射到目标点数组的变换矩阵。源点和目标点的个数必须大于等于0，小于等于4。
     *
     * @param { Array<common2D.Point> } src - 源点数组，长度必须为count。
     * @param { Array<common2D.Point> } dst - 目标点数组，长度必须为count。
     * @param { int } count - 在src和dst点的数量，该参数为整数。
     * @returns { boolean } 返回设置矩阵是否成功的结果，true表示设置成功，false表示设置失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setPolyToPoly(src: Array<common2D.Point>, dst: Array<common2D.Point>, count: int): boolean;
  }

  /**
   * 源矩形到目标矩形的缩放方式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum ScaleToFit {
    /**
     * 将源矩形缩放以填充满整个目标矩形，可能会改变源矩形的长宽比。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FILL_SCALE_TO_FIT = 0,

    /**
     * 保持源矩形的长宽比进行缩放，并对齐到目标矩形的左上方。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    START_SCALE_TO_FIT = 1,

    /**
     * 保持源矩形的长宽比进行缩放，并居中对齐到目标矩形。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    CENTER_SCALE_TO_FIT = 2,

    /**
     * 保持源矩形的长宽比进行缩放，并对齐到目标矩形的右下方。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    END_SCALE_TO_FIT = 3
  }

  /**
   * 区域对象，用于描述所绘制图形的区域信息。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class Region {
    /**
     * 构造一个区域对象。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 拷贝一个区域对象。
     *
     * @param { Region } region - 用于拷贝的区域。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(region: Region);

    /**
     * 构造矩形区域。
     *
     * @param { int } left - 矩形区域的左侧位置（矩形左上角横坐标）。该参数必须为整数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { int } top - 矩形区域的顶部位置（矩形左上角纵坐标）。该参数必须为整数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @param { int } right - 矩形区域的右侧位置（矩形右下角横坐标）。该参数必须为整数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { int } bottom - 矩形区域的底部位置（矩形右下角纵坐标）。该参数必须为整数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(left: int, top: int, right: int, bottom: int);

    /**
     * 用于判断其他区域是否与当前区域相等。
     *
     * @param { Region } other - 区域对象。
     * @returns { boolean } 返回其他区域是否与当前区域相等的结果。true表示相等，false表示不相等。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isEqual(other: Region): boolean;

    /**
     * 判断当前区域是否包含多个矩形。
     *
     * @returns { boolean } 返回当前区域是否包含多个矩形的结果。true表示当前区域包含多个矩形，false表示当前区域不包含多个矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isComplex(): boolean;

    /**
     * 判断当前区域是否为空。
     *
     * @returns { boolean } 返回当前区域是否为空。true表示当前区域为空，false表示当前区域不为空。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    isEmpty(): boolean;

    /**
     * 获取区域的边界。
     *
     * @returns { common2D.Rect } Bounding rectangle of this region.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getBounds(): common2D.Rect;

    /**
     * Gets the bounds of the region.
     *
     * @returns { common2D.Rect | undefined } Returns Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getBounds(): common2D.Rect | undefined;

    /**
     * 返回一个新路径，该路径取自当前区域的边界。
     *
     * @returns { Path } 返回当前区域边界的路径。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getBoundaryPath(): Path;

    /**
     * Gets the boundary of the region, which represents by a path.
     * Gets the bounds of the region.
     *
     * @returns { Path | undefined } Returns Path object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    getBoundaryPath(): Path | undefined;

    /**
     * 判断测试点是否在区域内。
     *
     * @param { int } x - 测试点的x轴坐标。该参数必须为整数。如果输入的数字包含小数部分，小数部分将被舍去。
     * @param { int } y - 测试点的y轴坐标。该参数必须为整数。如果输入的数字包含小数部分，小数部分将被舍去。
     * @returns { boolean } 返回测试点是否在区域内的结果。true表示测试点在区域内，false表示测试点不在区域内。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isPointContained(x: int, y:int): boolean;

    /**
     * 判断其他区域是否在当前区域内。
     *
     * @param { Region } other - 区域对象。
     * @returns { boolean } 返回其他区域是否在当前区域内的结果。true表示其他区域在当前区域内，false表示其他区域不在当前区域内。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isRegionContained(other: Region): boolean;

    /**
     * 将当前区域与指定区域进行运算，并替换为运算结果。
     *
     * @param { Region } region - 区域对象。
     * @param { RegionOp } regionOp - 区域合并操作类型。
     * @returns { boolean } 返回区域运算结果是否成功替换当前区域。true表示区域运算结果替换当前区域成功，false表示区域运算结果替换当前区域失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    op(region: Region, regionOp: RegionOp): boolean;

    /**
     * 对区域进行平移。
     *
     * @param { int } dx - x轴方向平移量，正数往x轴正方向平移，负数往x轴负方向平移，该参数为整数。
     * @param { int } dy - y轴方向平移量，正数往y轴正方向平移，负数往y轴负方向平移，该参数为整数。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    offset(dx: int, dy: int): void;

    /**
     * 快速判断矩形和区域是否不相交，实际上比较的是矩形和区域的外接矩形是否不相交，因此会有误差。
     *
     * @param { int } left - 矩形区域的左侧位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @param { int } top - 矩形区域的顶部位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @param { int } right - 矩形区域的右侧位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @param { int } bottom - 矩形区域的底部位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @returns { boolean } 返回矩形是否与区域不相交的结果。true表示矩形与区域不相交，false表示矩形与区域相交。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    quickReject(left: int, top: int, right: int, bottom: int): boolean;

    /**
     * 判断当前区域是否与另一个区域不相交。实际上比较的是两个区域的外接矩形是否不相交，因此会有误差。
     *
     * @param { Region } region - 指定的区域对象。
     * @returns { boolean } 返回是否当前区域与另外的区域不相交的结果。true表示不相交，false表示相交。仅点和边相交返回true。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    quickRejectRegion(region: Region): boolean;

    /**
     * 设置一个与裁剪区域内路径轮廓相匹配的区域。
     *
     * @param { Path } path - 路径对象。
     * @param { Region } clip - 区域对象。
     * @returns { boolean } 返回设置一个与裁剪区域内路径轮廓相匹配的区域是否成功。true表示设置成功，false表示设置失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setPath(path: Path, clip: Region): boolean;

    /**
     * 设置一个矩形区域。
     *
     * @param { int } left - 矩形区域的左侧位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @param { int } top - 矩形区域的顶部位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @param { int } right - 矩形区域的右侧位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @param { int } bottom - 矩形区域的底部位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @returns { boolean } 返回设置矩形区域是否成功的结果。true表示设置矩形区域成功，false表示设置矩形区域失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    setRect(left: int, top: int, right: int, bottom: int): boolean;

    /**
     * 设置当前区域为另一块区域。
     *
     * @param { Region } region - 用于赋值的区域。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    setRegion(region: Region): void;

    /**
     * 设置当前区域为空。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    setEmpty(): void;

    /**
     * 判断当前区域是否等同于单个矩形。
     *
     * @returns { boolean } 返回当前区域是否等同于单个矩形的结果。true表示当前区域等同于单个矩形，false表示当前区域不等同于单个矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isRect(): boolean;

    /**
     * 判断当前区域是否等同于单个矩形并且包含指定矩形。
     *
     * @param { int } left - 矩形区域的左侧位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @param { int } top - 矩形区域的顶部位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @param { int } right - 矩形区域的右侧位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @param { int } bottom - 矩形区域的底部位置。该参数必须为整数。当输入的数字带小数时，小数部分会被舍去。
     * @returns { boolean } 返回当前区域是否等同于单个矩形并且包含指定矩形的结果。true表示当前区域等同于单个矩形并且包含指定矩形，false表示当前区域不等同于单个矩形或不包含指定矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    quickContains(left: int, top: int, right: int, bottom: int): boolean;
  }

  /**
   * 两个区域合并时的操作的枚举。
   * 
   * > **说明：**
   * >
   * > 示意图展示了一个以红色区域为基础，使用不同枚举值与另一个蓝色区域合并后获得的结果，其中绿色区域为最终得到的区域。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum RegionOp {
    /**
     * 差集操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DIFFERENCE = 0,

    /**
     * 两个区域的相交操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    INTERSECT = 1,

    /**
     * 并集操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    UNION = 2,

    /**
     * 异或操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    XOR = 3,

    /**
     * 反向差集操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    REVERSE_DIFFERENCE = 4,

    /**
     * 两个区域替换操作。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    REPLACE = 5
  }

  /**
   * 圆角位置枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum CornerPos {
    /**
     * 左上角圆角位置。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    TOP_LEFT_POS = 0,

    /**
     * 右上角圆角位置。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    TOP_RIGHT_POS = 1,

    /**
     * 右下角圆角位置。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM_RIGHT_POS = 2,

    /**
     * 左下角圆角位置。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM_LEFT_POS = 3
  }

  /**
   * 源矩形区域约束类型枚举，用于在画布绘制图像时指定是否将采样范围限制在源矩形区域内。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  enum SrcRectConstraint {

    /**
     * 严格限制采样范围在源矩形区域内，速度较慢。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    STRICT = 0,

    /**
     * 允许采样范围超出源矩形范围，速度较快。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    FAST = 1
  }

  /**
   * 本模块定义的工具类，仅提供静态的方法，主要完成其他模块和[common2D]{@link @ohos.graphics.common2D:common2D}中定义的数据结构的转换功能等操作。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 15开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 15 dynamic
   * @since 23 static
   */
  class Tool {
    /**
     * 将ResourceColor类型的值转换为common2D.Color对象。
     *
     * @param { ResourceColor } resourceColor - ResourceColor格式的颜色值（支持所有的4种输入，示例中提供13个示例输入）。其中第4种类型
     *     [Resource]{@link ./@internal/component/ets/units:Resource}只接受``$r('belonging.type.name')``构造方法，需要确保该资源在main/
     *     resources/base/element目录下已定义(app支持color、string和integer，sys只支持color)。
     * @returns { common2D.Color } **Common2D.Color** object. If the conversion fails, a null pointer is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 15 dynamic
     */
    static makeColorFromResourceColor(resourceColor: ResourceColor): common2D.Color;

    /**
     * Converts a color value of the ResourceColor type to a common2D.Color object.
     *
     * @param { ResourceColor } resourceColor - Color value of the ResourceColor type.
     *     (All four types of inputs are supported. The following provides 13 example inputs.)
     *     The fourth type of Resource supports only the construction method $r('belonging.type.name').
     *     Ensure that the resource has been defined in the main/resources/base/element directory.
     *     (The types color, string, and integer are available for the belonging app,
     *     whereas only the type color is available for the belonging sys.)
     * @returns { common2D.Color | undefined } Returns a 32-bit (ARGB) variable that describes the color.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    static makeColorFromResourceColor(resourceColor: ResourceColor): common2D.Color | undefined;
  }

  /**
   * 提供了处理矩形的工具。
   * 主要的使用场景：
   * 
   * 1. 矩形快速构建与获取基本属性，如构造新矩形、拷贝矩形、获取矩形的宽高以及中心点等。
   * 2. 边界计算与调整，如获取包含关系、计算与更新矩形之间交集和并集，更新边界值等。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 20开始支持。
   * >
   * > - 本模块使用屏幕物理像素单位px。
   * >
   * > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  class RectUtils {
    /**
     * 创建一个上下左右边界坐标都是0的矩形。
     *
     * @returns { common2D.Rect } Created rectangle object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeEmpty(): common2D.Rect;

    /**
     * Makes an uninitialized 2D rectangular object with zero dimensions and origin at (0, 0).
     *
     * @returns { common2D.Rect | undefined} - Returns an empty Rect object with all
     *     coordinates (left, top, right, bottom) set to 0.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeEmpty(): common2D.Rect | undefined;

    /**
     * 创建指定上下左右边界的矩形。
     *
     * @param { number } left - 矩形的左上角x轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { number } top - 矩形的左上角y轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @param { number } right - 矩形的右下角x轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { number } bottom - 矩形的右下角y轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @returns { common2D.Rect } Created rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeLtrb(left: number, top: number, right: number, bottom: number): common2D.Rect;

    /**
     * Makes a 2D rectangular object from boundary coordinates.
     *
     * @param { double } left - Indicates the X-coordinate of the left edge.
     * @param { double } top - Indicates the Y-coordinate of the top edge.
     * @param { double } right - Indicates the X-coordinate of the right edge.
     * @param { double } bottom - Indicates the Y-coordinate of the bottom edge.
     * @returns { common2D.Rect | undefined } - Returns an Rect object with the specific coordinates
     *     (left, top, right, bottom).
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeLtrb(left: double, top: double, right: double, bottom: double): common2D.Rect | undefined;

    /**
     * 拷贝一个矩形。
     *
     * @param { common2D.Rect } src - 用于拷贝的矩形。
     * @returns { common2D.Rect } Created rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeCopy(src: common2D.Rect): common2D.Rect;

    /**
     * Makes a deep copy of a 2D rectangular object.
     *
     * @param { common2D.Rect } src - Indicates the source rectangle to copy.
     * @returns { common2D.Rect | undefined } - Returns an Rect object has the same boundary coordinates with the
     *     source.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 24 static
     */
    static makeCopy(src: common2D.Rect): common2D.Rect | undefined;

    /**
     * 获取矩形的宽度。
     *
     * @param { common2D.Rect } rect - 矩形对象。
     * @returns { double } 返回矩形的宽。如果矩形的左边界大于右边界，获取的宽度为负值，左边界小于右边界则为正值。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static getWidth(rect: common2D.Rect): double;

    /**
     * 获取矩形的高度。
     *
     * @param { common2D.Rect } rect - 矩形对象。
     * @returns { double } 返回矩形的高。如果矩形的上边界大于下边界，获取的高度为负值，上边界小于下边界则为正值。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static getHeight(rect: common2D.Rect): double;

    /**
     * 获取矩形中心的横坐标。
     *
     * @param { common2D.Rect } rect - 矩形对象。
     * @returns { double } 返回矩形中心的横坐标。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static centerX(rect: common2D.Rect): double;

    /**
     * 获取矩形中心的纵坐标。
     *
     * @param { common2D.Rect } rect - 矩形对象。
     * @returns { double } 返回矩形中心的纵坐标。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static centerY(rect: common2D.Rect): double;

    /**
     * 判断一个矩形是否完全包含另外一个矩形。
     *
     * @param { common2D.Rect } rect - 矩形对象。
     * @param { common2D.Rect } other - 判断是否被包含的矩形对象。
     * @returns { boolean } 返回矩形是否完全包含另一个矩形的结果。true表示指定矩形在另一个矩形内部或者相等，false表示指定矩形在另一个矩形外部。空的矩形不包含任何矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static contains(rect: common2D.Rect, other: common2D.Rect): boolean;

    /**
     * 判断一个矩形是否完全包含另外一个矩形（另一个矩形分别用左上右下坐标表示）。
     *
     * @param { common2D.Rect } rect - 矩形对象。
     * @param { double } left - 矩形的左上角x轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { double } top - 矩形的左上角y轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @param { double } right - 矩形的右下角x轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { double } bottom - 矩形的右下角y轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @returns { boolean } 返回矩形是否完全包含由左上右下坐标组成的矩形的结果。true表示指定左上右下坐标组成的矩形在矩形的内部或者相等，false表示指定左上右下坐标组成的矩形在矩形的外部。空的矩形不包含任何
     *     矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static contains(rect: common2D.Rect, left: double, top: double, right: double, bottom: double): boolean;

    /**
     * 判断一个矩形是否完全包含一个点。
     *
     * @param { common2D.Rect } rect - 矩形对象。
     * @param { double } x - 要判断点的x轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { double } y - 要判断点的y轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @returns { boolean } 返回矩形是否完全包含x、y组成的点的结果。true表示矩形完全包含x、y组成的点，false表示矩形不完全包含x、y组成的点。左边界和上边界属于矩形内部，右边界和下边界不属于矩形内部。
     *     空的矩形不包含任何点。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static contains(rect: common2D.Rect, x: double, y: double): boolean;

    /**
     * 将指定矩形的左边界、上边界、右边界和下边界分别和传入的"左上右下"的值相加。
     *
     * @param { common2D.Rect } rect - 矩形对象。
     * @param { double } left - 添加到矩形左边界的值（矩形左上角横坐标），该参数为浮点数。0表示不进行任何运算，正数表示进行相加运算，负数表示相减运算。
     * @param { double } top - 添加到矩形上边界的值（矩形左上角纵坐标），该参数为浮点数。0表示不进行任何运算，正数表示进行相加运算，负数表示相减运算。
     * @param { double } right - 添加到矩形右边界的值（矩形右下角横坐标），该参数为浮点数。0表示不进行任何运算，正数表示进行相加运算，负数表示相减运算。
     * @param { double } bottom - 添加到矩形下边界的值（矩形右下角纵坐标），该参数为浮点数。0表示不进行任何运算，正数表示进行相加运算，负数表示相减运算。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static inset(rect: common2D.Rect, left: double, top: double, right: double, bottom: double): void;

    /**
     * 计算两个矩形的交集区域，并将交集结果更新到第一个入参代表的矩形区域。
     *
     * @param { common2D.Rect } rect - 用于计算交集的原矩形。
     * @param { common2D.Rect } other - 用于计算交集的另一个矩形。
     * @returns { boolean } 返回两个矩形是否有交集的结果。true表示两个矩形有交集，false表示两个矩形没有交集。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static intersect(rect: common2D.Rect, other: common2D.Rect): boolean;

    /**
     * 判断两个矩形是否相交。
     *
     * @param { common2D.Rect } rect - 用于计算交集的原矩形。
     * @param { common2D.Rect } other - 用于计算交集的另一个矩形。
     * @returns { boolean } 返回两个矩形是否有交集的结果。true表示指定矩形与原矩形相交，false表示指定矩形和原矩形没有交集。两矩形仅边重叠或点相交返回false。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static isIntersect(rect: common2D.Rect, other: common2D.Rect): boolean;

    /**
     * 计算矩形的并集区域，并将并集结果更新到第一个入参表示的矩形区域。如果第一个入参矩形为空，则将并集结果更新到第二个入参代表的矩形区域；如果第二个入参的矩形为空，则不进行任何操作。
     *
     * @param { common2D.Rect } rect - 用于计算并集的原矩形。
     * @param { common2D.Rect } other - 用于计算并集的另一个矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static union(rect: common2D.Rect, other: common2D.Rect): void;

    /**
     * 判断矩形是否为空（左边界大于等于右边界或者上边界大于等于下边界）。
     *
     * @param { common2D.Rect } rect - 用于判断的矩形对象。
     * @returns { boolean } 返回矩形是否为空的结果。true表示矩形是空，false表示矩形不为空。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static isEmpty(rect: common2D.Rect): boolean;

    /**
     * 对矩形进行平移。
     *
     * @param { common2D.Rect } rect - 发生偏移的矩形区域。
     * @param { double } dx - 水平方向平移的距离，该参数为浮点数。0表示不平移，负数表示向左平移，正数表示向右平移。
     * @param { double } dy - 竖直方向平移的距离，该参数为浮点数。0表示不平移，负数表示向上平移，正数表示向下平移。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static offset(rect: common2D.Rect, dx: double, dy: double): void;

    /**
     * 将矩形平移到指定位置。
     *
     * @param { common2D.Rect } rect - 发生偏移的矩形区域。
     * @param { double } newLeft - 要平移到的对应位置的x轴坐标，浮点数。0表示坐标原点，负数位于坐标原点左侧，正数位于坐标原点右侧。
     * @param { double } newTop - 要平移到的对应位置的y轴坐标，浮点数。0表示坐标原点，负数位于坐标原点上侧，正数位于坐标原点下侧。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static offsetTo(rect: common2D.Rect, newLeft: double, newTop: double): void;

    /**
     * 使用另一个矩形对当前矩形进行赋值。
     *
     * @param { common2D.Rect } rect - 原矩形。
     * @param { common2D.Rect } other - 用于赋值的矩形。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static setRect(rect: common2D.Rect, other: common2D.Rect): void;

    /**
     * 使用传入的"上下左右"的值更新当前矩形的上下左右边界值。
     *
     * @param { common2D.Rect } rect - 矩形对象。
     * @param { double } left - 矩形的左上角x轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { double } top - 矩形的左上角y轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @param { double } right - 矩形的右下角x轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点左侧，正数表示位于坐标原点右侧。
     * @param { double } bottom - 矩形的右下角y轴坐标，该参数为浮点数。0表示坐标原点，负数表示位于坐标原点上侧，正数表示位于坐标原点下侧。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static setLtrb(rect: common2D.Rect, left: double, top: double, right: double, bottom: double): void;

    /**
     * 将矩形的上下左右边界都设为0。
     *
     * @param { common2D.Rect } rect - 用于设置为空的矩形对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 24 static
     */
    static setEmpty(rect: common2D.Rect): void;

    /**
     * 如果矩形存在反转的情况（即左边界大于右边界或上边界大于下边界），则对矩形的上下（左右）边界值进行交换，使得上边界小于下边界（左边界小于右边界）。
     * 如果矩形不存在反转的情况（即左边界小于等于右边界或上边界小于等于下边界)，不做任何操作。
     *
     * @param { common2D.Rect } rect - 用于设置的矩形对象。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static sort(rect: common2D.Rect): void;

    /**
     * 判断两个矩形是否相等。
     *
     * @param { common2D.Rect } rect - 需要判断的原矩形。
     * @param { common2D.Rect } other - 需要判断的另一矩形。
     * @returns { boolean } 返回两个矩形是否相等的结果。true表示两个矩形相等，false表示两个矩形不相等。
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    static isEqual(rect: common2D.Rect, other: common2D.Rect): boolean;
  }

  /**
   * This class offers a comprehensive set of operations for handling common2D Point objects.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  class PointUtils {
    /**
     * 取反点的坐标。
     *
     * @param { common2D.Point } point - 指定要取反的点。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static negate(point: common2D.Point): void;

    /**
     * 将点的坐标偏移dx, dy。
     *
     * @param { common2D.Point } point - 指定要偏移的点。
     * @param { double } dx - 指示在x轴上偏移的距离（以像素为单位）。
     * @param { double } dy - 指示在y轴上偏移的距离（以像素为单位）。
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static offset(point: common2D.Point, dx: double, dy: double): void;
  }
}

export default drawing;