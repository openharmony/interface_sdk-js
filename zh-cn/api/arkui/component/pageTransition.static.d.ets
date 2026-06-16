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

import { ICurve, TranslateOptions, ScaleOptions } from './common';
import { Curve } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";
/**
 * 页面转场类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RouteType {
    /**
     * 页面未重定向。如Push和Pop描述中RouteType为None的情形，即页面进场时PageTransitionEnter的转场效果生效；退场时PageTransitionExit的转场效果生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    None,
    /**
     * 跳转到下一页面。PageA跳转到下一个新的界面PageB。对于PageA，指定RouteType为None或者Push的PageTransitionExit组件样式生效，对于PageB，指定RouteType为None或者
     * Push的PageTransitionEnter组件样式生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Push,
    /**
     * 重定向指定页面。从PageB回退到之前的页面PageA。对于PageB，指定RouteType为None或者Pop的PageTransitionExit组件样式生效，对于PageA，指定RouteType为None或者Pop的
     * PageTransitionEnter组件样式生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Pop
}
/**
 * 页面转场时的滑入滑出效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SlideEffect {
    /**
     * 设置到入场时表示从左边滑入，出场时表示滑出到左边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Left,
    /**
     * 设置到入场时表示从右边滑入，出场时表示滑出到右边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Right,
    /**
     * 设置到入场时表示从上边滑入，出场时表示滑出到上边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Top,
    /**
     * 设置到入场时表示从下边滑入，出场时表示滑出到下边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Bottom,
    /**
     * 设置LTR入场时表示从左边滑入，出场时表示滑出到左边。RTL入场时表示从右边滑入，出场时表示滑出到右边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 5,
    /**
     * 设置LTR入场时表示从右边滑入，出场时表示滑出到右边。RTL入场时表示从左边滑入，出场时表示滑出到左边。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 6
}
/**
 * 页面转场通用动效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CommonTransition {
    /**
     * 设置页面转场时的滑入滑出效果。
     *
     * @param { SlideEffect } value - 页面转场时的滑入滑出效果。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    slide(value: SlideEffect): this;
    /**
     * 设置页面转场时的平移效果。
     *
     * @param { TranslateOptions } value - 设置页面转场时的平移效果，为入场时起点和退场时终点的值，和slide同时设置时默认生效slide。<br/>- x：横向的平移距离。<br/>- y：纵向
     *     的平移距离。<br/>- z：竖向的平移距离。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    translate(value: TranslateOptions): this;
    /**
     * 设置页面转场时的缩放效果。
     *
     * @param { ScaleOptions } value - 设置页面转场时的缩放效果，为入场时起点和退场时终点的值。<br/>- x：横向放大倍数（或缩小比例）。<br/>- y：纵向放大倍数（或缩小比例）。<br/>- 
     *     z：竖向放大倍数（或缩小比例）。<br/>- centerX、centerY缩放中心点。centerX和centerY默认值是"50%"，即默认以页面的中心点为旋转中心点。<br/>- 中心点为(0, 0)代表页面的左
     *     上角。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale(value: ScaleOptions): this;
    /**
     * 设置入场的起点透明度值或者退场的终点透明度值。
     *
     * @param { double } value - 设置入场的起点透明度值或者退场的终点透明度值。<br/>取值范围：[0, 1]
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    opacity(value: double): this;
}
/**
 * 退场/进场动效的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PageTransitionOptions {
    /**
     * 页面转场效果生效的路由类型。
     * 
     * 默认值：RouteType.None。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type?: RouteType;
    /**
     * 动画的时长。
     * 
     * 单位：毫秒
     * 
     * 默认值：1000
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration?: int;
    /**
     * 动画曲线。
     * 
     * 推荐以Curve或ICurve形式指定。
     * 
     * 当类型为string时，为动画插值曲线，取值参考
     * [AnimateParam](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#animateparam对象说明)的curve参数。
     * 
     * 默认值：Curve.Linear
     *
     * @default Curve.Linear
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    curve?: Curve | string | ICurve;
    /**
     * 动画延迟时长。
     * 
     * 单位：毫秒
     * 
     * 默认值：0
     * 
     * **说明：** 
     * 
     * 没有匹配时使用系统默认的页面转场效果(根据设备可能会有差异)，如需禁用系统默认页面转场效果，可以指定duration为0。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    delay?: int;
}
/**
 * 页面转场事件回调。
 *
 * @param { RouteType } type - transition route type
 * @param { double } progress - transition progess
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PageTransitionCallback = (type: RouteType, progress: double) => void;
/**
 * 设置当前页面的自定义入场动效。继承自[CommonTransition]{@link CommonTransition}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @noninterop
 * @since 23 static
 */
export declare class PageTransitionEnter extends CommonTransition {
    /**
     * 设置当前页面的自定义入场动效。
     *
     * @param { PageTransitionOptions } value - 配置入场动效的参数。
     * @returns { PageTransitionEnter }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @noninterop
     * @since 23 static
     */
    static $_invoke(value: PageTransitionOptions): PageTransitionEnter;
    /**
     * 逐帧回调，直到入场动画结束，progress从0变化到1。
     *
     * @param { PageTransitionCallback } event - 入场动画的逐帧回调直到入场动画结束，progress从0变化到1。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onEnter(event: PageTransitionCallback): this;
}
/**
 * 设置当前页面的自定义退场动效。继承自[CommonTransition]{@link CommonTransition}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @noninterop
 * @since 23 static
 */
export declare class PageTransitionExit extends CommonTransition {
    /**
     * 设置当前页面的自定义退场动效。
     *
     * @param { PageTransitionOptions } value - 配置退场动效的参数。
     * @returns { PageTransitionExit }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @noninterop
     * @since 23 static
     */
    static $_invoke(value: PageTransitionOptions): PageTransitionExit;
    /**
     * 逐帧回调，直到出场动画结束，progress从0变化到1。
     *
     * @param { PageTransitionCallback } event - 出场动画的逐帧回调直到出场动画结束，progress从0变化到1。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onExit(event: PageTransitionCallback): this;
}