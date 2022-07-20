/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { Callback } from "./basic";

/**
 * Provides the ability to subscribe to gesture state.
 *
 * @since 9
 * @sysCap SystemCapability.Sensors.Motion
 * @devices phone, tablet
 * @import import sensor from '@ohos.motion'
 * @permission N/A
 */
declare namespace motion {
    /**
     * The basic data structure of gesture state events。
     * @devices phone, tablet
     * @sysCap SystemCapability.Msdp.Motion
     */
    export interface MotionResponse {
        motionValue: boolean
    }

    /**
     * Pick up the data for the event。
     * @devices phone, tablet
     * @sysCap SystemCapability.Msdp.Motion
     */
    export interface PickupResponse extends MotionResponse {}

    /**
     * Roll over the data for the event。
     * @devices phone, tablet
     * @sysCap SystemCapability.Msdp.Motion
     */
    export interface FlipResponse extends MotionResponse {}

    /**
     * Data close to ear events。
     * @devices phone, tablet
     * @sysCap SystemCapability.Msdp.Motion
     */
    export interface CloseToEarResponse extends MotionResponse {}

    /**
     * Shake the data of the event。
     * @devices phone, tablet
     * @sysCap SystemCapability.Msdp.Motion
     */
    export interface ShakeResponse extends MotionResponse {}

    /**
     * Rotate the data for the event。
     * @devices phone, tablet
     * @sysCap SystemCapability.Msdp.Motion
     */
    export interface RotateResponse extends MotionResponse {}
	
    /**
     * Two-finger swipe event data。
     * @devices phone, tablet
     * @sysCap SystemCapability.Msdp.Motion
     */
    export interface TwoFingersPinchResponse extends MotionResponse {}
	
    /**
     * Three fingers swipe the data of the event。
     * @devices phone, tablet
     * @sysCap SystemCapability.Msdp.Motion
     */
    export interface ThreeFingersSlideResponse extends MotionResponse {}
	
    /**
     * Gesture state type。
     * @devices phone, tablet
     * @sysCap SystemCapability.Msdp.Motion
     */
    export enum MotionType {
        TYPE_PICKUP = "pickUp",
        TYPE_CLOSE_TO_EAR = "closeToEar",
        TYPE_FLIP = "flip",
        TYPE_SHAKE = "shake",
        TYPE_ROTATE = "rotate",
        TYPE_TWO_FINGER_PINCH = "twoFingerPinch",
        TYPE_THREE_FINGERS_SLIDE = "threeFingersSlide",
    }
	
    /**
     * Subscribe to pick up gestures。
     * @param The type of gesture state that subscribes to, {@code type: MotionType.TYPE_PICKUP}.
     * @param callback The Callback function that the user subscribes to.
     * @since 9
     */
    function on(type: MotionType.TYPE_PICKUP, callback: Callback<PickupResponse>): void;

    /**
     * Subscribe to the near ear gesture。
     * @param Subscribe to the gesture status type, {@code type: MotionType.TYPE_CLOSE_TO_EAR}.
     * @param callback The Callback function that the user subscribes to.
     * @since 9
     */
    function on(type: MotionType.TYPE_CLOSE_TO_EAR, callback: Callback<CloseToEarResponse>): void;

    /**
     * Subscribe to the flip event gesture。
     * @param Subscribe to the gesture status type, {@code type: MotionType.TYPE_FLIP}.
     * @param callback The Callback function that the user subscribes to.
     * @since 9
     */
    function on(type: MotionType.TYPE_FLIP, callback: Callback<FlipResponse>): void;

    /**
     * Subscribe to a shake gesture。
     * @param Subscribe to the gesture status type, {@code type: MotionType.TYPE_SHAKE}.
     * @param callback The Callback function that the user subscribes to.
     * @since 9
     */
    function on(type: MotionType.TYPE_SHAKE, callback: Callback<ShakeResponse>): void;

    /**
     * Subscribe to the rotate gesture。
     * @param Subscribe to the gesture status type, {@code type: MotionType.TYPE_ROTATE}.
     * @param callback The Callback function that the user subscribes to.
     * @since 9
     */
    function on(type: MotionType.TYPE_ROTATE, callback: Callback<RotateResponse>): void;
	
    /**
     * Subscribe to two-finger event gestures。
     * @param Cancels the gesture state type, {@code type: MotionType.TYPE_TWO_FINGER_PINCH}.
     * @param callback The User Cancels the Callback function.
     * @since 9
     */
    function on(type: MotionType.TYPE_TWO_FINGER_PINCH, callback?: Callback<TwoFingersPinchResponse>): void;
	
    /**
     * Subscribe to three-finger event gestures。
     * @param Cancels the gesture state type, {@code type: MotionType.TYPE_THREE_FINGERS_SLIDE}.
     * @param callback The User Cancels the Callback function.
     * @since 9
     */
    function on(type: MotionType.TYPE_THREE_FINGERS_SLIDE, callback?: Callback<ThreeFingersSlideResponse>): void;

    /**
     * Cancel the pick-up gesture。
     * @param 取消手势状态的类型, {@code type: MotionType.TYPE_PICKUP}.
     * @param callback The User Cancels the Callback function.
     * @since 9
     */
    function off(type: MotionType.TYPE_PICKUP, callback?: Callback<PickupResponse>): void;

    /**
     * Cancel the close gesture。
     * @param Cancels the gesture state type, {@code type: MotionType.TYPE_CLOSE_TO_EAR}.
     * @param callback The User Cancels the Callback function.
     * @since 9
     */
    function off(type: MotionType.TYPE_CLOSE_TO_EAR, callback?: Callback<CloseToEarResponse>): void;

    /**
     * Cancels the flip event gesture。
     * @param Cancels the gesture state type, {@code type: MotionType.TYPE_FLIP}.
     * @param callback The User Cancels the Callback function.
     * @since 9
     */
    function off(type: MotionType.TYPE_FLIP, callback?: Callback<FlipResponse>): void;

    /**
     * Cancel the shake gesture。
     * @param Cancels the gesture state type, {@code type: MotionType.TYPE_SHAKE}.
     * @param callback The User Cancels the Callback function.
     * @since 9
     */
    function off(type: MotionType.TYPE_SHAKE, callback?: Callback<ShakeResponse>): void;

    /**
     * Cancel the rotate gesture。
     * @param Cancels the gesture state type, {@code type: MotionType.TYPE_ROTATE}.
     * @param callback The User Cancels the Callback function.
     * @since 9
     */
    function off(type: MotionType.TYPE_ROTATE, callback?: Callback<RotateResponse>): void;
	
    /**
     * Cancels the two-finger event gesture。
     * @param Cancels the gesture state type, {@code type: MotionType.TYPE_TWO_FINGER_PINCH}.
     * @param callback The User Cancels the Callback function.
     * @since 9
     */
    function off(type: MotionType.TYPE_TWO_FINGER_PINCH, callback?: Callback<TwoFingersPinchResponse>): void;
	
    /**
     * Cancels from the three-finger event gesture。
     * @param Cancels the gesture state type, {@code type: MotionType.TYPE_THREE_FINGERS_SLIDE}.
     * @param callback The User Cancels the Callback function.
     * @since 9
     */
    function off(type: MotionType.TYPE_THREE_FINGERS_SLIDE, callback?: Callback<ThreeFingersSlideResponse>): void;
}

export default motion;

