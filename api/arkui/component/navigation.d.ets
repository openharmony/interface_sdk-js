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

import { SystemBarStyle, Length, ResourceStr, ResourceColor, Dimension, VisualEffect, Filter, UniformDataType, Blender, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, Position, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, AccessibilityOptions, PixelMap } from './units'
import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { Resource } from './../../../api/global/resource'
import { CustomBuilder, BlurStyle, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, TouchEvent, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, LayoutSafeAreaType, LayoutSafeAreaEdge } from './common'
import { TitleHeight, HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey } from './enums'
import { SymbolGlyphModifier } from './../../../api/arkui/SymbolGlyphModifier'

import { LengthMetrics } from './../Graphics'
import { TextModifier } from './../../../api/arkui/TextModifier'

export interface NavigationCommonTitle {
    main: string | Resource;
    sub: string | Resource;
}
export interface NavigationCustomTitle {
    builder: CustomBuilder;
    height: TitleHeight | Length;
}
export enum NavigationMode {
    STACK = 0,
    Stack = 0,
    SPLIT = 1,
    Split = 1,
    AUTO = 2,
    Auto = 2
}
export enum NavBarPosition {
    START = 0,
    Start = 0,
    END = 1,
    End = 1
}
export enum NavigationTitleMode {
    FREE = 0,
    Free = 0,
    FULL = 1,
    Full = 1,
    MINI = 2,
    Mini = 2
}
export interface NavigationMenuItem {
    value: string | Resource;
    icon?: string | Resource;
    symbolIcon?: SymbolGlyphModifier;
    isEnabled?: boolean;
    action?: (() => void);
}
export interface PopInfo {
    info: NavPathInfo;
    result: Object;
}
export type Callback_PopInfo_Void = (parameter: PopInfo) => void;
export interface NavPathInfo {
    name: string;
    param?: object;
    onPop?: ((parameter: PopInfo) => void);
    isEntry?: boolean;
}
export enum LaunchMode {
    STANDARD = 0,
    MOVE_TO_TOP_SINGLETON = 1,
    POP_TO_SINGLETON = 2,
    NEW_INSTANCE = 3
}
export interface NavigationOptions {
    launchMode?: LaunchMode;
    animated?: boolean;
}
export declare class NavPathStack {
    pushPath(info: NavPathInfo, animated?: boolean): void

    pushDestination(info: NavPathInfo, animated?: boolean): Promise<void>

    pushPathByName(name: string, param: object, animated?: boolean): void

    pushDestinationByName(name: string, param: Object, animated?: boolean): Promise<void>

    replacePath(info: NavPathInfo, animated?: boolean): void

    replaceDestination(info: NavPathInfo, options?: NavigationOptions): Promise<void>
    replacePathByName(name: string, param: Object, animated?: boolean): void
    removeByIndexes(indexes: Array<number>): number
    removeByName(name: string): number
    removeByNavDestinationId(navDestinationId: string): boolean
    pop(animated?: boolean): NavPathInfo | undefined

    popToName(name: string, animated?: boolean): number

    popToIndex(index: number, animated?: boolean): void

    moveToTop(name: string, animated?: boolean): number
    moveIndexToTop(index: number, animated?: boolean): void
    clear(animated?: boolean): void
    getAllPathName(): Array<string>
    getParamByIndex(index: number): object | undefined
    getParamByName(name: string): Array<object>
    getIndexByName(name: string): Array<number>
    getParent(): NavPathStack | undefined
    size(): number
    disableAnimation(value: boolean): void
    setInterception(interception: NavigationInterception): void
}
export type NavBar = string;
export type InterceptionShowCallback = (from:  NavBar, to: NavBar,
    operation: NavigationOperation, isAnimated: boolean) => void;
export type InterceptionModeCallback = (mode: NavigationMode) => void;
export interface NavigationInterception {
    willShow?: InterceptionShowCallback;
    didShow?: InterceptionShowCallback;
    modeChange?: InterceptionModeCallback;
}
export interface NavigationInterface {
    invoke(): NavigationAttribute;

}
export enum ToolbarItemStatus {
    NORMAL = 0,
    DISABLED = 1,
    ACTIVE = 2
}
export enum NavigationOperation {
    PUSH = 1,
    POP = 2,
    REPLACE = 3
}
export interface ToolbarItem {
    value: ResourceStr;
    icon?: ResourceStr;
    symbolIcon?: SymbolGlyphModifier;
    action?: (() => void);
    status?: ToolbarItemStatus;
    activeIcon?: ResourceStr;
    activeSymbolIcon?: SymbolGlyphModifier;
}
export interface NavigationTitleOptions {
    backgroundColor?: ResourceColor;
    backgroundBlurStyle?: BlurStyle;
    barStyle?: BarStyle;
    paddingStart?: LengthMetrics;
    paddingEnd?: LengthMetrics;
    mainTitleModifier?: TextModifier;
    subTitleModifier?: TextModifier;
    enableHoverMode?: boolean;
}
export enum BarStyle {
    STANDARD = 0,
    STACK = 1,
    SAFE_AREA_PADDING = 2
}
export interface NavigationToolbarOptions {
    backgroundColor?: ResourceColor;
    backgroundBlurStyle?: BlurStyle;
    barStyle?: BarStyle;
}
export type Tuple_Dimension_Dimension = [
    Dimension,
    Dimension
]
export type Callback_NavigationTitleMode_Void = (titleMode: NavigationTitleMode) => void;
export type Callback_NavigationMode_Void = (mode: NavigationMode) => void;
export type Callback_String_Unknown_Void = (name: string, param: object) => void;
export type Type_NavigationAttribute_customNavContentTransition_delegate = (from: NavContentInfo, to: NavContentInfo,
    operation: NavigationOperation) => NavigationAnimatedTransition | undefined;
export interface NavigationAttribute extends CommonMethod {
    @memo
    navBarWidth(value: Length): this;
    @memo
    navBarPosition(value: NavBarPosition): this;
    @memo
    navBarWidthRange(value: [ Dimension, Dimension ]): this;
    @memo
    minContentWidth(value: Dimension): this;
    @memo
    mode(value: NavigationMode): this;
    @memo
    backButtonIcon(value: string | PixelMap | Resource | SymbolGlyphModifier): this;
    @memo
    hideNavBar(value: boolean): this;
    @memo
    subTitle(value: string): this;
    @memo
    hideTitleBar(value: boolean): this;
    @memo
    hideBackButton(value: boolean): this;
    @memo
    titleMode(value: NavigationTitleMode): this;
    @memo
    menus(value: Array<NavigationMenuItem> | CustomBuilder): this;
    @memo
    toolBar(value: Object | CustomBuilder): this;
    @memo
    hideToolBar(value: boolean): this;
    @memo
    onTitleModeChange(value: ((titleMode: NavigationTitleMode) => void)): this;
    @memo
    onNavBarStateChange(value: ((parameter: boolean) => void)): this;
    @memo
    onNavigationModeChange(value: ((mode: NavigationMode) => void)): this;
    @memo
    navDestination(value: ((name: string,param: object) => void)): this;
    @memo
        customNavContentTransition(value: ((from: NavContentInfo,to: NavContentInfo,
        operation: NavigationOperation) => NavigationAnimatedTransition | undefined)): this;
    @memo
    systemBarStyle(value: SystemBarStyle | undefined): this;
    @memo
    recoverable(value: boolean | undefined): this;
    @memo
    enableDragBar(value: boolean | undefined): this;
}
export type Callback_NavigationTransitionProxy_Void = (transitionProxy: NavigationTransitionProxy) => void;
export interface NavigationAnimatedTransition {
    onTransitionEnd?: ((parameter: boolean) => void);
    timeout?: number;
    isInteractive?: boolean;
    transition: ((transitionProxy: NavigationTransitionProxy) => void);
}
export interface NavigationTransitionProxy {
    from: NavContentInfo;
    to: NavContentInfo;
    isInteractive?: boolean;
    finishTransition(): void
    cancelTransition(): void
    updateTransition(progress: number): void
}
export interface NavContentInfo {
    name?: string;
    index: number;
    param?: Object;
    navDestinationId?: string;
}
