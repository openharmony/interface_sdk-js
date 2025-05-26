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
import { LengthMetricsUnit, LengthMetrics } from './../Graphics'
import { Matrix2D } from './matrix2d'
import { PixelMap, VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, ResourceColor, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions, VoidCallback } from './units'
import { FrameNode } from './../FrameNode'
import { ImageAnalyzerConfig, ImageAIOptions } from './imageCommon'
import { Callback_Void } from './abilityComponent'
import { CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, CustomBuilder, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback } from './common'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey } from './enums'
import { CircleShape, EllipseShape, PathShape, RectShape } from './../../../api/@ohos.arkui.shape'
import { ResizableOptions } from './image'
import { Resource } from './../../../api/global/resource'
import { FocusBoxStyle, FocusPriority } from './focus'
import { GestureInfo, BaseGestureEvent, GestureJudgeResult, GestureType, GestureMask } from './gesture'
export type CanvasFillRule = string;
export type CanvasLineCap = string;
export type CanvasLineJoin = string;
export type CanvasDirection = string;
export type CanvasTextAlign = string;
export type CanvasTextBaseline = string;
export type ImageSmoothingQuality = string;
export interface CanvasGradient {
    addColorStop(offset: number, color: string): void
}
export interface CanvasPath {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
    closePath(): void
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number,
        endAngle: number, counterclockwise?: boolean): void
    lineTo(x: number, y: number): void
    moveTo(x: number, y: number): void
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
    rect(x: number, y: number, w: number, h: number): void
}
export interface Path2D extends CanvasPath {
    addPath(path: Path2D, transform?: Matrix2D): void
}
export interface CanvasPattern {
    setTransform(transform?: Matrix2D): void
}
export interface TextMetrics {
    actualBoundingBoxAscent: number;
    actualBoundingBoxDescent: number;
    actualBoundingBoxLeft: number;
    actualBoundingBoxRight: number;
    alphabeticBaseline: number;
    emHeightAscent: number;
    emHeightDescent: number;
    fontBoundingBoxAscent: number;
    fontBoundingBoxDescent: number;
    hangingBaseline: number;
    ideographicBaseline: number;
    width: number;
    height: number;
}
export interface ImageBitmap {
    readonly height: number;
    readonly width: number;
    close(): void
}
export interface ImageData {
    readonly data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
}
export interface RenderingContextSettings {
    antialias?: boolean;
}
export interface CanvasRenderer extends CanvasPath {
    globalAlpha: number;
    globalCompositeOperation: string;
    fillStyle: string | number | CanvasGradient | CanvasPattern;
    strokeStyle: string | number | CanvasGradient | CanvasPattern;
    filter: string;
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: ImageSmoothingQuality;
    lineCap: CanvasLineCap;
    lineDashOffset: number;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
    miterLimit: number;
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    direction: CanvasDirection;
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number): void


    beginPath(): void
    clip(fillRule?: CanvasFillRule): void

    fill(fillRule?: CanvasFillRule): void

    stroke(): void

    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient
    createPattern(image: ImageBitmap, repetition: string | undefined): CanvasPattern | undefined
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient
    createConicGradient(startAngle: number, x: number, y: number): CanvasGradient
    createImageData(sw: number, sh: number): ImageData

    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData
    getPixelMap(sx: number, sy: number, sw: number, sh: number): PixelMap
    putImageData(imagedata: ImageData, dx: number | string, dy: number | string): void

    getLineDash(): Array<number>
    setLineDash(segments: Array<number>): void
    clearRect(x: number, y: number, w: number, h: number): void
    fillRect(x: number, y: number, w: number, h: number): void
    strokeRect(x: number, y: number, w: number, h: number): void
    restore(): void
    save(): void
    fillText(text: string, x: number, y: number, maxWidth?: number): void
    measureText(text: string): TextMetrics
    strokeText(text: string, x: number, y: number, maxWidth?: number): void
    getTransform(): Matrix2D
    resetTransform(): void
    rotate(angle: number): void
    scale(x: number, y: number): void
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void

    transform(a: number, b: number, c: number, d: number, e: number, f: number): void
    translate(x: number, y: number): void
    setPixelMap(value?: PixelMap): void
    transferFromImageBitmap(bitmap: ImageBitmap): void
    saveLayer(): void
    restoreLayer(): void
    reset(): void
}
export interface CanvasRenderingContext2D extends CanvasRenderer {
    readonly height: number;
    readonly width: number;
    readonly canvas: FrameNode;
    toDataURL(type?: string | undefined, quality?: float | undefined): string
    startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>
    stopImageAnalyzer(): void
    onOnAttach(callback_: (() => void)): void
    offOnAttach(callback_?: (() => void)): void
    onOnDetach(callback_: (() => void)): void
    offOnDetach(callback_?: (() => void)): void
}
export interface OffscreenCanvasRenderingContext2D extends CanvasRenderer {
    toDataURL(type?: string | undefined, quality?: float | undefined): string
    transferToImageBitmap(): ImageBitmap
}
export interface OffscreenCanvas {
    height: number;
    width: number;
    transferToImageBitmap(): ImageBitmap
    getContext2d(options?: RenderingContextSettings): OffscreenCanvasRenderingContext2D
}
export interface Size {
    width: number;
    height: number;
}
export interface DrawingRenderingContext {
    readonly size: Size;
    invalidate(): void
}
export interface CanvasInterface {
    invoke(context?: CanvasRenderingContext2D | DrawingRenderingContext): CanvasAttribute;

}
export interface CanvasAttribute extends CommonMethod {
    @memo
    onReady(value: VoidCallback): this;
    @memo
    enableAnalyzer(value: boolean): this;
}
@memo
@ComponentBuilder
export declare function Canvas(
    context?: CanvasRenderingContext2D | DrawingRenderingContext | undefined | CanvasRenderingContext2D | DrawingRenderingContext | undefined, imageAIOptions?: ImageAIOptions | undefined,
    @memo
    content_?: () => void,
): CanvasAttribute
