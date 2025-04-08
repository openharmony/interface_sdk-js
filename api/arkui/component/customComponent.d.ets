/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from "../stateManagement/runtime";
import { CommonMethod, GeometryInfo, Layoutable, Measurable, SizeResult } from "./common";
import { Theme } from '../../../api/@ohos.arkui.theme'
import { ConstraintSizeOptions, NavDestinationInfo, NavigationInfo, RouterPageInfo } from './units'
import { UIContext } from './../../../api/@ohos.arkui.UIContext'

import { 
    DrawModifier, Rectangle, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle,
    ClickEvent, HoverEvent, AccessibilityCallback, MouseEvent, TouchEvent, KeyEvent, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions,
    TranslateOptions, ScaleOptions, RotateOptions, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, AlignRuleOption, ClickEffect, DragEvent, CustomBuilder, 
    DragItemInfo, PreDragStatus, Type_CommonMethod_linearGradient_value, Type_CommonMethod_sweepGradient_value, Type_CommonMethod_radialGradient_value, MotionPathOptions,
    ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions,
    GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, SizeChangeCallback
} from './common'

import { TextDecorationType, TextDecorationStyle, Curve, PlayMode, SharedTransitionEffectType, HorizontalAlign, VerticalAlign, TransitionType, FontWeight, FontStyle, Color, ColoringStrategy, MouseButton, MouseAction, AccessibilityHoverType, TouchType, KeyType, KeySource, BorderStyle, Placement, ArrowPointPosition, ClickEffectLevel, NestedScrollMode, GradientDirection, HitTestMode, Alignment, ImageSize, HoverEffect, Visibility, ItemAlign, Direction, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, LineCapStyle, LineJoinStyle, PixelRoundCalcPolicy, BarState, EdgeEffect, IlluminatedType } from './enums'
import { ResourceColor, Context, Length, Bias, PixelMap, PointerStyle, Area, Font, BorderRadiuses, EdgeWidths, LocalizedEdgeWidths, SizeOptions, Summary, UniformDataType, UnifiedData, ResourceStr, Dimension, EdgeColors, LocalizedEdgeColors, EdgeStyles, Position, LocalizedBorderRadiuses, Margin, ChainWeightOptions, Padding, LocalizedPadding, LocalizedMargin, BorderOptions, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, VisualEffect, Filter, Blender, EdgeWidth, DirectionalEdgesT } from './units'
import { Resource } from './../../../api/global/resource'
import { Callback_Void } from './abilityComponent'
import { DrawContext, LengthMetrics } from './../Graphics'
import { ButtonType, ButtonStyleMode, ButtonRole } from './button'
import { BaseGestureEvent, GestureRecognizer, GestureJudgeResult, GestureInfo, GestureType, GestureMask, GestureHandler, GesturePriority } from './gesture'
import { IntentionCode } from './../../../api/@ohos.multimodalInput.intentionCode'
import { Callback_Number_Void } from './alphabetIndexer'
import { AnimationRange_Number } from './type-replacements'
import { SymbolGlyphModifier } from './../../../api/arkui/SymbolGlyphModifier'
import { ImageModifier } from './../../../api/arkui/ImageModifier'
import { ComponentContent } from './../ComponentContent'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { FocusBoxStyle, FocusPriority } from './focus'
import { Callback_Number_Number_Void } from './grid'
import { ScrollOnWillScrollCallback, ScrollOnScrollCallback } from './scroll'
import { ScrollState } from './list'

@Retention({policy: "SOURCE"})
export declare @interface Component {
    freezeWhenInactive: boolean = false;
}

@Retention({policy: "SOURCE"})
export declare @interface Entry {
    routeName: string = "";
    storage: string = "";
    useSharedStorage: boolean = false;
}

@Retention({policy: "SOURCE"})
export declare @interface Reusable {}

export interface CustomBuild {
    @memo
    build(): void;
}

export interface CustomLayout {

}

export declare abstract class CustomComponent<T extends CustomComponent<T, T_Options>, T_Options> {

    @memo
    @ComponentBuilder
    static $_instantiate<S extends CustomComponent<S, S_Options>, S_Options>(
        factory: () => S,
        initializers?: S_Options,
        @memo
        content?: () => void
    ): S;

   // Life cycle for custom component
    aboutToAppear(): void
    aboutToDisappear(): void
    onDidBuild(): void

    onPageShow(): void
    onPageHide(): void
    onBackPress(): boolean

    @memo
    build(): void;
}