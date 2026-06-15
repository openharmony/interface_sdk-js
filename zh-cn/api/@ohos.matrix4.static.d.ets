/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * 用于对组件进行[图形变换]{@link common}的各种操作，为组件提供矩阵变换能力，支持对图形进行平移、旋转和缩放等。
 * 
 * Matrix4的使用场景包括：
 * 
 * [图形变换]{@link common}中的[transform]{@link CommonMethod#transform(transform: Optional<object>)}接口通过使用图形变换矩阵Matrix4对象显示二维
 * 变换时的矩阵变换，[transform3D]{@link CommonMethod#transform3D}接口通过使用图形变换矩阵Matrix4对象设置组件的三维变换矩阵。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace matrix4 {

    /**
     * 平移参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface TranslateOption {

        /**
         * x轴的平移距离。
         * 
         * 单位：px
         * 
         * 默认值：0
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        x?: double;

        /**
         * y轴的平移距离。
         * 
         * 单位：px
         * 
         * 默认值：0
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        y?: double;

        /**
         * z轴的平移距离。
         * 
         * 单位：px
         * 
         * 默认值：0
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        z?: double;
    }

    /**
     * 缩放参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface ScaleOption {

        /**
         * x轴的缩放倍数。x>1时以x轴方向放大，0<x<1时以x轴方向缩小，x<0时沿x轴反向并缩放。
         * 
         * 默认值：1
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        x?: double;
        
        
        /**
         * y轴的缩放倍数。y>1时以y轴方向放大，0<y<1时以y轴方向缩小，y<0时沿y轴反向并缩放。
         * 
         * 默认值：1
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        y?: double;

        /**
         * z轴的缩放倍数。z>1时以z轴方向放大，0<z<1时以z轴方向缩小，z<0时沿z轴反向并缩放。
         * 
         * 默认值：1
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        z?: double;
        
        
        /**
         * 变换中心点x轴坐标。
         * 
         * 单位：px
         * 
         * 默认值：组件中心点x轴坐标。
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        centerX?: double;

        /**
         * 变换中心点y轴坐标。
         * 
         * 单位：px
         * 
         * 默认值：组件中心点y轴坐标。
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        centerY?: double;
    }

    /**
     * 旋转参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface RotateOption {

        /**
         * 旋转轴向量x坐标。
         * 
         * 默认值：0。
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        x?: double;

        /**
         * 旋转轴向量y坐标。
         * 
         * 默认值：0。
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        y?: double;

        /**
         * 旋转轴向量z坐标。
         * 
         * 默认值：0。
         * 
         * 取值范围 (-∞, +∞)。
         * 
         * **说明：** 旋转向量中x、y、z至少有一个不为0才有意义。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        z?: double;

        /**
         * 变换中心点x轴坐标。
         * 
         * 单位：px
         * 
         * 默认值：组件中心点x轴坐标。
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        centerX?: double;

        /**
         * 变换中心点y轴坐标。
         * 
         * 单位：px
         * 
         * 默认值：组件中心点y轴坐标。
         * 
         * 取值范围 (-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        centerY?: double;

        /**
         * 旋转角度。
         * 
         * 默认值：0
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        angle?: double;
    }
    /**
     * 坐标点的数据结构。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface Point {
        /**
         * x轴坐标。
         * 
         * 取值范围：(-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        x: double;
        /**
         * y轴坐标。
         * 
         * 取值范围：(-∞, +∞)
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        y: double;
    }
    /**
     * 多边形到多边形的映射选项。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface PolyToPolyOptions {
        /**
         * 源点坐标。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        src: Array<Point>;
        /**
         * 源点坐标起始索引。
         * 
         * 默认值:0 
         * 
         * 取值范围：[0, +∞)
         *
         * @default 0
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        srcIndex?: int;
        /**
         * 目标点坐标。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        dst: Array<Point>;
        /**
         * 目标坐标起始索引。
         * 
         * 默认值: src.length/2 
         * 
         * 取值范围：[0, +∞)
         *
         * @default src.Length/2
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        dstIndex?: int;
        /**
         * 使用到的点数量。
         * 
         * 默认值: 0 
         * 
         * 取值范围：[0, +∞)
         *
         * @default 0
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        pointCount?: int;
    }
    
    
    /**
     * 矩阵对象。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    export interface Matrix4Transit {
        
        
        /**
         * Matrix的拷贝函数，可以拷贝一份当前的矩阵对象。
         *
         * @returns { Matrix4Transit } 当前矩阵的拷贝对象。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        copy(): Matrix4Transit;
        
        
        /**
         * Matrix的逆函数，可以返回一个当前矩阵对象的逆矩阵，即效果正好相反。会改变调用该函数的原始矩阵。
         *
         * @returns { Matrix4Transit } 当前矩阵的逆矩阵对象。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        invert(): Matrix4Transit;
        
        
        /**
         * Matrix的叠加函数，可以将两个矩阵的效果叠加起来生成一个新的矩阵对象。会改变调用该函数的原始矩阵。
         *
         * @param { Matrix4Transit } options - 待叠加的矩阵对象。
         * @returns { Matrix4Transit } 矩阵叠加后的对象。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        combine(options: Matrix4Transit): Matrix4Transit;
        
        
        /**
         * Matrix的平移函数，可以为当前矩阵增加x轴/y轴/z轴平移效果。会改变调用该函数的原始矩阵。
         *
         * @param { TranslateOption } options - 设置平移参数。
         * @returns { Matrix4Transit } 平移效果后的矩阵对象。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        translate(options: TranslateOption): Matrix4Transit;
        
        
        /**
         * Matrix的缩放函数，可以为当前矩阵增加x轴/y轴/z轴缩放效果。会改变调用该函数的原始矩阵。
         *
         * @param { ScaleOption } options - 设置缩放参数。
         * @returns { Matrix4Transit } 缩放效果后的矩阵对象。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        scale(options: ScaleOption): Matrix4Transit;
        /**
         * Matrix的倾斜函数，可以为当前矩阵增加x轴/y轴倾斜效果。会改变调用该函数的原始矩阵。
         *
         * @param { double } x - 设置x轴倾斜参数。
         * @param { double } y - 设置y轴倾斜参数。
         * @returns { Matrix4Transit } 倾斜效果后的矩阵对象。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        skew(x: double, y: double): Matrix4Transit;
        
        
        /**
         * Matrix的旋转函数，可以为当前矩阵增加x轴/y轴/z轴旋转效果。会改变调用该函数的原始矩阵。
         *
         * @param { RotateOption } options - 设置旋转参数。
         * @returns { Matrix4Transit } 旋转效果后的矩阵对象。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        rotate(options: RotateOption): Matrix4Transit;
        
        
        /**
         * Matrix的坐标点转换函数，可以将当前的变换效果作用到一个坐标点上。
         *
         * @param { [double, double] } options - 需要转换的坐标点。
         * @returns { [double, double] } 返回矩阵变换后的Point对象。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        transformPoint(options: [
            double,
            double
        ]): [
            double,
            double
        ];
        /**
         * 将一个多边形的顶点坐标映射到另外一个多边形的顶点坐标。
         *
         * @param { PolyToPolyOptions } options - 映射相关的参数。
         * @returns { Matrix4Transit } 当前矩阵变换后的对象。
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        setPolyToPoly(options: PolyToPolyOptions): Matrix4Transit;
    }
    
    
    
    /**
     * Matrix的构造函数，可以通过传入的参数创建一个四阶矩阵，矩阵为列优先。
     *
     * @param {
     * [double,double,double,double,double,double,double,double,double,double,double,double,double,double,double,double]
     * } options - 参数为长度为16（4*4）的number数组, 详情见四阶矩阵说明。<br/>各number取值范围：(-∞, +∞)<br/>默认值：<br/>
     *     [1, 0, 0, 0,<br/>0, 1, 0, 0,<br/>0, 0, 1, 0,<br/>0, 0, 0, 1]
     * @returns { Matrix4Transit } 根据入参创建的四阶矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function init(options: [
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
    ]): Matrix4Transit;
    
    
    /**
     * Matrix的初始化函数，可以返回一个单位矩阵对象。
     *
     * @returns { Matrix4Transit } 单位矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    function identity(): Matrix4Transit;
}
export default matrix4;