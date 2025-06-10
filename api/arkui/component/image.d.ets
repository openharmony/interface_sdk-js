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

import { DrawableDescriptor } from './../../../api/@ohos.arkui.drawableDescriptor'
import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { ResolutionQuality, PixelMap, ResourceStr, VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, ResourceColor, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, ColorFilter } from './units'
import { ImageAIOptions, ImageAnalyzerConfig } from './imageCommon'
import { CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, PointLightStyle } from './common'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, ImageFit, CopyOptions } from './enums'
import { Resource } from './../../../api/global/resource'

export enum ImageRenderMode {
    ORIGINAL = 0,
    Original = 0,
    TEMPLATE = 1,
    Template = 1
}
export enum ImageContent {
    EMPTY = 0
}
export enum DynamicRangeMode {
    HIGH = 0,
    CONSTRAINT = 1,
    STANDARD = 2
}
export enum ImageInterpolation {
    NONE = 0,
    None = 0,
    LOW = 1,
    Low = 1,
    MEDIUM = 2,
    Medium = 2,
    HIGH = 3,
    High = 3
}
export interface ImageInterface {
    invoke(src: PixelMap | ResourceStr | DrawableDescriptor): ImageAttribute;


}
export interface ImageSourceSize {
    width: number;
    height: number;
}
export interface Type_ImageAttribute_onComplete_callback_event {
    width: number;
    height: number;
    componentWidth: number;
    componentHeight: number;
    loadingStatus: number;
    contentWidth: number;
    contentHeight: number;
    contentOffsetX: number;
    contentOffsetY: number;
}
export type Callback_Type_ImageAttribute_onComplete_callback_event_Void = (event?: Type_ImageAttribute_onComplete_callback_event) => void;
export interface ImageAttribute extends CommonMethod {
    @memo
    alt(value: string | Resource | PixelMap): this;
    @memo
    matchTextDirection(value: boolean): this;
    @memo
    fitOriginalSize(value: boolean): this;
    @memo
    fillColor(value: ResourceColor): this;
    @memo
    objectFit(value: ImageFit): this;
    @memo
    objectRepeat(value: ImageRepeat): this;
    @memo
    autoResize(value: boolean): this;
    @memo
    renderMode(value: ImageRenderMode): this;
    @memo
    dynamicRangeMode(value: DynamicRangeMode): this;
    @memo
    interpolation(value: ImageInterpolation): this;
    @memo
    sourceSize(value: ImageSourceSize): this;
    @memo
    syncLoad(value: boolean): this;
    @memo
    copyOption(value: CopyOptions): this;
    @memo
    draggable(value: boolean): this;
    @memo
    pointLight(value: PointLightStyle): this;
    @memo
    edgeAntialiasing(value: number): this;
    @memo
    onComplete(value: ((event?: Type_ImageAttribute_onComplete_callback_event) => void)): this;
    @memo
    onError(value: ImageErrorCallback): this;
    @memo
    onFinish(value: (() => void)): this;
    @memo
    enableAnalyzer(value: boolean): this;
    @memo
    analyzerConfig(value: ImageAnalyzerConfig): this;
    @memo
    resizable(value: ResizableOptions): this;
    @memo
    privacySensitive(value: boolean): this;
    @memo
    enhancedImageQuality(value: ResolutionQuality): this;
}
export type ImageErrorCallback = (error: ImageError) => void;
export interface ImageError {
    componentWidth: number;
    componentHeight: number;
    message: string;
}
export interface ResizableOptions {
    slice?: EdgeWidths;
}
@memo
@ComponentBuilder
export declare function Image(
    src: PixelMap | ResourceStr | DrawableDescriptor | PixelMap | ResourceStr | DrawableDescriptor | ImageContent, imageAIOptions?: ImageAIOptions | undefined, 
    @memo
    content_?: () => void,
): ImageAttribute
