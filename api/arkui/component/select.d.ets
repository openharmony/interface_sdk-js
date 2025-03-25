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

import { ResourceStr, VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, ResourceColor, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, Font, Offset, PixelMap } from './units'
import { SymbolGlyphModifier } from './../../../api/arkui/SymbolGlyphModifier'
import { memo, ComponentBuilder } from './../stateManagement/runtime'
import { Resource } from './../../../api/global/resource'
import { CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, ContentModifier, CommonConfiguration } from './common'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, OptionWidthMode } from './enums'
import { LengthMetrics } from './../Graphics'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Callback_Void } from './abilityComponent'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { ControlSize } from './button'
import { DividerOptions } from './textPicker'
export interface SelectOption {
    value: ResourceStr;
    icon?: ResourceStr;
    symbolIcon?: SymbolGlyphModifier;
}
export type SelectInterface = (options: Array<SelectOption>) => SelectAttribute;
export enum ArrowPosition {
    END = 0,
    START = 1
}
export enum MenuAlignType {
    START = 0,
    CENTER = 1,
    END = 2
}
export type Callback_Number_String_Void = (index: number, value: string) => void;
export type Callback_Union_Number_Resource_Void = (selected: number | Resource) => void;
export type Callback_ResourceStr_Void = (value: ResourceStr) => void;
export interface SelectAttribute extends CommonMethod {
    @memo
    selected(value: number | Resource): this;
    @memo
    value(value: ResourceStr): this;
    @memo
    font(value: Font): this;
    @memo
    fontColor(value: ResourceColor): this;
    @memo
    selectedOptionBgColor(value: ResourceColor): this;
    @memo
    selectedOptionFont(value: Font): this;
    @memo
    selectedOptionFontColor(value: ResourceColor): this;
    @memo
    optionBgColor(value: ResourceColor): this;
    @memo
    optionFont(value: Font): this;
    @memo
    optionFontColor(value: ResourceColor): this;
    @memo
    onSelect(value: ((index: number,value: string) => void)): this;
    @memo
    space(value: Length): this;
    @memo
    arrowPosition(value: ArrowPosition): this;
    @memo
    optionWidth(value: Dimension | OptionWidthMode): this;
    @memo
    optionHeight(value: Dimension): this;
    @memo
    menuBackgroundColor(value: ResourceColor): this;
    @memo
    menuBackgroundBlurStyle(value: BlurStyle): this;
    @memo
    controlSize(value: ControlSize): this;
    @memo
    menuItemContentModifier(value: ContentModifier<MenuItemConfiguration>): this;
    @memo
    divider(value: DividerOptions | undefined): this;
}
export interface MenuItemConfiguration extends CommonConfiguration<MenuItemConfiguration> {
    value: ResourceStr;
    icon?: ResourceStr;
    symbolIcon?: SymbolGlyphModifier;
    selected: boolean;
    index: number;
    triggerSelect(index: number, value: string): void
}
@memo
@ComponentBuilder
export declare function Select(
    options: Array<SelectOption>, 
    @memo
    content_?: () => void,
): SelectAttribute
