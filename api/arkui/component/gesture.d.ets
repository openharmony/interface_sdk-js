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


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { BaseEvent, EventTarget, SourceType, SourceTool } from './common'
import { Callback_Void } from './abilityComponent'
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
export type GestureType = TapGestureInterface | LongPressGestureInterface | PanGestureInterface |
    PinchGestureInterface | SwipeGestureInterface | RotationGestureInterface | GestureGroupInterface;
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
