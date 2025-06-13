/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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
 * @arkts 1.2
 */


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { BaseEvent, EventTarget, SourceType, SourceTool, Callback } from './common'

export enum PanDirection {
    NONE = 0,
    None = 0,
    HORIZONTAL = 1,
    Horizontal = 1,
    LEFT = 2,
    Left = 2,
    RIGHT = 3,
    Right = 3,
    VERTICAL = 4,
    Vertical = 4,
    UP = 5,
    Up = 5,
    DOWN = 6,
    Down = 6,
    ALL = 7,
    All = 7
}
export enum SwipeDirection {
    NONE = 0,
    None = 0,
    HORIZONTAL = 1,
    Horizontal = 1,
    VERTICAL = 2,
    Vertical = 2,
    ALL = 3,
    All = 3
}
export enum GestureMode {
    SEQUENCE = 0,
    Sequence = 0,
    PARALLEL = 1,
    Parallel = 1,
    EXCLUSIVE = 2,
    Exclusive = 2
}
export enum GestureMask {
    NORMAL = 0,
    Normal = 0,
    IGNORE_INTERNAL = 1,
    IgnoreInternal = 1
}
export enum GestureJudgeResult {
    CONTINUE = 0,
    REJECT = 1
}
export declare namespace GestureControl {
    export enum GestureType {
        TAP_GESTURE = 0,
        LONG_PRESS_GESTURE = 1,
        PAN_GESTURE = 2,
        PINCH_GESTURE = 3,
        SWIPE_GESTURE = 4,
        ROTATION_GESTURE = 5,
        DRAG = 6,
        CLICK = 7
    }
}
export interface GestureInfo {
    tag?: string;
    type: GestureControl.GestureType;
    isSystemGesture: boolean;
}
export interface FingerInfo {
    id: number;
    globalX: number;
    globalY: number;
    localX: number;
    localY: number;
    displayX: number;
    displayY: number;
}
export type GestureType = Gesture | GestureGroup;
export interface BaseGestureEvent extends BaseEvent {
    fingerList: Array<FingerInfo>;
}
export interface TapGestureEvent extends BaseGestureEvent {
}
export interface LongPressGestureEvent extends BaseGestureEvent {
    repeat: boolean;
}
export interface PanGestureEvent extends BaseGestureEvent {
    offsetX: number;
    offsetY: number;
    velocityX: number;
    velocityY: number;
    velocity: number;
}
export interface PinchGestureEvent extends BaseGestureEvent {
    scale: number;
    pinchCenterX: number;
    pinchCenterY: number;
}
export interface RotationGestureEvent extends BaseGestureEvent {
    angle: number;
}
export interface SwipeGestureEvent extends BaseGestureEvent {
    angle: number;
    speed: number;
}
export interface GestureEvent extends BaseEvent {
    repeat: boolean;
    fingerList: Array<FingerInfo>;
    offsetX: number;
    offsetY: number;
    angle: number;
    speed: number;
    scale: number;
    pinchCenterX: number;
    pinchCenterY: number;
    velocityX: number;
    velocityY: number;
    velocity: number;
}
export interface GestureInterface<T> {
    tag(tag: string): T
    allowedTypes(types: Array<SourceTool>): T
}
export interface TapGestureParameters {
    count?: number;
    fingers?: number;
    distanceThreshold?: number;
}
export type Callback_GestureEvent_Void = (event: GestureEvent) => void;
export interface TapGestureInterface extends GestureInterface<TapGestureInterface> {
    onAction(event: ((event: GestureEvent) => void)): TapGestureInterface
    invoke(value?: TapGestureParameters): TapGestureInterface;
}
export interface Literal_Number_duration_fingers_Boolean_repeat {
    fingers?: number;
    repeat?: boolean;
    duration?: number;
}
export interface LongPressGestureInterface extends GestureInterface<LongPressGestureInterface> {
    onAction(event: ((event: GestureEvent) => void)): LongPressGestureInterface
    onActionEnd(event: ((event: GestureEvent) => void)): LongPressGestureInterface
    onActionCancel(event: (() => void)): LongPressGestureInterface
    invoke(value?: Literal_Number_duration_fingers_Boolean_repeat): LongPressGestureInterface;
}
export interface Literal_Number_distance_fingers_PanDirection_direction {
    fingers?: number;
    direction?: PanDirection;
    distance?: number;
}
export interface PanGestureOptions {
    setDirection(value: PanDirection): undefined
    setDistance(value: number): undefined
    setFingers(value: number): undefined
    getDirection(): PanDirection
}
export interface PanGestureInterface extends GestureInterface<PanGestureInterface> {
    onActionStart(event: ((event: GestureEvent) => void)): PanGestureInterface
    onActionUpdate(event: ((event: GestureEvent) => void)): PanGestureInterface
    onActionEnd(event: ((event: GestureEvent) => void)): PanGestureInterface
    onActionCancel(event: (() => void)): PanGestureInterface
    invoke(value?: Literal_Number_distance_fingers_PanDirection_direction | PanGestureOptions): PanGestureInterface;
}
export interface Literal_Number_fingers_speed_SwipeDirection_direction {
    fingers?: number;
    direction?: SwipeDirection;
    speed?: number;
}
export interface SwipeGestureInterface extends GestureInterface<SwipeGestureInterface> {
    onAction(event: ((event: GestureEvent) => void)): SwipeGestureInterface
    invoke(value?: Literal_Number_fingers_speed_SwipeDirection_direction): SwipeGestureInterface;
}
export interface Literal_Number_distance_fingers {
    fingers?: number;
    distance?: number;
}
export interface PinchGestureInterface extends GestureInterface<PinchGestureInterface> {
    onActionStart(event: ((event: GestureEvent) => void)): PinchGestureInterface
    onActionUpdate(event: ((event: GestureEvent) => void)): PinchGestureInterface
    onActionEnd(event: ((event: GestureEvent) => void)): PinchGestureInterface
    onActionCancel(event: (() => void)): PinchGestureInterface
    invoke(value?: Literal_Number_distance_fingers): PinchGestureInterface;
}
export interface Literal_Number_angle_fingers {
    fingers?: number;
    angle?: number;
}
export interface RotationGestureInterface extends GestureInterface<RotationGestureInterface> {
    onActionStart(event: ((event: GestureEvent) => void)): RotationGestureInterface
    onActionUpdate(event: ((event: GestureEvent) => void)): RotationGestureInterface
    onActionEnd(event: ((event: GestureEvent) => void)): RotationGestureInterface
    onActionCancel(event: (() => void)): RotationGestureInterface
    invoke(value?: Literal_Number_angle_fingers): RotationGestureInterface;
}
export interface GestureGroupInterface {
    onCancel(event: (() => void)): GestureGroupInterface
    invoke(mode: GestureMode, gesture: Array<GestureType>): GestureGroupInterface;
}
export interface GestureHandler<T> {
    tag(tag: string): T
    allowedTypes(types: Array<SourceTool>): T
}
export interface TapGestureHandlerOptions {
    count?: number;
    fingers?: number;
}
export interface TapGestureHandler extends GestureHandler<TapGestureHandler> {
    onAction(event: ((event: GestureEvent) => void)): TapGestureHandler
}
export interface LongPressGestureHandlerOptions {
    fingers?: number;
    repeat?: boolean;
    duration?: number;
}
export interface LongPressGestureHandler extends GestureHandler<LongPressGestureHandler> {
    onAction(event: ((event: GestureEvent) => void)): LongPressGestureHandler
    onActionEnd(event: ((event: GestureEvent) => void)): LongPressGestureHandler
    onActionCancel(event: (() => void)): LongPressGestureHandler
}
export interface PanGestureHandlerOptions {
    fingers?: number;
    direction?: PanDirection;
    distance?: number;
}
export interface PanGestureHandler extends GestureHandler<PanGestureHandler> {
    onActionStart(event: ((event: GestureEvent) => void)): PanGestureHandler
    onActionUpdate(event: ((event: GestureEvent) => void)): PanGestureHandler
    onActionEnd(event: ((event: GestureEvent) => void)): PanGestureHandler
    onActionCancel(event: (() => void)): PanGestureHandler
}
export interface SwipeGestureHandlerOptions {
    fingers?: number;
    direction?: SwipeDirection;
    speed?: number;
}
export interface SwipeGestureHandler extends GestureHandler<SwipeGestureHandler> {
    onAction(event: ((event: GestureEvent) => void)): SwipeGestureHandler
}
export interface PinchGestureHandlerOptions {
    fingers?: number;
    distance?: number;
}
export interface PinchGestureHandler extends GestureHandler<PinchGestureHandler> {
    onActionStart(event: ((event: GestureEvent) => void)): PinchGestureHandler
    onActionUpdate(event: ((event: GestureEvent) => void)): PinchGestureHandler
    onActionEnd(event: ((event: GestureEvent) => void)): PinchGestureHandler
    onActionCancel(event: (() => void)): PinchGestureHandler
}
export interface RotationGestureHandlerOptions {
    fingers?: number;
    angle?: number;
}
export interface RotationGestureHandler extends GestureHandler<RotationGestureHandler> {
    onActionStart(event: ((event: GestureEvent) => void)): RotationGestureHandler
    onActionUpdate(event: ((event: GestureEvent) => void)): RotationGestureHandler
    onActionEnd(event: ((event: GestureEvent) => void)): RotationGestureHandler
    onActionCancel(event: (() => void)): RotationGestureHandler
}
export interface GestureGroupGestureHandlerOptions {
    stub: string;
}
export interface GestureGroupHandler extends GestureHandler<GestureGroupHandler> {
    onCancel(event: (() => void)): GestureGroupHandler
}
export enum GesturePriority {
    NORMAL = 0,
    PRIORITY = 1
}
export enum GestureRecognizerState {
    READY = 0,
    DETECTING = 1,
    PENDING = 2,
    BLOCKED = 3,
    SUCCESSFUL = 4,
    FAILED = 5
}
export interface ScrollableTargetInfo extends EventTargetInfo {
    isBegin(): boolean
    isEnd(): boolean
}
export interface EventTargetInfo {
    getId(): string
}
export interface GestureRecognizer {
    getTag(): string
    getType(): GestureControl.GestureType
    isBuiltIn(): boolean
    setEnabled(isEnabled: boolean): void
    isEnabled(): boolean
    getState(): GestureRecognizerState
    getEventTargetInfo(): EventTargetInfo
    isValid(): boolean
}
export interface PanRecognizer extends GestureRecognizer {
    getPanGestureOptions(): PanGestureOptions
}

/**
 * Defines Gesture interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * 
 */
export declare class Gesture {
    /**
     * Set gesture's tag.
     *
     * @param { string } tag
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     * 
     */
    tag(tag: string): this;
    /**
     * Input source type for gesture response.
     *
     * @param { Array<SourceTool> } types - indicate the allowed input source for gesture to response
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     * 
     */
    allowedTypes(types: Array<SourceTool>): this;
}
/**
 * Defines TapGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * 
 */
export declare class TapGesture extends Gesture {
    /**
     * Set the value.
     * TapGestureParameters: The parameters of the tapGesture.
     *
     * @param { function } factory
     * @param { TapGestureParameters } value
     * @returns { TapGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     * 
     */
    static $_instantiate(factory: () => TapGesture, value?: TapGestureParameters): TapGesture;
    /**
     * Tap gesture recognition success callback.
     *
     * @param { function } event
     * @returns { TapGestureInterface }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     * 
     */
    onAction(event: Callback<GestureEvent>): TapGesture;
}
/**
 * Defines LongPressGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * 
 * @since 20
 */
export declare class LongPressGesture extends Gesture {
    /**
     * Set the value.
     * fingers: Indicates the hand index that triggers the long press.
     * repeat: Indicates whether to trigger event callback continuously.
     * duration: Minimum press and hold time, in milliseconds.
     *
     * @param { function } factory
     * @param { LongPressGestureHandlerOptions } value
     * @returns { LongPressGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 11
     */
    static $_instantiate(factory: () => LongPressGesture, value?: LongPressGestureHandlerOptions): LongPressGesture;
    /**
     * LongPress gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { LongPressGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onAction(event: Callback<GestureEvent>): LongPressGesture;
    /**
     * The LongPress gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { LongPressGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionEnd(event: Callback<GestureEvent>): LongPressGesture;
    /**
     * The LongPress gesture is successfully recognized and a callback is triggered when the touch cancel event
     * is received.
     *
     * @param { Callback<void> } event
     * @returns { LongPressGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionCancel(event: Callback<void>): LongPressGesture;
}

/**
 * Defines PanGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * 
 * @since 20
 */
export declare class PanGesture extends Gesture {
    /**
     * Set the value.
     *
     * @param { function } factory
     * @param { PanGestureHandlerOptions } value
     * @returns { PanGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    static $_instantiate(factory: () => PanGesture, value?: PanGestureHandlerOptions): PanGesture;
    /**
     * Pan gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { PanGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionStart(event: Callback<GestureEvent>): PanGesture;
    /**
     * Callback when the Pan gesture is moving.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { PanGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionUpdate(event: Callback<GestureEvent>): PanGesture;
    /**
     * The Pan gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { PanGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionEnd(event: Callback<GestureEvent>): PanGesture;
    /**
     * The Pan gesture is successfully recognized and a callback is triggered when the touch cancel event
     * is received.
     *
     * @param { Callback<void> } event
     * @returns { PanGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionCancel(event: Callback<void>): PanGesture;
}
/**
 * Defines SwipeGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * 
 * @since 20
 */
export declare class SwipeGesture extends Gesture {
    /**
     * Set the value.
     *
     * @param { function } factory
     * @param { SwipeGestureHandlerOptions } value
     * @returns { SwipeGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    static $_instantiate(factory: () => SwipeGesture, value?: SwipeGestureHandlerOptions): SwipeGesture;
    /**
     * Slide gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { SwipeGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onAction(event: Callback<GestureEvent>): SwipeGesture;
}
/**
 * Defines PinchGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * 
 * @since 20
 */
export declare class PinchGesture extends Gesture {
    /**
     * Set the value.
     *
     * @param { function } factory
     * @param { PinchGestureHandlerOptions } value
     * @returns { PinchGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    static $_instantiate(factory: () => PinchGesture, value?: PinchGestureHandlerOptions): PinchGesture;
    /**
     * Pinch gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { PinchGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionStart(event: Callback<GestureEvent>): PinchGesture;
    /**
     * Callback when the Pinch gesture is moving.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { PinchGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionUpdate(event: Callback<GestureEvent>): PinchGesture;
    /**
     * The Pinch gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { PinchGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionEnd(event: Callback<GestureEvent>): PinchGesture;
    /**
     * The Pinch gesture is successfully recognized and a callback is triggered when the touch cancel event
     * is received.
     *
     * @param { Callback<void> } event
     * @returns { PinchGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionCancel(event: Callback<void>): PinchGesture;
}
/**
 * Defines RotationGesture.
 *
 * @extends Gesture
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * 
 * @since 20
 */
export declare class RotationGesture extends Gesture {
    /**
     * Set the value.
     *
     * @param { function } factory
     * @param { RotationGestureHandlerOptions } value
     * @returns { RotationGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    static $_instantiate(factory: () => RotationGesture, value?: RotationGestureHandlerOptions): RotationGesture;
    /**
     * Rotation gesture recognition success callback.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { RotationGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionStart(event: Callback<GestureEvent>): RotationGesture;
    /**
     * Callback when the Rotation gesture is moving.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { RotationGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionUpdate(event: Callback<GestureEvent>): RotationGesture;
    /**
     * The Rotation gesture is successfully recognized. When the finger is lifted, the callback is triggered.
     *
     * @param { Callback<GestureEvent> } event
     * @returns { RotationGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionEnd(event: Callback<GestureEvent>): RotationGesture;
    /**
     * The Rotation gesture is successfully recognized and a callback is triggered when the touch cancel event
     * is received.
     *
     * @param { Callback<void> } event
     * @returns { RotationGesture }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onActionCancel(event: Callback<void>): RotationGesture;
}
/**
 * Defines the GestureGroup.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * 
 * @since 20
 */
export declare class GestureGroup {
    /**
     * Return to Obtain GestureGroup.
     *
     * @param { function } factory
     * @param { GestureMode } mode
     * @param { GestureType[] } gesture
     * @returns { GestureGroup }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    static $_instantiate(factory: () => GestureGroup, mode: GestureMode, ...gesture: GestureType[]): GestureGroup;
    /**
     * The Gesture group is successfully recognized and a callback is triggered when the touch cancel event
     * is received.
     *
     * @param { Callback<void> } event
     * @returns { GestureGroup }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * 
     * @since 20
     */
    onCancel(event: Callback<void>): GestureGroup;
}
