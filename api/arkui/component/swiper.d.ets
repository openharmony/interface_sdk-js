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

import { VoidCallback, Length, ResourceColor, VP, Font, VisualEffect, Filter, UniformDataType, Blender, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, PixelMap } from './units'
import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { LengthMetrics } from './../Graphics'
import { CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, ICurve, Optional } from './common'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, EdgeEffect, Curve, PageFlipMode } from './enums'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Resource } from './../../../api/global/resource'
import { Callback_Void } from './abilityComponent'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
import { IndicatorComponentController } from './indicatorcomponent'
import { Callback_Number_Void } from './alphabetIndexer'
export declare class SwiperController {
    showNext(): undefined
    showPrevious(): undefined
    changeIndex(index: number, useAnimation?: boolean): undefined
    finishAnimation(callback_?: VoidCallback): undefined
    preloadItems(indices: Optional<Array<number>>): undefined
}
export declare class Indicator<T> {
    left(value: Length): T
    top(value: Length): T
    right(value: Length): T
    bottom(value: Length): T
    start(value: LengthMetrics): T
    end(value: LengthMetrics): T
    dot(): DotIndicator
    digit(): DigitIndicator
}
export declare class DotIndicator extends Indicator<DotIndicator> {
    itemWidth(value: Length): DotIndicator
    itemHeight(value: Length): DotIndicator
    selectedItemWidth(value: Length): DotIndicator
    selectedItemHeight(value: Length): DotIndicator
    mask(value: boolean): DotIndicator
    color(value: ResourceColor): DotIndicator
    selectedColor(value: ResourceColor): DotIndicator
    maxDisplayCount(maxDisplayCount: number): DotIndicator
}
export interface SwiperAutoFill {
    minSize: VP;
}
export declare class DigitIndicator extends Indicator<DigitIndicator> {
    fontColor(value: ResourceColor): DigitIndicator
    selectedFontColor(value: ResourceColor): DigitIndicator
    digitFont(value: Font): DigitIndicator
    selectedDigitFont(value: Font): DigitIndicator
}
export interface ArrowStyle {
    showBackground?: boolean;
    isSidebarMiddle?: boolean;
    backgroundSize?: Length;
    backgroundColor?: ResourceColor;
    arrowSize?: Length;
    arrowColor?: ResourceColor;
}
export enum SwiperDisplayMode {
    LEGACY_STRETCH = 0,
    Stretch = 0,
    LEGACY_AUTO_LINEAR = 1,
    AutoLinear = 1,
    STRETCH = 2,
    AUTO_LINEAR = 3
}
export interface AutoPlayOptions {
  stopWhenTouched: boolean;
}
export type SwiperInterface = (controller?: SwiperController) => SwiperAttribute;
export interface IndicatorStyle {
    left?: Length;
    top?: Length;
    right?: Length;
    bottom?: Length;
    size?: Length;
    mask?: boolean;
    color?: ResourceColor;
    selectedColor?: ResourceColor;
}
export interface SwiperAnimationEvent {
    currentOffset: number;
    targetOffset: number;
    velocity: number;
}
export enum SwiperNestedScrollMode {
    SELF_ONLY = 0,
    SELF_FIRST = 1
}
export type OnSwiperAnimationStartCallback = (index: number, targetIndex: number,
    extraInfo: SwiperAnimationEvent) => void;
export type OnSwiperAnimationEndCallback = (index: number, extraInfo: SwiperAnimationEvent) => void;
export type OnSwiperGestureSwipeCallback = (index: number, extraInfo: SwiperAnimationEvent) => void;
export interface SwiperAttribute extends CommonMethod {
    @memo
    index(value: number): this;
    @memo
    autoPlay(value: boolean): this;
    @memo
    interval(value: number): this;
    @memo
    indicator(value: DotIndicator | DigitIndicator | boolean): this;

    @memo
    loop(value: boolean): this;
    @memo
    duration(value: number): this;
    @memo
    vertical(value: boolean): this;
    @memo
    itemSpace(value: number | string): this;
    @memo
    displayMode(value: SwiperDisplayMode): this;
    @memo
    cachedCount(value: number): this;
    @memo
    effectMode(value: EdgeEffect): this;
    @memo
    disableSwipe(value: boolean): this;
    @memo
    curve(value: Curve | string | ICurve): this;
    @memo
    onChange(value: ((index: number) => void)): this;
    @memo
    indicatorStyle(value: IndicatorStyle): this;
    @memo
    prevMargin(value: Length, ignoreBlank?: boolean): this;
    @memo
    nextMargin(value: Length, ignoreBlank?: boolean): this;
    @memo
    displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean): this;
    @memo
    autoPlay(autoPlay: boolean, options: AutoPlayOptions): this;
    @memo
    cachedCount(count: number, isShown: boolean): this;
    @memo
    displayArrow(value: ArrowStyle | boolean, isHoverShow?: boolean): this;
    @memo
    pageFlipMode(mode: Optional<PageFlipMode>): this;

    @memo
    onAnimationStart(value: OnSwiperAnimationStartCallback): this;
    @memo
    onAnimationEnd(value: OnSwiperAnimationEndCallback): this;
    @memo
    onGestureSwipe(value: OnSwiperGestureSwipeCallback): this;
    @memo
    nestedScroll(value: SwiperNestedScrollMode): this;
    @memo
    customContentTransition(value: SwiperContentAnimatedTransition): this;
    @memo
    onContentDidScroll(value: ContentDidScrollCallback): this;
    @memo
    indicatorInteractive(value: boolean): this;
}
export type Callback_SwiperContentTransitionProxy_Void = (parameter: SwiperContentTransitionProxy) => void;
export interface SwiperContentAnimatedTransition {
    timeout?: number;
    transition: ((parameter: SwiperContentTransitionProxy) => void);
}
export interface SwiperContentTransitionProxy {
    selectedIndex: number;
    index: number;
    position: number;
    mainAxisLength: number;
    finishTransition(): void
}
export type ContentDidScrollCallback = (selectedIndex: number, index: number, position: number,
    mainAxisLength: number) => void;
@memo
@ComponentBuilder
export declare function Swiper(
    controller?: SwiperController | undefined, 
    @memo
    content_?: () => void,
): SwiperAttribute
