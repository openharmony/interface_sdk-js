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

import { Resource as Resource_ } from './../../../api/global/resource'
import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { LengthMetrics, LengthMetricsUnit } from './../Graphics'
import { BorderStyle, Color, FontWeight, FontStyle } from './enums'
import { OutlineStyle } from './common'
import _want from '../../../api/@ohos.app.ability.Want'
import _context from '../../application/Context'
import _image from '../../../api/@ohos.multimedia.image'
import _pointer from '../../../api/@ohos.multimodalInput.pointer'
import _unifieddatachannel from '../../../api/@ohos.data.unifiedDataChannel'
import _uniformtypedescriptor from '../../../api/@ohos.data.uniformTypeDescriptor'
import _observer from '../../../api/@ohos.arkui.observer'
import _uieffect from '../../../api/@ohos.graphics.uiEffect'
import _intl from '../../../api/@ohos.intl'
import _window from '../../../api/@ohos.window'
export type Want = _want
export type Context = _context
export type PixelMap = _image.PixelMap
export type ResolutionQuality = NullishType
export type PointerStyle = _pointer.PointerStyle
export type UnifiedData = _unifieddatachannel.UnifiedData
export type Summary = _unifieddatachannel.Summary
export type UniformDataType = _uniformtypedescriptor.UniformDataType
export type NavDestinationInfo = _observer.NavDestinationInfo
export type NavigationInfo = _observer.NavigationInfo
export type RouterPageInfo = _observer.RouterPageInfo
export type VisualEffect = _uieffect.VisualEffect
export type Filter = _uieffect.Filter
export type Blender = NullishType
export type DateTimeOptions = _intl.DateTimeOptions
export type WindowStatusType = _window.WindowStatusType
export type SystemBarStyle = _window.SystemBarStyle
export type RestrictedWorker = string
export type Length = string | number | Resource_;
export type PX = string;
export type VP = string | number;
export type FP = string;
export type LPX = string;
export type Percentage = string;
export type Degree = string;
export type Dimension = PX | VP | FP | LPX | Percentage | Resource_;
export type ResourceStr = string | Resource_;
export type Resource = Resource_
export interface Padding {
    top?: Length;
    right?: Length;
    bottom?: Length;
    left?: Length;
}
export interface LocalizedPadding {
    top?: LengthMetrics;
    end?: LengthMetrics;
    bottom?: LengthMetrics;
    start?: LengthMetrics;
}
export type Margin = Padding;
export type EdgeWidth = EdgeWidths;
export interface EdgeWidths {
    top?: Length;
    right?: Length;
    bottom?: Length;
    left?: Length;
}
export interface LocalizedEdgeWidths {
    top?: LengthMetrics;
    end?: LengthMetrics;
    bottom?: LengthMetrics;
    start?: LengthMetrics;
}
export interface EdgeOutlineWidths {
    top?: Dimension;
    right?: Dimension;
    bottom?: Dimension;
    left?: Dimension;
}
export interface BorderRadiuses {
    topLeft?: Length;
    topRight?: Length;
    bottomLeft?: Length;
    bottomRight?: Length;
}
export interface LocalizedBorderRadiuses {
    topStart?: LengthMetrics;
    topEnd?: LengthMetrics;
    bottomStart?: LengthMetrics;
    bottomEnd?: LengthMetrics;
}
export interface OutlineRadiuses {
    topLeft?: Dimension;
    topRight?: Dimension;
    bottomLeft?: Dimension;
    bottomRight?: Dimension;
}
export interface EdgeColors {
    top?: ResourceColor;
    right?: ResourceColor;
    bottom?: ResourceColor;
    left?: ResourceColor;
}
export interface LocalizedEdgeColors {
    top?: ResourceColor;
    end?: ResourceColor;
    bottom?: ResourceColor;
    start?: ResourceColor;
}
export type LocalizedMargin = LocalizedPadding;
export interface EdgeStyles {
    top?: BorderStyle;
    right?: BorderStyle;
    bottom?: BorderStyle;
    left?: BorderStyle;
}
export interface EdgeOutlineStyles {
    top?: OutlineStyle;
    right?: OutlineStyle;
    bottom?: OutlineStyle;
    left?: OutlineStyle;
}
export interface Offset {
    dx: Length;
    dy: Length;
}
export type ResourceColor = Color | number | string | Resource_;
export interface LengthConstrain {
    minLength: Length;
    maxLength: Length;
}
export type VoidCallback = () => void;
export interface Font {
    size?: Length;
    weight?: FontWeight | number | string;
    family?: string | Resource_;
    style?: FontStyle;
}
export interface Area {
    width: Length;
    height: Length;
    position: Position;
    globalPosition: Position;
}
export interface Position {
    x?: Length;
    y?: Length;
}
export interface LocalizedPosition {
    start?: LengthMetrics;
    top?: LengthMetrics;
}
export interface Edges {
    top?: Dimension;
    left?: Dimension;
    bottom?: Dimension;
    right?: Dimension;
}
export interface LocalizedEdges {
    top?: LengthMetrics;
    start?: LengthMetrics;
    bottom?: LengthMetrics;
    end?: LengthMetrics;
}
export interface Bias {
    horizontal?: number;
    vertical?: number;
}
export interface ConstraintSizeOptions {
    minWidth?: Length;
    maxWidth?: Length;
    minHeight?: Length;
    maxHeight?: Length;
}
export interface SizeOptions {
    width?: Length;
    height?: Length;
}
export interface BorderOptions {
    width?: EdgeWidths | Length | LocalizedEdgeWidths;
    color?: EdgeColors | ResourceColor | LocalizedEdgeColors;
    radius?: BorderRadiuses | Length | LocalizedBorderRadiuses;
    style?: EdgeStyles | BorderStyle;
    dashGap?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;
    dashWidth?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;
}
export interface OutlineOptions {
    width?: EdgeOutlineWidths | Dimension;
    color?: EdgeColors | ResourceColor | LocalizedEdgeColors;
    radius?: OutlineRadiuses | Dimension;
    style?: EdgeOutlineStyles | OutlineStyle;
}
export interface MarkStyle {
    strokeColor?: ResourceColor;
    size?: Length;
    strokeWidth?: Length;
}
export interface ColorFilter {
}
export interface TouchPoint {
    x: Dimension;
    y: Dimension;
}
export interface DirectionalEdgesT {
    start: number;
    end: number;
    top: number;
    bottom: number;
}
export interface DividerStyleOptions {
    strokeWidth?: LengthMetrics;
    color?: ResourceColor;
    startMargin?: LengthMetrics;
    endMargin?: LengthMetrics;
}
export interface ChainWeightOptions {
    horizontal?: number;
    vertical?: number;
}
export interface AccessibilityOptions {
    accessibilityPreferred?: boolean;
}