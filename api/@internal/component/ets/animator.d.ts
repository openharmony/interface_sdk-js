/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import {CommonMethod, AnimationStatus, Curve, FillMode, PlayMode} from "./common";

export declare class SpringProp {
    constructor(mass: number, stiffness: number, damping: number): SpringProp;
}

export declare class SpringMotion {
    constructor(start: number, end: number, velocity: number, prop: SpringProp): SpringMotion;
}

export declare class FrictionMotion {
    constructor(friction: number, position: number, velocity: number): FrictionMotion;
}

export declare class ScrollMotion {
    constructor(position: number, velocity: number, min: number, max: number, prop: SpringProp): ScrollMotion;
}

interface Animator extends CommonMethod<Animator> {
    (value: string): Animator;

    state(value: AnimationStatus): Animator;

    duration(value: number): Animator;

    curve(value: Curve): Animator;

    delay(value: number): Animator;

    fillMode(value: FillMode): Animator;

    iterations(value: number): Animator;

    playMode(value: PlayMode): Animator;

    motion(value: Motion): Animator;

    onStart(event: () => void): Animator;

    onPause(event: () => void): Animator;

    onRepeat(event: () => void): Animator;

    onCancel(event: () => void): Animator;

    onFinish(event: () => void): Animator;

    onFrame(event: (value: number) => void): Animator;
}

export declare const AnimatorInterface: Animator;