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
import { CustomBuilder, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback } from './common'
import { Length, VisualEffect, Filter, UniformDataType, Blender, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, ResourceColor, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, PixelMap } from './units'
import { Callback_Void } from './abilityComponent'
import { Callback_Number_Void } from './alphabetIndexer'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey } from './enums'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Resource } from './../../../api/global/resource'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { Callback_Boolean_Void } from './checkbox'
export enum Sticky {
    NONE = 0,
    None = 0,
    NORMAL = 1,
    Normal = 1,
    OPACITY = 2,
    Opacity = 2
}
export enum EditMode {
    NONE = 0,
    None = 0,
    DELETABLE = 1,
    Deletable = 1,
    MOVABLE = 2,
    Movable = 2
}
export enum SwipeEdgeEffect {
    SPRING = 0,
    Spring = 0,
    NONE = 1,
    None = 1
}
export enum SwipeActionState {
    COLLAPSED = 0,
    EXPANDED = 1,
    ACTIONING = 2
}
export type Callback_SwipeActionState_Void = (state: SwipeActionState) => void;
export interface SwipeActionItem {
    builder?: CustomBuilder;
    actionAreaDistance?: Length;
    onAction?: (() => void);
    onEnterActionArea?: (() => void);
    onExitActionArea?: (() => void);
    onStateChange?: ((state: SwipeActionState) => void);
}
export interface SwipeActionOptions {
    start?: CustomBuilder | SwipeActionItem;
    end?: CustomBuilder | SwipeActionItem;
    edgeEffect?: SwipeEdgeEffect;
    onOffsetChange?: ((index: number) => void);
}
export enum ListItemStyle {
    NONE = 0,
    CARD = 1
}
export interface ListItemOptions {
    style?: ListItemStyle;
}
export interface ListItemInterface {
    invoke(value?: ListItemOptions): ListItemAttribute;

}
export interface ListItemAttribute extends CommonMethod {
    @memo
    sticky(value: Sticky): this;
    @memo
    editable(value: boolean | EditMode): this;
    @memo
    selectable(value: boolean): this;
    @memo
    selected(value: boolean): this;
    @memo
    swipeAction(value: SwipeActionOptions): this;
    @memo
    onSelect(value: ((parameter: boolean) => void)): this;
}
@memo
@ComponentBuilder
export declare function ListItem(
    value?: ListItemOptions | undefined | string | undefined | undefined, 
    @memo
    content_?: () => void,
): ListItemAttribute
