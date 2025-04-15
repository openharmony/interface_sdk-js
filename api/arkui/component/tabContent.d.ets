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
import { Length, ResourceColor, ResourceStr, Padding, Dimension, LocalizedPadding, VisualEffect, Filter, UniformDataType, Blender, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Margin, LocalizedMargin, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, VoidCallback, PixelMap } from './units'
import { SymbolGlyphModifier } from './../../../api/arkui/SymbolGlyphModifier'
import { Resource } from './../../../api/global/resource'
import { ComponentContent } from './../ComponentContent'
import { IndicatorStyle } from './swiper'
import { LabelStyle } from './button'
import { VerticalAlign, HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey } from './enums'
import { CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback } from './common'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Callback_Void } from './abilityComponent'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
export enum SelectedMode {
    INDICATOR = 0,
    BOARD = 1
}
export enum LayoutMode {
    AUTO = 0,
    VERTICAL = 1,
    HORIZONTAL = 2
}
export interface BoardStyle {
    borderRadius?: Length;
}
export interface TabBarIconStyle {
    selectedColor?: ResourceColor;
    unselectedColor?: ResourceColor;
}
export interface TabBarSymbol {
    normal: SymbolGlyphModifier;
    selected?: SymbolGlyphModifier;
}
export interface TabBarOptions {
    icon?: string | Resource;
    text?: string | Resource;
}
export interface SubTabBarStyle {
    of(content: ResourceStr): SubTabBarStyle

    indicator(value: IndicatorStyle): SubTabBarStyle
    selectedMode(value: SelectedMode): SubTabBarStyle
    board(value: BoardStyle): SubTabBarStyle
    labelStyle(value: LabelStyle): SubTabBarStyle
    padding(value: Padding | Dimension): SubTabBarStyle

    id(value: string): SubTabBarStyle
}
export interface BottomTabBarStyle {
    of(icon: ResourceStr | TabBarSymbol, text: ResourceStr): BottomTabBarStyle
    labelStyle(value: LabelStyle): BottomTabBarStyle
    padding(value: Padding | Dimension | LocalizedPadding): BottomTabBarStyle
    layoutMode(value: LayoutMode): BottomTabBarStyle
    verticalAlign(value: VerticalAlign): BottomTabBarStyle
    symmetricExtensible(value: boolean): BottomTabBarStyle
    id(value: string): BottomTabBarStyle
    iconStyle(style: TabBarIconStyle): BottomTabBarStyle
}
export type TabContentInterface = () => TabContentAttribute;
export interface TabContentAttribute extends CommonMethod {
    @memo
    tabBar(value: string | Resource | CustomBuilder | TabBarOptions): this;

    @memo
    onWillShow(value: VoidCallback): this;
    @memo
    onWillHide(value: VoidCallback): this;
}
@memo
@ComponentBuilder
export declare function TabContent(
    
    @memo
    content_?: () => void,
): TabContentAttribute
