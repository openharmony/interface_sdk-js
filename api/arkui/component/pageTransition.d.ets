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

import { memo, ComponentBuilder } from "./../stateManagement/runtime"
import { TranslateOptions, ScaleOptions, ICurve } from "./common"
import { Curve } from "./enums"
export enum RouteType {
    NONE = 0,
    None = 0,
    PUSH = 1,
    Push = 1,
    POP = 2,
    Pop = 2
}
export enum SlideEffect {
    LEFT = 0,
    Left = 0,
    RIGHT = 1,
    Right = 1,
    TOP = 2,
    Top = 2,
    BOTTOM = 3,
    Bottom = 3,
    START = 5,
    END = 6
}
export interface CommonTransition<T> {
    slide: SlideEffect;
    translate: TranslateOptions;
    scale: ScaleOptions;
    opacity: number;
}
export interface PageTransitionOptions {
    type?: RouteType;
    duration?: number;
    curve?: Curve | string | ICurve;
    delay?: number;
}
export type PageTransitionCallback = (type: RouteType, progress: number) => void;
export interface PageTransitionEnterInterface extends CommonTransition<PageTransitionEnterInterface> {
    onEnter(event: PageTransitionCallback): PageTransitionEnterInterface
    invoke(value: PageTransitionOptions): PageTransitionEnterInterface;
}
export interface PageTransitionExitInterface extends CommonTransition<PageTransitionExitInterface> {
    onExit(event: PageTransitionCallback): PageTransitionExitInterface
    invoke(value: PageTransitionOptions): PageTransitionExitInterface;
}
