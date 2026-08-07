/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { BaseEvent, SourceTool, Callback } from './common';
import { InteractionHand } from './enums';
import { VoidCallback, Coordinate2D } from "./units";
/**
 * 与SwipeDirection不同，PanDirection没有角度限制。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PanDirection {
    /**
     * 任何方向都不可触发滑动手势事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    None = 0,
    /**
     * 向左滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Left = 1,
    /**
     * 向右滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Right = 2,
    /**
     * 水平方向。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Horizontal = 3,
    /**
     * 向上滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Up = 4,
    /**
     * 向上或左滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    UP_LEFT = 5,
    /**
     * 向上或右滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    UP_RIGHT = 6,
    /**
     * 向上或水平滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    UP_HORIZONTAL = 7,
    /**
     * 向下滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Down = 8,
    /**
     * 向下或左滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DOWN_LEFT = 9,
    /**
     * 向下或右滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DOWN_RIGHT = 10,
    /**
     * 向下或水平滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DOWN_HORIZONTAL = 11,
    /**
     * 竖直方向。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Vertical = 12,
    /**
     * 竖直或左滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    VERTICAL_LEFT = 13,
    /**
     * 竖直或右滑动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    VERTICAL_RIGHT = 14,
    /**
     * 所有方向。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    All = 15
}
/**
 * 定义滑动手势的触发方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SwipeDirection {
    /**
     * 任何方向均不可触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    None,
    /**
     * 水平方向，手指滑动方向与x轴夹角小于45度时触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Horizontal,
    /**
     * 竖直方向，手指滑动方向与y轴夹角小于45度时触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Vertical,
    /**
     * 所有方向。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    All
}
/**
 * 定义手势组的识别模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GestureMode {
    /**
     * 顺序识别，根据注册顺序依次进行手势识别，直到所有手势识别成功。如果任一手势识别失败，则后续手势识别均无法完成。
     * 
     * 在顺序识别手势组中，仅最后一个手势能响应onActionEnd事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Sequence,
    /**
     * 并发识别，注册的手势同时识别，直到所有手势识别结束，手势识别互相不影响。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Parallel,
    /**
     * 互斥识别，注册的手势同时识别，若有一个手势识别成功，则结束手势识别，其他手势识别均失败。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Exclusive
}
/**
 * 定义是否屏蔽子组件手势。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GestureMask {
    /**
     * 不屏蔽子组件的手势，按照默认手势识别顺序进行识别。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Normal,
    /**
     * 屏蔽子组件的手势，包括子组件上系统内置的手势，如子组件为List组件时，内置的滑动手势同样会被屏蔽。 若父子组件区域存在部分重叠，则只会屏蔽父子组件重叠的部分。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IgnoreInternal
}
/**
 * 定义手势竞争结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GestureJudgeResult {
    /**
     * 不影响系统手势判定流程。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CONTINUE = 0,
    /**
     * 手势判定结果为失败。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    REJECT = 1
}
/**
 * Creating an Object
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare namespace GestureControl {
    /**
     * 定义手势类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enum GestureType {    
        /**
         * 点击手势。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        TAP_GESTURE = 0,
        /**
         * 长按手势。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        LONG_PRESS_GESTURE = 1,
        /**
         * 滑动手势。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        PAN_GESTURE = 2,
        /**
         * 捏合手势。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        PINCH_GESTURE = 3,
        /**
         * 快滑手势。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        SWIPE_GESTURE = 4,
        /**
         * 旋转手势。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        ROTATION_GESTURE = 5,
        /**
         * 拖拽。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        DRAG = 6,
        /**
         * 点击。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        CLICK = 7,
        /**
         * 滚动类容器鼠标框选手势，是一种特殊的滑动手势，用于在滚动容器中通过鼠标拖拽创建选择区域，批量选择多个元素。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        BOX_SELECT_GESTURE = 8,
        /**
         * Web组件滚动手势，是一种特殊的滑动手势，用于控制Web组件内的滚动行为。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        WEB_SCROLL_GESTURE = 9,
        /**
         * 文本选择手势，是一种特殊的滑动手势，用于在输入框组件中通过拖拽选择文本内容。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        TEXT_FIELD_SELECT_GESTURE = 10,
        /**
         * 上下文菜单悬停手势是一种特殊的长按手势，用于在长按过程中触发菜单的hoverScale动画效果
         * （需启用[ContextMenuAnimationOptions]{@link CommonMethod.ContextMenuAnimationOptions}的
         * hoverScaleInterruption属性以支持该行为）。
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @stagemodelonly
         * @since 23 static
         */
        CONTEXT_MENU_HOVER_GESTURE = 11
    }
}
/**
 * 手势信息类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GestureInfo {
    /**
     * 手势标志。
     * 
     * **说明：**
     * 
     * 未设置事件标志tag属性时，tag不返回或返回undefined。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tag?: string;
    /**
     * 手势类型。
     * 
     * **说明：**
     * 
     * 当手势为未暴露类型的系统内置手势事件时，type的值为-1。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: GestureControl.GestureType;
    /**
     * 当前手势是否为组件自带手势。true表示是，false表示否。
     * 
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isSystemGesture: boolean;
}
/**
 * 用于点击手势获取点击位置坐标。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EventLocationInfo {
    /**
     * 相对于组件左上角的X坐标。
     * 
     * 取值范围：[0, +∞) 
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;
    /**
     * 相对于组件左上角的Y坐标。
     * 
     * 取值范围：[0, +∞) 
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    /**
     * 相对于窗口的左上角X坐标。
     * 
     * 取值范围：[0, +∞) 
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowX: double;
    /**
     * 相对于窗口的左上角Y坐标。
     * 
     * 取值范围：[0, +∞) 
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowY: double;
    /**
     * 相对于屏幕的左上角X坐标。
     * 
     * 取值范围：[0, +∞) 
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 相对于屏幕的左上角Y坐标。
     * 
     * 取值范围：[0, +∞) 
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的X坐标。
     * 
     * 取值范围：[0, +∞) 
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 在[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)中的Y坐标。
     * 
     * 取值范围：[0, +∞) 
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
    /**
     * 获取点击位置相对于当前组件实时位置的左上角坐标。
     *
     * @returns { Coordinate2D } 获取点击位置相对于当前组件实时位置的左上角坐标。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * 手指信息类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FingerInfo {
    /**
     * 手指的索引编号，由按下手指的数量决定，按下一根手指为0，之后每按下1根手指索引编号加一。
     * 
     * **说明：**
     * 
     * 鼠标（索引编号为1001）、手写笔（索引编号为102）、鼠标滚轮（索引编号为0）、触摸板双指滑动（索引编号为0）的索引编号也会被转化为手指的索引编号。
     * 
     * 取值范围：[0, 9)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: int;
    /**
     * 相对于全局屏幕的左上角的X坐标，单位为vp。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayX?: double;

    /**
     * 相对于全局屏幕的左上角的Y坐标，单位为vp。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    globalDisplayY?: double;
    /**
     * 相对于应用窗口左上角的x轴坐标，单位为vp。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    globalX: double;
    /**
     * 相对于应用窗口左上角的y轴坐标，单位为vp。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    globalY: double;
    /**
     * 相对于当前组件元素原始区域左上角的x轴坐标，单位为vp。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    localX: double;
    /**
     * 相对于当前组件元素原始区域左上角的y轴坐标，单位为vp。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    localY: double;
    /**
     * 相对于屏幕左上角的x轴坐标，单位为vp。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayX: double;
    /**
     * 相对于屏幕左上角的y轴坐标，单位为vp。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    displayY: double;
    /**
     * 表示事件是由左手点击还是右手点击触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hand?: InteractionHand;
    /**
     * 获取手指位置相对于当前组件实时位置的左上角坐标。
     *
     * @returns { Coordinate2D } 获取手指位置相对于当前组件实时位置的左上角坐标。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default getCurrentLocalPosition(): Coordinate2D;
}
/**
 * 定义手势类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type GestureType = Gesture | GestureGroup;
/**
 * 基础手势事件类型。继承自[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BaseGestureEvent extends BaseEvent {
    /**
     * 触发事件的所有手指信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingerList: FingerInfo[];
    /**
     * 参与触发事件的所有有效触点信息。默认值为空数组[]，返回空数组时，表示当前无有效触点信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingerInfos?: FingerInfo[];
}
/**
 * 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod.onGestureJudgeBegin}的
 * event参数来传递。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface TapGestureEvent extends BaseGestureEvent {
    /**
     * 获取点击手势的坐标信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tapLocation?: EventLocationInfo;
}
/**
 * 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod.onGestureJudgeBegin}的
 * event参数来传递。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface LongPressGestureEvent extends BaseGestureEvent {
    /**
     * 是否为重复触发事件。true表示为重复触发事件，false表示非重复触发事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeat: boolean;
}
/**
 * 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod.onGestureJudgeBegin}的
 * event参数来传递。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PanGestureEvent extends BaseGestureEvent {
    /**
     * 手势事件x轴相对当前组件元素原始区域的偏移量，单位为vp，从左向右滑动offsetX为正，反之为负。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetX: double;
    /**
     * 手势事件y轴相对当前组件元素原始区域的偏移量，单位为vp，从上向下滑动offsetY为正，反之为负。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetY: double;
    /**
     * 获取当前手势的x轴方向速度。坐标轴原点为屏幕左上角，分正负方向速度，从左往右为正，反之为负。单位为vp/s。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    velocityX: double;
    /**
     * 获取当前手势的y轴方向速度。坐标轴原点为屏幕左上角，分正负方向速度，从上往下为正，反之为负。单位为vp/s。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    velocityY: double;
    /**
     * 获取当前的主方向速度。为xy轴方向速度的平方和的算术平方根。单位为vp/s。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    velocity: double;
}
/**
 * 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod.onGestureJudgeBegin}的
 * event参数来传递。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PinchGestureEvent extends BaseGestureEvent {
    /**
     * 缩放比例。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale: double;
    /**
     * 捏合手势中心点相对于当前组件元素原始区域左上角x轴坐标，单位为vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pinchCenterX: double;
    /**
     * 捏合手势中心点相对于当前组件元素原始区域左上角y轴坐标，单位为vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pinchCenterY: double;
}
/**
 * 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod.onGestureJudgeBegin}的
 * event参数来传递。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RotationGestureEvent extends BaseGestureEvent {
    /**
     * 表示旋转角度，单位为deg。
     * 
     * **说明：**
     * 
     * 角度计算方式：当滑动手势被识别后，连接两根手指之间的线被识别为起始线条。随着手指的滑动，手指之间的线条会发生旋转。根据起始线条和当前线条两端点的坐标，使用反正切函数分别计算其相对于水平方向的夹角。
     * 
     * 最终的旋转角度为：arctan2(cy2-cy1, cx2-cx1) - arctan2(y2-y1, x2-x1) 
     * 
     * 在起始线条为坐标系的情况下，顺时针旋转为0到180度，逆时针旋转为0到-180度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle: double;
}
/**
 * 继承自[BaseGestureEvent]{@link BaseGestureEvent}。可将该对象作为[onGestureJudgeBegin]{@link CommonMethod.onGestureJudgeBegin}的
 * event参数来传递。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface SwipeGestureEvent extends BaseGestureEvent {
    /**
     * 表示快滑手势的角度，即手指滑动的瞬时方向与水平正方向的夹角，单位为deg。
     * 
     * **说明：**
     * 
     * 以水平正方向为基准，滑动方向位于水平正方向顺时针侧时，角度范围为0到180度；位于水平正方向逆时针侧时，角度范围为0到-180度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle: double;
    /**
     * 快滑手势速度，即所有手指相对当前组件元素原始区域滑动的平均速度，单位为vp/s。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    speed: double;
}
/**
 * 定义手势的事件信息。继承自[BaseEvent]{@link BaseEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface GestureEvent extends BaseEvent {
    /**
     * 是否为重复触发事件，用于LongPressGesture手势触发场景。true表示重复触发事件，false表示非重复触发事件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeat: boolean;
    /**
     * 输入源为触屏产生的手势，fingerList中会包含触发事件的所有触点信息；由鼠标发起的手势，fingerList中只会有一条记录；触摸板的事件大类与鼠标一致，所以由触摸板发起的手势，fingerList只会携带一条记录。
     * 
     * **说明：**
     * 
     * 1. 手指索引编号与位置对应，即fingerList[index]的id为index。先按下且未参与当前手势触发的手指在fingerList中对应位置为空。
     * 2. 当使用键盘或手柄触发手势时，不存在手指信息，fingerList为空。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingerList: FingerInfo[];
    /**
     * 由触屏产生的手势，fingerInfos中会包含触发事件的所有触点信息；由鼠标发起的手势，fingerInfos中只会有一条记录；触摸板的事件大类与鼠标一致，所以由触摸板发起的手势，fingerInfos只会携带一条记录。
     * 
     * **说明：**
     * 
     * fingerInfos只会记录参与触摸的有效手指信息，先按下但未参与当前手势触发的手指在fingerInfos中不会显示。默认值为空数组[]，返回空数组时，表示当前无有效触点信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingerInfos?: FingerInfo[];
    /**
     * 手势事件相对于手指按下时的偏移量X，单位为vp，用于PanGesture手势触发场景，从左向右滑动offsetX为正，反之为负。
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetX: double;
    /**
     * 手势事件相对于手指按下时的偏移量Y，单位为vp，用于PanGesture手势触发场景，从上向下滑动offsetY为正，反之为负。
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetY: double;
    /**
     * 用于RotationGesture手势触发场景时，表示旋转角度。
     * 
     * 用于SwipeGesture手势触发场景时，表示快滑手势的角度，即两根手指间的线段与水平方向的夹角变化的度数。
     * 
     * **说明：**
     * 
     * 角度计算方式：快滑手势被识别到后，连接两根手指之间的线被识别为起始线条，随着手指的滑动，手指之间的线条会发生旋转，根据起始线条两端点和当前线条两端点的坐标，使用反正切函数分别计算其相对于水平方向的夹角，最后arctan2(cy
     * 2-cy1,cx2-cx1)-arctan2(y2-y1,x2-x1)为旋转的角度。以起始线条为坐标系，顺时针旋转为0到180度，逆时针旋转为-180到0度。
     * 
     * 取值范围：[-180,  +180]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle: double;
    /**
     * 快滑手势速度，即所有手指相对当前组件元素原始区域滑动的平均速度，单位为vp/s，用于SwipeGesture手势触发场景。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    speed: double;
    /**
     * 缩放比例，用于PinchGesture手势触发场景。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale: double;
    /**
     * 捏合手势中心点相对于当前组件元素原始区域左上角的x轴坐标，单位为vp，用于PinchGesture手势触发场景。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pinchCenterX: double;
    /**
     * 捏合手势中心点相对于当前组件元素原始区域左上角的y轴坐标，单位为vp，用于PinchGesture手势触发场景。
     * 
     * 取值范围：[0, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pinchCenterY: double;
    /**
     * 用于[PanGesture]{@link ./common}手势中，获取当前手势的x轴方向速度。坐标轴原点为屏幕左上角，分正负方向速度，从左往右为正，反之为负。单位为vp/s。
     * 
     * 取值范围：(-∞,  +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    velocityX: double;
    /**
     * 用于[PanGesture]{@link ./common}手势中，获取当前手势的y轴方向速度。坐标轴原点为屏幕左上角，分正负方向速度，从上往下为正，反之为负。单位为vp/s。
     * 
     * 取值范围：(-∞,  +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    velocityY: double;
    /**
     * 用于[PanGesture]{@link ./common}手势中，获取当前手势的主方向速度。为xy轴方向速度的平方和的算术平方根。单位为vp/s。
     * 
     * 取值范围：[0,  +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    velocity: double;
    /**
     * 用于点击手势中，获取当前手势的坐标信息。在非点击手势中，tapLocation返回值为undefined。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tapLocation?: EventLocationInfo;
}
/**
 * 基础手势处理器配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BaseHandlerOptions {
    /**
     * 是否检查触摸屏幕的手指数量。true表示检查触摸屏幕的手指数量，false表示不检查触摸屏幕的手指数量。
     * 
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isFingerCountLimited?: boolean;
}
/**
 * 定义Gesture接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Gesture {
    /**
     * 设置手势的标志。
     *
     * @param { string } tag - 手势的标志。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tag(tag: string): this;
    /**
     * 设置手势响应的输入类型。
     *
     * @param { Array<SourceTool> } types - 手势响应的输入类型。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    allowedTypes(types: Array<SourceTool>): this;
}
/**
 * > **说明：**
 * >
 * > 点击手势参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TapGestureParameters extends BaseHandlerOptions {
    /**
     * 识别的连续点击次数。当设置的值小于1或不设置时，会被转化为默认值。
     * 
     * 默认值：1
     * 
     * 取值范围：[0, +∞)
     * 
     * **说明：**
     * 
     * 1. 当配置多击时，上一次的最后一根手指抬起和下一次的第一根手指按下的超时时间为300毫秒。
     * 2. 当上次点击的位置与当前点击的位置距离超过60vp时，手势识别失败。在多指情况下，点击的位置为所有参与手势响应手指的平均位置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    count?: int;
    /**
     * 触发点击的手指数，最小为1指， 最大为10指。当设置小于1的值或不设置时，会被转化为默认值。
     * 
     * 默认值：1
     * 
     * **说明：**
     * 
     * 1. 当配置多指时，第一根手指按下后300毫秒内未有足够的手指数按下，手势识别失败；手指抬起时，抬起后剩余的手指数小于阈值时开始计时，如300ms内未全部抬起则手势识别失败。
     * 2. 实际点击手指数超过配置值，手势识别成功。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingers?: int;
    /**
     * 点击手势移动阈值。当设置的值小于等于0或不设置时，会被转化为默认值。
     * 
     * 默认值：2³¹-1
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 当手指的移动距离超出开发者预设的移动阈值时，点击识别失败。如果初始化为默认阈值时，手指移动超过组件热区范围，点击识别失败。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    distanceThreshold?: double;
}
/**
 * 支持单击、双击和多次点击事件的识别。
 * 
 * > **说明：**
 * >
 * > 当组件同时绑定双击和单击手势且双击手势先绑定时，单击手势会有300ms的延时。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TapGesture extends Gesture {
    /**
     * 创建点击手势对象。继承自[Gesture]{@link Gesture}。
     * 
     * 触发点击手势事件的设备类型为键盘或手柄时，事件的[SourceTool]{@link SourceTool}值为Unknown，事件的[SourceType]{@link SourceType}值为KEY或JOYSTICK。
     *
     * @param { function } factory
     * @param { TapGestureParameters } [value] - 点击手势的相关参数。
     * @returns { TapGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static $_instantiate(factory: () => TapGesture, value?: TapGestureParameters): TapGesture;
    /**
     * 点击手势识别成功回调。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
}
/**
 * 用于触发长按手势事件，触发长按手势的最少手指数为1，默认最短长按时间为500毫秒。可配置duration参数控制最短长按时长。
 * 
 * > **说明：**
 * >
 * > 部分设备会优先响应系统的双指长按手势，导致应用的双指长按手势不生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LongPressGesture extends Gesture {
    /**
     * 创建长按手势对象。
     *
     * 当组件默认支持可拖拽时，如Text、TextInput、TextArea、HyperLink、Image和RichEditor等组件。长按手势与拖拽会出现冲突，事件优先级如下：
     * 
     * 当长按触发时间小于500毫秒时，系统优先响应长按事件而非拖拽事件。
     * 
     * 当长按触发时间达到或超过500毫秒时，系统优先响应拖拽事件而非长按事件。
     *
     * @param { function } factory
     * @param { LongPressGestureHandlerOptions } [value]
     * @returns { LongPressGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static $_instantiate(factory: () => LongPressGesture, value?: LongPressGestureHandlerOptions): LongPressGesture;
    /**
     * 设置长按手势识别成功回调。
     *
     * @param { Callback<GestureEvent> } event - 长按手势识别成功回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
    /**
     * 设置长按手势结束回调。长按手势识别成功后，最后一根手指抬起时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 长按手势结束回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * 设置长按手势取消回调。长按手势识别成功后，接收到触摸取消事件时触发回调。不返回手势事件信息。
     *
     * @param { Callback<GestureEvent> } event - 长按手势取消回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * 定义PanGesture配置参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PanGestureOptions {
    /**
     * 创建滑动手势配置参数对象。通过PanGestureOptions对象接口可以动态修改滑动手势的属性，从而避免通过状态变量修改属性（状态变量修改会导致UI刷新）。
     *
     * @param { PanGestureHandlerOptions } [value] - 滑动手势配置参数对象。<br/>fingers用于指定触发滑动的最少手指数，最小为1指， 最大取值为10指。<br/>默认值：1
     *     <br/>direction用于指定触发滑动的手势方向，此枚举值支持逻辑与(&)和逻辑或（|）运算。<br/>默认值：PanDirection.All<br/>distance用于指定触发滑动手势事件的最小滑动距离，单位
     *     为vp。<br/>手写笔默认值：8，其余输入源默认值：5<br/>**说明：**<br/>[Tabs]{@link ./common}组件滑动与该滑动手势事件同时存在时，可将distance值设为1，使滑动更灵敏，避免
     *     造成事件错乱。<br/>当设定的值小于0时，按默认值处理。<br/>建议设置合理的滑动距离，滑动距离设置过大时会导致滑动不跟手（响应时延慢）的问题。<br/>当组件应用了
     *     [scale]{@link CommonMethod.scale}缩放变换时，distance的实际识别距离会按照scale比例进行缩放。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(value?: PanGestureHandlerOptions);
    /**
     * 设置滑动方向。
     *
     * @param { PanDirection } value - 用于指定触发滑动的手势方向，此枚举值支持逻辑与(&)和逻辑或（|）运算。<br/>默认值：PanDirection.All
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setDirection(value: PanDirection): void;
    /**
     * 设置触发滑动手势事件的最小滑动距离，单位为vp。距离值不宜设置过大，避免因滑动脱手、响应时延过大等问题导致性能劣化，最佳实践请参考：
     * [减小拖动识别距离](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-latency-optimization-cases#section1116134115286)。
     *
     * @param { double } value - 触发滑动手势事件的最小滑动距离，单位为vp。<br/>手写笔默认值：8，其余输入源默认值：5<br/>**说明：**<br/>[Tabs组件]{@link ./common}
     *     滑动与该滑动手势事件同时存在时，可将distance值设为1，使滑动更灵敏，避免造成事件错乱。<br/>当设定的值小于0时，按默认值处理。<br/>建议设置合理的滑动距离，滑动距离设置过大时会导致滑动不跟手
     *     （响应时延慢）的问题。<br/>当组件应用了[scale]{@link CommonMethod.scale}缩放变换时，distance的实际识别距离会按照scale比例进行缩放。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setDistance(value: double): void;
    /**
     * 设置触发滑动的最少手指数。
     *
     * @param { int } value - 触发滑动的最少手指数，最小为1指， 最大取值为10指。<br/>默认值：1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setFingers(value: int): void;
    /**
     * 获取滑动方向。
     *
     * @returns { PanDirection } 滑动方向。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDirection(): PanDirection;
    /**
     * 获取触发滑动手势事件的最小滑动距离，单位为vp。
     *
     * @returns { double } 滑动手势事件的最小滑动距离。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDistance(): double;
}
/**
 * 滑动手势事件，当滑动的最小距离达到设定的最小值时触发滑动手势事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PanGesture extends Gesture {
    /**
     * 创建滑动手势对象。继承自[Gesture]{@link Gesture}。
     *
     * @param { function } factory
     * @param { PanGestureHandlerOptions | PanGestureOptions } [value] - 滑动手势处理器配置参数。
     * @returns { PanGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static $_instantiate(factory: () => PanGesture, value?: PanGestureHandlerOptions | PanGestureOptions): PanGesture;
    /**
     * 设置滑动手势识别成功回调。
     *
     * @param { Callback<GestureEvent> } event - 滑动手势识别成功回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * 设置滑动手势更新回调。fingerList为多根手指时，该回调监听每次只会更新一根手指的位置信息。
     *
     * @param { Callback<GestureEvent> } event - 滑动手势更新回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * 设置滑动手势结束回调。滑动手势识别成功后，手指抬起时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 滑动手势结束回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * 设置滑动手势取消回调。滑动手势识别成功后，接收到触摸取消事件时触发回调。返回手势事件信息。
     *
     * @param { Callback<GestureEvent> } event - 滑动手势取消回调。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * 用于触发快滑手势，滑动速度需大于速度阈值，默认最小速度为100vp/s。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SwipeGesture extends Gesture {
    /**
     * 设置快滑手势事件。继承自[Gesture]{@link Gesture}。
     *
     * @param { function } factory
     * @param { SwipeGestureHandlerOptions } [value] - 快滑事件处理器配置参数。
     * @returns { SwipeGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static $_instantiate(factory: () => SwipeGesture, value?: SwipeGestureHandlerOptions): SwipeGesture;
    /**
     * Swipe手势识别成功时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
}
/**
 * 用于触发捏合手势，最少需要2指，最多5指，最小识别距离为5vp。在支持鼠标和键盘输入的设备上，通过“Ctrl+鼠标滚轮”也可以触发捏合手势。
 * 
 * > **说明：**
 * >
 * > 捏合手势触发成功后，抬起手指直至不再满足触发条件。再次满足条件时，可重新触发捏合手势。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PinchGesture extends Gesture {
    /**
     * 设置捏合手势事件。继承自[Gesture]{@link Gesture}。
     *
     * @param { function } factory
     * @param { PinchGestureHandlerOptions } [value] - 捏合手势处理器配置参数。
     * @returns { PinchGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static $_instantiate(factory: () => PinchGesture, value?: PinchGestureHandlerOptions): PinchGesture;
    /**
     * Pinch手势识别成功后触发回调。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * Pinch手势移动过程中回调。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * Pinch手势识别成功，当抬起最后一根满足手势触发条件的手指后，触发回调。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * Pinch手势识别成功并接收到触摸取消事件的回调。与[onActionCancel]{@link PinchGesture#onActionCancel}相比，该回调返回手势事件信息。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * 用于触发旋转手势，最少需要2指，最多5指，最小改变度数为1度。该手势不支持通过触控板双指旋转操作触发。
 * 
 * > **说明：**
 * >
 * > - 从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RotationGesture extends Gesture {
    /**
     * 设置旋转手势事件。继承自[Gesture]{@link Gesture}。
     *
     * @param { function } factory
     * @param { RotationGestureHandlerOptions } [value] - 旋转手势处理器配置参数。
     * @returns { RotationGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static $_instantiate(factory: () => RotationGesture, value?: RotationGestureHandlerOptions): RotationGesture;
    /**
     * Rotation手势识别成功后触发的回调。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * Rotation手势移动过程中触发的回调。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * Rotation手势识别成功，当抬起最后一根满足手势触发条件的手指后触发的回调。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * Rotation手势识别成功，接收到触摸取消事件触发的回调。与[onActionCancel]{@link RotationGesture#onActionCancel}相比，该回调返回手势事件信息。
     *
     * @param { Callback<GestureEvent> } event - 手势事件回调函数。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * 手势识别组合，即两种及以上手势组合为复合手势，支持顺序识别、并发识别和互斥识别。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class GestureGroup {
    /**
     * 设置组合手势事件。
     *
     * @param { function } factory
     * @param { GestureMode } mode - 设置组合手势识别模式。<br/>默认值：GestureMode.Sequence
     * @param { GestureType[] } gesture - 设置一个或者多个基础手势类型时，这些手势会被识别为组合手势。
     *     若此参数不填则组合手势识别功能不生效。<br/>**说明：**<br/>当需要为一个组件同时添加单击和双击手势时，可在组合手势中添加两个[TapGesture]{@link TapGesture}，
     *     需要双击手势在前，单击手势在后，否则不生效。
     * @returns { GestureGroup }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    static $_instantiate(factory: () => GestureGroup, mode: GestureMode, ...gesture: GestureType[]): GestureGroup;
    /**
     * 手势识别成功，接收到触摸取消事件，触发回调。
     *
     * @param { VoidCallback } event - 手势事件回调函数。
     * @returns { GestureGroup }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onCancel(event: VoidCallback): GestureGroup;
}
/**
 * 手势处理器的基础类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class GestureHandler {
    /**
     * 设置手势处理器的标志。
     *
     * @param { string } tag - 手势处理器的标志。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    tag(tag: string): this;
    /**
     * 设置手势处理器所支持的事件输入源。
     *
     * @param { Array<SourceTool> } types - 手势处理器所支持的事件输入源。
     * @returns { this } 返回当前组件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    allowedTypes(types: Array<SourceTool>): this;
}
/**
 * 点击手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface TapGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * 识别的连续点击次数。当设置的值小于1或不设置时，会被转化为默认值。
     * 
     * 默认值：1
     * 
     * 取值范围：[0, +∞)
     * 
     * **说明：**
     * 
     * 1. 当配置多击时，上一次的最后一根手指抬起和下一次的第一根手指按下的超时时间为300毫秒。
     * 2. 当上次点击的位置与当前点击的位置距离超过60vp时，手势识别失败。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    count?: int;
    /**
     * 触发点击的手指数，最小为1指， 最大为10指。当设置小于1的值或不设置时，会被转化为默认值。
     * 
     * 默认值：1
     * 
     * **说明：**
     * 
     * 1. 当配置多指时，第一根手指按下后300毫秒内未有足够的手指数按下，手势识别失败，第一根手指抬起后300毫秒内未有足够的手指抬起，手势识别失败。
     * 2. 实际点击手指数超过配置值，手势识别成功。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingers?: int;
    /**
     * 点击手势移动阈值。当设置的值小于等于0或不设置时，会被转化为默认值。
     * 
     * 默认值：2^31-1
     * 
     * 单位：vp
     * 
     * **说明：**
     * 
     * 当手指的移动距离超出开发者预设的移动阈值时，点击识别失败。如果初始化为默认阈值时，手指移动超过组件热区范围，点击识别失败。
     *
     * @default Infinity
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    distanceThreshold?: double;
}
/**
 * 点击手势处理器对象类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TapGestureHandler extends GestureHandler {
    /**
     * 点击手势处理器的构造函数。
     *
     * @param { TapGestureHandlerOptions } [options] - 点击手势处理器配置参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: TapGestureHandlerOptions);
    /**
     * 设置点击手势处理器识别成功回调。
     *
     * @param { Callback<GestureEvent> } event - 点击手势处理器识别成功回调。
     * @returns { this } 返回当前点击手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
}
/**
 * 长按手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface LongPressGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * 触发长按的最少手指数，最小为1指， 最大取值为10指。
     * 
     * 默认值：1 
     * 
     * 取值范围：[1, 10]
     * 
     * **说明：** 
     * 
     * 手指按下后若发生超过15px的移动，则判定当前长按手势识别失败。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingers?: int;
    /**
     * 是否连续触发事件回调。true表示为连续触发事件回调，false表示不连续触发事件回调。
     * 
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    repeat?: boolean;
    /**
     * 触发长按的最短时间，单位为毫秒（ms）。
     * 
     * 默认值：500 
     * 
     * **说明：** 
     * 
     * 取值范围：[0, +∞)，设置小于等于0时，按照默认值500处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration?: int;
    /**
     * 长按手势识别器识别的手势的最大移动距离，单位为px。
     * 
     * 默认值：15 
     * 
     * 取值范围：(0, +∞)，设置小于等于0时，按照默认值15处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    allowableMovement?: double;
}
/**
 * 长按手势处理器对象类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LongPressGestureHandler extends GestureHandler {
    /**
     * 长按手势处理器的构造函数。
     *
     * @param { LongPressGestureHandlerOptions } [options] - 长按手势处理器配置参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: LongPressGestureHandlerOptions);
    /**
     * 设置长按手势处理器识别成功回调。
     *
     * @param { Callback<GestureEvent> } event - 长按手势处理器识别成功回调。
     * @returns { this } 返回当前长按手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
    /**
     * 设置长按手势处理器结束回调。长按手势处理器识别成功后，最后一根手指抬起时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 长按手势处理器结束回调。
     * @returns { this } 返回当前长按手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * 设置长按手势处理器取消回调。长按手势处理器识别成功后，接收到触摸取消事件时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 长按手势处理器取消回调。该回调会返回手势事件信息。
     * @returns { this } 返回当前长按手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * 滑动手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PanGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * 用于指定触发拖动的最少手指数，最小为1指， 最大取值为10指。
     * 
     * 默认值：1
     * 
     * 取值范围：[1, 10]
     * 
     * **说明：** 
     * 
     * 当设置的值小于1或不设置时，会被转化为默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingers?: int;
    /**
     * 用于指定触发拖动的手势方向，此枚举值支持逻辑与(&)和逻辑或（|）运算。
     * 
     * 默认值：PanDirection.All
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction?: PanDirection;
    /**
     * 用于指定触发滑动手势事件的最小拖动距离，单位为vp。
     * 
     * 手写笔默认值：8，其余输入源默认值：5
     * 
     * **说明：**
     * 
     * [Tabs组件]{@link ./common}滑动与该滑动手势事件同时存在时，可将distance值设为1，使拖动更灵敏，避免造成事件错乱。
     * 
     * 取值范围：[0, +∞)，当设定的值小于0时，按默认值处理。
     * 
     * 从API version 19开始，手写笔默认值为8，单位为vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    distance?: double;
    /**
     * 用于指定不同输入源触发滑动手势事件的最小拖动距离，单位为vp。
     * 
     * 手写笔默认值：8，其余输入源默认值：5
     * 
     * 取值范围：[0, +∞)，当设定的值小于0时，按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    distanceMap?: Map<SourceTool, double>;
}
/**
 * 滑动手势处理器对象类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PanGestureHandler extends GestureHandler {
    /**
     * 滑动手势处理器的构造函数。
     *
     * @param { PanGestureHandlerOptions } [options] - 滑动手势处理器配置参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: PanGestureHandlerOptions);
    /**
     * 设置滑动手势处理器识别成功回调。
     *
     * @param { Callback<GestureEvent> } event - 滑动手势处理器识别成功回调。
     * @returns { this } 返回当前滑动手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * 设置滑动手势处理器更新回调。滑动手势处理器移动过程中触发回调。
     *
     * @param { Callback<GestureEvent> } event - 滑动手势处理器更新回调。<br/>fingerList为多根手指时，该回调监听每次只会更新一根手指的位置信息。
     * @returns { this } 返回当前滑动手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * 设置滑动手势处理器结束回调。滑动手势处理器识别成功后，手指抬起时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 滑动手势处理器结束回调。
     * @returns { this } 返回当前滑动手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * 设置滑动手势处理器取消回调。滑动手势处理器识别成功后，接收到触摸取消事件时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 滑动手势处理器取消回调。返回手势事件信息。
     * @returns { this } 返回当前滑动手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * 快滑手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface SwipeGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * 触发快滑的最少手指数，默认为1，最小为1指，最大为10指。
     * 
     * 默认值：1 
     * 
     * 取值范围：[1, 10]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingers?: int;
    /**
     * 触发快滑手势的滑动方向。
     * 
     * 默认值：SwipeDirection.All
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction?: SwipeDirection;
    /**
     * 识别快滑的最小速度。
     * 
     * 默认值：100VP/s 
     * 
     * **说明：** 
     * 
     * 当滑动速度的值小于等于0时，会被转化为默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    speed?: double;
}
/**
 * 快滑手势处理器对象类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SwipeGestureHandler extends GestureHandler {
    /**
     * 快滑手势处理器的构造函数。
     *
     * @param { SwipeGestureHandlerOptions } [options] - 快滑手势处理器配置参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: SwipeGestureHandlerOptions);
    /**
     * 设置快滑手势处理器识别成功回调。
     *
     * @param { Callback<GestureEvent> } event - 快滑手势处理器识别成功回调。
     * @returns { this } 返回当前快滑手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAction(event: Callback<GestureEvent>): this;
}
/**
 * 捏合手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PinchGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * 触发捏合的最少手指数，最小为2指，最大为5指。
     * 
     * 默认值：2 
     * 
     * 取值范围：[2, 5]
     * 
     * 触发手势手指可以多于fingers数目，但只有先落下的与fingers相同数目的手指参与手势计算。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingers?: int;
    /**
     * 最小识别距离，单位为vp。
     * 
     * 默认值：5 
     * 
     * **说明：** 
     * 
     * 当识别距离的值小于等于0时，会被转化为默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    distance?: double;
}
/**
 * 捏合手势处理器对象类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PinchGestureHandler extends GestureHandler {
    /**
     * 捏合手势处理器的构造函数。
     *
     * @param { PinchGestureHandlerOptions } [options] - 捏合手势处理器配置参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: PinchGestureHandlerOptions);
    /**
     * 设置捏合手势处理器识别成功回调。
     *
     * @param { Callback<GestureEvent> } event - 捏合手势处理器识别成功回调。
     * @returns { this } 返回当前捏合手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * 设置捏合手势处理器更新回调。捏合手势处理器移动过程中触发回调。
     *
     * @param { Callback<GestureEvent> } event - 捏合手势处理器更新回调。
     * @returns { this } 返回当前捏合手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * 设置捏合手势处理器结束回调。捏合手势处理器识别成功后，手指抬起时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 捏合手势处理器结束回调。
     * @returns { this } 返回当前捏合手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * 设置捏合手势处理器取消回调。捏合手势处理器识别成功后，接收到触摸取消事件时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 捏合手势处理器取消回调。返回手势事件信息。
     * @returns { this } 返回当前捏合手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * 旋转手势处理器配置参数。继承自[BaseHandlerOptions]{@link BaseHandlerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RotationGestureHandlerOptions extends BaseHandlerOptions {
    /**
     * 触发旋转的最少手指数，最小为2指，最大为5指。
     * 
     * 默认值：2 
     * 
     * 取值范围：[2, 5]
     * 
     * 触发手势时手指数量可以多于fingers参数值，但仅最先落下的两指参与手势计算。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fingers?: int;
    /**
     * 触发旋转手势的最小改变度数，单位为deg。
     * 
     * 默认值：1 
     * 
     * **说明：** 
     * 
     * 当改变度数的值小于等于0或大于360时，会被转化为默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle?: double;
}
/**
 * 旋转手势处理器对象类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RotationGestureHandler extends GestureHandler {
    /**
     * 旋转手势处理器的构造函数。
     *
     * @param { RotationGestureHandlerOptions } [options] - 旋转手势处理器配置参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: RotationGestureHandlerOptions);
    /**
     * 设置旋转手势处理器识别成功回调。
     *
     * @param { Callback<GestureEvent> } event - 旋转手势处理器识别成功回调。
     * @returns { this } 返回当前旋转手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionStart(event: Callback<GestureEvent>): this;
    /**
     * 设置旋转手势处理器更新回调。旋转手势处理器移动过程中触发回调。
     *
     * @param { Callback<GestureEvent> } event - 旋转手势处理器更新回调。
     * @returns { this } 返回当前旋转手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionUpdate(event: Callback<GestureEvent>): this;
    /**
     * 设置旋转手势处理器结束回调。旋转手势处理器识别成功后，手指抬起时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 旋转手势处理器结束回调。
     * @returns { this } 返回当前旋转手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionEnd(event: Callback<GestureEvent>): this;
    /**
     * 设置旋转手势处理器取消回调。旋转手势处理器识别成功后，接收到触摸取消事件时触发回调。
     *
     * @param { Callback<GestureEvent> } event - 旋转手势处理器取消回调。返回手势事件信息。
     * @returns { this } 返回当前旋转手势处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onActionCancel(event: Callback<GestureEvent>): this;
}
/**
 * 手势组处理器配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface GestureGroupGestureHandlerOptions {
    /**
     * 设置组合手势识别模式。
     * 
     * 默认值：GestureMode.Sequence
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    mode: GestureMode;
    /**
     * 设置手势组中需要包含的手势集合。
     * 
     * **说明：**  
     * 
     * 当需要为一个组件同时添加单击和双击手势时，可在[GestureGroup]{@link ./common}中添加两个[TapGesture]{@link ./common}，需要双击手势在前，单击手势在后，否则不生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    gestures: GestureHandler[];
}
/**
 * 手势组处理器对象类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class GestureGroupHandler extends GestureHandler {
    /**
     * 手势组处理器的构造函数。
     *
     * @param { GestureGroupGestureHandlerOptions } [options] - 手势组处理器配置参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: GestureGroupGestureHandlerOptions);
    /**
     * 设置手势组处理器取消回调。顺序组合手势（[GestureMode]{@link GestureMode}.Sequence）取消后触发回调。
     *
     * @param { VoidCallback } event - 手势组处理器取消回调。
     * @returns { this } 返回当前手势组处理器对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onCancel(event: VoidCallback): this;
}
/**
 * 绑定手势的优先级。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GesturePriority {
    /**
     * 普通优先级手势。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NORMAL = 0,
    /**
     * 高优先级手势。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PRIORITY = 1
}
/**
 * 定义手势识别器状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GestureRecognizerState {
    /**
     * 准备状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    READY = 0,
    /**
     * 检测状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    DETECTING = 1,
    /**
     * 等待状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PENDING = 2,
    /**
     * 阻塞状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BLOCKED = 3,
    /**
     * 成功状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SUCCESSFUL = 4,
    /**
     * 失败状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    FAILED = 5
}
/**
 * 手势识别器对应的滚动类容器组件的信息，继承于[EventTargetInfo]{@link EventTargetInfo}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ScrollableTargetInfo extends EventTargetInfo {
    /**
     * 返回当前滚动类容器组件是否在顶部，如果为Swiper组件且在循环模式下返回false。
     *
     * @returns { boolean } 当前滚动类容器组件是否在顶部。true表示组件在顶部，false表示组件不在顶部。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isBegin(): boolean;
    /**
     * 返回当前滚动类容器组件是否在底部，如果为Swiper组件且在循环模式下返回false。
     *
     * @returns { boolean } 当前滚动类容器组件是否在底部。true表示组件在底部，false表示组件不在底部。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isEnd(): boolean;
}
/**
 * 手势识别器对应组件的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class EventTargetInfo {
    /**
     * 返回当前组件的组件标识。
     *
     * @returns { string } 当前组件的[组件标识]{@link ./common}。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getId(): string;
    /**
     * 返回当前组件的唯一id。
     *
     * @returns { int } 当前组件的唯一id。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getUniqueId(): int;
}
/**
 * 触摸识别器对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class TouchRecognizer {
    /**
     * 返回当前触摸识别器对应组件的信息。
     *
     * @returns { EventTargetInfo } 当前触摸识别器对应组件的信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getEventTargetInfo(): EventTargetInfo;
    /**
     * 向当前触摸识别器发送触摸取消事件的信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    cancelTouch(): void;
    /**
     * 返回当前触摸识别器绑定节点是否为传入组件的后代节点。
     *
     * @param { int } uniqueId - 组件的唯一ID。可以通过[getUniqueId]{@link EventTargetInfo#getUniqueId}接口获取该ID。
     * @returns { boolean } 当前触摸识别器绑定节点是否为传入组件的后代节点。true表示当前绑定节点为传入组件的后代节点，false表示当前绑定节点非传入组件的后代节点。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isHostBelongsTo(uniqueId: int): boolean;
}
/**
 * 手势识别器对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class GestureRecognizer {
    /**
     * 返回当前手势识别器的tag。
     *
     * @returns { string } 当前手势识别器的标志。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getTag(): string;
    /**
     * 返回当前手势识别器的类型。
     *
     * @returns { GestureControl.GestureType } 当前手势识别器的类型。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getType(): GestureControl.GestureType;
    /**
     * 返回当前手势识别器是否为系统内置手势。
     *
     * @returns { boolean } 当前手势识别器是否为系统内置手势。true表示手势识别器为系统内置手势，false表示非系统内置手势。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isBuiltIn(): boolean;
    /**
     * 设置当前手势识别器的使能状态。
     *
     * @param { boolean } isEnabled - 手势识别器的使能状态。true表示当前手势识别器能够回调应用事件，false表示当前手势识别器不回调应用事件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setEnabled(isEnabled: boolean): void;
    /**
     * 返回当前手势识别器的使能状态。
     *
     * @returns { boolean } 当前手势识别器的使能状态。true表示当前手势识别器能够回调应用事件，false表示当前手势识别器不回调应用事件。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isEnabled(): boolean;
    /**
     * 返回当前手势识别器的状态。
     *
     * @returns { GestureRecognizerState } 当前手势识别器的状态。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getState(): GestureRecognizerState;
    /**
     * 返回当前手势识别器对应组件的信息。
     *
     * @returns { EventTargetInfo } 当前手势识别器对应组件的信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getEventTargetInfo(): EventTargetInfo;
    /**
     * 返回当前手势识别器是否有效。
     *
     * @returns { boolean } 当前手势识别器是否有效。<br/>当该识别器绑定的组件被析构或该识别器不在响应链上时返回false。<br/>当该识别器绑定的组件未被析构且该识别器在响应链上时返回true。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isValid(): boolean;
    /**
     * 返回预设手指识别数阈值。
     *
     * @returns { int } 预设手指识别数阈值。<br/>取值范围：[1, 10], 整数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getFingerCount(): int;
    /**
     * 返回预设手势是否会检测触摸屏幕上手指识别数量。
     *
     * @returns { boolean } 预设手势是否会检测触摸屏幕上手指识别数量。当绑定手势事件且会检测触摸屏幕上手指的数量时，返回true。当绑定手势事件且不会检测触摸屏幕上手指的数量时，返回false。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isFingerCountLimit(): boolean;
    /**
     * 在手指全部抬起前阻止手势识别器参与当前手势识别。如果系统已确定该手势识别器的结果（无论成功与否），调用此接口将无效。此方法与
     * GestureRecognizer.[setEnabled]{@link GestureRecognizer#setEnabled}(isEnabled: boolean)不同，
     * [setEnabled]{@link GestureRecognizer#setEnabled}并不会阻止手势识别器对象参与手势识别过程，而只会影响手势对应的回调函数是否执行。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    preventBegin(): void;
    /**
     * 返回当前手势识别器绑定节点是否为传入组件的后代节点。
     *
     * @param { int } uniqueId - 组件的唯一ID。可以通过[getUniqueId]{@link EventTargetInfo#getUniqueId}接口获取该ID。
     * @returns { boolean } 当前手势识别器绑定节点是否为传入组件的后代节点。true表示当前绑定节点为传入组件的后代节点，false表示当前绑定节点非传入组件的后代节点。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isHostBelongsTo(uniqueId: int): boolean;
}
/**
 * 点击手势识别器对象，继承自[GestureRecognizer]{@link GestureRecognizer}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TapRecognizer extends GestureRecognizer {
    /**
     * 返回预设点击手势识别器连续点击次数阈值。
     *
     * @returns { int } 预设点击手势识别器连续点击次数阈值。<br/>取值范围：[0, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getTapCount(): int;
}
/**
 * 长按手势识别器对象，继承于[GestureRecognizer]{@link GestureRecognizer}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LongPressRecognizer extends GestureRecognizer {
    /**
     * 返回预设长按手势识别器是否连续触发事件回调。
     *
     * @returns { boolean } 预设长按手势识别器是否连续触发事件回调。当绑定长按手势且不会连续触发回调时，返回false。当绑定长按手势且会连续触发回调时，返回true。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isRepeat(): boolean;
    /**
     * 返回预设长按手势识别器触发长按最短时间阈值。
     *
     * @returns { int } 返回预设长按手势识别器触发长按最短时间阈值，单位为ms。<br/>取值范围：[0, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDuration(): int;
    /**
     * 获取长按手势识别器识别的手势的最大移动距离。
     *
     * @returns { double } 长按手势识别器识别的手势的最大移动距离，单位为px。<br/>取值范围：(0, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getAllowableMovement(): double;
}
/**
 * 快滑手势识别器对象，继承于[GestureRecognizer]{@link GestureRecognizer}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SwipeRecognizer extends GestureRecognizer {
    /**
     * 返回预设快滑手势识别器识别滑动最小速度阈值。
     *
     * @returns { double } 预设快滑手势识别器识别滑动最小速度阈值，单位为vp/s。<br/>取值范围：[0, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getVelocityThreshold(): double;
    /**
     * 返回预设快滑手势识别器触发快滑手势滑动方向。
     *
     * @returns { SwipeDirection } 预设快滑手势识别器触发快滑手势滑动方向。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDirection(): SwipeDirection;
}
/**
 * 捏合手势识别器对象，继承于[GestureRecognizer]{@link GestureRecognizer}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PinchRecognizer extends GestureRecognizer {
    /**
     * 返回预设捏合手势识别器最小识别距离阈值。
     *
     * @returns { double } 预设捏合手势识别器最小识别距离阈值，单位为vp。<br/>取值范围：[0, +∞)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getDistance(): double;
}
/**
 * 旋转手势识别器对象，继承于[GestureRecognizer]{@link GestureRecognizer}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RotationRecognizer extends GestureRecognizer {
    /**
     * 返回预设旋转手势识别器触发旋转手势最小改变度数阈值。
     *
     * @returns { double } 预设旋转手势识别器触发旋转手势最小改变度数阈值，单位为deg。<br/>取值范围：
     *     [0, +∞)<br/>**说明：** <br/>当输入的改变度数的值小于等于0或大于360时，会被转化为默认值，默认值为1。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getAngle(): double;
}
/**
 * 滑动手势识别器对象，继承于[GestureRecognizer]{@link GestureRecognizer}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PanRecognizer extends GestureRecognizer {
    /**
     * 返回当前滑动手势识别器的属性。
     *
     * @returns { PanGestureOptions } 当前滑动手势识别器的属性。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getPanGestureOptions(): PanGestureOptions;
    /**
     * 返回当前滑动手势识别器的识别方向。
     *
     * @returns { PanDirection } 当前滑动手势识别器的识别方向。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getDirection(): PanDirection;
    /**
     * 返回当前滑动手势识别器触发的最小滑动距离。
     *
     * @returns { double } 当前滑动手势识别器触发的最小滑动距离。单位：vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getDistance(): double;
    /**
     * 返回滑动手势识别器在不同输入源的情况下触发的最小滑动距离。
     * 
     * > **说明：**
     * >
     * > 仅支持对通过Pan手势初始化配置修改的设备类型进行阈值查询。对于默认滑动阈值，可通过查询
     * > [SourceTool]{@link SourceTool}.Unknown类型获取。其他未主动设置的类型则无法获取。
     *
     * @returns { Map<SourceTool, double> } 不同输入源的滑动手势识别器触发的最小滑动距离。滑动距离的单位：vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getDistanceMap(): Map<SourceTool, double>;
}
